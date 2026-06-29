/**
 * H09 — Maturiraj.hr — Hrvatski H09 · Egzistencijalizam + Camus Stranac
 * Auto-generated from Maturiraj_Hrvatski_H09.html
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
import {
  AuthorCardCamus,
  TimelineCamus,
  CompareCamusSartre,
  PopKulturaCamus,
  HeroQuoteStranac,
  StatCardsStranac,
  SimboliGridStranac,
  CompareStranacPreobrazaj,
  AccordionEsejTezeH09,
} from './H09_Components';
import CitatnikH09 from './H09_CitatnikTab';
import PojmovnikH09 from './H09_PojmovnikTab';

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
    <span id="sb-footer-pos">09 / 28</span> · <span id="sb-footer-title">avangarda i 20. st.</span>
    <br>maturiraj.hr · hrvatski · v2
  </div>
</nav>

<!-- == MAIN == -->
<main class="main" id="main">
<div class="content-wrap">
  <div class="bc">
    <a class="bc-link" href="/">maturiraj.hr</a><span class="bc-sep">/</span>
    <a class="bc-link" href="/skripte/hrv">hrvatski</a><span class="bc-sep">/</span>
    <span class="bc-cur">H09 · Egzistencijalizam + Camus Stranac</span>
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
    <div class="hero-chapter">H09 &nbsp;·&nbsp; Svjetska književnost &nbsp;·&nbsp; Egzistencijalizam + Camus Stranac</div>
    <h1 class="hero-title">Apsurd<br><span>kao filozofija</span></h1>
    <div class="hero-sub">Nakon Drugog svjetskog rata, <strong>Albert Camus</strong> postavlja apsurd kao centralni pojam moderne misli. Roman <strong>Stranac</strong> <span style="color:var(--bronze-l)">(obvezatno čitanje 2026)</span>. <em>Meursault</em> ne plače na majčinu pogrebu, ubije Arapina pod žarkim alžirskim suncem, pristane na giljotinu. Camus to pretvara u filozofiju u <em>Mitu o Sizifu</em> — apsurd je doživljaj besmisla, otpor je odluka da unatoč tome živimo. <strong>Stranac</strong>, <em>egzistencijalizam</em>, <em>Sartre</em>, <em>buntovni čovjek</em> — sve ti je tu.</div>
    <div class="hero-meta">
      <span class="hchip br">⏱️ 90 min</span>
      <span class="hchip go">🎯 Fokus: Stranac (obvezatno 2026)</span>
      <span class="hchip te">📚 H09 egzistencijalizam</span>
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
    <button class="tab" onclick="sw(1)" role="tab" aria-selected="false" aria-controls="l1">📖 Stranac</button>
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
      <span class="pill p-go">Camus</span>
      <span class="pill p-r">obvezatno 2026</span>
      <span class="pill p-t">egzistencijalizam + apsurd</span>
    </div>

    <!-- Featured opening quote — Tab 0 emocionalni hook -->
    <div class="featured-quote">
      <div class="fq-mark">«</div>
      <div class="fq-body">
        <div class="fq-text">Danas mi je umrla majka. Možda i jučer, ne znam.</div>
        <div class="fq-meta">— Albert Camus, <em>Stranac</em>, prva rečenica · 1942.</div>
      </div>
      <button type="button" class="fq-copy" onclick="fqCopyQuote(this)" aria-label="Kopiraj citat" title="Kopiraj citat">⎘</button>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Egzistencijalizam — filozofija slobode i besmisla</div>
      <div class="box-int-txt">
        <strong>Egzistencijalizam</strong> (oko <b>1930.–1960.</b>) je filozofski i književni pokret koji nastaje između dva svjetska rata, vrhunac doseže nakon <em>1945.</em> Središnji problem: <b>čovjek u svijetu bez Boga, bez transcendentnog smisla, koji mora sam izabrati tko će biti</b>. Ključni autor za maturu 2026: <strong>Albert Camus — Stranac</strong> (<em>L'Étranger</em>, 1942.) — obvezatno čitanje. Meursault, alžirski činovnik, ne plače na majčinu pogrebu, ubije Arapina pod žarkim suncem, pristane na giljotinu. Roman prikazuje <em><span class="gloss" tabindex="0">apsurd<span class="gloss-tip"><b>Apsurd</b> — temeljni Camusov pojam: razilazak između čovjekove potrebe za smislom i šutnje svijeta. Nije depresija — nego <em>jasno viđenje</em> bezsmisla.</span></span> kao filozofiju, hladan stil prvog lica, otpor društvenim normama i radikalnu iskrenost</em>.
      </div>
    </div>

    <!-- Soft kontekst hint — exam frequency -->
    <div class="soft-hint">
      <div class="soft-hint-ico">💡</div>
      <div class="soft-hint-body">
        Tema <b>egzistencijalizam + Camus / Stranac</b> pojavila se na MAT 2023. i MAT 2024. — Meursaultova ravnodušnost i apsurd su <b>stalni esejski motivi</b>.
      </div>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Brza dijagnostika H09 — 5 pitanja</div>
      <div class="box-int-txt">
        Prije početka, testirajmo što već znaš o <strong>Egzistencijalizmu</strong> i <strong>Camusovom Strancu</strong>. Dobit ćeš prilagođenu preporuku — gdje krenuti i na što se fokusirati.
      </div>
    </div>

    <!-- DIAG widget -->
    <div class="diag" id="diag" data-state="intro">

      <!-- STANJE 1: INTRO -->
      <div class="diag-intro">
        <div class="diag-intro-icon">🎯</div>
        <div class="diag-intro-body">
          <div class="diag-intro-title">Brza dijagnostika — 5 pitanja</div>
          <div class="diag-intro-desc">Provjeri što već znaš o <b>Camusu i Strancu</b> prije nego krenemo. Dobit ćeš personaliziranu preporuku — gdje početi i na što se fokusirati.</div>
          <button type="button" class="diag-btn diag-btn-primary" onclick="diagStart()">▶ Pokreni dijagnostiku</button>
          <button type="button" class="diag-btn diag-btn-ghost" onclick="diagSkip()">Preskoči — odmah na sadržaj ↓</button>
        </div>
      </div>

      <!-- STANJE 2: QUIZ -->
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

      <!-- STANJE 3: RESULT -->
      <div class="diag-result">
        <div class="diag-res" id="diag-res">
          <div class="diag-res-msg" id="diag-res-msg"></div>
          <div class="diag-rec" id="diag-rec"></div>
          <button type="button" class="diag-btn diag-btn-ghost" style="margin-top:12px" onclick="diagRestart()">🔁 Ponovi dijagnostiku</button>
        </div>
      </div>

    </div>

    <!-- Copy toast (lives in Tab 3 citatnik context, but element is global) -->
    <div id="cit-toast" class="cit-toast" role="status" aria-live="polite"></div>

    <!-- SEC 01 — Egzistencijalizam kao epoha -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · Egzistencijalizam — epoha post-rata</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Što je egzistencijalizam</div>
      <div class="box-int-txt">
        Egzistencijalizam je <em>filozofija slobode pred prazninom</em>. Glavna teza: <b>„egzistencija prethodi esenciji"</b> (Sartre). Čovjek se rađa bez unaprijed određene svrhe — <em>tko ćeš biti, određuješ vlastitim izborima</em>. Svijet ne nudi gotov smisao, nego od čovjeka traži da ga sam stvori. Posljedica: <b>radikalna sloboda + radikalna odgovornost</b> = <em>tjeskoba</em>, <em>mučnina</em>, <em>strah pred izborom</em>.
      </div>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">💡 Povijesni okidači (1914.–1945.)</div>
      <div class="box-key-txt">
        <b>(1)</b> <em>Prvi svjetski rat</em> (1914.–1918.) — uništenje vjere u napredak i razum. <b>(2)</b> <em>Velika depresija</em> (1929.) — kraj kapitalističkog optimizma. <b>(3)</b> <em>Uspon totalitarizama</em> (fašizam, nacizam, staljinizam) — pokazuje da masa može poludjeti. <b>(4)</b> <em>Drugi svjetski rat + Holokaust</em> (1939.–1945.) — kraj svake metafizičke utjehe; <em>Auschwitz nakon kojeg je „nemoguće pisati poeziju"</em> (Adorno). <b>(5)</b> <em>Hladni rat + nuklearna prijetnja</em> — egzistencija postaje krhka. <em>U tom kontekstu Camus piše Stranca (1942.) usred okupirane Francuske.</em>
      </div>
    </div>

    <!-- SEC 02 — Apsurd kao filozofski pojam -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · Apsurd — Camusova filozofija</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Što je apsurd</div>
      <div class="box-int-txt">
        Apsurd nije „nelogičnost" ili „glupost". Camus ga definira kao <b>razilazak između čovjekove potrebe za smislom i šutnje svijeta</b>. Čovjek pita „<em>zašto?</em>", svijet ne odgovara. Apsurd se rađa <em>na dodirnoj točki</em> ta dva pola — nije ni u čovjeku ni u svijetu, nego u <b>njihovom susretu</b>.
      </div>
    </div>

    <!-- == SVG: Apsurd anatomija == -->
    <div class="comp-svg-wrap" role="img" aria-label="Vizualna anatomija Camusovog pojma apsurda">
      <svg viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg" class="comp-svg" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="grad-cov" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stop-color="#e0a077" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#7a3a1a" stop-opacity="0.3"/>
          </radialGradient>
          <radialGradient id="grad-svj" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stop-color="#5a8aa8" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#2a4555" stop-opacity="0.3"/>
          </radialGradient>
          <linearGradient id="grad-aps" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#e05252" stop-opacity="0.6"/>
            <stop offset="50%" stop-color="#e8c97a" stop-opacity="0.85"/>
            <stop offset="100%" stop-color="#e05252" stop-opacity="0.6"/>
          </linearGradient>
        </defs>

        <!-- Title -->
        <text x="380" y="32" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="14" fill="#e8e8e8" font-weight="700" letter-spacing="1.5">APSURD · ANATOMIJA POJMA</text>
        <text x="380" y="50" text-anchor="middle" font-family="Source Serif 4, Georgia, serif" font-size="11" fill="#9a9a9a" font-style="italic">apsurd nije ni u čovjeku ni u svijetu — nego u njihovom susretu</text>

        <!-- Left circle: ČOVJEK -->
        <circle cx="180" cy="200" r="80" fill="url(#grad-cov)" stroke="#e0a077" stroke-width="2"/>
        <text x="180" y="195" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="14" fill="#fff" font-weight="700" letter-spacing="1">ČOVJEK</text>
        <text x="180" y="215" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="#fce8d8" letter-spacing="1">treba smisao</text>

        <!-- Right circle: SVIJET -->
        <circle cx="580" cy="200" r="80" fill="url(#grad-svj)" stroke="#5a8aa8" stroke-width="2"/>
        <text x="580" y="195" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="14" fill="#fff" font-weight="700" letter-spacing="1">SVIJET</text>
        <text x="580" y="215" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="#d8e8f0" letter-spacing="1">šuti</text>

        <!-- Center: APSURD (in their gap) -->
        <ellipse cx="380" cy="200" rx="60" ry="34" fill="url(#grad-aps)" stroke="#e8c97a" stroke-width="2"/>
        <text x="380" y="197" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="13" fill="#fff" font-weight="700" letter-spacing="2">APSURD</text>
        <text x="380" y="215" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="#fffaee" letter-spacing="1">razilazak</text>

        <!-- Arrows -->
        <path d="M 260 200 L 320 200" stroke="#e0a077" stroke-width="2" fill="none" marker-end="url(#arrow-r)"/>
        <path d="M 500 200 L 440 200" stroke="#5a8aa8" stroke-width="2" fill="none" marker-end="url(#arrow-l)"/>

        <defs>
          <marker id="arrow-r" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill="#e0a077"/>
          </marker>
          <marker id="arrow-l" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill="#5a8aa8"/>
          </marker>
        </defs>

        <!-- Bottom: 3 reactions -->
        <text x="380" y="290" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="#a8a8a8" letter-spacing="1.5">3 ODGOVORA NA APSURD (Camus)</text>
        
        <g transform="translate(80, 305)">
          <rect x="0" y="0" width="180" height="40" rx="6" fill="#1a1a1a" stroke="#7a3a3a" stroke-width="1"/>
          <text x="14" y="17" font-family="JetBrains Mono, monospace" font-size="9" fill="#e05252" font-weight="700" letter-spacing="1">1. SAMOUBOJSTVO</text>
          <text x="14" y="32" font-family="Source Serif 4, Georgia, serif" font-size="10.5" fill="#c8c8c8" font-style="italic">fizički bijeg — Camus odbija</text>
        </g>
        <g transform="translate(290, 305)">
          <rect x="0" y="0" width="180" height="40" rx="6" fill="#1a1a1a" stroke="#5a5a5a" stroke-width="1"/>
          <text x="14" y="17" font-family="JetBrains Mono, monospace" font-size="9" fill="#9b8068" font-weight="700" letter-spacing="1">2. „FILOZOFSKI BIJEG"</text>
          <text x="14" y="32" font-family="Source Serif 4, Georgia, serif" font-size="10.5" fill="#c8c8c8" font-style="italic">bijeg u religiju — odbija</text>
        </g>
        <g transform="translate(500, 305)">
          <rect x="0" y="0" width="180" height="40" rx="6" fill="#1a1a1a" stroke="#5a8a3a" stroke-width="1"/>
          <text x="14" y="17" font-family="JetBrains Mono, monospace" font-size="9" fill="#7aa55a" font-weight="700" letter-spacing="1">3. POBUNA</text>
          <text x="14" y="32" font-family="Source Serif 4, Georgia, serif" font-size="10.5" fill="#c8c8c8" font-style="italic">živjeti unatoč — Camus bira</text>
        </g>
      </svg>
    </div>

    <div class="box-warn">
      <div class="bw-ico">⚠️</div>
      <div class="bw-body">
        <div class="bw-title">Ne brkati apsurd s nihilizmom!</div>
        <div class="bw-txt"><strong>Nihilizam (Nietzsche)</strong> tvrdi: <em>ništa nema vrijednost, dakle sve je dopušteno</em>. <strong>Apsurd (Camus)</strong> tvrdi: <em>svijet ne nudi smisao, ali ja ipak biram živjeti i pomagati</em>. Camus je <strong>moralist</strong> — apsurd je polazna točka, ne završna. <em>Mit o Sizifu</em> završava: „<strong>treba zamisliti Sizifa sretnim</strong>".</div>
      </div>
    </div>

    <!-- SEC 03 — Albert Camus život -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">03 · Albert Camus (1913.–1960.)</div><div class="sec-line"></div></div>

    <div id="h09c-author-card-camus"></div>

    <div class="box-int">
      <div class="box-int-lbl">💡 10 ključnih činjenica o Camusu</div>
      <div class="box-int-txt">
        Albert Camus (1913.–1960.) je <em>najčitaniji francuski pisac 20. stoljeća</em> i <b>drugi najmlađi dobitnik Nobelove nagrade za književnost</b>. Njegov život — od alžirske sirotinje, kroz Otpor i nacističku okupaciju, do literarnog vrhunca — direktno oblikuje Stranca i filozofiju apsurda. Evo 10 činjenica koje moraš znati za maturu.
      </div>
    </div>

    <ol class="b20-list b20-numbered">
      <li><b>Rođen 7. studenoga 1913.</b> u <em>Mondoviju</em> (danas Dréan), francuskom Alžiru. <em>Pied-noir</em> — francuska obitelj rođena u Alžiru, u koloniji.</li>
      <li><b>Otac umire u I. svjetskom ratu</b> (Marna, 1914.). Camus ga nikad nije upoznao. Majka <em>polugluha, nepismena</em> — radila kao čistačica. <em>Siromaštvo</em> obilježava cijelo djetinjstvo.</li>
      <li><b>Tuberkuloza (1930.)</b> — boluje od 17. godine. Rana smrt obitelji + bolest = <em>izvor egzistencijalnog osjećaja</em>. Ne može u sport (volio nogomet — bio je golman).</li>
      <li><b>Studij filozofije</b> u Alžiru. Diplomirao s tezom o <em>Plotinu i Augustinu</em> (1936.). Mentorom utjecan grčki misao i kasna antika.</li>
      <li><b>Komunistička partija (1935.–1937.)</b> — kratko član, izbačen zbog kritike Sovjeta. Cijeli život anti-totalitarian, ne-marksist, ali socijalno angažiran.</li>
      <li><b>Otpor (1941.–1944.)</b> — uređuje ilegalni list <em>Combat</em> u nacistički okupiranom Parizu. <em>Stranac</em> piše tijekom okupacije, izlazi 1942. u Gallimardu.</li>
      <li><b>Trilogija apsurda</b> (1942.) — <em>Stranac</em> (roman), <em>Mit o Sizifu</em> (esej), <em>Caligula</em> (drama). <b>Tri žanra, jedna tema</b>: kako živjeti bez metafizičke utjehe.</li>
      <li><b>Sukob sa Sartreom (1952.)</b> — <em>Pobunjeni čovjek</em> (1951.) kritizira marksistički teror. Sartre ga napada u <em>Les Temps Modernes</em>. Prijateljstvo gotovo. <em>Camus je sad sam — ali u pravu o GULAG-u</em>.</li>
      <li><b>Nobelova nagrada (1957.)</b> — <em>„za vidovitu književnu produkciju koja s jasnom ozbiljnošću osvjetljava probleme ljudske savjesti našeg vremena"</em>. Drugi najmlađi laureat ikad (44 god.).</li>
      <li><b>Smrt u prometnoj nesreći (4. siječnja 1960.)</b> — auto Michela Gallimarda kod sela Villeblevin, Francuska. Imao je 46 godina. <em>U džepu mu je bila neiskorištena karta za vlak.</em> Apsurdna smrt — tragično ironična.</li>
    </ol>

    <div id="h09c-timeline-camus"></div>

    <!-- SEC 04 — Veliki egzistencijalisti -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">04 · Veliki egzistencijalisti</div><div class="sec-line"></div></div>

    <div id="h09c-compare-camus-sartre"></div>

    <div class="sc-grid">
      <div class="sc">
        <span class="sc-ico hchip br">PRETEČA</span>
        <div class="sc-name">Soren Kierkegaard (1813.–1855.)</div>
        <div class="sc-desc">Danski teolog i filozof. Otac modernog egzistencijalizma. <em>„Tjeskoba (Angst) je vrtoglavica slobode."</em> Pisao o <b>vjerskom skoku</b> — vjera nije logična, ona je <em>strastveni izbor</em>. Utjecao na sve — Heideggera, Sartrea, Camusa.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip go">PRETEČA</span>
        <div class="sc-name">Friedrich Nietzsche (1844.–1900.)</div>
        <div class="sc-desc">Njemački filozof. <em>„Bog je mrtav"</em> (1882.). Kraj metafizičkih sigurnosti. <b>Nadčovjek (Übermensch)</b> — onaj koji kreira vlastite vrijednosti. <em>Vječno vraćanje istog</em>. Camus se s njim u <b>Mitu o Sizifu</b> izričito raspravlja.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip t">FENOMENOLOG</span>
        <div class="sc-name">Martin Heidegger (1889.–1976.)</div>
        <div class="sc-desc">Njemački filozof. <em>Bitak i vrijeme</em> (1927.). <b>Dasein</b> — „bitak-tu", konkretno postojanje. Čovjek je <em>bačen u svijet</em>, mora se odnositi prema vlastitoj smrti. <em>Bivanje-prema-smrti</em> kao izvor autentičnosti. <b>Kontroverzan zbog NSDAP članstva 1933.</b></div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip pa">SUVREMENIK</span>
        <div class="sc-name">Jean-Paul Sartre (1905.–1980.)</div>
        <div class="sc-desc">Francuski filozof i pisac. <em>Bitak i ništavilo</em> (1943.), <em>Mučnina</em> (1938.), <em>Egzistencijalizam je humanizam</em> (1946.). <b>„Egzistencija prethodi esenciji"</b>, <b>„Drugi su pakao"</b>. Marksist nakon rata. Camusov prijatelj — pa neprijatelj. Odbio Nobela 1964.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip re">FILOZOFKINJA</span>
        <div class="sc-name">Simone de Beauvoir (1908.–1986.)</div>
        <div class="sc-desc">Francuska filozofkinja, romansijerka, feministkinja. Sartreova životna partnerica (50 godina, slobodno otvorena veza). <em>Drugi spol</em> (1949.) — <b>„Ne rađa se ženom, postaje se."</b> Egzistencijalistički feminizam.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip br">VJERNIK</span>
        <div class="sc-name">Gabriel Marcel (1889.–1973.)</div>
        <div class="sc-desc">Francuski filozof. <em>Kršćanski egzistencijalizam</em>. Suprotstavlja se Sartreovom ateizmu. <b>„Biti ili imati"</b> — odnos prema bližnjemu vs prema posjedu. Egzistencija nije problema koji se rješava, nego <em>misterij u kojem sudjelujemo</em>.</div>
      </div>
    </div>

    <!-- SEC 05 — Camus filozofija ciklusa -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">05 · Camusovi filozofski ciklusi</div><div class="sec-line"></div></div>

    <div class="tbl">
      <div class="cr"><div class="ck br">CIKLUS APSURDA (1942.)</div><div class="cv"><b>Stranac</b> (roman) · <b>Mit o Sizifu</b> (esej) · <b>Caligula</b> (drama). Centralno pitanje: <em>„Vrijedi li život živjeti?"</em> Odgovor: da, ali bez metafizičkih utjeha. <b>Treba zamisliti Sizifa sretnim.</b></div></div>
      <div class="cr"><div class="ck go">CIKLUS POBUNE (1947.–1951.)</div><div class="cv"><b>Kuga</b> (roman, 1947.) · <b>Pobunjeni čovjek</b> (esej, 1951.) · <b>Pravednici</b> (drama). Pitanje: <em>„Kako živjeti zajedno bez Boga, ali bez tiranije?"</em> Odgovor: <b>solidarnost u patnji</b>. „Pobunjujem se, dakle jesmo."</div></div>
      <div class="cr"><div class="ck t">CIKLUS LJUBAVI (planiran, ostvaren tek djelomično)</div><div class="cv"><b>Pad</b> (roman, 1956.) · <b>Egzil i kraljevstvo</b> (priče, 1957.) · <b>Prvi čovjek</b> (autobiografski roman, nedovršen — pogiba prije završetka). Pitanje: <em>„Što je ljubav nakon apsurda i pobune?"</em></div></div>
    </div>

    <!-- SEC 06 — Stranac u kontekstu -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">06 · Stranac (1942.) — kontekst nastanka</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Roman pod njemačkom okupacijom</div>
      <div class="box-int-txt">
        Camus piše Stranca <em>1940.–1941.</em> u Lyonu i Oranu. <b>Francuska je pod nacističkom okupacijom</b> (od lipnja 1940.). Camus radi u listu <em>Paris-Soir</em>, kasnije se priključuje pokretu otpora. Roman izlazi <b>u Parizu, lipnja 1942.</b>, u izdavačkoj kući Gallimard — <em>uz formalno odobrenje njemačke cenzure</em> (cenzori nisu shvatili filozofsku radikalnost). Iste godine izlazi i <em>Mit o Sizifu</em>. Roman postiže umjereni uspjeh za Camusova života — <b>postaje globalni klasik tek 1950-ih i 1960-ih</b>.
      </div>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">🔑 Alžir — geografski i politički okvir</div>
      <div class="box-key-txt">
        Radnja Stranca odvija se u <b>francuskom Alžiru</b> — koloniji koja je između 1830. i 1962. bila integralni dio Francuske. Camus je sam <em>pied-noir</em> — francuski Europljanin rođen u Alžiru. Romanu daje specifičan <b>mediteranski osjećaj</b>: <em>nemilosrdno sunce, plavo more, suho tlo, žeravica</em>. Sunce nije ukras — <em>ono je akter</em>. <b>Ubojstvo Arapina događa se „zbog sunca"</b>. Mediteranska dimenzija odvaja Camusa od pariških egzistencijalista (Sartrea, de Beauvoir) i veže ga uz <em>antičku grčku misao</em> (rani njegov rad o Plotinu).
      </div>
    </div>

    <div class="box-warn">
      <div class="bw-ico">⚠️</div>
      <div class="bw-body">
        <div class="bw-title">Postkolonijalna kritika — suvremeni kontekst</div>
        <div class="bw-txt">Suvremeni čitatelji često primjećuju da <em>Arapin</em> kojeg Meursault ubije <b>nema imena, glasa ni biografije</b>. To je Camusova slijepa pjega — Alžirci su u njegovom djelu često „pozadina". Alžirsko-francuski autor <b>Kamel Daoud</b> napisao je 2013. roman <em>Meursaultova istraga</em> koji daje glas ubijenom Arapinu (zove se <b>Musa</b>). Ovo je važan kontekst za maturski esej — posebno za <em>Tezu 4 (postkolonijalnu interpretaciju)</em>.</div>
      </div>
    </div>

    <!-- Bridge to Tab 1 -->
    <div class="cheat-card" style="margin-top:24px">
      <div class="cheat-hdr">
        <div class="cheat-hdr-l">
          <div class="cheat-eye">SLJEDEĆE</div>
          <div class="cheat-ttl">Tab 1 · Stranac — deep dive</div>
        </div>
      </div>
      <div class="cheat-grid">
        <div class="cheat-col cheat-col-wide" style="font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.65">
          <p style="margin:0">Sad kad znaš <em>što je egzistencijalizam, što je apsurd, tko je Camus</em> — možeš pristupiti samom romanu. <b>Tab 1</b> donosi: 2-dijela strukture, 6 likova (Meursault, Marie, Raymond, Salamano, Céleste, Tužitelj), 6 simbola (sunce, more, jednoroga vrata, kavana, Marie haljina, giljotina), 5 interpretacija + 7 ključnih scena.</p>
        </div>
      </div>
    </div>

    <!-- SEC: Ujević i hrv. avangarda -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">07 · Tin Ujević i hrvatska avangarda — NCVVO kontekst</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">🇭🇷 Hrvatska avangarda — autori u kontekstu europskog 20. st.</div>
      <div class="box-int-txt">Europska avangarda (futurizam, ekspresionizam, dadaizam, nadrealizam) i hrvatska avangarda odvijaju se paralelno — oba 1910.–1930. NCVVO 2026. uključuje hrv. avangardne autore kao obvezatno gradivo.</div>
    </div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Autor · god.</th><th>Stil</th><th>Ključno djelo 2026.</th><th>Veza s europskim pokretima</th></tr></thead>
        <tbody>
          <tr><td><strong>Tin Ujević</strong><br>1891.–1955.</td><td>Moderna + avangarda, bohemstvo, slobodni stih</td><td><em>Poezija</em> (D19) — Oproštaj, Svakidašnja jadikovka, Notturno</td><td>Pod utjecajem franc. simbolizma (Baudelaire) i talijanske avangarde</td></tr>
          <tr><td><strong>A. B. Šimić</strong><br>1898.–1925.</td><td>Ekspresionizam, kratka dinamična forma</td><td><em>Poezija</em> (D20) — Tijelo i duša, Sirotinja, Molitva na putu</td><td>Hrv. odgovor na njem. ekspresionizam (Trakl, Heym)</td></tr>
          <tr><td><strong>A. G. Matoš</strong><br>1873.–1914.</td><td>Hrv. moderna, impresionizam, simbolizam</td><td><em>Novele</em> (D18) — Camao, Moći ću, Cvijet sa raskršća</td><td>Simbolizam po uzoru na Baudelairea; prethodnik avangarde</td></tr>
        </tbody>
      </table>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">💡 Ujević — 3 stvari koje mora znati za maturu</div>
      <div class="box-signal-txt">
        <b>1. Bohemstvo</b> — Ujević živi na rubu društva, alkohol, siromaštvo, sloboda kao ideal. <b>2. Slobodni stih</b> — odbacuje rimu i metar kao simbol odbacivanja konvencija. <b>3. Egzistencijalna tematika</b> — usamljenost, nostalgija, neostvarena ljubav, sloboda duha vs. bijedan život. <em>Oproštaj</em> i <em>Svakidašnja jadikovka</em> = ključne pjesme za ispit.
      </div>
    </div>

    <div id="h09c-pop-kultura-camus"></div>

    <!-- SEKCIJA 08: PRED-ISPIT CHEAT SHEET -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">08 · Pred-ispit cheat sheet</div><div class="sec-line"></div></div>

    <div class="cheat-card">
      <div class="cheat-hdr">
        <div class="cheat-hdr-l">
          <div class="cheat-eye">QUICK REFERENCE · 30 MIN PRIJE ISPITA</div>
          <div class="cheat-ttl">Sve što moraš pamtiti — H09</div>
        </div>
        <button class="cheat-print" onclick="printCheatSheet()" aria-label="Ispiši cheat sheet">🖨️ Ispiši</button>
      </div>
      <div class="cheat-grid">

        <!-- Datumi & autori -->
        <div class="cheat-col">
          <div class="cheat-col-ttl">📅 Datumi & autori</div>
          <table class="cheat-tbl">
            <tr><td><b>1913.</b></td><td>Albert Camus rođen u Alžiru</td></tr>
            <tr><td><b>1942.</b></td><td><strong>Stranac</strong> (L'Étranger) + Mit o Sizifu — fokus H09</td></tr>
            <tr><td><b>1947.</b></td><td>Kuga (La Peste)</td></tr>
            <tr><td><b>1957.</b></td><td>Nobelova nagrada za književnost</td></tr>
            <tr><td><b>1960.</b></td><td>Camus pogiba u prometnoj nesreći (46 godina)</td></tr>
            <tr><td><b>preteče</b></td><td>Kierkegaard, Nietzsche, Dostojevski; suvremenik Sartre</td></tr>
          </table>
        </div>

        <!-- Top pojmovi -->
        <div class="cheat-col">
          <div class="cheat-col-ttl">📌 Top pojmovi (često na maturi)</div>
          <ul class="cheat-list">
            <li><b>egzistencijalizam</b> — egzistencija prethodi esenciji, čovjek sam stvara smisao</li>
            <li><b>apsurd</b> — sukob čovjekove žudnje za smislom i nijemog svijeta</li>
            <li><b>pobuna (revolt)</b> — Camusov odgovor apsurdu: živjeti unatoč besmislu</li>
            <li><b>Mit o Sizifu</b> — „treba zamisliti Sizifa sretnim"</li>
            <li><b>otuđenje</b> — Meursault stran društvenim normama</li>
            <li><b>ravnodušnost</b> — prema majci, ljubavi, Bogu, vlastitoj sudbini</li>
            <li><b>bijela / objektivna proza</b> — kratke rečenice, prošlo svršeno, bez psihologiziranja</li>
            <li><b>antijunak</b> — pasivni, emocionalno ravnodušni protagonist</li>
            <li><b>„nježna ravnodušnost svijeta"</b> — Meursaultov uvid na kraju</li>
          </ul>
        </div>

        <!-- Stranac — esencijalno -->
        <div class="cheat-col cheat-col-wide">
          <div class="cheat-col-ttl">📖 Stranac — esencijalno za esej</div>
          <div class="cheat-grid-inner">
            <div>
              <div class="cheat-mini-ttl">Autor · godina · vrsta</div>
              <div class="cheat-mini-txt"><b>Camus, 1942.</b> Roman u <b>2 dijela</b>. Filozofija apsurda (ciklus apsurda).</div>
            </div>
            <div>
              <div class="cheat-mini-ttl">Mjesto · vrijeme radnje</div>
              <div class="cheat-mini-txt"><b>Alžir</b> (francuska kolonija), 1940-e. Vrelina, sunce, more.</div>
            </div>
            <div>
              <div class="cheat-mini-ttl">Glavni likovi</div>
              <div class="cheat-mini-txt">
                <em>Meursault</em> — pripovjedač, službenik, ravnodušan<br>
                <em>Marie</em> — djevojka<br>
                <em>Raymond</em> — susjed, uvlači ga u sukob<br>
                <em>Arapin</em> — žrtva; tužitelj i svećenik (II. dio)
              </div>
            </div>
            <div>
              <div class="cheat-mini-ttl">3 ključne scene</div>
              <div class="cheat-mini-txt">
                1. <em>„Danas je umrla majka. Ili možda jučer."</em> (početak)<br>
                2. <em>Ubojstvo na plaži</em> — „zbog sunca" (kraj I. dijela)<br>
                3. <em>Susret sa svećenikom</em> → „nježna ravnodušnost svijeta"
              </div>
            </div>
          </div>
        </div>

        <!-- Esej struktura -->
        <div class="cheat-col cheat-col-wide">
          <div class="cheat-col-ttl">📌 Esej — struktura u 6 koraka</div>
          <ol class="cheat-steps">
            <li><b>Uvod</b> — kontekst (egzistencijalizam, apsurd, Camus) + jasna teza (1 rečenica)</li>
            <li><b>Razrada 1</b> — apsurd i otuđenje Meursaulta + povezivanje s tezom</li>
            <li><b>Razrada 2</b> — centralna scena (ubojstvo, suđenje, svećenik) + citat</li>
            <li><b>Razrada 3</b> — povezivanje s drugim djelom (Kafka H08, Dostojevski H07)</li>
            <li><b>Zaključak</b> — odgovor na polazno pitanje, povratak na tezu</li>
            <li><b>Provjera</b> — minimum 440 riječi, slijed teze, gramatika, HR navodnici</li>
          </ol>
        </div>

        <!-- Što NE smiješ -->
        <div class="cheat-col cheat-col-wide cheat-col-warn">
          <div class="cheat-col-ttl">📌 Što NE smiješ na ispitu</div>
          <ul class="cheat-list cheat-list-warn">
            <li>Reći da je Meursault „lud" ili „psihopat" — on je <b>apsurdni, autentični junak</b></li>
            <li>Tvrditi da ubija iz mržnje ili plana — ubija <b>pasivno, „zbog sunca"</b></li>
            <li>Brkati egzistencijalizam i nihilizam — Camus <b>nije nihilist</b> (pobuna, smisao kroz život)</li>
            <li>Camusa bezrezervno zvati egzistencijalistom — on se <b>ogradio od Sartrea</b> (filozofija apsurda)</li>
            <li>Reći da roman ima 3 dijela — ima <b>2 dijela</b></li>
            <li>Zanemariti društvenu kritiku — sud ga osuđuje jer <b>nije plakao na sprovodu</b></li>
            <li>Pisati esej kraći od 440 riječi (esej se NE vrednuje)</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="nav-row">
      <span class="nb primary" onclick="sw(1)">📖 Stranac ›</span>
    </div>
  </div>

  <!-- ========================
       TAB 1 · STRANAC
       ======================== -->
  <div class="layer" id="l1" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">obvezatno 2026</span>
      <span class="pill p-go">roman</span>
      <span class="pill p-r">2 dijela</span>
      <span class="pill p-t">6 likova · 6 simbola · 5 interpretacija</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Zašto Stranac zaslužuje deep dive</div>
      <div class="box-int-txt">
        <strong>Stranac</strong> (<em>L'Étranger</em>, 1942.) je <em>obvezatno čitanje za maturu 2026.</em> Ispit će provjeriti znanje <b>likova</b> (Meursault, Marie, Raymond, Salamano, Tužitelj, Svećenik), <b>2 dijela kompozicije</b> (do ubojstva / suđenje), <b>filozofije apsurda</b>, <b>simbolike sunca i mora</b>, <b>postupne radikalizacije Meursaultove iskrenosti</b>, <b>5 interpretacija</b> (egzistencijalna, mediteranska, postkolonijalna, juridičko-društvena, autobiografska). Ovo je <em>najvažniji tab cijelog H09</em>.
      </div>
    </div>

    <div id="h09c-hero-quote-stranac"></div>

    <!-- == SVG VIZUALNA KOMPOZICIJA — 2 dijela == -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · Vizualni timeline — 2 dijela kompozicije</div><div class="sec-line"></div></div>

    <div class="box-int" style="margin-bottom:8px">
      <div class="box-int-lbl">💡 Pripovjedna struktura — od života do giljotine</div>
      <div class="box-int-txt">
        Roman ima <b>2 dijela</b>. <em>I. dio</em>: Meursault živi (sahrana majke, veza s Marie, Raymondov problem, ubojstvo Arapina) — <b>6 poglavlja</b>. <em>II. dio</em>: Meursault u zatvoru, suđenje, čekanje smrti — <b>5 poglavlja</b>. <b>Ključna granica</b>: pucanj na plaži u kraju I. dijela. Klikni na <em>krug</em> da vidiš detalje.
      </div>
    </div>

    <div id="h09c-stat-cards-stranac"></div>

    <div class="comp-svg-wrap" role="img" aria-label="Vizualni timeline kompozicije Stranca u dva dijela">
      <svg viewBox="0 0 760 380" xmlns="http://www.w3.org/2000/svg" class="comp-svg" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="grad-s1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#e0a077" stop-opacity="0.7"/>
            <stop offset="100%" stop-color="#e05252" stop-opacity="0.5"/>
          </linearGradient>
          <linearGradient id="grad-s2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#5a5555" stop-opacity="0.7"/>
            <stop offset="100%" stop-color="#3a2a2a" stop-opacity="0.5"/>
          </linearGradient>
        </defs>

        <line x1="60" y1="180" x2="700" y2="180" stroke="#3a3a3a" stroke-width="1" stroke-dasharray="3 4" opacity="0.5"/>
        <text x="60" y="170" font-family="JetBrains Mono, monospace" font-size="9" fill="#9a9a9a" letter-spacing="1">SAHRANA MAJKE</text>
        <text x="700" y="170" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="9" fill="#9a9a9a" letter-spacing="1">GILJOTINA</text>

        <!-- I dio -->
        <rect x="60" y="100" width="320" height="160" rx="8" fill="url(#grad-s1)" opacity="0.18" stroke="#e0a077" stroke-width="1" stroke-opacity="0.4"/>
        <text x="220" y="125" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="11" fill="#e0a077" letter-spacing="2" font-weight="700">I. DIO</text>
        <text x="220" y="146" text-anchor="middle" font-family="Source Serif 4, Georgia, serif" font-size="13" fill="#e8e8e8" font-style="italic">ŽIVOT — 6 POGLAVLJA</text>

        <!-- II dio -->
        <rect x="400" y="100" width="300" height="160" rx="8" fill="url(#grad-s2)" opacity="0.22" stroke="#9b8068" stroke-width="1" stroke-opacity="0.5"/>
        <text x="550" y="125" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="11" fill="#a89090" letter-spacing="2" font-weight="700">II. DIO</text>
        <text x="550" y="146" text-anchor="middle" font-family="Source Serif 4, Georgia, serif" font-size="13" fill="#e8e8e8" font-style="italic">SUĐENJE I ZATVOR — 5 POGL.</text>

        <!-- Hotspots — 4 ključne scene -->
        <g class="comp-hs-group">
          <circle cx="120" cy="190" r="20" fill="#e0a077" opacity="0.85" class="svg-hs comp-hs" tabindex="0"
                  data-tt-ttl="Sahrana majke (1. pogl.)"
                  data-tt-txt="„Danas mi je umrla majka. Možda i jučer, ne znam." Meursault u Mardžengu, ne plače, hladna distanca prema svemu."/>
          <text x="120" y="195" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="13" fill="#fff" font-weight="700" pointer-events="none">?</text>
          
          <circle cx="220" cy="190" r="20" fill="#e8c97a" opacity="0.85" class="svg-hs comp-hs" tabindex="0"
                  data-tt-ttl="Marie (2. pogl.)"
                  data-tt-txt="Sutradan nakon sahrane Meursault sreće Marie, ide na plivanje, kino, ljubav. Pita ga 'voliš li me?' Odgovara: 'to ne znači ništa.'"/>
          <text x="220" y="195" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="13" fill="#fff" font-weight="700" pointer-events="none">🔹</text>
          
          <circle cx="320" cy="190" r="22" fill="#e05252" opacity="0.95" class="svg-hs comp-hs" tabindex="0"
                  data-tt-ttl="Ubojstvo Arapina (6. pogl.)"
                  data-tt-txt="Plaža, sunce u zenitu. Meursault i Raymond susretnu Arape. Meursault puca jednom, pa još četiri puta. 'Bilo je kao da kucam četiri puta na vrata nesreće.'"/>
          <text x="320" y="195" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="13" fill="#fff" font-weight="700" pointer-events="none">🔹</text>

          <circle cx="500" cy="190" r="20" fill="#9b8068" opacity="0.85" class="svg-hs comp-hs" tabindex="0"
                  data-tt-ttl="Suđenje (II. dio, 3-4. pogl.)"
                  data-tt-txt="Sude mu ne za ubojstvo, nego za to što nije plakao na majčinu pogrebu. Tužitelj: 'Optužujem ovog čovjeka da je sahranio majku s kriminalnim srcem.'"/>
          <text x="500" y="195" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="13" fill="#fff" font-weight="700" pointer-events="none">?</text>

          <circle cx="640" cy="190" r="20" fill="#7a3a3a" opacity="0.85" class="svg-hs comp-hs" tabindex="0"
                  data-tt-ttl="Svećenik + giljotina (II. dio, 5. pogl.)"
                  data-tt-txt="Svećenik dolazi u ćeliju, Meursault eksplodira: 'Otvaram se prvi put nježnoj ravnodušnosti svijeta.' Nada se: 'da na pogubljenju bude mnogo gledatelja, da me dočekaju krikovima mržnje.'"/>
          <text x="640" y="195" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="13" fill="#fff" font-weight="700" pointer-events="none">?</text>
        </g>

        <text x="220" y="240" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="#c8c8c8" letter-spacing="1">DOŽIVLJAJ · OPIS · DOSADA</text>
        <text x="550" y="240" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="#c8c8c8" letter-spacing="1">REFLEKSIJA · OBRAĆANJE · BUNT</text>

        <text x="220" y="295" text-anchor="middle" font-family="Source Serif 4, Georgia, serif" font-size="10.5" fill="#a8a8a8" font-style="italic">tijelo, sunce, more, ljubav</text>
        <text x="550" y="295" text-anchor="middle" font-family="Source Serif 4, Georgia, serif" font-size="10.5" fill="#a8a8a8" font-style="italic">društvo, jezik, smrt</text>

        <text x="380" y="320" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#7a7a7a" letter-spacing="2">PUCANJ · GRANICA IZMEĐU DVA SVIJETA</text>

        <!-- Title -->
        <text x="380" y="50" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="14" fill="#e8e8e8" font-weight="700" letter-spacing="1.2">STRANAC · 2 DIJELA</text>
        <text x="380" y="68" text-anchor="middle" font-family="Source Serif 4, Georgia, serif" font-size="11" fill="#9a9a9a" font-style="italic">do ubojstva — pristup je doživljajan; nakon — refleksivan</text>

        <!-- Bottom: Meursaultova skala buntovništva -->
        <text x="60" y="365" font-family="JetBrains Mono, monospace" font-size="9" fill="#7aa55a" letter-spacing="1">MEURSAULT: pasivan</text>
        <text x="380" y="365" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="#7aa55a" letter-spacing="1">MEURSAULT: ravnodušan</text>
        <text x="700" y="365" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="9" fill="#7aa55a" letter-spacing="1">MEURSAULT: pobunjen</text>
        <path d="M 60 350 Q 380 335 700 350" stroke="#7aa55a" stroke-width="1.2" fill="none" opacity="0.5" stroke-dasharray="4 3"/>
      </svg>
    </div>

    <!-- SEC 02 — Glavni likovi -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · Glavni likovi — karakterizacija</div><div class="sec-line"></div></div>

    <div class="sc-grid">
      <div class="sc">
        <span class="sc-ico hchip br">PROTAGONIST</span>
        <div class="sc-name">Meursault</div>
        <div class="sc-desc">Mladić oko <b>30 godina</b>, <em>kancelarijski službenik</em> u Alžiru. Pripovjedač u prvom licu, prezimen samo „Meursault" — <em>nikad ne saznajemo ime</em>. <b>Hladan, distanciran, bez emocionalne hijerarhije</b>. Ne plače na sahrani majke, <em>jer mu nije bilo do plakanja</em>. Voli plivanje, sunce, kavu. Iskreno govori što misli — i upravo zato je <b>opasan</b> za društvo. Ubije Arapina „<em>zbog sunca</em>". Na suđenju ne brani se. Pred smrću eksplodira: „<b>Otvaram se prvi put nježnoj ravnodušnosti svijeta.</b>"</div>
      </div>

      <div class="sc">
        <span class="sc-ico hchip go">LJUBAV</span>
        <div class="sc-name">Marie Cardona</div>
        <div class="sc-desc">Bivša daktilografkinja u Meursaultovoj firmi. Sutradan nakon sahrane majke <em>sastaju se na bazenu</em>. Veza je tjelesna, vesela, plitka. Pita ga: „<em>voliš li me?</em>" Odgovara: „<em>To ne znači ništa, ali mislim da te ne volim</em>." Ipak će se vjenčati ako ona to želi. <b>Marie pokušava razumjeti Meursaulta — ne uspijeva</b>. Na suđenju je njegova jedina utjeha. Posljednji put je vidi prije osude.</div>
      </div>

      <div class="sc">
        <span class="sc-ico hchip re">PRIJATELJ</span>
        <div class="sc-name">Raymond Sintes</div>
        <div class="sc-desc">Susjed Meursaultov, <em>nasilnik prema svojoj djevojci</em> (Mauretanki). Slati pisma da je traži, mlatiti, pa je „rastaviti od sebe". <b>Meursault mu pomaže</b> — bez moralnih rezervacija. Raymond ga vodi na plažu prijatelju Massonu. <em>Sukob s Arapima</em> je posljedica Raymondove svađe. <b>Indirektno uzrok ubojstva.</b> Na suđenju, njegova prijateljstva s Meursaultom postaje <em>otežavajuća okolnost</em>.</div>
      </div>

      <div class="sc">
        <span class="sc-ico hchip pa">SUSJED</span>
        <div class="sc-name">Salamano i pas</div>
        <div class="sc-desc">Stari susjed, živi sa <em>starim šugavim psom</em>. Tuče ga, psuje ga, voli ga. Kad pas pobjegne — <b>Salamano plače</b>. <em>Paralela s Meursaultom?</em> Salamano izvana okrutan, iznutra duboko vezan; Meursault izvana ravnodušan, iznutra ima jedan emocionalni odnos — s majkom (sad pokojnom). Salamano je <b>kontrast i ogledalo</b> istovremeno.</div>
      </div>

      <div class="sc">
        <span class="sc-ico hchip t">SUDAC DRUŠTVA</span>
        <div class="sc-name">Tužitelj</div>
        <div class="sc-desc">Predstavlja <b>društvenu osudu</b>. Optužuje Meursaulta ne za ubojstvo, nego za <em>moralnu deformaciju</em>: „<em>Optužujem ovog čovjeka da je sahranio majku s kriminalnim srcem.</em>" Zahtijeva najteži kazneni postupak — <b>giljotinu</b>. <em>Tužiteljeva retorika je vrhunac suđenja</em>: iz Meursaultove ravnodušnosti gradi sliku „čudovišta bez duše".</div>
      </div>

      <div class="sc">
        <span class="sc-ico hchip br">RELIGIJA</span>
        <div class="sc-name">Svećenik</div>
        <div class="sc-desc">Dolazi u Meursaultovu ćeliju u <em>posljednjem poglavlju</em>. Tri puta je odbijen prije nego što sam dođe. Pokušava nagovoriti Meursaulta da se obrati Bogu, prihvati tajnu zagrobnog života. <b>Meursault eksplodira</b> — vraćena strast, jedina prava emocionalna scena romana. <em>„Sve me to nije ništa, jer ja znam zašto."</em> Svećenik je <b>katalizator</b> Meursaultove finalne pobune.</div>
      </div>
    </div>

    <!-- SEC 03 — Simbolika -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">03 · Simbolika — sunce, more, jezik</div><div class="sec-line"></div></div>

    <div id="h09c-simboli-grid-stranac"></div>

    <!-- SEC 04 — 5 interpretacija -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">04 · 5 glavnih interpretacija</div><div class="sec-line"></div></div>

    <div class="tbl">
      <div class="cr"><div class="ck br">EGZISTENCIJALNO-FILOZOFSKA</div><div class="cv">Stranac je <b>literarni izraz Camusove filozofije apsurda</b>. Meursault je <em>prvi „apsurdni junak"</em> — onaj koji vidi besmisao i ne pretvara se. Roman radi paralelno s <em>Mitom o Sizifu</em>. <b>Najpopularnija interpretacija u nastavi.</b></div></div>
      <div class="cr"><div class="ck go">MEDITERANSKA / ANTIČKA</div><div class="cv">Camus se distancira od pariškog egzistencijalizma. <em>Meursault je „pagan"</em> — vezan uz tijelo, sunce, more. <b>Kontinuitet s grčkom mišlju</b> (Camus je pisao o Plotinu, Augustinu). Mediteran kao <em>mjesto fizičkosti i hladnog razuma</em>.</div></div>
      <div class="cr"><div class="ck t">JURIDIČKO-DRUŠTVENA</div><div class="cv">Roman je <b>kritika francuskog pravosuđa i licemjerja građanskog društva</b>. Meursaulta sude ne za ubojstvo, nego za <em>način postojanja</em>. <b>Tko se ne uklapa = krivac.</b> Camusov anti-totalitarian impuls.</div></div>
      <div class="cr"><div class="ck re">POSTKOLONIJALNA (suvremena)</div><div class="cv">Edward Said i drugi: roman <b>otkriva slijepu pjegu francuskog kolonijalizma</b>. <em>Arapin nema imena, glasa, biografije</em>. Camus, sam pied-noir, nije mogao iskusiti Alžir iz arapske perspektive. <b>Kamel Daoud (2013.)</b> piše <em>Meursaultovu istragu</em> kao odgovor.</div></div>
      <div class="cr"><div class="ck pa">AUTOBIOGRAFSKA</div><div class="cv">Camus dijeli s Meursaultom: <em>siromaštvo</em>, <em>polugluha majka</em>, <em>tuberkuloza</em>, <em>hladan odnos prema religiji</em>, <em>ljubav prema suncu i moru</em>. <b>Nije identifikacija</b> — Meursault je <em>radikalizirani autoportret</em>: što bi bilo da nikad nisam pisao, da nikad nisam pobjegao iz tijela u jezik?</div></div>
    </div>

    <!-- SEC 05 — Stil i pripovjedna tehnika -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">05 · Stil — bijela proza, prvo lice, prošlo nesvršeno</div><div class="sec-line"></div></div>

    <div class="box-key">
      <div class="box-key-lbl">💡 Što čini Camusov stil osebujnim</div>
      <div class="box-key-txt">
        Camus piše <b>écriture blanche</b> — „<em>bijela proza</em>". Kratke rečenice. Subjekt-glagol-objekt. Bez metafora. Bez emocije. <em>Stil odražava Meursaultov pogled</em> — nepretenciozno bilježenje. Pripovjedna tehnika je <b>ja-pripovjedač u prošlom nesvršenom</b> (passé composé) za doživljaje, <em>imperfekt</em> za atmosferu. Sartre piše u eseju o Strancu: „Camusova rečenica je kao <em>sunce u sahari</em> — bez sjene".
      </div>
    </div>

    <div class="tbl">
      <div class="cr"><div class="ck br">PRVO LICE</div><div class="cv">Cijeli roman pripovijeda <b>Meursault sam</b>. Ne znamo ništa što on ne zna. <em>Doživljajna distanca = nula</em>. Ali moralno opažanje? <b>Meursault ne sudi</b>. <em>Čitatelj sudi za njega.</em></div></div>
      <div class="cr"><div class="ck go">PROŠLO NESVRŠENO</div><div class="cv"><em>Passé composé</em> u francuskom = bilježenje pojedinačnih svršenih radnji. <b>„Bilo je vruće. Otišao sam plivati. Susreo sam Marie."</b> <em>Bez kauzalnosti, bez plana</em>. Meursault živi u trenucima, ne u priči.</div></div>
      <div class="cr"><div class="ck t">KRATKE REČENICE</div><div class="cv"><b>Average rečenica: 7 riječi.</b> Pisma, ne proza. Kao <em>policijski izvještaj</em>. Camus je čitao Hemingwaya — američki minimalizam pretočen u francuski.</div></div>
      <div class="cr"><div class="ck re">BEZ METAFORA</div><div class="cv">Sunce <em>nije „kao</em> vatra" — <b>sunce je sunce</b>. Camus odbija stilske ukrase u I. dijelu. <em>Tek u zadnjim stranicama</em> stil eksplodira: dolaze metafore, retorika, strast. <b>Stilska promjena = filozofska promjena.</b></div></div>
      <div class="cr"><div class="ck pa">EKSPLOZIJA U FINALU</div><div class="cv">Posljednje 2 stranice — Meursault prvi put govori <b>strastveno, retorički, dugačkim periodima</b>. <em>„Otvarao sam se prvi put nježnoj ravnodušnosti svijeta..."</em>. Filozofski moment se izrazaja kao <b>stilski lom</b>.</div></div>
    </div>

    <!-- SEC 06 — Ključne scene -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">06 · 7 ključnih scena za ispit</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Scene koje moraš znati</div>
      <div class="box-int-txt">
        Klikni svaku scenu — kontekst + ključni citat + zašto je važna za esej.
      </div>
    </div>

    <div class="scenes">
      <details class="scene" open>
        <summary class="scene-sum">
          <span class="scene-num">01</span>
          <span class="scene-ttl">Prva rečenica · <em>smrt majke</em></span>
          <span class="scene-meta">I/1</span>
        </summary>
        <div class="scene-body">
          <div class="scene-quote">„Danas mi je umrla majka. Možda i jučer, ne znam."</div>
          <div class="scene-why"><b>Zašto važno:</b> Najpoznatiji početak francuske literature 20. stoljeća. <em>Brisanje emocionalne hijerarhije</em>. „Možda i jučer" — datum nije važan. <b>Mora se znati napamet.</b></div>
        </div>
      </details>

      <details class="scene">
        <summary class="scene-sum">
          <span class="scene-num">02</span>
          <span class="scene-ttl">Sahrana majke · <em>distanca</em></span>
          <span class="scene-meta">I/1</span>
        </summary>
        <div class="scene-body">
          <div class="scene-quote">„Nije plakao." (svjedočili će kasnije)</div>
          <div class="scene-why"><b>Zašto važno:</b> Meursault u domu staraca u Marengu, ne želi otvoriti lijes da vidi majku. Provodi noć kraj njega, puši, pije kavu. Sutradan sahrana po žarkom suncu. <em>Ne pruža ritualne emocije</em>. <b>Tu počinje njegov „zločin" pred društvom.</b></div>
        </div>
      </details>

      <details class="scene">
        <summary class="scene-sum">
          <span class="scene-num">03</span>
          <span class="scene-ttl">Marie i kupanje · <em>život</em></span>
          <span class="scene-meta">I/2</span>
        </summary>
        <div class="scene-body">
          <div class="scene-quote">„Pitala me da li je volim. Rekoh joj da to ne znači ništa, ali mi se činilo da je ne volim."</div>
          <div class="scene-why"><b>Zašto važno:</b> Sutradan nakon sahrane Meursault pliv? s Marie. Ide u kino na komediju s Fernandelom. Vode ljubav. <em>Ono što društvo zove „neukus" Meursault zove „život"</em>. <b>Iskrenost koja vrijeđa.</b></div>
        </div>
      </details>

      <details class="scene">
        <summary class="scene-sum">
          <span class="scene-num">04</span>
          <span class="scene-ttl">Ubojstvo Arapina · <em>vrhunac I. dijela</em></span>
          <span class="scene-meta">I/6</span>
        </summary>
        <div class="scene-body">
          <div class="scene-quote">„I to su bila kao četiri kratka kucanja na vrata nesreće."</div>
          <div class="scene-why"><b>Zašto važno:</b> Plaža, sunce u zenitu. Meursault ide pješice, sreće Arapina. Sunce ga žari. <em>Puca jednom — pa još četiri puta u tijelo</em>. Drugi pucnji su filozofski važniji od prvog. <b>To su „četiri kucanja na vrata nesreće".</b> Granica između dva dijela romana.</div>
        </div>
      </details>

      <details class="scene">
        <summary class="scene-sum">
          <span class="scene-num">05</span>
          <span class="scene-ttl">Suđenje — tužiteljev govor · <em>društvena presuda</em></span>
          <span class="scene-meta">II/3-4</span>
        </summary>
        <div class="scene-body">
          <div class="scene-quote">„Optužujem ovog čovjeka da je sahranio majku s kriminalnim srcem."</div>
          <div class="scene-why"><b>Zašto važno:</b> Tužitelj zaobilazi ubojstvo, fokusira se na <em>Meursaultovo ponašanje na sahrani</em>. <b>Sude mu za to što nije plakao.</b> Klasičan primjer kako se društvo brani od tuđosti. <em>„Pravda se igra".</em></div>
        </div>
      </details>

      <details class="scene">
        <summary class="scene-sum">
          <span class="scene-num">06</span>
          <span class="scene-ttl">Sukob sa svećenikom · <em>finalna pobuna</em></span>
          <span class="scene-meta">II/5</span>
        </summary>
        <div class="scene-body">
          <div class="scene-quote">„Iz dna svoje budućnosti, kroz cijeli ovaj život koji sam živio, dizao se neki tamni dah preko godina koje su tek dolazile…"</div>
          <div class="scene-why"><b>Zašto važno:</b> Svećenik dolazi treći put, Meursault eksplodira. <em>Prva i jedina prava emocionalna scena romana</em>. Stilska eksplozija — duga retorička perioda. <b>Stilski lom potvrđuje filozofsko otkriće.</b></div>
        </div>
      </details>

      <details class="scene">
        <summary class="scene-sum">
          <span class="scene-num">07</span>
          <span class="scene-ttl">Posljednja stranica · <em>nježna ravnodušnost</em></span>
          <span class="scene-meta">II/5 · finale</span>
        </summary>
        <div class="scene-body">
          <div class="scene-quote">„Otvarao sam se prvi put nježnoj ravnodušnosti svijeta. Da bih osjećao manje samotnim, ostao mi je samo da poželim da na dan moga pogubljenja bude mnogo gledatelja, da me dočekaju krikovima mržnje."</div>
          <div class="scene-why"><b>Zašto važno:</b> Posljednje rečenice romana. <b>Najslavnije Camusove rečenice.</b> Meursault prihvaća apsurd — <em>svijet je ravnodušan, ali to je nježno (tendre)</em>. „<b>Krikovi mržnje</b>" su paradoksalno potvrda da je živio iskreno. <em>Mora se znati napamet.</em></div>
        </div>
      </details>
    </div>

    <!-- SEC 07 — Camusov stil deep dive -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">07 · Camusov stil — anatomija „bijele proze"</div><div class="sec-line"></div></div>

    <div class="box-key">
      <div class="box-key-lbl">🔑 Što čini scenu „camusovskom"</div>
      <div class="box-key-txt">
        Camusov stil nije samo manjak stila — to je <b>pozitivna estetika minimalizma</b>. (1) <em>Kratke rečenice</em>. (2) <em>Konkretni glagoli i imenice</em>, malo pridjeva. (3) <em>Nema unutrašnjeg monologa</em> — samo opažanja. (4) <em>Senzorni detalji</em> — sunce, znoj, sol. (5) <em>Ravnodušan prema sintaksi društva</em>. Posljedica: <b>tjeskoba bez melodrame</b> — čitatelj sam mora osjetiti ono što pripovjedač ne osjeća.
      </div>
    </div>

    <div class="box-warn">
      <div class="bw-ico">⚠️</div>
      <div class="bw-body">
        <div class="bw-title">Važno za esej</div>
        <div class="bw-txt">Camus <strong>NE osuđuje Meursaulta i NE veliča ga</strong>. <em>Meursault nije model koji treba slijediti</em>. On je <strong>literarni eksperiment</strong> — što bi se dogodilo da netko zaista živi prema apsurdu? Roman pokazuje: <em>društvo bi ga ubilo</em>. To je <strong>kritika društva</strong>, ne preporuka za način života.</div>
      </div>
    </div>

    <!-- Bridge to H10 -->
    <div class="cheat-card" style="margin-top:24px">
      <div class="cheat-hdr">
        <div class="cheat-hdr-l">
          <div class="cheat-eye">H10 PREVIEW</div>
          <div class="cheat-ttl">Camus › klasična tragedija + Sofoklo Antigona</div>
        </div>
      </div>
      <div class="cheat-grid">
        <div class="cheat-col cheat-col-wide" style="font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.65">
          <p style="margin:0">Sljedeće poglavlje vraća se na <b>korijen europskog mišljenja o sudbini</b>: <em>Sofoklo Antigona</em> (oko 442. pr. Kr.) — grčka tragedija. Antigona pokušava sahraniti brata protiv kraljeva zakona. <b>I ona je „stranac" pred državom</b> — kao Meursault. Ali razlika: Antigona ima viši zakon (bogovi, obitelj), Meursault nema ništa. <em>Camus je proučavao grčku tragediju</em>; Sizif, Caligula, Pravednici — sve su djelomično „antigonijska" propitivanja.</p>
        </div>
      </div>
    </div>

    <div id="h09c-compare-stranac-preobrazaj"></div>

    <!-- Navigation -->
    
    <!-- SEC 08 — VIDEO RESURSI — v3.5 -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">08 · Video resursi</div><div class="sec-line"></div></div>

    <div class="prose">Kada ti tekst nije dovoljan — vizualni učenici često bolje pamte kroz video objašnjenja i predstave. Ovdje su pouzdani edukacijski resursi na YouTubeu.</div>

    <div class="yt-grid">
      <a class="yt-card" href="https://www.youtube.com/results?search_query=Camus+Stranac+analiza+lektira+matura+apsurd+hrvatski" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇭🇷</span> HR</div>
          <div class="yt-title">Camus: Stranac — analiza na hrvatskom</div>
        </div>
      </a>

      <a class="yt-card" href="https://www.youtube.com/results?search_query=egzistencijalizam+apsurd+filozofija+Camus+Sartre" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇭🇷</span> HR</div>
          <div class="yt-title">Egzistencijalizam i apsurd — filozofija</div>
        </div>
      </a>

      <a class="yt-card" href="https://www.youtube.com/results?search_query=Camus+The+Stranger+L+Etranger+analysis+absurdism" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇬🇧</span> EN</div>
          <div class="yt-title">The Stranger — analysis &amp; absurdism</div>
        </div>
      </a>

      <a class="yt-card" href="https://www.youtube.com/results?search_query=Albert+Camus+philosophy+absurd+myth+of+sisyphus" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇬🇧</span> EN</div>
          <div class="yt-title">Camus — absurdism &amp; Myth of Sisyphus</div>
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
      <span class="nb" onclick="sw(0)">‹ 📚 Teorija</span>
      <span class="nb primary" onclick="sw(2)">✍️ Esej alat ›</span>
    </div>
  </div>

  <!-- ========================
       TAB 2 · ESEJ ALAT
       ======================== -->
  <div class="layer" id="l2" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">7 teza</span>
      <span class="pill p-go">3 modela teksta</span>
      <span class="pill p-r">5 grešaka</span>
      <span class="pill p-t">brojač + checklist</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Kako se piše esej o Strancu</div>
      <div class="box-int-txt">
        Esej na maturi = <b>min. 440 riječi</b>, <b>uvod-razrada-zaključak</b>, <em>jasna središnja tvrdnja</em>, barem <b>1 citat</b>, barem <b>1 književnoteorijski pojam</b>, povezivanje s drugim djelima. Ovdje imaš <b>7 probranih teza</b>, <b>3 modela teksta</b> (uvod, razrada, zaključak), <b>cheatsheet povezivanja</b>, <b>stilska sredstva</b>, <b>brojač riječi</b> i 10-točka checklist.
      </div>
    </div>

    <!-- SEC 01 — 7 teza -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · 7 teza za esej</div><div class="sec-line"></div></div>

    <div id="h09c-accordion-esej-teze-h09"></div>

    <!-- SEC 02 — Model uvoda -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · Model uvoda eseja</div><div class="sec-line"></div></div>

    <div class="box-key">
      <div class="box-key-lbl">🔑 Primjer uvoda (za Tezu 1 — Apsurd)</div>
      <div class="box-key-txt">
        <em>„Albert Camus (1913.–1960.), francusko-alžirski pisac i dobitnik Nobelove nagrade za književnost 1957., u romanu <b>Stranac</b> (<em>L'Étranger</em>, 1942.) daje književni izraz filozofiji <b>apsurda</b> koju je istovremeno razvijao u eseju <em>Mit o Sizifu</em>. Meursault, alžirski činovnik koji ne plače na majčinu pogrebu i ubije Arapina „zbog sunca", nije ni heroj ni zločinac — on je <b>prvi dosljedni „apsurdni junak" moderne europske književnosti</b>. Kroz hladan stil „bijele proze", prvo lice pripovjedača i dvodijelnu kompoziciju, Camus pokazuje <em>što se događa čovjeku koji zaista živi prema apsurdu — društvo ga sudi i ubija</em>. U ovom eseju pokazat ću kako je Stranac prije svega <b>filozofski roman koji preispituje mogućnost iskrenosti u društvenim konvencijama</b> i kako Meursaultov konačni prijedlog — <em>nježna ravnodušnost svijeta</em> — otvara put od očaja ka pobuni."</em>
      </div>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Anatomija dobrog uvoda — 5 obaveznih elemenata</div>
      <div class="box-int-txt">
        <b>(1)</b> <em>Autor + datacija + djelo</em> — „Albert Camus (1913.–1960.), <em>Stranac</em> (1942.)". <b>(2)</b> <em>Kontekst</em> — Nobelova nagrada, ciklus apsurda, okupirana Francuska. <b>(3)</b> <em>Suženje na temu</em> — „filozofski roman apsurda". <b>(4)</b> <em>Središnja tvrdnja</em> (jedna rečenica) — „pokazat ću kako je Stranac prije svega filozofski roman…". <b>(5)</b> <em>Najava strukture</em>. Ne počinji s općenitostima. <b>Počinji autorom + djelom + tezom.</b>
      </div>
    </div>

    <!-- SEC 03 — Model razrade -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">03 · Model razrade — argumentacijski odlomak</div><div class="sec-line"></div></div>

    <div class="box-key">
      <div class="box-key-lbl">🔑 Primjer odlomka razrade (Teza 1, drugi argument)</div>
      <div class="box-key-txt">
        <em>„Apsurd kod Camusa nije apstraktan pojam — on je <b>utjelovljen u Meursaultovom tijelu i jeziku</b>. Dok pariški egzistencijalisti pišu filozofske traktate (Sartre — <em>Bitak i ništavilo</em>), Camus piše roman u prvom licu, kratkim rečenicama, bez unutarnjeg monologa. Meursaultov pogled je ono što Camus naziva <em>„pogled apsurdnog čovjeka"</em>: bilježenje <b>bez hijerarhije važnosti</b>. Smrt majke, plivanje s Marie, ubojstvo na plaži — sve je rečeno istim tonom. <em>„Bilo je vruće. Otišao sam plivati. Susreo sam Marie."</em> Camus ovaj pristup duguje Hemingwayju, ali ga pretvara u <b>filozofski program</b>. Kao Kafka u <em>Preobražaju</em> (H08) — Camus zna: <em>hladan ton pojačava šok sadržaja</em>. Upravo stilom „bijele proze" roman postiže ono što esej ne može — <b>čitatelj ne uči apsurd, nego ga iskusi</b>."</em>
      </div>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Struktura odlomka razrade — TIPS</div>
      <div class="box-int-txt">
        <b>T</b> — <em>Topic sentence</em>: jasna mikro-teza odlomka.<br>
        <b>I</b> — <em>Ilustracija</em>: konkretan primjer iz teksta ili citat.<br>
        <b>P</b> — <em>Pojašnjenje</em>: što ilustracija znači u odnosu na tezu.<br>
        <b>S</b> — <em>Sinteza</em>: povezivanje s drugim djelom, autorom ili književnoteorijskim pojmom.<br>
        <em>3 odlomka razrade × 4 rečenice = ~120–180 riječi po odlomku</em>.
      </div>
    </div>

    <!-- SEC 04 — Model zaključka -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">04 · Model zaključka — sinteza i otvaranje</div><div class="sec-line"></div></div>

    <div class="box-key">
      <div class="box-key-lbl">🔑 Primjer zaključka</div>
      <div class="box-key-txt">
        <em>„Stranac nije roman o ubojstvu — on je <b>ogledalo modernog čovjeka pred smrću bez Boga</b>. Meursault nije model koji treba slijediti, ali njegova konačna pobuna — strastveni sukob sa svećenikom i prihvaćanje <em>nježne ravnodušnosti svijeta</em> — otvara Camusov <em>ciklus apsurda</em> prema sljedećem ciklusu pobune (<b>Kuga</b>, 1947.). Ono što Kafka u <em>Preobražaju</em> (1915.) ostavlja bez izlaza, Camus transformira u <b>estetski i filozofski program</b>: živjeti unatoč besmislu, jer „treba zamisliti Sizifa sretnim". Upravo zato Stranac ostaje, više od osam desetljeća kasnije, <em>jedan od najvažnijih romana 20. stoljeća</em> — ne zato što nudi odgovore, nego zato što postavlja pitanje koje ne zastarjeva: <b>što činiti kad smisao ne dolazi izvana?</b>"</em>
      </div>
    </div>

    <!-- SEC 05 — Cheatsheet povezivanja -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">05 · Cheatsheet — povezivanje s drugim djelima</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">💡 7 najboljih paralela</div>
      <div class="box-int-txt">
        Ocjenjivači vole kad esej povezuje djelo s drugima. Izaberi paralelu koja <em>najbolje odgovara tvojoj tezi</em>.
      </div>
    </div>

    <div class="tbl">
      <div class="cr"><div class="ck br">KAFKA · Preobražaj (H08)</div><div class="cv"><b>Gregor i Meursault</b> — obojica otuđeni, neobjašnjivi, ne-svadljivi s normama. <b>Razlika</b>: Gregor je <em>pasivan</em> (preobrazba ga zatekne), Meursault je <em>aktivan</em> (ubije, pristane). <em>Camus razvija što je Kafka anticipirao</em> — u Mitu o Sizifu izričito piše o Kafki.</div></div>
      
      <div class="cr"><div class="ck go">DOSTOJEVSKI · Zločin i kazna (H07)</div><div class="cv"><b>Raskoljnikov i Meursault</b> — obojica ubojice, ali <em>razlog je radikalno drugačiji</em>. Raskoljnikov ubije „po teoriji" (nadčovjek). Meursault ubije <em>bez teorije</em> — „zbog sunca". <b>Dostojevski: iskupljenje kroz patnju</b> (Sonja, Sibir). <b>Camus: iskupljenje ne postoji</b>, nego pobuna kroz prihvaćanje.</div></div>
      
      <div class="cr"><div class="ck t">SARTRE · Mučnina (1938.)</div><div class="cv">Sartreov <b>Roquentin</b> u Mučnini osjeća „<em>mučninu</em>" pred besmislom predmeta. Obojica: <em>ja-pripovjedači u dnevnicima</em>. Razlika: Sartre je <b>apstraktno-filozofski</b>, Camus je <b>konkretno-tjelesni</b>. Sartre: pariški intelektualac; Camus: alžirski pied-noir. <em>Zajednički egzistencijalni osjećaj — različiti stil.</em></div></div>
      
      <div class="cr"><div class="ck re">GOETHE · Werther (H05)</div><div class="cv"><b>Werther i Meursault</b> — <em>rani i kasni subjektivizam</em>. Werther je <em>romantički otuđen</em> (Sturm und Drang, pretjerane emocije). Meursault je <em>moderno otuđen</em> (apsurd, potpuno odsutstvo emocije). <b>Werther aktivno bira smrt</b>; <b>Meursault je pasivno pristaje</b>. Obojica su „stranci" — različiti načini.</div></div>
      
      <div class="cr"><div class="ck pa">SHAKESPEARE · Hamlet (H03)</div><div class="cv"><b>Hamlet i Meursault</b> — oba u krizi identiteta pred očekivanjima društva. Hamlet <em>previše misli</em>, Meursault <em>premalo osjeća</em>. <b>Obojica ne djeluju kako se od njih očekuje</b>. Hamlet monologizira („biti ili ne biti"); Meursault ne — ali „eksplodira" u posljednjim stranicama. <em>Kriza subjekta s renesanse do modernizma.</em></div></div>
      
      <div class="cr"><div class="ck br">CAMUS · Mit o Sizifu (1942.)</div><div class="cv">Stranac i Mit o Sizifu su <b>dvostruka objava iste godine</b>. Roman = ilustracija; esej = teorija. Mit završava: „<em>treba zamisliti Sizifa sretnim</em>". Meursault dolazi do istog zaključka u finalu — <em>prihvaća nježnu ravnodušnost</em>. <b>Dvostruki portret apsurda.</b></div></div>
      
      <div class="cr"><div class="ck go">CAMUS · Mit o Sizifu — direktna paralela</div><div class="cv">Camus u Mitu piše: „<em>Treba zamisliti da je Sizif sretan. Borba sama prema visinama dovoljna je da ispuni srce čovjeka.</em>" Meursault u finalu: „<em>Otvarao sam se prvi put nježnoj ravnodušnosti svijeta.</em>" — <b>isti filozofski moment, dvije formulacije</b>. Pobuna = prihvaćanje + djelovanje unatoč.</div></div>
    </div>

    <!-- DEEP DIVE: Meursault vs Gregor comparator -->
    <div class="box-int" style="margin-top:22px">
      <div class="box-int-lbl">💡 Najjača paralela — Meursault vs Gregor Samsa (deep dive)</div>
      <div class="box-int-txt">
        Obojica su otuđeni protagonisti modernizma — ali u potpuno različitim svjetovima. Iskoristi comparator za <em>direktno citiranje razlika</em> u eseju.
      </div>
    </div>

    <div class="comparator">
      <div class="comp-head">
        <div class="comp-side left">Meursault</div>
        <div class="comp-vs">VS</div>
        <div class="comp-side right">Gregor Samsa</div>
      </div>
      <div class="comp-row">
        <div class="comp-cell left"><b>Aktivan</b> — ubije, pristane na smrt, eksplodira pred svećenikom</div>
        <div class="comp-label">tip</div>
        <div class="comp-cell right"><b>Pasivan</b> — preobrazba ga zatekne, ne može djelovati</div>
      </div>
      <div class="comp-row">
        <div class="comp-cell left"><b>Psihološka</b> otuđenost — ravnodušnost, ne-osjećaj</div>
        <div class="comp-label">otuđenje</div>
        <div class="comp-cell right"><b>Tjelesna</b> preobrazba — postaje kukac</div>
      </div>
      <div class="comp-row">
        <div class="comp-cell left"><b>Plaža + sudnica + ćelija</b> — sunčani prostori</div>
        <div class="comp-label">prostor</div>
        <div class="comp-cell right"><b>Soba</b> — klaustrofobičan prostor koji se sužava</div>
      </div>
      <div class="comp-row">
        <div class="comp-cell left"><b>Ima</b> — „nježna ravnodušnost", prihvaćanje apsurda</div>
        <div class="comp-label">izlaz</div>
        <div class="comp-cell right"><b>Nema</b> — Gregor umire bez iskupljenja</div>
      </div>
      <div class="comp-row">
        <div class="comp-cell left"><b>Apsurd kao filozofija</b> — eksplicitno formuliran</div>
        <div class="comp-label">filozofski okvir</div>
        <div class="comp-cell right"><b>Apsurd kao parabola</b> — implicitno, bez objašnjenja</div>
      </div>
      <div class="comp-row">
        <div class="comp-cell left"><b>Bijela proza</b>, prvo lice, kratke rečenice</div>
        <div class="comp-label">stil</div>
        <div class="comp-cell right"><b>Hladan izvještajni stil</b>, treće lice, free indirect speech</div>
      </div>
      <div class="comp-row">
        <div class="comp-cell left"><b>Egzistencijalizam</b>, postwar Francuska (1942.)</div>
        <div class="comp-label">epoha</div>
        <div class="comp-cell right"><b>Moderna, ekspresionizam</b>, pred-WW1 Prag (1915.)</div>
      </div>
    </div>

    <!-- SEC 06 — Stilska sredstva -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">06 · Stilska sredstva — što navesti u eseju</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">💡 9 stilskih sredstava s primjerima iz teksta</div>
      <div class="box-int-txt">
        Ocjenjivači vole kad pokažeš da razumiješ <b>kako</b> autor postiže efekt, ne samo <b>što</b> piše.
      </div>
    </div>

    <div class="tbl">
      <div class="cr"><div class="ck br">BIJELA PROZA (écriture blanche)</div><div class="cv">Minimalistički stil bez metafora i emocionalnih oznaka. <em>„Bilo je vruće. Otišao sam plivati."</em> — klasičan primjer Camusove rečenice.</div></div>
      
      <div class="cr"><div class="ck go">PRVO LICE U PROŠLOM NESVRŠENOM</div><div class="cv">Pripovjedač je sam Meursault; vrijeme je passé composé (bilježenje pojedinačnih radnji). <em>„Ustao sam. Popio sam kavu. Otišao sam na posao."</em> — Meursault živi u trenucima.</div></div>
      
      <div class="cr"><div class="ck t">APSURD (stilska realizacija)</div><div class="cv">Spoj nevažnog i ozbiljnog istim tonom. <em>Na pogrebu majke primjećuje crni znoj nadglednika</em> — istom pažnjom kao što bi primijetio sahranu. <b>Apsurd je u proporciji.</b></div></div>
      
      <div class="cr"><div class="ck re">IRONIJA</div><div class="cv">Razlika između izrečenog i mišljenog. <em>Tužitelj: „Optužujem ovog čovjeka da je sahranio majku s kriminalnim srcem."</em> — ironija kazuje da je stvarni zločin ubojstvo, ali se sudi za ponašanje na pogrebu.</div></div>
      
      <div class="cr"><div class="ck pa">SIMBOL</div><div class="cv">Konkretan element nosi apstraktno značenje. <em>Sunce = nemilosrdni svijet, more = sloboda, giljotina = društvena osveta, zvijezde = nježna ravnodušnost.</em></div></div>
      
      <div class="cr"><div class="ck br">SINESTEZIJA</div><div class="cv">Spoj različitih osjetila. Camus opisuje sunce kao <em>taktilni udar</em> („sunce me udaralo u leđa"), <em>akustičan</em> („čuo sam kako sunce rasprsava"). <b>Fizičko iskustvo apsurda.</b></div></div>
      
      <div class="cr"><div class="ck go">ALITERACIJA / ZVUČNE FIGURE</div><div class="cv">Camus gradi ritam suglasnicima. „<em>Ce soleil sur ma tete</em>" — <b>s/s/s</b> kao šištanje sunca. U hrvatskom prijevodu nešto od toga nestaje.</div></div>
      
      <div class="cr"><div class="ck t">KONTRAST I/II DIJELA</div><div class="cv"><b>I. dio</b>: senzualni detalji, kratke rečenice. <b>II. dio</b>: dijalog, sudovi, refleksija. <em>Stil prati kompoziciju</em>. Eksplicitno u finalu — duge retoričke periode.</div></div>
      
      <div class="cr"><div class="ck re">KATAFORA / SPORO OTKRIVANJE</div><div class="cv">Meursaultova „ludost" (za društvo) sporo se otkriva kroz naizgled banalne detalje. <em>„Nisam htio reći da nisam, ali mi se činilo da nisam imao razloga."</em> — jedna rečenica, cijeli je Meursaultov moralni profil.</div></div>
    </div>

    <!-- SEC 07 — 5 grešaka -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">07 · 5 najčešćih grešaka u eseju</div><div class="sec-line"></div></div>

    <div class="con">
      <div class="cr"><div class="ck br">GREŠKA 1</div><div class="cv"><b>Smatrati Meursaulta „hladnokrvnim ubojicom".</b> Meursault <em>nije psihopat</em>. On je <em>čovjek koji ne laže</em>. Tužitelj ga pretvara u čudovište — esej ne smije ponavljati tužiteljevu retoriku. Korektno: <em>„Meursault je apsurdni junak — iskrenost bez društvene utjehe čini ga strancem."</em></div></div>
      
      <div class="cr"><div class="ck go">GREŠKA 2</div><div class="cv"><b>Brkati apsurd s nihilizmom.</b> Nihilizam: „<em>ništa nema vrijednost</em>". Apsurd: „<em>svijet ne nudi smisao, ali ja ipak biram živjeti</em>". Camus je <b>moralist</b>. <em>Treba zamisliti Sizifa sretnim.</em></div></div>
      
      <div class="cr"><div class="ck pa">GREŠKA 3</div><div class="cv"><b>Ignorirati II. dio.</b> Previše eseja fokusira se na ubojstvo i zanemaruje suđenje. <b>II. dio je filozofski vrhunac</b>. Finalna scena sa svećenikom je gdje roman „postaje" Stranac.</div></div>
      
      <div class="cr"><div class="ck t">GREŠKA 4</div><div class="cv"><b>Ignorirati postkolonijalni kontekst.</b> Arapin koji je ubijen <em>nema imena</em>. To nije slučajno — to je slijepa pjega francuskog kolonijalizma. Spomeni <em>Kamela Daouda i Meursaultovu istragu</em> (2013.).</div></div>
      
      <div class="cr"><div class="ck re">GREŠKA 5</div><div class="cv"><b>Reducirati Stranac na egzistencijalizam.</b> Camus je <em>odbijao da se naziva egzistencijalistom</em>. Bio je <b>filozof apsurda i pobune</b>. Razlika je važna: egzistencijalisti (Sartre) su pariški intelektualci, Camus je mediteranski pied-noir. <em>Različita estetika i filozofija.</em></div></div>
    </div>

    <!-- SEC 08 — Brojač -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">08 · Brojač riječi i znakova</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Provjeri svoj esej prije predaje</div>
      <div class="box-int-txt">
        Zalijepi tekst eseja u polje ispod — automatski ćeš vidjeti broj riječi, znakova, odlomaka i procijenjeno vrijeme čitanja. <b>Cilj: minimum 440 riječi</b>. <em>Optimalno: 500–700 riječi</em>. Tekst ostaje u tvom pregledniku.
      </div>
    </div>

    <div class="wc-box">
      <div class="wc-hdr">
        <span class="wc-ttl">🧮 Brojač eseja</span>
        <span class="wc-sub">cilj: <b>min. 440 riječi</b> · optimalno 500–700</span>
      </div>
      <textarea class="wc-textarea" id="wc-textarea" placeholder="Zalijepi ili upiši tekst eseja ovdje…&#10;&#10;Brojač će automatski računati riječi, znakove, odlomke i približno vrijeme čitanja."></textarea>
      <div class="wc-stats">
        <div class="wc-stat" id="wc-words-stat">
          <div class="wc-stat-num" id="wc-words">0</div>
          <div class="wc-stat-lbl">RIJEČI</div>
        </div>
        <div class="wc-stat">
          <div class="wc-stat-num" id="wc-chars">0</div>
          <div class="wc-stat-lbl">ZNAKOVA</div>
        </div>
        <div class="wc-stat">
          <div class="wc-stat-num" id="wc-chars-no-spaces">0</div>
          <div class="wc-stat-lbl">BEZ RAZMAKA</div>
        </div>
        <div class="wc-stat">
          <div class="wc-stat-num" id="wc-paragraphs">0</div>
          <div class="wc-stat-lbl">ODLOMAKA</div>
        </div>
        <div class="wc-stat">
          <div class="wc-stat-num" id="wc-time">0 min</div>
          <div class="wc-stat-lbl">ČITANJE</div>
        </div>
      </div>
      <div class="wc-progress" id="wc-progress">
        <span style="font-family:var(--mono);font-size:9.5px;color:var(--t3);letter-spacing:1px">CILJ 440</span>
        <div class="wc-progress-bar-wrap"><div class="wc-progress-bar" id="wc-progress-bar"></div></div>
        <span class="wc-progress-lbl" id="wc-progress-lbl">0 / 440</span>
      </div>
      <div class="wc-actions">
        <button type="button" class="wc-btn" onclick="wcClear()">🧹 Očisti</button>
        <button type="button" class="wc-btn" onclick="wcCopy()">📋 Kopiraj</button>
      </div>
      <div class="wc-hint">
        <b>📌 Tip:</b> Camusov esej s 5 odlomaka × 5 rečenica × 14 riječi ? <b>350 riječi</b> — premalo. Cilj je ? <b>440 riječi</b>: 5 odlomaka × 6 rečenica × 18 riječi ? <em>540 riječi</em>. Drži se TIPS strukture.
      </div>
    </div>

    <!-- SEC 09 — Checklist -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">09 · Checklist prije predaje eseja</div><div class="sec-line"></div></div>

    <div class="box-key">
      <div class="box-key-lbl">💡 10 provjera prije predaje</div>
      <div class="box-key-txt">
        <ol style="margin:0;padding-left:20px;line-height:1.8">
          <li><b>Minimum 440 riječi.</b> Ako je kraći, esej se NE vrednuje.</li>
          <li><b>Uvod-razrada-zaključak.</b> Središnja tvrdnja u uvodu, 2–3 argumenta u razradi, zaključak koji vraća na tezu.</li>
          <li><b>Jasna središnja tvrdnja.</b> 1 rečenica u uvodu.</li>
          <li><b>Kontekst autora i djela.</b> Albert Camus (1913.–1960.), francusko-alžirski pisac, pied-noir, Nobelova 1957., <em>Stranac</em> (1942.), roman, 2 dijela, egzistencijalizam/apsurd.</li>
          <li><b>Bar 1 citat.</b> „Danas mi je umrla majka. Možda i jučer, ne znam." / „Otvarao sam se prvi put nježnoj ravnodušnosti svijeta." / „Optužujem ovog čovjeka da je sahranio majku s kriminalnim srcem."</li>
          <li><b>Bar 1 književnoteorijski pojam.</b> <em>Apsurd / egzistencijalizam / bijela proza (écriture blanche) / prvo lice / pied-noir / izvještajni ton / ciklus apsurda</em>.</li>
          <li><b>Povezivanje s drugim djelom.</b> Kafka, Dostojevski, Sartre, Goethe, Hamlet. Vidi cheatsheet (SEC 05).</li>
          <li><b>Hrvatski pravopis.</b> <em>Navodnici „…"</em>. Camus se ne sklanja u pluralu: Camusov, Camusa. Meursault: Meursaulta, Meursaultu.</li>
          <li><b>Odlomci.</b> Minimum 3 (uvod, razrada, zaključak). Preporučno 4–5.</li>
          <li><b>Gramatika.</b> Kongruencija, pravopis, interpunkcija.</li>
        </ol>
      </div>
    </div>

    <div class="nav-row">
      <span class="nb" onclick="sw(1)">‹ 📖 Stranac</span>
      <span class="nb primary" onclick="sw(3)">💬 Citatnik ›</span>
    </div>
  </div>

  <!-- ========================
       TAB 3 · CITATNIK
       ======================== -->
  <div class="layer" id="l3" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">arsenal</span>
      <span class="pill p-go">40 citata</span>
      <span class="pill p-r">8 napamet</span>
      <span class="pill p-t">tez + razina + random</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Citati — arsenal za esej o Camusu / Strancu</div>
      <div class="box-int-txt">
        <em>Citat u pravom trenutku vrijedi 1–2 boda</em> u argumentaciji eseja. <b>40 probranih citata</b>: <em>Meursault</em> (12), Marie (4), Raymond (3), Salamano (2), Tužitelj (3), Svećenik (3), majka (2), plus <b>5 Camusovih biografskih/teorijskih</b> (Mit o Sizifu, Pobunjeni čovjek, Nobelov govor) i <b>6 interpretatora i kontekst</b> (Sartre, Barthes, Said, Daoud, Adorno). <strong>Filtriraj po tezi</strong> (T1–T7), <strong>po razini</strong> (osnovno/napredno), ili pokreni <em>🎲 Random</em>. <b>8 must-know citata</b> označeno je <em>⭐ Napamet</em>.
      </div>
    </div>

    <div class="cit-filters">
      <button class="cit-fbtn active" data-filter="all" onclick="citFilter('all', this)">Svi (40)</button>
      <button class="cit-fbtn fspec" data-filter="must" onclick="citFilter('must', this)">⭐ Napamet (8)</button>
      <button class="cit-fbtn" data-filter="meursault" onclick="citFilter('meursault', this)">📌 Meursault (12)</button>
      <button class="cit-fbtn" data-filter="marie" onclick="citFilter('marie', this)">📌 Marie (4)</button>
      <button class="cit-fbtn" data-filter="raymond" onclick="citFilter('raymond', this)">📌 Raymond (3)</button>
      <button class="cit-fbtn" data-filter="salamano" onclick="citFilter('salamano', this)">📌 Salamano (2)</button>
      <button class="cit-fbtn" data-filter="tuzitelj" onclick="citFilter('tuzitelj', this)">📌 Tužitelj (3)</button>
      <button class="cit-fbtn" data-filter="svecenik" onclick="citFilter('svecenik', this)">📌 Svećenik (3)</button>
      <button class="cit-fbtn" data-filter="egzist-porodica" onclick="citFilter('egzist-porodica', this)">📌 Majka (2)</button>
      <button class="cit-fbtn" data-filter="camus" onclick="citFilter('camus', this)">📌 Camus biograf. (5)</button>
      <button class="cit-fbtn" data-filter="kontekst" onclick="citFilter('kontekst', this)">📌 Kontekst (6)</button>
    </div>

    <div class="cit-subfilters" role="group" aria-label="Dodatni filteri">
      <span class="cit-sublbl">Tez:</span>
      <button type="button" class="cit-diffbtn active" data-tez="all" onclick="citFilterByTez('all', this)">Sve</button>
      <button type="button" class="cit-diffbtn" data-tez="1" onclick="citFilterByTez(1, this)">T1</button>
      <button type="button" class="cit-diffbtn" data-tez="2" onclick="citFilterByTez(2, this)">T2</button>
      <button type="button" class="cit-diffbtn" data-tez="3" onclick="citFilterByTez(3, this)">T3</button>
      <button type="button" class="cit-diffbtn" data-tez="4" onclick="citFilterByTez(4, this)">T4</button>
      <button type="button" class="cit-diffbtn" data-tez="5" onclick="citFilterByTez(5, this)">T5</button>
      <button type="button" class="cit-diffbtn" data-tez="6" onclick="citFilterByTez(6, this)">T6</button>
      <button type="button" class="cit-diffbtn" data-tez="7" onclick="citFilterByTez(7, this)">T7</button>
      <span class="cit-sublbl" style="margin-left:12px">Razina:</span>
      <button type="button" class="cit-diffbtn active" data-diff="all" onclick="citFilterByDiff('all', this)">Sve</button>
      <button type="button" class="cit-diffbtn" data-diff="basic" onclick="citFilterByDiff('basic', this)">Osnovno</button>
      <button type="button" class="cit-diffbtn" data-diff="advanced" onclick="citFilterByDiff('advanced', this)">Napredno</button>
      <button type="button" class="cit-diffbtn" id="cit-favonly-btn" onclick="citToggleFavOnly()" aria-label="Prikaži samo favorite" title="Prikaži samo favorite">❤️ Favoriti (<span id="cit-fav-count">0</span>)</button>
      <button type="button" class="cit-random" onclick="citRandom()" aria-label="Slučajan citat">🎲 Random</button>
    </div>

    <div class="cit-count" aria-live="polite">
      <span><b id="cit-visible">40</b> od <span id="cit-total">40</span> citata prikazano</span>
      <button type="button" class="cit-count-clear" id="cit-count-clear" onclick="citClearFilters()">Resetiraj filtere</button>
    </div>

    <div class="cit-empty" id="cit-empty">
      <b>Nema rezultata</b>Niti jedan citat ne zadovoljava trenutne filtere. Probaj drugu kombinaciju ili resetiraj filtere.
    </div>

    
    <div class="cit-search-row" style="margin:14px 0 16px;display:flex;gap:8px;align-items:center">
      <label for="cit-search" class="sr-only" style="position:absolute;left:-9999px">Pretraži citate</label>
      <span style="font-size:18px;color:var(--gold,#e9b446)">⭐</span>
      <input type="search" id="cit-search" class="cit-search" placeholder="Pretraži citate (npr. Camus, Meursault, apsurd, stranac)…" aria-label="Pretraži citate" autocomplete="off"
        style="flex:1;padding:10px 14px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:10px;color:var(--t1,#f4ede5);font-family:var(--mono,monospace);font-size:13px"
        oninput="citSearch(this.value)">
      <button type="button" class="cit-clear" onclick="document.getElementById('cit-search').value='';citSearch('')" aria-label="Očisti pretragu" title="Očisti"
        style="padding:8px 12px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:8px;color:var(--t2,#c5b8aa);cursor:pointer;font-size:14px">✕</button>
    </div>
<div class="cit-grid">

      <!-- == MEURSAULT — protagonist (12 citata) == -->
      <div class="cit-card must-know" data-cat="meursault" data-cit-id="h09c01" data-diff="basic" data-tez="1,2,5,6">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">MEURSAULT</span><span class="cit-eye-must">⭐ Napamet</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, I/1 — prva rečenica</span></div>
        <div class="cit-txt">„Danas mi je umrla majka. Možda i jučer, ne znam."</div>
        <div class="cit-tez-row"><span class="cit-tez">T1</span><span class="cit-tez">T2</span><span class="cit-tez">T6</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> <em>Najpoznatiji početak francuske književnosti 20. stoljeća</em>. „Možda i jučer" — datum nije važan. <b>Brisanje emocionalne hijerarhije</b>. Za <b>Tezu 1</b> (apsurd) i <b>Tezu 2</b> (Meursault — lik koji ne laže). MORA se znati napamet — neizostavan u svakom eseju.</div>
      </div>

      <div class="cit-card must-know" data-cat="meursault" data-cit-id="h09c02" data-diff="basic" data-tez="1,7">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">MEURSAULT</span><span class="cit-eye-must">⭐ Napamet</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, II/5 — posljednje rečenice</span></div>
        <div class="cit-txt">„Otvarao sam se prvi put nježnoj ravnodušnosti svijeta."</div>
        <div class="cit-tez-row"><span class="cit-tez">T1</span><span class="cit-tez">T7</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> <b>Filozofski vrhunac romana</b>. Meursault prihvaća apsurd — svijet je ravnodušan, ali to je <em>nježno (tendre)</em>. <b>Pobuna kao oslobođenje</b>. Za <b>Tezu 7</b> (pobuna) i <b>Tezu 1</b> (apsurd). MORA napamet — kraj svakog eseja koji govori o filozofiji apsurda.</div>
      </div>

      <div class="cit-card must-know" data-cat="meursault" data-cit-id="h09c03" data-diff="basic" data-tez="3,6">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">MEURSAULT</span><span class="cit-eye-must">⭐ Napamet</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, I/6 — ubojstvo</span></div>
        <div class="cit-txt">„I to su bila kao četiri kratka kucanja na vrata nesreće."</div>
        <div class="cit-tez-row"><span class="cit-tez">T3</span><span class="cit-tez">T6</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Nakon prvog pucnja, Meursault puca <em>još četiri puta</em>. „Četiri kucanja na vrata nesreće" je metafora koja označava <b>ulazak u svijet kazne</b>. Za <b>Tezu 6</b> (granica I/II dijela) i <b>Tezu 3</b> (sunce kao akter — pucnjevi su odgovor suncu). MORA napamet.</div>
      </div>

      <div class="cit-card must-know" data-cat="meursault" data-cit-id="h09c04" data-diff="basic" data-tez="2,4">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">MEURSAULT</span><span class="cit-eye-must">⭐ Napamet</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, I/2 — razgovor s Marie</span></div>
        <div class="cit-txt">„Pitala me da li je volim. Rekoh joj da to ne znači ništa, ali mi se činilo da je ne volim."</div>
        <div class="cit-tez-row"><span class="cit-tez">T2</span><span class="cit-tez">T4</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Meursaultov <em>radikalni odbijanje konvencionalnog jezika ljubavi</em>. Ne kaže „volim" jer ne osjeća. Za <b>Tezu 2</b> (Meursault — lik koji ne laže) i <b>Tezu 4</b> (kritika društvenog licemjerja). Pokazuje <em>iskrenost koja vrijeđa</em>.</div>
      </div>

      <div class="cit-card" data-cat="meursault" data-cit-id="h09c05" data-diff="basic" data-tez="3,5">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">MEURSAULT</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, I/6 — plaža</span></div>
        <div class="cit-txt">„Cijelo je sunce udaralo na moje čelo. Bilo je sunce na pijesku, koji se valjao u valu."</div>
        <div class="cit-tez-row"><span class="cit-tez">T3</span><span class="cit-tez">T5</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> <b>Sunce kao akter</b> — fizički udar, ne metafora. Pokazuje Camusovu <em>mediteransku poetiku</em>. Za <b>Tezu 3</b> (sunce kao akter) i <b>Tezu 5</b> (bijela proza — konkretni glagoli, kratka rečenica).</div>
      </div>

      <div class="cit-card" data-cat="meursault" data-cit-id="h09c06" data-diff="advanced" data-tez="2,4">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">MEURSAULT</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, II/2 — razgovor s istražnim sucem</span></div>
        <div class="cit-txt">„Nije moj zločin za mene značio puno."</div>
        <div class="cit-tez-row"><span class="cit-tez">T2</span><span class="cit-tez">T4</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Meursault <em>ne osjeća krivnju</em> — ne zato što je psihopat, nego zato što njegova „kategorija ozbiljnog" funkcionira drugačije. Za <b>Tezu 2</b> i <b>Tezu 4</b> (kritika društvenog očekivanja kajanja).</div>
      </div>

      <div class="cit-card" data-cat="meursault" data-cit-id="h09c07" data-diff="basic" data-tez="6">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">MEURSAULT</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, I/1 — sahrana</span></div>
        <div class="cit-txt">„Nisam htio reći da nisam, ali mi se činilo da nisam imao razloga."</div>
        <div class="cit-tez-row"><span class="cit-tez">T6</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Meursault na pitanje <em>je li tugovao za majkom</em>. Pokazuje <b>radikalnu iskrenost</b> — i naslučuje vlastiti zločin. Za <b>Tezu 6</b> (Meursaultova jezična iskrenost koja vrijeđa).</div>
      </div>

      <div class="cit-card must-know" data-cat="meursault" data-cit-id="h09c08" data-diff="advanced" data-tez="7">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">MEURSAULT</span><span class="cit-eye-must">⭐ Napamet</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, II/5 — finale</span></div>
        <div class="cit-txt">„Da bih osjećao manje samotnim, ostao mi je samo da poželim da na dan moga pogubljenja bude mnogo gledatelja, da me dočekaju krikovima mržnje."</div>
        <div class="cit-tez-row"><span class="cit-tez">T7</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> <b>Posljednje rečenice romana</b>. Paradoks — krikovi mržnje kao potvrda iskrenosti. Za <b>Tezu 7</b> (pobuna kao oslobođenje). Iznimno snažan citat za zaključak eseja.</div>
      </div>

      <div class="cit-card" data-cat="meursault" data-cit-id="h09c09" data-diff="basic" data-tez="2">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">MEURSAULT</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, I/5 — razgovor s Raymondom o braku</span></div>
        <div class="cit-txt">„Rekao sam mu da je svejedno — ako želi, možemo se vjenčati."</div>
        <div class="cit-tez-row"><span class="cit-tez">T2</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Marie predlaže brak. Meursaultov odgovor je „svejedno". Pokazuje <b>nehijerarhiju važnosti</b> u njegovom svijetu. Za <b>Tezu 2</b> — radikalna iskrenost koja vrijeđa konvencije.</div>
      </div>

      <div class="cit-card" data-cat="meursault" data-cit-id="h09c10" data-diff="advanced" data-tez="5,7">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">MEURSAULT</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, II/5 — finale, sukob sa svećenikom</span></div>
        <div class="cit-txt">„Iz dna svoje budućnosti, kroz cijeli ovaj život koji sam živio, dizao se neki tamni dah preko godina koje su tek dolazile…"</div>
        <div class="cit-tez-row"><span class="cit-tez">T5</span><span class="cit-tez">T7</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> <b>Stilski lom u finalu</b> — Meursault prelazi iz minimalističkog jezika u <em>retoričke periode</em>. Za <b>Tezu 5</b> (bijela proza i njena eksplozija) i <b>Tezu 7</b> (pobuna).</div>
      </div>

      <div class="cit-card" data-cat="meursault" data-cit-id="h09c11" data-diff="advanced" data-tez="2,7">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">MEURSAULT</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, II/5 — sukob sa svećenikom</span></div>
        <div class="cit-txt">„Sve me to nije ništa, jer ja znam zašto."</div>
        <div class="cit-tez-row"><span class="cit-tez">T2</span><span class="cit-tez">T7</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Meursault svećeniku — <em>on zna zašto je živio kako je živio</em>. Apsurd je prihvaćen. Za <b>Tezu 7</b> (pobuna) — kratka, sjajna izjava radikalne autonomije.</div>
      </div>

      <div class="cit-card" data-cat="meursault" data-cit-id="h09c12" data-diff="basic" data-tez="3">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">MEURSAULT</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, II/3 — pred sucem o ubojstvu</span></div>
        <div class="cit-txt">„Bilo je to zbog sunca."</div>
        <div class="cit-tez-row"><span class="cit-tez">T3</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Meursaultovo objašnjenje ubojstva. Sud to odbija — zvuči apsurdno. Ali u Camusovom svijetu <b>sunce je realan akter</b>. Za <b>Tezu 3</b> (sunce kao aktivan akter).</div>
      </div>

      <!-- == MARIE CARDONA (4) == -->
      <div class="cit-card" data-cat="marie" data-cit-id="h09c13" data-diff="basic" data-tez="2,4">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">MARIE</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, I/2 — bazen</span></div>
        <div class="cit-txt">„Vidjelo se da nije znala što da kaže."</div>
        <div class="cit-tez-row"><span class="cit-tez">T2</span><span class="cit-tez">T4</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Marie nakon Meursaultovog „to ne znači ništa". <em>Pokazuje da Marie pokušava razumjeti</em> ali ne uspijeva. Za <b>Tezu 2</b> i <b>Tezu 4</b> — Meursault je stranac čak i ljubavnici.</div>
      </div>

      <div class="cit-card" data-cat="marie" data-cit-id="h09c14" data-diff="advanced" data-tez="2,7">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">MARIE</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, II/2 — posjet zatvoru</span></div>
        <div class="cit-txt">„Sve će biti dobro… izaći ćeš pa ćemo se vjenčati."</div>
        <div class="cit-tez-row"><span class="cit-tez">T2</span><span class="cit-tez">T7</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Marie u zatvorskom posjetu. <em>Optimizam koji Meursault ne može dijeliti</em>. Pokazuje <b>provaliju između „normalnog" života i Meursaultove svijesti</b>. Za <b>Tezu 2</b>.</div>
      </div>

      <div class="cit-card" data-cat="marie" data-cit-id="h09c15" data-diff="basic" data-tez="2,3">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">MARIE</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, I/2 — bazen i sunce</span></div>
        <div class="cit-txt">„Marie je smijala kad sam joj rekao da svi imamo pravo na vlastite osjećaje."</div>
        <div class="cit-tez-row"><span class="cit-tez">T2</span><span class="cit-tez">T3</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Marie reagira smijehom — <em>ona je suprotnost Meursaultu, ali ga ipak privlači</em>. <b>Vitalnost vs distanca</b>. Za <b>Tezu 2</b>.</div>
      </div>

      <div class="cit-card" data-cat="marie" data-cit-id="h09c16" data-diff="advanced" data-tez="4">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">MARIE</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, II/3 — svjedočenje na suđenju</span></div>
        <div class="cit-txt">„Nisam imala dovoljno vremena ni mira za razmišljati."</div>
        <div class="cit-tez-row"><span class="cit-tez">T4</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Marie pod tužiteljevim pritiskom o filmu na koji su išli sutradan nakon sahrane. <b>Tužitelj koristi i nju kao oružje</b>. Za <b>Tezu 4</b> (kritika sudskog procesa).</div>
      </div>

      <!-- == RAYMOND SINTES (3) == -->
      <div class="cit-card" data-cat="raymond" data-cit-id="h09c17" data-diff="basic" data-tez="2,4">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">RAYMOND</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, I/3 — kuhinja</span></div>
        <div class="cit-txt">„Pitao me hoću li mu biti prijatelj. Rekao sam mu da je svejedno."</div>
        <div class="cit-tez-row"><span class="cit-tez">T2</span><span class="cit-tez">T4</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Raymond pita Meursaulta za prijateljstvo. <em>„Svejedno je"</em> — Meursault pristaje na sve odnose istom mjerom. Za <b>Tezu 2</b>. Ovo prijateljstvo postat će <em>otežavajuća okolnost</em> na suđenju.</div>
      </div>

      <div class="cit-card" data-cat="raymond" data-cit-id="h09c18" data-diff="advanced" data-tez="4">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">RAYMOND</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, I/3 — pismo Mauretanki</span></div>
        <div class="cit-txt">„Trebao bi pisati joj pismo… koje će joj nanijeti veliku bol."</div>
        <div class="cit-tez-row"><span class="cit-tez">T4</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Raymondov plan da napiše pismo svojoj djevojci da je „rastavi od sebe". Meursault mu pomaže <em>bez moralnih rezervacija</em>. Za <b>Tezu 4</b> — Meursault stoji izvan moralnih konvencija društva.</div>
      </div>

      <div class="cit-card" data-cat="raymond" data-cit-id="h09c19" data-diff="basic" data-tez="3,6">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">RAYMOND</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, I/6 — plaža prije ubojstva</span></div>
        <div class="cit-txt">„Daj mi pištolj. Ako se umiješa, smaknut ću ga."</div>
        <div class="cit-tez-row"><span class="cit-tez">T3</span><span class="cit-tez">T6</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Raymondov govor na plaži — <em>nasilje već lebdi u zraku</em>. Meursault uzima pištolj („dao sam mu razlog") što vodi do ubojstva. Za <b>Tezu 6</b> — granica I/II dijela.</div>
      </div>

      <!-- == SALAMANO (2) == -->
      <div class="cit-card" data-cat="salamano" data-cit-id="h09c20" data-diff="advanced" data-tez="2,4">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">SALAMANO</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, I/4 — susjedov pas</span></div>
        <div class="cit-txt">„Dao sam ga psu, dao sam mu sve."</div>
        <div class="cit-tez-row"><span class="cit-tez">T2</span><span class="cit-tez">T4</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Salamano nakon što mu je pas pobjegao. <em>Plač starca pokazuje da i naizgled okrutni ljudi imaju duboke veze</em>. <b>Paralela s Meursaultom</b> — distanca izvana, vezanost iznutra. Za <b>Tezu 2</b>.</div>
      </div>

      <div class="cit-card" data-cat="salamano" data-cit-id="h09c21" data-diff="advanced" data-tez="2">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">SALAMANO</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, II/2 — svjedočenje</span></div>
        <div class="cit-txt">„On je dobar mladić. Volio je svoju majku."</div>
        <div class="cit-tez-row"><span class="cit-tez">T2</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Salamano svjedoči u Meursaultovu korist na suđenju. <b>Jedini koji vidi „normalnost"</b> Meursaultove veze s majkom. Za <b>Tezu 2</b> — i osudi je nešto preveć tuđe da društvo prihvati.</div>
      </div>

      <!-- == TUŽITELJ (3) == -->
      <div class="cit-card must-know" data-cat="tuzitelj" data-cit-id="h09c22" data-diff="basic" data-tez="2,4">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">TUŽITELJ</span><span class="cit-eye-must">⭐ Napamet</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, II/4 — završni govor</span></div>
        <div class="cit-txt">„Optužujem ovog čovjeka da je sahranio majku s kriminalnim srcem."</div>
        <div class="cit-tez-row"><span class="cit-tez">T2</span><span class="cit-tez">T4</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> <b>Vrhunac suđenja</b>. Tužitelj otvoreno priznaje — <em>sudi mu se za pogreb, ne za ubojstvo</em>. Za <b>Tezu 4</b> (kritika pravosuđa) i <b>Tezu 2</b>. MORA napamet — najpoznatija tužiteljeva rečenica.</div>
      </div>

      <div class="cit-card" data-cat="tuzitelj" data-cit-id="h09c23" data-diff="advanced" data-tez="4">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">TUŽITELJ</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, II/4 — završna rečenica</span></div>
        <div class="cit-txt">„Tražim glavu ovoga čovjeka."</div>
        <div class="cit-tez-row"><span class="cit-tez">T4</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Doslovan zahtjev za giljotinom. Pokazuje <em>brutalnost francuskog kaznenog sustava</em> i <b>nesrazmjer između zločina i kazne</b>. Za <b>Tezu 4</b>.</div>
      </div>

      <div class="cit-card" data-cat="tuzitelj" data-cit-id="h09c24" data-diff="advanced" data-tez="4">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">TUŽITELJ</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, II/4 — psihološka analiza</span></div>
        <div class="cit-txt">„Njegova ravnodušnost otkriva mi prisustvo provalije u koju društvo može pasti."</div>
        <div class="cit-tez-row"><span class="cit-tez">T4</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Tužitelj izričito formulira <em>strah društva pred onima koji ne dijele konvencije</em>. <b>Provalija = nedostatak ritualne emocije</b>. Za <b>Tezu 4</b> — eksplicitna tema „nas" vs „njih".</div>
      </div>

      <!-- == SVEĆENIK (3) == -->
      <div class="cit-card" data-cat="svecenik" data-cit-id="h09c25" data-diff="advanced" data-tez="1,7">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">SVEĆENIK</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, II/5 — ćelija</span></div>
        <div class="cit-txt">„Sve ovi kameni zidovi razlučuju se na lice koje pati."</div>
        <div class="cit-tez-row"><span class="cit-tez">T1</span><span class="cit-tez">T7</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Svećenik pokušava nagovoriti Meursaulta da vidi <em>Krista u zidu ćelije</em>. <b>Religiozna utjeha vs apsurd</b>. Meursault odbija — vidi samo zidove. Za <b>Tezu 1</b> (apsurd) i <b>Tezu 7</b> (pobuna).</div>
      </div>

      <div class="cit-card" data-cat="svecenik" data-cit-id="h09c26" data-diff="advanced" data-tez="7">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">SVEĆENIK</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, II/5 — ćelija</span></div>
        <div class="cit-txt">„Zar volite ovu zemlju toliko?"</div>
        <div class="cit-tez-row"><span class="cit-tez">T7</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Svećenikovo pitanje — pokušava razumjeti zašto Meursault odbija nadu u onaj svijet. Meursault <em>voli ovu zemlju, sunce, more</em> — to je njegova nada. Za <b>Tezu 7</b>.</div>
      </div>

      <div class="cit-card" data-cat="svecenik" data-cit-id="h09c27" data-diff="basic" data-tez="1">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">SVEĆENIK</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, II/5 — ćelija</span></div>
        <div class="cit-txt">„Sigurni ste? Stvarno sigurni?"</div>
        <div class="cit-tez-row"><span class="cit-tez">T1</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Svećenik ne može povjerovati u Meursaultovu sigurnost u ne-postojanje Boga. <em>Religioznost ne može pojmiti apsurd kao stabilnu poziciju</em>. Za <b>Tezu 1</b>.</div>
      </div>

      <!-- == MAJKA (2) == -->
      <div class="cit-card" data-cat="egzist-porodica" data-cit-id="h09c28" data-diff="advanced" data-tez="6,7">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">MAJKA</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, II/5 — Meursaultova refleksija</span></div>
        <div class="cit-txt">„Mama je tako blizu smrti morala je osjećati oslobođenje, spremna ponovno proživjeti sve."</div>
        <div class="cit-tez-row"><span class="cit-tez">T6</span><span class="cit-tez">T7</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Meursault u finalu razumije <em>majku po prvi put</em>. „Spremna proživjeti sve" — i on je sad spreman. Za <b>Tezu 7</b> — paralelizam Meursault-majka u trenutku prosvjetljenja.</div>
      </div>

      <div class="cit-card" data-cat="egzist-porodica" data-cit-id="h09c29" data-diff="basic" data-tez="6">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">MAJKA</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Stranac, I/1 — dom staraca u Marengu</span></div>
        <div class="cit-txt">„Doma majka je imala vremena da ne plače."</div>
        <div class="cit-tez-row"><span class="cit-tez">T6</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Meursaultova retrospektivna refleksija o majci. <em>Ona je bila slična njemu</em> — bez ritualne tuge. Za <b>Tezu 6</b> — Meursault nije anomalija, on je <em>sin svoje majke</em>.</div>
      </div>

      <!-- == CAMUS BIOGRAFSKI / TEORIJSKI (5) == -->
      <div class="cit-card must-know" data-cat="camus" data-cit-id="h09c30" data-diff="basic" data-tez="1,7">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">CAMUS</span><span class="cit-eye-must">⭐ Napamet</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Mit o Sizifu, 1942. — finalna rečenica</span></div>
        <div class="cit-txt">„Treba zamisliti Sizifa sretnim."</div>
        <div class="cit-tez-row"><span class="cit-tez">T1</span><span class="cit-tez">T7</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> <b>Camusova najpoznatija filozofska rečenica</b>. Pobuna nije junaštvo — ona je <em>sretno prihvaćanje besmisla</em>. Za <b>Tezu 7</b> i <b>Tezu 1</b>. MORA napamet — povezuje Stranca s teorijom.</div>
      </div>

      <div class="cit-card must-know" data-cat="camus" data-cit-id="h09c31" data-diff="basic" data-tez="1">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">CAMUS</span><span class="cit-eye-must">⭐ Napamet</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Mit o Sizifu, 1942. — uvod</span></div>
        <div class="cit-txt">„Postoji samo jedan ozbiljan filozofski problem — samoubojstvo."</div>
        <div class="cit-tez-row"><span class="cit-tez">T1</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Otvaranje Mita o Sizifu. <em>Vrijedi li život živjeti?</em> Camus odbija samoubojstvo i bijeg u religiju — bira pobunu. Za <b>Tezu 1</b>. MORA napamet — kontekst Stranca.</div>
      </div>

      <div class="cit-card" data-cat="camus" data-cit-id="h09c32" data-diff="advanced" data-tez="1,2">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">CAMUS</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Predgovor američkom izdanju Stranca, 1955.</span></div>
        <div class="cit-txt">„U našem društvu, svaki čovjek koji ne plače na pogrebu svoje majke izlaže se opasnosti da bude osuđen na smrt."</div>
        <div class="cit-tez-row"><span class="cit-tez">T1</span><span class="cit-tez">T2</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> <b>Camusov vlastiti komentar romana</b>. Eksplicitno povezuje Meursaultovu sudbinu s društvenim konvencijama. Za <b>Tezu 2</b> i <b>Tezu 4</b>. <em>Iznimno citirano u literaturi.</em></div>
      </div>

      <div class="cit-card" data-cat="camus" data-cit-id="h09c33" data-diff="advanced" data-tez="1,2">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">CAMUS</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Predgovor američkom izdanju Stranca, 1955.</span></div>
        <div class="cit-txt">„Meursault nije prazan, već nastanjen strašću dubokom, jer tvrdoglavom — strašću za apsolutnim i istinom."</div>
        <div class="cit-tez-row"><span class="cit-tez">T1</span><span class="cit-tez">T2</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Camus brani Meursaulta od optužbe za prazninu. <em>„Ne ravnodušnost, nego strast za istinom"</em>. Za <b>Tezu 2</b> — Meursault nije bezosjećajan, on je <em>radikalno iskren</em>.</div>
      </div>

      <div class="cit-card" data-cat="camus" data-cit-id="h09c34" data-diff="advanced" data-tez="1">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">CAMUS</span></div>
        <div class="cit-src"><b class="cit-src-author">Camus</b><span class="cit-src-loc">Pobunjeni čovjek, 1951.</span></div>
        <div class="cit-txt">„Pobunjujem se, dakle jesmo."</div>
        <div class="cit-tez-row"><span class="cit-tez">T1</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Camusova preformulacija Descartesovog „cogito". <em>Pobuna utemeljuje zajedništvo</em> — solidarnost rodom apsurda. Za <b>Tezu 7</b> — pokazuje gdje Camus ide nakon Stranca (ciklus pobune).</div>
      </div>

      <!-- == KONTEKST / INTERPRETATORI (6) == -->
      <div class="cit-card" data-cat="kontekst" data-cit-id="h09c35" data-diff="advanced" data-tez="1,5">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">SARTRE o STRANCU</span></div>
        <div class="cit-src"><b class="cit-src-author">Sartre</b><span class="cit-src-loc">Esej o Strancu, 1943.</span></div>
        <div class="cit-txt">„Camusova rečenica je čista, jasna i lišena unutarnje povezanosti — ona je kao otok."</div>
        <div class="cit-tez-row"><span class="cit-tez">T5</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Sartre opisuje Camusovu „bijelu prozu". <em>„Otok"</em> = svaka rečenica samostalna. Za <b>Tezu 5</b> (stilska analiza). Sjajno za esej koji raspravlja o stilu.</div>
      </div>

      <div class="cit-card" data-cat="kontekst" data-cit-id="h09c36" data-diff="advanced" data-tez="5">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">BARTHES o BIJELOJ PROZI</span></div>
        <div class="cit-src"><b class="cit-src-author">Roland Barthes</b><span class="cit-src-loc">Stupanj nule pisanja, 1953.</span></div>
        <div class="cit-txt">„Stranac je inaugurirao novi tip pripovijedanja u francuskoj književnosti — pisanje stupnja nule."</div>
        <div class="cit-tez-row"><span class="cit-tez">T5</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Barthesova teorijska kategorija „pisanja stupnja nule" formulirana je <em>kao opis Camusovog stila</em>. Za <b>Tezu 5</b> — visoka teorijska podloga.</div>
      </div>

      <div class="cit-card" data-cat="kontekst" data-cit-id="h09c37" data-diff="advanced" data-tez="4">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">SAID — POSTKOLONIJALNA KRITIKA</span></div>
        <div class="cit-src"><b class="cit-src-author">Edward Said</b><span class="cit-src-loc">Kultura i imperijalizam, 1993.</span></div>
        <div class="cit-txt">„Camusov Alžir je kolonijalni svijet — ali ga roman ne tematizira."</div>
        <div class="cit-tez-row"><span class="cit-tez">T4</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Saidova postkolonijalna kritika — <em>Arapin nema imena, nema biografije</em>. Za maturski esej koji uključuje suvremenu kritiku.</div>
      </div>

      <div class="cit-card" data-cat="kontekst" data-cit-id="h09c38" data-diff="advanced" data-tez="4">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">DAOUD — ARAPIN ODGOVARA</span></div>
        <div class="cit-src"><b class="cit-src-author">Kamel Daoud</b><span class="cit-src-loc">Meursaultova istraga, 2013.</span></div>
        <div class="cit-txt">„Arapin se zvao Musa. Imao je obitelj. Imao je lice."</div>
        <div class="cit-tez-row"><span class="cit-tez">T4</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Alžirsko-francuski autor Daoud daje glas ubijenom Arapinu. <em>Roman-odgovor 70 godina kasnije</em>. Za <b>Tezu 4</b> i postkolonijalnu interpretaciju. Suvremena recepcija Stranca.</div>
      </div>

      <div class="cit-card" data-cat="kontekst" data-cit-id="h09c39" data-diff="advanced" data-tez="1">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">ADORNO — POSLIJE AUSCHWITZA</span></div>
        <div class="cit-src"><b class="cit-src-author">Theodor Adorno</b><span class="cit-src-loc">Kulturna kritika i društvo, 1949.</span></div>
        <div class="cit-txt">„Pisati pjesmu nakon Auschwitza je barbarski."</div>
        <div class="cit-tez-row"><span class="cit-tez">T1</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> Adornova rečenica izricuje <em>nemogućnost lirske utjehe nakon Holokausta</em>. <b>Stranac (1942.) anticipira ovo stanje</b> — u tijeku rata. Za kontekst egzistencijalizma.</div>
      </div>

      <div class="cit-card" data-cat="kontekst" data-cit-id="h09c40" data-diff="advanced" data-tez="1,5">
        <div class="cit-actions"><button type="button" class="cit-btn fav" onclick="citToggleFav(this)">☆</button><button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)">📋</button></div>
        <div class="cit-eyebrow"><span class="cit-eye-cat">SARTRE o EGZISTENCIJALIZMU</span></div>
        <div class="cit-src"><b class="cit-src-author">Sartre</b><span class="cit-src-loc">Egzistencijalizam je humanizam, 1946.</span></div>
        <div class="cit-txt">„Egzistencija prethodi esenciji."</div>
        <div class="cit-tez-row"><span class="cit-tez">T1</span></div>
        <div class="cit-use"><b>Kada koristiti:</b> <b>Najslavnija formula egzistencijalizma</b>. Čovjek nema unaprijed određenu svrhu — sam sebe stvara izborima. Camus se ograđuje od egzistencijalizma, ali dijeli pretpostavku. Za <b>Tezu 1</b>.</div>
      </div>

    </div>

    <div class="nav-row">
      <span class="nb" onclick="sw(2)">‹ ? Esej alat</span>
      <span class="nb primary" onclick="sw(4)">📚 Pojmovnik ›</span>
    </div>
  </div>

  <!-- ========================
       TAB 4 · POJMOVNIK
       ======================== -->
  <div class="layer" id="l4" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">55 pojmova</span>
      <span class="pill p-go">djelo · autor · pravac · kontekst</span>
      <span class="pill p-r">pretraživo</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Pojmovnik H09 — sve što ti treba na dohvat ruke</div>
      <div class="box-int-txt">
        <b>55 pojmova</b> grupiranih u 4 kategorije: <em>djelo</em> (likovi, scene, motivi Stranca · 17), <em>autor</em> (Camus biograf., djela, ideje · 12), <em>egzistencijalizam</em> (apsurd, Sartre, Heidegger, écriture blanche · 14), <em>kontekst</em> (Auschwitz, Adorno, Said, Daoud · 12). <b>Pretraži</b> tipkanjem ili filtriraj klikom na kategoriju.
      </div>
    </div>

    <div class="pojm-search-row">
      <input type="text" class="pojm-search" id="pojm-search" placeholder="🔎 Pretraži pojmove…" aria-label="Pretraži pojmove">
    </div>

    <div class="pojm-filters">
      <button class="pojm-filter on" data-cat="all">Svi (55)</button>
      <button class="pojm-filter" data-cat="djelo">📌 Djelo (17)</button>
      <button class="pojm-filter" data-cat="autor">📚 Autor (12)</button>
      <button class="pojm-filter" data-cat="egzist">📌 Egzistencijalizam (14)</button>
      <button class="pojm-filter" data-cat="kontekst">📌 Kontekst (12)</button>
    </div>

    <div class="pojm-grid" id="pojm-grid">

      <!-- == DJELO — likovi, scene, motivi Stranca (17) == -->

      <div class="pojm" data-cat="djelo" data-kw="meursault protagonist alžir činovnik"><span class="pojm-cat">djelo</span><div class="pojm-word">Meursault</div><div class="pojm-def">Protagonist Stranca, alžirski <em>kancelarijski službenik</em> oko 30 godina. Pripovjedač u prvom licu — <b>nikad ne saznajemo ime</b>. <em>Hladan, distanciran, bez emocionalne hijerarhije</em>. Ne plače na sahrani majke. Ubije Arapina „zbog sunca". Pristane na giljotinu. <b>Prvi „apsurdni junak" moderne književnosti</b> — onaj koji vidi besmisao i ne pretvara se. Asonanca u prezimenu — <em>m-eu-r-s = doslovno „samo voda"</em> u staroj francuski (možda fonetski namjerno).</div></div>

      <div class="pojm" data-cat="djelo" data-kw="marie cardona ljubavnica bazen"><span class="pojm-cat">djelo</span><div class="pojm-word">Marie Cardona</div><div class="pojm-def">Bivša daktilografkinja u Meursaultovoj firmi. <em>Sutradan nakon sahrane majke</em> sastaju se na bazenu — veza je tjelesna, vesela, plitka. Pita Meursaulta „<em>voliš li me?</em>" — odgovara „<em>to ne znači ništa, ali mislim da te ne volim</em>". Pristao bi se vjenčati ako ona to želi. <b>Marie pokušava razumjeti Meursaulta — ne uspijeva</b>. Posljednji put je vidi prije osude.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="raymond sintes susjed nasilnik mauretanka"><span class="pojm-cat">djelo</span><div class="pojm-word">Raymond Sintes</div><div class="pojm-def">Susjed Meursaultov, nasilnik prema svojoj mauretanskoj djevojci. Slati pisma da je traži, mlatiti, „rastaviti od sebe". <b>Meursault mu pomaže bez moralnih rezervacija</b>. Raymond ga vodi na plažu prijatelju Massonu — sukob s Arapima koji vodi do ubojstva. <em>Indirektno uzrok ubojstva.</em> Na suđenju, prijateljstvo s Meursaultom postaje <b>otežavajuća okolnost</b>.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="salamano susjed pas"><span class="pojm-cat">djelo</span><div class="pojm-word">Salamano i pas</div><div class="pojm-def">Stari susjed Meursaultov. Živi sa <em>starim šugavim psom</em>. Tuče ga, psuje ga, voli ga. Kad pas pobjegne — <b>Salamano plače</b>. <em>Paralela s Meursaultom</em>: Salamano izvana okrutan, iznutra vezan; Meursault izvana ravnodušan, iznutra ima jedan stvarni odnos — s majkom (sad pokojnom). Salamano je <b>kontrast i ogledalo istovremeno</b>. Svjedoči u Meursaultovu korist.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="tužitelj sud osuđa kriminalno srce"><span class="pojm-cat">djelo</span><div class="pojm-word">Tužitelj</div><div class="pojm-def">Predstavlja <b>društvenu osudu</b> u II. dijelu romana. Optužuje Meursaulta ne za ubojstvo nego za <em>moralnu deformaciju</em>: „<em>Optužujem ovog čovjeka da je sahranio majku s kriminalnim srcem.</em>" Zahtijeva najteži kazneni postupak — giljotinu. <em>Tužiteljeva retorika je vrhunac suđenja</em>: iz Meursaultove ravnodušnosti gradi sliku „čudovišta bez duše".</div></div>

      <div class="pojm" data-cat="djelo" data-kw="svećenik kapelan ćelija religija"><span class="pojm-cat">djelo</span><div class="pojm-word">Svećenik (kapelan)</div><div class="pojm-def">Dolazi u Meursaultovu ćeliju u <em>posljednjem poglavlju</em>. Tri puta ga Meursault odbija prije nego što sam dođe. Pokušava ga nagovoriti na obraćenje. <b>Meursault eksplodira</b> — vraćena strast, prva i jedina prava emocionalna scena romana. Svećenik je <b>katalizator finalne pobune</b>.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="majka mama starci marengo"><span class="pojm-cat">djelo</span><div class="pojm-word">Majka (Mama)</div><div class="pojm-def">Umire na samom početku romana — u <em>domu staraca u Marengu</em>. Roman počinje: „<em>Danas mi je umrla majka. Možda i jučer, ne znam.</em>" Meursault je smjestio u dom kad više nije mogao plaćati život s njom. <b>Sahrana je suđenje koje se vraća</b> — tužitelj je glavna optužba. U finalu Meursault razumije majku — „<em>spremna je bila proživjeti sve</em>".</div></div>

      <div class="pojm" data-cat="djelo" data-kw="arapin musa daoud postkolonijalno"><span class="pojm-cat">djelo</span><div class="pojm-word">Arapin (ubijeni)</div><div class="pojm-def">Mladi Arapin koji ima sukob s Raymondom (njegova sestra je Raymondova djevojka). <b>Nema imena, glasa, biografije</b> u Camusovom tekstu. Meursault ga ubija na plaži, <em>pet pucnjeva</em> — jedan, pa još četiri. <b>Postkolonijalna kritika</b>: ubijeni je „pozadina" — slijepa pjega kolonijalne perspektive. <em>Kamel Daoud (2013.) daje mu ime „Musa" u Meursaultovoj istrazi.</em></div></div>

      <div class="pojm" data-cat="djelo" data-kw="sunce alžir vrućina aktivan akter"><span class="pojm-cat">djelo</span><div class="pojm-word">Sunce</div><div class="pojm-def"><b>Drugi protagonist romana.</b> Žari, peče, pritišće. Na sahrani majke, na plaži, u sudnici. Meursault govori da je <em>„zbog sunca"</em> ubio Arapina. Sud to odbija prihvatiti. <b>Sunce nije izgovor — ono je fizička realnost koja oblikuje doživljaj</b>. Camusova mediteranska poetika — <em>priroda nije pozadina, ona djeluje</em>.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="more plivanje sloboda iskonsko"><span class="pojm-cat">djelo</span><div class="pojm-word">More</div><div class="pojm-def">Jedino mjesto gdje je Meursault <em>potpuno smiren</em>. Plivanje s Marie, plaže, voda na koži. <b>More je prirodno utočište</b> — bez društvenih očekivanja, bez jezika. U zatvoru, pamti more. <em>Predstavlja iskonsku slobodu pred-društvenog stanja</em>. Suprotstavlja se sudnici, ćeliji, govoru.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="giljotina smrtna kazna pogubljenje"><span class="pojm-cat">djelo</span><div class="pojm-word">Giljotina</div><div class="pojm-def">Camus je cijeli život protivnik smrtne kazne (esej <em>Razmišljanja o giljotini</em>, 1957.). U Strancu giljotina nije pravda — <b>obred očišćenja društva</b>. Tužitelj traži najteži kazneni postupak ne za zločin, nego za Meursaultov <em>način postojanja</em>. <b>Posljednja maska na apsurdu.</b></div></div>

      <div class="pojm" data-cat="djelo" data-kw="zvijezde nježna ravnodušnost finale"><span class="pojm-cat">djelo</span><div class="pojm-word">„Nježna ravnodušnost svijeta"</div><div class="pojm-def">U <b>posljednjem poglavlju</b> Meursault gleda zvijezde kroz prozor ćelije. <em>„Pred tom noći punom znakova i zvijezda, otvarao sam se prvi put nježnoj ravnodušnosti svijeta."</em> <b>Trenutak prosvjetljenja apsurda</b>. Svijet ne brine — i to je oslobađajuće. Meursault prihvaća apsurd. <em>To je njegova pobuna.</em></div></div>

      <div class="pojm" data-cat="djelo" data-kw="ubojstvo arapin pucanj plaža četiri kucanja"><span class="pojm-cat">djelo</span><div class="pojm-word">Ubojstvo Arapina (I/6)</div><div class="pojm-def">Plaža, sunce u zenitu. Meursault i Raymond susreću Arape. Meursault puca <em>jednom</em>, pa <em>još četiri puta</em>. <b>„Bilo je kao da kucam četiri puta na vrata nesreće."</b> Drugi pucnji su filozofski važniji od prvog — to je <em>ulazak u svijet kazne</em>. <b>Granica između I. i II. dijela romana.</b></div></div>

      <div class="pojm" data-cat="djelo" data-kw="suđenje sud presuda"><span class="pojm-cat">djelo</span><div class="pojm-word">Suđenje (II/3-4)</div><div class="pojm-def">Sude Meursaultu <em>ne za ubojstvo nego za to što nije plakao na pogrebu</em>. Tužitelj zove sve svjedoke od I. dijela (Marie, Raymond, Salamano, vlasnik kavane). Branitelj je nemoćan. <b>Klasičan primjer kako pravda postaje predstava</b>. Meursault gotovo ne sudjeluje — <em>govore o njemu kao da nije prisutan</em>.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="i dio život opisi senzorno"><span class="pojm-cat">djelo</span><div class="pojm-word">I. dio (6 poglavlja)</div><div class="pojm-def">Meursault živi: sahrana majke, veza s Marie, pomoć Raymondu, ubojstvo Arapina. <em>Doživljajan, opisan, senzorni stil</em>. Bez kauzalnosti — Meursault živi u trenucima. Završava <b>pucnjem na plaži</b>.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="ii dio zatvor suđenje refleksija"><span class="pojm-cat">djelo</span><div class="pojm-word">II. dio (5 poglavlja)</div><div class="pojm-def">Meursault u zatvoru, suđenje, čekanje smrti. <em>Refleksivan, dijaloški, sve duže rečenice</em>. Završava <b>sukobom sa svećenikom + nježna ravnodušnost svijeta</b>. Stilska eksplozija u finalu.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="kazna giljotina pogubljenje smrt"><span class="pojm-cat">djelo</span><div class="pojm-word">Smrtna kazna kao tema</div><div class="pojm-def">Camus piše Stranca i kasnije eksplicitan esej <em>Razmišljanja o giljotini</em> (1957.) protiv smrtne kazne. <b>Roman pokazuje kako pravosuđe nije moralno superiorno</b> — može ubiti čovjeka jer „ne plače dovoljno". Etičko-politička dimenzija romana, često zanemarena u apsurdističkim čitanjima.</div></div>

      <!-- == AUTOR — Camus biografski + djela (12) == -->

      <div class="pojm" data-cat="autor" data-kw="albert camus 1913 1960 nobel"><span class="pojm-cat">autor</span><div class="pojm-word">Albert Camus (1913.–1960.)</div><div class="pojm-def">Francusko-alžirski pisac. Rođen u Mondoviju (Alžir), umro u prometnoj nesreći (Villeblevin, Francuska, 4.1.1960.). <em>Nobelova nagrada za književnost 1957.</em> — drugi najmlađi laureat (44 god.). Romani (<em>Stranac, Kuga, Pad</em>), eseji (<em>Mit o Sizifu, Pobunjeni čovjek</em>), drame (<em>Caligula, Pravednici</em>). <b>Filozof apsurda i pobune.</b></div></div>

      <div class="pojm" data-cat="autor" data-kw="pied-noir alžir kolonija francuska"><span class="pojm-cat">autor</span><div class="pojm-word">Pied-noir</div><div class="pojm-def">„Crna noga" — francuski Europljanin rođen u Alžiru. <em>Camus je tipičan pied-noir</em> — francuska obitelj, polugluha nepismena majka (čistačica). Pied-noir kultura mediteranska je hibridna: francuska, španjolska, talijanska, malteška. Distancira Camusa od pariških egzistencijalista — daje mu <b>specifičan mediteranski osjećaj prirode</b>.</div></div>

      <div class="pojm" data-cat="autor" data-kw="nobelova nagrada 1957 nagrada"><span class="pojm-cat">autor</span><div class="pojm-word">Nobelova nagrada (1957.)</div><div class="pojm-def">„Za vidovitu književnu produkciju koja s jasnom ozbiljnošću osvjetljava probleme ljudske savjesti našeg vremena." <em>Drugi najmlađi laureat ikad</em> (44). U govoru u Stockholmu Camus govori o ulozi pisca u svom vremenu — <b>solidarnost, ne neutralnost</b>.</div></div>

      <div class="pojm" data-cat="autor" data-kw="combat pokret otpora list 1944"><span class="pojm-cat">autor</span><div class="pojm-word">Combat (list otpora)</div><div class="pojm-def">Ilegalni list francuskog pokreta otpora protiv nacističke okupacije. <em>Camus uređuje 1943.–1947.</em> Piše uvodnike, organizira mrežu. Nakon oslobođenja Pariza (kolovoz 1944.) <em>Combat</em> postaje legalni list, Camus mu je glavni urednik. <b>Politička dimenzija Camusove biografije</b> — istovremeno piše Stranca i bori se protiv nacizma.</div></div>

      <div class="pojm" data-cat="autor" data-kw="stranac l'étranger 1942 gallimard"><span class="pojm-cat">autor</span><div class="pojm-word">Stranac (L'Étranger), 1942.</div><div class="pojm-def">Camusov prvi roman. Napisan u Lyonu i Oranu 1940.–1941., izlazi u Gallimardu lipnja 1942. <em>U okupiranoj Francuskoj — uz formalno odobrenje njemačke cenzure</em>. <b>Globalni klasik tek nakon rata.</b> Preveden na desetke jezika, prodano preko 10 milijuna primjeraka. <em>Najčitaniji francuski roman 20. stoljeća.</em></div></div>

      <div class="pojm" data-cat="autor" data-kw="mit o sizifu esej apsurd 1942"><span class="pojm-cat">autor</span><div class="pojm-word">Mit o Sizifu (1942.)</div><div class="pojm-def">Camusov filozofski esej, <em>istovremen sa Strancem</em>. Centralno pitanje: „<em>Vrijedi li život živjeti?</em>" Odgovor: <b>da, ali bez metafizičke utjehe</b>. Slavna posljednja rečenica: „<em>Treba zamisliti Sizifa sretnim.</em>" Esej je <b>teorijska podloga Stranca</b>.</div></div>

      <div class="pojm" data-cat="autor" data-kw="kuga 1947 oran solidarnost pobuna"><span class="pojm-cat">autor</span><div class="pojm-word">Kuga (La Peste), 1947.</div><div class="pojm-def">Drugi Camusov veliki roman. Smještena u Oran tijekom kuge. <em>Alegorija nacističke okupacije</em>. Otvara <b>ciklus pobune</b> — od „što činiti pred apsurdom" do „<em>kako živjeti zajedno bez Boga, ali bez tiranije</em>". Odgovor: <b>solidarnost u patnji</b>. Doktor Rieux: „Borim se protiv kuge."</div></div>

      <div class="pojm" data-cat="autor" data-kw="pobunjeni čovjek 1951 sukob sartre"><span class="pojm-cat">autor</span><div class="pojm-word">Pobunjeni čovjek (1951.)</div><div class="pojm-def">Camusov drugi veliki esej. <em>Kritika revolucionarne nasilnosti</em> — od jakobinaca do Staljina. Slavna rečenica: „<em>Pobunjujem se, dakle jesmo.</em>" <b>Knjiga koja je raskinula prijateljstvo sa Sartreom (1952.)</b> — Sartre ga napada u <em>Les Temps Modernes</em>. Camus je sad sam — ali u pravu o GULAG-u.</div></div>

      <div class="pojm" data-cat="autor" data-kw="caligula drama 1944"><span class="pojm-cat">autor</span><div class="pojm-word">Caligula (drama, 1944.)</div><div class="pojm-def">Drama o rimskom caru Caliguli koji nakon smrti sestre/ljubavnice Druzille shvaća da „<em>ljudi umiru i nisu sretni</em>". Pretvara apsurd u tiraniju. <b>Treći dio Camusovog ciklusa apsurda</b> uz Stranca i Mit o Sizifu. <em>Što se događa kad apsurd postane politička program?</em> — Caligula odgovara: tiranija.</div></div>

      <div class="pojm" data-cat="autor" data-kw="pad 1956 amsterdam ispovijest"><span class="pojm-cat">autor</span><div class="pojm-word">Pad (La Chute), 1956.</div><div class="pojm-def">Posljednji završeni Camusov roman. <em>Monolog odvjetnika u amsterdamskom baru</em>. <b>Ironično ispovijedanje</b> krivnje. Pretvara čitatelja u sudionika. Najmračnija Camusova knjiga — i možda najsloženija. Otvara <b>ciklus ljubavi</b> koji nije dovršen.</div></div>

      <div class="pojm" data-cat="autor" data-kw="prvi čovjek nedovršen autobiografija 1994"><span class="pojm-cat">autor</span><div class="pojm-word">Prvi čovjek (Le Premier Homme)</div><div class="pojm-def">Autobiografski roman koji Camus piše u trenutku smrti — <em>rukopis pronađen u olupini auta</em>. Objavljen tek 1994. (njegova kćer Catherine Camus). <b>O djetinjstvu u Alžiru, polugluhoj majki, učitelju koji ga je spasio</b>. <em>Nedovršen vrhunac ciklusa ljubavi.</em></div></div>

      <div class="pojm" data-cat="autor" data-kw="razmišljanja o giljotini esej 1957"><span class="pojm-cat">autor</span><div class="pojm-word">Razmišljanja o giljotini (1957.)</div><div class="pojm-def">Esej protiv smrtne kazne. <em>Camus je cijeli život bio protivnik giljotine</em> — djed mu je svjedočio jednom pogubljenju i rastrojen se zbog toga. Esej je <b>etička eksplikacija jedne od centralnih tema Stranca</b>. Pridonio ukidanju smrtne kazne u Francuskoj (1981.).</div></div>

      <!-- == EGZISTENCIJALIZAM — pojmovi i autori (14) == -->

      <div class="pojm" data-cat="egzist" data-kw="apsurd razilazak smisao šutnja"><span class="pojm-cat">egzist</span><div class="pojm-word">Apsurd</div><div class="pojm-def">Centralni Camusov pojam. <b>Razilazak između čovjekove potrebe za smislom i šutnje svijeta</b>. Nije depresija — <em>jasno viđenje besmisla</em>. Apsurd se rađa <em>na dodirnoj točki</em> ta dva pola. Nije ni u čovjeku ni u svijetu, nego u <b>njihovom susretu</b>. <em>Ne brkati s nihilizmom!</em> Camus je moralist — apsurd je polazna točka, ne završna.</div></div>

      <div class="pojm" data-cat="egzist" data-kw="egzistencijalizam pokret filozofija postwar"><span class="pojm-cat">egzist</span><div class="pojm-word">Egzistencijalizam</div><div class="pojm-def">Filozofski i književni pokret (oko 1930.–1960., vrhunac nakon 1945.). <b>„Egzistencija prethodi esenciji"</b> (Sartre). Čovjek se rađa bez svrhe — sam je određuje. <em>Radikalna sloboda + radikalna odgovornost = tjeskoba</em>. <b>Camus se ograđuje od oznake</b>, ali dijeli osnovne pretpostavke. Glavna djela: Sartre, de Beauvoir, Heidegger, Marcel.</div></div>

      <div class="pojm" data-cat="egzist" data-kw="egzistencija prethodi esenciji sartre"><span class="pojm-cat">egzist</span><div class="pojm-word">„Egzistencija prethodi esenciji"</div><div class="pojm-def">Sartreova najpoznatija formula iz <em>Egzistencijalizam je humanizam</em> (1946.). <b>Čovjek prvo postoji, pa se onda određuje izborima</b> — nema unaprijed dane „prirode". <em>Suprotno: Aristotelovsko-tomistička metafizika</em> (esencija prethodi egzistenciji). Camus dijeli pretpostavku iako odbija oznaku egzistencijalist.</div></div>

      <div class="pojm" data-cat="egzist" data-kw="jean-paul sartre filozof bitak ništavilo"><span class="pojm-cat">egzist</span><div class="pojm-word">Jean-Paul Sartre (1905.–1980.)</div><div class="pojm-def">Francuski filozof, romansijer, dramatičar. <em>Bitak i ništavilo</em> (1943.) — glavno djelo. <em>Mučnina</em> (1938.), <em>Egzistencijalizam je humanizam</em> (1946.). „<b>Drugi su pakao</b>." Marksist nakon rata. Camusov prijatelj — pa neprijatelj nakon Pobunjenog čovjeka (1952.). <b>Odbio Nobelovu nagradu 1964.</b></div></div>

      <div class="pojm" data-cat="egzist" data-kw="simone de beauvoir feminizam drugi spol"><span class="pojm-cat">egzist</span><div class="pojm-word">Simone de Beauvoir (1908.–1986.)</div><div class="pojm-def">Francuska filozofkinja, romansijerka. Sartreova životna partnerica (50 godina, slobodno otvorena veza). <em>Drugi spol</em> (1949.) — <b>„Ne rađa se ženom, postaje se."</b> Egzistencijalistički feminizam. Roman <em>Mandarini</em> (Goncourt 1954.). <em>Spomenuti za kontekst egzistencijalizma.</em></div></div>

      <div class="pojm" data-cat="egzist" data-kw="kierkegaard preteča vjera angst"><span class="pojm-cat">egzist</span><div class="pojm-word">Soren Kierkegaard (1813.–1855.)</div><div class="pojm-def">Danski teolog, filozof. <b>Otac modernog egzistencijalizma</b>. „<em>Tjeskoba (Angst) je vrtoglavica slobode</em>." <em>Vjerski skok</em> — vjera nije logična, ona je strastveni izbor. Utjecao na sve egzistencijaliste. <b>Camus s njim raspravlja u Mitu o Sizifu</b>.</div></div>

      <div class="pojm" data-cat="egzist" data-kw="nietzsche bog je mrtav nadčovjek"><span class="pojm-cat">egzist</span><div class="pojm-word">Friedrich Nietzsche (1844.–1900.)</div><div class="pojm-def">Njemački filozof. <em>„Bog je mrtav"</em> (1882.) — kraj metafizičkih sigurnosti. <b>Nadčovjek (Übermensch)</b> — onaj koji kreira vlastite vrijednosti. <em>Vječno vraćanje istog</em>. Camus se izričito s njim raspravlja u <b>Mitu o Sizifu</b>.</div></div>

      <div class="pojm" data-cat="egzist" data-kw="heidegger dasein bitak vrijeme bačenost"><span class="pojm-cat">egzist</span><div class="pojm-word">Martin Heidegger (1889.–1976.)</div><div class="pojm-def">Njemački filozof. <em>Bitak i vrijeme</em> (1927.). <b>Dasein</b> — „bitak-tu", konkretno postojanje. Čovjek je <em>bačen u svijet</em>, mora se odnositi prema vlastitoj smrti. <b>Bivanje-prema-smrti (Sein-zum-Tode)</b> kao izvor autentičnosti. <em>Kontroverzan zbog NSDAP članstva 1933.</em></div></div>

      <div class="pojm" data-cat="egzist" data-kw="dasein bitak-tu heidegger"><span class="pojm-cat">egzist</span><div class="pojm-word">Dasein</div><div class="pojm-def">Heideggerov pojam. Doslovno „bitak-tu". <b>Konkretno ljudsko postojanje</b> — ne apstraktan „čovjek". Dasein je <em>bačen u svijet</em> bez vlastitog izbora, mora se odnositi prema vlastitoj smrti. Razlikovanje <em>autentičnog</em> (suočavanje sa smrću) i <em>neautentičnog</em> (bijeg u „das Man" — anonimni „se").</div></div>

      <div class="pojm" data-cat="egzist" data-kw="angst tjeskoba sloboda kierkegaard"><span class="pojm-cat">egzist</span><div class="pojm-word">Angst (tjeskoba)</div><div class="pojm-def">Egzistencijalna tjeskoba. Kierkegaard: „<em>Vrtoglavica slobode</em>". Heidegger: <em>raspoloženje koje otkriva ništavilo</em>. <b>Razlika od straha</b>: strah ima objekt, Angst nema — to je <em>strah pred ništavilom</em>. Pojavljuje se u trenucima svijesti o vlastitoj smrti i slobodi.</div></div>

      <div class="pojm" data-cat="egzist" data-kw="mučnina sartre roquentin pred predmetima"><span class="pojm-cat">egzist</span><div class="pojm-word">Mučnina (nausée)</div><div class="pojm-def">Pojam iz Sartreovog romana <em>Mučnina</em> (1938.). Roquentin osjeća „<em>mučninu</em>" pred postojanjem predmeta — pred <b>besmislom čistog bitka</b>. <em>Slično Camusovom apsurdu</em> ali apstraktnije. Egzistencijalistička reakcija na <b>kontingentnost svijeta</b>.</div></div>

      <div class="pojm" data-cat="egzist" data-kw="autentičnost autentičan izbor smrt"><span class="pojm-cat">egzist</span><div class="pojm-word">Autentičnost</div><div class="pojm-def">Egzistencijalistička etička kategorija. <b>Suočavati se s vlastitom slobodom, smrću, izborom — bez bijega u konvencije</b>. Heidegger: autentični Dasein je onaj koji <em>prihvaća svoju smrtnost</em>. Sartre: autentičan je onaj koji <em>ne bježi u „mauvaise foi" (lošu vjeru)</em>. <b>Meursault je egzemplarno autentičan</b> — ne pretvara se.</div></div>

      <div class="pojm" data-cat="egzist" data-kw="écriture blanche bijela proza minimalizam barthes"><span class="pojm-cat">egzist</span><div class="pojm-word">Écriture blanche (bijela proza)</div><div class="pojm-def">Pojam Rolanda Barthesa iz <em>Stupanj nule pisanja</em> (1953.) — <b>opis Camusovog stila</b>. Kratke rečenice, bez metafora, bez emocije, prvo lice u prošlom nesvršenom. <em>Stil koji ne signalizira književnost</em> — ne osjećaj. <b>Prvi roman u tom stilu = Stranac</b>.</div></div>

      <div class="pojm" data-cat="egzist" data-kw="ciklus apsurda pobune ljubavi camus tri"><span class="pojm-cat">egzist</span><div class="pojm-word">3 ciklusa Camusovog djela</div><div class="pojm-def">Camus svoje djelo dijeli u <em>3 ciklusa</em>: <b>(1) APSURD</b> (1942.) — Stranac, Mit o Sizifu, Caligula. <b>(2) POBUNA</b> (1947.–1951.) — Kuga, Pobunjeni čovjek, Pravednici. <b>(3) LJUBAV</b> (planiran, ostvaren samo djelomično) — Pad, Egzil i kraljevstvo, Prvi čovjek (nedovršen). <em>Sustavna struktura, ne slučajan opus.</em></div></div>

      <!-- == KONTEKST — povijesni, filozofski, recepcija (12) == -->

      <div class="pojm" data-cat="kontekst" data-kw="drugi svjetski rat ww2 okupacija"><span class="pojm-cat">kontekst</span><div class="pojm-word">II. svjetski rat (1939.–1945.)</div><div class="pojm-def">Camus piše Stranca <em>tijekom rata</em>. Francuska je pod nacističkom okupacijom (od lipnja 1940.). Roman izlazi u Parizu lipnja 1942. — <em>uz formalno odobrenje njemačke cenzure</em> (cenzori nisu shvatili filozofsku radikalnost). <b>Nadrealnost kolektivne katastrofe određuje ton apsurdističke literature.</b></div></div>

      <div class="pojm" data-cat="kontekst" data-kw="auschwitz holokaust adorno"><span class="pojm-cat">kontekst</span><div class="pojm-word">Auschwitz / Holokaust</div><div class="pojm-def">Nacistički sustav koncentracijskih logora — vrhunac u Auschwitzu (Poljska). Adorno (1949.): „<em>Pisati pjesmu nakon Auschwitza je barbarski</em>". <b>Holokaust je referentna točka egzistencijalističkog razmišljanja</b> — kako uopće govoriti o smislu nakon industrijskog ubijanja. Stranac (1942.) anticipira ovaj kontekst u tijeku rata.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="okupirana francuska otpor pariz"><span class="pojm-cat">kontekst</span><div class="pojm-word">Okupirana Francuska (1940.–1944.)</div><div class="pojm-def">Nakon poraza 1940., sjeverna Francuska je pod direktnom njemačkom okupacijom; južna pod kolaboracionističkim Vichyjevim režimom. Camus se u to vrijeme priključuje pokretu otpora. <em>Kompleksan moralni teren</em> — kolaboracija ili otpor. <b>Stranac u toj atmosferi nosi politički naboj</b> koji nije eksplicitan.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="adorno horkheimer kritička teorija frankfurt"><span class="pojm-cat">kontekst</span><div class="pojm-word">Theodor Adorno (1903.–1969.)</div><div class="pojm-def">Njemački filozof, kritička teorija (Frankfurtska škola). <em>Dijalektika prosvjetiteljstva</em> (s Horkheimerom, 1944.) — <b>moderno doba kao samouništenje razuma</b>. Slavna rečenica: „<em>Pisati pjesmu nakon Auschwitza je barbarski.</em>" Kontekst za Camusa — drugi odgovor na istu krizu modernizma.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="francuski alžir kolonija pied-noir"><span class="pojm-cat">kontekst</span><div class="pojm-word">Francuski Alžir</div><div class="pojm-def">Alžir je između 1830. i 1962. bio integralni dio Francuske — kolonija s milijunima francuskih doseljenika i većim brojem alžirskih Arapa i Berbera. <em>Camus pripada doseljeničkoj manjini (pied-noir)</em>. Stranac smješta radnju u tom svijetu — <b>ali Arapi su „pozadina"</b>. Postkolonijalna kritika to ističe.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="alžirski rat nezavisnost de gaulle 1962"><span class="pojm-cat">kontekst</span><div class="pojm-word">Alžirski rat za nezavisnost (1954.–1962.)</div><div class="pojm-def">Brutalni rat između francuske vojske i alžirskog FLN-a. Završio nezavisnošću Alžira (1962.). <em>Camus je u trenutku rata bio politički razdvojen</em> — porijeklom pied-noir, ali ljevičar koji je htio zajednicu. <b>Slavna rečenica „između pravde i moje majke, ja biram majku"</b> bila je viđena kao izraz nemoći. Camus umire 1960., ne dočekavši kraj rata.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="kamel daoud meursaultova istraga 2013"><span class="pojm-cat">kontekst</span><div class="pojm-word">Kamel Daoud — Meursaultova istraga (2013.)</div><div class="pojm-def">Alžirsko-francuski autor (rođ. 1970.). Roman <em>Meursaultova istraga</em> (Goncourt prvog romana 2015.). <b>Daje glas ubijenom Arapinu — zove se Musa, ima brata Harouna koji pripovijeda</b>. Goncourt prvenstveno za prvi roman. <em>Suvremeni odgovor na slijepu pjegu Stranca.</em> Treba spomenuti za postkolonijalnu interpretaciju.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="edward said kultura imperijalizam orijentalizam"><span class="pojm-cat">kontekst</span><div class="pojm-word">Edward Said (1935.–2003.)</div><div class="pojm-def">Palestinsko-američki teoretičar. <em>Orijentalizam</em> (1978.), <em>Kultura i imperijalizam</em> (1993.). <b>Otac postkolonijalne kritike</b>. Said je o Strancu pisao da je <em>roman kolonijalne svijesti</em> — Arapi nemaju glas. Ne osuđuje Camusa, ali pokazuje granicu njegove perspektive.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="postkolonijalno postkolonijalna kritika"><span class="pojm-cat">kontekst</span><div class="pojm-word">Postkolonijalna kritika</div><div class="pojm-def">Akademski pravac (od 1970-ih) koji preispituje književnost iz perspektive bivših kolonija. <em>Edward Said, Gayatri Spivak, Homi Bhabha</em>. Kod Stranca <b>pita: tko ima glas, tko nema; tko je vidljiv, tko je „pozadina"</b>. <em>Spomenuti u suvremenom čitanju Stranca.</em></div></div>

      <div class="pojm" data-cat="kontekst" data-kw="hladni rat nuklearno egzistencijalizam"><span class="pojm-cat">kontekst</span><div class="pojm-word">Hladni rat</div><div class="pojm-def">Globalni sukob između SAD-a i SSSR-a (1947.–1991.). <em>Egzistencijalizam je dijelom reakcija na nuklearnu prijetnju</em> — egzistencija postaje krhka u doslovnom smislu. <b>Camus je anti-totalitarian</b> — odbija i marksizam i kapitalizam. <em>Pobunjeni čovjek</em> je njegov anti-staljinistički manifest.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="sartre camus sukob 1952 prijateljstvo"><span class="pojm-cat">kontekst</span><div class="pojm-word">Sukob Sartre–Camus (1952.)</div><div class="pojm-def">Sartre objavljuje u <em>Les Temps Modernes</em> oštru kritiku Camusovog <em>Pobunjenog čovjeka</em>. <b>Razlog: Camus odbija opravdati revolucionarno nasilje</b>. Sartre brani SSSR; Camus optužuje GULAG. <em>Prijateljstvo se prekida zauvijek</em>. Povijesna pravda na Camusovoj strani — ali Sartre je dominirao kulturom.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="hemingway minimalizam stil utjecaj"><span class="pojm-cat">kontekst</span><div class="pojm-word">Ernest Hemingway (1899.–1961.)</div><div class="pojm-def">Američki pisac. <em>Američki minimalizam</em> — kratke rečenice, konkretni glagoli, malo pridjeva. <b>Camus je čitao Hemingwaya</b> i utkao njegov stil u francuski jezik. <em>Stranac je francuska verzija „Sunce također izlazi"</em> ili „Zbogom oružje". Ovaj utjecaj formira <b>écriture blanche</b>.</div></div>

    </div>

    <div class="pojm-noresult" id="pojm-noresult">
      Niti jedan pojam ne odgovara pretrazi. <em>Probaj drukčiji izraz ili resetiraj filter.</em>
    </div>

    <div class="nav-row">
      <span class="nb" onclick="sw(3)">‹ 📖 Citatnik</span>
      <span class="nb primary" onclick="sw(5)">⚡ Drill ›</span>
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
          <a class="pro-gate-btn" href="/pricing?ctx=drill_matching_h09">Otključaj — 9,99€/mj</a>
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
        Označi stavke koje si <em>stvarno</em> usvojio. Ne žuri — ako nešto nisi siguran, vrati se na odgovarajući tab. <strong>Cilj: svih 10 označeno prije prelaska na H10 — Sofoklo Antigona.</strong>
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
            <div class="minirev-card-lbl">📌 Djelo</div>
            <div class="minirev-card-val">Albert Camus <b>Stranac</b> (<em>L'Étranger</em>, <b>1942.</b>) · roman u <b>2 dijela</b> · obvezatno čitanje 2026.</div>
          </div>
          <div class="minirev-card">
            <div class="minirev-card-lbl">📌 Pravac</div>
            <div class="minirev-card-val"><b>Egzistencijalizam · filozofija apsurda</b>. Bijela proza (<em>écriture blanche</em>) — kratke rečenice, bez metafora, prvo lice.</div>
          </div>
          <div class="minirev-card">
            <div class="minirev-card-lbl">📌 Likovi</div>
            <div class="minirev-card-val"><b>Meursault</b> (protagonist), <b>Marie</b> (ljubav), <b>Raymond</b> (susjed-nasilnik), <b>Salamano</b> (susjed sa psom), Tužitelj, Svećenik, pokojna Majka, bezimeni Arapin.</div>
          </div>
          <div class="minirev-card">
            <div class="minirev-card-lbl">📌 Radnja</div>
            <div class="minirev-card-val"><b>I.</b> Sahrana majke › Marie › Raymond › ubojstvo Arapina na plaži (<em>„zbog sunca"</em>). <b>II.</b> Zatvor › suđenje za „kriminalno srce" › sukob sa svećenikom › <em>nježna ravnodušnost svijeta</em>.</div>
          </div>
          <div class="minirev-card">
            <div class="minirev-card-lbl">📌 Simboli</div>
            <div class="minirev-card-val"><b>Sunce</b> (aktivan akter), <b>more</b> (sloboda), <b>giljotina</b> (društvena osveta), <b>majka</b> (tabu), <b>zvijezde</b> (nježna ravnodušnost), <b>jezik</b> (laž društva vs Meursaultova istina).</div>
          </div>
          <div class="minirev-card">
            <div class="minirev-card-lbl">📌 5 interpretacija</div>
            <div class="minirev-card-val">egzistencijalno-filozofska · mediteransko-antička · juridičko-društvena · postkolonijalna · autobiografska.</div>
          </div>
          <div class="minirev-card">
            <div class="minirev-card-lbl">📌 Most</div>
            <div class="minirev-card-val">‹ <b>H08 Kafka Preobražaj</b> (apsurd kao parabola) · › <b>H10 Sofoklo Antigona</b> (stranac pred zakonom).</div>
          </div>
          <div class="minirev-card">
            <div class="minirev-card-lbl">📌 Najveća greška</div>
            <div class="minirev-card-val">Smatrati Meursaulta <b>„hladnokrvnim ubojicom"</b>. <em>On nije psihopat</em> — on je čovjek koji <em>ne laže</em>. Ne brkati apsurd s nihilizmom.</div>
          </div>
        </div>
        <div class="minirev-quotes">
          <b style="display:block;font-family:var(--mono);font-size:9.5px;color:var(--bronze-l);letter-spacing:1.5px;font-weight:700;text-transform:uppercase;margin-bottom:8px">3 citata napamet</b>
          <ol>
            <li>„Danas mi je umrla majka. Možda i jučer, ne znam." <b>(prva rečenica)</b></li>
            <li>„Optužujem ovog čovjeka da je sahranio majku s kriminalnim srcem." <b>(Tužitelj · suđenje)</b></li>
            <li>„Otvarao sam se prvi put nježnoj ravnodušnosti svijeta." <b>(Meursault · finale)</b></li>
          </ol>
        </div>
      </div>
    </div>

    <!-- == SAMPLE EXAM PROMPT — kako bi moglo doći na ispit == -->
    <div class="exam-prompt">
      <div class="exam-prompt-ttl">📌 Ovako bi moglo doći na ispit</div>
      <div class="exam-prompt-task">
        Analiziraj pojam apsurda u Camusovu Strancu. Kako se Meursaultova radikalna iskrenost pretvara u „kriminalno srce" u očima društva i što to govori o Camusovom shvaćanju sukoba pojedinca i građanske pravde? U argumentaciji povezi Stranca s barem jednim drugim djelom svjetske književnosti.
      </div>
      <div class="exam-prompt-tips">
        <div class="exam-tip">
          <b>🧩 Struktura</b>
          Uvod (50 r.) · 3 odlomka razrade (apsurd kao filozofija · iskrenost vs konvencije · bijela proza), ~120 r. svaki · zaključak (60 r.) = ~470 r.
        </div>
        <div class="exam-tip">
          <b>📌 Citati</b>
          „Danas mi je umrla majka…" (prva rečenica) · „Optužujem ovog čovjeka…" (tužitelj) · „Nježna ravnodušnost svijeta" (finale).
        </div>
        <div class="exam-tip">
          <b>📌 Povezivanje</b>
          Kafka Preobražaj (apsurd kao parabola) ili Dostojevski Zločin i kazna (iskupljenje vs apsurd). Vidi <em>Tab 2 SEC 05 cheatsheet</em>.
        </div>
        <div class="exam-tip">
          <b>📚 Pojmovi</b>
          Apsurd · egzistencijalizam · écriture blanche (bijela proza) · pied-noir · ciklus apsurda · nježna ravnodušnost.
        </div>
      </div>
    </div>

    <div class="pro-gate" data-feature="checkpoint-tracking">
      <div class="cp-grid" id="cp-grid">
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Znam tko je napisao <b>Stranac</b> i kada (Albert Camus, 1942., obvezatno čitanje 2026)</div><span class="cp-hint">Camus</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Mogu ispričati <b>kompoziciju u 2 dijela</b> (život do ubojstva — sahrana, Marie, Raymond, plaža / suđenje i čekanje smrti — sudnica, ćelija, svećenik)</div><span class="cp-hint">Stranac</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Znam ključne likove — <b>Meursault, Marie Cardona, Raymond Sintes, Salamano, Tužitelj, Svećenik, pokojna Majka, bezimeni Arapin</b></div><span class="cp-hint">Likovi</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Razumijem <b>filozofiju apsurda</b> — razilazak između potrebe za smislom i šutnje svijeta; 3 odgovora (samoubojstvo / religija / pobuna); Camus bira pobunu</div><span class="cp-hint">Filozofija</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Znam što je <b>egzistencijalizam, apsurd, écriture blanche (bijela proza), pied-noir, ciklus apsurda</b> (epoha + ključni pojmovi)</div><span class="cp-hint">Pojmovnik</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Razumijem <b>simboliku</b> — sunce (aktivan akter), more (sloboda), jezik (laž konvencije vs istina), giljotina (društvena osveta), zvijezde (nježna ravnodušnost)</div><span class="cp-hint">Simbolika</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Imam <b>barem 2 teze</b> za esej (apsurd kao filozofija, Meursault koji ne laže, sunce kao akter, kritika pravosuđa, bijela proza, 2 dijela kompozicije, pobuna kao oslobođenje)</div><span class="cp-hint">Esej</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Znam <b>3 citata</b> napamet („Danas mi je umrla majka…", „Bilo je to zbog sunca", „Optužujem ovog čovjeka…", „Otvarao sam se prvi put nježnoj ravnodušnosti svijeta")</div><span class="cp-hint">Citatnik</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Prepoznajem <b>kontekst egzistencijalizma</b> — Kierkegaard, Nietzsche, Heidegger, Sartre, de Beauvoir, Marcel · WW2, okupirana Francuska, Holokaust, kolonijalni Alžir</div><span class="cp-hint">Epoha</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Kviz <b>prošao s 75%+</b></div><span class="cp-hint">Kviz</span></div>
    </div>
      <div class="pro-gate-overlay">
        <div class="pro-gate-fade"></div>
        <div class="pro-gate-cta">
          <div class="pro-gate-label"><b>Checkpoint tracking</b> kroz sva 28+22 poglavlja · napredak se sprema · graf spremnosti za maturu</div>
          <a class="pro-gate-btn" href="/pricing?ctx=checkpoint_h09">Otključaj — 9,99€/mj</a>
          <div class="pro-gate-meta">Otkaži bilo kad · Free trial 7 dana</div>
        </div>
      </div>
    </div>

    <div class="cp-final" id="cp-final">
      <div class="cp-final-ico">🎉</div>
      <div class="cp-final-title">H09 ZAVRŠENO!</div>
      <div class="cp-final-msg">
        Savladao si <strong>Egzistencijalizam i Camusov Stranac</strong>. <em>L'Étranger</em> — obvezatno čitanje 2026 — u džepu. Meursault, alžirsko sunce, ubojstvo Arapina, suđenje za „kriminalno srce", nježna ravnodušnost svijeta, filozofija apsurda, pobuna kao oslobođenje — sve ti je jasno. Sljedeći korak: <b>H10 — Sofoklo Antigona</b> (grčka tragedija, sukob obiteljskog prava i državnog zakona). Od Meursaulta (stranac pred francuskom pravdom) do Antigone (strankinja pred Kreontom) — <em>tema „pojedinac protiv zakona" stara je 2500 godina</em>. Sofoklo piše korijen onoga što Camus preobražava u modernu parabolu.
      </div>
      <div class="cp-actions">
        <button class="fcb primary" onclick="/* signup uklonjen */">H10 · Sofoklo Antigona ›</button>
        <button class="fcb" onclick="sw(0)">🔁 Ponovi H09</button>
      </div>

      

      <!-- UPSELL: Discere nakon završenog poglavlja -->
      <div class="upsell" style="margin-top:24px;text-align:left" data-upsell-ctx="checkpoint_finale" data-upsell-target="discere" data-upsell-id="cp_discere">
        <div class="upsell-ico wordmark">Discere</div>
        <div class="upsell-body">
          <div class="upsell-title">Simulator mature <span class="upsell-badge standard">STANDARD</span> <span class="upsell-badge" style="color:var(--t3);border-color:var(--bdm);background:transparent;font-size:8px">9,99 €/mj · uklj. u PRO</span></div>
          <div class="upsell-desc"><strong>Završio si H09 — sada testiraj u stvarnim uvjetima.</strong> Camus, Stranac, egzistencijalizam, apsurd, bijela proza — sve se pojavljuje u školskom eseju i čitanju neknjiževnog teksta. <em>Stranac = obvezatno čitanje 2026.</em> Riješi simulaciju s timerom i automatskim ocjenjivanjem.</div>
        </div>
        <a href="/discere?subject=hrvatski&topic=camus&ctx=h09_checkpoint" class="upsell-cta" onclick="track('upsell_click',{ctx:'checkpoint_finale',target:'discere'},'conversion')">Isprobaj ›</a>
      </div>
    </div>

    <div class="nav-row" style="margin-top:30px">
      <span class="nb" onclick="sw(6)">‹ Kviz</span>
      <span class="nb off">H10 · Sofoklo Antigona (uskoro) ›</span>
    </div>
  </div>

  <div class="chapter-nav-wrap">
    <div class="chapter-nav-hdr">
      <div class="chapter-nav-title">📚 Sljedeća poglavlja</div>
      <div class="chapter-nav-sub">Nastavi učiti — povezana poglavlja u Maturiraj knjižnici</div>
    </div>
    
    <div class="chapter-nav-grid">
      <a class="chapter-nav-card chapter-nav-prev" href="/skripte/hrv/h08">
        <div class="chapter-nav-arrow">‹</div>
        <div class="chapter-nav-meta">
          <div class="chapter-nav-pill">PRETHODNO</div>
          <div class="chapter-nav-name">H08 · Moderna i modernizam</div>
          <div class="chapter-nav-desc">Simbolizam · dekadencija · Kafka</div>
        </div>
      </a>

      <a class="chapter-nav-card chapter-nav-next" href="/skripte/hrv/h10">
        <div class="chapter-nav-meta">
          <div class="chapter-nav-pill chapter-nav-pill-next">SLJEDEĆE</div>
          <div class="chapter-nav-name">H10 · Postmoderna</div>
          <div class="chapter-nav-desc">Metafikcija · intertekst · Borges</div>
        </div>
        <div class="chapter-nav-arrow">›</div>
      </a>
    </div>

    <div class="chapter-nav-related">
      <div class="chapter-nav-related-ttl">🔗 Povezana poglavlja</div>
      <div class="chapter-nav-related-grid">
        <a class="chapter-nav-mini" href="/skripte/hrv/h16">
          <span class="chapter-nav-mini-code">H16</span>
          <span class="chapter-nav-mini-name">Krleža · Glembajevi</span>
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
    <div class="foot-line"><b>Maturiraj.hr</b> · Hrvatski · H09 Egzistencijalizam + Camus Stranac</div>
    <div class="foot-line">Autorski sadržaj · Usklađeno s <a href="https://www.ncvvo.hr/ispitni-katalozi-za-drzavnu-maturu-2025-2026/" target="_blank" rel="noopener noreferrer" onclick="track('ext_link_click',{target:'ncvvo_footer'},'engagement')">NCVVO</a> ispitnim katalogom · Ažurirano <time datetime="2026-04-19">travanj 2026.</time></div>
    <div class="foot-line foot-feedback">
      <span class="foot-fb-q">Imaš prijedlog ili si uočio grešku?</span>
      <button type="button" class="foot-fb-btn" onclick="openFeedbackModal()">📝 Prijavi ›</button>
      <span class="foot-fb-or">ili e-mail</span>
      <a href="mailto:maturirajgreske@gmail.com?subject=H09%20%E2%80%94%20prijava%20gre%C5%A1ke&amp;body=Poglavlje%3A%20H09%20Egzistencijalizam%20%2B%20Camus%20Stranac%0ATab%3A%20%0A%0AOpis%3A%0A" class="foot-fb-mail" onclick="track('ext_link_click',{target:'mailto_feedback'},'engagement')">maturirajgreske@gmail.com</a>
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

