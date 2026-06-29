/**
 * H17 — Maturiraj.hr — Maturiraj.hr
 * Auto-generated from Maturiraj_Hrvatski_H17.html
 * 
 * Strategy: Hybrid HTML-in-JSX (Strategy C)
 * - Body HTML rendered via dangerouslySetInnerHTML
 * - Inline <style> blocks injected at mount
 * - Inline <script> blocks executed at mount
 * - All onclick/oninput/etc. handlers preserved
 * - SEO via Next.js Metadata API (in page.jsx)
 */
'use client';

import ChapterWrapper from './ChapterWrapper';
import { SHARED_LANG_CSS } from './shared-lang-styles';

const BODY_HTML = `<a class="skip-link" href="#main">Preskoči na sadržaj</a>
<div class="read-progress" aria-hidden="true"><div class="read-progress-bar" id="rpbar"></div></div>
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
  <a class="sb-item" data-code="h12" href="/skripte/hrv/h12"><span class="sb-dot"></span>H12 · Marulić i hrv. rens.</a>
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
    <span id="sb-footer-pos">17 / 28</span> · <span id="sb-footer-title">stilske figure</span>
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
    <span class="bc-cur">H17 · Stilske figure</span>
    <span class="bc-sep bc-tab-sep">/</span>
    <span class="bc-tab" id="bc-tab">Teorija</span>
  </div>

  <!-- COUNTDOWN + ACTIONS -->
  <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:20px">
    <div class="countdown" style="margin-bottom:0">
      ⏳ Do ispita HRV: <strong id="cd-days">—</strong> dana &nbsp;<span style="font-size:9px;color:var(--t3)">(15. 6. 2026.)</span>
    </div>
    <button class="fcb" onclick="window.print()" style="font-size:10px" title="Print / PDF (Ctrl+P)">🖨 Print</button>
    <button class="fcb" onclick="navigator.share?navigator.share({title:'H17 · Stilske figure',url:window.location.href}):navigator.clipboard.writeText(window.location.href)" style="font-size:10px" title="Podijeli">📤 Dijeli</button>
    <span style="font-family:var(--mono);font-size:9px;color:var(--t3);margin-left:auto">
      <span class="kbd">←</span> <span class="kbd">→</span> tabovi · <span class="kbd">?</span> pomoć
    </span>
  </div>

  <!-- HERO -->
  <header class="hero">
    <div class="hero-chapter">H17 &nbsp;·&nbsp; Stil i izraz &nbsp;·&nbsp; Stilske figure · Leksikon</div>
    <h1 class="hero-title">Stilske figure<br><span>leksikon i primjeri</span></h1>
    <p class="hero-sub">
      <strong>Sustavni leksikon za analizu ulomaka na maturi.</strong> <em>45 figura</em> u 4 kategorije (tropi, figure riječi, rečenice, zvuka) s primjerima iz Marulića, Šenoe, Mažuranića, Krleže, Shakespearea i drugih. Scanner detektira figure u ulomku, <em>printabilni cheat sheet</em> za brzu referencu. <strong>Nije poglavlje — priručnik za analizu.</strong>
    </p>
    <div class="hero-chips">
      <span class="hchip br">▶ H17 leksikon</span>
      <span class="hchip go">🎨 45 figura</span>
      <span class="hchip te">🔍 Scanner ulomka</span>
      <span class="hchip pa">📄 Printabilni cheat sheet</span>
      <span class="hchip re">📚 Primjeri iz H12–H16</span>
    </div>
  </header>


  <!-- ══ SOCIAL PROOF + COUNTDOWN ═════════════════
       Playbook P5.1 + P5.2 — trust + urgency
       Brojevi se renderiraju iz JS-a (vidi renderSocialProof)
  ═══════════════════════════════════════════════════ -->
  <div class="social-proof" id="social-proof" aria-label="Statistika platforme"></div>

  <!-- Countdown se dinamički renderira iz JS-a -->
  <div class="countdown" id="countdown" aria-label="Do mature" style="display:none"></div>

  <!-- TABS -->
  <div class="tabs" role="tablist" aria-label="Dijelovi poglavlja">
    <button class="tab on" id="tab0" onclick="sw(0)" role="tab" aria-selected="true" aria-controls="l0">📖 Teorija<span class="tab-done" id="td0"></span></button>
    <button class="tab" id="tab1" onclick="sw(1)" role="tab" aria-selected="false" aria-controls="l1">🎨 Tropi<span class="tab-done" id="td1"></span></button>
    <button class="tab" id="tab2" onclick="sw(2)" role="tab" aria-selected="false" aria-controls="l2">📝 Figure riječi<span class="tab-done" id="td2"></span></button>
    <button class="tab" id="tab3" onclick="sw(3)" role="tab" aria-selected="false" aria-controls="l3">📐 Figure rečenice<span class="tab-done" id="td3"></span></button>
    <button class="tab" id="tab4" onclick="sw(4)" role="tab" aria-selected="false" aria-controls="l4">🔊 Figure zvuka<span class="tab-done" id="td4"></span></button>
    <button class="tab" id="tab5" onclick="sw(5)" role="tab" aria-selected="false" aria-controls="l5">⚡ Scanner+Drill<span class="tab-lock">PRO</span></button>
    <button class="tab" id="tab6" onclick="sw(6)" role="tab" aria-selected="false" aria-controls="l6">🧠 Kviz<span class="tab-badge">20</span><span class="tab-done" id="td6"></span></button>
    <button class="tab" id="tab7" onclick="sw(7)" role="tab" aria-selected="false" aria-controls="l7">📄 Cheat sheet</button>
  </div>

  <!-- ══════════════════════════════════════
       TAB 0 · TEORIJA
  ══════════════════════════════════════ -->
  <div class="layer on" id="l0" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-pa">Stilske figure</span>
      <span class="pill p-br">45 figura</span>
      <span class="pill p-go">4 kategorije</span>
      <span class="pill p-t">Scanner</span>
      <span class="pill p-r">Cheat sheet</span>
    </div>

    <!-- DIJAGNOSTIKA -->
    <div class="box-int" style="margin-bottom:20px">
      <div class="box-int-lbl">🎯 Brza dijagnostika H17 — 5 pitanja</div>
      <div class="diag" data-state="intro" id="diag0" style="">
      <style>#diag0[data-state="dismissed"]{display:none}</style>
        <div class="diag-intro">
          <div class="diag-intro-icon">🎯</div>
          <div class="diag-intro-body">
            <h4>Provjeri gdje si s prepoznavanjem stilskih figura</h4>
            <p>5 pitanja (&lt;2 min). Na kraju: personalizirana preporuka gdje započeti učiti. Rezultat se ne sprema.</p>
          </div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:4px">
            <button class="diag-btn diag-btn-primary" onclick="diag0Start()">▶ Pokreni dijagnostiku</button>
            <button class="diag-btn diag-btn-ghost" onclick="diag0Skip()">Preskoči — odmah na sadržaj ↓</button>
          </div>
        </div>
        <div class="diag-quiz" id="diag0-quiz">
          <div class="diag-q" id="diag0-q"></div>
          <div class="diag-opts" id="diag0-opts"></div>
          <div class="diag-prog-wrap">
            <div class="diag-prog-txt">Pitanje <span id="diag0-idx">1</span> / 5</div>
            <div class="diag-bar"><div class="diag-prog-bar" id="diag0-bar" style="width:0%"></div></div>
            <div class="diag-prog-num"><span id="diag0-correct">0</span> točno</div>
          </div>
        </div>
        <div class="diag-result">
          <div class="diag-res-msg" id="d0rtitle">Rezultat</div>
          <div class="diag-rec" id="d0rdesc"></div>
          <button class="fcb" onclick="diag0Reset()" style="margin-right:8px">↩ Ponovi</button>
          <button class="fcb primary" id="d0rbtn" onclick="sw(1)">→ Tropi</button>
        </div>
      </div>
    </div>

    <!-- STATUS BOX -->
    <div class="box-warn" style="margin-bottom:20px;display:flex;gap:14px;align-items:flex-start">
      <div class="bw-ico">📚</div>
      <div class="bw-body">
        <div class="bw-title">H17 nije poglavlje o djelu — to je priručnik</div>
        <div class="bw-txt">
          Ostali H-poglavlja (H11-H16) analiziraju <em>jedno djelo ili razdoblje</em>. H17 je <strong>referentni leksikon</strong> koji koristiš pri analizi ulomaka iz bilo kojeg djela.<br><br>
          <strong>Kad i kako koristiti H17:</strong> (1) Kad na ispitu dobiješ ulomak — otvori H17 Tab 5 Scanner i nauči prepoznavati, (2) Kad učiš djelo — povezuj stilske figure s njime, (3) Noć prije ispita — printaj Tab 7 Cheat sheet.
        </div>
      </div>
    </div>

    <!-- SEC 01: Što su stilske figure -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · Što su stilske figure i zašto postoje</div><div class="sec-line"></div></div>

    <p><strong>Stilske figure</strong> (grč. <em>skhêma</em> = oblik, figura) su <strong>svjesna odstupanja od svakodnevnog govora</strong> koja autor koristi za <em>pojačavanje izraza, emocionalni učinak, ritmičku organizaciju</em> ili <em>dvostruko značenje</em>. Bez figura tekst bi bio samo prijenos informacije; s figurama postaje <em>književnost</em>.</p>

    <div class="box-key">
      <div class="box-key-lbl">🎯 Zašto pisci koriste figure?</div>
      <div class="box-key-txt">
        <strong>1. Emocionalni intenzitet</strong> — „More plače" snažnije je od „More je uzburkano"<br>
        <strong>2. Slikovitost</strong> — apstrakciju pretvaraju u sliku (npr. „zlatna ptica slobode")<br>
        <strong>3. Ritam i zvuk</strong> — aliteracija, rima, ponavljanja grade dojam<br>
        <strong>4. Društvena kritika</strong> — ironija i paradoks razotkrivaju hipokriziju bez izravnog napada<br>
        <strong>5. Estetska ljepota</strong> — figure pretvaraju rečenicu u umjetnost
      </div>
    </div>

    <!-- SEC 02: 4 kategorije -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · 4 kategorije figura — struktura leksikona</div><div class="sec-line"></div></div>

    <div class="sc-grid">
      <div class="sc" style="cursor:pointer" onclick="sw(1)">
        <span class="sc-ico hchip br">TAB 1 · 15 figura</span>
        <div class="sc-name">🎨 Tropi (figure značenja)</div>
        <div class="sc-desc">Figure koje mijenjaju <em>značenje</em> riječi. <strong>Metafora, metonimija, personifikacija, alegorija, hiperbola, ironija, oksimoron, paradoks, simbol, usporedba...</strong> Najvažnija kategorija — dominira u analizi ulomka.</div>
      </div>
      <div class="sc" style="cursor:pointer" onclick="sw(2)">
        <span class="sc-ico hchip go">TAB 2 · 10 figura</span>
        <div class="sc-name">📝 Figure riječi (leksičke)</div>
        <div class="sc-desc">Figure koje djeluju na razini <em>pojedine riječi</em>. <strong>Epitet, stalni epitet, deminutiv, augmentativ, slavenska antiteza, apostrofa, retoričko pitanje, uzvik, kontrast, etimološka figura.</strong></div>
      </div>
      <div class="sc" style="cursor:pointer" onclick="sw(3)">
        <span class="sc-ico hchip te">TAB 3 · 12 figura</span>
        <div class="sc-name">📐 Figure rečenice (sintaktičke)</div>
        <div class="sc-desc">Figure koje djeluju na razini <em>rečenične strukture</em>. <strong>Inverzija, paralelizam, anafora, epifora, simploka, gradacija, klimaks, antiklimaks, elipsa, asindeton, polisindeton, retardacija.</strong></div>
      </div>
      <div class="sc" style="cursor:pointer" onclick="sw(4)">
        <span class="sc-ico hchip pa">TAB 4 · 8 figura</span>
        <div class="sc-name">🔊 Figure zvuka (fonetske)</div>
        <div class="sc-desc">Figure koje djeluju na <em>zvučnu razinu</em>. <strong>Aliteracija, asonanca, onomatopeja, rima, opkoračenje, cezura, eufonija, kakofonija.</strong> Česte u poeziji (H12 Marulić, H14 Mažuranić).</div>
      </div>
    </div>

    <!-- SEC 03: 3 razine prepoznavanja -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">03 · 3 razine rada s figurama</div><div class="sec-line"></div></div>

    <div class="sc" style="border-left:3px solid var(--blue-l)">
      <div class="sc-name">📖 1. PREPOZNAVANJE — osnovna razina</div>
      <div class="sc-desc">
        <strong>Što je:</strong> Prepoznati figuru u ulomku i imenovati je. „Ovo je <em>metafora</em>."<br><br>
        <strong>Kako:</strong> Trening pamćenjem definicija + primjera (Tab 5 Flashcards, Tab 6 Kviz).<br><br>
        <strong>Ispitno pitanje:</strong> „Odredi stilsku figuru u sljedećem stihu."<br><br>
        <strong>Dovoljno za:</strong> 2-3 boda u I. cjelini (Čitanje).
      </div>
    </div>

    <div class="sc" style="border-left:3px solid var(--gold)">
      <div class="sc-name">🔍 2. FUNKCIONALNA INTERPRETACIJA — srednja razina</div>
      <div class="sc-desc">
        <strong>Što je:</strong> Objasniti <em>zašto</em> autor koristi figuru i <em>kakav učinak</em> postiže. „Metafora 'čelična pesnica' sugerira moć i hladnoću diktature."<br><br>
        <strong>Kako:</strong> Vezati figuru s temom djela i autorovim ciljem (Tab 1-4, sekcija „Funkcija").<br><br>
        <strong>Ispitno pitanje:</strong> „Kakav učinak postiže navedena figura?"<br><br>
        <strong>Dovoljno za:</strong> 4-5 bodova u I. cjelini + temelj za školski esej.
      </div>
    </div>

    <div class="sc" style="border-left:3px solid var(--green)">
      <div class="sc-name">🎯 3. ESEJSKA PRIMJENA — napredna razina</div>
      <div class="sc-desc">
        <strong>Što je:</strong> U školskom eseju <em>argumentirati tezu pozivajući se na figure</em>. „Krleža gradi atmosferu propadanja kroz stalnu metaforu (Glembajevi = pano u agoniji), ironiju (slavski ton uz trule temelje) i simboliku portreta..."<br><br>
        <strong>Kako:</strong> Povezati više figura u jednu argumentacijsku liniju (Tab 1-4 → Tab 7 Cheat sheet).<br><br>
        <strong>Ispitno pitanje:</strong> III. cjelina (školski esej).<br><br>
        <strong>Dovoljno za:</strong> Top ocjena u III. cjelini.
      </div>
    </div>

    <!-- SEC 04: Kako figure izgledaju u praksi -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">04 · Kako figure izgledaju u praksi — 5 poznatih primjera</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Primjer</th><th>Figura</th><th>Djelo (H#)</th><th>Učinak</th></tr></thead>
        <tbody>
          <tr><td><em>„Ne lomi, pobro, krstova!"</em></td><td><strong>Apostrofa + retoričko pitanje</strong></td><td>Mažuranić, Smail-aga (H14)</td><td>Molba koja intenzivira dramu</td></tr>
          <tr><td><em>„Boj se onog tko je vikô plakat'"</em></td><td><strong>Paradoks</strong></td><td>Mažuranić (H14)</td><td>Moralna mudrost u obrnutoj logici</td></tr>
          <tr><td><em>„Dubravka, ti si sloboda slatka"</em></td><td><strong>Personifikacija + alegorija</strong></td><td>Gundulić, Dubravka (H13)</td><td>Dubrovnik kao djevojka-sloboda</td></tr>
          <tr><td><em>„Od prvog dana... borim se protiv Glembaya u sebi"</em></td><td><strong>Metafora + kontrast</strong></td><td>Krleža, Glembajevi (H16)</td><td>Unutarnja borba kao identitetski sukob</td></tr>
          <tr><td><em>„Cvrkut ptica u vrtu."</em></td><td><strong>Ironija (kontekstna)</strong></td><td>Krleža (H16)</td><td>Priroda ravnodušna prema tragediji</td></tr>
        </tbody>
      </table>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">💡 Ključno — figura NIKAD ne stoji sama</div>
      <div class="box-signal-txt">
        Stilska figura uvijek <em>služi nečemu većem</em> — ideji djela, karakterizaciji lika, atmosferi, društvenoj kritici. <strong>Loša analiza:</strong> „Ovdje je metafora." <strong>Dobra analiza:</strong> „Ovdje je metafora <em>'čelična pesnica'</em> koja sugerira okrutnost tiranina, što pojačava kontrast s slobodarskim Crnogorcima u Mažuranićevu spjevu."
      </div>
    </div>

    <!-- SEC 05: Najčešće zabune -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">05 · 6 najčešćih zabuna u prepoznavanju</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Zabuna</th><th>Razlika</th><th>Kako razlučiti</th></tr></thead>
        <tbody>
          <tr><td><strong>Metafora vs. metonimija</strong></td><td>Metafora = sličnost („oko noći" = mjesec). Metonimija = povezanost u stvarnosti („popiti čašu" = popiti sadržaj).</td><td>Pitaj: je li veza <em>imaginarna</em> (metafora) ili <em>stvarna</em> (metonimija)?</td></tr>
          <tr><td><strong>Metafora vs. usporedba</strong></td><td>Usporedba ima <em>„kao", „poput", „nalik"</em>. Metafora je izravna — <em>identifikacija</em>.</td><td>„Hrabar kao lav" = usporedba. „On je lav" = metafora.</td></tr>
          <tr><td><strong>Personifikacija vs. alegorija</strong></td><td>Personifikacija = jedna slika (more plače). Alegorija = <em>cijela priča</em> s prenesenim značenjem (Dubravka = Dubrovnik).</td><td>Pitaj: je li figura lokalna ili obuhvaća cijelo djelo?</td></tr>
          <tr><td><strong>Hiperbola vs. litota</strong></td><td>Hiperbola = pretjerivanje (gore). Litota = umanjivanje (dolje).</td><td>„Milijun puta sam ti rekao" = hiperbola. „Nije baš najpametniji" (misli se: glup) = litota.</td></tr>
          <tr><td><strong>Aliteracija vs. asonanca</strong></td><td>Aliteracija = ponavljanje <em>suglasnika</em>. Asonanca = ponavljanje <em>samoglasnika</em>.</td><td>Broji slova: konsonant = aliteracija, vokal = asonanca.</td></tr>
          <tr><td><strong>Anafora vs. epifora</strong></td><td>Anafora = ponavljanje na <em>početku</em> stiha. Epifora = ponavljanje na <em>kraju</em>.</td><td>Gledaj gdje je ponovljeni element.</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SEC 06: Taktika za analizu ulomka -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">06 · 5-korak taktika za analizu ulomka</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Korak</th><th>Što radiš</th><th>Alat</th></tr></thead>
        <tbody>
          <tr><td><strong>1. Pročitaj dvaput</strong><br>20 sek</td><td>Prvi put — razumij o čemu se radi. Drugi put — traži figure.</td><td>—</td></tr>
          <tr><td><strong>2. Prepoznaj jasne figure</strong><br>40 sek</td><td>Metafore, personifikacije, epiteti, usporedbe — najlakše za vidjeti.</td><td>Tab 1, Tab 2</td></tr>
          <tr><td><strong>3. Traži strukturne</strong><br>40 sek</td><td>Ponavljanja (anafora), inverzija, paralelizam, gradacija.</td><td>Tab 3</td></tr>
          <tr><td><strong>4. Čuj zvuk</strong><br>20 sek</td><td>Aliteracija, asonanca, onomatopeja — posebno u poeziji.</td><td>Tab 4</td></tr>
          <tr><td><strong>5. Interpretacija</strong><br>60 sek</td><td>Za <strong>2-3 najvažnije figure</strong> objasni <em>funkciju</em>: kakav učinak postiže autor? Kako služi temi/atmosferi?</td><td>3 razine (SEC 03)</td></tr>
        </tbody>
      </table>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">🎯 Pro savjet — ne nabrajaj sve figure!</div>
      <div class="box-key-txt">
        Česta greška: učenik nabraja 10 figura, ali <em>ne objašnjava nijednu</em>. <strong>Bolje:</strong> Prepoznaj 2-3 figure i <em>kvalitetno ih interpretiraj</em>. Ispitivač traži <strong>razumijevanje, ne inventar</strong>.
      </div>
    </div>

    <!-- SEC 07: Kako je organiziran H17 -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">07 · Kako je organiziran H17 — mapa tabova</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Tab</th><th>Sadržaj</th><th>Kad koristiti</th></tr></thead>
        <tbody>
          <tr><td><strong>0. Teorija</strong></td><td>Ovaj tab — orijentacija, kategorije, 3 razine, zabune</td><td>Prvi put, za sustavan pregled</td></tr>
          <tr><td><strong>1. Tropi</strong></td><td>15 figura značenja — metafora, metonimija, ironija...</td><td>Pri analizi ulomka (najvažnije)</td></tr>
          <tr><td><strong>2. Figure riječi</strong></td><td>10 leksičkih figura — epitet, deminutiv, apostrofa...</td><td>Kad tražiš jedno-riječne figure</td></tr>
          <tr><td><strong>3. Figure rečenice</strong></td><td>12 sintaktičkih — anafora, gradacija, inverzija...</td><td>Kad analiziraš strukturu rečenice</td></tr>
          <tr><td><strong>4. Figure zvuka</strong></td><td>8 fonetskih — aliteracija, rima, onomatopeja...</td><td>Pri analizi poezije</td></tr>
          <tr><td><strong>5. Scanner + Drill</strong></td><td>AI scanner ulomka + flashcards + matching</td><td>Trening i provjera</td></tr>
          <tr><td><strong>6. Kviz</strong></td><td>25 pitanja s ulomcima iz poznatih djela</td><td>Provjera znanja prije ispita</td></tr>
          <tr><td><strong>7. Cheat sheet</strong></td><td>Printabilni A4 sa svim figurama</td><td>Noć prije ispita — print i nosi</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SEC 08: Konekti s drugim poglavljima -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">08 · H17 i ostalo gradivo — kako se spaja</div><div class="sec-line"></div></div>

    <div class="sc-grid">
      <div class="sc">
        <span class="sc-ico hchip br">H12–H16</span>
        <div class="sc-name">H17 kao alat za analizu svih djela</div>
        <div class="sc-desc">Pri analizi Marulićeve Judite (H12), Gundulićeve Dubravke (H13), Mažuranićeve Smrti Smail-age (H14), Šenoine Prijana Lovre (H15) ili Krležinih Glembajevih (H16) — <strong>H17 daje nazive i klasifikaciju figura</strong>. Primjeri u H17 su iz ovih djela.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip go">H18</span>
        <div class="sc-name">H17 → H18 (Versifikacija)</div>
        <div class="sc-desc">Versifikacija (stih, metrika, rima) nadograđuje se na figure zvuka (H17 Tab 4). <em>Rima, aliteracija, asonanca, opkoračenje</em> prelaze iz H17 u H18 s dubljom analizom.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip te">H27</span>
        <div class="sc-name">H17 → H27 (Školski esej)</div>
        <div class="sc-desc">U školskom eseju figure su <em>argumenti za tezu</em>. H27 pokazuje kako ih elegantno uključiti u tekst eseja, bez „nabrajanja".</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip pa">Svi ulomci na maturi</span>
        <div class="sc-name">H17 kao referentni priručnik</div>
        <div class="sc-desc">NCVVO ispit ima <em>analizu ulomka</em> u I. ispitnoj cjelini. H17 Tab 5 Scanner može <em>automatski detektirati figure</em> u ulomku — trenira te da ih i sam uočiš.</div>
      </div>
    </div>

    <!-- SEC 09: Statistika -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">09 · Što se najčešće pita na maturi</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">📊 Top 10 figura prema učestalosti na NCVVO ispitima (2015.–2024.)</div>
      <div class="box-int-txt">
        <strong>1. Metafora</strong> (najčešća)<br>
        <strong>2. Personifikacija</strong><br>
        <strong>3. Epitet</strong><br>
        <strong>4. Usporedba</strong><br>
        <strong>5. Anafora</strong><br>
        <strong>6. Hiperbola</strong><br>
        <strong>7. Kontrast / antiteza</strong><br>
        <strong>8. Ironija</strong><br>
        <strong>9. Aliteracija</strong><br>
        <strong>10. Gradacija</strong><br><br>
        <em>Ako savladaš ovih 10 na razini <strong>funkcionalne interpretacije</strong> (2. razina SEC 03), prošao si 80% svih ulomaka iz posljednjih 10 godina mature.</em>
      </div>
    </div>

    <!-- SEC 10: Finalni pregled -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">10 · Finalni pregled — 3-minutni recap</div><div class="sec-line"></div></div>

    <div class="box-key">
      <div class="box-key-lbl">⚡ Recap u 5 rečenica</div>
      <div class="box-key-txt">
        <strong>1.</strong> Stilske figure su <em>svjesna odstupanja od svakodnevnog govora</em> koja pretvaraju tekst u književnost. <br>
        <strong>2.</strong> Dijele se u 4 kategorije: <em>tropi</em> (značenje), <em>figure riječi</em> (leksika), <em>figure rečenice</em> (sintaksa), <em>figure zvuka</em> (fonetika). <br>
        <strong>3.</strong> Na maturi se radi na 3 razine: <em>prepoznavanje</em> → <em>funkcionalna interpretacija</em> → <em>esejska primjena</em>. <br>
        <strong>4.</strong> <strong>Najčešće figure:</strong> metafora, personifikacija, epitet, usporedba, anafora, hiperbola, kontrast, ironija, aliteracija, gradacija. <br>
        <strong>5.</strong> Za ulomak koristi 5-koračnu taktiku — <em>ne nabrajaj sve</em>, nego 2-3 figure kvalitetno interpretiraj.
      </div>
    </div>

    <div class="nav-row">
      <span class="nb-btn off">← Početak</span>
      <span class="nb-btn primary" onclick="sw(1)">🎨 Tropi →</span>
    </div>

  
    <div class="cheat-card" style="margin-top:24px">
      <div class="cheat-hdr">
        <div class="cheat-hdr-l">
          <div class="cheat-eye">SLJEDEĆE</div>
          <div class="cheat-ttl">Tab 1 · Tropi — usporedba, metafora, sinegdoha</div>
        </div>
      </div>
      <div class="cheat-grid">
        <div class="cheat-col cheat-col-wide" style="font-family:var(--serif,Fraunces,serif);font-size:13.5px;color:var(--t2,#c5b8aa);line-height:1.65">
          <p style="margin:0">Sad kad znaš kako stilistika radi — <b>Tab 1</b> donosi tropi: usporedba, metafora, sinegdoha, metonimija. Svaka figura s primjerom, deepom i tipom razrade za esej.</p>
        </div>
      </div>
    </div>

    </div><!-- /l0 -->

  <div class="layer" id="l1" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-pa">15 tropa</span>
      <span class="pill p-br">figure značenja</span>
      <span class="pill p-go">najvažnija kategorija</span>
      <span class="pill p-t">60% ispitnih pitanja</span>
    </div>

    <div class="box-int" style="margin-bottom:20px">
      <div class="box-int-lbl">🎨 Tropi — figure koje mijenjaju značenje</div>
      <div class="box-int-txt"><strong>Tropi</strong> (grč. <em>tropos</em> = okret) su figure koje <em>mijenjaju osnovno značenje riječi</em>. Najčešća kategorija na maturi — svaki ulomak ima barem 2-3 tropa. Klikni figuru za detalje, primjere i funkciju.</div>
    </div>

    <div class="scene-list">

      <!-- 01 METAFORA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">01</div>
          <div class="scene-ttl">Metafora <span style="color:var(--gold);font-size:11px;margin-left:8px">★ NAJČEŠĆA</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Prijenos značenja</strong> na temelju <em>sličnosti</em>. Jedna riječ zamijenjena drugom koja s njom dijeli neko svojstvo. Najvažnija figura u književnosti — osnova svake slikovitosti.<br><br>
            <b>Primjeri iz hrv. književnosti:</b><br>
            • <em>„Dubravka, ti si sloboda slatka"</em> — Gundulić, Dubravka (<strong>H13</strong>). Dubravka = Dubrovnik. Sloboda opisana kao „slatka" (okusna metafora).<br>
            • <em>„Čelična pesnica tirana"</em> — tip metafore kod Mažuranića (<strong>H14</strong>). Moć diktature opisana kao metal.<br>
            • <em>„Borim se protiv Glembaya u sebi"</em> — Leone, Krleža (<strong>H16</strong>). Obiteljsko nasljedstvo kao unutarnji neprijatelj.<br>
            • <em>„Dekorativni pano civilizacije u agoniji"</em> — Krleža o Glembajevima (<strong>H16</strong>). Društvena klasa kao slika koja umire.<br>
            • <em>„More plače"</em> — personificirajuća metafora. More = biće koje osjeća.<br>
            • <em>„Zora rudi"</em> — zora opisana kao nešto što „rumeni".<br><br>
            <b>Kako prepoznati:</b> Traži riječi koje <em>ne znače doslovno ono što znače</em>. Ako ne ide „u stvarnosti", a ipak razumiješ — to je metafora. „More plače" — more nema suze, ali razumiješ sliku.<br><br>
            <b>Česta zabuna:</b> <strong>Metafora vs. usporedba.</strong> Usporedba ima „kao/poput/nalik" („hrabar kao lav"). Metafora je izravna („on je lav"). <strong>Metafora vs. metonimija.</strong> Metafora = sličnost (zamišljena veza). Metonimija = stvarna povezanost („popio je čašu" = sadržaj).<br><br>
            <b>Funkcija:</b> Slikovitost, emocionalna gustoća, sažimanje ideje. Omogućuje pisanju da „pokaže" a ne samo „kaže".<br><br>
            <b>🎯 Esejski savjet:</b> Prepoznati metaforu nije dovoljno — <em>objasni što zamjenjuje</em>. Loše: „Autor koristi metaforu." Dobro: „Metafora 'borim se protiv Glembaya u sebi' pretvara biološko nasljedstvo u unutarnjeg neprijatelja kojeg Leone pokušava pobijediti."
          </div>
        </div>
      </div>

      <!-- 02 METONIMIJA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">02</div>
          <div class="scene-ttl">Metonimija</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> Prijenos značenja na temelju <strong>stvarne povezanosti</strong> (prostor, vrijeme, uzrok, dio-cjelina). Ne zamišljena sličnost kao metafora — <em>stvarna veza u svijetu</em>.<br><br>
            <b>Primjeri:</b><br>
            • <em>„Popio je čašu"</em> — čaša = sadržaj čaše (povezanost posuda/sadržaj).<br>
            • <em>„Čita Krležu"</em> — Krleža = Krležina djela (autor/djelo).<br>
            • <em>„Cijeli Zagreb je na nogama"</em> — Zagreb = ljudi iz Zagreba (mjesto/stanovnici).<br>
            • <em>„Kruh naš svagdašnji"</em> — kruh = hrana (dio/cjelina, uzeta kao predstavnik).<br>
            • <em>„Bijela kuća je objavila..."</em> — Bijela kuća = američka vlada (zgrada/institucija).<br><br>
            <b>Kako prepoznati:</b> Veza je <em>logička/uzročna</em>, ne imaginarna. Pitaj: postoji li <em>stvarna veza</em> između dviju stvari? Ako da → metonimija.<br><br>
            <b>Česta zabuna:</b> Metonimija vs. metafora. <em>„Lav u bitci"</em> → ako znači hrabrog čovjeka = metafora (sličnost). <em>„Popio je čašu"</em> → čaša sadrži tekućinu = metonimija (povezanost).<br><br>
            <b>Funkcija:</b> Sažimanje, ekonomičnost izraza, stil. Omogućava pisanju da brzo ukaže na cjelinu preko dijela.
          </div>
        </div>
      </div>

      <!-- 03 SINEKDOHA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">03</div>
          <div class="scene-ttl">Sinekdoha</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> Posebna vrsta metonimije — <strong>dio umjesto cjeline</strong> ili <strong>cjelina umjesto dijela</strong>.<br><br>
            <b>Primjeri:</b><br>
            • <em>„Tisuću duša se skupilo"</em> — duša = cijela osoba (dio za cjelinu).<br>
            • <em>„Krov nad glavom"</em> — krov = kuća (dio za cjelinu).<br>
            • <em>„Hrvatska je pobijedila"</em> — Hrvatska = hrvatski reprezentativci (cjelina za dio).<br>
            • <em>„Glava obitelji"</em> — glava = poglavar obitelji (dio za cjelinu).<br><br>
            <b>Kako prepoznati:</b> Traži <em>part-whole</em> odnos. Ako je izraz <em>pars pro toto</em> (dio za cijelo) ili <em>totum pro parte</em> (cijelo za dio) → sinekdoha.<br><br>
            <b>Česta zabuna:</b> Sinekdoha je <em>uža kategorija</em> metonimije. U nekim školama su tretirane kao ista figura.<br><br>
            <b>Funkcija:</b> Fokusiranje na bitan dio, sažetost, emocionalno isticanje.
          </div>
        </div>
      </div>

      <!-- 04 PERSONIFIKACIJA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">04</div>
          <div class="scene-ttl">Personifikacija <span style="color:var(--gold);font-size:11px;margin-left:8px">★ VRLO ČESTA</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> Dodjela <strong>ljudskih osobina</strong> ne-ljudskim stvarima (prirodi, predmetima, apstraktnim pojmovima, životinjama).<br><br>
            <b>Primjeri iz hrv. književnosti:</b><br>
            • <em>„More plače, nebo šuti"</em> — klasičan primjer; priroda osjeća.<br>
            • <em>„Dubravka, ti si sloboda slatka"</em> — Gundulić (<strong>H13</strong>). Dubrovnik kao djevojka.<br>
            • <em>„Zora rudi na planini"</em> — zora se ponaša ljudski.<br>
            • <em>„Vjetar pjeva kroz drveće"</em> — vjetar kao glazbenik.<br>
            • <em>„Smrt se smije"</em> (Mažuranić, <strong>H14</strong>) — smrt kao lik.<br>
            • <em>„Cvrkut ptica u vrtu"</em> — Krleža (<strong>H16</strong>). Priroda „svjedok" tragedije.<br><br>
            <b>Kako prepoznati:</b> Pronađi <em>neživo/ne-ljudsko</em> nešto koje radi ljudsku radnju (govori, osjeća, djeluje svjesno).<br><br>
            <b>Česta zabuna:</b> <strong>Personifikacija vs. alegorija.</strong> Personifikacija = lokalna, jedna slika. Alegorija = cijela priča s prenesenim značenjem.<br><br>
            <b>Funkcija:</b> Oživljava pejzaž, gradi atmosferu, emotivno veže čitatelja s prirodom/predmetima. Posebno moćna u poeziji.
          </div>
        </div>
      </div>

      <!-- 05 ALEGORIJA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">05</div>
          <div class="scene-ttl">Alegorija</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Cjelovito preneseno značenje</strong> — cijela priča/tekst funkcionira na dvije razine, doslovnoj i simboličkoj. Produžena metafora kroz cijeli tekst.<br><br>
            <b>Primjeri:</b><br>
            • <em>Gundulićeva Dubravka</em> (<strong>H13</strong>) — <strong>cijelo djelo</strong> je alegorija: Dubravka = Dubrovnik, pastirska idila = dubrovačka sloboda, stranac = prijetnja slobodi.<br>
            • <em>Životinjska farma</em> Georgea Orwella — cijela priča o životinjama = kritika staljinizma.<br>
            • <em>Božanstvena komedija</em> Dantea — putovanje kroz Pakao/Čistilište/Raj = duhovna potraga.<br>
            • <em>Basne</em> (Ezop, La Fontaine) — svaka basna je alegorija moralne lekcije.<br><br>
            <b>Kako prepoznati:</b> Pitaj: <em>je li cijeli tekst zapravo o nečem drugom?</em> Ako priča o životinjama skriva političku kritiku → alegorija.<br><br>
            <b>Česta zabuna:</b> Alegorija je <em>dužeg opsega</em> nego metafora ili simbol. Metafora je lokalna, simbol može biti pojedinačan, alegorija je <em>cijela struktura</em>.<br><br>
            <b>Funkcija:</b> Skrivena poruka (pri cenzuri!), filozofska dubina, univerzalnost — priča o konkretnom postaje priča o apstraktnom.
          </div>
        </div>
      </div>

      <!-- 06 SIMBOL -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">06</div>
          <div class="scene-ttl">Simbol</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> Konkretni predmet/slika koji predstavlja <strong>apstraktni pojam</strong> (ideja, osjećaj, vrijednost). Razlika od metafore: simbol ima <em>konvencionalno, kulturno značenje</em> koje nadilazi jedno djelo.<br><br>
            <b>Primjeri:</b><br>
            • <em>Crveni križ</em> — pomoć, humanost (konvencionalni simbol).<br>
            • <em>Portreti Glembajevih</em> (<strong>H16</strong>) — <em>obiteljsko prokletstvo</em>. Simbol koji se ponavlja kroz dramu.<br>
            • <em>Škare u Glembajevima</em> (<strong>H16</strong>) — simbol nasilja, paralela s britvom iz Prijana Lovre (<strong>H15</strong>).<br>
            • <em>Noć</em> — mrak, moralna tama, tajna.<br>
            • <em>Golub</em> — mir, sloboda, duh.<br>
            • <em>Zlatno runo</em> — nedohvatljivi cilj.<br><br>
            <b>Kako prepoznati:</b> Traži <em>konkretan predmet/sliku</em> koja u kontekstu ima veće značenje. Ako predmet „znači više od sebe" → simbol.<br><br>
            <b>Česta zabuna:</b> Simbol vs. metafora. <strong>Simbol</strong> = predmet koji nosi značenje. <strong>Metafora</strong> = riječ koja je zamijenila drugu. „On je lav" = metafora. „Lav kao simbol hrabrosti" = simbol.<br><br>
            <b>Funkcija:</b> Gustoća značenja, kontinuitet kroz djelo, povezivanje s kulturnom/mitskom pozadinom.
          </div>
        </div>
      </div>

      <!-- 07 HIPERBOLA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">07</div>
          <div class="scene-ttl">Hiperbola <span style="color:var(--gold);font-size:11px;margin-left:8px">★ ČESTA</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Pretjerivanje</strong> za emocionalni ili stilski učinak. Namjerno preuveličavanje činjenica, svojstava, emocija.<br><br>
            <b>Primjeri:</b><br>
            • <em>„Milijun puta sam ti rekao!"</em> — svakodnevni primjer.<br>
            • <em>„Plakala je more suza"</em> — pretjerivanje tuge.<br>
            • <em>„Tisuću Turaka"</em> (Mažuranić, <strong>H14</strong>) — brojčano pretjerivanje za dojam.<br>
            • <em>„Svi su Glembajevi prokleti — ubojice i varalice!"</em> (Barboczyjeva legenda, <strong>H16</strong>) — apsolutizacija.<br>
            • <em>„Umire od stida"</em> — preuveličanje emocije.<br><br>
            <b>Kako prepoznati:</b> Traži <em>ekstremna kvantificiranja</em> (milijun, tisuću, nikad, uvijek, svi) ili <em>fizički nemoguće</em> tvrdnje.<br><br>
            <b>Česta zabuna:</b> Hiperbola vs. litota. <strong>Hiperbola</strong> = pretjerivanje <em>gore</em>. <strong>Litota</strong> = umanjivanje <em>dolje</em>.<br><br>
            <b>Funkcija:</b> Emocionalni intenzitet, humor, retorički naglasak, patos.
          </div>
        </div>
      </div>

      <!-- 08 LITOTA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">08</div>
          <div class="scene-ttl">Litota</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Namjerno umanjivanje</strong>, često kroz negaciju. Suprotno od hiperbole. Izriče se manje nego što se misli.<br><br>
            <b>Primjeri:</b><br>
            • <em>„Nije baš najpametniji"</em> — znači: glup je.<br>
            • <em>„Nije loše"</em> — znači: jako je dobro.<br>
            • <em>„Nisu male patnje"</em> — znači: velike su patnje.<br>
            • <em>„Nije mi se činilo nevažno"</em> — znači: bilo mi je jako važno.<br><br>
            <b>Kako prepoznati:</b> Dvostruka negacija ili „nije + blago svojstvo" koja u stvarnosti označava nešto jako.<br><br>
            <b>Česta zabuna:</b> Litota vs. eufemizam. Litota = umanjivanje da bi se naglasilo. Eufemizam = ublažavanje neugodnog izraza.<br><br>
            <b>Funkcija:</b> Ironijsko naglašavanje, suptilnost, elegancija izraza.
          </div>
        </div>
      </div>

      <!-- 09 IRONIJA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">09</div>
          <div class="scene-ttl">Ironija <span style="color:var(--gold);font-size:11px;margin-left:8px">★ ČESTA</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> Govori se jedno, misli se <strong>suprotno</strong>. Razumijevanje ovisi o kontekstu i tonu. Figura kritike i intelektualne distance.<br><br>
            <b>Tri tipa ironije:</b><br>
            • <strong>Verbalna</strong> — ono što lik kaže misli suprotno („Divno vrijeme!" u oluji)<br>
            • <strong>Situacijska</strong> — stvarnost je suprotna očekivanju (vatrogasac čiji dom gori)<br>
            • <strong>Dramska</strong> — publika zna ono što lik ne zna<br><br>
            <b>Primjeri iz hrv. književnosti:</b><br>
            • <em>„Cvrkut ptica u vrtu"</em> (kraj Glembajevih, <strong>H16</strong>) — priroda ravnodušna prema tragediji. <em>Situacijska ironija</em> finala.<br>
            • Leoneove <em>„pohvale"</em> Glembajevima u I. činu (<strong>H16</strong>) — <em>verbalna ironija</em>; hvali ih dok ih razotkriva.<br>
            • <em>Leone postaje ubojica</em> kojeg je kritizirao (<strong>H16</strong>) — <em>tragična ironija</em>. Borba protiv Glembaya u sebi ga sama pretvara u Glembaya.<br>
            • Šenoin nepouzdani pripovjedač u <em>Prijanu Lovri</em> (<strong>H15</strong>) — ironijska distanca od malograđanskog svijeta.<br><br>
            <b>Kako prepoznati:</b> Traži <em>nesklad između riječi i konteksta</em>. Ako razumiješ da autor ne misli doslovno — to je ironija.<br><br>
            <b>Česta zabuna:</b> Ironija vs. sarkazam. <strong>Sarkazam</strong> je <em>agresivna</em>, povrjedna ironija. <strong>Ironija</strong> može biti blaga ili tužna.<br><br>
            <b>Funkcija:</b> Kritika bez izravnosti, intelektualna distanca, komičnost, razotkrivanje hipokrizije.
          </div>
        </div>
      </div>

      <!-- 10 OKSIMORON -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">10</div>
          <div class="scene-ttl">Oksimoron</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> Spajanje <strong>dviju suprotnih</strong>, logički nespojivih riječi u jednu frazu.<br><br>
            <b>Primjeri:</b><br>
            • <em>„Tiha buka"</em> — šutnja koja je ipak prisutna.<br>
            • <em>„Slatka tuga"</em> — bolna ali ugodna emocija (nostalgija).<br>
            • <em>„Živi mrtvac"</em> — osoba bez životne energije.<br>
            • <em>„Hladno sunce"</em> — paradoksalno stanje.<br>
            • <em>„Gorka sreća"</em> — ambivalentna emocija.<br>
            • <em>„Zaglušujuća tišina"</em> — tišina koja „viče".<br><br>
            <b>Kako prepoznati:</b> Traži <em>dvije riječi koje se logički isključuju</em> u istoj frazi.<br><br>
            <b>Česta zabuna:</b> Oksimoron vs. paradoks. <strong>Oksimoron</strong> = dvije riječi (sintagma). <strong>Paradoks</strong> = cijela izjava koja je naizgled besmislena, ali otkriva dublju istinu.<br><br>
            <b>Funkcija:</b> Emocionalna kompleksnost, napetost, filozofska dubina. Pokazuje da život ne staje u binarne kategorije.
          </div>
        </div>
      </div>

      <!-- 11 PARADOKS -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">11</div>
          <div class="scene-ttl">Paradoks</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> Izjava koja je <strong>naizgled besmislena ili kontradiktorna</strong>, ali pri dubljem promišljanju otkriva istinu.<br><br>
            <b>Primjeri:</b><br>
            • <em>„Boj se onog tko je vikô plakat"</em> — Mažuranić, Smrt Smail-age (<strong>H14</strong>). Slab = opasan. Paradoks moralne mudrosti.<br>
            • <em>„Manje je više"</em> — minimalistička filozofija.<br>
            • <em>„Znam da ništa ne znam"</em> — Sokrat.<br>
            • <em>„Sloboda je odgovornost"</em> — filozofski paradoks.<br>
            • <em>„Ubijam da bih spasio"</em> — moralna dilema.<br>
            • <em>Leoneova borba protiv Glembaya u sebi</em> ga pretvara u Glembaya (<strong>H16</strong>) — tragični paradoks.<br><br>
            <b>Kako prepoznati:</b> Traži <em>cijelu izjavu</em> koja djeluje kontradiktorno, ali ima dublje značenje.<br><br>
            <b>Česta zabuna:</b> Paradoks vs. oksimoron. <strong>Paradoks</strong> = cijela rečenica. <strong>Oksimoron</strong> = dvije riječi.<br><br>
            <b>Funkcija:</b> Filozofska dubina, buđenje čitateljeve misli, kritika pojednostavljenih istina.
          </div>
        </div>
      </div>

      <!-- 12 EUFEMIZAM -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">12</div>
          <div class="scene-ttl">Eufemizam</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Ublažavanje</strong> neugodnog, uvredljivog ili tabuiziranog izraza zamjenom blažom riječju.<br><br>
            <b>Primjeri:</b><br>
            • <em>„Preminuo je"</em> umjesto „umro je"<br>
            • <em>„Otišao je Bogu na istinu"</em> umjesto „mrtav je"<br>
            • <em>„Stariji građani"</em> umjesto „starci"<br>
            • <em>„Ekonomski nerazvijen"</em> umjesto „siromašan"<br>
            • <em>„Izgubio je život"</em> umjesto „poginuo je"<br>
            • <em>„Posebno dijete"</em> umjesto eksplicitnih izraza<br><br>
            <b>Kako prepoznati:</b> Traži <em>blagu riječ</em> na mjestu gdje bi se očekivala neugodnija.<br><br>
            <b>Česta zabuna:</b> Eufemizam vs. litota. Eufemizam = zamjena riječi. Litota = namjerno umanjivanje.<br><br>
            <b>Funkcija:</b> Pristojnost, izbjegavanje tabua, politička korektnost, ali i manipulacija (skrivanje neugodnih činjenica).
          </div>
        </div>
      </div>

      <!-- 13 USPOREDBA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">13</div>
          <div class="scene-ttl">Usporedba (komparacija) <span style="color:var(--gold);font-size:11px;margin-left:8px">★ VRLO ČESTA</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> Dvije stvari povezane riječicama <strong>„kao", „poput", „nalik", „sličan"</strong>. Jedna strana opisuje drugu kroz sličnost.<br><br>
            <b>Primjeri iz hrv. književnosti:</b><br>
            • <em>„Hrabar kao lav"</em> — osnovni primjer.<br>
            • <em>„Bijela kao snijeg"</em> — bajka.<br>
            • <em>„Tih kao miš"</em> — pridjev + usporedba.<br>
            • <em>„Pjeva kao slavuj"</em> — usporedba radnje.<br>
            • <em>Mažuranićeve homerske usporedbe</em> (<strong>H14</strong>) — proširene epske usporedbe s cijelim malim prizorima.<br>
            • <em>„Angelika stoji kao lutka"</em> (Krleža, <strong>H16</strong>) — paraliza svjedoka.<br><br>
            <b>Kako prepoznati:</b> Traži „kao" ili sinonime. Ako postoji, to je usporedba (ne metafora).<br><br>
            <b>Česta zabuna:</b> <strong>Usporedba vs. metafora.</strong> „Hrabar kao lav" = usporedba (ima „kao"). „On je lav" = metafora (izravna identifikacija).<br><br>
            <b>Funkcija:</b> Slikovitost, konkretiziranje apstraktnog, pedagoška jasnoća. Jasniji izraz od metafore.
          </div>
        </div>
      </div>

      <!-- 14 ANTONOMAZIJA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">14</div>
          <div class="scene-ttl">Antonomazija</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> Zamjena <strong>vlastitog imena</strong> opisnom frazom ili obratno. Osoba se naziva karakteristikom, ili karakteristika ime osobom.<br><br>
            <b>Primjeri:</b><br>
            • <em>„Don Juan"</em> umjesto „zavodnik"<br>
            • <em>„Judas"</em> umjesto „izdajica"<br>
            • <em>„Lažljivac iz Hamleta"</em> umjesto imena<br>
            • <em>„Otac moderne fizike"</em> umjesto Einsteina<br>
            • <em>„Hrvatski Shakespeare"</em> za nekog dramatičara<br>
            • <em>„Bard iz Avona"</em> umjesto Shakespearea<br><br>
            <b>Kako prepoznati:</b> Traži zamjenu imena opisom ili opisa imenom.<br><br>
            <b>Funkcija:</b> Karakterizacija, izbjegavanje ponavljanja, kulturna referenca.
          </div>
        </div>
      </div>

      <!-- 15 SARKAZAM -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">15</div>
          <div class="scene-ttl">Sarkazam</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Agresivna, zajedljiva ironija</strong> s namjerom da povrijedi ili ismije. Jača i personalnija od ironije.<br><br>
            <b>Primjeri:</b><br>
            • <em>„Bravo, genije!"</em> (rečeno nekome tko je napravio grešku)<br>
            • <em>„Dobro si se snašao"</em> (nakon očite nespretnosti)<br>
            • <em>„Kakva briljantna ideja..."</em> (pred lošom idejom)<br>
            • <em>Leoneove razorne replike Silberbrandtu</em> (<strong>H16</strong>) — sarkastičko razotkrivanje hipokrizije.<br><br>
            <b>Kako prepoznati:</b> Traži <em>ironiju + agresivnost</em>. Ton je zajedljiv, namjera pogrdna.<br><br>
            <b>Česta zabuna:</b> Sarkazam vs. ironija. <strong>Sarkazam</strong> = uvijek negativan, pogrdan. <strong>Ironija</strong> može biti dobronamjerna ili čak melankolična.<br><br>
            <b>Funkcija:</b> Agresivna kritika, razotkrivanje gluposti/hipokrizije, satirički učinak.
          </div>
        </div>
      </div>

    </div><!-- /scene-list -->

    <!-- SINTEZA -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">★ Top 5 tropa za maturu — prioritetno zapamtiti</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Figura</th><th>Najčešća u djelima</th><th>Ispitna težina</th></tr></thead>
        <tbody>
          <tr><td><strong>1. Metafora</strong></td><td>Sva djela (H12-H16)</td><td>Laka za prepoznati, srednja za interpretirati</td></tr>
          <tr><td><strong>2. Personifikacija</strong></td><td>H13 Dubravka, H14 Mažuranić, H16 Glembajevi</td><td>Laka</td></tr>
          <tr><td><strong>3. Ironija</strong></td><td>H16 Glembajevi, H15 Prijan Lovro</td><td>Teška — ovisi o kontekstu</td></tr>
          <tr><td><strong>4. Hiperbola</strong></td><td>H14 Smrt Smail-age (epsko pretjerivanje)</td><td>Laka</td></tr>
          <tr><td><strong>5. Paradoks</strong></td><td>H14 Mažuranić, H16 Krleža</td><td>Srednja — traži filozofsko čitanje</td></tr>
        </tbody>
      </table>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">🎯 Napomena</div>
      <div class="box-key-txt">Tropi su najvažnija kategorija jer <em>nose značenje djela</em>. U školskom eseju i analizi ulomka — <strong>svaki dobar odgovor ima barem jednu metaforu, jednu ironiju/paradoks i jednu personifikaciju</strong> razrađene na razini funkcionalne interpretacije.</div>
    </div>

    <!-- DISCERE -->
    <div class="discere-banner" style="margin-top:18px" onclick="window.location.href='#discere'">
      <div class="discere-ico">🎨</div>
      <div class="discere-txt">
        <div class="discere-ttl">Discere · AI detektor tropa u ulomku</div>
        <div class="discere-sub">Zalijepi ulomak — AI detektira sve tropa s objašnjenjima i funkcijama · <strong>Pro plan</strong></div>
      </div>
      <div class="discere-arrow">→</div>
    </div>

    
    <!-- VIDEO RESURSI — v3.5 -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">Video resursi</div><div class="sec-line"></div></div>

    <div class="prose">Kada ti tekst nije dovoljan — vizualni učenici često bolje pamte kroz video objašnjenja i predstave. Ovdje su pouzdani edukacijski resursi na YouTubeu.</div>

    <div class="yt-grid">
      <a class="yt-card" href="https://www.youtube.com/results?search_query=stilske+figure+analiza+metafora+personifikacija+matura" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇭🇷</span> HR</div>
          <div class="yt-title">Stilske figure — objašnjenje i primjeri</div>
        </div>
      </a>

      <a class="yt-card" href="https://www.youtube.com/results?search_query=retorika+figure+metonimija+sinegdoha+ironija+škola" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇭🇷</span> HR</div>
          <div class="yt-title">Retorika i figure — metonimija, ironija</div>
        </div>
      </a>

      <a class="yt-card" href="https://www.youtube.com/results?search_query=figures+of+speech+literary+devices+metaphor+simile" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇬🇧</span> EN</div>
          <div class="yt-title">Figures of speech — full guide</div>
        </div>
      </a>

      <a class="yt-card" href="https://www.youtube.com/results?search_query=rhetorical+devices+anaphora+chiasmus+alliteration+explained" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🎬</span> EN</div>
          <div class="yt-title">Rhetorical devices — anaphora, chiasmus</div>
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
      <span class="nb-btn" onclick="sw(0)">← Teorija</span>
      <span class="nb-btn primary" onclick="sw(2)">📝 Figure riječi →</span>
    </div>

  </div><!-- /l1 -->

  <div class="layer" id="l2" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-pa">10 figura riječi</span>
      <span class="pill p-br">leksička razina</span>
      <span class="pill p-go">epitet dominira</span>
      <span class="pill p-t">20% ispita</span>
    </div>

    <div class="box-int" style="margin-bottom:20px">
      <div class="box-int-lbl">📝 Figure riječi — leksička razina</div>
      <div class="box-int-txt"><strong>Figure riječi</strong> djeluju na razini <em>pojedinačnih leksema</em> — pridjeva, imenica, zvukovnih oblika. Za razliku od tropa (koji mijenjaju značenje), ove figure <em>pojačavaju izraz</em> bez prenesena značenja. Česte u poeziji i dramama.</div>
    </div>

    <div class="scene-list">

      <!-- 01 EPITET -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">01</div>
          <div class="scene-ttl">Epitet <span style="color:var(--gold);font-size:11px;margin-left:8px">★ NAJČEŠĆA</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> Ukrasni pridjev ili pridjevska sintagma koji <strong>opisuje imenicu s dodanim emocionalnim ili estetskim značenjem</strong>. Nije nužan za razumijevanje — dodaje sliku, emociju, ritam.<br><br>
            <b>Primjeri iz hrv. književnosti:</b><br>
            • <em>„junačka srca"</em> — Mažuranić, Smrt Smail-age (<strong>H14</strong>). Ocjena + slika.<br>
            • <em>„bujna zora"</em> — poetska slika jutra.<br>
            • <em>„zlatni Dubrovnik"</em> (<strong>H13</strong>) — vrijednosni epitet.<br>
            • <em>„čelična pesnica"</em> — metaforičan epitet.<br>
            • <em>„tamna noć"</em> — atmosferski epitet.<br>
            • <em>„tužne oči"</em> — emocionalni epitet.<br>
            • <em>„hrabar vojnik"</em> — karakterizacijski epitet.<br><br>
            <b>Tipovi epiteta:</b><br>
            • <strong>Opisni</strong> — „zelena trava" (konstatacija)<br>
            • <strong>Vrijednosni</strong> — „zao ćud" (procjena)<br>
            • <strong>Metaforički</strong> — „čelična volja" (prenesen)<br>
            • <strong>Stalni</strong> (vidi br. 02)<br><br>
            <b>Kako prepoznati:</b> Pronađi <em>ukrasni pridjev</em> koji može otpasti a tekst ostaje smislen. Ako se pridjev može maknuti bez gubitka značenja → epitet.<br><br>
            <b>Česta zabuna:</b> Svaki pridjev nije epitet. „Crveni auto" je samo opis. Epitet <em>ima stilski ili emocionalni težak</em> („vatreni auto" — ima).<br><br>
            <b>Funkcija:</b> Slikovitost, emocionalna boja, ritam, karakterizacija. Temeljna figura poezije.
          </div>
        </div>
      </div>

      <!-- 02 STALNI EPITET -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">02</div>
          <div class="scene-ttl">Stalni epitet (epitheton ornans) <span style="color:var(--gold);font-size:11px;margin-left:8px">★ ČESTA</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> Posebna vrsta epiteta koja je <strong>konvencionalno vezana uz određenu imenicu</strong> u tradiciji (folklor, ep, usmena književnost). Ne opisuje pojedinačnu imenicu, nego tip.<br><br>
            <b>Primjeri iz hrv. i svjetske književnosti:</b><br>
            • <em>„bijeli Dvori"</em> — uvijek bijeli u nar. pjesmama.<br>
            • <em>„vjerna ljuba"</em> — supruga u junačkoj epici.<br>
            • <em>„sivi soko"</em> — narodna lirika.<br>
            • <em>„brzonogi Ahilej"</em> (Homer, Ilijada) — klasični primjer.<br>
            • <em>„vladar svijetlih kosa"</em> — Shakespeare.<br>
            • <em>„mlada Mara"</em> — narodne pjesme.<br>
            • <em>„sinja kukavica"</em> — narodna simbolika.<br><br>
            <b>U kojim djelima najčešće:</b><br>
            • <strong>Narodne pjesme</strong> (hrvatske i srpske)<br>
            • <strong>Mažuranić, Smrt Smail-age</strong> (<strong>H14</strong>) — Mažuranić oponaša narodni stil, koristi stalne epitete<br>
            • <strong>Homer, Vergilije, klasični epovi</strong><br><br>
            <b>Kako prepoznati:</b> Pridjev je <em>uvijek isti</em> uz određenu imenicu. „Bijeli grad", „zelena trava" u <em>svakoj</em> narodnoj pjesmi.<br><br>
            <b>Česta zabuna:</b> Običan epitet vs. stalni epitet. <strong>Običan</strong> = kreativan, nov. <strong>Stalni</strong> = konvencionalan, tradicionalan, često u fiksnom obliku.<br><br>
            <b>Funkcija:</b> Folklorni registar, ritam, mnemotehnika (pomoć za pamćenje), narodni ton.
          </div>
        </div>
      </div>

      <!-- 03 DEMINUTIV -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">03</div>
          <div class="scene-ttl">Deminutiv (umanjenica)</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> Imenica umanjena tvorbeno (-ić, -čić, -ica, -čica) koja izražava <strong>umanjenu veličinu, nježnost, privrženost ili poniženje</strong>.<br><br>
            <b>Primjeri:</b><br>
            • <em>„sunašce"</em> (← sunce) — nježnost.<br>
            • <em>„gradić"</em> (← grad) — umanjena veličina.<br>
            • <em>„djevojčica"</em> (← djevojka).<br>
            • <em>„kućica"</em> (← kuća) — romantično, često u pjesmama.<br>
            • <em>„ljubavčica"</em> — nježna ljubav.<br>
            • <em>„srdašce"</em> (← srce) — poetsko.<br>
            • <em>„mamica"</em> — dječje oslovljavanje.<br><br>
            <b>U kojim djelima:</b><br>
            • <strong>Lirska poezija</strong> (Cesarić, Tadijanović, dječja poezija)<br>
            • <strong>Narodne uspavanke i ljubavne pjesme</strong><br>
            • <strong>Gundulićeva pastoralna atmosfera</strong> u Dubravki (<strong>H13</strong>)<br><br>
            <b>Kako prepoznati:</b> Traži sufikse <em>-ić, -čić, -ica, -čica, -če, -ašce</em>.<br><br>
            <b>Česta zabuna:</b> Deminutiv može izražavati i <em>pogrdnost</em> („popić" umjesto „pop"). Pazi na kontekst.<br><br>
            <b>Funkcija:</b> Nježnost, intimnost, folklorni ton, dječji svijet, emocionalna toplina.
          </div>
        </div>
      </div>

      <!-- 04 AUGMENTATIV -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">04</div>
          <div class="scene-ttl">Augmentativ (uvećanica)</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> Imenica uvećana tvorbeno (-ina, -urda, -etina) koja izražava <strong>uvećanu veličinu, grubost, prezir ili ružnoću</strong>.<br><br>
            <b>Primjeri:</b><br>
            • <em>„kućerina"</em> (← kuća) — velika, loše održavana.<br>
            • <em>„čovječina"</em> — velik ili neprijatan čovjek (ovisno o kontekstu).<br>
            • <em>„babetina"</em> — pogrdna starica.<br>
            • <em>„cipelurda"</em> — velika, neugledna cipela.<br>
            • <em>„psina"</em> — krupno, možda opasno ili drago (ovisno o kontekstu).<br>
            • <em>„nogurina"</em> — velika noga.<br><br>
            <b>U kojim djelima:</b><br>
            • <strong>Mažuranić, Smrt Smail-age</strong> (<strong>H14</strong>) — prikaz okrutnih Turaka<br>
            • <strong>Realistička proza</strong> — karakterizacija likova kroz augmentative<br>
            • <strong>Šenoa, Prijan Lovro</strong> (<strong>H15</strong>) — malograđanski likovi<br><br>
            <b>Kako prepoznati:</b> Traži sufikse <em>-ina, -urda, -etina, -čina</em>.<br><br>
            <b>Česta zabuna:</b> Augmentativ vs. deminutiv — suprotni. Prvi povećava, drugi umanjuje.<br><br>
            <b>Funkcija:</b> Karakterizacija, pogrdnost, komičnost, fizička ekspresivnost.
          </div>
        </div>
      </div>

      <!-- 05 SLAVENSKA ANTITEZA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">05</div>
          <div class="scene-ttl">Slavenska antiteza</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> Specifična stilska figura <strong>narodne (južnoslavenske) poezije</strong> koja se sastoji od tri dijela: (1) postavljeno pitanje/retoričko stanje, (2) niječni odgovor/odbacivanje, (3) pravi odgovor. Troslojna struktura.<br><br>
            <b>Klasični primjer:</b><br>
            <em>„Što se bijeli u gori zelenoj?<br>
            Al' su sn<b>j</b>egovi, al' su labudovi?<br>
            Niti su snijezi, nit' su labudovi,<br>
            Nego šator age Hasan-age..."</em><br>
            <span style="color:var(--t2);font-size:12px">— Hasanaginica, klasična hrv. nar. balada</span><br><br>
            <b>Struktura:</b><br>
            1. <em>Pitanje</em> → „Što se bijeli u gori?"<br>
            2. <em>Lažni odgovori</em> → „Al' su snijezi, al' su labudovi?"<br>
            3. <em>Pravi odgovor</em> → „Nego šator age Hasan-age"<br><br>
            <b>U kojim djelima:</b><br>
            • <strong>Hrv. narodne pjesme</strong> (Hasanaginica, Kraljević Marko)<br>
            • <strong>Mažuranić, Smrt Smail-age</strong> (<strong>H14</strong>) — Mažuranić oponaša narodni stil<br>
            • Srpska narodna epika (Vuk Karadžić)<br><br>
            <b>Kako prepoznati:</b> Troslojna struktura pitanje → lažni odgovor → pravi odgovor. Tipično u nar. baladama i epovima.<br><br>
            <b>Česta zabuna:</b> Slavenska antiteza je <em>uža kategorija</em> od obične antiteze (kontrasta). Ima specifičnu troslojnu strukturu.<br><br>
            <b>Funkcija:</b> Dramatski efekt, suspense, narodni ton, mnemotehnika u usmenoj tradiciji.
          </div>
        </div>
      </div>

      <!-- 06 APOSTROFA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">06</div>
          <div class="scene-ttl">Apostrofa <span style="color:var(--gold);font-size:11px;margin-left:8px">★ ČESTA</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Izravno oslovljavanje</strong> odsutne osobe, mrtve osobe, predmeta, apstraktnog pojma ili prirode. Govornik prekida pripovijedanje da se <em>obrati</em> nekome/nečemu.<br><br>
            <b>Primjeri iz hrv. književnosti:</b><br>
            • <em>„O Dubravko, slatka slobodo!"</em> — Gundulić (<strong>H13</strong>) — apostrofa slobode.<br>
            • <em>„Ne lomi, pobro, krstova!"</em> — Mažuranić (<strong>H14</strong>) — apostrofa Crnogorca.<br>
            • <em>„Smrti, gdje je tvoja pobjeda?"</em> — kršćansko pjesništvo.<br>
            • <em>„O ti nezemaljska ljepoto!"</em> — romantičarska poezija.<br>
            • <em>„Hrvatska moja, vječni snu!"</em> — domoljubna lirika.<br>
            • <em>„Bože, daj mi snage!"</em> — religijska apostrofa.<br><br>
            <b>Što se oslovljava:</b><br>
            • <strong>Osoba</strong> (odsutna, mrtva, apstraktna)<br>
            • <strong>Priroda</strong> („Oh more, vječno čuvaru!")<br>
            • <strong>Božanstvo</strong> ili nadnaravno biće<br>
            • <strong>Apstraktan pojam</strong> (sloboda, smrt, pravda)<br>
            • <strong>Predmet</strong> („Stara knjiga, ti svjedoče!")<br><br>
            <b>Kako prepoznati:</b> Traži <em>oslovljavanje u 2. licu</em> („ti"), često s uzvikom „O!", „Oh!", zarezom.<br><br>
            <b>Česta zabuna:</b> Apostrofa prema živoj osobi je normalni dijalog. Apostrofa je <em>specifično</em> za odsutno/apstraktno.<br><br>
            <b>Funkcija:</b> Emocionalni intenzitet, patos, retorički učinak, zaokret u pjesmi.
          </div>
        </div>
      </div>

      <!-- 07 RETORIČKO PITANJE -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">07</div>
          <div class="scene-ttl">Retoričko pitanje <span style="color:var(--gold);font-size:11px;margin-left:8px">★ ČESTA</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> Pitanje koje <strong>ne očekuje odgovor</strong> — forma pitanja koja izražava tvrdnju, emocionalni stav ili iznutarnji konflikt.<br><br>
            <b>Primjeri:</b><br>
            • <em>„Zar je ovo moguće?"</em> — izražava nevjericu.<br>
            • <em>„Koga briga?"</em> — izražava ravnodušnost („nikog").<br>
            • <em>„Gdje je pravda na svijetu?"</em> — izražava revolt („nema je").<br>
            • <em>„Zašto nam tako čini?"</em> — Mažuranić, Smail-aga (<strong>H14</strong>) — molba pretvorena u pitanje.<br>
            • <em>„Tko može reći što je ljubav?"</em> — filozofsko retoričko.<br>
            • <em>„Kako možete tako govoriti?"</em> — ljutnja u formi pitanja.<br>
            • <em>„Zar nije sve uzalud?"</em> — egzistencijalno očajanje.<br><br>
            <b>U kojim djelima:</b><br>
            • <strong>Mažuranić, Smrt Smail-age</strong> (<strong>H14</strong>) — česta figura dramatskog patosa<br>
            • <strong>Krleža, Glembajevi</strong> (<strong>H16</strong>) — Leone pita retorički kad razotkriva laž<br>
            • <strong>Religijska poezija</strong> (psalmi, apokaliptička)<br>
            • <strong>Političko-didaktička proza</strong><br><br>
            <b>Kako prepoznati:</b> Pitanje na koje <em>svi znaju odgovor</em> (ili na koje govornik ne čeka odgovor). Upitnik + izjavno značenje.<br><br>
            <b>Česta zabuna:</b> Retoričko pitanje nije svako pitanje. „Gdje živiš?" nije retoričko. „Zar je to pošteno?" jest (= „nije pošteno").<br><br>
            <b>Funkcija:</b> Emocionalno naglašavanje, retorički učinak, uvlačenje čitatelja u raspravu, dramatski patos.
          </div>
        </div>
      </div>

      <!-- 08 UZVIK -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">08</div>
          <div class="scene-ttl">Uzvik (eksklamacija)</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> Kratka emocionalna izjava označena <strong>uskličnikom</strong>, često bez punog sintaktičkog oblika. Izražava snažnu emociju.<br><br>
            <b>Primjeri:</b><br>
            • <em>„O majko!"</em><br>
            • <em>„Ah, nemoj!"</em><br>
            • <em>„Oh Bože!"</em><br>
            • <em>„Jao meni!"</em><br>
            • <em>„Aferim!"</em> (tradicionalan uzvik odobravanja)<br>
            • <em>„Eh, kad bi znao..."</em> — melankolični uzvik.<br>
            • <em>„Dobro je rekla stara Barboczyjeva!"</em> — Krleža, Glembajevi (<strong>H16</strong>) — baruničin uzvik pred ubojstvo.<br><br>
            <b>Tipovi uzvika:</b><br>
            • <strong>Emocionalni</strong> — „Oh!", „Ah!", „Jao!"<br>
            • <strong>Voljni</strong> — „Stoj!", „Bježi!"<br>
            • <strong>Zvučni (onomatopejski)</strong> — „Bum!", „Pljus!"<br>
            • <strong>Proklinjući / zazivajući</strong> — „Bogami!", „Dođavola!"<br><br>
            <b>Kako prepoznati:</b> Kratki izrazi + uskličnik + emocionalni naboj.<br><br>
            <b>Česta zabuna:</b> Uzvik može biti <em>dio apostrofe</em> („O Dubravko!") — tada se broji kao obje figure.<br><br>
            <b>Funkcija:</b> Emocionalna izravnost, patos, dramatsko pojačanje, usmena autentičnost.
          </div>
        </div>
      </div>

      <!-- 09 KONTRAST / ANTITEZA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">09</div>
          <div class="scene-ttl">Kontrast / Antiteza <span style="color:var(--gold);font-size:11px;margin-left:8px">★ VRLO ČESTA</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Suprotstavljanje dviju suprotnih ideja, slika, pojmova</strong> u istom iskazu ili djelu. Antiteza može biti rečenica („Bogat siromah"), ali i temelj cijelog djela.<br><br>
            <b>Primjeri iz hrv. književnosti:</b><br>
            • <em>„Bogat siromah"</em> — klasična antiteza.<br>
            • <em>„Privid ↔ istina"</em> — glavni kontrast Krležinih Glembajevih (<strong>H16</strong>).<br>
            • <em>„Bijele vile u crnoj gori"</em> — barokna antiteza.<br>
            • <em>„Umjetnost ↔ materijalizam"</em> — sukob Leone/Ignjat (<strong>H16</strong>).<br>
            • <em>„Život ↔ smrt"</em> — fundamentalna antiteza u Mažuranićevom spjevu (<strong>H14</strong>).<br>
            • <em>„Grad ↔ selo"</em> — Šenoin Prijan Lovro (<strong>H15</strong>).<br>
            • <em>„Idealizam ↔ materijalizam"</em> — Lovro vs. Minka (<strong>H15</strong>).<br>
            • <em>„Svjetlo ↔ tama"</em> — biblijska antiteza.<br><br>
            <b>Razine antiteze:</b><br>
            • <strong>Riječi</strong> — „hladno sunce", „sretna tuga"<br>
            • <strong>Rečenice</strong> — „Bio je bogat, ali siromašan duhom"<br>
            • <strong>Karaktera</strong> — Leone vs. Ignjat (<strong>H16</strong>)<br>
            • <strong>Ideje</strong> — tema cijelog djela (privid/istina u H16)<br><br>
            <b>Kako prepoznati:</b> Traži <em>dva suprotna pojma</em> koja autor stavlja u odnos.<br><br>
            <b>Česta zabuna:</b> Antiteza vs. oksimoron. <strong>Oksimoron</strong> je poseban tip antiteze — dvije riječi koje se <em>isključuju</em> („hladno sunce"). <strong>Antiteza</strong> može biti i šire — cijela rečenica.<br><br>
            <b>Funkcija:</b> Dramski učinak, filozofska dubina, struktura djela, naglašavanje ideje kroz kontrast.
          </div>
        </div>
      </div>

      <!-- 10 ETIMOLOŠKA FIGURA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">10</div>
          <div class="scene-ttl">Etimološka figura (figura etymologica)</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> Ponavljanje riječi <strong>istog korijena</strong> u različitim oblicima (glagol + imenica ili pridjev + imenica). Stilsko pojačanje kroz istoriječ.<br><br>
            <b>Primjeri:</b><br>
            • <em>„San snivati"</em> — glagol + imenica istog korijena.<br>
            • <em>„Ljubiti ljubav"</em><br>
            • <em>„Boj bojevati"</em> — epska fraza.<br>
            • <em>„Pjesmu pjevati"</em><br>
            • <em>„Živjeti život"</em><br>
            • <em>„Misao misliti"</em><br>
            • <em>„Knjigu napisati"</em> NIJE etimološka figura (različiti korijeni).<br><br>
            <b>U kojim djelima:</b><br>
            • <strong>Narodna poezija</strong> — česta figura usmene tradicije<br>
            • <strong>Mažuranić, Smrt Smail-age</strong> (<strong>H14</strong>) — epski registar<br>
            • <strong>Biblija i religijska poezija</strong> — „pjesmu pjevati Gospodu"<br>
            • <strong>Lirska pjesma</strong> — ritmičko pojačanje<br><br>
            <b>Kako prepoznati:</b> Dvije riječi <em>istog korijena</em> u istoj frazi. Obično glagol + imenica.<br><br>
            <b>Funkcija:</b> Ritmičko pojačanje, svečanost, folklorni ton, semantička koncentracija.
          </div>
        </div>
      </div>

    </div><!-- /scene-list -->

    <!-- SINTEZA -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">★ Sinteza — figure riječi po ispitnoj težini</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Figura</th><th>Ispitna težina</th><th>Gdje najčešće</th></tr></thead>
        <tbody>
          <tr><td><strong>Epitet</strong> ★</td><td>Laka za prepoznati</td><td>Sva poezija (H12 Judita, H13 Dubravka, H14 Smail-aga)</td></tr>
          <tr><td><strong>Stalni epitet</strong> ★</td><td>Laka (po tipičnom obliku)</td><td>Narodne pjesme, Mažuranić (H14), klasični epovi</td></tr>
          <tr><td><strong>Apostrofa</strong> ★</td><td>Laka (po obliku oslovljavanja)</td><td>H13 Dubravka, H14 Mažuranić, lirska poezija</td></tr>
          <tr><td><strong>Retoričko pitanje</strong> ★</td><td>Laka</td><td>H14 Mažuranić, H16 Krleža, religijska i didaktička proza</td></tr>
          <tr><td><strong>Kontrast / antiteza</strong> ★</td><td>Srednja (treba protumačiti)</td><td>H16 Glembajevi (osa drame), svi autori</td></tr>
          <tr><td><strong>Deminutiv / augmentativ</strong></td><td>Laka (po sufiksu)</td><td>Lirika, folklor, psihološka proza</td></tr>
          <tr><td><strong>Uzvik</strong></td><td>Laka (po uskličniku)</td><td>Sva dramska književnost, patetska poezija</td></tr>
          <tr><td><strong>Slavenska antiteza</strong></td><td>Srednja (troslojna struktura)</td><td>Hrv. narodne pjesme, Hasanaginica, Mažuranić (H14)</td></tr>
          <tr><td><strong>Etimološka figura</strong></td><td>Teška (prepoznati istoriječ)</td><td>Narodna epika, biblijski registar</td></tr>
        </tbody>
      </table>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">🎯 Top 3 figure riječi koje MORAŠ znati</div>
      <div class="box-key-txt">
        <strong>1. Epitet</strong> — prisutan u svakom ulomku poezije. Loše znati → loš odgovor.<br>
        <strong>2. Apostrofa</strong> — lako prepoznati (oslovljavanje + uzvik); često na maturi.<br>
        <strong>3. Kontrast / antiteza</strong> — temelj mnogih djela (posebno H16 Glembajevi). Esej bez kontrasta = slab esej.
      </div>
    </div>

    <!-- DISCERE -->
    <div class="discere-banner" style="margin-top:18px" onclick="window.location.href='#discere'">
      <div class="discere-ico">📝</div>
      <div class="discere-txt">
        <div class="discere-ttl">Discere · Epitet detector</div>
        <div class="discere-sub">Zalijepi ulomak — AI klasificira epitete (opisni/vrijednosni/metaforički/stalni) · <strong>Pro plan</strong></div>
      </div>
      <div class="discere-arrow">→</div>
    </div>

    <div class="nav-row">
      <span class="nb-btn" onclick="sw(1)">← Tropi</span>
      <span class="nb-btn primary" onclick="sw(3)">📐 Figure rečenice →</span>
    </div>

  </div><!-- /l2 -->

  <div class="layer" id="l3" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-pa">12 figura rečenice</span>
      <span class="pill p-br">sintaktička razina</span>
      <span class="pill p-go">anafora + gradacija</span>
      <span class="pill p-t">15% ispita</span>
    </div>

    <div class="box-int" style="margin-bottom:20px">
      <div class="box-int-lbl">📐 Figure rečenice — sintaktička razina</div>
      <div class="box-int-txt"><strong>Figure rečenice</strong> djeluju na razini <em>rečenične strukture</em> — redoslijeda riječi, ponavljanja, izostavljanja. Zovu se i <em>sintaktičke</em> figure. Grade ritam, napetost, emocionalni tempo djela.</div>
    </div>

    <div class="scene-list">

      <!-- 01 INVERZIJA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">01</div>
          <div class="scene-ttl">Inverzija <span style="color:var(--gold);font-size:11px;margin-left:8px">★ ČESTA</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Obrnut red riječi</strong> u odnosu na standardni (subjekt–predikat–objekt). Namjerna promjena redoslijeda za stilski učinak.<br><br>
            <b>Primjeri:</b><br>
            • <em>„Lijepa si, Hrvatska, moja!"</em> — inverzija (pridjev ispred imenice, vokativ na kraju).<br>
            • <em>„Teška je domovina, gorčina je bratska"</em> — Kranjčević.<br>
            • <em>„Vječna je slava junaka palih"</em> — romantičarska inverzija.<br>
            • <em>„Ponosne su ruke starog Crnogorca"</em> — Mažuranić, Smail-aga (<strong>H14</strong>).<br>
            • <em>„Teškom mukom disaše Ignjat"</em> — pseudo-Krležinska inverzija iz Glembajevih (<strong>H16</strong>).<br><br>
            <b>Kako prepoznati:</b> Rečenica <em>zvuči „čudno"</em> u normalnom govoru, ali ima snažan učinak. Traži atipični redoslijed (predikat prvi, pridjev nakon imenice itd.).<br><br>
            <b>Tipovi inverzije:</b><br>
            • <strong>Imenska</strong> — pridjev iza imenice („čovjek dobar")<br>
            • <strong>Glagolska</strong> — predikat ispred subjekta („Dolazi otac")<br>
            • <strong>Objekt-prvo</strong> — objekt na početku („Knjigu sam mu dao")<br><br>
            <b>Funkcija:</b> Ritam, naglašavanje (riječ na „neočekivanoj" poziciji dobiva važnost), poetski učinak, epski registar.
          </div>
        </div>
      </div>

      <!-- 02 PARALELIZAM -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">02</div>
          <div class="scene-ttl">Paralelizam</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Ista sintaktička struktura</strong> u dvjema ili više rečenica / stihova. Gradi se kroz ponavljanje rečeničnog obrasca.<br><br>
            <b>Primjeri:</b><br>
            • <em>„Sunce sjaji, srce pjeva, duh se diže"</em> — tri paralelne rečenice s istim obrascem (subjekt + predikat).<br>
            • <em>„Pobjegao vuk — pobjegao lisac — pobjegao zec"</em> — ponavljanje strukture.<br>
            • Šekspirovsko <em>„To be or not to be"</em> — paralelizam kroz „to be".<br>
            • <em>„Kad je dan, radi; kad je noć, spava; kad je tuga, plače"</em> — biblijski paralelizam.<br>
            • <em>„Leone pogleda ocu, Leone pogleda Angeliki, Leone pogleda portretima"</em> — paralelizam u prozi (Krleža stil, <strong>H16</strong>).<br><br>
            <b>Tipovi paralelizma:</b><br>
            • <strong>Sinonimski</strong> — ponavljanje značenja („sunce sjaji, srce pjeva")<br>
            • <strong>Antitetički</strong> — suprotna značenja s istim obrascem („dan je, noć nije")<br>
            • <strong>Klimaksni</strong> — postupno pojačavanje (vidi gradaciju)<br><br>
            <b>Kako prepoznati:</b> Pronađi <em>više rečenica s istim gramatičkim obrascem</em>.<br><br>
            <b>Česta zabuna:</b> Paralelizam vs. anafora. <strong>Paralelizam</strong> = ista <em>struktura</em>. <strong>Anafora</strong> = ista <em>riječ na početku</em>.<br><br>
            <b>Funkcija:</b> Ritam, svečanost, naglašavanje (pojačavanjem kroz ponavljanje), biblijski/liturgijski registar.
          </div>
        </div>
      </div>

      <!-- 03 ANAFORA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">03</div>
          <div class="scene-ttl">Anafora <span style="color:var(--gold);font-size:11px;margin-left:8px">★ VRLO ČESTA</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> Ponavljanje iste riječi ili fraze na <strong>početku</strong> uzastopnih stihova, rečenica ili odlomaka.<br><br>
            <b>Primjeri:</b><br>
            • <em>„Tebe Boga hvalimo, Tebe Gospoda ispovijedamo, Tebe vječni Oca sva zemlja časti..."</em> — Te Deum, liturgijska anafora.<br>
            • <em>„Bez tebe nema zore, Bez tebe nema sunca, Bez tebe nema mene..."</em> — tipičan obrazac ljubavne lirike.<br>
            • Shakespeare, Sonet 66: <em>„Tir'd with all these, for restful death I cry..."</em> — „Tir'd with all these" ponavljano.<br>
            • <em>„Ja sam došao, ja sam vidio, ja sam pobijedio"</em> (Cezar) — anaforičko „ja sam".<br>
            • Kranjčević: <em>„Za život kliče, za smrt pjeva, za dušu plače..."</em> (tip).<br><br>
            <b>U kojim djelima:</b><br>
            • <strong>Lirska poezija</strong> (Cesarić, Tadijanović, Ujević)<br>
            • <strong>Religijska poezija</strong> (psalmi, himne)<br>
            • <strong>Mažuranić, Smail-aga</strong> (<strong>H14</strong>) — anaforičke molbe<br>
            • <strong>Retorički govor</strong> (politički, svečani)<br><br>
            <b>Kako prepoznati:</b> Ista riječ/fraza <em>na početku</em> više stihova zaredom.<br><br>
            <b>Česta zabuna:</b> <strong>Anafora vs. epifora.</strong> Anafora = <em>početak</em>. Epifora = <em>kraj</em>.<br><br>
            <b>Funkcija:</b> Pojačan emocionalni učinak, ritam, sugestija svečanosti, zaklinjanje, molitveni ton.
          </div>
        </div>
      </div>

      <!-- 04 EPIFORA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">04</div>
          <div class="scene-ttl">Epifora</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> Ponavljanje iste riječi ili fraze na <strong>kraju</strong> uzastopnih stihova, rečenica ili odlomaka.<br><br>
            <b>Primjeri:</b><br>
            • <em>„Ti si moja zvijezda, ti si moja sreća, ti si moja... ti si moja"</em> — primjer ponavljanja na kraju.<br>
            • <em>„I tebi ljubav, i meni ljubav, i nam svima ljubav"</em> — epifora „ljubav".<br>
            • <em>„Dobro jutro, dobro veče, dobro svega što život znači"</em> (tipski) — ovdje „dobro" je anafora, „večeri/večeri" kraj je epifora.<br>
            • <em>„Nestalo je, ispalo je, umrlo je..."</em> — „je" kao epiforički završetak.<br><br>
            <b>U kojim djelima:</b><br>
            • <strong>Retorička proza</strong><br>
            • <strong>Lirska poezija</strong> (rjeđe od anafore)<br>
            • <strong>Usmena tradicija</strong><br><br>
            <b>Kako prepoznati:</b> Ista riječ/fraza <em>na kraju</em> uzastopnih redaka.<br><br>
            <b>Česta zabuna:</b> Epifora je <em>rjeđa</em> od anafore u hrv. poeziji.<br><br>
            <b>Funkcija:</b> Zaključna snaga, ritmička težina na kraju, dramski efekt ponavljanja.
          </div>
        </div>
      </div>

      <!-- 05 SIMPLOKA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">05</div>
          <div class="scene-ttl">Simploka</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> Kombinacija anafore i epifore — <strong>ista riječ na početku I kraju</strong> uzastopnih rečenica/stihova.<br><br>
            <b>Primjeri:</b><br>
            • <em>„Mir vam svima, mir; mir u srcu, mir"</em> — „mir" na početku i na kraju.<br>
            • <em>„Ljubav sve osjeća, ljubav; ljubav sve podnosi, ljubav"</em> — simploka „ljubav".<br>
            • Rimski orator Ciceron često koristio u govorima.<br><br>
            <b>Kako prepoznati:</b> Kombinacija — <em>ista riječ i na početku i na kraju</em>. Rijetka figura.<br><br>
            <b>Česta zabuna:</b> Ako je samo početak → anafora. Ako je samo kraj → epifora. Ako je <em>oboje</em> → simploka.<br><br>
            <b>Funkcija:</b> Maksimalno emocionalno pojačanje, opkoljavanje misli riječju.
          </div>
        </div>
      </div>

      <!-- 06 GRADACIJA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">06</div>
          <div class="scene-ttl">Gradacija <span style="color:var(--gold);font-size:11px;margin-left:8px">★ ČESTA</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Postupno pojačavanje ili slabljenje</strong> intenziteta kroz niz pojmova. Može biti uzlazna (klimaks) ili silazna (antiklimaks).<br><br>
            <b>Primjeri:</b><br>
            • <em>„Došao sam, vidio, pobijedio"</em> (Cezar) — uzlazna gradacija djelovanja.<br>
            • <em>„Ni srce ne lupa, ni duša ne pjeva, ni noga ne kroči"</em> — uzlazna gradacija (od fizičkog do duhovnog sloma).<br>
            • <em>„Gol, bos, gladan, umoran"</em> — pojačavanje kroz pojmove.<br>
            • <em>„Bol, agonija, smrt"</em> — medicinska gradacija.<br>
            • Leoneove optužbe ocu u II. činu Glembajevih (<strong>H16</strong>) — gradacija razotkrivanja.<br>
            • Mažuranićev opis Smail-aginog nasilja (<strong>H14</strong>) — gradacija okrutnosti.<br><br>
            <b>Kako prepoznati:</b> Pronađi <em>niz pojmova</em> koji se pojačavaju ili slabe u intenzitetu.<br><br>
            <b>Tipovi:</b> Uzlazna (klimaks) · Silazna (antiklimaks) — vidi sljedeće dvije.<br><br>
            <b>Funkcija:</b> Dramatski učinak, emocionalni krešendo, retoričko pojačanje.
          </div>
        </div>
      </div>

      <!-- 07 KLIMAKS -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">07</div>
          <div class="scene-ttl">Klimaks (uzlazna gradacija)</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> Podvrsta gradacije — <strong>uzlazno pojačavanje</strong> kroz niz. Od slabijeg prema jačem.<br><br>
            <b>Primjeri:</b><br>
            • <em>„Vidio, čuo, razumio, prihvatio"</em> — klimaks spoznaje.<br>
            • <em>„Ljubim — volim — obožavam"</em> — klimaks emocije.<br>
            • <em>„Dobar, bolji, najbolji"</em> — klimaks kvalitete.<br>
            • <em>„Dolazi, gleda, kažnjava"</em> — klimaks djelovanja.<br>
            • Lovro u Šenoinoj pripovijesti (<strong>H15</strong>) — put od ljubavi do tragedije (klimaksna struktura pripovijedanja).<br><br>
            <b>Kako prepoznati:</b> Niz u kojem <em>svaki sljedeći element je jači</em>.<br><br>
            <b>Funkcija:</b> Krešendo, dramatski vrhunac, emocionalno intenziviranje.
          </div>
        </div>
      </div>

      <!-- 08 ANTIKLIMAKS -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">08</div>
          <div class="scene-ttl">Antiklimaks (silazna gradacija)</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Silazno slabljenje</strong> kroz niz. Od jačeg prema slabijem. Često stvara ironijski ili komički učinak.<br><br>
            <b>Primjeri:</b><br>
            • <em>„Kraljev, herojev, prosjakov"</em> — antiklimaks statusa.<br>
            • <em>„Ljubio sam, cijenio, trpio, zaboravio"</em> — antiklimaks emocije.<br>
            • <em>„Nebo, planinu, ravnicu, mokru lokvu"</em> — antiklimaks prostora.<br>
            • <em>„Vječnost, život, minuta, sekunda"</em> — antiklimaks vremena.<br><br>
            <b>Kako prepoznati:</b> Niz u kojem <em>svaki sljedeći element je slabiji / banalniji</em>.<br><br>
            <b>Česta zabuna:</b> Antiklimaks je namjerno <em>razočaranje</em> nakon očekivanog vrhunca. Nije „neuspjeh gradacije".<br><br>
            <b>Funkcija:</b> Ironijski / komički učinak, razbijanje očekivanja, melankolija.
          </div>
        </div>
      </div>

      <!-- 09 ELIPSA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">09</div>
          <div class="scene-ttl">Elipsa (izostavljanje)</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Izostavljanje dijela rečenice</strong> (obično predikata ili druge funkcionalne riječi) koji se razumije iz konteksta. Rečenica ostaje razumljiva, ali skraćena.<br><br>
            <b>Primjeri:</b><br>
            • <em>„Ja u grad, ti kući"</em> — izostavljen glagol „idem/ideš".<br>
            • <em>„Bog ljubav, Bog milost, Bog oprost"</em> — izostavljen je „je".<br>
            • <em>„On brzo, ja sporije"</em> — izostavljen glagol.<br>
            • <em>„Napolje!"</em> (umjesto „Idi napolje!") — elipsa predikata.<br>
            • <em>„Dobro jutro, sunce!"</em> (skraćenica od „Dobro vam jutro želim, sunce moje") — duboka elipsa.<br><br>
            <b>U kojim djelima:</b><br>
            • <strong>Moderna lirika</strong> (Ujević, A. B. Šimić) — ekonomija izraza<br>
            • <strong>Dramski dijalog</strong> (Krleža, <strong>H16</strong>) — Leoneove kratke eliptične replike<br>
            • <strong>Svakodnevni govor</strong> (razgovorni stil)<br><br>
            <b>Kako prepoznati:</b> Rečenica je <em>gramatički „nepotpuna"</em>, ali razumljiva zbog konteksta.<br><br>
            <b>Funkcija:</b> Brzina, napetost, emocionalni pritisak, modernistički ekonomizam.
          </div>
        </div>
      </div>

      <!-- 10 ASINDETON -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">10</div>
          <div class="scene-ttl">Asindeton (bezveznik)</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> Nabrajanje <strong>bez veznika</strong> (bez „i", „ili", „te"). Elementi odvojeni samo zarezima.<br><br>
            <b>Primjeri:</b><br>
            • <em>„Došao, vidio, pobijedio"</em> (Cezar) — klasični asindeton.<br>
            • <em>„Gol, bos, gladan, umoran, izgubljen"</em> — nizanje stanja bez veznika.<br>
            • <em>„Vatra, krv, pepeo, tišina"</em> — apokaliptični asindeton.<br>
            • <em>„Sve, ništa, svuda, nigdje"</em> — egzistencijalni niz.<br><br>
            <b>Kako prepoznati:</b> Niz pojmova/radnji <em>bez „i"</em> između njih. Tempo je brz, intenzivan.<br><br>
            <b>Česta zabuna:</b> Asindeton vs. polisindeton — suprotni (sljedeća figura).<br><br>
            <b>Funkcija:</b> Brzina, intenzivnost, dramski napetost, osjećaj nizova koji „udaraju" jedan za drugim.
          </div>
        </div>
      </div>

      <!-- 11 POLISINDETON -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">11</div>
          <div class="scene-ttl">Polisindeton (viševeznik)</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> Nabrajanje s <strong>ponovljenim veznikom</strong> (i...i...i..., ili...ili...ili...). Svaki element povezan eksplicitno.<br><br>
            <b>Primjeri:</b><br>
            • <em>„I sunce, i mjesec, i zvijezde"</em> — svečani polisindeton.<br>
            • <em>„Ni dom, ni obitelj, ni zemlja"</em> — negativni polisindeton.<br>
            • <em>„I plače, i smije se, i moli, i ljutit je"</em> — emocionalni polisindeton.<br>
            • Biblijski: <em>„I bi večer i bi jutro, dan jedan"</em> — liturgijski polisindeton.<br><br>
            <b>Kako prepoznati:</b> Ponovljeni veznik („i" ili „ni") ispred svakog elementa.<br><br>
            <b>Česta zabuna:</b> Polisindeton vs. asindeton — suprotni (polisindeton ima veznike, asindeton ne).<br><br>
            <b>Funkcija:</b> Svečanost, biblijski registar, sporiji tempo, važnost svakog pojedinog elementa.
          </div>
        </div>
      </div>

      <!-- 12 RETARDACIJA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">12</div>
          <div class="scene-ttl">Retardacija (usporavanje)</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Namjerno usporavanje</strong> radnje kroz detalje, digresije, opise, umetnute rečenice. Odgađa se očekivani vrhunac.<br><br>
            <b>Primjeri:</b><br>
            • <strong>Homer, Ilijada</strong> — opširni opis Ahilejevog štita usporava bitku<br>
            • <strong>Mažuranić, Smail-aga</strong> (<strong>H14</strong>) — opširni opisi prirode i Crnogorskih običaja usporavaju završni sukob<br>
            • <strong>Krleža, Glembajevi</strong> (<strong>H16</strong>) — opširne didaskalije i filozofski dijalozi usporavaju pred dramsku kulminaciju<br>
            • <strong>Šenoa, Prijan Lovro</strong> (<strong>H15</strong>) — okvir pripovijedanja odgađa Lovrovu tragediju<br>
            • Moderna proza s digresijama (Proust, Marcel)<br><br>
            <b>Kako prepoznati:</b> Tekst <em>„staje" kada bi trebao ići dalje</em>. Odugovlači se s opisima, refleksijama, digresijama.<br><br>
            <b>Česta zabuna:</b> Retardacija je <em>namjerna</em>. Dosadan tekst nije retardacija.<br><br>
            <b>Funkcija:</b> Gradnja napetosti (suspense), epski tempo, filozofska dubina, čitatelj „čezne" za vrhuncem.
          </div>
        </div>
      </div>

    </div><!-- /scene-list -->

    <!-- SINTEZA -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">★ Sinteza — 3 pora figura rečenice</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Suprotstavljene figure</th><th>Razlika</th><th>Kako razlučiti</th></tr></thead>
        <tbody>
          <tr><td><strong>Anafora ↔ Epifora</strong></td><td>Anafora = početak stihova. Epifora = kraj.</td><td>Gdje je ponovljeni element — pozicija u stihu.</td></tr>
          <tr><td><strong>Klimaks ↔ Antiklimaks</strong></td><td>Klimaks = uzlazna gradacija. Antiklimaks = silazna (razočaranje).</td><td>Smjer intenziteta — raste ili pada?</td></tr>
          <tr><td><strong>Asindeton ↔ Polisindeton</strong></td><td>Asindeton = bez veznika (brzo). Polisindeton = s ponovljenim veznicima (svečano).</td><td>Broji „i" u nizu — ima ili nema?</td></tr>
        </tbody>
      </table>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">🎯 Top 4 figure rečenice za maturu</div>
      <div class="box-key-txt">
        <strong>1. Anafora</strong> — najčešća, lako prepoznati (isti početak stihova).<br>
        <strong>2. Gradacija</strong> — česta, važna za dramu (klimaks tragedije).<br>
        <strong>3. Inverzija</strong> — svugdje u poeziji; učestala.<br>
        <strong>4. Kontrast / paralelizam</strong> — temelj strukture mnogih djela.
      </div>
    </div>

    <!-- DISCERE -->
    <div class="discere-banner" style="margin-top:18px" onclick="window.location.href='#discere'">
      <div class="discere-ico">📐</div>
      <div class="discere-txt">
        <div class="discere-ttl">Discere · Rhythm analyzer</div>
        <div class="discere-sub">AI detektira ritmičke figure (anafora, gradacija, inverzija) i mjeri njihov učinak · <strong>Pro plan</strong></div>
      </div>
      <div class="discere-arrow">→</div>
    </div>

    <div class="nav-row">
      <span class="nb-btn" onclick="sw(2)">← Figure riječi</span>
      <span class="nb-btn primary" onclick="sw(4)">🔊 Figure zvuka →</span>
    </div>

  </div><!-- /l3 -->

  <div class="layer" id="l4" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-pa">8 figura zvuka</span>
      <span class="pill p-br">fonetska razina</span>
      <span class="pill p-go">temelj poezije</span>
      <span class="pill p-t">5% ispita</span>
    </div>

    <div class="box-int" style="margin-bottom:20px">
      <div class="box-int-lbl">🔊 Figure zvuka — fonetska razina</div>
      <div class="box-int-txt"><strong>Figure zvuka</strong> djeluju na <em>zvučnom sloju</em> jezika — kroz ponavljanje suglasnika, samoglasnika, imitaciju zvukova. Najvažnija kategorija u <strong>poeziji</strong> (H12 Marulić, H14 Mažuranić) i najbolje vidljiva u naglasu prilikom čitanja naglas. <em>Pročitaj stih naglas</em> — to je najbolji test za figuru zvuka.</div>
    </div>

    <div class="scene-list">

      <!-- 01 ALITERACIJA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">01</div>
          <div class="scene-ttl">Aliteracija <span style="color:var(--gold);font-size:11px;margin-left:8px">★ VRLO ČESTA</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> Ponavljanje istog <strong>suglasnika</strong> (konsonanta) na početku ili u korijenu uzastopnih riječi. Posebno upečatljiva kada se ponavljaju isti glasovi u nizu.<br><br>
            <b>Primjeri iz hrv. i svjetske književnosti:</b><br>
            • <em>„Pod prozorom procvala je ruža"</em> — aliteracija „p".<br>
            • <em>„Tiho, tiho tekla, tek je tekla Trebišnjica"</em> — aliteracija „t" (+ asonanca „e").<br>
            • <em>„Sveti Savo slavu slavi"</em> — aliteracija „s".<br>
            • <em>„Bara buči, bumba buba"</em> — aliteracija „b".<br>
            • <em>„Kiša kaplje s krova"</em> — aliteracija „k".<br>
            • Mažuranić, Smail-aga (<strong>H14</strong>) — česta u deseteračkom stihu.<br>
            • <em>„Vjetar vije vedrom vrhu"</em> — aliteracija „v", narodni stih.<br><br>
            <b>Kako prepoznati:</b> Pročitaj naglas → traži <em>isti suglasnik</em> koji se ponavlja. Lako je uočiti po „udarnom" zvuku.<br><br>
            <b>Česta zabuna:</b> <strong>Aliteracija ≠ asonanca.</strong> Aliteracija = <em>suglasnici</em>. Asonanca = <em>samoglasnici</em>. Broji slova: konsonant → aliteracija.<br><br>
            <b>Funkcija:</b> Ritam, muzikalnost, atmosfera (mnogi suglasnici „s" zvuče meko i poetski, mnogi „r" tvrdo i dramatično), mnemotehnika.<br><br>
            <b>🎯 Pro tip:</b> Suglasnik koji se ponavlja <em>sugerira emociju</em> — „s" često nježno/tajanstveno, „r" agresivno/snažno, „k" oštro, „m" meko. Ne nabrajaj samo „ima aliteracije" — objasni <em>kakav zvučni dojam</em> stvara.
          </div>
        </div>
      </div>

      <!-- 02 ASONANCA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">02</div>
          <div class="scene-ttl">Asonanca <span style="color:var(--gold);font-size:11px;margin-left:8px">★ ČESTA</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> Ponavljanje istog <strong>samoglasnika</strong> (vokala) u uzastopnim riječima ili stihovima. Stvara zvučni sklad između tih riječi.<br><br>
            <b>Primjeri:</b><br>
            • <em>„Oko lomnog mora"</em> — asonanca „o".<br>
            • <em>„Padala je kiša na planine"</em> — asonanca „a".<br>
            • <em>„Tužne ruke kućne"</em> — asonanca „u".<br>
            • <em>„Stubište svijetlog sjaja"</em> — asonanca „i".<br>
            • <em>„More plamti mednim zvukom"</em> — asonanca „m+e+u" (višestruka).<br>
            • Hrvatska moderna lirika (Ujević, Tadijanović) — često koristi asonancu.<br><br>
            <b>Kako prepoznati:</b> Pročitaj naglas → traži <em>isti samoglasnik</em> („a", „e", „i", „o", „u") koji dominira u stihu.<br><br>
            <b>Česta zabuna:</b> Asonanca ≠ rima. <strong>Rima</strong> se odnosi na <em>kraj stihova</em>, asonanca može biti bilo gdje u stihu. Rima se podudara u suglasnicima I samoglasnicima, asonanca samo u samoglasnicima.<br><br>
            <b>Funkcija:</b> Zvučna harmonija, nježnost, melodičnost, unutarnja zvučna veza riječi. Posebno u lirici.
          </div>
        </div>
      </div>

      <!-- 03 ONOMATOPEJA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">03</div>
          <div class="scene-ttl">Onomatopeja <span style="color:var(--gold);font-size:11px;margin-left:8px">★ ČESTA</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> Riječi koje <strong>oponašaju zvukove</strong> iz stvarnosti. Zvuk riječi = zvuk koji riječ opisuje.<br><br>
            <b>Primjeri:</b><br>
            • <em>„Cvrkut"</em> — zvuk ptica.<br>
            • <em>„Šuštanje"</em> — zvuk lišća.<br>
            • <em>„Zujanje"</em> — zvuk pčela.<br>
            • <em>„Prasak"</em> — iznenadni zvuk.<br>
            • <em>„Krckanje"</em> — zvuk loma.<br>
            • <em>„Kukurijeka"</em> — zvuk pijetla.<br>
            • <em>„Mijaukanje"</em> — zvuk mačke.<br>
            • <em>„Tup! Tup!"</em> — zvuk koraka.<br>
            • <em>„Cvrkut ptica u vrtu"</em> — Krleža, Glembajevi (<strong>H16</strong>). Sama onomatopejska riječ „cvrkut" je finale drame.<br>
            • Poezija A. B. Šimića — često koristi zvučne riječi.<br><br>
            <b>Tipovi onomatopeje:</b><br>
            • <strong>Leksička</strong> — riječ sama oponaša zvuk („cvrkut", „bum").<br>
            • <strong>Sintaktička</strong> — ritam rečenice oponaša zvuk (npr. stih koji „trči" sa brzim glasovima).<br><br>
            <b>Kako prepoznati:</b> Traži riječi koje <em>kada ih izgovoriš, zvuče kao ono što opisuju</em>.<br><br>
            <b>Funkcija:</b> Neposredna zvučna evokacija, senzualni dojam, oživljavanje scene zvukom.
          </div>
        </div>
      </div>

      <!-- 04 RIMA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">04</div>
          <div class="scene-ttl">Rima</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Zvučno podudaranje</strong> na krajevima dvaju ili više stihova. Podudaraju se vokali I konsonanti počevši od zadnjeg naglašenog sloga.<br><br>
            <b>Tipovi rime po poziciji:</b><br>
            • <strong>Parna (AABB)</strong> — prvi i drugi, treći i četvrti stih („cvijet/svijet", „cvijet/cvijet")<br>
            • <strong>Ukrštena (ABAB)</strong> — prvi i treći, drugi i četvrti<br>
            • <strong>Obgrljena (ABBA)</strong> — prvi i četvrti, drugi i treći<br>
            • <strong>Slobodni stih</strong> — bez rime (modernisti, Ujević, Šimić)<br><br>
            <b>Tipovi rime po podudarnosti:</b><br>
            • <strong>Čista</strong> — potpuno podudaranje zvuka („krila/stila")<br>
            • <strong>Nepotpuna / asonancijska</strong> — samo samoglasnici („zemlja/vrela")<br>
            • <strong>Muška</strong> — naglasak na zadnjem slogu („nad/rat")<br>
            • <strong>Ženska</strong> — naglasak na pretposljednjem („cvijet/svijet")<br><br>
            <b>Primjeri:</b><br>
            • Marulićeva Judita (<strong>H12</strong>) — dvanaesterac s dvostrukim srokom (rima)<br>
            • Mažuranićev deseterac (<strong>H14</strong>) — bez rime, ali s cezurom (narodni stih)<br>
            • Kranjčević, Matoš, Ujević — razne rimske sheme<br>
            • Moderni pjesnici (A. B. Šimić) — često bez rime<br><br>
            <b>Kako prepoznati:</b> Pogledaj <em>krajeve stihova</em>. Ako se podudaraju po zvuku → rima.<br><br>
            <b>Funkcija:</b> Ritmička organizacija, mnemotehnika, muzikalnost, struktura pjesme.
          </div>
        </div>
      </div>

      <!-- 05 OPKORAČENJE -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">05</div>
          <div class="scene-ttl">Opkoračenje (enjambement)</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Sintaktička cjelina</strong> (rečenica ili sintagma) <strong>prelazi iz jednog stiha u sljedeći</strong>. Logička pauza ne poklapa se s krajem stiha.<br><br>
            <b>Primjer:</b><br>
            <em>„I u dubinu / mora pada zrak jeseni plavi"</em><br>
            <span style="color:var(--t2);font-size:12px">— rečenica se lomi na kraju prvog stiha, nastavlja na drugom</span><br><br>
            <em>„Leone je cijelu / noć proveo razmišljajući"</em><br>
            <span style="color:var(--t2);font-size:12px">— opkoračenje „cijelu / noć"</span><br><br>
            <b>Tipovi opkoračenja:</b><br>
            • <strong>Meko</strong> — pauza je blaga („I ode / tiho noć")<br>
            • <strong>Oštro</strong> — prekida glagol ili sintagmu nasilno („Tiho on / umire")<br><br>
            <b>U kojim djelima:</b><br>
            • <strong>Moderna poezija</strong> (Matoš, Ujević, Šimić) — česta figura<br>
            • <strong>Krleža</strong> (poezija <strong>Balade Petrice Kerempuha</strong>) — ekspresivno opkoračenje<br>
            • <strong>Klasična lirika</strong> — Petrarca, Shakespeare<br><br>
            <b>Kako prepoznati:</b> Pogledaj rečeničnu strukturu — <em>završava li rečenica na kraju stiha</em> ili <em>prelazi u sljedeći</em>? Ako prelazi → opkoračenje.<br><br>
            <b>Česta zabuna:</b> Opkoračenje ≠ slobodni stih. Slobodni stih je odsutnost metra; opkoračenje je igra između metra i sintakse.<br><br>
            <b>Funkcija:</b> Napetost, tempo, modernistička ekspresivnost, ritam koji odudara od metra.
          </div>
        </div>
      </div>

      <!-- 06 CEZURA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">06</div>
          <div class="scene-ttl">Cezura (stanka)</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Fiksna stanka (pauza)</strong> unutar stiha. Pozicija cezure je kanonizirana (uvijek na istoj poziciji) u zavisnosti od tipa stiha.<br><br>
            <b>Tipovi cezure po stihovima:</b><br>
            • <strong>Deseterac (4+6)</strong> — cezura nakon 4. sloga (narodni stih). Primjer: <em>„Oj, Hrvatska / domovina moja"</em><br>
            • <strong>Dvanaesterac (6+6)</strong> — cezura nakon 6. sloga (Marulićeva Judita, <strong>H12</strong>)<br>
            • <strong>Aleksandrinac (6+6)</strong> — francuski klasični stih<br>
            • <strong>Osmerac (4+4)</strong> — cezura u sredini<br><br>
            <b>Primjeri:</b><br>
            • Mažuranić, Smrt Smail-age (<strong>H14</strong>) — deseterac s cezurom nakon 4. sloga (narodni stih)<br>
            • Marulić, Judita (<strong>H12</strong>) — dvostruko rimovani dvanaesterac s cezurom nakon 6. sloga<br>
            • Gundulić, Dubravka (<strong>H13</strong>) — osmerac s cezurom u sredini<br><br>
            <b>Kako prepoznati:</b> Pročitaj stih naglas i primijeti <em>gdje prirodno praviš pauzu</em>. U narodnom desetercu uvijek je nakon 4. sloga.<br><br>
            <b>Česta zabuna:</b> Cezura je <em>unutar stiha</em>. Kraj stiha nije cezura, to je metrika.<br><br>
            <b>Funkcija:</b> Ritam, disanje, svečanost (posebno dvanaesterac), narodnost (deseterac).
          </div>
        </div>
      </div>

      <!-- 07 EUFONIJA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">07</div>
          <div class="scene-ttl">Eufonija (blagozvučnost)</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Prijatno, harmonično zvučanje</strong> teksta zbog pažljivog odabira glasova. Riječi se lako izgovaraju, zvuk je meko i ugodan.<br><br>
            <b>Primjeri:</b><br>
            • <em>„Mili mjesec meko sjaji"</em> — ponavljanje nazalnog „m" + otvoreni samoglasnici.<br>
            • <em>„Lako leti lađa lena lepoga labuda"</em> — ljusavo „l" + otvoreno „a".<br>
            • Gundulić, Dubravka (<strong>H13</strong>) — barokna eufonija pastoralnih stihova.<br>
            • Lirika hrv. moderne (Matoš) — izrazita eufonija.<br>
            • Marulićeva Judita (<strong>H12</strong>) — klasična eufonija humanizma.<br><br>
            <b>Obilježja eufonije:</b><br>
            • Ponavljanje <em>mekih</em> suglasnika (l, m, n, j)<br>
            • Mnogo <em>otvorenih</em> samoglasnika (a, e, o, u)<br>
            • Odsutnost grubih konsonantskih skupina<br>
            • Laka melodija, prirodan ritam<br><br>
            <b>Kako prepoznati:</b> Tekst <em>„pjeva"</em>. Prirodno „teče" kada se čita naglas. Nema „trzanja".<br><br>
            <b>Česta zabuna:</b> Eufonija ≠ jedna konkretna figura (kao aliteracija). Eufonija je <em>opći efekt</em> harmoničnog zvuka.<br><br>
            <b>Funkcija:</b> Estetska ljepota, melodija, osjećaj mira/harmonije, lirski ton.
          </div>
        </div>
      </div>

      <!-- 08 KAKOFONIJA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">08</div>
          <div class="scene-ttl">Kakofonija (zlozvučnost)</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Neugodno, grubo zvučanje</strong> teksta zbog koncentracije tvrdih suglasnika ili neskladnih spojeva. Suprotno od eufonije.<br><br>
            <b>Primjeri:</b><br>
            • <em>„Škripi, strgano, trgnuto"</em> — mnoštvo oštrih „š", „t", „r", „g".<br>
            • <em>„Krhke krše kroz krčag"</em> — kombinacija suglasnika koja otežava izgovor.<br>
            • Mažuranić, Smail-aga (<strong>H14</strong>) — kakofonija pri opisu Turskog nasilja (<em>„Pljusak krvi, šum sjekira..."</em>).<br>
            • A. B. Šimić — ekspresionistička kakofonija.<br>
            • Suvremena haiku poezija — ponekad koristi kakofoniju za efekt.<br><br>
            <b>Obilježja kakofonije:</b><br>
            • Mnogo <em>tvrdih</em> suglasnika (k, g, š, ž, č, ć, t, p)<br>
            • Suglasničke <em>skupine</em> koje se teško izgovaraju<br>
            • Neusklađeni vokalski prijelazi<br>
            • Stvara dojam neudobnosti, napetosti, grubosti<br><br>
            <b>Kako prepoznati:</b> Tekst je <em>teško izgovoriti naglas</em>. „Sastavlja se o jezik." Zvuk je grub i oštar.<br><br>
            <b>Česta zabuna:</b> Kakofonija ≠ loše pisanje. To je <em>namjerni umjetnički izbor</em> za dramski učinak.<br><br>
            <b>Funkcija:</b> Dramska napetost, prikaz grubosti / sukoba / nasilja, ekspresionistička intenzivnost, rat/tragedija.
          </div>
        </div>
      </div>

    </div><!-- /scene-list -->

    <!-- SINTEZA -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">★ Sinteza — 3 pora figura zvuka</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Suprotstavljene figure</th><th>Razlika</th><th>Kako razlučiti</th></tr></thead>
        <tbody>
          <tr><td><strong>Aliteracija ↔ Asonanca</strong></td><td>Aliteracija = suglasnici. Asonanca = samoglasnici.</td><td>Broji slova koja se ponavljaju — jesu li konsonanti ili vokali?</td></tr>
          <tr><td><strong>Opkoračenje ↔ Cezura</strong></td><td>Opkoračenje = prelaz između stihova. Cezura = pauza unutar stiha.</td><td>Gdje je pauza — između stihova ili unutar jednog stiha?</td></tr>
          <tr><td><strong>Eufonija ↔ Kakofonija</strong></td><td>Eufonija = blago, ugodno zvučanje. Kakofonija = grubo, neugodno.</td><td>Pročitaj naglas — je li lako ili teško?</td></tr>
        </tbody>
      </table>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">🎯 Top 3 figure zvuka za maturu</div>
      <div class="box-key-txt">
        <strong>1. Aliteracija</strong> — svugdje u poeziji, laka za prepoznati.<br>
        <strong>2. Onomatopeja</strong> — izravno vidljiva, pitanja je često.<br>
        <strong>3. Rima</strong> — temeljna organizacija stiha; česta pitanja o shemi rime (AABB/ABAB/ABBA).
      </div>
    </div>

    <div class="box-int" style="margin-top:16px">
      <div class="box-int-lbl">🎵 Pro savjet za analizu figura zvuka</div>
      <div class="box-int-txt">
        <strong>Uvijek pročitaj ulomak naglas prije analize.</strong> Ušima čuješ što očima ne vidiš. Mnogi učenici „nauče" aliteraciju kao suhu definiciju, ali <em>ne čuju</em> je u stihu. Za dobru analizu figura zvuka treba:<br>
        <strong>1.</strong> Identificirati figuru (npr. aliteracija „s")<br>
        <strong>2.</strong> Opisati <em>akustički dojam</em> („s" zvuči šuškavo, nježno)<br>
        <strong>3.</strong> Povezati s temom/atmosferom („u stihu o noći, šuškavo „s" stvara tajanstvenu atmosferu")
      </div>
    </div>

    <!-- DISCERE -->
    <div class="discere-banner" style="margin-top:18px" onclick="window.location.href='#discere'">
      <div class="discere-ico">🔊</div>
      <div class="discere-txt">
        <div class="discere-ttl">Discere · Phonetic scanner + audio</div>
        <div class="discere-sub">AI analizira zvučne figure + audio čitanje stihova · <strong>Pro plan</strong></div>
      </div>
      <div class="discere-arrow">→</div>
    </div>

    <div class="nav-row">
      <span class="nb-btn" onclick="sw(3)">← Figure rečenice</span>
      <span class="nb-btn primary" onclick="sw(5)">⚡ Scanner+Drill →</span>
    </div>

  </div><!-- /l4 -->

  <div class="layer" id="l5" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">20 flashcards</span>
      <span class="pill p-go">3 razine matching</span>
      <span class="pill p-te">Demo slobodan</span>
      <span class="pill p-r">Puno PRO</span>
    </div>

        <!-- SCANNER — AI detekcija figura u ulomku -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">🔍 Scanner — AI detekcija figura u ulomku</div><div class="sec-line"></div></div>

    <div class="box-int" style="margin-bottom:12px">
      <div class="box-int-lbl">🎯 Kako koristiti scanner</div>
      <div class="box-int-txt">Zalijepi ulomak iz poezije ili proze. AI algoritam detektira <strong>15+ figura</strong> u 4 kategorije (tropi, figure riječi, rečenice, zvuka). Radi po obrascima riječi — <em>uvijek provjeri ručno točnost</em>, posebno za ironiju i paradoks koji zahtijevaju kontekstualno razumijevanje.</div>
    </div>

    <textarea id="scanner-in" oninput="scannerCount()" placeholder="Zalijepi ulomak iz poezije ili proze — npr. iz H12-H16 ili drugog djela. Scanner će detektirati stilske figure." style="width:100%;min-height:160px;padding:14px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);color:var(--txt);font-family:var(--serif);font-size:14px;resize:vertical;line-height:1.6"></textarea>

    <div style="display:flex;gap:12px;align-items:center;margin-top:10px;flex-wrap:wrap">
      <button class="fcb primary" onclick="scannerGo()">▶ Skeniraj figure</button>
      <button class="fcb" onclick="scannerClear()">↩ Obriši</button>
      <button class="fcb" onclick="scannerDemo()" title="Učitaj uzorak">📋 Demo ulomak</button>
      <div style="font-family:var(--mono);font-size:11px;color:var(--t2);margin-left:auto">
        <span id="scanner-chars">0</span> znakova · <span id="scanner-words">0</span> riječi
      </div>
    </div>

    <div id="scanner-out"></div>

    <div class="discere-banner" style="margin-top:20px" onclick="window.location.href='#discere'">
      <div class="discere-ico">🔍</div>
      <div class="discere-txt">
        <div class="discere-ttl">Discere · AI Figure Detector Pro</div>
        <div class="discere-sub">Napredni detektor s kontekstualnim razumijevanjem (ironija, paradoks) + funkcijske interpretacije · <strong>Pro plan</strong></div>
      </div>
      <div class="discere-arrow">→</div>
    </div>

    <!-- FLASHCARDS — demo funkcionalan -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">Flashcards — pojam / definicija · Demo (20 karata)</div><div class="sec-line"></div></div>

    <div class="fc-cat-label">H17 · STILSKE FIGURE — Leksikon</div>
    <div class="fc-wrap">
      <div class="fc-inner" id="fc-card-dyn" onclick="fcFlip()">
        <div class="fc-front">
          <div class="fc-label">FIGURA · klikni za definiciju</div>
          <div class="fc-term">Metafora</div>
          <div class="fc-cat">trop · klikni za definiciju</div>
        </div>
        <div class="fc-back">
          <div class="fc-label">DEFINICIJA</div>
          <div class="fc-def">Prijenos značenja na temelju sličnosti. Najvažnija figura u književnosti. Primjer: „More plače" (more kao biće koje osjeća) ili „Borim se protiv Glembaya u sebi" (Krleža, H16).</div>
          <div class="fc-cat">trop</div>
        </div>
      </div>
    </div>
    <div class="fc-nav">
      <button class="fc-btn" id="fc-prev-dyn" onclick="fcNav(-1)" disabled>← Prethodni</button>
      <span class="fc-counter" id="fc-counter-dyn">1 / 20</span>
      <button class="fc-btn" id="fc-next-dyn" onclick="fcNav(1)">Sljedeći →</button>
    </div>

    <div class="box-warn" style="margin-top:18px">
      <div class="box-warn-lbl">🔒 PRO — Napredni Drill</div>
      <div class="box-warn-txt">Demo prikazuje prvih 20 karata. <strong>Standard i Pro plan</strong> otključavaju: sve karte + kategorizaciju po temi + spaced repetition algoritam + statistiku.</div>
    </div>

    <!-- MATCHING GAME — potpuno funkcionalan -->
    <div class="sec-hdr" style="margin-top:28px"><div class="sec-line"></div><div class="sec-badge">Matching game — spoji pojam s definicijom · 3 razine</div><div class="sec-line"></div></div>

    <div id="mg-dynamic"></div>

    <div class="box-signal" style="margin-top:16px">
      <div class="box-signal-lbl">💡 Matching tip</div>
      <div class="box-signal-txt">Počni s <strong>Lagano (4 para)</strong> za provjeru osnova, zatim napreduj na Teško (8 parova). Svako uspješno sparivanje gradi memorijsku vezu pojam–definicija.</div>
    </div>

    <div class="nav-row" style="margin-top:20px">
      <span class="nb-btn" onclick="sw(4)">← Figure zvuka</span>
      <span class="nb-btn primary" onclick="sw(6)">🧠 Kviz →</span>
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

    <div class="nav-row" style="margin-top:20px">
      <span class="nb-btn" onclick="sw(5)">← Scanner+Drill</span>
      <span class="nb-btn primary" onclick="sw(7)">📄 Cheat sheet →</span>
    </div>
  </div>

  <!-- ══════════════════════════════════════
      TAB 7 · CHEAT SHEET
  ══════════════════════════════════════ -->
  <div class="layer" id="l7" role="tabpanel" tabindex="0">
    <div class="tags no-print">
      <span class="pill p-pa">📄 Cheat sheet</span>
      <span class="pill p-br">45 figura</span>
      <span class="pill p-go">A4 printabilan</span>
      <span class="pill p-t">Noć prije ispita</span>
    </div>

    <!-- INTRO + PRINT CTA (not printed) -->
    <div class="box-int no-print" style="margin-bottom:20px">
      <div class="box-int-lbl">📄 Printabilni cheat sheet — sve figure na jednoj stranici</div>
      <div class="box-int-txt">
        <strong>Kako koristiti:</strong><br>
        <strong>1.</strong> Klikni <em>🖨 Printaj cheat sheet</em><br>
        <strong>2.</strong> U dijalogu odaberi: <em>A4 · portrait · bez zaglavlja/podnožja</em> (ako postavke to dopuštaju)<br>
        <strong>3.</strong> Isprint na jednoj A4 stranici (obostrano ako je potrebno)<br>
        <strong>4.</strong> Nosi na ispit kao referencu (ako je dozvoljeno) ili nauči na pamet<br><br>
        <em>Printabilni sadržaj prikazan je ispod — na tiskanoj verziji će bez sidebar-a, navigacije i ove upute.</em>
      </div>
    </div>

    <div class="no-print" style="display:flex;gap:10px;margin-bottom:20px;flex-wrap:wrap">
      <button class="fcb primary" onclick="window.print()" style="font-size:14px">🖨 Printaj cheat sheet</button>
      <button class="fcb" onclick="window.scrollTo({top:document.getElementById('cheat-sheet').offsetTop-20,behavior:'smooth'})">⬇ Skoči na sadržaj</button>
    </div>

    <!-- =====================================================
         CHEAT SHEET — printabilni sadržaj
    ====================================================== -->
    <div id="cheat-sheet" class="cheat-sheet">
      <div class="cs-header">
        <div class="cs-title">MATURIRAJ.HR · H17 · Stilske figure</div>
        <div class="cs-subtitle">Cheat sheet za maturu — 45 figura u 4 kategorije</div>
      </div>

      <!-- CATEGORY 1: TROPI -->
      <div class="cs-category">
        <div class="cs-cat-title">🎨 TROPI — figure značenja (15)</div>
        <div class="cs-figures">
          <div class="cs-fig"><b>Metafora</b> — prijenos značenja po sličnosti. <em>„Borim se protiv Glembaya u sebi" (H16).</em></div>
          <div class="cs-fig"><b>Metonimija</b> — prijenos po stvarnoj povezanosti. <em>„Popio je čašu" (sadržaj).</em></div>
          <div class="cs-fig"><b>Sinekdoha</b> — dio za cjelinu ili obrnuto. <em>„Tisuću duša se skupilo."</em></div>
          <div class="cs-fig"><b>Personifikacija</b> — ljudska osobina pripisana neživom. <em>„More plače, nebo šuti."</em></div>
          <div class="cs-fig"><b>Alegorija</b> — cijelo djelo s prenesenim značenjem. <em>Dubravka = Dubrovnik (H13).</em></div>
          <div class="cs-fig"><b>Simbol</b> — predmet s apstraktnim značenjem. <em>Portreti u Glembajevima = prokletstvo (H16).</em></div>
          <div class="cs-fig"><b>Hiperbola</b> — namjerno pretjerivanje. <em>„Tisuću Turaka" (H14).</em></div>
          <div class="cs-fig"><b>Litota</b> — namjerno umanjivanje. <em>„Nije baš najpametniji" (= glup).</em></div>
          <div class="cs-fig"><b>Ironija</b> — kaže se jedno, misli drugo. <em>„Cvrkut ptica u vrtu" — finale Glembajevih (H16).</em></div>
          <div class="cs-fig"><b>Oksimoron</b> — dvije suprotne riječi. <em>„Hladno sunce", „slatka tuga".</em></div>
          <div class="cs-fig"><b>Paradoks</b> — cijela izjava kontradiktorna s istinom. <em>„Boj se onog tko je vikô plakat" (H14).</em></div>
          <div class="cs-fig"><b>Eufemizam</b> — ublaženi izraz neugodnog. <em>„Preminuo je" (= umro).</em></div>
          <div class="cs-fig"><b>Usporedba</b> — „kao/poput/nalik". <em>„Angelika stoji kao lutka" (H16).</em></div>
          <div class="cs-fig"><b>Antonomazija</b> — ime zamijenjeno opisom ili obrnuto. <em>„Don Juan" = zavodnik.</em></div>
          <div class="cs-fig"><b>Sarkazam</b> — agresivna, pogrdna ironija. <em>„Bravo, genije!" pred greškom.</em></div>
        </div>
      </div>

      <!-- CATEGORY 2: FIGURE RIJEČI -->
      <div class="cs-category">
        <div class="cs-cat-title">📝 FIGURE RIJEČI — leksička razina (10)</div>
        <div class="cs-figures">
          <div class="cs-fig"><b>Epitet</b> — ukrasni pridjev uz imenicu. <em>„Bujna zora", „junačka srca".</em></div>
          <div class="cs-fig"><b>Stalni epitet</b> — konvencionalno vezan uz imenicu. <em>„Brzonogi Ahilej", „bijeli dvori".</em></div>
          <div class="cs-fig"><b>Deminutiv</b> — umanjenica (-ić, -ica). <em>„Sunašce, kućica, srdašce".</em></div>
          <div class="cs-fig"><b>Augmentativ</b> — uvećanica (-ina, -urda). <em>„Kućerina, babetina".</em></div>
          <div class="cs-fig"><b>Slavenska antiteza</b> — troslojna: pitanje → lažni odg. → pravi. <em>Hasanaginica (nar. balada).</em></div>
          <div class="cs-fig"><b>Apostrofa</b> — izravno oslovljavanje odsutnog. <em>„O Dubravko!" (H13), „Ne lomi, pobro!" (H14).</em></div>
          <div class="cs-fig"><b>Retoričko pitanje</b> — pitanje bez očekivanog odgovora. <em>„Zar je ovo moguće?"</em></div>
          <div class="cs-fig"><b>Uzvik</b> — emocionalni izraz s uskličnikom. <em>„O majko!", „Aferim!"</em></div>
          <div class="cs-fig"><b>Kontrast / antiteza</b> — suprotstavljanje. <em>Privid ↔ istina — osa Glembajevih (H16).</em></div>
          <div class="cs-fig"><b>Etimološka figura</b> — ponavljanje korijena. <em>„San snivati", „boj bojevati".</em></div>
        </div>
      </div>

      <!-- CATEGORY 3: FIGURE REČENICE -->
      <div class="cs-category">
        <div class="cs-cat-title">📐 FIGURE REČENICE — sintaktička razina (12)</div>
        <div class="cs-figures">
          <div class="cs-fig"><b>Inverzija</b> — obrnut red riječi. <em>„Lijepa si, Hrvatska, moja!"</em></div>
          <div class="cs-fig"><b>Paralelizam</b> — ista struktura kroz rečenice. <em>„Sunce sjaji, srce pjeva, duh se diže".</em></div>
          <div class="cs-fig"><b>Anafora</b> — ponavljanje na početku stihova. <em>„Tebe Boga hvalimo, Tebe Gospoda..."</em></div>
          <div class="cs-fig"><b>Epifora</b> — ponavljanje na kraju stihova. <em>„...je, ...je, ...je."</em></div>
          <div class="cs-fig"><b>Simploka</b> — anafora + epifora. <em>„Mir vam svima, mir."</em></div>
          <div class="cs-fig"><b>Gradacija</b> — postupno pojačavanje. <em>„Došao, vidio, pobijedio" (Cezar).</em></div>
          <div class="cs-fig"><b>Klimaks</b> — uzlazna gradacija. <em>„Ljubim — volim — obožavam."</em></div>
          <div class="cs-fig"><b>Antiklimaks</b> — silazna gradacija. <em>„Vječnost, život, minuta, sekunda."</em></div>
          <div class="cs-fig"><b>Elipsa</b> — izostavljanje dijela rečenice. <em>„Ja u grad, ti kući" (nema glagola).</em></div>
          <div class="cs-fig"><b>Asindeton</b> — bez veznika. <em>„Gol, bos, gladan, umoran."</em></div>
          <div class="cs-fig"><b>Polisindeton</b> — ponovljeni veznik. <em>„I sunce, i mjesec, i zvijezde."</em></div>
          <div class="cs-fig"><b>Retardacija</b> — namjerno usporavanje. <em>Krležine didaskalije (H16).</em></div>
        </div>
      </div>

      <!-- CATEGORY 4: FIGURE ZVUKA -->
      <div class="cs-category">
        <div class="cs-cat-title">🔊 FIGURE ZVUKA — fonetska razina (8)</div>
        <div class="cs-figures">
          <div class="cs-fig"><b>Aliteracija</b> — ponavljanje suglasnika. <em>„Pod prozorom procvala ruža" (p).</em></div>
          <div class="cs-fig"><b>Asonanca</b> — ponavljanje samoglasnika. <em>„Oko lomnog mora" (o).</em></div>
          <div class="cs-fig"><b>Onomatopeja</b> — riječ oponaša zvuk. <em>„Cvrkut, šuštanje, bum."</em></div>
          <div class="cs-fig"><b>Rima</b> — podudaranje krajeva stihova. <em>AABB parna, ABAB ukrštena, ABBA obgrljena.</em></div>
          <div class="cs-fig"><b>Opkoračenje</b> — rečenica prelazi u sljedeći stih. <em>„I u dubinu / mora pada..."</em></div>
          <div class="cs-fig"><b>Cezura</b> — pauza unutar stiha. <em>Deseterac 4+6 (H14), dvanaesterac 6+6 (H12).</em></div>
          <div class="cs-fig"><b>Eufonija</b> — blagozvučnost. <em>„Mili mjesec meko sjaji" (m + otvoreni vokali).</em></div>
          <div class="cs-fig"><b>Kakofonija</b> — zlozvučnost. <em>„Škripi, strgano, trgnuto" (grubi suglasnici).</em></div>
        </div>
      </div>

      <!-- CS: TOP TIPS -->
      <div class="cs-tips">
        <div class="cs-tips-title">🎯 TOP TAKTIKE ZA ISPIT</div>
        <div class="cs-tips-body">
          <strong>1.</strong> Ne nabrajaj — interpretiraj 2-3 figure kvalitetno · <strong>2.</strong> Pročitaj naglas za zvučne figure · <strong>3.</strong> Razlikuj metaforu (sličnost) od metonimije (stvarna veza) · <strong>4.</strong> Aliteracija = suglasnici, Asonanca = samoglasnici · <strong>5.</strong> Anafora = početak, Epifora = kraj stiha · <strong>6.</strong> Paradoks = cijela rečenica, Oksimoron = dvije riječi.
        </div>
      </div>

      <!-- CS: FOOTER -->
      <div class="cs-footer">
        <span>Maturiraj.hr · H17 · Stilske figure · matura 2026</span>
        <span>Top 10 na NCVVO: metafora, personifikacija, epitet, usporedba, anafora, hiperbola, kontrast, ironija, aliteracija, gradacija</span>
      </div>
    </div>

    <!-- CSS za cheat-sheet + print -->
    <style>
      .cheat-sheet {
        background: var(--sur);
        color: var(--txt);
        border: 1px solid var(--bd);
        border-radius: var(--r2);
        padding: 20px;
        max-width: 100%;
        font-family: var(--fb, 'DM Sans', sans-serif);
      }
      .cs-header { text-align:center; padding-bottom:12px; border-bottom:2px solid var(--bd); margin-bottom:16px; }
      .cs-title { font-family: var(--fh, 'Fraunces', serif); font-size: 22px; font-weight:700; color:var(--txt); }
      .cs-subtitle { font-size:13px; color:var(--muted); margin-top:4px; }
      .cs-category { margin-bottom:18px; }
      .cs-cat-title { font-weight:700; font-size:14px; padding:6px 10px; background:var(--dim-br); border-radius:var(--r1); margin-bottom:10px; color:var(--txt); }
      .cs-figures { display:grid; grid-template-columns:1fr 1fr; gap:6px 14px; }
      .cs-fig { font-size:11px; line-height:1.45; padding:4px 0; border-bottom:1px dotted var(--bdm); }
      .cs-fig b { color:var(--gold); font-weight:700; }
      .cs-fig em { color:var(--muted); font-style:italic; }
      .cs-tips { margin-top:14px; padding:10px; background:var(--dim-br); border-left:3px solid var(--gold); border-radius:var(--r1); }
      .cs-tips-title { font-weight:700; font-size:12px; margin-bottom:6px; color:var(--gold); }
      .cs-tips-body { font-size:10.5px; line-height:1.5; color:var(--txt); }
      .cs-footer { margin-top:14px; padding-top:10px; border-top:1px solid var(--bd); display:flex; justify-content:space-between; font-size:9px; color:var(--muted); gap:10px; flex-wrap:wrap; }

      @media print {
        body { background: white !important; color: black !important; font-size: 9pt; }
        .sidebar, .hero, .topbar, .tabs-menu, .nav-row, .box-int, .tags, .no-print, .discere-banner, footer { display: none !important; }
        .content-wrap, main, .layer { display: block !important; padding: 0 !important; margin: 0 !important; max-width: 100% !important; }
        .layer { opacity: 1 !important; transform:none !important; }
        .cheat-sheet { border: none !important; padding: 10mm !important; background: white !important; color: black !important; max-width: 210mm; }
        .cs-title { color: #000 !important; font-size: 18pt !important; }
        .cs-subtitle { color: #555 !important; font-size: 10pt !important; }
        .cs-cat-title { background: #f0f0f0 !important; color: #000 !important; font-size: 11pt !important; padding: 4pt 8pt !important; }
        .cs-figures { grid-template-columns: 1fr 1fr !important; gap: 2pt 8pt !important; }
        .cs-fig { font-size: 8.5pt !important; color: #000 !important; padding: 2pt 0 !important; border-bottom: 0.5pt dotted #999 !important; page-break-inside: avoid; }
        .cs-fig b { color: #000 !important; font-weight: 700 !important; }
        .cs-fig em { color: #555 !important; }
        .cs-tips { background: #f8f8f8 !important; border-left: 2pt solid #000 !important; font-size: 8pt !important; padding: 5pt !important; }
        .cs-tips-title { color: #000 !important; font-size: 9pt !important; }
        .cs-tips-body { color: #000 !important; font-size: 8pt !important; }
        .cs-footer { border-top: 0.5pt solid #000 !important; color: #555 !important; font-size: 7pt !important; }
        .cs-category { page-break-inside: avoid; }
        @page { size: A4 portrait; margin: 10mm 8mm; }
      }
      @media (max-width: 640px) {
        .cs-figures { grid-template-columns: 1fr !important; }
      }
    

/* ═══════════════════════════════════
   CROSS-CHAPTER NAVIGATION
═══════════════════════════════════ */
.chapter-nav-wrap{
  margin:48px auto 32px;
  max-width:920px;
  padding:0 20px;
}
.chapter-nav-hdr{
  text-align:center;
  margin-bottom:24px;
}
.chapter-nav-title{
  font-family:var(--display);
  font-size:20px;
  font-weight:700;
  color:var(--t1);
  margin-bottom:6px;
}
.chapter-nav-sub{
  font-family:var(--serif);
  font-size:13px;
  color:var(--t3);
  font-style:italic;
}
.chapter-nav-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:14px;
  margin-bottom:28px;
}
.chapter-nav-card{
  display:flex;
  align-items:center;
  gap:14px;
  padding:16px 18px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r2);
  text-decoration:none;
  color:inherit;
  transition:all .25s ease;
  cursor:pointer;
}
.chapter-nav-card:hover{
  border-color:var(--gold);
  background:linear-gradient(135deg, var(--ele), rgba(233,180,70,.06));
  transform:translateY(-2px);
  box-shadow:0 8px 24px rgba(0,0,0,.25);
}
.chapter-nav-prev{text-align:left}
.chapter-nav-next{text-align:right;flex-direction:row}
.chapter-nav-next .chapter-nav-meta{flex:1}
.chapter-nav-arrow{
  font-size:24px;
  color:var(--gold);
  font-weight:700;
  flex-shrink:0;
}
.chapter-nav-meta{
  flex:1;
  display:flex;
  flex-direction:column;
  gap:4px;
}
.chapter-nav-pill{
  font-family:var(--mono);
  font-size:9px;
  letter-spacing:1.5px;
  color:var(--t3);
  text-transform:uppercase;
  font-weight:700;
}
.chapter-nav-pill-next{color:var(--gold)}
.chapter-nav-name{
  font-family:var(--display);
  font-size:15px;
  font-weight:700;
  color:var(--t1);
}
.chapter-nav-desc{
  font-family:var(--serif);
  font-size:12px;
  color:var(--t2);
  font-style:italic;
}
.chapter-nav-related{
  padding:18px;
  background:rgba(255,255,255,.02);
  border:1px solid var(--bd);
  border-radius:var(--r2);
}
.chapter-nav-related-ttl{
  font-family:var(--mono);
  font-size:11px;
  letter-spacing:1.5px;
  color:var(--gold);
  margin-bottom:12px;
  text-transform:uppercase;
}
.chapter-nav-related-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
  gap:8px;
}
.chapter-nav-mini{
  display:flex;
  align-items:center;
  gap:10px;
  padding:10px 12px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r1);
  text-decoration:none;
  color:inherit;
  transition:all .2s ease;
  font-size:12.5px;
}
.chapter-nav-mini:hover{
  border-color:var(--gold);
  color:var(--gold);
}
.chapter-nav-mini-code{
  font-family:var(--mono);
  font-size:10px;
  letter-spacing:1px;
  color:var(--gold);
  font-weight:700;
  background:rgba(233,180,70,.1);
  padding:2px 6px;
  border-radius:4px;
}
.chapter-nav-mini-name{
  font-family:var(--serif);
  color:var(--t2);
}
@media (max-width:640px){
  .chapter-nav-grid{grid-template-columns:1fr}
  .chapter-nav-next{flex-direction:row}
}


/* TIER INDICATOR — Workspace badge */
.ws-tier-indicator {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: var(--ele, #1f1414);
  border: 1px solid var(--bd, #2c1f1f);
  border-radius: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.ws-tier-indicator.ws-tier-free {
  border-left: 3px solid var(--t3, #888);
}

.ws-tier-indicator.ws-tier-free.ws-tier-full {
  border-left: 3px solid var(--gold, #e9b446);
  background: linear-gradient(135deg, rgba(233,180,70,0.06), var(--ele, #1f1414));
}

.ws-tier-indicator.ws-tier-standard {
  border-left: 3px solid var(--blue, #4a90d9);
  background: linear-gradient(135deg, rgba(74,144,217,0.04), var(--ele, #1f1414));
}

.ws-tier-indicator.ws-tier-pro {
  border-left: 3px solid var(--gold, #e9b446);
  background: linear-gradient(135deg, rgba(233,180,70,0.06), var(--ele, #1f1414));
}

.ws-tier-indicator .ws-tier-icon {
  font-size: 18px;
  flex-shrink: 0;
}

.ws-tier-indicator .ws-tier-text {
  flex: 1;
  font-size: 13px;
  color: var(--t2, #c5b8aa);
  line-height: 1.4;
  font-family: var(--mono, monospace);
}

.ws-tier-indicator .ws-tier-text strong {
  color: var(--t1, #f4ede5);
}

.ws-tier-indicator .ws-tier-cta {
  background: var(--gold, #e9b446);
  color: #0F0605;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  font-family: var(--mono, monospace);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.8px;
  cursor: pointer;
  transition: all 0.15s ease;
  flex-shrink: 0;
}

.ws-tier-indicator .ws-tier-cta:hover {
  background: var(--gold-hover, #d4a13e);
  transform: translateY(-1px);
}

@media (max-width: 720px) {
  .ws-tier-indicator {
    padding: 10px 12px;
    gap: 8px;
  }
  .ws-tier-indicator .ws-tier-text {
    font-size: 12px;
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

/* ───────── PAYWALL TIERS ───────── */
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

/* ───────── SIDEBAR TIER BADGE ───────── */
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


/* CHEAT-CARD (auto-injected) */
.cheat-card{background:linear-gradient(135deg,rgba(233,180,70,0.04),var(--card,#1a1010));border:1px solid var(--gold,#e9b446);border-radius:14px;padding:18px 22px}
.cheat-hdr{margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid var(--bdm,#2c1f1f)}
.cheat-eye{font-family:var(--mono,monospace);font-size:10px;font-weight:800;color:var(--gold,#e9b446);letter-spacing:1.2px;margin-bottom:4px}
.cheat-ttl{font-family:var(--serif,'Fraunces',serif);font-size:16px;font-weight:700;color:var(--t1,#f4ede5)}
.cheat-grid{display:grid;grid-template-columns:1fr;gap:12px}
.cheat-col-wide{grid-column:1/-1}

  </style>

    <!-- DISCERE -->
    <div class="discere-banner no-print" style="margin-top:20px" onclick="window.location.href='#discere'">
      <div class="discere-ico">📄</div>
      <div class="discere-txt">
        <div class="discere-ttl">Discere · PDF cheat sheet + audio guide</div>
        <div class="discere-sub">Preuzmi pripremljen PDF + slušaj audio objašnjenja svih figura · <strong>Pro plan</strong></div>
      </div>
      <div class="discere-arrow">→</div>
    </div>

    <div class="nav-row no-print">
      <span class="nb-btn" onclick="sw(6)">← Kviz</span>
      <span class="nb-btn primary" onclick="window.print()">🖨 Printaj cheat sheet</span>
    </div>

  </div><!-- /l7 -->

  </div><!-- /content-wrap -->

  <!-- ═══════════════════════════════════
       CROSS-CHAPTER NAVIGATION
  ═══════════════════════════════════ -->
  <div class="chapter-nav-wrap">
    <div class="chapter-nav-hdr">
      <div class="chapter-nav-title">📚 Sljedeća poglavlja</div>
      <div class="chapter-nav-sub">Nastavi učiti — povezana poglavlja u Maturiraj knjižnici</div>
    </div>
    
    <div class="chapter-nav-grid">
      <a class="chapter-nav-card chapter-nav-prev" href="/skripte/hrv/h16">
        <div class="chapter-nav-arrow">←</div>
        <div class="chapter-nav-meta">
          <div class="chapter-nav-pill">PRETHODNO</div>
          <div class="chapter-nav-name">H16 · Krleža · Glembajevi</div>
          <div class="chapter-nav-desc">Moderna — 20. stoljeće</div>
        </div>
      </a>

      <a class="chapter-nav-card chapter-nav-next" href="/skripte/hrv/h18">
        <div class="chapter-nav-meta">
          <div class="chapter-nav-pill chapter-nav-pill-next">SLJEDEĆE</div>
          <div class="chapter-nav-name">H18 · Versifikacija</div>
          <div class="chapter-nav-desc">Stih, metar, rima u hrv. književnosti</div>
        </div>
        <div class="chapter-nav-arrow">→</div>
      </a>
</div>

    <div class="chapter-nav-related">
      <div class="chapter-nav-related-ttl">🔗 Povezana poglavlja</div>
      <div class="chapter-nav-related-grid">
        <a class="chapter-nav-mini" href="/skripte/hrv/h12">
          <span class="chapter-nav-mini-code">H12</span>
          <span class="chapter-nav-mini-name">Marulić · Judita</span>
        </a>
        <a class="chapter-nav-mini" href="/skripte/hrv/h13">
          <span class="chapter-nav-mini-code">H13</span>
          <span class="chapter-nav-mini-name">Gundulić · Dubravka</span>
        </a>
        <a class="chapter-nav-mini" href="/skripte/hrv/h16">
          <span class="chapter-nav-mini-code">H16</span>
          <span class="chapter-nav-mini-name">Krleža · Glembajevi</span>
        </a>
        <a class="chapter-nav-mini" href="/skripte/hrv/h18">
          <span class="chapter-nav-mini-code">H18</span>
          <span class="chapter-nav-mini-name">Versifikacija</span>
        </a>
      </div>
    </div>
  </div>



  <footer class="mod-foot" role="contentinfo">
    <div class="foot-line"><b>Maturiraj.hr</b> · Hrvatski · H17 Stilske figure</div>
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

const STYLES_CSS = SHARED_LANG_CSS;
const SCRIPTS_JS = `/* ══ SUPABASE CONFIG ══ */
var SUPABASE_URL = 'https://your-project.supabase.co';
var SUPABASE_ANON_KEY = 'your-anon-key-here';

