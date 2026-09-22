/*
 * H13 additions mounted into BODY_HTML placeholders.
 * Svaka komponenta je self-contained i ubrizgava vlastiti CSS.
 */

const CSS_SECHDR13 = `
  .sh13{display:flex;align-items:center;gap:10px;margin:22px 0 6px}
  .sh13-line{flex:1;height:1px;background:linear-gradient(90deg,transparent,var(--bdm),transparent)}
  .sh13-badge{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);white-space:nowrap;padding:4px 10px;border:1px solid var(--bdm);border-radius:20px;background:var(--ele)}
`;

function SH13({ label, style }) {
  return (
    <>
      <style>{CSS_SECHDR13}</style>
      <div className="sh13" style={style}>
        <div className="sh13-line" />
        <div className="sh13-badge">{label}</div>
        <div className="sh13-line" />
      </div>
    </>
  );
}

const CSS_QUOTE13 = `
  .hq13{border:1px solid var(--bd-go);border-radius:var(--r4);padding:24px 28px;margin:16px 0 24px;background:linear-gradient(135deg,rgba(232,201,122,.05),rgba(220,50,47,.02));position:relative;overflow:hidden}
  .hq13::before{content:'\\201E';position:absolute;top:-10px;left:16px;font-family:var(--display);font-size:120px;color:var(--gold);opacity:.07;line-height:1;pointer-events:none}
  .hq13::after{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:linear-gradient(180deg,transparent,var(--gold),transparent)}
  .hq13-eye{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:10px}
  .hq13-text{font-family:var(--display);font-size:15px;font-weight:700;color:var(--t1);line-height:1.55;font-style:italic;margin-bottom:10px}
  .hq13-text em{color:var(--gold);font-style:normal}
  .hq13-body{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.6;margin:10px 0}
  .hq13-source{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;text-transform:uppercase}
  @media(max-width:600px){.hq13{padding:18px 18px 18px 22px}.hq13-text{font-size:13px}}
`;

const CSS_STAT13 = `
  .stat13{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:0 0 20px}
  .stat13-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px 12px;text-align:center;transition:border-color .2s,transform .2s}
  .stat13-card:hover{border-color:rgba(232,201,122,.35);transform:translateY(-2px)}
  .stat13-ico{font-size:22px;margin-bottom:6px;display:block}
  .stat13-val{font-family:var(--display);font-size:15px;font-weight:700;color:var(--gold);margin-bottom:3px;line-height:1.2}
  .stat13-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3)}
  .stat13-sub{font-family:var(--serif);font-size:11px;color:var(--t3);margin-top:4px;line-height:1.3}
  @media(max-width:580px){.stat13{grid-template-columns:repeat(2,1fr)}}
`;

const CSS_TL13 = `
  .tl13{position:relative;padding:20px 0;margin:18px 0}
  .tl13::before{content:'';position:absolute;left:22px;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,var(--bronze),var(--gold),rgba(232,201,122,.1));opacity:.5}
  .tl13-ev{display:flex;gap:16px;margin-bottom:14px;position:relative}
  .tl13-date{flex-shrink:0;width:44px;height:44px;border-radius:50%;background:var(--card);border:2px solid var(--bronze);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:8px;font-weight:700;color:var(--bronze);z-index:1;letter-spacing:.5px;text-align:center;line-height:1.2}
  .tl13-date.major{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border-color:var(--gold);box-shadow:0 0 16px rgba(232,201,122,.3)}
  .tl13-body{flex:1;padding:8px 14px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);transition:all .2s}
  .tl13-body:hover{border-color:var(--bd-br);transform:translateX(3px)}
  .tl13-title{font-family:var(--display);font-size:13px;font-weight:600;color:var(--bronze-l);margin-bottom:3px}
  .tl13-desc{font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.55}
`;

const CSS_CMP13 = `
  .cmp13{display:grid;grid-template-columns:1fr auto 1fr;margin:16px 0 22px;border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden}
  .cmp13-side{padding:18px 20px;background:var(--sur)}
  .cmp13-side.left{background:linear-gradient(135deg,rgba(232,201,122,.05),rgba(232,201,122,.01))}
  .cmp13-vs{display:flex;align-items:center;justify-content:center;width:42px;background:var(--ele);border-left:1px solid var(--bdm);border-right:1px solid var(--bdm)}
  .cmp13-vs-inner{font-family:var(--display);font-size:10px;font-weight:700;color:var(--t3);writing-mode:vertical-rl;letter-spacing:2px}
  .cmp13-author{font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:3px}
  .cmp13-period{font-family:var(--mono);font-size:8px;color:var(--bronze);letter-spacing:1px;margin-bottom:10px;text-transform:uppercase}
  .cmp13-row{display:flex;gap:6px;margin-bottom:5px;font-family:var(--serif);font-size:12.5px;color:var(--t2)}
  .cmp13-lbl{font-family:var(--mono);font-size:9px;font-weight:700;color:var(--t3);letter-spacing:.5px;min-width:72px;flex-shrink:0;margin-top:1px}
  @media(max-width:600px){.cmp13{grid-template-columns:1fr}.cmp13-vs{writing-mode:horizontal-tb;width:auto;height:36px;border-left:none;border-right:none;border-top:1px solid var(--bdm);border-bottom:1px solid var(--bdm)}.cmp13-vs-inner{writing-mode:horizontal-tb}}
`;

