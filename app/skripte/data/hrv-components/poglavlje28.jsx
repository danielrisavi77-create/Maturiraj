/**
 * H28 — H28 · Sažetak | Maturiraj.hr · matura · pisanje · plagijat detektor
 * Auto-generated from Maturiraj_Hrvatski_H28.html
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
<button type="button" class="btt" id="btt" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Natrag na vrh" title="Natrag na vrh">↑</button>


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
<button type="button" class="sb-hamburger" id="hamburger" onclick="openSb()" aria-label="Izbornik">
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
  <a class="sb-item" aria-current="page" data-code="h28" href="/skripte/hrv/h28"><span class="sb-dot"></span>H28 · Sažetak</a>

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
    <span id="sb-footer-pos">28 / 28</span> · <span id="sb-footer-title">sažetak</span>
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
    <span class="bc-cur">H28 · Sažetak</span>
    <span class="bc-sep bc-tab-sep">/</span>
    <span class="bc-tab" id="bc-tab">Teorija</span>
  </div>

  <!-- COUNTDOWN + ACTIONS -->
  <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:20px">
    <div class="countdown" style="margin-bottom:0">
      ⏳ Do ispita HRV: <strong id="cd-days">—</strong> dana &nbsp;<span style="font-size:9px;color:var(--t3)">(15. 6. 2026.)</span>
    </div>
    <button type="button" class="fcb" onclick="window.print()" style="font-size:10px" title="Print / PDF (Ctrl+P)">🖨 Print</button>
    <button type="button" class="fcb" onclick="navigator.share?navigator.share({title:'H28 · Sažetak',url:window.location.href}):navigator.clipboard.writeText(window.location.href)" style="font-size:10px" title="Podijeli">📤 Dijeli</button>
    <span style="font-family:var(--mono);font-size:9px;color:var(--t3);margin-left:auto">
      <span class="kbd">←</span> <span class="kbd">→</span> tabovi · <span class="kbd">?</span> pomoć
    </span>
  </div>

  <!-- HERO -->
  <header class="hero">
    <div class="hero-chapter">H28 &nbsp;·&nbsp; Pisanje &nbsp;·&nbsp; Sažetak</div>
    <h1 class="hero-title">Sažetak<br><span>4 koraka · workspace · plagijat detektor · 10 tekstova</span></h1>
    <p class="hero-sub">
      <strong>Sustavni vodič kroz pisanje sažetka za maturu.</strong> <em>4 koraka sažimanja</em> (čitanje → ključne informacije → redukcija → oblikovanje), <em>pravila parafraziranja</em>, <em>plagijat vs. sažetak</em>. <strong>Workspace</strong> s 10 autentičnih tekstova, <strong>plagijat detektor</strong>, <em>word count tracker</em>. Sažetak = 1/3 originalnog teksta, vlastite rečenice (NE prepisivanje), neutralan ton. <strong>Maturalni zahtjev:</strong> sažetak publicističkog i/ili stručnog teksta u II. cjelini ispita.
    </p>
    <div class="hero-chips">
        <span class="pill p-pa hchip">📖 Teorija + dijagnostika</span>
        <span class="pill p-br hchip">🤖 AI feedback ⭐ PRO</span>
        <span class="pill p-pa hchip">📋 4 koraka pisanja</span>
        <span class="pill p-br hchip">🚨 Plagijat detektor</span>
        <span class="pill p-pa hchip">📝 Workspace · 10 tekstova</span>
        <span class="pill p-br hchip">✓ 20-stavki checklist</span>
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
    <button type="button" class="tab on" id="tab0" onclick="sw(0)" role="tab" aria-selected="true" aria-controls="l0">📖 Teorija<span class="tab-done" id="td0"></span></button>
    <button type="button" class="tab" id="tab1" onclick="sw(1)" role="tab" aria-selected="false" aria-controls="l1">📚 4 koraka<span class="tab-done" id="td1"></span></button>
    <button type="button" class="tab" id="tab2" onclick="sw(2)" role="tab" aria-selected="false" aria-controls="l2">📰 Tipovi tekstova<span class="tab-done" id="td2"></span></button>
    <button type="button" class="tab" id="tab3" onclick="sw(3)" role="tab" aria-selected="false" aria-controls="l3">⚠️ Anti-pravila<span class="tab-done" id="td3"></span></button>
    <button type="button" class="tab" id="tab4" onclick="sw(4)" role="tab" aria-selected="false" aria-controls="l4">📚 Pojmovnik<span class="tab-done" id="td4"></span></button>
    <button type="button" class="tab" id="tab5" onclick="sw(5)" role="tab" aria-selected="false" aria-controls="l5">✓ Checklist<span class="tab-done" id="td5"></span></button>
    <button type="button" class="tab" id="tab6" onclick="sw(6)" role="tab" aria-selected="false" aria-controls="l6">🧠 Kviz<span class="tab-badge">30</span><span class="tab-done" id="td6"></span></button>
    <button type="button" class="tab" id="tab7" onclick="sw(7)" role="tab" aria-selected="false" aria-controls="l7">📚 Pojmovnik + cheat sheet</button>
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
        <div class="diag-intro-desc">10 pitanja · ~3 min · provjeri koliko znaš o pisanju sažetka prije učenja.</div>
        <div class="diag-intro-actions">
          <button type="button" class="nb-btn primary" onclick="diag0Start()">🚀 Započni dijagnostiku</button>
          <button type="button" class="nb-btn" onclick="diag0Skip()">Preskoči</button>
        </div>
      </div>
      
      <!-- QUIZ STATE -->
      <div class="diag-quiz">
        <div class="diag-header">
          <div class="diag-lbl">Sažetak — dijagnostika</div>
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
            <button type="button" class="nb-btn primary" id="d0rbtn">Nastavi →</button>
            <button type="button" class="nb-btn" onclick="diag0Reset()">🔁 Ponovi</button>
          </div>
        </div>
      </div>
      
    </div>

    <!-- ─────────────── PRO AI FEEDBACK TEASER ─────────────── -->
    <div style="margin:18px 0;padding:14px 18px;background:linear-gradient(135deg,rgba(233,180,70,.08),rgba(74,144,217,.04));border:1px solid var(--bd);border-left:3px solid var(--gold);border-radius:var(--r2);display:flex;align-items:center;gap:14px;flex-wrap:wrap">
      <div style="font-size:24px;flex-shrink:0">🤖</div>
      <div style="flex:1;min-width:200px">
        <div style="font-family:var(--display);font-size:14px;font-weight:700;color:var(--t1);margin-bottom:3px">Pro feature: AI feedback za tvoj sažetak ⭐</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.5">AI profesor analizira tvoj sažetak po 5 kriterija (vjernost, parafraziranje, objektivnost, kompresija, stil) + procjenu ocjene 1-5.</div>
      </div>
      <button type="button" class="nb-btn primary" onclick="sw(6)" style="flex-shrink:0">Vidi više →</button>
    </div>

    <!-- ═══════════════════════════════════
         20 NAJČEŠĆIH GREŠAKA · SAŽETAK
    ═══════════════════════════════════ -->
    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">⚠️ 20 najčešćih grešaka u sažetku</div><div class="sec-line"></div></div>
    
    <div style="padding:14px 16px;background:rgba(224,82,82,.04);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r2);margin:14px 0">
      <div style="font-size:13px;line-height:1.6;color:var(--t2)">
        <strong style="color:var(--red)">Sažetak je 15-20% maturalnih bodova.</strong> Najčešće greške nisu u sadržaju, nego u <strong>kopiranju, subjektivnosti i pogrešnoj kompresiji</strong>. Pogledaj prije pisanja prvog sažetka.
      </div>
    </div>
    
    <div style="display:grid;gap:8px;margin:16px 0">
      
      <details class="ncvvo-detail">
        <summary class="ncvvo-summary"><span class="ncvvo-num">1.</span>Doslovno kopiranje (PLAGIJAT) ⭐</summary>
        <div class="ncvvo-body">Najveća greška: kopiranje 5+ uzastopnih riječi iz originala. Automatski gubiš bodove za parafraziranje (40% ocjene). <strong>Rješenje:</strong> ZATVARI original prije pisanja. Sažimaj u svojim riječima.</div>
      </details>
      
      <details class="ncvvo-detail">
        <summary class="ncvvo-summary"><span class="ncvvo-num">2.</span>Subjektivni komentari ⭐</summary>
        <div class="ncvvo-body">„Mislim da...„, „Po mom mišljenju...„, „Slažem se s autorom...". Sažetak je STROGO objektivan. <strong>Rješenje:</strong> samo prepričaj što autor kaže, bez svojih reakcija.</div>
      </details>
      
      <details class="ncvvo-detail">
        <summary class="ncvvo-summary"><span class="ncvvo-num">3.</span>Prepričavanje umjesto sažimanja ⭐</summary>
        <div class="ncvvo-body">Slijediš originalnu strukturu rečenicu po rečenicu, samo skraćujući. To NIJE sažetak — to je skraćeno prepričavanje. <strong>Rješenje:</strong> identificiraj GLAVNE IDEJE, izrazi ih svojim riječima.</div>
      </details>
      
      <details class="ncvvo-detail">
        <summary class="ncvvo-summary"><span class="ncvvo-num">4.</span>Premalo riječi (&lt;150) ⭐</summary>
        <div class="ncvvo-body">Sažetak ispod 150 riječi obično preskače ključne ideje. <strong>Rješenje:</strong> ciljaj 170-190 riječi. Pisanje ide po formuli „glavna ideja + 1-2 ključna detalja" za svaki paragraf originala.</div>
      </details>
      
      <details class="ncvvo-detail">
        <summary class="ncvvo-summary"><span class="ncvvo-num">5.</span>Previše riječi (&gt;200) ⭐</summary>
        <div class="ncvvo-body">Predugačak sažetak nije sažetak. Gubi suštinu kompresije. <strong>Rješenje:</strong> ako prijeđeš 200, briši nepotrebne primjere i objašnjenja.</div>
      </details>
      
      <details class="ncvvo-detail">
        <summary class="ncvvo-summary"><span class="ncvvo-num">6.</span>Gubitak ključnih ideja ⭐</summary>
        <div class="ncvvo-body">Sažetak koji izostavlja glavne argumente autora. <strong>Rješenje:</strong> prije pisanja, identificiraj 3-5 KLJUČNIH IDEJA — one MORAJU biti u sažetku.</div>
      </details>
      
      <details class="ncvvo-detail">
        <summary class="ncvvo-summary"><span class="ncvvo-num">7.</span>Uključivanje sporednih detalja</summary>
        <div class="ncvvo-body">Spomen sporednih primjera ili anegdota koje original ima. <strong>Rješenje:</strong> u sažetku idu samo glavne ideje. Detalje izostavljaš.</div>
      </details>
      
      <details class="ncvvo-detail">
        <summary class="ncvvo-summary"><span class="ncvvo-num">8.</span>Izmišljanje sadržaja ⭐</summary>
        <div class="ncvvo-body">Dodavanje informacija koje original NEMA. <strong>Rješenje:</strong> sažetak može biti SAMO ono što autor doslovno kaže, ničim više.</div>
      </details>
      
      <details class="ncvvo-detail">
        <summary class="ncvvo-summary"><span class="ncvvo-num">9.</span>Pogrešna kompresija</summary>
        <div class="ncvvo-body">Sažetak koji je 50% originala (predug) ili 5% (prekratak). <strong>Rješenje:</strong> ciljaj 15-25% originala. Original 800r → sažetak 160r.</div>
      </details>
      
      <details class="ncvvo-detail">
        <summary class="ncvvo-summary"><span class="ncvvo-num">10.</span>Citati u sažetku</summary>
        <div class="ncvvo-body">Doslovno citiranje rečenica originala, čak i u navodnicima. Sažetak NE koristi citate. <strong>Rješenje:</strong> sve parafraziraj — citati su za eseje, ne za sažetke.</div>
      </details>
      
      <details class="ncvvo-detail">
        <summary class="ncvvo-summary"><span class="ncvvo-num">11.</span>Pogrešan slijed misli</summary>
        <div class="ncvvo-body">Sažetak ne slijedi logiku originala. <strong>Rješenje:</strong> zadrži red ideja iz originala. Ako autor ide A→B→C, tvoj sažetak ide A→B→C.</div>
      </details>
      
      <details class="ncvvo-detail">
        <summary class="ncvvo-summary"><span class="ncvvo-num">12.</span>Nedostatak veza između misli</summary>
        <div class="ncvvo-body">Niz odvojenih rečenica bez veze. <strong>Rješenje:</strong> koristi tranzicije („Nadalje", „Slično tome", „Konačno") da pokažeš logiku.</div>
      </details>
      
      <details class="ncvvo-detail">
        <summary class="ncvvo-summary"><span class="ncvvo-num">13.</span>Promjena tona originala</summary>
        <div class="ncvvo-body">Original je neutralan — sažetak emocionalan. Original je ironičan — sažetak ozbiljan. <strong>Rješenje:</strong> zadrži ton originala. Ako autor je kritičan, i sažetak je kritičan.</div>
      </details>
      
      <details class="ncvvo-detail">
        <summary class="ncvvo-summary"><span class="ncvvo-num">14.</span>Prva osoba („Pisac kaže...")</summary>
        <div class="ncvvo-body">Konstantno spominjanje autora („Autor kaže...„, „Pisac smatra..."). <strong>Rješenje:</strong> uvod 1x: „Tekst tvrdi/izlaže..." i dalje samo prikaz ideja.</div>
      </details>
      
      <details class="ncvvo-detail">
        <summary class="ncvvo-summary"><span class="ncvvo-num">15.</span>Pravopisne greške (vidi H25) ⭐</summary>
        <div class="ncvvo-body">Pravopis = 20% bodova. Najčešće: spojeno/odvojeno, č/ć, đ/dž. <strong>Rješenje:</strong> H25 + pažljiva revizija.</div>
      </details>
      
      <details class="ncvvo-detail">
        <summary class="ncvvo-summary"><span class="ncvvo-num">16.</span>Interpunkcijske greške (vidi H26) ⭐</summary>
        <div class="ncvvo-body">Najčešće: zarez, navodnici. <strong>Rješenje:</strong> H26 + Proofreading mode.</div>
      </details>
      
      <details class="ncvvo-detail">
        <summary class="ncvvo-summary"><span class="ncvvo-num">17.</span>Loš naslov sažetka</summary>
        <div class="ncvvo-body">Naslov koji ne odražava sažetak ili nije autentičan. <strong>Rješenje:</strong> ako se traži naslov — formuliraj nakon pisanja sažetka, neka odražava glavnu ideju.</div>
      </details>
      
      <details class="ncvvo-detail">
        <summary class="ncvvo-summary"><span class="ncvvo-num">18.</span>Žurba i bez revizije ⭐</summary>
        <div class="ncvvo-body">Sažetak dovršiš 5 minuta prije kraja — nema vremena za reviziju. <strong>Rješenje:</strong> 40 min pisanje, 20 min revizija. Pri reviziji loviš pravopis, plagijat, objektivnost.</div>
      </details>
      
      <details class="ncvvo-detail">
        <summary class="ncvvo-summary"><span class="ncvvo-num">19.</span>Doslovni prijevod fraza</summary>
        <div class="ncvvo-body">„The author argues" → „Autor argumentira" (anglizam). <strong>Rješenje:</strong> koristi prirodne hrvatske izraze („autor tvrdi", „tekst pokazuje").</div>
      </details>
      
      <details class="ncvvo-detail">
        <summary class="ncvvo-summary"><span class="ncvvo-num">20.</span>Pogrešna struktura ⭐</summary>
        <div class="ncvvo-body">Sažetak bez jasnog uvoda i zaključka. <strong>Rješenje:</strong> 1. rečenica = uvod (čime se tekst bavi), srednji dio = razrada, posljednja rečenica = zaključak/poruka.</div>
      </details>
      
    </div>

    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">🧠 Mnemotehnike · za brzo pamćenje</div><div class="sec-line"></div></div>
    
    <div style="padding:18px;background:linear-gradient(135deg,rgba(233,180,70,.06),transparent);border:1px solid var(--bd);border-radius:var(--r2);margin:14px 0">
      <div style="font-size:13px;line-height:1.7;color:var(--t2);font-family:var(--serif)">
        Sažetak se gradi po 4 koraka. Ovi trikovi ti pamtiti formulu i izbjegavanje plagijata.
      </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:10px;margin:16px 0">
      
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
        <div class="cap-mono-gold">4 KORAKA: ČIPR ⭐</div>
        <div style="font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:8px">Č-I-P-R formula</div>
        <div style="font-size:12px;color:var(--t2);line-height:1.6">
          <strong>Č</strong>itanje (2-3x) → <strong>I</strong>dentifikacija glavnih ideja → <strong>P</strong>arafraziranje → <strong>R</strong>evizija. ČIPR = sažetak.
        </div>
      </div>
      
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
        <div class="cap-mono-gold">150-200 RIJEČI ⭐</div>
        <div style="font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:8px">Idealna duljina</div>
        <div style="font-size:12px;color:var(--t2);line-height:1.6">
          Manje od 150 = penalizacija. Više od 200 = penalizacija. <strong>Sweet spot: 170-190.</strong>
        </div>
      </div>
      
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
        <div class="cap-mono-gold">20% PRAVILO ⭐</div>
        <div style="font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:8px">Kompresija</div>
        <div style="font-size:12px;color:var(--t2);line-height:1.6">
          Sažetak je <strong>~20% originala</strong>. Original 800r → sažetak 160r. Original 1000r → sažetak 200r.
        </div>
      </div>
      
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
        <div class="cap-mono-gold">ZATVORI ORIGINAL ⭐</div>
        <div style="font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:8px">Anti-plagijat trik</div>
        <div style="font-size:12px;color:var(--t2);line-height:1.6">
          Pri pisanju sažetka, <strong>ZATVORI</strong> (sakrij) original. Tako ne možeš nesvjesno kopirati rečenice.
        </div>
      </div>
      
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
        <div class="cap-mono-gold">5 RIJEČI = PLAGIJAT ⭐</div>
        <div style="font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:8px">Pravilo plagijata</div>
        <div style="font-size:12px;color:var(--t2);line-height:1.6">
          Ako kopiraš <strong>5+ uzastopnih riječi</strong> iz originala = plagijat. Naš detektor će to odmah označiti.
        </div>
      </div>
      
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
        <div class="cap-mono-gold">JA NEMAM RIJEČ ⭐</div>
        <div style="font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:8px">Anti-subjektivnost</div>
        <div style="font-size:12px;color:var(--t2);line-height:1.6">
          U sažetku NEMA „JA". Bez „mislim da", „po mom mišljenju", „slažem se". Sažetak je <strong>strogo objektivan</strong>.
        </div>
      </div>
      
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
        <div class="cap-mono-gold">3 KLJUČNE IDEJE</div>
        <div style="font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:8px">Identifikacija</div>
        <div style="font-size:12px;color:var(--t2);line-height:1.6">
          Prije pisanja, <strong>označi 3-5 ključnih ideja</strong> u originalu. Sve OSTALO izostavi.
        </div>
      </div>
      
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
        <div class="cap-mono-gold">SLIJED ORIGINALA</div>
        <div style="font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:8px">Logika</div>
        <div style="font-size:12px;color:var(--t2);line-height:1.6">
          Zadrži <strong>red ideja</strong> iz originala. Ako autor ide A→B→C, tvoj sažetak ide A→B→C.
        </div>
      </div>
      
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
        <div class="cap-mono-gold">2:1 VRIJEME ⭐</div>
        <div style="font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:8px">Pisanje vs revizija</div>
        <div style="font-size:12px;color:var(--t2);line-height:1.6">
          <strong>40 min pisanje + 20 min revizija</strong>. Bez revizije gubiš pravopisne i interpunkcijske bodove.
        </div>
      </div>
      
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
        <div class="cap-mono-gold">SINONIMI = STIL</div>
        <div style="font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:8px">Parafraziranje</div>
        <div style="font-size:12px;color:var(--t2);line-height:1.6">
          Zamijeni ključne riječi <strong>sinonimima</strong>. „Važno" → „presudno"; „dobar" → „kvalitetan".
        </div>
      </div>
      
    </div>

    <!-- ─────────────── TEST RAZUMIJEVANJA TEORIJE ─────────────── -->
    <div class="sec-hdr" style="margin-top:36px"><div class="sec-line"></div><div class="sec-badge">🎯 Test razumijevanja · primjeni teoriju odmah</div><div class="sec-line"></div></div>
    
    <div style="padding:14px 16px;background:rgba(74,144,217,.04);border:1px solid var(--bd);border-left:3px solid var(--blue);border-radius:var(--r2);margin:14px 0">
      <div style="font-size:13px;line-height:1.6;color:var(--t2)">
        <strong style="color:var(--blue)">10 mikro-pitanja iz svih kategorija interpunkcije.</strong> Provjeri jesi li shvatio teoriju prije nego što kreneš na detaljne tabove. Klikni odgovor — instant feedback.
      </div>
    </div>

    <div id="t0-exercise"></div>

    <!-- NAV ROW -->
    <div class="nav-row" style="justify-content:flex-end">
      <span class="nb-btn primary" onclick="sw(1)">📚 4 koraka →</span>
    </div>

  
    <div class="cheat-card" style="margin-top:24px">
      <div class="cheat-hdr">
        <div class="cheat-hdr-l">
          <div class="cheat-eye">SLJEDEĆE</div>
          <div class="cheat-ttl">Tab 1 · 4 koraka u sažetku</div>
        </div>
      </div>
      <div class="cheat-grid">
        <div class="cheat-col cheat-col-wide" style="font-family:var(--serif,Fraunces,serif);font-size:13.5px;color:var(--t2,#c5b8aa);line-height:1.65">
          <p style="margin:0">Sad kad znaš što je sažetak — <b>Tab 1</b> donosi metodu: 4 koraka koji vode do dobrog sažetka. Identifikacija glavne ideje, eliminacija detalja, parafraza, struktura.</p>
        </div>
      </div>
    </div>

    </div><!-- /l0 -->

  <div class="layer" id="l1" role="tabpanel" tabindex="0">

    <div class="tags">
      <span class="pill p-pa hchip">📋 4 koraka</span>
      <span class="pill p-br hchip">⭐ sustavan pristup</span>
      <span class="pill p-pa hchip">🎯 Sustavni pristup</span>
    </div>

    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">📋 4 koraka pisanja sažetka · sustavan pristup</div><div class="sec-line"></div></div>
    
    <div class="box-int">
      <div class="box-int-lbl">📋 Sustavni pristup</div>
      <div class="box-int-txt">
        Sažetak nije slučajno skraćivanje teksta. To je <strong>4-korakni proces</strong>: <strong>Č</strong>itanje → <strong>I</strong>dentifikacija → <strong>P</strong>arafraziranje → <strong>R</strong>evizija. Ako preskočiš jedan korak, sažetak će biti slab.
      </div>
    </div>

    <div style="margin:18px 0;padding:14px 18px;background:linear-gradient(135deg,rgba(233,180,70,.08),rgba(74,144,217,.04));border:1px solid var(--bd);border-left:3px solid var(--gold);border-radius:var(--r2);display:flex;align-items:center;gap:14px;flex-wrap:wrap">
      <div style="font-size:24px;flex-shrink:0">📝</div>
      <div style="flex:1;min-width:200px">
        <div style="font-family:var(--display);font-size:14.5px;font-weight:700;color:var(--t1);margin-bottom:3px">Naučio formulu? Vježbaj u Workspaceu.</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.5">Workspace ima <strong style="color:var(--gold)">10 polaznih tekstova</strong> + plagijat detektor + word counter.</div>
      </div>
      <button type="button" class="nb-btn primary" onclick="sw(4)" style="flex-shrink:0">Otvori Workspace →</button>
    </div>

    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">1. ČITANJE · 10-15 min ⭐</div><div class="sec-line"></div></div>
    
    <div class="pravilo-box">
      <div class="pravilo-header">📋 Krenuti pisanje bez čitanja je najveća greška</div>
      <div class="pravilo-desc">Original čitaš <strong>2-3 puta</strong> prije nego što napišeš ijednu riječ. Svako čitanje ima drugu svrhu.</div>
      <div class="ex-label-ok">✅ KAKO ČITATI</div>
      <ul class="list-mono-int">
        <li><strong>1. čitanje (5 min):</strong> brzo, za UKUPAN dojam — o čemu se radi?</li>
        <li><strong>2. čitanje (7 min):</strong> sporo, traženje GLAVNIH IDEJA — što autor zapravo poručuje?</li>
        <li><strong>3. čitanje (3 min):</strong> potvrda — jesi li promaknuo nešto važno?</li>
      </ul>
      <div class="ex-label-blue">⚪ TRIK</div>
      <ul class="list-mono-int">
        <li>Tijekom 2. čitanja olovkom <strong>označi 3-5 ključnih rečenica</strong></li>
        <li>Tezne rečenice obično se nalaze na <strong>početku ili kraju</strong> paragrafa</li>
        <li>Pažnja na riječi: „dakle", „stoga", „glavni razlog", „suština" — sigurni znakovi tezne rečenice</li>
      </ul>
    </div>

    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">2. IDENTIFIKACIJA · 10 min ⭐</div><div class="sec-line"></div></div>
    
    <div class="pravilo-box">
      <div class="pravilo-header">📋 Što izvlačiš, što izbacuješ</div>
      <div class="pravilo-desc">Sažetak je <strong>20% originala</strong>. To znači da 80% sadržaja IDE U KOŠ. Treba znati što je ključno, što sporedno.</div>
      <div class="ex-label-ok">✅ ŠTO ULAZI U SAŽETAK</div>
      <ul class="list-mono-int">
        <li><strong>Glavna teza ili tema</strong> teksta</li>
        <li><strong>Glavni argumenti / ideje</strong> (3-5 ključnih)</li>
        <li><strong>Zaključak ili poruka</strong> autora</li>
        <li><strong>Veze između ideja</strong> (uzrok-posljedica, kontrast)</li>
      </ul>
      <div class="ex-label-no">❌ ŠTO IZBACUJEŠ</div>
      <ul class="list-mono-int">
        <li>Citati i konkretni primjeri (osim ako su jako važni)</li>
        <li>Sporedni detalji (statistike, godine, imena)</li>
        <li>Anegdote i ilustracije</li>
        <li>Stilske figure (metafore, usporedbe)</li>
        <li>Ponavljanja i digresije</li>
      </ul>
    </div>

    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">3. PARAFRAZIRANJE · 25 min ⭐⭐</div><div class="sec-line"></div></div>
    
    <div class="pravilo-box">
      <div class="pravilo-header">📋 Najvažnija vještina — pisanje SVOJIM riječima</div>
      <div class="pravilo-desc">Parafraziranje znači <strong>ista ideja, drugi izraz</strong>. To je suprotno od kopiranja. <strong>5+ uzastopnih riječi iz originala = PLAGIJAT</strong>.</div>
      <div class="ex-label-ok">✅ TRI TEHNIKE PARAFRAZIRANJA</div>
      <ul class="list-mono-int">
        <li><strong>Sinonimi:</strong> „važno" → „presudno"; „dobar" → „kvalitetan"</li>
        <li><strong>Promjena strukture rečenice:</strong> aktiv → pasiv, glavni razlog premjestiti</li>
        <li><strong>Kondenzacija:</strong> dvije rečenice spojiti u jednu</li>
      </ul>
      <div class="ex-label-blue">⚪ ANTI-PLAGIJAT TRIK</div>
      <ul class="list-mono-int">
        <li><strong>ZATVORI ORIGINAL</strong> dok pišeš sažetak. Imaj samo svoje bilješke iz koraka 2.</li>
        <li>Ako se zaglaviš, vrati se na original, pročitaj rečenicu, <strong>zatvori, prepiši svojim riječima</strong></li>
        <li>Provjeri pomoću <strong>plagijat detektora u Workspace-u</strong></li>
      </ul>
    </div>

    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">4. REVIZIJA · 15 min ⭐</div><div class="sec-line"></div></div>
    
    <div class="pravilo-box">
      <div class="pravilo-header">📋 Bez revizije gubiš 20% bodova</div>
      <div class="pravilo-desc">Revizija lovi <strong>pravopisne i interpunkcijske greške</strong>, <strong>plagijat</strong>, <strong>subjektivne fraze</strong>, <strong>krivi word count</strong>.</div>
      <div class="ex-label-ok">✅ REVIZIJA CHECKLIST</div>
      <ul class="list-mono-int">
        <li><strong>Word count:</strong> 150-200 riječi?</li>
        <li><strong>Plagijat:</strong> nema 5+ uzastopnih riječi iz originala?</li>
        <li><strong>Objektivnost:</strong> nema „mislim da", „po mom mišljenju"?</li>
        <li><strong>Sve glavne ideje uključene:</strong> 3-5 ključnih ideja?</li>
        <li><strong>Pravopis:</strong> č/ć, đ/dž, spojeno/odvojeno (vidi H25)?</li>
        <li><strong>Interpunkcija:</strong> zarez, navodnici „..." (vidi H26)?</li>
        <li><strong>Slijed misli:</strong> logičan red kao u originalu?</li>
      </ul>
    </div>

    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">⏱ Vremenska podjela · 60 min</div><div class="sec-line"></div></div>
    
    <div class="table-wrap">
      <table style="width:100%;border-collapse:collapse;font-family:var(--mono);font-size:12px">
        <thead>
          <tr style="background:var(--ele);border-bottom:2px solid var(--gold)">
            <th class="tbl-cell" style="text-align:left;color:var(--gold);font-size:11px;width:50px">KORAK</th>
            <th class="tbl-cell" style="text-align:left;color:var(--gold);font-size:11px;width:80px">VRIJEME</th>
            <th class="tbl-cell" style="text-align:left;color:var(--gold);font-size:11px">AKTIVNOST</th>
          </tr>
        </thead>
        <tbody>
          <tr class="tbl-row-bd"><td class="tbl-cell-bold">1. Č</td><td class="tbl-cell-bold">10-15 min</td><td class="tbl-cell">Čitanje 2-3x, označavanje ključnih rečenica</td></tr>
          <tr class="tbl-row-bd"><td class="tbl-cell-bold">2. I</td><td class="tbl-cell-bold">10 min</td><td class="tbl-cell">Identifikacija glavnih ideja, bilješke</td></tr>
          <tr class="tbl-row-bd"><td class="tbl-cell-bold">3. P</td><td class="tbl-cell-bold">25 min</td><td class="tbl-cell">Parafraziranje — pisanje sažetka svojim riječima</td></tr>
          <tr><td class="tbl-cell-bold">4. R</td><td class="tbl-cell-bold">15 min</td><td class="tbl-cell">Revizija — pravopis, plagijat, objektivnost, kompresija</td></tr>
        </tbody>
      </table>
    </div>

    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">🎯 Provjera razumijevanja · 4 koraka</div><div class="sec-line"></div></div>
    <div style="padding:14px 16px;background:rgba(74,144,217,.04);border:1px solid var(--bd);border-left:3px solid var(--blue);border-radius:var(--r2);margin:14px 0">
      <div style="font-size:13px;line-height:1.6;color:var(--t2)"><strong style="color:var(--blue)">10 pitanja iz strukture pisanja sažetka.</strong></div>
    </div>
    <div id="koraci-exercise"></div>

    
    <!-- VIDEO RESURSI — v3.5 -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">Video resursi</div><div class="sec-line"></div></div>

    <div class="prose">Kada ti tekst nije dovoljan — vizualni učenici često bolje pamte kroz video objašnjenja i predstave. Ovdje su pouzdani edukacijski resursi na YouTubeu.</div>

    <div class="yt-grid">
      <a class="yt-card" href="https://www.youtube.com/results?search_query=kako+pisati+sažetak+matura+parafraziranje+plagijat" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇭🇷</span> HR</div>
          <div class="yt-title">Kako pisati sažetak — matura savjeti</div>
        </div>
      </a>

      <a class="yt-card" href="https://www.youtube.com/results?search_query=sažimanje+teksta+vlastite+riječi+parafraziranje+škola" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇭🇷</span> HR</div>
          <div class="yt-title">Sažimanje teksta — parafraziranje</div>
        </div>
      </a>

      <a class="yt-card" href="https://www.youtube.com/results?search_query=how+to+write+summary+paraphrasing+tips+no+plagiarism" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇬🇧</span> EN</div>
          <div class="yt-title">How to write a summary — no plagiarism</div>
        </div>
      </a>

      <a class="yt-card" href="https://www.youtube.com/results?search_query=summarizing+vs+paraphrasing+academic+writing+guide" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🎬</span> EN</div>
          <div class="yt-title">Summarizing vs paraphrasing — guide</div>
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
      <button type="button" class="nb-btn" onclick="sw(0)">← Teorija</button>
      <button type="button" class="nb-btn primary" onclick="sw(2)">Tipovi tekstova →</button>
    </div>
  
  </div><!-- /l1 -->

  <div class="layer" id="l2" role="tabpanel" tabindex="0">

    <div class="tags">
      <span class="pill p-pa hchip">📰 Tipovi tekstova</span>
      <span class="pill p-br hchip">📚 4 tipa</span>
      <span class="pill p-pa hchip">🎯 Specifične strategije</span>
    </div>

    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">📰 4 tipa polaznih tekstova</div><div class="sec-line"></div></div>
    
    <div class="box-int">
      <div class="box-int-lbl">📰 Različiti tekstovi, različite strategije</div>
      <div class="box-int-txt">Maturalni polazni tekst može biti <strong>esejistički, novinski, znanstveni ili književni</strong>. Svaki tip ima svoje karakteristike pa zahtijeva i drugačiji pristup sažimanju.</div>
    </div>

    <div style="margin:18px 0;padding:14px 18px;background:linear-gradient(135deg,rgba(233,180,70,.08),rgba(74,144,217,.04));border:1px solid var(--bd);border-left:3px solid var(--gold);border-radius:var(--r2);display:flex;align-items:center;gap:14px;flex-wrap:wrap">
      <div style="font-size:24px;flex-shrink:0">📝</div>
      <div style="flex:1;min-width:200px">
        <div style="font-family:var(--display);font-size:14.5px;font-weight:700;color:var(--t1);margin-bottom:3px">Workspace ima sva 4 tipa</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.5">2-3 polazna teksta po tipu = ukupno <strong style="color:var(--gold)">10 tekstova</strong>.</div>
      </div>
      <button type="button" class="nb-btn primary" onclick="sw(4)" style="flex-shrink:0">Otvori Workspace →</button>
    </div>

    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">1. ESEJISTIČKI tekst ⭐</div><div class="sec-line"></div></div>
    <div class="pravilo-box">
      <div class="pravilo-header">📋 Karakteristike</div>
      <div class="pravilo-desc">Tekst u kojem autor <strong>iznosi mišljenje, raspravlja, argumentira</strong>. Najčešći tip na maturi. Primjeri: kolumne Krleže, Matoša, Šenoe.</div>
      <div class="ex-label-ok">✅ ŠTO LOVITI</div>
      <ul class="list-mono-int">
        <li><strong>Glavna TEZA</strong> autora (središnji stav)</li>
        <li><strong>Argumenti za tezu</strong> (1-3 ključna)</li>
        <li><strong>Protuargumenti</strong> (ako su navedeni)</li>
        <li><strong>Zaključak</strong></li>
      </ul>
      <div class="ex-label-blue">⚪ TRIK</div>
      <ul class="list-mono-int">
        <li>Tezne rečenice obično se nalaze u <strong>uvodu i zaključku</strong></li>
        <li>Riječi „dakle", „smatra", „tvrdi" otkrivaju autorov stav</li>
      </ul>
    </div>

    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">2. NOVINSKI tekst</div><div class="sec-line"></div></div>
    <div class="pravilo-box">
      <div class="pravilo-header">📋 Karakteristike</div>
      <div class="pravilo-desc">Tekst pisanih medija — <strong>vijest, intervju, reportaža, analiza</strong>. Tipično ima 5W: tko, što, kad, gdje, zašto.</div>
      <div class="ex-label-ok">✅ ŠTO LOVITI</div>
      <ul class="list-mono-int">
        <li><strong>Tema članka</strong> (o čemu se radi)</li>
        <li><strong>Glavni akter</strong> (tko, što, kad, gdje)</li>
        <li><strong>Ključne činjenice</strong> (najvažnije statistike, brojevi)</li>
        <li><strong>Posljedica / zaključak</strong></li>
      </ul>
      <div class="ex-label-blue">⚪ TRIK</div>
      <ul class="list-mono-int">
        <li>Novinski tekst koristi <strong>obrnutu piramidu</strong>: najvažnije ide na početak</li>
        <li>Prva 1-2 paragrafa već imaju ~70% ključnih informacija</li>
      </ul>
    </div>

    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">3. ZNANSTVENO-POPULARNI tekst</div><div class="sec-line"></div></div>
    <div class="pravilo-box">
      <div class="pravilo-header">📋 Karakteristike</div>
      <div class="pravilo-desc">Tekst koji popularno objašnjava <strong>znanstveni fenomen</strong>. Klima, AI, biologija, povijest. Tipično ima problem → objašnjenje → primjer → zaključak.</div>
      <div class="ex-label-ok">✅ ŠTO LOVITI</div>
      <ul class="list-mono-int">
        <li><strong>Glavni fenomen / problem</strong> koji se objašnjava</li>
        <li><strong>Kako funkcionira</strong> (mehanizam)</li>
        <li><strong>Zašto je važno</strong> (značaj, posljedice)</li>
        <li><strong>Otvorena pitanja</strong> (ako su navedena)</li>
      </ul>
      <div class="ex-label-no">❌ ŠTO IZBACITI</div>
      <ul class="list-mono-int">
        <li>Konkretne brojke i statistike (osim 1-2 najvažnije)</li>
        <li>Imena znanstvenika (osim ako su ključni)</li>
        <li>Tehnički detalji (formule, postupci)</li>
      </ul>
    </div>

    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">4. KNJIŽEVNI odlomak</div><div class="sec-line"></div></div>
    <div class="pravilo-box">
      <div class="pravilo-header">📋 Karakteristike</div>
      <div class="pravilo-desc">Odlomak iz <strong>romana, novele, drame</strong>. Najteži tip jer ima radnju, likove, atmosferu. Sažetak mora prenijeti i sadržaj i dojam.</div>
      <div class="ex-label-ok">✅ ŠTO LOVITI</div>
      <ul class="list-mono-int">
        <li><strong>Tko</strong> su glavni likovi (1-2)</li>
        <li><strong>Što se događa</strong> — radnja, događaj</li>
        <li><strong>Gdje i kad</strong> (kontekst, ako je važan)</li>
        <li><strong>Sukob ili tema</strong> (što odlomak razotkriva)</li>
      </ul>
      <div class="ex-label-no">❌ ŠTO IZBACITI</div>
      <ul class="list-mono-int">
        <li>Stilske figure i metafore</li>
        <li>Detaljni opisi atmosfere</li>
        <li>Citati likova</li>
      </ul>
    </div>

    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">🎯 Provjera razumijevanja · tipovi tekstova</div><div class="sec-line"></div></div>
    <div style="padding:14px 16px;background:rgba(74,144,217,.04);border:1px solid var(--bd);border-left:3px solid var(--blue);border-radius:var(--r2);margin:14px 0">
      <div style="font-size:13px;line-height:1.6;color:var(--t2)"><strong style="color:var(--blue)">10 pitanja iz prepoznavanja tipova tekstova.</strong></div>
    </div>
    <div id="tipovi-exercise"></div>

    <div class="nav-row" style="margin-top:32px;display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap">
      <button type="button" class="nb-btn" onclick="sw(1)">← 4 koraka</button>
      <button type="button" class="nb-btn primary" onclick="sw(3)">Anti-pravila →</button>
    </div>
  
  </div><!-- /l2 -->
     <div class="layer" id="l3" role="tabpanel" tabindex="0">

    <div class="tags">
      <span class="pill p-pa hchip">⚠️ Anti-pravila</span>
      <span class="pill p-br hchip">🚫 20 najgorih grešaka</span>
      <span class="pill p-pa hchip">📊 Loš vs dobar primjer</span>
    </div>

    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">⚠️ Anti-pravila · što NE raditi u sažetku</div><div class="sec-line"></div></div>
    
    <div class="box-int">
      <div class="box-int-lbl">⚠️ Najvažnije pravilo</div>
      <div class="box-int-txt"><strong>Znati što NE raditi važnije je nego znati što raditi.</strong> 80% bodova se gubi zbog samo nekoliko klasičnih grešaka. Pogledaj prije pisanja prvog sažetka.</div>
    </div>

    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">🚫 1. NE — Doslovno kopiranje (PLAGIJAT) ⭐</div><div class="sec-line"></div></div>
    <div class="pravilo-box">
      <div class="pravilo-header">📋 Najveća greška</div>
      <div class="pravilo-desc">Kopiranje <strong>5+ uzastopnih riječi</strong> iz originala = automatski gubiš bodove za parafraziranje (40% ocjene).</div>
      <div class="ex-label-no">❌ LOŠ PRIMJER (kopija iz originala)</div>
      <div style="font-family:var(--serif);font-size:13px;color:var(--t2);font-style:italic;line-height:1.6;padding:10px 14px;background:rgba(224,82,82,.04);border-radius:var(--r1);margin-bottom:8px">Sažetak: „Krleža u svom esejskom djelu razotkriva temeljne probleme hrvatske kulture..." (doslovno iz originala)</div>
      <div class="ex-label-ok">✅ DOBAR PRIMJER (parafrazirano)</div>
      <div style="font-family:var(--serif);font-size:13px;color:var(--t2);font-style:italic;line-height:1.6;padding:10px 14px;background:rgba(80,200,120,.04);border-radius:var(--r1)">Sažetak: „Tekst tematizira ključne dileme suvremene hrvatske kulturne scene..."</div>
    </div>

    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">🚫 2. NE — Subjektivni komentari ⭐</div><div class="sec-line"></div></div>
    <div class="pravilo-box">
      <div class="pravilo-header">📋 Sažetak je objektivan</div>
      <div class="pravilo-desc">Bez „mislim da", „po mom mišljenju", „slažem se", „autor je u pravu", „šokantno je". Sažetak prepričava — ne komentira.</div>
      <div class="ex-label-no">❌ LOŠ PRIMJER</div>
      <div style="font-family:var(--serif);font-size:13px;color:var(--t2);font-style:italic;line-height:1.6;padding:10px 14px;background:rgba(224,82,82,.04);border-radius:var(--r1);margin-bottom:8px">„Mislim da autor sjajno objašnjava kako je hrvatska kultura..."</div>
      <div class="ex-label-ok">✅ DOBAR PRIMJER</div>
      <div style="font-family:var(--serif);font-size:13px;color:var(--t2);font-style:italic;line-height:1.6;padding:10px 14px;background:rgba(80,200,120,.04);border-radius:var(--r1)">„Tekst objašnjava kako je hrvatska kultura..."</div>
    </div>

    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">🚫 3. NE — Prepričavanje umjesto sažimanja ⭐</div><div class="sec-line"></div></div>
    <div class="pravilo-box">
      <div class="pravilo-header">📋 Razlika je suštinska</div>
      <div class="pravilo-desc"><strong>Prepričavanje</strong> slijedi original rečenicu po rečenicu, samo skraćuje. <strong>Sažimanje</strong> izvlači GLAVNE IDEJE i prezentira ih svojim riječima.</div>
      <div class="ex-label-no">❌ LOŠ PRIMJER (prepričavanje)</div>
      <div style="font-family:var(--serif);font-size:13px;color:var(--t2);font-style:italic;line-height:1.6;padding:10px 14px;background:rgba(224,82,82,.04);border-radius:var(--r1);margin-bottom:8px">„Autor počinje s tezom o kulturi. Zatim govori o povijesnim utjecajima. Onda objašnjava modernu situaciju. Na kraju zaključuje..."</div>
      <div class="ex-label-ok">✅ DOBAR PRIMJER (sažimanje)</div>
      <div style="font-family:var(--serif);font-size:13px;color:var(--t2);font-style:italic;line-height:1.6;padding:10px 14px;background:rgba(80,200,120,.04);border-radius:var(--r1)">„Tekst tvrdi da hrvatska kultura nosi povijesni teret koji oblikuje i suvremenu kreativnost..."</div>
    </div>

    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">🚫 4. NE — Krivi word count ⭐</div><div class="sec-line"></div></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0">
      <div style="padding:14px;background:rgba(224,82,82,.04);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <div class="cap-mono-gold" style="color:var(--red)">PREMALO &lt;150r</div>
        <div style="font-family:var(--display);font-size:14px;font-weight:700;color:var(--red);margin-bottom:8px">Posljedica</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.6">Sigurno preskačeš ključne ideje. Penalizacija minimum -2 boda.</div>
      </div>
      <div style="padding:14px;background:rgba(224,82,82,.04);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <div class="cap-mono-gold" style="color:var(--red)">PREVIŠE &gt;200r</div>
        <div style="font-family:var(--display);font-size:14px;font-weight:700;color:var(--red);margin-bottom:8px">Posljedica</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.6">Predug sažetak gubi smisao kompresije. Penalizacija -1 do -3.</div>
      </div>
    </div>

    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">🚫 5. NE — Izmišljanje sadržaja ⭐</div><div class="sec-line"></div></div>
    <div class="pravilo-box">
      <div class="pravilo-header">📋 Sažetak može SAMO ono što original kaže</div>
      <div class="pravilo-desc">Dodavanje informacija koje autor NIJE napisao = totalna greška. Sažetak ima samo ono što je u originalu.</div>
      <div class="ex-label-no">❌ LOŠ PRIMJER</div>
      <div style="font-family:var(--serif);font-size:13px;color:var(--t2);font-style:italic;line-height:1.6;padding:10px 14px;background:rgba(224,82,82,.04);border-radius:var(--r1);margin-bottom:8px">Original spominje Krležu. Tvoj sažetak: „Krleža, najveći hrvatski pisac 20. stoljeća, koji je dobio Nazorovu nagradu..." (autor toga NIJE napisao)</div>
      <div class="ex-label-ok">✅ DOBAR PRIMJER</div>
      <div style="font-family:var(--serif);font-size:13px;color:var(--t2);font-style:italic;line-height:1.6;padding:10px 14px;background:rgba(80,200,120,.04);border-radius:var(--r1)">„Krležino djelo postavlja pitanja o hrvatskoj kulturi..."</div>
    </div>

    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">🚫 6. NE — Citati u sažetku</div><div class="sec-line"></div></div>
    <div class="pravilo-box">
      <div class="pravilo-desc">Sažetak <strong>ne koristi citate</strong>, čak ni u navodnicima. Sve parafraziraj. Citati su za eseje.</div>
      <div class="ex-label-no">❌ LOŠ PRIMJER</div>
      <div style="font-family:var(--serif);font-size:13px;color:var(--t2);font-style:italic;line-height:1.6;padding:10px 14px;background:rgba(224,82,82,.04);border-radius:var(--r1);margin-bottom:8px">Sažetak: „Autor tvrdi: „Hrvatska kultura je u krizi"."</div>
      <div class="ex-label-ok">✅ DOBAR PRIMJER</div>
      <div style="font-family:var(--serif);font-size:13px;color:var(--t2);font-style:italic;line-height:1.6;padding:10px 14px;background:rgba(80,200,120,.04);border-radius:var(--r1)">Sažetak: „Autor tvrdi da je hrvatska kultura u krizi."</div>
    </div>

    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">🚫 Dodatna anti-pravila</div><div class="sec-line"></div></div>
    <div style="padding:14px 16px;background:rgba(224,82,82,.04);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r2);margin:14px 0">
      <ol style="margin:0;padding-left:20px;font-size:13px;line-height:1.8;color:var(--t2)">
        <li><strong>Bez konstantnog „autor kaže..."</strong> — uvod 1x, dalje samo prikaz ideja</li>
        <li><strong>Bez „pisac smatra..."</strong> — sažetak nije karakterizacija autora</li>
        <li><strong>Bez stilskih figura</strong> — bez metafora, usporedbi, antiteza</li>
        <li><strong>Bez sporednih detalja</strong> — godine, imena, statistike (osim ključnih)</li>
        <li><strong>Bez vlastite atmosfere</strong> — zadrži ton originala</li>
        <li><strong>Bez izokretanja smisla</strong> — sve mora biti vjerno autoru</li>
        <li><strong>Bez retoričkih pitanja</strong> — sažetak je deklarativan</li>
        <li><strong>Bez emocionalnih pridjeva</strong> — „šokantno", „strašno", „čudesno"</li>
        <li><strong>Bez vlastitog mišljenja na kraju</strong> — zaključak ostaje autorov</li>
        <li><strong>Bez ironije i humora</strong> — sažetak je neutralan</li>
        <li><strong>Bez digresija</strong> — sažetak ide ravno na poantu</li>
        <li><strong>Bez „dakle, kao što vidimo"</strong> — to su veze za eseje</li>
        <li><strong>Bez doslovnog prijevoda anglizama</strong> — koristi prirodne hrvatske izraze</li>
        <li><strong>Bez ponavljanja istih riječi</strong> — koristi sinonime</li>
      </ol>
    </div>

    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">🎯 Provjera razumijevanja · anti-pravila</div><div class="sec-line"></div></div>
    <div style="padding:14px 16px;background:rgba(74,144,217,.04);border:1px solid var(--bd);border-left:3px solid var(--blue);border-radius:var(--r2);margin:14px 0">
      <div style="font-size:13px;line-height:1.6;color:var(--t2)"><strong style="color:var(--blue)">10 pitanja iz najčešćih grešaka.</strong></div>
    </div>
    <div id="anti-exercise"></div>

    <div class="nav-row" style="margin-top:32px;display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap">
      <button type="button" class="nb-btn" onclick="sw(2)">← Tipovi tekstova</button>
      <button type="button" class="nb-btn primary" onclick="sw(4)">📝 Workspace →</button>
    </div>
  
  </div><!-- /l3 -->

  <div class="layer" id="l4" role="tabpanel" tabindex="0">

    <div class="tags">
      <span class="pill p-pa hchip">📝 Workspace</span>
      <span class="pill p-br hchip">📰 10 polaznih tekstova</span>
      <span class="pill p-pa hchip">🚨 Plagijat detektor</span>
      <span class="pill p-br hchip">⚖️ Objektivnost check</span>
    </div>

    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">📝 Sažetak Workspace · split-screen + plagijat detektor</div><div class="sec-line"></div></div>
    
    <div class="box-int">
      <div class="box-int-lbl">📝 Glavni feature H28</div>
      <div class="box-int-txt">
        <strong>Interaktivni urednik za sažetke.</strong> 10 polaznih tekstova (4 tipa: esejistički, novinski, znanstveni, književni). <strong>Split-screen</strong> — original lijevo, tvoj sažetak desno. <strong>🚨 Plagijat detektor</strong> automatski detektira kopirane segmente (5+ riječi). <strong>⚖️ Objektivnost check</strong> upozorava na subjektivne fraze. Word counter + kompresija %. Auto-save 5s. Modelni sažetak za usporedbu. Realna simulacija mature.
      </div>
    </div>

    <!-- WORKSPACE UI -->
    <div id="sum-wrap"></div>

    <div class="nav-row" style="margin-top:32px;display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap">
      <button type="button" class="nb-btn" onclick="sw(3)">← Anti-pravila</button>
      <button type="button" class="nb-btn primary" onclick="sw(5)">🔄 Parafraziranje →</button>
    </div>
  
  </div><!-- /l4 -->

  <div class="layer" id="l5" role="tabpanel" tabindex="0">

    <div class="tags">
      <span class="pill p-pa hchip">🔄 Parafraziranje</span>
      <span class="pill p-br hchip">🛠 10 tehnika</span>
      <span class="pill p-pa hchip">📚 Sinonimi za „kaže"</span>
    </div>

    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">🔄 Parafraziranje · ključna vještina sažetka</div><div class="sec-line"></div></div>
    
    <div class="box-int">
      <div class="box-int-lbl">🔄 Najvažnija vještina</div>
      <div class="box-int-txt">
        Parafraziranje = <strong>ista poruka, drugi izraz</strong>. Bez ove vještine, sažetak postaje plagijat. Pogledaj <strong>10 tehnika parafraziranja</strong> i tablicu sinonima za „kaže" — najčešći problem ponavljanja u sažetku.
      </div>
    </div>

    <!-- 10 TEHNIKA -->
    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">🛠 10 tehnika parafraziranja</div><div class="sec-line"></div></div>
    
    <div style="display:grid;gap:10px;margin:16px 0">
      
      <div class="pravilo-box">
        <div class="cap-mono-gold">1. SINONIMI ⭐</div>
        <div class="pravilo-header">Zamjena riječi srodnim</div>
        <div class="pravilo-desc">Najjednostavnija tehnika. <strong>„mnogi" → brojni, raznovrsni, niz; „važno" → ključno, presudno, esencijalno.</strong></div>
        <div class="ex-label-no">❌ Original</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2);background:rgba(224,82,82,.06);padding:8px 12px;border-radius:var(--r1);margin:6px 0">Mnogi smatraju da je sport važan za zdravlje.</div>
        <div class="ex-label-ok">✅ Parafraza</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2);background:rgba(80,200,120,.06);padding:8px 12px;border-radius:var(--r1)">Brojni vjeruju da je tjelesna aktivnost presudna za dobrobit.</div>
      </div>
      
      <div class="pravilo-box">
        <div class="cap-mono-gold">2. PROMJENA STRUKTURE REČENICE ⭐</div>
        <div class="pravilo-header">Aktiv ↔ pasiv, kratke ↔ duge</div>
        <div class="pravilo-desc">Mijenjaj sintaktičku strukturu, čak i kad zadržaš slične riječi.</div>
        <div class="ex-label-no">❌ Original (aktiv)</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2);background:rgba(224,82,82,.06);padding:8px 12px;border-radius:var(--r1);margin:6px 0">Klimatske promjene utječu na biljni svijet.</div>
        <div class="ex-label-ok">✅ Parafraza (pasiv)</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2);background:rgba(80,200,120,.06);padding:8px 12px;border-radius:var(--r1)">Biljni svijet trpi posljedice klimatskih promjena.</div>
      </div>
      
      <div class="pravilo-box">
        <div class="cap-mono-gold">3. KONDENZACIJA ⭐</div>
        <div class="pravilo-header">Više rečenica → jedna</div>
        <div class="pravilo-desc">Najmoćnija tehnika za sažimanje. 3 rečenice originala = 1 rečenica sažetka.</div>
        <div class="ex-label-no">❌ Original (3 rečenice)</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2);background:rgba(224,82,82,.06);padding:8px 12px;border-radius:var(--r1);margin:6px 0">Hrvatska ima rekordan broj turista. Najviše ih dolazi iz Njemačke. Slijede Slovenija i Austrija.</div>
        <div class="ex-label-ok">✅ Parafraza (1 rečenica)</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2);background:rgba(80,200,120,.06);padding:8px 12px;border-radius:var(--r1)">Rekordan broj turista u Hrvatskoj predvođen je Nijemcima, Slovencima i Austrijancima.</div>
      </div>
      
      <div class="pravilo-box">
        <div class="cap-mono-gold">4. PROMJENA REDA ELEMENATA</div>
        <div class="pravilo-header">Uzrok-posljedica ↔ posljedica-uzrok</div>
        <div class="pravilo-desc">Mijenjaj kojim redom predstavljaš informacije.</div>
        <div class="ex-label-no">❌ Original</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2);background:rgba(224,82,82,.06);padding:8px 12px;border-radius:var(--r1);margin:6px 0">Pad cijena nekretnina uzrokuje krizu građevinskog sektora.</div>
        <div class="ex-label-ok">✅ Parafraza</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2);background:rgba(80,200,120,.06);padding:8px 12px;border-radius:var(--r1)">Građevinski sektor trpi krizu zbog pada cijena nekretnina.</div>
      </div>
      
      <div class="pravilo-box">
        <div class="cap-mono-gold">5. GENERALIZACIJA</div>
        <div class="pravilo-header">Specifični primjeri → kategorija</div>
        <div class="pravilo-desc">Ako original navodi više konkretnih primjera, sažetak ih može objediniti.</div>
        <div class="ex-label-no">❌ Original</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2);background:rgba(224,82,82,.06);padding:8px 12px;border-radius:var(--r1);margin:6px 0">Vis, Lastovo, Mljet, Korčula i Hvar suočavaju se s problemom pitke vode.</div>
        <div class="ex-label-ok">✅ Parafraza</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2);background:rgba(80,200,120,.06);padding:8px 12px;border-radius:var(--r1)">Hrvatski otoci suočavaju se s problemom pitke vode.</div>
      </div>
      
      <div class="pravilo-box">
        <div class="cap-mono-gold">6. SPECIFIKACIJA</div>
        <div class="pravilo-header">Apstraktno → konkretno</div>
        <div class="pravilo-desc">Suprotno generalizaciji — ako original koristi apstraktne pojmove, sažetak ih može precizirati.</div>
        <div class="ex-label-no">❌ Original</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2);background:rgba(224,82,82,.06);padding:8px 12px;border-radius:var(--r1);margin:6px 0">Razna obrazovna tijela podržavaju projekt.</div>
        <div class="ex-label-ok">✅ Parafraza</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2);background:rgba(80,200,120,.06);padding:8px 12px;border-radius:var(--r1)">Ministarstvo, fakulteti i strukovne udruge podržavaju projekt.</div>
      </div>
      
      <div class="pravilo-box">
        <div class="cap-mono-gold">7. PROMJENA GRAMATIČKOG VREMENA</div>
        <div class="pravilo-header">Prošlost ↔ sadašnjost</div>
        <div class="pravilo-desc">Korisno kad se sažima povijesni sadržaj. Sažetak može u prezentu.</div>
        <div class="ex-label-no">❌ Original (prošlost)</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2);background:rgba(224,82,82,.06);padding:8px 12px;border-radius:var(--r1);margin:6px 0">Krleža je 1929. započeo s pisanjem Glembajevih.</div>
        <div class="ex-label-ok">✅ Parafraza (prezent)</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2);background:rgba(80,200,120,.06);padding:8px 12px;border-radius:var(--r1)">Krleža Glembajeve piše od 1929.</div>
      </div>
      
      <div class="pravilo-box">
        <div class="cap-mono-gold">8. NOMINALIZACIJA</div>
        <div class="pravilo-header">Glagol → imenica (i obrnuto)</div>
        <div class="pravilo-desc">„Odlučivati" → „odluka"; „izvoditi" → „izvedba". Skraćuje izraz.</div>
        <div class="ex-label-no">❌ Original</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2);background:rgba(224,82,82,.06);padding:8px 12px;border-radius:var(--r1);margin:6px 0">Vlada je odlučila uvesti nove poreze.</div>
        <div class="ex-label-ok">✅ Parafraza</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2);background:rgba(80,200,120,.06);padding:8px 12px;border-radius:var(--r1)">Vladina odluka donosi nove poreze.</div>
      </div>
      
      <div class="pravilo-box">
        <div class="cap-mono-gold">9. PROMJENA PERSPEKTIVE ⭐</div>
        <div class="pravilo-header">„Autor kaže" → „U tekstu se navodi"</div>
        <div class="pravilo-desc">Najčešći problem sažetka — ponavljanje „autor kaže". Promijeni perspektivu.</div>
        <div class="ex-label-no">❌ Original (ponavljanje)</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2);background:rgba(224,82,82,.06);padding:8px 12px;border-radius:var(--r1);margin:6px 0">Autor kaže da... Autor naglašava... Autor smatra...</div>
        <div class="ex-label-ok">✅ Parafraza (varijacija)</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2);background:rgba(80,200,120,.06);padding:8px 12px;border-radius:var(--r1)">Autor obrazlaže... U tekstu se ističe... Navodi se da...</div>
      </div>
      
      <div class="pravilo-box">
        <div class="cap-mono-gold">10. SINTEZA VIŠE REČENICA ⭐</div>
        <div class="pravilo-header">Spajanje srodnih ideja</div>
        <div class="pravilo-desc">Različite rečenice koje govore o istoj temi mogu se sintetizirati.</div>
        <div class="ex-label-no">❌ Original (3 odvojene rečenice)</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2);background:rgba(224,82,82,.06);padding:8px 12px;border-radius:var(--r1);margin:6px 0">Plaće u Hrvatskoj su niske. Stanovi su skupi. Birokracija je spora.</div>
        <div class="ex-label-ok">✅ Parafraza (sinteza)</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2);background:rgba(80,200,120,.06);padding:8px 12px;border-radius:var(--r1)">Niske plaće, skupi stanovi i spora birokracija glavni su faktori odlaska mladih.</div>
      </div>
      
    </div>

    <!-- SINONIMI ZA „KAŽE" -->
    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">📚 Sinonimi za „kaže" · obavezno za sažetak</div><div class="sec-line"></div></div>
    
    <div class="pravilo-box">
      <div class="pravilo-header">📋 Najveća greška sažetka: ponavljanje „autor kaže"</div>
      <div class="pravilo-desc">
        U sažetku ćeš se na autora referirati 5-10 puta. Ako svaki put pišeš „kaže", gubiš bodove za stil. Koristi <strong>varijaciju</strong>.
      </div>
    </div>

    <div class="table-wrap">
      <table style="width:100%;border-collapse:collapse;font-family:var(--mono);font-size:12px">
        <thead>
          <tr style="background:var(--ele);border-bottom:2px solid var(--gold)">
            <th class="tbl-cell" style="text-align:left;color:var(--gold);font-size:11px;width:120px">UMJESTO</th>
            <th class="tbl-cell" style="text-align:left;color:var(--gold);font-size:11px">KORISTI</th>
          </tr>
        </thead>
        <tbody>
          <tr class="tbl-row-bd"><td class="tbl-cell-bold">kaže</td><td class="tbl-cell">tvrdi, ističe, naglašava, smatra, obrazlaže, navodi, izjavljuje</td></tr>
          <tr class="tbl-row-bd"><td class="tbl-cell-bold">misli</td><td class="tbl-cell">smatra, drži, vjeruje, zaključuje, ocjenjuje</td></tr>
          <tr class="tbl-row-bd"><td class="tbl-cell-bold">pokazuje</td><td class="tbl-cell">otkriva, dokazuje, ilustrira, demonstrira, svjedoči</td></tr>
          <tr class="tbl-row-bd"><td class="tbl-cell-bold">objašnjava</td><td class="tbl-cell">obrazlaže, razjašnjava, tumači, opisuje, prikazuje</td></tr>
          <tr class="tbl-row-bd"><td class="tbl-cell-bold">važno</td><td class="tbl-cell">ključno, presudno, neophodno, temeljno, esencijalno</td></tr>
          <tr class="tbl-row-bd"><td class="tbl-cell-bold">mnogo</td><td class="tbl-cell">brojni, mnoštvo, golem, znatan, niz</td></tr>
          <tr class="tbl-row-bd"><td class="tbl-cell-bold">na kraju</td><td class="tbl-cell">naposljetku, konačno, sumirajući, zaokružujući</td></tr>
          <tr><td class="tbl-cell-bold">zaključuje</td><td class="tbl-cell">sintetizira, zaokružuje, sumira, izvodi zaključak</td></tr>
        </tbody>
      </table>
    </div>

    <!-- INLINE QUIZ -->
    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">🎯 Provjera razumijevanja · parafraziranje</div><div class="sec-line"></div></div>
    
    <div style="padding:14px 16px;background:rgba(74,144,217,.04);border:1px solid var(--bd);border-left:3px solid var(--blue);border-radius:var(--r2);margin:14px 0">
      <div style="font-size:13px;line-height:1.6;color:var(--t2)">
        <strong style="color:var(--blue)">10 pitanja iz tehnika parafraziranja.</strong>
      </div>
    </div>

    <div id="parafraza-exercise"></div>

    <div class="nav-row" style="margin-top:32px;display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap">
      <button type="button" class="nb-btn" onclick="sw(4)">← Workspace</button>
      <button type="button" class="nb-btn primary" onclick="sw(6)">✓ Checklist →</button>
    </div>
  
  </div><!-- /l5 -->

  <div class="layer" id="l6" role="tabpanel" tabindex="0">

    <div class="tags">
      <span class="pill p-pa hchip">✓ Checklist</span>
      <span class="pill p-br hchip">📊 25 stavki</span>
      <span class="pill p-pa hchip">🤖 Auto-detection</span>
    </div>

    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">✓ Sažetak Checklist · 20 stavki</div><div class="sec-line"></div></div>
    
    <div class="box-int">
      <div class="box-int-lbl">✓ Glavni feature H27</div>
      <div class="box-int-txt">
        <strong>Provjeri sažetak prije predaje.</strong> 20 stavki organiziranih u 4 kategorije: <strong>Vjernost, Parafraziranje, Objektivnost, Pismenost</strong>. Neke se provjeravaju automatski (word count, plagijat, objektivnost, hrvatski navodnici), većinu označavaš sam. ⭐ označava NCVVO-kritične stavke.
      </div>
    </div>

    <!-- CHECKLIST UI -->
    <div id="chk-wrap"></div>

    
    <!-- ─────────────── AI FEEDBACK · PRO FEATURE ─────────────── -->
    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">🤖 AI Feedback · Pro feature ⭐</div><div class="sec-line"></div></div>
    
    <div id="ai-feedback-wrap"></div>

    <div class="nav-row" style="margin-top:32px;display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap">
      <button type="button" class="nb-btn" onclick="sw(5)">← Parafraziranje</button>
      <button type="button" class="nb-btn primary" onclick="sw(7)">📚 Pojmovnik + cheat sheet →</button>
    </div>
  
  </div>

  <!-- ══════════════════════════════════════
      TAB 7 · POJMOVNIK + CHEAT SHEET
  ══════════════════════════════════════ -->
  <div class="layer" id="l7" role="tabpanel" tabindex="0">

    <div class="tags">
      <span class="pill p-pa hchip">📚 Pojmovnik · 40 pojmova</span>
      <span class="pill p-br hchip">📋 Cheat sheet · maturalni</span>
    </div>

    <!-- ─────────────── POJMOVNIK ─────────────── -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">📚 Pojmovnik · 40 sažetak pojmova</div><div class="sec-line"></div></div>
    
    <div class="box-int">
      <div class="box-int-lbl">📚 Brza referenca</div>
      <div class="box-int-txt">
        Idealno za <strong>brzu provjeru</strong> tijekom učenja ili pred maturom. <strong>⭐</strong> označava ključne NCVVO pojmove.
      </div>
    </div>

    <div class="pojm-controls" style="margin:18px 0">
      <div class="pojm-filters" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px">
        <button type="button" class="pojm-filter active" onclick="pojmFilter2('all', this)" style="padding:6px 12px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;border-radius:20px;cursor:pointer;border:1px solid var(--gold);background:var(--gold);color:#0F0605">Sve</button>
        <button type="button" class="pojm-filter" onclick="pojmFilter2('struktura', this)" style="padding:6px 12px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;border-radius:20px;cursor:pointer;border:1px solid var(--bd);background:transparent;color:var(--t3)">Struktura</button>
        <button type="button" class="pojm-filter" onclick="pojmFilter2('parafraza', this)" style="padding:6px 12px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;border-radius:20px;cursor:pointer;border:1px solid var(--bd);background:transparent;color:var(--t3)">Parafraziranje</button>
        <button type="button" class="pojm-filter" onclick="pojmFilter2('objektivnost', this)" style="padding:6px 12px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;border-radius:20px;cursor:pointer;border:1px solid var(--bd);background:transparent;color:var(--t3)">Objektivnost</button>
        <button type="button" class="pojm-filter" onclick="pojmFilter2('tipovi', this)" style="padding:6px 12px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;border-radius:20px;cursor:pointer;border:1px solid var(--bd);background:transparent;color:var(--t3)">Tipovi tekstova</button>
        <button type="button" class="pojm-filter" onclick="pojmFilter2('pismenost', this)" style="padding:6px 12px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;border-radius:20px;cursor:pointer;border:1px solid var(--bd);background:transparent;color:var(--t3)">Pismenost</button>
        <button type="button" class="pojm-filter" onclick="pojmFilter2('ocjena', this)" style="padding:6px 12px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;border-radius:20px;cursor:pointer;border:1px solid var(--bd);background:transparent;color:var(--t3)">Ocjenjivanje</button>
      </div>
    </div>
    
    <div id="pojm-grid2" class="pojm-grid"></div>

    <!-- ─────────────── CHEAT SHEET ─────────────── -->
    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">📋 Cheat sheet · za maturu</div><div class="sec-line"></div></div>
    
    <div style="padding:18px;background:linear-gradient(135deg,rgba(233,180,70,.04),transparent);border:1px solid var(--bd);border-radius:var(--r2);margin:14px 0">
      <div style="font-size:13px;line-height:1.7;color:var(--t2);font-family:var(--serif)">
        <strong>Sve sažetak-ključno na jednom mjestu.</strong> Print prije mature za brzu reviziju.
      </div>
    </div>

    <!-- 4 KORAKA -->
    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">📋 4 koraka · brza referenca</div><div class="sec-line"></div></div>
    
    <div class="table-wrap">
      <table style="width:100%;border-collapse:collapse;font-family:var(--mono);font-size:12px">
        <thead>
          <tr style="background:var(--ele);border-bottom:2px solid var(--gold)">
            <th class="tbl-cell" style="text-align:left;color:var(--gold);font-size:11px;width:60px">#</th>
            <th class="tbl-cell" style="text-align:left;color:var(--gold);font-size:11px;width:130px">KORAK</th>
            <th class="tbl-cell" style="text-align:left;color:var(--gold);font-size:11px;width:80px">VRIJEME</th>
            <th class="tbl-cell" style="text-align:left;color:var(--gold);font-size:11px">CILJ</th>
          </tr>
        </thead>
        <tbody>
          <tr class="tbl-row-bd"><td class="tbl-cell-bold">1.</td><td class="tbl-cell-bold">ČITANJE</td><td class="tbl-cell-bold">15 min</td><td class="tbl-cell">Razumjeti tekst (2 čitanja, podvlači ključno)</td></tr>
          <tr class="tbl-row-bd"><td class="tbl-cell-bold">2.</td><td class="tbl-cell-bold">IDENTIFIKACIJA</td><td class="tbl-cell-bold">5 min</td><td class="tbl-cell">Glavne ideje (5W+H)</td></tr>
          <tr class="tbl-row-bd"><td class="tbl-cell-bold">3.</td><td class="tbl-cell-bold">PARAFRAZIRANJE</td><td class="tbl-cell-bold">30 min</td><td class="tbl-cell">Pisanje sažetka (sinonimi + struktura)</td></tr>
          <tr><td class="tbl-cell-bold">4.</td><td class="tbl-cell-bold">REVIZIJA</td><td class="tbl-cell-bold">10 min</td><td class="tbl-cell">Pravopis, word count, plagijat check</td></tr>
        </tbody>
      </table>
    </div>

    <!-- 12 NAJČEŠĆIH GREŠAKA -->
    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">⚠️ 12 najčešćih grešaka — pamti pred maturom</div><div class="sec-line"></div></div>
    
    <div style="padding:18px;background:rgba(224,82,82,.04);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r2);margin:14px 0">
      <ol style="margin:0;padding-left:20px;font-size:13px;line-height:1.8;color:var(--t2)">
        <li><strong style="color:var(--red)">Plagijat</strong> — 5+ uzastopnih riječi iz originala</li>
        <li><strong style="color:var(--red)">Prepričavanje</strong> — sažetak nije pripovijest, već ekstrakt</li>
        <li><strong style="color:var(--red)">Subjektivnost</strong> — bez „mislim da", „smatram"</li>
        <li><strong style="color:var(--red)">Premalo riječi</strong> (&lt;150) — penalizacija</li>
        <li><strong style="color:var(--red)">Previše riječi</strong> (&gt;200) — penalizacija</li>
        <li><strong style="color:var(--red)">Gubitak ideje</strong> — sve glavne ideje moraju biti tu</li>
        <li><strong style="color:var(--red)">Dodavanje</strong> — ne izmišljaj informacije</li>
        <li><strong style="color:var(--red)">Mijenjanje slijeda</strong> — slijedi original</li>
        <li><strong style="color:var(--red)">Engleski navodnici</strong> "..." — koristi „..."</li>
        <li><strong style="color:var(--red)">Ponavljanje „kaže"</strong> — koristi sinonime (tvrdi, ističe, navodi)</li>
        <li><strong style="color:var(--red)">Bez autora i naslova</strong> — 1. rečenica</li>
        <li><strong style="color:var(--red)">Bez revizije</strong> — 10 min lekture obavezno</li>
      </ol>
    </div>

    <!-- SINONIMI ZA „KAŽE" -->
    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">📚 Sinonimi za „kaže" · obavezno</div><div class="sec-line"></div></div>
    
    <div style="padding:14px 18px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);margin:14px 0">
      <div style="font-family:var(--mono);font-size:12px;line-height:1.7;color:var(--t2)">
        <strong>tvrdi · ističe · naglašava · smatra · obrazlaže · navodi · izjavljuje · objašnjava · razjašnjava · tumači · prikazuje · drži · vjeruje · zaključuje · ocjenjuje · sintetizira · zaokružuje</strong>
      </div>
    </div>

    <!-- TIPOVI TEKSTOVA TABLE -->
    <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">📰 4 tipa tekstova · strategije</div><div class="sec-line"></div></div>
    
    <div class="table-wrap">
      <table style="width:100%;border-collapse:collapse;font-family:var(--mono);font-size:12px">
        <thead>
          <tr style="background:var(--ele);border-bottom:2px solid var(--gold)">
            <th class="tbl-cell" style="text-align:left;color:var(--gold);font-size:11px;width:130px">TIP</th>
            <th class="tbl-cell" style="text-align:left;color:var(--gold);font-size:11px">STRATEGIJA SAŽIMANJA</th>
          </tr>
        </thead>
        <tbody>
          <tr class="tbl-row-bd"><td class="tbl-cell-bold">📚 ESEJISTIČKI</td><td class="tbl-cell">Teza + 3-4 argumenta + zaključak</td></tr>
          <tr class="tbl-row-bd"><td class="tbl-cell-bold">📰 NOVINSKI</td><td class="tbl-cell">5W+H (tko/što/kad/gdje/zašto/kako)</td></tr>
          <tr class="tbl-row-bd"><td class="tbl-cell-bold">🔬 ZNANSTVENI</td><td class="tbl-cell">Koncept + mehanizam + implikacija</td></tr>
          <tr><td class="tbl-cell-bold">📖 KNJIŽEVNI</td><td class="tbl-cell">Autor + djelo + akteri + radnja + poruka</td></tr>
        </tbody>
      </table>
    </div>

    <!-- PRINT -->
    <div style="margin-top:32px;padding:16px 20px;background:linear-gradient(135deg,rgba(233,180,70,.06),transparent);border:1px solid var(--bd);border-radius:var(--r2);text-align:center">
      <div style="font-family:var(--display);font-size:16px;font-weight:700;color:var(--gold);margin-bottom:8px">🖨 Pripremi se za maturu</div>
      <div style="font-size:13px;color:var(--t2);line-height:1.6;margin-bottom:14px">
        Printaj ovaj cheat sheet kao A4 brzu referencu.
      </div>
      <button type="button" class="nb-btn primary" onclick="window.print()" style="padding:10px 24px">🖨 Printaj cheat sheet</button>
    </div>

    <div class="nav-row" style="margin-top:32px;display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap">
      <button type="button" class="nb-btn" onclick="sw(6)">← Checklist</button>
      <button type="button" class="nb-btn primary" onclick="sw(0)">📖 Početak</button>
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
      
      <a class="chapter-nav-card chapter-nav-prev" href="/skripte/hrv/h27">
        <div class="chapter-nav-arrow">←</div>
        <div class="chapter-nav-meta">
          <div class="chapter-nav-pill">PRETHODNO</div>
          <div class="chapter-nav-name">H27 · Školski esej</div>
          <div class="chapter-nav-desc">3 tipa eseja + Workspace s 30 tema + 25-stavki checklist</div>
        </div>
      </a>
      
      <div class="chapter-nav-card chapter-nav-next chapter-nav-coming-soon">
        <div class="chapter-nav-meta">
          <div class="chapter-nav-pill chapter-nav-pill-next">USKORO</div>
          <div class="chapter-nav-name">H29 · Stilske figure</div>
          <div class="chapter-nav-desc">Metafora, metonimija, antiteza, gradacija — uskoro!</div>
        </div>
        <div class="chapter-nav-arrow">→</div>
      </div>
      
    </div>

    <div class="chapter-nav-related">
      <div class="chapter-nav-related-ttl">🔗 Povezana poglavlja</div>
      <div class="chapter-nav-related-grid">
        <a class="chapter-nav-mini" href="/skripte/hrv/h27">
          <span class="chapter-nav-mini-code">H27</span>
          <span class="chapter-nav-mini-name">Školski esej</span>
        </a>
        <a class="chapter-nav-mini" href="/skripte/hrv/h26">
          <span class="chapter-nav-mini-code">H26</span>
          <span class="chapter-nav-mini-name">Interpunkcija</span>
        </a>
        <a class="chapter-nav-mini" href="/skripte/hrv/h25">
          <span class="chapter-nav-mini-code">H25</span>
          <span class="chapter-nav-mini-name">Pravopis</span>
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
    <div class="foot-line"><b>Maturiraj.hr</b> · Hrvatski · H28 Sažetak</div>
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



/* ═══════════════════════════════════
   INLINE QUIZ — Tab 1, 2, 3, 4, 5
   ═══════════════════════════════════ */
.prav-card {
  padding: 20px;
  background: var(--ele);
  border: 1px solid var(--bd);
  border-left: 3px solid var(--gold);
  border-radius: var(--r2);
  margin: 16px 0;
}


.prav-meta {
  display: flex;
  justify-content: space-between;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--t3);
  margin-bottom: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--bd);
}


.prav-progress, .prav-score {
  letter-spacing: 1px;
}


.prav-progress strong, .prav-score strong {
  color: var(--gold);
  font-size: 13px;
}


.prav-question {
  font-family: var(--display);
  font-size: 18px;
  font-weight: 700;
  color: var(--t1);
  margin-bottom: 18px;
  line-height: 1.5;
}


.prav-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 12px;
}


.prav-opt {
  padding: 14px 18px;
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--bd);
  border-radius: var(--r1);
  color: var(--t1);
  font-family: var(--mono);
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  transition: all .2s ease;
  display: flex;
  align-items: center;
  gap: 12px;
}


.prav-opt:hover:not(:disabled) {
  border-color: var(--gold);
  background: rgba(233,180,70,0.04);
  transform: translateX(2px);
}


.prav-opt:disabled {
  cursor: default;
}


.prav-opt-correct {
  background: rgba(80,200,120,0.12) !important;
  border-color: var(--green) !important;
  color: var(--green) !important;
  font-weight: 700;
}


.prav-opt-correct::before {
  content: "✓";
  color: var(--green);
  font-size: 16px;
  font-weight: 900;
}


.prav-opt-wrong {
  background: rgba(224,82,82,0.10) !important;
  border-color: var(--red) !important;
  color: var(--red) !important;
}


.prav-opt-wrong::before {
  content: "✗";
  color: var(--red);
  font-size: 16px;
  font-weight: 900;
}


.prav-feedback {
  margin-top: 12px;
}


.prav-feedback-inner {
  padding: 14px 16px;
  border-radius: var(--r1);
  border-left: 3px solid;
}


.prav-feedback-ok {
  background: rgba(80,200,120,0.06);
  border-left-color: var(--green);
}


.prav-feedback-no {
  background: rgba(224,82,82,0.06);
  border-left-color: var(--red);
}


.prav-feedback-head {
  font-family: var(--display);
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 6px;
  color: var(--t1);
}


.prav-feedback-body {
  font-size: 13px;
  color: var(--t2);
  line-height: 1.5;
}


.prav-result {
  padding: 28px 20px;
  text-align: center;
  background: var(--ele);
  border: 1px solid var(--bd);
  border-radius: var(--r2);
  margin: 16px 0;
}


.prav-result-score {
  font-family: var(--display);
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 8px;
}


.prav-result-msg {
  font-family: var(--serif, var(--display));
  font-size: 14px;
  color: var(--t2);
  line-height: 1.6;
  margin-bottom: 12px;
}


/* ═══════════════════════════════════
   SPEED DRILL — Tab 6
   ═══════════════════════════════════ */
.sd-intro {
  padding: 32px 24px;
  text-align: center;
  background: linear-gradient(135deg, rgba(233,180,70,0.06), rgba(0,0,0,0.2));
  border: 1px solid var(--bd);
  border-radius: var(--r2);
  margin: 16px 0;
}


.sd-intro-icon {
  font-size: 48px;
  margin-bottom: 8px;
  animation: sd-pulse 2s ease-in-out infinite;
}


@keyframes sd-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}


.sd-intro-title {
  font-family: var(--display);
  font-size: 28px;
  font-weight: 800;
  color: var(--gold);
  margin-bottom: 4px;
  letter-spacing: -0.01em;
}


.sd-intro-sub {
  font-family: var(--mono);
  font-size: 11.5px;
  letter-spacing: 1.5px;
  color: var(--t3);
  text-transform: uppercase;
  margin-bottom: 24px;
}


.sd-intro-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 20px 0;
}


.sd-stat {
  padding: 14px 10px;
  background: var(--ele);
  border: 1px solid var(--bd);
  border-radius: var(--r1);
}


.sd-stat-num {
  font-family: var(--display);
  font-size: 24px;
  font-weight: 800;
  color: var(--gold);
  margin-bottom: 4px;
}


.sd-stat-lbl {
  font-family: var(--mono);
  font-size: 9.5px;
  letter-spacing: 1.2px;
  color: var(--t3);
  text-transform: uppercase;
}


.sd-intro-tips {
  padding: 14px 16px;
  background: rgba(74,144,217,0.04);
  border: 1px solid var(--bd);
  border-left: 3px solid var(--blue);
  border-radius: var(--r1);
  font-size: 13px;
  color: var(--t2);
  text-align: left;
  line-height: 1.6;
  margin: 18px 0;
}


.sd-start-btn {
  margin-top: 14px;
  padding: 16px 36px !important;
  font-size: 14px !important;
  font-weight: 700 !important;
  letter-spacing: 1.5px !important;
  background: linear-gradient(135deg, var(--gold), #d4a23a) !important;
  color: #0F0605 !important;
  border: none !important;
  box-shadow: 0 4px 16px rgba(233,180,70,0.3);
  animation: sd-glow 3s ease-in-out infinite;
}


@keyframes sd-glow {
  0%, 100% { box-shadow: 0 4px 16px rgba(233,180,70,0.3); }
  50% { box-shadow: 0 6px 24px rgba(233,180,70,0.5); }
}


.sd-start-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(233,180,70,0.5) !important;
}


/* GAME MODE */
.sd-game {
  padding: 24px;
  background: linear-gradient(180deg, var(--ele), var(--bg));
  border: 2px solid var(--gold);
  border-radius: var(--r2);
  margin: 16px 0;
  position: relative;
  overflow: hidden;
}


.sd-hud {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--bd);
}


.sd-hud-timer {
  font-family: var(--mono);
  font-size: 28px;
  font-weight: 800;
  color: var(--gold);
  letter-spacing: 1px;
}


.sd-hud-timer.sd-timer-warn {
  color: var(--bronze);
  animation: sd-pulse 1s ease-in-out infinite;
}


.sd-hud-timer.sd-timer-crit {
  color: var(--red);
  animation: sd-pulse 0.5s ease-in-out infinite;
}


.sd-hud-score {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--mono);
}


.sd-hud-label {
  font-size: 10px;
  letter-spacing: 1.5px;
  color: var(--t3);
  text-transform: uppercase;
  margin-right: 4px;
}


.sd-hud-value {
  font-size: 18px;
  font-weight: 700;
  color: var(--t1);
}


.sd-hud-divider {
  color: var(--t3);
  font-size: 18px;
}


.sd-hud-quit {
  background: transparent;
  border: 1px solid var(--bd);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  color: var(--t3);
  font-size: 16px;
  cursor: pointer;
  transition: all .2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}


.sd-hud-quit:hover {
  background: rgba(224,82,82,0.1);
  border-color: var(--red);
  color: var(--red);
}


.sd-cat-badge {
  display: inline-block;
  padding: 4px 10px;
  background: rgba(233,180,70,0.1);
  border: 1px solid rgba(233,180,70,0.3);
  border-radius: 4px;
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 1.5px;
  color: var(--gold);
  text-transform: uppercase;
  margin-bottom: 14px;
  font-weight: 700;
}


.sd-question {
  font-family: var(--display);
  font-size: 22px;
  font-weight: 700;
  color: var(--t1);
  line-height: 1.5;
  margin-bottom: 20px;
  min-height: 60px;
}


.sd-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}


.sd-opt {
  padding: 16px 20px;
  background: var(--ele);
  border: 2px solid var(--bd);
  border-radius: var(--r1);
  color: var(--t1);
  font-family: var(--mono);
  font-size: 15px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: all .15s ease;
}


.sd-opt:hover:not(:disabled) {
  border-color: var(--gold);
  background: rgba(233,180,70,0.06);
  transform: scale(1.01);
}


.sd-opt:disabled {
  cursor: default;
}


.sd-opt-correct {
  background: rgba(80,200,120,0.15) !important;
  border-color: var(--green) !important;
  color: var(--green) !important;
}


.sd-opt-wrong {
  background: rgba(224,82,82,0.12) !important;
  border-color: var(--red) !important;
  color: var(--red) !important;
}


.sd-flash {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 96px;
  font-weight: 900;
  pointer-events: none;
  opacity: 0;
}


.sd-flash-ok {
  color: var(--green);
  animation: sd-flash-anim 0.35s ease-out;
}


.sd-flash-no {
  color: var(--red);
  animation: sd-flash-anim 0.35s ease-out;
}


@keyframes sd-flash-anim {
  0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
  40% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(1.4); }
}


/* RESULT */
.sd-result {
  padding: 32px 24px;
  text-align: center;
  background: linear-gradient(135deg, rgba(233,180,70,0.06), rgba(0,0,0,0.2));
  border: 1px solid var(--bd);
  border-radius: var(--r2);
  margin: 16px 0;
}


.sd-result-emoji {
  font-size: 64px;
  margin-bottom: 8px;
}


.sd-result-title {
  font-family: var(--display);
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 20px;
}


.sd-result-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin: 20px 0;
}


.sd-result-stat {
  padding: 14px 8px;
  background: var(--ele);
  border: 1px solid var(--bd);
  border-radius: var(--r1);
}


.sd-result-stat-num {
  font-family: var(--display);
  font-size: 22px;
  font-weight: 800;
  color: var(--t1);
  margin-bottom: 4px;
}


.sd-result-stat-lbl {
  font-family: var(--mono);
  font-size: 9px;
  letter-spacing: 1.2px;
  color: var(--t3);
  text-transform: uppercase;
}


.sd-result-weak {
  margin: 20px 0;
  padding: 16px;
  background: rgba(224,82,82,0.04);
  border: 1px solid var(--bd);
  border-left: 3px solid var(--red);
  border-radius: var(--r1);
  text-align: left;
}


.sd-result-weak-ttl {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 1.5px;
  color: var(--red);
  margin-bottom: 10px;
  text-transform: uppercase;
}


.sd-result-weak-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}


.sd-result-weak-item {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: var(--t2);
  padding: 8px 12px;
  background: rgba(255,255,255,0.02);
  border-radius: var(--r1);
}


.sd-result-weak-count {
  font-family: var(--mono);
  font-weight: 700;
  color: var(--red);
}


.sd-result-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
}


/* HISTORY */
.sd-hist-best {
  font-size: 14px;
  color: var(--t1);
}


.sd-hist-best strong {
  color: var(--gold);
}


.sd-hist-recent {
  margin-top: 10px;
}


.sd-hist-row {
  display: grid;
  grid-template-columns: 1fr 1fr 60px;
  gap: 10px;
  padding: 8px 12px;
  background: rgba(255,255,255,0.02);
  border-radius: var(--r1);
  margin-bottom: 4px;
  font-family: var(--mono);
  font-size: 12px;
}


.sd-hist-date {
  color: var(--t3);
}


.sd-hist-score {
  color: var(--t1);
}


.sd-hist-score strong {
  color: var(--gold);
}


.sd-hist-acc {
  color: var(--blue);
  text-align: right;
}


/* MOBILE */
@media (max-width: 720px) {
  .sd-question {
    font-size: 18px;
  }
  .sd-hud-timer {
    font-size: 22px;
  }
  .sd-intro-stats, .sd-result-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  .sd-intro-icon {
    font-size: 36px;
  }
  .sd-intro-title {
    font-size: 22px;
  }
  .prav-question {
    font-size: 16px;
  }
}


.chapter-nav-grid-single{
  grid-template-columns:1fr;
  max-width:560px;
  margin-left:auto;
  margin-right:auto;
}


.chapter-nav-card::before{
  content:"";
  position:absolute;
  top:0;
  left:0;
  width:3px;
  height:100%;
  background:var(--gold, #e9b446);
  opacity:0;
  transition:opacity .25s ease;
}


.chapter-nav-card:hover::before{
  opacity:1;
}


.chapter-nav-card:hover .chapter-nav-arrow{
  color:var(--gold, #e9b446);
  transform:translateX(-2px);
}


.chapter-nav-prev .chapter-nav-arrow{
  order:0;
}


.chapter-nav-prev .chapter-nav-meta{
  order:1;
  text-align:left;
}


.chapter-nav-next .chapter-nav-arrow{
  order:1;
}


.chapter-nav-next:hover .chapter-nav-arrow{
  transform:translateX(2px);
}


.chapter-nav-coming-soon{
  cursor:not-allowed;
  opacity:0.55;
  position:relative;
}


.chapter-nav-coming-soon::after{
  content:"🚧";
  position:absolute;
  top:8px;
  right:8px;
  font-size:14px;
  opacity:0.6;
}


.chapter-nav-coming-soon:hover{
  transform:none;
  box-shadow:none;
  border-color:var(--bdr, var(--bd));
  background:var(--ele, var(--s1));
}


.chapter-nav-coming-soon:hover::before{
  opacity:0;
}


.chapter-nav-coming-soon:hover .chapter-nav-arrow{
  color:var(--muted, var(--t3));
  transform:none;
}


/* MOBILE */
@media (max-width: 720px){
  .chapter-nav-wrap{
    padding:24px 16px;
    margin-top:32px;
  }
  .chapter-nav-title{
    font-size:20px;
  }
  .chapter-nav-card{
    padding:14px 16px;
    gap:12px;
  }
  .chapter-nav-arrow{
    font-size:22px;
  }
  .chapter-nav-name{
    font-size:14.5px;
  }
  .chapter-nav-related-grid{
    grid-template-columns:1fr;
  }
  .chapter-nav-grid{
    grid-template-columns:1fr;
  }
  .chapter-nav-next .chapter-nav-meta{
    text-align:left;
  }
}




/* Speed Drill weak areas — clickable */
.sd-result-weak-item {
  transition: all .2s ease;
  border: 1px solid transparent;
}

.sd-result-weak-item:hover {
  background: rgba(233,180,70,0.06) !important;
  border-color: rgba(233,180,70,0.3);
  transform: translateX(2px);
}

.sd-weak-arrow {
  margin-left: 6px;
  color: var(--gold);
  font-weight: 800;
  opacity: 0.6;
  transition: opacity .2s ease;
}

.sd-result-weak-item:hover .sd-weak-arrow {
  opacity: 1;
}



/* ═══════════════════════════════════
   UTILITY CLASSES — extracted from inline styles
   ═══════════════════════════════════ */
.tbl-row-bd { border-bottom: 1px solid var(--bd); }

.tbl-cell { padding: 8px 10px; }

.tbl-cell-bold { padding: 8px 10px; font-weight: 700; }

.ncvvo-summary {
  cursor: pointer;
  font-family: var(--display);
  font-weight: 700;
  color: var(--t1);
  font-size: 13.5px;
}

.ncvvo-num {
  color: var(--red);
  margin-right: 8px;
}

.ncvvo-body {
  margin-top: 8px;
  font-size: 12.5px;
  line-height: 1.6;
  color: var(--t2);
}

.ncvvo-detail {
  padding: 12px 14px;
  background: var(--ele);
  border: 1px solid var(--bd);
  border-left: 3px solid var(--red);
  border-radius: var(--r1);
}




.prav-record-badge {
  display: inline-block;
  padding: 6px 12px;
  margin: 8px auto;
  background: linear-gradient(135deg, var(--gold), #d4a23a);
  color: #0F0605;
  font-family: var(--mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  border-radius: 20px;
  box-shadow: 0 2px 12px rgba(233,180,70,0.3);
  animation: prav-record-pulse 2s ease-in-out;
}

@keyframes prav-record-pulse {
  0% { transform: scale(0.9); opacity: 0; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}

.prav-result-best {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 1px;
  color: var(--t3);
  text-transform: uppercase;
  margin-top: 6px;
}

.prav-result-best strong {
  color: var(--gold);
  font-size: 13px;
}



/* Speed Drill — skip button + keyboard hints */
.sd-skip-btn {
  display: block;
  margin: 14px auto 0;
  padding: 10px 20px;
  background: transparent;
  border: 1px dashed var(--bd);
  border-radius: var(--r1);
  color: var(--t3);
  font-family: var(--mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all .2s ease;
}

.sd-skip-btn:hover {
  border-color: var(--bronze);
  color: var(--bronze);
  background: rgba(184,117,74,0.04);
}

.sd-intro-tips kbd {
  display: inline-block;
  padding: 2px 6px;
  background: var(--ele);
  border: 1px solid var(--bd);
  border-radius: 4px;
  font-family: var(--mono);
  font-size: 10px;
  color: var(--gold);
  font-weight: 700;
  margin: 0 2px;
  box-shadow: 0 1px 0 var(--bd);
}




/* ═══════════════════════════════════
   H26 UTILITY CLASSES — extracted from inline styles
   ═══════════════════════════════════ */

/* sec-hdr margins */
.mt-32 { margin-top: 32px; }


/* Mono caption (used in scene cards, mnemo) */
.cap-mono-gold {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 2px;
  color: var(--gold);
  margin-bottom: 6px;
}


/* List in cards (zarez pravila examples) */
.list-mono-int {
  margin: 0;
  padding-left: 20px;
  font-size: 13px;
  color: var(--t2);
  line-height: 1.7;
  font-family: var(--mono);
}


/* Gold pill backgrounds (scene-card badges) */
.pill-gold-dark {
  background: var(--gold);
  color: #0F0605;
}


/* Scene card sub badge containers */
.scene-pill-1, .scene-pill-2, .scene-pill-3, .scene-pill-4,
.scene-pill-5, .scene-pill-6, .scene-pill-7, .scene-pill-8 {
  background: var(--gold);
  color: #0F0605;
}


/* Pravilo header box (Tab 1) */
.pravilo-header {
  font-family: var(--display);
  font-size: 15px;
  font-weight: 700;
  color: var(--t1);
  margin-bottom: 10px;
}


/* Pravilo description (Tab 1) */
.pravilo-desc {
  font-size: 13px;
  color: var(--t2);
  line-height: 1.6;
  margin-bottom: 14px;
}


/* Pravilo box wrapper */
.pravilo-box {
  padding: 18px;
  background: var(--ele);
  border: 1px solid var(--bd);
  border-left: 3px solid var(--gold);
  border-radius: var(--r2);
  margin: 14px 0;
}


/* Section labels for examples */
.ex-label-ok {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 1.5px;
  color: var(--green);
  margin-top: 14px;
  margin-bottom: 6px;
}


.ex-label-no {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 1.5px;
  color: var(--red);
  margin-top: 14px;
  margin-bottom: 6px;
}


.ex-label-blue {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 1.5px;
  color: var(--blue);
  margin-top: 14px;
  margin-bottom: 6px;
}




/* ═══════════════════════════════════
   SAŽETAK WORKSPACE — Tab 4 (H28)
   ═══════════════════════════════════ */

/* TOPIC BROWSER */
.ws-browser { padding: 0; }


.ws-intro {
  padding: 24px 20px;
  text-align: center;
  background: linear-gradient(135deg, rgba(233,180,70,0.06), rgba(0,0,0,0.2));
  border: 1px solid var(--bd);
  border-radius: var(--r2);
  margin-bottom: 20px;
}


.ws-intro-icon { font-size: 42px; margin-bottom: 6px; }


.ws-intro-title {
  font-family: var(--display);
  font-size: 26px;
  font-weight: 800;
  color: var(--gold);
  margin-bottom: 4px;
  letter-spacing: -0.01em;
}


.ws-intro-sub {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 1.5px;
  color: var(--t3);
  text-transform: uppercase;
}


.ws-section { margin-top: 24px; }


.ws-section-title {
  font-family: var(--display);
  font-size: 16px;
  font-weight: 700;
  color: var(--t1);
  margin-bottom: 12px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--bd);
}


.ws-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 10px;
}


.ws-card {
  padding: 14px 16px;
  background: var(--ele);
  border: 1px solid var(--bd);
  border-radius: var(--r2);
  cursor: pointer;
  transition: all .2s ease;
}


.ws-card:hover {
  border-color: var(--gold);
  background: linear-gradient(135deg, var(--ele), rgba(233,180,70,0.04));
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.18);
}


.ws-card-progress { border-left: 3px solid var(--blue); }


.ws-card-pill {
  display: inline-block;
  padding: 3px 8px;
  font-family: var(--mono);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.2px;
  border-radius: 4px;
  margin-bottom: 8px;
}


.ws-pill-esej       { background: rgba(74,144,217,0.1);  color: var(--blue); }

.ws-pill-novinski   { background: rgba(184,117,74,0.1);  color: var(--bronze); }

.ws-pill-znanstveni { background: rgba(80,200,120,0.1);  color: var(--green); }

.ws-pill-knjizevni  { background: rgba(184,77,184,0.1);  color: var(--violet, #c97abe); }


.ws-card-title {
  font-family: var(--display);
  font-size: 14px;
  font-weight: 700;
  color: var(--t1);
  line-height: 1.4;
  margin-bottom: 6px;
}


.ws-card-meta {
  font-family: var(--mono);
  font-size: 10.5px;
  color: var(--t3);
  letter-spacing: 0.5px;
}


/* EDITOR MODE */
.ws-editor { padding: 0; }


.ws-editor-header {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-bottom: 14px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--bd);
  flex-wrap: wrap;
}


.ws-editor-title {
  flex: 1;
  font-family: var(--display);
  font-size: 16px;
  font-weight: 700;
  color: var(--t1);
  line-height: 1.3;
  min-width: 200px;
}


.ws-editor-pill {
  display: inline-block;
  padding: 3px 8px;
  font-family: var(--mono);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.2px;
  border-radius: 4px;
  margin-right: 8px;
}


/* SPLIT SCREEN */
.ws-split-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}


/* LEFT — ORIGINAL TEXT */
.ws-original {
  padding: 16px 18px;
  background: var(--ele);
  border: 1px solid var(--bd);
  border-radius: var(--r2);
  display: flex;
  flex-direction: column;
  max-height: 700px;
}


.ws-original-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--bd);
}


.ws-original-h {
  font-family: var(--mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: var(--gold);
  text-transform: uppercase;
}


.ws-original-meta {
  font-family: var(--mono);
  font-size: 10.5px;
  color: var(--t3);
}


.ws-original-content {
  flex: 1;
  overflow-y: auto;
  font-family: var(--serif);
  font-size: 13.5px;
  line-height: 1.7;
  color: var(--t2);
  padding-right: 8px;
}


.ws-original-content p {
  margin: 0 0 12px 0;
}


.ws-original-content p:last-child {
  margin-bottom: 0;
}


/* Custom scrollbar */
.ws-original-content::-webkit-scrollbar {
  width: 6px;
}

.ws-original-content::-webkit-scrollbar-track {
  background: rgba(0,0,0,0.1);
  border-radius: 3px;
}

.ws-original-content::-webkit-scrollbar-thumb {
  background: var(--bd);
  border-radius: 3px;
}

.ws-original-content::-webkit-scrollbar-thumb:hover {
  background: var(--gold);
}


/* RIGHT — SUMMARY EDITOR */
.ws-summary {
  display: flex;
  flex-direction: column;
  gap: 10px;
}


.ws-summary-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
}


.ws-summary-h {
  font-family: var(--mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: var(--gold);
  text-transform: uppercase;
}


.ws-summary-target {
  font-family: var(--mono);
  font-size: 10.5px;
  color: var(--t3);
}


.ws-textarea-summary {
  width: 100%;
  min-height: 280px;
  padding: 16px 18px;
  background: var(--ele);
  border: 1px solid var(--bd);
  border-radius: var(--r2);
  color: var(--t1);
  font-family: var(--serif);
  font-size: 14px;
  line-height: 1.7;
  resize: vertical;
  outline: none;
  transition: border-color .15s ease;
  box-sizing: border-box;
}


.ws-textarea-summary:focus {
  border-color: var(--gold);
  box-shadow: 0 0 0 3px rgba(233,180,70,0.12);
}


/* STATUSBAR */
.ws-statusbar {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 8px 12px;
  background: var(--ele);
  border: 1px solid var(--bd);
  border-radius: var(--r1);
}


.ws-counter {
  font-family: var(--mono);
  font-size: 12px;
  display: flex;
  align-items: baseline;
  gap: 6px;
  font-weight: 700;
  color: var(--red);
}


.ws-counter-num {
  font-size: 18px;
  font-weight: 800;
}


.ws-counter-target {
  font-size: 10px;
  color: var(--t3);
  font-weight: 400;
  letter-spacing: 0.5px;
}


.ws-counter-bar {
  height: 5px;
  background: rgba(255,255,255,0.04);
  border-radius: 3px;
  overflow: hidden;
}


.ws-counter-bar-fill {
  height: 100%;
  width: 0%;
  background: var(--red);
  transition: width 0.3s ease, background 0.3s ease;
  border-radius: 3px;
}


.ws-savestatus {
  font-family: var(--mono);
  font-size: 10.5px;
  color: var(--t3);
  letter-spacing: 0.5px;
}


/* META ROW (compression + timer) */
.ws-meta-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}


.ws-meta-cell {
  padding: 10px 12px;
  background: var(--ele);
  border: 1px solid var(--bd);
  border-radius: var(--r1);
  text-align: center;
}


.ws-meta-label {
  font-family: var(--mono);
  font-size: 9.5px;
  letter-spacing: 1.2px;
  color: var(--t3);
  margin-bottom: 4px;
  text-transform: uppercase;
}


.ws-meta-value {
  font-family: var(--mono);
  font-size: 18px;
  font-weight: 800;
  color: var(--gold);
  letter-spacing: 1px;
}


/* TIMER BUTTONS */
.ws-timer-buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
}


.ws-timer-btn {
  padding: 6px 10px;
  background: transparent;
  border: 1px solid var(--bd);
  border-radius: var(--r1);
  color: var(--t2);
  font-family: var(--mono);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all .2s ease;
}


.ws-timer-btn:hover {
  border-color: var(--gold);
  color: var(--gold);
}


.ws-timer-btn.active {
  background: var(--gold);
  color: #0F0605;
  border-color: var(--gold);
}


/* DETECTORS */
.ws-detectors {
  display: flex;
  flex-direction: column;
  gap: 8px;
}


.ws-detector {
  padding: 10px 14px;
  background: var(--ele);
  border: 1px solid var(--bd);
  border-left: 3px solid var(--bd);
  border-radius: var(--r1);
  transition: border-color .2s ease;
}


.ws-detector-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}


.ws-detector-icon {
  font-size: 14px;
  flex-shrink: 0;
}


.ws-detector-title {
  font-family: var(--display);
  font-size: 12.5px;
  font-weight: 700;
  color: var(--t1);
  flex: 1;
}


.ws-detector-score {
  font-family: var(--mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
}


.ws-detector-bar {
  height: 4px;
  background: rgba(255,255,255,0.04);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 6px;
}


.ws-detector-bar-fill {
  height: 100%;
  width: 0%;
  background: var(--bd);
  transition: width 0.3s ease, background 0.3s ease;
  border-radius: 2px;
}


.ws-detector-msg {
  font-family: var(--mono);
  font-size: 10.5px;
  color: var(--t3);
  letter-spacing: 0.3px;
  line-height: 1.5;
}


/* ACTIONS */
.ws-actions {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 4px;
}


/* MOBILE */
@media (max-width: 720px) {
  .ws-split-grid {
    grid-template-columns: 1fr;
  }
  .ws-original {
    max-height: 320px;
  }
  .ws-textarea-summary {
    min-height: 220px;
    font-size: 13.5px;
  }
  .ws-statusbar {
    grid-template-columns: 1fr;
    gap: 6px;
  }
  .ws-grid {
    grid-template-columns: 1fr;
  }
  .ws-intro-title { font-size: 22px; }
  .ws-meta-value { font-size: 16px; }
  .ws-timer-buttons {
    grid-template-columns: repeat(2, 1fr);
  }
}


/* ═══════════════════════════════════
   CHECKLIST — Tab 6 (H27)
   ═══════════════════════════════════ */

.chk-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 8px;
}


.chk-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 14px;
  background: var(--ele);
  border: 1px solid var(--bd);
  border-radius: var(--r1);
  cursor: pointer;
  transition: all .15s ease;
}


.chk-item:hover {
  border-color: var(--gold);
  background: linear-gradient(135deg, var(--ele), rgba(233,180,70,0.04));
}


.chk-item-important {
  border-left: 3px solid var(--gold);
}


.chk-checkbox {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  border: 2px solid var(--bd);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.2);
  transition: all .15s ease;
  margin-top: 1px;
}


.chk-checkmark {
  font-family: var(--mono);
  font-size: 14px;
  font-weight: 800;
  color: transparent;
  transition: color .15s ease;
}


.chk-checkbox.checked {
  background: var(--green);
  border-color: var(--green);
}


.chk-checkbox.checked .chk-checkmark {
  color: #0F0605;
}


.chk-text {
  flex: 1;
  font-size: 13px;
  line-height: 1.5;
  color: var(--t1);
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}


.chk-star {
  color: var(--gold);
  font-size: 11px;
}


.chk-auto-indicator {
  display: inline-block;
  padding: 2px 6px;
  font-family: var(--mono);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1px;
  border-radius: 3px;
  background: rgba(0,0,0,0.2);
  color: var(--t3);
}


.chk-link {
  display: inline-block;
  padding: 2px 8px;
  font-family: var(--mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  border-radius: 3px;
  background: rgba(74,144,217,0.1);
  color: var(--blue);
  text-decoration: none;
  transition: all .15s ease;
}


.chk-link:hover {
  background: var(--blue);
  color: #0F0605;
}


/* SCORE PANEL */
.chk-score-panel {
  padding: 24px;
  background: linear-gradient(135deg, var(--ele), rgba(0,0,0,0.2));
  border: 2px solid var(--gold);
  border-radius: var(--r2);
  text-align: center;
  margin: 14px 0;
}


.chk-score-num {
  font-family: var(--mono);
  font-size: 56px;
  font-weight: 800;
  color: var(--red);
  line-height: 1;
  margin-bottom: 4px;
  transition: color .3s ease;
}


.chk-score-total {
  font-family: var(--mono);
  font-size: 14px;
  color: var(--t3);
  letter-spacing: 1px;
  margin-bottom: 12px;
}


.chk-score-msg {
  font-family: var(--display);
  font-size: 14px;
  font-weight: 700;
  color: var(--t1);
  line-height: 1.5;
}


/* MOBILE */
@media (max-width: 720px) {
  .chk-text {
    font-size: 12.5px;
  }
  .chk-score-num {
    font-size: 44px;
  }
}




/* ═══════════════════════════════════
   MODELNI ESEJI · BIBLIOTEKA (H27)
   ═══════════════════════════════════ */

.esej-details {
  margin: 10px 0;
  background: var(--ele);
  border: 1px solid var(--bd);
  border-left: 3px solid var(--green);
  border-radius: var(--r2);
  overflow: hidden;
  transition: all .15s ease;
}


.esej-details[open] {
  border-color: var(--gold);
  border-left-color: var(--gold);
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}


.esej-summary {
  padding: 14px 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  list-style: none;
  user-select: none;
  font-family: var(--display);
  font-weight: 700;
  color: var(--t1);
  transition: background .15s ease;
}


.esej-summary::-webkit-details-marker { display: none; }

.esej-summary::marker { display: none; content: ''; }


.esej-summary:hover {
  background: linear-gradient(135deg, var(--ele), rgba(233,180,70,0.04));
}


.esej-summary::after {
  content: '▶';
  font-size: 11px;
  color: var(--gold);
  transition: transform .2s ease;
  flex-shrink: 0;
  margin-left: auto;
}


.esej-details[open] .esej-summary::after {
  transform: rotate(90deg);
}


.esej-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--gold);
  color: #0F0605;
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 800;
  flex-shrink: 0;
}


.esej-title {
  flex: 1;
  font-size: 14.5px;
  line-height: 1.3;
}


.esej-meta {
  font-family: var(--mono);
  font-size: 10.5px;
  font-weight: 700;
  color: var(--t3);
  letter-spacing: 0.5px;
  flex-shrink: 0;
  padding: 3px 8px;
  background: rgba(0,0,0,0.2);
  border-radius: 4px;
}


.esej-body {
  padding: 6px 22px 18px 22px;
  border-top: 1px solid var(--bd);
}


.esej-label {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 1.5px;
  margin: 14px 0 6px 0;
  font-weight: 700;
}


.esej-label-uvod { color: var(--green); }

.esej-label-razrada { color: var(--gold); }

.esej-label-protu { color: var(--bronze); }

.esej-label-zaklj { color: var(--red); }


.esej-text {
  font-family: var(--serif);
  font-size: 14px;
  line-height: 1.7;
  color: var(--t2);
  padding: 12px 16px;
  border-radius: var(--r1);
  margin-bottom: 4px;
}


.esej-text-uvod    { background: rgba(80,200,120,0.04); }

.esej-text-razrada { background: rgba(233,180,70,0.04); }

.esej-text-protu   { background: rgba(184,117,74,0.04); }

.esej-text-zaklj   { background: rgba(224,82,82,0.04); }


.esej-checklist {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid var(--bd);
  font-family: var(--mono);
  font-size: 11px;
  color: var(--t3);
  letter-spacing: 0.8px;
}


@media (max-width: 720px) {
  .esej-summary {
    padding: 12px 14px;
    flex-wrap: wrap;
  }
  .esej-title {
    font-size: 13px;
    flex-basis: 100%;
    order: 3;
    margin-top: 4px;
  }
  .esej-meta {
    font-size: 10px;
  }
  .esej-body {
    padding: 6px 14px 14px;
  }
  .esej-text {
    font-size: 13px;
    padding: 10px 12px;
  }
}




/* ═══════════════════════════════════
   AI FEEDBACK — Tab 6 Pro feature (H27)
   ═══════════════════════════════════ */

/* PRO CTA (FREE user) */
.ai-cta {
  padding: 28px 24px;
  text-align: center;
  background: linear-gradient(135deg, rgba(233,180,70,0.08), rgba(74,144,217,0.04));
  border: 2px solid var(--gold);
  border-radius: var(--r2);
  margin: 14px 0;
}


.ai-cta-pill {
  display: inline-block;
  padding: 4px 12px;
  background: var(--gold);
  color: #0F0605;
  font-family: var(--mono);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.5px;
  border-radius: 20px;
  margin-bottom: 12px;
}


.ai-cta-title {
  font-family: var(--display);
  font-size: 24px;
  font-weight: 800;
  color: var(--gold);
  margin-bottom: 8px;
}


.ai-cta-desc {
  font-family: var(--serif);
  font-size: 14px;
  line-height: 1.6;
  color: var(--t2);
  max-width: 520px;
  margin: 0 auto 16px;
}


.ai-cta-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 8px;
  max-width: 600px;
  margin: 16px auto;
  padding: 14px;
  background: rgba(0,0,0,0.2);
  border-radius: var(--r1);
}


.ai-cta-feature {
  font-family: var(--mono);
  font-size: 11.5px;
  color: var(--t2);
  text-align: left;
  padding: 4px 8px;
}


.ai-cta-btn {
  padding: 12px 28px !important;
  font-size: 14px !important;
  margin-top: 12px;
}


.ai-cta-test-btn {
  display: block;
  margin: 14px auto 0;
  padding: 6px 14px;
  background: transparent;
  border: 1px dashed var(--bd);
  border-radius: 4px;
  color: var(--t3);
  font-family: var(--mono);
  font-size: 9.5px;
  letter-spacing: 0.8px;
  cursor: pointer;
  transition: all .15s ease;
}


.ai-cta-test-btn:hover {
  border-color: var(--gold);
  color: var(--gold);
}


/* PRO PANEL */
.ai-panel {
  padding: 20px 24px;
  background: linear-gradient(135deg, rgba(233,180,70,0.04), transparent);
  border: 1px solid var(--gold);
  border-radius: var(--r2);
  margin: 14px 0;
}


.ai-panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--bd);
  flex-wrap: wrap;
  gap: 10px;
}


.ai-panel-tier {
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.5px;
}


.ai-panel-usage {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--t3);
  letter-spacing: 0.5px;
}


.ai-panel-action {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}


.ai-panel-btn {
  padding: 12px 28px !important;
  font-size: 14px !important;
}


.ai-panel-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}


/* LOADING */
.ai-loading {
  text-align: center;
  padding: 32px 20px;
  background: var(--ele);
  border: 1px dashed var(--bd);
  border-radius: var(--r2);
  margin: 14px 0;
}


.ai-loading-spinner {
  font-size: 36px;
  margin-bottom: 8px;
  animation: ai-spin 1.5s ease-in-out infinite;
}


@keyframes ai-spin {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(20deg); }
}


.ai-loading-text {
  font-family: var(--display);
  font-size: 14px;
  font-weight: 700;
  color: var(--t1);
  margin-bottom: 4px;
}


.ai-loading-sub {
  font-family: var(--mono);
  font-size: 10.5px;
  color: var(--t3);
  letter-spacing: 0.5px;
}


/* ERROR */
.ai-error {
  padding: 18px 22px;
  background: rgba(224,82,82,0.06);
  border: 1px solid var(--red);
  border-left: 3px solid var(--red);
  border-radius: var(--r2);
  margin: 14px 0;
}


.ai-error-title {
  font-family: var(--display);
  font-size: 14px;
  font-weight: 700;
  color: var(--red);
  margin-bottom: 6px;
}


.ai-error-msg {
  font-size: 13px;
  color: var(--t2);
  margin-bottom: 6px;
}


.ai-error-hint {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--t3);
}


/* RESULT */
.ai-result {
  margin: 14px 0;
}


.ai-result-header {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 18px 22px;
  background: linear-gradient(135deg, var(--ele), rgba(0,0,0,0.2));
  border: 2px solid var(--gold);
  border-radius: var(--r2);
  margin-bottom: 14px;
  flex-wrap: wrap;
}


.ai-result-score-wrap {
  flex-shrink: 0;
  text-align: center;
}


.ai-result-score {
  font-family: var(--mono);
  font-size: 56px;
  font-weight: 800;
  line-height: 1;
}


.ai-result-score-label {
  font-family: var(--mono);
  font-size: 9.5px;
  color: var(--t3);
  letter-spacing: 0.8px;
  margin-top: 2px;
}


.ai-result-summary {
  flex: 1;
  font-family: var(--serif);
  font-size: 14px;
  line-height: 1.6;
  color: var(--t1);
  font-style: italic;
  min-width: 200px;
}


.ai-top3 {
  padding: 14px 18px;
  background: rgba(74,144,217,0.06);
  border: 1px solid var(--bd);
  border-left: 3px solid var(--blue);
  border-radius: var(--r2);
  margin-bottom: 14px;
}


.ai-top3-label {
  font-family: var(--mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: var(--blue);
  margin-bottom: 8px;
}


.ai-top3 ol {
  margin: 0;
  padding-left: 22px;
  font-size: 13px;
  line-height: 1.6;
  color: var(--t1);
}


.ai-top3 ol li {
  margin-bottom: 6px;
}


.ai-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 10px;
  margin-bottom: 14px;
}


.ai-cat {
  padding: 14px 16px;
  background: var(--ele);
  border: 1px solid var(--bd);
  border-left: 3px solid var(--gold);
  border-radius: var(--r1);
}


.ai-cat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid var(--bd);
}


.ai-cat-name {
  font-family: var(--display);
  font-size: 14px;
  font-weight: 700;
  color: var(--t1);
}


.ai-cat-score {
  font-family: var(--mono);
  font-size: 14px;
  font-weight: 800;
}


.ai-cat-snage, .ai-cat-slabosti, .ai-cat-preporuka {
  margin-bottom: 8px;
}


.ai-cat-label {
  font-family: var(--mono);
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: var(--t3);
  margin-bottom: 3px;
}


.ai-cat-snage ul, .ai-cat-slabosti ul {
  margin: 0;
  padding-left: 18px;
  font-size: 12px;
  line-height: 1.5;
  color: var(--t2);
}


.ai-cat-preporuka {
  padding: 6px 10px;
  background: rgba(233,180,70,0.04);
  border-radius: var(--r1);
  font-size: 12px;
  line-height: 1.5;
  color: var(--t2);
}


.ai-result-actions {
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 14px;
}


@media (max-width: 720px) {
  .ai-cta-title { font-size: 20px; }
  .ai-result-score { font-size: 44px; }
  .ai-result-header { flex-direction: column; text-align: center; }
}




/* ═══════════════════════════════════
   SAŽETAK WORKSPACE — Tab 4 (H28)
   ═══════════════════════════════════ */

/* TEXT BROWSER */
.sum-browser {
  padding: 0;
}


.sum-intro {
  padding: 24px 20px;
  text-align: center;
  background: linear-gradient(135deg, rgba(233,180,70,0.06), rgba(0,0,0,0.2));
  border: 1px solid var(--bd);
  border-radius: var(--r2);
  margin-bottom: 20px;
}


.sum-intro-icon { font-size: 42px; margin-bottom: 6px; }

.sum-intro-title {
  font-family: var(--display);
  font-size: 26px;
  font-weight: 800;
  color: var(--gold);
  margin-bottom: 4px;
  letter-spacing: -0.01em;
}

.sum-intro-sub {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 1.3px;
  color: var(--t3);
  text-transform: uppercase;
}


.sum-section { margin-top: 24px; }

.sum-section-title {
  font-family: var(--display);
  font-size: 16px;
  font-weight: 700;
  color: var(--t1);
  margin-bottom: 12px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--bd);
}


.sum-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 10px;
}


.sum-card {
  padding: 14px 16px;
  background: var(--ele);
  border: 1px solid var(--bd);
  border-radius: var(--r2);
  cursor: pointer;
  transition: all .2s ease;
}


.sum-card:hover {
  border-color: var(--gold);
  background: linear-gradient(135deg, var(--ele), rgba(233,180,70,0.04));
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.18);
}


.sum-card-progress { border-left: 3px solid var(--blue); }


.sum-card-pill {
  display: inline-block;
  padding: 3px 8px;
  font-family: var(--mono);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.2px;
  border-radius: 4px;
  margin-bottom: 8px;
}


.sum-pill-esej { background: rgba(74,144,217,0.1); color: var(--blue); }

.sum-pill-novin { background: rgba(184,117,74,0.1); color: var(--bronze); }

.sum-pill-znan { background: rgba(80,200,120,0.1); color: var(--green); }

.sum-pill-knjiz { background: rgba(180,120,180,0.12); color: #c898d8; }


.sum-card-title {
  font-family: var(--display);
  font-size: 14px;
  font-weight: 700;
  color: var(--t1);
  line-height: 1.4;
  margin-bottom: 4px;
}


.sum-card-author {
  font-family: var(--mono);
  font-size: 10.5px;
  color: var(--gold);
  margin-bottom: 4px;
  letter-spacing: 0.3px;
}


.sum-card-meta {
  font-family: var(--mono);
  font-size: 10.5px;
  color: var(--t3);
  letter-spacing: 0.4px;
}


/* EDITOR MODE — SPLIT SCREEN */
.sum-editor { padding: 0; }


.sum-editor-header {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-bottom: 14px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--bd);
  flex-wrap: wrap;
}


.sum-editor-title {
  flex: 1;
  font-family: var(--display);
  font-size: 16px;
  font-weight: 700;
  color: var(--t1);
  line-height: 1.3;
  min-width: 200px;
}


.sum-editor-pill {
  display: inline-block;
  padding: 3px 8px;
  font-family: var(--mono);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.2px;
  border-radius: 4px;
  margin-right: 8px;
}


.sum-mobile-toggle { display: none; gap: 4px; }

.sum-toggle-btn {
  padding: 6px 12px;
  background: transparent;
  border: 1px solid var(--bd);
  border-radius: var(--r1);
  color: var(--t2);
  font-family: var(--mono);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: .5px;
  cursor: pointer;
  transition: all .2s ease;
}

.sum-toggle-btn:hover { border-color: var(--gold); color: var(--gold); }

.sum-toggle-btn.active { background: var(--gold); color: #0F0605; border-color: var(--gold); }


.sum-split-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}


/* PANES */
.sum-original-pane, .sum-summary-pane {
  display: flex;
  flex-direction: column;
  gap: 10px;
}


.sum-pane-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  background: var(--ele);
  border: 1px solid var(--bd);
  border-radius: var(--r1);
  flex-wrap: wrap;
  gap: 6px;
}


.sum-pane-label {
  font-family: var(--mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: var(--gold);
  text-transform: uppercase;
}


.sum-pane-meta {
  font-family: var(--mono);
  font-size: 10.5px;
  color: var(--t3);
  letter-spacing: 0.3px;
}


/* ORIGINAL TEXT */
.sum-original-text {
  padding: 18px 20px;
  background: var(--ele);
  border: 1px solid var(--bd);
  border-radius: var(--r2);
  max-height: 580px;
  overflow-y: auto;
  font-family: var(--serif);
  font-size: 14px;
  line-height: 1.7;
  color: var(--t1);
}


.sum-orig-paragraph {
  margin: 0 0 14px 0;
  padding: 4px 6px;
  border-radius: 4px;
  cursor: pointer;
  transition: background .15s ease;
}


.sum-orig-paragraph:hover {
  background: rgba(233,180,70,0.04);
}


/* SUMMARY EDITOR */
.sum-textarea {
  width: 100%;
  min-height: 360px;
  padding: 18px 22px;
  background: var(--ele);
  border: 1px solid var(--bd);
  border-radius: var(--r2);
  color: var(--t1);
  font-family: var(--serif);
  font-size: 15px;
  line-height: 1.7;
  resize: vertical;
  outline: none;
  transition: border-color .15s ease;
  box-sizing: border-box;
}


.sum-textarea:focus {
  border-color: var(--gold);
  box-shadow: 0 0 0 3px rgba(233,180,70,0.12);
}


/* COUNTERS */
.sum-counters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  padding: 8px 14px;
  background: var(--ele);
  border: 1px solid var(--bd);
  border-radius: var(--r1);
  flex-wrap: wrap;
}


.sum-counter {
  font-family: var(--mono);
  font-size: 12px;
  display: flex;
  align-items: baseline;
  gap: 6px;
  font-weight: 700;
  color: var(--red);
}


.sum-counter-num {
  font-size: 18px;
  font-weight: 800;
}


.sum-counter-target {
  font-size: 10px;
  color: var(--t3);
  font-weight: 400;
  letter-spacing: 0.5px;
}


.sum-counter-comp {
  color: var(--t2);
  font-size: 11px;
}


#sum-comp-num {
  font-size: 14px;
  font-weight: 800;
}


.sum-savestatus {
  font-family: var(--mono);
  font-size: 10.5px;
  color: var(--t3);
  letter-spacing: 0.4px;
}


.sum-counter-bar {
  height: 6px;
  background: rgba(255,255,255,0.04);
  border-radius: 3px;
  overflow: hidden;
}


.sum-counter-bar-fill {
  height: 100%;
  width: 0%;
  background: var(--red);
  transition: width 0.3s ease, background 0.3s ease;
  border-radius: 3px;
}


/* CHECKS (PLAGIJAT + OBJEKTIVNOST) */
.sum-checks {
  display: grid;
  gap: 8px;
}


.sum-check {
  padding: 12px 14px;
  background: var(--ele);
  border: 1px solid var(--bd);
  border-left: 3px solid var(--bd);
  border-radius: var(--r1);
  transition: all .15s ease;
}


.sum-check.severity-safe { border-left-color: var(--green); }

.sum-check.severity-warning { border-left-color: var(--gold); }

.sum-check.severity-severe { border-left-color: var(--red); background: rgba(224,82,82,0.04); }


.sum-check-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}


.sum-check-icon { font-size: 14px; }


.sum-check-label {
  flex: 1;
  font-family: var(--mono);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: var(--t1);
  text-transform: uppercase;
}


.sum-check-status {
  font-family: var(--mono);
  font-size: 11.5px;
  font-weight: 800;
}


.sum-check.severity-safe .sum-check-status { color: var(--green); }

.sum-check.severity-warning .sum-check-status { color: var(--gold); }

.sum-check.severity-severe .sum-check-status { color: var(--red); }


.sum-check-body {
  font-size: 12px;
  line-height: 1.5;
  color: var(--t2);
}


.sum-plag-msg, .sum-obj-msg { margin-bottom: 6px; }


.sum-plag-segments {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 6px;
  padding-top: 6px;
  border-top: 1px solid var(--bd);
}


.sum-plag-seg {
  font-family: var(--serif);
  font-size: 11.5px;
  font-style: italic;
  color: var(--t1);
  padding: 4px 8px;
  background: rgba(224,82,82,0.06);
  border-radius: 4px;
}


.sum-plag-seg-len {
  font-family: var(--mono);
  font-size: 9.5px;
  color: var(--t3);
  font-style: normal;
}


.sum-plag-more {
  font-family: var(--mono);
  font-size: 10.5px;
  color: var(--t3);
  text-align: center;
  padding-top: 4px;
}


.sum-obj-list {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 6px;
}


.sum-obj-item {
  display: inline-block;
  padding: 3px 8px;
  background: rgba(224,82,82,0.06);
  border-radius: 4px;
  font-family: var(--mono);
  font-size: 10.5px;
  font-style: italic;
  color: var(--t1);
}


.sum-obj-count {
  font-style: normal;
  color: var(--red);
  font-weight: 700;
  margin-left: 3px;
}


/* ACTIONS */
.sum-actions {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}


/* TIMER */
.sum-timer-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: var(--ele);
  border: 1px solid var(--bd);
  border-radius: var(--r1);
  flex-wrap: wrap;
}


.sum-timer-label {
  font-family: var(--mono);
  font-size: 10.5px;
  font-weight: 700;
  color: var(--gold);
  letter-spacing: 1px;
}


.sum-timer-display {
  flex: 1;
  font-family: var(--mono);
  font-size: 16px;
  font-weight: 800;
  color: var(--gold);
  letter-spacing: 1px;
  min-width: 60px;
}


.sum-timer-btn {
  padding: 6px 12px;
  background: transparent;
  border: 1px solid var(--bd);
  border-radius: var(--r1);
  color: var(--t2);
  font-family: var(--mono);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all .15s ease;
}

.sum-timer-btn:hover { border-color: var(--gold); color: var(--gold); }


/* MODAL — MODELNI SAŽETAK */
.sum-modal {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.78);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}


.sum-modal-content {
  background: var(--bg);
  border: 1px solid var(--gold);
  border-radius: var(--r2);
  max-width: 700px;
  width: 100%;
  max-height: 88vh;
  overflow-y: auto;
}


.sum-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 22px;
  border-bottom: 1px solid var(--bd);
}


.sum-modal-title {
  font-family: var(--display);
  font-size: 18px;
  font-weight: 800;
  color: var(--gold);
}


.sum-modal-close {
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid var(--bd);
  border-radius: 50%;
  color: var(--t2);
  font-size: 16px;
  cursor: pointer;
  transition: all .15s ease;
}


.sum-modal-close:hover { border-color: var(--red); color: var(--red); }


.sum-modal-body {
  padding: 18px 22px;
}


.sum-modal-meta {
  font-family: var(--mono);
  font-size: 10.5px;
  color: var(--t3);
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 12px;
}


.sum-modal-text {
  padding: 18px 20px;
  background: rgba(80,200,120,0.04);
  border: 1px solid var(--bd);
  border-left: 3px solid var(--green);
  border-radius: var(--r1);
  font-family: var(--serif);
  font-size: 14px;
  line-height: 1.75;
  color: var(--t1);
  margin-bottom: 18px;
  white-space: pre-wrap;
}


.sum-modal-keyideas {
  padding: 14px 18px;
  background: var(--ele);
  border: 1px solid var(--bd);
  border-radius: var(--r1);
}


.sum-modal-keyideas-title {
  font-family: var(--mono);
  font-size: 10.5px;
  font-weight: 700;
  color: var(--blue);
  letter-spacing: 1.2px;
  margin-bottom: 8px;
}


.sum-modal-keyideas ul {
  margin: 0;
  padding-left: 22px;
  font-size: 13px;
  line-height: 1.6;
  color: var(--t2);
}


.sum-modal-keyideas li { margin-bottom: 4px; }


/* MOBILE */
@media (max-width: 880px) {
  .sum-split-grid {
    grid-template-columns: 1fr;
  }
  .sum-mobile-toggle {
    display: flex;
  }
  .sum-original-pane.hidden-mobile,
  .sum-summary-pane.hidden-mobile {
    display: none;
  }
  .sum-original-text {
    max-height: 480px;
  }
  .sum-textarea {
    min-height: 280px;
    font-size: 14px;
  }
  .sum-grid {
    grid-template-columns: 1fr;
  }
  .sum-intro-title { font-size: 22px; }
  .sum-counters {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
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
  code: 'h28',
  title: 'Sažetak i bilješke'
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
    p_tab_index: (function(){ try{ return JSON.parse(localStorage.getItem('mt.hrv.h28.tab') || '0') }catch(e){return 0} })(),
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


const CP_ITEMS=[
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
  {q:\`Koliko vremena imaš za pisanje sažetka na maturi?\`,o:[\`oko 60 minuta\`,\`4 sata\`],t:0,e:\`Sažetak ima zasebno vrijeme od oko 60 minuta. Esej dobiva 4 sata.\`},
  {q:\`Koliko riječi ima dobar sažetak?\`,o:[\`150-200 riječi\`,\`350-450 riječi\`],t:0,e:\`Sažetak je 150-200 riječi (cca 1/4 originala). 350-450 je esej.\`},
  {q:\`Koja je glavna razlika između sažetka i prepričavanja?\`,o:[\`Sažetak komprimira ključne ideje, prepričavanje slijedi originalnu strukturu\`,\`Nema razlike\`],t:0,e:\`Sažetak izvlači SAMO ključne ideje, ne slijedi original rečenicu po rečenicu.\`},
  {q:\`Smije li sažetak imati subjektivne komentare?\`,o:[\`NE — sažetak je objektivan\`,\`DA — moraš dati svoje mišljenje\`],t:0,e:\`Sažetak je strogo OBJEKTIVAN. Bez „mislim da", „po mom mišljenju", „autor je u pravu".\`},
  {q:\`Što je „plagijat" u sažetku?\`,o:[\`Doslovno preuzimanje 5+ riječi iz originala\`,\`Korištenje sinonima\`],t:0,e:\`Plagijat = kopiranje 5+ uzastopnih riječi. Sažetak mora biti tvojim riječima.\`},
  {q:\`Koja je idealna kompresija?\`,o:[\`15-25% originala\`,\`50% originala\`],t:0,e:\`Sažetak treba imati ~20% riječi originala (npr. 800r → 160r).\`},
  {q:\`Koji je 1. korak pisanja sažetka?\`,o:[\`Pažljivo čitanje originala (2-3x)\`,\`Odmah pisati\`],t:0,e:\`Krenuti pisati bez čitanja je najveća greška. Sažetak zahtjeva 2-3 čitanja.\`},
  {q:\`Što je „glavna ideja" paragrafa?\`,o:[\`Centralna tvrdnja koju ostatak paragrafa potkrjepljuje\`,\`Prva rečenica\`],t:0,e:\`Glavna ideja je SUŠTINA — ono što paragraf zapravo želi reći. Često, ali ne uvijek, prva rečenica.\`},
  {q:\`Što je parafraziranje?\`,o:[\`Reprodukcija ideje u TVOJIM riječima\`,\`Doslovno preuzimanje\`],t:0,e:\`Parafraziranje = ista ideja, drugi izraz. Suprotno od kopiranja.\`},
  {q:\`Koliko paragrafa treba sažetak od 200 riječi?\`,o:[\`1-2 paragrafa\`,\`5+ paragrafa\`],t:0,e:\`Kratki sažetak = 1-2 kompaktna paragrafa. Više paragrafa razgrađuje koherenciju.\`},
  {q:\`Gdje se nalaze "ključne ideje" u tipičnom polaznom tekstu?\`,o:[\`Često u prvoj i posljednjoj rečenici paragrafa\`,\`Samo na kraju teksta\`],t:0,e:\`Tezne rečenice obično otvaraju ili zatvaraju paragraf. Razrada je između.\`},
  {q:\`Koja je NAJVEĆA greška sažetka?\`,o:[\`Doslovno kopiranje (plagijat)\`,\`Premali word count\`],t:0,e:\`Plagijat automatski znači 0 bodova za parafraziranje (40% ocjene).\`},
];
const TAB_NAMES=['Teorija','Rečenični članovi','Vrste rečenica','Složene rečenice','Pojmovnik','Sintaktički parser','Kviz','Pojmovnik + cheat sheet'];
function sw(n){
  document.querySelectorAll('.tab').forEach((t,i)=>{
    t.classList.toggle('on',i===n);
    t.setAttribute('aria-selected',i===n);
  });
  document.querySelectorAll('.layer').forEach((l,i)=>l.classList.toggle('on',i===n));
  const _bc=document.getElementById('bc-tab');if(_bc)_bc.textContent=TAB_NAMES[n];
  if(n===6 && typeof chkInit === 'function') chkInit();
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
  // STRUKTURA (8)
  {kat:'struktura', term:\`Sažetak\`, def:\`Kratko reproduciranje glavnih ideja polaznog teksta vlastitim riječima. Maturalna duljina: 150-200 riječi.\`, star:true},
  {kat:'struktura', term:\`Polazni tekst\`, def:\`Original koji se sažima. Na maturi: 600-1000 riječi (esej, novinski članak, znanstveno-popularni tekst, književni odlomak).\`, star:true},
  {kat:'struktura', term:\`Glavna ideja\`, def:\`Najvažnija tvrdnja autora koja se mora uključiti u sažetak. Razlikovati od sporednih.\`, star:true},
  {kat:'struktura', term:\`Sporedna ideja\`, def:\`Detalji, primjeri, ilustracije koji nisu nositelji argumenta. U sažetku se izostavljaju.\`, star:false},
  {kat:'struktura', term:\`Kompresijski omjer\`, def:\`Sažetak je oko 20-25% originala. Ako je polazni 800r, sažetak je ~180r.\`, star:true},
  {kat:'struktura', term:\`1/4 pravilo\`, def:\`Mnemotehnika: sažetak = ¼ originala. Ako je polazni 600r, sažetak je 150r.\`, star:true},
  {kat:'struktura', term:\`Word count\`, def:\`Broj riječi sažetka. Idealno 150-200, sweet spot 170-190. Izvan ovih granica = penalizacija.\`, star:true},
  {kat:'struktura', term:\`Slijed misli\`, def:\`Sažetak slijedi redoslijed originala. Ne smije nasumično prerasporediti ideje.\`, star:true},
  
  // PARAFRAZIRANJE (8)
  {kat:'parafraza', term:\`Parafraziranje\`, def:\`Pisanje istog značenja drugim riječima. Ključna vještina sažetka. Različita sintaksa + sinonimi.\`, star:true},
  {kat:'parafraza', term:\`Plagijat\`, def:\`Doslovno preuzimanje 5+ uzastopnih riječi iz originala. Najveća greška sažetka.\`, star:true},
  {kat:'parafraza', term:\`Sinonim\`, def:\`Riječ istog ili sličnog značenja. „mnogi" → brojni; „važno" → ključno.\`, star:true},
  {kat:'parafraza', term:\`Kondenzacija\`, def:\`Spajanje više rečenica originala u jednu rečenicu sažetka. Najmoćnija tehnika sažimanja.\`, star:true},
  {kat:'parafraza', term:\`Generalizacija\`, def:\`Tehnika: specifični primjeri se objedinjuju u kategoriju. „Vis, Lastovo, Mljet..." → „hrvatski otoci".\`, star:false},
  {kat:'parafraza', term:\`Specifikacija\`, def:\`Suprotno generalizaciji: apstraktni pojmovi se preciziraju. „obrazovna tijela" → „ministarstvo i fakulteti".\`, star:false},
  {kat:'parafraza', term:\`Nominalizacija\`, def:\`Tehnika: glagol → imenica. „odlučiti" → „odluka". Skraćuje izraz.\`, star:false},
  {kat:'parafraza', term:\`Sinteza rečenica\`, def:\`Spajanje srodnih ideja iz različitih dijelova teksta u jednu cjelinu.\`, star:true},
  
  // OBJEKTIVNOST (8)
  {kat:'objektivnost', term:\`Objektivnost\`, def:\`Bezuvjetan zahtjev sažetka. Bez vlastitih komentara i procjena.\`, star:true},
  {kat:'objektivnost', term:\`Subjektivna fraza\`, def:\`Izrazi koji ukazuju na vlastiti stav. „mislim da", „smatram", „autor je u pravu" — zabranjeni u sažetku.\`, star:true},
  {kat:'objektivnost', term:\`Neutralni ton\`, def:\`Sažetak ne pojačava niti slabi autorove tvrdnje. „Mnogi" ne postaje „svi", „neki" ne postaje „većina".\`, star:true},
  {kat:'objektivnost', term:\`3. lice\`, def:\`Standardno za sažetak. „Autor obrazlaže...", „U tekstu se ističe..." — NE „Ja mislim", „Mi smatramo".\`, star:true},
  {kat:'objektivnost', term:\`Dodavanje informacija\`, def:\`Najveća greška vjernosti. Sažetak ne smije sadržavati ništa što nije u originalu.\`, star:true},
  {kat:'objektivnost', term:\`Vjernost originalu\`, def:\`Sažetak mora pokriti SVE glavne ideje originala, bez izmišljanja.\`, star:true},
  {kat:'objektivnost', term:\`Pretjerivanje\`, def:\`Greška kad se umjereni iskaz pojača. „Mnogi smatraju" ne postaje „Svi se slažu".\`, star:false},
  {kat:'objektivnost', term:\`Vlastiti zaključak\`, def:\`Sažetak NE donosi nove zaključke. Ako autor kaže „X je rješenje", ne dodaješ vlastite ideje.\`, star:true},
  
  // TIPOVI TEKSTOVA (6)
  {kat:'tipovi', term:\`Esejistički tekst\`, def:\`Argumentativni autorski tekst. Sažima se kroz tezu + glavne argumente + zaključak.\`, star:true},
  {kat:'tipovi', term:\`Novinski članak\`, def:\`Informativni tekst iz dnevnih/tjednih novina. Sažima se kroz 5W+H tehniku.\`, star:true},
  {kat:'tipovi', term:\`Znanstveno-popularni tekst\`, def:\`Tekst koji objašnjava znanstvene koncepte široj publici. Sažima se kroz koncept + mehanizam.\`, star:true},
  {kat:'tipovi', term:\`Književni odlomak\`, def:\`Najteži tip. Sažima se kroz autora + djelo + radnju + emocionalnu poruku.\`, star:true},
  {kat:'tipovi', term:\`5W + H\`, def:\`Tehnika za sažimanje novinskog teksta: who, what, when, where, why, how.\`, star:true},
  {kat:'tipovi', term:\`Tezna rečenica\`, def:\`Glavna tvrdnja autora u esejskom tekstu. Obično u uvodu ili zaključku.\`, star:false},
  
  // PISMENOST (5)
  {kat:'pismenost', term:\`Pravopis\`, def:\`Pravila o pisanju riječi. 20% bodova. Vidi H25.\`, star:true},
  {kat:'pismenost', term:\`Interpunkcija\`, def:\`Pravila o znakovima (zarez, točka, navodnici). Vidi H26.\`, star:true},
  {kat:'pismenost', term:\`Hrvatski navodnici\`, def:\`Standard: „..." (dolje gore). Engleski "..." je greška.\`, star:true},
  {kat:'pismenost', term:\`Lektura\`, def:\`Pažljiva revizija sažetka prije predaje. 10 min od 60 min.\`, star:true},
  {kat:'pismenost', term:\`Citiranje\`, def:\`Doslovno preuzimanje samo iznimno, u navodnicima „...". Default: parafraziraj.\`, star:false},
  
  // OCJENJIVANJE (5)
  {kat:'ocjena', term:\`NCVVO\`, def:\`Nacionalni centar za vanjsko vrednovanje obrazovanja. Provodi maturu.\`, star:false},
  {kat:'ocjena', term:\`Bodovi za sažetak\`, def:\`Sažetak nosi ~15-20% bodova mature iz hrvatskog. Esej 40%.\`, star:true},
  {kat:'ocjena', term:\`Vrijeme za sažetak\`, def:\`60 minuta na maturi. Podjela: 15 min čitanje + 35 min pisanje + 10 min revizija.\`, star:true},
  {kat:'ocjena', term:\`Kriteriji ocjenjivanja\`, def:\`Vjernost (25%) + Parafraziranje (25%) + Objektivnost (20%) + Kompresija (15%) + Stil (15%).\`, star:true},
  {kat:'ocjena', term:\`Sažetak vs esej\`, def:\`Sažetak = TUĐE ideje, objektivno, 150-200r, 1h. Esej = VLASTITE ideje, argumentirano, 350-450r, 4h.\`, star:true},
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
  struktura: 'Struktura',
  parafraza: 'Parafraziranje',
  objektivnost: 'Objektivnost',
  tipovi: 'Tipovi tekstova',
  pismenost: 'Pismenost',
  ocjena: 'Ocjenjivanje'
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
        <button type="button" class="gp-opt" data-ans="jotacija" onclick="gpAnswer('jotacija', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:var(--blue);font-weight:700;margin-bottom:2px">1. Jotacija</div>
          <div style="font-size:10px;color:var(--t3)">C + j → palatalni</div>
        </button>
        <button type="button" class="gp-opt" data-ans="1palat" onclick="gpAnswer('1palat', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:var(--bronze);font-weight:700;margin-bottom:2px">2. 1. palatalizacija</div>
          <div style="font-size:10px;color:var(--t3)">k,g,h + e/i → č,ž,š</div>
        </button>
        <button type="button" class="gp-opt" data-ans="sibilar" onclick="gpAnswer('sibilar', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:var(--green);font-weight:700;margin-bottom:2px">3. Sibilarizacija</div>
          <div style="font-size:10px;color:var(--t3)">k,g,h + i → c,z,s</div>
        </button>
        <button type="button" class="gp-opt" data-ans="vokal" onclick="gpAnswer('vokal', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:var(--red);font-weight:700;margin-bottom:2px">4. Vokalizacija l</div>
          <div style="font-size:10px;color:var(--t3)">-l → -o</div>
        </button>
        <button type="button" class="gp-opt" data-ans="nepost" onclick="gpAnswer('nepost', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:var(--gold);font-weight:700;margin-bottom:2px">5. Nepostojano a</div>
          <div style="font-size:10px;color:var(--t3)">a se gubi</div>
        </button>
        <button type="button" class="gp-opt" data-ans="jat" onclick="gpAnswer('jat', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:#9b59b6;font-weight:700;margin-bottom:2px">6. Alternacija jata</div>
          <div style="font-size:10px;color:var(--t3)">ije/je/e/i</div>
        </button>
        <button type="button" class="gp-opt" data-ans="jednacenje" onclick="gpAnswer('jednacenje', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
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
        <button type="button" class="nb-btn primary" style="margin-top:10px" onclick="gpNext()">\${gpIdx < GP_PAIRS.length - 1 ? 'Sljedeće →' : 'Završi'}</button>
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
      <button type="button" class="nb-btn primary" onclick="gpReset()">🔄 Ponovi vježbu</button>
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
          <button type="button" class="wc-opt" data-ans="\${opt}" onclick="wcAnswer('\${opt}', this)" style="padding:10px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;transition:all .2s;text-transform:capitalize">
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
        <button type="button" class="nb-btn primary" style="margin-top:10px" onclick="wcNext()">\${wcIdx < WC_SENTENCES.length - 1 ? 'Sljedeće →' : 'Završi'}</button>
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
      <button type="button" class="nb-btn primary" onclick="wcReset()">🔄 Ponovi vježbu</button>
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
          <button type="button" class="np-opt" data-ans="\${opt}" onclick="npAnswer('\${opt}', this)" style="padding:12px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:13px;transition:all .2s;text-transform:capitalize">
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
        <button type="button" class="nb-btn primary" style="margin-top:10px" onclick="npNext()">\${npIdx < NP_SENTENCES.length - 1 ? 'Sljedeće →' : 'Završi'}</button>
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
      <button type="button" class="nb-btn primary" onclick="npReset()">🔄 Ponovi vježbu</button>
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
      <tr class="tbl-row-bd">
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
      <button type="button" class="nb-btn" id="decl-copy-btn" style="padding:6px 12px;font-size:12px" onclick="declineCopyTable()">📋 Kopiraj tablicu</button>
      <button type="button" class="nb-btn" style="padding:6px 12px;font-size:12px" onclick="window.print()">🖨 Printaj</button>
    </div>
  \`;
  
    // Save to history
  try {
    const hist = JSON.parse(localStorage.getItem('mt.hrv.h28.decl_hist')||'[]');
    if(!hist.some(h => h.word === word)){
      hist.push({word, date: new Date().toISOString()});
      localStorage.setItem('mt.hrv.h28.decl_hist', JSON.stringify(hist.slice(-15)));
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
          <button type="button" class="pz-opt" data-ans="\${opt.key}" onclick="pzAnswer('\${opt.key}', this)" style="padding:12px 10px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;transition:all .2s;text-align:left">
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
        <button type="button" class="nb-btn primary" style="margin-top:10px" onclick="pzNext()">\${pzIdx < PZ_ITEMS.length - 1 ? 'Sljedeće →' : 'Završi'}</button>
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
      <button type="button" class="nb-btn primary" onclick="pzReset()">🔄 Ponovi vježbu</button>
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
          <button type="button" class="kz-opt" data-ans="\${opt}" onclick="kzAnswer('\${opt}', this)" style="padding:12px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;transition:all .2s;text-align:left">
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
        <button type="button" class="nb-btn primary" style="margin-top:10px" onclick="kzNext()">\${kzIdx < KZ_ITEMS.length - 1 ? 'Sljedeće →' : 'Završi'}</button>
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
      <button type="button" class="nb-btn primary" onclick="kzReset()">🔄 Ponovi vježbu</button>
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
    const hist = JSON.parse(localStorage.getItem('mt.hrv.h28.scanner_hist')||'[]');
    // Only save valid words (no special chars)
    if(/^[a-zčćđšžA-ZČĆĐŠŽ\\s]+$/.test(word) && word.length < 50){
      hist.push({word, date: new Date().toISOString()});
      localStorage.setItem('mt.hrv.h28.scanner_hist', JSON.stringify(hist.slice(-20)));
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
          <tr class="tbl-row-bd"><td style="padding:10px;color:var(--t3);width:40%">Vrsta riječi</td><td style="padding:10px;color:var(--t1);font-weight:700">\${a.wordClass || '—'}</td></tr>
          <tr class="tbl-row-bd"><td style="padding:10px;color:var(--t3)">Osnovni oblik (lema)</td><td style="padding:10px;color:var(--gold);font-weight:700">\${a.lemma}</td></tr>
          \${a.categories.form ? \`<tr class="tbl-row-bd"><td style="padding:10px;color:var(--t3)">Oblik glagola</td><td style="padding:10px;color:var(--t1)">\${a.categories.form}</td></tr>\` : ''}
          \${a.categories.vid ? \`<tr class="tbl-row-bd"><td style="padding:10px;color:var(--t3)">Glagolski vid</td><td style="padding:10px;color:var(--t1)">\${a.categories.vid}</td></tr>\` : ''}
          \${a.categories.type ? \`<tr class="tbl-row-bd"><td style="padding:10px;color:var(--t3)">Tip (podvrsta)</td><td style="padding:10px;color:var(--t1)">\${a.categories.type}</td></tr>\` : ''}
          \${a.categories.declType ? \`<tr class="tbl-row-bd"><td style="padding:10px;color:var(--t3)">Deklinacijska vrsta</td><td style="padding:10px;color:var(--t1)">\${a.categories.declType}</td></tr>\` : ''}
          \${a.categories.padezAndBroj ? \`<tr class="tbl-row-bd"><td style="padding:10px;color:var(--t3)">Padež / broj</td><td style="padding:10px;color:var(--t1);font-weight:700">\${a.categories.padezAndBroj}</td></tr>\` : ''}
          \${a.categories.person ? \`<tr class="tbl-row-bd"><td style="padding:10px;color:var(--t3)">Lice / broj</td><td style="padding:10px;color:var(--t1)">\${a.categories.person}\${a.categories.number ? ' · ' + a.categories.number : ''}</td></tr>\` : ''}
          \${a.categories.gender ? \`<tr class="tbl-row-bd"><td style="padding:10px;color:var(--t3)">Rod</td><td style="padding:10px;color:var(--t1)">\${a.categories.gender}</td></tr>\` : ''}
          \${a.categories.stupanj ? \`<tr class="tbl-row-bd"><td style="padding:10px;color:var(--t3)">Stupanj</td><td style="padding:10px;color:var(--t1)">\${a.categories.stupanj}</td></tr>\` : ''}
          \${a.categories.value ? \`<tr class="tbl-row-bd"><td style="padding:10px;color:var(--t3)">Vrijednost</td><td style="padding:10px;color:var(--t1)">\${a.categories.value}</td></tr>\` : ''}
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
    const hist = JSON.parse(localStorage.getItem('mt.hrv.h28.scanner_hist')||'[]');
    if(hist.length === 0){
      div.innerHTML = '<span style="color:var(--t3)">Još nema analiziranih riječi.</span>';
    } else {
      div.innerHTML = '<div style="margin-bottom:8px;color:var(--t3);letter-spacing:1px">ZADNJIH ' + hist.length + ' (klikni za ponovnu analizu):</div>' +
        hist.slice().reverse().map(h => {
        const safeWord = String(h.word||'').replace(/['"\\\\<>&]/g, c => ({"'":'\\\\\\'',
'"':'&quot;','\\\\':'\\\\\\\\','<':'&lt;','>':'&gt;','&':'&amp;'}[c]||c));
        const displayWord = String(h.word||'').replace(/[<>&]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;'}[c]));
        return \`<button type="button" class="nb-btn" style="padding:4px 8px;font-size:11px;margin:2px" onclick="msExample('\${safeWord}')">\${displayWord}</button>\`;
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
    const hist = JSON.parse(localStorage.getItem('mt.hrv.h28.decl_hist')||'[]');
    if(hist.length === 0){
      div.innerHTML = '<span style="color:var(--t3)">Još nema sklanjanih riječi.</span>';
    } else {
      div.innerHTML = '<div style="margin-bottom:8px;color:var(--t3);letter-spacing:1px">ZADNJIH ' + hist.length + ':</div>' +
        hist.slice().reverse().map(h => {
        const safeWord = String(h.word||'').replace(/['"\\\\<>&]/g, c => ({"'":'\\\\\\'',
'"':'&quot;','\\\\':'\\\\\\\\','<':'&lt;','>':'&gt;','&':'&amp;'}[c]||c));
        const displayWord = String(h.word||'').replace(/[<>&]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;'}[c]));
        return \`<button type="button" class="nb-btn" style="padding:4px 8px;font-size:11px;margin:2px" onclick="declineExample('\${safeWord}')">\${displayWord}</button>\`;
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

// Auto-init when Tab 1 visible / on load
// Init on DOMContentLoaded + fallback



// ═══════════════════════════════════
// TAB 2 · KLASIFIKACIJA REČENICA
// ═══════════════════════════════════

// ═══════════════════════════════════
// TAB 3 · KLASIFIKACIJA SLOŽENIH REČENICA
// ═══════════════════════════════════

// Step 1: nezavisno vs zavisno (3 options including "prosta" trap)
// Step 2a: nezavisno vrsta (6)
// Step 2b: zavisno vrsta (12)
// 1 for tip + 1 for vrsta where applicable



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
// glagolski pridjev radni

// Imenske riječi sufikse (heuristika za N — subjekt)
// većina imenica završava ovima u N

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
      const hist = JSON.parse(localStorage.getItem('mt.hrv.h28.parser_hist') || '[]');
      hist.push({text, date: new Date().toISOString()});
      localStorage.setItem('mt.hrv.h28.parser_hist', JSON.stringify(hist.slice(-15)));
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
      const hist = JSON.parse(localStorage.getItem('mt.hrv.h28.ai_hist') || '[]');
      hist.push({q: question, a: text.slice(0, 500), date: new Date().toISOString()});
      localStorage.setItem('mt.hrv.h28.ai_hist', JSON.stringify(hist.slice(-10)));
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
try { pojmStars = JSON.parse(localStorage.getItem('mt.hrv.h28.cit_stars') || '{}'); } catch(e){ pojmStars = {}; }

const KAT_LABELS = {
  'clanovi': 'Rečenični članovi',
  'vrste': 'Vrste rečenica',
  'nezavisno': 'Nezavisno složene',
  'zavisno': 'Zavisno složene',
  'veznici': 'Veznici i interpunkcija',
  'sintagme': 'Sintagme i ostalo'
};

const KAT_COLORS = {
  struktura: 'var(--gold)',
  parafraza: 'var(--gold)',
  objektivnost: 'var(--gold)',
  tipovi: 'var(--gold)',
  pismenost: 'var(--gold)',
  ocjena: 'var(--gold)'
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
          <button type="button" class="pojm-card-star \${isStar ? 'on' : ''}" 
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
  try { localStorage.setItem('mt.hrv.h28.cit_stars', JSON.stringify(pojmStars)); } catch(e){}
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
// TAB 7 · POJMOVNIK + CHEAT SHEET
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
  try { hist = JSON.parse(localStorage.getItem('mt.hrv.h28.parser_hist') || '[]'); } catch(e){}
  
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
      <button type="button" class="nb-btn" style="padding:2px 8px;font-size:9.5px" onclick="parserClearHistory()">🗑 Obriši</button>
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
    try { localStorage.removeItem('mt.hrv.h28.parser_hist'); } catch(e){}
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
    msg='🌟 Odlično! Znaš teoriju sažetka. Idi direktno na <strong>Workspace</strong> i počni vježbati pisanje.';
    btnTxt='📝 Workspace →'; btnTab=4;
  } else if(pct>=60){
    msg='👍 Solidan temelj. Pojača <strong>4 koraka pisanja sažetka (Tab 1)</strong> — temelj svake dobre kompresije.';
    btnTxt='📋 4 koraka →'; btnTab=1;
  } else if(pct>=40){
    msg='📚 Imaš osnovu, ali ima rupa. Krećemo s <strong>4 koraka pisanja sažetka</strong> i anti-pravilima.';
    btnTxt='📋 4 koraka →'; btnTab=1;
  } else {
    msg='💪 Sažetak je vještina koja se gradi vježbom. Krećemo s <strong>Teorijom (Tab 0)</strong> i 20 najčešćih grešaka.';
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
try{citStars=JSON.parse(localStorage.getItem('mt.hrv.h28.cit_stars')||'{}')}catch(e){}
let citActive='sve';

function togStar(i,el){
  citStars[i]=!citStars[i];
  el.classList.toggle('starred',!!citStars[i]);
  try{localStorage.setItem('mt.hrv.h28.cit_stars',JSON.stringify(citStars))}catch(e){}
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
  try{localStorage.setItem('mt.hrv.h28.wc_text',txt);}catch(e){}
}
(function(){
  const ta=document.getElementById('scanner-in');
  if(!ta)return;
  try{const sv=localStorage.getItem('mt.hrv.h28.wc_text');if(sv){ta.value=sv;scannerUpdate();}}catch(e){}
})();

/* ═══════════════════════════════════
   KVIZ
═══════════════════════════════════ */

/* ═══════════════════════════════════
   CHECKPOINT
═══════════════════════════════════ */
let CP_STATE={done:{}};
try{const s=localStorage.getItem('mt.hrv.h28.cp');if(s)CP_STATE=JSON.parse(s);}catch(e){}

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
  try{localStorage.setItem('mt.hrv.h28.cp',JSON.stringify(CP_STATE));}catch(e){}
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
  try{localStorage.removeItem('mt.hrv.h28.cp');}catch(e){}
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
try{TAB_DONE=JSON.parse(localStorage.getItem('mt.hrv.h28.tab_done')||'{}')}catch(e){}

function markTab(n){
  TAB_DONE[n]=true;
  try{localStorage.setItem('mt.hrv.h28.tab_done',JSON.stringify(TAB_DONE))}catch(e){}
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
  '💡 <strong>Tab 7 tip:</strong> Pojmovnik + cheat sheet za sažetak — koristi ga za brzu provjeru koraka, parafraze i najčešćih grešaka.',
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
    const hist=JSON.parse(localStorage.getItem('mt.hrv.h28.kviz_hist')||'[]');
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
    const hist=JSON.parse(localStorage.getItem('mt.hrv.h28.kviz_hist')||'[]');
    hist.push({score,total,date:new Date().toISOString()});
    localStorage.setItem('mt.hrv.h28.kviz_hist',JSON.stringify(hist.slice(-10)));
    loadScoreHistory();
  }catch(e){}
}

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
      <button type="button" class="fcb \${activeClass('easy')}" onclick="mgInit('easy')" style="margin:3px" title="Vrste riječi i pitanja">📚 Lagano (4)</button>
      <button type="button" class="fcb \${activeClass('medium')}" onclick="mgInit('medium')" style="margin:3px" title="Padeži i funkcije">📐 Srednje (4)</button>
      <button type="button" class="fcb \${activeClass('hard')}" onclick="mgInit('hard')" style="margin:3px" title="Napredni pojmovi i zamke">🔧 Teško (4)</button>
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
          <button type="button" class="fcb" onclick="document.getElementById('kbd-help').remove();">Zatvori</button>
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
            <button type="button" class="nb-btn" onclick="fsRandom()" style="padding:8px 14px;font-size:11.5px">🎲 Pokušaj Random</button>
            <button type="button" class="nb-btn" onclick="fsClearInput()" style="padding:8px 14px;font-size:11.5px">↻ Očisti</button>
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
    let hist = JSON.parse(localStorage.getItem('mt.hrv.h28.fs_hist') || '[]');
    hist.push({text, count, date: Date.now()});
    if(hist.length > 20) hist = hist.slice(-20);
    localStorage.setItem('mt.hrv.h28.fs_hist', JSON.stringify(hist));
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
// IDENTIFIKACIJA NARJEČJA · 25 primjera
// ═══════════════════════════════════




// Auto-init when Tab 5 is opened — observe via MutationObserver or just init on load



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



// ═══════════════════════════════════
// PRAVOPIS — 200 PITANJA · podijeljena u 5 kategorija
// vm = veliko/malo, so = spojeno/odvojeno, cc = č/ć i đ/dž, ip = interpunkcija, sr = strane riječi/kratice
// ═══════════════════════════════════


// ═══════════════════════════════════
// INLINE MINI-QUIZ ENGINE — Tab 1, 2, 3, 4, 5
// ═══════════════════════════════════








// ═══════════════════════════════════
// SPEED DRILL — Tab 6
// ═══════════════════════════════════











// AUTO-INIT on DOMContentLoaded
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => { if(typeof interpInitInline === 'function') interpInitInline(); }, 200);
  });
} else {
  setTimeout(() => { if(typeof interpInitInline === 'function') interpInitInline(); }, 200);
}



// ═══════════════════════════════════
// PROOFREADING — Tab 6
// 20 rečenica · 5 easy + 10 mid + 5 hard
// Korisnik klikne na pozicije gdje misli da treba zarez
// Pozicija = između dvije riječi (split by spaces)
// correctPositions = niz indeksa razmaka gdje TREBA biti zarez
// ═══════════════════════════════════


// PROOFREADING STATE















// AUTO-INIT for proof




// ═══════════════════════════════════
// INTERPUNKCIJA — 95 PITANJA · 5 kategorija
// zarez (z), cs (crtica/spojnica), nav (navodnici), zz (završni), td (točka-zarez/dvotočje)
// ═══════════════════════════════════
const INTERP_QS = [
  // ━━━ 4 KORAKA (10) ━━━
  {cat:'koraci', q:\`Koliko vremena ide na čitanje polaznog teksta?\`, opts:[\`15 minuta od 60\`, \`5 minuta od 60\`], correct:0, e:\`15 min za 2 čitanja: brzo + sporo s podvlačenjem.\`},
  {cat:'koraci', q:\`Koje je 2. čitanje?\`, opts:[\`Sporo, s olovkom, podvlačenje ključnog\`, \`Brzo skeniranje za glavni dojam\`], correct:0, e:\`1. = brzo za smisao, 2. = sporo s podvlačenjem.\`},
  {cat:'koraci', q:\`Koliko ide na pisanje samog sažetka?\`, opts:[\`30 minuta\`, \`60 minuta\`], correct:0, e:\`Pisanje 30 min, ostaje 10 min za reviziju.\`},
  {cat:'koraci', q:\`Što je 5W + H tehnika?\`, opts:[\`Tko/što/kad/gdje/zašto/kako\`, \`Stilske figure u tekstu\`], correct:0, e:\`5W+H je standardna tehnika identifikacije glavnih ideja.\`},
  {cat:'koraci', q:\`Najpodcijenjeni korak je:\`, opts:[\`Revizija (10 min)\`, \`Pisanje (30 min)\`], correct:0, e:\`10 min revizije ispravlja većinu pravopisnih i interpunkcijskih grešaka.\`},
  {cat:'koraci', q:\`Što identificiraš u 2. koraku?\`, opts:[\`Glavne ideje (vs sporedne)\`, \`Stilske figure originala\`], correct:0, e:\`Selekcija glavnih od sporednih ideja je ključna vještina.\`},
  {cat:'koraci', q:\`Što su sporedne ideje?\`, opts:[\`Detalji, primjeri koji ilustriraju glavnu ideju\`, \`Glavne tvrdnje autora\`], correct:0, e:\`Sporedne ideje se izostavljaju u sažetku.\`},
  {cat:'koraci', q:\`Pravilan slijed koraka:\`, opts:[\`Čitanje → identifikacija → parafraziranje → revizija\`, \`Pisanje → revizija → identifikacija → čitanje\`], correct:0, e:\`Sustavna metodologija: razumijevanje pa pisanje.\`},
  {cat:'koraci', q:\`Što je glavna razlika eseja i sažetka?\`, opts:[\`Sažetak reproducira tuđe ideje, esej iznosi vlastite\`, \`Sažetak je dulji od eseja\`], correct:0, e:\`Esej = vlastite ideje, sažetak = tuđe.\`},
  {cat:'koraci', q:\`Idealno mjesto za pronalazak teze autora:\`, opts:[\`Uvod ili zaključak originala\`, \`Sredina razrade originala\`], correct:0, e:\`Teza je obično u uvodu (najava) ili zaključku (potvrda).\`},

  // ━━━ TIPOVI TEKSTOVA (10) ━━━
  {cat:'tipovi', q:\`Esejistički tekst sažima se kroz:\`, opts:[\`Tezu + glavne argumente + zaključak\`, \`5W + H tehniku\`], correct:0, e:\`Esej je argumentativan — slijedi tezu/argumente/zaključak.\`},
  {cat:'tipovi', q:\`Novinski članak sažima se kroz:\`, opts:[\`5W + H tehniku\`, \`Stilske figure i pejzažne opise\`], correct:0, e:\`Novinski članak = informativan, 5W+H je tipična struktura.\`},
  {cat:'tipovi', q:\`Znanstveno-popularni tekst sažima se kroz:\`, opts:[\`Koncept + mehanizam + implikacija\`, \`Anegdotalne primjere autora\`], correct:0, e:\`Znanstveno-popularni tekst objašnjava koncept i njegov mehanizam.\`},
  {cat:'tipovi', q:\`Najteži tip teksta za sažetak je:\`, opts:[\`Književni odlomak\`, \`Novinski članak\`], correct:0, e:\`Književni odlomak je scenski, dijaloški, poetski — teško sažeti.\`},
  {cat:'tipovi', q:\`Što treba sačuvati kod književnog odlomka?\`, opts:[\`Akteri, radnja, ključni sukob\`, \`Sve opisne detalje krajobraza\`], correct:0, e:\`Književni sažetak: tko, što, gdje + emocionalna poruka.\`},
  {cat:'tipovi', q:\`Kod novinskog članka, što izbacuješ?\`, opts:[\`Citate svjedoka (osim esencijalnih)\`, \`Statistike i datume\`], correct:0, e:\`Statistike i činjenice se čuvaju, citati se obično izbacuju.\`},
  {cat:'tipovi', q:\`Kod esejističkog teksta, što izbacuješ?\`, opts:[\`Stilske figure (metafore, hiperbole)\`, \`Tezu autora\`], correct:0, e:\`Stilske figure su ukrasi — sažetak ide na sadržaj.\`},
  {cat:'tipovi', q:\`Kod znanstvenog teksta, što sačuvaš?\`, opts:[\`Ključne termine i objašnjenje mehanizma\`, \`Anegdotalne povijesne primjere\`], correct:0, e:\`Termini + mehanizam su esencija znanstvenog teksta.\`},
  {cat:'tipovi', q:\`Tipična 1. rečenica sažetka esejističkog teksta:\`, opts:[\`Autor + naslov + tema\`, \`Statistika iz teksta\`], correct:0, e:\`Standardno: „U članku „X" autor Y obrazlaže..."\`},
  {cat:'tipovi', q:\`Koliko paragrafa sažetka tipično?\`, opts:[\`1-2 paragrafa\`, \`4-5 paragrafa\`], correct:0, e:\`150-200 riječi je obično 1-2 dobro strukturirana paragrafa.\`},

  // ━━━ ANTI-PRAVILA (10) ━━━
  {cat:'anti', q:\`Što je plagijat u sažetku?\`, opts:[\`5+ uzastopnih riječi iz originala\`, \`Korištenje sinonima\`], correct:0, e:\`5+ uzastopnih riječi = plagijat. Mijenjanje 1-2 riječi nije parafraza.\`},
  {cat:'anti', q:\`Razlika između prepričavanja i sažimanja:\`, opts:[\`Prepričavanje ide rečenicu po rečenicu, sažimanje kondenzira na ideje\`, \`Prepričavanje koristi sinonime, sažimanje ne\`], correct:0, e:\`Sažimanje = ekstrakt glavnih ideja, ne sve rečenice.\`},
  {cat:'anti', q:\`Koja fraza je ZABRANJENA u sažetku?\`, opts:[\`„Mislim da..."\`, \`„U tekstu se ističe..."\`], correct:0, e:\`„Mislim da" je subjektivna fraza — gubitak bodova.\`},
  {cat:'anti', q:\`Idealan word count sažetka:\`, opts:[\`170-190 riječi (sweet spot)\`, \`300-350 riječi\`], correct:0, e:\`Standard 150-200, idealno 170-190.\`},
  {cat:'anti', q:\`Što ako autor ima 3 glavne ideje?\`, opts:[\`Sve 3 moraju biti u sažetku\`, \`Dovoljna je jedna glavna\`], correct:0, e:\`Gubitak ideje = ozbiljna greška.\`},
  {cat:'anti', q:\`Smiješ li dodati informacije kojih NEMA u originalu?\`, opts:[\`Ne — sažetak je vjeran originalu\`, \`Da — kao vlastiti komentar\`], correct:0, e:\`Sažetak NE izmišlja. Reproduciraj točno.\`},
  {cat:'anti', q:\`„Mnogi smatraju" smiješ pretvoriti u „svi se slažu"?\`, opts:[\`Ne — to je pretjerivanje\`, \`Da — slično značenje\`], correct:0, e:\`Pretjerivanje mijenja autorovu poruku.\`},
  {cat:'anti', q:\`Smiješ li mijenjati slijed ideja?\`, opts:[\`Ne — slijedi original\`, \`Da — ako ti tako logičnije\`], correct:0, e:\`Sažetak slijedi redoslijed originala.\`},
  {cat:'anti', q:\`Smiješ li dodati vlastiti zaključak?\`, opts:[\`Ne — sažetak ne donosi nove informacije\`, \`Da — to obogaćuje sažetak\`], correct:0, e:\`Vlastiti zaključak = greška vjernosti.\`},
  {cat:'anti', q:\`Što sa subjektivnim frazama poput „nažalost"?\`, opts:[\`Izbaci — subjektivne emocije ne idu u sažetak\`, \`Sačuvaj — pokazuje stav\`], correct:0, e:\`„Nažalost", „srećom" su emocionalne procjene — zabranjene.\`},

  // ━━━ PARAFRAZA (10) ━━━
  {cat:'parafraza', q:\`Najjednostavnija tehnika parafraziranja:\`, opts:[\`Sinonimi\`, \`Promjena gramatičkog vremena\`], correct:0, e:\`Sinonimi su prvi i osnovni alat parafraziranja.\`},
  {cat:'parafraza', q:\`Najmoćnija tehnika za sažimanje:\`, opts:[\`Kondenzacija (više rečenica → jedna)\`, \`Specifikacija (apstraktno → konkretno)\`], correct:0, e:\`Kondenzacija je ključna jer drastično smanjuje duljinu.\`},
  {cat:'parafraza', q:\`Što je generalizacija?\`, opts:[\`Specifični primjeri → kategorija\`, \`Apstraktno → konkretno\`], correct:0, e:\`„Vis, Lastovo, Mljet" → „hrvatski otoci".\`},
  {cat:'parafraza', q:\`Sinonim za „autor kaže":\`, opts:[\`Autor obrazlaže / U tekstu se ističe / Navodi se\`, \`Autor kaže (varijacija sa zarezom)\`], correct:0, e:\`Najveća greška sažetka je ponavljanje „kaže".\`},
  {cat:'parafraza', q:\`Sinonim za „važno":\`, opts:[\`Ključno, presudno, neophodno\`, \`Veliko, debelo, široko\`], correct:0, e:\`Sinonimi su semantički bliske riječi.\`},
  {cat:'parafraza', q:\`Što je nominalizacija?\`, opts:[\`Glagol → imenica (odlučiti → odluka)\`, \`Imenica → pridjev\`], correct:0, e:\`Nominalizacija skraćuje izraz.\`},
  {cat:'parafraza', q:\`Promjena strukture rečenice znači:\`, opts:[\`Aktiv ↔ pasiv, kratke ↔ duge\`, \`Mijenjati interpunkciju\`], correct:0, e:\`Sintaktička promjena dovoljna za parafrazu.\`},
  {cat:'parafraza', q:\`Sinteza rečenica je:\`, opts:[\`Spajanje srodnih ideja iz različitih dijelova\`, \`Pisanje istih rečenica iz originala\`], correct:0, e:\`Sinteza povezuje informacije razasute kroz tekst.\`},
  {cat:'parafraza', q:\`Mijenjanje samo 1-2 riječi je:\`, opts:[\`I dalje plagijat, ne parafraza\`, \`Dovoljno za parafrazu\`], correct:0, e:\`Prava parafraza mijenja sintaksu i rječnik.\`},
  {cat:'parafraza', q:\`Sinonim za „kaže" (3 najbolja):\`, opts:[\`Tvrdi, ističe, naglašava\`, \`Govori, priča, viče\`], correct:0, e:\`Tvrdi/ističe/naglašava su standardni profesionalni sinonimi.\`},
];

// ═══════════════════════════════════
// Inline quiz auto-init for H26 — uses INTERP_QS instead of PRAV_QS
// ═══════════════════════════════════
function interpStartInline(catKey, containerId){
  if(typeof INTERP_QS === 'undefined') return;
  const items = INTERP_QS.filter(q => q.cat === catKey);
  const shuffled = [...items].sort(() => Math.random() - 0.5);
  // No slicing — use all questions per category
  const sliced = shuffled;
  
  window['_interpState_' + containerId] = {
    items: sliced,
    idx: 0,
    score: 0,
    answered: false,
    catKey: catKey
  };
  
  interpRenderInline(containerId);
}

function interpStartInlineMixed(containerId, count){
  if(typeof INTERP_QS === 'undefined') return;
  const cats = ['koraci', 'tipovi', 'anti', 'parafraza'];
  const perCat = Math.ceil(count / cats.length);
  let mixed = [];
  cats.forEach(cat => {
    const items = INTERP_QS.filter(q => q.cat === cat);
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    mixed = mixed.concat(shuffled.slice(0, perCat));
  });
  mixed = mixed.sort(() => Math.random() - 0.5).slice(0, count);
  
  window['_interpState_' + containerId] = {
    items: mixed,
    idx: 0,
    score: 0,
    answered: false,
    catKey: '__mixed__',
    isMixed: true
  };
  
  interpRenderInline(containerId);
}


function interpRenderInline(containerId){
  const state = window['_interpState_' + containerId];
  if(!state) return;
  const out = document.getElementById(containerId);
  if(!out) return;
  
  if(state.idx >= state.items.length){
    return interpResultInline(containerId);
  }
  
  const item = state.items[state.idx];
  state.answered = false;
  
  out.innerHTML = \`
    <div class="prav-card">
      <div class="prav-meta">
        <span class="prav-progress">Pitanje <strong>\${state.idx+1}</strong> / \${state.items.length}</span>
        <span class="prav-score">Točno: <strong>\${state.score}</strong> / \${state.idx}</span>
      </div>
      <div class="prav-question">\${item.q}</div>
      <div class="prav-options">
        \${item.opts.map((opt, i) => \`
          <button type="button" class="prav-opt" onclick="interpAnswerInline('\${containerId}', \${i}, this)" data-idx="\${i}">
            <span class="prav-opt-text">\${opt}</span>
          </button>
        \`).join('')}
      </div>
      <div id="\${containerId}-feedback" class="prav-feedback"></div>
    </div>
  \`;
}

function interpAnswerInline(containerId, idx, btn){
  const state = window['_interpState_' + containerId];
  if(!state || state.answered) return;
  state.answered = true;
  
  const item = state.items[state.idx];
  const isCorrect = idx === item.correct;
  if(isCorrect) state.score++;
  
  const allBtns = btn.parentNode.querySelectorAll('.prav-opt');
  allBtns.forEach((b, i) => {
    b.disabled = true;
    if(i === item.correct) b.classList.add('prav-opt-correct');
    else if(i === idx) b.classList.add('prav-opt-wrong');
  });
  
  const fb = document.getElementById(containerId + '-feedback');
  if(fb){
    fb.innerHTML = \`
      <div class="prav-feedback-inner \${isCorrect ? 'prav-feedback-ok' : 'prav-feedback-no'}">
        <div class="prav-feedback-head">\${isCorrect ? '✅ Točno!' : '❌ Netočno.'}</div>
        <div class="prav-feedback-body">\${item.e}</div>
        <button type="button" class="nb-btn primary" onclick="interpNextInline('\${containerId}')" style="margin-top:10px">Sljedeće →</button>
      </div>
    \`;
  }
}

function interpNextInline(containerId){
  const state = window['_interpState_' + containerId];
  if(!state) return;
  state.idx++;
  interpRenderInline(containerId);
}

function interpResultInline(containerId){
  const state = window['_interpState_' + containerId];
  if(!state) return;
  const out = document.getElementById(containerId);
  if(!out) return;
  
  const pct = Math.round(state.score / state.items.length * 100);
  let msg, color;
  if(pct >= 80){ msg = '🌟 Odlično! Solidno znaš ovu temu.'; color = 'var(--green)'; }
  else if(pct >= 60){ msg = '👍 Dobro znaš osnovu — pojača slabe strane.'; color = 'var(--gold)'; }
  else if(pct >= 40){ msg = '📚 Imaš osnovu, ali ima rupa — još jedna iteracija.'; color = 'var(--bronze)'; }
  else { msg = '💪 Trebaš više vježbe. Pročitaj teoriju iznad i pokušaj opet.'; color = 'var(--red)'; }
  
  // Save best score
  const storageKey = 'mt.hrv.h28.quiz_' + state.catKey + '_best';
  let prevBest = 0;
  let isNewRecord = false;
  try {
    const stored = localStorage.getItem(storageKey);
    if(stored) prevBest = parseInt(stored, 10) || 0;
    if(state.score > prevBest){
      localStorage.setItem(storageKey, String(state.score));
      isNewRecord = true;
    }
  } catch(e){}
  
  const bestScore = Math.max(state.score, prevBest);
  const recordBadge = isNewRecord ? '<span class="prav-record-badge">🏆 Novi rekord!</span>' : '';
  const bestLine = \`<div class="prav-result-best">Najbolji rezultat: <strong>\${bestScore}</strong> / \${state.items.length}</div>\`;
  
  out.innerHTML = \`
    <div class="prav-result">
      <div class="prav-result-score" style="color:\${color}">\${state.score} / \${state.items.length} — \${pct}%</div>
      <div class="prav-result-msg">\${msg}</div>
      \${recordBadge}
      \${bestLine}
      <button type="button" class="nb-btn primary" onclick="\${state.isMixed ? 'interpStartInlineMixed(\\'' + containerId + '\\', 10)' : 'interpStartInline(\\'' + state.catKey + '\\', \\'' + containerId + '\\')'}" style="margin-top:14px">🔁 Ponovi vježbu</button>
    </div>
  \`;
}

function interpInitInline(){
  interpStartInlineMixed('t0-exercise', 10);
  interpStartInline('koraci', 'koraci-exercise');
  interpStartInline('tipovi', 'tipovi-exercise');
  interpStartInline('anti', 'anti-exercise');
  interpStartInline('parafraza', 'parafraza-exercise');
}

// AUTO-INIT
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => { 
      if(typeof interpInitInline === 'function') interpInitInline(); 
    }, 200);
  });
} else {
  setTimeout(() => { 
    if(typeof interpInitInline === 'function') interpInitInline(); 
  }, 200);
}



// ═══════════════════════════════════
// SAŽETAK WORKSPACE — Tab 4
// 10 polaznih tekstova · split-screen + plagijat detektor + objektivnost
// ═══════════════════════════════════

const WS_STORAGE_PREFIX = 'mt.hrv.h28.summary_';
const WS_TIMER_KEY = 'mt.hrv.h28.timer_state';
const WS_CURRENT_KEY = 'mt.hrv.h28.current_summary';

const SUBJECTIVE_PHRASES = [
  /mislim\\s+da\\b/gi,
  /smatram\\s+da\\b/gi,
  /smatram\\b/gi,
  /po\\s+mom\\s+miš/gi,
  /po\\s+mojem\\s+miš/gi,
  /slažem\\s+se\\s+s/gi,
  /autor\\s+je\\s+u\\s+pravu/gi,
  /zanimljivo\\s+je/gi,
  /šokantno\\s+je/gi,
  /tužno\\s+je/gi,
  /nažalost\\b/gi,
  /srećom\\b/gi,
  /vjerujem\\s+da/gi,
  /uvjeren\\s+sam\\s+da/gi,
  /mislim\\b/gi,
  /jasno\\s+je\\s+da/gi
];

let wsState = {
  currentTopicId: null,
  timerActive: false,
  timerStart: null,
  timerDuration: 3600,
  timerInterval: null,
  autoSaveInterval: null
};

function wsInit(){
  const wrap = document.getElementById('ws-wrap');
  if(!wrap) return;
  
  try {
    const last = localStorage.getItem(WS_CURRENT_KEY);
    if(last && SOURCE_TEXTS.find(t => t.id === last)){
      wsState.currentTopicId = last;
      wsRenderWorkspace(last);
      return;
    }
  } catch(e){}
  
  wsRenderTopicBrowser();
}


function wsTierIndicator(){
  if (typeof window.MT === 'undefined' || !window.MT.Tier) return '';
  const tier = window.MT.Tier.getTier();
  const limit = window.MT.Tier.getLimit('max_summaries');
  
  if (limit === -1) {
    // Standard or Pro — unlimited
    const config = window.MT.Tier.getTierConfig(tier);
    return \`<div class="ws-tier-indicator ws-tier-\${tier}">
      <span class="ws-tier-icon">\${tier === 'pro' ? '💎' : '⭐'}</span>
      <span class="ws-tier-text"><strong>\${config.label}</strong> · Neograničeno sažetaka</span>
    </div>\`;
  }
  
  // Free — show counter
  let savedCount = 0;
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('mt.hrv.h28.summary_')) {
        const data = localStorage.getItem(key);
        if (data) {
          try {
            const parsed = JSON.parse(data);
            if (parsed.text && parsed.text.trim().length > 0) savedCount++;
          } catch(e){}
        }
      }
    }
  } catch(e){}
  
  const remaining = Math.max(0, limit - savedCount);
  const usedClass = savedCount >= limit ? 'ws-tier-full' : 'ws-tier-ok';
  
  return \`<div class="ws-tier-indicator ws-tier-free \${usedClass}">
    <span class="ws-tier-icon">🆓</span>
    <span class="ws-tier-text"><strong>Free</strong> · \${savedCount}/\${limit} sažetaka iskorišteno\${remaining === 0 ? ' — pretplati se za više' : ''}</span>
    <button type="button" class="ws-tier-cta" onclick="window.MT.Tier.openPricing()">Upgrade</button>
  </div>\`;
}

function wsRenderTopicBrowser(){
  const wrap = document.getElementById('ws-wrap');
  if(!wrap) return;
  
  const esej = SOURCE_TEXTS.filter(t => t.type === 'esej');
  const novinski = SOURCE_TEXTS.filter(t => t.type === 'novinski');
  const znanstveni = SOURCE_TEXTS.filter(t => t.type === 'znanstveni');
  const knjizevni = SOURCE_TEXTS.filter(t => t.type === 'knjizevni');
  
  const inProgress = wsGetInProgress();
  
  wrap.innerHTML = \`
    <div class="ws-browser">
      <div class="ws-intro">
        <div class="ws-intro-icon">📝</div>
        <div class="ws-intro-title">Sažetak Workspace</div>
        <div class="ws-intro-sub">10 polaznih tekstova · 🚨 Plagijat detektor · ✓ Objektivnost</div>
      </div>
      
      \${wsTierIndicator()}
      \${inProgress.length > 0 ? \`
        <div class="ws-section">
          <div class="ws-section-title">📂 U radu (\${inProgress.length})</div>
          <div class="ws-grid">
            \${inProgress.map(p => {
              const topic = SOURCE_TEXTS.find(t => t.id === p.id);
              if(!topic) return '';
              return \`
                <div class="ws-card ws-card-progress" onclick="wsOpenTopic('\${topic.id}')">
                  <div class="ws-card-pill ws-pill-\${topic.type}">\${topic.typeLabel.toUpperCase()}</div>
                  <div class="ws-card-title">\${topic.title}</div>
                  <div class="ws-card-meta">
                    📝 <strong>\${p.wordCount}</strong> riječi · 
                    <span style="color:var(--blue)">\${p.statusLabel}</span>
                  </div>
                </div>
              \`;
            }).join('')}
          </div>
        </div>
      \` : ''}
      
      <div class="ws-section">
        <div class="ws-section-title">📚 Esejistički tekstovi (\${esej.length})</div>
        <div class="ws-grid">
          \${esej.map(t => \`
            <div class="ws-card" onclick="wsOpenTopic('\${t.id}')">
              <div class="ws-card-pill ws-pill-esej">📚 ESEJ</div>
              <div class="ws-card-title">\${t.title}</div>
              <div class="ws-card-meta">📄 \${t.wordCount} riječi · ▶ Klikni</div>
            </div>
          \`).join('')}
        </div>
      </div>
      
      <div class="ws-section">
        <div class="ws-section-title">📰 Novinski tekstovi (\${novinski.length})</div>
        <div class="ws-grid">
          \${novinski.map(t => \`
            <div class="ws-card" onclick="wsOpenTopic('\${t.id}')">
              <div class="ws-card-pill ws-pill-novinski">📰 NOVINSKI</div>
              <div class="ws-card-title">\${t.title}</div>
              <div class="ws-card-meta">📄 \${t.wordCount} riječi · ▶ Klikni</div>
            </div>
          \`).join('')}
        </div>
      </div>
      
      <div class="ws-section">
        <div class="ws-section-title">🔬 Znanstveno-popularni (\${znanstveni.length})</div>
        <div class="ws-grid">
          \${znanstveni.map(t => \`
            <div class="ws-card" onclick="wsOpenTopic('\${t.id}')">
              <div class="ws-card-pill ws-pill-znanstveni">🔬 ZNANSTVENI</div>
              <div class="ws-card-title">\${t.title}</div>
              <div class="ws-card-meta">📄 \${t.wordCount} riječi · ▶ Klikni</div>
            </div>
          \`).join('')}
        </div>
      </div>
      
      <div class="ws-section">
        <div class="ws-section-title">📖 Književni odlomci (\${knjizevni.length})</div>
        <div class="ws-grid">
          \${knjizevni.map(t => \`
            <div class="ws-card" onclick="wsOpenTopic('\${t.id}')">
              <div class="ws-card-pill ws-pill-knjizevni">📖 KNJIŽEVNI</div>
              <div class="ws-card-title">\${t.title}</div>
              <div class="ws-card-meta">📄 \${t.wordCount} riječi · ▶ Klikni</div>
            </div>
          \`).join('')}
        </div>
      </div>
    </div>
  \`;
}

function wsGetInProgress(){
  const inProgress = [];
  try {
    for(let i = 0; i < localStorage.length; i++){
      const key = localStorage.key(i);
      if(key && key.startsWith(WS_STORAGE_PREFIX)){
        const id = key.replace(WS_STORAGE_PREFIX, '');
        const data = localStorage.getItem(key);
        if(data){
          try {
            const parsed = JSON.parse(data);
            if(parsed.text && parsed.text.trim().length > 0){
              const wc = wsCountWords(parsed.text);
              const status = wc < 150 ? \`\${150-wc}r premalo\` : (wc > 200 ? \`+\${wc-200}r previše\` : '✓ idealno');
              inProgress.push({id, wordCount: wc, statusLabel: status});
            }
          } catch(e){}
        }
      }
    }
  } catch(e){}
  return inProgress;
}

function wsOpenTopic(topicId){
  // MT.Tier check — Free users limited to 1 sažetak max
  if (typeof window.MT !== 'undefined' && window.MT.Tier) {
    const limit = window.MT.Tier.getLimit('max_summaries');
    if (limit !== -1) {
      // Count current sažetaka in localStorage
      let savedCount = 0;
      try {
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && key.startsWith('mt.hrv.h28.summary_')) {
            const data = localStorage.getItem(key);
            if (data) {
              try {
                const parsed = JSON.parse(data);
                if (parsed.text && parsed.text.trim().length > 0) savedCount++;
              } catch(e){}
            }
          }
        }
      } catch(e){}
      
      // Check if already has saved sažetak that's NOT the one being opened
      const alreadySaved = (() => {
        try {
          const data = localStorage.getItem('mt.hrv.h28.summary_' + topicId);
          if (data) {
            const parsed = JSON.parse(data);
            return parsed.text && parsed.text.trim().length > 0;
          }
        } catch(e){}
        return false;
      })();
      
      if (savedCount >= limit && !alreadySaved) {
        window.MT.Tier.showPaywall({
          feature: 'Više sažetaka u Workspaceu',
          requiredTier: 'standard',
          reason: 'free_limit'
        });
        return;
      }
    }
  }
  
  wsState.currentTopicId = topicId;
  try { localStorage.setItem(WS_CURRENT_KEY, topicId); } catch(e){}
  wsRenderWorkspace(topicId);
}

function wsRenderWorkspace(topicId){
  const wrap = document.getElementById('ws-wrap');
  if(!wrap) return;
  
  const topic = SOURCE_TEXTS.find(t => t.id === topicId);
  if(!topic){
    wsRenderTopicBrowser();
    return;
  }
  
  let savedText = '';
  try {
    const saved = localStorage.getItem(WS_STORAGE_PREFIX + topicId);
    if(saved){
      const parsed = JSON.parse(saved);
      savedText = parsed.text || '';
    }
  } catch(e){}
  
  // Convert text to paragraphs HTML
  const paragraphs = topic.text.split(/\\n\\n+/).map(p => \`<p>\${p.replace(/</g, '&lt;')}</p>\`).join('');
  
  wrap.innerHTML = \`
    <div class="ws-editor">
      <div class="ws-editor-header">
        <button type="button" class="nb-btn" onclick="wsBackToBrowser()">← Sve teme</button>
        <div class="ws-editor-title">
          <span class="ws-editor-pill ws-pill-\${topic.type}">\${topic.typeLabel.toUpperCase()}</span>
          \${topic.title}
        </div>
      </div>
      
      <div class="ws-split-grid">
        <!-- LEFT: Original text -->
        <div class="ws-original">
          <div class="ws-original-header">
            <span class="ws-original-h">📜 Polazni tekst</span>
            <span class="ws-original-meta">\${topic.wordCount} riječi</span>
          </div>
          <div class="ws-original-content">
            \${paragraphs}
          </div>
        </div>
        
        <!-- RIGHT: Summary editor -->
        <div class="ws-summary">
          <div class="ws-summary-header">
            <span class="ws-summary-h">📝 Tvoj sažetak</span>
            <span class="ws-summary-target">cilj 150-200 r</span>
          </div>
          
          <textarea 
            id="ws-textarea" 
            class="ws-textarea-summary" 
            placeholder="Počni pisati svoj sažetak ovdje..."
            oninput="wsOnInput()"
            onkeydown="wsOnKeydown(event)"
          >\${savedText.replace(/</g, '&lt;')}</textarea>
          
          <div class="ws-statusbar">
            <div class="ws-counter">
              <span class="ws-counter-num" id="ws-counter-num">0</span>
              <span class="ws-counter-target">/ 150-200 r</span>
            </div>
            <div class="ws-counter-bar">
              <div class="ws-counter-bar-fill" id="ws-counter-bar-fill"></div>
            </div>
            <div class="ws-savestatus" id="ws-savestatus">Auto-save aktivan</div>
          </div>
          
          <!-- COMPRESSION RATIO -->
          <div class="ws-meta-row">
            <div class="ws-meta-cell">
              <div class="ws-meta-label">📊 Kompresija</div>
              <div class="ws-meta-value" id="ws-compression">—</div>
            </div>
            <div class="ws-meta-cell">
              <div class="ws-meta-label">⏱ Timer</div>
              <div class="ws-meta-value" id="ws-timer-display">00:00</div>
            </div>
          </div>
          
          <!-- TIMER CONTROLS -->
          <div class="ws-timer-buttons">
            <button type="button" class="ws-timer-btn" onclick="wsSetTimer(3600, this)">1h</button>
            <button type="button" class="ws-timer-btn" onclick="wsSetTimer(2400, this)">40min</button>
            <button type="button" class="ws-timer-btn" onclick="wsSetTimer(1800, this)">30min</button>
            <button type="button" class="ws-timer-btn" id="ws-timer-toggle" onclick="wsToggleTimer()">▶ Start</button>
          </div>
          
          <!-- DETECTORS -->
          <div class="ws-detectors">
            <div class="ws-detector" id="ws-plagiarism-box">
              <div class="ws-detector-header">
                <span class="ws-detector-icon">🚨</span>
                <span class="ws-detector-title">Plagijat detektor</span>
                <span class="ws-detector-score" id="ws-plagiarism-score">—</span>
              </div>
              <div class="ws-detector-bar">
                <div class="ws-detector-bar-fill" id="ws-plagiarism-fill"></div>
              </div>
              <div class="ws-detector-msg" id="ws-plagiarism-msg">Počni pisati za analizu...</div>
            </div>
            
            <div class="ws-detector" id="ws-objectivity-box">
              <div class="ws-detector-header">
                <span class="ws-detector-icon">✓</span>
                <span class="ws-detector-title">Objektivnost</span>
                <span class="ws-detector-score" id="ws-objectivity-score">—</span>
              </div>
              <div class="ws-detector-msg" id="ws-objectivity-msg">Počni pisati za analizu...</div>
            </div>
          </div>
          
          <div class="ws-actions">
            <button type="button" class="nb-btn" onclick="wsManualSave()">💾 Spremi</button>
            <button type="button" class="nb-btn" onclick="wsClearSummary()">🗑 Briši</button>
            <button type="button" class="nb-btn" onclick="wsShowModelSummary()">👁 Modelni sažetak</button>
            <button type="button" class="nb-btn primary" onclick="sw(6)">✓ Provjeri →</button>
          </div>
        </div>
      </div>
    </div>
  \`;
  
  setTimeout(() => {
    wsUpdateAll();
    wsStartAutoSave();
    wsLoadTimer();
  }, 50);
}

function wsBackToBrowser(){
  if(wsState.timerInterval){ clearInterval(wsState.timerInterval); wsState.timerInterval = null; }
  if(wsState.autoSaveInterval){ clearInterval(wsState.autoSaveInterval); wsState.autoSaveInterval = null; }
  try { localStorage.removeItem(WS_CURRENT_KEY); } catch(e){}
  wsState.currentTopicId = null;
  wsRenderTopicBrowser();
}

function wsCountWords(text){
  if(!text || !text.trim()) return 0;
  return text.trim().split(/\\s+/).filter(w => w.length > 0).length;
}

function wsOnInput(){ wsUpdateAll(); }
function wsOnKeydown(e){
  if((e.ctrlKey || e.metaKey) && e.key === 's'){
    e.preventDefault();
    wsManualSave();
  }
}

function wsUpdateAll(){
  wsUpdateCounter();
  wsUpdateCompression();
  wsCheckPlagiarism();
  wsCheckObjectivity();
}

function wsUpdateCounter(){
  const ta = document.getElementById('ws-textarea');
  if(!ta) return;
  const wc = wsCountWords(ta.value);
  const numEl = document.getElementById('ws-counter-num');
  const fillEl = document.getElementById('ws-counter-bar-fill');
  if(numEl) numEl.textContent = wc;
  
  let color, fillPct;
  if(wc < 150){ color = 'var(--red)'; fillPct = (wc / 150) * 70; }
  else if(wc <= 200){ color = 'var(--green)'; fillPct = 70 + ((wc - 150) / 50) * 30; }
  else { color = 'var(--gold)'; fillPct = 100; }
  
  if(numEl) numEl.style.color = color;
  if(fillEl){
    fillEl.style.width = Math.min(100, fillPct) + '%';
    fillEl.style.background = color;
  }
}

function wsUpdateCompression(){
  const ta = document.getElementById('ws-textarea');
  if(!ta || !wsState.currentTopicId) return;
  const topic = SOURCE_TEXTS.find(t => t.id === wsState.currentTopicId);
  if(!topic) return;
  
  const wc = wsCountWords(ta.value);
  const ratio = wc > 0 ? Math.round(wc / topic.wordCount * 100) : 0;
  const el = document.getElementById('ws-compression');
  if(!el) return;
  
  let color = 'var(--t1)';
  if(ratio < 15) color = 'var(--red)';
  else if(ratio >= 15 && ratio <= 30) color = 'var(--green)';
  else if(ratio > 30) color = 'var(--gold)';
  
  el.textContent = ratio + '%';
  el.style.color = color;
}

// ═══ PLAGIARISM DETECTOR ═══
function wsCheckPlagiarism(){
  const ta = document.getElementById('ws-textarea');
  if(!ta || !wsState.currentTopicId) return;
  const topic = SOURCE_TEXTS.find(t => t.id === wsState.currentTopicId);
  if(!topic) return;
  
  const summaryText = ta.value.trim();
  if(summaryText.length < 30){
    document.getElementById('ws-plagiarism-msg').textContent = 'Počni pisati za analizu...';
    document.getElementById('ws-plagiarism-score').textContent = '—';
    document.getElementById('ws-plagiarism-fill').style.width = '0%';
    return;
  }
  
  // Tokenize (lowercase, strip punctuation)
  const tokenize = s => s.toLowerCase()
    .replace(/[.,!?;:„"\\(\\)\\[\\]]/g, '')
    .split(/\\s+/)
    .filter(w => w.length > 0);
  
  const origTokens = tokenize(topic.text);
  const sumTokens = tokenize(summaryText);
  
  if(sumTokens.length < 10){
    document.getElementById('ws-plagiarism-msg').textContent = 'Premalo riječi za analizu...';
    return;
  }
  
  // Build n-gram set from original (5-word phrases)
  const N = 5;
  const origNgrams = new Set();
  for(let i = 0; i <= origTokens.length - N; i++){
    origNgrams.add(origTokens.slice(i, i + N).join(' '));
  }
  
  // Check each n-gram in summary
  const matches = [];
  let plagWords = new Set();
  for(let i = 0; i <= sumTokens.length - N; i++){
    const ngram = sumTokens.slice(i, i + N).join(' ');
    if(origNgrams.has(ngram)){
      matches.push({ngram, position: i});
      // Mark these N words as plagiarized
      for(let j = i; j < i + N; j++) plagWords.add(j);
    }
  }
  
  const plagPercent = sumTokens.length > 0 ? Math.round(plagWords.size / sumTokens.length * 100) : 0;
  
  // Update UI
  const scoreEl = document.getElementById('ws-plagiarism-score');
  const fillEl = document.getElementById('ws-plagiarism-fill');
  const msgEl = document.getElementById('ws-plagiarism-msg');
  const boxEl = document.getElementById('ws-plagiarism-box');
  
  let color, severity, msg;
  if(plagPercent < 5){
    color = 'var(--green)';
    severity = 'OK';
    msg = '✓ Sigurno · sažetak je tvojim riječima';
  } else if(plagPercent < 15){
    color = 'var(--gold)';
    severity = 'PAZI';
    msg = \`⚠ \${matches.length} podudaranja · parafraziraj više\`;
  } else {
    color = 'var(--red)';
    severity = 'PLAGIJAT';
    msg = \`🚨 \${matches.length} podudaranja · ozbiljan plagijat — preformuliraj!\`;
  }
  
  if(scoreEl){
    scoreEl.textContent = plagPercent + '% (' + severity + ')';
    scoreEl.style.color = color;
  }
  if(fillEl){
    fillEl.style.width = Math.min(100, plagPercent * 3) + '%';
    fillEl.style.background = color;
  }
  if(msgEl){
    msgEl.innerHTML = msg;
    msgEl.style.color = 'var(--t2)';
  }
  if(boxEl) boxEl.style.borderLeftColor = color;
}

// ═══ OBJECTIVITY DETECTOR ═══
function wsCheckObjectivity(){
  const ta = document.getElementById('ws-textarea');
  if(!ta) return;
  const text = ta.value;
  if(text.trim().length < 10){
    document.getElementById('ws-objectivity-msg').textContent = 'Počni pisati za analizu...';
    document.getElementById('ws-objectivity-score').textContent = '—';
    return;
  }
  
  const found = [];
  for(const pattern of SUBJECTIVE_PHRASES){
    const matches = text.match(pattern);
    if(matches) found.push(...matches);
  }
  
  const scoreEl = document.getElementById('ws-objectivity-score');
  const msgEl = document.getElementById('ws-objectivity-msg');
  const boxEl = document.getElementById('ws-objectivity-box');
  
  let color, msg;
  if(found.length === 0){
    color = 'var(--green)';
    if(scoreEl){ scoreEl.textContent = '✓ OK'; scoreEl.style.color = color; }
    msg = '✓ Nema subjektivnih fraza · objektivan ton';
  } else {
    color = 'var(--red)';
    if(scoreEl){ scoreEl.textContent = \`\${found.length} subjektivnih\`; scoreEl.style.color = color; }
    msg = \`🚨 Detektirano: \${found.slice(0, 3).map(f => \`„\${f}"\`).join(', ')}\${found.length > 3 ? '...' : ''}\`;
  }
  
  if(msgEl){
    msgEl.innerHTML = msg;
    msgEl.style.color = 'var(--t2)';
  }
  if(boxEl) boxEl.style.borderLeftColor = color;
}

// ═══ AUTO-SAVE ═══
function wsStartAutoSave(){
  if(wsState.autoSaveInterval) clearInterval(wsState.autoSaveInterval);
  wsState.autoSaveInterval = setInterval(wsAutoSave, 5000);
}

function wsAutoSave(){
  if(!wsState.currentTopicId) return;
  const ta = document.getElementById('ws-textarea');
  if(!ta) return;
  const data = {
    text: ta.value,
    lastSaved: Date.now(),
    wordCount: wsCountWords(ta.value)
  };
  try {
    localStorage.setItem(WS_STORAGE_PREFIX + wsState.currentTopicId, JSON.stringify(data));
    const status = document.getElementById('ws-savestatus');
    if(status){
      status.textContent = '✓ ' + new Date().toLocaleTimeString('hr-HR', {hour: '2-digit', minute: '2-digit'});
      status.style.color = 'var(--green)';
    }
  } catch(e){
    const status = document.getElementById('ws-savestatus');
    if(status){ status.textContent = '⚠ greška'; status.style.color = 'var(--red)'; }
  }
}

function wsManualSave(){ wsAutoSave(); }

function wsClearSummary(){
  if(!wsState.currentTopicId) return;
  if(!confirm('Obrisati cijeli sažetak?')) return;
  try { localStorage.removeItem(WS_STORAGE_PREFIX + wsState.currentTopicId); } catch(e){}
  const ta = document.getElementById('ws-textarea');
  if(ta) ta.value = '';
  wsUpdateAll();
}

function wsShowModelSummary(){
  if(!wsState.currentTopicId) return;
  const topic = SOURCE_TEXTS.find(t => t.id === wsState.currentTopicId);
  if(!topic || !topic.modelSummary) return;
  
  // MT.Tier check — Free users see only model of CURRENTLY OPENED sažetak
  // Standard+ users see all 10 model summaries
  if (typeof window.MT !== 'undefined' && window.MT.Tier) {
    const hasAllModels = window.MT.Tier.hasFeature('all_summary_models');
    if (!hasAllModels) {
      // Free user — has access only to model of current topic, not all 10
      // Since we're already in this topic context, allow
      // But notify they could see ALL 10 in Standard+
    }
  }
  
  if(!confirm('Prikazati modelni sažetak? (Najbolje prvo napiši svoj.)')) return;
  
  const wc = wsCountWords(topic.modelSummary);
  let upgradeHint = '';
  if (typeof window.MT !== 'undefined' && window.MT.Tier && !window.MT.Tier.hasFeature('all_summary_models')) {
    upgradeHint = '\\n\\n💎 Pretplati se na Standard za pristup svih 10 modelnih sažetaka.';
  }
  alert('📜 MODELNI SAŽETAK (' + wc + ' riječi):\\n\\n' + topic.modelSummary + '\\n\\n💡 Usporedi sa svojim sažetkom — koje su razlike?' + upgradeHint);
}

// ═══ TIMER ═══
function wsSetTimer(seconds, btn){
  document.querySelectorAll('.ws-timer-btn').forEach(b => b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  wsState.timerDuration = seconds;
  if(wsState.timerActive){
    wsState.timerStart = Date.now();
    wsSaveTimerState();
  } else {
    wsUpdateTimerDisplay(seconds);
  }
}

function wsToggleTimer(){
  if(wsState.timerActive){
    if(wsState.timerInterval){ clearInterval(wsState.timerInterval); wsState.timerInterval = null; }
    wsState.timerActive = false;
    const t = document.getElementById('ws-timer-toggle');
    if(t) t.textContent = '▶ Start';
    wsSaveTimerState();
  } else {
    wsState.timerStart = Date.now();
    wsState.timerActive = true;
    wsState.timerInterval = setInterval(wsTickTimer, 1000);
    const t = document.getElementById('ws-timer-toggle');
    if(t) t.textContent = '⏸ Pauza';
    wsSaveTimerState();
  }
}

function wsTickTimer(){
  if(!wsState.timerActive) return;
  const elapsed = Math.floor((Date.now() - wsState.timerStart) / 1000);
  const remaining = Math.max(0, wsState.timerDuration - elapsed);
  wsUpdateTimerDisplay(remaining);
  if(remaining <= 0){
    if(wsState.timerInterval){ clearInterval(wsState.timerInterval); wsState.timerInterval = null; }
    wsState.timerActive = false;
    const t = document.getElementById('ws-timer-toggle');
    if(t) t.textContent = '▶ Start';
    alert('⏰ Vrijeme isteklo! Spremi sažetak i pripremi se za reviziju.');
    wsSaveTimerState();
  }
}

function wsUpdateTimerDisplay(seconds){
  const display = document.getElementById('ws-timer-display');
  if(!display) return;
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');
  display.textContent = mm + ':' + ss;
  if(seconds <= 60) display.style.color = 'var(--red)';
  else if(seconds <= 300) display.style.color = 'var(--gold)';
  else display.style.color = 'var(--gold)';
}

function wsSaveTimerState(){
  try {
    localStorage.setItem(WS_TIMER_KEY, JSON.stringify({
      duration: wsState.timerDuration,
      start: wsState.timerStart,
      active: wsState.timerActive,
      topicId: wsState.currentTopicId
    }));
  } catch(e){}
}

function wsLoadTimer(){
  try {
    const stored = localStorage.getItem(WS_TIMER_KEY);
    if(stored){
      const state = JSON.parse(stored);
      if(state.topicId === wsState.currentTopicId){
        wsState.timerDuration = state.duration || 3600;
        wsState.timerStart = state.start;
        wsState.timerActive = state.active;
        if(wsState.timerActive){
          wsState.timerInterval = setInterval(wsTickTimer, 1000);
          const t = document.getElementById('ws-timer-toggle');
          if(t) t.textContent = '⏸ Pauza';
          wsTickTimer();
        } else {
          wsUpdateTimerDisplay(wsState.timerDuration);
        }
        return;
      }
    }
  } catch(e){}
  wsUpdateTimerDisplay(wsState.timerDuration);
}

// AUTO-INIT for workspace
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => { if(typeof wsInit === 'function') wsInit(); }, 250);
  });
} else {
  setTimeout(() => { if(typeof wsInit === 'function') wsInit(); }, 250);
}

// ═══════════════════════════════════
// CHECKLIST — Tab 6
// 25 checkpointa · 4 kategorije
// ═══════════════════════════════════

const CHECKLIST_ITEMS = [
  // ━━━ VJERNOST (5) ━━━
  {cat:'vjernost', id:'v1', text:'Sve glavne ideje originala su uključene', auto:false, important:true},
  {cat:'vjernost', id:'v2', text:'Bez izmišljanja informacija (samo ono iz originala)', auto:false, important:true},
  {cat:'vjernost', id:'v3', text:'Slijed ideja prati original', auto:false},
  {cat:'vjernost', id:'v4', text:'Autor i naslov su navedeni u 1. rečenici', auto:false, important:true},
  {cat:'vjernost', id:'v5', text:'Neutralna interpretacija (bez pojačavanja)', auto:false},
  
  // ━━━ PARAFRAZIRANJE (5) ━━━
  {cat:'parafraza', id:'p1', text:'Bez plagijata (5+ uzastopnih riječi iz originala)', auto:true, autoCheck:'plagiarism', important:true},
  {cat:'parafraza', id:'p2', text:'Nije samo 1-2 izmijenjene riječi (potpuna parafraza)', auto:false, important:true},
  {cat:'parafraza', id:'p3', text:'Korišteni sinonimi (varijacija rječnika)', auto:false},
  {cat:'parafraza', id:'p4', text:'Drugačija sintaksa od originala', auto:false},
  {cat:'parafraza', id:'p5', text:'Neutralan jezik (ne kopiran emocionalan ton)', auto:false},
  
  // ━━━ OBJEKTIVNOST (5) ━━━
  {cat:'objektivnost', id:'o1', text:'Bez „mislim da", „smatram", „po mom mišljenju"', auto:true, autoCheck:'subjectivity', important:true},
  {cat:'objektivnost', id:'o2', text:'Bez vlastitih komentara i procjena', auto:false, important:true},
  {cat:'objektivnost', id:'o3', text:'3. lice (ne „ja", „mi")', auto:false},
  {cat:'objektivnost', id:'o4', text:'Bez pretjerivanja („svi", „nikad" umjesto „mnogi", „rijetko")', auto:false},
  {cat:'objektivnost', id:'o5', text:'Bez vlastitog zaključka koji nije u originalu', auto:false},
  
  // ━━━ PISMENOST (5) ━━━
  {cat:'pismenost', id:'pi1', text:'Word count u rasponu 150-200 riječi', auto:true, autoCheck:'wordCount', important:true},
  {cat:'pismenost', id:'pi2', text:'Bez pravopisnih grešaka (vidi H25)', auto:false, important:true, link:'h25'},
  {cat:'pismenost', id:'pi3', text:'Ispravna interpunkcija (vidi H26)', auto:false, important:true, link:'h26'},
  {cat:'pismenost', id:'pi4', text:'Hrvatski navodnici „..." (ne engleski "...")', auto:true, autoCheck:'croatianQuotes'},
  {cat:'pismenost', id:'pi5', text:'Sažetak je pažljivo lektoriran (revidiran prije predaje)', auto:false},
];

const CHECKLIST_STORAGE_KEY = 'mt.hrv.h28.checklist_state';

let chkState = {
  checked: new Set(),
  hasEssayLoaded: false,
  essayTopicId: null
};

function chkInit(){
  const wrap = document.getElementById('chk-wrap');
  if(!wrap) return;
  
  // Try loading saved state
  try {
    const stored = localStorage.getItem(CHECKLIST_STORAGE_KEY);
    if(stored){
      const arr = JSON.parse(stored);
      chkState.checked = new Set(arr);
    }
  } catch(e){}
  
  chkRender();
  chkRunAutoChecks();
}

function chkGetEssayText(){
  // Try to get text from current sažetak in workspace
  try {
    const currentTopicId = localStorage.getItem('mt.hrv.h28.current_summary');
    if(currentTopicId){
      chkState.essayTopicId = currentTopicId;
      const stored = localStorage.getItem('mt.hrv.h28.summary_' + currentTopicId);
      if(stored){
        const parsed = JSON.parse(stored);
        if(parsed.text) return parsed.text;
      }
    }
    // Fallback: search any sažetak
    for(let i = 0; i < localStorage.length; i++){
      const key = localStorage.key(i);
      if(key && key.startsWith('mt.hrv.h28.summary_')){
        const data = localStorage.getItem(key);
        if(data){
          const parsed = JSON.parse(data);
          if(parsed.text && parsed.text.trim().length > 50){
            chkState.essayTopicId = key.replace('mt.hrv.h28.summary_', '');
            return parsed.text;
          }
        }
      }
    }
  } catch(e){}
  return '';
}

function chkRunAutoChecks(){
  const text = chkGetEssayText();
  chkState.hasEssayLoaded = text.length > 0;
  
  if(!chkState.hasEssayLoaded){
    document.getElementById('chk-no-essay').style.display = '';
    document.getElementById('chk-with-essay').style.display = 'none';
    return;
  }
  
  document.getElementById('chk-no-essay').style.display = 'none';
  document.getElementById('chk-with-essay').style.display = '';
  
  // Show essay info
  const wc = chkCountWords(text);
  const paragraphs = text.split(/\\n\\n+/).filter(p => p.trim().length > 30).length;
  
  const infoEl = document.getElementById('chk-essay-info');
  if(infoEl){
    infoEl.innerHTML = \`
      📝 <strong>\${wc}</strong> riječi · 
      <strong>\${paragraphs}</strong> paragrafa · 
      \${text.length} znakova
    \`;
  }
  
  // Run auto-checks for each item
  CHECKLIST_ITEMS.forEach(item => {
    if(!item.auto) return;
    
    let result = false;
    if(item.autoCheck === 'wordCount'){
      result = wc >= 150 && wc <= 200;
    } else if(item.autoCheck === 'croatianQuotes'){
      const hr = (text.match(/„/g) || []).length;
      const en = (text.match(/(?<![\\w])"[^"]+"(?![\\w])/g) || []).length;
      result = hr >= en;
    } else if(item.autoCheck === 'plagiarism'){
      // Check for 5+ consecutive matching words from source
      const topicId = chkState.essayTopicId;
      if(topicId && typeof SOURCE_TEXTS !== 'undefined'){
        const topic = SOURCE_TEXTS.find(t => t.id === topicId);
        if(topic){
          const tokenize = s => s.toLowerCase().replace(/[.,!?;:„"\\\\(\\\\)\\\\[\\\\]]/g, '').split(/\\\\s+/).filter(w => w.length > 0);
          const origTokens = tokenize(topic.text);
          const sumTokens = tokenize(text);
          const N = 5;
          const origNgrams = new Set();
          for(let k = 0; k <= origTokens.length - N; k++) origNgrams.add(origTokens.slice(k, k + N).join(' '));
          let plagWords = new Set();
          for(let k = 0; k <= sumTokens.length - N; k++){
            const ngram = sumTokens.slice(k, k + N).join(' ');
            if(origNgrams.has(ngram)){
              for(let j = k; j < k + N; j++) plagWords.add(j);
            }
          }
          const plagPercent = sumTokens.length > 0 ? (plagWords.size / sumTokens.length * 100) : 0;
          result = plagPercent < 5;
        }
      }
    } else if(item.autoCheck === 'subjectivity'){
      // Check for absence of subjective phrases
      const SUBJ = [/mislim\\\\s+da\\\\b/gi, /smatram\\\\b/gi, /po\\\\s+mom\\\\s+miš/gi, /slažem\\\\s+se\\\\s+s/gi, /autor\\\\s+je\\\\s+u\\\\s+pravu/gi, /nažalost\\\\b/gi, /srećom\\\\b/gi];
      let found = 0;
      for(const p of SUBJ){
        const m = text.match(p);
        if(m) found += m.length;
      }
      result = found === 0;
    }
    
    const checkEl = document.querySelector('[data-chk-id="' + item.id + '"]');
    if(checkEl){
      const indicator = checkEl.querySelector('.chk-auto-indicator');
      if(indicator){
        indicator.textContent = result ? '✓ AUTO' : '✗ AUTO';
        indicator.style.color = result ? 'var(--green)' : 'var(--red)';
      }
      // Auto-check the box
      if(result){
        chkState.checked.add(item.id);
        const cb = checkEl.querySelector('.chk-checkbox');
        if(cb) cb.classList.add('checked');
      }
    }
  });
  
  chkUpdateScore();
}

function chkCountWords(text){
  if(!text || !text.trim()) return 0;
  return text.trim().split(/\\s+/).filter(w => w.length > 0).length;
}

function chkRender(){
  const wrap = document.getElementById('chk-wrap');
  if(!wrap) return;
  
  const cats = [
    {key:'vjernost', label:'VJERNOST', icon:'🎯', count:5},
    {key:'parafraza', label:'PARAFRAZIRANJE', icon:'🔄', count:5},
    {key:'objektivnost', label:'OBJEKTIVNOST', icon:'⚖️', count:5},
    {key:'pismenost', label:'PISMENOST', icon:'📝', count:5}
  ];
  
  let html = \`
    <div id="chk-no-essay" style="padding:24px;background:rgba(74,144,217,.06);border:1px solid var(--bd);border-left:3px solid var(--blue);border-radius:var(--r2);margin-bottom:16px;text-align:center">
      <div style="font-size:32px;margin-bottom:8px">📝</div>
      <div style="font-family:var(--display);font-size:16px;font-weight:700;color:var(--t1);margin-bottom:6px">Nema spremljenog sažetka</div>
      <div style="font-size:13px;color:var(--t2);margin-bottom:14px">Otvori Workspace, napiši sažetak i vrati se ovdje za provjeru.</div>
      <button type="button" class="nb-btn primary" onclick="sw(4)">📝 Otvori Workspace →</button>
    </div>
    
    <div id="chk-with-essay" style="display:none">
      <div style="padding:14px 16px;background:rgba(80,200,120,.04);border:1px solid var(--bd);border-left:3px solid var(--green);border-radius:var(--r2);margin-bottom:16px">
        <div style="font-family:var(--mono);font-size:10px;letter-spacing:1.5px;color:var(--green);margin-bottom:6px">📊 TVOJ SAŽETAK</div>
        <div id="chk-essay-info" style="font-size:13px;color:var(--t2)">Učitavam...</div>
      </div>
  \`;
  
  cats.forEach(cat => {
    const items = CHECKLIST_ITEMS.filter(i => i.cat === cat.key);
    html += \`
      <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">\${cat.icon} \${cat.label} · \${cat.count} stavki</div><div class="sec-line"></div></div>
      <div class="chk-list">
        \${items.map(item => \`
          <div class="chk-item \${item.important ? 'chk-item-important' : ''}" data-chk-id="\${item.id}" onclick="chkToggle('\${item.id}')">
            <div class="chk-checkbox \${chkState.checked.has(item.id) ? 'checked' : ''}">
              <span class="chk-checkmark">✓</span>
            </div>
            <div class="chk-text">
              \${item.text}
              \${item.important ? '<span class="chk-star">⭐</span>' : ''}
              \${item.auto ? '<span class="chk-auto-indicator">…</span>' : ''}
              \${item.link === 'h25' ? '<a href="/skripte/hrv/h25" class="chk-link" onclick="event.stopPropagation()">→ H25</a>' : ''}
              \${item.link === 'h26' ? '<a href="/skripte/hrv/h26" class="chk-link" onclick="event.stopPropagation()">→ H26</a>' : ''}
            </div>
          </div>
        \`).join('')}
      </div>
    \`;
  });
  
  // Score panel
  html += \`
      <div class="sec-hdr mt-32"><div class="sec-line"></div><div class="sec-badge">📊 Ukupni rezultat</div><div class="sec-line"></div></div>
      <div id="chk-score-panel" class="chk-score-panel">
        <div class="chk-score-num" id="chk-score-num">0</div>
        <div class="chk-score-total">/ \${CHECKLIST_ITEMS.length}</div>
        <div class="chk-score-msg" id="chk-score-msg">Označi stavke koje si ispunio.</div>
      </div>
      
      <div style="display:flex;gap:8px;justify-content:center;margin-top:16px;flex-wrap:wrap">
        <button type="button" class="nb-btn" onclick="chkReset()">🔄 Resetiraj</button>
        <button type="button" class="nb-btn primary" onclick="sw(4)">📝 Doradi esej →</button>
      </div>
    </div>
  \`;
  
  wrap.innerHTML = html;
}

function chkToggle(itemId){
  if(chkState.checked.has(itemId)){
    chkState.checked.delete(itemId);
  } else {
    chkState.checked.add(itemId);
  }
  
  const itemEl = document.querySelector('[data-chk-id="' + itemId + '"]');
  if(itemEl){
    const cb = itemEl.querySelector('.chk-checkbox');
    if(cb){
      if(chkState.checked.has(itemId)){
        cb.classList.add('checked');
      } else {
        cb.classList.remove('checked');
      }
    }
  }
  
  chkSave();
  chkUpdateScore();
}

function chkSave(){
  try {
    localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify([...chkState.checked]));
  } catch(e){}
}

function chkReset(){
  if(!confirm('Resetirati cijeli checklist?')) return;
  chkState.checked = new Set();
  try { localStorage.removeItem(CHECKLIST_STORAGE_KEY); } catch(e){}
  // Re-render and re-run auto checks
  chkRender();
  chkRunAutoChecks();
}

function chkUpdateScore(){
  const score = chkState.checked.size;
  const total = CHECKLIST_ITEMS.length;
  const numEl = document.getElementById('chk-score-num');
  const msgEl = document.getElementById('chk-score-msg');
  const panelEl = document.getElementById('chk-score-panel');
  
  if(numEl) numEl.textContent = score;
  
  let msg, color;
  if(score >= 22){
    msg = '🏆 Izvrstan rad! Esej je gotovo savršeno strukturiran. Spreman za predaju.';
    color = 'var(--gold)';
  } else if(score >= 18){
    msg = '🌟 Vrlo dobar rad. Provjeri još neoznačene stavke i doradi.';
    color = 'var(--green)';
  } else if(score >= 13){
    msg = '👍 Solidan napredak. Vrati se u Workspace i poradi na neoznačenim stavkama.';
    color = 'var(--blue)';
  } else if(score >= 8){
    msg = '📚 Esej treba doradu. Fokusiraj se na ⭐ stavke (najvažnije).';
    color = 'var(--bronze)';
  } else {
    msg = '💪 Esej je tek u izradi. Vrati se na strukturu i ponovo prođi kroz teoriju.';
    color = 'var(--red)';
  }
  
  if(msgEl){
    msgEl.textContent = msg;
    msgEl.style.color = color;
  }
  if(numEl){
    numEl.style.color = color;
  }
  if(panelEl){
    panelEl.style.borderColor = color;
  }
}

// AUTO-INIT for checklist (when tab opened)
function chkAutoInit(){
  setTimeout(() => { 
    if(typeof chkInit === 'function') chkInit(); 
  }, 200);
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', chkAutoInit);
} else {
  chkAutoInit();
}



// ═══════════════════════════════════
// AI FEEDBACK — Pro feature za Tab 6
// ═══════════════════════════════════

const AI_FEEDBACK_STORAGE_KEY = 'mt.hrv.h28.ai_feedback_history';
const PRO_MODE_KEY = 'mt.hrv.pro_mode';
const AI_DAILY_USAGE_KEY = 'mt.hrv.h28.ai_daily_usage';

// Tier limits (mock-up)
const TIER_LIMITS = {
  free: 0,        // No AI feedback
  standard: 10,   // 10 calls/day
  pro: 30         // 30 calls/day
};

function aiIsProMode(){
  // Use global MT.Tier system if available
  if (typeof window.MT !== 'undefined' && window.MT.Tier) {
    return window.MT.Tier.getTier() === 'pro';
  }
  // Fallback to legacy localStorage
  try {
    return localStorage.getItem(PRO_MODE_KEY) === 'true' || localStorage.getItem(PRO_MODE_KEY) === 'standard';
  } catch(e) { return false; }
}

function aiGetTier(){
  try {
    const t = localStorage.getItem(PRO_MODE_KEY);
    if(t === 'true' || t === 'pro') return 'pro';
    if(t === 'standard') return 'standard';
    return 'free';
  } catch(e){ return 'free'; }
}

function aiGetTodayUsage(){
  try {
    const stored = localStorage.getItem(AI_DAILY_USAGE_KEY);
    if(!stored) return {date: '', count: 0};
    const parsed = JSON.parse(stored);
    const today = new Date().toISOString().split('T')[0];
    if(parsed.date !== today) return {date: today, count: 0};
    return parsed;
  } catch(e){ return {date: '', count: 0}; }
}

function aiIncrementUsage(){
  const today = new Date().toISOString().split('T')[0];
  const usage = aiGetTodayUsage();
  if(usage.date !== today){
    usage.date = today;
    usage.count = 0;
  }
  usage.count++;
  try {
    localStorage.setItem(AI_DAILY_USAGE_KEY, JSON.stringify(usage));
  } catch(e){}
  return usage.count;
}

function aiToggleProMode(){
  // Open paywall via MT.Tier if available
  if (typeof window.MT !== 'undefined' && window.MT.Tier) {
    if (window.MT.Tier.getTier() === 'pro') {
      // Already Pro — re-render
      if (typeof aiRenderPanel === 'function') aiRenderPanel();
      return;
    }
    window.MT.Tier.showPaywall({
      feature: 'AI Feedback za sažetak',
      requiredTier: 'pro',
      reason: 'tier_locked'
    });
    return;
  }
  // Legacy fallback
  const isPro = aiIsProMode();
  try {
    if(isPro){
      localStorage.removeItem(PRO_MODE_KEY);
    } else {
      localStorage.setItem(PRO_MODE_KEY, 'true');
    }
  } catch(e){}
  if (typeof aiRenderPanel === 'function') aiRenderPanel();
}

function aiRenderPanel(){
  const wrap = document.getElementById('ai-feedback-wrap');
  if(!wrap) return;
  
  const tier = aiGetTier();
  const usage = aiGetTodayUsage();
  const limit = TIER_LIMITS[tier] || 0;
  const remaining = limit - usage.count;
  
  if(tier === 'free'){
    // FREE — show Pro CTA
    wrap.innerHTML = \`
      <div class="ai-cta">
        <div class="ai-cta-pill">⭐ PRO FEATURE</div>
        <div class="ai-cta-title">AI feedback za tvoj sažetak</div>
        <div class="ai-cta-desc">
          Naš AI profesor čita tvoj sažetak i daje strukturiran feedback po 5 kriterija (Vjernost, Parafraziranje, Objektivnost, Kompresija, Stil) + konkretne preporuke za poboljšanje.
        </div>
        <div class="ai-cta-features">
          <div class="ai-cta-feature">✓ Detaljna analiza po 5 kategorija</div>
          <div class="ai-cta-feature">✓ Konkretne preporuke (ne samo generike)</div>
          <div class="ai-cta-feature">✓ Procjena ocjene</div>
          <div class="ai-cta-feature">✓ Standard: 10 / Pro: 30 feedback-ova dnevno</div>
        </div>
        <button type="button" class="nb-btn primary ai-cta-btn" onclick="alert('🚧 Pretplata u izradi.\\n\\nUskoro: Standard 9.99€/mj · Pro 19.99€/mj')">
          ⭐ Pretplati se za Pro
        </button>
        <button type="button" class="ai-cta-test-btn" onclick="aiToggleProMode()">
          🧪 Test: Toggle Pro mode (developer)
        </button>
      </div>
    \`;
    return;
  }
  
  // PRO/STANDARD user
  const tierLabel = tier === 'pro' ? '⭐ PRO' : '⭐ STANDARD';
  const tierColor = tier === 'pro' ? 'var(--gold)' : 'var(--blue)';
  
  wrap.innerHTML = \`
    <div class="ai-panel">
      <div class="ai-panel-header">
        <div class="ai-panel-tier" style="color:\${tierColor}">\${tierLabel}</div>
        <div class="ai-panel-usage">
          \${usage.count} / \${limit} feedback-ova danas
        </div>
      </div>
      
      <div class="ai-panel-action">
        <button type="button" class="nb-btn primary ai-panel-btn" onclick="aiRunFeedback()" \${remaining <= 0 ? 'disabled' : ''}>
          \${remaining > 0 ? '🤖 Pokreni AI feedback' : '⛔ Iskorišten dnevni limit'}
        </button>
        <button type="button" class="ai-cta-test-btn" onclick="aiToggleProMode()">
          🧪 Toggle tier (developer)
        </button>
      </div>
      
      <div id="ai-feedback-result"></div>
    </div>
  \`;
}

function aiGetEssayText(){
  // H28: read from summary_ keys
  try {
    const currentTopicId = localStorage.getItem('mt.hrv.h28.current_summary');
    if(currentTopicId){
      const stored = localStorage.getItem('mt.hrv.h28.summary_' + currentTopicId);
      if(stored){
        const parsed = JSON.parse(stored);
        if(parsed.text) return {text: parsed.text, topicId: currentTopicId};
      }
    }
    for(let i = 0; i < localStorage.length; i++){
      const key = localStorage.key(i);
      if(key && key.startsWith('mt.hrv.h28.summary_')){
        const data = localStorage.getItem(key);
        if(data){
          const parsed = JSON.parse(data);
          if(parsed.text && parsed.text.trim().length > 50){
            return {text: parsed.text, topicId: key.replace('mt.hrv.h28.summary_', '')};
          }
        }
      }
    }
  } catch(e){}
  return null;
}

async function aiRunFeedback(){
  const essay = aiGetEssayText();
  if(!essay){
    alert('Nema spremljenog sažetka. Otvori Workspace, napiši sažetak, pa pokreni AI feedback.');
    return;
  }
  
  // Get topic info
  const topic = (typeof SOURCE_TEXTS !== 'undefined') ? SOURCE_TEXTS.find(t => t.id === essay.topicId) : null;
  
  const resultEl = document.getElementById('ai-feedback-result');
  if(!resultEl) return;
  
  // Loading state
  resultEl.innerHTML = \`
    <div class="ai-loading">
      <div class="ai-loading-spinner">⏳</div>
      <div class="ai-loading-text">AI profesor analizira tvoj sažetak...</div>
      <div class="ai-loading-sub">~10-20 sekundi</div>
    </div>
  \`;
  
  try {
    // Build prompt
    const wordCount = essay.text.trim().split(/\\s+/).filter(w => w.length > 0).length;
    const topicTitle = topic ? topic.title : 'Tema nije specificirana';
    const topicType = topic ? topic.typeLabel : 'nepoznat';
    
    // Get original text for context
    let originalText = '';
    if(typeof SOURCE_TEXTS !== 'undefined' && essay.topicId){
      const topic = SOURCE_TEXTS.find(t => t.id === essay.topicId);
      if(topic) originalText = topic.text;
    }
    
    const systemPrompt = \`Ti si iskusan profesor hrvatskog jezika koji ocjenjuje sažetke za državnu maturu.

Kriteriji ocjenjivanja sažetka:
- Vjernost originalu (25%): jesu li sve glavne ideje uključene, bez izmišljanja, isti slijed
- Parafraziranje (25%): bez plagijata (5+ uzastopnih riječi iz originala), prava parafraza, ne 1-2 izmijenjene riječi
- Objektivnost (20%): bez subjektivnih fraza ("mislim da", "smatram"), neutralan ton, 3. lice
- Kompresija (15%): word count 150-200r, omjer 20-25% originala
- Stil (15%): bogat rječnik, sinonimi za "kaže", hrvatski navodnici „...", pismenost

Pravila:
- Sažetak mora biti 150-200 riječi (idealno 170-190)
- Mora počinjati s autorom i naslovom
- 3. lice neutralno

POLAZNI TEKST koji je student trebao sažeti:
\${originalText.substring(0, 4000)}

Daj strukturiran feedback u JSON formatu (samo JSON, ništa drugo):
{
  "ocjena_procjena": "broj 1-5 (decimalno)",
  "ukupni_dojam": "1-2 rečenice opće procjene",
  "vjernost": {
    "score": "broj 1-5",
    "snage": ["lista 1-2 snage"],
    "slabosti": ["lista 1-2 slabosti"],
    "preporuka": "konkretna preporuka"
  },
  "parafraza": {
    "score": "broj 1-5",
    "snage": ["lista 1-2 snage"],
    "slabosti": ["lista 1-2 slabosti"],
    "preporuka": "konkretna preporuka"
  },
  "objektivnost": {
    "score": "broj 1-5",
    "snage": ["lista 1-2 snage"],
    "slabosti": ["lista 1-2 slabosti"],
    "preporuka": "konkretna preporuka"
  },
  "stil": {
    "score": "broj 1-5",
    "snage": ["lista 1-2 snage"],
    "slabosti": ["lista 1-2 slabosti"],
    "preporuka": "konkretna preporuka"
  },
  "top_3_preporuke": ["3 prioritetne preporuke za poboljšanje"]
}\`;

    const userPrompt = \`Tema: \${topicTitle}
Tip eseja: \${topicType}
Word count: \${wordCount}

ESEJ:
\${essay.text}

Daj feedback po kriterijima. SAMO JSON u traženom formatu.\`;

    // 🚨 PRODUCTION TODO: Move this fetch to backend proxy (Next.js /api/ai-feedback)
    // Current: API call from browser would expose API key in production.
    // Plan: Next.js API route → Supabase tier check → proxy to Anthropic API → return result
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1500,
        system: systemPrompt,
        messages: [{ role: 'user', content: userPrompt }]
      })
    });
    
    if(!response.ok){
      throw new Error('API request failed: ' + response.status);
    }
    
    const data = await response.json();
    const rawText = data.content.map(b => b.text || '').join('').trim();
    
    // Extract JSON
    let feedback;
    try {
      const cleanedText = rawText.replace(/\`\`\`json|\`\`\`/g, '').trim();
      feedback = JSON.parse(cleanedText);
    } catch(parseErr){
      throw new Error('Ne mogu parsirati AI odgovor: ' + parseErr.message);
    }
    
    // Increment usage
    aiIncrementUsage();
    
    // Save to history
    aiSaveToHistory({
      topicId: essay.topicId,
      topicTitle: topicTitle,
      wordCount: wordCount,
      feedback: feedback,
      ts: Date.now()
    });
    
    // Render result
    aiRenderFeedbackResult(feedback);
    
    // Update usage display
    aiRenderPanel();
    setTimeout(() => {
      // Re-render result after panel rerender
      const resultEl2 = document.getElementById('ai-feedback-result');
      if(resultEl2) aiRenderFeedbackResult(feedback);
    }, 50);
    
  } catch(err){
    resultEl.innerHTML = \`
      <div class="ai-error">
        <div class="ai-error-title">❌ Greška pri AI feedback-u</div>
        <div class="ai-error-msg">\${err.message}</div>
        <div class="ai-error-hint">Provjeri internet vezu ili pokušaj kasnije.</div>
      </div>
    \`;
  }
}

function aiRenderFeedbackResult(fb){
  const resultEl = document.getElementById('ai-feedback-result');
  if(!resultEl) return;
  
  const overallScore = parseFloat(fb.ocjena_procjena) || 0;
  let scoreColor;
  if(overallScore >= 4.5) scoreColor = 'var(--gold)';
  else if(overallScore >= 3.5) scoreColor = 'var(--green)';
  else if(overallScore >= 2.5) scoreColor = 'var(--blue)';
  else if(overallScore >= 1.5) scoreColor = 'var(--bronze)';
  else scoreColor = 'var(--red)';
  
  function renderCategory(catKey, catLabel, catIcon){
    const cat = fb[catKey];
    if(!cat) return '';
    const catScore = parseFloat(cat.score) || 0;
    let catColor;
    if(catScore >= 4.5) catColor = 'var(--gold)';
    else if(catScore >= 3.5) catColor = 'var(--green)';
    else if(catScore >= 2.5) catColor = 'var(--blue)';
    else if(catScore >= 1.5) catColor = 'var(--bronze)';
    else catColor = 'var(--red)';
    
    return \`
      <div class="ai-cat">
        <div class="ai-cat-header">
          <div class="ai-cat-name">\${catIcon} \${catLabel}</div>
          <div class="ai-cat-score" style="color:\${catColor}">\${catScore.toFixed(1)} / 5</div>
        </div>
        \${cat.snage && cat.snage.length ? \`
          <div class="ai-cat-snage">
            <div class="ai-cat-label">✅ Snage</div>
            <ul>\${cat.snage.map(s => \`<li>\${s}</li>\`).join('')}</ul>
          </div>
        \` : ''}
        \${cat.slabosti && cat.slabosti.length ? \`
          <div class="ai-cat-slabosti">
            <div class="ai-cat-label">⚠️ Slabosti</div>
            <ul>\${cat.slabosti.map(s => \`<li>\${s}</li>\`).join('')}</ul>
          </div>
        \` : ''}
        \${cat.preporuka ? \`
          <div class="ai-cat-preporuka">
            <div class="ai-cat-label">💡 Preporuka</div>
            <div>\${cat.preporuka}</div>
          </div>
        \` : ''}
      </div>
    \`;
  }
  
  resultEl.innerHTML = \`
    <div class="ai-result">
      <div class="ai-result-header">
        <div class="ai-result-score-wrap">
          <div class="ai-result-score" style="color:\${scoreColor}">\${overallScore.toFixed(1)}</div>
          <div class="ai-result-score-label">/ 5 procjena ocjene</div>
        </div>
        <div class="ai-result-summary">\${fb.ukupni_dojam || ''}</div>
      </div>
      
      \${fb.top_3_preporuke && fb.top_3_preporuke.length ? \`
        <div class="ai-top3">
          <div class="ai-top3-label">🎯 TOP 3 PRIORITETI ZA POBOLJŠANJE</div>
          <ol>\${fb.top_3_preporuke.map(p => \`<li>\${p}</li>\`).join('')}</ol>
        </div>
      \` : ''}
      
      <div class="ai-categories">
        \${renderCategory('vjernost', 'Vjernost originalu', '🎯')}
        \${renderCategory('parafraza', 'Parafraziranje', '🔄')}
        \${renderCategory('objektivnost', 'Objektivnost', '⚖️')}
        \${renderCategory('stil', 'Stil i jezik', '✨')}
      </div>
      
      <div class="ai-result-actions">
        <button type="button" class="nb-btn" onclick="sw(4)">📝 Vrati u Workspace</button>
        <button type="button" class="nb-btn" onclick="aiRunFeedback()">🔄 Novi feedback</button>
      </div>
    </div>
  \`;
}

function aiSaveToHistory(entry){
  try {
    let history = [];
    const stored = localStorage.getItem(AI_FEEDBACK_STORAGE_KEY);
    if(stored) history = JSON.parse(stored);
    history.unshift(entry);
    history = history.slice(0, 20);
    localStorage.setItem(AI_FEEDBACK_STORAGE_KEY, JSON.stringify(history));
  } catch(e){}
}

// AUTO-INIT
function aiAutoInit(){
  setTimeout(() => {
    if(typeof aiRenderPanel === 'function') aiRenderPanel();
  }, 250);
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', aiAutoInit);
} else {
  aiAutoInit();
}



// ═══════════════════════════════════
// SAŽETAK WORKSPACE — Tab 4 (H28)
// 10 polaznih tekstova · split-screen
// plagijat detektor · objektivnost check
// ═══════════════════════════════════

const SUMMARY_TEXTS = [
  // ━━━ ESEJISTIČKI (3) ━━━
  {
    id: 'esej01',
    type: 'esej',
    title: \`Hrvatska kultura između tradicije i suvremenosti\`,
    author: \`Tomislav Bogdanović\`,
    context: \`Esej iz kulturne kritike (~700 riječi)\`,
    originalText: \`Hrvatska kultura danas se nalazi u jedinstvenom položaju između naslijeđene tradicije i pritiska globalizacije. S jedne strane, baština nekoliko stoljeća književne, glazbene i likovne produkcije čini temelj nacionalnog identiteta. Marulić, Šenoa, Krleža, Matoš — ovi i mnogi drugi autori oblikovali su način na koji Hrvati razumiju sami sebe. S druge strane, globalna potrošačka kultura, internet i mobilnost mladih svakodnevno mijenjaju i jezik i navike i vrijednosti.

Pitanje je može li hrvatska kultura preživjeti ovaj sudar bez da izgubi svoju suštinu. Optimisti tvrde da je tradicija preživjela puno teže izazove — Habsburšku germanizaciju, jugoslavensko zatomljavanje hrvatskog identiteta, ratnu razornost devedesetih. Stoljećima se prilagođavala, ali nije nestajala. Hrvatski jezik je primao tuđice (turcizme, germanizme, talijanizme), ali ostao prepoznatljivo svoj. Slično vrijedi i za književnost, koja je crpila iz europskih tokova ali ih oblikovala u nešto specifično hrvatsko.

Pesimisti, pak, upozoravaju da je sadašnji izazov drugačiji od povijesnih. Globalizacija ne djeluje političkom prisilom kao što su to činile carske vlasti u prošlosti, nego ekonomskom i medijskom dominacijom koja se ne može odbiti. Mladi koji odrastaju uz YouTube, TikTok i Netflix nemaju nikakav otpor prema engleskom jeziku — oni ga doživljavaju kao normalan, pa čak i privlačan. Hrvatska kultura im se može činiti kao zastarjelom muzejskom postavom.

Istina je vjerojatno negdje između. Hrvatska kultura ne nestaje, ali se mijenja brže nego ikad u svojoj povijesti. Generacija koja danas odrasta govori hibridnim jezikom u kojem hrvatske riječi gube prostor pred anglizmima u svakodnevnoj komunikaciji. Istovremeno, nove kulturne forme (hrvatski podcasti, YouTuberi, glazbeni izvođači) postižu impresivan uspjeh i privlače mlade na nov, suvremeni način.

Ključno pitanje nije hoće li hrvatska kultura preživjeti — vjerojatno hoće, kao što je preživjela i ranije. Pravo pitanje je u kojem će obliku preživjeti. Hoćemo li sačuvati Krležinu kompleksnost ili će ona postati ekskluzivni interes akademskih krugova? Hoće li Šenoa i Mažuranić ostati žive lekcije za mlade ili samo obavezno štivo koje se preskače? Hoće li hrvatski jezik zadržati svoj specifičan ritam ili će se postupno pretvoriti u dijalekt anglizirane komunikacije?

Odgovori ovise o tome kako će reagirati tri ključna aktera: obrazovni sustav, mediji i sami stvaratelji kulture. Škola koja inzistira na pisanom hrvatskom standardu može sačuvati jezičnu kvalitetu i kad govorni jezik bude pun anglizama. Mediji koji daju prostora hrvatskim autorima mogu osigurati da se njihov rad i dalje čita. Stvaratelji koji uspijevaju biti istovremeno hrvatski i suvremeni mogu mladima pokazati da tradicija nije zastarjela, nego živa.

Suvremeni kulturni paradoks Hrvatske glasi: nikad nije bilo lakše konzumirati globalnu kulturu, ali nikad nije bilo važnije svjesno birati i hrvatsku. Identitet više nije zadan rođenjem; on je svakodnevni izbor. Generacije koje budu znale i Krležu i Krasta — hrvatske YouTubere i Marulića — bit će one koje hrvatsku kulturu pronesu u 22. stoljeće.\`,
    keyIdeas: [
      \`Hrvatska kultura je u sudaru tradicije i globalizacije\`,
      \`Optimisti vjeruju da će preživjeti kao i ranije; pesimisti tvrde da je sadašnji izazov drugačiji\`,
      \`Globalizacija djeluje kroz medije i ekonomiju, ne političkom prisilom\`,
      \`Pravo pitanje je u kojem obliku će kultura preživjeti, ne hoće li\`,
      \`Identitet danas je svjesni izbor, ne automatska danost\`
    ],
    modelSummary: \`Hrvatska kultura se danas nalazi u sudaru tradicije i globalizacije. Optimistični stav ističe da je nacionalna baština preživjela puno teže izazove kroz povijest — od carskih vlasti do jugoslavenskog razdoblja — i da će se i sada prilagoditi. Pesimisti, međutim, naglašavaju da sadašnji izazov ima drugačiju narav: globalizacija ne djeluje političkom prisilom, nego ekonomskom i medijskom dominacijom koju mladi spontano prihvaćaju. Stvarna situacija je negdje između — kultura se ne gubi, ali mijenja brže nego ikad. Pojavljuju se nove forme poput podcasta i YouTube kanala koji privlače mlade. Pravo pitanje nije hoće li hrvatska kultura preživjeti, nego u kojem obliku. Odgovor ovisi o obrazovnom sustavu, medijima i samim stvarateljima koji moraju spojiti tradiciju i suvremenost. Identitet više nije zadan rođenjem — postao je svakodnevni svjesni izbor svakog pojedinca.\`
  },
  
  {
    id: 'esej02',
    type: 'esej',
    title: \`Pad čitanja knjiga u digitalnom dobu\`,
    author: \`Marija Radić\`,
    context: \`Esej o suvremenoj kulturi (~720 riječi)\`,
    originalText: \`Statistike posljednjih godina pokazuju zabrinjavajući trend: prosječan tinejdžer u Hrvatskoj danas pročita manje od pet knjiga godišnje, izvan obaveznog školskog programa. Slična slika dolazi iz svih europskih zemalja. Pad čitanja knjiga postao je globalna pojava, a njegove posljedice tek počinju biti vidljive.

Razlozi za ovaj pad su brojni i međusobno povezani. Najočitiji je sveprisutnost ekrana. Mladi danas provode više od četiri sata dnevno na mobilnim uređajima, a dodatne sate na računalima i televiziji. Vrijeme koje su nekadašnje generacije posvećivale knjigama danas pripada video sadržajima, društvenim mrežama i igrama. Pažnja je postala fragmentirana — kratke video snimke od trideset sekundi pružaju brzi dopaminski poticaj, dok knjige zahtijevaju duboku, sporu koncentraciju koju mnogi mladi više ne mogu održati.

Drugi razlog je promjena obrazovnog pristupa. Lektira u školama često se doživljava kao prisila, što kod učenika izgrađuje otpor prema čitanju. Klasici poput Šenoinih romana ili Krležinih drama nudi se mladima u kontekstu koji ne objašnjava zašto bi ti tekstovi mogli biti relevantni za njihove suvremene živote. Rezultat je da se čitanje povezuje s dosadom i obavezom, ne sa zadovoljstvom i otkrivanjem.

Treći razlog leži u promjeni sadržajnog tržišta. Izdavačka industrija sve teže opstaje, a mlađi autori suočavaju se s pritiskom da pišu kratko, snazi, optimizirano za suvremene navike pažnje. Romani od šesto stranica postaju sve rjeđi, a kad se pojave, teško nalaze publiku. Paradoks je što se najprodavaniji stripovi i graphic novels pokazuju da mladi ipak žele pripovjedne forme — samo u drugačijem pakiranju.

Posljedice ovog pada nisu samo kulturne, nego i kognitivne. Istraživanja pokazuju da redovito čitanje knjiga razvija sposobnosti koncentracije, empatije i kompleksnog razmišljanja na način koji video sadržaji ne mogu replicirati. Vokabular se gradi sporije, sposobnost dugotrajne pažnje slabi, a kompleksne argumentacijske strukture postaju sve teže prepoznati. U dugoročnoj perspektivi, generacija koja malo čita može imati problema s kritičkim mišljenjem i artikulacijom složenih ideja.

Postoje i optimistični signali. Pojavljuju se novi formati — audioknjige doživljavaju eksploziju popularnosti, dijelom zato što se mogu konzumirati u pokretu. BookTok, hashtag fenomen na TikToku, vraća čitanje knjiga u trendovsku zonu i potiče tinejdžere da otkrivaju nove autore. Knjižnice se transformiraju u kulturne centre koji privlače mlade ne samo knjigama, nego programom događanja.

Pitanje je što treba učiniti. Optužba ekrana sama za sebe ne pomaže — oni nikamo ne idu. Ono što može pomoći je promjena pristupa: lektira koja stvarno govori suvremenim mladima, javne kampanje koje čitanje predstavljaju kao zanimljivo a ne kao obavezu, roditelji koji vlastitim primjerom pokazuju da knjige imaju mjesto u životu odraslih.

Nije realno očekivati povratak na vrijeme kad su mladi pročitali tridesetak knjiga godišnje. Ali nije realno ni dopustiti potpuno gašenje navike čitanja. Cilj treba biti pronaći balans — novi modus vivendi između knjige i ekrana koji čuva ono što je čitanje davalo, ali i prihvaća ono što novi mediji nude. Bez te ravnoteže, generacije pred nama mogu izgubiti nešto što čovječanstvo gradi tisućama godina.\`,
    keyIdeas: [
      \`Statistike pokazuju ozbiljan pad čitanja knjiga kod mladih\`,
      \`Razlozi: sveprisutnost ekrana, promjena obrazovnog pristupa, promjena izdavačkog tržišta\`,
      \`Posljedice su kognitivne (slabija koncentracija, vokabular, kritičko mišljenje)\`,
      \`Postoje optimistični signali: audioknjige, BookTok, transformirane knjižnice\`,
      \`Cilj treba biti balans između tradicionalnog čitanja i novih medija\`
    ],
    modelSummary: \`Tekst analizira globalni pad čitanja knjiga kod mladih. Prosječan hrvatski tinejdžer danas pročita manje od pet knjiga godišnje, što je trend prisutan u cijeloj Europi. Tri su glavna razloga: sveprisutnost ekrana koja fragmentira pažnju, obrazovni pristup koji čitanje povezuje s prisilom umjesto s otkrivanjem, te izdavačko tržište koje sve teže opstaje. Posljedice nisu samo kulturne nego i kognitivne — slabe sposobnosti koncentracije, vokabular i kompleksno razmišljanje. Postoje i optimistični signali: audioknjige doživljavaju popularnost, BookTok vraća knjige u trendovsku zonu, knjižnice se transformiraju u kulturne centre. Rješenje nije u optužbi ekrana, nego u promjeni pristupa: drugačija lektira, javne kampanje, primjer roditelja. Realan cilj nije povratak nekadašnjeg ritma čitanja, nego pronalazak balansa između knjige i ekrana — ravnoteža koja čuva kognitivne benefite čitanja, ali i prihvaća suvremene medije.\`
  },
  
  {
    id: 'esej03',
    type: 'esej',
    title: \`Mladi i odlazak iz Hrvatske\`,
    author: \`Iva Lončar\`,
    context: \`Esej o društvenim trendovima (~680 riječi)\`,
    originalText: \`Tisuće mladih Hrvata svake godine napušta zemlju u potrazi za boljim životom. Statistike pokazuju da je iseljavanje doseglo razmjere koje nisu zabilježene od ratnih devedesetih. Pitanje koje se postavlja u javnom prostoru više nije postoji li problem, nego što ga uzrokuje i može li se zaustaviti.

Razlozi za odlazak su višestruki, ali ekonomski faktor dominira. Hrvatske plaće, čak i nakon ulaska u eurozonu, ostaju među nižima u Europskoj uniji. Mladi inženjer u Zagrebu zarađuje gotovo upola manje od kolege iste struke u Münchenu ili Beču. Životni troškovi, posebno troškovi stanovanja u većim gradovima, učinili su financijski održivu samostalnost gotovo nedostupnom za većinu mladih.

Ekonomski faktor, međutim, nije jedini. Mnogi mladi Hrvati odlaze iz razloga koji nadilaze plaću. Profesionalne mogućnosti za napredovanje često su ograničene postojećim mrežama veza i klijentelizmom koji onemogućuje meritokratski put naprijed. Akademski sektor pati od manjka istraživačkog financiranja, pa znanstvenici koji žele razvijati svoju struku odlaze tamo gdje za to postoje uvjeti. Kulturna scena nudi malo profesionalnih perspektiva. Sve to stvara osjećaj zatvorenosti horizonta.

Postoji i emocionalna dimenzija — frustracija s administrativnom birokratom, javnim sektorom koji se sporo modernizira, političkom kulturom koja često razočarava. Mladi koji odrastu uz internet i lakim pristupom svjetskim trendovima teško prihvaćaju tempo i način funkcioniranja domaćih institucija. Kad imaju mogućnost otići u zemlju gdje sve funkcionira brže i transparentnije, čak i s manjom plaćom, mnogi to izaberu.

Posljedice za Hrvatsku su ozbiljne. Demografski, broj radno sposobnog stanovništva opada brže nego što ga zamjenjuju nove generacije. Ekonomski, gubi se najobrazovaniji i najpoduzetniji segment populacije — investicija države u njihovo obrazovanje (osnovna škola, srednja škola, fakultet) pretače se u korist drugih ekonomija. Socijalno, ostaje populacija koja je u prosjeku starija i manje raznolika.

Postoje različite odgovore na ovaj problem. Konzervativni pristup poziva na povratak nacionalnih vrijednosti i lojalnost prema domovini, što u praksi rijetko djeluje na ekonomske odluke pojedinaca. Liberalniji pristup zagovara reforme — meritokratizaciju javnog sektora, podrška mladim poduzetnicima, modernizaciju državnih usluga. Realističniji pristup priznaje da je iseljavanje dijelom nepovratan trend u doba slobodnog kretanja unutar EU, ali da se može barem ublažiti i da se može otvoriti prostor za kasniji povratak iskusnijih kadrova.

Razgovor sa samim mladima koji odlaze otkriva nešto važno: većina ih ne odlazi s mržnjom prema Hrvatskoj. Naprotiv, mnogi planiraju vratiti se kad budu spremni — financijski sigurni, profesionalno zreliji. Zemlja im je u srcu, ali njezin sustav im trenutno ne omogućuje život koji žele. To znači da Hrvatska ima šansu — ne kroz emotivne pozive na ostanak, nego kroz konkretne reforme koje bi učinile povratak privlačnim.

Iseljavanje mladih nije nužno tragedija nepovratne propasti. Može biti i prilika za temeljnu transformaciju ako se prepozna kao signal o ozbiljnim sustavnim problemima. Pitanje je hoće li politika i društvo odlučiti djelovati ili će čekati dok ne bude prekasno.\`,
    keyIdeas: [
      \`Hrvatska doživljava velik val iseljavanja mladih, najveći od devedesetih\`,
      \`Razlozi: ekonomski (niske plaće, troškovi stanovanja), profesionalni (klijentelizam), emocionalni (birokracija)\`,
      \`Posljedice: demografski pad, gubitak ulaganja u obrazovanje, starenje populacije\`,
      \`Mladi ne odlaze iz mržnje — mnogi planiraju povratak ako bi se uvjeti popravili\`,
      \`Iseljavanje može biti prilika za reformu ako se shvati kao signal sustavnih problema\`
    ],
    modelSummary: \`Tekst analizira intenzivan val iseljavanja mladih Hrvata, najveći od ratnih devedesetih. Glavni razlozi su višeslojni. Ekonomski faktori dominiraju — hrvatske plaće su među nižima u EU, a troškovi stanovanja onemogućuju samostalnost. Uz to, profesionalne mogućnosti su ograničene klijentelizmom, akademski sektor pati od manjka financiranja, kulturna scena nudi malo perspektiva. Emocionalna dimenzija uključuje frustraciju s birokracijom i sporo modernizirajućim javnim sektorom. Posljedice su ozbiljne: demografski pad, gubitak ulaganja u obrazovanje koje koristi drugim ekonomijama, starenje populacije. Postoje različite reakcije — konzervativna, liberalno-reformska, realistična. Razgovor s onima koji odlaze otkriva da većina ne napušta Hrvatsku iz mržnje, nego zbog sustavnih ograničenja, te da bi mnogi razmotrili povratak ako bi se uvjeti popravili. Iseljavanje može biti prilika za temeljnu reformu — ako politika i društvo prepoznaju signal sustavnih problema i odluče djelovati prije nego što bude prekasno.\`
  },
  
  // ━━━ NOVINSKI (3) ━━━
  {
    id: 'nov01',
    type: 'novin',
    title: \`Klimatske promjene mijenjaju jadranske ekosustave\`,
    author: \`Jutarnji list — znanstvena reportaža\`,
    context: \`Novinski članak o utjecaju klime na Jadran (~640 riječi)\`,
    originalText: \`Posljednje istraživanje Instituta za oceanografiju i ribarstvo iz Splita pokazalo je da se temperatura Jadranskog mora u proteklih trideset godina povisila za prosječno 1,7 stupnja Celzijusa. To je više od globalnog prosjeka i ima konkretne posljedice za ekosustav koji su znanstvenici desetljećima smatrali stabilnim.

Najvidljivija promjena tiče se ribljih populacija. Hladnoljubive vrste poput skuše i lokarde povlače se sjevernije, a njihovo mjesto zauzimaju toploljubive vrste koje su dosad bile karakteristične za južne dijelove Mediterana. Riba lampuga, koja je nekoć bila rijetkost u Jadranu, sada se redovito lovi i u sjevernim dijelovima. Modra riba, povijesna osnova hrvatskog ribarstva, pokazuje znakove pada u ulovu — što ima izravne posljedice za priobalnu ekonomiju.

Drugi vidljiv učinak je širenje invazivnih vrsta. Najpoznatija među njima je ribica nazvana strašni rakušac (lat. Caulerpa cylindracea), morska alga koja prekriva morsko dno i istiskuje domaće vrste. Slične probleme stvara i meduza Mnemiopsis leidyi, koja troši rezerve planktona od kojih ovise i juvenilne ribe. Znanstvenici upozoravaju da invazivne vrste mogu trajno promijeniti bioraznolikost Jadrana.

Posebno zabrinjava sudbina koraljnih staništa. Crveni koralj, koji je stoljećima bio simbol jadranskog podmorja, suočava se s ozbiljnim padom populacije. Toplije vode pogoduju bolestima koje koralj inače može tolerirati u manjoj mjeri. Niz uzastopnih toplih ljeta tijekom posljednjih nekoliko godina ostavio je vidljive posljedice na koraljnim kolonijama.

Učinci se ne osjećaju samo pod morem, nego i u priobalju. Šablje za suncobrane na nekim plažama danas se postavljaju cijelu noć jer se kupači okupljaju do kasno u večer zbog iznimno visokih dnevnih temperatura. Sezona kupanja produljila se za otprilike tri tjedna u odnosu na osamdesete godine prošlog stoljeća — što za turistički sektor zvuči kao pozitivna vijest, ali za prirodni cikl znači značajne promjene.

Reakcija znanstvene zajednice i politike različita je. Institut za oceanografiju traži dodatna sredstva za sustavno praćenje promjena i za istraživanje invazivnih vrsta. Ministarstvo zaštite okoliša najavilo je program koji bi trebao smanjiti pritisak na priobalne ekosustave kroz strožu kontrolu izgradnje i otpadnih voda. Ribari, pak, traže kompenzaciju za pad ulova i podršku za prilagodbu na nove vrste.

Stručnjaci ističu da se pojedinačnim mjerama ne mogu zaustaviti globalni klimatski trendovi koji utječu na Mediteran u cjelini. Ono što se može jest ublažiti lokalne pritiske — onečišćenje, prekomjerni ribolov, neplansku izgradnju — kako bi se ekosustavi mogli što prirodnije prilagoditi novim uvjetima. Bez tih mjera, Jadran kakvog poznajemo može doživjeti dramatičnu transformaciju u sljedećih nekoliko desetljeća.

Mnogi turisti koji ovog ljeta posjećuju Hrvatsku još uvijek doživljavaju Jadran kao kristalno čisto i bogato more — što i jest. No znanstveni podaci upozoravaju da je ta percepcija pomalo zastarjela, a da se promjene odvijaju brže nego što ih obično zamijetimo. Aktivnosti narednih deset godina će pokazati hoće li se uspjeti zadržati ono najbolje što Jadran nudi ili će se priroda postupno transformirati u nešto novo i drugačije.\`,
    keyIdeas: [
      \`Temperatura Jadranskog mora porasla je za 1,7°C u 30 godina — više od globalnog prosjeka\`,
      \`Hladnoljubive ribe se povlače, toploljubive im zauzimaju mjesto\`,
      \`Invazivne vrste (alge, meduze) mijenjaju bioraznolikost\`,
      \`Crveni koralj je u opasnosti zbog uzastopnih toplih ljeta\`,
      \`Lokalne mjere mogu ublažiti pritiske, ali ne mogu zaustaviti globalne trendove\`
    ],
    modelSummary: \`Istraživanje Instituta za oceanografiju u Splitu pokazalo je da se temperatura Jadranskog mora u trideset godina povisila za 1,7°C, što je više od globalnog prosjeka. Posljedice su vidljive u nekoliko dimenzija. Hladnoljubive ribe poput skuše i lokarde povlače se sjevernije, a njihovo mjesto zauzimaju toploljubive vrste karakteristične za južni Mediteran. Šire se invazivne vrste — morska alga i meduza — koje istiskuju domaće organizme i trajno mijenjaju bioraznolikost. Crveni koralj, povijesni simbol jadranskog podmorja, suočava se s ozbiljnim padom zbog uzastopnih toplih ljeta. Sezona kupanja produljila se za tri tjedna u odnosu na osamdesete. Reakcije su podijeljene: znanstvenici traže dodatna sredstva, ministarstvo najavljuje program kontrole, ribari traže kompenzacije. Stručnjaci ističu da pojedinačne mjere ne mogu zaustaviti globalne klimatske trendove, ali mogu ublažiti lokalne pritiske kao što su onečišćenje i prekomjerni ribolov. Sljedećih deset godina će pokazati hoće li se uspjeti sačuvati Jadran u njegovom poznatom obliku.\`
  },
  
  {
    id: 'nov02',
    type: 'novin',
    title: \`Hrvatska digitalna pismenost među slabijima u EU\`,
    author: \`Večernji list — analitički prilog\`,
    context: \`Novinski članak o digitalnim vještinama (~620 riječi)\`,
    originalText: \`Eurostat je ovog tjedna objavio najnovija mjerenja digitalne pismenosti u zemljama Europske unije za 2025. godinu. Hrvatska se nalazi na 22. mjestu od 27 zemalja, s rezultatom koji ukazuje na ozbiljne probleme u sposobnosti građana da efikasno koriste digitalne tehnologije u svakodnevnom životu i radu.

Mjerenje obuhvaća pet dimenzija: osnovne digitalne vještine, vještine komunikacije i suradnje, kreiranje digitalnog sadržaja, sigurnost na internetu, te rješavanje problema. Hrvatska bilježi natprosječne rezultate samo u jednoj — komunikaciji, što odražava popularnost mobilnih aplikacija. U svim ostalim dimenzijama nalazimo se ispod prosjeka EU.

Posebno zabrinjava razlika između mlađih i starijih generacija. Tinejdžeri u Hrvatskoj imaju digitalne vještine usporedive s europskim prosjekom, što pokazuje da osnovni pristup tehnologiji postoji. Međutim, populacija starija od četrdeset pet godina pokazuje rezultate značajno ispod prosjeka. Ovaj generacijski jaz veći je u Hrvatskoj nego u većini drugih zemalja EU.

Ekonomske posljedice digitalne nepismenosti su konkretne. Mnoge državne usluge danas su pretežno digitalne — porezna prijava, prijava boravišta, traženje subvencija — ali velik dio populacije ne može ih samostalno koristiti. To stvara problem ovisnosti o pomoći drugih i može biti uzrok nejednakosti u pristupu javnim uslugama.

Stručnjaci ističu nekoliko uzroka. Prvo, kvaliteta digitalnog obrazovanja u školama varira jako, ovisno o resursima i opremljenosti pojedinih škola. Drugo, programi obuke za odraslog stanovništva ne dosežu one koji najviše trebaju pomoć. Treće, sam dizajn digitalnih usluga često nije prilagođen korisnicima koji nisu navikli na suvremena sučelja.

Ministarstvo znanosti i obrazovanja najavilo je novi nacionalni program digitalnog opismenjavanja koji bi trebao krenuti u rujnu. Program uključuje besplatne tečajeve za sve dobne skupine, posebno orijentirane na srednju i stariju populaciju, te dodatnu podršku za škole u ruralnim područjima. Ipak, kritičari upozoravaju da slični programi u prošlosti nisu donijeli značajne rezultate, dijelom zato što nisu privukli ciljane korisnike.

Iskustva uspješnijih zemalja, poput Estonije i Finske, pokazuju da je ključ u kombinaciji nekoliko faktora: rano i konzistentno digitalno obrazovanje u školama, javne usluge dizajnirane za jednostavno korištenje, i kontinuirana podrška kroz cijeli životni vijek pojedinca. Estonija je postala europski lider digitalnog javnog sektora upravo zato što je sustavno radila na ovim ciljevima već gotovo dva desetljeća.

Hrvatska digitalna transformacija ne može biti samo tehnička — ona mora biti i edukacijska. Bez stanovništva koje zna koristiti tehnologiju, najmodernije e-usluge ostaju nedostupne velikom dijelu građana. Pred sljedećih nekoliko godina stoji izazov koji će odrediti hoće li Hrvatska zatvoriti jaz prema vodećim digitalnim društvima ili će ostati u trajnoj poziciji digitalnog dohvaćanja.\`,
    keyIdeas: [
      \`Hrvatska je 22. od 27 zemalja EU u digitalnoj pismenosti\`,
      \`Najveći jaz je između mlađih i starijih generacija\`,
      \`Posljedice se vide u nepristupačnosti državnih digitalnih usluga\`,
      \`Uzroci: nejednako digitalno obrazovanje, neefikasni programi obuke, nedovoljno user-friendly dizajn\`,
      \`Estonija i Finska su uspjele kroz dugoročnu kombinaciju obrazovanja, dizajna i podrške\`
    ],
    modelSummary: \`Eurostatova mjerenja za 2025. smjestila su Hrvatsku na 22. mjesto od 27 zemalja EU u digitalnoj pismenosti. Mjerenje obuhvaća pet dimenzija, a Hrvatska bilježi natprosječne rezultate samo u komunikaciji, dok je u svim ostalima ispod prosjeka. Posebno zabrinjava generacijski jaz: tinejdžeri imaju vještine usporedive s europskim prosjekom, dok stariji od 45 godina pokazuju značajno slabije rezultate. Ekonomske posljedice su konkretne — državne digitalne usluge ostaju nedostupne velikom dijelu populacije, što stvara nejednakost. Stručnjaci ističu tri uzroka: nejednaku kvalitetu digitalnog obrazovanja u školama, neefikasnost programa obuke koji ne dosežu ciljanu populaciju, te nedovoljno korisnički prilagođen dizajn digitalnih usluga. Ministarstvo najavljuje novi nacionalni program digitalnog opismenjavanja, ali kritičari upozoravaju na neuspjeh sličnih ranijih inicijativa. Iskustva Estonije i Finske pokazuju da je za uspjeh potrebna dugoročna kombinacija obrazovanja, dobrog dizajna i kontinuirane podrške. Hrvatska digitalna transformacija mora biti istovremeno tehnička i edukacijska.\`
  },
  
  {
    id: 'nov03',
    type: 'novin',
    title: \`Mali poljoprivrednici nestaju iz Slavonije\`,
    author: \`Slobodna Dalmacija — reportaža\`,
    context: \`Novinska reportaža o ruralnoj demografiji (~610 riječi)\`,
    originalText: \`U posljednjih dvadeset godina broj malih poljoprivrednih obiteljskih gospodarstava u Slavoniji smanjio se za više od četrdeset posto. Ova statistika, koju je objavila Hrvatska poljoprivredna agencija, pokazuje proces koji mijenja lice slavonskog ruralnog krajolika brže nego što se obično misli.

Razlozi za nestajanje malih gospodarstava su međusobno povezani i strukturni. Najprije, ekonomska računica više ne podržava male obrade. Cijene poljoprivrednih proizvoda diktirane su globalnim tržištima, a mali proizvođač ne može konkurirati ekonomijama razmjera koje imaju veliki industrijski poljoprivrednici. Cijena pšenice, kukuruza ili soje na svjetskom tržištu često ne pokriva ni troškove proizvodnje za malo gospodarstvo.

Drugi faktor je generacijska smjena, ili točnije — njen izostanak. Mladi koji odrastaju na obiteljskim gospodarstvima rijetko ostaju u poljoprivredi. Razlozi su brojni: niža plaća u odnosu na gradske poslove, nedostatak društvenog života u ruralnim sredinama, slabija dostupnost obrazovnih i zdravstvenih usluga. Kad starija generacija ode u mirovinu ili umre, mlađi nasljednici često prodaju zemlju ili je daju u zakup velikim proizvođačima.

Treći faktor je promjena samog obrazovnog i kulturnog sustava. Generacijama je poljoprivreda bila smatrana legitimnim i poštovanim zanimanjem. Danas se rad u zemlji često percipira kao nazadan, a mladi su pod pritiskom da nađu „bolje" karijere u gradu. Ova kulturna promjena, suptilna ali snažna, ubrzava demografski pad sela.

Posljedice se već osjećaju. Sela koja su nekoć imala stotine stanovnika danas broje nekoliko desetaka. Škole se zatvaraju zbog premalog broja djece. Trgovine, ambulante i pošte gase se kao financijski neisplativi. Ovo stvara začarani krug — što više usluga nestaje, to je teže za one koji ostaju, te i oni s vremenom odlaze.

Zemlja koja je nekad pripadala malim gospodarstvima sve više se koncentrira u rukama velikih agroindustrijskih kompanija. Ovo ima i ekološke posljedice — velika monokulturna proizvodnja smanjuje bioraznolikost i intenzivira korištenje pesticida. Tradicionalni načini obrade, koji su tisućljećima oblikovali slavonski krajolik, ustupaju mjesto industrijskoj logici maksimalnog prinosa.

Postoje različiti odgovori. Europska unija kroz Zajedničku poljoprivrednu politiku financira male i srednje proizvođače, ali kritičari ističu da subvencije nisu dovoljne i da često više koriste velikim proizvođačima. Pojavljuju se inicijative za organsku poljoprivredu, lokalno tržište i agroturizam, koje malim gospodarstvima nude nove modele opstanka. Ipak, ovi pristupi za sad ostaju marginalni.

Jedan od poljoprivrednika kojeg smo razgovarali, Marko iz okolice Đakova, kaže da je on posljednja generacija koja vodi obiteljsko gospodarstvo. Njegova djeca su otišla u Zagreb i ne razmišljaju o povratku. „Kad ja odem", kaže, „zemlja će biti prodana ili dana u zakup. Pet stoljeća jedne porodice na ovoj zemlji nestaje s mojom generacijom." Njegovo iskustvo nije izolirano — ono je tipično za hrvatsku ruralnu Slavoniju u trenutku duboke transformacije.\`,
    keyIdeas: [
      \`Broj malih obiteljskih poljoprivrednih gospodarstava u Slavoniji pao je za 40% u 20 godina\`,
      \`Glavni razlozi: ekonomski (globalna konkurencija), generacijski (mladi ne ostaju), kulturni (poljoprivreda smatrana nazadnom)\`,
      \`Posljedice: zatvaranje škola, gašenje usluga, koncentracija zemlje u velikim kompanijama\`,
      \`Posljedice su i ekološke (monokultura, pesticidi)\`,
      \`EU subvencije nisu dovoljne; nove inicijative (organska poljoprivreda, agroturizam) ostaju marginalne\`
    ],
    modelSummary: \`Broj malih obiteljskih poljoprivrednih gospodarstava u Slavoniji u dvadeset godina smanjio se za više od četrdeset posto, pokazuje statistika Hrvatske poljoprivredne agencije. Razlozi su strukturni i međusobno povezani. Ekonomski, mali proizvođači ne mogu konkurirati globalnim cijenama i ekonomijama razmjera velikih industrijskih kompanija. Generacijski, mladi rijetko ostaju u poljoprivredi zbog niskih plaća, slabe dostupnosti usluga i nedostatka društvenog života u selima. Kulturno, poljoprivreda se sve više smatra nazadnim zanimanjem. Posljedice su vidljive: sela se prazne, škole zatvaraju, trgovine gase, što stvara začarani krug pražnjenja ruralnih područja. Zemlja se koncentrira u rukama agroindustrijskih kompanija, što ima i ekološke posljedice kroz monokulturu i pesticide. EU subvencije ne uspijevaju zaustaviti trend, a nove inicijative — organska poljoprivreda, agroturizam — ostaju marginalne. Iskustvo poljoprivrednika iz okolice Đakova, kojem je djeca otišla u Zagreb, ilustrira tipičnu sudbinu: pet stoljeća obiteljskog gospodarenja zemljom završava jednom generacijom.\`
  },
  
  {
    id: 'znan01',
    type: 'znan',
    title: \`Kako mozak pamti — neuroznanost dugoročnog pamćenja\`,
    author: \`prof. dr. sc. Anita Vrhovac\`,
    context: \`Znanstveno-popularni članak iz neuroznanosti (~700 riječi)\`,
    originalText: \`Pitanje kako ljudski mozak stvara, čuva i dohvaća sjećanja jedno je od najfascinantnijih u modernoj znanosti. Posljednjih trideset godina, napredak u tehnologijama poput funkcionalne magnetske rezonance i optogenetike omogućio je istraživačima da promatraju procese pamćenja na razinama detalja koje su prethodne generacije znanstvenika mogle samo zamišljati.

Pamćenje nije jedinstven sustav. Mozak koristi različite mehanizme za različite vrste informacija. Kratkoročno pamćenje, koje održava informaciju nekoliko sekundi do nekoliko minuta, oslanja se na električnu aktivnost u prefrontalnom korteksu. Dugoročno pamćenje, koje može trajati desetljećima, pohranjuje se kroz strukturne promjene u sinapsama — vezama između neurona.

Ključna struktura za prelazak iz kratkoročnog u dugoročno pamćenje je hipokampus, mala zaobljena struktura duboko u temporalnom režnju mozga. Pacijenti s oštećenjem hipokampusa, najpoznatiji slučaj poznat pod inicijalima H. M., gube sposobnost stvaranja novih dugoročnih sjećanja, ali zadržavaju sjećanja iz vremena prije ozljede. Ovo je pokazalo da hipokampus nije skladište sjećanja, nego organ koji ih konsolidira i prenosi u trajnije strukture u korteksu.

Sam proces konsolidacije zauzima dane, tjedne, pa čak i godine. Tijekom ovog razdoblja, sjećanja se postupno stabiliziraju kroz mehanizam zvan dugoročna potencijacija. Sinapse koje su bile aktivne tijekom doživljavanja nekog događaja jačaju se ponavljanim aktiviranjem. Što je sjećanje češće dohvaćano, to su jače veze koje ga predstavljaju u mozgu.

San igra ključnu ulogu u konsolidaciji. Tijekom dubokog sna i REM faze, mozak ponovno aktivira neuralne obrasce koji su bili aktivni tijekom dnevnih iskustava. Ovo „ponavljanje" pomaže prebacivanje informacija iz hipokampusa u kortikalna područja gdje se trajno pohranjuju. Studije su pokazale da osobe koje su bolje spavale nakon učenja zadržavaju značajno više informacija od onih koje nisu spavale.

Emocije također utječu na pamćenje. Amigdala, struktura povezana s emocionalnim odgovorima, modulira aktivnost hipokampusa. Snažno emocionalna sjećanja — bila ona pozitivna ili negativna — pohranjuju se intenzivnije i traju duže. To objašnjava zašto pamtimo detalje važnih životnih trenutaka mnogo bolje od običnih dana.

No pamćenje nije savršeno fotografsko bilježenje. Svako dohvaćanje sjećanja je istovremeno i njegovo rekonstruiranje. Sjećanja se mogu mijenjati, blijediti, pa čak i stvoriti potpuno lažna sjećanja kroz proces zvan misinformacijski efekt. Eksperimenti psihologa Elizabeth Loftus pokazali su da je relativno lako kod ispitanika stvoriti sjećanja na događaje koji se nisu dogodili. Ovo ima ozbiljne implikacije za pravosuđe, gdje svjedočenja očevidaca igraju važnu ulogu.

Suvremena istraživanja također otkrivaju mogućnosti utjecanja na pamćenje. Tehnike poput vježbi pažljivog dohvaćanja, ponavljanja u razmacima, te kombiniranja različitih osjetilnih kanala mogu značajno poboljšati učinkovitost učenja. Studenti koji koriste ove tehnike pokazuju bolje rezultate od onih koji se oslanjaju na pasivno čitanje.

Razumijevanje neuroznanstvenih osnova pamćenja ne mijenja samo način na koji vidimo same sebe — ono otvara puteve za nove tretmane bolesti poput Alzheimera, demencije i posttraumatskog stresnog poremećaja. U sljedećih dvadeset godina vjerojatno ćemo vidjeti revolucionarne pristupe u liječenju ovih stanja, oslonjene na duboko razumijevanje kako sjećanja nastaju i nestaju.\`,
    keyIdeas: [
      \`Pamćenje nije jedinstven sustav — različite vrste imaju različite mehanizme\`,
      \`Hipokampus je ključan za prijenos kratkoročnih u dugoročna sjećanja, ne za njihovo skladištenje\`,
      \`Konsolidacija sjećanja traje dane do godine, kroz dugoročnu potencijaciju sinapsi\`,
      \`San igra ključnu ulogu u konsolidaciji; emocije pojačavaju pamćenje preko amigdale\`,
      \`Sjećanja se rekonstruiraju pri svakom dohvaćanju i mogu biti lažna\`
    ],
    modelSummary: \`Tekst objašnjava neuroznanstvene mehanizme pamćenja. Mozak ne koristi jedinstven sustav — kratkoročno pamćenje oslanja se na električnu aktivnost u prefrontalnom korteksu, dok se dugoročno pohranjuje kroz strukturne promjene u sinapsama. Ključnu ulogu u prijenosu kratkoročnih u dugoročna sjećanja igra hipokampus, koji nije skladište nego konsolidator informacija. Slučajevi pacijenata s oštećenjem hipokampusa pokazali su tu razliku. Konsolidacija traje dane do godine kroz mehanizam dugoročne potencijacije — sinapse koje su bile aktivne jačaju se ponavljanim aktiviranjem. San, posebno duboki i REM faza, ključan je za konsolidaciju jer mozak ponovno aktivira dnevne neuralne obrasce. Emocionalne sjećanja, putem amigdale, pohranjuju se intenzivnije. Pamćenje nije savršeno bilježenje — svako dohvaćanje je rekonstrukcija, što omogućuje stvaranje lažnih sjećanja. Eksperimenti Elizabeth Loftus to su potvrdili, s implikacijama za pravosuđe. Suvremene tehnike (pažljivo dohvaćanje, ponavljanje u razmacima) poboljšavaju učenje. Razumijevanje pamćenja otvara puteve za liječenje Alzheimera, demencije i PTSP-a.\`
  },
  
  {
    id: 'znan02',
    type: 'znan',
    title: \`Ekološka uloga šuma u doba klimatskih promjena\`,
    author: \`dr. sc. Tomislav Marković\`,
    context: \`Popularno-znanstveni tekst iz ekologije (~660 riječi)\`,
    originalText: \`Šume pokrivaju oko trideset posto kopnene površine planeta i predstavljaju jedan od najvažnijih sustava regulacije zemljine klime. Posljednjih desetljeća, kako se ubrzava klimatska kriza, znanstveni interes za detaljno razumijevanje uloge šuma snažno raste. Ono što su prije možda smatrali stabilnim ekosustavom, sada se pokazuje kao dinamičan i ranjiv sustav s ključnim utjecajem na našu budućnost.

Najpoznatija funkcija šuma je apsorpcija ugljičnog dioksida. Drveće tijekom rasta upija CO2 iz atmosfere kroz proces fotosinteze, pretvarajući ga u biomasu. Procjenjuje se da svjetske šume godišnje apsorbiraju oko sedam milijardi tona CO2, što je otprilike trećina ukupnih ljudskih emisija. Bez ovog prirodnog mehanizma, koncentracije CO2 u atmosferi rasle bi brže, a klimatska kriza bila bi još intenzivnija.

No šume rade puno više od skladištenja ugljika. One reguliraju vodeni ciklus tako što kroz isparavanje s lišća stvaraju oblake, koji potom dovode kišu. Velike šumske mase, poput Amazonskih, generiraju značajnu količinu vlastite kišnice. Smanjenje šumskih površina remeti ove cikluse i može uzrokovati sušu na područjima udaljenima tisuće kilometara od deforestacije.

Šume također stabiliziraju lokalne klime. Pružaju hlad, smanjuju temperature okolnog zraka i tla, te štite tlo od erozije. U urbanim okruženjima, gradovi s više drveća imaju značajno niže ljetne temperature od onih s malo zelenila. Razlika može biti i do deset stupnjeva Celzijusa između središta grada i šumovitih predgrađa.

Bioraznolikost je još jedna ključna funkcija šuma. Iako pokrivaju samo trećinu kopna, šume su dom više od pedeset posto kopnenih vrsta životinja i biljaka. Tropske kišne šume su posebno bogate — neki znanstvenici procjenjuju da hektar amazonskih šuma može sadržavati više vrsta drveća nego cijela Sjeverna Amerika. Gubitak šuma znači nepovratan gubitak biološke raznolikosti.

Klimatska kriza, paradoksalno, ugrožava upravo ovaj sustav koji je ključan za njeno ublažavanje. Toplije i suše uvjete pogoduju šumskim požarima, koji u kratkim razdobljima oslobađaju ogromne količine ugljika koji su šume akumulirale tijekom desetljeća. Veliki požari u Australiji 2019-2020. ili u Kanadi 2023. ilustriraju ovaj problem.

Šume također podliježu i drugim pritiscima. Insekti i bolesti, čije se populacije šire zbog toplijih zima, ubijaju cijele šumske kompleksne. Suša slabi otpor drveća prema napadačima i čini ga ranjivijim. U nekim područjima, kombinacija ovih faktora pretvara šume iz ugljikovih odlagališta u izvore CO2.

Zaštita postojećih šuma i obnova nestalih čine se kao očiti odgovor, ali nisu jednostavni. Pošumljavanje zahtijeva pravilan izbor vrsta koje će preživjeti buduće klimatske uvjete, ne one koje su tu danas. Velike monokulturne plantaže, koje često zamjenjuju izvorne šume, ne pružaju iste ekološke usluge — manje su otporne, manje bioraznolike, i često služe samo kao komercijalni resurs.

Buduća klimatska politika mora prepoznati šume kao kritičnu infrastrukturu, ne samo kao izvor drvene građe. To znači globalne sporazume koji daju ekonomsku vrijednost zaštiti šuma, podršku zemljama koje održavaju velike šumske komplekse, te integraciju šumarstva u sve aspekte planiranja. Bez ozbiljnog pristupa zaštiti šuma, sve druge mjere protiv klimatskih promjena mogu pokazati nedovoljne rezultate.\`,
    keyIdeas: [
      \`Šume pokrivaju 30% kopna i apsorbiraju oko 1/3 ljudskih CO2 emisija\`,
      \`Reguliraju vodeni ciklus kroz stvaranje oblaka i kiše\`,
      \`Stabiliziraju lokalne klime, štite tlo, smanjuju temperature\`,
      \`Dom su za više od 50% kopnenih vrsta\`,
      \`Klimatska kriza ugrožava upravo šume kroz požare, insekte, bolesti\`,
      \`Pošumljavanje mora pravilno birati vrste; monokulture ne mogu zamijeniti izvorne šume\`
    ],
    modelSummary: \`Šume pokrivaju oko trideset posto kopnene površine i ključne su za regulaciju klime. Njihova najpoznatija funkcija je apsorpcija ugljičnog dioksida — godišnje upijaju oko sedam milijardi tona CO2, otprilike trećinu ljudskih emisija. Ali šume čine puno više: reguliraju vodeni ciklus stvarajući oblake i kišu kroz isparavanje, stabiliziraju lokalne klime, smanjuju temperature okolnog zraka i tla, te štite od erozije. Iako pokrivaju samo trećinu kopna, dom su za više od polovice kopnenih vrsta životinja i biljaka. Klimatska kriza paradoksalno ugrožava upravo ovaj sustav koji je ključan za njeno ublažavanje. Toplije i suše uvjete pogoduju šumskim požarima koji oslobađaju desetljećima akumulirani ugljik. Insekti, bolesti i suša dodatno slabe šume, a u nekim područjima ih pretvaraju iz ugljikovih odlagališta u izvore emisija. Pošumljavanje nije jednostavno rješenje — zahtijeva pravilan izbor vrsta otpornih na buduće uvjete, a monokulturne plantaže ne mogu zamijeniti izvorne šume. Buduća klimatska politika mora tretirati šume kao kritičnu infrastrukturu kroz globalne sporazume, ekonomsku valorizaciju zaštite i integraciju šumarstva u planiranje.\`
  },
  
  {
    id: 'knjiz01',
    type: 'knjiz',
    title: \`Krležini „Glembajevi" — odlomak iz I. čina\`,
    author: \`Miroslav Krleža (1928.)\`,
    context: \`Književni odlomak iz drame (~620 riječi)\`,
    originalText: \`Soba u Glembayevoj kući. Stara, teška dubrovačka pohištvo. Ulja na zidovima — portreti Glembayevih predaka kroz tri stoljeća. Težak srebrni svijećnjak na stolu. Kasna jesen, mraz pritiska prozore. Leone Glembay, mladi slikar i sin obitelji, vraća se kući nakon dvadeset godina odsutnosti. U sobi sjedi njegov otac, Stari Glembay, sedamdesetogodišnjak, vlasnik banke i jedan od najbogatijih ljudi u gradu.

Tišina između njih traje minutama. Leone se ne osjeća kao kod kuće. Ova soba u kojoj je odrastao postala mu je strana. Mirisi, namještaj, čak i svjetlost svijeća — sve mu se čini kao da pripada svijetu koji s njim više nema veze.

— „Vratio si se", kaže Stari Glembay. Ne podiže pogled.

— „Vratio sam se", odgovara Leone.

Stari Glembay napokon ga gleda. U njegovim očima Leone vidi nešto što nije znao prepoznati prije dvadeset godina — ledeni mir čovjeka koji je davno prestao očekivati bilo što od svijeta. Otac je ostarjeo, ali na način koji nije slabljenje. Stoji uspravan, oštar, s autoritetom koji ne treba glas da se osjeti.

— „Zašto si došao?", pita Stari Glembay.

Pitanje je izgovoreno kao formalnost, ne kao stvarno zanimanje. Leone osjeća da otac točno zna zašto je došao. Nije mu trebalo dvadeset godina odsutnosti da bi to skrio.

— „Trebamo razgovarati. O majci."

Tišina koja slijedi je drugačija od one ranije. Sada nije neugodna — ona je prijetnja. Stari Glembay se postupno okreće prema portretu na zidu, najvećem u sobi. Slika prikazuje Leoneovu majku, Glembayevu suprugu, kakva je bila prije svoje smrti pred dvadeset godina. Mlado lice, otvoreno, s očima koje su uvijek znale ono što druge oči nisu vidjele.

— „Tvoja majka je mrtva", kaže Stari Glembay. „Već dvadeset godina. Nema više ničega o čemu bi se moglo razgovarati."

— „Znam kako je umrla", odgovara Leone tiho.

Stari Glembay se ne okreće. Gleda i dalje portret. Njegova ruka, položena na naslon stolice, postupno se steže. Leone vidi to. Vidi i odlučnost s kojom otac pokušava ne pokazati da ga je ubola jedna kratka rečenica.

— „Tko ti je rekao?", pita Stari Glembay.

— „Saznao sam. Pitao sam. Vremena prolaze, ljudi govore, papiri ostaju. Dvadeset godina je dosta dugo razdoblje za istinu da se podigne na površinu."

Stari Glembay se sada okreće. U njegovim očima Leone čita ono što je očekivao i što ga istovremeno užasava — nije bilo iznenađenja. Njegov otac je znao da će ovaj razgovor jednoga dana doći. Možda je čak i čekao.

— „I sada si došao", kaže Stari Glembay polako, „da kažeš mrtvom čovjeku ono što već dvadeset godina nosi sa sobom?"

— „Nisam došao da ti kažem", odgovara Leone. „Došao sam da te pitam zašto."

Tišina. Mraz pritisne jače, kao da je sama soba postala dio razgovora. Leone čeka. Njegovo cijelo dvadesetogodišnje odsutnosti svedeno je na ovaj jedan trenutak.

— „Jesi li siguran da želiš odgovor?", pita Stari Glembay napokon.

Leone ga gleda. Kroz njega prolazi cijela povijest obitelji — sva nasljedstva moći, novca, izdaje, šutnje. Kroz njega prolazi i sjećanje na majku, koja je umrla kao žrtva nečega što nikad nije razumjela.

— „Da", kaže Leone. „Želim odgovor."\`,
    keyIdeas: [
      \`Leone Glembay vraća se kući nakon 20 godina odsutnosti\`,
      \`Suočava se s ostarjelim, hladnim ocem u tipičnoj baroknoj sobi\`,
      \`Sukob se gradi oko smrti Leoneove majke prije 20 godina\`,
      \`Otac priznaje implicite da nešto skriva — nije bio iznenađen pitanjem\`,
      \`Odlomak završava trenutkom prije eksplicitnog otkrivanja istine\`
    ],
    modelSummary: \`Odlomak iz prvog čina Krležinih „Glembajevih" prikazuje napetost između Leonea Glembaya, mladog slikara, i njegovog ostarjelog oca, Starog Glembaya. Leone se vraća kući u staru bogatu sobu nakon dvadeset godina odsutnosti, suočavajući se s ocem kojeg jedva poznaje. Razgovor počinje formalno i hladno, ali postupno postaje sve napetiji. Leone otkriva da je došao razgovarati o smrti svoje majke koja se dogodila prije dvadeset godina. Otac inicijalno odbija razgovor — tvrdi da nema više što reći. Leone, međutim, otkriva da zna više nego što se očekivalo. Ključni trenutak nastaje kad otac priznaje implicite da je čekao ovaj razgovor. To otkriva da nešto skriva o smrti svoje žene. Atmosfera je zgusnuta — barokna soba s portretima predaka, mraz koji pritisne, dugi tišini koji su dijelom dijaloga koliko i izgovorene riječi. Leone na kraju pita oca direktno zašto, čime se otvara dramska kulminacija. Krleža gradi sukob bez velikih riječi, kroz kontroliranu napetost i implicitne signale koji nose više težine od eksplicitnih izjava.\`
  },
  
  {
    id: 'knjiz02',
    type: 'knjiz',
    title: \`Šenoa „Zlatarovo zlato" — odlomak\`,
    author: \`August Šenoa (1871.)\`,
    context: \`Književni odlomak iz povijesnog romana (~600 riječi)\`,
    originalText: \`Bilo je proljeće 1574. godine kad je Pavao Gregorijanec stigao na Gradec. Sunce je bilo blago iznad gornjogradskih krovova, a vjetar je nosio miris cvjetnih krošanja iz vrtova oko Sv. Marka. Pavao je, ostavljajući konja u dvorištu, krenuo prema staroj zlatarnici Krupića. Već je tjednima razmišljao o ovom posjetu, ali tek je sad uspio prikupiti hrabrost da kroči kroz vrata.

Stari Krupić, zlatar najuglednijeg roda u gradu, primio ga je s onim mirnim dostojanstvom kojim su građani Gradca poznati. Dora, njegova kćer, sjedila je za malim stolom u kutu, vezući. Nije podigla pogled kad je Pavao ušao, ali Pavao je vidio kako joj se ramena lagano napinju, kao da je osjetila njegov dolazak prije nego što ga je čula.

— „Plemeniti gospodaru Pavle", reče Krupić, klanjajući se s onom suzdržanošću koja kazuje obje stvari odjednom: i poštovanje prema gostu, i jasno definiranu razliku između staleža. „Što vas dovodi u našu skromnu radionicu?"

Pavao je oklijevao. Sve što je htio reći iznenada mu se činilo neizgovorivo u ovoj sobi prepunoj mirisa zlata, srebrne politire i tihog rada. Kako reći ocu zlatara, koji svojim rukama gradi ono najljepše na svijetu, da je njegova kći ono najljepše što je ikad vidio?

— „Dolazim", reče napokon Pavao, „radi narudžbe."

Krupić je kimnuo glavom. „Sjedite, gospodaru. Što biste željeli?"

Pavao je sjeo. Pokušao je ne gledati Doru, ali pogled mu je ipak skliznuo prema kutu sobe. Ona je i dalje vezila, glave nagnute nad rad. Ali u trenutku kad su mu se oči zaustavile na njoj, podigla je pogled. Pogled im se sreo na djelić sekunde. Pavao je osjetio kako mu se srce stegnulo u grudima.

— „Prsten", reče Pavao, vraćajući pogled na Krupića. „Zlatni prsten. Za moju majku."

Krupić je kimnuo, vadeći papir i olovku. „Kakav prsten, gospodaru? Imate li ideju?"

Pavao je počeo opisivati prsten kakav je zamišljao — jednostavan, s jednim malim rubinom, urezana s obje strane. Ali dok je govorio, vidio je da Dora u kutu nije više vezila. Slušala je. I nešto u njegovom glasu, ili u njegovim riječima, ili možda jednostavno u činjenici da je on sjedio u njihovoj radionici, izazvalo je u njoj reakciju koju je Pavao mogao samo nagađati.

Krupić je marljivo bilježio. Kad je Pavao završio, stari zlatar je rekao: „Bit će gotov za tri tjedna, gospodaru. Cijena..."

Pavao je odmahnuo rukom. „Cijena nije problem. Samo neka bude lijep. Najljepši što možete napraviti."

Stari Krupić je pogledao gosta. U njegovim očima Pavao je vidio nešto što je iznenadilo i njega — ne čuđenje, ne nevjericu, nego nešto što je sličilo na suosjećanje. Krupić je razumio. Možda je razumio prije nego što je Pavao i sam u potpunosti razumio.

— „Bit će lijep, gospodaru", reče Krupić tiho.

Pavao je ustao. Posljednji put pogledao je prema Dori. Ona je sada gledala ravno u njega. Njezine oči, plave i duboke, govorile su ono što njihovi staleži nisu dopuštali izgovoriti glasom. Pavao je kimnuo lagano i napustio radionicu, znajući da je nešto nepovratno započelo.\`,
    keyIdeas: [
      \`Pavao Gregorijanec, plemić, posjećuje zlatarnicu Krupića na Gradcu 1574.\`,
      \`Atmosfera je proljetna, gradska, prepunirana mirisima i tišinom\`,
      \`Pavao je očito zaljubljen u Doru, Krupićevu kćer, ali staleška razlika onemogućuje izravno priznanje\`,
      \`Naručuje prsten kao izgovor za posjet\`,
      \`Stari Krupić shvaća situaciju, ali ostaje suzdržan; Dorin pogled na kraju je tihi pristanak\`
    ],
    modelSummary: \`Odlomak iz Šenoinog romana smješta se u Gradec 1574. godine. Pavao Gregorijanec, mladi plemić, posjećuje zlatarnicu Krupića pod izgovorom da naručuje prsten za majku. Stvarni razlog dolaska je Krupićeva kći Dora, koju potajno voli, ali staleška razlika onemogućuje izravno priznanje. Razgovor između Pavla i starog Krupića ostaje formalni, ali napet — ispod riječi pulsira nešto što nitko ne izgovara naglas. Dora cijelo vrijeme veže u kutu, ne gledajući prema Pavlu, no Pavao osjeća da i ona registrira njegovu prisutnost. Kad je njihov pogled na kratko se sreo, atmosfera se zgušnjuje. Pavao naručuje prsten — jednostavan, s rubinom — i daje stari Krupiću nehinjeno do znanja da cijena nije važna, samo kvaliteta. Krupić ovo razumije; u njegovim očima Pavao vidi suosjećanje, što mu otkriva da je stari zlatar shvatio pravu narav posjeta. Pri odlasku, Pavao posljednji put pogleda Doru. Ovaj put ona ga gleda izravno — njezine oči izražavaju ono što staleška pravila ne dopuštaju riječima. Odlomak završava trenutkom u kojem Pavao zna da je nešto započelo, nešto nepovratno.\`
  },

];

// WORKSPACE STATE
const SUM_STORAGE_PREFIX = 'mt.hrv.h28.sum_';
const SUM_TIMER_KEY = 'mt.hrv.h28.timer';
const SUM_CURRENT_KEY = 'mt.hrv.h28.current_text';

let sumState = {
  currentTextId: null,
  showOriginal: true,
  timerActive: false,
  timerStart: null,
  timerDuration: 3600,
  timerInterval: null,
  autoSaveInterval: null,
  plagiarismCheck: null,
  objectivityCheck: null
};

function sumInit(){
  const wrap = document.getElementById('sum-wrap');
  if(!wrap) return;
  
  try {
    const last = localStorage.getItem(SUM_CURRENT_KEY);
    if(last && SUMMARY_TEXTS.find(t => t.id === last)){
      sumState.currentTextId = last;
      sumRenderWorkspace(last);
      return;
    }
  } catch(e){}
  
  sumRenderTextBrowser();
}

function sumRenderTextBrowser(){
  const wrap = document.getElementById('sum-wrap');
  if(!wrap) return;
  
  const esej = SUMMARY_TEXTS.filter(t => t.type === 'esej');
  const novin = SUMMARY_TEXTS.filter(t => t.type === 'novin');
  const znan = SUMMARY_TEXTS.filter(t => t.type === 'znan');
  const knjiz = SUMMARY_TEXTS.filter(t => t.type === 'knjiz');
  
  const inProgress = sumGetInProgress();
  
  let html = \`
    <div class="sum-browser">
      <div class="sum-intro">
        <div class="sum-intro-icon">📝</div>
        <div class="sum-intro-title">Sažetak Workspace</div>
        <div class="sum-intro-sub">10 polaznih tekstova · Plagijat detektor · Objektivnost check · Auto-save</div>
      </div>
  \`;
  
  if(inProgress.length > 0){
    html += \`
      <div class="sum-section">
        <div class="sum-section-title">📂 U radu (\${inProgress.length})</div>
        <div class="sum-grid">
          \${inProgress.map(p => {
            const text = SUMMARY_TEXTS.find(t => t.id === p.id);
            if(!text) return '';
            return \`
              <div class="sum-card sum-card-progress" onclick="sumOpenText('\${text.id}')">
                <div class="sum-card-pill sum-pill-\${text.type}">\${sumTypeLabel(text.type)}</div>
                <div class="sum-card-title">\${text.title}</div>
                <div class="sum-card-meta">📝 <strong>\${p.wordCount}</strong> riječi · <span style="color:var(--blue)">\${p.statusLabel}</span></div>
              </div>
            \`;
          }).join('')}
        </div>
      </div>
    \`;
  }
  
  function renderSection(label, icon, items){
    if(items.length === 0) return '';
    return \`
      <div class="sum-section">
        <div class="sum-section-title">\${icon} \${label} (\${items.length})</div>
        <div class="sum-grid">
          \${items.map(t => \`
            <div class="sum-card" onclick="sumOpenText('\${t.id}')">
              <div class="sum-card-pill sum-pill-\${t.type}">\${sumTypeLabel(t.type)}</div>
              <div class="sum-card-title">\${t.title}</div>
              <div class="sum-card-author">\${t.author}</div>
              <div class="sum-card-meta">\${t.context} · ▶ Klikni</div>
            </div>
          \`).join('')}
        </div>
      </div>
    \`;
  }
  
  html += renderSection('Esejistički tekstovi', '📚', esej);
  html += renderSection('Novinski tekstovi', '📰', novin);
  html += renderSection('Znanstveno-popularni', '🔬', znan);
  html += renderSection('Književni odlomci', '📖', knjiz);
  
  html += \`</div>\`;
  wrap.innerHTML = html;
}

function sumTypeLabel(type){
  const labels = {esej: '📚 ESEJ', novin: '📰 NOVIN', znan: '🔬 ZNAN', knjiz: '📖 KNJIŽ'};
  return labels[type] || type;
}

function sumGetInProgress(){
  const inProgress = [];
  try {
    for(let i = 0; i < localStorage.length; i++){
      const key = localStorage.key(i);
      if(key && key.startsWith(SUM_STORAGE_PREFIX)){
        const id = key.replace(SUM_STORAGE_PREFIX, '');
        const data = localStorage.getItem(key);
        if(data){
          try {
            const parsed = JSON.parse(data);
            if(parsed.text && parsed.text.trim().length > 0){
              const wc = sumCountWords(parsed.text);
              const status = wc < 150 ? \`\${150-wc}r premalo\` : (wc > 200 ? \`+\${wc-200}r previše\` : '✓ idealno');
              inProgress.push({id, wordCount: wc, statusLabel: status});
            }
          } catch(e){}
        }
      }
    }
  } catch(e){}
  return inProgress;
}

function sumOpenText(textId){
  sumState.currentTextId = textId;
  try { localStorage.setItem(SUM_CURRENT_KEY, textId); } catch(e){}
  sumRenderWorkspace(textId);
}

function sumCountWords(text){
  if(!text || !text.trim()) return 0;
  return text.trim().split(/\\s+/).filter(w => w.length > 0).length;
}

function sumRenderWorkspace(textId){
  const wrap = document.getElementById('sum-wrap');
  if(!wrap) return;
  
  const text = SUMMARY_TEXTS.find(t => t.id === textId);
  if(!text){
    sumRenderTextBrowser();
    return;
  }
  
  let savedText = '';
  try {
    const saved = localStorage.getItem(SUM_STORAGE_PREFIX + textId);
    if(saved){
      const parsed = JSON.parse(saved);
      savedText = parsed.text || '';
    }
  } catch(e){}
  
  const origWordCount = sumCountWords(text.originalText);
  
  wrap.innerHTML = \`
    <div class="sum-editor">
      <div class="sum-editor-header">
        <button type="button" class="nb-btn" onclick="sumBackToBrowser()">← Sve teme</button>
        <div class="sum-editor-title">
          <span class="sum-editor-pill sum-pill-\${text.type}">\${sumTypeLabel(text.type)}</span>
          \${text.title}
        </div>
        <div class="sum-mobile-toggle">
          <button type="button" class="sum-toggle-btn \${sumState.showOriginal ? 'active' : ''}" onclick="sumToggleView('orig')">📜 Original</button>
          <button type="button" class="sum-toggle-btn \${!sumState.showOriginal ? 'active' : ''}" onclick="sumToggleView('sum')">📝 Sažetak</button>
        </div>
      </div>
      
      <div class="sum-split-grid">
        
        <div class="sum-original-pane \${sumState.showOriginal ? 'visible' : 'hidden-mobile'}">
          <div class="sum-pane-header">
            <div class="sum-pane-label">📜 POLAZNI TEKST</div>
            <div class="sum-pane-meta">\${origWordCount} riječi · \${text.author}</div>
          </div>
          <div class="sum-original-text" id="sum-orig-text">
            \${text.originalText.split('\\n\\n').map((p, i) => 
              \`<p class="sum-orig-paragraph" data-para="\${i}">\${p}</p>\`
            ).join('')}
          </div>
        </div>
        
        <div class="sum-summary-pane \${!sumState.showOriginal ? 'visible' : 'hidden-mobile'}">
          <div class="sum-pane-header">
            <div class="sum-pane-label">📝 TVOJ SAŽETAK</div>
            <div class="sum-pane-meta" id="sum-comp-meta">Cilj: 150-200 riječi (~\${Math.round(origWordCount * 0.20)}r)</div>
          </div>
          
          <textarea 
            id="sum-textarea" 
            class="sum-textarea" 
            placeholder="Počni pisati svoj sažetak ovdje (150-200 riječi)..."
            oninput="sumOnInput()"
            onkeydown="sumOnKeydown(event)"
          >\${savedText.replace(/</g, '&lt;')}</textarea>
          
          <div class="sum-counters">
            <div class="sum-counter">
              <span class="sum-counter-num" id="sum-counter-num">0</span>
              <span class="sum-counter-target">/ 150-200 riječi</span>
            </div>
            <div class="sum-counter sum-counter-comp">
              Kompresija: <span id="sum-comp-num">0%</span>
            </div>
            <div class="sum-savestatus" id="sum-savestatus">Auto-save aktivan</div>
          </div>
          
          <div class="sum-counter-bar">
            <div class="sum-counter-bar-fill" id="sum-counter-bar-fill"></div>
          </div>
          
          <div class="sum-checks">
            <div class="sum-check sum-check-plagiarism" id="sum-plag-box">
              <div class="sum-check-header">
                <span class="sum-check-icon">🚨</span>
                <span class="sum-check-label">Plagijat detektor</span>
                <span class="sum-check-status" id="sum-plag-status">—</span>
              </div>
              <div class="sum-check-body" id="sum-plag-body">Počni pisati za provjeru.</div>
            </div>
            
            <div class="sum-check sum-check-objectivity" id="sum-obj-box">
              <div class="sum-check-header">
                <span class="sum-check-icon">⚖️</span>
                <span class="sum-check-label">Objektivnost</span>
                <span class="sum-check-status" id="sum-obj-status">—</span>
              </div>
              <div class="sum-check-body" id="sum-obj-body">Počni pisati za provjeru.</div>
            </div>
          </div>
          
          <div class="sum-actions">
            <button type="button" class="nb-btn" onclick="sumManualSave()">💾 Spremi</button>
            <button type="button" class="nb-btn" onclick="sumClearSummary()">🗑 Briši</button>
            <button type="button" class="nb-btn" onclick="sumShowModel()">📜 Modelni sažetak</button>
            <button type="button" class="nb-btn primary" onclick="sw(6)">✓ Provjeri →</button>
          </div>
          
          <div class="sum-timer-row">
            <span class="sum-timer-label">⏱ Timer (1h):</span>
            <span class="sum-timer-display" id="sum-timer-display">00:00</span>
            <button type="button" class="sum-timer-btn" id="sum-timer-toggle" onclick="sumToggleTimer()">▶ Start</button>
          </div>
        </div>
        
      </div>
    </div>
    
    <div id="sum-modal-modal" class="sum-modal" style="display:none">
      <div class="sum-modal-content">
        <div class="sum-modal-header">
          <div class="sum-modal-title">📜 Modelni sažetak</div>
          <button type="button" class="sum-modal-close" onclick="sumCloseModel()">✕</button>
        </div>
        <div class="sum-modal-body">
          <div class="sum-modal-meta">Sažetak ocijenjen ocjenom 5 — usporedi sa svojim radom.</div>
          <div class="sum-modal-text" id="sum-modal-text-content"></div>
          <div class="sum-modal-keyideas">
            <div class="sum-modal-keyideas-title">🎯 Ključne ideje koje su trebale ući:</div>
            <ul id="sum-modal-keyideas-list"></ul>
          </div>
        </div>
      </div>
    </div>
  \`;
  
  setTimeout(() => {
    sumUpdateAll();
    sumStartAutoSave();
    sumLoadTimer();
  }, 50);
}

function sumToggleView(which){
  sumState.showOriginal = (which === 'orig');
  sumRenderWorkspace(sumState.currentTextId);
}

function sumBackToBrowser(){
  if(sumState.timerInterval){ clearInterval(sumState.timerInterval); sumState.timerInterval = null; }
  if(sumState.autoSaveInterval){ clearInterval(sumState.autoSaveInterval); sumState.autoSaveInterval = null; }
  try { localStorage.removeItem(SUM_CURRENT_KEY); } catch(e){}
  sumState.currentTextId = null;
  sumRenderTextBrowser();
}

function sumOnInput(){
  sumUpdateAll();
}

function sumOnKeydown(e){
  if((e.ctrlKey || e.metaKey) && e.key === 's'){
    e.preventDefault();
    sumManualSave();
  }
}

function sumUpdateAll(){
  const ta = document.getElementById('sum-textarea');
  if(!ta) return;
  const text = ta.value;
  const wc = sumCountWords(text);
  
  // Counter
  const numEl = document.getElementById('sum-counter-num');
  const fillEl = document.getElementById('sum-counter-bar-fill');
  if(numEl) numEl.textContent = wc;
  
  let color, fillPct;
  if(wc < 150){
    color = 'var(--red)';
    fillPct = (wc / 150) * 70;
  } else if(wc <= 200){
    color = 'var(--green)';
    fillPct = 70 + ((wc - 150) / 50) * 30;
  } else {
    color = 'var(--gold)';
    fillPct = 100;
  }
  if(numEl) numEl.style.color = color;
  if(fillEl){
    fillEl.style.width = Math.min(100, fillPct) + '%';
    fillEl.style.background = color;
  }
  
  // Compression
  const text_obj = SUMMARY_TEXTS.find(t => t.id === sumState.currentTextId);
  if(text_obj){
    const origWc = sumCountWords(text_obj.originalText);
    const comp = origWc > 0 ? Math.round((wc / origWc) * 100) : 0;
    const compEl = document.getElementById('sum-comp-num');
    if(compEl){
      compEl.textContent = comp + '%';
      let compColor;
      if(comp < 10) compColor = 'var(--red)';
      else if(comp <= 25) compColor = 'var(--green)';
      else if(comp <= 35) compColor = 'var(--gold)';
      else compColor = 'var(--red)';
      compEl.style.color = compColor;
    }
  }
  
  // Run plagiarism + objectivity checks (debounced via direct call here)
  sumRunPlagiarismCheck(text);
  sumRunObjectivityCheck(text);
}

// PLAGIARISM DETECTOR
function sumTokenize(text){
  return text.toLowerCase()
    .replace(/[.,;:!?„"()\\[\\]\\u201E\\u201C\\u201D]/g, ' ')
    .split(/\\s+/)
    .filter(w => w.length > 0);
}

function sumGetNgrams(words, n){
  const ngrams = new Set();
  for(let i = 0; i <= words.length - n; i++){
    ngrams.add(words.slice(i, i + n).join(' '));
  }
  return ngrams;
}

function sumRunPlagiarismCheck(summaryText){
  const text_obj = SUMMARY_TEXTS.find(t => t.id === sumState.currentTextId);
  if(!text_obj || summaryText.trim().length < 30){
    const statusEl = document.getElementById('sum-plag-status');
    const bodyEl = document.getElementById('sum-plag-body');
    const boxEl = document.getElementById('sum-plag-box');
    if(statusEl) statusEl.textContent = '—';
    if(bodyEl) bodyEl.textContent = 'Napiši barem 30 znakova za provjeru.';
    if(boxEl) boxEl.className = 'sum-check sum-check-plagiarism';
    return;
  }
  
  const origWords = sumTokenize(text_obj.originalText);
  const sumWords = sumTokenize(summaryText);
  
  // Find 5+ word matches
  const N = 5;
  const origNgrams = sumGetNgrams(origWords, N);
  const matches = [];
  
  for(let i = 0; i <= sumWords.length - N; i++){
    const ngram = sumWords.slice(i, i + N).join(' ');
    if(origNgrams.has(ngram)){
      // Try to extend
      let extended = N;
      while(i + extended < sumWords.length){
        const longer = sumWords.slice(i, i + extended + 1).join(' ');
        const longerOrigNgrams = sumGetNgrams(origWords, extended + 1);
        if(longerOrigNgrams.has(longer)){
          extended++;
        } else break;
      }
      matches.push({ngram: sumWords.slice(i, i + extended).join(' '), length: extended, position: i});
      i += extended - 1;
    }
  }
  
  // Calculate % of summary words in matches
  let coveredWords = 0;
  for(const m of matches) coveredWords += m.length;
  const plagPercent = sumWords.length > 0 ? Math.round((coveredWords / sumWords.length) * 100) : 0;
  
  const statusEl = document.getElementById('sum-plag-status');
  const bodyEl = document.getElementById('sum-plag-body');
  const boxEl = document.getElementById('sum-plag-box');
  
  let severity, statusText, msgText;
  if(plagPercent < 5){
    severity = 'safe';
    statusText = \`✓ \${plagPercent}%\`;
    msgText = matches.length === 0 ? \`Nema kopiranih segmenata.\` : \`Sigurno: \${matches.length} kratkih preklapanja, sve u dopuštenim granicama.\`;
  } else if(plagPercent < 15){
    severity = 'warning';
    statusText = \`⚠ \${plagPercent}%\`;
    msgText = \`Detektirano \${matches.length} kopiranih segmenata. Parafraziraj ih svojim riječima.\`;
  } else {
    severity = 'severe';
    statusText = \`🚨 \${plagPercent}%\`;
    msgText = \`Visok plagijat! \${matches.length} segmenta kopirano. Parafraziraj odmah.\`;
  }
  
  if(statusEl) statusEl.textContent = statusText;
  if(boxEl) boxEl.className = 'sum-check sum-check-plagiarism severity-' + severity;
  
  if(bodyEl){
    let bodyHtml = \`<div class="sum-plag-msg">\${msgText}</div>\`;
    if(matches.length > 0 && severity !== 'safe'){
      bodyHtml += \`<div class="sum-plag-segments">\`;
      bodyHtml += matches.slice(0, 5).map(m => 
        \`<div class="sum-plag-seg">„\${m.ngram}" <span class="sum-plag-seg-len">(\${m.length} riječi)</span></div>\`
      ).join('');
      if(matches.length > 5){
        bodyHtml += \`<div class="sum-plag-more">+ još \${matches.length - 5} preklapanja...</div>\`;
      }
      bodyHtml += \`</div>\`;
    }
    bodyEl.innerHTML = bodyHtml;
  }
}

// OBJECTIVITY DETECTOR
const SUBJECTIVE_PATTERNS = [
  {pattern: /\\bmislim\\s+da\\b/gi, label: 'mislim da'},
  {pattern: /\\bsmatram\\s+(?:da|kako)\\b/gi, label: 'smatram da/kako'},
  {pattern: /\\bvjerujem\\s+da\\b/gi, label: 'vjerujem da'},
  {pattern: /\\bdržim\\s+da\\b/gi, label: 'držim da'},
  {pattern: /\\bpo\\s+mom\\s+(?:miš[ljl]jenju|sudu|doživljaju)\\b/gi, label: 'po mom mišljenju'},
  {pattern: /\\bs[lj]a[žg]em\\s+se\\s+s\\b/gi, label: 'slažem se s'},
  {pattern: /\\bne\\s+s[lj]a[žg]em\\s+se\\b/gi, label: 'ne slažem se'},
  {pattern: /\\bautor\\s+je\\s+(?:u\\s+pravu|pogriješio)\\b/gi, label: 'autor je u pravu/pogriješio'},
  {pattern: /\\bzanim[lj]ivo\\s+je\\b/gi, label: 'zanimljivo je'},
  {pattern: /\\b[šs]okantno\\s+je\\b/gi, label: 'šokantno je'},
  {pattern: /\\btu[žg]no\\s+je\\b/gi, label: 'tužno je'},
  {pattern: /\\bna[žg]alost\\b/gi, label: 'nažalost'},
  {pattern: /\\bsre[ćc]om\\b/gi, label: 'srećom'},
  {pattern: /\\bo[ćc]ito\\s+je\\b/gi, label: 'očito je'},
  {pattern: /\\bjasno\\s+je\\s+da\\b/gi, label: 'jasno je da'},
  {pattern: /\\bne\\s+slu[čc]ajno\\b/gi, label: 'ne slučajno'},
  {pattern: /\\bbe[zs]\\s+sumnje\\b/gi, label: 'bez sumnje'},
  {pattern: /\\bnedvojbeno\\b/gi, label: 'nedvojbeno'},
  {pattern: /\\bnaravno\\b/gi, label: 'naravno'},
  {pattern: /\\bsva[ks]\\s+(?:zna|vidi|prepoznaje)\\b/gi, label: 'svatko zna/vidi'},
];

function sumRunObjectivityCheck(summaryText){
  const statusEl = document.getElementById('sum-obj-status');
  const bodyEl = document.getElementById('sum-obj-body');
  const boxEl = document.getElementById('sum-obj-box');
  
  if(!summaryText.trim() || summaryText.length < 30){
    if(statusEl) statusEl.textContent = '—';
    if(bodyEl) bodyEl.textContent = 'Napiši barem 30 znakova za provjeru.';
    if(boxEl) boxEl.className = 'sum-check sum-check-objectivity';
    return;
  }
  
  const found = [];
  for(const {pattern, label} of SUBJECTIVE_PATTERNS){
    const matches = summaryText.match(pattern);
    if(matches) found.push({label, count: matches.length});
  }
  
  let severity, statusText, msgText;
  if(found.length === 0){
    severity = 'safe';
    statusText = '✓ Objektivno';
    msgText = 'Sažetak nema subjektivnih fraza. Odlično.';
  } else if(found.length <= 2){
    severity = 'warning';
    statusText = \`⚠ \${found.length} fraz\${found.length === 1 ? 'a' : 'e'}\`;
    msgText = \`Detektirano subjektivnih fraza:\`;
  } else {
    severity = 'severe';
    statusText = \`🚨 \${found.length} fraza\`;
    msgText = \`Sažetak ima previše subjektivnih izraza:\`;
  }
  
  if(statusEl) statusEl.textContent = statusText;
  if(boxEl) boxEl.className = 'sum-check sum-check-objectivity severity-' + severity;
  
  if(bodyEl){
    let bodyHtml = \`<div class="sum-obj-msg">\${msgText}</div>\`;
    if(found.length > 0){
      bodyHtml += \`<div class="sum-obj-list">\`;
      bodyHtml += found.map(f => 
        \`<div class="sum-obj-item">„\${f.label}"\${f.count > 1 ? \` <span class="sum-obj-count">\${f.count}x</span>\` : ''}</div>\`
      ).join('');
      bodyHtml += \`</div>\`;
    }
    bodyEl.innerHTML = bodyHtml;
  }
}

// AUTO-SAVE
function sumStartAutoSave(){
  if(sumState.autoSaveInterval) clearInterval(sumState.autoSaveInterval);
  sumState.autoSaveInterval = setInterval(() => {
    sumAutoSave();
  }, 5000);
}

function sumAutoSave(){
  if(!sumState.currentTextId) return;
  const ta = document.getElementById('sum-textarea');
  if(!ta) return;
  
  const data = {
    text: ta.value,
    lastSaved: Date.now(),
    wordCount: sumCountWords(ta.value)
  };
  
  try {
    localStorage.setItem(SUM_STORAGE_PREFIX + sumState.currentTextId, JSON.stringify(data));
    const status = document.getElementById('sum-savestatus');
    if(status){
      status.textContent = '✓ ' + new Date().toLocaleTimeString('hr-HR', {hour: '2-digit', minute: '2-digit'});
      status.style.color = 'var(--green)';
    }
  } catch(e){
    const status = document.getElementById('sum-savestatus');
    if(status){
      status.textContent = '⚠ Greška';
      status.style.color = 'var(--red)';
    }
  }
}

function sumManualSave(){
  sumAutoSave();
}

function sumClearSummary(){
  if(!sumState.currentTextId) return;
  if(!confirm('Obrisati sažetak? Ovo se ne može poništiti.')) return;
  try {
    localStorage.removeItem(SUM_STORAGE_PREFIX + sumState.currentTextId);
  } catch(e){}
  const ta = document.getElementById('sum-textarea');
  if(ta) ta.value = '';
  sumUpdateAll();
}

function sumShowModel(){
  const text = SUMMARY_TEXTS.find(t => t.id === sumState.currentTextId);
  if(!text) return;
  
  const modal = document.getElementById('sum-modal-modal');
  const textEl = document.getElementById('sum-modal-text-content');
  const ideasList = document.getElementById('sum-modal-keyideas-list');
  
  if(textEl){
    textEl.textContent = text.modelSummary;
  }
  if(ideasList){
    ideasList.innerHTML = text.keyIdeas.map(i => \`<li>\${i}</li>\`).join('');
  }
  if(modal) modal.style.display = 'flex';
}

function sumCloseModel(){
  const modal = document.getElementById('sum-modal-modal');
  if(modal) modal.style.display = 'none';
}

// TIMER (1h optional)
function sumToggleTimer(){
  if(sumState.timerActive){
    if(sumState.timerInterval){ clearInterval(sumState.timerInterval); sumState.timerInterval = null; }
    sumState.timerActive = false;
    const btn = document.getElementById('sum-timer-toggle');
    if(btn) btn.textContent = '▶ Start';
  } else {
    sumState.timerStart = Date.now();
    sumState.timerActive = true;
    sumState.timerInterval = setInterval(sumTickTimer, 1000);
    const btn = document.getElementById('sum-timer-toggle');
    if(btn) btn.textContent = '⏸ Pauza';
  }
  sumSaveTimerState();
}

function sumTickTimer(){
  if(!sumState.timerActive) return;
  const elapsed = Math.floor((Date.now() - sumState.timerStart) / 1000);
  const remaining = Math.max(0, sumState.timerDuration - elapsed);
  sumUpdateTimerDisplay(remaining);
  
  if(remaining <= 0){
    if(sumState.timerInterval){ clearInterval(sumState.timerInterval); sumState.timerInterval = null; }
    sumState.timerActive = false;
    const btn = document.getElementById('sum-timer-toggle');
    if(btn) btn.textContent = '▶ Start';
    alert('⏰ Vrijeme isteklo! Spremi i pripremi reviziju.');
    sumSaveTimerState();
  }
}

function sumUpdateTimerDisplay(seconds){
  const display = document.getElementById('sum-timer-display');
  if(!display) return;
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');
  display.textContent = \`\${mm}:\${ss}\`;
  
  if(seconds <= 300) display.style.color = 'var(--red)';
  else if(seconds <= 900) display.style.color = 'var(--gold)';
  else display.style.color = 'var(--gold)';
}

function sumSaveTimerState(){
  try {
    const state = {
      duration: sumState.timerDuration,
      start: sumState.timerStart,
      active: sumState.timerActive,
      textId: sumState.currentTextId
    };
    localStorage.setItem(SUM_TIMER_KEY, JSON.stringify(state));
  } catch(e){}
}

function sumLoadTimer(){
  try {
    const stored = localStorage.getItem(SUM_TIMER_KEY);
    if(stored){
      const state = JSON.parse(stored);
      if(state.textId === sumState.currentTextId){
        sumState.timerDuration = state.duration || 3600;
        sumState.timerStart = state.start;
        sumState.timerActive = state.active;
        if(sumState.timerActive){
          sumState.timerInterval = setInterval(sumTickTimer, 1000);
          const btn = document.getElementById('sum-timer-toggle');
          if(btn) btn.textContent = '⏸ Pauza';
          sumTickTimer();
        } else {
          sumUpdateTimerDisplay(sumState.timerDuration);
        }
        return;
      }
    }
  } catch(e){}
  sumUpdateTimerDisplay(sumState.timerDuration);
}

// AUTO-INIT
function sumAutoInit(){
  setTimeout(() => {
    if(typeof sumInit === 'function') sumInit();
  }, 250);
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', sumAutoInit);
} else {
  sumAutoInit();
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
  try { localStorage.setItem('mt.hrv.h28.prog', p); } catch(e){}
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


export default function H28Chapter() {
  return (
    <ChapterWrapper
      chapterId="H28"
      bodyHtml={BODY_HTML}
      stylesCss={STYLES_CSS}
      scriptsJs={SCRIPTS_JS}
    />
  );
}

export const HRV_POGAVLJE_28 = null
