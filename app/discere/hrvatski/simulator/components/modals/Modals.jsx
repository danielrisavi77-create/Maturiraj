'use client';
import React, { useState } from 'react';
import { TOPIC_LABELS } from '../../hrvatskiSimulatorData';
import { e, useModalTrap } from '../../utils/helpers';
function ProPaywallModal({feature,onClose}){
  const panelRef=useModalTrap(onClose); // Esc + focus-trap + povrat fokusa
  const features={
    esej:{
      icon:"✍️",
      title:"AI ocjenjivanje eseja",
      desc:"Dobij detaljnu ocjenu po NCVVO kriterijima A–E s konkretnim savjetima za poboljšanje.",
      bullets:["Ocjena po svakom kriteriju (A–E)","Što je dobro, što poboljšati","Zaključni komentar profesora"]
    },
    sazetak:{
      icon:"📝",
      title:"AI ocjenjivanje sažetka",
      desc:"AI provjerava sadržaj, jezik i kompoziciju tvog sažetka prema maturanim smjernicama.",
      bullets:["Provjera sadržaja i tema","Jezična i stilska analiza","Usklađenost sa smjernicama"]
    },
    analitika:{
      icon:"📊",
      title:"Napredna analitika",
      desc:"Trend grafovi, predikcija ocjene i personalizirane preporuke ispita.",
      bullets:["Predikcija ocjene na maturi","Trend napretka kroz ispite","Personalizirane preporuke"]
    },
    preporuke:{
      icon:"🎯",
      title:"Personalizirane preporuke",
      desc:"Na temelju tvojih grešaka i slabih tema, simulator predlaže optimalan sljedeći ispit.",
      bullets:["Analiza slabih tema","Preporuka sljedećeg ispita","Prilagođen plan vježbanja"]
    }
  };
  const f=features[feature]||features.esej;
  return e("div",{onClick:onClose,role:"dialog","aria-modal":"true","aria-label":f.title,
    style:{position:"fixed",inset:0,background:"rgba(0,0,0,.8)",zIndex:500,
    display:"flex",alignItems:"center",justifyContent:"center",padding:20,backdropFilter:"blur(4px)"}},
    e("div",{ref:panelRef,tabIndex:-1,style:{background:"var(--s1)",border:"1px solid var(--bdr2)",borderRadius:"var(--rr)",
      padding:"28px 28px",maxWidth:420,width:"100%",animation:"fi-scale .2s ease",outline:"none"},
      onClick:ev=>ev.stopPropagation()},
      e("div",{style:{textAlign:"center",marginBottom:20}},
        e("div",{style:{fontSize:40,marginBottom:12}},f.icon),
        e("div",{style:{fontFamily:"var(--fh)",fontSize:22,marginBottom:8,letterSpacing:"-.01em"}},f.title),
        e("p",{style:{fontSize:14,color:"var(--muted)",lineHeight:1.65,marginBottom:16}},f.desc),
        e("div",{style:{display:"flex",flexDirection:"column",gap:6,textAlign:"left",marginBottom:20}},
          f.bullets.map((b,i)=>e("div",{key:i,style:{display:"flex",alignItems:"center",gap:10,
            padding:"8px 12px",background:"var(--s2)",borderRadius:"var(--r)",fontSize:13}},
            e("span",{style:{color:"var(--green)",fontWeight:700,flexShrink:0}},"✓"),
            e("span",null,b)
          ))
        ),
        e("div",{style:{background:"linear-gradient(135deg,rgba(45,84,196,.1),rgba(91,127,255,.05))",
          border:"1px solid rgba(45,84,196,.2)",borderRadius:"var(--r)",padding:"14px 16px",marginBottom:20}},
          e("div",{style:{fontWeight:700,fontSize:15,marginBottom:4}},"Discere PRO"),
          e("p",{style:{fontSize:13,color:"var(--muted)",margin:0,lineHeight:1.6}},
            "AI ocjenjivanje eseja i sažetka, napredna analitika i personalizirane preporuke. Uključeno u PRO plan.")
        )
      ),
      e("div",{style:{display:"flex",gap:10}},
        e("button",{className:"btn btn-g",style:{flex:1,padding:"11px"},onClick:onClose},"Zatvori"),
        e("a",{href:"https://discere.app/cijene",target:"_blank",rel:"noopener",
          className:"btn btn-p",style:{flex:1,padding:"11px",textDecoration:"none",textAlign:"center",
          borderRadius:"var(--r)",display:"flex",alignItems:"center",justifyContent:"center"}},
          "Pogledaj PRO →")
      )
    )
  );
}

