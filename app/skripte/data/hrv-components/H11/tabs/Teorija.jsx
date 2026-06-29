'use client';
import { useState } from 'react';
import { DIAG_Q } from '../h11-data';

const N = DIAG_Q.length;

function Diagnostic({ onTabSwitch }) {
  const [state, setState] = useState('intro'); // intro | quiz | result | dismissed
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);

  const q = DIAG_Q[idx];

  const answer = (i) => {
    if (selected !== null) return;
    setSelected(i);
    const correct = i === q.ans;
    if (correct) setScore(s => s + 1);
    setTimeout(() => {
      if (idx < N - 1) { setIdx(idx + 1); setSelected(null); }
      else setState('result');
    }, 900);
  };

  const pct = Math.round(score / N * 100);
  const RES = [
    { ico:'📚', col:'var(--bronze)', msg:'Ponovi osnove — kreni s Teorijom i Pisci i djela.' },
    { ico:'💪', col:'var(--sienna)', msg:'Dobro! Fokusiraj se na Držića, Zoranića i petrarkiste.' },
    { ico:'🌟', col:'var(--gold)', msg:'Jako dobro! Provjeri pojmovnik i citate za maturu.' },
    { ico:'🏆', col:'var(--green)', msg:'Odlično! Spreman/na si za maturu iz H11!' },
  ];
  const NEXT = [
    { tab: 1, label: '📖 Otvori Pisci i djela' },
    { tab: 1, label: '📖 Učvrsti pisce i djela' },
    { tab: 4, label: '📚 Otvori Pojmovnik' },
    { tab: 7, label: '✅ Idi na Checkpoint' },
  ];
  const res = RES[pct < 40 ? 0 : pct < 70 ? 1 : pct < 90 ? 2 : 3];
  const next = NEXT[pct < 40 ? 0 : pct < 70 ? 1 : pct < 90 ? 2 : 3];

  if (state === 'dismissed') return null;

  return (
    <div className="diag" data-state={state}>
      {state === 'intro' && (
        <div className="diag-intro">
          <div className="diag-intro-icon">🎯</div>
          <div className="diag-intro-body">
            <div className="diag-intro-title">Brza dijagnostika — {N} pitanja</div>
            <div className="diag-intro-desc">Pitanja pokrivaju sve ključne pisce i pojmove H11. Dobit ćeš personaliziranu preporuku.</div>
            <button type="button" className="diag-btn diag-btn-primary" onClick={() => setState('quiz')}>▶ Pokreni dijagnostiku</button>
            <button type="button" className="diag-btn diag-btn-ghost" onClick={() => setState('dismissed')}>Preskoči — odmah na sadržaj ↓</button>
          </div>
        </div>
      )}
      {state === 'quiz' && (
        <div className="diag-quiz">
          <div className="diag-bar">
            <div className="diag-prog-txt">Pitanje {idx + 1} / {N}</div>
            <div className="diag-prog-wrap"><div className="diag-prog-bar" style={{width: `${idx / N * 100}%`}} /></div>
            <div className="diag-prog-num">{score} točno</div>
          </div>
          <div className="diag-topic">{q.topic}</div>
          <div className="diag-q">{q.q}</div>
          <div className="diag-opts">
            {q.opts.map((o, i) => (
              <button
                key={i}
                className={`diag-opt${selected === i ? (i === q.ans ? ' correct' : ' wrong') : selected !== null && i === q.ans ? ' correct' : ''}`}
                onClick={() => answer(i)}
                disabled={selected !== null}
              >{o}</button>
            ))}
          </div>
        </div>
      )}
      {state === 'result' && (
        <div className="diag-result">
          <div className="diag-res">
            <div style={{fontSize:'38px',marginBottom:'8px'}}>{res.ico}</div>
            <div className="diag-res-msg">
              <strong style={{color:res.col}}>{score}/{N}</strong>
              <span style={{color:'var(--t3)'}}> ({pct}%)</span>
            </div>
            <div id="diag-res-bar" style={{height:'4px',background:'var(--bd)',borderRadius:'2px',margin:'8px 0',overflow:'hidden'}}>
              <div style={{height:'100%',borderRadius:'2px',width:`${pct}%`,transition:'width .7s ease',background:res.col}} />
            </div>
            <div className="diag-rec">{res.msg}</div>
            {onTabSwitch && (
              <button
                type="button"
                className="diag-btn diag-btn-primary"
                style={{marginTop:'10px'}}
                onClick={() => onTabSwitch(next.tab)}
              >
                {next.label}
              </button>
            )}
            <button type="button" className="diag-btn diag-btn-ghost" style={{marginTop:'12px'}}
              onClick={() => { setIdx(0); setScore(0); setSelected(null); setState('quiz'); }}>
              🔁 Ponovi dijagnostiku
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Teorija({ onTabSwitch }) {
  return (
    <div className="h11-theory">
      <div className="tags">
        <span className="pill p-br">epoha</span>
        <span className="pill p-go">renesansa</span>
        <span className="pill p-r">15.–16. st.</span>
        <span className="pill p-t">petrarkizam · humanizam · pastorala</span>
      </div>

        <div className="featured-quote">
          <div className="fq-mark">«</div>
          <div className="fq-body">
            <div className="fq-text">Historiju tuj svedoh na versih, po običaju naših začinjavac i jošće po zakonu onih starih poet.</div>
            <div className="fq-meta">— Marko Marulić, <em>Judita</em> (posveta), 1501. · temeljna rečenica hrv. književnosti</div>
          </div>
          <button type="button" className="fq-copy" onClick={(e)=>{const fq=e.currentTarget.closest('.featured-quote');const txt=fq?.querySelector('.fq-text')?.textContent||"";navigator.clipboard?.writeText(txt)}} aria-label="Kopiraj">⎘</button>
        </div>

        <div className="box-int">
          <div className="box-int-lbl">🧭 Kontekst: Zašto upravo Dalmacija i Dubrovnik?</div>
          <div className="box-int-txt">
            Hrvatska renesansa nije nastala u kontinentalnoj Hrvatskoj — nego na <strong>obali i otocima</strong>. Razlog: <em>geografska blizina Italije</em>, razvijene trgovačke i kulturne veze. Gradovi <b>Split, Šibenik, Hvar, Zadar i Dubrovnik</b> bili su prozor u renesansnu Europu. Dubrovnik kao slobodna republika imao je poseban status — vlastela s dovoljno slobodnog vremena i prihoda da podupire kazalište i književnost. „Hrv. jezik" u to doba <em>nije bio normiran</em> — pisalo se na govorima pojedinih gradova (<b>čakavski, štokavski, dubrovački idiom</b>).
          </div>
        </div>

        <div className="box-int">
          <div className="box-int-lbl">🎯 Brza dijagnostika H11 — 10 pitanja</div>
          <div className="box-int-txt">Provjeri znaš li osnove hrv. renesansne književnosti prije nego kreneš s detaljima.</div>
        </div>

        {/* BRZA NAVIGACIJA */}
        <div style={{'display':'grid','gridTemplateColumns':'repeat(auto-fit,minmax(140px,1fr))','gap':'8px','margin':'0 0 22px'}}>
          <button onClick={()=>onTabSwitch(1)} className="qnav-btn">📖 PISCI I DJELA<span>Marulić, Držić, Zoranić...</span></button>
          <button onClick={()=>onTabSwitch(2)} className="qnav-btn">✍ ESEJ ALAT<span>Teze, modeli, TIPS</span></button>
          <button onClick={()=>onTabSwitch(3)} className="qnav-btn">💬 CITATNIK<span>50 citata · ★ Napamet</span></button>
          <button onClick={()=>onTabSwitch(4)} className="qnav-btn">📚 POJMOVNIK<span>70 pojmova · flashcard</span></button>
          <button onClick={()=>onTabSwitch(6)} className="qnav-btn">🧠 KVIZ<span>30 pitanja · sve teme</span></button>
          <button onClick={()=>onTabSwitch(7)} className="qnav-btn">✅ CHECKPOINT<span>Provjeri znanje</span></button>
        </div>

        <Diagnostic onTabSwitch={onTabSwitch} />

        <div className="auth-box">
          <div className="auth-ico">📋</div>
          <div className="auth-body">
            <div className="auth-ttl">Što ispit traži od H11</div>
            <div className="auth-txt">NCVVO provjerava: <strong>Marin Držić (Novela od Stanca)</strong> kao obvezatno djelo 2025./2026. Uz njega mogu se pojaviti pitanja o Marku Maruliću (<em>Judita</em>), Petru Hektoroviću (<em>Ribanje</em>), Petru Zoraniću (<em>Planine</em>) i petrarkistima (Menčetić, Džore Držić). Za esej: Novela od Stanca je ključan tekst — farsa, pokladna igra, kritika.</div>
            <div className="auth-links">
              <a href="https://www.ncvvo.hr" target="_blank" rel="noopener" className="auth-link">ncvvo.hr</a>
              <a href="Maturiraj_Hrvatski_D11.html" className="auth-link">D11 · Novela od Stanca →</a>
            </div>
          </div>
        </div>

        {/* SEC 01 */}

        {/* MUST-KNOW QUICK REF */}
        <div style={{'background':'linear-gradient(135deg,rgba(220,50,47,.08),rgba(232,201,122,.05))','border':'1px solid var(--bd-br)','borderLeft':'4px solid var(--bronze)','borderRadius':'var(--r4)','padding':'18px 22px','margin':'20px 0'}}>
          <div style={{'fontFamily':'var(--display)','fontSize':'10px','fontWeight':'700','letterSpacing':'2px','textTransform':'uppercase','color':'var(--bronze)','marginBottom':'12px'}}>⚡ MUST-KNOW — Minimalni set za maturu</div>
          <div style={{'display':'grid','gridTemplateColumns':'1fr 1fr','gap':'8px','fontFamily':'var(--serif)','fontSize':'13px','color':'var(--t2)','lineHeight':'1.5'}}>
            <div><b style={{'color':'var(--gold)'}}>Marulić</b> · Split · 1450.–1524.<br />Judita 1501./1521. · 6 pjevanja · 2126 dvanaesteraca<br /><em>Oloferno = Turci; Judita = Hrvatska</em></div>
            <div><b style={{'color':'var(--gold)'}}>Marin Držić</b> · Dubrovnik · 1508.–1567.<br />Novela od Stanca 1550. · 1 čin 7 prizora<br /><em>farsa · mlado vs staro · obvezatno 2026.</em></div>
            <div><b style={{'color':'var(--gold)'}}>Hektorović</b> · Hvar · 1487.–1572.<br />Ribanje 1556. · ep/putopis/ekloga/poslanica<br /><em>bugarštice · realizam · Hvar→Brač→Šolta</em></div>
            <div><b style={{'color':'var(--gold)'}}>Zoranić</b> · Zadar · ~1508.–1569.<br />Planine ~1543./1569. · 24 poglavlja · proza+stih<br /><em>Perivoj od Slave · rasuta bašćina · prvi hrv. roman</em></div>
            <div><b style={{'color':'var(--gold)'}}>Menčetić</b> · Dubrovnik · 1457.–1527.<br />Blažen čas i hip · I. gen. petrarkizma<br /><em>svi stadiji ljubavi · dvostruki dvanaesterac</em></div>
            <div><b style={{'color':'var(--gold)'}}>Lucić</b> · Hvar · 1485.–1553.<br />Robinja 1530. · Jur nijedna na svit vila<br /><em>II. gen. petrarkizma · osmesterac · prva hrv. drama</em></div>
          </div>
        </div>

        <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">01 · Obilježja hrvatske renesanse</div><div className="sec-line"></div></div>

        <div className="box-key">
          <div className="box-key-lbl">⚡ 5 temeljnih obilježja za maturu</div>
          <div className="box-key-txt">
            <b>(1) Humanizam</b> — čovjek (ne Bog) u centru. Zanimanje za antiku, latinsku i grčku književnost. Pisci su obrazovani u Italiji. <b>(2) Narodni jezik</b> — piše se na <em>narodnom, a ne latinskom</em> jeziku (iako Marulić piše i na latinskom). <b>(3) Petrarkizam</b> — dominantan lirski pravac: ljubavna lirika po uzoru na Petrarcu, motivi nesretne ljubavi, „gospoja". <b>(4) Pastorala</b> — idealizirani seosko-pastirski prostor kao scena za ljubavne radnje i filozofske razgovore. <b>(5) Dvostruko rimovani dvanaesterac</b> — standardni stih hrv. renesanse.
          </div>
        </div>

        <div className="tbl">
          <div className="cr"><div className="ck br">OBILJEŽJE</div><div className="cv b">OPIS</div><div className="cv b">PRIMJER iz hrv. renesanse</div></div>
          <div className="cr"><div className="ck go">Humanizam</div><div className="cv">Filozofija koja čovjeka stavlja u središte, orijentacija na antičke uzore</div><div className="cv">Marulić u Italiji uči od Vergilija i Cicerona → piše <em>Davidiadu</em> na latinskom + <em>Juditu</em> na hrvatskom</div></div>
          <div className="cr"><div className="ck t">Petrarkizam</div><div className="cv">Ljubavna lirika po uzoru na Petrarcu — nesretna ljubav, gospoja, Amor</div><div className="cv">Menčetić: <em>Blažen čas i hip</em> (prepjev Petrarce u dvanaesterac); Lucić: <em>Jur nijedna na svit vila</em></div></div>
          <div className="cr"><div className="ck re">Pastorala</div><div className="cv">Idiličan pejzaž, pastiri/ribari, ljubavni razgovori, beg od civilizacije</div><div className="cv">Džore Držić: <em>Radmio i Ljubmir</em>; Hektorović: <em>Ribanje</em> kao ribarska ekloga</div></div>
          <div className="cr"><div className="ck pa">Narodni jezik</div><div className="cv">Pisanje na lokalnom idiomu, a ne latinskom — demokratizacija književnosti</div><div className="cv">Judita = splitska čakavština; Novela od Stanca = dubrovački idiom; Planine = čakavsko-štokavski</div></div>
          <div className="cr"><div className="ck g">Dvostruki 12-rac</div><div className="cv">12-složni stih, cesura po 6., rima AA BB ili AB AB — standardni stih epohe</div><div className="cv">Judita, Ribanje, Robinja, Vazetje Sigeta, Novela od Stanca — svi koriste ovaj stih</div></div>
        </div>

        <div className="box-int">
          <div className="box-int-lbl">🌍 Europski uzori hrv. pisaca</div>
          <div className="box-int-txt">
            <b>Marulić</b> → Vergilije (<em>Eneida</em>), Horacije, Biblija. Piše u tradiciji rimskog epa.<br />
            <b>Menčetić, Džore Držić</b> → Francesco Petrarca (<em>Kanconijer</em>). Čisti petrarkistički repertoar bez formalne discipline soneta.<br />
            <b>Lucić</b> → Petrarca + neoplatonisti (Ficino, Bembo). Ljubav kao duhovna snaga.<br />
            <b>Zoranić</b> → Jacopo Sannazaro (<em>L'Arcadia</em>), Boccaccio (<em>Ameto</em>). Pastoralni roman kao žanr.<br />
            <b>Marin Držić</b> → Plautus (<em>Aulularija</em> → <em>Skup</em>), talijanska commedia dell'arte, Boccaccio (<em>Dekameron</em> kao uzor za situacijsku komiku).<br />
            <b>Hektorović</b> → Vergilije (<em>Ekloge</em>, <em>Georgike</em>) za idilični ton, ali ga nadilazi realizmom.
          </div>
        </div>

        <div className="box-warn">
          <div className="bw-ico">⚠️</div>
          <div className="bw-body">
            <div className="bw-title">Turska opasnost kao stalni kontekst</div>
            <div className="bw-txt">Sva renesansna književnost nastaje u sjeni <strong>turske opasnosti</strong>. Marulić u Juditi alegorički potiče otpor; Hektorović opisuje opustjele krajeve; čak i Zoranićev putopis nosi tugu za „rasutom bašćinom". Ne zaboravi ovaj kontekst u eseju — <em>to je lokalna specifičnost hrv. renesanse</em> koja je razlikuje od talijanske.</div>
          </div>
        </div>

        {/* SEC 02 */}

        <div className="box-key">
          <div className="box-key-lbl">🔑 Humanizam — 3 aspekta koji ulaze u esej</div>
          <div className="box-key-txt">
            <b>(1) Obrazovni humanizam:</b> Pisci su studirani na antici — čitaju Cicerona, Vergilija, Horacija. Marulić piše latinskim i citira antičke autore. Humanizam nije ateizam — to je orijentacija na antičku mudrost u kršćanskom okviru.<br />
            <b>(2) Kulturni humanizam:</b> Vjera da književnost može prenijeti vrijednosti i oblikovati zajednicu. Marulić piše Juditu za „sunarodnjake" — kao moralni i politički apel. Hektorović bilježi bugarštice jer smatra da su kulturna vrijednost.<br />
            <b>(3) Demokratski humanizam:</b> Hektorović sjedi s ribarima kao jednakima — ne promatrač nego sugovornik. To je humanistički program: ni jedan čovjek nije samo „objekt" nego potencijalni sugovornik i nosač vrijednosti.
          </div>
        </div>

        <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">02 · Kronološki pregled</div><div className="sec-line"></div></div>

        <div className="tl">
          <div className="tl-item">
            <div className="tl-dot">1</div>
            <div className="tl-body">
              <div className="tl-year">1450.–1524.</div>
              <div className="tl-title">Marko Marulić — „otac hr. književnosti"</div>
              <div className="tl-desc">Split. Ep <em>Judita</em> dovršena <strong>1501.</strong>, tiskana 1521. — prvi veliki ep na hrvatskom. Alegorija otpora Turcima. Piše i latinsku prozu (Institucija, Davidijada).</div>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-dot">2</div>
            <div className="tl-body">
              <div className="tl-year">1487.–1572.</div>
              <div className="tl-title">Petar Hektorović — realistični putopisac</div>
              <div className="tl-desc">Hvar. <em>Ribanje i ribarsko prigovaranje</em> (1556.) — <strong>prvi hrv. realistički opis putovanja</strong>. Zapisuje narodne pjesme i bugarštice.</div>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-dot">3</div>
            <div className="tl-body">
              <div className="tl-year">~1508.–1569.</div>
              <div className="tl-title">Petar Zoranić — prvi hrv. romanopisac</div>
              <div className="tl-desc">Zadar. <em>Planine</em> (nastale oko 1543., tisk. 1569.) — <strong>prvi hrv. roman</strong>. Alegorija lošeg stanja hrv. književnosti (<em>Perivoj od Slave</em>).</div>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-dot">4</div>
            <div className="tl-body">
              <div className="tl-year">1457.–1527. / 1461.–1501.</div>
              <div className="tl-title">Menčetić i Džore Držić — petrarkisti I. generacije</div>
              <div className="tl-desc">Dubrovnik. Sačuvano u <em>Zborniku Nikše Ranjine</em> (1507.) — 820 pjesama. Menčetić: ljubav od prvog pogleda do razočaranja. Džore Držić: idealizacija ljubavi kao fenomena.</div>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-dot">5</div>
            <div className="tl-body">
              <div className="tl-year">1485.–1553.</div>
              <div className="tl-title">Hanibal Lucić — prva hrv. svjetovna drama</div>
              <div className="tl-desc">Hvar. <em>Robinja</em> (1530.) — <strong>prva hrv. drama s razrađenom radnjom</strong>. Likovi: robinja (kći bana Vlaska), vitez Derenčin.</div>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-dot">6</div>
            <div className="tl-body">
              <div className="tl-year">1508.–1567.</div>
              <div className="tl-title">Marin Držić — „Vidra" — najveći hrv. dramaturg</div>
              <div className="tl-desc">Dubrovnik. <em>Novela od Stanca</em> (1550.) — farsa, pokladna igra. <em>Dundo Maroje</em> (1551.) — najstarija hrv. prozna drama. <em>Skup</em> (1556.) — komedija po uzoru na Plauta. <strong>Obvezatno 2026.</strong></div>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-dot">★</div>
            <div className="tl-body">
              <div className="tl-year">1550.–1556.</div>
              <div className="tl-title">Marin Držić — zlatno desetljeće hrv. komedije</div>
              <div className="tl-desc">U samo 6 godina Držić piše sve što ga čini besmrtnim: <em>Novela od Stanca</em> (1550.), <em>Dundo Maroje</em> (1551.), <em>Skup</em> i <em>Tripče de Utolče</em> (1556.). <strong>Najprodorniji dramski period u hrv. renesansi.</strong></div>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-dot">★</div>
            <div className="tl-body">
              <div className="tl-year">1556.–1569.</div>
              <div className="tl-title">Hektorović i Zoranić — kasni cvat Dalmacije</div>
              <div className="tl-desc"><em>Ribanje</em> (1556.) i <em>Planine</em> (tisk. 1569.) izlaze iz tiska gotovo istovremeno. Hvarska i zadarska škola daju svoja ključna djela. Patriotski ton je naglašeniji.</div>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-dot">6</div>
            <div className="tl-body">
              <div className="tl-year">1566.–1584.</div>
              <div className="tl-title">Kraj generacije — Siget i Vazetje</div>
              <div className="tl-desc">1566.: opsada i pad Sigeta. Marin Držić umire 1567. u Veneciji. 1584.: Krnarutić tiska <em>Vazetje Sigeta</em>. <strong>Krug se zatvara: počelo s alegorijom (Judita, 1501.) — završava povijesnim epom (Vazetje, 1584.).</strong></div>
            </div>
          </div>
        </div>

        {/* SEC 03 */}

        {/* Datumska tablica — kompletna kronologija */}


        <div className="box-key">
          <div className="box-key-lbl">⚡ Brzi datumski podsjetnik — sve u jednom retku</div>
          <div className="box-key-txt" style={{'fontSize':'12.5px','lineHeight':'2'}}>
            <b>1450.</b> Marulić r. · <b>1457.</b> Menčetić r. · <b>1461.</b> Džore Držić r. · <b>1485.</b> Lucić r. · <b>1487.</b> Hektorović r. · <b>~1508.</b> Zoranić r. · <b>1508.</b> Marin Držić r. · <b>1515.</b> Krnarutić r. ·
            <b>1501.</b> Judita dovršena · <b>1507.</b> Ranjinin zbornik + Institucija · <b>1521.</b> Judita tiskana · <b>1526.</b> Bitka kod Mohača ·
            <b>1530.</b> Robinja (Lucić) · <b>1548.</b> Pomet-družina · <b>1550.</b> Novela od Stanca ★ · <b>1551.</b> Dundo Maroje · <b>1556.</b> Ribanje + Skup · <b>1566.</b> Siget + Kosmografska poslanica · <b>1567.</b> Marin Držić † · <b>~1543./1569.</b> Planine · <b>1584.</b> Vazetje Sigeta
          </div>
        </div>

        {/* SEC 02b — Europski kontekst renesanse */}
        <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">02b · Europski kontekst — što se događalo u Europi</div><div className="sec-line"></div></div>

        <div className="box-int">
          <div className="box-int-lbl">🌍 Renesansa u Europi — 5 ključnih događaja</div>
          <div className="box-int-txt">
            Hrv. renesansa ne nastaje u vakuumu — ona je odgovor na europska gibanja koja su transformirala kulturu 15.–16. st. Svaki od ovih događaja ima odjek u hrv. književnosti.
          </div>
        </div>

        <div className="tl">
          <div className="tl-item">
            <div className="tl-dot">1</div>
            <div className="tl-body">
              <div className="tl-year">1440-e</div>
              <div className="tl-title">Gutenbergov tiskarski stroj</div>
              <div className="tl-desc">Tisak knjiga postaje moguć. <em>Judita</em> (tiskana 1521.) i <em>Planine</em> (tiskane 1569.) su hrv. primjeri. <b>Bez tiska — nema masovne književnosti.</b> Marulićeva <em>Institucija</em> je prevedena i tiskana diljem Europe upravo zahvaljujući tisku.</div>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-dot">2</div>
            <div className="tl-body">
              <div className="tl-year">1453.</div>
              <div className="tl-title">Pad Konstantinopola — grčki učenjaci bježe na Zapad</div>
              <div className="tl-desc">Grčki humanisti donose manuscripte antičke književnosti u Italiju. Procvat studija grčkog i latinskog. <b>Hrv. pisci u Italiji imaju pristup antičkim tekstovima</b> — to oblikuje Marulića i Lucića.</div>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-dot">3</div>
            <div className="tl-body">
              <div className="tl-year">1492.</div>
              <div className="tl-title">Otkriće Amerike — geografska revolucija</div>
              <div className="tl-desc">Zemlja je veća nego što se mislilo — nova spoznaja pomiče granice mogućeg. Humanisti pitaju: <em>što još ne znamo?</em> Duh istraživanja i curiositas (znatiželja) postaje intelektualni ideal — odjek u Hektorovićevom putopisu.</div>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-dot">4</div>
            <div className="tl-body">
              <div className="tl-year">1517.</div>
              <div className="tl-title">Lutherova Reforma — kriza Crkve</div>
              <div className="tl-desc">Martin Luther prikovava 95 teza. Europa se dijeli na katolike i protestante. <b>Hrv. pisci ostaju katolički</b> — ali Reformacija potiče pisanje na narodnim jezicima (Luther piše i prevodi na njemački). Marulić je čak pozvan da pomiri Reformaciju s katolicizmom.</div>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-dot">5</div>
            <div className="tl-body">
              <div className="tl-year">1526./1527.</div>
              <div className="tl-title">Bitka kod Mohača + osmansko napredovanje</div>
              <div className="tl-desc">Ugarska propada, Hrvatska ostaje kao <em>reliquiae reliquiarum</em> (ostaci ostataka). Turska opasnost nije apstraktna — to je egzistencijalna prijetnja. <b>Svaki hrv. pisac 16. st. piše u sjeni ovog poraza.</b> Zoranićeva „rasuta bašćina" je odgovor na Mohač.</div>
            </div>
          </div>
        </div>

        <div className="box-key">
          <div className="box-key-lbl">🧠 Filozofija renesanse — što su pisci čitali</div>
          <div className="box-key-txt">
            <b>Neoplatonizam</b> (Ficino, Pico della Mirandola): ljubav kao duhovna snaga prema Bogu. Utjecaj na Lucića — ljubav nije samo tjelesna. <b>Stoicizam</b>: mudraci vladaju strastima. Utjecaj na Marulića — Judita pobjeđuje zahvaljujući samokontroli i vjeri. <b>Aristotelova poetika</b>: tragedija, komedija, katarza — uvodi se u kazalište. Utjecaj na Držića — Skup je aristotelova komedija. <b>Ciceron</b>: retorika kao temelj humanističkog obrazovanja. Svi pisci educated u latinskom po Ciceronu. <b>Vergilijev rustični ideal</b>: priroda kao mjesto oporavka duše — Planine i Ribanje kao hrv. „Arcadia".
          </div>
        </div>

        <div className="box-int">
          <div className="box-int-lbl">🔎 Tri faze hrv. renesanse — razvoj i specifičnosti</div>
          <div className="box-int-txt">
            <b>FAZA 1 (1450.–1520.) — Humanistički temelji:</b> Marulić piše i na latinskom i na hrvatskom. Menčetić i Džore Držić razvijaju petrarkizam u Dubrovniku. Pretežno <em>lirska i epska</em> faza — kazalište još nije razvijeno.<br /><br />
            <b>FAZA 2 (1520.–1560.) — Procvat i diversifikacija:</b> Lucić piše prvu dramu s radnjom (1530.). Hektorović i Zoranić daju putopis/roman. Marin Držić stvara komedije — hrv. kazalište u punom zamahu. Turska opasnost naglašenija (Mohač, 1526.).<br /><br />
            <b>FAZA 3 (1560.–1584.) — Sumrak i komemoracija:</b> Marin Držić umire u Veneciji (1567.) kao politički izgnanik. Krnarutić piše Vazetje Sigeta (1584.) — komemoracija Zrinskog. Barok čeka iza ugla.
          </div>
        </div>

        <div className="box-key">
          <div className="box-key-lbl">📅 Ključni datumi — sve na jednom mjestu</div>
          <div className="box-key-txt" style={{'fontSize':'13px','lineHeight':'1.9'}}>
            <b>1450.–1524.</b> Marko Marulić, Split ·
            <b>1457.–1527.</b> Šiško Menčetić, Dubrovnik ·
            <b>1461.–1501.</b> Džore Držić, Dubrovnik ·
            <b>1485.–1553.</b> Hanibal Lucić, Hvar ·
            <b>1487.–1572.</b> Petar Hektorović, Hvar ·
            <b>~1508.–1569.</b> Petar Zoranić, Zadar ·
            <b>1508.–1567.</b> Marin Držić, Dubrovnik ·
            <b>1515.–1573.</b> Brne Krnarutić, Zadar<br />
            <b>1501.</b> Judita dovršena (tiskana 1521.) ·
            <b>1507.</b> Ranjinin zbornik (počinje sakupljati Nikša Ranjina) ·
            <b>1507.</b> Marulić: Institucija ·
            <b>1517.</b> Marulić: Davidijada ·
            <b>1522.</b> Marulić: Poslanica papi Hadrijanu VI. ·
            <b>1530.</b> Lucić: Robinja (praizvedba) ·
            <b>1548.</b> Pomet-družina — Pomet (izvedba, djelo izgubljeno) ·
            <b>1550.</b> Marin Držić: Novela od Stanca ·
            <b>1551.</b> Marin Držić: Dundo Maroje · Njarnjas-družina ·
            <b>1556.</b> Hektorović: Ribanje · Marin Držić: Skup ·
            <b>1566.</b> Marin Držić: Kosmografska poslanica ·
            <b>~1543./1569.</b> Zoranić: Planine ·
            <b>1584.</b> Krnarutić: Vazetje Sigeta grada
          </div>
        </div>

        <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">03 · Petrarkizam — ljubavna lirika</div><div className="sec-line"></div></div>

        <div className="box-int">
          <div className="box-int-lbl">💛 Što je petrarkizam</div>
          <div className="box-int-txt">
            <strong>Petrarkizam</strong> je pjesnički pravac po uzoru na Francesca Petrarcu (<em>Kanconijer</em>, 14. st.). Obilježja: <em>nesretna ljubav, idealizirana „gospoja" koja odbija pjesnika, bol i slast ljubavi, Amor/Kupido kao okrutni bog</em>. Hrv. petrarkisti <b>NE pišu sonete</b> — pišu <em>dvostruko rimovane dvanaesterce</em>. Dijele se na <b>dvije generacije</b>.
          </div>
        </div>

        <div className="tbl">
          <div className="cr"><div className="ck br">I. gen.</div><div className="cv"><b>Šiško Menčetić, Džore Držić</b> — Dubrovnik, <em>Ranjinin zbornik</em>. Čisto petrarkistički motivi, bez soneta. Menčetić: put ljubavi od prvog pogleda do razočaranja. Džore Držić: analizira ljubav kao apstrakciju, idealizira ženu.</div></div>
          <div className="cr"><div className="ck go">II. gen.</div><div className="cv"><b>Hanibal Lucić</b> — Hvar. Zadržava petrarkistički izraz, ali proširuje prema <em>neoplatonizmu</em>. Interes za sudbinu čovjeka. Pjesma <em>Jur nijedna na svit vila</em> — osmerci u 10 strofa (ne dvanaesterci!).</div></div>
          <div className="cr"><div className="ck t">RAZLIKA</div><div className="cv"><b>HR vs. IT petrarkizam</b>: Hrv. petrarkisti ne pišu sonete, pišu dvanaesterce. Manje formalna disciplina, više melodioznosti. Turska opasnost kao kontekstualni sloj kojeg nema u IT.</div></div>
        </div>

        <div className="box-signal">
          <div>
            <div className="box-signal-lbl">⚠️ Najčešća zamka na maturi</div>
            <div className="box-signal-txt"><b>Hrv. petrarkisti NE pišu sonete.</b> Petrarcu pišu sonete — hrv. petrarkisti pišu dvostruko rimovane dvanaesterce. Iznimka: Lucić u <em>Jur nijedna na svit vila</em> piše osmerce. Oba slučaja su <em>alternativa sonetu</em>, ne sonet.</div>
          </div>
        </div>

        {/* Primjeri stihova s analizom */}
        <div className="box-int">
          <div className="box-int-lbl">🔬 Menčetić — analiza stiha <em>Blažen čas i hip</em></div>
          <div className="box-int-txt">
            <em style={{'color':'var(--gold)'}}>„Blažen čas i hip ki te rodi i mati,<br />blažena kolipka ka te povi u sviti,<br />blažena ti ženska ka te doji i goji<br />i blažen taj zraci ki s tobom se smoji."</em><br /><br />
            <b>Analiza:</b> Anafora (<em>blažen/blažena</em> — ponavljanje u početku stiha) pojačava euforiju prvog pogleda. Dvostruko rimovani dvanaesterac (cesura po 6. slogu). Lirski subjekt slavi apsolutno sve što je vezano uz „gospoju" — od poroda do dojenja. <em>Senzualni idealizam</em> — gospoja je tjelesno opisana, ali idealizirana. Ovo je Menčetićev prepjev Petrarcinog soneta u hrv. dvanaesterac.
          </div>
        </div>

        <div className="box-int">
          <div className="box-int-lbl">🔬 Lucić — analiza stiha <em>Jur nijedna na svit vila</em></div>
          <div className="box-int-txt">
            <em style={{'color':'var(--gold)'}}>„Jur nijedna na svit vila<br />ljuvenim me ognjem gori,<br />ka bi meni povoljna bila,<br />da mi srce sav dan gori."</em><br /><br />
            <b>Analiza:</b> <strong>Osmesterac</strong> (8 slogova) — odmak od dvanaesterca. Ukrštena rima (ABAB) u prvim 4, obgrljena (ABBA) u sljedećim 4 stihovima svake strofe. <em>Neoplatonistički ton</em> — nijedno zemaljsko biće ne može zadovoljiti lirski subjekt, jer on traži nezemaljsku savršenost. Lucić je dalje od senzualnosti Menčetića — bliže duhovnom idealu. <b>Razlika I. vs. II. gen.:</b> Menčetić žudi za konkretnom gospojom; Lucić tuguje što ne postoji savršena.
          </div>
        </div>


        <div className="tbl">
          <div className="cr"><div className="ck br" style={{'minWidth':'110px'}}>KATEGORIJA</div><div className="cv b">I. GENERACIJA<br /><small>Menčetić, Džore Držić · kraj 15. st.</small></div><div className="cv b">II. GENERACIJA<br /><small>Lucić · poč. 16. st.</small></div></div>
          <div className="cr"><div className="ck go" style={{'minWidth':'110px'}}>Centar</div><div className="cv">Dubrovnik</div><div className="cv">Hvar</div></div>
          <div className="cr"><div className="ck t" style={{'minWidth':'110px'}}>Ton</div><div className="cv">Senzualan, emotivan, strastven — svi stadiji ljubavnog bola</div><div className="cv">Filozofičan, neoplatonistički — ljubav kao duhovna snaga</div></div>
          <div className="cr"><div className="ck re" style={{'minWidth':'110px'}}>Stih</div><div className="cv">Dvostruko rimovani dvanaesterac</div><div className="cv">Osmesterac (Lucić) — iznimka pravila</div></div>
          <div className="cr"><div className="ck pa" style={{'minWidth':'110px'}}>Gospoja</div><div className="cv">Idealizirana ali žuđena — tjelesnost je prisutna u opisu</div><div className="cv">Apstraktni ideal — savršenstvo koje na zemlji ne postoji</div></div>
          <div className="cr"><div className="ck g" style={{'minWidth':'110px'}}>Uzori</div><div className="cv">Petrarca (Kanconijer) — direktan prijevod/adaptacija</div><div className="cv">Petrarca + neoplatonisti (Ficino, Bembo) — složenija sinteza</div></div>
          <div className="cr"><div className="ck br" style={{'minWidth':'110px'}}>Drama</div><div className="cv">Džore Držić: <em>Radmio i Ljubmir</em> — prva pastoralna drama</div><div className="cv">Lucić: <em>Robinja</em> — prva hrv. drama s razrađenom radnjom</div></div>
          <div className="cr"><div className="ck go" style={{'minWidth':'110px'}}>Ključna razlika</div><div className="cv">Ljubav kao iskustvo koje se opisuje — autobiografski ton</div><div className="cv">Ljubav kao filozofski koncept koji se analizira — objektivni ton</div></div>
        </div>

        <div className="box-int">
          <div className="box-int-lbl">🧠 Neoplatonizam u lirici — što to znači u praksi</div>
          <div className="box-int-txt">
            Neoplatonizam (Ficino, Pico della Mirandola) tvrdi da je <strong>Ljepota emanacija Boga</strong> — što je nešto ljepše, to je bliže Božanskom Savršenstvu. Posljedica za ljubavnu liriku: <em>gospoja nije samo lijepa žena — ona je odraz Božanske Ljepote</em>. Lirski subjekt koji voli gospoju zapravo teži prema Bogu.<br /><br />
            <b>U Menčetića:</b> gospoja je žuđena kao žena — senzualnost je prisutna. <b>U Lucića:</b> gospoja je nedostižna jer ne može biti savršena — ni jedna zemaljska žena nije savršena kao Božanska Ljepota. Lucić tuguje što savršena gospoja <em>ne postoji</em>, ne što ga odbija. <em>To je razlika između senzualnog i duhovnog petrarkizma.</em>
          </div>
        </div>

        <div className="box-int">
          <div className="box-int-lbl">📊 Petrarca vs. hrv. petrarkisti — što je preuzeto, što izmijenjeno</div>
          <div className="box-int-txt">
            <b>Preuzeto od Petrarce:</b> tematika nesretne ljubavi, motiv „gospoje", Amor/Kupido kao okrutni bog, usporedba ljepote s prirodom, antiteze (bol i slast ljubavi), kontradikcija osjećaja (<em>„volim i mrzim"</em>).<br />
            <b>Izmijenjeno u hrv. kontekstu:</b> stih — <em>dvostruko rimovani dvanaesterac</em> umjesto soneta; jezik — lokalni idiomi umjesto toskanskog; ton — nešto melodiozniji, manje formalan; kontekst — u pozadini turska opasnost koje u Petrarce nema.<br />
            <b>Specifičnost I. gen.:</b> Menčetić i Džore Držić se razlikuju (<em>senzualnost vs. idealizacija</em>) — hrv. petrarkizam nije jedinstven.<br />
            <b>Specifičnost II. gen.:</b> Lucić uvodi neoplatonizam i mijenja stih (osmesterac) — evolucija, ne kopija.
          </div>
        </div>

        {/* SEC 04 */}
        <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">04 · Žanrovi hrv. renesanse</div><div className="sec-line"></div></div>

        <div className="sc-grid">
          <div className="sc">
            <span className="sc-ico hchip br">ŽAN.</span>
            <div className="sc-name">Ep (epos)</div>
            <div className="sc-desc"><em>Judita</em> (Marulić) — biblijsko-kršćanski ep. <em>Vazetje Sigeta grada</em> (Krnarutić) — prvi hrv. <strong>povijesni ep</strong>. Karakteristike: dvostruko rimovani dvanaesterci, 4–6 pjevanja, uzori Vergilije i Homerovi epovi.</div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip go">ŽAN.</span>
            <div className="sc-name">Roman i putopis</div>
            <div className="sc-desc"><em>Planine</em> (Zoranić) — <strong>prvi hrv. roman</strong>, mješavina proze i stiha. <em>Ribanje</em> (Hektorović) — putopis / ribarska ekloga / poslanica. Oba imaju alegorijsku dimenziju i patriotski ton.</div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip te">ŽAN.</span>
            <div className="sc-name">Pastorala</div>
            <div className="sc-desc">Idilični prostori, pastiri koji govore o ljubavi. <em>Radmio i Ljubmir</em> (Džore Držić) — <strong>prva hrv. pastoralna drama</strong>. Pisana u dvostruko rim. dvanaestercima. Uzor: Ekloge Vergilija.</div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip pa">ŽAN.</span>
            <div className="sc-name">Komedija i farsa</div>
            <div className="sc-desc"><em>Novela od Stanca</em> — <strong>farsa/pokladna igra</strong> (1 čin, 7 prizora). <em>Dundo Maroje</em> — prva hrv. prozna komedija (5 činova). <em>Skup</em> — plautovska komedija.</div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip re">ŽAN.</span>
            <div className="sc-name">Svjetovna drama</div>
            <div className="sc-desc"><em>Robinja</em> (Lucić) — <strong>prva hrv. drama s razrađenom radnjom</strong> i individualnim likovima. Tematizira tursku opasnost i trgovinu robljem. 3 čina, dvanaesterci.</div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip gr">ŽAN.</span>
            <div className="sc-name">Lirika / Zbornik</div>
            <div className="sc-desc"><em>Ranjinin zbornik</em> (1507.) — rukopisna zbirka 820 pjesama. Sakupio Nikša Ranjina. Autori: Menčetić, Džore Držić, Vetranović i dr. <strong>Svi pišu dvostruko rim. dvanaesterce</strong>.</div>
          </div>
        </div>

        {/* SEC 05 */}

        {/* SEC 04b — Epika i drama — detaljni usporedni pregled */}
        {/* Žanrovi — tablica s primjerima */}
        <div className="tbl">
          <div className="cr"><div className="ck br">ŽANR</div><div className="cv b">DEFINICIJA</div><div className="cv b">HRV. PRIMJER</div><div className="cv b">KLJUČNI POJMOVI</div></div>
          <div className="cr"><div className="ck go">Ep</div><div className="cv">Dugo narativno djelo u stihu, junak koji ostvaruje veliku misiju, invokacija muze, in medias res</div><div className="cv">Marulić: <em>Judita</em> (6 pjev., 2126 dvanaest.)</div><div className="cv">invokacija, in medias res, epski pripovijedač, alegorija</div></div>
          <div className="cr"><div className="ck t">Farsa</div><div className="cv">Kratka komična drama namijenjena pokladama — tipski likovi, gruba situacijska komika, bez moralne pouke</div><div className="cv">Držić: <em>Novela od Stanca</em> (1 čin, 7 prizora)</div><div className="cv">pokladna igra, komika situacije, tipski lik, karnevalska sloboda</div></div>
          <div className="cr"><div className="ck re">Komedija</div><div className="cv">Dramsko djelo s komičnim zapletom, razrađenim likovima, sretan kraj</div><div className="cv">Držić: <em>Dundo Maroje</em> (5 čin., proza), <em>Skup</em> (5 čin.)</div><div className="cv">commedia erudita, commedia dell'arte, zaplet, rasplet</div></div>
          <div className="cr"><div className="ck pa">Roman</div><div className="cv">Duže prozno (ili mješovito) narativno djelo s više likova i zapleta; u renesansi — žanrovski hibrid</div><div className="cv">Zoranić: <em>Planine</em> (~24 pogl., proza+stih)</div><div className="cv">pastoralni roman, alter ego, alegorija, žanrovski hibrid</div></div>
          <div className="cr"><div className="ck g">Putopis / ekloga</div><div className="cv">Opis stvarnog putovanja + idilični ton pastirskog/ribarskog prostora</div><div className="cv">Hektorović: <em>Ribanje</em> (ribarska ekloga + putopis + poslanica)</div><div className="cv">ekloga, poslanica, bugarštica, dokumentarni realizam</div></div>
          <div className="cr"><div className="ck br">Drama s radnjom</div><div className="cv">Drama s razrađenim zapletom, individualnim likovima i moralnom porukom</div><div className="cv">Lucić: <em>Robinja</em> (3 čina, 1530.)</div><div className="cv">individualizirani lik, sukob, rasplet, didaktika</div></div>
          <div className="cr"><div className="ck te">Petrarkistička lirika</div><div className="cv">Ljubavna lirska zbirka/pjesma, gospoja, nesretna ljubav, petrarkistički motivi</div><div className="cv">Menčetić: <em>Blažen čas i hip</em>; Lucić: <em>Jur nijedna na svit vila</em></div><div className="cv">petrarkizam, gospoja, Amor, dvostruki dvanaest., osmesterac</div></div>
          <div className="cr"><div className="ck go">Povijesni ep</div><div className="cv">Ep koji opjevava stvarni povijesni događaj (bitku, junaštvo) bez alegorije</div><div className="cv">Krnarutić: <em>Vazetje Sigeta grada</em> (1584.)</div><div className="cv">povijesni ep, Nikola Šubić Zrinski, Siget 1566., žrtva za domovinu</div></div>
        </div>


        <div className="box-key">
          <div className="box-key-lbl">📖 Primjeri stihova za svaki žanr</div>
          <div className="box-key-txt" style={{'fontSize':'13px','lineHeight':'1.9'}}>
            <b>Ep (Judita):</b> <em style={{'color':'var(--gold)'}}>„Libar Marka Marula Splićanina u kom se uzdarži istorija svete udovice Judit u versih harvacki složena..."</em> — epska invokacija i dvostruki dvanaesterac.<br />
            <b>Farsa (Novela od Stanca):</b> Dijalog bez pripovijedača — sve je situacija i razgovor. Dvostruki dvanaesterci daju ritmičnost čak i komičnim scenama.<br />
            <b>Petrarkistička lirika:</b> <em style={{'color':'var(--gold)'}}>„Blažen čas i hip ki te rodi i mati..."</em> — anafora, idealizacija, dvostruki dvanaesterac.<br />
            <b>Roman (Planine):</b> Mješavina proze i stiha — pripovijedanje se izmjenjuje s umješenim lirskim pjesmama vila i pastira.<br />
            <b>Putopis / ekloga (Ribanje):</b> Konkretni topografski opisi (Hvar, Brač, Šolta) + dijalozi ribara + bugarštice. Realizam bez alegorije.<br />
            <b>Drama s radnjom (Robinja):</b> Dijalozi koji razvijaju zaplet — Robinja i Derenčin razgovaraju, Turčin pregovara. Prva hrv. drama s pravim sukobom i rasplatom.
          </div>
        </div>

        <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">04b · Epika vs. drama — ključni kontrast</div><div className="sec-line"></div></div>

        <div className="tbl">
          <div className="cr"><div className="ck br" style={{'minWidth':'90px'}}>ASPEKT</div><div className="cv b">EPIKA (Judita, Planine, Ribanje)</div><div className="cv b">DRAMA (Novela, Dundo, Robinja)</div></div>
          <div className="cr"><div className="ck go" style={{'minWidth':'90px'}}>Pripovijedač</div><div className="cv">Epski pripovijedač / lirski subjekt / alter ego pisca</div><div className="cv">Nema pripovijedača — dijalog i scenska uputa (didaskalija)</div></div>
          <div className="cr"><div className="ck t" style={{'minWidth':'90px'}}>Tempo</div><div className="cv">Sporiji — opis, meditacija, alegorija u prvom planu</div><div className="cv">Brži — situacijska komika, kratke replike, akcija</div></div>
          <div className="cr"><div className="ck re" style={{'minWidth':'90px'}}>Publika</div><div className="cv">Čitatelj (privatno čitanje ili pjevano/recitacija)</div><div className="cv">Gledatelj — predstava na pokladnim svečanostima</div></div>
          <div className="cr"><div className="ck pa" style={{'minWidth':'90px'}}>Moral</div><div className="cv">Eksplicitni (Judita), alegorijski (Planine) ili odsutan (Ribanje)</div><div className="cv">Odsutan u farsi — prikazuje, ne prosuđuje</div></div>
          <div className="cr"><div className="ck g" style={{'minWidth':'90px'}}>Stih/proza</div><div className="cv">Uglavnom stih (dvanaesterac); Planine = mješavina</div><div className="cv">Stih (Novela, Robinja) ili proza (Dundo, Skup)</div></div>
        </div>

        <div className="box-warn">
          <div className="bw-ico">📌</div>
          <div className="bw-body">
            <div className="bw-title">Što se ne ispituje — ali korisno znati</div>
            <div className="bw-txt">NCVVO ne ispituje detaljne biografije pisaca ni puni tekst djela (samo ulomke). Ali za esej je korisno znati: <b>Lucićeva Robinja</b> nije obvezatna, ali je primjer prve hrv. drame s individualnim likovima — dobra za usporedni argument. <b>Vazetje Sigeta</b> (Krnarutić) nije obvezatno, ali je jedini hrv. <em>povijesni ep</em> — dobra za kontekstualizaciju. <em>Kosmografska poslanica</em> nije obvezatna, ali otkriva Držića kao politički angažiranog intelektualca — dobra za argumentaciju o Držićevoj kompleksnosti.</div>
          </div>
        </div>

        <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">05 · Usporedna tablica pisaca</div><div className="sec-line"></div></div>

        <div className="tbl">
          <div className="cr"><div className="ck br" style={{'minWidth':'80px'}}>PISAC</div><div className="cv"><b>Marko Marulić</b> · Split · 1450.–1524. · „otac hrv. književnosti"<br /><em>Judita</em> (1501.) — ep, 6 pjevanja, 2126 dvanaesteraca; alegorija otpora Turcima. <em>Davidijada</em>, <em>Institucija</em> — latinska proza.</div></div>
          <div className="cr"><div className="ck go" style={{'minWidth':'80px'}}>PISAC</div><div className="cv"><b>Petar Hektorović</b> · Hvar · 1487.–1572.<br /><em>Ribanje i ribarsko prigovaranje</em> (1556.) — ep/putopis/ekloga/poslanica. Zapisuje bugarštice i narodne pjesme. Put Hvar–Brač–Šolta.</div></div>
          <div className="cr"><div className="ck t" style={{'minWidth':'80px'}}>PISAC</div><div className="cv"><b>Petar Zoranić</b> · Zadar · ~1508.–1569.<br /><em>Planine</em> (nastale oko 1543., tisk. 1569.) — prvi hrv. roman. 24 poglavlja, mješavina proze i stiha. <em>Perivoj od Slave</em> — alegorija hrv. književnosti. Motiv „rasute bašćine".</div></div>
          <div className="cr"><div className="ck pa" style={{'minWidth':'80px'}}>PISAC</div><div className="cv"><b>Hanibal Lucić</b> · Hvar · 1485.–1553.<br /><em>Jur nijedna na svit vila</em> — lirika u osmercima, 10 strofa. <em>Robinja</em> (1530.) — prva hrv. svjetovna drama, 3 čina.</div></div>
          <div className="cr"><div className="ck re" style={{'minWidth':'80px'}}>PISAC</div><div className="cv"><b>Marin Držić</b> · Dubrovnik · 1508.–1567. · zvan „Vidra"<br /><em>Novela od Stanca</em> (1550.) — farsa/pokladna igra, 1 čin 7 prizora, dvanaesterci. <em>Dundo Maroje</em> (1551.) — prozna komedija, 5 činova. <em>Skup</em> (1556.) — po Plautu. <strong>★ OBVEZATNO 2026.</strong></div></div>
        </div>

        {/* SEC 05a — Književna središta */}
        <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">05a · Književna središta hrv. renesanse</div><div className="sec-line"></div></div>

        <div className="box-int">
          <div className="box-int-lbl">🗺️ Geografija hrv. renesanse</div>
          <div className="box-int-txt">
            Hrv. renesansa nije mogla nastati u kontinentalnoj Hrvatskoj — politička situacija bila je neprijateljska (Turci, građanske borbe). <strong>Procvjetala je u 5 obalnih i otočnih gradova</strong>, svaki sa specifičnim profilom.
          </div>
        </div>

        <div className="sc-grid">
          <div className="sc">
            <span className="sc-ico hchip br">SPLIT</span>
            <div className="sc-name">Marulićev Split</div>
            <div className="sc-desc">Domovina Marka Marulića (1450.–1524.) i kolijevka <em>Judite</em>. Splitska humanistička škola odgojila je Marulića. Splitska čakavština je književni jezik Judite. <b>Razlikovni element:</b> kombinacija humanističke obrazovanosti (latinska proza) i narodnog jezika (Judita).</div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip go">DUBROVNIK</span>
            <div className="sc-name">Dubrovačka renesansa</div>
            <div className="sc-desc"><strong>Centar hrv. renesansne književnosti</strong>. Slobodna republika s ekonomskim viškom omogućava pokroviteljstvo umjetnosti. Dom Menčetića, Džore Držića, Marina Držića. Razvija se kazališni život — <em>Pomet-družina, Njarnjas-družina</em> izvode komedije.</div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip te">HVAR</span>
            <div className="sc-name">Hvarska škola</div>
            <div className="sc-desc">Otočni kulturni centar. Domovina Petra Hektorovića (1487.–1572.) i Hanibala Lucića (1485.–1553.). Hvarska čakavština. Hektorović gradi Tvrdalj — utvrdu i kulturno središte. Lucić piše prvu hrv. svjetovnu dramu (<em>Robinja</em>).</div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip pa">ZADAR</span>
            <div className="sc-name">Zadarski krug</div>
            <div className="sc-desc">Sjeverni dalmatinski centar. Domovina Petra Zoranića (~1508.–1569.) i Brne Krnarutića (1515.–1573.). Tema turske opasnosti je naglašena (Vazetje Sigeta grada). Mješavina čakavštine i štokavštine.</div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip re">ŠIBENIK</span>
            <div className="sc-name">Šibenska tradicija</div>
            <div className="sc-desc">Manji ali važan centar. Pisci poput Šižgorića (latinski humanizam) i pjesnici 16. st. Manje produktivan u nacionalnoj književnosti, ali važan za latinski humanizam.</div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip gr">KORČULA · BRAČ</span>
            <div className="sc-name">Otočni glasovi</div>
            <div className="sc-desc">Manji otoci s lokalnom književnom produkcijom. Petar Hektorović u <em>Ribanju</em> spominje Brač i Šoltu — pejzaž centralne Dalmacije postaje književni prostor.</div>
          </div>
        </div>

        {/* SEC 05b — Dubrovačko kazalište */}
        <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">05b · Dubrovačko kazalište 16. st.</div><div className="sec-line"></div></div>

        <div className="box-key">
          <div className="box-key-lbl">🎭 Kazališni život u Dubrovačkoj Republici</div>
          <div className="box-key-txt">
            Dubrovnik 16. st. je <strong>kazališni grad</strong>. Komedije i farse izvode se na pokladnim svečanostima, na vjenčanjima, u privatnim kućama vlastele. Glavna mjesta: <em>Knežev dvor, Pred Dvorom, Dominikanska crkva</em>. Glume <b>amaterske družine vlastele i obrtnika</b>: <em>Pomet-družina</em> (1548.) izvodi izgubljenu Pometovu komediju, kasnije <em>Njarnjas-družina</em> (1551.) izvodi <em>Dunda Maroja</em>. <em>Bez stalnog kazališta</em> — sve je prigodno i karnevalsko.
          </div>
        </div>

        <div className="box-warn">
          <div className="bw-ico">🎪</div>
          <div className="bw-body">
            <div className="bw-title">Pokladne svečanosti — kontekst Novele od Stanca</div>
            <div className="bw-txt">Poklade su <strong>razdoblje karnevalske slobode</strong> prije korizme. Hijerarhija se preokreće, smiju se sve šale, dopušteno je ono što inače nije. <em>Novela od Stanca</em> je <b>pokladna igra</b> — pisana za baš taj kontekst. Dubrovački mladići varaju Stanca jer im to <em>karnevalske slobode</em> dopuštaju. Bez razumijevanja poklada — Novela djeluje grubo. S razumijevanjem — to je farsalna karnevalska komedija.</div>
          </div>
        </div>

        {/* SEC 06 */}
        <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">06 · Hrv. renesansa vs. talijanska renesansa</div><div className="sec-line"></div></div>

        <div className="tbl">
          <div className="cr"><div className="ck br">TEMA</div><div className="cv b">Hrv. renesansa</div><div className="cv b">Talijanska renesansa</div></div>
          <div className="cr"><div className="ck go">Stih</div><div className="cv">Dvostruko rimovani dvanaesterac (AA BB ili AB AB)</div><div className="cv">Sonet (14 stihova), tercine, ottava rima</div></div>
          <div className="cr"><div className="ck t">Lirika</div><div className="cv">Petrarkistički motivi <em>bez</em> soneta — melodiozniji, narodniji</div><div className="cv">Sonet po Petrarci — stroga formalna disciplina</div></div>
          <div className="cr"><div className="ck pa">Kontekst</div><div className="cv">Turska opasnost, patriotski apeli, „rasuta bašćina"</div><div className="cv">Građanski humanizam, Medici, politika gradova-država</div></div>
          <div className="cr"><div className="ck re">Jezik</div><div className="cv">Čakavski, štokavski, dubrovački idiom — nije normiran</div><div className="cv">Toskansko narječje — Dante, Petrarca, Boccaccio kao norme</div></div>
          <div className="cr"><div className="ck g">Dramu</div><div className="cv">Farsa i komedija — Držić; pastorala — Džore Držić, Lucić</div><div className="cv">Commedia erudita, pastorala — Ariosto, Tasso</div></div>
        </div>

        <div className="box-signal">
          <div>
            <div className="box-signal-lbl">💡 Ključna razlika: Marulić vs. Držić</div>
            <div className="box-signal-txt">Marulić piše <b>ep s biblijsko-kršćanskim temama</b>, namijenjen evangelizaciji i borbi protiv Turaka. Držić piše <b>komediju i farsu</b>, namijenjen dubrovačkim pokladnim svečanostima — komentar lokalnog društva, opreka starosti i mladosti. Oba su „oci" hrv. književnosti u različitim žanrovima.</div>
          </div>
        </div>

        {/* SEC 07 — Jezik hrv. renesanse */}

        <div className="tbl">
          <div className="cr"><div className="ck br" style={{'minWidth':'110px'}}>ASPEKT</div><div className="cv b">TALIJANSKA RENESANSA</div><div className="cv b">HRVATSKA RENESANSA</div></div>
          <div className="cr"><div className="ck go" style={{'minWidth':'110px'}}>Kontekst</div><div className="cv">Procvat, ekonomski rast, gradovi-države, Medici kao mecene</div><div className="cv">Turska prijetnja, gubitak teritorija, nema centralnog mecenata</div></div>
          <div className="cr"><div className="ck t" style={{'minWidth':'110px'}}>Ton</div><div className="cv">Optimistički — čovjek je mjera svih stvari, sloboda, ljepota</div><div className="cv">Melankoličan, patriotski, egzistencijalno ugrožen</div></div>
          <div className="cr"><div className="ck re" style={{'minWidth':'110px'}}>Lirika</div><div className="cv">Sonet (14 stihova, stroga shema) — od Petrarce do Tassa</div><div className="cv">Dvostruki dvanaesterac (tradicija začinjavaca), iznimno osmesterac</div></div>
          <div className="cr"><div className="ck pa" style={{'minWidth':'110px'}}>Jezik</div><div className="cv">Toskansko narječje → standardni talijanski (Dante, Petrarca, Boccaccio)</div><div className="cv">Lokalni idiomi: čakavski (Split, Hvar), štokavski (Zadar), dubrovački</div></div>
          <div className="cr"><div className="ck g" style={{'minWidth':'110px'}}>Kazalište</div><div className="cv">Svilene dvorane, stalna kazališta, profesionalni glumci</div><div className="cv">Pokladne svečanosti, amaterske družine vlastele, bez stalnog kazališta</div></div>
          <div className="cr"><div className="ck br" style={{'minWidth':'110px'}}>Dominantna tema</div><div className="cv">Humanizam, neoplatonizam, ljepota, znanje, individua</div><div className="cv">Turska opasnost, domoljublje, rasuta bašćina, ljubav i bol</div></div>
          <div className="cr"><div className="ck go" style={{'minWidth':'110px'}}>Europski doseg</div><div className="cv">Vodeći centar — sav ostali europski humanizam gleda na Italiju</div><div className="cv">Jedina iznimka: Marulić — <em>Institucija</em> prevedena na sve europske jezike</div></div>
        </div>

        <div className="box-int">
          <div className="box-int-lbl">⚖️ Zajednički imenitelji — što je stvarno preuzeto</div>
          <div className="box-int-txt">
            Unatoč razlikama, hrv. renesansa dijeli s talijanskom: <b>(1) humanistički latinitet</b> — pisci obrazovani na antičkim tekstovima (Vergilije, Ovidije, Ciceron). <b>(2) Petrarkistički repertoar</b> — motivi ljubavne lirike su isti (gospoja, Amor, nesretna ljubav). <b>(3) Pastorala</b> — idiličan pejzaž kao literarni prostor. <b>(4) Uzori iz antike</b> — Plaut za dramu, Vergilije za ep, Sannazaro za roman. <em>Hrv. renesansa je kreativna recepcija, ne kopija — svaki žanr se prilagođava lokalnoj tradiciji i kontekstu.</em>
          </div>
        </div>


        <div className="box-key">
          <div className="box-key-lbl">📝 Gotove rečenice za usporedbu hrv. i tal. renesanse u eseju</div>
          <div className="box-key-txt">
            <em>„Talijanska renesansa slavi čovjeka kao mjeru svih stvari; hrvatska renesansa ne može slaviti — ona tuguje. Dok Italija cvjeta u ekonomskoj i kulturnoj slobodi, Hrvatska umire u podijeljenom teritoriju i stalnoj turskoj prijetnji. Ta razlika nije slabost hrv. renesanse — to je njezina autentičnost."</em><br /><br />
            <em>„Petrarcu piše sonete jer ima slobodu forme i publike. Hrv. petrarkisti pišu dvostruke dvanaesterce jer nadograđuju vlastitu začinjavačku tradiciju. Oba su petrarkisti — ali različitih tradicija."</em><br /><br />
            <em>„Jedina hrv. renesansna figura poznata u Europi je Marulić — i to ne po Juditi (hrv.) nego po Instituciji (lat.). Što govori o statusu hrv. u europskom humanizmu 16. st."</em>
          </div>
        </div>

        <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">07 · Jezik hrvatske renesanse</div><div className="sec-line"></div></div>

        <div className="box-int">
          <div className="box-int-lbl">🗣️ Nije bio „jedan" hrvatski — tri idioma</div>
          <div className="box-int-txt">
            U 15.–16. st. <strong>ne postoji normirani hrvatski standard</strong>. Pisci pišu lokalnim govorima — onim koji im je zavičajni. Tri idioma su prisutna u renesansnoj književnosti: <b>čakavski</b> (Split, Hvar, dalmatinski otoci), <b>štokavski</b> (Zadar, kontinentalna Dalmacija) i <b>dubrovački idiom</b> (koji je mješavina štokavice s čakavskim i talijanskim elementima). Svaki pisac je ujedno i svjedok svog lokalnog govora.
          </div>
        </div>

        <div className="tbl">
          <div className="cr"><div className="ck br" style={{'minWidth':'110px'}}>IDIOM</div><div className="cv b">PISCI</div><div className="cv b">KARAKTERISTIKE</div></div>
          <div className="cr"><div className="ck go" style={{'minWidth':'110px'}}>Čakavski</div><div className="cv">Marulić (Split), Hektorović (Hvar), Lucić (Hvar)</div><div className="cv"><em>Judita</em> pisana splitskom čakavštinom. Marulić u posveti navodi: „versih harvacki složena". Stariji, arhaičniji govor — bliže latinskom leksiku.</div></div>
          <div className="cr"><div className="ck t" style={{'minWidth':'110px'}}>Štokavski</div><div className="cv">Zoranić (Zadar), Krnarutić (Zadar)</div><div className="cv">Mješavina čakavsko-štokavska u Zoranićevim <em>Planinama</em>. Zadarski pisci na granici dijalekata.</div></div>
          <div className="cr"><div className="ck re" style={{'minWidth':'110px'}}>Dubrovački idiom</div><div className="cv">Menčetić, Džore Držić, Marin Držić</div><div className="cv">Štokavska osnova s čakavskim i talijanskim elementima. <strong>Postaje de facto književni standard</strong> — Dubrovnik kao kulturni centar nameće svoj idiom kao „prestižni govor".</div></div>
        </div>

        <div className="box-key">
          <div className="box-key-lbl">⚡ Zašto to znaš za maturu</div>
          <div className="box-key-txt">
            Ispit može pitati <b>na kojem je jeziku/narječju napisano određeno djelo</b> ili usporediti jezičnu situaciju hrv. renesanse s kasnijim standardiziranjem. Ključne tvrdnje: <em>Judita</em> = splitska čakavština; <em>Ranjinin zbornik</em> = dubrovački idiom; <em>Dundo Maroje</em> = prozna dubrovačka štokavica. Sve su to <b>lokalni govori</b>, nije „standardni" hrv. — standardizacija dolazi tek u 19. st. s Preporodom (Vuk Stefanović Karadžić, Gaj, Babukić).
          </div>
        </div>

        <div className="box-warn">
          <div className="bw-ico">⚡</div>
          <div className="bw-body">
            <div className="bw-title">Latinski vs. narodni jezik — ključna napetost</div>
            <div className="bw-txt">Humanisti 15.–16. st. pišu <strong>i latinski i narodni jezik</strong>. Marulić je savršen primjer: <em>Institucija</em> na latinskom (za europsku publiku), <em>Judita</em> na hrvatskom (za domaću). <b>Paradoks:</b> Marulić je poznatiji u Europi po latinskim djelima. U hrv. književnoj povijesti — Judita je „temelj". Isti autor, dva identiteta.</div>
          </div>
        </div>

        {/* SEC 08 — Ključni međuodnosi pisaca */}
        <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">08 · Međuodnosi — tko se oslanja na koga</div><div className="sec-line"></div></div>

        <div className="box-int">
          <div className="box-int-lbl">🔗 Književni lanac hrv. renesanse</div>
          <div className="box-int-txt">
            Hrv. renesansni pisci nisu izolirani — čitaju jedni druge, citiraju zajedničke uzore, grade tradiciju. Razumijevanje ovih veza pomaže u esejskim argumentima.
          </div>
        </div>

        <div className="sc-grid">
          <div className="sc">
            <span className="sc-ico hchip br">VEZA</span>
            <div className="sc-name">Marulić → Začinjavci</div>
            <div className="sc-desc">Marulić izrijekom kaže da nastavlja tradiciju <em>začinjavaca</em> (hrv. srednovjekovnih pjesnika-svećenika) — preuzima od njih dvostruko rimovani dvanaesterac. <b>Kontinuitet tradicije</b>: renesansa ne briše srednji vijek, nego ga integrira.</div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip go">VEZA</span>
            <div className="sc-name">Menčetić + Džore Držić → Lucić</div>
            <div className="sc-desc">I. generacija petrarkista (Dubrovnik) utire put II. generaciji. Lucić preuzima petrarkistički osjećajni repertoar, ali ga <em>neoplatonizira</em> i mijenja stih (osmesterac umjesto dvanaesterca). <b>Evolucija unutar tradicije</b>.</div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip te">VEZA</span>
            <div className="sc-name">Džore Držić → Marin Držić</div>
            <div className="sc-desc">Isti prezimen, isti grad — Džore je Marinov stric (ili daleki rod). Džore piše prvu hrv. pastoralnu dramu (<em>Radmio i Ljubmir</em>). Marin razvija dramu daleko složenije — farsa, komedija, satirična dimenzija. <b>Obiteljski + književni lanac</b>.</div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip pa">VEZA</span>
            <div className="sc-name">Zoranić → Perivoj od Slave → manifesti 19. st.</div>
            <div className="sc-desc">Zoranićev poziv na gradnju hrv. književnosti u <em>Planinama</em> (1543.) anticipira <b>Ilirski preporod</b> (1835.) za skoro 300 godina. <em>Motiv rasute bašćine</em> vraća se u rodoljubnoj poeziji Preporoda. <b>Zoranić kao preteča</b>.</div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip re">VEZA</span>
            <div className="sc-name">Hektorović — izolirani realist</div>
            <div className="sc-desc">Hektorović nema izravnih nastavljača u 16. st. — njegov <em>realizam</em> je prenapredna za svoje doba. Ali <b>bilježenje usm. tradicije</b> (bugarštice) utječe na romantičare koji 300 god. kasnije traže narodnu baštinu. <b>Budući, ne sadašnji utjecaj</b>.</div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip gr">VEZA</span>
            <div className="sc-name">Svi pisci → Turska opasnost</div>
            <div className="sc-desc">Jedini zajednički tema svih pisaca hrv. renesanse je <em>turska opasnost</em>. Marulić (alegorija), Hektorović (opis opustjelih krajeva), Zoranić (rasuta bašćina), Lucić (Robinja o ropstvu). <b>Lokalna specifičnost koja hrv. renesansu razlikuje od talijanske</b>.</div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip br">VEZA</span>
            <div className="sc-name">Marulić → Europska književnost</div>
            <div className="sc-desc">Marulić je <em>jedini hrv. renesansni pisac poznat u Europi za života</em>. <b>Institucija</b> (lat.) prevedena na sve europske jezike — 16 izdanja do 1600. Erasmo Roterdamski ga citira. To je most između hrv. i europske renesanse koji svi ostali hrv. pisci nemaju.</div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip go">VEZA</span>
            <div className="sc-name">Marin Držić → Europska komedija</div>
            <div className="sc-desc">Dok je za života bio nepoznat izvan Dubrovnika, Marin Držić je u 20. st. <em>„rehabilitiran"</em> kao jedan od prvih modernih europskih komediografa. Česte usporedbe s Moliéreom (koji piše 100 god. poslije). <b>Lokalni pisac s europskim značajem</b> — ali to su prepoznali tek kasniji generacije.</div>
          </div>
        </div>



        {/* SEC 09 — Matura savjeti */}
        <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">09 · Kako H11 izgleda na ispitu</div><div className="sec-line"></div></div>

        <div className="box-int">
          <div className="box-int-lbl">📝 Što NCVVO može pitati iz H11</div>
          <div className="box-int-txt">
            <b>Čitanje književnog teksta:</b> Ulomak iz Novele od Stanca (obvezatno!), eventualno ulomak iz Judite ili Planina. 5 pitanja višestrukoga izbora — razumijevanje, preneseno značenje, stilska sredstva.<br />
            <b>Teorija i povijest književnosti:</b> Definicija petrarkizma, bugarštica, pastorala, farsa, dvostruki dvanaesterac. Tko je autor kojeg djela. Koje je književno razdoblje.<br />
            <b>Školski esej:</b> Za 2026. esej NE može biti o Juditi (nije na popisu). Ali Novela od Stanca <em>nije</em> na popisu eseja — esej je o: Calderón, Goethe, Krleža, Marinković, Novak, Petrarca. H11 se može koristiti za <em>kontekstualizaciju</em> (usporedba s Marulićem ili Zoranićem unutar eseja o drugom djelu).
          </div>
        </div>

        <div className="sc-grid">
          <div className="sc">
            <span className="sc-ico hchip go">ISPIT</span>
            <div className="sc-name">Pitanja koja se ponavljaju</div>
            <div className="sc-desc"><em>Tko je autor Judite?</em> <em>Što je bugarštica?</em> <em>Pišu li hrv. petrarkisti sonete?</em> <em>Što je Perivoj od Slave?</em> <em>Što je farsa?</em> <em>Kada je Novela od Stanca praizvedena?</em> <em>Tko je „otac hrv. književnosti"?</em> — sve ovo se pojavljuje redovito.</div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip re">ISPIT</span>
            <div className="sc-name">Česte zamke</div>
            <div className="sc-desc"><em>Džore Držić ≠ Marin Držić.</em> <em>Hrv. petrarkisti ne pišu sonete.</em> <em>Judita nije tiskana 1501. nego 1521.</em> <em>Planine nisu roman u modernom smislu — žanrovski su hibrid.</em> <em>Hektorović nije dubrovački pisac — on je hvarski.</em></div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip br">ISPIT</span>
            <div className="sc-name">Ulomak iz Novele — što gledati</div>
            <div className="sc-desc">Kojeg je prizora? Koje opreke su aktivne (mlado–staro, vlastela–seljak)? Koji je ton (komičan, ironičan, blago tragičan)? Stilska sredstva: <em>dvanaesterac, dijalog, dramska ironija, komika situacije</em>. Veza s cjelinom.</div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip te">ISPIT</span>
            <div className="sc-name">Za napredni odgovor</div>
            <div className="sc-desc">Poveži H11 s ostalim poglavljima: Novela od Stanca i Kafka (apsurd prijevare), Marulić i Mažuranić (ep i domoljublje), petrarkizam i modernistička lirika (Šimić, Ujević — odmak od petrarkizma). <em>Interdisciplinarni odgovor = veći broj bodova.</em></div>
          </div>
        </div>



        {/* SEC 09b — Ključni kontrasti za esej */}
        <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">09b · Ključni kontrasti hrv. renesanse</div><div className="sec-line"></div></div>

        <div className="box-int">
          <div className="box-int-lbl">⚖️ 8 kontrasta koji ulaze u svaki esej</div>
          <div className="box-int-txt">
            Ispit voli usporedbu. Svaki od ovih kontrasta može biti <strong>teza eseja, argument ili zaključna misao</strong>. Zapamti ih kao parove.
          </div>
        </div>

        <div className="tbl">
          <div className="cr"><div className="ck br" style={{'minWidth':'130px'}}>KONTRAST</div><div className="cv b">STRANA A</div><div className="cv b">STRANA B</div></div>
          <div className="cr"><div className="ck go" style={{'minWidth':'130px'}}>Alegorija vs. realizam</div><div className="cv">Marulić (<em>Judita</em>): stvarnost kodirana u biblijsku priču</div><div className="cv">Hektorović (<em>Ribanje</em>): stvarnost prikazana izravno — more, ribari, bugarštice</div></div>
          <div className="cr"><div className="ck t" style={{'minWidth':'130px'}}>Moral vs. bez morala</div><div className="cv">Marulić: eksplicitan kršćanski moral — pobožnost pobjeđuje; Lucić: ljubav vodi k Bogu</div><div className="cv">Držić (<em>Novela</em>): farsa prikazuje, ne prosuđuje — nema moralne pouke</div></div>
          <div className="cr"><div className="ck re" style={{'minWidth':'130px'}}>Ep vs. drama</div><div className="cv">Marulić (<em>Judita</em>): epska forma, narativni pripovijedač, alegorija</div><div className="cv">Držić (<em>Novela</em>): dramska forma, dijalog, situacijska komika</div></div>
          <div className="cr"><div className="ck pa" style={{'minWidth':'130px'}}>Latin vs. narodni jezik</div><div className="cv">Marulić piše latinskim za europsku publiku (<em>Institucija</em>)</div><div className="cv">Marulić piše hrvatskim za domaću publiku (<em>Judita</em>) — isti autor, dva identiteta</div></div>
          <div className="cr"><div className="ck g" style={{'minWidth':'130px'}}>Ljubav vs. domoljublje</div><div className="cv">Menčetić, Lucić: ljubavna tematika kao primarna</div><div className="cv">Zoranić (<em>Planine</em>): ljubav i domoljublje su nerazdvojivi — osobna tuga = nacionalna tuga</div></div>
          <div className="cr"><div className="ck br">Ideal vs. stvarnost</div><div className="cv">Pastoralni ideal: vile, ribari, idiličan krajoliz, ljubavni razgovori</div><div className="cv">Turska stvarnost: rasuta bašćina, opustjeli otoci, ropstvo (Lucić, <em>Robinja</em>)</div></div>
          <div className="cr"><div className="ck go">Sonet vs. dvanaesterac</div><div className="cv">Petrarca: sonet (14 stihova, toscanski idiom, stroga shema)</div><div className="cv">Hrv. petrarkisti: dvostruki dvanaesterac (tradicija začinjavaca, lokalni idiom)</div></div>
          <div className="cr"><div className="ck t">Mlado vs. staro</div><div className="cv">Mladići: lukavost, gradski kod, pokladna sloboda</div><div className="cv">Stanec: naivnost, tuga, seoska jednostavnost — žrtva karnevala</div></div>
        </div>

        <div className="box-key">
          <div className="box-key-lbl">📝 Rečenice za esej koje koriste kontraste</div>
          <div className="box-key-txt">
            <em>„Za razliku od Marulića koji kodira domoljubni apel u biblijsku alegoriju, Hektorović bilježi stvarnost izravno — oba su odgovori na istu prijetnju, ali suprotnih poetičkih strategija."</em><br />
            <em>„Dok Marulić u Juditi nudi eksplicitnu moralnu poruku (pobožnost pobjeđuje), Držić u Noveli od Stanca odbija moralizirati — farsa prikazuje, ne prosuđuje."</em><br />
            <em>„Zoranić u Planinama spaja ono što drugi hrv. renesansni pisci drže odvojenima: ljubavnu melankoliju i patriotski bol — u njemu su to iste emocije s različitim imenima."</em>
          </div>
        </div>

        {/* SEC 10 — Primjeri ispitnih pitanja s odgovorima */}
        <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">10 · Primjeri ispitnih pitanja s odgovorima</div><div className="sec-line"></div></div>

        <div className="box-int">
          <div className="box-int-lbl">✅ Vježbaj odgovoriti točno i precizno</div>
          <div className="box-int-txt">
            Ova pitanja su tipični oblici kakvi se pojavljuju u testu teorije i povijesti književnosti. Klikni svako pitanje da vidiš model odgovora.
          </div>
        </div>

        <div className="scenes">
          <details className="scene">
            <summary className="scene-sum">
              <div className="scene-num">P1</div>
              <div className="scene-ttl">Što je petrarkizam i po čemu se hrv. petrarkisti razlikuju od talijanskih?</div>
              <div className="scene-meta">TEORIJA</div>
            </summary>
            <div className="scene-body">
              <div className="scene-quote">Petrarkizam je lirski pravac inspiriran Petrarcinim Kanconijerom — ljubavna lirika s motivima nesretne ljubavi, idealizirane gospoje, Amora, antiteza boli i slasti. Hrv. petrarkisti preuzimaju tematiku, ali MIJENJAJU FORMU: umjesto Petrarcinog soneta (14 stihova), pišu dvostruko rimovane dvanaesterce. Iznimka: Lucić u „Jur nijedna na svit vila" piše osmerce. Razlog: sonet je nastao iz talijanske lirike — u hrv. tradiciji ne postoji sonetna tradicija, postoji tradicija dvanaesterca (od začinjavaca).</div>
              <div className="scene-why"><b>Ključni pojmovi za odgovor:</b> petrarkizam, sonet, dvostruko rimovani dvanaesterac, osmesterac (Lucić), I. generacija (Menčetić, Džore Držić), II. generacija (Lucić — neoplatonizacija), Ranjinin zbornik.</div>
            </div>
          </details>

          <details className="scene">
            <summary className="scene-sum">
              <div className="scene-num">P2</div>
              <div className="scene-ttl">Zašto se Marin Držić naziva „Vidrom" i kako je to povezano s njegovim literarnim likom?</div>
              <div className="scene-meta">PISAC</div>
            </summary>
            <div className="scene-body">
              <div className="scene-quote">Nadimak „Vidra" (tal. Anguilla) Marin Držić je dobio kao student u Sieni — vjerojatno zbog lukavosti i sposobnosti izvlačenja iz neugodnih situacija (vidra je poznata po klizavosti). Ironično, taj nadimak savršeno opisuje i njegov literarni lik: Držić je čovjek koji se cijeli život izvlačio — iz financijskih problema, iz sukoba s vlastelom, iz kazališnih skandala. Na kraju ipak ne uspijeva — umire sam u Veneciji 1567. Kosmografska poslanica (1566.) je posljednji pokušaj „izvlačenja" — revolucija koja se nije zbila.</div>
              <div className="scene-why"><b>Ključni pojmovi:</b> Vidra/Anguilla, Siena, Kosmografska poslanica, Cosimo de' Medici, politički angažman, 1567. Venecija.</div>
            </div>
          </details>

          <details className="scene">
            <summary className="scene-sum">
              <div className="scene-num">P3</div>
              <div className="scene-ttl">Što je bugarštica i zašto je Hektorovićevo Ribanje važno za hrv. usm. tradiciju?</div>
              <div className="scene-meta">ŽANR</div>
            </summary>
            <div className="scene-body">
              <div className="scene-quote">Bugarštica je vrsta hrv. epske narodne pjesme koja se odlikuje dugim stihovima (15–16 slogova) i tužnim, elegičnim tonom (bugarkinja = tuga). Starija je od kasnijih deseteračkih epskih pjesama. Hektorović u Ribanju bilježi dvije bugarštice koje mu pjevaju ribari Nikola Zet i Paskoje Debeli: „Kraljević Marko i brat mu Andrijaš" i „Radosav Siverinac i Vlatko udinski vojvoda". Ovo je NAJSTARIJI ZAPIS bugarštica u hrv. književnosti — bez Hektorovića, te bi pjesme bile zauvijek izgubljene. Ribanje je tako književno djelo I kulturnopovijesni dokument.</div>
              <div className="scene-why"><b>Ključni pojmovi:</b> bugarštica, 15–16 slogova, Nikola Zet, Paskoje Debeli, Kraljević Marko, najstariji zapis, kulturni arhiv.</div>
            </div>
          </details>

          <details className="scene">
            <summary className="scene-sum">
              <div className="scene-num">P4</div>
              <div className="scene-ttl">Objasni alegoriju u Juditi Marka Marulića.</div>
              <div className="scene-meta">DJELO</div>
            </summary>
            <div className="scene-body">
              <div className="scene-quote">Judita je biblijska priča o udovici Juditi koja ubija asirskog vojvodu Holoferna kako bi oslobodila židovski grad Betuliju. Marulić tu priču koristi alegorijski: Holoferno = turska vojska/sultan; Judita = Hrvatska/kršćanski narod; Betulija = hrv. gradovi pod opsadom; Bog Izraelov = kršćanski Bog koji pomaže slabijima; pobjeda Judite = nada u oslobođenje. Alegorija funkcionira jer su strukturne paralele jasne — i Judita i Hrvatska su „slabija strana" koja pobjeđuje uz Božju pomoć. Marulić ne mora ništa reći eksplicitno — čitatelji 16. st. odmah prepoznaju paralelu.</div>
              <div className="scene-why"><b>Ključni pojmovi:</b> alegorija, Holoferno = Turci, Judita = Hrvatska, Betulija = hrv. gradovi, 6 pjevanja, 2126 dvanaesteraca, splitska čakavština.</div>
            </div>
          </details>

          <details className="scene">
            <summary className="scene-sum">
              <div className="scene-num">P5</div>
              <div className="scene-ttl">Što je Perivoj od Slave i zašto je važan za hrv. književnopovijesnu svijest?</div>
              <div className="scene-meta">DJELO</div>
            </summary>
            <div className="scene-body">
              <div className="scene-quote">Perivoj od Slave je epizoda u Zoranićevim Planinama gdje protagonist Zoran ulazi u alegorijski vrt s četiri vile: Latinkom (latinska književnost), Grkinjom (grčka), Kaldejkom (istočnjačka) i Hrvaticom (hrvatska). Svaka čuva jabučnjak koji simbolizira stanje njezine književnosti. Hrvatska vila ima najmanje i najlošije jabuke — to je Zoranićeva alegorija za loše stanje hrv. književnosti 1543. Važnost: ovo je PRVI EKSPLICITNI KNJIŽEVNI MANIFEST NA HRVATSKOM — Zoranić poziva na gradnju hrv. nacionalne književnosti 300 godina prije Ilirskog preporoda. Ta ideja anticipira Gajevo buđenje nacionalne svijesti u 19. st.</div>
              <div className="scene-why"><b>Ključni pojmovi:</b> Perivoj od Slave, 4 vile, jabuke = književnost, Hrvatska vila, manifest, rasuta bašćina, anticipacija Preporoda.</div>
            </div>
          </details>

          <details className="scene">
            <summary className="scene-sum">
              <div className="scene-num">P6</div>
              <div className="scene-ttl">Po čemu se Novela od Stanca razlikuje od Dunda Maroja?</div>
              <div className="scene-meta">USPOREDBA</div>
            </summary>
            <div className="scene-body">
              <div className="scene-quote">Novela od Stanca (1550.): farsa, 1 čin, 7 prizora, dvostruko rimovani dvanaesterci, pokladna igra, tipski likovi (Stanec = naivni seljak, mladići = lukava vlastela), bez moralne pouke, situacijska komika. Dundo Maroje (1551.): renesansna komedija, 2 prologa + 5 činova, proza, razrađeni likovi (Dundo, Maro, Laura, Pomet, Negromant), filozofski okvir (nazbilji vs. nahvao), radnja u Rimu, kraj nedostaje (Kombol). Zajedničko: dubrovački idiom, Marin Držić kao autor, komičan odnos prema novcu i ljubavi.</div>
              <div className="scene-why"><b>Ključni razlike:</b> farsa vs. komedija, stih vs. proza, 1 čin vs. 5 činova, tipski vs. razvijeni likovi, Dubrovnik vs. Rim, bez filozofije vs. Negromant.</div>
            </div>
          </details>
        </div>


        {/* SEC 11 — Svi ključni likovi */}
        <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">11 · Svi ključni likovi hrv. renesanse</div><div className="sec-line"></div></div>

        <div className="box-int">
          <div className="box-int-lbl">👤 Likovi koje trebas znati za maturu</div>
          <div className="box-int-txt">
            Ispit može pitati o liku iz bilo kojeg obvezatnog dijela. Ova tablica je brza referenca — autor, djelo, funkcija lika, ključni citat ili opis.
          </div>
        </div>

        <div className="tbl">
          <div className="cr"><div className="ck br" style={{'minWidth':'100px'}}>LIK</div><div className="cv b">DJELO / AUTOR</div><div className="cv b">FUNKCIJA / TIP</div><div className="cv b">KLJUČNO</div></div>
          <div className="cr"><div className="ck go" style={{'minWidth':'100px'}}>Judita</div><div className="cv">Marulić, <em>Judita</em></div><div className="cv">Heroina — Božje oruđe; udovica; pobožna, hrabra, lijepa</div><div className="cv">Alegorija: Hrvatska koja uz Božju pomoć pobjeđuje Turke</div></div>
          <div className="cr"><div className="ck re" style={{'minWidth':'100px'}}>Holoferno</div><div className="cv">Marulić, <em>Judita</em></div><div className="cv">Antagonist — asirski vojvoda; okrutan, arogantan, žudan</div><div className="cv">Alegorija: turska vojska/sultan; njegova žudnja = propast</div></div>
          <div className="cr"><div className="ck pa" style={{'minWidth':'100px'}}>Abra</div><div className="cv">Marulić, <em>Judita</em></div><div className="cv">Juditina sluškinja — vjerna pratiteljica; skriva glavu</div><div className="cv">Simbol narodne vjere u Juditino vodstvo</div></div>
          <div className="cr"><div className="ck g" style={{'minWidth':'100px'}}>Ozija</div><div className="cv">Marulić, <em>Judita</em></div><div className="cv">Starješina Betulije — kolebljiv, spreman predati grad</div><div className="cv">Kontrast Juditi: on čeka, ona djeluje</div></div>
          <div className="cr"><div className="ck br" style={{'minWidth':'100px'}}>Stanec</div><div className="cv">Držić, <em>Novela od Stanca</em></div><div className="cv">Tip „naivnog seljaka" — star, tužan, iz Trebinja</div><div className="cv">★ Žrtva karnevala; žudi za mladošću; tragični element farse</div></div>
          <div className="cr"><div className="ck go" style={{'minWidth':'100px'}}>Vlaho, Miho, Dživo</div><div className="cv">Držić, <em>Novela od Stanca</em></div><div className="cv">Dubrovački mladići-vlastela — lukavci, traže zabavu</div><div className="cv">Tip „lukave vlastele"; bez moralne osude</div></div>
          <div className="cr"><div className="ck t" style={{'minWidth':'100px'}}>Dundo Maroje</div><div className="cv">Držić, <em>Dundo Maroje</em></div><div className="cv">Škrti otac — dolazi u Rim po sina Mara i novac</div><div className="cv">Tip „škrtog oca"; pohlepa vs. roditeljska ljubav</div></div>
          <div className="cr"><div className="ck re" style={{'minWidth':'100px'}}>Pomet (sluga)</div><div className="cv">Držić, <em>Dundo Maroje</em></div><div className="cv">Lukavi sluga — najinteligentniji lik drame</div><div className="cv">Nasljeđe commedia dell'arte (Arlecchino); pobjeđuje lukavošću</div></div>
          <div className="cr"><div className="ck pa" style={{'minWidth':'100px'}}>Negromant</div><div className="cv">Držić, <em>Dundo Maroje</em> (prolog)</div><div className="cv">Čarobnjak — filozofski uvod drame</div><div className="cv">„Nazbilji" vs. „nahvao" — autorski glas</div></div>
          <div className="cr"><div className="ck g" style={{'minWidth':'100px'}}>Zoran</div><div className="cv">Zoranić, <em>Planine</em></div><div className="cv">Alter ego pisca — putnik koji liječi ljubavnu bol</div><div className="cv">Pasivni promatrač; pati za Jagom; vidi Perivoj od Slave</div></div>
          <div className="cr"><div className="ck br" style={{'minWidth':'100px'}}>Hrvatska vila</div><div className="cv">Zoranić, <em>Planine</em> (Perivoj od Slave)</div><div className="cv">Alegorija hrv. književnosti — tužna, sramežljiva</div><div className="cv">Jabuke = stanje hrv. književnosti; ključna za manifest</div></div>
          <div className="cr"><div className="ck go" style={{'minWidth':'100px'}}>Nikola Zet + Paskoje Debeli</div><div className="cv">Hektorović, <em>Ribanje</em></div><div className="cv">Ribari — sugovornici, pjevači bugarštica</div><div className="cv">Mudrost svakodnevice; demokratizacija humanizma</div></div>
          <div className="cr"><div className="ck t" style={{'minWidth':'100px'}}>Robinja</div><div className="cv">Lucić, <em>Robinja</em></div><div className="cv">Zarobljena kći bana — žrtva turskog ropstva</div><div className="cv">Prva individualizirana lik u hrv. drami; ima ime i povijest</div></div>
          <div className="cr"><div className="ck re" style={{'minWidth':'100px'}}>Derenčin</div><div className="cv">Lucić, <em>Robinja</em></div><div className="cv">Hrv. vitez koji otkupljuje robinju</div><div className="cv">Ljubav pobjeđuje pohlepu; moralni hero drame</div></div>
          <div className="cr"><div className="ck pa" style={{'minWidth':'100px'}}>Skup</div><div className="cv">Držić, <em>Skup</em></div><div className="cv">Stari škrtac — čuva blago, želi udati kćer za bogatog</div><div className="cv">Po Plautovom Euklionu; kritika pohlepe kao društv. vrijednosti</div></div>
        </div>


        {/* SEC 12 — Kratki profili pisaca */}
        <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">12 · Kratki profili — pisac na prstu</div><div className="sec-line"></div></div>

        <div className="box-int">
          <div className="box-int-lbl">⚡ Svaki pisac u 3 rečenice</div>
          <div className="box-int-txt">Idealno za ponavljanje uoči ispita. Svaka kartica = minimum koji trebaš znati.</div>
        </div>

        <div className="scenes">
          <details className="scene">
            <summary className="scene-sum"><div className="scene-num">M</div><div className="scene-ttl">Marko Marulić — <em>otac hrv. književnosti</em></div><div className="scene-meta">SPLIT · 1450.–1524.</div></summary>
            <div className="scene-body">
              <div className="scene-quote">Splitski humanist. Judita (1501./1521.): ep, 6 pjevanja, 2126 dvanaesteraca, splitska čakavština. Alegorija: Holoferno = Turci, Judita = Hrvatska, Betulija = hrv. gradovi. Institucija (1507., latinski) prevedena na sve europske jezike.</div>
              <div className="scene-why"><b>Na prstu:</b> Split · Judita 1501./1521. · 6 pjev. · 2126 dvanaest. · alegorija Holoferno=Turci · Institucija (lat.) · otac hrv. knj.</div>
            </div>
          </details>
          <details className="scene">
            <summary className="scene-sum"><div className="scene-num">D</div><div className="scene-ttl">Marin Držić — <em>Vidra · ★ obvezatno 2026.</em></div><div className="scene-meta">DUBROVNIK · 1508.–1567.</div></summary>
            <div className="scene-body">
              <div className="scene-quote">Dubrovački komediograf (nadimak „Vidra"). Novela od Stanca (1550.): farsa, 1 čin, 7 prizora, dvanaesterci, ★ obvezatno. Dundo Maroje (1551.): najstarija hrv. prozna drama, 5 čin., kraj nedostaje (Kombol). Skup (1556.): po Plautovoj Aululariji. Kosmografska poslanica (1566.): tajna poruka Medicijima. Umire sam u Veneciji 1567.</div>
              <div className="scene-why"><b>Na prstu:</b> Dubrovnik · Vidra · Novela 1550. ★ · 1 čin 7 prizora · Dundo 1551. proza · Skup Plaut · Kosmografska · Venecija 1567.</div>
            </div>
          </details>
          <details className="scene">
            <summary className="scene-sum"><div className="scene-num">H</div><div className="scene-ttl">Petar Hektorović — <em>ribarski humanist</em></div><div className="scene-meta">HVAR · 1487.–1572.</div></summary>
            <div className="scene-body">
              <div className="scene-quote">Hvarski vlastelin, graditelj Tvrdalja (UNESCO). Ribanje (1556.): trodnevno putovanje Hvar→Brač→Šolta, bilježi bugarštice (Nikola Zet, Paskoje Debeli) — najstariji zapis. Žanr: ep + putopis + ekloga + poslanica. Za razliku od Marulića ne alegorijizira — bilježi stvarnost.</div>
              <div className="scene-why"><b>Na prstu:</b> Hvar · Tvrdalj · Ribanje 1556. · bugarštice · Nikola Zet · 3 dana · realizam ne alegorija.</div>
            </div>
          </details>
          <details className="scene">
            <summary className="scene-sum"><div className="scene-num">Z</div><div className="scene-ttl">Petar Zoranić — <em>prvi hrv. romanopisac</em></div><div className="scene-meta">ZADAR · ~1508.–1569.</div></summary>
            <div className="scene-body">
              <div className="scene-quote">Zadarski humanist. Planine (~1543./1569.): prvi hrv. roman, žanrovski hibrid (pastorala + putopis + alegorija + lirika), 24 poglavlja. Protagonist Zoran (alter ego). Perivoj od Slave: 4 vile, Hrvatska vila s najlošijim jabukama = alegorija lošeg stanja hrv. knj. Rasuta bašćina = razdrobljena domovina.</div>
              <div className="scene-why"><b>Na prstu:</b> Zadar · Planine ~1543./1569. · prvi hrv. roman · Zoran · Perivoj od Slave · Hrvatska vila · rasuta bašćina · manifest.</div>
            </div>
          </details>
          <details className="scene">
            <summary className="scene-sum"><div className="scene-num">Men</div><div className="scene-ttl">Šiško Menčetić — <em>I. generacija petrarkizma</em></div><div className="scene-meta">DUBROVNIK · 1457.–1527.</div></summary>
            <div className="scene-body">
              <div className="scene-quote">Dubrovački vlastelin, najzastupljeniji u Ranjininom zborniku (1507.). Dvostruki dvanaesterci (ne soneti!). Senzualan ton — opisuje sve stadije ljubavi. Blažen čas i hip: anafora, idealizacija gospoje, petrarkistički euforizam.</div>
              <div className="scene-why"><b>Na prstu:</b> Dubrovnik · I. gen. · Ranjinin zbornik · Blažen čas i hip · dvanaesterac · senzualan · anafora.</div>
            </div>
          </details>
          <details className="scene">
            <summary className="scene-sum"><div className="scene-num">L</div><div className="scene-ttl">Hanibal Lucić — <em>II. generacija, prva hrv. drama</em></div><div className="scene-meta">HVAR · 1485.–1553.</div></summary>
            <div className="scene-body">
              <div className="scene-quote">Hvarski vlastelin. Robinja (1530.): prva hrv. drama s razrađenom radnjom, 3 čina, tema ropstva (Derenčin otkupljuje robinju). Jur nijedna na svit vila: osmesterci, neoplatonizam, II. gen. petrarkizma. Razlika od Menčetića: manje senzualnosti, više filozofije.</div>
              <div className="scene-why"><b>Na prstu:</b> Hvar · Robinja 1530. · prva hrv. drama · Derenčin · Jur nijedna · osmesterac · II. gen. · neoplatonizam.</div>
            </div>
          </details>
        </div>


        {/* SEC 13 — Nasljeđe hrv. renesanse */}
        <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">13 · Nasljeđe hrv. renesanse u kasnijim epohama</div><div className="sec-line"></div></div>

        <div className="box-int">
          <div className="box-int-lbl">🔗 Od renesanse prema modernom hrv. kazalištu i književnosti</div>
          <div className="box-int-txt">
            Hrv. renesansa nije završila s Krnarutićem (1584.) — ona je postavila temelje na kojima se gradi cijela kasnija hrv. literatura. Ova veza je korisna za esejski kontekst.
          </div>
        </div>

        <div className="tbl">
          <div className="cr"><div className="ck br" style={{'minWidth':'110px'}}>RENESANSNI IZVOR</div><div className="cv b">KASNIJA EPOHA / PISAC</div><div className="cv b">VEZA</div></div>
          <div className="cr"><div className="ck go" style={{'minWidth':'110px'}}>Zoranić — Perivoj od Slave (1543.)</div><div className="cv">Ilirski preporod — Gaj, Babukić (1835.)</div><div className="cv">Zoranić poziva na gradnju hrv. književnosti — 300 godina kasnije Preporod to ostvaruje. Isti apel, drugačija epoha.</div></div>
          <div className="cr"><div className="ck t" style={{'minWidth':'110px'}}>Hektorović — bugarštice (1556.)</div><div className="cv">Vuk Stefanović Karadžić — sakuplja epske pjesme (19. st.)</div><div className="cv">Hektorović je zapisao narodne bugarštice 300 god. prije romantičara. Prvi arhivar hrv. usmene tradicije.</div></div>
          <div className="cr"><div className="ck re" style={{'minWidth':'110px'}}>Držić — pohlepa i komedija (16. st.)</div><div className="cv">Krleža — Glembajevi, gospodska dekadencija (20. st.)</div><div className="cv">Oba kritiziraju moralnu dekadencu imućnog sloja — Držić komedijom, Krleža tragedijom. 400 god. tradicije.</div></div>
          <div className="cr"><div className="ck pa" style={{'minWidth':'110px'}}>Marulić — Judita, alegorija (1501.)</div><div className="cv">Mažuranić — Smrt Smail-age (1846.)</div><div className="cv">Oba pišu ep o borbi s neprijateljem kao moralnoj dužnosti. Oba koriste ep kao politički i patriotski instrument.</div></div>
          <div className="cr"><div className="ck g" style={{'minWidth':'110px'}}>Krnarutić — Vazetje Sigeta (1584.)</div><div className="cv">Ivan Gundulić — Osman (17. st.) · Goethe — Zriny (19. st.)</div><div className="cv">Sigetska tema kao motiv hrv. heroizma koji traje kroz stoljeća — od Krnarutića do europskih pisaca koji slavljeni Zrinskog.</div></div>
        </div>

        <div className="box-signal">
          <div>
            <div className="box-signal-lbl">💡 Zašto ovo znaš za maturu</div>
            <div className="box-signal-txt">Kad pišeš esej o Krleži, Mažuraniću ili suvremenom piscu — možeš referencirati hrv. renesansu kao izvor tradicije. Primjer: <em>„Krležina kritika dubrovačke vlastele u Glembajevima nasljeđuje Držićevu satiričnu dimenziju — ali Držić se smije, Krleža tuguje. Isti predmet, 400 godina i žanrovski preokret."</em></div>
          </div>
        </div>


        {/* SEC 14 — Finalni pregled za ponavljanje */}
        <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">14 · Finalni pregled — sve u 5 minuta</div><div className="sec-line"></div></div>

        <div className="tbl">
          <div className="cr"><div className="ck br">TEMA</div><div className="cv b">KLJUČNA TVRDNJA</div><div className="cv b">KLJUČNI POJAM</div></div>
          <div className="cr"><div className="ck go">Marulić — Judita</div><div className="cv">Alegorija hrv. otpora: Holoferno = Turci, Judita = Hrvatska. 6 pjev., 2126 dvanaest., splitska čakavština, 1501./1521.</div><div className="cv">Alegorija, ep, invokacija, začinjavci, dvostruki dvanaesterac</div></div>
          <div className="cr"><div className="ck t">Menčetić — Blažen čas</div><div className="cv">I. gen. petrarkizma. Dvostruki dvanaesterac (ne sonet!). Anafora, senzualna idealizacija gospoje.</div><div className="cv">Petrarkizam, I. gen., dvanaesterac, anafora, gospoja</div></div>
          <div className="cr"><div className="ck re">Džore Držić — lirika</div><div className="cv">I. gen. petrarkizma, filozofičniji od Menčetića. Radmio i Ljubmir = prva hrv. pastoralna drama.</div><div className="cv">I. gen., neoplatonizam, pastoralna drama ≠ Marin Držić!</div></div>
          <div className="cr"><div className="ck pa">Lucić — Robinja + lirika</div><div className="cv">Robinja (1530.): prva hrv. drama s razrađenom radnjom, tema ropstva, moral. Jur nijedna: osmesterac, II. gen.</div><div className="cv">II. gen., osmesterac, prva hrv. drama, neoplatonizam</div></div>
          <div className="cr"><div className="ck g">Hektorović — Ribanje</div><div className="cv">Trodnevni putopis Hvar→Brač→Šolta. Bilježi bugarštice (Nikola Zet). Realizam ne alegorija. Ep+putopis+ekloga+poslanica.</div><div className="cv">Bugarštica, realizam, otium, Tvrdalj, Nikola Zet</div></div>
          <div className="cr"><div className="ck br">Zoranić — Planine</div><div className="cv">Prvi hrv. roman (~1543./1569.). Perivoj od Slave: Hrvatska vila = loše jabuke = loše stanje hrv. knj. Rasuta bašćina = domovina pod Turcima.</div><div className="cv">Perivoj od Slave, rasuta bašćina, književni manifest, alter ego</div></div>
          <div className="cr"><div className="ck go">Marin Držić — Novela od Stanca ★</div><div className="cv">Farsa, 1 čin, 7 prizora, 1550. Poklade kao dramski uvjet. Stanec = naivni seljak. Bez moralne osude. ★ OBVEZATNO 2026.</div><div className="cv">Farsa, pokladna igra, komika situacije, dramska ironija, Vidra</div></div>
          <div className="cr"><div className="ck t">Krnarutić — Vazetje Sigeta</div><div className="cv">Prvi hrv. povijesni ep (1584.). Opsada Sigeta 1566., Zrinski. Bez alegorije — direktni opis stvarnog događaja.</div><div className="cv">Povijesni ep, Nikola Šubić Zrinski, Siget 1566.</div></div>
        </div>

        <div className="box-key">
          <div className="box-key-lbl">⚡ 5 zamki koje SVAKI student pogriješi</div>
          <div className="box-key-txt">
            <b>ZAMKA 1:</b> Hrv. petrarkisti PIŠU sonete — <em>NE, pišu dvostruke dvanaesterce</em>.<br />
            <b>ZAMKA 2:</b> Džore Držić = Marin Držić — <em>NE, Džore je petrarkist (†1501.), Marin je komediograf (†1567.)</em>.<br />
            <b>ZAMKA 3:</b> Judita je tiskana 1501. — <em>NE, dovršena 1501., tiskana 1521.</em><br />
            <b>ZAMKA 4:</b> Planine su „pravi" roman — <em>NE, žanrovski su hibrid (pastorala+putopis+alegorija+lirika)</em>.<br />
            <b>ZAMKA 5:</b> Hektorović je dubrovački pisac — <em>NE, Hektorović je hvarski, Tvrdalj je u Starom Gradu na Hvaru</em>.
          </div>
        </div>


        {/* SEC 15 — Renesansa i hrv. identitet */}
        <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">15 · Renesansa i gradnja hrv. književnog identiteta</div><div className="sec-line"></div></div>

        <div className="box-int">
          <div className="box-int-lbl">🇭🇷 Od lokalnih govora prema književnoj tradiciji</div>
          <div className="box-int-txt">
            U 15.–16. st. ne postoji „hrv. književnost" kao svjesna kategorija — postoje <em>lokalne književne produkcije</em> u Splitu, Hvaru, Zadru, Dubrovniku. Svaka govori lokalnim idiomom, svaka ima vlastitu publiku. Ono što ih veže: <b>zajednički stih (dvanaesterac), zajednički pritisak (Turci), zajednički uzori (Petrarca, Vergilije, Sannazaro)</b>.<br /><br />
            Svjesna gradnja <em>hrv. književnog identiteta</em> počinje s Zoranićevim <b>Perivojem od Slave</b> (1543.) — to je prvi tekst koji eksplicitno govori o „hrvatskoj književnosti" kao kategoriji koja zaostaje i mora biti izgrađena. Ovo je ključni moment koji hrv. renesansu čini više od zbroja lokalnih produkcija — čini je <em>početkom nacionalne književne svijesti</em>.
          </div>
        </div>

        <div className="sc-grid">
          <div className="sc">
            <span className="sc-ico hchip br">IDENTITET</span>
            <div className="sc-name">Jezik kao politika</div>
            <div className="sc-desc">Pisati na „harvacki" (Marulić u posveti Judite) nije samo stilski izbor — to je politički čin. Marulić kaže: hrv. jezik je dovoljan za visoku književnost. U doba kad se sav intelektualni život odvijao na latinskom, to je manifestna gesta.</div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip go">IDENTITET</span>
            <div className="sc-name">Tradicija začinjavaca</div>
            <div className="sc-desc">Hrv. renesansni pisci ne grade iz ničega — oni nadgraduju tradiciju <em>začinjavaca</em> (srednij. hrv. pjesnika-svećenika). Marulić ih izrijekom spominje. Dvostruki dvanaesterac je stariji od renesanse — renesansa ga samo uzdigne na europsku razinu.</div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip te">IDENTITET</span>
            <div className="sc-name">Regionalnost kao bogatstvo</div>
            <div className="sc-desc">Četiri idioma (splitska čakavština, hvarska čakavština, zadarska mješavina, dubrovački idiom) nisu slabost hrv. renesanse — to je njezino bogatstvo. Svaki pisac donosi autentičan glas svog kraja. <em>Nema jedne hrv. renesanse — ima ih četiri</em>, i sve su jednako vrijedne.</div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip pa">IDENTITET</span>
            <div className="sc-name">Domoljublje kao književni motor</div>
            <div className="sc-desc">Turska opasnost nije samo historijska okolnost — ona je <em>energija koja pokreće pisanje</em>. Marulić piše Juditu jer Hrvatska treba uzdahnuti. Zoranić piše Planine jer Hrvatska treba se probuditi. Krnarutić piše Vazetje jer Hrvatska treba sjetiti se Zrinskog. <b>Bez prijetnje nema motivacije</b> — hrv. renesansa je paradoksalni cvijet na rubu provalije.</div>
          </div>
        </div>

        <div className="featured-quote" style={{'margin':'24px 0'}}>
          <div className="fq-mark">«</div>
          <div className="fq-body">
            <div className="fq-text">Libar Marka Marula Splićanina u kom se uzdarži istorija svete udovice Judit u versih harvacki složena, kako ona ubi vojvodu Oloferna posridu vojske njegove i oslobodi puk israelski od velike pogibili.</div>
            <div className="fq-meta">— naslov Judite u originalnoj posveti, 1501. · puni Marulićev naslov otkriva sve: junakinju, žanr (stihovi), jezik (harvacki), temu (oslobođenje) i alegoriju</div>
          </div>
          <button type="button" className="fq-copy" onClick={(e)=>{const fq=e.currentTarget.closest('.featured-quote');const txt=fq?.querySelector('.fq-text')?.textContent||"";navigator.clipboard?.writeText(txt)}}>⎘</button>
        </div>



        {/* SEC 17 — H11 i ostalo gradivo */}
        <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">17 · H11 i ostalo gradivo — kako se spaja</div><div className="sec-line"></div></div>

        <div className="box-int">
          <div className="box-int-lbl">🔗 H11 u kontekstu cijelog hrv. i europskog programa</div>
          <div className="box-int-txt">
            Ispit nije samo H11 — hrv. renesansa je dio većeg mozaika koji uključuje europsku renesansu (Petrarca, Calderón, Goethe) i hrv. modernizam (Krleža, Marinković). Ove poveznice su korisne za esejski kontekst.
          </div>
        </div>

        <div className="sc-grid">
          <div className="sc">
            <span className="sc-ico hchip br">→ PETRARCA</span>
            <div className="sc-name">Menčetić i Lucić ← Petrarca</div>
            <div className="sc-desc">Petrarca = izvorni majstor sonetne forme i petrarkizma. Hrv. učenici u eseju o Petrarci mogu usporediti: talijanski sonet vs. hrv. dvanaesterac, ljubav kao senzualna strast (Menčetić) vs. duhovna težnja (Lucić koji ide dalje od Petrarce prema neoplatonizmu).</div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip go">→ CALDERÓN</span>
            <div className="sc-name">Držić ← Calderón</div>
            <div className="sc-desc">Calderón (<em>Život je san</em>) i Držić su suvremenici. Calderón pita: je li život stvaran ili iluzija? Držić u Noveli od Stanca prikazuje iluziju (Stanec vjeruje da se podmladio). Oboje koriste dramatsku obmanu — Calderón filozofski, Držić komički.</div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip te">→ GOETHE</span>
            <div className="sc-name">Marulić ← Goethe (Faust)</div>
            <div className="sc-desc">Faust žudi za spoznajom i potpisuje pakt s đavlom. Marulić žudi za spoznajom ali ostaje unutar kršćanskog okvira — bez pakta. Oba su humanisti, ali Faust je moderni (sekularni), Marulić je renesansni (kršćanski). Kontrast koji pokazuje razvoj humanizma kroz 300 godina.</div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip pa">→ KRLEŽA</span>
            <div className="sc-name">Držić ← Krleža</div>
            <div className="sc-desc">Skup i Dundo Maroje kritiziraju pohlepu imućnih Dubrovčana. Krleža u Gospodi Glembajevima kritizira pohlepu hrv. građanstva. Oboje koriste dramsku formu kao socijalni skalpel. Razlika: Držić se smije (komedija), Krleža tuguje (tragedija). 400 godina i žanrovski preokret.</div>
          </div>
          <div className="sc">
            <span className="sc-ico hchip re">→ MARINKOVIĆ</span>
            <div className="sc-name">Hektorović ← Marinković</div>
            <div className="sc-desc">Hektorović bilježi svakodnevicu ribarskog života; Marinković u novelama bilježi svakodnevicu dalmatinskih likova 20. st. Oba su realistični prikazi jadranskog identiteta — ali kroz potpuno različite epohe i forme. <em>Kontinuitet dalmatinskog realizma kao hrv. književna konstanta.</em></div>
          </div>
        </div>

        {/* SEC 16 — Samoprocjena */}
        <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">16 · Samoprocjena — jesi li spreman/a?</div><div className="sec-line"></div></div>

        <div className="box-int">
          <div className="box-int-lbl">🎯 10 pitanja bez multiple choice — odgovori glasno ili u pismu</div>
          <div className="box-int-txt">
            Za razliku od kviza, ova pitanja traže <strong>formulirani odgovor</strong> — kao na pravom ispitu. Ako možeš odgovoriti u 2–3 rečenice bez gledanja bilješki, spreman/a si.
          </div>
        </div>

        <div className="scenes">
          <details className="scene">
            <summary className="scene-sum"><div className="scene-num">1</div><div className="scene-ttl">Što je alegorija u Juditi? Nabroji barem 3 alegorijske paralele.</div><div className="scene-meta">DJELO</div></summary>
            <div className="scene-body">
              <div className="scene-quote">Model odgovora: Alegorija je dvostruko čitanje teksta — biblijska priča i suvremena hrv. stvarnost istovremeno. Holoferno = turska vojska/sultan. Judita = Hrvatska/kršćanski narod. Betulija = hrv. gradovi pod opsadom. Bog Izraelov = kršćanski Bog koji pomaže. Juditina pobjeda = nada u oslobođenje od Turaka.</div>
              <div className="scene-why"><b>Provjeri:</b> Jesu li ti paralele bile trenutačne? Ako da — spreman/a si za ovo pitanje.</div>
            </div>
          </details>

          <details className="scene">
            <summary className="scene-sum"><div className="scene-num">2</div><div className="scene-ttl">Objasni zašto je pokladni kontekst ključan za Novelu od Stanca.</div><div className="scene-meta">DJELO ★</div></summary>
            <div className="scene-body">
              <div className="scene-quote">Model odgovora: Poklade su karnevalski period slobode prije korizme — hijerarhija se privremeno preokreće, dopušteno je ono što inače nije. Bez pokladnih sloboda mladići ne bi pristupili seljaku Stancu niti bi prevara bila prihvaćena kao komičan čin. Poklade legitimiraju farsu — bez njih Novela postaje moralno problematičnom situacijom, a ne komedijom.</div>
              <div className="scene-why"><b>Provjeri:</b> Jesi li naveo/la karnevalsku slobodu + legitimaciju prevare + dramski uvjet?</div>
            </div>
          </details>

          <details className="scene">
            <summary className="scene-sum"><div className="scene-num">3</div><div className="scene-ttl">Po čemu se hrv. petrarkisti razlikuju od Petrarce?</div><div className="scene-meta">TEORIJA</div></summary>
            <div className="scene-body">
              <div className="scene-quote">Model odgovora: Petrarca piše sonete (14 stihova, stroga shema). Hrv. petrarkisti pišu dvostruko rimovane dvanaesterce (tradicija začinjavaca). Iznimka: Lucić u Jur nijedna na svit vila piše osmerce. Tematika je preuzeta — gospoja, Amor, nesretna ljubav, antiteze — ali forma je adaptirana lokalnoj tradiciji.</div>
              <div className="scene-why"><b>Provjeri:</b> Jesi li rekao/la: NE soneti → DA dvanaesterci → Lucić osmesterac → tematika ista?</div>
            </div>
          </details>

          <details className="scene">
            <summary className="scene-sum"><div className="scene-num">4</div><div className="scene-ttl">Što je Perivoj od Slave i zašto je književnopovijesno važan?</div><div className="scene-meta">DJELO</div></summary>
            <div className="scene-body">
              <div className="scene-quote">Model odgovora: Perivoj od Slave je epizoda u Zoranićevim Planinama. 4 vile čuvaju jabučnjake: Latinka (latinska knj.), Grkinja (grčka), Kaldejka (istočnjačka), Hrvatska vila (hrv. knj.). Hrvatska ima najlošije jabuke = loše stanje hrv. književnosti. Važnost: to je 1543. — prvi eksplicitni poziv na gradnju hrv. književne tradicije, 300 godina prije Ilirskog preporoda.</div>
              <div className="scene-why"><b>Provjeri:</b> Jesi li naveo/la 4 vile, jabuke kao alegoriju i datum (1543.) u kontekstu Preporoda?</div>
            </div>
          </details>

          <details className="scene">
            <summary className="scene-sum"><div className="scene-num">5</div><div className="scene-ttl">Zašto je Hektorovićevo Ribanje važno kao kulturni dokument?</div><div className="scene-meta">DJELO</div></summary>
            <div className="scene-body">
              <div className="scene-quote">Model odgovora: Hektorović u Ribanju bilježi bugarštice koje mu pjevaju ribari Nikola Zet i Paskoje Debeli. To je najstariji zapis bugarštica u hrv. književnosti — bez Hektorovića, te bi epske narodne pjesme (Kraljević Marko i brat mu Andrijaš) bile zauvijek izgubljene. Ribanje je istovremeno književno djelo (ep/putopis/ekloga/poslanica) i kulturnopovijesni arhiv.</div>
              <div className="scene-why"><b>Provjeri:</b> Jesi li naveo/la bugarštica + Nikola Zet + najstariji zapis + arhivski karakter Ribanja?</div>
            </div>
          </details>
        </div>


        <div className="box-key">
          <div className="box-key-lbl">📚 Preporučeno čitanje za A ocjenu</div>
          <div className="box-key-txt">
            Ako imaš vremena ući dublje — ove sekcije daju razliku između B i A odgovora:<br />
            <b>Teorija:</b> Sec 04 (Žanrovi s primjerima) + Sec 06 (Hrv. vs. tal. renesansa) — za teorijsko pitanje na ispitu.<br />
            <b>Judita:</b> Tab 1 (★ Judita · alegorijska shema) + Tab 2 (01b · Teze za esej o Juditi) — za kontekstualni argument.<br />
            <b>Novela:</b> Tab 1 (★ Novela · 7 prizora) + Tab 2 (01c · Teze 7–9 — napredni) — za dubinsku analizu.<br />
            <b>Kontekst:</b> Sec 02b (Europski kontekst) + Sec 17 (H11 i ostalo gradivo) — za usporedbu s europskom renesansom.<br />
            <b>Pojmovnik:</b> Tab 4, filter „Likovi" — za brzo ponavljanje svih ključnih likova.
          </div>
        </div>


        <div className="box-signal">
          <div>
            <div className="box-signal-lbl">📎 Poveznice između tabova</div>
            <div className="box-signal-txt">Svaki tab gradi na prethodnom: <b>Teorija (0)</b> → kontekst i pojmovi → <b>Pisci i djela (1)</b> → detaljni opisi → <b>Esej alat (2)</b> → primjena u eseju → <b>Citatnik (3)</b> → gotove fraze → <b>Pojmovnik (4)</b> → precizni pojmovi → <b>Kviz (6)</b> → provjera → <b>Checkpoint (7)</b> → potvrda. Za ispit: počni s Kvizom (brza dijagnoza), zatim nadopuni slabe točke u Teoriji ili Pisci i djela.</div>
          </div>
        </div>

        <div className="nav-row">
          <span className="nb off">← Početak</span>
          <span className="nb primary" onClick={()=>onTabSwitch(1)}>📖 Pisci i djela →</span>
        </div>
      
    <div className="cheat-card" style={{'marginTop':'24px'}}>
      <div className="cheat-hdr">
        <div className="cheat-hdr-l">
          <div className="cheat-eye">SLJEDEĆE</div>
          <div className="cheat-ttl">Tab 1 · Pisci i djela renesanse</div>
        </div>
      </div>
      <div className="cheat-grid">
        <div className="cheat-col cheat-col-wide" style={{'fontFamily':'var(--serif,Fraunces,serif)','fontSize':'13.5px','color':'var(--t2,#c5b8aa)','lineHeight':'1.65'}}>
          <p style={{'margin':'0'}}>Sad kad znaš kontekst hrvatske renesanse — <b>Tab 1</b> donosi konkretne pisce: <em>Marulić, Hektorović, Lucić</em>. Svaki s djelom, primjerom i ulomkom za analizu.</p>
        </div>
      </div>
    
    </div>

    <style jsx global>{`
      .h11-theory .featured-quote{display:flex;gap:14px;padding:20px 22px;background:linear-gradient(135deg,rgba(212,185,140,.04),rgba(220,50,47,.02));border:1px solid var(--bdm,#4a3f3f);border-left:3px solid var(--parchment,#d4b98c);border-radius:12px;margin:20px 0;position:relative;word-break:break-word;overflow:hidden;transition:border-color .2s}
      .h11-theory .featured-quote:hover{border-color:var(--bd-pa,#7a6650)}
      .h11-theory .fq-mark{font-family:var(--display,serif);font-size:52px;color:var(--parchment,#d4b98c);opacity:.35;line-height:1;flex-shrink:0;margin-top:-8px}
      .h11-theory .fq-body{flex:1;min-width:0}
      .h11-theory .fq-text{font-family:var(--serif,serif);font-size:16px;font-style:italic;color:var(--t1,#f4ede5);line-height:1.6;margin-bottom:8px}
      .h11-theory .fq-meta{font-family:var(--mono,monospace);font-size:10px;color:var(--t3,#a89384);letter-spacing:.5px}
      .h11-theory .fq-copy{background:none;border:1px solid var(--bd,#3a3030);border-radius:8px;color:var(--t3,#a89384);font-size:12px;padding:4px 8px;cursor:pointer;font-family:var(--mono,monospace);transition:all .15s;flex-shrink:0;align-self:flex-start}
      .h11-theory .fq-copy:hover{color:var(--t1,#f4ede5);border-color:var(--bdm,#4a3f3f)}

      .h11-theory .qnav-btn{padding:10px 12px;background:var(--ele,#201616);border:1px solid var(--bdm,#4a3f3f);border-radius:10px;font-family:var(--mono,monospace);font-size:9.5px;font-weight:700;letter-spacing:.5px;color:var(--t2,#c9b9aa);cursor:pointer;text-align:left;transition:all .18s;display:flex;flex-direction:column;gap:3px}
      .h11-theory .qnav-btn:hover{border-color:var(--bd-br,#8d6a56);color:var(--bronze-l,#e9bda0);transform:translateY(-2px);box-shadow:0 4px 14px rgba(220,50,47,.1)}
      .h11-theory .qnav-btn span{font-family:var(--serif,serif);font-size:11px;color:var(--t3,#a89384);font-weight:400;letter-spacing:0;text-transform:none}

      .h11-theory .tl{margin:18px 0;position:relative}
      .h11-theory .tl::before{content:'';position:absolute;left:13px;top:10px;bottom:10px;width:2px;background:linear-gradient(180deg,var(--bdm,#4a3f3f),transparent)}
      .h11-theory .tl-item{display:flex;gap:16px;margin-bottom:18px;position:relative}
      .h11-theory .tl-dot{width:28px;height:28px;border-radius:50%;background:var(--ele,#201616);border:2px solid var(--bronze,#c48b6a);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-family:var(--mono,monospace);font-size:9px;font-weight:700;color:var(--bronze,#c48b6a);z-index:1}
      .h11-theory .tl-body{flex:1;min-width:0}
      .h11-theory .tl-year{font-family:var(--mono,monospace);font-size:9px;font-weight:700;color:var(--bronze,#c48b6a);letter-spacing:1.5px;margin-bottom:3px}
      .h11-theory .tl-title{font-family:var(--display,serif);font-size:13px;font-weight:700;color:var(--t1,#f4ede5);margin-bottom:4px;letter-spacing:.3px}
      .h11-theory .tl-desc{font-family:var(--serif,serif);font-size:13.5px;color:var(--t2,#c9b9aa);line-height:1.55}

      .h11-theory .scenes{display:flex;flex-direction:column;gap:8px;margin:18px 0 22px}
      .h11-theory .scene{background:var(--card,#1a1010);border:1px solid var(--bdm,#4a3f3f);border-radius:10px;overflow:hidden;transition:border-color .2s,box-shadow .2s}
      .h11-theory .scene:hover{border-color:var(--bd-br,#8d6a56)}
      .h11-theory .scene[open]{border-color:var(--bd-go,#8f7b4a);box-shadow:0 2px 8px rgba(232,201,122,.08)}
      .h11-theory .scene-sum{display:grid;grid-template-columns:auto 1fr auto;gap:14px;align-items:center;padding:14px 16px;cursor:pointer;list-style:none;user-select:none}
      .h11-theory .scene-sum::-webkit-details-marker{display:none}
      .h11-theory .scene-sum::after{content:'▾';font-family:var(--mono,monospace);font-size:14px;color:var(--t3,#a89384);transition:transform .2s;margin-left:8px}
      .h11-theory .scene[open] .scene-sum::after{transform:rotate(180deg);color:var(--gold,#e8c97a)}
      .h11-theory .scene-num{font-family:var(--display,serif);font-size:18px;font-weight:700;color:var(--bronze-l,#e9bda0);min-width:32px;letter-spacing:.5px}
      .h11-theory .scene-ttl{font-family:var(--serif,serif);font-size:14.5px;color:var(--t1,#f4ede5);font-weight:600;line-height:1.4}
      .h11-theory .scene-meta{font-family:var(--mono,monospace);font-size:9px;color:var(--t3,#a89384);letter-spacing:1.5px;padding:3px 8px;background:var(--ele,#201616);border:1px solid var(--bdm,#4a3f3f);border-radius:10px;text-transform:uppercase;white-space:nowrap}
      .h11-theory .scene-body{padding:0 16px 16px}
      .h11-theory .scene-quote{padding:12px 14px;background:var(--sur,#201818);border-left:3px solid var(--gold,#e8c97a);border-radius:0 10px 10px 0;font-family:var(--serif,serif);font-size:13.5px;line-height:1.55;color:var(--t1,#f4ede5);font-style:italic;margin-bottom:10px}
      .h11-theory .scene-why{font-family:var(--serif,serif);font-size:13px;line-height:1.6;color:var(--t2,#c9b9aa)}

      @media (max-width: 680px){
        .h11-theory .featured-quote{padding:14px 12px;gap:10px;margin:14px 0}
        .h11-theory .fq-mark{font-size:36px;margin-top:-2px}
        .h11-theory .fq-text{font-size:14px;line-height:1.5}
        .h11-theory .fq-meta{font-size:9.5px}
        .h11-theory .fq-copy{display:none}
        .h11-theory .tl-item{gap:10px}
        .h11-theory .tl-dot{width:30px;height:30px;font-size:11px}
        .h11-theory .tl-title{font-size:12px}
        .h11-theory .tl-desc{font-size:12px}
        .h11-theory .scene-sum{grid-template-columns:auto 1fr;gap:8px;padding:11px 12px}
        .h11-theory .scene-meta{display:none}
        .h11-theory .scene-num{font-size:14px;min-width:24px}
        .h11-theory .scene-ttl{font-size:13px}
        .h11-theory .scene-body{padding:0 12px 12px}
        .h11-theory .scene-quote{font-size:12px;padding:10px 12px}
        .h11-theory .scene-why{font-size:11.5px}
      }
    `}</style>
    </div>
  );
}