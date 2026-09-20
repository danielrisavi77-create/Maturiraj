'use client';
import { useState } from 'react';
import { useLocalStorageJson } from "@/lib/hooks/useLocalStorageJson";

const LS_FAV = 'mt.hrv.h11.cit_favs';

const QUOTES = [
  /* ── MARULIĆ (4) ── */
  { cat:'marulić', napamet:true,
    text:'Historiju tuj svedoh na versih, po običaju naših začinjavac i jošće po zakonu onih starih poet.',
    meta:'— Marko Marulić, <em>Judita</em> (posveta), 1501.',
    use:'<strong>Ključna rečenica Marulićeve poetike</strong> — navodi dvije tradicije: začinjavce (hrv. medievalni stih) i antičke pjesnike (Vergilije, Ovidije). Za argument o Marulićevoj dvojnoj tradiciji. ★ MORA napamet.' },

  { cat:'marulić', napamet:false,
    text:'Marulić piše dvama jezicima za dvije publike — latinskim za europske humaniste, hrvatskim za sunarodnjake. Oba pisca su jednako Marulić: jedan govori Europi, drugi govori domovini.',
    meta:'— interpretacijska tvrdnja · bilingvalnost Marulića',
    use:'Za argument o <strong>europskom dosegu hrv. renesanse</strong>. Marulić kao most između Hrvatske i Europe — jedini hrv. pisac 16. st. poznat u Europi za svog života.' },

  { cat:'marulić', napamet:true,
    text:'Marulić je paradoks hrv. renesanse: poznatiji je u Europi po latinskim djelima nego po Juditi, a u hrv. književnopovijesnoj tradiciji — poznat isključivo po Juditi. Isti čovjek, dva književna identiteta, dvije publike, dva jezika.',
    meta:'— sintetska tvrdnja · za usporedni argument o europskom dosegu',
    use:'Za <strong>napredni argument o Maruliću</strong>. Bilingvalnost kao paradoks — europski humanist i hrv. patriot u jednoj osobi.' },

  { cat:'marulić', napamet:false,
    text:'Judita nije pobožna priča — to je politički traktat u biblijskom ogrtaču: Bog je na strani Hrvata, i to je jedini argument koji oslabljenu naciju može mobilizirati.',
    meta:'— interpretacijska tvrdnja · Marko Marulić, <em>Judita</em>',
    use:'Za <strong>napredni argument o Marulićevoj političkoj teologiji</strong>. Biblijska priča kao politički manifest. Za A ocjenu na ispitu.' },

  /* ── JUDITA (5) ── */
  { cat:'judita', napamet:true,
    text:'Judita nije samo biblijska heroina — ona je alegorija hrvatskog naroda koji uz Božju pomoć može pobijediti i najvećeg neprijatelja.',
    meta:'— interpretacijska parafraza · Marko Marulić, <em>Judita</em> (1501./1521.)',
    use:'<strong>Temeljna interpretacijska tvrdnja o Juditi.</strong> Judita = Hrvatska, Oloferno = Turci. Alegorija kao poetičko i domoljubno oruđe. Za uvod svakog eseja o Juditi.' },

  { cat:'judita', napamet:false,
    text:'2126 dvostruko rimovanih dvanaesteraca — Marulić u Juditi spaja začinjavačku rimu, antičku epsku formu i biblijsku tematiku u jedinstveni hrv. humanistički sintez.',
    meta:'— sintetska tvrdnja · forma Judite kao dokaz humanizma',
    use:'Za argument o <strong>Marulićevom stilu i formi</strong>. Judita nije samo sadržaj — forma sama dokazuje humanizam. Savršena za uvod eseja o Juditi.' },

  { cat:'judita', napamet:false,
    text:'Holofernova slabost — žudnja — postaje oruđem Božje pravednosti; Judita koristi ljepotu ne za pohotnost, nego za spasenje naroda.',
    meta:'— interpretacija lika · Marko Marulić, <em>Judita</em>',
    use:'Za argument o <strong>liku Holofernu i alegoriji moći</strong>. Žudnja kao zlodjelo koje se pretvara u instrument dobra — Marulićeva teološka logika.' },

  { cat:'judita', napamet:true,
    text:'Libar Marka Marula Splićanina u kom se uzdarži istorija svete udovice Judit u versih harvacki složena, kako ona ubi vojvodu Oloferna posridu vojske njegove i oslobodi puk israelski od velike pogibili.',
    meta:'— originalni naslov iz posvete · 1501.',
    use:'<strong>Originalni naslov Judite</strong> — sam naslov sadrži: autora, žanr (versi = stihovi), jezik (harvacki), radnju i alegorijsku poruku. ★ Napamet — najčešće tražen na ispitu.' },

  { cat:'judita', napamet:true,
    text:'Judita pobjeđuje Holoferna ne mačem nego pameću i vjerom — to je Marulićeva poruka: slabiji može pobijediti jačeg uz Božju pomoć. I upravo ta poruka čini Juditu prvim hrv. književnim manifestom nade.',
    meta:'— sintetska interpretacija · Marko Marulić, <em>Judita</em> (1501./1521.)',
    use:'Za argument o <strong>teološko-humanističkoj dimenziji Judite</strong>. Judita kao dokaz da Hrvatska ima budućnost — ako ima vjere.' },

  /* ── NOVELA (6) ── */
  { cat:'novela', napamet:true,
    text:'Bez poklada nema Novele od Stanca — karnevalske slobode su dramski uvjet koji prevaru čini mogućom, legitimnom i komičnom.',
    meta:'— sintetska tvrdnja · Marin Držić, <em>Novela od Stanca</em> (1550.)',
    use:'<strong>Teza 1 — pokladni kontekst.</strong> Za uvod svakog eseja o Noveli od Stanca. ★ Napamet.' },

  { cat:'novela', napamet:true,
    text:'Stanac gubi jer je star i naivan — mladost u Noveli od Stanca pobjeđuje ne snagom, nego lukavošću i poznavanjem gradskog koda.',
    meta:'— interpretacija lika · Marin Držić, <em>Novela od Stanca</em> (1550.)',
    use:'<strong>Teza 2 — mlado vs. staro.</strong> Stanac kao tip naivnog seljaka; mladost kao vrednota renesanse. ★ Napamet.' },

  { cat:'novela', napamet:false,
    text:'Farsa ne pita za moral — pita za smijeh. Držić ne sudi tko je u pravu; prikazuje što se događa kad naivnost sretne lukavost u pokladnoj noći Dubrovnika.',
    meta:'— sintetska tvrdnja · Marin Držić, <em>Novela od Stanca</em>',
    use:'Za argument o <strong>farsi kao žanru</strong>. Farsa = bez moralne osude, bez psihologizacije, bez socijalnog suda. Samo mehanizam komike.' },

  { cat:'novela', napamet:false,
    text:'Dubrovački mladići — vlastela. Stanac — seljak iz Trebinja. Klasna nadmoć se iskazuje intelektualnom prijevarom. Dubrovnik 16. st. nagrađuje pamet i poznanstvo.',
    meta:'— interpretacija društvenih odnosa · Marin Držić, <em>Novela od Stanca</em>',
    use:'<strong>Teza 3 — komentar dubrovačkog društva.</strong> Za argument o klasnoj dimenziji Novele. Farsa kao ogledalo društvenih odnosa.' },

  { cat:'novela', napamet:true,
    text:'Stanec ne gubi jer je loš čovjek — gubi jer je naivan u gradu koji ne prašta naivnost. I upravo ta rečenica — bez moralne osude, bez sućuti — pokazuje Držićevu dramatičarsku zrelost: prikazati zakone društva bez komentara.',
    meta:'— interpretacijska tvrdnja · Marin Držić, <em>Novela od Stanca</em>',
    use:'Za <strong>napredni esejski argument</strong>. Naivnost kao krivica vs. Dubrovnikovi zakoni društva. ★ Napamet.' },

  { cat:'novela', napamet:true,
    text:'Dramska ironija Novele od Stanca nije slučajna — publika zna da nema vode od mladosti; Stanec ne zna. Taj jaz između publicinog i Stančeva znanja jest mehanizam komike, ali i mehanizam empatije: smijemo se, ali i žalimo.',
    meta:'— interpretacijska tvrdnja · Marin Držić, <em>Novela od Stanca</em>',
    use:'Za argument o <strong>dramskoj ironiji kao etičkom instrumentu farse</strong>. Ide dalje od „Novela je komična" — pokazuje suosjećanje unutar smijeha.' },

  /* ── DRŽIĆ (3) ── */
  { cat:'držić', napamet:false,
    text:'Dundo Maroje — najstarija je poznata hrvatska prozna drama, kronika dubrovačke pohlepe i obiteljskog rasapa smještena u Rim.',
    meta:'— sintetska karakterizacija · Marin Držić, <em>Dundo Maroje</em> (1551.)',
    use:'Za esej o <strong>Držićevom opusu</strong> šire od Novele. Dundo Maroje = pohlepa, Rim = univerzalna scena, obiteljski rasap = moralna kritika.' },

  { cat:'držić', napamet:false,
    text:'Skup pohlepi posvećuje sve — blago, zdravlje, kćerinu sreću. Držić nam pokazuje kako novac postaje bog kada nestanu svi ostali bogovi.',
    meta:'— interpretacijska tvrdnja · Marin Držić, <em>Skup</em> (1556.)',
    use:'Za argument o <strong>kritici dubrovačke merkantilne kulture</strong>. Skup = Plautova Aulularija u dubrovačkom kontekstu. Pohlepa kao tema Držićevog opusa.' },

  { cat:'držić', napamet:true,
    text:'Marin Držić je pisac koji je znao previše — previše o Dubrovniku, o društvu, o moći. I upravo zbog toga je napisao Kosmografsku poslanicu: tko vidi previše jasno, ne može šutjeti.',
    meta:'— interpretacijska tvrdnja · Marin Držić, <em>Kosmografska poslanica</em> (1566.)',
    use:'Za argument o <strong>Držiću kao politički angažiranom intelektualcu</strong>. Kosmografska poslanica = revolucionarni zahtjev upućen Medicijima. ★ Napamet.' },

  /* ── PETRARKISTI (5) ── */
  { cat:'petrark', napamet:true,
    text:'Blažen čas i hip ki te rodi i mati, blažena kolipka ka te povi u sviti...',
    meta:'— Šiško Menčetić · <em>Blažen čas i hip</em>',
    use:'Tipičan <strong>petrarkistički početak</strong> — anafora (blažen… blažena…), veličanje gospoje. ★ Napamet — najpoznatiji hrv. petrarkistički stih. Menčetić = I. generacija petrarkizma.' },

  { cat:'petrark', napamet:false,
    text:'Jur nijedna na svit vila, ljuvenim me ognjem gori, ka bi meni povoljna bila, da mi srce sav dan gori.',
    meta:'— Hanibal Lucić · <em>Jur nijedna na svit vila</em>',
    use:'<strong>II. generacija petrarkizma</strong> — osmerce, neoplatonizacija. Lucić: gospoja kao nedostižni ideal, ne konkretna žena. Za usporedbu I. i II. generacije.' },

  { cat:'petrark', napamet:false,
    text:'Dok Menčetić opisuje sve stadije ljubavne strasti — od prvog pogleda do razočaranja — Džore Držić idealizira ljubav kao apstraktni fenomen bez senzualnosti.',
    meta:'— sintetska tvrdnja · razlika između Menčetića i Džore Držića',
    use:'Za argument o <strong>razlici unutar I. generacije petrarkizma</strong>. Menčetić = senzualan, zemaljski; Džore Držić = idealiziran, apstraktan.' },

  { cat:'petrark', napamet:false,
    text:'Lucić ne traži gospoju od krvi i mesa — traži savršenu dušu kakvu zemlja ne može ponuditi. To je neoplatonizam u praksi: ljubav kao put prema Bogu, ne prema ženi.',
    meta:'— interpretacijska tvrdnja · Hanibal Lucić, <em>Jur nijedna na svit vila</em>',
    use:'<strong>Razlika II. generacije petrarkizma od I.</strong> Neoplatonizacija gospoje u Lucića — ljubav više nije strast, nego duhovna uzlaznost.' },

  { cat:'petrark', napamet:false,
    text:'Gospoja hrv. petrarkizma je paradoks: žuđena i nedostupna, opisivana i neznana, veličana i ravnodušna. Ona nije osoba — ona je funkcija lirske subjectivnosti. I upravo ta apstrakcija čini je neumoljivim simbolom.',
    meta:'— interpretacijska tvrdnja · hrv. petrarkizam općenito',
    use:'Za argument o <strong>ulozi gospoje u hrv. lirici</strong>. Tipično ispitno pitanje — gospoja kao književna, ne biografska realnost.' },

  /* ── ZORANIĆ (5) ── */
  { cat:'zoranić', napamet:true,
    text:'Rasuta bašćina — rascjepkana domovina kojoj prijete Turci, koja plače za svojom slobodom i cjelovitošću.',
    meta:'— Petar Zoranić · <em>Planine</em> (~1543./1569.)',
    use:'<strong>Temeljni patriotski motiv hrv. renesanse.</strong> Rasuta bašćina = razdrobljena Hrvatska pod Turcima. ★ Napamet — Teza 5.' },

  { cat:'zoranić', napamet:true,
    text:'Hrvatska vila stoji sramežljiva i tužna, gledajući jabuke svojih sestara — Latinke, Grkinju, Kaldejku — koje su bujnije i ljepše.',
    meta:'— parafrazirano iz Perivoja od Slave · Petar Zoranić, <em>Planine</em>',
    use:'<strong>Perivoj od Slave — alegorija stanja hrv. književnosti.</strong> Jabuke = književna produkcija. Hrvatska = zaostaje. ★ Napamet.' },

  { cat:'zoranić', napamet:false,
    text:'Zoranić je u Perivoju od Slave napisao prvi eksplicitni književni manifest na hrvatskom — 300 godina prije Preporoda poziva na gradnju vlastite nacionalne književnosti.',
    meta:'— sintetska interpretacijska tvrdnja · Petar Zoranić, <em>Planine</em>',
    use:'Za argument o <strong>značaju Planina</strong> za hrv. književnu povijest. Zoranić anticipira Ilirski preporod za 300 godina.' },

  { cat:'zoranić', napamet:false,
    text:'U Planinama ljubav i domoljublje nisu odvojene teme — Zoranova tuga za Jagom i tuga za rasutom bašćinom su ista tuga: nešto vrijedno se izgubilo, i ne znaš kako vratiti.',
    meta:'— interpretacijska tvrdnja · Petar Zoranić, <em>Planine</em>',
    use:'Za argument o <strong>spajanju ljubavne i patriotske tematike</strong> u Planinama. Unikatnost Zoranića — nije ni petrarkist ni epičar, nego sinteza.' },

  { cat:'zoranić', napamet:true,
    text:'Perivoj od Slave nije tužna slika — to je hrabra rečenica. Zoranić kaže što nitko drugi nije rekao: naša književnost zaostaje i to se mora promijeniti. Da je Perivoj od Slave bio pisan na latinskom, nitko bi ga danas znao.',
    meta:'— interpretacijska tvrdnja · Petar Zoranić, <em>Planine</em>',
    use:'Za argument o <strong>Zoranićevoj ulozi u hrv. književnoj svijesti</strong>. Paradoks: piše na hrvatskom o zaostajanju hrv. književnosti — i to je samo po sebi dokaz napretka. ★ Napamet.' },

  /* ── HEKTOROVIĆ (5) ── */
  { cat:'hektorović', napamet:true,
    text:'Hektorović ne alegorijizira — bilježi. U Ribanju je more stvarno, ribari stvarni, bugarštice stvarne. To je renesansna novost: stvarnost kao dovoljan književni predmet.',
    meta:'— sintetska karakterizacija · Petar Hektorović, <em>Ribanje</em> (1556.)',
    use:'<strong>Ključna razlika Hektorovića od Marulića i Zoranića.</strong> Realizam nasuprot alegoriji. ★ Napamet — Teza 6.' },

  { cat:'hektorović', napamet:false,
    text:'Bilježenjem bugarštica i narodnih pjesama ribarâ, Hektorović je sačuvao segment hrv. usmene tradicije koji bi inače bio izgubljen — književnost kao arhiv pamćenja.',
    meta:'— sintetska tvrdnja · Petar Hektorović, <em>Ribanje</em> (1556.)',
    use:'Za argument o <strong>kulturnoj vrijednosti Ribanja</strong>. Hektorović = arhivar usmene tradicije. Teza 6 — realizam kao kulturna služba.' },

  { cat:'hektorović', napamet:false,
    text:'Hektorović u Ribanju pokazuje što humanizam znači u praksi: nije samo imitacija antičkih uzora — to je i zapisivanje živoga, i razgovor s ribarima kao jednakima, i ljubav prema svakodnevici.',
    meta:'— sintetska tvrdnja · Petar Hektorović, <em>Ribanje</em>',
    use:'Za argument o <strong>Hektorovićevom humanizmu kao životnom programu</strong>. Usporedni argument: Marulić (učeni humanizam) vs. Hektorović (praktični humanizam).' },

  { cat:'hektorović', napamet:false,
    text:'Hektorovićevo Ribanje je jedini hrv. renesansni tekst koji se ne pita što zemlja znači za naciju — koji jednostavno prikazuje kako zemlja izgleda, miriše i zvuči. Ta neumornost prema stvarnom je Hektorovićeva veličina.',
    meta:'— sintetska tvrdnja · Petar Hektorović, <em>Ribanje</em>',
    use:'Za <strong>napredni argument</strong> o Hektorovićevom dokumentarnom realizmu. Razlika od svakog drugog pisca — bez alegorije, bez patriotizma, samo opis.' },

  { cat:'hektorović', napamet:false,
    text:'Tvrdalj nije samo kuća — to je filozofija pretvorena u kamen: da ljepota, mir i razgovor imaju pravo na trajanje. Dok Dubrovnik trguje, Hektorović gradi. I to je humanistički izbor.',
    meta:'— interpretacijska tvrdnja · Petar Hektorović, Tvrdalj i Ribanje',
    use:'Za argument o <strong>humanizmu kao životnom, ne samo literarnom programu</strong>. Tvrdalj kao materijalni dokaz Hektorovićeve humanističke filozofije.' },

  /* ── KONTEKST (12) ── */
  { cat:'kontekst', napamet:true,
    text:"Renesansa na hrvatskim područjima je doba 'prvoga' — prvog epa (Judita), prvog romana (Planine), prve svjetovne drame (Robinja), prvog hrv. pisca poznatog u Europi (Marulić).",
    meta:'— sintetska tvrdnja za uvod eseja · hrv. renesansa kao epoha „prvoga"',
    use:'<strong>Idealna za uvod eseja o hrv. renesansi.</strong> Pokazuje kumulativnost i jedinstvenost hrv. renesanse. ★ Napamet.' },

  { cat:'kontekst', napamet:false,
    text:'Turska opasnost nije dekor hrv. renesanse — ona je njena jezgra. Svaki pisac od Marulića do Zoranića piše s tim pritiskom, pa tako i Robinja Lucića koja govori o ropstvu i trgovini ljudima.',
    meta:'— sintetska tvrdnja · lokalna specifičnost hrv. renesanse',
    use:'Za esej o <strong>kontekstu hrv. renesanse</strong>. Turska opasnost = specifičnost koja razlikuje hrv. od talijanske renesanse.' },

  { cat:'kontekst', napamet:true,
    text:'Dok talijanski petrarkisti pišu sonete, hrv. petrarkisti pišu dvostruko rimovane dvanaesterce — manje formalne strogosti, više melodioznosti i lokalne specifičnosti.',
    meta:'— sintetska tvrdnja · razlika hrv. i tal. renesanse',
    use:'<strong>Ključna razlika hrv. i tal. renesanse.</strong> ★ Napamet — najčešća matuirana tema usporedbe.' },

  { cat:'kontekst', napamet:false,
    text:'Humanizam nije odbacivanje Boga — on je premještanje fokusa s Boga na čovjeka kao Božje stvorenje, sposobno razumom i voljom ostvariti svoju svrhu.',
    meta:'— sintetska definicija humanizma · za teorijsko pitanje',
    use:'Za teorijsko pitanje o <strong>humanizmu</strong>. Ispravlja pogrešno tumačenje humanizma kao ateizma — najčešća maturana greška.' },

  { cat:'kontekst', napamet:true,
    text:'Dvostruko rimovani dvanaesterac nije samo stih — on je identitet hrv. renesanse, veza s tradicijom začinjavaca i signal da hrv. književnost može nositi visoke forme.',
    meta:'— sintetska tvrdnja o stihu · za teorijsko pitanje o versifikaciji',
    use:'Za teorijsko pitanje o <strong>versifikaciji</strong>. Dvanaesterac = identitet hrv. renesanse. ★ Napamet.' },

  { cat:'kontekst', napamet:false,
    text:"Marin Držić nije samo komediograf — on je i politički mislilac koji tajno piše Medicijima tražeći prevrat, i moralni kritičar koji u prolozima Dunda Maroja razlikuje 'nazbiljske' od 'nahvao' ljudi.",
    meta:'— sintetska karakterizacija · Marin Držić — kompleksnost pisca',
    use:'Za esej koji zahtijeva <strong>višedimenzionalni portret Držića</strong>. Kosmografska poslanica + Dundo Maroje = kompleksnost pisca.' },

  { cat:'kontekst', napamet:true,
    text:"Hrvatska je krajem 16. st. bila 'reliquiae reliquiarum' — ostaci ostataka. Tu tugu nosi svaki hrv. renesansni pisac: Marulić alegorijom, Zoranić elegijom, Hektorović šutnjom opustjelih otoka.",
    meta:'— sintetska tvrdnja · turska opasnost kao zajednički kontekst hrv. renesanse',
    use:'<strong>Najsnažniji usporedni citat za hrv. renesansu.</strong> <em>Reliquiae reliquiarum</em> = ostaci ostataka. ★ Napamet — latinizmi na ispitu uvijek daju dojam.' },

  { cat:'kontekst', napamet:false,
    text:'Robinja Hanibala Lucića jedina je hrv. renesansna drama koja tematizira tursko ropstvo direktno, bez alegorije — time je politički angažiranija od Judite, ali manje poetski ambiciozna.',
    meta:'— usporedna tvrdnja · Robinja vs. Judita',
    use:'Za <strong>usporedni esej</strong> o hrv. renesansnoj književnosti. Direktna (Robinja) vs. alegorijska (Judita) reakcija na tursku opasnost.' },

  { cat:'kontekst', napamet:false,
    text:'Otium nije lijenost — to je humanistički ideal slobodnog vremena posvećenog kulturi, razgovoru i misli. Hektorovićevo Ribanje je otium u čistoj formi: bijeg od vlastelinske svakodnevice prema slobodnom moru i ribarcima koji znaju stvari koje knjige ne mogu naučiti.',
    meta:'— interpretacijska tvrdnja · Petar Hektorović, <em>Ribanje</em>',
    use:'Za argument o <strong>humanističkom idealu otiuma</strong>. Ribanje kao otium u praksi — humanizam koji ne bježi od stvarnosti.' },

  { cat:'kontekst', napamet:true,
    text:'83 godine hrv. renesansne književnosti — od Judite (1501.) do Vazetja Sigeta (1584.) — je putovanje od nade do komemoracije: od alegorije koja poziva na otpor do epa koji slavi žrtvovanu borbu.',
    meta:'— sintetska tvrdnja o hrv. renesansi · za uvod ili zaključak eseja',
    use:'Za <strong>uvod ili zaključak eseja o hrv. renesansi</strong>. Vremenski okvir + interpretacijska os (nada → komemoracija). ★ Napamet.' },

  { cat:'kontekst', napamet:true,
    text:'Hrv. renesansa nema renesansnog optimizma — dok Italija slavi čovjeka kao mjeru svih stvari, Hrvatska ga oplakuje pod turskim mačem. Ta razlika od europskog prosjeka jest hrv. renesansna specifičnost.',
    meta:'— sintetska tvrdnja · ključna razlika hrv. i tal. renesanse',
    use:'Za <strong>usporedni esej ili uvod koji smješta hrv. renesansu u europski kontekst</strong>. ★ Napamet — razlikuje dobrog kandidata od izvrsnog.' },

  { cat:'kontekst', napamet:false,
    text:'Hrv. renesansa nije imala Medície ni stabilne mecene — imala je Dubrovačku Republiku, hvarske plemiće i zadarsku vlastelu koji su iz osobne ljubavi prema kulturi financirali književnost. To je manje stabilno, ali autentičnije od dvorske kulture.',
    meta:'— sintetska tvrdnja · za usporedbu s talijanskim mecenatstvom',
    use:'Za usporedbu s <strong>talijanskim mecenatstvom</strong>. Argument o originalnosti hrv. renesanse bez institucionalnih potpora.' },
];