const CSS_POP13 = `
  .pop13{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0 22px}
  .pop13-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px;transition:border-color .2s,transform .2s}
  .pop13-card:hover{border-color:rgba(107,155,255,.3);transform:translateY(-2px)}
  .pop13-film{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1px;color:var(--blue,#6b9bff);margin-bottom:5px;text-transform:uppercase}
  .pop13-title{font-family:var(--display);font-size:13px;font-weight:700;color:var(--t1);margin-bottom:5px;line-height:1.35}
  .pop13-source{font-family:var(--serif);font-size:12px;color:var(--t3);font-style:italic;line-height:1.5}
  @media(max-width:600px){.pop13{grid-template-columns:1fr}}
`;

const CSS_SC13 = `
  .sc13s{display:flex;flex-direction:column;gap:8px;margin:14px 0 22px}
  .sc13{border:1px solid var(--bdm);border-radius:var(--r3);background:var(--sur);overflow:hidden;transition:border-color .2s,box-shadow .2s}
  .sc13:hover{border-color:var(--bd-br)}
  .sc13[open]{border-color:var(--bd-go);box-shadow:0 2px 8px rgba(232,201,122,.08)}
  .sc13-sum{display:grid;grid-template-columns:auto 1fr auto auto;gap:12px;align-items:center;padding:13px 16px;cursor:pointer;list-style:none;user-select:none}
  .sc13-sum::-webkit-details-marker{display:none}
  .sc13-chev{font-size:10px;color:var(--t3);transition:transform .25s,color .2s;flex-shrink:0}
  .sc13[open] .sc13-chev{transform:rotate(180deg);color:var(--gold)}
  .sc13-num{font-family:var(--display);font-size:18px;font-weight:700;color:var(--bronze-l);min-width:32px}
  .sc13[open] .sc13-num{color:var(--gold)}
  .sc13-ttl{font-family:var(--serif);font-size:14px;color:var(--t1);font-weight:600;line-height:1.4}
  .sc13-meta{font-family:var(--mono);font-size:8.5px;color:var(--t3);letter-spacing:1.5px;padding:2px 8px;background:var(--ele);border:1px solid var(--bdm);border-radius:10px;text-transform:uppercase;white-space:nowrap;flex-shrink:0}
  .sc13-body{padding:0 16px 16px}
  .sc13-quote{padding:12px 14px;background:var(--ele);border-left:3px solid var(--gold);border-radius:0 var(--r2) var(--r2) 0;font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t1);font-style:italic;margin-bottom:10px}
  .sc13-why{font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t2);margin-bottom:8px}
  .sc13-why b{color:var(--t1)}
  .sc13-kljucno{padding:8px 12px;background:rgba(107,155,255,.06);border:1px solid rgba(107,155,255,.15);border-radius:var(--r2);font-family:var(--serif);font-size:12.5px;color:var(--t2);margin-bottom:8px}
  .sc13-kljucno b{color:var(--t1)}
  .sc13-note{padding:9px 13px;background:var(--ele);border-radius:var(--r2);border-left:3px solid var(--bronze);font-family:var(--serif);font-size:12.5px;color:var(--t2);font-style:italic}
  .sc13-args{margin-top:8px;display:flex;flex-direction:column;gap:5px}
  .sc13-arg{display:flex;gap:8px;font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.5;padding:4px 8px;background:var(--ele);border-radius:var(--r1);border-left:2px solid var(--bronze)}
  .sc13-arg-num{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--bronze);flex-shrink:0;margin-top:2px}
  @media(max-width:600px){
    .sc13-sum{grid-template-columns:auto 1fr auto;gap:8px;padding:11px 12px}
    .sc13-meta{display:none}
    .sc13-body{padding:0 12px 12px}
  }
`;

