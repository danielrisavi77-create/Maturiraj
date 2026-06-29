'use client';

import { useEffect } from 'react';

const CITATNIK_HTML = [
  "",
  "    <div class=\"tags\">",
  "      <span class=\"pill p-pa\">Miroslav Krleža</span>",
  "      <span class=\"pill p-br\">Gospoda Glembajevi</span>",
  "      <span class=\"pill p-go\">★ Napamet</span>",
  "      <span class=\"pill p-t\">Filtriraj kategoriju</span>",
  "    </div>",
  "",
  "    <div class=\"box-int\">",
  "      <div class=\"box-int-lbl\">💬 Citati iz Glembajevih — arsenal za esej i interpretaciju</div>",
  "      <div class=\"box-int-txt\">Klikni ⎘ za kopiranje citata s atribucijom. Citati označeni <strong>★ Napamet</strong> prioritetno nauči — oni se najčešće traže u analizi ulomaka i u školskom eseju. Filtriraj po činu, liku ili temi.</div>",
  "    </div>",
  "",
  "    <!-- ★ NAPAMET — 8 glavnih citata -->",
  "    ",
  "    <div class=\"cit-search-row\" style=\"margin:14px 0 16px;display:flex;gap:8px;align-items:center\">",
  "      <label for=\"cit-search\" class=\"sr-only\" style=\"position:absolute;left:-9999px\">Pretraži citate</label>",
  "      <span style=\"font-size:18px;color:var(--gold,#e9b446)\">🔍</span>",
  "      <input type=\"search\" id=\"cit-search\" class=\"cit-search\" placeholder=\"Pretraži citate (npr. Krleža, Glembay, Leone, Charlotta)…\" aria-label=\"Pretraži citate\" autocomplete=\"off\"",
  "        style=\"flex:1;padding:10px 14px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:10px;color:var(--t1,#f4ede5);font-family:var(--mono,monospace);font-size:13px\"",
  "        oninput=\"citSearch(this.value)\">",
  "      <button type=\"button\" class=\"cit-clear\" onclick=\"document.getElementById('cit-search').value='';citSearch('')\" aria-label=\"Očisti pretragu\" title=\"Očisti\"",
  "        style=\"padding:8px 12px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:8px;color:var(--t2,#c5b8aa);cursor:pointer;font-size:14px\">✕</button>",
  "    </div>",
  "<div class=\"sec-hdr\"><div class=\"sec-line\"></div><div class=\"sec-badge\">★ Napamet — 8 glavnih citata iz Glembajevih</div><div class=\"sec-line\"></div></div>",
  "",
  "    <!-- 1. Leoneova ključna izjava -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"leone\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #1</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Od prvog dana, kad sam počeo razmišljati, ne radim drugo nego se borim protiv Glembaya u sebi.</div>",
  "        <div class=\"fq-meta\">— Leone Glembay, <em>Gospoda Glembajevi</em>, I. čin · <strong>Ključna izjava cijele drame</strong> · Tema borbe protiv biološkog nasljedstva</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Od prvog dana, kad sam počeo razmišljati, ne radim drugo nego se borim protiv Glembaya u sebi. — Leone Glembay, Gospoda Glembajevi, I. čin')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 2. Krleža o djelu (vlastita fraza) -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"krleza\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #2</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Glembajevi su neka vrsta dekorativnog panoa naslikanog po motivu jedne građanske civilizacije na odlasku u agoniju, i imaju karakter poetskog lirskog poniranja u sve elemente takozvane psihološke drame.</div>",
  "        <div class=\"fq-meta\">— Miroslav Krleža o vlastitom djelu · <strong>Autorova samointerpretacija</strong> · Klasa u agoniji + psihološka drama</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Glembajevi su neka vrsta dekorativnog panoa naslikanog po motivu jedne građanske civilizacije na odlasku u agoniju. — Miroslav Krleža o vlastitom djelu')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 3. Barboczyjeva legenda -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"tema\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #3</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Svi su Glembajevi prokleti — ubojice i varalice.</div>",
  "        <div class=\"fq-meta\">— Stara Barboczyjeva (legenda), <em>Gospoda Glembajevi</em>, I. čin · <strong>Proročanstvo koje se u III. činu ostvaruje</strong> · Tematski temelj drame</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Svi su Glembajevi prokleti — ubojice i varalice. — Stara Barboczyjeva, Gospoda Glembajevi, I. čin')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 4. Leone Angeliki -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"cin1\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #4</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Ti si jedino u što vjerujem u glembajevskoj kući.</div>",
  "        <div class=\"fq-meta\">— Leone Angeliki, <em>Gospoda Glembajevi</em>, I. čin · <strong>Erotska napetost</strong> · Angelika kao jedina „čista\" u kući</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Ti si jedino u što vjerujem u glembajevskoj kući. — Leone Angeliki, Gospoda Glembajevi, I. čin')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 5. Finalna rečenica -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"cin3\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #5</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Cvrkut ptica u vrtu.</div>",
  "        <div class=\"fq-meta\">— Didaskalija (završetak), <em>Gospoda Glembajevi</em>, III. čin · <strong>Metafizička ravnodušnost prirode</strong> · Ironični finale</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Cvrkut ptica u vrtu. — Didaskalija, završetak Glembajevih, III. čin')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 6. Sukob oca i sina -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"cin2\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #6</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Sve što je ona godinama krala od Glembaya, ja sam to uzeo natrag.</div>",
  "        <div class=\"fq-meta\">— Leone barunici, <em>Gospoda Glembajevi</em>, III. čin · <strong>Konflikt za nasljedstvo</strong> · Priprema ubojstva</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Sve što je ona godinama krala od Glembaya, ja sam to uzeo natrag. — Leone barunici, III. čin')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 7. Barunica citira Barboczyjevu -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"cin3\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #7</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Dobro je rekla stara Barboczyjeva — svi su Glembajevi ubojice i varalice!</div>",
  "        <div class=\"fq-meta\">— Barunica Castelli Leoneu, <em>Gospoda Glembajevi</em>, III. čin · <strong>Proročanstvo se zatvara</strong> · Uvod u ubojstvo</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Dobro je rekla stara Barboczyjeva — svi su Glembajevi ubojice i varalice! — Barunica Castelli, III. čin')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- 8. Krležin status djela -->",
  "    <div class=\"featured-quote\" data-cit-cat=\"krleza\">",
  "      <span class=\"fq-napamet\">★ NAPAMET #8</span>",
  "      <div class=\"fq-mark\">«</div>",
  "      <div class=\"fq-body\">",
  "        <div class=\"fq-text\">Glembajevi su u hrvatsku književnost došli 40 godina prekasno.</div>",
  "        <div class=\"fq-meta\">— Miroslav Krleža o vlastitom djelu · <strong>Autorova ocjena</strong> · Drama klasične forme u avangardnom vremenu</div>",
  "      </div>",
  "      <button type=\"button\" class=\"fq-copy\" onclick=\"fqCopy(this,'Glembajevi su u hrvatsku književnost došli 40 godina prekasno. — Miroslav Krleža o vlastitom djelu')\">⎘</button>",
  "    </div>",
  "",
  "    <!-- DINAMIČKI CITATNIK -->",
  "    <div class=\"sec-hdr\"><div class=\"sec-line\"></div><div class=\"sec-badge\">Citatnik — dinamički pregled 40 citata po kategorijama</div><div class=\"sec-line\"></div></div>",
  "",
  "    <div class=\"cit-filters\" id=\"cit-filter-row\" style=\"display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px\">",
  "      <button class=\"cit-fbt on\" data-cat=\"all\" onclick=\"citFilter2('all',this)\">Sve</button>",
  "      <button class=\"cit-fbt\" data-cat=\"cin1\" onclick=\"citFilter2('cin1',this)\">I. čin</button>",
  "      <button class=\"cit-fbt\" data-cat=\"cin2\" onclick=\"citFilter2('cin2',this)\">II. čin</button>",
  "      <button class=\"cit-fbt\" data-cat=\"cin3\" onclick=\"citFilter2('cin3',this)\">III. čin</button>",
  "      <button class=\"cit-fbt\" data-cat=\"leone\" onclick=\"citFilter2('leone',this)\">Leone</button>",
  "      <button class=\"cit-fbt\" data-cat=\"tema\" onclick=\"citFilter2('tema',this)\">Teme/ideje</button>",
  "      <button class=\"cit-fbt\" data-cat=\"krleza\" onclick=\"citFilter2('krleza',this)\">Krleža o djelu</button>",
  "      <button class=\"cit-fbt\" data-cat=\"kontekst\" onclick=\"citFilter2('kontekst',this)\">Kontekst</button>",
  "      <button class=\"cit-fbt\" data-cat=\"stars\" onclick=\"citFilter2('stars',this)\">⭐ Moji</button>",
  "    </div>",
  "",
  "    <div id=\"cit-grid2\"></div>",
  "",
  "    <div class=\"box-key\" style=\"margin-top:18px\">",
  "      <div class=\"box-key-lbl\">💡 Kako koristiti citatnik Glembajevih</div>",
  "      <div class=\"box-key-txt\">",
  "        <strong>1.</strong> Za esej: ugradi 2-3 citata iz različitih činova (I. + II. + III.) da pokažeš kronološki razvoj.<br>",
  "        <strong>2.</strong> Za analizu ulomka: prepoznaj iz kojeg je čina → koristi citate iz te kategorije.<br>",
  "        <strong>3.</strong> ⭐ Označi citate za sebe — spremaju se u lokalni profil (<code>mt.hrv.h16.cit_stars</code>).<br>",
  "        <strong>4.</strong> <strong>★ Napamet</strong> citati obvezni — posebno „Od prvog dana... borim se protiv Glembaya u sebi\" + Krležin „dekorativni pano\".",
  "      </div>",
  "    </div>",
  "",
  "    <!-- DISCERE TOUCHPOINT -->",
  "    <div class=\"discere-banner\" style=\"margin-top:20px\" onclick=\"window.location.href='#discere'\">",
  "      <div class=\"discere-ico\">💬</div>",
  "      <div class=\"discere-txt\">",
  "        <div class=\"discere-ttl\">Discere · Citatna banka Glembajevih s kontekstom</div>",
  "        <div class=\"discere-sub\">Svi citati iz drame + kontekst čina + audio interpretacije · <strong>Pro plan</strong></div>",
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

export default function CitatnikH16() {
  useEffect(() => scheduleTabInit("renderCit2"), []);

  return (
    <div
      className="h16-react-citatnik-tab"
      style={{ display: 'contents' }}
      dangerouslySetInnerHTML={{ __html: CITATNIK_HTML }}
    />
  );
}