const FILTERS = [
  { key:'all',        label:'Sve' },
  { key:'napamet',   label:'★ Napamet' },
  { key:'marulić',   label:'Marulić' },
  { key:'judita',    label:'Judita' },
  { key:'novela',    label:'Novela' },
  { key:'držić',     label:'Držić' },
  { key:'petrark',   label:'Petrarkisti' },
  { key:'zoranić',   label:'Zoranić' },
  { key:'hektorović',label:'Hektorović' },
  { key:'kontekst',  label:'Kontekst' },
];

function FeaturedQuote({ q, isFav, onFav }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    const txt = `„${q.text}" ${q.meta.replace(/<[^>]+>/g, '')}`;
    navigator.clipboard?.writeText(txt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }).catch(() => {});
  };

  return (
    <div className="featured-quote" data-cit-cat={q.cat}>
      <div style={{ display:'flex', gap:6, alignItems:'center', marginBottom:4 }}>
        {q.napamet && <div className="fq-napamet">★ Napamet</div>}
      </div>
      <div className="fq-mark">«</div>
      <div className="fq-body">
        <div className="fq-text">{q.text}</div>
        <div className="fq-meta" dangerouslySetInnerHTML={{ __html: q.meta }} />
        {q.use && (
          <div
            className="fq-use"
            dangerouslySetInnerHTML={{ __html: q.use }}
            style={{ marginTop:8, fontSize:'12px', color:'var(--t3)', fontStyle:'italic', lineHeight:1.55 }}
          />
        )}
      </div>
      <div style={{ display:'flex', gap:6, marginTop:10 }}>
        <button
          type="button"
          className={`fq-copy${copied ? ' copied' : ''}`}
          onClick={copy}
          aria-label="Kopiraj"
        >
          {copied ? '✓' : '⎘'}
        </button>
        <button
          type="button"
          className={`fq-fav${isFav ? ' on' : ''}`}
          onClick={onFav}
          aria-label="Spremi"
          style={{ opacity: isFav ? 1 : 0.45 }}
        >
          {isFav ? '♥' : '♡'}
        </button>
      </div>
    </div>
  );
}