const POJMOVNIK_HRV={
  // GRAMATIKA
  "glagol":"Promjenjiva vrsta riječi koja označava radnju, stanje ili zbivanje. Glagoli se konjugiraju po licima, brojevima, vremenima, načinima i stanjima.",
  "imenica":"Promjenjiva vrsta riječi koja imenuje bića, predmete, pojave i pojmove. Sklanja se po padežima (7) i brojevima.",
  "pridjev":"Promjenjiva vrsta riječi koja opisuje imenicu. Može biti opisni, posvojni ili gradivni. Ima određeni i neodređeni vid.",
  "zamjenica":"Vrsta riječi koja zamjenjuje imenicu, pridjev ili broj. Vrste: osobne, povratna, posvojne, pokazne, upitno-odnosne, neodređene, niječne.",
  "prilog":"Nepromjenjiva vrsta riječi koja pobliže određuje glagol, pridjev ili drugi prilog. Vrste: priloži za mjesto, vrijeme, način, uzrok, mjeru.",
  "prijedlog":"Nepromjenjiva vrsta riječi koja stoji ispred imenice ili zamjenice i zajedno s njom čini prijedložni skup.",
  "veznik":"Nepromjenjiva vrsta riječi koja spaja riječi, sintagme ili rečenice. Sastavni (i, ni, pa), suprotni (a, ali, no), zaključni (dakle), uzročni (jer, budući da).",
  "čestica":"Nepromjenjiva vrsta riječi koja modificira značenje druge riječi ili rečenice (npr. li, ne, ni, i, čak).",
  "uzvik":"Nepromjenjiva vrsta riječi kojom se izražava emocionalni doživljaj ili oponaša zvuk (Ah!, Joj!, Gle!, Šššš!).",
  "padež":"Oblik imenice, zamjenice ili pridjeva koji izražava odnos prema ostalim riječima u rečenici. 7 padeža: nominativ, genitiv, dativ, akuzativ, vokativ, lokativ, instrumental.",
  "nominativ":"1. padež, odgovara na pitanje TKO? ŠTO? — uvijek subjekt.",
  "genitiv":"2. padež, odgovara na pitanje KOGA? ČEGA? — izriče posjedovanje, odvajanje, dio cjeline.",
  "dativ":"3. padež, odgovara na pitanje KOMU? ČEMU? — izriče namjenu, svrhu.",
  "akuzativ":"4. padež, odgovara na pitanje KOGA? ŠTO? — uvijek objekt.",
  "vokativ":"5. padež — oslovljavanje, dozivanje.",
  "lokativ":"6. padež, uvijek s prijedlogom, odgovara na pitanje O KOME? O ČEMU? gdje se ne kreće.",
  "instrumental":"7. padež, odgovara na pitanje S KIM? S ČIME? — društvo ili sredstvo.",
  "subjekt":"Rečenični član koji označava vršitelja radnje. Stoji u nominativu.",
  "predikat":"Rečenični član koji kazuje što subjekt radi, što se s njim događa ili kakav je. Glagolski ili imenski.",
  "objekt":"Rečenični član koji označava predmet radnje. Stoji u akuzativu (izravni) ili genitivu/dativu (neizravni).",
  "atribut":"Rečenični član koji pobliže određuje imenicu. Slaže se s imenicom u rodu, broju i padežu.",
  "apozicija":"Imenski atribut koji stoji uz imenicu i izriče njezino svojstvo ili istovjetnost.",
  "predikatni proširak":"Rečenični član koji pobliže određuje subjekt kroz predikat.",
  "rečenica":"Osnovna komunikacijska i sintaktička jedinica s predikatom. Prema ustroju: prosta i složena.",
  "zavisnosložena rečenica":"Složena rečenica u kojoj su surečenice u nejednakom odnosu (glavna + zavisna). Vrste zavisnih: izričnа, atributna, priložna.",
  "nezavisnosložena rečenica":"Složena rečenica u kojoj su surečenice u jednakom odnosu. Vrste: sastavna, suprotna, rastavna, zaključna, isključna.",
  "kongruencija":"Slaganje rečeničnih dijelova u rodu, broju i padežu.",
  "rekcija":"Zahtjev glagola ili prijedloga da upravljana riječ stoji u određenom padežu.",
  // PRAVOPIS
  "fonološki pravopis":"Pravopisni princip prema kojemu se piše onako kako se izgovara (fonemi, ne morfemi). Hrvatski pravopis je pretežno morfonološki.",
  "morfonološki pravopis":"Pravopisni princip koji čuva morfeme u pismu, iako se izgovor mijenja. Hr. primjer: Zagreb-ski → zagrebski.",
  "veliko slovo":"Piše se na početku rečenice, vlastita imena, nazivi ustanova, titule. Zajednička imenica: malo slovo.",
  "sastavljeno pisanje":"Piše se zajedno: imeničke složenice, priložne oznake, glagolski prefiksi.",
  "rastavljeno pisanje":"Piše se odvojeno: prijedložni skupovi, sklopovi pridjeva i imenice.",
  "interpunkcija":"Skupni naziv za pravopisne znakove: točka, zarez, upitnik, uskličnik, navodnici, crtice, zagrada, točka-zarez, dvotočka.",
  "zarez":"Odvaja: nabrajanje, zavisne rečenice, apozicije, vokative, umetke. NE piše se između subjekta i predikata.",
  // STILISTIKA
  "stilska figura":"Poseban oblik izražavanja radi postizanja izražajnosti, ljepote ili naglaska. Dijele se na figure misli, dikcije i konstrukcije.",
  "metafora":"Prenošenje značenja na temelju sličnosti. 'More kose', 'sunce moje'. Prešutna usporedba.",
  "usporedba":"Izravno poređenje dvaju pojmova pomoću kao, poput, nalik. 'Hrabar kao lav.'",
  "personifikacija":"Pripisivanje ljudskih osobina neživom ili apstraktnom. 'Vjetar plače, zemlja sluša.'",
  "hiperbola":"Pretjerivanje u opisu radi naglaska. 'Sto puta sam ti rekao.' 'Čekam vas vječnost.'",
  "litota":"Umanjivanje kako bi se izreklo suprotno. 'Nije loše' = jako dobro.",
  "ironija":"Govorenje suprotno od misli, s namjerom sugeriranja prave misli. Skriveni sarkazam.",
  "sarkazam":"Oštra, gorka ironija, uvredljiva i kritička.",
  "alegorija":"Tekst u kojemu sve ima dvojno, preneseno značenje. 'Životinjska farma' kao alegorija totalitarizma.",
  "simbol":"Konkretni predmet ili lik koji predstavlja apstraktnu ideju. Križ = žrtva, golub = mir.",
  "asonanca":"Ponavljanje istih samoglasničkih zvukova. 'Tiha noć, bijela noć.'",
  "aliteracija":"Ponavljanje istih suglasničkih zvukova. 'Crni crkveni čempresi.'",
  "anafora":"Ponavljanje iste riječi ili sintagme na početku uzastopnih stihova/rečenica.",
  "epifora":"Ponavljanje iste riječi ili sintagme na kraju stihova/rečenica.",
  "antiteza":"Suprotstavljanje dvaju pojmova radi naglašavanja kontrasta. 'Biti ili ne biti.'",
  "oksimoron":"Spajanje dvaju pojmova suprotnog značenja. 'Glasna tišina', 'vrela hladnoća.'",
  "paradoks":"Prividno proturječna tvrdnja koja otkriva duboku istinu. 'Manje je više.'",
  "gradacija":"Stupnjevanje, nizanje pojmova po jakosti. Uzlazna (klimaks) ili silazna (antiklimaks).",
  "inverzija":"Obrnut redoslijed rečeničnih dijelova. 'Zelena je bila trava.'",
  "elipsa":"Izostavljanje jednog ili više rečeničnih dijelova koji se podrazumijevaju.",
  "retoričko pitanje":"Pitanje na koje se ne očekuje odgovor. Naglašava tvrdnju ili pobija nešto.",
  // LEKSIKOLOGIJA
  "sinonim":"Riječ istog ili sličnog značenja. More — ocean. Lijep — krasan — divan.",
  "antonim":"Riječ suprotnog značenja. Lijep — ružan. Dan — noć. Dobro — zlo.",
  "homonim":"Riječ jednakog oblika ali različitog značenja. Luk (povrće) — luk (oružje).",
  "polisemija":"Jedna riječ s više značenja koja su međusobno povezana. Glava (tijelo, čavla, obitelji).",
  "arhaizam":"Zastarjela, danas neupotrebljiva riječ. 'Viteštvo', 'koplje', 'dvorana'.",
  "neologizam":"Nova riječ, nastala nedavno. 'Selfie', 'hakerirati', 'smajlić'.",
  "posuđenica":"Riječ preuzeta iz stranog jezika. Anglizam, galicizam, latinizam...",
  "kovanica":"Novostvorena hrvatska riječ umjesto posuđenice. 'Računalo' umjesto 'kompjutor'.",
  "dijalektizam":"Riječ ili oblik karakteristični za određeni govorni dijalekt.",
  "žargon":"Socijalni govor određene grupe. Sleng mladih, sportski žargon, profesionalni žargon.",
  "eufemizam":"Ublažena zamjena za grubu ili neugodnu riječ. 'Preminuo' umjesto 'umro'.",
  "pejorativ":"Riječ s negativnom konotacijom, unižavajuća.",
  "konotacija":"Sporedna, emocionalna ili kulturalna vrijednost uz primarno značenje riječi.",
  "denotacija":"Osnovno, rječničko, doslovno značenje riječi.",
  // VERSIFIKACIJA
  "stih":"Osnovna metričko-ritmička jedinica pjesme, jedan redak.",
  "strofa":"Skupina stihova koji čine zasebnu cjelinu u pjesmi.",
  "rima":"Podudarnost glasova na kraju stihova. Muška (zadnji slog), ženska (zadnja dva sloga).",
  "obgrljene rime":"Raspored rime ABBA — drugi i treći stih rimuju se, kao i prvi i četvrti.",
  "ukrštene rime":"Raspored rime ABAB — naizmjenično rimovanje stihova.",
  "parne rime":"Raspored rime AABB — rimovanje susjednih stihova.",
  "sonet":"Lirska pjesma od 14 stihova: dva katrena (4+4) i dva terceta (3+3). Petrarkin i Shakespeareov.",
  "haiku":"Japanska lirska forma: 3 stiha — 5, 7, 5 slogova. Tema prirode i trenutka.",
  "oda":"Svečana lirska pjesma posvećena nekome ili nečemu uzvišenom.",
  "elegija":"Tužaljka, lirska pjesma tugovanja. Meditacija o prolaznosti, smrti ili gubitku.",
  "balada":"Lirsko-epska pjesma s dramskim elementima. Mračna tema, refreni, folklorno nasljeđe.",
  "ep":"Duga narativna pjesma o junaku i junaštvu. Homerski ep (Ilijada, Odiseja).",
  "slobodni stih":"Stih bez fiksnog metra i rime. Karakterističan za modernu i suvremenu poeziju.",
  // KNJIŽEVNA ANALIZA
  "tema":"Osnovna misao, ideja ili problem koji književno djelo obrađuje.",
  "motiv":"Najmanji gradivni element djela. Može biti vodeći (lajtmotiv) ili sporedni.",
  "fabula":"Kronološki redoslijed događaja u priči.",
  "siže":"Raspored događaja u djelu, kakav je autor napravio — s analepsom, prolepsom, odgađanjem.",
  "lik":"Osoba koja sudjeluje u radnji. Glavni (protagonist), sporedni, epizodni lik.",
  "protagonist":"Glavni lik u djelu, oko kojeg se gradi radnja.",
  "antagonist":"Lik ili sila koja se suprotstavlja protagonistu.",
  "narator":"Pripovjedač koji iznosi priču. Sveznajući, ja-pripovjedač, ograničeni pripovjedač.",
  "perspektiva":"Kut gledanja iz kojeg se pripovijedanje odvija. Prva, druga ili treća osoba.",
  "analepsa":"Retrospektiva, povratak u prošlost unutar naracije (flashback).",
  "prolepsa":"Anticipacija, skok u budućnost unutar naracije (flashforward).",
  "ekspozicija":"Uvodni dio fabule u kojemu se upoznajemo s likovima, mjestom i vremenom radnje.",
  "zaplet":"Dio fabule u kojemu se komplicira sukob i radnja dobiva zamah.",
  "kulminacija":"Vrhunac napetosti u radnji, točka najvećeg sukoba.",
  "rasplet":"Razrješenje sukoba, smirenje radnje.",
  "epilog":"Završni dio koji donosi informacije o životu likova nakon glavne radnje.",
  "prolog":"Uvodni dio prije glavne radnje.",
  "tragedija":"Dramski žanr koji prikazuje pad junaka zbog tragičke krivnje (hamarija). Katarza.",
  "komedija":"Dramski žanr s komičnim zapletom, sretnim završetkom i ismijanjem poroka.",
  "roman":"Opširna prozna vrsta s razvijenom fabulom, likovima i temom.",
  "novela":"Kratka prozna vrsta s jednom fabulom, malo likova i naglim obratom na kraju.",
  "kratka priča":"Kratka prozna vrsta, fokusirana na jedan događaj, lik ili trenutak.",
  "esej":"Prozna vrsta slobodne forme u kojoj autor razmatra neku temu subjektivno i asocijativno.",
  "drama":"Književna vrsta namijenjena scenskom izvođenju. Radnju iznose likovi kroz dijaloge.",
  "lirska pjesma":"Subjektivna književna vrsta koja izražava osjećaje, raspoloženja i doživljaje.",
  "epika":"Književna vrsta koja prikazuje vanjski svijet: ljude, događaje, radnje.",
  "realizam":"Književni pravac (19. st.) koji objektivno prikazuje stvarnost i tipične likove.",
  "naturalizam":"Ekstremni realizam — prikazuje naslijeđe i okolinu kao determinante sudbine.",
  "romantizam":"Književni pravac koji naglašava osjećaje, maštu, individualizam, ljubav prema prirodi.",
  "modernizam":"Književni pravac (poč. 20. st.) koji odbacuje konvencije i traga za novim formama.",
  "ekspresionizam":"Avangardni pravac koji izražava unutarnja stanja i osjećaje deformiranjem stvarnosti.",
  "impresionizam":"Prikazuje subjektivne dojmove i trenutne senzacije, atmosferu i raspoloženje.",
  "simbolizam":"Književni pravac koji koristi simbole za izražavanje unutarnjih stanja i ideja.",
  "egzistencijalizam":"Filozofski i književni pravac koji tematizira apsurd, slobodu i odgovornost čovjeka.",
  "modernizam (hr)":"Hrvatski modernizam (1895–1916): impresionizam, simbolizam, secesija. Matoš, Vidrić, Nazor.",
  "ekspresionizam (hr)":"Hrvatski ekspresionizam (1914–1930): snažan izraz unutarnjeg stanja. Krleža, Šimić, Ujević.",
  "avangarda (hr)":"Hrvatska avangarda (1910–1930): eksperiment, rušenje konvencija. Ujević, Cesarec.",
  "realizam (hr)":"Hrvatski realizam (1880–1895): socijalna tematika, tipični likovi. Šenoa, Kovačić, Novak.",
  "moderna (hr)":"Hrvatska moderna (1895–1914): estetizam, individualizam, simbolizam. Matoš, Vidrić.",
  "hrvatska moderna proza":"Suvremena hrvatska proza 2. pol. 20. st.: egzistencijalizam, inovacija forme. Šoljan, Marinković.",
  "avangarda (hr)":"Hrvatska avangarda (1910–1930): eksperiment, rušenje konvencija forme. Ujević, Cesarec, Krleža.",
  "ekspresionizam (hr)":"Hrvatski ekspresionizam (1914–1930): snažan izraz unutarnjeg stanja, deformacija zbilje. Krleža, Šimić.",
  "realizam (hr)":"Hrvatski realizam (1880–1895): socijalna tematika, tipični likovi. Šenoa, Kovačić, Novak.",
  "moderna (hr)":"Hrvatska moderna (1895–1914): estetizam, individualizam, simbolizam, impresionizam. Matoš, Vidrić.",
  "modernizam (hr)":"Hrvatski modernizam 20. st.: inovacija forme i sadržaja, egzistencijalna tematika. Marinković, Šoljan.",
  "humanizam/renesansa":"Humanizam (14.–16. st.): obnova antičkih vrijednosti, čovjek u središtu. Petrarca, Boccaccio, Držić.",
  "humanizam/renesansa":"Humanizam (14.–16. st.): obnova antike, čovjek u središtu. Petrarca, Boccaccio.",
  "preporod":"Hrvatski narodni preporod (1830–1848): jačanje nacionalne svijesti, standardizacija jezika. Gaj, Mažuranić.",
  "femme fatale":"Književni lik fatalne žene koja privlači i uništava muškog protagonista.",
  "antijunak":"Protagonist koji nema klasične herojske osobine — slab, pasivan ili moralno dvojben.",
  "determinizam":"Filozofski stav da su sudbina i ponašanje čovjeka određeni nasljeđem i okolinom.",
  "katarza":"Emocionalno pročišćenje gledatelja tragedije kroz suosjećanje i strah (Aristotel).",
  "hamartia":"Tragička pogreška ili mana karaktera koja dovodi junaka do propasti.",
  "in medias res":"Pripovijedanje koje počinje usred radnje, bez uvoda.",
  "monolog":"Govor jednog lika, najčešće o unutarnjim stanjima i mislima.",
  "dijalog":"Razgovor između dvaju ili više likova koji razvija radnju i karakterizaciju.",
  "stream of consciousness":"Tehnika prikazivanja unutarnjeg toka misli lika bez logičnog slijeda.",
  "intertekstualnost":"Odnos između dvaju ili više tekstova; citiranje, aluzija, parodija.",
  "parodija":"Imitacija nekog teksta s namjerom ismijavanja ili komičnog učinka.",
  "pastorala":"Idilični prikaz seoskog i pastirskog života.",
  "hamarija":"Tragička krivnja — pogreška ili mana karaktera zbog koje junak propada (Aristotel).",
  "katarza":"Emocionalno pročišćenje gledatelja tragedije kroz suosjećanje i strah (Aristotel).",
};

