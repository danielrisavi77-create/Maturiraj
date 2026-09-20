/* Auto-generated index for hrvatskiSimulatorData — DO NOT EDIT */
/* Regenerate with: node scripts/split-simulator-data.mjs */

import { QS_2010_zima_B, QS_2010_jesen_B, QS_2010_zima_A, QS_2010_jesen_A, QS_2010_ljeto_A, QS_2010_ljeto_B, ESEJ_T1_2010_jesen_B, ESEJ_T2_2010_jesen_B } from './exam2010.js';
import { QS_2011_zima_B, QS_2011_jesen_B, QS_2011_ljeto_A, QS_2011_zima_A, QS_2011_jesen_A, QS_2011_ljeto_B, ESEJ_T1_2011_ljeto_B, ESEJ_T2_2011_ljeto_B, ESEJ_T1_2011_jesen_B, ESEJ_T2_2011_jesen_B, ESEJ_T1_2011_zima } from './exam2011.js';
import { QS_2012_jesen_A, QS_2012_zima_A, QS_2012_ljeto_A, QS_2012_zima_B, QS_2012_jesen_B, QS_2012_ljeto_B, ESEJ_2012_ljeto_B, ESEJ_2012_jesen_B, ESEJ_2012_zima_B } from './exam2012.js';
import { QS_2013_jesen_B, QS_2013_ljeto_A, QS_2013_jesen_A, QS_2013_ljeto_B, ESEJ_T1_2013_ljeto_B, ESEJ_T1_2013_jesen_B, ESEJ_T2_2013_jesen_B } from './exam2013.js';
import { QS_2014_jesen_A, QS_2014_jesen_B, QS_2014_ljeto_A, QS_2014_ljeto_B, ESEJ_T1_2014_ljeto_B, ESEJ_T1_2014_jesen_B } from './exam2014.js';
import { QS_2015_jesen_A, QS_2015_jesen_B, QS_2015_ljeto_A, QS_2015_ljeto_B, ESEJ_T1_2015_ljeto_B, ESEJ_T1_2015_jesen, ESEJ_T2_2015_jesen } from './exam2015.js';
import { QS_2016_ljeto_A, QS_2016_ljeto_B, QS_2016_jesen_A, QS_2016_jesen_B, ESEJ_T1_2016_ljeto, ESEJ_T1_2016_jesen, ESEJ_T2_2016_jesen } from './exam2016.js';
import { QS_2017_ljeto_A, QS_2017_ljeto_B, QS_2017_jesen_A, QS_2017_jesen_B, ESEJ_T1_2017_ljeto, ESEJ_T2_2017_ljeto, ESEJ_T1_2017_jesen, ESEJ_T2_2017_jesen } from './exam2017.js';
import { QS_2018_ljeto_A, QS_2018_ljeto_B, QS_2018_jesen_A, QS_2018_jesen_B, ESEJ_T1_2018_ljeto, ESEJ_T2_2018_ljeto, ESEJ_T1_2018_jesen, ESEJ_T2_2018_jesen } from './exam2018.js';
import { QS_2019_ljeto_A, QS_2019_ljeto_B, QS_2019_jesen_A, QS_2019_jesen_B, ESEJ_T1_2019_ljeto, ESEJ_T1_2019_jesen } from './exam2019.js';
import { QS_2020_jesen_A, QS_2020_jesen_B, QS_2020_ljeto_A, QS_2020_ljeto_B, ESEJ_2020_jesen_B } from './exam2020.js';
import { QS_2021_ljeto_A, QS_2021_ljeto_B, QS_2021_jesen_A, QS_2021_jesen_B, ESEJ_T1_2021_ljeto, ESEJ_T1_2021_jesen, ESEJ_T2_2021_jesen } from './exam2021.js';
import { QS_2022_jesen_B, QS_2022_ljeto_B, QS_2022_ljeto_A, QS_2022_jesen_A, ESEJ_2022_jesen_B, ESEJ_T1_2022_ljeto } from './exam2022.js';
import { QS_2023_ljeto_B, QS_2023_jesen_B } from './exam2023.js';
import { QS_2024_ljeto_B, QS_2024_jesen_B } from './exam2024.js';
import { QS_2025_ljeto_B, QS_2025_jesen_B } from './exam2025.js';

// ── Constants & helpers ──
const LL=["A","B","C","D","E","F"];
const TLBL={mc:"Jedan odgovor",ms:"Više odgovora",sa:"Kratki odgovor",es:"Esej / Interpretacija",saz:"Sažetak teksta",mat:"Povezivanje"};
const TBDG={mc:"b-mc",ms:"b-ms",sa:"b-sa",es:"b-es",saz:"b-sa",mat:"b-mat"};
const XP_LEVELS=[0,100,250,450,700,1000,1400,1900,2500,3200];
const LEVEL_NAMES=["Početnik","Učenik","Marljivi","Napredni","Stručnjak","Maturant","Erudit","Magister","Profesor","Legenda"];
const TOPIC_LABELS={
  jez_gram:"Gramatika",
  jez_pravopis:"Pravopis",
  jez_leks:"Leksikologija",
  jez_stil:"Stilistika",
  jez_sint:"Sintaksa",
  jez_tvorba:"Tvorba riječi",
  knj_moderna:"Moderna",
  knj_avangarda:"Avangarda",
  knj_suvremena:"Suvremena književnost",
  knj_svjetska:"Svjetska književnost",
  knj_analiza:"Analiza teksta",
  knj_versif:"Versifikacija",
  jez_versif:"Versifikacija",
  sazetak:"Sažetak teksta",
  esej:"Interpretativni esej",
};
function stripLetterPrefix(str){return typeof str==="string"?str.replace(/^[A-F][.)]\s+/,""):str;}
function getLevel(xp){let l=0;XP_LEVELS.forEach((v,i)=>{if(xp>=v)l=i;});return l;}
function xpProgress(xp){const l=getLevel(xp);const cur=XP_LEVELS[l],next=XP_LEVELS[l+1]||XP_LEVELS[l]+500;return Math.min(100,Math.round((xp-cur)/(next-cur)*100));}
function xpToNext(xp){const l=getLevel(xp);const next=XP_LEVELS[l+1]||XP_LEVELS[l]+500;return Math.max(0,next-xp);}
function calcXpGain(pct,total){return Math.round((pct/100)*total*2+(pct>=70?20:0));}

// ── EXAMS ──
const EXAMS={
    "2010_jesen_A":{key:"2010_jesen_A",year:2010,season:"jesen",razina:"A",label:"Jesenski rok — Viša razina (A)",qs:QS_2010_jesen_A,pravi:true},
  "2010_jesen_B":{key:"2010_jesen_B",year:2010,season:"jesen",razina:"B",label:"Jesenski rok — Osnovna razina (B)",qs:QS_2010_jesen_B,pravi:true},
  "2010_ljeto_A":{key:"2010_ljeto_A",year:2010,season:"ljeto",razina:"A",label:"Ljetni rok — Viša razina (A)",qs:QS_2010_ljeto_A,pravi:true},
    "2010_ljeto_B":{key:"2010_ljeto_B",year:2010,season:"ljeto",razina:"B",label:"Ljetni rok — Osnovna razina (B)",qs:QS_2010_ljeto_B,pravi:true},
  "2010_zima_A":{key:"2010_zima_A",year:2010,season:"zima",razina:"A",label:"Zimski rok — Viša razina (A)",qs:QS_2010_zima_A,pravi:true},
  "2010_zima_B":{key:"2010_zima_B",year:2010,season:"zima",razina:"B",label:"Zimski rok — Osnovna razina (B)",qs:QS_2010_zima_B,pravi:true},
    "2011_zima_A":{key:"2011_zima_A",year:2011,season:"zima",razina:"A",label:"Zimski rok — Viša razina (A)",qs:QS_2011_zima_A,pravi:true},
  "2011_zima_B":{key:"2011_zima_B",year:2011,season:"zima",razina:"B",label:"Zimski rok — Osnovna razina (B)",qs:QS_2011_zima_B,pravi:true},
    "2012_zima_A":{key:"2012_zima_A",year:2012,season:"zima",razina:"A",label:"Zimski rok — Viša razina (A)",qs:QS_2012_zima_A,pravi:true},
  "2012_zima_B":{key:"2012_zima_B",year:2012,season:"zima",razina:"B",label:"Zimski rok — Osnovna razina (B)",qs:QS_2012_zima_B,pravi:true},
    "2012_ljeto_A":{key:"2012_ljeto_A",year:2012,season:"ljeto",razina:"A",label:"Ljetni rok — Viša razina (A)",qs:QS_2012_ljeto_A,pravi:true},
  "2012_ljeto_B":{key:"2012_ljeto_B",year:2012,season:"ljeto",razina:"B",label:"Ljetni rok — Osnovna razina (B)",qs:QS_2012_ljeto_B,pravi:true},
    "2012_jesen_A":{key:"2012_jesen_A",year:2012,season:"jesen",razina:"A",label:"Jesenski rok — Viša razina (A)",qs:QS_2012_jesen_A,pravi:true},
  "2012_jesen_B":{key:"2012_jesen_B",year:2012,season:"jesen",razina:"B",label:"Jesenski rok — Osnovna razina (B)",qs:QS_2012_jesen_B,pravi:true},
    "2013_ljeto_A":{key:"2013_ljeto_A",year:2013,season:"ljeto",razina:"A",label:"Ljetni rok — Viša razina (A)",qs:QS_2013_ljeto_A,pravi:true},
  "2013_ljeto_B":{key:"2013_ljeto_B",year:2013,season:"ljeto",razina:"B",label:"Ljetni rok — Osnovna razina (B)",qs:QS_2013_ljeto_B,pravi:true},
    "2011_ljeto_A":{key:"2011_ljeto_A",year:2011,season:"ljeto",razina:"A",label:"Ljetni rok — Viša razina (A)",qs:QS_2011_ljeto_A,pravi:true},
  "2011_ljeto_B":{key:"2011_ljeto_B",year:2011,season:"ljeto",razina:"B",label:"Ljetni rok — Osnovna razina (B)",qs:QS_2011_ljeto_B,pravi:true},
    "2011_jesen_A":{key:"2011_jesen_A",year:2011,season:"jesen",razina:"A",label:"Jesenski rok — Viša razina (A)",qs:QS_2011_jesen_A,pravi:true},
  "2011_jesen_B":{key:"2011_jesen_B",year:2011,season:"jesen",razina:"B",label:"Jesenski rok — Osnovna razina (B)",qs:QS_2011_jesen_B,pravi:true},
    "2013_jesen_A":{key:"2013_jesen_A",year:2013,season:"jesen",razina:"A",label:"Jesenski rok — Viša razina (A)",qs:QS_2013_jesen_A,pravi:true},
  "2013_jesen_B":{key:"2013_jesen_B",year:2013,season:"jesen",razina:"B",label:"Jesenski rok — Osnovna razina (B)",qs:QS_2013_jesen_B,pravi:true},
    "2014_jesen_A":{key:"2014_jesen_A",year:2014,season:"jesen",razina:"A",label:"Jesenski rok — Viša razina (A)",qs:QS_2014_jesen_A,pravi:true},
  "2014_jesen_B":{key:"2014_jesen_B",year:2014,season:"jesen",razina:"B",label:"Jesenski rok — Osnovna razina (B)",qs:QS_2014_jesen_B,pravi:true},
    "2014_ljeto_A":{key:"2014_ljeto_A",year:2014,season:"ljeto",razina:"A",label:"Ljetni rok — Viša razina (A)",qs:QS_2014_ljeto_A,pravi:true},
  "2014_ljeto_B":{key:"2014_ljeto_B",year:2014,season:"ljeto",razina:"B",label:"Ljetni rok — Osnovna razina (B)",qs:QS_2014_ljeto_B,pravi:true},
    "2015_jesen_A":{key:"2015_jesen_A",year:2015,season:"jesen",razina:"A",label:"Jesenski rok — Viša razina (A)",qs:QS_2015_jesen_A,pravi:true},
  "2015_jesen_B":{key:"2015_jesen_B",year:2015,season:"jesen",razina:"B",label:"Jesenski rok — Osnovna razina (B)",qs:QS_2015_jesen_B,pravi:true},
    "2015_ljeto_A":{key:"2015_ljeto_A",year:2015,season:"ljeto",razina:"A",label:"Ljetni rok — Viša razina (A)",qs:QS_2015_ljeto_A,pravi:true},
  "2015_ljeto_B":{key:"2015_ljeto_B",year:2015,season:"ljeto",razina:"B",label:"Ljetni rok — Osnovna razina (B)",qs:QS_2015_ljeto_B,pravi:true},
    "2016_jesen_A":{key:"2016_jesen_A",year:2016,season:"jesen",razina:"A",label:"Jesenski rok — Viša razina (A)",qs:QS_2016_jesen_A,pravi:true},
  "2016_jesen_B":{key:"2016_jesen_B",year:2016,season:"jesen",razina:"B",label:"Jesenski rok — Osnovna razina (B)",qs:QS_2016_jesen_B,pravi:true},
    "2016_ljeto_A":{key:"2016_ljeto_A",year:2016,season:"ljeto",razina:"A",label:"Ljetni rok — Viša razina (A)",qs:QS_2016_ljeto_A,pravi:true},
  "2016_ljeto_B":{key:"2016_ljeto_B",year:2016,season:"ljeto",razina:"B",label:"Ljetni rok — Osnovna razina (B)",qs:QS_2016_ljeto_B,pravi:true},
    "2017_jesen_A":{key:"2017_jesen_A",year:2017,season:"jesen",razina:"A",label:"Jesenski rok — Viša razina (A)",qs:QS_2017_jesen_A,pravi:true},
  "2017_jesen_B":{key:"2017_jesen_B",year:2017,season:"jesen",razina:"B",label:"Jesenski rok — Osnovna razina (B)",qs:QS_2017_jesen_B,pravi:true},
    "2017_ljeto_A":{key:"2017_ljeto_A",year:2017,season:"ljeto",razina:"A",label:"Ljetni rok — Viša razina (A)",qs:QS_2017_ljeto_A,pravi:true},
  "2017_ljeto_B":{key:"2017_ljeto_B",year:2017,season:"ljeto",razina:"B",label:"Ljetni rok — Osnovna razina (B)",qs:QS_2017_ljeto_B,pravi:true},
    "2018_jesen_A":{key:"2018_jesen_A",year:2018,season:"jesen",razina:"A",label:"Jesenski rok — Viša razina (A)",qs:QS_2018_jesen_A,pravi:true},
  "2018_jesen_B":{key:"2018_jesen_B",year:2018,season:"jesen",razina:"B",label:"Jesenski rok — Osnovna razina (B)",qs:QS_2018_jesen_B,pravi:true},
    "2018_ljeto_A":{key:"2018_ljeto_A",year:2018,season:"ljeto",razina:"A",label:"Ljetni rok — Viša razina (A)",qs:QS_2018_ljeto_A,pravi:true},
  "2018_ljeto_B":{key:"2018_ljeto_B",year:2018,season:"ljeto",razina:"B",label:"Ljetni rok — Osnovna razina (B)",qs:QS_2018_ljeto_B,pravi:true},
    "2019_jesen_A":{key:"2019_jesen_A",year:2019,season:"jesen",razina:"A",label:"Jesenski rok — Viša razina (A)",qs:QS_2019_jesen_A,pravi:true},
  "2019_jesen_B":{key:"2019_jesen_B",year:2019,season:"jesen",razina:"B",label:"Jesenski rok — Osnovna razina (B)",qs:QS_2019_jesen_B,pravi:true},
    "2019_ljeto_A":{key:"2019_ljeto_A",year:2019,season:"ljeto",razina:"A",label:"Ljetni rok — Viša razina (A)",qs:QS_2019_ljeto_A,pravi:true},
  "2019_ljeto_B":{key:"2019_ljeto_B",year:2019,season:"ljeto",razina:"B",label:"Ljetni rok — Osnovna razina (B)",qs:QS_2019_ljeto_B,pravi:true},
    "2020_ljeto_A":{key:"2020_ljeto_A",year:2020,season:"ljeto",razina:"A",label:"Ljetni rok — Viša razina (A)",qs:QS_2020_ljeto_A,pravi:true},
  "2020_ljeto_B":{key:"2020_ljeto_B",year:2020,season:"ljeto",razina:"B",label:"Ljetni rok — Osnovna razina (B)",qs:QS_2020_ljeto_B,pravi:true},
    "2021_jesen_A":{key:"2021_jesen_A",year:2021,season:"jesen",razina:"A",label:"Jesenski rok — Viša razina (A)",qs:QS_2021_jesen_A,pravi:true},
  "2021_jesen_B":{key:"2021_jesen_B",year:2021,season:"jesen",razina:"B",label:"Jesenski rok — Osnovna razina (B)",qs:QS_2021_jesen_B,pravi:true},
    "2020_jesen_A":{key:"2020_jesen_A",year:2020,season:"jesen",razina:"A",label:"Jesenski rok — Viša razina (A)",qs:QS_2020_jesen_A,pravi:true},
  "2020_jesen_B":{key:"2020_jesen_B",year:2020,season:"jesen",razina:"B",label:"Jesenski rok — Osnovna razina (B)",qs:QS_2020_jesen_B,pravi:true},
    "2021_ljeto_A":{key:"2021_ljeto_A",year:2021,season:"ljeto",razina:"A",label:"Ljetni rok — Viša razina (A)",qs:QS_2021_ljeto_A,pravi:true},
  "2021_ljeto_B":{key:"2021_ljeto_B",year:2021,season:"ljeto",razina:"B",label:"Ljetni rok — Osnovna razina (B)",qs:QS_2021_ljeto_B,pravi:true},
    "2022_jesen_B":{key:"2022_jesen_B",year:2022,season:"jesen",razina:"B",label:"Jesenski rok — Osnovna razina (B)",qs:QS_2022_jesen_B,pravi:true},
  "2022_jesen_A":{key:"2022_jesen_A",year:2022,season:"jesen",razina:"A",label:"Jesenski rok — Viša razina (A)",qs:QS_2022_jesen_A,pravi:true},
  "2023_ljeto":{key:"2023_ljeto",year:2023,season:"ljeto",razina:null,jedinstven:true,label:"Ljetni rok",qs:QS_2023_ljeto_B,pravi:true},
    "2023_jesen":{key:"2023_jesen",year:2023,season:"jesen",razina:null,jedinstven:true,label:"Jesenski rok",qs:QS_2023_jesen_B,pravi:true},
  "2024_jesen":{key:"2024_jesen",year:2024,season:"jesen",razina:null,jedinstven:true,label:"Jesenski rok",qs:QS_2024_jesen_B,pravi:true},
  "2024_ljeto":{key:"2024_ljeto",year:2024,season:"ljeto",razina:null,jedinstven:true,label:"Ljetni rok",qs:QS_2024_ljeto_B,pravi:true},
  "2025_jesen":{key:"2025_jesen",year:2025,season:"jesen",razina:null,jedinstven:true,label:"Jesenski rok",qs:QS_2025_jesen_B,pravi:true},
  "2025_ljeto":{key:"2025_ljeto",year:2025,season:"ljeto",razina:null,jedinstven:true,label:"Ljetni rok",qs:QS_2025_ljeto_B,pravi:true},
  "2022_ljeto_A":{key:"2022_ljeto_A",year:2022,season:"ljeto",razina:"A",label:"Ljetni rok — Viša razina (A)",qs:QS_2022_ljeto_A,pravi:true},  
  "2022_ljeto_B":{key:"2022_ljeto_B",year:2022,season:"ljeto",razina:"B",label:"Ljetni rok — Osnovna razina (B)",qs:QS_2022_ljeto_B,pravi:true},
};

const BROKEN_QS=[];
for(const k of Object.keys(EXAMS)){
  EXAMS[k].qs=EXAMS[k].qs.map(q=>q.opts?{...q,opts:q.opts.map(stripLetterPrefix)}:q);
  const broken=EXAMS[k].qs.filter(q=>q.broken===true);
  if(broken.length){BROKEN_QS.push(...broken.map(q=>({...q,examKey:k})));}
  EXAMS[k].qs=EXAMS[k].qs.filter(q=>q.broken!==true);
}

const SAZECI={
  "2023_ljeto":{
    key:"2023_ljeto",year:2023,season:"ljeto",
    label:"2022./2023. ljetni rok",
    trajanje:80,minRijeci:200,maxRijeci:250,
    tekstNaslov:"Snježana Mostarkić, O domaćoj zadaći",
    tekst:`Nakon niza sati provedenih sjedeći u učionici posljednje što želimo čuti jest da je pred nama dodatni rad vezan uz školu koji valja odraditi tijekom dragocjenoga vikenda. Iako je poznato da je riječ o odrednici tradicionalnoga školovanja, domaća zadaća kao tema izaziva brojna neslaganja i rasprave. Jedni smatraju da je neizostavan dio školovanja, dok drugi vjeruju da bi vrijeme potrebno za pisanje domaće zadaće moglo biti bolje uloženo.
        Brojni su razlozi zašto učenici trebaju pisati domaću zadaću. Jedan je od njih taj što ona potiče uvježbavanje. Iako može djelovati vremenski nefunkcionalno i dosadno u usporedbi s drugim aktivnostima, ponavljanje je potrebno kako bi se objasnili neki pojmovi i poboljšale pojedine vještine. Također, domaća zadaća može biti nešto što će roditelje uključiti u život njihove djece uz uvjet da žive u zdravom okružju. Roditelj koji djetetu pomaže ispuniti obveze domaće zadaće ujedno sudjeluje u djetetovu obrazovanju. Pritom se otvara mogućnost povezivanja i zbližavanja roditelja i djece. Domaća zadaća od mnogo je većega značenja negoli je to vidljivo u činu rješavanja dodijeljenih zadataka. Može razviti vještine upravljanja vremenom tako što upućuje učenike na planiranje te na potrebu da se svi zadatci riješe u zadanome roku. Učeći upravljati vremenom, učenici ujedno jačaju vještine vezane uz rješavanje problema i samostalno razmišljanje. Dobro je i što zadaća stvara vezu između škole i roditelja. Omogućuje bolje međusobno upoznavanje, a roditelji mogu vidjeti u kojem dijelu rada i učenja njihovo dijete nailazi na prepreke. Također, roditelji mogu saznati u čemu je dijete izvanredno. Danas mnoga djeca pred zaslonima provode znatno više vremena negoli bi to bilo dopustivo. Da ne idu u školu, to bi vrijeme bilo veće. Zadaće potiču učenike na razvijanje dobrih navika u učenju te pritom reduciraju vrijeme provedeno pred zaslonima. Zadaća se može promatrati i kao još jedna izvannastavna aktivnost. Mnoge obitelji ulažu mnogo vremena i novca u različite klubove i tečajeve kako bi ispunile djetetovo slobodno vrijeme, pa se, kao izvannastavna aktivnost, domaća zadaća može uvrstiti u učenikov dnevni raspored.
        Međutim, unatoč mnogim pozitivnim učincima pisanje zadaće ima i negativne učinke. Iako je vrijeme provedeno u učionici bitno, jednako je bitno i ono provedeno na dječjem igralištu. Ako se djeci dodjeljuje pretjerana količina zadaće, neće imati dovoljno vremena za igru, što može utjecati na njihov društveni razvoj i učenje. Istraživanja pokazuju da oni koji imaju više vremena za igru, u školi dobivaju bolje ocjene te dulje mogu održati pozornost. Djeca na nastavi provode duge sate sjedeći u učionici, a zadavanje domaće zadaće samo znači produljenje takvih sati. Sjedilački način života može biti opasan te može prouzročiti zdravstvene poteškoće kakva je primjerice pretilost. Domaća zadaća djeci oduzima vrijeme potrebno za tjelesnu aktivnost. Iako mnogi ljudi u obiteljskome domu vide dobro okružje za djecu da nastave s učenjem, nemaju sve obitelji dom koji je ujedno i zdravo okružje. Postoje roditelji koji ne pružaju ni najosnovniji oblik pomoći svojemu djetetu, a i oni koji bi to željeli, zbog osobnih barijera katkad ne mogu. Domaća zadaća može produbiti razlike među djecom i njihovim roditeljima te je to jedan od razloga zašto je zadavanje zadaće loš izbor. Opći je dogovor da učenici – sukladno razredu koji pohađaju – ne bi trebali dobiti više od deset minuta zadaće na dan. Međutim, većina učenika dobije znatno veću količinu domaće zadaće od preporučene. Zadavanje prevelike količine zadataka povećava razinu stresa i vodi u sagorijevanje. S druge strane, kako bi izbjegli pisanje domaće zadaće kod kuće, mnogi učenici radije varaju te prepisuju jedni od drugih ili preuzimaju ono što su pročitali na internetu.
        Argumenti suprotstavljenih strana o pitanju trebaju li učenici imati domaću zadaću uvjerljivi su i utemeljeni te se čini da nema jednostavnog odgovora na to pitanje. Roditelji i profesori i dalje će razmjenjivati razmišljanja i stavove, a učenici ostajati usred tih rasprava bez osobitoga prostora da i sami nešto kažu ili promijene. Bitno je shvatiti prednosti i nedostatke zadavanja domaćih zadaća kako bi se obje perspektive uzele u obzir i pronašlo najbolje rješenje. U konačnici svima je cilj dobrobit i uspjeh naših učenika.

Prilagođeno prema: www.skolskiportal.hr, Jesu li domaće zadaće potrebne ili štetne?`,
    smjernice:["Navedite opće podatke o polaznom tekstu (autor, naslov, vrsta teksta).","Odredite namjenu i temu teksta.","Navedite osnovne misli teksta i pojedinosti koje ih podupiru.","Odredite autorov stav o temi."],
  },
  "2023_jesen":{
    key:"2023_jesen",year:2023,season:"jesen",
    label:"2022./2023. jesenski rok",
    trajanje:80,minRijeci:200,maxRijeci:250,
    tekstNaslov:"Iris Jerončić Tomić i suradnici, Društvene mreže i samopoštovanje",
    tekst:`Samopoštovanje se odnosi na osobnu prosudbu vlastite vrijednosti. Odnosi se na pozitivnu ili negativnu procjenu svojega „ja" i na to koliko pojedinac smatra sebe vrijednim i kompetentnim. Uglavnom je stabilna osobina koja se razvija tijekom vremena i koja reagira na dnevne događaje i kontekste. Upotreba društvenih mreža i razina samopoštovanja dva su međusobno povezana konstrukta. Ono što radimo na internetu, osobito na društvenim mrežama, utječe na naše samopoštovanje jer ljudi žive dio svog života na društvenim mrežama.
        Osoba ima priliku oblikovati sliku o sebi upotrebljavajući društvene mreže poput Facebooka i Twittera. Objave odražavaju emocije i način na koji se osobe predstavljaju te mogu poslužiti za ispitivanje njihove osobnosti i razine samopoštovanja u mrežnim okruženjima. Društvene mreže mogu poboljšati samopoštovanje, uključujući percepciju fizičkog izgleda, odnosa s drugima i romantičnih veza, pogotovo kad osoba primi pozitivne povratne informacije od svojih vršnjaka i prijatelja na društvenim mrežama. Profil na društvenoj mreži omogućuje korisnicima kontrolu nad onim što objavljuju na mreži i kako se žele predstaviti drugima. Dakle, profil pomaže zadovoljiti potrebe pojedinca za očuvanjem vlastite vrijednosti i integriteta, što dovodi do pozitivnih osjećaja i više razine samopoštovanja.
        Svaki pojedinac, bez obzira na razinu samopoštovanja, ima potrebu pripadati društvenoj skupini, što postiže aktivnošću na društvenim mrežama. Belonging grupi potiče razvoj kolektivnog samopoštovanja i pojedincu predstavlja značajnu emocionalnu vrijednost. Komunikacija na društvenim mrežama može biti korisna za osobe s niskom razinom samopoštovanja jer im pomaže da se prilagode novoj sredini i da podignu razinu samopoštovanja. Osobe s nižom razinom samopoštovanja pokušavaju nadoknaditi nedostatak samopoštovanja povećanjem broja online prijatelja. Za razliku od njih osobe s višom razinom samopoštovanja češće upotrebljavaju društvene mreže za poboljšanje odnosa s ljudima koje poznaju nego za stjecanje novih prijatelja.
        Pored pozitivnog učinka na razinu samopoštovanja komunikacija na društvenim mrežama može imati i negativne učinke. Društvene mreže mogu doprinijeti nezadovoljstvu vlastitim tijelom kod oba spola. Idealno žensko tijelo prikazano u masovnim medijima utjelovljuje ideju mršave žene kao privlačne i poželjne. Nezadovoljstvo vlastitim tijelom i ulaganje u izgled važni su čimbenici rizika za probleme mentalnog zdravlja, prije svega poremećaja prehrane i depresije. Stope poremećaja prehrane među ženama, kao što su anoreksija, ortoreksija nervosa i bulimija, rastu. Sve više muškaraca zabrinuto je zbog oblika tijela i težine jer su svakodnevno izloženi medijskom pritisku. Na društvenim mrežama drugi prosuđuju objavljene fotografije i vrednuju ih lajkovima i komentarima što može dovesti do osjećaja prihvaćenosti ili odbijenosti.
        Društvene mreže čest su predmet istraživanja i neslaganja oko uzroka i posljedica njihova odnosa prema samopoštovanju i dobrobiti ljudi. Njihova upotreba može imati društvene i psihološki negativne učinke na ljude, ali s druge strane one mogu biti i vrlo korisne u kontekstu društvene povezanosti i pripadnosti.

Prilagođeno prema: https://hrcak.srce.hr/file/354676`,
    smjernice:["Navedite opće podatke o polaznom tekstu (autor, naslov, vrsta teksta).","Odredite namjenu i temu teksta.","Navedite osnovne misli teksta i pojedinosti koje ih podupiru.","Odredite autorov stav o temi."],
  },
  "2024_ljeto":{
    key:"2024_ljeto",year:2024,season:"ljeto",
    label:"2023./2024. ljetni rok",
    trajanje:80,minRijeci:200,maxRijeci:250,
    tekstNaslov:"Goran Mizdrak, O pčelama",
    tekst:`Drevni su narodi duboko shvaćali ulogu pčele u prirodi. Spominjanje pčela seže još u davna vremena neolitika kada su naši preci na zidovima pećina crtali i pčele. Američki su Indijanci još prije 6000 godina upotrebljavali med kao lijek i jelo. Tu sitnu posvećenu životinju iznimne inteligencije štovali su mnogi narodi. Pretpostavlja se da pčele žive na planetu Zemlji oko 110 milijuna godina, a danas ih raspoznajemo oko 20 000 vrsta.
        Zahvaljujući pčelama možemo uživati u raznim namirnicama, od jabuka i krušaka do kave i vanilije. Uloga pčela u prirodi iznimno je velika jer oprašuju biljke, bez čega ne bi bilo ni njihovih plodova, pa tako ni hrane za nas i životinjski svijet. Na Zemlji se samo oko 10 % biljaka cvjetnica oprašuje vjetrom, dok 90 % oprašuju insekti, a glavninu čine upravo pčele. Pčela može nositi više peludi i posjetiti više cvjetova od svih drugih oprašivača. Pčele oprašuju i biljke koje se koriste za prehranu životinja važnih u ljudskoj prehrani te pomažu u očuvanju ekosustava i bioraznolikosti — ljudska populacija bez njih ne može preživjeti.
        Osim što su same pčele važne, važni su i pčelinji proizvodi. Med se od davnina koristi kao prehrambeni proizvod i lijek — može biti dobar izvor antioksidansa, minerala i enzima, a zbog antibakterijskog djelovanja koristi se i kod liječenja rana. Pčelinji propolis štiti košnicu od kiše, hladnoće i bolesti te ima antibakterijsko djelovanje, može sniziti krvni tlak i ublažiti alergije. Matična mliječ bogata je hranjivim sastojcima poznatim po ljekovitim svojstvima — jača imunološki sustav, potiče zdravlje probave i bori se protiv upala. Način liječenja pčelinjim proizvodima naziva se apiterapija, a njezina srodna grana apipunktura upotrebljava pčelinji otrov.
        Da pčele život znače, znao je i Albert Einstein koji je izjavio: „Ako pčele nestanu s lica Zemlje, čovjeku kao vrsti neće preostati više od četiri godine života." Najveća prijetnja pčelama je čovjek koji proizvodnjom pesticida, onečišćenjem prirodnih staništa i sječom šuma uništava pčele. Kako biste sačuvali njihove živote, ali i ljudske — pazite na prirodu, ne zagađujte vodu i smanjite upotrebu pesticida. Zapamtite: bez pčela nema oprašivanja, nema ploda, nema hrane, a nema ni ljudi.

Prilagođeno prema: www.senzaciona.hr`,
    smjernice:["Navedite opće podatke o polaznom tekstu (autor, naslov, vrsta teksta).","Odredite namjenu i temu teksta.","Navedite osnovne misli teksta i pojedinosti koje ih podupiru.","Odredite autorov stav o temi."],
  },
  "2024_jesen":{
    key:"2024_jesen",year:2024,season:"jesen",
    label:"2023./2024. jesenski rok",
    trajanje:80,minRijeci:200,maxRijeci:250,
    tekstNaslov:"Majda Rijavec, Dubravka Miljković, Školska disciplina",
    tekst:`Istraživanja širom svijeta pokazuju da, usprkos svim naporima koji se čine da bi ih bilo manje, disciplinskih je problema u školi sve više. Stručnjaci pokušavaju definirati modele koji bi mogli poslužiti za prevenciju i rješavanje disciplinskih problema. Danas su poznata dva modela školske discipline: pozitivna disciplina Jane Nelsen i asertivna disciplina Leeja Cantera i Marianne Canter.
        Pozitivna disciplina usmjerena je na učenike, a njezin je cilj razvoj samodiscipline i smanjivanje potrebe za izvanjskom kontrolom ponašanja. Naglašava se razvoj samokontrole, socijalne odgovornosti, sposobnosti timskog rada, poštenja i moralnosti. Preduvjet je svemu zadovoljavanje najvažnijih učeničkih potreba: autonomije (sloboda odabira aktivnosti i donošenja odluka), kompetentnosti (osjećaj uspješnosti i kontrole nad okolinom) i povezanosti (dobri, bliski odnosi s drugim ljudima). Ovaj se model izričito protivi upotrebi nagrada, pohvala i kazni, temelji se na dobrim odnosima učitelja i učenika i stalnom dogovaranju; ako netko „ne sluša", slijede mu prirodne, logične posljedice — na primjer, posljedica nerada loša je ocjena.
        Asertivna je disciplina, s druge strane, usmjerena na učitelja i temelji se na pravilima i korektivnim postupcima koje primjenjuje učitelj: nagradama, pohvalama i kaznama. Postavljanje jasnih pravila nužno je za stvaranje discipline u razredu. Učenicima treba biti jasno što je dopušteno, a što nije, a kad se pravila postave, od učenika se očekuje da ih poštuju. Kazna ima brojnih ograničenja — uči učenike što ne smiju raditi, a ne ono što bi trebali; ima kratkotrajne učinke i stvara negativno razredno ozračje. Usprkos svim ograničenjima kažnjavanje je ipak nužno i učinkovito.
        Čini se da je kratkoročno učinkovitija asertivna disciplina, no za dugoročne učinke bolje je pozabaviti se pozitivnom disciplinom. Ipak, u obama modelima ima postupaka važnih za uspostavljanje dobrog razrednog ozračja — usmjeravanje na prevenciju, jasna pravila, poticaji, dobri odnosi s učenicima, suradnja s roditeljima i samodisciplina.

Prilagođeno prema: Majda Rijavec, Dubravka Miljković, Školska disciplina`,
    smjernice:["Navedite opće podatke o polaznom tekstu (autor, naslov, vrsta teksta).","Odredite namjenu i temu teksta.","Navedite osnovne misli teksta i pojedinosti koje ih podupiru.","Odredite autorov stav o temi."],
  },
  "2025_ljeto":{
    key:"2025_ljeto",year:2025,season:"ljeto",
    label:"2024./2025. ljetni rok",
    trajanje:80,minRijeci:200,maxRijeci:250,
    tekstNaslov:"Kruno Lokotar, Dvopismeni ili nepismeni",
    tekst:`U suvremenome svijetu sve se manje čita, a razloge tomu treba tražiti u intenzivnoj digitalizaciji koja donosi nevjerojatne promjene u živote ljudi, ali i izazove u čitateljskim navikama. Dokazano je da čitanje znatno utječe na razvoj mozga, a tehnologija je promijenila način na koji čitamo, što posljedično mijenja i mozak.
        Istraživanjem američke neuroznanstvenice Maryanne Wolf utvrđeno je da se danas čita više nego ikad prije. Međutim, dominira digitalno, površno čitanje, koje karakterizira brzo prelaženje preko teksta. Takvo je čitanje letimično, odvija se u cik-cak figuri dok oči skakuću po tekstu na ekranu. Prelazak očima preko teksta, uz česte prekide zbog obavijesti ili poveznica, smanjuje sposobnost dublje koncentracije i refleksije. Čitatelji stalno traže novu informaciju koja im odvlači pozornost, što negativno utječe na sposobnost analitičkoga razmišljanja i kritičkoga mišljenja. Osim toga, brz pristup informacijama može smanjiti kapacitet za dugoročno pamćenje jer se ljudski mozak sve više oslanja na tehnologiju. Istraživanje ističe i smanjenje empatije kod mladih kao važnu negativnu posljedicu digitalnoga čitanja.
        Međutim, istraživanje pokazuje kako se svi navedeni problemi mogu umanjiti poticanjem dubinskoga, klasičnoga čitanja u fizičkome mediju. Takav način čitanja aktivira mozak i usmjerava ga prema sposobnosti obavljanja dugoročnih zadaća. Dubinsko čitanje zahtijeva usredotočenost na jednu temu tijekom duljega razdoblja, čime se razvija koncentracija i stvaraju snažnije veze među različitim informacijama u mozgu. Stimulira se mašta i kreativna sposobnost mozga, potiče kreativno promišljanje i razvoj strpljenja, planiranja i empatije. Dubinsko čitanje pozitivno djeluje i na vještine pisanja i govora jer obogaćuje vokabular i omogućava jasnije izražavanje misli.
        Neuroznanstvenica Maryanne Wolf odgovor na pomirenje tradicionalnoga i digitalnog čitanja vidi u obrazovnome sustavu koji razvija dvopismeni mozak, sposoban da se snađe u objema čitalačkim galaksijama. Digitalno je čitanje izazovnije zbog stalnih smetnji, ali obrazovanjem se može pomoći učenicima da usvoje tehnike za filtriranje tih smetnji.
        Proces je digitalizacije ireverzibilan, što znači da nema povratka na staro. Ne osposobimo li sebe i nadolazeće generacije da budemo žitelji dviju galaksija, papirnate i digitalne, uskoro će nedostajati i pisaca i čitatelja i suosjećajnih građana sposobnih za kritičko mišljenje.

Prilagođeno prema: www.kritika-hdp.hr`,
    smjernice:["Navedite opće podatke o polaznom tekstu (autor, naslov, vrsta teksta).","Odredite namjenu i temu teksta.","Navedite osnovne misli teksta i pojedinosti koje ih podupiru.","Odredite autorov stav o temi."],
  },
  "2025_jesen":{
    key:"2025_jesen",year:2025,season:"jesen",
    label:"2024./2025. jesenski rok",
    trajanje:80,minRijeci:200,maxRijeci:250,
    tekstNaslov:"Mija Dropuljić, Put putujem",
    tekst:`Potreba za putovanjem ukorijenjena je duboko u ljudskoj prirodi. Još od najranijih vremena čovjek je živio neprestano se krećući u potrazi za hranom. Razvojem i usavršavanjem poljoprivrede nomadski način života prestao je biti neophodan, ali potreba za otkrivanjem novih mjesta nije nestala. Ta iskra radoznalosti u nama čeka da je potpalimo novim iskustvima i nezaboravnim doživljajima.
        Suvremeni čovjek voli isplanirati svoje životne aktivnosti, stoga često i željenom putovanju prethode mjeseci promišljanja o destinaciji i planiranje putovanja. Mnogi znanstvenici tvrde da odgođeno zadovoljstvo, naročito ako je povezano s putovanjem, donosi veći užitak nego samo putovanje. Istraživanje provedeno na sveučilištu u Cornwallu pokazalo je da su ispitanici koji su iščekivali trenutak da odu na odmor mnogo sretniji sa svojim životom, da imaju manje negativnih ili neugodnih emocija, zadovoljniji su svojom obitelji, financijama i zdravljem u usporedbi s ispitanicima koji su odjednom odlučili putovati. Planiranje putovanja može biti naročito uzbudljivo zato što često znamo taman toliko o mjestu na koje idemo da možemo početi zamišljati ugodne detalje budućega izleta. Istovremeno dosta detalja i ne znamo, što ostavlja prostor za uzbudljivu neizvjesnost. Počinjemo putovati čim počnemo razmišljati o putovanju, tvrde autori studije.
        Osim pripreme putovanja i sam čin putovanja utječe na mentalno zdravlje. Stres kod kuće, na poslu i u školi čini vas napetima, nemirnima, razdražljivima, a putovanje vam daje priliku da se na neko vrijeme odmaknete od uzročnika stresa. Ono omogućuje da u drukčijim okolnostima preispitate svoj način života i navike te da u konačnici eliminirate uzročnike nezadovoljstva. Studija Sveučilišta Modul u Beču potvrđuje da redovita putovanja mogu pomoći u smanjenju stresa i donijeti unutarnji mir. Putovanje također može ojačati odnose u obitelji, upoznavanje novih mjesta, ljudi i kultura može promovirati multikulturalno učenje te proširiti pogled i perspektivu.
        Treba upozoriti i na mračnu stranu putovanja. Objavljene fotografije na društvenim mrežama prikazuju prijeđene kilometre i posjećene atrakcije, ali realnost je da svako putovanje nosi određenu dozu anksioznosti, remeti prirodni ritam organizma i razdvaja osobu od obitelji i prijatelja. Mnoge osobe počinju svoj identitet zasnivati na tome kamo su putovale i koliko često. S medicinske točke gledišta česta i dugotrajna putovanja donose neprekidan sindrom jet laga te mogu izazvati kulturni šok.
        Živimo u divnom svijetu koji je put ljepote i avantura kojima nema kraja ako ih tražimo otvorenih očiju jer, kao što je Antun Gustav Matoš rekao: „Ne putuje onaj koji mnogo putuje, već koji doživljava." Stoga putujte, ali se dobro pripremite, ne dajte da vas poteškoće oneraspolože. Vratite se obogaćeni, kao pripovjedači koji će s dragim osobama podijeliti svoja iskustva.

Prilagođeno prema: www.novilist.hr, www.zivim.jutarnji.hr`,
    smjernice:["Navedite opće podatke o polaznom tekstu (autor, naslov, vrsta teksta).","Odredite namjenu i temu teksta.","Navedite osnovne misli teksta i pojedinosti koje ih podupiru.","Odredite autorov stav o temi."],
  },
};