export default function Citatnik({ onTabSwitch }) {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [favs, setFavs] = useLocalStorageJson(LS_FAV, {});

  const toggleFav = (idx) => {
    setFavs(prev => {
      const next = { ...prev, [idx]: !prev[idx] };

      return next;
    });
  };

  const visible = QUOTES.filter((q, i) => {
    if (filter === 'napamet') return q.napamet;
    const matchFilter = filter === 'all' || q.cat === filter;
    const term = search.toLowerCase();
    const matchSearch = !term
      || q.text.toLowerCase().includes(term)
      || q.meta.toLowerCase().includes(term);
    return matchFilter && matchSearch;
  });

  const napametCount = QUOTES.filter(q => q.napamet).length;

  return (
    <div>
      <div className="tags">
        <span className="pill p-pa">Marulić</span>
        <span className="pill p-go">Hektorović</span>
        <span className="pill p-br">Držić</span>
        <span className="pill p-t">petrarkisti · Zoranić</span>
      </div>

      <div className="box-int">
        <div className="box-int-lbl">💬 Citati — arsenal za esej i kratke odgovore</div>
        <div className="box-int-txt">
          Klikni ⎘ za kopiranje citata s atribucijom. Citati označeni <strong>★ Napamet</strong> najvažniji su za esej.
          Srce ♡ sprema citat u osobne favorite.
        </div>
      </div>

      <div className="cit-search-row" style={{ margin:'14px 0 12px', display:'flex', gap:'8px', alignItems:'center' }}>
        <span style={{ fontSize:'18px', color:'var(--gold)' }}>🔍</span>
        <input
          type="search"
          className="cit-search"
          placeholder="Pretraži citate (npr. Marulić, Držić, petrarkizam)…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ flex:1, padding:'10px 14px', background:'var(--inp)', border:'1px solid var(--bdl)', borderRadius:'10px', color:'var(--t1)', fontFamily:'var(--mono)', fontSize:'13px' }}
        />
        {search && (
          <button
            type="button"
            onClick={() => setSearch('')}
            style={{ padding:'8px 12px', background:'var(--inp)', border:'1px solid var(--bdl)', borderRadius:'8px', color:'var(--t2)', cursor:'pointer', fontSize:'14px' }}
          >✕</button>
        )}
      </div>

      <div className="pojm-filters">
        {FILTERS.map(f => (
          <button
            key={f.key}
            className={`pojm-filter${filter === f.key ? ' on' : ''}`}
            onClick={() => { setFilter(f.key); setSearch(''); }}
          >
            {f.label}
            {f.key === 'napamet' && <span style={{ marginLeft:4, opacity:.7 }}>({napametCount})</span>}
          </button>
        ))}
      </div>

      <div className="box-key" style={{ marginBottom:'16px' }}>
        <div className="box-key-lbl">🎯 Citati → Teze — Brza veza</div>
        <div className="box-key-txt">
          <b>Teza 1 (pokladni kontekst):</b> filtriraj <em>Novela</em><br />
          <b>Teza 2 (mlado–staro):</b> filtriraj <em>Novela</em><br />
          <b>Teza 3 (komentar društva):</b> filtriraj <em>Držić</em><br />
          <b>Teza 4 (alegorija u Juditi):</b> filtriraj <em>Judita</em><br />
          <b>Teza 5 (rasuta bašćina):</b> filtriraj <em>Zoranić</em><br />
          <b>Teza 6 (realizam Hektorovića):</b> filtriraj <em>Hektorović</em>
        </div>
      </div>

      <div style={{ fontFamily:'var(--mono)', fontSize:'11px', color:'var(--t3)', marginBottom:10 }}>
        <strong style={{ color:'var(--gold)' }}>{visible.length}</strong> / {QUOTES.length} citata
      </div>

      <div id="cit-grid" style={{ display:'flex', flexDirection:'column', gap:'14px', margin:'4px 0' }}>
        {visible.length === 0 && (
          <div style={{ textAlign:'center', padding:'32px', color:'var(--t3)', fontFamily:'var(--mono)', fontSize:'12px' }}>
            Nema citata za odabrani filter.
          </div>
        )}
        {visible.map((q, i) => (
          <FeaturedQuote
            key={i}
            q={q}
            isFav={!!favs[i]}
            onFav={() => toggleFav(i)}
          />
        ))}
      </div>

      <div className="nav-row">
        <span className="nb" onClick={() => onTabSwitch(2)}>← ✍ Esej alat</span>
        <span className="nb primary" onClick={() => onTabSwitch(4)}>📚 Pojmovnik →</span>
      </div>
    </div>
  );
}
