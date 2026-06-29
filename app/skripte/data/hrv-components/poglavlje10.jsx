/**
 * H10 — Maturiraj.hr — Hrvatski H10 · Postmoderna
 * Auto-generated from Maturiraj_Hrvatski_H10.html
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
import CitatnikH10 from './H10_CitatnikTab';
import PojmovnikH10 from './H10_PojmovnikTab';
import {
  HeroQuotePostmoderna,
  ComparePostModModerna,
  AuthorCardEco,
  TimelinePostmoderna,
  PopKulturaPostmoderna,
  StatCardsImeRuze,
  AuthorCardPavličić,
  CompareEcoPavličić,
  AccordionEsejTezeH10,
} from './H10_Components';

const BODY_HTML = `<a href="#main" class="skip-link">Preskoči na sadržaj</a>


<!-- Scroll progress bar (v2 upgrade) -->
<div class="scroll-progress" id="scroll-progress" aria-hidden="true"></div>

<!-- SVG tooltip (v3.5) -->
<div class="svg-tt" id="svg-tt" role="tooltip" aria-hidden="true">
  <div class="svg-tt-ttl" id="svg-tt-ttl"></div>
  <div class="svg-tt-txt" id="svg-tt-txt"></div>
</div>

<!-- Back-to-top floating button -->
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

      <button type="submit" class="modal-submit" id="fb-submit" style="width:100%;margin-top:14px">Pošalji ›</button>
      <div class="modal-small" style="margin-top:10px">Tvoj e-mail čuvamo samo za odgovor. Ne šaljemo ništa drugo.</div>
    </form>
  </div>
</div>

<div class="sb-hamburger" id="hamburger" onclick="toggleSidebar()" aria-label="Otvori izbornik"><span></span><span></span><span></span></div>
<div class="sb-overlay" id="overlay" onclick="closeSidebar()"></div>

<div class="shell">

<!-- == SIDEBAR == -->
<nav class="sidebar" id="sidebar">
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
    <div class="sb-prog-label"><span>napredak</span><span id="prog-pct">0%</span></div>
    <div class="sb-prog-track"><div class="sb-prog-bar" id="prog-bar" style="width:0%"></div></div>
  </div>

  <!-- == SVJETSKA KNJIŽEVNOST == -->
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

  <!-- == HRVATSKA KNJIŽEVNOST == -->
  <div class="sb-era">// Hrvatska književnost</div>
  <a class="sb-item" data-code="h11" href="/skripte/hrv/h11"><span class="sb-dot"></span>H11 · Stari hrv. pisci</a>
  <a class="sb-item" data-code="h12" href="/skripte/hrv/h12"><span class="sb-dot"></span>H12 · Marulić i hrv. rens.</a>
  <a class="sb-item" data-code="h13" href="/skripte/hrv/h13"><span class="sb-dot"></span>H13 · Hrv. barok — Gundulić</a>
  <a class="sb-item" data-code="h14" href="/skripte/hrv/h14"><span class="sb-dot"></span>H14 · Preporod</a>
  <a class="sb-item" data-code="h15" href="/skripte/hrv/h15"><span class="sb-dot"></span>H15 · Šenoa i realizam</a>
  <a class="sb-item" data-code="h16" href="/skripte/hrv/h16"><span class="sb-dot"></span>H16 · Krleža i moderna</a>

  <!-- == STIL I IZRAZ == -->
  <div class="sb-era">// Stil i izraz</div>
  <a class="sb-item" data-code="h17" href="/skripte/hrv/h17"><span class="sb-dot"></span>H17 · Stilske figure</a>
  <a class="sb-item" data-code="h18" href="/skripte/hrv/h18"><span class="sb-dot"></span>H18 · Versifikacija</a>

  <!-- == JEZIKOSLOVLJE == -->
  <div class="sb-era">// Jezikoslovlje</div>
  <a class="sb-item" data-code="h19" href="/skripte/hrv/h19"><span class="sb-dot"></span>H19 · Fonetika i fonologija</a>
  <a class="sb-item" data-code="h20" href="/skripte/hrv/h20"><span class="sb-dot"></span>H20 · Morfologija</a>
  <a class="sb-item" data-code="h21" href="/skripte/hrv/h21"><span class="sb-dot"></span>H21 · Sintaksa</a>
  <a class="sb-item" data-code="h22" href="/skripte/hrv/h22"><span class="sb-dot"></span>H22 · Leksikologija</a>
  <a class="sb-item" data-code="h23" href="/skripte/hrv/h23"><span class="sb-dot"></span>H23 · Povijest hrv. jezika</a>
  <a class="sb-item" data-code="h24" href="/skripte/hrv/h24"><span class="sb-dot"></span>H24 · Hrv. narječja</a>

  <!-- == PRAVOPIS == -->
  <div class="sb-era">// Pravopis</div>
  <a class="sb-item" data-code="h25" href="/skripte/hrv/h25"><span class="sb-dot"></span>H25 · Pravopisna pravila</a>
  <a class="sb-item" data-code="h26" href="/skripte/hrv/h26"><span class="sb-dot"></span>H26 · Interpunkcija</a>

  <!-- == PISANJE == -->
  <div class="sb-era">// Pisanje</div>
  <a class="sb-item" data-code="h27" href="/skripte/hrv/h27"><span class="sb-dot"></span>H27 · Školski esej</a>
  <a class="sb-item" data-code="h28" href="/skripte/hrv/h28"><span class="sb-dot"></span>H28 · Sažetak</a>

  <!-- == DODATNO — obvezatna djela (deep-dive za esej 2026 + čitanje) == -->
  <div class="sb-era sb-era-d">// Dodatno · obvezatna djela</div>
  <div class="sb-d-meta">Deep-dive za esej (30 bod) + čitanje (20 bod)</div>

  <a class="sb-item sb-d" data-code="d01" href="/skripte/hrv"><span class="sb-dot"></span>D01 · Sofoklo · Antigona</a>
  <a class="sb-item sb-d" data-code="d02" data-star="2026" href="/skripte/hrv"><span class="sb-dot"></span>D02 · Petrarca · izbor</a>
  <a class="sb-item sb-d" data-code="d03" href="/skripte/hrv"><span class="sb-dot"></span>D03 · Shakespeare · Hamlet</a>
  <a class="sb-item sb-d" data-code="d04" data-star="2026" href="/skripte/hrv"><span class="sb-dot"></span>D04 · Calderón · Život je san</a>
  <a class="sb-item sb-d" data-code="d05" href="/skripte/hrv"><span class="sb-dot"></span>D05 · Moliere · Škrtac</a>
  <a class="sb-item sb-d" data-code="d06" data-star="2026" href="/skripte/hrv"><span class="sb-dot"></span>D06 · Goethe · Werther</a>
  <a class="sb-item sb-d" data-code="d07" href="/skripte/hrv"><span class="sb-dot"></span>D07 · Dostojevski · Zločin i kazna</a>
  <a class="sb-item sb-d" data-code="d08" href="/skripte/hrv"><span class="sb-dot"></span>D08 · Kafka · Preobražaj</a>
  <a class="sb-item sb-d" data-code="d09" href="/skripte/hrv"><span class="sb-dot"></span>D09 · Camus · Stranac</a>
  <a class="sb-item sb-d" data-code="d10" href="/skripte/hrv"><span class="sb-dot"></span>D10 · Baudelaire · Cvjetovi zla</a>
  <a class="sb-item sb-d" data-code="d11" href="/skripte/hrv"><span class="sb-dot"></span>D11 · Držić · Novela od Stanca</a>
  <a class="sb-item sb-d" data-code="d12" href="/skripte/hrv"><span class="sb-dot"></span>D12 · Marulić · Judita</a>
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
    <span id="sb-footer-pos">10 / 28</span> · <span id="sb-footer-title">postmoderna</span>
    <br>maturiraj.hr · hrvatski · v2
  </div>
</nav>

<!-- == MAIN == -->
<main class="main" id="main">
<div class="content-wrap">
  <div class="bc">
    <a class="bc-link" href="/">maturiraj.hr</a><span class="bc-sep">/</span>
    <a class="bc-link" href="/skripte/hrv">hrvatski</a><span class="bc-sep">/</span>
    <span class="bc-cur">H10 · Postmoderna</span>
    <span class="bc-sep bc-tab-sep">/</span>
    <span class="bc-tab" id="bc-tab">Teorija</span>
  </div>

  <!-- V3: RESTORE BANNER (unutar content-wrap) -->
  <div class="restore-banner" id="restore-banner">
    <div class="rb-txt">💾 Imaš <strong id="rb-progress-txt">spremljen napredak</strong> iz zadnje sesije</div>
    <div class="rb-actions">
      <button class="rb-btn primary" onclick="restoreProgress()">Nastavi gdje si stao</button>
      <button class="rb-btn secondary" onclick="dismissRestore()">Ispočetka</button>
    </div>
  </div>

  <!-- HERO -->
  <div class="hero">
    <div class="hero-orb-a"></div><div class="hero-orb-b"></div>
    <div class="hero-chapter">H10 &nbsp;·&nbsp; Svjetska i hrvatska književnost &nbsp;·&nbsp; Postmoderna</div>
    <h1 class="hero-title">Postmoderna<br><span>pojmovi u praksi</span></h1>
    <div class="hero-sub">Nakon velikih ideologija 20. stoljeća, književnost ulazi u <strong>postmodernu</strong> (svjetska oko 1960., hrvatska <b>1979.–1981.</b>). Osnovne teze: <em>svaka "Velika Priča" je sumnjiva; svaki tekst je napravljen od drugih tekstova; pisac se igra s tradicijom</em>. Pojmovi koji će te pratiti — <b>metafikcija, intertekstualnost, pastiš, parodija, fragmentacija, ironija, otvoreni kraj</b>. Djela — <em>Ime ruže</em> (Eco), <em>Večernji akt</em> (Pavličić), <em>Štefica Cvek</em> (Ugrešić). Teoretičari — Barthes, Lyotard, Kristeva, Derrida. <strong>Postmoderna nije obvezatna tema na maturi — ali pojmovi su zlatan alat za esej.</strong></div>
    <div class="hero-meta">
      <span class="hchip br">⏱️ 90 min</span>
      <span class="hchip go">🎯 Fokus: pojmovi + 2 djela</span>
      <span class="hchip te">📚 H10 postmoderna</span>
    </div>
    <div class="hero-progress-row">
      <div class="pt"><div class="pb" id="hero-pb" style="width:5%"></div></div>
      <span class="prog-label" id="hero-prog-lbl">5% završeno</span>
    </div>
  </div>

  <!-- == SOCIAL PROOF + COUNTDOWN =================
       Playbook P5.1 + P5.2 — trust + urgency
       Brojevi se renderiraju iz JS-a (vidi renderSocialProof)
  =================================================== -->
  <div class="social-proof" id="social-proof" aria-label="Statistika platforme"></div>

  <!-- Countdown se dinamički renderira iz JS-a -->
  <div class="countdown" id="countdown" aria-label="Do mature" style="display:none"></div>
  <!-- Print / dijeli (ujednačeno; PDF-export kartica i signup uklonjeni) -->
  <div class="mt-print-row" style="display:flex;gap:8px;flex-wrap:wrap;margin:0 0 16px">
    <button class="fcb" onclick="window.print()" style="font-size:10px" title="Ispis / Spremi kao PDF (Ctrl+P)">🖨 Ispis / PDF</button>
    <button class="fcb" onclick="navigator.share?navigator.share({title:document.title,url:window.location.href}):navigator.clipboard.writeText(window.location.href)" style="font-size:10px" title="Podijeli">📤 Dijeli</button>
  </div>

  <!-- TABS -->
  <div class="tabs" role="tablist" aria-label="Dijelovi poglavlja">
    <button class="tab on" onclick="sw(0)" role="tab" aria-selected="true" aria-controls="l0">📖 Teorija</button>
    <button class="tab" onclick="sw(1)" role="tab" aria-selected="false" aria-controls="l1">📖 Eco + Pavličić</button>
    <button class="tab" onclick="sw(2)" role="tab" aria-selected="false" aria-controls="l2">✍️ Esej alat</button>
    <button class="tab" onclick="sw(3)" role="tab" aria-selected="false" aria-controls="l3">💬 Citatnik</button>
    <button class="tab" onclick="sw(4)" role="tab" aria-selected="false" aria-controls="l4">📚 Pojmovnik</button>
    <button class="tab" onclick="sw(5)" role="tab" aria-selected="false" aria-controls="l5">⚡ Drill<span class="tab-lock">PRO</span></button>
    <button class="tab" onclick="sw(6)" role="tab" aria-selected="false" aria-controls="l6">🧠 Kviz<span class="tab-lock">PRO</span></button>
    <button class="tab" onclick="sw(7)" role="tab" aria-selected="false" aria-controls="l7">✅ Checkpoint<span class="tab-lock">PRO</span></button>
  </div>

  <!-- ========================
       CONTENT LAYERS — 7 TABS
       ======================== -->
        <!-- ========================
       TAB 0 · TEORIJA
       ======================== -->
  <div class="layer on" id="l0" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">epoha</span>
      <span class="pill p-go">postmoderna</span>
      <span class="pill p-r">1960.–danas</span>
      <span class="pill p-t">pojmovi + stil + kontekst</span>
    </div>

    <div class="featured-quote">
      <div class="fq-mark">«</div>
      <div class="fq-body">
        <div class="fq-text">Knjiga je mreža citata iz bezbrojnih središta kulture.</div>
        <div class="fq-meta">— Roland Barthes, <em>Smrt autora</em>, 1967. · temeljna teza postmoderne</div>
      </div>
      <button type="button" class="fq-copy" onclick="fqCopyQuote(this)" aria-label="Kopiraj citat" title="Kopiraj citat">⎘</button>
    </div>

    <div id="h10-p1"></div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Postmoderna — književnost koja zna da je književnost</div>
      <div class="box-int-txt">
        <strong>Postmoderna</strong> (od oko <b>1960.</b>, u Hrvatskoj od <b>1979.–1981.</b>) nije epoha poput baroka ili realizma — ona je <b>stav</b>. Stav <em>nakon</em> velikih ideologija 20. st. Postmoderna kaže: <em>svaka „Velika Priča" je sumnjiva; svaki tekst je napravljen od drugih tekstova; pisac se ne otkriva — nego igra</em>. Ključni pojmovi za maturu: <span class="gloss" tabindex="0">metafikcija<span class="gloss-tip"><b>Metafikcija</b> — proza svjesna da je proza. Roman govori o tome kako se pišu romani.</span></span>, <span class="gloss" tabindex="0">intertekstualnost<span class="gloss-tip"><b>Intertekstualnost</b> — svaki tekst satkan od drugih tekstova. Pojam: Julia Kristeva, 1966.</span></span>, <span class="gloss" tabindex="0">pastiš<span class="gloss-tip"><b>Pastiš</b> — ozbiljno oponašanje tuđeg stila, bez ismijavanja.</span></span> i <span class="gloss" tabindex="0">parodija<span class="gloss-tip"><b>Parodija</b> — komična imitacija s namjerom kritike.</span></span>.
      </div>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Brza dijagnostika H10 — 5 pitanja</div>
      <div class="box-int-txt">
        Provjeri razumiješ li bit postmoderne prije nego kreneš s pojmovima.
      </div>
    </div>

    <!-- Soft kontekst hint — exam frequency -->
    <div class="soft-hint">
      <div class="soft-hint-ico">💡</div>
      <div class="soft-hint-body">
        Tema <b>postmoderna + književni pojmovi</b> pojavila se na MAT 2024. — Metafikcija i intertekstualnost su <b>ključne kratke odgovorke od 4-5 bodova</b>.
      </div>
    </div>

    <div class="diag" id="diag" data-state="intro">
      <div class="diag-intro">
        <div class="diag-intro-icon">🎯</div>
        <div class="diag-intro-body">
          <div class="diag-intro-title">Brza dijagnostika — 5 pitanja</div>
          <div class="diag-intro-desc">Provjeri što već znaš o <b>postmoderni i ključnim pojmovima</b> prije nego kreneš. Dobit ćeš personaliziranu preporuku.</div>
          <button type="button" class="diag-btn diag-btn-primary" onclick="diagStart()">▶ Pokreni dijagnostiku</button>
          <button type="button" class="diag-btn diag-btn-ghost" onclick="diagSkip()">Preskoči — odmah na sadržaj ↓</button>
        </div>
      </div>
      <div class="diag-quiz">
        <div class="diag-bar">
          <div class="diag-prog-txt">Pitanje <span id="diag-idx">1</span> / 5</div>
          <div class="diag-prog-wrap"><div class="diag-prog-bar" id="diag-prog-bar" style="width:0%"></div></div>
          <div class="diag-prog-num"><span id="diag-correct">0</span> točno</div>
        </div>
        <div class="diag-topic" id="diag-topic">—</div>
        <div class="diag-q" id="diag-q">—</div>
        <div class="diag-opts" id="diag-opts"></div>
      </div>
      <div class="diag-result">
        <div class="diag-res" id="diag-res">
          <div class="diag-res-msg" id="diag-res-msg"></div>
          <div class="diag-rec" id="diag-rec"></div>
          <button type="button" class="diag-btn diag-btn-ghost" style="margin-top:12px" onclick="diagRestart()">🔁 Ponovi dijagnostiku</button>
        </div>
      </div>
    </div>

    <div id="cit-toast" class="cit-toast" role="status" aria-live="polite"></div>

    <!-- SEC 01 — Postmoderna kao epoha -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · Postmoderna — epoha i stav</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Što je postmoderna</div>
      <div class="box-int-txt">
        Postmoderna nije stil — nego <b>kritički stav prema stilovima</b>. Nastaje kao odgovor na <em>krizu modernih ideologija</em> (marksizam, fašizam, vjera u napredak) i <em>krizu avangardnog optimizma</em>. Književnost postmoderne <b>ne vjeruje u jednu Istinu</b>, ne teži originalnosti, ne skriva svoj artificijelni karakter — nego ga <em>slavi</em>. Pisac zna da piše. Čitatelj zna da čita. I oboje se igraju zajedno.
      </div>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">💡 5 povijesnih okidača postmoderne</div>
      <div class="box-key-txt">
        <b>(1)</b> <em>Holokaust i Hirošima</em> (1945.) — kraj vjere u „napredak civilizacije". Adorno: <em>„pisati poeziju nakon Auschwitza je barbarstvo"</em>. <b>(2)</b> <em>Hladni rat i nuklearna prijetnja</em> — bijeg u ironiju i igru. <b>(3)</b> <em>Konzumerizam i masovni mediji</em> (50-e, 60-e) — granica između visoke i pop-kulture nestaje. <b>(4)</b> <em>Studentski pokreti 1968.</em> — propast utopija s lijeva i desna. <b>(5)</b> <em>Informacijska revolucija</em> — tekst postaje fluidan, sveprisutan, bestežinski.
      </div>
    </div>

    <div class="box-warn">
      <div class="bw-ico">⚠️</div>
      <div class="bw-body">
        <div class="bw-title">Postmoderna ? nihilizam</div>
        <div class="bw-txt"><strong>Nihilizam</strong> kaže: ništa nema smisla, sve je besmisleno. <strong>Postmoderna</strong> kaže: nema jednog smisla — ima ih beskonačno mnogo, ovisno o čitatelju. To je <b>oslobađajuće, ne pesimistično</b>. Eco: <em>„Voli me, to je Stendhal"</em> — ne možeš reći „volim te" bez ironičnog odmaka, ali u toj rečenici, s tim odmakom, ljubav je <em>prava</em>.</div>
      </div>
    </div>

    <div id="h10-p2"></div>

    <!-- SEC 02 — Ključni pojmovi -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · 10 ključnih pojmova za maturu</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Pojmovi koje ispit provjerava</div>
      <div class="box-int-txt">
        Svaki od sljedećih pojmova može se pojaviti u pitanju teorije književnosti ili kao alat za esej. Nauči definiciju + primjer — ne samo definiciju.
      </div>
    </div>

    <div class="sc-grid">
      <div class="sc">
        <span class="sc-ico hchip br">POJAM</span>
        <div class="sc-name">Metafikcija</div>
        <div class="sc-desc">Proza <em>svjesna sebe kao proze</em>. Autor se obraća čitatelju, lik zna da je u romanu, pripovjedač komentira konstrukciju. <b>Pojam:</b> William Gass, 1970. <b>Primjer:</b> Eco — izmišljeni „pronađeni rukopis" u predgovoru Imenu ruže. Ugrešić — poglavlja kao „šivaći uzorci".</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip go">POJAM</span>
        <div class="sc-name">Intertekstualnost</div>
        <div class="sc-desc">Odnos teksta prema drugim tekstovima — citati, aluzije, parodiranje. Nijedan tekst nije „čist". <b>Pojam:</b> Julia Kristeva, 1966. (po Bahtinu). <b>Primjer:</b> Vilim od Baskervillea = Sherlock Holmes; Jorge od Burgosa = Borges.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip t">POJAM</span>
        <div class="sc-name">Pastiš</div>
        <div class="sc-desc"><em>Ozbiljno oponašanje</em> tuđeg stila bez ismijavanja. Hommage. <b>Primjer:</b> Eco piše u stilu 14. st. kronika — ne kako bi ih ismijao, nego rekonstruira atmosferu.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip pa">POJAM</span>
        <div class="sc-name">Parodija</div>
        <div class="sc-desc"><em>Komična imitacija</em> s namjerom kritike ili humora. <b>Primjer:</b> Brešan — <em>Hamlet u selu Mrduša Donja</em>: Shakespeare kroz amatersku seosku trupu, čime kritizira lokalnu političku farsu.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip re">POJAM</span>
        <div class="sc-name">Fragmentarnost</div>
        <div class="sc-desc">Odbijanje linearnog pripovijedanja. Kolaž žanrova, glasova, stilova, kronologija. <b>Primjer:</b> Ugrešić — <em>Štefica Cvek</em> kombinira novinske oglase, recepte, sentimentalne citate, šivaće upute unutar glavne priče.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip br">POJAM</span>
        <div class="sc-name">Postmoderna ironija</div>
        <div class="sc-desc">Istovremeno ozbiljna i ne-ozbiljna. Zaljubljena u tradiciju i skeptična prema njoj. <b>Primjer:</b> Eco piše pravi krimić koji istovremeno jest i nije krimić. Čitatelj ne može biti siguran „gdje autor stoji" — <em>to je namjerni efekt</em>.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip go">POJAM</span>
        <div class="sc-name">Autoreferencijalnost</div>
        <div class="sc-desc">Tekst koji govori o sebi — svom stilu, strukturi, mogućnostima. <em>Uži pojam od metafikcije</em>. <b>Primjer:</b> Borges — <em>Vrt razgranatih staza</em> govori o knjizi u kojoj svaki izbor otvara alternativne priče — što je opis Borgesove vlastite proze.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip t">FILOZOFIJA</span>
        <div class="sc-name">Kraj velikih naracija</div>
        <div class="sc-desc">Jean-François Lyotard (<em>Postmoderno stanje</em>, 1979.): <b>nevjerica prema sustavima koji tvrde da posjeduju sveobuhvatnu Istinu</b>. Marksizam, napredak, religija kao Jedna Istina. Postmoderna ih zamjenjuje „malim naracijama" — lokalnim, pluralnim, privremenim.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip pa">POJAM</span>
        <div class="sc-name">Miješanje visokog i niskog</div>
        <div class="sc-desc">Modernizam je postavio zid između „ozbiljne" i pop-kulture — postmoderna ga ruši. <b>Primjer:</b> Eco ravnopravno citira Aristotela i detektivske romane. Ugrešić — oglasi iz ženskih časopisa kao ravnopravan književni materijal.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip re">POJAM</span>
        <div class="sc-name">Simulakrum</div>
        <div class="sc-desc">Jean Baudrillard: kopija koja je izgubila vezu s originalom — jer original više nije važan. <b>Primjer:</b> Disneyland je simulakrum Amerike. Eco — izmišljene „fiktivne kronike" koje zvuče autentičnije od pravih. Borges — enciklopedija izmišljenog svijeta koja počinje mijenjati stvarni.</div>
      </div>
    </div>

    <!-- Pastiš vs parodija usporedba -->
    <div class="box-signal">
      <div class="box-signal-lbl">🧠 Pastiš vs. Parodija — razlika za ispit</div>
      <div class="box-signal-txt">Najčešće zamjenjivanji pojmovi na maturi. Ključno: <b>pastiš = hommage (bez kritike)</b>, <b>parodija = kritika (s humorom)</b>.</div>
    </div>

    <div class="tbl">
      <div class="cr"><div class="ck br">PASTIŠ</div><div class="cv"><em>Ozbiljno oponašanje</em> tuđeg stila — bez ismijavanja, bez kritike. Cilj: autentičnost, hommage, ljubav prema predlošku. <b>Eco</b> piše u stilu 14. st. kronika jer <em>voli</em> srednji vijek.</div></div>
      <div class="cr"><div class="ck go">PARODIJA</div><div class="cv"><em>Komična imitacija</em> — s namjerom kritike ili humora. Autor ismijava stil ili sadržaj predloška. <b>Brešan</b> — Hamlet u seoskoj trupi ismijava i Shakespearea i lokalni politički apsurd.</div></div>
      <div class="cr"><div class="ck t">TRIK ZA ISPIT</div><div class="cv">Pitaj se: <em>Je li cilj autora kritizirati/smijati se predlošku?</em> Da › parodija. <em>Odaje li autor poštovanje i gradi atmosferu?</em> Da › pastiš. Oba mogu biti unutar istog teksta.</div></div>
    </div>

    <!-- SEC 03 — Filozofski okvir -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">03 · Filozofski okvir — Lyotard i Baudrillard</div><div class="sec-line"></div></div>

    <div id="h10-p3"></div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Jean-François Lyotard — Postmoderno stanje (1979.)</div>
      <div class="box-int-txt">
        Lyotard definira postmodernu kao <b>nevjericu prema Velikim Naracijama</b>. Znanje u postmodernom dobu ne traži Istinu — traži <em>performativnost</em> (što funkcionira). Umjesto jedne metanaracije nudi <b>pluralizam malih naracija</b> — lokalnih, privremenih, kontekstualnih. <em>Ključno za maturu:</em> Lyotard › „kraj velikih naracija" › postmoderna skeptičnost.
      </div>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Jean Baudrillard — Simulakra i simulacija (1981.)</div>
      <div class="box-int-txt">
        Baudrillard opisuje <b>4 faze slike</b>: (1) odražava stvarnost › (2) maskira stvarnost › (3) maskira <em>odsutnost</em> stvarnosti › (4) nema veze sa stvarnošću — <b>čisti simulakrum</b>. Reklame, mediji, reality TV, Disneyland. <em>Matrix</em> (1999.) eksplicitno citira Baudrillarda. Za književnost: postmoderni tekstovi grade vlastitu „stvarnost" neovisnu o izvanjskom referentu.
      </div>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">💡 Ključni filozofi postmoderne — za esej</div>
      <div class="box-key-txt">
        <b>Lyotard</b> (1979.) — kraj Velikih Naracija, pluralizam. <b>Baudrillard</b> (1981.) — simulakrum, hiper-stvarnost. <b>Derrida</b> — dekonstrukcija, tekst nema fiksnog značenja. <b>Barthes</b> (1967.) — „smrt autora", čitatelj stvara smisao. <b>Eco</b> — teorija otvorenog djela, pisac-čitatelj kao suautori.
      </div>
    </div>

    <!-- SEC 04 — Hrvatska postmoderna -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">04 · Hrvatska postmoderna 1979.–1981.</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">🇭🇷 Hrvatska postmoderna — kontekst</div>
      <div class="box-int-txt">
        Hrvatska postmoderna nastaje gotovo <b>istovremeno sa svjetskom</b> — ali u specifičnom kontekstu <em>kasne Jugoslavije</em>. Relativna kulturna sloboda nakon 1966. (pad Rankovića) + pristup zapadnoj teoriji + tradicija avangarde (expressionizam, nadrealizam) = plodno tlo. Postmoderna igra s „velikim naracijama" komunizma je <em>već implicitno politička</em>.
      </div>
    </div>

    <div id="h10-p4"></div>

    <div class="tbl">
      <div class="cr"><div class="ck br">1979.</div><div class="cv"><b>Antun Šoljan</b>, <em>Drugi ljudi na Mjesecu</em> — anticipacijski roman, ironija prema utopijama. Početak postmodernog senzibiliteta u hrvatskoj prozi.</div></div>
      <div class="cr"><div class="ck go">1981.</div><div class="cv"><b>Pavao Pavličić</b>, <em>Večernji akt</em> — postmoderni krimić s fantastičnim elementima, borgesovska linija. <b>Dubravka Ugrešić</b>, <em>Štefica Cvek u raljama života</em> — roman kao šivaći uzorak, metafikcija + fragmentarnost.</div></div>
      <div class="cr"><div class="ck t">1984.</div><div class="cv">Časopis <b>Quorum</b> (Branko Čegec, Zvonko Maković) — „Quorumaši" kao generacija. Poetika postmoderne, intertekstualnost, citati, pluralizam.</div></div>
    </div>

    <div class="sc-grid">
      <div class="sc">
        <span class="sc-ico hchip br">AUTOR</span>
        <div class="sc-name">Pavao Pavličić (1946.)</div>
        <div class="sc-desc">Profesor komparativne književnosti, Zagreb. Ključni pisac hrv. postmoderne — „borgesovska" linija. <em>Večernji akt</em> (1981.), <em>Plava ruža</em> (1977.), <em>Pokora</em>. Krimić i fantastika kao okvir filozofskog eksperimenta.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip go">AUTOR</span>
        <div class="sc-name">Dubravka Ugrešić (1949.–2023.)</div>
        <div class="sc-desc">Komparatistica i prozaistkinja. <em>Štefica Cvek u raljama života</em> (1981.) — feministička postmoderna. Roman kao šivaći uzorak, poglavlja kao „uzorci". Nakon rata 1991. emigrira — „vještica iz Rio de Janeira".</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip t">AUTOR</span>
        <div class="sc-name">Goran Tribuson (1948.–2017.)</div>
        <div class="sc-desc">Krimić i noir kao postmoderni medij. <em>Legija stranaca</em> (1985.), <em>Potonulo groblje</em>. Žanrovski roman s egzistencijalnom dubinom — nastavlja borgesovsku liniju Pavličića.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip pa">AUTOR</span>
        <div class="sc-name">Irena Vrkljan (1930.–2022.)</div>
        <div class="sc-desc">Feministička postmoderna, autobiografska proza. <em>Svila, škare</em> (1984.) — fragmentarna autobiografija, intertekstualni portreti Marina Cvetajeva i Else Lasker-Schüler. Glasni esej o ženi-piscu.</div>
      </div>
    </div>

    <!-- SEC 05 — NCVVO 2026 -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">05 · Kontekst NCVVO 2026</div><div class="sec-line"></div></div>

    <div class="box-key">
      <div class="box-key-lbl">🔑 Što ispit traži od H10</div>
      <div class="box-key-txt">
        <b>(1)</b> <em>Pojmovi</em> — metafikcija, intertekstualnost, pastiš, parodija, fragmentarnost (teorija književnosti). <b>(2)</b> <em>Autori</em> — Eco, Pavličić, Ugrešić (kontekst i opis opusa). <b>(3)</b> <em>Filozofska pozadina</em> — Lyotard (kraj velikih naracija), Baudrillard (simulakrum). <b>(4)</b> <em>Hrvatska postmoderna</em> — kronologija, autori, Quorum. <b>(5)</b> <em>Esejska primjena</em> — postmoderni pojmovi kao alat za analizu Kafke, Marinkovića, Krleže.
      </div>
    </div>

    <div class="box-warn">
      <div class="bw-ico">⚠️</div>
      <div class="bw-body">
        <div class="bw-title">Postmoderna u eseju — nije samo za H10</div>
        <div class="bw-txt">Postmoderni aparat (<em>intertekstualnost, fragmentarnost, metafikcija</em>) možeš primijeniti na <strong>bilo koje djelo u katalogu</strong>. Kafka je anticipirao postmodernu apsurdom; Marinković je fragmentaran i autoreferencijalan; Krleža koristi polifoniju glasova. <b>Tko zna pojmove — zna ih primijeniti šire.</b></div>
      </div>
    </div>

    <!-- SEKCIJA 06: PRED-ISPIT CHEAT SHEET -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">06 · Pred-ispit cheat sheet</div><div class="sec-line"></div></div>

    <div class="cheat-card">
      <div class="cheat-hdr">
        <div class="cheat-hdr-l">
          <div class="cheat-eye">QUICK REFERENCE · 30 MIN PRIJE ISPITA</div>
          <div class="cheat-ttl">Sve što moraš pamtiti — H10</div>
        </div>
        <button class="cheat-print" onclick="printCheatSheet()" aria-label="Ispiši cheat sheet">🖨️ Ispiši</button>
      </div>
      <div class="cheat-grid">

        <!-- Datumi & autori -->
        <div class="cheat-col">
          <div class="cheat-col-ttl">📅 Datumi & autori</div>
          <table class="cheat-tbl">
            <tr><td><b>1967.</b></td><td>Barthes „Smrt autora"</td></tr>
            <tr><td><b>1979.</b></td><td>Lyotard „Postmoderno stanje" — kraj velikih naracija</td></tr>
            <tr><td><b>1980.</b></td><td><strong>Eco · Ime ruže</strong> (Il nome della rosa)</td></tr>
            <tr><td><b>1981.</b></td><td><strong>Pavličić · Večernji akt</strong></td></tr>
            <tr><td><b>preteče</b></td><td>Borges, Calvino, Nabokov</td></tr>
            <tr><td><b>hrv. postmoderna</b></td><td>krug Quorum, 1980-e</td></tr>
          </table>
        </div>

        <!-- Top pojmovi -->
        <div class="cheat-col">
          <div class="cheat-col-ttl">📌 Top pojmovi (često na maturi)</div>
          <ul class="cheat-list">
            <li><b>postmoderna</b> — sumnja u velike narative, ironija, pluralizam</li>
            <li><b>metafikcija</b> — tekst svjestan da je fikcija (govori o sebi)</li>
            <li><b>intertekstualnost</b> — tekst upućuje na druge tekstove</li>
            <li><b>citatnost</b> — eksplicitno preuzimanje tuđih tekstova</li>
            <li><b>pastiš</b> — imitacija stila <em>bez</em> kritike (hommage)</li>
            <li><b>parodija</b> — imitacija <em>s</em> kritikom / humorom</li>
            <li><b>fragmentarnost</b> — razlomljena struktura, bez cjelovitosti</li>
            <li><b>dvostruko kodiranje</b> — istovremeno za elitu i za masu</li>
            <li><b>„smrt autora"</b> (Barthes) — značenje stvara čitatelj</li>
            <li><b>„kraj velikih naracija"</b> (Lyotard)</li>
          </ul>
        </div>

        <!-- Djela — esencijalno -->
        <div class="cheat-col cheat-col-wide">
          <div class="cheat-col-ttl">📖 Djela — esencijalno za esej</div>
          <div class="cheat-grid-inner">
            <div>
              <div class="cheat-mini-ttl">Ime ruže · Eco (1980.)</div>
              <div class="cheat-mini-txt">Detektivski roman u <b>srednjovjekovnom samostanu</b>; Vilim od Baskervillea istražuje ubojstva. Intertekstualnost (Holmes, Borges, Aristotel), metafikcija; knjižnica gori.</div>
            </div>
            <div>
              <div class="cheat-mini-ttl">Večernji akt · Pavličić (1981.)</div>
              <div class="cheat-mini-txt"><b>Zagrebački postmoderni krimić</b>; igra žanrom, borgesovska tradicija. Pokazuje iste pojmove u hrvatskom kontekstu.</div>
            </div>
            <div>
              <div class="cheat-mini-ttl">Status na maturi 2026.</div>
              <div class="cheat-mini-txt">Oba djela <b>NISU</b> na obvezatnom popisu — služe kao <em>ilustracija pojmova</em>. Pojmove primijeni na obvezatna djela.</div>
            </div>
            <div>
              <div class="cheat-mini-ttl">Gdje primijeniti pojmove</div>
              <div class="cheat-mini-txt"><em>Kafka</em> (fragmentacija/apsurd), <em>Marinković · Kiklop</em> (metafikcija), <em>Krleža</em> (polifonija), <em>Brešan</em> (parodija).</div>
            </div>
          </div>
        </div>

        <!-- Esej struktura -->
        <div class="cheat-col cheat-col-wide">
          <div class="cheat-col-ttl">📌 Esej — struktura u 6 koraka</div>
          <ol class="cheat-steps">
            <li><b>Uvod</b> — kontekst (postmoderna, kraj velikih naracija) + jasna teza (1 rečenica)</li>
            <li><b>Razrada 1</b> — ključni pojam (metafikcija / intertekstualnost) + povezivanje s tezom</li>
            <li><b>Razrada 2</b> — primjena pojma na konkretno djelo + citat</li>
            <li><b>Razrada 3</b> — povezivanje s obvezatnim djelom (Kafka, Marinković, Krleža)</li>
            <li><b>Zaključak</b> — odgovor na polazno pitanje, povratak na tezu</li>
            <li><b>Provjera</b> — minimum 440 riječi, slijed teze, gramatika, HR navodnici</li>
          </ol>
        </div>

        <!-- Što NE smiješ -->
        <div class="cheat-col cheat-col-wide cheat-col-warn">
          <div class="cheat-col-ttl">📌 Što NE smiješ na ispitu</div>
          <ul class="cheat-list cheat-list-warn">
            <li>Brkati <b>pastiš i parodiju</b> — pastiš je bez kritike, parodija s kritikom</li>
            <li>Reći da je postmoderna samo „nastavak" moderne — ona je <b>ironična sumnja</b> prema njoj</li>
            <li>Tvrditi da su <em>Ime ruže / Večernji akt</em> obvezatna djela 2026. — <b>nisu</b></li>
            <li>Zaboraviti primijeniti pojmove na <b>obvezatna djela</b> (Krleža, Marinković, Brešan)</li>
            <li>Reći da je metafikcija bilo koja fikcija — ona je <b>fikcija svjesna sebe</b></li>
            <li>Izjednačiti postmodernu i nihilizam — ona je <b>igra</b>, ne nužno negacija</li>
            <li>Pisati esej kraći od 440 riječi (esej se NE vrednuje)</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="cheat-card" style="margin-top:24px">
      <div class="cheat-hdr">
        <div class="cheat-hdr-l">
          <div class="cheat-eye">SLJEDEĆE</div>
          <div class="cheat-ttl">Tab 1 · Djela — Eco i Pavličić</div>
        </div>
      </div>
      <div class="cheat-grid">
        <div class="cheat-col cheat-col-wide" style="font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.65">
          <p style="margin:0">Sad kad znaš pojmove — vidi ih <em>u praksi</em>. <b>Tab 1</b> donosi deep-dive na <em>Ime ruže</em> (Eco) i <em>Večernji akt</em> (Pavličić) — svaki pojam iz Tab 0 ima konkretan primjer u jednom od ta dva romana.</p>
        </div>
      </div>
    </div>

    <div id="h10-p5"></div>

    <div class="nav-row">
      <span class="nb primary" onclick="sw(1)">📖 Eco + Pavličić ›</span>
    </div>
  </div>

<div class="layer" id="l1" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">2 djela</span>
      <span class="pill p-go">Eco + Pavličić</span>
      <span class="pill p-r">1980.–1981.</span>
      <span class="pill p-t">postmoderna u praksi</span>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">🧠 NCVVO: postmoderni pojmovi se primjenjuju na OBVEZATNA ispitna djela</div>
      <div class="box-signal-txt">
        <em>Ime ruže</em> i <em>Večernji akt</em> NISU na obvezatnom popisu 2026. — koriste se kao ilustracija pojmova iz Tab 0. <b>Za ispit</b>: primijeni iste pojmove (metafikcija, intertekstualnost, fragmentacija) na obvezatna djela:<br><br>
        <b>Marinković · Kiklop (D22)</b> › intertekstualnost (Homer, Shakespeare, Baudelaire u tekstu) + unutarnji monolog<br>
        <b>Kafka · Preobražaj (H09/D23)</b> › groteskna metafikcija + simbolična fragmentacija<br>
        <b>Krleža · Glembajevi (D21)</b> › intertekstualnost (Ibsen) + fragmente obitelji kao simbola raspada
      </div>
    </div>

    <div class="featured-quote">
      <div class="fq-mark">«</div>
      <div class="fq-body">
        <div class="fq-text">Knjige uvijek govore o drugim knjigama, a svaka priča priča već ispričanu priču.</div>
        <div class="fq-meta">— Umberto Eco, <em>Postille uz Ime ruže</em>, 1983.</div>
      </div>
      <button type="button" class="fq-copy" onclick="fqCopyQuote(this)" aria-label="Kopiraj citat" title="Kopiraj citat">⎘</button>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Zašto ova dva romana zajedno</div>
      <div class="box-int-txt">
        <em>Ime ruže</em> (1980.) i <em>Večernji akt</em> (1981.) nastali su u razmaku od jedne godine — oba koriste <b>detektivski žanr</b> kao okvir za postmoderni eksperiment, oba su istovremeno pristupačni i zahtjevni. Razlika: Eco piše svjetski bestseller iz akademske teorije; Pavličić piše zagrebački krimić iz borgesovske tradicije. <em>Zajedno demonstriraju sve pojmove iz Tab 0 na konkretnim primjerima.</em>
      </div>
    </div>

    <!-- == DIO 1: ECO == -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · Umberto Eco — Ime ruže (1980.)</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Tko je Umberto Eco</div>
      <div class="box-int-txt">
        <b>Umberto Eco</b> (1932.–2016.) — talijanski <span class="gloss" tabindex="0">semiotičar<span class="gloss-tip"><b>Semiotika</b> — znanost o znakovima i značenjima. Eco je bio profesor semiotike u Bologni prije nego što je napisao prvi roman.</span></span>, filozof i romanopisac. Profesor semiotike u Bologni. <em>Ime ruže</em> (1980.) je njegov <b>prvi roman</b> — napisan da demonstrira vlastitu teoriju o postmoderni i otvorenom djelu. Prodano 50+ milijuna primjeraka, filmska adaptacija 1986. (Sean Connery kao Vilim). Eco je <em>sam teoretičar postmoderne</em> — roman je teorija u praksi.
      </div>
    </div>

    <div id="h10-p6"></div>

    <div id="h10-p7"></div>

    <div class="box-key">
      <div class="box-key-lbl">💡 Ime ruže — ključni podaci za maturu</div>
      <div class="box-key-txt">
        <b>Autor:</b> Umberto Eco, Italija. <b>Godina:</b> 1980. <b>Žanr:</b> postmoderni krimić / povijesni roman. <b>Smještaj:</b> benediktinski samostan u sjevernoj Italiji, <em>1327. godina.</em> <b>Protagonist:</b> Vilim od Baskervillea (franjevac, bivši inkvizitor) + novak Adso. <b>Fabula:</b> sedam dana, sedam ubojstava, tajanstvena knjiga u biblioteci. <b>Postmoderni pojmovi:</b> metafikcija, intertekstualnost, pastiš, kraj velikih naracija, autoreferencijalnost.
      </div>
    </div>

    <div class="sc-grid">
      <div class="sc">
        <span class="sc-ico hchip br">METAFIKCIJA</span>
        <div class="sc-name">Izmišljeni pronađeni rukopis</div>
        <div class="sc-desc">Eco tvrdi da je našao <em>francuski prijevod latinskog rukopisa</em> redovnika Adsa — prevedenog u Pragu u 17. st. Sve izmišljeno, pisano s akademskom ozbiljnošću: bilješke, reference, fiktivni izdavači. Čitatelj sekundu vjeruje. <b>Tekst glumi da je druga vrsta teksta</b> — to je metafikcija u najčistijem obliku.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip go">INTERTEKST.</span>
        <div class="sc-name">Mreža referenci — prepoznaj ih</div>
        <div class="sc-desc"><b>Vilim od Baskervillea</b> › Sherlock Holmes (Hound of the Baskervilles). <b>Adso</b> › Watson (asistent). <b>Jorge od Burgosa</b> (slijepi bibliotekar, antagonist) › Jorge Luis Borges — stvarno slijep, pisao o beskonačnim bibliotekama. <b>Biblioteka kao labirint</b> › Borgesova <em>Babilonska biblioteka</em>. <b>Aristotelova izgubljena <em>Poetika II</em></b> › stvarna praznina u povijesti, Eco gradi roman oko nje.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip t">PASTIŠ</span>
        <div class="sc-name">Oponašanje kronika 14. st.</div>
        <div class="sc-desc">Eco piše dugim periodičkim rečenicama, koristi biblijske parafraze, latinske fraze, opisuje iluminacije s detaljem stručnjaka. <em>Nije parodija</em> — ne ismijava srednji vijek, nego mu odaje <b>hommage</b>. Čitatelj osjeća autentičnost perioda i istovremeno zna da je to konstrukcija.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip re">KRAJ ISTINE</span>
        <div class="sc-name">Požar biblioteke — nema rješenja</div>
        <div class="sc-desc">Roman završava <b>požarom biblioteke</b>. Tajanstvena knjiga izgori — istina je zauvijek izgubljena. Vilim: <em>„Nema reda. Ja sam vidio lažni red i trčao za njim."</em> Detektiv <b>ne uspijeva</b> — jer uspjeh bi potvrdio da smisao postoji. Postmoderna teza: nema jedne Istine, samo izmišljamo uzorke.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip pa">NASLOV</span>
        <div class="sc-name">Autoreferencijalni naslov</div>
        <div class="sc-desc">Iz srednjovjekovnog stiha: <em>„Stat rosa pristina nomine, nomina nuda tenemus"</em> — „Prijašnja ruža ostaje samo u imenu." <b>Ime nadživljava stvar.</b> Eco: izabrao naslov <em>„jer ništa ne znači ništa"</em>. Ruža može biti Djevica Marija, ljubav, tajno znanje, strast. <b>Prazan centar koji ispunjava čitatelj</b> — quintessencija postmodernog teksta.</div>
      </div>
    </div>

    <div class="box-tip">
      <div class="bt-ico">💡</div>
      <div class="bt-body">
        <div class="bt-title">Kako koristiti Ime ruže u eseju</div>
        <div class="bt-txt">Čak i ako pitanje nije o Ecu, možeš ga citirati kao <b>paralelnu ilustraciju</b>: <em>„Za razliku od Kafke koji fragmentira tijelo (Preobražaj), Eco fragmentira istinu (Ime ruže) — oba su dijagnoze 20. st."</em> Ili uz Marinkovića: <em>„Ciklop fragmentira psihologiju, Ime ruže fragmentira povijest."</em></div>
      </div>
    </div>

    <!-- == DIO 2: PAVLIČIĆ == -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · Pavao Pavličić — Večernji akt (1981.)</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Tko je Pavao Pavličić</div>
      <div class="box-int-txt">
        <b>Pavao Pavličić</b> (r. 1946.) — profesor komparativne književnosti u Zagrebu, autor 40+ knjiga, ključni pisac <b>hrvatske postmoderne</b>. Nastavlja <span class="gloss" tabindex="0">borgesovsku liniju<span class="gloss-tip"><b>Borgesovska linija</b> — proza inspireirana J. L. Borgesom: nemogući predmeti, labirinti, izmišljene enciklopedije, igra sa stvarnošću.</span></span> u domaćoj prozi. <em>Večernji akt</em> (1981.) — godinu dana nakon Ecovog Imena ruže — postavlja iste postmoderne mehanizme u zagrebački kontekst.
      </div>
    </div>

    <div id="h10-p8"></div>

    <div class="box-key">
      <div class="box-key-lbl">💡 Večernji akt — ključni podaci za maturu</div>
      <div class="box-key-txt">
        <b>Autor:</b> Pavao Pavličić, Hrvatska. <b>Godina:</b> 1981. <b>Žanr:</b> postmoderni krimić / fantastična proza. <b>Smještaj:</b> Zagreb, 1960-e. <b>Protagonist:</b> Krsto Brodnjak, slikar. <b>Fabula:</b> slikar kupi stari akt na sajmu — žena na slici <em>starí iz godine u godinu</em>. Istraži: tko je bila žena? Zašto slika stari? <b>Postmoderni pojmovi:</b> žanrovski hibrid, borgesovska fantastika, implicitna metafikcija, otvoreni kraj.
      </div>
    </div>

    <div class="sc-grid">
      <div class="sc">
        <span class="sc-ico hchip re">HIBRID</span>
        <div class="sc-name">Žanrovski kolaž</div>
        <div class="sc-desc">U realizmu — autor bira jedan žanr. U postmoderni — <b>svi žanrovi istodobno</b>. <em>Večernji akt</em> je istovremeno: detektivska proza (misterij), fantastična proza (nadnaravna slika), psihološki roman (Krstina opsesija) i roman o umjetnosti (odnos djela i stvarnosti). Svaki žanr obogaćuje ostale.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip go">FANTASTIKA</span>
        <div class="sc-name">Borgesovska fantastika — nemogući predmet</div>
        <div class="sc-desc">Slika koja stari je <b>nemogući predmet</b> — krši pravila fizike, ali u priči funkcionira prirodno. Borgesov trik: ubaci jedno nemoguće pravilo u ordinaran svijet i prati posljedice. <em>Usporedi:</em> Borges — enciklopedija izmišljenog svijeta mijenja stvarni; Pavličić — slika ponaša kao živo biće. <b>Oba pitaju: što ako je umjetnost jača od stvarnosti?</b></div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip t">METAFIKCIJA</span>
        <div class="sc-name">Implicitna metafikcija — roman o slici</div>
        <div class="sc-desc">Protagonist je <b>slikar</b>, središnji predmet je <b>slika</b>, tema je <b>kako djelo djeluje na primatelja</b>. Pavličić prešutno pita: <em>„Kao što slika mijenja Krstu, mijenja li ovaj roman vas?"</em> Nije rečeno eksplicitno (kao kod Eca) — implicirano strukturom. <b>Tanja metafikcija, jednako efikasna.</b></div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip pa">OTVORENI KRAJ</span>
        <div class="sc-name">Nema rješenja — postmoderni odgovor</div>
        <div class="sc-desc">Tko je žena na slici? Gdje je slikar? Stari li zaista? <b>Pavličić ostavlja sve otvoreno.</b> U klasičnom krimiću: nezadovoljavajuće. U postmoderni: <em>točno ono što treba</em>. Postmoderna ne rješava — otvara. Čitatelj nosi pitanje sa sobom.</div>
      </div>
    </div>

    <!-- == DIO 3: USPOREDBA == -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">03 · Usporedba — isti pojmovi, dvije tradicije</div><div class="sec-line"></div></div>

    <div class="box-signal">
      <div class="box-signal-lbl">🧠 Usporedna analiza — najjači esejski potez</div>
      <div class="box-signal-txt">Kad usporediš oba romana u eseju — pokazuješ da razumiješ <em>pojam</em>, a ne samo djelo. To je razlika između dobrog i odličnog odgovora.</div>
    </div>

    <div id="h10-p9"></div>

    <div class="tbl">
      <div class="cr"><div class="ck go">IME RUŽE</div><div class="cv"><b>Tradicija:</b> Italija, akademska postmoderna (Eco je i teoretičar). <b>Metafikcija:</b> eksplicitna — lažni predgovor, izmišljeni rukopis. <b>Intertekstualnost:</b> teologija + Holmes + Borges. <b>Stil:</b> pastiš medievalnih kronika. <b>Kraj:</b> požar biblioteke — istina zauvijek izgubljena.</div></div>
      <div class="cr"><div class="ck re">VEČERNJI AKT</div><div class="cv"><b>Tradicija:</b> Zagreb, borgesovska linija hrv. proze. <b>Metafikcija:</b> implicitna — roman o slici koja djeluje. <b>Intertekstualnost:</b> Borges + detektivski žanr + gotska proza. <b>Stil:</b> hibrid realizma i fantastike. <b>Kraj:</b> otvoreni — bez odgovora, čitatelj nosi pitanje.</div></div>
      <div class="cr"><div class="ck t">ZAJEDNIČKI NAZIVNIK</div><div class="cv">Oba koriste <b>žanr kao ljusku za filozofsko pitanje</b> o prirodi istine i umjetnosti. Oba su istovremeno pristupačna (krimić/misterij) i zahtjevna (postmoderni aparat). Oba nemaju jednog „pravog" odgovora — jer postmoderna smatra da on ne postoji.</div></div>
    </div>

    <!-- == DIO 4: ZA MATURU == -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">04 · Kako koristiti oba djela na maturi</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Paralelna analiza — konkretne rečenice</div>
      <div class="box-int-txt">
        <em>Ime ruže</em> i <em>Večernji akt</em> <b>nisu obvezatna čitanja</b> (Ime ruže je u izbornom popisu NCVVO, Večernji akt nije u katalogu). Ne očekuj direktno pitanje — ali koristi ih kao <b>kontekstualne paralele</b> u eseju iz obvezatnih djela.
      </div>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">💡 Rečenice za esej — copy-paste</div>
      <div class="box-key-txt">
        <b>(1)</b> <em>„Za razliku od Marinkovića koji još vjeruje u psihološku dubinu (Kiklop), postmoderna generacija (Eco, Pavličić) dijagnosticira gubitak jedinstvenoga smisla."</em> <b>(2)</b> <em>„Kafkina Gregora Samsa fragmentira tijelo (Preobražaj); 60 godina kasnije Pavličićeva slika fragmentira vrijeme (Večernji akt)."</em> <b>(3)</b> <em>„Krležina polifonija glasova u Glembajevima anticipira postmodernu fragmentaciju istine u Ecovoj biblioteci."</em>
      </div>
    </div>

    <div class="box-warn">
      <div class="bw-ico">⚠️</div>
      <div class="bw-body">
        <div class="bw-title">NCVVO status — što smije ući u esej</div>
        <div class="bw-txt"><em>Ime ruže</em> je u <b>izbornom popisu</b> — može se pojaviti kao polazni tekst za čitanje, ali nije obvezatno čitanje. <em>Večernji akt</em> nije u katalogu. Oba možeš slobodno citirati kao <b>ilustraciju u eseju</b> — samo pazi da ti primarni primjer ostane djelo s obvezatnog popisa.</div>
      </div>
    </div>

    
    <!-- SEC 05 — VIDEO RESURSI — v3.5 -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">05 · Video resursi</div><div class="sec-line"></div></div>

    <div class="prose">Kada ti tekst nije dovoljan — vizualni učenici često bolje pamte kroz video objašnjenja i predstave. Ovdje su pouzdani edukacijski resursi na YouTubeu.</div>

    <div class="yt-grid">
      <a class="yt-card" href="https://www.youtube.com/results?search_query=Umberto+Eco+Ime+ruže+analiza+lektira+postmoderna" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇭🇷</span> HR</div>
          <div class="yt-title">Eco: Ime ruže — analiza i postmoderna</div>
        </div>
      </a>

      <a class="yt-card" href="https://www.youtube.com/results?search_query=postmodernizam+književnost+pojmovi+intertekstualnost" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇭🇷</span> HR</div>
          <div class="yt-title">Postmodernizam — pojmovi i obilježja</div>
        </div>
      </a>

      <a class="yt-card" href="https://www.youtube.com/results?search_query=Umberto+Eco+Name+of+the+Rose+analysis+postmodernism" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇬🇧</span> EN</div>
          <div class="yt-title">The Name of the Rose — analysis</div>
        </div>
      </a>

      <a class="yt-card" href="https://www.youtube.com/results?search_query=postmodernism+literature+explained+Lyotard+Baudrillard" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇬🇧</span> EN</div>
          <div class="yt-title">Postmodernism — Lyotard &amp; Baudrillard</div>
        </div>
      </a>
    </div>

    <div class="box-tip" style="margin-top:14px">
      <div class="bt-ico">💡</div>
      <div class="bt-body">
        <div class="bt-title">Pro tip — kako koristiti</div>
        <div class="bt-txt">Video je <strong>dodatak</strong>, ne zamjena. Pročitaj djelo + ovu skriptu, pa pogledaj video — tako pamtiš 3× bolje nego kroz bilo koji pojedinačni izvor.</div>
      </div>
    </div>

<div class="nav-row">
      <span class="nb" onclick="sw(0)">‹ Teorija</span>
      <span class="nb primary" onclick="sw(2)">✍️ Esej alat ›</span>
    </div>
  </div>

<div class="layer" id="l2" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">7 teza</span>
      <span class="pill p-go">3 modela</span>
      <span class="pill p-r">5 grešaka</span>
      <span class="pill p-t">postmoderna kao esejski alat</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Postmoderni aparat — zašto pomaže u eseju</div>
      <div class="box-int-txt">
        Postmoderna <b>nije</b> obvezatna tema na NCVVO maturi. Ali pojmovi (<span class="gloss" tabindex="0">metafikcija<span class="gloss-tip">Proza svjesna da je proza — roman govori o pisanju romana.</span></span>, <span class="gloss" tabindex="0">intertekstualnost<span class="gloss-tip">Odnos teksta prema drugim tekstovima — svaki tekst je mreža referenci.</span></span>, <span class="gloss" tabindex="0">fragmentacija<span class="gloss-tip">Odbijanje linearnog pripovijedanja — kolaž žanrova, glasova, perspektiva.</span></span>) <b>pojavljuju se u testu teorije književnosti</b>. U eseju iz obvezatnih djela postmoderni aparat daje <em>dodatnu razinu analize</em> koja se nagrađuje. Ovdje imaš sve alate.
      </div>
    </div>

    <!-- == SEC 01: TEZE == -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · 7 teza za esej o postmoderni</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Kako koristiti teze</div>
      <div class="box-int-txt">
        Svaka teza radi kao <b>središnja tvrdnja</b> eseja. Modificiraj je za konkretno djelo — zamijeni <em>[djelo]</em> i <em>[autor]</em> onime što pišeš. Uz svaku tezu: <em>gdje je koristiti</em> i <em>što navesti kao dokaz</em>.
      </div>
    </div>

    <div id="h10-p10"></div>

    <div class="tbl">
      <div class="cr"><div class="ck br">TEZA 1 · Intertekstualnost</div><div class="cv"><b>Koristi za:</b> Eco (Holmes, Borges u Imenu ruže), Krleža (Ibsen, Shakespeare u Glembajevima), Marinković (mitovi u Kiklopu), Matoš (francuski simbolizam).</div></div>
      <div class="cr"><div class="ck go">TEZA 2 · Metafikcija</div><div class="cv"><b>Koristi za:</b> Eco (izmišljeni rukopis), Marinković Kiklop (meta-razine), Krleža Povratak Filipa Latinovicza (promišljanje umjetnosti), Pirandello.</div></div>
      <div class="cr"><div class="ck t">TEZA 3 · Fragmentacija</div><div class="cv"><b>Koristi za:</b> Kafka Preobražaj (prekinute scene), Krleža Povratak Filipa Latinovicza, Šimić (kratki stih), Ujević (slika-fragment), Ugrešić Štefica Cvek.</div></div>
      <div class="cr"><div class="ck pa">TEZA 4 · Nepouzdan pripovjedač</div><div class="cv"><b>Koristi za:</b> Kafka (Gregor kao filter), Camus Stranac (Meursault), Marinković Kiklop (Melkior u raspadanju), Dostojevski (Raskoljnikov).</div></div>
      <div class="cr"><div class="ck re">TEZA 5 · Ironija</div><div class="cv"><b>Koristi za:</b> Matoš novele, Marinković Kiklop (gorka komika), Krleža Balade Petrice Kerempuha (jezična ironija), Pavličić.</div></div>
      <div class="cr"><div class="ck br">TEZA 6 · Miješanje žanrova</div><div class="cv"><b>Koristi za:</b> Krleža Glembajevi (drama + roman), Marinković Kiklop (roman + esej + pjesma), Kafka (realizam + alegorija), Pavličić Večernji akt.</div></div>
      <div class="cr"><div class="ck go">TEZA 7 · Otvoreni kraj</div><div class="cv"><b>Koristi za:</b> Kafka Preobražaj (smrt bez katarze), Camus Stranac (pristajanje bez razrješenja), Marinković Kiklop (Melkior u statusu quo), Pavličić.</div></div>
    </div>

    <!-- == SEC 02: MODEL UVODA == -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · Model uvoda eseja</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Uvod s postmodernim pojmom — šablona</div>
      <div class="box-int-txt">
        Zamijeni <em>[djelo]</em>, <em>[autor]</em>, <em>[godina]</em>, <em>[pojam 1]</em>, <em>[pojam 2]</em>, <em>[konkretna tehnika]</em> stvarnim podacima iz eseja koji pišeš.
      </div>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">💡 Šablona uvoda</div>
      <div class="box-key-txt">
        <em>„Roman <b>[djelo]</b>, nastao <b>[godina]</b>, ne pripada epohi postmoderne u užem smislu. Ipak, u njemu prepoznajemo temeljna obilježja koja će razviti postmoderna proza: <b>[pojam 1]</b>, <b>[pojam 2]</b> i odbijanje jednoznačnog tumačenja. Ova analiza pokazat će kako <b>[autor]</b> anticipira postmoderni senzibilitet kroz <b>[konkretna tehnika]</b>, čime se djelo otvara čitanju koje nadilazi kontekst svoga vremena."</em>
      </div>
    </div>

    <div class="tbl">
      <div class="cr"><div class="ck go">PRIMJER — Kafka</div><div class="cv"><em>„Roman Preobražaj, nastao 1915., ne pripada postmoderni — ali anticipira je kroz fragmentarnost prikaza, nepouzdanog pripovjedača i odbijanje razrješenja. Ova analiza pokazat će kako Kafka kroz Gregorovu metamorfozu konstruira paradigmu modernog otuđenja, otvarajući djelo postmodernoj recepciji."</em></div></div>
      <div class="cr"><div class="ck t">PRIMJER — Marinković</div><div class="cv"><em>„Roman Kiklop, nastao 1965., pokazuje obilježja koja će teorija postmoderne later artikulirati: ironijsku distancu, fragmentarnost svijesti i intertekstualne slojeve mitologije. Melkior Tresić nije samo lik — on je pripovjedna strategija za propitivanje mogućnosti smisla u post-ratnoj zbilji."</em></div></div>
    </div>

    <!-- == SEC 03: MODEL RAZRADE == -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">03 · Model razrade — argumentacijski odlomak</div><div class="sec-line"></div></div>

    <div class="box-key">
      <div class="box-key-lbl">💡 Šablona razrade s pojmom + citatom</div>
      <div class="box-key-txt">
        <em>„<b>[Pojam]</b> kao postmoderni mehanizam označava <b>[definicija]</b>. U djelu <b>[djelo]</b> to se očituje u <b>[konkretno mjesto — naslov / lik / scena]</b>. Kada <b>[autor]</b> <b>[konkretna radnja u tekstu]</b>, on stupa u dijalog s <b>[referenca/tradicija]</b> — <b>[zašto je to važno za interpretaciju]</b>. Time se značenje <b>umnožava</b>: čitatelj koji prepoznaje sloj dobiva dodatni smisao, dok djelo ostaje otvoreno drukčijim čitanjima."</em>
      </div>
    </div>

    <div class="tbl">
      <div class="cr"><div class="ck br">PRIMJER — Intertekstualnost, Eco</div><div class="cv"><em>„Intertekstualnost kao postmoderni mehanizam znači da tekst nosi tragove drugih tekstova. U Imenu ruže to se očituje već u imenu protagonista: Vilim od Baskervillea evocira Holmesov slučaj, dok Adso replicira Watsona. Eco time poziva na dvostruko čitanje — krimić i intelektualna igra koegzistiraju."</em></div></div>
      <div class="cr"><div class="ck go">PRIMJER — Fragmentarnost, Kafka</div><div class="cv"><em>„Fragmentarnost u Preobražaju nije stilska neurednost — to je namjerna strategija. Gregor doživljava svijet u isječcima (zvukovi iza vrata, promjene u sobi), što odražava njegovu nemogućnost cjelovite percepcije. Forma prati temu: kukac ne može imati panoramski pogled."</em></div></div>
    </div>

    <!-- == SEC 04: MODEL ZAKLJUČKA == -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">04 · Model zaključka — sinteza i otvaranje</div><div class="sec-line"></div></div>

    <div class="box-key">
      <div class="box-key-lbl">💡 Šablona zaključka</div>
      <div class="box-key-txt">
        <em>„Iako <b>[autor]</b> piše <b>[godina / epoha]</b>, njegova proza već pokazuje znakove koje će postmoderna teorija (Barthes, Lyotard, Eco) teorijski artikulirati: <b>nestajanje Autora kao vrhovnog autoriteta</b>, <b>sumnju u velike naracije</b>, <b>intertekstualnu otvorenost</b>. <b>[Djelo]</b> tako nije samo dokument svoga doba — ono je <b>nastavljiva struktura</b> koja svakoj novoj generaciji omogućuje novo čitanje."</em>
      </div>
    </div>

    <!-- == SEC 05: CHEATSHEET POJAM - DJELO == -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">05 · Cheatsheet — pojam - obvezatno djelo</div><div class="sec-line"></div></div>

    <div class="box-signal">
      <div class="box-signal-lbl">💡 Brza referenca za esej</div>
      <div class="box-signal-txt">Za svaki pojam — koja obvezatna djela možeš citirati kao primjer. Uči <b>parove</b>, ne samo pojmove.</div>
    </div>

    <div class="tbl">
      <div class="cr"><div class="ck br">Metafikcija</div><div class="cv">Eco <em>Ime ruže</em>, Marinković <em>Kiklop</em>, Krleža <em>Povratak Filipa Latinovicza</em>, Pirandello <em>Šest lica traži autora</em></div></div>
      <div class="cr"><div class="ck go">Intertekstualnost</div><div class="cv">Krleža <em>Glembajevi</em> (Ibsen, Shakespeare), Marinković <em>Kiklop</em> (mitovi), Eco <em>Ime ruže</em> (Holmes, Borges), Matoš novele (fr. simbolizam)</div></div>
      <div class="cr"><div class="ck t">Pastiš</div><div class="cv">Krleža <em>Balade Petrice Kerempuha</em> (stari kajkavski stih — ozbiljan hommage, <em>ne</em> parodija)</div></div>
      <div class="cr"><div class="ck pa">Parodija</div><div class="cv">Brešan <em>Hamlet u selu Mrduša Donja</em>, Marinković <em>Ruke</em> (ironizacija liturgijskih formi)</div></div>
      <div class="cr"><div class="ck re">Fragmentarnost</div><div class="cv">Šimić (kratki stih), Ujević (slika-fragment), Kafka <em>Preobražaj</em>, Ugrešić <em>Štefica Cvek</em>, Krleža <em>Povratak Filipa Latinovicza</em></div></div>
      <div class="cr"><div class="ck br">Ironija</div><div class="cv">Matoš novele, Marinković <em>Kiklop</em> (gorka komika), Krleža <em>Balade</em> (jezična ironija), Pavličić</div></div>
      <div class="cr"><div class="ck go">Nepouzdani pripovjedač</div><div class="cv">Kafka <em>Preobražaj</em> (Gregor), Camus <em>Stranac</em> (Meursault), Marinković <em>Kiklop</em> (Melkior), Dostojevski (Raskoljnikov)</div></div>
      <div class="cr"><div class="ck t">Otvoreni kraj</div><div class="cv">Kafka <em>Preobražaj</em>, Camus <em>Stranac</em>, Marinković <em>Kiklop</em>, Pavličić <em>Večernji akt</em></div></div>
    </div>

    <!-- == SEC 06: 5 GREŠAKA == -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">06 · 5 grešaka koje ne smiješ napraviti</div><div class="sec-line"></div></div>

    <div class="tbl">
      <div class="cr"><div class="ck re">GREŠKA 1</div><div class="cv"><b>„Moderna" ? „Postmoderna".</b> Moderna = književno razdoblje oko 1900. (Matoš, Kranjčević). Postmoderna = nakon 1960. (Eco, Pavličić). Nisu isto — ne zamjenjuj termine.</div></div>
      <div class="cr"><div class="ck re">GREŠKA 2</div><div class="cv"><b>Etiketa bez dokaza.</b> „Kafka je postmoderan" nije argument. Moraš navesti <em>konkretnu tehniku</em> (fragmentacija, otvoreni kraj) i povezati s pojmom. Inače je to prazna etiketa.</div></div>
      <div class="cr"><div class="ck re">GREŠKA 3</div><div class="cv"><b>Pastiš ? Parodija.</b> Krleža u Baladama <em>oživljava</em> kajkavski — to je pastiš (hommage). Brešan <em>ismijava</em> Shakespearea — to je parodija (kritika). Zamjena je česta greška na ispitu.</div></div>
      <div class="cr"><div class="ck re">GREŠKA 4</div><div class="cv"><b>Nabrajanje pojmova bez integracije.</b> „Ovo djelo je metafikcijsko, intertekstualno, fragmentarno i ironično." = nabrajanje, ne analiza. Izaberi <b>1–2 pojma</b> i razradi ih konkretnim primjerima.</div></div>
      <div class="cr"><div class="ck re">GREŠKA 5</div><div class="cv"><b>Citiranje bez razumijevanja.</b> Ako citiraš Barthesov „Smrt autora" — moraš znati što znači (autor nije vrhovni autoritet; čitatelj suautorira značenje). Ocjenjivač odmah vidi „ukras" bez sadržaja.</div></div>
    </div>

    <!-- == SEC 07: ESEJ OGLEDNI PROMPT == -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">07 · Ogledni ispit — primjer pitanja</div><div class="sec-line"></div></div>

    <div class="exam-prompt">
      <div class="exam-prompt-ttl">📌 Ovako bi moglo doći na ispit</div>
      <div class="exam-prompt-task">
        Analiziraj kako Kafka u romanu Preobražaj koristi fragmentarnost i nepouzdanog pripovjedača kao književne postupke. Povežite analizu s postmodernom književnom teorijom i navedite paralele s barem jednim drugim djelom svjetske ili hrvatske književnosti.
      </div>
      <div class="exam-prompt-tips">
        <div class="exam-tip">
          <b>🧩 Struktura</b>
          Uvod (50 r.) · Razrada 1: fragmentarnost s primjerima (100 r.) · Razrada 2: nepouzdani pripovjedač + citat (100 r.) · Razrada 3: paralela s Marinkovićem/Camusom (100 r.) · Zaključak (60 r.) = ~410 r.
        </div>
        <div class="exam-tip">
          <b>📚 Pojmovi</b>
          Fragmentarnost · nepouzdani pripovjedač · metafikcija · intertekstualnost · otvoreni kraj · Gregor kao filter percepcije
        </div>
        <div class="exam-tip">
          <b>🔗 Paralele</b>
          Camus Stranac (Meursault kao nepouzdani filter) · Marinković Kiklop (Melkior u raspadanju) · Eco Ime ruže (fragment kao tehnika)
        </div>
      </div>
    </div>

    <!-- == SEC 08: BROJAČ RIJEČI == -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">08 · Brojač eseja</div><div class="sec-line"></div></div>

    <div class="box-warn">
      <div class="bw-ico">⚠️</div>
      <div class="bw-body">
        <div class="bw-title">Provjeri svoj esej prije predaje</div>
        <div class="bw-txt">Cilj: <strong>min. 440 riječi</strong>. Optimalno 500–700. Tekst ostaje u tvom pregledniku.</div>
      </div>
    </div>

    <div class="wc-box">
      <div class="wc-hdr">
        <div class="wc-ttl">🧮 Brojač eseja · cilj: min. 440 riječi · optimalno 500–700</div>
      </div>
      <textarea class="wc-textarea" id="wc-ta" placeholder="Zalijepi ili upiši tekst eseja ovdje…" oninput="wcUpdate()"></textarea>
      <div class="wc-stats">
        <div class="wc-stat" id="wc-words"><div class="wc-stat-num">0</div><div class="wc-stat-lbl">RIJEČI</div></div>
        <div class="wc-stat" id="wc-chars"><div class="wc-stat-num">0</div><div class="wc-stat-lbl">ZNAKOVA</div></div>
        <div class="wc-stat" id="wc-nospace"><div class="wc-stat-num">0</div><div class="wc-stat-lbl">BEZ RAZMAKA</div></div>
        <div class="wc-stat" id="wc-para"><div class="wc-stat-num">0</div><div class="wc-stat-lbl">ODLOMAKA</div></div>
        <div class="wc-stat" id="wc-read"><div class="wc-stat-num">0 min</div><div class="wc-stat-lbl">ČITANJE</div></div>
      </div>
      <div class="wc-progress" id="wc-prog">
        <div class="wc-progress-bar-wrap"><div class="wc-progress-bar" id="wc-bar" style="width:0%"></div></div>
        <div class="wc-progress-lbl" id="wc-lbl">CILJ 440 · 0 / 440</div>
      </div>
      <div class="wc-actions">
        <button class="wc-btn" onclick="document.getElementById('wc-ta').value='';wcUpdate()">🧹 Očisti</button>
        <button class="wc-btn" onclick="navigator.clipboard.writeText(document.getElementById('wc-ta').value)">📋 Kopiraj</button>
      </div>
      <div class="wc-hint">📌 <b>Tip:</b> 5 odlomaka × 6 rečenica × 18 riječi ? 540 riječi. Drži se TEZA strukture.</div>
    </div>

    <!-- == SEC 09: CHECKLIST == -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">09 · Checklist prije predaje eseja</div><div class="sec-line"></div></div>

    <div class="box-key">
      <div class="box-key-lbl">💡 10 točaka — provjeri sve prije predaje</div>
      <div class="box-key-txt">
        <b>(1)</b> Središnja tvrdnja jasno iskazana u uvodu. <b>(2)</b> Barem 2 argumenta iz teksta (citat ili parafraza). <b>(3)</b> Barem 1 književnoteorijski pojam pravilno definiran. <b>(4)</b> Povezivanje s književnopovijesnim kontekstom. <b>(5)</b> Jasan uvod-razrada-zaključak. <b>(6)</b> Paragrafi povezani veznicima (ipak, međutim, stoga). <b>(7)</b> Nema pravopisnih grešaka (č/ć, ije/je, velika slova). <b>(8)</b> Nema ponavljanja istih riječi. <b>(9)</b> Minimalno 440 riječi. <b>(10)</b> Zaključak vraća se na središnju tvrdnju — ne ponavlja razradu.
      </div>
    </div>

    <div class="nav-row">
      <span class="nb" onclick="sw(1)">‹ 📖 Eco + Pavličić</span>
      <span class="nb primary" onclick="sw(3)">💬 Citatnik ›</span>
    </div>
  </div>

<div class="layer" id="l3" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">36 citata</span>
      <span class="pill p-go">teoretičari + Eco + Pavličić</span>
      <span class="pill p-r">⭐ = napamet</span>
      <span class="pill p-t">za esej i ispit</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Citatnik — kako koristiti</div>
      <div class="box-int-txt">
        <b>⭐ Napamet</b> — citati koje vrijedi znati naizust za ispit i esej. Ostali su vrijedni za esejsku argumentaciju. Svaka kartica ima: <em>tko/kada</em>, <em>tekst citata</em> i <em>kada koristiti u eseju</em>.
      </div>
    </div>

    <div class="pojm-filters" id="cit-filters">
      <button class="pojm-filter on" data-cit-cat="all">Svi (36)</button>
      <button class="pojm-filter" data-cit-cat="teoreticari">📌 Teoretičari (8)</button>
      <button class="pojm-filter" data-cit-cat="eco">📌 Eco (6)</button>
      <button class="pojm-filter" data-cit-cat="pavlicic">📌 Pavličić + Ugrešić (5)</button>
      <button class="pojm-filter" data-cit-cat="borges">📌 Borges (4)</button>
      <button class="pojm-filter" data-cit-cat="ostali">📌 Ostali (5)</button>
      <button class="pojm-filter" data-cit-cat="pojmovi">📌 Pojmovi (8)</button>
    </div>

    
    <div class="cit-search-row" style="margin:14px 0 16px;display:flex;gap:8px;align-items:center">
      <label for="cit-search" class="sr-only" style="position:absolute;left:-9999px">Pretraži citate</label>
      <span style="font-size:18px;color:var(--gold,#e9b446)">⭐</span>
      <input type="search" id="cit-search" class="cit-search" placeholder="Pretraži citate (npr. Eco, Pavličić, metafikcija, intertekstualnost)…" aria-label="Pretraži citate" autocomplete="off"
        style="flex:1;padding:10px 14px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:10px;color:var(--t1,#f4ede5);font-family:var(--mono,monospace);font-size:13px"
        oninput="citSearch(this.value)">
      <button type="button" class="cit-clear" onclick="document.getElementById('cit-search').value='';citSearch('')" aria-label="Očisti pretragu" title="Očisti"
        style="padding:8px 12px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:8px;color:var(--t2,#c5b8aa);cursor:pointer;font-size:14px">✕</button>
    </div>
<div class="cit-grid" id="cit-grid">

      <!-- == TEORETIČARI == -->
      <div class="cit-card must-know" data-cat="teoreticari" data-cit-id="h10c01" data-diff="basic" data-tez="1,2">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">BARTHES</span><span class="cit-eye-must">⭐ Napamet</span></div>
        <div class="cit-src"><b class="cit-src-author">Roland Barthes</b><span class="cit-src-loc">Smrt autora, 1967.</span></div>
        <div class="cit-txt">„Pisac više nije onaj koji nosi poruke, nego onaj koji upravlja mrežom citata."</div>
        <div class="cit-tez-row"><span class="cit-tez">T1</span><span class="cit-tez">T2</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Temeljna teza postmoderne — autor nije vlasnik smisla, to je čitatelj. Za eseje o <b>metafikciji</b> i <b>intertekstualnosti</b>. Barthes 1967. proglašava „smrt autora" — smisao nastaje u činu čitanja.</div>
      </div>

      <div class="cit-card must-know" data-cat="teoreticari" data-cit-id="h10c02" data-diff="basic" data-tez="7">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">LYOTARD</span><span class="cit-eye-must">⭐ Napamet</span></div>
        <div class="cit-src"><b class="cit-src-author">Jean-François Lyotard</b><span class="cit-src-loc">Postmoderno stanje, 1979.</span></div>
        <div class="cit-txt">„Postmoderno stanje karakterizira nepovjerenje u velike naracije."</div>
        <div class="cit-tez-row"><span class="cit-tez">T7</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Definicija postmoderne u jednoj rečenici. Za uvod eseja koji tematizira <b>kraj ideologija</b> ili <b>fragmentarnost</b>. Lyotard 1979. — ključni filozofski tekst postmoderne.</div>
      </div>

      <div class="cit-card" data-cat="teoreticari" data-cit-id="h10c03" data-diff="basic" data-tez="1">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">KRISTEVA</span></div>
        <div class="cit-src"><b class="cit-src-author">Julia Kristeva</b><span class="cit-src-loc">Semiotiké, 1969.</span></div>
        <div class="cit-txt">„Svaki tekst je ugradnja drugog teksta; svaki tekst je upijanje i preoblikovanje drugog teksta."</div>
        <div class="cit-tez-row"><span class="cit-tez">T1</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Definicija <b>intertekstualnosti</b> — pojam koji je Kristeva skovala 1966. (oslonjena na Bahtina). Za eseje gdje analiziraš aluzije i reference u tekstu.</div>
      </div>

      <div class="cit-card" data-cat="teoreticari" data-cit-id="h10c04" data-diff="basic" data-tez="2">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">DERRIDA</span></div>
        <div class="cit-src"><b class="cit-src-author">Jacques Derrida</b><span class="cit-src-loc">O gramatologiji, 1967.</span></div>
        <div class="cit-txt">„Nema ničega izvan teksta."</div>
        <div class="cit-tez-row"><span class="cit-tez">T2</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Dekonstrukcija — značenje nikad nije stabilno, uvijek se odgađa. Za eseje o <b>nepouzdanom pripovjedaču</b> i <b>otvorenom kraju</b>. Najkraći i najradikalniji postmoderni citat.</div>
      </div>

      <div class="cit-card" data-cat="teoreticari" data-cit-id="h10c05" data-diff="napredni" data-tez="5">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">BAUDRILLARD</span></div>
        <div class="cit-src"><b class="cit-src-author">Jean Baudrillard</b><span class="cit-src-loc">Simulakrum i simulacija, 1981.</span></div>
        <div class="cit-txt">„Simulakrum nikad ne skriva istinu — on je istina koja skriva da je nema."</div>
        <div class="cit-tez-row"><span class="cit-tez">T5</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Za analizu <b>simulakruma</b> — slike koje su izgubile vezu s originalom. Napredni esej: Matrix eksplicitno citira ovaj tekst. Za analizu Ecovog „povijesnog simulakruma" u Imenu ruže.</div>
      </div>

      <div class="cit-card must-know" data-cat="teoreticari" data-cit-id="h10c06" data-diff="basic" data-tez="1,2,3">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">ECO · TEORIJA</span><span class="cit-eye-must">⭐ Napamet</span></div>
        <div class="cit-src"><b class="cit-src-author">Umberto Eco</b><span class="cit-src-loc">Postille uz Ime ruže, 1983.</span></div>
        <div class="cit-txt">„Postmoderna se rađa u trenutku kad shvatiš da nevinost više nije moguća."</div>
        <div class="cit-tez-row"><span class="cit-tez">T1</span><span class="cit-tez">T2</span><span class="cit-tez">T3</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Ecova vlastita definicija postmoderne — iz eseja koji je napisao <em>nakon</em> Imena ruže, objašnjavajući što je napravio. Savršeno za uvod ili zaključak eseja o postmoderni.</div>
      </div>

      <div class="cit-card" data-cat="teoreticari" data-cit-id="h10c07" data-diff="napredni" data-tez="1">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">BARTHES</span></div>
        <div class="cit-src"><b class="cit-src-author">Roland Barthes</b><span class="cit-src-loc">S/Z, 1970.</span></div>
        <div class="cit-txt">„Tekst je pletivo glasova koji dolaze iz tisuću izvora kulture."</div>
        <div class="cit-tez-row"><span class="cit-tez">T1</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Dopunjuje Kristevinu definiciju intertekstualnosti. „Tisuću izvora kulture" — za eseje gdje analiziraš kulturne i književne slojeve u tekstu.</div>
      </div>

      <div class="cit-card" data-cat="teoreticari" data-cit-id="h10c08" data-diff="napredni" data-tez="2">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">BARTHES</span></div>
        <div class="cit-src"><b class="cit-src-author">Roland Barthes</b><span class="cit-src-loc">Smrt autora, 1967.</span></div>
        <div class="cit-txt">„Autor — taj moderni lik — vjerojatno je proizvod našeg društva koje otkriva prestiž osobnog."</div>
        <div class="cit-tez-row"><span class="cit-tez">T2</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Drugi Barthesov citat iz istog eseja — za dublje analize metafikcije. Autor nije „božanski genij" nego kulturni konstrukt.</div>
      </div>

      <!-- == ECO == -->
      <div class="cit-card must-know" data-cat="eco" data-cit-id="h10c09" data-diff="basic" data-tez="1">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">ECO · IME RUŽE</span><span class="cit-eye-must">⭐ Napamet</span></div>
        <div class="cit-src"><b class="cit-src-author">Umberto Eco</b><span class="cit-src-loc">Postille uz Ime ruže, 1983.</span></div>
        <div class="cit-txt">„Knjige uvijek govore o drugim knjigama, i svaka priča priča već ispričanu priču."</div>
        <div class="cit-tez-row"><span class="cit-tez">T1</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Najjači Ecov citat za <b>intertekstualnost</b>. Eco sam opisuje što je napravio u Imenu ruže — i što radi svaka postmoderna proza. Za uvod ili razradu eseja o intertekstualnosti.</div>
      </div>

      <div class="cit-card must-know" data-cat="eco" data-cit-id="h10c10" data-diff="basic" data-tez="7">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">ECO · IME RUŽE</span><span class="cit-eye-must">⭐ Napamet</span></div>
        <div class="cit-src"><b class="cit-src-author">Vilim od Baskervillea</b><span class="cit-src-loc">Ime ruže, kraj romana, 1980.</span></div>
        <div class="cit-txt">„Nema reda. Ja sam vidio lažni red i trčao za njim."</div>
        <div class="cit-tez-row"><span class="cit-tez">T7</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Ključni citat za <b>kraj velikih naracija</b> i <b>otvoreni kraj</b>. Vilim — detektiv koji ne uspijeva — izgovara temeljnu postmodernu tezu: nema jedne istine, samo izmišljamo uzorke. Za zaključak eseja.</div>
      </div>

      <div class="cit-card" data-cat="eco" data-cit-id="h10c11" data-diff="basic" data-tez="3">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favourite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">ECO · IME RUŽE</span></div>
        <div class="cit-src"><b class="cit-src-author">Umberto Eco</b><span class="cit-src-loc">Ime ruže, 1980.</span></div>
        <div class="cit-txt">„Biblioteka je djelo ljudske ruke, labirint ispisan u čast tajne."</div>
        <div class="cit-tez-row"><span class="cit-tez">T3</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Biblioteka kao simbol <b>fragmentarnosti znanja</b> i labirinta istine. Za eseje o postmodernoj epistemologiji — znanje je labirint, ne piramida.</div>
      </div>

      <div class="cit-card" data-cat="eco" data-cit-id="h10c12" data-diff="basic" data-tez="2">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">ECO · NASLOV</span></div>
        <div class="cit-src"><b class="cit-src-author">Umberto Eco</b><span class="cit-src-loc">Ime ruže, završne riječi, 1980.</span></div>
        <div class="cit-txt">„Prijašnja ruža ostaje samo u imenu; praznih imena se držimo."</div>
        <div class="cit-tez-row"><span class="cit-tez">T2</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Autoreferencijalni naslov — ime nadživljava stvar. Za eseje o <b>autoreferencijalnosti</b> i postmodernom znaku. Naslov romana je ujedno njegova temeljna teza.</div>
      </div>

      <div class="cit-card" data-cat="eco" data-cit-id="h10c13" data-diff="napredni" data-tez="5">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">ECO · IME RUŽE</span></div>
        <div class="cit-src"><b class="cit-src-author">Umberto Eco</b><span class="cit-src-loc">Ime ruže, 1980.</span></div>
        <div class="cit-txt">„Istina je smijeh; smijeh je sloboda od straha pred istinom."</div>
        <div class="cit-tez-row"><span class="cit-tez">T5</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Središnja filozofska teza romana — Aristotelova izgubljena knjiga o komediji. Za napredne eseje o <b>ironiji</b> i postmodernom humoru kao strategiji otpora.</div>
      </div>

      <div class="cit-card" data-cat="eco" data-cit-id="h10c14" data-diff="napredni" data-tez="1">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">ECO · SEMIOTIKA</span></div>
        <div class="cit-src"><b class="cit-src-author">Umberto Eco</b><span class="cit-src-loc">Ime ruže, 1980.</span></div>
        <div class="cit-txt">„Znakovi su jedino što imamo; stvari nestaju, znakovi ostaju."</div>
        <div class="cit-tez-row"><span class="cit-tez">T1</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Semiotička teza — za napredne eseje o jeziku, znaku i intertekstualnosti. Eco kao semiotičar: tekst je sustav znakova, ne zrcalo stvarnosti.</div>
      </div>

      <!-- == PAVLIČIĆ + UGREŠIĆ == -->
      <div class="cit-card" data-cat="pavlicic" data-cit-id="h10c15" data-diff="basic" data-tez="2,6">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">PAVLIČIĆ · VEČERNJI AKT</span></div>
        <div class="cit-src"><b class="cit-src-author">Tematski motiv</b><span class="cit-src-loc">Pavao Pavličić, Večernji akt, 1981.</span></div>
        <div class="cit-txt">„Slika ne prikazuje stvarnost — ona je stvara."</div>
        <div class="cit-tez-row"><span class="cit-tez">T2</span><span class="cit-tez">T6</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Temeljna teza <em>Večernjeg akta</em> — slika koja stari je nemogući predmet koji mijenja stvarnost. Za eseje o <b>metafikciji</b> i <b>granici između umjetnosti i stvarnosti</b>.</div>
      </div>

      <div class="cit-card" data-cat="pavlicic" data-cit-id="h10c16" data-diff="napredni" data-tez="2">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">PAVLIČIĆ · ESEJ</span></div>
        <div class="cit-src"><b class="cit-src-author">Pavao Pavličić</b><span class="cit-src-loc">Rukoljub, esej o čitateljstvu.</span></div>
        <div class="cit-txt">„Roman je stroj za proizvodnju čitatelja, a ne obratno."</div>
        <div class="cit-tez-row"><span class="cit-tez">T2</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Pavličić o čitatelju kao suautoru — korespondira s Barthesovom „smrću autora". Za eseje o <b>čitateljevoj ulozi</b> u postmodernom tekstu.</div>
      </div>

      <div class="cit-card" data-cat="pavlicic" data-cit-id="h10c17" data-diff="basic" data-tez="6">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">PAVLIČIĆ · ŽANR</span></div>
        <div class="cit-src"><b class="cit-src-author">Pavao Pavličić</b><span class="cit-src-loc">Sve što znam o krimiću.</span></div>
        <div class="cit-txt">„Žanrovski roman nije niska književnost — on je prostor u kojem se postmoderna igra s konvencijama."</div>
        <div class="cit-tez-row"><span class="cit-tez">T6</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Za eseje o <b>miješanju žanrova</b> i rehabilitaciji „popularne" književnosti. Pavličić brani krimić kao legitiman postmoderni oblik.</div>
      </div>

      <div class="cit-card" data-cat="pavlicic" data-cit-id="h10c18" data-diff="basic" data-tez="3,6">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">UGREŠIĆ · ŠTEFICA CVEK</span></div>
        <div class="cit-src"><b class="cit-src-author">Tematski motiv</b><span class="cit-src-loc">Dubravka Ugrešić, Štefica Cvek u raljama života, 1981.</span></div>
        <div class="cit-txt">„Štefica Cvek nije lik — ona je proizvod recikliranja pop-kulture."</div>
        <div class="cit-tez-row"><span class="cit-tez">T3</span><span class="cit-tez">T6</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Za eseje o <b>fragmentarnosti</b> i <b>miješanju visokog i niskog</b>. Ugrešić koristi ženski časopis, recepte i šivaće upute kao književni materijal — pop-kultura kao tekst.</div>
      </div>

      <div class="cit-card" data-cat="pavlicic" data-cit-id="h10c19" data-diff="napredni" data-tez="6">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">QUORUM</span></div>
        <div class="cit-src"><b class="cit-src-author">Kritičarska sinteza</b><span class="cit-src-loc">O časopisu Quorum, 1984.</span></div>
        <div class="cit-txt">„Quorum je generacija koja nije htjela biti generacija — nego pluralizam glasova."</div>
        <div class="cit-tez-row"><span class="cit-tez">T6</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Za eseje o <b>hrvatskoj postmoderni</b> i časopisu Quorum (1984.) — „quorumaši" kao generacija bez manifesta, s pluralizmom poetika.</div>
      </div>

      <!-- == BORGES == -->
      <div class="cit-card must-know" data-cat="borges" data-cit-id="h10c20" data-diff="basic" data-tez="3">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">BORGES</span><span class="cit-eye-must">⭐ Napamet</span></div>
        <div class="cit-src"><b class="cit-src-author">Jorge Luis Borges</b><span class="cit-src-loc">Pjesma o darovima, 1958.</span></div>
        <div class="cit-txt">„Uvijek sam zamišljao raj kao neku vrstu biblioteke."</div>
        <div class="cit-tez-row"><span class="cit-tez">T3</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Za eseje o biblioteci kao simbolu <b>beskonačnog znanja i labirinta</b>. Borges — slijep na kraju života, okružen knjigama — ova slika je autoreferencijalna. Odjekuje u Ecovoj biblioteci Imenu ruže.</div>
      </div>

      <div class="cit-card" data-cat="borges" data-cit-id="h10c21" data-diff="basic" data-tez="1">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">BORGES</span></div>
        <div class="cit-src"><b class="cit-src-author">Jorge Luis Borges</b><span class="cit-src-loc">ponavljajući motiv u esejima.</span></div>
        <div class="cit-txt">„Sve je već napisano. Ostaje nam samo kombinirati."</div>
        <div class="cit-tez-row"><span class="cit-tez">T1</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Radikalna teza o <b>intertekstualnosti</b> — nema originalne ideje, samo rekombinacije. Savršeno za eseje gdje analiziraš kako postmoderna proza preuzima i transformira tradiciju.</div>
      </div>

      <div class="cit-card" data-cat="borges" data-cit-id="h10c22" data-diff="napredni" data-tez="4">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">BORGES</span></div>
        <div class="cit-src"><b class="cit-src-author">Jorge Luis Borges</b><span class="cit-src-loc">tematski motiv.</span></div>
        <div class="cit-txt">„Svaki čovjek je dvojnik svakog drugog — i sebe sama."</div>
        <div class="cit-tez-row"><span class="cit-tez">T4</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Za napredne eseje o <b>identitetu i nepouzdanom pripovjedaču</b>. Borgesov motiv dvojnika — preuzima ga Pavličić u Večernjem aktu (slika kao dvojnik žene).</div>
      </div>

      <div class="cit-card must-know" data-cat="borges" data-cit-id="h10c23" data-diff="basic" data-tez="2,7">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">BORGES</span><span class="cit-eye-must">⭐ Napamet</span></div>
        <div class="cit-src"><b class="cit-src-author">Jorge Luis Borges</b><span class="cit-src-loc">Vrt razgranatih staza, 1941.</span></div>
        <div class="cit-txt">„Zamišljao sam labirint labirinata, vijugavi i rastuće labirint koji obuhvaća prošlost i budućnost."</div>
        <div class="cit-tez-row"><span class="cit-tez">T2</span><span class="cit-tez">T7</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> <em>Vrt razgranatih staza</em> — roman unutar romana, svaka odluka otvara alternativnu priču. Za eseje o <b>autoreferencijalnosti</b> i <b>otvorenom kraju</b>. Direktan prototip Ecove biblioteke.</div>
      </div>

      <!-- == OSTALI == -->
      <div class="cit-card" data-cat="ostali" data-cit-id="h10c24" data-diff="basic" data-tez="2">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">CALVINO · METAFIKCIJA</span></div>
        <div class="cit-src"><b class="cit-src-author">Italo Calvino</b><span class="cit-src-loc">Ako jedne zimske noći putnik, 1979., prva rečenica.</span></div>
        <div class="cit-txt">„Spremaš se čitati novi roman Itala Calvina 'Ako jedne zimske noći putnik'."</div>
        <div class="cit-tez-row"><span class="cit-tez">T2</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Vrhunac metafikcije — roman se obraća čitatelju u drugom licu od prve rečenice. Čitatelj je protagonist. Za eseje o <b>metafikciji i granici teksta</b>.</div>
      </div>

      <div class="cit-card" data-cat="ostali" data-cit-id="h10c25" data-diff="napredni" data-tez="3,7">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">KUNDERA</span></div>
        <div class="cit-src"><b class="cit-src-author">Milan Kundera</b><span class="cit-src-loc">Nepodnošljiva lakoća postojanja, 1984.</span></div>
        <div class="cit-txt">„Jednom je uvijek jednom. Ni jednom ne može biti dvaput."</div>
        <div class="cit-tez-row"><span class="cit-tez">T3</span><span class="cit-tez">T7</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Kunderin motiv jedinstvenosti trenutka — suprotnost Nietzscheovom „vječnom vraćanju". Za eseje o <b>fragmentarnosti vremena</b> i nemogućnosti ponovnog početka.</div>
      </div>

      <div class="cit-card" data-cat="ostali" data-cit-id="h10c26" data-diff="basic" data-tez="7">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">BECKETT</span></div>
        <div class="cit-src"><b class="cit-src-author">Samuel Beckett</b><span class="cit-src-loc">Čekajući Godota, 1953.</span></div>
        <div class="cit-txt">„Čekamo. Više ne možemo. To je istina. Što da radimo s tim saznanjem?"</div>
        <div class="cit-tez-row"><span class="cit-tez">T7</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Beckett kao preteča postmoderne — <b>otvoreni kraj</b>, apsurd čekanja, odsustvo razrješenja. Za paralele s Kafkom i Camusom u esejima o apsurdu i otvorenom kraju.</div>
      </div>

      <div class="cit-card" data-cat="ostali" data-cit-id="h10c27" data-diff="napredni" data-tez="2,6">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">KUNDERA</span></div>
        <div class="cit-src"><b class="cit-src-author">Milan Kundera</b><span class="cit-src-loc">Umijeće romana, 1986.</span></div>
        <div class="cit-txt">„Roman nije priča o životu — roman je istraživanje mogućnosti života."</div>
        <div class="cit-tez-row"><span class="cit-tez">T2</span><span class="cit-tez">T6</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Za eseje o <b>metafikciji i žanru</b> — roman nije mimesis (zrcalo), nego istraživanje. Kundera u romanesknoj teoriji blizak postmoderni.</div>
      </div>

      <div class="cit-card" data-cat="ostali" data-cit-id="h10c28" data-diff="napredni" data-tez="3">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">CALVINO</span></div>
        <div class="cit-src"><b class="cit-src-author">Italo Calvino</b><span class="cit-src-loc">Nevidljivi gradovi, 1972.</span></div>
        <div class="cit-txt">„Nevidljivi gradovi postoje samo u opisu — a opis je jedina stvarnost koja ih drži živima."</div>
        <div class="cit-tez-row"><span class="cit-tez">T3</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Za napredne eseje o jeziku kao jedinom mediju stvarnosti — poststrukturalistička teza. Calvino: jezik ne opisuje svijet, nego ga konstruira.</div>
      </div>

      <!-- == POJMOVI == -->
      <div class="cit-card must-know" data-cat="pojmovi" data-cit-id="h10c29" data-diff="basic" data-tez="2">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">DEFINICIJA · METAFIKCIJA</span><span class="cit-eye-must">⭐ Napamet</span></div>
        <div class="cit-src"><b class="cit-src-author">Patricia Waugh</b><span class="cit-src-loc">Metafiction, 1984.</span></div>
        <div class="cit-txt">„Metafikcija je proza koja sistematično privlači pažnju na vlastiti artificijelni karakter."</div>
        <div class="cit-tez-row"><span class="cit-tez">T2</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Standardna definicija metafikcije za ispit i esej. Waugh 1984. — naučiti napamet. Koristi kao teorijsku podlogu za analizu Eca ili Ugrešić.</div>
      </div>

      <div class="cit-card must-know" data-cat="pojmovi" data-cit-id="h10c30" data-diff="basic" data-tez="6">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">DEFINICIJA · PASTIŠ</span><span class="cit-eye-must">⭐ Napamet</span></div>
        <div class="cit-src"><b class="cit-src-author">Fredric Jameson</b><span class="cit-src-loc">Postmoderna, kulturna logika kasnog kapitalizma, 1991.</span></div>
        <div class="cit-txt">„Pastiš je, za razliku od parodije, neutralna praksa oponašanja bez skrivene motivacije."</div>
        <div class="cit-tez-row"><span class="cit-tez">T6</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Jamesonova definicija pastiša — idealna za razlikovanje pastiša i parodije na ispitu. Ključni citat za Tab 2 Esej alat SEC 02.</div>
      </div>

      <div class="cit-card" data-cat="pojmovi" data-cit-id="h10c31" data-diff="basic" data-tez="1">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">DEFINICIJA · INTERTEKSTUALNOST</span></div>
        <div class="cit-src"><b class="cit-src-author">Gérard Genette</b><span class="cit-src-loc">Palimpsesti, 1982.</span></div>
        <div class="cit-txt">„Intertekstualnost je svojstvo teksta koje ga čini ovisnim o relaciji prema drugim tekstovima."</div>
        <div class="cit-tez-row"><span class="cit-tez">T1</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Genetteova definicija — tehnički preciznija od Kristevine. Koristi kao alternativnu definiciju u eseju ili ako trebaš naglasiti <b>sustavnost</b> intertekstualnih odnosa.</div>
      </div>

      <div class="cit-card" data-cat="pojmovi" data-cit-id="h10c32" data-diff="basic" data-tez="5">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">DEFINICIJA · PARODIJA</span></div>
        <div class="cit-src"><b class="cit-src-author">Linda Hutcheon</b><span class="cit-src-loc">A Theory of Parody, 1985.</span></div>
        <div class="cit-txt">„Parodija je imitacija s kritičkom distancom, koja naglašava razlike, a ne sličnosti."</div>
        <div class="cit-tez-row"><span class="cit-tez">T5</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Hutcheonova definicija parodije — uz Jamesonov pastiš, idealan par za razlikovanje pojmova na ispitu. Naglasak na <b>kritičkoj distanci</b>.</div>
      </div>

      <div class="cit-card" data-cat="pojmovi" data-cit-id="h10c33" data-diff="napredni" data-tez="3">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">DEFINICIJA · FRAGMENTACIJA</span></div>
        <div class="cit-src"><b class="cit-src-author">Fredric Jameson</b><span class="cit-src-loc">Postmoderna, 1991.</span></div>
        <div class="cit-txt">„Fragmentacija nije samo formalna tehnika — ona je dijagnoza suvremenog iskustva."</div>
        <div class="cit-tez-row"><span class="cit-tez">T3</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Za napredne eseje — fragmentacija nije slabost, nego <b>namjerna strategija</b> koja odražava fragmentirano iskustvo modernoga čovjeka. Kafka, Šimić, Ugrešić.</div>
      </div>

      <div class="cit-card" data-cat="pojmovi" data-cit-id="h10c34" data-diff="napredni" data-tez="5">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">DEFINICIJA · IRONIJA</span></div>
        <div class="cit-src"><b class="cit-src-author">Linda Hutcheon</b><span class="cit-src-loc">Poetics of Postmodernism, 1988.</span></div>
        <div class="cit-txt">„Postmoderna ironija ne ruši — ona zadržava dvojnost bez razrješenja."</div>
        <div class="cit-tez-row"><span class="cit-tez">T5</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Za eseje o ironiji — postmoderna ironija nije ciničan sarkazam nego <b>dvostruko kodiranje</b>. Eco: istovremeno ozbiljan i ne-ozbiljan. Za paralele s Marinkovićem i Krležom.</div>
      </div>

      <div class="cit-card" data-cat="pojmovi" data-cit-id="h10c35" data-diff="basic" data-tez="6">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">HRVATSKA POSTMODERNA</span></div>
        <div class="cit-src"><b class="cit-src-author">Kritičarska sinteza</b><span class="cit-src-loc">O časopisu Quorum, 1984.</span></div>
        <div class="cit-txt">„Hrvatska postmoderna nastaje u trenu kad Quorum prekida monopol jedne poetike i otvara prostor za pluralizam."</div>
        <div class="cit-tez-row"><span class="cit-tez">T6</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Za eseje o <b>kontekstu hrvatske postmoderne</b>. Quorum 1984. — generacija bez manifesta, s pluralizmom poetika.</div>
      </div>

      <div class="cit-card" data-cat="pojmovi" data-cit-id="h10c36" data-diff="napredni" data-tez="6">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">ŽANR · POSTMODERNA</span></div>
        <div class="cit-src"><b class="cit-src-author">Kritičarska sinteza</b><span class="cit-src-loc">O Pavličiću i hrvatskoj postmoderni.</span></div>
        <div class="cit-txt">„Žanrovski roman postaje ozbiljan onog trenutka kad prestane biti samo žanr."</div>
        <div class="cit-tez-row"><span class="cit-tez">T6</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Za eseje o rehabilitaciji žanrovske proze u postmoderni. Pavličić — krimić nije „niska književnost" nego postmoderni laboratorij.</div>
      </div>

    </div>

    <div class="nav-row">
      <span class="nb" onclick="sw(2)">‹ ? Esej alat</span>
      <span class="nb primary" onclick="sw(4)">📚 Pojmovnik ›</span>
    </div>
  </div>

<div class="layer" id="l4" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">55 pojmova</span>
      <span class="pill p-go">pojmovi · autori · djela · kontekst</span>
      <span class="pill p-r">pretraživo</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Pojmovnik H10 — sve što ti treba na dohvat ruke</div>
      <div class="box-int-txt">
        <b>55 pojmova</b> grupiranih u 4 kategorije: <em>pojmovi</em> (postmoderne tehnike i koncepti · 20), <em>autori</em> (svjetski i hrvatski postmoderni pisci · 14), <em>djela</em> (najvažnija djela postmoderne · 11), <em>kontekst</em> (teoretičari, pokreti, kulturna pozadina · 10). <b>Pretraži</b> tipkanjem ili filtriraj klikom na kategoriju.
      </div>
    </div>

    <div class="pojm-search-row">
      <input type="text" class="pojm-search" id="pojm-search" placeholder="🔎 Pretraži pojmove…" aria-label="Pretraži pojmove">
    </div>

    <div class="pojm-filters">
      <button class="pojm-filter on" data-cat="all">Svi (55)</button>
      <button class="pojm-filter" data-cat="pojam">📌 Pojmovi (20)</button>
      <button class="pojm-filter" data-cat="autor">📚 Autori (14)</button>
      <button class="pojm-filter" data-cat="djelo">📌 Djela (11)</button>
      <button class="pojm-filter" data-cat="kontekst">📌 Kontekst (10)</button>
    </div>

    <div class="pojm-grid" id="pojm-grid">

      <!-- == POJMOVI (20) == -->

      <div class="pojm" data-cat="pojam" data-kw="metafikcija meta fikcija samosvjesna proza"><span class="pojm-cat">pojam</span><div class="pojm-word">Metafikcija</div><div class="pojm-def">Proza <b>svjesna sebe kao proze</b>. Roman govori o pisanju romana; lik zna da je u tekstu; autor komentira konstrukciju. Primjeri: Eco <em>Ime ruže</em> (izmišljeni predgovor), Calvino <em>Ako jedne zimske noći putnik</em> (čitatelj kao lik), Ugrešić <em>Štefica Cvek</em> (roman kao šivaći uzorak). Pojam skovao <em>William Gass</em> 1970.</div></div>

      <div class="pojm" data-cat="pojam" data-kw="intertekstualnost referenca citat aluzija"><span class="pojm-cat">pojam</span><div class="pojm-word">Intertekstualnost</div><div class="pojm-def">Odnos jednog teksta prema drugim tekstovima — kroz <b>citate, aluzije, preuzimanja, parafraze</b>. Pojam skovala <em>Julia Kristeva</em> 1966., oslanjajući se na Bahtina. Postmoderna ne skriva intertekstualnost — slavi je. Ecov Vilim od Baskervillea = Sherlock Holmes + redovnik.</div></div>

      <div class="pojm" data-cat="pojam" data-kw="pastiš stil oponašanje hommage"><span class="pojm-cat">pojam</span><div class="pojm-word">Pastiš</div><div class="pojm-def"><b>Ozbiljno oponašanje</b> tuđeg stila, bez ismijavanja. Hommage majstoru. Različito od parodije. Primjer: Eco piše <em>Ime ruže</em> u stilu srednjovjekovnih kronika — ne kako bi ih ismijao, nego kako bi čitatelj osjetio atmosferu. Krleža u <em>Baladama Petrice Kerempuha</em> koristi pastiš kajkavskog dijalekta.</div></div>

      <div class="pojm" data-cat="pojam" data-kw="parodija komična imitacija ismijavanje"><span class="pojm-cat">pojam</span><div class="pojm-word">Parodija</div><div class="pojm-def"><b>Komična imitacija</b> s namjerom ismijavanja ili kritike izvornika. Primjer: Brešan <em>Predstava Hamleta u selu Mrduša Donja</em> parodira Shakespearea (amaterska trupa postavlja Hamleta). Linda Hutcheon: „parodija je imitacija s kritičkom distancom".</div></div>

      <div class="pojm" data-cat="pojam" data-kw="fragmentacija kolaž razbijanje narativ"><span class="pojm-cat">pojam</span><div class="pojm-word">Fragmentacija</div><div class="pojm-def">Odbijanje linearnog pripovijedanja. Tekst se <b>lomi u kolaž</b> — kratke scene, skokovi u vremenu, različiti glasovi, prekinute rečenice. Odraz fragmentirane stvarnosti 20./21. st. Primjeri: Calvino, Ugrešić, Pynchon. U hrvatskoj književnosti anticipira je Šimić (kratki stih).</div></div>

      <div class="pojm" data-cat="pojam" data-kw="ironija postmoderna slojevita"><span class="pojm-cat">pojam</span><div class="pojm-word">Postmoderna ironija</div><div class="pojm-def">Slojevita, <b>višeznačna ironija</b> koja ne razrješava — zadržava suprotnosti bez odluke. Tekst može biti istovremeno ozbiljan i ne-ozbiljan. Čitatelj ne zna "gdje autor stoji" — i to je namjera. Linda Hutcheon: "postmoderna ironija ne ruši — zadržava dvojnost bez razrješenja".</div></div>

      <div class="pojm" data-cat="pojam" data-kw="autoreferencijalnost tekst o sebi"><span class="pojm-cat">pojam</span><div class="pojm-word">Autoreferencijalnost</div><div class="pojm-def">Tekst <b>govori o sebi</b> — komentira svoj stil, strukturu, (ne)mogućnost. Uži pojam od metafikcije. Primjer: Borges u <em>Vrtu razgranatih staza</em> piše o knjizi koja je identična strukturi njegove vlastite proze. Ecova "smrtonosna knjiga" je metafora samog romana.</div></div>

      <div class="pojm" data-cat="pojam" data-kw="dekonstrukcija derrida tekst istina"><span class="pojm-cat">pojam</span><div class="pojm-word">Dekonstrukcija</div><div class="pojm-def">Filozofska metoda <em>Jacquesa Derride</em> (1930.–2004.). <b>Demontiranje "istine" teksta</b> pokazivanjem njegovih kontradikcija i nestabilnosti. Teza: svaki tekst ima protiv-tekst u sebi. "Nema ničega izvan teksta" (<em>O gramatologiji</em>, 1967.). Teorijska pozadina postmoderne književnosti.</div></div>

      <div class="pojm" data-cat="pojam" data-kw="simulakrum baudrillard kopija"><span class="pojm-cat">pojam</span><div class="pojm-word">Simulakrum</div><div class="pojm-def">Pojam <em>Jeana Baudrillarda</em>: <b>kopija koja više ne predstavlja original</b>, jer original ne postoji ili više nije važan. Disneyland = simulakrum Amerike. U književnosti: izmišljeni "povijesni izvori", fiktivne kronike. Borges u <em>Tlön, Uqbar</em> stvara enciklopediju izmišljenog svijeta koja utječe na stvarni svijet.</div></div>

      <div class="pojm" data-cat="pojam" data-kw="kraj velikih naracija lyotard"><span class="pojm-cat">pojam</span><div class="pojm-word">Kraj velikih naracija</div><div class="pojm-def">Pojam <em>Jean-Françoisa Lyotarda</em> iz knjige <em>Postmoderno stanje</em> (1979.). Teza: <b>20. st. više ne vjeruje u jedinstvene ideološke sustave</b> (marksizam, progres, religija kao Jedna Istina). Posljedica u književnosti: otvoreni krajevi, višestruke perspektive, nepouzdani pripovjedači.</div></div>

      <div class="pojm" data-cat="pojam" data-kw="smrt autora barthes"><span class="pojm-cat">pojam</span><div class="pojm-word">Smrt autora</div><div class="pojm-def">Esej <em>Rolanda Barthesa</em> iz 1967. Teza: <b>autor nije vrhovni autoritet značenja</b> teksta. Tekst je "pletivo citata"; značenje nastaje pri čitanju. "Rođenje čitatelja mora biti plaćeno smrću autora". Temeljna teza postmoderne književne teorije.</div></div>

      <div class="pojm" data-cat="pojam" data-kw="nepouzdan pripovjedač"><span class="pojm-cat">pojam</span><div class="pojm-word">Nepouzdani pripovjedač</div><div class="pojm-def">Pripovjedač <b>kojemu ne možemo vjerovati</b> — zbog nehotičnog iskrivljavanja (ludilo, djetinjstvo, sužen perspektiv) ili svjesnog lažiranja. Pojam: <em>Wayne Booth</em>, <em>Retorika fikcije</em>, 1961. U postmoderni pojačano: Kafkin Gregor, Camusov Meursault, Raskoljnikov.</div></div>

      <div class="pojm" data-cat="pojam" data-kw="otvoreni kraj nerazriješenost"><span class="pojm-cat">pojam</span><div class="pojm-word">Otvoreni kraj</div><div class="pojm-def">Završetak <b>bez konačnog razrješenja</b>. Kod Eca: biblioteka izgara, istina je izgubljena. Kod Pavličića: tko je žena na slici, ostaje nepoznato. Odbijanje "zatvorene forme" klasičnog realizma — postmoderna kaže da stvarnost sama nema jasne krajeve.</div></div>

      <div class="pojm" data-cat="pojam" data-kw="miješanje visoko nisko"><span class="pojm-cat">pojam</span><div class="pojm-word">Miješanje visokog i niskog</div><div class="pojm-def">Brisanje granica između "ozbiljne" i "pop" kulture. Eco citira Aristotela i krimi-romane ravnopravno. Ugrešić koristi oglase iz ženskih časopisa kao književni materijal. Jameson u knjizi <em>Postmoderna ili kulturna logika kasnog kapitalizma</em> (1991.) to definira kao središnju postmodernu crtu.</div></div>

      <div class="pojm" data-cat="pojam" data-kw="žanrovski hibrid mješavina"><span class="pojm-cat">pojam</span><div class="pojm-word">Žanrovski hibrid</div><div class="pojm-def">Djelo koje <b>istovremeno pripada više žanrova</b> — krimić + filozofski roman + gotika + itd. Ecovo <em>Ime ruže</em> = krimić + povijesni roman + teološka rasprava. Pavličićev <em>Večernji akt</em> = krimić + fantastika + psihološki roman.</div></div>

      <div class="pojm" data-cat="pojam" data-kw="roman u romanu meta"><span class="pojm-cat">pojam</span><div class="pojm-word">Roman u romanu</div><div class="pojm-def">Struktura <b>gdje jedan narativ sadrži drugi</b>. Eco: Adsovo pripovijedanje sadrži rasprave, dijelove kronike, tumačenja knjiga. Calvino: roman sadrži 10 romana. Varijanta metafikcije koja naglašava <b>ugniježđenje</b>.</div></div>

      <div class="pojm" data-cat="pojam" data-kw="palimpsest genette"><span class="pojm-cat">pojam</span><div class="pojm-word">Palimpsest</div><div class="pojm-def">Srednjovjekovni rukopis na kojem je <b>prethodni tekst izbrisan i preko njega napisan novi</b>, ali stari se nazire. Metafora za intertekstualnost. <em>Gérard Genette</em> u <em>Palimpsestima</em> (1982.) razvija teoriju transtekstualnosti — 5 tipova odnosa tekst-tekst.</div></div>

      <div class="pojm" data-cat="pojam" data-kw="hiperrealnost baudrillard"><span class="pojm-cat">pojam</span><div class="pojm-word">Hiperrealnost</div><div class="pojm-def">Baudrillardov pojam — <b>stanje u kojem simulacija postaje "stvarnija" od stvarnosti</b>. TV reklame, reality-show, virtualni svjetovi. U postmodernoj književnosti: Eco, DeLillo, Pavličić (slika koja mijenja stvarnost).</div></div>

      <div class="pojm" data-cat="pojam" data-kw="borgesovska fantastika"><span class="pojm-cat">pojam</span><div class="pojm-word">Borgesovska fantastika</div><div class="pojm-def">Stil pisanja koji <b>ubacuje jedno nemoguće pravilo u inače realistički svijet</b> i tretira ga kao prirodno. Borges: beskrajne biblioteke, jezici koji mijenjaju stvarnost. U hrvatskoj književnosti: Pavličić (slika koja stari), Tribuson, Damir Miloš.</div></div>

      <div class="pojm" data-cat="pojam" data-kw="citatnost mreža citata"><span class="pojm-cat">pojam</span><div class="pojm-word">Citatnost</div><div class="pojm-def">Srodan pojam intertekstualnosti: <b>tekst kao mreža citata</b> (Barthes: "pletivo glasova"). Postmoderna normalizira citiranje bez navodnika — aluzije, parafraze, stilska preuzimanja postaju dio tkiva teksta.</div></div>

      <!-- == AUTORI (14) == -->

      <div class="pojm" data-cat="autor" data-kw="borges jorge luis argentina"><span class="pojm-cat">autor</span><div class="pojm-word">Jorge Luis Borges</div><div class="pojm-def">Argentinski pisac (1899.–1986.), <b>prekursor postmoderne</b>. Glavna djela: <em>Fikcije</em> (1944.), <em>Alef</em> (1949.). Majstor kratke priče, labirinata, beskonačnih biblioteka. Bio slijep od 1955. Utjecaj na Eca (Jorge od Burgosa = hommage), Pavličića, Tribusona.</div></div>

      <div class="pojm" data-cat="autor" data-kw="eco umberto italija semiotika"><span class="pojm-cat">autor</span><div class="pojm-word">Umberto Eco</div><div class="pojm-def">Talijanski semiotičar i romanopisac (1932.–2016.). Prof. u Bologni. Romani: <em>Ime ruže</em> (1980.), <em>Foucaultovo njihalo</em> (1988.), <em>Baudolino</em> (2000.). Teoretski radovi: <em>Otvoreno djelo</em> (1962.), <em>Postille uz Ime ruže</em> (1983.). <b>Sam teoretičar postmoderne</b> — roman piše da demonstrira teoriju.</div></div>

      <div class="pojm" data-cat="autor" data-kw="calvino italo italija"><span class="pojm-cat">autor</span><div class="pojm-word">Italo Calvino</div><div class="pojm-def">Talijanski pisac (1923.–1985.). Glavna djela: <em>Nevidljivi gradovi</em> (1972.), <em>Ako jedne zimske noći putnik</em> (1979.), <em>Kozmikomike</em> (1965.). Majstor <b>fragmentarne forme i metafikcije</b>. Član pokreta <em>OuLiPo</em> (Ouvroir de littérature potentielle).</div></div>

      <div class="pojm" data-cat="autor" data-kw="kundera milan češka francuska"><span class="pojm-cat">autor</span><div class="pojm-word">Milan Kundera</div><div class="pojm-def">Češko-francuski pisac (1929.–2023.). Nakon 1968. emigrirao u Francusku. Glavna djela: <em>Nepodnošljiva lakoća postojanja</em> (1984.), <em>Šala</em> (1967.), teorijski <em>Umijeće romana</em> (1986.). <b>Eseistički roman</b> — narativ prošaran filozofskim digresijama.</div></div>

      <div class="pojm" data-cat="autor" data-kw="beckett samuel irska drama apsurd"><span class="pojm-cat">autor</span><div class="pojm-word">Samuel Beckett</div><div class="pojm-def">Irsko-francuski pisac (1906.–1989.), Nobel 1969. <em>Čekajući Godota</em> (1953.), <em>Kraj igre</em> (1957.). Drama apsurda — <b>anticipira postmodernu</b>. U NCVVO izbornom popisu.</div></div>

      <div class="pojm" data-cat="autor" data-kw="pavličić pavao hrvatska krimić"><span class="pojm-cat">autor</span><div class="pojm-word">Pavao Pavličić</div><div class="pojm-def">Hrvatski pisac i profesor komparativne književnosti (rođ. 1946.). <b>Središnja figura hrvatske postmoderne</b>. Glavna djela: <em>Večernji akt</em> (1981.), <em>Koraljna vrata</em> (1990.), <em>Rukoljub</em> (eseji). Borgesovska linija hrvatske proze.</div></div>

      <div class="pojm" data-cat="autor" data-kw="ugrešić dubravka hrvatska feministička"><span class="pojm-cat">autor</span><div class="pojm-word">Dubravka Ugrešić</div><div class="pojm-def">Hrvatska spisateljica (1949.–2023.). Glavna djela: <em>Štefica Cvek u raljama života</em> (1981.), <em>Forsiranje romana-reke</em> (1988.), <em>Muzej bezuvjetne predaje</em>. <b>Feministička postmoderna</b>, pop-kulturni kolaž. Emigrirala 1993.</div></div>

      <div class="pojm" data-cat="autor" data-kw="tribuson goran hrvatska"><span class="pojm-cat">autor</span><div class="pojm-word">Goran Tribuson</div><div class="pojm-def">Hrvatski pisac (rođ. 1948.). Jedan od "borgesovaca" hrvatske postmoderne. <em>Povijest pornografije</em> (1988.), <em>Polagana predaja</em>, autor krimi-serije o Nikoli Banica.</div></div>

      <div class="pojm" data-cat="autor" data-kw="šoljan antun kratki izlet"><span class="pojm-cat">autor</span><div class="pojm-word">Antun Šoljan</div><div class="pojm-def">Hrvatski pisac (1932.–1993.). <em>Kratki izlet</em> (1965.) — rana anticipacija postmoderne. <em>Brod u boci</em>, <em>Drugi ljudi na Mjesecu</em> (1979.). Prevoditelj, urednik Krugova. Most između moderne i postmoderne u hrvatskoj prozi.</div></div>

      <div class="pojm" data-cat="autor" data-kw="novak slobodan mirisi zlato"><span class="pojm-cat">autor</span><div class="pojm-word">Slobodan Novak</div><div class="pojm-def">Hrvatski pisac (1924.–2016.). <em>Mirisi, zlato i tamjan</em> (1968.) — u NCVVO izbornom popisu. <b>Majstor introspektivne proze</b>. Teme starenja, pamćenja, raspada.</div></div>

      <div class="pojm" data-cat="autor" data-kw="mihalić slavko poezija"><span class="pojm-cat">autor</span><div class="pojm-word">Slavko Mihalić</div><div class="pojm-def">Hrvatski pjesnik (1928.–2007.), član <b>krugovaša</b>. U NCVVO izbornom popisu. Intelektualna, refleksivna poezija — <b>anticipira postmoderni senzibilitet</b>.</div></div>

      <div class="pojm" data-cat="autor" data-kw="dragojević danijel poezija"><span class="pojm-cat">autor</span><div class="pojm-word">Danijel Dragojević</div><div class="pojm-def">Hrvatski pjesnik (rođ. 1934.). Majstor metafizičke poezije, <b>bliske borgesovskoj liniji</b>. U NCVVO izbornom popisu. Hermetičan, filozofski stil.</div></div>

      <div class="pojm" data-cat="autor" data-kw="brešan ivo hamlet mrduša"><span class="pojm-cat">autor</span><div class="pojm-word">Ivo Brešan</div><div class="pojm-def">Hrvatski dramatičar (1936.–2017.). <em>Predstava Hamleta u selu Mrduša Donja</em> (1965.), <em>Nečastivi na Filozofskom fakultetu</em>. <b>Parodija kao glavna tehnika</b> — u NCVVO izbornom popisu.</div></div>

      <div class="pojm" data-cat="autor" data-kw="pynchon thomas amerika"><span class="pojm-cat">autor</span><div class="pojm-word">Thomas Pynchon</div><div class="pojm-def">Američki pisac (rođ. 1937.). <em>Dražba br. 49</em> (1966.), <em>Gravity's Rainbow</em> (1973.). <b>Ikoničan postmodernist</b> — enciklopedijske, fragmentarne, paranoidne proze. Skriva se od javnosti (nema fotografija).</div></div>

      <!-- == DJELA (11) == -->

      <div class="pojm" data-cat="djelo" data-kw="ime ruže eco 1980 krimić samostan"><span class="pojm-cat">djelo</span><div class="pojm-word">Ime ruže (1980)</div><div class="pojm-def">Roman Umberta Eca. <b>Paradigmatski postmoderni krimić</b>. Godina 1327., benediktinski samostan u sjevernoj Italiji. Vilim od Baskervillea istražuje niz ubojstava. U središtu: tajna knjiga — izgubljena Aristotelova <em>Poetika II</em> o komediji. Prodano 50 milijuna primjeraka. Film 1986. (Sean Connery). U NCVVO izbornom popisu.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="večernji akt pavličić 1981 slika"><span class="pojm-cat">djelo</span><div class="pojm-word">Večernji akt (1981)</div><div class="pojm-def">Roman Pavla Pavličića. Slikar Krsto Brodnjak otkrije <b>sliku akta koja stari iz godine u godinu</b>. Opsjedljiva potraga za istinom. <em>Žanrovski hibrid</em> — krimić + fantastika + psihološki roman. Otvoreni kraj. Jedno od ključnih djela hrvatske postmoderne.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="štefica cvek ugrešić 1981 šivaći"><span class="pojm-cat">djelo</span><div class="pojm-word">Štefica Cvek u raljama života (1981)</div><div class="pojm-def">Roman Dubravke Ugrešić. <b>Roman kao šivaći uzorak</b> — poglavlja su "uzorci". Kombinira oglase, recepte, citate iz sentimentalnih romana. Feministička postmoderna u hrvatskom izdanju. Film 1984. (Rajko Grlić).</div></div>

      <div class="pojm" data-cat="djelo" data-kw="fikcije borges 1944 kratke"><span class="pojm-cat">djelo</span><div class="pojm-word">Fikcije (1944)</div><div class="pojm-def">Zbirka kratkih priča Borgesa. Sadrži: <em>Vrt razgranatih staza</em>, <em>Babilonska biblioteka</em>, <em>Tlön, Uqbar, Orbis Tertius</em>. <b>Temelj moderne fantastike i prekursor postmoderne.</b> Svaka priča poigrava se s pojmom fikcije, knjige, beskraja.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="ako jedne zimske noći putnik calvino 1979"><span class="pojm-cat">djelo</span><div class="pojm-word">Ako jedne zimske noći putnik (1979)</div><div class="pojm-def">Roman Itala Calvina. <b>Roman u kojem je čitatelj lik</b>. Sastoji se od 10 početaka različitih romana koji nikad ne budu dovršeni. <em>Paradigma metafikcije.</em> Poglavlja naizmjence: čitatelj traži nastavak + "sljedeći roman".</div></div>

      <div class="pojm" data-cat="djelo" data-kw="nepodnošljiva lakoća kundera 1984"><span class="pojm-cat">djelo</span><div class="pojm-word">Nepodnošljiva lakoća postojanja (1984)</div><div class="pojm-def">Roman Milana Kundere. <b>Eseistički roman</b> — filozofski digresi o Nietzscheovoj "vječnoj povratnosti" prošivani narativom. Praško proljeće 1968. Likovi: Tomáš, Tereza, Sabina, Franz. Film 1988. (Philip Kaufman).</div></div>

      <div class="pojm" data-cat="djelo" data-kw="čekajući godota beckett 1953"><span class="pojm-cat">djelo</span><div class="pojm-word">Čekajući Godota (1953)</div><div class="pojm-def">Drama Samuela Becketta. Vladimir i Estragon čekaju Godota koji nikad ne dolazi. <b>Drama apsurda, anticipira postmodernu</b>. "Ništa se ne događa, dvaput". Otvoreni kraj, cirkularna struktura. U NCVVO izbornom popisu.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="kratki izlet šoljan 1965"><span class="pojm-cat">djelo</span><div class="pojm-word">Kratki izlet (1965)</div><div class="pojm-def">Roman Antuna Šoljana. Grupa arheoloških entuzijasta traži izgubljene srednjovjekovne freske. <b>Rana anticipacija postmoderne u Hrvatskoj.</b> Tema besmisla, opsesivne potrage, izgubljene istine. U NCVVO izbornom popisu.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="mirisi zlato tamjan novak 1968"><span class="pojm-cat">djelo</span><div class="pojm-word">Mirisi, zlato i tamjan (1968)</div><div class="pojm-def">Roman Slobodana Novaka. Starac na otoku njeguje paraliziranu gospođu Mardiganu. <b>Introspektivna, fragmentarna proza</b> — predpostmoderna u hrvatskoj književnosti. U NCVVO izbornom popisu.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="predstava hamleta mrduša brešan 1965"><span class="pojm-cat">djelo</span><div class="pojm-word">Predstava Hamleta u selu Mrduša Donja (1965)</div><div class="pojm-def">Drama Ive Brešana. <b>Parodija Shakespearea</b> + politička satira. Seljačka trupa postavlja Hamleta s katastrofalnim i groteskno-komičnim rezultatima. U NCVVO izbornom popisu. Školski primjer parodije.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="foucaultovo njihalo eco 1988"><span class="pojm-cat">djelo</span><div class="pojm-word">Foucaultovo njihalo (1988)</div><div class="pojm-def">Drugi roman Umberta Eca. Tri urednika izmišljaju teoriju zavjere — teorija počinje oblikovati stvarnost. <b>Simulakrum u djelovanju</b>. Eksplicitna meta-refleksija o fikciji i vjerovanju.</div></div>

      <!-- == KONTEKST (10) == -->

      <div class="pojm" data-cat="kontekst" data-kw="quorum časopis 1984 zagreb"><span class="pojm-cat">kontekst</span><div class="pojm-word">Časopis Quorum</div><div class="pojm-def">Hrvatski književni časopis pokrenut <b>1984.</b> u Zagrebu. Urednici: Branko Čegec, Zvonko Maković. <b>Središnja platforma hrvatske postmoderne generacije</b> ("kvorumaši"). Prekidao monopol starijih časopisa (<em>Forum</em>, <em>Republika</em>). Otvorio prostor za mlade postmoderne autore.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="barthes roland francuska teorija"><span class="pojm-cat">kontekst</span><div class="pojm-word">Roland Barthes</div><div class="pojm-def">Francuski književni teoretičar (1915.–1980.). Glavna djela: <em>Mitologije</em> (1957.), <em>Smrt autora</em> (1967.), <em>S/Z</em> (1970.). <b>Jedan od temelja postmoderne teorije</b>. Razvio strukturalističko i poststrukturalističko čitanje.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="lyotard jean françois postmoderno"><span class="pojm-cat">kontekst</span><div class="pojm-word">Jean-François Lyotard</div><div class="pojm-def">Francuski filozof (1924.–1998.). <em>Postmoderno stanje</em> (1979.) — <b>filozofska dijagnoza postmoderne</b>. Teza: "nepovjerenje u velike naracije". Knjiga naručena od quebečke vlade kao izvještaj o stanju znanja — postala manifest.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="kristeva julia bugarska francuska"><span class="pojm-cat">kontekst</span><div class="pojm-word">Julia Kristeva</div><div class="pojm-def">Bugarsko-francuska teoretičarka (rođ. 1941.). <b>Skovala pojam intertekstualnost</b> 1966. u eseju o Bahtinu. <em>Semiotiké</em> (1969.), <em>Revolucija poetskog jezika</em> (1974.). Veza strukturalizma, psihoanalize i feminizma.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="derrida jacques francuska dekonstrukcija"><span class="pojm-cat">kontekst</span><div class="pojm-word">Jacques Derrida</div><div class="pojm-def">Francusko-alžirski filozof (1930.–2004.). <b>Osnivač dekonstrukcije</b>. Glavna djela: <em>O gramatologiji</em> (1967.), <em>Pismo i razlika</em> (1967.). Teza: "nema ničega izvan teksta". Teorijska okosnica postmodernog pristupa književnosti.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="baudrillard jean francuska simulakrum"><span class="pojm-cat">kontekst</span><div class="pojm-word">Jean Baudrillard</div><div class="pojm-def">Francuski filozof (1929.–2007.). <em>Simulakrum i simulacija</em> (1981.), <em>Amerika</em> (1986.). <b>Teoretičar hiperrealnosti</b>. Utjecaj na film (<em>Matrix</em>), književnost (DeLillo, Pavličić), umjetnost.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="foucault michel francuska moć"><span class="pojm-cat">kontekst</span><div class="pojm-word">Michel Foucault</div><div class="pojm-def">Francuski filozof i povjesničar (1926.–1984.). <em>Riječi i stvari</em> (1966.), <em>Arheologija znanja</em> (1969.), <em>Nadzor i kazna</em> (1975.). <b>Analiza odnosa moći i diskurza</b>. Eco ga spominje u <em>Foucaultovom njihalu</em> (iako je glavni Foucault tamo fizičar Foucault, ne filozof).</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="jameson fredric amerika"><span class="pojm-cat">kontekst</span><div class="pojm-word">Fredric Jameson</div><div class="pojm-def">Američki teoretičar (rođ. 1934.). <em>Postmoderna ili kulturna logika kasnog kapitalizma</em> (1984. esej, 1991. knjiga). <b>Marksistička analiza postmoderne</b>: postmoderna = estetika kasnog kapitalizma. Razlikuje pastiš i parodiju.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="hutcheon linda kanada"><span class="pojm-cat">kontekst</span><div class="pojm-word">Linda Hutcheon</div><div class="pojm-def">Kanadska teoretičarka (rođ. 1947.). <em>A Theory of Parody</em> (1985.), <em>Poetics of Postmodernism</em> (1988.). <b>Razradila teoriju postmoderne ironije i parodije</b> kao kritičkih praksi, ne destruktivnih.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="poststrukturalizam teorija"><span class="pojm-cat">kontekst</span><div class="pojm-word">Poststrukturalizam</div><div class="pojm-def">Filozofsko-teorijski pokret od kasnih 1960-ih. Reakcija na strukturalizam (de Saussure, Lévi-Strauss). Glavni predstavnici: <b>Derrida, Foucault, Barthes (kasni), Kristeva, Deleuze</b>. Teorijska podloga postmoderne književnosti. Ključne teze: nestabilnost značenja, moć kroz jezik, kraj subjekta.</div></div>

    </div>

    <div class="nav-row">
      <span class="nb" onclick="sw(3)">‹ 📖 Citatnik</span>
      <span class="nb primary" onclick="sw(5)">📌 Flashcards ›</span>
    </div>
  </div>

<!-- ========================
       TAB 5 · DRILL
       ======================== -->
  <div class="layer" id="l5" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">flashcards</span>
      <span class="pill p-go">spari</span>
      <span class="pill p-r">brzo učenje</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Drill — aktivno učenje</div>
      <div class="box-int-txt">
        <strong>Flashcards</strong> za pojmove + <strong>matching</strong> (djelo › autor). Brže od pasivnog čitanja, direktno priprema za teoriju književnosti i 12 bodova.
      </div>
    </div>

    <!-- FLASHCARDS -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · Flashcards · okreni karticu</div><div class="sec-line"></div></div>

    <style>
      .fc-wrap{display:flex;flex-direction:column;align-items:center;gap:18px;margin:16px 0 24px}
      .fc-counter{font-family:var(--mono);font-size:11px;color:var(--t3);letter-spacing:1.5px;text-transform:uppercase}
      .fc-counter b{color:var(--bronze-l)}
      .fc{width:100%;max-width:520px;min-height:220px;perspective:1500px;cursor:pointer}
      .fc-inner{position:relative;width:100%;height:100%;min-height:220px;transition:transform .6s cubic-bezier(.4,0,.2,1);transform-style:preserve-3d}
      .fc.flipped .fc-inner{transform:rotateY(180deg)}
      .fc-front,.fc-back{position:absolute;inset:0;min-height:220px;padding:40px 32px;border-radius:var(--r4);backface-visibility:hidden;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;border:1px solid var(--bdm)}
      .fc-front{background:linear-gradient(135deg,var(--card),var(--ele))}
      .fc-back{background:linear-gradient(135deg,rgba(220,50,47,.12),rgba(232,201,122,.05));border-color:var(--bd-br);transform:rotateY(180deg)}
      .fc-cat{font-family:var(--mono);font-size:9px;letter-spacing:2px;text-transform:uppercase;color:var(--bronze);margin-bottom:12px}
      .fc-term{font-family:var(--display);font-size:30px;font-weight:700;color:var(--t1);letter-spacing:1px}
      .fc-hint{font-family:var(--mono);font-size:10px;color:var(--t3);margin-top:22px;letter-spacing:1px}
      .fc-def{font-family:var(--serif);font-size:16px;line-height:1.65;color:var(--t1);max-width:420px}
      .fc-controls{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
      .fcb{padding:10px 20px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);color:var(--t2);font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all .2s}
      .fcb:hover{border-color:var(--bd-br);color:var(--bronze-l)}
      .fcb.primary{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border-color:var(--bronze)}
      .fcb.know{border-color:var(--bd-g);color:var(--green)}
      .fcb.know:hover{background:var(--dim-g)}
      .fcb.dont{border-color:var(--bd-r);color:var(--red)}
      .fcb.dont:hover{background:var(--dim-r)}
      .fc-stats{display:flex;gap:20px;margin-top:10px;font-family:var(--mono);font-size:11px}
      .fc-stats span{color:var(--t3)}
      .fc-stats b{color:var(--green)}
      .fc-stats i{color:var(--red);font-style:normal}
    </style>

    <div class="fc-wrap">
      <div class="fc-counter"><span id="fc-num"><b>1</b> / 20</span></div>
      <div class="fc" id="fc-card" onclick="fcFlip()">
        <div class="fc-inner" id="fc-inner">
          <div class="fc-front">
            <div class="fc-cat" id="fc-cat-f">PREOBRAŽAJ</div>
            <div class="fc-term" id="fc-term">Gregor Samsa</div>
            <div class="fc-hint">Klikni za okretanje ?</div>
          </div>
          <div class="fc-back">
            <div class="fc-cat" id="fc-cat-b">DEFINICIJA</div>
            <div class="fc-def" id="fc-def">Protagonist Kafkina Preobražaja (1915.). Trgovački putnik, oko 25–30 godina, jedini hranitelj obitelji. Otplaćuje očev dug. Jednog jutra se budi kao golem kukac („Ungeziefer"). Iako fizički izgubi ljudski oblik, svijest mu ostaje. Asonanca s prezimenom Kafka. Umire sam u sobi nakon Gretine presude.</div>
          </div>
        </div>
      </div>
      <div class="fc-controls">
        <button class="fcb dont" onclick="fcMark(0)">❌ Ne znam</button>
        <button class="fcb know" onclick="fcMark(1)">✅ Znam</button>
        <button class="fcb" onclick="fcSkip()">Preskoči ›</button>
        <button class="fcb" onclick="fcShuffle()">📌 Promiješaj</button>
        <button class="fcb primary" onclick="fcReset()">🔁 Reset</button>
      </div>
      <div class="fc-stats"><span>točno: <b id="fc-right">0</b></span><span>krivo: <i id="fc-wrong">0</i></span></div>
    </div>

    <!-- MATCHING -->
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
    <div class="mg-stats"><span>spareno: <b id="mg-score">0</b> / <span id="mg-total">7</span></span></div>
      <div class="pro-gate-overlay">
        <div class="pro-gate-fade"></div>
        <div class="pro-gate-cta">
          <div class="pro-gate-label">9 <b>pair matching</b> vježbi — djelo › autor · pojam › epoha · stil › autor</div>
          <a class="pro-gate-btn" href="/pricing?ctx=drill_matching_h10">Otključaj — 9,99€/mj</a>
          <div class="pro-gate-meta">Otkaži bilo kad · Free trial 7 dana</div>
        </div>
      </div>
    </div>

    <div class="nav-row">
      <span class="nb" onclick="sw(4)">‹ Pojmovnik</span>
      <span class="nb primary" onclick="sw(6)">🧠 Kviz ›</span>
    </div>
  </div>
  <!-- ========================
       TAB 6 · KVIZ
       ======================== -->
  <div class="layer" id="l6" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">20 pitanja</span>
      <span class="pill p-go">višestruki izbor</span>
      <span class="pill p-r">bez limita vremena</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Kviz — testiraj znanje iz cijelog poglavlja</div>
      <div class="box-int-txt">
        Format identičan maturi — zadaci višestrukog izbora s 4 odgovora. Pokriva sve dijelove: Kafka i Preobražaj (likovi, radnja, kompozicija, simbolika), moderna kao epoha (ekspresionizam, parabola, alegorija, apsurd, kafkijanski), i kontekst (Nietzsche, Freud, ekspresionistički krug, paralele s Dostojevskim). Na kraju dobivaš ocjenu + pregled promašenih pitanja.
      </div>
    </div>

    <style>
      .qz-wrap{max-width:700px;margin:0 auto}
      .qz-prog{display:flex;justify-content:space-between;font-family:var(--mono);font-size:10px;letter-spacing:1.5px;color:var(--t3);text-transform:uppercase;margin-bottom:8px}
      .qz-prog b{color:var(--bronze-l)}
      .qz-bar{height:4px;background:var(--bd);border-radius:2px;overflow:hidden;margin-bottom:32px}
      .qz-bar-f{height:100%;background:linear-gradient(90deg,var(--bronze-d),var(--bronze),var(--gold));transition:width .5s cubic-bezier(.4,0,.2,1)}
      .qz-q{font-family:var(--serif);font-size:20px;font-weight:600;line-height:1.4;color:var(--t1);margin-bottom:22px}
      .qz-opts{display:flex;flex-direction:column;gap:10px}
      .qz-opt{padding:14px 18px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);cursor:pointer;transition:all .2s;display:flex;align-items:center;gap:14px;font-family:var(--serif);font-size:14.5px;color:var(--t1);text-align:left;width:100%}
      .qz-opt:hover:not(:disabled){border-color:var(--bd-br);background:var(--hov)}
      .qz-key{width:28px;height:28px;border-radius:var(--r1);background:var(--ele);display:flex;align-items:center;justify-content:center;font-family:var(--display);font-size:13px;font-weight:700;color:var(--bronze-l);flex-shrink:0}
      .qz-opt.ok{border-color:var(--green);background:var(--dim-g)}
      .qz-opt.ok .qz-key{background:var(--green);color:#0F0605}
      .qz-opt.ng{border-color:var(--red);background:var(--dim-r)}
      .qz-opt.ng .qz-key{background:var(--red);color:#F5E6D3}
      .qz-opt:disabled{cursor:default}
      .qz-fb{margin-top:16px;padding:14px 18px;border-radius:var(--r3);font-family:var(--serif);font-size:14px;line-height:1.6;display:none}
      .qz-fb.show{display:block}
      .qz-fb.ok{background:var(--dim-g);border:1px solid var(--bd-g);color:var(--green)}
      .qz-fb.ng{background:var(--dim-r);border:1px solid var(--bd-r);color:var(--red)}
      .qz-fb b{color:inherit;font-weight:700}
      .qz-nav{display:flex;justify-content:flex-end;margin-top:24px}
      .qz-start{text-align:center;padding:36px 20px}
      .qz-start-ico{font-size:48px;margin-bottom:10px}
      .qz-start h3{font-family:var(--display);font-size:22px;color:var(--t1);letter-spacing:1px;margin-bottom:10px}
      .qz-start p{font-family:var(--serif);font-size:14.5px;color:var(--t2);max-width:440px;margin:0 auto 22px;line-height:1.65}
      .qz-result{text-align:center;padding:40px 24px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4)}
      .qz-score{font-family:var(--display);font-size:68px;font-weight:700;background:linear-gradient(135deg,var(--bronze),var(--gold));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1;margin-bottom:8px}
      .qz-grade{font-family:var(--display);font-size:18px;color:var(--t1);letter-spacing:1.5px;margin-bottom:6px}
      .qz-msg{font-family:var(--serif);font-size:14px;color:var(--t2);margin-bottom:24px}
      .qz-wrong-item{padding:14px 18px;background:var(--card);border:1px solid var(--bdm);border-left:3px solid var(--red);border-radius:var(--r2);margin-bottom:8px;text-align:left}
      .qz-wrong-q{font-family:var(--serif);font-size:14px;color:var(--t1);font-weight:600;margin-bottom:4px}
      .qz-wrong-a{font-family:var(--serif);font-size:13px;color:var(--t2)}
      .qz-wrong-a b{color:var(--bronze-l)}
    </style>

    <div class="qz-wrap" id="qz-app"></div>

    <div class="nav-row" style="margin-top:30px">
      <span class="nb" onclick="sw(5)">‹ Drill</span>
      <span class="nb primary" onclick="sw(7)">✅ Checkpoint ›</span>
    </div>
  </div>

  <!-- ========================
       TAB 7 · CHECKPOINT
       ======================== -->
  <div class="layer" id="l7" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-g">završetak poglavlja</span>
      <span class="pill p-go">self-check</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Provjera — što zaista znaš?</div>
      <div class="box-int-txt">
        Označi stavke koje si <em>stvarno</em> usvojio. Ne žuri — ako nešto nisi siguran, vrati se na odgovarajući tab. <strong>Cilj: svih 10 označeno prije prelaska na H11.</strong>
      </div>
    </div>

    <style>
      .cp-grid{display:flex;flex-direction:column;gap:8px;margin:18px 0 24px}
      .cp-item{display:flex;align-items:center;gap:14px;padding:16px 20px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);cursor:pointer;transition:all .2s;font-family:var(--serif);font-size:15px;color:var(--t1);line-height:1.5}
      .cp-item:hover{border-color:var(--bd-br);transform:translateX(4px)}
      .cp-box{width:24px;height:24px;border-radius:6px;border:2px solid var(--bdl);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:14px;color:transparent;transition:all .2s;background:var(--inp)}
      .cp-item.done{border-color:var(--bd-g);background:var(--dim-g)}
      .cp-item.done .cp-box{background:var(--green);border-color:var(--green);color:#0F0605;font-weight:700}
      .cp-hint{font-family:var(--mono);font-size:10px;color:var(--t3);margin-left:auto;text-transform:uppercase;letter-spacing:1px;flex-shrink:0}
      .cp-summary{display:flex;justify-content:space-between;align-items:center;padding:18px 22px;background:linear-gradient(135deg,var(--dim-go),rgba(232,201,122,.03));border:1px solid var(--bd-go);border-radius:var(--r3);margin:20px 0 24px}
      .cp-sum-txt{font-family:var(--serif);font-size:14.5px;color:var(--t1)}
      .cp-sum-txt b{color:var(--gold)}
      .cp-sum-pct{font-family:var(--display);font-size:28px;font-weight:700;color:var(--gold);letter-spacing:1px}
      .cp-final{padding:26px;background:linear-gradient(135deg,var(--dim-g),rgba(107,148,100,.04));border:1px solid var(--bd-g);border-radius:var(--r4);text-align:center;display:none;margin-top:20px}
      .cp-final.show{display:block;animation:fadeUp .5s ease}
      .cp-final-ico{font-size:48px;margin-bottom:8px}
      .cp-final-title{font-family:var(--display);font-size:20px;font-weight:700;color:var(--green);letter-spacing:1px;margin-bottom:6px}
      .cp-final-msg{font-family:var(--serif);font-size:14.5px;color:var(--t1);margin-bottom:18px;line-height:1.6}
      .cp-actions{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
      /* PDF export box */
      .pdf-export{display:flex;gap:14px;margin-top:20px;padding:18px 20px;background:linear-gradient(135deg,var(--dim-t),rgba(91,192,190,.03));border:1px solid var(--bd-t);border-radius:var(--r3);text-align:left}
      .pdf-export-ico{font-size:32px;flex-shrink:0;line-height:1}
      .pdf-export-body{flex:1;min-width:0}
      .pdf-export-ttl{font-family:var(--display);font-size:12px;font-weight:700;color:var(--teal);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px}
      .pdf-export-txt{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.55;margin-bottom:12px}
      .pdf-export-txt strong{color:var(--t1)}
      .pdf-actions{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px}
      .pdf-export-btn{padding:11px 18px;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all .15s;display:inline-flex;align-items:center;gap:6px}
      .pdf-primary{background:var(--teal);color:var(--bg);min-width:200px;justify-content:center}
      .pdf-primary:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 4px 14px rgba(91,192,190,.35)}
      .pdf-secondary{background:transparent;color:var(--t2);border:1px solid var(--bdm)}
      .pdf-secondary:hover:not(:disabled){color:var(--teal);border-color:var(--bd-t)}
      .pdf-export-btn:disabled{opacity:.6;cursor:wait}
      .pdf-beta{padding:1px 5px;background:rgba(232,201,122,.15);color:var(--gold);border-radius:3px;font-size:8.5px;letter-spacing:.5px;font-weight:700}
      .pdf-export-hint{margin-top:6px;font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:.3px;line-height:1.6}
      .pdf-export-hint strong{color:var(--t2);font-weight:700}
      .pdf-export-hint em{color:var(--bronze-l);font-style:normal}
      .pdf-export-hint kbd{display:inline-block;padding:1px 5px;background:var(--inp);border:1px solid var(--bdm);border-radius:3px;font-family:var(--mono);font-size:10px;color:var(--t2);margin:0 1px}
      @media(max-width:560px){
        .pdf-export{flex-direction:column;gap:10px;padding:16px}
        .pdf-actions{flex-direction:column}
        .pdf-export-btn{width:100%;justify-content:center}
      }
    


/* == INTERACTIVE SCENES — Tab 1 SEC 06 == */
.scenes{display:flex;flex-direction:column;gap:8px;margin:18px 0 22px}
.scene{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);overflow:hidden;transition:border-color .2s, box-shadow .2s}
.scene:hover{border-color:var(--bd-br)}
.scene[open]{border-color:var(--bd-go);box-shadow:0 2px 8px rgba(232,201,122,.08)}
.scene-sum{display:grid;grid-template-columns:auto 1fr auto;gap:14px;align-items:center;padding:14px 16px;cursor:pointer;list-style:none;user-select:none}
.scene-sum::-webkit-details-marker{display:none}
.scene-sum::after{content:'?';font-family:var(--mono);font-size:14px;color:var(--t3);transition:transform .2s;margin-left:8px}
.scene[open] .scene-sum::after{transform:rotate(180deg);color:var(--gold)}
.scene-num{font-family:var(--display);font-size:18px;font-weight:700;color:var(--bronze-l);min-width:32px;letter-spacing:.5px}
.scene[open] .scene-num{color:var(--gold)}
.scene-ttl{font-family:var(--serif);font-size:14.5px;color:var(--t1);font-weight:600;line-height:1.4}
.scene-ttl em{color:var(--bronze-l);font-style:italic;font-weight:400}
.scene-meta{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:1.5px;padding:3px 8px;background:var(--ele);border:1px solid var(--bdm);border-radius:10px;text-transform:uppercase;white-space:nowrap}
.scene-body{padding:0 16px 16px}
.scene-quote{padding:12px 14px;background:var(--sur);border-left:3px solid var(--gold);border-radius:0 var(--r2) var(--r2) 0;font-family:var(--serif);font-size:13.5px;line-height:1.55;color:var(--t1);font-style:italic;margin-bottom:10px}
.scene-why{font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t2)}
.scene-why b{color:var(--t1)}
@media (max-width:600px){
  .scene-sum{grid-template-columns:auto 1fr;gap:10px;padding:12px 14px}
  .scene-meta{grid-column:2;justify-self:start;margin-top:2px}
  .scene-num{font-size:16px;min-width:26px}
  .scene-ttl{font-size:13.5px}
}
@media print{
  .scene{break-inside:avoid;border:1px solid #999!important}
  .scene[open]{box-shadow:none!important}
  .scene-body{display:block!important;padding:0 16px 16px}
  details > summary::after{display:none!important}
}


/* == GLOSSARY TOOLTIP — definicije u tekstu == */
.gloss{position:relative;border-bottom:1px dotted var(--bd-go);cursor:help;color:var(--gold);font-style:normal;transition:color .15s, border-color .15s}
.gloss:hover, .gloss:focus{color:var(--gold-l, #f0d97e);border-bottom-color:var(--gold);outline:none}
.gloss-tip{position:absolute;bottom:calc(100% + 6px);left:50%;transform:translateX(-50%);min-width:200px;max-width:300px;padding:10px 12px;background:#0a0a0a;color:var(--t1);border:1px solid var(--bd-go);border-radius:var(--r2);font-family:var(--serif);font-size:12.5px;line-height:1.5;font-style:normal;font-weight:400;box-shadow:0 4px 14px rgba(0,0,0,.5);opacity:0;pointer-events:none;transition:opacity .18s, transform .18s;z-index:50;text-align:left}
.gloss-tip::after{content:'';position:absolute;top:100%;left:50%;transform:translateX(-50%);border-style:solid;border-width:6px 6px 0 6px;border-color:var(--bd-go) transparent transparent transparent}
.gloss:hover .gloss-tip, .gloss:focus .gloss-tip{opacity:1;transform:translateX(-50%) translateY(-2px)}
.gloss-tip b{color:var(--gold);font-weight:700}
@media (max-width:600px){
  .gloss-tip{position:fixed;left:10px;right:10px;bottom:auto;top:auto;transform:none;max-width:none;min-width:0}
  .gloss-tip::after{display:none}
  .gloss:hover .gloss-tip, .gloss:focus .gloss-tip{transform:none}
}
@media print{
  .gloss{border-bottom:none;color:inherit}
  .gloss-tip{display:none!important}
}


/* == A11Y: Skip-to-content == */
.skip-link{position:absolute;top:-40px;left:8px;z-index:9999;padding:10px 18px;background:var(--gold);color:#0a0a0a;font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;text-decoration:none;border-radius:4px;transition:top .18s}
.skip-link:focus{top:8px;outline:3px solid var(--bd-go);outline-offset:2px}

/* == FEATURED QUOTE — Tab 0 emocionalni hook == */
.featured-quote{display:flex;align-items:flex-start;gap:18px;margin:22px 0 24px;padding:24px 28px 24px 22px;background:linear-gradient(135deg,rgba(232,201,122,.08) 0%,rgba(224,82,82,.04) 100%);border:1px solid var(--bd-go);border-radius:var(--r3);position:relative;overflow:hidden;transition:border-color .25s}
.featured-quote::before{content:'';position:absolute;top:0;left:0;width:4px;height:100%;background:linear-gradient(180deg,var(--gold),var(--bronze))}
.featured-quote::after{content:'';position:absolute;top:-30px;right:-30px;width:120px;height:120px;background:radial-gradient(circle,rgba(232,201,122,.18) 0%,transparent 70%);pointer-events:none}
.featured-quote:hover{border-color:var(--gold)}
.fq-mark{font-family:var(--display);font-size:78px;line-height:1;color:var(--gold);opacity:.4;font-weight:300;margin-top:-8px;flex-shrink:0;font-style:italic}
.fq-body{flex:1;min-width:0}
.fq-text{font-family:var(--serif);font-size:18px;line-height:1.45;color:var(--t1);font-style:italic;font-weight:400}
.fq-meta{margin-top:10px;font-family:var(--mono);font-size:10.5px;color:var(--t3);letter-spacing:.5px}
.fq-meta em{color:var(--gold);font-style:italic}
.fq-copy{flex-shrink:0;width:34px;height:34px;background:transparent;color:var(--t3);border:1px solid var(--bdm);border-radius:var(--r2);cursor:pointer;font-size:14px;transition:all .18s;display:flex;align-items:center;justify-content:center}
.fq-copy:hover{color:var(--gold);border-color:var(--bd-go);background:var(--dim-go)}
@media (max-width:600px){
  .featured-quote{padding:18px 16px 18px 14px;gap:10px}
  .fq-mark{font-size:54px;margin-top:-4px}
  .fq-text{font-size:15.5px;line-height:1.5}
}

/* == COMPARATOR — Gregor vs Raskoljnikov side-by-side == */
.comparator{margin:18px 0 22px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden}
.comp-head{display:grid;grid-template-columns:1fr auto 1fr;background:var(--sur);border-bottom:1px solid var(--bdm);padding:14px 18px;align-items:center;gap:14px}
.comp-side{font-family:var(--display);font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;text-align:center}
.comp-side.left{color:var(--bronze-l)}
.comp-side.right{color:#e0a077}
.comp-vs{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:2px;padding:4px 10px;background:var(--ele);border-radius:12px;border:1px solid var(--bdm)}
.comp-row{display:grid;grid-template-columns:1fr 110px 1fr;border-top:1px solid var(--bdm)}
.comp-row:first-of-type{border-top:none}
.comp-cell{padding:13px 18px;font-family:var(--serif);font-size:13px;line-height:1.55;color:var(--t1)}
.comp-cell.left{text-align:right;border-right:1px solid var(--bdm)}
.comp-cell.right{border-left:1px solid var(--bdm)}
.comp-label{padding:13px 10px;background:var(--sur);text-align:center;font-family:var(--mono);font-size:9.5px;color:var(--t2);letter-spacing:1.5px;text-transform:uppercase;font-weight:700;border-right:1px solid var(--bdm);border-left:1px solid var(--bdm);align-self:center}
.comp-cell b{color:var(--bronze-l)}
.comp-cell.right b{color:#e0a077}
@media (max-width:600px){
  .comp-row{grid-template-columns:1fr}
  .comp-cell.left, .comp-cell.right{text-align:left;border:none}
  .comp-label{border:none;border-top:1px solid var(--bdm);border-bottom:1px solid var(--bdm);padding:8px 10px}
  .comp-head{grid-template-columns:1fr}
  .comp-vs{display:none}
  .comp-side{padding:6px 0}
}
/* Comparator mobile — show labels on cells */
@media (max-width:600px){
  .comp-cell.left::before{content:'GREGOR · ';font-family:var(--mono);font-size:9px;font-weight:700;color:var(--bronze-l);letter-spacing:1.5px;display:block;margin-bottom:4px}
  .comp-cell.right::before{content:'RASKOLJNIKOV · ';font-family:var(--mono);font-size:9px;font-weight:700;color:#e0a077;letter-spacing:1.5px;display:block;margin-bottom:4px}
}

/* == SAMPLE EXAM PROMPT — Tab 7 == */
.exam-prompt{margin:18px 0 22px;padding:20px 22px;background:linear-gradient(135deg,var(--dim-r) 0%,rgba(224,82,82,.04) 100%);border:1px solid var(--bd-r);border-radius:var(--r3);position:relative}
.exam-prompt::before{content:'NCVVO · ŠKOLSKI ESEJ';position:absolute;top:-9px;left:18px;padding:2px 10px;background:var(--bg);color:var(--red-l);font-family:var(--mono);font-size:9px;letter-spacing:2px;font-weight:700;border:1px solid var(--bd-r);border-radius:3px}
.exam-prompt-ttl{font-family:var(--display);font-size:14.5px;font-weight:700;color:var(--red-l);letter-spacing:.8px;margin-bottom:10px}
.exam-prompt-task{font-family:var(--serif);font-size:14.5px;line-height:1.6;color:var(--t1);font-style:italic;padding:14px 16px;background:var(--card);border-left:3px solid var(--red);border-radius:0 var(--r2) var(--r2) 0;margin-bottom:14px}
.exam-prompt-tips{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-top:14px}
.exam-tip{padding:10px 12px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--serif);font-size:12.5px;line-height:1.5;color:var(--t2)}
.exam-tip b{display:block;font-family:var(--mono);font-size:9px;color:var(--bronze-l);letter-spacing:1.5px;font-weight:700;text-transform:uppercase;margin-bottom:5px}

/* == MINI REVIZIJA — 3-min sažetak == */
.minirev{margin:20px 0 24px;padding:0;background:var(--card);border:1px solid var(--bd-go);border-radius:var(--r3);overflow:hidden}
.minirev-head{padding:14px 18px;background:linear-gradient(135deg,var(--dim-go),rgba(232,201,122,.04));border-bottom:1px solid var(--bd-go);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px}
.minirev-ttl{font-family:var(--display);font-size:13.5px;font-weight:700;color:var(--gold);letter-spacing:1px;text-transform:uppercase}
.minirev-time{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:1.5px;padding:3px 9px;background:var(--ele);border:1px solid var(--bdm);border-radius:10px}
.minirev-body{padding:18px}
.minirev-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:14px}
.minirev-card{padding:12px 14px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2)}
.minirev-card-lbl{font-family:var(--mono);font-size:9.5px;color:var(--bronze-l);letter-spacing:1.5px;font-weight:700;text-transform:uppercase;margin-bottom:5px}
.minirev-card-val{font-family:var(--serif);font-size:13.5px;color:var(--t1);line-height:1.5}
.minirev-card-val b{color:var(--gold)}
.minirev-quotes{padding:12px 14px;background:var(--sur);border-left:3px solid var(--bd-go);border-radius:0 var(--r2) var(--r2) 0;font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t1)}
.minirev-quotes ol{margin:0;padding-left:20px}
.minirev-quotes li{margin:4px 0;font-style:italic}
.minirev-quotes li b{font-style:normal;color:var(--gold)}
@media (max-width:600px){
  .minirev-head{padding:12px 14px}
  .minirev-body{padding:14px}
  .minirev-card-val{font-size:13px}
}

/* == PRINT FIXES za nove komponente == */
@media print {
  .wc-textarea, .wc-actions, .wc-progress, .wc-stats{display:none!important}
  .wc-box::after{content:'(brojač eseja — interaktivan widget, koristi online verziju)';font-style:italic;color:#666;font-size:11pt}
  .featured-quote{break-inside:avoid;border:1px solid #999!important}
  .featured-quote::before, .featured-quote::after{display:none}
  .fq-copy{display:none}
  .comparator, .minirev, .exam-prompt{break-inside:avoid;border:1px solid #999!important;background:transparent!important}
  .comp-svg-wrap, .fam-svg-wrap{break-inside:avoid;background:transparent!important;border:1px solid #999!important}
  .comp-svg-wrap::before, .fam-svg-wrap::before{display:none!important}
  .minirev-head, .exam-prompt::before{background:transparent!important;color:#000!important}
}
/* == H08 SVG VIZUALIZACIJE — Tab 1 nadogradnja == */
.comp-svg-wrap, .fam-svg-wrap{
  margin:18px 0 24px;
  padding:18px;
  background:linear-gradient(135deg, var(--sur) 0%, var(--card) 100%);
  border:1px solid var(--bd);
  border-radius:var(--r3);
  position:relative;
  overflow:hidden;
}
.comp-svg-wrap::before, .fam-svg-wrap::before{
  content:'';
  position:absolute;
  top:0; left:-100%;
  width:100%; height:2px;
  background:linear-gradient(90deg, transparent, var(--gold), transparent);
  animation:slideShine 3.5s ease-in-out infinite;
}
@keyframes slideShine{
  0%, 100%{left:-100%}
  50%{left:100%}
}
.comp-svg, .fam-svg{
  width:100%;
  height:auto;
  max-width:760px;
  display:block;
  margin:0 auto;
}
.comp-hs{
  cursor:pointer;
  transition:all .25s ease;
  filter:drop-shadow(0 2px 4px rgba(0,0,0,.4));
}
.comp-hs:hover, .comp-hs:focus{
  transform-origin:center;
  filter:drop-shadow(0 0 8px rgba(232,201,122,.6));
  outline:none;
}

/* Mobile */
@media (max-width:600px){
  .comp-svg-wrap, .fam-svg-wrap{
    padding:10px 8px;
    margin:14px -4px 18px;
  }
}
@media (prefers-reduced-motion:reduce){
  .comp-svg-wrap::before, .fam-svg-wrap::before{animation:none}
  .comp-hs{transition:none}
}


/* == ESEJ BROJAČ — Tab 2 nadogradnja == */
.wc-box{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:20px;margin:14px 0 20px}
.wc-hdr{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px;flex-wrap:wrap;gap:8px}
.wc-ttl{font-family:var(--display);font-size:13px;font-weight:700;color:var(--bronze-l);letter-spacing:1px;text-transform:uppercase}
.wc-sub{font-family:var(--serif);font-size:12px;color:var(--t3);font-style:italic}
.wc-textarea{width:100%;min-height:200px;padding:14px;background:var(--inp);color:var(--t1);border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--serif);font-size:14.5px;line-height:1.65;resize:vertical;outline:none;transition:border-color .2s;box-sizing:border-box}
.wc-textarea:focus{border-color:var(--bronze);box-shadow:0 0 0 3px rgba(220,50,47,.1)}
.wc-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(105px,1fr));gap:8px;margin-top:14px}
.wc-stat{padding:10px 14px;background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r2);text-align:center;transition:all .2s}
.wc-stat-num{font-family:var(--display);font-size:22px;font-weight:700;color:var(--bronze-l);letter-spacing:.5px;line-height:1.2}
.wc-stat-lbl{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:1px;text-transform:uppercase;margin-top:3px}
.wc-stat.critical{border-color:var(--bd-r);background:var(--dim-r)}
.wc-stat.critical .wc-stat-num{color:var(--red-l)}
.wc-stat.ok{border-color:var(--bd-g);background:var(--dim-g)}
.wc-stat.ok .wc-stat-num{color:var(--green-l)}
.wc-progress{margin-top:14px;padding:12px 14px;background:var(--dim-br);border:1px solid var(--bd-br);border-radius:var(--r2);display:flex;align-items:center;gap:14px;transition:all .3s}
.wc-progress-bar-wrap{flex:1;height:8px;background:var(--ele);border-radius:4px;overflow:hidden}
.wc-progress-bar{height:100%;background:linear-gradient(90deg,var(--red) 0%,var(--bronze) 60%,var(--green) 100%);border-radius:4px;transition:width .3s ease;width:0%}
.wc-progress-lbl{font-family:var(--mono);font-size:10px;color:var(--t2);letter-spacing:.5px;min-width:80px;text-align:right}
.wc-progress.pass{background:var(--dim-g);border-color:var(--bd-g)}
.wc-progress.pass .wc-progress-lbl{color:var(--green-l);font-weight:700}
.wc-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
.wc-btn{padding:7px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;background:var(--card);color:var(--t2);border:1px solid var(--bdm);border-radius:var(--r1);cursor:pointer;transition:all .15s}
.wc-btn:hover{color:var(--t1);border-color:var(--bd-br);background:var(--ele)}
.wc-hint{margin-top:10px;padding:10px 14px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.55}
.wc-hint b{color:var(--t1)}
@media (max-width:600px){
  .wc-box{padding:14px}
  .wc-textarea{font-size:13.5px;min-height:160px}
  .wc-stat-num{font-size:18px}



/* CHAPTER NAVIGATION (auto-injected) */
.chapter-nav-wrap {
  max-width: 880px;
  margin: 40px auto 28px;
  padding: 0 18px;
}

.chapter-nav-hdr {
  text-align: center;
  margin-bottom: 22px;
}

.chapter-nav-title {
  font-family: var(--display, 'Fraunces', serif);
  font-size: 22px;
  font-weight: 700;
  color: var(--t1, #f4ede5);
  margin-bottom: 4px;
}

.chapter-nav-sub {
  font-size: 13px;
  color: var(--t3, #8a7a6e);
}

.chapter-nav-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-bottom: 22px;
}

.chapter-nav-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 22px;
  background: var(--ele, #1f1414);
  border: 1px solid var(--bd, #2c1f1f);
  border-radius: 14px;
  text-decoration: none;
  color: var(--t1, #f4ede5);
  transition: all 0.15s ease;
}

.chapter-nav-card:hover {
  border-color: var(--gold, #e9b446);
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.3);
}

.chapter-nav-prev {
  flex-direction: row;
}

.chapter-nav-next {
  flex-direction: row;
}

.chapter-nav-arrow {
  font-size: 28px;
  color: var(--gold, #e9b446);
  flex-shrink: 0;
  font-family: var(--display, serif);
}

.chapter-nav-meta {
  flex: 1;
}

.chapter-nav-pill {
  display: inline-block;
  padding: 3px 8px;
  background: rgba(74,144,217,0.1);
  color: var(--blue, #4a90d9);
  border-radius: 10px;
  font-family: var(--mono, monospace);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1.2px;
  margin-bottom: 6px;
}

.chapter-nav-pill-next {
  background: rgba(233,180,70,0.1);
  color: var(--gold, #e9b446);
}

.chapter-nav-name {
  font-family: var(--display, serif);
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 4px;
}

.chapter-nav-desc {
  font-size: 12px;
  color: var(--t3, #8a7a6e);
  line-height: 1.5;
}

.chapter-nav-related {
  padding: 18px 22px;
  background: var(--ele, #1f1414);
  border: 1px solid var(--bd, #2c1f1f);
  border-radius: 14px;
}

.chapter-nav-related-ttl {
  font-family: var(--display, serif);
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--t1, #f4ede5);
}

.chapter-nav-related-grid {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.chapter-nav-mini {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: var(--bg2, #1a1010);
  border: 1px solid var(--bd, #2c1f1f);
  border-radius: 10px;
  text-decoration: none;
  color: var(--t1, #f4ede5);
  transition: all 0.15s ease;
}

.chapter-nav-mini:hover {
  border-color: var(--gold, #e9b446);
  transform: translateY(-1px);
}

.chapter-nav-mini-code {
  font-family: var(--mono, monospace);
  font-size: 10px;
  font-weight: 800;
  color: var(--gold, #e9b446);
  letter-spacing: 0.8px;
}

.chapter-nav-mini-name {
  font-size: 12px;
  color: var(--t2, #c5b8aa);
}

@media (max-width: 720px) {
  .chapter-nav-grid {
    grid-template-columns: 1fr;
  }
}


/* TIER_SYSTEM_CSS_INJECTED */
/* ===================================================
   MATURIRAJ.HR — TIER SYSTEM CSS
   Paywall modal + sidebar badge + tier indicators
   =================================================== */

/* ¦¦¦¦¦¦¦¦¦ PAYWALL OVERLAY ¦¦¦¦¦¦¦¦¦ */
.mt-paywall-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: mt-fade-in 0.2s ease;
}

@keyframes mt-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* ¦¦¦¦¦¦¦¦¦ PAYWALL MODAL ¦¦¦¦¦¦¦¦¦ */
.mt-paywall-modal {
  position: relative;
  background: var(--bg2, #1a1a1a);
  border: 1px solid var(--bd, #333);
  border-radius: 18px;
  max-width: 920px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.5);
  padding: 32px 28px;
  animation: mt-slide-up 0.3s ease;
}

@keyframes mt-slide-up {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.mt-paywall-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid var(--bd, #333);
  color: var(--t2, #aaa);
  font-size: 22px;
  font-weight: 300;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  line-height: 1;
}

.mt-paywall-close:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--t1, #fff);
  border-color: var(--gold, #e9b446);
}

/* ¦¦¦¦¦¦¦¦¦ PAYWALL HEADER ¦¦¦¦¦¦¦¦¦ */
.mt-paywall-header {
  text-align: center;
  margin-bottom: 28px;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--bd, #333);
}

.mt-paywall-icon {
  font-size: 48px;
  margin-bottom: 8px;
}

.mt-paywall-title {
  font-family: var(--display, 'Fraunces', serif);
  font-size: 24px;
  font-weight: 800;
  color: var(--t1, #fff);
  margin-bottom: 6px;
  letter-spacing: -0.01em;
}

.mt-paywall-subtitle {
  font-size: 14px;
  color: var(--t2, #aaa);
  line-height: 1.5;
  max-width: 520px;
  margin: 0 auto;
}

/* ¦¦¦¦¦¦¦¦¦ PAYWALL TIERS ¦¦¦¦¦¦¦¦¦ */
.mt-paywall-tiers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.mt-paywall-tier {
  position: relative;
  padding: 24px 22px;
  background: var(--ele, #222);
  border: 2px solid var(--bd, #333);
  border-radius: 14px;
  transition: all 0.2s ease;
}

.mt-paywall-tier:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
}

.mt-paywall-tier-recommended {
  border-color: var(--gold, #e9b446);
  background: linear-gradient(135deg, rgba(233, 180, 70, 0.06), var(--ele, #222));
  box-shadow: 0 0 0 4px rgba(233, 180, 70, 0.08);
}

.mt-paywall-badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--gold, #e9b446);
  color: #0F0605;
  padding: 4px 12px;
  border-radius: 12px;
  font-family: var(--mono, monospace);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.mt-paywall-tier-name {
  font-family: var(--display, 'Fraunces', serif);
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 8px;
  color: var(--t1, #fff);
}

.mt-paywall-tier-standard .mt-paywall-tier-name {
  color: var(--blue, #4a90d9);
}

.mt-paywall-tier-pro .mt-paywall-tier-name {
  color: var(--gold, #e9b446);
}

.mt-paywall-tier-price {
  font-family: var(--mono, monospace);
  font-size: 32px;
  font-weight: 800;
  color: var(--t1, #fff);
  margin-bottom: 14px;
  line-height: 1;
}

.mt-paywall-tier-price span {
  font-size: 14px;
  color: var(--t3, #888);
  font-weight: 400;
  margin-left: 4px;
}

.mt-paywall-tier-features {
  list-style: none;
  margin: 0 0 18px 0;
  padding: 0;
  font-size: 13px;
  line-height: 1.7;
  color: var(--t2, #ccc);
}

.mt-paywall-tier-features li {
  padding: 4px 0;
  padding-left: 4px;
}

.mt-paywall-tier-features li strong {
  color: var(--t1, #fff);
}

/* ¦¦¦¦¦¦¦¦¦ CTA BUTTONS ¦¦¦¦¦¦¦¦¦ */
.mt-paywall-cta {
  width: 100%;
  padding: 12px 20px;
  background: var(--blue, #4a90d9);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-family: var(--display, 'Fraunces', serif);
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s ease;
  letter-spacing: 0.2px;
}

.mt-paywall-cta:hover {
  background: var(--blue-hover, #3578bf);
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(74, 144, 217, 0.3);
}

.mt-paywall-cta-pro {
  background: var(--gold, #e9b446);
  color: #0F0605;
}

.mt-paywall-cta-pro:hover {
  background: var(--gold-hover, #d4a13e);
  box-shadow: 0 6px 18px rgba(233, 180, 70, 0.3);
}

/* ¦¦¦¦¦¦¦¦¦ PAYWALL FOOTER ¦¦¦¦¦¦¦¦¦ */
.mt-paywall-footer {
  text-align: center;
  font-size: 12px;
  color: var(--t3, #888);
  padding-top: 18px;
  border-top: 1px solid var(--bd, #333);
}

.mt-paywall-link {
  color: var(--blue, #4a90d9);
  text-decoration: none;
  font-family: var(--mono, monospace);
  font-size: 11px;
  letter-spacing: 0.5px;
}

.mt-paywall-link:hover {
  color: var(--gold, #e9b446);
  text-decoration: underline;
}

.mt-paywall-link-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.mt-paywall-divider {
  margin: 0 8px;
  color: var(--t3, #888);
}

/* ¦¦¦¦¦¦¦¦¦ SIDEBAR TIER BADGE ¦¦¦¦¦¦¦¦¦ */
.mt-tier-badge {
  margin: 12px;
  padding: 10px 12px;
  background: var(--ele, #222);
  border: 1px solid var(--bd, #333);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
}

.mt-tier-badge-free {
  border-left: 3px solid var(--t3, #888);
}

.mt-tier-badge-standard {
  border-left: 3px solid var(--blue, #4a90d9);
}

.mt-tier-badge-pro {
  border-left: 3px solid var(--gold, #e9b446);
  background: linear-gradient(135deg, rgba(233, 180, 70, 0.04), var(--ele, #222));
}

.mt-tier-badge-label {
  font-family: var(--mono, monospace);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.8px;
  color: var(--t1, #fff);
}

.mt-tier-badge-cta {
  background: var(--gold, #e9b446);
  color: #0F0605;
  border: none;
  padding: 4px 10px;
  border-radius: 12px;
  font-family: var(--mono, monospace);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.8px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.mt-tier-badge-cta:hover {
  background: var(--gold-hover, #d4a13e);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(233, 180, 70, 0.3);
}

/* ¦¦¦¦¦¦¦¦¦ MOBILE ¦¦¦¦¦¦¦¦¦ */
@media (max-width: 720px) {
  .mt-paywall-modal {
    padding: 24px 20px;
    border-radius: 14px;
  }
  
  .mt-paywall-title {
    font-size: 20px;
  }
  
  .mt-paywall-icon {
    font-size: 40px;
  }
  
  .mt-paywall-tiers {
    grid-template-columns: 1fr;
  }
  
  .mt-paywall-tier-price {
    font-size: 28px;
  }
  
  .mt-tier-badge {
    margin: 8px;
    padding: 8px 10px;
  }
  
  .mt-tier-badge-cta {
    font-size: 9px;
    padding: 3px 8px;
  }
}

</style>

    <div class="cp-summary">
      <div class="cp-sum-txt">Napredak · <b id="cp-done">0</b> / 10 stavki</div>
        <div class="cp-actions" style="margin-top:18px;display:flex;gap:10px;justify-content:center">
          <button type="button" class="fcb" onclick="cpReset()" style="padding:8px 16px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:8px;color:var(--t2,#c5b8aa);font-family:var(--mono,monospace);font-size:11px;letter-spacing:0.8px;cursor:pointer">🔁 Resetiraj</button>
          <button type="button" class="fcb primary" onclick="sw(6)" style="padding:8px 16px;background:var(--gold,#e9b446);color:#0F0605;border:none;border-radius:8px;font-family:var(--mono,monospace);font-size:11px;font-weight:800;letter-spacing:0.8px;cursor:pointer">🧠 Idi na kviz</button>
        </div>

      <div class="cp-sum-pct" id="cp-pct">0%</div>
    </div>

    <!-- == MINI-REVIZIJA — 3-min sažetak prije ispita == -->
    <div class="minirev">
      <div class="minirev-head">
        <div class="minirev-ttl">🧭 Mini-revizija — sve u 3 minute</div>
        <div class="minirev-time">~3 min čitanja</div>
      </div>
      <div class="minirev-body">
        <div class="minirev-grid">
          <div class="minirev-card">
            <div class="minirev-card-lbl">📌 Epoha</div>
            <div class="minirev-card-val"><b>Postmoderna</b> — svjetska od <b>~1960.</b>, hrvatska <b>1979.–1981.</b> Stav <em>nakon velikih ideologija</em> 20. st. Skepsa spram jedinstvene istine; igra s tradicijom.</div>
          </div>
          <div class="minirev-card">
            <div class="minirev-card-lbl">📌 10 pojmova</div>
            <div class="minirev-card-val"><b>Metafikcija</b>, <b>intertekstualnost</b>, <b>pastiš</b> vs <b>parodija</b>, <b>fragmentacija</b>, <b>ironija</b>, <b>autoreferencijalnost</b>, <b>kraj velikih naracija</b>, miješanje visokog/niskog, <b>simulakrum</b>.</div>
          </div>
          <div class="minirev-card">
            <div class="minirev-card-lbl">📌 Autori (svjetski)</div>
            <div class="minirev-card-val"><b>Jorge Luis Borges</b> (prekursor), <b>Umberto Eco</b>, <b>Italo Calvino</b>, <b>Milan Kundera</b>, <b>Samuel Beckett</b>, Thomas Pynchon.</div>
          </div>
          <div class="minirev-card">
            <div class="minirev-card-lbl">🇭🇷 Autori (hrvatski)</div>
            <div class="minirev-card-val"><b>Pavao Pavličić</b> (<em>Večernji akt</em>, 1981.), <b>Dubravka Ugrešić</b> (<em>Štefica Cvek</em>, 1981.), <b>Goran Tribuson</b>, Antun Šoljan, Slobodan Novak, Ivo Brešan (parodija).</div>
          </div>
          <div class="minirev-card">
            <div class="minirev-card-lbl">📌 2 djela u fokusu</div>
            <div class="minirev-card-val"><b>Eco, Ime ruže</b> (1980.) — samostan 1327., Vilim od Baskervillea, tajna knjiga, požar. <b>Pavličić, Večernji akt</b> (1981.) — slika akta koja stari, žanrovski hibrid.</div>
          </div>
          <div class="minirev-card">
            <div class="minirev-card-lbl">📌 Teoretičari</div>
            <div class="minirev-card-val"><b>Barthes</b> (smrt autora, 1967.), <b>Kristeva</b> (intertekstualnost, 1966.), <b>Lyotard</b> (kraj velikih naracija, 1979.), <b>Derrida</b> (dekonstrukcija), <b>Baudrillard</b> (simulakrum), <b>Jameson, Hutcheon</b>.</div>
          </div>
          <div class="minirev-card">
            <div class="minirev-card-lbl">📌 Most</div>
            <div class="minirev-card-val">‹ <b>H09 Avangarda / Kafka Camus</b> (fragmentacija, apsurd) · › <b>suvremena i popkulturna književnost</b>.</div>
          </div>
          <div class="minirev-card">
            <div class="minirev-card-lbl">📌 Najveća greška</div>
            <div class="minirev-card-val">Brkanje <b>pastiša</b> (ozbiljno oponašanje) i <b>parodije</b> (komično ismijavanje). I brkanje termina <em>moderna</em> (oko 1900., Matoš) i <em>postmoderna</em> (nakon 1960.).</div>
          </div>
        </div>
        <div class="minirev-quotes">
          <b style="display:block;font-family:var(--mono);font-size:9.5px;color:var(--bronze-l);letter-spacing:1.5px;font-weight:700;text-transform:uppercase;margin-bottom:8px">3 citata napamet</b>
          <ol>
            <li>„Knjiga je mreža citata iz bezbrojnih središta kulture." <b>(Barthes, Smrt autora, 1967.)</b></li>
            <li>„Postmoderno stanje karakterizira nepovjerenje u velike naracije." <b>(Lyotard, 1979.)</b></li>
            <li>„Knjige uvijek govore o drugim knjigama." <b>(Eco, Postille uz Ime ruže, 1983.)</b></li>
          </ol>
        </div>
      </div>
    </div>

    <!-- == SAMPLE EXAM PROMPT — kako bi moglo doći na ispit == -->
    <div class="exam-prompt">
      <div class="exam-prompt-ttl">📌 Kako se postmoderna može pojaviti na ispitu</div>
      <div class="exam-prompt-task">
        Postmoderna <em>nije</em> NCVVO epoha. Ali pojmovi se pojavljuju u teoriji književnosti (12 bodova), a u školskom eseju iz obvezatnog djela (Kafka, Marinković, Krleža) možeš koristiti postmoderni aparat za dodatnu dubinu. Primjer: <em>„Kafkina fragmentacija tijela u Preobražaju anticipira postmodernu fragmentaciju narativa."</em> — jedan takav paralelizam diže esej za jedan razred.
      </div>
      <div class="exam-prompt-tips">
        <div class="exam-tip">
          <b>📌 Struktura eseja</b>
          Uvod (50 r.) · 3 odlomka razrade (obvezatno djelo · postmoderna paralela · sinteza), ~120 r. svaki · zaključak (60 r.) = ~470 r.
        </div>
        <div class="exam-tip">
          <b>📌 Citati</b>
          Barthes „Smrt autora" · Lyotard „kraj velikih naracija" · Eco „knjige govore o drugim knjigama". Vidi Tab 3 Citatnik.
        </div>
        <div class="exam-tip">
          <b>📌 Povezivanje</b>
          Kafka/fragmentacija · Marinković/metafikcija · Krleža/intertekstualnost · Brešan/parodija. Vidi <em>Tab 2 cheatsheet</em>.
        </div>
        <div class="exam-tip">
          <b>📚 Pojmovi</b>
          Metafikcija · intertekstualnost · pastiš vs parodija · fragmentacija · ironija · otvoreni kraj · simulakrum.
        </div>
      </div>
    </div>

    <div class="pro-gate" data-feature="checkpoint-tracking">
      <div class="cp-grid" id="cp-grid">
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Razumijem <b>što je postmoderna</b> (stav nakon velikih ideologija; svjetska oko 1960., hrvatska 1979.–1981.; skepsa spram velikih naracija)</div><span class="cp-hint">Epoha</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Znam definiciju i primjer za <b>metafikciju</b> (proza svjesna sebe; Eco "pronađeni rukopis"; Calvino "čitatelj kao lik"; Ugrešić "roman kao šivaći uzorak")</div><span class="cp-hint">Pojam 1</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Znam definiciju i primjer za <b>intertekstualnost</b> (Kristeva 1966.; Eco: Vilim od Baskervillea = Sherlock Holmes; Jorge od Burgosa = Borges)</div><span class="cp-hint">Pojam 2</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Razlikujem <b>pastiš i parodiju</b> (pastiš = ozbiljno oponašanje/hommage; parodija = komična imitacija/kritika. Eco = pastiš; Brešan = parodija)</div><span class="cp-hint">Pojam 3</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Razumijem <b>fragmentaciju, otvoreni kraj, nepouzdanog pripovjedača, miješanje visokog/niskog</b> — svi kao znakovi postmoderne</div><span class="cp-hint">Pojmovi 4+</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Poznajem <b>Ecovo Ime ruže</b> (1980.) — samostan 1327., Vilim od Baskervillea, tajna knjiga, požar biblioteke, "nema reda"</div><span class="cp-hint">Djelo 1</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Poznajem <b>Pavličićev Večernji akt</b> (1981.) — slikar Krsto, slika akta koja stari, žanrovski hibrid, otvoreni kraj</div><span class="cp-hint">Djelo 2</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Znam <b>ključne teoretičare</b> — Barthes (smrt autora), Lyotard (kraj velikih naracija), Kristeva (intertekstualnost), Derrida (dekonstrukcija), Baudrillard (simulakrum)</div><span class="cp-hint">Teoretičari</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Mogu napraviti <b>paralelu s obvezatnim djelima</b> — Kafka/fragmentacija, Marinković/metafikcija, Krleža/intertekstualnost, Brešan/parodija</div><span class="cp-hint">Esej</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Kviz <b>prošao s 75%+</b></div><span class="cp-hint">Kviz</span></div>
    </div>
      <div class="pro-gate-overlay">
        <div class="pro-gate-fade"></div>
        <div class="pro-gate-cta">
          <div class="pro-gate-label"><b>Checkpoint tracking</b> kroz sva 28+22 poglavlja · napredak se sprema · graf spremnosti za maturu</div>
          <a class="pro-gate-btn" href="/pricing?ctx=checkpoint_h10">Otključaj — 9,99€/mj</a>
          <div class="pro-gate-meta">Otkaži bilo kad · Free trial 7 dana</div>
        </div>
      </div>
    </div>

    <div class="cp-final" id="cp-final">
      <div class="cp-final-ico">🎉</div>
      <div class="cp-final-title">H10 ZAVRŠENO!</div>
      <div class="cp-final-msg">
        Savladao si <strong>Postmodernu</strong>. <em>Metafikcija, intertekstualnost, pastiš, parodija, fragmentacija, ironija, otvoreni kraj</em> — pojmovni aparat koji ti daje novu razinu u eseju. Poznaješ Eca (<em>Ime ruže</em>, 1980.), Pavličića (<em>Večernji akt</em>, 1981.), Ugrešić, Borgesa, Calvina. Razumiješ zašto je hrvatska postmoderna nastala 1979.–1981. i što je značio časopis <em>Quorum</em>. Imaš paralele za obvezatna djela — Kafku, Marinkovića, Krležu, Brešana. <em>Postmoderna nije izravno testirana na NCVVO maturi, ali pojmovi se pojavljuju u teoriji književnosti i diže tvoj esej na višu razinu.</em>
      </div>
      <div class="cp-actions">
        <button class="fcb primary" onclick="sw(0)">🔁 Ponovi H10</button>
      </div>

      

      <!-- UPSELL: Discere nakon završenog poglavlja -->
      <div class="upsell" style="margin-top:24px;text-align:left" data-upsell-ctx="checkpoint_finale" data-upsell-target="discere" data-upsell-id="cp_discere">
        <div class="upsell-ico wordmark">Discere</div>
        <div class="upsell-body">
          <div class="upsell-title">Simulator mature <span class="upsell-badge standard">STANDARD</span> <span class="upsell-badge" style="color:var(--t3);border-color:var(--bdm);background:transparent;font-size:8px">9,99 €/mj · uklj. u PRO</span></div>
          <div class="upsell-desc"><strong>Završio si H10 — sada testiraj u stvarnim uvjetima.</strong> Postmoderni pojmovi (metafikcija, intertekstualnost, pastiš, parodija, fragmentacija) pojavljuju se u teoriji književnosti i u eseju iz obvezatnih djela. <em>Testiraj primjenu postmodernog aparata na Kafki, Marinkoviću, Krleži.</em></div>
        </div>
        <a href="/discere?subject=hrvatski&topic=postmoderna&ctx=h10_checkpoint" class="upsell-cta" onclick="track('upsell_click',{ctx:'checkpoint_finale',target:'discere'},'conversion')">Isprobaj ›</a>
      </div>
    </div>

    <div class="nav-row" style="margin-top:30px">
      <span class="nb" onclick="sw(6)">‹ Kviz</span>
      <span class="nb off">H11 · uskoro ›</span>
    </div>
  </div>

  <div class="chapter-nav-wrap">
    <div class="chapter-nav-hdr">
      <div class="chapter-nav-title">📚 Sljedeća poglavlja</div>
      <div class="chapter-nav-sub">Nastavi učiti — povezana poglavlja u Maturiraj knjižnici</div>
    </div>
    
    <div class="chapter-nav-grid">
      <a class="chapter-nav-card chapter-nav-prev" href="/skripte/hrv/h09">
        <div class="chapter-nav-arrow">‹</div>
        <div class="chapter-nav-meta">
          <div class="chapter-nav-pill">PRETHODNO</div>
          <div class="chapter-nav-name">H09 · Egzistencijalizam</div>
          <div class="chapter-nav-desc">Sartre · Beckett · Camus · apsurd</div>
        </div>
      </a>

      <a class="chapter-nav-card chapter-nav-next" href="/skripte/hrv/h11">
        <div class="chapter-nav-meta">
          <div class="chapter-nav-pill chapter-nav-pill-next">SLJEDEĆE</div>
          <div class="chapter-nav-name">H11 · Stari hrv. pisci</div>
          <div class="chapter-nav-desc">Hrvatska renesansa · glagoljaši</div>
        </div>
        <div class="chapter-nav-arrow">›</div>
      </a>
    </div>

    <div class="chapter-nav-related">
      <div class="chapter-nav-related-ttl">🔗 Povezana poglavlja</div>
      <div class="chapter-nav-related-grid">
        <a class="chapter-nav-mini" href="/skripte/hrv/h17">
          <span class="chapter-nav-mini-code">H17</span>
          <span class="chapter-nav-mini-name">Stilske figure</span>
        </a>
        <a class="chapter-nav-mini" href="/skripte/hrv/h18">
          <span class="chapter-nav-mini-code">H18</span>
          <span class="chapter-nav-mini-name">Versifikacija</span>
        </a>
        <a class="chapter-nav-mini" href="/skripte/hrv/h27">
          <span class="chapter-nav-mini-code">H27</span>
          <span class="chapter-nav-mini-name">Školski esej</span>
        </a>
      </div>
    </div>
  </div>

  <!-- == MODULE FOOTER (v3.6) == -->
  <footer class="mod-foot" role="contentinfo">
    <div class="foot-line"><b>Maturiraj.hr</b> · Hrvatski · H10 Postmoderna</div>
    <div class="foot-line">Autorski sadržaj · Usklađeno s <a href="https://www.ncvvo.hr/ispitni-katalozi-za-drzavnu-maturu-2025-2026/" target="_blank" rel="noopener noreferrer" onclick="track('ext_link_click',{target:'ncvvo_footer'},'engagement')">NCVVO</a> ispitnim katalogom · Ažurirano <time datetime="2026-04-20">travanj 2026.</time></div>
    <div class="foot-line foot-feedback">
      <span class="foot-fb-q">Imaš prijedlog ili si uočio grešku?</span>
      <button type="button" class="foot-fb-btn" onclick="openFeedbackModal()">📝 Prijavi ›</button>
      <span class="foot-fb-or">ili e-mail</span>
      <a href="mailto:maturirajgreske@gmail.com?subject=H10%20%E2%80%94%20prijava%20gre%C5%A1ke&amp;body=Poglavlje%3A%20H10%20Postmoderna%0ATab%3A%20%0A%0AOpis%3A%0A" class="foot-fb-mail" onclick="track('ext_link_click',{target:'mailto_feedback'},'engagement')">maturirajgreske@gmail.com</a>
    </div>
  </footer>

</div>
</main>
</div><!-- /shell -->







`;

const CHAPTER_CSS_DELTA = `
/* ══ KEYFRAMES ══ */
@keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}

@keyframes fadeIn{from{opacity:0}to{opacity:1}}

@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(220,50,47,.3)}50%{box-shadow:0 0 0 8px rgba(220,50,47,.0)}}

@keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}

@keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}

@keyframes orbA{0%,100%{transform:scale(1) translate(0,0)}50%{transform:scale(1.15) translate(20px,-10px)}}

@keyframes orbB{0%,100%{transform:scale(1) translate(0,0)}50%{transform:scale(0.9) translate(-15px,12px)}}

@keyframes scanline{0%{top:-2px}100%{top:100%}}

@media(max-width:560px){.bc-tab-sep, .bc-tab{display:none}}

@media(max-width:560px){.auth-box{flex-direction:column;gap:8px}.auth-txt{font-size:13px}.auth-links{flex-direction:column}.auth-link{text-align:center}}

@keyframes diagFade{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}


@media(max-width:560px){
  .diag-intro, .diag-quiz, .diag-result{padding:18px 18px}
  .diag-ttl{font-size:17px}
  .diag-q{font-size:14.5px}
  .diag-actions{flex-direction:column;align-items:stretch}
  .diag-btn{text-align:center;width:100%}
  .diag-res-num{font-size:36px}
}

@media(max-width:680px){
  .cmp-tbl, .cmp-tbl thead, .cmp-tbl tbody, .cmp-tbl th, .cmp-tbl td, .cmp-tbl tr{display:block}
  .cmp-tbl thead{display:none}
  .cmp-tbl tr{padding:10px 0;border-bottom:1px solid var(--bd)}
  .cmp-tbl tr:last-child{border-bottom:none}
  .cmp-tbl td{padding:6px 16px;border-bottom:none}
  .cmp-tbl .cmp-cat{width:auto;background:transparent;color:var(--bronze);font-size:9.5px;padding-bottom:0;padding-top:8px}
  .cmp-tbl td:nth-of-type(2)::before{content:'⚪ Glagoljica: ';color:var(--red-l);font-family:var(--mono);font-size:10px;font-weight:700}
  .cmp-tbl td:nth-of-type(3)::before{content:'⚫ Latinica: ';color:var(--bronze-l);font-family:var(--mono);font-size:10px;font-weight:700}
  .cmp-conc::before{content:''!important}
}

@media(max-width:760px){
  .cheat-grid{grid-template-columns:1fr}
  .cheat-col-wide{grid-column:auto}
  .cheat-grid-inner{grid-template-columns:1fr}
}

@media(max-width:560px){
  .cheat-hdr{padding:12px 16px}
  .cheat-col{padding:14px 16px}
  .cheat-ttl{font-size:15px}
}

@media(max-width:560px){
  .foot-feedback{gap:6px;flex-direction:column}
  .foot-fb-or{display:none}
}

.sc-desc em{color:var(--bronze-l);font-style:italic}

.sc-desc b{color:var(--t1)}

@media(max-width:560px){
  .b20-item{font-size:13.5px;gap:11px;padding:10px 0}
  .b20-num{width:24px;height:24px;font-size:10.5px}
  .box-20{padding:16px 18px}
}

}
/* ══════════════════════════════════════════════════
   H10 — POSTMODERNA
   ══════════════════════════════════════════════════ */

/* Scroll progress bar at top of page */
.scroll-progress{position:fixed;top:0;left:0;height:3px;background:linear-gradient(90deg,var(--bronze),var(--gold));z-index:9999;width:0%;transition:width .1s linear;pointer-events:none;box-shadow:0 0 8px rgba(232,201,122,.4)}

/* Smooth scroll behavior for better UX */
html{scroll-behavior:smooth}

/* Enhanced focus states for accessibility (Gen Z + keyboard users) */
button:focus-visible,a:focus-visible,.tab:focus-visible,.cp-item:focus-visible,.pojm-filter:focus-visible,.cit-fbtn:focus-visible,.diag-opt:focus-visible,.nb:focus-visible{
  outline:2px solid var(--gold)!important;outline-offset:3px;border-radius:4px
}

/* Better hover states on cards (more tactile feel) */
.sc{transition:all .25s cubic-bezier(.4,0,.2,1)}
.sc:hover{transform:translateY(-3px);box-shadow:0 8px 22px rgba(220,50,47,.06),0 0 0 1px var(--bd-br);border-color:var(--bd-br)}

.cr{transition:all .2s ease}
.cr:hover{transform:translateX(2px);border-color:var(--bd-br)}

/* Quote card (citatnik) — premium hover */

/* Flashcard (drill) — better 3d feel */
.fc{will-change:transform;backface-visibility:hidden}

/* Print: hide scroll-progress */
@media print{
  .scroll-progress{display:none!important}

}

/* Reading time indicator (subtle, under hero) */
.reading-time-badge{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:rgba(232,201,122,.08);border:1px solid rgba(232,201,122,.25);border-radius:20px;font-family:var(--mono);font-size:10px;color:var(--gold);letter-spacing:1px;text-transform:uppercase;margin-top:8px}
.reading-time-badge::before{content:'📖';font-size:12px}

/* Oneginski stih visualization */
.oneginski-viz{background:linear-gradient(135deg,rgba(220,50,47,.03),rgba(232,201,122,.03));border:1px solid var(--bd-br);border-radius:var(--r3);padding:20px;margin:18px 0;font-family:var(--mono);font-size:13px;line-height:2}
.oneginski-viz-row{display:flex;align-items:baseline;gap:14px;padding:3px 0}
.oneginski-viz-num{width:20px;color:var(--t3);font-size:10px;text-align:right}
.oneginski-viz-rhyme{width:24px;font-weight:700;font-size:12px;padding:2px 6px;border-radius:4px;text-align:center}
.oneginski-viz-rhyme.A{background:rgba(220,50,47,.15);color:var(--red-l)}
.oneginski-viz-rhyme.B{background:rgba(232,201,122,.15);color:var(--gold)}
.oneginski-viz-rhyme.C{background:rgba(107,148,100,.15);color:var(--green-l)}
.oneginski-viz-rhyme.D{background:rgba(180,140,200,.15);color:#c5a1d9}
.oneginski-viz-rhyme.E{background:rgba(100,180,200,.15);color:#7cc5d9}
.oneginski-viz-rhyme.F{background:rgba(220,120,80,.15);color:#e0a077}
.oneginski-viz-rhyme.G{background:rgba(150,150,150,.15);color:var(--t2)}
.oneginski-viz-rhyme.lc{opacity:.7;font-size:11px}
.oneginski-viz-text{flex:1;color:var(--t2);font-family:var(--serif);font-style:italic}
.oneginski-viz-caption{font-family:var(--mono);font-size:10px;color:var(--t3);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:12px;text-align:center}
.oneginski-viz-legend{display:flex;justify-content:center;gap:10px;margin-top:14px;flex-wrap:wrap;font-family:var(--mono);font-size:10px;color:var(--t3)}

/* Animated gradient border for feature callouts */
@keyframes gradient-border{0%{background-position:0% 50%}
100%{background-position:0% 50%}
}
.feature-callout{position:relative;padding:20px;margin:18px 0;border-radius:var(--r3);background:var(--card);overflow:hidden}
.feature-callout::before{content:'';position:absolute;inset:-2px;border-radius:var(--r3);padding:2px;background:linear-gradient(90deg,var(--bronze),var(--gold),var(--red),var(--gold),var(--bronze));background-size:300% 100%;animation:gradient-border 8s linear infinite;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none}

/* "Back to top" floating button */
#back-to-top{position:fixed;bottom:20px;right:20px;width:44px;height:44px;border-radius:50%;background:var(--bronze);color:#F5E6D3;border:none;font-size:18px;cursor:pointer;display:none;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,.3);z-index:999;transition:all .2s;font-weight:700}
#back-to-top:hover{background:var(--gold);color:var(--dark);transform:translateY(-2px);box-shadow:0 6px 20px rgba(232,201,122,.4)}
#back-to-top.visible{display:flex}
@media print{#back-to-top{display:none!important}
}

/* Micro-animations on quick stats */
@keyframes count-up{from{opacity:0;transform:translateY(8px)}
}
.stat-badge{animation:count-up .4s ease-out}

/* ══════════════════════════════════════════════════════════════════
   CITATNIK v9 — SMART CITATION INDEX
   Design: editorial, dark-only, mirrors .pojm / .sc / .box-20 system.
   Features: thesis tags, difficulty indicators, random pick, counter,
             must-know badges, category + thesis + difficulty filters.
   No white/light bg anywhere. All tokens from existing design system.
   ══════════════════════════════════════════════════════════════════ */

/* Filter pills container — single row */
.cit-filters{display:flex;gap:6px;flex-wrap:wrap;margin:18px 0 10px;padding:0;align-items:center}
.cit-fbtn{padding:6px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;background:var(--card);color:var(--t2);border:1px solid var(--bdm);border-radius:var(--r1);cursor:pointer;transition:all .18s;display:inline-flex;align-items:center;gap:5px;line-height:1.4}
.cit-fbtn:hover{color:var(--t1);border-color:var(--bd-br)}
.cit-fbtn.active{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border-color:var(--bronze);font-weight:700;box-shadow:0 2px 10px rgba(220,50,47,.15)}
.cit-fbtn.fspec{background:var(--dim-go);color:var(--gold);border-color:var(--bd-go)}
.cit-fbtn.fspec:hover{background:var(--dim-go);color:var(--t1);border-color:var(--gold)}
.cit-fbtn.fspec.active{background:linear-gradient(135deg,var(--gold),#d4b980);color:#0F0605;border-color:var(--gold)}

/* Secondary filter row — difficulty + random */
.cit-subfilters{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 14px;padding:10px 14px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);align-items:center}
.cit-sublbl{font-family:var(--mono);font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3);font-weight:700;margin-right:4px}
.cit-diffbtn{padding:4px 10px;font-family:var(--mono);font-size:9.5px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;background:transparent;color:var(--t3);border:1px solid var(--bdm);border-radius:var(--r1);cursor:pointer;transition:all .15s}
.cit-diffbtn:hover{color:var(--t1);border-color:var(--bd-br)}
.cit-diffbtn.active{background:var(--dim-br);color:var(--bronze-l);border-color:var(--bd-br)}
.cit-random{padding:4px 12px;font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;background:var(--dim-go);color:var(--gold);border:1px solid var(--bd-go);border-radius:var(--r1);cursor:pointer;transition:all .15s;margin-left:auto;display:inline-flex;align-items:center;gap:5px}
.cit-random:hover{background:var(--hov);color:var(--gold)}

/* Count row */
.cit-count{font-family:var(--mono);font-size:11px;color:var(--t3);margin-bottom:14px;letter-spacing:.3px;display:flex;align-items:center;gap:10px}
.cit-count b{color:var(--bronze-l);font-weight:700}
.cit-count-clear{font-family:var(--mono);font-size:9px;letter-spacing:1px;text-transform:uppercase;color:var(--t3);background:transparent;border:1px dashed var(--bdm);border-radius:var(--r1);padding:3px 9px;cursor:pointer;transition:all .15s;display:none}
.cit-count-clear.on{display:inline-flex}
.cit-count-clear:hover{color:var(--t1);border-color:var(--bd-br)}

/* Grid */
.cit-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:14px;margin-top:4px}


/* ══ POJMOVNIK — Tab 4 cards ══ */
.pojm-search-row{margin-bottom:12px}
.pojm-search{width:100%;padding:12px 16px;background:var(--inp);color:var(--t1);border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--mono);font-size:12px;letter-spacing:.5px;outline:none;transition:border-color .2s;box-sizing:border-box}
.pojm-search:focus{border-color:var(--bronze);box-shadow:0 0 0 3px rgba(220,50,47,.1)}
.pojm-search::placeholder{color:var(--t3);font-style:italic}
.pojm-filters{display:flex;gap:6px;margin-bottom:18px;flex-wrap:wrap}
.pojm-filter{padding:6px 13px;background:var(--card);color:var(--t2);border:1px solid var(--bdm);border-radius:14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;cursor:pointer;transition:all .15s;text-transform:uppercase}
.pojm-filter:hover{color:var(--t1);border-color:var(--bd-br)}
.pojm-filter.on{background:var(--dim-br);color:var(--bronze-l);border-color:var(--bd-br)}
.pojm-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin-bottom:18px}
.pojm{position:relative;padding:14px 16px 14px 18px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);transition:border-color .2s, transform .15s;overflow:hidden}
.pojm:hover{border-color:var(--bd-br);transform:translateY(-1px)}
.pojm::before{content:'';position:absolute;left:0;top:14px;bottom:14px;width:2px;border-radius:0 2px 2px 0;opacity:.65}
.pojm[data-cat="djelo"]::before{background:var(--red)}
.pojm[data-cat="autor"]::before{background:var(--gold)}
.pojm[data-cat="moderna"]::before{background:var(--teal)}
.pojm[data-cat="kontekst"]::before{background:var(--bronze)}
.pojm-cat{display:inline-block;font-family:var(--mono);font-size:8.5px;font-weight:700;color:var(--t3);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px;padding:2px 6px;background:var(--ele);border:1px solid var(--bdm);border-radius:8px}
.pojm-word{font-family:var(--display);font-size:14.5px;font-weight:700;color:var(--bronze-l);letter-spacing:.3px;margin-bottom:6px;line-height:1.3}
.pojm-def{font-family:var(--serif);font-size:13px;line-height:1.55;color:var(--t2)}
.pojm-def b{color:var(--t1)}
.pojm-def em{color:var(--bronze-l);font-style:italic}
.pojm-noresult{padding:30px 20px;text-align:center;color:var(--t3);font-family:var(--serif);font-style:italic;display:none;background:var(--card);border:1px dashed var(--bdm);border-radius:var(--r3)}
.pojm-noresult.show{display:block}
@media (max-width:600px){
  .pojm-grid{grid-template-columns:1fr;gap:10px}

  .pojm{padding:12px 14px 12px 16px}

  .pojm-word{font-size:13.5px}

  .pojm-def{font-size:12.5px}

  .pojm-search{font-size:11px;padding:10px 14px}

  .pojm-search-row, .pojm-filters{display:none!important}

  .pojm-noresult{display:none!important}

}

/* ══ CARD — editorial, mirrors .sc/.pojm ══ */
.cit-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:18px 20px 16px 22px;transition:all .22s cubic-bezier(.4,0,.2,1);position:relative;display:flex;flex-direction:column;overflow:visible}
.cit-card:hover{border-color:var(--bd-br);transform:translateY(-2px);box-shadow:0 8px 24px rgba(220,50,47,.08)}

/* Subtle category left stripe (integrated, not aggressive) */
.cit-card::before{content:'';position:absolute;left:0;top:14px;bottom:14px;width:2px;background:var(--bronze);opacity:.4;border-radius:0 2px 2px 0;transition:opacity .22s,width .22s}
.cit-card:hover::before{opacity:.9;width:3px}
.cit-card[data-cat="gregor"]::before{background:var(--red)}
.cit-card[data-cat="greta"]::before{background:var(--gold)}
.cit-card[data-cat="otac"]::before{background:#6b5555}
.cit-card[data-cat="fragmentacija"]::before{background:#c9a878}
.cit-card[data-cat="prokurist"]::before{background:var(--teal)}
.cit-card[data-cat="podstanari"]::before{background:#a08a8a}
.cit-card[data-cat="dvorkinja"]::before{background:#9b8068}
.cit-card[data-cat="kafka"]::before{background:#e0a077}
.cit-card[data-cat="kontekst"]::before{background:#c5a1d9}

/* Top meta row: category eye + must-know badge */
.cit-meta{display:flex;align-items:center;gap:6px;margin-bottom:10px;padding-right:68px;flex-wrap:wrap}
.cit-eye{font-family:var(--mono);font-size:8px;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3);padding:2px 7px;background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r1);font-weight:700}
.cit-card[data-cat="gregor"] .cit-eye{color:var(--red-l);background:var(--dim-r);border-color:var(--bd-r)}
.cit-card[data-cat="greta"] .cit-eye{color:var(--gold);background:var(--dim-go);border-color:var(--bd-go)}
.cit-card[data-cat="otac"] .cit-eye{color:#a89090;background:rgba(107,85,85,.18);border-color:rgba(107,85,85,.32)}
.cit-card[data-cat="fragmentacija"] .cit-eye{color:#d6b890;background:rgba(201,168,120,.14);border-color:rgba(201,168,120,.28)}
.cit-card[data-cat="prokurist"] .cit-eye{color:var(--teal);background:var(--dim-t);border-color:var(--bd-t)}
.cit-card[data-cat="podstanari"] .cit-eye{color:#b8a8a8;background:rgba(160,138,138,.14);border-color:rgba(160,138,138,.28)}
.cit-card[data-cat="dvorkinja"] .cit-eye{color:#b39880;background:rgba(155,128,104,.14);border-color:rgba(155,128,104,.28)}
.cit-card[data-cat="kafka"] .cit-eye{color:#e0a077;background:rgba(224,160,119,.12);border-color:rgba(224,160,119,.25)}
.cit-card[data-cat="kontekst"] .cit-eye{color:#c5a1d9;background:rgba(197,161,217,.12);border-color:rgba(197,161,217,.25)}

.cit-must{font-family:var(--mono);font-size:8px;letter-spacing:1.5px;text-transform:uppercase;color:var(--gold);padding:2px 7px;background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r1);font-weight:700;display:inline-flex;align-items:center;gap:3px;box-shadow:0 0 10px rgba(232,201,122,.12)}
.cit-must::before{content:'★';font-size:9px}

.cit-diff{font-family:var(--mono);font-size:8px;letter-spacing:1.5px;text-transform:uppercase;padding:2px 7px;background:transparent;border:1px solid var(--bdm);border-radius:var(--r1);font-weight:700;color:var(--t3)}
.cit-diff.adv{color:var(--bronze-l);border-color:var(--bd-br);background:var(--dim-br)}

/* Source: author + work */
.cit-src{margin-bottom:4px}
.cit-src-author{font-family:var(--display);font-size:13.5px;font-weight:700;color:var(--bronze-l);letter-spacing:.4px;line-height:1.3;display:block}
.cit-src-work{display:block;font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.7px;color:var(--t3);margin-top:3px;line-height:1.5;text-transform:uppercase;opacity:.85}

/* Quote text — THE HERO ELEMENT */
.cit-txt{font-family:'EB Garamond',Georgia,serif;font-size:16px;font-weight:400;font-style:italic;color:var(--t1);line-height:1.55;margin:12px 0 14px;padding:0;letter-spacing:.15px;position:relative;word-wrap:break-word;overflow-wrap:break-word}

/* Thesis tags row */
.cit-tez-row{display:flex;gap:4px;flex-wrap:wrap;margin:0 0 12px}
.cit-tez{font-family:var(--mono);font-size:8.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--teal);background:var(--dim-t);border:1px solid var(--bd-t);border-radius:var(--r1);padding:2px 8px;cursor:pointer;transition:all .15s}
.cit-tez:hover{background:var(--hov);color:var(--t1);border-color:var(--teal)}

/* Use context */
.cit-use{font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.6;padding-top:10px;border-top:1px solid var(--bdm);margin:0}
.cit-use b:first-child{font-family:var(--mono);font-size:8.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--bronze-l);display:block;margin-bottom:5px}
.cit-use b:not(:first-child){color:var(--t1);font-weight:600;font-family:var(--serif)}
.cit-use em{color:var(--t1);font-style:italic}

/* Action buttons — bottom-right, ghost */
.cit-actions{position:absolute;top:14px;right:14px;display:flex;gap:3px;z-index:3;opacity:0;transition:opacity .22s}
.cit-card:hover .cit-actions,.cit-card:focus-within .cit-actions{opacity:1}
.cit-card:has(.cit-btn.fav.on) .cit-actions{opacity:1}
.cit-btn{width:26px;height:26px;border-radius:50%;border:1px solid var(--bdm);background:var(--ele);color:var(--t3);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:11px;transition:all .15s;padding:0}
.cit-btn:hover{background:var(--hov);color:var(--t1);border-color:var(--bd-br);transform:scale(1.06)}
.cit-btn.fav.on{color:var(--gold);background:var(--dim-go);border-color:var(--bd-go);opacity:1}
.cit-btn.copy.copied{color:var(--green-l);background:var(--dim-g);border-color:var(--bd-g)}
.cit-btn[data-count]::after{content:attr(data-count);position:absolute;top:-5px;right:-5px;background:var(--dim-br);color:var(--bronze-l);font-size:7px;font-weight:700;padding:1px 4px;border-radius:7px;border:1px solid var(--bd-br);font-family:var(--mono);line-height:1;min-width:12px;text-align:center;letter-spacing:0}
.cit-btn[data-count="0"]::after{display:none}

/* Empty state */
.cit-empty{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:32px 20px;text-align:center;font-family:var(--serif);font-size:13.5px;color:var(--t3);font-style:italic;margin:16px 0;display:none}
.cit-empty.on{display:block}
.cit-empty b{color:var(--bronze-l);font-style:normal;font-family:var(--mono);font-size:9px;letter-spacing:2px;text-transform:uppercase;font-weight:700;display:block;margin-bottom:8px}

.cit-hidden{display:none!important}

/* Focus card animation — for random pick */
.cit-focus{animation:citFocus 1.2s cubic-bezier(.25,.8,.25,1)}
@keyframes citFocus{
  0%{transform:scale(1);box-shadow:0 0 0 rgba(232,201,122,0)}

  20%{transform:scale(1.03);box-shadow:0 0 0 3px var(--gold),0 12px 32px rgba(232,201,122,.35)}

  100%{transform:scale(1);box-shadow:0 0 0 rgba(232,201,122,0)}

}

/* Toast */
.cit-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(16px);background:var(--card);color:var(--t1);padding:10px 18px;border-radius:var(--r2);border:1px solid var(--bd-go);font-family:var(--serif);font-size:13px;font-style:italic;box-shadow:0 10px 32px rgba(0,0,0,.45);opacity:0;visibility:hidden;transition:all .25s cubic-bezier(.4,0,.2,1);z-index:9999;pointer-events:none}
.cit-toast.on{opacity:1;visibility:visible;transform:translateX(-50%) translateY(0)}



/* ══ v9.1 POLISH ══ */
/* Keyboard focus for filter buttons — clear outline */
.cit-fbtn:focus-visible,.cit-diffbtn:focus-visible,.cit-random:focus-visible,.cit-tez:focus-visible,.cit-count-clear:focus-visible,.cit-btn:focus-visible{outline:2px solid var(--gold);outline-offset:2px;border-radius:var(--r1)}

/* Card focus via keyboard navigation */
.cit-card:focus-within{border-color:var(--bronze)}

/* Highlight on quote hover — subtle */
.cit-card:hover .cit-txt{color:#fef3e2}

/* Smooth cit-hidden transition (reduce jarring) */
.cit-card{will-change:transform}
.cit-hidden{display:none!important}

/* Print-friendly: show all citati, hide filters */
@media print{
  .cit-filters,.cit-subfilters,.cit-count,.cit-actions{display:none!important}

  .cit-card{break-inside:avoid;page-break-inside:avoid;margin-bottom:12px;border:1px solid #333;background:#fff;color:#000}

  .cit-txt{color:#000}

  .cit-use{color:#222}

  .cit-src-author{color:#000}

  .cit-hidden{display:block!important}

}

/* Reduce motion for users who prefer */
@media (prefers-reduced-motion:reduce){
  .cit-card,.cit-fbtn,.cit-btn,.cit-random{transition:none!important;animation:none!important}

  .cit-focus{animation:none!important}

}

/* Mobile */
@media (max-width:600px){
  .cit-grid{grid-template-columns:1fr;gap:12px}

  .cit-card{padding:16px 16px 14px 18px}

  .cit-subfilters{padding:8px 10px;gap:6px}

  .cit-random{padding:4px 10px;font-size:9px}

  .cit-txt{font-size:15px}

  .cit-src-author{font-size:13px}

  .cit-actions{opacity:1}
}
.diag-bar{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:14px;flex-wrap:wrap}
.diag-prog-wrap{flex:1;height:6px;background:var(--ele);border-radius:3px;overflow:hidden;min-width:120px}
.diag-prog-bar{height:100%;background:linear-gradient(90deg,var(--bronze-d),var(--bronze),var(--gold));border-radius:3px;transition:width .3s ease;width:0%}
.diag-prog-num{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:1px;white-space:nowrap}
.diag-prog-num span{color:var(--green)}
.diag-topic{display:inline-block;font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;color:var(--bronze);text-transform:uppercase;padding:4px 10px;background:var(--dim-br);border:1px solid var(--bd-br);border-radius:10px;margin-bottom:10px}
.diag-prog-txt{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:1.2px;text-transform:uppercase;white-space:nowrap}
.diag-prog-txt span{color:var(--bronze-l);font-weight:700}
.cit-eyebrow{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:8px}
.cit-eye-cat{font-family:var(--mono);font-size:8.5px;letter-spacing:1.8px;text-transform:uppercase;color:var(--bronze-l);padding:2px 8px;background:var(--dim-br);border:1px solid var(--bd-br);border-radius:var(--r1);font-weight:700}
.cit-eye-must{font-family:var(--mono);font-size:8.5px;letter-spacing:1.5px;text-transform:uppercase;color:var(--gold);padding:2px 8px;background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r1);font-weight:700}
.cit-src{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:.5px;margin-top:10px;display:flex;gap:8px;flex-wrap:wrap;align-items:center;padding-top:8px;border-top:1px dashed var(--bdm)}
.cit-src-author{color:var(--bronze-l);font-weight:700;font-size:10.5px}
.cit-src-loc{color:var(--t3);font-style:italic;font-size:10px}


/* ══ DIAG INTRO (H10) ══ */
.diag-intro-body{padding:18px 22px}
.diag-intro-icon{font-size:32px;line-height:1;margin-bottom:8px;text-align:center}
.diag-intro-title{font-family:var(--display);font-size:18px;font-weight:700;color:var(--bronze-l);letter-spacing:.8px;text-align:center;margin-bottom:8px}
.diag-intro-desc{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.55;text-align:center;max-width:440px;margin:0 auto 14px}




      .fc-wrap{display:flex;flex-direction:column;align-items:center;gap:18px;margin:16px 0 24px}
      .fc-counter{font-family:var(--mono);font-size:11px;color:var(--t3);letter-spacing:1.5px;text-transform:uppercase}
      .fc-counter b{color:var(--bronze-l)}
      .fc{width:100%;max-width:520px;min-height:220px;perspective:1500px;cursor:pointer}
      .fc-inner{position:relative;width:100%;height:100%;min-height:220px;transition:transform .6s cubic-bezier(.4,0,.2,1);transform-style:preserve-3d}
      .fc.flipped .fc-inner{transform:rotateY(180deg)}
      .fc-front,.fc-back{position:absolute;inset:0;min-height:220px;padding:40px 32px;border-radius:var(--r4);backface-visibility:hidden;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;border:1px solid var(--bdm)}
      .fc-front{background:linear-gradient(135deg,var(--card),var(--ele))}
      .fc-back{background:linear-gradient(135deg,rgba(220,50,47,.12),rgba(232,201,122,.05));border-color:var(--bd-br);transform:rotateY(180deg)}
      .fc-cat{font-family:var(--mono);font-size:9px;letter-spacing:2px;text-transform:uppercase;color:var(--bronze);margin-bottom:12px}
      .fc-term{font-family:var(--display);font-size:30px;font-weight:700;color:var(--t1);letter-spacing:1px}
      .fc-hint{font-family:var(--mono);font-size:10px;color:var(--t3);margin-top:22px;letter-spacing:1px}
      .fc-def{font-family:var(--serif);font-size:16px;line-height:1.65;color:var(--t1);max-width:420px}
      .fc-controls{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
      .fcb{padding:10px 20px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);color:var(--t2);font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all .2s}
      .fcb:hover{border-color:var(--bd-br);color:var(--bronze-l)}
      .fcb.primary{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border-color:var(--bronze)}
      .fcb.know{border-color:var(--bd-g);color:var(--green)}
      .fcb.know:hover{background:var(--dim-g)}
      .fcb.dont{border-color:var(--bd-r);color:var(--red)}
      .fcb.dont:hover{background:var(--dim-r)}
      .fc-stats{display:flex;gap:20px;margin-top:10px;font-family:var(--mono);font-size:11px}
      .fc-stats span{color:var(--t3)}
      .fc-stats b{color:var(--green)}
      .fc-stats i{color:var(--red);font-style:normal}
    


      .mg-intro{font-family:var(--serif);font-size:14px;color:var(--t2);margin-bottom:16px}
      .mg-board{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:18px 0}
      .mg-col{display:flex;flex-direction:column;gap:8px}
      .mg-col-label{font-family:var(--mono);font-size:9px;letter-spacing:2px;color:var(--t3);text-transform:uppercase;text-align:center;margin-bottom:4px}
      .mg-item{padding:12px 16px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--serif);font-size:14px;color:var(--t1);cursor:pointer;transition:all .18s;text-align:center;line-height:1.4;min-height:48px;display:flex;align-items:center;justify-content:center}
      .mg-item:hover{border-color:var(--bd-br);transform:translateX(2px)}
      .mg-item.sel{border-color:var(--bronze);background:var(--dim-br);color:var(--bronze-l);font-weight:600}
      .mg-item.ok{border-color:var(--green);background:var(--dim-g);color:var(--green);opacity:.6;pointer-events:none}
      .mg-item.err{border-color:var(--red);background:var(--dim-r);color:var(--red);animation:shake .4s}
      @keyframes shake{0%,100%{transform:translateX(0)}

      }
    


/* ══ INTERACTIVE SCENES — Tab 1 SEC 06 ══ */
.scenes{display:flex;flex-direction:column;gap:8px;margin:18px 0 22px}
.scene{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);overflow:hidden;transition:border-color .2s, box-shadow .2s}
.scene:hover{border-color:var(--bd-br)}
.scene[open]{border-color:var(--bd-go);box-shadow:0 2px 8px rgba(232,201,122,.08)}
.scene-sum{display:grid;grid-template-columns:auto 1fr auto;gap:14px;align-items:center;padding:14px 16px;cursor:pointer;list-style:none;user-select:none}
.scene-sum::-webkit-details-marker{display:none}
.scene-sum::after{content:'▾';font-family:var(--mono);font-size:14px;color:var(--t3);transition:transform .2s;margin-left:8px}
.scene[open] .scene-sum::after{transform:rotate(180deg);color:var(--gold)}
.scene-num{font-family:var(--display);font-size:18px;font-weight:700;color:var(--bronze-l);min-width:32px;letter-spacing:.5px}
.scene[open] .scene-num{color:var(--gold)}
.scene-ttl{font-family:var(--serif);font-size:14.5px;color:var(--t1);font-weight:600;line-height:1.4}
.scene-ttl em{color:var(--bronze-l);font-style:italic;font-weight:400}
.scene-meta{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:1.5px;padding:3px 8px;background:var(--ele);border:1px solid var(--bdm);border-radius:10px;text-transform:uppercase;white-space:nowrap}
.scene-body{padding:0 16px 16px}
.scene-quote{padding:12px 14px;background:var(--sur);border-left:3px solid var(--gold);border-radius:0 var(--r2) var(--r2) 0;font-family:var(--serif);font-size:13.5px;line-height:1.55;color:var(--t1);font-style:italic;margin-bottom:10px}
.scene-why{font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t2)}
.scene-why b{color:var(--t1)}
@media (max-width:600px){
  .scene-sum{grid-template-columns:auto 1fr;gap:10px;padding:12px 14px}

  .scene-meta{grid-column:2;justify-self:start;margin-top:2px}

  .scene-num{font-size:16px;min-width:26px}

  .scene-ttl{font-size:13.5px}

  .scene[open]{box-shadow:none!important}

  .scene-body{display:block!important;padding:0 16px 16px}

  details > summary::after{display:none!important}

}


/* ══ GLOSSARY TOOLTIP — definicije u tekstu ══ */
.gloss{position:relative;border-bottom:1px dotted var(--bd-go);cursor:help;color:var(--gold);font-style:normal;transition:color .15s, border-color .15s}
.gloss:hover, .gloss:focus{color:var(--gold-l, #f0d97e);border-bottom-color:var(--gold);outline:none}
.gloss-tip{position:absolute;bottom:calc(100% + 6px);left:50%;transform:translateX(-50%);min-width:200px;max-width:300px;padding:10px 12px;background:#0a0a0a;color:var(--t1);border:1px solid var(--bd-go);border-radius:var(--r2);font-family:var(--serif);font-size:12.5px;line-height:1.5;font-style:normal;font-weight:400;box-shadow:0 4px 14px rgba(0,0,0,.5);opacity:0;pointer-events:none;transition:opacity .18s, transform .18s;z-index:50;text-align:left}
.gloss-tip::after{content:'';position:absolute;top:100%;left:50%;transform:translateX(-50%);border-style:solid;border-width:6px 6px 0 6px;border-color:var(--bd-go) transparent transparent transparent}
.gloss:hover .gloss-tip, .gloss:focus .gloss-tip{opacity:1;transform:translateX(-50%) translateY(-2px)}
.gloss-tip b{color:var(--gold);font-weight:700}
@media (max-width:600px){
  .gloss-tip{position:fixed;left:10px;right:10px;bottom:auto;top:auto;transform:none;max-width:none;min-width:0}

  .gloss-tip::after{display:none}

  .gloss:hover .gloss-tip, .gloss:focus .gloss-tip{transform:none}

  .gloss-tip{display:none!important}

}


/* ══ A11Y: Skip-to-content ══ */
.skip-link{position:absolute;top:-40px;left:8px;z-index:9999;padding:10px 18px;background:var(--gold);color:#0a0a0a;font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;text-decoration:none;border-radius:4px;transition:top .18s}
.skip-link:focus{top:8px;outline:3px solid var(--bd-go);outline-offset:2px}

/* ══ FEATURED QUOTE — Tab 0 emocionalni hook ══ */
.featured-quote{display:flex;align-items:flex-start;gap:18px;margin:22px 0 24px;padding:24px 28px 24px 22px;background:linear-gradient(135deg,rgba(232,201,122,.08) 0%,rgba(224,82,82,.04) 100%);border:1px solid var(--bd-go);border-radius:var(--r3);position:relative;overflow:hidden;transition:border-color .25s}
.featured-quote::before{content:'';position:absolute;top:0;left:0;width:4px;height:100%;background:linear-gradient(180deg,var(--gold),var(--bronze))}
.featured-quote::after{content:'';position:absolute;top:-30px;right:-30px;width:120px;height:120px;background:radial-gradient(circle,rgba(232,201,122,.18) 0%,transparent 70%);pointer-events:none}
.featured-quote:hover{border-color:var(--gold)}
.fq-mark{font-family:var(--display);font-size:78px;line-height:1;color:var(--gold);opacity:.4;font-weight:300;margin-top:-8px;flex-shrink:0;font-style:italic}
.fq-body{flex:1;min-width:0}
.fq-text{font-family:var(--serif);font-size:18px;line-height:1.45;color:var(--t1);font-style:italic;font-weight:400}
.fq-meta{margin-top:10px;font-family:var(--mono);font-size:10.5px;color:var(--t3);letter-spacing:.5px}
.fq-meta em{color:var(--gold);font-style:italic}
.fq-copy{flex-shrink:0;width:34px;height:34px;background:transparent;color:var(--t3);border:1px solid var(--bdm);border-radius:var(--r2);cursor:pointer;font-size:14px;transition:all .18s;display:flex;align-items:center;justify-content:center}
.fq-copy:hover{color:var(--gold);border-color:var(--bd-go);background:var(--dim-go)}
@media (max-width:600px){
  .featured-quote{padding:18px 16px 18px 14px;gap:10px}

  .fq-mark{font-size:54px;margin-top:-4px}

  .fq-text{font-size:15.5px;line-height:1.5}

}

/* ══ COMPARATOR — Gregor vs Raskoljnikov side-by-side ══ */
.comparator{margin:18px 0 22px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden}
.comp-head{display:grid;grid-template-columns:1fr auto 1fr;background:var(--sur);border-bottom:1px solid var(--bdm);padding:14px 18px;align-items:center;gap:14px}
.comp-side{font-family:var(--display);font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;text-align:center}
.comp-side.left{color:var(--bronze-l)}
.comp-side.right{color:#e0a077}
.comp-vs{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:2px;padding:4px 10px;background:var(--ele);border-radius:12px;border:1px solid var(--bdm)}
.comp-row{display:grid;grid-template-columns:1fr 110px 1fr;border-top:1px solid var(--bdm)}
.comp-row:first-of-type{border-top:none}
.comp-cell{padding:13px 18px;font-family:var(--serif);font-size:13px;line-height:1.55;color:var(--t1)}
.comp-cell.left{text-align:right;border-right:1px solid var(--bdm)}
.comp-cell.right{border-left:1px solid var(--bdm)}
.comp-label{padding:13px 10px;background:var(--sur);text-align:center;font-family:var(--mono);font-size:9.5px;color:var(--t2);letter-spacing:1.5px;text-transform:uppercase;font-weight:700;border-right:1px solid var(--bdm);border-left:1px solid var(--bdm);align-self:center}
.comp-cell b{color:var(--bronze-l)}
.comp-cell.right b{color:#e0a077}
@media (max-width:600px){
  .comp-row{grid-template-columns:1fr}

  .comp-cell.left, .comp-cell.right{text-align:left;border:none}

  .comp-label{border:none;border-top:1px solid var(--bdm);border-bottom:1px solid var(--bdm);padding:8px 10px}

  .comp-head{grid-template-columns:1fr}

  .comp-vs{display:none}

  .comp-side{padding:6px 0}

}
/* Comparator mobile — show labels on cells */
@media (max-width:600px){
  .comp-cell.left::before{content:'GREGOR · ';font-family:var(--mono);font-size:9px;font-weight:700;color:var(--bronze-l);letter-spacing:1.5px;display:block;margin-bottom:4px}

  .comp-cell.right::before{content:'RASKOLJNIKOV · ';font-family:var(--mono);font-size:9px;font-weight:700;color:#e0a077;letter-spacing:1.5px;display:block;margin-bottom:4px}

}

/* ══ SAMPLE EXAM PROMPT — Tab 7 ══ */
.exam-prompt{margin:18px 0 22px;padding:20px 22px;background:linear-gradient(135deg,var(--dim-r) 0%,rgba(224,82,82,.04) 100%);border:1px solid var(--bd-r);border-radius:var(--r3);position:relative}
.exam-prompt::before{content:'NCVVO · ŠKOLSKI ESEJ';position:absolute;top:-9px;left:18px;padding:2px 10px;background:var(--bg);color:var(--red-l);font-family:var(--mono);font-size:9px;letter-spacing:2px;font-weight:700;border:1px solid var(--bd-r);border-radius:3px}
.exam-prompt-ttl{font-family:var(--display);font-size:14.5px;font-weight:700;color:var(--red-l);letter-spacing:.8px;margin-bottom:10px}
.exam-prompt-task{font-family:var(--serif);font-size:14.5px;line-height:1.6;color:var(--t1);font-style:italic;padding:14px 16px;background:var(--card);border-left:3px solid var(--red);border-radius:0 var(--r2) var(--r2) 0;margin-bottom:14px}
.exam-prompt-tips{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-top:14px}
.exam-tip{padding:10px 12px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--serif);font-size:12.5px;line-height:1.5;color:var(--t2)}
.exam-tip b{display:block;font-family:var(--mono);font-size:9px;color:var(--bronze-l);letter-spacing:1.5px;font-weight:700;text-transform:uppercase;margin-bottom:5px}

/* ══ MINI REVIZIJA — 3-min sažetak ══ */
.minirev{margin:20px 0 24px;padding:0;background:var(--card);border:1px solid var(--bd-go);border-radius:var(--r3);overflow:hidden}
.minirev-head{padding:14px 18px;background:linear-gradient(135deg,var(--dim-go),rgba(232,201,122,.04));border-bottom:1px solid var(--bd-go);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px}
.minirev-ttl{font-family:var(--display);font-size:13.5px;font-weight:700;color:var(--gold);letter-spacing:1px;text-transform:uppercase}
.minirev-time{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:1.5px;padding:3px 9px;background:var(--ele);border:1px solid var(--bdm);border-radius:10px}
.minirev-body{padding:18px}
.minirev-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:14px}
.minirev-card{padding:12px 14px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2)}
.minirev-card-lbl{font-family:var(--mono);font-size:9.5px;color:var(--bronze-l);letter-spacing:1.5px;font-weight:700;text-transform:uppercase;margin-bottom:5px}
.minirev-card-val{font-family:var(--serif);font-size:13.5px;color:var(--t1);line-height:1.5}
.minirev-card-val b{color:var(--gold)}
.minirev-quotes{padding:12px 14px;background:var(--sur);border-left:3px solid var(--bd-go);border-radius:0 var(--r2) var(--r2) 0;font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t1)}
.minirev-quotes ol{margin:0;padding-left:20px}
.minirev-quotes li{margin:4px 0;font-style:italic}
.minirev-quotes li b{font-style:normal;color:var(--gold)}
@media (max-width:600px){
  .minirev-head{padding:12px 14px}

  .minirev-body{padding:14px}

  .minirev-card-val{font-size:13px}

  .wc-box::after{content:'(brojač eseja — interaktivan widget, koristi online verziju)';font-style:italic;color:#666;font-size:11pt}

  .featured-quote{break-inside:avoid;border:1px solid #999!important}

  .featured-quote::before, .featured-quote::after{display:none}

  .fq-copy{display:none}

  .comparator, .minirev, .exam-prompt{break-inside:avoid;border:1px solid #999!important;background:transparent!important}

  .comp-svg-wrap, .fam-svg-wrap{break-inside:avoid;background:transparent!important;border:1px solid #999!important}

  .comp-svg-wrap::before, .fam-svg-wrap::before{display:none!important}

  .minirev-head, .exam-prompt::before{background:transparent!important;color:#000!important}

}
/* ══ H08 SVG VIZUALIZACIJE — Tab 1 nadogradnja ══ */
.comp-svg-wrap, .fam-svg-wrap{
  margin:18px 0 24px;
  padding:18px;
  background:linear-gradient(135deg, var(--sur) 0%, var(--card) 100%);
  border:1px solid var(--bd);
  border-radius:var(--r3);
  position:relative;
  overflow:hidden;
}
.comp-svg-wrap::before, .fam-svg-wrap::before{
  content:'';
  position:absolute;
  top:0; left:-100%;
  width:100%; height:2px;
  background:linear-gradient(90deg, transparent, var(--gold), transparent);
  animation:slideShine 3.5s ease-in-out infinite;
}
@keyframes slideShine{
  0%, 100%{left:-100%}

}
.comp-svg, .fam-svg{
  width:100%;
  height:auto;
  max-width:760px;
  display:block;
  margin:0 auto;
}
.comp-hs{
  cursor:pointer;
  transition:all .25s ease;
  filter:drop-shadow(0 2px 4px rgba(0,0,0,.4));
}
.comp-hs:hover, .comp-hs:focus{
  transform-origin:center;
  filter:drop-shadow(0 0 8px rgba(232,201,122,.6));
  outline:none;
}

/* Mobile */
@media (max-width:600px){
  .comp-svg-wrap, .fam-svg-wrap{
    padding:10px 8px;
    margin:14px -4px 18px;
  }

}
@media (prefers-reduced-motion:reduce){
  .comp-svg-wrap::before, .fam-svg-wrap::before{animation:none}

  .comp-hs{transition:none}

}


/* ══ ESEJ BROJAČ — Tab 2 nadogradnja ══ */
.wc-box{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:20px;margin:14px 0 20px}
.wc-hdr{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px;flex-wrap:wrap;gap:8px}
.wc-ttl{font-family:var(--display);font-size:13px;font-weight:700;color:var(--bronze-l);letter-spacing:1px;text-transform:uppercase}
.wc-sub{font-family:var(--serif);font-size:12px;color:var(--t3);font-style:italic}
.wc-textarea{width:100%;min-height:200px;padding:14px;background:var(--inp);color:var(--t1);border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--serif);font-size:14.5px;line-height:1.65;resize:vertical;outline:none;transition:border-color .2s;box-sizing:border-box}
.wc-textarea:focus{border-color:var(--bronze);box-shadow:0 0 0 3px rgba(220,50,47,.1)}
.wc-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(105px,1fr));gap:8px;margin-top:14px}
.wc-stat{padding:10px 14px;background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r2);text-align:center;transition:all .2s}
.wc-stat-num{font-family:var(--display);font-size:22px;font-weight:700;color:var(--bronze-l);letter-spacing:.5px;line-height:1.2}
.wc-stat-lbl{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:1px;text-transform:uppercase;margin-top:3px}
.wc-stat.critical{border-color:var(--bd-r);background:var(--dim-r)}
.wc-stat.critical .wc-stat-num{color:var(--red-l)}
.wc-stat.ok{border-color:var(--bd-g);background:var(--dim-g)}
.wc-stat.ok .wc-stat-num{color:var(--green-l)}
.wc-progress{margin-top:14px;padding:12px 14px;background:var(--dim-br);border:1px solid var(--bd-br);border-radius:var(--r2);display:flex;align-items:center;gap:14px;transition:all .3s}
.wc-progress-bar-wrap{flex:1;height:8px;background:var(--ele);border-radius:4px;overflow:hidden}
.wc-progress-bar{height:100%;background:linear-gradient(90deg,var(--red) 0%,var(--bronze) 60%,var(--green) 100%);border-radius:4px;transition:width .3s ease;width:0%}
.wc-progress-lbl{font-family:var(--mono);font-size:10px;color:var(--t2);letter-spacing:.5px;min-width:80px;text-align:right}
.wc-progress.pass{background:var(--dim-g);border-color:var(--bd-g)}
.wc-progress.pass .wc-progress-lbl{color:var(--green-l);font-weight:700}
.wc-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
.wc-btn{padding:7px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;background:var(--card);color:var(--t2);border:1px solid var(--bdm);border-radius:var(--r1);cursor:pointer;transition:all .15s}
.wc-btn:hover{color:var(--t1);border-color:var(--bd-br);background:var(--ele)}
.wc-hint{margin-top:10px;padding:10px 14px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.55}
.wc-hint b{color:var(--t1)}
@media (max-width:600px){
  .wc-box{padding:14px}

  .wc-textarea{font-size:13.5px;min-height:160px}

  .wc-stat-num{font-size:18px}




/* CHAPTER NAVIGATION (auto-injected) */
.chapter-nav-wrap {
  max-width: 880px;
  margin: 40px auto 28px;
  padding: 0 18px;
}


.chapter-nav-hdr {
  text-align: center;
  margin-bottom: 22px;
}


.chapter-nav-title {
  font-family: var(--display, 'Fraunces', serif);
  font-size: 22px;
  font-weight: 700;
  color: var(--t1, #f4ede5);
  margin-bottom: 4px;
}


.chapter-nav-sub {
  font-size: 13px;
  color: var(--t3, #8a7a6e);
}


.chapter-nav-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-bottom: 22px;
}


.chapter-nav-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 22px;
  background: var(--ele, #1f1414);
  border: 1px solid var(--bd, #2c1f1f);
  border-radius: 14px;
  text-decoration: none;
  color: var(--t1, #f4ede5);
  transition: all 0.15s ease;
}


.chapter-nav-card:hover {
  border-color: var(--gold, #e9b446);
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.3);
}


.chapter-nav-prev {
  flex-direction: row;
}


.chapter-nav-next {
  flex-direction: row;
}


.chapter-nav-arrow {
  font-size: 28px;
  color: var(--gold, #e9b446);
  flex-shrink: 0;
  font-family: var(--display, serif);
}


.chapter-nav-meta {
  flex: 1;
}


.chapter-nav-pill {
  display: inline-block;
  padding: 3px 8px;
  background: rgba(74,144,217,0.1);
  color: var(--blue, #4a90d9);
  border-radius: 10px;
  font-family: var(--mono, monospace);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1.2px;
  margin-bottom: 6px;
}


.chapter-nav-pill-next {
  background: rgba(233,180,70,0.1);
  color: var(--gold, #e9b446);
}


.chapter-nav-name {
  font-family: var(--display, serif);
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 4px;
}


.chapter-nav-desc {
  font-size: 12px;
  color: var(--t3, #8a7a6e);
  line-height: 1.5;
}


.chapter-nav-related {
  padding: 18px 22px;
  background: var(--ele, #1f1414);
  border: 1px solid var(--bd, #2c1f1f);
  border-radius: 14px;
}


.chapter-nav-related-ttl {
  font-family: var(--display, serif);
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--t1, #f4ede5);
}


.chapter-nav-related-grid {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}


.chapter-nav-mini {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: var(--bg2, #1a1010);
  border: 1px solid var(--bd, #2c1f1f);
  border-radius: 10px;
  text-decoration: none;
  color: var(--t1, #f4ede5);
  transition: all 0.15s ease;
}


.chapter-nav-mini:hover {
  border-color: var(--gold, #e9b446);
  transform: translateY(-1px);
}


.chapter-nav-mini-code {
  font-family: var(--mono, monospace);
  font-size: 10px;
  font-weight: 800;
  color: var(--gold, #e9b446);
  letter-spacing: 0.8px;
}


.chapter-nav-mini-name {
  font-size: 12px;
  color: var(--t2, #c5b8aa);
}


@media (max-width: 720px) {
  .chapter-nav-grid {
    grid-template-columns: 1fr;
  }
}



/* TIER_SYSTEM_CSS_INJECTED */
/* ═══════════════════════════════════════════════════
   MATURIRAJ.HR — TIER SYSTEM CSS
   Paywall modal + sidebar badge + tier indicators
   ═══════════════════════════════════════════════════ */

/* ───────── PAYWALL OVERLAY ───────── */
.mt-paywall-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: mt-fade-in 0.2s ease;
}


@keyframes mt-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}


/* ───────── PAYWALL MODAL ───────── */
.mt-paywall-modal {
  position: relative;
  background: var(--bg2, #1a1a1a);
  border: 1px solid var(--bd, #333);
  border-radius: 18px;
  max-width: 920px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.5);
  padding: 32px 28px;
  animation: mt-slide-up 0.3s ease;
}


@keyframes mt-slide-up {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}


.mt-paywall-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid var(--bd, #333);
  color: var(--t2, #aaa);
  font-size: 22px;
  font-weight: 300;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  line-height: 1;
}


.mt-paywall-close:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--t1, #fff);
  border-color: var(--gold, #e9b446);
}


/* ───────── PAYWALL HEADER ───────── */
.mt-paywall-header {
  text-align: center;
  margin-bottom: 28px;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--bd, #333);
}


.mt-paywall-subtitle {
  font-size: 14px;
  color: var(--t2, #aaa);
  line-height: 1.5;
  max-width: 520px;
  margin: 0 auto;
}


.mt-paywall-tier {
  position: relative;
  padding: 24px 22px;
  background: var(--ele, #222);
  border: 2px solid var(--bd, #333);
  border-radius: 14px;
  transition: all 0.2s ease;
}


.mt-paywall-tier:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
}


.mt-paywall-tier-recommended {
  border-color: var(--gold, #e9b446);
  background: linear-gradient(135deg, rgba(233, 180, 70, 0.06), var(--ele, #222));
  box-shadow: 0 0 0 4px rgba(233, 180, 70, 0.08);
}


.mt-paywall-badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--gold, #e9b446);
  color: #0F0605;
  padding: 4px 12px;
  border-radius: 12px;
  font-family: var(--mono, monospace);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}


.mt-paywall-tier-name {
  font-family: var(--display, 'Fraunces', serif);
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 8px;
  color: var(--t1, #fff);
}


.mt-paywall-tier-standard .mt-paywall-tier-name {
  color: var(--blue, #4a90d9);
}


.mt-paywall-tier-pro .mt-paywall-tier-name {
  color: var(--gold, #e9b446);
}


.mt-paywall-tier-price span {
  font-size: 14px;
  color: var(--t3, #888);
  font-weight: 400;
  margin-left: 4px;
}


.mt-paywall-tier-features {
  list-style: none;
  margin: 0 0 18px 0;
  padding: 0;
  font-size: 13px;
  line-height: 1.7;
  color: var(--t2, #ccc);
}


.mt-paywall-tier-features li {
  padding: 4px 0;
  padding-left: 4px;
}


.mt-paywall-tier-features li strong {
  color: var(--t1, #fff);
}


/* ───────── CTA BUTTONS ───────── */
.mt-paywall-cta {
  width: 100%;
  padding: 12px 20px;
  background: var(--blue, #4a90d9);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-family: var(--display, 'Fraunces', serif);
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s ease;
  letter-spacing: 0.2px;
}


.mt-paywall-cta:hover {
  background: var(--blue-hover, #3578bf);
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(74, 144, 217, 0.3);
}


.mt-paywall-cta-pro {
  background: var(--gold, #e9b446);
  color: #0F0605;
}


.mt-paywall-cta-pro:hover {
  background: var(--gold-hover, #d4a13e);
  box-shadow: 0 6px 18px rgba(233, 180, 70, 0.3);
}


/* ───────── PAYWALL FOOTER ───────── */
.mt-paywall-footer {
  text-align: center;
  font-size: 12px;
  color: var(--t3, #888);
  padding-top: 18px;
  border-top: 1px solid var(--bd, #333);
}


.mt-paywall-link {
  color: var(--blue, #4a90d9);
  text-decoration: none;
  font-family: var(--mono, monospace);
  font-size: 11px;
  letter-spacing: 0.5px;
}


.mt-paywall-link:hover {
  color: var(--gold, #e9b446);
  text-decoration: underline;
}


.mt-paywall-link-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}


.mt-paywall-divider {
  margin: 0 8px;
  color: var(--t3, #888);
}


.mt-tier-badge-free {
  border-left: 3px solid var(--t3, #888);
}


.mt-tier-badge-standard {
  border-left: 3px solid var(--blue, #4a90d9);
}


.mt-tier-badge-pro {
  border-left: 3px solid var(--gold, #e9b446);
  background: linear-gradient(135deg, rgba(233, 180, 70, 0.04), var(--ele, #222));
}


.mt-tier-badge-label {
  font-family: var(--mono, monospace);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.8px;
  color: var(--t1, #fff);
}


.mt-tier-badge-cta:hover {
  background: var(--gold-hover, #d4a13e);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(233, 180, 70, 0.3);
}


/* ───────── MOBILE ───────── */
@media (max-width: 720px) {
  .mt-paywall-modal {
    padding: 24px 20px;
    border-radius: 14px;
  }
  
  .mt-paywall-title {
    font-size: 20px;
  }
  
  .mt-paywall-icon {
    font-size: 40px;
  }
  
  .mt-paywall-tiers {
    grid-template-columns: 1fr;
  }
  
  .mt-paywall-tier-price {
    font-size: 28px;
  }
  
  .mt-tier-badge {
    margin: 8px;
    padding: 8px 10px;
  }
  
  .mt-tier-badge-cta {
    font-size: 9px;
    padding: 3px 8px;
  }
}
/* ── post-refactor dodaci (spojeno) ── */

  .cmp-tbl td:nth-of-type(2)::before{content:'? Glagoljica: ';color:var(--red-l);font-family:var(--mono);font-size:10px;font-weight:700}

  .cmp-tbl td:nth-of-type(3)::before{content:'? Latinica: ';color:var(--bronze-l);font-family:var(--mono);font-size:10px;font-weight:700}

.yt-play{width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,.95);color:#0F0605;font-size:13px;display:flex;align-items:center;justify-content:center;padding-left:3px;box-shadow:0 3px 10px rgba(0,0,0,.35);position:relative;z-index:2;transition:transform .2s}

/* Enhanced focus states for accessibility (Gen Z + keyboard users) */
button:focus-visible,a:focus-visible,.tab:focus-visible,.cp-item:focus-visible,.pojm-filter:focus-visible,.cit-fbtn:focus-visible,.diag-opt:focus-visible,.nb:focus-visible{
  outline:2px solid var(--gold)!important;outline-offset:3px;border-radius:4px
/* Better hover states on cards (more tactile feel) */
.sc{transition:all .25s cubic-bezier(.4,0,.2,1)}
.sc:hover{transform:translateY(-3px);box-shadow:0 8px 22px rgba(220,50,47,.06),0 0 0 1px var(--bd-br);border-color:var(--bd-br)}
.cr{transition:all .2s ease}
.cr:hover{transform:translateX(2px);border-color:var(--bd-br)}
/* Quote card (citatnik) — premium hover */
/* Flashcard (drill) — better 3d feel */
.fc{will-change:transform;backface-visibility:hidden}
/* Print: hide scroll-progress */
  .scroll-progress{display:none!important}
  html{scroll-behavior:auto}
/* Reading time indicator (subtle, under hero) */
.reading-time-badge{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:rgba(232,201,122,.08);border:1px solid rgba(232,201,122,.25);border-radius:20px;font-family:var(--mono);font-size:10px;color:var(--gold);letter-spacing:1px;text-transform:uppercase;margin-top:8px}
.reading-time-badge::before{content:'⏱️';font-size:12px}
/* Oneginski stih visualization */
.oneginski-viz{background:linear-gradient(135deg,rgba(220,50,47,.03),rgba(232,201,122,.03));border:1px solid var(--bd-br);border-radius:var(--r3);padding:20px;margin:18px 0;font-family:var(--mono);font-size:13px;line-height:2}
.oneginski-viz-row{display:flex;align-items:baseline;gap:14px;padding:3px 0}
.oneginski-viz-num{width:20px;color:var(--t3);font-size:10px;text-align:right}
.oneginski-viz-rhyme{width:24px;font-weight:700;font-size:12px;padding:2px 6px;border-radius:4px;text-align:center}
.oneginski-viz-rhyme.A{background:rgba(220,50,47,.15);color:var(--red-l)}
.oneginski-viz-rhyme.B{background:rgba(232,201,122,.15);color:var(--gold)}
.oneginski-viz-rhyme.C{background:rgba(107,148,100,.15);color:var(--green-l)}
.oneginski-viz-rhyme.D{background:rgba(180,140,200,.15);color:#c5a1d9}
.oneginski-viz-rhyme.E{background:rgba(100,180,200,.15);color:#7cc5d9}
.oneginski-viz-rhyme.F{background:rgba(220,120,80,.15);color:#e0a077}
.oneginski-viz-rhyme.G{background:rgba(150,150,150,.15);color:var(--t2)}
.oneginski-viz-rhyme.lc{opacity:.7;font-size:11px}
.oneginski-viz-text{flex:1;color:var(--t2);font-family:var(--serif);font-style:italic}
.oneginski-viz-caption{font-family:var(--mono);font-size:10px;color:var(--t3);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:12px;text-align:center}
.oneginski-viz-legend{display:flex;justify-content:center;gap:10px;margin-top:14px;flex-wrap:wrap;font-family:var(--mono);font-size:10px;color:var(--t3)}
/* Animated gradient border for feature callouts */
@keyframes gradient-border{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
.feature-callout{position:relative;padding:20px;margin:18px 0;border-radius:var(--r3);background:var(--card);overflow:hidden}
.feature-callout::before{content:'';position:absolute;inset:-2px;border-radius:var(--r3);padding:2px;background:linear-gradient(90deg,var(--bronze),var(--gold),var(--red),var(--gold),var(--bronze));background-size:300% 100%;animation:gradient-border 8s linear infinite;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none}
/* "Back to top" floating button */
#back-to-top{position:fixed;bottom:20px;right:20px;width:44px;height:44px;border-radius:50%;background:var(--bronze);color:#F5E6D3;border:none;font-size:18px;cursor:pointer;display:none;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,.3);z-index:999;transition:all .2s;font-weight:700}
#back-to-top:hover{background:var(--gold);color:var(--dark);transform:translateY(-2px);box-shadow:0 6px 20px rgba(232,201,122,.4)}
#back-to-top.visible{display:flex}
@media print{#back-to-top{display:none!important}}
/* Micro-animations on quick stats */
@keyframes count-up{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
.stat-badge{animation:count-up .4s ease-out}
/* ==================================================================
   CITATNIK v9 — SMART CITATION INDEX
   Design: editorial, dark-only, mirrors .pojm / .sc / .box-20 system.
   Features: thesis tags, difficulty indicators, random pick, counter,
             must-know badges, category + thesis + difficulty filters.
   No white/light bg anywhere. All tokens from existing design system.
   ================================================================== */
/* Filter pills container — single row */
.cit-filters{display:flex;gap:6px;flex-wrap:wrap;margin:18px 0 10px;padding:0;align-items:center}
.cit-fbtn{padding:6px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;background:var(--card);color:var(--t2);border:1px solid var(--bdm);border-radius:var(--r1);cursor:pointer;transition:all .18s;display:inline-flex;align-items:center;gap:5px;line-height:1.4}
.cit-fbtn:hover{color:var(--t1);border-color:var(--bd-br)}
.cit-fbtn.active{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border-color:var(--bronze);font-weight:700;box-shadow:0 2px 10px rgba(220,50,47,.15)}
.cit-fbtn.fspec{background:var(--dim-go);color:var(--gold);border-color:var(--bd-go)}
.cit-fbtn.fspec:hover{background:var(--dim-go);color:var(--t1);border-color:var(--gold)}
.cit-fbtn.fspec.active{background:linear-gradient(135deg,var(--gold),#d4b980);color:#0F0605;border-color:var(--gold)}
/* Secondary filter row — difficulty + random */
.cit-subfilters{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 14px;padding:10px 14px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);align-items:center}
.cit-sublbl{font-family:var(--mono);font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3);font-weight:700;margin-right:4px}
.cit-diffbtn{padding:4px 10px;font-family:var(--mono);font-size:9.5px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;background:transparent;color:var(--t3);border:1px solid var(--bdm);border-radius:var(--r1);cursor:pointer;transition:all .15s}
.cit-diffbtn:hover{color:var(--t1);border-color:var(--bd-br)}
.cit-diffbtn.active{background:var(--dim-br);color:var(--bronze-l);border-color:var(--bd-br)}
.cit-random{padding:4px 12px;font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;background:var(--dim-go);color:var(--gold);border:1px solid var(--bd-go);border-radius:var(--r1);cursor:pointer;transition:all .15s;margin-left:auto;display:inline-flex;align-items:center;gap:5px}
.cit-random:hover{background:var(--hov);color:var(--gold)}
/* Count row */
.cit-count{font-family:var(--mono);font-size:11px;color:var(--t3);margin-bottom:14px;letter-spacing:.3px;display:flex;align-items:center;gap:10px}
.cit-count b{color:var(--bronze-l);font-weight:700}
.cit-count-clear{font-family:var(--mono);font-size:9px;letter-spacing:1px;text-transform:uppercase;color:var(--t3);background:transparent;border:1px dashed var(--bdm);border-radius:var(--r1);padding:3px 9px;cursor:pointer;transition:all .15s;display:none}
.cit-count-clear.on{display:inline-flex}
.cit-count-clear:hover{color:var(--t1);border-color:var(--bd-br)}
/* Grid */
.cit-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:14px;margin-top:4px}
/* == POJMOVNIK — Tab 4 cards == */
.pojm-search-row{margin-bottom:12px}
.pojm-search{width:100%;padding:12px 16px;background:var(--inp);color:var(--t1);border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--mono);font-size:12px;letter-spacing:.5px;outline:none;transition:border-color .2s;box-sizing:border-box}
.pojm-search:focus{border-color:var(--bronze);box-shadow:0 0 0 3px rgba(220,50,47,.1)}
.pojm-search::placeholder{color:var(--t3);font-style:italic}
.pojm-filters{display:flex;gap:6px;margin-bottom:18px;flex-wrap:wrap}
.pojm-filter{padding:6px 13px;background:var(--card);color:var(--t2);border:1px solid var(--bdm);border-radius:14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;cursor:pointer;transition:all .15s;text-transform:uppercase}
.pojm-filter:hover{color:var(--t1);border-color:var(--bd-br)}
.pojm-filter.on{background:var(--dim-br);color:var(--bronze-l);border-color:var(--bd-br)}
.pojm-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin-bottom:18px}
.pojm{position:relative;padding:14px 16px 14px 18px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);transition:border-color .2s, transform .15s;overflow:hidden}
.pojm:hover{border-color:var(--bd-br);transform:translateY(-1px)}
.pojm::before{content:'';position:absolute;left:0;top:14px;bottom:14px;width:2px;border-radius:0 2px 2px 0;opacity:.65}
.pojm[data-cat="djelo"]::before{background:var(--red)}
.pojm[data-cat="autor"]::before{background:var(--gold)}
.pojm[data-cat="moderna"]::before{background:var(--teal)}
.pojm[data-cat="kontekst"]::before{background:var(--bronze)}
.pojm-cat{display:inline-block;font-family:var(--mono);font-size:8.5px;font-weight:700;color:var(--t3);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px;padding:2px 6px;background:var(--ele);border:1px solid var(--bdm);border-radius:8px}
.pojm-word{font-family:var(--display);font-size:14.5px;font-weight:700;color:var(--bronze-l);letter-spacing:.3px;margin-bottom:6px;line-height:1.3}
.pojm-def{font-family:var(--serif);font-size:13px;line-height:1.55;color:var(--t2)}
.pojm-def b{color:var(--t1)}
.pojm-def em{color:var(--bronze-l);font-style:italic}
.pojm-noresult{padding:30px 20px;text-align:center;color:var(--t3);font-family:var(--serif);font-style:italic;display:none;background:var(--card);border:1px dashed var(--bdm);border-radius:var(--r3)}
.pojm-noresult.show{display:block}
}

/* == INTERACTIVE SCENES — Tab 1 SEC 06 == */
.scenes{display:flex;flex-direction:column;gap:8px;margin:18px 0 22px}

.scene{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);overflow:hidden;transition:border-color .2s, box-shadow .2s}

.scene:hover{border-color:var(--bd-br)}

.scene-sum{display:grid;grid-template-columns:auto 1fr auto;gap:14px;align-items:center;padding:14px 16px;cursor:pointer;list-style:none;user-select:none}

.scene-sum::-webkit-details-marker{display:none}

.scene-sum::after{content:'?';font-family:var(--mono);font-size:14px;color:var(--t3);transition:transform .2s;margin-left:8px}

.scene[open] .scene-sum::after{transform:rotate(180deg);color:var(--gold)}

.scene[open] .scene-num{color:var(--gold)}

.scene-ttl em{color:var(--bronze-l);font-style:italic;font-weight:400}

.scene-quote{padding:12px 14px;background:var(--sur);border-left:3px solid var(--gold);border-radius:0 var(--r2) var(--r2) 0;font-family:var(--serif);font-size:13.5px;line-height:1.55;color:var(--t1);font-style:italic;margin-bottom:10px}

.scene-why{font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t2)}

.scene-why b{color:var(--t1)}

.comp-svg, .fam-svg{
  width:100%;
  height:auto;
  max-width:760px;
  display:block;
  margin:0 auto;
}

.comp-hs:hover, .comp-hs:focus{
  transform-origin:center;
  filter:drop-shadow(0 0 8px rgba(232,201,122,.6));
  outline:none;
}
`;
const STYLES_CSS = SHARED_LIT_CSS + '\n' + CHAPTER_CSS_DELTA;
const SCRIPTS_JS = `/* ===========================================
   HRVATSKI H10 — JS
   Tabs · Pojmovnik search · Flashcards · Matching · Kviz
   Email capture · Back-to-top · Event tracking
   =========================================== */

/* == SUPABASE CONFIG ==
   ZAMIJENITI prije deploya u production:
   1. SUPABASE_URL      › tvoj Supabase project URL
   2. SUPABASE_ANON_KEY › anon public key iz Settings > API

   Za lokalni test — ostavi placeholder, modal/track će raditi u offline modu.
============================================= */
var SUPABASE_URL = 'https://your-project.supabase.co';
var SUPABASE_ANON_KEY = 'your-anon-key-here';

var CURRENT_CHAPTER = {
  subject: 'hrvatski',
  code: 'h10',
  title: 'Postmoderna'
};

/* == COUNTDOWN — sljedeći maturalni rok ==
   Konfigurabilno: promijeni datum ovdje za različite sezone.
   Ljetni rok 2026: 8. lipnja 2026 (približno — NCVVO objavljuje točan datum)
============================================= */
var MATURA_NEXT = new Date('2026-06-08T08:00:00+02:00');
var MATURA_LABEL = 'Ljetna matura 2026';

function daysToMatura(){
  var now = new Date();
  var ms = MATURA_NEXT - now;
  return Math.max(0, Math.ceil(ms / (1000*60*60*24)));
}

function renderCountdown(targetId){
  var el = document.getElementById(targetId);
  if(!el) return;
  var days = daysToMatura();
  var urgency = days <= 60;
  el.innerHTML = \`
    <div class="cd-ico">⏰</div>
    <div class="cd-body">
      <div class="cd-label">\${urgency ? 'Peak urgency' : 'Do mature'}</div>
      <div class="cd-main"><b>\${days}</b> \${days===1?'dan':(days<5?'dana':'dana')}</div>
      <div class="cd-sub">\${MATURA_LABEL} · \${urgency ? 'svaki dan bez vježbe = izgubljeni bodovi' : 'još ima vremena — pametno uči'}</div>
    </div>
  \`;
}

/* == SOCIAL PROOF ==
   Brojeve puni iz Supabase view-a u produkciji. Sad — placeholder "uskoro".
   Kad budeš imao stvarne brojeve, zamijeni _renderSocialProof.
============================================= */
var SOCIAL_PROOF = {
  active_learners: null,       // "1.247" kad bude podataka
  avg_rating: null,            // 4.8
  review_count: null,          // 312
  avg_improvement: null,       // "+23 boda"
  is_placeholder: true         // toggle na false kad stvarni brojevi stignu
};

function renderSocialProof(targetId, variant){
  var el = document.getElementById(targetId);
  if(!el) return;
  variant = variant || 'full';

  if(SOCIAL_PROOF.is_placeholder){
    // Dok nemamo stvarne korisnike — umjesto laži, prikaži mission signal
    el.innerHTML = \`
      <div class="sp-item">🆓 <b>Besplatno</b> za sve maturante</div>
      <div class="sp-divider"></div>
      <div class="sp-item">✅ Usklađeno s <b>NCVVO</b> katalogom</div>
      <div class="sp-divider"></div>
      <div class="sp-item urgency">⏰ Do mature <b>\${daysToMatura()}</b> dana</div>
    \`;
    return;
  }

  // Kad Supabase stigne — realni brojevi
  if(variant === 'compact'){
    el.innerHTML = \`
      <div class="sp-item">📌 <b>\${SOCIAL_PROOF.active_learners}</b> uči trenutno</div>
      <div class="sp-divider"></div>
      <div class="sp-item urgency">⏰ <b>\${daysToMatura()}</b> dana do mature</div>
    \`;
  } else {
    el.innerHTML = \`
      <div class="sp-item">📌 <b>\${SOCIAL_PROOF.active_learners}</b> maturanata uči</div>
      <div class="sp-divider"></div>
      <div class="sp-item">⭐ <b>\${SOCIAL_PROOF.avg_rating}/5</b> (\${SOCIAL_PROOF.review_count} recenzija)</div>
      <div class="sp-divider"></div>
      <div class="sp-item">📌 prosječno <b>\${SOCIAL_PROOF.avg_improvement}</b> nakon 2 mj</div>
      <div class="sp-divider"></div>
      <div class="sp-item urgency">⏰ <b>\${daysToMatura()}</b> dana do mature</div>
    \`;
  }
}

/* == EVENT TRACKING == */
var TRACK_SESSION_ID = null;
var TRACK_ANON_ID = null;

function _uuid(){
  // RFC4122 v4 (browser-safe, bez crypto.randomUUID za Safari < 15.4)
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
    var r = Math.random()*16|0, v = c==='x'?r:(r&0x3|0x8);
    return v.toString(16);
  });
}

function _initTracking(){
  // Session ID — jedna sesija = jedan tab
  TRACK_SESSION_ID = sessionStorage.getItem('mt.session_id');
  if(!TRACK_SESSION_ID){
    TRACK_SESSION_ID = _uuid();
    try{sessionStorage.setItem('mt.session_id', TRACK_SESSION_ID)}catch(e){}
  }
  // Anon ID — perzistentan preko sesija
  TRACK_ANON_ID = lsLoad('mt.anon_id', null);
  if(!TRACK_ANON_ID){
    TRACK_ANON_ID = _uuid();
    lsSave('mt.anon_id', TRACK_ANON_ID);
  }
}

function track(eventName, props, category){
  if(!TRACK_SESSION_ID) _initTracking();
  var payload = {
    p_session_id: TRACK_SESSION_ID,
    p_event_name: eventName,
    p_event_category: category || 'general',
    p_subject: CURRENT_CHAPTER.subject,
    p_chapter_code: CURRENT_CHAPTER.code,
    p_tab_index: (typeof props === 'object' && props && 'tab' in props) ? props.tab : null,
    p_props: props || {},
    p_anon_id: TRACK_ANON_ID,
    p_url: window.location.href,
    p_viewport_width: window.innerWidth,
    p_viewport_height: window.innerHeight
  };

  // Offline mode: samo log u console kad nije deployano
  if(SUPABASE_URL.indexOf('your-project') >= 0){
    // Tiho — previše noisy u konzoli inače
    // console.debug('[track]', eventName, props);
    return;
  }

  // Fire-and-forget — ne blokiraj UI ako network padne
  try{
    fetch(SUPABASE_URL + '/rest/v1/rpc/track_event', {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
      keepalive: true  // omogućuje slanje čak i ako user napusti stranicu
    }).catch(function(){}); // tiho propasti
  }catch(e){}
}

/* == SUPABASE SIGNUP == */


/* == MODAL == */







/* == FULL SCRIPT PRINT (preporučeno, 100% pouzdano) ==
   Koristi postojeći @media print stylesheet — sve tabove vidljive, svijetla pozadina.
   Korisnik u print dijalogu može odabrati "Save as PDF" kao printer. */


/* == CHEAT SHEET: ISOLATED PRINT ==
   Klik na "Ispiši" u cheat kartici › printa SAMO cheat sheet, ne cijelu skriptu */
// afterprint event je čišćiji način za cleanup
if(typeof window !== 'undefined'){
  window.addEventListener('afterprint', function(){
    document.body.classList.remove('print-cheat-only');
  });
}

/* == MINI-DIJAGNOSTIKA "Mogu li ovo na maturi?" ==
   5 strateški odabranih pitanja koja pokrivaju širok spektar H08 gradiva.
   Cilj: korisnik za 60s zna gdje stoji prije nego krene učiti. */
var DIAG_QUESTIONS = [
  {
    q: "Što je metafikcija?",
    opts: [
      "Proza svjesna sebe kao proze",
      "Proza bez fabule",
      "Proza o stvarnim događajima",
      "Proza pisana u 3. licu"
    ],
    correct: 0,
    topic: "Pojam — metafikcija"
  },
  {
    q: "Tko je skovao pojam intertekstualnosti 1966. godine?",
    opts: [
      "Roland Barthes",
      "Jacques Derrida",
      "Julia Kristeva",
      "Umberto Eco"
    ],
    correct: 2,
    topic: "Teoretičari"
  },
  {
    q: "Koja je razlika između pastiša i parodije?",
    opts: [
      "Nema razlike — sinonimi",
      "Pastiš je komično ismijavanje, parodija ozbiljno oponašanje",
      "Pastiš je ozbiljno oponašanje, parodija komično ismijavanje",
      "Pastiš je povijesni, parodija suvremeni pojam"
    ],
    correct: 2,
    topic: "Pojmovi — pastiš vs parodija"
  },
  {
    q: "Kada i gdje započinje hrvatska postmoderna?",
    opts: [
      "Oko 1950. — Zagreb, časopis Krugovi",
      "1979.–1981. — Pavličićev Večernji akt, Ugrešićina Štefica Cvek",
      "Nakon 1990. — ratni i postratni pisci",
      "Postmoderna ne postoji u hrvatskoj književnosti"
    ],
    correct: 1,
    topic: "Hrvatska postmoderna"
  },
  {
    q: "Što znači 'kraj velikih naracija' (Lyotard, 1979.)?",
    opts: [
      "Kraj pisanja dugih romana",
      "Nepovjerenje u jedinstvene ideološke sustave",
      "Povratak srednjovjekovnom pripovijedanju",
      "Politika je važnija od književnosti"
    ],
    correct: 1,
    topic: "Teorija — Lyotard"
  }
];

var diagState = {
  idx: 0,
  correct: 0,
  answered: [],
  started: 0
};

function diagStart(){
  diagState.idx = 0;
  diagState.correct = 0;
  diagState.answered = [];
  diagState.started = Date.now();
  var diagEl = document.getElementById('diag');
  if(diagEl) diagEl.setAttribute('data-state', 'quiz');
  var corEl = document.getElementById('diag-correct');
  if(corEl) corEl.textContent = '0';
  var barEl = document.getElementById('diag-prog-bar');
  if(barEl) barEl.style.width = '0%';
  diagRender();
  track('diag_start', {chapter: CURRENT_CHAPTER.code}, 'engagement');
}

function diagSkip(){
  document.getElementById('diag').setAttribute('data-state', 'dismissed');
  try{ sessionStorage.setItem('mt.hrv.h10.diag', 'skipped') }catch(e){}
  track('diag_skip', {chapter: CURRENT_CHAPTER.code}, 'engagement');
}

function diagRestart(){
  diagStart();
}

function diagRender(){
  var q = DIAG_QUESTIONS[diagState.idx];
  if(!q) return diagFinish();
  var qEl = document.getElementById('diag-q');
  var optsEl = document.getElementById('diag-opts');
  var idxEl = document.getElementById('diag-idx');
  var topicEl = document.getElementById('diag-topic');
  var barEl = document.getElementById('diag-prog-bar');
  if(qEl) qEl.textContent = q.q;
  if(idxEl) idxEl.textContent = (diagState.idx + 1);
  if(topicEl) topicEl.textContent = q.topic || '—';
  if(barEl) barEl.style.width = (diagState.idx / DIAG_QUESTIONS.length * 100) + '%';
  if(optsEl){
    optsEl.innerHTML = '';
    q.opts.forEach(function(opt, i){
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'diag-opt';
      btn.textContent = opt;
      btn.onclick = function(){ diagAnswer(i) };
      optsEl.appendChild(btn);
    });
  }
}

function diagAnswer(answerIdx){
  var q = DIAG_QUESTIONS[diagState.idx];
  var isCorrect = (answerIdx === q.correct);
  diagState.answered.push({
    topic: q.topic,
    correct: isCorrect,
    skipped: (answerIdx === null)
  });
  if(isCorrect) diagState.correct++;

  // Visual feedback
  var optsEl = document.getElementById('diag-opts');
  if(optsEl && answerIdx !== null){
    var buttons = optsEl.querySelectorAll('.diag-opt');
    buttons.forEach(function(b, i){
      b.disabled = true;
      if(i === q.correct) b.classList.add('diag-correct');
      else if(i === answerIdx) b.classList.add('diag-wrong');
    });
    if(isCorrect) soundOk(); else soundNg();
    // 1.2s delay pa sljedeće
    setTimeout(function(){
      diagState.idx++;
      diagRender();
      if(diagState.idx >= DIAG_QUESTIONS.length) diagFinish();
    }, 1200);
  } else {
    // Skipped — odmah sljedeće
    diagState.idx++;
    if(diagState.idx >= DIAG_QUESTIONS.length) diagFinish();
    else diagRender();
  }
}

function diagFinish(){
  var n = diagState.correct;
  var msgEl = document.getElementById('diag-res-msg');
  var recEl = document.getElementById('diag-rec');
  var corEl = document.getElementById('diag-correct');
  if(corEl) corEl.textContent = n;

  // Personalizirana poruka i preporuka
  var msg, rec;
  if(n === 5){
    msg = '🏆 Već vladaš H10 — bravo!';
    rec = 'Tvoj fokus: <b>esej alat</b> i <b>citatnik</b> — nauči paralele za obvezatna djela (Kafka, Marinković, Krleža). Pređi na simulaciju u <a href="/discere?subject=hrvatski&topic=postmoderna&ctx=h10_diag_top" onclick="track(\\'upsell_click\\',{ctx:\\'diag_top_score\\',target:\\'discere\\'},\\'conversion\\')">Discere simulatoru</a> da provjeriš pod uvjetima ispita.';
  } else if(n === 4){
    msg = '🌟 Odlično — solidne osnove.';
    rec = 'Imaš većinu pojmova, ali jedna rupica. Preporučujemo: <b>Tab 1 Djela</b> (Eco + Pavličić) + <b>Pojmovnik</b> kao revizija. Zatim idi direktno na <b>Citatnik</b> i <b>Drill</b>.';
  } else if(n === 3){
    msg = '📚 Dobre osnove — treba malo više rada.';
    rec = 'Imaš osnovni pregled, ali ti fali sigurnost u pojmovima. Plan: <b>(1)</b> proradi cijelu Teoriju (10 pojmova), <b>(2)</b> Tab 1 Djela, <b>(3)</b> Drill flashcards 2× prije Kviza.';
  } else if(n === 2){
    msg = '💪 Tu smo da ti pomognemo — krenimo od početka.';
    rec = 'Ne brini — zato si tu. Idi <b>tab po tab redom</b> (Teorija › Djela › Esej alat). Ne preskači. Završi s <b>Drillom i Kvizom</b> kao provjera.';
  } else {
    msg = '🎯 Početna točka — sve je pred tobom.';
    rec = 'Postmoderna je pojmovni pravac — nauči <b>10 ključnih pojmova</b> (metafikcija, intertekstualnost, pastiš, parodija, fragmentacija...) i sve ostalo dolazi prirodno. Prati redoslijed tabova, ne žuri. <b>Cilj #1:</b> Tab 0 Teorija — 10 pojmova s primjerima.';
  }
  if(msgEl) msgEl.textContent = msg;
  if(recEl) recEl.innerHTML = rec;

  document.getElementById('diag').setAttribute('data-state', 'result');

  var duration = Date.now() - diagState.started;
  track('diag_complete', {
    chapter: CURRENT_CHAPTER.code,
    score: n,
    total: DIAG_QUESTIONS.length,
    duration_ms: duration,
    weak_topics: diagState.answered.filter(function(a){return !a.correct}).map(function(a){return a.topic})
  }, 'engagement');
}

/* Restore dismissed state na load */
function _diagRestore(){
  try{
    var s = sessionStorage.getItem('mt.hrv.h10.diag');
    if(s){
      document.getElementById('diag').setAttribute('data-state', 'dismissed');
    }
  }catch(e){}
}

/* == PDF EXPORT (v3.6.1) ==
   Lazy-loadan html2pdf.js (CDN). Ako library load ili PDF generacija zakaže,
   fallbackamo na window.print() koji koristi naš print stylesheet. */







/* == FEEDBACK MODAL (v3.6.1) == */
function openFeedbackModal(){
  var bd = document.getElementById('fb-modal-backdrop');
  if(!bd) return;
  // Reset state
  var form = document.getElementById('fb-form');
  if(form) form.reset();
  // Default type selection — content_error
  var defaultRadio = document.querySelector('input[name="fb-type"][value="content_error"]');
  if(defaultRadio) defaultRadio.checked = true;
  var msg = document.getElementById('fb-msg');
  if(msg){msg.className='modal-msg'; msg.textContent=''}
  var counter = document.getElementById('fb-char-count');
  if(counter) counter.textContent = '0';
  var btn = document.getElementById('fb-submit');
  if(btn){btn.disabled=false; btn.textContent='Pošalji ›'}
  if(form) form.style.display = 'flex';

  bd.classList.add('show');
  setTimeout(function(){
    var ta = document.getElementById('fb-message');
    if(ta) ta.focus();
  }, 100);

  track('feedback_modal_open', {
    tab: lsLoad('mt.hrv.h10.tab', 0)
  }, 'engagement');
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

  // Validacija
  if(message.length < 3){
    if(fbMsg){fbMsg.className='modal-msg show error'; fbMsg.textContent='✗ Poruka mora imati barem 3 znaka.'}
    return false;
  }
  if(message.length > 5000){
    if(fbMsg){fbMsg.className='modal-msg show error'; fbMsg.textContent='✗ Poruka ne smije biti duža od 5000 znakova.'}
    return false;
  }
  if(email && !/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$/i.test(email)){
    if(fbMsg){fbMsg.className='modal-msg show error'; fbMsg.textContent='✗ E-mail adresa nije valjana (ostavi prazno ako ne želiš odgovor).'}
    return false;
  }

  btn.disabled = true;
  btn.textContent = 'Šaljem...';
  if(fbMsg){fbMsg.className='modal-msg'}

  var payload = {
    p_message: message,
    p_feedback_type: feedbackType,
    p_email: email || null,
    p_subject: CURRENT_CHAPTER.subject,
    p_chapter_code: CURRENT_CHAPTER.code,
    p_tab_index: lsLoad('mt.hrv.h10.tab', 0),
    p_url: window.location.href,
    p_viewport_width: window.innerWidth,
    p_viewport_height: window.innerHeight
  };

  // Offline / placeholder mode — simulate success
  if(SUPABASE_URL.indexOf('your-project') >= 0){
    setTimeout(function(){
      if(fbMsg){fbMsg.className='modal-msg show success'; fbMsg.textContent='✓ Hvala! Poruka primljena. (Offline način — nije stvarno poslano)'}
      var form = document.getElementById('fb-form');
      if(form) form.style.display = 'none';
      track('feedback_submit', {type: feedbackType, offline: true}, 'engagement');
      soundOk();
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
  }).then(function(r){return r.json()}).then(function(res){
    if(res && res.success){
      if(fbMsg){fbMsg.className='modal-msg show success'; fbMsg.textContent='✓ '+(res.message || 'Hvala! Primili smo tvoju poruku.')}
      var form = document.getElementById('fb-form');
      if(form) form.style.display = 'none';
      track('feedback_submit', {type: feedbackType, has_email: !!email}, 'engagement');
      soundOk();
      setTimeout(closeFeedbackModal, 2400);
    } else {
      if(fbMsg){fbMsg.className='modal-msg show error'; fbMsg.textContent='✗ '+((res && res.message) || 'Nešto je pošlo krivo. Pokušaj ponovo ili pošalji e-mail direktno.')}
      btn.disabled = false;
      btn.textContent = 'Pošalji ›';
      soundNg();
    }
  }).catch(function(){
    if(fbMsg){fbMsg.className='modal-msg show error'; fbMsg.textContent='✗ Greška u mreži. Pošalji e-mail na maturirajgreske@gmail.com'}
    btn.disabled = false;
    btn.textContent = 'Pošalji ›';
  });

  return false;
}

/* == LOCKED SIDEBAR LINK › OPEN MODAL == */


/* == SVG HOTSPOT TOOLTIP (v3.5) == */
var _svgTtEl = null;
var _svgTtTtl = null;
var _svgTtTxt = null;
var _svgTtHideTimer = null;
var _svgTtLastClicked = null;

function _svgTtInit(){
  _svgTtEl = document.getElementById('svg-tt');
  _svgTtTtl = document.getElementById('svg-tt-ttl');
  _svgTtTxt = document.getElementById('svg-tt-txt');
  if(!_svgTtEl) return;

  var hotspots = document.querySelectorAll('.svg-hs');
  hotspots.forEach(function(hs){
    hs.addEventListener('mouseenter', function(e){ _svgTtShow(hs, e) });
    hs.addEventListener('mouseleave', _svgTtScheduleHide);
    hs.addEventListener('focus', function(e){ _svgTtShow(hs, e) });
    hs.addEventListener('blur', _svgTtScheduleHide);
    // Click/tap toggle (mobilni)
    hs.addEventListener('click', function(e){
      e.preventDefault();
      e.stopPropagation();
      if(_svgTtLastClicked === hs && _svgTtEl.classList.contains('show')){
        _svgTtHide();
        _svgTtLastClicked = null;
      } else {
        _svgTtShow(hs, e);
        _svgTtLastClicked = hs;
      }
    });
    // Keyboard — Enter/Space
    hs.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        _svgTtShow(hs, e);
        _svgTtLastClicked = hs;
      } else if(e.key === 'Escape'){
        _svgTtHide();
        hs.blur();
      }
    });
  });

  // Close on outside click (mobile)
  document.addEventListener('click', function(e){
    if(_svgTtLastClicked && !e.target.closest('.svg-hs') && !e.target.closest('.svg-tt')){
      _svgTtHide();
      _svgTtLastClicked = null;
    }
  });

  // Close on scroll (inače tooltip visi iznad sadržaja)
  window.addEventListener('scroll', function(){
    if(_svgTtEl && _svgTtEl.classList.contains('show')){
      _svgTtHide();
      _svgTtLastClicked = null;
    }
  }, {passive: true});
}

function _svgTtShow(hs, ev){
  if(!_svgTtEl) return;
  clearTimeout(_svgTtHideTimer);

  var ttl = hs.getAttribute('data-tip-ttl') || '';
  var txt = hs.getAttribute('data-tip-txt') || '';
  _svgTtTtl.textContent = ttl;
  _svgTtTxt.innerHTML = txt; // HTML jer ima <em>
  _svgTtEl.setAttribute('aria-hidden', 'false');

  // Pozicioniranje: blizu bounding boxa hotspota
  var rect = hs.getBoundingClientRect();
  var ttRect = _svgTtEl.getBoundingClientRect();
  // Prvo placement: ispod hotspota, centrirano
  var ttW = 280; // max-width iz CSS-a
  var margin = 12;
  var vw = window.innerWidth;
  var vh = window.innerHeight;

  var anchorX = rect.left + rect.width / 2;
  var anchorY = rect.bottom + 10;

  // Ako ide izvan ekrana vodoravno — korigiraj
  var left = anchorX - ttW / 2;
  if(left + ttW + margin > vw) left = vw - ttW - margin;
  if(left < margin) left = margin;

  // Ako nema mjesta ispod — stavi iznad
  var top = anchorY;
  // Moramo znati height tooltipa — nakon što sadržaj stigne
  _svgTtEl.style.left = left + 'px';
  _svgTtEl.style.top = top + 'px';
  _svgTtEl.classList.add('show');

  // Sad kad ima sadržaj, provjeri preklapa li dno ekrana
  requestAnimationFrame(function(){
    var realRect = _svgTtEl.getBoundingClientRect();
    if(realRect.bottom + margin > vh && rect.top > realRect.height + 20){
      // Stavi iznad hotspota
      top = rect.top - realRect.height - 10;
      _svgTtEl.style.top = top + 'px';
      // Obrni strelicu
      _svgTtEl.classList.add('above');
    } else {
      _svgTtEl.classList.remove('above');
    }
  });

  track('svg_hotspot_view', {hotspot: ttl.toLowerCase().replace(/\\s+/g,'_')}, 'engagement');
}

function _svgTtScheduleHide(){
  clearTimeout(_svgTtHideTimer);
  _svgTtHideTimer = setTimeout(function(){
    if(_svgTtLastClicked) return; // pinned preko click-a, ne zatvaraj
    _svgTtHide();
  }, 180);
}

function _svgTtHide(){
  if(!_svgTtEl) return;
  _svgTtEl.classList.remove('show');
  _svgTtEl.setAttribute('aria-hidden', 'true');
}

var CIT_STATE = {
  q: '',               // search query
  src: 'all',          // active category filter
  tez: 'all',          // thesis filter (1-7 or 'all')
  diff: 'all',         // difficulty filter (basic/advanced/all)
  favOnly: false,      // show only favorites
  favs: {},            // {id: true} map
  copyCount: {}        // {id: count} map — tracks per-card copy count
};
var CIT_ITEMS_CACHE = null;

function _citItems(){
  if(!CIT_ITEMS_CACHE){
    CIT_ITEMS_CACHE = Array.prototype.slice.call(
      document.querySelectorAll('#l3 .cit-card')
    );
  }
  return CIT_ITEMS_CACHE;
}

function _citNormalize(s){
  return (s||'').toLowerCase()
    .replace(/č|ć/g,'c').replace(/š/g,'s').replace(/ž/g,'z')
    .replace(/đ/g,'d').replace(/[„”"''“”„]/g,'')
    .trim();
}

function _citLoadFavs(){
  try {
    var raw = localStorage.getItem('mt.hrv.h10.cit_favs');
    CIT_STATE.favs = raw ? JSON.parse(raw) : {};
  } catch(e){ CIT_STATE.favs = {}; }
}

function _citSaveFavs(){
  try {
    localStorage.setItem('mt.hrv.h10.cit_favs', JSON.stringify(CIT_STATE.favs));
  } catch(e){}
}

function _citLoadCopyCount(){
  try {
    var raw = localStorage.getItem('mt.hrv.h10.cit_copy');
    CIT_STATE.copyCount = raw ? JSON.parse(raw) : {};
  } catch(e){ CIT_STATE.copyCount = {}; }
}

function _citSaveCopyCount(){
  try {
    localStorage.setItem('mt.hrv.h10.cit_copy', JSON.stringify(CIT_STATE.copyCount));
  } catch(e){}
}

function _citHasActiveFilters(){
  return CIT_STATE.src !== 'all' || CIT_STATE.tez !== 'all' ||
         CIT_STATE.diff !== 'all' || CIT_STATE.favOnly || CIT_STATE.q;
}

function _citApplyFilters(){
  var items = _citItems();
  var q = _citNormalize(CIT_STATE.q);
  var src = CIT_STATE.src;
  var tez = CIT_STATE.tez;
  var diff = CIT_STATE.diff;
  var favOnly = CIT_STATE.favOnly;
  var visibleCount = 0;

  items.forEach(function(el){
    var cat = el.getAttribute('data-cat') || '';
    var id = el.getAttribute('data-cit-id') || '';
    var cardDiff = el.getAttribute('data-diff') || 'basic';
    var cardTez = (el.getAttribute('data-tez') || '').split(',').filter(Boolean);
    var textNode = el.querySelector('.cit-txt');
    var srcNode = el.querySelector('.cit-src');
    var useNode = el.querySelector('.cit-use');
    var haystack = _citNormalize(
      (srcNode ? srcNode.textContent : '') + ' ' +
      (textNode ? textNode.textContent : '') + ' ' +
      (useNode ? useNode.textContent : '')
    );

    var isMustKnow = el.classList.contains('must-know');
    var matchesCat = (src === 'all' || cat === src || (src === 'must' && isMustKnow));
    var matchesTez = (tez === 'all' || cardTez.indexOf(String(tez)) !== -1);
    var matchesDiff = (diff === 'all' || cardDiff === diff);
    var matchesQuery = (!q || haystack.indexOf(q) !== -1);
    var matchesFav = (!favOnly || CIT_STATE.favs[id]);
    var visible = matchesCat && matchesTez && matchesDiff && matchesQuery && matchesFav;

    el.classList.toggle('cit-hidden', !visible);
    if(visible) visibleCount++;
  });

  // Empty state toggle (when filter hides everything)
  var empty = document.getElementById('cit-empty');
  if(empty) empty.classList.toggle('on', visibleCount === 0);

  // Update count badge
  var vEl = document.getElementById('cit-visible');
  if(vEl) vEl.textContent = visibleCount;

  // Show/hide reset button based on whether filters are active
  var clearBtn = document.getElementById('cit-count-clear');
  if(clearBtn) clearBtn.classList.toggle('on', _citHasActiveFilters());
}

/* Public API — called from onclick handlers in HTML */
function citFilter(src, btnEl){
  CIT_STATE.src = src;
  document.querySelectorAll('#l3 .cit-fbtn').forEach(function(btn){
    var isActive = btn.getAttribute('data-filter') === src;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
  _citApplyFilters();
  if(typeof track === 'function') track('cit_filter', {src: src}, 'engagement');
}

function citToggleFav(btnEl){
  var card = btnEl.closest('.cit-card');
  if(!card) return;
  var id = card.getAttribute('data-cit-id');
  if(!id) return;
  var isFav = !!CIT_STATE.favs[id];
  if(isFav){
    delete CIT_STATE.favs[id];
    btnEl.classList.remove('on');
    btnEl.textContent = '?';
    btnEl.setAttribute('aria-label','Dodaj u favorite');
    btnEl.setAttribute('title','Dodaj u favorite');
  } else {
    CIT_STATE.favs[id] = true;
    btnEl.classList.add('on');
    btnEl.textContent = '?';
    btnEl.setAttribute('aria-label','Ukloni iz favorita');
    btnEl.setAttribute('title','Ukloni iz favorita');
  }
  _citSaveFavs();
  _citUpdateFavCount();
  // If viewing "favorites only", refresh list
  if(CIT_STATE.favOnly) _citApplyFilters();
  if(typeof track === 'function') track('cit_fav', {action: isFav?'remove':'add', id: id}, 'engagement');
}

function citCopy(btnEl){
  var card = btnEl.closest('.cit-card');
  if(!card) return;
  var txtEl = card.querySelector('.cit-txt');
  var srcEl = card.querySelector('.cit-src');
  if(!txtEl) return;
  var id = card.getAttribute('data-cit-id') || '';
  // Build copy text
  var quote = (txtEl.textContent || '').trim();
  var attribution = (srcEl ? srcEl.textContent.replace(/^[^\\w]+\\s*/,'').trim() : '');
  var fullText = attribution ? (quote + '  — ' + attribution) : quote;

  function showToast(msg){
    var toast = document.getElementById('cit-toast');
    if(!toast) return;
    if(msg) toast.textContent = msg;
    toast.classList.add('on');
    clearTimeout(toast._t);
    toast._t = setTimeout(function(){ toast.classList.remove('on'); }, 1800);
  }
  function incrementCount(){
    if(!id) return;
    CIT_STATE.copyCount[id] = (CIT_STATE.copyCount[id] || 0) + 1;
    _citSaveCopyCount();
    btnEl.setAttribute('data-count', CIT_STATE.copyCount[id]);
  }
  function mark(){
    btnEl.classList.add('copied');
    btnEl.textContent = '?';
    incrementCount();
    setTimeout(function(){
      btnEl.classList.remove('copied');
      btnEl.textContent = '✓';
    }, 1500);
    showToast('📋 Citat kopiran');
  }

  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(fullText).then(mark).catch(function(){
      _citFallbackCopy(fullText); mark();
    });
  } else {
    _citFallbackCopy(fullText); mark();
  }
  if(typeof track === 'function'){
    track('cit_copy', {id: id, count: CIT_STATE.copyCount[id] || 1}, 'engagement');
  }
}

function _citFallbackCopy(text){
  try {
    var ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly','');
    ta.style.position='absolute'; ta.style.left='-9999px';
    document.body.appendChild(ta); ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  } catch(e){}
}

/* Thesis filter */
function citFilterByTez(tez, btnEl){
  CIT_STATE.tez = tez;
  document.querySelectorAll('#l3 .cit-diffbtn[data-tez]').forEach(function(b){
    var isActive = String(b.getAttribute('data-tez')) === String(tez);
    b.classList.toggle('active', isActive);
  });
  // If triggered from a tez tag inside a card, also highlight the tez sub-filter button
  _citApplyFilters();
  if(typeof track === 'function') track('cit_filter_tez', {tez: tez}, 'engagement');
}

/* Difficulty filter */
function citFilterByDiff(diff, btnEl){
  CIT_STATE.diff = diff;
  document.querySelectorAll('#l3 .cit-diffbtn[data-diff]').forEach(function(b){
    var isActive = b.getAttribute('data-diff') === diff;
    b.classList.toggle('active', isActive);
  });
  _citApplyFilters();
  if(typeof track === 'function') track('cit_filter_diff', {diff: diff}, 'engagement');
}

/* Random citat — scroll to and highlight */
function citRandom(){
  var visible = _citItems().filter(function(el){ return !el.classList.contains('cit-hidden'); });
  if(!visible.length) return;
  var pick = visible[Math.floor(Math.random() * visible.length)];
  // Remove focus class from all
  _citItems().forEach(function(el){ el.classList.remove('cit-focus'); });
  // Add + scroll
  pick.classList.add('cit-focus');
  pick.scrollIntoView({behavior: 'smooth', block: 'center'});
  setTimeout(function(){ pick.classList.remove('cit-focus'); }, 1300);
  // Toast
  var toast = document.getElementById('cit-toast');
  if(toast){
    toast.textContent = '🎲 Slučajan citat';
    toast.classList.add('on');
    clearTimeout(toast._t);
    toast._t = setTimeout(function(){ toast.classList.remove('on'); }, 1500);
  }
  if(typeof track === 'function') track('cit_random', {id: pick.getAttribute('data-cit-id')}, 'engagement');
}

/* Toggle "only favorites" view */
function citToggleFavOnly(){
  CIT_STATE.favOnly = !CIT_STATE.favOnly;
  var btn = document.getElementById('cit-favonly-btn');
  if(btn){
    btn.classList.toggle('active', CIT_STATE.favOnly);
    // Update only the star icon (text node before the count span)
    btn.childNodes[0].nodeValue = (CIT_STATE.favOnly ? '?' : '?') + ' Favoriti (';
  }
  _citApplyFilters();
  if(typeof track === 'function') track('cit_fav_only', {on: CIT_STATE.favOnly}, 'engagement');
}

function _citUpdateFavCount(){
  var el = document.getElementById('cit-fav-count');
  if(el) el.textContent = Object.keys(CIT_STATE.favs).length;
}

/* Clear all filters */
function citClearFilters(){
  CIT_STATE.src = 'all';
  CIT_STATE.tez = 'all';
  CIT_STATE.diff = 'all';
  CIT_STATE.q = '';
  CIT_STATE.favOnly = false;

  // Reset UI
  document.querySelectorAll('#l3 .cit-fbtn').forEach(function(b){
    b.classList.toggle('active', b.getAttribute('data-filter') === 'all');
  });
  document.querySelectorAll('#l3 .cit-diffbtn').forEach(function(b){
    var isAll = b.getAttribute('data-tez') === 'all' || b.getAttribute('data-diff') === 'all';
    b.classList.toggle('active', isAll);
  });
  var favBtn = document.getElementById('cit-favonly-btn');
  if(favBtn){
    favBtn.classList.remove('active');
    favBtn.childNodes[0].nodeValue = '? Favoriti (';
  }
  _citApplyFilters();
  if(typeof track === 'function') track('cit_clear_filters', {}, 'engagement');
}

/* citScrollTo removed — was for pinned widget that no longer exists */

/* Toggle pinned top 5 visibility — removed (no HTML for it in H08) */

function _citInit(){
  _citLoadFavs();
  _citLoadCopyCount();
  // Mark existing favorites visually + restore copy count badges
  _citItems().forEach(function(card){
    var id = card.getAttribute('data-cit-id');
    if(id && CIT_STATE.favs[id]){
      var favBtn = card.querySelector('.cit-btn.fav');
      if(favBtn){
        favBtn.classList.add('on');
        favBtn.textContent = '?';
        favBtn.setAttribute('aria-label','Ukloni iz favorita');
        favBtn.setAttribute('title','Ukloni iz favorita');
      }
    }
    if(id && CIT_STATE.copyCount[id]){
      var copyBtn = card.querySelector('.cit-btn.copy');
      if(copyBtn){
        copyBtn.setAttribute('data-count', CIT_STATE.copyCount[id]);
      }
    }
  });
  // Set total count + fav count
  var totalEl = document.getElementById('cit-total');
  if(totalEl) totalEl.textContent = _citItems().length;
  _citUpdateFavCount();
  _citApplyFilters();
}

/* == TABS == */
var quizInited=false, drillInited=false;
var VISITED_TABS={};
var QUIZ_PASSED=false; // nakon kviza ?60%
var _tabStartTime = Date.now();

/* Breadcrumb tab labele (v3.6) */
var TAB_LABELS = ['Teorija','Djela','Esej alat','Citatnik','Pojmovnik','Drill','Kviz','Checkpoint'];

/* == SIDEBAR + PROGATE JS (v2) == */
/* ==============================================================
   SIDEBAR + PROGATE JS — Maturiraj Hrvatski v2
   
   Ubacuje se u glavni <script> blok poglavlja (prije sw() funkcije).
   Ovisi o CURRENT_CHAPTER.code (string, npr. 'h11' ili 'd10').
   ============================================================== */

/* == SIDEBAR ACTIVATION ==
   Označava trenutno poglavlje s active klasom i disables sve koja
   još nisu objavljena (nemaju HTML fajl).
*/
var PUBLISHED_CHAPTERS = {
  /* Lista objavljenih poglavlja. Update-a se kako izlaze nova.
     U production okolini ovo se može dohvatiti iz Supabase publish tablice. */
  h01: true, h02: true, h03: true, h04: true, h05: true,
  h06: true, h07: true, h08: true, h09: true, h10: true,
  h11: true, h12: true, h13: true, h14: true, h15: true, h16: true,
  h17: true, h18: true,
  h19: true, h20: true, h21: true, h22: true, h23: true, h24: true,
  h25: true, h26: true, h27: true, h28: true,
  /* D-poglavlja */
  d01: true,  d02: false, d03: true,  d04: true,  d05: false,
  d06: true,  d07: true,  d08: true,  d09: true,  d10: true,
  d11: false, d12: false, d13: false, d14: false, d15: false,
  d16: false, d17: false, d18: false, d19: false, d20: false,
  d21: false, d22: false
};

/* Chapter titles za sb-footer meta */
var CHAPTER_TITLES = {
  h01:'temelji i antika', h02:'srednji vijek', h03:'renesansa',
  h04:'barok i klasicizam', h05:'prosvjetiteljstvo', h06:'romantizam',
  h07:'realizam', h08:'moderna', h09:'avangarda i 20. st.', h10:'postmoderna',
  h11:'stari hrv. pisci', h12:'Marulić i hrv. rens.', h13:'hrv. barok — Gundulić',
  h14:'preporod', h15:'Šenoa i realizam', h16:'Krleža i moderna',
  h17:'stilske figure', h18:'versifikacija',
  h19:'fonetika i fonologija', h20:'morfologija', h21:'sintaksa',
  h22:'leksikologija', h23:'povijest hrv. jezika', h24:'hrv. narječja',
  h25:'pravopisna pravila', h26:'interpunkcija',
  h27:'školski esej', h28:'sažetak',
  d01:'Antigona', d02:'Petrarca · izbor', d03:'Hamlet', d04:'Život je san',
  d05:'Škrtac', d06:'Werther', d07:'Zločin i kazna', d08:'Preobražaj',
  d09:'Stranac', d10:'Cvjetovi zla', d11:'Novela od Stanca', d12:'Judita',
  d13:'Dubravka', d14:'Smail-aga', d15:'Prijan Lovro', d16:'Posljednji Stipančići',
  d17:'Kranjčević · poezija', d18:'Matoš · izbor', d19:'Nazor · poezija',
  d20:'Šimić · poezija', d21:'Glembajevi', d22:'Kiklop'
};

function initSidebar(){
  var currentCode = (CURRENT_CHAPTER && CURRENT_CHAPTER.code) || '';
  var items = document.querySelectorAll('.sb-item[data-code]');
  items.forEach(function(item){ item.classList.remove('active','completed','disabled'); });
  var currentIdx = -1;
  var totalMain = 28; /* H-poglavlja samo, za footer "N / 28" */

  items.forEach(function(item){
    var code = item.getAttribute('data-code');
    var isCurrent = code === currentCode;
    var isPublished = PUBLISHED_CHAPTERS[code] === true;

    /* Active state */
    if(isCurrent){
      item.classList.add('active');
      item.setAttribute('aria-current','page');
      if(code.indexOf('h')===0){
        currentIdx = parseInt(code.slice(1),10);
      }
    }

    /* Disabled state + modal za coming soon */
    if(!isPublished && !isCurrent){
      item.classList.add('disabled');
      item.setAttribute('aria-disabled','true');
      item.setAttribute('title','Klikni da te obavijestimo kad izađe');
      item.removeAttribute('href');
      item.addEventListener('click', function(e){
        e.preventDefault();
        var title = (item.textContent||'').replace(/^[hd]\\d\\d\\s·\\s/i,'').trim();
        /* signup uklonjen */
        return false;
      });
    } else if (isPublished) {
      /* Only mark completed if user finished all checkpoints for this chapter */
      try {
        var cpKey = 'mt.hrv.' + code + '.cp';
        var cpRaw = localStorage.getItem(cpKey);
        if (cpRaw) {
          var cpArr = JSON.parse(cpRaw);
          if (Array.isArray(cpArr) && cpArr.length > 0 && cpArr.every(function(v){ return v === true; })) {
            item.classList.add('completed');
          }
        }
      } catch(e) {}
    }
  });

  /* Footer meta */
  var footPos = document.getElementById('sb-footer-pos');
  var footTitle = document.getElementById('sb-footer-title');
  if(footPos){
    if(currentCode.indexOf('d')===0){
      footPos.textContent = currentCode.toUpperCase() + ' · dodatno';
    } else if(currentIdx > 0){
      footPos.textContent = String(currentIdx).padStart(2,'0') + ' / ' + totalMain;
    }
  }
  if(footTitle){
    footTitle.textContent = CHAPTER_TITLES[currentCode] || '';
  }

  /* Progress bar — broji completed H-poglavlja */
  var doneH = Object.keys(PUBLISHED_CHAPTERS).filter(function(k){
    return k.indexOf('h')===0 && PUBLISHED_CHAPTERS[k];
  }).length;
  var pct = Math.round((doneH / totalMain) * 100);
  var progBar = document.getElementById('prog-bar');
  var progPct = document.getElementById('prog-pct');
  if(progBar) progBar.style.width = pct + '%';
  if(progPct) progPct.textContent = pct + '%';
}

/* == TIER DETECTION + PROGATE ==
   Čita user tier iz localStorage (dev/free preview) ili Supabase session
   (production). Postavlja body[data-tier] atribut koji CSS-om kontrolira
   sve .pro-gate wrapere.
*/
function detectTier(){
  /* Production: dohvati iz Supabase sessije (async, cachea rezultat) */
  /* Development: localStorage override za testing */
  var override = null;
  try { override = localStorage.getItem('mt.user.tier'); } catch(e){}
  return override || 'free';
}

function applyTier(){
  var tier = detectTier();
  document.body.setAttribute('data-tier', tier);
  /* Progate CTA linkove obogaćujemo s kontekstom (koji feature je gated) */
  document.querySelectorAll('.pro-gate').forEach(function(gate){
    var feat = gate.getAttribute('data-feature') || 'generic';
    var btn = gate.querySelector('.pro-gate-btn');
    if(btn && !btn.href.includes('ctx=')){
      var sep = btn.href.indexOf('?') >= 0 ? '&' : '?';
      btn.href = btn.href + sep + 'ctx=' + feat + '_' +
                 ((typeof CURRENT_CHAPTER !== 'undefined' && CURRENT_CHAPTER.code) || 'unknown');
    }
    /* Track impression — koji gate je viđen */
    if(tier === 'free'){
      track('paywall_impression', {
        feature: feat,
        chapter: (typeof CURRENT_CHAPTER !== 'undefined' && CURRENT_CHAPTER.code) || ''
      }, 'conversion');
    }
  });
}

/* Pomoćno za testing iz konzole: setTier('standard') */
function setTierLegacy(t){
  try { localStorage.setItem('mt.user.tier', t); } catch(e){}
  applyTier();
}

/* Init kaskada */
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', function(){
    initSidebar();
    applyTier();
  });
} else {
  initSidebar();
  applyTier();
}



/* == MUST-KNOW BOX — expand/collapse == */
function mkToggle(el){
  if(!el) return;
  var isOpen = el.classList.toggle('mk-open');
  el.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  var lbl = (el.querySelector('.mk-lbl')||{}).textContent || '';
  if(typeof track === 'function'){
    track('must_know_expand', {
      chapter: (typeof CURRENT_CHAPTER !== 'undefined' && CURRENT_CHAPTER.code) || '',
      row: lbl.trim(), opened: isOpen
    }, 'engagement');
  }
}
document.addEventListener('keydown', function(e){
  if(e.key !== 'Enter' && e.key !== ' ') return;
  var el = document.activeElement;
  if(el && el.classList && el.classList.contains('mk-row')){
    e.preventDefault();
    mkToggle(el);
  }
});

/* == FC (Flashcards) paywall — free tier limit == */
var FC_FREE_LIMIT = 5;
function fcIsPaid(){
  var t = (document.body.getAttribute('data-tier')||'free');
  return t === 'standard' || t === 'pro';
}
function fcShowPaywall(){
  var wrap = document.querySelector('.fc-wrap');
  if(!wrap) return;
  var existing = document.getElementById('fc-paywall');
  if(existing){existing.scrollIntoView({behavior:'smooth',block:'center'});return;}
  var chapter = (typeof CURRENT_CHAPTER !== 'undefined' && CURRENT_CHAPTER.code) || 'unknown';
  var html = '<div id="fc-paywall" class="drill-paywall" data-feature="drill-flashcards">' +
             '<div class="drill-paywall-ico">🔒</div>' +
             '<div class="drill-paywall-title">15 više kartica + Matching + Spaced repetition</div>' +
             '<div class="drill-paywall-sub">Drill je aktivno učenje — 4× efikasnije od pasivnog čitanja. Svih 20 kartica + 9 pair matchingov.</div>' +
             '<a class="pro-gate-btn" href="/pricing?ctx=drill_flashcards_' + chapter + '">Otključaj — 9,99€/mj</a>' +
             '<div class="pro-gate-meta">Otkaži bilo kad · Free trial 7 dana</div>' +
             '</div>';
  wrap.insertAdjacentHTML('afterend', html);
  if(typeof track === 'function'){
    track('paywall_impression', {feature:'drill-flashcards', chapter:chapter, at_card:fcIdx}, 'conversion');
  }
}

/* == Quiz paywall — free tier limit == */
var QZ_FREE_LIMIT = 5;
function qzIsPaid(){
  var t = (document.body.getAttribute('data-tier')||'free');
  return t === 'standard' || t === 'pro';
}
function qzShowPaywall(){
  var app = document.getElementById('qz-app');
  if(!app) return;
  var chapter = (typeof CURRENT_CHAPTER !== 'undefined' && CURRENT_CHAPTER.code) || 'unknown';
  app.innerHTML = '<div class="qz-paywall"><div class="qz-paywall-ico">🔒</div>' +
    '<div class="qz-paywall-label">Odgovorio si ' + qzState.score + ' / ' + QZ_FREE_LIMIT + ' pitanja u free verziji</div>' +
    '<div class="qz-paywall-sub">Standard tier otključava svih <b>20 pitanja</b> + <b>score tracking</b> + <b>wrong answers review</b>.</div>' +
    '<a class="pro-gate-btn" href="/pricing?ctx=quiz_full_' + chapter + '">Otključaj kviz — 9,99€/mj</a>' +
    '<div class="pro-gate-meta">Otkaži bilo kad · Free trial 7 dana</div></div>';
  if(typeof track === 'function'){
    track('paywall_impression', {feature:'quiz-full', chapter:chapter, at_q:qzState.idx}, 'conversion');
  }
}



/* Override applyTier — direktan atribut-toggle umjesto CSS cascade ovisnosti */
var _origApplyTier = typeof applyTier === 'function' ? applyTier : null;
function applyGateState(){
  var tier = (document.body.getAttribute('data-tier')||'free');
  var hidden = tier === 'standard' || tier === 'pro';
  document.querySelectorAll('.pro-gate-overlay').forEach(function(ov){
    ov.setAttribute('data-gate-state', hidden ? 'hidden' : 'visible');
  });
}
applyTier = function(){
  if(_origApplyTier) _origApplyTier.apply(this, arguments);
  applyGateState();
};
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', applyGateState);
} else {
  applyGateState();
}

function sw(i){
  // Track prethodni tab duration
  var prevTab = lsLoad('mt.hrv.h10.tab', null);
  if(prevTab !== null && prevTab !== i){
    var dur = Date.now() - _tabStartTime;
    if(dur > 300) track('tab_leave', {tab: prevTab, duration_ms: dur}, 'navigation');
  }
  _tabStartTime = Date.now();

  var allTabs=document.querySelectorAll('[onclick^="sw("]');
  allTabs.forEach(function(t,idx){
    var active=idx===i;
    t.classList.toggle('on',active);
    if(t.hasAttribute('role')&&t.getAttribute('role')==='tab'){
      t.setAttribute('aria-selected',active?'true':'false');
    }
  });
  document.querySelectorAll('.layer').forEach(function(l,idx){l.classList.toggle('on',idx===i)});
  if(i===5&&!drillInited){initDrill();initMatch();drillInited=true;}
  if(i===6&&!quizInited){renderQuizIntro();quizInited=true;}
  lsSave('mt.hrv.h10.tab',i);

  VISITED_TABS[i]=true;
  lsSave('mt.hrv.h10.visited',VISITED_TABS);
  recomputeProgress();
  updateTabBadges();

  // Breadcrumb update (v3.6)
  var bcTab = document.getElementById('bc-tab');
  if(bcTab && TAB_LABELS[i]) bcTab.textContent = TAB_LABELS[i];

  track('tab_view', {tab: i, first_visit: Object.keys(VISITED_TABS).length===1}, 'navigation');

  window.scrollTo({top:0,behavior:'smooth'});
}

// FIX v3: jedinstveni izvor istine za progress
// Tab posjete (0-40%) + Kviz polazak (0-20%) + Checkpoint stavke (0-40%) = 100%
function recomputeProgress(){
  var visitedCount=Object.keys(VISITED_TABS).length;
  var tabPct=Math.round((visitedCount/8)*40);
  var quizPct=QUIZ_PASSED?20:0;
  var cpItems=document.querySelectorAll('.cp-item');
  var cpDone=document.querySelectorAll('.cp-item.done').length;
  var cpPct=cpItems.length>0?Math.round((cpDone/cpItems.length)*40):0;
  var total=Math.max(5,Math.min(100,tabPct+quizPct+cpPct));
  updateProgress(total);
}

function updateTabBadges(){
  var allTabs=document.querySelectorAll('[onclick^="sw("]');
  allTabs.forEach(function(t,idx){
    var existing=t.querySelector('.tab-badge');
    if(VISITED_TABS[idx]){
      if(!existing){
        var b=document.createElement('span');
        b.className='tab-badge';
        b.style.display='none';
        b.textContent='?';
        t.appendChild(b);
      }
    } else {
      if(existing) existing.remove();
    }
  });
}

/* == SIDEBAR == */
function toggleSidebar(){var s=document.getElementById('sidebar'),o=document.getElementById('overlay');s.classList.toggle('mobile-open');o.classList.toggle('show')}
function closeSidebar(){document.getElementById('sidebar').classList.remove('mobile-open');document.getElementById('overlay').classList.remove('show')}

/* == LOCALSTORAGE == */
function lsSave(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
function lsLoad(k,def){try{var v=localStorage.getItem(k);return v!==null?JSON.parse(v):def}catch(e){return def}}

/* == SOUND == */
function beep(f,d,v,t){try{var c=new(window.AudioContext||window.webkitAudioContext)(),o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);o.frequency.value=f;o.type=t||'sine';g.gain.setValueAtTime(v||0.08,c.currentTime);g.gain.exponentialRampToValueAtTime(0.001,c.currentTime+d);o.start(c.currentTime);o.stop(c.currentTime+d)}catch(e){}}
function soundOk(){beep(660,.1,.08,'sine');setTimeout(function(){beep(880,.14,.07,'sine')},110)}
function soundNg(){beep(200,.18,.08,'sawtooth')}
function soundDone(){[440,550,660,880].forEach(function(f,i){setTimeout(function(){beep(f,.18,.07,'sine')},i*90)})}

/* == PROGRESS == */
function updateProgress(pct){
  var p=Math.max(5,pct);
  var pb=document.getElementById('prog-bar'); if(pb) pb.style.width=p+'%';
  var pct2=document.getElementById('prog-pct'); if(pct2) pct2.textContent=p+'%';
  var hp=document.getElementById('hero-pb'); if(hp) hp.style.width=p+'%';
  var hl=document.getElementById('hero-prog-lbl'); if(hl) hl.textContent=p+'% završeno';
  lsSave('mt.hrv.h10.prog',p);
}

/* == RESTORE BANNER == */
function checkRestore(){
  var prog=lsLoad('mt.hrv.h10.prog',null);
  var tab=lsLoad('mt.hrv.h10.tab',null);
  var cp=lsLoad('mt.hrv.h10.cp',null);
  var visited=lsLoad('mt.hrv.h10.visited',null);
  if(!prog&&tab===null&&!cp&&!visited)return;
  var banner=document.getElementById('restore-banner');
  var txt=document.getElementById('rb-progress-txt');
  var cpDone=cp?cp.filter(Boolean).length:0;
  var tabCount=visited?Object.keys(visited).length:0;
  if(prog>5||cpDone>0||tabCount>1){
    var bits=[];
    if(prog) bits.push(prog+'% napretka');
    if(tabCount>1) bits.push(tabCount+'/8 tabova');
    if(cpDone>0) bits.push(cpDone+'/10 checkpoint');
    txt.textContent=bits.join(' · ');
    banner.classList.add('show');
  }
}
function restoreProgress(){
  document.getElementById('restore-banner').classList.remove('show');
  var tab=lsLoad('mt.hrv.h10.tab',0);
  var prog=lsLoad('mt.hrv.h10.prog',5);
  var visited=lsLoad('mt.hrv.h10.visited',{});
  VISITED_TABS=visited;
  if(prog) updateProgress(prog);
  updateTabBadges();
  cpLoad();
  if(tab!==null) sw(parseInt(tab));
}
function dismissRestore(){
  document.getElementById('restore-banner').classList.remove('show');
  ['mt.hrv.h10.prog','mt.hrv.h10.tab','mt.hrv.h10.cp','mt.hrv.h10.visited','mt.hrv.h10.quiz_passed'].forEach(function(k){try{localStorage.removeItem(k)}catch(e){}});
  VISITED_TABS={0:true};
  QUIZ_PASSED=false;
  document.querySelectorAll('.cp-item.done').forEach(function(el){el.classList.remove('done')});
  updateTabBadges();
  recomputeProgress();
  cpUpdate();
}

/* ===========================================
   POJMOVNIK — replaced by Tab 4 IIFE (initPojmovnikH09)
   =========================================== */
/* Old live-search logic removed — H08 uses new initPojmovnikH10 in Tab 4 */



/* ===========================================
   FLASHCARDS
   =========================================== */
var FC_CARDS=[
  {cat:'POJAM',term:'Postmoderna',def:'Književno-kulturni stav nakon velikih ideologija 20. st. Svjetska: oko 1960. Hrvatska: 1979.–1981. Ključna teza: svaka „Velika Priča" (napredak, marksizam, vjera u razum) je sumnjiva. Svaki tekst je napravljen od drugih tekstova — nema originalne „čiste" poruke.'},
  {cat:'POJAM',term:'Metafikcija',def:'Proza svjesna sebe kao proze. Roman govori o pisanju romana; lik zna da je u tekstu; autor komentira konstrukciju. Pojam: William Gass, 1970. Primjer: Eco Ime ruže — izmišljeni „pronađeni rukopis" kao uvod. Štefica Cvek — poglavlja su „uzorci".'},
  {cat:'POJAM',term:'Intertekstualnost',def:'Odnos teksta prema drugim tekstovima — citati, aluzije, parodiranje, transformacija tuđih tekstova. Pojam skovala Julia Kristeva 1966. (oslonila se na Bahtina). Nijedan tekst nije „čist" — svaki tekst je mreža referenci na prethodeće tekstove.'},
  {cat:'POJAM',term:'Pastiš',def:'Ozbiljno oponašanje tuđeg stila bez namjere ismijavanja. Autor radi u stilu drugog pisca ili epohe iz poštovanja ili igre. Primjer: Eco oponaša gotički roman 14. st. u Imenu ruže — ali to nije kritika, nego ljubavna rekonstrukcija.'},
  {cat:'POJAM',term:'Parodija',def:'Komična imitacija tuđeg teksta ili stila s namjerom kritike ili humora. Postmodernizam rado rabi parodiju — ali za razliku od modernizma, bez gnjeva. Pavličić parodira krimić, ali voli ga. Razlika od pastiša: parodija ima kritičku ili humornu distancu.'},
  {cat:'POJAM',term:'Fragmentarnost',def:'Postmoderni tekstovi namjerno razbijaju narativnu cjelovitost: izmjenjuju žanrove, perspektive, stilove, kronologiju. Nema jednog glasa koji vlada svime. Svaki fragment govori iz svog kuta — čitatelj sam mora složiti cjelinu (ili prihvatiti da je nema).'},
  {cat:'POJAM',term:'Ironija (postmoderna)',def:'Postmodernistički pisac govori ozbiljno o ozbiljnim stvarima — ali s ironijskim odmakom. Ne ismijava, ali ne vjeruje naivno. Eco: „Voli me, to je Stendhal." Direktno ti ne mogu reći „volim te" bez da zvuči banalno — ali u navodnicima, svjesno, to vrijedi.'},
  {cat:'POJAM',term:'Autoreferencijalnost',def:'Tekst koji govori o sebi samom — o svom nastanku, svom statusu teksta, svom autoru. Ugrešić u Štefici Cvek komentira kako piše dok piše. Pavličić u Večernjem aktu komentira žanr krimića koji upravo piše.'},
  {cat:'POJAM',term:'Kraj Velikih Naracija',def:'Jean-François Lyotard (1979.): postmoderna = nevjerica prema Velikim Pričama koje tvrde da posjeduju sveobuhvatnu Istinu (napredak, marksizam, kršćanstvo, liberalizam). Nije nihilizam — to je skromnost: male priče, lokalna znanja, pluralizam.'},
  {cat:'POJAM',term:'Simulakrum',def:'Jean Baudrillard: slika/kopija koja je izgubila vezu s originalom. Disneyland, reality TV, reklame — ne prikazuju stvarnost, one JESU nova stvarnost. Postmoderni mediji grade svijet slika koje se odnose samo na druge slike, ne na „stvarnost".'},
  {cat:'AUTOR',term:'Umberto Eco (1932.–2016.)',def:'Talijanski semiotičar i pisac. Ime ruže (1980.) — gotički krimić u 14-st. samostanu, s detektivom koji podsjeća na Sherlocka Holmesa. Postmoderno: izmišljeni pronađeni rukopis, intertekstualne igre, otvoreno djelo. Foucaultovo klatno (1988.), Baudolino (2000.).'},
  {cat:'AUTOR',term:'Pavao Pavličić (1946.)',def:'Ključni pisac hrvatske postmoderne. Večernji akt (1981.) — roman koji se zna romanom, misterij koji se poigrava s konvencijama krimića. Kratkopričaški opusi. Postmoderno: intertekstualnost, autoreferencijalnost, ironija prema žanru.'},
  {cat:'AUTOR',term:'Dubravka Ugrešić (1949.–2023.)',def:'Štefica Cvek u raljama života (1981.) — roman kao šivaći uzorak. Poglavlja su „Uzorci", pisac daje upute kao u modni časopisu. Postmoderno: fragmentarnost, metafikcija, citati iz popularne kulture, ironizacija ljubavnog romana kao žanra.'},
  {cat:'AUTOR',term:'Julia Kristeva (1941.)',def:'Bugarskofrancuska filozofkinja i psihoanalitičarka. Skovila pojam intertekstualnosti 1966., oslonila se na Bahtinov pojam dijaloškosti. Semiotika, feministička teorija, psihoanalitička teorija književnosti. Ključna figura poststrukturalizma.'},
  {cat:'DJELO',term:'Ime ruže (1980.) — Umberto Eco',def:'Gotički krimić u 14. st. benediktinskom samostanu. Detektiv William od Baskervillea (aluzija na Sherlocka Holmesa) istražuje ubojstva. Postmoderno: izmišljeni Mabillonov rukopis, intertekstualne igre, otvoreni kraj, labirint kao metafora. Ključno djelo za H10.'},
  {cat:'DJELO',term:'Večernji akt (1981.) — Pavičić',def:'Roman koji se zna romanom: detektivska priča koja komentira vlastite konvencije. Postmoderno: intertekstualnost, ironija prema krimić-žanru, autoreferencijalnost (pisac se pita može li napisati klasičan krimić u postmodernoj Jugoslaviji).'},
  {cat:'DJELO',term:'Štefica Cvek (1981.) — Ugrešić',def:'Roman kao šivaći uzorak. Poglavlja su Uzorci 1–7. Ironizacija ljubavnog romana, popularne kulture, ženskih časopisa. Postmoderno: metafikcija, fragmentarnost, citati, upute kao žanrovski element. Feminist postmodernizam.'},
  {cat:'KONTEKST',term:'Lyotard — Postmoderno stanje (1979.)',def:'Ključni filozofski tekst za razumijevanje postmoderne. Teza: kraj Velikih Naracija. Znanje u postmodernom društvu ne traži Istinu s velikim I — traži performativnost (što funkcionira). Pluralizam malih naracija umjesto jedne Istine.'},
  {cat:'KONTEKST',term:'Baudrillard — Simulakra i simulacija (1981.)',def:'Slike/znakovi koji su izgubili vezu s originalom i postali vlastita stvarnost. 4 faze slike: odražava › maskira › maskira odsutnost › nema veze s realnošću (čisti simulakrum). Reklame, mediji, Disneyland. Matrix film eksplicitno citira Baudrillarda.'},
  {cat:'KONTEKST',term:'Hrvatska postmoderna 1979.–1981.',def:'Prolog: Quorum generacija (1984.). Ključna godišta: Pavličić Večernji akt (1981.), Ugrešić Štefica Cvek (1981.), Slamnig. Kontekst: jugoslavenska kultura relativne slobode + pristup zapadnoj teoriji + tradicija avangarde. Postmoderna se javlja gotovo istovremeno sa svjetskom.'}
];
var fcIdx=0, fcKnown=0, fcUnknown=0, fcOrder=[];

/* == DRILL STATE PERSISTENCE (v3.5) ==
   Pamti kartice i progress dok se korisnik mota kroz tabove.
   sessionStorage — resetira se na novi tab/window (svjesno, da ne
   blokira "novi krug" između dana). Za cross-session, switch na lsSave.
============================================= */
var DRILL_SS_KEY = 'mt.hrv.h10.drill';

function _drillSave(){
  try{
    sessionStorage.setItem(DRILL_SS_KEY, JSON.stringify({
      idx: fcIdx,
      known: fcKnown,
      unknown: fcUnknown,
      order: fcOrder,
      ts: Date.now()
    }));
  }catch(e){}
}

function _drillRestore(){
  try{
    var raw = sessionStorage.getItem(DRILL_SS_KEY);
    if(!raw) return false;
    var s = JSON.parse(raw);
    // Valjanost: order mora odgovarati trenutnom FC_CARDS setu
    if(!s || !Array.isArray(s.order) || s.order.length !== FC_CARDS.length) return false;
    fcIdx = s.idx || 0;
    fcKnown = s.known || 0;
    fcUnknown = s.unknown || 0;
    fcOrder = s.order;
    // Sync counter UI
    var r = document.getElementById('fc-right'); if(r) r.textContent = fcKnown;
    var w = document.getElementById('fc-wrong'); if(w) w.textContent = fcUnknown;
    return true;
  }catch(e){ return false }
}

function fcShuffle(){
  fcOrder=FC_CARDS.map(function(_,i){return i});
  for(var i=fcOrder.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=fcOrder[i];fcOrder[i]=fcOrder[j];fcOrder[j]=t}
}
function fcRender(){
  if(fcOrder.length===0) fcShuffle();
  if(!fcIsPaid() && fcIdx >= FC_FREE_LIMIT){
    var term=document.getElementById('fc-term'),cf=document.getElementById('fc-cat-f'),def=document.getElementById('fc-def'),cb=document.getElementById('fc-cat-b'),num=document.getElementById('fc-num');
    if(term) term.textContent='Otključaj svih 20 kartica';
    if(cf) cf.textContent='FREE TIER — 5 / 20';
    if(def) def.textContent='Pridruži se Standard planu za svih 20 flashcards + Matching igru + Spaced Repetition. Učenje je 4× brže s aktivnim drillom.';
    if(cb) cb.textContent='UPGRADE';
    if(num) num.innerHTML='<b>'+FC_FREE_LIMIT+'</b> / 20 · <span style="color:var(--gold)">Free limit</span>';
    fcShowPaywall();
    return;
  }
  if(fcIdx>=fcOrder.length){
    document.getElementById('fc-term').textContent='Gotovo! ✅';
    document.getElementById('fc-cat-f').textContent='RESULT';
    document.getElementById('fc-def').textContent='Točno: '+fcKnown+' / Krivo: '+fcUnknown+'. Klikni Reset za novi krug.';
    document.getElementById('fc-cat-b').textContent='REZULTAT';
    return;
  }
  var c=FC_CARDS[fcOrder[fcIdx]];
  var card=document.getElementById('fc-card');
  card.classList.remove('flipped');
  document.getElementById('fc-cat-f').textContent=c.cat;
  document.getElementById('fc-cat-b').textContent='DEFINICIJA';
  document.getElementById('fc-term').textContent=c.term;
  document.getElementById('fc-def').textContent=c.def;
  document.getElementById('fc-num').innerHTML='<b>'+(fcIdx+1)+'</b> / '+fcOrder.length;
}
function fcFlip(){document.getElementById('fc-card').classList.toggle('flipped')}
function fcMark(known){
  if(known){fcKnown++;soundOk()}
  else{fcUnknown++;soundNg()}
  document.getElementById('fc-right').textContent=fcKnown;
  document.getElementById('fc-wrong').textContent=fcUnknown;
  fcIdx++;
  _drillSave();
  setTimeout(fcRender,180);
}
function fcSkip(){fcIdx++;_drillSave();fcRender()}
function fcReset(){
  fcIdx=0;fcKnown=0;fcUnknown=0;
  fcShuffle();
  try{sessionStorage.removeItem(DRILL_SS_KEY)}catch(e){}
  document.getElementById('fc-right').textContent=0;
  document.getElementById('fc-wrong').textContent=0;
  fcRender();
  track('drill_reset', {}, 'engagement');
}
function initDrill(){
  // Pokušaj restore iz sessionStorage prije nego shuffle novog seta
  if(!_drillRestore()){
    fcShuffle();
  }
  fcRender();
}

/* ===========================================
   MATCHING GAME — djelo › autor
   =========================================== */
var MG_PAIRS=[
  {l:'Metafikcija',r:'proza svjesna sebe kao proze'},
  {l:'Intertekstualnost',r:'pojam koji je skovala Julia Kristeva 1966.'},
  {l:'Pastiš',r:'ozbiljno oponašanje tuđeg stila bez ismijavanja'},
  {l:'Parodija',r:'komična imitacija s namjerom kritike'},
  {l:'Umberto Eco',r:'autor romana Ime ruže (1980.)'},
  {l:'Pavao Pavličić',r:'autor romana Večernji akt (1981.)'},
  {l:'Dubravka Ugrešić',r:'autorica Štefice Cvek u raljama života'},
  {l:'Quorum',r:'hrvatski književni časopis pokrenut 1984.'},
  {l:'Lyotard',r:'filozof koji je objavio Postmoderno stanje 1979.'},
];
var mgSelected=null, mgDone=0;

function initMatch(){
  var board=document.getElementById('mg-board');
  if(!board)return;
  mgDone=0;mgSelected=null;
  document.getElementById('mg-score').textContent=0;
  document.getElementById('mg-total').textContent=MG_PAIRS.length;

  var left=MG_PAIRS.map(function(p,i){return {text:p.l,key:i,side:'l'}});
  var right=MG_PAIRS.map(function(p,i){return {text:p.r,key:i,side:'r'}});
  // shuffle right
  for(var i=right.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=right[i];right[i]=right[j];right[j]=t}

  var html='<div class="mg-col"><div class="mg-col-label">Djelo</div>';
  left.forEach(function(it){html+='<button class="mg-item" data-key="'+it.key+'" data-side="l">'+it.text+'</button>'});
  html+='</div><div class="mg-col"><div class="mg-col-label">Autor</div>';
  right.forEach(function(it){html+='<button class="mg-item" data-key="'+it.key+'" data-side="r">'+it.text+'</button>'});
  html+='</div>';
  board.innerHTML=html;

  board.querySelectorAll('.mg-item').forEach(function(el){
    el.addEventListener('click',function(){mgClick(el)});
  });
}

function mgClick(el){
  if(el.classList.contains('ok'))return;
  if(!mgSelected){
    mgSelected=el;
    el.classList.add('sel');
    return;
  }
  if(mgSelected===el){el.classList.remove('sel');mgSelected=null;return}
  if(mgSelected.dataset.side===el.dataset.side){
    mgSelected.classList.remove('sel');
    mgSelected=el;
    el.classList.add('sel');
    return;
  }
  // compare
  if(mgSelected.dataset.key===el.dataset.key){
    mgSelected.classList.remove('sel');
    mgSelected.classList.add('ok');
    el.classList.add('ok');
    mgDone++;
    soundOk();
    document.getElementById('mg-score').textContent=mgDone;
    mgSelected=null;
    if(mgDone===MG_PAIRS.length){
      soundDone();
      setTimeout(function(){
        var board=document.getElementById('mg-board');
        board.insertAdjacentHTML('afterend','<div class="mg-done" id="mg-done">✅ SVI PAROVI SPARENI!</div>');
        setTimeout(function(){var d=document.getElementById('mg-done');if(d)d.remove()},3500);
      },400);
    }
  } else {
    el.classList.add('err');
    mgSelected.classList.add('err');
    soundNg();
    var s=mgSelected;
    setTimeout(function(){s.classList.remove('err','sel');el.classList.remove('err')},450);
    mgSelected=null;
  }
}

/* ===========================================
   KVIZ
   =========================================== */
var QUIZ=[
  {q:'Što je metafikcija?',a:[
    'Proza o povijesnim događajima',
    'Proza svjesna sebe kao proze',
    'Proza bez fabule',
    'Proza pisana u stihu'
  ],c:1,e:'<b>Metafikcija</b> = proza <em>svjesna sebe kao proze</em>. Roman govori o pisanju romana; lik zna da je u tekstu; autor komentira konstrukciju. Pojam: William Gass, 1970.'},

  {q:'Tko je skovao pojam intertekstualnost 1966. godine?',a:[
    'Roland Barthes',
    'Jacques Derrida',
    'Julia Kristeva',
    'Umberto Eco'
  ],c:2,e:'<b>Julia Kristeva</b>, bugarsko-francuska teoretičarka, skovala je pojam u eseju o Bahtinu 1966. <em>Intertekstualnost</em> = svojstvo teksta da se odnosi prema drugim tekstovima.'},

  {q:'Koja je razlika između pastiša i parodije?',a:[
    'Nema razlike — sinonimi',
    'Pastiš = komično ismijavanje; parodija = ozbiljno oponašanje',
    'Pastiš = ozbiljno oponašanje; parodija = komično ismijavanje',
    'Pastiš je povijesni, parodija suvremeni pojam'
  ],c:2,e:'<b>Pastiš</b> = ozbiljno oponašanje (hommage). <b>Parodija</b> = komična imitacija s kritikom. Eco piše pastiš srednjovjekovnih kronika; Brešan piše parodiju Shakespearea.'},

  {q:'Kada započinje hrvatska postmoderna?',a:[
    'Nakon 1945.',
    'Oko 1965. — krugovaši',
    '1979.–1981. — Pavličić i Ugrešić',
    'Nakon 1991. — ratna generacija'
  ],c:2,e:'<b>1979.–1981.</b> je ključno razdoblje: Šoljan <em>Drugi ljudi na Mjesecu</em> (1979.), Pavličić <em>Večernji akt</em> (1981.), Ugrešić <em>Štefica Cvek</em> (1981.). Časopis <em>Quorum</em> pokrenut 1984.'},

  {q:'Što je „kraj velikih naracija"?',a:[
    'Kraj pisanja dugih romana',
    'Nepovjerenje u jedinstvene ideološke sustave',
    'Povratak srednjovjekovnom pripovijedanju',
    'Pad modernističkih pisaca'
  ],c:1,e:'Pojam <b>Jean-Françoisa Lyotarda</b> iz <em>Postmodernog stanja</em> (1979.). Teza: 20. st. više ne vjeruje u Velike Priče (marksizam, progres, religija kao Jedna Istina).'},

  {q:'Tko je napisao esej „Smrt autora" 1967.?',a:[
    'Jean-Paul Sartre',
    'Michel Foucault',
    'Roland Barthes',
    'Jacques Derrida'
  ],c:2,e:'<b>Roland Barthes</b>, francuski teoretičar. Teza: autor nije vrhovni autoritet značenja. „<em>Rođenje čitatelja mora biti plaćeno smrću autora.</em>" Temeljna teza postmoderne teorije.'},

  {q:'Tko je autor romana Ime ruže (1980.)?',a:[
    'Italo Calvino',
    'Umberto Eco',
    'Milan Kundera',
    'Jorge Luis Borges'
  ],c:1,e:'<b>Umberto Eco</b> (1932.–2016.), talijanski semiotičar i profesor u Bologni. <em>Ime ruže</em> objavljeno 1980., prodano 50+ milijuna primjeraka. Film 1986. (Sean Connery kao Vilim).'},

  {q:'Čije ime u Imenu ruže je hommage Jorgeu Luisu Borgesu?',a:[
    'Vilim od Baskervillea',
    'Adso iz Melka',
    'Jorge od Burgosa',
    'Ubertino'
  ],c:2,e:'<b>Jorge od Burgosa</b> — slijepi bibliotekar, antagonist Vilimov. Direktna aluzija na Borgesa, koji je bio slijep i pisao o beskonačnim bibliotekama. Hommage majstoru.'},

  {q:'Kako završava roman Ime ruže?',a:[
    'Vilim otkriva ubojicu i spašava biblioteku',
    'Požarom biblioteke; tajna knjiga izgori',
    'Adso postaje opat',
    'Papa dolazi u samostan'
  ],c:1,e:'<b>Požarom biblioteke</b> — tajna Aristotelova <em>Poetika II</em> o komediji izgori. Istina zauvijek izgubljena. Vilim: „<em>Nema reda. Ja sam vidio lažni red i trčao za njim.</em>" Postmoderni otvoreni kraj.'},

  {q:'Tko je autor romana Večernji akt (1981.)?',a:[
    'Antun Šoljan',
    'Pavao Pavličić',
    'Goran Tribuson',
    'Slobodan Novak'
  ],c:1,e:'<b>Pavao Pavličić</b> (rođ. 1946.), profesor komparativne književnosti u Zagrebu. Središnja figura hrvatske postmoderne, borgesovska linija.'},

  {q:'O čemu je roman Večernji akt?',a:[
    'Povijest hrvatskog slikarstva',
    'Slikar Krsto otkriva sliku akta čiji lik stari iz godine u godinu',
    'Zagrebački bogataš kupuje ukradene slike',
    'Ratni dnevnik o 1991.'
  ],c:1,e:'<b>Slikar Krsto Brodnjak</b> kupi sliku akta koja se ponaša kao živo biće. Žanrovski hibrid: krimić + fantastika + psihološki roman. Otvoreni kraj — <em>tko je žena ostaje nepoznato</em>.'},

  {q:'Tko je autorica romana Štefica Cvek u raljama života (1981.)?',a:[
    'Irena Vrkljan',
    'Slavenka Drakulić',
    'Dubravka Ugrešić',
    'Vesna Parun'
  ],c:2,e:'<b>Dubravka Ugrešić</b> (1949.–2023.). Roman strukturiran kao <em>šivaći uzorak</em> — poglavlja su „uzorci". Feministička postmoderna + pop-kulturni kolaž. Film 1984. (Rajko Grlić).'},

  {q:'Koje godine je pokrenut časopis Quorum?',a:[
    '1971.',
    '1979.',
    '1984.',
    '1990.'
  ],c:2,e:'<b>1984.</b> u Zagrebu. Urednici: <em>Branko Čegec, Zvonko Maković</em>. Središnja platforma hrvatske postmoderne generacije („kvorumaši"). Prekidao monopol <em>Foruma</em> i <em>Republike</em>.'},

  {q:'Tko je skovao pojam simulakrum u filozofskom smislu?',a:[
    'Michel Foucault',
    'Jean Baudrillard',
    'Gilles Deleuze',
    'Roland Barthes'
  ],c:1,e:'<b>Jean Baudrillard</b> u knjizi <em>Simulakrum i simulacija</em> (1981.). Pojam označava <em>kopiju koja više ne predstavlja original</em>. Utjecaj na <em>Matrix</em> (Wachowski) i postmodernu književnost.'},

  {q:'Tko je osnivač dekonstrukcije kao filozofske metode?',a:[
    'Jean-François Lyotard',
    'Gilles Deleuze',
    'Jacques Derrida',
    'Paul de Man'
  ],c:2,e:'<b>Jacques Derrida</b> (1930.–2004.), francusko-alžirski filozof. Glavna djela: <em>O gramatologiji</em> (1967.), <em>Pismo i razlika</em> (1967.). Slavna teza: „Nema ničega izvan teksta."'},

  {q:'Što je borgesovska fantastika?',a:[
    'Klasična fantasy-proza',
    'SF književnost',
    'Stil koji u realistički svijet ubacuje jedno nemoguće pravilo i tretira ga kao prirodno',
    'Poezija o nadnaravnim bićima'
  ],c:2,e:'<b>Borgesovska fantastika</b> = realistički okvir + jedno nemoguće pravilo (beskrajna biblioteka, slika koja stari). U hrvatskoj književnosti: Pavličić, Tribuson, Damir Miloš.'},

  {q:'Tko je autor romana Ako jedne zimske noći putnik (1979.)?',a:[
    'Italo Calvino',
    'Umberto Eco',
    'Milan Kundera',
    'Samuel Beckett'
  ],c:0,e:'<b>Italo Calvino</b> (1923.–1985.), talijanski pisac. Roman je <em>paradigma metafikcije</em> — čitatelj je lik. Sastavljen od 10 početaka različitih romana koji nikad ne budu dovršeni.'},

  {q:'Koja je središnja teza Barthesove „Smrti autora"?',a:[
    'Autor je najvažniji za tumačenje teksta',
    'Autor nije vrhovni autoritet značenja; čitatelj suautorira',
    'Autor mora biti biografski istražen',
    'Autor je uvijek politički određen'
  ],c:1,e:'<b>Autor nije vrhovni autoritet značenja.</b> Tekst je „pletivo citata"; značenje nastaje pri čitanju. „<em>Rođenje čitatelja mora biti plaćeno smrću autora.</em>"'},

  {q:'Koji je postmoderni pojam najprikladniji za analizu Brešanove Predstave Hamleta u selu Mrduša Donja?',a:[
    'Metafikcija',
    'Parodija',
    'Simulakrum',
    'Pastiš'
  ],c:1,e:'<b>Parodija.</b> Brešan parodira Shakespearea — amaterska seljačka trupa postavlja Hamleta s katastrofalnim i groteskno-komičnim rezultatima. Istovremeno politička satira.'},

  {q:'Što postmoderni pojmovi omogućuju u eseju iz obvezatnih djela (Kafka, Marinković, Krleža)?',a:[
    'Direktno rješavanje ispitnih pitanja',
    'Paralelnu ilustraciju koja pokazuje široko čitanje',
    'Zamjenu za književnopovijesni kontekst',
    'Automatsku peticu na eseju'
  ],c:1,e:'Postmoderni aparat daje <b>paralelnu ilustraciju</b>: npr. „<em>Kafkina fragmentacija tijela anticipira postmodernu fragmentaciju narativa.</em>" Pokazuje dubinu čitanja — ocjenjivači nagrađuju.'},
];
var QUIZ_SHUFFLED=QUIZ.slice();
var qzState={idx:0,score:0,answered:[]};

function qzNormalizeQuestion(item){
  if(!item||typeof item!=='object'){
    return {q:'',opts:[],correct:-1,exp:''};
  }
  return {
    q: String(item.q||''),
    opts: Array.isArray(item.opts)?item.opts:(Array.isArray(item.a)?item.a:[]),
    correct: Number.isInteger(item.correct)?item.correct:(Number.isInteger(item.c)?item.c:-1),
    exp: String(item.exp||item.e||'')
  };
}

function renderQuizIntro(){
  var el=document.getElementById('qz-app');
  el.innerHTML=\`
    <div class="qz-start">
      <div class="qz-start-ico">🧠</div>
      <h3>20 pitanja · bez vremena</h3>
      <p>Pitanja pokrivaju cijelo poglavlje: Kafka (Preobražaj), moderna kao epoha, kafkijanska atmosfera, parabola apsurda, likovi (Gregor, Greta, otac, prokurist), te kontekst (ekspresionizam, Pismo ocu, Brod, paralele s Dostojevskim). Na kraju dobivaš ocjenu i objašnjenja.</p>
      <button class="fcb primary" onclick="qzStart()">Započni kviz ›</button>
    </div>
  \`;
}
function qzStart(){
  qzState={idx:0,score:0,answered:[]};
  QUIZ_SHUFFLED=QUIZ.map(qzNormalizeQuestion);
  for(var i=QUIZ_SHUFFLED.length-1;i>0;i--){
    var j=Math.floor(Math.random()*(i+1));
    var t=QUIZ_SHUFFLED[i];QUIZ_SHUFFLED[i]=QUIZ_SHUFFLED[j];QUIZ_SHUFFLED[j]=t;
  }
  if(typeof track==='function') track('quiz_start', {total_questions: QUIZ.length}, 'engagement');
  qzRender();
}
function qzRender(){
  var q=qzNormalizeQuestion(QUIZ_SHUFFLED[qzState.idx]);
  if(!q.opts.length){
    var host=document.getElementById('qz-app');
    if(host){
      host.innerHTML='<div class="qz-start"><div class="qz-start-ico">⚠️</div><h3>Kviz je trenutno nedostupan</h3><p>Neka pitanja nisu ispravno učitana. Osvježi stranicu i pokušaj ponovno.</p></div>';
    }
    return;
  }
  var pct=(qzState.idx/QUIZ.length)*100;
  var html=\`
    <div class="qz-prog"><span>pitanje <b>\${qzState.idx+1}</b> / \${QUIZ.length}</span><span>bodova: <b>\${qzState.score}</b></span></div>
    <div class="qz-bar"><div class="qz-bar-f" style="width:\${pct}%"></div></div>
    <div class="qz-q">\${q.q}</div>
    <div class="qz-opts">
  \`;
  q.opts.forEach(function(o,i){
    html+=\`<button class="qz-opt" data-i="\${i}"><span class="qz-key">\${String.fromCharCode(65+i)}</span><span>\${o}</span></button>\`;
  });
  html+=\`</div><div class="qz-fb" id="qz-fb"></div><div class="qz-nav" id="qz-nav"></div>\`;
  document.getElementById('qz-app').innerHTML=html;
  document.querySelectorAll('.qz-opt').forEach(function(b){
    b.addEventListener('click',function(){qzAnswer(parseInt(b.dataset.i))});
  });
}
function qzAnswer(sel){
  var q=qzNormalizeQuestion(QUIZ_SHUFFLED[qzState.idx]);
  if(!q.opts.length) return;
  var ok=sel===q.correct;
  if(ok){qzState.score++;soundOk()} else soundNg();
  qzState.answered.push({q:q.q,sel:sel,correct:q.correct,ok:ok,opts:q.opts,exp:q.exp});
  var opts=document.querySelectorAll('.qz-opt');
  opts.forEach(function(o,i){
    o.disabled=true;
    if(i===q.correct) o.classList.add('ok');
    if(i===sel&&!ok) o.classList.add('ng');
  });
  var fb=document.getElementById('qz-fb');
  fb.className='qz-fb show '+(ok?'ok':'ng');
  fb.innerHTML=\`<b>\${ok?'? Točno!':'? Pogrešno.'}</b> \${q.exp}\`;
  var isLast=qzState.idx===QUIZ.length-1;
  document.getElementById('qz-nav').innerHTML=\`<button class="fcb primary" onclick="qzNext()">\${isLast?'Prikaži rezultat':'Sljedeće pitanje'} ›</button>\`;
}
function qzNext(){
  if(!qzIsPaid() && qzState.idx >= QZ_FREE_LIMIT - 1){
    qzShowPaywall();
    return;
  }
  if(qzState.idx===QUIZ.length-1){qzResult();return}
  qzState.idx++;
  qzRender();
}

/* == SHARE == */
function qzShare(pct,score){
  var url='https://maturiraj.hr/skripte/hrv/h10';
  var text='Prošao/la sam kviz iz H08 · Moderna + Kafka Preobražaj na maturiraj.hr — '+score+'/'+QUIZ.length+' ('+pct+'%) 🎓';
  var fb=document.getElementById('qz-share-fb');

  // Try Web Share API (mobile)
  if(navigator.share){
    navigator.share({title:'Maturiraj.hr · H10 Kviz',text:text,url:url})
      .then(function(){if(fb)fb.textContent='Podijeljeno ?'})
      .catch(function(){/* user cancelled, silent */});
    return;
  }
  // Fallback: copy to clipboard
  var full=text+'\\n'+url;
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(full).then(function(){
      if(fb){fb.textContent='? Link kopiran! Zalijepi u WhatsApp/Instagram';setTimeout(function(){fb.textContent=''},3500)}
    }).catch(function(){shareManual(full)});
  } else {
    shareManual(full);
  }
}
function shareManual(text){
  // Final fallback: prompt
  window.prompt('Kopiraj i zalijepi:',text);
}
function qzResult(){
  soundDone();
  var pct=Math.round((qzState.score/QUIZ.length)*100);
  var grade,msg,ico,scoreBand;
  if(pct>=90){grade='ODLIČAN';msg='Spreman si za esej o Zločinu i kazni — teorija i citati u rukama.';ico='🏆';scoreBand='great'}
  else if(pct>=75){grade='VRLO DOBAR';msg='Solidno poznaješ gradivo. Doradi par tema.';ico='💪';scoreBand='good'}
  else if(pct>=60){grade='DOBAR';msg='Dobra osnova. Ponovi pojmovnik i Preobražaj deep-dive.';ico='📚';scoreBand='good'}
  else if(pct>=45){grade='DOVOLJAN';msg='Osnove su tu — trebaš više vježbe.';ico='🔁';scoreBand='low'}
  else{grade='NEDOVOLJAN';msg='Vrati se na početak i pođi polako.';ico='🎯';scoreBand='low'}
  var wrong=qzState.answered.filter(function(a){return !a.ok});

  track('quiz_complete', {
    score: qzState.score,
    total: QUIZ.length,
    pct: pct,
    band: scoreBand,
    wrong_count: wrong.length
  }, 'conversion');

  var html=\`
    <div class="qz-result">
      <div style="font-size:48px;margin-bottom:8px">\${ico}</div>
      <div class="qz-score">\${pct}%</div>
      <div class="qz-grade">\${grade}</div>
      <div class="qz-msg">\${qzState.score} / \${QUIZ.length} točnih · \${msg}</div>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
        <button class="fcb primary" onclick="qzStart()">🔁 Ponovo</button>
        <button class="fcb" onclick="qzShare(\${pct},\${qzState.score})">📤 Podijeli</button>
        <button class="fcb" onclick="sw(1)">‹ Preobražaj</button>
        <button class="fcb" onclick="sw(4)">📚 Pojmovnik</button>
      </div>
      <div id="qz-share-fb" style="margin-top:14px;font-family:var(--mono);font-size:11px;color:var(--green);min-height:16px"></div>
    </div>
  \`;

  // === PLAYBOOK P3.2: REZULTAT REVEAL — najvažnija konverzijska taktika ===
  // Vidljivo: osnovni rezultat + promašeni. Zakljucano: AI analiza, plan, vježbe.
  // Očekivani ROI iz playbooka: 12–18% Standard › Pro konverzija.
  if(wrong.length > 0 || pct < 90){
    html += \`
      <div class="reveal-lock" data-band="\${scoreBand}">
        <div class="reveal-lock-head">
          <div class="reveal-lock-eye">🔒 OTKLJUČAJ PUNU ANALIZU</div>
          <div class="reveal-lock-title">Shvati svaku grešku — s AI profesorom</div>
        </div>
        <div class="reveal-lock-items">
          <div class="reveal-lock-item">
            <div class="rli-ico">🤖</div>
            <div class="rli-body">
              <div class="rli-title">Zašto si pogriješio u svakom pitanju?</div>
              <div class="rli-desc">AI profesor ti objasni tvojim riječima, korak po korak. \${wrong.length} \${wrong.length===1?'pitanje':(wrong.length<5?'pitanja':'pitanja')} za analizu.</div>
            </div>
            <div class="rli-lock"><span class="rli-badge pro">PRO</span></div>
          </div>
          <div class="reveal-lock-item">
            <div class="rli-ico">📋</div>
            <div class="rli-body">
              <div class="rli-title">Personalizirani plan popravka</div>
              <div class="rli-desc">Točno što treba ponoviti ove tjedne da skočiš s \${pct}% na 85%+.</div>
            </div>
            <div class="rli-lock"><span class="rli-badge pro">PRO</span></div>
          </div>
          <div class="reveal-lock-item">
            <div class="rli-ico">🎯</div>
            <div class="rli-body">
              <div class="rli-title">Slična pitanja iz prošlih matura</div>
              <div class="rli-desc">Discere arhiva: \${wrong.length>0?wrong.length*3:15} sličnih pitanja iz 70 matura, grupiranih po tvojim slabim točkama.</div>
            </div>
            <div class="rli-lock"><span class="rli-badge standard">STANDARD</span></div>
          </div>
        </div>
        <div class="reveal-lock-cta">
          <a href="/cijene?ctx=quiz_reveal&band=\${scoreBand}" class="reveal-lock-btn" onclick="track('upsell_click',{ctx:'quiz_reveal',band:'\${scoreBand}',target:'pricing'},'conversion')">
            Otključaj sve — 19,99 €/mj
          </a>
          <div class="reveal-lock-sub">Otkaži bilo kada · Bez obveze</div>
        </div>
      </div>
    \`;
    setTimeout(function(){track('upsell_view',{ctx:'quiz_reveal',band:scoreBand},'conversion')}, 100);
  }

  // Wrong questions preview — bez eksplikacija (te su zaključane)
  if(wrong.length>0){
    html+=\`<div style="margin-top:28px"><div class="slbl">Promašena pitanja (\${wrong.length})</div>\`;
    wrong.forEach(function(a){
      html+=\`<div class="qz-wrong-item"><div class="qz-wrong-q">\${a.q}</div><div class="qz-wrong-a">Točan odgovor: <b>\${a.opts[a.correct]}</b></div></div>\`;
    });
    html+=\`</div>\`;
  }

  // Update progress via flag + recompute
  if(qzState.score>=QUIZ.length*0.6){QUIZ_PASSED=true;lsSave('mt.hrv.h10.quiz_passed',true)}
  recomputeProgress();
  document.getElementById('qz-app').innerHTML=html;
}

/* ===========================================
   CHECKPOINT
   =========================================== */
function cpToggle(el){
  el.classList.toggle('done');
  cpSave();
  cpUpdate();
  if(el.classList.contains('done')) soundOk();
}
function cpSave(){
  var states=[];
  document.querySelectorAll('.cp-item').forEach(function(el){states.push(el.classList.contains('done'))});
  lsSave('mt.hrv.h10.cp',states);
}
function cpLoad(){
  var states=lsLoad('mt.hrv.h10.cp',null);
  if(!states)return;
  var items=document.querySelectorAll('.cp-item');
  items.forEach(function(el,i){if(states[i]) el.classList.add('done')});
  cpUpdate();
}
function cpUpdate(){
  var items=document.querySelectorAll('.cp-item');
  var done=document.querySelectorAll('.cp-item.done').length;
  var total=items.length;
  var pct=Math.round(done/total*100);
  var doneEl=document.getElementById('cp-done');
  var pctEl=document.getElementById('cp-pct');
  var finalEl=document.getElementById('cp-final');
  if(doneEl) doneEl.textContent=done;
  if(pctEl) pctEl.textContent=pct+'%';
  if(finalEl){
    if(done===total){finalEl.classList.add('show');soundDone();markChapterDone()}
    else finalEl.classList.remove('show');
  }
  recomputeProgress();
}
function markChapterDone(){
  // Sidebar marker
  var activeItem=document.querySelector('.sb-item.active');
  if(activeItem) activeItem.classList.add('done-chapter');
}

/* == INIT == */
document.addEventListener('DOMContentLoaded',function(){
  _initTracking();
  track('page_view', {chapter: CURRENT_CHAPTER.code, days_to_matura: daysToMatura()}, 'navigation');

  checkRestore();
  cpLoad();
  var visited=lsLoad('mt.hrv.h10.visited',null);
  if(visited){VISITED_TABS=visited}
  QUIZ_PASSED=lsLoad('mt.hrv.h10.quiz_passed',false);
  VISITED_TABS[0]=true;
  updateTabBadges();
  recomputeProgress();

  // Breadcrumb: reflect current tab (v3.6)
  var currentTab = lsLoad('mt.hrv.h10.tab', 0);
  var bcTab = document.getElementById('bc-tab');
  if(bcTab && TAB_LABELS[currentTab]) bcTab.textContent = TAB_LABELS[currentTab];

  // Restore last visited tab (v2 upgrade — continue where you left off)
  if(currentTab > 0 && currentTab < 8){
    // Only restore if user explicitly navigated away from Tab 0
    // Delay to allow page to settle before tab switch
    setTimeout(function(){ sw(currentTab); }, 50);
  }

  // Social proof + countdown
  renderSocialProof('social-proof', 'full');
  var daysLeft = daysToMatura();
  if(daysLeft <= 60 && daysLeft > 0){
    var cd = document.getElementById('countdown');
    if(cd){cd.style.display='flex';renderCountdown('countdown')}
  }

  // Citatnik search + filter
  _citInit();

  // SVG hotspot tooltips
  _svgTtInit();

  // Mini-dijagnostika: restore dismissed state
  _diagRestore();

  /* == FEEDBACK MODAL: char counter == */
  var fbTa = document.getElementById('fb-message');
  var fbCnt = document.getElementById('fb-char-count');
  if(fbTa && fbCnt){
    fbTa.addEventListener('input', function(){
      var len = fbTa.value.length;
      fbCnt.textContent = len;
      fbCnt.parentElement.classList.toggle('over', len > 5000);
    });
  }

  /* == UPSELL IMPRESSION TRACKING (IntersectionObserver) == */
  if('IntersectionObserver' in window){
    var seen = {};
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          var el = entry.target;
          var key = el.dataset.upsellId || el.className;
          if(seen[key]) return;
          seen[key] = true;
          var ctx = el.dataset.upsellCtx || 'unknown';
          var target = el.dataset.upsellTarget || 'unknown';
          track('upsell_view', {ctx: ctx, target: target}, 'conversion');
        }
      });
    }, {threshold: 0.5, rootMargin: '0px 0px -50px 0px'});
    // Observer zakači se na sve upsell blokove koji imaju data-upsell-ctx
    setTimeout(function(){
      document.querySelectorAll('[data-upsell-ctx]').forEach(function(el){observer.observe(el)});
    }, 500);
  }

  /* == BACK-TO-TOP SCROLL LISTENER == */
  var btt=document.getElementById('btt');
  if(btt){
    var ticking=false;
    window.addEventListener('scroll',function(){
      if(!ticking){
        window.requestAnimationFrame(function(){
          if(window.scrollY>600) btt.classList.add('show');
          else btt.classList.remove('show');
          ticking=false;
        });
        ticking=true;
      }
    },{passive:true});
  }

  /* == KEYBOARD NAV == */
  document.addEventListener('keydown',function(e){
    // Esc: zatvori modal ili sidebar
    if(e.key==='Escape'){
      var fbModal=document.getElementById('fb-modal-backdrop');
      if(fbModal&&fbModal.classList.contains('show')){closeFeedbackModal();return}
      var sb=document.getElementById('sidebar');
      if(sb&&sb.classList.contains('mobile-open')){closeSidebar();return}
    }
    // Ctrl+K / Cmd+K › switch to Pojmovnik tab + focus search
    if((e.ctrlKey||e.metaKey)&&e.key==='k'){
      e.preventDefault();
      sw(4);
      setTimeout(function(){
        var s=document.getElementById('pojm-search');
        if(s){ s.focus(); s.select(); }
      },250);
      return;
    }
    var tag=(e.target&&e.target.tagName||'').toLowerCase();
    if(tag==='input'||tag==='textarea')return;
    if(e.target.classList&&e.target.classList.contains('tab')){
      if(e.key==='ArrowRight'||e.key==='ArrowLeft'){
        e.preventDefault();
        var curr=parseInt(lsLoad('mt.hrv.h10.tab',0));
        var nxt=e.key==='ArrowRight'?Math.min(7,curr+1):Math.max(0,curr-1);
        sw(nxt);
        var tabs=document.querySelectorAll('[role="tab"]');
        if(tabs[nxt])tabs[nxt].focus();
      }
    }
    if(e.key>='1'&&e.key<='8'&&!e.ctrlKey&&!e.metaKey&&!e.altKey){
      sw(parseInt(e.key)-1);
    }
  });

  if(!lsLoad('mt.hrv.h10.hinted',false)){
    setTimeout(function(){lsSave('mt.hrv.h10.hinted',true)},3000);
  }
});

/* == POJMOVNIK SEARCH + FILTER (Tab 4) == */
(function initPojmovnikH10(){
  var grid = document.getElementById('pojm-grid');
  if(!grid) return;
  var search = document.getElementById('pojm-search');
  var noResult = document.getElementById('pojm-noresult');
  var filterBtns = document.querySelectorAll('.pojm-filter');
  var items = Array.prototype.slice.call(grid.querySelectorAll('.pojm'));
  var state = { q: '', cat: 'all' };

  function normalize(s){
    return (s||'').toLowerCase()
      .replace(/č|ć/g,'c').replace(/š/g,'s').replace(/ž/g,'z')
      .replace(/đ/g,'d').replace(/[„”"''""„]/g,'').trim();
  }

  function apply(){
    var q = normalize(state.q);
    var visible = 0;
    items.forEach(function(el){
      var elCat = el.getAttribute('data-cat') || '';
      var kw = el.getAttribute('data-kw') || '';
      var word = (el.querySelector('.pojm-word') || {textContent:''}).textContent;
      var def = (el.querySelector('.pojm-def') || {textContent:''}).textContent;
      var hay = normalize(kw + ' ' + word + ' ' + def);
      var matchCat = (state.cat === 'all' || elCat === state.cat);
      var matchQ = (!q || hay.indexOf(q) !== -1);
      var ok = matchCat && matchQ;
      el.style.display = ok ? '' : 'none';
      if(ok) visible++;
    });
    if(noResult) noResult.classList.toggle('show', visible === 0);
  }

  if(search){
    var t;
    search.addEventListener('input', function(){
      clearTimeout(t);
      t = setTimeout(function(){
        state.q = search.value.trim();
        apply();
        if(typeof track==='function' && state.q.length >= 2){
          track('pojm_search', {q_length: state.q.length}, 'engagement');
        }
      }, 120);
    });
  }

  filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
      filterBtns.forEach(function(b){ b.classList.remove('on'); });
      btn.classList.add('on');
      state.cat = btn.getAttribute('data-cat') || 'all';
      apply();
      if(typeof track==='function') track('pojm_filter', {cat: state.cat}, 'engagement');
    });
  });

  apply();
})();


/* == TAB SWIPE NAVIGATION (mobile) == */
(function initTabSwipe(){
  var content = document.querySelector('.main');
  if(!content) return;
  var startX = 0, startY = 0, deltaX = 0, deltaY = 0, isScrolling = null;
  var SWIPE_THRESHOLD = 60;
  var TAB_COUNT = 8;

  content.addEventListener('touchstart', function(e){
    if(e.touches.length !== 1) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    deltaX = 0; deltaY = 0;
    isScrolling = null;
  }, {passive: true});

  content.addEventListener('touchmove', function(e){
    if(e.touches.length !== 1) return;
    deltaX = e.touches[0].clientX - startX;
    deltaY = e.touches[0].clientY - startY;
    if(isScrolling === null){
      isScrolling = Math.abs(deltaY) > Math.abs(deltaX);
    }
  }, {passive: true});

  content.addEventListener('touchend', function(e){
    if(isScrolling || Math.abs(deltaX) < SWIPE_THRESHOLD) return;
    var curr = parseInt(localStorage.getItem('mt.hrv.h10.tab') || '0', 10);
    if(deltaX < 0 && curr < TAB_COUNT - 1){
      // Swipe left › next tab
      sw(curr + 1);
      if(typeof track === 'function') track('tab_swipe', {direction: 'next', from: curr}, 'engagement');
    } else if(deltaX > 0 && curr > 0){
      // Swipe right › prev tab
      sw(curr - 1);
      if(typeof track === 'function') track('tab_swipe', {direction: 'prev', from: curr}, 'engagement');
    }
  }, {passive: true});
})();

/* == SCROLL PROGRESS BAR (H06 v2 upgrade) == */
(function(){
  var bar = document.getElementById('scroll-progress');
  if(!bar) return;
  var ticking = false;
  function updateProgress_2(){
    var h = document.documentElement;
    var scrolled = h.scrollTop;
    var total = h.scrollHeight - h.clientHeight;
    var pct = total > 0 ? (scrolled / total) * 100 : 0;
    bar.style.width = pct + '%';
    ticking = false;
  }
  window.addEventListener('scroll', function(){
    if(!ticking){
      window.requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, {passive: true});
  updateProgress();
})();



window.fqCopyQuote = function(btn){
  // Read actual quote + meta from parent .featured-quote block
  var fq = btn.closest('.featured-quote');
  var text = fq ? (fq.querySelector('.fq-text')?.textContent || '').trim() : '';
  var meta = fq ? (fq.querySelector('.fq-meta')?.textContent || '').trim() : '';
  var quote = text && meta ? ('„' + text + '" ' + meta) : text;
  if(!quote){
    quote = '„Knjiga je mreža citata iz bezbrojnih središta kulture." — Roland Barthes, Smrt autora, 1967.';
  }
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(quote).then(function(){
      btn.textContent = '?';
      setTimeout(function(){ btn.textContent = '?'; }, 1400);
      if(typeof track === 'function') track('featured_quote_copy', {}, 'engagement');
    }).catch(function(){
      btn.textContent = '?';
      setTimeout(function(){ btn.textContent = '?'; }, 1400);
    });
  } else {
    btn.textContent = '?';
    setTimeout(function(){ btn.textContent = '?'; }, 1400);
  }
};

/* == ESEJ BROJAČ — Tab 2 (H10) == */
(function initWordCounter(){
  var ta = document.getElementById('wc-textarea');
  if(!ta) return;
  var elWords = document.getElementById('wc-words');
  var elChars = document.getElementById('wc-chars');
  var elCharsNoSp = document.getElementById('wc-chars-no-spaces');
  var elPars = document.getElementById('wc-paragraphs');
  var elTime = document.getElementById('wc-time');
  var elBar = document.getElementById('wc-progress-bar');
  var elLbl = document.getElementById('wc-progress-lbl');
  var elProg = document.getElementById('wc-progress');
  var elWordsStat = document.getElementById('wc-words-stat');
  var TARGET = 440;
  var STORAGE_KEY = 'mt.hrv.h10.wc_text';

  function update(){
    var txt = ta.value || '';
    var trimmed = txt.trim();
    var words = trimmed ? trimmed.split(/\\s+/).filter(Boolean).length : 0;
    var chars = txt.length;
    var charsNoSp = txt.replace(/\\s/g,'').length;
    var pars = trimmed ? trimmed.split(/\\n\\s*\\n/).filter(function(p){return p.trim().length>0}).length : 0;
    var timeMin = words > 0 ? Math.max(1, Math.round(words / 200)) : 0;

    elWords.textContent = words;
    elChars.textContent = chars;
    elCharsNoSp.textContent = charsNoSp;
    elPars.textContent = pars;
    elTime.textContent = timeMin + ' min';

    var pct = Math.min(100, (words / TARGET) * 100);
    elBar.style.width = pct + '%';
    elLbl.textContent = words + ' / ' + TARGET;

    // Color states
    if(elWordsStat){
      elWordsStat.classList.remove('critical','ok');
      if(words === 0){}
      else if(words < TARGET) elWordsStat.classList.add('critical');
      else elWordsStat.classList.add('ok');
    }
    if(elProg){
      elProg.classList.toggle('pass', words >= TARGET);
    }
  }

  // Load saved
  try {
    var saved = localStorage.getItem(STORAGE_KEY);
    if(saved) ta.value = saved;
  } catch(e){}

  // Live update + autosave (debounced)
  var saveTimer;
  ta.addEventListener('input', function(){
    update();
    clearTimeout(saveTimer);
    saveTimer = setTimeout(function(){
      try { localStorage.setItem(STORAGE_KEY, ta.value); } catch(e){}
    }, 600);
  });

  update();
})();

window.wcClear = function(){
  var ta = document.getElementById('wc-textarea');
  if(!ta) return;
  if(!ta.value.trim() || confirm('Sigurno želiš obrisati tekst?')){
    ta.value = '';
    try { localStorage.removeItem('mt.hrv.h10.wc_text'); } catch(e){}
    ta.dispatchEvent(new Event('input'));
    ta.focus();
  }
};

window.wcCopy = function(){
  var ta = document.getElementById('wc-textarea');
  if(!ta || !ta.value) return;
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(ta.value).then(function(){
      var btns = document.querySelectorAll('.wc-actions .wc-btn');
      btns.forEach(function(b){
        if(b.textContent.indexOf('Kopiraj') > -1){
          var orig = b.textContent;
          b.textContent = '? Kopirano';
          setTimeout(function(){ b.textContent = orig; }, 1400);
        }
      });
    }).catch(function(){});
  }
};


/* == ESEJ BROJAČ — Tab 2 (H10) == */
(function initWordCounter_2(){
  function wcUpdate(){
    var ta = document.getElementById('wc-ta');
    if(!ta) return;
    var txt = ta.value;
    var words = txt.trim() ? txt.trim().split(/\\s+/).length : 0;
    var chars = txt.length;
    var nospace = txt.replace(/\\s/g,'').length;
    var para = txt.trim() ? txt.split(/\\n\\s*\\n/).filter(function(p){return p.trim();}).length : 0;
    var readMin = Math.max(1, Math.round(words / 200));
    var el = function(id){ return document.getElementById(id); };
    var statNum = function(id, val){
      var s = el(id); if(!s) return;
      var n = s.querySelector('.wc-stat-num'); if(n) n.textContent = val;
    };
    statNum('wc-words', words);
    statNum('wc-chars', chars);
    statNum('wc-nospace', nospace);
    statNum('wc-para', para);
    statNum('wc-read', readMin + ' min');
    var goal = 440;
    var pct = Math.min(100, Math.round(words / goal * 100));
    var bar = el('wc-bar'); if(bar) bar.style.width = pct + '%';
    var lbl = el('wc-lbl'); if(lbl) lbl.textContent = 'CILJ ' + goal + ' · ' + words + ' / ' + goal;
    var prog = el('wc-prog');
    if(prog){ prog.classList.toggle('pass', words >= goal); }
    ['wc-words','wc-chars','wc-nospace','wc-para','wc-read'].forEach(function(id){
      var s = el(id); if(!s) return;
      s.classList.toggle('ok', words >= goal);
      s.classList.toggle('critical', words > 0 && words < 200);
    });
  }
  window.wcUpdate = wcUpdate;
  var ta = document.getElementById('wc-ta');
  if(ta) ta.addEventListener('input', wcUpdate);
})();


/* == CITATNIK FILTER — Tab 3 (H10) == */
(function _citFilterH10(){
  var grid = document.getElementById('cit-grid');
  if(!grid) return;
  var filterBtns = document.querySelectorAll('[data-cit-cat]');
  var cards = Array.prototype.slice.call(grid.querySelectorAll('.cit-card'));
  filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
      filterBtns.forEach(function(b){ b.classList.remove('on'); });
      btn.classList.add('on');
      var cat = btn.getAttribute('data-cit-cat');
      cards.forEach(function(card){
        var cardCat = card.getAttribute('data-cat') || '';
        card.style.display = (cat === 'all' || cardCat === cat) ? '' : 'none';
      });
    });
  });
})();
;
/* TIER_SYSTEM_JS_INJECTED */
/**
 * Maturiraj.hr — Tier Helper Module
 * 
 * Globalni JS modul za upravljanje tier sustavom (Free / Standard / Pro).
 * Koristi se u svim chapterima i pricing page-u.
 * 
 * TODO:
 * - Tier provjera mora ići preko Supabase (auth.uid() › user_subscriptions tablica)
 * - Trenutno mock kroz localStorage 'mt.pro_mode' = 'free' | 'standard' | 'pro'
 * - Dnevni limiti se moraju validirati na backendu
 * 
 * Verzija: 1.0
 * Autor: Maturiraj.hr team
 */

(function(window) {
  'use strict';

  // ================================================
  // CONFIG — Tier Definicija
  // ================================================
  
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
      label: '? Standard',
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

  // ================================================
  // STORAGE KEYS
  // ================================================
  
  const STORAGE_KEYS = {
    tier: 'mt.pro_mode',
    daily_usage: 'mt.daily_usage',
    weekly_usage: 'mt.weekly_usage',
  };

  // ================================================
  // CORE API
  // ================================================
  
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
   * Toggle tier (free › standard › pro › free)
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

  // ================================================
  // USAGE TRACKING
  // ================================================
  
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

  // ================================================
  // PAYWALL MODAL
  // ================================================
  
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
              <li>✅ Bez AI features</li>
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
              <li>• <strong>🤖 AI Profesor (chat) — 30/dan</strong></li>
              <li>• <strong>🧠 AI Feedback za eseje + sažetke — 20/dan</strong></li>
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
          <a href="/pretplata" class="mt-paywall-link">Vidi sve tier opcije ›</a>
          <span class="mt-paywall-divider">·</span>
          <button type="button" class="mt-paywall-link mt-paywall-link-btn" onclick="MT.Tier.toggleTierDevMode()">📌 Dev: Toggle tier (trenutno: \${getTier().toUpperCase()})
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
    // TODO: Stripe Checkout integration
    alert(\`Info: Pretplata u izradi.\\n\\nUskoro: Stripe Checkout za \${tier === 'pro' ? 'Pro 19,99€' : 'Standard 9,99€'}/mj\\n\\n(Mock: postavljen tier na \${tier.toUpperCase()})\`);
    setTier(tier);
    closePaywall();
    location.reload();
  }

  function toggleTierDevMode() {
    const next = toggleTier();
    alert(\`Info: Dev mode — tier postavljen na: \${next.toUpperCase()}\`);
    closePaywall();
    location.reload();
  }

  // ================================================
  // SIDEBAR TIER BADGE
  // ================================================
  
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
      \${tier === 'free' ? '<button type="button" class="mt-tier-badge-cta" onclick="MT.Tier.openPricing()">Upgrade ›</button>' : ''}
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

  // ================================================
  // PUBLIC API
  // ================================================
  
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
/* CP_RESET_INJECTED */

function cpReset(){
  if(!confirm('Resetiraj sve označene stavke?')) return;
  var items = document.querySelectorAll('.cp-item');
  items.forEach(function(it){ it.classList.remove('done'); });
  try { localStorage.removeItem('mt.hrv.h10.cp'); } catch(e){}
  // Update counter
  var done = document.getElementById('cp-done');
  if(done) done.textContent = '0';
  var pct = document.getElementById('cp-pct');
  if(pct) pct.textContent = '0%';
  var sb = document.getElementById('cp-summary-box');
  if(sb) sb.style.display = 'none';
  var fb = document.getElementById('cp-final');
  if(fb) fb.style.display = 'none';
}
;
/* CIT_SEARCH_UNIVERSAL */

function citSearch(query){
  var q = (query || '').toLowerCase().trim();
  // Get current Citatnik tab (l3)
  var l3 = document.getElementById('l3');
  if(!l3) return;
  
  // Search ALL quote types
  var selectors = ['.featured-quote', '.cit-card', '.box-key', '.cr'];
  var visible = 0;
  selectors.forEach(function(sel){
    var items = l3.querySelectorAll(sel);
    items.forEach(function(item){
      var text = item.textContent.toLowerCase();
      var match = !q || text.indexOf(q) !== -1;
      item.style.display = match ? '' : 'none';
      if (match) visible++;
    });
  });
  
  // Update count if present
  var counter = document.getElementById('cit-stats');
  if (counter && q) counter.textContent = visible + ' citata pronađeno';
}

/* == CHEATSHEET PRINT (parity s H01–H05) == */
function printCheatSheet(){
  document.body.classList.add('print-cheat-only');
  setTimeout(function(){
    window.print();
    setTimeout(function(){ document.body.classList.remove('print-cheat-only'); }, 500);
  }, 50);
  try{ track('cheat_sheet_print', {chapter: CURRENT_CHAPTER.code}, 'engagement'); }catch(e){}
}
if(typeof window !== 'undefined'){
  window.addEventListener('afterprint', function(){
    document.body.classList.remove('print-cheat-only');
  });
}`;


export default function H10Chapter() {
  useEffect(() => {
    let roots = [];
    const mountPortal = (id, el) => {
      const div = document.getElementById(id);
      if (div) { const r = createRoot(div); r.render(el); roots.push(r); }
    };
    const raf = requestAnimationFrame(() => {
      mountPortal('l3',      <CitatnikH10 onBack={()=>typeof window.sw==='function'&&window.sw(2)} onNext={()=>typeof window.sw==='function'&&window.sw(4)} />);
      mountPortal('h10-p1',  <HeroQuotePostmoderna />);
      mountPortal('h10-p2',  <ComparePostModModerna />);
      mountPortal('h10-p3',  <AuthorCardEco context="l0" />);
      mountPortal('h10-p4',  <TimelinePostmoderna />);
      mountPortal('h10-p5',  <PopKulturaPostmoderna />);
      mountPortal('h10-p6',  <StatCardsImeRuze />);
      mountPortal('h10-p7',  <AuthorCardEco context="l1" />);
      mountPortal('h10-p8',  <AuthorCardPavličić />);
      mountPortal('h10-p9',  <CompareEcoPavličić />);
      mountPortal('h10-p10', <AccordionEsejTezeH10 />);
      mountPortal('l4',       <PojmovnikH10 onBack={()=>typeof window.sw==='function'&&window.sw(3)} onNext={()=>typeof window.sw==='function'&&window.sw(5)} />);
    });
    return () => { cancelAnimationFrame(raf); setTimeout(() => roots.forEach(r => r?.unmount()), 0); };
  }, []);

  return (
    <ChapterWrapper
      chapterId="H10"
      bodyHtml={BODY_HTML}
      stylesCss={STYLES_CSS}
      scriptsJs={SCRIPTS_JS}
    />
  );
}

export const HRV_POGAVLJE_10 = null
