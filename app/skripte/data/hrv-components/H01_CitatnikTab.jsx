'use client';

import { useEffect } from 'react';

const CITATNIK_HTML = `    <div class="tags">
      <span class="pill p-br">arsenal</span>
      <span class="pill p-go">antigona</span>
      <span class="pill p-r">homer</span>
      <span class="pill p-t">biblija</span>
      <span class="pill p-pa">rim</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Citatni arsenal — ono što moraš znati napamet</div>
      <div class="box-int-txt">
        Kratki, moćni citati razvrstani po temi. Ubaciš jedan u esej — dignuta razina. Svaki ima napomenu <em>kada ga koristiti</em>.
      </div>
    </div>

    <!-- SEARCH + FILTER -->
    <div class="cit-tools">
      <div class="cit-search-row">
        <label for="cit-search" class="sr-only">Pretraži citate</label>
        <input type="text" id="cit-search" class="cit-search" placeholder="🔎 Pretraži citate (npr. ljubav, hybris, carpe diem...)" aria-label="Pretraži citate" autocomplete="off">
        <button type="button" class="cit-clear" id="cit-clear" onclick="citClear()" aria-label="Očisti pretragu" title="Očisti">✕</button>
      </div>
      <div class="cit-filters" role="group" aria-label="Filtriraj po izvoru">
        <button type="button" class="cit-filter active" data-src="all" onclick="citFilter('all')">Svi</button>
        <button type="button" class="cit-filter" data-src="antigona" onclick="citFilter('antigona')">Antigona</button>
        <button type="button" class="cit-filter" data-src="homer" onclick="citFilter('homer')">Homer</button>
        <button type="button" class="cit-filter" data-src="biblija" onclick="citFilter('biblija')">Biblija</button>
        <button type="button" class="cit-filter" data-src="rim" onclick="citFilter('rim')">Rim</button>
      </div>
      <div class="cit-stats" id="cit-stats" aria-live="polite">18 citata</div>
    </div>

    <!-- ANTIGONA CITATI -->
    <div class="sec-hdr" data-cit-section="antigona"><div class="sec-line"></div><div class="sec-badge">01 · Antigona — top 5</div><div class="sec-line"></div></div>

    <div class="box-key" data-q-src="antigona" data-q-text="nepisani nepropadljivi zakoni bogova moralni pojedinac hegelov sukob granice božanski ljudski">
      <div class="box-key-lbl">🔑 ANTIGONA KREONTU · božanski vs. ljudski zakon</div>
      <div class="box-key-txt">
        „Nisam mislila da tvoje naredbe imaju toliku moć da smrtnik može pregaziti <em>nepisane i nepropadljive zakone bogova.</em>"<br><br>
        <strong style="color:var(--gold)">› Koristi za:</strong> tema 1, 3, 4 (moralni pojedinac, Hegelov sukob, granice).
      </div>
    </div>

    <div class="box-key" data-q-src="antigona" data-q-text="mnogo čudesa ništa čudesnije čovjeka granice ljudske moći hybris prvi stasimon kor">
      <div class="box-key-lbl">🔑 KOR · prvi stasimon · granice čovjeka</div>
      <div class="box-key-txt">
        „Mnogo je čudesa, <em>al' ništa čudesnije od čovjeka.</em>"<br><br>
        <strong style="color:var(--gold)">› Koristi za:</strong> temu 4 (granice ljudske moći), temu 3 (hybris). <em>Obavezno u svakom eseju.</em>
      </div>
    </div>

    <div class="box-key" data-q-src="antigona" data-q-text="nisam rođena da mrzim volim ljubav karakterizacija politika">
      <div class="box-key-lbl">🔑 ANTIGONA · karakterizacija</div>
      <div class="box-key-txt">
        „Nisam rođena da mrzim, nego da <em>volim.</em>"<br><br>
        <strong style="color:var(--gold)">› Koristi za:</strong> karakterizacija Antigone, tema ljubavi vs. politike, tema 5.
      </div>
    </div>

    <div class="box-key" data-q-src="antigona" data-q-text="država nije jednog čovjeka posjed hemon kritika tiranije apsolutne vlasti">
      <div class="box-key-lbl">🔑 HEMON KREONTU · kritika tiranije</div>
      <div class="box-key-txt">
        „<em>Država nije jednog čovjeka posjed.</em>"<br><br>
        <strong style="color:var(--gold)">› Koristi za:</strong> Kreontova hybris, kritika apsolutne vlasti, tema 2.
      </div>
    </div>

    <div class="box-key" data-q-src="antigona" data-q-text="sve su mi ruke pune zla kreont finale anagnorizis peripetija tragedija">
      <div class="box-key-lbl">🔑 KREONT · finale, anagnorizis</div>
      <div class="box-key-txt">
        „<em>Sve su mi ruke pune zla.</em>"<br><br>
        <strong style="color:var(--gold)">› Koristi za:</strong> Kreontovu tragediju, peripetija + anagnorizis, tema 2.
      </div>
    </div>

    <!-- HOMER CITATI -->
    <div class="sec-hdr" data-cit-section="homer"><div class="sec-line"></div><div class="sec-badge">02 · Homer — uvodi i junaci</div><div class="sec-line"></div></div>

    <div class="con">
      <div class="cr" data-q-src="homer" data-q-text="srdžbu boginjo pjevaj ahileja peleju sina ilijada invokacija muze ahilejev gnjev"><div class="ck br">ILIJADA · početak</div><div class="cv">„<em>Srdžbu mi, boginjo, pjevaj Ahileja, Peleju sina…</em>" › klasična invokacija muze, tema Ahilejevog gnjeva.</div></div>
      <div class="cr" data-q-src="homer" data-q-text="bolje pasti s časti nego živjeti sramoteno junaštvo čast preživljavanje ilijada"><div class="ck br">ILIJADA · čast</div><div class="cv">„<em>Bolje pasti s časti nego živjeti sramoteno.</em>" › koristi uz raspravu o junaštvu, čast vs. preživljavanje.</div></div>
      <div class="cr" data-q-src="homer" data-q-text="muža muzo kazuj domišljata odiseja invokacija odisejev povratak"><div class="ck go">ODISEJA · početak</div><div class="cv">„<em>Muža mi, muzo, kazuj domišljata…</em>" › invokacija muze, uvod u Odisejev povratak.</div></div>
      <div class="cr" data-q-src="homer" data-q-text="onaj koji je vidio sve krajeva zemlje gilgameš prva knjiga povijest"><div class="ck pa">EP O GILGAMEŠU</div><div class="cv">„<em>Onaj koji je vidio sve do krajeva zemlje, onaj koji je znao sve i iskusio sve — Gilgameš.</em>" › početak prve knjige u povijesti.</div></div>
    </div>

    <!-- BIBLIJA CITATI -->
    <div class="sec-hdr" data-cit-section="biblija"><div class="sec-line"></div><div class="sec-badge">03 · Biblija — temelji motiva</div><div class="sec-line"></div></div>

    <div class="con">
      <div class="cr" data-q-src="biblija" data-q-text="u početku stvori bog nebo zemlju postanak stvaranje"><div class="ck re">POSTANAK · početak</div><div class="cv">„<em>U početku stvori Bog nebo i zemlju.</em>" › tema postanka, stvaranja, početka.</div></div>
      <div class="cr" data-q-src="biblija" data-q-text="u početku bijaše riječ logos ivan bog jezik svijet"><div class="ck re">IVAN · Riječ</div><div class="cv">„<em>U početku bijaše Riječ i Riječ bijaše u Boga i Riječ bijaše Bog.</em>" › tema Logos, riječ kao bit, jezik i svijet.</div></div>
      <div class="cr" data-q-src="biblija" data-q-text="ispraznost nad ispraznostima sve je ispraznost propovjednik prolaznost vanitas barok"><div class="ck re">PROPOVJEDNIK</div><div class="cv">„<em>Ispraznost nad ispraznostima — sve je ispraznost.</em>" › tema prolaznosti, vanitas (baza baroka).</div></div>
      <div class="cr" data-q-src="biblija" data-q-text="blago krotkima baštiniti zemlju matej blaženstva paralelizam antiteza"><div class="ck re">MATEJ · blaženstva</div><div class="cv">„<em>Blago krotkima jer će baštiniti zemlju.</em>" › paralelizam kao stilski postupak, antiteza.</div></div>
      <div class="cr" data-q-src="biblija" data-q-text="ljubav nikad ne prestaje korinćani pavao himna ljubavi"><div class="ck re">POSLANICA KORINĆANIMA</div><div class="cv">„<em>Ljubav nikad ne prestaje.</em>" › klasik uz temu ljubavi; sv. Pavao, Himna ljubavi.</div></div>
    </div>

    <!-- RIM CITATI -->
    <div class="sec-hdr" data-cit-section="rim"><div class="sec-line"></div><div class="sec-badge">04 · Rim — latinski klasici</div><div class="sec-line"></div></div>

    <div class="con">
      <div class="cr" data-q-src="rim" data-q-text="arma virumque cano oružje pjevam junaka vergilije eneida ep uvod"><div class="ck br">VERGILIJE · Eneida</div><div class="cv">„<em>Arma virumque cano…</em>" („Oružje pjevam i junaka…") › klasika epa, uvodni stih Eneide.</div></div>
      <div class="cr" data-q-src="rim" data-q-text="carpe diem ugrabi dan horacije ode prolaznost hedonizam tempus fugit"><div class="ck go">HORACIJE · Ode</div><div class="cv">„<em>Carpe diem.</em>" (Ugrabi dan.) › tema prolaznosti, hedonizam, tempus fugit.</div></div>
      <div class="cr" data-q-src="rim" data-q-text="aut prodesse aut delectare poučiti zabaviti horacije ars poetica teorija književnosti"><div class="ck go">HORACIJE · Ars poetica</div><div class="cv">„<em>Aut prodesse aut delectare.</em>" (Ili poučiti ili zabaviti.) › teorija književnosti, svrha djela.</div></div>
      <div class="cr" data-q-src="rim" data-q-text="in nova fert animus mutatas dicere formas corpora ovidije metamorfoze preobrazba"><div class="ck pa">OVIDIJE · Metamorfoze</div><div class="cv">„<em>In nova fert animus mutatas dicere formas corpora.</em>" („Duh me nosi da pjevam o tijelima pretvorenim u nove oblike.") › tema preobrazbe.</div></div>
    </div>

    <!-- TEMATSKI INDEX -->
    <div class="sec-hdr" data-cit-section="index"><div class="sec-line"></div><div class="sec-badge">05 · Tematski indeks — brzi pristup</div><div class="sec-line"></div></div>

    <div class="prose">Kad znaš temu eseja, znaj odmah gdje tražiti:</div>

    <div class="tbl">
      <table>
        <thead><tr><th>Tema</th><th>Prvi izbor</th><th>Drugi izbor</th></tr></thead>
        <tbody>
          <tr><td><b>Moralna savjest</b></td><td>Antigona Kreontu (nepisani zakoni)</td><td>Blažen. Blago krotkima</td></tr>
          <tr><td><b>Granice ljudske moći</b></td><td>Kor · „čudesnije od čovjeka"</td><td>Propovjednik · ispraznost</td></tr>
          <tr><td><b>Prolaznost (vanitas)</b></td><td>Horacije · Carpe diem</td><td>Propovjednik</td></tr>
          <tr><td><b>Ljubav</b></td><td>Antigona · „nisam rođena da mrzim"</td><td>Sv. Pavao · Himna ljubavi</td></tr>
          <tr><td><b>Junaštvo i čast</b></td><td>Ilijada · „bolje pasti s časti"</td><td>Eneida · Arma virumque</td></tr>
          <tr><td><b>Stvaranje / početak</b></td><td>Postanak · „U početku stvori"</td><td>Ivan · „U početku bijaše Riječ"</td></tr>
          <tr><td><b>Politička vlast / tiranija</b></td><td>Hemon · „nije jednog čovjeka posjed"</td><td>Antigona · Kreontova hybris</td></tr>
        </tbody>
      </table>
    </div>

    <div class="nav-row">
      <span class="nb" onclick="sw(2)">‹ Esej alat</span>
      <span class="nb primary" onclick="sw(4)">📚 Pojmovnik ›</span>
    </div>
`;

export default function H01CitatnikTab() {
  useEffect(() => {
    const init = () => {
      if (typeof window !== 'undefined' && typeof window._citInit === 'function') {
        window._citInit();
      }
    };
    init();
    const timer = window.setTimeout(init, 0);
    return () => window.clearTimeout(timer);
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: CITATNIK_HTML }} />;
}