const CSS_AUTHOR13 = `
  .h13a-author{margin:14px 0 24px;border:1px solid var(--bdm);border-radius:var(--r3);background:linear-gradient(180deg,var(--sur),var(--card));overflow:hidden}
  .h13a-author-head{display:flex;gap:14px;align-items:flex-start;padding:16px 18px;border-bottom:1px solid var(--bdm)}
  .h13a-author-monogram{width:52px;height:52px;border-radius:var(--r2);display:flex;align-items:center;justify-content:center;font-family:var(--display);font-size:22px;font-weight:700;color:#0F0605;background:linear-gradient(135deg,var(--bronze),var(--gold));box-shadow:0 8px 20px rgba(0,0,0,.22);flex-shrink:0}
  .h13a-author-meta{flex:1;min-width:0}
  .h13a-author-name{font-family:var(--display);font-size:18px;color:var(--t1);font-weight:700;line-height:1.2}
  .h13a-author-dates{font-family:var(--mono);font-size:10px;letter-spacing:1px;color:var(--bronze);margin-top:4px}
  .h13a-author-chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
  .h13a-author-chip{font-family:var(--mono);font-size:8.5px;letter-spacing:.6px;text-transform:uppercase;border:1px solid var(--bdm);border-radius:999px;padding:3px 8px;color:var(--t2);background:var(--ele)}
  .h13a-author-chip.gold{border-color:var(--bd-go);background:var(--dim-go);color:var(--gold)}
  .h13a-author-chip.br{border-color:var(--bd-br);background:var(--dim-br);color:var(--bronze)}
  .h13a-author-chip.pa{border-color:var(--bd-pa);background:var(--dim-pa);color:var(--parchment)}
  .h13a-author-body{padding:16px 18px}
  .h13a-author-body p{margin:0 0 10px;font-family:var(--serif);font-size:14px;line-height:1.62;color:var(--t2)}
  .h13a-author-body p strong{color:var(--t1)}
  .h13a-author-body p em{color:var(--gold)}
  .h13a-author-works{margin-top:14px;padding-top:12px;border-top:1px solid var(--bd)}
  .h13a-author-works-eye{font-family:var(--mono);font-size:9px;letter-spacing:1.1px;text-transform:uppercase;color:var(--t3);margin-bottom:8px}
  .h13a-author-work{display:flex;gap:10px;padding:10px 0;border-bottom:1px solid var(--bd)}
  .h13a-author-work:last-child{border-bottom:none;padding-bottom:0}
  .h13a-author-work-ico{font-size:17px;line-height:1.1;flex-shrink:0;margin-top:2px}
  .h13a-author-work-title{font-family:var(--display);font-size:13px;font-weight:700;color:var(--gold);margin-bottom:3px}
  .h13a-author-work-meta{font-family:var(--mono);font-size:9px;letter-spacing:.5px;color:var(--t3);margin-bottom:5px}
  .h13a-author-work-desc{font-family:var(--serif);font-size:12.8px;line-height:1.55;color:var(--t2)}
  .h13a-author-work-desc strong{color:var(--t1)}
  .h13a-author-work-desc em{color:var(--gold)}
`;

const GUND_TL = [
  { date: '1570.', major: false, title: 'Lepanto - kršćanska Europa pobjeđuje', desc: 'Pomorska bitka kod Lepanta: austrijska + mletačka + papinska flota pobjeđuje Osmanlije. Kraj turske morske dominacije u Sredozemlju. Inspiracija za antitursku književnost 17. st.' },
  { date: '1581.', major: false, title: 'Tasso - Oslobođeni Jeruzalem', desc: 'Torquato Tasso objavljuje viteško-junački ep koji postaje uzor cijeloj europskoj baroknoj epici. Gundulić ga direktno slijedi u Osmanu.' },
  { date: '1589.', major: true, title: 'Gundulić rođen u Dubrovniku', desc: 'Plemićka obitelj (otac Frano, majka Dživa Gradić). Obrazovan kod jezuita - barokni i katolicki duh.' },
  { date: '1608.', major: false, title: 'Član Velikog vijeća - politički Gundulić', desc: 'Ulazi u dubrovačku političku aristokraciju. Gundulić nije samo pjesnik - on je aktivni branitelj slobode koju pjeva u Dubravki.' },
  { date: '1621.', major: true, title: 'Bitka kod Hoćima - slavenska pobjeda', desc: 'Poljsko-Litvanski savez pobjeđuje Turke. Sultan Osman II. ubijen u pobuni janjicara. Gundulić počinje pisati ep Osman.' },
  { date: '1622.', major: false, title: 'Suze sina razmetnoga - Venecija', desc: 'Religiozna poema o izgubljenom sinu. Barokni spoj kontrasta grijeha i milosti, prolaznosti i vjecnosti.' },
  { date: '1628.', major: true, title: 'Dubravka - praizvedba pred Dvorom', desc: 'Napisana za vlastitu svadbu s Nikom Sorkočević. Izvedena pred Dvorom u Dubrovniku, na dan sv. Vlaha, blagdan slobode Republike.' },
  { date: '1638.', major: false, title: 'Gundulić umire - Osman nedovršen', desc: 'Umire u 49. godini. Osman ostaje bez XIV. i XV. pjevanja (izgubljena).' },
];