function GlossaryModal({onClose,initialTerm}){
  const[search,setSearch]=useState(initialTerm||"");
  const[selected,setSelected]=useState(()=>{
    if(initialTerm){
      const match=Object.keys(POJMOVNIK_HRV).find(k=>k.toLowerCase().includes(initialTerm.toLowerCase()));
      if(match) return[match,POJMOVNIK_HRV[match]];
    }
    return null;
  });
  const[filterKat,setFilterKat]=useState("sve");

  const KATEGORIJE={
    "sve":"Sve",
    "gram":"📐 Gramatika",
    "prav":"✏️ Pravopis",
    "stil":"🎨 Stilistika",
    "leks":"📚 Leksikologija",
    "vers":"🎵 Versifikacija",
    "knj":"📖 Književna analiza",
  };

  // Mapiranje pojmova na kategorije
  const KAT_MAP={
    gram:["glagol","imenica","pridjev","zamjenica","prilog","prijedlog","veznik","čestica","uzvik","padež","nominativ","genitiv","dativ","akuzativ","vokativ","lokativ","instrumental","subjekt","predikat","objekt","atribut","apozicija","predikatni proširak","rečenica","zavisnosložena rečenica","nezavisnosložena rečenica","kongruencija","rekcija"],
    prav:["fonološki pravopis","morfonološki pravopis","veliko slovo","sastavljeno pisanje","rastavljeno pisanje","interpunkcija","zarez"],
    stil:["stilska figura","metafora","usporedba","personifikacija","hiperbola","litota","ironija","sarkazam","alegorija","simbol","asonanca","aliteracija","anafora","epifora","antiteza","oksimoron","paradoks","gradacija","inverzija","elipsa","retoričko pitanje"],
    leks:["sinonim","antonim","homonim","polisemija","arhaizam","neologizam","posuđenica","kovanica","dijalektizam","žargon","eufemizam","pejorativ","konotacija","denotacija"],
    vers:["stih","strofa","rima","obgrljene rime","ukrštene rime","parne rime","sonet","haiku","oda","elegija","balada","ep","slobodni stih"],
    knj:["tema","motiv","fabula","siže","lik","protagonist","antagonist","narator","perspektiva","analepsa","prolepsa","ekspozicija","zaplet","kulminacija","rasplet","epilog","prolog","tragedija","komedija","roman","novela","kratka priča","esej","drama","lirska pjesma","epika","realizam","naturalizam","romantizam","modernizam","ekspresionizam","impresionizam","simbolizam","egzistencijalizam","stream of consciousness","intertekstualnost","parodija","pastorala","hamarija","katarza"],
  };

  function getKat(pojam){
    for(const[k,list] of Object.entries(KAT_MAP)){
      if(list.includes(pojam)) return k;
    }
    return "knj";
  }

  const entries=Object.entries(POJMOVNIK_HRV);
  const filtered=entries.filter(([k,v])=>{
    const matchSearch=search.length<2||k.toLowerCase().includes(search.toLowerCase())||v.toLowerCase().includes(search.toLowerCase());
    const matchKat=filterKat==="sve"||getKat(k)===filterKat;
    return matchSearch&&matchKat;
  });

  return e("div",{
    style:{position:"fixed",inset:0,background:"rgba(0,0,0,.6)",zIndex:500,
      display:"flex",alignItems:"center",justifyContent:"center",padding:16,
      backdropFilter:"blur(3px)"},
    onClick:onClose
  },
    e("div",{
      style:{background:"var(--bg)",border:"1px solid var(--bdr2)",borderRadius:"var(--rr)",
        width:"100%",maxWidth:600,maxHeight:"85vh",display:"flex",flexDirection:"column",
        boxShadow:"var(--shadow-lg)"},
      onClick:ev=>ev.stopPropagation()
    },
      /* Header */
      e("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"14px 18px",
        borderBottom:"1px solid var(--bdr)",flexShrink:0}},
        e("span",{style:{fontSize:20}},"📖"),
        e("span",{style:{fontFamily:"var(--fh)",fontSize:17,fontWeight:700,flex:1}},"Pojmovnik"),
        e("span",{style:{fontSize:12,color:"var(--muted)",marginRight:8}},filtered.length+" pojmova"),
        e("button",{onClick:onClose,style:{background:"none",border:"none",fontSize:18,
          cursor:"pointer",color:"var(--muted)",padding:"2px 8px",borderRadius:"var(--r)"}},"✕")
      ),
      /* Pretraga + filter */
      e("div",{style:{padding:"10px 14px",borderBottom:"1px solid var(--bdr)",flexShrink:0}},
        e("input",{type:"text",placeholder:"Pretraži pojmove i definicije...",
          value:search,autoFocus:true,
          onChange:ev=>{setSearch(ev.target.value);setSelected(null);},
          style:{width:"100%",background:"var(--s2)",border:"1px solid var(--bdr)",
            borderRadius:"var(--r)",padding:"8px 12px",fontSize:13,color:"var(--text)",
            fontFamily:"var(--fb)",boxSizing:"border-box",marginBottom:8}}),
        e("div",{style:{display:"flex",gap:4,flexWrap:"wrap"}},
          Object.entries(KATEGORIJE).map(([id,label])=>
            e("button",{key:id,onClick:()=>{setFilterKat(id);setSelected(null);},
              style:{padding:"3px 10px",borderRadius:99,fontSize:11,fontWeight:600,
                cursor:"pointer",fontFamily:"var(--fb)",
                border:"1px solid "+(filterKat===id?"var(--blue)":"var(--bdr)"),
                background:filterKat===id?"var(--blue-d)":"transparent",
                color:filterKat===id?"var(--blue)":"var(--muted)"}},label)
          )
        )
      ),
      /* Sadržaj */
      e("div",{style:{display:"flex",flex:1,overflow:"hidden",minHeight:0}},
        /* Lista */
        e("div",{style:{width:180,flexShrink:0,overflowY:"auto",borderRight:"1px solid var(--bdr)",
          padding:6,scrollbarWidth:"thin"}},
          filtered.length===0
            ? e("div",{style:{padding:16,fontSize:12,color:"var(--muted)",textAlign:"center"}},"Nema rezultata")
            : filtered.map(([k])=>
                e("button",{key:k,onClick:()=>setSelected([k,POJMOVNIK_HRV[k]]),
                  style:{display:"block",width:"100%",textAlign:"left",padding:"6px 10px",
                    borderRadius:"var(--r)",marginBottom:2,cursor:"pointer",
                    fontSize:12,fontWeight:500,fontFamily:"var(--fb)",
                    background:selected&&selected[0]===k?"var(--blue-d)":"none",
                    border:"1px solid "+(selected&&selected[0]===k?"rgba(75,123,255,.3)":"transparent"),
                    color:selected&&selected[0]===k?"var(--blue)":"var(--text)"}},k)
              )
        ),
        /* Definicija */
        e("div",{style:{flex:1,overflowY:"auto",padding:18,scrollbarWidth:"thin"}},
          selected
            ? e("div",null,
                e("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:12}},
                  e("span",{style:{fontSize:10,padding:"2px 8px",borderRadius:99,
                    background:"var(--blue-d)",color:"var(--blue)",
                    border:"1px solid rgba(75,123,255,.25)",fontWeight:700,
                    textTransform:"uppercase",letterSpacing:".06em"}},
                    KATEGORIJE[getKat(selected[0])]?.split(" ").slice(1).join(" ")||"Pojam"),
                  e("span",{style:{fontFamily:"var(--fh)",fontSize:18,color:"var(--text)"}},selected[0])
                ),
                e("div",{style:{fontSize:13,lineHeight:1.75,color:"var(--text)"}},selected[1])
              )
            : e("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",
                justifyContent:"center",height:"100%",color:"var(--muted)",
                fontSize:13,textAlign:"center",gap:10,padding:20}},
                e("span",{style:{fontSize:36}},"📖"),
                e("span",{style:{fontWeight:600}},"Odaberi pojam iz liste"),
                e("span",{style:{fontSize:11}},filtered.length+" pojmova · pretraži ili filtriraj po kategoriji")
              )
        )
      )
    )
  );
}

