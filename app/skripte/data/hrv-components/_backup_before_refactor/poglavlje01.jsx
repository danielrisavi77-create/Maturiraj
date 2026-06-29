/**
 * H01 — Maturiraj.hr — Hrvatski · H01 · Temelji civilizacije i antika
 * Auto-generated from Maturiraj_Hrvatski_H01.html
 * 
 * Strategy: Hybrid HTML-in-JSX (Strategy C)
 * - Body HTML rendered via dangerouslySetInnerHTML
 * - Inline <style> blocks injected at mount
 * - Inline <script> blocks executed at mount
 * - All onclick/oninput/etc. handlers preserved
 * - SEO via Next.js Metadata API (in page.jsx)
 */
'use client';

import { useEffect, useRef } from 'react';

export const metadata = {
  code: 'H01',
  title: 'Maturiraj.hr — Hrvatski · H01 · Temelji civilizacije i antika',
  description: 'Interaktivna skripta za maturu iz Hrvatskog jezika — Temelji civilizacije, Biblija, Homer, grčka drama, rimska književnost.',
  canonical: 'https://maturiraj.hr/hrvatski/h01',
  ogImage: '',
};

const BODY_HTML = `<!-- SVG tooltip (v3.5) -->
<div class="svg-tt" id="svg-tt" role="tooltip" aria-hidden="true">
  <div class="svg-tt-ttl" id="svg-tt-ttl"></div>
  <div class="svg-tt-txt" id="svg-tt-txt"></div>
</div>

<!-- Back-to-top floating button -->
<button class="btt" id="btt" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Natrag na vrh" title="Natrag na vrh">↑</button>

<!-- Email capture modal -->
<div class="modal-backdrop" id="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title" onclick="if(event.target===this)closeModal()">
  <div class="modal" role="document">
    <button class="modal-close" onclick="closeModal()" aria-label="Zatvori">✕</button>
    <div class="modal-ico" id="modal-ico">📖</div>
    <div class="modal-eye" id="modal-eye">POGLAVLJE U IZRADI</div>
    <div class="modal-title" id="modal-title">H02 · Srednji vijek — uskoro!</div>
    <div class="modal-desc" id="modal-desc">
      Radi se na ovom poglavlju. <strong>Ostavi svoj e-mail</strong> i javit ćemo ti čim izađe. Bez spama, bez newslettera — samo jedan e-mail kad je gotovo.
    </div>
    <div class="modal-preview" id="modal-preview">
      <strong>Sadržaj H02</strong>
      Bašćanska ploča · glagoljica i hrvatski počeci · Marulićeva <em>Judita</em> · Zoranić · Držić · humanizam i renesansa u Hrvatskoj
    </div>
    <div class="modal-msg" id="modal-msg"></div>
    <form class="modal-form" id="modal-form" onsubmit="return submitSignup(event)">
      <input type="email" class="modal-input" id="modal-email" placeholder="tvoj@email.hr" required autocomplete="email" aria-label="Tvoj e-mail">
      <button type="submit" class="modal-submit" id="modal-submit">Javi mi →</button>
    </form>
    <div class="modal-small">Otkaži s jednim klikom. Tvoj e-mail ne dijelimo ni s kim.</div>
  </div>
</div>

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

<div class="sb-hamburger" id="hamburger" onclick="toggleSidebar()" aria-label="Otvori izbornik"><span></span><span></span><span></span></div>
<div class="sb-overlay" id="overlay" onclick="closeSidebar()"></div>

<div class="shell">

<!-- ══ SIDEBAR ══ -->
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
    <span id="sb-footer-pos">01 / 28</span> · <span id="sb-footer-title">temelji i antika</span>
    <br>maturiraj.hr · hrvatski · v2
  </div>
</nav>

<!-- ══ MAIN ══ -->
<main class="main">
<div class="content-wrap">
  <div class="bc">
    <a class="bc-link" href="/">maturiraj.hr</a><span class="bc-sep">/</span>
    <a class="bc-link" href="/skripte/hrv">hrvatski</a><span class="bc-sep">/</span>
    <span class="bc-cur">H01 · Temelji civilizacije i antika</span>
    <span class="bc-sep bc-tab-sep">/</span>
    <span class="bc-tab" id="bc-tab">Teorija</span>
  </div>

  <!-- V3: RESTORE BANNER (unutar content-wrap) -->
  <div class="restore-banner" id="restore-banner">
    <div class="rb-txt">📖 Imaš <strong id="rb-progress-txt">spremljen napredak</strong> iz zadnje sesije</div>
    <div class="rb-actions">
      <button class="rb-btn primary" onclick="restoreProgress()">Nastavi gdje si stao</button>
      <button class="rb-btn secondary" onclick="dismissRestore()">Ispočetka</button>
    </div>
  </div>

  <!-- HERO -->
  <div class="hero">
    <div class="hero-orb-a"></div><div class="hero-orb-b"></div>
    <div class="hero-chapter">H01 &nbsp;·&nbsp; Svjetska književnost &nbsp;·&nbsp; Antika</div>
    <div class="hero-title">Temelji civilizacije<br><span>i antika</span></div>
    <div class="hero-sub">Od Gilgameša i klinastog pisma do Sofoklove Antigone i Vergilijeve Eneide. Sve što moraš znati iz prvog velikog razdoblja — s fokusom na <strong>Antigonu</strong>, ispitno djelo 2025/2026.</div>
    <div class="hero-meta">
      <span class="hchip br">⏱ 60 min</span>
      <span class="hchip go">⭐ Ispitno djelo: Antigona</span>
      <span class="hchip te">▶ H02 srednji vijek</span>
    </div>
    <div class="hero-progress-row">
      <div class="pt"><div class="pb" id="hero-pb" style="width:5%"></div></div>
      <span class="prog-label" id="hero-prog-lbl">5% završeno</span>
    </div>
  </div>

  <!-- ══ SOCIAL PROOF + COUNTDOWN ═════════════════
       Playbook P5.1 + P5.2 — trust + urgency
       Brojevi se renderiraju iz JS-a (vidi renderSocialProof)
  ═══════════════════════════════════════════════════ -->
  <div class="social-proof" id="social-proof" aria-label="Statistika platforme"></div>

  <!-- Countdown se dinamički renderira iz JS-a -->
  <div class="countdown" id="countdown" aria-label="Do mature" style="display:none"></div>

  <!-- TABS -->
  <div class="tabs" role="tablist" aria-label="Dijelovi poglavlja">
    <button class="tab on" onclick="sw(0)" role="tab" aria-selected="true" aria-controls="l0">📖 Teorija</button>
    <button class="tab" onclick="sw(1)" role="tab" aria-selected="false" aria-controls="l1">⭐ Antigona</button>
    <button class="tab" onclick="sw(2)" role="tab" aria-selected="false" aria-controls="l2">✍ Esej alat</button>
    <button class="tab" onclick="sw(3)" role="tab" aria-selected="false" aria-controls="l3">💬 Citatnik</button>
    <button class="tab" onclick="sw(4)" role="tab" aria-selected="false" aria-controls="l4">📚 Pojmovnik</button>
    <button class="tab" onclick="sw(5)" role="tab" aria-selected="false" aria-controls="l5">⚡ Drill<span class="tab-lock">PRO</span></button>
    <button class="tab" onclick="sw(6)" role="tab" aria-selected="false" aria-controls="l6">🧠 Kviz<span class="tab-lock">PRO</span></button>
    <button class="tab" onclick="sw(7)" role="tab" aria-selected="false" aria-controls="l7">✅ Checkpoint<span class="tab-lock">PRO</span></button>
  </div>

  <!-- ════════════════════════
       CONTENT LAYERS — 7 TABS
       ════════════════════════ -->
  <!-- ════════════════════════
       TAB 0 · TEORIJA
       ════════════════════════ -->
  <div class="layer on" id="l0" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">antika</span>
      <span class="pill p-go">ep</span>
      <span class="pill p-t">drama</span>
      <span class="pill p-r">biblija</span>
      <span class="pill p-pa">pismo</span>
    </div>

    <div class="slbl">01 · Zašto uopće ovo učimo</div>

    <div class="box-int">
      <div class="box-int-lbl">📜 Operativni sustav zapadne književnosti</div>
      <div class="box-int-txt">
        Svaka moderna priča — od Netflix serije do Instagram reela — ima korijen <em>ovdje</em>.
        Hybris, katarza, tragedija, junak s greškom, bogovi koji se miješaju u ljudske sudbine.
        <strong>Antika je operativni sustav svih kasnijih priča.</strong> Naučiš ovo — razumiješ sve što dolazi poslije.
      </div>
    </div>

    <div class="box-warn">
      <div class="bw-ico">⚠️</div>
      <div class="bw-body">
        <div class="bw-title">Ispitno djelo 2025/2026</div>
        <div class="bw-txt"><strong>Antigona</strong> je jedno od 6 djela za školski esej. Vjerojatnost da dobiješ baš nju — <strong>~17%</strong>. Plus ulomci iz Ilijade, Odiseje i Biblije često u čitanju književnog teksta.</div>
      </div>
    </div>

    <!-- Soft kontekst hint — playbook P4.2 (soft, informativno, ne agresivno) -->
    <div class="soft-hint">
      <div class="soft-hint-ico">💡</div>
      <div class="soft-hint-body">
        Tema <b>grčka tragedija</b> pojavila se na MAT 2022. i MAT 2024. — <b>dvije od tri zadnje godine</b>.
      </div>
      <a href="/discere?q=antika&ctx=h01_soft_hint" class="soft-hint-link" onclick="track('upsell_click',{ctx:'soft_hint_antika',target:'discere'},'conversion')">Pogledaj u Discere →</a>
    </div>

    <!-- ══ MINI-DIJAGNOSTIKA "Mogu li ovo na maturi?" ══ -->
    <div class="diag" id="diag" data-state="intro">
      <!-- Stanje 1: Intro -->
      <div class="diag-intro">
        <div class="diag-eye">⚡ DIJAGNOSTIKA · 60 SEKUNDI</div>
        <div class="diag-ttl">Mogu li ovo na maturi?</div>
        <div class="diag-desc">5 brzih pitanja iz H01. Saznaj <strong>gdje stojiš prije nego što počneš učiti</strong> — fokusiraj se samo na ono što ti zaista treba.</div>
        <div class="diag-actions">
          <button type="button" class="diag-btn diag-btn-primary" onclick="diagStart()">▶ Pokreni dijagnostiku</button>
          <button type="button" class="diag-btn diag-btn-ghost" onclick="diagSkip()">Preskoči — odmah na sadržaj ↓</button>
        </div>
      </div>

      <!-- Stanje 2: Quiz -->
      <div class="diag-quiz">
        <div class="diag-progress">
          <div class="diag-prog-bar"><div class="diag-prog-fill" id="diag-fill"></div></div>
          <div class="diag-prog-txt">Pitanje <span id="diag-cur">1</span> od 5</div>
        </div>
        <div class="diag-q" id="diag-q"></div>
        <div class="diag-opts" id="diag-opts"></div>
        <div class="diag-skip-row">
          <button type="button" class="diag-skip-q" onclick="diagAnswer(null)">Ne znam — sljedeće</button>
        </div>
      </div>

      <!-- Stanje 3: Rezultat -->
      <div class="diag-result">
        <div class="diag-res-score">
          <div class="diag-res-num"><span id="diag-correct">0</span>/5</div>
          <div class="diag-res-lbl">točnih</div>
        </div>
        <div class="diag-res-msg" id="diag-msg"></div>
        <div class="diag-res-rec" id="diag-rec"></div>
        <div class="diag-actions">
          <button type="button" class="diag-btn diag-btn-primary" onclick="diagDismiss()">✓ Razumijem — počinjem učiti</button>
          <button type="button" class="diag-btn diag-btn-ghost" onclick="diagRestart()">🔁 Ponovi dijagnostiku</button>
        </div>
      </div>
    </div>

    <!-- BODOVI NA MATURI -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · Bodovi na maturi iz Hrvatskog</div><div class="sec-line"></div></div>

    <div class="prose">Ukupno <strong>110 bodova</strong>. Antika se pojavljuje u tri od sedam cjelina — dobro ćeš je znati, više bodova odmah.</div>

    <div class="tbl">
      <table>
        <thead><tr><th>Cjelina</th><th>Bodovi</th><th>%</th><th>Gdje ulazi antika</th></tr></thead>
        <tbody>
          <tr><td><b>Školski esej</b></td><td>30</td><td>27%</td><td>Antigona (ispitno djelo)</td></tr>
          <tr><td><b>Čitanje knjiž. teksta</b></td><td>20</td><td>18%</td><td>Ulomci iz Ilijade, Odiseje, Biblije</td></tr>
          <tr><td>Sažetak</td><td>18</td><td>16%</td><td>—</td></tr>
          <tr><td>Ustroj hrv. jezika</td><td>15</td><td>14%</td><td>—</td></tr>
          <tr><td><b>Teorija i povijest knjiž.</b></td><td>12</td><td>11%</td><td>Pojmovi (hybris, katarza...)</td></tr>
          <tr><td>Čitanje neknj. teksta</td><td>10</td><td>9%</td><td>—</td></tr>
          <tr><td>Primjena ustroja</td><td>5</td><td>5%</td><td>—</td></tr>
        </tbody>
      </table>
    </div>

    <!-- NASTANAK PISMA -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">03 · Nastanak pisma</div><div class="sec-line"></div></div>

    <div class="prose">Prije književnosti — pismo. Prije pisma — usmena predaja. Evo ključnih točaka u 5 datuma.</div>

    <div class="con">
      <div class="cr"><div class="ck br">3200. pr. Kr.</div><div class="cv"><b>Klinasto pismo (Sumer).</b> Prvo pismo u povijesti. Pisano trstikom u glinu. Najprije trgovina, zatim književnost i zakoni.</div></div>
      <div class="cr"><div class="ck go">3000. pr. Kr.</div><div class="cv"><b>Hijeroglifi (Egipat).</b> „Sveto pismo" (hieros + glyphein). Slikovni + fonetski znakovi. Pisano na papirusu.</div></div>
      <div class="cr"><div class="ck pa">2100. pr. Kr.</div><div class="cv"><b>Ep o Gilgamešu.</b> Prvo veliko književno djelo svjetske književnosti. O kralju Uruka, smrti prijatelja, potrazi za besmrtnošću. Sadrži i priču o potopu — stariju od biblijske.</div></div>
      <div class="cr"><div class="ck te">1200. pr. Kr.</div><div class="cv"><b>Feničko pismo.</b> Prvo alfabetsko pismo (1 znak = 1 glas). Baza svih europskih pisama preko Grka i Rimljana.</div></div>
      <div class="cr"><div class="ck br">800. pr. Kr.</div><div class="cv"><b>Homer.</b> <em>Ilijada i Odiseja</em> — na granici usmene i pismene tradicije. Stoljećima se prenosile napamet prije zapisivanja.</div></div>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">💎 Ključna citat — početak književnosti</div>
      <div class="box-key-txt">„<strong>Onaj koji je vidio sve do krajeva zemlje, onaj koji je znao sve i iskusio sve — Gilgameš.</strong>" Tako počinje prva velika knjiga koju je čovječanstvo napisalo.</div>
    </div>

    <!-- BIBLIJA -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">04 · Biblija — knjiga knjiga</div><div class="sec-line"></div></div>

    <div class="prose">Biblija (grč. <em>ta biblia</em> = „knjige") nije jedna knjiga nego <strong>zbirka od 73 knjige</strong> (katolički kanon) nastalih tijekom <strong>više od tisuću godina</strong>. Na maturi — izvor motiva, citata i stilskih obrazaca kroz sva kasnija razdoblja.</div>

    <div class="cmp">
      <div class="cmp-c">
        <div class="cmp-h br">📜 Stari zavjet</div>
        <div style="padding:14px 18px">
          <div style="font-family:var(--mono);font-size:10px;color:var(--t3);margin-bottom:10px">46 knjiga · hebrejski/aramejski · 1200.–100. pr. Kr.</div>
          <ul style="list-style:none;padding:0;font-family:var(--serif);font-size:14px;line-height:1.85;color:var(--t2)">
            <li>▸ <b>Petoknjižje (Tora):</b> Postanak, Izlazak, Brojevi, Levitski zakonik, Ponovljeni zakon</li>
            <li>▸ <b>Povijesne knjige:</b> Jošua, Suci, Samuel, Kraljevi</li>
            <li>▸ <b>Mudrosne:</b> <em>Job, Psalmi, Mudre izreke, Pjesma nad pjesmama</em></li>
            <li>▸ <b>Proročke:</b> Izaija, Jeremija, Ezekiel, Danijel</li>
          </ul>
        </div>
      </div>
      <div class="cmp-c">
        <div class="cmp-h go">✝ Novi zavjet</div>
        <div style="padding:14px 18px">
          <div style="font-family:var(--mono);font-size:10px;color:var(--t3);margin-bottom:10px">27 knjiga · grčki (koine) · 1. st.</div>
          <ul style="list-style:none;padding:0;font-family:var(--serif);font-size:14px;line-height:1.85;color:var(--t2)">
            <li>▸ <b>Evanđelja:</b> Matej, Marko, Luka, Ivan</li>
            <li>▸ <b>Djela apostolska</b></li>
            <li>▸ <b>Poslanice</b> (21, većinom sv. Pavao)</li>
            <li>▸ <b>Otkrivenje (Apokalipsa)</b> — apokaliptička proza</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">🎯 Što tražiti u biblijskom ulomku na čitanju</div>
      <div class="box-signal-txt">
        <strong>Paralelizam</strong> (ponavljanje iste misli drugim riječima) — tipično za psalme.
        <strong>Antiteza</strong> („tko se uzvisi, bit će ponižen").
        <strong>Parabola</strong> — alegorijska priča s moralnom poukom.
        <strong>Motivi:</strong> izgnanstvo, potop, žrtva, spasenje, izdaja, pokora.
      </div>
    </div>

    <!-- GRČKA KNJIŽEVNOST -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">05 · Grčka — gdje sve počinje</div><div class="sec-line"></div></div>

    <div class="prose">Grci su prvi razvili <strong>ep, liriku i dramu</strong> u obliku u kakvom ih danas znamo. Bez njih — nema europske književnosti.</div>

    <div class="slbl">a) Ep — Homer</div>

    <div class="sg">
      <div class="sc">
        <span class="sc-ico si-br">ILIJADA</span>
        <div class="sc-name">24 pjevanja</div>
        <div class="sc-desc">51 dan 10. godine Trojanskog rata. Ahilejev gnjev. Čast, prijateljstvo (Patroklo), smrtnost.</div>
      </div>
      <div class="sc">
        <span class="sc-ico si-go">ODISEJA</span>
        <div class="sc-name">24 pjevanja</div>
        <div class="sc-desc">10 godina Odisejevog povratka iz Troje. Kiklopi, sirene, Kirka, Kalipsa. Arhetip „junačkog putovanja".</div>
      </div>
      <div class="sc">
        <span class="sc-ico si-t">HEKSAMETAR</span>
        <div class="sc-name">Stih epa</div>
        <div class="sc-desc">Šestostopni stih. Standard antičke epike. Preuzima ga i Vergilije, kasnije Marulić u Juditi.</div>
      </div>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">📐 Obilježja Homerovog epa</div>
      <div class="box-key-txt">
        <strong>Invokacija muze</strong> („Srdžbu mi, boginjo, pjevaj…") ·
        <strong>In medias res</strong> (radnja počinje u središtu) ·
        <strong>Homerovski epiteti</strong> („brzonogi Ahilej", „sivooki Atena", „ružoprsta Zora") ·
        <strong>Proširene usporedbe</strong> · <strong>Ponavljanja</strong> (ostatak usmene tradicije).
      </div>
    </div>

    <div class="slbl">b) Lirika — Sapfa, Alkej, Anakreont</div>

    <div class="con">
      <div class="cr"><div class="ck br">Sapfa</div><div class="cv"><b>Lezbos, 7. st. pr. Kr.</b> Najpoznatija grčka pjesnikinja. Pisala o ljubavi, prijateljstvu, ženskoj zajednici. Po njoj — <em>sapfička strofa</em>.</div></div>
      <div class="cr"><div class="ck go">Alkej</div><div class="cv"><b>Lezbos, 7./6. st.</b> Politička, vinska i ratnička lirika. Po njemu — <em>alkejska strofa</em> (preuzeo Horacije).</div></div>
      <div class="cr"><div class="ck pa">Anakreont</div><div class="cv"><b>6. st.</b> Ljubav, vino, gozbe. Po njemu — <em>anakreontika</em> kao stil hedonističke lirike.</div></div>
    </div>

    <div class="slbl">c) Drama — Eshil, Sofoklo, Euripid</div>

    <div class="prose">Rođena iz kulta boga <strong>Dioniza</strong>. U 5. st. pr. Kr. u Ateni godišnja natjecanja tragičara. Troje velikih — osnova sve kasnije drame.</div>

    <div class="cmp" style="grid-template-columns:repeat(3,1fr)">
      <div class="cmp-c">
        <div class="cmp-h br">ESHIL</div>
        <div style="padding:14px 18px;font-family:var(--serif);font-size:13.5px;line-height:1.7;color:var(--t2)">
          525.–456. pr. Kr.<br><b style="color:var(--t1)">„Otac tragedije"</b>. Uveo 2. glumca.<br>
          <em>Okovani Prometej, Orestija.</em>
        </div>
      </div>
      <div class="cmp-c" style="border-color:var(--bd-br);background:var(--dim-br)">
        <div class="cmp-h go">SOFOKLO ⭐</div>
        <div style="padding:14px 18px;font-family:var(--serif);font-size:13.5px;line-height:1.7;color:var(--t2)">
          496.–406. pr. Kr.<br>Uveo 3. glumca.<br>
          <b style="color:var(--gold)">Antigona, Kralj Edip, Elektra.</b><br>
          <em style="color:var(--bronze-l)">Ispitno djelo 2025/2026.</em>
        </div>
      </div>
      <div class="cmp-c">
        <div class="cmp-h te">EURIPID</div>
        <div style="padding:14px 18px;font-family:var(--serif);font-size:13.5px;line-height:1.7;color:var(--t2)">
          480.–406. pr. Kr.<br>Najmoderniji. Psihologija likova, žena.<br>
          <em>Medeja, Bakhe, Hipolit.</em>
        </div>
      </div>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">🏛 Struktura grčke tragedije</div>
      <div class="box-int-txt">
        <strong>Prolog</strong> (uvod) → <strong>Parodos</strong> (prvi ulazak zbora) → <strong>Epizode</strong> (prizori glumaca) izmjenično sa <strong>Stasimima</strong> (pjesme zbora) → <strong>Eksodos</strong> (izlazak zbora).
        <br><br>
        <em>Zbor (kor)</em> je ključan — kolektivni glas koji komentira radnju, savjetuje, moralizira. U Antigoni: zbor tebanskih staraca.
      </div>
    </div>

    <div class="slbl">d) Aristotelovi pojmovi drame</div>

    <div class="con">
      <div class="cr"><div class="ck br">KATARZA</div><div class="cv">Pročišćenje. Publika kroz strah i sažaljenje izlazi iz kazališta moralno obnovljena.</div></div>
      <div class="cr"><div class="ck br">HAMARTIA</div><div class="cv">Tragička krivnja/pogrešan korak. Junak pada zbog <em>vlastite</em> greške, ne slučajno.</div></div>
      <div class="cr"><div class="ck re">HYBRIS</div><div class="cv">Bahata oholost, prekoračenje granica koje postavljaju bogovi. Glavni uzrok tragičkog pada.</div></div>
      <div class="cr"><div class="ck go">PERIPETIJA</div><div class="cv">Nagli obrat u radnji — od sreće prema nesreći (ili obrnuto).</div></div>
      <div class="cr"><div class="ck go">ANAGNORIZIS</div><div class="cv">Prepoznavanje, otkriće istine. Često povezano s peripetijom.</div></div>
      <div class="cr"><div class="ck pa">3 JEDINSTVA</div><div class="cv">Jedinstvo radnje, vremena (24h) i mjesta. Aristotel opisuje, francuski klasicizam čini pravilom.</div></div>
    </div>

    <!-- Frustration hint — playbook P4.3 -->
    <div class="frustration">
      <div class="fr-ico">🤔</div>
      <div class="fr-body">Zbunjuju te <b>katarza, hamartia, hybris</b>? AI profesor ih objasni kroz konkretne scene iz Antigone — tvojim riječima.</div>
      <a href="/ai-profesor?ctx=h01_aristotel" class="fr-cta" onclick="track('upsell_click',{ctx:'frustration_aristotel',target:'ai_profesor'},'conversion')">Pitaj AI →</a>
    </div>

    <!-- RIMSKA KNJIŽEVNOST -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">06 · Rim — graditelj na grčkim temeljima</div><div class="sec-line"></div></div>

    <div class="prose">Rim u 3. st. pr. Kr. preuzima grčke obrasce i gradi vlastitu književnost. <strong>Trojka koja oblikuje sljedećih 2000 godina europske književnosti:</strong></div>

    <div class="sg">
      <div class="sc">
        <span class="sc-ico si-br">VERGILIJE</span>
        <div class="sc-name">Eneida</div>
        <div class="sc-desc">Rimski nacionalni ep. 12 pjevanja. Heksametar. Dante ga uzima za vodiča kroz <em>Pakao</em>.</div>
      </div>
      <div class="sc">
        <span class="sc-ico si-go">HORACIJE</span>
        <div class="sc-name">Ode, Ars poetica</div>
        <div class="sc-desc">Lirski pjesnik + poetika. „Delectare et prodesse" (zabaviti i poučiti). Izvor citata „Carpe diem".</div>
      </div>
      <div class="sc">
        <span class="sc-ico si-t">OVIDIJE</span>
        <div class="sc-name">Metamorfoze</div>
        <div class="sc-desc">~250 mitoloških preobrazbi u 15 knjiga. Dafne u lovor, Narcis u cvijet. Izvor motiva za cijelu Europu.</div>
      </div>
    </div>

    <div class="box-tip">
      <div class="bt-ico">💡</div>
      <div class="bt-body">
        <div class="bt-title">Povezivanje za esej</div>
        <div class="bt-txt">Rimska antika je <strong>obavezna referenca</strong> kad pišeš o epu, lirici ili mitologiji. Bez poznavanja Eneide ne razumiješ kasnije epove: Marulićevu <em>Juditu</em>, Gundulićevog <em>Osmana</em>, Mažuranićevu <em>Smrt Smail-age Čengića</em>.</div>
      </div>
    </div>

    <!-- AUTHORITY BOX — link na službeni NCVVO katalog (v3.6) -->
    <div class="auth-box">
      <div class="auth-ico">🇭🇷</div>
      <div class="auth-body">
        <div class="auth-ttl">Usklađeno s NCVVO ispitnim katalogom</div>
        <div class="auth-txt">Sadržaj ove skripte prati službeni <strong>Ispitni katalog za državnu maturu — Hrvatski jezik</strong> koji izdaje Nacionalni centar za vanjsko vrednovanje obrazovanja.</div>
        <div class="auth-links">
          <a href="https://www.ncvvo.hr/ispitni-katalozi-za-drzavnu-maturu-2025-2026/" target="_blank" rel="noopener noreferrer" class="auth-link" onclick="track('ext_link_click',{target:'ncvvo_katalozi'},'engagement')">
            Svi katalozi 2025/2026 →
          </a>
          <a href="https://www.ncvvo.hr/wp-content/uploads/2025/09/HRV-2026.pdf" target="_blank" rel="noopener noreferrer" class="auth-link" onclick="track('ext_link_click',{target:'ncvvo_hrv_pdf'},'engagement')">
            Hrvatski jezik · PDF →
          </a>
        </div>
      </div>
    </div>

    <!-- SEC 05b: Grčko kazalište — arhitektura i izvedba -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">05b · Grčko kazalište — arhitektura i dramski oblici</div><div class="sec-line"></div></div>

    <div class="prose">Grčke tragedije nisu čitane u tišini knjižnice — izvođene su na <strong>otvorenim kamenim gledalištima</strong> za desetke tisuća gledatelja, u sklopu državnog vjerskog festivala u čast Dioniza. Razumjeti arhitekturu = razumjeti zašto drama ima takvu strukturu.</div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Dio kazališta</th><th>Opis</th><th>Uloga u drami</th></tr></thead>
        <tbody>
          <tr><td><strong>Theatron</strong> (θέατρον)</td><td>Polukružno gledište ukopano u brdo · kameni stupnjeviti redovi</td><td>Do 17.000 gledatelja; akustika omogućava čuti šapat s bine bez pojačanja</td></tr>
          <tr><td><strong>Orchestra</strong> (ὀρχήστρα)</td><td>Kružni prostor za ples (doslovno: „plesišće") u podnožju theatrona</td><td>Ovo je prostor zbora (kora) — tamo pjevaju, plešu, komentiraju radnju</td></tr>
          <tr><td><strong>Thymele</strong></td><td>Žrtvenik u sredini orchestre</td><td>Podsjetnik na religiozne korijene drame (Dionysos kult)</td></tr>
          <tr><td><strong>Skene</strong> (σκηνή)</td><td>Drvena ili kamena zgrada iza orchestre · pozadinska scenografija</td><td>Glumci se presvlače, izlaze s raznih vrata; od ovog dolazi naša „scena" i „scenarij"</td></tr>
          <tr><td><strong>Proskenion</strong></td><td>Uski prostor ispred skene</td><td>Glumci nastupaju ovdje — odijeljeni od zbora koji je u orchestri</td></tr>
          <tr><td><strong>Parodos</strong></td><td>Dva prolaza s lijeve i desne strane između theatrona i orchestre</td><td>Ulaz/izlaz zbora na početku i kraju drame; daje ime prvoj zbornoj pjesmi</td></tr>
          <tr><td><strong>Ekkyklema</strong></td><td>Kolica na kotačima koja se guraju kroz vrata skene</td><td>Prikazuju scene iz unutrašnjosti (npr. leš koji se ne može prikazati na sceni)</td></tr>
          <tr><td><strong>Deus ex machina</strong></td><td>Dizalica iznad skene (grčki: μηχανή)</td><td>Bog koji dolazi odozgo da razriješi zaplet — otud izraz za „iznenadni spasitelj"</td></tr>
        </tbody>
      </table>
    </div>

    <div class="slbl">Tragedija vs. Komedija — Dionizova dva lica</div>

    <div class="cmp">
      <div class="cmp-c">
        <div class="cmp-h re">TRAGEDIJA</div>
        <div style="padding:14px 18px;font-family:var(--serif);font-size:13.5px;line-height:1.7;color:var(--t2)">
          <b style="color:var(--t1)">Cilj:</b> katarza (pročišćenje)<br>
          <b style="color:var(--t1)">Protagonisti:</b> plemeniti junaci, vladari, heroji<br>
          <b style="color:var(--t1)">Kraj:</b> smrt, propast, tragedija<br>
          <b style="color:var(--t1)">Zbor:</b> 12–15 članova, svečan ton<br>
          <b style="color:var(--t1)">Festival:</b> Velika Dionizija (proljeće)<br>
          <b style="color:var(--t1)">Maske:</b> tragijaos — ozbiljne, deformirane od boli<br>
          <em>Primjeri: Antigona, Kralj Edip, Orestija, Medeja</em>
        </div>
      </div>
      <div class="cmp-c">
        <div class="cmp-h go">KOMEDIJA</div>
        <div style="padding:14px 18px;font-family:var(--serif);font-size:13.5px;line-height:1.7;color:var(--t2)">
          <b style="color:var(--t1)">Cilj:</b> smijeh, politička satira<br>
          <b style="color:var(--t1)">Protagonisti:</b> obični ljudi, karirikani likovi<br>
          <b style="color:var(--t1)">Kraj:</b> svadbom, pomirenjem, slavljem<br>
          <b style="color:var(--t1)">Zbor:</b> 24 člana, maškare (žabe, ose, ptice…)<br>
          <b style="color:var(--t1)">Festival:</b> Lenaje (zima)<br>
          <b style="color:var(--t1)">Maske:</b> komoidias — ružne, deformirane od smijeha<br>
          <em>Aristofan: Ptice, Žabe, Oblaci, Lisistrata</em>
        </div>
      </div>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">🎭 Aristofan — otac komedije (što trebaš znati)</div>
      <div class="box-key-txt">
        <strong>Aristofan</strong> (446.–386. pr. Kr.) je jedini sačuvani pisac <em>Stare komedije</em>. Njegova komedija je direktno politička — ismijava demagoge, filozofe (Sokrat u <em>Oblacima</em>), ratove (<em>Lisistrata</em> = žene zaustavljaju peloponeski rat štrajkom u spavaćoj sobi). Ovo je <strong>satira kao politički alat</strong> — tradicija koja traje do danas (Monty Python, SNL, Proust i dr.).<br><br>
        Na maturi može doći pitanje: <em>„U kojoj se tradiciji antičke drame nastavlja [X djelo]?"</em> — za ozbiljne drame = tragedija, za satirične/komične = komedija.
      </div>
    </div>

    <div class="slbl">Dramska ironija — Sofoklov alat koji publika treba prepoznati</div>

    <div class="box-int">
      <div class="box-int-lbl">⚡ Dramska ironija (dramatska ironija)</div>
      <div class="box-int-txt">
        <strong>Dramska ironija</strong> nastaje kad publika zna nešto što lik na sceni ne zna. Sofoklo je majstor ove tehnike — publika dolazi u kazalište <em>znajući mit</em> (zna da će Antigona umrijeti, zna da je Edip sin Lajev), pa svaka scena nosi teret te spoznaje.<br><br>
        <b>Primjeri iz Antigone:</b><br>
        1. <strong>Kreont proklinju sina Hemona</strong> — publika zna da će Hemon umrijeti zbog Kreontove odluke, ali Kreont to ne shvaća dok ne bude prekasno<br>
        2. <strong>Antigona kaže „znam da ću umrijeti"</strong> — priziva smrt svjesno; publika suosjeća jer zna da bi mogla odabrati drukčije<br>
        3. <strong>Proricanje Tiresije</strong> — slijepac koji vidi istinu; Kreont odbija njegov savjet jer misli da je podmićen; publika zna da Tiresija nikad nije pogriješio<br>
        4. <strong>Finale</strong> — Kreont donosi presudu misleći da spašava autoritet države; publika zna da time ruši vlastitu obitelj<br><br>
        <em>Esejski signal:</em> Kad koristiš izraz „dramska ironija" u eseju, obavezno objasni: <b>što publika zna</b>, <b>što lik ne zna</b>, i <b>kakav je učinak te razlike na emocionalnu napetost</b>.
      </div>
    </div>

    <div class="con">
      <div class="cr"><div class="ck br">VERBALNA IRONIJA</div><div class="cv">Lik govori suprotno od onoga što misli ili suprotno od stvarnosti. Npr. Kreont: „Tko čuva zakon, čuva grad." — istina je da time gubi grad.</div></div>
      <div class="cr"><div class="ck re">SITUACIJSKA IRONIJA</div><div class="cv">Situacija razvija se suprotno od očekivanog. Kreont hoće spasiti red — a uzrokuje kaos. Antigona se suprotstavlja zakonu — a poštuje viši zakon.</div></div>
      <div class="cr"><div class="ck go">DRAMSKA IRONIJA</div><div class="cv">Publika zna više od lika. Sve Sofoklo­ve tragedije koriste poznatost mita kao dramaturški alat — publika <em>čeka</em> propast s teškim srcem.</div></div>
      <div class="cr"><div class="ck pa">KOZMIČKA IRONIJA</div><div class="cv">Sudba igra s junacima suprotno od njihovih nakana. Edip bježi od proroštva i time ga ispunja. Antigona brani čast brata i dobiva smrt.</div></div>
    </div>

    <!-- ══ QUICK REFERENCE CARD (cheat sheet za pred-ispit) ══ -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">07 · Pred-ispit cheat sheet</div><div class="sec-line"></div></div>

    <div class="cheat-card">
      <div class="cheat-hdr">
        <div class="cheat-hdr-l">
          <div class="cheat-eye">QUICK REFERENCE · 30 MIN PRIJE ISPITA</div>
          <div class="cheat-ttl">Sve što moraš pamtiti — H01</div>
        </div>
        <button class="cheat-print" onclick="printCheatSheet()" aria-label="Ispiši cheat sheet">🖨 Ispiši</button>
      </div>

      <div class="cheat-grid">
        <!-- Datumi & autori -->
        <div class="cheat-col">
          <div class="cheat-col-ttl">📅 Datumi & autori</div>
          <table class="cheat-tbl">
            <tr><td><b>2100. pr. Kr.</b></td><td>Ep o Gilgamešu (Mezopotamija)</td></tr>
            <tr><td><b>8. st. pr. Kr.</b></td><td>Homer · Ilijada, Odiseja</td></tr>
            <tr><td><b>~441. pr. Kr.</b></td><td>Sofoklo · <em>Antigona</em></td></tr>
            <tr><td><b>4. st. pr. Kr.</b></td><td>Aristotel · Poetika</td></tr>
            <tr><td><b>19. pr. Kr.</b></td><td>Vergilije · Eneida</td></tr>
            <tr><td><b>1. st. pr. Kr.</b></td><td>Horacije · ode, Ovidije · Metamorfoze</td></tr>
            <tr><td><b>4. st. n. Kr.</b></td><td>Sv. Jeronim · Vulgata (lat. Biblija)</td></tr>
          </table>
        </div>

        <!-- Pojmovi koji najčešće dolaze -->
        <div class="cheat-col">
          <div class="cheat-col-ttl">🎯 Top pojmovi (čes­to na maturi)</div>
          <ul class="cheat-list">
            <li><b>Hamartia</b> = tragička greška junaka</li>
            <li><b>Hybris</b> = oholost koja dovodi do pada</li>
            <li><b>Katarza</b> = pročišćenje publike kroz strah i sažaljenje</li>
            <li><b>Peripetija</b> = nagli obrat radnje</li>
            <li><b>Anagnorizis</b> = junak prepoznaje istinu (prekasno)</li>
            <li><b>Heksametar</b> = stih ep­ike (6 stopa)</li>
            <li><b>In medias res</b> = radnja počinje u središtu</li>
            <li><b>Epiteton ornans</b> = ustaljeni pridjev („brzonogi Ahilej")</li>
            <li><b>Parabola</b> = alegorijska priča s poukom (Biblija)</li>
            <li><b>Tri jedinstva</b> = mjesto, vrijeme, radnja (Aristotel)</li>
          </ul>
        </div>

        <!-- Antigona — esencijalno -->
        <div class="cheat-col cheat-col-wide">
          <div class="cheat-col-ttl">⭐ Antigona — esencijalno za esej</div>
          <div class="cheat-grid-inner">
            <div>
              <div class="cheat-mini-ttl">Sukob</div>
              <div class="cheat-mini-txt"><b>Božji zakon</b> (Antigona, obitelj, nepisani) <span class="cheat-vs">vs</span> <b>Ljudski zakon</b> (Kreont, država, propisani)</div>
            </div>
            <div>
              <div class="cheat-mini-ttl">Antigona — hamartia</div>
              <div class="cheat-mini-txt">Krutost, nesposobnost kompromisa</div>
            </div>
            <div>
              <div class="cheat-mini-ttl">Kreont — hybris</div>
              <div class="cheat-mini-txt">Vjerovanje da državna riječ natkriljuje bogove</div>
            </div>
            <div>
              <div class="cheat-mini-ttl">3 ključna citata</div>
              <div class="cheat-mini-txt">
                1. „Nisam rođena da mrzim, nego da volim."<br>
                2. „Nisam mislila da tvoje naredbe imaju toliku moć da smrtnik može pregaziti nepisane zakone bogova."<br>
                3. „Pravo na pokop pripada svakom mrtvom — to je božji zakon."
              </div>
            </div>
          </div>
        </div>

        <!-- Esej cheat -->
        <div class="cheat-col cheat-col-wide">
          <div class="cheat-col-ttl">✍ Esej — struktura u 6 koraka</div>
          <ol class="cheat-steps">
            <li><b>Uvod</b> — kontekst djela + autora + jasna teza (1 rečenica)</li>
            <li><b>Razrada 1</b> — likovi i njihov sukob, povezati s tezom + citat</li>
            <li><b>Razrada 2</b> — ključna scena/motiv + analiza + citat</li>
            <li><b>Razrada 3</b> — povezivanje s drugim djelom ili razdobljem</li>
            <li><b>Zaključak</b> — odgovor na polazno pitanje, povratak na tezu</li>
            <li><b>Provjera</b> — minimum 440 riječi, slijed teze, gramatika</li>
          </ol>
        </div>

        <!-- Što NE smiješ -->
        <div class="cheat-col cheat-col-wide cheat-col-warn">
          <div class="cheat-col-ttl">⚠ Što NE smiješ na ispitu</div>
          <ul class="cheat-list cheat-list-warn">
            <li>Prepričavati radnju bez analize</li>
            <li>Pisati esej kraći od 440 riječi (esej se NE vrednuje)</li>
            <li>Iznositi osobno mišljenje u sažetku</li>
            <li>Citirati napamet bez navodnika i kontekstualizacije</li>
            <li>Brkati Antigoninu hamartiju (krutost) s Kreontovom hybrisom (oholost)</li>
            <li>Reći „grčka tragedija u 3 čina" — Sofoklo ima 5 dijelova</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">🔗 EVOLUCIJSKI LANAC — Razvoj tragedije kroz epohe</div>
      <div class="box-signal-txt">
        Antigona je <em>ishodišna točka</em> zapadnjačke tragedije. Prati kako se model tragičnog junaka razvijao kroz povijest:<br><br>
        <b>H01 · Antigona (Sofoklo, 441. pr. Kr.)</b> — <em>hamartia + hybris</em>; tragički junak koji krši kosmički poredak; katarza publike<br>
        <b>H03 · Hamlet (Shakespeare, 1603.)</b> — tragedija internalizirana: sukob više nije s bogovima nego <em>s vlastitom psihom</em>; slobodna volja vs. sudbina<br>
        <b>H08 · Preobražaj (Kafka, 1915.)</b> — moderna „tragedija" bez krivice; Gregor nema hamartiju — <em>propada bez krivnje</em>, sam sistem ga eliminira<br>
        <b>H09 · Stranac (Camus, 1942.)</b> — apsurdna tragedija: Meursault je osuđen ne za ubojstvo nego jer <em>nije plakao na majčinom pogrebu</em>; cijeli sudski sustav je komedija apsurda<br><br>
        <em>Esejski zaključak:</em> Sofoklo tragediju gradi kroz kosmički zakon → Shakespeare kroz psihološku dubinu → moderna kroz dehumanizaciju i apsurd.
      </div>
    </div>

    <div class="nav-row">
      <span class="nb off">← Prethodno</span>
      <span class="nb primary" onclick="sw(1)">⭐ Antigona deep-dive →</span>
    </div>
  </div>
  <!-- ════════════════════════
       TAB 1 · ANTIGONA DEEP-DIVE
       ════════════════════════ -->
  <div class="layer" id="l1" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">sofoklo</span>
      <span class="pill p-go">ispitno djelo 2025/2026</span>
      <span class="pill p-r">tragedija</span>
      <span class="pill p-t">441. pr. Kr.</span>
      <span class="pill p-pa">teba</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">⭐ Zašto ovo djelo zaslužuje poseban tab</div>
      <div class="box-int-txt">
        <strong>Antigona</strong> je jedno od 6 obaveznih djela za školski esej 2025/2026.
        Vjerojatnost da je dobiješ kao esejski zadatak: <em>~1 od 6</em>.
        Ako samo jedno djelo iz ovog poglavlja znaš u dubinu — neka to bude ova.
      </div>
    </div>

    <!-- METADATA -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · Osnovni podaci</div><div class="sec-line"></div></div>

    <div class="sg">
      <div class="sc"><span class="sc-ico si-br">AUTOR</span><div class="sc-name">Sofoklo</div><div class="sc-desc">496–406. pr. Kr. Atena. „Klasik klasika".</div></div>
      <div class="sc"><span class="sc-ico si-go">GODINA</span><div class="sc-name">~441. pr. Kr.</div><div class="sc-desc">Vrhunac atenske demokracije, Periklovo doba.</div></div>
      <div class="sc"><span class="sc-ico si-t">VRSTA</span><div class="sc-name">Tragedija</div><div class="sc-desc">Klasična grčka tragedija u 5 dijelova.</div></div>
      <div class="sc"><span class="sc-ico si-g">MJESTO</span><div class="sc-name">Teba</div><div class="sc-desc">Pred kraljevskom palačom (jedinstvo mjesta).</div></div>
    </div>

    <!-- RADNJA -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · Radnja u 10 rečenica</div><div class="sec-line"></div></div>

    <div class="box-20">
      <div class="b20-lbl">📖 Sažetak radnje</div>
      <ol class="b20-list b20-numbered">
        <li class="b20-item"><span class="b20-num">1</span><div class="b20-txt">U Tebi je upravo završio bratoubilački rat: Antigonina braća <b>Eteoklo</b> i <b>Polinik</b> ubili su jedan drugoga — Eteoklo braneći grad, Polinik napadajući ga.</div></li>
        <li class="b20-item"><span class="b20-num">2</span><div class="b20-txt">Novi kralj <b>Kreont</b> (Antigonin ujak) izdaje naredbu: Eteoklo se pokapa s počastima, a Polinikovo tijelo mora ostati nepokopano kao kazna izdajniku.</div></li>
        <li class="b20-item"><span class="b20-num">3</span><div class="b20-txt">Tko prekrši naredbu — <b>smrtna kazna</b>. Antigona ipak odlučuje pokopati brata jer <em>nepisani božji zakoni</em> natkriljuju ljudske.</div></li>
        <li class="b20-item"><span class="b20-num">4</span><div class="b20-txt">Sestra <b>Ismena</b> previše je uplašena i odbija pomoći — postavlja se kao kontrast Antigoni.</div></li>
        <li class="b20-item"><span class="b20-num">5</span><div class="b20-txt">Antigona biva uhvaćena na djelu. Pred Kreontom otvoreno priznaje, ne kaje se i brani svoj postupak.</div></li>
        <li class="b20-item"><span class="b20-num">6</span><div class="b20-txt">Kreont je osuđuje na smrt — bit će <b>živa zazidana</b> u kamenoj grobnici izvan grada.</div></li>
        <li class="b20-item"><span class="b20-num">7</span><div class="b20-txt">Kreontov sin <b>Hemon</b> (Antigonin zaručnik) preklinje oca da popusti. Kreont odbija — Hemon u bijesu odlazi.</div></li>
        <li class="b20-item"><span class="b20-num">8</span><div class="b20-txt">Slijepi prorok <b>Tirezija</b> upozorava Kreonta da je razljutio bogove. Kreont prvo prkosi, ali se na kraju <em>predomišlja</em>.</div></li>
        <li class="b20-item"><span class="b20-num">9</span><div class="b20-txt">Prekasno: kad Kreont dođe do grobnice, <b>Antigona se već objesila</b>. Hemon nad njezinim tijelom probada sebe i umire.</div></li>
        <li class="b20-item"><span class="b20-num">10</span><div class="b20-txt">Kad <b>Euridika</b> (Kreontova žena) sazna za Hemonovu smrt, ubija se. Kreont ostaje sam, slomljen — <em>živ da pati</em>.</div></li>
      </ol>
    </div>

    <!-- LIKOVI -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">03 · Dramatis personae</div><div class="sec-line"></div></div>

    <div class="con">
      <div class="cr"><div class="ck br">ANTIGONA</div><div class="cv"><b>Protagonistica · tragička junakinja.</b> Kći Edipa i Jokaste. Odana obiteljskim i božanskim zakonima do smrti. Lik se ne mijenja kroz dramu — drži istu moralnu poziciju od prvog do zadnjeg retka. <em>Hamartia:</em> krutost, nesposobnost kompromisa.</div></div>
      <div class="cr"><div class="ck go">KREONT</div><div class="cv"><b>Antagonist · po mnogima pravi tragički junak.</b> Tebanski kralj, Antigonin ujak. Predstavlja zakon i državu. <em>Hybris:</em> uvjerenje da njegova riječ natkriljuje bogove. Jedini koji prolazi kroz peripetiju i anagnorizis — shvaća grešku prekasno.</div></div>
      <div class="cr"><div class="ck pa">ISMENA</div><div class="cv"><b>Antigonina sestra · kontrast.</b> Plaha, pokorava se Kreontu iz straha. <em>Ogledalo Antigonine odlučnosti</em> — bez nje ne bi bilo tako jasno koliko je Antigona radikalna. Kasnije želi dijeliti sudbinu sa sestrom, Antigona odbija.</div></div>
      <div class="cr"><div class="ck te">HEMON</div><div class="cv"><b>Kreontov sin · Antigonin zaručnik.</b> Pokušava oca omekšati logikom („ne vlada dobro onaj tko ne sluša druge"). Ubija se nad Antigoninim tijelom. <em>Njegova smrt je vrh Kreontove tragedije.</em></div></div>
      <div class="cr"><div class="ck re">TIREZIJA</div><div class="cv"><b>Slijepi prorok · glas bogova.</b> Klasični mudrac — slijep, ali vidi dublje od drugih. Dolazi upozoriti Kreonta. <em>Njegovo proročanstvo = trenutak peripetije.</em></div></div>
      <div class="cr"><div class="ck ge">KOR</div><div class="cv"><b>Zbor tebanskih staraca · kolektivni glas.</b> Komentira radnju, moralno ocjenjuje likove. Prvi stasimon („Mnogo je čudesa, al' ništa čudesnije od čovjeka") — oda čovjeku i upozorenje o granicama.</div></div>
    </div>

    <!-- SUKOB SVG DIJAGRAM -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">04 · Centralni sukob — dva zakona</div><div class="sec-line"></div></div>

    <div class="prose">Ovo je <strong>srž drame</strong>. Svaka dobra esejska interpretacija počinje odavde.</div>

    <div class="svg-container" style="background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);padding:28px;margin:14px 0 22px">
      <svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto" role="img" aria-label="Dijagram sukoba Antigone i Kreonta — dva opravdana principa">
        <defs>
          <linearGradient id="g-ant" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#DC322F"/><stop offset="100%" style="stop-color:#8B1E1B"/>
          </linearGradient>
          <linearGradient id="g-kre" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#E8C97A"/><stop offset="100%" style="stop-color:#8B6D2F"/>
          </linearGradient>
        </defs>

        <!-- Vrhunac — tragedija -->
        <text x="360" y="30" text-anchor="middle" fill="#F5E6D3" font-family="Cinzel,serif" font-size="13" font-weight="600" letter-spacing="3">TRAGIČKI SUKOB DVAJU OPRAVDANIH PRINCIPA</text>

        <!-- ANTIGONA strana -->
        <circle cx="160" cy="170" r="95" fill="rgba(220,50,47,.12)"/>
        <circle cx="160" cy="170" r="65" fill="url(#g-ant)" stroke="#FF5A54" stroke-width="1.5"/>
        <text x="160" y="162" text-anchor="middle" fill="#FFF8F0" font-family="Cinzel,serif" font-size="24" font-weight="700">ANTIGONA</text>
        <text x="160" y="182" text-anchor="middle" fill="#FFD5D0" font-family="JetBrains Mono,monospace" font-size="9" letter-spacing="2">OBITELJ · BOGOVI</text>

        <!-- KREONT strana -->
        <circle cx="560" cy="170" r="95" fill="rgba(232,201,122,.12)"/>
        <circle cx="560" cy="170" r="65" fill="url(#g-kre)" stroke="#E8C97A" stroke-width="1.5"/>
        <text x="560" y="162" text-anchor="middle" fill="#0F0605" font-family="Cinzel,serif" font-size="26" font-weight="700">KREONT</text>
        <text x="560" y="182" text-anchor="middle" fill="#2A1A05" font-family="JetBrains Mono,monospace" font-size="9" letter-spacing="2">DRŽAVA · ZAKON</text>

        <!-- Linija sukoba + vs -->
        <line x1="228" y1="170" x2="492" y2="170" stroke="#DC322F" stroke-width="1.5" stroke-dasharray="6 4" opacity=".6"/>
        <polygon points="360,140 385,170 360,200 335,170" fill="#0F0605" stroke="#DC322F" stroke-width="1.5"/>
        <text x="360" y="166" text-anchor="middle" fill="#F5E6D3" font-family="Cinzel,serif" font-size="12" font-weight="700">VS</text>
        <text x="360" y="180" text-anchor="middle" fill="#DC322F" font-family="Crimson Text,serif" font-size="9" font-style="italic">SUKOB</text>

        <!-- Labele ispod -->
        <text x="160" y="285" text-anchor="middle" fill="#F5E6D3" font-family="Crimson Text,serif" font-size="13" font-weight="600">Božanski nepisani zakon</text>
        <text x="160" y="303" text-anchor="middle" fill="#B09684" font-family="Crimson Text,serif" font-size="12">Brat se mora pokopati.</text>
        <text x="160" y="320" text-anchor="middle" fill="#B09684" font-family="Crimson Text,serif" font-size="12">Obitelj iznad svega.</text>

        <text x="560" y="285" text-anchor="middle" fill="#F5E6D3" font-family="Crimson Text,serif" font-size="13" font-weight="600">Ljudski državni zakon</text>
        <text x="560" y="303" text-anchor="middle" fill="#B09684" font-family="Crimson Text,serif" font-size="12">Izdajnik se ne pokopava.</text>
        <text x="560" y="320" text-anchor="middle" fill="#B09684" font-family="Crimson Text,serif" font-size="12">Država iznad svega.</text>

        <!-- ═══ HOTSPOT LAYER (v3.5) ═══ -->
        <!-- Pulsing ring hints -->
        <circle class="svg-hs-ring" cx="160" cy="170" r="75"/>
        <circle class="svg-hs-ring" cx="560" cy="170" r="75"/>
        <circle class="svg-hs-ring" cx="360" cy="170" r="30"/>

        <!-- Antigona hotspot -->
        <g class="svg-hs" tabindex="0" role="button"
           data-tip-ttl="Antigona"
           data-tip-txt="Edipova kći. Kad Kreont zabrani pokop njenog brata Polinika, ona se odlučuje na <em>neposluh iz moralne dužnosti</em>. Pokop je ritualni čin pripadanja bogovima — ne državi. Odabrat će smrt da ostane vjerna savjesti.">
          <circle cx="160" cy="170" r="95"/>
        </g>

        <!-- Kreont hotspot -->
        <g class="svg-hs" tabindex="0" role="button"
           data-tip-ttl="Kreont"
           data-tip-txt="Novi kralj Tebe, Antigonin ujak. Vjeruje da je <em>poslušnost državi iznad svega</em>. Njegova hybris (oholost) dolazi iz uvjerenja da ljudski zakon natkriljuje bogove. Izgubit će sina, ženu — i vlastitu poziciju.">
          <circle cx="560" cy="170" r="95"/>
        </g>

        <!-- Sukob (centralni) hotspot -->
        <g class="svg-hs" tabindex="0" role="button"
           data-tip-ttl="Hegelov sukob"
           data-tip-txt="Ne sukob dobra i zla — već <em>dva opravdana principa</em>. Antigona nije potpuno u pravu, Kreont nije potpuno u krivu. Zato je kraj neizbježno tragičan: svaka strana je u svom pravu, ali ne može postojati zajedno s drugom.">
          <circle cx="360" cy="170" r="50"/>
        </g>

        <!-- Božanski zakon (donja lijeva) hotspot -->
        <g class="svg-hs" tabindex="0" role="button"
           data-tip-ttl="Božanski zakon (nomos)"
           data-tip-txt="„<em>Nepisani, nepropadljivi zakoni bogova</em>" — vječni, vrijede bez obzira na vrijeme ili vladara. Obitelj je u ovom poretku nadređena državi. Antigonina pozicija je stavljena uz bogove."
           data-offset-y="-60">
          <rect x="60" y="275" width="200" height="55"/>
        </g>

        <!-- Ljudski zakon (donja desna) hotspot -->
        <g class="svg-hs" tabindex="0" role="button"
           data-tip-ttl="Ljudski zakon (thesis)"
           data-tip-txt="Pisani zakon polisa (grada-države). U Kreontovoj logici: <em>bez discipline nema države, bez države nema civilizacije</em>. Izdajnik Polinik napao je grad — njegov pokop bi simbolizirao legitimitet izdaje."
           data-offset-y="-60">
          <rect x="460" y="275" width="200" height="55"/>
        </g>
      </svg>

      <div class="svg-hint">Klikni ili prijeđi preko slike za detalje</div>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">⭐ Hegelova interpretacija (bonus u eseju)</div>
      <div class="box-signal-txt">
        Njemački filozof <strong>Hegel</strong> smatrao je Antigonu <em>najsavršenijim primjerom tragičnog sukoba</em> —
        ne između dobra i zla, već između <strong>dva opravdana principa</strong>: obiteljskog (Antigona) i državnog (Kreont).
        Nijedna strana nije potpuno u krivu, zato je kraj neizbježno tragičan.
        <strong>Uvrsti ovu misao u esej → odmah si iznad prosjeka.</strong>
      </div>
    </div>

    <!-- Frustration hint — playbook P4.3 (Hegel je zahtjevan) -->
    <div class="frustration">
      <div class="fr-ico">💭</div>
      <div class="fr-body">Ne razumiješ Hegelovu ideju „dva opravdana principa"? AI profesor ti može <b>napisati primjer rečenice</b> za tvoj esej.</div>
      <a href="/ai-profesor?ctx=h01_hegel" class="fr-cta" onclick="track('upsell_click',{ctx:'frustration_hegel',target:'ai_profesor'},'conversion')">Primjer za esej →</a>
    </div>

    <!-- ══ ANTIGONA vs KREONT — comparison tablica za esej ══ -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">05 · Antigona vs Kreont — usporedba</div><div class="sec-line"></div></div>

    <div class="cmp-tbl-wrap">
      <div class="cmp-tbl-hint">📝 Idealno za esejski zadatak — esej skoro <b>uvijek traži usporedbu</b> dva glavna lika.</div>
      <table class="cmp-tbl">
        <thead>
          <tr>
            <th class="cmp-th-cat">Aspekt</th>
            <th class="cmp-th-a">ANTIGONA</th>
            <th class="cmp-th-b">KREONT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="cmp-cat">Uloga</td>
            <td>Protagonistica · tragička junakinja</td>
            <td>Antagonist · po Aristotelu pravi tragički junak</td>
          </tr>
          <tr>
            <td class="cmp-cat">Pozicija</td>
            <td>Privatna, obiteljska — kći Edipa, sestra Polinika</td>
            <td>Javna, državna — novi tebanski kralj</td>
          </tr>
          <tr>
            <td class="cmp-cat">Princip</td>
            <td><b>Božji zakon</b> (nepisan, vječan, obiteljski)</td>
            <td><b>Ljudski zakon</b> (propisan, prolazan, državni)</td>
          </tr>
          <tr>
            <td class="cmp-cat">Argument</td>
            <td>„Pravo na pokop pripada svakome — to je božji zakon."</td>
            <td>„Tko ide protiv države, gubi pravo na čast."</td>
          </tr>
          <tr>
            <td class="cmp-cat">Tragička greška</td>
            <td><b>Hamartia:</b> krutost, nesposobnost kompromisa</td>
            <td><b>Hybris:</b> oholost — vjerovanje da kraljeva riječ natkriljuje bogove</td>
          </tr>
          <tr>
            <td class="cmp-cat">Razvoj lika</td>
            <td>Statičan — od početka do kraja drži istu poziciju</td>
            <td>Dinamičan — prolazi kroz <em>peripetiju</em> i <em>anagnorizis</em></td>
          </tr>
          <tr>
            <td class="cmp-cat">Sudbina</td>
            <td>Vlastoručno se objesila u grobnici</td>
            <td>Gubi sina (Hemon) i ženu (Euridika), ostaje živ — sam</td>
          </tr>
          <tr>
            <td class="cmp-cat">Aristotelovi kriteriji</td>
            <td>Manje paradigmatska — od početka osuđena</td>
            <td>Bliža Aristotelovoj definiciji — pad iz visine, samospoznaja</td>
          </tr>
          <tr>
            <td class="cmp-cat">Što djelo poručuje</td>
            <td colspan="2" class="cmp-conc">Hegel: oba imaju pravo, ali ne mogu istovremeno postojati. <em>Tragika je u sukobu dva opravdana principa</em> — ne dobra protiv zla.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- TEME -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">06 · Teme i motivi</div><div class="sec-line"></div></div>

    <div class="sg">
      <div class="sc"><span class="sc-ico si-br">1</span><div class="sc-name">Pojedinac vs. država</div><div class="sc-desc">Tema koja se provlači kroz Shakespearea, Dostojevskog, Kafku. Korijen je ovdje.</div></div>
      <div class="sc"><span class="sc-ico si-go">2</span><div class="sc-name">Božanski vs. ljudski zakon</div><div class="sc-desc">Antigona: postoje „nepisani, nepropadljivi zakoni bogova" koje ni kralj ne može prekrojiti.</div></div>
      <div class="sc"><span class="sc-ico si-r">3</span><div class="sc-name">Moć i oholost (hybris)</div><div class="sc-desc">Kreontova tragička greška — vjerovanje da njegova riječ natkriljuje bogove.</div></div>
      <div class="sc"><span class="sc-ico si-t">4</span><div class="sc-name">Savjest vs. pokornost</div><div class="sc-desc">Antigona bira savjest i plaća životom. Ismena bira pokornost i preživljava — ali moralno ostaje prazna.</div></div>
      <div class="sc"><span class="sc-ico si-g">5</span><div class="sc-name">Položaj žene u antici</div><div class="sc-desc">Žena koja javno suprotstavlja svoju volju vladaru — revolucionarno za 5. st. pr. Kr.</div></div>
      <div class="sc"><span class="sc-ico si-s">6</span><div class="sc-name">Obitelj, krv, smrt</div><div class="sc-desc">Motiv pokopa kao posljednjeg čina poštovanja. Krv obiteljskog nasljeđa (Edipovi potomci).</div></div>
    </div>

    <!-- VIDEO RESURSI — v3.5 -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">07 · Video resursi</div><div class="sec-line"></div></div>

    <div class="prose">Kada ti tekst nije dovoljan — vizualni učenici često bolje pamte kroz video objašnjenja i predstave. Ovdje su pouzdani edukacijski izvori na YouTubeu.</div>

    <div class="yt-grid">
      <a class="yt-card" href="https://www.youtube.com/results?search_query=Antigona+Sofoklo+analiza+hrvatski" target="_blank" rel="noopener noreferrer" onclick="track('yt_click',{topic:'antigona_analiza_hr'},'engagement')">
        <div class="yt-thumb" style="background:linear-gradient(135deg,#8B1E1B,#DC322F)">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇭🇷</span> HR</div>
          <div class="yt-title">Antigona — analiza na hrvatskom</div>
          <div class="yt-desc">Pretraga kroz hrvatske edu kanale (Učimo, Matura.hr TV, profesorski videi). Koristi za brzi repetitorij likova i tema.</div>
        </div>
      </a>

      <a class="yt-card" href="https://www.youtube.com/playlist?list=PL8dPuuaLjXtONXALkeh5uisZqrAcPKCee" target="_blank" rel="noopener noreferrer" onclick="track('yt_click',{topic:'crashcourse_theater_playlist'},'engagement')">
        <div class="yt-thumb" style="background:linear-gradient(135deg,#0c5d61,#5BC0BE)">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇬🇧</span> EN · playlist</div>
          <div class="yt-title">Crash Course Theater — Greek Tragedy</div>
          <div class="yt-desc">Mike Rugnetta vodi kroz epizode 2 (Thespis i nastanak drame) i 3 (Aristotelova pravila tragedije, katarza). Idealan sažetak Aristotelove Poetike. Uključi hrvatske automatske titlove.</div>
        </div>
      </a>

      <a class="yt-card" href="https://www.youtube.com/results?search_query=Antigone+Sophocles+summary+themes" target="_blank" rel="noopener noreferrer" onclick="track('yt_click',{topic:'antigone_summary_en'},'engagement')">
        <div class="yt-thumb" style="background:linear-gradient(135deg,#8B6914,#E8C97A)">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇬🇧</span> EN</div>
          <div class="yt-title">Antigone · Summary &amp; Themes</div>
          <div class="yt-desc">SparkNotes, CourseHero, LitCharts video eksplanacije. Za dubinski uvid u simboliku i motive. Koristi s hrvatskim titlovima.</div>
        </div>
      </a>

      <a class="yt-card" href="https://www.youtube.com/results?search_query=Antigone+Sophocles+full+play+performance" target="_blank" rel="noopener noreferrer" onclick="track('yt_click',{topic:'antigone_performance'},'engagement')">
        <div class="yt-thumb" style="background:linear-gradient(135deg,#2B1F3F,#8B7AB8)">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🎭</span> Predstava</div>
          <div class="yt-title">Antigona · kazališne izvedbe</div>
          <div class="yt-desc">Filmske i kazališne interpretacije Antigone. Kad vidiš stvarnu predstavu, tekst prestaje biti samo riječi na papiru.</div>
        </div>
      </a>
    </div>

    <div class="box-tip" style="margin-top:14px">
      <div class="bt-ico">💡</div>
      <div class="bt-body">
        <div class="bt-title">Pro tip — kako gledati</div>
        <div class="bt-txt">Video je <strong>dodatak</strong>, ne zamjena. Pročitaj djelo + ovu skriptu, pa pogledaj video — tako pamtiš 3× bolje nego kroz bilo koji pojedinačni izvor.</div>
      </div>
    </div>

    <!-- UPSELL: AI profesor -->
    <div class="upsell" data-upsell-ctx="antigona_main" data-upsell-target="ai_profesor" data-upsell-id="antigona_ai_main">
      <div class="upsell-ico">🤖</div>
      <div class="upsell-body">
        <div class="upsell-title">AI profesor <span class="upsell-badge pro">PRO</span> <span class="upsell-badge" style="color:var(--t3);border-color:var(--bdm);background:transparent;font-size:8px">19,99 €/mj</span></div>
        <div class="upsell-desc">Zapeo si na <strong>Kreontovoj hybrisi</strong>, <strong>katarzi</strong> ili <strong>Hegelovoj interpretaciji</strong>? Pitaj AI profesora — objasnit će ti bilo koji pojam ili stih iz Antigone odmah, na hrvatskom.</div>
      </div>
      <a href="/ai-profesor?ctx=h01_antigona" class="upsell-cta" onclick="track('upsell_click',{ctx:'antigona_main',target:'ai_profesor'},'conversion')">Pitaj →</a>
    </div>

    <div class="nav-row">
      <span class="nb" onclick="sw(0)">← Teorija</span>
      <span class="nb primary" onclick="sw(2)">✍ Esej alat →</span>
    </div>
  </div>
  <!-- ════════════════════════
       TAB 2 · ESEJ ALAT
       ════════════════════════ -->
  <div class="layer" id="l2" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">5 teza</span>
      <span class="pill p-go">model eseja</span>
      <span class="pill p-r">tipične greške</span>
      <span class="pill p-t">30 bodova</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">✍ Kako se piše esej iz Antigone — arsenal za sve varijante</div>
      <div class="box-int-txt">
        Na maturi dobivaš <strong>polazni ulomak</strong> iz djela i temu oko koje gradiš esej. Tema nije fiksna — može doći iz pet različitih smjerova. Evo gotovih teza, modela uvoda i najčešćih zamki.
      </div>
    </div>

    <!-- 5 TEZA -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · Pet mogućih esejnih teza</div><div class="sec-line"></div></div>

    <div class="prose">Ako te esej pita o Antigoni — vjerojatno ćeš biti oko jedne od ovih linija. Pripremi ih napamet. Skraćeno — <em>„teza u jednoj rečenici + 3 argumenta"</em>.</div>

    <div class="box-key">
      <div class="box-key-lbl">📜 TEZA 1 — moralni pojedinac vs. vlast</div>
      <div class="box-key-txt">
        <strong>„Antigona je tragedija moralnog pojedinca u sukobu s vlašću."</strong><br>
        Antigona utjelovljuje pojedinčevu savjest koja odbija priznati nepravedan zakon. Njezin pad je neizbježan, ali moralna pobjeda ostaje — Kreont je slomljen, ona nije.
      </div>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">📜 TEZA 2 — Kreont kao pravi tragički junak</div>
      <div class="box-key-txt">
        <strong>„Kreont je pravi tragički junak — on je taj koji pada."</strong><br>
        Ako Aristotelovu definiciju primijenimo doslovno (visoki položaj → hamartia → peripetija → katastrofa), Kreont se uklapa savršeno. Antigona je hrabra, ali Kreont prolazi <em>promjenu</em> — iz hybrisa u anagnorizis.
      </div>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">📜 TEZA 3 — Hegelov sukob opravdanih principa</div>
      <div class="box-key-txt">
        <strong>„Sukob Antigone i Kreonta je sukob dvaju opravdanih principa."</strong><br>
        Antigona brani obiteljski/božanski zakon, Kreont državni/ljudski. <em>Nijedan princip nije potpuno u krivu.</em> Tragedija nastaje kad se dva nepomirljiva opravdana principa moraju sudariti.
      </div>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">📜 TEZA 4 — granice ljudske moći</div>
      <div class="box-key-txt">
        <strong>„Antigona je drama o granici ljudske moći."</strong><br>
        Ljudski zakoni imaju granicu — postavljaju je bogovi, priroda, savjest. Kreontova hybris = misliti da te granice nema. Prvi stasimon: <em>„Mnogo je čudesa, al' ništa čudesnije od čovjeka"</em> — ali upravo čovjek najviše strada kad ne prizna granice.
      </div>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">📜 TEZA 5 — ženska subverzija u patrijarhalnom svijetu</div>
      <div class="box-key-txt">
        <strong>„Antigona je prikaz ženske subverzije u patrijarhalnom svijetu."</strong><br>
        Antigonin otpor nije samo moralni, nego i rodni. U svijetu gdje žene nemaju glasa, ona zauzima javni prostor i izaziva kralja. Sukob nije samo „pojedinac vs. država" — već „ženska savjest vs. muška vlast".
      </div>
    </div>

    <!-- MODEL ESEJA -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · Model uvoda i prve razrade</div><div class="sec-line"></div></div>

    <div class="prose">Koristi kao <strong>skelet, ne copy-paste</strong>. Zamijeni [SREDIŠNJU TVRDNJU] svojom tezom i prilagodi argumente temi zadatka.</div>

    <div class="box-int">
      <div class="box-int-lbl">📝 UVOD · 5–6 rečenica</div>
      <div class="box-int-txt">
        Sofoklova Antigona, napisana <strong>oko 441. godine prije Krista</strong> u vrhuncu atenske demokracije, i dvije i pol tisuće godina kasnije ostaje jedna od najmoćnijih slika pojedinca koji odbija prekoračiti granicu svoje savjesti. U središtu drame stoji sukob <em>dvaju zakona</em> — božanskog, koji Antigoni nalaže da pokopa brata, i ljudskog, kojim Kreont pokop zabranjuje pod prijetnjom smrti. <strong>[SREDIŠNJA TVRDNJA:]</strong> Upravo se u tom sukobu, kako pokazuje analiza zadanog ulomka i drame u cjelini, ne otkriva jednostavna opreka dobra i zla, nego <em>tragičnost neizbježnog sudara dvaju opravdanih principa</em> — principa obitelji i principa države. <strong>[NAJAVA ARGUMENATA:]</strong> To ću u nastavku pokazati kroz tri uvida: Antigoninu nekompromisnu obranu nepisanih zakona, Kreontovu hybris koja ga dovodi do vlastite propasti, te funkciju kora kao moralne vage drame.
      </div>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">📝 RAZRADA · prvi odlomak (otvaranje argumenta)</div>
      <div class="box-key-txt">
        Antigona od prve scene zauzima jasnu moralnu poziciju. Kada u zadanom ulomku stoji pred Kreontom i priznaje da je pokopala brata, ne traži oprost — <em>tvrdi da božanski zakoni natkriljuju sve ljudske:</em> „Nisam mislila da tvoje naredbe imaju toliku moć…". Ova rečenica je <strong>osovina njezine etike</strong>. Za razliku od Ismene, koja bira pokornost iz straha, Antigona bira vjernost obiteljskom i božanskom redu, svjesna da će je ta odluka stajati života. Ono što Sofoklo pokazuje kroz njezin lik <em>nije slijepa tvrdoglavost</em>, nego ono što Aristotel u Poetici opisuje kao <strong>hamartiju</strong> — tragičku krivnju. Junakinjina krutost pomiče je prema neumitnom kraju, ali ta ista krutost je i izvor njezine veličine.
      </div>
    </div>

    <div class="box-tip">
      <div class="bt-ico">💡</div>
      <div class="bt-body">
        <div class="bt-title">Pro-formula za svaki razradni odlomak</div>
        <div class="bt-txt">
          <strong>(1)</strong> tvrdnja odlomka → <strong>(2)</strong> citat/parafraza iz ulomka → <strong>(3)</strong> šira referenca na djelo u cjelini → <strong>(4)</strong> književnoteorijski pojam (hamartia, hybris, katarza...).
          Ocjenjivač traži upravo to — „proizlazi iz sadržajne i stilske analize polaznog ulomka i njegove uloge u djelu u cjelini".
        </div>
      </div>
    </div>

    <!-- TIPIČNE GREŠKE -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">03 · Tipične greške — izbjegavaj</div><div class="sec-line"></div></div>

    <div class="box-warn">
      <div class="bw-ico">✗</div>
      <div class="bw-body">
        <div class="bw-title">Svesti dramu na „Antigona dobra, Kreont zao"</div>
        <div class="bw-txt">Površno — Sofoklo sam tako ne postavlja sukob. Kreont <em>ima argumente</em> (državni poredak, kazna izdajniku). Upravo zato je drama tragična — nije crno-bijela.</div>
      </div>
    </div>

    <div class="box-warn">
      <div class="bw-ico">✗</div>
      <div class="bw-body">
        <div class="bw-title">Ignorirati kor</div>
        <div class="bw-txt">Kor nije ukras — to je <strong>moralna vaga drame</strong>. Prvi stasimon („Mnogo je čudesa…") direktno komentira temu granica čovjeka. Obavezno ga spomeni i citiraj.</div>
      </div>
    </div>

    <div class="box-warn">
      <div class="bw-ico">✗</div>
      <div class="bw-body">
        <div class="bw-title">Previše prepričavanja radnje</div>
        <div class="bw-txt">Esej nije prepričavanje. Ako više od <strong>20%</strong> teksta ide na „a onda je Kreont rekao…" — izgubljen bod u <em>središnjoj tvrdnji</em>.</div>
      </div>
    </div>

    <div class="box-warn">
      <div class="bw-ico">✗</div>
      <div class="bw-body">
        <div class="bw-title">Zaboraviti kontekst (5. st. pr. Kr., Atena)</div>
        <div class="bw-txt">Antigona je napisana u <strong>vrhuncu atenske demokracije</strong>. Sofoklo piše o napetosti između zakona i savjesti baš kad Atenjani svakodnevno debatiraju o tome. <em>Kontekst = bonus bod.</em></div>
      </div>
    </div>

    <div class="box-tip">
      <div class="bt-ico">✓</div>
      <div class="bt-body">
        <div class="bt-title">Što DIŽE razinu eseja</div>
        <div class="bt-txt">
          Kratka referenca na <strong>Aristotelovu Poetiku</strong> („po Aristotelovoj definiciji tragedije…") · Uspoređivanje s drugim djelima (<em>Hamlet</em>, <em>Edip</em>) · Hegelov pojam sukoba opravdanih principa · Spominjanje <strong>hamartije, hybrisa, katarze</strong> uz analizu, ne kao popis.
        </div>
      </div>
    </div>

    <div class="nav-row">
      <span class="nb" onclick="sw(1)">← Antigona</span>
      <span class="nb primary" onclick="sw(3)">💬 Citatnik →</span>
    </div>
  
    <!-- ══ BROJAČ ESEJA (auto-injected) ══ -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">Brojač eseja</div><div class="sec-line"></div></div>
    
    <div class="box-warn">
      <div class="bw-ico">📊</div>
      <div class="bw-body">
        <div class="bw-title">Provjeri svoj esej prije predaje</div>
        <div class="bw-txt">Cilj: <strong>min. 440 riječi</strong>. Optimalno 500–700. Tekst ostaje u tvom pregledniku.</div>
      </div>
    </div>

    <div class="wc-box">
      <div class="wc-hdr">
        <div class="wc-ttl">📝 Brojač eseja · cilj: min. 440 riječi · optimalno 500–700</div>
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
        <button type="button" class="wc-btn" onclick="document.getElementById('wc-ta').value='';wcUpdate()">✕ Očisti</button>
        <button type="button" class="wc-btn" onclick="navigator.clipboard.writeText(document.getElementById('wc-ta').value)">⎘ Kopiraj</button>
      </div>
      <div class="wc-hint">💡 <b>Tip:</b> 5 odlomaka × 6 rečenica × 18 riječi ≈ 540 riječi. Drži se TEZA strukture.</div>
    </div>

    </div>
  <!-- ════════════════════════
       TAB 3 · CITATNIK
       ════════════════════════ -->
  <div class="layer" id="l3" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">arsenal</span>
      <span class="pill p-go">antigona</span>
      <span class="pill p-r">homer</span>
      <span class="pill p-t">biblija</span>
      <span class="pill p-pa">rim</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💬 Citatni arsenal — ono što moraš znati napamet</div>
      <div class="box-int-txt">
        Kratki, moćni citati razvrstani po temi. Ubaciš jedan u esej — dignuta razina. Svaki ima napomenu <em>kada ga koristiti</em>.
      </div>
    </div>

    <!-- SEARCH + FILTER -->
    <div class="cit-tools">
      <div class="cit-search-row">
        <label for="cit-search" class="sr-only">Pretraži citate</label>
        <input type="text" id="cit-search" class="cit-search" placeholder="🔍 Pretraži citate (npr. ljubav, hybris, carpe diem...)" aria-label="Pretraži citate" autocomplete="off">
        <button type="button" class="cit-clear" id="cit-clear" onclick="citClear()" aria-label="Očisti pretragu" title="Očisti">✕</button>
      </div>
      <div class="cit-filters" role="group" aria-label="Filtriraj po izvoru">
        <button type="button" class="cit-filter active" data-src="all" onclick="citFilter('all')">Svi</button>
        <button type="button" class="cit-filter" data-src="antigona" onclick="citFilter('antigona')">Antigona</button>
        <button type="button" class="cit-filter" data-src="homer" onclick="citFilter('homer')">Homer</button>
        <button type="button" class="cit-filter" data-src="biblija" onclick="citFilter('biblija')">Biblija</button>
        <button type="button" class="cit-filter" data-src="rim" onclick="citFilter('rim')">Rim</button>
      </div>
      <div class="cit-stats" id="cit-stats" aria-live="polite">18 citata</div>
    </div>

    <!-- ANTIGONA CITATI -->
    <div class="sec-hdr" data-cit-section="antigona"><div class="sec-line"></div><div class="sec-badge">01 · Antigona — top 5</div><div class="sec-line"></div></div>

    <div class="box-key" data-q-src="antigona" data-q-text="nepisani nepropadljivi zakoni bogova moralni pojedinac hegelov sukob granice božanski ljudski">
      <div class="box-key-lbl">📜 ANTIGONA KREONTU · božanski vs. ljudski zakon</div>
      <div class="box-key-txt">
        „Nisam mislila da tvoje naredbe imaju toliku moć da smrtnik može pregaziti <em>nepisane i nepropadljive zakone bogova.</em>"<br><br>
        <strong style="color:var(--gold)">→ Koristi za:</strong> tema 1, 3, 4 (moralni pojedinac, Hegelov sukob, granice).
      </div>
    </div>

    <div class="box-key" data-q-src="antigona" data-q-text="mnogo čudesa ništa čudesnije čovjeka granice ljudske moći hybris prvi stasimon kor">
      <div class="box-key-lbl">📜 KOR · prvi stasimon · granice čovjeka</div>
      <div class="box-key-txt">
        „Mnogo je čudesa, <em>al' ništa čudesnije od čovjeka.</em>"<br><br>
        <strong style="color:var(--gold)">→ Koristi za:</strong> temu 4 (granice ljudske moći), temu 3 (hybris). <em>Obavezno u svakom eseju.</em>
      </div>
    </div>

    <div class="box-key" data-q-src="antigona" data-q-text="nisam rođena da mrzim volim ljubav karakterizacija politika">
      <div class="box-key-lbl">📜 ANTIGONA · karakterizacija</div>
      <div class="box-key-txt">
        „Nisam rođena da mrzim, nego da <em>volim.</em>"<br><br>
        <strong style="color:var(--gold)">→ Koristi za:</strong> karakterizacija Antigone, tema ljubavi vs. politike, tema 5.
      </div>
    </div>

    <div class="box-key" data-q-src="antigona" data-q-text="država nije jednog čovjeka posjed hemon kritika tiranije apsolutne vlasti">
      <div class="box-key-lbl">📜 HEMON KREONTU · kritika tiranije</div>
      <div class="box-key-txt">
        „<em>Država nije jednog čovjeka posjed.</em>"<br><br>
        <strong style="color:var(--gold)">→ Koristi za:</strong> Kreontova hybris, kritika apsolutne vlasti, tema 2.
      </div>
    </div>

    <div class="box-key" data-q-src="antigona" data-q-text="sve su mi ruke pune zla kreont finale anagnorizis peripetija tragedija">
      <div class="box-key-lbl">📜 KREONT · finale, anagnorizis</div>
      <div class="box-key-txt">
        „<em>Sve su mi ruke pune zla.</em>"<br><br>
        <strong style="color:var(--gold)">→ Koristi za:</strong> Kreontovu tragediju, peripetija + anagnorizis, tema 2.
      </div>
    </div>

    <!-- HOMER CITATI -->
    <div class="sec-hdr" data-cit-section="homer"><div class="sec-line"></div><div class="sec-badge">02 · Homer — uvodi i junaci</div><div class="sec-line"></div></div>

    <div class="con">
      <div class="cr" data-q-src="homer" data-q-text="srdžbu boginjo pjevaj ahileja peleju sina ilijada invokacija muze ahilejev gnjev"><div class="ck br">ILIJADA · početak</div><div class="cv">„<em>Srdžbu mi, boginjo, pjevaj Ahileja, Peleju sina…</em>" → klasična invokacija muze, tema Ahilejevog gnjeva.</div></div>
      <div class="cr" data-q-src="homer" data-q-text="bolje pasti s časti nego živjeti sramoteno junaštvo čast preživljavanje ilijada"><div class="ck br">ILIJADA · čast</div><div class="cv">„<em>Bolje pasti s časti nego živjeti sramoteno.</em>" → koristi uz raspravu o junaštvu, čast vs. preživljavanje.</div></div>
      <div class="cr" data-q-src="homer" data-q-text="muža muzo kazuj domišljata odiseja invokacija odisejev povratak"><div class="ck go">ODISEJA · početak</div><div class="cv">„<em>Muža mi, muzo, kazuj domišljata…</em>" → invokacija muze, uvod u Odisejev povratak.</div></div>
      <div class="cr" data-q-src="homer" data-q-text="onaj koji je vidio sve krajeva zemlje gilgameš prva knjiga povijest"><div class="ck pa">EP O GILGAMEŠU</div><div class="cv">„<em>Onaj koji je vidio sve do krajeva zemlje, onaj koji je znao sve i iskusio sve — Gilgameš.</em>" → početak prve knjige u povijesti.</div></div>
    </div>

    <!-- BIBLIJA CITATI -->
    <div class="sec-hdr" data-cit-section="biblija"><div class="sec-line"></div><div class="sec-badge">03 · Biblija — temelji motiva</div><div class="sec-line"></div></div>

    <div class="con">
      <div class="cr" data-q-src="biblija" data-q-text="u početku stvori bog nebo zemlju postanak stvaranje"><div class="ck re">POSTANAK · početak</div><div class="cv">„<em>U početku stvori Bog nebo i zemlju.</em>" → tema postanka, stvaranja, početka.</div></div>
      <div class="cr" data-q-src="biblija" data-q-text="u početku bijaše riječ logos ivan bog jezik svijet"><div class="ck re">IVAN · Riječ</div><div class="cv">„<em>U početku bijaše Riječ i Riječ bijaše u Boga i Riječ bijaše Bog.</em>" → tema Logos, riječ kao bit, jezik i svijet.</div></div>
      <div class="cr" data-q-src="biblija" data-q-text="ispraznost nad ispraznostima sve je ispraznost propovjednik prolaznost vanitas barok"><div class="ck re">PROPOVJEDNIK</div><div class="cv">„<em>Ispraznost nad ispraznostima — sve je ispraznost.</em>" → tema prolaznosti, vanitas (baza baroka).</div></div>
      <div class="cr" data-q-src="biblija" data-q-text="blago krotkima baštiniti zemlju matej blaženstva paralelizam antiteza"><div class="ck re">MATEJ · blaženstva</div><div class="cv">„<em>Blago krotkima jer će baštiniti zemlju.</em>" → paralelizam kao stilski postupak, antiteza.</div></div>
      <div class="cr" data-q-src="biblija" data-q-text="ljubav nikad ne prestaje korinćani pavao himna ljubavi"><div class="ck re">POSLANICA KORINĆANIMA</div><div class="cv">„<em>Ljubav nikad ne prestaje.</em>" → klasik uz temu ljubavi; sv. Pavao, Himna ljubavi.</div></div>
    </div>

    <!-- RIM CITATI -->
    <div class="sec-hdr" data-cit-section="rim"><div class="sec-line"></div><div class="sec-badge">04 · Rim — latinski klasici</div><div class="sec-line"></div></div>

    <div class="con">
      <div class="cr" data-q-src="rim" data-q-text="arma virumque cano oružje pjevam junaka vergilije eneida ep uvod"><div class="ck br">VERGILIJE · Eneida</div><div class="cv">„<em>Arma virumque cano…</em>" („Oružje pjevam i junaka…") → klasika epa, uvodni stih Eneide.</div></div>
      <div class="cr" data-q-src="rim" data-q-text="carpe diem ugrabi dan horacije ode prolaznost hedonizam tempus fugit"><div class="ck go">HORACIJE · Ode</div><div class="cv">„<em>Carpe diem.</em>" (Ugrabi dan.) → tema prolaznosti, hedonizam, tempus fugit.</div></div>
      <div class="cr" data-q-src="rim" data-q-text="aut prodesse aut delectare poučiti zabaviti horacije ars poetica teorija književnosti"><div class="ck go">HORACIJE · Ars poetica</div><div class="cv">„<em>Aut prodesse aut delectare.</em>" (Ili poučiti ili zabaviti.) → teorija književnosti, svrha djela.</div></div>
      <div class="cr" data-q-src="rim" data-q-text="in nova fert animus mutatas dicere formas corpora ovidije metamorfoze preobrazba"><div class="ck pa">OVIDIJE · Metamorfoze</div><div class="cv">„<em>In nova fert animus mutatas dicere formas corpora.</em>" („Duh me nosi da pjevam o tijelima pretvorenim u nove oblike.") → tema preobrazbe.</div></div>
    </div>

    <!-- TEMATSKI INDEX -->
    <div class="sec-hdr" data-cit-section="index"><div class="sec-line"></div><div class="sec-badge">05 · Tematski indeks — brzi pristup</div><div class="sec-line"></div></div>

    <div class="prose">Kad znaš temu eseja, znaj odmah gdje tražiti:</div>

    <div class="tbl">
      <table>
        <thead><tr><th>Tema</th><th>Prvi izbor</th><th>Drugi izbor</th></tr></thead>
        <tbody>
          <tr><td><b>Moralna savjest</b></td><td>Antigona Kreontu (nepisani zakoni)</td><td>Blažen. Blago krotkima</td></tr>
          <tr><td><b>Granice ljudske moći</b></td><td>Kor · „čudesnije od čovjeka"</td><td>Propovjednik · ispraznost</td></tr>
          <tr><td><b>Prolaznost (vanitas)</b></td><td>Horacije · Carpe diem</td><td>Propovjednik</td></tr>
          <tr><td><b>Ljubav</b></td><td>Antigona · „nisam rođena da mrzim"</td><td>Sv. Pavao · Himna ljubavi</td></tr>
          <tr><td><b>Junaštvo i čast</b></td><td>Ilijada · „bolje pasti s časti"</td><td>Eneida · Arma virumque</td></tr>
          <tr><td><b>Stvaranje / početak</b></td><td>Postanak · „U početku stvori"</td><td>Ivan · „U početku bijaše Riječ"</td></tr>
          <tr><td><b>Politička vlast / tiranija</b></td><td>Hemon · „nije jednog čovjeka posjed"</td><td>Antigona · Kreontova hybris</td></tr>
        </tbody>
      </table>
    </div>

    <div class="nav-row">
      <span class="nb" onclick="sw(2)">← Esej alat</span>
      <span class="nb primary" onclick="sw(4)">📚 Pojmovnik →</span>
    </div>
  </div>
  <!-- ════════════════════════
       TAB 4 · POJMOVNIK
       ════════════════════════ -->
  <div class="layer" id="l4" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">35 pojmova</span>
      <span class="pill p-go">teorija knjiž.</span>
      <span class="pill p-r">12 bodova</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">📚 Pojmovnik — teorija književnosti iz antike</div>
      <div class="box-int-txt">
        Visoka vjerojatnost pojavljivanja u <strong>12 bodova teorije i povijesti književnosti</strong> te u zadacima čitanja književnog teksta. Pretraži po riječi ili kategoriji.
      </div>
    </div>

    <!-- SEARCH -->
    <div style="margin:16px 0 22px">
      <label for="pojm-search" class="sr-only">Pretraži pojmove</label>
      <input type="text" id="pojm-search" aria-label="Pretraži pojmove" placeholder="🔍 Pretraži pojmove (npr. hybris, heksametar, parabola...)" style="width:100%;padding:14px 18px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3);color:var(--t1);font-family:var(--serif);font-size:14.5px;outline:none;transition:border-color .2s" onfocus="this.style.borderColor='var(--bd-br)'" onblur="this.style.borderColor='var(--bdm)'">
    </div>

    <!-- CATEGORY FILTERS -->
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:18px" id="pojm-filters">
      <button class="pojm-filter on" data-cat="all">Sve</button>
      <button class="pojm-filter" data-cat="ep">Ep</button>
      <button class="pojm-filter" data-cat="drama">Drama</button>
      <button class="pojm-filter" data-cat="lirika">Lirika</button>
      <button class="pojm-filter" data-cat="biblija">Biblija</button>
      <button class="pojm-filter" data-cat="stil">Stil</button>
      <button class="pojm-filter" data-cat="pismo">Pismo</button>
    </div>

    <style>
      .pojm-filter{padding:6px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;background:var(--card);color:var(--t2);border:1px solid var(--bdm);border-radius:var(--r1);cursor:pointer;transition:all .18s}
      .pojm-filter:hover{color:var(--t1);border-color:var(--bd-br)}
      .pojm-filter.on{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border-color:var(--bronze);font-weight:700}
      .pojm-count{font-family:var(--mono);font-size:11px;color:var(--t3);margin-bottom:12px}
      .pojm-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px}
      .pojm{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px 16px;transition:all .2s;position:relative}
      .pojm:hover{border-color:var(--bd-br);transform:translateY(-2px);box-shadow:0 6px 20px rgba(220,50,47,.08)}
      .pojm-cat{position:absolute;top:12px;right:12px;font-family:var(--mono);font-size:8px;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3);padding:2px 7px;background:var(--ele);border-radius:var(--r1)}
      .pojm-word{font-family:var(--display);font-size:15px;font-weight:600;color:var(--bronze-l);letter-spacing:.5px;margin-bottom:6px;padding-right:70px}
      .pojm-def{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.65}
      .pojm.hidden{display:none}
    </style>

    <div class="pojm-count" id="pojm-count">35 pojmova prikazano</div>

    <div class="pojm-grid" id="pojm-grid">
      <div class="pojm" data-cat="ep" data-kw="ep epopeja"><span class="pojm-cat">ep</span><div class="pojm-word">Ep</div><div class="pojm-def">Duga pripovjedna pjesma u stihu o junacima i važnim događajima. Najstariji: Ep o Gilgamešu.</div></div>
      <div class="pojm" data-cat="ep" data-kw="epopeja"><span class="pojm-cat">ep</span><div class="pojm-word">Epopeja</div><div class="pojm-def">Sinonim za ep — veliko pripovjedno djelo u stihu.</div></div>
      <div class="pojm" data-cat="ep" data-kw="heksametar stih"><span class="pojm-cat">ep</span><div class="pojm-word">Heksametar</div><div class="pojm-def">Stih od šest stopa. Standard antičke epike — Homer, Vergilije.</div></div>
      <div class="pojm" data-cat="ep" data-kw="invokacija muza"><span class="pojm-cat">ep</span><div class="pojm-word">Invokacija</div><div class="pojm-def">Zaziv muze na početku epa. „Srdžbu mi, boginjo, pjevaj…"</div></div>
      <div class="pojm" data-cat="ep" data-kw="epiteton epitet ornans"><span class="pojm-cat">ep</span><div class="pojm-word">Epiteton ornans</div><div class="pojm-def">Ukrasni, ustaljeni pridjev uz imenicu: „brzonogi Ahilej", „sivooki Atena".</div></div>
      <div class="pojm" data-cat="stil" data-kw="in medias res"><span class="pojm-cat">stil</span><div class="pojm-word">In medias res</div><div class="pojm-def">„Usred stvari" — radnja počinje u središtu, prethodno dolazi kao flashback.</div></div>
      <div class="pojm" data-cat="drama" data-kw="tragedija"><span class="pojm-cat">drama</span><div class="pojm-word">Tragedija</div><div class="pojm-def">Dramska vrsta — pad junaka visokog staleža zbog sudbine ili vlastite greške.</div></div>
      <div class="pojm" data-cat="drama" data-kw="katarza proces pročišćenje"><span class="pojm-cat">drama</span><div class="pojm-word">Katarza</div><div class="pojm-def">Pročišćenje koje publika doživljava gledajući tragediju. Aristotelov pojam.</div></div>
      <div class="pojm" data-cat="drama" data-kw="hybris oholost"><span class="pojm-cat">drama</span><div class="pojm-word">Hybris</div><div class="pojm-def">Bahata oholost, prekoračenje granica. Glavni uzrok tragičkog pada.</div></div>
      <div class="pojm" data-cat="drama" data-kw="hamartia greška"><span class="pojm-cat">drama</span><div class="pojm-word">Hamartia</div><div class="pojm-def">Tragička krivnja/greška. Junak pada zbog vlastite pogreške, ne slučajnosti.</div></div>
      <div class="pojm" data-cat="drama" data-kw="peripetija obrat"><span class="pojm-cat">drama</span><div class="pojm-word">Peripetija</div><div class="pojm-def">Nagli obrat u radnji — od sreće u nesreću ili obrnuto.</div></div>
      <div class="pojm" data-cat="drama" data-kw="anagnorizis prepoznavanje"><span class="pojm-cat">drama</span><div class="pojm-word">Anagnorizis</div><div class="pojm-def">Prepoznavanje, otkriće istine. Često vezano uz peripetiju.</div></div>
      <div class="pojm" data-cat="drama" data-kw="deus ex machina"><span class="pojm-cat">drama</span><div class="pojm-word">Deus ex machina</div><div class="pojm-def">„Bog iz stroja" — rješenje silom izvana. Kritiziran kao slabost drame.</div></div>
      <div class="pojm" data-cat="drama" data-kw="kor zbor"><span class="pojm-cat">drama</span><div class="pojm-word">Kor (zbor)</div><div class="pojm-def">Kolektivni glas u tragediji — komentira radnju, savjetuje, moralizira.</div></div>
      <div class="pojm" data-cat="drama" data-kw="prolog uvod"><span class="pojm-cat">drama</span><div class="pojm-word">Prolog</div><div class="pojm-def">Uvodni dio tragedije, prije ulaska zbora.</div></div>
      <div class="pojm" data-cat="drama" data-kw="parodos zbor"><span class="pojm-cat">drama</span><div class="pojm-word">Parodos</div><div class="pojm-def">Prvi ulazak zbora na scenu nakon prologa.</div></div>
      <div class="pojm" data-cat="drama" data-kw="stasimon pjesma zbor"><span class="pojm-cat">drama</span><div class="pojm-word">Stasimon</div><div class="pojm-def">Pjesma zbora između epizoda.</div></div>
      <div class="pojm" data-cat="drama" data-kw="eksodos izlazak"><span class="pojm-cat">drama</span><div class="pojm-word">Eksodos</div><div class="pojm-def">Završni dio tragedije — izlazak zbora.</div></div>
      <div class="pojm" data-cat="drama" data-kw="komedija aristofan"><span class="pojm-cat">drama</span><div class="pojm-word">Komedija</div><div class="pojm-def">Dramska vrsta koja završava sretno, ismijava ljudske mane. Aristofan.</div></div>
      <div class="pojm" data-cat="drama" data-kw="mimesis oponašanje"><span class="pojm-cat">drama</span><div class="pojm-word">Mimesis</div><div class="pojm-def">Oponašanje stvarnosti. Aristotelov pojam — književnost oponaša život.</div></div>
      <div class="pojm" data-cat="drama" data-kw="poetika aristotel"><span class="pojm-cat">drama</span><div class="pojm-word">Poetika</div><div class="pojm-def">Aristotelovo djelo o teoriji književnosti — najutjecajniji tekst o drami ikad.</div></div>
      <div class="pojm" data-cat="drama" data-kw="tri jedinstva"><span class="pojm-cat">drama</span><div class="pojm-word">Tri jedinstva</div><div class="pojm-def">Jedinstvo radnje, vremena (24h) i mjesta. Pravilo klasicističke drame.</div></div>
      <div class="pojm" data-cat="lirika" data-kw="lirika lira"><span class="pojm-cat">lirika</span><div class="pojm-word">Lirika</div><div class="pojm-def">Književna vrsta koja izražava osobne osjećaje. Ime od <em>lire</em> — instrumenta.</div></div>
      <div class="pojm" data-cat="lirika" data-kw="oda svečana"><span class="pojm-cat">lirika</span><div class="pojm-word">Oda</div><div class="pojm-def">Svečana lirska pjesma uzvišenog tona, u čast osobe, događaja ili ideala.</div></div>
      <div class="pojm" data-cat="lirika" data-kw="elegija tužna"><span class="pojm-cat">lirika</span><div class="pojm-word">Elegija</div><div class="pojm-def">Tužna, melankolična lirska pjesma — smrt, rastanak, izgubljena ljubav.</div></div>
      <div class="pojm" data-cat="lirika" data-kw="himna pohvalna"><span class="pojm-cat">lirika</span><div class="pojm-word">Himna</div><div class="pojm-def">Svečana, pohvalna pjesma — obično bogu ili domovini.</div></div>
      <div class="pojm" data-cat="biblija" data-kw="parabola priča"><span class="pojm-cat">biblija</span><div class="pojm-word">Parabola</div><div class="pojm-def">Alegorijska priča s moralnom poukom. Tipično za Novi zavjet.</div></div>
      <div class="pojm" data-cat="biblija" data-kw="psalam religijska"><span class="pojm-cat">biblija</span><div class="pojm-word">Psalam</div><div class="pojm-def">Religijska lirska pjesma. 150 psalama u Starom zavjetu.</div></div>
      <div class="pojm" data-cat="biblija" data-kw="evanđelje evandjelje"><span class="pojm-cat">biblija</span><div class="pojm-word">Evanđelje</div><div class="pojm-def">„Radosna vijest" — četiri knjige o Isusu: Matej, Marko, Luka, Ivan.</div></div>
      <div class="pojm" data-cat="biblija" data-kw="apokalipsa otkrivenje"><span class="pojm-cat">biblija</span><div class="pojm-word">Apokalipsa</div><div class="pojm-def">Proročka proza o kraju svijeta, puna simbola. Zadnja knjiga N. zavjeta.</div></div>
      <div class="pojm" data-cat="stil" data-kw="paralelizam ponavljanje"><span class="pojm-cat">stil</span><div class="pojm-word">Paralelizam</div><div class="pojm-def">Ponavljanje iste misli drugim riječima u susjednim stihovima. Tipično za psalme.</div></div>
      <div class="pojm" data-cat="stil" data-kw="antiteza suprotnost"><span class="pojm-cat">stil</span><div class="pojm-word">Antiteza</div><div class="pojm-def">Suprotstavljanje pojmova: „tko se uzvisi, bit će ponižen".</div></div>
      <div class="pojm" data-cat="pismo" data-kw="klinasto pismo sumer"><span class="pojm-cat">pismo</span><div class="pojm-word">Klinasto pismo</div><div class="pojm-def">Prvo pismo u povijesti, oko 3200. pr. Kr., Mezopotamija.</div></div>
      <div class="pojm" data-cat="pismo" data-kw="hijeroglif egipat"><span class="pojm-cat">pismo</span><div class="pojm-word">Hijeroglif</div><div class="pojm-def">Egipatsko „sveto pismo". Slikovni znakovi + fonetski simboli.</div></div>
      <div class="pojm" data-cat="pismo" data-kw="papirus"><span class="pojm-cat">pismo</span><div class="pojm-word">Papirus</div><div class="pojm-def">Egipatski materijal za pisanje — od biljke papirusa. Preteča papira.</div></div>
    </div>

    <div class="nav-row">
      <span class="nb" onclick="sw(3)">← Citatnik</span>
      <span class="nb primary" onclick="sw(5)">⚡ Drill →</span>
    </div>
  </div>
  <!-- ════════════════════════
       TAB 5 · DRILL
       ════════════════════════ -->
  <div class="layer" id="l5" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">flashcards</span>
      <span class="pill p-go">spari</span>
      <span class="pill p-r">brzo učenje</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">⚡ Drill — aktivno učenje</div>
      <div class="box-int-txt">
        <strong>Flashcards</strong> za pojmove + <strong>matching</strong> (djelo → autor). Brže od pasivnog čitanja, direktno priprema za teoriju književnosti i 12 bodova.
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
            <div class="fc-cat" id="fc-cat-f">DRAMA</div>
            <div class="fc-term" id="fc-term">Katarza</div>
            <div class="fc-hint">Klikni za okretanje ↻</div>
          </div>
          <div class="fc-back">
            <div class="fc-cat" id="fc-cat-b">DEFINICIJA</div>
            <div class="fc-def" id="fc-def">Pročišćenje koje publika doživljava gledajući tragediju. Aristotelov pojam.</div>
          </div>
        </div>
      </div>
      <div class="fc-controls">
        <button class="fcb dont" onclick="fcMark(0)">✗ Ne znam</button>
        <button class="fcb know" onclick="fcMark(1)">✓ Znam</button>
        <button class="fcb" onclick="fcSkip()">Preskoči →</button>
        <button class="fcb primary" onclick="fcReset()">🔁 Reset</button>
      </div>
      <div class="fc-stats"><span>točno: <b id="fc-right">0</b></span><span>krivo: <i id="fc-wrong">0</i></span></div>
    </div>

    <!-- MATCHING -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · Spari · djelo → autor</div><div class="sec-line"></div></div>

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
          <div class="pro-gate-label">9 <b>pair matching</b> vježbi — djelo → autor · pojam → epoha · stil → autor</div>
          <a class="pro-gate-btn" href="/pricing?ctx=drill_matching_h01">Otključaj — 9,99€/mj</a>
          <div class="pro-gate-meta">Otkaži bilo kad · Free trial 7 dana</div>
        </div>
      </div>
    </div>

    <div class="nav-row">
      <span class="nb" onclick="sw(4)">← Pojmovnik</span>
      <span class="nb primary" onclick="sw(6)">🧠 Kviz →</span>
    </div>
  </div>
  <!-- ════════════════════════
       TAB 6 · KVIZ
       ════════════════════════ -->
  <div class="layer" id="l6" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">20 pitanja</span>
      <span class="pill p-go">višestruki izbor</span>
      <span class="pill p-r">bez limita vremena</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">🧠 Kviz — testiraj znanje iz cijelog poglavlja</div>
      <div class="box-int-txt">
        Format identičan maturi — zadaci višestrukog izbora s 4 odgovora. Pokriva sve dijelove: pismo, Biblija, Homer, drama, Antigona, Rim. Na kraju dobivaš ocjenu + pregled promašenih pitanja.
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
      <span class="nb" onclick="sw(5)">← Drill</span>
      <span class="nb primary" onclick="sw(7)">✅ Checkpoint →</span>
    </div>
  </div>

  <!-- ════════════════════════
       TAB 7 · CHECKPOINT
       ════════════════════════ -->
  <div class="layer" id="l7" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-g">završetak poglavlja</span>
      <span class="pill p-go">self-check</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">✅ Provjera — što zaista znaš?</div>
      <div class="box-int-txt">
        Označi stavke koje si <em>stvarno</em> usvojio. Ne žuri — ako nešto nisi siguran, vrati se na odgovarajući tab. <strong>Cilj: svih 10 označeno prije prelaska na H02.</strong>
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


/* WC-BOX (auto-injected) */
.wc-box{background:var(--card,#1a1010);border:1px solid var(--bdm,#2c1f1f);border-radius:14px;padding:20px;margin:18px 0}
.wc-hdr{margin-bottom:14px}
.wc-ttl{font-family:var(--serif,'Fraunces',serif);font-size:15px;font-weight:700;color:var(--t1,#f4ede5)}
.wc-textarea{width:100%;min-height:280px;padding:14px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:10px;color:var(--t1,#f4ede5);font-family:var(--mono,monospace);font-size:13px;line-height:1.7;resize:vertical;box-sizing:border-box}
.wc-textarea:focus{outline:none;border-color:var(--gold,#e9b446)}
.wc-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:10px;margin-top:12px}
.wc-stat{padding:10px 12px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:8px;text-align:center}
.wc-stat-num{font-family:var(--mono,monospace);font-size:18px;font-weight:800;color:var(--t1,#f4ede5)}
.wc-stat-lbl{font-family:var(--mono,monospace);font-size:9px;color:var(--t3,#8a7a6e);letter-spacing:1px;margin-top:2px}
.wc-stat.ok .wc-stat-num{color:var(--green,#50c878)}
.wc-stat.critical .wc-stat-num{color:var(--red,#e05252)}
.wc-progress{margin-top:14px}
.wc-progress-bar-wrap{height:8px;background:var(--inp,#0F0605);border-radius:4px;overflow:hidden;border:1px solid var(--bdl,#2c1f1f)}
.wc-progress-bar{height:100%;background:linear-gradient(90deg,var(--blue,#4a90d9),var(--gold,#e9b446));transition:width .3s}
.wc-progress.pass .wc-progress-bar{background:var(--green,#50c878)}
.wc-progress-lbl{font-family:var(--mono,monospace);font-size:11px;color:var(--t3,#8a7a6e);margin-top:6px;text-align:center;letter-spacing:1px}
.wc-actions{display:flex;gap:8px;margin-top:12px}
.wc-btn{flex:1;padding:8px 14px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:8px;color:var(--t2,#c5b8aa);font-family:var(--mono,monospace);font-size:11px;letter-spacing:0.8px;cursor:pointer;transition:all .15s}
.wc-btn:hover{border-color:var(--gold,#e9b446);color:var(--gold,#e9b446)}
.wc-hint{margin-top:12px;padding:10px 12px;background:var(--inp,#0F0605);border-radius:8px;font-size:12px;color:var(--t2,#c5b8aa);line-height:1.5}

  </style>

    <div class="cp-summary">
      <div class="cp-sum-txt">Napredak · <b id="cp-done">0</b> / 10 stavki</div>
        <div class="cp-actions" style="margin-top:18px;display:flex;gap:10px;justify-content:center">
          <button type="button" class="fcb" onclick="cpReset()" style="padding:8px 16px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:8px;color:var(--t2,#c5b8aa);font-family:var(--mono,monospace);font-size:11px;letter-spacing:0.8px;cursor:pointer">↩ Resetiraj</button>
          <button type="button" class="fcb primary" onclick="sw(6)" style="padding:8px 16px;background:var(--gold,#e9b446);color:#0F0605;border:none;border-radius:8px;font-family:var(--mono,monospace);font-size:11px;font-weight:800;letter-spacing:0.8px;cursor:pointer">🧠 Idi na kviz</button>
        </div>

      <div class="cp-sum-pct" id="cp-pct">0%</div>
    </div>

    <div class="pro-gate" data-feature="checkpoint-tracking">
      <div class="cp-grid" id="cp-grid">
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Znam tko je napisao <b>Antigonu</b> i kada</div><span class="cp-hint">Antigona</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Mogu ispričati <b>radnju Antigone u 5 rečenica</b></div><span class="cp-hint">Antigona</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Razumijem <b>centralni sukob</b> — dva zakona</div><span class="cp-hint">Antigona</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Znam razliku između <b>hybrisa, hamartije i katarze</b></div><span class="cp-hint">Pojmovnik</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Imam <b>barem 2 teze</b> za esej o Antigoni</div><span class="cp-hint">Esej</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Znam <b>3 citata iz Antigone</b> napamet</div><span class="cp-hint">Citatnik</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Znam što su <b>Ilijada i Odiseja</b> i njihovu strukturu</div><span class="cp-hint">Teorija</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Prepoznajem <b>biblijske stilske postupke</b> (paralelizam, parabola)</div><span class="cp-hint">Teorija</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Znam <b>Vergilija, Horacija i Ovidija</b> i njihova glavna djela</div><span class="cp-hint">Teorija</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Kviz <b>prošao s 75%+</b></div><span class="cp-hint">Kviz</span></div>
    </div>
      <div class="pro-gate-overlay">
        <div class="pro-gate-fade"></div>
        <div class="pro-gate-cta">
          <div class="pro-gate-label"><b>Checkpoint tracking</b> kroz sva 28+22 poglavlja · napredak se sprema · graf spremnosti za maturu</div>
          <a class="pro-gate-btn" href="/pricing?ctx=checkpoint_h01">Otključaj — 9,99€/mj</a>
          <div class="pro-gate-meta">Otkaži bilo kad · Free trial 7 dana</div>
        </div>
      </div>
    </div>

    <div class="cp-final" id="cp-final">
      <div class="cp-final-ico">🎉</div>
      <div class="cp-final-title">H01 ZAVRŠENO!</div>
      <div class="cp-final-msg">
        Savladao si temelje civilizacije i antičku književnost. Spreman si za srednji vijek — hrvatsku književnost od Bašćanske ploče do Marulića.
      </div>
      <div class="cp-actions">
        <button class="fcb primary">H02 · Srednji vijek →</button>
        <button class="fcb" onclick="sw(0)">🔁 Ponovi H01</button>
      </div>

      <!-- PDF / PRINT EXPORT — offline ponavljanje pred ispit -->
      <div class="pdf-export">
        <div class="pdf-export-ico">📄</div>
        <div class="pdf-export-body">
          <div class="pdf-export-ttl">Preuzmi cijelu skriptu kao PDF</div>
          <div class="pdf-export-txt">Sve što si prošao — Teorija, Antigona, Pojmovnik, Kviz — u jednom dokumentu. <strong>Idealno za ponavljanje pred ispit</strong> ili ispis na papir.</div>
          <div class="pdf-actions">
            <button type="button" class="pdf-export-btn pdf-primary" id="pdf-print-btn" onclick="printFullScript()">
              🖨 Otvori za ispis / Spremi kao PDF
            </button>
            <button type="button" class="pdf-export-btn pdf-secondary" id="pdf-export-btn" onclick="generatePDF()">
              <span id="pdf-btn-label">📥 Direktan PDF</span> <span class="pdf-beta">BETA</span>
            </button>
          </div>
          <div class="pdf-export-hint">
            <strong>Preporučeno:</strong> klikni "Otvori za ispis" → u dijalogu odaberi <em>"Save as PDF"</em> kao printer.<br>
            Direktan PDF je eksperimentalni i može zakazati zbog kompleksnih grafova.
          </div>
        </div>
      </div>

      <!-- UPSELL: Discere nakon završenog poglavlja -->
      <div class="upsell" style="margin-top:24px;text-align:left" data-upsell-ctx="checkpoint_finale" data-upsell-target="discere" data-upsell-id="cp_discere">
        <div class="upsell-ico wordmark">Discere</div>
        <div class="upsell-body">
          <div class="upsell-title">Simulator mature <span class="upsell-badge standard">STANDARD</span> <span class="upsell-badge" style="color:var(--t3);border-color:var(--bdm);background:transparent;font-size:8px">9,99 €/mj · uklj. u PRO</span></div>
          <div class="upsell-desc"><strong>Završio si H01 — sada testiraj u stvarnim uvjetima.</strong> Antigona i antika pojavile su se na 14 prošlih matura (2005–2024). Riješi ih s timerom i automatskim ocjenjivanjem.</div>
        </div>
        <a href="/discere?subject=hrvatski&topic=antika&ctx=h01_checkpoint" class="upsell-cta" onclick="track('upsell_click',{ctx:'checkpoint_finale',target:'discere'},'conversion')">Isprobaj →</a>
      </div>
    </div>

    <div class="nav-row" style="margin-top:30px">
      <span class="nb" onclick="sw(6)">← Kviz</span>
      <span class="nb off">H02 (uskoro) →</span>
    </div>
  </div>

  <!-- ══ MODULE FOOTER (v3.6) ══ -->
  <footer class="mod-foot" role="contentinfo">
    <div class="foot-line"><b>Maturiraj.hr</b> · Hrvatski · H01 Temelji civilizacije i antika</div>
    <div class="foot-line">Autorski sadržaj · Usklađeno s <a href="https://www.ncvvo.hr/ispitni-katalozi-za-drzavnu-maturu-2025-2026/" target="_blank" rel="noopener noreferrer" onclick="track('ext_link_click',{target:'ncvvo_footer'},'engagement')">NCVVO</a> ispitnim katalogom · Ažurirano <time datetime="2026-04-18">travanj 2026.</time></div>
    <div class="foot-line foot-feedback">
      <span class="foot-fb-q">Imaš prijedlog ili si uočio grešku?</span>
      <button type="button" class="foot-fb-btn" onclick="openFeedbackModal()">📝 Prijavi →</button>
      <span class="foot-fb-or">ili e-mail</span>
      <a href="mailto:maturirajgreske@gmail.com?subject=H01%20%E2%80%94%20prijava%20gre%C5%A1ke&amp;body=Poglavlje%3A%20H01%20Temelji%20civilizacije%20i%20antika%0ATab%3A%20%0A%0AOpis%3A%0A" class="foot-fb-mail" onclick="track('ext_link_click',{target:'mailto_feedback'},'engagement')">maturirajgreske@gmail.com</a>
    </div>
  </footer>

</div>
</main>
</div><!-- /shell -->

<script>
/* ═══════════════════════════════════════════
   HRVATSKI H01 — JS
   Tabs · Pojmovnik search · Flashcards · Matching · Kviz
   Email capture · Back-to-top · Event tracking
   ═══════════════════════════════════════════ */

/* ══ SUPABASE CONFIG ══
   ZAMIJENITI prije deploya u production:
   1. SUPABASE_URL      → tvoj Supabase project URL
   2. SUPABASE_ANON_KEY → anon public key iz Settings > API

   Za lokalni test — ostavi placeholder, modal/track će raditi u offline modu.
═════════════════════════════════════════════ */
var SUPABASE_URL = 'https://your-project.supabase.co';
var SUPABASE_ANON_KEY = 'your-anon-key-here';

var CURRENT_CHAPTER = {
  subject: 'hrvatski',
  code: 'h01',
  title: 'Temelji civilizacije i antika'
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
   Kad budeš imao stvarne brojeve, zamijeni _renderSocialProof.
═════════════════════════════════════════════ */
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
      <div class="sp-item">🇭🇷 <b>Besplatno</b> za sve maturante</div>
      <div class="sp-divider"></div>
      <div class="sp-item">📚 Usklađeno s <b>NCVVO</b> katalogom</div>
      <div class="sp-divider"></div>
      <div class="sp-item urgency">⏰ Do mature <b>\${daysToMatura()}</b> dana</div>
    \`;
    return;
  }

  // Kad Supabase stigne — realni brojevi
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

/* ══ EVENT TRACKING ══ */
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

/* ══ SUPABASE SIGNUP ══ */
function supabaseSignup(email, source, chapterCode, meta){
  // Client-only offline fallback: ako URL još nije postavljen, simuliraj success
  if(SUPABASE_URL.indexOf('your-project')>=0){
    return new Promise(function(resolve){
      setTimeout(function(){
        resolve({success:true, already_signed:false, message:'Prijavljen! (Offline način — email nije poslan)'});
      }, 700);
    });
  }
  return fetch(SUPABASE_URL+'/rest/v1/rpc/signup_newsletter',{
    method:'POST',
    headers:{
      'apikey':SUPABASE_ANON_KEY,
      'Authorization':'Bearer '+SUPABASE_ANON_KEY,
      'Content-Type':'application/json',
      'Prefer':'return=representation'
    },
    body:JSON.stringify({
      p_email:email,
      p_source:source,
      p_subject:CURRENT_CHAPTER.subject,
      p_chapter_code:chapterCode||null,
      p_meta:meta||{}
    })
  }).then(function(r){return r.json()}).catch(function(err){
    console.error('Supabase signup error:',err);
    return {success:false, error:'network', message:'Greška u mreži — pokušaj ponovo.'};
  });
}

/* ══ MODAL ══ */
var MODAL_CONTEXT = {source:'other', chapter_code:null};

function openModal(config){
  MODAL_CONTEXT.source = config.source || 'other';
  MODAL_CONTEXT.chapter_code = config.chapter_code || null;
  if(config.ico) document.getElementById('modal-ico').textContent=config.ico;
  if(config.eye) document.getElementById('modal-eye').textContent=config.eye;
  if(config.title) document.getElementById('modal-title').textContent=config.title;
  if(config.desc) document.getElementById('modal-desc').innerHTML=config.desc;
  if(config.preview_title && config.preview_body){
    var p=document.getElementById('modal-preview');
    p.innerHTML='<strong>'+config.preview_title+'</strong>'+config.preview_body;
    p.style.display='block';
  } else {
    document.getElementById('modal-preview').style.display='none';
  }
  document.getElementById('modal-email').value='';
  document.getElementById('modal-submit').disabled=false;
  document.getElementById('modal-submit').textContent='Javi mi →';
  document.getElementById('modal-msg').className='modal-msg';
  document.getElementById('modal-form').style.display='flex';

  var bd=document.getElementById('modal-backdrop');
  bd.classList.add('show');
  setTimeout(function(){document.getElementById('modal-email').focus()},100);

  track('modal_open', {source: MODAL_CONTEXT.source, chapter_code: MODAL_CONTEXT.chapter_code}, 'engagement');
}

function closeModal(){
  document.getElementById('modal-backdrop').classList.remove('show');
}

function submitSignup(ev){
  ev.preventDefault();
  var email=document.getElementById('modal-email').value.trim().toLowerCase();
  var btn=document.getElementById('modal-submit');
  var msg=document.getElementById('modal-msg');

  // Validate
  var rx=/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$/i;
  if(!rx.test(email)){
    msg.className='modal-msg show error';
    msg.textContent='✗ E-mail adresa nije valjana.';
    return false;
  }

  btn.disabled=true;
  btn.textContent='Šaljem...';
  msg.className='modal-msg';

  supabaseSignup(email, MODAL_CONTEXT.source, MODAL_CONTEXT.chapter_code, {
    current_chapter:CURRENT_CHAPTER.code,
    ts:new Date().toISOString()
  }).then(function(res){
    if(res.success){
      msg.className='modal-msg show success';
      msg.textContent = res.already_signed
        ? '✓ Već si prijavljen — javit ćemo ti se!'
        : '✓ Prijavljen! Poslat ćemo ti e-mail čim bude spremno.';
      document.getElementById('modal-form').style.display='none';
      lsSave('mt.hrv.newsletter_signed', true);
      track('signup_success', {
        source: MODAL_CONTEXT.source,
        chapter_code: MODAL_CONTEXT.chapter_code,
        already_signed: res.already_signed || false
      }, 'conversion');
      soundOk();
      setTimeout(closeModal, 2200);
    } else {
      msg.className='modal-msg show error';
      msg.textContent = '✗ '+(res.message||'Nešto je pošlo krivo. Pokušaj ponovo.');
      btn.disabled=false;
      btn.textContent='Javi mi →';
      track('signup_fail', {
        source: MODAL_CONTEXT.source,
        error: res.error || 'unknown'
      }, 'error');
      soundNg();
    }
  });

  return false;
}

/* ══ FULL SCRIPT PRINT (preporučeno, 100% pouzdano) ══
   Koristi postojeći @media print stylesheet — sve tabove vidljive, svijetla pozadina.
   Korisnik u print dijalogu može odabrati "Save as PDF" kao printer. */
function printFullScript(){
  track('full_print_start', {chapter: CURRENT_CHAPTER.code}, 'engagement');
  // Mali delay za feedback prije print dialoga
  var btn = document.getElementById('pdf-print-btn');
  if(btn){
    var originalText = btn.textContent;
    btn.textContent = '🖨 Otvaram dijalog...';
    btn.disabled = true;
    setTimeout(function(){
      window.print();
      setTimeout(function(){
        btn.textContent = originalText;
        btn.disabled = false;
      }, 500);
    }, 100);
  } else {
    window.print();
  }
}

/* ══ CHEAT SHEET: ISOLATED PRINT ══
   Klik na "Ispiši" u cheat kartici → printa SAMO cheat sheet, ne cijelu skriptu */
function printCheatSheet(){
  document.body.classList.add('print-cheat-only');
  // Browser print dialog je sinkron za većinu, ali Safari može biti async — pa dvostruka safety
  setTimeout(function(){
    window.print();
    // Cleanup nakon print dialoga (i ako korisnik cancela)
    setTimeout(function(){
      document.body.classList.remove('print-cheat-only');
    }, 500);
  }, 50);
  track('cheat_sheet_print', {chapter: CURRENT_CHAPTER.code}, 'engagement');
}
// afterprint event je čišćiji način za cleanup
if(typeof window !== 'undefined'){
  window.addEventListener('afterprint', function(){
    document.body.classList.remove('print-cheat-only');
  });
}

/* ══ MINI-DIJAGNOSTIKA "Mogu li ovo na maturi?" ══
   5 strateški odabranih pitanja koja pokrivaju širok spektar H01 gradiva.
   Cilj: korisnik za 60s zna gdje stoji prije nego krene učiti. */
var DIAG_QUESTIONS = [
  {
    q: "Koje je djelo Sofoklo napisao i koje je ispitno djelo za maturu 2025/2026?",
    opts: ["Medeja", "Antigona", "Edip na Kolonu", "Okovani Prometej"],
    correct: 1,
    topic: "Antigona — autor"
  },
  {
    q: "Što je hybris kod Kreonta?",
    opts: [
      "Strah od bogova koji ga paralizira",
      "Ljubav prema državi koja ga zaslijepljuje",
      "Oholost — uvjerenje da njegova riječ natkriljuje božje zakone",
      "Tragička greška proizašla iz neznanja"
    ],
    correct: 2,
    topic: "Hybris vs hamartia"
  },
  {
    q: "Što je katarza prema Aristotelu?",
    opts: [
      "Vrhunac dramske radnje s preokretom",
      "Pročišćenje publike kroz strah i sažaljenje",
      "Zbor koji komentira događaje",
      "Trenutak kada junak prepoznaje istinu"
    ],
    correct: 1,
    topic: "Aristotelova Poetika"
  },
  {
    q: "Koji stih je standard antičke epike (Homer, Vergilije)?",
    opts: ["Pentametar", "Heksametar", "Dvanaesterac", "Slobodni stih"],
    correct: 1,
    topic: "Heksametar"
  },
  {
    q: "Koji je centralni sukob u Antigoni?",
    opts: [
      "Otac protiv sina — Kreont protiv Hemona",
      "Ljubav protiv dužnosti — Antigona protiv Hemona",
      "Božji zakon protiv ljudskog zakona — Antigona protiv Kreonta",
      "Sloboda protiv tiranije — narod protiv Kreonta"
    ],
    correct: 2,
    topic: "Centralni sukob — dva zakona"
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
  document.getElementById('diag').setAttribute('data-state', 'quiz');
  diagRender();
  track('diag_start', {chapter: CURRENT_CHAPTER.code}, 'engagement');
}

function diagSkip(){
  document.getElementById('diag').setAttribute('data-state', 'dismissed');
  try{ sessionStorage.setItem('mt.hrv.h01.diag', 'skipped') }catch(e){}
  track('diag_skip', {chapter: CURRENT_CHAPTER.code}, 'engagement');
}

function diagDismiss(){
  document.getElementById('diag').setAttribute('data-state', 'dismissed');
  try{
    sessionStorage.setItem('mt.hrv.h01.diag', JSON.stringify({
      done: true,
      score: diagState.correct,
      ts: Date.now()
    }));
  }catch(e){}
}

function diagRestart(){
  diagStart();
}

function diagRender(){
  var q = DIAG_QUESTIONS[diagState.idx];
  if(!q) return diagFinish();
  var qEl = document.getElementById('diag-q');
  var optsEl = document.getElementById('diag-opts');
  var curEl = document.getElementById('diag-cur');
  var fillEl = document.getElementById('diag-fill');
  if(qEl) qEl.textContent = q.q;
  if(curEl) curEl.textContent = (diagState.idx + 1);
  if(fillEl) fillEl.style.width = (((diagState.idx + 1) / DIAG_QUESTIONS.length) * 100) + '%';
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
  var msgEl = document.getElementById('diag-msg');
  var recEl = document.getElementById('diag-rec');
  var corEl = document.getElementById('diag-correct');
  if(corEl) corEl.textContent = n;

  // Personalizirana poruka i preporuka
  var msg, rec;
  if(n === 5){
    msg = '🏆 Već vladaš H01 — bravo!';
    rec = 'Tvoj fokus: <b>esej alat</b> i <b>citatnik</b>. Pređi na simulaciju u <a href="/discere?subject=hrvatski&topic=antika&ctx=h01_diag_top" onclick="track(\\'upsell_click\\',{ctx:\\'diag_top_score\\',target:\\'discere\\'},\\'conversion\\')">Discere simulatoru</a> da provjeriš pod uvjetima ispita.';
  } else if(n === 4){
    msg = '🎯 Odlično — solidne osnove.';
    rec = 'Imaš većinu, ali jedan rupica. Preporučujemo: <b>Antigona deep-dive</b> + <b>Pojmovnik</b> kao revizija. Preskoči duga čitanja, idi direktno na <b>Citatnik</b> i <b>Drill</b>.';
  } else if(n === 3){
    msg = '👍 Dobre osnove — treba malo više rada.';
    rec = 'Imaš osnovni pregled, ali ti fali sigurnost u detaljima. Plan: <b>(1)</b> proradi cijelu Teoriju, <b>(2)</b> Antigona deep-dive, <b>(3)</b> Drill flashcards 2× prije Kviza.';
  } else if(n === 2){
    msg = '📚 Tu smo da ti pomognemo — krenimo od početka.';
    rec = 'Ne brini — zato si tu. Idi <b>tab po tab redom</b> (Teorija → Antigona → Esej alat). Ne preskači. Završi s <b>Drillom i Kvizom</b> kao provjera.';
  } else {
    msg = '🌱 Početna točka — sve je pred tobom.';
    rec = 'Antika je velik segment, ali strukturiran je. Prati redoslijed tabova, ne žuri. <b>Cilj #1:</b> razumjeti Antigonin sukob (sekcija 04 u Antigona tabu). Kad to imaš, sve ostalo dolazi prirodno.';
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
    var s = sessionStorage.getItem('mt.hrv.h01.diag');
    if(s){
      document.getElementById('diag').setAttribute('data-state', 'dismissed');
    }
  }catch(e){}
}

/* ══ PDF EXPORT (v3.6.1) ══
   Lazy-loadan html2pdf.js (CDN). Ako library load ili PDF generacija zakaže,
   fallbackamo na window.print() koji koristi naš print stylesheet. */

var _html2pdfLoading = false;
var _html2pdfReady = (typeof html2pdf !== 'undefined');

function _loadHtml2Pdf(callback){
  if(_html2pdfReady || typeof html2pdf !== 'undefined'){
    _html2pdfReady = true;
    callback(null);
    return;
  }
  if(_html2pdfLoading){
    // Already loading — poll
    var pollAttempts = 0;
    var poll = setInterval(function(){
      pollAttempts++;
      if(typeof html2pdf !== 'undefined'){
        clearInterval(poll);
        _html2pdfReady = true;
        callback(null);
      } else if(pollAttempts > 50){ // 10s max wait
        clearInterval(poll);
        callback(new Error('Library load timeout'));
      }
    }, 200);
    return;
  }
  _html2pdfLoading = true;
  var s = document.createElement('script');
  s.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
  s.async = true;
  s.onload = function(){
    _html2pdfReady = true;
    _html2pdfLoading = false;
    callback(null);
  };
  s.onerror = function(){
    _html2pdfLoading = false;
    callback(new Error('CDN failed to load'));
  };
  document.head.appendChild(s);
}

function _pdfFallbackPrint(reason){
  // Loš path — koristimo browser print kao fallback
  if(reason) console.warn('PDF export fallback to print:', reason);
  var btn = document.getElementById('pdf-export-btn');
  var label = document.getElementById('pdf-btn-label');
  if(label) label.textContent = '🖨 Otvaram dijalog za ispis...';
  setTimeout(function(){
    window.print();
    if(btn) btn.disabled = false;
    if(label) label.textContent = '📥 Preuzmi PDF';
  }, 400);
  track('pdf_fallback_print', {reason: String(reason || 'unknown').substring(0,80)}, 'engagement');
}

function generatePDF(){
  var btn = document.getElementById('pdf-export-btn');
  var label = document.getElementById('pdf-btn-label');
  if(btn) btn.disabled = true;
  if(label) label.textContent = '⏳ Učitavam alat...';

  track('pdf_export_start', {chapter: CURRENT_CHAPTER.code}, 'engagement');

  _loadHtml2Pdf(function(err){
    if(err){
      // CDN failed → use native print
      _pdfFallbackPrint('cdn_load_failed');
      return;
    }
    if(label) label.textContent = '⏳ Generiram PDF... (10-20s)';

    // Pamti trenutno stanje tabova
    var layers = document.querySelectorAll('.layer');
    var originalState = [];
    layers.forEach(function(l, i){
      originalState[i] = {
        hasOn: l.classList.contains('on'),
        display: l.style.display
      };
      l.classList.add('on');
      l.style.display = 'block';
    });

    // Sakrij elemente koji ne idu u PDF
    var hideSelectors = [
      '.sidebar', '.sb-hamburger', '.sb-overlay', '.btt',
      '.tabs', '.upsell', '.reveal-lock', '.countdown', '.social-proof',
      '.restore-banner', '.cit-tools', '.soft-hint', '.frustration',
      '.fc-controls', '.mg-board', '.mg-score', '.drill-stats',
      '.yt-grid', '.svg-tt', '.cp-actions', '.pdf-export',
      '#fb-modal-backdrop', '#modal-backdrop', '.foot-feedback',
      '.nav-row', '#qz-app'
    ];
    var hidden = [];
    hideSelectors.forEach(function(sel){
      document.querySelectorAll(sel).forEach(function(el){
        hidden.push({el: el, display: el.style.display});
        el.style.display = 'none';
      });
    });

    document.body.classList.add('pdf-exporting');

    var restoreState = function(){
      layers.forEach(function(l, i){
        if(!originalState[i].hasOn) l.classList.remove('on');
        l.style.display = originalState[i].display || '';
      });
      hidden.forEach(function(h){ h.el.style.display = h.display });
      document.body.classList.remove('pdf-exporting');
    };

    var targetElement = document.querySelector('.content-wrap') || document.body;

    var opt = {
      margin:       [10, 10, 12, 10],
      filename:     'Maturiraj_Hrvatski_H01_Temelji_civilizacije.pdf',
      image:        {type: 'jpeg', quality: 0.92},
      html2canvas:  {
        scale: 1.3,
        useCORS: false,        // Google Fonts ne podržava CORS za CSS — disable
        allowTaint: true,      // ako resource taintira canvas, pusti — ne baci error
        backgroundColor: '#ffffff',
        logging: false,
        foreignObjectRendering: false,  // SVG <foreignObject> podrška (problematično u Safariju)
        removeContainer: true,
        imageTimeout: 8000,    // 8s timeout za pojedini image (umjesto default 15s)
        ignoreElements: function(el){
          if(!el || !el.tagName) return false;
          var t = el.tagName.toLowerCase();
          // Skip vanjske resource elemente
          if(t === 'iframe' || t === 'video' || t === 'audio' || t === 'embed' || t === 'object') return true;
          // Skip <link> tagove osim print stylesheeta (govori html2canvas da ne fetch-a Google Fonts)
          if(t === 'link' && el.rel === 'stylesheet') return true;
          if(el.classList){
            if(el.classList.contains('svg-tt')) return true;
            if(el.classList.contains('modal-backdrop')) return true;
            if(el.classList.contains('svg-hs-ring')) return true;  // animation može lupiti canvas
            if(el.classList.contains('svg-hint')) return true;
          }
          // Skip ::before/::after pseudo-elementi koji generiraju content (Hero orbs)
          if(el.classList && (el.classList.contains('hero-orb-a') || el.classList.contains('hero-orb-b'))) return true;
          return false;
        }
      },
      jsPDF:        {unit: 'mm', format: 'a4', orientation: 'portrait', compress: true, hotfixes: ['px_scaling']},
      pagebreak:    {mode: ['css', 'legacy'], avoid: ['.cr', '.box-int', '.box-key', '.sc', '.cmp-c', '.yt-card', '.cp-item', '.b20-item']}
    };

    try {
      html2pdf().set(opt).from(targetElement).save().then(function(){
        restoreState();
        if(btn) btn.disabled = false;
        if(label) label.textContent = '✓ Preuzeto!';
        setTimeout(function(){
          if(label) label.textContent = '📥 Preuzmi PDF';
        }, 2400);
        track('pdf_export_success', {chapter: CURRENT_CHAPTER.code}, 'engagement');
        soundOk();
      }).catch(function(genErr){
        console.error('PDF generation failed:', genErr);
        restoreState();
        track('pdf_export_fail', {error: String(genErr).substring(0,100)}, 'error');
        // Fallback: native print
        _pdfFallbackPrint('generation_error');
      });
    } catch(syncErr){
      console.error('PDF sync error:', syncErr);
      restoreState();
      track('pdf_export_fail', {error: 'sync: ' + String(syncErr).substring(0,80)}, 'error');
      _pdfFallbackPrint('sync_error');
    }
  });
}

/* ══ FEEDBACK MODAL (v3.6.1) ══ */
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
  if(btn){btn.disabled=false; btn.textContent='Pošalji →'}
  if(form) form.style.display = 'flex';

  bd.classList.add('show');
  setTimeout(function(){
    var ta = document.getElementById('fb-message');
    if(ta) ta.focus();
  }, 100);

  track('feedback_modal_open', {
    tab: lsLoad('mt.hrv.h01.tab', 0)
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
    p_tab_index: lsLoad('mt.hrv.h01.tab', 0),
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
      btn.textContent = 'Pošalji →';
      soundNg();
    }
  }).catch(function(){
    if(fbMsg){fbMsg.className='modal-msg show error'; fbMsg.textContent='✗ Greška u mreži. Pošalji e-mail na maturirajgreske@gmail.com'}
    btn.disabled = false;
    btn.textContent = 'Pošalji →';
  });

  return false;
}

/* ══ LOCKED SIDEBAR LINK → OPEN MODAL ══ */
function openChapterModal(chapterCode, chapterTitle, era, previewBody){
  openModal({
    ico:'📖',
    eye:'POGLAVLJE U IZRADI · '+era,
    title:chapterCode.toUpperCase()+' · '+chapterTitle+' — uskoro!',
    desc:'Radi se na ovom poglavlju. <strong>Ostavi svoj e-mail</strong> i javit ćemo ti čim izađe. Bez spama, bez newslettera — samo jedan e-mail kad je gotovo.',
    preview_title:'Pregled sadržaja',
    preview_body:previewBody,
    source:'locked_chapter',
    chapter_code:chapterCode.toLowerCase()
  });
}

/* ══ SVG HOTSPOT TOOLTIP (v3.5) ══ */
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

/* ══ CITATNIK SEARCH + FILTER (v3.5) ══ */
var CIT_STATE = {q: '', src: 'all'};
var CIT_ITEMS_CACHE = null;

function _citItems(){
  if(!CIT_ITEMS_CACHE){
    CIT_ITEMS_CACHE = Array.prototype.slice.call(
      document.querySelectorAll('#l3 [data-q-src]')
    );
  }
  return CIT_ITEMS_CACHE;
}
function _citSections(){
  return Array.prototype.slice.call(
    document.querySelectorAll('#l3 [data-cit-section]')
  );
}

function _normalize(s){
  // Normaliziraj hrvatske znakove za search (č→c, š→s itd.)
  return (s||'').toLowerCase()
    .replace(/č|ć/g,'c').replace(/š/g,'s').replace(/ž/g,'z')
    .replace(/đ/g,'d').replace(/[„""'']/g,'');
}

function _citApplyFilters(){
  var items = _citItems();
  var q = _normalize(CIT_STATE.q);
  var src = CIT_STATE.src;
  var shown = 0;
  var shownBySection = {};

  items.forEach(function(el){
    var itemSrc = el.getAttribute('data-q-src');
    var searchText = _normalize(
      (el.getAttribute('data-q-text')||'') + ' ' + (el.textContent||'')
    );
    var matchesSrc = (src === 'all' || itemSrc === src);
    var matchesQ = (!q || searchText.indexOf(q) !== -1);
    var visible = matchesSrc && matchesQ;
    el.classList.toggle('cit-hidden', !visible);
    if(q && visible){
      el.classList.add('cit-highlight');
    } else {
      el.classList.remove('cit-highlight');
    }
    if(visible){
      shown++;
      shownBySection[itemSrc] = (shownBySection[itemSrc]||0) + 1;
    }
  });

  // Hide prazne sekcije
  _citSections().forEach(function(sec){
    var secSrc = sec.getAttribute('data-cit-section');
    if(secSrc === 'index') return;
    var hasItems = shownBySection[secSrc] > 0;
    var hide = !hasItems || (src !== 'all' && src !== secSrc);
    sec.classList.toggle('cit-hidden', hide);
  });

  // Tematski index vidljiv samo ako nema search query
  var indexSec = document.querySelector('#l3 [data-cit-section="index"]');
  if(indexSec){
    var hideIndex = q || src !== 'all';
    indexSec.classList.toggle('cit-hidden', hideIndex);
    var next = indexSec.nextElementSibling;
    while(next && !next.classList.contains('nav-row')){
      if(next.classList.contains('prose') || next.classList.contains('tbl')){
        next.classList.toggle('cit-hidden', hideIndex);
      }
      next = next.nextElementSibling;
    }
  }

  // Stats
  var stats = document.getElementById('cit-stats');
  if(stats){
    if(q || src !== 'all'){
      stats.textContent = shown + ' ' + (shown===1?'citat':(shown<5?'citata':'citata')) + ' pronađeno';
    } else {
      stats.textContent = items.length + ' citata ukupno';
    }
  }

  var nr = document.getElementById('cit-no-results');
  if(nr){
    nr.classList.toggle('show', shown === 0 && (q || src !== 'all'));
  }

  var clr = document.getElementById('cit-clear');
  if(clr) clr.classList.toggle('show', !!q);
}

function citFilter(src){
  CIT_STATE.src = src;
  document.querySelectorAll('.cit-filter').forEach(function(btn){
    btn.classList.toggle('active', btn.getAttribute('data-src') === src);
    btn.setAttribute('aria-pressed', btn.getAttribute('data-src') === src ? 'true' : 'false');
  });
  _citApplyFilters();
  track('cit_filter', {src: src}, 'engagement');
}

function citClear(){
  CIT_STATE.q = '';
  var inp = document.getElementById('cit-search');
  if(inp){ inp.value = ''; inp.focus(); }
  _citApplyFilters();
}

function _citInit(){
  var inp = document.getElementById('cit-search');
  if(!inp) return;
  var timer = null;
  inp.addEventListener('input', function(){
    clearTimeout(timer);
    timer = setTimeout(function(){
      CIT_STATE.q = inp.value.trim();
      _citApplyFilters();
      if(CIT_STATE.q.length >= 2){
        track('cit_search', {q_length: CIT_STATE.q.length}, 'engagement');
      }
    }, 150);
  });
  var tools = document.querySelector('.cit-tools');
  if(tools && !document.getElementById('cit-no-results')){
    var nr = document.createElement('div');
    nr.id = 'cit-no-results';
    nr.className = 'cit-no-results';
    nr.innerHTML = 'Nema citata za taj upit. Pokušaj s drugom riječi ili filterom.';
    tools.parentNode.insertBefore(nr, tools.nextSibling);
  }
}

/* ══ TABS ══ */
var quizInited=false, drillInited=false;
var VISITED_TABS={};
var QUIZ_PASSED=false; // nakon kviza ≥60%
var _tabStartTime = Date.now();

/* Breadcrumb tab labele (v3.6) */
var TAB_LABELS = ['Teorija','Antigona','Esej alat','Citatnik','Pojmovnik','Drill','Kviz','Checkpoint'];

/* ══ SIDEBAR + PROGATE JS (v2) ══ */
/* ══════════════════════════════════════════════════════════════
   SIDEBAR + PROGATE JS — Maturiraj Hrvatski v2
   
   Ubacuje se u glavni <script> blok poglavlja (prije sw() funkcije).
   Ovisi o CURRENT_CHAPTER.code (string, npr. 'h11' ili 'd10').
   ══════════════════════════════════════════════════════════════ */

/* ══ SIDEBAR ACTIVATION ══
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
        openChapterModal(code, title, code.indexOf('d')===0?'Obvezatno djelo':'Poglavlje',
                         'Još u pripremi. Ostavi e-mail i javit ćemo ti kad izađe.');
        return false;
      });
    } else {
      item.classList.add('completed');
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

/* ══ TIER DETECTION + PROGATE ══
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



/* ══ MUST-KNOW BOX — expand/collapse ══ */
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

/* ══ FC (Flashcards) paywall — free tier limit ══ */
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
             '<div class="drill-paywall-ico">🔓</div>' +
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

/* ══ Quiz paywall — free tier limit ══ */
var QZ_FREE_LIMIT = 5;
function qzIsPaid(){
  var t = (document.body.getAttribute('data-tier')||'free');
  return t === 'standard' || t === 'pro';
}
function qzShowPaywall(){
  var app = document.getElementById('qz-app');
  if(!app) return;
  var chapter = (typeof CURRENT_CHAPTER !== 'undefined' && CURRENT_CHAPTER.code) || 'unknown';
  app.innerHTML = '<div class="qz-paywall"><div class="qz-paywall-ico">🎯</div>' +
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
  var prevTab = lsLoad('mt.hrv.h01.tab', null);
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
  lsSave('mt.hrv.h01.tab',i);

  VISITED_TABS[i]=true;
  lsSave('mt.hrv.h01.visited',VISITED_TABS);
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
        b.textContent='✓';
        t.appendChild(b);
      }
    } else {
      if(existing) existing.remove();
    }
  });
}

/* ══ SIDEBAR ══ */
function toggleSidebar(){var s=document.getElementById('sidebar'),o=document.getElementById('overlay');s.classList.toggle('mobile-open');o.classList.toggle('show')}
function closeSidebar(){document.getElementById('sidebar').classList.remove('mobile-open');document.getElementById('overlay').classList.remove('show')}

/* ══ LOCALSTORAGE ══ */
function lsSave(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
function lsLoad(k,def){try{var v=localStorage.getItem(k);return v!==null?JSON.parse(v):def}catch(e){return def}}

/* ══ SOUND ══ */
function beep(f,d,v,t){try{var c=new(window.AudioContext||window.webkitAudioContext)(),o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);o.frequency.value=f;o.type=t||'sine';g.gain.setValueAtTime(v||0.08,c.currentTime);g.gain.exponentialRampToValueAtTime(0.001,c.currentTime+d);o.start(c.currentTime);o.stop(c.currentTime+d)}catch(e){}}
function soundOk(){beep(660,.1,.08,'sine');setTimeout(function(){beep(880,.14,.07,'sine')},110)}
function soundNg(){beep(200,.18,.08,'sawtooth')}
function soundDone(){[440,550,660,880].forEach(function(f,i){setTimeout(function(){beep(f,.18,.07,'sine')},i*90)})}

/* ══ PROGRESS ══ */
function updateProgress(pct){
  var p=Math.max(5,pct);
  var pb=document.getElementById('prog-bar'); if(pb) pb.style.width=p+'%';
  var pct2=document.getElementById('prog-pct'); if(pct2) pct2.textContent=p+'%';
  var hp=document.getElementById('hero-pb'); if(hp) hp.style.width=p+'%';
  var hl=document.getElementById('hero-prog-lbl'); if(hl) hl.textContent=p+'% završeno';
  lsSave('mt.hrv.h01.prog',p);
}

/* ══ RESTORE BANNER ══ */
function checkRestore(){
  var prog=lsLoad('mt.hrv.h01.prog',null);
  var tab=lsLoad('mt.hrv.h01.tab',null);
  var cp=lsLoad('mt.hrv.h01.cp',null);
  var visited=lsLoad('mt.hrv.h01.visited',null);
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
  var tab=lsLoad('mt.hrv.h01.tab',0);
  var prog=lsLoad('mt.hrv.h01.prog',5);
  var visited=lsLoad('mt.hrv.h01.visited',{});
  VISITED_TABS=visited;
  if(prog) updateProgress(prog);
  updateTabBadges();
  cpLoad();
  if(tab!==null) sw(parseInt(tab));
}
function dismissRestore(){
  document.getElementById('restore-banner').classList.remove('show');
  ['mt.hrv.h01.prog','mt.hrv.h01.tab','mt.hrv.h01.cp','mt.hrv.h01.visited','mt.hrv.h01.quiz_passed'].forEach(function(k){try{localStorage.removeItem(k)}catch(e){}});
  VISITED_TABS={0:true};
  QUIZ_PASSED=false;
  document.querySelectorAll('.cp-item.done').forEach(function(el){el.classList.remove('done')});
  updateTabBadges();
  recomputeProgress();
  cpUpdate();
}

/* ═══════════════════════════════════════════
   POJMOVNIK — LIVE SEARCH + FILTER
   ═══════════════════════════════════════════ */
(function initPojmovnik(){
  function filter(){
    var search=document.getElementById('pojm-search');
    var filters=document.getElementById('pojm-filters');
    if(!search||!filters)return;
    var q=search.value.toLowerCase().trim();
    var activeBtn=filters.querySelector('.pojm-filter.on');
    var cat=activeBtn?activeBtn.dataset.cat:'all';
    var items=document.querySelectorAll('.pojm');
    var shown=0;
    items.forEach(function(el){
      var kw=(el.dataset.kw||'').toLowerCase();
      var elCat=el.dataset.cat;
      var matchesSearch=q===''||kw.indexOf(q)!==-1||el.textContent.toLowerCase().indexOf(q)!==-1;
      var matchesCat=cat==='all'||elCat===cat;
      if(matchesSearch&&matchesCat){el.classList.remove('hidden');shown++}
      else el.classList.add('hidden');
    });
    var c=document.getElementById('pojm-count');
    if(c) c.textContent=shown+' '+(shown===1?'pojam':(shown<5?'pojma':'pojmova'))+' prikazano';
  }
  document.addEventListener('DOMContentLoaded',function(){
    var search=document.getElementById('pojm-search');
    if(search) search.addEventListener('input',filter);
    var filterBtns=document.querySelectorAll('.pojm-filter');
    filterBtns.forEach(function(b){
      b.addEventListener('click',function(){
        filterBtns.forEach(function(x){x.classList.remove('on')});
        b.classList.add('on');
        filter();
      });
    });
  });
})();

/* ═══════════════════════════════════════════
   FLASHCARDS
   ═══════════════════════════════════════════ */
var FC_CARDS=[
  {cat:'DRAMA',term:'Katarza',def:'Pročišćenje koje publika doživljava gledajući tragediju. Aristotelov pojam.'},
  {cat:'DRAMA',term:'Hybris',def:'Bahata oholost, prekoračenje granica bogova. Glavni uzrok tragičkog pada junaka.'},
  {cat:'DRAMA',term:'Hamartia',def:'Tragička krivnja — junak pada zbog vlastite pogreške, ne slučajnosti.'},
  {cat:'DRAMA',term:'Peripetija',def:'Nagli obrat u radnji — od sreće u nesreću ili obrnuto.'},
  {cat:'DRAMA',term:'Anagnorizis',def:'Prepoznavanje, otkriće istine. Često vezano uz peripetiju.'},
  {cat:'DRAMA',term:'Tri jedinstva',def:'Jedinstvo radnje, vremena (24h) i mjesta. Pravilo klasicističke drame.'},
  {cat:'DRAMA',term:'Mimesis',def:'Oponašanje stvarnosti. Aristotelov pojam — književnost oponaša život.'},
  {cat:'EP',term:'Heksametar',def:'Stih od šest stopa. Standard antičke epike (Homer, Vergilije).'},
  {cat:'EP',term:'Invokacija',def:'Zaziv muze na početku epa. "Srdžbu mi, boginjo, pjevaj Ahileja..."'},
  {cat:'EP',term:'Epiteton ornans',def:'Ukrasni ustaljeni pridjev: "brzonogi Ahilej", "sivooki Atena".'},
  {cat:'STIL',term:'In medias res',def:'Usred stvari — radnja počinje u središtu događaja, prethodno kao flashback.'},
  {cat:'STIL',term:'Paralelizam',def:'Ponavljanje iste misli drugim riječima u susjednim stihovima. Tipično za psalme.'},
  {cat:'STIL',term:'Antiteza',def:'Suprotstavljanje pojmova — "tko se uzvisi, bit će ponižen".'},
  {cat:'BIBLIJA',term:'Parabola',def:'Alegorijska priča s moralnom poukom. Tipično za Novi zavjet.'},
  {cat:'BIBLIJA',term:'Psalam',def:'Religijska lirska pjesma. 150 psalama u Starom zavjetu.'},
  {cat:'BIBLIJA',term:'Apokalipsa',def:'Proročka proza o kraju svijeta, puna simbola. Zadnja knjiga N. zavjeta.'},
  {cat:'LIRIKA',term:'Oda',def:'Svečana lirska pjesma uzvišenog tona.'},
  {cat:'LIRIKA',term:'Elegija',def:'Tužna, melankolična lirska pjesma — smrt, rastanak, izgubljena ljubav.'},
  {cat:'PISMO',term:'Klinasto pismo',def:'Prvo pismo u povijesti, oko 3200. pr. Kr. u Sumeru (Mezopotamija).'},
  {cat:'PISMO',term:'Hijeroglifi',def:'Egipatsko "sveto pismo". Slikovni znakovi + fonetski simboli.'}
];
var fcIdx=0, fcKnown=0, fcUnknown=0, fcOrder=[];

/* ══ DRILL STATE PERSISTENCE (v3.5) ══
   Pamti kartice i progress dok se korisnik mota kroz tabove.
   sessionStorage — resetira se na novi tab/window (svjesno, da ne
   blokira "novi krug" između dana). Za cross-session, switch na lsSave.
═════════════════════════════════════════════ */
var DRILL_SS_KEY = 'mt.hrv.h01.drill';

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
    document.getElementById('fc-term').textContent='Gotovo! 🎉';
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

/* ═══════════════════════════════════════════
   MATCHING GAME — djelo → autor
   ═══════════════════════════════════════════ */
var MG_PAIRS=[
  {l:'Ilijada · Odiseja',r:'Homer'},
  {l:'Antigona · Kralj Edip',r:'Sofoklo'},
  {l:'Medeja · Bakhe',r:'Euripid'},
  {l:'Okovani Prometej',r:'Eshil'},
  {l:'Eneida',r:'Vergilije'},
  {l:'Metamorfoze',r:'Ovidije'},
  {l:'Poetika · Nikomahova etika',r:'Aristotel'}
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
        board.insertAdjacentHTML('afterend','<div class="mg-done" id="mg-done">🏆 SVI PAROVI SPARENI!</div>');
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

/* ═══════════════════════════════════════════
   KVIZ
   ═══════════════════════════════════════════ */
var QUIZ=[
  {q:\`Koje je djelo smatrano prvim velikim književnim djelom svjetske književnosti?\`,opts:[\`Ilijada\`,\`Ep o Gilgamešu\`,\`Eneida\`,\`Biblija\`],correct:1,exp:\`Ep o Gilgamešu (oko 2100. pr. Kr., Mezopotamija) stariji je od Homerovih epova za više od tisuću godina.\`},
  {q:\`Koji je stih standard antičke epike (Homer, Vergilije)?\`,opts:[\`Pentametar\`,\`Dvanaesterac\`,\`Heksametar\`,\`Deseterac\`],correct:2,exp:\`Heksametar — šestostopni stih. Homer, Vergilije i kasnije Marulić (Judita) koriste se heksametrom.\`},
  {q:\`Koje djelo je napisao Sofoklo?\`,opts:[\`Medeja\`,\`Okovani Prometej\`,\`Antigona\`,\`Ćelava pjevačica\`],correct:2,exp:\`Antigona (oko 441. pr. Kr.) je Sofoklova tragedija. Medeja je Euripidova, Okovani Prometej Eshilov.\`},
  {q:\`Što je katarza?\`,opts:[\`Prvi dio tragedije prije ulaska zbora\`,\`Pročišćenje koje publika doživljava gledajući tragediju\`,\`Oholost koja vodi u propast junaka\`,\`Nagli obrat u radnji\`],correct:1,exp:\`Katarza (Aristotel, Poetika) = pročišćenje emocija kroz strah i sažaljenje tijekom gledanja tragedije.\`},
  {q:\`Koji je lik u Antigoni predstavnik državnog/ljudskog zakona?\`,opts:[\`Hemon\`,\`Tirezija\`,\`Kreont\`,\`Polinik\`],correct:2,exp:\`Kreont, novi tebanski kralj, izdaje naredbu o zabrani pokopa Polinika — predstavlja državni autoritet.\`},
  {q:\`Koja je tragička greška (hamartia) Kreonta?\`,opts:[\`Ljubav prema Antigoni\`,\`Hybris — oholost i vjerovanje da njegova riječ natkriljuje bogove\`,\`Strah od smrti\`,\`Pohlepa za zlatom\`],correct:1,exp:\`Kreontova hybris — bahata oholost prema božanskim zakonima. Klasični uzrok tragičkog pada.\`},
  {q:\`Koje je Aristotelovo djelo najutjecajnija teorija drame ikad napisana?\`,opts:[\`Država\`,\`Metafizika\`,\`Poetika\`,\`Nikomahova etika\`],correct:2,exp:\`Poetika (4. st. pr. Kr.) — uspostavlja pojmove tragedije, katarze, hamartije, tri jedinstva.\`},
  {q:\`Koji epitet NIJE tipičan Homerov epiteton?\`,opts:[\`brzonogi Ahilej\`,\`sivooki Atena\`,\`ružoprsta Zora\`,\`crvena Antigona\`],correct:3,exp:\`Homerovski epiteti su ustaljeni pridjevi uz likove u Ilijadi i Odiseji. "Crvena Antigona" ne postoji.\`},
  {q:\`Koji grčki pjesnik je napisao Ilijadu i Odiseju?\`,opts:[\`Homer\`,\`Hesiod\`,\`Sapfa\`,\`Anakreont\`],correct:0,exp:\`Homer (oko 8. st. pr. Kr.) — autor/sastavljač najvećih grčkih epova.\`},
  {q:\`Što je parabola u Bibliji?\`,opts:[\`Duga pripovjedna pjesma\`,\`Alegorijska priča s moralnom poukom\`,\`Svečana lirska pjesma\`,\`Proročka vizija o kraju svijeta\`],correct:1,exp:\`Parabola = alegorijska priča s moralnom poukom. Najpoznatije: Milosrdni Samaritanac, Izgubljeni sin.\`},
  {q:\`Koliko glumaca u svojim tragedijama koristi Sofoklo?\`,opts:[\`Jednog\`,\`Dva\`,\`Tri\`,\`Četiri\`],correct:2,exp:\`Sofoklo je uveo trećeg glumca (prije njega — Eshil je uveo drugog, a originalno je bio samo jedan + zbor).\`},
  {q:\`Tko je autor Eneide?\`,opts:[\`Horacije\`,\`Ovidije\`,\`Vergilije\`,\`Ciceron\`],correct:2,exp:\`Publije Vergilije Maron (70. – 19. pr. Kr.) — autor Eneide, rimskog nacionalnog epa.\`},
  {q:\`Koja rečenica najbolje opisuje Antigoninu poziciju?\`,opts:[\`Pokorava se Kreontu iz straha\`,\`Brata pokopava jer božji nepisani zakoni natkriljuju ljudske\`,\`Želi postati kraljica Tebe\`,\`Traži mir za cijeli narod\`],correct:1,exp:\`Antigona se poziva na "nepisane i nepropadljive zakone bogova" koje Kreontova naredba ne može nadjačati.\`},
  {q:\`Što znači "in medias res"?\`,opts:[\`Na kraju priče\`,\`Usred stvari — radnja počinje u središtu događaja\`,\`Retoričko pitanje\`,\`Preneseno značenje\`],correct:1,exp:\`Usred stvari — pripovjedni postupak gdje radnja počinje in medias res, prethodno se priča retrospektivno.\`},
  {q:\`Koja vrsta pisma se smatra prvim pismom u povijesti?\`,opts:[\`Hijeroglifi\`,\`Klinasto pismo\`,\`Glagoljica\`,\`Grčki alfabet\`],correct:1,exp:\`Klinasto pismo — oko 3200. pr. Kr. u Sumeru. Pisano trstikom na glinenim pločicama.\`},
  {q:\`Koliko pjevanja ima Ilijada?\`,opts:[\`12\`,\`16\`,\`24\`,\`36\`],correct:2,exp:\`24 pjevanja (rapsodije). Isti broj ima i Odiseja — obje su podijeljene na 24 knjige.\`},
  {q:\`Na koga je najviše utjecala Aristotelova Poetika?\`,opts:[\`Samo na grčke tragedije\`,\`Na sve kasnije drame, posebno klasicističke\`,\`Na komediju\`,\`Na epiku\`],correct:1,exp:\`Aristotelova Poetika je temelj za sve kasnije drame — osobito francuski klasicizam (17. st.) koji strogo primjenjuje tri jedinstva.\`},
  {q:\`Koja je uloga zbora (kora) u grčkoj tragediji?\`,opts:[\`Samo pjevati između činova\`,\`Kolektivni glas koji komentira radnju i donosi moralne sudove\`,\`Glumiti manje uloge\`,\`Uvoditi nove likove\`],correct:1,exp:\`Kor je moralna vaga drame — kolektivni glas koji komentira, savjetuje likove i dijeli moralne sudove s publikom.\`},
  {q:\`Koji događaj je vrhunac Kreontove tragedije u Antigoni?\`,opts:[\`Smrt Polinika\`,\`Tirezijino proročanstvo\`,\`Smrt Antigone, Hemona i Euridike — Kreont ostaje sam\`,\`Kažnjavanje Ismene\`],correct:2,exp:\`Kreontova tragedija vrhunac je kad gubi sina Hemona i ženu Euridiku zbog vlastite tvrdoglavosti — ostaje živ da pati.\`},
  {q:\`Što je, prema Aristotelovoj definiciji tragedije, središnji element koji izaziva katarzu?\`,opts:[\`Sreća i smijeh publike\`,\`Strah i sažaljenje koje junak izaziva\`,\`Retorička virtuoznost\`,\`Jakost glumca\`],correct:1,exp:\`Aristotel: tragedija izaziva strah (fobos) i sažaljenje (éleos) — osjećaje koji publiku vode kroz katarzu (pročišćenje).\`}
];
var QUIZ_SHUFFLED=QUIZ.slice();
var qzState={idx:0,score:0,answered:[]};

function renderQuizIntro(){
  var el=document.getElementById('qz-app');
  el.innerHTML=\`
    <div class="qz-start">
      <div class="qz-start-ico">🧠</div>
      <h3>20 pitanja · bez vremena</h3>
      <p>Pitanja pokrivaju cijelo poglavlje: pismo, Biblija, Homer, drama, Antigona, Rim. Na kraju dobivaš ocjenu i objašnjenja.</p>
      <button class="fcb primary" onclick="qzStart()">Započni kviz →</button>
    </div>
  \`;
}
function qzStart(){
  qzState={idx:0,score:0,answered:[]};
  QUIZ_SHUFFLED=QUIZ.slice();
  for(var i=QUIZ_SHUFFLED.length-1;i>0;i--){
    var j=Math.floor(Math.random()*(i+1));
    var t=QUIZ_SHUFFLED[i];QUIZ_SHUFFLED[i]=QUIZ_SHUFFLED[j];QUIZ_SHUFFLED[j]=t;
  }
  track('quiz_start', {total_questions: QUIZ.length}, 'engagement');
  qzRender();
}
function qzRender(){
  var q=QUIZ_SHUFFLED[qzState.idx];
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
  var q=QUIZ_SHUFFLED[qzState.idx];
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
  fb.innerHTML=\`<b>\${ok?'✓ Točno!':'✗ Pogrešno.'}</b> \${q.exp}\`;
  var isLast=qzState.idx===QUIZ.length-1;
  document.getElementById('qz-nav').innerHTML=\`<button class="fcb primary" onclick="qzNext()">\${isLast?'Prikaži rezultat':'Sljedeće pitanje'} →</button>\`;
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

/* ══ SHARE ══ */
function qzShare(pct,score){
  var url='https://maturiraj.hr/skripte/hrvatski/h01';
  var text='Prošao/la sam kviz iz H01 · Temelji civilizacije i antika na maturiraj.hr — '+score+'/'+QUIZ.length+' ('+pct+'%) 🏛️';
  var fb=document.getElementById('qz-share-fb');

  // Try Web Share API (mobile)
  if(navigator.share){
    navigator.share({title:'Maturiraj.hr · H01 Kviz',text:text,url:url})
      .then(function(){if(fb)fb.textContent='Podijeljeno ✓'})
      .catch(function(){/* user cancelled, silent */});
    return;
  }
  // Fallback: copy to clipboard
  var full=text+'\\n'+url;
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(full).then(function(){
      if(fb){fb.textContent='✓ Link kopiran! Zalijepi u WhatsApp/Instagram';setTimeout(function(){fb.textContent=''},3500)}
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
  if(pct>=90){grade='ODLIČAN';msg='Spreman si za Antigonu na maturi.';ico='🏆';scoreBand='great'}
  else if(pct>=75){grade='VRLO DOBAR';msg='Solidno poznaješ gradivo. Doradi par tema.';ico='💪';scoreBand='good'}
  else if(pct>=60){grade='DOBAR';msg='Dobra osnova. Ponovi pojmovnik i Antigona deep-dive.';ico='📚';scoreBand='good'}
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
        <button class="fcb" onclick="sw(1)">← Antigona</button>
        <button class="fcb" onclick="sw(4)">📚 Pojmovnik</button>
      </div>
      <div id="qz-share-fb" style="margin-top:14px;font-family:var(--mono);font-size:11px;color:var(--green);min-height:16px"></div>
    </div>
  \`;

  // ═══ PLAYBOOK P3.2: REZULTAT REVEAL — najvažnija konverzijska taktika ═══
  // Vidljivo: osnovni rezultat + promašeni. Zakljucano: AI analiza, plan, vježbe.
  // Očekivani ROI iz playbooka: 12–18% Standard → Pro konverzija.
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
  if(qzState.score>=QUIZ.length*0.6){QUIZ_PASSED=true;lsSave('mt.hrv.h01.quiz_passed',true)}
  recomputeProgress();
  document.getElementById('qz-app').innerHTML=html;
}

/* ═══════════════════════════════════════════
   CHECKPOINT
   ═══════════════════════════════════════════ */
function cpToggle(el){
  el.classList.toggle('done');
  cpSave();
  cpUpdate();
  if(el.classList.contains('done')) soundOk();
}
function cpSave(){
  var states=[];
  document.querySelectorAll('.cp-item').forEach(function(el){states.push(el.classList.contains('done'))});
  lsSave('mt.hrv.h01.cp',states);
}
function cpLoad(){
  var states=lsLoad('mt.hrv.h01.cp',null);
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

/* ══ INIT ══ */
document.addEventListener('DOMContentLoaded',function(){
  _initTracking();
  track('page_view', {chapter: CURRENT_CHAPTER.code, days_to_matura: daysToMatura()}, 'navigation');

  checkRestore();
  cpLoad();
  var visited=lsLoad('mt.hrv.h01.visited',null);
  if(visited){VISITED_TABS=visited}
  QUIZ_PASSED=lsLoad('mt.hrv.h01.quiz_passed',false);
  VISITED_TABS[0]=true;
  updateTabBadges();
  recomputeProgress();

  // Breadcrumb: reflect current tab (v3.6)
  var currentTab = lsLoad('mt.hrv.h01.tab', 0);
  var bcTab = document.getElementById('bc-tab');
  if(bcTab && TAB_LABELS[currentTab]) bcTab.textContent = TAB_LABELS[currentTab];

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

  /* ══ FEEDBACK MODAL: char counter ══ */
  var fbTa = document.getElementById('fb-message');
  var fbCnt = document.getElementById('fb-char-count');
  if(fbTa && fbCnt){
    fbTa.addEventListener('input', function(){
      var len = fbTa.value.length;
      fbCnt.textContent = len;
      fbCnt.parentElement.classList.toggle('over', len > 5000);
    });
  }

  /* ══ UPSELL IMPRESSION TRACKING (IntersectionObserver) ══ */
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

  /* ══ BACK-TO-TOP SCROLL LISTENER ══ */
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

  /* ══ KEYBOARD NAV ══ */
  document.addEventListener('keydown',function(e){
    // Esc: zatvori modal ili sidebar
    if(e.key==='Escape'){
      var fbModal=document.getElementById('fb-modal-backdrop');
      if(fbModal&&fbModal.classList.contains('show')){closeFeedbackModal();return}
      var modal=document.getElementById('modal-backdrop');
      if(modal&&modal.classList.contains('show')){closeModal();return}
      var sb=document.getElementById('sidebar');
      if(sb&&sb.classList.contains('mobile-open')){closeSidebar();return}
    }
    // Ctrl+K / Cmd+K → focus pojmovnik search
    if((e.ctrlKey||e.metaKey)&&e.key==='k'){
      e.preventDefault();
      sw(4);
      setTimeout(function(){var s=document.getElementById('pojm-search');if(s)s.focus()},250);
      return;
    }
    var tag=(e.target&&e.target.tagName||'').toLowerCase();
    if(tag==='input'||tag==='textarea')return;
    if(e.target.classList&&e.target.classList.contains('tab')){
      if(e.key==='ArrowRight'||e.key==='ArrowLeft'){
        e.preventDefault();
        var curr=parseInt(lsLoad('mt.hrv.h01.tab',0));
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

  if(!lsLoad('mt.hrv.h01.hinted',false)){
    setTimeout(function(){lsSave('mt.hrv.h01.hinted',true)},3000);
  }
});
</script>

<script>
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
          <a href="Maturiraj_Pricing.html" class="mt-paywall-link">Vidi sve tier opcije →</a>
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
    alert(\`🚧 Pretplata u izradi.\\n\\nUskoro: Stripe Checkout za \${tier === 'pro' ? 'Pro 19,99€' : 'Standard 9,99€'}/mj\\n\\n(Mock: postavljen tier na \${tier.toUpperCase()})\`);
    setTier(tier);
    closePaywall();
    location.reload();
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
    location.href = 'Maturiraj_Pricing.html';
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

</script>

<script>
/* WC_UPDATE_INJECTED */

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

</script>

<script>
/* CP_RESET_INJECTED */

function cpReset(){
  if(!confirm('Resetiraj sve označene stavke?')) return;
  var items = document.querySelectorAll('.cp-item');
  items.forEach(function(it){ it.classList.remove('done'); });
  try { localStorage.removeItem('mt.hrv.h01.cp'); } catch(e){}
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

</script>

<script>
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

</script>`;

const STYLES_CSS = `
/* ═══════════════════════════════════════════
   HRVATSKI DESIGN SYSTEM v1 — KRVAVO CRVENA
   Knjizevna, dramaticna, literary-editorial
   ═══════════════════════════════════════════ */
:root{
  /* ── BASE SURFACES: duboko crni/vinski ── */
  --bg:#0F0605;--sur:#180A08;--ele:#20100D;--card:#2A1612;--hov:#351B16;--inp:#180A08;
  --bd:rgba(220,50,47,.10);--bdm:rgba(220,50,47,.18);--bdl:rgba(220,50,47,.32);

  /* ── PRIMARY: KRVAVO CRVENA (zamjenjuje bronze) ── */
  --bronze:#DC322F;--bronze-l:#FF5A54;--bronze-d:#8B1E1B;
  --bd-br:rgba(220,50,47,.28);--dim-br:rgba(220,50,47,.10);--glow-br:rgba(220,50,47,.06);

  /* ── ACCENT: CREAM / PARCHMENT (zamjenjuje gold) ── */
  --gold:#E8C97A;--bd-go:rgba(232,201,122,.26);--dim-go:rgba(232,201,122,.09);

  /* ── PARCHMENT: starija kremastija nijansa ── */
  --parchment:#D4B98C;--bd-pa:rgba(212,185,140,.22);--dim-pa:rgba(212,185,140,.08);

  /* ── SECONDARY ACCENTS ── */
  --teal:#6B8E7F;--bd-t:rgba(107,142,127,.22);--dim-t:rgba(107,142,127,.09);
  --red:#C04244;--bd-r:rgba(192,66,68,.22);--dim-r:rgba(192,66,68,.10);--red-l:#E06264;
  --green:#6B9464;--bd-g:rgba(107,148,100,.22);--dim-g:rgba(107,148,100,.09);--green-l:#8BB584;
  --sienna:#A85940;--bd-s:rgba(168,89,64,.22);--dim-s:rgba(168,89,64,.10);--dark:#0F0605;

  /* ── TEXT TONES ── */
  --t1:#F5E6D3;   /* krem — glavni tekst */
  --t2:#B09684;   /* mekani smeđi — secondary */
  --t3:#6B5A4E;   /* pridjušeni — meta */
  --t4:#3A2A22;

  /* ── FONT STACK ── */
  --font:'Plus Jakarta Sans',system-ui,sans-serif;
  --serif:'Crimson Text',Georgia,serif;
  --display:'Cinzel',serif;
  --mono:'JetBrains Mono',monospace;

  --r1:4px;--r2:8px;--r3:12px;--r4:16px;--r5:24px;--sb:258px;
  /* ── Z-INDEX LAYERS (semantic tokens) ── */
  --z-bg:-1;--z-base:1;--z-raised:10;--z-float:100;--z-overlay-low:200;--z-sidebar:300;--z-sidebar-ctrl:400;--z-tooltip:500;--z-modal:600;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{font-size:16px;scroll-behavior:smooth}
body{font-family:var(--font);background:var(--bg);color:var(--t1);min-height:100vh;-webkit-font-smoothing:antialiased;overflow-x:hidden}
a{color:inherit;text-decoration:none}

/* ── ANIMIRANI BG: suptilni subtle kvadrati + glow ── */
body::before{
  content:'';position:fixed;inset:0;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M0 40 L80 40 M40 0 L40 80' stroke='%23DC322F' stroke-width='.25' opacity='.05'/%3E%3Ccircle cx='40' cy='40' r='1.2' fill='%23DC322F' opacity='.08'/%3E%3C/svg%3E");
  background-size:80px 80px;pointer-events:none;z-index:var(--z-bg);
}
body::after{
  content:'';position:fixed;inset:0;
  background:radial-gradient(ellipse 60% 50% at 50% 0%,rgba(220,50,47,.07) 0%,transparent 70%);
  pointer-events:none;z-index:var(--z-bg);
}
.shell,.sidebar,.main{position:relative;z-index:var(--z-base)}
.shell{display:flex;min-height:100vh}

/* ══ KEYFRAMES ══ */
@keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(220,50,47,.3)}50%{box-shadow:0 0 0 8px rgba(220,50,47,.0)}}
@keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
@keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
@keyframes orbA{0%,100%{transform:scale(1) translate(0,0)}50%{transform:scale(1.15) translate(20px,-10px)}}
@keyframes orbB{0%,100%{transform:scale(1) translate(0,0)}50%{transform:scale(0.9) translate(-15px,12px)}}
@keyframes scanline{0%{top:-2px}100%{top:100%}}

/* ══ SIDEBAR ══ */
.sidebar{
  width:var(--sb);flex-shrink:0;background:var(--sur);
  border-right:1px solid var(--bdm);
  position:sticky;top:0;height:100vh;overflow-y:auto;
  display:flex;flex-direction:column;
  scrollbar-width:thin;scrollbar-color:var(--bdm) transparent;
}
.sidebar::-webkit-scrollbar{width:3px}
.sidebar::-webkit-scrollbar-thumb{background:var(--bdm);border-radius:2px}
.sb-brand{padding:16px 14px 14px;border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:10px}
.sb-logo{
  width:34px;height:34px;
  background:linear-gradient(135deg,var(--bronze-d),var(--bronze),var(--gold));
  border-radius:var(--r2);display:flex;align-items:center;justify-content:center;
  flex-shrink:0;box-shadow:0 0 20px rgba(220,50,47,.35);
  animation:pulse 3s ease-in-out infinite;
}
.sb-name{font-family:var(--display);font-size:12px;font-weight:700;color:var(--t1);letter-spacing:.5px}
.sb-sub{font-size:9px;color:var(--t3);margin-top:2px;font-family:var(--mono);letter-spacing:1.5px;text-transform:uppercase}
.sb-hamburger{
  display:none;position:fixed;top:12px;left:12px;z-index:var(--z-sidebar-ctrl);
  width:38px;height:38px;background:var(--sur);border:1px solid var(--bdm);
  border-radius:var(--r2);align-items:center;justify-content:center;cursor:pointer;flex-direction:column;gap:4px;
}
.sb-hamburger span{display:block;width:16px;height:1.5px;background:var(--t2);border-radius:1px;transition:all .2s}
.sb-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:var(--z-overlay-low);backdrop-filter:blur(3px)}
.sb-overlay.show{display:block}
.sidebar.mobile-open{transform:translateX(0)!important}
.sb-prog-wrap{padding:10px 14px;border-bottom:1px solid var(--bd)}
.sb-prog-label{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px;display:flex;justify-content:space-between}
.sb-prog-track{height:4px;background:var(--bd);border-radius:2px;overflow:hidden}
.sb-prog-bar{
  height:100%;
  background:linear-gradient(90deg,var(--bronze-d),var(--bronze),var(--gold));
  background-size:200% 100%;
  border-radius:2px;transition:width .6s cubic-bezier(.4,0,.2,1);
  animation:shimmer 2.5s linear infinite;
}
.sb-era{font-family:var(--display);font-size:8px;font-weight:600;letter-spacing:2.5px;color:var(--bronze-d);text-transform:uppercase;padding:14px 14px 4px;border-top:1px solid var(--bd);margin-top:4px}
.sb-era:first-of-type{border-top:none;margin-top:0}
.sb-item{display:flex;align-items:center;gap:9px;padding:6px 14px;font-size:11.5px;color:var(--t2);cursor:pointer;border-left:2px solid transparent;transition:all .12s;line-height:1.35;font-family:var(--serif)}
.sb-item:hover:not(.disabled){color:var(--t1);background:var(--hov)}
.sb-item.active{color:var(--bronze-l);background:var(--glow-br);border-left-color:var(--bronze);font-weight:600}
.sb-item.disabled{opacity:.35;cursor:not-allowed;position:relative}
.sb-item.disabled::after{content:'uskoro';position:absolute;right:12px;font-family:var(--mono);font-size:8px;letter-spacing:1px;color:var(--t3);text-transform:uppercase;background:var(--ele);padding:2px 6px;border-radius:3px;opacity:0;transition:opacity .2s}
.sb-item.disabled:hover::after{opacity:1}
.sb-dot{width:4px;height:4px;border-radius:50%;background:currentColor;flex-shrink:0;opacity:.35}
.sb-item.active .sb-dot{opacity:1;box-shadow:0 0 4px currentColor}
.sb-item.done-chapter{color:var(--green)!important;border-left-color:var(--green)!important}
.sb-item.done-chapter .sb-dot{background:var(--green);opacity:1}
.sb-item.done-chapter::after{content:'✓';font-size:10px;margin-left:auto;color:var(--green);font-weight:700}
.sb-footer{margin-top:auto;padding:10px 14px;border-top:1px solid var(--bd);font-size:9px;color:var(--t3);line-height:1.75;font-family:var(--mono)}

/* ══ MAIN ══ */
.main{flex:1;min-width:0}
.content-wrap{max-width:860px;width:100%;margin:0 auto;padding:32px 44px 120px;animation:fadeUp .4s ease both}
.bc{display:flex;align-items:center;gap:8px;font-size:11px;color:var(--t3);margin-bottom:24px;font-family:var(--mono);flex-wrap:wrap}
.bc-sep{opacity:.3}.bc-cur{color:var(--bronze)}.bc-link{color:inherit;text-decoration:none}.bc-link:hover{opacity:.7}
.bc-tab{color:var(--gold);font-weight:600;padding:2px 8px;background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r1);letter-spacing:.3px}
@media(max-width:560px){.bc-tab-sep, .bc-tab{display:none}}

/* ══ AUTHORITY BOX (v3.6) ══
   NCVVO / authorship trust signal */
.auth-box{display:flex;gap:14px;padding:16px 18px;background:linear-gradient(135deg,rgba(80,200,120,.04),rgba(91,192,190,.04));border:1px solid var(--bd-g);border-left:3px solid var(--green);border-radius:var(--r3);margin:22px 0}
.auth-ico{font-size:26px;flex-shrink:0}
.auth-body{flex:1;min-width:0}
.auth-ttl{font-family:var(--display);font-size:12px;font-weight:700;color:var(--green);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px}
.auth-txt{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.55;margin-bottom:10px}
.auth-txt strong{color:var(--t1)}
.auth-link{display:inline-block;font-family:var(--mono);font-size:10.5px;color:var(--teal);text-decoration:none;padding:5px 11px;border:1px solid var(--bd-t);border-radius:var(--r1);letter-spacing:.5px;font-weight:600;transition:all .15s}
.auth-link:hover{background:var(--dim-t);transform:translateX(2px)}
.auth-links{display:flex;gap:8px;flex-wrap:wrap}
@media(max-width:560px){.auth-box{flex-direction:column;gap:8px}.auth-txt{font-size:13px}.auth-links{flex-direction:column}.auth-link{text-align:center}}

/* ══ MINI-DIJAGNOSTIKA "Mogu li ovo na maturi?" ══ */
.diag{margin:18px 0;border:1px solid var(--bd-go);border-radius:var(--r4);background:linear-gradient(135deg,var(--dim-go),rgba(232,201,122,.02));overflow:hidden;position:relative}
.diag::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:linear-gradient(180deg,var(--gold),var(--bronze))}
.diag-intro, .diag-quiz, .diag-result{display:none;padding:22px 26px;animation:diagFade .35s ease}
.diag[data-state="intro"] .diag-intro{display:block}
.diag[data-state="quiz"] .diag-quiz{display:block}
.diag[data-state="result"] .diag-result{display:block}
.diag[data-state="dismissed"]{display:none}
@keyframes diagFade{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}
.diag-eye{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:6px}
.diag-ttl{font-family:var(--display);font-size:19px;font-weight:600;color:var(--t1);letter-spacing:.4px;margin-bottom:8px}
.diag-desc{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.55;margin-bottom:16px}
.diag-desc strong{color:var(--gold)}
.diag-actions{display:flex;gap:10px;flex-wrap:wrap;align-items:center}
.diag-btn{padding:10px 18px;font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;border-radius:var(--r2);cursor:pointer;transition:all .18s;border:1px solid transparent}
.diag-btn-primary{background:linear-gradient(135deg,var(--gold),var(--bronze));color:var(--bg);border-color:var(--gold)}
.diag-btn-primary:hover{transform:translateY(-1px);box-shadow:0 6px 18px rgba(232,201,122,.3)}
.diag-btn-ghost{background:transparent;color:var(--t3);border-color:var(--bd)}
.diag-btn-ghost:hover{color:var(--t1);border-color:var(--bd-br)}

/* QUIZ stanje */
.diag-progress{display:flex;align-items:center;gap:14px;margin-bottom:16px}
.diag-prog-bar{flex:1;height:4px;background:var(--bd);border-radius:2px;overflow:hidden}
.diag-prog-fill{height:100%;background:linear-gradient(90deg,var(--gold),var(--bronze));width:20%;transition:width .3s ease}
.diag-prog-txt{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:.5px;white-space:nowrap}
.diag-q{font-family:var(--display);font-size:16px;font-weight:600;color:var(--t1);line-height:1.45;margin-bottom:14px;letter-spacing:.2px}
.diag-opts{display:flex;flex-direction:column;gap:8px;margin-bottom:14px}
.diag-opt{padding:11px 16px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);color:var(--t1);font-family:var(--serif);font-size:13.5px;text-align:left;cursor:pointer;transition:all .15s;line-height:1.45}
.diag-opt:hover{border-color:var(--bd-br);background:var(--hov);transform:translateX(2px)}
.diag-opt:disabled{cursor:default;transform:none}
.diag-opt.diag-correct{background:var(--dim-g);border-color:var(--green);color:var(--green-l)}
.diag-opt.diag-wrong{background:var(--dim-r);border-color:var(--red);color:var(--red-l);opacity:.85}
.diag-opt.diag-correct::after{content:' ✓';color:var(--green);font-weight:700;font-family:var(--mono)}
.diag-opt.diag-wrong::after{content:' ✗';color:var(--red);font-weight:700;font-family:var(--mono)}
.diag-skip-row{text-align:right}
.diag-skip-q{background:transparent;border:none;color:var(--t3);font-family:var(--mono);font-size:10px;letter-spacing:.5px;cursor:pointer;text-decoration:underline;text-decoration-style:dotted;text-underline-offset:3px;padding:4px 0}
.diag-skip-q:hover{color:var(--t2)}

/* REZULTAT stanje */
.diag-res-score{display:flex;align-items:baseline;gap:10px;margin-bottom:14px}
.diag-res-num{font-family:var(--display);font-size:42px;font-weight:700;color:var(--gold);letter-spacing:1px;line-height:1}
.diag-res-lbl{font-family:var(--mono);font-size:11px;color:var(--t3);letter-spacing:1.5px;text-transform:uppercase}
.diag-res-msg{font-family:var(--display);font-size:16px;color:var(--t1);margin-bottom:8px;letter-spacing:.3px}
.diag-res-rec{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.6;margin-bottom:18px;padding:12px 14px;background:var(--bg);border-left:2px solid var(--bronze);border-radius:0 var(--r2) var(--r2) 0}
.diag-res-rec b{color:var(--bronze-l);font-weight:600}
.diag-res-rec a{color:var(--bronze-l);text-decoration:none;border-bottom:1px dashed var(--bd-br)}
.diag-res-rec a:hover{color:var(--gold);border-bottom-color:var(--gold);cursor:pointer}

@media(max-width:560px){
  .diag-intro, .diag-quiz, .diag-result{padding:18px 18px}
  .diag-ttl{font-size:17px}
  .diag-q{font-size:14.5px}
  .diag-actions{flex-direction:column;align-items:stretch}
  .diag-btn{text-align:center;width:100%}
  .diag-res-num{font-size:36px}
}

/* ══ ANTIGONA vs KREONT — comparison table ══ */
.cmp-tbl-wrap{margin:18px 0;border:1px solid var(--bd);border-radius:var(--r4);overflow:hidden;background:var(--sur)}
.cmp-tbl-hint{padding:12px 18px;background:var(--dim-go);border-bottom:1px solid var(--bd-go);font-family:var(--serif);font-size:13px;color:var(--t1);line-height:1.5}
.cmp-tbl-hint b{color:var(--gold);font-weight:600}
.cmp-tbl{width:100%;border-collapse:collapse;font-family:var(--serif)}
.cmp-tbl th, .cmp-tbl td{padding:11px 16px;text-align:left;font-size:13.5px;line-height:1.55;border-bottom:1px solid var(--bd);vertical-align:top}
.cmp-tbl th{font-family:var(--display);font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t2);background:var(--bg);border-bottom:2px solid var(--bd)}
.cmp-th-cat{width:140px;color:var(--t3);font-size:9.5px;letter-spacing:1.8px}
.cmp-th-a{color:var(--red-l);border-bottom-color:var(--red)}
.cmp-th-b{color:var(--bronze-l);border-bottom-color:var(--bronze)}
.cmp-tbl .cmp-cat{color:var(--t3);font-family:var(--mono);font-size:10.5px;letter-spacing:.5px;text-transform:uppercase;font-weight:700;background:var(--bg);width:140px;white-space:nowrap}
.cmp-tbl td b{color:var(--gold);font-weight:600}
.cmp-tbl td em{color:var(--bronze-l);font-style:italic}
.cmp-tbl tbody tr:last-child td{border-bottom:none}
.cmp-tbl tbody tr:hover{background:var(--card)}
.cmp-conc{background:linear-gradient(135deg,var(--dim-r),rgba(220,50,47,.02))!important;color:var(--t1);font-style:italic;text-align:center;padding:14px 18px}
.cmp-conc em{color:var(--red-l);font-weight:600}
@media(max-width:680px){
  .cmp-tbl, .cmp-tbl thead, .cmp-tbl tbody, .cmp-tbl th, .cmp-tbl td, .cmp-tbl tr{display:block}
  .cmp-tbl thead{display:none}
  .cmp-tbl tr{padding:10px 0;border-bottom:1px solid var(--bd)}
  .cmp-tbl tr:last-child{border-bottom:none}
  .cmp-tbl td{padding:6px 16px;border-bottom:none}
  .cmp-tbl .cmp-cat{width:auto;background:transparent;color:var(--bronze);font-size:9.5px;padding-bottom:0;padding-top:8px}
  .cmp-tbl td:nth-of-type(2)::before{content:'⚪ Antigona: ';color:var(--red-l);font-family:var(--mono);font-size:10px;font-weight:700}
  .cmp-tbl td:nth-of-type(3)::before{content:'⚫ Kreont: ';color:var(--bronze-l);font-family:var(--mono);font-size:10px;font-weight:700}
  .cmp-conc::before{content:''!important}
}

/* ══ QUICK REFERENCE / CHEAT CARD ══
   Pred-ispit ponavljanje, kompaktni printable summary */
.cheat-card{background:linear-gradient(135deg,rgba(232,201,122,.04),rgba(220,50,47,.02));border:1px solid var(--bd-go);border-radius:var(--r4);padding:0;margin:18px 0;overflow:hidden}
.cheat-hdr{display:flex;justify-content:space-between;align-items:center;gap:14px;padding:14px 22px;background:linear-gradient(135deg,var(--dim-go),rgba(232,201,122,.04));border-bottom:1px solid var(--bd-go);flex-wrap:wrap}
.cheat-hdr-l{flex:1;min-width:0}
.cheat-eye{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:3px}
.cheat-ttl{font-family:var(--display);font-size:17px;font-weight:600;color:var(--t1);letter-spacing:.4px}
.cheat-print{padding:8px 14px;background:transparent;color:var(--gold);border:1px solid var(--bd-go);border-radius:var(--r1);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all .15s;white-space:nowrap;flex-shrink:0}
.cheat-print:hover{background:var(--dim-go);transform:translateY(-1px)}
.cheat-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--bd)}
.cheat-col{padding:16px 22px;background:var(--sur)}
.cheat-col-wide{grid-column:1 / -1}
.cheat-col-warn{background:linear-gradient(135deg,rgba(220,50,47,.04),transparent)}
.cheat-col-ttl{font-family:var(--display);font-size:11px;font-weight:600;letter-spacing:1.5px;color:var(--bronze-l);text-transform:uppercase;margin-bottom:11px;padding-bottom:7px;border-bottom:1px dashed var(--bd-br)}
.cheat-col-warn .cheat-col-ttl{color:var(--red-l);border-bottom-color:rgba(220,50,47,.25)}
.cheat-tbl{width:100%;border-collapse:collapse;font-family:var(--serif);font-size:13px;color:var(--t1)}
.cheat-tbl td{padding:5px 0;border-bottom:1px dashed rgba(180,160,130,.12);vertical-align:top}
.cheat-tbl td:first-child{padding-right:14px;color:var(--gold);font-family:var(--mono);font-size:11px;white-space:nowrap;width:1%}
.cheat-tbl tr:last-child td{border-bottom:none}
.cheat-list{list-style:none;display:flex;flex-direction:column;gap:6px;padding:0;margin:0;font-family:var(--serif);font-size:13.5px;color:var(--t1);line-height:1.55}
.cheat-list li{padding-left:14px;position:relative}
.cheat-list li::before{content:'▸';position:absolute;left:0;color:var(--bronze-l);font-size:10px;top:1px}
.cheat-list b{color:var(--gold);font-weight:600}
.cheat-list-warn li::before{content:'✗';color:var(--red-l)}
.cheat-grid-inner{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.cheat-mini-ttl{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.2px;color:var(--bronze);text-transform:uppercase;margin-bottom:5px}
.cheat-mini-txt{font-family:var(--serif);font-size:13px;color:var(--t1);line-height:1.55}
.cheat-mini-txt b{color:var(--gold)}
.cheat-vs{display:inline-block;padding:1px 6px;background:var(--dim-r);color:var(--red-l);font-family:var(--mono);font-size:9px;font-weight:700;border-radius:3px;margin:0 4px;letter-spacing:.5px}
.cheat-steps{list-style:none;counter-reset:cheat-step;padding:0;margin:0;display:flex;flex-direction:column;gap:7px;font-family:var(--serif);font-size:13.5px;color:var(--t1);line-height:1.5}
.cheat-steps li{counter-increment:cheat-step;padding-left:30px;position:relative}
.cheat-steps li::before{content:counter(cheat-step);position:absolute;left:0;top:1px;width:22px;height:22px;display:flex;align-items:center;justify-content:center;background:var(--dim-go);border:1px solid var(--bd-go);border-radius:50%;font-family:var(--mono);font-size:10.5px;font-weight:700;color:var(--gold)}
.cheat-steps b{color:var(--gold);font-weight:600}
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

/* ══ MODULE FOOTER — authorship + last updated (v3.6) ══ */
.mod-foot{margin-top:48px;padding:20px 0 10px;border-top:1px solid var(--bd);text-align:center;font-family:var(--mono);font-size:10.5px;color:var(--t3);letter-spacing:.3px;line-height:1.7}
.mod-foot b{color:var(--t2);font-weight:600}
.mod-foot a{color:var(--bronze-l);text-decoration:none;border-bottom:1px dashed var(--bd-br);transition:all .15s}
.mod-foot a:hover{color:var(--gold);border-bottom-color:var(--gold)}
.mod-foot .foot-line{margin:2px 0}
.foot-feedback{display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap;margin-top:10px;padding-top:10px;border-top:1px dashed var(--bd)}
.foot-fb-q{color:var(--t2)}
.foot-fb-btn{padding:5px 11px;background:var(--dim-br);color:var(--bronze-l);border:1px solid var(--bd-br);border-radius:var(--r1);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:.5px;cursor:pointer;transition:all .15s}
.foot-fb-btn:hover{background:var(--hov);color:var(--gold);border-color:var(--bd-go)}
.foot-fb-or{color:var(--t3);opacity:.8}
.foot-fb-mail{color:var(--teal);border-bottom-color:var(--bd-t)}
.foot-fb-mail:hover{color:var(--teal)}
@media(max-width:560px){
  .foot-feedback{gap:6px;flex-direction:column}
  .foot-fb-or{display:none}
}

/* ══ TABS ══ */
.tabs{display:flex;gap:0;margin-bottom:28px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);padding:3px;width:fit-content;position:relative;max-width:100%;overflow-x:auto;scrollbar-width:none}
.tabs::-webkit-scrollbar{display:none}
.tab{padding:7px 16px;font-size:11px;font-weight:600;color:var(--t2);cursor:pointer;border-radius:5px;transition:all .18s;white-space:nowrap;font-family:var(--mono);position:relative;z-index:var(--z-base);background:transparent;border:none;line-height:normal}
.tab:hover{color:var(--t1)}
.tab:focus-visible{outline:2px solid var(--bronze);outline-offset:2px}
.tab.on{background:linear-gradient(135deg,var(--bronze-d),var(--bronze),var(--gold));color:#0F0605;font-weight:700;box-shadow:0 2px 18px rgba(220,50,47,.32)}
.tab-badge{display:inline-flex;align-items:center;justify-content:center;margin-left:5px;font-size:9px;color:var(--green);opacity:.9;font-weight:700}
.tab.on .tab-badge{color:#0F0605;opacity:.55}
.layer{display:none;animation:fadeUp .25s ease both}.layer.on{display:block}

/* ══ HERO ══ */
.hero{
  margin-bottom:28px;padding:36px 40px;
  background:var(--card);border:1px solid var(--bdm);
  border-radius:22px;position:relative;overflow:hidden;
}
.hero::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,var(--bronze-d),var(--bronze),var(--gold),var(--parchment),transparent)}
.hero::after{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,var(--bronze-d),var(--bronze),var(--gold),var(--parchment),transparent);filter:blur(8px);opacity:.5}
.hero-orb-a{position:absolute;top:-80px;right:-60px;width:360px;height:360px;background:radial-gradient(circle,rgba(220,50,47,.07) 0%,transparent 65%);border-radius:50%;pointer-events:none;animation:orbA 8s ease-in-out infinite}
.hero-orb-b{position:absolute;bottom:-60px;left:10%;width:260px;height:260px;background:radial-gradient(circle,rgba(232,201,122,.04) 0%,transparent 65%);border-radius:50%;pointer-events:none;animation:orbB 10s ease-in-out infinite}
.hero-chapter{
  display:inline-flex;align-items:center;gap:8px;
  font-family:var(--mono);font-size:9px;color:var(--bronze);
  letter-spacing:3px;margin-bottom:14px;text-transform:uppercase;
}
.hero-chapter::before{content:'';display:inline-block;width:24px;height:1px;background:var(--bronze);opacity:.5}
.hero-chapter::after{content:'';display:inline-block;width:24px;height:1px;background:var(--bronze);opacity:.5}
.hero-title{font-family:var(--display);font-size:30px;font-weight:700;color:var(--t1);letter-spacing:.5px;line-height:1.12;margin-bottom:10px}
.hero-title span{background:linear-gradient(135deg,var(--bronze-l),var(--gold),var(--parchment));background-size:200% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 4s linear infinite}
.hero-sub{font-family:var(--serif);font-size:15.5px;color:var(--t2);margin-bottom:20px;line-height:1.8;font-style:italic;max-width:580px}
.hero-meta{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:22px}
.hchip{font-family:var(--mono);font-size:9.5px;padding:4px 11px;border-radius:var(--r1);border:1px solid;letter-spacing:.5px;font-weight:600}
.hchip.br{background:var(--dim-br);color:var(--bronze-l);border-color:var(--bd-br)}
.hchip.go{background:var(--dim-go);color:var(--gold);border-color:var(--bd-go)}
.hchip.te{background:var(--dim-t);color:var(--teal);border-color:var(--bd-t)}
.hero-progress-row{display:flex;align-items:center;gap:12px}
.pt{height:3px;background:var(--bd);border-radius:2px;overflow:visible;flex:1;max-width:400px;position:relative}
.pb{height:100%;background:linear-gradient(90deg,var(--bronze-d),var(--bronze),var(--gold));background-size:200% 100%;border-radius:2px;transition:width .8s cubic-bezier(.4,0,.2,1);animation:shimmer 2.5s linear infinite;position:relative}
.pb::after{content:'';position:absolute;right:-4px;top:-4px;width:10px;height:10px;background:var(--gold);border-radius:50%;box-shadow:0 0 12px var(--gold),0 0 4px #fff}
.prog-label{font-family:var(--mono);font-size:10px;color:var(--t3)}

/* ══ PILLS ══ */
.tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:22px}
.pill{display:inline-flex;align-items:center;padding:3px 10px;border-radius:var(--r1);font-size:10px;font-weight:700;font-family:var(--mono);border:1px solid;letter-spacing:.5px}
.p-br{background:var(--dim-br);color:var(--bronze-l);border-color:var(--bd-br)}
.p-go{background:var(--dim-go);color:var(--gold);border-color:var(--bd-go)}
.p-t{background:var(--dim-t);color:var(--teal);border-color:var(--bd-t)}
.p-r{background:var(--dim-r);color:var(--red);border-color:var(--bd-r)}
.p-g{background:var(--dim-g);color:var(--green);border-color:var(--bd-g)}
.p-pa{background:var(--dim-pa);color:var(--parchment);border-color:var(--bd-pa)}

/* ══ LAYOUT UTILS ══ */
.slbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:3px;color:var(--t3);text-transform:uppercase;margin-bottom:13px;padding-bottom:8px;border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:8px}
.slbl::before{content:'//';color:var(--bronze-d)}
.divider{border:none;border-top:1px solid var(--bd);margin:28px 0}
.prose{font-family:var(--serif);font-size:15.5px;line-height:1.95;color:rgba(245,230,211,.82);margin-bottom:14px}
.prose b,.prose strong{color:var(--t1);font-weight:600}
.prose em{color:var(--bronze-l);font-style:italic}
.sec-hdr{display:flex;align-items:center;gap:14px;margin:32px 0 18px}
.sec-line{flex:1;height:1px;background:linear-gradient(90deg,transparent,var(--bdm),transparent)}
.sec-badge{font-family:var(--display);font-size:9px;font-weight:600;letter-spacing:2px;color:var(--bronze);text-transform:uppercase;padding:5px 16px;border:1px solid var(--bd-br);border-radius:20px;background:var(--dim-br);white-space:nowrap}

/* ══ STAT GRID ══ */
.sg{display:grid;grid-template-columns:repeat(auto-fill,minmax(165px,1fr));gap:10px;margin-bottom:24px}
.sc{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:15px 16px;transition:border-color .15s,transform .2s,box-shadow .2s;cursor:default}
.sc:hover{border-color:var(--bd-br);transform:translateY(-3px);box-shadow:0 8px 24px rgba(220,50,47,.08)}
.sc-ico{font-family:var(--mono);font-size:9.5px;font-weight:700;padding:3px 9px;border-radius:var(--r1);display:inline-flex;margin-bottom:11px}
.si-br{background:var(--dim-br);color:var(--bronze)}.si-go{background:var(--dim-go);color:var(--gold)}
.si-t{background:var(--dim-t);color:var(--teal)}.si-g{background:var(--dim-g);color:var(--green)}
.si-r{background:var(--dim-r);color:var(--red)}.si-s{background:var(--dim-s);color:var(--sienna)}
.sc-name{font-size:13px;font-weight:700;color:var(--t1);margin-bottom:5px;line-height:1.3;font-family:var(--serif)}
.sc-desc{font-size:11px;color:var(--t2);line-height:1.55;font-family:var(--mono)}

/* ══ BOX TYPES ══ */
.box-int{background:linear-gradient(135deg,rgba(220,50,47,.08),rgba(232,201,122,.03));border:1px solid var(--bd-br);border-radius:var(--r4);padding:18px 22px;margin:14px 0;position:relative;overflow:hidden}
.box-int::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:linear-gradient(180deg,var(--bronze),var(--gold));border-radius:2px 0 0 2px}
.box-int-lbl{font-family:var(--display);font-size:8.5px;font-weight:600;letter-spacing:2.5px;color:var(--bronze);text-transform:uppercase;margin-bottom:9px;display:flex;align-items:center;gap:8px}
.box-int-txt{font-family:var(--serif);font-size:14.5px;color:var(--t1);line-height:1.9}
.box-int-txt em{color:var(--bronze-l);font-style:italic}.box-int-txt strong{color:var(--gold);font-weight:600}

.box-key{background:linear-gradient(135deg,rgba(212,185,140,.08),rgba(220,50,47,.02));border:1px solid var(--bd-pa);border-radius:var(--r4);padding:17px 22px;margin:14px 0;position:relative;overflow:hidden}
.box-key::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--parchment);border-radius:2px 0 0 2px}
.box-key-lbl{font-family:var(--display);font-size:8.5px;font-weight:600;letter-spacing:2.5px;color:var(--parchment);text-transform:uppercase;margin-bottom:9px;display:flex;align-items:center;gap:8px}
.box-key-txt{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.85}
.box-key-txt strong{color:var(--parchment)}

.box-warn{background:rgba(192,66,68,.07);border:1px solid var(--bd-r);border-radius:var(--r3);padding:14px 18px;margin:13px 0;display:flex;gap:13px;position:relative;overflow:hidden}
.box-warn::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--red)}
.bw-ico{font-size:17px;flex-shrink:0;margin-top:1px}.bw-body{flex:1}
.bw-title{font-family:var(--display);font-size:8.5px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--red);margin-bottom:5px}
.bw-txt{font-family:var(--serif);font-size:13.5px;line-height:1.78;color:var(--t2)}.bw-txt strong{color:var(--red)}

.box-signal{background:linear-gradient(135deg,rgba(232,201,122,.08),rgba(220,50,47,.03));border:1px solid var(--bd-go);border-radius:var(--r4);padding:16px 22px;margin:14px 0;position:relative;overflow:hidden}
.box-signal::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--gold)}
.box-signal-lbl{font-family:var(--display);font-size:8.5px;font-weight:600;letter-spacing:2.5px;color:var(--gold);text-transform:uppercase;margin-bottom:9px;display:flex;align-items:center;gap:8px}
.box-signal-txt{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.85}
.box-signal-txt strong{color:var(--gold)}

.box-20{background:linear-gradient(135deg,rgba(107,148,100,.08),rgba(107,142,127,.03));border:1px solid var(--bd-g);border-radius:var(--r4);padding:20px 24px;margin:16px 0;position:relative;overflow:hidden}
.box-20::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--green)}
.b20-lbl{font-family:var(--display);font-size:8.5px;font-weight:600;letter-spacing:2.5px;color:var(--green);text-transform:uppercase;margin-bottom:14px;display:flex;align-items:center;gap:8px;padding-bottom:11px;border-bottom:1px solid var(--bd-g)}
.b20-list{list-style:none;display:flex;flex-direction:column;gap:0;margin:0;padding:0;counter-reset:b20-counter}
.b20-list.b20-numbered{gap:0}
.b20-item{display:flex;align-items:flex-start;gap:13px;font-family:var(--serif);font-size:14.5px;color:var(--t1);line-height:1.65;padding:11px 0;border-bottom:1px dashed rgba(107,148,100,.18)}
.b20-item:last-child{border-bottom:none;padding-bottom:2px}
.b20-item:first-child{padding-top:2px}
.b20-dot{width:6px;height:6px;background:var(--green);border-radius:1px;flex-shrink:0;margin-top:8px;transform:rotate(45deg)}
.b20-num{flex-shrink:0;width:26px;height:26px;display:flex;align-items:center;justify-content:center;background:var(--dim-g);border:1px solid var(--bd-g);border-radius:50%;font-family:var(--mono);font-size:11px;font-weight:700;color:var(--green);letter-spacing:0;margin-top:1px}
.b20-txt{flex:1;min-width:0}
.b20-txt b{color:var(--gold);font-weight:600}
.b20-txt em{color:var(--bronze-l);font-style:italic}
@media(max-width:560px){
  .b20-item{font-size:13.5px;gap:11px;padding:10px 0}
  .b20-num{width:24px;height:24px;font-size:10.5px}
  .box-20{padding:16px 18px}
}

.box-tip{background:rgba(107,142,127,.07);border:1px solid var(--bd-t);border-radius:var(--r3);padding:14px 18px;margin:13px 0;display:flex;gap:13px;position:relative;overflow:hidden}
.box-tip::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--teal)}
.bt-ico{font-size:16px;flex-shrink:0;margin-top:1px}.bt-body{flex:1}
.bt-title{font-family:var(--display);font-size:8.5px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--teal);margin-bottom:5px}
.bt-txt{font-family:var(--serif);font-size:13.5px;line-height:1.78;color:var(--t2)}.bt-txt strong{color:var(--teal)}

/* ══ CONCEPTS TABLE ══ */
.con{border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden;margin:13px 0 22px}
.cr{display:grid;grid-template-columns:minmax(160px,36%) 1fr;border-bottom:1px solid var(--bd);transition:background .1s}
.cr:last-child{border-bottom:none}.cr:nth-child(even){background:rgba(220,50,47,.02)}
.cr:hover{background:var(--hov)}
.ck{padding:11px 14px;font-family:var(--mono);font-size:11px;font-weight:600;border-right:1px solid var(--bd);position:relative;padding-left:19px}
.ck::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;border-radius:0 2px 2px 0}
.ck.br{color:var(--bronze-l)}.ck.br::before{background:var(--bronze)}
.ck.go{color:var(--gold)}.ck.go::before{background:var(--gold)}
.ck.te{color:var(--teal)}.ck.te::before{background:var(--teal)}
.ck.re{color:var(--red)}.ck.re::before{background:var(--red)}
.ck.ge{color:var(--green)}.ck.ge::before{background:var(--green)}
.ck.pa{color:var(--parchment)}.ck.pa::before{background:var(--parchment)}
.cv{padding:11px 16px;font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.65}

/* ══ TABLE ══ */
.tbl{overflow-x:auto;margin:12px 0 18px;border:1px solid var(--bdm);border-radius:var(--r3)}
table{width:100%;border-collapse:collapse;font-size:13px}
th{padding:9px 14px;background:var(--sur);color:var(--bronze);font-family:var(--display);font-size:8px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;text-align:left;border-bottom:1px solid var(--bdm);white-space:nowrap}
td{padding:10px 14px;color:var(--t2);border-bottom:1px solid var(--bd);line-height:1.65;vertical-align:top;font-family:var(--serif);font-size:13.5px}
tr:last-child td{border-bottom:none}
tr:nth-child(even) td{background:rgba(220,50,47,.018)}
tr:hover td{background:var(--hov)}
td b{color:var(--t1)}

/* ══ COMPARE ══ */
.cmp{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:13px 0 20px}
.cmp-c{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden;transition:border-color .15s}
.cmp-c:hover{border-color:var(--bd-br)}
.cmp-h{padding:10px 14px;font-family:var(--display);font-size:8.5px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;border-bottom:1px solid var(--bd)}
.cmp-h.br{background:var(--dim-br);color:var(--bronze);border-bottom-color:var(--bd-br)}
.cmp-h.go{background:var(--dim-go);color:var(--gold);border-bottom-color:var(--bd-go)}
.cmp-h.te{background:var(--dim-t);color:var(--teal);border-bottom-color:var(--bd-t)}
.cmp-h.re{background:var(--dim-r);color:var(--red);border-bottom-color:var(--bd-r)}
.cmp-h.ge{background:var(--dim-g);color:var(--green);border-bottom-color:var(--bd-g)}

/* ══ TIMELINE ══ */

/* ══ SVG CANVAS ══ */
  background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r4);
  padding:22px;margin:15px 0;display:flex;flex-direction:column;align-items:center;gap:14px;
  position:relative;overflow:hidden;
}

/* ══ MATURA BLOCK ══ */

/* ══ CHECKPOINT ══ */
.cp-item{display:flex;align-items:flex-start;gap:11px;font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.6;cursor:pointer;transition:color .15s;user-select:none}
.cp-item:hover{color:var(--t1)}
.cp-item.done{color:var(--green)}
.cp-item.done .cp-check{background:var(--green);border-color:var(--green)}
.cp-item.done .cp-check::after{content:'✓';font-size:11px;color:#0F0605;font-weight:700}
.cp-pct{font-size:13px;font-weight:700;color:var(--green);font-family:var(--mono)}

/* ══ QUIZ ══ */

/* ══ DRILL ══ */

/* ══ PRIORITY RADAR ══ */

/* ══ STRATEGY CARDS ══ */

/* ══ CONNECT NEXT ══ */

/* ══ CTA ══ */

/* ══ NAV BUTTONS ══ */
.nav-row{display:flex;justify-content:space-between;align-items:center;margin-top:32px;padding-top:20px;border-top:1px solid var(--bd)}
.nb{display:inline-flex;align-items:center;gap:6px;font-family:var(--mono);font-size:11px;color:var(--t2);cursor:pointer;padding:9px 14px;border:1px solid var(--bdm);border-radius:var(--r2);background:transparent;transition:all .15s}
.nb:hover{color:var(--t1);background:var(--card);border-color:var(--bdl)}
.nb.primary{background:linear-gradient(135deg,var(--bronze-d),var(--bronze),var(--gold));color:#0F0605;border-color:transparent;font-weight:700;box-shadow:0 3px 16px rgba(220,50,47,.24)}
.nb.primary:hover{opacity:.88;transform:translateY(-1px)}

/* ══ ACCESSIBILITY: SR-only utility ══ */
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}

/* ══ ACCESSIBILITY: reduced motion ══ */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .pb, .sb-prog-bar, .qz-bar-f {
    animation: none !important;
  }
}

/* ══ BACK-TO-TOP FLOATING BUTTON ══ */
.btt{
  position:fixed;right:24px;bottom:24px;z-index:var(--z-float);
  width:44px;height:44px;border-radius:50%;
  background:linear-gradient(135deg,var(--bronze-d),var(--bronze));
  border:none;cursor:pointer;
  display:flex;align-items:center;justify-content:center;
  font-family:var(--mono);font-size:18px;font-weight:700;color:#0F0605;
  box-shadow:0 6px 24px rgba(220,50,47,.3),0 2px 8px rgba(0,0,0,.4);
  opacity:0;visibility:hidden;transform:translateY(12px) scale(.9);
  transition:all .25s cubic-bezier(.4,0,.2,1);
}
.btt.show{opacity:1;visibility:visible;transform:translateY(0) scale(1)}
.btt:hover{transform:translateY(-2px) scale(1.05);box-shadow:0 10px 30px rgba(220,50,47,.4)}
.btt:active{transform:translateY(0) scale(.95)}
@media(max-width:720px){.btt{right:16px;bottom:16px;width:40px;height:40px;font-size:16px}}

/* ══ MODAL (email capture) ══ */
.modal-backdrop{position:fixed;inset:0;background:rgba(15,6,5,.82);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);z-index:var(--z-modal);display:none;align-items:center;justify-content:center;padding:20px}
.modal-backdrop.show{display:flex;animation:fadeIn .2s ease}
.modal{max-width:460px;width:100%;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);padding:32px 30px;position:relative;box-shadow:0 30px 80px rgba(0,0,0,.5);animation:fadeUp .3s ease}
.modal::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,var(--bronze),var(--gold),transparent);border-radius:var(--r4) var(--r4) 0 0}
.modal-close{position:absolute;top:14px;right:14px;width:30px;height:30px;border:none;background:transparent;color:var(--t3);cursor:pointer;font-size:18px;display:flex;align-items:center;justify-content:center;border-radius:50%;transition:all .15s}
.modal-close:hover{background:var(--hov);color:var(--t1)}
.modal-ico{width:52px;height:52px;border-radius:var(--r3);background:linear-gradient(135deg,var(--bronze-d),var(--bronze),var(--gold));display:flex;align-items:center;justify-content:center;font-size:26px;margin-bottom:16px;box-shadow:0 4px 18px rgba(220,50,47,.2)}
.modal-eye{font-family:var(--mono);font-size:9.5px;letter-spacing:2.5px;text-transform:uppercase;color:var(--bronze);margin-bottom:6px;display:flex;align-items:center;gap:7px}
.modal-eye::before{content:'';display:inline-block;width:20px;height:1px;background:var(--bronze);opacity:.5}
.modal-title{font-family:var(--display);font-size:22px;font-weight:700;color:var(--t1);letter-spacing:.3px;line-height:1.2;margin-bottom:10px}
.modal-desc{font-family:var(--serif);font-size:14.5px;color:var(--t2);line-height:1.6;margin-bottom:20px}
.modal-desc strong{color:var(--t1)}
.modal-form{display:flex;gap:8px;margin-bottom:14px}
.modal-input{flex:1;padding:12px 14px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);color:var(--t1);font-family:var(--font);font-size:14px;outline:none;transition:border-color .2s}
.modal-input:focus{border-color:var(--bd-br)}
.modal-input::placeholder{color:var(--t3)}
.modal-submit{padding:12px 20px;background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all .2s;white-space:nowrap;box-shadow:0 3px 12px rgba(220,50,47,.24)}
.modal-submit:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 5px 18px rgba(220,50,47,.32)}
.modal-submit:disabled{opacity:.5;cursor:not-allowed}
.modal-preview{padding:12px 14px;background:var(--sur);border:1px solid var(--bd);border-radius:var(--r2);font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.5;margin-bottom:14px}
.modal-preview strong{color:var(--gold);display:block;margin-bottom:4px;font-family:var(--display);font-size:10px;letter-spacing:1.5px;text-transform:uppercase;font-weight:700}
.modal-small{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:.3px;text-align:center}
.modal-msg{padding:10px 14px;border-radius:var(--r2);font-family:var(--serif);font-size:13.5px;text-align:center;margin-bottom:12px;display:none}
.modal-msg.show{display:block}
.modal-msg.success{background:var(--dim-g);border:1px solid var(--bd-g);color:var(--green)}
.modal-msg.error{background:var(--dim-r);border:1px solid var(--bd-r);color:var(--red)}
@media(max-width:560px){
  .modal{padding:26px 22px}
  .modal-form{flex-direction:column}
  .modal-submit{width:100%}
}

/* ══ REZULTAT REVEAL (playbook P3.2) ══ */
.reveal-lock{margin-top:28px;background:linear-gradient(135deg,rgba(220,50,47,.08),rgba(232,201,122,.04));border:1px solid var(--bd-br);border-radius:var(--r4);padding:28px;position:relative;overflow:hidden}
.reveal-lock::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--bronze-d),var(--bronze),var(--gold),var(--bronze-d))}
.reveal-lock[data-band="low"]{background:linear-gradient(135deg,rgba(220,50,47,.12),rgba(220,50,47,.04));border-color:var(--bd-r)}
.reveal-lock-head{text-align:center;margin-bottom:20px}
.reveal-lock-eye{font-family:var(--mono);font-size:10px;letter-spacing:3px;color:var(--bronze);text-transform:uppercase;margin-bottom:8px;font-weight:700}
.reveal-lock-title{font-family:var(--display);font-size:20px;font-weight:700;color:var(--t1);letter-spacing:.3px;line-height:1.3}
.reveal-lock-items{display:flex;flex-direction:column;gap:10px;margin-bottom:22px}
.reveal-lock-item{display:flex;align-items:center;gap:14px;padding:14px 16px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);position:relative;opacity:.95}
.reveal-lock-item::before{content:'';position:absolute;top:0;left:0;bottom:0;width:3px;background:var(--bronze);border-radius:var(--r2) 0 0 var(--r2);opacity:.6}
.rli-ico{font-size:22px;flex-shrink:0;filter:grayscale(.3) opacity(.8)}
.rli-body{flex:1;min-width:0}
.rli-title{font-family:var(--serif);font-size:14.5px;font-weight:600;color:var(--t1);margin-bottom:3px;line-height:1.35}
.rli-desc{font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.5}
.rli-lock{flex-shrink:0}
.rli-badge{display:inline-flex;align-items:center;padding:3px 9px;border-radius:var(--r1);font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;border:1px solid}
.rli-badge.pro{background:var(--dim-br);color:var(--bronze-l);border-color:var(--bd-br)}
.rli-badge.standard{background:var(--dim-t);color:var(--teal);border-color:var(--bd-t)}
.reveal-lock-cta{text-align:center}
.reveal-lock-btn{display:inline-flex;align-items:center;justify-content:center;padding:14px 28px;background:linear-gradient(135deg,var(--bronze-d),var(--bronze),var(--gold));color:#0F0605;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer;transition:all .25s;text-decoration:none;box-shadow:0 6px 22px rgba(220,50,47,.3)}
.reveal-lock-btn:hover{transform:translateY(-2px);box-shadow:0 10px 30px rgba(220,50,47,.4)}
.reveal-lock-sub{margin-top:10px;font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:.5px}
@media(max-width:560px){
  .reveal-lock{padding:22px 18px}
  .reveal-lock-item{flex-wrap:wrap}
  .rli-lock{margin-left:36px}
  .reveal-lock-btn{width:100%;padding:13px 18px;font-size:11px}
}

/* ══ SOCIAL PROOF WIDGET (playbook P5.1) ══ */
.social-proof{display:flex;gap:14px;padding:14px 18px;background:var(--sur);border:1px solid var(--bd);border-radius:var(--r3);margin:18px 0;flex-wrap:wrap;align-items:center;justify-content:center}
.sp-item{display:flex;align-items:center;gap:8px;font-family:var(--mono);font-size:11px;color:var(--t2);letter-spacing:.3px}
.sp-item b{color:var(--t1);font-weight:700;font-family:var(--display);font-size:13px}
.sp-item.urgency b{color:var(--red)}
.sp-divider{width:1px;height:14px;background:var(--bdm)}
@media(max-width:560px){
  .social-proof{gap:10px;padding:12px 14px}
  .sp-divider{display:none}
  .sp-item{font-size:10px}
  .sp-item b{font-size:12px}
}

/* ══ COUNTDOWN BANNER (playbook P5.2) ══ */
.countdown{display:flex;align-items:center;gap:14px;padding:14px 18px;background:linear-gradient(135deg,rgba(220,50,47,.08),rgba(220,50,47,.02));border:1px solid var(--bd-r);border-radius:var(--r3);margin:18px 0;position:relative;overflow:hidden}
.countdown::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--red)}
.cd-ico{font-size:24px;flex-shrink:0}
.cd-body{flex:1}
.cd-label{font-family:var(--mono);font-size:9.5px;letter-spacing:2px;color:var(--red);text-transform:uppercase;margin-bottom:2px;font-weight:700}
.cd-main{font-family:var(--display);font-size:18px;font-weight:700;color:var(--t1);letter-spacing:.3px}
.cd-main b{color:var(--red);font-size:24px;margin-right:4px}
.cd-sub{font-family:var(--serif);font-size:12.5px;color:var(--t2);margin-top:2px}
@media(max-width:560px){
  .countdown{padding:12px 14px}
  .cd-main{font-size:15px}
  .cd-main b{font-size:20px}
  .cd-sub{font-size:12px}
}

/* ══ SOFT HINT — "ovo je palo na MAT 2022" (playbook P4.2) ══ */
.soft-hint{display:flex;align-items:center;gap:10px;padding:10px 14px;background:rgba(232,201,122,.06);border:1px solid var(--bd-go);border-left:3px solid var(--gold);border-radius:var(--r2);margin:14px 0;font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.5}
.soft-hint-ico{font-size:16px;flex-shrink:0}
.soft-hint-body{flex:1}
.soft-hint b{color:var(--gold)}
.soft-hint-link{color:var(--bronze-l);text-decoration:none;font-family:var(--mono);font-size:10.5px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;padding:4px 10px;border:1px solid var(--bd-br);border-radius:var(--r1);transition:all .15s;flex-shrink:0}
.soft-hint-link:hover{background:var(--dim-br);color:var(--gold)}

/* ══ FRUSTRATION HINT — "Zapeo si? Pitaj AI" (playbook P4.3) ══ */
.frustration{display:flex;align-items:center;gap:12px;padding:12px 16px;background:linear-gradient(135deg,rgba(220,50,47,.06),rgba(232,201,122,.02));border:1px dashed var(--bd-br);border-radius:var(--r3);margin:18px 0;font-family:var(--serif);font-size:13.5px;color:var(--t1)}
.fr-ico{font-size:20px;flex-shrink:0}
.fr-body{flex:1;line-height:1.5}
.fr-body b{color:var(--bronze-l)}
.fr-cta{padding:7px 14px;background:transparent;border:1px solid var(--bd-br);color:var(--bronze-l);border-radius:var(--r1);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;cursor:pointer;text-decoration:none;transition:all .15s;white-space:nowrap;flex-shrink:0}
.fr-cta:hover{background:var(--dim-br);transform:translateX(2px)}
@media(max-width:560px){
  .frustration{flex-wrap:wrap}
  .fr-body{flex:1 1 100%}
  .fr-cta{width:100%;text-align:center}
}

/* ══ FEEDBACK FORM (v3.6.1) ══ */
.fb-form{display:flex;flex-direction:column;gap:0}
.fb-label{font-family:var(--mono);font-size:10px;letter-spacing:1.2px;color:var(--t3);text-transform:uppercase;margin-top:14px;margin-bottom:6px;font-weight:700}
.fb-req{color:var(--red)}
.fb-hint{font-family:var(--serif);font-size:11.5px;text-transform:none;letter-spacing:.3px;color:var(--t3);font-weight:400;font-style:italic;margin-left:4px}
.fb-types{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:2px}
.fb-type-opt{display:flex;align-items:center;gap:7px;padding:9px 11px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);cursor:pointer;font-family:var(--serif);font-size:13px;color:var(--t2);transition:all .15s}
.fb-type-opt:hover{border-color:var(--bd-br);color:var(--t1)}
.fb-type-opt input[type="radio"]{accent-color:var(--bronze);margin:0;flex-shrink:0}
.fb-type-opt:has(input:checked){background:var(--dim-br);border-color:var(--bd-br);color:var(--bronze-l)}
.fb-textarea{width:100%;padding:11px 14px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);color:var(--t1);font-family:var(--serif);font-size:14px;outline:none;transition:border-color .2s;resize:vertical;min-height:100px;line-height:1.5;box-sizing:border-box}
.fb-textarea:focus{border-color:var(--bd-br)}
.fb-textarea::placeholder{color:var(--t3);font-style:italic}
.fb-counter{text-align:right;font-family:var(--mono);font-size:10px;color:var(--t3);margin-top:4px;letter-spacing:.3px}
.fb-counter.over{color:var(--red)}
@media(max-width:560px){
  .fb-types{grid-template-columns:1fr}
}

/* ══ SVG HOTSPOTS + TOOLTIP (v3.5) ══ */
.svg-hs{cursor:help;pointer-events:all;transition:opacity .2s}
.svg-hs circle, .svg-hs rect{fill:transparent;stroke:transparent;stroke-width:1}
.svg-hs:hover circle, .svg-hs:hover rect, .svg-hs:focus-visible circle, .svg-hs:focus-visible rect{fill:rgba(232,201,122,.1);stroke:var(--gold);stroke-dasharray:3 3}
.svg-hs-ring{fill:none;stroke:var(--gold);stroke-width:1;stroke-dasharray:3 3;opacity:0;animation:hsPulse 2.5s ease-in-out infinite}
@keyframes hsPulse{0%,100%{opacity:0}50%{opacity:.35}}
.svg-container{position:relative}
.svg-container:hover .svg-hs-ring{opacity:.5}

.svg-tt{position:fixed;z-index:var(--z-tooltip);max-width:280px;background:var(--card);border:1px solid var(--bd-go);border-radius:var(--r3);padding:14px 16px;box-shadow:0 12px 40px rgba(0,0,0,.6),0 2px 8px rgba(232,201,122,.15);font-family:var(--serif);pointer-events:none;opacity:0;transform:translateY(6px) scale(.96);transition:all .18s cubic-bezier(.4,0,.2,1);visibility:hidden}
.svg-tt.show{opacity:1;transform:translateY(0) scale(1);visibility:visible}
.svg-tt::before{content:'';position:absolute;top:-3px;left:20px;width:10px;height:10px;background:var(--card);border-top:1px solid var(--bd-go);border-left:1px solid var(--bd-go);transform:rotate(45deg)}
.svg-tt.above::before{top:auto;bottom:-3px;border-top:none;border-left:none;border-bottom:1px solid var(--bd-go);border-right:1px solid var(--bd-go)}
.svg-tt-ttl{font-family:var(--display);font-size:11.5px;font-weight:700;color:var(--gold);letter-spacing:1.2px;text-transform:uppercase;margin-bottom:6px}
.svg-tt-txt{font-size:13.5px;color:var(--t1);line-height:1.5}
.svg-tt-txt em{color:var(--bronze-l);font-style:italic}
.svg-hint{display:inline-flex;align-items:center;gap:6px;font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:.5px;margin-top:8px;padding:4px 10px;border:1px dashed var(--bdm);border-radius:var(--r1);background:var(--sur)}
.svg-hint::before{content:'';width:6px;height:6px;background:var(--gold);border-radius:50%;animation:hsPulse 1.8s ease-in-out infinite;animation-direction:alternate}

/* ══ YOUTUBE RESOURCES (v3.5) ══ */
.yt-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin:16px 0}
.yt-card{display:flex;flex-direction:column;background:var(--sur);border:1px solid var(--bd);border-radius:var(--r3);overflow:hidden;text-decoration:none;transition:all .2s;position:relative}
.yt-card:hover{border-color:var(--bd-br);transform:translateY(-2px);box-shadow:0 8px 22px rgba(0,0,0,.25)}
.yt-thumb{height:72px;position:relative;display:flex;align-items:center;justify-content:center}
.yt-thumb::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 50%,rgba(0,0,0,0) 0%,rgba(0,0,0,.3) 100%)}
.yt-play{width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,.95);color:#0F0605;font-size:13px;display:flex;align-items:center;justify-content:center;padding-left:3px;box-shadow:0 3px 10px rgba(0,0,0,.35);position:relative;z-index:var(--z-raised);transition:transform .2s}
.yt-card:hover .yt-play{transform:scale(1.1)}
.yt-body{padding:12px 14px;flex:1}
.yt-lang{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:1.2px;margin-bottom:6px;display:flex;align-items:center;gap:5px;text-transform:uppercase;font-weight:600}
.yt-flag{font-size:12px}
.yt-title{font-family:var(--display);font-size:13.5px;font-weight:700;color:var(--t1);margin-bottom:6px;line-height:1.3}
.yt-desc{font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.5}
@media(max-width:720px){
  .yt-grid{grid-template-columns:1fr}
  .yt-thumb{height:64px}
}

/* ══ PDF EXPORT STATE (v3.6.1) ══
   Dok html2pdf renderira, privremeno dark → light theme da PDF bude čitljiv */
body.pdf-exporting{background:#fff!important;color:#000!important}
body.pdf-exporting *{background:transparent!important;color:#000!important;box-shadow:none!important;text-shadow:none!important}
body.pdf-exporting .hero{background:#fff!important;border:2px solid #000!important}
body.pdf-exporting .hero::before, body.pdf-exporting .hero::after, body.pdf-exporting .hero-orb-a, body.pdf-exporting .hero-orb-b{display:none!important}
body.pdf-exporting .box-int, body.pdf-exporting .box-key, body.pdf-exporting .box-signal, body.pdf-exporting .box-warn, body.pdf-exporting .box-tip, body.pdf-exporting .box-20, body.pdf-exporting .sc, body.pdf-exporting .cr, body.pdf-exporting .cmp-c{background:#fff!important;border:1px solid #999!important}
body.pdf-exporting th, body.pdf-exporting td{border:1px solid #999!important}
body.pdf-exporting .pill, body.pdf-exporting .hchip{background:#fff!important;color:#000!important;border:1px solid #999!important}
body.pdf-exporting .svg-hs-ring, body.pdf-exporting .svg-hint{display:none!important}
body.pdf-exporting .layer{display:block!important;visibility:visible!important;page-break-before:always;margin-bottom:18pt}
body.pdf-exporting .layer:first-of-type{page-break-before:auto}
body.pdf-exporting .sidebar, body.pdf-exporting .sb-hamburger{display:none!important}
body.pdf-exporting .content-wrap{max-width:100%!important;padding:0!important;margin:0!important}

/* ══ CITATNIK — SEARCH + FILTER (v3.5) ══ */
.cit-tools{margin:16px 0 22px;background:var(--sur);border:1px solid var(--bd);border-radius:var(--r3);padding:14px}
.cit-search-row{display:flex;gap:8px;margin-bottom:12px;position:relative}
.cit-search{flex:1;padding:12px 38px 12px 16px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);color:var(--t1);font-family:var(--serif);font-size:14px;outline:none;transition:border-color .2s}
.cit-search:focus{border-color:var(--bd-br)}
.cit-search::placeholder{color:var(--t3)}
.cit-clear{position:absolute;right:10px;top:50%;transform:translateY(-50%);width:24px;height:24px;border-radius:50%;border:none;background:var(--ele);color:var(--t3);cursor:pointer;display:none;align-items:center;justify-content:center;font-size:11px;transition:all .15s}
.cit-clear.show{display:flex}
.cit-clear:hover{background:var(--hov);color:var(--t1)}
.cit-filters{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px}
.cit-filter{padding:6px 12px;background:transparent;border:1px solid var(--bdm);color:var(--t2);border-radius:var(--r1);font-family:var(--mono);font-size:10.5px;font-weight:600;cursor:pointer;transition:all .15s;letter-spacing:.3px}
.cit-filter:hover{border-color:var(--bd-br);color:var(--t1)}
.cit-filter.active{background:var(--dim-br);border-color:var(--bd-br);color:var(--bronze-l)}
.cit-stats{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:.5px}
.cit-no-results{padding:40px 20px;text-align:center;font-family:var(--serif);font-size:15px;color:var(--t3);font-style:italic;border:1px dashed var(--bdm);border-radius:var(--r3);margin:16px 0;display:none}
.cit-no-results.show{display:block}
.cit-no-results b{color:var(--bronze-l);font-style:normal}
/* Filter state classes */
.cit-hidden{display:none!important}
.cit-highlight{background:rgba(232,201,122,.15)!important;border-color:var(--bd-go)!important;transition:background .3s}

/* ══ CTA UPSELL (suptilni, premium) ══ */.upsell{display:flex;align-items:center;gap:16px;padding:18px 22px;background:linear-gradient(135deg,rgba(232,201,122,.07),rgba(220,50,47,.04));border:1px solid var(--bd-go);border-radius:var(--r3);margin:22px 0;position:relative;overflow:hidden}
.upsell::before{content:'';position:absolute;top:0;left:0;bottom:0;width:3px;background:linear-gradient(180deg,var(--bronze),var(--gold))}
.upsell-ico{width:44px;height:44px;flex-shrink:0;border-radius:var(--r2);background:linear-gradient(135deg,var(--bronze-d),var(--gold));display:flex;align-items:center;justify-content:center;font-size:22px;box-shadow:0 4px 14px rgba(232,201,122,.25)}
/* Wordmark varijanta — za Discere (brand-name umjesto emoji) */
.upsell-ico.wordmark{width:auto;min-width:88px;padding:0 16px;font-family:var(--display);font-size:15px;font-weight:700;letter-spacing:1.5px;color:#0F0605;text-transform:uppercase;background:linear-gradient(135deg,var(--bronze),var(--gold));border-radius:var(--r2);height:44px}
.upsell-body{flex:1;min-width:0}
.upsell-title{font-family:var(--display);font-size:12px;font-weight:700;color:var(--gold);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.upsell-badge{font-family:var(--mono);font-size:8.5px;padding:2px 7px;border:1px solid var(--bd-go);background:var(--dim-go);border-radius:var(--r1);letter-spacing:1px;font-weight:600}
.upsell-badge.standard{color:var(--teal);border-color:var(--bd-t);background:var(--dim-t)}
.upsell-badge.pro{color:var(--bronze-l);border-color:var(--bd-br);background:var(--dim-br)}
.upsell-desc{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.55}
.upsell-desc strong{color:var(--t1)}
.upsell-cta{padding:10px 18px;background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all .2s;white-space:nowrap;flex-shrink:0;box-shadow:0 3px 12px rgba(220,50,47,.24);text-decoration:none;display:inline-flex;align-items:center;gap:6px}
.upsell-cta:hover{transform:translateY(-1px);box-shadow:0 5px 18px rgba(220,50,47,.32);opacity:.95}
@media(max-width:560px){.upsell{flex-direction:column;align-items:flex-start;gap:12px}.upsell-ico.wordmark{align-self:flex-start}.upsell-cta{width:100%;justify-content:center}}
.nb.off{opacity:.2;pointer-events:none}

/* ══ ESSAY BUILDER ══ */

/* ══ MATCH GAME ══ */
.mg-score{font-family:var(--mono);font-size:10.5px;color:var(--t3)}
@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}

/* ══ RESPONSIVE ══════════════════════════════════
   4 breakpointa:
   - default (≥1200px): full desktop, sve u svojoj glavi
   - ≤1100px: kompaktni desktop (narrow content-wrap)
   - ≤900px: tablet (sidebar pojmljen, single-col u marquee)
   - ≤720px: mobile (hamburger, sve 1 col)
   - ≤480px: small mobile (vertical nav, stacked hero)
═════════════════════════════════════════════════ */

/* Desktop polish — široki ekrani */
@media(min-width:1200px){
  .content-wrap{max-width:920px;padding:40px 52px 120px}
  .hero{padding:44px 48px}
  .hero-title{font-size:34px}
}

/* Kompaktni desktop / laptop */
@media(max-width:1100px){
  .content-wrap{padding:32px 36px 100px}
  .sg{grid-template-columns:repeat(auto-fill,minmax(180px,1fr))}
}

/* Tablet */
@media(max-width:900px){
  .content-wrap{padding:28px 24px 80px}
  .pojm-grid{grid-template-columns:1fr 1fr}
  .cmp[style*="grid-template-columns:repeat(3"]{grid-template-columns:repeat(2,1fr)!important}
}

/* Mobile */
@media(max-width:720px){
  .sidebar{display:none;position:fixed;z-index:var(--z-sidebar);height:100vh;transform:translateX(-100%);transition:transform .25s}
  .sidebar.mobile-open{display:flex;transform:translateX(0)}.sb-hamburger{display:flex}
  .content-wrap{padding:60px 16px 80px}
  .bc{font-size:10.5px}
  .hero{padding:24px 20px}
  .hero-title{font-size:22px}
  .hero-sub{font-size:14px}
  .cmp{grid-template-columns:1fr!important}
  .sg{grid-template-columns:1fr 1fr}
  .cr{grid-template-columns:1fr}.ck{border-right:none;border-bottom:1px solid var(--bd)}
  .tabs{width:100%;max-width:100%;overflow-x:auto;padding:2px}
  .tab{flex:0 0 auto;font-size:10px;padding:7px 10px;white-space:nowrap}
  /* Matching game */
  .mg-board{grid-template-columns:1fr!important;gap:14px}
  .mg-col-label{margin-top:10px}
  /* Pojmovnik */
  .pojm-grid{grid-template-columns:1fr}
  .pojm-filter{font-size:9px;padding:5px 11px}
  /* Flashcards */
  .fc{max-width:100%}
  .fc-term{font-size:24px!important}
  .fc-def{font-size:14px!important}
  .fc-controls{flex-wrap:wrap;gap:8px;width:100%}
  .fcb{flex:1;min-width:fit-content;font-size:10px;padding:9px 12px}
  /* Kviz */
  .qz-q{font-size:17px!important}
  .qz-opt{padding:12px 14px!important;font-size:13.5px!important}
  .qz-opt-key,.qz-key{width:26px;height:26px;font-size:12px}
  /* Hero */
  .hero-meta{gap:6px}
  .hchip{font-size:9px;padding:3px 9px}
  /* Checkpoint */
  .cp-item{padding:13px 15px;font-size:14px}
  .cp-hint{display:none}
  .cp-summary{padding:14px 16px;flex-direction:column;align-items:flex-start;gap:6px}
  .cp-sum-pct{font-size:22px}
  /* Restore banner */
  .restore-banner{flex-direction:column;align-items:stretch;gap:10px}
  .rb-actions{justify-content:flex-end}
  /* Section headers kompaktniji */
  .sec-hdr{margin:24px 0 14px}
  .sec-badge{font-size:8px;padding:4px 12px}
  /* Content wrap sc cards */
  .sc{padding:13px 14px}
  .sc-name{font-size:12.5px}
  /* Tables */
  .tbl{font-size:12px}
  td,th{padding:8px 10px;font-size:12.5px}
  /* Upsell */
  .upsell{padding:16px 18px;gap:12px}
  .upsell-desc{font-size:13px}
  /* Box helpers */
  .box-int,.box-key,.box-signal,.box-20{padding:16px 18px}
  .box-int-txt,.box-key-txt,.box-signal-txt{font-size:13.5px}
}

/* Small mobile — iPhone SE class */
@media(max-width:480px){
  .sg{grid-template-columns:1fr}
  .hero-title{font-size:19px}
  .hero-meta{flex-direction:column;align-items:flex-start;gap:4px}
  .nav-row{flex-direction:column;gap:8px}
  .nav-row .nb{width:100%;justify-content:center}
  .d1,.d2{font-size:28px}
  .tab{font-size:9.5px;padding:6px 9px;letter-spacing:0}
  .bc{display:none}
}

/* ══ PRINT STYLESHEET (v3.6) ══
   Optimiziran ispis skripte na papir — svi tabovi vidljivi,
   bez sidebara/CTA/modala, svijetla pozadina, čitljive boje.
═════════════════════════════════════════════ */
@media print{
  /* Reset tama → svijetla pozadina za uštedu tinte */
  html, body{background:#fff!important;color:#000!important;font-size:10pt}
  *, *::before, *::after{
    background:transparent!important;
    color:#000!important;
    box-shadow:none!important;
    text-shadow:none!important;
    animation:none!important;
    transition:none!important
  }
  /* Sakrij UI chrome */
  .sidebar, .sb-hamburger, .sb-overlay, .btt, .modal-backdrop,
  .tabs, .upsell, .reveal-lock, .countdown, .social-proof,
  .restore-banner, .cit-tools, .soft-hint, .frustration,
  .fc-controls, .fc, .mg-board, .mg-score, .drill-stats,
  .yt-grid, .svg-tt, #svg-tt, .cp-actions, .cp-summary,
  .foot-feedback, #pdf-export-btn, #fb-modal-backdrop,
  .svg-hs-ring, .svg-hint, nav.sidebar{display:none!important;visibility:hidden!important}
  /* Svi tabovi VIDLJIVI — jaki override */
  .layer{
    display:block!important;
    visibility:visible!important;
    opacity:1!important;
    position:static!important;
    page-break-before:always;
    padding:0;
    margin-bottom:20pt
  }
  .layer:first-of-type{page-break-before:auto}
  .layer.on{display:block!important}
  /* Svi layers se tiskaju */
  #l0, #l1, #l2, #l3, #l4, #l5, #l6, #l7{
    display:block!important;
    visibility:visible!important
  }
  /* Tipografija za papir */
  .content-wrap{max-width:100%!important;padding:0!important;margin:0!important}
  .main{margin:0!important}
  body, .hero-sub, .box-int-txt, .box-key-txt, .sc-desc, .cv, .prose, p, li{
    color:#000!important;font-size:10.5pt!important;line-height:1.45!important
  }
  h1, h2, h3, h4, .hero-title, .box-int-lbl, .box-key-lbl, .sec-badge, .slbl, .box-signal-lbl, .box-warn .bw-title, .bt-title, .b20-title{
    color:#000!important;page-break-after:avoid;break-after:avoid
  }
  /* Boxes */
  .box-int, .box-key, .box-signal, .box-warn, .box-tip, .box-20{
    background:#fff!important;border:1px solid #999!important;color:#000!important;
    page-break-inside:avoid;break-inside:avoid;margin:6pt 0;padding:7pt
  }
  .box-int-lbl, .box-key-lbl, .box-signal-lbl, .bw-title, .bt-title, .b20-title{color:#000!important}
  /* Tablice */
  .tbl, table{border-collapse:collapse;width:100%;page-break-inside:avoid}
  th, td{border:1px solid #999!important;padding:3pt 5pt!important;color:#000!important}
  /* Dramatis personae, citati, konflikti */
  .con .cr{page-break-inside:avoid;break-inside:avoid}
  .cr{border:1px solid #bbb!important;margin:3pt 0}
  .ck{color:#000!important;font-weight:700}
  .sg, .cmp{display:block}
  .sc, .cmp-c{background:#fff!important;border:1px solid #bbb!important;color:#000!important;margin:3pt 0;padding:5pt;page-break-inside:avoid}
  /* Pills — jednostavni */
  .pill, .hchip{background:#fff!important;color:#000!important;border:1px solid #999!important}
  /* Hero bez blokova */
  .hero{background:#fff!important;border:2px solid #000!important;padding:10pt!important;margin-bottom:10pt}
  .hero::before, .hero::after, .hero-orb-a, .hero-orb-b{display:none!important}
  /* URL header na prvoj stranici */
  .bc{font-family:sans-serif;font-size:9pt;color:#666!important;padding-bottom:4pt;border-bottom:1px solid #999;margin-bottom:8pt}
  .bc-tab{background:transparent!important;border:none!important;padding:0!important}
  /* SVG dijagram — crna na bijeloj, ostaje vidljiv */
  .svg-container{background:#fff!important;border:1px solid #999!important;page-break-inside:avoid;padding:8pt}
  .svg-container svg{max-width:100%}
  /* Kvizovi — sakrij interaktivne dijelove, ali pitanja NEKA ostanu statična */
  .qz-intro, .qz-start-btn, .qz-opts, .qz-next, #qz-app{display:none!important}
  /* Module footer */
  .mod-foot{margin-top:15pt;padding-top:8pt;border-top:1px solid #999;font-size:8.5pt!important;color:#666!important}
  /* Linkovi — pokaži URL u parentezi */
  a[href^="http"]:after{content:" (" attr(href) ")";font-size:8pt;color:#666!important;word-break:break-all}
  a[href^="mailto"]:after{content:" (" attr(href) ")";font-size:8pt;color:#666!important}
  a[href^="#"]:after{content:""}
  /* Sprečava ugly page-break usred kartice */
  .yt-card, .reveal-lock-item, .cp-item{page-break-inside:avoid}
  /* Print-only helper — instrukcija za studenta */
  body::before{
    content:"Maturiraj.hr · H01 Temelji civilizacije i antika · 8 tabova · Svrha: priprema za državnu maturu iz Hrvatskog jezika 2025/2026";
    display:block;
    font-family:sans-serif;
    font-size:8.5pt;
    color:#666!important;
    padding:4pt 0;
    border-bottom:1px dashed #999;
    margin-bottom:8pt;
    text-align:center
  }
}

/* ══ V3: SVG TOOLTIP ══ */

/* ══ V3: MATCH DIFFICULTY + TIMER ══ */

/* ══ V3: QUIZ SCORE HISTORY ══ */

/* ══ V3: QUIZ RETRY ERRORS ══ */

/* ══ V3: RESTORE BANNER ══ */
.restore-banner{display:none;align-items:center;justify-content:space-between;gap:12px;padding:12px 16px;background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r3);margin-bottom:18px;flex-wrap:wrap}
.restore-banner.show{display:flex;animation:fadeUp .3s ease}
.rb-txt{font-family:var(--serif);font-size:13.5px;color:var(--t2)}
.rb-txt strong{color:var(--gold)}
.rb-actions{display:flex;gap:8px}
.rb-btn{padding:6px 14px;border-radius:var(--r2);font-family:var(--mono);font-size:10.5px;font-weight:700;cursor:pointer;border:1px solid;transition:all .15s}
.rb-btn.primary{background:var(--bronze);color:#0F0605;border-color:var(--bronze)}
.rb-btn.secondary{background:transparent;color:var(--t2);border-color:var(--bdm)}
.rb-btn.secondary:hover{border-color:var(--bd-br);color:var(--bronze-l)}

/* ══ PRINT MODE: SAMO CHEAT SHEET (kad korisnik klikne Ispiši na kartici) ══ */
body.print-cheat-only @media print{
  /* nothing — handled by media query below */
}
@media print{
  body.print-cheat-only{background:#fff!important;color:#000!important}
  body.print-cheat-only > *{display:none!important;visibility:hidden!important}
  body.print-cheat-only .cheat-card,
  body.print-cheat-only .cheat-card *{display:block!important;visibility:visible!important;color:#000!important}
  body.print-cheat-only .cheat-card{
    display:block!important;
    position:absolute!important;
    left:0!important;top:0!important;
    width:100%!important;
    background:#fff!important;
    border:1px solid #000!important;
    page-break-inside:auto;
    box-shadow:none!important
  }
  body.print-cheat-only .cheat-grid{display:grid!important;grid-template-columns:1fr 1fr!important}
  body.print-cheat-only .cheat-col-wide{grid-column:1 / -1!important}
  body.print-cheat-only .cheat-grid-inner{display:grid!important;grid-template-columns:1fr 1fr!important}
  body.print-cheat-only .cheat-col, body.print-cheat-only .cheat-hdr{background:#fff!important;border-color:#999!important}
  body.print-cheat-only .cheat-print{display:none!important}
  body.print-cheat-only .cheat-eye, body.print-cheat-only .cheat-col-ttl{color:#444!important}
  body.print-cheat-only .cheat-tbl td:first-child, body.print-cheat-only .cheat-list b, body.print-cheat-only .cheat-mini-txt b, body.print-cheat-only .cheat-steps b{color:#000!important;font-weight:700}
  body.print-cheat-only .cheat-tbl td{border-bottom:1px solid #ddd!important}
  body.print-cheat-only .cheat-list li::before{color:#666!important}
  body.print-cheat-only .cheat-list-warn li::before{color:#000!important}
  body.print-cheat-only .cheat-steps li::before{background:#fff!important;border:1px solid #000!important;color:#000!important}
  body.print-cheat-only .cheat-vs{background:#eee!important;color:#000!important;border:1px solid #999}
  body.print-cheat-only .cheat-mini-ttl{color:#444!important}
  /* Helper header */
  body.print-cheat-only::before{
    content:"Maturiraj.hr · H01 · Cheat sheet za pred-ispit ponavljanje";
    display:block!important;visibility:visible!important;
    position:absolute;top:-22pt;left:0;width:100%;
    font-family:sans-serif;font-size:8.5pt;color:#666!important;
    text-align:center;padding-bottom:4pt;border-bottom:1px dashed #999
  }
}

/* ══════════════════════════════════════════════════════════════
   SIDEBAR v2 — extensions za 28 H + D01–D22
   
   Dodaje se u postojeći CSS blok poglavlja. Nadograđuje postojeće
   .sb-era, .sb-item, .sb-footer — ne rušeći ih.
   ══════════════════════════════════════════════════════════════ */

/* Nova data-code bazirana identifikacija (bolja od href-a) */
.sb-item[data-code].active{color:var(--gold);background:var(--dim-go);border-left-color:var(--gold);font-weight:600}

/* ══ DODATNO sekcija — vizualno odvojena ══ */
.sb-era.sb-era-d{
  color:var(--gold);
  border-top:1px solid var(--bd-go);
  margin-top:8px;
  padding-top:14px;
}
.sb-d-meta{
  font-family:var(--serif);
  font-size:10px;
  font-style:italic;
  color:var(--t3);
  padding:0 14px 8px;
  line-height:1.4;
  letter-spacing:.1px;
}

/* D-poglavlja — subtilno drugačija od H-poglavlja */
.sb-item.sb-d{
  padding-left:14px;
  font-family:var(--serif);
  font-size:11px;
  line-height:1.4;
  color:var(--t2);
  position:relative;
}
.sb-item.sb-d .sb-dot{
  background:var(--bronze-d);
  opacity:.6;
}
.sb-item.sb-d:hover:not(.disabled){color:var(--gold);background:var(--dim-go)}
.sb-item.sb-d:hover:not(.disabled) .sb-dot{background:var(--gold);opacity:1}
.sb-item.sb-d.active{color:var(--gold);background:var(--dim-go);border-left-color:var(--gold);font-weight:600}
.sb-item.sb-d.active .sb-dot{background:var(--gold);opacity:1}

/* ★ marker za esejska djela 2026 */
.sb-item[data-star="2026"]::after{
  content:'★ 2026';
  position:absolute;
  right:10px;top:50%;
  transform:translateY(-50%);
  font-family:var(--mono);
  font-size:7.5px;
  font-weight:700;
  letter-spacing:.8px;
  color:var(--red-l,#FF5A54);
  background:rgba(220,50,47,.14);
  padding:2px 5px;
  border-radius:var(--r1);
  border:1px solid rgba(220,50,47,.26);
  line-height:1;
  pointer-events:none;
}
.sb-item[data-star="2026"]{padding-right:58px}

/* Mobile — sidebar je u drawer-u, padding treba biti veći za tap target */
@media(max-width:900px){
  .sb-item.sb-d{padding:7px 14px;font-size:12px}
  .sb-item[data-star="2026"]::after{font-size:7px;padding:2px 4px}
}


/* ══════════════════════════════════════════════════════════════
   PROGATE — reusable paywall wrapper za gated utility
   
   Primjena: wrappa blok sadržaja (Drill, Kviz, Matching...).
   Ako korisnik nema potreban tier → prikazuje prve 5 stavki + fade + CTA.
   Ako ima tier → overlay se skriva (JS toggleProGates()).
   ══════════════════════════════════════════════════════════════ */

.pro-gate{
  position:relative;
  overflow:hidden;
  --gate-preview-height:360px;   /* koliko content-a je vidljivo prije fade-a */
}

/* Free state — limitira visinu + overlay */
body[data-tier="free"] .pro-gate,
.pro-gate.force-gated{
  max-height:var(--gate-preview-height);
}

body[data-tier="free"] .pro-gate-overlay,
.pro-gate.force-gated .pro-gate-overlay{
  display:flex;
}

/* Authed state — ubija gate */
body[data-tier="standard"] .pro-gate,
body[data-tier="pro"] .pro-gate{
  max-height:none;
}
body[data-tier="standard"] .pro-gate-overlay,
body[data-tier="pro"] .pro-gate-overlay{
  display:none;
}

/* Overlay: fade + CTA */
.pro-gate-overlay{
  display:none;     /* default — overridan po body[data-tier] */
  position:absolute;
  inset:0;
  flex-direction:column;
  justify-content:flex-end;
  pointer-events:none;   /* inner elements će re-enable */
}

.pro-gate-fade{
  height:180px;
  background:linear-gradient(
    to bottom,
    rgba(15,6,5,0) 0%,
    rgba(15,6,5,.85) 55%,
    rgba(15,6,5,.98) 100%
  );
}

.pro-gate-cta{
  background:rgba(15,6,5,.98);
  padding:18px 22px 22px;
  text-align:center;
  pointer-events:auto;
  border-top:1px solid var(--bd-go);
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:10px;
}

.pro-gate-label{
  font-family:var(--serif);
  font-size:14px;
  color:var(--t1);
  line-height:1.5;
  max-width:460px;
}
.pro-gate-label b{color:var(--gold);font-weight:600}

.pro-gate-btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:7px;
  font-family:var(--mono);
  font-size:11px;
  font-weight:700;
  letter-spacing:1.2px;
  text-transform:uppercase;
  color:#0F0605;
  background:linear-gradient(135deg,var(--gold),#d4b980);
  border:1px solid var(--gold);
  border-radius:var(--r2);
  padding:11px 22px;
  text-decoration:none;
  cursor:pointer;
  transition:transform .18s,box-shadow .18s,filter .18s;
  box-shadow:0 4px 16px rgba(232,201,122,.18);
}
.pro-gate-btn:hover{
  transform:translateY(-1px);
  filter:brightness(1.08);
  box-shadow:0 6px 22px rgba(232,201,122,.28);
}
.pro-gate-btn::before{content:'🔓';font-size:13px}

.pro-gate-meta{
  font-family:var(--mono);
  font-size:9.5px;
  color:var(--t3);
  letter-spacing:.8px;
  text-transform:uppercase;
}

/* Inline lock badge za tab header kad je content gated */
.tab-lock{
  display:inline-flex;
  align-items:center;
  gap:4px;
  font-family:var(--mono);
  font-size:8px;
  font-weight:700;
  letter-spacing:1px;
  color:var(--gold);
  background:var(--dim-go);
  border:1px solid var(--bd-go);
  border-radius:var(--r1);
  padding:2px 6px;
  margin-left:6px;
  vertical-align:middle;
  text-transform:uppercase;
}
.tab-lock::before{content:'🔒';font-size:9px}

body[data-tier="standard"] .tab-lock,
body[data-tier="pro"] .tab-lock{display:none}

/* Reduced motion */
@media(prefers-reduced-motion:reduce){
  .pro-gate-btn{transition:none}
}

@media(max-width:680px){
  .pro-gate{--gate-preview-height:280px}
  .pro-gate-fade{height:140px}
  .pro-gate-cta{padding:14px 16px 18px;gap:8px}
  .pro-gate-label{font-size:13px}
  .pro-gate-btn{font-size:10.5px;padding:10px 18px}
  .pro-gate-meta{font-size:9px}
}



/* ══════════════════════════════════════════════════════════════
   MUST-KNOW BOX — "Minimum za maturu" (v2)
   ══════════════════════════════════════════════════════════════ */
.must-know{
  background:linear-gradient(135deg,rgba(232,201,122,.06),rgba(220,50,47,.03));
  border:1px solid rgba(232,201,122,.22);
  border-left:3px solid var(--gold);
  border-radius:var(--r3);
  padding:18px 22px 16px;
  margin:18px 0 22px;
  position:relative;
}
.must-know-header{display:flex;align-items:center;gap:10px;margin-bottom:4px}
.must-know-ico{font-size:15px;line-height:1}
.must-know-title{
  font-family:var(--mono);font-size:10.5px;font-weight:700;
  letter-spacing:2px;text-transform:uppercase;color:var(--gold);
  flex:1;min-width:0;
}
.must-know-time{
  font-family:var(--mono);font-size:9.5px;color:var(--t3);
  letter-spacing:1.2px;text-transform:uppercase;
  padding:3px 8px;border:1px solid var(--bdm);border-radius:var(--r1);
  white-space:nowrap;
}
.must-know-subtitle{
  font-family:var(--serif);font-size:13px;font-style:italic;
  color:var(--t2);margin:2px 0 14px;line-height:1.45;
}
.must-know-grid{display:flex;flex-direction:column;gap:0}
.mk-row{
  display:grid;grid-template-columns:130px 1fr;gap:14px;
  padding:9px 0;border-bottom:1px solid rgba(255,255,255,.035);
  cursor:pointer;transition:background .15s;align-items:start;position:relative;
}
.mk-row:last-of-type{border-bottom:none}
.mk-row:hover{background:rgba(232,201,122,.025)}
.mk-row::after{
  content:'+';position:absolute;right:2px;top:8px;
  font-family:var(--mono);font-size:13px;color:var(--t3);
  transition:transform .2s,color .15s;line-height:1;
}
.mk-row.mk-open::after{content:'−';color:var(--gold);transform:rotate(180deg)}
.mk-row:hover::after{color:var(--gold)}
.mk-lbl{
  font-family:var(--mono);font-size:9.5px;font-weight:700;
  color:var(--bronze-l);letter-spacing:1.5px;text-transform:uppercase;
  padding-top:3px;display:flex;align-items:center;gap:5px;user-select:none;
}
.mk-val{
  font-family:var(--serif);font-size:14.5px;color:var(--t1);
  line-height:1.5;padding-right:18px;
}
.mk-val b{color:var(--gold);font-weight:600}
.mk-val em{color:var(--t2);font-style:italic}
.mk-more{
  grid-column:1 / -1;max-height:0;overflow:hidden;
  transition:max-height .3s ease, padding .25s, margin .25s;
  font-family:var(--serif);font-size:13.5px;line-height:1.6;
  color:var(--t2);padding:0 18px 0 0;margin-top:0;
}
.mk-row.mk-open .mk-more{
  max-height:400px;padding:8px 18px 6px 0;margin-top:6px;
  border-top:1px dashed rgba(232,201,122,.18);
}
.mk-more b{color:var(--t1);font-weight:600}
.mk-more em{color:var(--gold);font-style:italic}
.must-know-footer{
  margin-top:14px;padding-top:12px;
  border-top:1px dashed rgba(232,201,122,.2);
  font-family:var(--serif);font-size:12.5px;color:var(--t2);
  line-height:1.55;font-style:italic;
}
.must-know-footer b{color:var(--gold);font-style:normal;font-weight:600}
@media(max-width:680px){
  .must-know{padding:14px 16px 14px;margin:14px 0 20px}
  .must-know-title{font-size:10px;letter-spacing:1.6px}
  .must-know-time{font-size:9px;padding:2px 7px}
  .must-know-subtitle{font-size:12.5px;margin-bottom:11px}
  .mk-row{grid-template-columns:100px 1fr;gap:10px;padding:8px 0}
  .mk-lbl{font-size:9px;letter-spacing:1.2px}
  .mk-val{font-size:13.5px;padding-right:16px}
  .mk-more{font-size:12.5px}
  .must-know-footer{font-size:12px}
  .mk-row::after{font-size:12px;right:0;top:7px}
}
@media(prefers-reduced-motion:reduce){.mk-row,.mk-row::after,.mk-more{transition:none}}

/* Drill/Quiz inline paywall (JS-injected) */
.drill-paywall, .qz-paywall{
  max-width:520px;margin:24px auto;padding:28px 24px;
  background:linear-gradient(135deg,rgba(232,201,122,.08),rgba(220,50,47,.04));
  border:1px solid var(--bd-go);border-left:3px solid var(--gold);
  border-radius:var(--r4);text-align:center;
  display:flex;flex-direction:column;align-items:center;gap:10px;
}
.drill-paywall-ico, .qz-paywall-ico{font-size:34px;line-height:1}
.drill-paywall-title, .qz-paywall-label{
  font-family:var(--display);font-size:16px;font-weight:700;
  color:var(--gold);letter-spacing:.8px;line-height:1.4;
}
.drill-paywall-sub, .qz-paywall-sub{
  font-family:var(--serif);font-size:14px;color:var(--t2);
  line-height:1.55;max-width:440px;margin-bottom:6px;
}
.drill-paywall-sub b, .qz-paywall-sub b{color:var(--gold);font-weight:600}
@media(max-width:680px){
  .drill-paywall, .qz-paywall{padding:22px 18px}
  .drill-paywall-title, .qz-paywall-label{font-size:14.5px}
  .drill-paywall-sub, .qz-paywall-sub{font-size:13px}
}


/* ══ ProGate tier toggle (JS-based, bypass CSS cascade issues) ══ */
.pro-gate-overlay[data-gate-state="hidden"]{display:none}
.pro-gate-overlay[data-gate-state="visible"]{display:flex;position:absolute;inset:0;flex-direction:column;justify-content:flex-end;pointer-events:none}

/* ══ DIAG — dijagnostički kviz elementi (fallback styling) ══ */
.diag-question{padding:18px 22px}
.diag-q-head{display:flex;align-items:center;gap:10px;margin-bottom:10px;flex-wrap:wrap}
.diag-q-count{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--bronze-l);text-transform:uppercase}
.diag-q-topic{font-family:var(--mono);font-size:9.5px;letter-spacing:1.2px;color:var(--t3);text-transform:uppercase;padding:2px 8px;background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r1)}
.diag-q-text{font-family:var(--serif);font-size:16.5px;line-height:1.5;color:var(--t1);margin-bottom:14px;font-weight:500}
.diag-intro-body{padding:18px 22px}
.diag-intro-icon{font-size:32px;line-height:1;margin-bottom:8px;text-align:center}
.diag-intro-title{font-family:var(--display);font-size:18px;font-weight:700;color:var(--bronze-l);letter-spacing:.8px;text-align:center;margin-bottom:8px}
.diag-intro-desc{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.55;text-align:center;max-width:440px;margin:0 auto 14px}
.diag-res-body{padding:20px 22px;text-align:center}
.diag-res-header{display:flex;flex-direction:column;align-items:center;gap:6px;margin-bottom:12px}
.diag-res-ico{font-size:32px;line-height:1}
.diag-res-title{font-family:var(--display);font-size:17px;font-weight:700;color:var(--bronze-l);letter-spacing:.5px}
.diag-res-cta{margin-top:14px}
.diag-explain{font-family:var(--serif);font-size:13px;color:var(--t2);font-style:italic;line-height:1.5;padding:10px 14px;background:var(--card);border-left:3px solid var(--bronze-d);border-radius:var(--r1);margin-top:10px}
.diag-skip-q-row{display:flex;justify-content:center;margin-top:10px}



      .pojm-filter{padding:6px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;background:var(--card);color:var(--t2);border:1px solid var(--bdm);border-radius:var(--r1);cursor:pointer;transition:all .18s}
      .pojm-filter:hover{color:var(--t1);border-color:var(--bd-br)}
      .pojm-filter.on{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border-color:var(--bronze);font-weight:700}
      .pojm-count{font-family:var(--mono);font-size:11px;color:var(--t3);margin-bottom:12px}
      .pojm-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px}
      .pojm{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px 16px;transition:all .2s;position:relative}
      .pojm:hover{border-color:var(--bd-br);transform:translateY(-2px);box-shadow:0 6px 20px rgba(220,50,47,.08)}
      .pojm-cat{position:absolute;top:12px;right:12px;font-family:var(--mono);font-size:8px;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3);padding:2px 7px;background:var(--ele);border-radius:var(--r1)}
      .pojm-word{font-family:var(--display);font-size:15px;font-weight:600;color:var(--bronze-l);letter-spacing:.5px;margin-bottom:6px;padding-right:70px}
      .pojm-def{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.65}
      .pojm.hidden{display:none}
    


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
      @keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}
      .mg-stats{display:flex;gap:20px;justify-content:center;margin-top:14px;font-family:var(--mono);font-size:11px;color:var(--t3)}
      .mg-stats b{color:var(--green)}
      .mg-done{text-align:center;padding:22px;background:var(--dim-g);border:1px solid var(--bd-g);border-radius:var(--r3);font-family:var(--display);font-size:16px;color:var(--green);font-weight:700;letter-spacing:1px}
    


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


/* WC-BOX (auto-injected) */
.wc-box{background:var(--card,#1a1010);border:1px solid var(--bdm,#2c1f1f);border-radius:14px;padding:20px;margin:18px 0}
.wc-hdr{margin-bottom:14px}
.wc-ttl{font-family:var(--serif,'Fraunces',serif);font-size:15px;font-weight:700;color:var(--t1,#f4ede5)}
.wc-textarea{width:100%;min-height:280px;padding:14px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:10px;color:var(--t1,#f4ede5);font-family:var(--mono,monospace);font-size:13px;line-height:1.7;resize:vertical;box-sizing:border-box}
.wc-textarea:focus{outline:none;border-color:var(--gold,#e9b446)}
.wc-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:10px;margin-top:12px}
.wc-stat{padding:10px 12px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:8px;text-align:center}
.wc-stat-num{font-family:var(--mono,monospace);font-size:18px;font-weight:800;color:var(--t1,#f4ede5)}
.wc-stat-lbl{font-family:var(--mono,monospace);font-size:9px;color:var(--t3,#8a7a6e);letter-spacing:1px;margin-top:2px}
.wc-stat.ok .wc-stat-num{color:var(--green,#50c878)}
.wc-stat.critical .wc-stat-num{color:var(--red,#e05252)}
.wc-progress{margin-top:14px}
.wc-progress-bar-wrap{height:8px;background:var(--inp,#0F0605);border-radius:4px;overflow:hidden;border:1px solid var(--bdl,#2c1f1f)}
.wc-progress-bar{height:100%;background:linear-gradient(90deg,var(--blue,#4a90d9),var(--gold,#e9b446));transition:width .3s}
.wc-progress.pass .wc-progress-bar{background:var(--green,#50c878)}
.wc-progress-lbl{font-family:var(--mono,monospace);font-size:11px;color:var(--t3,#8a7a6e);margin-top:6px;text-align:center;letter-spacing:1px}
.wc-actions{display:flex;gap:8px;margin-top:12px}
.wc-btn{flex:1;padding:8px 14px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:8px;color:var(--t2,#c5b8aa);font-family:var(--mono,monospace);font-size:11px;letter-spacing:0.8px;cursor:pointer;transition:all .15s}
.wc-btn:hover{border-color:var(--gold,#e9b446);color:var(--gold,#e9b446)}
.wc-hint{margin-top:12px;padding:10px 12px;background:var(--inp,#0F0605);border-radius:8px;font-size:12px;color:var(--t2,#c5b8aa);line-height:1.5}

  `;

const SCRIPTS_JS = `/* ═══════════════════════════════════════════
   HRVATSKI H01 — JS
   Tabs · Pojmovnik search · Flashcards · Matching · Kviz
   Email capture · Back-to-top · Event tracking
   ═══════════════════════════════════════════ */

/* ══ SUPABASE CONFIG ══
   ZAMIJENITI prije deploya u production:
   1. SUPABASE_URL      → tvoj Supabase project URL
   2. SUPABASE_ANON_KEY → anon public key iz Settings > API

   Za lokalni test — ostavi placeholder, modal/track će raditi u offline modu.
═════════════════════════════════════════════ */
var SUPABASE_URL = 'https://your-project.supabase.co';
var SUPABASE_ANON_KEY = 'your-anon-key-here';

var CURRENT_CHAPTER = {
  subject: 'hrvatski',
  code: 'h01',
  title: 'Temelji civilizacije i antika'
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
   Kad budeš imao stvarne brojeve, zamijeni _renderSocialProof.
═════════════════════════════════════════════ */
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
      <div class="sp-item">🇭🇷 <b>Besplatno</b> za sve maturante</div>
      <div class="sp-divider"></div>
      <div class="sp-item">📚 Usklađeno s <b>NCVVO</b> katalogom</div>
      <div class="sp-divider"></div>
      <div class="sp-item urgency">⏰ Do mature <b>\${daysToMatura()}</b> dana</div>
    \`;
    return;
  }

  // Kad Supabase stigne — realni brojevi
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

/* ══ EVENT TRACKING ══ */
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

/* ══ SUPABASE SIGNUP ══ */
function supabaseSignup(email, source, chapterCode, meta){
  // Client-only offline fallback: ako URL još nije postavljen, simuliraj success
  if(SUPABASE_URL.indexOf('your-project')>=0){
    return new Promise(function(resolve){
      setTimeout(function(){
        resolve({success:true, already_signed:false, message:'Prijavljen! (Offline način — email nije poslan)'});
      }, 700);
    });
  }
  return fetch(SUPABASE_URL+'/rest/v1/rpc/signup_newsletter',{
    method:'POST',
    headers:{
      'apikey':SUPABASE_ANON_KEY,
      'Authorization':'Bearer '+SUPABASE_ANON_KEY,
      'Content-Type':'application/json',
      'Prefer':'return=representation'
    },
    body:JSON.stringify({
      p_email:email,
      p_source:source,
      p_subject:CURRENT_CHAPTER.subject,
      p_chapter_code:chapterCode||null,
      p_meta:meta||{}
    })
  }).then(function(r){return r.json()}).catch(function(err){
    console.error('Supabase signup error:',err);
    return {success:false, error:'network', message:'Greška u mreži — pokušaj ponovo.'};
  });
}

/* ══ MODAL ══ */
var MODAL_CONTEXT = {source:'other', chapter_code:null};

function openModal(config){
  MODAL_CONTEXT.source = config.source || 'other';
  MODAL_CONTEXT.chapter_code = config.chapter_code || null;
  if(config.ico) document.getElementById('modal-ico').textContent=config.ico;
  if(config.eye) document.getElementById('modal-eye').textContent=config.eye;
  if(config.title) document.getElementById('modal-title').textContent=config.title;
  if(config.desc) document.getElementById('modal-desc').innerHTML=config.desc;
  if(config.preview_title && config.preview_body){
    var p=document.getElementById('modal-preview');
    p.innerHTML='<strong>'+config.preview_title+'</strong>'+config.preview_body;
    p.style.display='block';
  } else {
    document.getElementById('modal-preview').style.display='none';
  }
  document.getElementById('modal-email').value='';
  document.getElementById('modal-submit').disabled=false;
  document.getElementById('modal-submit').textContent='Javi mi →';
  document.getElementById('modal-msg').className='modal-msg';
  document.getElementById('modal-form').style.display='flex';

  var bd=document.getElementById('modal-backdrop');
  bd.classList.add('show');
  setTimeout(function(){document.getElementById('modal-email').focus()},100);

  track('modal_open', {source: MODAL_CONTEXT.source, chapter_code: MODAL_CONTEXT.chapter_code}, 'engagement');
}

function closeModal(){
  document.getElementById('modal-backdrop').classList.remove('show');
}

function submitSignup(ev){
  ev.preventDefault();
  var email=document.getElementById('modal-email').value.trim().toLowerCase();
  var btn=document.getElementById('modal-submit');
  var msg=document.getElementById('modal-msg');

  // Validate
  var rx=/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$/i;
  if(!rx.test(email)){
    msg.className='modal-msg show error';
    msg.textContent='✗ E-mail adresa nije valjana.';
    return false;
  }

  btn.disabled=true;
  btn.textContent='Šaljem...';
  msg.className='modal-msg';

  supabaseSignup(email, MODAL_CONTEXT.source, MODAL_CONTEXT.chapter_code, {
    current_chapter:CURRENT_CHAPTER.code,
    ts:new Date().toISOString()
  }).then(function(res){
    if(res.success){
      msg.className='modal-msg show success';
      msg.textContent = res.already_signed
        ? '✓ Već si prijavljen — javit ćemo ti se!'
        : '✓ Prijavljen! Poslat ćemo ti e-mail čim bude spremno.';
      document.getElementById('modal-form').style.display='none';
      lsSave('mt.hrv.newsletter_signed', true);
      track('signup_success', {
        source: MODAL_CONTEXT.source,
        chapter_code: MODAL_CONTEXT.chapter_code,
        already_signed: res.already_signed || false
      }, 'conversion');
      soundOk();
      setTimeout(closeModal, 2200);
    } else {
      msg.className='modal-msg show error';
      msg.textContent = '✗ '+(res.message||'Nešto je pošlo krivo. Pokušaj ponovo.');
      btn.disabled=false;
      btn.textContent='Javi mi →';
      track('signup_fail', {
        source: MODAL_CONTEXT.source,
        error: res.error || 'unknown'
      }, 'error');
      soundNg();
    }
  });

  return false;
}

/* ══ FULL SCRIPT PRINT (preporučeno, 100% pouzdano) ══
   Koristi postojeći @media print stylesheet — sve tabove vidljive, svijetla pozadina.
   Korisnik u print dijalogu može odabrati "Save as PDF" kao printer. */
function printFullScript(){
  track('full_print_start', {chapter: CURRENT_CHAPTER.code}, 'engagement');
  // Mali delay za feedback prije print dialoga
  var btn = document.getElementById('pdf-print-btn');
  if(btn){
    var originalText = btn.textContent;
    btn.textContent = '🖨 Otvaram dijalog...';
    btn.disabled = true;
    setTimeout(function(){
      window.print();
      setTimeout(function(){
        btn.textContent = originalText;
        btn.disabled = false;
      }, 500);
    }, 100);
  } else {
    window.print();
  }
}

/* ══ CHEAT SHEET: ISOLATED PRINT ══
   Klik na "Ispiši" u cheat kartici → printa SAMO cheat sheet, ne cijelu skriptu */
function printCheatSheet(){
  document.body.classList.add('print-cheat-only');
  // Browser print dialog je sinkron za većinu, ali Safari može biti async — pa dvostruka safety
  setTimeout(function(){
    window.print();
    // Cleanup nakon print dialoga (i ako korisnik cancela)
    setTimeout(function(){
      document.body.classList.remove('print-cheat-only');
    }, 500);
  }, 50);
  track('cheat_sheet_print', {chapter: CURRENT_CHAPTER.code}, 'engagement');
}
// afterprint event je čišćiji način za cleanup
if(typeof window !== 'undefined'){
  window.addEventListener('afterprint', function(){
    document.body.classList.remove('print-cheat-only');
  });
}

/* ══ MINI-DIJAGNOSTIKA "Mogu li ovo na maturi?" ══
   5 strateški odabranih pitanja koja pokrivaju širok spektar H01 gradiva.
   Cilj: korisnik za 60s zna gdje stoji prije nego krene učiti. */
var DIAG_QUESTIONS = [
  {
    q: "Koje je djelo Sofoklo napisao i koje je ispitno djelo za maturu 2025/2026?",
    opts: ["Medeja", "Antigona", "Edip na Kolonu", "Okovani Prometej"],
    correct: 1,
    topic: "Antigona — autor"
  },
  {
    q: "Što je hybris kod Kreonta?",
    opts: [
      "Strah od bogova koji ga paralizira",
      "Ljubav prema državi koja ga zaslijepljuje",
      "Oholost — uvjerenje da njegova riječ natkriljuje božje zakone",
      "Tragička greška proizašla iz neznanja"
    ],
    correct: 2,
    topic: "Hybris vs hamartia"
  },
  {
    q: "Što je katarza prema Aristotelu?",
    opts: [
      "Vrhunac dramske radnje s preokretom",
      "Pročišćenje publike kroz strah i sažaljenje",
      "Zbor koji komentira događaje",
      "Trenutak kada junak prepoznaje istinu"
    ],
    correct: 1,
    topic: "Aristotelova Poetika"
  },
  {
    q: "Koji stih je standard antičke epike (Homer, Vergilije)?",
    opts: ["Pentametar", "Heksametar", "Dvanaesterac", "Slobodni stih"],
    correct: 1,
    topic: "Heksametar"
  },
  {
    q: "Koji je centralni sukob u Antigoni?",
    opts: [
      "Otac protiv sina — Kreont protiv Hemona",
      "Ljubav protiv dužnosti — Antigona protiv Hemona",
      "Božji zakon protiv ljudskog zakona — Antigona protiv Kreonta",
      "Sloboda protiv tiranije — narod protiv Kreonta"
    ],
    correct: 2,
    topic: "Centralni sukob — dva zakona"
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
  document.getElementById('diag').setAttribute('data-state', 'quiz');
  diagRender();
  track('diag_start', {chapter: CURRENT_CHAPTER.code}, 'engagement');
}

function diagSkip(){
  document.getElementById('diag').setAttribute('data-state', 'dismissed');
  try{ sessionStorage.setItem('mt.hrv.h01.diag', 'skipped') }catch(e){}
  track('diag_skip', {chapter: CURRENT_CHAPTER.code}, 'engagement');
}

function diagDismiss(){
  document.getElementById('diag').setAttribute('data-state', 'dismissed');
  try{
    sessionStorage.setItem('mt.hrv.h01.diag', JSON.stringify({
      done: true,
      score: diagState.correct,
      ts: Date.now()
    }));
  }catch(e){}
}

function diagRestart(){
  diagStart();
}

function diagRender(){
  var q = DIAG_QUESTIONS[diagState.idx];
  if(!q) return diagFinish();
  var qEl = document.getElementById('diag-q');
  var optsEl = document.getElementById('diag-opts');
  var curEl = document.getElementById('diag-cur');
  var fillEl = document.getElementById('diag-fill');
  if(qEl) qEl.textContent = q.q;
  if(curEl) curEl.textContent = (diagState.idx + 1);
  if(fillEl) fillEl.style.width = (((diagState.idx + 1) / DIAG_QUESTIONS.length) * 100) + '%';
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
  var msgEl = document.getElementById('diag-msg');
  var recEl = document.getElementById('diag-rec');
  var corEl = document.getElementById('diag-correct');
  if(corEl) corEl.textContent = n;

  // Personalizirana poruka i preporuka
  var msg, rec;
  if(n === 5){
    msg = '🏆 Već vladaš H01 — bravo!';
    rec = 'Tvoj fokus: <b>esej alat</b> i <b>citatnik</b>. Pređi na simulaciju u <a href="/discere?subject=hrvatski&topic=antika&ctx=h01_diag_top" onclick="track(\\'upsell_click\\',{ctx:\\'diag_top_score\\',target:\\'discere\\'},\\'conversion\\')">Discere simulatoru</a> da provjeriš pod uvjetima ispita.';
  } else if(n === 4){
    msg = '🎯 Odlično — solidne osnove.';
    rec = 'Imaš većinu, ali jedan rupica. Preporučujemo: <b>Antigona deep-dive</b> + <b>Pojmovnik</b> kao revizija. Preskoči duga čitanja, idi direktno na <b>Citatnik</b> i <b>Drill</b>.';
  } else if(n === 3){
    msg = '👍 Dobre osnove — treba malo više rada.';
    rec = 'Imaš osnovni pregled, ali ti fali sigurnost u detaljima. Plan: <b>(1)</b> proradi cijelu Teoriju, <b>(2)</b> Antigona deep-dive, <b>(3)</b> Drill flashcards 2× prije Kviza.';
  } else if(n === 2){
    msg = '📚 Tu smo da ti pomognemo — krenimo od početka.';
    rec = 'Ne brini — zato si tu. Idi <b>tab po tab redom</b> (Teorija → Antigona → Esej alat). Ne preskači. Završi s <b>Drillom i Kvizom</b> kao provjera.';
  } else {
    msg = '🌱 Početna točka — sve je pred tobom.';
    rec = 'Antika je velik segment, ali strukturiran je. Prati redoslijed tabova, ne žuri. <b>Cilj #1:</b> razumjeti Antigonin sukob (sekcija 04 u Antigona tabu). Kad to imaš, sve ostalo dolazi prirodno.';
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
    var s = sessionStorage.getItem('mt.hrv.h01.diag');
    if(s){
      document.getElementById('diag').setAttribute('data-state', 'dismissed');
    }
  }catch(e){}
}

/* ══ PDF EXPORT (v3.6.1) ══
   Lazy-loadan html2pdf.js (CDN). Ako library load ili PDF generacija zakaže,
   fallbackamo na window.print() koji koristi naš print stylesheet. */

var _html2pdfLoading = false;
var _html2pdfReady = (typeof html2pdf !== 'undefined');

function _loadHtml2Pdf(callback){
  if(_html2pdfReady || typeof html2pdf !== 'undefined'){
    _html2pdfReady = true;
    callback(null);
    return;
  }
  if(_html2pdfLoading){
    // Already loading — poll
    var pollAttempts = 0;
    var poll = setInterval(function(){
      pollAttempts++;
      if(typeof html2pdf !== 'undefined'){
        clearInterval(poll);
        _html2pdfReady = true;
        callback(null);
      } else if(pollAttempts > 50){ // 10s max wait
        clearInterval(poll);
        callback(new Error('Library load timeout'));
      }
    }, 200);
    return;
  }
  _html2pdfLoading = true;
  var s = document.createElement('script');
  s.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
  s.async = true;
  s.onload = function(){
    _html2pdfReady = true;
    _html2pdfLoading = false;
    callback(null);
  };
  s.onerror = function(){
    _html2pdfLoading = false;
    callback(new Error('CDN failed to load'));
  };
  document.head.appendChild(s);
}

function _pdfFallbackPrint(reason){
  // Loš path — koristimo browser print kao fallback
  if(reason) console.warn('PDF export fallback to print:', reason);
  var btn = document.getElementById('pdf-export-btn');
  var label = document.getElementById('pdf-btn-label');
  if(label) label.textContent = '🖨 Otvaram dijalog za ispis...';
  setTimeout(function(){
    window.print();
    if(btn) btn.disabled = false;
    if(label) label.textContent = '📥 Preuzmi PDF';
  }, 400);
  track('pdf_fallback_print', {reason: String(reason || 'unknown').substring(0,80)}, 'engagement');
}

function generatePDF(){
  var btn = document.getElementById('pdf-export-btn');
  var label = document.getElementById('pdf-btn-label');
  if(btn) btn.disabled = true;
  if(label) label.textContent = '⏳ Učitavam alat...';

  track('pdf_export_start', {chapter: CURRENT_CHAPTER.code}, 'engagement');

  _loadHtml2Pdf(function(err){
    if(err){
      // CDN failed → use native print
      _pdfFallbackPrint('cdn_load_failed');
      return;
    }
    if(label) label.textContent = '⏳ Generiram PDF... (10-20s)';

    // Pamti trenutno stanje tabova
    var layers = document.querySelectorAll('.layer');
    var originalState = [];
    layers.forEach(function(l, i){
      originalState[i] = {
        hasOn: l.classList.contains('on'),
        display: l.style.display
      };
      l.classList.add('on');
      l.style.display = 'block';
    });

    // Sakrij elemente koji ne idu u PDF
    var hideSelectors = [
      '.sidebar', '.sb-hamburger', '.sb-overlay', '.btt',
      '.tabs', '.upsell', '.reveal-lock', '.countdown', '.social-proof',
      '.restore-banner', '.cit-tools', '.soft-hint', '.frustration',
      '.fc-controls', '.mg-board', '.mg-score', '.drill-stats',
      '.yt-grid', '.svg-tt', '.cp-actions', '.pdf-export',
      '#fb-modal-backdrop', '#modal-backdrop', '.foot-feedback',
      '.nav-row', '#qz-app'
    ];
    var hidden = [];
    hideSelectors.forEach(function(sel){
      document.querySelectorAll(sel).forEach(function(el){
        hidden.push({el: el, display: el.style.display});
        el.style.display = 'none';
      });
    });

    document.body.classList.add('pdf-exporting');

    var restoreState = function(){
      layers.forEach(function(l, i){
        if(!originalState[i].hasOn) l.classList.remove('on');
        l.style.display = originalState[i].display || '';
      });
      hidden.forEach(function(h){ h.el.style.display = h.display });
      document.body.classList.remove('pdf-exporting');
    };

    var targetElement = document.querySelector('.content-wrap') || document.body;

    var opt = {
      margin:       [10, 10, 12, 10],
      filename:     'Maturiraj_Hrvatski_H01_Temelji_civilizacije.pdf',
      image:        {type: 'jpeg', quality: 0.92},
      html2canvas:  {
        scale: 1.3,
        useCORS: false,        // Google Fonts ne podržava CORS za CSS — disable
        allowTaint: true,      // ako resource taintira canvas, pusti — ne baci error
        backgroundColor: '#ffffff',
        logging: false,
        foreignObjectRendering: false,  // SVG <foreignObject> podrška (problematično u Safariju)
        removeContainer: true,
        imageTimeout: 8000,    // 8s timeout za pojedini image (umjesto default 15s)
        ignoreElements: function(el){
          if(!el || !el.tagName) return false;
          var t = el.tagName.toLowerCase();
          // Skip vanjske resource elemente
          if(t === 'iframe' || t === 'video' || t === 'audio' || t === 'embed' || t === 'object') return true;
          // Skip <link> tagove osim print stylesheeta (govori html2canvas da ne fetch-a Google Fonts)
          if(t === 'link' && el.rel === 'stylesheet') return true;
          if(el.classList){
            if(el.classList.contains('svg-tt')) return true;
            if(el.classList.contains('modal-backdrop')) return true;
            if(el.classList.contains('svg-hs-ring')) return true;  // animation može lupiti canvas
            if(el.classList.contains('svg-hint')) return true;
          }
          // Skip ::before/::after pseudo-elementi koji generiraju content (Hero orbs)
          if(el.classList && (el.classList.contains('hero-orb-a') || el.classList.contains('hero-orb-b'))) return true;
          return false;
        }
      },
      jsPDF:        {unit: 'mm', format: 'a4', orientation: 'portrait', compress: true, hotfixes: ['px_scaling']},
      pagebreak:    {mode: ['css', 'legacy'], avoid: ['.cr', '.box-int', '.box-key', '.sc', '.cmp-c', '.yt-card', '.cp-item', '.b20-item']}
    };

    try {
      html2pdf().set(opt).from(targetElement).save().then(function(){
        restoreState();
        if(btn) btn.disabled = false;
        if(label) label.textContent = '✓ Preuzeto!';
        setTimeout(function(){
          if(label) label.textContent = '📥 Preuzmi PDF';
        }, 2400);
        track('pdf_export_success', {chapter: CURRENT_CHAPTER.code}, 'engagement');
        soundOk();
      }).catch(function(genErr){
        console.error('PDF generation failed:', genErr);
        restoreState();
        track('pdf_export_fail', {error: String(genErr).substring(0,100)}, 'error');
        // Fallback: native print
        _pdfFallbackPrint('generation_error');
      });
    } catch(syncErr){
      console.error('PDF sync error:', syncErr);
      restoreState();
      track('pdf_export_fail', {error: 'sync: ' + String(syncErr).substring(0,80)}, 'error');
      _pdfFallbackPrint('sync_error');
    }
  });
}

/* ══ FEEDBACK MODAL (v3.6.1) ══ */
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
  if(btn){btn.disabled=false; btn.textContent='Pošalji →'}
  if(form) form.style.display = 'flex';

  bd.classList.add('show');
  setTimeout(function(){
    var ta = document.getElementById('fb-message');
    if(ta) ta.focus();
  }, 100);

  track('feedback_modal_open', {
    tab: lsLoad('mt.hrv.h01.tab', 0)
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
    p_tab_index: lsLoad('mt.hrv.h01.tab', 0),
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
      btn.textContent = 'Pošalji →';
      soundNg();
    }
  }).catch(function(){
    if(fbMsg){fbMsg.className='modal-msg show error'; fbMsg.textContent='✗ Greška u mreži. Pošalji e-mail na maturirajgreske@gmail.com'}
    btn.disabled = false;
    btn.textContent = 'Pošalji →';
  });

  return false;
}

/* ══ LOCKED SIDEBAR LINK → OPEN MODAL ══ */
function openChapterModal(chapterCode, chapterTitle, era, previewBody){
  openModal({
    ico:'📖',
    eye:'POGLAVLJE U IZRADI · '+era,
    title:chapterCode.toUpperCase()+' · '+chapterTitle+' — uskoro!',
    desc:'Radi se na ovom poglavlju. <strong>Ostavi svoj e-mail</strong> i javit ćemo ti čim izađe. Bez spama, bez newslettera — samo jedan e-mail kad je gotovo.',
    preview_title:'Pregled sadržaja',
    preview_body:previewBody,
    source:'locked_chapter',
    chapter_code:chapterCode.toLowerCase()
  });
}

/* ══ SVG HOTSPOT TOOLTIP (v3.5) ══ */
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

/* ══ CITATNIK SEARCH + FILTER (v3.5) ══ */
var CIT_STATE = {q: '', src: 'all'};
var CIT_ITEMS_CACHE = null;

function _citItems(){
  if(!CIT_ITEMS_CACHE){
    CIT_ITEMS_CACHE = Array.prototype.slice.call(
      document.querySelectorAll('#l3 [data-q-src]')
    );
  }
  return CIT_ITEMS_CACHE;
}
function _citSections(){
  return Array.prototype.slice.call(
    document.querySelectorAll('#l3 [data-cit-section]')
  );
}

function _normalize(s){
  // Normaliziraj hrvatske znakove za search (č→c, š→s itd.)
  return (s||'').toLowerCase()
    .replace(/č|ć/g,'c').replace(/š/g,'s').replace(/ž/g,'z')
    .replace(/đ/g,'d').replace(/[„""'']/g,'');
}

function _citApplyFilters(){
  var items = _citItems();
  var q = _normalize(CIT_STATE.q);
  var src = CIT_STATE.src;
  var shown = 0;
  var shownBySection = {};

  items.forEach(function(el){
    var itemSrc = el.getAttribute('data-q-src');
    var searchText = _normalize(
      (el.getAttribute('data-q-text')||'') + ' ' + (el.textContent||'')
    );
    var matchesSrc = (src === 'all' || itemSrc === src);
    var matchesQ = (!q || searchText.indexOf(q) !== -1);
    var visible = matchesSrc && matchesQ;
    el.classList.toggle('cit-hidden', !visible);
    if(q && visible){
      el.classList.add('cit-highlight');
    } else {
      el.classList.remove('cit-highlight');
    }
    if(visible){
      shown++;
      shownBySection[itemSrc] = (shownBySection[itemSrc]||0) + 1;
    }
  });

  // Hide prazne sekcije
  _citSections().forEach(function(sec){
    var secSrc = sec.getAttribute('data-cit-section');
    if(secSrc === 'index') return;
    var hasItems = shownBySection[secSrc] > 0;
    var hide = !hasItems || (src !== 'all' && src !== secSrc);
    sec.classList.toggle('cit-hidden', hide);
  });

  // Tematski index vidljiv samo ako nema search query
  var indexSec = document.querySelector('#l3 [data-cit-section="index"]');
  if(indexSec){
    var hideIndex = q || src !== 'all';
    indexSec.classList.toggle('cit-hidden', hideIndex);
    var next = indexSec.nextElementSibling;
    while(next && !next.classList.contains('nav-row')){
      if(next.classList.contains('prose') || next.classList.contains('tbl')){
        next.classList.toggle('cit-hidden', hideIndex);
      }
      next = next.nextElementSibling;
    }
  }

  // Stats
  var stats = document.getElementById('cit-stats');
  if(stats){
    if(q || src !== 'all'){
      stats.textContent = shown + ' ' + (shown===1?'citat':(shown<5?'citata':'citata')) + ' pronađeno';
    } else {
      stats.textContent = items.length + ' citata ukupno';
    }
  }

  var nr = document.getElementById('cit-no-results');
  if(nr){
    nr.classList.toggle('show', shown === 0 && (q || src !== 'all'));
  }

  var clr = document.getElementById('cit-clear');
  if(clr) clr.classList.toggle('show', !!q);
}

function citFilter(src){
  CIT_STATE.src = src;
  document.querySelectorAll('.cit-filter').forEach(function(btn){
    btn.classList.toggle('active', btn.getAttribute('data-src') === src);
    btn.setAttribute('aria-pressed', btn.getAttribute('data-src') === src ? 'true' : 'false');
  });
  _citApplyFilters();
  track('cit_filter', {src: src}, 'engagement');
}

function citClear(){
  CIT_STATE.q = '';
  var inp = document.getElementById('cit-search');
  if(inp){ inp.value = ''; inp.focus(); }
  _citApplyFilters();
}

function _citInit(){
  var inp = document.getElementById('cit-search');
  if(!inp) return;
  var timer = null;
  inp.addEventListener('input', function(){
    clearTimeout(timer);
    timer = setTimeout(function(){
      CIT_STATE.q = inp.value.trim();
      _citApplyFilters();
      if(CIT_STATE.q.length >= 2){
        track('cit_search', {q_length: CIT_STATE.q.length}, 'engagement');
      }
    }, 150);
  });
  var tools = document.querySelector('.cit-tools');
  if(tools && !document.getElementById('cit-no-results')){
    var nr = document.createElement('div');
    nr.id = 'cit-no-results';
    nr.className = 'cit-no-results';
    nr.innerHTML = 'Nema citata za taj upit. Pokušaj s drugom riječi ili filterom.';
    tools.parentNode.insertBefore(nr, tools.nextSibling);
  }
}

/* ══ TABS ══ */
var quizInited=false, drillInited=false;
var VISITED_TABS={};
var QUIZ_PASSED=false; // nakon kviza ≥60%
var _tabStartTime = Date.now();

/* Breadcrumb tab labele (v3.6) */
var TAB_LABELS = ['Teorija','Antigona','Esej alat','Citatnik','Pojmovnik','Drill','Kviz','Checkpoint'];

/* ══ SIDEBAR + PROGATE JS (v2) ══ */
/* ══════════════════════════════════════════════════════════════
   SIDEBAR + PROGATE JS — Maturiraj Hrvatski v2
   
   Ubacuje se u glavni <script> blok poglavlja (prije sw() funkcije).
   Ovisi o CURRENT_CHAPTER.code (string, npr. 'h11' ili 'd10').
   ══════════════════════════════════════════════════════════════ */

/* ══ SIDEBAR ACTIVATION ══
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
        openChapterModal(code, title, code.indexOf('d')===0?'Obvezatno djelo':'Poglavlje',
                         'Još u pripremi. Ostavi e-mail i javit ćemo ti kad izađe.');
        return false;
      });
    } else {
      item.classList.add('completed');
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

/* ══ TIER DETECTION + PROGATE ══
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



/* ══ MUST-KNOW BOX — expand/collapse ══ */
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

/* ══ FC (Flashcards) paywall — free tier limit ══ */
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
             '<div class="drill-paywall-ico">🔓</div>' +
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

/* ══ Quiz paywall — free tier limit ══ */
var QZ_FREE_LIMIT = 5;
function qzIsPaid(){
  var t = (document.body.getAttribute('data-tier')||'free');
  return t === 'standard' || t === 'pro';
}
function qzShowPaywall(){
  var app = document.getElementById('qz-app');
  if(!app) return;
  var chapter = (typeof CURRENT_CHAPTER !== 'undefined' && CURRENT_CHAPTER.code) || 'unknown';
  app.innerHTML = '<div class="qz-paywall"><div class="qz-paywall-ico">🎯</div>' +
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
  var prevTab = lsLoad('mt.hrv.h01.tab', null);
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
  lsSave('mt.hrv.h01.tab',i);

  VISITED_TABS[i]=true;
  lsSave('mt.hrv.h01.visited',VISITED_TABS);
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
        b.textContent='✓';
        t.appendChild(b);
      }
    } else {
      if(existing) existing.remove();
    }
  });
}

/* ══ SIDEBAR ══ */
function toggleSidebar(){var s=document.getElementById('sidebar'),o=document.getElementById('overlay');s.classList.toggle('mobile-open');o.classList.toggle('show')}
function closeSidebar(){document.getElementById('sidebar').classList.remove('mobile-open');document.getElementById('overlay').classList.remove('show')}

/* ══ LOCALSTORAGE ══ */
function lsSave(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
function lsLoad(k,def){try{var v=localStorage.getItem(k);return v!==null?JSON.parse(v):def}catch(e){return def}}

/* ══ SOUND ══ */
function beep(f,d,v,t){try{var c=new(window.AudioContext||window.webkitAudioContext)(),o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);o.frequency.value=f;o.type=t||'sine';g.gain.setValueAtTime(v||0.08,c.currentTime);g.gain.exponentialRampToValueAtTime(0.001,c.currentTime+d);o.start(c.currentTime);o.stop(c.currentTime+d)}catch(e){}}
function soundOk(){beep(660,.1,.08,'sine');setTimeout(function(){beep(880,.14,.07,'sine')},110)}
function soundNg(){beep(200,.18,.08,'sawtooth')}
function soundDone(){[440,550,660,880].forEach(function(f,i){setTimeout(function(){beep(f,.18,.07,'sine')},i*90)})}

/* ══ PROGRESS ══ */
function updateProgress(pct){
  var p=Math.max(5,pct);
  var pb=document.getElementById('prog-bar'); if(pb) pb.style.width=p+'%';
  var pct2=document.getElementById('prog-pct'); if(pct2) pct2.textContent=p+'%';
  var hp=document.getElementById('hero-pb'); if(hp) hp.style.width=p+'%';
  var hl=document.getElementById('hero-prog-lbl'); if(hl) hl.textContent=p+'% završeno';
  lsSave('mt.hrv.h01.prog',p);
}

/* ══ RESTORE BANNER ══ */
function checkRestore(){
  var prog=lsLoad('mt.hrv.h01.prog',null);
  var tab=lsLoad('mt.hrv.h01.tab',null);
  var cp=lsLoad('mt.hrv.h01.cp',null);
  var visited=lsLoad('mt.hrv.h01.visited',null);
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
  var tab=lsLoad('mt.hrv.h01.tab',0);
  var prog=lsLoad('mt.hrv.h01.prog',5);
  var visited=lsLoad('mt.hrv.h01.visited',{});
  VISITED_TABS=visited;
  if(prog) updateProgress(prog);
  updateTabBadges();
  cpLoad();
  if(tab!==null) sw(parseInt(tab));
}
function dismissRestore(){
  document.getElementById('restore-banner').classList.remove('show');
  ['mt.hrv.h01.prog','mt.hrv.h01.tab','mt.hrv.h01.cp','mt.hrv.h01.visited','mt.hrv.h01.quiz_passed'].forEach(function(k){try{localStorage.removeItem(k)}catch(e){}});
  VISITED_TABS={0:true};
  QUIZ_PASSED=false;
  document.querySelectorAll('.cp-item.done').forEach(function(el){el.classList.remove('done')});
  updateTabBadges();
  recomputeProgress();
  cpUpdate();
}

/* ═══════════════════════════════════════════
   POJMOVNIK — LIVE SEARCH + FILTER
   ═══════════════════════════════════════════ */
(function initPojmovnik(){
  function filter(){
    var search=document.getElementById('pojm-search');
    var filters=document.getElementById('pojm-filters');
    if(!search||!filters)return;
    var q=search.value.toLowerCase().trim();
    var activeBtn=filters.querySelector('.pojm-filter.on');
    var cat=activeBtn?activeBtn.dataset.cat:'all';
    var items=document.querySelectorAll('.pojm');
    var shown=0;
    items.forEach(function(el){
      var kw=(el.dataset.kw||'').toLowerCase();
      var elCat=el.dataset.cat;
      var matchesSearch=q===''||kw.indexOf(q)!==-1||el.textContent.toLowerCase().indexOf(q)!==-1;
      var matchesCat=cat==='all'||elCat===cat;
      if(matchesSearch&&matchesCat){el.classList.remove('hidden');shown++}
      else el.classList.add('hidden');
    });
    var c=document.getElementById('pojm-count');
    if(c) c.textContent=shown+' '+(shown===1?'pojam':(shown<5?'pojma':'pojmova'))+' prikazano';
  }
  document.addEventListener('DOMContentLoaded',function(){
    var search=document.getElementById('pojm-search');
    if(search) search.addEventListener('input',filter);
    var filterBtns=document.querySelectorAll('.pojm-filter');
    filterBtns.forEach(function(b){
      b.addEventListener('click',function(){
        filterBtns.forEach(function(x){x.classList.remove('on')});
        b.classList.add('on');
        filter();
      });
    });
  });
})();

/* ═══════════════════════════════════════════
   FLASHCARDS
   ═══════════════════════════════════════════ */
var FC_CARDS=[
  {cat:'DRAMA',term:'Katarza',def:'Pročišćenje koje publika doživljava gledajući tragediju. Aristotelov pojam.'},
  {cat:'DRAMA',term:'Hybris',def:'Bahata oholost, prekoračenje granica bogova. Glavni uzrok tragičkog pada junaka.'},
  {cat:'DRAMA',term:'Hamartia',def:'Tragička krivnja — junak pada zbog vlastite pogreške, ne slučajnosti.'},
  {cat:'DRAMA',term:'Peripetija',def:'Nagli obrat u radnji — od sreće u nesreću ili obrnuto.'},
  {cat:'DRAMA',term:'Anagnorizis',def:'Prepoznavanje, otkriće istine. Često vezano uz peripetiju.'},
  {cat:'DRAMA',term:'Tri jedinstva',def:'Jedinstvo radnje, vremena (24h) i mjesta. Pravilo klasicističke drame.'},
  {cat:'DRAMA',term:'Mimesis',def:'Oponašanje stvarnosti. Aristotelov pojam — književnost oponaša život.'},
  {cat:'EP',term:'Heksametar',def:'Stih od šest stopa. Standard antičke epike (Homer, Vergilije).'},
  {cat:'EP',term:'Invokacija',def:'Zaziv muze na početku epa. "Srdžbu mi, boginjo, pjevaj Ahileja..."'},
  {cat:'EP',term:'Epiteton ornans',def:'Ukrasni ustaljeni pridjev: "brzonogi Ahilej", "sivooki Atena".'},
  {cat:'STIL',term:'In medias res',def:'Usred stvari — radnja počinje u središtu događaja, prethodno kao flashback.'},
  {cat:'STIL',term:'Paralelizam',def:'Ponavljanje iste misli drugim riječima u susjednim stihovima. Tipično za psalme.'},
  {cat:'STIL',term:'Antiteza',def:'Suprotstavljanje pojmova — "tko se uzvisi, bit će ponižen".'},
  {cat:'BIBLIJA',term:'Parabola',def:'Alegorijska priča s moralnom poukom. Tipično za Novi zavjet.'},
  {cat:'BIBLIJA',term:'Psalam',def:'Religijska lirska pjesma. 150 psalama u Starom zavjetu.'},
  {cat:'BIBLIJA',term:'Apokalipsa',def:'Proročka proza o kraju svijeta, puna simbola. Zadnja knjiga N. zavjeta.'},
  {cat:'LIRIKA',term:'Oda',def:'Svečana lirska pjesma uzvišenog tona.'},
  {cat:'LIRIKA',term:'Elegija',def:'Tužna, melankolična lirska pjesma — smrt, rastanak, izgubljena ljubav.'},
  {cat:'PISMO',term:'Klinasto pismo',def:'Prvo pismo u povijesti, oko 3200. pr. Kr. u Sumeru (Mezopotamija).'},
  {cat:'PISMO',term:'Hijeroglifi',def:'Egipatsko "sveto pismo". Slikovni znakovi + fonetski simboli.'}
];
var fcIdx=0, fcKnown=0, fcUnknown=0, fcOrder=[];

/* ══ DRILL STATE PERSISTENCE (v3.5) ══
   Pamti kartice i progress dok se korisnik mota kroz tabove.
   sessionStorage — resetira se na novi tab/window (svjesno, da ne
   blokira "novi krug" između dana). Za cross-session, switch na lsSave.
═════════════════════════════════════════════ */
var DRILL_SS_KEY = 'mt.hrv.h01.drill';

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
    document.getElementById('fc-term').textContent='Gotovo! 🎉';
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

/* ═══════════════════════════════════════════
   MATCHING GAME — djelo → autor
   ═══════════════════════════════════════════ */
var MG_PAIRS=[
  {l:'Ilijada · Odiseja',r:'Homer'},
  {l:'Antigona · Kralj Edip',r:'Sofoklo'},
  {l:'Medeja · Bakhe',r:'Euripid'},
  {l:'Okovani Prometej',r:'Eshil'},
  {l:'Eneida',r:'Vergilije'},
  {l:'Metamorfoze',r:'Ovidije'},
  {l:'Poetika · Nikomahova etika',r:'Aristotel'}
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
        board.insertAdjacentHTML('afterend','<div class="mg-done" id="mg-done">🏆 SVI PAROVI SPARENI!</div>');
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

/* ═══════════════════════════════════════════
   KVIZ
   ═══════════════════════════════════════════ */
var QUIZ=[
  {q:\`Koje je djelo smatrano prvim velikim književnim djelom svjetske književnosti?\`,opts:[\`Ilijada\`,\`Ep o Gilgamešu\`,\`Eneida\`,\`Biblija\`],correct:1,exp:\`Ep o Gilgamešu (oko 2100. pr. Kr., Mezopotamija) stariji je od Homerovih epova za više od tisuću godina.\`},
  {q:\`Koji je stih standard antičke epike (Homer, Vergilije)?\`,opts:[\`Pentametar\`,\`Dvanaesterac\`,\`Heksametar\`,\`Deseterac\`],correct:2,exp:\`Heksametar — šestostopni stih. Homer, Vergilije i kasnije Marulić (Judita) koriste se heksametrom.\`},
  {q:\`Koje djelo je napisao Sofoklo?\`,opts:[\`Medeja\`,\`Okovani Prometej\`,\`Antigona\`,\`Ćelava pjevačica\`],correct:2,exp:\`Antigona (oko 441. pr. Kr.) je Sofoklova tragedija. Medeja je Euripidova, Okovani Prometej Eshilov.\`},
  {q:\`Što je katarza?\`,opts:[\`Prvi dio tragedije prije ulaska zbora\`,\`Pročišćenje koje publika doživljava gledajući tragediju\`,\`Oholost koja vodi u propast junaka\`,\`Nagli obrat u radnji\`],correct:1,exp:\`Katarza (Aristotel, Poetika) = pročišćenje emocija kroz strah i sažaljenje tijekom gledanja tragedije.\`},
  {q:\`Koji je lik u Antigoni predstavnik državnog/ljudskog zakona?\`,opts:[\`Hemon\`,\`Tirezija\`,\`Kreont\`,\`Polinik\`],correct:2,exp:\`Kreont, novi tebanski kralj, izdaje naredbu o zabrani pokopa Polinika — predstavlja državni autoritet.\`},
  {q:\`Koja je tragička greška (hamartia) Kreonta?\`,opts:[\`Ljubav prema Antigoni\`,\`Hybris — oholost i vjerovanje da njegova riječ natkriljuje bogove\`,\`Strah od smrti\`,\`Pohlepa za zlatom\`],correct:1,exp:\`Kreontova hybris — bahata oholost prema božanskim zakonima. Klasični uzrok tragičkog pada.\`},
  {q:\`Koje je Aristotelovo djelo najutjecajnija teorija drame ikad napisana?\`,opts:[\`Država\`,\`Metafizika\`,\`Poetika\`,\`Nikomahova etika\`],correct:2,exp:\`Poetika (4. st. pr. Kr.) — uspostavlja pojmove tragedije, katarze, hamartije, tri jedinstva.\`},
  {q:\`Koji epitet NIJE tipičan Homerov epiteton?\`,opts:[\`brzonogi Ahilej\`,\`sivooki Atena\`,\`ružoprsta Zora\`,\`crvena Antigona\`],correct:3,exp:\`Homerovski epiteti su ustaljeni pridjevi uz likove u Ilijadi i Odiseji. "Crvena Antigona" ne postoji.\`},
  {q:\`Koji grčki pjesnik je napisao Ilijadu i Odiseju?\`,opts:[\`Homer\`,\`Hesiod\`,\`Sapfa\`,\`Anakreont\`],correct:0,exp:\`Homer (oko 8. st. pr. Kr.) — autor/sastavljač najvećih grčkih epova.\`},
  {q:\`Što je parabola u Bibliji?\`,opts:[\`Duga pripovjedna pjesma\`,\`Alegorijska priča s moralnom poukom\`,\`Svečana lirska pjesma\`,\`Proročka vizija o kraju svijeta\`],correct:1,exp:\`Parabola = alegorijska priča s moralnom poukom. Najpoznatije: Milosrdni Samaritanac, Izgubljeni sin.\`},
  {q:\`Koliko glumaca u svojim tragedijama koristi Sofoklo?\`,opts:[\`Jednog\`,\`Dva\`,\`Tri\`,\`Četiri\`],correct:2,exp:\`Sofoklo je uveo trećeg glumca (prije njega — Eshil je uveo drugog, a originalno je bio samo jedan + zbor).\`},
  {q:\`Tko je autor Eneide?\`,opts:[\`Horacije\`,\`Ovidije\`,\`Vergilije\`,\`Ciceron\`],correct:2,exp:\`Publije Vergilije Maron (70. – 19. pr. Kr.) — autor Eneide, rimskog nacionalnog epa.\`},
  {q:\`Koja rečenica najbolje opisuje Antigoninu poziciju?\`,opts:[\`Pokorava se Kreontu iz straha\`,\`Brata pokopava jer božji nepisani zakoni natkriljuju ljudske\`,\`Želi postati kraljica Tebe\`,\`Traži mir za cijeli narod\`],correct:1,exp:\`Antigona se poziva na "nepisane i nepropadljive zakone bogova" koje Kreontova naredba ne može nadjačati.\`},
  {q:\`Što znači "in medias res"?\`,opts:[\`Na kraju priče\`,\`Usred stvari — radnja počinje u središtu događaja\`,\`Retoričko pitanje\`,\`Preneseno značenje\`],correct:1,exp:\`Usred stvari — pripovjedni postupak gdje radnja počinje in medias res, prethodno se priča retrospektivno.\`},
  {q:\`Koja vrsta pisma se smatra prvim pismom u povijesti?\`,opts:[\`Hijeroglifi\`,\`Klinasto pismo\`,\`Glagoljica\`,\`Grčki alfabet\`],correct:1,exp:\`Klinasto pismo — oko 3200. pr. Kr. u Sumeru. Pisano trstikom na glinenim pločicama.\`},
  {q:\`Koliko pjevanja ima Ilijada?\`,opts:[\`12\`,\`16\`,\`24\`,\`36\`],correct:2,exp:\`24 pjevanja (rapsodije). Isti broj ima i Odiseja — obje su podijeljene na 24 knjige.\`},
  {q:\`Na koga je najviše utjecala Aristotelova Poetika?\`,opts:[\`Samo na grčke tragedije\`,\`Na sve kasnije drame, posebno klasicističke\`,\`Na komediju\`,\`Na epiku\`],correct:1,exp:\`Aristotelova Poetika je temelj za sve kasnije drame — osobito francuski klasicizam (17. st.) koji strogo primjenjuje tri jedinstva.\`},
  {q:\`Koja je uloga zbora (kora) u grčkoj tragediji?\`,opts:[\`Samo pjevati između činova\`,\`Kolektivni glas koji komentira radnju i donosi moralne sudove\`,\`Glumiti manje uloge\`,\`Uvoditi nove likove\`],correct:1,exp:\`Kor je moralna vaga drame — kolektivni glas koji komentira, savjetuje likove i dijeli moralne sudove s publikom.\`},
  {q:\`Koji događaj je vrhunac Kreontove tragedije u Antigoni?\`,opts:[\`Smrt Polinika\`,\`Tirezijino proročanstvo\`,\`Smrt Antigone, Hemona i Euridike — Kreont ostaje sam\`,\`Kažnjavanje Ismene\`],correct:2,exp:\`Kreontova tragedija vrhunac je kad gubi sina Hemona i ženu Euridiku zbog vlastite tvrdoglavosti — ostaje živ da pati.\`},
  {q:\`Što je, prema Aristotelovoj definiciji tragedije, središnji element koji izaziva katarzu?\`,opts:[\`Sreća i smijeh publike\`,\`Strah i sažaljenje koje junak izaziva\`,\`Retorička virtuoznost\`,\`Jakost glumca\`],correct:1,exp:\`Aristotel: tragedija izaziva strah (fobos) i sažaljenje (éleos) — osjećaje koji publiku vode kroz katarzu (pročišćenje).\`}
];
var QUIZ_SHUFFLED=QUIZ.slice();
var qzState={idx:0,score:0,answered:[]};

function renderQuizIntro(){
  var el=document.getElementById('qz-app');
  el.innerHTML=\`
    <div class="qz-start">
      <div class="qz-start-ico">🧠</div>
      <h3>20 pitanja · bez vremena</h3>
      <p>Pitanja pokrivaju cijelo poglavlje: pismo, Biblija, Homer, drama, Antigona, Rim. Na kraju dobivaš ocjenu i objašnjenja.</p>
      <button class="fcb primary" onclick="qzStart()">Započni kviz →</button>
    </div>
  \`;
}
function qzStart(){
  qzState={idx:0,score:0,answered:[]};
  QUIZ_SHUFFLED=QUIZ.slice();
  for(var i=QUIZ_SHUFFLED.length-1;i>0;i--){
    var j=Math.floor(Math.random()*(i+1));
    var t=QUIZ_SHUFFLED[i];QUIZ_SHUFFLED[i]=QUIZ_SHUFFLED[j];QUIZ_SHUFFLED[j]=t;
  }
  track('quiz_start', {total_questions: QUIZ.length}, 'engagement');
  qzRender();
}
function qzRender(){
  var q=QUIZ_SHUFFLED[qzState.idx];
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
  var q=QUIZ_SHUFFLED[qzState.idx];
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
  fb.innerHTML=\`<b>\${ok?'✓ Točno!':'✗ Pogrešno.'}</b> \${q.exp}\`;
  var isLast=qzState.idx===QUIZ.length-1;
  document.getElementById('qz-nav').innerHTML=\`<button class="fcb primary" onclick="qzNext()">\${isLast?'Prikaži rezultat':'Sljedeće pitanje'} →</button>\`;
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

/* ══ SHARE ══ */
function qzShare(pct,score){
  var url='https://maturiraj.hr/skripte/hrvatski/h01';
  var text='Prošao/la sam kviz iz H01 · Temelji civilizacije i antika na maturiraj.hr — '+score+'/'+QUIZ.length+' ('+pct+'%) 🏛️';
  var fb=document.getElementById('qz-share-fb');

  // Try Web Share API (mobile)
  if(navigator.share){
    navigator.share({title:'Maturiraj.hr · H01 Kviz',text:text,url:url})
      .then(function(){if(fb)fb.textContent='Podijeljeno ✓'})
      .catch(function(){/* user cancelled, silent */});
    return;
  }
  // Fallback: copy to clipboard
  var full=text+'\\n'+url;
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(full).then(function(){
      if(fb){fb.textContent='✓ Link kopiran! Zalijepi u WhatsApp/Instagram';setTimeout(function(){fb.textContent=''},3500)}
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
  if(pct>=90){grade='ODLIČAN';msg='Spreman si za Antigonu na maturi.';ico='🏆';scoreBand='great'}
  else if(pct>=75){grade='VRLO DOBAR';msg='Solidno poznaješ gradivo. Doradi par tema.';ico='💪';scoreBand='good'}
  else if(pct>=60){grade='DOBAR';msg='Dobra osnova. Ponovi pojmovnik i Antigona deep-dive.';ico='📚';scoreBand='good'}
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
        <button class="fcb" onclick="sw(1)">← Antigona</button>
        <button class="fcb" onclick="sw(4)">📚 Pojmovnik</button>
      </div>
      <div id="qz-share-fb" style="margin-top:14px;font-family:var(--mono);font-size:11px;color:var(--green);min-height:16px"></div>
    </div>
  \`;

  // ═══ PLAYBOOK P3.2: REZULTAT REVEAL — najvažnija konverzijska taktika ═══
  // Vidljivo: osnovni rezultat + promašeni. Zakljucano: AI analiza, plan, vježbe.
  // Očekivani ROI iz playbooka: 12–18% Standard → Pro konverzija.
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
  if(qzState.score>=QUIZ.length*0.6){QUIZ_PASSED=true;lsSave('mt.hrv.h01.quiz_passed',true)}
  recomputeProgress();
  document.getElementById('qz-app').innerHTML=html;
}

/* ═══════════════════════════════════════════
   CHECKPOINT
   ═══════════════════════════════════════════ */
function cpToggle(el){
  el.classList.toggle('done');
  cpSave();
  cpUpdate();
  if(el.classList.contains('done')) soundOk();
}
function cpSave(){
  var states=[];
  document.querySelectorAll('.cp-item').forEach(function(el){states.push(el.classList.contains('done'))});
  lsSave('mt.hrv.h01.cp',states);
}
function cpLoad(){
  var states=lsLoad('mt.hrv.h01.cp',null);
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

/* ══ INIT ══ */
document.addEventListener('DOMContentLoaded',function(){
  _initTracking();
  track('page_view', {chapter: CURRENT_CHAPTER.code, days_to_matura: daysToMatura()}, 'navigation');

  checkRestore();
  cpLoad();
  var visited=lsLoad('mt.hrv.h01.visited',null);
  if(visited){VISITED_TABS=visited}
  QUIZ_PASSED=lsLoad('mt.hrv.h01.quiz_passed',false);
  VISITED_TABS[0]=true;
  updateTabBadges();
  recomputeProgress();

  // Breadcrumb: reflect current tab (v3.6)
  var currentTab = lsLoad('mt.hrv.h01.tab', 0);
  var bcTab = document.getElementById('bc-tab');
  if(bcTab && TAB_LABELS[currentTab]) bcTab.textContent = TAB_LABELS[currentTab];

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

  /* ══ FEEDBACK MODAL: char counter ══ */
  var fbTa = document.getElementById('fb-message');
  var fbCnt = document.getElementById('fb-char-count');
  if(fbTa && fbCnt){
    fbTa.addEventListener('input', function(){
      var len = fbTa.value.length;
      fbCnt.textContent = len;
      fbCnt.parentElement.classList.toggle('over', len > 5000);
    });
  }

  /* ══ UPSELL IMPRESSION TRACKING (IntersectionObserver) ══ */
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

  /* ══ BACK-TO-TOP SCROLL LISTENER ══ */
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

  /* ══ KEYBOARD NAV ══ */
  document.addEventListener('keydown',function(e){
    // Esc: zatvori modal ili sidebar
    if(e.key==='Escape'){
      var fbModal=document.getElementById('fb-modal-backdrop');
      if(fbModal&&fbModal.classList.contains('show')){closeFeedbackModal();return}
      var modal=document.getElementById('modal-backdrop');
      if(modal&&modal.classList.contains('show')){closeModal();return}
      var sb=document.getElementById('sidebar');
      if(sb&&sb.classList.contains('mobile-open')){closeSidebar();return}
    }
    // Ctrl+K / Cmd+K → focus pojmovnik search
    if((e.ctrlKey||e.metaKey)&&e.key==='k'){
      e.preventDefault();
      sw(4);
      setTimeout(function(){var s=document.getElementById('pojm-search');if(s)s.focus()},250);
      return;
    }
    var tag=(e.target&&e.target.tagName||'').toLowerCase();
    if(tag==='input'||tag==='textarea')return;
    if(e.target.classList&&e.target.classList.contains('tab')){
      if(e.key==='ArrowRight'||e.key==='ArrowLeft'){
        e.preventDefault();
        var curr=parseInt(lsLoad('mt.hrv.h01.tab',0));
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

  if(!lsLoad('mt.hrv.h01.hinted',false)){
    setTimeout(function(){lsSave('mt.hrv.h01.hinted',true)},3000);
  }
});
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
          <a href="Maturiraj_Pricing.html" class="mt-paywall-link">Vidi sve tier opcije →</a>
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
    alert(\`🚧 Pretplata u izradi.\\n\\nUskoro: Stripe Checkout za \${tier === 'pro' ? 'Pro 19,99€' : 'Standard 9,99€'}/mj\\n\\n(Mock: postavljen tier na \${tier.toUpperCase()})\`);
    setTier(tier);
    closePaywall();
    location.reload();
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
    location.href = 'Maturiraj_Pricing.html';
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
/* WC_UPDATE_INJECTED */

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
;
/* CP_RESET_INJECTED */

function cpReset(){
  if(!confirm('Resetiraj sve označene stavke?')) return;
  var items = document.querySelectorAll('.cp-item');
  items.forEach(function(it){ it.classList.remove('done'); });
  try { localStorage.removeItem('mt.hrv.h01.cp'); } catch(e){}
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
}`;

export default function H01Chapter() {
  const containerRef = useRef(null);
  const stylesInjectedRef = useRef(false);
  const scriptsExecutedRef = useRef(false);

  useEffect(() => {
    // Inject styles (once per page mount)
    if (!stylesInjectedRef.current && STYLES_CSS) {
      const styleEl = document.createElement('style');
      styleEl.id = `chapter-styles-H01`;
      styleEl.textContent = STYLES_CSS;
      document.head.appendChild(styleEl);
      stylesInjectedRef.current = true;
    }

    // Execute inline scripts (once per page mount)
    if (!scriptsExecutedRef.current && SCRIPTS_JS) {
      try {
        const scriptEl = document.createElement('script');
        scriptEl.textContent = SCRIPTS_JS;
        document.body.appendChild(scriptEl);
        scriptsExecutedRef.current = true;
      } catch (err) {
        console.error(`[H01] Script execution error:`, err);
      }
    }

    return () => {
      // Cleanup on unmount
      const styleEl = document.getElementById(`chapter-styles-H01`);
      if (styleEl) styleEl.remove();
      stylesInjectedRef.current = false;
      scriptsExecutedRef.current = false;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="chapter-h01"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: BODY_HTML }}
    />
  );
}

// Chapter uses HTML-in-JSX strategy — no structured data object
export const HRV_POGAVLJE_01 = null