const CINJENJA13 = [
  {
    br: 'I',
    naslov: 'Ekspozicija - Svetkovina, ljubav, opasnost',
    tag: '10 SKAZANJA',
    stih: "\"Zudena Danice, objav' se, objavi! / Dubrava ova plemenita.\"",
    funk: 'In medias res otvaranje (Radmijev monolog). Uvedeni svi likovi: Miljenko i Dubravka, satiri Divjak/Gorstak/Vuk, ribar iz Dalmacije.',
    kljucno: 'Svetkovina sv. Vlaha (3.2.) = realni dubrovacki blagdan slobode. Veza fikcija - politicka stvarnost od prve scene.',
    esej: 'I. činjenje pokazuje stilsku hijerarhiju: Radmio u dvanaestercima, Miljenko i Dubravka u osmercima, satiri u grubim dvanaestercima.'
  },
  {
    br: 'II',
    naslov: 'Zaplet - Grdanova prevara, Dubravka u opasnosti',
    tag: '9 SKAZANJA',
    stih: '"Grdan je bogat, Grdan je gospodar, / a Miljenko - tko je on?"',
    funk: 'Grdan potkupljuje suce i zadobiva pravo vjencanja s Dubravkom. Miljenko je nemocan - plemenitost bez novca gubi.',
    kljucno: 'Sudačka korupcija: suci biraju Grdana jer ih je platio. Gundulić kritizira pokvareni sudbeni sustav.',
    esej: 'II. činjenje je srž alegorije: ekonomska sila ugrožava aristokratski poredak. Sukob nije romantičan - on je politički.'
  },
  {
    br: 'III',
    naslov: 'Rasplet - Čudo boga Lera, himna slobodi',
    tag: '9 SKAZANJA + HIMNA',
    stih: '"O lijepa, o draga, o slatka slobodo, / dar u kom sva blaga višnji nam Bog je do."',
    funk: 'U trenutku obreda u hramu boga Lera tlo se trese, plam tamni, kip se znoji. Miljenko ulazi, Grdan bježi, slijedi himna slobodi.',
    kljucno: 'Himna slobodi ima tri dimenzije: dramska, alegorijska i teološka.',
    esej: 'Deus ex machina: Bog intervenira kad bi pravda pala. Himna nije ukras - ona je ideološki manifest pastoralne alegorije.'
  },
];