const POJMOVNIK={
  // Književni rodovi i vrste
  "ep":"Dugi narativni pjesnički oblik koji opisuje herojska djela; npr. Ilijada, Odiseja, Beowulf.",
  "epopeja":"Opsežan ep koji prikazuje junačka zbivanja od nacionalnog značaja; npr. Homerova Ilijada.",
  "lirska pjesma":"Kratka subjektivna pjesma koja izražava osjećaje i raspoloženja lirskog subjekta.",
  "sonet":"Lirska pjesma od 14 stihova, podijeljena na dva katrena i dva terceta; talijanskog podrijetla.",
  "oda":"Svečana lirska pjesma upućena osobi, pojavi ili apstraktnoj ideji; uzvišen ton.",
  "elegija":"Tužna lirska pjesma o gubitku, sjećanju ili prolaznosti; melankoličan ton.",
  "satira":"Književna vrsta koja ismijava i kritizira mane društva ili pojedinca; može biti u prozi ili stihu.",
  "balada":"Kratka pripovijedna pjesma s folklornim motivima, dramatskim zapletom i tragičnim završetkom.",
  "roman":"Dugi prozni narativni oblik s razvijenom radnjom, likovima i temom.",
  "novela":"Kratka prozna vrsta, usmjerena na jedan događaj ili lik; iznenađujući preokret.",
  "drama":"Književna vrsta namijenjena izvedbi na pozornici; dijalog kao osnovno izražajno sredstvo.",
  "tragedija":"Dramska vrsta s tragičnim junakom i kobnim završetkom; sudbina i hamartia.",
  "komedija":"Dramska vrsta s humornim zapletom i sretnim završetkom; kritika društvenih mana.",
  "komedija karaktera":"Vrsta komedije u kojoj su likovi karikiranih osobina; npr. Molièreovi komadi.",
  "ep u prozi":"Opsežno prozno djelo s epskim obilježjima — npr. Cervantesov Don Quijote.",

  // Stilska sredstva
  "metafora":"Preneseno značenje — izravna zamjena jednog pojma drugim na temelju sličnosti (bez 'kao' ili 'poput').",
  "simbol":"Konkretna slika ili predmet koji nosi apstraktno značenje; npr. križ = vjera, golub = mir.",
  "alegorija":"Produžena metafora u kojoj cijela priča ili lik predstavlja apstraktnu ideju ili moralnu pouku.",
  "personifikacija":"Pripisivanje ljudskih osobina neživim stvarima ili apstraktnim pojmovima.",
  "hiperbola":"Namjerno pretjerivanje radi naglašavanja: 'čekam te sto godina'.",
  "litota":"Namjerno umanjivanje, suprotnost hiperboli: 'nije loše' umjesto 'izvrsno'.",
  "ironija":"Izricanje suprotnog od onoga što se misli; raskorak između rečenog i stvarnog značenja.",
  "okssimoron":"Spajanje dvaju proturječnih pojmova: 'ledena vatra', 'živuća smrt'.",
  "antiteza":"Kontrasno suprotstavljanje dvaju pojmova ili misli radi naglašavanja.",
  "anafora":"Ponavljanje iste riječi ili skupa riječi na početku uzastopnih stihova ili rečenica.",
  "epitef":"Nadgrobni natpis; kratka lirska pjesma u čast pokojniku.",
  "sinegdoha":"Stilska figura zamjene dijela cjelinom ili obrnuto: 'krov nad glavom' = kuća.",
  "metonimija":"Zamjena naziva bliskim pojmom: 'čitam Shakespearea' = čitam njegovo djelo.",
  "eufemizam":"Ublažen izraz umjesto grubog: 'napustio nas je' umjesto 'umro je'.",
  "perifraza":"Zaobilazni opis umjesto izravnog imenovanja: 'sunce slobode' = domovina.",
  "apostrofa":"Obraćanje odsutnoj osobi, apstraktnom pojmu ili neživom biću.",
  "inverzija":"Neobičan redosljed riječi u rečenici radi naglašavanja ili ritma.",
  "paralelizam":"Ponavljanje iste sintaktičke strukture u uzastopnim rečenicama ili stihovima.",
  "gradacija":"Stupnjevanje — nizanje pojmova od slabijeg prema jačem (uzlazna) ili obrnuto.",
  "retorično pitanje":"Pitanje koje ne očekuje odgovor, već naglašava tvrdnju ili emociju.",

  // Versifikacija
  "stih":"Jedan red u pjesmi; osnovna jedinica versifikacije.",
  "strofa":"Skupina stihova koji čine cjelinu; kitice.",
  "rima":"Zvučno podudaranje krajeva stihova; može biti parna (aa bb), unakrsna (abab) ili obgrljena (abba).",
  "ritam":"Pravilno izmjenjivanje naglašenih i nenaglašenih slogova u stihu.",
  "metrum":"Stalni, ponavljajući ritamski obrazac u stihu.",
  "jamb":"Stopa od nenaglašenog i naglašenog sloga (∪ —); čest u engleskom i hrvatskoj poeziji.",
  "trohej":"Stopa od naglašenog i nenaglašenog sloga (— ∪).",
  "daktil":"Stopa od naglašenog i dva nenaglašena sloga (— ∪ ∪); čest u heksametru.",
  "heksametar":"Antički stih od šest daktilskih stopa; korišten u epu.",
  "aleksandrinac":"12-složni jampski stih s cezurom; tipičan za francusku klasicističku dramu.",
  "slobodni stih":"Stih bez pravilnog metra i rime; karakterističan za modernu poeziju.",
  "asonanca":"Ponavljanje istih samoglasničkih zvukova unutar stihova.",
  "aliteracija":"Ponavljanje istih suglasničkih zvukova na početku uzastopnih riječi.",
  "onomatopeja":"Oponašanje zvukova prirode ili predmeta riječima: 'šum', 'zujanje'.",

  // Književni pravci i razdoblja
  "antika":"Književnost starih Grka i Rimljana (8. st. pr. Kr. – 5. st.); temelji europske književnosti.",
  "humanizam":"Renesansni pokret usmjeren na čovjeka, razum i antičke uzore; 14.–16. st.",
  "renesansa":"Obnova antičkih ideala u književnosti i umjetnosti; 14.–16. st.; Petrarca, Boccaccio, Shakespeare.",
  "barok":"17. st.; pompa, kontrast, snažne emocije, opsežnost; suprotnost renesansnoj jednostavnosti.",
  "klasicizam":"17.–18. st.; racionalizam, pravila, uzori antike; Molière, Racine.",
  "prosvjetiteljstvo":"18. st.; vjera u razum i napredak; enciklopedisti, Voltaire, Rousseau.",
  "preporod":"Hrvatsko narodno preporođenje (30-e god. 19. st.); Gaj, Šenoa; štokavska standardizacija.",
  "romantizam":"Početak 19. st.; emocija, priroda, individualizam, nacionalizam; Byron, Hugo, Preradović.",
  "realizam":"Sredina 19. st.; vjerna slika stvarnosti, socijalna kritika; Balzac, Tolstoj, Šenoa.",
  "naturalizam":"Kraj 19. st.; determinizam, biološki i socijalni uvjeti; Zola, Flaubert.",
  "moderna":"Kraj 19. i poč. 20. st.; simbolizam, impresionizam, dekadencija; Matoš, Vidrić.",
  "ekspresionizam":"1910-e; snažne emocije, deformacija stvarnosti; Krleža, Kafka.",
  "avangarda":"Eksperimentalni pokreti 1910-ih–1930-ih: futurizam, dadaizam, nadrealizam, konstruktivizam.",
  "egzistencijalizam":"Filozofski i književni pravac 20. st.; sloboda, odgovornost, apsurd; Sartre, Camus.",
  "modernizam":"Širi pojam za eksperimentalnu književnost 20. st.; tok svijesti, fragmentacija.",
  "postmodernizam":"Od 1960-ih; ironija, intertekstualnost, relativizacija, igra s čitateljem.",

  // Naratologija
  "lirski subjekt":"Glas koji govori u lirskoj pjesmi; ne poistovjećuje se nužno s autorom.",
  "pripovjedač":"Instancija koja priča priču; može biti sveznajuća, ograničena ili unutarnja.",
  "sveznajući pripovjedač":"Zna sve o svim likovima i događajima; govori u 3. licu.",
  "unutarnji monolog":"Prikazivanje unutarnjeg toka misli lika; modernistička tehnika.",
  "tok svijesti":"Slobodan, nestruktuiran prikaz misli, osjećaja i asocijacija lika.",
  "fabula":"Kronološki redoslijed događaja u djelu.",
  "siže":"Redoslijed kojim su događaji prikazani u djelu; može se razlikovati od fabule.",
  "retrospekcija":"Vraćanje u prošlost unutar priče (flashback).",
  "in medias res":"Početak pripovijedanja usred zbivanja, bez ekspozicije.",
  "deus ex machina":"Neočekivano, nevjerojatno rješenje konflikta; izvorno iz antičke drame.",
  "katarza":"Pročišćenje emocija gledatelja kroz suosjećanje i strah; Aristotelova teorija.",
  "hamartia":"Tragična pogreška ili mana junaka koja dovodi do propasti.",
  "hubris":"Pretjerana oholost ili arogancija koja izaziva božansku odmazdu u tragediji.",
  "peripetija":"Iznenadni preokret u sudbini junaka, obično od sreće k nesreći.",
  "anagnoriza":"Trenutak prepoznavanja ili otkrića u drami; zaplet se razrješava.",
  "dramska ironija":"Publika zna više nego lik na sceni.",
  "sukob":"Temeljna pokretačka snaga radnje; može biti interni (lik vs. sebe) ili eksterni.",

  // Teorija književnosti
  "intertekstualnost":"Odnos jednog teksta prema drugima; citiranje, aluzije, parodija.",
  "parodija":"Imitacija nekog djela s humornim ili kritičkim ciljem.",
  "pastorala":"Idealiziran prikaz seoskog života i prirode.",
  "bildungsroman":"Roman odrastanja i formiranja karaktera; npr. Lovac u žitu.",
  "kronotop":"Bakhtin — spoj prostora i vremena koji definira žanr; npr. kronotop ceste.",
  "arhetip":"Praiskonski lik ili motiv koji se ponavlja u književnosti svih kultura (Jung, Frye).",
  "leitmotiv":"Ponavljajući motiv, tema ili element koji nosi simboličko značenje.",
  "ekfraza":"Literarni opis likovnog djela ili predmeta.",
  "mise en abyme":"Miniaturna kopija djeva unutar samog djeva; ogledalna struktura.",

  // Hrvatski pisci
  "marko marulić":"Otac hrvatske književnosti; Judita (1501) — prvi ep na hrvatskom; De institutione.",
  "marin držić":"Renesansni dramatičar; Dundo Maroje, Skup, Novela od Stanca; Dubrovnik.",
  "ivan gundulić":"Barokni pjesnik; Osman — ep o osmansko-poljskom sukobu; Dubrovačka Republika.",
  "ante kovačić":"Realizam; U registraturi — socijalna kritika; život u gradu vs. selu.",
  "august šenoa":"Otac hrvatskog realizma; Zlatarovo zlato, Prijan Lovro; popularizacija romana.",
  "vjenceslav novak":"Kasni realizam; Posljednji Stipančići — propadanje obitelji.",
  "antun gustav matoš":"Moderna; esejist, pjesnik; Notturno, Jesenje veče; impresionizam.",
  "tin ujević":"Avangarda/lirika; Svakidašnja jadikovka; slobodan stih; boemski život.",
  "antun branko šimić":"Ekspresionizam; Preobraženja; Opomena, Pjesnici; smrt i prolaznost.",
  "miroslav krleža":"Najznačajniji hrvatski pisac 20. st.; Gospoda Glembajevi, Povratak Filipa Latinovicza, Balade Petrice Kerempuha.",
  "antun šoljan":"Kratki izlet — generacijska razočaranost; postmodernizam.",
  "ivan slamnig":"Neoavangarda; igra jezikom; ironija.",
  "vesna parun":"Poslijeratna lirika; Zore i vihori; ljubavna i domoljubna lirika.",

  // Svjetski pisci (za ispit)
  "homer":"Antički grčki epičar; Ilijada i Odiseja — temelji europske književnosti.",
  "sofoklo":"Antički grčki tragičar; Antigona, Kralj Edip — sudbina i moralni zakon.",
  "dante alighieri":"Srednji vijek; Božanstvena komedija — ep o putovanju kroz pakao, čistilište, raj.",
  "giovanni boccaccio":"Renesansa; Dekameron — zbirka novela o ljubavi i obmani.",
  "william shakespeare":"Renesansa; Hamlet, Macbeth, Otello, Romeo i Julija — tragedije i komedije.",
  "j. w. goethe":"Romantizam; Patnje mladoga Werthera — epistolarni roman; Faust.",
  "honoré de balzac":"Realizam; Otac Goriot; Ljudska komedija — ciklus romana o pariškom društvu.",
  "lev tolstoj":"Realizam; Rat i mir, Ana Karenjina — psihološki realizam.",
  "fyodor dostojevski":"Realizam; Zločin i kazna, Braća Karamazovi — psihološka dubina.",
  "henrik ibsen":"Realizam/drama; Nora, Graditelj Solness — emancipacija, lažni moral.",
  "franz kafka":"Modernizam/ekspresionizam; Preobražaj, Proces — otuđenje, birokratizam.",
  "albert camus":"Egzistencijalizam; Stranac — apsurd, ravnodušnost.",
  "j. d. salinger":"Modernizam; Lovac u žitu — adolescentska pobuna, autentičnost.",
};
// Flashcard (aktivno prisjećanje) nad zadanim popisom pojmova [ [pojam, definicija], ... ].
// Samostalno upravlja stanjem; resetira se kad se promijeni veličina špila (filter/pretraga).
function PojmovnikKartice({deck}){
  const[rev,setRev]=useState(false); // false: pojam→definicija; true: definicija→pojam
  return e(PojmovnikKarticeDeck,{key:JSON.stringify([deck.length,rev]),deck,rev,onReverse:()=>setRev(r=>!r)});
}
function PojmovnikKarticeDeck({deck,rev,onReverse}){
  const[idx,setIdx]=useState(0);
  const[flip,setFlip]=useState(false);
  const[order,setOrder]=useState(null);
  const n=deck.length;
  if(!deck||n===0) return e("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--muted)",fontSize:13,padding:20}},"Nema pojmova za kartice u ovom filtru.");
  const seq=order||deck.map((_,i)=>i);
  const cur=deck[seq[idx%n]]||deck[0];
  const front=rev?cur[1]:cur[0];
  const back=rev?cur[0]:cur[1];
  function next(){setFlip(false);setIdx(i=>(i+1)%n);}
  function prev(){setFlip(false);setIdx(i=>(i-1+n)%n);}
  function shuffle(){const a=deck.map((_,i)=>i);for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));const t=a[i];a[i]=a[j];a[j]=t;}setOrder(a);setIdx(0);setFlip(false);}
  const btn={border:"1px solid var(--bdr)",background:"transparent",color:"var(--muted)",borderRadius:99,padding:"4px 10px",fontSize:11,fontWeight:600,cursor:"pointer",fontFamily:"var(--fb)"};
  return e("div",{style:{flex:1,display:"flex",flexDirection:"column",minHeight:0,padding:"14px 18px"}},
    e("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:12}},
      e("span",{style:{fontSize:12,color:"var(--muted)"}},(idx+1)+" / "+n),
      e("div",{style:{flex:1}}),
      e("button",{onClick:onReverse,style:btn},rev?"definicija → pojam":"pojam → definicija"),
      React.createElement("button",{onClick:shuffle,style:btn},"🔀 Promiješaj")
    ),
    e("button",{onClick:()=>setFlip(f=>!f),
      style:{flex:1,minHeight:170,width:"100%",boxSizing:"border-box",
        background:flip?"var(--blue-d)":"var(--s2)",border:"1px solid "+(flip?"var(--blue)":"var(--bdr2)"),
        borderRadius:"var(--rr)",padding:"24px",cursor:"pointer",display:"flex",flexDirection:"column",
        alignItems:"center",justifyContent:"center",gap:10,textAlign:"center",transition:"all .15s"}},
      e("span",{style:{fontSize:10,color:"var(--muted)",textTransform:"uppercase",letterSpacing:".07em"}},
        flip?(rev?"Pojam":"Definicija"):(rev?"Definicija":"Pojam")),
      e("span",{style:{fontFamily:flip?"var(--fb)":"var(--fh)",fontSize:flip?14:20,lineHeight:1.65,color:"var(--text)"}},flip?back:front),
      !flip&&e("span",{style:{fontSize:11,color:"var(--muted)",marginTop:4}},"klikni za odgovor")
    ),
    e("div",{style:{display:"flex",gap:8,marginTop:12}},
      e("button",{onClick:prev,style:{...btn,flex:"0 0 auto"}},"◀"),
      e("button",{onClick:next,style:{...btn,flex:1,background:"var(--blue)",color:"#fff",border:"none"}},"Sljedeća ▶")
    )
  );
}