var CURRENT_CHAPTER = {
  subject: 'hrvatski',
  code: 'h17',
  title: 'Stilske figure'
};
/* ══ COUNTDOWN — sljedeći maturalni rok ══
   Konfigurabilno: promijeni datum ovdje za različite sezone.
   Ljetni rok 2026: 8. lipnja 2026 (približno — NCVVO objavljuje točan datum)
═════════════════════════════════════════════ */
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

/* ══ SOCIAL PROOF ══
   Brojeve puni iz Supabase view-a u produkciji. Sad — placeholder "uskoro".
═════════════════════════════════════════════ */
var SOCIAL_PROOF = {
  active_learners: null,
  avg_rating: null,
  review_count: null,
  avg_improvement: null,
  is_placeholder: true
};

function renderSocialProof(targetId, variant){
  var el = document.getElementById(targetId);
  if(!el) return;
  variant = variant || 'full';

  if(SOCIAL_PROOF.is_placeholder){
    el.innerHTML = \`
      <div class="sp-item">🇭🇷 <b>Besplatno</b> za sve maturante</div>
      <div class="sp-divider"></div>
      <div class="sp-item">📚 Usklađeno s <b>NCVVO</b> katalogom</div>
      <div class="sp-divider"></div>
      <div class="sp-item urgency">⏰ Do mature <b>\${daysToMatura()}</b> dana</div>
    \`;
    return;
  }

  if(variant === 'compact'){
    el.innerHTML = \`
      <div class="sp-item">🔥 <b>\${SOCIAL_PROOF.active_learners}</b> uči trenutno</div>
      <div class="sp-divider"></div>
      <div class="sp-item urgency">⏰ <b>\${daysToMatura()}</b> dana do mature</div>
    \`;
  } else {
    el.innerHTML = \`
      <div class="sp-item">🔥 <b>\${SOCIAL_PROOF.active_learners}</b> maturanata uči</div>
      <div class="sp-divider"></div>
      <div class="sp-item">⭐ <b>\${SOCIAL_PROOF.avg_rating}/5</b> (\${SOCIAL_PROOF.review_count} recenzija)</div>
      <div class="sp-divider"></div>
      <div class="sp-item">📈 prosječno <b>\${SOCIAL_PROOF.avg_improvement}</b> nakon 2 mj</div>
      <div class="sp-divider"></div>
      <div class="sp-item urgency">⏰ <b>\${daysToMatura()}</b> dana do mature</div>
    \`;
  }
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
    p_tab_index: (function(){ try{ return JSON.parse(localStorage.getItem('mt.hrv.h17.tab') || '0') }catch(e){return 0} })(),
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
const CITATI=[]; /* Legacy H12 array - dead code, replaced by CIT_DATA2 */

const POJMOVI=[]; /* Legacy H12 array - dead code, replaced by POJM_DATA2 */

const KVIZ_Q=[
  {q:'„Borim se protiv Glembaya u sebi" (Leone, Krleža, H16) — koja figura dominira?',o:['Personifikacija','Hiperbola','Metafora','Usporedba'],t:2,e:'Metafora. Leone koristi prijenos značenja: „Glembay u sebi" = biološko/klasno nasljedstvo. Borba nije doslovna, ali razumijemo sliku unutarnjeg sukoba.'},
  {q:'„More plače, nebo šuti" — koja figura?',o:['Personifikacija','Alegorija','Usporedba','Metafora'],t:0,e:'Personifikacija — pripisivanje ljudskih osobina prirodi (more „plače", nebo „šuti"). Najčešća figura u lirskoj poeziji.'},
  {q:'Gundulićeva Dubravka (H13) kao cjelina prikazuje Dubrovnik kao djevojku-slobodu. To je primjer:',o:['Metafore','Usporedbe','Alegorije','Simbola'],t:2,e:'Alegorija — cijelo djelo ima preneseno značenje. Dubravka = Dubrovnik, pastirska idila = dubrovačka sloboda. Alegorija je šira od metafore (lokalna slika) ili simbola (pojedinačni predmet).'},
  {q:'„Tisuću Turaka" (Mažuranić, Smail-aga, H14) — koja figura?',o:['Ironija','Hiperbola','Metafora','Sinekdoha'],t:1,e:'Hiperbola — namjerno pretjerivanje brojem radi epskog dojma. Tipična figura narodne i junačke epike.'},
  {q:'„Boj se onog tko je vikô plakat" (Mažuranić, H14) — koja figura?',o:['Paradoks','Ironija','Hiperbola','Oksimoron'],t:0,e:'Paradoks — naizgled besmislena izjava koja otkriva dublju istinu. Onaj koji je plakao (slab) opasniji je od snažnog, jer razumije bol. Paradoks = cijela rečenica (razlika od oksimorona koji je dvije riječi).'},
  {q:'„Cvrkut ptica u vrtu" kao finale Krležinih Glembajevih (H16) — koja je figura?',o:['Metafora','Personifikacija','Onomatopeja','Situacijska ironija'],t:3,e:'Situacijska ironija. Priroda (ptice) ravnodušna prema tragediji koja se upravo dogodila u palači (dvije smrti). Kontrast životnog cvrkuta i ljudske katastrofe.'},
  {q:'„Angelika stoji kao lutka" (Krleža, Glembajevi, H16) — koja figura?',o:['Personifikacija','Usporedba','Epitet','Metafora'],t:1,e:'Usporedba — prisutnost riječice „kao" je ključna. Da Krleža napisao „Angelika je lutka", bila bi metafora. S „kao" → usporedba.'},
  {q:'„Popio je čašu" (misli se: sadržaj čaše) — koja figura?',o:['Hiperbola','Metonimija','Sinekdoha','Metafora'],t:1,e:'Metonimija — prijenos značenja na temelju stvarne (ne imaginarne) povezanosti. Čaša ↔ sadržaj čaše je stvarna veza u svijetu (posuda/sadržaj).'},
  {q:'„O Dubravko, slatka slobodo!" (Gundulić, H13) — koja figura?',o:['Metafora','Personifikacija','Apostrofa','Simbol'],t:2,e:'Apostrofa — izravno oslovljavanje apstraktnog pojma (slobode) kao da je osoba. Tipična barokna retorička figura. „O!" je signal apostrofe.'},
  {q:'U ulomku „bujna zora, junačka srca, zlatni Dubrovnik" dominira figura:',o:['Personifikacija','Epitet','Metafora','Simbol'],t:1,e:'Epitet — ukrasni pridjevi (bujna, junačka, zlatni) koji dodaju emocionalnu ili estetsku boju imenicama. Bez njih tekst bi bio razumljiv, ali bez poetskog učinka.'},
  {q:'„Privid ↔ Istina" je glavni tematski okvir Glembajevih (H16). Koja figura?',o:['Kontrast / antiteza','Oksimoron','Metafora','Paradoks'],t:0,e:'Kontrast (antiteza) — suprotstavljanje dvaju pojmova kao strukturna os djela. Krleža gradi cijelu dramu na ovoj opoziciji: bogatstvo/laž, ljepota/ubojstvo, čast/krađa.'},
  {q:'„Zar je ovo moguće?" u kontekstu gdje svi znaju odgovor — koja figura?',o:['Retoričko pitanje','Uzvik','Ironija','Apostrofa'],t:0,e:'Retoričko pitanje — pitanje koje ne očekuje odgovor (ili odgovor je očit). Izražava nevjericu, emociju, patetski stav. Česta u H14 Mažuraniću i H16 Krleži.'},
  {q:'Hasanaginica: „Što se bijeli u gori zelenoj? Al su snjegovi, al su labudovi? Niti su snjegovi, nit labudovi, nego šator age Hasan-age." Koja figura?',o:['Gradacija','Anafora','Paralelizam','Slavenska antiteza'],t:3,e:'Slavenska antiteza — specifična figura južnoslavenske narodne poezije. Troslojna struktura: (1) pitanje, (2) lažni odgovori, (3) pravi odgovor. Česta u nar. pjesmama i H14 Mažuraniću koji oponaša nar. stil.'},
  {q:'„Tebe Boga hvalimo, Tebe Gospoda ispovijedamo, Tebe vječni Oca časti" (Te Deum) — koja figura?',o:['Anafora','Simploka','Epifora','Paralelizam'],t:0,e:'Anafora — ponavljanje iste riječi „Tebe" na POČETKU uzastopnih stihova. Anafora = početak, Epifora = kraj. Ovdje je početak.'},
  {q:'„Došao, vidio, pobijedio" (Cezar) — koja figura?',o:['Anafora','Asindeton','Gradacija (klimaks)','Paralelizam'],t:2,e:'Gradacija — postupno pojačavanje (klimaks). Od jednostavne radnje (došao) preko spoznaje (vidio) do konačnog trijumfa (pobijedio). Također je i asindeton (bez veznika), ali dominantna figura je gradacija.'},
  {q:'„Lijepa si, Hrvatska, moja!" — koja figura karakterizira obrnut red riječi?',o:['Apostrofa','Inverzija','Uzvik','Paralelizam'],t:1,e:'Inverzija — obrnut red riječi (pridjev prije imenice, vokativ na kraju). Normalni red bio bi: „Moja Hrvatska je lijepa." Inverzija naglašava „lijepa" i stvara poetski ton. Apostrofa je prisutna („Hrvatska moja"), ali pitanje je o redu riječi.'},
  {q:'„Sunce sjaji, srce pjeva, duh se diže" — ista sintaktička struktura kroz tri rečenice. Koja figura?',o:['Gradacija','Epifora','Anafora','Paralelizam'],t:3,e:'Paralelizam — tri rečenice imaju identičan obrazac (subjekt + predikat). Nije anafora jer se ne ponavlja ista riječ, nego struktura.'},
  {q:'„I u dubinu / mora pada zrak jeseni plavi" — rečenica se lomi kroz dva stiha. Koja figura?',o:['Paralelizam','Inverzija','Opkoračenje (enjambement)','Cezura'],t:2,e:'Opkoračenje — sintaktička cjelina prelazi iz jednog stiha u sljedeći. „I u dubinu" (kraj prvog stiha) nastavlja „mora pada" (početak drugog). Moderna poezija često koristi.'},
  {q:'„Vidio, čuo, razumio, prihvatio" — što ima za temelj?',o:['Klimaks (uzlazna gradacija)','Paralelizam','Asindeton','Antiklimaks'],t:0,e:'Klimaks — uzlazna gradacija od fizičkog (vidio, čuo) preko kognitivnog (razumio) do voljnog (prihvatio). Svaki sljedeći element intenzivniji. Asindeton (bez „i") je sekundarno prisutan.'},
  {q:'„Pod prozorom procvala je ruža" — koja figura?',o:['Onomatopeja','Rima','Asonanca','Aliteracija'],t:3,e:'Aliteracija — ponavljanje istog suglasnika („p") na početku uzastopnih riječi. Broji slova: konsonant → aliteracija, vokal → asonanca.'},
  {q:'„Oko lomnog mora" — koji samoglasnik dominira?',o:['Onomatopeja','Asonanca „o"','Rima','Aliteracija „m"'],t:1,e:'Asonanca — ponavljanje samoglasnika „o" koji dominira (oko, lomnog, mora). Aliteracija „m" postoji, ali je sekundarna. Glavna figura je asonanca „o" koja stvara dubok, mračan ton.'},
  {q:'Mažuranićev Smail-aga (H14) koristi deseterac s pauzom nakon 4. sloga. Ta pauza se zove:',o:['Rima','Stanka','Cezura','Opkoračenje'],t:2,e:'Cezura — fiksna stanka unutar stiha. U narodnom desetercu (4+6) uvijek nakon 4. sloga. Kod Marulića (H12, dvanaesterac) nakon 6. sloga. Cezura je UNUTAR stiha, opkoračenje je IZMEĐU stihova.'},
  {q:'Pjesma s rimom ABAB — kako se zove?',o:['Obgrljena','Parna','Slobodni stih','Ukrštena rima'],t:3,e:'Ukrštena rima (ABAB) — prvi i treći se rimuju, drugi i četvrti. Parna je AABB, obgrljena ABBA. Slobodni stih nema rimu (koriste modernisti).'},
  {q:'Koja je razlika između metafore i metonimije?',o:['Metafora = doslovno. Metonimija = preneseno','Metafora = sličnost (imaginarna veza). Metonimija = stvarna povezanost.','Metafora = riječi. Metonimija = slike','Nemaju razlike, iste su figure'],t:1,e:'Metafora koristi imaginarnu sličnost („on je lav" = hrabar). Metonimija koristi stvarnu povezanost u svijetu („popio je čašu" = sadržaj). Pitaj se: je li veza zamišljena ili stvarna?'},
  {q:'Koja figura je „Sve znam — i ništa ne razumijem"?',o:['Oksimoron','Antiteza','Ironija','Paradoks'],t:3,e:'Paradoks — cijela izjava kontradiktorno, ali ima dublju istinu (znanje ≠ razumijevanje). Oksimoron bi bio dvije riječi („znalački neznalica"). Antiteza bi bila dva pojma. Paradoks je cijela rečenica.'},
];

const CP_ITEMS=[
  'Razumijem 4 kategorije stilskih figura: tropi, figure riječi, figure rečenice, figure zvuka.',
  'Znam top 10 figura: metafora, personifikacija, epitet, usporedba, anafora, hiperbola, kontrast, ironija, aliteracija, gradacija.',
  'Mogu razlučiti glavne zabune: metafora vs. metonimija, aliteracija vs. asonanca, anafora vs. epifora, paradoks vs. oksimoron.',
  'Razumijem 3 razine rada s figurama: prepoznavanje → funkcionalna interpretacija → esejska primjena.',
  'Znam 5-koračnu taktiku za analizu ulomka (ne nabrajaj, interpretiraj 2-3 ključne).',
  'Razumijem razliku između eufonije (blagozvučnost) i kakofonije (zlozvučnost).',
  'Znam sheme rime: AABB parna, ABAB ukrštena, ABBA obgrljena, slobodni stih.',
  'Znam konkretne primjere figura iz H12-H16 (metafora u H16, paradoks u H14, alegorija u H13).',
  'Pročitao/la sam cheat sheet i razumijem ga u cjelini.',
  'Mogu u školskom eseju elegantno uključiti 2-3 stilske figure kao argumente za tezu.',
];

const DIAG0_Q=[
  {q:'Koja figura je „More plače, nebo šuti"?',o:['Metafora','Personifikacija','Usporedba','Epitet'],t:1},
  {q:'Koja figura je „Sve znam — i ništa ne razumijem"?',o:['Oksimoron','Paradoks','Antiteza','Hiperbola'],t:1},
  {q:'Koja je razlika između aliteracije i asonance?',o:['Aliteracija je samoglasnik, asonanca suglasnik','Aliteracija je suglasnik, asonanca samoglasnik','Iste su','Obje su tipovi rime'],t:1},
  {q:'„Boj se onog tko je vikô plakat" — koja figura?',o:['Hiperbola','Metafora','Paradoks','Ironija'],t:2},
  {q:'Koja se figura javlja na POČETKU uzastopnih stihova?',o:['Epifora','Anafora','Simploka','Gradacija'],t:1}
];
const TAB_NAMES=['Teorija','Tropi','Figure riječi','Figure rečenice','Figure zvuka','Scanner+Drill','Kviz','Cheat sheet'];
function sw(n){
  document.querySelectorAll('.tab').forEach((t,i)=>{
    t.classList.toggle('on',i===n);
    t.setAttribute('aria-selected',i===n);
  });
  document.querySelectorAll('.layer').forEach((l,i)=>l.classList.toggle('on',i===n));
  document.getElementById('bc-tab').textContent=TAB_NAMES[n];
  if(n===6)qzInit();
  if(n===5){
    // init drill on first open
    if(!document.getElementById('mg-dynamic').dataset.init){
      document.getElementById('mg-dynamic').dataset.init='1';
      mgInit('easy');
      fcInit();
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
/* ══ SOCIAL PROOF + COUNTDOWN WIDGET ══ */
(function(){
  renderSocialProof('social-proof', 'full');
  var daysLeft = daysToMatura();
  if(daysLeft <= 60){
    var cd = document.getElementById('countdown');
    if(cd){cd.style.display='flex';renderCountdown('countdown');}
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
    msg='<strong>Odlično!</strong> Osnove H17 imaš savladane. Preporučujem Scanner+Drill — vježbaj prepoznavanje figura u ulomku i flashcards.';
    btnTxt='⚡ Scanner+Drill →'; btnTab=5;
  } else if(pct>=60){
    msg='<strong>Dobro!</strong> Nekoliko rupa postoji — provjeri Tab 1-4 za detaljne opise svake figure.';
    btnTxt='🎨 Tropi →'; btnTab=1;
  } else {
    msg='<strong>Kreni od osnova.</strong> Preporučujem: Teorija (Tab 0) + Tropi (Tab 1). Metafora, personifikacija i ironija su ključne — sigurno ih nauči napamet.';
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
try{citStars=JSON.parse(localStorage.getItem('mt.hrv.h17.cit_stars')||'{}')}catch(e){}
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
  try{localStorage.setItem('mt.hrv.h17.cit_stars',JSON.stringify(citStars))}catch(e){}
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

/* ═══════════════════════════════════
   SCANNER — Analiza ulomka Dubravke
═══════════════════════════════════ */
function scannerCount(){
  const ta = document.getElementById('scanner-in');
  if(!ta) return;
  const txt = ta.value;
  const chars = document.getElementById('scanner-chars');
  const words = document.getElementById('scanner-words');
  if(chars) chars.textContent = txt.length;
  if(words) words.textContent = txt.trim() ? txt.trim().split(/\\s+/).length : 0;
}

function scannerClear(){
  const ta = document.getElementById('scanner-in');
  const out = document.getElementById('scanner-out');
  if(ta){ ta.value=''; scannerCount(); }

function scannerDemo(){
  const ta = document.getElementById('scanner-in');
  if(!ta) return;
  ta.value = \`More plače, nebo šuti — zora rudi,\\ndaleko sunce sjedi na obali.\\nTiho, tiho kao duša u duši,\\nmoli se pjesnik modra mora vali.\\n\\nO Dubravko, slatka slobodo!\\nO rodna zemljo, bijel grade mati!\\nZnam da ti je vječna sreća suza\\ni da ćeš u njoj svoju dušu sprati.\`;
  scannerCount();
  scannerGo();
}
  if(out) out.innerHTML = '';
}

function scannerGo(){
  const ta = document.getElementById('scanner-in');
  const out = document.getElementById('scanner-out');
  if(!ta || !out) return;
  const txt = ta.value.trim();
  if(!txt){
    out.innerHTML = '<div class="box-warn" style="margin-top:10px"><div class="bw-body"><div class="bw-txt">Zalijepi ulomak iz poezije ili proze da AI detektira stilske figure.</div></div></div>';
    return;
  }
  const tl = txt.toLowerCase();
  const lines = txt.split(/\\n+/).filter(l => l.trim());
  
  const findings = {tropi:[], rijeci:[], recenice:[], zvuka:[]};
  
  // === FIGURE ZVUKA ===
  // Aliteracija — najčešći suglasnik
  const consonants = 'bcdfghjklmnpqrstvwxzćčšžđ';
  const conCount = {};
  for(let ch of tl) if(consonants.includes(ch)) conCount[ch] = (conCount[ch]||0) + 1;
  const topCon = Object.entries(conCount).sort((a,b)=>b[1]-a[1])[0];
  if(topCon && topCon[1] >= 8){
    findings.zvuka.push(\`<strong>Aliteracija</strong> — dominira suglasnik „\${topCon[0]}" (\${topCon[1]}×). Provjeri na početku riječi — ako ponavljanje, to je aliteracija.\`);
  }
  // Asonanca — najčešći samoglasnik
  const vowels = 'aeiou';
  const vowCount = {};
  for(let ch of tl) if(vowels.includes(ch)) vowCount[ch] = (vowCount[ch]||0) + 1;
  const topVow = Object.entries(vowCount).sort((a,b)=>b[1]-a[1])[0];
  const vowTotal = Object.values(vowCount).reduce((s,v)=>s+v, 0);
  if(topVow && topVow[1] >= 8 && topVow[1]/vowTotal > 0.35){
    findings.zvuka.push(\`<strong>Asonanca</strong> — dominira samoglasnik „\${topVow[0]}" (\${topVow[1]}×, \${Math.round(topVow[1]/vowTotal*100)}% svih vokala).\`);
  }
  // Onomatopeja
  const onomat = ['cvrkut','šum','šuštanje','krckanje','zujanje','bubnjanje','grmljavina','prasak','kukurijeka','mijaukanje','tup','bum','pljus','škrip','zvuk','buka'];
  const found_onomat = onomat.filter(w => tl.includes(w));
  if(found_onomat.length > 0){
    findings.zvuka.push(\`<strong>Onomatopeja</strong> — zvučne riječi: „\${found_onomat.join('", „')}".\`);
  }
  // Rima (detekcija — provjera krajeva stihova)
  if(lines.length >= 2){
    const endings = lines.map(l => l.trim().replace(/[.,!?;:]$/, '').slice(-3).toLowerCase());
    const rhyme = endings.some((e,i) => endings.slice(i+1).some(e2 => e && e === e2));
    if(rhyme) findings.zvuka.push(\`<strong>Rima</strong> — krajevi stihova se podudaraju u zvuku.\`);
  }
  
  // === FIGURE REČENICE ===
  // Anafora — početak stihova
  if(lines.length >= 2){
    const firstWords = lines.map(l => l.trim().split(/\\s+/)[0].toLowerCase().replace(/[,!?;:]/,''));
    const repeated = firstWords.filter((w,i) => firstWords.slice(i+1).includes(w) && w.length > 1);
    if(repeated.length > 0){
      findings.recenice.push(\`<strong>Anafora</strong> — ponavljanje na početku stihova: „\${[...new Set(repeated)].join('", „')}".\`);
    }
  }
  // Epifora — kraj stihova
  if(lines.length >= 2){
    const lastWords = lines.map(l => l.trim().split(/\\s+/).pop().toLowerCase().replace(/[,!?;:.]/,''));
    const rep = lastWords.filter((w,i) => lastWords.slice(i+1).includes(w) && w.length > 2);
    if(rep.length > 0){
      findings.recenice.push(\`<strong>Epifora</strong> — ponavljanje na kraju stihova: „\${[...new Set(rep)].join('", „')}".\`);
    }
  }
  // Gradacija / asindeton
  if(/\\w+,\\s*\\w+,\\s*\\w+/.test(txt)){
    findings.recenice.push(\`<strong>Asindeton / Gradacija</strong> — nabrajanje pojmova bez veznika. Provjeri ide li intenzitet uzlazno (klimaks) ili silazno (antiklimaks).\`);
  }
  // Polisindeton
  const i_count = (txt.match(/\\s+i\\s+/gi)||[]).length;
  if(i_count >= 3){
    findings.recenice.push(\`<strong>Polisindeton</strong> — ponovljeni veznik „i" (\${i_count}×). Biblijski / liturgijski registar.\`);
  }
  
  // === FIGURE RIJEČI ===
  // Retoričko pitanje
  const q_count = (txt.match(/\\?/g)||[]).length;
  if(q_count >= 1){
    findings.rijeci.push(\`<strong>Retoričko pitanje</strong> — \${q_count} upitnik(a). Provjeri očekuje li se odgovor ili je retorički naboj.\`);
  }
  // Uzvik
  const e_count = (txt.match(/!/g)||[]).length;
  if(e_count >= 1){
    findings.rijeci.push(\`<strong>Uzvik</strong> — \${e_count} uskličnik(a). Emocionalna izjava / patos.\`);
  }
  // Apostrofa
  if(/^(o |oj |ej |hej |ah )/im.test(txt) || /\\b(o |oj )[A-ZŠČĆŽĐ]/.test(txt)){
    findings.rijeci.push(\`<strong>Apostrofa</strong> — izravno oslovljavanje („O...", „Oj..."). Intenzivno patetski/lirski ton.\`);
  }
  // Deminutiv / augmentativ
  const deminutive = txt.match(/\\b\\w+(ic[ae]|čic[ae]|ić|ašce)\\b/g);
  if(deminutive && deminutive.length >= 2){
    findings.rijeci.push(\`<strong>Deminutiv</strong> — umanjenice: „\${[...new Set(deminutive)].slice(0,3).join('", „')}". Nježnost, folklorni ton.\`);
  }
  const augment = txt.match(/\\b\\w+(ina|etina|urda)\\b/g);
  if(augment && augment.length >= 1){
    findings.rijeci.push(\`<strong>Augmentativ</strong> — uvećanice: „\${[...new Set(augment)].slice(0,3).join('", „')}". Pogrdnost / naglašenost.\`);
  }
  // Kontrast
  const contrasts = [['bog','sirom'],['svjetl','tam'],['život','smrt'],['dan','noć'],['dobr','zl'],['rat','mir'],['sret','tuž'],['nebo','zeml'],['mlad','star'],['privid','istin']];
  for(let [a,b] of contrasts){
    if(tl.includes(a) && tl.includes(b)){
      findings.rijeci.push(\`<strong>Kontrast / antiteza</strong> — suprotstavljeni pojmovi „\${a}" / „\${b}". Strukturna opozicija u tekstu.\`);
      break;
    }
  }
  
  // === TROPI ===
  // Usporedba
  if(/\\b(kao|poput|nalik|sličan|kakav)\\b/i.test(txt)){
    findings.tropi.push(\`<strong>Usporedba</strong> — uočeno „kao/poput/nalik". Eksplicitna komparacija dvaju pojmova.\`);
  }
  // Hiperbola
  if(/\\b(milijun|tisuć|nikad|uvijek|svi |bezbroj|ogromn|golem|beskonačn)\\b/i.test(tl)){
    findings.tropi.push(\`<strong>Hiperbola</strong> — apsolutni kvantifikator (milijun, tisuću, nikad, uvijek...). Emocionalno pretjerivanje.\`);
  }
  // Personifikacija
  const personif_pairs = ['more plač','nebo šut','vjetar pjev','sunce smij','zora rud','noć prič','drveće šap','duša plač','smrt smij','vrijeme leti','cvjet plač','mjesec gled'];
  const pers_found = personif_pairs.filter(p => tl.includes(p));
  if(pers_found.length > 0){
    findings.tropi.push(\`<strong>Personifikacija</strong> — neživo + ljudski glagol: „\${pers_found[0]}...". Priroda kao biće.\`);
  }
  // Oksimoron — provjera suprotnih riječi u neposrednoj blizini
  const oxyPairs = [['hladn','sunc'],['slatk','tug'],['živ','mrt'],['tih','buk'],['gork','sreć'],['lijep','strah']];
  for(let [a,b] of oxyPairs){
    const regex = new RegExp(\`\${a}\\\\w+\\\\s+\\\\w*\${b}\\\\w*\`, 'i');
    if(regex.test(tl)){
      findings.tropi.push(\`<strong>Oksimoron</strong> — suprotne riječi u istoj frazi („\${a}..." + „\${b}...").\`);
      break;
    }
  }
  // Ironija / Paradoks — teže detektirati, označavamo kao "provjeri ručno"
  if(/\\b(ali|pa ipak|unatoč|paradoksal|ironij)\\b/i.test(tl)){
    findings.tropi.push(\`<strong>Ironija / Paradoks</strong> — signalne riječi („ali", „paradoksalno"). Provjeri ručno — kaže li autor jedno a misli drugo?\`);
  }
  
  // === RENDER ===
  let h = '<div class="box-int" style="margin-top:10px"><div class="box-int-lbl">🔍 Rezultat analize ulomka — detektirane figure</div><div class="box-int-txt">';
  
  let total = Object.values(findings).flat().length;
  
  if(total === 0){
    h += '<p style="color:var(--muted)"><em>Algoritam nije detektirao jasne figure. To ne znači da ih nema — AI scanner radi po obrascima riječi. Preporuka: pročitaj naglas i traži ponavljanja, kontraste, preneseno značenje.</em></p>';
  } else {
    h += \`<p><strong>Ukupno detektirano: \${total} figura.</strong> Scanner radi po obrascima — provjeri ručno točnost.</p>\`;
    
    if(findings.tropi.length > 0){
      h += '<p style="margin-top:10px"><b>🎨 Tropi (značenje):</b><br>• ' + findings.tropi.join('<br>• ') + '</p>';
    }
    if(findings.rijeci.length > 0){
      h += '<p style="margin-top:10px"><b>📝 Figure riječi:</b><br>• ' + findings.rijeci.join('<br>• ') + '</p>';
    }
    if(findings.recenice.length > 0){
      h += '<p style="margin-top:10px"><b>📐 Figure rečenice:</b><br>• ' + findings.recenice.join('<br>• ') + '</p>';
    }
    if(findings.zvuka.length > 0){
      h += '<p style="margin-top:10px"><b>🔊 Figure zvuka:</b><br>• ' + findings.zvuka.join('<br>• ') + '</p>';
    }
  }
  
  h += '<p style="margin-top:12px;padding-top:10px;border-top:1px dashed var(--bd)"><b>🎯 Sljedeći korak:</b> Za svaku prepoznatu figuru — (1) potvrdi ručno, (2) opiši <em>funkciju</em> (kakav učinak stvara), (3) poveži s temom ulomka. Pogledaj Tab 1-4 za detalje o svakoj figuri. Ne nabrajaj sve — izaberi <strong>2-3 najvažnije</strong> i kvalitetno interpretiraj.</p>';
  h += '</div></div>';
  out.innerHTML = h;
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
  try{localStorage.setItem('mt.hrv.h17.wc_text',txt);}catch(e){}
}
(function(){
  const ta=document.getElementById('scanner-in');
  if(!ta)return;
  try{const sv=localStorage.getItem('mt.hrv.h17.wc_text');if(sv){ta.value=sv;scannerUpdate();}}catch(e){}
})();

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
    <h3>25 pitanja · H17 Stilske figure</h3>
    <p>Pitanja pokrivaju sve 4 kategorije figura: <strong>tropi, figure riječi, figure rečenice, figure zvuka</strong>. Svako pitanje daje <em>ulomak iz poznatog djela</em> — prepoznaj figuru. Primjeri iz H12-H16 + klasici. Na kraju dobivaš ocjenu i objašnjenja.</p>
    <button class="fcb primary" onclick="qzStart()">Započni kviz →</button>
  </div>\`;
}
function qzStart(){
  qzIdx=0;qzScore=0;qzAnswered=[];
  const el=document.getElementById('qz-inner')||document.getElementById('qz-wrap');
  qzShowQ(el);
}
function qzShowQ(el){
  if(qzIdx>=KVIZ_Q.length){qzEnd(el);return;}
  const q=KVIZ_Q[qzIdx];
  const pct=Math.round((qzIdx/KVIZ_Q.length)*100);
  el.innerHTML=\`
    <div class="qz-prog"><div class="qz-prog-fill" style="width:\${pct}%"></div></div>
    <div class="qz-num">Pitanje \${qzIdx+1} / \${KVIZ_Q.length}</div>
    <div class="qz-q">\${q.q}</div>
    <div class="qz-opts">\${q.o.map((o,i)=>\`<button class="qz-opt" onclick="qzAns(this,\${i})">\${o}</button>\`).join('')}</div>
    <div class="qz-expl" id="qz-expl" style="display:none"></div>
    <div style="text-align:right;margin-top:12px"><button class="fcb qz-next" id="qz-next" onclick="qzNext()" style="display:none">Sljedeće →</button></div>
  \`;
}
function qzAns(btn,i){
  if(document.querySelector('.qz-opt.correct,.qz-opt.wrong'))return;
  const opts=document.querySelectorAll('.qz-opt');
  opts.forEach(b=>b.disabled=true);
  const q=KVIZ_Q[qzIdx];
  const ok=(i===q.t);
  if(ok){btn.classList.add('correct');qzScore++;}
  else{btn.classList.add('wrong');opts[q.t].classList.add('correct');}
  if(!qzAnswered)qzAnswered=[];
  qzAnswered.push({q:q.q,ok,correct:q.o[q.t]});
  const expl=document.getElementById('qz-expl');
  expl.style.display='block';
  expl.innerHTML=\`<strong>\${ok?'✓ Točno!':'✗ Netočno.'}</strong> \${q.e}\`;
  document.getElementById('qz-next').style.display='inline-flex';
}
function qzNext(){
  qzIdx++;
  const el=document.getElementById('qz-inner')||document.getElementById('qz-wrap');
  qzShowQ(el);
}
function qzEnd(el){
  const pct=Math.round(qzScore/KVIZ_Q.length*100);
  let grade,msg,ico;
  if(pct>=90){grade='ODLIČAN';msg='Spreman/na si za maturu iz H17 — figure prepoznaješ brzo i točno.';ico='🏆';}
  else if(pct>=75){grade='VRLO DOBAR';msg='Solidno znanje. Provjeri neispravne figure u Leksikonu (Tab 1-4).';ico='💪';}
  else if(pct>=60){grade='DOBAR';msg='Ponoviti: top 10 figura (metafora, personifikacija, epitet, usporedba, anafora, hiperbola, kontrast, ironija, aliteracija, gradacija).';ico='📚';}
  else if(pct>=45){grade='DOVOLJAN';msg='Osnove su tu — trebaš više vježbe.';ico='🔁';}
  else{grade='NEDOVOLJAN';msg='Vrati se na Teoriju i ponovi korak po korak.';ico='🎯';}

  let wrongHtml='';
  if(qzAnswered&&qzAnswered.length){
    const wrong=qzAnswered.filter(a=>!a.ok);
    if(wrong.length>0){
      wrongHtml=\`<div style="margin-top:24px;text-align:left">
        <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--t3);text-transform:uppercase;margin-bottom:12px">Promašena pitanja (\${wrong.length})</div>
        \${wrong.map(a=>\`<div class="qz-wrong-item">
          <div class="qz-wrong-q">\${a.q}</div>
          <div class="qz-wrong-a">Točan odgovor: <b>\${a.correct}</b></div>
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
      <button class="fcb primary" onclick="qzStart()">🔁 Ponovo</button>
      <button class="fcb" onclick="sw(4)">📚 Pojmovnik</button>
      <button class="fcb" onclick="sw(7)">📄 Cheat sheet</button>
    </div>
    \${wrongHtml}
  </div>\`;

  saveScoreHistory(qzScore,KVIZ_Q.length);
  markTab(6);
}

/* ═══════════════════════════════════
   CHECKPOINT
═══════════════════════════════════ */
let CP_STATE={done:{}};
try{const s=localStorage.getItem('mt.hrv.h17.cp');if(s)CP_STATE=JSON.parse(s);}catch(e){}

const CP_HINTS=['Tab 0','Tab 0','Tab 4','Tab 0','Tab 1','Tab 1','Tab 0','Tab 2','Tab 4','Tab 2'];
function cpRender(){
  const list=document.getElementById('cp-list');
  if(!list)return;
  list.innerHTML=CP_ITEMS.map((item,i)=>\`
    <div class="cp-item\${CP_STATE.done[i]?' done':''}" onclick="cpToggle(\${i})" style="display:flex;align-items:flex-start;gap:12px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);padding:12px 16px;cursor:pointer;transition:all .15s">
      <div class="cp-box">\${CP_STATE.done[i]?'✓':''}</div>
      <div class="cp-txt" style="flex:1;font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.5">\${item}</div>
      <span class="cp-hint">\${CP_HINTS[i]||''}</span>
    </div>
  \`).join('');
  cpUpdateProgress();
}
function cpToggle(i){
  CP_STATE.done[i]=!CP_STATE.done[i];
  try{localStorage.setItem('mt.hrv.h17.cp',JSON.stringify(CP_STATE));}catch(e){}
  cpRender();
}
function cpUpdateProgress(){
  const done=Object.values(CP_STATE.done).filter(Boolean).length;
  const total=CP_ITEMS.length;
  const pct=Math.round(done/total*100);
  document.getElementById('cp-pct').textContent=\`\${done} / \${total}\`;
  document.getElementById('cp-bar').style.width=pct+'%';
  document.getElementById('sb-prog-bar').style.width=pct+'%';
  document.getElementById('sb-prog-pct').textContent=pct+'%';
  const fin=document.getElementById('cp-final');
  if(fin)fin.classList.toggle('show',done===total);
  // Update summary
  const sumBox=document.getElementById('cp-summary-box');
  const sumPct=document.getElementById('cp-sum-pct');
  const sumTxt=document.getElementById('cp-sum-txt');
  if(sumBox&&done>0){
    sumBox.style.display='flex';
    sumPct.textContent=pct+'%';
    let msg;
    if(pct===100)msg='<strong>Kompletan!</strong> Sve je savladano — spreman/na si za maturu.';
    else if(pct>=70)msg='<strong>Odlično!</strong> Neoznačene tvrdnje su tvoje slabe točke — fokusiraj se na njih.';
    else if(pct>=40)msg='<strong>Napredak!</strong> Nastavak: vježbaj na Scanner+Drill i radi kviz ponovno dok ne dobiješ 80%+.';
    else msg='Još je posla. Počni s Teorijom (Tab 0) i prođi sve sekcije.';
    sumTxt.innerHTML=msg;
  }
}
function cpReset(){
  CP_STATE={done:{}};
  try{localStorage.removeItem('mt.hrv.h17.cp');}catch(e){}
  cpRender();
}
cpRender();

/* ═══════════════════════════════════
   KVIZ INIT on tab 6
═══════════════════════════════════ */
// Already handled in sw()

/* ═══════════════════════════════════
   MARK TAB (completion badge)
═══════════════════════════════════ */
let TAB_DONE={};
try{TAB_DONE=JSON.parse(localStorage.getItem('mt.hrv.h17.tab_done')||'{}')}catch(e){}

function markTab(n){
  TAB_DONE[n]=true;
  try{localStorage.setItem('mt.hrv.h17.tab_done',JSON.stringify(TAB_DONE))}catch(e){}
  const el=document.getElementById('td'+n);
  if(el)el.textContent='✓';
}
function restoreTabDone(){
  Object.keys(TAB_DONE).forEach(n=>{
    const el=document.getElementById('td'+n);
    if(el&&TAB_DONE[n])el.textContent='✓';
  });
}
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
  '💡 <strong>Tab 0 tip:</strong> Ne uči sve 45 figura napamet — fokus na top 10 (metafora, personifikacija, epitet, usporedba, anafora, hiperbola, kontrast, ironija, aliteracija, gradacija).',
  '💡 <strong>Tab 1 tip:</strong> Tropi (metafora, ironija, hiperbola) su najvažnija kategorija — 60% ispitnih pitanja je iz ove skupine.',
  '💡 <strong>Tab 2 tip:</strong> Epitet i apostrofa su najčešće figure riječi — vrijedi ih sigurno naučiti.',
  '💡 <strong>Tab 3 tip:</strong> Anafora i gradacija su najvažnije figure rečenice. Razlikuj anaforu (početak) od epifore (kraj).',
  '💡 <strong>Tab 4 tip:</strong> Čitaj ulomke naglas — figure zvuka (aliteracija, asonanca, onomatopeja) bolje čuješ nego vidiš.',
  '💡 <strong>Tab 5 tip:</strong> Scanner detektira figure u ulomku algoritamski — uvijek provjeri ručno točnost (posebno ironiju i paradoks).',
  '💡 <strong>Tab 6 tip:</strong> Nakon kviza pročitaj objašnjenje — posebno pazi na zabune (metafora vs. metonimija, paradoks vs. oksimoron).',
  '💡 <strong>Tab 7 tip:</strong> Printaj cheat sheet noć prije ispita — 45 figura na jednoj A4 stranici za brzu referencu.'
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
    const names={H11:'H11 · Stari hrv. pisci',H12:'H12 · Marulić · Judita',H13:'H13 · Gundulić · Dubravka',H14:'H14 · Preporod · Mažuranić',H15:'H15 · Šenoa · Prijan Lovro',H16:'H16 · Krleža · Glembajevi'};
    const el=document.getElementById('from-banner');
    const txt=document.getElementById('from-txt');
    if(el&&txt){
      txt.textContent='📎 Nastaviš učenje iz '+(names[from]||from)+' → H17 · Stilske figure';
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
    const hist=JSON.parse(localStorage.getItem('mt.hrv.h17.kviz_hist')||'[]');
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
    const hist=JSON.parse(localStorage.getItem('mt.hrv.h17.kviz_hist')||'[]');
    hist.push({score,total,date:new Date().toISOString()});
    localStorage.setItem('mt.hrv.h17.kviz_hist',JSON.stringify(hist.slice(-10)));
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
   MATCH GAME — Funkcionalan (3 razine)
═══════════════════════════════════ */
const MATCH_DATA={
  // EASY — 4 najčešće figure s definicijama
  easy:[
    {a:'Metafora',b:'Prijenos značenja na temelju sličnosti'},
    {a:'Personifikacija',b:'Ljudske osobine pripisane neživom'},
    {a:'Epitet',b:'Ukrasni pridjev uz imenicu'},
    {a:'Anafora',b:'Ponavljanje riječi na početku stihova'},
  ],
  // MEDIUM — 6 figura s konkretnim primjerima iz djela
  medium:[
    {a:'Apostrofa',b:'„Ne lomi, pobro, krstova!" (Mažuranić, H14)'},
    {a:'Paradoks',b:'„Boj se onog tko je vikô plakat" (Mažuranić, H14)'},
    {a:'Alegorija',b:'Dubravka = Dubrovnik (Gundulić, H13)'},
    {a:'Ironija',b:'„Cvrkut ptica u vrtu" — kraj Glembajevih (Krleža, H16)'},
    {a:'Kontrast',b:'Privid ↔ istina — glavna osa Glembajevih (H16)'},
    {a:'Usporedba',b:'„Angelika stoji kao lutka" (Krleža, H16)'},
  ],
  // HARD — 8 naprednih figura + specifičnosti
  hard:[
    {a:'Metonimija',b:'Prijenos na temelju stvarne povezanosti (popio je čašu)'},
    {a:'Sinekdoha',b:'Dio umjesto cjeline ili obrnuto (krov nad glavom)'},
    {a:'Oksimoron',b:'Dvije suprotne riječi (hladno sunce, slatka tuga)'},
    {a:'Litota',b:'Namjerno umanjivanje kroz negaciju (nije baš najpametniji)'},
    {a:'Slavenska antiteza',b:'Troslojna struktura nar. poezije (pitanje → lažni odgovor → pravi)'},
    {a:'Simploka',b:'Kombinacija anafore i epifore u istoj frazi'},
    {a:'Asindeton',b:'Nabrajanje bez veznika (došao, vidio, pobijedio)'},
    {a:'Opkoračenje',b:'Rečenica prelazi iz jednog stiha u sljedeći (enjambement)'},
  ],
};

let mgLevel='easy',mgSelLeft=null,mgSelRight=null,mgMatched=0,mgPairs=[];

function mgInit(level){
  mgLevel=level||'easy';
  const pairs=MATCH_DATA[mgLevel];
  mgMatched=0;mgSelLeft=null;mgSelRight=null;
  mgPairs=pairs.map((p,i)=>({...p,id:i}));
  
  // Shuffle BOTH sides independently for harder challenge
  const leftItems=[...mgPairs].sort(()=>Math.random()-.5);
  const rightItems=[...mgPairs].sort(()=>Math.random()-.5);
  
  const themes={
    easy:'🎨 Osnovne figure (lagano)',
    medium:'📖 Figure + primjeri iz H12-H16',
    hard:'🎓 Napredne figure + zabune'
  };
  const labels={easy:'Lagano',medium:'Srednje',hard:'Teško'};
  const activeClass=(lvl)=>mgLevel===lvl?'primary':'';
  
  const el=document.getElementById('mg-dynamic');
  if(!el)return;
  el.innerHTML=\`
    <div class="mg-status" id="mg-status">
      <strong>\${themes[mgLevel]}</strong> · \${mgPairs.length} parova · \${labels[mgLevel]}
    </div>
    <div class="mg-grid">
      <div class="mg-col" id="mg-left">
        \${leftItems.map(p=>\`<div class="mg-item" data-id="\${p.id}" data-side="left" onclick="mgClick(this)">\${p.a}</div>\`).join('')}
      </div>
      <div class="mg-col" id="mg-right">
        \${rightItems.map(p=>\`<div class="mg-item" data-id="\${p.id}" data-side="right" onclick="mgClick(this)">\${p.b}</div>\`).join('')}
      </div>
    </div>
    <div style="text-align:center;margin-top:14px">
      <button class="fcb \${activeClass('easy')}" onclick="mgInit('easy')" style="margin:3px" title="Likovi Dubravke">🎭 Lagano (4)</button>
      <button class="fcb \${activeClass('medium')}" onclick="mgInit('medium')" style="margin:3px" title="Stilska sredstva + primjeri">✒ Srednje (6)</button>
      <button class="fcb \${activeClass('hard')}" onclick="mgInit('hard')" style="margin:3px" title="Kontekst i uzori">🏛 Teško (8)</button>
    </div>
    <div style="text-align:center;margin-top:8px;font-family:var(--mono);font-size:10px;color:var(--t3)">
      Svaka razina testira drugu vještinu — ne samo više parova
    </div>
  \`;
}

function mgClick(el){
  if(el.classList.contains('matched')||el.classList.contains('wrong'))return;
  const side=el.dataset.side;
  
  if(side==='left'){
    document.querySelectorAll('#mg-left .mg-item').forEach(i=>i.classList.remove('selected'));
    el.classList.add('selected');
    mgSelLeft=el;
  } else {
    document.querySelectorAll('#mg-right .mg-item').forEach(i=>i.classList.remove('selected'));
    el.classList.add('selected');
    mgSelRight=el;
  }
  
  if(mgSelLeft&&mgSelRight){
    const match=mgSelLeft.dataset.id===mgSelRight.dataset.id;
    if(match){
      mgSelLeft.classList.add('matched');mgSelLeft.classList.remove('selected');
      mgSelRight.classList.add('matched');mgSelRight.classList.remove('selected');
      mgMatched++;
      if(mgMatched===mgPairs.length){
        document.getElementById('mg-status').innerHTML=\`<span style="color:var(--green)">✓ Sve spareno! Odlično!</span>\`;
        markTab(5);
      }
    } else {
      mgSelLeft.classList.add('wrong');mgSelRight.classList.add('wrong');
      setTimeout(()=>{
        mgSelLeft.classList.remove('wrong','selected');
        mgSelRight.classList.remove('wrong','selected');
        mgSelLeft=null;mgSelRight=null;
      },600);
      return;
    }
    mgSelLeft=null;mgSelRight=null;
  }
}

/* ═══════════════════════════════════
   FLASHCARDS — funkcionalan demo
═══════════════════════════════════ */
const FC_DATA=[
  // === TROPI (8) ===
  {t:'Metafora',d:'Prijenos značenja na temelju sličnosti. „More plače", „Borim se protiv Glembaya u sebi" (Krleža, H16).',kat:'trop'},
  {t:'Personifikacija',d:'Ljudske osobine pripisane neživom. „More plače, nebo šuti". Česta u H13 Dubravki, H14 Mažuraniću, H16 Krleži.',kat:'trop'},
  {t:'Ironija',d:'Govori jedno, misli suprotno. „Cvrkut ptica u vrtu" na kraju Glembajevih (H16) — situacijska ironija.',kat:'trop'},
  {t:'Hiperbola',d:'Namjerno pretjerivanje. „Tisuću Turaka" (Mažuranić, H14), „Svi Glembajevi su prokleti" (H16).',kat:'trop'},
  {t:'Usporedba',d:'Sličnost s „kao/poput". „Hrabar kao lav", „Angelika stoji kao lutka" (Krleža, H16).',kat:'trop'},
  {t:'Alegorija',d:'Cijelo djelo s prenesenim značenjem. Gundulićeva Dubravka (H13) = Dubrovnik. Orwellova Životinjska farma.',kat:'trop'},
  {t:'Simbol',d:'Konkretan predmet s apstraktnim značenjem. Portreti u Glembajevima (H16) = obiteljsko prokletstvo. Škare = oružje.',kat:'trop'},
  {t:'Paradoks',d:'Naizgled besmislena izjava s dubljom istinom. „Boj se onog tko je vikô plakat" (Mažuranić, H14).',kat:'trop'},

  // === FIGURE RIJEČI (4) ===
  {t:'Epitet',d:'Ukrasni pridjev uz imenicu. „Bujna zora", „junačka srca". Najčešća figura poezije.',kat:'riječi'},
  {t:'Apostrofa',d:'Izravno oslovljavanje odsutnog/apstraktnog. „O Dubravko!" (Gundulić, H13), „Ne lomi, pobro!" (H14).',kat:'riječi'},
  {t:'Retoričko pitanje',d:'Pitanje bez očekivanog odgovora. „Zar je ovo moguće?" Česta u H14 Mažuraniću i H16 Krleži.',kat:'riječi'},
  {t:'Kontrast / antiteza',d:'Suprotstavljanje ideja. Privid ↔ istina = glavna osa Glembajevih (H16). Grad ↔ selo (Šenoa, H15).',kat:'riječi'},

  // === FIGURE REČENICE (4) ===
  {t:'Anafora',d:'Ponavljanje riječi na POČETKU uzastopnih stihova. „Tebe Boga hvalimo, Tebe Gospoda..." (Te Deum).',kat:'rečenice'},
  {t:'Gradacija',d:'Postupno pojačavanje. „Došao, vidio, pobijedio" (Cezar). Uzlazna = klimaks, silazna = antiklimaks.',kat:'rečenice'},
  {t:'Inverzija',d:'Obrnut red riječi. „Lijepa si, Hrvatska, moja!" Česta u poeziji za naglašavanje.',kat:'rečenice'},
  {t:'Paralelizam',d:'Ista sintaktička struktura kroz više rečenica. „Sunce sjaji, srce pjeva, duh se diže".',kat:'rečenice'},

  // === FIGURE ZVUKA (4) ===
  {t:'Aliteracija',d:'Ponavljanje suglasnika. „Pod prozorom procvala ruža" (ponavljanje „p").',kat:'zvuka'},
  {t:'Asonanca',d:'Ponavljanje samoglasnika. „Oko lomnog mora" (dominira „o").',kat:'zvuka'},
  {t:'Onomatopeja',d:'Riječi oponašaju zvuk. „Cvrkut", „šuštanje", „bum". Finale Glembajevih: „Cvrkut ptica u vrtu" (H16).',kat:'zvuka'},
  {t:'Rima',d:'Podudaranje kraja stihova. AABB (parna), ABAB (ukrštena), ABBA (obgrljena). Slobodni stih = bez rime.',kat:'zvuka'},
];

let fcIdx=0,fcFlipped=false;

function fcInit(){
  fcIdx=0;fcFlipped=false;
  fcRender();
}

function fcRender(){
  const card=document.getElementById('fc-card-dyn');
  const counter=document.getElementById('fc-counter-dyn');
  if(!card)return;
  const item=FC_DATA[fcIdx];
  const catCls={stih:'p-pa',ep:'p-br',aleg:'p-r',stil:'p-t',hum:'p-go'};
  card.querySelector('.fc-term').textContent=item.t;
  card.querySelector('.fc-def').textContent=item.d;
  card.querySelector('.fc-cat').textContent=item.kat+' · klikni za definiciju';
  card.querySelector('.fc-back .fc-cat').textContent=item.kat;
  card.classList.remove('flipped');
  fcFlipped=false;
  if(counter)counter.textContent=\`\${fcIdx+1} / \${FC_DATA.length}\`;
  document.getElementById('fc-prev-dyn').disabled=(fcIdx===0);
  document.getElementById('fc-next-dyn').disabled=(fcIdx===FC_DATA.length-1);
}

function fcFlip(){
  const card=document.getElementById('fc-card-dyn');
  if(!card)return;
  fcFlipped=!fcFlipped;
  card.classList.toggle('flipped',fcFlipped);
}

function fcNav(dir){
  fcIdx=Math.max(0,Math.min(FC_DATA.length-1,fcIdx+dir));
  fcRender();
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
  {q: 'Mogu razlikovati 4 kategorije stilskih figura (tropi, figure riječi, rečenice, zvuka).', k: 'kategorije'},
  {q: 'Znam prepoznati 10 najčešćih figura (metafora, personifikacija, epitet, usporedba, anafora, hiperbola, kontrast, ironija, aliteracija, gradacija).', k: 'top10'},
  {q: 'Razumijem 3 razine rada s figurama: prepoznavanje → funkcionalna interpretacija → esejska primjena.', k: 'razine'},
  {q: 'Mogu razlučiti najčešće zabune (metafora vs. metonimija, aliteracija vs. asonanca, anafora vs. epifora).', k: 'zabune'},
  {q: 'Znam 5-korak taktiku za analizu ulomka i ne nabrajam sve figure, nego interpretiram 2-3 kvalitetno.', k: 'taktika'}
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
  if (pct >= 100) { msg = '🏆 Odlično! Spreman/na si za sve što NCVVO može pitati iz H17 — prepoznavanje figura u ulomku.'; color = 'var(--green)'; }
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
/* ═══════════════════════════════════
   CHECKPOINT WRITER
═══════════════════════════════════ */
(function(){
  const ta=document.getElementById('cp-writer');
  if(!ta)return;
  try{const sv=localStorage.getItem('mt.hrv.h17.cp_writer');if(sv){ta.value=sv;}}catch(e){}
})();

/* ═══════════════════════════════════
   CITATNIK v2 (H11 featured-quote pattern)
═══════════════════════════════════ */
// [removed: CIT_DATA2 was H16 Glembajevi-specific, dead code in H17]



function buildCitHTML(c, i){
  const safe = (s)=>s.replace(/\\\\/g,'\\\\\\\\').replace(/'/g,"\\\\'");
  return \`<div class="featured-quote" data-cit-cat="\${c.cat}">
      \${c.napamet ? '<span class="fq-napamet">★ NAPAMET</span>' : ''}
      <div class="fq-mark">«</div>
      <div class="fq-body">
        <div class="fq-text">\${c.text}</div>
        <div class="fq-meta">\${c.meta}</div>
      </div>
      <button type="button" class="fq-copy" onclick="fqCopy(this,'\${safe(c.text)} — \${safe(c.meta.replace(/<[^>]+>/g,''))}')">⎘</button>
    </div>\`;
}

function fqCopy(btn, text) {
  navigator.clipboard.writeText(text).catch(() => {});
  btn.classList.add('copied');
  btn.textContent = '✓';
  setTimeout(() => { btn.classList.remove('copied'); btn.textContent = '⎘'; }, 1500);
}

/* ═══════════════════════════════════
   POJMOVNIK v2 (H11 pojm-card pattern)
═══════════════════════════════════ */
// [removed: POJM_DATA2 was H16 Glembajevi-specific, dead code in H17]

/* ═══════════════════════════════════
   POJMOVNIK FLASHCARD MODE (H11 pj2*)
═══════════════════════════════════ */


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

function pj2Next(){
  if(pj2Idx < pj2Data.length-1){ pj2Idx++; pj2Render(); }
}

function pj2Prev(){
  if(pj2Idx > 0){ pj2Idx--; pj2Render(); }
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
  try { localStorage.setItem('mt.hrv.h17.prog', p); } catch(e){}
}
/* ══ SIDEBAR ACTIVATION ══ */
var PUBLISHED_CHAPTERS = {
  h01: true, h02: true, h03: true, h04: true, h05: true,
  h06: true, h07: true, h08: true, h09: true, h10: true,
  h11: true, h12: true, h13: true, h14: true, h15: true, h16: true,
  h17: true, h18: true,
  h19: true, h20: true, h21: true, h22: true, h23: true, h24: true,
  h25: true, h26: true, h27: true, h28: true,
  d01: false, d02: false, d03: false, d04: true,  d05: false,
  d06: false, d07: false, d08: false, d09: false, d10: true,
  d11: false, d12: false, d13: false, d14: false, d15: false,
  d16: false, d17: false, d18: false, d19: false, d20: false,
  d21: false, d22: false
};
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
  var totalMain = 28;
  items.forEach(function(item){
    var code = item.getAttribute('data-code');
    var isCurrent = code === currentCode;
    var isPublished = PUBLISHED_CHAPTERS[code] === true;
    if(isCurrent){
      item.classList.add('active');
      item.setAttribute('aria-current','page');
      if(code.indexOf('h')===0){ currentIdx = parseInt(code.slice(1),10); }
    }
    if(!isPublished && !isCurrent){
      item.classList.add('disabled');
      item.setAttribute('aria-disabled','true');
      item.setAttribute('title','Klikni da te obavijestimo kad izađe');
      item.removeAttribute('href');
      item.addEventListener('click', function(e){
        e.preventDefault();
        var title = (item.textContent||'').replace(/^[hd]\d\d\s·\s/i,'').trim();
        /* poglavlje u izradi — signup uklonjen */
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
  var footPos = document.getElementById('sb-footer-pos');
  var footTitle = document.getElementById('sb-footer-title');
  if(footPos){
    if(currentCode.indexOf('d')===0){ footPos.textContent = currentCode.toUpperCase() + ' · dodatno'; }
    else if(currentIdx > 0){ footPos.textContent = String(currentIdx).padStart(2,'0') + ' / ' + totalMain; }
  }
  if(footTitle){ footTitle.textContent = CHAPTER_TITLES[currentCode] || ''; }
  var doneH = Object.keys(PUBLISHED_CHAPTERS).filter(function(k){ return k.indexOf('h')===0 && PUBLISHED_CHAPTERS[k]; }).length;
  var pct = Math.round((doneH / totalMain) * 100);
  var progBar = document.getElementById('prog-bar');
  var progPct = document.getElementById('prog-pct');
  if(progBar) progBar.style.width = pct + '%';
  if(progPct) progPct.textContent = pct + '%';
}
function detectTier(){
  var override = null;
  try { override = localStorage.getItem('mt.user.tier'); } catch(e){}
  return override || 'free';
}
function applyTier(){
  var tier = detectTier();
  document.body.setAttribute('data-tier', tier);
  document.querySelectorAll('.pro-gate').forEach(function(gate){
    var feat = gate.getAttribute('data-feature') || 'generic';
    var btn = gate.querySelector('.pro-gate-btn');
    if(btn && !btn.href.includes('ctx=')){
      var sep = btn.href.indexOf('?') >= 0 ? '&' : '?';
      btn.href = btn.href + sep + 'ctx=' + feat + '_' +
                 ((typeof CURRENT_CHAPTER !== 'undefined' && CURRENT_CHAPTER.code) || 'unknown');
    }
    if(tier === 'free'){
      track('paywall_impression', { feature: feat,
        chapter: (typeof CURRENT_CHAPTER !== 'undefined' && CURRENT_CHAPTER.code) || '' }, 'conversion');
    }
  });
}
function setTierLegacy(t){ try { localStorage.setItem('mt.user.tier', t); } catch(e){} applyTier(); }
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', function(){ initSidebar(); applyTier(); });
} else {
  initSidebar();
  applyTier();
}
`;


export default function H17Chapter() {
  return (
    <ChapterWrapper
      chapterId="H17"
      bodyHtml={BODY_HTML}
      stylesCss={STYLES_CSS}
      scriptsJs={SCRIPTS_JS}
    />
  );
}

export const HRV_POGAVLJE_17 = null
