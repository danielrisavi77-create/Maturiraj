/**
 * H12 — Maturiraj.hr — Hrvatski H12 · Marulić i Judita · Hrvatska renesansa
 * Auto-generated from Maturiraj_Hrvatski_H12.html
 * 
 * Strategy: Hybrid HTML-in-JSX (Strategy C)
 * - Body HTML rendered via dangerouslySetInnerHTML
 * - Inline <style> blocks injected at mount
 * - Inline <script> blocks executed at mount
 * - All onclick/oninput/etc. handlers preserved
 * - SEO via Next.js Metadata API (in page.jsx)
 */
'use client';

import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import ChapterWrapper from './ChapterWrapper';
import { SHARED_LIT_CSS } from './shared-lit-styles';
import CitatnikH12 from './H12_CitatnikTab';
import PojmovnikH12 from './H12_PojmovnikTab';
import {
  HeroQuoteJudita,
  StatCardsJudita,
  TimelineMarulic,
  CompareAlegorijaJudita,
  PopKulturaMarulic,
  DiscereBannerPrimaryH12,
  VideoCardPrimaryH12,
  VideoCardSecondaryH12,
  VideoCardTertiaryH12,
  VideoCardQuaternaryH12,
  AccordionPjevanja,
  AccordionEsejBridgeH12,
  AuthorProfileMarulicH12,
  NcvvoAuthBoxH12,
} from './H12_Additions';

const BODY_HTML = `<div class="read-progress" aria-hidden="true"><div class="read-progress-bar" id="rpbar"></div></div>
<a class="skip-link" href="#main">Preskoči na sadržaj</a>
<button class="btt" id="btt" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Natrag na vrh" title="Natrag na vrh">↑</button>


<!-- Feedback / bug report modal (v3.6.1) -->
<div class="modal-backdrop" id="fb-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="fb-modal-title" onclick="if(event.target===this)closeFeedbackModal()">
  <div class="modal" role="document">
    <button class="modal-close" onclick="closeFeedbackModal()" aria-label="Zatvori">✕</button>
    <div class="modal-ico">📝</div>
    <div class="modal-eye">PRIJAVA / PRIJEDLOG</div>
    <div class="modal-title" id="fb-modal-title">Javi nam što ne valja</div>
    <div class="modal-desc">Uočio si grešku u sadržaju, bug u aplikaciji ili imaš prijedlog? <strong>Opiši ovdje</strong> — čitamo svaku poruku.</div>

    <div class="modal-msg" id="fb-msg"></div>

    <form class="fb-form" id="fb-form" onsubmit="return submitFeedback(event)">
      <!-- Tip -->
      <label class="fb-label">Vrsta poruke</label>
      <div class="fb-types" role="radiogroup" aria-label="Vrsta poruke">
        <label class="fb-type-opt"><input type="radio" name="fb-type" value="content_error" checked><span>📖 Greška u sadržaju</span></label>
        <label class="fb-type-opt"><input type="radio" name="fb-type" value="bug"><span>🐛 Bug u aplikaciji</span></label>
        <label class="fb-type-opt"><input type="radio" name="fb-type" value="suggestion"><span>💡 Prijedlog</span></label>
        <label class="fb-type-opt"><input type="radio" name="fb-type" value="praise"><span>💚 Pohvala</span></label>
      </div>

      <!-- Poruka -->
      <label class="fb-label" for="fb-message">Poruka <span class="fb-req">*</span></label>
      <textarea id="fb-message" class="fb-textarea" required minlength="3" maxlength="5000" rows="5" placeholder="Opiši što si uočio — što detaljnije, lakše ćemo popraviti. Npr. 'U kvizu pitanje 3 ima grešku: točan odgovor je X, a ne Y.'"></textarea>
      <div class="fb-counter"><span id="fb-char-count">0</span> / 5000</div>

      <!-- Email (optional) -->
      <label class="fb-label" for="fb-email">Tvoj e-mail <span class="fb-hint">(neobavezno — samo ako želiš odgovor)</span></label>
      <input type="email" id="fb-email" class="modal-input" placeholder="tvoj@email.hr" autocomplete="email">

      <button type="submit" class="modal-submit" id="fb-submit" style="width:100%;margin-top:14px">Pošalji →</button>
      <div class="modal-small" style="margin-top:10px">Tvoj e-mail čuvamo samo za odgovor. Ne šaljemo ništa drugo.</div>
    </form>
  </div>
</div>
<div class="sb-overlay" id="overlay" onclick="closeSb()"></div>
<button class="sb-hamburger" id="hamburger" onclick="openSb()" aria-label="Izbornik">
  <span></span><span></span><span></span>
</button>

<div class="shell">
<!-- SIDEBAR -->
<nav class="sidebar" id="sidebar" role="navigation" aria-label="Navigacija poglavlja">
  <div class="sb-brand">
    <div class="sb-logo">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
        <path d="M16 3L29 9.5V22.5L16 29L3 22.5V9.5Z" stroke="#0F0605" stroke-width="1.5"/>
        <path d="M16 3V29M3 9.5L29 22.5M29 9.5L3 22.5" stroke="#0F0605" stroke-width=".8" opacity=".5"/>
        <circle cx="16" cy="16" r="2.5" fill="#0F0605" opacity=".7"/>
      </svg>
    </div>
    <div>
      <div class="sb-name">Maturiraj.hr</div>
      <div class="sb-sub">HRVATSKI</div>
    </div>
    <button type="button" class="sb-hamburger" onclick="toggleSidebar()" aria-label="Zatvori izbornik">
      <span></span><span></span><span></span>
    </button>
  </div>

  <div class="sb-prog-wrap">
    <div class="sb-prog-label"><span>napredak</span><span id="sb-prog-pct">0%</span></div>
    <div class="sb-prog-track"><div class="sb-prog-bar" id="sb-prog-bar" style="width:0%"></div></div>
  </div>

  <!-- ══ SVJETSKA KNJIŽEVNOST ══ -->
  <div class="sb-era">// Svjetska književnost</div>
  <a class="sb-item" data-code="h01" href="/skripte/hrv/h01"><span class="sb-dot"></span>H01 · Temelji i antika</a>
  <a class="sb-item" data-code="h02" href="/skripte/hrv/h02"><span class="sb-dot"></span>H02 · Srednji vijek</a>
  <a class="sb-item" data-code="h03" href="/skripte/hrv/h03"><span class="sb-dot"></span>H03 · Renesansa</a>
  <a class="sb-item" data-code="h04" href="/skripte/hrv/h04"><span class="sb-dot"></span>H04 · Barok i klasicizam</a>
  <a class="sb-item" data-code="h05" href="/skripte/hrv/h05"><span class="sb-dot"></span>H05 · Prosvjetiteljstvo</a>
  <a class="sb-item" data-code="h06" href="/skripte/hrv/h06"><span class="sb-dot"></span>H06 · Romantizam</a>
  <a class="sb-item" data-code="h07" href="/skripte/hrv/h07"><span class="sb-dot"></span>H07 · Realizam</a>
  <a class="sb-item" data-code="h08" href="/skripte/hrv/h08"><span class="sb-dot"></span>H08 · Moderna</a>
  <a class="sb-item" data-code="h09" href="/skripte/hrv/h09"><span class="sb-dot"></span>H09 · Avangarda i 20. st.</a>
  <a class="sb-item" data-code="h10" href="/skripte/hrv/h10"><span class="sb-dot"></span>H10 · Postmoderna</a>

  <!-- ══ HRVATSKA KNJIŽEVNOST ══ -->
  <div class="sb-era">// Hrvatska književnost</div>
  <a class="sb-item" data-code="h11" href="/skripte/hrv/h11"><span class="sb-dot"></span>H11 · Stari hrv. pisci</a>
  <a class="sb-item active" data-code="h12" href="/skripte/hrv/h12"><span class="sb-dot"></span>H12 · Marulić i hrv. rens.</a>
  <a class="sb-item" data-code="h13" href="/skripte/hrv/h13"><span class="sb-dot"></span>H13 · Hrv. barok — Gundulić</a>
  <a class="sb-item" data-code="h14" href="/skripte/hrv/h14"><span class="sb-dot"></span>H14 · Preporod</a>
  <a class="sb-item" data-code="h15" href="/skripte/hrv/h15"><span class="sb-dot"></span>H15 · Šenoa i realizam</a>
  <a class="sb-item" data-code="h16" href="/skripte/hrv/h16"><span class="sb-dot"></span>H16 · Krleža i moderna</a>

  <!-- ══ STIL I IZRAZ ══ -->
  <div class="sb-era">// Stil i izraz</div>
  <a class="sb-item" data-code="h17" href="/skripte/hrv/h17"><span class="sb-dot"></span>H17 · Stilske figure</a>
  <a class="sb-item" data-code="h18" href="/skripte/hrv/h18"><span class="sb-dot"></span>H18 · Versifikacija</a>

  <!-- ══ JEZIKOSLOVLJE ══ -->
  <div class="sb-era">// Jezikoslovlje</div>
  <a class="sb-item" data-code="h19" href="/skripte/hrv/h19"><span class="sb-dot"></span>H19 · Fonetika i fonologija</a>
  <a class="sb-item" data-code="h20" href="/skripte/hrv/h20"><span class="sb-dot"></span>H20 · Morfologija</a>
  <a class="sb-item" data-code="h21" href="/skripte/hrv/h21"><span class="sb-dot"></span>H21 · Sintaksa</a>
  <a class="sb-item" data-code="h22" href="/skripte/hrv/h22"><span class="sb-dot"></span>H22 · Leksikologija</a>
  <a class="sb-item" data-code="h23" href="/skripte/hrv/h23"><span class="sb-dot"></span>H23 · Povijest hrv. jezika</a>
  <a class="sb-item" data-code="h24" href="/skripte/hrv/h24"><span class="sb-dot"></span>H24 · Hrv. narječja</a>

  <!-- ══ PRAVOPIS ══ -->
  <div class="sb-era">// Pravopis</div>
  <a class="sb-item" data-code="h25" href="/skripte/hrv/h25"><span class="sb-dot"></span>H25 · Pravopisna pravila</a>
  <a class="sb-item" data-code="h26" href="/skripte/hrv/h26"><span class="sb-dot"></span>H26 · Interpunkcija</a>

  <!-- ══ PISANJE ══ -->
  <div class="sb-era">// Pisanje</div>
  <a class="sb-item" data-code="h27" href="/skripte/hrv/h27"><span class="sb-dot"></span>H27 · Školski esej</a>
  <a class="sb-item" data-code="h28" href="/skripte/hrv/h28"><span class="sb-dot"></span>H28 · Sažetak</a>

  <!-- ══ DODATNO — obvezatna djela (deep-dive za esej 2026 + čitanje) ══ -->
  <div class="sb-era sb-era-d">// Dodatno · obvezatna djela</div>
  <div class="sb-d-meta">Deep-dive za esej (30 bod) + čitanje (20 bod)</div>

  <a class="sb-item sb-d" data-code="d01" href="/skripte/hrv"><span class="sb-dot"></span>D01 · Sofoklo · Antigona</a>
  <a class="sb-item sb-d" data-code="d02" data-star="2026" href="/skripte/hrv"><span class="sb-dot"></span>D02 · Petrarca · izbor</a>
  <a class="sb-item sb-d" data-code="d03" href="/skripte/hrv"><span class="sb-dot"></span>D03 · Shakespeare · Hamlet</a>
  <a class="sb-item sb-d" data-code="d04" data-star="2026" href="/skripte/hrv"><span class="sb-dot"></span>D04 · Calderón · Život je san</a>
  <a class="sb-item sb-d" data-code="d05" href="/skripte/hrv"><span class="sb-dot"></span>D05 · Molière · Škrtac</a>
  <a class="sb-item sb-d" data-code="d06" data-star="2026" href="/skripte/hrv"><span class="sb-dot"></span>D06 · Goethe · Werther</a>
  <a class="sb-item sb-d" data-code="d07" href="/skripte/hrv"><span class="sb-dot"></span>D07 · Dostojevski · Zločin i kazna</a>
  <a class="sb-item sb-d" data-code="d08" href="/skripte/hrv"><span class="sb-dot"></span>D08 · Kafka · Preobražaj</a>
  <a class="sb-item sb-d" data-code="d09" href="/skripte/hrv"><span class="sb-dot"></span>D09 · Camus · Stranac</a>
  <a class="sb-item sb-d" data-code="d10" href="/skripte/hrv"><span class="sb-dot"></span>D10 · Baudelaire · Cvjetovi zla</a>
  <a class="sb-item sb-d" data-code="d11" href="/skripte/hrv"><span class="sb-dot"></span>D11 · Držić · Novela od Stanca</a>
  <a class="sb-item sb-d active" data-code="d12" href="/skripte/hrv"><span class="sb-dot"></span>D12 · Marulić · Judita</a>
  <a class="sb-item sb-d" data-code="d13" href="/skripte/hrv"><span class="sb-dot"></span>D13 · Gundulić · Dubravka</a>
  <a class="sb-item sb-d" data-code="d14" href="/skripte/hrv"><span class="sb-dot"></span>D14 · Mažuranić · Smail-aga</a>
  <a class="sb-item sb-d" data-code="d15" href="/skripte/hrv"><span class="sb-dot"></span>D15 · Šenoa · Prijan Lovro</a>
  <a class="sb-item sb-d" data-code="d16" data-star="2026" href="/skripte/hrv"><span class="sb-dot"></span>D16 · Novak · Posljednji Stipančići</a>
  <a class="sb-item sb-d" data-code="d17" href="/skripte/hrv"><span class="sb-dot"></span>D17 · Kranjčević · poezija</a>
  <a class="sb-item sb-d" data-code="d18" href="/skripte/hrv"><span class="sb-dot"></span>D18 · Matoš · izbor</a>
  <a class="sb-item sb-d" data-code="d19" href="/skripte/hrv"><span class="sb-dot"></span>D19 · Nazor · poezija</a>
  <a class="sb-item sb-d" data-code="d20" href="/skripte/hrv"><span class="sb-dot"></span>D20 · Šimić · poezija</a>
  <a class="sb-item sb-d" data-code="d21" data-star="2026" href="/skripte/hrv"><span class="sb-dot"></span>D21 · Krleža · Glembajevi</a>
  <a class="sb-item sb-d" data-code="d22" data-star="2026" href="/skripte/hrv"><span class="sb-dot"></span>D22 · Marinković · Kiklop</a>

  <div class="sb-footer" id="sb-footer">
    <span id="sb-footer-pos">12 / 28</span> · <span id="sb-footer-title">marulić i hrv. renesansa</span>
    <br>maturiraj.hr · hrvatski · v2
  </div>
</nav>

<!-- MAIN -->
<main class="main" id="main" role="main">
<div class="content-wrap">

  <!-- BREADCRUMB -->
  <div class="bc">
    <a class="bc-link" href="/">Maturiraj.hr</a><span class="bc-sep">/</span>
    <a class="bc-link" href="/skripte/hrv">Skripte</a><span class="bc-sep">/</span>
    <a class="bc-link" href="/skripte/hrv">Hrvatski jezik</a><span class="bc-sep bc-tab-sep">/</span>
    <span class="bc-cur">H12 · Marulić i Judita</span>
    <span class="bc-sep bc-tab-sep">/</span>
    <span class="bc-tab" id="bc-tab">Teorija</span>
  </div>

  <!-- COUNTDOWN + ACTIONS -->
  <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:20px">
    <div class="countdown" style="margin-bottom:0">
      ⏳ Do ispita HRV: <strong id="cd-days">—</strong> dana &nbsp;<span style="font-size:9px;color:var(--t3)">(15. 6. 2026.)</span>
    </div>
    <button class="fcb" onclick="window.print()" style="font-size:10px" title="Print / PDF (Ctrl+P)">🖨 Print</button>
    <button class="fcb" onclick="navigator.share?navigator.share({title:'H12 · Marulić i Judita',url:window.location.href}):navigator.clipboard.writeText(window.location.href)" style="font-size:10px" title="Podijeli">📤 Dijeli</button>
    <span style="font-family:var(--mono);font-size:9px;color:var(--t3);margin-left:auto">
      <span class="kbd">←</span> <span class="kbd">→</span> tabovi · <span class="kbd">?</span> pomoć
    </span>
  </div>

  <!-- HERO -->
  <header class="hero">
    <div class="hero-chapter">H12 &nbsp;·&nbsp; Hrvatska književnost &nbsp;·&nbsp; Renesansa (15.–16. st.) · Deep-dive</div>
    <h1 class="hero-title">Marko Marulić<br><span>i Judita</span></h1>
    <p class="hero-sub">
      <strong>Prvo veliko djelo na hrvatskome jeziku.</strong> Judita (1501.) nije samo ep — ona je politički manifest, duhovna alegorija i vrhunac humanističke književnosti u Hrvata. Dubinska analiza 6 pjevanja, dvanaesterca, alegorijskih slojeva i esejskog potencijala.
    </p>
    <div class="hero-chips">
      <span class="hchip br">▶ H12 deep-dive</span>
      <span class="hchip go">📜 Judita 1501.</span>
      <span class="hchip te">🕌 Turska opasnost</span>
      <span class="hchip pa">📖 Obvezatno čitanje</span>
      <span class="hchip re">⚠ Nije esejsko 2026</span>
    </div>
  </header>

  <!-- TABS -->
  <div class="tabs" role="tablist" aria-label="Dijelovi poglavlja">
    <button class="tab on" id="tab0" onclick="sw(0)" role="tab" aria-selected="true" aria-controls="l0">📖 Teorija<span class="tab-done" id="td0"></span></button>
    <button class="tab" id="tab1" onclick="sw(1)" role="tab" aria-selected="false" aria-controls="l1">📖 6 pjevanja<span class="tab-done" id="td1"></span></button>
    <button class="tab" id="tab2" onclick="sw(2)" role="tab" aria-selected="false" aria-controls="l2">✍️ Esej alat<span class="tab-done" id="td2"></span></button>
    <button class="tab" id="tab3" onclick="sw(3)" role="tab" aria-selected="false" aria-controls="l3">💬 Citatnik<span class="tab-done" id="td3"></span></button>
    <button class="tab" id="tab4" onclick="sw(4)" role="tab" aria-selected="false" aria-controls="l4">📚 Pojmovnik<span class="tab-done" id="td4"></span></button>
    <button class="tab" id="tab5" onclick="sw(5)" role="tab" aria-selected="false" aria-controls="l5">⚡ Drill<span class="tab-lock">PRO</span></button>
    <button class="tab" id="tab6" onclick="sw(6)" role="tab" aria-selected="false" aria-controls="l6">🧠 Kviz<span class="tab-badge">20</span><span class="tab-done" id="td6"></span></button>
    <button class="tab" id="tab7" onclick="sw(7)" role="tab" aria-selected="false" aria-controls="l7">✅ Checkpoint</button>
  </div>

  <!-- ══════════════════════════════════════
       TAB 0 · TEORIJA
  ══════════════════════════════════════ -->
  <div class="layer on" id="l0" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">Humanizam</span>
      <span class="pill p-go">Renesansa</span>
      <span class="pill p-t">Ep</span>
      <span class="pill p-pa">Alegorija</span>
      <span class="pill p-r">Turska opasnost</span>
    </div>

    <div id="h12-add-heroquote"></div>
    <div id="h12-add-stats"></div>
    <div id="h12-add-timeline"></div>
    <div id="h12-add-compare"></div>
    <div id="h12-add-pop"></div>

    <!-- Soft kontekst hint — exam frequency -->
    <div class="soft-hint">
      <div class="soft-hint-ico">💡</div>
      <div class="soft-hint-body">
        Tema <b>Marko Marulić / Judita</b> pojavila se na MAT 2022. i MAT 2025. — Dvanaesterac, alegorija i <b>veza s turskom opasnosću</b> su stalni ispitni motivi.
      </div>
    </div>

    <!-- Brza dijagnostika -->
    <div class="box-int" style="margin-bottom:20px">
      <div class="box-int-lbl">🎯 Brza dijagnostika H12 — 5 pitanja</div>
      <div class="diag" data-state="intro" id="diag0">
        <div class="diag-intro">
          <div class="diag-intro-title">Koliko znaš o Marulićevoj Juditi?</div>
          <div class="diag-intro-desc">5 pitanja koja pokrivaju ključne pojmove H12. Dobit ćeš preporuku na kojim tabovima se fokusirati.</div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:4px">
            <button class="diag-btn diag-btn-primary" onclick="diag0Start()">▶ Pokreni dijagnostiku</button>
            <button class="diag-btn diag-btn-ghost" onclick="diag0Skip()">Preskoči — odmah na sadržaj ↓</button>
          </div>
        </div>
        <div class="diag-quiz">
          <div class="diag-prog"><div class="diag-prog-fill" id="d0fill" style="width:0%"></div></div>
          <div class="diag-q-num" id="d0num">Pitanje 1 / 5</div>
          <div class="diag-q-text" id="d0text"></div>
          <div class="diag-opts" id="d0opts"></div>
        </div>
        <div class="diag-result">
          <div class="diag-res-msg" id="d0rtitle">Rezultat</div>
          <div class="diag-rec" id="d0rdesc"></div>
          <button class="fcb" onclick="diag0Reset()" style="margin-right:8px">↩ Ponovi</button>
          <button class="fcb primary" id="d0rbtn" onclick="sw(1)">→ Judita: 6 pjevanja</button>
        </div>
      </div>
    </div>

    <!-- NCVVO box -->
    <div id="h12-react-auth-box"></div>

    <!-- DISCERE TOUCHPOINT 1 -->
    <div id="h12-react-discere-banner-primary"></div>

    <div class="qnav">
      <button onclick="sw(1)" class="qnav-btn">📖 JUDITA: 6 PJEVANJA<span>Svako pjevanje detaljno</span></button>
      <button onclick="sw(2)" class="qnav-btn">✍ ESEJ ALAT<span>Teze, modeli, usporedbe</span></button>
      <button onclick="sw(3)" class="qnav-btn">💬 CITATNIK<span>40 citata · ★ Napamet</span></button>
      <button onclick="sw(4)" class="qnav-btn">📚 POJMOVNIK<span>60 pojmova · flashcard</span></button>
      <button onclick="sw(6)" class="qnav-btn">🧠 KVIZ<span>20 pitanja · provjera</span></button>
      <button onclick="sw(7)" class="qnav-btn">✅ CHECKPOINT<span>Provjeri znanje</span></button>
    </div>

    <!-- SEC 01: Marulić - život i opus -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · Marko Marulić — život i opus</div><div class="sec-line"></div></div>

    <div id="h12-react-author-marulic"></div>

    <!-- SEC 02: Kontekst -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · Kontekst: Hrvatska renesansa i turska opasnost</div><div class="sec-line"></div></div>

    <p>Hrvatska renesansa <strong>ne nastaje u izolaciji</strong> — ona je dio europskog humanizma koji se širi iz Italije, ali dobiva poseban lokalni karakter zbog konteksta koji nije imala nijedna druga europska književnost:</p>

    <div class="box-key">
      <div class="box-key-lbl">🕌 Turska opasnost kao pokretač hrv. renesanse</div>
      <div class="box-key-txt">
        Od 1453. (pad Carigrada) Osmansko Carstvo pritišće Europu. Hrvatska je u prvoj liniji obrane — <strong>tzv. "Antemurale Christianitatis"</strong> (predziđe kršćanstva). Marulić piše Juditu 1501., samo nekoliko godina nakon Krbavske bitke (1493.) u kojoj je hrvatska vojska doživjela katastrofalan poraz. Turci su tada već vladali dijelovima Bosne i Dalmacije. <em>Judita nije samo biblijski ep — ona je odgovor na konkretnu geopolitičku krizu.</em> Ovo je ključan argument u eseju: hrv. renesansa je traumatizirana renesansa.
      </div>
    </div>

    <p>Europska renesansa slavi <em>antiku, ljepotu, čovjeka, individualizam</em>. Hrvatska renesansa sve to preuzima, ali dodaje:</p>
    <ul>
      <li><strong>Domoljubni impuls</strong> — književnost kao obrana identiteta</li>
      <li><strong>Religiozni moralizam</strong> — Marulić je duboko kršćanski pisac</li>
      <li><strong>Jezik kao politički čin</strong> — pisati na hrvatskome kad svi humanisti pišu latinsko jest odluka s porukom</li>
      <li><strong>Alegorijska dimenzija</strong> — biblijske priče preuzimaju nacionalno-alegorijski smisao</li>
    </ul>

    <!-- SEC 02b: Kronologija -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02b · Kronologija — Marulić u europskom kontekstu</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">⏳ 100 godina koje su oblikovale Juditu</div>
      <div class="box-int-txt">Judita nije izolirano djelo — nastala je u preciznom europskom i hrv. kontekstu. Ova kronologija pokazuje kako se nabrajaju ključni događaji.</div>
    </div>

    <div class="timeline">
      <div class="tl-event">
        <div class="tl-year">1440.</div>
        <div class="tl-title">Gutenbergov tisak</div>
        <div class="tl-desc">Pojava tiska omogućuje masovno širenje knjiga — bez toga ne bi bilo europske recepcije Marulića.</div>
      </div>
      <div class="tl-event milestone">
        <div class="tl-year">1450.</div>
        <div class="tl-title">Marko Marulić rođen u Splitu</div>
        <div class="tl-desc">U plemićkoj obitelji, u jeku humanizma. Iste godine Petrarca je mrtav 76 godina.</div>
      </div>
      <div class="tl-event">
        <div class="tl-year">1453.</div>
        <div class="tl-title">Pad Carigrada</div>
        <div class="tl-desc">Turci osvajaju Bizant. <em>Počinje pritisak na Europu — kontekst cijele Marulićeve literarne misije.</em></div>
      </div>
      <div class="tl-event">
        <div class="tl-year">1478.</div>
        <div class="tl-title">Marulić u Padovi (vjerojatno)</div>
        <div class="tl-desc">Školovanje u Italiji — upija humanizam, uči latinski, upoznaje Petrarcin nauk.</div>
      </div>
      <div class="tl-event milestone">
        <div class="tl-year">1493.</div>
        <div class="tl-title">Krbavska bitka — hrv. poraz</div>
        <div class="tl-desc"><em>Katastrofalan poraz hrv. vojske pred Turcima.</em> Ovaj događaj je neposredni povod nastanka Judite.</div>
      </div>
      <div class="tl-event">
        <div class="tl-year">1498.</div>
        <div class="tl-title">Marulić piše latinske Evangelistarium</div>
        <div class="tl-desc">Najpoznatije latinsko djelo — doživjet će 100+ izdanja u Europi tijekom 15.–17. st.</div>
      </div>
      <div class="tl-event milestone">
        <div class="tl-year">1501.</div>
        <div class="tl-title">★ JUDITA NAPISANA</div>
        <div class="tl-desc"><em>Prvi veliki ep na hrvatskom jeziku.</em> 6 pjevanja, dvanaesterac, posveta Jeronimu Balistriliću.</div>
      </div>
      <div class="tl-event">
        <div class="tl-year">1508.</div>
        <div class="tl-title">Marin Držić rođen</div>
        <div class="tl-desc">Mlađi suvremenik, budući autor Novele od Stanca (1550.) i Dunda Maroja (1551.).</div>
      </div>
      <div class="tl-event milestone">
        <div class="tl-year">1521.</div>
        <div class="tl-title">★ JUDITA TISKANA u Veneciji</div>
        <div class="tl-desc">20 godina nakon pisanja — kod Guglielma da Fontanetto. Počinje javna recepcija.</div>
      </div>
      <div class="tl-event">
        <div class="tl-year">1524.</div>
        <div class="tl-title">Marulić umire u Splitu</div>
        <div class="tl-desc">Zapušten je europski pisac s opsežnim latinskim opusom i prvim velikim hrv. epom.</div>
      </div>
      <div class="tl-event">
        <div class="tl-year">1526.</div>
        <div class="tl-title">Mohačka bitka — ugarski poraz</div>
        <div class="tl-desc">Dvije godine nakon Marulićeve smrti. Marulićev strah se materijalizira: Ugarska padne pred Turcima.</div>
      </div>
      <div class="tl-event">
        <div class="tl-year">1550.</div>
        <div class="tl-title">Novela od Stanca — Marin Držić</div>
        <div class="tl-desc">Kontrast Juditi: farsa vs. ep, Dubrovnik vs. Split, komedija vs. tragičan narativ.</div>
      </div>
      <div class="tl-event">
        <div class="tl-year">1626.</div>
        <div class="tl-title">Osman — Ivan Gundulić</div>
        <div class="tl-desc">125 godina nakon Judite — barokni nasljednik hrv. domoljubnog epa.</div>
      </div>
    </div>

    <!-- SEC 03: Judita - nastanak -->
    <div class="soft-hint"><div class="soft-hint-ico">💡</div><div class="soft-hint-body">Judita (1501.) je <b>prvo tiskano djelo na hrvatskom jeziku</b> i <b>prvi ep u hrv. knjižvnosti</b>. Pisano je čakavštinom — to je važan detalj za ispit jer pokazuje dominaciju čakavskog u hrv. renesansi.</div></div>
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">03 · Judita — nastanak i karakter</div><div class="sec-line"></div></div>

    <div class="fq">
      <div class="fq-text">„Stvoren bih po misi, po sili nagojen / u vrime nemira, u vrime pobojen."</div>
      <div class="fq-source">Marulić u poslanici Jeronimu Balistrilića — <span>o okolnostima pisanja Judite, 1501.</span></div>
    </div>

    <p>Judita je nastala <strong>1501. godine</strong>, a prvi put je tiskana <strong>1521. u Veneciji</strong>. Posvećena je Jeronimu Balistrilića, splitskome humanisti. U posveti Marulić eksplicitno navodi svrhu: motivirati Hrvate na otpor, podsjećajući ih da je i slaba žena (Judita) pobijedila silnog neprijatelja (Holoferna) uz Božju pomoć.</p>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr>
          <th>Element</th><th>Podatak</th><th>Važnost za ispit</th>
        </tr></thead>
        <tbody>
          <tr><td><strong>Nastanak</strong></td><td>1501. (završeno), tiskano 1521.</td><td>Datum — često pitanje na ispitu</td></tr>
          <tr><td><strong>Predložak</strong></td><td>Knjiga o Juditi (Stari zavjet, Vulgata)</td><td>Marulić nije izmislio priču — adaptira Bibliju</td></tr>
          <tr><td><strong>Jezik</strong></td><td>Čakavski + štokavski + crkvenoslavenski</td><td>Miješanje idioma — humanistički eksperiment</td></tr>
          <tr><td><strong>Stih</strong></td><td>Dvanaesterac (6+6) u paru (dvostih)</td><td>Ključni pojam — uz primjer na ispitu</td></tr>
          <tr><td><strong>Žanr</strong></td><td>Ep (spjev, poema) u 6 pjevanja</td><td>Razlika ep vs. drama vs. lirika</td></tr>
          <tr><td><strong>Alegorija</strong></td><td>Judita = Hrvatska; Holofern = Turci; Betulija = hrv. gradovi</td><td>Alegorijska razina — najvažniji koncept</td></tr>
          <tr><td><strong>Svrha</strong></td><td>Poticanje otpora, domoljubni apel</td><td>Namjera teksta — ispit ispituje</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SEC 04: Dvanaesterac -->
    <div class="soft-hint"><div class="soft-hint-ico">💡</div><div class="soft-hint-body">Dvanaesterac = stih s <b>12 slogova</b> i <b>cezurom (6+6)</b>. Marulić ga preuzima od talijanske renesansne tradicije. Svaki Juditin stih se dijeli na dva polustisea — ta ritmika je prepoznatljiva i esto dolazi u analizi ulomka.</div></div>
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">04 · Dvanaesterac — stih i ritmička analiza</div><div class="sec-line"></div></div>

    <div class="box-key">
      <div class="box-key-lbl">🎵 Dvanaesterac: definicija i analiza</div>
      <div class="box-key-txt">
        <strong>Dvanaesterac</strong> je stih od 12 slogova s obvezatnom cezurom (pauzom) nakon 6. sloga: 6 + 6.
        Marulić ga organizira u <strong>dvostruko rimovane dvostihove</strong> — oba stiha dvostiha rimuju se međusobno (AA, BB, CC...).
        Ovo je kombinacija talijanskog hexasillabo i tradicije hrvatskog usmenog stiha.
        <br><br>
        <em>Primjer analize:</em><br>
        <strong>„Ki hoće slišati | čudesa Božja starim"</strong><br>
        Ki ho-će sli-ša-ti = 6 slogova | ču-de-sa Bo-žja sta-rim = 6 slogova<br>
        Cezura (|) dijeli stih na dva polastiha od po 6 slogova. Rima "starim" rhymes s "retkim" (ili sl.) u sljedećem stihu.
      </div>
    </div>

    <div class="fq">
      <div class="fq-text">„Ki hoće slišati čudesa Božja starim / neka posluša Judite kriposti harim"</div>
      <div class="fq-source">Judita, Pjevanje I — <span>invokacija čitatelja · dvanaesterac u akciji</span></div>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">📊 Usporedba stiha: Judita vs. tradicija</div>
      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th>Djelo</th><th>Stih</th><th>Rima</th><th>Tradicija</th></tr></thead>
          <tbody>
            <tr><td><em>Judita</em> (Marulić)</td><td>Dvanaesterac (6+6)</td><td>Dvostruki dvostih (AA BB)</td><td>Hrv. usmena + tal. humanizam</td></tr>
            <tr><td><em>Ilijada</em> (Homer)</td><td>Heksametar (6 stopa)</td><td>Bez rime</td><td>Antička grčka epika</td></tr>
            <tr><td><em>Eneida</em> (Vergilije)</td><td>Heksametar</td><td>Bez rime</td><td>Rimska epika</td></tr>
            <tr><td><em>Osman</em> (Gundulić)</td><td>Osmerac (4+4)</td><td>Ukrštena rima (ABAB)</td><td>Barokni ep, 1626.</td></tr>
            <tr><td><em>Smrt Smail-age</em> (Mažuranić)</td><td>Deseterac (4+6)</td><td>Bez ili sporadična</td><td>Romantički ep, 1846.</td></tr>
          </tbody>
        </table>
      </div>
      <div class="box-int-txt">Ova usporedna tablica je ključna za esej — pokazuje kako se hrv. ep mijenja od renesanse do romantizma. Marulić bira <strong>dvanaesterac</strong> koji je tada dominantan u hrv. usmenoj poeziji, ali ga uzvišuje humanističkim sadržajem.</div>
    </div>

    <!-- SEC 04b: Ep vs lirika -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">04b · Ep vs. lirika — ključni kontrast unutar hrv. renesanse</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Obilježje</th><th>Marulić · Judita (ep)</th><th>Petrarkisti · Menčetić, Džore Držić (lirika)</th></tr></thead>
        <tbody>
          <tr><td><strong>Žanr</strong></td><td>Ep — narativno u stihu</td><td>Ljubavna lirika — kratka pjesma</td></tr>
          <tr><td><strong>Tema</strong></td><td>Domoljublje, vjera, otpor</td><td>Ljubav, bol, idealizirana dama</td></tr>
          <tr><td><strong>Subjekt</strong></td><td>Kolektivni glas naroda</td><td>Individualni lirski ja</td></tr>
          <tr><td><strong>Uzor</strong></td><td>Vergilije + Biblija</td><td>Petrarca · Kanconijer</td></tr>
          <tr><td><strong>Alegorija</strong></td><td>Da — politička dimenzija</td><td>Ne — ljubavna metafora</td></tr>
        </tbody>
      </table>
    </div>
    <div class="box-signal">
      <div class="box-signal-lbl">💡 Esejska primjena — u eseju o Petrarci</div>
      <div class="box-signal-txt">„Dok su hrv. petrarkisti Menčetić i Džore Držić preuzimali Petrarkin ljubavno-lirski model, njihov suvremenik Marulić bira ep i domoljublje — što dokazuje da hrv. humanizam nije bio jednoznačan pokret, nego zbir različitih odgovora na isti europski impuls."</div>
    </div>

    <!-- SEC 05: Alegorija -->
    <div class="soft-hint"><div class="soft-hint-ico">💡</div><div class="soft-hint-body">Alegorija Judite: <b>Betulija = Hrvatska, Holoferno = Turci, Judita = vjera/junaštvo</b>. Ova trostruka alegorija je sigurno ispitno pitanje — uvijek je poveži s turskom opasnošću 15./16. st. i Marulićevim apelom europskim kraljevima.</div></div>
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">05 · Alegorijska shema Judite</div><div class="sec-line"></div></div>

    <div class="box-key" style="border-color:var(--bd-br)">
      <div class="box-key-lbl" style="color:var(--bronze-l)">⚡ Alegorijska shema — naučiti napamet</div>
      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th>Biblijski lik/element</th><th>Alegorijska razina</th><th>Obrazloženje</th></tr></thead>
          <tbody>
            <tr><td><strong>Judita</strong></td><td>Hrvatska / hrv. narod / vjera / kršćanstvo</td><td>Malena, slaba — ali s Bogom pobjeđuje silnog neprijatelja</td></tr>
            <tr><td><strong>Holofern</strong></td><td>Turci / Osmanlije / zlo / antikrist</td><td>Moćan, ali bezbožan — pade pred Juditom/Bogu</td></tr>
            <tr><td><strong>Betulija</strong></td><td>Hrv. gradovi / Dalmacija / Split</td><td>Grad koji je opkoljen i čeka spas</td></tr>
            <tr><td><strong>Nabukodonosor</strong></td><td>Vrhovni sultan / Mehmed II. ili sl.</td><td>Vrhovni bezbožni vladar koji šalje vojsku</td></tr>
            <tr><td><strong>Judita odsjeca glavu</strong></td><td>Pobjeda vjere nad silom</td><td>Bog daje moć slabima da pobijede jake</td></tr>
            <tr><td><strong>Nož / mač</strong></td><td>Vjera / Božja providnost</td><td>Oružje dobiva svetu dimenziju</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">💡 Zašto je alegorija ključna za ispit?</div>
      <div class="box-signal-txt">
        NCVVO može pitati: <em>"Što Judita simbolizira?"</em> ili <em>"Na kojoj razini čitamo Juditu?"</em>
        Odgovor mora sadržavati: (1) doslovnu razinu (biblijska priča), (2) alegorijsku razinu (Hrvatska vs. Turci),
        (3) moralnu razinu (vjera pobjeđuje silu). <strong>Sve tri razine su u tekstu istovremeno prisutne.</strong>
        Marulić sam u posveti Balistriliću objašnjava alegorijsku dimenziju — to je iznimno rijetko za tadašnju književnost.
      </div>
    </div>

    <!-- SEC 06: Humanizam i kršćanstvo -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">06 · Humanizam i kršćanstvo u Marulića</div><div class="sec-line"></div></div>

    <p>Marulić je <strong>kršćanski humanist</strong> — to je spoj koji izgleda paradoksalan, ali u 15./16. st. nije bio neuobičajen (usp. Erazmo Roterdamski). Humanizam slavi antiku, um i individuu; Marulić sve to prihvaća ali podređuje kršćanskom moralu.</p>

    <div class="box-key">
      <div class="box-key-lbl">🔑 3 aspekta humanizma u Maruliću</div>
      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th>Aspekt</th><th>Kako se manifestira</th><th>Primjer</th></tr></thead>
          <tbody>
            <tr><td><strong>Obranom antičke tradicije</strong></td><td>Ep je antički žanr — Marulić ga preuzima</td><td>Invokacija, in medias res, digresije</td></tr>
            <tr><td><strong>Individualizmom lika</strong></td><td>Judita ima psihologiju, nije samo tip</td><td>Njezina molitva, sumnja, odlučnost</td></tr>
            <tr><td><strong>Latinizmima i erudicijom</strong></td><td>Tekst pun učenih aluzija</td><td>Reference na Bibliju, crkvene oce</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="box-warn" style="display:flex;gap:14px;align-items:flex-start">
      <div class="bw-ico">⚠️</div>
      <div class="bw-body">
        <div class="bw-title">Česta greška na ispitu</div>
        <div class="bw-txt">Marulić nije "čisti" humanist koji proslavlja čovjeka bez Boga — on je <strong>kršćanski humanist</strong>. Za njega čovjek može biti velik samo uz Boga. Judita ne pobjeđuje Holoferna vlastitom snagom — pobjeđuje uz Božju pomoć. <em>Ova razlika je bitna i ispravno odgovorena donosi bod.</em></div>
      </div>
    </div>

    <!-- SEC 07: Usporedna tablica epova -->
    <div class="soft-hint"><div class="soft-hint-ico">💡</div><div class="soft-hint-body">Judita u kontekstu europskog epa: usporedi s <b>Vergilijevom Eneidom</b> (nacionalni ep, junaka-mesija) i <b>Homerovom Ilijadom</b> (ep o borbi). Ali Marulić bira <b>biblijsku junakinju</b> — to je novost i odraz kršćanskog humanizma.</div></div>
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">07 · Judita u kontekstu europskog epa</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr>
          <th>Ep</th><th>Autor</th><th>Godina</th><th>Žanr/stil</th><th>Predložak</th><th>Svrha</th>
        </tr></thead>
        <tbody>
          <tr>
            <td><em>Ilijada / Odiseja</em></td><td>Homer</td><td>~8. st. pr. Kr.</td>
            <td>Antički ep, heksametar</td><td>Usm. tradicija</td><td>Mit, heroji, bogovi</td>
          </tr>
          <tr>
            <td><em>Eneida</em></td><td>Vergilije</td><td>29–19. pr. Kr.</td>
            <td>Rimski ep, heksametar</td><td>Homer + mit</td><td>Propaganda Rimskog Carstva</td>
          </tr>
          <tr style="background:var(--dim-go)">
            <td><em><strong>Judita</strong></em></td><td><strong>Marulić</strong></td><td><strong>1501/1521.</strong></td>
            <td><strong>Hrv. renesansni ep, dvanaesterac</strong></td><td><strong>Biblija (Stari zavjet)</strong></td><td><strong>Domoljubni apel + vjera</strong></td>
          </tr>
          <tr>
            <td><em>Osman</em></td><td>Ivan Gundulić</td><td>1626. (ned.)</td>
            <td>Barokni ep, osmerac</td><td>Bitka kod Hoćima</td><td>Kršćanska pobjeda, slava slobode</td>
          </tr>
          <tr>
            <td><em>Smrt Smail-age</em></td><td>Ivan Mažuranić</td><td>1846.</td>
            <td>Romantički ep, deseterac</td><td>Usm. tradicija</td><td>Sloboda, junaštvo, domoljublje</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">💡 Judita → Osman → Smrt Smail-age: tradicija hrv. epa</div>
      <div class="box-signal-txt">
        Ove tri točke čine <strong>tradiciju hrv. domoljubnog epa</strong>. U eseju o bilo kojoj od ovih tema možeš referencirati ostale dvije.
        Zajednički elementi: <em>kršćanstvo vs. Islam</em>, <em>otpor invaziji</em>, <em>junaštvo malenog naroda</em>.
        Razlike: stih (12 → 8 → 10), stil (renesansa → barok → romantizam), predložak (Biblija → povijest → usmena tradicija).
      </div>
    </div>

    <!-- SEC 07b: Brzi pregled žanrova Judite -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">07b · Brzi pregled — žanrovi i struktura hrv. renesanse</div><div class="sec-line"></div></div>

    <div class="sc-grid">
      <div class="sc">
        <span class="sc-ico hchip br">ŽAN.</span>
        <div class="sc-name">Ep (epos)</div>
        <div class="sc-desc"><em>Judita</em> (Marulić, 1501.) — biblijsko-kršćanski ep u dvanaestercu. <strong>Ključna obilježja:</strong> invokacija, in medias res, 6 pjevanja, alegorija. Uzori: Vergilije (Eneida) + Biblija.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip go">ŽAN.</span>
        <div class="sc-name">Ljubavna lirika (petrarkizam)</div>
        <div class="sc-desc">Menčetić i Džore Držić — <strong>Ranjinin zbornik</strong> (820 pjesama). Tema: bol, idealizirana dama, neuzvraćena ljubav. Stih: dvanaesterac. Uzor: Petrarca (Kanconijer).</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip te">ŽAN.</span>
        <div class="sc-name">Drama i pastorala</div>
        <div class="sc-desc">Marin Držić — <em>Novela od Stanca</em> (1550., farsa) + <em>Dundo Maroje</em> (1551., komedija). Hanibal Lucić — <em>Robinja</em> (~1530.). Kontekst: dubrovačka vlastelinska kazališna scena.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip pa">ŽAN.</span>
        <div class="sc-name">Roman i putopis</div>
        <div class="sc-desc">Petar Zoranić — <em>Planine</em> (1569.) — <strong>prvi hrv. roman</strong>. Petar Hektorović — <em>Ribanje i ribarsko prigovaranje</em> (1568.) — putopis/poslanica. Oba imaju alegorijsku i patriotsku dimenziju.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip re">ŽAN.</span>
        <div class="sc-name">Marulić u ovom sustavu</div>
        <div class="sc-desc">Marulić je jedini hrv. renesansni pisac koji bira <strong>ep umjesto lirike</strong>. Dok petrarkisti slave ljubav, Marulić slavi vjeru i domovinu. <em>Različiti odgovori na isti europski impuls humanizma.</em></div>
      </div>
    </div>

    <!-- SEC 08: Kako H12 izgleda na ispitu -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">08 · Kako H12 izgleda na ispitu</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">📝 Što NCVVO može pitati iz H12 — konkretni primjeri</div>
      <div class="box-int-txt">Judita je obvezatno djelo za čitanje (ishod B.3.2.), ali <strong>nije ispitno djelo 2025./2026.</strong> Može se pojaviti u dijelu <em>Čitanje književnoga teksta</em> (ulomak za analizu) ili <em>Teorija i povijest književnosti</em> (pitanja bez teksta).</div>
    </div>

    <div class="scene-list" style="margin-bottom:0">

      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num" style="font-size:10px;min-width:36px">TIP A</div>
          <div class="scene-ttl">Višestruki izbor — ulomak Judite (5 pitanja)</div>
          <div class="scene-tag">Čitanje teksta</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-quote">„Biše tada udova, ka živi u gradu, / po imenu Judita u lipu porodu, / lijepa i razumna, bogata i slavna, / od roda plemenita i Bogu ugodna."</div>
          <div class="scene-why">
            <b>Primjer pitanja uz ovaj ulomak:</b>
            <ol style="margin-top:8px;padding-left:18px;font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.7">
              <li>Koji je žanr ovoga teksta? <em>→ ep / spjev / poema</em></li>
              <li>Koji stih koristi Marulić u ovome ulomku? <em>→ dvanaesterac</em></li>
              <li>Što Judita simbolizira u alegorijskoj razini? <em>→ Hrvatska / vjera</em></li>
              <li>U kojemu se pjevanju Judita uvodi? <em>→ II. pjevanje</em></li>
              <li>Koji je književnopovijesni period teksta? <em>→ renesansa / 15.–16. st.</em></li>
            </ol>
            <b style="display:block;margin-top:10px">Taktika:</b> (1) Identificiraj žanr i stih odmah. (2) Provjeri ima li alegorijskih signala. (3) Povezi ulomak s pjevanjem. (4) Nikad ne gubiš bod ako pažljivo čitaš — odgovor je uvijek u tekstu ili logički iz njega.
          </div>
        </div>
      </div>

      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num" style="font-size:10px;min-width:36px">TIP B</div>
          <div class="scene-ttl">Pitanje bez teksta — teorija i povijest književnosti</div>
          <div class="scene-tag">Teorija</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Primjeri pitanja bez polaznog teksta:</b>
            <ol style="margin-top:8px;padding-left:18px;font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.7">
              <li>Koji je stih karakterističan za Juditu Marka Marulića?<br><em>A. deseterac &nbsp; B. dvanaesterac &nbsp; C. osmerac &nbsp; D. heksametar → B</em></li>
              <li>Što u Juditi simbolizira Holofern?<br><em>A. Mletačku vlast &nbsp; B. Ugarsku krunu &nbsp; C. Turke/Osmanlije &nbsp; D. Rimsko Carstvo → C</em></li>
              <li>Kada je nastala Judita?<br><em>A. 1453. &nbsp; B. 1493. &nbsp; C. 1501. &nbsp; D. 1526. → C</em></li>
              <li>Kojemu književnom rodu pripada Judita?<br><em>A. lirika &nbsp; B. epika &nbsp; C. dramatika &nbsp; D. esejistika → B</em></li>
            </ol>
            <b style="display:block;margin-top:10px">Ključne činjenice za pamćenje:</b> 1501. nastanak · dvanaesterac · 6 pjevanja · alegorija (Judita=HR, Holofern=Turci) · kršćanski humanizam · Split.
          </div>
        </div>
      </div>

      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num" style="font-size:10px;min-width:36px">TIP C</div>
          <div class="scene-ttl">Judita kao kontekstualni argument u eseju</div>
          <div class="scene-tag">Esej kontekst</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Judita NIJE ispitno djelo 2026.</b> Ali može biti <em>kontekstualni argument</em> u eseju o:<br><br>
            <b>Petrarci:</b> „Dok su hrv. petrarkisti preuzimali Petrarkin ljubavno-lirski repertoar, Marulić bira ep i domoljublje — pokazujući raznolikost hrv. humanizma."<br><br>
            <b>Calderónu:</b> „I Marulić (Judita) i Calderón (Život je san) grade kršćansko-humanistički svjetonazor: slobodna volja postoji, ali se ostvaruje uz Boga."<br><br>
            <b>Krleži:</b> „Gdje Marulić vidi vjeru kao pokretač otpora (Judita, 1501.), Krleža vidi vjeru kao fasadu moralne korupcije (Glembajevi, 1928.) — 400 godina razlika."<br><br>
            <b>Taktika:</b> 1–2 rečenice, jasna usporedba, točan naziv djela i godine. Ne elaboriraj previše — Judita je <em>kontekst</em>, ne tema.
          </div>
        </div>
      </div>

    </div>

    <!-- SEC 09: H12 i ostalo gradivo -->
    <div class="sec-hdr" style="margin-top:28px"><div class="sec-line"></div><div class="sec-badge">09 · H12 i ostalo gradivo — konekti</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">🔗 H12 u kontekstu cijelog hrv. i europskog programa</div>
      <div class="box-int-txt">Ispit nije samo H12. Marulić i Judita su dio većeg mozaika. Ovi konekti su korisni za esejski kontekst i pitanja o teoriji književnosti.</div>
    </div>

    <div class="sc">
      <div class="sc-name">H12 → H11 (Stari hrv. pisci)</div>
      <div class="sc-desc">H11 je širi kontekst: Hektorović, Zoranić, Marin Držić, petrarkisti. H12 je dubinska analiza jednog pisca iz iste generacije. <b>Ključna razlika:</b> Marulić bira ep i domoljublje umjesto petrarkizma koji pišu Menčetić i Džore Držić. Isti period, različite poetike.</div>
    </div>
    <div class="sc">
      <div class="sc-name">H12 → H13 (Barok · Gundulić · Osman)</div>
      <div class="sc-desc">Osman (1626.) je prirodni nasljednik Judite (1501.) — oba su domoljubni epovi o kršćansko-turskom sukobu. <b>Razlika:</b> Judita je renesansna alegorija u dvanaestercu; Osman je barokni ep u osmercu s bujnijim opisima i retoričkim figurama. Tradicija hrv. domoljubnog epa: Judita → Osman → Smrt Smail-age.</div>
    </div>
    <div class="sc">
      <div class="sc-name">H12 → H20 (Petrarca)</div>
      <div class="sc-desc">Petrarca je <em>izvorni humanist</em> kojeg svi čitaju, uključujući Marulića. Ali Marulić ne piše liriku po Petrarcinu uzoru — bira ep. Ovo pokazuje da recepcija humanizma nije jednoznačna: hrv. pisci biraju selektivno. <b>Za esej o Petrarci:</b> hrv. petrarkisti (Menčetić, Džore Držić) su prihvatili Petrarcu; Marulić ga je poznavao i odbio.</div>
    </div>
    <div class="sc">
      <div class="sc-name">H12 → H21 (Calderón · Život je san)</div>
      <div class="sc-desc">Oboje su kršćanski humanisti, ali 134 godine ih dijeli i različiti žanrovi. <b>Zajednička tema:</b> slobodna volja + Božja providnost. <b>Razlika:</b> Marulić gradi ep, Calderón gradi dramu. <em>Judita pobjeđuje akcijom + vjerom; Segismundo pobjeđuje spoznajom + vrlinom.</em></div>
    </div>
    <div class="sc">
      <div class="sc-name">H12 → Mažuranić · Šenoa (19. st.)</div>
      <div class="sc-desc">Marulić je <em>izvor tradicije</em>. Mažuranić (Smrt Smail-age Čengića, 1846.) nasljeđuje domoljubni ep, ali u desetercu i romantičarskom kontekstu. Šenoa (Prijan Lovro, 1873.) piše realizam — potpuno drugačije, ali i on gradi na ideji hrv. identiteta koji Marulić prvi artikulira književno. <b>Za esej o Mažuraniću:</b> tradicija hrv. epa (Judita → Osman → Smrt Smail-age) je esejski argument.</div>
    </div>

    <!-- SEC 10: Ključni kontrasti za esej -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">10 · Ključni kontrasti za esej</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">⚖️ 6 kontrasta koji ulaze u svaki esej o Juditi</div>
      <div class="box-int-txt">Ispit voli usporedbu. Svaki od ovih kontrasta može biti <strong>teza eseja, argument ili zaključna misao</strong>. Zapamti ih kao parove.</div>
    </div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Kontrast</th><th>Judita / Marulić</th><th>Suprotnost</th><th>Esejska primjena</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>Snaga vs. vjera</strong></td>
            <td>Judita — fizički slaba žena</td>
            <td>Holofern — vojskovođa goleme armije</td>
            <td>Vjera > fizička moć. Bog kao izvor pobjede.</td>
          </tr>
          <tr>
            <td><strong>Kolektiv vs. individua</strong></td>
            <td>Judita = glas naroda (alegorija)</td>
            <td>Holofern = individualizam / oholost</td>
            <td>Kršćanski humanizam: individua u službi zajednice.</td>
          </tr>
          <tr>
            <td><strong>Hrv. renesansa vs. talijanska</strong></td>
            <td>Domoljublje, turska opasnost, kršćanstvo</td>
            <td>Petrarca: ljubavna lirika, estetika</td>
            <td>Hrv. renesansa je traumatizirana renesansa.</td>
          </tr>
          <tr>
            <td><strong>Ep vs. lirika</strong></td>
            <td>Marulić: ep, kolektivni glas</td>
            <td>Petrarkisti: lirika, individualno ja</td>
            <td>Isti period, različite poetike = raznolikost hrv. humanizma.</td>
          </tr>
          <tr>
            <td><strong>Renesansa vs. barok</strong></td>
            <td>Judita: dvanaesterac, alegorija, 1501.</td>
            <td>Osman: osmerac, bujni barok, 1626.</td>
            <td>Tradicija hrv. domoljubnog epa — kontinuitet i promjena.</td>
          </tr>
          <tr>
            <td><strong>Vjera kao spas vs. vjera kao fasada</strong></td>
            <td>Marulić: vjera = pokretač otpora</td>
            <td>Krleža: vjera = moralna hipokrizija</td>
            <td>400 god. hrv. književnosti = povijest razočarenja.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- SEC 11: Kratki profil — Marulić na prstu -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">11 · Marulić na prstu — 60 sekundi</div><div class="sec-line"></div></div>

    <div class="box-key">
      <div class="box-key-lbl">🏃 Brzi profil za ispit — sve ključne činjenice</div>
      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th>Kategorija</th><th>Podatak</th></tr></thead>
          <tbody>
            <tr><td><strong>Puno ime</strong></td><td>Marko Marulić Pečenić</td></tr>
            <tr><td><strong>Živio</strong></td><td>1450.–1524. · Split</td></tr>
            <tr><td><strong>Epitet</strong></td><td>„Otac hrv. književnosti"</td></tr>
            <tr><td><strong>Jezici</strong></td><td>Hrvatski (čakavski + štokavski) i latinski</td></tr>
            <tr><td><strong>Judita — nastanak</strong></td><td>1501. (pisano), 1521. (tiskano, Venecija)</td></tr>
            <tr><td><strong>Judita — stih</strong></td><td>Dvanaesterac (6+6), dvostruki dvostih (AA BB)</td></tr>
            <tr><td><strong>Judita — struktura</strong></td><td>6 pjevanja</td></tr>
            <tr><td><strong>Judita — predložak</strong></td><td>Knjiga o Juditi (Stari zavjet, Vulgata)</td></tr>
            <tr><td><strong>Judita — alegorija</strong></td><td>Judita=HR, Holofern=Turci, Betulija=hrv. gradovi</td></tr>
            <tr><td><strong>Judita — posveta</strong></td><td>Jeronim Balistrilić, splitski humanist</td></tr>
            <tr><td><strong>Kontekst</strong></td><td>Krbavska bitka 1493. → Judita 1501.</td></tr>
            <tr><td><strong>Latinska dela</strong></td><td>Evangelistarium, De institutione bene vivendi (100+ izdanja u Europi)</td></tr>
            <tr><td><strong>Ostala hr. djela</strong></td><td>Suzana, Poklad i korizma, Tuženje grada Hjerozolima</td></tr>
            <tr><td><strong>Tip humanizma</strong></td><td>Kršćanski humanist (≠ sekularni humanist)</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- SEC 12: Samoprocjena -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">12 · Samoprocjena — jesi li spreman/a?</div><div class="sec-line"></div></div>

    <div id="selfcheck-wrap">
      <div class="box-int">
        <div class="box-int-lbl">🎯 5 pitanja — procijeni razinu znanja</div>
        <div style="display:flex;flex-direction:column;gap:8px;margin-top:10px" id="sc-qs"></div>
        <div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap">
          <button class="fcb primary" onclick="scCheck()">Provjeri →</button>
          <button class="fcb" onclick="scReset()">Resetiraj</button>
        </div>
        <div id="sc-result" style="display:none;margin-top:14px"></div>
      </div>
    </div>

    <!-- SEC 13: Finalni pregled -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">13 · Finalni pregled — sve u 3 minute</div><div class="sec-line"></div></div>

    <div class="sc">
      <div class="sc-name">⚡ Najbrži recap H12</div>
      <div class="sc-desc">
        <b>Marulić</b> (Split, 1450–1524) · kršćanski humanist · piše hrv. i latinskim ·
        <b>Judita</b> (1501./1521.) · ep · 6 pjevanja · dvanaesterac (6+6) · dvostruki dvostih ·
        predložak: Biblija · alegorija: Judita=HR, Holofern=Turci, Betulija=hrv. gradovi ·
        povod: Krbavska bitka 1493. · posveta Balistriliću · <b>NIJE esejsko 2026</b> ·
        ali koristi za: esej o Petrarci (hrv. petrarkisti vs. Marulić), Calderónu (kršć. humanizam), Krleži (vjera 1501. vs. 1928.) ·
        tradicija hrv. epa: Judita → Osman (Gundulić, barok) → Smrt Smail-age (Mažuranić, romantizam).
      </div>
    </div>
    <div class="sc">
      <div class="sc-name">📝 3 rečenice koje uvijek funkcioniraju</div>
      <div class="sc-desc">
        1. <em>„Marulić u Juditi (1501.) gradi ep u dvanaestercu koji — kombinacijom biblijske fabule i domoljubne alegorije — postaje prvi veliki politički manifest hrv. književnosti."</em><br><br>
        2. <em>„Na alegorijskoj razini Judita simbolizira Hrvatsku/vjeru, Holofern Osmanlije, a Betulija opkoljena hrv. naselja — čime Marulić biblijsku priču pretvara u suvremeni poziv na otpor."</em><br><br>
        3. <em>„Za razliku od petrarkista koji preuzimaju Petrarkin lirski model, Marulić svjesno bira ep i religijsko-domoljubni sadržaj — što pokazuje kreativnu raznolikost hrv. humanizma."</em>
      </div>
    </div>

    <!-- SEC 14: Nasljeđe i kulturna važnost Judite -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">14 · Nasljeđe Judite — zašto je važna danas</div><div class="sec-line"></div></div>

    <div class="sc">
      <div class="sc-name">📚 Judita kao temelj hrv. književnog identiteta</div>
      <div class="sc-desc">Judita (1501.) je <b>prva točka na kojoj hrv. književnost dobiva europski legitimitet</b>. Nije to samo prva knjiga — to je dokaz da hrv. jezik može nositi ozbiljan književni projekt. Marulić to čini u trenutku najveće krize (turska opasnost, Krbavska bitka) — što daje Juditi i emotivni i politički naboj koji ostaje do danas.</div>
    </div>
    <div class="sc">
      <div class="sc-name">🔗 Judita → Osman → Smrt Smail-age: tradicija hrv. domoljubnog epa</div>
      <div class="sc-desc">Marulić uspostavlja obrazac koji se ponavlja 300 godina: <b>ep kao odgovor na nacionalnu krizu</b>. Gundulić (Osman, 1626.) slavi kršćansku pobjedu; Mažuranić (Smrt Smail-age, 1846.) slavi romantičarsko junaštvo. Svi kreću od Marulića. Bez Judite nema tradicije hrv. domoljubnog epa.</div>
    </div>
    <div class="sc">
      <div class="sc-name">🎓 Judita na državnoj maturi — praktična važnost</div>
      <div class="sc-desc">Judita nije ispitno djelo 2026., ali se pojavljuje u: <b>(1)</b> pitanjima o teoriji i povijesti književnosti (žanr, stih, alegorija), <b>(2)</b> ulomcima za analizu u višestrukom izboru, <b>(3)</b> kao kontekstualni argument u esejima o Petrarci, Calderónu, Krleži. Poznavanje Judite direktno povećava ocjenu.</div>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">🏆 3 razloga zašto Judita ostaje relevantna</div>
      <div class="box-key-txt">
        <strong>1. Jezična hrabrost:</strong> Pisati na hrvatskome kad Europa piše latinski — politički čin koji definira hrv. kulturni identitet.<br>
        <strong>2. Žanrovska inovacija:</strong> Kombinacija antičke epike + biblijske priče + domoljubne alegorije — novi žanr bez europskog presedana.<br>
        <strong>3. Angažiranost:</strong> Književnost kao reakcija na konkretnu krizu — model koji odjekuje u Krleži, Ujeviću, pa i suvremenoj hrv. književnosti.
      </div>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">🌍 EUROPSKA PARALELA — renesansa (→ H03)</div>
      <div class="box-signal-txt">
        Petrarca (1304.–1374.) je europski začetnik humanizma i renesanse; Marulić (1450.–1524.) je začetnik humanizma u Hrvatskoj — studirao je Petrarcu i pišući na latinskom i hrvatskome. Shakespeare piše Hamleta sto godina <em>nakon</em> Judite. Kronologija: <b>Petrarca → Marulić → Shakespeare</b> — Europa i Hrvatska se razvijaju u istom valu.<br><br>
        <b>Za komparativni esej:</b> Petrarca (2026. obvezno) + Judita kao kontekstualni argument = bonus bodovi. Kontekst europske renesanse: <b>H03 · Renesansa</b>.
      </div>
    </div>

    <div class="sec-hdr" style="margin-top:24px"><div class="sec-line"></div><div class="sec-badge">Pred-ispit cheat sheet</div><div class="sec-line"></div></div>

    <div class="cheat-card cheat-card-printable" style="margin-top:24px">
      <div class="cheat-hdr">
        <div class="cheat-hdr-l">
          <div class="cheat-eye">QUICK REFERENCE · 30 MIN PRIJE ISPITA</div>
          <div class="cheat-ttl">Sve što moraš pamtiti — H12</div>
        </div>
        <button class="cheat-print" onclick="printCheatSheet(this)" aria-label="Ispiši cheat sheet">🖨️ Ispiši</button>
      </div>
      <div class="cheat-grid">
        <div class="cheat-col">
          <div class="cheat-col-ttl">Osnovni podaci</div>
          <table class="cheat-tbl">
            <tr><td><b>Autor</b></td><td>Marko Marulić, otac hrvatske književnosti</td></tr>
            <tr><td><b>Djelo</b></td><td><em>Judita</em>, biblijsko-alegorijski ep</td></tr>
            <tr><td><b>1501.</b></td><td>nastanak djela</td></tr>
            <tr><td><b>1521.</b></td><td>prvo tiskano izdanje</td></tr>
            <tr><td><b>Forma</b></td><td>6 pjevanja, dvostruko rimovani dvanaesterac</td></tr>
          </table>
        </div>
        <div class="cheat-col">
          <div class="cheat-col-ttl">Alegorijska shema</div>
          <ul class="cheat-list">
            <li><b>Judita</b> = vjera, hrabrost, slaba koja pobjeđuje silu.</li>
            <li><b>Holofern</b> = oholost, nasilje, turska opasnost.</li>
            <li><b>Betulija</b> = ugrožena zajednica / domovina.</li>
            <li><b>Odrubljenje glave</b> = poraz oholosti i tiranije.</li>
          </ul>
        </div>
        <div class="cheat-col cheat-col-warn">
          <div class="cheat-col-ttl">Zamke</div>
          <ul class="cheat-list cheat-list-warn">
            <li>Ne piši da je <em>Judita</em> samo religiozna priča.</li>
            <li>Ne zaboravi hrvatski jezik kao svjesnu kulturnu odluku.</li>
            <li>Ne miješaj biblijski predložak i Marulićev humanistički sloj.</li>
          </ul>
        </div>
        <div class="cheat-col">
          <div class="cheat-col-ttl">Mini plan odgovora</div>
          <ol class="cheat-steps">
            <li><b>Identificiraj ulomak:</b> pjevanje, lik, faza radnje.</li>
            <li><b>Objasni dvostruku razinu:</b> biblijska priča + domovinski kontekst.</li>
            <li><b>Dodaj stil:</b> dvanaesterac, antiteza, alegorija, simbol.</li>
            <li><b>Zaključi poruku:</b> vjera i razum protiv nasilne sile.</li>
          </ol>
        </div>
      </div>
    </div>

    <div class="nav-row">
      <span class="nb-btn off">← Početak</span>
      <span class="nb-btn primary" onclick="sw(1)">📖 Judita: 6 pjevanja →</span>
    </div>

  
    <div class="cheat-card" style="margin-top:24px">
      <div class="cheat-hdr">
        <div class="cheat-hdr-l">
          <div class="cheat-eye">SLJEDEĆE</div>
          <div class="cheat-ttl">Tab 1 · Marulić — Judita (6 pjevanja)</div>
        </div>
      </div>
      <div class="cheat-grid">
        <div class="cheat-col cheat-col-wide" style="font-family:var(--serif,Fraunces,serif);font-size:13.5px;color:var(--t2,#c5b8aa);line-height:1.65">
          <p style="margin:0">Teorija je polazište — <b>Tab 1</b> ulazi dublje u <em>Juditu</em>. Sva 6 pjevanja, tematski stih (dvanaesterac), alegorija i argumenti za esej.</p>
        </div>
      </div>
    </div>

    </div><!-- /l0 -->

  <!-- ══════════════════════════════════════
       TAB 1 · JUDITA: 6 PJEVANJA
  ══════════════════════════════════════ -->
  <div class="layer" id="l1" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">6 pjevanja</span>
      <span class="pill p-go">Struktura epa</span>
      <span class="pill p-t">Likovi</span>
      <span class="pill p-pa">Stilska sredstva</span>
    </div>

    <div id="h12-add-pjevanja"></div>

    <p style="margin-bottom:20px">Judita je organizirana u <strong>6 pjevanja</strong> nejednake duljine. Svako pjevanje ima vlastitu dramsku funkciju u razvoju radnje. Klikni na pjevanje za detalje, ključne stihove i esejske signale.</p>

    <div class="scene-list">

      <!-- Pjevanje I -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">I</div>
          <div class="scene-ttl">Prolog · Navukodonosor šalje Holoferna · Betulija u strahu</div>
          <div class="scene-tag">In medias res</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-meta">
            <span class="scene-chip p-go">Ekspozicija</span>
            <span class="scene-chip p-br">Invokacija</span>
            <span class="scene-chip p-t">Antiturski apel</span>
          </div>
          <div class="scene-quote">„Ki hoće slišati čudesa Božja starim / neka posluša Judite kriposti harim"</div>
          <div class="scene-why">
            <b>Sadržaj:</b> Pjevanje počinje invokacijom čitatelja i predstavljanjem situacije. Nabukodonosor šalje svog vojskovođu Holoferna da osvoji sve narode koji mu nisu platili danak. Holofernova vojska je ogromna i strahovita. Betulija (Judita živi u njoj) se sprema za obranu.<br><br>
            <b>Ključni epski elementi:</b> Marulić počinje <em>in medias res</em> — ne od Nabukodonosorova djetinjstva, već od trenutka slanja Holoferna. To je antička epska tehnika (usp. Eneida: "Arma virumque cano").<br><br>
            <b>Ključ za esej:</b> U I. pjevanju Marulić uspostavlja temeljnu napetost: <em>golema sila vs. mali vjernički narod</em>. Ovo je i teološki i politički argument — Holofernova vojska je metafora osmanskih prodora. Čitatelj 1501. zna o čemu se radi.
          </div>
        </div>
      </div>

      <!-- Pjevanje II -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">II</div>
          <div class="scene-ttl">Holofernova opsada · Betulija kapitulira · Judita se pojavljuje</div>
          <div class="scene-tag">Kriza</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-meta">
            <span class="scene-chip p-br">Gradacija</span>
            <span class="scene-chip p-go">Uvod protagonistice</span>
            <span class="scene-chip p-r">Kriza</span>
          </div>
          <div class="scene-quote">„Biše tada udova, ka živi u gradu, / po imenu Judita u lipu porodu"</div>
          <div class="scene-why">
            <b>Sadržaj:</b> Holofern opsijeda Betuliju. Vojskovođe betulskih starješina već planiraju predaju — ako u pet dana ne dođe pomoć, grad će se predati. U tom momentu krize Marulić uvodi Juditu: mladu udovicu, pobožnu, lijepu, mudru.<br><br>
            <b>Karakterizacija Judite:</b> Marulić nabraja njezine vrline — ljepotu, pobožnost, vrlinu, bogatstvo. Ona nije tipični lik — ima individualnost i odlučnost. Kritizira starješine što se predaju bez borbe.<br><br>
            <b>Ključ za esej:</b> Uvođenje Judite u momentu najveće krize je dramatski genij. Ona je suprotnost Holofernu: ona je <em>mala i slaba fizički, ali moralno i duhovno jaka</em>. To je i alegorija: Hrvatska je mala zemlja, ali vjera je daje jačinom.
          </div>
        </div>
      </div>

      <!-- Pjevanje III -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">III</div>
          <div class="scene-ttl">Judita se priprema · Molitva · Odlazak u neprijateljev tabor</div>
          <div class="scene-tag">Kulminacija</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-meta">
            <span class="scene-chip p-go">Molitva</span>
            <span class="scene-chip p-br">Psihologizacija</span>
            <span class="scene-chip p-t">Ekfraza</span>
          </div>
          <div class="scene-quote">„Gospode svemogi, ki si stvor nebesa, / pogledaj na tugu i plač naroda svoga"</div>
          <div class="scene-why">
            <b>Sadržaj:</b> Judita priprema plan. Moli se Bogu dugo i žarko. Zatim se uljepšava — odijeva se u svečanu odjeću, miriše, ukrašava nakitom. Odlazi s sluškinjom Abrom u Holofernov tabor, tvrdeći da je bjegunkinja koja zna tajne Betulije.<br><br>
            <b>Ekfraza tijela:</b> III. pjevanje sadrži jedno od najljepših mjesta u hrv. renesansnoj književnosti — opis Juditine ljepote. Marulić pobrojava njezine tjelesne atribute s humanističkim oduševljenjem. Ovo je u napetosti s asketskim duhom teksta — <em>ljepota tijela kao Božji dar</em>.<br><br>
            <b>Molitva:</b> Juditina molitva je autentičan psihološki prikaz — strah, vjera, odlučnost, predanje. Nije to formalna liturgijska molitva, nego individualni razgovor s Bogom. To je humanistička inovacija.<br><br>
            <b>Ključ za esej:</b> Napetost između ljepote i opasnosti, između ženstvenosti i ratnog pohoda, ključna je za razumijevanje lika Judite. Ona nije <em>muška junakinja</em> — ona je svjesno ženska i to koristi kao oružje.
          </div>
        </div>
      </div>

      <!-- Pjevanje IV -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">IV</div>
          <div class="scene-ttl">Holofernova gozba · Judita pleše · Holofern se opija</div>
          <div class="scene-tag">Dramska napetost</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-meta">
            <span class="scene-chip p-br">Ironija</span>
            <span class="scene-chip p-go">Simbol</span>
            <span class="scene-chip p-r">Kulminacija</span>
          </div>
          <div class="scene-quote">„I u tomzi času nožem mu odsica / s tila glavu, ka mu niz skalice stica"</div>
          <div class="scene-why">
            <b>Sadržaj:</b> Holofern je oduševljen Juditom. Priređuje veliku gozbu, poziva Juditu da pleše. Ona pleše i veseli goste. Holofern se opija vinom. Gosti odlaze. Judita i Holofern ostaju sami u šatoru. On zaspi.<br><br>
            <b>Ubojstvo:</b> U jednom od najdramatičnijih trenutaka hrv. književnosti Judita uzima Holofernov mač i odsjeca mu glavu u dva udarca. Nosi glavu u torbi Abri i bježe natrag u Betuliju.<br><br>
            <b>Ironija situacije:</b> Holofern koji je zavojevao cijeli poznati svijet pobjeđen je vinom i ženom. Marulić naglašava: <em>tjelesna moć i oholost vode u propast</em>.<br><br>
            <b>Ključ za esej:</b> Ubojstvo je opisano rapidno — nema sentimentalnosti. Marulić je svjestan moralnog kompleksiteta: ubojstvo je grijeh, ali Bog odobrava ovu akciju. Ovo je teološki problem kojim se bavi i sam Marulić u tekstu.
          </div>
        </div>
      </div>

      <!-- Pjevanje V -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">V</div>
          <div class="scene-ttl">Povratak u Betuliju · Objava pobjede · Neprijatelj bježi</div>
          <div class="scene-tag">Peripetija</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-meta">
            <span class="scene-chip p-g">Preokret</span>
            <span class="scene-chip p-go">Proslava</span>
            <span class="scene-chip p-t">Domoljubni apel</span>
          </div>
          <div class="scene-quote">„Ovo vam glava je tiranina zla, / ka je hotila nas dat pod jaram zla"</div>
          <div class="scene-why">
            <b>Sadržaj:</b> Judita i Abra ulaze u Betuliju. Judita pokazuje starješinama Holofernovu glavu. Sljedećeg jutra Betulska vojska izlazi u napad i vika bojne klice — neprijatelji bez vojskovođe bježe u panici. Betulija je spašena.<br><br>
            <b>Peripetija:</b> Dramatski preokret — od gotovo sigurne predaje do totalne pobjede. Ovo je klasična epska struktura (usp. Ilijadu gdje Ahilov gnjev mijenja tok bitke).<br><br>
            <b>Ključ za esej:</b> V. pjevanje je trijumf kolektiva, ne samo Judite. Ona je bila instrument Božje providnosti — cijeli narod sudjeluje u pobjedi. To naglašava kolektivnu dimenziju alegorije: <em>svi Hrvati trebaju biti Judite</em>.
          </div>
        </div>
      </div>

      <!-- Pjevanje VI -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">VI</div>
          <div class="scene-ttl">Zahvala Bogu · Svečana procesija · Proslava i moral</div>
          <div class="scene-tag">Epilog</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-meta">
            <span class="scene-chip p-go">Zahvalnica</span>
            <span class="scene-chip p-br">Moral</span>
            <span class="scene-chip p-pa">Antiturski apel</span>
          </div>
          <div class="scene-quote">„Blagovsi, duše moja, Gospoda svemoga, / ki meni pomaga u trudu svakoga"</div>
          <div class="scene-why">
            <b>Sadržaj:</b> Narod slavi pobjedu. Judita predvodi svečanu procesiju — plesovi, himne, zahvale Bogu. Marulić na kraju umeće <em>moralnu pouku</em> za čitatelja: onaj tko živi u grijehu i oholosti snaći će ga Holofernova sudbina; onaj tko je pokoran Bogu pobijedi će kao Judita.<br><br>
            <b>Eksplicitni antiturski apel:</b> U završnici Marulić izlazi iz alegorijskog registra i direktno se obraća čitatelju (Hrvatu 16. st.): vjera i sloga su jedini put do pobjede nad Turcima. Ovo je jedinstveni moment u tekstu gdje autor ruptura fikciji.<br><br>
            <b>Ključ za esej:</b> Kraj Judite je ujedno kraj alegorije i početak direktnog govora. Marulić ne ostavlja čitatelja s pukim ugodom čitanja — on ga poziva na akciju. To ga razlikuje od "čiste" književnosti i čini ga angažiranim piscem.
          </div>
        </div>
      </div>

    </div><!-- /scene-list -->

    <!-- Pregled likova -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">Pregled likova Judite</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Lik</th><th>Karakterizacija</th><th>Alegorija</th><th>Ključni moment</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>Judita</strong></td>
            <td>Udovica, pobožna, lijepa, mudra, odlučna, hrabra. Psihologizirana — ima unutarnji život.</td>
            <td>Hrvatska / vjera / kršćanstvo</td>
            <td>Odsijeca Holofernovu glavu (IV. pjev.)</td>
          </tr>
          <tr>
            <td><strong>Holofern</strong></td>
            <td>Moćan vojskovođa, okrutan, tašt, pohlepan, sebičan, vlastoljubiv. Nema unutarnjeg života.</td>
            <td>Turci / zlo / bezbožništvo</td>
            <td>Opijenost vinom i Juditom (IV. pjev.)</td>
          </tr>
          <tr>
            <td><strong>Abra</strong></td>
            <td>Juditina vjerna sluškinja. Pomoćnica, svjedokinja. Nema vlastitu psihologiju.</td>
            <td>Hrv. narod / vjernost</td>
            <td>Nosi torbu s Holoferninom glavom</td>
          </tr>
          <tr>
            <td><strong>Nabukodonosor</strong></td>
            <td>Oholist, samoproglašeni bog. Šalje Holoferna.</td>
            <td>Vrhovni sultan</td>
            <td>Naređuje pohod na Zapad</td>
          </tr>
          <tr>
            <td><strong>Ozija</strong></td>
            <td>Vođa Betulije, jedan od starješina. Pristaje na Juditin plan nakon njene kritike.</td>
            <td>Hrv. vlastela koja priznaje moralnu snagu vjere</td>
            <td>Razgovor s Juditom (II. pjev.) — blagoslov pred odlazak</td>
          </tr>
          <tr>
            <td><strong>Starješine Betulije</strong></td>
            <td>Slabići koji planiraju predaju. Judita ih kritizira zbog slabosti vjere.</td>
            <td>Hrv. vlastela bez volje za otporom</td>
            <td>Plan predaje grada (II. pjev.)</td>
          </tr>
          <tr>
            <td><strong>Akior</strong></td>
            <td>Amonski vojskovođa u Holofernovoj vojsci. Upozorava Holoferna na Božju zaštitu Židova. Holofern ga izbacuje i završi u Betuliji — na kraju se preobrati na židovsku vjeru.</td>
            <td>Pogani koji prepoznaju Boga · preobraćenje</td>
            <td>Upozorenje Holofernu (II. pjev.) · preobraćenje na kraju (V. pjev.)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- DISCERE TOUCHPOINT 2 -->
    <div class="discere-banner" style="margin-top:20px" onclick="window.location.href='#discere'">
      <div class="discere-ico">⚡</div>
      <div class="discere-txt">
        <div class="discere-ttl">Discere · Scenariji s Juditom</div>
        <div class="discere-sub">Treniraj prepoznavanje pjevanja, stilskih sredstava i alegorijskih slojeva — format identičan ispitu</div>
      </div>
      <div class="discere-arrow">→</div>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">💡 Judita i H11 — što iz H11 nosi u H12</div>
      <div class="box-signal-txt">
        H11 je dao širi kontekst — Marulić kao jedan od pisaca H11 poglavlja. H12 je dubinska analiza samo Judite.
        Veza: Petrarca (H11 kontekst) → hrv. petrarkisti (Menčetić, Džore Držić) → Marulić koji NE piše petrarkistički.
        Marulić je <em>antitizan petrarkistima</em>: njega ne zanima ljubavna lirika, već domoljubni ep. Ovo je ključna esejska razlika
        unutar iste generacije hrv. humanista.
      </div>
    </div>

    <!-- Dubinska analiza Judite — stilska sredstva -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">★ Stilska sredstva u Juditi — za analizu ulomka</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Stilsko sredstvo</th><th>Primjer iz Judite</th><th>Učinak / esejska primjena</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>Anafora</strong></td>
            <td>„Ja poznam..." — ponavljanje početka (u stilu biblijskih psalama)</td>
            <td>Ritmički naboj, emfaza, biblijska intonacija</td>
          </tr>
          <tr>
            <td><strong>Antiteza</strong></td>
            <td>Judita (slaba/jaka) vs. Holofern (jak/slab)</td>
            <td>Temeljna kompozicijska napetost cijelog epa</td>
          </tr>
          <tr>
            <td><strong>Ekfraza</strong></td>
            <td>Opis Juditine ljepote u III. pjevanju</td>
            <td>Humanistički slavopjev tijelu kao Božjem daru</td>
          </tr>
          <tr>
            <td><strong>Invokacija</strong></td>
            <td>„Ki hoće slišati čudesa Božja starim..."</td>
            <td>Epska konvencija iz antike — Marulić je kršćanizira</td>
          </tr>
          <tr>
            <td><strong>Alegorija</strong></td>
            <td>Cijeli ep — svaki lik ima dvojno značenje</td>
            <td>Politička poruka skrivena u biblijskoj fabuli</td>
          </tr>
          <tr>
            <td><strong>Simbol</strong></td>
            <td>Holofernova glava = poraz oholosti</td>
            <td>Vizualni vrhunac — najcitiraniji moment epa</td>
          </tr>
          <tr>
            <td><strong>Personifikacija</strong></td>
            <td>Betulija kao živi organizam koji pati</td>
            <td>Grad = narod = tijelo koje trpi invaziju</td>
          </tr>
          <tr>
            <td><strong>Hybris → nemeza</strong></td>
            <td>Holofernova oholost → Holofernova smrt</td>
            <td>Klasični antički motiv (grčka tragedija) + biblijski moral</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Dubinska analiza — jezični slojevi -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">★ Jezik Judite — što i zašto</div><div class="sec-line"></div></div>

    <div class="box-key">
      <div class="box-key-lbl">🗣 Jezični slojevi Judite</div>
      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th>Sloj</th><th>Obilježje</th><th>Zašto to radi</th></tr></thead>
          <tbody>
            <tr><td><strong>Čakavština</strong></td><td>Osnova — Marulićev materinski idiom</td><td>Autentičnost, blizina čitatelju iz Dalmacije</td></tr>
            <tr><td><strong>Štokavski elementi</strong></td><td>Umetak — širi razumljivost</td><td>Namijenjen svim Hrvatima, ne samo Dalmatincima</td></tr>
            <tr><td><strong>Crkvenoslavenizmi</strong></td><td>Liturgijski register</td><td>Sakralni ton — ep kao molitva i manifest</td></tr>
            <tr><td><strong>Latinizmi</strong></td><td>Humanistička erudicija</td><td>Pokazuje učenost, dijalog s europskim humanizmom</td></tr>
          </tbody>
        </table>
      </div>
      <div class="box-signal-txt" style="margin-top:10px">Pisati na <strong>hrvatskome</strong> kad svi humanisti pišu latinski — to je politički čin. Marulić ga čini svjesno: Judita je namijenjena onima koji ne čitaju latinski, tj. puku koji treba motivirati za otpor.</div>
    </div>

    <!-- Sinteza -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">★ Sinteza — Judita u tri razine čitanja</div><div class="sec-line"></div></div>

    <div class="sc">
      <div class="sc-name">Razina 1 — Doslovna (biblijska priča)</div>
      <div class="sc-desc">Hebrejska udovica Judita ubija asirskog vojskovođu Holoferna i spašava grad Betuliju. Priča iz Knjige o Juditi (Stari zavjet). Marulić je preuzima vjerodostojno ali ne doslovno — dodaje opise, digresije, moralnu pouku.</div>
    </div>
    <div class="sc">
      <div class="sc-name">Razina 2 — Alegorijska (politička poruka)</div>
      <div class="sc-desc">Judita = Hrvatska/kršćanstvo; Holofern = Turci/Osmanlije; Betulija = hrv. gradovi pod opsadom. Poruka čitatelju 1501.: i vi možete pobijediti silnog neprijatelja uz Božju pomoć. Marulić sam to objašnjava u posveti Balistriliću.</div>
    </div>
    <div class="sc">
      <div class="sc-name">Razina 3 — Moralna (teološka pouka)</div>
      <div class="sc-desc">Oholost (hybris) vodi u propast; poniznost i vjera vode u pobjedu. Holofern je ohol i pada; Judita je ponizna pred Bogom i pobjeđuje. To je i kršćanski moral i antička mudrost — Marulić ih objedinjuje. VI. pjevanje eksplicitno govori čitatelju: živi po vjeri, ne po sili.</div>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">💡 Taktika za ulomak Judite na ispitu</div>
      <div class="box-signal-txt">
        (1) Identificiraj razinu: govori li ulomak doslovno, alegorijski ili moralno?<br>
        (2) Prepoznaj stilsko sredstvo: anafora, antiteza, ekfraza, simbol?<br>
        (3) Poveži s pjevanjem: u kojoj fazi radnje smo?<br>
        (4) Poveži s tezom: što ovaj ulomak govori o Juditi kao alegoriji ili Maruliću kao humanisti?<br>
        (5) Nikad ne gubiš bod ako pažljivo čitaš — odgovor uvijek logično slijedi iz teksta.
      </div>
    </div>

    
    <!-- VIDEO RESURSI — v3.5 -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">Video resursi</div><div class="sec-line"></div></div>

    <div class="prose">Kada ti tekst nije dovoljan — vizualni učenici često bolje pamte kroz video objašnjenja i predstave. Ovdje su pouzdani edukacijski resursi na YouTubeu.</div>

    <div class="yt-grid">
      <div id="h12-react-video-card-primary"></div>

      <div id="h12-react-video-card-secondary"></div>

      <div id="h12-react-video-card-tertiary"></div>

      <div id="h12-react-video-card-quaternary"></div>
    </div>

    <div class="box-tip" style="margin-top:14px">
      <div class="bt-ico">💡</div>
      <div class="bt-body">
        <div class="bt-title">Pro tip — kako koristiti</div>
        <div class="bt-txt">Video je <strong>dodatak</strong>, ne zamjena. Pročitaj djelo + ovu skriptu, pa pogledaj video — tako pamtiš 3× bolje nego kroz bilo koji pojedinačni izvor.</div>
      </div>
    </div>

<div class="nav-row">
      <span class="nb-btn" onclick="sw(0)">← Teorija</span>
      <span class="nb-btn primary" onclick="sw(2)">✍ Esej alat →</span>
    </div>

  </div><!-- /l1 -->

  <!-- ══════════════════════════════════════
       TAB 2 · ESEJ ALAT
  ══════════════════════════════════════ -->
  <div class="layer" id="l2" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">Teze</span>
      <span class="pill p-go">Argumenti</span>
      <span class="pill p-t">Usporedbe</span>
      <span class="pill p-pa">Konektori</span>
    </div>

    <div id="h12-add-esej"></div>

    <div class="box-warn" style="display:flex;gap:14px;align-items:flex-start">
      <div class="bw-ico">📋</div>
      <div class="bw-body">
        <div class="bw-title">Judita nije ispitno djelo 2026.</div>
        <div class="bw-txt">Judita <strong>nije na popisu esejskih djela</strong> za državnu maturu 2025./2026. <br><br><b>Esejska djela 2026. (21):</b> <em>Hrvatska:</em> Držić (Novela od Stanca), Gundulić (Dubravka), Kranjčević, Krleža (Glembajevi), Marinković (Kiklop), Matoš (novele), Mažuranić (Smrt Smail-age), Nazor, Novak (Posljednji Stipančići), Šenoa (Prijan Lovro), Šimić, Ujević. <em>Svjetska:</em> Baudelaire, Calderón (Život je san), Camus (Stranac), Dostojevski (Zločin i kazna), Goethe (Werther), Kafka (Preobražaj), Petrarca, Shakespeare (Hamlet), Sofoklo (Antigona).<br><br><strong>Judita se može koristiti kao kontekstualni argument</strong> u eseju o bilo kojem od ovih djela — bonus bodovi.</div>
        <div class="auth-links">
          <a href="https://www.ncvvo.hr" target="_blank" rel="noopener" class="auth-link">ncvvo.hr</a>
          <a href="/skripte/hrv" class="auth-link">D21 · Krleža →</a>
          <a href="/skripte/hrv/h20" class="auth-link">H20 · Petrarca →</a>
        </div>
      </div>
    </div>

    <div class="alat-tabs">
      <button class="alat-tab on" onclick="alTab(this,'at0')">Kontekst za Petrarcu</button>
      <button class="alat-tab" onclick="alTab(this,'at1')">Kontekst za Calderóna</button>
      <button class="alat-tab" onclick="alTab(this,'at2')">Kontekst za Krležu</button>
      <button class="alat-tab" onclick="alTab(this,'at3')">Usporedbe unutar H12</button>
      <button class="alat-tab" onclick="alTab(this,'at5')">📄 Model eseja</button>
      <button class="alat-tab" onclick="alTab(this,'at6')">🔗 Konektori</button>
      <button class="alat-tab" onclick="alTab(this,'at7')">✅ Checklist</button>
      <button class="alat-tab" onclick="alTab(this,'at8')">🚫 5 grešaka</button>
      <button class="alat-tab" onclick="alTab(this,'at4')">🔍 Scanner</button>
    </div>

    <!-- AT0: Petrarca -->
    <div class="alat-pane on" id="at0">
      <div class="alat-card">
        <h4>Judita u eseju o Petrarci</h4>
        <p>Esej o Petrarci treba pokazati recepciju petrarkizma u europskim i hrv. književnostima. Judita tu nudi <strong>negativni primjer</strong> — Marulić kao suvremenik hrv. petrarkista ide <em>sasvim različitim putem</em>.</p>
      </div>
      <div class="alat-teza" onclick="cpyTeza(this)">„Dok su hrv. petrarkisti (Menčetić, Džore Držić) preuzimali Petrarkin ljubavno-lirski repertoar, Marulić je birao epski žanr i religiozno-domoljubni sadržaj — pokazujući da humanizam u Hrvata nije jednobojan, već da odražava različite odgovore na isti europski impuls."</div>
      <div class="alat-teza" onclick="cpyTeza(this)">„Petrarcin sonet je forma introspektivnog ja; Marulićev dvanaesterac je forma kolektivnog glasa. Obje su renesansne forme, ali s potpuno suprotnim subjektom: jedan je lirski ljubavnik, drugi je epski narod."</div>
      <div class="alat-teza" onclick="cpyTeza(this)">„Marulić poznaje Petrarcu — ali namjerno ne piše ljubavnu liriku. Njegovo djelo Suzana pokazuje da može pisati o ženskom liku i moralu, ali bez erotske dimenzije petrarkizma. To je svjesno odmicanje od talijanske mode."</div>
      <div class="box-signal" style="margin-top:14px">
        <div class="box-signal-lbl">💡 Kako umetnuti u esej o Petrarci</div>
        <div class="box-signal-txt">Napiši: <em>"Petrarkin utjecaj na hrv. književnost nije bio jednoznačan. Dok su petrarkisti [X] preuzimali [Y], Marulić — suvremenik koji je sigurno poznavao petrarkizam — ide potpuno drugačijim putem: bira ep, bira Bibliju, bira domoljublje. To pokazuje da hrvatska renesansa nije pasivni prijevod europskog modela, nego kreativna prilagodba lokalnim potrebama."</em></div>
      </div>
    </div>

    <!-- AT1: Calderón -->
    <div class="alat-pane" id="at1">
      <div class="alat-card">
        <h4>Judita u eseju o Calderónu (Život je san)</h4>
        <p><em>Život je san</em> (1635.) i Judita (1501.) dijele temu: <strong>sudbina, sloboda volje i Božja providnost</strong>. Oboje su kršćanski humanisti koji se pitaju: može li čovjek slobodnom voljom mijenjati sudbinu?</p>
      </div>
      <div class="alat-teza" onclick="cpyTeza(this)">„I Marulić (Judita, 1501.) i Calderón (Život je san, 1635.) pišu u tradiciji kršćanskog humanizma: čovjek može djelovati moralno, ali konačni ishod je u Božjim rukama. Razlika je u žanru — ep vs. drama, i u kontekstu — antiturski Mediteran vs. protureformacijska Španjolska."</div>
      <div class="alat-teza" onclick="cpyTeza(this)">„Juditino ubojstvo Holoferna i Segismundovo buđenje u dvorcu dijele istu teološku premisu: slobodna volja postoji, ali se ostvaruje samo u skladu s Božjom providnošću. Oboje su kršćanski subjekti koji biraju ispravno."</div>
      <div class="box-signal" style="margin-top:14px">
        <div class="box-signal-lbl">💡 Napomena za esej</div>
        <div class="box-signal-txt">Ovaj kontrast je <em>vremenski</em> (134 godine razlike) i <em>žanrovski</em>. Nemoj tvrditi da Calderón poznaje Marulića — to nema osnove. Ali možeš pokazati da oboje odgovaraju na iste europske kršćansko-humanističke ideje.</div>
      </div>
    </div>

    <!-- AT2: Krleža -->
    <div class="alat-pane" id="at2">
      <div class="alat-card">
        <h4>Judita u eseju o Krleži (Gospoda Glembajevi)</h4>
        <p>Krleža je antiteza Marulića. Gdje Marulić vidi vjeru kao spas, Krleža vidi malograđansku hipokriziju. Gdje Marulić slavi kolektiv i narod, Krleža secira razgradnju buržoaske porodice.</p>
      </div>
      <div class="alat-teza" onclick="cpyTeza(this)">„Dok Marulić u Juditi (1501.) vidi religiju kao pokretačku snagu otpora i oslobođenja, Krleža u Gospodi Glembajevima (1928.) religiju prikazuje kao fasadu — dekoru u kojoj se tinja moralna korupcija. Od renesansne vjere do modernističke demistifikacije: 400 godina hrv. književnosti je povijest razočarenja."</div>
      <div class="alat-teza" onclick="cpyTeza(this)">„Marulićeva Judita i Krležini Glembajevi dijele jedan motiv: pad moćnika. Holofern pada jer je ohol; Leone Glembaj pada jer ne može pobjeći ni od naslijeđene krivnje ni od vlastite slabosti. Razlika: Marulić vidi pad kao Božju kaznu, Krleža kao nužnost psihološke i klasne determiniranosti."</div>
    </div>

    <!-- AT3: Unutarnje usporedbe -->
    <div class="alat-pane" id="at3">
      <div class="alat-card">
        <h4>Usporedne teze unutar H12 i s H11</h4>
        <p>Korisno za zadatke koji traže usporedbu u okviru hrv. renesanse.</p>
      </div>
      <div class="alat-teza" onclick="cpyTeza(this)">„Marulić (Judita) i Hektorović (Ribanje) pisci su iste generacije i istog prostora — Dalmacija 16. st. — ali različitih poetika: Marulić bira alegorijski ep i religijsku angažiranost, Hektorović bira realistični putopis i socijalnu dokumentarnost. Oboje su humanisti, ali različitih lica humanizma."</div>
      <div class="alat-teza" onclick="cpyTeza(this)">„Judita (1501.) i Osman (1626.) su oba domoljubna epa o kršćansko-turskom sukobu — ali 125 godina ih dijeli i stil ih razlikuje: Marulić piše renesansnu alegoriju u dvanaestercu, Gundulić barokni ep u osmercu s mnogo bujnijim opisima i retoričkim figurama."</div>
      <div class="alat-teza" onclick="cpyTeza(this)">„Juditina snaga dolazi od vjere, Holofernova slabost od oholosti — Marulić gradi ep na toj antitezi. Ovo je i renesansna i biblijska tema: hybris (oholost) kao uzrok pada. Homer, Vergilije, Biblija — svi se slažu. Marulić ih objedinjuje u hrv. kontekstu."</div>
    </div>

    <!-- AT5: Model eseja -->
    <div class="alat-pane" id="at5">
      <div class="alat-card">
        <h4>📄 Gotov model eseja — Judita kao kontekstualni argument (npr. uz Petrarcu)</h4>
        <p>Ovo nije esej koji predaješ — to je <strong>struktura i rečenice</strong> koje adapatiraš na vlastiti zadatak. Koristiti za pripremu, ne kopirati doslovno.</p>
      </div>

      <div class="box-key">
        <div class="box-key-lbl">UVOD — Prezentacija teme i tvrdnja</div>
        <div class="alat-teza" onclick="cpyTeza(this)">Francesco Petrarca (1304.–1374.) osnivač je europskog humanizma i utemeljitelj liričke tradicije koja je obilježila književnost renesanse. Njegov Kanconijer postavio je obrazac ljubavne lirike koji su preuzeli pjesnici diljem Europe, uključujući hrv. petrarkiste poput Šiška Menčetića i Džore Držića. Međutim, utjecaj humanizma u Hrvatskoj nije bio jednosmjeran: dok su petrarkisti preuzimali Petrarkin lirski model, Marko Marulić (1450.–1524.) bira ep i domoljubni sadržaj — što pokazuje kreativnu raznolikost hrv. humanizma.</div>
      </div>

      <div class="box-key">
        <div class="box-key-lbl">RAZRADA — Argument 1: Petrarcin utjecaj</div>
        <div class="alat-teza" onclick="cpyTeza(this)">Petrarkin Kanconijer (oko 1350.) definirao je renesansnu liriku: sonet kao forma, Laura kao idealizirana voljena žena, ljubav kao sublimacija duhovnog i tjelesnog. Hrv. petrarkisti tog modela preuzimaju tematiku, ali ga adaptiraju lokalnoj tradiciji: pišu dvanaesterac umjesto soneta, koriste čakavski idiom. Njihova recepcija Petrarce je kreativna, ne imitatorska.</div>
      </div>

      <div class="box-key">
        <div class="box-key-lbl">RAZRADA — Argument 2: Marulić kao antiteza (kontekstualni argument)</div>
        <div class="alat-teza" onclick="cpyTeza(this)">Marulić je suvremenik hrv. petrarkista, ali ide sasvim drugačijim putem. Umjesto ljubavne lirike, bira <em>ep</em>; umjesto Laurine ljepote, slavi Juditinu domoljubnu hrabrost; umjesto Petrarcinog intimnog ja, gradi kolektivni glas naroda pred turskom opasnošću. Ovaj kontrast pokazuje da humanizam u Hrvata nije bio jedinstven pokret, nego zbir različitih odgovora na europski impuls — svaki oblikovan lokalnim kontekstom.</div>
      </div>

      <div class="box-key">
        <div class="box-key-lbl">ZAKLJUČAK — Sinteza</div>
        <div class="alat-teza" onclick="cpyTeza(this)">Petrarcin utjecaj na hrv. književnost potvrđuje se i tamo gdje ga nema direktno: Marulićev namjerni odmak od petrarkizma dokaz je da je petrarkizam bio dovoljno snažan pokret da zahtijeva svjesno odbijanje. Hrv. humanizam — između Petrarcinog lirskog ja i Marulićevog epskog kolektiva — razvija vlastiti identitet koji nadilazi puki prijevod europskih modela.</div>
      </div>

      <div class="box-signal" style="margin-top:14px">
        <div class="box-signal-lbl">💡 Kako koristiti ovaj model</div>
        <div class="box-signal-txt">
          1. Adaptiraj uvod prema točnom pitanju na ispitu<br>
          2. Argument 2 (Marulić) skrati na 1–2 rečenice ako je kontekst, ne tema<br>
          3. Zaključak uvijek sažmi središnju tezu — ne dodavaj novo<br>
          4. Minimalno 440 riječi — ovaj model je ~300; razvij primjere i citate
        </div>
      </div>
    </div>

    <!-- AT6: Konektori -->
    <div class="alat-pane" id="at6">
      <div class="alat-card">
        <h4>🔗 Esejski konektori i stilistički veznici za H12</h4>
        <p>Konektori su "ljepilo" eseja — spajaju tvrdnje, argumente i citate. Ispit boduje <strong>koheziju teksta</strong>. Ovi veznici su prikladni za razinu eseja o književnosti.</p>
      </div>

      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th>Funkcija</th><th>Konektori</th><th>Primjer u rečenici</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>Uvođenje tvrdnje</strong></td>
              <td>Judita pokazuje... / Marulić gradi... / U Juditi se otkriva...</td>
              <td>„Judita pokazuje da hrv. renesansa nije pasivna recepcija europskih modela."</td>
            </tr>
            <tr>
              <td><strong>Dodavanje</strong></td>
              <td>Osim toga / Uz to / K tomu / Nadalje / Štoviše</td>
              <td>„Osim toga, dvanaesterac kao stih nosi tradiciju hrv. usmene poezije."</td>
            </tr>
            <tr>
              <td><strong>Kontrast</strong></td>
              <td>Međutim / Nasuprot tomu / Za razliku od / Dok... (dotle)</td>
              <td>„Za razliku od petrarkista, Marulić bira ep i kolektivni glas."</td>
            </tr>
            <tr>
              <td><strong>Uzrok-posljedica</strong></td>
              <td>Stoga / Zbog toga / Iz toga slijedi / Kao posljedica</td>
              <td>„Krbavska bitka (1493.) uzrokom je Marulićeve angažiranosti — stoga piše Juditu."</td>
            </tr>
            <tr>
              <td><strong>Potkrjepljenje citatom</strong></td>
              <td>Što se vidi u stihu... / Tome u prilog govori... / Primjer je...</td>
              <td>„Tome u prilog govori invokacija: 'Ki hoće slišati čudesa Božja starim...'"</td>
            </tr>
            <tr>
              <td><strong>Usporedba</strong></td>
              <td>Slično kao... / Na isti način... / Analogno... / Usporedivo s...</td>
              <td>„Slično kao Homer u Ilijadi, Marulić počinje in medias res."</td>
            </tr>
            <tr>
              <td><strong>Zaključivanje</strong></td>
              <td>Zaključno / U konačnici / Iz navedenog proizlazi / Ukratko</td>
              <td>„U konačnici, Judita je i ep i politički manifest i duhovna alegorija."</td>
            </tr>
            <tr>
              <td><strong>Kontekst (H12 u tuđem eseju)</strong></td>
              <td>U hrv. kontekstu / Uzporedbe radi / Warto napomenuti da...</td>
              <td>„Usporedbe radi, Marulić u Juditi (1501.) gradi isti kršćansko-humanistički svjetonazor."</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="box-key" style="margin-top:16px">
        <div class="box-key-lbl">🎯 Konektori za alegorijsku analizu</div>
        <div class="box-key-txt">
          „Na alegorijskoj razini..." / „U prenesenom značenju..." / „Simbolički gledano..." / „Doslovna razina otkriva... dok alegorijska..." / „Marulić gradi dvojno značenje: s jedne strane... s druge strane..."
        </div>
      </div>

      <div class="box-key">
        <div class="box-key-lbl">🎯 Konektori za stilsku analizu</div>
        <div class="box-key-txt">
          „Stilski je obilježen/a..." / „Metrika potvrđuje..." / „Ritmička struktura stiha..." / „Marulić postiže učinak X stilskim postupkom Y..." / „Invokacija u I. pjevanju funkcionira kao..."
        </div>
      </div>
    </div>

    <!-- AT7: Checklist prije predaje -->
    <div class="alat-pane" id="at7">
      <div class="alat-card">
        <h4>✅ Checklist prije predaje eseja</h4>
        <p>Zadnje 2 minute — prođi ovim redoslijedom. Svaka točka vrijedi bodove.</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px" id="cl-list"></div>
      <div style="margin-top:12px;font-family:var(--mono);font-size:10px;color:var(--t3)">Klikni za označavanje · localStorage sprema stanje</div>
    </div>

    <!-- AT8: 5 grešaka -->
    <div class="alat-pane" id="at8">
      <div class="alat-card">
        <h4>🚫 5 grešaka koje uništavaju esej o Juditi</h4>
        <p>Ove greške smanjuju ocjenu čak i ako je sadržaj točan. Izbjegavaj ih svjesno.</p>
      </div>

      <div class="scene-list">
        <div class="scene-card" onclick="togScene(this)">
          <div class="scene-hdr"><div class="scene-num">1</div><div class="scene-ttl">Prepričavanje radnje bez argumenta</div><div class="scene-arr">▶</div></div>
          <div class="scene-body">
            <div class="scene-why"><b>Greška:</b> „Judita je uzela nož i odsjekla Holofernu glavu." — bez analize zašto je to važno.<br><br><b>Ispravno:</b> „Ubojstvo Holoferna u IV. pjevanju je dramska kulminacija alegorije — Judita/Hrvatska pobjeđuje Holoferna/Turke upravo u trenutku njegove najveće ranjivosti (pijanstvo, oholost)."</div>
          </div>
        </div>
        <div class="scene-card" onclick="togScene(this)">
          <div class="scene-hdr"><div class="scene-num">2</div><div class="scene-ttl">Zaboraviti alegorijsku razinu</div><div class="scene-arr">▶</div></div>
          <div class="scene-body">
            <div class="scene-why"><b>Greška:</b> Pisati samo o biblijskoj priči bez spominjanja što likovi simboliziraju.<br><br><b>Ispravno:</b> Uvijek naznači alegorijsku dimenziju barem jednom rečenicom: „Na alegorijskoj razini Judita simbolizira Hrvatsku, što je Marulić sam potvrdio u posveti Balistriliću."</div>
          </div>
        </div>
        <div class="scene-card" onclick="togScene(this)">
          <div class="scene-hdr"><div class="scene-num">3</div><div class="scene-ttl">Miješati Juditu i Novelu od Stanca</div><div class="scene-arr">▶</div></div>
          <div class="scene-body">
            <div class="scene-why"><b>Greška:</b> Pripisivati Juditu Marinu Držiću ili Novelu Maruliću. Ili koristiti pojmove iz jednog za analizu drugog.<br><br><b>Ispravno:</b> Judita = Marulić (1501.), ep, Biblija. Novela od Stanca = Marin Držić (1550.), farsa, kazalište.</div>
          </div>
        </div>
        <div class="scene-card" onclick="togScene(this)">
          <div class="scene-hdr"><div class="scene-num">4</div><div class="scene-ttl">Tvrditi da je Judita ispitno djelo 2026.</div><div class="scene-arr">▶</div></div>
          <div class="scene-body">
            <div class="scene-why"><b>Greška:</b> Pisati esej o Juditi kao da je tema 2026. — nije!<br><br><b>Ispravno:</b> Esejska djela 2026. su 21 — 12 hrvatskih (Držić, Gundulić, Kranjčević, Krleža, Marinković, Matoš, Mažuranić, Nazor, Novak, Šenoa, Šimić, Ujević) i 9 svjetskih (Baudelaire, Calderón, Camus, Dostojevski, Goethe, Kafka, Petrarca, Shakespeare, Sofoklo). Judita se SAMO koristi kao kontekstualni argument u eseju o bilo kojem od njih.</div>
          </div>
        </div>
        <div class="scene-card" onclick="togScene(this)">
          <div class="scene-hdr"><div class="scene-num">5</div><div class="scene-ttl">Koristiti dvanaesterac kao jedinu karakteristiku</div><div class="scene-arr">▶</div></div>
          <div class="scene-body">
            <div class="scene-why"><b>Greška:</b> „Judita je napisana u dvanaestercu." — samo to, bez analize što to znači.<br><br><b>Ispravno:</b> „Dvanaesterac (6+6) s dvostrukim dvostihom (AA BB) spaja tradiciju hrv. usmene poezije s humanističkim epskim oblikom — to je Marulićev stihovni kompromis između tradicije i inovacije."</div>
          </div>
        </div>
      </div>
    </div>

    <!-- DISCERE TOUCHPOINT 3 -->
    <div class="discere-banner" id="discere-esej" style="margin-bottom:14px" onclick="window.location.href='#discere'">
      <div class="discere-ico">📝</div>
      <div class="discere-txt">
        <div class="discere-ttl">Discere · Esejski simulator</div>
        <div class="discere-sub">Treniraj pisanje teza o Juditi uz AI feedback — Standard i Pro plan</div>
      </div>
      <div class="discere-arrow">→</div>
    </div>

    <!-- AT4: Scanner -->
    <div class="alat-pane" id="at4">
      <div class="alat-card">
        <h4>📄 Ulomak scanner — analiza stihova Judite</h4>
        <p>Zalijepite ulomak iz Judite (koji ste dobili na ispitu ili učite) — dobivate analizu stilskih sredstava, alegorije i esejskih argumenata.</p>
      </div>
      <div class="wc-wrap">
        <div class="wc-header">
          <div class="wc-lbl">Ulomak Judite — Scanner</div>
          <div class="wc-stats">
            <div class="wc-stat" id="sc-words"><span class="wc-stat-num">0</span><span class="wc-stat-lbl">Riječi</span></div>
            <div class="wc-stat" id="sc-lines"><span class="wc-stat-num">0</span><span class="wc-stat-lbl">Stihovi</span></div>
            <div class="wc-stat" id="sc-syl"><span class="wc-stat-num">—</span><span class="wc-stat-lbl">Prosj. slogova</span></div>
          </div>
        </div>
        <div class="wc-body">
          <textarea id="scanner-in" class="wc-ta" placeholder="Zalijepite stihove Judite ovdje...&#10;Npr: Ki hoće slišati čudesa Božja starim / neka posluša Judite kriposti harim..." rows="5" oninput="scannerUpdate()"></textarea>
          <div class="wc-actions">
            <button class="wc-btn" style="background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#0F0605;border:none" onclick="scanJudita()">🔍 Analiziraj</button>
            <button class="wc-btn" onclick="document.getElementById('scanner-in').value='';scannerUpdate();document.getElementById('scanner-out').innerHTML=''">✕ Obriši</button>
          </div>
        </div>
      </div>
      <div id="scanner-out" style="margin-top:14px"></div>
    </div>
  </div>

  <!-- ══════════════════════════════════════
       TAB 3 · CITATNIK
  ══════════════════════════════════════ -->
  <div class="layer" id="l3" role="tabpanel" tabindex="0"></div>

  <div class="layer" id="l4" role="tabpanel" tabindex="0"></div>

  <div class="layer" id="l5" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">20 flashcards</span>
      <span class="pill p-go">3 razine matching</span>
      <span class="pill p-t">Demo slobodan</span>
      <span class="pill p-r">Puno PRO</span>
    </div>

    <div class="reveal-lock" id="h12-drill-lock" style="display:none">
      <div class="reveal-lock-eye">PRO FEATURE</div>
      <div class="reveal-lock-title">⚡ Drill — H12 Marulić i Judita</div>
      <div class="reveal-lock-desc">Flashcards i Matching game su zaključani na Free planu. Otključaj puni Drill za vježbu pod ispitnim pritiskom.</div>
      <a class="reveal-lock-btn pro-gate-btn" href="/cijene?ctx=drill_h12">🔓 Aktiviraj Standard</a>
    </div>

    <div id="h12-drill-body">

    <div class="box-int">
      <div class="box-int-lbl">💡 Drill — aktivno učenje</div>
      <div class="box-int-txt">
        <strong>Flashcards</strong> za pojmove + <strong>matching</strong> (pojam › objašnjenje). Brže od pasivnog čitanja, direktno priprema za teoriju i kviz.
      </div>
    </div>

    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · Flashcards · okreni karticu</div><div class="sec-line"></div></div>

    <style>
      .h12d-fc-wrap{display:flex;flex-direction:column;align-items:center;gap:18px;margin:16px 0 24px}
      .h12d-fc-counter{font-family:var(--mono);font-size:11px;color:var(--t3);letter-spacing:1.5px;text-transform:uppercase}
      .h12d-fc-counter b{color:var(--bronze-l)}
      .h12d-fc{width:100%;max-width:520px;min-height:220px;perspective:1500px;cursor:pointer}
      .h12d-fc-inner{position:relative;width:100%;height:100%;min-height:220px;transition:transform .6s cubic-bezier(.4,0,.2,1);transform-style:preserve-3d}
      .h12d-fc.flipped .h12d-fc-inner{transform:rotateY(180deg)}
      .h12d-fc-front,.h12d-fc-back{position:absolute;inset:0;min-height:220px;padding:40px 32px;border-radius:var(--r4);backface-visibility:hidden;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;border:1px solid var(--bdm)}
      .h12d-fc-front{background:linear-gradient(135deg,var(--card),var(--ele))}
      .h12d-fc-back{background:linear-gradient(135deg,rgba(220,50,47,.12),rgba(232,201,122,.05));border-color:var(--bd-br);transform:rotateY(180deg)}
      .h12d-fc-cat{font-family:var(--mono);font-size:9px;letter-spacing:2px;text-transform:uppercase;color:var(--bronze);margin-bottom:12px}
      .h12d-fc-term{font-family:var(--display);font-size:30px;font-weight:700;color:var(--t1);letter-spacing:1px}
      .h12d-fc-hint{font-family:var(--mono);font-size:10px;color:var(--t3);margin-top:22px;letter-spacing:1px}
      .h12d-fc-def{font-family:var(--serif);font-size:16px;line-height:1.65;color:var(--t1);max-width:420px}
      .h12d-fc-controls{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
      .h12d-fcb{padding:10px 20px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);color:var(--t2);font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all .2s}
      .h12d-fcb:hover{border-color:var(--bd-br);color:var(--bronze-l)}
      .h12d-fcb.primary{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border-color:var(--bronze)}
      .h12d-fcb.know{border-color:var(--bd-g);color:var(--green)}
      .h12d-fcb.know:hover{background:var(--dim-g)}
      .h12d-fcb.dont{border-color:var(--bd-r);color:var(--red)}
      .h12d-fcb.dont:hover{background:var(--dim-r)}
      .h12d-fc-stats{display:flex;gap:20px;margin-top:10px;font-family:var(--mono);font-size:11px}
      .h12d-fc-stats span{color:var(--t3)}
      .h12d-fc-stats b{color:var(--green)}
      .h12d-fc-stats i{color:var(--red);font-style:normal}
    </style>

    <div class="h12d-fc-wrap">
      <div class="h12d-fc-counter"><span id="h12d-fc-num"><b>1</b> / 20</span></div>
      <div class="h12d-fc" id="h12d-fc-card" onclick="h12DrillFcFlip()">
        <div class="h12d-fc-inner" id="h12d-fc-inner">
          <div class="h12d-fc-front">
            <div class="h12d-fc-cat" id="h12d-fc-cat-f">PITANJE</div>
            <div class="h12d-fc-term" id="h12d-fc-term">—</div>
            <div class="h12d-fc-hint">Klikni za okretanje</div>
          </div>
          <div class="h12d-fc-back">
            <div class="h12d-fc-cat" id="h12d-fc-cat-b">TOČAN ODGOVOR</div>
            <div class="h12d-fc-def" id="h12d-fc-def">—</div>
          </div>
        </div>
      </div>
      <div class="h12d-fc-controls">
        <button class="h12d-fcb dont" onclick="h12DrillFcMark(0)">❌ Ne znam</button>
        <button class="h12d-fcb know" onclick="h12DrillFcMark(1)">✅ Znam</button>
        <button class="h12d-fcb" onclick="h12DrillFcSkip()">Preskoči ›</button>
        <button class="h12d-fcb" onclick="h12DrillFcShuffle()">📌 Promiješaj</button>
        <button class="h12d-fcb primary" onclick="h12DrillFcReset()">🔁 Reset</button>
      </div>
      <div class="h12d-fc-stats"><span>točno: <b id="h12d-fc-right">0</b></span><span>krivo: <i id="h12d-fc-wrong">0</i></span></div>
    </div>

    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · Spari · djelo › autor</div><div class="sec-line"></div></div>

    <style>
      .mg-intro{font-family:var(--serif);font-size:14px;color:var(--t2);margin-bottom:16px}
      .mg-board{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:18px 0}
      .mg-col{display:flex;flex-direction:column;gap:8px}
      .mg-col-label{font-family:var(--mono);font-size:9px;letter-spacing:2px;color:var(--t3);text-transform:uppercase;text-align:center;margin-bottom:4px}
      .mg-item{padding:12px 16px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--serif);font-size:14px;color:var(--t1);cursor:pointer;transition:all .18s;text-align:center;line-height:1.4;min-height:48px;display:flex;align-items:center;justify-content:center}
      .mg-item:hover{border-color:var(--bd-br);transform:translateX(2px)}
      .mg-item.sel{border-color:var(--bronze);background:var(--dim-br);color:var(--bronze-l);font-weight:600}
      .mg-item.ok{border-color:var(--green);background:var(--dim-g);color:var(--green);opacity:.6;pointer-events:none}
      .mg-item.err{border-color:var(--red);background:var(--dim-r);color:var(--red);animation:shake .4s}
      @keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}
      .mg-stats{display:flex;gap:20px;justify-content:center;margin-top:14px;font-family:var(--mono);font-size:11px;color:var(--t3)}
      .mg-stats b{color:var(--green)}
      .mg-done{text-align:center;padding:22px;background:var(--dim-g);border:1px solid var(--bd-g);border-radius:var(--r3);font-family:var(--display);font-size:16px;color:var(--green);font-weight:700;letter-spacing:1px}
    </style>

    <div class="mg-intro">Klikni jedan element s lijeve strane, pa njegov par s desne. Pogrešne veze se resetiraju.</div>

    <div class="pro-gate" data-feature="drill-matching">
      <div class="mg-board" id="mg-board"></div>
      <div class="mg-stats"><span>spareno: <b id="mg-score">0</b> / <span id="mg-total">9</span></span></div>
      <div class="pro-gate-overlay">
        <div class="pro-gate-fade"></div>
        <div class="pro-gate-cta">
          <div class="pro-gate-label">9 <b>pair matching</b> vježbi — djelo › autor · pojam › epoha · stil › autor</div>
          <a class="pro-gate-btn" href="/pricing?ctx=drill_matching_h12">Otključaj — 9,99€/mj</a>
          <div class="pro-gate-meta">Otkaži bilo kad · Free trial 7 dana</div>
        </div>
      </div>
    </div>

    <div class="nav-row">
      <span class="nb" onclick="sw(4)">← 📚 Pojmovnik</span>
      <span class="nb primary" onclick="sw(6)">🧠 Kviz →</span>
    </div>
    </div>
  </div>

  <!-- ══════════════════════════════════════
       TAB 6 · KVIZ
  ══════════════════════════════════════ -->
  <div class="layer" id="l6" role="tabpanel" tabindex="0">
    <!-- DISCERE TOUCHPOINT 4 -->
    <div class="discere-banner" id="discere-kviz" onclick="window.location.href='#discere'">
      <div class="discere-ico">🏆</div>
      <div class="discere-txt">
        <div class="discere-ttl">Discere · Pravi ispit mode</div>
        <div class="discere-sub">Ovaj kviz je priprema — u Discere treniraj s vremenskim pritiskom i točnim bodovanjem kao na maturi</div>
      </div>
      <div class="discere-arrow">→</div>
    </div>
    <div class="qz-wrap" id="qz-wrap"></div>
    <!-- Score History -->
    <div class="score-hist" id="score-hist" style="display:none">
      <div class="score-hist-lbl">📊 Zadnjih 5 kvizova</div>
      <div class="score-hist-rows" id="score-hist-rows"></div>
    </div>
  </div>

  <!-- ══════════════════════════════════════
       TAB 7 · CHECKPOINT
  ══════════════════════════════════════ -->
  <div class="layer" id="l7" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-g">završetak poglavlja</span>
      <span class="pill p-go">self-check</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Provjera — što zaista znaš?</div>
      <div class="box-int-txt">
        Označi stavke koje si <em>stvarno</em> usvojio. Ne žuri — ako nešto nisi siguran, vrati se na odgovarajući tab. <strong>Cilj: svih 10 označeno prije prelaska na H13 — Gundulić i barok.</strong>
      </div>
    </div>

    <div class="cp-summary">
      <div class="cp-sum-txt">Napredak · <b id="cp-done">0</b> / 10 stavki</div>
      <div class="cp-actions" style="margin-top:18px;display:flex;gap:10px;justify-content:center">
        <button type="button" class="fcb" onclick="cpReset()" style="padding:8px 16px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:8px;color:var(--t2,#c5b8aa);font-family:var(--mono,monospace);font-size:11px;letter-spacing:0.8px;cursor:pointer">🔁 Resetiraj</button>
        <button type="button" class="fcb primary" onclick="sw(6)" style="padding:8px 16px;background:var(--gold,#e9b446);color:#0F0605;border:none;border-radius:8px;font-family:var(--mono,monospace);font-size:11px;font-weight:800;letter-spacing:0.8px;cursor:pointer">🧠 Idi na kviz</button>
      </div>
      <div class="cp-sum-pct" id="cp-pct">0%</div>
    </div>

    <style>
      .minirev{margin:16px 0 14px;padding:14px;border:1px solid var(--line,rgba(255,255,255,.12));border-radius:var(--r3,12px);background:linear-gradient(135deg,var(--panel,rgba(255,255,255,.03)) 0%,rgba(255,255,255,.01) 100%)}
      .minirev-head{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:10px}
      .minirev-ttl{font-weight:800;color:var(--gold,#e9b446);font-size:14px}
      .minirev-time{font-size:11px;color:var(--muted,#b8b8b8)}
      .minirev-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:8px;margin-bottom:10px}
      .minirev-card{border:1px solid var(--line,rgba(255,255,255,.12));border-radius:10px;padding:9px;background:rgba(255,255,255,.02)}
      .minirev-card-lbl{font-size:10px;letter-spacing:.8px;text-transform:uppercase;color:var(--bronze-l,#e0ba93);margin-bottom:4px;font-weight:700}
      .minirev-card-val{font-size:12.5px;line-height:1.45;color:var(--txt,#ebebeb)}
      .minirev-card-val b{color:var(--gold,#e9b446)}
      .minirev-quotes{border:1px dashed var(--line,rgba(255,255,255,.12));border-radius:10px;padding:10px;background:rgba(255,255,255,.015)}
      .minirev-quotes ol{margin:0;padding-left:18px}
      .minirev-quotes li{margin:4px 0;font-size:12.5px;line-height:1.45}
      .exam-prompt{position:relative;margin:0 0 16px;padding:13px;border:1px solid var(--bd-r,rgba(192,66,68,.28));border-radius:var(--r3,12px);background:linear-gradient(135deg,var(--dim-r,rgba(192,66,68,.12)) 0%,rgba(224,82,82,.04) 100%)}
      .exam-prompt::before{content:'NCVVO · SKOLSKI ESEJ';display:inline-block;font-size:10px;letter-spacing:1px;text-transform:uppercase;padding:3px 7px;border:1px solid var(--bd-r,rgba(192,66,68,.28));border-radius:999px;background:var(--bg,#0f0b10);color:var(--red-l,#f0a8a8);margin-bottom:8px}
      .exam-prompt-ttl{font-size:14px;font-weight:800;color:var(--txt,#f3f3f3);margin-bottom:6px}
      .exam-prompt-task{font-size:13px;line-height:1.55;color:var(--txt,#ececec);margin-bottom:8px}
      .exam-prompt-tips{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:8px}
      .exam-tip{border:1px solid var(--bd-r,rgba(192,66,68,.28));border-radius:10px;padding:8px 9px;background:rgba(15,8,9,.22);font-size:12.5px;line-height:1.45}
    </style>

    <div class="minirev">
      <div class="minirev-head">
        <div class="minirev-ttl">🧭 Mini-revizija — sve u 3 minute</div>
        <div class="minirev-time">~3 min čitanja</div>
      </div>
      <div class="minirev-body">
        <div class="minirev-grid">
          <div class="minirev-card"><div class="minirev-card-lbl">📌 Djelo i autor</div><div class="minirev-card-val"><b>Judita</b> Marka Marulića (nastanak <b>1501.</b>, tisak <b>1521.</b>) je prvi veliki ep na hrvatskom.</div></div>
          <div class="minirev-card"><div class="minirev-card-lbl">📌 Kontekst</div><div class="minirev-card-val">Hrvatska renesansa pod pritiskom Osmanlija: <b>Krbavska bitka 1493.</b> i ideja <b>Antemurale Christianitatis</b>.</div></div>
          <div class="minirev-card"><div class="minirev-card-lbl">📌 Forma</div><div class="minirev-card-val"><b>Dvanaesterac (6+6)</b> + rimovani <b>dvostih</b>; ep u <b>6 pjevanja</b>.</div></div>
          <div class="minirev-card"><div class="minirev-card-lbl">📌 Tehnike</div><div class="minirev-card-val"><b>In medias res</b>, invokacija, digresije i ekfraza kao humanistički postupci.</div></div>
          <div class="minirev-card"><div class="minirev-card-lbl">📌 Alegorija</div><div class="minirev-card-val"><b>Judita = Hrvatska/vjera</b>, <b>Holofern = Turci</b>, <b>Betulija = hrvatski gradovi</b>.</div></div>
          <div class="minirev-card"><div class="minirev-card-lbl">📌 Ključna poruka</div><div class="minirev-card-val">Vjera i razbor pobjeđuju silu; Holofernova <b>hybris</b> vodi u propast.</div></div>
          <div class="minirev-card"><div class="minirev-card-lbl">📌 Most</div><div class="minirev-card-val">› <b>H13 Gundulić i barok</b>: prijelaz s renesansne jasnoće na baroknu patetiku i kontrast.</div></div>
          <div class="minirev-card"><div class="minirev-card-lbl">📌 Najveća greška</div><div class="minirev-card-val">Nabrajanje pojmova bez argumenta. Na maturi se boduje <b>što i zašto dokazuješ</b>.</div></div>
        </div>
        <div class="minirev-quotes">
          <b style="display:block;font-family:var(--mono);font-size:9.5px;color:var(--bronze-l,#e0ba93);letter-spacing:1.5px;font-weight:700;text-transform:uppercase;margin-bottom:8px">3 citata/formulacije napamet</b>
          <ol>
            <li>„Ki hoće slišati čudesa Božja starim...” <b>(invokacija Judite)</b></li>
            <li>„U versih harvacki složena.” <b>(Marulićeva autopoetička oznaka)</b></li>
            <li>„Judita alegorijski prikazuje otpor maloga naroda velikoj sili.” <b>(interpretacijska formulacija)</b></li>
          </ol>
        </div>
      </div>
    </div>

    <div class="exam-prompt">
      <div class="exam-prompt-ttl">📌 Kako se Marulić i Judita mogu pojaviti na ispitu</div>
      <div class="exam-prompt-task">Analiziraj kako Marulić u Juditi spaja biblijski predložak s domoljubnom alegorijom hrvatskog prostora. U argumentaciji objasni funkciju dvanaesterca, alegorijskih likova i povijesnog konteksta turske opasnosti.</div>
      <div class="exam-prompt-tips">
        <div class="exam-tip"><b>📌 Struktura eseja</b>Uvod (50-60 r.) · 3 razradna odlomka (~120 r. svaki: kontekst, tekstna analiza, zaključna evaluacija) · zaključak (60-70 r.).</div>
        <div class="exam-tip"><b>📌 Citati</b>Koristi 2-3 citata/formulacije: invokacija + jedna strofa o Juditi/Holofernu + jedna interpretacijska rečenica.</div>
        <div class="exam-tip"><b>📌 Povezivanje</b>Poveži formu i značenje: dvanaesterac nije samo metar, nego nosi svečani epski ton i autoritet.</div>
        <div class="exam-tip"><b>📚 Pojmovi</b>Alegorija · in medias res · invokacija · kršćanski humanizam · hybris · dvostih.</div>
      </div>
    </div>

    <div class="pro-gate" data-feature="checkpoint-tracking">
      <div class="cp-grid" id="cp-grid">
      <div class="cp-item" onclick="cpToggle(this)">
        <div class="cp-box">?</div>
        <div>Znam razliku između nastanka i tiskanja Judite (1501. / 1521.) i mogu objasniti zašto je važna.</div>
        <span class="cp-hint">Tab 0</span>
      </div>
      <div class="cp-item" onclick="cpToggle(this)">
        <div class="cp-box">?</div>
        <div>Mogu opisati dvanaesterac (6+6), cezure i dvostruko rimovani dvostih na primjeru.</div>
        <span class="cp-hint">Tab 0</span>
      </div>
      <div class="cp-item" onclick="cpToggle(this)">
        <div class="cp-box">?</div>
        <div>Znam alegorijsku shemu Judite: Judita/Holofern/Betulija i mogu je primijeniti u eseju.</div>
        <span class="cp-hint">Tab 1</span>
      </div>
      <div class="cp-item" onclick="cpToggle(this)">
        <div class="cp-box">?</div>
        <div>Mogu nabrojati svih 6 pjevanja i za svako dati ključni događaj te funkciju u kompoziciji epa.</div>
        <span class="cp-hint">Tab 1</span>
      </div>
      <div class="cp-item" onclick="cpToggle(this)">
        <div class="cp-box">?</div>
        <div>Razumijem in medias res i invokaciju te mogu pokazati gdje se pojavljuju u Juditi.</div>
        <span class="cp-hint">Tab 1</span>
      </div>
      <div class="cp-item" onclick="cpToggle(this)">
        <div class="cp-box">?</div>
        <div>Mogu objasniti zašto je Juditina molitva primjer psihologizacije i kršćanskog humanizma.</div>
        <span class="cp-hint">Tab 2</span>
      </div>
      <div class="cp-item" onclick="cpToggle(this)">
        <div class="cp-box">?</div>
        <div>Znam povezati Krbavsku bitku (1493.) s nastankom Judite i antiturskim apelom.</div>
        <span class="cp-hint">Tab 0</span>
      </div>
      <div class="cp-item" onclick="cpToggle(this)">
        <div class="cp-box">?</div>
        <div>Mogu usporediti Juditu (renesansa, dvanaesterac) i Osmana (barok, osmerac).</div>
        <span class="cp-hint">Tab 2</span>
      </div>
      <div class="cp-item" onclick="cpToggle(this)">
        <div class="cp-box">?</div>
        <div>Mogu napisati jasan esej-sud o funkciji alegorije u Juditi i poduprijeti ga citatom.</div>
        <span class="cp-hint">Tab 2</span>
      </div>
      <div class="cp-item" onclick="cpToggle(this)">
        <div class="cp-box">?</div>
        <div>Uspio/la sam riješiti kviz i argumentirano objasniti barem 3 odgovora koja sam prije griješio/la.</div>
        <span class="cp-hint">Tab 6</span>
      </div>
      </div>
      <div class="pro-gate-overlay">
        <div class="pro-gate-fade"></div>
        <div class="pro-gate-cta">
          <div class="pro-gate-label"><b>Checkpoint tracking</b> kroz sva 28+22 poglavlja · napredak se sprema · graf spremnosti za maturu</div>
          <a class="pro-gate-btn" href="/pricing?ctx=checkpoint_h11">Otključaj — 9,99€/mj</a>
          <div class="pro-gate-meta">Otkaži bilo kad · Free trial 7 dana</div>
        </div>
      </div>
    </div>

    <div class="cp-final" id="cp-final">
      <div class="cp-final-ico">🎉</div>
      <div class="cp-final-title">H12 Završeno!</div>
      <div class="cp-final-msg">Odlično! Savladani su Marulić i Judita — forma, alegorija i povijesni kontekst. Sljedeće: <strong>H13 · Gundulić i hrvatski barok</strong> — Dubravka i Osman.</div>
      <div class="cp-actions">
        <a href="/skripte/hrv/h13" class="reveal-lock-btn" style="text-decoration:none">→ H13 Gundulić</a>
        <button class="nb" onclick="cpReset()">🔁 Resetiraj</button>
      </div>
    </div>

    <div class="nav-row">
      <span class="nb" onclick="sw(6)">← 🧠 Kviz</span>
      <span class="nb" onclick="sw(0)">🔁 Ponovi H12</span>
    </div>
  </div>

</div><!-- /content-wrap -->
  <!-- ═══════════════════════════════════
       CROSS-CHAPTER NAVIGATION
  ═══════════════════════════════════ -->
  <div class="chapter-nav-wrap">
    <div class="chapter-nav-hdr">
      <div class="chapter-nav-title">📚 Sljedeća poglavlja</div>
      <div class="chapter-nav-sub">Nastavi učiti — povezana poglavlja u Maturiraj knjižnici</div>
    </div>
    
    <div class="chapter-nav-grid" style="grid-template-columns:1fr;max-width:560px;margin-left:auto;margin-right:auto">
      <a class="chapter-nav-card chapter-nav-next" href="/skripte/hrv/h13">
        <div class="chapter-nav-meta">
          <div class="chapter-nav-pill chapter-nav-pill-next">SLJEDEĆE</div>
          <div class="chapter-nav-name">H13 · Gundulić · Dubravka</div>
          <div class="chapter-nav-desc">Hrvatski barok — Dubrovačka renesansa</div>
        </div>
        <div class="chapter-nav-arrow">→</div>
      </a>
</div>

    <div class="chapter-nav-related">
      <div class="chapter-nav-related-ttl">🔗 Povezana poglavlja</div>
      <div class="chapter-nav-related-grid">
        <a class="chapter-nav-mini" href="/skripte/hrv/h13">
          <span class="chapter-nav-mini-code">H13</span>
          <span class="chapter-nav-mini-name">Gundulić · Dubravka</span>
        </a>
        <a class="chapter-nav-mini" href="/skripte/hrv/h14">
          <span class="chapter-nav-mini-code">H14</span>
          <span class="chapter-nav-mini-name">Narodni preporod</span>
        </a>
        <a class="chapter-nav-mini" href="/skripte/hrv/h17">
          <span class="chapter-nav-mini-code">H17</span>
          <span class="chapter-nav-mini-name">Stilske figure</span>
        </a>
        <a class="chapter-nav-mini" href="/skripte/hrv/h18">
          <span class="chapter-nav-mini-code">H18</span>
          <span class="chapter-nav-mini-name">Versifikacija</span>
        </a>
      </div>
    </div>
  </div>


  <!-- ══ MODULE FOOTER (v3.6) ══ -->
  <footer class="mod-foot" role="contentinfo">
    <div class="foot-line"><b>Maturiraj.hr</b> · Hrvatski · H12 Moderna — hrvatska književnost</div>
    <div class="foot-line">Autorski sadržaj · Usklađeno s <a href="https://www.ncvvo.hr/ispitni-katalozi-za-drzavnu-maturu-2025-2026/" target="_blank" rel="noopener noreferrer">NCVVO</a> ispitnim katalogom · Ažurirano <time datetime="2026-04-18">travanj 2026.</time></div>
    <div class="foot-line foot-feedback">
      <span class="foot-fb-q">Imaš prijedlog ili si uočio grešku?</span>
      <button type="button" class="foot-fb-btn" onclick="openFeedbackModal()">📝 Prijavi →</button>
      <span class="foot-fb-or">ili e-mail</span>
      <a href="mailto:maturirajgreske@gmail.com" class="foot-fb-mail">maturirajgreske@gmail.com</a>
    </div>
  </footer>
</main>
</div><!-- /shell -->

<!-- TIP BAR -->
<div class="tip-bar" id="tip-bar">
  <span class="tip-bar-close" onclick="document.getElementById('tip-bar').classList.remove('show')">✕</span>
  <span id="tip-bar-txt">💡 <strong>Tip:</strong> Klikni na pjevanje za detalje i esejske signale.</span>
</div>

<!-- FROM BANNER -->
<div class="from-banner" id="from-banner">
  <span>📎</span><span id="from-txt">Dolaziš iz prethodnog poglavlja</span>
</div>






`;

const CHAPTER_CSS_DELTA = `:root{--red:#C04244;--bd-r:rgba(192,66,68,.22);--dim-r:rgba(192,66,68,.10);--green:#6B9464;--bd-g:rgba(107,148,100,.22);--dim-g:rgba(107,148,100,.09);--sienna:#A85940;--bd-s:rgba(168,89,64,.22);--dim-s:rgba(168,89,64,.10);--t1:#F5E6D3;--t2:#B09684;--t3:#6B5A4E;--t4:#3A2A22}
img,video,iframe,embed,object{max-width:100%;height:auto}
html{font-size:16px;scroll-behavior:smooth;overflow-x:hidden}
body{font-family:var(--font);background:var(--bg);color:var(--t1);min-height:100vh;-webkit-font-smoothing:antialiased;overflow-x:hidden;-webkit-tap-highlight-color:transparent}
body::before{content:'';position:fixed;inset:0;background-size:80px 80px;pointer-events:none;z-index:0}
body::after{content:'';position:fixed;inset:0;pointer-events:none;z-index:0}
.shell,.sidebar,.main{position:relative;z-index:1}
.main{flex:1;min-width:0;max-width:100%}
@keyframes layerIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
.sidebar{width:var(--sb);min-width:var(--sb);flex-shrink:0;background:var(--sur)}
@media(max-width:1200px){
  .sidebar{position:fixed;left:0;top:0;bottom:0;height:100%;z-index:180;transform:translateX(-100%);transition:transform .25s cubic-bezier(.4,0,.2,1);pointer-events:none}
  .sidebar.mobile-open{transform:translateX(0)!important;pointer-events:auto}
  .sb-hamburger{display:flex!important}
  .main{width:100%!important;max-width:100%!important;flex:1!important}
}
.sb-hamburger{display:none;position:fixed;top:6px;left:6px;z-index:300}
.sb-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:150;backdrop-filter:blur(3px)}
.sb-item.sb-d .sb-dot{background:var(--gold);opacity:.5}
.sb-item[data-star="2026"]::after{content:'★ 2026';position:absolute;right:10px;font-family:var(--mono);font-size:8px;font-weight:700;letter-spacing:.5px;color:var(--gold);background:var(--dim-go);border:1px solid var(--bd-go);border-radius:3px;padding:2px 5px}
.sb-item[data-star="2026"]{padding-right:58px;position:relative}
.content-wrap{max-width:860px;width:100%;margin:0 auto;padding:32px 44px 120px;animation:fadeUp .4s ease both;box-sizing:border-box}
.hero{margin-bottom:28px;padding-bottom:20px;border-bottom:1px solid var(--bdm);position:relative}
.hero::after{content:'';position:absolute;bottom:-1px;left:0;width:60px;height:2px;background:linear-gradient(90deg,var(--bronze),var(--gold));border-radius:1px}
.hero-chapter{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:var(--bronze);opacity:.8;margin-bottom:10px}
.hero-title{font-family:var(--display);font-size:28px;font-weight:700;color:var(--t1);letter-spacing:.3px;line-height:1.15;margin-bottom:10px}
.hero-sub{font-family:var(--serif);font-size:15px;color:var(--t2);line-height:1.65;margin-bottom:18px}
.hero-sub strong{color:var(--t1)}
.hero-chips{display:flex;gap:8px;flex-wrap:wrap;margin-top:4px}
.hchip{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;padding:4px 10px;border-radius:20px;display:inline-flex;align-items:center;gap:4px}
.hchip.br{background:var(--dim-br);color:var(--bronze-l);border:1px solid var(--bd-br)}
.hchip.go{background:var(--dim-go);color:var(--gold);border:1px solid var(--bd-go)}
.hchip.te{background:var(--dim-t);color:var(--teal);border:1px solid var(--bd-t)}
.hchip.re{background:var(--dim-r);color:var(--red);border:1px solid var(--bd-r)}
.hchip.gr{background:var(--dim-g);color:var(--green);border:1px solid var(--bd-g)}
.hchip.pa{background:var(--dim-pa);color:var(--parchment);border:1px solid var(--bd-pa)}
/* ══ COUNTDOWN ══ */
.countdown{font-family:var(--mono);font-size:10px;letter-spacing:1px;color:var(--t3);padding:7px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);display:inline-flex;align-items:center;gap:8px;margin-bottom:20px}
.countdown strong{color:var(--bronze);font-size:13px}
.tabs{display:flex;gap:0;margin-bottom:20px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);padding:3px;width:100%;max-width:100%;overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch;-ms-overflow-style:none}
.tab{padding:7px 16px;font-size:11px;font-weight:600;color:var(--t2);cursor:pointer;border-radius:5px;transition:all .18s;white-space:nowrap;font-family:var(--mono);position:relative;z-index:1;background:transparent;border:none;line-height:normal;min-height:44px}
.tab.on{background:linear-gradient(135deg,var(--bronze-d),var(--bronze),var(--gold));color:#0F0605;font-weight:700;box-shadow:0 2px 18px rgba(220,50,47,.35),inset 0 1px 0 rgba(255,255,255,.1)}
.tab-lock{font-family:var(--mono);font-size:8px;font-weight:700;letter-spacing:.5px;margin-left:5px;background:var(--dim-go);color:var(--gold);border:1px solid var(--bd-go);border-radius:3px;padding:1px 5px}
.tab-done{display:none !important}
/* ══ TIP BAR ══ */
.tip-bar{position:fixed;bottom:16px;right:16px;background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r3);padding:10px 14px;font-family:var(--mono);font-size:10px;color:var(--t2);max-width:260px;box-shadow:0 4px 20px rgba(0,0,0,.4);z-index:190;display:none;animation:fadeUp .3s ease;line-height:1.5}
.tip-bar.show{display:block}
.tip-bar-close{float:right;cursor:pointer;color:var(--t3);margin-left:8px;font-size:12px}
.tip-bar strong{color:var(--gold)}
/* ══ DISCERE BANNER ══ */
.discere-banner{background:linear-gradient(135deg,rgba(220,50,47,.12),rgba(232,201,122,.08));border:1px solid var(--bd-br);border-radius:var(--r3);padding:14px 18px;margin:20px 0;display:flex;align-items:center;gap:14px;cursor:pointer;transition:all .18s}
.discere-banner:hover{border-color:var(--bdl);background:linear-gradient(135deg,rgba(220,50,47,.18),rgba(232,201,122,.12))}
.discere-ico{font-size:28px;flex-shrink:0}
.discere-txt{flex:1}
.discere-ttl{font-family:var(--display);font-size:13px;font-weight:700;color:var(--bronze-l);margin-bottom:3px}
.discere-sub{font-family:var(--serif);font-size:12.5px;color:var(--t3);line-height:1.4}
.discere-arrow{color:var(--bronze);font-size:18px;flex-shrink:0}
/* ══ SCORE HISTORY ══ */
.score-hist{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r3);padding:14px 18px;margin:16px 0}
.score-hist-lbl{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--t3);margin-bottom:10px}
.score-hist-rows{display:flex;flex-direction:column;gap:6px}
.score-hist-row{display:flex;align-items:center;gap:10px;font-family:var(--mono);font-size:11px}
.score-hist-bar{flex:1;height:6px;background:var(--bd);border-radius:3px;overflow:hidden}
.score-hist-fill{height:100%;background:linear-gradient(90deg,var(--bronze),var(--gold));border-radius:3px;transition:width .5s ease}
.score-hist-val{color:var(--gold);min-width:36px;text-align:right}
.score-hist-date{color:var(--t3);font-size:9px;min-width:48px}
/* ══ FROM BANNER ══ */
.from-banner{background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r2);padding:8px 14px;margin-bottom:18px;font-family:var(--mono);font-size:10px;color:var(--gold);display:none}
.from-banner.show{display:flex;align-items:center;gap:8px}
/* ══ LAYERS ══ */
.layer{display:none!important;scroll-margin-top:50px}
.layer.on{display:block!important;animation:layerIn .28s cubic-bezier(.4,0,.2,1) both}
/* ══ PILLS / TAGS ══ */
.tags{display:flex;gap:7px;flex-wrap:wrap;margin-bottom:22px}
.pill{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;padding:4px 10px;border-radius:20px;display:inline-flex;align-items:center}
.p-br{background:var(--dim-br);color:var(--bronze-l);border:1px solid var(--bd-br)}
.p-go{background:var(--dim-go);color:var(--gold);border:1px solid var(--bd-go)}
.p-r{background:var(--dim-r);color:var(--red);border:1px solid var(--bd-r)}
.p-t{background:var(--dim-t);color:var(--teal);border:1px solid var(--bd-t)}
.p-g{background:var(--dim-g);color:var(--green);border:1px solid var(--bd-g)}
.p-pa{background:var(--dim-pa);color:var(--parchment);border:1px solid var(--bd-pa)}
/* ══ FEATURED QUOTE ══ */
.fq{background:var(--ele);border-left:3px solid var(--bronze);border-radius:0 var(--r3) var(--r3) 0;padding:18px 22px;margin:22px 0;position:relative}
.fq::before{content:'\\275D';position:absolute;top:8px;right:14px;font-size:32px;color:var(--bronze);opacity:.15;font-family:var(--serif);line-height:1}
.fq-text{font-family:var(--serif);font-size:16px;font-style:italic;color:var(--t1);line-height:1.7;margin-bottom:8px}
.fq-source{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:.5px}
.fq-source span{color:var(--gold)}
/* ══ BOX SYSTEM ══ */
.box-key{background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r3);padding:16px 18px;margin:18px 0}
.box-key-lbl{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--gold);margin-bottom:10px}
.box-int{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r3);padding:16px 18px;margin:18px 0}
.box-int-lbl{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--bronze-l);margin-bottom:10px}
.box-warn{background:rgba(192,66,68,.07);border:1px solid var(--bd-r);border-radius:var(--r3);padding:14px 18px;margin:16px 0}
.box-warn-lbl{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--red);margin-bottom:8px}
.box-signal{background:rgba(107,142,127,.07);border:1px solid var(--bd-t);border-radius:var(--r3);padding:14px 18px;margin:16px 0}
.box-signal-lbl{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--teal);margin-bottom:8px}
.box-signal-txt,.box-int-txt,.box-key-txt,.box-warn-txt,.bw-txt{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.65}
.box-signal-txt strong,.box-int-txt strong,.box-key-txt strong,.bw-txt strong{color:var(--t1)}
.box-signal-txt em,.box-int-txt em,.bw-txt em{color:var(--teal);font-style:italic}
/* ══ SECTION HEADER ══ */
.sec-hdr{display:flex;align-items:center;gap:12px;margin:32px 0 16px}
.sec-line{flex:1;height:1px;background:var(--bd)}
.sec-badge{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3);white-space:nowrap}
.tbl{width:100%;border-collapse:collapse;font-size:13px;margin:16px 0}
.tbl th{background:var(--ele);color:var(--t3);font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:8px 12px;border:1px solid var(--bd);text-align:left}
.tbl td{padding:9px 12px;border:1px solid var(--bd);color:var(--t2);vertical-align:top;line-height:1.5}
.tbl tr:hover td{background:var(--hov);color:var(--t1)}
.tbl td strong{color:var(--t1)}
.tbl td em{color:var(--gold);font-style:italic}
.tbl-wrap{overflow-x:auto;margin:16px 0;border-radius:var(--r2)}
/* ══ SCENE CARDS (pjevanja) ══ */
.scene-list{display:flex;flex-direction:column;gap:12px;margin:18px 0}
.scene-card{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r3);overflow:hidden;cursor:pointer;transition:border-color .18s}
.scene-card:hover{border-color:var(--bdl)}
.scene-card.open{border-color:var(--bd-br)}
.scene-hdr{display:flex;align-items:center;gap:12px;padding:12px 16px}
.scene-num{font-family:var(--display);font-size:11px;font-weight:700;color:var(--bronze);min-width:28px}
.scene-ttl{font-family:var(--serif);font-size:14px;color:var(--t1);font-weight:600;flex:1}
.scene-tag{font-family:var(--mono);font-size:9px;font-weight:700;padding:2px 8px;border-radius:3px;background:var(--dim-br);color:var(--bronze-l);border:1px solid var(--bd-br)}
.scene-arr{color:var(--t3);font-size:12px;transition:transform .2s}
.scene-card.open .scene-arr{transform:rotate(90deg)}
.scene-body{display:none;padding:0 16px 14px;border-top:1px solid var(--bd)}
.scene-card.open .scene-body{display:block;animation:diagFade .25s ease}
.scene-quote{font-family:var(--serif);font-size:14px;font-style:italic;color:var(--gold);background:var(--dim-go);border-left:2px solid var(--bd-go);padding:10px 14px;margin:12px 0;border-radius:0 var(--r2) var(--r2) 0}
.scene-why{font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.6;margin:10px 0}
.scene-why b{color:var(--t1)}
.scene-meta{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}
.scene-chip{font-family:var(--mono);font-size:9px;font-weight:700;padding:2px 8px;border-radius:3px}
/* ══ QUICK NAV ══ */
.qnav{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px;margin:20px 0}
.qnav-btn{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r3);padding:12px 14px;text-align:left;cursor:pointer;transition:all .15s;display:flex;flex-direction:column;gap:4px}
.qnav-btn:hover{border-color:var(--bdl);background:var(--hov);color:var(--t1)}
.qnav-btn{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:.5px;color:var(--bronze-l)}
.qnav-btn span{font-family:var(--font);font-size:11px;font-weight:400;color:var(--t3);letter-spacing:0}
/* ══ AUTHOR CARD ══ */
.ac{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r4);padding:20px;margin:18px 0}
.ac-head{display:flex;align-items:flex-start;gap:16px;margin-bottom:14px}
.ac-avatar{width:52px;height:52px;border-radius:var(--r3);background:linear-gradient(135deg,var(--bronze-d),var(--bronze),var(--gold));display:flex;align-items:center;justify-content:center;font-family:var(--display);font-size:20px;color:#0F0605;font-weight:700;flex-shrink:0}
.ac-info{flex:1}
.ac-name{font-family:var(--display);font-size:16px;font-weight:700;color:var(--t1);margin-bottom:4px}
.ac-dates{font-family:var(--mono);font-size:10px;color:var(--bronze);letter-spacing:1px}
.ac-role{font-size:12px;color:var(--t3);margin-top:2px}
.ac-body{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.65}
.ac-body strong{color:var(--t1)}
.ac-tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}
/* ══ DIAG ══ */
.diag{background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:20px 0}
.diag-intro,.diag-quiz,.diag-result{display:none;padding:22px 26px;animation:diagFade .35s ease}
.diag-intro-title{font-family:var(--display);font-size:16px;font-weight:700;color:var(--t1);margin-bottom:8px}
.diag-intro-desc{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.6;margin-bottom:16px}
.diag-q-num{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:1px;margin-bottom:10px}
.diag-q-text{font-family:var(--serif);font-size:15px;color:var(--t1);line-height:1.6;margin-bottom:16px}
.diag-opts{display:flex;flex-direction:column;gap:8px}
.diag-opt{background:var(--card);border:1px solid var(--bd);border-radius:var(--r2);padding:10px 14px;font-size:13px;color:var(--t2);cursor:pointer;transition:all .15s;font-family:var(--serif)}
.diag-opt:hover{border-color:var(--bdl);color:var(--t1);background:var(--hov)}
.diag-opt.correct{background:var(--dim-g);border-color:var(--bd-g);color:var(--green)}
.diag-opt.wrong{background:var(--dim-r);border-color:var(--bd-r);color:var(--red)}
.diag-prog{height:3px;background:var(--bd);margin-bottom:18px}
.diag-prog-fill{height:100%;background:linear-gradient(90deg,var(--bronze),var(--gold));transition:width .4s ease;border-radius:1px}
/* ══ ALAT (esej) ══ */
.alat-tabs{display:flex;gap:6px;margin-bottom:16px;flex-wrap:wrap}
.alat-tab{font-family:var(--mono);font-size:10px;font-weight:700;padding:5px 12px;border-radius:var(--r1);background:var(--ele);border:1px solid var(--bd);color:var(--t3);cursor:pointer;transition:all .15s;letter-spacing:.5px}
.alat-tab.on{background:var(--dim-go);border-color:var(--bd-go);color:var(--gold)}
.alat-pane{display:none}.alat-pane.on{display:block;animation:layerIn .2s ease}
.alat-card{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r3);padding:16px 18px;margin:10px 0}
.alat-card h4{font-family:var(--display);font-size:12px;font-weight:700;color:var(--bronze-l);margin-bottom:10px;letter-spacing:.5px}
.alat-card p{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.65}
.alat-card p strong{color:var(--t1)}
.alat-card p em{color:var(--gold);font-style:italic}
.alat-teza{background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r2);padding:12px 16px;margin:8px 0;font-family:var(--serif);font-size:14px;color:var(--t1);font-style:italic;cursor:pointer;transition:all .15s;position:relative}
.alat-teza:hover{border-color:var(--gold)}
.alat-teza::after{content:'📋';position:absolute;right:10px;top:50%;transform:translateY(-50%);font-size:12px;opacity:.5}
.alat-teza.copied::after{content:'✓';color:var(--green);opacity:1}
.wc-area{width:100%;background:var(--inp);border:1px solid var(--bd);border-radius:var(--r2);padding:12px;color:var(--t1);font-family:var(--serif);font-size:14px;resize:vertical;min-height:120px;line-height:1.6}
.wc-area:focus{outline:none;border-color:var(--bdl)}
.wc-meta{display:flex;justify-content:space-between;align-items:center;margin-top:8px;font-family:var(--mono);font-size:10px;color:var(--t3)}
.wc-count{color:var(--gold)}
/* ══ CITATNIK ══ */
.cit-grid{display:flex;flex-direction:column;gap:10px;margin:18px 0}
.cit-card{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r3);padding:14px 18px;transition:border-color .15s}
.cit-card:hover{border-color:var(--bdl)}
.cit-text{font-family:var(--serif);font-size:15px;font-style:italic;color:var(--t1);line-height:1.65;margin-bottom:8px}
.cit-meta{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px}
.cit-src{font-family:var(--mono);font-size:9.5px;color:var(--t3)}
.cit-tags{display:flex;gap:5px;flex-wrap:wrap}
.cit-tag{font-family:var(--mono);font-size:8.5px;font-weight:700;padding:2px 6px;border-radius:3px}
.cit-star{cursor:pointer;font-size:14px;color:var(--t3);transition:color .15s}
.cit-star.starred{color:var(--gold)}
.cit-filter{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px}
.cit-fbt{font-family:var(--mono);font-size:9.5px;font-weight:700;padding:4px 10px;border-radius:var(--r1);background:var(--ele);border:1px solid var(--bd);color:var(--t3);cursor:pointer;transition:all .15s}
.cit-fbt.on{background:var(--dim-br);border-color:var(--bd-br);color:var(--bronze-l)}
/* ══ POJMOVNIK ══ */
.poj-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:10px;margin:18px 0}
.poj-card{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s}
.poj-card:hover{border-color:var(--bdl);background:var(--hov)}
.poj-front{display:flex;justify-content:space-between;align-items:flex-start;gap:8px}
.poj-term{font-family:var(--display);font-size:13px;font-weight:700;color:var(--bronze-l);margin-bottom:6px}
.poj-cat{font-family:var(--mono);font-size:8.5px;font-weight:700;padding:2px 6px;border-radius:3px}
.poj-def{font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.55;display:none}
.poj-card.open .poj-def{display:block;margin-top:8px;padding-top:8px;border-top:1px solid var(--bd);animation:diagFade .2s ease}
.poj-ex{font-family:var(--serif);font-size:12px;color:var(--teal);font-style:italic;margin-top:6px}
/* ══ FLASHCARD ══ */
.fc-wrap{perspective:1000px;margin:20px 0}
.fc-inner{width:100%;height:200px;transform-style:preserve-3d;transition:transform .5s cubic-bezier(.4,0,.2,1);cursor:pointer;position:relative}
.fc-inner.flipped{transform:rotateY(180deg)}
.fc-front,.fc-back{position:absolute;inset:0;backface-visibility:hidden;border-radius:var(--r4);display:flex;flex-direction:column;justify-content:center;align-items:center;padding:24px;text-align:center}
.fc-front{background:var(--ele);border:1px solid var(--bdm)}
.fc-back{background:var(--dim-go);border:1px solid var(--bd-go);transform:rotateY(180deg)}
.fc-label{font-family:var(--mono);font-size:9px;letter-spacing:2px;text-transform:uppercase;color:var(--t3);margin-bottom:12px}
.fc-term{font-family:var(--display);font-size:20px;font-weight:700;color:var(--t1);line-height:1.3}
.fc-def{font-family:var(--serif);font-size:15px;color:var(--t1);line-height:1.6}
.fc-cat{font-family:var(--mono);font-size:9px;color:var(--gold);margin-top:8px}
.fc-nav{display:flex;justify-content:space-between;align-items:center;margin-top:14px}
.fc-btn{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);padding:7px 16px;font-size:12px;font-family:var(--mono);font-weight:700;cursor:pointer;color:var(--t2);transition:all .15s}
.fc-btn:hover{border-color:var(--bdl);color:var(--t1)}
.fc-btn:disabled{opacity:.3;cursor:not-allowed}
.fc-counter{font-family:var(--mono);font-size:11px;color:var(--t3)}
.fc-cat-label{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--bronze);margin-bottom:14px}
.mg-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:16px 0}
.mg-col{display:flex;flex-direction:column;gap:8px}
.mg-item{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);padding:10px 14px;font-family:var(--serif);font-size:13px;color:var(--t2);cursor:pointer;transition:all .15s;text-align:center;min-height:44px;display:flex;align-items:center;justify-content:center;line-height:1.4}
.mg-item:hover:not(.matched):not(.wrong){border-color:var(--bdl);color:var(--t1);background:var(--hov)}
.mg-item.selected{border-color:var(--bronze);background:var(--dim-br);color:var(--bronze-l)}
.mg-item.matched{border-color:var(--bd-g);background:var(--dim-g);color:var(--green);cursor:default}
.mg-item.wrong{border-color:var(--bd-r);background:var(--dim-r);color:var(--red);animation:shake .3s ease}
@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}
.mg-status{font-family:var(--mono);font-size:11px;color:var(--t3);margin-bottom:12px}
/* ══ KVIZ ══ */
.qz-wrap{padding:4px 0}
.qz-start{text-align:center;padding:32px 20px}
.qz-start-ico{font-size:40px;margin-bottom:12px}
.qz-start h3{font-family:var(--display);font-size:18px;color:var(--t1);margin-bottom:8px}
.qz-start p{font-family:var(--serif);font-size:14px;color:var(--t2);margin-bottom:20px;line-height:1.6}
.qz-prog{height:4px;background:var(--bd);border-radius:2px;margin-bottom:20px}
.qz-prog-fill{height:100%;background:linear-gradient(90deg,var(--bronze),var(--gold));border-radius:2px;transition:width .4s ease}
.qz-num{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:1px;margin-bottom:10px}
.qz-q{font-family:var(--serif);font-size:16px;color:var(--t1);line-height:1.65;margin-bottom:18px;font-weight:600}
.qz-opts{display:flex;flex-direction:column;gap:9px;margin-bottom:16px}
.qz-opt{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);padding:11px 16px;font-family:var(--serif);font-size:14px;color:var(--t2);cursor:pointer;transition:all .15s;text-align:left}
.qz-opt:hover:not(:disabled){border-color:var(--bdl);color:var(--t1);background:var(--hov)}
.qz-opt.correct{border-color:var(--bd-g);background:var(--dim-g);color:var(--green);cursor:default}
.qz-opt.wrong{border-color:var(--bd-r);background:var(--dim-r);color:var(--red);cursor:default}
.qz-expl{background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r2);padding:12px 16px;font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.6;margin-top:12px}
.qz-expl strong{color:var(--gold)}
.qz-next{display:none}
.qz-result{text-align:center;padding:28px 20px}
.qz-result-ico{font-size:48px;margin-bottom:12px}
.qz-result h3{font-family:var(--display);font-size:22px;color:var(--t1);margin-bottom:8px}
.qz-result-grade{font-family:var(--mono);font-size:28px;font-weight:700;color:var(--gold);margin:10px 0}
.qz-result p{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.6;margin-bottom:18px}
.cp-list{display:flex;flex-direction:column;gap:8px;margin:18px 0}
.cp-item{display:flex;align-items:flex-start;gap:12px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);padding:12px 16px;cursor:pointer;transition:all .15s}
.cp-item:hover{border-color:var(--bdl)}
.cp-item.done{border-color:var(--bd-g);background:var(--dim-g)}
.cp-cb{width:20px;height:20px;border:2px solid var(--bd);border-radius:4px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:12px;transition:all .15s;margin-top:1px}
.cp-item.done .cp-cb{background:var(--green);border-color:var(--green);color:#0F0605}
.cp-txt{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.5}
.cp-item.done .cp-txt{color:var(--t1)}
.cp-prog{margin-top:18px}
.cp-prog-label{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:.5px;margin-bottom:6px;display:flex;justify-content:space-between}
.cp-prog-track{height:6px;background:var(--bd);border-radius:3px;overflow:hidden}
.cp-prog-bar{height:100%;background:linear-gradient(90deg,var(--bronze),var(--gold));border-radius:3px;transition:width .5s cubic-bezier(.4,0,.2,1)}
.cp-final{text-align:center;padding:28px 20px;background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r4);margin:20px 0;display:none}
.cp-final.show{display:block;animation:fadeUp .4s ease}
.cp-final-ico{font-size:44px;margin-bottom:10px}
.cp-final-title{font-family:var(--display);font-size:20px;color:var(--gold);margin-bottom:8px}
.cp-final-msg{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.65;margin-bottom:18px}
/* ══ AUTH BOX ══ */
.auth-box{background:rgba(220,50,47,.05);border:1px solid var(--bd-br);border-radius:var(--r3);padding:14px 18px;margin:18px 0}
.auth-ttl{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--bronze-l);margin-bottom:8px}
.auth-txt{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.65}
.auth-txt em{color:var(--bronze-l)}
/* ══ REVEAL LOCK ══ */
.reveal-lock{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));border:none;border-radius:var(--r2);padding:10px 20px;font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.5px;color:#0F0605;cursor:pointer;transition:all .18s;display:inline-flex;align-items:center;gap:8px}
.reveal-lock:hover{opacity:.85;transform:translateY(-1px)}
.reveal-lock-btn{background:linear-gradient(135deg,var(--bronze-d),var(--bronze),var(--gold));border:none;border-radius:var(--r2);padding:11px 22px;font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.5px;color:#0F0605;cursor:pointer;transition:all .18s}
.reveal-lock-btn:hover{opacity:.85;transform:translateY(-1px)}
.fcb{background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r2);padding:9px 18px;font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.5px;color:var(--t2);cursor:pointer;transition:all .15s}
.fcb:hover{border-color:var(--bdl);color:var(--t1)}
.fcb.primary{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));border-color:transparent;color:#0F0605}
.fcb.primary:hover{opacity:.85}
/* ══ MISC ══ */
.nb{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:.5px;cursor:pointer;color:var(--bronze-l);text-decoration:underline;text-underline-offset:3px}
.nb:hover{color:var(--gold)}
p{font-family:var(--serif);font-size:14.5px;color:var(--t2);line-height:1.7;margin-bottom:12px}
p strong{color:var(--t1)}
p em{color:var(--gold);font-style:italic}
h3{font-family:var(--display);font-size:16px;font-weight:700;color:var(--t1);margin:20px 0 10px;letter-spacing:.3px}
h4{font-family:var(--display);font-size:13px;font-weight:700;color:var(--bronze-l);margin:16px 0 8px;letter-spacing:.5px}
ul,ol{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.7;padding-left:20px;margin-bottom:12px}
ul li,ol li{margin-bottom:4px}
ul li strong,ol li strong{color:var(--t1)}
.mid{display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap}
.sc{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r4);padding:18px 20px;margin:16px 0}
.sc-name{font-family:var(--display);font-size:13px;font-weight:700;color:var(--bronze-l);margin-bottom:6px}
.sc-desc{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.6}
.sc-desc b{color:var(--t1)}
.sc-desc em{color:var(--teal);font-style:italic}
.sc-kod{font-family:var(--mono);font-size:10px;color:var(--t3);margin-top:6px}
/* ══ SC-GRID (icon grid za brzi pregled) ══ */
.sc-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0}
.sc-ico{margin-bottom:10px;display:inline-block}
/* ══ FC-SCENE (H11 flashcard flip scene) ══ */
.fc-scene{width:100%;max-width:100%;perspective:1000px;cursor:pointer;height:220px}
.fc-scene .fc-inner{width:100%;height:100%;position:relative;transform-style:preserve-3d;transition:transform .45s cubic-bezier(.4,0,.2,1)}
.fc-scene.flipped .fc-inner{transform:rotateY(180deg)}
.fc-scene .fc-front,.fc-scene .fc-back{position:absolute;inset:0;backface-visibility:hidden;border-radius:var(--r4);padding:28px 32px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}
.fc-scene .fc-front{background:linear-gradient(135deg,var(--ele),var(--card));border:1px solid var(--bdm)}
.fc-scene .fc-back{background:linear-gradient(135deg,var(--card),var(--hov));border:1px solid var(--bd-go);transform:rotateY(180deg)}
.fc-hint{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:1px}
.fc-progress{display:flex;gap:4px;flex-wrap:wrap;justify-content:center;max-width:400px}
.fc-dot{width:8px;height:8px;border-radius:50%;background:var(--bd);transition:background .2s}
.fc-dot.seen{background:var(--bronze)}
.fc-dot.known{background:var(--green)}
.timeline{position:relative;padding:20px 0 10px 30px;margin:18px 0}
.timeline::before{content:'';position:absolute;left:8px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,var(--bronze) 0%,var(--gold) 50%,var(--parchment) 100%);border-radius:1px}
.tl-event{position:relative;padding:10px 14px 14px 20px;margin-bottom:8px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);transition:border-color .15s}
.tl-event:hover{border-color:var(--bdl)}
.tl-event::before{content:'';position:absolute;left:-30px;top:16px;width:14px;height:14px;border-radius:50%;background:var(--bg);border:2px solid var(--bronze);box-shadow:0 0 8px rgba(220,50,47,.4)}
.tl-event.milestone::before{background:var(--gold);border-color:var(--gold);box-shadow:0 0 12px var(--gold)}
.tl-year{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;color:var(--bronze);margin-bottom:3px}
.tl-event.milestone .tl-year{color:var(--gold)}
.tl-title{font-family:var(--serif);font-size:14px;font-weight:600;color:var(--t1);margin-bottom:3px}
.tl-desc{font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.5}
.tl-desc em{color:var(--gold);font-style:italic}
/* ══ KEYBOARD HINT ══ */
.kbd{display:inline-block;padding:1px 6px;font-family:var(--mono);font-size:10px;font-weight:700;background:var(--card);border:1px solid var(--bdm);border-radius:3px;color:var(--t2);box-shadow:0 1px 0 var(--bg);margin:0 2px}
.kbd-hint{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:.5px;margin-top:8px;text-align:center}
/* ══ READ PROGRESS BAR + BTT ══ */
.read-progress{position:fixed;top:0;left:0;right:0;height:3px;background:transparent;z-index:400;pointer-events:none}
.read-progress-bar{height:100%;background:linear-gradient(90deg,var(--bronze-d),var(--bronze),var(--gold));width:0%;transition:width .15s ease;border-radius:0 2px 2px 0}
.btt{position:fixed;bottom:24px;right:24px;z-index:100;width:40px;height:40px;background:var(--sur);border:1px solid var(--bdm);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;color:var(--t2);transition:all .2s;opacity:0;pointer-events:none;font-family:var(--mono)}
.btt.show{opacity:1;pointer-events:auto}
.btt:hover{color:var(--bronze);border-color:var(--bronze)}
/* ══ NAV-ROW (tab bottom navigation) ══ */
.nb-btn{display:inline-flex;align-items:center;gap:6px;font-family:var(--mono);font-size:11px;color:var(--t2);cursor:pointer;padding:9px 14px;border:1px solid var(--bdm);border-radius:var(--r2);background:var(--ele);transition:all .15s;text-decoration:none}
.nb-btn:hover{color:var(--t1);border-color:var(--bronze);background:var(--hov)}
.nb-btn.primary{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));border-color:transparent;color:#0F0605;font-weight:700}
.nb-btn.primary:hover{opacity:.85}
.nb-btn.off{opacity:.3;cursor:not-allowed;pointer-events:none}
/* ══ AUTHOR-CARD EXTENDED ══ */
.author-card{border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:20px 0;background:var(--sur);transition:border-color .2s}
.ac-header{padding:18px 22px 14px;background:linear-gradient(135deg,var(--ele),var(--card));border-bottom:1px solid var(--bdm);display:flex;align-items:flex-start;gap:16px}
.ac-monogram{width:52px;height:52px;border-radius:var(--r3);background:linear-gradient(135deg,var(--bronze-d),var(--bronze));display:flex;align-items:center;justify-content:center;font-family:var(--display);font-size:22px;font-weight:700;color:var(--gold);flex-shrink:0;box-shadow:0 4px 20px rgba(220,50,47,.3)}
.ac-meta{flex:1;min-width:0}
.ac-name{font-family:var(--display);font-size:18px;font-weight:700;color:var(--t1);margin-bottom:4px;letter-spacing:.3px}
.ac-dates{font-family:var(--mono);font-size:10px;color:var(--bronze);letter-spacing:1px}
.ac-body{padding:18px 22px}
.ac-body p{font-family:var(--serif);font-size:14.5px;color:var(--t2);line-height:1.65;margin-bottom:12px}
.ac-body strong{color:var(--t1)}.ac-body em{color:var(--gold);font-style:italic}
.ac-works{margin-top:14px;padding-top:14px;border-top:1px solid var(--bd)}
.ac-works-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);margin-bottom:10px}
.ac-work-item{display:flex;gap:12px;padding:10px 0;border-bottom:1px solid var(--bd)}
.ac-work-item:last-child{border-bottom:none;padding-bottom:0}
.ac-badge{font-size:18px;flex-shrink:0;margin-top:1px}
.ac-work-title{font-family:var(--display);font-size:12px;font-weight:700;color:var(--gold);margin-bottom:3px;letter-spacing:.5px}
.ac-work-meta{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;margin-bottom:5px}
.ac-work-desc{font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.5}
.ac-work-desc strong{color:var(--t1)}
/* ══ WC-WRAP (H11 esej writer) ══ */
.wc-wrap{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r4);overflow:hidden;margin:16px 0}
.wc-header{padding:14px 18px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
.wc-lbl{font-family:var(--display);font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--bronze-l)}
.wc-stats{display:flex;gap:16px;flex-wrap:wrap}
.wc-stat{text-align:center}
.wc-stat-num{font-family:var(--display);font-size:18px;font-weight:700;color:var(--t1);display:block}
.wc-stat-lbl{font-family:var(--mono);font-size:8.5px;color:var(--t3);letter-spacing:1px;text-transform:uppercase}
.wc-stat.ok .wc-stat-num{color:var(--green)}
.wc-stat.critical .wc-stat-num{color:var(--red)}
.wc-body{padding:14px 18px}
.wc-ta{width:100%;min-height:200px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);color:var(--t1);font-family:var(--serif);font-size:14px;padding:12px;resize:vertical;line-height:1.65;box-sizing:border-box}
.wc-ta:focus{outline:none;border-color:var(--bronze)}
.wc-prog{height:5px;background:var(--bd);border-radius:3px;overflow:hidden;margin-top:12px}
.wc-prog-bar{height:100%;background:linear-gradient(90deg,var(--bronze-d),var(--bronze),var(--gold));border-radius:3px;transition:width .4s ease}
.wc-prog.pass .wc-prog-bar{background:linear-gradient(90deg,var(--green),var(--teal))}
.wc-prog-lbl{font-family:var(--mono);font-size:9px;color:var(--t3);margin-top:6px;text-align:right}
.wc-btn{padding:8px 16px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;border-radius:var(--r2);cursor:pointer;border:1px solid var(--bdm);background:var(--ele);color:var(--t2);transition:all .15s}
.wc-btn:hover{color:var(--t1);border-color:var(--bronze)}
/* ══ QZ-SCORE (large) + QZ-WRONG ══ */
.qz-score-big{font-family:var(--display);font-size:68px;font-weight:700;background:linear-gradient(135deg,var(--bronze),var(--gold));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1;margin-bottom:8px}
.qz-grade{font-family:var(--display);font-size:18px;color:var(--t1);letter-spacing:1.5px;margin-bottom:6px}
.qz-msg{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.5;margin-bottom:20px}
.qz-wrong-item{padding:10px 14px;border-bottom:1px solid var(--bd);margin-top:4px}
.qz-wrong-q{font-family:var(--serif);font-size:13px;color:var(--t2);margin-bottom:4px}
.qz-wrong-a{font-family:var(--mono);font-size:10px;color:var(--green)}
/* ══ CP-GRID (H11 style) ══ */
.cp-grid{display:flex;flex-direction:column;gap:8px;margin:18px 0 24px}
.cp-box{width:24px;height:24px;border-radius:6px;border:2px solid var(--bdl);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;transition:all .15s}
.cp-item.done .cp-box{background:var(--green);border-color:var(--green);color:#0F0605}
.cp-hint{font-family:var(--mono);font-size:10px;color:var(--t3);margin-left:auto;text-transform:uppercase;letter-spacing:.5px;white-space:nowrap;padding:2px 6px;background:var(--ele);border:1px solid var(--bd);border-radius:3px}
.cp-actions{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:16px}
/* ══ BW-BOX (rich box-warn with icon + title) ══ */
.bw-ico{font-size:22px;flex-shrink:0}
.bw-body{flex:1;min-width:0}
.bw-title{font-family:var(--display);font-size:8.5px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--red);margin-bottom:6px}
.bw-txt{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.6}
.bw-txt strong{color:var(--t1)}
.bw-txt em{color:var(--red);font-style:italic}
/* ══ AUTH-LINKS ══ */
.auth-links{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
.auth-link{display:inline-block;font-family:var(--mono);font-size:10.5px;color:var(--teal);text-decoration:none;padding:4px 10px;border:1px solid var(--bd-t);border-radius:var(--r1);background:var(--ele);transition:all .15s}
/* ══ DIAG-BTN ══ */
.diag-btn{padding:10px 18px;font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;border-radius:var(--r2);cursor:pointer;border:1px solid var(--bdm);background:var(--ele);color:var(--t2);transition:all .2s}
/* ══ DIAG-REC ══ */
.diag-rec{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.6;padding:12px 14px;background:var(--bg);border-left:2px solid var(--bronze);border-radius:0 var(--r2) var(--r2) 0;margin-bottom:14px}
.diag-res-msg{font-family:var(--display);font-size:20px;font-weight:700;color:var(--gold);margin-bottom:10px}
/* ══ CP SUMMARY ══ */
.cp-summary{background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r3);padding:16px 18px;margin-top:20px;display:flex;align-items:center;gap:16px}
.cp-sum-pct{font-family:var(--display);font-size:28px;font-weight:700;color:var(--gold);min-width:60px}
.cp-sum-txt{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.5}
.cp-sum-txt strong{color:var(--t1)}
/* ══ PRINT ══ */
@media print{
  body{background:white!important;color:black!important}
  body::before,body::after{display:none!important}
  .sidebar,.tabs,.sb-hamburger,.tip-bar,.discere-banner,.reveal-lock-btn,.fcb{display:none!important}
  .main{width:100%!important;max-width:100%!important;padding:0!important}
  .content-wrap{max-width:100%!important;padding:10px!important}
  .layer{display:block!important;page-break-after:always}
  .box-key,.box-int,.box-warn,.box-signal,.sc,.fq,.ac{border:1px solid #666!important;background:#f5f5f5!important;color:black!important;break-inside:avoid}
  .hero-title,.hero-chapter,h3,h4,.sec-badge,.tl-title,.pojm-term{color:black!important}
  .tbl td,.tbl th{border-color:#888!important;color:black!important}
  .featured-quote{background:#faf6ec!important;border-color:#d4b98c!important;color:black!important;break-inside:avoid}
  .scene-card{border:1px solid #888!important;background:white!important}
  .scene-card .scene-body{display:block!important}
  .pojm-card .pojm-back{display:block!important}
  .pojm-card .pojm-front{display:none!important}
  a{color:black!important;text-decoration:none!important}
  .qnav-btn,.countdown,.tip-bar,.diag{display:none!important}
}
/* ══ FEATURED-QUOTE (H11 pattern) ══ */
.featured-quote{display:flex;gap:14px;padding:20px 22px;background:linear-gradient(135deg,rgba(212,185,140,.04),rgba(220,50,47,.02));border:1px solid var(--bdm);border-left:3px solid var(--parchment);border-radius:var(--r3);margin:14px 0;position:relative;word-break:break-word;overflow:hidden;transition:border-color .2s}
.featured-quote:hover{border-color:var(--bd-pa);box-shadow:0 2px 12px rgba(212,185,140,.06)}
.fq-mark{font-family:var(--display);font-size:52px;color:var(--parchment);opacity:.3;line-height:1;flex-shrink:0;margin-top:-8px}
.fq-body{flex:1;min-width:0}
.fq-text{font-family:var(--serif);font-size:16px;font-style:italic;color:var(--t1);line-height:1.6;margin-bottom:8px}
.fq-meta{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:.5px}
.fq-copy{background:none;border:1px solid var(--bd);border-radius:var(--r1);color:var(--t3);font-size:12px;padding:4px 8px;cursor:pointer;font-family:var(--mono);transition:all .15s;flex-shrink:0;align-self:flex-start}
.fq-copy:hover{color:var(--gold);border-color:var(--bd-go);background:var(--dim-go)}
.fq-copy.copied{color:var(--green);border-color:var(--bd-g);background:var(--dim-g)}
.fq-napamet{position:absolute;top:-1px;right:40px;font-family:var(--mono);font-size:8px;font-weight:700;letter-spacing:1px;color:var(--gold);background:var(--dim-go);border:1px solid var(--bd-go);border-radius:0 0 4px 4px;padding:2px 7px}
/* ══ POJM-CARD (H11 pattern — grid + flip) ══ */
.pojm-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px;margin:16px 0}
.pojm-card{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:border-color .15s}
.pojm-card:hover,.pojm-card.flip{border-color:var(--bdm)}
.pojm-card.flip{background:var(--card)}
.pojm-front,.pojm-back{transition:all .25s ease}
.pojm-card.flip .pojm-front{display:none}
.pojm-card:not(.flip) .pojm-back{display:none}
.pojm-term{font-family:var(--display);font-size:13px;font-weight:700;color:var(--gold);margin-bottom:4px;letter-spacing:.3px}
.pojm-hint{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:1px;text-transform:uppercase}
.pojm-def{font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.55}
/* ══ RESPONSIVE ══ */
@media(max-width:900px){
  .content-wrap{padding:24px 20px 100px}
  .poj-grid{grid-template-columns:1fr}
  .mg-grid{grid-template-columns:1fr}
  .mg-col{flex-direction:row;flex-wrap:wrap}
  .mg-item{flex:1;min-width:120px}
}
@media(max-width:600px){
  .content-wrap{padding:16px 14px 90px}
  .qnav{grid-template-columns:1fr 1fr}
  .bc-tab,.bc-tab-sep{display:none}
  .tab{font-size:8px;padding:5px 6px;letter-spacing:0;min-height:38px;flex-shrink:0;white-space:nowrap}
  .layer.on{padding-top:52px}
  .fc-inner{height:170px}
  .poj-grid{grid-template-columns:1fr}
  .tbl-wrap{font-size:12px}
  .diag-intro,.diag-quiz,.diag-result{padding:16px}
  .pojm-grid{grid-template-columns:1fr!important}
  .pojm-filter{padding:5px 9px;font-size:8.5px;letter-spacing:.5px}
  #cit-filters .pojm-filter{padding:5px 9px;font-size:8.5px}
  .featured-quote{padding:14px 12px;gap:10px;margin:10px 0}
  .fq-mark{font-size:36px;margin-top:-2px;flex-shrink:0}
  .fq-text{font-size:14px;line-height:1.5}
  .fq-copy{display:none}
}
#diag0[data-state="dismissed"]{display:none}
/* ══ H10 SIDEBAR UPGRADES ══ */
.sb-era-d{color:var(--gold,#E8C97A);border-top:1px solid var(--bd-go,rgba(232,201,122,.2));margin-top:8px;padding-top:14px}
.sb-d-meta{font-family:var(--serif);font-size:10px;font-style:italic;color:var(--t3);padding:0 14px 8px;line-height:1.4;letter-spacing:.1px}
/* ═══════════════════════════════════
   CROSS-CHAPTER NAVIGATION
════════════════════════════════════ */
.chapter-nav-wrap{margin:48px auto 32px;max-width:920px;padding:0 20px}
.chapter-nav-hdr{text-align:center;margin-bottom:24px}
.chapter-nav-title{font-family:var(--display);font-size:20px;font-weight:700;color:var(--t1);margin-bottom:6px}
.chapter-nav-sub{font-family:var(--serif);font-size:13px;color:var(--t3)}
.chapter-nav-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:28px}
.chapter-nav-card{display:flex;gap:14px;padding:16px 18px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r3);color:inherit;text-decoration:none;transition:all .25s ease}
.chapter-nav-card:hover{border-color:var(--gold);background:linear-gradient(135deg,var(--ele),rgba(233,180,70,.06));transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.25)}
.chapter-nav-prev{text-align:left}
.chapter-nav-next{text-align:right;flex-direction:row}
.chapter-nav-next .chapter-nav-meta{flex:1}
.chapter-nav-arrow{font-size:24px;line-height:1;color:var(--gold);flex-shrink:0}
.chapter-nav-meta{flex:1}
.chapter-nav-pill{display:inline-flex;padding:3px 8px;border:1px solid var(--bdm);border-radius:999px;font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;color:var(--t3);margin-bottom:8px}
.chapter-nav-pill-next{color:var(--gold);border-color:var(--bd-go);background:var(--dim-go)}
.chapter-nav-name{font-family:var(--display);font-size:15px;font-weight:700;color:var(--t1);margin-bottom:4px}
.chapter-nav-desc{font-family:var(--serif);font-size:12px;color:var(--t2);line-height:1.45}
.chapter-nav-related{padding:18px;background:rgba(255,255,255,.02);border:1px solid var(--bd);border-radius:var(--r3)}
.chapter-nav-related-ttl{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--t3);letter-spacing:1.5px;margin-bottom:12px}
.chapter-nav-related-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:8px}
.chapter-nav-mini{display:flex;align-items:center;gap:8px;padding:10px 12px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);color:inherit;text-decoration:none;transition:all .2s ease;font-size:12.5px}
.chapter-nav-mini:hover{border-color:var(--gold);background:var(--hov)}
.chapter-nav-mini-code{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--gold);background:rgba(233,180,70,.1);border-radius:4px;padding:2px 5px}
.chapter-nav-mini-name{font-family:var(--serif);color:var(--t2)}
@media(max-width:640px){
  .chapter-nav-grid{grid-template-columns:1fr}
  .chapter-nav-next{flex-direction:row}
}
/* TIER INDICATOR — Workspace badge */
.ws-tier-indicator{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 16px;margin-bottom:16px;border:1px solid var(--bdm);border-radius:var(--r3);background:var(--ele)}
.ws-tier-indicator.ws-tier-free{border-color:var(--bd-go);background:linear-gradient(135deg,rgba(233,180,70,.05),var(--ele))}
.ws-tier-indicator.ws-tier-free.ws-tier-full{background:linear-gradient(135deg,rgba(233,180,70,.08),var(--ele))}
.ws-tier-indicator.ws-tier-standard{border-color:rgba(74,144,217,.35);background:linear-gradient(135deg,rgba(74,144,217,.05),var(--ele))}
.ws-tier-indicator.ws-tier-pro{border-color:var(--bd-go);background:linear-gradient(135deg,rgba(233,180,70,.06),var(--ele))}
.ws-tier-indicator .ws-tier-icon{font-size:18px}
.ws-tier-indicator .ws-tier-text{font-family:var(--serif);font-size:13px;line-height:1.4;color:var(--t2)}
.ws-tier-indicator .ws-tier-text strong{color:var(--t1)}
.ws-tier-indicator .ws-tier-cta{padding:6px 12px;border-radius:8px;border:1px solid var(--bd-go);background:var(--dim-go);font-family:var(--mono);font-size:10px;font-weight:700;color:var(--gold);text-decoration:none}
.ws-tier-indicator .ws-tier-cta:hover{filter:brightness(1.08)}
@media(max-width:640px){
  .ws-tier-indicator{padding:10px 12px;gap:8px}
  .ws-tier-indicator .ws-tier-text{font-size:12px}
}
/* CHEAT-CARD (auto-injected) */
.cheat-card{background:linear-gradient(135deg,rgba(233,180,70,0.04),var(--card,#1a1010));border:1px solid var(--gold,#e9b446);border-radius:14px;padding:18px 22px}
.cheat-hdr{margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid var(--bdm,#2c1f1f)}
.cheat-eye{font-family:var(--mono,monospace);font-size:10px;font-weight:800;color:var(--gold,#e9b446);letter-spacing:1.2px;margin-bottom:4px}
.cheat-ttl{font-family:var(--serif,'Fraunces',serif);font-size:16px;font-weight:700;color:var(--t1,#f4ede5)}
.cheat-grid{display:grid;grid-template-columns:1fr;gap:12px}
.cheat-col-wide{grid-column:1/-1}
`;
const STYLES_CSS = SHARED_LIT_CSS + '\n' + CHAPTER_CSS_DELTA;
const SCRIPTS_JS = `/* ══ SUPABASE CONFIG ══ */
var SUPABASE_URL = 'https://your-project.supabase.co';
var SUPABASE_ANON_KEY = 'your-anon-key-here';

var CURRENT_CHAPTER = {
  subject: 'hrvatski',
  code: 'h12',
  title: 'Marulić i Judita'
};

function printCheatSheet(trigger){
  var card = trigger && trigger.closest ? trigger.closest('.cheat-card') : null;
  if(card){
    document.body.classList.add('print-cheat-targeted');
    card.classList.add('printing-cheat-sheet');
  }
  document.body.classList.add('print-cheat-only');
  setTimeout(function(){
    window.print();
    setTimeout(function(){
      document.body.classList.remove('print-cheat-only','print-cheat-targeted');
      if(card) card.classList.remove('printing-cheat-sheet');
    }, 500);
  }, 50);
  if(typeof track === 'function') track('cheat_sheet_print', {chapter: CURRENT_CHAPTER.code}, 'engagement');
}

if(typeof window !== 'undefined'){
  window.addEventListener('afterprint', function(){
    document.body.classList.remove('print-cheat-only','print-cheat-targeted');
    document.querySelectorAll('.printing-cheat-sheet').forEach(function(card){card.classList.remove('printing-cheat-sheet')});
  });
}

/* Character counter for feedback textarea */
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    var ta = document.getElementById('fb-message');
    var counter = document.getElementById('fb-char-count');
    if(ta && counter){
      ta.addEventListener('input', function(){
        counter.textContent = ta.value.length;
        counter.parentElement.classList.toggle('over', ta.value.length > 5000);
      });
    }
  });
})();

/* ══ FEEDBACK MODAL (v3.6.1) ══ */
function openFeedbackModal(){
  var bd = document.getElementById('fb-modal-backdrop');
  if(!bd) return;
  var form = document.getElementById('fb-form');
  if(form) form.reset();
  var defaultRadio = document.querySelector('input[name="fb-type"][value="content_error"]');
  if(defaultRadio) defaultRadio.checked = true;
  var msg = document.getElementById('fb-msg');
  if(msg){msg.className='modal-msg'; msg.textContent=''}
  var counter = document.getElementById('fb-char-count');
  if(counter) counter.textContent = '0';
  var btn = document.getElementById('fb-submit');
  if(btn){btn.disabled=false; btn.textContent='Pošalji →'}
  if(form) form.style.display = 'flex';
  bd.classList.add('show');
  setTimeout(function(){
    var ta = document.getElementById('fb-message');
    if(ta) ta.focus();
  }, 100);
  if(typeof track === 'function') track('feedback_modal_open', {chapter: CURRENT_CHAPTER.code}, 'engagement');
}

function closeFeedbackModal(){
  var bd = document.getElementById('fb-modal-backdrop');
  if(bd) bd.classList.remove('show');
}

function submitFeedback(ev){
  ev.preventDefault();
  var msgEl = document.getElementById('fb-message');
  var emailEl = document.getElementById('fb-email');
  var btn = document.getElementById('fb-submit');
  var fbMsg = document.getElementById('fb-msg');
  var typeEl = document.querySelector('input[name="fb-type"]:checked');

  var message = (msgEl && msgEl.value || '').trim();
  var email = (emailEl && emailEl.value || '').trim().toLowerCase();
  var feedbackType = (typeEl && typeEl.value) || 'general';

  if(message.length < 3){
    if(fbMsg){fbMsg.className='modal-msg show error'; fbMsg.textContent='✗ Poruka mora imati barem 3 znaka.'}
    return false;
  }
  if(message.length > 5000){
    if(fbMsg){fbMsg.className='modal-msg show error'; fbMsg.textContent='✗ Poruka ne smije biti dulja od 5000 znakova.'}
    return false;
  }
  if(email && !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email)){
    if(fbMsg){fbMsg.className='modal-msg show error'; fbMsg.textContent='✗ E-mail adresa nije valjana.'}
    return false;
  }

  btn.disabled = true;
  btn.textContent = 'Šaljem...';
  if(fbMsg) fbMsg.className = 'modal-msg';

  var payload = {
    p_message: message,
    p_feedback_type: feedbackType,
    p_email: email || null,
    p_subject: CURRENT_CHAPTER.subject,
    p_chapter_code: CURRENT_CHAPTER.code,
    p_tab_index: (function(){ try{ return JSON.parse(localStorage.getItem('mt.hrv.h12.tab') || '0') }catch(e){return 0} })(),
    p_url: window.location.href,
    p_viewport_width: window.innerWidth,
    p_viewport_height: window.innerHeight
  };

  if(SUPABASE_URL.indexOf('your-project') >= 0){
    setTimeout(function(){
      if(fbMsg){fbMsg.className='modal-msg show success'; fbMsg.textContent='✓ Hvala! Poruka primljena.'}
      var form = document.getElementById('fb-form');
      if(form) form.style.display = 'none';
      if(typeof track === 'function') track('feedback_submit', {type: feedbackType, offline: true}, 'engagement');
      setTimeout(closeFeedbackModal, 2400);
    }, 600);
    return false;
  }

  fetch(SUPABASE_URL + '/rest/v1/rpc/submit_feedback', {
    method: 'POST',
    headers: {
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then(function(r){ return r.json() }).then(function(res){
    if(res && res.success){
      if(fbMsg){fbMsg.className='modal-msg show success'; fbMsg.textContent='✓ '+(res.message || 'Hvala! Primili smo tvoju poruku.')}
      var form = document.getElementById('fb-form');
      if(form) form.style.display = 'none';
      if(typeof track === 'function') track('feedback_submit', {type: feedbackType, has_email: !!email}, 'engagement');
      setTimeout(closeFeedbackModal, 2400);
    } else {
      if(fbMsg){fbMsg.className='modal-msg show error'; fbMsg.textContent='✗ '+((res && res.message) || 'Nešto je pošlo krivo. Pokušaj ponovo ili pošalji e-mail direktno.')}
      btn.disabled = false;
      btn.textContent = 'Pošalji →';
    }
  }).catch(function(){
    if(fbMsg){fbMsg.className='modal-msg show error'; fbMsg.textContent='✗ Greška u mreži. Pošalji e-mail na maturirajgreske@gmail.com'}
    btn.disabled = false;
    btn.textContent = 'Pošalji →';
  });

  return false;
}
const CITATI=[
  {t:'„Ki hoće slišati čudesa Božja starim / neka posluša Judite kriposti harim"',s:'Judita, I. pjev. — invokacija',tags:['stih','domoljublje'],kat:'stih'},
  {t:'„Biše tada udova, ka živi u gradu, / po imenu Judita u lipu porodu"',s:'Judita, II. pjev. — uvod lika',tags:['judita'],kat:'judita'},
  {t:'„Gospode svemogi, ki si stvor nebesa, / pogledaj na tugu i plač naroda svoga"',s:'Judita, III. pjev. — Juditina molitva',tags:['vjera','judita'],kat:'vjera'},
  {t:'„Ovo vam glava je tiranina zla, / ka je hotila nas dat pod jaram zla"',s:'Judita, V. pjev. — objava pobjede',tags:['domoljublje','holofern'],kat:'domoljublje'},
  {t:'„Blagovsi, duše moja, Gospoda svemoga, / ki meni pomaga u trudu svakoga"',s:'Judita, VI. pjev. — zahvalnica',tags:['vjera'],kat:'vjera'},
  {t:'„Stvoren bih po misi, po sili nagojen / u vrime nemira, u vrime pobojen"',s:'Poslanica J. Balistrilića — Marulić o sebi',tags:['domoljublje'],kat:'domoljublje'},
  {t:'„I u tomzi času nožem mu odsica / s tila glavu, ka mu niz skalice stica"',s:'Judita, IV. pjev. — čin ubojstva',tags:['judita','holofern'],kat:'judita'},
  {t:'„Tko sili se ufa, a Boga zaboravi / oholastju zaglublja, smrt ga zadesnavi"',s:'Judita, VI. pjev. — moralna pouka',tags:['vjera','alegorija'],kat:'alegorija'},
  {t:'„Judita, po svemu slaveći Boga svoga, / pohodi putem svim sva mjesta od svoga"',s:'Judita, VI. pjev. — proslava',tags:['judita','domoljublje'],kat:'judita'},
  {t:'„Sva zemlja naša jest pod turskim sablama, / sad tište nas svud, tuc zbor s tima zlima"',s:'Marulić — antiturski apel (parafraz)',tags:['domoljublje','alegorija'],kat:'alegorija'},
  {t:'„Ona mu razbi glavu — ohologa vladara / koji nije znao da je Bog jak, a ne čovjek"',s:'Parafraz — Marulićev teološki argument',tags:['vjera','alegorija','holofern'],kat:'alegorija'},
  {t:'„Lipos joj je bila ka anđeoska slika / razuma i puti, duha i telika"',s:'Judita, II. pjev. — opis Juditine ljepote',tags:['judita'],kat:'judita'},
  {t:'„Ne uzda se Judita u svoju kripost samu / neg u Boga koji je svemoć i prav i vam"',s:'Parafraz — teološka premisa Judite',tags:['vjera','judita'],kat:'vjera'},
  {t:'„Holoferne, u veselju pijanome zaspa, / a Judita — u šatoru — mač digla ga raspa"',s:'Judita, IV. pjev. — parafraz',tags:['holofern','judita'],kat:'holofern'},
  {t:'„Dvanaest jih bješe od vrsnih vojvoda / što pratit ju smiše u slavnih pohoda"',s:'Judita — Holofernova pratnja (parafraz)',tags:['holofern'],kat:'holofern'},
  {t:'„Molim vas, bratjo i prijatelji moji, / da se s Turci smjelo borit ne bojte"',s:'Marulić — eksplicitni apel u VI. pjev. (parafraz)',tags:['domoljublje'],kat:'domoljublje'},
  {t:'„Koji hoće čist živit, mora se Bogu dat / ki ga bude branit, neće biti u blat"',s:'Judita — moralna sentencija (parafraz)',tags:['vjera'],kat:'vjera'},
  {t:'„Judita je ta mala Betulija obranila / ne mačem, ne kopljom, neg s Bogom ganila"',s:'Teološka interpretacija Judite (parafraz)',tags:['alegorija','vjera'],kat:'alegorija'},
  {t:'„Oholost je uzrok Holofernova pada — jer tko sebe vidi bogom, Bog ga vidi ništa"',s:'Moralna analiza lika (parafraz)',tags:['holofern','alegorija'],kat:'holofern'},
  {t:'„Stih dvanajest slogov, u dvostih vezan, / taj je zvuk Judite — hrv. ep sazvan"',s:'Opis forme Judite (suvremena analiza)',tags:['stih'],kat:'stih'},
  {t:'„Judita lijepa ne bježi od opasnosti — ona je koristi. Ljepota je oružje vjere."',s:'Analitička rečenica o liku (moderna interpetacija)',tags:['judita'],kat:'judita'},
  {t:'„Holofern zauzima pola poznata svita / a smrsku ga žena — to je srž Judita"',s:'Parafraz — dramska ironija epa',tags:['holofern','alegorija'],kat:'holofern'},
  {t:'„Judita moli, Judita mrazi oholost, Judita djeluje — i pobijedi. Trostruka formula hrv. humanizma."',s:'Suvremena analitička rečenica',tags:['judita','vjera'],kat:'judita'},
  {t:'„Betulija nije samo grad — to su sva hrv. mjesta koja čekaju spas u XVI. st."',s:'Alegorijska analiza Betulije',tags:['alegorija','domoljublje'],kat:'alegorija'},
  {t:'„Marulić je europski pisac: njegova latinska Evangelistarium tiskana je stotinjak puta diljem Europe."',s:'O Marulićevom europskom dosegu',tags:['domoljublje'],kat:'domoljublje'},
  {t:'„Pisati na hrvatskome u doba latinizma — to je politički čin. Marulić ga čini svjesno."',s:'Interpretacija Marulićevog jezičnog izbora',tags:['domoljublje','stih'],kat:'domoljublje'},
  {t:'„In medias res: Judita ne počinje Nabukodonosorovim djetinjstvom — počinje od trenutka krize."',s:'Analiza epske kompozicije',tags:['stih','ep'],kat:'stih'},
  {t:'„Ekfraza tijela Juditina je humanistički moment: Marulić proslavlja ljepotu kao Božji dar."',s:'O ekfrazi u Juditi',tags:['judita','stih'],kat:'stih'},
  {t:'„Dvanaesterac je stihovni kompromis: spaja tal. humanistički heksasillabo i hrv. usmenu tradiciju."',s:'Analiza dvanaesterca',tags:['stih'],kat:'stih'},
  {t:'„Molitva Judite (III. pjev.) nije liturgijska formula — ona je individualni dijalog s Bogom. To je humanistička inovacija."',s:'O Juditinoj molitvi',tags:['vjera','judita'],kat:'vjera'},
];

const POJMOVI=[
  {t:'Dvanaesterac',d:'Stih od 12 slogova s obvezatnom cezurom (pauzom) nakon 6. sloga (6+6). Tipičan za Marulićevu Juditu i hrv. renesansnu poeziju.',e:'„Ki hoće slišati | čudesa Božja starim"',kat:'stih'},
  {t:'Dvostih (distih)',d:'Strofa od dva stiha koja se rimuju međusobno (AA). Marulić organizira dvanaesterce u dvostruko rimovane dvostihove.',e:'Svaka dva stiha Judite čine rimovani par.',kat:'stih'},
  {t:'Cezura',d:'Obvezatna pauza unutar stiha na točno određenom mjestu. U dvanaestercu dolazi iza 6. sloga.',e:'„Ki hoće slišati | čudesa Božja starim" — | je cezura',kat:'stih'},
  {t:'Ep (spjev, poema)',d:'Dugi narativni poem koji opisuje junačka djela. Obilježja: invokacija, in medias res, digresije, katalozi, usporedbe.',e:'Judita je ep u 6 pjevanja.',kat:'ep'},
  {t:'In medias res',d:'Epska tehnika: početi pripovijedanje usred radnje, bez kronoloskog uvoda. Antička tehnika (Homer, Vergilije), preuzeta u Marulića.',e:'Judita počinje s Holofernovim pohodom, ne s Nabukodonosorovim djetinjstvom.',kat:'ep'},
  {t:'Invokacija',d:'Uvodni zaziv boga ili muze na početku epa. Kod Marulića invokacija je zaziv čitatelja i Boga (kršćansko preusmjeravanje antičke formule).',e:'„Ki hoće slišati čudesa Božja starim..."',kat:'ep'},
  {t:'Ekfraza (ekphrasis)',d:'Književni opis vizualnog ili tjelesnog u veliku detalju. U Juditi: opis Juditine ljepote u III. pjevanju.',e:'Detaljni opis Juditine odjeće, nakita i ljepote.',kat:'stil'},
  {t:'Alegorija',d:'Književna tehnika gdje likovi i događaji imaju dvojno značenje: doslovno i preneseno (simboličko). U Juditi: doslovna priča + politička alegorija.',e:'Judita = Hrvatska, Holofern = Turci, Betulija = hrv. gradovi.',kat:'aleg'},
  {t:'Simbol',d:'Konkretni predmet ili lik koji ima preneseno, apstraktno značenje. Razlika od alegorije: simbol je jednoznačniji.',e:'Holofernova glava = simbol poraza oholosti/neprijatelja.',kat:'aleg'},
  {t:'Personifikacija',d:'Pripisivanje ljudskih osobina apstraktnim pojmovima ili neljudskim bićima.',e:'„Smrt me čeka" — apstrakcija personificirana.',kat:'stil'},
  {t:'Antiturski apel',d:'Eksplicitni poziv hrv. čitatelju na otpor osmanskim osvajanjima. U Juditi je sadržan u VI. pjevanju.',e:'Marulić direktno govori čitatelju da brani Hrvatsku.',kat:'hum'},
  {t:'Humanizam',d:'Kulturni i intelektualni pokret 14.–16. st. koji se temelji na proučavanju antičkih grčkih i rimskih tekstova, slavljenju čovjeka i razuma.',e:'Marulić je humanist: piše ep po uzoru na Vergilija, ali s kršćanskim sadržajem.',kat:'hum'},
  {t:'Kršćanski humanizam',d:'Spoj humanizma i kršćanske vjere: čovjek je velik, ali samo uz Boga. Erazmo Roterdamski, Marulić. Razlika od sekularnog humanizma.',e:'Judita pobjeđuje ne vlastitom snagom, već uz Božju pomoć.',kat:'hum'},
  {t:'Renesansa',d:'Europski kulturni pokret 14.–17. st. Označava "preporod" antičke kulture. U hrv. književnosti: Marulić, Hektorović, Zoranić, Držić.',e:'Judita je prvi veliki hrv. renesansni ep.',kat:'hum'},
  {t:'Petrarkizam',d:'Književni pravac nastao pod Petrarcinim utjecajem. Tematika: ljubav, dostojanstvo, Laua, soneti. U Hrvata: Menčetić, Džore Držić.',e:'Marulić NIJE petrarkist — svjesno bira ep i religiju umjesto ljubavne lirike.',kat:'hum'},
  {t:'Antemurale Christianitatis',d:'Latinski: "predziđe kršćanstva". Politički i kulturni termin za Hrvatsku kao granicu kršćanske Europe prema osmanskom prodoru.',e:'Marulić piše u kontekstu ove samopredodžbe Hrvata.',kat:'hum'},
  {t:'Krbavska bitka (1493.)',d:'Katastrofalan poraz hrv. vojsk pred Turcima. Marulić piše Juditu 1501., samo 8 godina kasnije — neposredno je inspiriran tim porazom.',e:'Kontekst nastanka Judite — trauma Krbave.',kat:'hum'},
  {t:'Digresija',d:'Epska tehnika: odmicanje od glavne radnje za opis, razmišljanje ili moralnu pouku. Marulić koristi digresije u svakom pjevanju.',e:'Opis Holofernove vojske je digresija od glavne radnje.',kat:'ep'},
  {t:'Hybris (oholost)',d:'Grčki pojam za pretjeranu oholost i samopouzdanje. U grčkoj tragediji (i u Marulića) hybris vodi u propast.',e:'Holofernova oholost je uzrok njegova pada.',kat:'aleg'},
  {t:'Peripetija',d:'Dramatski preokret u radnji — moment kad se situacija mijenja iz loše u dobru (ili obrnuto).',e:'Judita s Holofernovom glavom — totalna promjena situacije za Betuliju.',kat:'ep'},
  {t:'Protagonistica (lik)',d:'Središnji lik naracije oko kojeg se gradi radnja. U Juditi je to Judita — udovica koja se suprotstavlja vojskovođi.',e:'Judita je protagonistica koji je i akcijani i moralni centar epa.',kat:'ep'},
  {t:'Antagonist (lik)',d:'Lik koji se suprotstavlja protagonisti. U Juditi: Holofern.',e:'Holofern je antagonist — fizički moćan, moralno slab.',kat:'ep'},
  {t:'Psihologizacija lika',d:'Prikazivanje unutarnjeg života lika — misli, osjećaja, sumnji. Humanistička inovacija u Marulića.',e:'Juditina molitva (III. pjev.) je psihologizacija — vidimo njezin unutarnji sukob.',kat:'hum'},
  {t:'Poslanica Balistrilića',d:'Pismo koje je Marulić uputio Jeronimu Balistrilića uz Juditu. Važno jer Marulić objašnjava alegorijsku namjenu teksta.',e:'Marulić sam opisuje zašto je napisao Juditu i što znače likovi.',kat:'hum'},
  {t:'Dvostruka rima',d:'Rima u paru — dva uzastopna stiha rimuju se međusobno (shema AA BB CC...). Korisiti se u Marulića.',e:'„Ki hoće slišati čudesa Božja starim / neka posluša Judite kriposti harim" — starim/harim',kat:'stih'},
  {t:'Biblijski predložak',d:'Izvor iz kojega Marulić preuzima fabulu Judite — Knjiga o Juditi iz Starog zavjeta (apokrifna u protestantizmu, kanonska u katolicizmu).',e:'Marulić ne izmišlja priču — preuzima je, ali dodaje alegoriju i hrv. kontekst.',kat:'ep'},
  {t:'Pjevanje (knjiga epa)',d:'Strukturna jedinica epa — dio koji je thematski ili narativno zaokružen. Judita ima 6 pjevanja.',e:'I. pjevanje: ekspozicija; IV. pjevanje: ubojstvo Holoferna.',kat:'ep'},
  {t:'Svrha (intentio auctoris)',d:'Autorova namjera — što je htio postići tekstom. U Juditi: domoljubni apel i moralna pouka uz vjeru.',e:'Marulić u poslanici Balistrilića eksplicitno navodi svrhu Judite.',kat:'hum'},
  {t:'Alegorijska razina',d:'Drugi sloj značenja teksta gdje se iza doslovne priče skriva politička, moralna ili religiozna poruka.',e:'Doslovna: Judita ubija Holoferna. Alegorijska: Hrvatska pobjeđuje Turke uz vjeru.',kat:'aleg'},
  {t:'Moralna razina',d:'Treći sloj Judite: vjera pobjeđuje silu, oholost vodi u propast, poniznost pred Bogom je krepost.',e:'VI. pjevanje: Marulić donosi moralnu pouku za čitatelja.',kat:'aleg'},
];

const KVIZ_Q=[
  {q:'Koja je godina nastanka Judite Marka Marulića?',o:['1453.','1493.','1501.','1521.'],t:2,e:'Judita je nastala 1501., a tiskana je 1521. u Veneciji. 1453. je pad Carigrada, 1493. Krbavska bitka.'},
  {q:'Koji je stih karakterističan za Juditu?',o:['Deseterac (4+6)','Dvanaesterac (6+6)','Osmerac (4+4)','Heksametar'],t:1,e:'Marulić koristi dvanaesterac — stih od 12 slogova s cezurom iza 6. sloga, organiziran u rimovane dvostihove.'},
  {q:'Što simbolizira Judita u alegorijskoj razini?',o:['Talijansku renesansu','Osmansko Carstvo','Hrvatsku / vjeru / kršćanstvo','Mletačku republiku'],t:2,e:'Judita alegorijski predstavlja Hrvatsku / hrv. narod / kršćanstvo — mala i slaba, ali pobjeđuje uz Bogu.'},
  {q:'Što simbolizira Holofern u alegoriji?',o:['Rimsko Carstvo','Turci / Osmanlije / bezbožništvo','Mletačka vlastela','Ugarska kruna'],t:1,e:'Holofern je alegorija za Turke / Osmanlije. Njegova oholost i pad = osmanski poraz u hrv. kontekstu.'},
  {q:'Koliko pjevanja ima Judita?',o:['4','5','6','7'],t:2,e:'Judita ima 6 pjevanja. Svako je thematski zaokruženo — od ekspozicije do trijumfa i moralnog epiloga.'},
  {q:'U kojemu se pjevanju Judita moli pred odlazak k Holofernu?',o:['I. pjevanje','II. pjevanje','III. pjevanje','IV. pjevanje'],t:2,e:'III. pjevanje: Judita se priprema, moli, ukrašava i odlazi u neprijateljev tabor. Molitva je psihologizacija lika.'},
  {q:'Što Marulić preuzima kao predložak za Juditu?',o:['Homerovu Ilijadu','Vergilijeva Eneidu','Bibliju (Stari zavjet — Knjiga o Juditi)','Petrarcin Kanconijer'],t:2,e:'Marulić adapatira biblijsku priču iz Knjige o Juditi (apokrifna knjiga Starog zavjeta, kanonska u katolicizmu).'},
  {q:'Što je "in medias res" kao epska tehnika?',o:['Početi od samog početka priče','Početi usred radnje, bez kronoloskog uvoda','Uvesti mitu na kraju priče','Koristiti digresije'],t:1,e:'In medias res znači "usred stvari" — ep počinje usred radnje. Judita počinje s Holofernivim pohodom, ne s Nabukodonosorovim djetinjstvom.'},
  {q:'Marulić je:',o:['Petrarkist koji piše ljubavnu liriku','Kršćanski humanist koji piše ep i moralnu prozu','Barokni dramatičar','Romantički pjesnik'],t:1,e:'Marulić je kršćanski humanist: prihvaća humanistički ep (antička forma), ali ga ispunjava kršćanskim i domoljubnim sadržajem.'},
  {q:'Što znači "Antemurale Christianitatis"?',o:['Latinsko ime za Juditu','Predziđe kršćanstva — termin za Hrvatsku kao granicu prema Osmanlijama','Naziv za epski stih','Vrsta alegorije'],t:1,e:'Antemurale Christianitatis = predziđe kršćanstva. Politički i kulturni termin kojim se Hrvatska opisivala kao štit kršćanske Europe.'},
  {q:'Koja je bitka inspirirala Marulića pri pisanju Judite?',o:['Bitka na Kosovu 1389.','Bitka na Mohačkom polju 1526.','Krbavska bitka 1493.','Bitka kod Hoćima 1621.'],t:2,e:'Krbavska bitka (1493.) — katastrofalan poraz hrv. vojske pred Turcima, 8 godina prije nastanka Judite (1501.).'},
  {q:'Komu je posvećena Judita?',o:['Papi Aleksandru VI.','Mletačkom duždu','Jeronimu Balistrilića, splitskom humanisti','Matiji Korvinu, ugarskom kralju'],t:2,e:'Judita je posvećena Jeronimu Balistrilića. U poslanici Balistrilića Marulić objašnjava alegoriju i domoljubni cilj teksta.'},
  {q:'Što je "ekfraza" u književnosti?',o:['Vrsta rime','Detaljan književni opis vizualnog objekta ili tijela','Moralna pouka na kraju epa','Invokacija muze'],t:1,e:'Ekfraza je detaljan opis — u Juditi to je opis Juditine ljepote u III. pjevanju. Humanistička tehnika iz antike.'},
  {q:'Što je "hybris" u kontekstu Holoferna?',o:['Vrsta stiha','Oholost koja vodi u propast','Molitva junaka','Saveznička vojska'],t:1,e:'Hybris (grč.) = pretjerana oholost. Holofernova oholost — proglašava se bogom — uzrok je njegova pada. Tipičan motiv iz antičke tragedije.'},
  {q:'U kojemu je gradu živio i radio Marulić?',o:['Dubrovnik','Zadar','Split','Šibenik'],t:2,e:'Marulić je živio u Splitu (1450.–1524.). Bio je splitski plemić i intelektualac koji je cijeli život proveo u Dalmaciji.'},
  {q:'Koja je razlika između Judite (1501.) i Osmana (1626.) Ivana Gundulića?',o:['Nema razlike — oboje su isti ep','Judita je u dvanaestercu, Osman u osmercu; Judita je renesansa, Osman barok','Osman je stariji od Judite','Judita koristi osmerac'],t:1,e:'Judita: dvanaesterac, renesansa, biblijski predložak. Osman: osmerac, barok, historijski predložak (bitka kod Hoćima). Oba su domoljubni epovi o kršćansko-turskom sukobu.'},
  {q:'Što se događa u IV. pjevanju Judite?',o:['Judita se moli','Betulija se predaje Turcima','Holofern organizira gozbu, opija se; Judita mu odsjeca glavu','Judita se vraća u Betuliju'],t:2,e:'IV. pjevanje je kulminacija: Holofernova gozba, Judita pleše, Holofern se opija i zaspi, Judita odsjeca mu glavu u dva udarca.'},
  {q:'Što petrarkizam nije karakteristika Marulićevog pisanja?',o:['Alegorija','Domoljublje','Ljubavna tematika u stihu','Kršćanski humanizam'],t:2,e:'Marulić NE piše ljubavnu liriku (petrarkizam). Svi ostali elementi (alegorija, domoljublje, kršćanski humanizam) prisutni su u Juditi.'},
  {q:'Što znači "dvostih" (distih)?',o:['Stih od dva sloga','Strofa od dva stiha koja se rimuju','Ep od dva pjevanja','Dvije vrste stiha u jednom djelu'],t:1,e:'Dvostih = par stihova koji se rimuju (AA). Marulić organizira dvanaesterce u rimovane dvostihove — to je osnovna strofa Judite.'},
  {q:'Zašto Judita nije na popisu esejskih djela 2025./2026.?',o:['Jer je previše kratka','Jer nije na listi esejskih djela za tu godinu (ali jest obvezatno štivo)','Jer nije hrvatska književnost','Jer je tiskana prekasno'],t:1,e:'Judita je obvezatno štivo za čitanje (Teorija i povijest književnosti), ali nije na popisu 6 esejskih djela za 2025./2026. Može se koristiti kao kontekst u eseju o Petrarci i drugima.'},
];

const DIAG0_Q=[
  {q:'Koji je stih Judite?',o:['Deseterac','Dvanaesterac','Osmerac','Heksametar'],t:1},
  {q:'Što simbolizira Holofern?',o:['Mletačku vlast','Turke/Osmanlije','Rimsko Carstvo','Ugarsku'],t:1},
  {q:'Koliko pjevanja ima Judita?',o:['4','5','6','8'],t:2},
  {q:'U kojoj je godini nastala Judita?',o:['1453.','1493.','1501.','1600.'],t:2},
  {q:'Što je "in medias res"?',o:['Kraj epa','Početi usred radnje','Molitva junaka','Invokacija'],t:1},
];

/* ═══════════════════════════════════
   TAB SWITCHER
═══════════════════════════════════ */
const TAB_NAMES=['Teorija','6 pjevanja','Esej alat','Citatnik','Pojmovnik','Drill','Kviz','Checkpoint'];
var h12DrillInited=false;
function applyDrillGate(){
  const lock=document.getElementById('h12-drill-lock');
  const body=document.getElementById('h12-drill-body');
  if(lock)lock.style.display='none';
  if(body)body.style.display='block';
  return true;
}
function sw(n){
  document.querySelectorAll('.tab').forEach((t,i)=>{
    t.classList.toggle('on',i===n);
    t.setAttribute('aria-selected',i===n);
  });
  document.querySelectorAll('.layer').forEach((l,i)=>l.classList.toggle('on',i===n));
  document.getElementById('bc-tab').textContent=TAB_NAMES[n];
  if(n===6)qzInit();
  if(n===5){
    if(!applyDrillGate()){
      showTip(5);
      window.scrollTo({top:0,behavior:'smooth'});
      closeSb();
      return;
    }
    if(!h12DrillInited){
      h12DrillInit();
      h12MatchInit();
      h12DrillInited=true;
    } else {
      h12DrillFcRender();
      var board=document.getElementById('mg-board');
      if(board && board.children.length===0){
        h12MatchInit();
      }
    }
  }
  window.scrollTo({top:0,behavior:'smooth'});
  closeSb();
}

/* ═══════════════════════════════════
  SIDEBAR
═══════════════════════════════════ */
function openSb(){
  document.getElementById('sidebar').classList.add('mobile-open');
  document.getElementById('overlay').classList.add('show');
}
function closeSb(){
  document.getElementById('sidebar').classList.remove('mobile-open');
  document.getElementById('overlay').classList.remove('show');
}

/* ═══════════════════════════════════
   COUNTDOWN
═══════════════════════════════════ */
(function(){
  // Datum ispita Hrv. jezik — ljetni rok 2025./2026.
  // Dan 1 (test + sažetak): 15. lipnja 2026.
  // Dan 2 (esej):           16. lipnja 2026.
  // Izvor: NCVVO kalendar 2025./2026.
  const now=new Date();
  const todayLocal=new Date(now.getFullYear(),now.getMonth(),now.getDate());
  const dan1=new Date(2026,5,15); // 15. lipnja 2026. — lokalno (month je 0-indexed!)
  const dan2=new Date(2026,5,16); // 16. lipnja 2026.
  const target=todayLocal<=dan1?dan1:dan2; // Prikaži dan 1, pa dan 2
  const diff=Math.round((target-todayLocal)/(1000*60*60*24));
  const el=document.getElementById('cd-days');
  const cw=el?el.closest('.countdown'):null;
  if(!el)return;
  if(diff>0){
    el.textContent=diff;
    if(cw&&diff<=30)cw.style.borderColor='var(--bronze-d)';
    if(cw&&diff<=14)cw.style.borderColor='var(--bronze)';
    if(cw&&diff<=7){cw.style.borderColor='var(--red)';cw.style.color='var(--red)';}
  } else if(diff===0){
    el.textContent='DANAS!';
    if(cw)cw.style.borderColor='var(--gold)';
  } else if(Math.round((dan2-todayLocal)/(1000*60*60*24))===0){
    el.textContent='Esej DANAS!';
    if(cw)cw.style.borderColor='var(--gold)';
  } else {
    el.textContent='prošlo';
  }
})();

/* ═══════════════════════════════════
   SCENES (pjevanja)
═══════════════════════════════════ */
function togScene(card){
  const wasOpen=card.classList.contains('open');
  document.querySelectorAll('.scene-card').forEach(c=>c.classList.remove('open'));
  if(!wasOpen)card.classList.add('open');
}

/* ═══════════════════════════════════
   DIAG0
═══════════════════════════════════ */
let d0idx=0,d0score=0;
function diag0Skip(){
  document.getElementById('diag0').dataset.state='dismissed';
}
function diag0Start(){
  d0idx=0;d0score=0;
  document.getElementById('diag0').dataset.state='quiz';
  d0Show();
}
function d0Show(){
  if(d0idx>=DIAG0_Q.length){diag0End();return;}
  const q=DIAG0_Q[d0idx];
  document.getElementById('d0fill').style.width=((d0idx/DIAG0_Q.length)*100)+'%';
  document.getElementById('d0num').textContent=\`Pitanje \${d0idx+1} / \${DIAG0_Q.length}\`;
  document.getElementById('d0text').textContent=q.q;
  const opts=document.getElementById('d0opts');
  opts.innerHTML='';
  q.o.forEach((o,i)=>{
    const btn=document.createElement('button');
    btn.className='diag-opt';btn.textContent=o;
    btn.onclick=()=>{
      opts.querySelectorAll('.diag-opt').forEach(b=>b.onclick=null);
      if(i===q.t){btn.classList.add('correct');d0score++;}
      else{btn.classList.add('wrong');opts.querySelectorAll('.diag-opt')[q.t].classList.add('correct');}
      setTimeout(()=>{d0idx++;d0Show();},900);
    };
    opts.appendChild(btn);
  });
}
function diag0End(){
  document.getElementById('diag0').dataset.state='result';
  const pct=Math.round(d0score/DIAG0_Q.length*100);
  let msg='', btnTxt='', btnTab=1;
  if(pct>=80){
    msg='<strong>Odlično!</strong> Osnove H12 imaš savladane. Preporučujem Esej alat — tamo su gotove teze za eseje o Petrarci i Calderónu.';
    btnTxt='✍ Esej alat →'; btnTab=2;
  } else if(pct>=60){
    msg='<strong>Dobro!</strong> Nekoliko rupa postoji — provjeri Judita: 6 pjevanja za detalje o svakom pjevanju i alegorijskoj shemi.';
    btnTxt='📖 Judita: 6 pjevanja →'; btnTab=1;
  } else {
    msg='<strong>Kreni od osnova.</strong> Preporučujem: Teorija (Sec 01-07) + Pojmovnik (Tab 4). Alegorijska shema i dvanaesterac su ključni — zapis ih napamet.';
    btnTxt='📖 Teorija →'; btnTab=0;
  }
  document.getElementById('d0rtitle').textContent=\`\${d0score} / \${DIAG0_Q.length} — \${pct}%\`;
  document.getElementById('d0rdesc').innerHTML=msg;
  const btn=document.getElementById('d0rbtn');
  if(btn){btn.textContent=btnTxt;btn.onclick=()=>sw(btnTab);}
}
function diag0Reset(){document.getElementById('diag0').dataset.state='intro';}

/* ═══════════════════════════════════
   CITATNIK
═══════════════════════════════════ */
const CAT_COLORS={alegorija:'p-go',vjera:'p-t',judita:'p-br',holofern:'p-r',domoljublje:'p-g',stih:'p-pa'};
let citStars={};
try{citStars=JSON.parse(localStorage.getItem('mt.hrv.h12.cit_stars')||'{}')}catch(e){}
let citActive='sve';

function renderCitati(){
  const grid=document.getElementById('cit-grid');
  if(!grid)return;
  const show=citActive==='sve'?CITATI:CITATI.filter(c=>c.tags.includes(citActive));
  grid.innerHTML=show.map((c,i)=>{
    const idx=CITATI.indexOf(c);
    const starred=citStars[idx]?'starred':'';
    const tagsHTML=c.tags.map(tg=>\`<span class="cit-tag \${CAT_COLORS[tg]||'p-pa'}">\${tg}</span>\`).join('');
    return \`<div class="cit-card">
      <div class="cit-text">\${c.t}</div>
      <div class="cit-meta">
        <span class="cit-src">\${c.s}</span>
        <div class="cit-tags">\${tagsHTML}<span class="cit-star \${starred}" onclick="togStar(\${idx},this)">★</span></div>
      </div>
    </div>\`;
  }).join('');
}
function togStar(i,el){
  citStars[i]=!citStars[i];
  el.classList.toggle('starred',!!citStars[i]);
  try{localStorage.setItem('mt.hrv.h12.cit_stars',JSON.stringify(citStars))}catch(e){}
}
function citFilter(btn,kat){
  document.querySelectorAll('.cit-fbt').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  citActive=kat;
  renderCitati();
}
renderCitati();

/* ═══════════════════════════════════
   POJMOVNIK
═══════════════════════════════════ */
let pojActive='sve';
function renderPojmovi(){
  const grid=document.getElementById('poj-grid');
  if(!grid)return;
  const show=pojActive==='sve'?POJMOVI:POJMOVI.filter(p=>p.kat===pojActive);
  const catCls={stih:'p-pa',stil:'p-t',ep:'p-br',hum:'p-go',aleg:'p-r'};
  grid.innerHTML=show.map(p=>\`
    <div class="poj-card" onclick="this.classList.toggle('open')">
      <div class="poj-front">
        <div class="poj-term">\${p.t}</div>
        <span class="poj-cat \${catCls[p.kat]||'p-pa'}">\${p.kat}</span>
      </div>
      <div class="poj-def">\${p.d}\${p.e?\`<div class="poj-ex">Primjer: \${p.e}</div>\`:''}</div>
    </div>
  \`).join('');
}
function pojFilter(btn,kat){
  document.querySelectorAll('#poj-filter .cit-fbt').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');pojActive=kat;renderPojmovi();
}
renderPojmovi();

/* ═══════════════════════════════════
   ESEJ ALAT
═══════════════════════════════════ */
function alTab(btn,pane){
  document.querySelectorAll('.alat-tab').forEach(b=>b.classList.remove('on'));
  document.querySelectorAll('.alat-pane').forEach(p=>p.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById(pane).classList.add('on');
}
function cpyTeza(el){
  navigator.clipboard.writeText(el.textContent.trim()).catch(()=>{});
  el.classList.add('copied');
  setTimeout(()=>el.classList.remove('copied'),1500);
}

/* Scanner */
function scannerUpdate(){
  const ta=document.getElementById('scanner-in');
  if(!ta)return;
  const txt=ta.value;
  const words=txt.trim()?txt.trim().split(/\\s+/).length:0;
  const lines=txt.split('\\n').filter(function(l){return l.trim().length>0;}).length;
  // Estimate syllables (Croatian: count vowels a,e,i,o,u)
  const syl=words>0?Math.round(txt.replace(/[^aeiouAEIOUčšžđćČŠŽĐĆ]/g,'').length/Math.max(words,1)*10)/10:0;
  const we=document.getElementById('sc-words');if(we)we.querySelector('.wc-stat-num').textContent=words;
  const le=document.getElementById('sc-lines');if(le)le.querySelector('.wc-stat-num').textContent=lines;
  const se=document.getElementById('sc-syl');if(se)se.querySelector('.wc-stat-num').textContent=syl||'—';
  try{localStorage.setItem('mt.hrv.h12.wc_text',txt);}catch(e){}
}
(function(){
  const ta=document.getElementById('scanner-in');
  if(!ta)return;
  try{const sv=localStorage.getItem('mt.hrv.h12.wc_text');if(sv){ta.value=sv;scannerUpdate();}}catch(e){}
})();

function scanJudita(){
  const txt=document.getElementById('scanner-in').value.trim();
  const out=document.getElementById('scanner-out');
  if(!txt||txt.length<10){out.innerHTML='<div class="box-warn"><div class="box-warn-lbl">⚠ Prazan unos</div><div class="box-warn-txt">Unesite barem jedan stih Judite za analizu.</div></div>';return;}
  
  let findings=[];
  if(/\\d{1,2}\\s*\\+\\s*\\d{1,2}|šest|cezur/i.test(txt))findings.push('🎵 <strong>Metrička napomena:</strong> Tekst sadrži reference na broj slogova ili cezuru — provjeri je li stih dvanaesterac (6+6).');
  if(/judita|udova|lijepa|lipos/i.test(txt))findings.push('👤 <strong>Judita kao lik:</strong> Ovaj ulomak govori o Juditi. Korisni argumenti: psihologizacija, individualnost, alegorijska dimenzija (= Hrvatska).');
  if(/holofern|vojvoda|neprijatel|tursk/i.test(txt))findings.push('⚔️ <strong>Holofern / neprijatelj:</strong> Ovaj ulomak govori o antagonistu. Argumenti: oholost (hybris), alegorija Turaka, moć bez vjere.');
  if(/moli|Gospod|Bog|Isus|vjera|Krist/i.test(txt))findings.push('✝️ <strong>Vjera / molitva:</strong> Religijska dimenzija. Marulić = kršćanski humanist. Bog kao jedini izvor prave moći.');
  if(/Betulija|grad|zid|opsad/i.test(txt))findings.push('🏰 <strong>Betulija:</strong> Alegorija hrv. gradova pod opsadom. Veza: konkretna geografska situacija Dalmacije 1501.');
  if(/slav|pobijed|radost|trijumf/i.test(txt))findings.push('🏆 <strong>Trijumf:</strong> Ovaj ulomak vjerojatno je iz V. ili VI. pjevanja — pobjeda i moralna pouka.');
  if(/invokacij|Ki hoće|slišati|čudesa/i.test(txt))findings.push('📖 <strong>Invokacija:</strong> Početak epa — zaziv čitatelja. Epska konvencija (usp. Homer, Vergilije).');
  if(findings.length===0)findings.push('ℹ️ <strong>Opća napomena:</strong> Ulomak analiziran. Za detalje: provjeri pjevanje iz kojeg potječe (koristite Tab 1 — 6 pjevanja), identificiraj likove i stilska sredstva.');
  
  out.innerHTML=\`<div class="box-int">
    <div class="box-int-lbl">🔍 Analiza ulomka</div>
    \${findings.map(f=>\`<div class="box-signal-txt" style="margin-bottom:8px">• \${f}</div>\`).join('')}
    <div style="margin-top:12px;font-family:var(--mono);font-size:10px;color:var(--t3)">Napomena: automatska analiza. Za dublje tumačenje koristite Tab 2 (Esej alat) i Tab 3 (Citatnik).</div>
  </div>\`;
}

/* ═══════════════════════════════════
   KVIZ
═══════════════════════════════════ */
let qzIdx=0,qzScore=0,qzAnswered=[];
function qzInit(){
  const w=document.getElementById('qz-wrap');
  if(!w||w.dataset.init==='1')return;
  w.dataset.init='1';
  qzRender();
}
function qzRender(){
  const w=document.getElementById('qz-wrap');
  if(!w)return;
  w.innerHTML=\`<div class="qz-wrap" id="qz-inner"></div>\`;
  qzIdx=0;qzScore=0;
  const el=document.getElementById('qz-inner');
  el.innerHTML=\`<div class="qz-start">
    <div class="qz-start-ico">🧠</div>
    <h3>20 pitanja · H12 Judita</h3>
    <p>Pitanja pokrivaju cijelo poglavlje H12: Marulić, Judita, alegorija, dvanaesterac, 6 pjevanja, kontekst. Na kraju dobivaš ocjenu i objašnjenja.</p>
    <button class="fcb primary" onclick="qzStart()">Započni kviz →</button>
  </div>\`;
}
function qzStart(){
  qzIdx=0;qzScore=0;qzAnswered=[];
  const el=document.getElementById('qz-inner')||document.getElementById('qz-wrap');
  qzShowQ(el);
}
function qzRestart(){qzStart();}
function qzShowQ(el){
  if(qzIdx>=KVIZ_Q.length){qzEnd(el);return;}
  const q=KVIZ_Q[qzIdx];
  const pct=Math.round(((qzIdx+1)/KVIZ_Q.length)*100);
  const answered=qzAnswered[qzIdx]!==undefined;
  el.innerHTML=\`
    <div class="qz-prog"><div class="qz-prog-fill" style="width:\${pct}%"></div></div>
    <div class="qz-num">Pitanje \${qzIdx+1} / \${KVIZ_Q.length} · Točno: \${qzScore}</div>
    <div class="qz-q">\${q.q}</div>
    <div class="qz-opts">\${q.o.map((o,i)=>\`<button class="qz-opt" onclick="qzAns(this,\${i})">\${o}</button>\`).join('')}</div>
    <div class="qz-expl" id="qz-expl" style="display:none"></div>
    <div style="display:flex;gap:8px;justify-content:space-between;align-items:center;margin-top:12px">
      <button class="fcb" onclick="qzPrev()" \${qzIdx===0?'disabled':''}>← Prethodno</button>
      <button class="fcb qz-next" id="qz-next" onclick="qzNext()" \${answered?'':'disabled'}>\${qzIdx===KVIZ_Q.length-1?'Rezultat →':'Sljedeće →'}</button>
    </div>
  \`;
  if(answered){
    const ans=qzAnswered[qzIdx];
    const opts=document.querySelectorAll('.qz-opt');
    opts.forEach((b,j)=>{
      if(j===q.t)b.classList.add('correct');
      if(j===ans&&ans!==q.t)b.classList.add('wrong');
      b.disabled=true;
    });
    const ok=ans===q.t;
    const expl=document.getElementById('qz-expl');
    expl.style.display='block';
    expl.innerHTML=\`<strong>\${ok?'✓ Točno!':'✗ Netočno.'}</strong> \${q.e}\`;
    const nextBtn=document.getElementById('qz-next');
    if(nextBtn)nextBtn.disabled=false;
  }
}
function qzAns(btn,i){
  if(qzAnswered[qzIdx]!==undefined)return;
  const opts=document.querySelectorAll('.qz-opt');
  opts.forEach(b=>b.disabled=true);
  const q=KVIZ_Q[qzIdx];
  const ok=(i===q.t);
  if(ok){btn.classList.add('correct');qzScore++;}
  else{btn.classList.add('wrong');opts[q.t].classList.add('correct');}
  qzAnswered[qzIdx]=i;
  const expl=document.getElementById('qz-expl');
  expl.style.display='block';
  expl.innerHTML=\`<strong>\${ok?'✓ Točno!':'✗ Netočno.'}</strong> \${q.e}\`;
  const nextBtn=document.getElementById('qz-next');
  if(nextBtn)nextBtn.disabled=false;
}
function qzNext(){
  if(qzAnswered[qzIdx]===undefined)return;
  qzIdx++;
  const el=document.getElementById('qz-inner')||document.getElementById('qz-wrap');
  qzShowQ(el);
}
function qzPrev(){
  if(qzIdx===0)return;
  qzIdx--;
  const el=document.getElementById('qz-inner')||document.getElementById('qz-wrap');
  qzShowQ(el);
}
function qzEnd(el){
  const pct=Math.round(qzScore/KVIZ_Q.length*100);
  let grade,msg,ico;
  if(pct>=90){grade='ODLIČAN';msg='Spreman/na si za maturu iz H12.';ico='🏆';}
  else if(pct>=75){grade='VRLO DOBAR';msg='Solidno znanje. Provjeri pogreške u Pojmovniku.';ico='💪';}
  else if(pct>=60){grade='DOBAR';msg='Ponoviti: 6 pjevanja i alegorijska shema.';ico='📚';}
  else if(pct>=45){grade='DOVOLJAN';msg='Osnove su tu — trebaš više vježbe.';ico='🔁';}
  else{grade='NEDOVOLJAN';msg='Vrati se na Teoriju i ponovi korak po korak.';ico='🎯';}

  let wrongHtml='';
  if(qzAnswered&&qzAnswered.length){
    const wrong=qzAnswered
      .map((ans,idx)=>({ans,idx}))
      .filter(x=>x.ans!==undefined&&x.ans!==KVIZ_Q[x.idx].t);
    if(wrong.length>0){
      wrongHtml=\`<div style="margin-top:24px;text-align:left">
        <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--t3);text-transform:uppercase;margin-bottom:12px">Promašena pitanja (\${wrong.length})</div>
        \${wrong.map(x=>\`<div class="qz-wrong-item">
          <div class="qz-wrong-q">\${KVIZ_Q[x.idx].q}</div>
          <div class="qz-wrong-a">Točan odgovor: <b>\${KVIZ_Q[x.idx].o[KVIZ_Q[x.idx].t]}</b></div>
        </div>\`).join('')}
      </div>\`;
    }
  }

  el.innerHTML=\`<div class="qz-result" style="text-align:center;padding:40px 24px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4)">
    <div style="font-size:48px;margin-bottom:8px">\${ico}</div>
    <div class="qz-score-big">\${pct}%</div>
    <div class="qz-grade">\${grade}</div>
    <div class="qz-msg">\${qzScore} / \${KVIZ_Q.length} točnih · \${msg}</div>
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
      <button class="fcb primary" onclick="qzRestart()">🔁 Ponovo</button>
      <button class="fcb" onclick="sw(4)">📚 Pojmovnik</button>
      <button class="fcb" onclick="sw(7)">✅ Checkpoint</button>
    </div>
    \${wrongHtml}
  </div>\`;

  saveScoreHistory(qzScore,KVIZ_Q.length);
  markTab(6);
}

/* ═══════════════════════════════════
   CHECKPOINT
═══════════════════════════════════ */
/* ══ CHECKPOINT ══ */
var CP_STATE=[];
function cpItems(){
  var activeGrid=document.querySelector('.layer.on #cp-grid');
  var grid=activeGrid || document.getElementById('cp-grid');
  if(!grid)return [];
  return Array.prototype.slice.call(grid.querySelectorAll('.cp-item'));
}
(function cpInit(){
  var tier='free';
  try{
    if(window.MT && window.MT.Tier && typeof window.MT.Tier.getTier === 'function'){
      tier=window.MT.Tier.getTier();
    }
  }catch(e){}
  (function applyTierGate(tries){
    var hasBody=!!document.body;
    var overlays=document.querySelectorAll('.pro-gate-overlay');
    if(hasBody)document.body.setAttribute('data-tier',tier);
    if(overlays.length){
      overlays.forEach(function(ov){
        ov.setAttribute('data-gate-state',(tier==='standard'||tier==='pro')?'hidden':'visible');
      });
    }
    if((!hasBody || !overlays.length) && tries<30){
      setTimeout(function(){ applyTierGate(tries+1); },100);
    }
  })(0);
  try{var s=localStorage.getItem('mt.hrv.h12.cp');if(s)CP_STATE=JSON.parse(s);}catch(e){}
  var items=cpItems();
  var itemCount=items.length;
  if(!Array.isArray(CP_STATE) || CP_STATE.length!==itemCount){
    CP_STATE=new Array(itemCount).fill(false);
  } else {
    CP_STATE=CP_STATE.map(Boolean);
  }
  items.forEach(function(el,i){if(CP_STATE[i])el.classList.add('done');});
  cpUpdateSummary();
})();
function cpToggle(el){
  var items=cpItems();
  var i=items.indexOf(el);
  if(i===-1)return;
  el.classList.toggle('done');CP_STATE[i]=el.classList.contains('done');
  try{localStorage.setItem('mt.hrv.h12.cp',JSON.stringify(CP_STATE));}catch(e){}
  cpUpdateSummary();
}
function cpUpdateSummary(){
  var total=Math.max(1,CP_STATE.length);
  var done=CP_STATE.filter(Boolean).length;
  var pct=Math.round(done/total*100);
  var d=document.getElementById('cp-done');if(d)d.textContent=done;
  var p=document.getElementById('cp-pct');if(p)p.textContent=pct+'%';
  var f=document.getElementById('cp-final');if(f)f.classList.toggle('show',done===total);
  // H11 parity: update hero progress if the chapter has this block.
  var hpb=document.getElementById('hero-prog-bar');
  var hpct=document.getElementById('hero-prog-pct');
  var hp=document.getElementById('hero-progress');
  if(done>0 && hp){hp.style.display='block';}
  if(hpb)hpb.style.width=pct+'%';
  if(hpct)hpct.textContent=pct+'%';
}
function cpReset(){
  var items=cpItems();
  CP_STATE=new Array(items.length).fill(false);
  try{localStorage.removeItem('mt.hrv.h12.cp');}catch(e){}
  items.forEach(function(el){el.classList.remove('done')});
  cpUpdateSummary();
}

/* ═══════════════════════════════════
   KVIZ INIT on tab 6
═══════════════════════════════════ */
// Already handled in sw()

/* ═══════════════════════════════════
   MARK TAB (completion badge)
═══════════════════════════════════ */
try{localStorage.removeItem('mt.hrv.h12.tab_done')}catch(e){}
document.querySelectorAll('.tab-done').forEach(el=>{el.textContent='';});
function markTab(n){ return; }
function restoreTabDone(){ return; }
restoreTabDone();

// Mark tab on dwell (8s)
let tabTimer=null;
const origSw=sw;
window.sw=function(n){
  origSw(n);
  clearTimeout(tabTimer);
  tabTimer=setTimeout(()=>{
    if(n!==5)markTab(n); // don't auto-mark PRO locked
  },8000);
  // Show relevant tip
  showTip(n);
};

/* ═══════════════════════════════════
   TIP BAR
═══════════════════════════════════ */
const TIPS=[
  '💡 <strong>Tab 0 tip:</strong> Provjeri alegorijsku shemu — Judita, Holofern, Betulija.',
  '💡 <strong>Tab 1 tip:</strong> Klikni na pjevanje za detalje i esejske signale.',
  '💡 <strong>Tab 2 tip:</strong> Klikni na tezu da je kopiraš u clipboard.',
  '💡 <strong>Tab 3 tip:</strong> Klikni ★ na citatu za "napamet" listu. Filtriraj po temi.',
  '💡 <strong>Tab 4 tip:</strong> Klikni na pojam za definiciju i primjer.',
  '🔒 <strong>Drill PRO:</strong> Otključaj Flashcards i Matching — Standard plan.',
  '🧠 <strong>Kviz tip:</strong> Provjeri score history na dnu — prati napredak.',
  '✅ <strong>Checkpoint:</strong> Označi sve tvrdnje koje možeš objasniti u eseju.',
];
let tipShown={};
function showTip(n){
  if(tipShown[n])return;
  const bar=document.getElementById('tip-bar');
  const txt=document.getElementById('tip-bar-txt');
  if(!bar||!txt)return;
  txt.innerHTML=TIPS[n]||TIPS[0];
  bar.classList.add('show');
  tipShown[n]=true;
  clearTimeout(bar._timer);
  bar._timer=setTimeout(()=>bar.classList.remove('show'),5000);
}
// Show tip for initial tab
setTimeout(()=>showTip(0),3000);

/* ═══════════════════════════════════
   FROM BANNER (?from= URL param)
═══════════════════════════════════ */
(function(){
  const params=new URLSearchParams(window.location.search);
  const from=params.get('from');
  if(from){
    const names={H11:'H11 · Stari hrv. pisci',H13:'H13 · Barok · Gundulić'};
    const el=document.getElementById('from-banner');
    const txt=document.getElementById('from-txt');
    if(el&&txt){
      txt.textContent='📎 Nastaviš učenje iz '+(names[from]||from)+' → H12 · Marulić i Judita';
      el.classList.add('show');
      // Move banner to top of content
      const cw=document.querySelector('.content-wrap');
      if(cw)cw.insertBefore(el,cw.firstChild);
      setTimeout(()=>el.classList.remove('show'),8000);
    }
  }
})();

/* ═══════════════════════════════════
   SCORE HISTORY (kviz)
═══════════════════════════════════ */
function loadScoreHistory(){
  try{
    const hist=JSON.parse(localStorage.getItem('mt.hrv.h12.kviz_hist')||'[]');
    const cont=document.getElementById('score-hist');
    const rows=document.getElementById('score-hist-rows');
    if(!cont||!rows||hist.length===0)return;
    cont.style.display='block';
    rows.innerHTML=hist.slice(-5).reverse().map(h=>{
      const pct=Math.round(h.score/h.total*100);
      const d=new Date(h.date);
      const ds=d.toLocaleDateString('hr',{day:'2-digit',month:'2-digit'});
      return \`<div class="score-hist-row">
        <span class="score-hist-date">\${ds}</span>
        <div class="score-hist-bar"><div class="score-hist-fill" style="width:\${pct}%"></div></div>
        <span class="score-hist-val">\${h.score}/\${h.total}</span>
      </div>\`;
    }).join('');
  }catch(e){}
}

function saveScoreHistory(score,total){
  try{
    const hist=JSON.parse(localStorage.getItem('mt.hrv.h12.kviz_hist')||'[]');
    hist.push({score,total,date:new Date().toISOString()});
    localStorage.setItem('mt.hrv.h12.kviz_hist',JSON.stringify(hist.slice(-10)));
    loadScoreHistory();
  }catch(e){}
}

// Upgrade qzEnd to save history
const origQzEnd=qzEnd;
window.qzEnd=function(el){
  origQzEnd(el);
  saveScoreHistory(qzScore,KVIZ_Q.length);
  markTab(6);
};

// Load history on init
loadScoreHistory();

/* ═══════════════════════════════════
   DRILL FLASHCARDS — H11 parity
════════════════════════════════════ */
function h12DrillBeep(f,d,v,t){try{var c=new(window.AudioContext||window.webkitAudioContext)(),o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);o.frequency.value=f;o.type=t||'sine';g.gain.setValueAtTime(v||0.08,c.currentTime);g.gain.exponentialRampToValueAtTime(0.001,c.currentTime+d);o.start(c.currentTime);o.stop(c.currentTime+d)}catch(e){}}
function h12DrillSoundOk(){h12DrillBeep(660,.1,.08,'sine');setTimeout(function(){h12DrillBeep(880,.14,.07,'sine')},110)}
function h12DrillSoundNg(){h12DrillBeep(200,.18,.08,'sawtooth')}
function h12DrillSoundDone(){[440,550,660,880].forEach(function(f,i){setTimeout(function(){h12DrillBeep(f,.18,.07,'sine')},i*90)})}

var H12_DRILL_FC_FREE_LIMIT = 5;
function h12DrillFcIsPaid(){
  var t=(document.body.getAttribute('data-tier')||'free');
  return t==='standard'||t==='pro';
}
function h12DrillFcShowPaywall(){
  var wrap=document.querySelector('.h12d-fc-wrap');
  if(!wrap)return;
  var existing=document.getElementById('h12d-fc-paywall');
  if(existing){existing.scrollIntoView({behavior:'smooth',block:'center'});return;}
  var chapter=(typeof CURRENT_CHAPTER!=='undefined'&&CURRENT_CHAPTER.code)||'h12';
  var html='<div id="h12d-fc-paywall" class="drill-paywall" data-feature="drill-flashcards">'+
           '<div class="drill-paywall-ico">🔒</div>'+
           '<div class="drill-paywall-title">15 više kartica + Matching + Spaced repetition</div>'+
           '<div class="drill-paywall-sub">Drill je aktivno učenje — 4× efikasnije od pasivnog čitanja. Svih 20 kartica + 9 pair matchingov.</div>'+
           '<a class="pro-gate-btn" href="/pricing?ctx=drill_flashcards_'+chapter+'">Otključaj — 9,99€/mj</a>'+
           '<div class="pro-gate-meta">Otkaži bilo kad · Free trial 7 dana</div>'+
           '</div>';
  wrap.insertAdjacentHTML('afterend',html);
  if(typeof track==='function'){
    track('paywall_impression',{feature:'drill-flashcards',chapter:chapter,at_card:h12dFcIdx},'conversion');
  }
}

var H12_DRILL_FC_CARDS = KVIZ_Q.slice(0,20).map(function(item){
  return {cat:'PITANJE',term:item.q,def:'<b>Točno:</b> '+item.o[item.t]+'<br><br>'+item.e};
});
var h12dFcIdx=0,h12dFcKnown=0,h12dFcUnknown=0,h12dFcOrder=[];
var H12_DRILL_SS_KEY='mt.hrv.h12.drill';

function h12DrillSave(){
  try{sessionStorage.setItem(H12_DRILL_SS_KEY,JSON.stringify({idx:h12dFcIdx,known:h12dFcKnown,unknown:h12dFcUnknown,order:h12dFcOrder,ts:Date.now()}))}catch(e){}
}
function h12DrillRestore(){
  try{
    var raw=sessionStorage.getItem(H12_DRILL_SS_KEY);if(!raw)return false;
    var s=JSON.parse(raw);
    if(!s||!Array.isArray(s.order)||s.order.length!==H12_DRILL_FC_CARDS.length)return false;
    h12dFcIdx=s.idx||0;h12dFcKnown=s.known||0;h12dFcUnknown=s.unknown||0;h12dFcOrder=s.order;
    var r=document.getElementById('h12d-fc-right');if(r)r.textContent=h12dFcKnown;
    var w=document.getElementById('h12d-fc-wrong');if(w)w.textContent=h12dFcUnknown;
    return true;
  }catch(e){return false}
}
function h12DrillFcShuffle(){
  h12dFcOrder=H12_DRILL_FC_CARDS.map(function(_,i){return i});
  for(var i=h12dFcOrder.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=h12dFcOrder[i];h12dFcOrder[i]=h12dFcOrder[j];h12dFcOrder[j]=t}
}
function h12DrillFcRender(){
  if(h12dFcOrder.length===0)h12DrillFcShuffle();
  if(!h12DrillFcIsPaid() && h12dFcIdx >= H12_DRILL_FC_FREE_LIMIT){
    var term=document.getElementById('h12d-fc-term'),cf=document.getElementById('h12d-fc-cat-f'),def=document.getElementById('h12d-fc-def'),cb=document.getElementById('h12d-fc-cat-b'),num=document.getElementById('h12d-fc-num');
    if(term)term.textContent='Otključaj svih 20 kartica';
    if(cf)cf.textContent='FREE TIER — 5 / 20';
    if(def)def.textContent='Pridruži se Standard planu za svih 20 flashcards + Matching igru + Spaced Repetition. Učenje je 4× brže s aktivnim drillom.';
    if(cb)cb.textContent='UPGRADE';
    if(num)num.innerHTML='<b>'+H12_DRILL_FC_FREE_LIMIT+'</b> / 20 · <span style="color:var(--gold)">Free limit</span>';
    h12DrillFcShowPaywall();
    return;
  }
  if(h12dFcIdx>=h12dFcOrder.length){
    var t=document.getElementById('h12d-fc-term'),d=document.getElementById('h12d-fc-def'),cf2=document.getElementById('h12d-fc-cat-f'),cb2=document.getElementById('h12d-fc-cat-b');
    if(t)t.textContent='Gotovo! ✅';
    if(cf2)cf2.textContent='RESULT';
    if(d)d.textContent='Točno: '+h12dFcKnown+' / Krivo: '+h12dFcUnknown+'. Klikni Reset za novi krug.';
    if(cb2)cb2.textContent='REZULTAT';
    return;
  }
  var c=H12_DRILL_FC_CARDS[h12dFcOrder[h12dFcIdx]];
  var card=document.getElementById('h12d-fc-card'); if(card) card.classList.remove('flipped');
  var catf=document.getElementById('h12d-fc-cat-f'),catb=document.getElementById('h12d-fc-cat-b'),term2=document.getElementById('h12d-fc-term'),def2=document.getElementById('h12d-fc-def'),num2=document.getElementById('h12d-fc-num');
  if(catf)catf.textContent=c.cat;
  if(catb)catb.textContent='TOČAN ODGOVOR';
  if(term2)term2.textContent=c.term;
  if(def2)def2.innerHTML=c.def;
  if(num2)num2.innerHTML='<b>'+(h12dFcIdx+1)+'</b> / '+h12dFcOrder.length;
}
function h12DrillFcFlip(){var card=document.getElementById('h12d-fc-card');if(card)card.classList.toggle('flipped')}
function h12DrillFcMark(known){
  if(known){h12dFcKnown++;h12DrillSoundOk();}
  else{h12dFcUnknown++;h12DrillSoundNg();}
  var r=document.getElementById('h12d-fc-right');if(r)r.textContent=h12dFcKnown;
  var w=document.getElementById('h12d-fc-wrong');if(w)w.textContent=h12dFcUnknown;
  h12dFcIdx++;
  h12DrillSave();
  setTimeout(h12DrillFcRender,180);
}
function h12DrillFcSkip(){h12dFcIdx++;h12DrillSave();h12DrillFcRender()}
function h12DrillFcReset(){
  h12dFcIdx=0;h12dFcKnown=0;h12dFcUnknown=0;
  h12DrillFcShuffle();
  try{sessionStorage.removeItem(H12_DRILL_SS_KEY)}catch(e){}
  var r=document.getElementById('h12d-fc-right');if(r)r.textContent=0;
  var w=document.getElementById('h12d-fc-wrong');if(w)w.textContent=0;
  h12DrillFcRender();
  if(typeof track==='function') track('drill_reset',{},'engagement');
}
function h12DrillInit(){
  if(!h12DrillRestore()) h12DrillFcShuffle();
  h12DrillFcRender();
}

var H12_MG_PAIRS=[
  {l:'Judita',r:'Marko Marulić (hrv. ep)'},
  {l:'Davidijada',r:'Marko Marulić (latinski ep)'},
  {l:'Evanđelistar (Evangelistarium)',r:'Marko Marulić (moralno-teološka proza)'},
  {l:'De institutione bene vivendi',r:'Marko Marulić (didaktička proza)'},
  {l:'Planine',r:'Petar Zoranić'},
  {l:'Ribanje i ribarsko prigovaranje',r:'Petar Hektorović'},
  {l:'Robinja',r:'Hanibal Lucić (drama)'},
  {l:'Novela od Stanca',r:'Marin Držić (farsa)'},
  {l:'Dundo Maroje',r:'Marin Držić (komedija)'}
];
var h12dMgSelected=null,h12dMgDone=0;

function h12MatchInit(){
  var board=document.getElementById('mg-board');
  if(!board)return;
  h12dMgDone=0;h12dMgSelected=null;
  var score=document.getElementById('mg-score'),total=document.getElementById('mg-total');
  if(score)score.textContent=0;
  if(total)total.textContent=H12_MG_PAIRS.length;

  var left=H12_MG_PAIRS.map(function(p,i){return {text:p.l,key:i,side:'l'}});
  var right=H12_MG_PAIRS.map(function(p,i){return {text:p.r,key:i,side:'r'}});
  for(var i=right.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=right[i];right[i]=right[j];right[j]=t}

  var html='<div class="mg-col"><div class="mg-col-label">Djelo</div>';
  left.forEach(function(it){html+='<button class="mg-item" data-key="'+it.key+'" data-side="l">'+it.text+'</button>'});
  html+='</div><div class="mg-col"><div class="mg-col-label">Autor</div>';
  right.forEach(function(it){html+='<button class="mg-item" data-key="'+it.key+'" data-side="r">'+it.text+'</button>'});
  html+='</div>';
  board.innerHTML=html;
  board.querySelectorAll('.mg-item').forEach(function(el){el.addEventListener('click',function(){h12MatchClick(el)})});
}
function h12MatchClick(el){
  if(el.classList.contains('ok'))return;
  if(!h12dMgSelected){h12dMgSelected=el;el.classList.add('sel');return;}
  if(h12dMgSelected===el){el.classList.remove('sel');h12dMgSelected=null;return;}
  if(h12dMgSelected.dataset.side===el.dataset.side){h12dMgSelected.classList.remove('sel');h12dMgSelected=el;el.classList.add('sel');return;}

  if(h12dMgSelected.dataset.key===el.dataset.key){
    h12dMgSelected.classList.remove('sel');
    h12dMgSelected.classList.add('ok');
    el.classList.add('ok');
    h12dMgDone++;
    h12DrillSoundOk();
    var score=document.getElementById('mg-score');if(score)score.textContent=h12dMgDone;
    h12dMgSelected=null;
    if(h12dMgDone===H12_MG_PAIRS.length){
      h12DrillSoundDone();
      setTimeout(function(){
        var board=document.getElementById('mg-board'); if(!board)return;
        board.insertAdjacentHTML('afterend','<div class="mg-done" id="mg-done">✅ SVI PAROVI SPARENI!</div>');
        setTimeout(function(){var d=document.getElementById('mg-done');if(d)d.remove()},3500);
      },400);
    }
  } else {
    el.classList.add('err');
    h12dMgSelected.classList.add('err');
    h12DrillSoundNg();
    var s=h12dMgSelected;
    setTimeout(function(){s.classList.remove('err','sel');el.classList.remove('err')},450);
    h12dMgSelected=null;
  }
}

/* ═══════════════════════════════════
   INTERSECTION OBSERVER (IntersectionObserver)
═══════════════════════════════════ */
/* ═══════════════════════════════════
   READ PROGRESS BAR + BTT
═══════════════════════════════════ */
(function(){
  const bar=document.getElementById('rpbar');
  const btt=document.getElementById('btt');
  function update(){
    const el=document.documentElement;
    const scrolled=el.scrollTop||document.body.scrollTop;
    const total=(el.scrollHeight||document.body.scrollHeight)-el.clientHeight;
    const pct=total>0?Math.min(100,Math.round(scrolled/total*100)):0;
    if(bar)bar.style.width=pct+'%';
    if(btt)btt.classList.toggle('show',scrolled>300);
  }
  document.addEventListener('scroll',update,{passive:true});
  update();
})();

/* ═══════════════════════════════════
   SELFCHECK (Samoprocjena Tab 0)
═══════════════════════════════════ */
const SC_QS = [
  {q: 'Mogu objasniti dvanaesterac uz primjer stiha.', k: 'stih'},
  {q: 'Znam alegorijsku shemu Judite (Judita=?, Holofern=?, Betulija=?).', k: 'alegorija'},
  {q: 'Mogu nabrojati 6 pjevanja i reći ključni događaj svakog.', k: 'struktura'},
  {q: 'Znam razliku između kršćanskog i sekularnog humanizma.', k: 'humanizam'},
  {q: 'Mogu napisati rečenicu koja koristi Juditu kao kontekst u eseju o Petrarci.', k: 'esej'},
];

function scRender() {
  const el = document.getElementById('sc-qs');
  if (!el) return;
  el.innerHTML = SC_QS.map((q,i) => \`
    <div style="display:flex;align-items:flex-start;gap:10px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);padding:10px 14px">
      <input type="checkbox" id="sc\${i}" style="margin-top:3px;accent-color:var(--bronze);width:16px;height:16px;flex-shrink:0">
      <label for="sc\${i}" style="font-family:var(--serif);font-size:13.5px;color:var(--t2);cursor:pointer;line-height:1.5">\${q.q}</label>
    </div>
  \`).join('');
}

function scCheck() {
  const checked = SC_QS.map((_,i) => document.getElementById('sc'+i)?.checked).filter(Boolean).length;
  const pct = Math.round(checked / SC_QS.length * 100);
  const el = document.getElementById('sc-result');
  if (!el) return;
  let msg, color;
  if (pct >= 100) { msg = '🏆 Odlično! Spreman/na si za sve što NCVVO može pitati iz H12.'; color = 'var(--green)'; }
  else if (pct >= 60) { msg = '📖 Dobro! Provjeri neoznačene stavke — one su tvoje slabe točke.'; color = 'var(--gold)'; }
  else { msg = '📚 Još je posla. Počni s Teorijom i 6 pjevanjima — te sekcije su najvažnije.'; color = 'var(--red)'; }
  el.style.display = 'block';
  el.innerHTML = \`<div class="box-int" style="border-color:\${color}20">
    <div style="font-family:var(--display);font-size:18px;color:\${color};margin-bottom:8px">\${checked} / \${SC_QS.length} · \${pct}%</div>
    <div style="font-family:var(--serif);font-size:14px;color:var(--t2)">\${msg}</div>
  </div>\`;
}

function scReset() {
  SC_QS.forEach((_,i) => { const el=document.getElementById('sc'+i); if(el) el.checked=false; });
  const r = document.getElementById('sc-result');
  if (r) r.style.display = 'none';
}

scRender();

/* ═══════════════════════════════════
   CHECKLIST (Esej alat AT7)
═══════════════════════════════════ */
const CL_ITEMS = [
  'Uvod sadrži: autor + djelo + godina + kratka teza.',
  'Teza odgovara točno na postavljeno pitanje.',
  'Svaki argument ima: tvrdnju + primjer/citat + analizu.',
  'Navedena je alegorijska dimenzija Judite (ako relevantno).',
  'Korišten barem jedan književnoteorijski pojam (ep, dvanaesterac, alegorija...).',
  'Zaključak ne uvodi novo — sažima ono što je rečeno.',
  'Minimalno 440 riječi (brojiš brzo: ~5 rečenica/odlomak × 4 odlomka = ~440).',
  'Nema gramatičkih grešaka u konjugaciji i deklinaciji.',
  'Provjeri: je li Judita ispitno djelo? (NIJE 2026 — koristi samo kao kontekst).',
  'Čitljiv rukopis — ako ne, napiši tiskano ali čitko.',
];
let clDone = {};
try { clDone = JSON.parse(localStorage.getItem('mt.hrv.h12.cl') || '{}'); } catch(e) {}

function clRender() {
  const el = document.getElementById('cl-list');
  if (!el) return;
  el.innerHTML = CL_ITEMS.map((item, i) => \`
    <div class="cp-item\${clDone[i] ? ' done' : ''}" onclick="clToggle(\${i})" style="cursor:pointer">
      <div class="cp-cb">\${clDone[i] ? '✓' : ''}</div>
      <div class="cp-txt">\${item}</div>
    </div>
  \`).join('');
}
function clToggle(i) {
  clDone[i] = !clDone[i];
  try { localStorage.setItem('mt.hrv.h12.cl', JSON.stringify(clDone)); } catch(e) {}
  clRender();
}
clRender();

/* ═══════════════════════════════════
   CHECKPOINT WRITER
═══════════════════════════════════ */
function cpWriterUpdate(){
  const ta=document.getElementById('cp-writer');
  const fb=document.getElementById('cp-writer-fb');
  if(!ta)return;
  const txt=ta.value;
  const words=txt.trim()?txt.trim().split(/\\s+/).length:0;
  try{localStorage.setItem('mt.hrv.h12.cp_writer',txt);}catch(e){}
  // Count literary terms
  const tl=txt.toLowerCase();
  const terms=['dvanaesterac','stih','metrik','alegorij','simbol','znač','humaniz','kršćan','vjera','1501','nastanak','tisk','holofern','judita','betulija','ep','žanr','spjev'];
  const found=[];
  if(/dvanaesterac|stih|metrik/.test(tl))found.push('✅ Stih/forma');
  if(/alegorij|simbol/.test(tl))found.push('✅ Alegorija');
  if(/humaniz|kršćan|vjera/.test(tl))found.push('✅ Humanizam');
  if(/1501|nastanak|tisk/.test(tl))found.push('✅ Datum');
  if(/holofern|judita|betulija/.test(tl))found.push('✅ Lik');
  if(/ep|žanr|spjev/.test(tl))found.push('✅ Žanr');
  // Update stats
  const ww=document.getElementById('cpw-words');if(ww)ww.querySelector('.wc-stat-num').textContent=words;
  const wt=document.getElementById('cpw-terms');if(wt)wt.querySelector('.wc-stat-num').textContent=found.length;
  // Progress bar
  const pct=Math.min(100,Math.round(words/20*100));
  const bar=document.getElementById('cpw-bar');const prog=document.getElementById('cpw-prog');
  const lbl=document.getElementById('cpw-lbl');
  if(bar)bar.style.width=pct+'%';
  if(prog)prog.classList.toggle('pass',words>=20);
  if(lbl)lbl.textContent='CILJ 20 · '+words+' / 20'+(words>=20?' ✓':'');
  if(!fb||words===0){if(fb)fb.innerHTML='';return;}
  const quality=words>=20?(words>=40?'<span style="color:var(--green)">Odlična duljina</span>':'<span style="color:var(--gold)">Dobra duljina</span>'):'<span style="color:var(--red)">Previše kratko</span>';
  fb.innerHTML=\`<div class="box-int" style="padding:10px 14px">
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:6px">\${found.map(f=>\`<span style="font-family:var(--mono);font-size:10px;color:var(--green)">\${f}</span>\`).join('')||'<span style="font-family:var(--mono);font-size:10px;color:var(--t3)">Nema prepoznatih pojmova</span>'}</div>
    <div style="font-family:var(--mono);font-size:10px">\${quality} · \${found.length}/6 književnih pojmova</div>
  </div>\`;
}
(function(){
  const ta=document.getElementById('cp-writer');
  if(!ta)return;
  try{const sv=localStorage.getItem('mt.hrv.h12.cp_writer');if(sv){ta.value=sv;cpWriterUpdate();}}catch(e){}
})();

/* ═══════════════════════════════════
   CITATNIK v2 (H11 featured-quote pattern)
═══════════════════════════════════ */
const CIT_DATA2 = [
  {cat:'marulić',napamet:true,
   text:'Historiju tuj svedoh na versih, po običaju naših začinjavac i jošće po zakonu onih starih poet.',
   meta:'— Marko Marulić, <em>Judita</em> (posveta Balistriliću), 1501. · O tradiciji začinjavaca i antičkih pjesnika'},
  {cat:'judita',napamet:true,
   text:'Ki hoće slišati čudesa Božja starim / neka posluša Judite kriposti harim.',
   meta:'— Marulić, <em>Judita</em>, I. pjevanje · Invokacija čitatelja — početak epa'},
  {cat:'judita',napamet:true,
   text:'Biše tada udova, ka živi u gradu, / po imenu Judita u lipu porodu.',
   meta:'— Marulić, <em>Judita</em>, II. pjevanje · Uvođenje protagonistice'},
  {cat:'vjera',napamet:true,
   text:'Gospode svemogi, ki si stvor nebesa, / pogledaj na tugu i plač naroda svoga.',
   meta:'— Marulić, <em>Judita</em>, III. pjevanje · Juditina molitva'},
  {cat:'judita',napamet:true,
   text:'I u tomzi času nožem mu odsica / s tila glavu, ka mu niz skalice stica.',
   meta:'— Marulić, <em>Judita</em>, IV. pjevanje · Kulminacija — ubojstvo Holoferna'},
  {cat:'domoljublje',napamet:true,
   text:'Ovo vam glava je tiranina zla, / ka je hotila nas dat pod jaram zla.',
   meta:'— Marulić, <em>Judita</em>, V. pjevanje · Objava pobjede Betuliji'},
  {cat:'vjera',
   text:'Blagovsi, duše moja, Gospoda svemoga, / ki meni pomaga u trudu svakoga.',
   meta:'— Marulić, <em>Judita</em>, VI. pjevanje · Zahvalnica Bogu'},
  {cat:'domoljublje',
   text:'Stvoren bih po misi, po sili nagojen / u vrime nemira, u vrime pobojen.',
   meta:'— Marulić u poslanici Balistrilića · O okolnostima nastanka Judite, 1501.'},
  {cat:'alegorija',
   text:'Tko sili se ufa, a Boga zaboravi / oholastju zaglublja, smrt ga zadesnavi.',
   meta:'— Marulić, <em>Judita</em>, VI. pjevanje · Moralna pouka — hybris → nemeza'},
  {cat:'judita',
   text:'Lipos joj je bila ka anđeoska slika / razuma i puti, duha i telika.',
   meta:'— Marulić, <em>Judita</em>, II. pjevanje · Ekfraza Juditine ljepote'},
  {cat:'alegorija',
   text:'Na alegorijskoj razini Judita simbolizira Hrvatsku/vjeru, Holofern Osmanlije, a Betulija opkoljena hrv. naselja.',
   meta:'— Analitička rečenica · za upotrebu u eseju o kontekstu'},
  {cat:'holofern',
   text:'Holofernova oholost — proglašava se bogom — uzrok je njegova pada. Classični hybris iz antičke tragedije.',
   meta:'— Analiza lika · Holofern kao antitip Judite'},
  {cat:'marulić',
   text:'Marulić je suvremenik hrv. petrarkista, ali svjesno odbija petrarkizam — bira ep i domoljublje.',
   meta:'— Interpretacija · Marulić kao antiteza petrarkistima'},
  {cat:'kontekst',
   text:'Krbavska bitka (1493.) — katastrofalan poraz hrv. vojske. Marulić piše Juditu 1501., samo 8 godina poslije.',
   meta:'— Povijesni kontekst · veza trauma → književni odgovor'},
  {cat:'kontekst',
   text:'U eseju o Petrarci: „Dok su hrv. petrarkisti preuzimali Petrarkin lirski model, Marulić bira ep i domoljublje — pokazujući raznolikost hrv. humanizma."',
   meta:'— Gotova esejska rečenica · H12 kao kontekst u eseju o Petrarci'},
  {cat:'kontekst',
   text:'U eseju o Calderónu: „I Marulić (Judita) i Calderón (Život je san) grade kršćansko-humanistički svjetonazor — slobodna volja postoji, ali se ostvaruje samo uz Boga."',
   meta:'— Gotova esejska rečenica · H12 kao kontekst u eseju o Calderónu'},
  {cat:'kontekst',
   text:'U eseju o Krleži: „Gdje Marulić vidi vjeru kao pokretač otpora (Judita, 1501.), Krleža vidi vjeru kao fasadu moralne korupcije (Glembajevi, 1928.) — 400 godina razočarenja."',
   meta:'— Gotova esejska rečenica · H12 kao kontekst u eseju o Krleži'},
  {cat:'marulić',
   text:'Pisati na hrvatskome kad svi humanisti pišu latinskim — to je politički čin. Marulić ga čini svjesno.',
   meta:'— Interpretacija · jezični izbor kao politička poruka'},
  {cat:'domoljublje',
   text:'Judita (1501.) → Osman (1626.) → Smrt Smail-age (1846.) — tradicija hrv. domoljubnog epa.',
   meta:'— Analitička rečenica · za esej koji traži kontekst hrv. epa'},
  {cat:'alegorija',
   text:'Marulić sam u posveti Balistriliću objašnjava alegorijsku dimenziju — Judita=Hrvatska, Holofern=Turci. To je iznimno rijetko za tadašnju književnost.',
   meta:'— Interpretacija · autorova eksplicitna alegorijska namjera'},
  {cat:'vjera',
   text:'Judita ne pobjeđuje Holoferna vlastitom snagom — pobjeđuje uz Božju pomoć. Marulić je kršćanski humanist, ne sekularni.',
   meta:'— Teološka napomena · česta greška na ispitu'},
  {cat:'holofern',
   text:'Holofern koji je zavojevao cijeli poznati svijet pobjeđen je vinom i ženom. Marulić naglašava: tjelesna moć i oholost vode u propast.',
   meta:'— Analiza IV. pjevanja · dramska ironija kulminacije'},
  {cat:'judita',
   text:'Juditina molitva (III. pjev.) nije liturgijska formula — ona je individualni dijalog s Bogom. To je humanistička inovacija.',
   meta:'— Analiza · psihologizacija lika'},
  {cat:'stih',
   text:'Dvanaesterac (6+6) s dvostrukim dvostihom (AA BB) spaja tradiciju hrv. usmene poezije s humanističkim epskim oblikom.',
   meta:'— Analiza forme · za pitanja o stihu'},
  {cat:'marulić',napamet:true,
   text:'Marulić piše na hrvatskome kad svi humanisti pišu latinskim — to je svjestan politički čin, a ne jezična slabost.',
   meta:'— Interpretacija · jezični izbor Marulića kao manifest'},
  {cat:'judita',
   text:'Judita ide u Holofernov tabor uljepšana i nakiena — ljepota postaje oružje vjere, a ne slabost.',
   meta:'— Analiza III. pjev. · Juditin strateški pristup'},
  {cat:'holofern',napamet:true,
   text:'Holofern pogiba u šatoru, usnuo od vina — dramatska ironija: osvajač svijeta poražen tjelesnom slabošću.',
   meta:'— IV. pjevanje · dramska ironija kulminacije'},
  {cat:'alegorija',napamet:true,
   text:'Marulić u posveti Balistriliću eksplicitno objašnjava alegoriju — to je jedinstveno za tadašnju književnost.',
   meta:'— Kontekst · autorska samointerpretacija'},
  {cat:'vjera',
   text:'Ne uzda se Judita u svoju kripost samu / neg u Boga koji je svemoć i prav i vam.',
   meta:'— Parafraz · teološka premisa epa'},
  {cat:'domoljublje',napamet:true,
   text:'Pisati Juditu znači pozvati Hrvate na otpor — ep kao politički akt, ne kao estetska igra.',
   meta:'— Interpretacija · svrha Marulićeva epa'},
  {cat:'kontekst',
   text:'Judita (1501.) prethodi za 125 godina Osmanu Gundulića (1626.) — dva vrhunca hrv. domoljubnog epa.',
   meta:'— Povijesna linija · tradicija hrv. epa'},
  {cat:'marulić',
   text:'Marulić je europski pisac — njegova latinska Evangelistarium doživjela je preko 100 izdanja u Europi 15.–17. st.',
   meta:'— Kontekst · europska recepcija Marulića'},
  {cat:'judita',
   text:'Biše tada udova — samim uvodom Marulić signalizira: heroj neće biti muški ratnik, nego slabija žena vjere.',
   meta:'— Analiza II. pjev. · subverzija epskog heroja'},
  {cat:'alegorija',
   text:'Betulija nije samo hebrejski grad — to su Split, Zadar, Šibenik 1501., sve ono što stoji pred osmanskim udarom.',
   meta:'— Alegorijska dimenzija · Betulija kao hrv. geografija'},
  {cat:'stih',napamet:true,
   text:'Dvanaesterac je Marulićev kompromis: talijanski humanistički heksasillabo + hrv. usmena tradicija.',
   meta:'— Analitička rečenica · kulturna fuzija u stihu'},
  {cat:'holofern',
   text:'Holofernovu silu pobjeđuje žena s malim nožem — metafora cijelog Marulićeva svjetonazora.',
   meta:'— Interpretacija · esejska rečenica'},
  {cat:'vjera',napamet:true,
   text:'Oholost je grijeh; poniznost pred Bogom je kraljevina — Marulić ponavlja tu formulu kroz cijeli ep.',
   meta:'— VI. pjevanje · moralna pouka'},
  {cat:'marulić',
   text:'Marulić ne izmišlja priču Judite — preuzima je iz Biblije. Ali dodaje alegoriju, digresije i apel — to je originalnost.',
   meta:'— Interpretacija · kreativnost u adaptaciji'},
  {cat:'kontekst',
   text:'Judita NIJE ispitno djelo 2026. — ali jedna rečenica o Marulićevu odbijanju petrarkizma podiže esej o Petrarci za ocjenu.',
   meta:'— Taktička napomena · H12 kao kontekst'},
  {cat:'domoljublje',
   text:'Marulić je prvi autor koji književno definira hrvatski identitet — Judita gradi mit prije nego što Hrvatska postaje nacija.',
   meta:'— Kulturno-povijesna interpretacija'},
];

let cit2Active = 'all';

function renderCit2() {
  const el = document.getElementById('cit-grid2');
  if (!el) return;
  const show = cit2Active === 'all' ? CIT_DATA2 : CIT_DATA2.filter(c => c.cat === cit2Active);
  el.innerHTML = show.map((c,i) => \`
    <div class="featured-quote" data-cit-cat="\${c.cat}">
      \${c.napamet ? '<span class="fq-napamet">★ NAPAMET</span>' : ''}
      <div class="fq-mark">«</div>
      <div class="fq-body">
        <div class="fq-text">\${c.text}</div>
        <div class="fq-meta">\${c.meta}</div>
      </div>
      <button type="button" class="fq-copy" onclick="fqCopy(this,'\${c.text.replace(/'/g,"\\'")} — \${c.meta.replace(/<[^>]+>/g,'').replace(/'/g,"\\'")}')">⎘</button>
    </div>
  \`).join('');
}

function citFilter2(cat, btn) {
  document.querySelectorAll('#cit-filters .pojm-filter').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  cit2Active = cat;
  renderCit2();
}

function fqCopy(btn, text) {
  navigator.clipboard.writeText(text).catch(() => {});
  btn.classList.add('copied');
  btn.textContent = '✓';
  setTimeout(() => { btn.classList.remove('copied'); btn.textContent = '⎘'; }, 1500);
}

renderCit2();

/* ═══════════════════════════════════
   POJMOVNIK v2 (H11 pojm-card pattern)
═══════════════════════════════════ */
const POJM_DATA2 = [
  {kat:'stih',term:'Dvanaesterac',def:'Stih od <strong>12 slogova</strong> s obvezatnom cezurom iza 6. sloga (6+6). Osnova Judite. Rima: dvostruki dvostih (AA BB).'},
  {kat:'stih',term:'Cezura',def:'Obvezatna pauza unutar stiha. U dvanaestercu iza 6. sloga: <em>„Ki hoće slišati | čudesa Božja starim"</em>.'},
  {kat:'stih',term:'Dvostih (distih)',def:'Strofa od dva stiha koji se rimuju (AA). Osnovna strofa Judite. Svi dvanaesterci su u rimovanim dvostihovima.'},
  {kat:'stih',term:'Dvostruka rima',def:'Shema AA BB — svaki par stihova rimuje se međusobno. Npr. <em>starim/harim</em>, <em>gradu/porodu</em>.'},
  {kat:'ep',term:'Ep (spjev)',def:'Dugo narativno djelo u stihu. Obilježja: <strong>invokacija, in medias res, digresije, katalozi</strong>. Judita = ep u 6 pjevanja.'},
  {kat:'ep',term:'In medias res',def:'Epska tehnika: početi <strong>usred radnje</strong>. Judita počinje s Holofernivim pohodom, ne s Nabukodonosorovim djetinjstvom.'},
  {kat:'ep',term:'Invokacija',def:'Uvodni zaziv na početku epa. Kod Marulića zaziv čitatelja i Boga — kršćanizacija antičke formule (Homer zaziva Muzu).'},
  {kat:'ep',term:'Pjevanje',def:'Strukturna jedinica epa. <strong>Judita ima 6 pjevanja.</strong> I=ekspozicija, IV=kulminacija (ubojstvo), VI=moralni epilog.'},
  {kat:'ep',term:'Digresija',def:'Odmicanje od glavne radnje za opis ili moralnu pouku. Epska tehnika od Homera. Marulić koristi u svakom pjevanju.'},
  {kat:'ep',term:'Katalog',def:'Nabrajanje junaka, naroda ili vojski. Antička epska konvencija (usp. katalog brodova u Ilijadi). Koristi se za Holofernovu vojsku.'},
  {kat:'ep',term:'Peripetija',def:'Dramatski <strong>preokret</strong> radnje. Judita s Holofernivom glavom = totalna promjena situacije za Betuliju.'},
  {kat:'ep',term:'Biblijski predložak',def:'Marulić preuzima fabulu iz <strong>Knjige o Juditi</strong> (Stari zavjet, Vulgata). Ne izmišlja priču — adaptira je s alegorijom.'},
  {kat:'stil',term:'Alegorija',def:'Dvojno značenje: doslovna razina (biblijska priča) + alegorijska razina (Hrvatska vs. Turci). <em>Judita=HR, Holofern=Turci, Betulija=hrv. gradovi.</em>'},
  {kat:'stil',term:'Simbol',def:'Predmet/lik s prenesenim značenjem. <strong>Holofernova glava</strong> = simbol poraza oholosti i neprijatelja.'},
  {kat:'stil',term:'Ekfraza',def:'Detaljan opis tijela ili predmeta. U Juditi: <strong>opis Juditine ljepote</strong> u III. pjevanju — humanistički slavopjev tijelu kao Božjem daru.'},
  {kat:'stil',term:'Personifikacija',def:'Pripisivanje ljudskih osobina apstrakcijama. Betulija kao živi organizam koji pati i čeka spas.'},
  {kat:'stil',term:'Antiteza',def:'Suprotstavljanje dvaju pojmova. <strong>Judita (slaba/jaka) vs. Holofern (jak/slab)</strong> — temeljna napetost epa.'},
  {kat:'stil',term:'Anafora',def:'Ponavljanje istih riječi/fraza na početku stiha/rečenice. Biblijska tehnika. Daje ritam i emfazu.'},
  {kat:'stil',term:'Hybris → nemeza',def:'Gr. <strong>hybris</strong> = oholost; nemeza = kazna. Holofernova oholost (proglašava se bogom) → smrt. Antički motiv + biblijski moral.'},
  {kat:'hum',term:'Humanizam',def:'Kulturni pokret 14.–16. st.: čovjek u centru znanja, interes za antiku. Marulić je humanist koji preuzima epski žanr i erudiciju.'},
  {kat:'hum',term:'Kršćanski humanist',def:'Spoj humanizma i kršćanske vjere. <strong>Čovjek je velik, ali samo uz Boga.</strong> = Marulić (i Erazmo, i Thomas More).'},
  {kat:'hum',term:'Psihologizacija',def:'Prikazivanje unutarnjeg života lika. <strong>Juditina molitva</strong> (III. pjev.) = humanistička inovacija — individualni dijalog s Bogom.'},
  {kat:'hum',term:'Antemurale Chr.',def:'<em>Antemurale Christianitatis</em> = predziđe kršćanstva. Politički termin za Hrvatsku kao granicu prema osmanskom prodoru.'},
  {kat:'hum',term:'Petrarkizam',def:'Ljubavno-lirski pokret po uzoru na Petrarcu. Marulić ga <strong>svjesno odbija</strong> — bira ep umjesto ljubavne lirike. Kontrast unutar hrv. humanizma.'},
  {kat:'hum',term:'Renesansa',def:'Europski kulturni pokret 14.–17. st. U hrv. književnosti: Marulić, Hektorović, Zoranić, Marin Držić. Judita je prvi veliki hrv. renesansni ep.'},
  {kat:'hum',term:'Latinizam',def:'Preuzimanje latinskih riječi/fraza. Marulić piše i latinskim — Evangelistarium (100+ europs. izdanja). Hrv. Judita namijenjena puku.'},
  {kat:'aleg',term:'Judita = Hrvatska',def:'Alegorijska razina: Judita simbolizira <strong>Hrvatsku / kršćanstvo / vjeru</strong>. Mala i slaba, ali pobjeđuje uz Boga.'},
  {kat:'aleg',term:'Holofern = Turci',def:'Holofern simbolizira <strong>Turke / Osmanlije / bezbožništvo</strong>. Moćan ali ohol — pada pred Juditom/Bogom.'},
  {kat:'aleg',term:'Betulija = hrv. gradovi',def:'Betulija simbolizira <strong>hrv. gradove / Dalmaciju</strong> pod osmanskom opsadom. Split, Zadar, Šibenik 1501.'},
  {kat:'aleg',term:'Trojstruka razina',def:'Judita se čita na <strong>3 razine</strong>: (1) doslovna — biblijska priča; (2) alegorijska — HR vs. Turci; (3) moralna — vjera pobjeđuje silu.'},
  {kat:'kontekst',term:'Krbavska bitka',def:'<strong>1493.</strong> — katastrofalan poraz hrv. vojske pred Turcima. Marulić piše Juditu 1501. — 8 godina poslije. Neposredni povod.'},
  {kat:'kontekst',term:'Poslanica Balistrilića',def:'Pismo uz Juditu upućeno Jeronimu Balistrilića. Marulić <strong>sam objašnjava alegoriju</strong> — iznimno rijetko za tadašnju književnost.'},
  {kat:'kontekst',term:'1501. / 1521.',def:'<strong>1501.</strong> = Judita napisana. <strong>1521.</strong> = tiskana u Veneciji. Razlika je važna — ispit zna pitati oboje.'},
  {kat:'kontekst',term:'Tradicija hrv. epa',def:'Judita (1501.) → Osman/Gundulić (1626.) → Smrt Smail-age/Mažuranić (1846.). Zajednička tema: kršćanstvo, otpor, domoljublje.'},
  {kat:'kontekst',term:'Marulić i Petrarca',def:'Petrarca = europski uzor. Hrv. petrarkisti ga slijede; Marulić ga <strong>svjesno odbija</strong>. Oboje su humanisti, ali različitih poetika.'},
  {kat:'stih',term:'Rima',def:'Zvučno podudaranje na krajevima stihova. U Juditi: <strong>dvostruka rima</strong> (AA BB) — svaki par stihova rimuje se međusobno.'},
  {kat:'stih',term:'Strofa',def:'Skupina stihova koja čini zaokruženu cjelinu. U Juditi je strofa <strong>dvostih</strong> — najmanja strofa u hrv. epici.'},
  {kat:'ep',term:'Epizoda',def:'Manja zaokružena cjelina unutar veće radnje epa. Npr. gozba u IV. pjevanju = epizoda unutar glavne radnje (pobjeda nad Holofernom).'},
  {kat:'ep',term:'Epski usporedba',def:'Produžena usporedba tipična za epiku (Homerov stil). Npr. Holofernova vojska usporediva s rojem stršljenova, pustoći, poplavom.'},
  {kat:'ep',term:'Ekspozicija',def:'Uvodni dio radnje — predstavljanje situacije, likova, sukoba. U Juditi: I. pjevanje predstavlja Holofernov pohod i Betuliju.'},
  {kat:'ep',term:'Kulminacija',def:'Najintenzivniji trenutak radnje. U Juditi: <strong>ubojstvo Holoferna u IV. pjevanju</strong> — dramski vrhunac.'},
  {kat:'ep',term:'Rasplet',def:'Razrješenje sukoba nakon kulminacije. U Juditi: V. pjevanje (Betulija pobjeđuje) i VI. pjevanje (proslava + moral).'},
  {kat:'ep',term:'Didaktična funkcija',def:'Učena/poučna namjera djela. Marulić eksplicitno izražava: VI. pjev. daje moralnu pouku čitatelju — živi vjerom, pobijedi silu.'},
  {kat:'stil',term:'Metafora',def:'Preneseno značenje koje riječ dobiva u kontekstu. Npr. „glava tiranina" — ne samo fizička, već simbol poraza oholosti.'},
  {kat:'stil',term:'Emfaza',def:'Naglašavanje kroz ponavljanje, uzvik ili ritmičku strukturu. Marulić koristi emfazu u invokaciji i molitvi.'},
  {kat:'stil',term:'Hiperbola',def:'Pretjerivanje za učinak. Opis Holofernove vojske (ogromna, nebrojena, strahovita) — hiperboličan da pojača kontrast s malom Betulijom.'},
  {kat:'hum',term:'Erazmo Roterdamski',def:'Njemački humanist 16. st. — paralelan Maruliću po kršćansko-humanističkoj orijentaciji. Oboje spajaju antičko znanje s kršćanskim moralom.'},
  {kat:'hum',term:'Vulgata',def:'Latinski prijevod Biblije (Jeronim, 4. st.). Izvor Marulićeva predloška — Knjiga o Juditi u Vulgati je kanonska, u protestantizmu apokrifna.'},
  {kat:'hum',term:'Erudicija',def:'Humanistička učenost — poznavanje antičkih i biblijskih autora. Marulić je erudit — piše latinska djela za europsku učenu javnost.'},
  {kat:'hum',term:'Vernakular',def:'Narodni (materinski) jezik, suprotno od latinskog. Marulić piše Juditu <strong>vernakularno</strong> (hrvatski) — politički izbor.'},
  {kat:'aleg',term:'Alegorijski čitač',def:'Čitatelj sposoban uočiti dvojnu razinu. Marulić piše za <em>alegorijskog čitača</em> — pretpostavlja da će vidjeti politiku iza biblijske priče.'},
  {kat:'aleg',term:'Doslovna razina',def:'Prva razina čitanja — što se doslovno događa u tekstu. U Juditi: hebrejska udovica ubija asirskog vojskovođu.'},
  {kat:'aleg',term:'Moralna razina',def:'Treća razina čitanja — etička pouka. U Juditi: vjera pobjeđuje silu, oholost vodi u propast.'},
  {kat:'kontekst',term:'Splitski humanizam',def:'Književni krug oko Marulića u Splitu 15.–16. st. Uključuje Balistrilića i druge splitske plemiće humaniste. H12 kontekst.'},
  {kat:'ep',term:'Antiturski ep',def:'Podvrsta hrv. renesansnog epa motivirana turskom opasnošću. <strong>Judita</strong> (Marulić) i <strong>Vazetje Sigeta grada</strong> (Krnarutić) su primjeri. Specifično hrv. žanr bez europskog ekvivalenta.'},
  {kat:'ep',term:'Invocatio Musae',def:'Zaziv muze na početku antičkog epa (Homer, Vergilije). Marulić ga kršćanizira — umjesto muze zaziva Boga i čitatelja. <em>„Ki hoće slišati čudesa Božja starim..."</em>'},
  {kat:'stih',term:'Prijenosna rima',def:'Rima koja prelazi granicu stiha. Marulić u nekim mjestima Judite koristi prijenosnu rimu — zvuk se nastavlja između dvostihova. Napredna metrička obilježja.'},
  {kat:'stil',term:'Inverzija (inversio)',def:'Preokrenuti red riječi radi ritma ili naglaska. Česta u stihu — <em>„glavu mu odsica"</em> umjesto <em>„odsica mu glavu"</em>. Latinistički utjecaj.'},
  {kat:'stil',term:'Eufemizam',def:'Ublaženi izraz za nešto neprijatno. Marulić koristi eufemizme za smrt i nasilje — odmjereniji od brutalnih opisa. Kršćansko-humanistički takt.'},
  {kat:'hum',term:'Firentinski neoplatonizam',def:'Filozofski pokret 15. st. oko Marsilia Ficina u Firenci. Spaja Platonovu filozofiju s kršćanskom teologijom. Utjecaj na hrv. humaniste koji su studirali u Italiji.'},
  {kat:'hum',term:'Studia humanitatis',def:'Program humanističkih studija: gramatika, retorika, povijest, poezija, moralna filozofija. Temelj europskog humanizma. Marulić je produkt ovog obrazovnog sustava.'},
  {kat:'hum',term:'Epigram',def:'Kratka, duhovita pjesma ili natpis. Marulić je pisao epigrame na latinskome. Žanr humanističke kulture koji pokazuje erudiciju i duhovitost.'},
  {kat:'aleg',term:'Tipologija',def:'Biblijska tehnika: osobe i događaji iz Starog zavjeta "najavljivaju" one iz Novog (ili suvremene). Marulić koristi Juditu kao tip hrv. otpora — starozavjetni tip modernog problema.'},
  {kat:'aleg',term:'Egzegeza',def:'Tumačenje biblijskog teksta. Marulić piše u tradiciji kršćanske egzegeze — njegova alegorija Judite je oblik egzegetske prakse primijenjene na domoljubni kontekst.'},
  {kat:'kontekst',term:'Dubrovačka republika',def:'Samostalna gradska republika (992.–1808.) — centar hrv. renesansne kulture. Petrarkisti, Marin Držić, Gundulić su Dubrovčani. Marulić je splitski — važna geografska razlika.'},
  {kat:'kontekst',term:'Venecija kao tiskar',def:'Judita je tiskana 1521. u Veneciji — tada najvećem europskom centru tiska. Mletačka vlast nad Dalmacijom olakšavala je veze. Venecija = prozor hrv. kulture prema Europi.'},
  {kat:'kontekst',term:'Lateiner (latinaš)',def:'Prezrivi naziv za pisce koji pišu isključivo latinskim, zanemarujući narodni jezik. Marulić nije latinaš — piše i hrv. Njegova Judita je afirmacija narodnog jezika.'},
  {kat:'ep',term:'Proem',def:'Uvodni dio epa koji najavljuje temu i zaziva pomoć (invokacija). U Juditi: početak I. pjevanja gdje Marulić najavljuje priču i zaziva čitatelja.'},
  {kat:'stih',term:'Polustih (hemistih)',def:'Polovica stiha odvojena cezurom. U dvanaestercu: dva hemistiha od 6 slogova. <em>„Ki hoće slišati"</em> / <em>„čudesa Božja starim"</em> — dva hemistiha.'},
];

let pojm2Active = 'all';

function renderPojm2() {
  const grid = document.getElementById('pojm-grid2');
  if (!grid) return;
  const show = pojm2Active === 'all' ? POJM_DATA2 : POJM_DATA2.filter(p => p.kat === pojm2Active);
  grid.innerHTML = show.map(p => \`
    <div class="pojm-card" data-cat="\${p.kat}" onclick="this.classList.toggle('flip')">
      <div class="pojm-front">
        <div class="pojm-term">\${p.term}</div>
        <div class="pojm-hint">→ klikni</div>
      </div>
      <div class="pojm-back">
        <div class="pojm-def">\${p.def}</div>
      </div>
    </div>
  \`).join('');
}

function pojmFilter2(cat, btn) {
  document.querySelectorAll('.pojm-filter').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  pojm2Active = cat;
  renderPojm2();
  // Also update flashcard array if in FC mode
  if(pj2Data.length === 0 || pojm2Active !== cat) pj2Build();
}

renderPojm2();

/* ═══════════════════════════════════
   POJMOVNIK FLASHCARD MODE (H11 pj2*)
═══════════════════════════════════ */
let pj2Idx=0, pj2Data=[], pj2Seen={};

function pj2Build(){
  const src = pojm2Active==='all' ? POJM_DATA2 : POJM_DATA2.filter(p=>p.kat===pojm2Active);
  pj2Data = src;
  pj2Idx = 0;
  pj2Seen = {};
  pj2Render();
}

function pj2Render(){
  if(!pj2Data.length) return;
  const p = pj2Data[pj2Idx];
  const scene = document.getElementById('fc-scene2');
  const inner = document.getElementById('fc-inner2');
  if(scene) scene.classList.remove('flipped');
  if(inner) inner.style.transform='';

  const cat = document.getElementById('fc-cat2');
  const term = document.getElementById('fc-term2');
  const def = document.getElementById('fc-def2');
  const counter = document.getElementById('fc-counter2');
  const prev = document.getElementById('fc-prev2');
  const next = document.getElementById('fc-next2');

  if(cat) cat.textContent = p.kat.toUpperCase();
  if(term) term.textContent = p.term;
  if(def) def.innerHTML = p.def;
  if(counter) counter.textContent = (pj2Idx+1)+' / '+pj2Data.length;
  if(prev) prev.disabled = pj2Idx === 0;
  if(next) next.disabled = pj2Idx === pj2Data.length-1;

  pj2Seen[pj2Idx] = true;
  pj2RenderDots();
}

function pj2RenderDots(){
  const prog = document.getElementById('fc-progress2');
  if(!prog || pj2Data.length > 20) return;
  prog.innerHTML = pj2Data.map((_,i)=>\`<div class="fc-dot\${pj2Seen[i]?' seen':''}\${i===pj2Idx?' known':''}"></div>\`).join('');
}

function pj2Flip(){
  const scene = document.getElementById('fc-scene2');
  if(scene) scene.classList.toggle('flipped');
}

function pj2Next(){
  if(pj2Idx < pj2Data.length-1){ pj2Idx++; pj2Render(); }
}

function pj2Prev(){
  if(pj2Idx > 0){ pj2Idx--; pj2Render(); }
}

function setPojmMode2(mode){
  const gw = document.getElementById('grid-wrap2');
  const fw = document.getElementById('fc-wrap2');
  const mb1 = document.getElementById('mode-grid');
  const mb2 = document.getElementById('mode-fc');
  if(mode==='fc'){
    if(gw) gw.style.display='none';
    if(fw){ fw.style.display='flex'; }
    if(mb1) mb1.classList.remove('on');
    if(mb2) mb2.classList.add('on');
    pj2Build();
    document.onkeydown = function(e){
      if(e.key==='ArrowRight') pj2Next();
      else if(e.key==='ArrowLeft') pj2Prev();
      else if(e.key===' '||e.key==='Enter'){ e.preventDefault(); pj2Flip(); }
    };
  } else {
    if(gw) gw.style.display='';
    if(fw) fw.style.display='none';
    if(mb1) mb1.classList.add('on');
    if(mb2) mb2.classList.remove('on');
    document.onkeydown = null;
  }
}

/* ═══════════════════════════════════
   KEYBOARD SHORTCUTS
═══════════════════════════════════ */
(function(){
  let helpShown=false;
  document.addEventListener('keydown', function(e){
    // Ignore when typing in inputs/textareas
    const target=e.target.tagName;
    if(target==='INPUT'||target==='TEXTAREA'||e.target.isContentEditable)return;
    
    const activeTab=Array.from(document.querySelectorAll('.tab')).findIndex(t=>t.classList.contains('on'));
    
    // Arrow navigation between tabs
    if(e.key==='ArrowRight'&&activeTab<7){
      e.preventDefault();
      sw(activeTab+1);
    } else if(e.key==='ArrowLeft'&&activeTab>0){
      e.preventDefault();
      sw(activeTab-1);
    }
    // Number keys 1-8 for direct tab access
    else if(/^[1-8]$/.test(e.key)){
      e.preventDefault();
      sw(parseInt(e.key)-1);
    }
    // ? for help
    else if(e.key==='?'){
      e.preventDefault();
      if(helpShown){
        document.getElementById('kbd-help')?.remove();
        helpShown=false;
        return;
      }
      const help=document.createElement('div');
      help.id='kbd-help';
      help.style.cssText='position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:var(--ele);border:1px solid var(--gold);border-radius:var(--r3);padding:24px 28px;z-index:500;box-shadow:0 8px 40px rgba(0,0,0,.6);max-width:90vw';
      help.innerHTML=\`
        <h3 style="margin-bottom:12px;color:var(--gold);font-family:var(--display)">⌨ Kratice</h3>
        <div style="display:grid;grid-template-columns:auto 1fr;gap:8px 14px;font-family:var(--serif);font-size:13px">
          <span><span class="kbd">←</span> <span class="kbd">→</span></span><span>Prethodni / Sljedeći tab</span>
          <span><span class="kbd">1</span> – <span class="kbd">8</span></span><span>Skok direktno na tab</span>
          <span><span class="kbd">?</span></span><span>Prikaži / sakrij ovu pomoć</span>
          <span><span class="kbd">Esc</span></span><span>Zatvori dialog / izađi iz polja</span>
          <span><span class="kbd">Ctrl</span>+<span class="kbd">P</span></span><span>Print / PDF</span>
        </div>
        <div style="margin-top:14px;text-align:right">
          <button class="fcb" onclick="document.getElementById('kbd-help').remove();">Zatvori</button>
        </div>
      \`;
      document.body.appendChild(help);
      helpShown=true;
    }
    // Escape closes help/sidebar
    else if(e.key==='Escape'){
      document.getElementById('kbd-help')?.remove();
      helpShown=false;
      closeSb();
    }
  });
})();

if('IntersectionObserver' in window){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.style.opacity='1';
        e.target.style.transform='translateY(0)';
      }
    });
  },{threshold:0.1});
  
  document.querySelectorAll('.scene-card,.ac,.box-key,.fq,.tbl-wrap').forEach(el=>{
    el.style.opacity='0';
    el.style.transform='translateY(12px)';
    el.style.transition='opacity .4s ease, transform .4s ease';
    obs.observe(el);
  });
}

function toggleSidebar(){var s=document.getElementById('sidebar'),o=document.getElementById('overlay');if(s)s.classList.toggle('mobile-open');if(o)o.classList.toggle('show')}
;
/* TIER_SYSTEM_JS_INJECTED */
/**
 * Maturiraj.hr — Tier Helper Module
 * 
 * Globalni JS modul za upravljanje tier sustavom (Free / Standard / Pro).
 * Koristi se u svim chapterima i pricing page-u.
 * 
 * 🚨 PRODUCTION TODO:
 * - Tier provjera mora ići preko Supabase (auth.uid() → user_subscriptions tablica)
 * - Trenutno mock kroz localStorage 'mt.pro_mode' = 'free' | 'standard' | 'pro'
 * - Dnevni limiti se moraju validirati na backendu
 * 
 * Verzija: 1.0
 * Autor: Maturiraj.hr team
 */

(function(window) {
  'use strict';

  // ════════════════════════════════════════════════
  // CONFIG — Tier Definicija
  // ════════════════════════════════════════════════
  
  const TIER_CONFIG = {
    free: {
      name: 'Free',
      label: '🆓 Free',
      price: 0,
      color: 'var(--t3, #888)',
      features: {
        // TEORIJA — sve free
        all_theory: true,
        all_quizzes: true,
        ncvvo_errors: true,
        glossary: true,
        cheatsheet: true,
        diagnostics: true,
        // ALATI — sve free
        score_calculator: true,
        plagiarism_detector: true,
        objectivity_detector: true,
        speed_drill: true,
        proofreading_game: true,
        // WORKSPACE — limited
        essay_workspace: true,
        summary_workspace: true,
        max_essays: 1,            // 1 esej max
        max_summaries: 1,         // 1 sažetak max
        all_essay_models: false,  // 1 vidljiv
        all_summary_models: false,
        export_workspace: false,  // bez exporta
        // SIMULATORI — 0 demo
        discere_simulators: false,
        max_simulators: 0,
        // PLAN UČENJA — pregled
        study_plan_preview: true,
        study_plan_full: false,
        // STATS
        streak_tracking: false,
        heatmap: false,
        progress_analytics: false,
        // PARENT
        parent_dashboard: false,
        // AI — sve zaključano
        ai_chat: false,
        ai_feedback: false,
        ai_personal_plan: false,
        // PRIJEMNI
        prijemni: false,
      },
      ai_limits: {
        feedback_per_day: 0,
        chat_per_day: 0,
      }
    },
    
    standard: {
      name: 'Standard',
      label: '⭐ Standard',
      price: 9.99,
      color: 'var(--blue, #4a90d9)',
      features: {
        // TEORIJA — sve
        all_theory: true,
        all_quizzes: true,
        ncvvo_errors: true,
        glossary: true,
        cheatsheet: true,
        diagnostics: true,
        // ALATI — sve
        score_calculator: true,
        plagiarism_detector: true,
        objectivity_detector: true,
        speed_drill: true,
        proofreading_game: true,
        // WORKSPACE — full
        essay_workspace: true,
        summary_workspace: true,
        max_essays: -1,           // unlimited
        max_summaries: -1,        // unlimited
        all_essay_models: true,
        all_summary_models: true,
        export_workspace: true,
        // SIMULATORI — svi (70 ispita)
        discere_simulators: true,
        max_simulators: -1,
        // PLAN UČENJA — full
        study_plan_preview: true,
        study_plan_full: true,
        // STATS
        streak_tracking: true,
        heatmap: true,
        progress_analytics: true,
        // PARENT
        parent_dashboard: true,
        // AI — sve zaključano (Standard NEMA AI!)
        ai_chat: false,
        ai_feedback: false,
        ai_personal_plan: false,
        // PRIJEMNI
        prijemni: false,
      },
      ai_limits: {
        feedback_per_day: 0,
        chat_per_day: 0,
      }
    },
    
    pro: {
      name: 'Pro',
      label: '💎 Pro',
      price: 19.99,
      color: 'var(--gold, #e9b446)',
      features: {
        // Sve iz Standard
        all_theory: true,
        all_quizzes: true,
        ncvvo_errors: true,
        glossary: true,
        cheatsheet: true,
        diagnostics: true,
        score_calculator: true,
        plagiarism_detector: true,
        objectivity_detector: true,
        speed_drill: true,
        proofreading_game: true,
        essay_workspace: true,
        summary_workspace: true,
        max_essays: -1,
        max_summaries: -1,
        all_essay_models: true,
        all_summary_models: true,
        export_workspace: true,
        discere_simulators: true,
        max_simulators: -1,
        study_plan_preview: true,
        study_plan_full: true,
        streak_tracking: true,
        heatmap: true,
        progress_analytics: true,
        parent_dashboard: true,
        // AI — sve unlocked (PRO ONLY)
        ai_chat: true,
        ai_feedback: true,
        ai_personal_plan: true,
        // PRIJEMNI — Pro only
        prijemni: true,
      },
      ai_limits: {
        feedback_per_day: 20,    // 2B odluka
        chat_per_day: 30,        // 2B odluka
        plan_refresh_per_week: 1,
      }
    }
  };

  // ════════════════════════════════════════════════
  // STORAGE KEYS
  // ════════════════════════════════════════════════
  
  const STORAGE_KEYS = {
    tier: 'mt.pro_mode',
    daily_usage: 'mt.daily_usage',
    weekly_usage: 'mt.weekly_usage',
  };

  // ════════════════════════════════════════════════
  // CORE API
  // ════════════════════════════════════════════════
  
  /**
   * Vraća trenutni tier korisnika.
   * @returns {'free' | 'standard' | 'pro'}
   */
  function getTier() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.tier);
      if (stored === 'pro' || stored === 'standard') return stored;
      return 'free';
    } catch (e) {
      return 'free';
    }
  }

  /**
   * Postavlja tier (mock — produkcija ovo radi preko Supabase).
   */
  function setTier(tier) {
    if (!['free', 'standard', 'pro'].includes(tier)) {
      console.error('[tier_helper] Invalid tier:', tier);
      return false;
    }
    try {
      if (tier === 'free') {
        localStorage.removeItem(STORAGE_KEYS.tier);
      } else {
        localStorage.setItem(STORAGE_KEYS.tier, tier);
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * Toggle tier (free → standard → pro → free)
   * Koristi se u dev mode-u.
   */
  function toggleTier() {
    const current = getTier();
    const next = current === 'free' ? 'standard' : (current === 'standard' ? 'pro' : 'free');
    setTier(next);
    return next;
  }

  /**
   * Provjerava ima li korisnik feature.
   * @param {string} feature - npr 'ai_feedback', 'all_simulators'
   * @returns {boolean}
   */
  function hasFeature(feature) {
    const tier = getTier();
    const config = TIER_CONFIG[tier];
    if (!config) return false;
    return config.features[feature] === true;
  }

  /**
   * Vraća konfiguraciju tier-a (label, cijena, boja).
   * @param {string} tier - opcionalno; ako nije zadan, vraća za current.
   */
  function getTierConfig(tier) {
    return TIER_CONFIG[tier || getTier()] || TIER_CONFIG.free;
  }

  /**
   * Vraća vrijednost numeričkog limita feature-a.
   * @param {string} feature - npr 'max_essays', 'max_simulators'
   * @returns {number} -1 = unlimited, 0 = nema, X = točno X
   */
  function getLimit(feature) {
    const tier = getTier();
    const config = TIER_CONFIG[tier];
    if (!config) return 0;
    const val = config.features[feature];
    if (val === true) return -1; // unlimited
    if (val === false) return 0;
    return val;
  }

  /**
   * Vraća AI limit (feedback / chat / plan).
   * @param {string} type - 'feedback' | 'chat' | 'plan'
   */
  function getAILimit(type) {
    const tier = getTier();
    const config = TIER_CONFIG[tier];
    if (!config || !config.ai_limits) return 0;
    
    const map = {
      feedback: 'feedback_per_day',
      chat: 'chat_per_day',
      plan: 'plan_refresh_per_week'
    };
    return config.ai_limits[map[type]] || 0;
  }

  // ════════════════════════════════════════════════
  // USAGE TRACKING
  // ════════════════════════════════════════════════
  
  /**
   * Vraća današnju potrošnju feature-a.
   */
  function getDailyUsage(feature) {
    try {
      const today = new Date().toISOString().split('T')[0];
      const stored = localStorage.getItem(STORAGE_KEYS.daily_usage);
      if (!stored) return 0;
      const data = JSON.parse(stored);
      if (data.date !== today) return 0;
      return data.usage[feature] || 0;
    } catch (e) {
      return 0;
    }
  }

  /**
   * Inkrementira potrošnju feature-a.
   */
  function incrementDailyUsage(feature) {
    const today = new Date().toISOString().split('T')[0];
    let data = { date: today, usage: {} };
    
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.daily_usage);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.date === today) data = parsed;
      }
    } catch (e) {}
    
    data.usage[feature] = (data.usage[feature] || 0) + 1;
    
    try {
      localStorage.setItem(STORAGE_KEYS.daily_usage, JSON.stringify(data));
    } catch (e) {}
    
    return data.usage[feature];
  }

  /**
   * Provjerava može li korisnik koristiti AI feature (limit + tier check).
   * @returns {{ allowed: boolean, reason: string, used: number, limit: number }}
   */
  function canUseAI(type) {
    const tier = getTier();
    const limit = getAILimit(type);
    const used = getDailyUsage('ai_' + type);
    
    if (limit === 0) {
      return {
        allowed: false,
        reason: 'tier_locked',
        tier_required: 'pro',
        used: 0,
        limit: 0
      };
    }
    
    if (used >= limit) {
      return {
        allowed: false,
        reason: 'daily_limit_reached',
        tier_required: tier,
        used,
        limit
      };
    }
    
    return {
      allowed: true,
      reason: 'ok',
      used,
      limit
    };
  }

  // ════════════════════════════════════════════════
  // PAYWALL MODAL
  // ════════════════════════════════════════════════
  
  /**
   * Prikazuje paywall modal.
   * @param {object} options
   * @param {string} options.feature - naziv feature-a
   * @param {string} options.requiredTier - 'standard' | 'pro'
   * @param {string} options.reason - razlog (free_limit / tier_locked / daily_limit)
   */
  function showPaywall(options) {
    const opts = options || {};
    const requiredTier = opts.requiredTier || 'standard';
    const reason = opts.reason || 'feature_locked';
    const feature = opts.feature || 'Ovaj feature';
    
    // Remove existing modal
    const existing = document.getElementById('mt-paywall-modal');
    if (existing) existing.remove();
    
    const reasonText = {
      free_limit: 'Iskoristio si Free limit za ovaj feature.',
      tier_locked: 'Ovaj feature je dostupan u Standard ili Pro pretplati.',
      daily_limit: 'Iskoristio si svoj dnevni limit. Vrati se sutra ili upgradaj na viši tier.',
      feature_locked: 'Ovaj feature zahtijeva pretplatu.'
    };
    
    const modal = document.createElement('div');
    modal.id = 'mt-paywall-modal';
    modal.className = 'mt-paywall-overlay';
    modal.innerHTML = \`
      <div class="mt-paywall-modal" onclick="event.stopPropagation()">
        <button type="button" class="mt-paywall-close" onclick="MT.Tier.closePaywall()" aria-label="Zatvori">×</button>
        
        <div class="mt-paywall-header">
          <div class="mt-paywall-icon">\${requiredTier === 'pro' ? '💎' : '⭐'}</div>
          <div class="mt-paywall-title">\${feature}</div>
          <div class="mt-paywall-subtitle">\${reasonText[reason] || reasonText.feature_locked}</div>
        </div>
        
        <div class="mt-paywall-tiers">
          \${requiredTier !== 'pro' ? \`
          <div class="mt-paywall-tier mt-paywall-tier-standard \${requiredTier === 'standard' ? 'mt-paywall-tier-recommended' : ''}">
            \${requiredTier === 'standard' ? '<div class="mt-paywall-badge">Preporučeno</div>' : ''}
            <div class="mt-paywall-tier-name">⭐ Standard</div>
            <div class="mt-paywall-tier-price">9,99€<span>/mj</span></div>
            <ul class="mt-paywall-tier-features">
              <li>✅ Cijela teorija + kvizovi</li>
              <li>✅ Svi Discere simulatori (70 ispita)</li>
              <li>✅ Sve modelne eseje (9) + sažetke (10)</li>
              <li>✅ Neograničeno u Workspace</li>
              <li>✅ Parent dashboard</li>
              <li>✅ Streak + heatmap + analitika</li>
              <li>❌ Bez AI features</li>
            </ul>
            <button type="button" class="mt-paywall-cta" onclick="MT.Tier.subscribe('standard')">
              Pretplati se na Standard
            </button>
          </div>
          \` : ''}
          
          <div class="mt-paywall-tier mt-paywall-tier-pro \${requiredTier === 'pro' ? 'mt-paywall-tier-recommended' : ''}">
            \${requiredTier === 'pro' ? '<div class="mt-paywall-badge">Preporučeno</div>' : ''}
            <div class="mt-paywall-tier-name">💎 Pro</div>
            <div class="mt-paywall-tier-price">19,99€<span>/mj</span></div>
            <ul class="mt-paywall-tier-features">
              <li>✅ Sve iz Standard</li>
              <li>✅ <strong>🤖 AI Profesor (chat) — 30/dan</strong></li>
              <li>✅ <strong>🤖 AI Feedback za eseje + sažetke — 20/dan</strong></li>
              <li>✅ <strong>Personalizirani plan učenja</strong></li>
              <li>✅ <strong>Prijemni priprema</strong></li>
              <li>✅ Priority AI queue</li>
            </ul>
            <button type="button" class="mt-paywall-cta mt-paywall-cta-pro" onclick="MT.Tier.subscribe('pro')">
              Pretplati se na Pro
            </button>
          </div>
        </div>
        
        <div class="mt-paywall-footer">
          <a href="/pretplata" class="mt-paywall-link">Vidi sve tier opcije →</a>
          <span class="mt-paywall-divider">·</span>
          <button type="button" class="mt-paywall-link mt-paywall-link-btn" onclick="MT.Tier.toggleTierDevMode()">
            🧪 Dev: Toggle tier (trenutno: \${getTier().toUpperCase()})
          </button>
        </div>
      </div>
    \`;
    
    modal.addEventListener('click', closePaywall);
    document.body.appendChild(modal);
    
    // Disable body scroll
    document.body.style.overflow = 'hidden';
  }

  function closePaywall() {
    const modal = document.getElementById('mt-paywall-modal');
    if (modal) {
      modal.remove();
      document.body.style.overflow = '';
    }
  }

  function subscribe(tier) {
    // 🚨 PRODUCTION TODO: Stripe Checkout integration
    // Plan: Stripe Checkout Session → success_url: /pretplata/success?tier=X
    // Backend writes to Supabase user_subscriptions, then redirects back
    
    // For now: mock behavior — set tier, close paywall, reload
    if (confirm(\`🚧 Pretplata u izradi (Stripe checkout uskoro).\\n\\nMock: Postaviti tier na \${tier === 'pro' ? 'Pro 19,99€' : 'Standard 9,99€'}/mj?\\n\\nKliknite OK za mock pretplatu.\`)) {
      setTier(tier);
      closePaywall();
      location.reload();
    }
  }

  function toggleTierDevMode() {
    const next = toggleTier();
    alert(\`🧪 Dev mode — tier postavljen na: \${next.toUpperCase()}\`);
    closePaywall();
    location.reload();
  }

  // ════════════════════════════════════════════════
  // SIDEBAR TIER BADGE
  // ════════════════════════════════════════════════
  
  /**
   * Injectsa tier badge u sidebar (ako postoji).
   */
  function injectSidebarBadge() {
    const sidebar = document.querySelector('.sidebar') || document.querySelector('nav.sb');
    if (!sidebar) return;
    
    // Check if already exists
    if (document.getElementById('mt-tier-badge')) return;
    
    const tier = getTier();
    const config = getTierConfig(tier);
    
    const badge = document.createElement('div');
    badge.id = 'mt-tier-badge';
    badge.className = 'mt-tier-badge mt-tier-badge-' + tier;
    badge.innerHTML = \`
      <div class="mt-tier-badge-label">\${config.label}</div>
      \${tier === 'free' ? '<button type="button" class="mt-tier-badge-cta" onclick="MT.Tier.openPricing()">Upgrade →</button>' : ''}
    \`;
    
    // Insert at top of sidebar
    const firstChild = sidebar.firstElementChild;
    if (firstChild) {
      sidebar.insertBefore(badge, firstChild);
    } else {
      sidebar.appendChild(badge);
    }
  }

  function openPricing() {
    location.href = '/pretplata';
  }

  // ════════════════════════════════════════════════
  // PUBLIC API
  // ════════════════════════════════════════════════
  
  window.MT = window.MT || {};
  window.MT.Tier = {
    // Core
    getTier,
    setTier,
    toggleTier,
    getTierConfig,
    
    // Features
    hasFeature,
    getLimit,
    getAILimit,
    
    // Usage
    getDailyUsage,
    incrementDailyUsage,
    canUseAI,
    
    // Paywall
    showPaywall,
    closePaywall,
    subscribe,
    toggleTierDevMode,
    
    // UI
    injectSidebarBadge,
    openPricing,
    
    // Config (read-only)
    CONFIG: TIER_CONFIG
  };

  // Auto-inject sidebar badge on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectSidebarBadge);
  } else {
    injectSidebarBadge();
  }

})(window);
;
/* UPDATE_PROGRESS_INJECTED */

function updateProgress(pct){
  var p=Math.max(5,pct);
  var pb=document.getElementById('prog-bar'); if(pb) pb.style.width=p+'%';
  var pct2=document.getElementById('prog-pct'); if(pct2) pct2.textContent=p+'%';
  var hp=document.getElementById('hero-pb'); if(hp) hp.style.width=p+'%';
  var hl=document.getElementById('hero-prog-lbl'); if(hl) hl.textContent=p+'% završeno';
  try { localStorage.setItem('mt.hrv.h12.prog', p); } catch(e){}
}
;
/* CIT_SEARCH_INJECTED */

function citSearch(query){
  var q = (query || '').toLowerCase().trim();
  var quotes = document.querySelectorAll('.featured-quote');
  var visible = 0;
  quotes.forEach(function(qt){
    var text = qt.textContent.toLowerCase();
    var match = !q || text.indexOf(q) !== -1;
    qt.style.display = match ? '' : 'none';
    if (match) visible++;
  });
  // Also search in box-key items
  var boxes = document.querySelectorAll('#cit-grid2, #cit-grid');
  // Update count if present
  var counter = document.getElementById('cit-stats');
  if (counter) counter.textContent = visible + ' citata';
}

/* H11 parity: explicit pro-gate overlay toggle by tier */
function h12DetectTier(){
  try{
    if(window.MT && window.MT.Tier && typeof window.MT.Tier.getTier === 'function'){
      return window.MT.Tier.getTier();
    }
  }catch(e){}
  var override = null;
  try { override = localStorage.getItem('mt.user.tier'); } catch(e){}
  return override || 'free';
}
function h12ApplyGateState(){
  var tier = (document.body.getAttribute('data-tier') || h12DetectTier() || 'free');
  var hidden = tier === 'standard' || tier === 'pro';
  document.querySelectorAll('.pro-gate-overlay').forEach(function(ov){
    ov.setAttribute('data-gate-state', hidden ? 'hidden' : 'visible');
  });
}
function h12SyncTierAndGateState(){
  document.body.setAttribute('data-tier', h12DetectTier());
  h12ApplyGateState();
}
function h12WrapApplyTier(){
  var fn = window.applyTier;
  if(typeof fn !== 'function' || fn.__h12GateWrapped) return;
  var wrapped = function(){
    var out = fn.apply(this, arguments);
    h12SyncTierAndGateState();
    return out;
  };
  wrapped.__h12GateWrapped = true;
  window.applyTier = wrapped;
}
function h12GateParityBootstrap(){
  h12WrapApplyTier();
  h12SyncTierAndGateState();
}

function setTierLegacy(t){
  try { localStorage.setItem('mt.user.tier', t); } catch(e){}
  h12GateParityBootstrap();
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', h12GateParityBootstrap);
} else {
  h12GateParityBootstrap();
}
window.addEventListener('load', h12GateParityBootstrap);
window.addEventListener('storage', function(ev){
  if(ev && (ev.key === 'mt.pro_mode' || ev.key === 'mt.user.tier')){
    h12GateParityBootstrap();
  }
});
(function h12GateParityInit(){
  var tries = 0;
  function run(){
    tries++;
    if(!document.body){
      if(tries < 40) setTimeout(run, 100);
      return;
    }
    h12GateParityBootstrap();
  }
  run();
})();
setTimeout(function(){
  try{ h12GateParityBootstrap(); }catch(e){}
}, 0);
`;


export default function H12Chapter() {
  useEffect(() => {
    let roots = [];
    const mountPortal = (id, el) => {
      const div = document.getElementById(id);
      if (!div) return;
      const root = createRoot(div);
      root.render(el);
      roots.push(root);
    };

    const raf = requestAnimationFrame(() => {
      mountPortal('h12-add-heroquote', <HeroQuoteJudita />);
      mountPortal('h12-add-stats', <StatCardsJudita />);
      mountPortal('h12-add-timeline', <TimelineMarulic />);
      mountPortal('h12-add-compare', <CompareAlegorijaJudita />);
      mountPortal('h12-add-pop', <PopKulturaMarulic />);
      mountPortal('h12-add-pjevanja', <AccordionPjevanja />);
      mountPortal('h12-add-esej', <AccordionEsejBridgeH12 />);
      mountPortal('h12-react-auth-box', <NcvvoAuthBoxH12 />);
      mountPortal('h12-react-discere-banner-primary', <DiscereBannerPrimaryH12 />);
      mountPortal('h12-react-video-card-primary', <VideoCardPrimaryH12 />);
      mountPortal('h12-react-video-card-secondary', <VideoCardSecondaryH12 />);
      mountPortal('h12-react-video-card-tertiary', <VideoCardTertiaryH12 />);
      mountPortal('h12-react-video-card-quaternary', <VideoCardQuaternaryH12 />);
      mountPortal('h12-react-author-marulic', <AuthorProfileMarulicH12 />);
      mountPortal('l3', <CitatnikH12 />);
      mountPortal('l4', <PojmovnikH12 />);
    });

    return () => {
      cancelAnimationFrame(raf);
      setTimeout(() => roots.forEach((r) => r?.unmount()), 0);
    };
  }, []);

  return (
    <ChapterWrapper
      chapterId="H12"
      bodyHtml={BODY_HTML}
      stylesCss={STYLES_CSS}
      scriptsJs={SCRIPTS_JS}
    />
  );
}

export const HRV_POGAVLJE_12 = null