function PojmovnikModal({onClose,initialTerm}){
  const[search,setSearch]=useState(initialTerm||"");
  const[selected,setSelected]=useState(()=>{
    if(initialTerm){
      const match=Object.entries(POJMOVNIK).find(([k])=>k.toLowerCase().includes(initialTerm.toLowerCase()));
      if(match) return match;
    }
    return null;
  });
  const[tab,setTab]=useState("sve"); // sve | knjizevnost | stilska | versif | pravci | pisci
  const[mode,setMode]=useState("browse"); // browse | kartice
  const panelRef=useModalTrap(onClose); // Esc + focus-trap + povrat fokusa

  const kategorije={
    "sve":"Svi pojmovi",
    "knjizevnost":"📚 Rodovi i vrste",
    "stilska":"✨ Stilska sredstva",
    "versif":"🎵 Versifikacija",
    "pravci":"🏛 Književni pravci",
    "pisci":"✍️ Pisci",
  };

  const katMap={
    "knjizevnost":["ep","epopeja","lirska pjesma","sonet","oda","elegija","satira","balada","roman","novela","drama","tragedija","komedija","komedija karaktera","ep u prozi","bildungsroman","pastorala"],
    "stilska":["metafora","simbol","alegorija","personifikacija","hiperbola","litota","ironija","okssimoron","antiteza","anafora","epitef","sinegdoha","metonimija","eufemizam","perifraza","apostrofa","inverzija","paralelizam","gradacija","retorično pitanje","lirski subjekt","pripovjedač","sveznajući pripovjedač","unutarnji monolog","tok svijesti","fabula","siže","retrospekcija","in medias res","deus ex machina","katarza","hamartia","hubris","peripetija","anagnoriza","dramska ironija","sukob","intertekstualnost","parodija","kronotop","arhetip","leitmotiv","ekfraza","mise en abyme"],
    "versif":["stih","strofa","rima","ritam","metrum","jamb","trohej","daktil","heksametar","aleksandrinac","slobodni stih","asonanca","aliteracija","onomatopeja"],
    "pravci":["antika","humanizam","renesansa","barok","klasicizam","prosvjetiteljstvo","preporod","romantizam","realizam","naturalizam","moderna","ekspresionizam","avangarda","egzistencijalizam","modernizam","postmodernizam"],
    "pisci":["marko marulić","marin držić","ivan gundulić","ante kovačić","august šenoa","vjenceslav novak","antun gustav matoš","tin ujević","antun branko šimić","miroslav krleža","antun šoljan","ivan slamnig","vesna parun","homer","sofoklo","dante alighieri","giovanni boccaccio","william shakespeare","j. w. goethe","honoré de balzac","lev tolstoj","fyodor dostojevski","henrik ibsen","franz kafka","albert camus","j. d. salinger"],
  };

  const allEntries=Object.entries(POJMOVNIK);
  const filteredByTab=tab==="sve"?allEntries:allEntries.filter(([k])=>katMap[tab]?.includes(k));
  const filtered=search.trim().length>=1
    ? filteredByTab.filter(([k,v])=>
        k.toLowerCase().includes(search.toLowerCase())||
        v.toLowerCase().includes(search.toLowerCase()))
    : filteredByTab;

  return e("div",{
    role:"dialog","aria-modal":"true","aria-label":"Pojmovnik",
    style:{position:"fixed",inset:0,background:"rgba(0,0,0,.65)",zIndex:500,
      display:"flex",alignItems:"center",justifyContent:"center",padding:16,backdropFilter:"blur(3px)"},
    onClick:onClose
  },
    e("div",{
      ref:panelRef,tabIndex:-1,
      style:{background:"var(--s1)",border:"1px solid var(--bdr2)",borderRadius:"var(--rr)",
        width:"100%",maxWidth:640,maxHeight:"88vh",display:"flex",flexDirection:"column",
        boxShadow:"0 20px 60px rgba(0,0,0,.4)",outline:"none"},
      onClick:ev=>ev.stopPropagation()
    },
      /* Header */
      e("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"14px 18px",
        borderBottom:"1px solid var(--bdr)",flexShrink:0}},
        e("span",{style:{fontSize:20}},"📖"),
        e("span",{style:{fontFamily:"var(--fh)",fontSize:17,flex:1}},"Pojmovnik — Hrvatski jezik"),
        e("button",{onClick:()=>setMode(m=>m==="browse"?"kartice":"browse"),
          style:{background:mode==="kartice"?"var(--blue-d)":"transparent",border:"1px solid var(--bdr)",
            color:mode==="kartice"?"var(--blue)":"var(--muted)",borderRadius:99,padding:"4px 10px",
            fontSize:11,fontWeight:600,cursor:"pointer",marginRight:6,fontFamily:"var(--fb)",whiteSpace:"nowrap"}},
          mode==="browse"?"🃏 Kartice":"📖 Pregled"),
        e("span",{style:{fontSize:12,color:"var(--muted)",marginRight:8}},
          allEntries.length+" pojmova"),
        e("button",{onClick:onClose,style:{background:"none",border:"none",fontSize:18,
          cursor:"pointer",color:"var(--muted)",padding:"2px 8px",borderRadius:"var(--r)"}},"✕")
      ),
      /* Pretraživanje */
      e("div",{style:{padding:"10px 16px",borderBottom:"1px solid var(--bdr)",flexShrink:0}},
        e("input",{type:"text",placeholder:"Pretraži pojam ili definiciju...",
          value:search,autoFocus:true,
          onChange:ev=>{setSearch(ev.target.value);setSelected(null);},
          style:{width:"100%",background:"var(--s2)",border:"1px solid var(--bdr)",
            borderRadius:"var(--r)",padding:"8px 12px",fontSize:13,
            color:"var(--text)",fontFamily:"var(--fb)",boxSizing:"border-box"}})
      ),
      /* Kategorije */
      e("div",{style:{display:"flex",gap:4,padding:"8px 14px",borderBottom:"1px solid var(--bdr)",
        flexShrink:0,overflowX:"auto",scrollbarWidth:"none"}},
        Object.entries(kategorije).map(([k,l])=>
          e("button",{key:k,onClick:()=>{setTab(k);setSelected(null);},
            style:{padding:"4px 10px",borderRadius:99,fontSize:11,fontWeight:600,
              cursor:"pointer",whiteSpace:"nowrap",fontFamily:"var(--fb)",flexShrink:0,
              border:"1px solid "+(tab===k?"var(--blue)":"var(--bdr)"),
              background:tab===k?"var(--blue-d)":"transparent",
              color:tab===k?"var(--blue)":"var(--muted)"}},l)
        )
      ),
      /* Kartice (aktivno prisjećanje) — nad trenutno filtriranim pojmovima */
      mode==="kartice"&&e(PojmovnikKartice,{deck:filtered}),
      /* Sadržaj — split view (pregled) */
      mode==="browse"&&e("div",{style:{display:"flex",flex:1,overflow:"hidden",minHeight:0}},
        /* Lista */
        e("div",{style:{width:190,flexShrink:0,overflowY:"auto",borderRight:"1px solid var(--bdr)",
          padding:"6px",scrollbarWidth:"thin",scrollbarColor:"var(--bdr2) transparent"}},
          filtered.length===0
            ? e("div",{style:{padding:"20px 8px",fontSize:12,color:"var(--muted)",textAlign:"center"}},
                "Nema rezultata za '"+search+"'")
            : filtered.map(([k])=>
                e("button",{key:k,onClick:()=>setSelected([k,POJMOVNIK[k]]),
                  style:{display:"block",width:"100%",textAlign:"left",
                    padding:"7px 10px",borderRadius:"var(--r)",marginBottom:2,
                    background:selected&&selected[0]===k?"var(--blue-d)":"transparent",
                    border:"1px solid "+(selected&&selected[0]===k?"var(--blue)":"transparent"),
                    cursor:"pointer",fontSize:12,fontWeight:selected&&selected[0]===k?700:500,
                    color:selected&&selected[0]===k?"var(--blue)":"var(--text)",
                    fontFamily:"var(--fb)"}},k)
              )
        ),
        /* Definicija */
        e("div",{style:{flex:1,overflowY:"auto",padding:"18px 20px",
          scrollbarWidth:"thin",scrollbarColor:"var(--bdr2) transparent"}},
          selected
            ? e("div",null,
                e("div",{style:{fontFamily:"var(--fh)",fontSize:20,marginBottom:12,
                  letterSpacing:"-.01em"}},selected[0]),
                e("div",{style:{fontSize:14,lineHeight:1.8,color:"var(--text)"}},selected[1]),
                /* Primjeri iz ispita */
                e("div",{style:{marginTop:20,padding:"12px 14px",
                  background:"rgba(45,84,196,.05)",border:"1px solid rgba(45,84,196,.15)",
                  borderRadius:"var(--r)",fontSize:12,color:"var(--muted)"}},
                  "💡 Ovaj pojam može se pojaviti u pitanjima iz književne teorije i analize teksta."
                )
              )
            : e("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",
                justifyContent:"center",height:"100%",gap:10,color:"var(--muted)",
                textAlign:"center",padding:"20px"}},
                e("span",{style:{fontSize:36}},"📖"),
                e("span",{style:{fontSize:14,fontWeight:600}},"Odaberi pojam"),
                e("span",{style:{fontSize:12}},filtered.length+" pojmova u odabranoj kategoriji"),
                e("span",{style:{fontSize:11,marginTop:4,lineHeight:1.6}},
                  "Pretraži po pojmu ili definiciji — rezultati se filtriraju odmah.")
              )
        )
      )
    )
  );
}