const ESEJ_TEZE_H13 = [
  {
    br: 'T1',
    naslov: 'Alegorijska razina - Dubravka = Dubrovačka Republika',
    tag: 'ALEGORIJA - POLITIKA',
    teza: 'Gundulićeva Dubravka (1628.) nije samo pastirska igra o ljubavi Miljenka i Dubravke - ona je pažljivo konstruirana alegorija dubrovačke slobode: Dubrava = Dubrovačka Republika, Dubravka = sloboda i vlast, Miljenko = legitimno plemstvo, Grdan = korumpirana nova ekonomska elita.',
    args: [
      'Svaki lik ima tocno odgovarajuce alegorijsko znacenje - to nije slucajno, nego programatski.',
      'Ribar iz Dalmacije pod Turcima/Mlecima pojačava vrijednost dubrovačke slobode: ona postoji u okruženju ropstva.',
      'Gundulić, sam plemić, pise manifest aristokratskog poretka - djelo je osobno i politički angažirano.'
    ],
    scena: 'Grdanovo potkupljivanje sudaca u II. cinjenju: ekonomska moc ugrozava aristokratski poredak.'
  },
  {
    br: 'T2',
    naslov: 'Zanrovska hibridnost - pastorala + melodrama + politicka drama',
    tag: 'ZANR - BAROK',
    teza: 'Dubravka je žanrovski hibrid karakterističan za hrvatski barok: primarno pastirska igra, obogaćena elementima melodrame, tragikomedije i politicke drame.',
    args: [
      'Pastorala: Tassova Aminta i Guarinijev Il pastor fido kao uzori - arhadiaski prostor, ljubavni zaplet, sretni kraj.',
      'Melodrama: pjevne dionice i harmoničan zvuk - Gundulić spaja tekst i glazbu.',
      'Politicka drama: alegorijska dimenzija nadilazi zanr pastoralne igre - Dubravka nije samo ljubavna prica.'
    ],
    scena: 'III. činjenje: deus ex machina + himna slobodi + komični epilog (satir Divjak) - tri žanra u jednoj cjelini.'
  },
  {
    br: 'T3',
    naslov: 'Sloboda kao vrhovna vrijednost',
    tag: 'SLOBODA - HIMNA',
    teza: 'Središnja ideja Dubravke nije ljubav, nego sloboda. Završna himna - "O lijepa, o draga, o slatka slobodo" - najsažetiji je izraz dubrovackog slobodarskog ideala.',
    args: [
      'Sloboda je teološki utemeljena: "dar u kom sva blaga višnji nam Bog je do" - nije politički konstrukt, nego Božji dar.',
      'Svaka scena suprostavlja slobodu i ropstvo: Dubrava slobodna vs. Dalmacija pod Turcima, Dubravka slobodna vs. Dubravka prodana Grdanu.',
      'Himna slobodi nije lirski ukras - ona je ideološki manifest Republike.'
    ],
    scena: 'Završna himna (III. činjenje, scena 9): zbor svih likova - kolektivni glas slobode.'
  },
  {
    br: 'T4',
    naslov: 'Sukob vrijednosti: Miljenko vs. Grdan',
    tag: 'SUKOB - ANTITEZA',
    teza: 'Antiteticki odnos Miljenka i Grdana nije samo ljubavni zaplet - to je simbolicki sukob dvaju drustvenih principa: tradicionalnog aristokratskog poretka i nove ekonomske sile.',
    args: [
      'Miljenko: plemenitost, ljepota, iskrenost. Grdan: bogatstvo, ruznoca, korupcija.',
      'Gundulić otvoreno zauzima stranu: vrlina + porijeklo > novac. To je konzervativni manifest maskiran pastoralom.',
      'Grdan ne može trajno dobiti Dubravku (slobodu) - božanska pravda intervenira.'
    ],
    scena: 'II. činjenje: Grdan pred sucima - "Grdan je bogat" kao jedini argument.'
  },
  {
    br: 'T5',
    naslov: 'Stilska hijerarhija - barokna estetika u jeziku',
    tag: 'STIL - JEZIK',
    teza: 'Dubravka pokazuje zrelu baroknu poetiku kroz trostruku stilsku hijerarhiju: visoki stil (osmerac), srednji (dvanaesterac) i niski (pučki dvanaesterac).',
    args: [
      'Kroz jezik Gundulić karakterizira likove: osmerac = viši i emotivniji, dvanaesterac = narativni/didakticki, pučki dvanaesterac = humor i niska drama.',
      'Stilska razlika prati alegorijsku: Miljenko govori elegantnim osmercima, Grdan grubim dvanaestercima.',
      'Barokni ideal: variety unutar unity - raznolikost i jedinstvo istodobno.'
    ],
    scena: 'Satiri u I. činjenju: grubi humor i pučki jezik nasuprot Miljenkovim lirskim osmercima.'
  },
];

export const TEZA_COLORS13 = ['var(--gold)', 'var(--green)', 'var(--blue,#6b9bff)', 'var(--red)', 'var(--orange,#f97316)'];

export function HeroQuoteGundulic() {
  return (
    <>
      <style>{CSS_QUOTE13}</style>
      <div className="hq13">
        <div className="hq13-eye">NAJPOZNATIJI STIH HRVATSKE BAROKNE KNJIŽEVNOSTI - NAPAMET</div>
        <div className="hq13-text">
          O lijepa, o draga, o slatka slobodo,
          dar u kom sva blaga <em>višnji nam Bog je do</em>,
          uzroče, začeto sve slave, sve hvale,
          er čovik tko ne da robovat nikad te!
        </div>
        <div className="hq13-body">
          III. činjenje, završna himna - zbor svih likova. Ove četiri retke sadrže sve što Gundulić želi reći: sloboda je
          <strong style={{ color: 'var(--t1)' }}> Božji dar</strong>, izvor svakog dobra i čovjek koji je spreman umrijeti za nju jedini je dostojan je čuvati.
          Za esej: <strong style={{ color: 'var(--t1)' }}>uvijek navesti</strong> uz tezu o slobodi i naglasiti da je ovo alegorija Dubrovačke Republike.
        </div>
        <div className="hq13-source">DUBRAVKA - III. ČINJENJE, ZAVRŠNA HIMNA - IVAN GUNDULIĆ - 1628. - DUBROVNIK</div>
      </div>
    </>
  );
}