const ESEJI={
  "2025_jesen_esej_B":{
    key:"2025_jesen_esej_B",
    year:2025, season:"jesen", razina:null,jedinstven:true,
    label:"2024./2025. jesenski rok — Jedinstven ispit",
    trajanje:160,
    naslov:"Preobražaj (Kafka) — Na koji način posao i obiteljska očekivanja oblikuju Gregorov život?",
    polaznoP:"Na koji način posao i obiteljska očekivanja oblikuju Gregorov život?",
    tekstovi:[
      {naslov:"Franz Kafka, Preobražaj (ulomak — Prokurist i Gregor)", tekst:`„Gregore", reče sad otac iz susjedne sobe slijeva, „došao je gospodin prokurist i raspituje se zašto nisi otišao ranim vlakom. Mi ne znamo što bismo mu rekli. Uostalom, on želi i razgovarati s tobom osobno. Dakle, molim, otvori vrata. Bit će tako dobrostiv da te ispriča zbog nereda u sobi." „Dobro jutro, gospodine Samsa", vikne prokurist ljubazno u međuvremenu. „Nije mu dobro", reče majka prokuristu, još dok je otac govorio na vratima, „nije mu dobro, vjerujte mi, gospodine prokuristu. Kako bi inače Gregor propustio vlak! Mladiću je samo posao na umu. Gotovo se ljutim što nikada na večer ne izlazi; sada je bio osam dana u gradu, ali svake je večeri bio kod kuće. Sjedi tu s nama za stolom i šutke čita novine ili proučava redove vožnji. Za njega je već razonoda kada se zabavlja rezbarenjem. Tako je, na primjer, u dvije-tri večeri izrezbario mali okvir; začudit ćete se kako je lijep; visi unutra u sobi; smjesta ćete ga vidjeti čim Gregor otvori. Ja sam zapravo sretna što ste ovdje, gospodine prokuristu; mi sami ne bismo naveli Gregora da otvori vrata, tako je tvrdoglav; i zacijelo mu nije dobro, iako je to jutros zanijekao." „Odmah dolazim", reče Gregor polako i oprezno i ne pomakne se da ne propusti ni riječ od razgovora.
(…)
„Gospodine Samsa!" uzvikne prokurist povišenim glasom. „Što se događa? Zabarikadirali ste se u svojoj sobi, odgovorite barem s da i ne, opterećujete svoje roditelje teškim, nepotrebnim brigama i zanemarujete – a to primjećujem usput – svoje radne obveze na zapravo nečuven način. Govorim ovdje u ime vaših roditelja i vašeg šefa i molim vas sasvim ozbiljno da to trenutačno, čestito razjasnite. Čudim se, čudim se. Mislio sam da vas znam kao mirnog, razumnog čovjeka, a sada kao da ste odjednom počeli paradirati s čudnovatim hirovima. Šef mi je, doduše, rano jutros natuknuo čime bi se mogao objasniti vaš propust – tiče se inkasa koji vam je nedavno povjeren – ali, evo, uistinu na časnu riječ, to objašnjenje neće biti pravo. Vaš rad, dakle, u posljednje vrijeme nimalo ne zadovoljava."
(…)
„Ali, gospodine prokuristu!" uzvikne Gregor izvan sebe i zaboravi u uzbuđenju sve ostalo. „Smjesta, isti čas ću otvoriti. Neznatna nelagoda, napadaj vrtoglavice spriječili su me da ustanem. Još uvijek sam u krevetu. Ali sada sam ponovno svjež. Upravo izlazim iz kreveta. Samo još časak strpljenja! (…) Gospodine prokuristu! Štedite moje roditelje! Tȁ nema razloga za sve te prigovore koje mi sada upućujete (…) otputovat ću još vlakom u osam sati (…) budite tako dobrostivi da to prenesete i preporučite me gospodinu šefu!"

Franz Kafka, Preobražaj`},
    ],
    smjernice:[
      "U uvodu ukratko predstavite autora i djelo te oblikujte tvrdnju kojom odgovarate na polazno pitanje.",
      "U središnjemu dijelu razradite tvrdnju — argumentacija mora proizlaziti iz razumijevanja djela u cjelini.",
      "Analizirajte polazni tekst na sadržajnoj i stilskoj razini i objasnite njegovu ulogu u djelu u cjelini.",
      "Povežite argumentaciju s književnopovijesnim kontekstom u kojemu je djelo nastalo.",
      "U zaključku sažeto istaknite ono najvažnije.",
    ],
    ocjenaKljuc:"Preobražaj (Kafka, 1915.) = moderna proza = egzistencijalistički/apsurdistički sloj = čovjek kao instrument sustava. Gregor Samsa = trgovački putnik = jedini hranitelj obitelji = posao ga definira kao osobu. Prije preobražaja: cijeli život podredio poslu i obitelji (otplaćuje dug oca). Prokuristov posjet = dramatizira kako posao i obitelj izvana upravljaju Gregorovim životom — čak i bolest mora se opravdati šefu. Nakon preobražaja = obitelj ga odbacuje jer više nije koristan. Polazni tekst: majka brani Gregora navodeći njegovu predanost poslu; prokurist prijeti otkazom = posao = identitet = egzistencija. Kafka = birokratski aparat koji briše individuu.",
    minRijeci:440, maxRijeci:900,
  },
  "2025_ljeto_esej_B":{
    key:"2025_ljeto_esej_B",
    year:2025, season:"ljeto", razina:null, jedinstven:true,
    label:"2024./2025. ljetni rok — Jedinstven ispit",
    trajanje:160,
    naslov:"Prijan Lovro (Šenoa) — Na koji je način Lovrino podrijetlo utjecalo na njegov životni put?",
    polaznoP:"Na koji je način Lovrino podrijetlo utjecalo na njegov životni put?",
    tekstovi:[
      {naslov:"August Šenoa, Prijan Lovro (ulomak — Lovro i grof)", tekst:`Neki nemir osvoji Lovru.
– Međutim – nastavi grof – čovjek snuje, a Bog boguje. Grof Buol mi je prijatelj, ali ima u njega drugih prijatelja, moćnijih prijatelja. Na preporuku carskoga poslanika u Carigradu baruna H., primljen je drugi pitomac u akademiju, a i sami znate da je samo jedno mjesto prazno bilo.
– Dakle ništa? – istisnu jedva Lovro blijed na smrt.
– Žalibože ništa, jadni prijatelju moj! Ali ne gubite nade. Učite prava, budite činovnik! Skrbit ću za vas.
– Hvala, gospodine grofe, ne mogu.
– A zašto?
– Oprostite da vam i opet iskreno govorim.
– Govorite slobodno.
– Utekoh iz sjemeništa da se dokopam slobode. Nisam bio jak u nijemoj zabiti probaviti nekoliko godina. A da budem svezan sav svoj vijek? (…)
– Što kanite dakle, prijatelju?
– Što? Znam li ja? Vijest, koju evo razumjeh, ošinula me kao grom iz vedra neba. Nemam sile ni misliti, ali samo to znam, da neću biti činovnikom.
– Ohrabrite se, prijatelju. Vi znate puno jezika; poznajete razne književnosti. Budite učitelj. Šta velite na to?
– Pravo rekoste, gospodine grofe! Sila vraća mi se. Da, bit ću učitelj za sve što sam bio za vašega sina. Svratit ću svoju tvornu silu u tu struju, i kad mi nije dano da budem sȃm čitavim čovjekom, othranjivat ću bar čitave ljude.
– Dobro! Napišite odmah molbu na ministarstvo! Sȃm ću ju popratiti da vam se podijeli štipendij državni.
Što grof reče, to Lovro i učini. Valjalo je čekati, čekati. Lovro bavio se pisanjem književnih slavenskih rasprava. Minula tri mjeseca, ne bude odgovora. Grof se tomu čudio. Zdravlje bijaše mu slabo. Prekret pripravljao se po svoj državi. Grof odluči ostaviti se službe a poći na godinu dana putovati po Italiji, po Švicarskoj. Lovri valjade poći kući, nije mu se dalo samu besposličiti na tuđoj hrani. Starci slušali kako će Lovro biti profesorom, starci zadovoljni bili, samo bi se starici kadšto iz oka izvinula suzica. Sve će biti dobro, tješio se Lovrin otac. Ta nije li sȃm predsjednik rekao da je Lovro valjan, pošten, učen čovjek, a takav mora da bude velikim gospodinom.

August Šenoa, Prijan Lovro`},
    ],
    smjernice:[
      "U uvodu ukratko predstavite autora i djelo te oblikujte tvrdnju kojom odgovarate na polazno pitanje.",
      "U središnjemu dijelu razradite tvrdnju — argumentacija mora proizlaziti iz razumijevanja djela u cjelini.",
      "Analizirajte polazni tekst na sadržajnoj i stilskoj razini i objasnite njegovu ulogu u djelu u cjelini.",
      "Povežite argumentaciju s književnopovijesnim kontekstom u kojemu je djelo nastalo.",
      "U zaključku sažeto istaknite ono najvažnije.",
    ],
    ocjenaKljuc:"Prijan Lovro (Šenoa, 1873.) = hrvatska realistička novela = Šenoino doba. Lovro = sin siromašnih seljaka = talentiran ali nizkog podrijetla = sustav ga sprječava (nema veze ni novca). Ulomak: mjesto u akademiji dobiva drugi kandidat zahvaljujući vezama (baron H.) = meritokracija vs. nepotizam. Lovro odbija biti činovnik (sloboda > sigurnost) i postaje učiteljem = kompromis. Podrijetlo = prepreka: bez veza i novca ni talent ne pomaže. Lovrino podrijetlo = 'prijan' (prijatelj, seljak) = identitet koji ga definira i ograničava. Šenoa kritizira austrijsku birokraciju i klasno društvo.",
    minRijeci:440, maxRijeci:900,
  },
  "2024_jesen_esej_B":{
    key:"2024_jesen_esej_B",
    year:2024, season:"jesen", razina:null, jedinstven:true,
    label:"2023./2024. jesenski rok — Jedinstven ispit",
    trajanje:160,
    naslov:"Stranac (Camus) — Na koji način Meursaultov karakter određuje njegovu sudbinu?",
    polaznoP:"Na koji način Meursaultov karakter određuje njegovu sudbinu?",
    tekstovi:[
      {naslov:"Albert Camus, Stranac (ulomak — Meursault i branitelj)", tekst:`Sutradan me u zatvoru posjetio branitelj. Bio je nizak i debeljuškast, prilično mlad, pomno zalizane kose. Iako je bilo vruće (ja sam bio u košulji), nosio je tamno odijelo, ovratnik sa zavrnutim krajevima i neobičnu kravatu sa širokim crnim i bijelim prugama. Odloži na moj krevet torbu koju je nosio pod pazuhom, predstavi se i reče da je proučio moj predmet. Moj je slučaj vrlo škakljiv, ali on ne sumnja u uspjeh, pod uvjetom da mu se povjerim. Zahvalih mu, a on mi reče:
– Da prijeđemo odmah na samu stvar!
Sjede na krevet i priopći mi da su se raspitali o mom privatnom životu. Znaju da mi je majka nedavno umrla u ubožnici. Zatim su poveli istragu u Marengu. Istražitelji su doznali da sam se „pokazao bešćutnim" na dan mamina sprovoda. – Znate – reče mi branitelj – malo mi je neugodno da vas to pitam, ali je to vrlo važno, i bit će jak argument optužbe ako ne budem mogao na to ništa odgovoriti. – Htio je da mu pomognem. Upita me jesam li taj dan mnogo patio. Neobično sam se začudio tom pitanju, činilo mi se da bi i meni bilo vrlo neugodno kad bih ga morao kome postaviti. Odgovorih mu, ipak, da sam se uglavnom odvikao da sâm sebe ispitujem, i da mi je teško o tome bilo što kazati. Svakako sam mnogo volio majku, ali to ništa ne znači. Sva su zdrava bića manje-više koji put poželjela da umru oni koje vole. Tu me branitelj, vrlo uzbuđen, presiječe u riječi. Zatraži od mene da mu obećam da to neću reći na suđenju ni pred glavnim istražiteljem. Objasnih mu, međutim, da sam po naravi takav da mi često tjelesne potrebe potiskuju osjećaje. Onoga dana kad smo pokopali mamu, bio sam vrlo umoran i pospan, pa nisam vodio računa o onome što se događalo. Jedino mogu pouzdano reći da bih radije da mama nije umrla. Ali, činilo mi se da branitelj nije time zadovoljan. Reče mi:
– To nije dovoljno.
Porazmisli i upita me smije li reći da sam toga dana potpuno gospodario svojim osjećajima. Rekoh mu: – Nemojte, to ne bi bila istina. – Pogledao me nekako čudno, kao da mu se pomalo gadim. Reče mi gotovo pakosno da će ravnatelja i osoblje ubožnice svakako preslušati kao svjedoke, i da bi mi „to moglo grdno naškoditi". Upozorih ga da to nema nikakve veze s mojim slučajem, ali mi on samo odgovori da se vidi da nisam imao nikad posla s pravosuđem.
Otišao je nekako srdit. Htio sam ga zadržati i rastumačiti mu da želim steći njegovu naklonost, ne zato da bi me bolje branio nego, ako mogu tako reći, iz prirodnih razloga. Najgore je što sam vidio da se osjeća nelagodno sa mnom. Nije me razumio i malo se naljutio na mene. Zaželio sam da ga uvjerim da sam kao i drugi ljudi, baš kao i drugi ljudi. Ali od svega toga ne bi zapravo bilo velike koristi, i iz lijenosti sam odustao od svoga nauma.

Albert Camus, Stranac`},
    ],
    smjernice:[
      "U uvodu ukratko predstavite autora i djelo te oblikujte tvrdnju kojom odgovarate na polazno pitanje.",
      "U središnjemu dijelu razradite tvrdnju — argumentacija mora proizlaziti iz razumijevanja djela u cjelini.",
      "Analizirajte polazni tekst na sadržajnoj i stilskoj razini i objasnite njegovu ulogu u djelu u cjelini.",
      "Povežite argumentaciju s književnopovijesnim kontekstom u kojemu je djelo nastalo.",
      "U zaključku sažeto istaknite ono najvažnije.",
    ],
    ocjenaKljuc:"Stranac (Camus, 1942.) = egzistencijalizam/apsurdizam = ravnodušnost prema društvenim normama. Meursault = emotivno distanciran, ne pokazuje tugu za majkom, ne laže = karakter koji ne može ili ne želi igrati socijalnu ulogu. Polazni tekst: branitelj ga moli da laže (da je patio) — Meursault odbija = ne zato što je loš, nego zato što je iskren do apsurda. Karakter → sudbina: ravnodušnost na sprovodu postaje dokaz 'zloće' na sudu. Osuđen je više zbog karaktera nego zbog ubojstva. Apsurd: društvo kažnjava autentičnost. Stilski: prva osoba, lakonski rečenice, minimalna emocija = Meursaultov glas = formalni odraz njegova karaktera.",
    minRijeci:440, maxRijeci:900,
  },
  "2024_ljeto_esej_B":{
    key:"2024_ljeto_esej_B",
    year:2024, season:"ljeto", razina:null, jedinstven:true,
    label:"2023./2024. ljetni rok — Jedinstven ispit",
    trajanje:160,
    naslov:"Zločin i kazna (Dostojevski) — Zašto su Sonja i Dunja primjer požrtvovnosti?",
    polaznoP:"Zašto su likovi Sonje i Dunje u romanu Zločin i kazna primjer požrtvovnosti?",
    tekstovi:[
      {naslov:"Fjodor Mihajlovič Dostojevski, Zločin i kazna — prvi polazni tekst (Sonja)", tekst:`A onamo dječica gladuju... A Katerina Ivanovna krši ruke i sve hoda po sobi i crvene joj pjege izbile po obrazima, kao što svagda biva u toj bolesti, i viče: „Živiš kod nas, gotovanko jedna, jedeš i piješ i griješ se", a vraga pije i jede kad ni dječica po tri dana ne vide korice kruha! Ja sam tada ležao... ama, što da krijem! Ležao sam pijan, molit ću lijepo, i čujem kako Sonja govori (onako pokorna i glasić joj tako krotak... plavokosa je, a lice joj uvijek blijedo, mršavo), kaže joj: „Pa zar zbilja, Katerino Ivanovna, da se u tako što upustim?" A ona Darja Francovna, opaka žena i policiji dobro poznata, raspitivala se već tri puta kod gazdarice. „Pa što", odgovara joj Katerina Ivanovna, onako podrugljivo, „što imaš čuvati? Baš mi je i to neko blago!" Ali ne zamjerite joj, ne zamjerite, milostivi gospodine, ne zamjerite! Nije bila pri zdravoj pameti kad je to rekla, bila je uzrujana, bolesna i djeca su plakala jer nisu imala što jesti, i više je to rekla da je uvrijedi, nego u pravom smislu...
Jer, Katerina Ivanovna vam je takve ćudi, i čim se djeca rasplaču, pa makar i od gladi, odmah ih počne tući. I vidim ja, negdje oko šest sati, Sonječka ustala, ogrnula rubac, obukla ogrtač i otišla od kuće, a negdje oko devet se vratila. Došla pa ravno do Katerine Ivanovne i na stol pred nju metne bez riječi trideset rubalja. Ni riječi nije progovorila, ni da je pogleda, samo je uzela naš veliki zeleni rubac od polusukna (imamo takav jedan zajednički rubac, od polusukna), pokrila se njime preko glave i legla u krevet, okrenula lice zidu, samo joj se ramena i cijelo tijelo neprestance tresu... A ja i dalje sve onako ležim... I onda vidim, mladiću, kako Katerina Ivanovna, isto tako bez riječi, priđe Sonječkinu krevetu, i cijelu je večer do njezinih nogu proklečala, ljubila joj noge, nije htjela ustati, i poslije su obadvije tako zajedno zaspale, zagrljene... obadvije... jest, molit ću lijepo... a ja... ja sam pijan ležao, molit ću lijepo.

Fjodor Mihajlovič Dostojevski, Zločin i kazna`},
      {naslov:"Fjodor Mihajlovič Dostojevski, Zločin i kazna — drugi polazni tekst (Dunja)", tekst:`Razumihin je po mnogim znacima ubrzo zaključio da obje žene žive u vrlo teškim prilikama. Da je Avdotja Romanovna bila obučena kao kraljica, valjda je se ne bi uopće bojao, ali ovako, možda baš zato što je bila siromaški obučena i što je vidio u kakvim bijednim prilikama živi, u srce mu se uvukao strah pa je počeo strepiti za svaku svoju riječ, za svaku gestu, što je, naravno, bilo na nepriliku čovjeka koji se ionako nije previše uzdao u sebe.
(...)
– Znaš što, Dunja – počne ozbiljno i suhoparno – molim te, naravno, da mi oprostiš za ono jučer, ali smatram se dužnim da te opet podsjetim da ne odustajem od svog glavnog zahtjeva. Ili ja ili Lužin. Ja mogu biti i hulja, ali ti ne smiješ. Jedna je hulja dovoljna. Ako se ipak udaš za Lužina, neću te više smatrati sestrom.
– Rođa, Rođa! Pa opet se ponavlja isto ono od jučer – jadovito cikne Puljherija Aleksandrovna.
– Brate – odlučno mu i isto onako suhoparno odvrati Dunja – u svemu tome ti si negdje ipak pogriješio. Noćas sam o tome razmišljala i otkrila pogrešku. Vic je u tome što ti valjda misliš da se ja tobože nekome i za nekoga žrtvujem.

Fjodor Mihajlovič Dostojevski, Zločin i kazna`},
    ],
    smjernice:[
      "U uvodu ukratko predstavite autora i djelo te oblikujte tvrdnju kojom odgovarate na polazno pitanje.",
      "U središnjemu dijelu razradite tvrdnju — argumentacija mora proizlaziti iz razumijevanja djela u cjelini.",
      "Analizirajte oba polazna teksta na sadržajnoj i stilskoj razini i objasnite njihovu ulogu u djelu u cjelini.",
      "Povežite argumentaciju s književnopovijesnim kontekstom u kojemu je djelo nastalo.",
      "U zaključku sažeto istaknite ono najvažnije.",
    ],
    ocjenaKljuc:"Zločin i kazna (Dostojevski, 1866.) = psihološki roman ruskog realizma. Sonja Marmeladova = prostitucija radi obitelji (maćeha, djeca) = tiha žrtva = religiozna vjera kao spas. Dunja (Avdotja Romanovna) = pristaje udati se za Lužina da pomogne bratu Raskoljnikovu = ali odbija biti 'žrtva' u Raskoljnikovljevu smislu (to je njezin slobodan izbor). T1: Sonja donosi 30 rubalja — Katerina kleči pred njom = paradoks srama i zahvalnosti. T2: Dunja odbija definiciju žrtve — 'Vic je u tome što ti misliš da se ja žrtvujem' = aktivna odluka, ne pasivna žrtva. Razlika: Sonja = pasivna, tiha žrtva; Dunja = svjesna, aktivna odluka. Obje = moralni kontrast Raskoljnikovu.",
    minRijeci:440, maxRijeci:900,
  },
  "2022_jesen_esej_B":{
    key:"2022_jesen_esej_B",
    year:2022, season:"jesen", razina:"B",
    label:"2021./2022. jesenski rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"Zločin i kazna — Raskoljnikov i Dunja o Lužinu",
    polaznoP:"Protumačite socijalnu i psihološku motivaciju Raskoljnikovljeve odluke da ubije lihvaricu. Interpretirajte polazni tekst.",
    tekstovi:[
      {naslov:"Fjodor Mihajlovič Dostojevski, Zločin i kazna (ulomak — Raskoljnikov i Dunja o Lužinu)", tekst:ESEJ_2022_jesen_B},
    ],
    smjernice:[
      "Predstavite poetiku djela Zločin i kazna.",
      "Protumačite socijalnu i psihološku motivaciju Raskoljnikovljeve odluke da ubije lihvaricu.",
      "Interpretirajte polazni tekst na sadržajnoj i stilskoj razini.",
      "Povežite problematiku polaznoga teksta s književnim djelima slične problematike.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Dostojevski (1866.) = psihološki realizam, tematika grijeha, kazne i iskupljenja; Raskoljnikov = teorija 'nadčovjeka', ubija lihvaricu iz ideoloških razloga (želi dokazati da posebni mogu kršiti pravila); socijalna motivacija = siromaštvo, nemoć; psihološka motivacija = teorija o pravu jakih; ulomak = Dunja brani svoju odluku da se uda za Lužina (logika žrtvovanja za obitelj) vs. Raskoljnikov koji je osuđuje; paralela: oboje su spremni počiniti 'nečasno djelo' radi viših ciljeva; Sonja Marmeladova = moralni kontrast; usporedba: Macbeth (Shakespeare) = ambicija i zločin; Otac Goriot (Balzac) = žrtvovanje.",
    minRijeci:350, maxRijeci:500,
  },
  "2023_ljeto_esej_B":{
    key:"2023_ljeto_esej_B",
    year:2023, season:"ljeto", razina:null,jedinstven:true,
    label:"2022./2023. ljetni rok — Jedinstven ispit",
    trajanje:160,
    naslov:"Gospoda Glembajevi (Krleža) — Leone Glembay: zašto se u roditeljskom domu osjeća strancem?",
    polaznoP:"Zašto se Leone Glembay u roditeljskom domu osjeća strancem?",
    tekstovi:[
      {naslovi:"Miroslav Krleža, Gospoda Glembajevi (ulomak — Leone i Ignac Glembay)", tekst:`LEONE: Da, ja sam doputovao da budem na tom jubileju. I ja sam konačno vidio tebe, mi smo se vidjeli! Ja sam jutros prisustvovao sjednici banke, a sutra sve je to više manje gala predstava! Ja mislim da je najbolje da otputujem. Ja sam jedanaest godina odsutan, i vidiš, ja se više ne osjećam ovdje, kako da kažem: kod kuće. Der Mensch ist ein Gewohnheitstier! A to ćeš dopustiti i sam: u ovakvoj jednoj intimnoj slavi, u svojoj roditeljskoj kući osjećati se strancem, neke vrsti prolaznikom, to baš nije najprijatniji osjećaj!
GLEMBAY: To ovisi od toga, kako tko osjeća! Ja mislim, da su ti tvoji osjećaji svakako potpuno neosnovani. Sve je to überspannt.
LEONE ustane nervozno kao da je uboden. (...) On se svladao. Trijezno i mirno s nešto maliciozno ironičnim prizvukom: Molim te, izvini, ali dopusti mi da te zapitam: kom sretnom slučaju imam da zahvalim ovaj tvoj kasni posjet?
GLEMBAY ustao je pogođen. (...) Da, upravo tako arogantan bio si spram mene već u svojoj devetoj godini. To je ta tvoja venecijanska krv! (...) Dakle molim te, da ne gubimo vrijeme! Ja sam bio na terasi, kad si ti razgovarao s doktorom Silberbrandtom i ja sam čuo svaku tvoju riječ.
(...)
LEONE: Ne! Na jedno pitanje koje je u jednoj nijansi toplo zazvučalo, to je bilo suviše kratko i suviše oštro. (...) Naime ja, ja naime mislim, ljudi ili su prijatelji ili nisu! A na dvije minute ne može se biti prijateljem. I moguće se nas dvojica niti ne poznajemo: u ovih jedanaest godina mi nismo gotovo nijedanput razgovarali, mislim naime od onog jutra, kada su mamu našli mrtvu! I vidiš, ja ne bih htio biti neiskren: od mamine smrti ja nisam nijedanput osjetio potrebe da govorim s tobom prijateljski!

Miroslav Krleža, Gospoda Glembajevi`},
    ],
    smjernice:[
      "Predstavite poetiku djela Gospoda Glembajevi.",
      "Protumačite odnos Leonea Glembaja i njegova oca Ignaca Glembaja na temelju djela u cjelini.",
      "Interpretirajte polazni tekst na sadržajnoj i stilskoj razini. Objasnite ulogu polaznoga teksta u cjelini djela.",
      "Protumačite zašto se Leone u roditeljskom domu osjeća strancem.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Gospoda Glembajevi (Krleža, 1928.) = ekspresionistička drama = glembajevski ciklus. Leone = sin Ignaca Glembaja = vratio se nakon 11 godina = osjeća se strancem jer: (1) otac ga nikad nije razumio ('überspannt'), (2) majčina smrt nije razriješena, (3) glembajevska degeneracija i zlo koje vidi oko sebe. Polazni tekst = sukob oca i sina = nerazumijevanje = tuđost. Stilski: višejezičnost (njem.), ekspresionistička napetost, sukob savjesti.",
    minRijeci:440, maxRijeci:800,
  },
  "2023_jesen_esej_B":{
    key:"2023_jesen_esej_B",
    year:2023, season:"jesen", razina:null, jedinstven:true,
    label:"2022./2023. jesenski rok — Jedinstven ispit",
    trajanje:160,
    naslov:"Posljednji Stipančići (Novak) — Kako Juraj utječe na živote ženskih članova obitelji?",
    polaznoP:"Kako Juraj Stipančić utječe na živote ženskih članova svoje obitelji?",
    tekstovi:[
      {naslov:"Vjenceslav Novak, Posljednji Stipančići — prvi polazni tekst (pismo Muki — o sestri)", tekst:`Dragi Muki!
(...)
Ta moja dobroćudna i neuka mati vjeruje i s nekakvim nadama spaja u sebi uvjerenje da se Fedica zaljubio. (...) A znaš li što će biti konac svega: zaludit će sirotu djevojku, pa će se i u njezinoj glavi početi razvijati kojekakve romantične ludorije, dosadit će joj post i krunica, a kuća postati tijesna... Ali bijesa bi sebi Fedica o tome razbijao glavu!
A najposlije: zašto joj ne bi Fedica tu radost priuštio? Mi smo veseljaci dobra srca – rekao si ti jedne noći kad smo ono jednog pijanoga starca digli iz snijega i odnijeli u kavanu da na biljaru prespava noć. Zašto ne bi dakle naš Fedica vršio samaritansku dužnost naprama siroti osamljenoj i boležljivoj djevici? – Zašto bih ja dakle otkrio pred majkom ili pred sestrom sa Fedice koprenu u kojoj im se predstavio, kako iz majčinih riječi razabiram, u nekakvoj djevičanskoj slici? Uopće, kad o njem slušam govoriti svoju majku, sve mislim u sebi: vidiš ti našega Fedicu kako on umije lijepo glumiti! (...)
Tvoj György

Vjenceslav Novak, Posljednji Stipančići`},
      {naslov:"Vjenceslav Novak, Posljednji Stipančići — drugi polazni tekst (pismo Muki — o majci)", tekst:`Dragi Muki!
(...)
Bio sam prisiljen upotrijebiti sredstvo što si ga ti kod svoje stare tetke s uspjehom prakticirao. Uzeo sam pištolj: „Ili pet stotina, ili ćete me naći u ovoj sobi prostrijeljene glave." Neću ti opisivati kakvim je očima gledala na pištolj u mojoj ruci; znam da nije bila rumenija nego tvoja tetka kad si se s njome ovako našalio. Sve je htjela nešto govoriti, ali su joj usta bila ukočena... „Žao mi je, rekoh joj, ali meni drugo ne preostaje." „Pa dobit ćeš, dat će ti se", reče napokon, „kakav si ti to, zaboga! Dobit ćeš..." A jutros mi je već donijela novce: „Eto ti, prodala sam kuću." (...)
Tvoj György

Vjenceslav Novak, Posljednji Stipančići`},
    ],
    smjernice:[
      "U uvodu ukratko predstavite autora i djelo te oblikujte tvrdnju kojom odgovarate na polazno pitanje.",
      "U središnjemu dijelu razradite tvrdnju — argumentacija mora proizlaziti iz razumijevanja djela u cjelini.",
      "Analizirajte oba polazna teksta na sadržajnoj i stilskoj razini i objasnite njihovu ulogu u djelu u cjelini.",
      "Povežite argumentaciju s književnopovijesnim kontekstom u kojemu je djelo nastalo.",
      "U zaključku sažeto istaknite ono najvažnije.",
    ],
    ocjenaKljuc:"Posljednji Stipančići (Novak, 1899.) = hrvatski realizam = propast patricijske obitelji. Juraj (György) = rasipnik, egoist = razara obitelj izvana i iznutra. T1: Juraj hladno promatra kako Fedica (prijatelj) zavodi sestru Luciju — ne upozorava majku ni sestru = pasivna suučesništvo u uništenju sestre. T2: Juraj ucjenjuje majku pištoljem da mu da 500 forinti — majka prodaje kuću = materijalna i moralna devastacija. Ženske članice: majka = naivna, bespomoćna, prodaje imovinu; sestra Lucija = postaje žrtva romantičnih iluzija. Juraj = simbol degeneracije plemstva = sebičnost uništava obitelj. Novak kritizira dekadenciju hrvatskog plemstva.",
    minRijeci:440, maxRijeci:900,
  },
  "2022_ljeto_esej_B":{
    key:"2022_ljeto_esej_B",
    year:2022, season:"ljeto", razina:"B",
    label:"2021./2022. ljetni rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"Stranac (Camus) — ubojstvo, apsurd, usporedba s Raskoljnikovim",
    tekstovi:[
      {naslov:"Albert Camus, Stranac (ulomak — scena ubojstva)", tekst:ESEJ_T1_2022_ljeto},
    ],
    smjernice:[
      "Predstavite poetiku djela Stranac.",
      "Objasnite na temelju djela u cjelini kako je karakter glavnoga lika doveo do ubojstva o kojemu se pripovijeda u polaznome tekstu.",
      "Interpretirajte polazni tekst na sadržajnoj i stilskoj razini te protumačite njegovu ulogu u cjelini djela.",
      "Usporedite glavni lik djela Stranac s Raskoljnikovim iz romana Zločin i kazna.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Esej treba: (1) Stranac (1942.) = egzistencijalizam/filozofija apsurda; odvojena, objektivizirana proza; lakonski stil; (2) Meursaultov karakter: emocionalna otuđenost, ravnodušnost (ne plače za majkom), pasivnost, impulsivnost bez racionalnog motiva — ubojstvo nije planiran čin nego refleks na sunce/toplinu; (3) analiza ulomka: sunce kao subjektivni uzrok (ne Arapin), senzorni detalji (znoj, svjetlo, toplina), Meursault ne kontrolira situaciju — tijelo reagira umjesto uma; 4 hica u mrtvo tijelo = 'pokucao na vrata nesreće' = svjesno prihvaćanje apsurda; (4) Meursault vs. Raskoljnikov: R. je intelektualac koji planira ubojstvo ideološki (nadčovjek/teorija), M. ne planira; R. doživljava krivnju i želi kaznu, M. ostaje ravnodušan; oba su osuđena; R. se kaje/obnavlja kroz Sonju, M. ne kaje se.",
    minRijeci:350, maxRijeci:500,
  },
    "2021_jesen_esej_A":{
    key:"2021_jesen_esej_A",
    year:2021, season:"jesen", razina:"A",
    label:"2020./2021. jesenski rok — Viša razina (A)",
    trajanje:160,
    naslov:"U registraturi (Kovačić) + Povratak Filipa Latinovicza (Krleža) — Laura, Ksenija/Bobočka, barunica Castelli",
    polaznoP:"Portretirajte Lauru i Kseniju Radajevu. Usporedite s barunicom Castelli iz Gospode Glembajevi.",
    tekstovi:[
      {naslov:"Ante Kovačić, U registraturi (ulomak — Ivica i požar)", tekst:`Ivica Kicmanovic vukao se po nižim službicama od oblasti do oblasti... Samotan, mrk, strog i ozbiljan, nije ni s kim opcio. Svatko mu bjaše tuđ, kano i on drugima. Nije imao ni prijatelja ni neprijatelja, a niti je on kome bio jedno ili drugo.
Ugrabi omašan i otrcan spis o kaznenoj parnici hajdučice Lare, a onda segnu za svojim životopisom u pretinac registratorskoga stola...
– To je moje... i to ce sa mnom! – razgovaraše mrmljajuci sam sa sobom u registraturi...
I on zaklapa vrata, obazre se još jedared po svim kutovima i na prozore pa uvjerivši se da nema nigdje živa stvora izvuce iza spisa nekoliko boca tekucine i mirno stade polijevati spise. Onda nakvasi kazneni akt o parnici hajdučice Lare i svoj vjekopis pa napokon sama sebe...
– Što da još krzmam? Ipak je Laura majstorica! Oh! Laura!... Laura!... – I upali luč, baci je u tekucinu, i što bi okom trenuo, usplamti sve i probukta strašan oganj te razarajuca vatra zahvati svu registraturu...

Ante Kovačić, U registraturi`},
      {naslov:"Miroslav Krleža, Povratak Filipa Latinovicza (ulomak — Ksenija Radajeva)", tekst:`Advokat Vladimir Balocanski, sin bivšeg odjelnog predstojnika Balocaanskog, zaljubio se u tu ženu djecacki naivno i savršeno nevino. Od prvog dana on je njoj bio više dosadan nego zanimljiv, no upravo, odbijajuci toga slabica cesto na nevjerojatno okrutnu distancu, ona ga je fatalno dotukla; moglo bi se reci doista, kao što se govorilo na ulici vulgarno: uništila. Zbog nje je Balocanski pao u teške novacne neprilike, u pronevjerenja vecega stila, u krivotvorenja mjenicnih potpisa, a kad je dospio u zatvor, a žena mu se bacila kroz prozor, on je ostao Kseniji Radajevoj kao ostavština jedne drame: ona ga je jednoga dana naslijedila kao pošiljku iz kaznionice. One tri godine, dok je Balocanski ležao u Lepoglavi, proživjela je Ksenija Radajeva furiozno, vjenccaavši se civilno s jednim politikantom i ratnim bogatašem i bacajuci novac tog veleindustrijalca kao korijandole, te se ne bi moglo reci nije li vec onda, u onom u svakom pogledu nerazumnom i razornom samouništavanju, bilo nečeg od samoubojstvene, visokouznemirene, upravo sulude naklonosti spram smrtonosnih užitaka koji su joj konacno jednoga dana tako žalosno zavrnuli vratom.

Miroslav Krleža, Povratak Filipa Latinovicza`},
    ],
    smjernice:[
      "Predstavite poetiku djela U registraturi i poetiku djela Povratak Filipa Latinovicza.",
      "Portretirajte Lauru i Kseniju Radajevu (Bobocku) na temelju djela u cjelini.",
      "Usporedite polazne tekstove na sadržajnoj i stilskoj razini.",
      "Usporedite Lauru i Kseniju Radajevu (Bobocku) s barunicom Castelli iz djela Gospoda Glembajevi.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"U registraturi (Kovačić) = Laura = femme fatale = uništi Ivicu = vodi ga u propast/smrt. Povratak Filipa Latinovicza (Krleža) = Ksenija/Bobočka = uništi Balocaaanskog i sama propada = destruktivna žena. Oba: žena kao agent propasti muškaraca. Gospoda Glembajevi = barunica Castelli = erotska razorna sila = Ignjat Glembay. Razlike: Laura = simbolicki/romanticki; Ksenija/Bobočka = psihologijski realizam/modernizam; barunica = ekspresionizam.",
    minRijeci:400, maxRijeci:700,
  },
  "2021_jesen_esej_B":{
    key:"2021_jesen_esej_B",
    year:2021, season:"jesen", razina:"B",
    label:"2020./2021. jesenski rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"Hamlet — osveta i oklijevanje (Hamlet vs. Laert)",
    tekstovi:[
      {naslov:"William Shakespeare, Hamlet (ulomak — Duh i Hamlet)", tekst:ESEJ_T1_2021_jesen},
      {naslov:"William Shakespeare, Hamlet (ulomak — Kralj i Laert)", tekst:ESEJ_T2_2021_jesen},
    ],
    smjernice:[
      "Predstavite djelo Hamlet u kontekstu književnopovijesnoga razdoblja u kojemu je nastalo.",
      "Protumačite odnos Hamleta i Laerta na temelju djela u cjelini.",
      "Usporedite polazne tekstove na sadržajnoj i stilskoj razini i objasnite njihovu ulogu u kontekstu djela u cjelini.",
      "Povežite tematiku polaznih tekstova s djelima slične tematike.",
      "Obrazložite svoje tvradnje.",
    ],
    ocjenaKljuc:"Esej treba: (1) Hamlet (1600./1601.) = Shakespeareova tragedija, elizabetinsko kazalište, renesansa/barok; (2) T1 = Duh traži od Hamleta osvetu za ubojstvo oca — Hamlet reagira impulzivno ('Pojurit... na svoju osvetu!'), ali tijekom drame OKLIJEVA; T2 = Kralj manipulira Laertom — Laert bez oklijevanja izjavljuje da će Hamletu prerezati grkljan U CRKVI; (3) kontrast: Hamlet = intelektualac koji razmišlja, sumnja, filozofira (biti ili ne biti); Laert = čovjek akcije koji djeluje instinktivno; oboje žele osvetu za ubojstvo oca, ali različitim načinima; (4) paralela: oba su žrtve manipulacije (Hamlet Duha koji možda laže, Laert Kralja koji ga iskorištava); (5) tema osvete u književnosti: Sofoklo (Orest), Dostojevski (Raskoljnikov), tema pravde i zakona.",
    minRijeci:350, maxRijeci:500,
  },
    "2020_jesen_esej_A":{
    key:"2020_jesen_esej_A",
    year:2020, season:"jesen", razina:"A",
    label:"2019./2020. jesenski rok — Viša razina (A)",
    trajanje:160,
    naslov:"U registraturi (Kovačić) + Bijeg (Nehajev) — Ivica Kičmanović i Đuro Andrijašević, selo i grad, školovanje",
    polaznoP:"Portretirajte Ivicu Kičmanovića i Djuru Andrijaševica. Usporedite polazne tekstove.",
    tekstovi:[
      {naslov:"Ante Kovačić, U registraturi (ulomak — školovanje)", tekst:`"Ima rubeninu, ima!" - uzdahne majka. - "Pa kako to, skola? Pa zašto nam ga ne pustiše gospoda? Što njemu treba škole?"
"Što ces? Tako ti je na ovom svijetu. Rekoh im svoju bas odriješito: Evo, kakve su to nove pravice? Prije bjaše otac gospodar svome djetetu na život i smrt. A danas? Tek je pocelo raspoznavati roditelje, vec ceka ucitelj sa šibom da ga predaš u njegove ruke."
"Sve su to gospodski racuni!" - prekine župnika naš susjed, mali 'kanonik'. - "A mi necemo da nam se djeca pogospode: Aj, jok! Cast svojoj gospodi! Ali mi im poklanjamo gospodstvo. Djeca mi ne budu ni kuhana ni pecena po školama. Kruh ne bude rastao od prolijevanja tinte, vec od gnoja. Mi ne živimo od šaranja pera po papiru, nego ti valja ljudski huknuti u šake, pak zadrijeti plugom i motikom u tvrdu kost zemaljsku."

Ante Kovačić, U registraturi`},
      {naslov:"Milutin Cihlar Nehajev, Bijeg (ulomak — seljak i škola)", tekst:`Ovdje vidim pravi seljacki tip. Ljudi kojima sve naziranje na svijet diktuje zemlja, mati hraniteljica. Nije cudo što ovaj covjek ne trpi škole; on ne vidi nikakva saveza izmedju pisanih slova i poljskih poslova. I to, što je nepovjerljiv prema gospodi, nema - cini mi se - razloga u tobožnjem nemaru kaputaša za nj ili u pašovanju raznih bilježnika. Moj Pajo ili Nikola ne razumije zašto "gospodin" živi; bududi da mu nije jasno da se bez zemlje dade živjeti, drži ovakvu uredbu društva, kakva jest, nekim nepravednim usudom koji mu nije prijatan.
"Vi se svi tužite da se naše knjige ne prodaju, da književnik stradava. Ja ti kupujem gotovo svaku našu knjigu; pa znaš što mi se cini da je krivo svemu? Vi ste svi nekakvi užasni slabici; ne vjerujete ni u sebe ni u drugoga, opisujete uvijek neke nervozne i izmucene ljude. A pogledaj ti nas ovdje što radimo po strani."

Milutin Cihlar Nehajev, Bijeg`},
    ],
    smjernice:[
      "Predstavite poetiku djela U registraturi i poetiku djela Bijeg.",
      "Portretirajte Ivicu Kičmanovića i Djuru Andrijaševica na temelju djela u cjelini.",
      "Usporedite polazne tekstove na tematskoj, problemskoj i stilskoj razini.",
      "Usporedite polazne tekstove s književnim djelima slicne tematike.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"U registraturi (Kovačić, 1888.) = hrv. realizam = Ivica = sin seoca = dolazi u grad = propada u pozaru. Bijeg (Nehajev, 1909.) = moderna = Đuro = intelektualac = ne može naci smisla = ubija se. Oba: sukob sela i grada, odnos prema obrazovanju, propast intelektualca. Razlika: Ivica = vic tize, spontana propast; Đuro = psihološka propast, bijeg od realnosti. Slicna tematika: Kovačić/Registratura vs. Nehajev/Bijeg = generacijska razlika.",
    minRijeci:400, maxRijeci:700,
  },
  "2020_jesen_esej_B":{
    key:"2020_jesen_esej_B",
    year:2020, season:"jesen", razina:"B",
    label:"2019./2020. jesenski rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"U registraturi — Ivica i Laura, odnos dvaju likova",
    polaznoP:"Protumačite odnos Ivice i Laure na temelju djela u cjelini. Usporedite Lauru sa sličnim književnim likovima.",
    tekstovi:[
      {naslov:"Ante Kovačić, U registraturi (ulomak — Ivica i Laura)", tekst:ESEJ_2020_jesen_B},
    ],
    smjernice:[
      "Predstavite djelo U registraturi u kontekstu književnopovijesnog razdoblja u kojemu je nastalo.",
      "Protumačite odnos Ivice i Laure na temelju djela u cjelini.",
      "Interpretirajte polazni tekst na sadržajnoj i stilskoj razini. Objasnite ulogu polaznoga teksta u kontekstu djela u cjelini.",
      "Usporedite Lauru sa sličnim književnim likovima.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Kovačić = realizam (1888.), tema: sudbina seljačkog dječaka Ivice Kičmanovića u gradu; Laura = Mecenina rojakinja, femme fatale, privlačna i razorna; ulomak = prvi susret, uspostavljanje bratsko-sestrinskog odnosa koji prerasta u ljubav; Laura na kraju pogiba (Mecena joj pregrizao grkljan); Ivica propada; uloga ulomka = prikazuje romantičarsko-naivni aspekt Ivičine zaluđenosti; usporedba: Laura vs. Nora (Ibsen) = razlika u slobodi i osvješćenosti; Laura vs. Ana Karenjina = obje tragično završavaju; Laura vs. Đuka Begović (Kumičić) = femme fatale tipovi.",
    minRijeci:350, maxRijeci:500,
  },
    "2021_ljeto_esej_A":{
    key:"2021_ljeto_esej_A",
    year:2021, season:"ljeto", razina:"A",
    label:"2020./2021. ljetni rok — Viša razina (A)",
    trajanje:160,
    naslov:"Povratak Filipa Latinovicza (Krleža) — Filip, Kyriales, Boba, otuđenost, stvaralaštvo",
    polaznoP:"Predstavite poetiku PFL-a. Protumačite odnos Filipa i Kyrialesa i ulogu ulomka u djelu.",
    tekstovi:[
      {naslov:"Miroslav Krleža, Povratak Filipa Latinovicza (ulomak — Filip u Kostanjevcu)", tekst:`Sve je to bilo groznicavo one noci i suludo, doslovno katastrofalno, a ta se napetost doživljavanja više nije vracala. Sivjelo je sve polagano i venulo kao list poslije zapare! Ništa nije naslikao Filip od one poplave zamisli: isprecrtao je nekoliko kartona za nacrt bakroreza, i sve je ostalo nezapoceto u mapi na ormaru. I ništa ne radi, ništa ne cita, nego leži i polagano osjecajuci tihu griznju u sebi: od nepomicnosti, od jalove dosade.

"Tako ce ga sada pozvati na veceru, pak ce se gnjaviti sa starim Liepachom, onda ce se odvuci do kavane i ondje citati novine, cekati Bobu, i sve ne ce zapravo imati nikakve prave svrhe! Vuci ce se prašnom cestom do vinograda, umoran, sa snom na trepavicama, a s teškim i bezdanim bdjenjem pred sobom."

Lepet krilima u kokošinjcu, izdaleka glas sove u šumi, vjetar u krošnjama i onda duga, neugodna tišina. Iz Kostanjevca, dolje odmah pod mlinom, jedan podmukli pucanj, a onda opet sve tiho. Spavaju stari slamnati krovovi, štagljevi i patke po kokošinjcima. Vlažan miris kukuruznih hljebova iz toplih krušnica miješa se s vonjem goveda i gnoja, šušti kukuruzovina na vjetru, tu i tamo kapljica teške kiše, dolazi polagano jesen, a on tu dangubi s nekakvom cudnom gnjilom ženom.

"Što je veceras bila tako nervozna? Odbila se od njega na hladnoneshvatljiv razmak, od prvog dana kako se pojavio ovdje onaj problematični covjek. Tko je taj Kyriales? Odakle je doputovao? Žvace svoju englesku lulu, sjedi u oblaku slatkog dima i tako cudno gleda kao da znaden nešto više od obicnih smrtnika ljudi. On je stari, dugogodišnji Bobin prijatelj, a gdje se upoznala ta bolesna žena s tim Gruzinom? Grk sa Kavkaza, doktor medicine, pustolov, što je taj covjek s dugim, od dima žutim, tankim, hladnim prstima? Zašto je doputovao, što radi tu i kamo putuje? Kamo se sve to uopce giba?"

Miroslav Krleža, Povratak Filipa Latinovicza`},
    ],
    smjernice:[
      "Predstavite poetiku djela Povratak Filipa Latinovicza.",
      "Protumacite odnos Filipa Latinovicza i Kyrialesa na temelju djela u cjelini.",
      "Interpretirajte polazni tekst na sadržajnoj i stilskoj razini i objasnite njegovu ulogu u cjelini djela.",
      "Usporedite Filipa Latinovicza sa slicnim književnim likovima.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Povratak Filipa Latinovicza (Krleža, 1932.) = psihološki roman modernizma = stream-of-consciousness = slobodni neupravni govor. Filip Latinovicz = slikar koji se vraca u rodni kraj = kriza stvaralaštva = kompleks majke. Kyriales = tajanstveni intelektualac, Bobin prijatelj = simbolizira Filipov alter-ego ili destruktivnu silu. Ulomak = Filipova paraliza, nemogucut stvarati, pitanja o Kyralesu = psihološka napetost. Slicni likovi: Đuro Andrijašević (Bijeg), Meursault (Stranac).",
    minRijeci:400, maxRijeci:700,
  },
  "2021_ljeto_esej_B":{
    key:"2021_ljeto_esej_B",
    year:2021, season:"ljeto", razina:"B",
    label:"2020./2021. ljetni rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"U registraturi — Ivica, Laura i pad seljačkog sina",
    tekstovi:[
      {naslov:"Ante Kovačić, U registraturi (ulomak — jutro poslije)", tekst:ESEJ_T1_2021_ljeto},
    ],
    smjernice:[
      "Predstavite djelo U registraturi u kontekstu književnopovijesnoga razdoblja u kojemu je nastalo.",
      "Portretirajte Lauru na temelju djela u cjelini.",
      "Interpretirajte polazni tekst na sadržajnoj i stilskoj razini i protumačite njegovu ulogu u cjelini djela.",
      "Usporedite Ivicu Kičmanovića sa sličnim književnim likovima.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Esej treba: (1) U registraturi (1888.) = Ante Kovačić, hrv. realizam, roman s naturalističkim elementima; (2) Laura = kobna žena (femme fatale), tajanstveni lik čiji identitet nije razjašnjen; kurtizana, Mecenina ljubavnica i Ivičin 'pad' — manipulativna, fatalna; (3) analiza ulomka: unutarnji monolog jutro nakon prve noći s Laurom — Ivica razapet između stida (majka, sel. podrijetlo) i čari; 'Odvrni oči, Ivice!' = dijalog sa savješću; kontrast seljačko/gospoda; strast i krivnja; (4) uloga u djelu: ovo je trenutak Ivičinog konačnog pada = simbolični ulaz u gosposki/Laurin svijet; kraj nevinosti; (5) Ivica ~ Juraj Stipančić (oboje propadaju u gradu), Julien Sorel, Eugène Rastignac — mladi koji dolaze iz provincije.",
    minRijeci:350, maxRijeci:500,
  },
    "2020_ljeto_esej_A":{
    key:"2020_ljeto_esej_A",
    year:2020, season:"ljeto", razina:"A",
    label:"2019./2020. ljetni rok — Viša razina (A)",
    trajanje:160,
    naslov:"Otac Goriot (Balzac) + Posljednji Stipančici (Novak) — očevi i kćeri, ljubav, vlast i sloboda",
    polaznoP:"Usporedite oca Goriota i Antu Stipančića. Povežite s djelima slicne problematike.",
    tekstovi:[
      {naslov:"Honoré de Balzac, Otac Goriot (ulomak — odgoj kćeri)", tekst:`Odgoj njegovih kceri, dakako, bio je bezuman. Posjedujuci više od šezdeset tisuca livara rente i troseci na sebe manje od tisuce i dvjesto franaka, Goriot je srecu nalazio u tome da udovoljava hirovima svojih kceri: najvrsnijim je uciteljima bila povjerena zadaca da ih obdare znanjima koja pokazuju dobar odgoj; imale su druzbenicu; srecnom za njih bila je to žena koja je imala i duha i ukusa; bavile su se jahanjem, imale kociju, živjele kao što bi živjele ljubavnice nekoga staroga bogatog velikaša. Goriot je kceri uzdizao u red andela, pa nužno i iznad sebe, te je – jadni covjek! – volio cak i samo zlo što su mu ga one nanosile. Kada su mu kceri dorasle za udaju, smjele su izabrati muža po svom ukusu: svaka je imala kao miraz dobiti polovicu oceva imetka. Goriot ostade proizvoDac rezanaca.

Honoré de Balzac, Otac Goriot`},
      {naslov:"Vjenceslav Novak, Posljednji Stipančići (ulomak — Lucija i otac)", tekst:`Luciji se htjelo života i slobode, njezina je duša hrlila neobuzdano za probudenim osjecajima djevoacke srece što se radala iz njezine mladosti. (...) I koliko je to njezino ceznuce za odlicnim društvom i zabavama bilo neobuzdano, opet ga je neumoljivo sapinjala tvrdokorna vlast oca. Nije htio ni da cuje za kakove izdatke na njezina odijela i gdjekada upravo surovo uskracivao i neznatne troškove što bi ih za nju mati od njega tražila.
Nelijepo, zlobi nalik cuvstvo proti ocu mucilo bi gdjekada Luciju. (...) - Velim vam, kad sam sama uza nj, meni su svezana usta. Što bih s njime govorila, kad zna da mi nije pravedan? Zar nisam odrasla pa i danas još zatvorena u ovim tamnim sobama kao u samostanu? Neka pogleda moje vršnjakinje kakvi im je život, pa ce vidjeti govorim li pravo.

Vjenceslav Novak, Posljednji Stipančići`},
    ],
    smjernice:[
      "Predstavite poetiku djela Otac Goriot i poetiku djela Posljednji Stipančići.",
      "Usporedite oca Goriota i Antu Stipančića na temelju djela u cjelini.",
      "Usporedite polazne tekstove na tematskoj, problemskoj i stilskoj razini.",
      "Povežite problematiku polaznih tekstova s književnim djelima slicne problematike.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Otac Goriot (Balzac, 1835.) = realizam = Goriot = bezuvjetna ljubav prema kćerima = žrtvuje sve = kćeri ga napuštaju. Posljednji Stipančići (Novak, 1899.) = realizam = Anta Stipančić = autoritaran otac = zatocuje Luciju = propast obitelji. Kontrast: Goriot (prezaštitnicka ljubav=popuštanje) ↔ Stipančić (tiranska vlast=zabrana). Oba: ocev odnos prema kćeri = uzrok tragedije. Slicna problematika: Ibsen/Nora (ocinska figura=Helmer), Ana Karenjina (sloboda žene).",
    minRijeci:400, maxRijeci:700,
  },
  "2020_ljeto_esej_B":{
    key:"2020_ljeto_esej_B",
    year:2020, season:"ljeto", razina:"B",
    label:"2019./2020. ljetni rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"Odgoj i savjet — Hamlet i Posljednji Stipančići",
    tekstovi:[
      {naslov:"William Shakespeare, Hamlet (ulomak — Polonijevi savjeti Laertu)", tekst:`Polonije:
Još ovdje, Laerte? Sramota! Na brod!
Već sjedi vjetar jedru na ramenu
I čekaju te. Blagoslovljen budi.
(Položi ruku na Laertovu glavu)
I gledaj ovo malo uputa
Zapisati u svoje pamćenje:
Na jezik svoje misli ne stavljaj,
A ni u djelo miso opaku.
Ljubežljiv budi, ali nikad prost.
Kad prijatelja vrsna iskušaš,
Tad čeličnim ga sapni obručem
Za svoju dušu, al ne tupi dlana
Rukovanjem ljuborodnim sa svakim
Goluždravim žutokljuncem. I pazi,
Da kavgu ne zapodijevaš, al kad se
Upleteš u nju, gledaj protivnika
Naučiti da on se tebe čuva.
Daj svakom uho, malo kome glas
I primaj mnijenje svačije, al čuvaj
Svoj sud. Koliko dopušta ti kesa,
Skupocjeno odijelo nabavljaj,
Al ne šarovito; i bogato,
Al ne napirlitano; jer se često
Po svom odijelu čovjek poznaje,
A odlični i ugledni Francuzi
Baš u tome imaju plemenit
I biran ukus. Nemoj davati
Ni uzimat u zajam, jer sa zajmom
I prijatelja često izgubiš
A zaimanje tupi štedljivosti
Oštricu. Ali ovo iznad svega –
Sâm prema sebi budi istinit,
Jer zatim slijedi kao noć za danom,
Da nikom lažan biti ne možeš.
Sad zbogom i nek uz moj blagoslov
U tebi sve to sazri.

Laert:
Oče moj,
U poniznosti opraštam se s vama.`},
      {naslov:"Vjenceslav Novak, Posljednji Stipančići (ulomak — Jurajevi odlazak u Beč)", tekst:`Na osnovi što se potroška ticalo, bilo je sve do posljednjih dana pred Jurjevim odlaskom štošta mijenjano. Otac bi često rekao:
– Dašto, nećeš živjeti sjajno kao grofovski i barunski sinovi, al moja će biti skrb da ne budeš oskudijevao ni u čem. Ne zaboravi nikada da si patricijski sin, pokaži to i vanjštinom. Ne bacaj uludo novac, ali i ne štedi gdje bude trebalo da se tim načinom očituje tvoje gospodsko porijeklo. Drugove biraj, to ti osobito na srce mećem, pomno. Naći ćeš tamo u sveučilištu i neke ovdašnje sinove, kani se njihova drugovanja, od njih nemaš šta naučiti, a većinom su lumpi.

Prvih dana mjeseca listopada godine 1822. otputovao je Juraj u Beč. U osam sati ujutro došla je javiti služavka da je kočija pripravna. Juraj se držao neprestano uz oca, bio je bljeđi nego obično i uzrujan. Valpurga se kao zaposlena vrtjela po kući, a uistinu nije radila ništa nego tiho plakala i tražila da bude nasamu s Jurjem. I Stipančić je badava nastojao sakriti svoju uzrujanost, a neprestano je zapitkivao: – Je li sve u redu?`},
    ],
    smjernice:[
      "Predstavite djela Hamlet i Posljednji Stipančići u kontekstu književnopovijesnih razdoblja u kojima su nastala.",
      "Protumačite kako Juraj Stipančić i Laert utječu na sudbinu ostalih likova.",
      "Usporedite polazne tekstove na sadržajnoj i stilskoj razini.",
      "Povežite Jurjevu sudbinu sa sudbinom sličnih književnih likova.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Esej treba: (1) Hamlet (1600./1601.) = Shakespeareova tragedija, elizabetinsko kazalište, renesansa/rana moderna; Posljednji Stipančići (1899.) = Novakov roman, hrv. realizam, propast patricijske obitelji; (2) Polonijevi savjeti Laertu: praktični životni savjeti (budi iskren, biruj prijatelje, ne zaduži se, odijelo...) — Laert ih ne slijedi (osveta za Polonija i Ofeliju = smrt); Stipančić Jurju: ne zaboravi porijeklo, biruj društvo — Juraj u Beču propada (pijanstvo, kartanje, dugovi) i time upropaštava obitelj; (3) usporedba: otac daje savjete pred odlazak (sličan motiv), ali svrha savjeta različita — Polonije brine za moral, Stipančić za stalež; dijete ne slijedi savjete = tragičan ishod; (4) Juraj ~ Ivica Kičmanović (U registraturi), Julien Sorel (Crveno i crno) — mladi koji propada izvan rodnog kraja; (5) tema prolaznosti plemstva/aristokracije.",
    minRijeci:350, maxRijeci:500,
  },
    "2019_jesen_esej_A":{
    key:"2019_jesen_esej_A",
    year:2019, season:"jesen", razina:"A",
    label:"2018./2019. jesenski rok — Viša razina (A)",
    trajanje:160,
    naslov:"Preobražaj (Kafka) + Kiklop (Marinković) — Gregor Samsa i Melkior Tresić, otuđenost, apokalipsa",
    polaznoP:"Portretirajte Gregora i Melkiora. Usporedite polazne tekstove i povežite s djelima slične problematike.",
    tekstovi:[
      {naslov:"Franz Kafka, Preobražaj (ulomak — Gregor i namještaj)", tekst:`Slušajući te majčine riječi, Gregor spozna kako je nedostatak svakog neposrednog kontakta s ljudima, a spojen s jednoličnošću života usred obitelji, morao u toku ova dva mjeseca pomutiti njegov razum, jer drugačije nije mogao sebi objasniti da je ozbiljno mogao željeti da mu isprazne sobu. Bi li zaista volio da mu se topla soba, udobno namještena baštinjenim pokućstvom prometne u spilju, u kojoj bi, doduše, onda po miloj volji mogao puziti u svim pravcima, ali bi istovremeno brzo i potpuno zaboravio svoju ljudsku prošlost? Tȁ već sada nije bio daleko od toga zaborava, i samo je živnuo čuvši majčin glas što ga već tako dugo nije slušao. Neka se ništa ne iznese iz sobe; sve je trebalo ostati; nije mogao da se odrekne korisnog utjecaja namještaja na svoje stanje.

Franz Kafka, Preobrazba`},
      {naslov:"Ranko Marinković, Kiklop (ulomak — Melkior i Kiklop)", tekst:`Neman golema, ispunila vidno polje jednoga oka (na drugo je zažmirio).
Ali ne trepće Melkior.
Gigantski kukac - svežder, pantofag (već ga je Edgar Allan Poe opisao) probija se teško kroz guštaru. Smetaju mu noge, rogovi, oklop ga poklopio... ali oči radoznalo izbacio naprijed, izvan glave - probija se proždrljivo svom cilju - oku Melkiorovu.
Ne trepće Melkior.
- Čuj me, duše... - prozbori u posljednji čas svoju besjedu (rogovima će mi oko probiti) no kukac nezadrživi već mu je prekrio sav vid, ugasio svjetlost, zaklonio svijet...
- Navalio je kamen - reče Melkior i spusti glavu nemoćno na zemljina njedra: majko moja...
Začuje tutanj u dubini pod sobom. Ispod njega zadrhtala je zemlja.
Hropće zemlja razrovana, ranjena, već je udaraju njegova kopita.
- Polifem-kiklop dolazi!
A kad je očima povratio vid... na horizontu gorjelo je nebo. Praskave zvijezde rigale su vatru sa visine.
- Zoopolis! - reče s nekom nadom i čudan osmijeh ozari mu lice bezumnim sjajem.
- Utvrđeni grad!

Ranko Marinković, Kiklop`},
    ],
    smjernice:[
      "Predstavite poetiku djela Preobražaj i poetiku djela Kiklop.",
      "Portretirajte Gregora Samsu i Melkiora Tresića.",
      "Usporedite polazne tekstove na sadržajnoj i stilskoj razini.",
      "Protumačite ulogu polaznih tekstova na temelju djela u cjelini.",
      "Usporedite polazne tekstove s književnim djelima slične problematike.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Preobražaj (Kafka, 1915.) = egzistencijalizam/modernizam = Gregor Samsa = preobrazio se u insekta = alijenacija = zaboravlja vlastitu čovječnost/prošlost. Kiklop (Marinković, 1965.) = Melkior Tresić = Zagreb pred rat = apokaliptičke vizije (Kiklop = ratna sila), nemogucnost bijega, egzistencijalna tjeskoba. Oba lika: otuđenost od društva, nemoć, gubitak identiteta. Usporedba: Kafka=apstraktna alijenacija; Marinković=rat+apokalipsa. Slična djela: Stranac (Camus), Nit (Beckett).",
    minRijeci:400, maxRijeci:700,
  },
  "2019_jesen_esej_B":{
    key:"2019_jesen_esej_B",
    year:2019, season:"jesen", razina:"B",
    label:"2018./2019. jesenski rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"Nora — tarantela i dramski sukobi",
    tekstovi:[
      {naslov:"Henrik Ibsen, Nora (ulomak — ples tarantele)", tekst:ESEJ_T1_2019_jesen},
    ],
    smjernice:[
      "Predstavite djelo Nora u kontekstu književnopovijesnoga razdoblja u kojemu je nastalo.",
      "Prikažite temeljne dramske sukobe u djelu Nora.",
      "Interpretirajte polazni tekst i objasnite čime je motivirano Norino ponašanje u polaznom tekstu.",
      "Usporedite Noru sa sličnim književnim likovima.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Esej treba: (1) Nora (1879.) = realistička drama Henrika Ibsena, kritika bourgeoisijskog braka i položaja žene, skandinavski realizam; (2) temeljni dramski sukobi: Nora vs. Helmer (sloboda vs. ovisnost), Nora vs. Krogstad (tajna mjenica), Nora vs. vlastita savjest; (3) analiza teksta: Nora pleše tarnatelu divlje ('kao da je o glavu') da bi Helmeru odvratila pažnju od sandučića (pismo s otkrivenom tajnom); ples = disimulacija, obmana, ali i emocionalnost; Nora kontrolira situaciju dok se čini izgubljenijom; (4) Nora vs. Antigona (neposlušnost vlasti/zakonu), Nora vs. Dunja Raskoljnikova (žrtvovanje), Nora vs. Lucija Stipančić (pasivnost vs. aktivnost); (5) svevremenost teme emancipacije.",
    minRijeci:350, maxRijeci:500,
  },
    "2019_ljeto_esej_A":{
    key:"2019_ljeto_esej_A",
    year:2019, season:"ljeto", razina:"A",
    label:"2018./2019. ljetni rok — Viša razina (A)",
    trajanje:160,
    naslov:"Tin Ujević — Igrača vjetrova + Dva puta jao — tema patnje, sloboda i sudbina",
    polaznoP:"Usporedite polazne tekstove. Protumačite univerzalnost tematike.",
    tekstovi:[
      {naslov:"Tin Ujević, Igrača vjetrova", tekst:`Pati bez suze, živi bez psovke,
i budi mirno nesretan.
Tašte su suze, a jadikovke
ublažit nece gorki san.
Podaj se pjanom vjetru života,
pa nek te vije bilo kud;
pusti ko listak neka te mota
u ludi polet vihor lud.
Leti ko lišce što vir ga vije,
za let si, dušo, stvorena;
za zemlju nije, za pokoj nije
cvijet što nema korijena.

Tin Ujević`},
      {naslov:"Tin Ujević, Dva puta jao (ulomak)", tekst:`Moj život! Ne govorite mi o njemu kako je jadan, kukavan, neispavan, sav pogažen i pogružen, dostojan stida i prezira. Kada bih još uvijek znao grcki, naveo bih za naslovni list tragedije moga života onaj koji pocinje: io, io, papapai, dakle: jao, jao, kuku meni. Kako bi samo lijepo bilo slobodno stupati po poljima, trcati, plivati, veseliti se bez zapreke! Ali od svega toga ništa. Koliko sam puta pomislio o sretnome danu kada mi poderane cipele nece ranjavati nogu, kada cu imati na sebi sasvim cisto rublje. Kako bih se napokon osjetio blaženim veslajuci po jezercima zaokruženim baršunastim gajevima! Nego život me evo tako spleo, uništio, šatro, nije mi dao nikakve slobode ni ljubavi, i sapeo me kao kliještima medu dva prokleta kukavna epigrama. Koliko sada vidim kako smo lично nemoeni (pred Augijasovim štalama), mi mali pjesnici i sanjari, i kako smo osunoeni da budemo igrackom vjetrova i žrtvom svih moenih i lukavih. Što ima lijepa da se sacuva od moje uspomene? – Samo moje suze i moje molitve, jer su barem one bile ciste.

Tin Ujević`},
    ],
    smjernice:[
      "Predstavite stvaralaštvo Tina Ujevića u kontekstu vremena u kojemu je stvarao.",
      "Predstavite tematska i stilska obilježja Ujevićeva pjesništva te ih povežite s konkretnim pjesmama i/ili zbirkama.",
      "Usporedite polazne tekstove na sadržajnoj i stilskoj razini.",
      "Protumačite univerzalnost tematike polaznih tekstova i povežite ih s djelima slične tematike.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Tin Ujević (1891.-1955.) = moderna/simbolizam/avangarda = Lelek sebra, Kolajna, Auto na korzu. Igrača vjetrova = lirska pjesma = stoicko prihvacanje patnje (pati bez suze), motiv vjetra/besciljnog lutanja, slobodnog pada. Dva puta jao = esejisticka proza = autoironija, lamentacija, osjecaj nemoei, patnja pjesnika. Oba: tema sudbine i nemoei pred životom. Usporedba: forma (stih vs. proza), ton (stoican vs. placevan), ali ista tema — egzistencijalna patnja i sloboda.",
    minRijeci:400, maxRijeci:700,
  },
  "2019_ljeto_esej_B":{
    key:"2019_ljeto_esej_B",
    year:2019, season:"ljeto", razina:"B",
    label:"2018./2019. ljetni rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"Gospoda Glembajevi — glembajevština i Leone",
    tekstovi:[
      {naslov:"Miroslav Krleža, Gospoda Glembajevi (ulomak — slika i vaga)", tekst:ESEJ_T1_2019_ljeto},
    ],
    smjernice:[
      "Predstavite djelo Gospoda Glembajevi u kontekstu književnopovijesnoga razdoblja u kojemu je nastalo.",
      "Portretirajte Leonea Glembaja na temelju djela u cjelini.",
      "Interpretirajte polazni tekst. Protumačite ulogu upotrebe njemaČkoga i latinskoga jezika.",
      "Objasnite ulogu polaznoga teksta u kontekstu djela u cjelini. Protumačite ulogu barbocijevske legende.",
      "Usporedite Leonea Glembaja sa sličnim književnim likovima.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Esej treba: (1) Gospoda Glembajevi (1928.) = realistička/modernistička drama Miroslava Krleže, glembajevski ciklus (trilogija), kritika buržoaske obitelji i moralne korupcije; (2) Leone = slikar, povratnik, kritičan prema obitelji — vidi 'tamnu' stranu Glembajeva: varalice, ubojice; Fabriczy predstavlja apologetski pogled; (3) analiza teksta: vaga = simbol nepravednog vaganja (lažno, krivo), Leone vs. Fabriczy — Leone odbija idealizaciju obitelji; barbocijevska legenda = tajna obiteljska povijest (kriminal, samoubojstva) koju Leone smatra istinom a Fabriczy babjom pričom; njemački = civiliziranost i distanca, latinski = elitizam; (4) Leone kao lik srodan Hamletovom (moralna zapitanost, nemogućnost djelovanja), Rastignacu (ambicija vs. moral); (5) glembajevština = moralno propadanje buržoazije.",
    minRijeci:350, maxRijeci:500,
  },
    "2018_jesen_esej_A":{
    key:"2018_jesen_esej_A",
    year:2018, season:"jesen", razina:"A",
    label:"2017./2018. jesenski rok — Viša razina (A)",
    trajanje:160,
    naslov:"Zločin i kazna (Dostojevski) + Stranac (Camus) — Raskoljnikov i Meursault, osobna i društvena odgovornost",
    polaznoP:"Portretirajte Raskoljnikova i Meursaulta. Usporedite odnos prema odgovornosti.",
    tekstovi:[
      {naslov:"Fjodor Mihajlovič Dostojevski, Zločin i kazna (ulomak — presuda)", tekst:`Osuda je bila ipak blaza, nego što se moglo ocekivati, kad se uzme u obzir izvršen zlocin, a mozda je bila blaza baš zato jer zlocinac ne samo da nije nastojao opravdati sebe, nego je nekako i sam iskazivao zelju da sam sebe okriviti još više. Sve neobicne i osobite okolnosti u toj stvari bijahu uzete u obzir. O bolesnom i bijednom stanju zlocinca, prije nego što je izvršio zlocin, nije bilo ni najmanje sumnje. Što se nije okoristio grabezom, pripisalo se donekle probudenom kajanju, donekle pak nepotpunom zdravlju umnih sposobnosti za vrijeme izvršivanja zlocina. Napokon prijava njegova, da je on krivac, u onaj cas, kad se stvar neobicno zamrsila - sve je to konacno pripomoglo da je okrivljeniku ublazena sudbina.
Ukratko, završilo se tim da je zlocinac osuden na robiju drugog reda, svega na osam godina, uzevši u obzir da se prijavio sam, i neke druge olakotne okolnosti.

Fjodor Mihajlovič Dostojevski, Zločin i kazna`},
      {naslov:"Albert Camus, Stranac (ulomak — presuda)", tekst:`Suci se vratiše. Nabrzinu procitaše porotnicima niz pitanja. Zacuh: kriv za umorstvo... s predumišljajem... olakotne okolnosti. Porotnici izinosu, a mene odvedoše u onu prostoriju gdje sam vec jednom cekao.
Cekali smo vrlo dugo, mislim gotovo tri cetvrti sata. Napokon zazvoni zvonce. Odlazeci, branitelj mi rece: Predsjednik porote procitat ce najprije odgovore. Vas ce uvesti tek kad se bude izricala osuda.
Cad se vrata pregrade otvoriše, doceka me tišina u sudnici, i onaj cudni osjecaj koji me obuze kad primijetih da je mladi novinar odvratio pogled od mene. Predsjednik sudskog vijeca nekako cudno saopci da ce mi glava biti odrubljena na javnom mjestu u ime francuskoga naroda. Zandarmi su bili vrlo blagi prema meni. Branitelj mi stavi ruku na zapešce. Nisam više ni na što mislio. Medutim, predsjednik me upita nemam li što dodati. Porazmislih i rekoh: Nemam.

Albert Camus, Stranac`},
    ],
    smjernice:[
      "Predstavite poetiku djela Zločin i kazna i poetiku djela Stranac.",
      "Portretirajte Raskoljnikova i Meursaulta na temelju djela u cjelini.",
      "Usporedite polazne tekstove.",
      "Na temelju citateljakoga iskustva objasnite odnos osobne i drustevne odgovornosti i povežite ga s polaznim tekstovima.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Zločin i kazna (Dostojevski, 1866.) = psihološki roman = Raskoljnikov = teorija nadcovjeka = grize ga savjest = kajanje = prijavljuje se = traži kaznu. Stranac (Camus, 1942.) = egzistencijalizam = Meursault = ravnodušnost, apsurd = nema kajanja = prikazuje se kao opasan jer ne place na majcinom pogrebu. Usporedba: oba su ubojice; Raskoljnikov = osobna odgovornost + moralni rast; Meursault = društvo ga osuduje, ali ne suduje za ubojstvo nego za nedostatak emocija.",
    minRijeci:400, maxRijeci:700,
  },
  "2018_jesen_esej_B":{
    key:"2018_jesen_esej_B",
    year:2018, season:"jesen", razina:"B",
    label:"2017./2018. jesenski rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"Žrtvovanje i dužnost prema sebi — Dostojevski i Ibsen",
    tekstovi:[
      {naslov:"Fjodor Mihajlovič Dostojevski, Zločin i kazna (ulomak)", tekst:ESEJ_T1_2018_jesen},
      {naslov:"Henrik Ibsen, Nora (ulomak — rastanak)", tekst:ESEJ_T2_2018_jesen},
    ],
    smjernice:[
      "Predstavite poetiku djela Zločin i kazna i poetiku djela Nora.",
      "Objasnite ulogu polaznih tekstova u kontekstu djela Zločin i kazna i djela Nora u cjelini.",
      "Usporedite polazne tekstove.",
      "Protumačite na temelju čitateljevog iskustva univerzalnost tematike polaznih tekstova.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Esej treba: (1) Zločin i kazna (Dostojevski, 1866.) = psihološki roman, egzistencijalna kriza, krivnja i iskupljenje; Nora (Ibsen, 1879.) = realistička drama, emancipacija žene; (2) T1 = Raskoljnikov analizira Dunjino žrtvovanje — uspoređuje je sa Sonjom Marmeladovom, 'prodajom' radi plemenitog cilja; moralna dilema o žrtvovanju slobode/savjesti; T2 = Nora odbija žrtvovati se — inzistira na dužnostima prema samoj sebi; (3) usporedba: obje žene su u situaciji gdje se od njih očekuje žrtvovanje; T1 = kritika pasivnog prihvaćanja (Dunja se 'prodaje' kao Sonja), T2 = aktivni otpor (Nora odlazi); tema je ista: je li žena slobodna ili mora žrtvovati sebe?; (4) aktualizacija: položaj žene, sloboda vs. obveza, autentičnost vs. konvencije; (5) vlastiti stav s primjerima.",
    minRijeci:350, maxRijeci:500,
  },
    "2018_ljeto_esej_A":{
    key:"2018_ljeto_esej_A",
    year:2018, season:"ljeto", razina:"A",
    label:"2017./2018. ljetni rok — Viša razina (A)",
    trajanje:160,
    naslov:"Hamlet (Shakespeare) + Lovac u žitu (Salinger) — gluma, autentičnost, stvarni život i kazalište",
    polaznoP:"Usporedite polazne tekstove. Protumačite odnos stvarnoga života i kazališta.",
    tekstovi:[
      {naslov:"William Shakespeare, Hamlet (ulomak — Hamlet i glumci)", tekst:`(Ulazi Hamlet sa dva ili tri glumca.)
HAMLET: Govorite taj govor, molim vas, kako sam ga ja vama izgovorio; okretno, s lakoćom; jer ako ga afektirano izgovorite, kao što mnogi glumci čine, bilo bi mi draže da gradski telal viče moje stihove. I nemojte odveć rukom sjeći zrak, ovako; nego budite odmjereni u svemu.
PRVI GLUMAC: Ja vam to obećajem.
HAMLET: Nemojte biti ni suviše ukočeni; dajte da vas vodi rasuđivanje. Uskladite radnju s riječima, a riječi s radnjom; i naročito pazite da ne prekoračite naravnu umjerenost. Jer sve što je pretjerano protivi se cilju glume kojoj je svrha i u početku i sada, bila i jest, da drži tako reći zrcalo prirodi; da bi pokazala vrlini njezine osobine, preziru njegovu sliku, a samome svijetu i srži vremena njihov otisak i lik.

William Shakespeare, Hamlet`},
      {naslov:"J. D. Salinger, Lovac u žitu (ulomak — Holden na predstavi)", tekst:`Predstava nije bila tako loša kao neke koje sam gledao. Bila je, međutim, ipak bliže onim blesavim. Alfred Lunt i Lynn Fontanne igrali su stari par, i bili su vrlo dobri, ali nisu mi se baš svidjeli. Bili su, ipak, nekako drukčiji od ostalih, to da. Nisu se ponašali kao obični ljudi, a nisu se ponašali ni kao glumci. Teško je to objasniti. Držali su se nekako više kao da su svjesni da su veličine i sve. Hoću reći, bili su dobri, ali bili su nekako previše dobri. Kad bi jedno od njih prestalo govoriti, ono drugo bi reklo nešto vrlo brzo, odmah nakon toga. To je trebalo izgledati kao da ljudi zaista pričaju i upadaju jedno drugom u riječ. Nevolja je bila u tome što je sve to bilo isuviše slično tome kako ljudi razgovaraju. Ponašali su se nekako pomalo slično onome kako stari Ernie, dolje u Greenwich Villageu, svira klavir. Ako čovjek nešto čini isuviše dobro, onda, nakon izvjesnog vremena, počinje se time razmetati. A nakon toga nije više tako dobar kao što je bio.

J. D. Salinger, Lovac u žitu`},
    ],
    smjernice:[
      "Predstavite poetiku djela Hamlet i poetiku djela Lovac u žitu.",
      "Objasnite ulogu polaznih tekstova u kontekstu djela Hamlet i Lovac u žitu u cjelini.",
      "Usporedite polazne tekstove.",
      "Protumačite na temelju čitateljskoga iskustva odnos stvarnoga života i kazališta.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Hamlet (Shakespeare) = Renesansa = kazalište kao zrcalo prirode = Hamlet koristi kazalište da razotkrije Klaudija. Lovac u žitu (Salinger) = proza u trapericama = Holden prezire pretvaranje. Oba teksta: autentičnost vs. gluma/pretvaranje. Hamlet = gluma treba biti prirodna. Holden = glumci su 'previše dobri' = pretjerano usavršeni = neautentični. Tema: gdje je granica između stvarnog i odigranog?",
    minRijeci:400, maxRijeci:700,
  },
  "2018_ljeto_esej_B":{
    key:"2018_ljeto_esej_B",
    year:2018, season:"ljeto", razina:"B",
    label:"2017./2018. ljetni rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"Zvijezde i čovjek — Šimić i Pupačić",
    tekstovi:[
      {naslov:"Antun Branko Šimić, Opomena", tekst:ESEJ_T1_2018_ljeto},
      {naslov:"Josip Pupačić, * (Zvijezda da mi je biti)", tekst:ESEJ_T2_2018_ljeto},
    ],
    smjernice:[
      "Predstavite Antuna Branka Šimića i Josipa Pupačića u kontekstu književnopovijesnih razdoblja u kojima su stvarali.",
      "Opišite tematske i stilske značajke Šimićeve i Pupačićeve lirike.",
      "Usporedite polazne tekstove.",
      "Usporedite temu polaznih tekstova s djelima slične tematike.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Esej treba: (1) Šimić (1898.–1925.) — ekspresionizam, jedina zbirka Preobraženja (1920.), tema tijela i duše, slobodni stih; Pupačić (1928.–1971.) — krugovaška generacija, socijalna i intimna lirika; (2) tematske značajke: Šimić — prolaznost, transformacija materije u svjetlo, smrt kao preobrazba, imperativni ton (Čovječe pazi!); Pupačić — čežnja za uzvišenošću, žudnja za besmrtnošću kroz identifikaciju sa zvijezdom; (3) usporedba: obje pjesme koriste motiv zvijezda, ali drugačije — Šimić: zvijezde kao ideal kojemu čovjek treba težiti/postati; Pupačić: želi BITI zvijezda da bi netko njega zamijetio i volio; T1 = apel čovječanstvu, T2 = osobna čežnja; (4) veza: Preradovićevo Cvijeće, Ujevićev Lelek sebra, motivi zvijezda u lirici; (5) zaključak o prolaznosti i besmrtnosti.",
    minRijeci:350, maxRijeci:500,
  },
    "2017_jesen_esej_A":{
    key:"2017_jesen_esej_A",
    year:2017, season:"jesen", razina:"A",
    label:"2016./2017. jesenski rok — Viša razina (A)",
    trajanje:160,
    naslov:"Matoš, Djevojčici mjesto igračke + Cesarić, Molitva — tema djetinjstva, odrastanje, lirski subjekt",
    polaznoP:"Usporedite polazne tekstove. Protumačite universalnost teme.",
    tekstovi:[
      {naslov:"Antun Gustav Matoš, Djevojčici mjesto igračke (sonet)", tekst:`Ljerko, srce moje, ti si lutka mala,
Pa ne slutiš smisla žalosnih soneta,
Kesteni pred kućom duhu tvom su meta,
Jos je deset karnevala do tvog bala.
Ti se čudiš, dušo. Smijat si se stala
Ovoj ludoj priči. Tvoja duša sveta
Jos ne sniva, kako zbore zrela ljeta.
Gledaš me ko grle. Misliš – to je šala.
Al će doći veče, kad ćeš, ko Elvira,
don Huánâ sita i lažnih kavalira,
Sjetiti se sjetno nježne ove strofe.
Moje će ti ime šapnut moja muza,
A u modrom oku jecati će suza
Ko za mrtvim clownom iza katastrofe.

Antun Gustav Matoš`},
      {naslov:"Dobriša Cesarić, Molitva", tekst:`Što htjedoh reći, davno sve sam
U djetinjstvu jos reko bogu,
Ali da nisam kakav jesam
I da vjerovat jos mogu,
Za ovo dijete, koje volim,
Ovako boga bih da molim:
(...)
O dobri Bože, ako one
Zvijezde što sjaju njoj sudbìnu
U nevolju i jad je gone,
U očajanje i crninu,
Milostiv pogled na nju svrni,
Gle, ima oči kao lane,
Od budućih joj dana crnih
Učini, Bože, svijetle dane!
(...)
A kada spustiš ruku na nju,
Spusti je samo da je gladiš!

Dobriša Cesarić`},
    ],
    smjernice:[
      "Predstavite Antuna Gustava Matoša i Dobrišu Cesarića u kontekstu književnopovijesnih razdoblja u kojima su stvarali.",
      "Predstavite tematske i stilske značajke Matoševe i Cesarićeve lirike.",
      "Usporedite polazne tekstove.",
      "Protumačite universalnost teme polaznih tekstova i usporedite ih s književnim djelima slične tematike.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Matoš (moderna/impresionizam) = Djevojčici = sonet, obraćanje djevojčici Ljerki = kontrast dječje nevinosti i gorke odrasle realnosti; ironija i melankolija. Cesarić (moderna/između dva rata) = intimna lirika = molitva za kćer = zaštita od životnih nedaća. Oba = dijete kao simbol nevinosti; odrasli vide prijetnju odrastanja. Slična tematika: Preradović/Zori, romantičarska lirika o djeci, Nazorove dječje pjesme.",
    minRijeci:400, maxRijeci:700,
  },
  "2017_jesen_esej_B":{
    key:"2017_jesen_esej_B",
    year:2017, season:"jesen", razina:"B",
    label:"2016./2017. jesenski rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"Sofoklo i Antigona — osobna savjest nasuprot državnoj vlasti",
    tekstovi:[
      {naslov:"Sofoklo, Antigona — Izmena (Antigona i Ismena)", tekst:ESEJ_T1_2017_jesen},
      {naslov:"Sofoklo, Antigona — Kreont i Antigona", tekst:ESEJ_T2_2017_jesen},
    ],
    smjernice:[
      "Predstavite Sofokla u kontekstu književnopovijesnoga razdoblja u kojemu je stvarao.",
      "Na temelju Sofoklova djela Antigona predstavite obilježja književne vrste kojoj pripada.",
      "Usporedite polazne tekstove.",
      "Usporedite Antigonu sa sličnim književnim likovima.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Esej treba: (1) Sofoklo (496.–406. pr. Kr.) — grčka antika, zlatno doba Atene (Periklo), atička tragedija kao vrhunac dramske književnosti; (2) obilježja tragedije: hamartia (tragična pogreška), katarza, kor, dijalog, peripetija — Antigona kao sukob između Kreontova zakona i Antogoninog božanskog zakona; (3) usporedba tekstova: T1 = Ismena kapitulira pred silom (pragmatičnost vs. idealizem), T2 = Antigona brani nepisane božanske zakone nad ljudskim — obje su sestre, suprotni stavovi; (4) Antigona u kontekstu: Nora (Ibsen) = žena koja se buni, Lucija Stipančić = žena žrtva, Hekuba; (5) aktualizacija: pitanje savjesti vs. zakona, građanska neposlušnost.",
    minRijeci:350, maxRijeci:500,
  },
    "2017_ljeto_esej_A":{
    key:"2017_ljeto_esej_A",
    year:2017, season:"ljeto", razina:"A",
    label:"2016./2017. ljetni rok — Viša razina (A)",
    trajanje:160,
    naslov:"Bijeg (Nehajev) i Montaigneovi Eseji — obrazovni model, Đuro, ravnatelj",
    polaznoP:"Portretirajte Đuru. Usporedite odgojne modele iz polaznih tekstova. Koji model je temelj suvremenog školstva?",
    tekstovi:[
      {naslov:"Milutin Cihlar Nehajev, Bijeg (ulomak — Đuro i ravnatelj)", tekst:`Dakle, cujte me. Ja sam bio kod vas na predavanju i moram pohvaliti vas interes za predmet. Vidi se mar i ozbiljnost; dakako, da li ce napredak biti prema vasem trudu, o tom se jos ne da nista reci. Obucavanje je teska stvar i iste mnogo iskustva. Ja sam na primjer i sam opazio da ste mjestimice odvisE duboko i potanko zasli u predmet. Vi hocete da dokažete da je psihologija uopce malo teska disciplina za gimnaziju? Jest, no zato se upravo valja drzati knjiga i propisa visoke vlade da ne izgubimo s vida temeljnu namjeru i svrhu obuke. Andrij asevic osjeti na sebi ravnateljev uprti pogled i to mu bude neugodno.
Da, kazali su mi a i sam sam vidio - vi cesto puta zadjete u druge discipline, date se odvisE lako zavesti pitanjima koja djaci stavljaju profesoru - i koja pitanja imaju samo tu svrhu da se potrosi dio skolskoga vremena.

Milutin Cihlar Nehajev, Bijeg`},
      {naslov:"Michel de Montaigne, Eseji (ulomak — o odgoju)", tekst:`Neprestano nam se pune usi kao da se lijevkom toci u bacvu, a nama je samo ponavljati ono sto je receno. Htio bih da taj novi odgojitelj to ispravi i da na samom pocetku, vec prema mogucnostima duha koji je dobio u ruke, pocne stavljati ga pred izbor, dajuci mu da sve iskusa, izabere i sam odluci, ponekad mu probijajuci put, a ponekad pustajuci da ga sam prokrci. Ne trazim da on smislja i sam govori, nego hocu da svog ucenika slusa kako on govori.
Neka od djeteta ne trazi samo rijeci iz zadace, nego neka trazi njihov smisao i bit; neka o uspjehu sto ga je postiglo ne sudi po njegovu pamcenju nego po njegovu zivotu. Mora mu otvoriti mogucnost visest rukog suda: ako moze, izabrat ce, a ako ne moze, ostat ce u dvojbi. Samo su ludi ljudi uvijek sigurni i odlucni.

Michel de Montaigne, Eseji`},
    ],
    smjernice:[
      "Predstavite roman Bijeg u kontekstu književnopovijesnog razdoblja u kojemu je nastao.",
      "Smjestite prvi polazni tekst u sadržajni kontekst romana Bijeg. Portretirajte Đuru Andrijaševića.",
      "Usporedite polazne tekstove.",
      "Objasnite koji bi obrazovni model trebao biti temelj suvremenoga školstva.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Bijeg (Nehajev, 1909.) = moderna = psihološki roman. Đuro = intelektualac koji ne pronalazi smisao; ravnatelj = simbol represivnog školskog sustava koji gazi individualnost. Montaigne (16.st.) = humanistički odgoj = dijete uči razmišljati i birati, ne memorirati. Kontrast: ravnateljev model (pamćenje, knjiga, propis) vs. Montaigneov model (sloboda, izbor, kritički duh). Suvremeno školstvo bi trebalo slijediti Montaignea.",
    minRijeci:400, maxRijeci:700,
  },
  "2017_ljeto_esej_B":{
    key:"2017_ljeto_esej_B",
    year:2017, season:"ljeto", razina:"B",
    label:"2016./2017. ljetni rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"Odgoj i društvena sredina u životu žena — Novak i Šimunović",
    tekstovi:[
      {naslov:"Vjenceslav Novak, Posljednji Stipančići (ulomak)", tekst:ESEJ_T1_2017_ljeto},
      {naslov:"Dinko Šimunović, Duga (ulomak)", tekst:ESEJ_T2_2017_ljeto},
    ],
    smjernice:[
      "Predstavite roman Posljednji Stipančići u kontekstu književnopovijesnoga razdoblja u kojemu je nastao.",
      "Portetirajte Luciju Stipančić na temelju djela u cjelini.",
      "Usporedite polazne tekstove.",
      "Protumačite na temelju čitateljeskog iskustva kako odgoj i društvena sredina određuju živote žena.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Esej treba: (1) Posljednji Stipančići u realizmu/naturalizmu — Vjenceslav Novak, tema propasti patricijske obitelji i položaja žene; (2) Lucija kao žrtva patrijarhalnog odgoja — zatočena, izolirana, nema slobode, infantilizirana (ne smije na ulicu); (3) usporedba: i Lucija i Srna (Brunhilda) su djevojčice kojima se ograničava sloboda zbog spola i društvenih normi; obje čeznu za slobodom; Lucija = gradska patricijska sredina, Srna = bogata ruralna obitelj; (4) odgoj određuje sudbinu: žena je objekt, ne subjekt — patrijarhat u oba slučaja; (5) kritički stav o suvremenom položaju žene uz primjere.",
    minRijeci:350, maxRijeci:500,
  },
    "2016_jesen_esej_A":{
    key:"2016_jesen_esej_A",
    year:2016, season:"jesen", razina:"A",
    label:"2015./2016. jesenski rok — Viša razina (A)",
    trajanje:160,
    naslov:"Posljednji Stipančići (Novak) i Bijeg (Nehajev) — Juraj i Đuro, odgoj i sredina",
    polaznoP:"Usporedite Jurja Stipančića i Đuru Andrijaševića. Kako odgoj i sredina određuju sudbine likova?",
    tekstovi:[
      {naslov:"Vjenceslav Novak, Posljednji Stipančići (ulomak — Jurjev talent)", tekst:`Činilo se da je otac radio pravo što je sudio u pogledu Jurjevoga talenta. U petoj godini znao je Juraj čitati i pisati, u šestoj godini razumio se već u čitanje geografske karte, znao naizust sve evropske države sa glavnim im gradovima i brojem stanovnika, znao imena gorâ, rijekâ i tako dalje. U osmoj godini podučavao ga je uz oca u školskim predmetima pater Bonaventura. Matematika je Jurju osobito išla u glavu, a učio je lako i jezike. U desetoj godini govorio je pored materinskoga jezika njemački i talijanski i prevađao iz latinskoga.

Vjenceslav Novak, Posljednji Stipančići`},
      {naslov:"Milutin Cihlar Nehajev, Bijeg (ulomak — Đurin talent)", tekst:`Sa pet godina Đuro je već razumio i znao više nego "đaci" koji su svršavali pučku školu. Sve je gledalo u njem neko gotovo čudovište, osobito otkad su u gimnaziji profesori potvrdili da takva talenta nije bilo za njihova vremena u školi. Još jače se raširi to uvjerenje kad su u omladinskim listovima počeli izlaziti neki Đurini književni pokušaji; sa sedamnaest godina vrijedio je već i u očima sudrugova i kod profesora kao sigurna buduća veličina.
Više od svih bila je o tom uvjerena njegova mati. Koliko je mogla, podupirala je sama sina, kupovala mu knjige, dala ga izučiti glasovir. U obitelji bilo je već kao stalno da će od tjelesno inače dosta slaboga dječaka postati slavan muž; a to je potvrdila i teta Klara: Od ovoga dječaka bit će ili nešto ili ništa.

Milutin Cihlar Nehajev, Bijeg`},
    ],
    smjernice:[
      "Predstavite romane Posljednji Stipančići i Bijeg u kontekstu razdoblja u kojima su nastali.",
      "Usporedite Jurja Stipančića i Đuru Andrijaševića na temelju djela u cjelini.",
      "Usporedite polazne tekstove.",
      "Protumačite na temelju čitateljskoga iskustva kako odgoj i društvena sredina određuju živote književnih likova.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Posljednji Stipančići (Novak, 1899.) = realizam = propast senjske obitelji; Bijeg (Nehajev, 1909.) = moderna = pasivni intelektualac. Oba kao djeca = izvanredan talent; Juraj = aristokratski odgoj, visoka očekivanja, ali kasniji pad (propast obitelji, alkohol). Đuro = odgajan u provinciji, pohvale od svih, ali ne može se ostvariti = bijeg, pasivnost. Tema: kako visoka očekivanja i nerealni odgoj uništavaju talente = psihološka analiza.",
    minRijeci:400, maxRijeci:700,
  },
  "2016_jesen_esej_B":{
    key:"2016_jesen_esej_B",
    year:2016, season:"jesen", razina:"B",
    label:"2015./2016. jesenski rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"Ljubav i smrt u lirici — Matoš i Vraz",
    tekstovi:[
      {naslov:"Antun Gustav Matoš, Utjeha kose", tekst:ESEJ_T1_2016_jesen},
      {naslov:"Stanko Vraz, Otkud modre oči?", tekst:ESEJ_T2_2016_jesen},
    ],
    smjernice:[
      "Predstavite Antuna Gustava Matoša i njegovo stvaralaštvo.",
      "Opišite tematske i stilske značajke Matoševe lirike.",
      "Usporedite polazne tekstove.",
      "Protumačite univerzalnost teme polaznih tekstova i povežite ih s književnim djelima slične tematike.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Esej treba: (1) Matoš kao ključni predstavnik hrvatske moderne (1873.–1914.) — sonet, dekadentska lirika, utjecaj francuskog simbolizma; (2) Matoševa lirika: motivi ljubavi, smrti, melankolije, osamljenosti, rodoljublja — sonetna forma; (3) usporedba tekstova: T1 (Matoš) = mrtva voljenja, živa kosa kao jedini trag života, snovita vizija, sonet; T2 (Vraz) = preminula ljubav, nova ljubav, metempsihoza (duša se preseljava), sonet; oboje tematiziraju ljubav i smrt, oboje su soneti, ali T1 je modernistički (dekadentski ugođaj) a T2 romantičarski (vjera u kontinuitet duše); (4) veza s drugim djelima: Preradovićevo Cvijeće, Petrarkina Laura; (5) zaključak o univerzalnosti ljubavi i gubitka.",
    minRijeci:350, maxRijeci:500,
  },
    "2016_ljeto_esej_A":{
    key:"2016_ljeto_esej_A",
    year:2016, season:"ljeto", razina:"A",
    label:"2015./2016. ljetni rok — Viša razina (A)",
    trajanje:160,
    naslov:"Povratak Filipa Latinovicza (Krleža) — Filip, Europa, Panonija, otuđenost",
    polaznoP:"Portretirajte Filipa. Interpretirajte polazni tekst. Povežite s književnim likovima.",
    tekstovi:[
      {naslov:"Miroslav Krleža, Povratak Filipa Latinovicza (ulomak)", tekst:`Leži pod njegovim nogama ogroman čadavi velegrad u oblaku cade i dima, u polusutonu februarskom, i to je ta toliko razvikana Evropa, ta zlatna blagoslovljena zemlja, s modrim toplim južnim zatonima gdje cvatu narancze, i s tim sjevernim strašnim cadavim tvrdavama gdje boluju djeca od angine, a po mokrim ulicama se vuku škrofulozne djevojke. "Kako su žalosne sadrene Hygieje po prašnjavim ljekarnickim izlozima! Kao lim djecjih igracaka, tako su tanke i prozirne i besmislene sve ograde ljudskih shema, kojima se ljudi ograduju od životne istine i od istinite životne stvarnosti. Ljudi su izmislili tapete, sagove, parkete... Ljudi lakiraju svoje nokte kao perverzni istocnjaci, kupaju se u mramornim kupaoni cama, voze se u ugrijanim kocijama, piju gorke želucane likere, ali pojma zapravo nemaju što je to životna stvarnost i kako bi trebalo živjeti?"
Sve cesce i sve intenzivnije javljala se u posljednje vrijeme u Filipu misao, kako bi bilo da se otkine od sve te cade i od tog smrada i da otputuje kuci u Panoniju, gdje nije bio vec davno. Da proživi dolje kod majke na kostanjeveckom vinogradu jednu jesen, bogatu, mirnu, vinorodnu!
"Mracna tintasta jugovina, blijeda mjescina, mlacna noc s dalekim titranjem luci u dolini. Crne krošnje hrastova na raskrscima, uznemirene zvjezdane niti iza maglenih mrlja... Spava Panonija i nema cade, ni jurnjave, ni živaca. Ondje su noci tihe kao ugasla lula: bez svjetala, bez dima, bez cade."

Miroslav Krleža, Povratak Filipa Latinovicza`},
    ],
    smjernice:[
      "Predstavite poetiku romana Povratak Filipa Latinovicza.",
      "Portretirajte lik Filipa Latinovicza na temelju djela u cjelini.",
      "Interpretirajte polazni tekst.",
      "Povežite lik Filipa Latinovicza sa sličnim književnim likovima.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Povratak Filipa Latinovicza (Krleža, 1932.) = ekspresionizam/modernizam. Filip = hrv. slikar koji se vraca iz Europe = sukob artisticke osjetljivosti s okolinom. Europa = čadava, lažna, besmislena civilizacija = razocaran Filip. Panonija = idilicni san = ali i trap tradicija i provincije. Slicni likovi: Đuro Andrijavšević (Nehajev/Bijeg), Kamenski (Matoš/Camao) = autsajderi koji ne mogu naci mjesta.",
    minRijeci:400, maxRijeci:700,
  },
  "2016_ljeto_esej_B":{
    key:"2016_ljeto_esej_B",
    year:2016, season:"ljeto", razina:"B",
    label:"2015./2016. ljetni rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"Hamlet — potraga za smislom i nemogućnost djelovanja",
    tekstovi:[
      {naslov:"William Shakespeare, Hamlet (ulomak — Hamletov monolog)", tekst:ESEJ_T1_2016_ljeto},
    ],
    smjernice:[
      "Predstavite djelo Hamlet u kontekstu književnopovijesnoga razdoblja u kojemu je nastalo.",
      "Portetirajte lik kraljevića Hamleta.",
      "Interpretirajte polazni tekst.",
      "Objasnite svevremenost djela Hamlet.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Esej treba: (1) smjestiti Hamleta u renesansu/elžabetinsku dramu — Shakespeare (1564.–1616.), Hamlet oko 1600.; (2) Hamlet kao lik razdiran između misli i čina — poznat citat 'biti ili ne biti', paraliza od prekomjernog mišljenja; (3) analiza monologa — Hamlet kritizira sebe zbog neaktivnosti, vojnici idu u rat za 'ljusku jajinju' dok on ima pravi razlog (ubojstvo oca) a ne djeluje; (4) svevremenost: pitanje moralne odgovornosti, borba razuma i akcije, korupcija vlasti — relevantno u svim epohama; (5) osobni stav uz primjere.",
    minRijeci:350, maxRijeci:500,
  },
    "2012_ljeto_esej_A":{
    key:"2012_ljeto_esej_A",
    year:2012, season:"ljeto", razina:"A",
    label:"2011./2012. ljetni rok — Viša razina (A)",
    trajanje:160,
    naslov:"Stranac (Camus) i Zločin i kazna (Dostojevski) — sloboda i odgovornost",
    polaznoP:"Usporedite kako Meursault i Raskoljnikov doživljavaju svoju situaciju. Protumačite odnos slobode i odgovornosti.",
    tekstovi:[
      {naslov:"Albert Camus, Stranac (ulomak — suđenje)", tekst:`Nakon kraćeg vremena u prostoriji zazvoni zvonce. Skinuše mi lisice, otvoriše vrata i odvedoše me do optuženičke klupe. Dvorana je bila dupkom puna. Usprkos zastorima, sunce je ovdje-ondje prodiralo u dvoranu i bilo je već zagušljivo. Prozori su bili zatvoreni. Sjedoh, a uza me žandari. U taj čas spazih pred sobom niz lica. Svi me gledahu – shvatih da su to porotnici. Ali ne bih mogao reći po čemu su se razlikovali jedan od drugoga. Imao sam samo dojam da sam pred klupom u tramvaju i da svi ti neznani putnici motre pridošlicu ne bi li otkrili na njemu što smiješno.

Bio sam i malko ošamućen od sveg tog svijeta u zatvorenoj sudnici. Rekoh žandaru do sebe: – Koliko svijeta! – Odgovori mi da je to zbog novina, i pokaza mi skupinu ljudi koji su stajali oko stola podno klupe za porotnike. – Eno ih. – Pripitah: – Tko? – a on mi ponovi: – Novinari.

Albert Camus, Stranac`},
      {naslov:"Fjodor Mihajlovič Dostojevski, Zločin i kazna (ulomak — Raskoljnikov nakon ubojstva)", tekst:`U prvi čas pomisli da će šenuti pameću. Obuzme ga strašna studen; ali mu je hladno bilo i od groznice koja ga je već odavno u snu bila spopala. A sad ga iznenada podiđe takva jeza da zacvokota zubima i sve u njemu uzdrhti. Otvori vrata i osluhne: u kući je sve živo spavalo.

Jurne do prozora. Bilo je prilično svijetlo te počne brže-bolje ogledavati sama sebe, čitava, od glave do pete, svu svoju odjeću: nema li kakvih tragova? Ali nije mu valjao posao; dršćući od jeze, počne skidati sve sa sebe i ponovno pomno razgledati. Na resama bilo je gustih tragova od zgrušane krvi. Zgrabi velik džepni nož i obreže rese.

„Što, zar već zbilja počinje, zar već zbilja dolazi kazna? (...)" Noge su mu klecale. „Od straha", promrsi u sebi. „To je njihova lukavština! Hoće da me lukavštinom namame pa da me onda najednom zaskoče."

Fjodor Mihajlovič Dostojevski, Zločin i kazna`},
    ],
    smjernice:[
      "Predstavite romane Stranac i Zločin i kazna u kontekstu razdoblja u kojima su nastali.",
      "Smjestite polazne tekstove u kontekst romana.",
      "Portretirajte likove Meursaulta i Raskoljnikova u kontekstu romana.",
      "Usporedite i opišite kako, prema polaznim tekstovima, Meursault i Raskoljnikov doživljavaju svoju situaciju. Objasnite uzrok njihova doživljaja i potkrijepite primjerima iz polaznih tekstova.",
      "Protumačite u kakvu su odnosu sloboda i ljudska odgovornost na temelju pročitanih romana. Potkrijepite čitateljskim iskustvom i primjerima iz romana.",
    ],
    ocjenaKljuc:"Stranac (Camus, 1942.) = egzistencijalizam/apsurdizam; Zločin i kazna (Dostojevski, 1866.) = psihološki realizam. Meursault = ravnodušan, otuđen, suočava se sa suđenjem bez emocija (tramvaj-metafora za porotnike); Raskoljnikov = krivnja, strah, paranoja (tragovi krvi, noge kljone). Meursault = ne shvaća ozbiljnost situacije; Raskoljnikov = muči ga savjest. Sloboda vs. odgovornost: Meursault negira moralnu odgovornost (apsurd), Raskoljnikov je nagrizen grijesovnom savješću (psihološka nužnost kazne).",
    minRijeci:400, maxRijeci:600,
  },
  "2012_ljeto_esej_B":{
    key:"2012_ljeto_esej_B",
    year:2012, season:"ljeto", razina:"B",
    label:"2011./2012. ljetni rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"Dekameron — kuga, struktura i renesansni svjetonazor",
    polaznoP:"Prikažite kako su se ljudi odnosili prema pojavi kuge. Usporedite svjetonazor srednjovjekovnog i renesansnog čovjeka.",
    tekstovi:[
      {naslov:"Giovanni Boccaccio, Dekameron — Uvod (ulomak — kuga u Firenci)", tekst:ESEJ_2012_ljeto_B},
    ],
    smjernice:[
      "Predstavite zbirku novela Dekameron u kontekstu književnopovijesnog razdoblja u kojemu je nastala. Objasnite naslov i strukturu zbirke.",
      "Prikažite na temelju polaznog teksta kako su se ljudi odnosili prema pojavi kuge. Predstavite pripovjedača, njegova zapažanja i komentare. Svoje tvrdnje potkrijepite primjerima.",
      "Prikažite ljudske osobine koje dolaze do izražaja u suočavanju s bolešću. Prokomentirajte kako djevojke i mladići prevladavaju životne teškoće i tragedije u novelama koje slijede. Izdvojite moralnu poruku, povežite je s novelom prema vlastitu izboru iz zbirke Dekameron i potkrijepite primjerima.",
      "Na temelju polaznog teksta i odabrane novele usporedite svjetonazor srednjovjekovnog i renesansnog čovjeka. Uočite sličnosti i razlike. Prokomentirajte koliko je tema bolesti inspirativna umjetnicima.",
    ],
    ocjenaKljuc:"Boccaccio (1313.–1375.) = predrenesansa/trecento; Dekameron = 100 novela, 10 kazivača (7 žena + 3 muškarca), 10 dana bijega od kuge; uvod opisuje kuzu u Firenci 1348.; reakcije: bijeg od bolesnih, umjerenost + izolacija + glazba; pripovjedač = svjedok ('moje oči vidješe'); renesansni čovjek = ovostrano usmjeren, slavi ljubav i žudnju; vs. srednjovjekovni = religija i pokora; primjer novele prema izboru (Grizelda, Čikibio, Federigo degli Alberighi...)",
    minRijeci:350, maxRijeci:500,
  },
    "2012_jesen_esej_A":{
    key:"2012_jesen_esej_A",
    year:2012, season:"jesen", razina:"A",
    label:"2011./2012. jesenski rok — Viša razina (A)",
    trajanje:160,
    naslov:"Preobražaj (Kafka) + Gospoda Glembajevi (Krleža) — odnos oca i sina, položaj u obitelji",
    polaznoP:"Usporedite odnos očeva i sinova u Preobrazbi i Gospodima Glembajevima. Usporedite položaj Gregora i Leonea u obitelji.",
    tekstovi:[
      {naslov:"Franz Kafka, Preobražaj (ulomak — otac baca jabuke)", tekst:`Dok je tako glavinjao da sabere svu snagu za bijeg, nije otvarao oči; u svojoj tuposti nije uopće mislio ni na kakav spas osim na trčanje; i gotovo je već zaboravio da su mu na raspolaganju zidovi – i tada doleti nešto, lako bačeno, tik do njega i otkotrlja se do njega. Bila je to jabuka; a odmah nakon nje doleti i druga; Gregor užasnuto zastane; bilo bi besmisleno trčati dalje, jer ga je otac odlučio bombardirati. Iz zdjele s voćem na kredencu napunio je džepove i bacao jabuku za jabukom, prethodno ne ciljajući. Te male crvene jabuke kotrljale su se kao naelektrizirane posvuda po podu i sudarale se. Druga, bačena odmah nakon nje, naprosto se zabila u Gregorova leđa; Gregor se htio odvući dalje, kao da će iznenadna nevjerojatna bol nestati ako promijeni mjesto; ali osjećao se kao prikovan i ispruži se, potpuno izbezumljen.

Franz Kafka, Preobrazba`},
      {naslov:"Miroslav Krleža, Gospoda Glembajevi (ulomak — Leone i Glembay)", tekst:`LEONE: Ja sam ti već rekao da ne vičeš na mene! Ta žena upropaštava te moralno i materijalno već godinama na moju ličnu sramotu! Ja se već godinama stidim zbog tebe, godinama me nema u mojem roditeljskom domu: ti si ruglo i skandal čitavoga grada.
GLEMBAY: Šuti! Ako progovoriš još samo jednu riječ, ja ću te…
LEONE: Ne ću da šutim! Na to sam se već godinama spremao, da ti to kažem! Ona je šarmantna! Zar ti misliš, da onaj blesan Oberleutnant Ballocsanszky dolazi u ovu kuću zbog tvoga bridgea?

GLEMBAY poviče izvan sebe i on se furiozno oborio na Leona; u tren oka, još prije no što se Leone snašao, on ga je svom snagom pljusnuo po obrazu. Ta pljuska rasplamsala je u njemu neki divlji elementarni prostački bijes, i on je pljusnuo Leona još jedamput svom snagom, tako da je ovaj, uzmaknuvši dva koraka instinktivno, zapeo o jedan šaukelštul i izgubivši ravnotežu posrnuo.

Miroslav Krleža, Gospoda Glembajevi`},
    ],
    smjernice:[
      "Predstavite djela iz kojih su polazni tekstovi i smjestite ih u razdoblje u kojemu su nastala.",
      "Smjestite polazne tekstove u sadržajni kontekst djela. Portretirajte likove Gregora Samse i Leonea Glembaja u cjelini djela.",
      "Usporedite odnos očeva i sinova u polaznim tekstovima i oprimjerite citatima.",
      "Prokomentirajte funkciju stvaralačkih postupaka u prikazu odnosa među likovima (dijalog, ton, geste, mimika, pokreti).",
      "Usporedite likove Gregora Samse i Leonea Glembaja s obzirom na njihov položaj u obitelji. Prokomentirajte kako se Gregor i Leone odupiru krivnji, strahu i nemoći.",
    ],
    ocjenaKljuc:"Preobražaj (Kafka, 1915.) = ekspresionizam/modernizam; Gospoda Glembajevi (Krleža, 1928.) = psihološka drama/ekspresionizam. Gregor: sin koji je sve žrtvovao za obitelj, otac ga fizički napada (jabuke) = obratni odnos moći; Leone: sin koji otvoreno napada oca zbog barunice = verbalni i fizički sukob. Fizičko nasilje kod oba oca; Gregor pasivan (prihvaća bol), Leone aktivan (konfrontacija). Gregor = žrtva, nemoć; Leone = bunt, artikulacija krivnje.",
    minRijeci:400, maxRijeci:600,
  },
  "2012_jesen_esej_B":{
    key:"2012_jesen_esej_B",
    year:2012, season:"jesen", razina:"B",
    label:"2011./2012. jesenski rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"Pjesma mrtvog pjesnika — odnos pjesnika i čitatelja",
    polaznoP:"Protumačite odnos pjesnika i čitatelja u polaznom tekstu. Objasnite što znači otvoriti i zatvoriti srce za poeziju.",
    tekstovi:[
      {naslov:"Dobriša Cesarić, Pjesma mrtvog pjesnika", tekst:ESEJ_2012_jesen_B},
    ],
    smjernice:[
      "Predstavite stvaralaštvo Dobriše Cesarića i smjestite ga u književnopovijesni kontekst.",
      "Navedite temeljna obilježja i tematske preokupacije Cesarićeve poezije te ih povežite s polaznim tekstom.",
      "Opišite odnos pjesnika i čitatelja u polaznom tekstu. Protumačite pjesnikove poruke.",
      "Protumačite funkciju glagolskih oblika i zamjeničkih vrsta u polaznom tekstu. Objasnite što znači otvoriti i zatvoriti srce za poeziju. Objasnite ulogu anafore u pjesnikovoj spoznaji i ideji polaznog teksta. Svoje tvrdnje potkrijepite stihovima.",
      "Na temelju polaznog teksta uočite smisao umjetničkog stvaranja i objasnite ulogu primatelja u odnosu autor — djelo — primatelj. Usporedite Cesarićeva pjesnika iz polaznog teksta sa svojim shvaćanjem umjetnosti i argumentirajte svoje tvrdnje.",
    ],
    ocjenaKljuc:"Cesarić = hrv. lirika između dvaju svjetskih ratova, socijalna i intimna tematika, balada, impresionizam; Pjesma mrtvog pjesnika = tema besmrtnosti poezije, pjesnik živi dok ga netko čita; odnos: pjesnik = prosjak pred vratima čitateljevih grudiju, čitatelj = jedini koji može 'probuditi' pjesnika; glagolski oblici = kondicional i futur (uvjetna besmrtnost); anafora 'Sve...' = nabrajanje svega što je pjesnik sačuvao u riječima; 'otvoriti srce' = prihvatiti poeziju, 'zatvoriti' = odbiti = stihovi postaju mrtvo slovo; trilogija autor-djelo-primatelj: djelo živi samo kroz čitatelja.",
    minRijeci:350, maxRijeci:500,
  },
    "2012_zima_esej_A":{
    key:"2012_zima_esej_A",
    year:2012, season:"zima", razina:"A",
    label:"2012./2013. zimski rok — Viša razina (A)",
    trajanje:160,
    naslov:"Stranac (Camus) — Meursault, motiv sunca, sloboda i istina",
    polaznoP:"Portretirajte Meursaulta. Odredite ulogu motiva sunca. Obrazložite odnos slobode i istine.",
    tekstovi:[
      {naslov:"Albert Camus, Stranac (ulomak — ubojstvo Arapa)", tekst:`Čekao sam. Obrazi su mi gorjeli od sunca i osjećao sam kako mi se kapljice znoja skupljaju u obrvama. Sunce je peklo isto onako kao i onoga dana kad smo pokopali mamu i, isto onako kao i onda, najviše me boljelo čelo i sve su mi žile na njemu u isti mah damarale ispod kože. Zbog toga žara koji više nisam mogao podnositi, koraknuo sam naprijed. Znao sam da je to glupo, da se neću izbaviti od sunca ako se pomaknem za jedan korak. Ipak, prešao sam jedan korak, samo jedan korak. A tada, ne pridižući se, Arapin izvadi nož i pokaza mi ga na suncu. Svjetlo sijevnu na čeliku i kao da me duga svjetlucava oštrica pogodi u čelo. U isti mah znoj nakupljen u obrvama poteče mi odjednom niz kapke i zastre ih mlakim i gustim velom. Taj zastor od suza i soli zasjeni mi oči. Osjećao sam samo cimbale sunca na čelu i, nekako nejasno, blistavi mač uperen iz noža svejednako u mene. Taj užareni mač palio mi je trepavice i kopao bolne oči. Tada sve zaigra preda mnom. Zapahnu me težak i vreo dah mora. Učini mi se da se nebo širom otvorilo da pusti ognjenu kišu. Napeh se svim svojim bićem i ruka mi se zgrči na revolveru. Otponac popusti, dotaknuh glatki trbuh drška i tada sve poče, usred praska koji bijaše u isto vrijeme rezak i zaglušan. Stresoh sa sebe znoj i sunce.

Albert Camus, Stranac`},
    ],
    smjernice:[
      "Predstavite književno stvaralaštvo Alberta Camusa i njegov roman Stranac u kontekstu vremena u kojemu je napisan. Smjestite polazni tekst u kontekst romana.",
      "Portretirajte lik Meursaulta prema situacijama i strukturi romana. Opišite situaciju iz polaznog teksta i odredite temeljni problem romana u cjelini.",
      "Uočite osjetilne podražaje i odredite njihovu funkciju. Potkrijepite primjerima. Odredite ulogu motiva sunca i povežite ga s motivom majke i motivom smrti u romanu.",
      "Obrazložite odnos čovjekove slobode i istine u romanu Stranac. Protumačite naslov romana na temelju autorove rečenice: 'U našem društvu svaki čovjek koji ne plače na pogrebu svoje majke izvrgava se opasnosti da bude osuđen na smrt.'",
      "Svoje tvrdnje potkrijepite argumentima iz polaznog teksta i primjerima iz romana.",
    ],
    ocjenaKljuc:"Camus (1913.–1960.) = egzistencijalizam/apsurdizam; Stranac (1942.). Meursault = otuđeni čovjek, ne plače na majčinom pogrebu, ubija Arapa bez jasnog motiva. Motiv sunca = agresivan, fizički, uzrokuje iracionalan čin; sunce = simbol prirodnih sila koje nadvladavaju razum. Sunce = majka = smrt (sve na 'istoj liniji'). Sloboda = Meursault je slobodan ali osuđen zbog nemoralnog ponašanja (ne plakanja); istina = društvo osuđuje čovjeka po osjećajima, ne po djelu. Naslov 'Stranac' = otuđenost od društvenih normi, Meursault kao autsajder.",
    minRijeci:400, maxRijeci:600,
  },
  "2012_zima_esej_B":{
    key:"2012_zima_esej_B",
    year:2012, season:"zima", razina:"B",
    label:"2011./2012. zimski rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"Posljednji Stipančići — Lucija u sobi, ugođaj i lik",
    polaznoP:"Opišite ugođaj i ulogu opisa prostora u karakterizaciji Lucijina lika. Usporedite Luciju i Valpurgu.",
    tekstovi:[
      {naslov:"Vjenceslav Novak, Posljednji Stipančići (ulomak — Lucija u sobi)", tekst:ESEJ_2012_zima_B},
    ],
    smjernice:[
      "Predstavite roman u kontekstu razdoblja u kojemu je nastao. Objasnite smisao naslova i podnaslova romana.",
      "Smjestite polazni tekst u kontekst romana. Uočite ključne probleme koje donose osnovne fabularne linije u romanu.",
      "Opišite ugođaj u polaznom tekstu. Odredite ulogu opisa prostora u karakterizaciji Lucijina lika. Svoje tvrdnje potkrijepite primjerima.",
      "Usporedite Luciju i Valpurgu i svoje usporedbe potkrijepite primjerima iz polaznog teksta. Opišite njihov odnos na temelju rečenice 'Kako bi rado otvorila prozor, da vidi bilo kakav život na ulici.'",
      "Na temelju svojeg čitateljskog iskustva usporedite položaj žene u Posljednjim Stipančićima sa ženskim likovima u književnim djelima 19. stoljeća.",
    ],
    ocjenaKljuc:"Novak = realizam (1899.); naslov = posljednji naraštaj obitelji Stipančić, propast patricijskog sloja; ulomak = Lucija zatvorena u sobi, bolesna, izolirani od života; opis sobe = prenatrpanost, zagušen zrak, dvostruki prozori = simboli zatočenosti; Lucija = krhka, pasivna, zatvorenica vlastite bolesti i majčine odluke; Valpurga = dominantna, zabludna u zaštiti, autoritativna; 'kako bi rado otvorila prozor' = Lucijina čežnja za životom; usporedba sa ženskim likovima: Nora (Ibsen) = osvješćena, Madame Bovary = bunt, Anna Karenjina = tragičan izlaz.",
    minRijeci:350, maxRijeci:500,
  },
    "2013_ljeto_esej_A":{
    key:"2013_ljeto_esej_A",
    year:2013, season:"ljeto", razina:"A",
    label:"2012./2013. ljetni rok — Viša razina (A)",
    trajanje:160,
    naslov:"Bijeg (Nehajev) i Povratak Filipa Latinovicza (Krleža) — umjetnik i društvena sredina",
    polaznoP:"Usporedite Filipa i Đuru. Protumačite odnos umjetničkog stvaralaštva i društvene sredine.",
    tekstovi:[
      {naslov:"Miroslav Krleža, Povratak Filipa Latinovicza (ulomak — Filip i kočijaš Joža)", tekst:`Slušajući tu jednoličnu i praznu životnu shemu svoga kočijaša, Filip je osjećao spram Joži Podravca neku neizrecivo indiferentnu daljinu. "Dvije stotine milijuna ovakvih iz drva izrezanih kočijaša živi ovdje po ovim livadama od Tihog oceana do ovih panonskih močvara: lica jednaka, ruke jednake, sudbine jednake."
(...)
"Joža Podravec ima zingericu i šlingeraje, a on Filip, rješava stvari na simboličan način: igrajući se obojadisanim plohama kao formulama, rješavajući zapravo probleme jedne apstraktne, potpuno imaginarne aritmetike. Jako je daleko između njega i ovog panonskog kočijaša: zapravo neshvatljivo daleko! (...) Taj čovjek pokraj njega na boku bliže je panonskoj prapojavi nego Matisseu! To je marvogojac doslovno, i kako je daleko od tih njegovih žuljavih dlanova do Filipova osjećaja tkanine ili svile među prstima! Sjede tu tako dva čovjeka na boku, ovakav nastrani neurastenik, slikarski sektaš, relativist, fauvist, kolorist, i govore istim jezikom, a to su zapravo dva jezika i dva kontinenta!"

Miroslav Krleža, Povratak Filipa Latinovicza`},
      {naslov:"Milutin Cihlar Nehajev, Bijeg (ulomak — Đuro i Toša)", tekst:`Govorili smo o selu. Ja još nikad dosada nisam vidio pravoga sela ni pravoga seljaka, onoga što pozna samo svoju zemlju. Naš Primorac, ako i obrađuje vinograd, nije seljak (a nije valjda nikad ni bio); njegovo se zvanje mijenja prema potrebi: u mladosti je mornar, kasnije nadničari sa svojom lađicom ili radi oko vinograda. Uvijek je spreman da dohvati nešto bolje.
(...)
Toša naveo razgovor na literaturu – i odmah došli mi u debatu.
– Vi se svi tužite da se naše knjige ne prodaju, da književnik stradava. Ja ti kupujem gotovo svaku našu knjigu; pa znaš što mi se čini da je krivo svemu? Vi ste svi nekakvi užasni slabići; ne vjerujete ni u sebe ni u drugoga, opisujete uvijek neke nervozne i izmučene ljude.
– Ti si, Toša, previdio da ta velika masa puka nas ne razumije zato što nas ne čita, pače što nas ne može čitati. A da ima i manje analfabeta, jedva da bi tvoj seljak iz Zdenca imao kakav interes za lijepu knjigu.

Milutin Cihlar Nehajev, Bijeg`},
    ],
    smjernice:[
      "Predstavite poetike romana Bijeg i Povratak Filipa Latinovicza.",
      "Smjestite polazne tekstove u kontekst romana. Portretirajte likove Filipa Latinovicza i Đure Andrijaševića na temelju polaznih tekstova te romana u cjelini.",
      "Usporedite polazne tekstove i objasnite povezanost tema i problema. Prikažite čime su zaokupljeni Filip i Đuro. Protumačite Filipovu zabrinutost i Đurina zapažanja.",
      "Predstavite Filipove i Đurine sugovornike i njihove stavove. Potkrijepite primjerima iz romana.",
      "Protumačite u kakvu su odnosu umjetničko stvaralaštvo i društvena sredina te u kojoj se mjeri prožimaju umjetnička djela i oni kojima su namijenjena.",
    ],
    ocjenaKljuc:"Bijeg (Nehajev, 1909.) = prva moderna; Povratak F.L. (Krleža, 1932.) = ekspresionizam/modernizam. Đuro = pasivni intelektualac koji bježi od svega; Filip = slikar vraćen u domovinu, osjeća jaz od puka. Filipov monolog: Joža=prapojava, Filip=europski umjetnik = dva kontinenta. Đurin dijalog: Toša=aktivan optimist, Đuro=defetist (puk ne čita). Obje teme: otuđenost intelektualca od sredine, nemogućnost komunikacije između umjetnosti i publike.",
    minRijeci:400, maxRijeci:600,
  },
  "2013_ljeto_esej_B":{
    key:"2013_ljeto_esej_B",
    year:2013, season:"ljeto", razina:"B",
    label:"2012./2013. ljetni rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"Gospoda Glembajevi — obiteljsko nasljeđe i unutarnji nemiri Leonea Glembaja",
    polaznoP:"Usporedite Krležine likove Filipa Latinovicza i Leonea Glembaja na temelju motiva povratka i unutarnjih nemira.",
    tekstovi:[
      {naslov:"Miroslav Krleža, Gospoda Glembajevi (ulomak — Leoneov monolog)", tekst:ESEJ_T1_2013_ljeto_B},
    ],
    smjernice:[
      "Predstavite Krležino dramsko stvaralaštvo na temelju trilogije Gospoda Glembajevi.",
      "Smjestite polazni tekst u kontekst drame. Predstavite lik Leonea u obitelji Glembay i prikažite temeljne dramske sukobe.",
      "Rekonstruirajte na temelju dijaloga u polaznome tekstu događaje koji su obilježili Leoneovo djetinjstvo i odrastanje. Prikažite čime je Leone zaokupljen i zaprepašten u polaznome tekstu i protumačite rečenicu 'i još uvijek živim u krvavoj krčmi!'. Odredite ulogu Leoneova pripovijedanja o događaju iz djetinjstva. Objasnite ulogu legende stare Barboczyjeve u kontekstu drame. Povežite glembajevsko podrijetlo i razvoj Leoneova lika.",
      "Usporedite Krležine likove Filipa Latinovicza i Leonea Glembaja na temelju motiva povratka i unutarnjih nemira.",
      "Iznesite svoje mišljenje o tome može li se čovjek boriti protiv obiteljskog nasljeđa.",
    ],
    ocjenaKljuc:"Esej treba: (1) Krleža = moderna/ekspresionizam, Glembajevska trilogija: Gospoda Glembajevi, U agoniji, Leda; (2) Leone = vanbračni sin baruna Glembaya, suočava se s obiteljskim zločinom i lažima, ubija baronicu; dramski sukob = moralna dekadencija bankarske obitelji; (3) Leone prepričava doživljaj iz djetinjstva u krčmi = 'krčma' = simbol glembajevskog kriminala/okoline; Barbocyjeva legenda = mit o rodovskom zločinu; 'krvava krčma' = nemogućnost bijega od nasljeđa; (4) Filip Latinovicz = slikar, povratak u rodni grad, psihološka kriza, razočaranje majkom; obojica su razočarana obiteljskim nasljeđem; (5) vlastito mišljenje o borbi s nasljeđem.",
    minRijeci:350, maxRijeci:500,
  },
    "2013_jesen_esej_A":{
    key:"2013_jesen_esej_A",
    year:2013, season:"jesen", razina:"A",
    label:"2012./2013. jesenski rok — Viša razina (A)",
    trajanje:160,
    naslov:"Sofoklo, Antigona — Tiresijin monolog, ljudski i božanski zakoni",
    polaznoP:"Analizirajte Tiresijin monolog. Objasnite odnos ljudskih i božanskih zakona. Protumačite retoričko pitanje.",
    tekstovi:[
      {naslov:"Sofoklo, Antigona (ulomak — Tiresijin monolog)", tekst:`Tiresija:
Pa znat ćeš kad umijeća moga čuješ znak.
Kad nà mjesto se staro, ptičje motrilo,
Gdje svaka dolijeće mi ptica, spustim ja,
Glas ptičji nepoznat mi čujem, ljutome
U bijesu, divljoj graji one kreštahu.
Razabrah, jedna drugu čupa pandžama
I kolje; lepet krila jasno čuo se.
I odmah prepadoh se, kušah žrtvovat
Na žrtveniku plamnom, ali ìz žrtve
Ne suknu plamen, nego se po pepelu
Mast ìz bedara cijedi, topi; puši se
I prska a žuč uvis šiknu te se sva
Tu rasprsne; iz pretiline ovite,
Što rastopi se, kliznu kosti bedrene.
To od dječaka ovoga sve doznah ja
Za gatanje da nema znaka òd žrtve:
Jer meni on je vodič a ja drugima.
A to zbog tvoje volje boluje nam grad.
Ta svi su žrtvenici i sva ognjišta
Sad ptičje a i pseće hrane, paloga
Jadníka, sina Edipova, prepuni.
Pa onda bozi ùz žrtvu već molitve
Ne primaju nit plamena sa bedara.
Nit krešti ptica dobrokobno okusiv
Te masne krvi poginula čovjeka.
To, dakle, sinko, uzmi sebi na pamet!
Ta griješiti je prirođeno ljudima;
Al' sagriješi li tko, on više čovjek lud
Nit nesretan bit neće ako, u zlo on
Zagreznuv, liječi se i nije uporan.
Samovolja je grijeh zbog nerazbora.
Al' pusti mrtvog, poginula nè muči!
Junaštvo li je ubit mrtva drugi put?
Dobro ti misleć, zborim; zbori l' dobro tko,
Tog savjet slušat najveća je slast.

Sofoklo, Antigona`},
    ],
    smjernice:[
      "Smjestite autora u književno razdoblje u kojemu je stvarao. Opišite značajke književne vrste kojoj pripada polazni tekst.",
      "Smjestite polazni tekst u sadržajni kontekst djela. Predstavite temeljni zaplet i karakterne osobine glavnih likova. Potkrijepite primjerima iz djela.",
      "Analizirajte odnos ljudskih i božanskih zakona na temelju Tiresijina monologa i objasnite na čemu su zasnovane Tiresijina mudrost i domišljatost. Prikažite Tiresijin odnos prema Kreontu.",
      "Protumačite ulogu retoričkoga pitanja 'Junaštvo li je ubit mrtva drugi put?'. Obrazložite stav prema Tiresijinim riječima.",
    ],
    ocjenaKljuc:"Sofoklo (496.–406. pr. Kr.) = grčka antika = tragedija (katarza, sudbina, hybris). Antigona = sukob Kreontova (ljudskog) i božanskog zakona; Antigona = zakopala brata; Kreont zabranio. Tiresija = slijepi prorok; ptice + žrtve = loše predznake = grad boluje zbog Kreontove volje. Tiresijina mudrost: 'griješiti je prirođeno' ali treba se ispraviti; ne kazni mrtvoga. Retoričko pitanje = moralna osuda okrutnosti. Kreont = hybris/uobraženost = uzrok tragedije (Antigona, Hemon, Euridika umiru).",
    minRijeci:400, maxRijeci:600,
  },
  "2013_jesen_esej_B":{
    key:"2013_jesen_esej_B",
    year:2013, season:"jesen", razina:"B",
    label:"2012./2013. jesenski rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"Položaj žene u književnosti realizma — Stipančići i Nora",
    polaznoP:"Usporedite položaj Valpurge (Posljednji Stipančići) i Nore (Nora) kao žena u obitelji i društvu.",
    tekstovi:[
      {naslov:"Vjenceslav Novak, Posljednji Stipančići (ulomak — Valpurga)", tekst:ESEJ_T1_2013_jesen_B},
      {naslov:"Henrik Ibsen, Nora (Lutkina kuća) — ulomak", tekst:ESEJ_T2_2013_jesen_B},
    ],
    smjernice:[
      "Predstavite djela Posljednji Stipančići i Nora (Lutkina kuća) u kontekstu razdoblja u kojemu su nastala.",
      "Smjestite polazne tekstove u sadržajni kontekst djela u cjelini. Prikažite strukturu djela u cjelini i uočite sličnosti i razlike.",
      "Usporedite smisao sintagme 'slobodna ropkinja' i rečenice 'Možda, kad ti oduzmu lutku' u karakterizaciji Valpurge i Nore. Objasnite ulogu oksimorona u prikazu Valpurge i ulogu metafore u prikazu Nore.",
      "Predstavite likove Ante Stipančića i Helmera i njihovu ulogu u obitelji. Argumentirajte svoje stavove i potkrijepite ih primjerima iz polaznih tekstova i djela u cjelini.",
      "Usporedite suvremeni položaj žene u društvu s položajem žene u Ibsenovo i Novakovo vrijeme. Izrecite svoje mišljenje o tome jesu li Nora i Valpurga trebale i(li) mogle promijeniti svoj položaj.",
    ],
    ocjenaKljuc:"Esej treba: (1) Novak (1859.–1905.) = hrv. realizam, Posljednji Stipančići (1899.) = propadanje građanske obitelji; Ibsen (1828.–1906.) = norveška književnost, realizam, Nora/Et dukkehjem (1879.) = psihološka drama; (2) Valpurga = pasivna, odgojena na pokornost, 'slobodna ropkinja' = oksimoron (slobodna = formalno slobodna, ropkinja = u praksi; Nora = aktivna, na kraju napušta obitelj, 'lutka' = metafora (tretirana kao lutka, predmet); (3) Ante Stipančić = patrijarh koji odlučuje o svima; Helmer = egoistični muž koji Noru tretira kao vlasništvo; (4) Novakovo i Ibsenovo doba = žena podređena mužu, bez autonomije; suvremeno = emancipacija; (5) Nora mogla i trebala promijeniti = feministički akt; Valpurga = manje prostora jer je pasivna i društvo je rigidnije.",
    minRijeci:350, maxRijeci:500,
  },
    "2014_ljeto_esej_A":{
    key:"2014_ljeto_esej_A",
    year:2014, season:"ljeto", razina:"A",
    label:"2013./2014. ljetni rok — Viša razina (A)",
    trajanje:160,
    naslov:"Antun Šoljan, Kratki izlet — sloboda, pustoš, identitet",
    polaznoP:"Objasnite pripovjedačev doživljaj poslijeratnog vremena. Protumačite simboliku pustoši. Usporedite psihologiju klape i samoće.",
    tekstovi:[
      {naslov:"Antun Šoljan, Kratki izlet — I. ulomak (poslijeratni optimizam)", tekst:`Bilo je to negdje prvih godina poslije rata, kada se svima nama činilo da svijet počinje iz početka, iz iskonske magme. Hrabro smo, sa svima drugima, pokušali vjerovati da se sve može iznova otkriti, osvijetliti novim smislom, i da se tu, na ovom komadiću tla, može odigrati potpuno nova drama. Činilo se da je sama zemlja razotkrila pred nama bijela brda svoga tijela i dopustila nam da po njima bauljamo i vršljamo poput neznatnih ali plodonosnih kukaca. Činilo se da ima toliko nevinog tla na koje prije nas nije stupila ljudska noga. Činilo se da smo upravo mi pozvani da nakon razaranja nastavimo život, preuzmemo nasljeđe, okrunimo vjekove uspješnom sintezom, da ih dovršimo.
Ratno pitanje „gdje smo?" i poratno „kamo ćemo?" izgubila su svoju oštrinu, u to vrijeme počeli smo se pitati opet jednom „odakle smo došli?", a teza „treba se vratiti komadić puta da bismo se mogli zaletjeti dalje" postajala je parolom dana. Nećemo valjda počinjati uvijek od nulte točke, uvijek sve otpočetka, kao da nije bilo ničeg prije nas?

Antun Šoljan, Kratki izlet`},
      {naslov:"Antun Šoljan, Kratki izlet — II. ulomak (pustoš i sloboda)", tekst:`Gdje sam? pitao sam se nijemo, stojeći u tom skamenjenom ničem, osjećajući da sam zauvijek izgubljen i da mi je od sviju nada, od svega znanja, od cijelog bića ostalo samo pitanje: Gdje sam? Što je sa mnom? Što je sa svijetom?
(...)
Možda nikada i nije bilo drugog svijeta, rekao sam samome sebi, kao da se opravdavam. Možda sam u ovoj pustoši od početka, možda smo svi u njoj od početka, samo mi nije bilo dano da je vidim tako jasno kao sada. Možda se nikad nisam ni maknuo odavde. Možda nisam krenuo ni na kakav izlet. Možda je ovo zapravo blagovijest, spas. Možda je ovo ona konačna sloboda kojoj su preci toliko težili, i ja sam na cilju.

Antun Šoljan, Kratki izlet`},
    ],
    smjernice:[
      "Smjestite autora i roman Kratki izlet u društveni i povijesni kontekst.",
      "Predstavite polazne tekstove s obzirom na sadržaj i kompoziciju romana Kratki izlet.",
      "Objasnite pripovjedačev doživljaj poslijeratnoga vremena. Protumačite značenje misli 'treba se vratiti komadić puta da bismo se mogli zaletjeti dalje'. Objasnite simboliku riječi pustoš u kojoj se pripovjedač našao. Odredite ulogu retoričkih pitanja i ponavljanja u polaznim tekstovima.",
      "Usporedite 'psihologiju klape' u romanu Kratki izlet i spoznaju da pripovjedač na kraju ostaje sam. Objasnite pitanje slobode u polaznim tekstovima i u romanu Kratki izlet.",
      "Potkrijepite tvrdnje citatima i/ili parafrazama iz polaznog teksta te primjerima iz djela u cjelini.",
    ],
    ocjenaKljuc:"Šoljan (1932.–1993.) = hrvatska književnost 2. pol. 20. st. = Krugovi/egzistencijalizam. Kratki izlet (1965.) = ekskurzija po Istri = alegorija potrage za identitetom. 1. ulomak: poslijeratni optimizam, kolektivni entuzijazam, pitanja 'kamo/odakle'; 'treba se vratiti' = ukorjenjivanje u tradiciju. 2. ulomak: pustoš = egzistencijalna praznina, deziluzija, samoća; retoričko pitanje 'Možda...' = sumnja u smisao. Psihologija klape → individua; sloboda kao pustoš vs. sloboda kao cilj.",
    minRijeci:400, maxRijeci:600,
  },
  "2014_ljeto_esej_B":{
    key:"2014_ljeto_esej_B",
    year:2014, season:"ljeto", razina:"B",
    label:"2013./2014. ljetni rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"Nora — tarantela i dramski sukobi (Henrik Ibsen)",
    polaznoP:"U čemu se Norina reakcija razlikuje od očekivanoga ponašanja žene u obitelji?",
    tekstovi:[
      {naslov:"Henrik Ibsen, Nora (ulomak — Norin odlazak)", tekst:ESEJ_T1_2014_ljeto_B},
    ],
    smjernice:[
      "Predstavite dramu Nora u kontekstu književnopovijesnog razdoblja u kojemu je nastala. Odredite vrstu drame.",
      "Smjestite polazni tekst u kontekst drame Nora. Objasnite na temelju polaznoga teksta uzrok, tijek i razrješenje temeljnog dramskog sukoba. Objasnite kako je u drami Nora prikazan vanjski, a kako unutarnji sukob likova.",
      "Prikažite odnos između glavnih likova u polaznome tekstu i objasnite kakvu preobrazbu doživljavaju likovi. Objasnite čega se Helmer najviše boji. Protumačite zašto se Nora ne želi oprostiti s djecom. Protumačite zašto Nora ne vjeruje Helmeru i ne pristaje na njegove uvjete.",
      "Objasnite u čemu se Norina reakcija razlikuje od očekivanoga ponašanja žene u obitelji.",
      "Iznesite svoje gledište o obiteljskim odnosima, dužnostima i pravu na slobodu pojedinca unutar obitelji.",
    ],
    ocjenaKljuc:"Esej treba: (1) Henrik Ibsen (1828.–1906.) = norveška književnost, realizam (i naturalizam); Nora (1879.) = građanska/psihološka drama, problematična drama; (2) temeljni sukob: Nora krivotvori potpis da spasi muža, ucjenjuje je Krogstad, Helmer sazna i reagira egoistično; vanjski sukob = ucjena, novac; unutarnji = Norina spoznaja da je 'lutka'; razrješenje = Nora odlazi; (3) Helmer se boji skandala i gubitka časti; Nora ne želi oproštaj s djecom jer smatra da im nije dobra majka u takvom stanju; ne pristaje jer Helmer nije promijenio karakter, samo situaciju; (4) Norina reakcija = suprotna normi — žena 19. st. trebala podrediti se mužu; Nora napušta obitelj = feministički čin, borba za identitet; (5) vlastito gledište o slobodi i dužnostima.",
    minRijeci:350, maxRijeci:500,
  },
    "2014_jesen_esej_A":{
    key:"2014_jesen_esej_A",
    year:2014, season:"jesen", razina:"A",
    label:"2013./2014. jesenski rok — Viša razina (A)",
    trajanje:160,
    naslov:"Marin Držić, Dundo Maroje — Pometov monolog, kralj od ljudi, životna filozofija",
    polaznoP:"Odredite temu Pometova monologa. Prikažite Pometovu životnu filozofiju i njegovo ponašanje.",
    tekstovi:[
      {naslov:"Marin Držić, Dundo Maroje — Pometov monolog", tekst:`POMET: (…) Ma se je trijeba s bremenom akomodavat; trijeba je bit vjertuozu tko hoće renjat na svijetu. Kralj je čovjek od ljudi, kad se umije vladat. Nije ga imat dinâr, er vidim mnoge s dinarmi potištene; nije ga bit doktur, er vidim mnoge te brigate fantastike; nije ga bit junak s mačem u ruci, er su ti većekrat ali ubijeni ali ih su pune tamnice; nije ga bit poeta ni komedije umjet činit, er tizijem svak ore i na svaki ga pijer hoće operat, kao bastaha, a umjesto zahvaljenja da mu reku: "Ne valja ništa, iždeni!", i da mu neprijatelji ostanu; nije ga bit mužik, er tizijeh druzi čine pjet kad veću volju plakat imaju.
Trijeba je bit pacijent i ugodit zlu bremenu, da se pak dobro brijeme uživa. Svakijem kami! Maro mi prijeti, a ja mu se s baretom u ruci klanjam; Tudešak me, moj idol, dviže s trpeze, s delicija! Srcem mučno idem – čijerom volentijero. I tko k meni dođe: "Pomete, opravi mi", – opravljam; "Pođ' za mene", – idem; konselj mi pita, – umijem mu ga dat; psuje me, – podnosim; ruga se mnom, – za dobro uzimljem. Ovaki ljudi renjaju.

Marin Držić, Dundo Maroje`},
    ],
    smjernice:[
      "Smjestite dramu Dundo Maroje u kontekst hrvatske književnosti.",
      "Predstavite temu, nositelje dramskih sukoba, mjesto i vrijeme radnje u drami Dundo Maroje. Objasnite ulogu Prologa Dugoga Nosa.",
      "Odredite temu Pometova monologa. Objasnite tko je, prema Pometovu mišljenju, kralj od ljudi. Prikažite lik Pometa Trpeze, njegovu životnu filozofiju i njegov odnos prema drugim likovima.",
      "Objasnite koje se Pometove osobine i danas smatraju poželjnima za društveni uspjeh. Obrazložite tko bi, prema Vašemu mišljenju, mogao biti kralj od ljudi.",
      "Potkrijepite tvrdnje citatima i/ili parafrazama iz polaznog teksta te primjerima iz djela u cjelini.",
    ],
    ocjenaKljuc:"Dundo Maroje (Marin Držić, 1551.) = renesansna komedija, dubrovačka komedija = plautovska struktura; mjesto: Rim; prolog Dugog Nosa = autorski komentar. Pomet Trpeze = renesansni čovjek nazbilj; 'kralj od ljudi' nije bogataš ni junakni pjesnik ni glazbenik — nego 'vjertuoz' koji se prilagođava situaciji. Filozofija: strpljivost (pacijent), prilagodba (akomodavat), snaći se sa svakim (Svakijem kami!), prihvatiti i psovke i ruganje. Pometove osobine u 21. st.: fleksibilnost, emocionalna inteligencija, diplomacija.",
    minRijeci:400, maxRijeci:600,
  },
  "2014_jesen_esej_B":{
    key:"2014_jesen_esej_B",
    year:2014, season:"jesen", razina:"B",
    label:"2013./2014. jesenski rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"Sofoklo, Antigona — osobna savjest nasuprot državnoj vlasti (Kreont i Hemon)",
    polaznoP:"Kako se u djelu Antigona razrješava sukob morala i zakona?",
    tekstovi:[
      {naslov:"Sofoklo, Antigona (ulomak — dijalog Kreonta i Hemona)", tekst:ESEJ_T1_2014_jesen_B},
    ],
    smjernice:[
      "Smjestite djelo Antigona u književno razdoblje u kojemu je nastalo i odredite kojemu književnom rodu i vrsti pripada.",
      "Opišite situaciju u kojoj su se našli Kreont i Hemon. Objasnite što Hemon naziva 'zlatnom čašću' koju je zavrjedila njegova zaručnica.",
      "Odredite razloge sukoba Kreonta i Hemona. Usporedite njihov dijalog s obzirom na obiteljske odnose i odnose prema narodu. Objasnite smisao Hemonove usporedbe na kraju polaznoga teksta.",
      "Objasnite kako se u djelu Antigona razrješava sukob morala i zakona.",
      "Iznesite svoje mišljenje o odnosu morala i zakona na temelju djela Antigona.",
    ],
    ocjenaKljuc:"Esej treba: (1) Sofoklo (496.–406. pr. Kr.) = antička grčka književnost; Antigona = tragedija (drama); 5. st. pr. Kr.; (2) situacija: Kreont odbija pokopati Polinika, Antigona prkosi toj zapovijedi, Hemon (Kreontov sin, zaručen s Antigonom) brani Antigonu; 'zlatna čast' = Antigonino herojsko djelo = pokop brata iz pijeteta; (3) sukob Kreonta i Hemona = vlast vs. osjećaji, dogmatizam vs. mudrost; Kreont: autoritet oca i vladara; Hemon: glas naroda, mudrost popuštanja; usporedba s brodom = tko je krut, prevrne se; (4) razrješenje: Antigona je ubijena, Hemon i Euridika umiru = tragedija; zakoni države pobijede, ali na katarzirajući način koji pokazuje pogibiju krute vlasti; (5) vlastito mišljenje o moralu i zakonu.",
    minRijeci:350, maxRijeci:500,
  },
    "2015_ljeto_esej_A":{
    key:"2015_ljeto_esej_A",
    year:2015, season:"ljeto", razina:"A",
    label:"2014./2015. ljetni rok — Viša razina (A)",
    trajanje:160,
    naslov:"Patnje mladog Werthera (Goethe) i Stranac (Camus) — Werther i Meursault",
    polaznoP:"Portretirajte i usporedite Werthera i Meursaulta. Povežite ih s poznatim književnim likovima.",
    tekstovi:[
      {naslov:"Johann Wolfgang Goethe, Patnje mladog Werthera (ulomak — 16. i 18. srpnja)", tekst:`16. srpnja
Ne znam kako mi je kad sam s njom. To je kao da mi se duša izokreće u živce. – Ima jedna melodija koju svira na klaviru polik anđela, jednostavno, a produhovljeno. To joj je najdraža pjesma, a i mene liječi od svih patnji, dvojbi i ludorija, čim Lotta udari prvu notu.

18. srpnja
Wilhelme, kako bi naše srce izdržalo svijet bez ljubavi? To bi bilo kao čarobna svjetiljka bez svjetla. Čim uneseš u nju malu luč, pojave ti se na bijelome zidu slike u svim bojama. Pa kada drugoga i ne bi bilo, osim tih prolaznih utvara, ipak je to sreća. Stojimo pred svojim zidom kao bezazlena djeca i zanosimo se tim čudesnim učincima. "Vidjet ću je!" kličem odmah ujutro čim se razbudim i radosno promatram divno sunce. "Vidjet ću je!" I toga dana nemam više nijedne želje. Sve se gubi u čekanju večeri, kada ću je vidjeti.

Johann Wolfgang Goethe, Patnje mladog Werthera`},
      {naslov:"Albert Camus, Stranac (ulomak — Meursault i Marie o braku)", tekst:`Uvečer je Marie došla po mene i upitala me bih li je htio uzeti za ženu. Rekoh joj da mi je svejedno, ali da se možemo vjenčati ako baš želi. Htjela je znati volim li je. Odgovorih joj isto onako kako sam joj već jednom odgovorio, da to ništa ne znači, ali da je sigurno ne volim. – A zašto bi me onda uzeo za ženu? – pripita me. Objasnih joj da to uopće nije važno, i da se možemo uzeti ako baš želi. Uostalom, to je ona tražila, a ja sam se zadovoljio da kažem da hoću. Tada napomenu da je brak ozbiljna stvar. Odgovorih joj: − Nije. – Ona načas ušutje promatrajući me nijemo. Zatim opet progovori. Htjela je samo znati bih li prihvatio tu ponudu i od neke druge žene s kojom bih bio jednako vezan. Rekoh: − Naravno.

Albert Camus, Stranac`},
    ],
    smjernice:[
      "Predstavite djela Patnje mladog Werthera i Stranac u kontekstu književnopovijesnih razdoblja u kojima su nastala.",
      "Portretirajte i usporedite Werthera i Meursaulta na temelju djela u cjelini.",
      "Usporedite likove u polaznim tekstovima.",
      "Povežite Wertherov i Meursaultov lik sa sličnim književnim likovima.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Patnje mladog Werthera (Goethe, 1774.) = Sturm und Drang/romantizam = epistolarni roman; Stranac (Camus, 1942.) = egzistencijalizam/apsurdizam. Werther = romantičar, idealist, strastveno ljubi Lottu; osjećaji preplavljuju razum; senzibilna duša. Meursault = otuđen, ravnodušan, ne oseća ljubav prema Marie; apsurdni junak. Kontrast: Werther=osjećajnost u ekstremu vs. Meursault=potpuno odsustvo emocija. Sličan Wertheru: Rastignac, Đuro Andrijašević (sanjari). Sličan Meursaultu: Meursault↔Kafka/Gregor Samsa (otuđenost).",
    minRijeci:400, maxRijeci:600,
  },
  "2015_ljeto_esej_B":{
    key:"2015_ljeto_esej_B",
    year:2015, season:"ljeto", razina:"B",
    label:"2014./2015. ljetni rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"Matoš, Mistični sonet — tematske i stilske značajke",
    polaznoP:"Protumačite motive i stilske figure kojima se ostvaruju tema i ugođaj pjesme. Odredite ritam i oblik pjesme. Objasnite poantu Mističnog soneta.",
    tekstovi:[
      {naslov:"Antun Gustav Matoš, Mistični sonet", tekst:ESEJ_T1_2015_ljeto_B},
    ],
    smjernice:[
      "Predstavite Antuna Gustava Matoša i njegovo stvaralaštvo.",
      "Istaknite tematske i stilske značajke Matoševke lirike.",
      "Protumačite motive i stilske figure kojima se ostvaruju tema i ugođaj pjesme. Odredite ritam i oblik pjesme.",
      "Objasnite poantu pjesme Mistični sonet.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Esej treba: (1) A. G. Matoš (1873.–1914.) = moderna, simbolizam, impresionizam; pjesnik, pripovijedač, kritičar; utjecaj Baudelairea, Poea, Verlainea; (2) tematske značajke: ljubav, žena kao ideal, noćni ugođaj, grad, mistika, panteistički doživljaj; stilske: sinestezija (hihot zvijezda, crne ruže), metafore (duša kao harfa, žena kao Bog), simboli, inverzija; (3) Mistični sonet: 14 stihova, dvije strofe po 4 stiha + dvije po 3 = sonet; noć, žena, grad koji ismijeva — kontrast između vanjske stvarnosti i unutarnjeg sanjarenja; rima abba/abba; zvučnost stihova; (4) poanta: 'Ljepota, ljubav, sreća, sni i zvonosi / Su Bog, mistêrij što u ženi zri' = žena = mistična cjelina ljepote i Boga = panteistički simbolizam.",
    minRijeci:350, maxRijeci:500,
  },
    "2015_jesen_esej_A":{
    key:"2015_jesen_esej_A",
    year:2015, season:"jesen", razina:"A",
    label:"2014./2015. jesenski rok — Viša razina (A)",
    trajanje:160,
    naslov:"Lovac u žitu (Salinger) — Holden Caulfield, proza u trapericama, patke i sloboda",
    polaznoP:"Portretirajte Holdena. Prokomentirajte pitanja o patkama i povežite ih s naslovom.",
    tekstovi:[
      {naslov:"J. D. Salinger, Lovac u žitu (ulomak — Holden i šofer Horwitz)", tekst:`New York je jeziv kad se u njemu, u kasno doba noći, netko glasno smije na ulici. Čuje se na milje daleko. To uvijek djeluje na čovjeka tako da se osjeti strahovito potišten i osamljen. Osjetio sam neizdrživu želju da odem kući i malo naklapam sa starom Phoebe.
Poslije izvjesnog vremena vožnje šofer i ja konačno smo se upustili u nešto kao razgovor. Prezime mu je bilo Horwitz. Bio je mnogo bolji čovjek od onog šofera s kojim sam se vozio ranije iste večeri. Bilo kako bilo, palo mi je na pamet da bi možda on mogao znati nešto o onim patkama.
- Hej, Horwitz – rekao sam – jeste li ikad prošli pored one lagune u Centralnom parku? Dolje u južnom dijelu?
- Pored čega?
- Lagune. Onog kao malog jezera, tamo. Tamo gdje su one patke. Sigurno znate.
- Aha. Pa šta je s tim?
- E pa, znate one patke koje plivaju naokolo po njemu? Tamo u proljeće i uvijek? Znate li možda, kojom srećom, kamo odlaze zimi?
- Tko kamo odlazi?
- Patke. Znate li, slučajno? Hoću da kažem, da li netko dolazi s kamionom ili tako nečim i odnosi ih, ili one odlete onako same od sebe? Odsele se na jug ili tako nešto?

J. D. Salinger, Lovac u žitu`},
    ],
    smjernice:[
      "Smjestite roman Lovac u žitu u književnopovijesni kontekst i objasnite pojam proza u trapericama.",
      "Smjestite polazni tekst u sadržajni kontekst djela. Portretirajte Holdena na temelju djela u cjelini.",
      "Prokomentirajte Holdenova razmišljanja i raspoloženje na temelju polaznoga teksta.",
      "Protumačite pitanja o patkama i povežite ih s naslovom djela.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Lovac u žitu (Salinger, 1951.) = proza u trapericama = žargon, buntovni tinejdžer, kolokvijalnost; Holden = buntovnik, izraz 'phony' za licemjere, osjećaj osamljenosti i nesigurnosti. Patke u laguni = simbol: gdje odlaze kad jezero zamrzne? = što se dogodi s onima koji ne pristaju/ne mogu opstati u sustavu? = Holdenova vlastita nesigurnost: kamo on ide? Naslov = lovac u žitu = Holden želi hvatati djecu koja bi pala s litice u žitu = zaštititi nevinost. Osamljeni Holden u New Yorku noću = bol odrastanja.",
    minRijeci:400, maxRijeci:600,
  },
  "2015_jesen_esej_B":{
    key:"2015_jesen_esej_B",
    year:2015, season:"jesen", razina:"B",
    label:"2014./2015. jesenski rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"Prirodna katastrofa kao tema — Dekameron i suvremena proza",
    tekstovi:[
      {naslov:"Giovanni Boccaccio, Dekameron (ulomak)", tekst:ESEJ_T1_2015_jesen},
      {naslov:"Emmanuel Carrère, Neki drugi životi (ulomak)", tekst:ESEJ_T2_2015_jesen},
    ],
    smjernice:[
      "Predstavite značenje Giovannija Boccaccia u razvoju književnosti na prijelazu iz srednjega vijeka u renesansu.",
      "Smjestite prvi polazni tekst u kontekst književnoga djela i objasnite njegovu ulogu u djelu u cjelini.",
      "Objasnite što se dogodilo u polaznim tekstovima.",
      "Usporedite prvi i drugi polazni tekst s obzirom na temu, temeljne probleme, ugođaj i pripovjedačke postupke.",
      "Objasnite kako se u djelu Dekameron prevladavaju životne teškoće. Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Esej treba: (1) Boccaccio kao utemeljitelj novele, prijelaz iz srednjovjekovlja u renesansu; (2) kuga u Dekamorenu = okvirna priča koja objašnjava zašto se 10 mladića sklonilo i priča novele; (3) T1 = kuga kao Božja kazna/prirodna epidemija, T2 = cunami kao moderna prirodna katastrofa; (4) usporedba: obje katastrofe uzrokuju strah i borbu za preživljavanje, ali različit ton (T1 kroničarski/moralistički, T2 reportažno/osobni svjedok); (5) u Dekamorenu: humour, ljubav, domišljatost i pripovijedanje kao odgovor na tragediju.",
    minRijeci:350, maxRijeci:500,
  },
  "2011_ljeto_esej_A":{
    key:"2011_ljeto_esej_A",
    year:2011, season:"ljeto", razina:"A",
    label:"2010./2011. ljetni rok — Viša razina (A)",
    trajanje:160,
    naslov:"Otac Goriot (Balzac) / Opomena — Šimić (Prosperov Novak) — po izboru",
    polaznoP:"Zadatak 1: Odredite odnos oca Goriota prema kćerima i njihov prema njemu. || Zadatak 2: Interpretirajte pjesmu Opomena A. B. Šimića.",
    tekstovi:[
      {naslov:"Zadatak 1 — Honoré de Balzac, Otac Goriot (ulomak — Delphine i Eugène)", tekst:`Liječnik dođe u osam i po i, mada se nije izrazio povoljno, ipak reče da misli kako smrt ne mora nastupiti uskoro. Izjavio je da će se izmjenjivati poboljšanja i pogoršanja, od kojih će zavisiti starčev život i razum.
– Bilo bi bolje da umre što prije – bila je posljednja njegova riječ.
Eugène prepusti čiču Goriota Bianchonovoj brizi i pođe gđi de Nucingen odnijeti tužne vijesti koje su u njegovu duhu, još prožetu osjećajem obiteljskih dužnosti, suzbile svaku radost.
– Recite joj neka se ipak zabavlja – dovikne mu čiča Goriot koji je izgledao kao da spava, ali je sjeo u krevetu u času kad je Rastignac odlazio.
Mladić je došao Delphini sav potresen i zatekao ju je počešljanu, obuvenu; još je trebalo samo da odjene plesnu haljinu.
– Kako to, niste odjeveni? – upita ona.
– Ali, gospođo, vaš otac...
– Opet moj otac! – uzvikne ona i presiječe mu riječ. – Nećete me valjda učiti mojim dužnostima prema ocu. Poznajem ja oca odavno. Ni riječi više, Eugène. Slušat ću vas istom kad se odjenete. Thérèse je sve pripremila u vašemu stanu; moja kočija čeka, uzmite je; brzo se vratite. O ocu ćemo razgovarati dok budemo išli na ples. Treba krenuti ranije, jer uđemo li u povorku kočija, bit ćemo sretni ako se pojavimo i u jedanaest sati.

Honoré de Balzac, Otac Goriot`},
      {naslov:"Zadatak 2 — Slobodan Prosperov Novak o A. B. Šimiću + pjesma Opomena", tekst:`Iza naslova svoje zbirke pjesama skrio je Šimić svoje vjerovanje da se prema diktatu pjesnikove duše u poeziji zbivaju alkemijska preobraženja materijalnih i vidljivih stvari. Taj avangardist nije htio vjerovati u materijalno kao njegovi futuristički prethodnici, niti je vjerovao u strojeve niti u bešćutnost lutaka.

Po njemu umjetnost se iskazuje u ekspresivnosti, a ne u ljepoti, ali dok je u proglasima bio patetičan, u vlastitoj je lirici bio prigušen i odmjeren. Njemu je vlastita književnost bila krik, ali ne samo krik prema van, nego još više krik prema unutra. Zato njegovom lirikom odjekuje tišina.

Suštinu svemira tražio je u zvijezdama za koje je bio uvjeren da su najbolje vidljive kroz nutrinu duše. Bio je pjesnik koji je stvorio astralne stihove što su posjedovali neobičnu blizinu s vječnošću:

Opomena

Čovječe pazi
da ne ideš malen
ispod zvijezda!

Pusti
da cijelog tebe prođe
blaga svjetlost zvijezda!

Da ni za čim ne žališ
kad se budeš zadnjim pogledima
rastajao od zvijezda!

Na svom koncu
mjesto u prah
prijeđi sav u zvijezde!

Slobodan Prosperov Novak`},
    ],
    smjernice:[
      "ZADATAK 1 (Balzac — Otac Goriot): Predstavite roman u kontekstu realizma. Ukratko opišite lik oca Goriota i njegov život. Navedite likove čija se sudbina isprepliće s njegovom. Odredite odnos oca Goriota prema kćerima i njihov odnos prema njemu. Primjerima iz teksta prikažite jedan i drugi odnos. Koji su uzroci takva ponašanja kćeri prema ocu? Kako ostali likovi gledaju na taj odnos? Što mislite o odgojnim metodama oca Goriota?",
      "ZADATAK 2 (Šimić — Opomena): Predstavite A. B. Šimića u kontekstu ekspresionizma. Kako Prosperov Novak tumači naslov Šimićeve zbirke? Interpretirajte pjesmu Opomena — oslonite se na ključne riječi. Svrstajte pjesmu u tematske cjeline Šimićeva pjesništva. Objasnite smisao naslova. Odredite ulogu glagolskih oblika i razgodaka. Što predlaže Šimić čovjeku u posljednjoj strofi? Komentirajte rečenicu Prosperova Novaka o zvijezdama i nutrini duše.",
    ],
    ocjenaKljuc:"ZADATAK 1: Balzac (1835.) = realizam, Comédie humaine; Goriot = bivši tjestorezac, obožava kćeri Anastasie i Delphine; daje im sve, osiromašuje se; kćeri ga zanemaruju zbog društvenih ambicija; ulomak = Delphine ne prekida bal kad otac umire; Rastignac = moralni svjedok; uzroci: krive odgojne metode (pretjerana ljubav bez granica), kćeri su zarobljene materijalizmom; ostali likovi (Vautrin, stanari pension Vauquer) = kritički promatrači; komentar odgoja = Goriot ubio ljubav pretjeranim mazanjem. ZADATAK 2: Šimić = ekspresionizam (Preobraženja, 1920.); 'Preobraženja' = alkemija duše; ekspresivnost > ljepota; Opomena = imperativna forma ('pazi', 'pusti', 'prijeđi') = uputa čovjeku; zvijezde = vječnost, transcendencija; 'ne ideš malen' = živi puno; posljednja strofa = preobrazba u zvijezde = duhovna besmrtnost; 'krik prema unutra' = tišina u lirici.",
    minRijeci:400, maxRijeci:600,
  },
  "2011_ljeto_esej_B":{
    key:"2011_ljeto_esej_B",
    year:2011, season:"ljeto", razina:"B",
    label:"2010./2011. ljetni rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"U registraturi — Ivičin dolazak u grad / Albatros (Baudelaire)",
    polaznoP:"Je li nova sredina promijenila Ivicu? / Kakva je pjesnička sudbina prikazana u pjesmi Albatros?",
    tekstovi:[
      {naslov:"Ante Kovačić, U registraturi (ulomak — Ivičin dolazak u grad)", tekst:ESEJ_T1_2011_ljeto_B},
      {naslov:"Charles Baudelaire, Albatros", tekst:ESEJ_T2_2011_ljeto_B},
    ],
    smjernice:[
      "Zadatak 1 (U registraturi): Predstavite Kovačev roman u književnom razdoblju u kojem je nastao. Odredite tematiku i tematske slojeve romana U registraturi. Odredite problem koji se otvara u polaznome tekstu. Opišite sredinu iz koje je Ivica Kičmanović potekao i usporedite je s novom gradskom sredinom u koju dolazi. Opišite Ivičin prvi doživljaj grada. Što sve Ivicu začuđuje u novoj sredini? Kakav je bio život u gradu? Je li nova sredina promijenila Ivicu?",
      "Zadatak 2 (Albatros): Odredite temeljni problem pjesme Albatros. Objasnite život Baudelaireova pjesnika u pjesmi Albatros. Kakva je okolina Baudelaireova pjesnika? Opišite kako se ta okolina odnosi prema pjesniku i kako se on osjeća u tom okružju. U kojem se prostoru pjesnik najbolje osjeća? Kakva je pjesnička sudbina prikazana u pjesmi? Koja je uloga i položaj pjesnika/umjetnika u suvremenom svijetu?",
    ],
    ocjenaKljuc:"Zadatak 1: Kovačić = realizam, 1888.; tema = uzlazak siromašnog seljačkog djeteta u grad; grad = komocija, vreva, nitko ne pozdravlja, ismijavanje; seoska sredina = jednostavnost, religija, pozdrav; grad je promijenio Ivicu = zanijemio, izgubio identitet, prilagodio se. Zadatak 2: Baudelaire = simbolizam, modernizam; albatros = simbol pjesnika; na moru/visini = slobodan i veličanstven; na palubi = ružan, mlohav, ismiavan; tema = neshvaćeni umjetnik u neshvatljivom društvu; 'silna mu krila ne daju da hoda'.",
    minRijeci:350, maxRijeci:500,
  },
    "2011_jesen_esej_A":{
    key:"2011_jesen_esej_A",
    year:2011, season:"jesen", razina:"A",
    label:"2010./2011. jesenski rok — Viša razina (A)",
    trajanje:160,
    naslov:"Dundo Maroje/Otac Goriot — odnosi djece i očeva (ili) Status hrvatskog jezika/Rodu o jeziku — po izboru",
    polaznoP:"Zadatak 1: Opišite sličnosti i razlike odnosa djece i očeva u Dundu Maroju i Ocu Goriotu. || Zadatak 2: Razmotrite ulogu materinskog jezika u kontekstu Brozović Rončević i Preradovića.",
    tekstovi:[
      {naslov:"Zadatak 1 — Marin Držić, Dundo Maroje (ulomak, II. čin) + Honoré de Balzac, Otac Goriot (ulomak)", tekst:`MAROJE: (...) signor Marino! Meštre! Signor! U kolajini! U velutu! Gdje mi su dukati, moje pet tisuć, manigodo jedan? S zlijem ženami? Ne odgovaraš? Dukate mi moje, dukate, ribaode jedan! Bježiš, ne odgovaraš, pse jedan?
MARO: Tko ste vi, dobri čovječe? Što želite?
MAROJE: Što želite?!
MARO: Ne poznam vas, idite zbogom!
MAROJE: Ajme! Čini me se ne znat!
MARO: Taj je čovjek lud!
MAROJE: Nećeš da me poznaš, ribaode? Da čeka'?
MARO: Oružje! S oružjem! – Gospodine kapetane, ovaj čovjek hoće da me ubije!
KAPETAN: Uhvati ga, uhvati!
MAROJE: Pustite me da ubijem ribaoda jednoga!
KAPETAN: Odvedite ga u tamnicu, tamo ćemo ga dobro izliječiti od ludosti.
Marin Držić, Dundo Maroje (drugi čin)

---

Liječnik dođe u osam i po i, mada se nije izrazio povoljno, ipak reče da misli kako smrt ne mora nastupiti uskoro.
– Bilo bi bolje da umre što prije – bila je posljednja njegova riječ.
Eugène prepusti čiču Goriota Bianchonovoj brizi i pođe gđi de Nucingen odnijeti tužne vijesti.
– Recite joj neka se ipak zabavlja – dovikne mu čiča Goriot.
– Ali, gospođo, vaš otac...
– Opet moj otac! – uzvikne ona i presiječe mu riječ. – Nećete me valjda učiti mojim dužnostima prema ocu. Poznajem ja oca odavno. Ni riječi više, Eugène. O ocu ćemo razgovarati dok budemo išli na ples.
Honoré de Balzac, Otac Goriot`},
      {naslov:"Zadatak 2 — Dunja Brozović Rončević, Status hrvatskog jezika u EU (ulomak) + Petar Preradović, Rodu o jeziku (kitica)", tekst:`Višejezičnost je jedan od temelja na kojima počiva Europska unija. Jedna je od najčešće citiranih krilatica u dokumentima EU-a "Ujedinjeni u raznolikosti". Jasno se ističe da je jezik temelj identiteta pojedinoga čovjeka i naroda te da politička i gospodarska zajednica Europske unije svoju snagu crpi upravo u čuvanju i njegovanju višejezičnosti i kulturne raznolikosti.

dr. sc. Dunja Brozović Rončević

---

Ljub' si, rode, jezik iznad svega!
U njem živi, umiri za njega!
Po njemu si sve što jesi:
Svoje tijelo, udo svijeta,
Bus posebnog svoga cvijeta
U narodâ silnoj smjesi.
Bez njega si bez imena,
Bez djedova, bez unukâ.
U prošasti sjena puka,
U buduće niti sjena!

Petar Preradović, Rodu o jeziku`},
    ],
    smjernice:[
      "ZADATAK 1: Odredite problem koji povezuje polazne tekstove. Ukratko predstavite likove koji su nositelji temeljnog problema u Dundu Maroju i Ocu Goriotu. Opišite sličnosti i razlike između roditelja i djece u polaznim tekstovima. Kakav je odnos djece i očeva u Dundu Maroju, a kakav u Ocu Goriotu? Smatrate li odgojno poželjnijim odnos u Dundu Maroju ili Ocu Goriotu? Obrazložite stav.",
      "ZADATAK 2: Navedite koji je datum Međunarodnoga dana materinskoga jezika i zašto je važan. Objasnite što Brozović Rončević podrazumijeva pod višejezičnošću. Interpretirajte kiticu Preradovićeve pjesme. Koji su zajednički stavovi tekstova? Kakva je uloga materinskog jezika za nacionalni identitet?",
    ],
    ocjenaKljuc:"ZADATAK 1: Dundo Maroje = renesansna komedija (Držić, 16. st.); Maro je sin koji rasipa očev novac; Otac Goriot (Balzac, 1835.) = realizam; Delphine ne prekida bal; razlika: Maro rasipnik/Goriot daje previše; sličnost: djeca ignoriraju roditeljske obveze; poželjniji odnos: raspraviti. ZADATAK 2: 21. veljače = Međunarodni dan materinskog jezika; višejezičnost = EU temelj; Preradović = 'ljub' si, rode, jezik iznad svega' = romantičarski nacionalizam; bez jezika = bez identiteta; jezik = most prema precima i potomcima.",
    minRijeci:400, maxRijeci:600,
  },
  "2011_jesen_esej_B":{
    key:"2011_jesen_esej_B",
    year:2011, season:"jesen", razina:"B",
    label:"2010./2011. jesenski rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"Zločin i kazna — Raskoljnikov pred Porfirijem / Rodu o jeziku i Moj hrvatski",
    polaznoP:"Odredite temeljni problem romana i kako polazni tekst govori o tom problemu.",
    tekstovi:[
      {naslov:"F. M. Dostojevski, Zločin i kazna (ulomak — Raskoljnikov pred Porfirijem)", tekst:ESEJ_T1_2011_jesen_B},
      {naslov:"P. Preradović, Rodu o jeziku / S. Škrinjarić, Moj hrvatski je lijep", tekst:ESEJ_T2_2011_jesen_B},
    ],
    smjernice:[
      "Zadatak 1: Predstavite sudionike razgovora u polaznome tekstu i objasnite njihove međusobne odnose. Odredite temeljni problem romana i odredite kako polazni tekst govori o tom problemu. Istaknite stav svih sudionika razgovora prema temi rasprave. Kojim tonom Porfirije govori u polaznome tekstu? Koje osjećaje izražava Razumihin, a koje Raskoljnikov? Što Vi mislite o Raskoljnikovljevim idejama i postupcima?",
      "Zadatak 2: Odredite temu polaznih tekstova i napišite što im je zajedničko. Odredite odnos i osjećaje Sunčane Škrinjarić i Petra Preradovića prema hrvatskome jeziku. Prepoznajte i obrazložite domoljublje u oba teksta s obzirom na vrijeme u kojima su nastali. Opišite Preradovićevu tvrdnju da je jezik tumač svih osjećaja. Kakav je Vaš osobni stav prema materinskom jeziku?",
    ],
    ocjenaKljuc:"Zadatak 1: Raskoljnikov (autor članka), Porfirije (istražni sudac, ironičan ton), Razumihin (prijatelj, preplašen); temeljni problem = Raskoljnikovljeva teorija o 'običnim' i 'neobičnim' ljudima; Porfirije ironično parafrazira; Razumihin šokiran; Raskoljnikov negira. Zadatak 2: Preradović = romantizam, domoljubna pjesma o jeziku kao identitetu naroda; Škrinjarić = moderna autorica, proza, osoban odnos prema jeziku; zajedničko = ljubav prema hrv. jeziku; Preradović = jezik = tumač osjećaja (tuge, radosti, ljubavi).",
    minRijeci:350, maxRijeci:500,
  },
    "2011_zima_esej_A":{
    key:"2011_zima_esej_A",
    year:2011, season:"zima", razina:"A",
    label:"2011./2012. zimski rok — Viša razina (A)",
    trajanje:160,
    naslov:"Rastignac u Parizu (Balzac/Otac Goriot) ili Žmegač/Šimić — solidarnost i ravnodušnost — po izboru",
    polaznoP:"Zadatak 1: Opišite Rastignacovo unutarnje stanje i statusne simbole u ulomku. || Zadatak 2: Odredite temu tekstova Žmegača i Šimića i prepoznajte ironiju.",
    tekstovi:[
      {naslov:"Zadatak 1 — Honoré de Balzac, Otac Goriot (ulomak — Rastignac u Parizu)", tekst:`Eugène je koračao uz tisuću mjera opreza da se ne uprlja blatom, ali je koračao misleći na ono što će reći gospođi de Restaud, skupljao zalihe duhovitosti, iznalazio odgovore u zamišljenom razgovoru, pripremao dosjetke. Student se ipak zablati, pa je u Palais-Royalu bio prisiljen dati ulaštiti cipele i iščetkati hlače. "Da sam bogat", reče sam sebi dok je razmjenjivao kovanicu od trideset novčića koju je bio uzeo sa sobom za slučaj nevolje, "vozio bih se kočijom i mogao bih razmišljati do mile volje." Napokon stiže u ulicu Helder i zapita za groficu de Restaud. S hladnim bijesom čovjeka sigurna u to da će jednoga dana pobijediti, dočeka prezirni pogled ljudi koji su ga bili vidjeli kako pješice prolazi dvorištem, a prethodno nisu čuli pred vratima tandrkanje kočije. Taj ga pogled to jače pozlijedi što je svoje neznatnosti postao svjestan već na ulasku u dvorište u kojemu je kopkao nogom krasan konj bogato upregnut u jednu od onih gizdavih otvorenih kočija koje obznanjuju raskoš rasipna života i podrazumijevaju naviknutost na sve pariške slasti. Odmah ga obuze loše raspoloženje.

Honoré de Balzac, Otac Goriot`},
      {naslov:"Zadatak 2 — Viktor Žmegač, Sablazan u tramvaju (esej) + Antun Branko Šimić, Napitnica", tekst:`Sablazan u tramvaju

Dogodilo se to nedavno, a moglo se zbiti svaki dan. Na jednoj je tramvajskoj postaji u kola ušao jedan starac, invalid. Prosio je, u jednoj ruci šešir, u drugoj štake. Putnici, zaokupljeni mobitelima i kopanjem po nosu, nisu se dali smesti. Neobično su zainteresirano promatrali ulicu. Dao sam mu što sam imao sitnoga. Pogledi su se tada zapiljili u mene, drznika sablažnjiva ponašanja, koji kvari negativnu solidarnost. Netko je promrmljao: Stari će ionako zdimiti u prvu birtiju. Na idućoj postaji, jednoj od središnjih u gradu, mnogi su putnici sišli. Zdimili su u prvi kafić da se oporave od šoka.

Viktor Žmegač, sms eseji

---

Napitnica

Mi smo siti. Mi smo siti.
A za druge nek se stara
Onaj tko ih stvara!
Sad hajdemo piti, piti!
Plod sve tuđe muke
dolazi u naše ruke!
Opijmo se, opijmo se!
Za bol drugih nijemi,
za krik drugih gluhi!
I bez nas se zemlja vrti!
Tko se muči i tko trpi
sam će naći mir u smrti!
Pijmo!

Antun Branko Šimić`},
    ],
    smjernice:[
      "ZADATAK 1 (Balzac — Rastignac): Predstavite lik Eugènea de Rastignaca u kontekstu romana Otac Goriot. Opišite Rastignacove želje i očekivanja. Opišite situaciju u kojoj se nalazi. Opišite unutarnje stanje i izdvojite statusne simbole. Komentirajte prezirne poglede. Je li Pariz promijenio Rastignaca? Čija je sudbina utjecala na njegove životne odluke?",
      "ZADATAK 2 (Žmegač+Šimić): Odredite temu tekstova i što im je zajedničko. Kako se svaki autor odnosi prema svojoj stvarnosti? U kojemu se dijelu razotkrivaju poruke? Kakav je Vaš stav prema ponašanju opisanih ljudi? Prepoznajte ironiju u obama tekstovima. Koji je autor kritičniji? Što mislite o ponašanju opisanih ljudi?",
    ],
    ocjenaKljuc:"ZADATAK 1: Rastignac = provincijalni student koji želi uspjeti u Parizu; grof. de Restaud = aristokratska veza; statusni simboli: kočija vs. pješačenje, blatne cipele, kovanica od 30 novčića; 'hladni bijes' = odlučnost; Goriotova smrt = ključni moment; Pariz ga mijenja od idealista u pragmatičara. ZADATAK 2: Zajednička tema = ravnodušnost prema patnji; Žmegač = proze kratki esej, ironija ('negativna solidarnost', 'oporaviti od šoka'); Šimić = Napitnica = ekspresionistička pjesma-napad na bogataše; ironija u Šimića = govor egoista koji se sami razobličuju; Žmegač je sublimno ironičan, Šimić izravniji.",
    minRijeci:400, maxRijeci:600,
  },
  "2011_zima_esej_B":{
    key:"2011_zima_esej_B",
    year:2011, season:"zima", razina:"B",
    label:"2010./2011. zimski rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"Obiteljski i društveni sukobi u Gospodi Glembajevima",
    tekstovi:[
      {naslov:"Miroslav Krleža, Gospoda Glembajevi (ulomak)", tekst:ESEJ_T1_2011_zima},
    ],
    smjernice:[
      "Predstavite Miroslava Krležu i njegovo mjesto u hrvatskoj književnosti. Smjestite dramu Gospoda Glembajevi u kontekst Krležina opusa i književnog razdoblja.",
      "Prikažite strukturu drame i temeljne dramske sukobe — sukob Leonea i oca Ignjata, sukob s baronicom Castelli-Glembay, te unutarnji Leonov sukob.",
      "Analizirajte lik Leonea Glembaya — njegova umjetnička narav, odnos prema obitelji, povratak kući nakon jedanaest godina. Što Leone simbolizira u kontekstu drame?",
      "Protumačite pojam 'glembajevština' i što on označava u drami. Kako Krleža prikazuje propadanje buržoaske obitelji?",
      "Iznesite svoje mišljenje o temi obiteljskog nasljeđa i može li se čovjek oduprijeti obiteljskoj prokletosti. Potkrijepite stavove primjerima iz teksta.",
    ],
    ocjenaKljuc:"Esej treba: (1) kontekstualizirati Krležu kao najvažnijeg hrvatskog pisca 20. st. i Glembajevski ciklus (Gospoda Glembajevi, U agoniji, Leda); (2) prikazati sukob Leone–Ignjat kao sukob dviju rasa/svjetonazora; (3) analizirati Leoneov lik — slikar, intelektualac, otporan na glembajevštinu; (4) objasniti 'glembajevštinu' kao simbol moralne korupcije buržoazije; (5) osobni stav o nasljeđu i slobodi.",
    minRijeci:350, maxRijeci:500,
  },
  
      "2010_zima_esej_A":{
    key:"2010_zima_esej_A",
    year:2010, season:"zima", razina:"A",
    label:"2009./2010. zimski rok — Viša razina (A)",
    trajanje:160,
    naslov:"A. B. Šimić / Pjesnici — Kaštelan (ili) U registraturi — Nemec — po izboru",
    polaznoP:"Zadatak 1: Interpretirajte pjesmu Pjesnici A. B. Šimića. || Zadatak 2: Objasnite zašto U registraturi prerasta u veliku socijalnu epopeju.",
    tekstovi:[
      {naslov:"Zadatak 1 — Jure Kaštelan o A. B. Šimiću (ulomak) i pjesma Pjesnici", tekst:`Misao A. B. Šimića, njegova (književna, likovna, umjetnička) poetika izvire iz pjesničke vizije svijeta i nije s njom u sukobu. On je totalni pjesnik. Isti oganj razgorijeva se u njegovim krikovima, riječima i rečenicama. Vječno treptanje.

Pjesnici su čuđenje u svijetu
Oni idu zemljom i njihove oči
Velike i nijeme rastu pored stvari
Naslonivši uho
na ćutanje što ih okružuje i muči
pjesnici su vječno treptanje u svijetu
(Pjesnici)

San ovaj okrutan je, leden kao beskrajnost, skamenjen. Rezak kao krik. Oštar kao brid. Nemilosrdan kao kružnica. Određen kao kocka. Nepomičan. Jasan. Iz nedostupnih prostora mašte oteo je staklenu prozirnost riječi. S nedostižnih putanja razuma donio je vedarce svjetlosti. San je preobrazio u postojanje, a postojanje u san. On nije gledao svijet, vidio ga je. On nije tražio uzroke i posljedice, nalazio je rješenja.

Kao što stablo, cvijet i plod žive u zrnu, i zrela poezija A. B. Šimića živjela je u njegovim zelenim klijanjima. Da bi zašumorile grane, zrno mora nestati, smrću oživjeti, preobraziti se. I poezija A. B. Šimića imala je svoje preobraženje.

Jure Kaštelan`},
      {naslov:"Zadatak 2 — Krešimir Nemec o romanu U registraturi (ulomak)", tekst:`Roman U registraturi posljednje je i najbolje Kovačićevo prozno djelo.
U prvom tematskom sloju možemo ga čitati kao varijantu Bildungsromana, romaneskne podvrste koja prati duhovni razvoj, učenje, sazrijevanje, stjecanje životnog iskustva i društvenu afirmaciju glavnog junaka. Odabrana tema paradigmatska je za razdoblje književnoga realizma: prikaz razvoja sudbine siromašnog mladića koji je došao sa sela na školovanje u grad i koji se pokušava uspeti na društvenoj ljestvici. U liku Ivice Kičmanovića, glavnoga muškog aktera Registrature, Kovačić je portretirao cijeli naraštaj: to je zapravo slika rasta i razvoja moderne hrvatske inteligencije.

No uz Ivicu Kičmanovića u romanu se pojavljuje velik broj likova i tipova iz svih društvenih klasa i slojeva — od seljaka, gavana i "kaputaša", do razbojnika, krčmara, svodnika, gradske gospode i "lustrišimuša". Stoga djelo prerasta u veliku socijalnu epopeju koja nastoji obuhvatiti burne društvene i klasne promjene te kaotiziranje odnosa u sjevernoj Hrvatskoj u sutonu feudalizma.

Krešimir Nemec`},
    ],
    smjernice:[
      "ZADATAK 1: Predstavite A. B. Šimića u kontekstu ekspresionizma. Navedite temeljna obilježja Šimićeve poezije. Interpretirajte pjesmu Pjesnici — posebno prvi stih ('Pjesnici su čuđenje u svijetu'). Kako Kaštelan doživljava Šimićevu poeziju? Protumačite rečenicu 'On nije gledao svijet, vidio ga je.' Objasnite metaforiku zadnjih rečenica Kaštelanova eseja.",
      "ZADATAK 2: Predstavite strukturu romana U registraturi i objasnite naslov. Odredite tematske slojeve romana. Objasnite Ivicu Kičmanovića kao sliku moderne hrvatske inteligencije. Argumentirajte tezu da djelo prerasta u socijalnu epopeju. Kakav je Kovačićev odnos prema selu i gradu? Zašto roman izmiče realističkom kanonu?",
    ],
    ocjenaKljuc:"ZADATAK 1: Šimić = ekspresionizam (Preobraženja, 1920.); 'Pjesnici su čuđenje u svijetu' = pjesnici su vječni promatrači, ne sudjeluju u svakodnevici, čudno i posebno doživljavaju stvarnost; slobodni stih; kratki rezolutni iskazi; 'vječno treptanje' = nemir, osjetljivost; Kaštelan = totalnost Šimićeve vizije, misao=poezija=slika; 'vidio, ne gledao' = intuitivno, ne analitičko spoznavanje. ZADATAK 2: Bildungsroman + socijalna epopeja; Ivica Kičmanović = siroče sa sela u gradu; Laura/kumordinar Žorž/Anica; kontrast selo/grad = kritika; izmiče realizmu po romantičarskim, (proto)modernističkim elementima (Laura kao fatalna žena).",
    minRijeci:400, maxRijeci:600,
  },
  "2010_jesen_esej_A":{
    key:"2010_jesen_esej_A",
    year:2010, season:"jesen", razina:"A",
    label:"2009./2010. jesenski rok — Viša razina (A)",
    trajanje:160,
    naslov:"Preobražaj (Kafka) / Pitanja opće kulture (Museux) — po izboru",
    polaznoP:"Zadatak 1: Objasnite Kafkinu tehniku čudesnog koje nikoga ne začuđuje. || Zadatak 2: Obrazložite razliku između učenog i kulturnog čovjeka.",
    tekstovi:[
      {naslov:"Zadatak 1 — Franz Kafka, Preobražaj (ulomak)", tekst:`Uostalom, na nj se nitko nije obazirao. Obitelj je bila posve obuzeta svirkom. Podstanari su u prvi mah stajali, s rukama u džepovima, preblizu stalku za note, tako da su te note mogli i gledati, što je sestru sigurno smetalo, a onda su se povukli prema prozoru i, sagnuvši glave, zapodjenuli poluglasni razgovor. Ostali su tako, a otac ih je zabrinuto promatrao. Veoma se jasno vidjelo da su se razočarali ponadavši se da će čuti lijepo ili zabavno sviranje, cijeli im je koncert postao dosadan i samo su iz uljudnosti dopuštali da se njime ometa njihov mir. Navlastito je način kako su sva trojica tjerali cigaretni dim iz nosa ili usta uvis ukazivao na veliku nervozu. Pa ipak, sestra je svirala tako lijepo! Lice je nagnula u stranu, pozorno su i tužno njezini pogledi išli po redovima nota. Gregor priđe još malo naprijed i stavi glavu sasvim do poda u nadi da će joj uhvatiti pogled. Zar je on životinja kada ga glazba ovoliko može ganuti? Bilo mu je kao da je otkrio put prema žuđenoj neznanoj hrani. Odlučio je doprijeti do sestre, povući je za suknju i tako joj obznaniti da bi sa svojom violinom trebala doći u njegovu sobu, jer nitko od ovih ovdje ne cijeni njezino sviranje kao što ga on cijeni!\n\nFranz Kafka, Preobrazba`},
      {naslov:"Zadatak 2 — Guy Museux, Pitanja opće kulture (ulomak)", tekst:`Riječ kultura dolazi od latinske riječi colere što znači: obrađivati zemlju; njegovati; stanovati; brinuti se; štovati. Upravo od značenja štovati dolazi preneseno značenje njegovanje duha odnosno učenje.\n\nKulturna je osoba ona koja je stekla solidno opće znanje i koja neumorno, gotovo do svog posljednjeg daha, nastavlja potragu za znanjima. Ako su učeni ljudi neophodni, stvarno kulturni ljudi još su potrebniji.\n\nBiti kulturan ne znači toliko poznavati mnogo toga, nego znati ono što je najvažnije. To isto tako znači biti intelektualno nepovjerljiv, imati uvijek duh na oprezu. Iskreno i duboko težiti oplemenjivanju svoje ličnosti, znači već pomalo biti kulturan.\n\nGuy Museux, Pitanja opće kulture`},
    ],
    smjernice:[
      "ZADATAK 1 (Interpretativni — Kafka): Smjestite ulomak u kontekst pripovijetke i vremena nastanka. Objasnite smisao naslova. Tko je Gregor Samsa? Kakva se preobrazba dogodila? Kakav je odnos Gregora i obitelji prije i poslije preobrazbe? Objasnite fizičku preobrazbu i Gregorov odnos prema glazbi i sestri. Smisao retoričkog pitanja 'Zar je on životinja?'. Objasnite Kafkinu tehniku čudesnoga koje nikoga ne začuđuje.",
      "ZADATAK 2 (Raspravni — Museux): Navedite kojoj književnoj vrsti pripada tekst i predstavite temu i autorove stavove. Usporedite značenja latinskog korijena culere. Obrazložite razliku između učenog i kulturnog čovjeka. Slažete li se da su kulturni ljudi potrebniji? Objasnite autorovu misao o intelektualnoj nepovjerljivosti. Kakvu ulogu mora preuzeti kulturan čovjek u suvremenom društvu?",
    ],
    ocjenaKljuc:"ZADATAK 1: Kafka (1915.) = modernizam, egzistencijalizam, apsurd; Gregor Samsa = trgovački putnik koji se pretvara u kukca; obitelj ga prihvaća kao 'normalno' = tehnika čudesnoga bez začuđenosti; glazba = jedina veza s ljudskošću; sestra = jedina koja ga razumije; obitelj se oslobođuje Gregora = otuđenje, gubitak individua; usporedba: Kafkin Proces, Camus Stranac. ZADATAK 2: Museux = esej (publicistička vrsta); colere = obrađivati/jego vati; kulturan ≠ učen (kulturan = stalna potraga + samokritika + intelektualna nepovjerljivost); prijedlog: kritičko mišljenje, samorefleksija; osobna ilustracija.",
    minRijeci:400, maxRijeci:600,
  },
  "2010_jesen_esej_B":{
    key:"2010_jesen_esej_B",
    year:2010, season:"jesen", razina:"B",
    label:"2009./2010. jesenski rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"Sokrat o knjigama / U registraturi — pisano i usmeno znanje",
    polaznoP:"Objasnite Sokratovu kritiku pisma i kralja. Komentirajte izreku: Verba volant, scripta manent.",
    tekstovi:[
      {naslov:"Alberto Manguel, Povijest čitanja (ulomak)", tekst:ESEJ_T1_2010_jesen_B},
      {naslov:"Ante Kovačić, U registraturi (ulomak — Ivičin odlazak u grad)", tekst:ESEJ_T2_2010_jesen_B},
    ],
    smjernice:[
      "Predstavite temu o kojoj govori priloženi ulomak i u nekoliko rečenica opišite suprotne teze o temi.",
      "Obrazložite svoj stav prema tezama u uvodnom dijelu priloženog ulomka. Napišite kako je Sokrat učeniku obrazložio svoje mišljenje o knjigama. Slažete li se s njegovim mišljenjem?",
      "Zašto je kralj bio sumnjičav prema pismu? Čega se bojao? Slažete li se s njegovim mišljenjem? Objasnite kraljevu misao da pismo ne nudi 'pravu mudrost, samo njezin privid'.",
      "Komentirajte izreku Verba volant, scripta manent (Riječi lete, zapisano ostaje) u kontekstu priloženog ulomka.",
      "Kakav je položaj pisane riječi u današnjem informatičkom svijetu? Ima li ona smisao i budućnost? Potkrijepite stavove primjerima iz vlastitog čitateljskog iskustva.",
    ],
    ocjenaKljuc:"Esej (raspravni ili interpretativni, po izboru): (1) raspravni — Sokrat kritizira pismo jer daje lažni privid znanja bez pravog razumijevanja; kralj se boji zaborava i zamjene pravog znanja bilješkama; Verba volant, scripta manent = paradoks: pisano traje, ali je mrtvo bez dijaloga; vlastiti stav; (2) interpretativni — U registraturi: Ivičin odlazak iz sela u grad, sukob vrijednosti (seljak vs. gospodin), župnikova retorika o obrazovanju; tema školovanja i socijalnog uspona; lik Ivice Kičmanovića.",
    minRijeci:350, maxRijeci:500,
  },
  "2010_zima_esej_B":{
    key:"2010_zima_esej_B",
    year:2010, season:"zima", razina:"B",
    label:"2009./2010. zimski rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"Slobodno vrijeme i razonoda / U registraturi — lik Jurića kumordinara",
    polaznoP:"Kakav je stav o razonodi i slobodnome vremenu iznesen u priloženome tekstu? / Predstavite lik kumordinara Jurića i kako se Ivičina sudbina s njim preplela.",
    tekstovi:[
      {naslov:"Joffre Dumazedier, Vrijeme i opuštanje (ulomak)", tekst:`Razdvajanje vremena na vrijeme rada i vrijeme odmora prikladna je podjela, ali ona više ne odražava stvarnost, osobito u naše doba. U slobodno vrijeme mnogi ljudi stječu nove kompetencije, što se ne tako davno pripisivalo samo svijetu rada. Danas je slobodno vrijeme više nego ikada velika prilika da se ostvarimo i da se razvijemo. Prisjetite se samo svega što se nudi na tržištu kao aktivnost u slobodno vrijeme.

Slobodno vrijeme mnogi poistovjećuju s razonodom. Razonoda je životni prostor i vrijeme u kojemu se udaljavamo od uobičajenih ozbiljnih aktivnosti kojima bismo ponajprije trebali biti zaokupljeni: djeca i adolescenti školom, odrasli poslom. Razonoda u širem smislu znači zabava, posebice ako se radi o razbibrizi jer donosi ugodu i zadovoljstvo. Razonoda i slobodno vrijeme u tijesnoj su vezi. Etimologija sintagme slobodno vrijeme upućuje na to da se radi o vremenu u kojemu nam je dopušteno baviti se onime što smo sami odabrali, dakle, ne moramo obavljati neku nametnutu zadaću.

Tako shvaćena razonoda obuhvaća i igre i praznike, i nedjelje i godišnji odmor. Ako razonodu smatramo rekreativnim predahom, prijeko potrebnim odmorom između dviju korisnih aktivnosti, onda razonodu ne razlikujemo od besposličarenja. Ali, postaje li time razonoda suprotnost takozvanom ozbiljnom radu? Ili ipak i u razonodi radimo? Je li novčana dobit ono što razlikuje jedan i drugi rad?

Pojam razonode i slobodnoga vremena mijenjao se kroz povijest. Suvremeni čovjek osvijestio je značenje i potrebu za slobodnim vremenom. No, i ovdje postoji zamka. Zahvaljujući tehnološkom napretku, značajno će se smanjiti prosječno radno vrijeme. Govori se već o "civilizaciji slobodnoga vremena". Hoće li se to mojebitno buduće vrijeme bez radnoga vremena pretvoriti u izgubljeno vrijeme?`},
      {naslov:"Ante Kovačić, U registraturi (ulomak — kumordinar Jurić)", tekst:`Kumordinar žao bi u naš prnjavor sa silnim prstenjem na desnoj ruci, koja bijaše uvijek gola da svatko vidi i sudi po njoj bogatstvo i čast. U crkvi tom zgodom naš neprestance posluje desnom rukom: sad je digne na sklapanje i tobožnju molitvu, sad njom posiže za rupčima, sada nešto drugo njom upravlja i priudesuje. Tom pako zgodom svjetluca čudnovato njegovo prstenje kano da zrcalo okrećeš po suncu. Žene i djevojke zaboravljaju i na molitvu upirući pobožne oči u njega. A onaj koji zna sve tajne ljudskih srdaca doista čuje često uzdah kako skromne seljakinje, tako i koje namigunce: Ah, da me njim daruje, sretna li bih ti bila!...

Lijevu ruku, obučenu vazda u rukavicu od jelenovine, spušta on elegantno niz tijelo ili je prebaci na križa kada s desnicom posluje. A istom ono olakšteno odijelo s pozlaćenim velikim pucetima kano škude! Pa ona mast što mu se obilato iz ulizane kose cijedi po debelom, najpomnije obrijanom vratu... Zatim bijela staza preko čitave glave od čela na drugi kraj do obrijane žice poput ceste što vodi preko brda od jednoga do drugoga podnožja... Konačno onaj miris čudnovato zaudara od gospodina kumordinara — čudnovato, da; vonj ko da si gnojnicu tamjanom potkadio... Seljaci bi se pogledavali, trkali ramenima ili nogama, pa namignuli: Ej, Bože moj! Bože moj! Koji li bi prorok mogao negda proreći da će sve biti danas-sutra naš Jurić! Lijepo li ti ga njemu! Sretna li majka što ga rodi! Hm, hm, hm!... A kumordinar, stanovitim osobitim njuhom zadišavši i osjetivši takvo laskavo šaputanje, uzdigao bi još napetije jaku debelu glavu uvis, kano da si ga na kolac nabio, i nahmuruvši usta i nos poput neodlučna diplomate ukočio se i pomislio u sebi: Gledajte samo, telići, u nova vrata! Imate što i gledati...`},
    ],
    smjernice:[
      "Zadatak 1 (raspravni — Dumazedier): U nekoliko rečenica predstavite temu i izrečene stavove. Kakav je stav o razonodi i slobodnome vremenu iznesen u priloženom tekstu? Kako Vi shvaćate razonodu, a kako slobodno vrijeme? Usporedite značenja riječi rad i slobodno vrijeme. Obrazložite razliku između plaćenog i neplaćenog rada. Kako se pojam slobodnoga vremena mijenjao kroz povijest? Komentirajte zaključne rečenice i odgovorite: Zamišljate li to vrijeme povratkom u izgubljeni raj? Koje mjesto zauzima slobodno vrijeme u životu suvremenoga čovjeka?",
      "Zadatak 2 (interpretativni — U registraturi): Predstavite lik kumordinara Jurića u kontekstu romana U registraturi. Kako je okarakteriziran lik kumordinara Jurića? Kako se njegovi bivši suseljani odnose prema njemu? Kakav je čovjek postao Jurić u gradu? Navedite uzroke takve promjene. Kako se Ivičina sudbina preplela s Jurićevom? Smatrate li Jurića pozitivnim ili negativnim likom? Kako likovi Jurića i Ivice Kičmanovića osvjetljavaju temeljni problem romana: odnos selo — grad?",
    ],
    ocjenaKljuc:"Zadatak 1: slobodno vrijeme = prostor samorazvoja, ne samo odmor; razonoda vs. besposličarenje; radno i slobodno vrijeme kroz povijest; 'civilizacija slobodnog vremena' — opasnost ili prilika; osobni primjeri. Zadatak 2: Jurić/kumordinar = seljak koji je uspjeo u gradu, pohlepan, hvalisav, karijerizam; seljaci se dive i rugaju; Ivica Kičmanović = protagonist koji polazi istim putem i propada; kontrast: Jurić uspijeva materijalno, Ivica moralno i egzistencijalno propada; gradska sredina mijenja ljude.",
    minRijeci:350, maxRijeci:500,
  },
  "2010_ljeto_esej_A":{
    key:"2010_ljeto_esej_A",
    year:2010, season:"ljeto", razina:"A",
    label:"2009./2010. ljetni rok — Viša razina (A)",
    trajanje:160,
    naslov:"Zločin i kazna / Igra, sport i kapital — po izboru",
    polaznoP:"Zadatak 1: Što je Raskoljnikov želio o sebi doznati svojim činom? Protumačite pitanje zločina, krivnje i kazne. || Zadatak 2: Koju tezu o sportu u suvremenome društvu obrazlaže autor? Usporedite značenja riječi sport i igra.",
    tekstovi:[
      {naslov:"Zadatak 1 — F. M. Dostojevski, Zločin i kazna (ulomak — Raskoljnikov Sonji)", tekst:`I zar zbilja misliš da sam krenuo u to kao budala, grlom u jagode? Krenuo sam kao pametna glava, a baš me je to i upropastilo! I zar zbilja misliš da nisam znao, recimo, bar to: ako sam se već ujeo pitati i ispitivati imam li pravo da prigrabim vlast ili nemam, onda to znači da nemam prava na vlast. Ili, ako već zadajem sebi pitanje: je li čovjek gnjida, onda znači da za mene čovjek nije gnjida, nego da je gnjida za onoga kome to uopće ne pada na pamet i tko ide dalje bez pitanja.

Čime sam se dane i dane mučio pitanjem: bi li Napoleon to učinio ili ne bi, onda znači da sam već jasno naslućivao da nisam Napoleon. Sve, sve muke tog naklapanja podnio sam, Sonja, i htio sam ih skinuti sebi s vrata, poželjeo sam, Sonja, da ubijem bez kazuistike, da ubijem radi sebe, samo radi sebe! Čak ni sebe nisam htio u tome obmanjivati! Nisam ubio radi toga da se domognem sredstava i vlasti pa da postanem dobrotvor čovječanstva! Jednostavno sam ubio; radi sebe sam ubio, samo radi sebe: a hoću li ikad postati nečiji dobrotvor ili ću do kraja života, kao pauk, loviti sve oko sebe u paukovu mrežu i svima njima piti krv, to mi je u onom trenutku zacijelo bilo sasvim svejedno!... I, što je najvažnije, nisu meni novci bili potrebni, Sonja, kad sam ubio; nisu mi toliko bili potrebni novci koliko nešto drugo. Sve ja to sad dobro znam. Shvati me, kad bih opet išao tim istim putem, možda se ne bih nikad više latio ubojstva. Nešto sam drugo morao doznati, nešto me je drugo guralo naprijed: morao sam tada doznati, i to što prije doznati, jesam li gnjida kao i svi, ili sam čovjek? Hoću li moći preskočiti zapreku ili neću? Hoću li se odvaži ti da se sagnem i uzmem ili neću? Jesam li puzav stvor ili imam pravo?

— Ubijati? Imate li pravo ubijati? — pljesne Sonja rukama.`},
      {naslov:"Zadatak 2 — Tonći Matulić, Igra, sport, utakmica... industrija: pospremanje izokrenutih vrijednosti (ulomak)", tekst:`Da od svih ljudskih bića mala djeca najviše vremena provode igrajući se, u to nema nikakve sumnje. Pa, ipak, dječju igru nitko ne smatra sportom. Stvar se bitno mijenja kada djeca malo porastu pa započnu unositi pravila u svoju igru, ako se tu još uvijek radi o dječjim igrama. Logičkim slijedom dolazimo do porazne spoznaje. Homo ludens — razigrani čovjek, kakvim ga s pravom smatramo, kada odraste prestaje se igrati, a počinje se baviti sportom. A da stvar bude apsurdnija, najveće sportsko natjecanje oslovljavamo kao "igre": Olimpijske igre.

Problem sporta u suvremenom društvu uopće nije sportski problem. Jer, sport je, ipak, samo igra. Istina, sport je i više od igre. Sport je i natjecanje. I slava. Međutim, suvremeno društvo ne poznaje ekonomiju i tržište kao zasebna područja ljudske djelatnosti, nego sve više cjelokupnu ljudsku djelatnost srozava na zakonitosti ekonomije i tržišta. Bez novca nema razvijene sportske kulture, a kamoli vrhunskoga sporta. Novca nema bez razvijene industrije, a razvijene industrije nema bez kapitala.

Tužno, ali istinito, glavna i odlučna pokretačka snaga suvremenoga sporta jest kapital. Jesu li, dakle, vrhunski nogomet i sport općenito uistinu vrhunski zbog igre, tj. igranja radi razbibrige i zabave, dakle radi otkrivanja djetinje nevinosti u ljudima, ili su to postali zbog investiranog kapitala?

Poruka? Treba se više igrati, a manje baviti sportom. Suvremeni čovjek poznaje mnogo individualnih i kolektivnih sportova, ali je pritom zaboravio autentični smisao igre. Vrhunski igrač je bogat igrač. Kakvog li apsurda! Jer, igra i njezin igrač ne poznaju nikakve interese. To je igra radi igranja, tj. radi otkrivanja djetinje nevinosti u čovjeku, a sve ostalo je sport — natjecanje, moć i slava.`},
    ],
    smjernice:[
      "ZADATAK 1 (Interpretativni esej — Dostojevski): Smjestite ulomak u kontekst romana, nacionalne književnosti i vremena u kojemu je nastao. Objasnite zašto ovaj roman nije kriminalistički, a ima elemente toga tipa romana. Odredite temeljni problem romana i uočite na koji način ovaj ulomak otvara taj problem. Što je želio o sebi doznati Raskoljnikov svojim činom? Protumačite pitanje zločina, krivnje i kazne. U kakvome su odnosu kazna i osobni osjećaj krivice? Tko je Sonja Marmeladova i kakva je njezina uloga? Odgovorite Sonji na pitanje koje ona postavlja Raskoljnikovu.",
      "ZADATAK 2 (Raspravni esej — Matulić): Navedite kojoj književnoj vrsti pripada tekst i u nekoliko rečenica predstavite temu i autorove stavove. Obrazložite svoj stav prema tvrdnjama u uvodnome dijelu. Koju tezu o sportu u suvremenome društvu obrazlaže autor? Kako se sport pretvorio u djelatnost kojom upravlja kapital i tržište? Usporedite značenja riječi sport i igra i potkrijepite primjerima. Obrazložite razliku između amaterskog i profesionalnog sporta. Koje mjesto zauzima sport u životu suvremenoga čovjeka? Napišite koju biste strategiju razvijanja sportske kulture predložili.",
    ],
    ocjenaKljuc:"ZADATAK 1: Dostojevski (1866.) = psihološki realizam; Raskoljnikov ubija lihvaricu Aljonu Ivanovnu da bi dokazao je li 'gnjida ili čovjek' = testira Napoleonovu teoriju; roman nije kriminalistički jer fokus nije na istrazi nego na psihologiji; Sonja = vjera, milosrđe, iskupljenje; krivnja prethodi pravnoj kazni; ZADATAK 2: esej = publicistička vrsta; Matulić = sport pod vlašću kapitala; igra = slobodna, bez interesa; sport = natjecanje, novac, slava; Homo ludens (Huizinga); razlika amater/profesionalac; prijedlog: razvoj školskog i amaterskog sporta.",
    minRijeci:400, maxRijeci:600,
  },
  "2010_ljeto_esej_B":{
    key:"2010_ljeto_esej_B",
    year:2010, season:"ljeto", razina:"B",
    label:"2009./2010. ljetni rok — Osnovna razina (B)",
    trajanje:160,
    naslov:"Raspravni: Roman i knjiga (Gavran) / Interpretativni: Zločin i kazna (Raskoljnikovljeva teorija)",
    tekstovi:[
      {naslov:"1. zadatak — Raspravni esej: Miro Gavran, O romanima i knjigama (ulomak)", tekst:`Šesnaest godina sam u nekim novinama pročitao tekst o SMRTI ROMANA. Neki sveučilišni profesor govorio je o tome da će roman uskoro umrijeti, da je kraj toga književnog oblika i da pisci u romanima više nikada ništa novo i originalno neće napisati. Taj nesretni članak pročitao sam prije trideset i jednu godinu. U međuvremenu, roman nije umro. Usudim se reći da je življi nego ikada.

Ali ona izjava da će roman uskoro umrijeti, još i sada mi s vremena na vrijeme zazvoni u uhu.

Dijalektički gledano, sve što je rođeno, prije ili kasnije mora umrijeti. Stoljećima je u brojnim narodima poezija bila kraljica književnosti pa je, u jednom trenutku, roman zasjeo na taj tron. I nije isključeno da će jednoga dana roman izgubiti svoju privlačnost.

Ali da bi se to dogodilo, čini mi se da bi na ovome svijetu morali živjeti neki drugi ljudi.

Prije petnaestak godina pročitao sam da će se u bliskoj budućnosti prestati tiskati knjige. Neki popularni pisci počeli su svoje romane plasirati prvo na internetu, i činilo se da otpočinje nova era — činilo se da će uskoro i KNJIGA UMRIJETI.

Međutim, sve te prognoze od prije deset godina izjalovile su se. Knjige se iz godine u godinu tiskaju u sve većem broju. Internet je uspio oduzeti čitatelje novinama i gledatelje televiziji i filmu. Ali nisam primijetio da je knjiga izgubila bitku s tim novim medijem.

Stoga vjerujem da ni tiskana knjiga neće izgubiti bitku s internetom, niti s bilo kojim drugim medijem.

Za razliku od kratke pjesme, kratke priče, ili drame fokusirane na samo jedan izdvojeni događaj, roman sugerira putovanje kroz specifični sveobuhvatni život, roman je simulacija specifičnog svijeta. Roman je pod potpunom kontrolom autora samo dok nastaje. Kada se otisne, roman živi svojim životom, tako da nijedan autor ne može biti odgovoran za čitateljeve asocijacije. Roman je život. Roman je svijet.

Miro Gavran, O romanima i knjigama`},
      {naslov:"2. zadatak — Interpretativni esej: Raskoljnikovljeva teorija (F. M. Dostojevski, Zločin i kazna)", tekst:`To se tisuću puta već napisalo i pročitalo. Što se pak tiče moje razdiobe ljudi na obične i neobične, priznajem, da je ta razdioba nešto samovoljna, ali ja to i ne nastojim dokazati brojevima. Ja jedino vjerujem u svoju glavnu misao. A ta je misao da se ljudi po prirodnom zakonu dijele uopće na dvije vrste: na nižu (običnu), to jest, da tako reknem, na materijal, koji služi jedino za rađanje sličnih stvorenja, i na ljude odista, to jest, na one u kojima ima dara ili talenta, da u svojoj sredini reknu novu riječ.

Prva vrsta, to jest materijal, to su uopće ljudi, po svojoj prirodi konzervativni, pristojni, žive u poslušnosti i vole da budu poslušni. Oni po mom sudu i moraju da budu poslušni, jer je to njihovo određenje i nikako ih ne ponizuje. Druga vrsta: svi krše zakon, rušioci su ili bar skloni tome. Zločini su tih ljudi, razumije se, relativni i raznoliki: ponajviše oni iziskuju, u jako različitim izjavama, da se u ime boljega razruši današnje. No ako je kome potrebno poradi ideje koraknuti i preko leševa i preko krvi, to on može zaista u sebi, po mom sudu, dopustiti sam sebi, da korakne preko krvi — što uostalom zavisi o ideji i njezinoj veličini, to zapamtite! Jedino u tom smislu govorim ja u svom članku o njihovom pravu na zločin.

Prva je vrsta svagda gospodar sadašnjosti, druga vrsta gospodar budućnosti. Oni prvi čuvaju svijet i množe ga brojem, ovi drugi okreću svijet i vode ga k cilju. I ovi i oni imaju sasvim jednako pravo, da postoje.

F. M. Dostojevski, Zločin i kazna`},
    ],
    smjernice:[
      "ZADATAK 1 (Raspravni): Navedite kojoj književnoj vrsti pripada priloženi ulomak i u nekoliko rečenica predstavite temu i autorove stavove. Obrazložite svoj stav prema autorovim tvrdnjama. Napišite u kojem je stoljeću roman zasjeo na književni tron — na dvama primjerima romana iz toga vremena objasnite što su oni tada značili čitateljskoj publici, što danas znače nama. Što autor misli o odnosu knjige i novih medija? Navedite jedan primjer romana koji Vas je oplemenio ili proširio Vaše vidike.",
      "ZADATAK 2 (Interpretativni): Smjestite ulomak u kontekst romana, nacionalne književnosti i vremena u kojem je nastao. Objasnite ukratko što je Raskoljnikov učinio. Odredite temeljni problem romana i uočite na koji način ovaj ulomak otvara taj problem. Što je navelo Raskoljnikova da razvije iznesenu teoriju? Kako Raskoljnikov dijeli ljude? U koju skupinu Raskoljnikov ubraja samoga sebe? Što se s njim dogodilo kada je svoju teoriju proveo u djelo? Smatrate li da se bolji svijet može graditi u krvi postojećeg? Obrazložite svoje stavove.",
    ],
    ocjenaKljuc:"ZADATAK 1: Gavran, O romanima i knjigama = esej (ne roman ni pripovijetka); tema = budućnost romana i knjige u digitalnom dobu; roman zasjeo na tron u 19. st. (realizam) — primjeri Balzac/Tolstoj/Dostojevski/Flaubert = novi uvidi u društvo, psihologiju; veza s novim medijima: knjiga neće nestati (analogija s kazalištem koje nije nestalo s TV-om); roman kao 'simulacija specifičnog svijeta'. ZADATAK 2: Dostojevski (1821.–1881.), Zločin i kazna (1866.) = psihološki roman realizma; Raskoljnikov ubio lihvaricu Aljonu Ivanovnu (i Lizavetu); teorija: dvije vrste ljudi = 'materijal' (obični, konzervativni, poslušni) i 'izvanredni' (ruše staro, imaju pravo na zločin 'u ime ideje'); Raskoljnikov sebe smatra izvanrednim ali ubojstvo ga uništava psihički = teorija pada u praksi; krivnja, kajanje, iskupljenje kroz Sonju; realizam = psihološka analiza likova, dostojanstvo čovjeka.",
    minRijeci:350, maxRijeci:500,
  },
  "2022_ljeto_esej_A":{
    key:"2022_ljeto_esej_A",
    year:2022, season:"ljeto", razina:"A",
    label:"2021./2022. ljetni rok — Jedinstven ispit",
    trajanje:160,
    naslov:"Patnje mladoga Werthera (Goethe) — Werther, Lotta, Albert; ljubav kao motiv postupaka",
    polaznoP:"Usporedite Lottin odnos prema Wertheru i Albertu. Protumačite ulogu ljubavi u postupcima likova.",
    tekstovi:[
      {naslov:"Johann Wolfgang Goethe, Patnje mladoga Werthera (ulomci — pisma Wilhelmu)", tekst:`29. srpnja
A smijem li reci, Wilhelme? Zar ne bih smio? Ona bi sa mnom bila sretnija nego što je s njim! Njemu nekako nedostaje osjejnost – shvati to kako hoces – njegovo srce nije kadro djelovati na drugo srce tajanstvenom osjejnom moci. Kad bismo Lotta i ja zajedno citali neku knjigu, na stanovitu bi se mjestu u toj dragoj knjizi naša srca stopila u jedno. Bilo je stotinu takvih slucajeva: nešto trece bi svojim djelovanjem potaknulo naša osjejanja da se zajedno oglase. Dragi Wilhelme! – On je doduše voli iz sve duše, a što sve takva ljubav ne zaslužuje?!

12. rujna
Bila je nekoliko dana na putu, išla je po Alberta. Danas sam joj ušao u sobu, pošla mi je ususret, poljubio sam joj ruku sa silnom radošcu.
Kanarinac joj je sletio sa zrcala na rame. "To nam je novi prijatelj", rece i zovne ga na dlan, "namijenjen je djecici. Umiljat je. Pogledajte ga! Kad mu dajem kruha, lepece krilima i pristojno kljuca. Gle, zna me i poljubiti!"
Kad je pticici ponudila svoja usta, ona ljupko pritisne njezine slatke usne kao da je kadra osjetiti blaženstvo toga užitka.
"Neka poljubi i vas", rece Lotta i okrene pticu prema meni. Mali kljun prevali put od njezinih do mojih usta, a kad mi je blago piknuo usne, osjetio sam dašak kao predosjet nježnoga užitka.
Ja odvratih lice. Ne bi to smjela raditi! Ne bi smjela dražiti moju maštu tim prizorom rajske nevinosti i blaženstva, ni buditi moje srce, što ga ravnodušnost životne sudbine ipak ponekad uljula u tup san! – A zašto ne? – Zna da joj necu ništa, jer zna koliko je ljubim.

Johann Wolfgang Goethe, Patnje mladoga Werthera`},
    ],
    smjernice:[
      "Predstavite poetiku djela Patnje mladoga Werthera.",
      "Usporedite na temelju djela u cjelini Lottin odnos prema Wertheru i prema Albertu.",
      "Interpretirajte polazni tekst na sadržajnoj i stilskoj razini.",
      "Protumacite na temelju citateljakoga iskustva kako ljubav motivira postupke književnih likova.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Patnje mladoga Werthera (Goethe, 1774.) = epistolarni roman = predromantizam/Sturm und Drang = subjektivnost, osjejnost, ljubav kao apsolutna vrijednost. Werther = strastveno voli Lottu = ne može živjeti bez uzajamnosti = tragican kraj (samoubojstvo). Lotta = voli Alberta = pristojno i razumno, ali Wertherov utjecaj je osjetna. Albert = racionalnost, pragmatizam. Ulomak 1: Werther usporeduje sebe s Albertom. Ulomak 2: Scena s pticom = Werther ne može podnijeti Lottinu nježnost koja mu je nedostupna. Ljubav kao motor propasti: slicno u Romeu i Juliji, Anni Karenjina.",
    minRijeci:400, maxRijeci:700,
  },
  "2022_jesen_esej_A":{
    key:"2022_jesen_esej_A",
    year:2022, season:"jesen", razina:"A",
    label:"2021./2022. jesenski rok — Viša razina (A)",
    trajanje:160,
    naslov:"Gospoda Glembajevi (Krleža) — barunica Castelli i Leone Glembaj; glembajevsko nasljeđe",
    polaznoP:"Protumačite odnos barunice Castelli i Leonea Glembaja. Analizirajte utjecaj glembajevskog nasljeđa.",
    tekstovi:[
      {naslov:"Miroslav Krleža, Gospoda Glembajevi (ulomak — barunica Castelli i Leone)", tekst:`BARUNICA CASTELLI mirno i žalosno: U čitavoj ovoj tamnoj glembajevskoj kući vi ste za mene bili jedina traka svjetlosti! Ja sam ušla u ovu kuću iz materijalnih razloga: ja to priznajem! Sie müssen das verstehen! Meine Kindheit hab' ich nicht verbracht wie Sie, auf einem Kirmanperser Tausend und eine Nacht spielend! S dvanaest godina ja sam ostala na ulici, Leone. Vi ne znate što to znači smucati se po parkovima na jesenjoj kiši, gladan i poderan i bez krova! Vi ste počeli živjeti s rentom od dvadeset funti mjesečno, a ja s poderanim cipelama i s jednom starom lisicom oko vrata! Meine Glembay-Ehe war eine finanzielle Transaktion! Ja to priznajem! I vidite: ja sam imala iza sebe tada već jedan degenerirani brak sa šezdesetogodišnjim barunom Castellijem i mnogo toga, no vjerujte mi, ja govorim pred mrtvim licem ovoga starca: za sve ono što sam ja morala u ovim posteljama i u ovom braku, ja sam bila vrlo slabo plaćena! Und ich weiss es nicht: vielleicht existiert Etwas über uns, ali ja sam, tako mi Bog pomogao, tu svoju glembajevsku transakciju vrlo skupo platila! Krvavo! Furchtbar blutig! Vi znate i sami tko je bio vaš otac! I sve ono što ste vi njemu gore u sobi noćas nabrojili, sve sam to ja gledala iza kulisa punih dvadeset godina. (...) i taj čovjek koji je mogao da zgazi nečiju egzistenciju (...), taj čovjek je postao ocem mog djeteta! Oliver je čisti, izrezani on! Und alles furchtbar Dunkle in diesem Kind, to je moj križ!
LEONE: Sve je to mutno! Mene boli glava i ja počinjem da se gubim u svemu tome. Ja sam se vratio ovamo potpuno miran, sve one ljage što sam ih godinama osjećao zbog oskvrnute uspomene na moju majku, sasvim su već bile ishlapjele, i ja sam bio potpuno miran! Ali, molim vas, ovo sve oko vas ovdje! Ovaj Oberleutnant, ovaj vaš ispovjednik, pa onda smrt one trudne žene, i ona stara pod konjima, čitav način kojim se ovdje u kući govorilo o tim stvarima, to morate shvatiti da me je nerviralo!

Miroslav Krleža, Gospoda Glembajevi`},
    ],
    smjernice:[
      "Predstavite poetiku djela Gospoda Glembajevi.",
      "Protumačite odnos barunice Castelli i Leonea Glembaja na temelju djela u cjelini.",
      "Interpretirajte polazni tekst na sadržajnoj i stilskoj razini. Objasnite ulogu polaznoga teksta u djelu u cjelini.",
      "Protumačite kako glembajevsko nasljeđe utječe na sudbinu Leonea Glembaja.",
      "Obrazložite svoje tvrdnje.",
    ],
    ocjenaKljuc:"Gospoda Glembajevi (Krleža, 1928.) = ekspresionistička drama = glembajevski ciklus. Barunica Castelli = maćeha Leonea, ušla u obitelj iz materijalnih razloga, svjesna je propasti. Leone = sin Ignjata Glembaya, vratio se kući, sukob s ocem. Glembajevsko nasljeđe = degeneracija roda, materijalizam, korupcija, moralni pad. Polazni tekst = kulminacija sukoba — barunica se brani, Leone je zbunjen. Stilske odlike: višejezičnost (njemačke replike), ekspresionistička napetost, sukobi savjesti.",
    minRijeci:400, maxRijeci:700,
  },

};

export { TLBL, XP_LEVELS, LEVEL_NAMES, TOPIC_LABELS, EXAMS, SAZECI, ESEJI, stripLetterPrefix, BROKEN_QS };