.b20-list.b20-numbered li{counter-increment:b20;position:relative;padding:14px 16px 14px 54px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--serif);font-size:13.5px;line-height:1.6;color:var(--t2);transition:all .2s}

.b20-list.b20-numbered li:hover{border-color:var(--bd-br);transform:translateX(2px)}

.b20-list.b20-numbered li::before{content:counter(b20,decimal-leading-zero);position:absolute;left:14px;top:14px;width:28px;height:28px;display:flex;align-items:center;justify-content:center;background:var(--dim-br);border:1px solid var(--bd-br);border-radius:50%;font-family:var(--mono);font-size:10px;font-weight:700;color:var(--bronze-l);letter-spacing:.5px}

.b20-list.b20-numbered li b{color:var(--t1)}

.b20-list.b20-numbered li em{color:var(--bronze-l);font-style:italic}

@media(max-width:600px){
  .b20-list.b20-numbered li{padding:12px 14px 12px 48px;font-size:13px}
  .b20-list.b20-numbered li::before{left:10px;top:12px;width:26px;height:26px;font-size:9.5px}
}

@media print{
  .b20-list.b20-numbered li{break-inside:avoid;border:1px solid #999!important;background:#fff!important}
}

@media(max-width:560px){
  .b20-item{font-size:13.5px;gap:11px;padding:10px 0}
  .b20-num{width:24px;height:24px;font-size:10.5px}
  .box-20{padding:16px 18px}
}

}
/* ══════════════════════════════════════════════════
   H09 — EGZISTENCIJALIZAM + CAMUS STRANAC
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
.cit-card[data-cat="egzist-porodica"]::before{background:#c9a878}
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
.cit-card[data-cat="egzist-porodica"] .cit-eye{color:#d6b890;background:rgba(201,168,120,.14);border-color:rgba(201,168,120,.28)}
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

/* ══ DIAG WIDGET missing CSS ══ */
.diag-bar{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:14px;flex-wrap:wrap}
.diag-prog-wrap{flex:1;height:6px;background:var(--ele);border-radius:3px;overflow:hidden;min-width:120px}
.diag-prog-bar{height:100%;background:linear-gradient(90deg,var(--bronze-d),var(--bronze),var(--gold));border-radius:3px;transition:width .3s ease;width:0%}
.diag-prog-num{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:1px;white-space:nowrap}
.diag-prog-num span{color:var(--green)}
.diag-topic{display:inline-block;font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;color:var(--bronze);text-transform:uppercase;padding:4px 10px;background:var(--dim-br);border:1px solid var(--bd-br);border-radius:10px;margin-bottom:10px}
.diag-prog-txt{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:1.2px;text-transform:uppercase;white-space:nowrap}
.diag-prog-txt span{color:var(--bronze-l);font-weight:700}

