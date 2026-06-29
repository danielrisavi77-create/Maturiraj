'use client';

import { useEffect } from 'react';

const CITATNIK_HTML = [
  "",
  "    <div class=\"tags\">",
  "      <span class=\"pill p-pa\">Gundulić</span>",
  "      <span class=\"pill p-br\">Dubravka</span>",
  "      <span class=\"pill p-go\">★ Napamet</span>",
  "      <span class=\"pill p-t\">Filtriraj kategoriju</span>",
  "    </div>",
  "",
  "    <div class=\"box-int\">",
  "      <div class=\"box-int-lbl\">💬 Citati iz Dubravke — arsenal za esej i kratke odgovore</div>",
  "      <div class=\"box-int-txt\">Klikni ⎘ za kopiranje citata s atribucijom. Citati označeni <strong>★ Napamet</strong> prioritetno nauči napamet — oni ti stalno dođu u obzir za esej, kviz i test. Filtriraj po kategoriji ispod za temu koju trebaš.</div>",
  "    </div>",
  "",
  "    <!-- ★ NAPAMET — 8 glavnih citata -->",
  "    ",
  "    <div class=\"cit-search-row\" style=\"margin:14px 0 16px;display:flex;gap:8px;align-items:center\">",
  "      <label for=\"cit-search\" class=\"sr-only\" style=\"position:absolute;left:-9999px\">Pretraži citate</label>",
  "      <span style=\"font-size:18px;color:var(--gold,#e9b446)\">🔍</span>",
  "      <input type=\"search\" id=\"cit-search\" class=\"cit-search\" placeholder=\"Pretraži citate (npr. Gundulić, sloboda, dubrava, antiteza)…\" aria-label=\"Pretraži citate\" autocomplete=\"off\"",
  "        style=\"flex:1;padding:10px 14px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:10px;color:var(--t1,#f4ede5);font-family:var(--mono,monospace);font-size:13px\"",
  "        oninput=\"citSearch(this.value)\">",
  "      <button type=\"button\" class=\"cit-clear\" onclick=\"document.getElementById('cit-search').value='';citSearch('')\" aria-label=\"Očisti pretragu\" title=\"Očisti\"",
  "        style=\"padding:8px 12px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:8px;color:var(--t2,#c5b8aa);cursor:pointer;font-size:14px\">✕</button>",
  "    </div>",
  "<div class=\"sec-hdr\"><div class=\"sec-line\"></div><div class=\"sec-badge\">★ Napamet — 8 glavnih citata iz Dubravke</div><div class=\"sec-line\"></div></div>",
  "",
  "    <!-- 1. Završna himna slobodi — NAJVAŽNIJI -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"himna\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #1</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">O lijepa, o draga, o slatka slobodo,<br>dar u kom sva blaga višnji nam Bog je do,<br>uzroče istini od naše sve slave,<br>uresu jedini od ove Dubrave!</div>",
  "        <div class=\"fq-meta\">— Gundulić, <em>Dubravka</em>, III. činjenje · <strong>Završna himna slobodi</strong> · Najpoznatiji stihovi hrv. baroka · Slobodarski ideal</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'O lijepa, o draga, o slatka slobodo, dar u kom sva blaga višnji nam Bog je do, uzroče istini od naše sve slave, uresu jedini od ove Dubrave! — Gundulić, Dubravka, III. činjenje, završna himna slobodi')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 2. Sva srebra, sva zlata -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"himna\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #2</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Sva srebra, sva zlata, svi ljudski životi<br>ne mogu bit plata tvojoj čistoj ljepoti!</div>",
  "        <div class=\"fq-meta\">— Gundulić, <em>Dubravka</em>, III. činjenje · Nastavak himne slobodi · <strong>Hiperbola i metafora</strong> · Sloboda kao nemjerljiva vrijednost</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Sva srebra, sva zlata, svi ljudski životi ne mogu bit plata tvojoj čistoj ljepoti! — Gundulić, Dubravka, završna himna slobodi')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 3. Dubravka kao kritika bogatstva — Proklet i oni -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"drustvo\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #3</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Proklet i oni tko najprije za izet zlato,<br>zemlju izdube, kad cić zlata najvrednije<br>običaji se u nas gube!</div>",
  "        <div class=\"fq-meta\">— Gundulić, <em>Dubravka</em>, III. činjenje · Ljubdragov monolog · <strong>Kritika pohlepe</strong> · Alegorija: zlato uništava dubrovačku tradiciju</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Proklet i oni tko najprije za izet zlato, zemlju izdube, kad cić zlata najvrednije običaji se u nas gube! — Gundulić, Dubravka, III. činjenje, Ljubdragov monolog')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 4. Grd ju pastir zlatom ote -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"sukob\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #4</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Miljenko je imô mili steć Dubravku cić lipote,<br>nu se ukloni zakon sili: grd ju pastir zlatom ote.</div>",
  "        <div class=\"fq-meta\">— Gundulić, <em>Dubravka</em>, II. činjenje · Opis nepravde · <strong>Antiteza: ljepota vs. zlato</strong> · Esejski signal: društveni sukob</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Miljenko je imô mili steć Dubravku cić lipote, nu se ukloni zakon sili: grd ju pastir zlatom ote. — Gundulić, Dubravka, II. činjenje')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 5. Najljepša je dana vila — ockvrnila svetkovina -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"sukob\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #5</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Ali se je ockvrnila svetkovina plemenita:<br>najljepša je dana vila najgrđemu s tamna mita.</div>",
  "        <div class=\"fq-meta\">— Gundulić, <em>Dubravka</em>, II. činjenje · Ljubdragov kontrast · <strong>Kulminacija nepravde</strong> · „Tamno mito\" = podmićivanje</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Ali se je ockvrnila svetkovina plemenita: najljepša je dana vila najgrđemu s tamna mita. — Gundulić, Dubravka, Ljubdragov monolog')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 6. Hoja Lero Dolerije — zazivanje boga -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"rituale\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #6</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">„Hoja, Lero, Dolerije!\"<br>vapijaše vas puk ini.</div>",
  "        <div class=\"fq-meta\">— Gundulić, <em>Dubravka</em>, III. činjenje · Obredni zaziv boga Lera u hramu · <strong>Pučko zazivanje</strong> · Zvučni ritualni element</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Hoja, Lero, Dolerije! vapijaše vas puk ini. — Gundulić, Dubravka, III. činjenje, obredni zaziv')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 7. Čudo u hramu -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"lero\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #7</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Ali na ognju plam potamni,<br>pod nami se tle ustrese,<br>crkva od groma bukom zamni,<br>a stup Lerov znojaše se.</div>",
  "        <div class=\"fq-meta\">— Gundulić, <em>Dubravka</em>, III. činjenje · <strong>Čudo boga Lera</strong> · Deus ex machina · Ključni moment raspleta</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Ali na ognju plam potamni, pod nami se tle ustrese, crkva od groma bukom zamni, a stup Lerov znojaše se. — Gundulić, Dubravka, III. činjenje, čudo u hramu')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 8. Miljenkov ulazak -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"lero\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #8</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Na došastje Miljenkovo<br>prista trešnja, gromnja umuknu,<br>prosvjetljen'je oganj novo<br>uze i u čis plamen buknu.</div>",
  "        <div class=\"fq-meta\">— Gundulić, <em>Dubravka</em>, III. činjenje · <strong>Rasplet: Miljenko u hramu</strong> · Čudo potvrđuje pravdu · Božanska volja</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Na došastje Miljenkovo prista trešnja, gromnja umuknu, prosvjetljenje oganj novo uze i u čis plamen buknu. — Gundulić, Dubravka, III. činjenje, Miljenkov ulazak')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- DINAMIČKI CITATNIK s filtrima -->",
  "    <div class=\"sec-hdr\"><div class=\"sec-line\"></div><div class=\"sec-badge\">Citatnik — dinamički pregled 40 citata</div><div class=\"sec-line\"></div></div>",
  "",
  "    <div class=\"cit-filters\" id=\"cit-filter-row\" style=\"display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px\">",
  "      <button class=\"cit-fbt on\" data-cat=\"all\" onclick=\"citFilter2('all',this)\">Sve</button>",
  "      <button class=\"cit-fbt\" data-cat=\"himna\" onclick=\"citFilter2('himna',this)\">Himna slobodi</button>",
  "      <button class=\"cit-fbt\" data-cat=\"sukob\" onclick=\"citFilter2('sukob',this)\">Sukob Miljenko/Grdan</button>",
  "      <button class=\"cit-fbt\" data-cat=\"lero\" onclick=\"citFilter2('lero',this)\">Bog Lero / čudo</button>",
  "      <button class=\"cit-fbt\" data-cat=\"drustvo\" onclick=\"citFilter2('drustvo',this)\">Društvena kritika</button>",
  "      <button class=\"cit-fbt\" data-cat=\"ljubav\" onclick=\"citFilter2('ljubav',this)\">Ljubav</button>",
  "      <button class=\"cit-fbt\" data-cat=\"ribar\" onclick=\"citFilter2('ribar',this)\">Ribar / Dalmacija</button>",
  "      <button class=\"cit-fbt\" data-cat=\"stars\" onclick=\"citFilter2('stars',this)\">⭐ Moji</button>",
  "    </div>",
  "",
  "    <div id=\"cit-grid2\"></div>",
  "",
  "    <div class=\"box-key\" style=\"margin-top:18px\">",
  "      <div class=\"box-key-lbl\">💡 Kako koristiti citatnik</div>",
  "      <div class=\"box-key-txt\">",
  "        <strong>1.</strong> Za esej: odaberi 2-3 citata koje ćeš koristiti kao argumente. Citiraj TOČNO.<br>",
  "        <strong>2.</strong> Za kratke odgovore: dovoljne su 2-3 ključne riječi iz citata.<br>",
  "        <strong>3.</strong> ⭐ Označi citate za sebe — spremaju se u lokalni profil (mt.hrv.h13.cit_stars).<br>",
  "        <strong>4.</strong> <strong>★ Napamet</strong> citati su obavezni — bez njih ne ideš na ispit.",
  "      </div>",
  "    </div>",
  "",
  "    <!-- DISCERE TOUCHPOINT — Tab 3 Citatnik -->",
  "    <div class=\"discere-banner\" style=\"margin-top:20px\" onclick=\"window.location.href='#discere'\">",
  "      <div class=\"discere-ico\">💬</div>",
  "      <div class=\"discere-txt\">",
  "        <div class=\"discere-ttl\">Discere · Citatna banka s kontekstom</div>",
  "        <div class=\"discere-sub\">Svi citati Dubravke + nastale komparacije s Judita, Hamlet, Život je san · <strong>Pro plan</strong></div>",
  "      </div>",
  "      <div class=\"discere-arrow\">→</div>",
  "    </div>",
  "",
  "    <div class=\"nav-row\">",
  "      <span class=\"nb-btn\" onclick=\"sw(2)\">← Esej alat</span>",
  "      <span class=\"nb-btn primary\" onclick=\"sw(4)\">📖 Pojmovnik →</span>",
  "    </div>",
  "",
  "  "
].join('\n');

function scheduleTabInit(functionName) {
  if (typeof window === 'undefined') return undefined;
  let attempts = 0;
  let timeoutId = 0;
  let frameId = 0;

  const run = () => {
    attempts += 1;
    const fn = window[functionName];
    if (typeof fn === 'function') {
      try { fn(); } catch {}
      return;
    }
    if (attempts < 12) timeoutId = window.setTimeout(run, 50);
  };

  frameId = window.requestAnimationFrame(run);
  return () => {
    window.cancelAnimationFrame(frameId);
    window.clearTimeout(timeoutId);
  };
}

export default function CitatnikH13() {
  useEffect(() => scheduleTabInit("renderCit2"), []);

  return (
    <div
      className="h13-react-citatnik-tab"
      style={{ display: 'contents' }}
      dangerouslySetInnerHTML={{ __html: CITATNIK_HTML }}
    />
  );
}