function ImporterModal({onClose,onImport}){
  const[tab,setTab]=useState("json"); // json | manual
  const[jsonText,setJsonText]=useState("");
  const[error,setError]=useState("");
  const[preview,setPreview]=useState(null);
  // Manual unos
  const[mQ,setMQ]=useState("");
  const[mOpts,setMOpts]=useState(["","","",""]);
  const[mSol,setMSol]=useState("A");
  const[mTopic,setMTopic]=useState("knj_analiza");
  const[mExp,setMExp]=useState("");
  const[manualList,setManualList]=useState([]);

  const PRIMJER=JSON.stringify([
    {q:"Koji stilski postupak koristi Matoš u stihu 'Nokturno mi srce krade'?",
     opts:["personifikacija","metafora","hiperbola","ironija"],
     sol:{cl:"B"},topic:"knj_analiza",exp:"Metafora — noć krade srce."},
    {q:"Što je sonet?",
     opts:["14-stihna pjesma","ep od 24 pjevanja","dramska vrsta","roman u stihovima"],
     sol:{cl:"A"},topic:"knjizevnost"}
  ],null,2);

  function parseJSON(){
    setError("");
    try{
      const arr=JSON.parse(jsonText);
      if(!Array.isArray(arr)) throw new Error("Mora biti JSON array [ ... ]");
      const valid=arr.filter(q=>q.q&&Array.isArray(q.opts)&&q.opts.length>=2&&q.sol?.cl);
      if(valid.length===0) throw new Error("Niti jedno pitanje nema ispravnu strukturu.");
      setPreview(valid);
    }catch(e){
      setError("Greška: "+e.message);
      setPreview(null);
    }
  }

  function addManual(){
    if(!mQ.trim()||mOpts.filter(o=>o.trim()).length<2) return;
    const q={
      id:"custom_"+Date.now()+"_"+Math.random().toString(36).slice(2,7),
      type:"mc",q:mQ.trim(),
      opts:mOpts.map(o=>o.trim()).filter(Boolean),
      sol:{cl:mSol},
      topic:mTopic,
      exp:mExp.trim()||undefined,
      _custom:true
    };
    setManualList(prev=>[...prev,q]);
    setMQ("");setMOpts(["","","",""]);setMExp("");
  }

  function doImport(qs){
    const mapped=qs.map((q,i)=>({
      id:q.id||"custom_"+Date.now()+"_"+i,
      type:"mc",
      q:q.q,opts:q.opts,
      sol:{cl:q.sol?.cl||q.sol?.ans||"A"},
      topic:q.topic||"knj_analiza",
      exp:q.exp||undefined,
      _custom:true
    }));
    onImport(mapped);
    onClose();
  }

  function TabBtn({id,label}){
    return e("button",{onClick:()=>setTab(id),style:{
      padding:"6px 14px",borderRadius:99,fontSize:12,fontWeight:600,cursor:"pointer",
      fontFamily:"var(--fb)",border:"1px solid "+(tab===id?"var(--blue)":"var(--bdr)"),
      background:tab===id?"var(--blue-d)":"transparent",color:tab===id?"var(--blue)":"var(--muted)"
    }},label);
  }

  return e("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,.65)",zIndex:500,
    display:"flex",alignItems:"center",justifyContent:"center",padding:16,backdropFilter:"blur(3px)"},
    onClick:onClose},
    e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr2)",borderRadius:"var(--rr)",
      width:"100%",maxWidth:600,maxHeight:"90vh",display:"flex",flexDirection:"column",
      boxShadow:"0 20px 60px rgba(0,0,0,.4)"},onClick:ev=>ev.stopPropagation()},
      /* Header */
      e("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"14px 18px",
        borderBottom:"1px solid var(--bdr)",flexShrink:0}},
        e("span",{style:{fontSize:20}},"📥"),
        e("span",{style:{fontFamily:"var(--fh)",fontSize:17,flex:1}},"Uvezi vlastita pitanja"),
        e("button",{onClick:onClose,style:{background:"none",border:"none",fontSize:18,
          cursor:"pointer",color:"var(--muted)",padding:"2px 8px"}},"✕")
      ),
      /* Objašnjenje */
      e("div",{style:{padding:"12px 16px",background:"rgba(234,179,8,.05)",
        borderBottom:"1px solid var(--bdr)",flexShrink:0}},
        e("p",{style:{fontSize:13,color:"var(--muted)",margin:0,lineHeight:1.65}},
          "Dodaj vlastita pitanja iz bilježnica, udžbenika ili ponavljanja. Pitanja su pohranjena ",
          e("strong",{style:{color:"var(--text)"}},"samo na ovom uređaju"),
          " i nitko drugi ih ne vidi. Možeš ih vježbati kroz ",
          e("strong",{style:{color:"var(--text)"}},"Vježbanje → Vlastita pitanja"),
          "."
        )
      ),
      /* Tabs */
      e("div",{style:{display:"flex",gap:8,padding:"12px 16px",borderBottom:"1px solid var(--bdr)",flexShrink:0}},
        e(TabBtn,{id:"json",label:"📋 JSON format"}),
        e(TabBtn,{id:"manual",label:"✏️ Ručni unos"})
      ),
      /* Sadržaj */
      e("div",{style:{flex:1,overflowY:"auto",padding:"16px",scrollbarWidth:"thin"}},
        tab==="json"&&e("div",null,
          e("p",{style:{fontSize:13,color:"var(--muted)",marginBottom:12,lineHeight:1.6}},
            "Uvezi pitanja u JSON formatu. Svako pitanje mora imati: ",
            e("code",{style:{background:"var(--s3)",padding:"1px 5px",borderRadius:3,fontSize:11}},
              "q, opts[], sol.cl"),"."),
          /* Primjer */
          e("details",{style:{marginBottom:12}},
            e("summary",{style:{fontSize:12,cursor:"pointer",color:"var(--blue)",fontWeight:600,padding:"4px 0"}},
              "Prikaži primjer formata"),
            e("pre",{style:{background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:"var(--r)",
              padding:"10px 12px",fontSize:11,overflowX:"auto",marginTop:8,lineHeight:1.6}},PRIMJER)
          ),
          e("textarea",{
            placeholder:"Zalijepi JSON ovdje...",
            value:jsonText,
            onChange:ev=>{setJsonText(ev.target.value);setError("");setPreview(null);},
            style:{width:"100%",minHeight:160,padding:"10px 12px",fontSize:12,lineHeight:1.6,
              background:"var(--s2)",color:"var(--text)",border:"1px solid var(--bdr)",
              borderRadius:"var(--r)",resize:"vertical",fontFamily:"monospace",boxSizing:"border-box"}
          }),
          error&&e("div",{style:{marginTop:8,padding:"8px 12px",background:"var(--red-d)",
            border:"1px solid rgba(240,106,106,.3)",borderRadius:"var(--r)",fontSize:12,color:"var(--red)"}},error),
          preview&&e("div",{style:{marginTop:8,padding:"10px 12px",background:"var(--green-d)",
            border:"1px solid rgba(52,212,122,.25)",borderRadius:"var(--r)",fontSize:13,
            display:"flex",alignItems:"center",gap:8}},
            e("span",{style:{color:"var(--green)",fontWeight:700}},"✓"),
            preview.length+" pitanja spremno za uvoz"
          ),
          e("div",{style:{display:"flex",gap:8,marginTop:12}},
            e("button",{className:"btn btn-g",style:{flex:1},onClick:parseJSON},"🔍 Provjeri"),
            preview&&e("button",{className:"btn btn-p",style:{flex:1},
              onClick:()=>doImport(preview)},"📥 Uvezi "+preview.length+" pitanja")
          )
        ),
        tab==="manual"&&e("div",null,
          e("p",{style:{fontSize:13,color:"var(--muted)",marginBottom:12,lineHeight:1.6}},
            "Unesi pitanje ručno — idealno za pitanja iz bilježaka, udžbenika ili za ponavljanje gradiva koje ti je teško."),
          /* Forma za unos */
          e("div",{style:{display:"flex",flexDirection:"column",gap:10,marginBottom:16,
            padding:"14px",background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:"var(--r)"}},
            e("div",null,
              e("label",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",
                letterSpacing:".07em",color:"var(--muted)",display:"block",marginBottom:4}},
                "Pitanje *"),
              e("textarea",{value:mQ,onChange:ev=>setMQ(ev.target.value),
                placeholder:"Napiši pitanje...",rows:2,
                style:{width:"100%",padding:"8px 10px",fontSize:13,background:"var(--s1)",
                  border:"1px solid var(--bdr)",borderRadius:"var(--r)",color:"var(--text)",
                  fontFamily:"var(--fb)",resize:"none",boxSizing:"border-box"}})
            ),
            e("div",null,
              e("label",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",
                letterSpacing:".07em",color:"var(--muted)",display:"block",marginBottom:4}},
                "Odgovori (A–D) *"),
              e("div",{style:{display:"flex",flexDirection:"column",gap:6}},
                ["A","B","C","D"].map((l,i)=>
                  e("div",{key:l,style:{display:"flex",alignItems:"center",gap:8}},
                    e("span",{style:{width:20,fontSize:12,fontWeight:700,
                      color:mSol===l?"var(--blue)":"var(--muted)",flexShrink:0}},l),
                    e("input",{type:"text",value:mOpts[i],
                      onChange:ev=>{const n=[...mOpts];n[i]=ev.target.value;setMOpts(n);},
                      placeholder:"Odgovor "+l,
                      style:{flex:1,padding:"6px 10px",fontSize:12,background:"var(--s1)",
                        border:"1px solid "+(mSol===l?"var(--blue)":"var(--bdr)"),
                        borderRadius:"var(--r)",color:"var(--text)",fontFamily:"var(--fb)"}}),
                    e("input",{type:"radio",name:"sol",checked:mSol===l,
                      onChange:()=>setMSol(l),style:{cursor:"pointer"}})
                  )
                )
              )
            ),
            e("div",{style:{display:"flex",gap:10}},
              e("div",{style:{flex:1}},
                e("label",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",
                  letterSpacing:".07em",color:"var(--muted)",display:"block",marginBottom:4}},
                  "Tema"),
                e("select",{value:mTopic,onChange:ev=>setMTopic(ev.target.value),
                  style:{width:"100%",padding:"7px 10px",fontSize:12,background:"var(--s1)",
                    border:"1px solid var(--bdr)",borderRadius:"var(--r)",color:"var(--text)",
                    fontFamily:"var(--fb)"}},
                  Object.entries(TOPIC_LABELS).map(([k,v])=>e("option",{key:k,value:k},v))
                )
              )
            ),
            e("div",null,
              e("label",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",
                letterSpacing:".07em",color:"var(--muted)",display:"block",marginBottom:4}},
                "Objašnjenje (opcionalno)"),
              e("input",{type:"text",value:mExp,onChange:ev=>setMExp(ev.target.value),
                placeholder:"Kratko objašnjenje zašto je taj odgovor točan...",
                style:{width:"100%",padding:"7px 10px",fontSize:12,background:"var(--s1)",
                  border:"1px solid var(--bdr)",borderRadius:"var(--r)",color:"var(--text)",
                  fontFamily:"var(--fb)",boxSizing:"border-box"}})
            ),
            React.createElement("button",{className:"btn btn-p",
              disabled:!mQ.trim()||mOpts.filter(o=>o.trim()).length<2,
              style:{opacity:(!mQ.trim()||mOpts.filter(o=>o.trim()).length<2)?.5:1},
              onClick:addManual},"+ Dodaj pitanje")
          ),
          /* Lista dodanih */
          manualList.length>0&&e("div",null,
            e("div",{style:{fontSize:12,fontWeight:700,color:"var(--muted)",
              marginBottom:8,textTransform:"uppercase",letterSpacing:".07em"}},
              manualList.length+" pitanja dodano"),
            e("div",{style:{display:"flex",flexDirection:"column",gap:4,marginBottom:12}},
              manualList.map((q,i)=>
                e("div",{key:i,style:{display:"flex",alignItems:"center",gap:8,
                  padding:"8px 10px",background:"var(--s2)",border:"1px solid var(--bdr)",
                  borderRadius:"var(--r)",fontSize:12}},
                  e("span",{style:{flex:1,overflow:"hidden",textOverflow:"ellipsis",
                    whiteSpace:"nowrap"}},q.q),
                  e("span",{style:{color:"var(--green)",fontWeight:700,flexShrink:0}},
                    "Sol: "+q.sol.cl),
                  e("button",{onClick:()=>setManualList(l=>l.filter((_,j)=>j!==i)),
                    style:{background:"none",border:"none",color:"var(--red)",cursor:"pointer",
                      fontSize:14,flexShrink:0,padding:"0 4px"}},"×")
                )
              )
            ),
            e("button",{className:"btn btn-p",style:{width:"100%"},
              onClick:()=>doImport(manualList)},
              "📥 Uvezi "+manualList.length+" pitanja")
          )
        )
      )
    )
  );
}