/* ══ CITATNIK — eyebrow/source oznake ══ */
.cit-eyebrow{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:8px}
.cit-eye-cat{font-family:var(--mono);font-size:8.5px;letter-spacing:1.8px;text-transform:uppercase;color:var(--bronze-l);padding:2px 8px;background:var(--dim-br);border:1px solid var(--bd-br);border-radius:var(--r1);font-weight:700}
.cit-eye-must{font-family:var(--mono);font-size:8.5px;letter-spacing:1.5px;text-transform:uppercase;color:var(--gold);padding:2px 8px;background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r1);font-weight:700}
.cit-card[data-cat="meursault"] .cit-eye-cat{color:var(--red-l);background:var(--dim-r);border-color:var(--bd-r)}
.cit-card[data-cat="marie"] .cit-eye-cat{color:var(--gold);background:var(--dim-go);border-color:var(--bd-go)}
.cit-card[data-cat="raymond"] .cit-eye-cat{color:#d6a890;background:rgba(201,168,120,.14);border-color:rgba(201,168,120,.28)}
.cit-card[data-cat="sudac"] .cit-eye-cat{color:var(--teal);background:var(--dim-t);border-color:var(--bd-t)}
.cit-card[data-cat="svecenik"] .cit-eye-cat{color:#b8a8a8;background:rgba(160,138,138,.14);border-color:rgba(160,138,138,.28)}
.cit-card[data-cat="camus"] .cit-eye-cat{color:#e0a077;background:rgba(224,160,119,.12);border-color:rgba(224,160,119,.25)}
.cit-card[data-cat="kontekst"] .cit-eye-cat{color:#c5a1d9;background:rgba(197,161,217,.12);border-color:rgba(197,161,217,.25)}
.cit-src{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:.5px;margin-top:10px;display:flex;gap:8px;flex-wrap:wrap;align-items:center;padding-top:8px;border-top:1px dashed var(--bdm)}
.cit-src-author{color:var(--bronze-l);font-weight:700;font-size:10.5px;letter-spacing:.3px}
.cit-src-loc{color:var(--t3);font-style:italic;font-size:10px}




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
   HRVATSKI H09 — JS
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
  code: 'h09',
  title: 'Egzistencijalizam + Camus Stranac'
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
    q: "Tko je autor romana Stranac?",
    opts: ["Jean-Paul Sartre", "Albert Camus", "André Malraux", "Marcel Proust"],
    correct: 1,
    topic: "Camus — autor"
  },
  {
    q: "Kada je objavljen Stranac (L'Étranger)?",
    opts: [
      "1932. godine",
      "1942. godine",
      "1949. godine",
      "1957. godine"
    ],
    correct: 1,
    topic: "Datacija djela"
  },
  {
    q: "Koliko dijelova ima roman Stranac?",
    opts: [
      "2 dijela",
      "3 dijela",
      "4 dijela",
      "5 dijelova"
    ],
    correct: 0,
    topic: "Kompozicija"
  },
  {
    q: 'Što Meursault navodi kao razlog ubojstva Arapina?',
    opts: [
      "Ljubomoru",
      "Politički sukob",
      "Sunce",
      "Samoobranu"
    ],
    correct: 2,
    topic: "Ključna scena"
  },
  {
    q: "Tko dolazi u Meursaultovu ćeliju u finalu romana?",
    opts: [
      "Marie",
      "Raymond",
      "Tužitelj",
      "Svećenik"
    ],
    correct: 3,
    topic: "Finale"
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
  var corEl2 = document.getElementById('diag-correct');
  if(corEl2) corEl2.textContent = '0';
  var barEl2 = document.getElementById('diag-prog-bar');
  if(barEl2) barEl2.style.width = '0%';
  diagRender();
  track('diag_start', {chapter: CURRENT_CHAPTER.code}, 'engagement');
}

function diagSkip(){
  document.getElementById('diag').setAttribute('data-state', 'dismissed');
  try{ sessionStorage.setItem('mt.hrv.h09.diag', 'skipped') }catch(e){}
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
    msg = '🏆 Već vladaš H09 — bravo!';
    rec = 'Tvoj fokus: <b>esej alat</b> i <b>citatnik</b> za Kafku. Pređi na simulaciju u <a href="/discere?subject=hrvatski&topic=camus&ctx=h09_diag_top" onclick="track(\\'upsell_click\\',{ctx:\\'diag_top_score\\',target:\\'discere\\'},\\'conversion\\')">Discere simulatoru</a> da provjeriš pod uvjetima ispita.';
  } else if(n === 4){
    msg = '🌟 Odlično — solidne osnove.';
    rec = 'Imaš većinu, ali jedna rupica. Preporučujemo: <b>Preobražaj deep-dive</b> (Tab 1) + <b>Pojmovnik</b> kao revizija. Preskoči duga čitanja, idi direktno na <b>Citatnik</b> i <b>Drill</b>.';
  } else if(n === 3){
    msg = '📚 Dobre osnove — treba malo više rada.';
    rec = 'Imaš osnovni pregled, ali ti fali sigurnost u detaljima. Plan: <b>(1)</b> proradi cijelu Teoriju, <b>(2)</b> Preobražaj deep-dive, <b>(3)</b> Drill flashcards 2× prije Kviza.';
  } else if(n === 2){
    msg = '💪 Tu smo da ti pomognemo — krenimo od početka.';
    rec = 'Ne brini — zato si tu. Idi <b>tab po tab redom</b> (Teorija › Preobražaj › Esej alat). Ne preskači. Završi s <b>Drillom i Kvizom</b> kao provjera.';
  } else {
    msg = '🎯 Početna točka — sve je pred tobom.';
    rec = 'Moderna je zahtjevna epoha, ali strukturirana — Kafka kao centar, ekspresionizam i egzistencijalizam kao kontekst. Prati redoslijed tabova, ne žuri. <b>Cilj #1:</b> razumjeti Gregora Samsu — 8 likova, 3 dijela kompozicije, kafkijansku poetiku, Gretinu paralelnu preobrazbu (Tab 1, sekcije 01–05). Kad to imaš, sve ostalo dolazi prirodno.';
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
    var s = sessionStorage.getItem('mt.hrv.h09.diag');
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
    tab: lsLoad('mt.hrv.h09.tab', 0)
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
    p_tab_index: lsLoad('mt.hrv.h09.tab', 0),
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
    var raw = localStorage.getItem('mt.hrv.h09.cit_favs');
    CIT_STATE.favs = raw ? JSON.parse(raw) : {};
  } catch(e){ CIT_STATE.favs = {}; }
}

function _citSaveFavs(){
  try {
    localStorage.setItem('mt.hrv.h09.cit_favs', JSON.stringify(CIT_STATE.favs));
  } catch(e){}
}

function _citLoadCopyCount(){
  try {
    var raw = localStorage.getItem('mt.hrv.h09.cit_copy');
    CIT_STATE.copyCount = raw ? JSON.parse(raw) : {};
  } catch(e){ CIT_STATE.copyCount = {}; }
}

function _citSaveCopyCount(){
  try {
    localStorage.setItem('mt.hrv.h09.cit_copy', JSON.stringify(CIT_STATE.copyCount));
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
var TAB_LABELS = ['Teorija','Stranac','Esej alat','Citatnik','Pojmovnik','Drill','Kviz','Checkpoint'];

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
  d01: false, d02: false, d03: false, d04: true,  d05: false,
  d06: false, d07: false, d08: false, d09: false, d10: true,
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



/* Override applyTier — direktan atribut-toggle umjesto CSS cascade ovisnosti
   (jsdom CSS parser ne parsa sva pravila u nekim velikim fajlovima) */
var _origApplyTier = typeof applyTier === 'function' ? applyTier : null;
function applyGateState(){
  var tier = (document.body.getAttribute('data-tier')||'free');
  var hidden = tier === 'standard' || tier === 'pro';
  document.querySelectorAll('.pro-gate-overlay').forEach(function(ov){
    ov.setAttribute('data-gate-state', hidden ? 'hidden' : 'visible');
  });
}
/* Wrap original applyTier da nakon tier promjene toggle-a gate state */
applyTier = function(){
  if(_origApplyTier) _origApplyTier.apply(this, arguments);
  applyGateState();
};
/* Apply na load */
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', applyGateState);
} else {
  applyGateState();
}

function sw(i){
  // Track prethodni tab duration
  var prevTab = lsLoad('mt.hrv.h09.tab', null);
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
  lsSave('mt.hrv.h09.tab',i);

  VISITED_TABS[i]=true;
  lsSave('mt.hrv.h09.visited',VISITED_TABS);
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
  lsSave('mt.hrv.h09.prog',p);
}

/* == RESTORE BANNER == */
function checkRestore(){
  var prog=lsLoad('mt.hrv.h09.prog',null);
  var tab=lsLoad('mt.hrv.h09.tab',null);
  var cp=lsLoad('mt.hrv.h09.cp',null);
  var visited=lsLoad('mt.hrv.h09.visited',null);
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
  var tab=lsLoad('mt.hrv.h09.tab',0);
  var prog=lsLoad('mt.hrv.h09.prog',5);
  var visited=lsLoad('mt.hrv.h09.visited',{});
  VISITED_TABS=visited;
  if(prog) updateProgress(prog);
  updateTabBadges();
  cpLoad();
  if(tab!==null) sw(parseInt(tab));
}
function dismissRestore(){
  document.getElementById('restore-banner').classList.remove('show');
  ['mt.hrv.h09.prog','mt.hrv.h09.tab','mt.hrv.h09.cp','mt.hrv.h09.visited','mt.hrv.h09.quiz_passed'].forEach(function(k){try{localStorage.removeItem(k)}catch(e){}});
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
/* Old live-search logic removed — H08 uses new initPojmovnikH09 in Tab 4 */



/* ===========================================
   FLASHCARDS
   =========================================== */
var FC_CARDS=[
  {cat:'AUTOR',term:'Albert Camus',def:'(1913.–1960.) Pied-noir — Francuz iz alžirske kolonije. Otac poginuo u WWI, majka polugluha čistačica. Tuberkuloza od 17g. Studij filozofije, Otpor u WWII (ureduje ilegalni Combat). Trilogija apsurda (1942.): Stranac + Mit o Sizifu + Caligula. Sukob sa Sartreom (1952.). Nobelova nagrada 1957. Poginuo u prometnoj nesreći 4.1.1960 — apsurdna smrt.'},
  {cat:'DJELO',term:'Stranac (L\\'Étranger, 1942.)',def:'Roman u prvom licu, 2 dijela: (I) život do ubojstva — 6 poglavlja; (II) suđenje i čekanje smrtne kazne — 5 poglavlja. Granica između dijelova: pucnjevi na plaži. Objavljen u Gallimardu 1942. u nacistički okupiranoj Francuskoj. Najčitaniji francuski roman 20. st.'},
  {cat:'DJELO',term:'Prva rečenica Stranca',def:'„Danas mi je umrla majka. Možda i jučer, ne znam." Najpoznatiji početak francuske literature 20. st. Odmah uvodi Meursaultov afektivni neutralitet — ne zna ni kada je majka umrla. In medias res apsurda.'},
  {cat:'LIK',term:'Meursault',def:'Protagonist i pripovjedač (1. lice). Kancelarijski službenik u Alžiru, ~30g. Hladan, distanciran, afektivno neutralan — ne plače na pogrebu majke, ne voli Marie na romantičan način, ne kaje se. „Stranac" u vlastitom društvu. Ubija Arapina na plaži zbog sunca.'},
  {cat:'LIK',term:'Marie Cardona',def:'Bivša daktilografkinja, Meursaultova djevojka. Sutradan nakon sahrane počinju vezu — tjelesna, ne emocionalna. Želi brak; Meursault kaže „to ne znači ništa." Svjedoči na suđenju — njezina izjava o Meursaultovom hladnom ponašanju na pogrebu ide protiv njega.'},
  {cat:'LIK',term:'Raymond Sintes',def:'Susjed, nasilnik prema mauretanskoj djevojci. Meursault mu pomaže napisati pismo (iz ravnodušnosti, ne prijateljstva). Sukob s Arapima (bratom djevojke) na plaži — direktan povod ubojstva. Simbol slučajnosti i apsurdnog lanca uzroka.'},
  {cat:'DJELO',term:'Ubojstvo na plaži',def:'Meursault puca na Arapina — jednom, pa još četiri puta. Razlog koji daje: „Bilo je to zbog sunca." Sud to ne prihvata. Ali u Camusovoj poetici sunce je realan akter koji gazi razum. Drugi 4 pucnja filozofski su važniji — hladna odluka, ne afekt.'},
  {cat:'DJELO',term:'Suđenje i optužba',def:'Tužitelj optužuje Meursaulta ne samo za ubojstvo nego za to kako se ponašao na majčinoj sahrani. „Optužujem ovog čovjeka da je sahranio majku s kriminalnim srcem." Sude mu za društvenu nekonformnost — apsurdna inverzija pravde.'},
  {cat:'POJAM',term:'Apsurd (Camus)',def:'Sukob između čovjekove potrebe za smislom i šutnje svijeta koji smisla nema. Nije ni pesimizam ni optimizam — to je realan opis stanja. Odgovor: pobuna, sloboda, strast. Mit o Sizifu (1942.): „Treba zamisliti Sizifa sretnim." Bez iluzija, ali s punoćom.'},
  {cat:'POJAM',term:'Afektivni neutralitet',def:'Meursaultova incapacidad za emocionalnu reakciju u socijalno „normalnim" situacijama: ne plače na pogrebu, ne voli romantično, ne kaje se za ubojstvo. Nije patologija — to je Camusov stilski i filozofski izbor: lik koji ne glumi osjećaje koje ne osjeća.'},
  {cat:'POJAM',term:'Egzistencijalizam vs apsurd',def:'Sartre: egzistencija prethodi esenciji — čovjek stvara smisao. Camus: smisla nema i nema načina da ga stvoriš — apsurd je. Razlika: Sartre nudi projekt, Camus nudi pobunu bez projekta. Sukob 1952: Pobunjeni čovjek — Camus kritizira marksistički teror. Sartre ga napada.'},
  {cat:'KONTEKST',term:'Mit o Sizifu (1942.)',def:'Filozofski esej, dio trilogije apsurda. Sizif gura kamen na brdo — uvijek pada nazad. Apsurd = Sizifov položaj. Odgovor: ne samoubojstvo (bijeg), ne vjera (filozofski skok) — nego lucidna pobuna. „Treba zamisliti Sizifa sretnim." Camus uzima Camus uzima Camusov je najpoznatiji citat.'},
  {cat:'KONTEKST',term:'Pied-noir',def:'Francuski kolonisti i njihovi potomci rođeni u Alžiru. Camus je pied-noir — Francuz koji nije ni Francuz ni Alžirac. Ta hibridna pozicija objašnjava Stranca: Meursault je stranac i u Alžiru i u Parizu. Alžirski rat za neovisnost (1954.–1962.) Camusu lomi srce — ne može stati ni uz jednu stranu.'},
  {cat:'KONTEKST',term:'Trilogija apsurda',def:'Stranac (roman, 1942.) + Mit o Sizifu (esej, 1942.) + Caligula (drama, 1944.). Tri žanra, jedna tema: kako živjeti bez metafizičke utjehe. Caligula — car koji, shvativši apsurd, donosi apsurdne odluke. Sve tri nastale u nacistički okupiranoj Francuskoj.'},
  {cat:'KONTEKST',term:'Most H08 › H09 › H10',def:'Kafka (H08) anticipira apsurd: Gregor Samsa otuđen, birokracija kafkijanska. Camus (H09) imenuje i filozofira apsurd: Meursault svjestan, Sizif sretan. Postmoderna (H10): apsurd postaje igra (Eco, Pavličić). Kontinuitet: otuđenje › apsurd › postmoderna ironija.'}
];
var fcIdx=0, fcKnown=0, fcUnknown=0, fcOrder=[];

/* == DRILL STATE PERSISTENCE (v3.5) ==
   Pamti kartice i progress dok se korisnik mota kroz tabove.
   sessionStorage — resetira se na novi tab/window (svjesno, da ne
   blokira "novi krug" između dana). Za cross-session, switch na lsSave.
============================================= */
var DRILL_SS_KEY = 'mt.hrv.h09.drill';

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
  {l:'Meursault',d:'alžirski činovnik koji ne plače na sahrani majke'},
  {l:'Marie Cardona',d:'bivša daktilografkinja, ljubavnica nakon sahrane'},
  {l:'Raymond Sintes',d:'susjed-nasilnik, Meursault mu pomaže napisati pismo'},
  {l:'Salamano',d:'stari susjed sa starim šugavim psom'},
  {l:'Tužitelj',d:'optužuje da je „sahranio majku s kriminalnim srcem"'},
  {l:'Svećenik',d:'dolazi u ćeliju, Meursault eksplodira'},
  {l:'Majka (Mama)',d:'umire u domu staraca u Marengu'},
  {l:'Arapin',d:'ubijen na plaži, bez imena u Camusovom tekstu'},
  {l:'Masson',d:'Raymondov prijatelj, vlasnik kućice na plaži'},
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
  {q:'Što je prva rečenica Stranca?',a:[
    'Cijelo je sunce udaralo na moje čelo.',
    'Danas mi je umrla majka. Možda i jučer, ne znam.',
    'Bilo je to zbog sunca.',
    'Otvarao sam se prvi put nježnoj ravnodušnosti svijeta.'
  ],c:1,e:'„Danas mi je umrla majka. Možda i jučer, ne znam." je <b>najpoznatiji početak francuske literature 20. stoljeća</b>. „Možda i jučer" — datum nije važan. Brisanje emocionalne hijerarhije.'},
  
  {q:'Koliko dijelova ima Stranac?',a:['1','2','3','5'],c:1,e:'Roman ima <b>2 dijela</b>. I. dio (6 pogl.) prati Meursaulta u životu. II. dio (5 pogl.) prati suđenje i čekanje smrti. <em>Granica</em>: pucnjevi na plaži.'},
  
  {q:'Koliko puta Meursault puca u Arapina?',a:['Jednom','Dvaput','Pet puta (1+4)','Sedam puta'],c:2,e:'Meursault puca <b>jednom — pa još četiri puta</b>. „Bilo je kao da kucam četiri puta na vrata nesreće." Drugi pucnji su filozofski važniji od prvog.'},
  
  {q:'Što Meursault kaže kao razlog ubojstva pred sucem?',a:[
    'Da je bio uplašen',
    'Da se branio',
    'Da je bilo zbog sunca',
    'Da nije znao što čini'
  ],c:2,e:'„<b>Bilo je to zbog sunca.</b>" Sud to odbija — zvuči apsurdno. Ali u Camusovoj poetici sunce je <em>realan akter</em>, ne metafora.'},
  
  {q:'Kako tužitelj formulira središnju optužbu?',a:[
    '„Optužujem ovog čovjeka za hladnokrvno ubojstvo"',
    '„Optužujem ovog čovjeka da je sahranio majku s kriminalnim srcem"',
    '„Optužujem ovog čovjeka za nedostatak savjesti"',
    '„Optužujem ovog čovjeka za izdaju domovine"'
  ],c:1,e:'<b>„Optužujem ovog čovjeka da je sahranio majku s kriminalnim srcem."</b> Tužitelj otvoreno priznaje — sudi mu se za pogreb, ne za ubojstvo. <em>Klasičan primjer kako pravda postaje predstava.</em>'},
  
  {q:'Tko dolazi u Meursaultovu ćeliju u zadnjem poglavlju?',a:['Marie','Tužitelj','Svećenik','Raymond'],c:2,e:'<b>Svećenik (kapelan).</b> Meursault ga tri puta odbija. Sam dolazi. Pokušava obratiti — Meursault eksplodira. <em>Prva i jedina prava emocionalna scena romana.</em>'},
  
  {q:'Što je „nježna ravnodušnost svijeta"?',a:[
    'Meursaultov početni stav prema obitelji',
    'Tužiteljev opis Meursaultove duše',
    'Meursaultov trenutak prosvjetljenja apsurda u finalu',
    'Svećenikov teološki argument'
  ],c:2,e:'„Nježna ravnodušnost svijeta" (<em>tendre indifférence du monde</em>) je <b>trenutak prosvjetljenja apsurda</b> u finalu. Svijet ne brine — i to je oslobađajuće. Otvara put pobuni.'},
  
  {q:'Koje je Camusovo glavno filozofsko djelo iz iste godine kao Stranac?',a:[
    'Pobunjeni čovjek',
    'Bitak i ništavilo',
    'Mit o Sizifu',
    'Egzistencijalizam je humanizam'
  ],c:2,e:'<b>Mit o Sizifu (1942.)</b> — istovremeno sa Strancem. Roman = ilustracija; esej = teorija. Završava: „<em>Treba zamisliti Sizifa sretnim.</em>" Dva dijela istog ciklusa apsurda.'},
  
  {q:'Što znači „pied-noir"?',a:[
    'Francuski intelektualac',
    'Francuski Europljanin rođen u Alžiru',
    'Alžirski Arap',
    'Francuski ratnik u sjevernoj Africi'
  ],c:1,e:'„<b>Crna noga</b>" — francuski Europljanin <em>rođen u Alžiru</em>. Camus je tipičan pied-noir. Daje mu mediteranski osjećaj prirode i razdvaja od pariških egzistencijalista.'},
  
  {q:'Koje godine je Camus dobio Nobelovu nagradu?',a:['1942.','1949.','1957.','1960.'],c:2,e:'<b>1957.</b> — drugi najmlađi laureat ikad (44 god.). U govoru u Stockholmu Camus govori o ulozi pisca u svom vremenu — solidarnost, ne neutralnost.'},
  
  {q:'Kako je Camus umro?',a:[
    'Od tuberkuloze',
    'U prometnoj nesreći',
    'Od starosti',
    'Samoubojstvom'
  ],c:1,e:'<b>4. siječnja 1960., u prometnoj nesreći</b> kod Villeblevin (Francuska). Vozio Michel Gallimard. <em>U džepu mu je bila neiskorištena karta za vlak.</em> Apsurdna smrt — tragično ironična.'},
  
  {q:'Što je „écriture blanche"?',a:[
    'Camusova autobiografija',
    'Bijela proza — minimalistički stil bez metafora i emocije',
    'Kolonijalna književnost',
    'Religiozno pisanje'
  ],c:1,e:'„<b>Bijela proza</b>" — Camusov stil. Kratke rečenice. Konkretni glagoli. Bez metafora. Bez emocije. <em>Roland Barthes (1953.) gradi teorijski pojam oko Camusa.</em>'},
  
  {q:'Što je apsurd kod Camusa?',a:[
    'Nelogičnost',
    'Razilazak između čovjekove potrebe za smislom i šutnje svijeta',
    'Politički nered',
    'Komični nesporazum'
  ],c:1,e:'Apsurd je <b>razilazak između čovjekove potrebe za smislom i šutnje svijeta</b>. Nije depresija — <em>jasno viđenje besmisla</em>. Rađa se u susretu čovjeka i svijeta. <b>Ne brkati s nihilizmom.</b>'},
  
  {q:'Tko je Marie Cardona?',a:[
    'Meursaultova kolegica iz škole',
    'Bivša daktilografkinja, ljubavnica nakon sahrane majke',
    'Susjeda Salamanove',
    'Tužiteljeva supruga'
  ],c:1,e:'Marie je <b>bivša daktilografkinja u Meursaultovoj firmi</b>. <em>Sutradan nakon sahrane</em> sastaju se na bazenu. Veza je tjelesna, vesela, plitka. Pita ga „voliš li me?" — odgovara „to ne znači ništa".'},
  
  {q:'Kako se završava Mit o Sizifu?',a:[
    '„Bog je mrtav"',
    '„Pobunjujem se, dakle jesmo"',
    '„Treba zamisliti Sizifa sretnim"',
    '„Drugi su pakao"'
  ],c:2,e:'<b>„Treba zamisliti Sizifa sretnim."</b> Pobuna nije junaštvo — ona je <em>sretno prihvaćanje besmisla</em>. Najpoznatija Camusova filozofska rečenica. Povezuje s Meursaultovim finalom.'},
  
  {q:'Tko je u suđenju otežavajući svjedok?',a:[
    'Salamano',
    'Marie',
    'Raymond',
    'Vlasnik kavane'
  ],c:2,e:'<b>Raymond.</b> Njegovo prijateljstvo s Meursaultom postaje otežavajuća okolnost — Raymond je „svodnik", Meursault mu je pomogao. Tužitelj koristi vezu da pokaže Meursaultovu „moralnu deformaciju".'},
  
  {q:'Koji autor 2013. piše „odgovor" na Stranca iz arapske perspektive?',a:[
    'Yasmina Khadra',
    'Kamel Daoud',
    'Tahar Ben Jelloun',
    'Assia Djebar'
  ],c:1,e:'<b>Kamel Daoud — Meursaultova istraga (2013.).</b> Alžirsko-francuski autor. <em>Daje glas ubijenom Arapinu — zove se Musa, ima brata Harouna koji pripovijeda.</em> Goncourt prvog romana 2015.'},
  
  {q:'S kim Camus prekida prijateljstvo 1952.?',a:[
    'Andréom Malrauxom',
    'Jean-Paulom Sartreom',
    'Simoneom de Beauvoir',
    'Albertom Schweitzerom'
  ],c:1,e:'Sartre objavljuje u <em>Les Temps Modernes</em> oštru kritiku Camusovog <b>Pobunjenog čovjeka</b>. Razlog: Camus odbija opravdati revolucionarno nasilje. <em>Sartre brani SSSR; Camus optužuje GULAG.</em> Prijateljstvo se prekida zauvijek.'},
  
  {q:'Što Meursault i Marie rade sutradan nakon sahrane majke?',a:[
    'Idu u crkvu',
    'Idu na bazen i u kino na komediju s Fernandelom',
    'Posjećuju majčin grob',
    'Razgovaraju o vjenčanju'
  ],c:1,e:'Meursault i Marie idu na <b>bazen, kino na komediju s Fernandelom, vode ljubav</b>. Ono što društvo zove „neukus" Meursault zove „život". <em>Iskrenost koja vrijeđa.</em>'},
  
  {q:'Što Camus odbija u Mitu o Sizifu kao odgovor na apsurd?',a:[
    'Pobunu',
    'Samoubojstvo i bijeg u religiju',
    'Ljubav',
    'Filozofiju'
  ],c:1,e:'Camus odbija <b>(1) samoubojstvo</b> (fizički bijeg) i <b>(2) „filozofski bijeg"</b> u religiju. Bira <b>(3) pobunu</b> — živjeti unatoč besmislu. „<em>Treba zamisliti Sizifa sretnim.</em>"'},
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
  var url='https://maturiraj.hr/skripte/hrv/h09';
  var text='Prošao/la sam kviz iz H08 · Moderna + Kafka Preobražaj na maturiraj.hr — '+score+'/'+QUIZ.length+' ('+pct+'%) 🎓';
  var fb=document.getElementById('qz-share-fb');

  // Try Web Share API (mobile)
  if(navigator.share){
    navigator.share({title:'Maturiraj.hr · H09 Kviz',text:text,url:url})
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
  if(qzState.score>=QUIZ.length*0.6){QUIZ_PASSED=true;lsSave('mt.hrv.h09.quiz_passed',true)}
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
  lsSave('mt.hrv.h09.cp',states);
}
function cpLoad(){
  var states=lsLoad('mt.hrv.h09.cp',null);
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
  var visited=lsLoad('mt.hrv.h09.visited',null);
  if(visited){VISITED_TABS=visited}
  QUIZ_PASSED=lsLoad('mt.hrv.h09.quiz_passed',false);
  VISITED_TABS[0]=true;
  updateTabBadges();
  recomputeProgress();

  // Breadcrumb: reflect current tab (v3.6)
  var currentTab = lsLoad('mt.hrv.h09.tab', 0);
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
        var curr=parseInt(lsLoad('mt.hrv.h09.tab',0));
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

  if(!lsLoad('mt.hrv.h09.hinted',false)){
    setTimeout(function(){lsSave('mt.hrv.h09.hinted',true)},3000);
  }
});

/* == POJMOVNIK SEARCH + FILTER (Tab 4) == */
(function initPojmovnikH09(){
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
    var curr = parseInt(localStorage.getItem('mt.hrv.h09.tab') || '0', 10);
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
  var quote = '„Danas mi je umrla majka. Možda i jučer, ne znam." — Albert Camus, Stranac, 1942.';
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

/* == ESEJ BROJAČ — Tab 2 (H08) == */
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
  var STORAGE_KEY = 'mt.hrv.h09.wc_text';

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
    try { localStorage.removeItem('mt.hrv.h09.wc_text'); } catch(e){}
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
  try { localStorage.removeItem('mt.hrv.h09.cp'); } catch(e){}
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
/* WC_UPDATE_FALLBACK */

function wcUpdate(){
  var ta = document.getElementById('wc-ta') || document.getElementById('wc-textarea') || document.getElementById('wc-input');
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


export default function H09Chapter() {
  useEffect(() => {
    let roots = [];
    const mountPortal = (id, el) => {
      const container = document.getElementById(id);
      if (!container) return null;
      const root = createRoot(container);
      root.render(el);
      return root;
    };
    const raf = requestAnimationFrame(() => {
      const l3 = document.getElementById('l3');
      if (l3) {
        const rootL3 = createRoot(l3);
        rootL3.render(
          <CitatnikH09
            onBack={() => typeof window.sw === 'function' && window.sw(2)}
            onNext={() => typeof window.sw === 'function' && window.sw(4)}
          />
        );
        roots.push(rootL3);
      }
      const l4 = document.getElementById('l4');
      if (l4) {
        const rootL4 = createRoot(l4);
        rootL4.render(
          <PojmovnikH09
            onBack={() => typeof window.sw === 'function' && window.sw(3)}
            onNext={() => typeof window.sw === 'function' && window.sw(5)}
          />
        );
        roots.push(rootL4);
      }

      roots = [
        ...roots,
        mountPortal('h09c-author-card-camus',          <AuthorCardCamus />),
        mountPortal('h09c-timeline-camus',             <TimelineCamus />),
        mountPortal('h09c-compare-camus-sartre',       <CompareCamusSartre />),
        mountPortal('h09c-pop-kultura-camus',          <PopKulturaCamus />),
        mountPortal('h09c-hero-quote-stranac',         <HeroQuoteStranac />),
        mountPortal('h09c-stat-cards-stranac',         <StatCardsStranac />),
        mountPortal('h09c-simboli-grid-stranac',       <SimboliGridStranac />),
        mountPortal('h09c-compare-stranac-preobrazaj', <CompareStranacPreobrazaj />),
        mountPortal('h09c-accordion-esej-teze-h09',    <AccordionEsejTezeH09 />),
      ];
    });
    return () => {
      cancelAnimationFrame(raf);
      setTimeout(() => roots.forEach(r => r?.unmount()), 0);
    };
  }, []);
  return (
    <ChapterWrapper
      chapterId="H09"
      bodyHtml={BODY_HTML}
      stylesCss={STYLES_CSS}
      scriptsJs={SCRIPTS_JS}
    />
  );
}

export const HRV_POGAVLJE_09 = null