export function StatCardsDubravka() {
  const stats = [
    { ico: '📅', val: '1628.', lbl: 'Praizvedba', sub: 'na Gundulićevu svadbu' },
    { ico: '🎭', val: '3 cinjenja', lbl: 'Kompozicija', sub: '28 skazanja - 1696 st.' },
    { ico: '🎵', val: 'Osmerac', lbl: '+ dvanaesterac', sub: 'trostruka stilska razina' },
    { ico: '🕊️', val: 'Slobodo!', lbl: 'Himna - napamet', sub: 'obvezatan citat' },
  ];

  return (
    <>
      <style>{CSS_STAT13}</style>
      <div className="stat13">
        {stats.map((s) => (
          <div className="stat13-card" key={s.lbl}>
            <span className="stat13-ico">{s.ico}</span>
            <div className="stat13-val">{s.val}</div>
            <div className="stat13-lbl">{s.lbl}</div>
            <div className="stat13-sub">{s.sub}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export function TimelineGundulic() {
  return (
    <>
      <style>{CSS_TL13}</style>
      <div className="tl13">
        {GUND_TL.map((ev, i) => (
          <div className="tl13-ev" key={i}>
            <div className={`tl13-date${ev.major ? ' major' : ''}`}>{ev.date}</div>
            <div className="tl13-body">
              <div className="tl13-title">{ev.title}</div>
              <div className="tl13-desc">{ev.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export function CompareAlegorijaGundulic() {
  const rows = [
    ['Prostor', 'Dubrava - mitska pastirska zemlja', 'Dubrovačka Republika'],
    ['Heroina', 'Dubravka - najljepša pastirica', 'Sloboda / vlast Dubrovnika'],
    ['Junak', 'Miljenko - dobar pastir', 'Dubrovacko plemstvo (vlastela)'],
    ['Antagonist', 'Grdan - bogati ruzan gospodin', 'Bogati pucani - nova elita'],
    ['Suci', 'Kupljivi suci svetkovine', 'Korumpirana politička elita'],
    ['Ribar', 'Ribar iz Dalmacije u bjegu', 'Ostali hrv. krajevi pod Turcima'],
    ['Bog Lero', 'Bog koji čudom popravi stvar', 'Božja pravda / dubrovačka tradicija'],
    ['Svetkovina', 'Svetkovina sv. Vlaha', 'Blagdan slobode 3.2. - politički simbol'],
  ];

  return (
    <>
      <style>{CSS_CMP13}</style>
      <SH13 label="05b - Dubravka - dvostruko čitanje" />
      <div className="box-int" style={{ marginBottom: 12 }}>
        <div className="box-int-lbl">Za ispit - uvijek navesti obje razine</div>
        <div className="box-int-txt">
          NCVVO često pita: &quot;Što Dubravka simbolizira?&quot; Odgovor mora imati obje razine: (1) pastoralna priča o ljubavi Miljenka i Dubravke,
          (2) alegorija dubrovačke slobode i politicke borbe za vlast.
        </div>
      </div>
      <div className="cmp13">
        <div className="cmp13-side left">
          <div className="cmp13-author">Pastoralna razina</div>
          <div className="cmp13-period">DOSLOVNO ČITANJE - PASTIRSKA IGRA</div>
          {rows.map(([l, a]) => (
            <div className="cmp13-row" key={l}>
              <span className="cmp13-lbl">{l}</span>
              <span>{a}</span>
            </div>
          ))}
        </div>
        <div className="cmp13-vs"><span className="cmp13-vs-inner">=</span></div>
        <div className="cmp13-side">
          <div className="cmp13-author">Alegorijska razina</div>
          <div className="cmp13-period">ALEGORIJSKO ČITANJE - DUBROVAČKA POLITIKA</div>
          {rows.map(([l, , r]) => (
            <div className="cmp13-row" key={l}>
              <span className="cmp13-lbl">{l}</span>
              <span>{r}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function PopKulturaGundulic() {
  const pop = [
    { film: 'Kip Gundulića - Dubrovnik', title: 'Simbol grada na Poljani', source: 'Ivan Rendic 1893. postavlja kip Gundulica na Gundulićevoj poljani u Dubrovniku.' },
    { film: 'Dubrovačke ljetne igre', title: 'Dubravka svake sezone od 1950.', source: 'Od osnivanja Dubrovačkih ljetnih igara 1950., Dubravka se izvodi gotovo svake sezone.' },
    { film: 'O lijepa slobodo', title: 'Najcitiraniji stih hrv. književnosti', source: 'Himna slobodi iz Dubravke citira se u govorima, školama i medijima.' },
    { film: 'Osman - nedovršeni ep', title: 'Mažuranić dopunjuje 200 god. kasnije', source: 'XIV. i XV. pjevanje Osmana dopisuje Ivan Mažuranić 1844.' },
    { film: 'Dubravka kao opera', title: 'Jakov Gotovac i suvremenost', source: 'Jakov Gotovac pise opernu verziju Dubravke; izvodi se u HNK i danas.' },
    { film: 'Barok - živi pojam', title: 'Dubravka u globalnom kontekstu', source: 'Gundulić je hrvatski autor usporediv s europskim baroknim kanonom.' },
  ];

  return (
    <>
      <style>{CSS_POP13}</style>
      <SH13 label="Gundulić i Dubravka danas" style={{ marginTop: 24 }} />
      <div className="pop13">
        {pop.map((p, i) => (
          <div className="pop13-card" key={i}>
            <div className="pop13-film">{p.film}</div>
            <div className="pop13-title">{p.title}</div>
            <div className="pop13-source">{p.source}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export function AccordionCinjenja() {
  return (
    <>
      <style>{CSS_SC13}</style>
      <SH13 label="Dubravka - 3 činjenja" style={{ marginBottom: 8 }} />
      <div className="sc13s">
        {CINJENJA13.map((c) => (
          <details className="sc13" key={c.br}>
            <summary className="sc13-sum">
              <div className="sc13-num">{c.br}</div>
              <div className="sc13-ttl">{c.naslov}</div>
              <span className="sc13-meta">{c.tag}</span>
              <span className="sc13-chev">▾</span>
            </summary>
            <div className="sc13-body">
              <div className="sc13-quote">{c.stih}</div>
              <div className="sc13-why"><b>Dramatska funkcija:</b> {c.funk}</div>
              <div className="sc13-kljucno"><b>Ključno za ispit:</b> {c.kljucno}</div>
              <div className="sc13-note">
                <strong style={{ color: 'var(--bronze)', fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: 1, fontStyle: 'normal' }}>ZA ESEJ: </strong>
                {c.esej}
              </div>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}

export function AccordionEsejTezeH13() {
  return (
    <>
      <style>{CSS_SC13}</style>
      <div className="box-int" style={{ marginBottom: 14 }}>
        <div className="box-int-lbl">Dubravka je OBVEZATNO esejsko djelo 2026. - pisati direktno o njoj.</div>
        <div className="box-int-txt">Za razliku od Judite koja je kontekstualni argument, Dubravka je na popisu esejskih djela. Uzmi jednu od teza i razradi je s analizom ulomka.</div>
      </div>
      <div className="sc13s">
        {ESEJ_TEZE_H13.map((t, idx) => (
          <details className="sc13" key={t.br}>
            <summary className="sc13-sum">
              <div className="sc13-num" style={{ fontSize: 13, color: TEZA_COLORS13[idx] }}>{t.br}</div>
              <div className="sc13-ttl">{t.naslov}</div>
              <span className="sc13-meta" style={{ color: TEZA_COLORS13[idx], borderColor: `${TEZA_COLORS13[idx]}55` }}>{t.tag}</span>
              <span className="sc13-chev" style={{ color: TEZA_COLORS13[idx] }}>▾</span>
            </summary>
            <div className="sc13-body">
              <div className="sc13-quote">{t.teza}</div>
              <div className="sc13-why"><b>Argumenti:</b></div>
              <div className="sc13-args">
                {t.args.map((a, i) => (
                  <div className="sc13-arg" key={i} style={{ borderLeftColor: TEZA_COLORS13[idx] }}>
                    <span className="sc13-arg-num" style={{ color: TEZA_COLORS13[idx] }}>({i + 1})</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
              <div className="sc13-note">
                <strong style={{ color: 'var(--bronze)', fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: 1, fontStyle: 'normal' }}>KLJUČNA SCENA: </strong>
                {t.scena}
              </div>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}

export function AuthorProfileGundulic() {
  return (
    <>
      <style>{CSS_AUTHOR13}</style>
      <div className="h13a-author">
        <div className="h13a-author-head">
          <div className="h13a-author-monogram">IG</div>
          <div className="h13a-author-meta">
            <div className="h13a-author-name">Ivan Gundulić</div>
            <div className="h13a-author-dates">Dubrovnik - 1589. - 1638.</div>
            <div className="h13a-author-chips">
              <span className="h13a-author-chip br">najveći hrv. barokni pjesnik</span>
              <span className="h13a-author-chip gold">Dubrovačka aristokracija</span>
              <span className="h13a-author-chip pa">nadimak Mačica</span>
            </div>
          </div>
        </div>

        <div className="h13a-author-body">
          <p>Rođen u Dubrovniku <strong>1589.</strong> u plemićkoj obitelji (otac Frano Gundulić, majka Dživa Gradić). Obrazovao se kod jezuita. <strong>1608.</strong> postaje član Velikog vijeća. Dva puta knez Konavala (1615., 1619.). Pravnik i političar. <strong>1628.</strong> oženio se Nikom Sorkočević - za vjenčanje piše <em>Dubravku</em>. Umro 1638. u 49. godini, od upale porebrice.</p>
          <p>Dobio nadimak <em>Mačica</em>. Kasnije proglašen kanonskim piscem starije hrv. književnosti. Rana djela sam je zvao <strong>porod od tmine</strong>.</p>

          <div className="h13a-author-works">
            <div className="h13a-author-works-eye">Ključna djela</div>

            <div className="h13a-author-work">
              <div className="h13a-author-work-ico">🎭</div>
              <div>
                <div className="h13a-author-work-title">Dubravka</div>
                <div className="h13a-author-work-meta">Izvedena 1628. - Pastorala - 3 činjenja - 28 skazanja - 1696 stihova</div>
                <div className="h13a-author-work-desc">Alegorijska pastorala, napisana za Gundulićevu svadbu. Dubravka = sloboda Dubrovnika, Miljenko = plemstvo, Grdan = bogati pucani.</div>
              </div>
            </div>

            <div className="h13a-author-work">
              <div className="h13a-author-work-ico">📖</div>
              <div>
                <div className="h13a-author-work-title">Osman</div>
                <div className="h13a-author-work-meta">Nedovršen, 1621.-1638. - Viteško-junački ep - 20 pjevanja (bez 14. i 15.)</div>
                <div className="h13a-author-work-desc">Najveći hrv. barokni ep, po uzoru na Tassa. Tema: bitka kod Hoćima i pad sultana Osmana II.</div>
              </div>
            </div>

            <div className="h13a-author-work">
              <div className="h13a-author-work-ico">✝</div>
              <div>
                <div className="h13a-author-work-title">Suze sina razmetnoga</div>
                <div className="h13a-author-work-meta">1622., Venecija - Religiozna poema - 3 placa</div>
                <div className="h13a-author-work-desc">Meditativna poema po biblijskoj paraboli o izgubljenom sinu. Barokni kontrast grijeha i milosti.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const CSS_H13A_VIDEO_EMBED = `
  .h13a-video-wrap .yt-card{box-shadow:0 8px 22px rgba(0,0,0,.14)}
`;

function H13AVideoEmbed({ html }) {
  return (
    <>
      <style>{CSS_H13A_VIDEO_EMBED}</style>
      <div className="h13a-video-wrap" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

const H13A_VIDEO_CARD_PRIMARY_HTML = `      <a class="yt-card" href="https://www.youtube.com/results?search_query=Gundulić+Dubravka+analiza+lektira+matura+sloboda" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇭🇷</span> HR</div>
          <div class="yt-title">Dubravka — analiza na hrvatskom</div>
        </div>
      </a>`;

export function VideoCardPrimaryH13() {
  return <H13AVideoEmbed html={H13A_VIDEO_CARD_PRIMARY_HTML} />;
}

const H13A_VIDEO_CARD_SECONDARY_HTML = `      <a class="yt-card" href="https://www.youtube.com/results?search_query=Ivan+Gundulić+barok+Dubrovnik+hrvatska+književnost" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇭🇷</span> HR</div>
          <div class="yt-title">Ivan Gundulić — barokni Dubrovnik</div>
        </div>
      </a>`;

export function VideoCardSecondaryH13() {
  return <H13AVideoEmbed html={H13A_VIDEO_CARD_SECONDARY_HTML} />;
}

const H13A_VIDEO_CARD_TERTIARY_HTML = `      <a class="yt-card" href="https://www.youtube.com/results?search_query=Baroque+literature+pastoral+drama+freedom+allegory" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇬🇧</span> EN</div>
          <div class="yt-title">Baroque pastoral drama — allegory</div>
        </div>
      </a>`;

export function VideoCardTertiaryH13() {
  return <H13AVideoEmbed html={H13A_VIDEO_CARD_TERTIARY_HTML} />;
}

const H13A_VIDEO_CARD_QUATERNARY_HTML = `      <a class="yt-card" href="https://www.youtube.com/results?search_query=Dubrovnik+Republic+history+freedom+Libertas" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🎬</span> EN</div>
          <div class="yt-title">Dubrovnik Republic — freedom &amp; Libertas</div>
        </div>
      </a>`;

export function VideoCardQuaternaryH13() {
  return <H13AVideoEmbed html={H13A_VIDEO_CARD_QUATERNARY_HTML} />;
}