function DisclaimerModal({onClose}){
  return e("div",{className:"disclaimer-modal-overlay",onClick:onClose},
    e("div",{className:"disclaimer-modal",onClick:ev=>ev.stopPropagation()},
      e("div",{className:"dm-tag"},"ℹ️ O aplikaciji"),
      e("h3",null,"Discere — Hrvatski jezik"),
      e("p",null,
        "Simulator državne mature iz Hrvatskog jezika — jedinstven ispit od 2023., A i B razina do 2022. Trenutno sadrži ",
        e("strong",null,"64 ispita"),
        " s više od ",
        e("strong",null,"4 800 pitanja"),
        " — uz AI objašnjenja, AI ocjenjivanje eseja i sažetka, analitiku napretka i personalizirane preporuke."
      ),
      e("div",{className:"dm-section"},
        e("p",null,
          e("strong",null,"Što simulator nudi: "),
          "ispitni mod s timerom, vježbanje s trenutnim povratnim informacijama, vježbanje po temi i težini, školski esej (160 min) s AI ocjenjivanjem, sažetak teksta (80 min) s AI ocjenjivanjem, praćenje grešaka, sustav spremanja pitanja, XP i streak sustav."
        ),
        e("p",null,
          e("strong",null,"Ispitna pitanja "),
          "su vlasništvo ",
          e("a",{href:"https://www.ncvvo.hr",target:"_blank",rel:"noopener",style:{color:"var(--blue)"}},"NCVVO-a"),
          " i preuzeta su iz javno objavljenih ispita državne mature. Discere je autor svih objašnjenja, referentnih odgovora, AI alata i analitičkih prikaza."
        )
      ),
      e("div",{className:"dm-section"},
        e("div",{style:{background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"14px 16px",marginBottom:12}},
          e("p",{style:{fontWeight:700,fontSize:15,marginBottom:12}},"ℹ️ Format ispita — Hrvatski jezik 2025./2026."),
          e("p",{style:{fontSize:13,color:"var(--muted)",marginBottom:12,lineHeight:1.6}},
            "Ispit se polaže na jednoj (jedinstvenoj) razini i sastoji se od tri ispitne cjeline (knjižice)."),

          e("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:12}},
            e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"10px 14px"}},
              e("p",{style:{fontWeight:700,marginBottom:3}},"IK-1 — Test (80 min · 62 boda)"),
              e("p",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.6}},
                "58 zadataka višestrukog izbora: čitanje književnog teksta (20 bod.), čitanje neknjiževnog teksta (10 bod.), teorija i povijest književnosti (12 bod.), hrvatski jezik (20 bod.).")
            ),
            e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"10px 14px"}},
              e("p",{style:{fontWeight:700,marginBottom:3}},"IK-2 — Sažetak (80 min · 18 bodova)"),
              e("p",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.6}},
                "Pisanje sažetka neknjiževnog teksta. Sažetak mora imati 200–250 riječi.")
            ),
            e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"10px 14px"}},
              e("p",{style:{fontWeight:700,marginBottom:3}},"IK-3 — Školski esej (180 min · 30 bodova)"),
              e("p",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.6}},
                "Interpretacijski esej o jednom ili dva književna djela s popisa obvezatnih djela.")
            )
          ),

          e("div",{style:{background:"rgba(45,84,196,.08)",border:"1px solid rgba(45,84,196,.2)",borderRadius:"var(--r)",padding:"10px 12px",marginBottom:4}},
            e("p",{style:{fontWeight:700,color:"var(--blue)",marginBottom:6}},"📅 Ispitni datumi 2026."),
            e("p",{style:{fontSize:13,color:"var(--muted)",marginBottom:4}},
              e("strong",null,"Ljetni rok: "),
              "15. lipnja (IK-1 + IK-2) · 16. lipnja (IK-3 esej)"
            ),
            e("p",{style:{fontSize:13,color:"var(--muted)",marginBottom:0}},
              e("strong",null,"Jesenski rok: "),
              "20. kolovoza (IK-1 + IK-2) · 21. kolovoza (IK-3 esej)"
            )
          ),
          e("p",{style:{fontSize:11,color:"var(--muted)",marginTop:8}},
            "Izvor: NCVVO, Ispitni katalog za državnu maturu 2025./2026.")
        ),
        e("p",{style:{marginBottom:0,color:"var(--muted)",fontSize:13}},
          "Kontakt: ",
          e("a",{href:"mailto:info@discere.app",style:{color:"var(--blue)"}},"info@discere.app"),
          " · © "+new Date().getFullYear()+" Discere · Ispitna pitanja: © NCVVO"
        )
      ),
      e("div",{style:{marginTop:20,textAlign:"right"}},
        e("button",{className:"btn btn-gold",onClick:onClose},"Razumijem")
      )
    )
  );
}

export { ProPaywallModal, GlossaryModal, PojmovnikModal, ImporterModal, DisclaimerModal };
