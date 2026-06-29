'use client';

import { useEffect } from 'react';

const CITATNIK_HTML = [
  "",
  "    <div class=\"tags\">",
  "      <span class=\"pill p-pa\">Mažuranić</span>",
  "      <span class=\"pill p-br\">Smrt Smail-age Čengića</span>",
  "      <span class=\"pill p-go\">★ Napamet</span>",
  "      <span class=\"pill p-t\">Filtriraj kategoriju</span>",
  "    </div>",
  "",
  "    <div class=\"box-int\">",
  "      <div class=\"box-int-lbl\">💬 Citati iz Smrti Smail-age — arsenal za odgovore i interpretaciju</div>",
  "      <div class=\"box-int-txt\">Klikni ⎘ za kopiranje citata s atribucijom. Citati označeni <strong>★ Napamet</strong> prioritetno nauči napamet — oni su najtraženiji u analizi ulomaka i kvizovima. Filtriraj po pjevanju ili kategoriji.</div>",
  "    </div>",
  "",
  "    <!-- ★ NAPAMET — 8 glavnih citata -->",
  "    ",
  "    <div class=\"cit-search-row\" style=\"margin:14px 0 16px;display:flex;gap:8px;align-items:center\">",
  "      <label for=\"cit-search\" class=\"sr-only\" style=\"position:absolute;left:-9999px\">Pretraži citate</label>",
  "      <span style=\"font-size:18px;color:var(--gold,#e9b446)\">🔍</span>",
  "      <input type=\"search\" id=\"cit-search\" class=\"cit-search\" placeholder=\"Pretraži citate (npr. Mažuranić, Smail-aga, deseterac, agovanje)…\" aria-label=\"Pretraži citate\" autocomplete=\"off\"",
  "        style=\"flex:1;padding:10px 14px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:10px;color:var(--t1,#f4ede5);font-family:var(--mono,monospace);font-size:13px\"",
  "        oninput=\"citSearch(this.value)\">",
  "      <button type=\"button\" class=\"cit-clear\" onclick=\"document.getElementById('cit-search').value='';citSearch('')\" aria-label=\"Očisti pretragu\" title=\"Očisti\"",
  "        style=\"padding:8px 12px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:8px;color:var(--t2,#c5b8aa);cursor:pointer;font-size:14px\">✕</button>",
  "    </div>",
  "<div class=\"sec-hdr\"><div class=\"sec-line\"></div><div class=\"sec-badge\">★ Napamet — 8 glavnih citata iz Smrti Smail-age</div><div class=\"sec-line\"></div></div>",
  "",
  "    <!-- 1. Durakova opomena — NAJVAŽNIJI -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"agovanje\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #1</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Boj se onoga, tko je viko<br>Bez golema mrijet jada!</div>",
  "        <div class=\"fq-meta\">— Mažuranić, <em>Smrt Smail-age Čengića</em>, I. Agovanje · <strong>Durakova opomena Smail-agi</strong> · NAJPOZNATIJI CITAT DJELA · Tiranin se boji onoga tko nema što izgubiti</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Boj se onoga, tko je viko bez golema mrijet jada! — Mažuranić, Smrt Smail-age Čengića, I. Agovanje, Durakova opomena')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 2. Slavenska antiteza — početak Noćnika -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"nocnik\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #2</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Je li hajduk, il’ uhoda turska,<br>Što uhodi sviloruna krda,<br>Il’ volova stada vitoroga?<br>Nit je hajduk, nit uhoda turska,<br>Već Novica, Čengića kavazu...</div>",
  "        <div class=\"fq-meta\">— Mažuranić, <em>Smrt Smail-age Čengića</em>, II. Noćnik · <strong>Klasična slavenska antiteza</strong> · Tehnika pitanja–negacije–odgovora iz narodne poezije</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Je li hajduk, il’ uhoda turska... Nit je hajduk, nit uhoda turska, već Novica, Čengića kavazu... — Mažuranić, Smrt Smail-age Čengića, II. Noćnik')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 3. Mlađi Turci / mučenja -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"agovanje\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #3</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Tko je mlađi, rado gleda<br>Na lipovu krstu muke;<br>A tko starij’, muke iste<br>Sam na sebi s vlaške ruke<br>Već unaprijed od strâ ćuti.</div>",
  "        <div class=\"fq-meta\">— Mažuranić, <em>Smrt Smail-age Čengića</em>, I. Agovanje · <strong>Opis turskog logora</strong> · Mladi uživaju, stari slute osvetu · Psihološka diferencijacija</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Tko je mlađi, rado gleda na lipovu krstu muke; a tko starij’, muke iste sam na sebi s vlaške ruke već unaprijed od strâ ćuti. — Mažuranić, Smrt Smail-age Čengića, I. Agovanje')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 4. Svećenikov biblijski stav -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"ceta\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #4</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Sve je grijeh, sve su djela prika;<br>Bez kajanja nema oprosnika.</div>",
  "        <div class=\"fq-meta\">— Mažuranić, <em>Smrt Smail-age Čengića</em>, III. Četa · <strong>Svećenikov govor</strong> · Biblijska moralna formula · Ideološki centar djela</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Sve je grijeh, sve su djela prika; bez kajanja nema oprosnika. — Mažuranić, Smrt Smail-age Čengića, III. Četa, svećenikov govor')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 5. Novica prelazi na Cetinje -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"nocnik\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #5</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Ter se maša kršnijeh Ćeklića...<br>A Novica pade na Cetinje...</div>",
  "        <div class=\"fq-meta\">— Mažuranić, <em>Smrt Smail-age Čengića</em>, II. Noćnik · <strong>Novičina moralna transformacija</strong> · „Pade\" kao simbol pokore i preobraćenja</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Ter se maša kršnijeh Ćeklića... A Novica pade na Cetinje... — Mažuranić, Smrt Smail-age Čengića, II. Noćnik')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 6. Rugalica Bauka nakon bitke -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"harac\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #6</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">A u zemlji hercegovoj...<br>Tu nek plijen vranom vranu stoji.</div>",
  "        <div class=\"fq-meta\">— Mažuranić, <em>Smrt Smail-age Čengića</em>, IV. Harač · <strong>Baukova rugalica mrtvom agi</strong> · Tiranin postaje plijen gavrana · Metafora poraza</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'A u zemlji hercegovoj... Tu nek plijen vranom vranu stoji. — Mažuranić, Smrt Smail-age Čengića, IV. Harač, Baukova rugalica')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 7. Agin karakter — mrki vuk -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"agovanje\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #7</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Štono sam vî Turčin pripravio...<br>Kome britku palu namjenjuje.</div>",
  "        <div class=\"fq-meta\">— Mažuranić, <em>Smrt Smail-age Čengića</em>, I. Agovanje · <strong>Karakterizacija Smail-age</strong> · Hladan, svirep, grub · „Britka pala\" = oštra sablja kao simbol tiranske moći</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Štono sam vî Turčin pripravio... Kome britku palu namjenjuje. — Mažuranić, Smrt Smail-age Čengića, I. Agovanje')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 8. Zmijska slika Novice — metafora -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"nocnik\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #8</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">S planinskoga gladna miša...</div>",
  "        <div class=\"fq-meta\">— Mažuranić, <em>Smrt Smail-age Čengića</em>, II. Noćnik · <strong>Metaforički opis Novice</strong> · Slika gladnog miša — izrod gladi za osvetom · Romantičarska životinjska metafora</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'S planinskoga gladna miša... — Mažuranić, Smrt Smail-age Čengića, II. Noćnik, metafora o Novici')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- DINAMIČKI CITATNIK -->",
  "    <div class=\"sec-hdr\"><div class=\"sec-line\"></div><div class=\"sec-badge\">Citatnik — dinamički pregled 40 citata po pjevanjima</div><div class=\"sec-line\"></div></div>",
  "",
  "    <div class=\"cit-filters\" id=\"cit-filter-row\" style=\"display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px\">",
  "      <button class=\"cit-fbt on\" data-cat=\"all\" onclick=\"citFilter2('all',this)\">Sve</button>",
  "      <button class=\"cit-fbt\" data-cat=\"agovanje\" onclick=\"citFilter2('agovanje',this)\">I. Agovanje</button>",
  "      <button class=\"cit-fbt\" data-cat=\"nocnik\" onclick=\"citFilter2('nocnik',this)\">II. Noćnik</button>",
  "      <button class=\"cit-fbt\" data-cat=\"ceta\" onclick=\"citFilter2('ceta',this)\">III. Četa</button>",
  "      <button class=\"cit-fbt\" data-cat=\"harac\" onclick=\"citFilter2('harac',this)\">IV. Harač</button>",
  "      <button class=\"cit-fbt\" data-cat=\"kob\" onclick=\"citFilter2('kob',this)\">V. Kob</button>",
  "      <button class=\"cit-fbt\" data-cat=\"likovi\" onclick=\"citFilter2('likovi',this)\">Likovi</button>",
  "      <button class=\"cit-fbt\" data-cat=\"jezik\" onclick=\"citFilter2('jezik',this)\">Jezik/stih</button>",
  "      <button class=\"cit-fbt\" data-cat=\"stars\" onclick=\"citFilter2('stars',this)\">⭐ Moji</button>",
  "    </div>",
  "",
  "    <div id=\"cit-grid2\"></div>",
  "",
  "    <div class=\"box-key\" style=\"margin-top:18px\">",
  "      <div class=\"box-key-lbl\">💡 Kako koristiti citatnik Smrti Smail-age</div>",
  "      <div class=\"box-key-txt\">",
  "        <strong>1.</strong> Za analizu ulomka: prepoznaj pjevanje → zovi citate iz te kategorije za kontekstualizaciju.<br>",
  "        <strong>2.</strong> Za kratke odgovore: 2-3 ključne riječi iz citata su dovoljne.<br>",
  "        <strong>3.</strong> ⭐ Označi citate za sebe — spremaju se u lokalni profil (<code>mt.hrv.h14.cit_stars</code>).<br>",
  "        <strong>4.</strong> <strong>★ Napamet</strong> citati su obavezni — posebno Durakova opomena i slavenska antiteza.",
  "      </div>",
  "    </div>",
  "",
  "    <!-- DISCERE TOUCHPOINT -->",
  "    <div class=\"discere-banner\" style=\"margin-top:20px\" onclick=\"window.location.href='#discere'\">",
  "      <div class=\"discere-ico\">💬</div>",
  "      <div class=\"discere-txt\">",
  "        <div class=\"discere-ttl\">Discere · Citatna banka Smail-age s kontekstom</div>",
  "        <div class=\"discere-sub\">Svi citati iz djela + kontekst pjevanja + audio interpretacije · <strong>Pro plan</strong></div>",
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

export default function CitatnikH14() {
  useEffect(() => scheduleTabInit("renderCit2"), []);

  return (
    <div
      className="h14-react-citatnik-tab"
      style={{ display: 'contents' }}
      dangerouslySetInnerHTML={{ __html: CITATNIK_HTML }}
    />
  );
}
