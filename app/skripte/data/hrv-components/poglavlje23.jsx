/**
 * H23 — H23 · Povijest hrvatskoga jezika — Maturiraj.hr · matura iz hrvatskog
 * Auto-generated from Maturiraj_Hrvatski_H23.html
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
<noscript>
    <div style="padding:24px;text-align:center;background:#dc322f;color:white;font-family:system-ui">
      <strong>JavaScript je potreban za rad ove stranice.</strong><br>
      Maturiraj.hr koristi interaktivne značajke (kviz, AI tutor, parser). Molim te omogući JavaScript u postavkama preglednika.
    </div>
  </noscript>
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
  <a class="sb-item" aria-current="page" data-code="h23" href="/skripte/hrv/h23"><span class="sb-dot"></span>H23 · Povijest hrv. jezika</a>
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
    <span id="sb-footer-pos">23 / 28</span> · <span id="sb-footer-title">povijest hrv. jezika</span>
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
    <span class="bc-cur">H23 · Povijest hrv. jezika</span>
    <span class="bc-sep bc-tab-sep">/</span>
    <span class="bc-tab" id="bc-tab">Teorija</span>
  </div>

  <!-- COUNTDOWN + ACTIONS -->
  <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:20px">
    <div class="countdown" style="margin-bottom:0">
      ⏳ Do ispita HRV: <strong id="cd-days">—</strong> dana &nbsp;<span style="font-size:9px;color:var(--t3)">(15. 6. 2026.)</span>
    </div>
    <button class="fcb" onclick="window.print()" style="font-size:10px" title="Print / PDF (Ctrl+P)">🖨 Print</button>
    <button class="fcb" onclick="navigator.share?navigator.share({title:'H23 · Povijest hrv. jezika',url:window.location.href}):navigator.clipboard.writeText(window.location.href)" style="font-size:10px" title="Podijeli">📤 Dijeli</button>
    <span style="font-family:var(--mono);font-size:9px;color:var(--t3);margin-left:auto">
      <span class="kbd">←</span> <span class="kbd">→</span> tabovi · <span class="kbd">?</span> pomoć
    </span>
  </div>

  <!-- HERO -->
  <header class="hero">
    <div class="hero-chapter">H23 &nbsp;·&nbsp; Jezikoslovlje &nbsp;·&nbsp; Povijest hrvatskoga jezika</div>
    <h1 class="hero-title">Povijest hrvatskoga jezika<br><span>od glagoljice do danas</span></h1>
    <p class="hero-sub">
      <strong>Sustavni pregled povijesti hrvatskoga jezika od 9. st. do danas.</strong> <em>5 razvojnih razdoblja</em>, <em>3 hrvatska pisma</em> (glagoljica, ćirilica, latinica), <em>ključni jezični spomenici</em> (Bašćanska ploča, Vinodolski zakonik, Povaljska listina). <strong>Identifikacija pisma</strong> — 25 vježbi, <em>30 kviz pitanja</em>, <strong>A4 referentna tablica</strong>.
    </p>
    <div class="hero-chips">
        <span class="pill p-pa hchip">📖 Teorija</span>
        <span class="pill p-br hchip">🕰 5 razdoblja</span>
        <span class="pill p-pa hchip">✍ 3 pisma</span>
        <span class="pill p-br hchip">📜 Najstariji spomenici (NCVVO ⭐)</span>
        <span class="pill p-pa hchip">🎯 Identifikacija pisma</span>
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
    <button class="tab" id="tab1" onclick="sw(1)" role="tab" aria-selected="false" aria-controls="l1">🕰 Razdoblja<span class="tab-done" id="td1"></span></button>
    <button class="tab" id="tab2" onclick="sw(2)" role="tab" aria-selected="false" aria-controls="l2">✍️ Pisma<span class="tab-done" id="td2"></span></button>
    <button class="tab" id="tab3" onclick="sw(3)" role="tab" aria-selected="false" aria-controls="l3">📜 Spomenici<span class="tab-done" id="td3"></span></button>
    <button class="tab" id="tab4" onclick="sw(4)" role="tab" aria-selected="false" aria-controls="l4">📚 Pojmovnik<span class="tab-done" id="td4"></span></button>
    <button class="tab" id="tab5" onclick="sw(5)" role="tab" aria-selected="false" aria-controls="l5">🎯 Identifikacija pisma<span class="tab-done" id="td5"></span></button>
    <button class="tab" id="tab6" onclick="sw(6)" role="tab" aria-selected="false" aria-controls="l6">🧠 Kviz<span class="tab-badge">30</span><span class="tab-done" id="td6"></span></button>
    <button class="tab" id="tab7" onclick="sw(7)" role="tab" aria-selected="false" aria-controls="l7">📊 Referentna tablica</button>
  </div>

  <!-- ══════════════════════════════════════
       TAB 0 · TEORIJA
  ══════════════════════════════════════ -->
  <div class="layer on" id="l0" role="tabpanel" tabindex="0">

    <!-- ═══════════════════════════════════
         DIAGNOSTIKA · 10 PITANJA
    ═══════════════════════════════════ -->
    <div class="diag-wrap" id="diag0" data-state="intro">
      
      <!-- INTRO STATE -->
      <div class="diag-intro">
        <div class="diag-icon">🎯</div>
        <div class="diag-intro-title">Brza dijagnostika</div>
        <div class="diag-intro-desc">10 pitanja · ~3 min · provjeri koliko znaš povijest hrv. jezika prije učenja.</div>
        <div class="diag-intro-actions">
          <button class="nb-btn primary" onclick="diag0Start()">🚀 Započni dijagnostiku</button>
          <button class="nb-btn" onclick="diag0Skip()">Preskoči</button>
        </div>
      </div>
      
      <!-- QUIZ STATE -->
      <div class="diag-quiz">
        <div class="diag-header">
          <div class="diag-lbl">Povijest hrv. jezika — dijagnostika</div>
          <div class="diag-progress-wrap"><div class="diag-progress-bar" id="d0fill"></div></div>
          <div class="diag-meta"><span id="d0num">Pitanje 1 / 10</span> · <span id="d0correct">0 točno</span></div>
        </div>
        <div class="diag-body">
          <div class="diag-q" id="d0text"></div>
          <div class="diag-opts" id="d0opts"></div>
        </div>
      </div>
      
      <!-- RESULT STATE -->
      <div class="diag-result">
        <div class="diag-result-inner">
          <div class="diag-result-icon">✨</div>
          <div class="diag-result-title" id="d0rtitle"></div>
          <div class="diag-result-desc" id="d0rdesc"></div>
          <div class="diag-result-actions">
            <button class="nb-btn primary" id="d0rbtn">Nastavi →</button>
            <button class="nb-btn" onclick="diag0Reset()">🔁 Ponovi</button>
          </div>
        </div>
      </div>
      
    </div>

    <!-- ═══════════════════════════════════
         20 NAJČEŠĆIH NCVVO GREŠAKA · POVIJEST HRV. JEZIKA
    ═══════════════════════════════════ -->
    <div class="sec-hdr" style="margin-top:36px"><div class="sec-line"></div><div class="sec-badge">⚠️ 20 najčešćih NCVVO grešaka</div><div class="sec-line"></div></div>
    
    <div style="padding:14px 16px;background:rgba(224,82,82,.04);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r2);margin:14px 0">
      <div style="font-size:13px;line-height:1.6;color:var(--t2)">
        <strong style="color:var(--red)">Sustavni popis grešaka iz povijesti hrvatskoga jezika.</strong> Pogledaj prije mature i izbjegavaj ih svjesno.
      </div>
    </div>
    
    <div style="display:grid;gap:8px;margin:16px 0">
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">1.</span>Bašćanska ploča ≠ Vinodolski zakonik</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>Bašćanska ploča</strong> (oko 1100., otok Krk) — najstariji spomenik na hrvatskom, glagoljica. <strong>Vinodolski zakonik</strong> (1288.) — najstariji pravni spomenik, glagoljica. RAZLIČITI dokumenti!</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">2.</span>Glagoljica ≠ ćirilica — različiti tvorci ⭐</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>Glagoljicu</strong> stvorili Ćiril i Metod (~863.). <strong>Ćirilicu</strong> nije stvorio Ćiril! Stvorili su je njegovi učenici (Klement Ohridski) krajem 9. st. nazvavši je po učitelju.</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">3.</span>Hrvatska redakcija ≠ srpska redakcija</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>Hrvatska redakcija</strong> staroslavenskog koristila se s glagoljicom u liturgiji. <strong>Srpska redakcija</strong> koristila ćirilicu. Različiti pravopisi i fonetske značajke.</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">4.</span>Ilirski pokret ≠ Hrvatski narodni preporod (često iste stvari)</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>Ilirski pokret</strong> i <strong>Hrvatski narodni preporod</strong> u praksi se često koriste kao SINONIMI za isti pokret (1830-1840-ih). Ilirski je naziv kojim se sami pokret zvao, „narodni preporod" je kasnija povijesna oznaka.</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">5.</span>Ljudevit Gaj — pravopisne reforme</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)">Gaj je 1830. uveo <strong>jedinstvenu hrvatsku latinicu</strong> s dijakritičkim znakovima (č, ć, š, ž, đ — dijelom po češkom uzoru). NIJE stvorio glagoljicu ili ćirilicu — reformirao je samo latinicu.</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">6.</span>Bečki dogovor 1850. — TKO i ZAŠTO ⭐</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>Bečki dogovor</strong> (1850.) potpisali hrvatski (Mažuranić, Demeter, Kukuljević, Pacel, Veber-Tkalčević) i srpski (Karadžić, Daničić, Miklošič) književnici. Cilj: jedinstveni književni jezik na štokavskoj osnovi (jugozapadno štokavski/(i)jekavski). Hrvati su zadržali latinicu, Srbi ćirilicu.</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1);border-left:3px solid var(--red)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">7.</span>Tri narječja: kajkavski, čakavski, štokavski</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>Kajkavski</strong> — sjeverozapadna Hrvatska (Zagreb, Varaždin). <strong>Čakavski</strong> — primorska Hrvatska (Istra, Dalmacija, otoci). <strong>Štokavski</strong> — istočna i južna Hrvatska, Slavonija, BiH. Standardni hrvatski jezik baziran je na štokavskom (i)jekavskom.</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">8.</span>Bartol Kašić — prva gramatika 1604.</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>Bartol Kašić</strong>, isusovac, objavio je <em>„Institutionum linguae illyricae libri duo"</em> (1604.) — prva gramatika hrvatskog jezika. Tiskana u Rimu, na latinskom, opisuje hrvatski jezik (štokavski).</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">9.</span>Misal po zakonu rimskoga dvora 1483.</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>Misal po zakonu rimskoga dvora</strong> (22. veljače 1483.) — prva tiskana hrvatska knjiga. Pisana glagoljicom, hrvatsko-staroslavenskim jezikom. Samo 28 godina nakon Gutenbergove Biblije!</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">10.</span>Deklaracija 1967. ⭐</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>Deklaracija o nazivu i položaju hrvatskoga književnoga jezika</strong> (17. ožujka 1967.) potpisana od 130 hrvatskih intelektualaca i kulturnih ustanova. Branjila je samostalnost hrvatskoga jezika protiv srpskohrvatskog unitarizma. NCVVO TOP TEMA.</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">11.</span>Hrvatski pravopis Ivana Broza 1892.</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>Ivan Broz</strong>, „Hrvatski pravopis" (1892.) — službeni hrvatski pravopis temeljen na fonetskim načelima. Bio temelj za sve kasnije pravopise. Iva Broz je nećak Vatroslava Jagića.</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">12.</span>Maretić — gramatika i (i)jekavski standard</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>Tomislav Maretić</strong> — „Gramatika i stilistika hrvatskoga ili srpskoga književnog jezika" (1899.). Učvrstio je štokavski (i)jekavski kao standardnu osnovicu. Iako naziv „hrvatski ili srpski", djelo je hrvatsko.</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">13.</span>Novosadski dogovor 1954. — kontroverzan</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>Novosadski dogovor</strong> (1954.) htio je nametnuti zajednički „srpskohrvatski" jezik. Hrvatski je strana protestirala protiv hegemonije. Konačno je odbačen Deklaracijom 1967.</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">14.</span>Ekavski, ijekavski, ikavski — refleksi „jat"</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)">Tri refleksa staroslavenskog „jat": <strong>ekavski</strong> (mleko, vreme — Srbija), <strong>ijekavski</strong> (mlijeko, vrijeme — Hrvatska, Crna Gora), <strong>ikavski</strong> (mliko, vrime — Dalmacija, BiH). Hrvatski standard = ijekavski.</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">15.</span>Zagrebačka filološka škola</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>Zagrebačka filološka škola</strong> (sredina 19. st.) — branila je hrvatsku jezičnu tradiciju i morfonološka pravopisna načela. Predstavnici: <strong>Adolfo Veber-Tkalčević</strong>. Suprotno: Vukova škola (fonetski pravopis).</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">16.</span>Vinodolski zakonik 1288. — pravo na hrvatskom</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>Vinodolski zakonik</strong> (1288.) — najstariji slavenski pravni spomenik na narodnom jeziku. Pisan glagoljicom, čakavskom hrvatskom. Sadrži zakonik vinodolske gospode.</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">17.</span>Hrvatska latinica — dijakritički znakovi</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)">Hrvatska latinica (gajica) ima 30 slova. Posebnosti: <strong>č, ć, dž, đ, lj, nj, š, ž</strong>. Nastala je od češkog uzora (Husovi reforama) i tradicije starije hrvatske latinice (od 14. st.).</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">18.</span>Šafarik, Kollar — slavenistički kontekst</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>Pavel Jozef Šafárik</strong> i <strong>Ján Kollár</strong> — slovački slavisti koji utjecali su na razvoj slavenskih književnosti. Bitni za kontekst razdoblja narodnog preporoda.</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">19.</span>Babić-Finka-Moguš pravopis</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>Stjepan Babić, Božidar Finka, Milan Moguš</strong> — autori suvremenog hrvatskog pravopisa (1971., više izdanja). Bitan za moderno standardiziranje. Kasnije zamijenjen pravopisom Instituta za hrvatski jezik (IHJJ).</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">20.</span>IHJJ — Institut za hrvatski jezik i jezikoslovlje</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>Institut za hrvatski jezik i jezikoslovlje</strong> (IHJJ, Zagreb) — službena znanstvena ustanova za normiranje hrvatskog jezika. Objavio „Hrvatski pravopis" (2013.) koji je danas službeni standardni pravopis u školama.</div>
      </details>
      
    </div><!-- UPGRADE: MNEMOTEHNIKE (POVIJEST HRV. JEZIKA) -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">🧠 Mnemotehnike · za brzo pamćenje</div><div class="sec-line"></div></div>
    
    <div style="padding:18px;background:linear-gradient(135deg,rgba(233,180,70,.06),transparent);border:1px solid var(--bd);border-radius:var(--r2);margin:14px 0">
      <div style="font-size:13px;line-height:1.7;color:var(--t2);font-family:var(--serif)">
        Najteže za pamćenje su DATUMI i IMENA — evo trikova koji ti pomažu da ih zapamtiš jednom za uvijek.
      </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:10px;margin:16px 0">
      
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
        <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--gold);margin-bottom:6px">1100. = BAŠĆA</div>
        <div style="font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:8px">Bašćanska ploča</div>
        <div style="font-size:12px;color:var(--t2);line-height:1.6">
          <strong>1100. = okruglo tisuću sto</strong>. Pamti kao "JEDAN-JEDAN-NULA-NULA". Najstariji hrvatski spomenik, otok Krk.
        </div>
      </div>
      
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
        <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--blue);margin-bottom:6px">1483. = TISKARA</div>
        <div style="font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:8px">Misal 1483.</div>
        <div style="font-size:12px;color:var(--t2);line-height:1.6">
          <strong>14-83 = Gutenberg + 28 godina</strong>. Misal po zakonu rimskoga dvora — prva tiskana hrvatska knjiga, glagoljica.
        </div>
      </div>
      
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
        <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--bronze);margin-bottom:6px">1604. = KAŠ-O-ČETIRI</div>
        <div style="font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:8px">Kašićeva gramatika</div>
        <div style="font-size:12px;color:var(--t2);line-height:1.6">
          <strong>16-04 = Kašić-04 = četiri</strong>. Bartol Kašić, prva gramatika hrvatskog. Tiskana u Rimu na latinskom.
        </div>
      </div>
      
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
        <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--red);margin-bottom:6px">1850. = BEČ-50</div>
        <div style="font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:8px">Bečki dogovor</div>
        <div style="font-size:12px;color:var(--t2);line-height:1.6">
          <strong>1850. = pola 19. st.</strong>. Hrvatski + srpski književnici — zajednički standard na štokavskoj osnovi.
        </div>
      </div>
      
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
        <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:#9b59b6;margin-bottom:6px">1892. = BROZ-92</div>
        <div style="font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:8px">Broz pravopis</div>
        <div style="font-size:12px;color:var(--t2);line-height:1.6">
          <strong>1892. = Broz-92</strong>. Ivan Broz, „Hrvatski pravopis" — fonetska načela, temelj za sve kasnije.
        </div>
      </div>
      
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
        <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--green);margin-bottom:6px">1967. = DEKLARACIJA</div>
        <div style="font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:8px">Deklaracija ⭐</div>
        <div style="font-size:12px;color:var(--t2);line-height:1.6">
          <strong>1967. = Sloboda za hrv. jezik</strong>. Deklaracija o nazivu i položaju hrvatskoga književnoga jezika. NCVVO TOP TEMA.
        </div>
      </div>
      
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
        <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--blue);margin-bottom:6px">G-Č-L = GLAGOLJICA-ĆIRILICA-LATINICA</div>
        <div style="font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:8px">3 pisma kronološki</div>
        <div style="font-size:12px;color:var(--t2);line-height:1.6">
          <strong>G-Č-L</strong>: Glagoljica (9. st.) → Ćirilica (kraj 9. st.) → Latinica (od 12. st., dominantna od 16.).
        </div>
      </div>
      
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
        <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--bronze);margin-bottom:6px">KČŠ = KAJKAVSKI-ČAKAVSKI-ŠTOKAVSKI</div>
        <div style="font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:8px">3 narječja</div>
        <div style="font-size:12px;color:var(--t2);line-height:1.6">
          <strong>KČŠ</strong> po pitanju „što": <em>Kaj</em> (kajkavski, sjever) — <em>Ča</em> (čakavski, primorje) — <em>Što</em> (štokavski, jug). Standard = štokavski.
        </div>
      </div>
      
    </div>

    <!-- NAV ROW -->
    <div class="nav-row" style="justify-content:flex-end">
      <span class="nb-btn primary" onclick="sw(1)">🕰 Razdoblja →</span>
    </div>

  
    <div class="cheat-card" style="margin-top:24px">
      <div class="cheat-hdr">
        <div class="cheat-hdr-l">
          <div class="cheat-eye">SLJEDEĆE</div>
          <div class="cheat-ttl">Tab 1 · Razdoblja hrvatskog jezika</div>
        </div>
      </div>
      <div class="cheat-grid">
        <div class="cheat-col cheat-col-wide" style="font-family:var(--serif,Fraunces,serif);font-size:13.5px;color:var(--t2,#c5b8aa);line-height:1.65">
          <p style="margin:0">Sad kad znaš kontekst — <b>Tab 1</b> donosi razdoblja: praslavenski, staroslavenski, srednjovjekovni hrvatski, hrvatski standardni jezik.</p>
        </div>
      </div>
    </div>

    </div><!-- /l0 -->

  <div class="layer" id="l1" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-pa hchip">🕰 5 razdoblja</span>
      <span class="pill p-br hchip">⏳ Vremenska crta</span>
      <span class="pill p-pa hchip">📜 Najstariji spomenici</span>
    </div>

    <!-- ─────────────── PREGLED ─────────────── -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">📋 Pregled · 5 razdoblja hrvatskog jezika</div><div class="sec-line"></div></div>
    
    <div class="box-int">
      <div class="box-int-lbl">🔑 Što ćeš naučiti</div>
      <div class="box-int-txt">
        Razvoj hrvatskoga jezika podijeljen je u <strong>5 ključnih razdoblja</strong> — od staroslavenskih korijena do modernog standardnog jezika. Svako razdoblje ima karakteristična pisma, spomenike i jezične promjene.
      </div>
    </div>

    <div class="table-wrap">
      <table style="width:100%;border-collapse:collapse;font-family:var(--mono);font-size:12.5px">
        <thead>
          <tr style="background:var(--ele);border-bottom:2px solid var(--gold)">
            <th style="padding:10px;text-align:left;color:var(--gold);font-size:10.5px;letter-spacing:1px">RAZDOBLJE</th>
            <th style="padding:10px;text-align:left;color:var(--gold);font-size:10.5px;letter-spacing:1px">VRIJEME</th>
            <th style="padding:10px;text-align:left;color:var(--gold);font-size:10.5px;letter-spacing:1px">PISMO</th>
            <th style="padding:10px;text-align:left;color:var(--gold);font-size:10.5px;letter-spacing:1px">KLJUČNI SPOMENIK</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px 10px;color:var(--blue);font-weight:700">1. Predknjiževno</td><td style="padding:8px 10px">do 9. st.</td><td style="padding:8px 10px;font-style:italic">—</td><td style="padding:8px 10px;font-style:italic">usmena predaja</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px 10px;color:var(--green);font-weight:700">2. Staroslavensko</td><td style="padding:8px 10px">9.–11. st.</td><td style="padding:8px 10px;font-style:italic">glagoljica</td><td style="padding:8px 10px;font-style:italic">Bašćanska ploča (~1100.)</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px 10px;color:var(--bronze);font-weight:700">3. Srednjovjekovno</td><td style="padding:8px 10px">12.–15. st.</td><td style="padding:8px 10px;font-style:italic">glagoljica + bosančica</td><td style="padding:8px 10px;font-style:italic">Vinodolski zakonik (1288.)</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px 10px;color:var(--red);font-weight:700">4. Predstandardno</td><td style="padding:8px 10px">16.–18. st.</td><td style="padding:8px 10px;font-style:italic">latinica + glagoljica</td><td style="padding:8px 10px;font-style:italic">Kašićeva gramatika (1604.)</td></tr>
          <tr><td style="padding:8px 10px;color:#9b59b6;font-weight:700">5. Standardno</td><td style="padding:8px 10px">19. st.–danas</td><td style="padding:8px 10px;font-style:italic">latinica</td><td style="padding:8px 10px;font-style:italic">Brozov pravopis (1892.)</td></tr>
        </tbody>
      </table>
    </div>

    <!-- ─────────────── DETALJI RAZDOBLJA ─────────────── -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">🔍 Detalji svakog razdoblja · klikni karticu</div><div class="sec-line"></div></div>

    <div class="scene-grid">
      
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-head">
          <div class="scene-badge" style="background:var(--blue);color:#fff">1</div>
          <div class="scene-ttl">
            <div class="scene-name">PREDKNJIŽEVNO RAZDOBLJE</div>
            <div class="scene-sub">do 9. stoljeća · usmena predaja</div>
          </div>
          <div class="scene-arrow">▾</div>
        </div>
        <div class="scene-body">
          <p><strong>📜 Razdoblje:</strong> doseljenje Hrvata na sadašnje područje (7. st.) do prvih pisanih spomenika.</p>
          <p><strong>🔑 Karakteristike:</strong></p>
          <ul>
            <li>Hrvati doseljavaju na područje današnje Hrvatske u 7. st. (s ostalim Slavenima)</li>
            <li>Govori se <strong>praslavenski jezik</strong> — zajednički predak svih slavenskih jezika</li>
            <li><strong>Nema pisanih spomenika</strong> — samo usmena predaja</li>
            <li>Postupno se razvijaju regionalne razlike koje će se pretvoriti u <strong>tri narječja</strong>: kajkavski, čakavski, štokavski</li>
          </ul>
        </div>
      </div>

      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-head">
          <div class="scene-badge" style="background:var(--green);color:#fff">2</div>
          <div class="scene-ttl">
            <div class="scene-name">STAROSLAVENSKO RAZDOBLJE</div>
            <div class="scene-sub">9.–11. st. · glagoljica · Ćiril i Metod</div>
          </div>
          <div class="scene-arrow">▾</div>
        </div>
        <div class="scene-body">
          <p><strong>📜 Razdoblje:</strong> dolazak braće Ćirila i Metoda (863.) i razvoj prvog slavenskog književnog jezika.</p>
          <p><strong>🔑 Ključni događaji:</strong></p>
          <ul>
            <li><strong>863.</strong> — Ćiril i Metod dolaze u Veliku Moravsku, donose <strong>glagoljicu</strong> i staroslavenski jezik</li>
            <li><strong>879.</strong> — Papa Ivan VIII. odobrava staroslavensku liturgiju (jedinstveno u zapadnoj crkvi!)</li>
            <li>Hrvati prihvaćaju glagoljicu i razvijaju <strong>hrvatsku redakciju staroslavenskog</strong> (HCSJ)</li>
            <li><strong>~1100.</strong> — Bašćanska ploča (otok Krk) — najstariji hrvatski spomenik</li>
          </ul>
          <p><strong>📝 Hrvatski crkvenoslavenski jezik (HCSJ):</strong></p>
          <ul>
            <li>Staroslavenski jezik s domaćim hrvatskim jezičnim crtama</li>
            <li>Koristio se u liturgiji do 20. st.!</li>
            <li>Pisan glagoljicom (uglatom hrvatskom)</li>
          </ul>
        </div>
      </div>

      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-head">
          <div class="scene-badge" style="background:var(--bronze);color:#fff">3</div>
          <div class="scene-ttl">
            <div class="scene-name">SREDNJOVJEKOVNO RAZDOBLJE</div>
            <div class="scene-sub">12.–15. st. · razvoj književnih oblika</div>
          </div>
          <div class="scene-arrow">▾</div>
        </div>
        <div class="scene-body">
          <p><strong>📜 Razdoblje:</strong> procvat hrvatske glagoljaške književnosti, rana pravna djela.</p>
          <p><strong>🔑 Ključni spomenici:</strong></p>
          <ul>
            <li><strong>1288. — Vinodolski zakonik</strong> — najstariji slavenski pravni spomenik na narodnom jeziku, glagoljica, čakavski</li>
            <li><strong>1483. — Misal po zakonu rimskoga dvora</strong> — prva tiskana hrvatska knjiga, glagoljica</li>
            <li><strong>Bosančica</strong> — bosanska redakcija ćirilice, koristila se u Bosni i Dubrovniku</li>
            <li>Razvija se <strong>narodni jezik</strong> u književnosti — pjesme, romani, putopisi</li>
          </ul>
          <p><strong>📚 Tri pisma istovremeno:</strong> glagoljica (Istra, Dalmacija), bosančica (Bosna, južna Hrvatska), latinica (od 14. st., postupno).</p>
        </div>
      </div>

      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-head">
          <div class="scene-badge" style="background:var(--red);color:#fff">4</div>
          <div class="scene-ttl">
            <div class="scene-name">PREDSTANDARDNO RAZDOBLJE</div>
            <div class="scene-sub">16.–18. st. · prve gramatike, leksikografija</div>
          </div>
          <div class="scene-arrow">▾</div>
        </div>
        <div class="scene-body">
          <p><strong>📜 Razdoblje:</strong> postupno standardiziranje hrvatskoga jezika kroz gramatike i rječnike.</p>
          <p><strong>🔑 Ključna djela:</strong></p>
          <ul>
            <li><strong>1604. — Bartol Kašić: „Institutionum linguae illyricae"</strong> — prva hrvatska gramatika</li>
            <li><strong>1631. — Faust Vrančić: „Dictionarium..."</strong> — peterojezični rječnik</li>
            <li><strong>1740. — Pavao Ritter Vitezović: „Lexicon"</strong> — etimološki rječnik</li>
            <li><strong>1740-ih — Andrija Della Bella, Ardelio Della Bella</strong> — gramatika i rječnik</li>
            <li><strong>1801. — Joakim Stulli: „Lexicon"</strong> — najveći rječnik 18. st.</li>
          </ul>
          <p><strong>🔄 Latinica postaje dominantna:</strong> glagoljica se postupno napušta, latinica preuzima primat (s razvojem tiska).</p>
        </div>
      </div>

      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-head">
          <div class="scene-badge" style="background:#9b59b6;color:#fff">5</div>
          <div class="scene-ttl">
            <div class="scene-name">STANDARDNO RAZDOBLJE</div>
            <div class="scene-sub">19. st.–danas · standardizacija, narodni preporod</div>
          </div>
          <div class="scene-arrow">▾</div>
        </div>
        <div class="scene-body">
          <p><strong>📜 Razdoblje:</strong> oblikovanje suvremenog hrvatskoga književnoga jezika.</p>
          <p><strong>🔑 Ključni događaji:</strong></p>
          <ul>
            <li><strong>1830. — Ljudevit Gaj</strong> — reforma latinice (gajica, dijakritički znakovi)</li>
            <li><strong>1830-1840-ih — Hrvatski narodni preporod (Ilirski pokret)</strong> — buđenje nacionalne svijesti</li>
            <li><strong>1850. — Bečki dogovor</strong> — hrv. + srp. književnici, štokavska osnova</li>
            <li><strong>1892. — Ivan Broz: „Hrvatski pravopis"</strong> — fonetski pravopis</li>
            <li><strong>1899. — Tomislav Maretić</strong> — gramatika, učvršćenje (i)jekavskog standarda</li>
            <li><strong>1954. — Novosadski dogovor</strong> — neuspješni pokušaj zajedničkog srpskohrvatskog</li>
            <li><strong>1967. — Deklaracija ⭐</strong> — branjena samostalnost hrvatskog jezika</li>
            <li><strong>1971. — Babić-Finka-Moguš pravopis</strong></li>
            <li><strong>1991. — samostalna Hrvatska</strong>, službeni hrvatski jezik</li>
            <li><strong>2013. — IHJJ pravopis</strong> — službeni standardni pravopis</li>
          </ul>
        </div>
      </div>

    </div>

    <!-- NAV ROW -->
    
    <!-- VIDEO RESURSI — v3.5 -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">Video resursi</div><div class="sec-line"></div></div>

    <div class="prose">Kada ti tekst nije dovoljan — vizualni učenici često bolje pamte kroz video objašnjenja i predstave. Ovdje su pouzdani edukacijski resursi na YouTubeu.</div>

    <div class="yt-grid">
      <a class="yt-card" href="https://www.youtube.com/results?search_query=povijest+hrvatskog+jezika+glagoljica+standardizacija+matura" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇭🇷</span> HR</div>
          <div class="yt-title">Povijest hrv. jezika — glagoljica do danas</div>
        </div>
      </a>

      <a class="yt-card" href="https://www.youtube.com/results?search_query=Bašćanska+ploča+glagoljica+Bečki+dogovor+Brozov+pravopis" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇭🇷</span> HR</div>
          <div class="yt-title">Bašćanska ploča i standardizacija</div>
        </div>
      </a>

      <a class="yt-card" href="https://www.youtube.com/results?search_query=Glagolitic+script+Cyril+Methodius+Slavic+history" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇬🇧</span> EN</div>
          <div class="yt-title">Glagolitic script — Cyril &amp; Methodius</div>
        </div>
      </a>

      <a class="yt-card" href="https://www.youtube.com/results?search_query=history+Croatian+language+standardization+Illyrian" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🎬</span> EN</div>
          <div class="yt-title">Croatian language history — overview</div>
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

<div class="nav-row" style="margin-top:32px;display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap">
      <button class="nb-btn" onclick="sw(0)">← Teorija</button>
      <button class="nb-btn primary" onclick="sw(2)">Pisma →</button>
    </div>
  </div><!-- /l1 -->

  <div class="layer" id="l2" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-pa hchip">✍ 3 pisma</span>
      <span class="pill p-br hchip">📜 Glagoljica</span>
      <span class="pill p-pa hchip">📖 Ćirilica</span>
      <span class="pill p-br hchip">🅰 Latinica</span>
    </div>

    <!-- ─────────────── PREGLED PISAMA ─────────────── -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">📋 Pregled · 3 pisma hrvatskoga jezika</div><div class="sec-line"></div></div>
    
    <div class="box-int">
      <div class="box-int-lbl">🔑 Tri pisma kroz povijest</div>
      <div class="box-int-txt">
        Hrvati su tijekom povijesti koristili <strong>tri pisma</strong>: glagoljicu (od 9. st.), bosančicu/ćirilicu (od kasnog 9. st.) i latinicu (od 12. st., dominantna od 16.). Glagoljica i bosančica postupno su nestale, dok je <strong>latinica danas isključivo pismo</strong> hrvatskog standardnog jezika.
      </div>
    </div>

    <div class="table-wrap">
      <table style="width:100%;border-collapse:collapse;font-family:var(--mono);font-size:12.5px">
        <thead>
          <tr style="background:var(--ele);border-bottom:2px solid var(--gold)">
            <th style="padding:10px;text-align:left;color:var(--gold);font-size:10.5px">PISMO</th>
            <th style="padding:10px;text-align:left;color:var(--gold);font-size:10.5px">VRIJEME</th>
            <th style="padding:10px;text-align:left;color:var(--gold);font-size:10.5px">TVORAC</th>
            <th style="padding:10px;text-align:left;color:var(--gold);font-size:10.5px">NAJSTARIJI HRV. SPOMENIK</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px 10px;color:var(--green);font-weight:700">Glagoljica</td><td style="padding:8px 10px">~863. — danas u liturgiji</td><td style="padding:8px 10px;font-style:italic">Ćiril i Metod</td><td style="padding:8px 10px;font-style:italic">Bašćanska ploča (~1100.)</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px 10px;color:var(--blue);font-weight:700">Bosančica</td><td style="padding:8px 10px">12.–19. st.</td><td style="padding:8px 10px;font-style:italic">učenici Ćirila i Metoda</td><td style="padding:8px 10px;font-style:italic">Povaljska listina (~1185.)</td></tr>
          <tr><td style="padding:8px 10px;color:var(--bronze);font-weight:700">Latinica</td><td style="padding:8px 10px">12. st. — danas (jedino)</td><td style="padding:8px 10px;font-style:italic">Rim (klasično)</td><td style="padding:8px 10px;font-style:italic">Red i zakon sestara dominikanki (1345.)</td></tr>
        </tbody>
      </table>
    </div>

    
    <!-- ═══════════════════════════════════
         SVG ABECEDE · usporedba pisama (NEW)
    ═══════════════════════════════════ -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">🔤 Abecede · vizualna usporedba</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">👁 Vidi razliku</div>
      <div class="box-int-txt">
        Tri pisma su <strong>vizualno potpuno različita</strong>. Glagoljica ima zaobljene/uglate originalne oblike, ćirilica je izvedena iz grčkog, a latinica iz rimskog. Klikni karticu za uvećanje.
      </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:14px;margin:18px 0">

      <!-- GLAGOLJICA -->
      <div class="abc-card" onclick="abcZoom(this)">
        <div class="abc-head">
          <div class="abc-pill" style="background:rgba(80,200,120,.12);color:var(--green);border-color:var(--green)">UGLATA GLAGOLJICA</div>
          <div class="abc-zoom">⊕</div>
        </div>
        <div class="abc-svg-wrap">
          <svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
            <style>
              .gl-glyph{fill:none;stroke:#50c878;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}
              .gl-lbl{font-family:var(--mono);font-size:10px;fill:#7a8694;text-anchor:middle}
            </style>
            <!-- Row 1 -->
            <g transform="translate(20,10)">
              <!-- A (azъ) -->
              <g><path class="gl-glyph" d="M10,30 L18,8 L26,30 M14,22 L22,22"/><text class="gl-lbl" x="18" y="50">A</text></g>
              <!-- B (buky) -->
              <g transform="translate(40,0)"><path class="gl-glyph" d="M10,8 L10,32 M10,8 Q22,8 22,16 Q22,22 10,22 Q24,22 24,28 Q24,32 10,32"/><text class="gl-lbl" x="17" y="50">B</text></g>
              <!-- V (věde) -->
              <g transform="translate(80,0)"><circle class="gl-glyph" cx="14" cy="14" r="6"/><circle class="gl-glyph" cx="14" cy="26" r="6"/><text class="gl-lbl" x="14" y="50">V</text></g>
              <!-- G (glagoli) -->
              <g transform="translate(120,0)"><circle class="gl-glyph" cx="14" cy="20" r="8"/><path class="gl-glyph" d="M14,8 L14,32"/><text class="gl-lbl" x="14" y="50">G</text></g>
              <!-- D (dobro) -->
              <g transform="translate(160,0)"><rect class="gl-glyph" x="8" y="14" width="14" height="14"/><path class="gl-glyph" d="M15,14 L15,8"/><text class="gl-lbl" x="15" y="50">D</text></g>
              <!-- E (estъ) -->
              <g transform="translate(200,0)"><circle class="gl-glyph" cx="14" cy="20" r="8"/><circle class="gl-glyph" cx="14" cy="20" r="3"/><text class="gl-lbl" x="14" y="50">E</text></g>
              <!-- Ž (živete) -->
              <g transform="translate(240,0)"><path class="gl-glyph" d="M8,8 L20,32 M20,8 L8,32 M14,8 L14,32"/><text class="gl-lbl" x="14" y="50">Ž</text></g>
              <!-- Z (zemlja) -->
              <g transform="translate(280,0)"><circle class="gl-glyph" cx="14" cy="14" r="5"/><path class="gl-glyph" d="M9,18 L19,28 M14,19 L14,32"/><text class="gl-lbl" x="14" y="50">Z</text></g>
            </g>
            <!-- Row 2 -->
            <g transform="translate(20,75)">
              <!-- I (iže) -->
              <g><path class="gl-glyph" d="M14,8 L14,32 M8,16 L20,16 M8,24 L20,24"/><text class="gl-lbl" x="14" y="50">I</text></g>
              <!-- K (kako) -->
              <g transform="translate(40,0)"><circle class="gl-glyph" cx="10" cy="14" r="4"/><circle class="gl-glyph" cx="10" cy="26" r="4"/><path class="gl-glyph" d="M14,14 L22,8 M14,26 L22,32"/><text class="gl-lbl" x="14" y="50">K</text></g>
              <!-- L (ljudi) -->
              <g transform="translate(80,0)"><path class="gl-glyph" d="M8,32 Q8,8 14,8 Q20,8 20,32"/><circle class="gl-glyph" cx="14" cy="20" r="3"/><text class="gl-lbl" x="14" y="50">L</text></g>
              <!-- M (myslete) -->
              <g transform="translate(120,0)"><path class="gl-glyph" d="M8,32 L8,8 L14,18 L20,8 L20,32"/><text class="gl-lbl" x="14" y="50">M</text></g>
              <!-- N (našъ) -->
              <g transform="translate(160,0)"><circle class="gl-glyph" cx="10" cy="14" r="4"/><circle class="gl-glyph" cx="20" cy="26" r="4"/><path class="gl-glyph" d="M10,18 L20,22"/><text class="gl-lbl" x="15" y="50">N</text></g>
              <!-- O (onъ) -->
              <g transform="translate(200,0)"><circle class="gl-glyph" cx="14" cy="20" r="9"/><circle class="gl-glyph" cx="14" cy="20" r="4"/><text class="gl-lbl" x="14" y="50">O</text></g>
              <!-- P (pokoj) -->
              <g transform="translate(240,0)"><path class="gl-glyph" d="M8,32 L8,12 Q8,8 14,8 Q20,8 20,12 L20,32 M8,18 L20,18"/><text class="gl-lbl" x="14" y="50">P</text></g>
              <!-- R (rci) -->
              <g transform="translate(280,0)"><path class="gl-glyph" d="M10,8 L10,32"/><circle class="gl-glyph" cx="16" cy="14" r="5"/><text class="gl-lbl" x="14" y="50">R</text></g>
            </g>
            <!-- Row 3 sample -->
            <g transform="translate(60,140)">
              <text style="font-family:var(--serif);font-size:14px;fill:#a0a8b4;font-style:italic">+ još 22 znaka u izvornoj abecedi</text>
            </g>
          </svg>
        </div>
        <div class="abc-meta">
          <div><strong>38 znakova</strong> · originalna slavenska</div>
          <div style="color:var(--t3);font-size:11px">Tvorci: Ćiril i Metod, ~863.</div>
        </div>
      </div>

      <!-- ĆIRILICA -->
      <div class="abc-card" onclick="abcZoom(this)">
        <div class="abc-head">
          <div class="abc-pill" style="background:rgba(74,144,217,.12);color:var(--blue);border-color:var(--blue)">ĆIRILICA · BOSANČICA</div>
          <div class="abc-zoom">⊕</div>
        </div>
        <div class="abc-svg-wrap">
          <svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
            <style>
              .ci-glyph{font-family:'Times New Roman',Georgia,serif;font-size:30px;fill:#4a90d9;font-weight:600;text-anchor:middle}
              .ci-lbl{font-family:var(--mono);font-size:10px;fill:#7a8694;text-anchor:middle}
            </style>
            <!-- Row 1 -->
            <g transform="translate(20,10)">
              <text class="ci-glyph" x="18" y="32">А</text><text class="ci-lbl" x="18" y="50">A</text>
              <text class="ci-glyph" x="58" y="32">Б</text><text class="ci-lbl" x="58" y="50">B</text>
              <text class="ci-glyph" x="98" y="32">В</text><text class="ci-lbl" x="98" y="50">V</text>
              <text class="ci-glyph" x="138" y="32">Г</text><text class="ci-lbl" x="138" y="50">G</text>
              <text class="ci-glyph" x="178" y="32">Д</text><text class="ci-lbl" x="178" y="50">D</text>
              <text class="ci-glyph" x="218" y="32">Е</text><text class="ci-lbl" x="218" y="50">E</text>
              <text class="ci-glyph" x="258" y="32">Ж</text><text class="ci-lbl" x="258" y="50">Ž</text>
              <text class="ci-glyph" x="298" y="32">З</text><text class="ci-lbl" x="298" y="50">Z</text>
            </g>
            <!-- Row 2 -->
            <g transform="translate(20,75)">
              <text class="ci-glyph" x="18" y="32">И</text><text class="ci-lbl" x="18" y="50">I</text>
              <text class="ci-glyph" x="58" y="32">К</text><text class="ci-lbl" x="58" y="50">K</text>
              <text class="ci-glyph" x="98" y="32">Л</text><text class="ci-lbl" x="98" y="50">L</text>
              <text class="ci-glyph" x="138" y="32">М</text><text class="ci-lbl" x="138" y="50">M</text>
              <text class="ci-glyph" x="178" y="32">Н</text><text class="ci-lbl" x="178" y="50">N</text>
              <text class="ci-glyph" x="218" y="32">О</text><text class="ci-lbl" x="218" y="50">O</text>
              <text class="ci-glyph" x="258" y="32">П</text><text class="ci-lbl" x="258" y="50">P</text>
              <text class="ci-glyph" x="298" y="32">Р</text><text class="ci-lbl" x="298" y="50">R</text>
            </g>
            <g transform="translate(60,140)">
              <text style="font-family:var(--serif);font-size:14px;fill:#a0a8b4;font-style:italic">+ С,Т,У,Ф,Х,Ц,Ч,Ш и dr. (43 ukupno)</text>
            </g>
          </svg>
        </div>
        <div class="abc-meta">
          <div><strong>43 znaka</strong> · iz grčkog uncijala</div>
          <div style="color:var(--t3);font-size:11px">Klement Ohridski, kraj 9. st.</div>
        </div>
      </div>

      <!-- LATINICA -->
      <div class="abc-card" onclick="abcZoom(this)">
        <div class="abc-head">
          <div class="abc-pill" style="background:rgba(180,130,80,.12);color:var(--bronze);border-color:var(--bronze)">HRVATSKA LATINICA · GAJICA</div>
          <div class="abc-zoom">⊕</div>
        </div>
        <div class="abc-svg-wrap">
          <svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
            <style>
              .la-glyph{font-family:Georgia,'Times New Roman',serif;font-size:28px;fill:#b48250;font-weight:600;text-anchor:middle}
              .la-glyph-special{font-family:Georgia,'Times New Roman',serif;font-size:28px;fill:#e9b446;font-weight:700;text-anchor:middle}
              .la-lbl{font-family:var(--mono);font-size:10px;fill:#7a8694;text-anchor:middle}
              .la-lbl-special{font-family:var(--mono);font-size:10px;fill:#e9b446;text-anchor:middle;font-weight:700}
            

/* SVG ABECEDE · pisma vizualizacija */
.abc-card{
  padding:14px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r1);
  cursor:pointer;
  transition:all .25s ease;
}
.abc-card:hover{
  border-color:var(--gold);
  background:linear-gradient(135deg, var(--ele), rgba(233,180,70,.04));
  transform:translateY(-2px);
  box-shadow:0 8px 24px rgba(0,0,0,.2);
}
.abc-head{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:12px;
}
.abc-pill{
  font-family:var(--mono);
  font-size:9.5px;
  letter-spacing:1.5px;
  padding:5px 10px;
  border-radius:99px;
  border:1px solid;
  font-weight:700;
}
.abc-zoom{
  font-size:18px;
  color:var(--t3);
  transition:all .2s ease;
}
.abc-card:hover .abc-zoom{
  color:var(--gold);
  transform:scale(1.2);
}
.abc-svg-wrap{
  background:rgba(255,255,255,.03);
  border-radius:var(--r1);
  padding:8px;
  margin-bottom:12px;
}
.abc-meta{
  display:flex;
  flex-direction:column;
  gap:4px;
  font-size:12px;
  color:var(--t2);
}

/* Modal expand */
.abc-modal{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,.85);
  z-index:9999;
  display:none;
  align-items:center;
  justify-content:center;
  padding:20px;
  cursor:pointer;
  animation:abcFade .25s ease;
}
.abc-modal.on{display:flex}
.abc-modal-inner{
  background:var(--bg);
  border:1px solid var(--gold);
  border-radius:var(--r2);
  max-width:900px;
  width:100%;
  padding:24px;
  box-shadow:0 20px 60px rgba(0,0,0,.6);
}
@keyframes abcFade{from{opacity:0}to{opacity:1}}

@media (max-width:640px){
  .abc-pill{font-size:9px}
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
.chapter-nav-prev{
  text-align:left;
}
.chapter-nav-next{
  text-align:right;
  flex-direction:row;
}
.chapter-nav-next .chapter-nav-meta{
  flex:1;
}
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
.chapter-nav-pill-next{
  color:var(--gold);
}
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

/* Related chapters */
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
  .chapter-nav-grid{
    grid-template-columns:1fr;
  }
  .chapter-nav-next{
    flex-direction:row;
  }
}


/* ═══════════════════════════════════
   ORIGINALNI TEKSTOVI · audio cards
═══════════════════════════════════ */
.text-card{
  padding:18px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r2);
  transition:all .25s ease;
}
.text-card:hover{
  border-color:var(--gold);
}
.text-card-hdr{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:12px;
  margin-bottom:14px;
  flex-wrap:wrap;
}
.text-card-lbl{
  font-family:var(--mono);
  font-size:10px;
  letter-spacing:1.5px;
  padding:5px 10px;
  border-radius:99px;
  border:1px solid;
  font-weight:700;
  display:inline-block;
  margin-bottom:6px;
}
.text-card-sub{
  font-family:var(--serif);
  font-size:11.5px;
  color:var(--t3);
  font-style:italic;
}
.text-audio-btn{
  display:flex;
  align-items:center;
  gap:8px;
  padding:8px 14px;
  background:linear-gradient(135deg, rgba(233,180,70,.15), rgba(233,180,70,.05));
  border:1px solid var(--gold);
  border-radius:99px;
  color:var(--gold);
  font-family:var(--mono);
  font-size:11px;
  letter-spacing:1px;
  font-weight:700;
  cursor:pointer;
  transition:all .2s ease;
}
.text-audio-btn:hover{
  background:linear-gradient(135deg, rgba(233,180,70,.25), rgba(233,180,70,.1));
  box-shadow:0 0 16px rgba(233,180,70,.3);
}
.text-audio-btn.playing .audio-icon{
  animation:audioPulse 1s ease-in-out infinite;
}
@keyframes audioPulse{
  0%,100%{opacity:1}
  50%{opacity:.4}
}
.audio-icon{font-size:13px}
.text-card-original{
  padding:14px 16px;
  background:rgba(0,0,0,.25);
  border:1px solid var(--bd);
  border-radius:var(--r1);
  font-family:'Times New Roman',Georgia,serif;
  font-size:14px;
  line-height:1.7;
  color:#d4ddc8;
  margin-bottom:10px;
  font-style:italic;
}
.text-card-modern{
  padding:10px 14px;
  font-family:var(--serif);
  font-size:13px;
  color:var(--t2);
  line-height:1.6;
  margin-bottom:8px;
}
.text-card-hl{
  padding:10px 12px;
  background:rgba(233,180,70,.05);
  border-left:2px solid var(--gold);
  border-radius:4px;
  font-size:12px;
  color:var(--t2);
  line-height:1.55;
}

@media (max-width:640px){
  .text-card-hdr{flex-direction:column}
  .text-audio-btn{align-self:stretch;justify-content:center}
  .text-card-original{font-size:12.5px}
}

/* Audio modal */
.audio-modal{
  position:fixed;
  bottom:24px;
  left:50%;
  transform:translateX(-50%);
  z-index:9999;
  display:none;
  padding:16px 24px;
  background:var(--bg);
  border:1px solid var(--gold);
  border-radius:var(--r2);
  box-shadow:0 12px 40px rgba(0,0,0,.5);
  max-width:90vw;
  font-family:var(--serif);
  font-size:13px;
  color:var(--t2);
  text-align:center;
  animation:audioRise .3s ease;
}
.audio-modal.on{display:block}
@keyframes audioRise{
  from{transform:translate(-50%, 30px);opacity:0}
  to{transform:translate(-50%, 0);opacity:1}
}

.audio-lbl{display:inline-block}


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
            <!-- Row 1 -->
            <g transform="translate(20,10)">
              <text class="la-glyph" x="18" y="32">A</text><text class="la-lbl" x="18" y="50">a</text>
              <text class="la-glyph" x="58" y="32">B</text><text class="la-lbl" x="58" y="50">b</text>
              <text class="la-glyph" x="98" y="32">C</text><text class="la-lbl" x="98" y="50">c</text>
              <text class="la-glyph-special" x="138" y="32">Č</text><text class="la-lbl-special" x="138" y="50">č ⭐</text>
              <text class="la-glyph-special" x="178" y="32">Ć</text><text class="la-lbl-special" x="178" y="50">ć ⭐</text>
              <text class="la-glyph" x="218" y="32">D</text><text class="la-lbl" x="218" y="50">d</text>
              <text class="la-glyph-special" x="258" y="32">Đ</text><text class="la-lbl-special" x="258" y="50">đ ⭐</text>
              <text class="la-glyph" x="298" y="32">E</text><text class="la-lbl" x="298" y="50">e</text>
            </g>
            <!-- Row 2 -->
            <g transform="translate(20,75)">
              <text class="la-glyph" x="18" y="32">I</text><text class="la-lbl" x="18" y="50">i</text>
              <text class="la-glyph" x="58" y="32">K</text><text class="la-lbl" x="58" y="50">k</text>
              <text class="la-glyph" x="98" y="32">L</text><text class="la-lbl" x="98" y="50">l</text>
              <text class="la-glyph-special" x="138" y="32">Lj</text><text class="la-lbl-special" x="138" y="50">lj ⭐</text>
              <text class="la-glyph" x="180" y="32">M</text><text class="la-lbl" x="180" y="50">m</text>
              <text class="la-glyph" x="220" y="32">N</text><text class="la-lbl" x="220" y="50">n</text>
              <text class="la-glyph-special" x="262" y="32">Nj</text><text class="la-lbl-special" x="262" y="50">nj ⭐</text>
              <text class="la-glyph-special" x="302" y="32">Š</text><text class="la-lbl-special" x="302" y="50">š ⭐</text>
            </g>
            <g transform="translate(60,140)">
              <text style="font-family:var(--serif);font-size:13px;fill:#a0a8b4;font-style:italic">⭐ = dijakritički znakovi · Gaj 1830.</text>
            </g>
          </svg>
        </div>
        <div class="abc-meta">
          <div><strong>30 slova</strong> · gajica (1830.)</div>
          <div style="color:var(--t3);font-size:11px">Reformirao Ljudevit Gaj, po češkom uzoru</div>
        </div>
      </div>

    </div>

    <div style="padding:14px;background:rgba(233,180,70,.04);border:1px solid var(--bd);border-left:3px solid var(--gold);border-radius:var(--r1);margin:14px 0;font-size:12.5px;color:var(--t2);line-height:1.6">
      <strong style="color:var(--gold)">📐 Vizualna karakteristika:</strong> Glagoljica je <strong>geometrijska</strong> (krugovi, pravokutnici), ćirilica je <strong>kosa-perspektivna</strong> (iz grčkih unciala), latinica je <strong>klasična</strong> (rimski uncijal). Brzo prepoznavanje pisma na ispitu = ovi vizualni elementi.
    </div>

    <!-- ─────────────── DETALJI PISAMA ─────────────── -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">🔍 Detalji svakog pisma · klikni karticu</div><div class="sec-line"></div></div>

    <div class="scene-grid">
      
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-head">
          <div class="scene-badge" style="background:var(--green);color:#fff">1</div>
          <div class="scene-ttl">
            <div class="scene-name">GLAGOLJICA</div>
            <div class="scene-sub">Najstarije slavensko pismo · Ćiril i Metod, ~863.</div>
          </div>
          <div class="scene-arrow">▾</div>
        </div>
        <div class="scene-body">
          <p><strong>📜 Tvorci:</strong> braća <strong>Ćiril (Konstantin)</strong> i <strong>Metod</strong>, bizantski misionari, sredinom 9. st. — za potrebe pokrštavanja Slavena u Velikoj Moravskoj.</p>
          <p><strong>🔑 Karakteristike:</strong></p>
          <ul>
            <li><strong>Originalna slavenska abeceda</strong> — nije izvedena iz grčkog ili latinskog</li>
            <li>Sadrži <strong>38 znakova</strong> u izvornoj verziji</li>
            <li>Svako slovo ima <strong>brojčanu vrijednost</strong> (kao kod grčkih i hebrejskih slova)</li>
            <li>Postoje DVIJE varijante:
              <ul>
                <li><strong>Obla glagoljica</strong> (zaobljeni oblici) — istočni tip, Bugarska, Makedonija</li>
                <li><strong>Uglata (hrvatska) glagoljica</strong> — pravokutni oblici, Hrvatska</li>
              </ul>
            </li>
          </ul>
          <p><strong>📚 Hrvatska glagoljica:</strong></p>
          <ul>
            <li>Koristila se od <strong>9./10. st.</strong> u Hrvatskoj (Istra, Dalmacija, Krk)</li>
            <li><strong>Bašćanska ploča</strong> (~1100.) — najpoznatiji spomenik</li>
            <li><strong>Misal po zakonu rimskoga dvora</strong> (1483.) — prva tiskana hrvatska knjiga</li>
            <li>Postupno potisnuta latinicom od 16. st.</li>
            <li><strong>U liturgiji se koristila do 20. st.</strong> (jedinstveno u Europi!)</li>
          </ul>
        </div>
      </div>

      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-head">
          <div class="scene-badge" style="background:var(--blue);color:#fff">2</div>
          <div class="scene-ttl">
            <div class="scene-name">ĆIRILICA · BOSANČICA</div>
            <div class="scene-sub">Druga slavenska abeceda · kraj 9. st.</div>
          </div>
          <div class="scene-arrow">▾</div>
        </div>
        <div class="scene-body">
          <p><strong>📜 Tvorci:</strong> NIJE Ćiril! Stvorili su je <strong>Ćirilovi učenici</strong> (Klement Ohridski) krajem 9. st. u Bugarskoj, nazvavši pismo po učitelju Ćirilu.</p>
          <p><strong>🔑 Karakteristike:</strong></p>
          <ul>
            <li>Bazirana na <strong>grčkom uncijalnom pismu</strong> + dodatni znakovi za slavenske glasove</li>
            <li>Lakša za pisanje od glagoljice → brže se širila</li>
            <li>U Hrvatskoj se razvila posebna varijanta — <strong>bosančica</strong></li>
          </ul>
          <p><strong>📚 Bosančica (hrvatska redakcija ćirilice):</strong></p>
          <ul>
            <li>Koristila se u <strong>Bosni, južnoj Hrvatskoj, Dubrovniku</strong></li>
            <li><strong>Povaljska listina</strong> (~1185., otok Brač) — najstariji hrvatski bosaničkim pismom</li>
            <li>Ima specifične <strong>hrvatske jezične crte</strong> — različita od srpske ćirilice</li>
            <li>Koristila se do 19. st., posebno kod katoličkih franjevaca u Bosni</li>
          </ul>
          <p><strong>⚠ NCVVO test:</strong> bosančica = HRVATSKA redakcija ćirilice, NE srpska. Razlika u jezičnim crtama i kulturnom kontekstu.</p>
        </div>
      </div>

      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-head">
          <div class="scene-badge" style="background:var(--bronze);color:#fff">3</div>
          <div class="scene-ttl">
            <div class="scene-name">LATINICA</div>
            <div class="scene-sub">Hrvatska gajica · od 12. st., danas isključivo pismo</div>
          </div>
          <div class="scene-arrow">▾</div>
        </div>
        <div class="scene-body">
          <p><strong>📜 Razvoj:</strong> latinica se pojavljuje u Hrvatskoj od <strong>12. st.</strong>, postaje dominantna u 16.–17. st., a danas je <strong>isključivo pismo</strong> hrvatskoga standardnog jezika.</p>
          <p><strong>🔑 Hrvatska latinica (gajica):</strong></p>
          <ul>
            <li><strong>30 slova</strong> (latinski alfabet + hrvatski dijakritički znakovi)</li>
            <li>Posebnosti: <strong>č, ć, dž, đ, lj, nj, š, ž</strong></li>
            <li>Reformirao ju je <strong>Ljudevit Gaj 1830.</strong> — uveo dijakritičke znakove po češkom uzoru (Husovi reformi)</li>
            <li>Prije Gaja postojale su starije hrvatske latinice s različitim načinima zapisivanja istih glasova</li>
          </ul>
          <p><strong>📚 Najstariji hrvatski latinički spomenici:</strong></p>
          <ul>
            <li><strong>Red i zakon sestara dominikanki</strong> (1345., Zadar) — jedan od prvih</li>
            <li><strong>Šibenska molitva</strong> (~1375.) — najstarija hrvatska latinička pjesma</li>
            <li><strong>Hrvatska čakavska latinica</strong> (od 14. st.) — Dalmacija</li>
            <li><strong>Slavonska latinica</strong> (od 16. st.) — Slavonija</li>
          </ul>
          <p><strong>🔄 Razvoj prema standardu:</strong></p>
          <ul>
            <li>Različiti pisali isti glas različito (npr. „č" je bilo cs, ch, cz...)</li>
            <li>Gaj 1830. unificira → dijakritički sustav</li>
            <li>Brozov pravopis 1892. → službeni</li>
          </ul>
        </div>
      </div>

    </div>

    <!-- ─────────────── BAŠĆANSKA PLOČA ─────────────── -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">⭐ Bašćanska ploča · ključni spomenik</div><div class="sec-line"></div></div>
    
    <div style="padding:18px;background:linear-gradient(135deg,rgba(80,200,120,.06),transparent);border:1px solid var(--bd);border-left:3px solid var(--green);border-radius:var(--r2);margin:14px 0">
      <div style="font-size:13px;line-height:1.7;color:var(--t2);font-family:var(--serif)">
        <strong style="color:var(--green)">Bašćanska ploča</strong> (oko 1100., otok Krk, crkva sv. Lucije u Jurandvoru) najstariji je očuvani spomenik na hrvatskom jeziku. Kameni natpis, dimenzija 199×99 cm, glagoljica.
      </div>
    </div>

    <div class="table-wrap">
      <table style="width:100%;border-collapse:collapse;font-family:var(--mono);font-size:12px">
        <thead>
          <tr style="background:var(--ele);border-bottom:2px solid var(--green)">
            <th style="padding:8px 10px;text-align:left;color:var(--green);font-size:10.5px">SVOJSTVO</th>
            <th style="padding:8px 10px;text-align:left;color:var(--green);font-size:10.5px">VRIJEDNOST</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px 10px;font-weight:700">Vrijeme nastanka</td><td style="padding:8px 10px">oko 1100.</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px 10px;font-weight:700">Mjesto</td><td style="padding:8px 10px">otok Krk, crkva sv. Lucije u Jurandvoru, Baška</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px 10px;font-weight:700">Pismo</td><td style="padding:8px 10px">hrvatska (uglata) glagoljica</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px 10px;font-weight:700">Jezik</td><td style="padding:8px 10px">hrvatski crkvenoslavenski + čakavski</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px 10px;font-weight:700">Sadržaj</td><td style="padding:8px 10px">darovnica kralja Zvonimira sv. Luciji (zemljište Baška)</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px 10px;font-weight:700">Dimenzije</td><td style="padding:8px 10px">199 × 99,5 × 9 cm</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px 10px;font-weight:700">Otkriće</td><td style="padding:8px 10px">1851., otkrio I. Crnčić</td></tr>
          <tr><td style="padding:8px 10px;font-weight:700">Trenutna lokacija</td><td style="padding:8px 10px">Hrvatska akademija znanosti i umjetnosti, Zagreb</td></tr>
        </tbody>
      </table>
    </div>

    <p style="margin-top:14px;font-size:13px;color:var(--t2);line-height:1.6;font-family:var(--serif)">
      <strong>📝 Zašto je važna:</strong> Bašćanska ploča prvi je dokument u kojem se javlja <strong>ime hrvatskoga kralja na hrvatskom jeziku</strong> („Zъvъnimirъ kralъ hrъvatъskъi"). Predstavlja simbol kontinuiteta hrvatske državnosti i jezika.
    </p>

    <!-- BAŠĆANSKA PLOČA · Vizualna reprezentacija (NEW) -->
    <div class="sec-hdr" style="margin-top:24px"><div class="sec-line"></div><div class="sec-badge">🪨 Vizualna rekonstrukcija</div><div class="sec-line"></div></div>
    
    <div style="padding:18px;background:linear-gradient(135deg,rgba(80,200,120,.04),transparent);border:1px solid var(--bd);border-radius:var(--r2);margin:14px 0">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:18px;align-items:center">
        
        <div>
          <svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;border-radius:var(--r1);background:linear-gradient(135deg, #2a2520, #1a1614)">
            <defs>
              <pattern id="stoneTexture" patternUnits="userSpaceOnUse" width="4" height="4">
                <rect width="4" height="4" fill="#3d3530"/>
                <circle cx="1" cy="1" r="0.4" fill="#4a4038" opacity="0.5"/>
                <circle cx="3" cy="2" r="0.3" fill="#5a4a3e" opacity="0.4"/>
              </pattern>
              <linearGradient id="stoneFade" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#5a4a3e" stop-opacity="0.3"/>
                <stop offset="100%" stop-color="#2a2520" stop-opacity="0.6"/>
              </linearGradient>
            </defs>
            <!-- Ploča (stylized) -->
            <rect x="20" y="20" width="260" height="120" fill="url(#stoneTexture)" stroke="#7a6a5a" stroke-width="2" rx="3"/>
            <rect x="20" y="20" width="260" height="120" fill="url(#stoneFade)"/>
            
            <!-- Karakteristični znakovi glagoljice (stylized) -->
            <g stroke="#a89478" stroke-width="1.5" fill="none" opacity="0.85">
              <!-- Row 1 -->
              <g transform="translate(34,38)">
                <circle cx="6" cy="6" r="4"/>
                <path d="M16,2 L20,10 L24,2"/>
                <rect x="32" y="2" width="8" height="8"/>
                <circle cx="52" cy="6" r="4"/>
                <path d="M62,2 L66,10 M62,6 L66,6"/>
                <circle cx="78" cy="2" r="3"/><circle cx="78" cy="10" r="3"/>
                <path d="M92,2 L92,10 M88,6 L96,6"/>
                <circle cx="108" cy="6" r="4"/>
                <path d="M118,2 L122,10 L126,2"/>
                <rect x="134" y="2" width="8" height="8"/>
                <circle cx="154" cy="6" r="4"/>
                <path d="M164,2 L168,10 M164,6 L168,6"/>
              </g>
              <!-- Row 2 -->
              <g transform="translate(34,58)">
                <circle cx="6" cy="2" r="3"/><circle cx="6" cy="10" r="3"/>
                <rect x="16" y="2" width="8" height="8"/>
                <circle cx="38" cy="6" r="4"/>
                <path d="M48,2 L52,10 L56,2"/>
                <circle cx="68" cy="6" r="4"/>
                <path d="M78,2 L78,10 M74,6 L82,6"/>
                <rect x="90" y="2" width="8" height="8"/>
                <path d="M104,2 L108,10 L112,2"/>
                <circle cx="124" cy="6" r="4"/>
                <circle cx="142" cy="2" r="3"/><circle cx="142" cy="10" r="3"/>
                <path d="M156,2 L160,10 M156,6 L160,6"/>
              </g>
              <!-- Row 3 (highlighted Zvonimir) -->
              <g transform="translate(34,80)" stroke="#e9b446" stroke-width="2">
                <circle cx="6" cy="6" r="4"/>
                <path d="M16,2 L20,10 L24,2"/>
                <rect x="32" y="2" width="8" height="8"/>
                <circle cx="52" cy="6" r="4"/>
                <path d="M62,2 L62,10 M58,6 L66,6"/>
                <circle cx="78" cy="6" r="4"/>
                <path d="M88,2 L92,10 L96,2"/>
                <rect x="104" y="2" width="8" height="8"/>
                <circle cx="124" cy="6" r="4"/>
              </g>
              <!-- Row 4 -->
              <g transform="translate(34,102)">
                <path d="M2,2 L6,10 L10,2"/>
                <rect x="16" y="2" width="8" height="8"/>
                <circle cx="38" cy="6" r="3"/>
                <path d="M48,2 L48,10 M44,6 L52,6"/>
                <circle cx="64" cy="6" r="4"/>
                <path d="M76,2 L80,10 L84,2"/>
                <circle cx="96" cy="6" r="4"/>
                <rect x="106" y="2" width="8" height="8"/>
                <circle cx="124" cy="6" r="3"/>
                <path d="M134,2 L134,10 M130,6 L138,6"/>
              </g>
            </g>
            
            <!-- Highlighted Zvonimir region -->
            <rect x="48" y="76" width="180" height="14" fill="none" stroke="#e9b446" stroke-width="1" stroke-dasharray="3,2" opacity="0.7"/>
            <text x="150" y="156" font-family="var(--mono)" font-size="9" fill="#e9b446" text-anchor="middle">↑ „Zъvъnimirъ kralъ hrъvatъskъi"</text>
          </svg>
          <div style="text-align:center;margin-top:8px;font-family:var(--mono);font-size:10px;letter-spacing:1.5px;color:var(--t3)">STILIZIRANA REKONSTRUKCIJA · 199 × 99,5 cm</div>
        </div>
        
        <div>
          <div style="font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:10px">Karakteristike kao spomenik:</div>
          <ul style="margin:0;padding-left:18px;font-size:12.5px;color:var(--t2);line-height:1.7">
            <li><strong>Materijal:</strong> bijeli vapnenac (krčki)</li>
            <li><strong>Dimenzije:</strong> 199 × 99,5 × 9 cm</li>
            <li><strong>Pismo:</strong> hrvatska uglata glagoljica</li>
            <li><strong>13 redaka</strong> teksta, ~400 znakova</li>
            <li><strong>Klesari:</strong> opat Držiha + sin Dabar</li>
            <li><strong>Otkriveno:</strong> 1851., I. Crnčić u crkvi sv. Lucije, Jurandvor (otok Krk)</li>
            <li><strong>Trenutno u:</strong> HAZU, Zagreb (replika u sv. Luciji)</li>
          </ul>
          
          <div style="margin-top:14px;padding:12px;background:rgba(233,180,70,.06);border-left:3px solid var(--gold);border-radius:var(--r1)">
            <div style="font-family:var(--mono);font-size:10px;letter-spacing:1.5px;color:var(--gold);margin-bottom:6px">⭐ NCVVO</div>
            <div style="font-size:12px;color:var(--t2);line-height:1.55">
              Bašćanska ploča je <strong>RODNI LIST</strong> hrvatske pismenosti. Često NCVVO pita: <em>„Kojim je pismom napisana?"</em> (glagoljica), <em>„Što sadrži?"</em> (darovnica kralja Zvonimira), <em>„Gdje je nađena?"</em> (otok Krk).
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- NAV ROW -->
    <div class="nav-row" style="margin-top:32px;display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap">
      <button class="nb-btn" onclick="sw(1)">← Razdoblja</button>
      <button class="nb-btn primary" onclick="sw(3)">Spomenici →</button>
    </div>
  </div><!-- /l2 -->
     <div class="layer" id="l3" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-pa hchip">📜 Najstariji spomenici</span>
      <span class="pill p-br hchip">⭐ NCVVO TOP-tema</span>
      <span class="pill p-pa hchip">🗓 Kronološki</span>
    </div>

    <!-- ─────────────── PREGLED SPOMENIKA ─────────────── -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">📋 Najstariji hrvatski spomenici · kronološki</div><div class="sec-line"></div></div>
    
    <div class="box-int">
      <div class="box-int-lbl">⭐ Top NCVVO tema</div>
      <div class="box-int-txt">
        Najstariji spomenici su <strong>NCVVO TOP TEMA</strong>. Moraš znati datum, mjesto, pismo i sadržaj svakog ključnog spomenika. Slijedi kronološki popis 10 najvažnijih.
      </div>
    </div>

    <div class="table-wrap">
      <table style="width:100%;border-collapse:collapse;font-family:var(--mono);font-size:11.5px">
        <thead>
          <tr style="background:var(--ele);border-bottom:2px solid var(--gold)">
            <th style="padding:8px 10px;text-align:left;color:var(--gold);font-size:10px">DATUM</th>
            <th style="padding:8px 10px;text-align:left;color:var(--gold);font-size:10px">SPOMENIK</th>
            <th style="padding:8px 10px;text-align:left;color:var(--gold);font-size:10px">PISMO</th>
            <th style="padding:8px 10px;text-align:left;color:var(--gold);font-size:10px">VAŽNOST</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:6px 9px;color:var(--green);font-weight:700">~1000.</td><td style="padding:6px 9px"><strong>Plominski natpis</strong></td><td style="padding:6px 9px">glagoljica</td><td style="padding:6px 9px;font-style:italic">jedan od najstarijih glagoljskih natpisa</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:6px 9px;color:var(--green);font-weight:700">~1075.</td><td style="padding:6px 9px"><strong>Valunska ploča</strong></td><td style="padding:6px 9px">glagoljica + latinica</td><td style="padding:6px 9px;font-style:italic">otok Cres, dvojezični natpis</td></tr>
          <tr style="border-bottom:1px solid var(--bd)" id="basc-row"><td style="padding:6px 9px;color:var(--gold);font-weight:700">~1100. ⭐</td><td style="padding:6px 9px"><strong>Bašćanska ploča</strong></td><td style="padding:6px 9px">glagoljica</td><td style="padding:6px 9px;font-style:italic">najpoznatiji hrv. jezični spomenik</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:6px 9px;color:var(--blue);font-weight:700">~1185.</td><td style="padding:6px 9px"><strong>Povaljska listina</strong></td><td style="padding:6px 9px">bosančica</td><td style="padding:6px 9px;font-style:italic">otok Brač, najstariji hrv. bosaničkim</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:6px 9px;color:var(--bronze);font-weight:700">1288. ⭐</td><td style="padding:6px 9px"><strong>Vinodolski zakonik</strong></td><td style="padding:6px 9px">glagoljica</td><td style="padding:6px 9px;font-style:italic">najstariji slav. pravni spomenik</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:6px 9px;color:var(--bronze);font-weight:700">1345.</td><td style="padding:6px 9px"><strong>Red i zakon sestara dominikanki</strong></td><td style="padding:6px 9px">latinica</td><td style="padding:6px 9px;font-style:italic">jedan od prvih hrv. latinskih</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:6px 9px;color:var(--bronze);font-weight:700">~1375.</td><td style="padding:6px 9px"><strong>Šibenska molitva</strong></td><td style="padding:6px 9px">latinica</td><td style="padding:6px 9px;font-style:italic">najstarija hrv. latinička pjesma</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:6px 9px;color:var(--red);font-weight:700">1483. ⭐</td><td style="padding:6px 9px"><strong>Misal po zakonu rimskoga dvora</strong></td><td style="padding:6px 9px">glagoljica</td><td style="padding:6px 9px;font-style:italic">prva tiskana hrv. knjiga</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:6px 9px;color:#9b59b6;font-weight:700">1604. ⭐</td><td style="padding:6px 9px"><strong>Kašićeva gramatika</strong></td><td style="padding:6px 9px">latinica (na lat.)</td><td style="padding:6px 9px;font-style:italic">prva hrvatska gramatika</td></tr>
          <tr><td style="padding:6px 9px;color:#9b59b6;font-weight:700">1631.</td><td style="padding:6px 9px"><strong>Vrančićev rječnik</strong></td><td style="padding:6px 9px">latinica</td><td style="padding:6px 9px;font-style:italic">peterojezični rječnik (Faust Vrančić)</td></tr>
        </tbody>
      </table>
    </div>

    <!-- ─────────────── DETALJI SPOMENIKA ─────────────── -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">🔍 Detalji najvažnijih spomenika · klikni karticu</div><div class="sec-line"></div></div>

    <div class="scene-grid">
      
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-head">
          <div class="scene-badge" style="background:var(--gold);color:#0F0605">⭐</div>
          <div class="scene-ttl">
            <div class="scene-name">BAŠĆANSKA PLOČA · ~1100.</div>
            <div class="scene-sub">Najstariji spomenik na hrvatskom · NCVVO ⭐</div>
          </div>
          <div class="scene-arrow">▾</div>
        </div>
        <div class="scene-body">
          <p><strong>📜 Lokacija:</strong> otok Krk, crkva sv. Lucije u Jurandvoru pokraj Baške.</p>
          <p><strong>🔑 Karakteristike:</strong></p>
          <ul>
            <li><strong>Pismo:</strong> hrvatska (uglata) glagoljica</li>
            <li><strong>Jezik:</strong> hrvatski crkvenoslavenski + čakavski elementi</li>
            <li><strong>Dimenzije:</strong> 199 × 99,5 × 9 cm (kameni natpis)</li>
            <li><strong>Sadržaj:</strong> darovnica kralja Zvonimira sv. Luciji (zemljište Baška)</li>
            <li><strong>Otkriveno:</strong> 1851., I. Crnčić</li>
            <li><strong>Trenutno:</strong> HAZU, Zagreb</li>
          </ul>
          <p><strong>📝 Zašto je važna:</strong> prvi dokument u kojem se javlja <strong>ime hrvatskoga kralja na hrvatskom jeziku</strong>. Simbol kontinuiteta hrvatske državnosti i jezika.</p>
        </div>
      </div>

      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-head">
          <div class="scene-badge" style="background:var(--bronze);color:#fff">⭐</div>
          <div class="scene-ttl">
            <div class="scene-name">VINODOLSKI ZAKONIK · 1288.</div>
            <div class="scene-sub">Najstariji slavenski pravni spomenik</div>
          </div>
          <div class="scene-arrow">▾</div>
        </div>
        <div class="scene-body">
          <p><strong>📜 Lokacija:</strong> Vinodol (sjeverni Hrvatsko primorje, oko Crikvenice).</p>
          <p><strong>🔑 Karakteristike:</strong></p>
          <ul>
            <li><strong>Pismo:</strong> hrvatska glagoljica</li>
            <li><strong>Jezik:</strong> čakavsko narječje s elementima crkvenoslavenskoga</li>
            <li><strong>Sadržaj:</strong> 75 članaka feudalnog zakona vinodolske gospode</li>
            <li><strong>Datum:</strong> 6. siječnja 1288. (datiran u samom dokumentu)</li>
            <li><strong>Trenutno:</strong> Nacionalna i sveučilišna knjižnica, Zagreb</li>
          </ul>
          <p><strong>📝 Zašto je važan:</strong> najstariji slavenski pravni spomenik na narodnom jeziku. Pokazuje da je hrvatski u 13. st. bio razvijen do razine koja omogućuje pisanje pravnih dokumenata.</p>
        </div>
      </div>

      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-head">
          <div class="scene-badge" style="background:var(--red);color:#fff">⭐</div>
          <div class="scene-ttl">
            <div class="scene-name">MISAL PO ZAKONU RIMSKOGA DVORA · 1483.</div>
            <div class="scene-sub">Prva tiskana hrvatska knjiga</div>
          </div>
          <div class="scene-arrow">▾</div>
        </div>
        <div class="scene-body">
          <p><strong>📜 Datum tiska:</strong> 22. veljače 1483.</p>
          <p><strong>🔑 Karakteristike:</strong></p>
          <ul>
            <li><strong>Pismo:</strong> hrvatska glagoljica</li>
            <li><strong>Jezik:</strong> hrvatski crkvenoslavenski</li>
            <li><strong>Sadržaj:</strong> liturgijska knjiga (misal) za rimokatoličku liturgiju</li>
            <li><strong>Mjesto tiska:</strong> nepoznato (vjerojatno Venecija ili Modena)</li>
            <li><strong>Inkunabula</strong> = knjiga tiskana prije 1500.</li>
          </ul>
          <p><strong>📝 Zašto je važan:</strong></p>
          <ul>
            <li>Prva tiskana hrvatska knjiga — <strong>samo 28 godina nakon Gutenbergove Biblije</strong> (1455.)</li>
            <li>Hrvati su bili među <strong>prvim europskim narodima</strong> koji su imali tiskane knjige na vlastitom jeziku</li>
            <li>Pokazuje razvijenost hrvatske kulture u kasnom srednjem vijeku</li>
          </ul>
        </div>
      </div>

      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-head">
          <div class="scene-badge" style="background:#9b59b6;color:#fff">⭐</div>
          <div class="scene-ttl">
            <div class="scene-name">KAŠIĆEVA GRAMATIKA · 1604.</div>
            <div class="scene-sub">Prva hrvatska gramatika · Bartol Kašić</div>
          </div>
          <div class="scene-arrow">▾</div>
        </div>
        <div class="scene-body">
          <p><strong>📜 Pun naziv:</strong> „Institutionum linguae illyricae libri duo" (Dvije knjige Institucija ilirskoga jezika).</p>
          <p><strong>🔑 Karakteristike:</strong></p>
          <ul>
            <li><strong>Autor:</strong> Bartol Kašić (1575.–1650.), isusovac iz Paga</li>
            <li><strong>Mjesto tiska:</strong> Rim, 1604.</li>
            <li><strong>Jezik djela:</strong> latinski (opisuje hrvatski)</li>
            <li><strong>Opisuje:</strong> štokavsko narječje hrvatskog jezika</li>
            <li><strong>Cilj:</strong> priručnik za isusovce koji propovijedaju kršćanstvo Hrvatima</li>
          </ul>
          <p><strong>📝 Zašto je važna:</strong></p>
          <ul>
            <li>Prva sustavna gramatika hrvatskog jezika</li>
            <li>Dokumentira kraj predstandardnog razdoblja</li>
            <li>Kašić je također napisao <strong>prvi prijevod cijele Biblije</strong> na hrvatski (1631., dovršen ali ne objavljen u to vrijeme)</li>
          </ul>
        </div>
      </div>

    </div>

    
    <!-- ═══════════════════════════════════
         ORIGINALNI TEKSTOVI · autentični izgovor (NEW)
    ═══════════════════════════════════ -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">📜 Originalni tekstovi · čuj povijest</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">🎧 Slušaj kako je hrvatski jezik zvučao kroz povijest</div>
      <div class="box-int-txt">
        Najpoznatiji odlomci iz hrvatskih spomenika u <strong>originalnom obliku</strong> i <strong>suvremenoj transliteraciji</strong>. Idealno za pamćenje karakterističnih izraza koje NCVVO često citira.
      </div>
    </div>

    <div style="display:grid;gap:14px;margin:18px 0">
      
      <!-- BAŠĆANSKA PLOČA -->
      <div class="text-card">
        <div class="text-card-hdr">
          <div>
            <div class="text-card-lbl" style="background:rgba(233,180,70,.12);color:var(--gold);border-color:var(--gold)">⭐ BAŠĆANSKA PLOČA · ~1100.</div>
            <div class="text-card-sub">Hrvatska glagoljica · hrvatski crkvenoslavenski</div>
          </div>
          <button class="text-audio-btn" onclick="audioPlay(this, 'bascanska')">
            <span class="audio-icon">▶</span>
            <span class="audio-lbl">Slušaj</span>
          </button>
        </div>
        <div class="text-card-original">
          „A·ZЪ·V·IM·E·OTCA·I·SI·NA·I·SVE·TAGO·DUHA·AZ·OPAT·DRŽIHA·PISAH·SE·O·LEDINĚ·JUŽE·DA·ZЪVЪNIMIRЪ·KRALЪ·HRЪVATЪSKЪI·V·DNI·SVOJE·V·SVET·OJ·LUCIJI"
        </div>
        <div class="text-card-modern">
          <strong>Suvremeno:</strong> <em>„Ja, u ime Oca i Sina i Svetoga Duha. Ja, opat Držiha, pisah ovo o ledini koju dade Zvonimir, kralj hrvatski u svoje dane svetoj Luciji."</em>
        </div>
        <div class="text-card-hl">
          🔑 <strong>Ključno:</strong> prvi put se javlja ime hrvatskoga kralja na hrvatskom jeziku — <em>„Zъvъnimirъ kralъ hrъvatъskъi"</em>.
        </div>
      </div>

      <!-- VINODOLSKI ZAKONIK -->
      <div class="text-card">
        <div class="text-card-hdr">
          <div>
            <div class="text-card-lbl" style="background:rgba(180,130,80,.12);color:var(--bronze);border-color:var(--bronze)">⭐ VINODOLSKI ZAKONIK · 1288.</div>
            <div class="text-card-sub">Glagoljica · čakavski hrvatski</div>
          </div>
          <button class="text-audio-btn" onclick="audioPlay(this, 'vinodolski')">
            <span class="audio-icon">▶</span>
            <span class="audio-lbl">Slušaj</span>
          </button>
        </div>
        <div class="text-card-original">
          „V IME OTCA I SINA I DUHA SVETAGO. AMЪN. LĚTA OD ROJEN·JA HRЪSTOVA TISUĆA I DVĚSTA OSAMЪDESETЪ I OSAMЪ, MĚSECA ZENVARJA DAN·6, NA BOGOJAVLENJE GOSPODNJE..."
        </div>
        <div class="text-card-modern">
          <strong>Suvremeno:</strong> <em>„U ime Oca i Sina i Duha Svetoga. Amen. Godine od rođenja Hristova tisuću dvjesto osamdeset i osme, mjeseca siječnja dan 6, na Bogojavljanje Gospodnje..."</em>
        </div>
        <div class="text-card-hl">
          🔑 <strong>Ključno:</strong> najstariji slavenski pravni spomenik na narodnom jeziku — 75 članaka feudalnog zakona vinodolske gospode.
        </div>
      </div>

      <!-- ŠIBENSKA MOLITVA -->
      <div class="text-card">
        <div class="text-card-hdr">
          <div>
            <div class="text-card-lbl" style="background:rgba(155,89,182,.12);color:#9b59b6;border-color:#9b59b6">ŠIBENSKA MOLITVA · ~1375.</div>
            <div class="text-card-sub">Latinica · čakavski · marijanska molitva u stihovima</div>
          </div>
          <button class="text-audio-btn" onclick="audioPlay(this, 'sibenska')">
            <span class="audio-icon">▶</span>
            <span class="audio-lbl">Slušaj</span>
          </button>
        </div>
        <div class="text-card-original">
          „O blažena! O prislavna!<br>O presvitla zvizdo morskaja, <br>Mati božja, Marija!<br>Vladaočeva goro pridragaja..."
        </div>
        <div class="text-card-modern">
          <strong>Suvremeno:</strong> <em>„O blažena! O preslavna! O presvijetla zvijezdo morska, Majko Božja Marijo, gospodareva gora predraga..."</em>
        </div>
        <div class="text-card-hl">
          🔑 <strong>Ključno:</strong> najstarija hrvatska latinička pjesma — značajna jer pokazuje da je hrvatski jezik 14. st. dovoljno razvijen za poetsku formu.
        </div>
      </div>

      <!-- MISAL 1483 -->
      <div class="text-card">
        <div class="text-card-hdr">
          <div>
            <div class="text-card-lbl" style="background:rgba(224,82,82,.12);color:var(--red);border-color:var(--red)">⭐ MISAL PO ZAKONU RIMSKOGA DVORA · 1483.</div>
            <div class="text-card-sub">Glagoljica · hrvatski crkvenoslavenski · prva tiskana hrv. knjiga</div>
          </div>
          <button class="text-audio-btn" onclick="audioPlay(this, 'misal')">
            <span class="audio-icon">▶</span>
            <span class="audio-lbl">Slušaj</span>
          </button>
        </div>
        <div class="text-card-original">
          „LĚTA GOSPODЪNJA 1483, MĚSECA FEBRUARA 22 DAN, TISKANЪ B·E SЪJ MISALЪ PO ZAKONU RIMЪSKAGO DVORA..."
        </div>
        <div class="text-card-modern">
          <strong>Suvremeno:</strong> <em>„Godine Gospodnje 1483., mjeseca veljače 22. dana, tiskan je ovaj misal po zakonu rimskoga dvora..."</em>
        </div>
        <div class="text-card-hl">
          🔑 <strong>Ključno:</strong> 22. veljače 1483. — datum prve tiskane hrvatske knjige. Samo 28 godina nakon Gutenbergove Biblije!
        </div>
      </div>

    </div>

    <div style="padding:14px;background:rgba(74,144,217,.04);border:1px solid var(--bd);border-left:3px solid var(--blue);border-radius:var(--r1);margin:14px 0;font-size:12.5px;color:var(--t2);line-height:1.6">
      <strong style="color:var(--blue)">💡 Savjet za pamćenje:</strong> Najčešća NCVVO greška — povezivanje krivog citata s krivim spomenikom. <strong>Bašćanska ploča</strong> = darovnica kralja Zvonimira. <strong>Vinodolski</strong> = pravo Vinodola. <strong>Šibenska molitva</strong> = marijanski stih. <strong>Misal</strong> = liturgijski tekst.
    </div>

    <!-- NAV ROW -->
    <div class="nav-row" style="margin-top:32px;display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap">
      <button class="nb-btn" onclick="sw(2)">← Pisma</button>
      <button class="nb-btn primary" onclick="sw(5)">Identifikacija pisma →</button>
    </div>
  </div><!-- /l3 -->

  <div class="layer" id="l4" role="tabpanel" tabindex="0">

    <!-- BOX-INT -->
    <div class="box-int">
      <div class="box-int-lbl">🎯 Kako koristiti pojmovnik</div>
      <div class="box-int-txt">
        Idealno za <strong>brzu provjeru</strong> tijekom učenja ili pred maturom. Klikni kategoriju za filter, ili upiši pojam u search. <strong>Bookmark</strong> (⭐) označava pojmove za daljnje učenje. Quick Search (Ctrl+K) pretražuje i kroz pojmovnik.
      </div>
    </div>

    <!-- ═══════════════════════════════════
         POJMOVNIK CONTROLS
    ═══════════════════════════════════ -->
    <div class="pojm-controls">
      <!-- Search input -->
      <div class="pojm-search-wrap">
        <span style="font-size:14px">🔍</span>
        <input type="text" id="pojm-search" placeholder="Pretraži pojmove..." 
               oninput="pojm2Render()" 
               style="flex:1;background:transparent;border:none;outline:none;color:var(--t1);font-family:var(--display);font-size:14px;padding:4px 0">
        <button class="pojm-clear" onclick="pojmClearSearch()" title="Očisti">✕</button>
      </div>
      
      <!-- Category filter chips -->
      <div class="pojm-filters">
      <button class="pojm-filter active" onclick="pojmFilter('all', this)">Sve</button>
      <button class="pojm-filter" onclick="pojmFilter('razdoblja', this)">Razdoblja</button>
      <button class="pojm-filter" onclick="pojmFilter('pisma', this)">Pisma</button>
      <button class="pojm-filter" onclick="pojmFilter('spomenici', this)">Spomenici</button>
      <button class="pojm-filter" onclick="pojmFilter('standardizacija', this)">Standardizacija</button>
      <button class="pojm-filter" onclick="pojmFilter('osobe', this)">Osobe</button>
      <button class="pojm-filter" onclick="pojmFilter('pojmovi', this)">Pojmovi</button>
      <button class="pojm-filter pojm-filter-star" onclick="pojmFilter('star', this)">⭐ NCVVO ključno</button>
    </div>
      
      <!-- Stats -->
      <div class="pojm-stats">
        <span id="pojm-count" style="font-family:var(--mono);font-size:11px;color:var(--t3)">Učitavanje...</span>
      </div>
    </div>
    
    <!-- Pojmovi grid -->
    <div id="pojm-grid2" class="pojm-grid"></div>

    <!-- NAV ROW -->
    <div class="nav-row">
      <span class="nb-btn" onclick="sw(3)">← Složene rečenice</span>
      <span class="nb-btn primary" onclick="sw(5)">🎯 Identifikacija pisma →</span>
    </div>

  </div><!-- /l4 -->

  <div class="layer" id="l5" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-pa hchip">🎯 Identifikacija pisma</span>
      <span class="pill p-br hchip">🤖 Interaktivna vježba</span>
      <span class="pill p-pa hchip">📚 20 spomenika</span>
    </div>

    <!-- ─────────────── INTRO ─────────────── -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">🎯 Identifikacija pisma · interaktivno</div><div class="sec-line"></div></div>
    
    <div class="box-int">
      <div class="box-int-lbl">🎯 Kako vježba radi</div>
      <div class="box-int-txt">
        Pokazujemo ti <strong>spomenik</strong> (naziv + datum). <strong>Odredi kojim je pismom napisan</strong>: glagoljica, ćirilica/bosančica ili latinica. Klikni odgovor — instant feedback s objašnjenjem konteksta.
      </div>
    </div>

    <div id="ip-exercise"></div>
    <div id="ip-result" style="display:none"></div>

    <!-- ─────────────── PISMA TIMELINE ─────────────── -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">📊 Brza referenca · pisma kroz vrijeme</div><div class="sec-line"></div></div>
    
    <div style="padding:18px;background:linear-gradient(135deg,rgba(233,180,70,.04),transparent);border:1px solid var(--bd);border-radius:var(--r2);margin:14px 0">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px">
        
        <div style="padding:12px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--green);border-radius:var(--r1)">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:1.5px;color:var(--green);margin-bottom:4px">GLAGOLJICA</div>
          <div style="font-family:var(--display);font-size:13px;font-weight:700;color:var(--t1)">9. — 16. st.</div>
          <div style="font-size:11.5px;color:var(--t2);margin-top:4px;line-height:1.5">Bašćanska ploča, Vinodolski zakonik, Misal 1483.</div>
        </div>
        
        <div style="padding:12px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--blue);border-radius:var(--r1)">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:1.5px;color:var(--blue);margin-bottom:4px">BOSANČICA</div>
          <div style="font-family:var(--display);font-size:13px;font-weight:700;color:var(--t1)">12. — 19. st.</div>
          <div style="font-size:11.5px;color:var(--t2);margin-top:4px;line-height:1.5">Povaljska listina, dubrovačka i bosanska redakcija.</div>
        </div>
        
        <div style="padding:12px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--bronze);border-radius:var(--r1)">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:1.5px;color:var(--bronze);margin-bottom:4px">LATINICA</div>
          <div style="font-family:var(--display);font-size:13px;font-weight:700;color:var(--t1)">12. st. — danas</div>
          <div style="font-size:11.5px;color:var(--t2);margin-top:4px;line-height:1.5">Šibenska molitva, Kašićeva gramatika, sve modernije.</div>
        </div>
        
      </div>
    </div>

    <!-- NAV ROW -->
    <div class="nav-row" style="margin-top:32px;display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap">
      <button class="nb-btn" onclick="sw(4)">← Pojmovnik</button>
      <button class="nb-btn primary" onclick="sw(6)">Kviz →</button>
    </div>
  </div><!-- /l5 -->

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
      <span class="nb-btn" onclick="sw(5)">← Parser</span>
      <span class="nb-btn primary" onclick="sw(7)">📊 Referentna tablica →</span>
    </div>
  </div>

  <!-- ══════════════════════════════════════
      TAB 7 · REFERENTNA TABLICA
  ══════════════════════════════════════ -->
  <div class="layer" id="l7" role="tabpanel" tabindex="0">
        <div class="ref-actions no-print">
      <button class="nb-btn primary" onclick="window.print()" style="padding:10px 20px">🖨️ Isprintaj A4</button>
      <button class="nb-btn" onclick="refToggleScale(this)" style="padding:10px 16px">📐 Zoom</button>
    </div>

    <!-- ════════════════════
         A4 REFERENCE SHEET — POVIJEST HRV. JEZIKA
    ════════════════════ -->
    <div class="ref-sheet" id="ref-sheet">
      
      <!-- HEADER -->
      <div class="ref-header">
        <div class="ref-title">POVIJEST HRVATSKOGA JEZIKA · A4 REFERENCA</div>
        <div class="ref-subtitle">MATURIRAJ.HR · H23 · MATURA HRVATSKI 2026</div>
      </div>

      <!-- TIMELINE -->
      <div class="ref-section">
        <div class="ref-section-ttl">5 razdoblja · vremenska crta</div>
        <table class="ref-tbl">
          <thead><tr><th>Razdoblje</th><th>Vrijeme</th><th>Pismo</th><th>Ključni spomenik</th></tr></thead>
          <tbody>
            <tr><td><strong>Predknjiževno</strong></td><td>do 9. st.</td><td><em>—</em></td><td><em>usmena predaja</em></td></tr>
            <tr><td><strong>Staroslavensko</strong></td><td>9.–11. st.</td><td>glagoljica</td><td>Bašćanska ploča (~1100.)</td></tr>
            <tr><td><strong>Srednjovjekovno</strong></td><td>12.–15. st.</td><td>glagoljica + bosančica</td><td>Vinodolski zakonik (1288.)</td></tr>
            <tr><td><strong>Predstandardno</strong></td><td>16.–18. st.</td><td>latinica + glagoljica</td><td>Kašićeva gramatika (1604.)</td></tr>
            <tr><td><strong>Standardno</strong></td><td>19. st. – danas</td><td>latinica</td><td>Brozov pravopis (1892.)</td></tr>
          </tbody>
        </table>
      </div>

      <!-- PISMA -->
      <div class="ref-section">
        <div class="ref-section-ttl">3 pisma · kratak pregled</div>
        <div class="ref-grid-3">
          <div class="ref-mini">
            <div class="ref-mini-ttl">Glagoljica</div>
            <ul>
              <li>Tvorci: Ćiril i Metod, ~863.</li>
              <li>38 znakova, originalno slav.</li>
              <li>Hrv. spomenik: Bašćanska ploča</li>
              <li>U liturgiji do 20. st.</li>
            </ul>
          </div>
          <div class="ref-mini">
            <div class="ref-mini-ttl">Ćirilica · bosančica</div>
            <ul>
              <li>Tvorci: <strong>učenici</strong> Ćirila</li>
              <li>Klement Ohridski, kraj 9. st.</li>
              <li>Bosančica = hrv. redakcija</li>
              <li>Spomenik: Povaljska listina</li>
            </ul>
          </div>
          <div class="ref-mini">
            <div class="ref-mini-ttl">Latinica</div>
            <ul>
              <li>U Hrv. od 12. st.</li>
              <li>Gaj reformira 1830. (gajica)</li>
              <li>30 slova + dijakritici</li>
              <li>Danas isključivo pismo</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- KLJUČNI DATUMI -->
      <div class="ref-section">
        <div class="ref-section-ttl">⭐ Ključni datumi · NCVVO TOP</div>
        <table class="ref-tbl">
          <thead><tr><th>Godina</th><th>Događaj</th><th>Pismo / Autor</th></tr></thead>
          <tbody>
            <tr><td><strong>~863.</strong></td><td>Ćiril i Metod stvaraju glagoljicu</td><td>glagoljica</td></tr>
            <tr><td><strong>~1100.</strong></td><td>Bašćanska ploča ⭐</td><td>glagoljica · otok Krk</td></tr>
            <tr><td><strong>1288.</strong></td><td>Vinodolski zakonik ⭐</td><td>glagoljica · čakavski</td></tr>
            <tr><td><strong>1483.</strong></td><td>Misal po zakonu rim. dvora ⭐</td><td>1. tiskana hrv. knjiga</td></tr>
            <tr><td><strong>1604.</strong></td><td>Kašićeva gramatika ⭐</td><td>latinica · Bartol Kašić</td></tr>
            <tr><td><strong>1830.</strong></td><td>Gaj reformira latinicu</td><td>gajica · dijakritici</td></tr>
            <tr><td><strong>1850.</strong></td><td>Bečki dogovor ⭐</td><td>hrv. + srp. književnici</td></tr>
            <tr><td><strong>1892.</strong></td><td>Brozov hrvatski pravopis</td><td>fonetski pravopis</td></tr>
            <tr><td><strong>1899.</strong></td><td>Maretićeva gramatika</td><td>(i)jekavski standard</td></tr>
            <tr><td><strong>1954.</strong></td><td>Novosadski dogovor</td><td>kontroverzan</td></tr>
            <tr><td><strong>1967.</strong></td><td>Deklaracija ⭐</td><td>17. ožujka, 130 potpisnika</td></tr>
            <tr><td><strong>1971.</strong></td><td>Babić-Finka-Moguš pravopis</td><td>moderna kodifikacija</td></tr>
            <tr><td><strong>1991.</strong></td><td>Samostalni razvoj</td><td>službeni hrv. jezik</td></tr>
            <tr><td><strong>2013.</strong></td><td>IHJJ pravopis</td><td>službeni standard</td></tr>
          </tbody>
        </table>
      </div>

      <!-- TRI NARJEČJA -->
      <div class="ref-section">
        <div class="ref-section-ttl">3 narječja · KČŠ</div>
        <div class="ref-grid-3">
          <div class="ref-mini">
            <div class="ref-mini-ttl">Kajkavski</div>
            <ul>
              <li>Pitanje: <em>kaj?</em></li>
              <li>Sjeverozap. Hrvatska</li>
              <li>Zagreb, Varaždin, Krapina</li>
            </ul>
          </div>
          <div class="ref-mini">
            <div class="ref-mini-ttl">Čakavski</div>
            <ul>
              <li>Pitanje: <em>ča?</em></li>
              <li>Primorska Hrvatska</li>
              <li>Istra, Dalmacija, otoci</li>
            </ul>
          </div>
          <div class="ref-mini">
            <div class="ref-mini-ttl">Štokavski ⭐</div>
            <ul>
              <li>Pitanje: <em>što?</em></li>
              <li>Istok i jug</li>
              <li><strong>Standard = (i)jekavski</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- KLJUČNE OSOBE -->
      <div class="ref-section">
        <div class="ref-section-ttl">Ključne osobe · top 10</div>
        <table class="ref-tbl">
          <thead><tr><th>Osoba</th><th>Doba</th><th>Doprinos</th></tr></thead>
          <tbody>
            <tr><td><strong>Ćiril i Metod</strong></td><td>9. st.</td><td>glagoljica · staroslav. jezik</td></tr>
            <tr><td><strong>Bartol Kašić</strong></td><td>1604.</td><td>1. hrv. gramatika</td></tr>
            <tr><td><strong>Faust Vrančić</strong></td><td>1595./1631.</td><td>peterojezični rječnik</td></tr>
            <tr><td><strong>Joakim Stulli</strong></td><td>1801.</td><td>najveći hrv. rječnik 18. st.</td></tr>
            <tr><td><strong>Ljudevit Gaj</strong></td><td>1830-ih</td><td>narodni preporod · gajica</td></tr>
            <tr><td><strong>Veber-Tkalčević</strong></td><td>19. st.</td><td>Zagrebačka filološka škola</td></tr>
            <tr><td><strong>Vuk Karadžić</strong></td><td>1850.</td><td>srp. fonetski pravopis</td></tr>
            <tr><td><strong>Ivan Broz</strong></td><td>1892.</td><td>Hrvatski pravopis</td></tr>
            <tr><td><strong>T. Maretić</strong></td><td>1899.</td><td>(i)jekavski standard</td></tr>
            <tr><td><strong>Babić · Finka · Moguš</strong></td><td>1971.+</td><td>suvremeni hrv. pravopis</td></tr>
          </tbody>
        </table>
      </div>

      <!-- ZAMKE -->
      <div class="ref-section">
        <div class="ref-section-ttl">⚠ TOP NCVVO zamke</div>
        <div class="ref-zamke">
          <div><strong>Bašćanska ploča ≠ Vinodolski zakonik:</strong> Bašćanska (~1100., najstariji spomenik). Vinodolski (1288., najstariji pravni spomenik). Različiti dokumenti!</div>
          <div><strong>Glagoljicu</strong> stvorili Ćiril i Metod. <strong>Ćirilicu</strong> stvorili NJEGOVI UČENICI (Klement Ohridski, kraj 9. st.).</div>
          <div><strong>Bosančica = hrv. redakcija ćirilice</strong> (NIJE srpska). Specifične hrvatske jezične crte.</div>
          <div><strong>Bečki dogovor 1850.</strong>: hrv. + srp. književnici, štokavska osnova. Hrvati zadržali latinicu, Srbi ćirilicu.</div>
          <div><strong>Gaj 1830.</strong> reformirao SAMO LATINICU (uveo dijakritike). NIJE stvorio glagoljicu ni ćirilicu.</div>
          <div><strong>Refleksi „jat":</strong> ekavski (mleko, srp.), <strong>ijekavski (mlijeko, hrv. standard ⭐)</strong>, ikavski (mliko, dijal.).</div>
          <div><strong>Misal 1483.</strong> = prva tiskana hrv. knjiga. Glagoljica. Samo 28 god. nakon Gutenberga.</div>
          <div><strong>Deklaracija 1967.</strong> ⭐ NCVVO TOP: 17. ožujka, 130 potpisnika, branila samostalnost hrv. jezika protiv unitarizma.</div>
        </div>
      </div>

      <!-- FOOTER -->
      <div class="ref-footer">
        <span>maturiraj.hr · H23 povijest hrv. jezika · v1.0</span>
        <span>matura 2026</span>
      </div>

    </div>
  </div><!-- /l7 -->
</div><!-- /content-wrap -->
  <!-- ═══════════════════════════════════
       CROSS-CHAPTER NAVIGATION
  ═══════════════════════════════════ -->
  <div class="chapter-nav-wrap">
    <div class="chapter-nav-hdr">
      <div class="chapter-nav-title">📚 Sljedeća poglavlja</div>
      <div class="chapter-nav-sub">Nastavi učiti — povezana poglavlja u sustavu hrvatskoga jezika</div>
    </div>
    
    <div class="chapter-nav-grid">
      
      <a class="chapter-nav-card chapter-nav-prev" href="/skripte/hrv/h22">
        <div class="chapter-nav-arrow">←</div>
        <div class="chapter-nav-meta">
          <div class="chapter-nav-pill">PRETHODNO</div>
          <div class="chapter-nav-name">H22 · Leksikologija</div>
          <div class="chapter-nav-desc">Značenje riječi, frazemi, sinonimi i tropi</div>
        </div>
      </a>
      
      <a class="chapter-nav-card chapter-nav-next" href="/skripte/hrv/h24">
        <div class="chapter-nav-meta">
          <div class="chapter-nav-pill chapter-nav-pill-next">SLJEDEĆE</div>
          <div class="chapter-nav-name">H24 · Hrv. narječja</div>
          <div class="chapter-nav-desc">Kajkavski, čakavski, štokavski — detaljno</div>
        </div>
        <div class="chapter-nav-arrow">→</div>
      </a>
      
    </div>

    <!-- Related chapters -->
    <div class="chapter-nav-related">
      <div class="chapter-nav-related-ttl">🔗 Povezana poglavlja</div>
      <div class="chapter-nav-related-grid">
        <a class="chapter-nav-mini" href="/skripte/hrv/h19">
          <span class="chapter-nav-mini-code">H19</span>
          <span class="chapter-nav-mini-name">Fonologija i pravopis</span>
        </a>
        <a class="chapter-nav-mini" href="/skripte/hrv/h20">
          <span class="chapter-nav-mini-code">H20</span>
          <span class="chapter-nav-mini-name">Morfologija</span>
        </a>
        <a class="chapter-nav-mini" href="/skripte/hrv/h21">
          <span class="chapter-nav-mini-code">H21</span>
          <span class="chapter-nav-mini-name">Sintaksa</span>
        </a>
        <a class="chapter-nav-mini" href="/skripte/hrv/h22">
          <span class="chapter-nav-mini-code">H22</span>
          <span class="chapter-nav-mini-name">Leksikologija</span>
        </a>
      </div>
    </div>
  </div>

  
  <!-- ══ MODULE FOOTER (v3.6) ══ -->
  <footer class="mod-foot" role="contentinfo">
    <div class="foot-line"><b>Maturiraj.hr</b> · Hrvatski · H23 Sintaksa II — složene rečenice</div>
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
  <span id="tip-bar-txt">💡 <strong>Tip:</strong> Koristi Sintaktički parser za analizu rečenica i Tree visualizer za vizualni prikaz.</span>
</div>

<!-- FROM BANNER -->
<div class="from-banner" id="from-banner">
  <span>📎</span><span id="from-txt">Dolaziš iz prethodnog poglavlja</span>
</div>




`;

const CHAPTER_CSS_DELTA = `
@keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}

@keyframes layerIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}

@keyframes fadeIn{from{opacity:0}to{opacity:1}}

@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(220,50,47,.3)}50%{box-shadow:0 0 0 8px rgba(220,50,47,.0)}}

@keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}

@keyframes diagFade{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}

@media(max-width:1200px){
  .sidebar{position:fixed;left:0;top:0;bottom:0;height:100%;z-index:180;
    transform:translateX(-100%);transition:transform .25s cubic-bezier(.4,0,.2,1);
    pointer-events:none}
  .sidebar.mobile-open{transform:translateX(0)!important;pointer-events:auto}
  .sb-hamburger{display:flex!important}
  .main{width:100%!important;max-width:100%!important;flex:1!important}
}

@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}

.nav-row:has(> :only-child){justify-content:flex-end}


/* ══ PRINT ══ */
@media print{
  body{background:white!important;color:black!important}
  body::before,body::after{display:none!important}
  .sidebar,.tabs,.sb-hamburger,.tip-bar,.discere-banner,.reveal-lock-btn,
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
  .hero-title{font-size:22px}
  .qnav{grid-template-columns:1fr 1fr}
  .bc-tab,.bc-tab-sep{display:none}
  .tabs{width:100%;max-width:100%;overflow-x:auto;padding:2px}
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


/* === H20 POJMOVNIK CUSTOM CSS === */
.pojm-fbt{font-family:var(--display);font-size:12px;font-weight:600;padding:7px 13px;border-radius:20px;background:transparent;border:1.5px solid var(--bd);color:var(--t2);cursor:pointer;transition:all .2s ease;letter-spacing:.2px;white-space:nowrap;display:inline-flex;align-items:center;gap:4px}

.pojm-fbt:hover{border-color:var(--gold);color:var(--t1);transform:translateY(-1px)}

.pojm-fbt.on{background:var(--gold);border-color:var(--gold);color:#0F0605;box-shadow:0 2px 8px rgba(233,180,70,.25);font-weight:700}

.pojm-fbt.on:hover{background:var(--gold);color:#0F0605;transform:translateY(-1px)}

@media (max-width:480px){
  .pojm-fbt{font-size:11px;padding:6px 10px}
}


/* pojm-grid cards */
.pojm-grid-wrap{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;margin:16px 0}

.pojm-card-h20{padding:14px 16px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1);cursor:pointer;transition:all .2s;position:relative}

.pojm-card-h20:hover{border-color:var(--gold);transform:translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,.2)}

.pojm-card-h20 .pc-kat{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;color:var(--bronze);text-transform:uppercase;margin-bottom:6px}

.pojm-card-h20 .pc-term{font-family:var(--display);font-size:16px;font-weight:700;color:var(--t1);margin-bottom:6px;line-height:1.3}

.pojm-card-h20 .pc-def{font-size:12px;line-height:1.5;color:var(--t2);display:none}

.pojm-card-h20.open .pc-def{display:block;margin-top:8px;padding-top:8px;border-top:1px solid var(--bd)}

.pojm-card-h20 .pc-hint{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:1px}

.pojm-card-h20.open .pc-hint{display:none}


/* === PRINT CSS (za A4 ispis Tab 7) === */
@media print {
  body { background: white !important; color: black !important; }
  .sidebar, .tabs, nav, footer, .tab-done, .tab-badge, .nav-row, 
  .discere-banner, .from-banner, .countdown, .progress-ring,
  .tip-bar, button, .nb-btn { display: none !important; }
  .layer { display: block !important; background: white !important; }
  .layer:not(#l7) { display: none !important; }
  main, .content-wrap { width: 100% !important; max-width: 100% !important; padding: 0 !important; margin: 0 !important; background: white !important; }
  table { page-break-inside: avoid; background: white !important; }
  .box-int, .box-key, .box-warn, .box-signal { background: #f9f9f9 !important; color: black !important; border: 1px solid #ccc !important; }
  h1, h2, h3, h4, .sec-badge { color: black !important; }
  .pill { background: white !important; color: black !important; border: 1px solid #ccc !important; }
  * { box-shadow: none !important; }
  @page { size: A4; margin: 1.5cm; }
}

.hchip:hover{transform:translateY(-2px);box-shadow:0 4px 12px rgba(233,180,70,.15)}

.hchip::after{
  content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.1),transparent);
  transition:left .6s ease;
}

.hchip:hover::after{left:100%}

.scene-card::before{
  content:'';
  position:absolute;
  top:0;left:0;right:0;
  height:3px;
  background:linear-gradient(90deg, var(--gold), var(--bronze));
  transform:scaleX(0);
  transform-origin:left;
  transition:transform .4s ease;
}

.scene-card:hover::before{transform:scaleX(1)}

.scene-card.open::before{transform:scaleX(1)}

.box-warn .bw-body{border-left:3px solid var(--red)!important}


/* Tablice — modernize */
table{border-radius:var(--r2);overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.1)}

thead tr{background:linear-gradient(135deg, var(--ele) 0%, var(--bg) 100%)!important}

table tbody tr{transition:background .15s ease}

table tbody tr:hover{background:rgba(233,180,70,.04)!important}

.pill:hover{transform:translateY(-1px);box-shadow:0 2px 6px rgba(0,0,0,.15)}


/* Pojm cards — premium */
.pojm-card-h20{
  position:relative;
  overflow:hidden;
  transition:all .25s ease;
  background:linear-gradient(135deg, var(--ele) 0%, transparent 100%);
}

.pojm-card-h20::before{
  content:'';
  position:absolute;
  top:0;left:0;
  width:3px;height:100%;
  background:var(--gold);
  transform:scaleY(0);
  transform-origin:top;
  transition:transform .3s ease;
}

.pojm-card-h20:hover::before,
.pojm-card-h20.open::before{transform:scaleY(1)}


/* Audio button — distinct style */
button[onclick*="speakWord"]{
  background:linear-gradient(135deg, rgba(74,144,217,.1) 0%, rgba(74,144,217,.05) 100%)!important;
  border:1px solid rgba(74,144,217,.3)!important;
  transition:all .2s ease;
}

button[onclick*="speakWord"]:hover{
  background:linear-gradient(135deg, rgba(74,144,217,.2) 0%, rgba(74,144,217,.1) 100%)!important;
  border-color:var(--blue)!important;
  transform:scale(1.05);
}


/* Input field — premium */
input#scan-input{
  transition:all .25s ease;
  background:linear-gradient(135deg, var(--bg) 0%, var(--ele) 100%);
}

input#scan-input:focus{
  border-color:var(--gold)!important;
  box-shadow:0 0 0 3px rgba(233,180,70,.15);
}

.tab::after{
  content:'';
  position:absolute;
  bottom:-1px;left:50%;
  width:0;height:2px;
  background:var(--gold);
  transition:all .3s ease;
  transform:translateX(-50%);
}

.tab:hover::after,.tab.on::after{width:80%}


/* Stats cards — glow effect */
[style*="grid-template-columns:repeat(auto-fit,minmax(120px,1fr))"] > div{
  transition:all .25s ease;
  cursor:default;
}

[style*="grid-template-columns:repeat(auto-fit,minmax(120px,1fr))"] > div:hover{
  transform:translateY(-2px);
  box-shadow:0 4px 16px rgba(233,180,70,.15);
  border-color:var(--gold)!important;
}


/* Timeline dots — pulse */
@keyframes pulse-dot{
  0%,100%{box-shadow:0 0 0 0 rgba(233,180,70,.4)}
  50%{box-shadow:0 0 0 8px rgba(233,180,70,0)}
}

[style*="border-radius:50%"][style*="background:var(--gold)"]{
  animation:pulse-dot 2s ease-in-out infinite;
}


/* Selection color */
::selection{background:var(--gold);color:#0F0605}


/* Tag pills — animated */
.tags .pill{animation:tagFadeIn .4s ease backwards}

.tags .pill:nth-child(1){animation-delay:.05s}

.tags .pill:nth-child(2){animation-delay:.1s}

.tags .pill:nth-child(3){animation-delay:.15s}

.tags .pill:nth-child(4){animation-delay:.2s}

.tags .pill:nth-child(5){animation-delay:.25s}

@keyframes tagFadeIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}

@keyframes layerFade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}


/* Mobile improvements */
@media (max-width:768px){
  .sec-badge{font-size:11px;padding:8px 14px}
  .scene-card{padding:14px}
  .box-int,.box-key,.box-warn,.box-signal{padding:14px}
}


/* === REFERENTNA TABLICA (Tab 7) === */
.ref-section {
  background: var(--ele);
  border: 1px solid var(--bd);
  border-radius: var(--r2);
  padding: 18px 20px;
  margin-bottom: 20px;
  page-break-inside: avoid;
}

.ref-h1 {
  font-family: var(--display);
  font-size: 18px;
  font-weight: 700;
  color: var(--gold);
  border-bottom: 2px solid rgba(233,180,70,.3);
  padding-bottom: 10px;
  margin-bottom: 14px;
}

.ref-subttl {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 1.5px;
  color: var(--t2);
  font-weight: 700;
  margin: 14px 0 8px;
  text-transform: uppercase;
}

.ref-tbl {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--mono);
  font-size: 12px;
  margin: 6px 0;
}

.ref-tbl thead tr {
  background: var(--bg);
  border-bottom: 2px solid var(--bd);
}

.ref-tbl th {
  padding: 8px 10px;
  text-align: left;
  color: var(--gold);
  font-weight: 700;
  font-size: 11px;
}

.ref-tbl td {
  padding: 6px 10px;
  border-bottom: 1px solid var(--bd);
  color: var(--t1);
  vertical-align: top;
}

.ref-tbl tbody tr:hover {
  background: rgba(233,180,70,.03);
}

.ref-tbl tbody tr:last-child td {
  border-bottom: none;
}

.ref-note {
  margin-top: 12px;
  padding: 10px 14px;
  background: rgba(74,144,217,.05);
  border-left: 3px solid var(--blue);
  border-radius: var(--r1);
  font-size: 12px;
  line-height: 1.5;
  color: var(--t2);
}


/* Print mode */
.print-only { display: none; }


@media print {
  body { background: #fff !important; color: #000 !important; }
  .no-print { display: none !important; }
  .print-only { display: block !important; }
  
  header, .sidebar, .bottom-nav, .tabs-wrap, #rpbar, #btt, #sb-overlay, #tip-bar, .from-banner {
    display: none !important;
  }
  
  .content-wrap { max-width: 100% !important; padding: 0 !important; margin: 0 !important; }
  .layer { display: block !important; }
  .layer:not(#l7) { display: none !important; }
  
  .ref-section {
    background: #fff !important;
    border: 1px solid #999 !important;
    color: #000 !important;
    page-break-inside: avoid;
    break-inside: avoid;
    margin-bottom: 14px !important;
    padding: 12px 14px !important;
  }
  .ref-h1 {
    color: #000 !important;
    border-bottom: 2px solid #000 !important;
    font-size: 16px !important;
  }
  .ref-subttl {
    color: #000 !important;
    font-size: 10px !important;
  }
  .ref-tbl {
    font-size: 10px !important;
  }
  .ref-tbl thead tr {
    background: #eee !important;
    border-bottom: 1px solid #000 !important;
  }
  .ref-tbl th, .ref-tbl td {
    color: #000 !important;
    border-bottom: 1px solid #ccc !important;
  }
  .ref-note {
    background: #f5f5f5 !important;
    color: #000 !important;
    border-left: 2px solid #000 !important;
    font-size: 10px !important;
  }
  
  @page {
    size: A4;
    margin: 1.5cm;
  }
  
  h1, h2, h3, h4 { page-break-after: avoid; }
}

.hero::before{
  content:'';
  position:absolute;
  top:-50%;left:-50%;width:200%;height:200%;
  background:radial-gradient(circle at 30% 50%, rgba(233,180,70,.06) 0%, transparent 40%),
             radial-gradient(circle at 70% 80%, rgba(74,144,217,.04) 0%, transparent 40%);
  pointer-events:none;
  animation:heroShimmer 12s ease-in-out infinite;
}

@keyframes heroShimmer{
  0%,100%{transform:translate(0,0) scale(1)}
  50%{transform:translate(2%,-2%) scale(1.05)}
}

.scene-card:hover:not(.open){
  border-left-color:var(--gold);
  transform:translateX(2px);
  box-shadow:-2px 0 12px rgba(233,180,70,.08), 0 4px 20px rgba(0,0,0,.15);
}

.scene-card .scene-arrow{
  transition:transform .3s cubic-bezier(.4,0,.2,1);
}

.scene-card.open .scene-arrow{
  transform:rotate(180deg);
  color:var(--gold);
}


/* Tables — premium hover */
table tbody tr{
  transition:background .15s ease;
}

table tbody tr:hover{
  background:rgba(233,180,70,.04);
}

.pill:hover, .hchip:hover{
  transform:translateY(-1px);
  box-shadow:0 2px 8px rgba(0,0,0,.15);
}

@keyframes tabDonePulse{
  0%,100%{opacity:1}
  50%{opacity:.6}
}

.qz-opt:hover:not(.correct):not(.wrong){
  border-color:var(--gold);
  background:rgba(233,180,70,.05);
  transform:translateX(2px);
}

@keyframes correctPulse{
  0%{transform:scale(1)}
  50%{transform:scale(1.02)}
  100%{transform:scale(1)}
}

@keyframes wrongShake{
  0%,100%{transform:translateX(0)}
  25%{transform:translateX(-4px)}
  75%{transform:translateX(4px)}
}


/* Tags fade-in stagger */
.tags > * {
  opacity:0;
  animation:tagFadeIn .4s ease forwards;
}

.tags > *:nth-child(1){ animation-delay:.05s }

.tags > *:nth-child(2){ animation-delay:.1s }

.tags > *:nth-child(3){ animation-delay:.15s }

.tags > *:nth-child(4){ animation-delay:.2s }

.tags > *:nth-child(5){ animation-delay:.25s }

@keyframes tagFadeIn{
  to{opacity:1; transform:translateY(0)}
  from{opacity:0; transform:translateY(8px)}
}


/* Pojmovnik card hover */
.pojm-card-h20{
  transition:all .2s cubic-bezier(.4,0,.2,1);
}

.pojm-card-h20:hover{
  border-color:var(--gold);
  transform:translateY(-2px);
  box-shadow:0 6px 20px rgba(0,0,0,.15);
}


/* Mobile responsive — better small screens */
@media (max-width: 600px){
  .hero-title{ font-size:32px !important; }
  .scene-card{ padding:14px !important; }
  .ref-tbl{ font-size:11px !important; }
  .ref-h1{ font-size:16px !important; }
}


/* Decliner & Scanner result — fade in */
#ms-results > *, #decl-results > *{
  animation:resultFadeIn .4s ease;
}

@keyframes resultFadeIn{
  from{opacity:0; transform:translateY(8px)}
  to{opacity:1; transform:translateY(0)}
}


/* Focus rings — accessibility */
button:focus-visible, [role="button"]:focus-visible{
  outline:2px solid var(--gold);
  outline-offset:2px;
}

@keyframes checkPop{
  0%{transform:scale(.8)}
  50%{transform:scale(1.15)}
  100%{transform:scale(1)}
}


/* Print improvements */
@media print{
  .hero, .countdown-wrap, header.hero{ display:none !important; }
  body{ background:#fff !important; color:#000 !important; }
  .scene-card{ box-shadow:none !important; border:1px solid #999 !important; }
  .scene-card .scene-body{ display:block !important; }
}




/* (Removed: HERO V2 — PREMIUM UPGRADE — restored to classic H19/H18 style) */
/* (Removed: TAB INTRO CARD — used at top of tabs — restored to classic H19/H18 style) */
/* ═══════════════════════════════════
   DETAILS / SUMMARY POLISH (collapsible)
═══════════════════════════════════ */
details summary{
  list-style:none;
  outline:none;
}

details summary::-webkit-details-marker{display:none}

details summary::marker{display:none;content:''}


details summary > span:last-child{
  transition:transform .2s ease;
}

details[open] summary > span:last-child{
  transform:rotate(180deg);
}

details > div{
  animation:detailsOpen .25s ease;
}

@keyframes detailsOpen{
  from{opacity:0;transform:translateY(-4px)}
  to{opacity:1;transform:translateY(0)}
}

details:hover summary{
  color:var(--gold);
}


/* ═══════════════════════════════════
   IMPROVED FOCUS STATES (a11y)
═══════════════════════════════════ */
*:focus{outline:none}

*:focus-visible{
  outline:2px solid var(--gold);
  outline-offset:2px;
  border-radius:4px;
}

button:focus-visible, [role="button"]:focus-visible, a:focus-visible{
  outline:2px solid var(--gold);
  outline-offset:3px;
}

input:focus-visible, textarea:focus-visible{
  outline:2px solid var(--gold);
  outline-offset:0;
  border-color:var(--gold) !important;
}


/* ═══════════════════════════════════
   PRINT — ensure detail/summary expand
═══════════════════════════════════ */
@media print{
  details{
    border:1px solid #999 !important;
    page-break-inside:avoid;
  }
  details > div{
    display:block !important;
  }
  details:not([open]) > div{
    display:block !important;
  }
  details > summary > span:last-child{
    display:none !important;
  }
}


/* ═══════════════════════════════════
   REDUCED MOTION (a11y)
═══════════════════════════════════ */
@media (prefers-reduced-motion: reduce){
  *, *::before, *::after{
    animation-duration:.01ms !important;
    animation-iteration-count:1 !important;
    transition-duration:.01ms !important;
    scroll-behavior:auto !important;
  }
  .floater, .ti-icon-ring, .status-dot, .badge-new{
    animation:none !important;
  }
}


/* ═══════════════════════════════════
   LARGE TEXT MODE (a11y user preference)
═══════════════════════════════════ */
@media (min-resolution: 192dpi){
  body{font-size:15px}
}



/* (Removed: QUICK SEARCH (Cmd/Ctrl+K) — restored to classic H19/H18 style) */
/* ═══════════════════════════════════
   TAB 1 · KLIK-IDENTIFIKACIJA VJEŽBA
═══════════════════════════════════ */
.rc-card{
  padding:22px 24px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r2);
  margin:16px 0;
  box-shadow:0 4px 16px rgba(0,0,0,.08);
}


.rc-meta{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:10px;
  margin-bottom:14px;
  font-family:var(--mono);
  font-size:11px;
  color:var(--t3);
  letter-spacing:.5px;
  flex-wrap:wrap;
}

.rc-meta strong{color:var(--t1)}

.rc-progress{flex:1;min-width:120px}

.rc-diff{
  padding:3px 9px;
  border:1px solid;
  border-radius:10px;
  font-size:9.5px;
  letter-spacing:1px;
  font-weight:700;
}

.rc-score{color:var(--gold)}


.rc-question{
  font-family:var(--serif);
  font-size:14px;
  color:var(--t2);
  margin-bottom:14px;
  line-height:1.5;
}


.rc-sentence{
  padding:18px 20px;
  background:var(--bg);
  border:1px solid var(--bd);
  border-radius:var(--r1);
  margin-bottom:18px;
  font-family:var(--display);
  font-size:18px;
  line-height:1.7;
  color:var(--t1);
  text-align:center;
  letter-spacing:.2px;
}

.rc-word{
  display:inline-block;
  padding:2px 6px;
  border-radius:4px;
  transition:background .2s ease;
}

.rc-target{
  display:inline-block;
  padding:3px 10px;
  background:linear-gradient(135deg, rgba(233,180,70,.18), rgba(233,180,70,.08));
  border:1.5px solid var(--gold);
  border-radius:6px;
  color:var(--gold);
  font-weight:700;
  box-shadow:0 0 12px rgba(233,180,70,.2);
  animation:rcTargetPulse 2.5s ease-in-out infinite;
}

@keyframes rcTargetPulse{
  0%,100%{box-shadow:0 0 12px rgba(233,180,70,.2)}
  50%{box-shadow:0 0 20px rgba(233,180,70,.4)}
}

.rc-punct{
  color:var(--t3);
  margin-left:-4px;
}


.rc-options{
  display:grid;
  grid-template-columns:repeat(5, 1fr);
  gap:6px;
  margin-bottom:8px;
}

.rc-opt{
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:4px;
  padding:14px 8px;
  background:var(--bg);
  border:1.5px solid var(--bd);
  border-radius:var(--r1);
  cursor:pointer;
  transition:all .2s cubic-bezier(.4,0,.2,1);
  font-family:var(--mono);
  color:var(--t1);
}

.rc-opt:hover:not(:disabled){
  border-color:var(--opt-color);
  background:rgba(255,255,255,.02);
  transform:translateY(-2px);
  box-shadow:0 4px 12px rgba(0,0,0,.15);
}

.rc-opt:disabled{
  cursor:not-allowed;
  opacity:.6;
}

.rc-opt-short{
  font-size:18px;
  font-weight:800;
  font-family:var(--display);
  color:var(--opt-color);
  letter-spacing:.5px;
}

.rc-opt-label{
  font-size:11px;
  letter-spacing:.5px;
  color:var(--t2);
  text-align:center;
}


.rc-opt.rc-correct{
  border-color:var(--green) !important;
  background:rgba(80,200,120,.1);
  opacity:1 !important;
  animation:rcBoom .4s ease;
}

.rc-opt.rc-correct .rc-opt-short{color:var(--green)}

.rc-opt.rc-correct .rc-opt-label{color:var(--green)}

.rc-opt.rc-wrong{
  border-color:var(--red) !important;
  background:rgba(224,82,82,.08);
  opacity:1 !important;
  animation:rcShake .35s ease;
}

.rc-opt.rc-wrong .rc-opt-short{color:var(--red)}


@keyframes rcBoom{
  0%{transform:scale(1)}
  40%{transform:scale(1.08)}
  100%{transform:scale(1)}
}

@keyframes rcShake{
  0%,100%{transform:translateX(0)}
  20%{transform:translateX(-6px)}
  40%{transform:translateX(6px)}
  60%{transform:translateX(-3px)}
  80%{transform:translateX(3px)}
}


.rc-feedback{
  display:none;
  padding:14px 16px;
  border-radius:var(--r1);
  margin-top:14px;
  animation:rcFbIn .3s ease;
}

@keyframes rcFbIn{
  from{opacity:0;transform:translateY(-6px)}
  to{opacity:1;transform:translateY(0)}
}

.rc-fb-correct{
  background:rgba(80,200,120,.08);
  border:1px solid rgba(80,200,120,.3);
  border-left:3px solid var(--green);
}

.rc-fb-wrong{
  background:rgba(224,82,82,.06);
  border:1px solid rgba(224,82,82,.3);
  border-left:3px solid var(--red);
}

.rc-fb-head{
  font-family:var(--display);
  font-size:14px;
  margin-bottom:8px;
  color:var(--t1);
}

.rc-fb-exp{
  font-family:var(--serif);
  font-size:13px;
  line-height:1.6;
  color:var(--t2);
  margin-bottom:12px;
}

.rc-fb-actions{
  display:flex;
  justify-content:flex-end;
  gap:8px;
}


.rc-result-card{
  padding:28px 24px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r2);
  margin:16px 0;
  text-align:center;
  box-shadow:0 8px 32px rgba(0,0,0,.15);
}

.rc-result-bar{
  height:8px;
  background:var(--bg);
  border-radius:4px;
  overflow:hidden;
  margin:0 auto;
  max-width:400px;
}

.rc-result-fill{
  height:100%;
  border-radius:4px;
  transition:width .8s cubic-bezier(.4,0,.2,1);
}


/* Mobile */
@media (max-width:640px){
  .rc-card{padding:16px 14px}
  .rc-sentence{font-size:16px;padding:14px 12px}
  .rc-options{grid-template-columns:repeat(3, 1fr);gap:5px}
  .rc-opt{padding:12px 6px}
  .rc-opt-short{font-size:16px}
  .rc-opt-label{font-size:10px}
  .rc-meta{font-size:10px}
}


/* Print */
@media print{
  .rc-options, .rc-fb-actions{display:none !important}
  .rc-target{background:#fff !important;border:1px solid #000 !important;color:#000 !important;animation:none !important}
}



/* ═══════════════════════════════════
   TAB 2 · VRSTE REČENICA VJEŽBA
═══════════════════════════════════ */
.vr-card{
  padding:22px 24px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r2);
  margin:16px 0;
  box-shadow:0 4px 16px rgba(0,0,0,.08);
}

.vr-meta{
  display:flex;
  justify-content:space-between;
  gap:10px;
  margin-bottom:14px;
  font-family:var(--mono);
  font-size:11px;
  color:var(--t3);
  letter-spacing:.5px;
}

.vr-meta strong{color:var(--t1)}

.vr-score{color:var(--gold)}

.vr-sentence{
  padding:18px 20px;
  background:var(--bg);
  border:1px solid var(--bd);
  border-left:3px solid var(--gold);
  border-radius:var(--r1);
  margin-bottom:18px;
  font-family:var(--display);
  font-size:18px;
  line-height:1.6;
  color:var(--t1);
  text-align:center;
  font-style:italic;
}

.vr-q-block{
  margin-bottom:18px;
  padding-bottom:18px;
  border-bottom:1px dashed var(--bd);
}

.vr-q-block:last-of-type{border-bottom:none;padding-bottom:0;margin-bottom:0}

.vr-q-label{
  display:flex;
  align-items:center;
  gap:8px;
  font-family:var(--display);
  font-size:13.5px;
  color:var(--t1);
  margin-bottom:10px;
}

.vr-q-num{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:22px;height:22px;
  background:var(--gold);
  color:#0F0605;
  border-radius:50%;
  font-family:var(--mono);
  font-size:11px;
  font-weight:800;
}

.vr-options{
  display:grid;
  gap:8px;
  margin-bottom:8px;
}

.vr-options-3{grid-template-columns:repeat(3, 1fr)}

.vr-options-5{grid-template-columns:repeat(auto-fit, minmax(80px, 1fr))}

.vr-opt{
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:4px;
  padding:12px 6px;
  background:var(--bg);
  border:1.5px solid var(--bd);
  border-radius:var(--r1);
  cursor:pointer;
  transition:all .2s cubic-bezier(.4,0,.2,1);
  font-family:var(--mono);
  color:var(--t1);
}

.vr-opt:hover:not(:disabled){
  border-color:var(--opt-color);
  transform:translateY(-2px);
  box-shadow:0 4px 12px rgba(0,0,0,.15);
}

.vr-opt:disabled{cursor:not-allowed;opacity:.6}

.vr-opt-short{
  font-size:18px;
  font-weight:800;
  font-family:var(--display);
  color:var(--opt-color);
}

.vr-opt-label{
  font-size:10px;
  letter-spacing:.3px;
  color:var(--t2);
  text-align:center;
}

.vr-opt.vr-correct{
  border-color:var(--green) !important;
  background:rgba(80,200,120,.1);
  opacity:1 !important;
  animation:rcBoom .4s ease;
}

.vr-opt.vr-correct .vr-opt-short{color:var(--green)}

.vr-opt.vr-wrong{
  border-color:var(--red) !important;
  background:rgba(224,82,82,.08);
  opacity:1 !important;
  animation:rcShake .35s ease;
}

.vr-opt.vr-wrong .vr-opt-short{color:var(--red)}

.vr-fb{
  display:none;
  padding:10px 12px;
  border-radius:var(--r1);
  margin-top:10px;
  font-family:var(--serif);
  font-size:12.5px;
  line-height:1.55;
  animation:rcFbIn .3s ease;
}

.vr-fb-correct{
  background:rgba(80,200,120,.08);
  border-left:3px solid var(--green);
  color:var(--t2);
}

.vr-fb-wrong{
  background:rgba(224,82,82,.06);
  border-left:3px solid var(--red);
  color:var(--t2);
}


/* Mobile */
@media (max-width:640px){
  .vr-card{padding:16px 14px}
  .vr-sentence{font-size:15px;padding:14px 12px}
  .vr-options-3{grid-template-columns:repeat(3, 1fr);gap:6px}
  .vr-options-5{grid-template-columns:repeat(5, 1fr);gap:4px}
  .vr-opt{padding:10px 4px}
  .vr-opt-short{font-size:14px}
  .vr-opt-label{font-size:9px}
}

@media (max-width:420px){
  .vr-options-5{grid-template-columns:repeat(3, 1fr)}
}


/* Print */
@media print{
  .vr-options, #vr-next-wrap{display:none !important}
}



/* ═══════════════════════════════════
   TAB 3 · KLASIFIKACIJA SLOŽENIH
═══════════════════════════════════ */
.ss-card{
  padding:22px 24px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r2);
  margin:16px 0;
  box-shadow:0 4px 16px rgba(0,0,0,.08);
}


/* Vrsta options grid — auto-fit */
.ss-opt-grid-nz{
  grid-template-columns:repeat(3, 1fr);
  gap:8px;
}

.ss-opt-grid-zv{
  grid-template-columns:repeat(4, 1fr);
  gap:6px;
}

.vr-opt-vrsta{
  padding:10px 6px;
  min-height:42px;
  display:flex;
  align-items:center;
  justify-content:center;
}

.vr-opt-vrsta:hover:not(:disabled){
  border-color:var(--opt-color);
  background:rgba(255,255,255,.02);
}

.vr-opt-vrsta .vr-opt-label{
  text-align:center;
  line-height:1.3;
}


/* Mobile */
@media (max-width:640px){
  .ss-opt-grid-nz{grid-template-columns:repeat(2, 1fr)}
  .ss-opt-grid-zv{grid-template-columns:repeat(3, 1fr);gap:5px}
  .vr-opt-vrsta{padding:8px 4px;min-height:38px}
  .vr-opt-vrsta .vr-opt-label{font-size:10px !important}
}

@media (max-width:420px){
  .ss-opt-grid-zv{grid-template-columns:repeat(2, 1fr)}
}


/* Print */
@media print{
  .ss-card{break-inside:avoid}
  #ss-q2-wrap, #ss-next-wrap{display:none !important}
}



/* ═══════════════════════════════════
   TAB 5 · SINTAKTIČKI PARSER
═══════════════════════════════════ */
.parser-card{
  padding:20px 22px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r2);
  margin:16px 0;
  box-shadow:0 4px 16px rgba(0,0,0,.08);
}

.parser-input-wrap{
  margin-bottom:18px;
}

#parser-input:focus{
  border-color:var(--gold) !important;
  box-shadow:0 0 0 3px rgba(233,180,70,.1);
}


.parser-output{
  margin-top:14px;
  border-top:1px dashed var(--bd);
  padding-top:14px;
}

.prs-result{
  display:flex;
  flex-direction:column;
  gap:18px;
  animation:rcFbIn .3s ease;
}

.prs-section{
  padding:14px 16px;
  background:var(--bg);
  border:1px solid var(--bd);
  border-radius:var(--r1);
}

.prs-section-lbl{
  font-family:var(--mono);
  font-size:10px;
  letter-spacing:2px;
  color:var(--gold);
  margin-bottom:10px;
}


/* Annotated sentence */
.prs-sentence{
  padding:14px 16px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r1);
  font-family:var(--display);
  font-size:17px;
  line-height:1.9;
  color:var(--t1);
  text-align:center;
  margin-bottom:10px;
}

.prs-tok{
  display:inline-block;
  padding:3px 9px;
  border-radius:5px;
  border:1.5px solid var(--mc);
  background:rgba(255,255,255,.02);
  color:var(--t1);
  font-weight:600;
  margin:0 1px;
  cursor:default;
  transition:all .2s ease;
}

.prs-tok:hover{
  background:rgba(255,255,255,.05);
  transform:translateY(-1px);
}

.prs-pred{
  border-color:var(--red);
  background:rgba(224,82,82,.08);
}

.prs-veznik{
  border-color:var(--gold);
  background:rgba(233,180,70,.1);
  font-style:italic;
}

.prs-tok-plain{color:var(--t2)}

.prs-punct{color:var(--t3);margin-left:-3px}


/* Legend */
.prs-legend{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
  justify-content:center;
  margin-top:10px;
  font-family:var(--mono);
  font-size:10px;
  color:var(--t3);
}

.prs-leg{
  display:flex;
  align-items:center;
  gap:5px;
}

.prs-leg-dot{
  width:9px;height:9px;
  background:var(--mc);
  border-radius:2px;
}


/* Info grid */
.prs-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
  gap:10px;
}

.prs-info-card{
  padding:12px 14px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-left:3px solid var(--gold);
  border-radius:var(--r1);
}

.prs-info-lbl{
  font-family:var(--mono);
  font-size:9.5px;
  letter-spacing:1.5px;
  color:var(--t3);
  margin-bottom:4px;
}

.prs-info-val{
  font-family:var(--display);
  font-weight:700;
  font-size:14px;
  color:var(--t1);
  margin-bottom:4px;
}

.prs-info-detail{
  font-family:var(--serif);
  font-size:11.5px;
  color:var(--t2);
  line-height:1.5;
}


/* Chips row */
.prs-chips-row{
  display:flex;
  flex-wrap:wrap;
  gap:6px;
}

.prs-chip{
  display:inline-flex;
  align-items:center;
  gap:6px;
  padding:5px 10px;
  background:var(--ele);
  border:1px solid var(--mc);
  border-radius:14px;
  font-family:var(--mono);
  font-size:11px;
  color:var(--t1);
}

.prs-chip-tag{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-width:18px;
  height:18px;
  padding:0 5px;
  background:var(--mc);
  color:#0F0605;
  border-radius:9px;
  font-size:9.5px;
  font-weight:800;
  letter-spacing:.3px;
}


/* Tree */
.prs-tree-wrap{
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r1);
  padding:10px;
  overflow-x:auto;
}

.prs-tree-svg{
  width:100%;
  min-width:500px;
  height:auto;
  display:block;
}


/* AI tutor card */
.ai-tutor-card{
  padding:20px 22px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-left:3px solid var(--blue);
  border-radius:var(--r2);
  margin:16px 0;
  box-shadow:0 4px 16px rgba(0,0,0,.08);
}

#ai-input:focus{
  border-color:var(--blue) !important;
  box-shadow:0 0 0 3px rgba(74,144,217,.1);
}

.ai-answer{
  margin-top:14px;
  padding:16px 18px;
  background:var(--bg);
  border:1px solid var(--bd);
  border-radius:var(--r1);
}

.ai-spinner{
  display:inline-block;
  width:14px;height:14px;
  border:2px solid var(--bd);
  border-top-color:var(--gold);
  border-radius:50%;
  animation:aiSpin .8s linear infinite;
  margin-right:8px;
  vertical-align:middle;
}

@keyframes aiSpin{
  from{transform:rotate(0deg)}
  to{transform:rotate(360deg)}
}


/* Mobile */
@media (max-width:640px){
  .parser-card{padding:14px}
  .prs-sentence{font-size:14px;padding:10px 12px}
  .prs-tok{padding:2px 6px;font-size:13px}
  .prs-grid{grid-template-columns:1fr}
  .ai-tutor-card{padding:14px}
}


/* Print */
@media print{
  #parser-input, #ai-input, .nb-btn, .parser-input-wrap > div:last-child{display:none !important}
  .ai-spinner{display:none !important}
}



/* ═══════════════════════════════════
   TAB 4 · POJMOVNIK SINTAKSE
═══════════════════════════════════ */
.pojm-controls{
  margin:16px 0;
  padding:14px 16px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r2);
}

.pojm-search-wrap{
  display:flex;
  align-items:center;
  gap:10px;
  padding:10px 14px;
  background:var(--bg);
  border:1.5px solid var(--bd);
  border-radius:var(--r1);
  margin-bottom:12px;
  transition:border-color .2s ease;
}

.pojm-search-wrap:focus-within{
  border-color:var(--gold);
  box-shadow:0 0 0 3px rgba(233,180,70,.1);
}

.pojm-clear{
  background:none;
  border:none;
  color:var(--t3);
  cursor:pointer;
  font-size:14px;
  padding:4px 8px;
  border-radius:50%;
  transition:all .15s ease;
}

.pojm-clear:hover{background:var(--ele);color:var(--t1)}

.pojm-filter.active{
  background:rgba(233,180,70,.12);
  border-color:var(--gold);
  color:var(--gold);
  font-weight:700;
}

.pojm-stats{
  text-align:center;
  margin-top:6px;
}

.pojm-card-h21{
  padding:14px 16px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-left:3px solid var(--pc);
  border-radius:var(--r1);
  transition:all .2s cubic-bezier(.4,0,.2,1);
  display:flex;
  flex-direction:column;
}

.pojm-card-h21:hover{
  border-left-width:4px;
  transform:translateY(-2px);
  box-shadow:0 6px 16px rgba(0,0,0,.12);
}

.pojm-card-head{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  margin-bottom:8px;
  gap:10px;
}

.pojm-card-meta{
  display:flex;
  flex-wrap:wrap;
  gap:5px;
  flex:1;
}

.pojm-card-cat{
  font-family:var(--mono);
  font-size:9.5px;
  letter-spacing:1px;
  color:var(--pc);
  text-transform:uppercase;
  font-weight:700;
}

.pojm-card-ncvvo{
  font-family:var(--mono);
  font-size:9px;
  letter-spacing:.5px;
  color:var(--red);
  background:rgba(224,82,82,.1);
  padding:2px 6px;
  border-radius:8px;
  font-weight:700;
}

.pojm-card-tag{
  font-family:var(--mono);
  font-size:9px;
  letter-spacing:.5px;
  color:var(--t3);
  background:var(--bg);
  padding:2px 6px;
  border-radius:8px;
  border:1px solid var(--bd);
}

.pojm-card-star{
  background:none;
  border:none;
  color:var(--t3);
  cursor:pointer;
  font-size:18px;
  line-height:1;
  padding:2px 4px;
  transition:all .2s ease;
}

.pojm-card-star:hover{
  color:var(--gold);
  transform:scale(1.2);
}

.pojm-card-star.on{
  color:var(--gold);
}

.pojm-card-term{
  font-family:var(--display);
  font-weight:700;
  font-size:15px;
  color:var(--t1);
  margin-bottom:6px;
  line-height:1.3;
}

.pojm-card-def{
  font-family:var(--serif);
  font-size:13px;
  line-height:1.55;
  color:var(--t2);
  flex:1;
}


/* Mobile */
@media (max-width:640px){
  .pojm-grid{grid-template-columns:1fr}
  .pojm-card-h21{padding:12px 14px}
  .pojm-card-term{font-size:14px}
  .pojm-card-def{font-size:12.5px}
  .pojm-filter{font-size:10px;padding:5px 10px}
}


/* Print */
@media print{
  .pojm-controls{display:none !important}
  .pojm-grid{display:block !important}
  .pojm-card-h21{break-inside:avoid;margin-bottom:8px}
  .pojm-card-star{display:none !important}
}



/* ═══════════════════════════════════
   TAB 7 · REFERENTNA TABLICA (A4 print)
═══════════════════════════════════ */
.ref-actions{
  display:flex;
  gap:10px;
  margin:14px 0;
  justify-content:center;
}


.ref-sheet{
  background:#fff;
  color:#000;
  padding:18px 20px;
  margin:16px auto;
  max-width:800px;
  border:1px solid var(--bd);
  border-radius:8px;
  box-shadow:0 8px 32px rgba(0,0,0,.3);
  font-family:Georgia, 'Times New Roman', serif;
  font-size:11px;
  line-height:1.4;
  transition:transform .3s ease;
}

.ref-sheet.zoomed{
  transform:scale(1.15);
  transform-origin:top center;
  margin-bottom:60px;
}


/* Header */
.ref-header{
  text-align:center;
  border-bottom:3px double #000;
  padding-bottom:8px;
  margin-bottom:12px;
}

.ref-title{
  font-family:Georgia, serif;
  font-size:18px;
  font-weight:800;
  letter-spacing:2px;
  color:#000;
  text-transform:uppercase;
}

.ref-subtitle{
  font-family:'Courier New', monospace;
  font-size:9px;
  color:#444;
  letter-spacing:1px;
  margin-top:2px;
}


/* Sections */
.ref-section{
  margin-bottom:12px;
  page-break-inside:avoid;
}

.ref-section-ttl{
  font-family:Georgia, serif;
  font-size:11.5px;
  font-weight:800;
  background:#000;
  color:#fff;
  padding:3px 8px;
  letter-spacing:.5px;
  margin-bottom:4px;
  text-transform:uppercase;
}


/* Tables */
.ref-tbl{
  width:100%;
  border-collapse:collapse;
  font-family:Georgia, serif;
  font-size:10px;
}

.ref-tbl th{
  background:#ddd;
  color:#000;
  padding:3px 6px;
  text-align:left;
  border:1px solid #999;
  font-weight:700;
  font-size:9.5px;
  text-transform:uppercase;
  letter-spacing:.3px;
}

.ref-tbl td{
  padding:3px 6px;
  border:1px solid #999;
  vertical-align:top;
}

.ref-tbl strong{font-weight:700;color:#000}

.ref-tbl em{font-style:italic;color:#222}


.ref-note{
  font-size:9.5px;
  color:#444;
  font-style:italic;
  padding:4px 6px;
  background:#f5f5f5;
  border-left:2px solid #999;
  margin-top:4px;
}


/* Grids */
.ref-grid-2{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:8px;
}

.ref-grid-3{
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  gap:6px;
}


.ref-mini{
  border:1px solid #999;
  padding:6px 8px;
  background:#fafafa;
  font-size:9.5px;
  line-height:1.4;
}

.ref-mini-ttl{
  font-weight:800;
  font-size:10px;
  background:#444;
  color:#fff;
  padding:2px 6px;
  margin:-6px -8px 4px -8px;
  letter-spacing:.5px;
  text-transform:uppercase;
}

.ref-mini ul{
  margin:0;
  padding-left:14px;
  list-style:disc;
}

.ref-mini li{margin-bottom:1px}

.ref-mini-note{
  font-size:8.5px;
  color:#666;
  font-style:italic;
  margin-top:3px;
}


/* Zamke */
.ref-zamke{
  display:grid;
  gap:3px;
  font-size:9.5px;
  line-height:1.45;
}

.ref-zamke > div{
  padding:3px 6px;
  background:#fff5f5;
  border-left:2px solid #c00;
}

.ref-zamke strong{color:#c00;font-weight:700}


/* Footer */
.ref-footer{
  display:flex;
  justify-content:space-between;
  margin-top:8px;
  padding-top:6px;
  border-top:1px solid #999;
  font-size:8.5px;
  color:#444;
  font-family:'Courier New', monospace;
  letter-spacing:.3px;
}


/* Mobile screen */
@media (max-width:640px){
  .ref-sheet{padding:12px;font-size:10px}
  .ref-grid-3{grid-template-columns:1fr 1fr;gap:5px}
  .ref-grid-2{grid-template-columns:1fr}
  .ref-tbl{font-size:9px}
  .ref-tbl th,.ref-tbl td{padding:2px 4px}
  .ref-mini{font-size:9px}
}


/* Print — A4 portrait */
@media print{
  /* Hide everything except .ref-sheet */
  body > *:not(.layer){display:none !important}
  .layer:not(.on){display:none !important}
  .layer.on > *:not(.ref-sheet){display:none !important}
  
  .no-print, .ref-actions, .nav-row{display:none !important}
  
  @page{
    size:A4 portrait;
    margin:8mm;
  }
  
  .ref-sheet{
    box-shadow:none !important;
    border:none !important;
    margin:0 !important;
    padding:0 !important;
    max-width:100% !important;
    background:#fff !important;
    color:#000 !important;
    font-size:9.5px !important;
    line-height:1.3 !important;
  }
  .ref-section{margin-bottom:8px !important;page-break-inside:avoid}
  .ref-section-ttl{font-size:10px !important;padding:2px 5px !important;margin-bottom:3px !important}
  .ref-tbl{font-size:8.5px !important}
  .ref-tbl th,.ref-tbl td{padding:1.5px 4px !important}
  .ref-mini{font-size:8.5px !important;padding:3px 5px !important}
  .ref-mini-ttl{font-size:9px !important}
  .ref-zamke{font-size:8.5px !important}
  .ref-zamke > div{padding:2px 4px !important}
  .ref-title{font-size:14px !important}
  .ref-subtitle{font-size:8px !important}
  .ref-footer{font-size:7.5px !important}
}


/* ═══════════════════════════════════════════
   H21 V2 — VIZUALNA POBOLJŠANJA · MISSING CLASSES
   ═══════════════════════════════════════════ */

/* ─── SCENE CARDS (Tab 1, 2, 3) ─── */
.scene-head{
  display:flex;
  align-items:center;
  gap:14px;
  padding:14px 18px;
}

.scene-badge{
  width:34px;
  height:34px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:700;
  font-family:var(--mono);
  font-size:14px;
  flex-shrink:0;
  box-shadow:0 2px 8px rgba(233,180,70,.25);
}

.scene-name{
  font-family:var(--display);
  font-weight:700;
  font-size:15px;
  color:var(--t1);
  letter-spacing:.5px;
  line-height:1.3;
}

.scene-sub{
  font-size:12.5px;
  color:var(--t2);
  margin-top:3px;
  font-family:var(--serif);
  font-style:italic;
}

.scene-card.open .scene-arrow{
  transform:rotate(180deg);
  color:var(--gold);
}

@keyframes sceneFadeIn{
  from{opacity:0; transform:translateY(-4px)}
  to{opacity:1; transform:translateY(0)}
}


/* ─── SIDEBAR DJELA (D01-D22) ─── */
.sb-era-d{
  color:var(--gold) !important;
  margin-top:14px !important;
  padding-bottom:2px !important;
}


/* ─── BOX WARNING TITLE ─── */
.bw-ttl{
  font-family:var(--mono);
  font-size:11px;
  letter-spacing:1.2px;
  font-weight:700;
  margin-bottom:6px;
  text-transform:uppercase;
}


/* ═══════════════════════════════════════════
   H21 V2 — TYPOGRAPHY & POLISH
   ═══════════════════════════════════════════ */

.layer h2:not([class]){
  font-family:var(--display);
  font-size:22px;
  color:var(--gold);
  font-weight:700;
  margin:24px 0 12px;
  letter-spacing:.5px;
}

.layer h3:not([class]){
  font-family:var(--display);
  font-size:18px;
  color:var(--bronze, var(--gold));
  font-weight:700;
  margin:20px 0 10px;
  letter-spacing:.3px;
}


.layer p:not([class]){
  margin:8px 0 12px;
  line-height:1.7;
  color:var(--t2);
}

.layer p:not([class]) strong{color:var(--t1)}

.layer p:not([class]) em{color:var(--gold); font-style:italic}


/* Tables */
.layer table:not([class]){
  width:100%;
  border-collapse:collapse;
  font-size:13px;
  margin:14px 0;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r2);
  overflow:hidden;
}

.layer table:not([class]) th{
  background:var(--bg);
  color:var(--gold);
  padding:10px 14px;
  text-align:left;
  font-family:var(--mono);
  font-size:11px;
  letter-spacing:1px;
  text-transform:uppercase;
  font-weight:700;
  border-bottom:2px solid var(--bd);
}

.layer table:not([class]) td{
  padding:9px 14px;
  border-bottom:1px solid var(--bd);
  color:var(--t1);
  vertical-align:top;
  line-height:1.55;
}

.layer table:not([class]) tr:last-child td{border-bottom:none}

.layer table:not([class]) tr:hover td{background:rgba(233,180,70,.04)}

.layer table:not([class]) strong{color:var(--gold)}


/* Lists */
.layer ul:not([class]){
  margin:10px 0 14px 22px;
  padding:0;
  list-style:disc;
}

.layer ul:not([class]) li{
  margin-bottom:5px;
  line-height:1.6;
  color:var(--t2);
}

.layer ul:not([class]) li strong{color:var(--t1)}

.layer ol:not([class]){
  margin:10px 0 14px 24px;
  padding:0;
}

.layer ol:not([class]) li{
  margin-bottom:6px;
  line-height:1.6;
  color:var(--t2);
}


/* Inline code */
.layer code:not([class]){
  background:var(--ele);
  border:1px solid var(--bd);
  padding:2px 7px;
  border-radius:4px;
  font-family:var(--mono);
  font-size:12px;
  color:var(--gold);
}


/* Focus states (a11y) */
button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible,
[onclick]:focus-visible{
  outline:2px solid var(--gold);
  outline-offset:2px;
  border-radius:4px;
}


/* Scrollbar polish */
::-webkit-scrollbar{width:8px; height:8px}

::-webkit-scrollbar-track{background:var(--bg)}

::-webkit-scrollbar-thumb{background:var(--bd); border-radius:4px}

::-webkit-scrollbar-thumb:hover{background:var(--gold)}


/* Selection color */
::selection{
  background:rgba(233,180,70,.3);
  color:var(--t1);
}


/* hr */
hr:not([class]){
  border:none;
  height:1px;
  background:linear-gradient(90deg, transparent, var(--bd) 20%, var(--bd) 80%, transparent);
  margin:24px 0;
}


/* Responsive */
@media (max-width:640px){
  .scene-head{padding:12px 14px}
  .scene-badge{width:28px; height:28px; font-size:12px}
  .scene-name{font-size:14px}
  .layer h2:not([class]){font-size:19px}
  .layer h3:not([class]){font-size:16px}
}


/* Reduced motion */
@media (prefers-reduced-motion: reduce){
  *,*::before,*::after{
    animation-duration:.01ms !important;
    transition-duration:.01ms !important;
  }
}


/* Print */
@media print{
  .scene-card{break-inside:avoid; cursor:default}
  .scene-body{display:block !important}
  .scene-arrow{display:none}
}



/* ═══════════════════════════════════════════
   H21 PARSER — POLISH
   ═══════════════════════════════════════════ */

/* Difficulty selector active state */
.parser-diff-btn{
  transition:all .2s ease;
  font-family:var(--mono) !important;
  letter-spacing:.3px;
}

.parser-diff-btn.on{
  background:var(--ele) !important;
  font-weight:700 !important;
  box-shadow:inset 0 0 0 1.5px currentColor;
}

.parser-diff-btn:not(.on):hover{
  opacity:.85;
}


/* Empty parser output — better placeholder */
.parser-output:empty::before,
.parser-output > div[style*="font-style:italic"]{
  display:block;
  text-align:center;
  padding:24px 18px !important;
  color:var(--t3);
  font-style:italic;
  background:linear-gradient(135deg, rgba(233,180,70,.03), transparent);
  border:1px dashed var(--bd);
  border-radius:var(--r2);
  margin:8px 0;
}


/* Parser tree — better mobile responsive */
@media (max-width:640px){
  .parser-result svg{
    transform:scale(.85);
    transform-origin:left top;
  }
}


/* Parser history dropdown */
.parser-history-dropdown{
  margin-top:10px;
  padding:10px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r2);
  font-size:11.5px;
}

.parser-history-item{
  display:flex;
  justify-content:space-between;
  padding:6px 10px;
  border-radius:6px;
  cursor:pointer;
  transition:background .15s ease;
  color:var(--t2);
}

.parser-history-item:hover{
  background:var(--bg);
  color:var(--t1);
}




/* Table wrap — responsive scrollable */
.table-wrap{
  overflow-x:auto;
  margin:14px 0;
  border:1px solid var(--bd);
  border-radius:var(--r2);
  background:var(--ele);
}

.table-wrap table{
  margin:0 !important;
  border:none !important;
  border-radius:0 !important;
}

.table-wrap::-webkit-scrollbar{height:6px}

.table-wrap::-webkit-scrollbar-track{background:var(--bg)}

.table-wrap::-webkit-scrollbar-thumb{background:var(--bd); border-radius:3px}

.table-wrap::-webkit-scrollbar-thumb:hover{background:var(--gold)}



/* ═══════════════════════════════════════════
   DIAGNOSTIC STATE MACHINE (Tab 0)
   ═══════════════════════════════════════════ */
.diag-wrap{
  background:linear-gradient(135deg, var(--ele) 0%, var(--bg) 100%);
  border:1px solid var(--bd);
  border-left:3px solid var(--gold);
  border-radius:var(--r2);
  padding:24px;
  margin:24px 0;
  box-shadow:0 4px 16px rgba(0,0,0,.08);
  position:relative;
  overflow:hidden;
}

.diag-wrap::before{
  content:'';
  position:absolute;
  top:0; right:0;
  width:140px; height:140px;
  background:radial-gradient(circle, rgba(233,180,70,.06) 0%, transparent 70%);
  pointer-events:none;
}


/* States — show only one at a time */
.diag-wrap > .diag-intro,
.diag-wrap > .diag-quiz,
.diag-wrap > .diag-result{
  display:none;
}

.diag-wrap[data-state="intro"] > .diag-intro,
.diag-wrap[data-state="quiz"] > .diag-quiz,
.diag-wrap[data-state="result"] > .diag-result{
  display:block;
  animation:diagFadeIn .3s ease;
}

@keyframes diagFadeIn{
  from{opacity:0; transform:translateY(8px)}
  to{opacity:1; transform:translateY(0)}
}

.diag-icon{
  font-size:36px;
  margin-bottom:10px;
}

.diag-intro-actions{
  display:flex;
  gap:10px;
  justify-content:center;
  flex-wrap:wrap;
}


/* QUIZ STATE */
.diag-header{
  margin-bottom:18px;
}

.diag-lbl{
  font-family:var(--mono);
  font-size:10.5px;
  letter-spacing:1.5px;
  color:var(--t3);
  text-transform:uppercase;
  margin-bottom:8px;
}

.diag-progress-wrap{
  height:6px;
  background:var(--bg);
  border-radius:3px;
  overflow:hidden;
  margin-bottom:6px;
}

.diag-progress-bar{
  height:100%;
  background:linear-gradient(90deg, var(--gold), var(--bronze));
  border-radius:3px;
  transition:width .4s cubic-bezier(.4,0,.2,1);
  width:0%;
}

.diag-meta{
  font-family:var(--mono);
  font-size:11px;
  color:var(--t3);
  letter-spacing:.5px;
}

.diag-body{
  padding:8px 0;
}

.diag-q{
  font-family:var(--display);
  font-size:16.5px;
  font-weight:600;
  color:var(--t1);
  margin-bottom:14px;
  line-height:1.55;
}

.diag-opt:hover:not(:disabled){
  border-color:var(--gold);
  background:rgba(233,180,70,.04);
  transform:translateX(2px);
}

.diag-opt:disabled{
  cursor:not-allowed;
}

@keyframes diagCorrect{
  0%{transform:scale(1)}
  40%{transform:scale(1.02)}
  100%{transform:scale(1)}
}

@keyframes diagWrong{
  0%,100%{transform:translateX(0)}
  25%{transform:translateX(-4px)}
  75%{transform:translateX(4px)}
}

.diag-result-inner{
  max-width:480px;
  margin:0 auto;
}

.diag-result-icon{
  font-size:42px;
  margin-bottom:10px;
}

.diag-result-title{
  font-family:var(--display);
  font-size:26px;
  font-weight:700;
  color:var(--gold);
  margin-bottom:8px;
  letter-spacing:.5px;
}

.diag-result-desc{
  font-size:14px;
  color:var(--t2);
  margin-bottom:20px;
  line-height:1.6;
}

.diag-result-desc strong{
  color:var(--t1);
}

.diag-result-actions{
  display:flex;
  gap:10px;
  justify-content:center;
  flex-wrap:wrap;
}


/* ═══════════════════════════════════════════
   SCENE GRID (Tab 1, 2, 3)
   ═══════════════════════════════════════════ */
.scene-grid{
  display:grid;
  grid-template-columns:1fr;
  gap:10px;
  margin:14px 0;
}


/* Mobile */
@media (max-width:640px){
  .diag-wrap{padding:18px 14px}
  .diag-intro-title{font-size:19px}
  .diag-q{font-size:15px}
  .diag-result-title{font-size:22px}
}




/* NCVVO ⭐ filter — prominent */
.pojm-filter-star{
  background:linear-gradient(135deg, rgba(233,180,70,.15), rgba(233,180,70,.05)) !important;
  border-color:var(--gold) !important;
  color:var(--gold) !important;
  font-weight:700 !important;
  position:relative;
  margin-left:auto;
}

.pojm-filter-star:hover{
  background:linear-gradient(135deg, rgba(233,180,70,.25), rgba(233,180,70,.1)) !important;
  box-shadow:0 0 12px rgba(233,180,70,.2);
}

.pojm-filter-star.active{
  background:linear-gradient(135deg, rgba(233,180,70,.3), rgba(233,180,70,.15)) !important;
  box-shadow:0 0 16px rgba(233,180,70,.4);
}




              .gl-glyph{fill:none;stroke:#50c878;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}

              .gl-lbl{font-family:'Courier New',monospace;font-size:10px;fill:#7a8694;text-anchor:middle}

            


              .ci-glyph{font-family:'Times New Roman',Georgia,serif;font-size:30px;fill:#4a90d9;font-weight:600;text-anchor:middle}

              .ci-lbl{font-family:'Courier New',monospace;font-size:10px;fill:#7a8694;text-anchor:middle}

            


              .la-glyph{font-family:Georgia,'Times New Roman',serif;font-size:28px;fill:#b48250;font-weight:600;text-anchor:middle}

              .la-glyph-special{font-family:Georgia,'Times New Roman',serif;font-size:28px;fill:#e9b446;font-weight:700;text-anchor:middle}

              .la-lbl{font-family:'Courier New',monospace;font-size:10px;fill:#7a8694;text-anchor:middle}

              .la-lbl-special{font-family:'Courier New',monospace;font-size:10px;fill:#e9b446;text-anchor:middle;font-weight:700}

            

/* SVG ABECEDE · pisma vizualizacija */
.abc-card{
  padding:14px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r1);
  cursor:pointer;
  transition:all .25s ease;
}

.abc-card:hover{
  border-color:var(--gold);
  background:linear-gradient(135deg, var(--ele), rgba(233,180,70,.04));
  transform:translateY(-2px);
  box-shadow:0 8px 24px rgba(0,0,0,.2);
}

.abc-head{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:12px;
}

.abc-pill{
  font-family:var(--mono);
  font-size:9.5px;
  letter-spacing:1.5px;
  padding:5px 10px;
  border-radius:99px;
  border:1px solid;
  font-weight:700;
}

.abc-zoom{
  font-size:18px;
  color:var(--t3);
  transition:all .2s ease;
}

.abc-card:hover .abc-zoom{
  color:var(--gold);
  transform:scale(1.2);
}

.abc-svg-wrap{
  background:rgba(255,255,255,.03);
  border-radius:var(--r1);
  padding:8px;
  margin-bottom:12px;
}

.abc-meta{
  display:flex;
  flex-direction:column;
  gap:4px;
  font-size:12px;
  color:var(--t2);
}


/* Modal expand */
.abc-modal{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,.85);
  z-index:9999;
  display:none;
  align-items:center;
  justify-content:center;
  padding:20px;
  cursor:pointer;
  animation:abcFade .25s ease;
}

.abc-modal.on{display:flex}

.abc-modal-inner{
  background:var(--bg);
  border:1px solid var(--gold);
  border-radius:var(--r2);
  max-width:900px;
  width:100%;
  padding:24px;
  box-shadow:0 20px 60px rgba(0,0,0,.6);
}

@keyframes abcFade{from{opacity:0}to{opacity:1}}


@media (max-width:640px){
  .abc-pill{font-size:9px}
}


@media (max-width:640px){
  .chapter-nav-grid{
    grid-template-columns:1fr;
  }
  .chapter-nav-next{
    flex-direction:row;
  }
}



/* ═══════════════════════════════════
   ORIGINALNI TEKSTOVI · audio cards
═══════════════════════════════════ */
.text-card{
  padding:18px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r2);
  transition:all .25s ease;
}

.text-card:hover{
  border-color:var(--gold);
}

.text-card-hdr{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:12px;
  margin-bottom:14px;
  flex-wrap:wrap;
}

.text-card-lbl{
  font-family:var(--mono);
  font-size:10px;
  letter-spacing:1.5px;
  padding:5px 10px;
  border-radius:99px;
  border:1px solid;
  font-weight:700;
  display:inline-block;
  margin-bottom:6px;
}

.text-card-sub{
  font-family:var(--serif);
  font-size:11.5px;
  color:var(--t3);
  font-style:italic;
}

.text-audio-btn{
  display:flex;
  align-items:center;
  gap:8px;
  padding:8px 14px;
  background:linear-gradient(135deg, rgba(233,180,70,.15), rgba(233,180,70,.05));
  border:1px solid var(--gold);
  border-radius:99px;
  color:var(--gold);
  font-family:var(--mono);
  font-size:11px;
  letter-spacing:1px;
  font-weight:700;
  cursor:pointer;
  transition:all .2s ease;
}

.text-audio-btn:hover{
  background:linear-gradient(135deg, rgba(233,180,70,.25), rgba(233,180,70,.1));
  box-shadow:0 0 16px rgba(233,180,70,.3);
}

.text-audio-btn.playing .audio-icon{
  animation:audioPulse 1s ease-in-out infinite;
}

@keyframes audioPulse{
  0%,100%{opacity:1}
  50%{opacity:.4}
}

.audio-icon{font-size:13px}

.text-card-original{
  padding:14px 16px;
  background:rgba(0,0,0,.25);
  border:1px solid var(--bd);
  border-radius:var(--r1);
  font-family:'Times New Roman',Georgia,serif;
  font-size:14px;
  line-height:1.7;
  color:#d4ddc8;
  margin-bottom:10px;
  font-style:italic;
}

.text-card-modern{
  padding:10px 14px;
  font-family:var(--serif);
  font-size:13px;
  color:var(--t2);
  line-height:1.6;
  margin-bottom:8px;
}

.text-card-hl{
  padding:10px 12px;
  background:rgba(233,180,70,.05);
  border-left:2px solid var(--gold);
  border-radius:4px;
  font-size:12px;
  color:var(--t2);
  line-height:1.55;
}


@media (max-width:640px){
  .text-card-hdr{flex-direction:column}
  .text-audio-btn{align-self:stretch;justify-content:center}
  .text-card-original{font-size:12.5px}
}


/* Audio modal */
.audio-modal{
  position:fixed;
  bottom:24px;
  left:50%;
  transform:translateX(-50%);
  z-index:9999;
  display:none;
  padding:16px 24px;
  background:var(--bg);
  border:1px solid var(--gold);
  border-radius:var(--r2);
  box-shadow:0 12px 40px rgba(0,0,0,.5);
  max-width:90vw;
  font-family:var(--serif);
  font-size:13px;
  color:var(--t2);
  text-align:center;
  animation:audioRise .3s ease;
}

.audio-modal.on{display:block}

@keyframes audioRise{
  from{transform:translate(-50%, 30px);opacity:0}
  to{transform:translate(-50%, 0);opacity:1}
}


.audio-lbl{display:inline-block}


@media (max-width: 720px) {
  .ws-tier-indicator {
    padding: 10px 12px;
    gap: 8px;
  }
  .ws-tier-indicator .ws-tier-text {
    font-size: 12px;
  }
}


@keyframes mt-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}


@keyframes mt-slide-up {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
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
`;
const STYLES_CSS = SHARED_LANG_CSS + '\n' + CHAPTER_CSS_DELTA;
const SCRIPTS_JS = `/* ══ SUPABASE CONFIG ══ */
var SUPABASE_URL = 'https://your-project.supabase.co';
var SUPABASE_ANON_KEY = 'your-anon-key-here';

var CURRENT_CHAPTER = {
  subject: 'hrvatski',
  code: 'h23',
  title: 'Povijest hrvatskog jezika'
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
    p_tab_index: (function(){ try{ return JSON.parse(localStorage.getItem('mt.hrv.h23.tab') || '0') }catch(e){return 0} })(),
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


const KVIZ_Q = [
  {q:'Najstariji spomenik na hrvatskom jeziku je:',o:['Vinodolski zakonik','Bašćanska ploča','Misal po zakonu rimskoga dvora','Kašićeva gramatika'],t:1,e:'Bašćanska ploča (~1100., otok Krk) — najstariji očuvani spomenik na hrvatskom, glagoljica.'},
  {q:'Bašćanska ploča pisana je:',o:['latinicom','glagoljicom','ćirilicom','grčkim pismom'],t:1,e:'Bašćanska ploča pisana je hrvatskom (uglatom) glagoljicom.'},
  {q:'Glagoljicu su stvorili:',o:['Ćiril i Metod (~863.)','Klement Ohridski','Kašić','Gaj'],t:0,e:'Glagoljicu su stvorili Ćiril i Metod oko 863. za potrebe pokrštavanja Slavena.'},
  {q:'Ćirilicu je stvorio:',o:['Ćiril sam','Klement Ohridski (kraj 9. st.)','Metod','Vuk Karadžić'],t:1,e:'Ćirilicu nije stvorio Ćiril! Stvorili su je njegovi učenici (Klement Ohridski) krajem 9. st. nazvavši pismo po učitelju.'},
  {q:'Hrvatska redakcija ćirilice naziva se:',o:['gajica','glagoljica','bosančica','grčko pismo'],t:2,e:'Bosančica je hrvatska redakcija ćirilice — koristila se u Bosni, južnoj Hrvatskoj, Dubrovniku.'},
  {q:'Vinodolski zakonik nastao je:',o:['1100.','1288.','1483.','1604.'],t:1,e:'Vinodolski zakonik je iz 1288. — najstariji slavenski pravni spomenik na narodnom jeziku.'},
  {q:'Prva tiskana hrvatska knjiga je:',o:['Bašćanska ploča','Vinodolski zakonik','Misal po zakonu rimskoga dvora (1483.)','Kašićeva gramatika'],t:2,e:'Misal po zakonu rimskoga dvora (1483.) — prva tiskana hrvatska knjiga, samo 28 godina nakon Gutenbergove Biblije.'},
  {q:'Bartol Kašić poznat je po:',o:['glagoljici','prvoj hrvatskoj gramatici (1604.)','Bašćanskoj ploči','Vinodolskom zakoniku'],t:1,e:'Bartol Kašić, „Institutionum linguae illyricae" (1604., Rim) — prva hrvatska gramatika.'},
  {q:'Hrvatski narodni preporod (Ilirski pokret) odvija se:',o:['1700-ih','1830-ih i 1840-ih','1870-ih','1900-ih'],t:1,e:'Hrvatski narodni preporod traje 1830-ih i 1840-ih pod vodstvom Ljudevita Gaja.'},
  {q:'Ljudevit Gaj reformirao je 1830.:',o:['glagoljicu','ćirilicu','hrvatsku latinicu','staroslavenski'],t:2,e:'Gaj je 1830. uveo jedinstvenu hrvatsku latinicu s dijakritičkim znakovima (gajica).'},
  {q:'Bečki dogovor potpisan je:',o:['1810.','1850.','1892.','1967.'],t:1,e:'Bečki dogovor (1850.) potpisali hrvatski i srpski književnici — zajednički književni jezik na štokavskoj osnovi.'},
  {q:'Brozov hrvatski pravopis nastao je:',o:['1848.','1850.','1892.','1899.'],t:2,e:'Ivan Broz, „Hrvatski pravopis" (1892.) — fonetska načela, temelj svih kasnijih pravopisa.'},
  {q:'Tomislav Maretić poznat je po:',o:['Bašćanskoj ploči','„Gramatici i stilistici" (1899.)','Brozovom pravopisu','Vinodolskom zakoniku'],t:1,e:'Maretić, „Gramatika i stilistika hrvatskoga ili srpskoga književnog jezika" (1899.) — učvršćenje (i)jekavskog standarda.'},
  {q:'Deklaracija o nazivu i položaju hrvatskoga književnoga jezika nastala je:',o:['1850.','1892.','1954.','1967.'],t:3,e:'Deklaracija je objavljena 17. ožujka 1967. kao odgovor na unitarističke pritiske u Jugoslaviji. NCVVO TOP TEMA.'},
  {q:'Tri narječja hrvatskog jezika su:',o:['kajkavski, čakavski, štokavski','sjeverni, južni, istočni','primorski, kontinentalni','staroslavenski, hrvatski, čakavski'],t:0,e:'Tri narječja: kajkavski (kaj — sjever), čakavski (ča — primorje), štokavski (što — istok i jug).'},
  {q:'Standardni hrvatski jezik bazira se na:',o:['kajkavskom','čakavskom','štokavskom (i)jekavskom','staroslavenskom'],t:2,e:'Hrvatski književni jezik = štokavski s ijekavskim refleksom „jat" (mlijeko, vrijeme).'},
  {q:'Refleks „jat" u hrvatskom standardu je:',o:['ekavski (mleko)','ijekavski (mlijeko)','ikavski (mliko)','svi tri'],t:1,e:'Hrvatski standard koristi ijekavski refleks (mlijeko, vrijeme). Ekavski je srpski, ikavski dijalektalni.'},
  {q:'Misal po zakonu rimskoga dvora pisan je:',o:['glagoljicom','ćirilicom','latinicom','grčkim'],t:0,e:'Misal je pisan glagoljicom, hrvatskim crkvenoslavenskim jezikom.'},
  {q:'Hrvatska latinica (gajica) ima:',o:['25 slova','30 slova','38 slova','42 slova'],t:1,e:'Hrvatska latinica (gajica) ima 30 slova — latinski alfabet + dijakritički znakovi (č, ć, dž, đ, lj, nj, š, ž).'},
  {q:'Faust Vrančić objavio je:',o:['gramatiku','peterojezični rječnik','prevod Biblije','pravopis'],t:1,e:'Faust Vrančić, „Dictionarium quinque nobilissimarum Europae linguarum" (1595./1631.) — peterojezični rječnik.'},
  {q:'Najstarija hrvatska latinička pjesma je:',o:['Bašćanska ploča','Šibenska molitva (~1375.)','Marulićeva Judita','Vinodolski zakonik'],t:1,e:'Šibenska molitva (~1375.) je najstarija hrvatska latinička pjesma, marijanska molitva u stihovima.'},
  {q:'Marko Marulić, „Judita" (1501.) napisana je:',o:['kajkavskim','čakavskim','štokavskim','staroslavenskim'],t:1,e:'Marulićeva Judita je čakavska — primjer rane hrvatske renesanse, prvi hrvatski roman u stihovima.'},
  {q:'Glagoljska liturgija u Hrvatskoj zadržala se:',o:['do 16. st.','do 18. st.','do 20. st.','do danas'],t:2,e:'Hrvati su jedinstveno koristili HCSJ u rimokatoličkoj liturgiji do 20. st. (do II. vatikanskog koncila 1962.-65.).'},
  {q:'Novosadski dogovor (1954.) bio je:',o:['Bečki dogovor','Pokušaj zajedničkog srpskohrvatskog','Pravopisna reforma','Hrvatska deklaracija'],t:1,e:'Novosadski dogovor htio je nametnuti zajednički „srpskohrvatski" jezik. Hrvati protestirali, Deklaracija 1967. ga odbacila.'},
  {q:'Pavel Jozef Šafárik bio je:',o:['Hrvat','Slovak','Slovenac','Srbin'],t:1,e:'Šafárik je bio slovački slavist (1795.-1861.), utjecao na razvoj slavenskih književnosti.'},
  {q:'Zagrebačka filološka škola branila je:',o:['fonetski pravopis','morfonološki pravopis','glagoljicu','staroslavenski'],t:1,e:'Zagrebačka filološka škola (sredina 19. st.) — branila morfonološki pravopis i hrvatsku jezičnu tradiciju.'},
  {q:'IHJJ je:',o:['stara gramatika','Institut za hrvatski jezik i jezikoslovlje','povijesni dokument','staroslavensko djelo'],t:1,e:'IHJJ — Institut za hrvatski jezik i jezikoslovlje (Zagreb), objavio službeni „Hrvatski pravopis" 2013.'},
  {q:'Bosančica = hrvatska redakcija ćirilice. Točno?',o:['da','ne, to je srpska','to je glagoljica','to je latinica'],t:0,e:'Točno. Bosančica je hrvatska redakcija ćirilice s posebnim hrv. jezičnim crtama, koristila se u Bosni i južnoj Hrvatskoj.'},
  {q:'Adolfo Veber-Tkalčević bio je predstavnik:',o:['Vukove škole','Zagrebačke filološke škole','Ilirskoga pokreta','Bečkog dogovora'],t:1,e:'Veber-Tkalčević — predstavnik Zagrebačke filološke škole, branitelj morfonološkog pravopisa.'},
  {q:'Kraljevina Jugoslavija nametala je:',o:['hrvatski standard','srpski standard','„srpskohrvatski" jezik','staroslavenski'],t:2,e:'Kraljevina i potom socijalistička Jugoslavija unitaristički su nametale „srpskohrvatski" jezik. Otpor je vrhunac dosegnuo Deklaracijom 1967.'},
];const CP_ITEMS=[
  'Razumijem razliku sintakse (odnosi među riječima) i morfologije (oblici riječi).',
  'Znam 4 razine jezičnih jedinica: riječ → sintagma → rečenica → tekst.',
  'Razumijem razliku sintagme (bez predikata) i rečenice (s predikatom).',
  'Znam svih 6 rečeničnih članova (SPO-AAP): subjekt, predikat, objekt, atribut, apozicija, priložne oznake.',
  'Razumijem razliku izravnog (A) i neizravnog (D/G/I/L) objekta, te glagole koji idu s D (pomoći, vjerovati).',
  'Znam 4 vrste priložnih oznaka (MVNU): mjesta, vremena, načina, uzroka.',
  'Razumijem razliku atributa (pridjev, bez zareza) i apozicije (imenica, sa zarezima).',
  'Znam 5 vrsta rečenica po priopćajnoj svrsi: izjavne, upitne, usklične, zapovjedne, želje.',
  'Znam 6 tipova nezavisno složenih (sastavne, rastavne, suprotne, zaključne, izuzetne, objasnidbene) + veznike.',
  'Znam glavne zavisno složene (objektne, atributne, priložne) i znam staviti zarez pred „koji/da/jer/ako".',
];

const DIAG0_Q=[
  {q:'Najstariji spomenik na hrvatskom jeziku je:',o:['Vinodolski zakonik','Bašćanska ploča','Misal po zakonu rimskoga dvora','Kašićeva gramatika'],t:1,e:'Bašćanska ploča (oko 1100., otok Krk) najstariji je očuvani spomenik na hrvatskom jeziku, pisan glagoljicom.'},
  {q:'Glagoljica je nastala:',o:['u 7. st. (Ćiril i Metod)','u 9. st. (Ćiril i Metod)','u 12. st.','prije Krista'],t:1,e:'Glagoljicu su stvorili braća Ćiril i Metod oko 863. godine za potrebe pokrštavanja Slavena (misija u Velikoj Moravskoj).'},
  {q:'Hrvatska latinica koristi se od:',o:['9. st.','12. st.','14. st.','16. st.'],t:1,e:'Latinica se u hrvatskom prostoru koristi od 12. st. (najstariji latinski tekstovi), no postaje dominantna od 14. st.'},
  {q:'Bečki dogovor (1850.) potpisali su:',o:['Hrvati i Slovenci','Hrvati i Srbi','Hrvati i Bošnjaci','samo Hrvati'],t:1,e:'Bečki dogovor potpisali su hrvatski i srpski književnici radi zajedničkog standarda. Označava početak procesa srbohrvatskoga.'},
  {q:'Hrvatski narodni preporod traje:',o:['1700.–1750.','1830-ih i 1840-ih','1870-ih','1900-ih'],t:1,e:'Hrvatski narodni preporod (Ilirski pokret) odvija se 1830-ih i 1840-ih godina pod vodstvom Ljudevita Gaja.'},
  {q:'Prva tiskana hrvatska knjiga je:',o:['Bašćanska ploča','Vinodolski zakonik','Misal po zakonu rimskoga dvora (1483.)','Kašićeva gramatika'],t:2,e:'Misal po zakonu rimskoga dvora tiskan je 1483., samo 28 godina nakon Gutenbergove Biblije. Pisan glagoljicom.'},
  {q:'Bartol Kašić poznat je po:',o:['Bašćanskoj ploči','Prvoj hrvatskoj gramatici (1604.)','prvom hrvatskom rječniku','Vinodolskom zakoniku'],t:1,e:'Bartol Kašić objavio je 1604. „Institutionum linguae illyricae" — prvu gramatiku hrvatskog jezika.'},
  {q:'Deklaracija o nazivu i položaju hrvatskoga književnoga jezika nastala je:',o:['1850.','1892.','1967.','1991.'],t:2,e:'Deklaracija je objavljena 1967. kao odgovor na unitarističke pritiske u Jugoslaviji. Branjila je samostalnost hrvatskoga jezika.'},
  {q:'Glagoljska redakcija staroslavenskog jezika u Hrvatskoj naziva se:',o:['hrvatska redakcija','hrvatskostaroslavenski jezik','crkvenoslavenski','hrvatski crkvenoslavenski jezik'],t:3,e:'Hrvatski crkvenoslavenski jezik (HCSJ) — hrvatska redakcija staroslavenskog s domaćim jezičnim crtama, koristio se u liturgiji.'},
  {q:'Glagoljica je zamijenjena latinicom u Hrvatskoj zbog:',o:['ratova','crkvenih reformi','razvoja tiska i utjecaja Vatikana','političkih razloga'],t:2,e:'Razvoj tiska, utjecaj Zapadne crkve (Vatikana) i sve veća dominacija latinice u europskim zemljama postupno su istisnuli glagoljicu (od 16. st.).'},
];
const TAB_NAMES=['Teorija','Rečenični članovi','Vrste rečenica','Složene rečenice','Pojmovnik','Sintaktički parser','Kviz','Referentna tablica'];
function sw(n){
  document.querySelectorAll('.tab').forEach((t,i)=>{
    t.classList.toggle('on',i===n);
    t.setAttribute('aria-selected',i===n);
  });
  document.querySelectorAll('.layer').forEach((l,i)=>l.classList.toggle('on',i===n));
  const _bc=document.getElementById('bc-tab');if(_bc)_bc.textContent=TAB_NAMES[n];
  if(n===6)qzInit();
  if(n===5){
    // init drill on first open (safe — mg-dynamic may not exist in H20 since Tab 5 is now Scanner)
    const _mg=document.getElementById('mg-dynamic');
    if(_mg&&!_mg.dataset.init){
      _mg.dataset.init='1';
      if(typeof mgInit==='function')mgInit('easy');
      if(typeof fcInit==='function')fcInit();
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
function speakVerse(text, rate){
  if(!('speechSynthesis' in window)){
    alert('Vaš preglednik ne podržava audio čitanje (Web Speech API). Isprobaj Chrome, Edge ili Safari.');
    return;
  }
  // Cancel any ongoing speech
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'hr-HR';
  u.rate = rate || 0.85;
  u.pitch = 1.0;
  u.volume = 1.0;
  // Try to find Croatian voice
  const voices = window.speechSynthesis.getVoices();
  const hrVoice = voices.find(v => v.lang && v.lang.startsWith('hr')) || voices.find(v => v.lang && v.lang.startsWith('sr')) || voices.find(v => v.lang && v.lang.startsWith('sl'));
  if(hrVoice) u.voice = hrVoice;
  window.speechSynthesis.speak(u);
}
// Trigger voice list load
if('speechSynthesis' in window){
  window.speechSynthesis.getVoices();
  if(window.speechSynthesis.onvoiceschanged !== undefined){
    window.speechSynthesis.onvoiceschanged = function(){};
  }
}



/* WEB SPEECH API — fonetski audio demo */
function speakWord(text){
  if(!('speechSynthesis' in window)){
    alert('Tvoj preglednik ne podržava audio izgovor. Pokušaj u Chrome ili Safari.');
    return;
  }
  // Stop any ongoing speech
  window.speechSynthesis.cancel();
  
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'hr-HR';
  utter.rate = 0.85;
  utter.pitch = 1.0;
  
  // Try to find Croatian voice
  const voices = window.speechSynthesis.getVoices();
  const hrVoice = voices.find(v => v.lang.startsWith('hr'));
  if(hrVoice) utter.voice = hrVoice;
  
  window.speechSynthesis.speak(utter);
}

// Preload voices (some browsers need this)
if('speechSynthesis' in window && window.speechSynthesis.onvoiceschanged !== undefined){
  window.speechSynthesis.onvoiceschanged = function(){};
}





/* ═══════════════════════════════════
   H20 POJMOVNIK DATA + RENDERER
═══════════════════════════════════ */

const POJM_DATA2 = [
  // RAZDOBLJA (10)
  {kat:'razdoblja', term:'Predknjiževno razdoblje', def:'Razdoblje do 9. st. — Hrvati doseljavaju (7. st.), govori se praslavenski, nema pisanih spomenika.', star:false, tag:''},
  {kat:'razdoblja', term:'Staroslavensko razdoblje', def:'9.-11. st. — dolazak Ćirila i Metoda (863.), glagoljica, hrvatska redakcija staroslavenskog. Najstariji spomenici.', star:true, tag:'NCVVO'},
  {kat:'razdoblja', term:'Srednjovjekovno razdoblje', def:'12.-15. st. — procvat glagoljaške književnosti, Vinodolski zakonik (1288.), Misal (1483.).', star:true, tag:'NCVVO'},
  {kat:'razdoblja', term:'Predstandardno razdoblje', def:'16.-18. st. — prve gramatike (Kašić 1604.), rječnici (Vrančić 1631., Stulli 1801.), prijelaz na latinicu.', star:true, tag:'NCVVO'},
  {kat:'razdoblja', term:'Standardno razdoblje', def:'19. st. - danas — Hrvatski narodni preporod, Bečki dogovor 1850., Brozov pravopis 1892., Deklaracija 1967.', star:true, tag:'NCVVO ⭐'},
  {kat:'razdoblja', term:'Hrvatski narodni preporod', def:'1830-ih i 1840-ih — Ilirski pokret, buđenje nacionalne svijesti, jezična reforma. Vodilac: Ljudevit Gaj.', star:true, tag:'NCVVO'},
  {kat:'razdoblja', term:'Ilirski pokret', def:'Drugi naziv za Hrvatski narodni preporod — pokret 1830-1840-ih za nacionalnu i jezičnu emancipaciju.', tag:''},
  {kat:'razdoblja', term:'Praslavenski jezik', def:'Zajednički predak svih slavenskih jezika, govorio se do otprilike 9. st. Iz njega su se razvili svi suvremeni slavenski jezici.', tag:''},
  {kat:'razdoblja', term:'Doseljenje Hrvata', def:'7. stoljeće — Hrvati doseljavaju iz prapovijesne domovine (oko Karpata) na područje današnje Hrvatske.', tag:''},
  {kat:'razdoblja', term:'Staroslavenski jezik', def:'Najstariji slavenski književni jezik, koji su Ćiril i Metod stvorili za potrebe pokrštavanja Slavena (~863.).', star:true, tag:'NCVVO'},

  // PISMA (10)
  {kat:'pisma', term:'Glagoljica', def:'Najstarije slavensko pismo, stvorili Ćiril i Metod ~863. Originalna abeceda, 38 znakova, brojčane vrijednosti slova.', star:true, tag:'NCVVO ⭐'},
  {kat:'pisma', term:'Obla glagoljica', def:'Istočna varijanta glagoljice (zaobljeni oblici) — Bugarska, Makedonija. Stariji tip.', tag:''},
  {kat:'pisma', term:'Uglata (hrvatska) glagoljica', def:'Hrvatska varijanta glagoljice (pravokutni oblici) — koristila se u Hrvatskoj od ~10. st.', star:true, tag:'NCVVO'},
  {kat:'pisma', term:'Ćirilica', def:'Druga slavenska abeceda, stvorili učenici Ćirila (Klement Ohridski) krajem 9. st. po grčkom uncijalnom pismu.', star:true, tag:'NCVVO'},
  {kat:'pisma', term:'Bosančica', def:'Hrvatska redakcija ćirilice — koristila se u Bosni, južnoj Hrvatskoj, Dubrovniku. Različita od srpske ćirilice.', star:true, tag:'NCVVO'},
  {kat:'pisma', term:'Latinica', def:'Pismo bazirano na latinskom alfabetu. U Hrvatskoj od 12. st., dominantna od 16. st., danas isključivo pismo.', star:true, tag:'NCVVO'},
  {kat:'pisma', term:'Hrvatska latinica (gajica)', def:'Hrvatska varijanta latinice s dijakritičkim znakovima (č, ć, dž, đ, lj, nj, š, ž). Reformirao Ljudevit Gaj 1830.', star:true, tag:'NCVVO'},
  {kat:'pisma', term:'Dijakritički znakovi', def:'Dodatni znakovi koji modificiraju izgovor osnovnog slova: kvačice (č, š, ž), križići (đ), digrafi (lj, nj, dž).', tag:''},
  {kat:'pisma', term:'Hrvatski crkvenoslavenski jezik (HCSJ)', def:'Staroslavenski jezik s domaćim hrvatskim crtama. Koristio se u liturgiji do 20. st., pisan glagoljicom.', star:true, tag:'NCVVO'},
  {kat:'pisma', term:'Inkunabula', def:'Knjiga tiskana prije 1500. „Misal po zakonu rimskoga dvora" (1483.) je hrvatska inkunabula.', tag:''},

  // SPOMENICI (15)
  {kat:'spomenici', term:'Bašćanska ploča', def:'Najstariji očuvani spomenik na hrvatskom (~1100., otok Krk). Glagoljica, hrvatski crkvenoslavenski. Sadrži ime kralja Zvonimira.', star:true, tag:'NCVVO ⭐'},
  {kat:'spomenici', term:'Vinodolski zakonik', def:'Najstariji slavenski pravni spomenik na narodnom jeziku (1288.). Glagoljica, čakavski. 75 članaka feudalnog zakona.', star:true, tag:'NCVVO ⭐'},
  {kat:'spomenici', term:'Misal po zakonu rimskoga dvora', def:'Prva tiskana hrvatska knjiga (22. veljače 1483.). Glagoljica, hrvatski crkvenoslavenski. Liturgijska knjiga.', star:true, tag:'NCVVO ⭐'},
  {kat:'spomenici', term:'Plominski natpis', def:'Jedan od najstarijih glagoljskih natpisa (~1000., Plomin u Istri).', tag:''},
  {kat:'spomenici', term:'Valunska ploča', def:'Otok Cres, ~1075. — dvojezični natpis (glagoljica + latinica).', tag:''},
  {kat:'spomenici', term:'Povaljska listina', def:'Najstariji hrv. bosaničkim pismom (~1185., otok Brač).', star:true, tag:'NCVVO'},
  {kat:'spomenici', term:'Red i zakon sestara dominikanki', def:'Jedan od prvih hrvatskih latiničkih spomenika (1345., Zadar).', tag:''},
  {kat:'spomenici', term:'Šibenska molitva', def:'Najstarija hrvatska latinička pjesma (~1375.). Marijanska molitva u stihovima.', star:true, tag:'NCVVO'},
  {kat:'spomenici', term:'Kašićeva gramatika', def:'„Institutionum linguae illyricae" (1604., Rim) — prva hrvatska gramatika. Bartol Kašić, isusovac.', star:true, tag:'NCVVO ⭐'},
  {kat:'spomenici', term:'Vrančićev rječnik', def:'Faust Vrančić: „Dictionarium quinque nobilissimarum Europae linguarum" (1595./1631.) — peterojezični rječnik.', tag:''},
  {kat:'spomenici', term:'Stullijev Lexicon', def:'Joakim Stulli, „Lexicon" (1801.) — najveći hrvatski rječnik 18. st.', tag:''},
  {kat:'spomenici', term:'Brozov pravopis', def:'Ivan Broz, „Hrvatski pravopis" (1892.) — temelj suvremenog hrvatskog pravopisa, fonetska načela.', star:true, tag:'NCVVO ⭐'},
  {kat:'spomenici', term:'Vukov pravopis', def:'Vuk Stefanović Karadžić — radikalna fonetska reforma srpskog pravopisa („Piši kao što govoriš"). Utjecala na hrv. pravopise.', tag:''},
  {kat:'spomenici', term:'Maretićeva gramatika', def:'Tomislav Maretić: „Gramatika i stilistika hrvatskoga ili srpskoga književnog jezika" (1899.). Učvrstila (i)jekavski standard.', tag:''},
  {kat:'spomenici', term:'Babić-Finka-Moguš pravopis', def:'Stjepan Babić, Božidar Finka, Milan Moguš — pravopis prvi put 1971., više izdanja kroz 70-e i 90-e.', tag:''},

  // STANDARDIZACIJA (10)
  {kat:'standardizacija', term:'Bečki dogovor 1850.', def:'Hrvatski + srpski književnici se dogovorili o zajedničkom književnom jeziku na štokavskoj (i)jekavskoj osnovi.', star:true, tag:'NCVVO ⭐'},
  {kat:'standardizacija', term:'Novosadski dogovor 1954.', def:'Pokušaj nametnuti zajednički „srpskohrvatski" jezik. Hrvati protestirali, Deklaracija 1967. ga odbacila.', star:true, tag:'NCVVO'},
  {kat:'standardizacija', term:'Deklaracija 1967.', def:'„Deklaracija o nazivu i položaju hrvatskoga književnoga jezika" (17. ožujka 1967., 130 potpisnika). Branjila samostalnost hrvatskog.', star:true, tag:'NCVVO ⭐'},
  {kat:'standardizacija', term:'Štokavsko (i)jekavski standard', def:'Suvremeni hrvatski književni jezik temelji se na štokavskom narječju s ijekavskim refleksom „jat".', star:true, tag:'NCVVO'},
  {kat:'standardizacija', term:'Refleksi „jat"', def:'Tri zamjene staroslavenskog „jat": ekavski (mleko), ijekavski (mlijeko), ikavski (mliko). Hrvatski standard = ijekavski.', star:true, tag:'NCVVO'},
  {kat:'standardizacija', term:'Tri narječja', def:'Kajkavski (sjeverozap.), čakavski (primorski), štokavski (istočni i južni). Po pitanju „što": kaj/ča/što.', star:true, tag:'NCVVO'},
  {kat:'standardizacija', term:'Standardni jezik', def:'Normirani jezik koji služi kao opći komunikacijski sustav. Hrvatski standardni jezik je štokavski (i)jekavski.', tag:''},
  {kat:'standardizacija', term:'IHJJ pravopis', def:'„Hrvatski pravopis" (2013., Institut za hrvatski jezik i jezikoslovlje) — službeni standardni pravopis u školama.', star:true, tag:'NCVVO'},
  {kat:'standardizacija', term:'Zagrebačka filološka škola', def:'Sredina 19. st. — branila hrvatsku jezičnu tradiciju, morfonološki pravopis. Predstavnik: Adolfo Veber-Tkalčević.', tag:''},
  {kat:'standardizacija', term:'Vukova škola', def:'Pristup Vuka Karadžića — fonetski pravopis („Piši kao što govoriš"). Suprotstavljena Zagrebačkoj školi.', tag:''},

  // OSOBE (15)
  {kat:'osobe', term:'Ćiril (Konstantin)', def:'Bizantski misionar (827.-869.), zajedno s bratom Metodom stvorio glagoljicu i staroslavenski jezik (~863.).', star:true, tag:'NCVVO ⭐'},
  {kat:'osobe', term:'Metod', def:'Bizantski misionar (815.-885.), brat Ćirila. Zajedno s Ćirilom širio kršćanstvo među Slavenima.', star:true, tag:'NCVVO'},
  {kat:'osobe', term:'Klement Ohridski', def:'Učenik Ćirila i Metoda. Pripisuje mu se stvaranje ćirilice (kraj 9. st., Bugarska).', tag:''},
  {kat:'osobe', term:'Bartol Kašić', def:'Hrvatski isusovac (1575.-1650.) iz Paga. Autor prve hrvatske gramatike (1604.) i prvog prijevoda Biblije na hrvatski.', star:true, tag:'NCVVO ⭐'},
  {kat:'osobe', term:'Faust Vrančić', def:'Hrvatski polihistor (1551.-1617.). Autor peterojezičnog rječnika (1595./1631.).', tag:''},
  {kat:'osobe', term:'Pavao Ritter Vitezović', def:'Hrvatski povjesničar i jezikoslovac (1652.-1713.). Autor „Lexicon" (1740.) — etimološki rječnik.', tag:''},
  {kat:'osobe', term:'Joakim Stulli', def:'Hrvatski leksikograf (1730.-1817.). Autor najvećeg hrv. rječnika 18. st. — „Lexicon" (1801.).', tag:''},
  {kat:'osobe', term:'Ljudevit Gaj', def:'Vodilac Hrvatskog narodnog preporoda (1809.-1872.). Reformirao hrvatsku latinicu (1830.) — uveo dijakritičke znakove.', star:true, tag:'NCVVO ⭐'},
  {kat:'osobe', term:'Ivan Mažuranić', def:'Hrvatski književnik i političar (1814.-1890.). Potpisnik Bečkog dogovora 1850., prvi hrvatski ban-pučanin.', tag:''},
  {kat:'osobe', term:'Adolfo Veber-Tkalčević', def:'Predstavnik Zagrebačke filološke škole (19. st.). Branio hrvatsku jezičnu tradiciju i morfonološki pravopis.', tag:''},
  {kat:'osobe', term:'Vuk Stefanović Karadžić', def:'Srpski reformator jezika (1787.-1864.). Uveo fonetski pravopis srpskog. Suradnik na Bečkom dogovoru 1850.', tag:''},
  {kat:'osobe', term:'Đuro Daničić', def:'Srpski filolog, suradnik Karadžića. Potpisnik Bečkog dogovora 1850. Radio na zajedničkom rječniku.', tag:''},
  {kat:'osobe', term:'Ivan Broz', def:'Hrvatski filolog (1852.-1893.). Autor „Hrvatskog pravopisa" (1892.) — temelj suvremenog hrv. pravopisa.', star:true, tag:'NCVVO ⭐'},
  {kat:'osobe', term:'Tomislav Maretić', def:'Hrvatski filolog (1854.-1938.). Autor „Gramatike i stilistike" (1899.) — učvrstila (i)jekavski standard.', star:true, tag:'NCVVO'},
  {kat:'osobe', term:'Stjepan Babić', def:'Hrvatski filolog (1925.-2021.). Suautor „Hrvatskog pravopisa" Babić-Finka-Moguš (1971. i kasnije).', tag:''},

  // POJMOVI (10)
  {kat:'pojmovi', term:'Filolog', def:'Znanstvenik koji proučava jezik, književnost i kulturu. U hrvatskom kontekstu posebno: jezikoslovac.', tag:''},
  {kat:'pojmovi', term:'Leksikograf', def:'Stručnjak koji izrađuje rječnike. Hrvatski leksikografi: Vrančić, Stulli, Anić.', tag:''},
  {kat:'pojmovi', term:'Slavistika', def:'Znanost koja proučava slavenske jezike i kulture. Hrvatski znanstvenici sudjeluju u svjetskoj slavistici od 19. st.', tag:''},
  {kat:'pojmovi', term:'Narodni jezik', def:'Govorni jezik naroda u određenom razdoblju, suprotstavljen književnom i učenom jeziku.', tag:''},
  {kat:'pojmovi', term:'Književni jezik', def:'Normirani oblik jezika koji služi za književnost i službenu uporabu. Hrvatski književni jezik = standardni hrvatski.', tag:''},
  {kat:'pojmovi', term:'Pravopis', def:'Skup pravila o pisanju jezika. Hrvatski pravopis: Brozov 1892., Babić-Finka-Moguš 1971., IHJJ 2013.', star:true, tag:'NCVVO'},
  {kat:'pojmovi', term:'Fonetski pravopis', def:'Pravopis temeljen na izgovoru („piši kao što govoriš"). Brozov pravopis je fonetski.', tag:''},
  {kat:'pojmovi', term:'Morfonološki pravopis', def:'Pravopis temeljen na morfemskoj postojanosti (npr. „bezvodan" — ne „besvodan", iako se čuje [s]). Zagrebačka škola.', tag:''},
  {kat:'pojmovi', term:'Liturgijski jezik', def:'Jezik koji se koristi u crkvenoj liturgiji. Hrvati su jedinstveno koristili HCSJ u rimokatoličkoj liturgiji do 20. st.', tag:''},
  {kat:'pojmovi', term:'Hrvatski standardni jezik', def:'Suvremeni normirani hrvatski jezik. Bazira se na štokavskom (i)jekavskom narječju, latinici, IHJJ pravopisu.', star:true, tag:'NCVVO'},
];let pojm2Active = 'all';
let pojm2Mode = 'grid';
let pj2Data = [];
let pj2Idx = 0;
let pj2Seen = {};

function renderPojm2(){
  const grid = document.getElementById('pojm-grid2');
  if(!grid) return;
  const show = pojm2Active === 'all' ? POJM_DATA2 : POJM_DATA2.filter(p => p.kat === pojm2Active);
  
  const KAT_LABELS = {
  razdoblja: 'Razdoblja',
  pisma: 'Pisma',
  spomenici: 'Spomenici',
  standardizacija: 'Standardizacija',
  osobe: 'Osobe',
  pojmovi: 'Pojmovi',
};
  
  grid.innerHTML = show.map(p => \`
    <div class="pojm-card-h20" onclick="this.classList.toggle('open')">
      <div class="pc-kat">\${KAT_LABELS[p.kat] || p.kat}</div>
      <div class="pc-term">\${p.term}</div>
      <div class="pc-hint">→ klikni za definiciju</div>
      <div class="pc-def">\${p.def}</div>
    </div>
  \`).join('');
}

function pojmFilter2(cat, btn){
  document.querySelectorAll('.pojm-filter .pojm-fbt').forEach(b => b.classList.remove('on'));
  if(btn) btn.classList.add('on');
  pojm2Active = cat;
  renderPojm2();
}

// Auto-init
if(typeof document !== 'undefined'){
  document.addEventListener('DOMContentLoaded', function(){
    setTimeout(renderPojm2, 150);
  });
  if(document.readyState !== 'loading'){
    setTimeout(renderPojm2, 150);
  }
}


/* TAB 5 · MORFO SCANNER (engine) */





/* ═══════════════════════════════════
   TAB 2 · INTERAKTIVNA VJEŽBA GLASOVNIH PROMJENA
═══════════════════════════════════ */

const GP_PAIRS = [
  {pair:['list', 'lišće'], answer:'jotacija', explain:'Jotacija: t+j → ć, s+j → š (zbirna imenica na -je)'},
  {pair:['vuk', 'vuče'], answer:'1palat', explain:'1. palatalizacija: k + e → č (vokativ jednine m.r.)'},
  {pair:['vojnik', 'vojnici'], answer:'sibilar', explain:'Sibilarizacija (2. palat.): k + i → c (N mn. m.r.)'},
  {pair:['čital', 'čitao'], answer:'vokal', explain:'Vokalizacija l: -l na kraju sloga → -o (gl. pridjev radni m.r.)'},
  {pair:['pas', 'psa'], answer:'nepost', explain:'Nepostojano a: a se gubi u kosim padežima (ali se vraća u G mn.: pasa)'},
  {pair:['svijet', 'svjetlost'], answer:'jat', explain:'Alternacija jata: ije (dugi slog) → je (kratki slog) — refleks praslav. *ě'},
  {pair:['bog', 'bože'], answer:'1palat', explain:'1. palatalizacija: g + e → ž (vokativ jednine m.r.)'},
  {pair:['iz+pasti', 'ispasti'], answer:'jednacenje', explain:'Jednačenje po zvučnosti: zvučni z → bezvučni s pred bezvučnim p'},
];

let gpIdx = 0;
let gpScore = 0;

function renderGpExercise(){
  const cont = document.getElementById('gp-exercise');
  if(!cont) return;
  
  if(gpIdx >= GP_PAIRS.length){
    renderGpResult();
    return;
  }
  
  const item = GP_PAIRS[gpIdx];
  
  cont.innerHTML = \`
    <div style="padding:20px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px">
        <div style="font-family:var(--mono);font-size:11px;color:var(--t3);letter-spacing:1px">PITANJE \${gpIdx+1} / \${GP_PAIRS.length}</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--gold)">✓ \${gpScore}</div>
      </div>
      
      <div style="text-align:center;margin:24px 0;display:flex;align-items:center;justify-content:center;gap:20px;flex-wrap:wrap">
        <div style="font-family:var(--display);font-size:28px;font-weight:700;color:var(--t1);padding:14px 24px;background:var(--bg);border:1.5px solid var(--bd);border-radius:var(--r1)">\${item.pair[0]}</div>
        <div style="font-size:24px;color:var(--gold)">→</div>
        <div style="font-family:var(--display);font-size:28px;font-weight:700;color:var(--gold);padding:14px 24px;background:var(--bg);border:1.5px solid var(--gold);border-radius:var(--r1);box-shadow:0 2px 8px rgba(233,180,70,.15)">\${item.pair[1]}</div>
      </div>
      
      <div style="font-family:var(--mono);font-size:11px;color:var(--t2);text-align:center;margin-bottom:14px;letter-spacing:1px">KOJA SE GLASOVNA PROMJENA DOGODILA?</div>
      
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:8px">
        <button class="gp-opt" data-ans="jotacija" onclick="gpAnswer('jotacija', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:var(--blue);font-weight:700;margin-bottom:2px">1. Jotacija</div>
          <div style="font-size:10px;color:var(--t3)">C + j → palatalni</div>
        </button>
        <button class="gp-opt" data-ans="1palat" onclick="gpAnswer('1palat', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:var(--bronze);font-weight:700;margin-bottom:2px">2. 1. palatalizacija</div>
          <div style="font-size:10px;color:var(--t3)">k,g,h + e/i → č,ž,š</div>
        </button>
        <button class="gp-opt" data-ans="sibilar" onclick="gpAnswer('sibilar', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:var(--green);font-weight:700;margin-bottom:2px">3. Sibilarizacija</div>
          <div style="font-size:10px;color:var(--t3)">k,g,h + i → c,z,s</div>
        </button>
        <button class="gp-opt" data-ans="vokal" onclick="gpAnswer('vokal', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:var(--red);font-weight:700;margin-bottom:2px">4. Vokalizacija l</div>
          <div style="font-size:10px;color:var(--t3)">-l → -o</div>
        </button>
        <button class="gp-opt" data-ans="nepost" onclick="gpAnswer('nepost', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:var(--gold);font-weight:700;margin-bottom:2px">5. Nepostojano a</div>
          <div style="font-size:10px;color:var(--t3)">a se gubi</div>
        </button>
        <button class="gp-opt" data-ans="jat" onclick="gpAnswer('jat', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:#9b59b6;font-weight:700;margin-bottom:2px">6. Alternacija jata</div>
          <div style="font-size:10px;color:var(--t3)">ije/je/e/i</div>
        </button>
        <button class="gp-opt" data-ans="jednacenje" onclick="gpAnswer('jednacenje', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:#e67e22;font-weight:700;margin-bottom:2px">7. Jednačenje zvuč.</div>
          <div style="font-size:10px;color:var(--t3)">izjednač. zvučnost</div>
        </button>
      </div>
      
      <div id="gp-feedback" style="margin-top:14px"></div>
    </div>
  \`;
}

function gpAnswer(chosen, btn){
  const item = GP_PAIRS[gpIdx];
  const correct = chosen === item.answer;
  if(correct) gpScore++;
  
  document.querySelectorAll('.gp-opt').forEach(b => {
    b.disabled = true;
    b.style.cursor = 'default';
    b.style.opacity = '0.5';
  });
  btn.style.opacity = '1';
  btn.style.borderColor = correct ? 'var(--green)' : 'var(--red)';
  btn.style.background = correct ? 'rgba(80,200,120,.1)' : 'rgba(224,82,82,.1)';
  
  if(!correct){
    document.querySelectorAll('.gp-opt').forEach(b => {
      if(b.dataset.ans === item.answer){
        b.style.opacity = '1';
        b.style.borderColor = 'var(--green)';
        b.style.background = 'rgba(80,200,120,.1)';
      }
    });
  }
  
  const fb = document.getElementById('gp-feedback');
  if(fb){
    fb.innerHTML = \`
      <div style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1);margin-top:10px">
        <div style="font-size:13px;line-height:1.6">
          <strong style="color:\${correct ? 'var(--green)' : 'var(--red)'}">\${correct ? '✓ Točno!' : '✗ Netočno.'}</strong>
          <span style="color:var(--t2)"> \${item.explain}</span>
        </div>
        <button class="nb-btn primary" style="margin-top:10px" onclick="gpNext()">\${gpIdx < GP_PAIRS.length - 1 ? 'Sljedeće →' : 'Završi'}</button>
      </div>
    \`;
  }
}

function gpNext(){
  gpIdx++;
  renderGpExercise();
}

function renderGpResult(){
  const cont = document.getElementById('gp-exercise');
  const res = document.getElementById('gp-result');
  if(!cont || !res) return;
  
  cont.style.display = 'none';
  res.style.display = 'block';
  
  const pct = Math.round((gpScore / GP_PAIRS.length) * 100);
  let msg, color, emoji;
  if(pct === 100){ emoji='🏆'; msg='Savršeno! Sve glasovne promjene prepoznate.'; color='var(--gold)'; }
  else if(pct >= 75){ emoji='🎯'; msg='Odlično! Razlike među promjenama su ti jasne.'; color='var(--green)'; }
  else if(pct >= 50){ emoji='📖'; msg='Dobro, ali ima prostora — provjeri scene-cards iznad.'; color='var(--blue)'; }
  else{ emoji='⚠'; msg='Vrati se na scene-cards i ponovi pravila glasovnih promjena.'; color='var(--red)'; }
  
  res.innerHTML = \`
    <div style="padding:24px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);text-align:center">
      <div style="font-size:48px;margin-bottom:8px">\${emoji}</div>
      <div style="font-family:var(--display);font-size:26px;font-weight:700;color:\${color};margin-bottom:8px">\${gpScore} / \${GP_PAIRS.length} · \${pct}%</div>
      <div style="font-size:14px;color:var(--t2);margin-bottom:16px">\${msg}</div>
      <button class="nb-btn primary" onclick="gpReset()">🔄 Ponovi vježbu</button>
    </div>
  \`;
}

function gpReset(){
  gpIdx = 0;
  gpScore = 0;
  const res = document.getElementById('gp-result');
  const cont = document.getElementById('gp-exercise');
  if(res) res.style.display = 'none';
  if(cont) cont.style.display = '';
  renderGpExercise();
}

if(typeof document !== 'undefined'){
  document.addEventListener('DOMContentLoaded', function(){
    setTimeout(renderGpExercise, 200);
  });
  if(document.readyState !== 'loading'){
    setTimeout(renderGpExercise, 200);
  }
}


/* ═══════════════════════════════════
   TAB 1 · WORD CLASS IDENTIFICATION EXERCISE
═══════════════════════════════════ */

const WC_SENTENCES = [
  {sentence:['Mala','djevojka','brzo','trči','u','školu','.'], target:1, word:'djevojka', answer:'imenica', explain:'"Djevojka" odgovara na pitanje TKO/ŠTO? — imenica (biće), ž.r., N jd.'},
  {sentence:['Taj','pametan','dječak','čita','zanimljivu','knjigu','.'], target:1, word:'pametan', answer:'pridjev', explain:'"Pametan" odgovara na pitanje KAKAV? — pridjev (opisni, neodređeni oblik), m.r., N jd.'},
  {sentence:['Ivan','i','Ana','pjevaju','lijepu','pjesmu','.'], target:3, word:'pjevaju', answer:'glagol', explain:'"Pjevaju" = radnja u prezentu, 3. l. mn. — glagol (nesvršeni vid).'},
  {sentence:['Njegova','majka','radi','u','velikoj','bolnici','.'], target:0, word:'Njegova', answer:'zamjenica', explain:'"Njegova" = posvojna zamjenica — izražava pripadnost (čija majka?), ž.r., N jd.'},
  {sentence:['Pet','studenata','uspješno','položi','ispit','.'], target:0, word:'Pet', answer:'broj', explain:'"Pet" = glavni broj, označava količinu (5 studenata). Ne mijenja oblik.'},
  {sentence:['Knjiga','leži','na','velikom','stolu','.'], target:2, word:'na', answer:'prijedlog', explain:'"Na" = prijedlog — izražava odnos (gdje leži?), stoji uz imenicu u L.'},
  {sentence:['Došao','sam','u','školu','jer','je','početak','.'], target:4, word:'jer', answer:'veznik', explain:'"Jer" = veznik — povezuje zavisnu (uzročnu) rečenicu s glavnom. Nepromjenjiva riječ.'},
  {sentence:['Ona','je','vrlo','lijepo','otpjevala','arijetu','.'], target:3, word:'lijepo', answer:'prilog', explain:'"Lijepo" = prilog načina (KAKO je pjevala?) — opisuje radnju glagola.'},
];

let wcIdx = 0;
let wcScore = 0;
const WC_OPTIONS = ['imenica','pridjev','zamjenica','broj','glagol','prilog','prijedlog','veznik','uzvik','čestica'];

function renderWcExercise(){
  const cont = document.getElementById('wc-exercise');
  if(!cont) return;
  
  if(wcIdx >= WC_SENTENCES.length){
    renderWcResult();
    return;
  }
  
  const item = WC_SENTENCES[wcIdx];
  
  // Build sentence HTML with target word highlighted
  const sentenceHtml = item.sentence.map((w, i) => {
    if(i === item.target){
      return \`<span style="display:inline-block;padding:4px 10px;background:rgba(233,180,70,.15);border:2px solid var(--gold);border-radius:var(--r1);color:var(--gold);font-weight:700;margin:0 2px">\${w}</span>\`;
    }
    if(w === '.' || w === ',' || w === '!' || w === '?'){
      return w;
    }
    return \`<span style="margin:0 2px">\${w}</span>\`;
  }).join(' ').replace(/ ([.,!?])/g, '$1');
  
  cont.innerHTML = \`
    <div style="padding:20px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <div style="font-family:var(--mono);font-size:11px;color:var(--t3);letter-spacing:1px">REČENICA \${wcIdx+1} / \${WC_SENTENCES.length}</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--gold)">✓ \${wcScore}</div>
      </div>
      
      <div style="text-align:center;margin:20px 0;padding:20px;background:var(--bg);border-radius:var(--r1);font-family:var(--display);font-size:16px;line-height:1.8;color:var(--t2)">
        \${sentenceHtml}
      </div>
      
      <div style="font-family:var(--mono);font-size:11px;color:var(--t2);text-align:center;margin-bottom:14px;letter-spacing:1px">KOJA JE VRSTA OZNAČENE RIJEČI?</div>
      
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:6px">
        \${WC_OPTIONS.map(opt => \`
          <button class="wc-opt" data-ans="\${opt}" onclick="wcAnswer('\${opt}', this)" style="padding:10px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;transition:all .2s;text-transform:capitalize">
            \${opt}
          </button>
        \`).join('')}
      </div>
      
      <div id="wc-feedback" style="margin-top:14px"></div>
    </div>
  \`;
}

function wcAnswer(chosen, btn){
  const item = WC_SENTENCES[wcIdx];
  const correct = chosen === item.answer;
  if(correct) wcScore++;
  
  document.querySelectorAll('.wc-opt').forEach(b => {
    b.disabled = true;
    b.style.cursor = 'default';
    b.style.opacity = '0.5';
  });
  btn.style.opacity = '1';
  btn.style.borderColor = correct ? 'var(--green)' : 'var(--red)';
  btn.style.background = correct ? 'rgba(80,200,120,.1)' : 'rgba(224,82,82,.1)';
  
  if(!correct){
    document.querySelectorAll('.wc-opt').forEach(b => {
      if(b.dataset.ans === item.answer){
        b.style.opacity = '1';
        b.style.borderColor = 'var(--green)';
        b.style.background = 'rgba(80,200,120,.1)';
      }
    });
  }
  
  const fb = document.getElementById('wc-feedback');
  if(fb){
    fb.innerHTML = \`
      <div style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1);margin-top:10px">
        <div style="font-size:13px;line-height:1.6">
          <strong style="color:\${correct ? 'var(--green)' : 'var(--red)'}">\${correct ? '✓ Točno!' : '✗ Netočno.'}</strong>
          <span style="color:var(--t2)"> \${item.explain}</span>
        </div>
        <button class="nb-btn primary" style="margin-top:10px" onclick="wcNext()">\${wcIdx < WC_SENTENCES.length - 1 ? 'Sljedeće →' : 'Završi'}</button>
      </div>
    \`;
  }
}

function wcNext(){
  wcIdx++;
  renderWcExercise();
}

function renderWcResult(){
  const cont = document.getElementById('wc-exercise');
  const res = document.getElementById('wc-result');
  if(!cont || !res) return;
  
  cont.style.display = 'none';
  res.style.display = 'block';
  
  const pct = Math.round((wcScore / WC_SENTENCES.length) * 100);
  let msg, color, emoji;
  if(pct === 100){ emoji='🏆'; msg='Savršeno! Sve vrste riječi prepoznaješ bez problema.'; color='var(--gold)'; }
  else if(pct >= 75){ emoji='🎯'; msg='Odlično! Vrste riječi su ti jasne.'; color='var(--green)'; }
  else if(pct >= 50){ emoji='📖'; msg='Dobro, ali provjeri scene-cards još jednom — posebno zamjenice i priloge.'; color='var(--blue)'; }
  else{ emoji='⚠'; msg='Vrati se na scene-cards i pažljivo pročitaj definicije + primjere.'; color='var(--red)'; }
  
  res.innerHTML = \`
    <div style="padding:24px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);text-align:center">
      <div style="font-size:48px;margin-bottom:8px">\${emoji}</div>
      <div style="font-family:var(--display);font-size:26px;font-weight:700;color:\${color};margin-bottom:8px">\${wcScore} / \${WC_SENTENCES.length} · \${pct}%</div>
      <div style="font-size:14px;color:var(--t2);margin-bottom:16px">\${msg}</div>
      <button class="nb-btn primary" onclick="wcReset()">🔄 Ponovi vježbu</button>
    </div>
  \`;
}

function wcReset(){
  wcIdx = 0;
  wcScore = 0;
  const res = document.getElementById('wc-result');
  const cont = document.getElementById('wc-exercise');
  if(res) res.style.display = 'none';
  if(cont) cont.style.display = '';
  renderWcExercise();
}

if(typeof document !== 'undefined'){
  document.addEventListener('DOMContentLoaded', function(){
    setTimeout(renderWcExercise, 200);
  });
  if(document.readyState !== 'loading'){
    setTimeout(renderWcExercise, 200);
  }
}


/* ═══════════════════════════════════
   TAB 2 · NEPROMJENJIVE — DETECTION EXERCISE
═══════════════════════════════════ */

const NP_SENTENCES = [
  {sentence:['Ivan','je','došao','u','školu','jučer','.'], target:3, word:'u', answer:'prijedlog', explain:'"U" je prijedlog — dolazi uz akuzativ (u školu = kamo?). Izražava prostorni odnos (kretanje).'},
  {sentence:['Ana','pjeva','lijepo','i','glasno','.'], target:3, word:'i', answer:'veznik', explain:'"I" je nezavisni veznik (sastavni) — povezuje dva ravnopravna priloga (lijepo, glasno).'},
  {sentence:['Učim','jer','želim','položiti','maturu','.'], target:1, word:'jer', answer:'veznik', explain:'"Jer" je zavisni veznik (uzročni) — uvodi zavisnu uzročnu rečenicu (zašto učim?).'},
  {sentence:['Ah',',','kako','je','lijep','ovaj','dan','!'], target:0, word:'Ah', answer:'uzvik', explain:'"Ah" je emocionalni uzvik — izražava čuđenje/oduševljenje. Stoji odvojeno od rečenice.'},
  {sentence:['Ne','znam','kamo','idemo','sutra','.'], target:0, word:'Ne', answer:'čestica', explain:'"Ne" je niječna čestica — negira glagol "znam". Izražava stav govornika (negaciju).'},
  {sentence:['On','trči','vrlo','brzo','prema','kući','.'], target:2, word:'vrlo', answer:'prilog', explain:'"Vrlo" je prilog količine — opisuje drugi prilog ("brzo"). Stupnjuje intenzitet.'},
];

let npIdx = 0;
let npScore = 0;
const NP_OPTIONS = ['prilog','prijedlog','veznik','uzvik','čestica'];

function renderNpExercise(){
  const cont = document.getElementById('np-exercise');
  if(!cont) return;
  
  if(npIdx >= NP_SENTENCES.length){
    renderNpResult();
    return;
  }
  
  const item = NP_SENTENCES[npIdx];
  
  const sentenceHtml = item.sentence.map((w, i) => {
    if(i === item.target){
      return \`<span style="display:inline-block;padding:4px 10px;background:rgba(233,180,70,.15);border:2px solid var(--gold);border-radius:var(--r1);color:var(--gold);font-weight:700;margin:0 2px">\${w}</span>\`;
    }
    if(w === '.' || w === ',' || w === '!' || w === '?'){
      return w;
    }
    return \`<span style="margin:0 2px">\${w}</span>\`;
  }).join(' ').replace(/ ([.,!?])/g, '$1');
  
  cont.innerHTML = \`
    <div style="padding:20px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <div style="font-family:var(--mono);font-size:11px;color:var(--t3);letter-spacing:1px">REČENICA \${npIdx+1} / \${NP_SENTENCES.length}</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--gold)">✓ \${npScore}</div>
      </div>
      
      <div style="text-align:center;margin:20px 0;padding:20px;background:var(--bg);border-radius:var(--r1);font-family:var(--display);font-size:16px;line-height:1.8;color:var(--t2)">
        \${sentenceHtml}
      </div>
      
      <div style="font-family:var(--mono);font-size:11px;color:var(--t2);text-align:center;margin-bottom:14px;letter-spacing:1px">KOJA JE VRSTA OZNAČENE RIJEČI?</div>
      
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:8px">
        \${NP_OPTIONS.map(opt => \`
          <button class="np-opt" data-ans="\${opt}" onclick="npAnswer('\${opt}', this)" style="padding:12px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:13px;transition:all .2s;text-transform:capitalize">
            \${opt}
          </button>
        \`).join('')}
      </div>
      
      <div id="np-feedback" style="margin-top:14px"></div>
    </div>
  \`;
}

function npAnswer(chosen, btn){
  const item = NP_SENTENCES[npIdx];
  const correct = chosen === item.answer;
  if(correct) npScore++;
  
  document.querySelectorAll('.np-opt').forEach(b => {
    b.disabled = true;
    b.style.cursor = 'default';
    b.style.opacity = '0.5';
  });
  btn.style.opacity = '1';
  btn.style.borderColor = correct ? 'var(--green)' : 'var(--red)';
  btn.style.background = correct ? 'rgba(80,200,120,.1)' : 'rgba(224,82,82,.1)';
  
  if(!correct){
    document.querySelectorAll('.np-opt').forEach(b => {
      if(b.dataset.ans === item.answer){
        b.style.opacity = '1';
        b.style.borderColor = 'var(--green)';
        b.style.background = 'rgba(80,200,120,.1)';
      }
    });
  }
  
  const fb = document.getElementById('np-feedback');
  if(fb){
    fb.innerHTML = \`
      <div style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1);margin-top:10px">
        <div style="font-size:13px;line-height:1.6">
          <strong style="color:\${correct ? 'var(--green)' : 'var(--red)'}">\${correct ? '✓ Točno!' : '✗ Netočno.'}</strong>
          <span style="color:var(--t2)"> \${item.explain}</span>
        </div>
        <button class="nb-btn primary" style="margin-top:10px" onclick="npNext()">\${npIdx < NP_SENTENCES.length - 1 ? 'Sljedeće →' : 'Završi'}</button>
      </div>
    \`;
  }
}

function npNext(){
  npIdx++;
  renderNpExercise();
}

function renderNpResult(){
  const cont = document.getElementById('np-exercise');
  const res = document.getElementById('np-result');
  if(!cont || !res) return;
  
  cont.style.display = 'none';
  res.style.display = 'block';
  
  const pct = Math.round((npScore / NP_SENTENCES.length) * 100);
  let msg, color, emoji;
  if(pct === 100){ emoji='🏆'; msg='Savršeno! Sve nepromjenjive riječi prepoznaješ.'; color='var(--gold)'; }
  else if(pct >= 75){ emoji='🎯'; msg='Odlično! Razlike su ti jasne.'; color='var(--green)'; }
  else if(pct >= 50){ emoji='📖'; msg='Ponovi — posebno razliku između veznika i čestice.'; color='var(--blue)'; }
  else{ emoji='⚠'; msg='Vrati se na scene-cards i pažljivo pročitaj razlike (Box warn).'; color='var(--red)'; }
  
  res.innerHTML = \`
    <div style="padding:24px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);text-align:center">
      <div style="font-size:48px;margin-bottom:8px">\${emoji}</div>
      <div style="font-family:var(--display);font-size:26px;font-weight:700;color:\${color};margin-bottom:8px">\${npScore} / \${NP_SENTENCES.length} · \${pct}%</div>
      <div style="font-size:14px;color:var(--t2);margin-bottom:16px">\${msg}</div>
      <button class="nb-btn primary" onclick="npReset()">🔄 Ponovi vježbu</button>
    </div>
  \`;
}

function npReset(){
  npIdx = 0;
  npScore = 0;
  const res = document.getElementById('np-result');
  const cont = document.getElementById('np-exercise');
  if(res) res.style.display = 'none';
  if(cont) cont.style.display = '';
  renderNpExercise();
}

if(typeof document !== 'undefined'){
  document.addEventListener('DOMContentLoaded', function(){
    setTimeout(renderNpExercise, 250);
  });
  if(document.readyState !== 'loading'){
    setTimeout(renderNpExercise, 250);
  }
}


/* ═══════════════════════════════════
   TAB 3 · PADEŽNI DECLINER
═══════════════════════════════════ */

// BAZA IZNIMKI — nepravilne imenice + često pitane
const DECL_EXCEPTIONS = {
  'čovjek': {
    gender: 'm', type: 'a',
    forms: {
      N: ['čovjek', 'ljudi'], G: ['čovjeka', 'ljudi'], D: ['čovjeku', 'ljudima'],
      A: ['čovjeka', 'ljude'], V: ['čovječe', 'ljudi'], L: ['čovjeku', 'ljudima'],
      I: ['čovjekom', 'ljudima']
    },
    note: 'Supletivna množina — "ljudi" je poseban oblik (nije "čovjeci").'
  },
  'dijete': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['dijete', 'djeca'], G: ['djeteta', 'djece'], D: ['djetetu', 'djeci'],
      A: ['dijete', 'djecu'], V: ['dijete', 'djeco'], L: ['djetetu', 'djeci'],
      I: ['djetetom', 'djecom']
    },
    note: 'Zbirna množina "djeca" se sklanja u jednini (kao ž.r.), ali gramatički je množina.'
  },
  'pas': {
    gender: 'm', type: 'a',
    forms: {
      N: ['pas', 'psi'], G: ['psa', 'pasa'], D: ['psu', 'psima'],
      A: ['psa', 'pse'], V: ['pase', 'psi'], L: ['psu', 'psima'],
      I: ['psom', 'psima']
    },
    note: 'Nepostojano a — a nestaje u kosim padežima (pas → psa).'
  },
  'noga': {
    gender: 'ž', type: 'e',
    forms: {
      N: ['noga', 'noge'], G: ['noge', 'nogu'], D: ['nozi', 'nogama'],
      A: ['nogu', 'noge'], V: ['nogo', 'noge'], L: ['nozi', 'nogama'],
      I: ['nogom', 'nogama']
    },
    note: 'Sibilarizacija u D/L jd. (noga → nozi).'
  },
  'ruka': {
    gender: 'ž', type: 'e',
    forms: {
      N: ['ruka', 'ruke'], G: ['ruke', 'ruku'], D: ['ruci', 'rukama'],
      A: ['ruku', 'ruke'], V: ['ruko', 'ruke'], L: ['ruci', 'rukama'],
      I: ['rukom', 'rukama']
    },
    note: 'Sibilarizacija u D/L jd. (ruka → ruci).'
  },
  'majka': {
    gender: 'ž', type: 'e',
    forms: {
      N: ['majka', 'majke'], G: ['majke', 'majki'], D: ['majci', 'majkama'],
      A: ['majku', 'majke'], V: ['majko', 'majke'], L: ['majci', 'majkama'],
      I: ['majkom', 'majkama']
    },
    note: 'Sibilarizacija u D/L jd. (majka → majci).'
  },
  'vojnik': {
    gender: 'm', type: 'a',
    forms: {
      N: ['vojnik', 'vojnici'], G: ['vojnika', 'vojnika'], D: ['vojniku', 'vojnicima'],
      A: ['vojnika', 'vojnike'], V: ['vojniče', 'vojnici'], L: ['vojniku', 'vojnicima'],
      I: ['vojnikom', 'vojnicima']
    },
    note: 'Sibilarizacija u N/V mn. (vojnik → vojnici). V jd. ima 1. palatalizaciju (vojniče).'
  },
  'Bog': {
    gender: 'm', type: 'a',
    forms: {
      N: ['Bog', 'bogovi'], G: ['Boga', 'bogova'], D: ['Bogu', 'bogovima'],
      A: ['Boga', 'bogove'], V: ['Bože', 'bogovi'], L: ['Bogu', 'bogovima'],
      I: ['Bogom', 'bogovima']
    },
    note: 'V jd. "Bože" — 1. palatalizacija (g → ž).'
  },
  'noć': {
    gender: 'ž', type: 'i',
    forms: {
      N: ['noć', 'noći'], G: ['noći', 'noći'], D: ['noći', 'noćima'],
      A: ['noć', 'noći'], V: ['noći', 'noći'], L: ['noći', 'noćima'],
      I: ['noći / noću', 'noćima']
    },
    note: 'I-vrsta ž.r. (završava suglasnikom). I jd. ima oblik "noću" (kao prilog: "po noći").'
  },
  'stvar': {
    gender: 'ž', type: 'i',
    forms: {
      N: ['stvar', 'stvari'], G: ['stvari', 'stvari'], D: ['stvari', 'stvarima'],
      A: ['stvar', 'stvari'], V: ['stvari', 'stvari'], L: ['stvari', 'stvarima'],
      I: ['stvari / stvarju', 'stvarima']
    },
    note: 'I-vrsta ž.r.'
  },
  'kost': {
    gender: 'ž', type: 'i',
    forms: {
      N: ['kost', 'kosti'], G: ['kosti', 'kostiju'], D: ['kosti', 'kostima'],
      A: ['kost', 'kosti'], V: ['kosti', 'kosti'], L: ['kosti', 'kostima'],
      I: ['kosti / košću', 'kostima']
    },
    note: 'I-vrsta ž.r. G mn. završava -iju (kostiju).'
  },
  'ljubav': {
    gender: 'ž', type: 'i',
    forms: {
      N: ['ljubav', 'ljubavi'], G: ['ljubavi', 'ljubavi'], D: ['ljubavi', 'ljubavima'],
      A: ['ljubav', 'ljubavi'], V: ['ljubavi', 'ljubavi'], L: ['ljubavi', 'ljubavima'],
      I: ['ljubavi / ljubavlju', 'ljubavima']
    },
    note: 'I-vrsta ž.r. I jd. ima dva oblika — "ljubavi" i "ljubavlju".'
  },
  'brat': {
    gender: 'm', type: 'a',
    forms: {
      N: ['brat', 'braća'], G: ['brata', 'braće'], D: ['bratu', 'braći'],
      A: ['brata', 'braću'], V: ['brate', 'braćo'], L: ['bratu', 'braći'],
      I: ['bratom', 'braćom']
    },
    note: 'Zbirna množina "braća" sklanja se u jednini (kao ž.r.).'
  },
  'sin': {
    gender: 'm', type: 'a',
    forms: {
      N: ['sin', 'sinovi'], G: ['sina', 'sinova'], D: ['sinu', 'sinovima'],
      A: ['sina', 'sinove'], V: ['sine', 'sinovi'], L: ['sinu', 'sinovima'],
      I: ['sinom', 'sinovima']
    },
    note: 'M.r. kratka riječ s umetkom -ov- u množini.'
  },
  'otac': {
    gender: 'm', type: 'a',
    forms: {
      N: ['otac', 'očevi'], G: ['oca', 'očeva'], D: ['ocu', 'očevima'],
      A: ['oca', 'očeve'], V: ['oče', 'očevi'], L: ['ocu', 'očevima'],
      I: ['ocem', 'očevima']
    },
    note: 'Nepostojano a + palatalizacija (c→č) u množini.'
  },
  'tata': {
    gender: 'm', type: 'e',
    forms: {
      N: ['tata', 'tate'], G: ['tate', 'tata'], D: ['tati', 'tatama'],
      A: ['tatu', 'tate'], V: ['tata', 'tate'], L: ['tati', 'tatama'],
      I: ['tatom', 'tatama']
    },
    note: 'M.r. na -a — sklanja se kao e-vrsta (ženska), ali rod je muški (slaganje s pridjevima: dobar tata).'
  },
  'oko': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['oko', 'oči'], G: ['oka', 'očiju'], D: ['oku', 'očima'],
      A: ['oko', 'oči'], V: ['oko', 'oči'], L: ['oku', 'očima'],
      I: ['okom', 'očima']
    },
    note: 'Supletivna množina "oči" (stari dvojinski oblik) — ž.r. i-vrste u mn.'
  },
  'uho': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['uho', 'uši'], G: ['uha', 'ušiju'], D: ['uhu', 'ušima'],
      A: ['uho', 'uši'], V: ['uho', 'uši'], L: ['uhu', 'ušima'],
      I: ['uhom', 'ušima']
    },
    note: 'Supletivna množina "uši" (stari dvojinski oblik).'
  },
  'gospodin': {
    gender: 'm', type: 'a',
    forms: {
      N: ['gospodin', 'gospoda'], G: ['gospodina', 'gospode'], D: ['gospodinu', 'gospodi'],
      A: ['gospodina', 'gospodu'], V: ['gospodine', 'gospodo'], L: ['gospodinu', 'gospodi'],
      I: ['gospodinom', 'gospodom']
    },
    note: 'Nepravilna zbirna množina "gospoda" — sklanja se u jednini (kao ž.r.).'
  },
  'selo': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['selo', 'sela'], G: ['sela', 'sela'], D: ['selu', 'selima'],
      A: ['selo', 'sela'], V: ['selo', 'sela'], L: ['selu', 'selima'],
      I: ['selom', 'selima']
    },
    note: 'Sr.r. a-vrsta — tipično sklanjanje.'
  },
  'more': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['more', 'mora'], G: ['mora', 'mora'], D: ['moru', 'morima'],
      A: ['more', 'mora'], V: ['more', 'mora'], L: ['moru', 'morima'],
      I: ['morem', 'morima']
    },
    note: 'Sr.r. palatalna osnova — I jd. ima -em umjesto -om.'
  },
  // === DODATNE IZNIMKE (UPGRADE) ===
  'prst': {
    gender: 'm', type: 'a',
    forms: {
      N: ['prst', 'prsti'], G: ['prsta', 'prstiju / prsta'], D: ['prstu', 'prstima'],
      A: ['prst', 'prste'], V: ['prste', 'prsti'], L: ['prstu', 'prstima'],
      I: ['prstom', 'prstima']
    },
    note: 'G mn. ima dva oblika — "prstiju" i "prsta".'
  },
  'gost': {
    gender: 'm', type: 'a',
    forms: {
      N: ['gost', 'gosti'], G: ['gosta', 'gostiju'], D: ['gostu', 'gostima'],
      A: ['gosta', 'goste'], V: ['goste', 'gosti'], L: ['gostu', 'gostima'],
      I: ['gostom', 'gostima']
    },
    note: 'M.r. s G mn. -iju (kao i-vrsta).'
  },
  'put': {
    gender: 'm', type: 'a',
    forms: {
      N: ['put', 'putovi / puti'], G: ['puta', 'putova / puti'], D: ['putu', 'putovima'],
      A: ['put', 'putove'], V: ['pute', 'putovi'], L: ['putu', 'putovima'],
      I: ['putem / putom', 'putovima']
    },
    note: 'I jd. ima oblike "putem" (po putu) i "putom" (jednom). Mn. ima 2 oblika ("putovi" je češći).'
  },
  'dan': {
    gender: 'm', type: 'a',
    forms: {
      N: ['dan', 'dani'], G: ['dana', 'dana'], D: ['danu', 'danima'],
      A: ['dan', 'dane'], V: ['dane', 'dani'], L: ['danu', 'danima'],
      I: ['danom', 'danima']
    },
    note: 'M.r. s G mn. = G jd. (rijetkost u m.r.).'
  },
  'pjesma': {
    gender: 'ž', type: 'e',
    forms: {
      N: ['pjesma', 'pjesme'], G: ['pjesme', 'pjesama'], D: ['pjesmi', 'pjesmama'],
      A: ['pjesmu', 'pjesme'], V: ['pjesmo', 'pjesme'], L: ['pjesmi', 'pjesmama'],
      I: ['pjesmom', 'pjesmama']
    },
    note: 'G mn. s nepostojanim a — "pjesama".'
  },
  'sestra': {
    gender: 'ž', type: 'e',
    forms: {
      N: ['sestra', 'sestre'], G: ['sestre', 'sestara'], D: ['sestri', 'sestrama'],
      A: ['sestru', 'sestre'], V: ['sestro', 'sestre'], L: ['sestri', 'sestrama'],
      I: ['sestrom', 'sestrama']
    },
    note: 'G mn. s nepostojanim a — "sestara".'
  },
  'jaje': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['jaje', 'jaja'], G: ['jaja', 'jaja'], D: ['jajetu', 'jajima'],
      A: ['jaje', 'jaja'], V: ['jaje', 'jaja'], L: ['jajetu', 'jajima'],
      I: ['jajetom / jajem', 'jajima']
    },
    note: 'Sr.r. s posebnim oblikom u D/L jd. (-etu).'
  },
  'ime': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['ime', 'imena'], G: ['imena', 'imena'], D: ['imenu', 'imenima'],
      A: ['ime', 'imena'], V: ['ime', 'imena'], L: ['imenu', 'imenima'],
      I: ['imenom', 'imenima']
    },
    note: 'Sr.r. s n-osnovom — proširuje se s -en- (ime → imen-a, imen-u, imen-om).'
  },
  'vrijeme': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['vrijeme', 'vremena'], G: ['vremena', 'vremena'], D: ['vremenu', 'vremenima'],
      A: ['vrijeme', 'vremena'], V: ['vrijeme', 'vremena'], L: ['vremenu', 'vremenima'],
      I: ['vremenom', 'vremenima']
    },
    note: 'Sr.r. s n-osnovom + alternacija jata (vrije/vreme).'
  },
  'rame': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['rame', 'ramena'], G: ['ramena', 'ramena'], D: ['ramenu', 'ramenima'],
      A: ['rame', 'ramena'], V: ['rame', 'ramena'], L: ['ramenu', 'ramenima'],
      I: ['ramenom', 'ramenima']
    },
    note: 'Sr.r. s n-osnovom (kao "ime").'
  }
};

// Detekcija deklinacijske vrste i roda (heuristika)
function detectDeclType(word){
  const w = word.toLowerCase();
  if(w.endsWith('a')){
    if(['tata','papa','djed','vojvoda','starješina','kolega','sudac'].includes(w)){
      return {type:'e', gender:'m'};
    }
    return {type:'e', gender:'ž'};
  }
  if(w.endsWith('o') || w.endsWith('e')){
    return {type:'a', gender:'sr'};
  }
  // Konstantna imena na -i (i-vrsta ž.r.) ili neka specifična
  if(['noć','stvar','ljubav','kost','mast','mladost','sreća','radost','glad','riječ'].includes(w)){
    return {type:'i', gender:'ž'};
  }
  // Default — suglasnik = a-vrsta m.r.
  return {type:'a', gender:'m'};
}

// Primjena glasovnih promjena (za regular declension)
function applySoundChanges(stem, ending, position){
  const last = stem[stem.length-1];
  // Sibilarizacija (k, g, h + i → c, z, s) u D/L jd. i N/V mn.
  if(ending.startsWith('i') && (position === 'Djd' || position === 'Ljd' || position === 'Nmn' || position === 'Vmn')){
    if(last === 'k') return stem.slice(0, -1) + 'c' + ending;
    if(last === 'g') return stem.slice(0, -1) + 'z' + ending;
    if(last === 'h') return stem.slice(0, -1) + 's' + ending;
  }
  // 1. palatalizacija (k, g, h + e → č, ž, š) u V jd.
  if(ending.startsWith('e') && position === 'Vjd'){
    if(last === 'k') return stem.slice(0, -1) + 'č' + ending;
    if(last === 'g') return stem.slice(0, -1) + 'ž' + ending;
    if(last === 'h') return stem.slice(0, -1) + 'š' + ending;
    if(last === 'c') return stem.slice(0, -1) + 'č' + ending;
  }
  return stem + ending;
}

// Regular declension engine
function declineRegular(word, type, gender){
  const forms = {};
  const w = word.toLowerCase();
  const animate = isAnimate(w);
  
  if(type === 'a' && gender === 'm'){
    const stem = w;
    forms.N = [w, applySoundChanges(stem, 'i', 'Nmn')];
    forms.G = [applySoundChanges(stem, 'a', 'Gjd'), applySoundChanges(stem, 'a', 'Gmn')];
    forms.D = [applySoundChanges(stem, 'u', 'Djd'), applySoundChanges(stem, 'ima', 'Dmn')];
    // A jd. — živo = G jd., neživo = N jd.
    forms.A = [animate ? applySoundChanges(stem, 'a', 'Gjd') : w, applySoundChanges(stem, 'e', 'Amn')];
    forms.V = [applySoundChanges(stem, 'e', 'Vjd'), applySoundChanges(stem, 'i', 'Vmn')];
    forms.L = [applySoundChanges(stem, 'u', 'Ljd'), applySoundChanges(stem, 'ima', 'Lmn')];
    forms.I = [applySoundChanges(stem, 'om', 'Ijd'), applySoundChanges(stem, 'ima', 'Imn')];
  } else if(type === 'a' && gender === 'sr'){
    const stem = w.slice(0, -1);
    const isE = w.endsWith('e');
    forms.N = [w, stem + 'a'];
    forms.G = [stem + 'a', stem + 'a'];
    forms.D = [stem + 'u', stem + 'ima'];
    forms.A = [w, stem + 'a'];
    forms.V = [w, stem + 'a'];
    forms.L = [stem + 'u', stem + 'ima'];
    forms.I = [stem + (isE ? 'em' : 'om'), stem + 'ima'];
  } else if(type === 'e'){
    const stem = w.slice(0, -1);
    forms.N = [w, stem + 'e'];
    forms.G = [stem + 'e', stem + 'a'];
    forms.D = [applySoundChanges(stem, 'i', 'Djd'), stem + 'ama'];
    forms.A = [stem + 'u', stem + 'e'];
    forms.V = [stem + 'o', stem + 'e'];
    forms.L = [applySoundChanges(stem, 'i', 'Ljd'), stem + 'ama'];
    forms.I = [stem + 'om', stem + 'ama'];
  } else if(type === 'i'){
    const stem = w;
    forms.N = [w, stem + 'i'];
    forms.G = [stem + 'i', stem + 'i'];
    forms.D = [stem + 'i', stem + 'ima'];
    forms.A = [w, stem + 'i'];
    forms.V = [stem + 'i', stem + 'i'];
    forms.L = [stem + 'i', stem + 'ima'];
    forms.I = [stem + 'i / ' + stem + 'ju', stem + 'ima'];
  }
  
  return forms;
}

function declineNoun(){
  const input = document.getElementById('decl-input');
  const out = document.getElementById('decl-results');
  if(!input || !out) return;
  
  const word = input.value.trim().toLowerCase();
  if(!word){ out.innerHTML = ''; return; }
  
  if(!/^[a-zčćđšž]+$/.test(word)){
    out.innerHTML = '<div class="box-warn"><div class="bw-body"><div class="bw-txt">Samo hrv. slova (a-ž), bez razmaka.</div></div></div>';
    return;
  }
  
  let result, gender, type, note, isException = false;
  
  // Provjeri bazu iznimki
  if(DECL_EXCEPTIONS[word]){
    const exc = DECL_EXCEPTIONS[word];
    result = exc.forms;
    gender = exc.gender;
    type = exc.type;
    note = exc.note;
    isException = true;
  } else {
    const detected = detectDeclType(word);
    type = detected.type;
    gender = detected.gender;
    result = declineRegular(word, type, gender);
    note = \`Regularno sklanjanje · \${type}-vrsta · \${gender}.r.\`;
  }
  
  const GENDER_LABEL = {'m':'muški rod','ž':'ženski rod','sr':'srednji rod'};
  const TYPE_LABEL = {'a':'a-vrsta','e':'e-vrsta','i':'i-vrsta'};
  
  const PADEZ_NAMES = [
    ['N','Nominativ','tko? što?','var(--blue)'],
    ['G','Genitiv','koga? čega?','var(--red)'],
    ['D','Dativ','komu? čemu?','var(--bronze)'],
    ['A','Akuzativ','koga? što?','var(--green)'],
    ['V','Vokativ','(dozivanje)','var(--gold)'],
    ['L','Lokativ','o kome? o čemu?','#9b59b6'],
    ['I','Instrumental','s kim? s čim?','#e67e22']
  ];
  
  let html = \`
    <div style="padding:18px;background:linear-gradient(135deg,rgba(233,180,70,.08),transparent);border:1px solid rgba(233,180,70,.3);border-radius:var(--r2);margin-bottom:16px">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px">
        <div>
          <div style="font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:2px">DEKLINACIJA</div>
          <div style="font-family:var(--display);font-size:28px;font-weight:700;color:var(--gold);margin-top:4px">\${word}</div>
        </div>
        <div style="text-align:right">
          <div style="font-family:var(--mono);font-size:11px;color:var(--t2)">\${GENDER_LABEL[gender]} · \${TYPE_LABEL[type]}</div>
          \${isException ? '<div style="font-family:var(--mono);font-size:10px;color:var(--bronze);margin-top:4px">⚠ IZNIMKA · iz baze</div>' : ''}
        </div>
      </div>
    </div>

    <div class="table-wrap" style="overflow-x:auto;margin:12px 0">
      <table style="width:100%;border-collapse:collapse;font-family:var(--mono);font-size:13px">
        <thead>
          <tr style="background:var(--ele);border-bottom:2px solid var(--bd)">
            <th style="padding:10px;text-align:left;color:var(--gold)">Padež</th>
            <th style="padding:10px;text-align:left;color:var(--gold)">Pitanje</th>
            <th style="padding:10px;text-align:center;color:var(--gold)">Jednina</th>
            <th style="padding:10px;text-align:center;color:var(--gold)">Množina</th>
          </tr>
        </thead>
        <tbody>
  \`;
  
  PADEZ_NAMES.forEach(([key, name, q, color]) => {
    const [jd, mn] = result[key] || ['—','—'];
    html += \`
      <tr style="border-bottom:1px solid var(--bd)">
        <td style="padding:10px;color:\${color};font-weight:700">\${name}</td>
        <td style="padding:10px;color:var(--t3);font-size:11px">\${q}</td>
        <td style="padding:10px;text-align:center;color:var(--t1);font-weight:600">\${jd}</td>
        <td style="padding:10px;text-align:center;color:var(--t1);font-weight:600">\${mn}</td>
      </tr>
    \`;
  });
  
  html += \`
        </tbody>
      </table>
    </div>
  \`;
  
  if(note){
    html += \`
      <div class="box-signal" style="margin-top:12px">
        <div class="box-signal-lbl">💡 Napomena</div>
        <div class="box-signal-txt">\${note}</div>
      </div>
    \`;
  }
  
  if(!isException){
    html += \`
      <div style="font-family:var(--mono);font-size:10px;color:var(--t3);text-align:center;margin-top:8px">⚠ Algoritamska deklinacija — provjeri u rječniku za stilistički specifične oblike</div>
    \`;
  }
  
  // Action buttons at bottom
  html += \`
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;flex-wrap:wrap">
      <button class="nb-btn" id="decl-copy-btn" style="padding:6px 12px;font-size:12px" onclick="declineCopyTable()">📋 Kopiraj tablicu</button>
      <button class="nb-btn" style="padding:6px 12px;font-size:12px" onclick="window.print()">🖨 Printaj</button>
    </div>
  \`;
  
    // Save to history
  try {
    const hist = JSON.parse(localStorage.getItem('mt.hrv.h23.decl_hist')||'[]');
    if(!hist.some(h => h.word === word)){
      hist.push({word, date: new Date().toISOString()});
      localStorage.setItem('mt.hrv.h23.decl_hist', JSON.stringify(hist.slice(-15)));
    }
  } catch(e){}
  
  out.innerHTML = html;
}

function declineExample(word){
  const input = document.getElementById('decl-input');
  if(input){
    input.value = word;
    declineNoun();
    input.scrollIntoView({behavior:'smooth', block:'center'});
  }
}


/* ═══════════════════════════════════
   TAB 3 · PADEŽNI QUIZ
═══════════════════════════════════ */

const PZ_ITEMS = [
  {sentence:['Ivan','je','vidio','Anu','u','parku','.'], target:3, word:'Anu', answer:'A', explain:'"Anu" je izravni objekt glagola "vidio" — akuzativ (A). Pitanje: koga je vidio? → Anu.'},
  {sentence:['Dao','sam','knjigu','prijatelju','.'], target:3, word:'prijatelju', answer:'D', explain:'"Prijatelju" je primatelj — dativ (D). Pitanje: komu sam dao? → prijatelju.'},
  {sentence:['Boravim','u','Zagrebu','već','5','godina','.'], target:2, word:'Zagrebu', answer:'L', explain:'"Zagrebu" označava mjesto (gdje?) — lokativ (L). Uz prijedlog "u" + L = mirovanje.'},
  {sentence:['Kupila','je','cvijeće','za','majčin','rođendan','.'], target:5, word:'rođendan', answer:'A', explain:'"Rođendan" — akuzativ (A), uz prijedlog "za". Pitanje: za što? → za rođendan.'},
  {sentence:['Otišao','je','od','kuće','rano','ujutro','.'], target:3, word:'kuće', answer:'G', explain:'"Kuće" je genitiv (G) uz prijedlog "od". Pitanje: od čega? → od kuće.'},
  {sentence:['Šetali','su','se','s','djecom','po','parku','.'], target:4, word:'djecom', answer:'I', explain:'"Djecom" je instrumental (I) uz prijedlog "s" — društvo. Pitanje: s kim? → s djecom.'},
  {sentence:['Ivane',',','dođi','ovamo','!'], target:0, word:'Ivane', answer:'V', explain:'"Ivane" — vokativ (V). Dozivanje osobe, stoji odvojeno (obično sa zarezom ili uskličnikom).'},
  {sentence:['Knjiga','leži','na','stolu','kraj','prozora','.'], target:3, word:'stolu', answer:'L', explain:'"Stolu" je lokativ (L) uz prijedlog "na" — gdje leži? Stanje mirovanja.'},
];

let pzIdx = 0, pzScore = 0;
const PZ_OPTIONS = [
  {key:'N', name:'Nominativ', color:'var(--blue)'},
  {key:'G', name:'Genitiv', color:'var(--red)'},
  {key:'D', name:'Dativ', color:'var(--bronze)'},
  {key:'A', name:'Akuzativ', color:'var(--green)'},
  {key:'V', name:'Vokativ', color:'var(--gold)'},
  {key:'L', name:'Lokativ', color:'#9b59b6'},
  {key:'I', name:'Instrumental', color:'#e67e22'}
];

function renderPzExercise(){
  const cont = document.getElementById('pz-exercise');
  if(!cont) return;
  if(pzIdx >= PZ_ITEMS.length){ renderPzResult(); return; }
  
  const item = PZ_ITEMS[pzIdx];
  const sentenceHtml = item.sentence.map((w, i) => {
    if(i === item.target){
      return \`<span style="display:inline-block;padding:4px 10px;background:rgba(233,180,70,.15);border:2px solid var(--gold);border-radius:var(--r1);color:var(--gold);font-weight:700;margin:0 2px">\${w}</span>\`;
    }
    if(w === '.' || w === ',' || w === '!' || w === '?') return w;
    return \`<span style="margin:0 2px">\${w}</span>\`;
  }).join(' ').replace(/ ([.,!?])/g, '$1');
  
  cont.innerHTML = \`
    <div style="padding:20px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <div style="font-family:var(--mono);font-size:11px;color:var(--t3);letter-spacing:1px">PITANJE \${pzIdx+1} / \${PZ_ITEMS.length}</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--gold)">✓ \${pzScore}</div>
      </div>
      <div style="text-align:center;margin:20px 0;padding:20px;background:var(--bg);border-radius:var(--r1);font-family:var(--display);font-size:16px;line-height:1.8;color:var(--t2)">\${sentenceHtml}</div>
      <div style="font-family:var(--mono);font-size:11px;color:var(--t2);text-align:center;margin-bottom:14px;letter-spacing:1px">KOJI JE PADEŽ OZNAČENE RIJEČI?</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:6px">
        \${PZ_OPTIONS.map(opt => \`
          <button class="pz-opt" data-ans="\${opt.key}" onclick="pzAnswer('\${opt.key}', this)" style="padding:12px 10px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;transition:all .2s;text-align:left">
            <div style="font-weight:700;color:\${opt.color}">\${opt.key}</div>
            <div style="font-size:10px;color:var(--t3)">\${opt.name}</div>
          </button>
        \`).join('')}
      </div>
      <div id="pz-feedback" style="margin-top:14px"></div>
    </div>
  \`;
}

function pzAnswer(chosen, btn){
  const item = PZ_ITEMS[pzIdx];
  const correct = chosen === item.answer;
  if(correct) pzScore++;
  
  document.querySelectorAll('.pz-opt').forEach(b => {b.disabled=true;b.style.cursor='default';b.style.opacity='0.5';});
  btn.style.opacity='1'; btn.style.borderColor = correct ? 'var(--green)' : 'var(--red)';
  btn.style.background = correct ? 'rgba(80,200,120,.1)' : 'rgba(224,82,82,.1)';
  
  if(!correct){
    document.querySelectorAll('.pz-opt').forEach(b => {
      if(b.dataset.ans === item.answer){
        b.style.opacity='1'; b.style.borderColor='var(--green)'; b.style.background='rgba(80,200,120,.1)';
      }
    });
  }
  
  const fb = document.getElementById('pz-feedback');
  if(fb){
    fb.innerHTML = \`
      <div style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1);margin-top:10px">
        <div style="font-size:13px;line-height:1.6">
          <strong style="color:\${correct ? 'var(--green)' : 'var(--red)'}">\${correct ? '✓ Točno!' : '✗ Netočno.'}</strong>
          <span style="color:var(--t2)"> \${item.explain}</span>
        </div>
        <button class="nb-btn primary" style="margin-top:10px" onclick="pzNext()">\${pzIdx < PZ_ITEMS.length - 1 ? 'Sljedeće →' : 'Završi'}</button>
      </div>
    \`;
  }
}

function pzNext(){ pzIdx++; renderPzExercise(); }
function pzReset(){ pzIdx=0; pzScore=0; const r=document.getElementById('pz-result'),c=document.getElementById('pz-exercise'); if(r)r.style.display='none'; if(c)c.style.display=''; renderPzExercise(); }

function renderPzResult(){
  const cont = document.getElementById('pz-exercise'), res = document.getElementById('pz-result');
  if(!cont || !res) return;
  cont.style.display='none'; res.style.display='block';
  const pct = Math.round((pzScore/PZ_ITEMS.length)*100);
  let msg, color, emoji;
  if(pct===100){emoji='🏆';msg='Savršeno! Padeži su ti potpuno jasni.';color='var(--gold)';}
  else if(pct>=75){emoji='🎯';msg='Odlično! Solidan temelj.';color='var(--green)';}
  else if(pct>=50){emoji='📖';msg='Dobro, ali vježbaj s declinerom iznad.';color='var(--blue)';}
  else{emoji='⚠';msg='Ponovi scene-cards svakog padeža + pitanja.';color='var(--red)';}
  res.innerHTML = \`
    <div style="padding:24px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);text-align:center">
      <div style="font-size:48px;margin-bottom:8px">\${emoji}</div>
      <div style="font-family:var(--display);font-size:26px;font-weight:700;color:\${color};margin-bottom:8px">\${pzScore} / \${PZ_ITEMS.length} · \${pct}%</div>
      <div style="font-size:14px;color:var(--t2);margin-bottom:16px">\${msg}</div>
      <button class="nb-btn primary" onclick="pzReset()">🔄 Ponovi vježbu</button>
    </div>
  \`;
}

if(typeof document !== 'undefined'){
  document.addEventListener('DOMContentLoaded', function(){ setTimeout(renderPzExercise, 300); });
  if(document.readyState !== 'loading'){ setTimeout(renderPzExercise, 300); }
}


/* ═══════════════════════════════════
   TAB 3 · KONJUGACIJSKI QUIZ
═══════════════════════════════════ */

const KZ_ITEMS = [
  {form:'čitam', base:'čitati', answer:'prezent 1. l. jd.', explain:'"Čitam" — prezent, 1. lice jednine. Tvorba: osnova "čit-" + nastavak "-am".'},
  {form:'napisao sam', base:'napisati', answer:'perfekt 1. l. jd. m.r.', explain:'"Napisao sam" — perfekt, 1. l. jd. (m.r.). Tvorba: prezent "biti" + glagolski pridjev radni.'},
  {form:'pročitat ću', base:'pročitati', answer:'futur I 1. l. jd.', explain:'"Pročitat ću" — futur I, 1. l. jd. Tvorba: infinitiv bez -i + nenaglašeni "htjeti" (ću).'},
  {form:'čitao bih', base:'čitati', answer:'kondicional I 1. l. jd. m.r.', explain:'"Čitao bih" — kondicional I, 1. l. jd. (m.r.). Tvorba: aorist pomoćnog glagola "biti" (bih) + pridjev radni.'},
  {form:'čitaj!', base:'čitati', answer:'imperativ 2. l. jd.', explain:'"Čitaj!" — imperativ, 2. l. jd. Zapovijed upućena sugovorniku.'},
  {form:'budem čitao', base:'čitati', answer:'futur II 1. l. jd. m.r.', explain:'"Budem čitao" — futur II, 1. l. jd. (m.r.). Tvorba: prezent svršenog "biti" (budem) + pridjev radni. Koristi se u zavisnim rečenicama.'},
];

let kzIdx = 0, kzScore = 0;
const KZ_OPTIONS = [
  'prezent 1. l. jd.', 'prezent 3. l. mn.',
  'perfekt 1. l. jd. m.r.', 'perfekt 3. l. jd. ž.r.',
  'aorist 1. l. jd.',
  'futur I 1. l. jd.', 'futur I 3. l. mn.',
  'futur II 1. l. jd. m.r.',
  'imperativ 2. l. jd.', 'imperativ 1. l. mn.',
  'kondicional I 1. l. jd. m.r.', 'kondicional II 1. l. jd. m.r.'
];

function renderKzExercise(){
  const cont = document.getElementById('kz-exercise');
  if(!cont) return;
  if(kzIdx >= KZ_ITEMS.length){ renderKzResult(); return; }
  
  const item = KZ_ITEMS[kzIdx];
  
  // Build 4 option choices: correct + 3 distractors
  const wrong = KZ_OPTIONS.filter(o => o !== item.answer);
  const shuffled = wrong.sort(() => Math.random() - 0.5).slice(0, 3);
  const options = [item.answer, ...shuffled].sort(() => Math.random() - 0.5);
  
  cont.innerHTML = \`
    <div style="padding:20px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <div style="font-family:var(--mono);font-size:11px;color:var(--t3);letter-spacing:1px">PITANJE \${kzIdx+1} / \${KZ_ITEMS.length}</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--gold)">✓ \${kzScore}</div>
      </div>
      <div style="text-align:center;margin:20px 0;padding:24px;background:var(--bg);border-radius:var(--r1)">
        <div style="font-family:var(--display);font-size:28px;font-weight:700;color:var(--gold);margin-bottom:4px">\${item.form}</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t3);letter-spacing:1px">osnova: \${item.base}</div>
      </div>
      <div style="font-family:var(--mono);font-size:11px;color:var(--t2);text-align:center;margin-bottom:14px;letter-spacing:1px">KOJI JE OBLIK?</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
        \${options.map(opt => \`
          <button class="kz-opt" data-ans="\${opt}" onclick="kzAnswer('\${opt}', this)" style="padding:12px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;transition:all .2s;text-align:left">
            \${opt}
          </button>
        \`).join('')}
      </div>
      <div id="kz-feedback" style="margin-top:14px"></div>
    </div>
  \`;
}

function kzAnswer(chosen, btn){
  const item = KZ_ITEMS[kzIdx];
  const correct = chosen === item.answer;
  if(correct) kzScore++;
  
  document.querySelectorAll('.kz-opt').forEach(b => {b.disabled=true;b.style.cursor='default';b.style.opacity='0.5';});
  btn.style.opacity='1'; btn.style.borderColor = correct ? 'var(--green)' : 'var(--red)';
  btn.style.background = correct ? 'rgba(80,200,120,.1)' : 'rgba(224,82,82,.1)';
  
  if(!correct){
    document.querySelectorAll('.kz-opt').forEach(b => {
      if(b.dataset.ans === item.answer){
        b.style.opacity='1'; b.style.borderColor='var(--green)'; b.style.background='rgba(80,200,120,.1)';
      }
    });
  }
  
  const fb = document.getElementById('kz-feedback');
  if(fb){
    fb.innerHTML = \`
      <div style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1);margin-top:10px">
        <div style="font-size:13px;line-height:1.6">
          <strong style="color:\${correct ? 'var(--green)' : 'var(--red)'}">\${correct ? '✓ Točno!' : '✗ Netočno.'}</strong>
          <span style="color:var(--t2)"> \${item.explain}</span>
        </div>
        <button class="nb-btn primary" style="margin-top:10px" onclick="kzNext()">\${kzIdx < KZ_ITEMS.length - 1 ? 'Sljedeće →' : 'Završi'}</button>
      </div>
    \`;
  }
}

function kzNext(){ kzIdx++; renderKzExercise(); }
function kzReset(){ kzIdx=0; kzScore=0; const r=document.getElementById('kz-result'),c=document.getElementById('kz-exercise'); if(r)r.style.display='none'; if(c)c.style.display=''; renderKzExercise(); }

function renderKzResult(){
  const cont = document.getElementById('kz-exercise'), res = document.getElementById('kz-result');
  if(!cont || !res) return;
  cont.style.display='none'; res.style.display='block';
  const pct = Math.round((kzScore/KZ_ITEMS.length)*100);
  let msg, color, emoji;
  if(pct===100){emoji='🏆';msg='Savršeno! Glagolski oblici su ti jasni.';color='var(--gold)';}
  else if(pct>=75){emoji='🎯';msg='Odlično! Manje greške — ponovi nepravilne.';color='var(--green)';}
  else if(pct>=50){emoji='📖';msg='Dobro, ali ponovi tablicu 7 vremena.';color='var(--blue)';}
  else{emoji='⚠';msg='Vrati se na tablicu vremena/načina — ovo je temelj.';color='var(--red)';}
  res.innerHTML = \`
    <div style="padding:24px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);text-align:center">
      <div style="font-size:48px;margin-bottom:8px">\${emoji}</div>
      <div style="font-family:var(--display);font-size:26px;font-weight:700;color:\${color};margin-bottom:8px">\${kzScore} / \${KZ_ITEMS.length} · \${pct}%</div>
      <div style="font-size:14px;color:var(--t2);margin-bottom:16px">\${msg}</div>
      <button class="nb-btn primary" onclick="kzReset()">🔄 Ponovi vježbu</button>
    </div>
  \`;
}

if(typeof document !== 'undefined'){
  document.addEventListener('DOMContentLoaded', function(){ setTimeout(renderKzExercise, 350); });
  if(document.readyState !== 'loading'){ setTimeout(renderKzExercise, 350); }
}


/* ═══════════════════════════════════
   TAB 5 · MORFO SCANNER · morfemska + gramatička analiza
═══════════════════════════════════ */


// LEXICON — frequent words for accurate analysis (fallback for heuristic)
const MS_VERB_LEXICON = {
  // PRESENT FORMS → infinitive
  'idem':'ići','ideš':'ići','ide':'ići','idemo':'ići','idete':'ići','idu':'ići',
  'mogu':'moći','možeš':'moći','može':'moći','možemo':'moći','možete':'moći',
  'jesam':'biti','jesi':'biti','jest':'biti','jesmo':'biti','jeste':'biti','jesu':'biti',
  'sam':'biti','si':'biti','je':'biti','smo':'biti','ste':'biti','su':'biti',
  'imam':'imati','imaš':'imati','ima':'imati','imamo':'imati','imate':'imati','imaju':'imati',
  'znam':'znati','znaš':'znati','zna':'znati','znamo':'znati','znate':'znati','znaju':'znati',
  'volim':'voljeti','voliš':'voljeti','voli':'voljeti','volimo':'voljeti','volite':'voljeti','vole':'voljeti',
  'dajem':'davati','daješ':'davati','daje':'davati','dam':'dati','daš':'dati','da':'dati',
  'pišem':'pisati','pišeš':'pisati','piše':'pisati','pišemo':'pisati','pišete':'pisati','pišu':'pisati',
  'čitam':'čitati','čitaš':'čitati','čita':'čitati','čitamo':'čitati','čitate':'čitati','čitaju':'čitati',
  'kažem':'kazati','kažeš':'kazati','kaže':'kazati','kažemo':'kazati','kažete':'kazati','kažu':'kazati',
  'velim':'veljeti','veliš':'veljeti','veli':'veljeti','velimo':'veljeti','velite':'veljeti','vele':'veljeti',
  'rekoh':'reći','reče':'reći','rekosmo':'reći','rekoste':'reći','rekoše':'reći',
};

// Frequent animate (living) nouns — for accurate A jd. m.r.
const DECL_ANIMATE = ['prijatelj','učitelj','učenik','student','profesor','liječnik','pisac','pjesnik','glumac','dječak','momak','čovjek','muškarac','sinovi','gospod','vladar','kralj','car','svetac','svećenik','voditelj','pjevač','glumac','vozač','radnik','voj','vojnik','konj','vuk','medvjed','tigar','lav','pas','mačka','zec','jelen','sokol','orao','golub','lavin','lisica','kuna','jazavac','bik','pijetao','crv','komarac','pauk','medo'];

function isAnimate(word){
  return DECL_ANIMATE.some(a => word.toLowerCase().includes(a));
}


const MS_NOUN_LEXICON = {
  // FREQUENT IRREGULAR FORMS → lemma
  'ljudi':'čovjek','djeca':'dijete','braća':'brat','psi':'pas','oči':'oko','uši':'uho',
  'gospoda':'gospodin','sinovi':'sin','očevi':'otac','životi':'život',
};

const MS_PRONOUNS = {
  'ja':{type:'osobna',person:1,number:'jd'},'ti':{type:'osobna',person:2,number:'jd'},
  'on':{type:'osobna',person:3,number:'jd',gender:'m'},'ona':{type:'osobna',person:3,number:'jd',gender:'ž'},
  'ono':{type:'osobna',person:3,number:'jd',gender:'sr'},
  'mi':{type:'osobna',person:1,number:'mn'},'vi':{type:'osobna',person:2,number:'mn'},
  'oni':{type:'osobna',person:3,number:'mn'},
  'se':{type:'povratna'},'sebe':{type:'povratna'},
  'moj':{type:'posvojna'},'tvoj':{type:'posvojna'},'naš':{type:'posvojna'},'vaš':{type:'posvojna'},
  'njegov':{type:'posvojna'},'njezin':{type:'posvojna'},'njihov':{type:'posvojna'},
  'svoj':{type:'povratno-posvojna'},
  'ovaj':{type:'pokazna'},'taj':{type:'pokazna'},'onaj':{type:'pokazna'},
  'ovo':{type:'pokazna'},'to':{type:'pokazna'},'ono':{type:'pokazna'},
  'tko':{type:'upitna/odnosna'},'što':{type:'upitna/odnosna'},'koji':{type:'upitna/odnosna'},
  'čiji':{type:'upitna/odnosna'},'kakav':{type:'upitna/odnosna'},
  'netko':{type:'neodređena'},'nešto':{type:'neodređena'},'neki':{type:'neodređena'},
  'svatko':{type:'neodređena'},'svako':{type:'neodređena'},'svi':{type:'neodređena'},
  'nitko':{type:'neodređena'},'ništa':{type:'neodređena'},
};

const MS_NUMERALS = {
  'jedan':{type:'glavni',value:1},'dva':{type:'glavni',value:2},'tri':{type:'glavni',value:3},
  'četiri':{type:'glavni',value:4},'pet':{type:'glavni',value:5},'šest':{type:'glavni',value:6},
  'sedam':{type:'glavni',value:7},'osam':{type:'glavni',value:8},'devet':{type:'glavni',value:9},
  'deset':{type:'glavni',value:10},'sto':{type:'glavni',value:100},'tisuću':{type:'glavni',value:1000},
  'prvi':{type:'redni',value:1},'drugi':{type:'redni',value:2},'treći':{type:'redni',value:3},
  'četvrti':{type:'redni',value:4},'peti':{type:'redni',value:5},'šesti':{type:'redni',value:6},
  'dvoje':{type:'zbirni',value:2},'troje':{type:'zbirni',value:3},'četvero':{type:'zbirni',value:4},
};

const MS_PARTICLES = ['ne','da','li','baš','evo','eto','eno','možda','neka','nek'];
const MS_INTERJECTIONS = ['ah','oh','uh','ej','hej','jao','ajme','mjau','vau','bum','bam','tras'];
const MS_PREPOSITIONS = ['u','na','o','po','pri','s','sa','za','iz','od','do','bez','kod','kraj','pokraj','preko','protiv','prema','k','ka','nasuprot','usprkos','zbog','radi','poslije','prije','iznad','ispod','iza','ispred','među','nad','pod','pred','kroz','niz','uz'];
const MS_CONJUNCTIONS = ['i','pa','te','ni','niti','ali','no','nego','već','ili','a','jer','da','dok','kad','kada','ako','iako','premda','što','čim','čime','dokle'];
const MS_ADVERBS = ['brzo','sporo','glasno','tiho','ovdje','ondje','gdje','kamo','sutra','jučer','danas','sada','tada','vrlo','jako','malo','mnogo','možda','sigurno','sretno','zato','stoga','također','ponekad'];

// ========== PREFIKS baza ==========
const MS_PREFIXES = [
  {p:'naj', meaning:'superlativ'},
  {p:'ne', meaning:'negacija'},
  {p:'protu', meaning:'nasuprot'},
  {p:'među', meaning:'između'},
  {p:'pred', meaning:'ispred'},
  {p:'raz', meaning:'razdvajanje / pojačavanje'},
  {p:'iz', meaning:'iznutra, dovršenje'},
  {p:'is', meaning:'iznutra (pred bezv.)'},
  {p:'uz', meaning:'prema gore, usput'},
  {p:'us', meaning:'uz + bezvučno'},
  {p:'od', meaning:'udaljavanje'},
  {p:'ot', meaning:'od + bezvučno'},
  {p:'pre', meaning:'ponavljanje / prekomjerno'},
  {p:'pri', meaning:'približavanje, blizina'},
  {p:'pro', meaning:'kroz, ispunjenje'},
  {p:'nad', meaning:'iznad'},
  {p:'nat', meaning:'nad + bezvučno'},
  {p:'pod', meaning:'ispod'},
  {p:'pot', meaning:'pod + bezvučno'},
  {p:'za', meaning:'početak, prostor iza'},
  {p:'do', meaning:'dolazak, dovršenje'},
  {p:'po', meaning:'dovršenje, nastavak'},
  {p:'u', meaning:'ulazak'},
  {p:'na', meaning:'početak / dovršenje'},
  {p:'o', meaning:'oko, obuhvat'},
  {p:'ob', meaning:'okolo, obuhvat'},
  {p:'s', meaning:'zajedno, dolje'},
  {p:'z', meaning:'s + zvučno'},
];

// ========== SUFIKSI baza (tvorbeni) ==========
const MS_NOUN_SUFFIXES = [
  {s:'ost', type:'imenica ž.r.', meaning:'apstraktna osobina (ljep-ost, dobr-ost)'},
  {s:'oća', type:'imenica ž.r.', meaning:'apstraktna osobina (čist-oća)'},
  {s:'stvo', type:'imenica sr.r.', meaning:'skupina / svojstvo (pjesn-ištvo, druš-tvo)'},
  {s:'ica', type:'imenica ž.r.', meaning:'osoba/mala stvar (učen-ica, knjiž-ica)'},
  {s:'telj', type:'imenica m.r.', meaning:'vršitelj radnje (uči-telj, pisa-telj)'},
  {s:'ač', type:'imenica m.r.', meaning:'vršitelj radnje (voz-ač, pjev-ač)'},
  {s:'ar', type:'imenica m.r.', meaning:'zanimanje (knjiž-ar, mlin-ar)'},
  {s:'nik', type:'imenica m.r.', meaning:'osoba (rad-nik, putnik)'},
  {s:'ica', type:'imenica ž.r.', meaning:'osoba ž.r. / umanjenice (učen-ica, kuć-ica)'},
  {s:'anje', type:'imenica sr.r. (glagolska)', meaning:'od glagola -ati (pis-anje, čit-anje)'},
  {s:'enje', type:'imenica sr.r. (glagolska)', meaning:'od glagola -iti/-eti (vođ-enje)'},
  {s:'onja', type:'imenica m.r.', meaning:'osobina (crn-onja, tvrd-oglavonja)'},
  {s:'lo', type:'imenica sr.r.', meaning:'sredstvo/rezultat (peri-lo, kup-alo)'},
];

const MS_ADJ_SUFFIXES = [
  {s:'an', type:'pridjev (neodr.)', meaning:'opisni (lijep-an? hlad-an)'},
  {s:'ni', type:'pridjev (određ.)', meaning:'opisni određeni (jutar-nji)'},
  {s:'ski', type:'pridjev', meaning:'pripadnost/odnos (škol-ski, grad-ski)'},
  {s:'čki', type:'pridjev', meaning:'pripadnost (junač-ki)'},
  {s:'ov', type:'pridjev posvojni', meaning:'pripadnost m.r. (oč-ev, brat-ov)'},
  {s:'ev', type:'pridjev posvojni', meaning:'pripadnost (otač-ev varianta)'},
  {s:'in', type:'pridjev posvojni', meaning:'pripadnost ž.r. (majč-in, Anin)'},
  {s:'ji', type:'pridjev posvojni', meaning:'pripadnost (pas-ji, božji)'},
];

const MS_VERB_SUFFIXES = [
  {s:'nuti', type:'glagol (II. vrsta, svršeni)', meaning:'trenutna radnja (klik-nuti)'},
  {s:'avati', type:'glagol (nesvršeni)', meaning:'ponavljanje (pis-avati, ud-arati)'},
  {s:'ivati', type:'glagol (nesvršeni)', meaning:'ponavljanje (propov-ijedati)'},
  {s:'ovati', type:'glagol', meaning:'radnja (rad-ovati, kup-ovati)'},
  {s:'jeti', type:'glagol', meaning:'stanje (vid-jeti, bol-jeti)'},
];

// ========== PADEŽNI NASTAVCI ==========
const MS_CASE_ENDINGS = {
  // e-vrsta ž.r.
  'e-vrsta': {
    'a': {padez:'N jd.', info:'nominativ jednine'},
    'e': {padez:'G jd. / N mn.', info:'genitiv jd. ili nominativ mn.'},
    'i': {padez:'D/L jd.', info:'dativ ili lokativ jednine'},
    'u': {padez:'A jd.', info:'akuzativ jednine'},
    'o': {padez:'V jd.', info:'vokativ jednine'},
    'om': {padez:'I jd.', info:'instrumental jednine'},
    'ama': {padez:'D/L/I mn.', info:'dativ/lokativ/instrumental množine'},
    'ima': {padez:'D/L/I mn.', info:'dativ/lokativ/instrumental množine'},
  },
  // a-vrsta m.r.
  'a-vrsta': {
    'a': {padez:'G/A jd. (živo)', info:'genitiv/akuzativ jednine (za živo)'},
    'u': {padez:'D/L jd.', info:'dativ ili lokativ jednine'},
    'e': {padez:'V jd. (palat.) / A mn.', info:'vokativ ili akuzativ množine'},
    'om': {padez:'I jd.', info:'instrumental jednine'},
    'em': {padez:'I jd. (palat.)', info:'instrumental jednine palatalna osnova'},
    'i': {padez:'N/V mn.', info:'nominativ ili vokativ množine'},
    'ima': {padez:'D/L/I mn.', info:'dativ/lokativ/instrumental množine'},
  }
};

// ========== GLAGOLSKI NASTAVCI ==========
const MS_VERB_ENDINGS = [
  {end:'ati', form:'infinitiv'},
  {end:'iti', form:'infinitiv'},
  {end:'eti', form:'infinitiv'},
  {end:'jeti', form:'infinitiv'},
  {end:'nuti', form:'infinitiv'},
  {end:'ći', form:'infinitiv'},
  // Prezent
  {end:'am', form:'prezent 1. l. jd.'},
  {end:'aš', form:'prezent 2. l. jd.'},
  {end:'a', form:'prezent 3. l. jd.'},
  {end:'amo', form:'prezent 1. l. mn.'},
  {end:'ate', form:'prezent 2. l. mn.'},
  {end:'aju', form:'prezent 3. l. mn.'},
  {end:'im', form:'prezent 1. l. jd.'},
  {end:'iš', form:'prezent 2. l. jd.'},
  {end:'imo', form:'prezent 1. l. mn.'},
  {end:'ite', form:'prezent 2. l. mn.'},
  {end:'e', form:'prezent 3. l. jd. (tip -em) ili imperativ'},
  {end:'em', form:'prezent 1. l. jd.'},
  {end:'eš', form:'prezent 2. l. jd.'},
  {end:'emo', form:'prezent 1. l. mn.'},
  {end:'ete', form:'prezent 2. l. mn.'},
  {end:'u', form:'prezent 3. l. mn.'},
  // Glagolski pridjev radni
  {end:'ao', form:'glag. pridjev radni m.r. jd.'},
  {end:'la', form:'glag. pridjev radni ž.r. jd.'},
  {end:'lo', form:'glag. pridjev radni sr.r. jd.'},
  {end:'li', form:'glag. pridjev radni m.r. mn.'},
  {end:'le', form:'glag. pridjev radni ž.r. mn.'},
  {end:'io', form:'glag. pridjev radni m.r. jd. (od -ieti)'},
  // Imperativ
  {end:'ajte', form:'imperativ 2. l. mn.'},
  {end:'aj', form:'imperativ 2. l. jd.'},
  {end:'ajmo', form:'imperativ 1. l. mn.'},
  {end:'ite', form:'imperativ 2. l. mn.'},
  {end:'i', form:'imperativ 2. l. jd.'},
];

// ========== ANALIZA ==========
function msAnalyzeWord(word){
  const w = word.toLowerCase().trim();
  const result = {
    word: w,
    prefix: [],
    root: w,
    suffix: [],
    ending: '',
    wordClass: null,
    categories: {},
    lemma: w,
    note: '',
    confidence: 'medium'
  };
  
  // STEP 0: LEXICON CHECKS (highest confidence)
  
  // Check pronouns
  if(MS_PRONOUNS[w]){
    result.wordClass = 'zamjenica';
    result.categories.type = MS_PRONOUNS[w].type;
    if(MS_PRONOUNS[w].person) result.categories.person = MS_PRONOUNS[w].person + '. lice';
    if(MS_PRONOUNS[w].number) result.categories.number = MS_PRONOUNS[w].number;
    if(MS_PRONOUNS[w].gender) result.categories.gender = MS_PRONOUNS[w].gender + '.r.';
    result.lemma = w;
    result.root = w;
    result.confidence = 'high';
    return result;
  }
  
  // Check numerals
  if(MS_NUMERALS[w]){
    result.wordClass = 'broj';
    result.categories.type = MS_NUMERALS[w].type + ' broj';
    result.categories.value = MS_NUMERALS[w].value;
    result.lemma = w;
    result.root = w;
    result.confidence = 'high';
    return result;
  }
  
  // Check particles
  if(MS_PARTICLES.includes(w)){
    result.wordClass = 'čestica';
    result.lemma = w;
    result.root = w;
    result.confidence = 'high';
    if(w === 'ne') result.categories.type = 'niječna';
    else if(w === 'da') result.categories.type = 'potvrdna (ovisno o kontekstu)';
    else if(w === 'li') result.categories.type = 'upitna';
    else if(['evo','eto','eno'].includes(w)) result.categories.type = 'pokazna';
    else if(['možda','neka','nek'].includes(w)) result.categories.type = 'modalna/poticajna';
    return result;
  }
  
  // Check interjections
  if(MS_INTERJECTIONS.includes(w)){
    result.wordClass = 'uzvik';
    result.lemma = w;
    result.root = w;
    result.confidence = 'high';
    return result;
  }
  
  // Check prepositions
  if(MS_PREPOSITIONS.includes(w)){
    result.wordClass = 'prijedlog';
    result.lemma = w;
    result.root = w;
    result.confidence = 'high';
    return result;
  }
  
  // Check conjunctions
  if(MS_CONJUNCTIONS.includes(w)){
    result.wordClass = 'veznik';
    result.lemma = w;
    result.root = w;
    result.confidence = 'high';
    if(['i','pa','te','ni','niti','ali','no','nego','već','ili','a'].includes(w)) result.categories.type = 'nezavisni';
    else result.categories.type = 'zavisni';
    return result;
  }
  
  // Check adverbs (whitelist)
  if(MS_ADVERBS.includes(w)){
    result.wordClass = 'prilog';
    result.lemma = w;
    result.root = w;
    result.confidence = 'high';
    return result;
  }
  
  // Check verb lexicon
  if(MS_VERB_LEXICON[w]){
    result.wordClass = 'glagol';
    result.lemma = MS_VERB_LEXICON[w];
    result.root = MS_VERB_LEXICON[w].slice(0, -2); // remove -ti
    result.confidence = 'high';
    // Try to determine form heuristically
    if(/m$/.test(w)) result.categories.form = 'prezent 1. l. jd.';
    else if(/š$/.test(w)) result.categories.form = 'prezent 2. l. jd.';
    else if(/mo$/.test(w)) result.categories.form = 'prezent 1. l. mn.';
    else if(/te$/.test(w)) result.categories.form = 'prezent 2. l. mn.';
    return result;
  }
  
  // Check noun lexicon (irregular)
  if(MS_NOUN_LEXICON[w]){
    result.wordClass = 'imenica';
    result.lemma = MS_NOUN_LEXICON[w];
    result.note = 'Nepravilna množina (lemma: ' + MS_NOUN_LEXICON[w] + ').';
    result.confidence = 'high';
    return result;
  }
  
  // STEP 1: Heuristic analysis (existing logic)
  let remaining = w;
  
  // Detect prefixes (longest match first)
  const sortedPrefixes = [...MS_PREFIXES].sort((a, b) => b.p.length - a.p.length);
  for(let p of sortedPrefixes){
    if(remaining.startsWith(p.p) && remaining.length > p.p.length + 2){
      result.prefix.push(p);
      remaining = remaining.slice(p.p.length);
      // Try second prefix
      for(let p2 of sortedPrefixes){
        if(remaining.startsWith(p2.p) && remaining.length > p2.p.length + 2){
          result.prefix.push(p2);
          remaining = remaining.slice(p2.p.length);
          break;
        }
      }
      break;
    }
  }
  
  // Try verb endings (longest first)
  const sortedVerbEndings = [...MS_VERB_ENDINGS].sort((a, b) => b.end.length - a.end.length);
  let verbMatch = null;
  for(let ve of sortedVerbEndings){
    if(remaining.endsWith(ve.end) && remaining.length > ve.end.length + 1){
      verbMatch = ve;
      break;
    }
  }
  
  // Try suffixes
  let foundSuffix = null;
  let suffixType = null;
  
  // Noun suffixes
  const sortedNounSfx = [...MS_NOUN_SUFFIXES].sort((a, b) => b.s.length - a.s.length);
  for(let sf of sortedNounSfx){
    if(remaining.includes(sf.s)){
      const sfIdx = remaining.lastIndexOf(sf.s);
      if(sfIdx > 0 && sfIdx <= remaining.length - sf.s.length){
        const afterSf = remaining.slice(sfIdx + sf.s.length);
        if(afterSf.length <= 3 && /^[aeiouima]*$/.test(afterSf)){
          foundSuffix = sf;
          suffixType = 'noun';
          result.root = remaining.slice(0, sfIdx);
          result.suffix.push(sf);
          result.ending = afterSf;
          break;
        }
      }
    }
  }
  
  // Adjective suffixes
  if(!foundSuffix){
    const sortedAdjSfx = [...MS_ADJ_SUFFIXES].sort((a, b) => b.s.length - a.s.length);
    for(let sf of sortedAdjSfx){
      if(remaining.includes(sf.s)){
        const sfIdx = remaining.lastIndexOf(sf.s);
        if(sfIdx > 0 && sfIdx <= remaining.length - sf.s.length){
          const afterSf = remaining.slice(sfIdx + sf.s.length);
          if(afterSf.length <= 3 && /^[aeiouh]*$/.test(afterSf)){
            foundSuffix = sf;
            suffixType = 'adj';
            result.root = remaining.slice(0, sfIdx);
            result.suffix.push(sf);
            result.ending = afterSf;
            break;
          }
        }
      }
    }
  }
  
  // Classify
  if(verbMatch){
    result.wordClass = 'glagol';
    result.categories.form = verbMatch.form;
    let stem = remaining.slice(0, remaining.length - verbMatch.end.length);
    
    if(verbMatch.form.startsWith('infinitiv')){
      result.lemma = remaining;
    } else if(verbMatch.form.startsWith('prezent')){
      if(verbMatch.end.match(/^a[mš]?$|^am$|^aš$|^amo$|^ate$|^aju$/)) result.lemma = stem + 'ati';
      else if(verbMatch.end.match(/^i[mš]?$|^im$|^iš$|^imo$|^ite$/)) result.lemma = stem + 'iti';
      else if(verbMatch.end.match(/^e[mš]?$|^em$|^eš$|^emo$|^ete$|^u$/)) result.lemma = stem + 'ti';
    } else if(verbMatch.form.startsWith('glag. pridjev radni')){
      if(verbMatch.end === 'ao' || verbMatch.end === 'io') result.lemma = stem + (verbMatch.end === 'ao' ? 'ati' : 'iti');
      else if(['la','lo','li','le'].includes(verbMatch.end)) result.lemma = stem + 'ti';
    } else if(verbMatch.form.startsWith('imperativ')){
      if(['aj','ajte','ajmo'].includes(verbMatch.end)) result.lemma = stem + 'ati';
      else if(['i','ite'].includes(verbMatch.end)) result.lemma = stem + 'iti';
    }
    
    const hasPerfectivePrefix = result.prefix.some(p => ['na','pro','po','do','u','iz','is','pre','za','raz'].includes(p.p));
    result.categories.vid = hasPerfectivePrefix ? 'svršeni' : 'nesvršeni';
  } else if(foundSuffix && suffixType === 'noun'){
    result.wordClass = 'imenica';
    result.categories.type = foundSuffix.type;
    const e = result.ending;
    const declType = foundSuffix.type.includes('ž.r.') ? 'e-vrsta' : 'a-vrsta';
    if(MS_CASE_ENDINGS[declType] && MS_CASE_ENDINGS[declType][e]){
      result.categories.padezAndBroj = MS_CASE_ENDINGS[declType][e].padez;
    } else if(e === ''){
      result.categories.padezAndBroj = 'N/V jd.';
    }
    if(foundSuffix.type.includes('ž.r.')) result.lemma = result.root + foundSuffix.s + 'a';
    else if(foundSuffix.type.includes('sr.r.')) result.lemma = result.root + foundSuffix.s + 'o';
    else result.lemma = result.root + foundSuffix.s;
  } else if(foundSuffix && suffixType === 'adj'){
    result.wordClass = 'pridjev';
    result.categories.type = foundSuffix.type;
    result.lemma = result.root + foundSuffix.s;
    if(result.prefix.some(p => p.p === 'naj')) result.categories.stupanj = 'superlativ';
    else if(w.endsWith('ji') || w.endsWith('iji')) result.categories.stupanj = 'komparativ';
    else result.categories.stupanj = 'pozitiv';
  } else {
    // Heuristic noun fallback
    if(/[aeiou]$/.test(w) || /[aeiou]ma$/.test(w) || /ima$/.test(w)){
      result.wordClass = 'imenica (moguća)';
      const declType = w.endsWith('a') ? 'e-vrsta' : 'a-vrsta';
      result.categories.declType = declType;
      result.confidence = 'low';
      if(MS_CASE_ENDINGS[declType]){
        for(let end in MS_CASE_ENDINGS[declType]){
          if(w.endsWith(end) && (w.length > end.length)){
            result.categories.padezAndBroj = MS_CASE_ENDINGS[declType][end].padez;
            result.ending = end;
            result.root = w.slice(0, w.length - end.length);
            break;
          }
        }
      }
      if(declType === 'e-vrsta') result.lemma = result.root + 'a';
      else result.lemma = result.root;
    } else {
      result.wordClass = '?';
      result.note = 'Teško prepoznati vrstu — provjeri svojim znanjem.';
      result.confidence = 'low';
    }
  }
  
  if(!result.root || result.root.length < 2){
    let fallback = w;
    for(let p of result.prefix){
      fallback = fallback.slice(p.p.length);
    }
    result.root = fallback;
  }
  
  return result;
}

function morfoAnalyze(){
  const input = document.getElementById('ms-input');
  const out = document.getElementById('ms-results');
  if(!input || !out) return;
  
  const word = input.value.trim().toLowerCase();
  if(!word){ out.innerHTML = ''; return; }
  
  if(!/^[a-zčćđšž\\s]+$/.test(word)){
    out.innerHTML = '<div class="box-warn"><div class="bw-body"><div class="bw-txt">Samo hrv. slova (a-ž), bez razmaka ili brojeva.</div></div></div>';
    return;
  }
  
  // Multi-word support — analyze each word separately
  const words = word.split(/\\s+/).filter(w => w.length > 0);
  
  if(words.length > 1){
    // Multi-word — show each
    let allHtml = '<div style="margin-bottom:14px;font-family:var(--mono);font-size:11px;color:var(--t2);text-align:center">📝 ANALIZA RAZINA: ' + words.length + ' riječi</div>';
    words.forEach((w, idx) => {
      const a = msAnalyzeWord(w);
      allHtml += renderMsResult(a, idx === 0);
      if(idx < words.length - 1){
        allHtml += '<div style="height:24px"></div>';
      }
    });
    out.innerHTML = allHtml;
  } else {
    const a = msAnalyzeWord(words[0]);
    out.innerHTML = renderMsResult(a, true);
  }
  
  // Save to history
  try {
    const hist = JSON.parse(localStorage.getItem('mt.hrv.h23.scanner_hist')||'[]');
    // Only save valid words (no special chars)
    if(/^[a-zčćđšžA-ZČĆĐŠŽ\\s]+$/.test(word) && word.length < 50){
      hist.push({word, date: new Date().toISOString()});
      localStorage.setItem('mt.hrv.h23.scanner_hist', JSON.stringify(hist.slice(-20)));
    }
  } catch(e){}
}

function renderMsResult(a, showHeader){
  const word = a.word;
  
  // Build morpheme display
  let morphBuild = '';
  a.prefix.forEach(p => {
    morphBuild += \`<span style="display:inline-block;padding:6px 12px;background:rgba(74,144,217,.15);border:1.5px solid var(--blue);border-radius:var(--r1);color:var(--blue);font-weight:700;font-family:var(--mono);margin:2px">\${p.p}-</span>\`;
  });
  morphBuild += \`<span style="display:inline-block;padding:6px 12px;background:rgba(233,180,70,.15);border:1.5px solid var(--gold);border-radius:var(--r1);color:var(--gold);font-weight:700;font-family:var(--mono);margin:2px">\${a.root}</span>\`;
  a.suffix.forEach(sf => {
    morphBuild += \`<span style="display:inline-block;padding:6px 12px;background:rgba(176,107,33,.15);border:1.5px solid var(--bronze);border-radius:var(--r1);color:var(--bronze);font-weight:700;font-family:var(--mono);margin:2px">-\${sf.s}-</span>\`;
  });
  if(a.ending){
    morphBuild += \`<span style="display:inline-block;padding:6px 12px;background:rgba(224,82,82,.15);border:1.5px solid var(--red);border-radius:var(--r1);color:var(--red);font-weight:700;font-family:var(--mono);margin:2px">-\${a.ending}</span>\`;
  }
  
  // Classification summary  
  let classSummary = '';
  if(a.wordClass){
    classSummary = a.wordClass;
    if(a.categories.type) classSummary += \` · \${a.categories.type}\`;
    if(a.categories.declType) classSummary += \` · \${a.categories.declType}\`;
    if(a.categories.stupanj) classSummary += \` · \${a.categories.stupanj}\`;
    if(a.categories.form) classSummary += \` · \${a.categories.form}\`;
    if(a.categories.vid) classSummary += \` · \${a.categories.vid} vid\`;
    if(a.categories.padezAndBroj) classSummary += \` · \${a.categories.padezAndBroj}\`;
    if(a.categories.person) classSummary += \` · \${a.categories.person}\`;
    if(a.categories.number) classSummary += \` · \${a.categories.number}\`;
    if(a.categories.gender) classSummary += \` · \${a.categories.gender}\`;
  }
  
  // Confidence badge
  const confColors = {high: 'var(--green)', medium: 'var(--gold)', low: 'var(--red)'};
  const confLabels = {high: '🟢 VISOKA', medium: '🟡 SREDNJA', low: '🔴 NISKA'};
  const confColor = confColors[a.confidence] || 'var(--t3)';
  const confLabel = confLabels[a.confidence] || a.confidence;
  
  return \`
    <!-- HEADER -->
    <div style="padding:18px;background:linear-gradient(135deg,rgba(233,180,70,.08),transparent);border:1px solid rgba(233,180,70,.3);border-radius:var(--r2);margin-bottom:16px">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px">
        <div>
          <div style="font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:2px">MORFEMSKA ANALIZA</div>
          <div style="font-family:var(--display);font-size:32px;font-weight:700;color:var(--gold);margin-top:4px">\${word}</div>
        </div>
        <div style="text-align:right">
          <div style="font-family:var(--mono);font-size:11px;color:var(--t2)">\${classSummary || '—'}</div>
          <div style="font-family:var(--mono);font-size:9px;color:\${confColor};margin-top:4px;letter-spacing:1px">SIGURNOST: \${confLabel}</div>
        </div>
      </div>
    </div>

    <!-- MORPHEMES -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">🧩 Morfemska struktura</div><div class="sec-line"></div></div>
    <div style="padding:24px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1);margin:12px 0;text-align:center">
      <div style="display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:4px;margin-bottom:14px">\${morphBuild}</div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;font-family:var(--mono);font-size:10px">
        \${a.prefix.length > 0 ? '<span style="padding:3px 8px;background:rgba(74,144,217,.1);color:var(--blue);border-radius:12px">prefiks</span>' : ''}
        <span style="padding:3px 8px;background:rgba(233,180,70,.1);color:var(--gold);border-radius:12px">korijen</span>
        \${a.suffix.length > 0 ? '<span style="padding:3px 8px;background:rgba(176,107,33,.1);color:var(--bronze);border-radius:12px">sufiks</span>' : ''}
        \${a.ending ? '<span style="padding:3px 8px;background:rgba(224,82,82,.1);color:var(--red);border-radius:12px">nastavak</span>' : ''}
      </div>
    </div>

    <!-- CLASSIFICATION TABLE -->
    <div class="sec-hdr" style="margin-top:20px"><div class="sec-line"></div><div class="sec-badge">📋 Analiza</div><div class="sec-line"></div></div>
    <div class="table-wrap" style="overflow-x:auto;margin:12px 0">
      <table style="width:100%;border-collapse:collapse;font-family:var(--mono);font-size:12px">
        <tbody>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3);width:40%">Vrsta riječi</td><td style="padding:10px;color:var(--t1);font-weight:700">\${a.wordClass || '—'}</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Osnovni oblik (lema)</td><td style="padding:10px;color:var(--gold);font-weight:700">\${a.lemma}</td></tr>
          \${a.categories.form ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Oblik glagola</td><td style="padding:10px;color:var(--t1)">\${a.categories.form}</td></tr>\` : ''}
          \${a.categories.vid ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Glagolski vid</td><td style="padding:10px;color:var(--t1)">\${a.categories.vid}</td></tr>\` : ''}
          \${a.categories.type ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Tip (podvrsta)</td><td style="padding:10px;color:var(--t1)">\${a.categories.type}</td></tr>\` : ''}
          \${a.categories.declType ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Deklinacijska vrsta</td><td style="padding:10px;color:var(--t1)">\${a.categories.declType}</td></tr>\` : ''}
          \${a.categories.padezAndBroj ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Padež / broj</td><td style="padding:10px;color:var(--t1);font-weight:700">\${a.categories.padezAndBroj}</td></tr>\` : ''}
          \${a.categories.person ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Lice / broj</td><td style="padding:10px;color:var(--t1)">\${a.categories.person}\${a.categories.number ? ' · ' + a.categories.number : ''}</td></tr>\` : ''}
          \${a.categories.gender ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Rod</td><td style="padding:10px;color:var(--t1)">\${a.categories.gender}</td></tr>\` : ''}
          \${a.categories.stupanj ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Stupanj</td><td style="padding:10px;color:var(--t1)">\${a.categories.stupanj}</td></tr>\` : ''}
          \${a.categories.value ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Vrijednost</td><td style="padding:10px;color:var(--t1)">\${a.categories.value}</td></tr>\` : ''}
          <tr><td style="padding:10px;color:var(--t3)">Korijen</td><td style="padding:10px;color:var(--t1);font-weight:700">\${a.root}</td></tr>
        </tbody>
      </table>
    </div>

    \${a.prefix.length > 0 || a.suffix.length > 0 ? \`
      <div class="sec-hdr" style="margin-top:20px"><div class="sec-line"></div><div class="sec-badge">🏗 Tvorbena analiza</div><div class="sec-line"></div></div>
      <div style="margin:12px 0">
        \${a.prefix.map(p => \`
          <div style="padding:12px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--blue);border-radius:var(--r1);margin-bottom:8px">
            <div style="display:flex;justify-content:space-between;gap:10px;align-items:start">
              <div>
                <div style="font-family:var(--mono);font-size:10px;color:var(--blue);letter-spacing:1px;margin-bottom:4px">PREFIKS</div>
                <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:16px">\${p.p}-</div>
                <div style="font-size:12px;color:var(--t2);margin-top:4px">\${p.meaning}</div>
              </div>
            </div>
          </div>
        \`).join('')}
        \${a.suffix.map(sf => \`
          <div style="padding:12px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--bronze);border-radius:var(--r1);margin-bottom:8px">
            <div style="display:flex;justify-content:space-between;gap:10px;align-items:start">
              <div>
                <div style="font-family:var(--mono);font-size:10px;color:var(--bronze);letter-spacing:1px;margin-bottom:4px">SUFIKS</div>
                <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:16px">-\${sf.s}</div>
                <div style="font-size:12px;color:var(--t2);margin-top:4px">\${sf.meaning}</div>
              </div>
            </div>
          </div>
        \`).join('')}
      </div>
    \` : ''}

    \${a.note ? \`
      <div class="box-warn" style="margin:12px 0"><div class="bw-body"><div class="bw-ttl" style="color:var(--gold)">💡 Napomena</div><div class="bw-txt">\${a.note}</div></div></div>
    \` : ''}

    \${a.confidence === 'low' ? \`<div style="font-family:var(--mono);font-size:10px;color:var(--red);text-align:center;margin-top:8px">⚠ Niska sigurnost — Scanner koristi heuristiku, provjeri svojim znanjem</div>\` : ''}
  \`;
}

function msExample(word){
  const input = document.getElementById('ms-input');
  if(input){
    input.value = word;
    morfoAnalyze();
    input.scrollIntoView({behavior:'smooth', block:'center'});
  }
}



function msShowHistory(){
  const div = document.getElementById('ms-history');
  if(!div) return;
  if(div.style.display !== 'none' && div.innerHTML !== ''){
    div.style.display = 'none';
    return;
  }
  try {
    const hist = JSON.parse(localStorage.getItem('mt.hrv.h23.scanner_hist')||'[]');
    if(hist.length === 0){
      div.innerHTML = '<span style="color:var(--t3)">Još nema analiziranih riječi.</span>';
    } else {
      div.innerHTML = '<div style="margin-bottom:8px;color:var(--t3);letter-spacing:1px">ZADNJIH ' + hist.length + ' (klikni za ponovnu analizu):</div>' +
        hist.slice().reverse().map(h => {
        const safeWord = String(h.word||'').replace(/['"\\\\<>&]/g, c => ({"'":'\\\\\\'',
'"':'&quot;','\\\\':'\\\\\\\\','<':'&lt;','>':'&gt;','&':'&amp;'}[c]||c));
        const displayWord = String(h.word||'').replace(/[<>&]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;'}[c]));
        return \`<button class="nb-btn" style="padding:4px 8px;font-size:11px;margin:2px" onclick="msExample('\${safeWord}')">\${displayWord}</button>\`;
      }).join('');
    }
    div.style.display = 'block';
  } catch(e){
    div.innerHTML = '<span style="color:var(--t3)">Greška u učitavanju.</span>';
    div.style.display = 'block';
  }
}

function msClear(){
  const input = document.getElementById('ms-input');
  const out = document.getElementById('ms-results');
  const hist = document.getElementById('ms-history');
  if(input) input.value = '';
  if(out) out.innerHTML = '';
  if(hist){ hist.style.display = 'none'; hist.innerHTML = ''; }
  input?.focus();
}

// === DECLINER UPGRADES: COPY RESULT FUNCTION ===
function declineCopyTable(){
  const tbl = document.querySelector('#decl-results table');
  if(!tbl) return;
  
  const rows = Array.from(tbl.querySelectorAll('tr'));
  let csv = rows.map(r => 
    Array.from(r.querySelectorAll('th, td'))
      .map(c => c.textContent.trim())
      .join('\\t')
  ).join('\\n');
  
  navigator.clipboard.writeText(csv).then(() => {
    const btn = document.getElementById('decl-copy-btn');
    if(btn){
      const orig = btn.textContent;
      btn.textContent = '✓ Kopirano!';
      btn.style.background = 'var(--green)';
      btn.style.color = '#0F0605';
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.style.color = '';
      }, 1500);
    }
  }).catch(() => alert('Greška pri kopiranju.'));
}

// === SCANNER COPY FUNCTION ===
function msCopyResult(){
  const out = document.getElementById('ms-results');
  if(!out) return;
  const text = out.innerText.trim();
  if(!text) return;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('ms-copy-btn');
    if(btn){
      const orig = btn.innerHTML;
      btn.innerHTML = '✓ Kopirano';
      setTimeout(() => btn.innerHTML = orig, 1500);
    }
  });
}



function declHistory(){
  const div = document.getElementById('decl-history');
  if(!div) return;
  if(div.style.display !== 'none' && div.innerHTML !== ''){
    div.style.display = 'none';
    return;
  }
  try {
    const hist = JSON.parse(localStorage.getItem('mt.hrv.h23.decl_hist')||'[]');
    if(hist.length === 0){
      div.innerHTML = '<span style="color:var(--t3)">Još nema sklanjanih riječi.</span>';
    } else {
      div.innerHTML = '<div style="margin-bottom:8px;color:var(--t3);letter-spacing:1px">ZADNJIH ' + hist.length + ':</div>' +
        hist.slice().reverse().map(h => {
        const safeWord = String(h.word||'').replace(/['"\\\\<>&]/g, c => ({"'":'\\\\\\'',
'"':'&quot;','\\\\':'\\\\\\\\','<':'&lt;','>':'&gt;','&':'&amp;'}[c]||c));
        const displayWord = String(h.word||'').replace(/[<>&]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;'}[c]));
        return \`<button class="nb-btn" style="padding:4px 8px;font-size:11px;margin:2px" onclick="declineExample('\${safeWord}')">\${displayWord}</button>\`;
      }).join('');
    }
    div.style.display = 'block';
  } catch(e){}
}

function declClear(){
  const input = document.getElementById('decl-input');
  const out = document.getElementById('decl-results');
  const hist = document.getElementById('decl-history');
  if(input) input.value = '';
  if(out) out.innerHTML = '';
  if(hist){ hist.style.display = 'none'; hist.innerHTML = ''; }
  input?.focus();
}



// ═══════════════════════════════════
// RANDOM WORD — surprise me feature
// ═══════════════════════════════════
const RANDOM_SCANNER_WORDS = [
  'nepredvidljivosti','najmoćniji','prijateljica','knjižarstvo','čitateljica',
  'nepismenima','učiteljica','upoznavati','pročitanima','razgovaraju',
  'postojanost','opisivanje','ozdravlje','razumijevanje','najljepše',
  'protunapadom','međurazinski','nadmašiti','potpomognuti','predviđanju',
  'iskreno','iako','protiv','vrlo','preko','čovjek','dijete','kost',
  'vrijeme','volim','imam','idu','jedan','peti','dvoje','svoj','ovaj','netko'
];

const RANDOM_DECLINER_WORDS = [
  'stol','knjiga','prijatelj','učenica','grad','more','selo','noć','riječ',
  'pjesma','sestra','učitelj','dječak','majka','brat','sin','kuća','ime',
  'jaje','dan','put','pas','čovjek','dijete','oko','uho','noga','ruka',
  'kost','ljubav','stvar','tata','sokol','zec','stvarnost','radost'
];

function msRandom(){
  const w = RANDOM_SCANNER_WORDS[Math.floor(Math.random() * RANDOM_SCANNER_WORDS.length)];
  msExample(w);
}

function declRandom(){
  const w = RANDOM_DECLINER_WORDS[Math.floor(Math.random() * RANDOM_DECLINER_WORDS.length)];
  declineExample(w);
}



// ═══════════════════════════════════
// TAB 1 · KLIK-IDENTIFIKACIJA REČENIČNIH ČLANOVA
// ═══════════════════════════════════

const RC_OPTIONS = [
  {key:'sinonimi', short:'SIN', label:'Sinonimi', color:'var(--green)'},
  {key:'antonimi', short:'ANT', label:'Antonimi', color:'var(--red)'},
  {key:'homonimi', short:'HOM', label:'Homonimi', color:'var(--blue)'},
  {key:'paronimi', short:'PAR', label:'Paronimi', color:'var(--bronze)'},
  {key:'hiperonim', short:'HIP', label:'Hiperonim', color:'#9b59b6'},
];

const RC_SENTENCES = [
  // EASY (8) — clear cases
  {tokens:['kuća','-','dom'], targetIdx:1, correct:'sinonimi', explanation:'Sinonimi (bliskoznačnice) — različite riječi sa istim/sličnim značenjem. Oboje označavaju mjesto stanovanja (dom ima emocionalnu konotaciju).', diff:'easy'},
  {tokens:['dobar','×','loš'], targetIdx:1, correct:'antonimi', explanation:'Antonimi — graduelni tip. Postoji sredina (dobar – prosječan – loš). Stupnjevita suprotnost.', diff:'easy'},
  {tokens:['kosa','=','kosa'], targetIdx:1, correct:'homonimi', explanation:'Homonimi — isti oblik, RAZLIČITA značenja. Kosa (vlasi) i kosa (oruđe) imaju nepovezane etimologije.', diff:'easy'},
  {tokens:['lijep','=','krasan'], targetIdx:1, correct:'sinonimi', explanation:'Sinonimi (bliskoznačnice) — oboje označavaju estetsku ugodnost. „Krasan" je neznatno jača nijansa.', diff:'easy'},
  {tokens:['živ','×','mrtav'], targetIdx:1, correct:'antonimi', explanation:'Antonimi — komplementarni (binarni) tip. Apsolutna suprotnost bez sredine.', diff:'easy'},
  {tokens:['velik','×','sitan'], targetIdx:1, correct:'antonimi', explanation:'Antonimi — graduelni. Suprotnost po veličini, s nijansama (velik – srednji – sitan).', diff:'easy'},
  {tokens:['ruža','je','cvijet'], targetIdx:2, correct:'hiperonim', explanation:'Cvijet je HIPERONIM (nadređen pojam) za ružu. Ruža je hiponim. Ljiljan, tulipan, ruža = kohiponimi.', diff:'easy'},
  {tokens:['vozilo','→','auto'], targetIdx:0, correct:'hiperonim', explanation:'Vozilo je HIPERONIM (širi pojam) za auto, kamion, motocikl. Auto je njegov hiponim.', diff:'easy'},
  
  // MEDIUM (10) — needs careful thought
  {tokens:['efektan','≠','efektivan'], targetIdx:1, correct:'paronimi', explanation:'Paronimi — sličan oblik, RAZLIČITO značenje. Efektan = dojmljiv. Efektivan = djelotvoran. Top NCVVO zamka!', diff:'medium'},
  {tokens:['list','=','list'], targetIdx:1, correct:'homonimi', explanation:'Homonimi — list (papira), list (biljke), list (novine). Sva 3 značenja postoje, nepovezana etimološki.', diff:'medium'},
  {tokens:['adekvatan','≠','ekvivalentan'], targetIdx:1, correct:'paronimi', explanation:'Paronimi — adekvatan = primjeren. Ekvivalentan = istovrijedan. Često se zamijene!', diff:'medium'},
  {tokens:['učitelj','×','učenik'], targetIdx:1, correct:'antonimi', explanation:'Antonimi — relativni (konverzni) tip. Suprotnost po ulozi/odnosu.', diff:'medium'},
  {tokens:['umrijeti','=','preminuti'], targetIdx:1, correct:'sinonimi', explanation:'Sinonimi (stilski) — isto značenje, različit stil. Umrijeti (neutralno), preminuti (uzvišeno, eufemistički).', diff:'medium'},
  {tokens:['životinja','→','mačka'], targetIdx:0, correct:'hiperonim', explanation:'Životinja je HIPERONIM za sve nabrojano. Mačka je hiponim. Pas, mačka, kornjača = kohiponimi.', diff:'medium'},
  {tokens:['radost','=','veselje'], targetIdx:1, correct:'sinonimi', explanation:'Sinonimi/bliskoznačnice — oboje označavaju pozitivno emocionalno stanje.', diff:'medium'},
  {tokens:['paran','×','neparan'], targetIdx:1, correct:'antonimi', explanation:'Antonimi — komplementarni. Apsolutna suprotnost bez sredine (broj je ili paran ili neparan).', diff:'medium'},
  {tokens:['ekonomski','≠','ekonomičan'], targetIdx:1, correct:'paronimi', explanation:'Paronimi — ekonomski = vezan uz gospodarstvo. Ekonomičan = štedljiv. Sličan oblik, vrlo različita značenja.', diff:'medium'},
  {tokens:['hitar','=','brz'], targetIdx:1, correct:'sinonimi', explanation:'Sinonimi — oboje označavaju visoku brzinu. „Hitar" je arhaičnija varijanta.', diff:'medium'},
  
  // HARD (7) — subtle cases
  {tokens:['luk','=','luk'], targetIdx:1, correct:'homonimi', explanation:'Homografi (homonimi) — luk (povrće, dugi naglasak) i luk (oružje, kratki naglasak). Isti zapis, različit naglasak.', diff:'hard'},
  {tokens:['verbalan','≠','vjerski'], targetIdx:1, correct:'paronimi', explanation:'Paronimi — verbalan = govorni, riječni. Vjerski = religijski. Često se brkaju u tisku.', diff:'hard'},
  {tokens:['banka','=','banka'], targetIdx:1, correct:'homonimi', explanation:'Homonimi — banka (financijska institucija) i banka (klupa za sjedenje, srpski/regionalno). Različito porijeklo.', diff:'hard'},
  {tokens:['jak','=','snažan'], targetIdx:1, correct:'sinonimi', explanation:'Sinonimi (bliskoznačnice) — oboje označavaju fizičku ili emocionalnu snagu. Razlikuju se po nijansi.', diff:'hard'},
  {tokens:['industrijski','≠','industrijalni'], targetIdx:1, correct:'paronimi', explanation:'Paronimi — industrijski = pripada industriji. Industrijalni = vezan uz industrijalce ili industrijalnu glazbu. Velika razlika!', diff:'hard'},
  {tokens:['piti','×','jesti'], targetIdx:1, correct:'antonimi', explanation:'NIJE antonimi u strogom smislu. Pitanje je trik — to su DVA RAZLIČITA glagola, ne suprotnosti. Antonim za „piti" je npr. „ne piti".', diff:'hard'},
  {tokens:['kućni','ljubimac','→','pas'], targetIdx:0, correct:'hiperonim', explanation:'„Kućni ljubimac" je hiperonim za pas, mačka, kanarinac. Pas je hiponim. Trik: hiperonim mora obuhvatiti SVE primjere.', diff:'hard'},
];

let rcIdx = 0;
let rcScore = 0;
let rcAnswers = [];

function rcRender(){
  const out = document.getElementById('rc-exercise');
  if(!out) return;
  
  if(rcIdx >= RC_SENTENCES.length){
    return rcResult();
  }
  
  const item = RC_SENTENCES[rcIdx];
  const diffColor = {easy:'var(--green)', medium:'var(--gold)', hard:'var(--red)'}[item.diff] || 'var(--t3)';
  const diffLabel = {easy:'LAKO', medium:'SREDNJE', hard:'TEŠKO'}[item.diff] || '';
  
  // Build sentence with highlighted target
  const sentenceHtml = item.tokens.map((tok, i) => {
    if(i === item.targetIdx){
      return \`<span class="rc-target">\${tok}</span>\`;
    }
    if(tok === ',' || tok === '.') return \`<span class="rc-punct">\${tok}</span>\`;
    return \`<span class="rc-word">\${tok}</span>\`;
  }).join(' ');
  
  out.innerHTML = \`
    <div class="rc-card">
      <div class="rc-meta">
        <span class="rc-progress">Rečenica <strong>\${rcIdx+1}</strong> / \${RC_SENTENCES.length}</span>
        <span class="rc-diff" style="color:\${diffColor};border-color:\${diffColor}">\${diffLabel}</span>
        <span class="rc-score">Točno: <strong>\${rcScore}</strong> / \${rcIdx}</span>
      </div>
      
      <div class="rc-question">
        Koji <strong style="color:var(--gold)">leksički odnos</strong> postoji između ovih riječi?
      </div>
      
      <div class="rc-sentence">\${sentenceHtml}</div>
      
      <div class="rc-options">
        \${RC_OPTIONS.map(o => \`
          <button class="rc-opt" onclick="rcAnswer('\${o.key}', this)" data-key="\${o.key}" style="--opt-color:\${o.color}">
            <span class="rc-opt-short">\${o.short}</span>
            <span class="rc-opt-label">\${o.label}</span>
          </button>
        \`).join('')}
      </div>
      
      <div id="rc-feedback" class="rc-feedback"></div>
    </div>
  \`;
}

function rcAnswer(key, btn){
  const item = RC_SENTENCES[rcIdx];
  const isCorrect = key === item.correct;
  
  // Disable all option buttons
  document.querySelectorAll('.rc-opt').forEach(b => {
    b.disabled = true;
    if(b.dataset.key === item.correct){
      b.classList.add('rc-correct');
    } else if(b === btn){
      b.classList.add('rc-wrong');
    }
  });
  
  if(isCorrect){
    rcScore++;
    if(typeof addXP === 'function') addXP(5, 'Točan odgovor');
  }
  
  rcAnswers.push({idx:rcIdx, correct:isCorrect, given:key});
  
  const fb = document.getElementById('rc-feedback');
  if(fb){
    fb.style.display = 'block';
    fb.className = 'rc-feedback ' + (isCorrect ? 'rc-fb-correct' : 'rc-fb-wrong');
    fb.innerHTML = \`
      <div class="rc-fb-head">
        \${isCorrect ? '✅ <strong>Točno!</strong>' : \`❌ <strong>Pogrešno.</strong> Točan odgovor: <strong style="color:var(--gold)">\${RC_OPTIONS.find(o=>o.key===item.correct).label}</strong>\`}
      </div>
      <div class="rc-fb-exp">\${item.explanation}</div>
      <div class="rc-fb-actions">
        <button class="nb-btn primary" onclick="rcNext()">\${rcIdx+1 < RC_SENTENCES.length ? 'Sljedeća rečenica →' : 'Pogledaj rezultat →'}</button>
      </div>
    \`;
    fb.scrollIntoView({behavior:'smooth', block:'nearest'});
  }
}

function rcNext(){
  rcIdx++;
  rcRender();
  // Scroll to top of exercise
  setTimeout(() => {
    const ex = document.getElementById('rc-exercise');
    if(ex) ex.scrollIntoView({behavior:'smooth', block:'start'});
  }, 50);
}

function rcReset(){
  rcIdx = 0;
  rcScore = 0;
  rcAnswers = [];
  document.getElementById('rc-result').style.display = 'none';
  rcRender();
}

function rcResult(){
  const out = document.getElementById('rc-exercise');
  const res = document.getElementById('rc-result');
  if(!out || !res) return;
  
  const total = RC_SENTENCES.length;
  const pct = Math.round(rcScore / total * 100);
  
  let msg = '', emoji = '', color = '';
  if(pct >= 90){ msg = 'Izvrsno! Spreman/na si za maturu iz rečeničnih članova.'; emoji = '🏆'; color = 'var(--gold)'; }
  else if(pct >= 70){ msg = 'Dobro! Pogledaj objašnjenja za pogreške i ponovi.'; emoji = '🎯'; color = 'var(--green)'; }
  else if(pct >= 50){ msg = 'OK, ali treba još rada. Vrati se na scene cards iznad i ponovi vježbu.'; emoji = '📚'; color = 'var(--bronze)'; }
  else { msg = 'Treba više učenja. Pažljivo prouči svih 6 članova (SPO-AAP), pa ponovi.'; emoji = '💪'; color = 'var(--red)'; }
  
  // Achievement check
  if(pct === 100 && typeof addXP === 'function') addXP(50, '15/15 — perfektno!');
  if(pct >= 80 && typeof recordTabVisit === 'function') recordTabVisit(1);
  
  // Save history
  try {
    const hist = JSON.parse(localStorage.getItem('mt.hrv.h23.rc_hist') || '[]');
    hist.push({score:rcScore, total, pct, date: new Date().toISOString()});
    localStorage.setItem('mt.hrv.h23.rc_hist', JSON.stringify(hist.slice(-10)));
  } catch(e){}
  
  // Show wrong answers detail
  const wrongAnswers = rcAnswers.filter(a => !a.correct);
  const wrongHtml = wrongAnswers.length > 0 ? \`
    <details class="rc-detail-wrong" style="margin-top:14px">
      <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--red);font-size:13px">
        ❌ Pogledaj svoje pogreške (\${wrongAnswers.length}) ▾
      </summary>
      <div style="margin-top:10px;display:grid;gap:8px">
        \${wrongAnswers.map(a => {
          const item = RC_SENTENCES[a.idx];
          const sent = item.tokens.map((t,i) => i===item.targetIdx ? \`<strong style="color:var(--gold)">\${t}</strong>\` : t).join(' ');
          return \`
            <div style="padding:10px;background:var(--bg);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1);font-size:12.5px">
              <div style="font-style:italic;color:var(--t1);margin-bottom:4px">\${sent}</div>
              <div style="color:var(--t3);font-size:11px">Tvoj odgovor: <strong style="color:var(--red)">\${a.given}</strong> · Točno: <strong style="color:var(--green)">\${item.correct}</strong></div>
              <div style="color:var(--t2);font-size:12px;margin-top:4px;line-height:1.5">\${item.explanation}</div>
            </div>
          \`;
        }).join('')}
      </div>
    </details>
  \` : '';
  
  out.innerHTML = '';
  res.style.display = 'block';
  res.innerHTML = \`
    <div class="rc-result-card" style="border-left:3px solid \${color}">
      <div style="font-size:48px;margin-bottom:8px">\${emoji}</div>
      <div style="font-family:var(--display);font-size:22px;font-weight:700;color:var(--t1);margin-bottom:4px">
        Rezultat: \${rcScore} / \${total} <span style="color:\${color}">(\${pct}%)</span>
      </div>
      <div style="font-size:13px;color:var(--t2);margin-bottom:18px">\${msg}</div>
      
      <div class="rc-result-bar">
        <div class="rc-result-fill" style="width:\${pct}%;background:\${color}"></div>
      </div>
      
      \${wrongHtml}
      
      <div style="margin-top:18px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <button class="nb-btn primary" onclick="rcReset()">🔁 Ponovi vježbu</button>
        <button class="nb-btn" onclick="sw(2)">✍ Pisma →</button>
      </div>
    </div>
  \`;
}

// Auto-init when Tab 1 visible / on load
function rcInit(){
  if(document.getElementById('rc-exercise')){
    rcRender();
  }
}

// Init on DOMContentLoaded + fallback
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', () => setTimeout(rcInit, 100));
} else {
  setTimeout(rcInit, 100);
}



// ═══════════════════════════════════
// TAB 2 · KLASIFIKACIJA REČENICA
// ═══════════════════════════════════

const VR_OPT_SASTAV = [
  {key:'vremenski', short:'V', label:'Vremenski', color:'var(--blue)'},
  {key:'prostorni', short:'P', label:'Prostorni', color:'var(--green)'},
  {key:'funkcionalni', short:'F', label:'Funkcionalni', color:'var(--bronze)'},
  {key:'strucni', short:'S', label:'Stručni', color:'var(--red)'},
  {key:'strane', short:'SR', label:'Strane riječi', color:'#9b59b6'},
];
const VR_OPT_SVRHA = [
  {key:'arhaizam', short:'AR', label:'Arhaizam', color:'var(--blue)'},
  {key:'historizam', short:'HI', label:'Historizam', color:'var(--blue)'},
  {key:'neologizam', short:'NE', label:'Neologizam', color:'var(--blue)'},
  {key:'dijalektizam', short:'DI', label:'Dijalektizam', color:'var(--green)'},
  {key:'regionalizam', short:'RE', label:'Regionalizam', color:'var(--green)'},
  {key:'lokalizam', short:'LO', label:'Lokalizam', color:'var(--green)'},
  {key:'knjiški', short:'KN', label:'Knjiški', color:'var(--bronze)'},
  {key:'razgovorno', short:'RZ', label:'Razgovorno', color:'var(--bronze)'},
  {key:'termin', short:'TE', label:'Termin', color:'var(--red)'},
  {key:'sleng', short:'SL', label:'Sleng', color:'var(--red)'},
  {key:'posudjenica', short:'PO', label:'Posuđenica', color:'#9b59b6'},
  {key:'tudjica', short:'TU', label:'Tuđica', color:'#9b59b6'},
  {key:'internacionalizam', short:'IN', label:'Internacionalizam', color:'#9b59b6'},
];

const VR_SENTENCES = [
  // VREMENSKI (8)
  {text:'jur (= već)', glavni:'vremenski', podvrsta:'arhaizam', exp_g:'„Jur" je stara riječ za pojam koji još postoji. Vremenski sloj.', exp_p:'Arhaizam — pojam (ono što izražava „već") postoji, ali se danas ne koristi „jur".'},
  {text:'kmet', glavni:'vremenski', podvrsta:'historizam', exp_g:'„Kmet" je riječ koja označava pojam iz prošlosti. Vremenski sloj.', exp_p:'Historizam — pojam kmeta (feudalno selo) više ne postoji u suvremenom svijetu.'},
  {text:'selfie', glavni:'vremenski', podvrsta:'neologizam', exp_g:'„Selfie" je nova riječ (~2010+). Vremenski sloj.', exp_p:'Neologizam — recent strukturni neologizam, posuđen iz engleskog.'},
  {text:'oroz (= pijetao)', glavni:'vremenski', podvrsta:'arhaizam', exp_g:'„Oroz" je stara riječ za pijetla. Vremenski sloj.', exp_p:'Arhaizam — pojam (pijetao) postoji, ali se ne koristi „oroz".'},
  {text:'lockdown', glavni:'vremenski', podvrsta:'neologizam', exp_g:'„Lockdown" je posuđena nova riječ (od 2020+). Vremenski sloj.', exp_p:'Neologizam — strukturni, posuđen iz engleskog tijekom pandemije.'},
  {text:'latifundija', glavni:'vremenski', podvrsta:'historizam', exp_g:'„Latifundija" označava pojam iz starog Rima koji više ne postoji. Vremenski sloj.', exp_p:'Historizam — veliki zemljišni posjedi rimskog tipa danas ne postoje.'},
  {text:'hashtag', glavni:'vremenski', podvrsta:'neologizam', exp_g:'„Hashtag" je nova riječ (~2007+, Twitter). Vremenski sloj.', exp_p:'Neologizam — strukturni neologizam iz digitalne ere.'},
  {text:'zaman (= uzalud)', glavni:'vremenski', podvrsta:'arhaizam', exp_g:'„Zaman" je stara riječ za pojam koji još postoji. Vremenski sloj.', exp_p:'Arhaizam — pojam (uzaludnost) postoji, ali se „zaman" ne koristi u suvremenom govoru.'},
  
  // PROSTORNI (6)
  {text:'kaj (= što)', glavni:'prostorni', podvrsta:'dijalektizam', exp_g:'„Kaj" je riječ iz kajkavskog narječja. Prostorni sloj.', exp_p:'Dijalektizam — pripada točno određenom narječju (kajkavskom).'},
  {text:'gemišt', glavni:'prostorni', podvrsta:'regionalizam', exp_g:'„Gemišt" je vezan uz slavonski/sjevernohrvatski razgovorni govor. Prostorni sloj.', exp_p:'Regionalizam — vezan uz regiju, ali ne strogo uz narječje.'},
  {text:'ča (= što)', glavni:'prostorni', podvrsta:'dijalektizam', exp_g:'„Ča" je riječ iz čakavskog narječja. Prostorni sloj.', exp_p:'Dijalektizam — pripada točno određenom narječju (čakavskom, primorska regija).'},
  {text:'paška sirana', glavni:'prostorni', podvrsta:'lokalizam', exp_g:'„Paška sirana" je vrlo uzak geografski pojam. Prostorni sloj.', exp_p:'Lokalizam — vezan za vrlo usku regiju (otok Pag).'},
  {text:'pršut', glavni:'prostorni', podvrsta:'regionalizam', exp_g:'„Pršut" je vezan uz primorsku regiju (Dalmacija, Istra). Prostorni sloj.', exp_p:'Regionalizam — naglašen u Dalmaciji i Istri, široko regionalno značenje.'},
  {text:'štruca (= štrudla)', glavni:'prostorni', podvrsta:'regionalizam', exp_g:'„Štruca" je vezana uz slavonski razgovorni jezik. Prostorni sloj.', exp_p:'Regionalizam — slavonsko ime za određeni tip kruha.'},
  
  // FUNKCIONALNI (5)
  {text:'preminuti', glavni:'funkcionalni', podvrsta:'knjiški', exp_g:'„Preminuti" je uzvišeni izraz za umrijeti. Funkcionalni sloj.', exp_p:'Knjiški/uzvišeni — koristi se u književnom i službenom stilu (eufemizam).'},
  {text:'baka', glavni:'funkcionalni', podvrsta:'razgovorno', exp_g:'„Baka" je razgovorna verzija od „baba". Funkcionalni sloj.', exp_p:'Razgovorno — svakodnevni govor, neformalna obitelj.'},
  {text:'ushićen', glavni:'funkcionalni', podvrsta:'knjiški', exp_g:'„Ushićen" je uzvišena verzija od „oduševljen". Funkcionalni sloj.', exp_p:'Knjiški — koristi se u književnom stilu, formalan.'},
  {text:'tata', glavni:'funkcionalni', podvrsta:'razgovorno', exp_g:'„Tata" je razgovorna verzija od „otac". Funkcionalni sloj.', exp_p:'Razgovorno — svakodnevni neformalni govor.'},
  {text:'počinuti', glavni:'funkcionalni', podvrsta:'knjiški', exp_g:'„Počinuti" je uzvišeni izraz za odmoriti se / umrijeti. Funkcionalni sloj.', exp_p:'Knjiški — koristi se u književnom stilu (eufemizam).'},
  
  // STRUČNI (5)
  {text:'integral', glavni:'strucni', podvrsta:'termin', exp_g:'„Integral" je matematički pojam — stručni naziv. Stručni sloj.', exp_p:'Termin (stručni naziv) — jednoznačan unutar matematike.'},
  {text:'faca', glavni:'strucni', podvrsta:'sleng', exp_g:'„Faca" je razgovorni izraz za „cool osoba" — pripada mladenačkom govoru.', exp_p:'Sleng — razgovorni mladenački jezik, neformalan.'},
  {text:'anestezija', glavni:'strucni', podvrsta:'termin', exp_g:'„Anestezija" je medicinski stručni naziv. Stručni sloj.', exp_p:'Termin — jednoznačan unutar medicine, formalni stručni izraz.'},
  {text:'tužba', glavni:'strucni', podvrsta:'termin', exp_g:'„Tužba" u pravnom kontekstu je stručni naziv. Stručni sloj.', exp_p:'Termin — jednoznačan u pravu (službena pisana isprava o pokretanju parnice).'},
  {text:'kupac (= netko cool)', glavni:'strucni', podvrsta:'sleng', exp_g:'„Kupac" u smislu cool/dobre osobe je sleng. Stručni sloj (slengovski podsloj).', exp_p:'Sleng — razgovorni mladenački jezik. Doslovno značenje (kupac = onaj koji kupuje) je drugo.'},
  
  // STRANE (6)
  {text:'kompjuter', glavni:'strane', podvrsta:'tudjica', exp_g:'„Kompjuter" je strana riječ (engl. computer). Zadržava strani izgovor.', exp_p:'Tuđica jer se ne prilagođava hrvatskom pravopisu (računalo bi bilo prevedenica).'},
  {text:'škola', glavni:'strane', podvrsta:'posudjenica', exp_g:'„Škola" je preuzeta iz lat. schola. Strane riječi.', exp_p:'Posuđenica — prilagođena hrvatskoj fonetici, piše se po hrvatskom pravopisu.'},
  {text:'demokracija', glavni:'strane', podvrsta:'internacionalizam', exp_g:'„Demokracija" je u svim europskim jezicima sa istim značenjem. Strane riječi.', exp_p:'Internacionalizam — riječ prisutna u više jezika sa istim oblikom i značenjem.'},
  {text:'jazz', glavni:'strane', podvrsta:'tudjica', exp_g:'„Jazz" zadržava strani oblik i izgovor. Strane riječi.', exp_p:'Tuđica — ne prilagođava se hrvatskom pravopisu (žaz bi bila posuđenica).'},
  {text:'banka', glavni:'strane', podvrsta:'posudjenica', exp_g:'„Banka" je preuzeta iz tal. banca. Strane riječi.', exp_p:'Posuđenica — prilagođena hrvatskoj fonetici i pravopisu.'},
  {text:'telefon', glavni:'strane', podvrsta:'internacionalizam', exp_g:'„Telefon" je u svim europskim jezicima. Strane riječi.', exp_p:'Internacionalizam — tehnički pojam prisutan u više jezika sa istim oblikom.'},
];

let vrIdx = 0;
let vrScore = 0;
let vrAnswers = [];
let vrSastavGiven = null;
let vrSvrhaGiven = null;

function vrRender(){
  const out = document.getElementById('vr-exercise');
  if(!out) return;
  
  if(vrIdx >= VR_SENTENCES.length){
    return vrResult();
  }
  
  const item = VR_SENTENCES[vrIdx];
  vrSastavGiven = null;
  vrSvrhaGiven = null;
  
  out.innerHTML = \`
    <div class="vr-card">
      <div class="vr-meta">
        <span class="vr-progress">Rečenica <strong>\${vrIdx+1}</strong> / \${VR_SENTENCES.length}</span>
        <span class="vr-score">Točno: <strong>\${vrScore}</strong> / \${vrIdx*2}</span>
      </div>
      
      <div class="vr-sentence">\${item.text}</div>
      
      <!-- Q1: Sastav -->
      <div class="vr-q-block">
        <div class="vr-q-label">
          <span class="vr-q-num">1</span>
          <span>Glavni sloj leksika:</span>
        </div>
        <div class="vr-options vr-options-3">
          \${VR_OPT_SASTAV.map(o => \`
            <button class="vr-opt" onclick="vrAnswerSastav('\${o.key}', this)" data-key="\${o.key}" style="--opt-color:\${o.color}">
              <span class="vr-opt-short">\${o.short}</span>
              <span class="vr-opt-label">\${o.label}</span>
            </button>
          \`).join('')}
        </div>
        <div id="vr-fb-sastav" class="vr-fb"></div>
      </div>
      
      <!-- Q2: Svrha -->
      <div class="vr-q-block">
        <div class="vr-q-label">
          <span class="vr-q-num">2</span>
          <span>Podvrsta:</span>
        </div>
        <div class="vr-options vr-options-5">
          \${VR_OPT_SVRHA.map(o => \`
            <button class="vr-opt" onclick="vrAnswerSvrha('\${o.key}', this)" data-key="\${o.key}" style="--opt-color:\${o.color}">
              <span class="vr-opt-short">\${o.short}</span>
              <span class="vr-opt-label">\${o.label}</span>
            </button>
          \`).join('')}
        </div>
        <div id="vr-fb-svrha" class="vr-fb"></div>
      </div>
      
      <div id="vr-next-wrap" style="display:none;text-align:center;margin-top:14px">
        <button class="nb-btn primary" onclick="vrNext()">\${vrIdx+1 < VR_SENTENCES.length ? 'Sljedeća rečenica →' : 'Pogledaj rezultat →'}</button>
      </div>
    </div>
  \`;
}

function vrAnswerSastav(key, btn){
  if(vrSastavGiven) return;
  vrSastavGiven = key;
  
  const item = VR_SENTENCES[vrIdx];
  const isCorrect = key === item.glavni;
  
  document.querySelectorAll('.vr-options-3 .vr-opt').forEach(b => {
    b.disabled = true;
    if(b.dataset.key === item.glavni) b.classList.add('vr-correct');
    else if(b === btn) b.classList.add('vr-wrong');
  });
  
  if(isCorrect){
    vrScore++;
    if(typeof addXP === 'function') addXP(3);
  }
  
  const fb = document.getElementById('vr-fb-sastav');
  fb.style.display = 'block';
  fb.className = 'vr-fb ' + (isCorrect ? 'vr-fb-correct' : 'vr-fb-wrong');
  fb.innerHTML = \`\${isCorrect?'✅':'❌'} <strong>\${isCorrect?'Točno!':'Pogrešno.'}</strong> \${item.exp_g}\`;
  
  vrCheckBoth();
}

function vrAnswerSvrha(key, btn){
  if(vrSvrhaGiven) return;
  vrSvrhaGiven = key;
  
  const item = VR_SENTENCES[vrIdx];
  const isCorrect = key === item.podvrsta;
  
  document.querySelectorAll('.vr-options-5 .vr-opt').forEach(b => {
    b.disabled = true;
    if(b.dataset.key === item.podvrsta) b.classList.add('vr-correct');
    else if(b === btn) b.classList.add('vr-wrong');
  });
  
  if(isCorrect){
    vrScore++;
    if(typeof addXP === 'function') addXP(3);
  }
  
  const fb = document.getElementById('vr-fb-svrha');
  fb.style.display = 'block';
  fb.className = 'vr-fb ' + (isCorrect ? 'vr-fb-correct' : 'vr-fb-wrong');
  fb.innerHTML = \`\${isCorrect?'✅':'❌'} <strong>\${isCorrect?'Točno!':'Pogrešno.'}</strong> \${item.exp_p}\`;
  
  vrCheckBoth();
}

function vrCheckBoth(){
  if(vrSastavGiven && vrSvrhaGiven){
    vrAnswers.push({
      idx: vrIdx,
      sastav: {given: vrSastavGiven, correct: vrSastavGiven === VR_SENTENCES[vrIdx].sastav},
      svrha: {given: vrSvrhaGiven, correct: vrSvrhaGiven === VR_SENTENCES[vrIdx].svrha}
    });
    document.getElementById('vr-next-wrap').style.display = 'block';
  }
}

function vrNext(){
  vrIdx++;
  vrRender();
  setTimeout(() => {
    const ex = document.getElementById('vr-exercise');
    if(ex) ex.scrollIntoView({behavior:'smooth', block:'start'});
  }, 50);
}

function vrReset(){
  vrIdx = 0;
  vrScore = 0;
  vrAnswers = [];
  document.getElementById('vr-result').style.display = 'none';
  vrRender();
}

function vrResult(){
  const out = document.getElementById('vr-exercise');
  const res = document.getElementById('vr-result');
  if(!out || !res) return;
  
  const total = VR_SENTENCES.length * 2;
  const pct = Math.round(vrScore / total * 100);
  
  let msg = '', emoji = '', color = '';
  if(pct >= 90){ msg = 'Izvrsno! Klasifikacija ti je u malom prstu.'; emoji = '🏆'; color = 'var(--gold)'; }
  else if(pct >= 70){ msg = 'Dobro! Pogledaj objašnjenja za pogreške i ponovi.'; emoji = '🎯'; color = 'var(--green)'; }
  else if(pct >= 50){ msg = 'OK, treba još rada. Vrati se na decision tree iznad.'; emoji = '📚'; color = 'var(--bronze)'; }
  else { msg = 'Treba više učenja. Pažljivo prouči 3 kriterija (sastav · svrha · značenje).'; emoji = '💪'; color = 'var(--red)'; }
  
  if(pct === 100 && typeof addXP === 'function') addXP(75, '40/40 — perfektno!');
  if(pct >= 80 && typeof recordTabVisit === 'function') recordTabVisit(2);
  
  try {
    const hist = JSON.parse(localStorage.getItem('mt.hrv.h23.vr_hist') || '[]');
    hist.push({score:vrScore, total, pct, date: new Date().toISOString()});
    localStorage.setItem('mt.hrv.h23.vr_hist', JSON.stringify(hist.slice(-10)));
  } catch(e){}
  
  // Wrong answers detail
  const wrongAnswers = vrAnswers.filter(a => !a.sastav.correct || !a.svrha.correct);
  const wrongHtml = wrongAnswers.length > 0 ? \`
    <details class="rc-detail-wrong" style="margin-top:14px;text-align:left">
      <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--red);font-size:13px">
        ❌ Pogledaj svoje pogreške (\${wrongAnswers.length}) ▾
      </summary>
      <div style="margin-top:10px;display:grid;gap:8px">
        \${wrongAnswers.map(a => {
          const item = VR_SENTENCES[a.idx];
          let errors = [];
          if(!a.sastav.correct) errors.push(\`<div>• Sastav — tvoj: <strong style="color:var(--red)">\${a.sastav.given}</strong>, točno: <strong style="color:var(--green)">\${item.sastav}</strong>. \${item.exp_g}</div>\`);
          if(!a.svrha.correct) errors.push(\`<div>• Svrha — tvoja: <strong style="color:var(--red)">\${a.svrha.given}</strong>, točno: <strong style="color:var(--green)">\${item.svrha}</strong>. \${item.exp_p}</div>\`);
          return \`
            <div style="padding:10px;background:var(--bg);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1);font-size:12.5px">
              <div style="font-style:italic;color:var(--t1);margin-bottom:6px">"\${item.text}"</div>
              <div style="color:var(--t2);font-size:12px;line-height:1.6">\${errors.join('')}</div>
            </div>
          \`;
        }).join('')}
      </div>
    </details>
  \` : '';
  
  out.innerHTML = '';
  res.style.display = 'block';
  res.innerHTML = \`
    <div class="rc-result-card" style="border-left:3px solid \${color}">
      <div style="font-size:48px;margin-bottom:8px">\${emoji}</div>
      <div style="font-family:var(--display);font-size:22px;font-weight:700;color:var(--t1);margin-bottom:4px">
        Rezultat: \${vrScore} / \${total} <span style="color:\${color}">(\${pct}%)</span>
      </div>
      <div style="font-size:13px;color:var(--t2);margin-bottom:18px">\${msg}</div>
      
      <div class="rc-result-bar">
        <div class="rc-result-fill" style="width:\${pct}%;background:\${color}"></div>
      </div>
      
      \${wrongHtml}
      
      <div style="margin-top:18px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <button class="nb-btn primary" onclick="vrReset()">🔁 Ponovi vježbu</button>
        <button class="nb-btn" onclick="sw(3)">📜 Spomenici →</button>
      </div>
    </div>
  \`;
}

function vrInit(){
  if(document.getElementById('vr-exercise')){
    vrRender();
  }
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', () => setTimeout(vrInit, 100));
} else {
  setTimeout(vrInit, 150);
}



// ═══════════════════════════════════
// TAB 3 · KLASIFIKACIJA SLOŽENIH REČENICA
// ═══════════════════════════════════

// Step 1: nezavisno vs zavisno (3 options including "prosta" trap)
const SS_OPT_TIP = [
  {key:'prosta', label:'Prosta', short:'Pr', color:'var(--t3)'},
  {key:'nezavisna', label:'Nezavisna', short:'Nz', color:'var(--gold)'},
  {key:'zavisna', label:'Zavisna', short:'Zv', color:'var(--bronze)'},
];

// Step 2a: nezavisno vrsta (6)
const SS_OPT_NZ = [
  {key:'sastavna', label:'Sastavna', color:'var(--green)'},
  {key:'rastavna', label:'Rastavna', color:'var(--blue)'},
  {key:'suprotna', label:'Suprotna', color:'var(--red)'},
  {key:'zakljucna', label:'Zaključna', color:'var(--bronze)'},
  {key:'izuzetna', label:'Izuzetna', color:'#9b59b6'},
  {key:'objasnidbena', label:'Objasnidbena', color:'#e67e22'},
];

// Step 2b: zavisno vrsta (12)
const SS_OPT_ZV = [
  {key:'subjektna', label:'Subjektna', color:'var(--blue)', g:'imen'},
  {key:'predikatna', label:'Predikatna', color:'var(--red)', g:'imen'},
  {key:'objektna', label:'Objektna', color:'var(--green)', g:'imen'},
  {key:'atributna', label:'Atributna', color:'var(--bronze)', g:'imen'},
  {key:'mjesna', label:'Mjesna', color:'#e67e22', g:'pril'},
  {key:'vremenska', label:'Vremenska', color:'#e67e22', g:'pril'},
  {key:'nacinska', label:'Načinska', color:'#e67e22', g:'pril'},
  {key:'uzrocna', label:'Uzročna', color:'#e67e22', g:'pril'},
  {key:'posljedicna', label:'Posljedična', color:'#e67e22', g:'pril'},
  {key:'namjerna', label:'Namjerna', color:'#e67e22', g:'pril'},
  {key:'pogodbena', label:'Pogodbena', color:'#e67e22', g:'pril'},
  {key:'dopusna', label:'Dopusna', color:'#e67e22', g:'pril'},
];

const SS_SENTENCES = [
  // === EASY (8) — basic recognition ===
  {text:'Učim, ali sam umoran.', tip:'nezavisna', vrsta:'suprotna', exp_t:'2 predikata (učim, sam) + nezav. veznik „ali" → nezavisna.', exp_v:'„Ali" iznosi suprotnost → suprotna.'},
  {text:'Marija piše i Ivan čita.', tip:'nezavisna', vrsta:'sastavna', exp_t:'2 predikata + nezav. veznik „i" → nezavisna.', exp_v:'„I" zbraja/dodaje → sastavna.'},
  {text:'Učim, jer želim položiti.', tip:'zavisna', vrsta:'uzrocna', exp_t:'2 predikata + zav. veznik „jer" → zavisna.', exp_v:'„Jer" iznosi uzrok („zašto učim?") → uzročna.'},
  {text:'Idem ili ostajem.', tip:'nezavisna', vrsta:'rastavna', exp_t:'2 predikata + nezav. veznik „ili" → nezavisna.', exp_v:'„Ili" iznosi izbor → rastavna.'},
  {text:'Pada kiša, zato ne idem van.', tip:'nezavisna', vrsta:'zakljucna', exp_t:'2 predikata + nezav. veznik „zato" → nezavisna.', exp_v:'„Zato" iznosi zaključak/posljedicu → zaključna.'},
  {text:'Vjerujem da si u pravu.', tip:'zavisna', vrsta:'objektna', exp_t:'2 predikata + zav. veznik „da" → zavisna.', exp_v:'Pitanje: vjerujem ŠTO? → objektna („da" zamjenjuje objekt).'},
  {text:'Knjiga koju čitam je odlična.', tip:'zavisna', vrsta:'atributna', exp_t:'2 predikata + zav. zamj. „koju" → zavisna.', exp_v:'Opisuje imenicu „knjiga" — koja knjiga? → atributna.'},
  {text:'Ako budeš učio, položit ćeš.', tip:'zavisna', vrsta:'pogodbena', exp_t:'2 predikata + zav. veznik „ako" → zavisna.', exp_v:'„Ako" iznosi uvjet → pogodbena.'},
  
  // === MEDIUM (10) — discrimination needed ===
  {text:'Iako sam umorna, idem trčati.', tip:'zavisna', vrsta:'dopusna', exp_t:'2 predikata + zav. veznik „iako" → zavisna.', exp_v:'„Iako" iznosi dopust („usprkos") → dopusna.'},
  {text:'Dođi kad budeš mogao.', tip:'zavisna', vrsta:'vremenska', exp_t:'2 predikata + zav. veznik „kad" → zavisna.', exp_v:'„Kad" iznosi vrijeme („kada dođi?") → vremenska.'},
  {text:'Učim da položim maturu.', tip:'zavisna', vrsta:'namjerna', exp_t:'2 predikata + zav. veznik „da" → zavisna.', exp_v:'Pitanje: zašto učim? — radi cilja/namjere → namjerna.'},
  {text:'Toliko sam umoran da spavam stojeći.', tip:'zavisna', vrsta:'posljedicna', exp_t:'2 predikata + zav. veznik „da" uz „toliko" → zavisna.', exp_v:'„Da" uz „toliko/tako" iznosi posljedicu → posljedična.'},
  {text:'Otišao sam u kino, pa sam večerao.', tip:'nezavisna', vrsta:'sastavna', exp_t:'2 predikata + nezav. veznik „pa" → nezavisna.', exp_v:'„Pa" iznosi redoslijed/dodavanje → sastavna.'},
  {text:'Idem gdje me vode.', tip:'zavisna', vrsta:'mjesna', exp_t:'2 predikata + zav. zamj. „gdje" → zavisna.', exp_v:'„Gdje" iznosi mjesto („kamo idem?") → mjesna.'},
  {text:'Radi kako sam ti rekao.', tip:'zavisna', vrsta:'nacinska', exp_t:'2 predikata + zav. veznik „kako" → zavisna.', exp_v:'„Kako" iznosi način („kako radi?") → načinska.'},
  {text:'Sve je dobro, samo me boli glava.', tip:'nezavisna', vrsta:'izuzetna', exp_t:'2 predikata + nezav. veznik „samo" → nezavisna.', exp_v:'„Samo" iznosi iznimku → izuzetna.'},
  {text:'Tko rano rani, dvije sreće grabi.', tip:'zavisna', vrsta:'subjektna', exp_t:'2 predikata + zav. zamj. „tko" → zavisna.', exp_v:'„Tko rano rani" funkcionira kao subjekt glagola „grabi" → subjektna.'},
  {text:'Reci mi gdje si bio.', tip:'zavisna', vrsta:'objektna', exp_t:'2 predikata + zav. zamj. „gdje" → zavisna.', exp_v:'Pitanje: reci mi ŠTO? — odgovor je „gdje si bio" → objektna (ne mjesna!).'},
  
  // === HARD (7) — tricky cases ===
  {text:'Hoću čokoladu.', tip:'prosta', vrsta:null, exp_t:'1 predikat (hoću) → PROSTA. Ovo je zamka — nema 2 predikata.', exp_v:null},
  {text:'Sretna sam što si došao.', tip:'zavisna', vrsta:'uzrocna', exp_t:'2 predikata + zav. veznik „što" → zavisna.', exp_v:'„Što" ovdje uvodi uzrok („zašto sam sretna?") → uzročna (ne objektna!).'},
  {text:'Mislim, dakle jesam.', tip:'nezavisna', vrsta:'zakljucna', exp_t:'2 predikata + nezav. veznik „dakle" → nezavisna.', exp_v:'„Dakle" iznosi zaključak → zaključna (Descartes!).'},
  {text:'Vjerujem da bi mi pomogao da imaš vremena.', tip:'zavisna', vrsta:'objektna', exp_t:'3 predikata, više zavisnih. Glavni veznik „da" iza „vjerujem" → objektna.', exp_v:'Glavna zavisna je objektna („vjerujem ŠTO?"). Druga „da" (kondicional) je pogodbena unutar.'},
  {text:'Da imam novca, kupio bih auto.', tip:'zavisna', vrsta:'pogodbena', exp_t:'2 predikata + zav. veznik „da" + kondicional → zavisna.', exp_v:'„Da" + kondicional („bih") → pogodbena (NE objektna!). Pitanje: pod kojim uvjetom?'},
  {text:'Naime, situacija je drugačija nego što misliš.', tip:'nezavisna', vrsta:'objasnidbena', exp_t:'„Naime" je nezav. veznik koji uvodi pojašnjenje. 2 predikata.', exp_v:'„Naime" objašnjava → objasnidbena.'},
  {text:'Knjiga koju je napisao njegov brat osvojila je nagradu.', tip:'zavisna', vrsta:'atributna', exp_t:'2 predikata + zav. zamj. „koju" → zavisna.', exp_v:'„Koju je napisao brat" opisuje imenicu „knjiga" → atributna.'},
];

let ssIdx = 0;
let ssScore = 0;
let ssAnswers = [];
let ssTipGiven = null;
let ssVrstaGiven = null;
let ssMaxScore = 0; // 1 for tip + 1 for vrsta where applicable

function ssRender(){
  const out = document.getElementById('ss-exercise');
  if(!out) return;
  
  if(ssIdx >= SS_SENTENCES.length){
    return ssResult();
  }
  
  const item = SS_SENTENCES[ssIdx];
  ssTipGiven = null;
  ssVrstaGiven = null;
  
  out.innerHTML = \`
    <div class="ss-card">
      <div class="vr-meta">
        <span class="vr-progress">Rečenica <strong>\${ssIdx+1}</strong> / \${SS_SENTENCES.length}</span>
        <span class="vr-score">Točno: <strong>\${ssScore}</strong> / \${ssMaxScore}</span>
      </div>
      
      <div class="vr-sentence">\${item.text}</div>
      
      <!-- Q1: Tip (prosta/nezavisna/zavisna) -->
      <div class="vr-q-block">
        <div class="vr-q-label">
          <span class="vr-q-num">1</span>
          <span>Rečenica je:</span>
        </div>
        <div class="vr-options vr-options-3">
          \${SS_OPT_TIP.map(o => \`
            <button class="vr-opt" onclick="ssAnswerTip('\${o.key}', this)" data-key="\${o.key}" style="--opt-color:\${o.color}">
              <span class="vr-opt-short">\${o.short}</span>
              <span class="vr-opt-label">\${o.label}</span>
            </button>
          \`).join('')}
        </div>
        <div id="ss-fb-tip" class="vr-fb"></div>
      </div>
      
      <!-- Q2 placeholder — appears after Q1 if applicable -->
      <div id="ss-q2-wrap" style="display:none"></div>
      
      <div id="ss-next-wrap" style="display:none;text-align:center;margin-top:14px">
        <button class="nb-btn primary" onclick="ssNext()">\${ssIdx+1 < SS_SENTENCES.length ? 'Sljedeća →' : 'Pogledaj rezultat →'}</button>
      </div>
    </div>
  \`;
}

function ssAnswerTip(key, btn){
  if(ssTipGiven) return;
  ssTipGiven = key;
  
  const item = SS_SENTENCES[ssIdx];
  const isCorrect = key === item.tip;
  ssMaxScore++;
  
  document.querySelectorAll('.vr-options-3 .vr-opt').forEach(b => {
    b.disabled = true;
    if(b.dataset.key === item.tip) b.classList.add('vr-correct');
    else if(b === btn) b.classList.add('vr-wrong');
  });
  
  if(isCorrect){
    ssScore++;
    if(typeof addXP === 'function') addXP(3);
  }
  
  const fb = document.getElementById('ss-fb-tip');
  fb.style.display = 'block';
  fb.className = 'vr-fb ' + (isCorrect ? 'vr-fb-correct' : 'vr-fb-wrong');
  fb.innerHTML = \`\${isCorrect?'✅':'❌'} <strong>\${isCorrect?'Točno!':'Pogrešno.'}</strong> \${item.exp_t}\`;
  
  // If "prosta" — no Q2, just show next
  if(item.tip === 'prosta'){
    ssAnswers.push({idx: ssIdx, tip:{given:ssTipGiven, correct:isCorrect}, vrsta:null});
    document.getElementById('ss-next-wrap').style.display = 'block';
    return;
  }
  
  // Otherwise, show Q2 (vrsta) — based on tip given (not correct, so even if wrong gets to try Q2)
  // But use the CORRECT tip to show right options (more educational)
  const correctTip = item.tip;
  const opts = correctTip === 'nezavisna' ? SS_OPT_NZ : SS_OPT_ZV;
  const optClass = correctTip === 'nezavisna' ? 'ss-opt-grid-nz' : 'ss-opt-grid-zv';
  
  ssMaxScore++; // Q2 will count
  
  const q2 = document.getElementById('ss-q2-wrap');
  q2.style.display = 'block';
  q2.innerHTML = \`
    <div class="vr-q-block">
      <div class="vr-q-label">
        <span class="vr-q-num">2</span>
        <span>Vrsta \${correctTip === 'nezavisna' ? 'nezavisne' : 'zavisne'} rečenice:</span>
      </div>
      <div class="vr-options \${optClass}">
        \${opts.map(o => \`
          <button class="vr-opt vr-opt-vrsta" onclick="ssAnswerVrsta('\${o.key}', this)" data-key="\${o.key}" style="--opt-color:\${o.color}">
            <span class="vr-opt-label" style="font-size:11px;color:var(--t1);font-weight:600">\${o.label}</span>
          </button>
        \`).join('')}
      </div>
      <div id="ss-fb-vrsta" class="vr-fb"></div>
    </div>
  \`;
  
  // Smooth scroll to Q2
  setTimeout(() => q2.scrollIntoView({behavior:'smooth', block:'nearest'}), 100);
}

function ssAnswerVrsta(key, btn){
  if(ssVrstaGiven) return;
  ssVrstaGiven = key;
  
  const item = SS_SENTENCES[ssIdx];
  const isCorrect = key === item.vrsta;
  
  document.querySelectorAll('.vr-opt-vrsta').forEach(b => {
    b.disabled = true;
    if(b.dataset.key === item.vrsta) b.classList.add('vr-correct');
    else if(b === btn) b.classList.add('vr-wrong');
  });
  
  if(isCorrect){
    ssScore++;
    if(typeof addXP === 'function') addXP(5); // Higher reward for Q2
  }
  
  const fb = document.getElementById('ss-fb-vrsta');
  fb.style.display = 'block';
  fb.className = 'vr-fb ' + (isCorrect ? 'vr-fb-correct' : 'vr-fb-wrong');
  fb.innerHTML = \`\${isCorrect?'✅':'❌'} <strong>\${isCorrect?'Točno!':'Pogrešno.'}</strong> \${item.exp_p}\`;
  
  ssAnswers.push({
    idx: ssIdx,
    tip: {given: ssTipGiven, correct: ssTipGiven === item.tip},
    vrsta: {given: ssVrstaGiven, correct: isCorrect}
  });
  
  document.getElementById('ss-next-wrap').style.display = 'block';
}

function ssNext(){
  ssIdx++;
  ssRender();
  setTimeout(() => {
    const ex = document.getElementById('ss-exercise');
    if(ex) ex.scrollIntoView({behavior:'smooth', block:'start'});
  }, 50);
}

function ssReset(){
  ssIdx = 0;
  ssScore = 0;
  ssMaxScore = 0;
  ssAnswers = [];
  document.getElementById('ss-result').style.display = 'none';
  ssRender();
}

function ssResult(){
  const out = document.getElementById('ss-exercise');
  const res = document.getElementById('ss-result');
  if(!out || !res) return;
  
  const total = ssMaxScore;
  const pct = total > 0 ? Math.round(ssScore / total * 100) : 0;
  
  let msg = '', emoji = '', color = '';
  if(pct >= 90){ msg = 'Izvrsno! Najteža sintaktička tema ti je u malom prstu. Spreman/na za maturu!'; emoji = '🏆'; color = 'var(--gold)'; }
  else if(pct >= 70){ msg = 'Dobro! Ovo je teška tema — pogledaj objašnjenja za pogreške.'; emoji = '🎯'; color = 'var(--green)'; }
  else if(pct >= 50){ msg = 'OK, treba još rada. Vrati se na tablicu veznika i ključne zamke iznad.'; emoji = '📚'; color = 'var(--bronze)'; }
  else { msg = 'Treba puno više učenja. Pažljivo prouči 6 nezavisnih + 12 zavisnih + sve tri zamke.'; emoji = '💪'; color = 'var(--red)'; }
  
  if(pct === 100 && typeof addXP === 'function') addXP(100, 'Sintaktički ekspert!');
  if(pct >= 80 && typeof recordTabVisit === 'function') recordTabVisit(3);
  
  try {
    const hist = JSON.parse(localStorage.getItem('mt.hrv.h23.ss_hist') || '[]');
    hist.push({score:ssScore, total, pct, date: new Date().toISOString()});
    localStorage.setItem('mt.hrv.h23.ss_hist', JSON.stringify(hist.slice(-10)));
  } catch(e){}
  
  // Wrong answers detail
  const wrong = ssAnswers.filter(a => !a.tip.correct || (a.vrsta && !a.vrsta.correct));
  const wrongHtml = wrong.length > 0 ? \`
    <details class="rc-detail-wrong" style="margin-top:14px;text-align:left">
      <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--red);font-size:13px">
        ❌ Pogledaj svoje pogreške (\${wrong.length}) ▾
      </summary>
      <div style="margin-top:10px;display:grid;gap:8px">
        \${wrong.map(a => {
          const item = SS_SENTENCES[a.idx];
          let errors = [];
          if(!a.tip.correct) errors.push(\`<div>• Tip — tvoj: <strong style="color:var(--red)">\${a.tip.given}</strong>, točno: <strong style="color:var(--green)">\${item.tip}</strong>. \${item.exp_t}</div>\`);
          if(a.vrsta && !a.vrsta.correct) errors.push(\`<div>• Vrsta — tvoja: <strong style="color:var(--red)">\${a.vrsta.given}</strong>, točno: <strong style="color:var(--green)">\${item.vrsta}</strong>. \${item.exp_p}</div>\`);
          return \`
            <div style="padding:10px;background:var(--bg);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1);font-size:12.5px">
              <div style="font-style:italic;color:var(--t1);margin-bottom:6px">"\${item.text}"</div>
              <div style="color:var(--t2);font-size:12px;line-height:1.6">\${errors.join('')}</div>
            </div>
          \`;
        }).join('')}
      </div>
    </details>
  \` : '';
  
  out.innerHTML = '';
  res.style.display = 'block';
  res.innerHTML = \`
    <div class="rc-result-card" style="border-left:3px solid \${color}">
      <div style="font-size:48px;margin-bottom:8px">\${emoji}</div>
      <div style="font-family:var(--display);font-size:22px;font-weight:700;color:var(--t1);margin-bottom:4px">
        Rezultat: \${ssScore} / \${total} <span style="color:\${color}">(\${pct}%)</span>
      </div>
      <div style="font-size:13px;color:var(--t2);margin-bottom:18px">\${msg}</div>
      
      <div class="rc-result-bar">
        <div class="rc-result-fill" style="width:\${pct}%;background:\${color}"></div>
      </div>
      
      \${wrongHtml}
      
      <div style="margin-top:18px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <button class="nb-btn primary" onclick="ssReset()">🔁 Ponovi vježbu</button>
        <button class="nb-btn" onclick="sw(4)">📚 Pojmovnik →</button>
      </div>
    </div>
  \`;
}

function ssInit(){
  if(document.getElementById('ss-exercise')){
    ssRender();
  }
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', () => setTimeout(ssInit, 100));
} else {
  setTimeout(ssInit, 200);
}



// ═══════════════════════════════════
// TAB 5 · SINTAKTIČKI PARSER
// ═══════════════════════════════════

// ───────────────────────────────────
// LEXICONS
// ───────────────────────────────────

// Veznici po vrstama
const PARSER_VEZNICI = {
  // Nezavisni
  'sastavna':      ['i','pa','te','ni','niti'],
  'rastavna':      ['ili'],
  'suprotna':      ['a','ali','no','nego','već'],
  'zakljucna':     ['zato','stoga','dakle','prema tome'],
  'izuzetna':      ['samo','jedino','osim'],
  'objasnidbena':  ['naime','to jest','tj','i to'],
  // Zavisni
  'subjektna':     ['tko','što (=tko/što)'],  // — kontekstualno
  'predikatna':    ['kakav','kakva','kakvo','kakvi'],  // rijetko
  'objektna':      ['da','što','kako','gdje','tko','li'],
  'atributna':     ['koji','koja','koje','koju','kojeg','kojem','kojom','kojoj','kojima','kojima','čiji','čija','čije','čiju','čiji'],
  'mjesna':        ['gdje','kamo','kuda','odakle','dokle'],
  'vremenska':     ['kad','kada','dok','otkad','čim','dok god','prije nego','nakon što'],
  'nacinska':      ['kao','kao da','kao što','poput'],
  'uzrocna':       ['jer','zato što','budući da','pošto'],
  'posljedicna':   ['toliko da','tako da','te'],  // discriminator: toliko/tako pred
  'namjerna':      ['da (cilj)','kako bi','da bi'],  // s kondicionalom
  'pogodbena':     ['ako','kad bi','da (uvjet)','ukoliko'],
  'dopusna':       ['iako','premda','mada','makar','i ako','ma koliko']
};

// Reverse lookup — veznik → vrsta(e)
const VEZNIK_TO_TYPE = {
  // Nezavisni
  'i':'sastavna','pa':'sastavna','te':'sastavna','ni':'sastavna','niti':'sastavna',
  'ili':'rastavna',
  'a':'suprotna','ali':'suprotna','no':'suprotna','nego':'suprotna','već':'suprotna',
  'zato':'zakljucna','stoga':'zakljucna','dakle':'zakljucna',
  'samo':'izuzetna','jedino':'izuzetna',
  'naime':'objasnidbena',
  // Zavisni — neki imaju multiple types
  'jer':['uzrocna'],
  'da':['objektna','namjerna','posljedicna','pogodbena','subjektna'],
  'ako':['pogodbena'],
  'kad':['vremenska','pogodbena'],
  'kada':['vremenska'],
  'dok':['vremenska'],
  'iako':['dopusna'],
  'premda':['dopusna'],
  'mada':['dopusna'],
  'makar':['dopusna'],
  'kao':['nacinska'],
  'tko':['subjektna','objektna'],
  'što':['objektna','subjektna','atributna','uzrocna'],
  'kako':['nacinska','objektna','uzrocna'],
  'gdje':['mjesna','objektna'],
  'kamo':['mjesna'],
  'kuda':['mjesna'],
  'koji':['atributna'],'koja':['atributna'],'koje':['atributna'],'koju':['atributna'],
  'kojeg':['atributna'],'kojem':['atributna'],'kojom':['atributna'],'kojoj':['atributna'],
  'čiji':['atributna'],'čija':['atributna'],'čije':['atributna'],
  'kakav':['predikatna','atributna'],'kakva':['predikatna'],
  'budući':['uzrocna'], // budući da
  'čim':['vremenska'],
  'otkad':['vremenska']
};

// Klasifikacija veznika kao nezavisni vs zavisni
const NEZAVISNI = new Set(['i','pa','te','ni','niti','ili','a','ali','no','nego','već','zato','stoga','dakle','samo','jedino','naime']);
const ZAVISNI = new Set(['jer','da','ako','kad','kada','dok','iako','premda','mada','makar','kao','tko','što','kako','gdje','kamo','kuda','čim','otkad','budući','koji','koja','koje','koju','kojeg','kojem','kojom','kojoj','kojima','čiji','čija','čije','kakav','kakva','kakvo']);

// Prijedlozi (za detekciju priložnih oznaka)
const PRIJEDLOZI = new Set(['u','na','pod','nad','pred','za','kroz','mimo','oko','o','od','do','iz','bez','s','sa','k','ka','prema','među','niz','uz','po','nakon','prije','tijekom','radi','zbog','protiv','umjesto','poput','iznad','ispod','ispred','iza','blizu','daleko','nasuprot','usprkos']);

// Pomoćni i kopulativni glagoli
const GLAGOLI_KOPULA = new Set(['je','su','sam','si','smo','ste','jesam','jesi','jest','jesmo','jeste','jesu','bio','bila','bilo','bili','bile','bila','bit','biti','bude','budem','budeš','budemo','budete','budu','budi','bih','bi','bismo','biste','nije','nisu','nisam','nisi','nismo','niste']);

const GLAGOLI_HTJETI = new Set(['hoću','hoćeš','hoće','hoćemo','hoćete','ću','ćeš','će','ćemo','ćete','neću','nećeš','neće','htio','htjela','htjeli','htjele']);

// Lični glagoli — sufiksi za prepoznavanje
const VERB_ENDINGS_PREZENT = ['am','aš','a','amo','ate','aju','em','eš','e','emo','ete','eju','im','iš','i','imo','ite','iju'];
const VERB_ENDINGS_PERFEKT = ['ao','la','lo','li','le','la']; // glagolski pridjev radni

// Imenske riječi sufikse (heuristika za N — subjekt)
const IMENICA_SUFFIX_N = ['a','o','e','i']; // većina imenica završava ovima u N

// ───────────────────────────────────
// TOKENIZATION
// ───────────────────────────────────
function parserTokenize(text){
  // Normalize — lowercase za analizu, ali sačuvaj original za prikaz
  const cleaned = text.trim().replace(/[\\u201C\\u201D„""]/g, '"').replace(/[\\u2018\\u2019]/g, "'");
  
  // Split keeping punctuation as separate tokens
  const tokens = [];
  const regex = /([a-zčćđšžA-ZČĆĐŠŽ0-9'-]+)|([.,!?;:])/g;
  let m;
  while ((m = regex.exec(cleaned)) !== null) {
    if (m[1]) tokens.push({type:'word', text:m[1], lower:m[1].toLowerCase(), idx:tokens.length});
    if (m[2]) tokens.push({type:'punct', text:m[2], idx:tokens.length});
  }
  return tokens;
}

// ───────────────────────────────────
// VEZNIK DETECTION
// ───────────────────────────────────
function parserDetectVeznici(tokens){
  const veznici = [];
  for(let i = 0; i < tokens.length; i++){
    const t = tokens[i];
    if(t.type !== 'word') continue;
    
    // Multi-word veznici (do 3 riječi)
    const next1 = i+2 < tokens.length ? tokens[i+2] : null;
    const next2 = i+4 < tokens.length ? tokens[i+4] : null;
    
    // Try 3-word phrases
    if(i+2 < tokens.length){
      // Tokens at positions [i], [i+1], [i+2] (could be punct between words)
      const candidate = [i, i+1, i+2].filter(idx => tokens[idx]?.type === 'word').slice(0, 3);
      if(candidate.length >= 2){
        const wordTokens = candidate.map(idx => tokens[idx].lower);
        const phrase2 = wordTokens.slice(0, 2).join(' ');
        const phrase3 = wordTokens.length >= 3 ? wordTokens.slice(0, 3).join(' ') : null;
        
        // 3-word phrases
        if(phrase3){
          if(phrase3 === 'prije nego što' || phrase3 === 'nakon što je'){
            veznici.push({pos:i, end:candidate[2]+1, text:phrase3, classification:'zavisni', vrsta:'vremenska'});
            i = candidate[2]; continue;
          }
          if(phrase3 === 'osim što je' || phrase3 === 'osim što su'){
            veznici.push({pos:i, end:candidate[2]+1, text:phrase3, classification:'nezavisni', vrsta:'izuzetna'});
            i = candidate[2]; continue;
          }
        }
      }
    }
    
    // Try 2-word
    if(next1 && next1.type === 'word'){
      const phrase = \`\${t.lower} \${next1.lower}\`;
      if(phrase === 'zato što'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'uzrocna'}); i += 2; continue; }
      if(phrase === 'budući da'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'uzrocna'}); i += 2; continue; }
      if(phrase === 'kao da'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'nacinska'}); i += 2; continue; }
      if(phrase === 'kao što'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'nacinska'}); i += 2; continue; }
      if(phrase === 'kad bi'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'pogodbena'}); i += 2; continue; }
      if(phrase === 'da bi' || phrase === 'kako bi'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'namjerna'}); i += 2; continue; }
      if(phrase === 'prema tome'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'nezavisni', vrsta:'zakljucna'}); i += 2; continue; }
      if(phrase === 'to jest' || phrase === 'i to'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'nezavisni', vrsta:'objasnidbena'}); i += 2; continue; }
      if(phrase === 'ma koliko' || phrase === 'i ako'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'dopusna'}); i += 2; continue; }
      if(phrase === 'samo što' || phrase === 'osim što'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'nezavisni', vrsta:'izuzetna'}); i += 2; continue; }
      if(phrase === 'nakon što' || phrase === 'prije nego'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'vremenska'}); i += 2; continue; }
      if(phrase === 'dok god' || phrase === 'sve dok'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'vremenska'}); i += 2; continue; }
    }
    
    // Single word
    const w = t.lower;
    if(NEZAVISNI.has(w)){
      // Skip if it's the first word (could be just sentence start, e.g. "I" in "I tako")
      if(i === 0) continue;
      // Skip "i" / "pa" / "te" / "ili" if preceded by ( or no comma — heuristic
      const prevPunct = i > 0 && tokens[i-1].type === 'punct' ? tokens[i-1].text : null;
      veznici.push({pos:i, end:i+1, text:w, classification:'nezavisni', vrsta:VEZNIK_TO_TYPE[w] || 'sastavna', precededByComma: prevPunct === ','});
    } else if(ZAVISNI.has(w)){
      const types = VEZNIK_TO_TYPE[w];
      let vrsta = Array.isArray(types) ? types[0] : types || 'objektna';
      
      // Disambiguation for ambiguous veznici
      if(w === 'da'){
        // Look for "toliko/tako" before → posljedična
        const prevWords = tokens.slice(Math.max(0,i-5), i).filter(x => x.type === 'word').map(x => x.lower);
        if(prevWords.includes('toliko') || prevWords.includes('tako')) vrsta = 'posljedicna';
        // Look for "bih/bi/bismo" after → namjerna or pogodbena
        else {
          const nextWords = tokens.slice(i+1, Math.min(tokens.length, i+5)).filter(x => x.type === 'word').map(x => x.lower);
          if(nextWords.some(w2 => ['bih','bi','bismo','biste'].includes(w2))){
            // Position decides: "Da" at start = pogodbena. Inside = namjerna.
            vrsta = i === 0 ? 'pogodbena' : 'namjerna';
          }
          // Default after "vjerujem/mislim/znam/kažem/pitam/vidim/čujem/reci..." = objektna
          else if(prevWords.length > 0){
            const verbBefore = prevWords[prevWords.length-1];
            if(['vjerujem','mislim','znam','kažem','rekao','rekla','pitam','vidim','čujem','reci','tvrdim','znaj','kaži','pitao','znao'].some(v => verbBefore.startsWith(v.slice(0,4)))) vrsta = 'objektna';
            else vrsta = 'objektna'; // safest default
          }
        }
      }
      else if(w === 'što'){
        // After verbs like "znati/vjerovati" → objektna
        // After noun → atributna (rare with "što")
        // After "sretna/tužna sam" → uzročna
        const prevWords = tokens.slice(Math.max(0,i-3), i).filter(x => x.type === 'word').map(x => x.lower);
        if(prevWords.some(w2 => ['sretan','sretna','tužan','tužna','ljut','ljuta','žao','drago'].includes(w2))) vrsta = 'uzrocna';
      }
      else if(w === 'kako'){
        // Default: načinska. After verbs of speaking/perception → objektna.
        const prevWords = tokens.slice(Math.max(0,i-3), i).filter(x => x.type === 'word').map(x => x.lower);
        if(prevWords.some(w2 => ['pitao','znam','vidim','čujem','reci','znaj'].includes(w2))) vrsta = 'objektna';
      }
      else if(w === 'gdje'){
        // After verbs of perception → objektna
        const prevWords = tokens.slice(Math.max(0,i-3), i).filter(x => x.type === 'word').map(x => x.lower);
        if(prevWords.some(w2 => ['pitao','znam','reci','znaj'].includes(w2))) vrsta = 'objektna';
      }
      else if(w === 'tko'){
        // At start = subjektna. After verb of speaking = objektna.
        if(i === 0) vrsta = 'subjektna';
      }
      else if(w === 'kad' || w === 'kada'){
        // Mostly vremenska. Sometimes pogodbena uz kondicional.
        const nextWords = tokens.slice(i+1, Math.min(tokens.length, i+5)).filter(x => x.type === 'word').map(x => x.lower);
        if(nextWords.some(w2 => ['bih','bi','bismo'].includes(w2))) vrsta = 'pogodbena';
      }
      
      veznici.push({pos:i, end:i+1, text:w, classification:'zavisni', vrsta:vrsta});
    }
  }
  return veznici;
}

// ───────────────────────────────────
// PREDIKAT DETECTION
// ───────────────────────────────────
function isVerbForm(token){
  if(token.type !== 'word') return false;
  const w = token.lower;
  // Pomoćni
  if(GLAGOLI_KOPULA.has(w) || GLAGOLI_HTJETI.has(w)) return true;
  // Glagolski pridjev radni
  if(/[aeio][olm][ao]?$/.test(w) && w.length >= 4) {
    const ends = ['ao','la','lo','li','le','no','na'];
    if(ends.some(e => w.endsWith(e))) return true;
  }
  // Prezent endings
  const endings = ['am','aš','amo','ate','aju','em','eš','emo','ete','eju','im','iš','imo','ite','iju'];
  for(const e of endings){
    if(w.endsWith(e) && w.length >= e.length + 2) return true;
  }
  // Imperativ — često završava na -j, -i, -te, -mo
  if(/[jit][eo]?$/.test(w) && w.length >= 3 && !w.endsWith('e')) return true;
  return false;
}

function parserDetectPredicates(tokens){
  const preds = [];
  const seen = new Set();
  
  for(let i = 0; i < tokens.length; i++){
    if(tokens[i].type !== 'word') continue;
    const w = tokens[i].lower;
    
    // Check for compound predicate "je + pridjev radni" / "ću + infinitiv" etc
    if(GLAGOLI_KOPULA.has(w) || GLAGOLI_HTJETI.has(w)){
      // Look for next verb form (pridjev radni)
      let j = i + 1;
      while(j < tokens.length && j < i + 4 && tokens[j].type === 'word'){
        const w2 = tokens[j].lower;
        if(['ao','la','lo','li','le','no','na','ti'].some(e => w2.endsWith(e)) && w2.length >= 3){
          preds.push({pos:i, end:j+1, text:tokens[i].text + ' ' + tokens[j].text, type:'compound'});
          seen.add(i); seen.add(j);
          i = j; // skip
          break;
        }
        j++;
      }
      if(seen.has(i)) continue;
      
      // Standalone kopula = imenski predikat (start)
      preds.push({pos:i, end:i+1, text:tokens[i].text, type:'kopula'});
      seen.add(i);
    } else if(isVerbForm(tokens[i]) && !seen.has(i)){
      preds.push({pos:i, end:i+1, text:tokens[i].text, type:'glagolski'});
      seen.add(i);
    }
  }
  return preds;
}

// ───────────────────────────────────
// SUBJEKT / OBJEKT detection (heuristic)
// ───────────────────────────────────
function parserDetectMembers(tokens, predicates){
  const members = []; // {pos, end, type, text, conf}
  
  // Strategy: For each predicate, look for nearby N (subject) before it
  // and A (object) after it.
  
  // Find candidate nominatives — words that look like nouns/proper nouns
  // Heuristic: capitalized in middle = proper noun (subject candidate)
  for(let i = 0; i < tokens.length; i++){
    if(tokens[i].type !== 'word') continue;
    const t = tokens[i];
    const w = t.text;
    const wl = t.lower;
    
    // Skip predicates and veznici
    if(predicates.some(p => p.pos === i)) continue;
    if(NEZAVISNI.has(wl) || ZAVISNI.has(wl)) continue;
    if(PRIJEDLOZI.has(wl)) continue;
    if(GLAGOLI_KOPULA.has(wl) || GLAGOLI_HTJETI.has(wl)) continue;
    
    // Check capitalization — proper noun (likely subject)
    const isProper = /^[A-ZČĆĐŠŽ]/.test(w) && i > 0 && tokens[i-1].type !== 'punct';
    const isStartCapital = /^[A-ZČĆĐŠŽ]/.test(w) && i === 0;
    
    // Check preposition before — if so, it's part of PO or neizravni objekt
    const prevToken = i > 0 ? tokens[i-1] : null;
    const hasPrep = prevToken && prevToken.type === 'word' && PRIJEDLOZI.has(prevToken.lower);
    
    if(hasPrep){
      // It's part of a prepositional phrase — likely PO (priložna oznaka)
      members.push({pos:i-1, end:i+1, type:'priložna oznaka', text: prevToken.text + ' ' + w, conf:0.7});
    }
  }
  
  // Find subject candidates: noun-like word in N before/at predicate, NOT after preposition
  predicates.forEach((pred, predIdx) => {
    // Look for subject candidate before this predicate (within 3 words)
    for(let i = Math.max(0, pred.pos - 3); i < pred.pos; i++){
      if(tokens[i].type !== 'word') continue;
      const t = tokens[i];
      const wl = t.lower;
      
      // Skip if already classified or not eligible
      if(predicates.some(p => p.pos === i)) continue;
      if(NEZAVISNI.has(wl) || ZAVISNI.has(wl) || PRIJEDLOZI.has(wl)) continue;
      
      // Check no preposition before
      const prevToken = i > 0 ? tokens[i-1] : null;
      const hasPrep = prevToken && prevToken.type === 'word' && PRIJEDLOZI.has(prevToken.lower);
      if(hasPrep) continue;
      
      // Check if it's already in members
      if(members.some(m => m.pos === i)) continue;
      
      // Heuristics for subject — look like noun/zamjenica
      const isProper = /^[A-ZČĆĐŠŽ]/.test(t.text);
      const looksNoun = /[aeoi]$/.test(wl) && wl.length >= 3;
      const isPersonalPron = ['ja','ti','on','ona','ono','mi','vi','oni','one','ona'].includes(wl);
      
      if(isProper || isPersonalPron || looksNoun){
        members.push({pos:i, end:i+1, type:'subjekt', text:t.text, conf: isProper || isPersonalPron ? 0.85 : 0.6, predRef:predIdx});
        break;
      }
    }
    
    // Look for object after predicate
    for(let i = pred.end; i < Math.min(tokens.length, pred.end + 4); i++){
      if(tokens[i].type !== 'word') continue;
      const t = tokens[i];
      const wl = t.lower;
      
      if(predicates.some(p => p.pos === i)) continue;
      if(NEZAVISNI.has(wl) || ZAVISNI.has(wl)) continue;
      if(PRIJEDLOZI.has(wl)) continue;
      if(members.some(m => m.pos === i)) continue;
      
      // Check if preceded by preposition (then PO)
      const prevToken = i > 0 ? tokens[i-1] : null;
      if(prevToken && prevToken.type === 'word' && PRIJEDLOZI.has(prevToken.lower)) continue;
      
      // Heuristic — accusative ending or noun-like
      const looksAccusative = /[uo]$/.test(wl) || /e$/.test(wl);
      const looksNoun = /[aeoi]$/.test(wl) && wl.length >= 3;
      
      if(looksAccusative || looksNoun){
        members.push({pos:i, end:i+1, type:'objekt', text:t.text, conf: looksAccusative ? 0.7 : 0.5, predRef:predIdx});
        break;
      }
    }
  });
  
  // Detect adjectives = atributi (positioned right before nouns we identified)
  members.forEach(m => {
    if(m.type === 'subjekt' || m.type === 'objekt'){
      // Check word right before
      const prev = m.pos - 1;
      if(prev >= 0 && tokens[prev].type === 'word'){
        const t = tokens[prev];
        const wl = t.lower;
        if(NEZAVISNI.has(wl) || ZAVISNI.has(wl) || PRIJEDLOZI.has(wl)) return;
        if(predicates.some(p => p.pos === prev)) return;
        if(members.some(m2 => m2.pos === prev)) return;
        
        // Heuristic for adjective: ends in adjective endings, lowercase
        const adjEndings = ['i','a','o','e','u','om','og','oj','im','ima'];
        if(adjEndings.some(e => wl.endsWith(e)) && wl.length >= 4 && !/^[A-ZČĆĐŠŽ]/.test(t.text)){
          members.push({pos:prev, end:prev+1, type:'atribut', text:t.text, conf:0.6});
        }
      }
    }
  });
  
  return members;
}

// ───────────────────────────────────
// SENTENCE TYPE CLASSIFICATION
// ───────────────────────────────────
function parserClassifyType(tokens, predicates, veznici){
  const numPred = predicates.length;
  
  // Confidence base
  let conf = 0.8;
  
  if(numPred === 0){
    return {type:'nekompletno', detail:'Nije pronađen predikat — možda nepotpuna rečenica.', conf:0.3};
  }
  
  if(numPred === 1){
    return {type:'prosta', detail:\`1 predikat (\${predicates[0].text}) → prosta rečenica.\`, conf:0.85};
  }
  
  // Multiple predicates — check veznici
  if(veznici.length === 0){
    return {type:'asindetska', detail:\`\${numPred} predikata bez veznika — asindetska (povezana zarezima).\`, conf:0.7};
  }
  
  const firstVeznik = veznici[0];
  if(firstVeznik.classification === 'zavisni'){
    return {
      type:'zavisno složena',
      vrsta:firstVeznik.vrsta,
      veznik:firstVeznik.text,
      detail:\`\${numPred} predikata + zavisni veznik „\${firstVeznik.text}" → zavisno složena (\${firstVeznik.vrsta}).\`,
      conf:0.85
    };
  } else {
    return {
      type:'nezavisno složena',
      vrsta:firstVeznik.vrsta,
      veznik:firstVeznik.text,
      detail:\`\${numPred} predikata + nezavisni veznik „\${firstVeznik.text}" → nezavisno složena (\${firstVeznik.vrsta}).\`,
      conf:0.85
    };
  }
}

// ───────────────────────────────────
// PRIOPĆAJNA SVRHA
// ───────────────────────────────────
function parserDetectSvrha(tokens, text){
  const lastChar = text.trim().slice(-1);
  const lower = text.toLowerCase();
  
  if(lastChar === '?') return {tip:'upitna', detail:'Završava upitnikom.'};
  if(lastChar === '!'){
    // Imperatives often end with !
    if(/\\b(idi|dođi|piši|čitaj|reci|zatvori|otvori|sjedni|stani|dosta|prestani)\\b/i.test(lower)) return {tip:'zapovjedna', detail:'Glagol u imperativu + uskličnik.'};
    if(/\\b(neka|sretan|dobar dan)\\b/i.test(lower)) return {tip:'želja (optativna)', detail:'Izraz želje s uskličnikom.'};
    return {tip:'usklična', detail:'Završava uskličnikom (jaka emocija).'};
  }
  // Imperative even without ! 
  if(/^(idi|dođi|piši|čitaj|reci|zatvori|otvori)\\b/i.test(lower)) return {tip:'zapovjedna', detail:'Glagol u imperativu na početku.'};
  
  return {tip:'izjavna', detail:'Završava točkom — iznosi obavijest.'};
}

// ───────────────────────────────────
// MAIN PARSE FUNCTION
// ───────────────────────────────────
function parserParse(text){
  if(!text || text.trim().length < 2) return null;
  
  const tokens = parserTokenize(text);
  if(tokens.length === 0) return null;
  
  const veznici = parserDetectVeznici(tokens);
  const predicates = parserDetectPredicates(tokens);
  const members = parserDetectMembers(tokens, predicates);
  const sentenceType = parserClassifyType(tokens, predicates, veznici);
  const svrha = parserDetectSvrha(tokens, text);
  
  // Calculate overall confidence
  let conf = sentenceType.conf || 0.7;
  if(members.length === 0) conf -= 0.2;
  if(predicates.length === 0) conf -= 0.3;
  conf = Math.max(0.3, Math.min(1, conf));
  
  return {
    text, tokens, veznici, predicates, members, sentenceType, svrha,
    confidence: conf
  };
}

// ───────────────────────────────────
// RENDERING
// ───────────────────────────────────
const MEMBER_COLORS = {
  'subjekt': 'var(--blue)',
  'predikat': 'var(--red)',
  'objekt': 'var(--green)',
  'atribut': 'var(--bronze)',
  'apozicija': '#9b59b6',
  'priložna oznaka': '#e67e22'
};

const MEMBER_SHORT = {
  'subjekt': 'S',
  'predikat': 'P',
  'objekt': 'O',
  'atribut': 'A',
  'apozicija': 'Ap',
  'priložna oznaka': 'P.O.'
};

function parserRenderTokens(result){
  // Build annotated sentence
  return result.tokens.map((t, i) => {
    if(t.type === 'punct') return \`<span class="prs-punct">\${t.text}</span>\`;
    
    // Find which group this token belongs to
    const member = result.members.find(m => m.pos <= i && i < m.end);
    const pred = result.predicates.find(p => p.pos <= i && i < p.end);
    const veznik = result.veznici.find(v => v.pos <= i && i < v.end);
    
    if(member){
      const color = MEMBER_COLORS[member.type] || 'var(--t1)';
      return \`<span class="prs-tok prs-member" style="--mc:\${color}" data-type="\${member.type}" title="\${member.type}">\${t.text}</span>\`;
    }
    if(pred){
      return \`<span class="prs-tok prs-pred" data-type="predikat" title="predikat (\${pred.type})">\${t.text}</span>\`;
    }
    if(veznik){
      return \`<span class="prs-tok prs-veznik" data-type="veznik" title="\${veznik.classification} veznik · \${veznik.vrsta||''}">\${t.text}</span>\`;
    }
    return \`<span class="prs-tok-plain">\${t.text}</span>\`;
  }).join(' ').replace(/\\s+([.,!?;:])/g, '$1');
}

function parserRenderTree(result){
  // Build SVG tree visualization
  // Root: sentence type
  // Branches: predicate(s), and under each predicate: subject, object, etc.
  
  const w = 600;
  const padX = 30, padY = 20;
  const rootY = 40;
  const predY = 130;
  const memberY = 230;
  
  const numPred = result.predicates.length;
  const usableW = w - 2 * padX;
  
  let svg = \`<svg viewBox="0 0 \${w} 320" xmlns="http://www.w3.org/2000/svg" class="prs-tree-svg">\`;
  
  // Root
  svg += \`<g><rect x="\${w/2 - 90}" y="\${rootY - 18}" width="180" height="32" rx="6" fill="rgba(233,180,70,.15)" stroke="var(--gold)" stroke-width="1.5"/>\`;
  svg += \`<text x="\${w/2}" y="\${rootY + 3}" text-anchor="middle" fill="var(--gold)" font-family="var(--mono)" font-size="11" font-weight="700">\${(result.sentenceType.type||'?').toUpperCase()}</text></g>\`;
  
  if(numPred === 0){
    svg += \`<text x="\${w/2}" y="\${predY + 20}" text-anchor="middle" fill="var(--t3)" font-family="var(--mono)" font-size="11">nema predikata</text>\`;
    svg += \`</svg>\`;
    return svg;
  }
  
  // Predicates (one or multiple)
  const predX = numPred === 1 ? [w/2] : Array.from({length:numPred}, (_,i) => padX + (usableW / (numPred-1 || 1)) * i);
  
  result.predicates.forEach((pred, idx) => {
    const x = predX[idx] || w/2;
    
    // Line from root to predicate
    svg += \`<line x1="\${w/2}" y1="\${rootY + 14}" x2="\${x}" y2="\${predY - 18}" stroke="var(--bd)" stroke-width="1.5"/>\`;
    
    // Predicate node
    const predText = pred.text.length > 18 ? pred.text.slice(0, 16) + '...' : pred.text;
    const boxW = Math.max(80, predText.length * 8 + 16);
    svg += \`<g><rect x="\${x - boxW/2}" y="\${predY - 18}" width="\${boxW}" height="32" rx="6" fill="rgba(224,82,82,.12)" stroke="var(--red)" stroke-width="1.5"/>\`;
    svg += \`<text x="\${x}" y="\${predY - 4}" text-anchor="middle" fill="var(--red)" font-family="var(--mono)" font-size="9" font-weight="700">P</text>\`;
    svg += \`<text x="\${x}" y="\${predY + 9}" text-anchor="middle" fill="var(--t1)" font-family="var(--display)" font-size="11" font-weight="600">\${predText}</text></g>\`;
    
    // Members linked to this predicate
    const linkedMembers = result.members.filter(m => m.predRef === idx || (m.predRef === undefined && idx === 0));
    if(linkedMembers.length > 0){
      const memberSpacing = 110;
      const totalW = (linkedMembers.length - 1) * memberSpacing;
      const startMX = x - totalW / 2;
      
      linkedMembers.forEach((mem, mIdx) => {
        const mx = startMX + mIdx * memberSpacing;
        const color = MEMBER_COLORS[mem.type] || 'var(--t1)';
        const short = MEMBER_SHORT[mem.type] || '?';
        const memText = mem.text.length > 14 ? mem.text.slice(0, 12) + '..' : mem.text;
        const memBoxW = Math.max(70, memText.length * 7 + 16);
        
        // Line
        svg += \`<line x1="\${x}" y1="\${predY + 14}" x2="\${mx}" y2="\${memberY - 18}" stroke="var(--bd)" stroke-width="1"/>\`;
        
        // Member node
        svg += \`<g><rect x="\${mx - memBoxW/2}" y="\${memberY - 18}" width="\${memBoxW}" height="32" rx="6" fill="rgba(255,255,255,.03)" stroke="\${color}" stroke-width="1.5"/>\`;
        svg += \`<text x="\${mx}" y="\${memberY - 4}" text-anchor="middle" fill="\${color}" font-family="var(--mono)" font-size="9" font-weight="700">\${short}</text>\`;
        svg += \`<text x="\${mx}" y="\${memberY + 9}" text-anchor="middle" fill="var(--t1)" font-family="var(--display)" font-size="10" font-weight="500">\${memText}</text></g>\`;
      });
    }
  });
  
  svg += \`</svg>\`;
  return svg;
}

function parserRenderResult(result){
  if(!result){
    return \`<div style="padding:18px;color:var(--t3);text-align:center;font-style:italic">Upiši rečenicu i klikni "Analiziraj" za rezultat.</div>\`;
  }
  
  const conf = result.confidence;
  const confColor = conf >= 0.8 ? 'var(--green)' : conf >= 0.6 ? 'var(--gold)' : 'var(--red)';
  const confLabel = conf >= 0.8 ? 'visoka' : conf >= 0.6 ? 'srednja' : 'niska';
  
  // Annotated sentence
  const annotated = parserRenderTokens(result);
  
  // Type info
  const typeInfo = result.sentenceType;
  const svrhaInfo = result.svrha;
  
  // Members list
  const memberList = result.members.map(m => 
    \`<span class="prs-chip" style="--mc:\${MEMBER_COLORS[m.type]||'var(--t3)'}"><span class="prs-chip-tag">\${MEMBER_SHORT[m.type]||'?'}</span> \${m.text}</span>\`
  ).join('');
  
  const predList = result.predicates.map(p => 
    \`<span class="prs-chip" style="--mc:var(--red)"><span class="prs-chip-tag">P</span> \${p.text}</span>\`
  ).join('');
  
  const veznikList = result.veznici.length > 0 ? result.veznici.map(v => 
    \`<span class="prs-chip" style="--mc:\${v.classification==='nezavisni' ? 'var(--gold)' : 'var(--bronze)'}"><span class="prs-chip-tag">\${v.classification[0].toUpperCase()}</span> „\${v.text}" → \${v.vrsta||'?'}</span>\`
  ).join('') : '<span style="color:var(--t3);font-size:12px;font-style:italic">Nema veznika.</span>';
  
  // Tree
  const tree = parserRenderTree(result);
  
  return \`
    <div class="prs-result">
      
      <!-- Annotated sentence -->
      <div class="prs-section">
        <div class="prs-section-lbl">📝 OZNAČENA REČENICA</div>
        <div class="prs-sentence">\${annotated}</div>
        <div class="prs-legend">
          <span class="prs-leg" style="--mc:var(--blue)"><span class="prs-leg-dot"></span>S subjekt</span>
          <span class="prs-leg" style="--mc:var(--red)"><span class="prs-leg-dot"></span>P predikat</span>
          <span class="prs-leg" style="--mc:var(--green)"><span class="prs-leg-dot"></span>O objekt</span>
          <span class="prs-leg" style="--mc:var(--bronze)"><span class="prs-leg-dot"></span>A atribut</span>
          <span class="prs-leg" style="--mc:#e67e22"><span class="prs-leg-dot"></span>P.O. priložna</span>
          <span class="prs-leg" style="--mc:var(--gold)"><span class="prs-leg-dot"></span>veznik</span>
        </div>
      </div>
      
      <!-- Type analysis -->
      <div class="prs-section">
        <div class="prs-section-lbl">📊 ANALIZA</div>
        <div class="prs-grid">
          <div class="prs-info-card">
            <div class="prs-info-lbl">PO SASTAVU</div>
            <div class="prs-info-val">\${typeInfo.type||'?'}\${typeInfo.vrsta ? \` · \${typeInfo.vrsta}\` : ''}</div>
            <div class="prs-info-detail">\${typeInfo.detail||''}</div>
          </div>
          <div class="prs-info-card">
            <div class="prs-info-lbl">PO SVRSI</div>
            <div class="prs-info-val">\${svrhaInfo.tip}</div>
            <div class="prs-info-detail">\${svrhaInfo.detail}</div>
          </div>
          <div class="prs-info-card">
            <div class="prs-info-lbl">CONFIDENCE</div>
            <div class="prs-info-val" style="color:\${confColor}">\${Math.round(conf*100)}% · \${confLabel}</div>
            <div class="prs-info-detail">\${conf >= 0.8 ? 'Pouzdano!' : conf >= 0.6 ? 'Provjeri ručno.' : 'Niska — koristi AI tutora.'}</div>
          </div>
        </div>
      </div>
      
      <!-- Members detected -->
      <div class="prs-section">
        <div class="prs-section-lbl">🏗️ REČENIČNI ČLANOVI</div>
        <div class="prs-chips-row">
          \${predList}
          \${memberList}
        </div>
      </div>
      
      <!-- Veznici -->
      <div class="prs-section">
        <div class="prs-section-lbl">🔗 VEZNICI</div>
        <div class="prs-chips-row">\${veznikList}</div>
      </div>
      
      <!-- Tree -->
      <div class="prs-section">
        <div class="prs-section-lbl">🌳 STABLO ZAVISNOSTI</div>
        <div class="prs-tree-wrap">\${tree}</div>
      </div>
      
      <!-- Disclaimer -->
      <div style="margin-top:14px;padding:10px 12px;background:rgba(74,144,217,.05);border-left:3px solid var(--blue);border-radius:var(--r1);font-size:11.5px;color:var(--t2);line-height:1.5">
        <strong style="color:var(--blue)">⚠ Napomena:</strong> Parser radi heuristički — nije savršen. Za teške rečenice koristi AI tutora ispod ili provjeri ručno koristeći Tab 1-3.
      </div>
      
    </div>
  \`;
}

function parserAnalyze(){
  const input = document.getElementById('parser-input');
  const output = document.getElementById('parser-output');
  if(!input || !output) return;
  
  const text = input.value.trim();
  if(!text){
    output.innerHTML = \`<div style="padding:14px;color:var(--red);text-align:center;font-size:13px">⚠ Upiši rečenicu prvo.</div>\`;
    return;
  }
  
  const result = parserParse(text);
  output.innerHTML = parserRenderResult(result);
  
  // Save history (XSS-safe)
  if(/^[a-zA-ZčćđšžČĆĐŠŽ0-9\\s.,!?;:'-]+$/.test(text) && text.length < 200){
    try {
      const hist = JSON.parse(localStorage.getItem('mt.hrv.h23.parser_hist') || '[]');
      hist.push({text, date: new Date().toISOString()});
      localStorage.setItem('mt.hrv.h23.parser_hist', JSON.stringify(hist.slice(-15)));
    } catch(e){}
  }
  
  if(typeof addXP === 'function') addXP(2);
  if(typeof recordTabVisit === 'function') recordTabVisit(5);
}

function parserExample(text){
  const input = document.getElementById('parser-input');
  if(input){
    input.value = text;
    parserAnalyze();
  }
}

const PARSER_RANDOM_SENTENCES = [
  // EASY (10) — proste i osnovne nezavisno složene
  {text:'Marija čita zanimljivu knjigu.', diff:'easy', type:'prosta'},
  {text:'Ivan voli svoju sestru.', diff:'easy', type:'prosta'},
  {text:'Pada kiša.', diff:'easy', type:'prosta'},
  {text:'Djeca trče po dvorištu.', diff:'easy', type:'prosta'},
  {text:'Učim hrvatski jezik svaki dan.', diff:'easy', type:'prosta'},
  {text:'Učim i pišem zadaću.', diff:'easy', type:'sastavna'},
  {text:'Učim, ali sam jako umoran.', diff:'easy', type:'suprotna'},
  {text:'Idem ili ostajem.', diff:'easy', type:'rastavna'},
  {text:'Pada kiša, zato ostajem doma.', diff:'easy', type:'zaključna'},
  {text:'Marija piše, a Ivan čita.', diff:'easy', type:'suprotna'},
  
  // MEDIUM (15) — zavisno složene, jasne
  {text:'Vjerujem da si u pravu.', diff:'medium', type:'objektna'},
  {text:'Učim jer želim položiti maturu.', diff:'medium', type:'uzročna'},
  {text:'Knjiga koju mi je dala je odlična.', diff:'medium', type:'atributna'},
  {text:'Ako budeš učio, položit ćeš.', diff:'medium', type:'pogodbena'},
  {text:'Iako sam umoran, idem na trening.', diff:'medium', type:'dopusna'},
  {text:'Dok si učio, ja sam spavao.', diff:'medium', type:'vremenska'},
  {text:'Sretna sam što si došao.', diff:'medium', type:'uzročna'},
  {text:'Idem gdje me vode.', diff:'medium', type:'mjesna'},
  {text:'Reci mi kako si.', diff:'medium', type:'objektna'},
  {text:'Učim da bih položio maturu.', diff:'medium', type:'namjerna'},
  {text:'Tko rano rani, dvije sreće grabi.', diff:'medium', type:'subjektna'},
  {text:'Marija, moja sestra, čita knjigu.', diff:'medium', type:'apozicija'},
  {text:'Pomažem svom prijatelju s domaćom zadaćom.', diff:'medium', type:'P.O.'},
  {text:'Mislim, dakle jesam.', diff:'medium', type:'zaključna'},
  {text:'Toliko sam umoran da spavam stojeći.', diff:'medium', type:'posljedična'},
  
  // HARD (10) — kompleksne, zamke
  {text:'Da imam novca, kupio bih auto.', diff:'hard', type:'pogodbena'},
  {text:'Misliš li da će padati kiša sutra?', diff:'hard', type:'objektna+upitna'},
  {text:'Ne znam tko je to rekao.', diff:'hard', type:'objektna'},
  {text:'Pala je kiša, vjetar je puhao, hladnoća je zavladala.', diff:'hard', type:'asindetska'},
  {text:'Sve znam, samo ovo poglavlje ne.', diff:'hard', type:'izuzetna'},
  {text:'Naime, situacija je drugačija nego što misliš.', diff:'hard', type:'objasnidbena'},
  {text:'Iako pada kiša, ostajemo na klupi gdje se uvijek nalazimo.', diff:'hard', type:'višestruka zavisna'},
  {text:'Tko rano rani, dvije sreće grabi, kažu naši stari.', diff:'hard', type:'višestruka'},
  {text:'Učim, jer želim položiti, da se mama ne mora brinuti.', diff:'hard', type:'lančana zavisna'},
  {text:'Marija, koja je moja najbolja prijateljica, sutra ide u Zagreb.', diff:'hard', type:'umetnuta atributna'},
  
  // EXPERT (5) — vrlo teške, klasici
  {text:'Tko bi rekao da će se to dogoditi.', diff:'expert', type:'subjektna+objektna'},
  {text:'Premda je oblačno, ljudi se kupaju, jer je vruće.', diff:'expert', type:'dopusna+uzročna'},
  {text:'Kupio sam knjigu o kojoj sam ti pričao.', diff:'expert', type:'atributna+P.O.'},
  {text:'Onaj koji puno radi, taj puno i postiže.', diff:'expert', type:'subjektna+atributna'},
  {text:'Govorim ti to, kako bi razumio, što sam htio reći.', diff:'expert', type:'namjerna+objektna'},
];

let parserRandomHistory = [];
let parserDiffFilter = 'all';

function parserRandom(){
  // Filter by current difficulty preference
  let pool = PARSER_RANDOM_SENTENCES;
  if(parserDiffFilter !== 'all'){
    pool = pool.filter(s => s.diff === parserDiffFilter);
  }
  if(pool.length === 0) pool = PARSER_RANDOM_SENTENCES;
  
  // Avoid recent (last 5) selections
  let candidates = pool.filter(s => !parserRandomHistory.includes(s.text));
  if(candidates.length === 0){
    parserRandomHistory = []; // reset if all used
    candidates = pool;
  }
  
  const picked = candidates[Math.floor(Math.random() * candidates.length)];
  parserRandomHistory.push(picked.text);
  if(parserRandomHistory.length > 5) parserRandomHistory.shift();
  
  parserExample(picked.text);
}

function parserSetDiff(diff, btn){
  parserDiffFilter = diff;
  document.querySelectorAll('.parser-diff-btn').forEach(b => b.classList.remove('on'));
  if(btn) btn.classList.add('on');
}

// ═══════════════════════════════════
// AI TUTOR — SINTAKSA
// ═══════════════════════════════════
async function aiAsk(){
  const inputEl = document.getElementById('ai-input');
  const answerEl = document.getElementById('ai-answer');
  const answerTextEl = document.getElementById('ai-answer-text');
  if(!inputEl || !answerEl || !answerTextEl) return;
  
  const question = inputEl.value.trim();
  if(!question){
    alert('Upiši pitanje prvo.');
    return;
  }
  
  // Show loading state
  answerEl.style.display = 'block';
  answerTextEl.innerHTML = \`<div style="text-align:center;padding:20px;color:var(--t3)"><div class="ai-spinner"></div> AI razmišlja...</div>\`;
  answerEl.scrollIntoView({behavior:'smooth', block:'nearest'});
  
  try {
    // 🚨 PRODUCTION TODO: Move this fetch to backend proxy (Next.js /api/ai-feedback)

    // Current: API call from browser would expose API key in production.

    // Plan: Next.js API route → Supabase tier check → proxy to Anthropic API → return result

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: \`Ti si AI profesor hrvatskog jezika specijaliziran za SINTAKSU za srednjoškolce pred maturom. Odgovaraj točno, jasno, s konkretnim primjerima na hrvatskom. Strukturiraj odgovor: 1) kratka definicija, 2) ključno pravilo, 3) 2-3 primjera s objašnjenjima, 4) trik za maturu. Maksimalno 200 riječi. Koristi <strong> za naglašavanje, <em> za primjere. Ne koristi markdown ## ili **. Specijalizacija: rečenični članovi (SPO-AAP), vrste rečenica, složene rečenice (nezavisno + zavisno, 6+12 vrsta), interpunkcija, veznici.\`,
        messages: [{role: "user", content: question}]
      })
    });
    
    if(!response.ok){
      throw new Error(\`API error: \${response.status}\`);
    }
    
    const data = await response.json();
    const text = data.content
      .filter(b => b.type === 'text')
      .map(b => b.text)
      .join('\\n');
    
    // Safe render — only allow specific HTML tags
    const safe = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/&lt;strong&gt;/g, '<strong>').replace(/&lt;\\/strong&gt;/g, '</strong>')
      .replace(/&lt;em&gt;/g, '<em>').replace(/&lt;\\/em&gt;/g, '</em>')
      .replace(/&lt;br\\s*\\/?&gt;/g, '<br>')
      .replace(/\\n/g, '<br>');
    
    answerTextEl.innerHTML = safe;
    
    // Save history
    try {
      const hist = JSON.parse(localStorage.getItem('mt.hrv.h23.ai_hist') || '[]');
      hist.push({q: question, a: text.slice(0, 500), date: new Date().toISOString()});
      localStorage.setItem('mt.hrv.h23.ai_hist', JSON.stringify(hist.slice(-10)));
    } catch(e){}
    
    if(typeof addXP === 'function') addXP(5, 'AI tutor pitanje');
    
  } catch(err){
    answerTextEl.innerHTML = \`<div style="color:var(--red);padding:12px;background:rgba(224,82,82,.06);border-left:3px solid var(--red);border-radius:var(--r1)">
      <strong>⚠ Greška:</strong> AI tutor trenutno nije dostupan. Pokušaj ponovo za nekoliko sekundi.<br>
      Ako problem potraje, koristi <strong>Sintaktički parser</strong> iznad ili se obrati na Maturiraj.hr help.
    </div>\`;
    console.error('AI error:', err);
  }
}

function aiAskExample(q){
  const input = document.getElementById('ai-input');
  if(input){
    input.value = q;
    aiAsk();
  }
}

function aiCopy(btn){
  const ans = document.getElementById('ai-answer-text');
  if(!ans) return;
  const text = ans.innerText.trim();
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = '✓ Kopirano';
    setTimeout(() => btn.textContent = orig, 1500);
  }).catch(() => alert('Greška pri kopiranju.'));
}

function aiShare(){
  const ans = document.getElementById('ai-answer-text');
  const input = document.getElementById('ai-input');
  if(!ans) return;
  
  const text = \`Pitanje: \${input?.value || ''}\\n\\nOdgovor (Maturiraj.hr H21 Sintaksa):\\n\${ans.innerText.trim()}\\n\\n→ maturiraj.hr/h21\`;
  
  if(navigator.share){
    navigator.share({
      title: 'Maturiraj.hr — H21 Sintaksa',
      text: text,
      url: 'https://maturiraj.hr/skripte/hrv/h21'
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text).then(() => {
      alert('Kopirano! Sad zalijepi u poruku/email.');
    });
  }
}

// Init
function parserInit(){
  if(document.getElementById('parser-output')){
    document.getElementById('parser-output').innerHTML = \`<div style="padding:18px;color:var(--t3);text-align:center;font-style:italic">Upiši rečenicu i klikni "🔬 Analiziraj" za rezultat.<br><br>Možeš i kliknuti jedan od primjera iznad.</div>\`;
  }
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', () => setTimeout(parserInit, 100));
} else {
  setTimeout(parserInit, 200);
}



// ═══════════════════════════════════
// TAB 4 · POJMOVNIK SINTAKSE
// ═══════════════════════════════════

let pojmActiveCat = 'all';
let pojmStars = {};

// Load stars from localStorage
try { pojmStars = JSON.parse(localStorage.getItem('mt.hrv.h23.cit_stars') || '{}'); } catch(e){ pojmStars = {}; }

const KAT_LABELS = {
  'clanovi': 'Rečenični članovi',
  'vrste': 'Vrste rečenica',
  'nezavisno': 'Nezavisno složene',
  'zavisno': 'Zavisno složene',
  'veznici': 'Veznici i interpunkcija',
  'sintagme': 'Sintagme i ostalo'
};

const KAT_COLORS = {
  razdoblja: 'var(--blue)',
  pisma: 'var(--green)',
  spomenici: 'var(--gold)',
  standardizacija: 'var(--bronze)',
  osobe: '#9b59b6',
  pojmovi: '#e67e22',
};

function pojmEscapeHtml(s){
  return String(s||'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function pojmHighlight(text, query){
  if(!query || query.length < 2) return text;
  const safe = pojmEscapeHtml(text);
  const safeQ = query.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&');
  return safe.replace(new RegExp('(' + safeQ + ')', 'gi'), '<mark style="background:rgba(233,180,70,.25);color:var(--gold);padding:0 2px;border-radius:3px">$1</mark>');
}

function pojm2Render(){
  const grid = document.getElementById('pojm-grid2');
  const countEl = document.getElementById('pojm-count');
  if(!grid || typeof POJM_DATA2 === 'undefined') return;
  
  const searchEl = document.getElementById('pojm-search');
  const query = (searchEl?.value || '').trim().toLowerCase();
  
  // Filter by category + search
  let filtered = POJM_DATA2.filter(p => {
    if(pojmActiveCat === 'star'){
      if(!p.star) return false;
    } else if(pojmActiveCat !== 'all'){
      if(p.kat !== pojmActiveCat) return false;
    }
    if(query){
      return p.term.toLowerCase().includes(query) || p.def.toLowerCase().includes(query);
    }
    return true;
  });
  
  if(countEl){
    const totalInCat = pojmActiveCat === 'all' ? POJM_DATA2.length :
                       pojmActiveCat === 'star' ? POJM_DATA2.filter(p => p.star).length :
                       POJM_DATA2.filter(p => p.kat === pojmActiveCat).length;
    countEl.textContent = query 
      ? \`\${filtered.length} od \${totalInCat} pojmova (filter: "\${query}")\`
      : \`\${filtered.length} pojmova\${pojmActiveCat !== 'all' ? ' u kategoriji "' + (KAT_LABELS[pojmActiveCat] || pojmActiveCat) + '"' : ''}\`;
  }
  
  if(filtered.length === 0){
    grid.innerHTML = \`<div style="grid-column:1/-1;padding:40px;text-align:center;color:var(--t3);font-style:italic">
      \${query ? \`Nema rezultata za "<strong>\${pojmEscapeHtml(query)}</strong>". Pokušaj kraću ili drugačiju riječ.\` : 'Nema pojmova u ovoj kategoriji.'}
    </div>\`;
    return;
  }
  
  grid.innerHTML = filtered.map((p, idx) => {
    const id = \`\${p.kat}_\${idx}\`;
    const isStar = pojmStars[p.term] ? true : false;
    const color = KAT_COLORS[p.kat] || 'var(--t3)';
    const term = pojmHighlight(p.term, query);
    const def = pojmHighlight(p.def, query);
    
    return \`
      <div class="pojm-card-h21" style="--pc:\${color}">
        <div class="pojm-card-head">
          <div class="pojm-card-meta">
            <span class="pojm-card-cat">\${KAT_LABELS[p.kat] || p.kat}</span>
            \${p.star ? '<span class="pojm-card-ncvvo">★ NCVVO</span>' : ''}
            \${p.tag ? \`<span class="pojm-card-tag">\${p.tag}</span>\` : ''}
          </div>
          <button class="pojm-card-star \${isStar ? 'on' : ''}" 
                  onclick="pojmToggleStar('\${pojmEscapeHtml(p.term).replace(/'/g, "\\\\'")}', this)" 
                  title="\${isStar ? 'Ukloni iz mojih' : 'Spremi za učenje'}">
            \${isStar ? '★' : '☆'}
          </button>
        </div>
        <div class="pojm-card-term">\${term}</div>
        <div class="pojm-card-def">\${def}</div>
      </div>
    \`;
  }).join('');
}

function pojmFilter(cat, btn){
  pojmActiveCat = cat;
  document.querySelectorAll('.pojm-filter').forEach(b => b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  pojm2Render();
}

function pojmClearSearch(){
  const inp = document.getElementById('pojm-search');
  if(inp){ inp.value = ''; pojm2Render(); }
}

function pojmToggleStar(term, btn){
  if(pojmStars[term]){
    delete pojmStars[term];
    btn.textContent = '☆';
    btn.classList.remove('on');
    btn.title = 'Spremi za učenje';
  } else {
    pojmStars[term] = true;
    btn.textContent = '★';
    btn.classList.add('on');
    btn.title = 'Ukloni iz mojih';
    if(typeof addXP === 'function') addXP(1);
  }
  try { localStorage.setItem('mt.hrv.h23.cit_stars', JSON.stringify(pojmStars)); } catch(e){}
}

// Init when Tab 4 loads
function pojmInit2(){
  if(document.getElementById('pojm-grid2')){
    pojm2Render();
  }
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', () => setTimeout(pojmInit2, 150));
} else {
  setTimeout(pojmInit2, 250);
}



// ═══════════════════════════════════
// TAB 7 · REFERENTNA TABLICA
// ═══════════════════════════════════
function refToggleScale(btn){
  const sheet = document.querySelector('.ref-sheet');
  if(!sheet) return;
  sheet.classList.toggle('zoomed');
  if(btn) btn.textContent = sheet.classList.contains('zoomed') ? '📐 Vrati' : '📐 Zoom';
}




// ═══════════════════════════════════
// PARSER · RECENT HISTORY
// ═══════════════════════════════════
function parserShowHistory(){
  let hist = [];
  try { hist = JSON.parse(localStorage.getItem('mt.hrv.h23.parser_hist') || '[]'); } catch(e){}
  
  const dropdown = document.getElementById('parser-history-list');
  if(!dropdown) return;
  
  if(hist.length === 0){
    dropdown.innerHTML = '<div class="parser-history-item" style="color:var(--t3);font-style:italic;cursor:default">Nema povijesti — analiziraj prvu rečenicu!</div>';
    dropdown.style.display = 'block';
    return;
  }
  
  // Show last 5, most recent first
  const recent = hist.slice(-5).reverse();
  dropdown.innerHTML = \`
    <div style="font-family:var(--mono);font-size:9.5px;letter-spacing:1.5px;color:var(--gold);margin-bottom:8px;display:flex;justify-content:space-between;align-items:center">
      <span>📜 ZADNJIH \${recent.length} ANALIZA</span>
      <button class="nb-btn" style="padding:2px 8px;font-size:9.5px" onclick="parserClearHistory()">🗑 Obriši</button>
    </div>
    \${recent.map(h => \`
      <div class="parser-history-item" onclick="parserExample('\${h.text.replace(/'/g, "\\\\'")}'); document.getElementById('parser-history-list').style.display='none'">
        <span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">\${h.text}</span>
        <span style="color:var(--t3);font-size:10px;flex-shrink:0;margin-left:10px">\${new Date(h.date).toLocaleDateString('hr-HR', {day:'numeric', month:'numeric'})}</span>
      </div>
    \`).join('')}
  \`;
  dropdown.style.display = 'block';
}

function parserHideHistory(){
  const dropdown = document.getElementById('parser-history-list');
  if(dropdown) dropdown.style.display = 'none';
}

function parserClearHistory(){
  if(confirm('Obrisati svu povijest analiza?')){
    try { localStorage.removeItem('mt.hrv.h23.parser_hist'); } catch(e){}
    parserShowHistory();
  }
}


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
  const _d0=document.getElementById('diag0');if(_d0)_d0.dataset.state='dismissed';
}
function diag0Start(){
  d0idx=0;d0score=0;
  const _d0=document.getElementById('diag0');if(_d0)_d0.dataset.state='quiz';
  d0Show();
}
function d0Show(){
  if(d0idx>=DIAG0_Q.length){diag0End();return;}
  const q=DIAG0_Q[d0idx];
  const fill=document.getElementById('d0fill');
  if(fill)fill.style.width=(((d0idx+1)/DIAG0_Q.length)*100)+'%';
  const num=document.getElementById('d0num');
  if(num)num.textContent=\`Pitanje \${d0idx+1} / \${DIAG0_Q.length}\`;
  const cnt=document.getElementById('d0correct');
  if(cnt)cnt.textContent=\`\${d0score} točno\`;
  const text=document.getElementById('d0text');
  if(text)text.textContent=q.q;
  const opts=document.getElementById('d0opts');
  if(!opts)return;
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
  const _d0=document.getElementById('diag0');if(_d0)_d0.dataset.state='result';
  const pct=Math.round(d0score/DIAG0_Q.length*100);
  let msg, btnTxt='Nastavi →', btnTab=0;
  if(pct>=80){
    msg='🌟 Odličan rezultat! Solidno znaš povijest jezika. Idi na <strong>Identifikaciju pisma</strong> da uvježbaš prepoznavanje glagoljice/ćirilice/latinice.';
    btnTxt='🎯 Identifikacija pisma →'; btnTab=5;
  } else if(pct>=60){
    msg='👍 Dobro znaš osnovu. Pojača Tab <strong>Pisma</strong> i <strong>Spomenici</strong> — Bašćanska ploča je TOP NCVVO tema.';
    btnTxt='✍ Pisma →'; btnTab=2;
  } else if(pct>=40){
    msg='📚 Imaš osnovu, ali ima rupa. Krećemo s <strong>Tab Razdoblja</strong> — kronologija razvoja jezika je ključna.';
    btnTxt='🕰 Razdoblja →'; btnTab=1;
  } else {
    msg='💪 Nije panika — povijest jezika ima logiku kroz timeline. Krećemo s <strong>Teorijom (Tab 0)</strong>. Najbitnije: Bašćanska ploča, glagoljica, narodni preporod, Bečki dogovor.';
    btnTxt='📖 Teorija →'; btnTab=0;
  }
  document.getElementById('d0rtitle').textContent=\`\${d0score} / \${DIAG0_Q.length} — \${pct}%\`;
  document.getElementById('d0rdesc').innerHTML=msg;
  const btn=document.getElementById('d0rbtn');
  if(btn){btn.textContent=btnTxt;btn.onclick=()=>sw(btnTab);}
}

function diag0Reset(){const _d0=document.getElementById('diag0');if(_d0)_d0.dataset.state='intro';}

/* ═══════════════════════════════════
   CITATNIK
═══════════════════════════════════ */
const CAT_COLORS={alegorija:'p-go',vjera:'p-t',judita:'p-br',holofern:'p-r',domoljublje:'p-g',stih:'p-pa'};
let citStars={};
try{citStars=JSON.parse(localStorage.getItem('mt.hrv.h23.cit_stars')||'{}')}catch(e){}
let citActive='sve';

function togStar(i,el){
  citStars[i]=!citStars[i];
  el.classList.toggle('starred',!!citStars[i]);
  try{localStorage.setItem('mt.hrv.h23.cit_stars',JSON.stringify(citStars))}catch(e){}
}

/* ═══════════════════════════════════
   POJMOVNIK
═══════════════════════════════════ */
let pojActive='sve';

/* ═══════════════════════════════════
   ESEJ ALAT
═══════════════════════════════════ */
function alTab(btn,pane){
  document.querySelectorAll('.alat-tab').forEach(b=>b.classList.remove('on'));
  document.querySelectorAll('.alat-pane').forEach(p=>p.classList.remove('on'));
  if(btn)btn.classList.add('on');
  const p=document.getElementById(pane);
  if(p)p.classList.add('on');
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
  const syl=words>0?Math.round(txt.replace(/[^aeiouAEIOUčšžđćČŠŽĐĆ]/g,'').length/Math.max(words,1)*10)/10:0;
  const we=document.getElementById('sc-words');
  if(we){const wn=we.querySelector('.wc-stat-num');if(wn)wn.textContent=words;}
  const le=document.getElementById('sc-lines');
  if(le){const ln=le.querySelector('.wc-stat-num');if(ln)ln.textContent=lines;}
  const se=document.getElementById('sc-syl');
  if(se){const sn=se.querySelector('.wc-stat-num');if(sn)sn.textContent=syl||'—';}
  try{localStorage.setItem('mt.hrv.h23.wc_text',txt);}catch(e){}
}
(function(){
  const ta=document.getElementById('scanner-in');
  if(!ta)return;
  try{const sv=localStorage.getItem('mt.hrv.h23.wc_text');if(sv){ta.value=sv;scannerUpdate();}}catch(e){}
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
  el.innerHTML=\`<div class="qz-start" style="text-align:center;padding:40px 24px;background:linear-gradient(135deg, rgba(233,180,70,.05) 0%, transparent 100%);border:1px solid var(--bd);border-radius:var(--r2)">
    <div style="font-size:56px;margin-bottom:16px">🧠</div>
    <h3 style="font-family:var(--display);font-size:22px;font-weight:700;color:var(--t1);margin:0 0 12px 0">25 pitanja · H20 Morfologija</h3>
    <p style="font-size:14px;line-height:1.6;color:var(--t2);max-width:560px;margin:0 auto 24px">Pitanja pokrivaju sve teme: <strong>vrste riječi, padeži, glagolski oblici, sklanjanje, tvorba</strong>. Svako pitanje daje <em>konkretan primjer</em> — analiziraj, prepoznaj, objasni. Na kraju dobivaš ocjenu i objašnjenja.</p>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:20px">
      <div style="padding:8px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:20px;font-family:var(--mono);font-size:11px;color:var(--t2)">📚 10 vrsta riječi</div>
      <div style="padding:8px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:20px;font-family:var(--mono);font-size:11px;color:var(--t2)">📐 7 padeža</div>
      <div style="padding:8px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:20px;font-family:var(--mono);font-size:11px;color:var(--t2)">⚙️ Glagolski oblici</div>
      <div style="padding:8px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:20px;font-family:var(--mono);font-size:11px;color:var(--t2)">🏗 Tvorba riječi</div>
    </div>
    <button class="nb-btn primary" style="font-size:14px;padding:14px 28px" onclick="qzStart()">Započni kviz →</button>
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
    <div style="text-align:right;margin-top:12px"><button class="nb-btn primary qz-next" id="qz-next" onclick="qzNext()" style="display:none">Sljedeće →</button></div>
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
  if(pct>=90){grade='ODLIČAN';msg='Spreman/na si za maturu iz H21 — razumiješ sve vrste riječi, padeže i glagolske oblike.';ico='🏆';}
  else if(pct>=75){grade='VRLO DOBAR';msg='Solidno znanje. Provjeri neispravne odgovore i ponovi Tab 1-4.';ico='💪';}
  else if(pct>=60){grade='DOBAR';msg='Ponoviti: rečenične članove, vrste rečenica i složene rečenice (vidi Tab 7 Referentna tablica).';ico='📚';}
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
      <button class="nb-btn primary" onclick="qzStart()">🔁 Ponovo</button>
      <button class="nb-btn" onclick="sw(4)">📚 Pojmovnik</button>
      <button class="nb-btn" onclick="sw(7)">📊 Referentna tablica</button>
    </div>
    \${wrongHtml}
  </div>\`;

  saveScoreHistory(qzScore,KVIZ_Q.length);
  markTab(6);
  if(typeof recordQuizResult === 'function') recordQuizResult(qzScore, KVIZ_Q.length);
}

/* ═══════════════════════════════════
   CHECKPOINT
═══════════════════════════════════ */
let CP_STATE={done:{}};
try{const s=localStorage.getItem('mt.hrv.h23.cp');if(s)CP_STATE=JSON.parse(s);}catch(e){}

const CP_HINTS=['Tab 0','Tab 0','Tab 0','Tab 1','Tab 1','Tab 1','Tab 1','Tab 2','Tab 3','Tab 3'];
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
  try{localStorage.setItem('mt.hrv.h23.cp',JSON.stringify(CP_STATE));}catch(e){}
  cpRender();
  if(typeof updateDashboard === 'function') updateDashboard();
  if(CP_STATE.done[i] && typeof addXP === 'function') addXP(5, 'Checkpoint savladan');
}
function cpUpdateProgress(){
  const done=Object.values(CP_STATE.done).filter(Boolean).length;
  const total=CP_ITEMS.length;
  const pct=Math.round(done/total*100);
  (document.getElementById('cp-pct')||{}).textContent=\`\${done} / \${total}\`;
  (document.getElementById('cp-bar')||{style:{}}).style.width=pct+'%';
  (document.getElementById('sb-prog-bar')||{style:{}}).style.width=pct+'%';
  (document.getElementById('sb-prog-pct')||{}).textContent=pct+'%';
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
    else if(pct>=40)msg='<strong>Napredak!</strong> Nastavak: koristi Sintaktički parser (Tab 5) i radi kviz ponovno dok ne dobiješ 85%+.';
    else msg='Još je posla. Počni s Teorijom (Tab 0) i prođi sve sekcije.';
    sumTxt.innerHTML=msg;
  }
}
function cpReset(){
  CP_STATE={done:{}};
  try{localStorage.removeItem('mt.hrv.h23.cp');}catch(e){}
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
try{TAB_DONE=JSON.parse(localStorage.getItem('mt.hrv.h23.tab_done')||'{}')}catch(e){}

function markTab(n){
  TAB_DONE[n]=true;
  try{localStorage.setItem('mt.hrv.h23.tab_done',JSON.stringify(TAB_DONE))}catch(e){}
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
  '💡 <strong>Tab 0 tip:</strong> Sintaksa je o odnosima riječi u rečenici. Razina: riječ → sintagma → rečenica → tekst.',
  '💡 <strong>Tab 1 tip:</strong> 6 rečeničnih članova (SPO-AAP): subjekt, predikat, objekt, atribut, apozicija, priložne oznake.',
  '💡 <strong>Tab 2 tip:</strong> Prosta (1 predikat) vs. složena (2+ predikata). Infinitiv NE računa kao predikat!',
  '💡 <strong>Tab 3 tip:</strong> Nezavisno složene: ravnopravne (i, ali, ili). Zavisno složene: jedna ovisi o drugoj (da, jer, ako).',
  '💡 <strong>Tab 4 tip:</strong> 70 pojmova — filtriraj po kategoriji. Crvene zvjezdice = najčešće NCVVO pitanja.',
  '💡 <strong>Tab 5 tip:</strong> Sintaktički parser identificira rečenične članove i tip rečenice. Tree visualizer daje vizualni prikaz!',
  '💡 <strong>Tab 6 tip:</strong> 30 kviz pitanja pokrivaju sve teme sintakse. Cilj: 85%+ prije mature.',
  '💡 <strong>Tab 7 tip:</strong> Referentna tablica s razdobljima, pismima i ključnim spomenicima — isprintaj i drži uz sebe.',
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
    const names={H11:'H11 · Stari hrv. pisci',H12:'H12 · Marulić · Judita',H13:'H13 · Gundulić · Dubravka',H14:'H14 · Preporod · Mažuranić',H15:'H15 · Šenoa · Prijan Lovro',H16:'H16 · Krleža · Glembajevi',H17:'H17 · Stilske figure',H19:'H19 · Fonetika',H20:'H20 · Morfologija'};
    const el=document.getElementById('from-banner');
    const txt=document.getElementById('from-txt');
    if(el&&txt){
      txt.textContent='📎 Nastaviš učenje iz '+(names[from]||from)+' → H21 · Sintaksa';
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
    const hist=JSON.parse(localStorage.getItem('mt.hrv.h23.kviz_hist')||'[]');
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
    const hist=JSON.parse(localStorage.getItem('mt.hrv.h23.kviz_hist')||'[]');
    hist.push({score,total,date:new Date().toISOString()});
    localStorage.setItem('mt.hrv.h23.kviz_hist',JSON.stringify(hist.slice(-10)));
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
  easy:[
    {a:'Imenica',b:'tko? što? (žena, stol)'},
    {a:'Glagol',b:'radnja/stanje (pisati, trčati)'},
    {a:'Pridjev',b:'kakav? čiji? (lijep, majčin)'},
    {a:'Prilog',b:'opisuje glagol (brzo, ovdje)'},
  ],
  medium:[
    {a:'Nominativ',b:'1. padež · subjekt · tko? što?'},
    {a:'Akuzativ',b:'4. padež · izravni objekt · koga? što?'},
    {a:'Lokativ',b:'6. padež · mjesto · UVIJEK s prijedlogom'},
    {a:'Instrumental',b:'7. padež · sredstvo · s kim? s čim?'},
  ],
  hard:[
    {a:'Povratno-posvojna',b:'Zamjenica SVOJ — pripadnost subjektu'},
    {a:'Svršeni vid',b:'Glagol završene radnje — s prefiksom (napisati)'},
    {a:'Paukal',b:'Oblik imenice uz 2, 3, 4 — kao G jd. (dva stola)'},
    {a:'Pluralia tantum',b:'Imenice samo u množini (vrata, novine)'},
  ]
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
    easy:'📚 Vrste riječi → pitanje (4 osnovna)',
    medium:'📐 Padeži → funkcija (4 ključna)',
    hard:'🔧 Napredni pojmovi (4 zamke)'
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
      <button class="fcb \${activeClass('easy')}" onclick="mgInit('easy')" style="margin:3px" title="Vrste riječi i pitanja">📚 Lagano (4)</button>
      <button class="fcb \${activeClass('medium')}" onclick="mgInit('medium')" style="margin:3px" title="Padeži i funkcije">📐 Srednje (4)</button>
      <button class="fcb \${activeClass('hard')}" onclick="mgInit('hard')" style="margin:3px" title="Napredni pojmovi i zamke">🔧 Teško (4)</button>
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
  // === MORFEMI (5) ===
  {t:'Morfem',d:'Najmanja jezična jedinica sa značenjem ili gramatičkom funkcijom. Primjer: ljep-ot-a = 3 morfema (korijen + sufiks + nastavak).',kat:'morfem'},
  {t:'Korijen (osnova)',d:'Središnji morfem riječi koji nosi leksičko značenje. Zajednički je srodnim riječima (ljep- u ljepota, ljepši, uljepšati).',kat:'morfem'},
  {t:'Prefiks',d:'Morfem ispred korijena koji mijenja značenje. Hrv.: na-, do-, iz-, pre-, uz-, pod-, nad-, ne-, protu-, među-.',kat:'morfem'},
  {t:'Sufiks',d:'Tvorbeni morfem iza korijena koji stvara novu riječ. Razlika od nastavka: sufiks NE mijenja se, nastavak DA.',kat:'morfem'},
  {t:'Nastavak',d:'Gramatički morfem na kraju — označava padež (-a, -e, -om), lice (-m, -š), rod/broj. Mijenja se kroz oblike.',kat:'morfem'},
  
  // === VRSTE RIJEČI (5) ===
  {t:'10 vrsta riječi',d:'5 PROMJENJIVIH: imenice, pridjevi, zamjenice, brojevi, glagoli. 5 NEPROMJENJIVIH: prilozi, prijedlozi, veznici, uzvici, čestice.',kat:'vrste'},
  {t:'Imenica vs. pridjev',d:'Imenica = tko/što? (stvar). Pridjev = kakav/čiji? (svojstvo). Pridjev se slaže s imenicom u rodu/broju/padežu.',kat:'vrste'},
  {t:'Zamjenice — 7 vrsta',d:'Osobne, povratne (se), posvojne (moj), povratno-posvojna (svoj), pokazne (ovaj), upitne/odnosne (tko), neodređene (netko).',kat:'vrste'},
  {t:'Svoj vs. njegov',d:'„Ivan uzima SVOJU knjigu" = Ivanovu (povratno-posvojna). „Ivan uzima NJEGOVU knjigu" = nečiju drugu (posvojna).',kat:'vrste'},
  {t:'Prilog vs. pridjev',d:'Prilog opisuje glagol (trči BRZO). Pridjev opisuje imenicu (BRZI vlak). Test: dodaj imenicu → ako radi, pridjev.',kat:'vrste'},
  
  // === PADEŽI (5) ===
  {t:'7 padeža (NADIVLA)',d:'N (tko?), G (čega? posvojni), D (komu?), A (koga? objekt), V (dozivanje), L (gdje? tema), I (čime?). Mnemotehnika: NADIVLA.',kat:'padez'},
  {t:'A vs. L razlika',d:'Isti prijedlozi (u, na, pod, nad): A = kretanje (u ŠKOLU, kamo?), L = mirovanje (u ŠKOLI, gdje?).',kat:'padez'},
  {t:'Prijedlozi uz G',d:'od, do, iz, bez, kod, preko, pokraj, poslije, prije, radi, zbog, protiv, između. G je najbogatiji padež prijedlozima.',kat:'padez'},
  {t:'Vokativ (V)',d:'Padež dozivanja. Često s 1. palatalizacijom: Ivan → Ivane, čovjek → čovječe, Bog → Bože, majka → majko!',kat:'padez'},
  {t:'Instrumental (I)',d:'Sredstvo (BEZ prijedloga: pišem OLOVKOM) vs. društvo (S + I: s PRIJATELJEM). Različito značenje!',kat:'padez'},
  
  // === GLAGOLI (5) ===
  {t:'7 glagolskih vremena',d:'Prezent, perfekt (sam čitao), aorist, imperfekt, pluskvamperfekt, futur I (čitat ću), futur II (budem čitao).',kat:'glagol'},
  {t:'Glagolski vid',d:'Svršeni (napisati — završeno) vs. nesvršeni (pisati — u tijeku). Prefiksi perfektiviziraju: pisati → NApisati.',kat:'glagol'},
  {t:'Futur I tvorba',d:'Infinitiv (bez -i) + nenaglašeni „htjeti" (ću, ćeš, će...). Primjer: čitati → čitat ću, vidjeti → vidjet ću.',kat:'glagol'},
  {t:'Perfekt tvorba',d:'Nenaglašeni prezent „biti" (sam, si, je, smo, ste, su) + glagolski pridjev radni. Primjer: čitao SAM, pročitala JE.',kat:'glagol'},
  {t:'Imperativ',d:'Zapovijedni način. 3 oblika: 2. jd. (čitaj!), 1. mn. (čitajmo!), 2. mn. (čitajte!). Samo u 3 lica.',kat:'glagol'},
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
  (document.getElementById('fc-prev-dyn')||{}).disabled=(fcIdx===0);
  (document.getElementById('fc-next-dyn')||{}).disabled=(fcIdx===FC_DATA.length-1);
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
   CHECKLIST (Esej alat AT7)
═══════════════════════════════════ */
/* ═══════════════════════════════════
   CHECKPOINT WRITER
═══════════════════════════════════ */
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
    
    // Tab-specific shortcuts
    if(activeTab === 5){ // Scanner tab
      if(e.key === 's' || e.key === 'S'){ e.preventDefault(); document.getElementById('ms-input')?.focus(); return; }
      if(e.key === 'a' || e.key === 'A'){ e.preventDefault(); document.getElementById('ai-input')?.focus(); return; }
    }
    if(activeTab === 3){ // Decliner tab
      if(e.key === 'd' || e.key === 'D'){ e.preventDefault(); document.getElementById('decl-input')?.focus(); return; }
    }
    
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
          <span style="grid-column:1/-1;height:1px;background:var(--bd);margin:6px 0"></span>
          <span style="grid-column:1/-1;font-family:var(--mono);font-size:10px;letter-spacing:1.5px;color:var(--gold)">PO TABOVIMA</span>
          <span><span class="kbd">D</span></span><span>Tab 3 — fokus složene rečenice</span>
          <span><span class="kbd">S</span></span><span>Tab 5 — fokus Sintaktički parser</span>
          <span><span class="kbd">A</span></span><span>Tab 5 — fokus AI tutor</span>
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



// (Removed: Gamification — XP, Streak, Achievements per user request)
// Stub no-op functions to prevent broken callers
function addXP(){}
function recordTabVisit(){}
function recordQuizResult(){}
function recordScan(){}
function recordDecline(){}
function recordParserUse(){}
function updateStreak(){}
function updateDashboard(){}

// (Removed: Quick Search Cmd+K — restored to classic H19/H18 style)



// ═══════════════════════════════════
// FRAZEM SCANNER · 100+ frazema baza
// ═══════════════════════════════════
const FRAZEMI_BAZA = [
  // ═══ TIJELO · GLAVA · LICE ═══
  {keys:['izgubiti','glavu'], pattern:'izgubiti glavu', meaning:'izgubiti razum, jako se zaljubiti', example:'Izgubio je glavu za njom.'},
  {keys:['lupati','glavom','o','zid'], pattern:'lupati glavom o zid', meaning:'uzalud se truditi', example:'Lupam glavom o zid s tim zadatkom.'},
  {keys:['imati','glavu','u','oblacima'], pattern:'imati glavu u oblacima', meaning:'biti rastresen, sanjar', example:'Ima glavu u oblacima.'},
  {keys:['glava','obitelji'], pattern:'glava obitelji', meaning:'vodilac obitelji', example:'On je glava obitelji.'},
  {keys:['lomiti','glavu'], pattern:'lomiti glavu', meaning:'naporno razmišljati', example:'Lomim glavu nad zadatkom.'},
  {keys:['imati','muhu','u','glavi'], pattern:'imati muhu u glavi', meaning:'imati čudnu ideju', example:'Ima muhu u glavi.'},
  {keys:['skinuti','kapu'], pattern:'skinuti kapu', meaning:'odati priznanje', example:'Skidam kapu pred njim.'},
  {keys:['gubiti','obraz'], pattern:'gubiti obraz', meaning:'sramotiti se', example:'Ne želim gubiti obraz.'},
  {keys:['biti','dva','lica'], pattern:'imati dva lica', meaning:'biti dvoličan', example:'Ima dva lica.'},
  {keys:['praviti','se','blesav'], pattern:'praviti se blesav', meaning:'pretvarati se da ne razumije', example:'Pravi se blesav.'},
  
  // ═══ OČI ═══
  {keys:['baciti','pogled'], pattern:'baciti pogled', meaning:'brzo pogledati', example:'Bacio je pogled na sat.'},
  {keys:['baciti','oko'], pattern:'baciti oko', meaning:'brzo pogledati / poželjeti', example:'Bacila je oko na taj auto.'},
  {keys:['vidjeti','zvjezdice'], pattern:'vidjeti zvjezdice', meaning:'biti udaren, šokiran', example:'Pao sam i vidio zvjezdice.'},
  {keys:['suze','u','očima'], pattern:'suze u očima', meaning:'biti ganut', example:'Bila je sa suzama u očima.'},
  {keys:['ne','vidjeti','dalje','od','nosa'], pattern:'ne vidjeti dalje od nosa', meaning:'biti kratkovidan u procjeni', example:'Ne vidi dalje od nosa.'},
  {keys:['pred','očima','imati'], pattern:'pred očima imati', meaning:'biti fokusiran na', example:'Pred očima imam maturu.'},
  {keys:['zatvarati','oči'], pattern:'zatvarati oči pred', meaning:'ignorirati', example:'Zatvara oči pred problemima.'},
  {keys:['otvoriti','oči'], pattern:'otvoriti oči', meaning:'shvatiti istinu', example:'Otvorile su mi se oči.'},
  
  // ═══ SRCE · DUŠA ═══
  {keys:['kamen','sa','srca'], pattern:'kamen sa srca', meaning:'olakšanje, oslobođenje od brige', example:'Pao mi je kamen sa srca.'},
  {keys:['nositi','srce','u','ruci'], pattern:'nositi srce u ruci', meaning:'biti otvoren, izravan', example:'Nosi srce u ruci.'},
  {keys:['imati','meko','srce'], pattern:'imati meko srce', meaning:'biti emotivan, blagonaklon', example:'Ima meko srce.'},
  {keys:['imati','lavlje','srce'], pattern:'imati lavlje srce', meaning:'biti hrabar', example:'Ima lavlje srce.'},
  {keys:['srce','mi','je','puklo'], pattern:'srce mi je puklo', meaning:'jako mi je žao', example:'Srce mi je puklo kad sam to čuo.'},
  {keys:['gnjaviti','dušu'], pattern:'gnjaviti dušu', meaning:'smetati, dosađivati', example:'Ne gnjavi mi dušu.'},
  {keys:['izvući','dušu'], pattern:'izvući dušu', meaning:'iznurit do iznemoglosti', example:'Trener nam je izvukao dušu.'},
  {keys:['imati','crne','misli'], pattern:'imati crne misli', meaning:'biti pesimističan', example:'Ima crne misli.'},
  
  // ═══ RUKE · NOGE · PRSTI ═══
  {keys:['zlatne','ruke'], pattern:'imati zlatne ruke', meaning:'biti vješt rukom, talentiran', example:'Baka ima zlatne ruke.'},
  {keys:['duge','prste'], pattern:'imati duge prste', meaning:'krasti', example:'Pazi — ima duge prste.'},
  {keys:['držati','figu','u','džepu'], pattern:'držati figu u džepu', meaning:'tajno se ne slagati', example:'Drži figu u džepu.'},
  {keys:['držati','palčeve'], pattern:'držati palčeve', meaning:'navijati za', example:'Držim ti palčeve.'},
  {keys:['pružiti','ruku'], pattern:'pružiti ruku', meaning:'pomoći', example:'Pružio mi je ruku u nevolji.'},
  {keys:['imati','čistu','ruku'], pattern:'imati čistu ruku', meaning:'biti pošten', example:'Ima čistu ruku.'},
  {keys:['raditi','rukom','u','rukavicama'], pattern:'raditi s rukavicama', meaning:'biti pažljiv', example:'Radi s njim s rukavicama.'},
  {keys:['na','vlastitim','nogama'], pattern:'na vlastitim nogama', meaning:'samostalno', example:'Stoji na vlastitim nogama.'},
  {keys:['stati','na','svoje','noge'], pattern:'stati na svoje noge', meaning:'osamostaliti se', example:'Stao je na svoje noge.'},
  {keys:['s','desne','noge'], pattern:'ustati s desne noge', meaning:'biti dobro raspoložen', example:'Danas sam ustala s desne noge.'},
  {keys:['s','lijeve','noge'], pattern:'ustati s lijeve noge', meaning:'biti loše raspoložen', example:'Ustao je s lijeve noge.'},
  
  // ═══ KOŽA · TIJELO ═══
  {keys:['imati','krzno','na','koži'], pattern:'imati krzno na koži', meaning:'biti debelokožan', example:'Ima krzno na koži.'},
  {keys:['kost','i','koža'], pattern:'kost i koža', meaning:'jako mršav', example:'Pas je kost i koža.'},
  {keys:['leđa','i','trbuh'], pattern:'znati leđa i trbuh', meaning:'znati napamet', example:'Znam to leđa i trbuh.'},
  {keys:['hladne','noge'], pattern:'imati hladne noge', meaning:'oklijevati u zadnji čas', example:'Dobio je hladne noge.'},
  
  // ═══ VOĆE · HRANA ═══
  {keys:['pasti','s','kruške'], pattern:'pasti s kruške', meaning:'biti naivan, zbunjen', example:'Da nisi pao s kruške?'},
  {keys:['kao','kruška'], pattern:'pasti kao kruška', meaning:'pasti naglo', example:'Pao je kao kruška.'},
  {keys:['popiti','čašu'], pattern:'popiti gorku čašu', meaning:'prihvatiti neugodno', example:'Popio je gorku čašu.'},
  {keys:['imati','maslac','na','glavi'], pattern:'imati maslac na glavi', meaning:'biti kriv', example:'Ima maslac na glavi.'},
  {keys:['tražiti','dlaku','u','jajetu'], pattern:'tražiti dlaku u jajetu', meaning:'tražiti sitne mane', example:'Ne traži dlaku u jajetu.'},
  {keys:['kao','vruće','kestene'], pattern:'kao vruće kestene', meaning:'brzo se riješiti', example:'Bacio ga kao vruće kestene.'},
  {keys:['kruh','svagdašnji'], pattern:'kruh svagdašnji', meaning:'osnovne potrebe', example:'Bori se za kruh svagdašnji.'},
  {keys:['mliječni','zubi'], pattern:'biti u mliječnim zubima', meaning:'biti vrlo mlad', example:'Još je u mliječnim zubima.'},
  {keys:['gristi','si','laktove'], pattern:'gristi si laktove', meaning:'jako žaliti', example:'Gristi si laktove neće pomoći.'},
  {keys:['pasti','s','duda'], pattern:'pasti s duda', meaning:'biti naivan', example:'Nisam pao s duda.'},
  {keys:['imati','soli','u','glavi'], pattern:'imati soli u glavi', meaning:'biti pametan', example:'Ima soli u glavi.'},
  {keys:['kao','šećer','u','vodi'], pattern:'rastopiti se kao šećer u vodi', meaning:'nestati', example:'Rastopio se kao šećer u vodi.'},
  {keys:['popiti','do','dna'], pattern:'popiti do dna', meaning:'iskusiti potpuno', example:'Popio je čašu do dna.'},
  {keys:['progutati','knedlu'], pattern:'progutati knedlu', meaning:'prikriti emociju', example:'Progutao je knedlu i šutio.'},
  
  // ═══ ŽIVOTINJE ═══
  {keys:['na','konju'], pattern:'biti na konju', meaning:'uspjeti', example:'Sad sam na konju!'},
  {keys:['kao','riba','u','vodi'], pattern:'kao riba u vodi', meaning:'osjećati se ugodno', example:'Tu sam kao riba u vodi.'},
  {keys:['kao','muha','bez','glave'], pattern:'kao muha bez glave', meaning:'zbunjen, dezorijentiran', example:'Trči kao muha bez glave.'},
  {keys:['lukav','kao','lisica'], pattern:'lukav kao lisica', meaning:'vrlo lukav', example:'Lukav je kao lisica.'},
  {keys:['miran','kao','janje'], pattern:'miran kao janje', meaning:'vrlo miran', example:'Miran je kao janje.'},
  {keys:['spavati','kao','top'], pattern:'spavati kao top', meaning:'spavati duboko', example:'Spavala sam kao top.'},
  {keys:['raditi','kao','konj'], pattern:'raditi kao konj', meaning:'naporno raditi', example:'Radi kao konj.'},
  {keys:['vrijedan','kao','pčela'], pattern:'vrijedan kao pčela', meaning:'jako marljiv', example:'Vrijedan je kao pčela.'},
  {keys:['živjeti','kao','bubreg','u','loju'], pattern:'živjeti kao bubreg u loju', meaning:'živjeti udobno', example:'Živi kao bubreg u loju.'},
  {keys:['praviti','od','muhe','slona'], pattern:'praviti od muhe slona', meaning:'pretjerivati', example:'Praviš od muhe slona.'},
  {keys:['kupiti','mačka','u','vreći'], pattern:'kupiti mačka u vreći', meaning:'kupiti bez provjere', example:'Ne kupuj mačka u vreći.'},
  {keys:['plakati','krokodilske','suze'], pattern:'plakati krokodilske suze', meaning:'lažno plakati', example:'Plače krokodilske suze.'},
  {keys:['drhtati','kao','zec'], pattern:'drhtati kao zec', meaning:'biti uplašen', example:'Drhti kao zec.'},
  {keys:['jak','kao','medvjed'], pattern:'jak kao medvjed', meaning:'jako snažan', example:'Jak je kao medvjed.'},
  {keys:['gladan','kao','vuk'], pattern:'gladan kao vuk', meaning:'jako gladan', example:'Gladna sam kao vuk.'},
  {keys:['zdrav','kao','dren'], pattern:'zdrav kao dren', meaning:'jako zdrav', example:'Zdrav je kao dren.'},
  {keys:['umoran','kao','pas'], pattern:'umoran kao pas', meaning:'jako umoran', example:'Umoran sam kao pas.'},
  {keys:['imati','medvjeđu','uslugu'], pattern:'medvjeđa usluga', meaning:'pogrešna pomoć', example:'Učinio mi je medvjeđu uslugu.'},
  {keys:['tih','kao','miš'], pattern:'tih kao miš', meaning:'jako tih', example:'Tih je kao miš.'},
  {keys:['pijan','kao','majka'], pattern:'pijan kao majka', meaning:'jako pijan', example:'Bio je pijan kao majka.'},
  
  // ═══ KRETANJE · PADANJE ═══
  {keys:['pasti','na','pamet'], pattern:'pasti na pamet', meaning:'sjetiti se, sinuti', example:'Pao mi je na pamet odgovor.'},
  {keys:['pasti','u','oči'], pattern:'pasti u oči', meaning:'biti zamijećen', example:'Pala mu je u oči.'},
  {keys:['pasti','u','vodu'], pattern:'pasti u vodu', meaning:'propasti', example:'Plan je pao u vodu.'},
  {keys:['pasti','u','nesvijest'], pattern:'pasti u nesvijest', meaning:'onesvijestiti se', example:'Pala je u nesvijest.'},
  {keys:['izaći','na','kraj'], pattern:'izaći na kraj', meaning:'savladati', example:'Nisam mogao izaći na kraj.'},
  {keys:['živjeti','od','ruke','do','usta'], pattern:'živjeti od ruke do usta', meaning:'jedva preživljavati', example:'Živi od ruke do usta.'},
  {keys:['vrtjeti','se','u','krug'], pattern:'vrtjeti se u krug', meaning:'ne napredovati', example:'Vrtim se u krug.'},
  {keys:['otići','u','zaborav'], pattern:'otići u zaborav', meaning:'biti zaboravljen', example:'Otišlo je u zaborav.'},
  {keys:['visjeti','o','koncu'], pattern:'visjeti o koncu', meaning:'biti u opasnosti', example:'Visi o koncu.'},
  {keys:['hodati','po','tankoj','liniji'], pattern:'hodati po tankoj liniji', meaning:'biti u opasnoj situaciji', example:'Hoda po tankoj liniji.'},
  {keys:['hodati','po','jajima'], pattern:'hodati po jajima', meaning:'biti vrlo pažljiv', example:'Moramo hodati po jajima.'},
  {keys:['ići','iz','jednog','u','drugo'], pattern:'ići iz jednog u drugo', meaning:'biti nestabilan', example:'Ide iz jednog u drugo.'},
  {keys:['gaziti','vlastitim','tragom'], pattern:'gaziti vlastitim tragom', meaning:'ponavljati svoje', example:'Gazi vlastitim tragom.'},
  {keys:['sve','do','kraja'], pattern:'ići sve do kraja', meaning:'predati se cilju', example:'Idem sve do kraja.'},
  
  // ═══ STVARI · PREDMETI ═══
  {keys:['dati','zeleno','svjetlo'], pattern:'dati zeleno svjetlo', meaning:'odobriti', example:'Dao mu je zeleno svjetlo.'},
  {keys:['staviti','pod','tepih'], pattern:'staviti pod tepih', meaning:'sakriti problem', example:'Stavio je problem pod tepih.'},
  {keys:['staviti','na','stol'], pattern:'staviti na stol', meaning:'otvoreno reći', example:'Stavi sve karte na stol.'},
  {keys:['na','vagi'], pattern:'biti na vagi', meaning:'u ravnoteži', example:'Sve je na vagi.'},
  {keys:['igrati','se','vatrom'], pattern:'igrati se vatrom', meaning:'raditi opasnu stvar', example:'Ne igraj se vatrom.'},
  {keys:['vagati','riječi'], pattern:'vagati riječi', meaning:'biti pažljiv u govoru', example:'Vagaj riječi.'},
  {keys:['kratkog','daha'], pattern:'biti kratkog daha', meaning:'biti netrpeljiv', example:'Kratkog je daha.'},
  {keys:['probiti','led'], pattern:'probiti led', meaning:'započeti razgovor', example:'Trebam probiti led.'},
  {keys:['proliti','kafu','na','sebe'], pattern:'proliti kavu na sebe', meaning:'osramotiti se', example:'Prolio je kavu na sebe.'},
  {keys:['držati','dvije','strane'], pattern:'držati dvije strane', meaning:'biti dvoličan', example:'Drži dvije strane.'},
  {keys:['imati','adut','u','rukavu'], pattern:'imati adut u rukavu', meaning:'imati skrivenu prednost', example:'Ima adut u rukavu.'},
  {keys:['baciti','rukavicu'], pattern:'baciti rukavicu', meaning:'izazvati', example:'Bacio mu je rukavicu.'},
  {keys:['udariti','o','zid'], pattern:'udariti o zid', meaning:'naići na prepreku', example:'Udario je o zid.'},
  {keys:['imati','jezik','za','zubima'], pattern:'imati jezik za zubima', meaning:'znati šutjeti', example:'Imaj jezik za zubima.'},
  {keys:['držati','jezik','za','zubima'], pattern:'držati jezik za zubima', meaning:'šutjeti', example:'Drži jezik za zubima.'},
  {keys:['imati','dvije','lijeve','ruke'], pattern:'imati dvije lijeve ruke', meaning:'biti nespretan', example:'Ima dvije lijeve ruke.'},
  {keys:['držati','vodu'], pattern:'držati vodu', meaning:'biti uvjerljiv', example:'Argument drži vodu.'},
  {keys:['posuti','se','pepelom'], pattern:'posuti se pepelom', meaning:'pokajati se javno', example:'Posuo se pepelom.'},
  {keys:['kao','grom','iz','vedra','neba'], pattern:'kao grom iz vedra neba', meaning:'iznenada', example:'Vijest je došla kao grom iz vedra neba.'},
  
  // ═══ NEBO · ZRAK · VRIJEME ═══
  {keys:['biti','na','sedmom','nebu'], pattern:'biti na sedmom nebu', meaning:'biti jako sretan', example:'Na sedmom je nebu.'},
  {keys:['živjeti','u','oblacima'], pattern:'živjeti u oblacima', meaning:'biti sanjar', example:'Živi u oblacima.'},
  {keys:['imati','vremena','kao','blago'], pattern:'imati vremena kao blago', meaning:'imati malo vremena', example:'Imam vremena kao blago.'},
  {keys:['dolijati'], pattern:'dolijati', meaning:'biti uhvaćen u prijestupu', example:'Dolijao je s prepisivanjem.'},
  {keys:['imati','sreću','u','nesreći'], pattern:'imati sreću u nesreći', meaning:'biti djelomično sretan u problemu', example:'Imao je sreću u nesreći.'},
  
  // ═══ POSAO · NOVAC ═══
  {keys:['baciti','novac','kroz','prozor'], pattern:'baciti novac kroz prozor', meaning:'rasipati', example:'Baca novac kroz prozor.'},
  {keys:['biti','bez','prebijene','pare'], pattern:'biti bez prebijene pare', meaning:'biti bez novca', example:'Sam bez prebijene pare.'},
  {keys:['kupovati','mačka','u','vreći'], pattern:'kupovati mačka u vreći', meaning:'kupovati nepoznato', example:'Ne kupuj mačka u vreći.'},
  {keys:['raditi','na','crno'], pattern:'raditi na crno', meaning:'raditi neslužbeno', example:'Radi na crno.'},
  {keys:['otkriti','karte'], pattern:'otkriti karte', meaning:'reći istinu', example:'Otkrio je karte.'},
  
  // ═══ SREĆA · NESREĆA ═══
  {keys:['imati','sreće','kao','vrabac'], pattern:'imati sreće kao vrabac', meaning:'imati malo sreće', example:'Imam sreće kao vrabac.'},
  {keys:['imati','peh','u','životu'], pattern:'imati peh', meaning:'imati nesreću', example:'Imam peh.'},
  {keys:['biti','mušter'], pattern:'biti mušter', meaning:'pasti u problem', example:'Mušter sam s ovim.'},
  {keys:['na','vrh','jezika'], pattern:'na vrh jezika', meaning:'gotovo se sjetiti', example:'Imam na vrh jezika.'},
  
  // ═══ APSTRAKTNI ═══
  {keys:['biti','u','tridesetom','licu'], pattern:'biti u tridesetom licu', meaning:'biti vrlo ljutit', example:'Bio je u tridesetom licu.'},
  {keys:['ne','znati','što','sa','sobom'], pattern:'ne znati što sa sobom', meaning:'biti zbunjen', example:'Ne zna što sa sobom.'},
  {keys:['držati','riječ'], pattern:'držati riječ', meaning:'održati obećanje', example:'Drži riječ.'},
  {keys:['držati','obećanje'], pattern:'držati obećanje', meaning:'ne pogaziti', example:'Držim obećanje.'},
  {keys:['na','prvi','pogled'], pattern:'na prvi pogled', meaning:'odmah, prvi dojam', example:'Na prvi pogled mi se svidjelo.'},
  {keys:['sve','je','u','redu'], pattern:'sve je u redu', meaning:'situacija OK', example:'Sve je u redu.'},
  {keys:['biti','na','svom'], pattern:'biti na svom', meaning:'biti u svom elementu', example:'Na svom je terenu.'},
  {keys:['ima','glave','i','repa'], pattern:'imati glave i repa', meaning:'imati smisla', example:'To nema ni glave ni repa.'},
  {keys:['ići','u','korak','sa'], pattern:'ići u korak sa', meaning:'pratiti razvoj', example:'Ide u korak s vremenom.'},
  {keys:['davati','sve','od','sebe'], pattern:'davati sve od sebe', meaning:'maksimalno se truditi', example:'Daje sve od sebe.'},
  {keys:['boriti','se','do','zadnjeg','daha'], pattern:'boriti se do zadnjeg daha', meaning:'biti uporan', example:'Borim se do zadnjeg daha.'},
  {keys:['na','vlastitu','odgovornost'], pattern:'na vlastitu odgovornost', meaning:'sam odgovara', example:'To je na vlastitu odgovornost.'},
  
  // ═══ POPULARNE FRAZEOLOGIZIRANE ═══
  {keys:['biti','u','sedmom','nebu'], pattern:'biti u sedmom nebu', meaning:'biti jako sretan', example:'U sedmom je nebu.'},
  {keys:['preko','noći'], pattern:'preko noći', meaning:'iznenada, brzo', example:'Postao je slavan preko noći.'},
  {keys:['na','prste','jedne','ruke'], pattern:'na prste jedne ruke', meaning:'malo, rijetko', example:'Mogu ih izbrojati na prste jedne ruke.'},
  {keys:['svi','putevi','vode'], pattern:'svi putevi vode u Rim', meaning:'mnogo načina', example:'Svi putevi vode u Rim.'},
  {keys:['tko','rano','rani'], pattern:'tko rano rani, dvije sreće grabi', meaning:'rana akcija nagrađuje', example:'Tko rano rani, dvije sreće grabi.'},
  {keys:['poslije','kiše'], pattern:'poslije kiše dolazi sunce', meaning:'nakon teškoga lakše', example:'Poslije kiše dolazi sunce.'},
];

// Convert keys to lowercase strings for matching
const FRAZEMI_NORMALIZED = FRAZEMI_BAZA.map(f => ({
  ...f,
  keysLower: f.keys.map(k => k.toLowerCase())
}));

function fsTokenize(text){
  // Tokenize: split on whitespace, keep punctuation separate
  const tokens = [];
  const re = /[\\p{L}\\p{N}\\u00a0-\\uffff]+|[.,!?;:""'„"\\-—]/gu;
  let m;
  while((m = re.exec(text)) !== null){
    tokens.push({
      text: m[0],
      lower: m[0].toLowerCase(),
      type: /[.,!?;:""'„"\\-—]/.test(m[0]) ? 'punct' : 'word',
      pos: m.index
    });
  }
  return tokens;
}

function fsDetectFrazemi(tokens){
  // Get only words (skip punctuation)
  const words = tokens.filter(t => t.type === 'word');
  const wordsLower = words.map(w => w.lower);
  
  const found = [];
  
  for(const f of FRAZEMI_NORMALIZED){
    const keys = f.keysLower;
    if(keys.length === 0) continue;
    
    // Check if all keys appear in order (with possible gaps for 1-2 words)
    const positions = [];
    let searchFrom = 0;
    let matched = true;
    
    for(const key of keys){
      let foundIdx = -1;
      // Allow 0-3 word gap between matched positions
      for(let i = searchFrom; i < Math.min(wordsLower.length, searchFrom + 5); i++){
        if(wordsLower[i] === key || wordsLower[i].startsWith(key.slice(0, Math.max(3, key.length-2)))){
          foundIdx = i;
          break;
        }
      }
      if(foundIdx === -1){
        matched = false;
        break;
      }
      positions.push(foundIdx);
      searchFrom = foundIdx + 1;
    }
    
    if(matched && positions.length > 0){
      found.push({
        frazem: f,
        startWordIdx: positions[0],
        endWordIdx: positions[positions.length - 1],
        positions
      });
    }
  }
  
  // Sort by position, deduplicate overlapping
  found.sort((a, b) => a.startWordIdx - b.startWordIdx);
  const filtered = [];
  let lastEnd = -1;
  for(const f of found){
    if(f.startWordIdx > lastEnd){
      filtered.push(f);
      lastEnd = f.endWordIdx;
    }
  }
  
  return filtered;
}

function fsAnalyze(){
  const input = document.getElementById('fs-input');
  const output = document.getElementById('fs-output');
  if(!input || !output) return;
  
  const text = (input.value || '').trim();
  if(!text){
    output.innerHTML = '<div style="font-style:italic;color:var(--t3)">Unesi rečenicu prvo.</div>';
    return;
  }
  
  const tokens = fsTokenize(text);
  const words = tokens.filter(t => t.type === 'word');
  const detected = fsDetectFrazemi(tokens);
  
  if(detected.length === 0){
    // Save to history
    fsAddToHistory(text, 0);
    
    output.innerHTML = \`
      <div class="prs-result">
        <div class="prs-section" style="border-left:3px solid var(--bronze)">
          <div class="prs-section-lbl" style="color:var(--bronze)">🔍 ANALIZA</div>
          <div style="padding:8px 0;font-family:var(--serif);font-size:14px;line-height:1.6;color:var(--t1)">
            <strong>Nije pronađen poznati frazem.</strong> Mogući razlozi:
          </div>
          <ul style="margin:8px 0 12px 24px;font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.6">
            <li>Rečenica je <strong>doslovna</strong> — bez frazemskog izraza</li>
            <li>Frazem postoji ali <strong>nije u bazi</strong> (trenutno 140 najčešćih)</li>
            <li>Inflexivni oblik koji <strong>scanner ne prepoznaje</strong> (npr. „padoše s kruške" umjesto „pasti s kruške")</li>
          </ul>
          <div style="margin-top:14px;padding:12px;background:rgba(74,144,217,.06);border:1px solid rgba(74,144,217,.2);border-left:3px solid var(--blue);border-radius:var(--r1)">
            <div style="font-family:var(--mono);font-size:10.5px;letter-spacing:1.5px;color:var(--blue);margin-bottom:6px">💡 SAVJET</div>
            <div style="font-size:12.5px;color:var(--t2);line-height:1.55">
              Pokušaj s primjerima na vrhu (klikni „olakšanje", „uspjeh"…) ili klikni <strong>🎲 Random</strong> za nasumičnu rečenicu iz baze.
            </div>
          </div>
          <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap">
            <button class="nb-btn" onclick="fsRandom()" style="padding:8px 14px;font-size:11.5px">🎲 Pokušaj Random</button>
            <button class="nb-btn" onclick="fsClearInput()" style="padding:8px 14px;font-size:11.5px">↻ Očisti</button>
          </div>
        </div>
      </div>
    \`;
    return;
  }
  
  // Save to history
  fsAddToHistory(text, detected.length);
  
  // Build annotated sentence — highlight frazem positions
  const wordPositions = new Set();
  for(const d of detected){
    for(const p of d.positions){
      wordPositions.add(p);
    }
  }
  
  let annotated = '';
  let wordIdx = 0;
  for(const t of tokens){
    if(t.type === 'word'){
      const isFrazem = wordPositions.has(wordIdx);
      annotated += isFrazem 
        ? \`<span class="prs-tok prs-veznik">\${t.text}</span> \`
        : \`<span class="prs-tok prs-tok-plain">\${t.text}</span> \`;
      wordIdx++;
    } else {
      annotated += \`<span class="prs-punct">\${t.text}</span>\`;
    }
  }
  
  // Build frazem details cards
  const frazemCards = detected.map((d, i) => \`
    <div class="prs-info-card" style="border-left-color:var(--gold)">
      <div class="prs-info-lbl" style="color:var(--gold)">FRAZEM \${i+1}</div>
      <div class="prs-info-val" style="font-family:var(--display);font-style:italic;font-size:15px">„\${d.frazem.pattern}"</div>
      <div style="font-size:12px;color:var(--t1);margin:6px 0;font-family:var(--serif)">
        <strong style="color:var(--gold)">Značenje:</strong> \${d.frazem.meaning}
      </div>
      <div style="font-size:11.5px;color:var(--t3);font-style:italic;font-family:var(--serif)">
        Primjer: \${d.frazem.example}
      </div>
    </div>
  \`).join('');
  
  output.innerHTML = \`
    <div class="prs-result">
      <div class="prs-section" style="border-left:3px solid var(--gold)">
        <div class="prs-section-lbl" style="color:var(--gold)">📝 ANALIZIRANA REČENICA</div>
        <div class="prs-sentence">\${annotated}</div>
        <div class="prs-legend">
          <div class="prs-leg"><div class="prs-leg-dot" style="background:var(--gold)"></div>Frazem</div>
        </div>
      </div>
      
      <div class="prs-section" style="border-left:3px solid var(--bronze)">
        <div class="prs-section-lbl" style="color:var(--bronze)">🔬 PRONAĐENI FRAZEMI · \${detected.length}</div>
        <div class="prs-grid">
          \${frazemCards}
        </div>
      </div>
    </div>
  \`;
}

function fsExample(text){
  const input = document.getElementById('fs-input');
  if(input){
    input.value = text;
    fsAnalyze();
  }
}

const FS_RANDOM_SENTENCES = [
  'Pao mi je kamen sa srca kad sam saznao.',
  'Položio sam maturu — sad sam na konju!',
  'Moj djed ima zlatne ruke za sve popravke.',
  'Ne traži dlaku u jajetu, sve je OK.',
  'Spavala sam kao top nakon ispita.',
  'Dolijao je s varanjem.',
  'Stavio je sve karte na stol.',
  'Ne gnjavi mi dušu glupostima.',
  'Vrtim se u krug s ovim zadatkom.',
  'Njegov plan je pao u vodu.',
  'Pred očima ima samo cilj.',
  'Da nisi pao s kruške?',
  'Tata mi je dao zeleno svjetlo.',
  'Visi mi posao o koncu.',
  'Hoda po tankoj liniji.',
];

let fsRandomHistory = [];
function fsRandom(){
  let candidates = FS_RANDOM_SENTENCES.filter(s => !fsRandomHistory.includes(s));
  if(candidates.length === 0){
    fsRandomHistory = [];
    candidates = FS_RANDOM_SENTENCES;
  }
  const picked = candidates[Math.floor(Math.random() * candidates.length)];
  fsRandomHistory.push(picked);
  if(fsRandomHistory.length > 5) fsRandomHistory.shift();
  fsExample(picked);
}

function fsAddToHistory(text, count){
  try{
    let hist = JSON.parse(localStorage.getItem('mt.hrv.h23.fs_hist') || '[]');
    hist.push({text, count, date: Date.now()});
    if(hist.length > 20) hist = hist.slice(-20);
    localStorage.setItem('mt.hrv.h23.fs_hist', JSON.stringify(hist));
  } catch(e){}
}



function fsClearInput(){
  const input = document.getElementById('fs-input');
  const output = document.getElementById('fs-output');
  if(input) input.value = '';
  if(output) output.innerHTML = '<div style="font-style:italic;color:var(--t3)">Unesi rečenicu i klikni „Skeniraj" za analizu frazema.</div>';
  if(input) input.focus();
}



// ═══════════════════════════════════
// IDENTIFIKACIJA PISMA · 20 spomenika
// ═══════════════════════════════════
const IP_SPOMENICI = [
  {name:'Plominski natpis', year:'~1000.', pismo:'glagoljica', context:'Jedan od najstarijih glagoljskih natpisa, Plomin u Istri.', diff:'easy'},
  {name:'Bašćanska ploča', year:'~1100.', pismo:'glagoljica', context:'Najstariji očuvani spomenik na hrvatskom jeziku, otok Krk. Kameni natpis sa imenom kralja Zvonimira.', diff:'easy'},
  {name:'Povaljska listina', year:'~1185.', pismo:'cirilica', context:'Otok Brač, najstariji hrvatski bosaničkim pismom (hrvatska redakcija ćirilice).', diff:'medium'},
  {name:'Vinodolski zakonik', year:'1288.', pismo:'glagoljica', context:'Najstariji slavenski pravni spomenik na narodnom jeziku, čakavski.', diff:'easy'},
  {name:'Red i zakon sestara dominikanki', year:'1345.', pismo:'latinica', context:'Zadar, jedan od prvih hrvatskih latiničkih spomenika.', diff:'medium'},
  {name:'Šibenska molitva', year:'~1375.', pismo:'latinica', context:'Najstarija hrvatska latinička pjesma, marijanska molitva u stihovima.', diff:'medium'},
  {name:'Misal po zakonu rimskoga dvora', year:'1483.', pismo:'glagoljica', context:'Prva tiskana hrvatska knjiga, samo 28 godina nakon Gutenberga. Liturgijska knjiga.', diff:'easy'},
  {name:'Kašićeva gramatika', year:'1604.', pismo:'latinica', context:'Bartol Kašić, prva hrvatska gramatika. Tiskana u Rimu na latinskom jeziku.', diff:'easy'},
  {name:'Vrančićev rječnik', year:'1631.', pismo:'latinica', context:'Faust Vrančić, peterojezični rječnik (latinski-talijanski-njemački-hrvatski-mađarski).', diff:'medium'},
  {name:'Kašićeva Biblija', year:'1631.', pismo:'latinica', context:'Bartol Kašić, prvi prijevod cijele Biblije na hrvatski jezik (dovršen, ne objavljen u to vrijeme).', diff:'medium'},
  {name:'Stullijev Lexicon', year:'1801.', pismo:'latinica', context:'Joakim Stulli, najveći hrvatski rječnik 18. st.', diff:'easy'},
  {name:'Brozov pravopis', year:'1892.', pismo:'latinica', context:'Ivan Broz, Hrvatski pravopis — temelj suvremenog hrvatskog pravopisa, fonetska načela.', diff:'easy'},
  {name:'Maretićeva gramatika', year:'1899.', pismo:'latinica', context:'Tomislav Maretić, Gramatika i stilistika — učvršćenje (i)jekavskog standarda.', diff:'medium'},
  {name:'Hrvojev misal', year:'1404.', pismo:'glagoljica', context:'Bogato iluminirani glagoljski misal, naručio Hrvoje Vukčić Hrvatinić.', diff:'hard'},
  {name:'Mihanovićev odlomak apostola', year:'12. st.', pismo:'glagoljica', context:'Najstariji očuvani fragment hrvatskog crkvenoslavenskog teksta na pergameni.', diff:'hard'},
  {name:'Konavoski zakonik', year:'1431.', pismo:'cirilica', context:'Pravni dokument iz Konavla, pisan bosaničkim pismom (hrv. redakcija ćirilice).', diff:'hard'},
  {name:'Senjski misal', year:'1494.', pismo:'glagoljica', context:'Druga hrvatska tiskana glagoljska knjiga, tiskan u Senju.', diff:'medium'},
  {name:'Marulićeva Judita', year:'1501.', pismo:'latinica', context:'Marko Marulić, prvi hrvatski roman u stihovima na hrvatskom (čakavski). Tiskana 1521.', diff:'medium'},
  {name:'Gajeva Danica', year:'1835.', pismo:'latinica', context:'Ljudevit Gaj, prvi hrvatski književni časopis u doba narodnog preporoda.', diff:'medium'},
  {name:'Deklaracija 1967.', year:'1967.', pismo:'latinica', context:'Deklaracija o nazivu i položaju hrvatskoga književnoga jezika — povijesni dokument suvremenosti.', diff:'easy'},
];

let ipIdx = 0;
let ipScore = 0;
let ipAnswered = false;

function ipInit(){
  ipIdx = 0;
  ipScore = 0;
  ipAnswered = false;
  // Shuffle
  for(let i = IP_SPOMENICI.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [IP_SPOMENICI[i], IP_SPOMENICI[j]] = [IP_SPOMENICI[j], IP_SPOMENICI[i]];
  }
  ipRender();
}

function ipRender(){
  const out = document.getElementById('ip-exercise');
  if(!out) return;
  
  if(ipIdx >= IP_SPOMENICI.length){
    return ipResult();
  }
  
  const item = IP_SPOMENICI[ipIdx];
  ipAnswered = false;
  const diffColor = {easy:'var(--green)', medium:'var(--gold)', hard:'var(--red)'}[item.diff] || 'var(--t3)';
  const diffLabel = {easy:'LAKO', medium:'SREDNJE', hard:'TEŠKO'}[item.diff] || '';
  
  out.innerHTML = \`
    <div class="rc-card">
      <div class="rc-meta">
        <span class="rc-progress">Spomenik <strong>\${ipIdx+1}</strong> / \${IP_SPOMENICI.length}</span>
        <span class="rc-diff" style="color:\${diffColor};border-color:\${diffColor}">\${diffLabel}</span>
        <span class="rc-score">Točno: <strong>\${ipScore}</strong> / \${ipIdx}</span>
      </div>
      
      <div class="rc-question">
        Kojim je pismom napisan ovaj spomenik?
      </div>
      
      <div class="rc-sentence" style="font-family:var(--display);font-size:18px">
        <div style="margin-bottom:6px"><strong>\${item.name}</strong></div>
        <div style="font-size:13px;color:var(--t3);font-style:italic;font-family:var(--mono)">\${item.year}</div>
      </div>
      
      <div class="rc-options" style="grid-template-columns:repeat(3, 1fr)">
        <button class="rc-opt" onclick="ipAnswer('glagoljica', this)" data-key="glagoljica" style="--opt-color:var(--green)">
          <span class="rc-opt-short" style="color:var(--green)">G</span>
          <span class="rc-opt-label">Glagoljica</span>
        </button>
        <button class="rc-opt" onclick="ipAnswer('cirilica', this)" data-key="cirilica" style="--opt-color:var(--blue)">
          <span class="rc-opt-short" style="color:var(--blue)">Ć</span>
          <span class="rc-opt-label">Ćirilica/bosančica</span>
        </button>
        <button class="rc-opt" onclick="ipAnswer('latinica', this)" data-key="latinica" style="--opt-color:var(--bronze)">
          <span class="rc-opt-short" style="color:var(--bronze)">L</span>
          <span class="rc-opt-label">Latinica</span>
        </button>
      </div>
      
      <div id="ip-feedback" class="rc-feedback"></div>
    </div>
  \`;
}

function ipAnswer(key, btn){
  if(ipAnswered) return;
  ipAnswered = true;
  
  const item = IP_SPOMENICI[ipIdx];
  const correct = key === item.pismo;
  
  document.querySelectorAll('.rc-opt').forEach(b => {
    b.disabled = true;
    if(b.dataset.key === item.pismo) b.classList.add('rc-correct');
    else if(b === btn) b.classList.add('rc-wrong');
  });
  
  if(correct) ipScore++;
  
  const labels = {glagoljica:'Glagoljica', cirilica:'Ćirilica/bosančica', latinica:'Latinica'};
  const fb = document.getElementById('ip-feedback');
  fb.style.display = 'block';
  fb.className = 'rc-feedback ' + (correct ? 'rc-fb-correct' : 'rc-fb-wrong');
  fb.innerHTML = \`
    <div class="rc-fb-head">\${correct?'✅ Točno!':'❌ Pogrešno'} — Točan odgovor: <strong>\${labels[item.pismo]}</strong></div>
    <div class="rc-fb-exp">\${item.context}</div>
    <div class="rc-fb-actions">
      <button class="nb-btn primary" onclick="ipNext()">Sljedeće →</button>
    </div>
  \`;
}

function ipNext(){
  ipIdx++;
  ipRender();
}

function ipResult(){
  const out = document.getElementById('ip-exercise');
  const result = document.getElementById('ip-result');
  if(!out || !result) return;
  
  const pct = Math.round(ipScore / IP_SPOMENICI.length * 100);
  let msg, color;
  if(pct >= 80){msg='🌟 Odličan rezultat! Solidno znaš povijest pisama.'; color='var(--green)';}
  else if(pct >= 60){msg='👍 Dobro znaš osnovu, ali ima prostora za usavršavanje.'; color='var(--gold)';}
  else {msg='📚 Trebaš još učiti — vrati se na Tab Pisma i Spomenici.'; color='var(--red)';}
  
  out.style.display = 'none';
  result.style.display = 'block';
  result.innerHTML = \`
    <div class="rc-result-card">
      <div style="font-family:var(--display);font-size:28px;font-weight:700;color:\${color};margin-bottom:8px">\${ipScore} / \${IP_SPOMENICI.length}</div>
      <div style="font-family:var(--mono);font-size:13px;color:var(--t2);margin-bottom:16px">\${pct}% točnih odgovora</div>
      <div class="rc-result-bar"><div class="rc-result-fill" style="background:\${color};width:\${pct}%"></div></div>
      <div style="margin:16px 0;font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.6">\${msg}</div>
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <button class="nb-btn primary" onclick="ipReset()">🔁 Ponovi vježbu</button>
        <button class="nb-btn" onclick="sw(2)">✍ Pisma →</button>
      </div>
    </div>
  \`;
}

function ipReset(){
  const out = document.getElementById('ip-exercise');
  const result = document.getElementById('ip-result');
  if(out) out.style.display = 'block';
  if(result) result.style.display = 'none';
  ipInit();
}

// Auto-init when Tab 5 is opened — observe via MutationObserver or just init on load
document.addEventListener('DOMContentLoaded', () => {
  if(document.getElementById('ip-exercise')) ipInit();
});

// Re-init when sw(5) is called
const _origSw_ip = window.sw;
if(typeof _origSw_ip === 'function'){
  window.sw = function(n){
    _origSw_ip(n);
    if(n === 5 && document.getElementById('ip-exercise')){
      // Only re-init if not currently mid-exercise
      const out = document.getElementById('ip-exercise');
      if(out && !out.innerHTML.trim()){
        ipInit();
      }
    }
  };
}



// ═══════════════════════════════════
// ABC ZOOM · expand SVG abecedu
// ═══════════════════════════════════
function abcZoom(el){
  // Clone the card content
  let modal = document.getElementById('abc-modal');
  if(!modal){
    modal = document.createElement('div');
    modal.id = 'abc-modal';
    modal.className = 'abc-modal';
    modal.onclick = () => modal.classList.remove('on');
    document.body.appendChild(modal);
  }
  modal.innerHTML = \`<div class="abc-modal-inner">\${el.innerHTML}</div>\`;
  modal.classList.add('on');
}



// ═══════════════════════════════════
// AUDIO PLAY · SpeechSynthesis API placeholder
// (real audio files can replace later)
// ═══════════════════════════════════
const AUDIO_TEXTS = {
  bascanska: 'Ja, u ime Oca i Sina i Svetoga Duha. Ja, opat Držiha, pisah ovo o ledini koju dade Zvonimir, kralj hrvatski u svoje dane svetoj Luciji.',
  vinodolski: 'U ime Oca i Sina i Duha Svetoga. Amen. Godine od rođenja Hristova tisuću dvjesto osamdeset i osme, mjeseca siječnja, dan šesti, na Bogojavljanje Gospodnje.',
  sibenska: 'O blažena, o preslavna, o presvijetla zvijezdo morska, Majko Božja Marijo, gospodareva goro predraga.',
  misal: 'Godine Gospodnje tisuću četiristo osamdeset i treće, mjeseca veljače, dvadeset i drugog dana, tiskan je ovaj misal po zakonu rimskoga dvora.',
};

let _currentUtterance = null;

function audioPlay(btn, key){
  const text = AUDIO_TEXTS[key];
  if(!text) return;
  
  // Stop previous if playing
  if(_currentUtterance){
    speechSynthesis.cancel();
    document.querySelectorAll('.text-audio-btn.playing').forEach(b => b.classList.remove('playing'));
    if(btn.dataset.playing === '1'){
      btn.dataset.playing = '0';
      btn.querySelector('.audio-lbl').textContent = 'Slušaj';
      _currentUtterance = null;
      audioToast('⏸ Audio zaustavljen');
      return;
    }
  }
  
  if(!('speechSynthesis' in window)){
    audioToast('⚠ Tvoj preglednik ne podržava sintezu govora. Pokušaj u Chromeu.');
    return;
  }
  
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'hr-HR';
  utt.rate = 0.85;
  utt.pitch = 1.0;
  
  // Try to find Croatian voice
  const voices = speechSynthesis.getVoices();
  const hrVoice = voices.find(v => v.lang === 'hr-HR' || v.lang.startsWith('hr'));
  if(hrVoice) utt.voice = hrVoice;
  
  utt.onstart = () => {
    btn.classList.add('playing');
    btn.dataset.playing = '1';
    btn.querySelector('.audio-icon').textContent = '⏸';
    btn.querySelector('.audio-lbl').textContent = 'Stop';
    audioToast('🔊 Reprodukcija — moderna verzija (TTS)');
  };
  utt.onend = () => {
    btn.classList.remove('playing');
    btn.dataset.playing = '0';
    btn.querySelector('.audio-icon').textContent = '▶';
    btn.querySelector('.audio-lbl').textContent = 'Slušaj';
    _currentUtterance = null;
  };
  utt.onerror = () => {
    btn.classList.remove('playing');
    btn.querySelector('.audio-icon').textContent = '▶';
    btn.querySelector('.audio-lbl').textContent = 'Slušaj';
    audioToast('⚠ Greška u reprodukciji.');
  };
  
  _currentUtterance = utt;
  speechSynthesis.speak(utt);
}

function audioToast(msg){
  let toast = document.getElementById('audio-toast');
  if(!toast){
    toast = document.createElement('div');
    toast.id = 'audio-toast';
    toast.className = 'audio-modal';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('on');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('on'), 3000);
}

// Stop audio when navigating tabs
const _origSwAudio = window.sw;
if(typeof _origSwAudio === 'function'){
  const _prevSw = window.sw;
  window.sw = function(n){
    if(_currentUtterance){
      speechSynthesis.cancel();
      document.querySelectorAll('.text-audio-btn.playing').forEach(b => {
        b.classList.remove('playing');
        b.querySelector('.audio-icon').textContent = '▶';
        b.querySelector('.audio-lbl').textContent = 'Slušaj';
      });
      _currentUtterance = null;
    }
    _prevSw(n);
  };
}
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
  try { localStorage.setItem('mt.hrv.h23.prog', p); } catch(e){}
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


export default function H23Chapter() {
  return (
    <ChapterWrapper
      chapterId="H23"
      bodyHtml={BODY_HTML}
      stylesCss={STYLES_CSS}
      scriptsJs={SCRIPTS_JS}
    />
  );
}

export const HRV_POGAVLJE_23 = null
