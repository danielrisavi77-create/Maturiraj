'use client';

import { useEffect } from 'react';

const CITATNIK_HTML = [
  "",
  "    <div class=\"tags\">",
  "      <span class=\"pill p-pa\">August Šenoa</span>",
  "      <span class=\"pill p-br\">Prijan Lovro</span>",
  "      <span class=\"pill p-go\">★ Napamet</span>",
  "      <span class=\"pill p-t\">Filtriraj kategoriju</span>",
  "    </div>",
  "",
  "    <div class=\"box-int\">",
  "      <div class=\"box-int-lbl\">💬 Citati iz Prijana Lovre — arsenal za odgovore i interpretaciju</div>",
  "      <div class=\"box-int-txt\">Klikni ⎘ za kopiranje citata s atribucijom. Citati označeni <strong>★ Napamet</strong> prioritetno nauči — oni su najtraženiji u analizi ulomaka i kvizovima. Filtriraj po dijelu pripovijetke ili kategoriji.</div>",
  "    </div>",
  "",
  "    <!-- ★ NAPAMET — 8 glavnih citata -->",
  "    ",
  "    <div class=\"cit-search-row\" style=\"margin:14px 0 16px;display:flex;gap:8px;align-items:center\">",
  "      <label for=\"cit-search\" class=\"sr-only\" style=\"position:absolute;left:-9999px\">Pretraži citate</label>",
  "      <span style=\"font-size:18px;color:var(--gold,#e9b446)\">🔍</span>",
  "      <input type=\"search\" id=\"cit-search\" class=\"cit-search\" placeholder=\"Pretraži citate (npr. Šenoa, Lovro, okvir, realizam)…\" aria-label=\"Pretraži citate\" autocomplete=\"off\"",
  "        style=\"flex:1;padding:10px 14px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:10px;color:var(--t1,#f4ede5);font-family:var(--mono,monospace);font-size:13px\"",
  "        oninput=\"citSearch(this.value)\">",
  "      <button type=\"button\" class=\"cit-clear\" onclick=\"document.getElementById('cit-search').value='';citSearch('')\" aria-label=\"Očisti pretragu\" title=\"Očisti\"",
  "        style=\"padding:8px 12px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:8px;color:var(--t2,#c5b8aa);cursor:pointer;font-size:14px\">✕</button>",
  "    </div>",
  "<div class=\"sec-hdr\"><div class=\"sec-line\"></div><div class=\"sec-badge\">★ Napamet — 8 glavnih citata iz Prijana Lovre</div><div class=\"sec-line\"></div></div>",
  "",
  "    <!-- 1. Otvaranje okvira -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"okvir\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #1</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Jednoga mutnoga popodneva bilo se skupilo baš vrlo društvance. Župnik, velik politik; sudac, bijesan voćar; sudinja, dobra duša premda ponešto spore pameti i — neka lijepa, crnooka mlada gospođa u crno zavita, udova susjednoga vlastelina...</div>",
  "        <div class=\"fq-meta\">— Šenoa, <em>Prijan Lovro</em>, I. Uvodni okvir · <strong>Galerija seoskog društva s blagom ironijom</strong> · Karakterizacija likova kratkim potezima</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Jednoga mutnoga popodneva bilo se skupilo baš vrlo društvance... — Šenoa, Prijan Lovro, I. Uvodni okvir')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 2. Lovrova karakterizacija — idealist -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"lovro\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #2</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Bio je veliki intelektualac i idealist, jednakost i sloboda bili su njegovi ideali u koje je vjerovao.</div>",
  "        <div class=\"fq-meta\">— Sinteza karakterizacije Lovre · <strong>Ideološki temelj lika</strong> · Zato ne može pristati na kompromise — odatle tragedija</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Bio je veliki intelektualac i idealist, jednakost i sloboda bili su njegovi ideali u koje je vjerovao. — Sinteza karakterizacije Lovre, Prijan Lovro')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 3. Tema djela — sinteza -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"tema\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #3</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Tema ovog djela je težnja čovjeka da se iz primitivne, seoske sredine uzdigne do ravnopravnog građanina.</div>",
  "        <div class=\"fq-meta\">— Tematska formulacija · <strong>Glavna teza za svaki esej/odgovor o Prijanu Lovri</strong></div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Tema ovog djela je težnja čovjeka da se iz primitivne seoske sredine uzdigne do ravnopravnog građanina. — Tematska formulacija, Prijan Lovro')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 4. Šenoa o gradnji fabule -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"tema\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #4</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Šenoa je fabulu gradio na psihosocijalnim kontrastima. Glavni kontrast je želja — mogućnost, a sporedni su grad — selo, duhovno — svjetovno, bogatstvo — siromaštvo.</div>",
  "        <div class=\"fq-meta\">— Interpretacija · <strong>Strukturni ključ djela</strong> · Šenoin svjesni kompozicijski princip</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Šenoa je fabulu gradio na psihosocijalnim kontrastima. Glavni kontrast je želja — mogućnost. — Interpretacija Prijana Lovre')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 5. Lovro u Pragu / brak iz računa -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"prag\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #5</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Lovro je u Pragu upoznao djevojku po imenu Minka, kroz razgovor je doznao da je ona bogata a to je upravo njemu trebalo, bogata djevojka koja će izbaviti njegove roditelje iz dugova.</div>",
  "        <div class=\"fq-meta\">— Šenoa, <em>Prijan Lovro</em>, IV. Prag · <strong>Lovrova moralna kriza u jednoj rečenici</strong> · Tema novca vs. ljubavi</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Lovro je u Pragu upoznao djevojku po imenu Minka, kroz razgovor je doznao da je ona bogata. — Šenoa, Prijan Lovro, IV. Prag')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 6. Tragedija — samoubojstvo -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"tragedija\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #6</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Saznavši tu vijest iz Anđelijinih usta, Lovro si je pred njom britvom prerezao grkljan. I tako je pripovjedač izgubio prijatelja, Anđelija ljubav, a čitatelji još jednom nadu.</div>",
  "        <div class=\"fq-meta\">— Šenoa, <em>Prijan Lovro</em>, V. Tragedija · <strong>Vrhunac drame</strong> · Trostruki gubitak — prijatelja, ljubavi, nade</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Saznavši tu vijest iz Anđelijinih usta, Lovro si je pred njom britvom prerezao grkljan. — Šenoa, Prijan Lovro, V. Tragedija')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 7. Sinteza interpretacije — rat s malograđanstvom -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"tema\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #7</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Inteligentan seoski mladić koji se bori i gubi u tzv. ratu s malograđanskim društvom.</div>",
  "        <div class=\"fq-meta\">— Sinteza interpretacije · <strong>Najsažetija definicija djela</strong> · Koristi se kao uvodna teza za svaki odgovor</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Inteligentan seoski mladić koji se bori i gubi u ratu s malograđanskim društvom. — Sinteza interpretacije Prijana Lovre')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 8. Šenoa kao otac realizma -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"kontekst\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #8</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Šenoa je bio i utemeljitelj i najznačajniji predstavnik protorealizma. Upravo zato se ono i zove „Šenoino doba\".</div>",
  "        <div class=\"fq-meta\">— Književno-povijesna interpretacija · <strong>Šenoina pozicija u hrv. književnosti</strong> · Cijela epoha nazvana po njemu (1865.–1881.)</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Šenoa je bio i utemeljitelj i najznačajniji predstavnik protorealizma. Upravo zato se ono i zove Šenoino doba. — Književno-povijesna interpretacija')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- DINAMIČKI CITATNIK -->",
  "    <div class=\"sec-hdr\"><div class=\"sec-line\"></div><div class=\"sec-badge\">Citatnik — dinamički pregled 40 citata po dijelovima</div><div class=\"sec-line\"></div></div>",
  "",
  "    <div class=\"cit-filters\" id=\"cit-filter-row\" style=\"display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px\">",
  "      <button class=\"cit-fbt on\" data-cat=\"all\" onclick=\"citFilter2('all',this)\">Sve</button>",
  "      <button class=\"cit-fbt\" data-cat=\"okvir\" onclick=\"citFilter2('okvir',this)\">I. Okvir</button>",
  "      <button class=\"cit-fbt\" data-cat=\"djetinjstvo\" onclick=\"citFilter2('djetinjstvo',this)\">II. Djetinjstvo</button>",
  "      <button class=\"cit-fbt\" data-cat=\"skola\" onclick=\"citFilter2('skola',this)\">III. Škola</button>",
  "      <button class=\"cit-fbt\" data-cat=\"prag\" onclick=\"citFilter2('prag',this)\">IV. Prag</button>",
  "      <button class=\"cit-fbt\" data-cat=\"tragedija\" onclick=\"citFilter2('tragedija',this)\">V. Tragedija</button>",
  "      <button class=\"cit-fbt\" data-cat=\"lovro\" onclick=\"citFilter2('lovro',this)\">Lovro</button>",
  "      <button class=\"cit-fbt\" data-cat=\"tema\" onclick=\"citFilter2('tema',this)\">Teme/ideje</button>",
  "      <button class=\"cit-fbt\" data-cat=\"kontekst\" onclick=\"citFilter2('kontekst',this)\">Kontekst</button>",
  "      <button class=\"cit-fbt\" data-cat=\"stars\" onclick=\"citFilter2('stars',this)\">⭐ Moji</button>",
  "    </div>",
  "",
  "    <div id=\"cit-grid2\"></div>",
  "",
  "    <div class=\"box-key\" style=\"margin-top:18px\">",
  "      <div class=\"box-key-lbl\">💡 Kako koristiti citatnik Prijana Lovre</div>",
  "      <div class=\"box-key-txt\">",
  "        <strong>1.</strong> Za analizu ulomka: prepoznaj iz kojeg je dijela → zovi citate iz te kategorije za kontekstualizaciju.<br>",
  "        <strong>2.</strong> Za kratke odgovore: 2-3 ključne riječi iz citata su dovoljne.<br>",
  "        <strong>3.</strong> ⭐ Označi citate za sebe — spremaju se u lokalni profil (<code>mt.hrv.h15.cit_stars</code>).<br>",
  "        <strong>4.</strong> <strong>★ Napamet</strong> citati su obavezni — posebno tematska sinteza i citat o samoubojstvu.",
  "      </div>",
  "    </div>",
  "",
  "    <!-- DISCERE TOUCHPOINT -->",
  "    <div class=\"discere-banner\" style=\"margin-top:20px\" onclick=\"window.location.href='#discere'\">",
  "      <div class=\"discere-ico\">💬</div>",
  "      <div class=\"discere-txt\">",
  "        <div class=\"discere-ttl\">Discere · Citatna banka Prijana Lovre s kontekstom</div>",
  "        <div class=\"discere-sub\">Svi citati iz djela + kontekst dijela + audio interpretacije · <strong>Pro plan</strong></div>",
  "      </div>",
  "      <div class=\"discere-arrow\">→</div>",
  "    </div>",
  "",
  "    <div class=\"nav-row\">",
  "      <span class=\"nb-btn\" onclick=\"sw(2)\">← Esej alat</span>",
  "      <span class=\"nb-btn primary\" onclick=\"sw(4)\">📚 Pojmovnik →</span>",
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

export default function CitatnikH15() {
  useEffect(() => scheduleTabInit("renderCit2"), []);

  return (
    <div
      className="h15-react-citatnik-tab"
      style={{ display: 'contents' }}
      dangerouslySetInnerHTML={{ __html: CITATNIK_HTML }}
    />
  );
}
