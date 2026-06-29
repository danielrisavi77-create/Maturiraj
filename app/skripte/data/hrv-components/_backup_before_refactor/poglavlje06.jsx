/**
 * H06 — Maturiraj.hr — Hrvatski · H06 · Romantizam (europski)
 * Auto-generated from Maturiraj_Hrvatski_H06.html
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
  code: 'H06',
  title: 'Maturiraj.hr — Hrvatski · H06 · Romantizam (europski)',
  description: 'Interaktivna skripta za maturu — Europski romantizam: Puškin (Evgenij Onjegin), Byron, Goethe Faust. Kviz, flashcards, esej alat.',
  canonical: 'https://maturiraj.hr/hrvatski/h06',
  ogImage: '',
};

const BODY_HTML = `<!-- Scroll progress bar (v2 upgrade) -->
<div class="scroll-progress" id="scroll-progress" aria-hidden="true"></div>

<!-- SVG tooltip (v3.5) -->
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
    <div class="modal-title" id="modal-title">H07 · Realizam — uskoro!</div>
    <div class="modal-desc" id="modal-desc">
      Radi se na ovom poglavlju. <strong>Ostavi svoj e-mail</strong> i javit ćemo ti čim izađe. Bez spama, bez newslettera — samo jedan e-mail kad je gotovo.
    </div>
    <div class="modal-preview" id="modal-preview">
      <strong>Sadržaj H07</strong>
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
    <span id="sb-footer-pos">06 / 28</span> · <span id="sb-footer-title">romantizam</span>
    <br>maturiraj.hr · hrvatski · v2
  </div>
</nav>

<!-- ══ MAIN ══ -->
<main class="main">
<div class="content-wrap">
  <div class="bc">
    <a class="bc-link" href="/">maturiraj.hr</a><span class="bc-sep">/</span>
    <a class="bc-link" href="/skripte/hrv">hrvatski</a><span class="bc-sep">/</span>
    <span class="bc-cur">H06 · Romantizam (europski)</span>
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
    <div class="hero-chapter">H06 &nbsp;·&nbsp; Svjetska književnost &nbsp;·&nbsp; Romantizam (europski)</div>
    <h1 class="hero-title">Doba osjećaja<br><span>i pobune</span></h1>
    <div class="hero-sub">Od <strong>Puškinovog Evgenija Onjegina</strong>, preko Byronova demonskog heroja i Goetheova Fausta, do Shelleya i Keatsa. Romantizam (~1798.–1848.) uzdiže <em>osjećaj, prirodu, pojedinca i maštu</em> nad razumom i pravilima. <b>Puškinov Evgenij Onjegin (1823.–1831.)</b> — prvi veliki ruski roman i arhetip „suvišnog čovjeka” u svjetskoj književnosti.</div>
    <div class="hero-meta">
      <span class="hchip br">⏱ 60 min</span>
      <span class="hchip go">🌹 Fokus: Evgenij Onjegin (Puškin)</span>
      <span class="hchip te">▶ H06 romantizam</span>
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
    <button class="tab" onclick="sw(1)" role="tab" aria-selected="false" aria-controls="l1">🌹 Evgenij Onjegin</button>
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
      <span class="pill p-br">romantizam</span>
      <span class="pill p-go">puškin</span>
      <span class="pill p-t">byron · goethe</span>
      <span class="pill p-r">onjegin</span>
      <span class="pill p-pa">1798.–1848.</span>
    </div>

    <div class="slbl">01 · Zašto uopće ovo učimo</div>

    <div class="box-int">
      <div class="box-int-lbl">🌹 Romantizam — doba osjećaja, prirode i pobune</div>
      <div class="box-int-txt">
        Romantizam (~1798.–1848.) nije samo „razdoblje književnosti” — to je <em>kulturna revolucija</em>. Nakon što prosvjetiteljstvo (H05) proglasi razum kralja, romantizam vraća <strong>osjećaj, prirodu, pojedinca i maštu</strong> u središte književnog stvaranja. Pojavljuju se <em>demonski junak</em> (Byron), <em>suvišan čovjek</em> (Puškin), <em>Faust</em> (Goethe), a priroda postaje duhovni prostor (Wordsworth, Coleridge). Ovo je epoha u kojoj se rađa <b>moderna subjektivnost</b>. Razumijevanje romantizma je preduvjet za razumijevanje realizma (H07), moderne (H08) i 20. stoljeća.
      </div>
    </div>

    <div class="box-warn">
      <div class="bw-ico">⚠️</div>
      <div class="bw-body">
        <div class="bw-title">Gdje to ulazi na maturi</div>
        <div class="bw-txt">U <b>teoriji književnosti (12 bodova)</b> redovito se traže pojmovi: <em>romantizam, byronizam, oneginski stih, suvišan čovjek, Sturm und Drang → romantizam, roman u stihovima, demonski junak, weltschmerz</em>. Puškinov <em>Evgenij Onjegin</em> i Byronove poeme pojavljuju se u <b>čitanju književnog teksta (20 bodova)</b>. Iako romantizam <em>nije obavezno čitanje na maturi 2026</em>, pojmovi i konteksti epohe čine okosnicu cijele moderne književnosti — preko Dostojevskog (obvezatno) i Baudelairea (obvezatno).</div>
      </div>
    </div>

    <!-- Soft kontekst hint -->
    <div class="soft-hint">
      <div class="soft-hint-ico">💡</div>
      <div class="soft-hint-body">
        Tema <b>Puškin i romantizam</b> pojavljuje se u teoriji književnosti i čitanju književnog teksta — pojmovi <em>oneginski stih</em>, <em>suvišan čovjek</em> i <em>byronizam</em> treba znati napamet.
      </div>
      <a href="/discere?q=romantizam&ctx=h06_soft_hint" class="soft-hint-link" onclick="track('upsell_click',{ctx:'soft_hint_romantizam',target:'discere'},'conversion')">Pogledaj u Discere →</a>
    </div>

    <!-- ══ MINI-DIJAGNOSTIKA ══ -->
    <div class="diag" id="diag" data-state="intro">
      <div class="diag-intro">
        <div class="diag-intro-title">🎯 Mini-dijagnostika</div>
        <div class="diag-intro-txt">5 kratkih pitanja — utvrdi gdje si sad. Na kraju dobiješ personaliziranu preporuku što učiti. Traje ~2 min.</div>
        <div class="diag-actions">
          <button type="button" class="diag-btn diag-btn-primary" onclick="diagStart()">▶ Pokreni dijagnostiku</button>
          <button type="button" class="diag-btn diag-btn-ghost" onclick="diagSkip()">Preskoči — odmah na sadržaj ↓</button>
        </div>
      </div>
      <div class="diag-question" hidden>
        <div class="diag-q-head">
          <span class="diag-q-count">Pitanje <span id="diag-idx">1</span>/<span id="diag-total">5</span></span>
          <span class="diag-q-topic" id="diag-topic">—</span>
        </div>
        <div class="diag-q-text" id="diag-q">—</div>
        <div class="diag-opts" id="diag-opts"></div>
        <div class="diag-skip-q-row">
          <button type="button" class="diag-skip-q" onclick="diagAnswer(null)">Ne znam — sljedeće</button>
        </div>
        <div class="diag-explain" id="diag-explain" hidden></div>
      </div>
      <div class="diag-result" hidden>
        <div class="diag-res-header">
          <div class="diag-res-ico" id="diag-res-ico">🎯</div>
          <div>
            <div class="diag-res-title" id="diag-res-title">Tvoj rezultat</div>
            <div class="diag-res-msg" id="diag-res-msg">—</div>
          </div>
          <div class="diag-res-num"><span id="diag-correct">0</span>/5</div>
        </div>
        <div class="diag-res-body">
          <div class="diag-res-subttl">📚 Preporuka za učenje</div>
          <div class="diag-res-rec" id="diag-rec"></div>
        </div>
        <div class="diag-actions">
          <button type="button" class="diag-btn diag-btn-primary" onclick="sw(1)">Kreni u Evgenija Onjegina →</button>
          <button type="button" class="diag-btn diag-btn-ghost" onclick="diagRestart()">🔁 Ponovi dijagnostiku</button>
        </div>
      </div>
    </div>

    <!-- SEKCIJA 02: BODOVI NA MATURI -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · Bodovi na maturi iz Hrvatskog</div><div class="sec-line"></div></div>

    <div class="prose">Ukupno <strong>110 bodova</strong>. Iako romantizam nije obavezno ispitno djelo 2026, pojmovi i kontekst pojavljuju se u <em>teoriji književnosti</em>, <em>čitanju književnog teksta</em> i <em>školskom eseju</em> (kao kontekst ili paralela).</div>

    <div class="tbl">
      <table>
        <thead><tr><th>Ispitna cjelina</th><th>Bodovi</th><th>Udio</th><th>Romantizam — utjecaj</th></tr></thead>
        <tbody>
          <tr><td><b>Školski esej</b></td><td>30</td><td>27%</td><td>Kontekst za paralele u esejima o Wertheru (H05), Dostojevskom (H08)</td></tr>
          <tr><td><b>Čitanje knjiž. teksta</b></td><td>20</td><td>18%</td><td>Ulomci iz Puškina, Byrona, Goetheova Fausta</td></tr>
          <tr><td><b>Teorija i povijest knjiž.</b></td><td>12</td><td>11%</td><td>Romantizam, byronizam, oneginski stih, suvišan čovjek, roman u stihovima</td></tr>
          <tr><td><b>Čitanje neknj. teksta</b></td><td>10</td><td>9%</td><td>Kontekst 19. st. — napoleonski ratovi, nacionalni pokreti, industrijalizacija</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SEKCIJA 03: KONTEKST ROMANTIZMA -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">03 · Kontekst romantizma — što je uzrokovalo pokret</div><div class="sec-line"></div></div>

    <div class="prose">Romantizam <em>ne nastaje slučajno</em>. On je reakcija na <b>prosvjetiteljstvo</b> (H05, racionalizam), <b>francusku revoluciju</b> (1789.–1799., koja je razočarala) i <b>industrijsku revoluciju</b> (otuđenje od prirode). Pet ključnih konteksta:</div>

    <div class="con">
      <div class="cr"><div class="ck br">REAKCIJA NA RAZUM</div><div class="cv"><b>Protiv prosvjetiteljstva.</b> Razum ne može objasniti ljubav, patnju, ljepotu. Romantičari vraćaju <em>osjećaj, intuiciju, maštu</em>. Glavna polazišta: Werther (H05, Sturm und Drang) anticipira romantizam, Wordsworth i Coleridge kreću od <em>Lyrical Ballads</em> (1798., manifest engleskog romantizma).</div></div>
      <div class="cr"><div class="ck go">FRANCUSKA REVOLUCIJA</div><div class="cv"><b>1789.–1799. — iluzija i razočaranje.</b> Revolucija je obećala slobodu, ali donijela teror (1793.–1794.) i Napoleona. <em>Mlada generacija romantičara je opčinjena, pa razočarana.</em> Iz toga rast melankolije, žudnje za nedostižnim, ideja <em>„suvišnog čovjeka”</em> — Puškinov Onjegin.</div></div>
      <div class="cr"><div class="ck pa">PRIRODA</div><div class="cv"><b>Priroda kao duhovni prostor.</b> Nasuprot industrijalizacije (tvornice, gradovi, otuđenje), romantičari idealiziraju prirodu. Priroda nije više samo pejzaž — ona je <em>ogledalo duše</em>, izvor istine, boga. Wordsworth u Engleskoj, njemački „šumski genij”, ruski pjesnici ruralnog imanja.</div></div>
      <div class="cr"><div class="ck t">NACIONALNI POKRETI</div><div class="cv"><b>Buđenje nacija.</b> Grčki rat za oslobođenje (1821.–1829.), poljska, mađarska, talijanska, hrvatska buđenja (Ilirski pokret, H10). Romantičari idealiziraju <em>narodnu poeziju</em>, srednji vijek, nacionalne mitove. Byron umire u Grčkoj (1824.) boreći se za slobodu — ikona epohe.</div></div>
      <div class="cr"><div class="ck re">POJEDINAC</div><div class="cv"><b>Kult genija i pojedinca.</b> Umjetnik nije obrtnik, nego <em>genij</em> s jedinstvenim pogledom na svijet. Pojavljuje se <em>byronski heroj</em> (demonski, usamljeni, proganjani), <em>suvišan čovjek</em> (Onjegin), <em>faustovski tragalac</em>. Književnost postaje <b>psihologija pojedinca</b>.</div></div>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">📍 Romantizam kao most</div>
      <div class="box-signal-txt">
        <strong>Prosvjetiteljstvo (H05, 18. st.):</strong> razum, društvo, reforma, Voltaire i Diderot.<br>
        <strong>Predromantizam (kraj 18. st., H05):</strong> emocija, priroda, Sturm und Drang, <em>Werther</em>.<br>
        <strong>Romantizam (~1798.–1848., H06):</strong> osjećaj, mašta, pojedinac, Byron, Puškin, Goethe (Faust).<br>
        <strong>Realizam (~1830.–1880., H07):</strong> društvo, tipični likovi, objektivnost, Balzac, Dostojevski.<br>
        <em>Puškinov Evgenij Onjegin je prijelazno djelo</em> — počinje kao romantička poema, završava kao prvi realistički roman ruske književnosti.
      </div>
    </div>

    <!-- SEKCIJA 04: PUŠKIN KAO CENTRALNI AUTOR -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">04 · Aleksandar Puškin — autor Evgenija Onjegina</div><div class="sec-line"></div></div>

    <div class="prose"><strong>Aleksandar Sergejevič Puškin (1799.–1837.)</strong> je najveći ruski pjesnik, utemeljitelj moderne ruske književnosti i ruskog književnog jezika. „<em>Naše sve</em>” — tako Rusi zovu Puškina. Životno djelo <strong>Evgenij Onjegin</strong> (1823.–1831.) piše 8 godina, i njime stvara <em>prvi veliki ruski roman</em>.</div>

    <div class="sg">
      <div class="sc"><span class="sc-ico si-br">ŽIVOT</span><div class="sc-name">38 godina, tragičan kraj</div><div class="sc-desc">Rođen u Moskvi 1799., plemićka obitelj s afričkim korijenima (pradjed Abram Petrović Hanibal, slavni general Petra Velikog). Studirao u Carskoselskom liceju. Mladić radikalno politiziran — pjesme protiv cara Aleksandra I. → <em>progonstvo na jug (Kavkaz, Kišinjev, Odessa)</em> 1820.–1824. Tu počinje pisati Onjegina. Oženi Nataliju Gončarovu (1831.). <b>1837. pogiba u dvoboju</b> s francuskim časnikom Dantesom, branjući čast žene — ironija prema Onjeginovom duelu s Lenskim.</div></div>
      <div class="sc"><span class="sc-ico si-go">KONTEKST</span><div class="sc-name">Ruski romantizam</div><div class="sc-desc">Puškin je <em>kao Byron za Englesku</em> — centralna figura romantizma. Ali za razliku od Byrona, <b>stvara standardni ruski jezik</b>. Prije njega ruska književnost je fragmentirana (staroruski + crkvenoslavenski + francuski u salonima). Puškin kombinira narodni jezik s visokim stilom. Njegov utjecaj: Ljermontov, Gogolj, Dostojevski, Tolstoj — svi polaze od Puškina.</div></div>
      <div class="sc"><span class="sc-ico si-r">STIL</span><div class="sc-name">Jednostavnost i preciznost</div><div class="sc-desc">Puškinov stil je <em>jasan, lagan, ironski</em>. Odbija baroknu bujnost i klasicističku strogost. „<em>Jednostavnost, preciznost, lakoća</em>” — njegova poetika. Stvara <b>oneginski stih</b> — 14-stih u jampskom tetrametru s rimovnim uzorkom <em>AbAbCCddEffEgg</em>. Izmjena muških i ženskih rima. Savršena forma za enciklopedijsku sadržajnu gustoću.</div></div>
      <div class="sc"><span class="sc-ico si-t">OPUS</span><div class="sc-name">Poezija, drame, proza</div><div class="sc-desc">Puškin piše u <em>svim žanrovima</em>: lirika (~800 pjesama), poeme (<em>Ruslan i Ljudmila</em>, <em>Kavkasski zarobljenik</em>, <em>Bahčisarajska fontana</em>, <em>Poltava</em>, <em>Brončani konjanik</em>), drame (<em>Boris Godunov</em>, <em>Mali tragedii</em>), proza (<em>Kapetanova kći</em>, <em>Pikova dama</em>, <em>Povesti Belkina</em>). <b>Evgenij Onjegin</b> — roman u stihovima, njegovo životno djelo.</div></div>
    </div>

    <div class="box-20">
      <div class="b20-lbl">📚 Puškinova najvažnija djela — sažetak</div>
      <ol class="b20-list b20-numbered">
        <li class="b20-item"><span class="b20-num">1</span><div class="b20-txt"><b>RUSLAN I LJUDMILA (1820.).</b> Prva velika poema. Bajkovito-viteški ep u 6 pjevanja. Uspostavlja Puškinov status. Puškin još eksperimentira između klasicizma i romantizma.</div></li>
        <li class="b20-item"><span class="b20-num">2</span><div class="b20-txt"><b>JUŽNE POEME (1821.–1824.).</b> <em>Kavkasski zarobljenik</em>, <em>Bahčisarajska fontana</em>, <em>Bratja razbojnici</em>, <em>Cigani</em> (1824.). Pisano u progonstvu. <b>Byronski period</b> — melankolični junak, egzotični pejzaži, slobodarstvo. Puškinov odgovor na Byronovog <em>Childe Harolda</em>.</div></li>
        <li class="b20-item"><span class="b20-num">3</span><div class="b20-txt"><b>EVGENIJ ONJEGIN (1823.–1831.).</b> <em>Centralno djelo.</em> Roman u stihovima u 8 poglavlja, oneginski stih. Priča o Onjeginu i Tatjani, prijateljstvu s Lenskim, duelu, Tatjaninom braku. <b>Detaljno obrađeno u Tabu 1.</b></div></li>
        <li class="b20-item"><span class="b20-num">4</span><div class="b20-txt"><b>BORIS GODUNOV (1825., objavljeno 1831.).</b> Povijesna tragedija o caru Borisu i smutnom vremenu. Pisano u blank verseu po uzoru na Shakespeareova Hamleta. <em>Prekid s klasicističkom dramom — novi ruski teatar.</em></div></li>
        <li class="b20-item"><span class="b20-num">5</span><div class="b20-txt"><b>KAPETANOVA KĆI (1836.).</b> Prvi pravi ruski povijesni roman, u prozi. Tema: Pugačovljev ustanak (1773.–1775.). Prelazak iz poezije u prozu — utjecaj Waltera Scotta, ali s puškinskom ironijom i preciznošću.</div></li>
      </ol>
    </div>

    <div class="box-tip">
      <div class="bt-title">💡 PUŠKINOVA EVOLUCIJA — od Byrona do realizma</div>
      <div class="bt-txt">
        Puškin nije statičan autor. <em>Kreće kao romantičar</em> pod utjecajem Byrona (Južne poeme). <em>Prijelazan je u Evgeniju Onjeginu</em> — djelo počinje romantički, ali završava realistički (Tatjana kao realistički lik). <em>Zrelo razdoblje je već realizam</em> (Kapetanova kći). <b>Puškin je most između romantizma i realizma</b> — kako u svojem opusu, tako u ruskoj književnosti kao cjelini.
      </div>
    </div>

    <!-- SEKCIJA 05: OSTALI VELIKI ROMANTIČARI -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">05 · Ostali veliki romantičari — Byron, Goethe (Faust), engleski romantizam</div><div class="sec-line"></div></div>

    <div class="prose">Romantizam je paneuropski pokret. Uz Puškina u Rusiji, tri ključna centra: <b>Engleska</b> (Byron, Wordsworth, Coleridge, Shelley, Keats, Blake), <b>Njemačka</b> (Goethe — kasna faza, Faust, Heine, Novalis, braća Grimm), <b>Francuska</b> (Hugo, Lamartine, de Musset — kratko spomenuti, dolaze u kasnijem gradivu).</div>

    <div class="con">
      <div class="cr"><div class="ck br">GEORGE GORDON, LORD BYRON</div><div class="cv"><b>(1788.–1824.) Engleski pjesnik, arhetip romantičarskog genija.</b> Najpoznatija djela: <em>Childe Haroldovo hodočašće</em> (1812.–1818.), <em>Don Juan</em> (1819.–1824., nedovršeno), <em>Manfred</em> (1817.), istočnjačke poeme. <em>Byronski heroj</em> — melankoličan, ponosan, proganjani, moralno ambivalentan — ušao u europsku kulturu kao arhetip. <b>Umire 1824. u Grčkoj boreći se za oslobođenje</b> — ikona epohe. Puškinov glavni inspirativni uzor.</div></div>
      <div class="cr"><div class="ck go">GOETHE — FAUST</div><div class="cv"><b>Goethe (1749.–1832.) — kasna faza, romantički Faust.</b> Iako je Goethe već u H05 (Werther, Sturm und Drang), <em>Faust</em> je njegovo životno djelo — <b>Faust I</b> (1808.) i <b>Faust II</b> (1832., posmrtno). Kozmička drama o čovjeku (Faust) koji prodaje dušu Mefistofelesu za spoznaju i iskustvo. Tema: <em>neutaživa ljudska težnja za apsolutnim</em>. Faust završava: „<em>Zaustavi se, trenutku! Tako si lijep</em>” — ali ga nikad ne uspije zaustaviti.</div></div>
      <div class="cr"><div class="ck pa">WILLIAM WORDSWORTH & COLERIDGE</div><div class="cv"><b>Utemeljitelji engleskog romantizma.</b> <em>Lyrical Ballads</em> (1798.) — <b>manifest pokreta</b>. Wordsworth (1770.–1850.) piše o prirodi i sjećanjima (<em>Tintern Abbey</em>, <em>I Wandered Lonely as a Cloud</em>). Coleridge (1772.–1834.) piše o natprirodnom i imaginaciji (<em>The Rime of the Ancient Mariner</em>, <em>Kubla Khan</em>). Predgovor 2. izdanju (1800.) — <em>poezija je spontani izljev moćnih osjećaja</em>.</div></div>
      <div class="cr"><div class="ck t">SHELLEY, KEATS, BLAKE</div><div class="cv"><b>Druga generacija engleskog romantizma.</b> <em>Percy Bysshe Shelley</em> (1792.–1822.) — radikalni pjesnik, muž Mary Shelley (autorica <em>Frankensteina</em>). Utopljen u oluji, 29 godina. <em>John Keats</em> (1795.–1821.) — umire od tuberkuloze s 25 godina. Glavna djela: <em>Ode on a Grecian Urn</em>, <em>Ode to a Nightingale</em>. <em>William Blake</em> (1757.–1827.) — pjesnik-slikar, mističar. <em>Songs of Innocence and Experience</em>. Prethodnik romantizma.</div></div>
      <div class="cr"><div class="ck re">HEINRICH HEINE & RUSKI PRETHODNICI</div><div class="cv"><b>Njemački romantizam nakon Goethea.</b> <em>Heinrich Heine</em> (1797.–1856.) — njemačko-židovski pjesnik. <em>Buch der Lieder</em> (1827.) — jedna od najprevedenijih njemačkih knjiga. Ironijski odnos prema romantizmu. <b>Ruski prethodnici Puškina:</b> Žukovski (prevoditelj Byrona), Batjuškov (pesimizam). <b>Puškinov nasljednik:</b> <em>Mihail Ljermontov (1814.–1841.)</em> — <em>Heroj našeg vremena</em> (1840.) — Pečorin kao drugi „suvišan čovjek”. Ljermontov i sam umire u dvoboju s 26 godina.</div></div>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">📊 NCVVO: Tipovi europskog romantizma — sistematizacija</div>
      <div class="box-int-txt">NCVVO pita prepoznavanje nacionalnih tradicija romantizma, obilježja i pojmova. Ključna tablica za brzu orientaciju:</div>
    </div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Tradicija</th><th>Ključni autori</th><th>Obilježja</th><th>Ključni pojam</th></tr></thead>
        <tbody>
          <tr><td><strong>Engleski romantizam</strong></td><td>Byron, Wordsworth, Coleridge, Shelley, Keats, Blake</td><td>Priroda i imaginacija (Wordsworth); Natprirodno (Coleridge); Politička sloboda i byronski heroj (Byron); Ljepota i prolaznost (Keats)</td><td>Byronski heroj, <em>Lyrical Ballads</em> 1798.</td></tr>
          <tr><td><strong>Njemački romantizam</strong></td><td>Goethe (Faust), Heine, Novalis, braća Grimm</td><td>Faust-motiv (težnja za apsolutom); Ironija (Heine); Narodna predaja (Grimm); Weltschmerz — bolest od svijeta</td><td>Weltschmerz, Faust-motiv</td></tr>
          <tr><td><strong>Ruski romantizam</strong></td><td>Puškin, Ljermontov, Žukovski</td><td>Suvišan čovjek (Onjegin, Pečorin); Roman u stihovima; Byronski utjecaj + nacionalni ponos</td><td>Suvišan čovjek, oneginski stih</td></tr>
          <tr><td><strong>Francuski romantizam</strong></td><td>Hugo, Lamartine, de Musset</td><td>Politički angažman (Hugo: Les Misérables); Lirska melankolija (Lamartine); Most prema realizmu</td><td>—</td></tr>
          <tr><td><strong>Hrv. romantizam / Preporod</strong></td><td>Mažuranić, Preradović, Vraz, Demeter</td><td>Nacionalna mobilizacija, jezik kao politički čin, turska opasnost — detaljno u H14</td><td>Narodni preporod, ilirizam</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SEKCIJA 06: PRED-ISPIT CHEAT SHEET -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">06 · Pred-ispit cheat sheet</div><div class="sec-line"></div></div>

    <div class="cheat">
      <div class="cheat-header"><span class="cheat-eye">👁</span><div class="cheat-ttl">Sve što moraš pamtiti — H06</div></div>
      <div class="cheat-grid">

        <!-- Datumi & autori -->
        <div class="cheat-col">
          <div class="cheat-col-ttl">📅 Datumi & autori</div>
          <table class="cheat-dates">
            <tr><td><b>1798.</b></td><td>Wordsworth/Coleridge <em>Lyrical Ballads</em> — manifest engl. romantizma</td></tr>
            <tr><td><b>1799.–1837.</b></td><td>Puškin — „naše sve”</td></tr>
            <tr><td><b>1808.</b></td><td>Goethe <em>Faust I dio</em></td></tr>
            <tr><td><b>1812.</b></td><td>Byron <em>Childe Haroldovo hodočašće</em> (I–II)</td></tr>
            <tr><td><b>1820.</b></td><td>Puškin <em>Ruslan i Ljudmila</em> (prva velika poema)</td></tr>
            <tr><td><b>1823.–1831.</b></td><td><strong>Puškin <em>Evgenij Onjegin</em></strong> — fokus H06</td></tr>
            <tr><td><b>1824.</b></td><td>Byron umire u Grčkoj (37 godina)</td></tr>
            <tr><td><b>1832.</b></td><td>Goethe <em>Faust II</em> (posmrtno), Goethe umire</td></tr>
            <tr><td><b>1837.</b></td><td>Puškin umire u dvoboju</td></tr>
            <tr><td><b>1840.</b></td><td>Ljermontov <em>Heroj našeg vremena</em></td></tr>
          </table>
        </div>

        <!-- Top pojmovi -->
        <div class="cheat-col">
          <div class="cheat-col-ttl">🎯 Top pojmovi (često na maturi)</div>
          <ul class="cheat-list">
            <li><b>romantizam</b> — ~1798.–1848., osjećaj, priroda, pojedinac</li>
            <li><b>byronski heroj</b> — melankoličan, ponosan, proganjani</li>
            <li><b>byronizam</b> — utjecaj Byrona na cijelu europsku književnost</li>
            <li><b>suvišan čovjek</b> — tip junaka iz ruske knj. (Onjegin, Pečorin)</li>
            <li><b>roman u stihovima</b> — hibridna forma (Puškin izmislio)</li>
            <li><b>oneginski stih</b> — 14-stih, AbAbCCddEffEgg, jampski tetrametar</li>
            <li><b>weltschmerz</b> — „svjetska bol”, melankolija zbog nesavršenosti svijeta</li>
            <li><b>demonski junak</b> — tip romantičkog heroja (Manfred, Onjegin)</li>
            <li><b>priroda kao ogledalo duše</b> — romantičarski motiv</li>
            <li><b>Lyrical Ballads</b> — manifest engl. romantizma (1798.)</li>
          </ul>
        </div>

        <!-- Onjegin — esencijalno -->
        <div class="cheat-col cheat-col-wide">
          <div class="cheat-col-ttl">🌹 Evgenij Onjegin — esencijalno za esej</div>
          <div class="cheat-grid-inner">
            <div>
              <div class="cheat-mini-ttl">Autor · godina · vrsta</div>
              <div class="cheat-mini-txt"><b>Puškin, 1823.–1831.</b> (8 godina pisanja). <em>Roman u stihovima</em> u 8 poglavlja. Oneginski stih. 389 strofa. Prvi veliki ruski roman.</div>
            </div>
            <div>
              <div class="cheat-mini-ttl">Mjesto · vrijeme radnje</div>
              <div class="cheat-mini-txt"><b>Sankt-Peterburg</b> (visoko društvo), <b>rusko selo</b> (Onjeginovo imanje, Larini), <b>Moskva</b> (Tatjana u finalu). Vrijeme: 1820-e.</div>
            </div>
            <div>
              <div class="cheat-mini-ttl">4 glavna lika</div>
              <div class="cheat-mini-txt">
                <em>Onjegin</em> — suvišan čovjek, dosada, cinizam<br>
                <em>Tatjana</em> — iskrena, iduealni ženski lik<br>
                <em>Lenski</em> — naivni romantičar, pjesnik<br>
                <em>Olga</em> — površna, Lenskova zaručnica
              </div>
            </div>
            <div>
              <div class="cheat-mini-ttl">3 ključne scene</div>
              <div class="cheat-mini-txt">
                1. <em>Tatjanino pismo Onjeginu</em> (III poglavlje)<br>
                2. <em>Duel Onjegin vs Lenski</em> (VI poglavlje)<br>
                3. <em>Finalni susret Onjegin-Tatjana</em> (VIII poglavlje)
              </div>
            </div>
          </div>
        </div>

        <!-- Ostali autori -->
        <div class="cheat-col cheat-col-wide">
          <div class="cheat-col-ttl">🎭 Ostali veliki romantičari — pregled</div>
          <div class="cheat-grid-inner">
            <div>
              <div class="cheat-mini-ttl">Lord Byron (1788.–1824.)</div>
              <div class="cheat-mini-txt">Arhetip romantičkog genija. <em>Childe Harold</em>, <em>Don Juan</em>, <em>Manfred</em>. Byronski heroj. Umire u Grčkoj.</div>
            </div>
            <div>
              <div class="cheat-mini-ttl">Goethe — Faust (1808./1832.)</div>
              <div class="cheat-mini-txt">Životno djelo u 2 dijela. Faust prodaje dušu Mefistofelesu za spoznaju. Kozmička drama.</div>
            </div>
            <div>
              <div class="cheat-mini-ttl">Wordsworth & Coleridge</div>
              <div class="cheat-mini-txt"><em>Lyrical Ballads</em> (1798.) — manifest engl. romantizma. Wordsworth: priroda. Coleridge: natprirodno.</div>
            </div>
            <div>
              <div class="cheat-mini-ttl">Shelley, Keats, Heine, Ljermontov</div>
              <div class="cheat-mini-txt">Shelley i Keats umiru mladi. Heine — njemački romantizam. Ljermontov — Puškinov nasljednik, <em>Heroj našeg vremena</em>.</div>
            </div>
          </div>
        </div>

        <!-- Esej struktura -->
        <div class="cheat-col cheat-col-wide">
          <div class="cheat-col-ttl">✍ Esej — struktura u 6 koraka</div>
          <ol class="cheat-steps">
            <li><b>Uvod</b> — kontekst djela + autora + jasna teza (1 rečenica)</li>
            <li><b>Razrada 1</b> — povijesni kontekst romantizma + povezivanje s tezom</li>
            <li><b>Razrada 2</b> — centralni sukob ili scena (Tatjanino pismo, duel) + citat</li>
            <li><b>Razrada 3</b> — povezivanje s drugim djelom (Werther, Byron, kasnije Dostojevski)</li>
            <li><b>Zaključak</b> — odgovor na polazno pitanje, povratak na tezu</li>
            <li><b>Provjera</b> — minimum 440 riječi, slijed teze, gramatika, HR navodnici</li>
          </ol>
        </div>

        <!-- Što NE smiješ -->
        <div class="cheat-col cheat-col-wide cheat-col-warn">
          <div class="cheat-col-ttl">⚠ Što NE smiješ na ispitu</div>
          <ul class="cheat-list cheat-list-warn">
            <li>Reći da je <em>Evgenij Onjegin</em> roman u prozi — to je <b>roman u stihovima</b>, oneginski stih</li>
            <li>Brkati <em>Onjegina</em> i <em>Lenskog</em> — <b>Onjegin je cinik</b>, Lenski je naivni pjesnik-romantičar. Dvije različite strane romantizma</li>
            <li>Tvrditi da je <em>Tatjana slaba jer odbija Onjegina</em> u finalu — <b>to je njena najveća snaga</b> (moralna dosljednost)</li>
            <li>Izjednačavati romantizam i sentimentalizam — <b>romantizam ima filozofsku dubinu</b>, sentimentalizam je plitak</li>
            <li>Misliti da je Puškin samo ruski autor — on je <b>europski romantičar</b> pod utjecajem Byrona, s globalnim utjecajem</li>
            <li>Reći da romantizam <em>odbija sav razum</em> — on ga <b>dopunjuje osjećajem i imaginacijom</b>, ne negira</li>
            <li>Pisati esej kraći od 440 riječi (esej se NE vrednuje)</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">🇭🇷 HRVATSKA PARALELA — ilirski preporod (→ H14)</div>
      <div class="box-signal-txt">
        Europski romantizam (Puškin, Byron, Hugo) i <strong>hrvatski narodni preporod</strong> odvijaju se paralelno — oba 1830-ih godina. Ilirci preuzimaju romantičarske ideje (narod, jezik, sloboda) i pretvaraju ih u nacionalni projekt. Ključno djelo: <strong>Mažuranić · Smrt Smail-age Čengijića</strong> (1846) — <b>jedino obvezatno 2026. djelo iz ovog perioda</b>, ep s tematikom turske opasnosti i heroizma.<br><br>
        <b>Ključna razlika:</b> u Europi romantičar bježi od stvarnosti u snove i prirodu; u Hrvatskoj romantičar <em>mobilizira narod</em> za konkretan nacionalni cilj. Detaljno: <b>H14 · Preporod</b>.
      </div>
    </div>

    <div class="nav-row">
      <span class="nb off">← Prethodno</span>
      <span class="nb primary" onclick="sw(1)">🌹 Evgenij Onjegin deep-dive →</span>
    </div>
  
    <div class="cheat-card" style="margin-top:24px">
      <div class="cheat-hdr">
        <div class="cheat-hdr-l">
          <div class="cheat-eye">SLJEDEĆE</div>
          <div class="cheat-ttl">Tab 1 · Evgenij Onjegin — Puškin</div>
        </div>
      </div>
      <div class="cheat-grid">
        <div class="cheat-col cheat-col-wide" style="font-family:var(--serif,Fraunces,serif);font-size:13.5px;color:var(--t2,#c5b8aa);line-height:1.65">
          <p style="margin:0">Sad kad znaš kontekst romantizma — <b>Tab 1</b> donosi konkretno djelo: <em>Evgenij Onjegin</em>. Roman u stihovima, junak-egotist, sudbina ljubavi i ideja "suvišnog čovjeka".</p>
        </div>
      </div>
    </div>

    </div>

  <!-- ════════════════════════
       TAB 1 · WERTHER DEEP-DIVE
       ════════════════════════ -->
  <div class="layer" id="l1" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">1823.–1831.</span>
      <span class="pill p-go">Aleksandar Puškin</span>
      <span class="pill p-r">roman u stihovima</span>
      <span class="pill p-t">oneginski stih</span>
      <span class="pill p-pa">8 poglavlja · 389 strofa</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">🌹 Zašto Evgenij Onjegin zaslužuje cijeli tab</div>
      <div class="box-int-txt">
        Puškinov <em>Evgenij Onjegin</em> nije samo važan ruski roman — on je <strong>temeljno djelo europskog romantizma</strong> i <em>prvi veliki moderni roman</em> (uz Cervantesa). Stvara arhetip <b>„suvišnog čovjeka”</b> koji će dominirati ruskom književnošću kroz Dostojevskog i Tolstoja (oboje obvezatno čitanje). Uvodi <b>oneginski stih</b> kao jedinstvenu formalnu inovaciju. Na maturi se pojavljuje u <em>teoriji književnosti</em> i <em>čitanju književnog teksta</em>. Puškin je most između romantizma i realizma — razumijevanje Onjegina je ključ za razumijevanje cijele ruske (a time i europske) književnosti 19. stoljeća.
      </div>
    </div>

    <!-- SEKCIJA 01: OSNOVNI PODACI -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · Osnovni podaci o djelu</div><div class="sec-line"></div></div>

    <div class="sg">
      <div class="sc"><span class="sc-ico si-br">AUTOR</span><div class="sc-name">Aleksandar Puškin</div><div class="sc-desc">(1799. Moskva – 1837. Sankt-Peterburg, u dvoboju). Najveći ruski pjesnik, „<em>naše sve</em>”. Utemeljuje moderni ruski književni jezik. Tragičan kraj s 38 godina — poginuo u dvoboju braneći čast žene Natalije Gončarove.</div></div>
      <div class="sc"><span class="sc-ico si-go">GODINA</span><div class="sc-name">1823.–1831. (8 godina pisanja)</div><div class="sc-desc">Puškin piše roman u više ciklusa — prva 2 poglavlja u progonstvu na jugu (1823.–1824., Kišinjev/Odessa), nastavak u Mihajlovskom (1824.–1826.), završava u Boldinu (jesen 1830., kreativni vrhunac). Objavljeno po poglavljima, cjelovito 1833.</div></div>
      <div class="sc"><span class="sc-ico si-r">KNJIŽEVNA VRSTA</span><div class="sc-name">Roman u stihovima</div><div class="sc-desc">Hibridna forma — <em>ni ep, ni roman, ni zbirka poezije</em>. Puškin je izmišlja i stvara. 8 poglavlja (jedno od originalnih 9 je izbačeno — „Onjeginovo putovanje”). Ukupno 389 onegainskih strofa = 5446 stihova. Zove se i <b>„enciklopedija ruskog života”</b> (Belinski).</div></div>
      <div class="sc"><span class="sc-ico si-t">STIH I RIMA</span><div class="sc-name">Oneginski stih (AbAbCCddEffEgg)</div><div class="sc-desc">Puškin stvara <strong>oneginsku strofu</strong>: 14 stihova u jampskom tetrametru. Rimovni uzorak: <b>AbAbCCddEffEgg</b> (veliko slovo = ženska rima, malo slovo = muška rima). 3 kvartine različitih rimovnih uzoraka + završni distih. Jedinstveno u svjetskoj književnosti.</div></div>
      <div class="sc"><span class="sc-ico si-te">PRIPOVJEDAČ</span><div class="sc-name">Puškin osobno (u prvom licu)</div><div class="sc-desc">Neobično: pripovjedač <em>nije lik niti svesveznajući</em> — on je <b>sam Puškin</b>. Obraća se čitatelju, komentira likove („<em>Moj Onjegin…</em>”, „<em>Tatjana, voljena Tatjana!</em>”), ubacuje digresije o svom životu, Moskvi, književnosti. <b>Puškin kao lik u vlastitom romanu.</b></div></div>
      <div class="sc"><span class="sc-ico si-re">MJESTO RADNJE</span><div class="sc-name">SPB · rusko selo · Moskva</div><div class="sc-desc">Radnja prati <em>3 lokacije</em>: <b>Sankt-Peterburg</b> (Onjeginov dandijski život, I pogl.), <b>rusko selo</b> (imanje strica, Larini, II.–VI. pogl.), <b>Moskva</b> (Tatjana kao udana kneginja, VIII. pogl.). Vrijeme: 1819.–1825., život ruskog plemstva pred dekabrističkim ustankom.</div></div>
    </div>

    <div class="box-warn">
      <div class="bw-ico">⚠️</div>
      <div class="bw-body">
        <div class="bw-title">ONEGINSKI STIH — RAZUMJETI FORMU</div>
        <div class="bw-txt">
          <b>Jedinstvena formalna inovacija Puškina.</b> 14-stih koji kombinira tri različita rimovna uzorka:<br>
          • Stih 1–4: <em>ukrštena rima AbAb</em> (uvod)<br>
          • Stih 5–8: <em>parna rima CCdd</em> (razrada)<br>
          • Stih 9–12: <em>obgrljena rima EffE</em> (antiteza, obrat)<br>
          • Stih 13–14: <em>završni distih gg</em> (zaključak, poenta, često ironija)<br>
          Meter: <b>jampski tetrametar</b> (4 jampske stope = 8 slogova, ili 9 ako je ženska rima). <em>Izmjena muških i ženskih rima</em> (mali slovi = muška, velika = ženska). Savršena forma za <em>enciklopedijsku gustoću</em> — svaka strofa je minijaturna cjelina, ali ulijeva se u veći narativ.
        </div>
      </div>
    </div>

    <!-- ONEGINSKA STROFA VIZUALIZACIJA -->
    <div class="oneginski-viz" role="figure" aria-label="Vizualizacija oneginske strofe — uvodne strofe romana">
      <div class="oneginski-viz-caption">🎼 Oneginska strofa · uvodni stihovi · rimovni uzorak AbAbCCddEffEgg</div>
      <div class="oneginski-viz-row"><span class="oneginski-viz-num">1.</span><span class="oneginski-viz-rhyme A">A</span><span class="oneginski-viz-text">Moj stric, čovjek najčestitih pravila,</span></div>
      <div class="oneginski-viz-row"><span class="oneginski-viz-num">2.</span><span class="oneginski-viz-rhyme B lc">b</span><span class="oneginski-viz-text">kad se teško razbolio,</span></div>
      <div class="oneginski-viz-row"><span class="oneginski-viz-num">3.</span><span class="oneginski-viz-rhyme A">A</span><span class="oneginski-viz-text">izazvao je poštovanje svih oko sebe</span></div>
      <div class="oneginski-viz-row"><span class="oneginski-viz-num">4.</span><span class="oneginski-viz-rhyme B lc">b</span><span class="oneginski-viz-text">i ništa bolje nije mogao smisliti.</span></div>
      <div class="oneginski-viz-row"><span class="oneginski-viz-num">5.</span><span class="oneginski-viz-rhyme C lc">c</span><span class="oneginski-viz-text">Njegov primjer — drugima nauk;</span></div>
      <div class="oneginski-viz-row"><span class="oneginski-viz-num">6.</span><span class="oneginski-viz-rhyme C lc">c</span><span class="oneginski-viz-text">Ali, Bože, kakva je dosada</span></div>
      <div class="oneginski-viz-row"><span class="oneginski-viz-num">7.</span><span class="oneginski-viz-rhyme D lc">d</span><span class="oneginski-viz-text">sjedjeti noću i dan uz bolesnika,</span></div>
      <div class="oneginski-viz-row"><span class="oneginski-viz-num">8.</span><span class="oneginski-viz-rhyme D lc">d</span><span class="oneginski-viz-text">nikada se ne micati daleko!</span></div>
      <div class="oneginski-viz-row"><span class="oneginski-viz-num">9.</span><span class="oneginski-viz-rhyme E">E</span><span class="oneginski-viz-text">Kakvog li niskog licemjerstva</span></div>
      <div class="oneginski-viz-row"><span class="oneginski-viz-num">10.</span><span class="oneginski-viz-rhyme F lc">f</span><span class="oneginski-viz-text">zabavljati umirućega,</span></div>
      <div class="oneginski-viz-row"><span class="oneginski-viz-num">11.</span><span class="oneginski-viz-rhyme F lc">f</span><span class="oneginski-viz-text">popravljati mu jastuke kraj glave,</span></div>
      <div class="oneginski-viz-row"><span class="oneginski-viz-num">12.</span><span class="oneginski-viz-rhyme E">E</span><span class="oneginski-viz-text">tugaljivo pružati mu lijekove…</span></div>
      <div class="oneginski-viz-row"><span class="oneginski-viz-num">13.</span><span class="oneginski-viz-rhyme G lc">g</span><span class="oneginski-viz-text">uzdisati i u sebi misliti:</span></div>
      <div class="oneginski-viz-row"><span class="oneginski-viz-num">14.</span><span class="oneginski-viz-rhyme G lc">g</span><span class="oneginski-viz-text"><em>„Kad će te već vrag uzeti!”</em></span></div>
      <div class="oneginski-viz-legend">
        <span><span class="oneginski-viz-rhyme A" style="display:inline-block;padding:1px 5px">A</span> ženska</span>
        <span><span class="oneginski-viz-rhyme B lc" style="display:inline-block;padding:1px 5px">b</span> muška</span>
        <span>· ukrštena (1–4) · parna (5–8) · obgrljena (9–12) · distih (13–14)</span>
      </div>
    </div>

    <!-- PUŠKIN LIFE TIMELINE -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01b · Puškinov život — kronologija</div><div class="sec-line"></div></div>

    <div class="prose">Puškinov život je <em>neodvojiv od ruske povijesti 1799.–1837.</em> — napoleonski ratovi, dekabristički ustanak, konflikti s carom, tragični kraj. Ključne točke:</div>

    <div class="puskin-timeline">
      <div class="pt-event">
        <div class="pt-date pt-major">1799</div>
        <div class="pt-body">
          <div class="pt-title">Rođenje u Moskvi</div>
          <div class="pt-desc">Plemićka obitelj. Pradjed Abram Petrović Hanibal — afrički princ kojeg je Petar Veliki adoptirao i poslao u Francusku na studij. Puškinovo porijeklo objašnjava egzotičan izgled i osjećaj „outsidera” u ruskoj aristokraciji.</div>
        </div>
      </div>
      <div class="pt-event">
        <div class="pt-date">1811–17</div>
        <div class="pt-body">
          <div class="pt-title">Carskoselski licej</div>
          <div class="pt-desc">Elitna škola pokraj Sankt-Peterburga, osnovana za carske sinove. Puškin tu formira politička uvjerenja (liberalizam, antidespotizam) i piše prve pjesme. Druženje s budućim <em>dekabristima</em>.</div>
        </div>
      </div>
      <div class="pt-event">
        <div class="pt-date pt-major">1820</div>
        <div class="pt-body">
          <div class="pt-title">Progonstvo na jug</div>
          <div class="pt-desc">Car Aleksandar I. protjeruje Puškina zbog političkih pjesama. 4 godine na Kavkazu, Kišinjevu i u Odessi. <b>Tu počinje pisati Evgenija Onjegina (1823.)</b>. Utjecaj Byrona na vrhuncu — <em>Južne poeme</em>.</div>
        </div>
      </div>
      <div class="pt-event">
        <div class="pt-date">1824–26</div>
        <div class="pt-body">
          <div class="pt-title">Mihajlovskoe (obiteljsko imanje)</div>
          <div class="pt-desc">Novi car Nikolaj I. ga vraća. Puškin piše intenzivno — Boris Godunov, srednja poglavlja Onjegina. 14. 12. 1825. — <b>dekabristički ustanak</b>. Puškinovi prijatelji strijeljani ili protjerani. Puškin bio odsutan — spašen.</div>
        </div>
      </div>
      <div class="pt-event">
        <div class="pt-date pt-major">1830</div>
        <div class="pt-body">
          <div class="pt-title">Boldinska jesen — kreativni vrhunac</div>
          <div class="pt-desc">U selu Boldinu, karantenom odsječen od svijeta, Puškin u 3 mjeseca piše: završna 2 poglavlja Onjegina, <em>Mali tragedii</em>, <em>Povesti Belkina</em>, ~30 lirskih pjesama. Najproduktivnije razdoblje — poznato kao „Boldinska jesen”.</div>
        </div>
      </div>
      <div class="pt-event">
        <div class="pt-date">1831</div>
        <div class="pt-body">
          <div class="pt-title">Brak s Natalijom Gončarovom · završetak Onjegina</div>
          <div class="pt-desc">Oženi najljepšu ženu Moskve. Puškin završava Evgenija Onjegina nakon 8 godina. Objavljeno kao cjelina 1833. Natalija će biti razlog finalnog duela.</div>
        </div>
      </div>
      <div class="pt-event">
        <div class="pt-date">1836</div>
        <div class="pt-body">
          <div class="pt-title">Kapetanova kći · zrelost u prozi</div>
          <div class="pt-desc">Puškin ulazi u prozu — prvi ruski povijesni roman. Utjecaj Waltera Scotta, ali s puškinskom ironijom. Već <em>realizam u embriju</em>.</div>
        </div>
      </div>
      <div class="pt-event">
        <div class="pt-date pt-major">1837</div>
        <div class="pt-body">
          <div class="pt-title">Smrt u dvoboju (38 god.)</div>
          <div class="pt-desc">Francuski časnik Georges d'Anthès zavodi Nataliju. Puškin izaziva na dvoboj. 27. 1. 1837. — pogođen u trbuh. Umire 29. 1. Pogreb u noći, tajno, bez javne procesije — car strah od nemira. <em>Tragička ironija:</em> Puškin napisao Lenskov duel 14 godina prije svoje smrti.</div>
        </div>
      </div>
    </div>

    <!-- SEKCIJA 02: RADNJA PO POGLAVLJIMA -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · Radnja u 8 poglavlja</div><div class="sec-line"></div></div>

    <div class="prose">Roman prati život Evgenija Onjegina, mladog peterburškog plemića, kroz 8 godina. Od besposlene mladosti u prijestolnici, preko prijateljstva s Lenskim i ljubavi prema Tatjani, do tragičnog duela i gorke spoznaje u finalu.</div>

    <div class="box-20">
      <div class="b20-lbl">📖 8 poglavlja — struktura radnje</div>
      <ol class="b20-list b20-numbered">
        <li class="b20-item"><span class="b20-num">1</span><div class="b20-txt"><b>POGLAVLJE I — „Bio je bolestan…”</b> <em>Sankt-Peterburg.</em> Onjegin, 26 godina, besposleni dendi, zasićen balovima i svjetovnim životom. „Čita Byrona”, nosi portret Byrona u sobi. Stric umire, Onjegin nasljeđuje imanje na selu i odlazi tamo. <b>Uvod u „suvišnog čovjeka”.</b></div></li>
        <li class="b20-item"><span class="b20-num">2</span><div class="b20-txt"><b>POGLAVLJE II — Selo i Lenski.</b> Onjegin se dosađuje na selu. Upoznaje <em>Vladimira Lenskog</em> (18 godina, mladi pjesnik-romantičar koji se vratio iz Göttingena), i preko njega <em>obitelj Larin</em>. Lenski je zaljubljen u <b>Olgu Larinu</b> (mlađa sestra, površna, vesela). Susreće i <b>Tatjanu Larinu</b> (starija, povučena, zamišljena — čita sentimentalne romane).</div></li>
        <li class="b20-item"><span class="b20-num">3</span><div class="b20-txt"><b>POGLAVLJE III — Tatjanino pismo.</b> <em>Centralni trenutak romana.</em> Tatjana se strastveno zaljubljuje u Onjegina. Ne spava noću, piše mu pismo na francuskom — <em>otvoreno priznanje ljubavi</em>. Puškin interpolira pismo kao lirsku pjesmu. U selu se priča da će Onjegin oženiti Tatjanu. On dolazi s odgovorom.</div></li>
        <li class="b20-item"><span class="b20-num">4</span><div class="b20-txt"><b>POGLAVLJE IV — Hladno odbijanje.</b> U vrtu Onjegin Tatjanu hladno odbija — <em>„nisam stvoren za brak”, „ti ćeš me brzo zaboraviti”</em>. Poslovno, moralizirajući, bez topline. Tatjana je duboko povrijeđena. U međuvremenu, <b>Lenski i Olga sretniji no ikad</b> — pišu jedno drugome, planiraju vjenčanje.</div></li>
        <li class="b20-item"><span class="b20-num">5</span><div class="b20-txt"><b>POGLAVLJE V — Tatjanin imendan i zloslutni san.</b> Tatjanin rođendan. Prethodne noći sanja <b>zloslutni san</b> — u njemu ju lovi medvjed, Onjegin ju napada s nožem, a zatim <em>ubija Lenskog</em>. Na proslavi Onjegin, iz dosade i osvete prema Lenskom (koji ga je natjerao doći), <b>cijelu večer pleše s Olgom</b>. Lenski, ljubomoran i povrijeđen, izaziva Onjegina na <b>dvoboj</b>.</div></li>
        <li class="b20-item"><span class="b20-num">6</span><div class="b20-txt"><b>POGLAVLJE VI — Duel i smrt Lenskog.</b> <em>Tragička srednjina romana.</em> Onjegin dolazi kasno, Zareckij (sekundant) forsira dvoboj. Obojica bi mogla odustati — ali ponos i konvencije ne dopuštaju. <b>Onjegin ubija Lenskog</b>. Puškin ironijski nagovještava: „<em>možda bi postao veliki pjesnik — ili samo debeli gospodin s podagrom</em>”. Onjegin odlazi iz sela na putovanje.</div></li>
        <li class="b20-item"><span class="b20-num">7</span><div class="b20-txt"><b>POGLAVLJE VII — Tatjana u Onjeginovoj kući · Moskva.</b> Godina dana kasnije. Olga se brzo udala za husara. Tatjana ostaje u selu. <em>Ulazi u Onjeginovu napuštenu kuću</em> — čita njegove knjige (Byron!), shvaća da je <b>Onjegin „parodija, sjena, čovjek bez originalnosti”</b>. Majka ju vodi u Moskvu na „tržište nevjesta”. Tamo ju primijeti stari general — udaje se.</div></li>
        <li class="b20-item"><span class="b20-num">8</span><div class="b20-txt"><b>POGLAVLJE VIII — Finale: Tatjana kao kneginja.</b> <em>3 godine kasnije.</em> Onjegin se vraća u Sankt-Peterburg, na balu vidi <b>Tatjanu kao udanu kneginju</b>, elegantnu, dostojanstvenu. <em>Zaljubljuje se u nju — sad on piše njoj pisma.</em> Ona ne odgovara. Dolazi u njen salon, pada na koljena. Tatjana ispovijeda da ga <em>još voli</em>, ali: „<b>Drugomu sam dana i vjerna ću mu biti zauvijek</b>”. Onjegin ostaje slomljen. Roman završava otvoreno.</div></li>
      </ol>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">📍 Struktura romana — zašto ne završava „happy end”</div>
      <div class="box-signal-txt">
        Puškin <em>namjerno obrće klišeje</em>. U tipičnom romantičkom romanu ljubavnici bi na kraju bili zajedno. Ovdje: <b>Tatjana koja je prva voljela sad odbija</b>. Onjegin, koji je prvi odbio, sad moli. <em>Simetrija ali inverzija.</em> Ovo nije slučajno — Puškin pokazuje da je <b>Tatjana moralno superiorna</b> — rast kroz bol. Onjegin je ostao isti, samo je sad na drugoj strani. <strong>Otvoren kraj</strong> je prvi u modernom romanu — čitatelj sam zaključuje što znači.
      </div>
    </div>

    <!-- SEKCIJA 03: LIKOVI -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">03 · Likovi — tko je tko u Onjeginovoj priči</div><div class="sec-line"></div></div>

    <div class="prose">5 ključnih likova — 4 protagonista + Puškin kao pripovjedač. Svaki lik je <em>tip</em> kojeg Puškin istodobno stvara i parodira.</div>

    <div class="con">
      <div class="cr"><div class="ck br">EVGENIJ ONJEGIN</div><div class="cv"><b>Protagonist, 26 god.</b> Peterburški dendi iz plemićke obitelji. Inteligentan, obrazovan (površno), <em>zasićen životom</em>. Nosi portret Byrona, čita Adam Smitha. <b>Arhetip „suvišnog čovjeka”</b> — talentiran ali bez svrhe, ciničan, hladan. Odbija Tatjanu hladno, ubije prijatelja u duelu, godinama luta — a na kraju pada ponizno. <em>Tatjana ga u VII. poglavlju razotkriva kao „parodiju, sjenu”</em> — to je Puškinova kritika byronizma kao poze.</div></div>
      <div class="cr"><div class="ck go">TATJANA LARINA</div><div class="cv"><b>Puškinov „iuzvišeni ideal”.</b> Starija Larinova, povučena, zaljubljena u Rusoove sentimentalne romane. Sanja romantičku ljubav — nalazi ju u Onjeginu. <em>Piše mu otvoreno pismo</em> — rijedak čin hrabrosti za ženu tog doba. Nakon odbijanja sazrijeva. U finalu: dostojanstvena, moralno dosljedna. <b>Puškin je voli eksplicitno</b> („<em>Tatjana, voljena Tatjana!</em>”). Ona je <em>ruska duša, moralna vertikala</em>.</div></div>
      <div class="cr"><div class="ck pa">VLADIMIR LENSKI</div><div class="cv"><b>Naivni pjesnik-romantičar, 18 god.</b> Vratio se iz Göttingena pun idealističke filozofije (Kant, Schiller). Zaljubljen u Olgu, piše joj sentimentalnu poeziju. <em>Antiteza Onjeginu</em> — vjeruje u ljubav, prijateljstvo, budućnost. <b>Umire u duelu</b>. Puškin u VI. poglavlju ironijski pita: bi li postao veliki pjesnik ili „debeli gospodin s podagrom”? — <em>romantizam može ili sazreti u genij, ili propasti u banalnost</em>.</div></div>
      <div class="cr"><div class="ck t">OLGA LARINA</div><div class="cv"><b>Površna lepotica, Tatjanina sestra.</b> Vesela, simpatična, ali plitka. Zaručena za Lenskog. <em>Ne razumije težinu duela</em> — nakon Lenskove smrti brzo se udaje za husara. <b>Antiteza Tatjani</b> — Tatjana kao duboka, Olga kao površna; Tatjana vjerna, Olga zaboravlja. Puškin je prikazuje blago ironično — ona je „normalna” djevojka, a ne iznimka poput Tatjane.</div></div>
      <div class="cr"><div class="ck re">PUŠKIN KAO PRIPOVJEDAČ</div><div class="cv"><b>Sam Puškin kao lik u romanu.</b> Obraća se čitatelju izravno, komentira likove, digresira o svom životu. „<em>Moj Onjegin</em>”, „<em>moja Tatjana</em>”. Kaže da je <b>Lenski ugodniji njegovoj duši, a Tatjana voljeniji lik</b>. Razlikuje se od Onjegina — Onjegin ne voli prirodu, Puškin ju obožava; Onjegin je cinik, Puškin lirski. <em>Puškinova digresijska poetika</em> je ključna inovacija — prvi puta autor priznaje da je u svom djelu.</div></div>
    </div>

    <div class="box-tip">
      <div class="bt-title">💡 4 LIKA — 4 TIPA ROMANTIČARSKE PSIHOLOGIJE</div>
      <div class="bt-txt">
        Puškin stvara <em>cijelu tipologiju</em> romantičkih junaka u jednom djelu:<br>
        <b>1. Onjegin</b> — <em>byronski cinik</em> (demonski, proganjani, hladni)<br>
        <b>2. Lenski</b> — <em>idealistički romantičar</em> (njemačka filozofija, Schiller)<br>
        <b>3. Tatjana</b> — <em>sentimentalna čitateljica</em> (Rousseau, Richardson) koja sazrijeva u <em>moralnu vertikalu</em><br>
        <b>4. Olga</b> — <em>nereflektirajuća ljepotica</em> (površno društveno biće)<br>
        Ova 4 tipa će se ponavljati u cijeloj ruskoj književnosti kroz Dostojevskog, Tolstoja, Turgenjeva.
      </div>
    </div>

    <!-- SEKCIJA 04: SUKOBI -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">04 · Centralni sukobi — filozofske dileme</div><div class="sec-line"></div></div>

    <div class="prose">Onjegin nije samo ljubavna priča. Puškin gradi <em>4 ključna sukoba</em> koji čine filozofsku jezgru djela.</div>

    <div class="con">
      <div class="cr"><div class="ck br">SUKOB 1</div><div class="cv"><b>Strast vs razum / emocija vs konvencija.</b> Tatjana piše pismo — to je strast protiv konvencije (djevojka ne smije prva priznati ljubav). Onjegin odbija — razum/cinizam protiv strasti. <em>U finalu obrat</em>: Onjegin gubi razum iz ljubavi, Tatjana slijedi moralnu konvenciju iz razuma. <b>Ne pobjeđuje ni strast ni razum — pobjeđuje integritet.</b></div></div>
      <div class="cr"><div class="ck go">SUKOB 2</div><div class="cv"><b>Provincija vs metropola / selo vs Sankt-Peterburg.</b> Onjegin u SPB — zasićen, ciničan. Na selu — još dosadnije. Tatjana na selu — autentična. U Moskvi/SPB kao kneginja — dostojanstvena, ali ne sretna. Puškin se pita: <em>gdje je prava Rusija?</em> Odgovor: u ruskom selu, u narodnoj duši koju Tatjana nosi.</div></div>
      <div class="cr"><div class="ck pa">SUKOB 3</div><div class="cv"><b>Prijateljstvo vs ponos / čast kao konvencija.</b> Onjegin ne želi ubiti Lenskog — ali <em>konvencija duela</em> ga primorava. Zareckij (sekundant, profesionalni dueler) ne dopušta odustajanje. <b>Ponos i čast postaju mehanizam smrti.</b> Puškin osuđuje bezumni ritual duela — ironija: sam će poginuti u duelu 1837.</div></div>
      <div class="cr"><div class="ck t">SUKOB 4</div><div class="cv"><b>Iluzija vs stvarnost / knjiški romantizam vs život.</b> Tatjana voli Onjegina jer vidi u njemu junaka iz Rousseaua/Richardsona. Onjegin je zapravo „parodija, sjena” (Tatjanin uvid u VII. pogl.). Lenski voli Olgu jer je vidi kao anđela iz Schillerove poezije. <b>Romantizam kao iluzija — stvarnost razbija ideale.</b> Ovo je zametak realizma u Puškinovom djelu.</div></div>
    </div>

    <!-- SEKCIJA 05: KLJUČNE SCENE -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">05 · Ključne scene — što moraš pamtiti</div><div class="sec-line"></div></div>

    <div class="prose">5 scena koje moraš znati za esej, kviz i citatnik.</div>

    <div class="box-20">
      <div class="b20-lbl">🎬 5 ključnih scena</div>
      <ol class="b20-list b20-numbered">
        <li class="b20-item"><span class="b20-num">1</span><div class="b20-txt"><b>TATJANINO PISMO (III. poglavlje).</b> <em>Centralna scena.</em> Tatjana noću piše Onjeginu pismo na francuskom — otvoreno priznanje ljubavi. Puškin interpolira pismo kao lirsku pjesmu. „<em>Pišem Vam — što još reći…</em>” Puškin dodaje: „<em>Preda mnom leži pismo njeno; ko svetinja mi ono osta</em>”. <b>Prva eksplicitna ženska izjava ljubavi u ruskoj književnosti.</b></div></li>
        <li class="b20-item"><span class="b20-num">2</span><div class="b20-txt"><b>ONJEGINOV ODGOVOR U VRTU (IV. poglavlje).</b> Onjegin dolazi Tatjani u vrt i hladno ju odbija: „<em>Nisam stvoren za blaženstvo braka</em>”, „<em>brzo ćete me zaboraviti</em>”. Ironija: kasnije će sam padati ničice pred njom. <em>Onjegin kao cinik ovdje na vrhuncu</em>.</div></li>
        <li class="b20-item"><span class="b20-num">3</span><div class="b20-txt"><b>TATJANIN SAN (V. poglavlje).</b> Prije imendana Tatjana sanja: medvjed ju lovi po šumi, Onjegin je u kolibi demona, ubija Lenskog nožem. <em>Zloslutni proročanski san.</em> Puškin eksplicitno povezuje san s kasnijim duelom. <b>Jedan od najpoznatijih sanja u svjetskoj književnosti.</b></div></li>
        <li class="b20-item"><span class="b20-num">4</span><div class="b20-txt"><b>DUEL (VI. poglavlje).</b> Rano ujutro, zima, šumski proplanak. Onjegin dolazi kasno (već znak nesklada). Zareckij mjeri korake. Lenski puca prvi — promašuje. <b>Onjegin puca — Lenski pada.</b> Puškin lirski opisuje smrt mladog pjesnika: „<em>srce probodeno, krv iz grudi</em>”. Ironija scene: obojica bi mogla odustati.</div></li>
        <li class="b20-item"><span class="b20-num">5</span><div class="b20-txt"><b>FINALNI SUSRET (VIII. poglavlje).</b> Onjegin dolazi Tatjani u salon. Pada na koljena. Ona ustaje, drhti. <em>Dug monolog</em>: „<em>Ja vas ljubim (zašto bih lagala?)</em> Ali drugomu sam dana i vjerna ću mu biti zauvijek.” Ona izlazi. <b>Onjegin je slomljen</b>. Puškin zatvara: „<em>Ostavimo ga zauvijek</em>”. Otvoren kraj — romantički klišej obrnut.</div></li>
      </ol>
    </div>

    <!-- SEKCIJA 06: TEME I MOTIVI -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">06 · Teme i motivi</div><div class="sec-line"></div></div>

    <div class="con">
      <div class="cr"><div class="ck br">SUVIŠAN ČOVJEK</div><div class="cv"><b>Glavna tema.</b> Onjegin je <em>prvi „suvišan čovjek”</em> u ruskoj književnosti. Talentiran, obrazovan, ali bez svrhe. Ne nalazi mjesta u društvu. Ne može voljeti kad bi trebao, voli kad je kasno. <b>Arhetip za Pečorina (Ljermontov), Oblomova (Gončarov), Rudina (Turgenjev), Raskoljnikova (Dostojevski)</b>.</div></div>
      <div class="cr"><div class="ck go">LJUBAV I NJEN VREMENSKI POREDAK</div><div class="cv"><b>Tema: tajming ljubavi.</b> Tatjana voli Onjegina kad je on ne želi. Onjegin voli Tatjanu kad ga ona ne može (više). <em>Ljubav kao pitanje trenutka, ne vječnosti.</em> Puškinova ironijska tragika: <b>ljudi se mimoilaze</b>, ne zbog zle volje, nego zbog asimetrije vremena.</div></div>
      <div class="cr"><div class="ck pa">PRIRODA I GODIŠNJA DOBA</div><div class="cv"><b>Priroda prati emocije.</b> <em>Ljeto</em> — Tatjanina ljubav buja. <em>Jesen</em> — odbijanje, melankolija. <em>Zima</em> — duel (smrt). <em>Proljeće</em> — Onjeginova preobrazba (prekasno). Puškin je veliki pjesnik <em>ruske prirode</em> — šume, polja, snijeg, rijeke. Kontrastira Onjeginovoj indiferentnosti prema prirodi.</div></div>
      <div class="cr"><div class="ck t">KNJIGE KAO OGLEDALA LIKOVA</div><div class="cv"><b>Puškin karakterizira likove kroz njihovu lektiru.</b> Onjegin čita Byrona, Adam Smitha — površno, ciničko čitanje. Tatjana čita Rousseaua i Richardsona — sentimentalno, dušom. Lenski čita Schillera i Kanta — idealistički. <em>„Reci mi što čitaš, reći ću ti tko si”</em> — Puškinov princip.</div></div>
      <div class="cr"><div class="ck re">RUSIJA I NJEN IDENTITET</div><div class="cv"><b>Puškin se pita: što je Rusija?</b> Odgovor: <em>Tatjana je Rusija</em>. Iako čita francuske romane i piše francuskim pismom, ona je u duši ruska — voli zimu, narodne pripovijesti, babicu-dadilju. <b>„Ruska dušom, iako nije znala zašto”</b> — Puškinov stih o Tatjani. Djelo utemeljuje tip <em>ruske žene kao čuvara moralnih vrijednosti</em>.</div></div>
    </div>

    <!-- SEKCIJA 07: ONJEGIN KAO ROMANTIČKO DJELO -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">07 · Onjegin kao romantičko djelo — i most prema realizmu</div><div class="sec-line"></div></div>

    <div class="prose">Evgenij Onjegin je <em>prijelazno djelo</em>. Počinje kao romantička poema pod Byronovim utjecajem — završava kao realistički roman. <b>Prva polovica je romantizam, druga realizam.</b> Zato djelo zauzima posebno mjesto u povijesti književnosti.</div>

    <div class="sg">
      <div class="sc"><span class="sc-ico si-br">ROMANTIČKI ELEMENTI</span><div class="sc-name">U djelu</div><div class="sc-desc"><b>Byronski junak</b> (Onjegin). <b>Sentimentalna junakinja</b> (Tatjana piše pismo). <b>Duel kao romantički topos</b>. <b>Priroda kao ogledalo duše</b>. <b>Sanje i natprirodno</b> (Tatjanin san). <b>Lirske digresije</b>. <b>Melankolija i weltschmerz</b> kao glavna atmosfera.</div></div>
      <div class="sc"><span class="sc-ico si-go">REALISTIČKI ELEMENTI</span><div class="sc-name">U djelu</div><div class="sc-desc"><b>Psihološka preciznost</b> (Onjeginov razvoj). <b>Kritika društva</b> (prazna peterburška aristokracija). <b>Svakodnevica</b> (opisi imenadana, balova, ruske kuhinje, odjeće). <b>Razotkrivanje romantičkih iluzija</b> (Tatjana uviđa da je Onjegin „parodija”). <b>Otvoreni kraj</b>. <em>Belinski:</em> „<b>enciklopedija ruskog života</b>”.</div></div>
      <div class="sc"><span class="sc-ico si-r">UTJECAJ</span><div class="sc-name">Na kasnije autore</div><div class="sc-desc"><b>Gogolj</b> (Mrtve duše — 1842.), <b>Ljermontov</b> (Heroj našeg vremena — 1840., Pečorin = drugi Onjegin), <b>Dostojevski</b> (Raskoljnikov kao duhovni nasljednik Onjegina — <em>obvezatno čitanje 2026!</em>), <b>Tolstoj</b> (Ana Karenjina — kompozicija paralelnih linija naslijeđena je od Puškina), <b>Turgenjev</b> (svi „suvišni ljudi”). Bez Onjegina ne postoji ruska književnost 19. st.</div></div>
      <div class="sc"><span class="sc-ico si-t">ADAPTACIJE</span><div class="sc-name">Opera · film · balet</div><div class="sc-desc">Puškinov roman trajni izvor inspiracije — tri glavne adaptacije za poznavanje:<br><br>• <b>Čajkovski — opera „Evgenij Onjegin"</b> (1879.). Najpopularnije rusko operno djelo. <em>Tatjanino pismo</em> i <em>Onjeginov monolog</em> — operni klasici.<br>• <b>Ralph Fiennes — film</b> (1999.). Fiennes kao Onjegin, Liv Tyler kao Tatjana. Režija Martha Fiennes.<br>• <b>John Cranko — balet</b> (1965.). Stuttgart Ballet. Glazba: Čajkovski (ali NE iz opere — orkestracija iz drugih Čajkovskog djela).</div></div>
    </div>

    <!-- FEATURE CALLOUT: bridge to H07 Dostoevsky (obvezatno 2026) -->
    <div class="feature-callout" role="complementary">
      <div style="display:flex;gap:16px;align-items:flex-start">
        <div style="flex-shrink:0;font-size:38px;line-height:1">🌉</div>
        <div>
          <div style="font-family:var(--display);font-size:15px;font-weight:700;color:var(--bronze-l);letter-spacing:.5px;margin-bottom:8px;text-transform:uppercase">Zašto je ovo bitno za maturu 2026</div>
          <div style="font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.7">
            <strong>Puškinov Onjegin je genetski predak Dostojevskog Raskoljnikova</strong> — a <em>Zločin i kazna</em> je <b>obvezatno ispitno čitanje 2026</b>. U eseju o Dostojevskom možeš citirati Onjegina kao prvo izvorište „suvišnog čovjeka" u ruskoj književnosti. <br><br>
            <em>Linija razvoja:</em> Werther (osjećajni individualac, H05) → <b>Onjegin (ciničan, dosadan plemić, H06)</b> → Pečorin (Ljermontov) → Oblomov (Gončarov) → <b>Raskoljnikov (krivi, idealist-ubojica, H07)</b>. Isti psihološki arhetip kroz 80 godina — svaki sljedeći dublji i tamniji.
          </div>
        </div>
      </div>
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
      <span class="pill p-br">7 teza</span>
      <span class="pill p-go">model uvoda</span>
      <span class="pill p-r">5 grešaka</span>
      <span class="pill p-t">checklist</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">✍ Kako se piše esej o Evgeniju Onjeginu</div>
      <div class="box-int-txt">
        Iako <em>Evgenij Onjegin nije na popisu obaveznih ispitnih djela 2026</em>, pojavljuje se u teoriji književnosti (oneginski stih, suvišan čovjek, roman u stihovima) i u čitanju književnog teksta kao ulomak. <strong>Puškin može biti paralela u eseju o Dostojevskom</strong> (H07 — obvezatno), o Wertheru (H05 — obvezatno, suvišan čovjek kao tip), ili o romantizmu općenito. <em>7 teza</em> koje slijede pokrivaju glavne pristupe Puškinu.
      </div>
    </div>

    <!-- TEZE -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · 5 esejskih teza</div><div class="sec-line"></div></div>

    <div class="box-20">
      <div class="b20-lbl">💡 7 teza koje možeš razviti u esej o Puškinu</div>
      <ol class="b20-list b20-numbered">
        <li class="b20-item"><span class="b20-num">1</span><div class="b20-txt"><b>TEZA 1 — Onjegin kao arhetip „suvišnog čovjeka”.</b> <em>Puškin u Onjeginu stvara prvi tip „suvišnog čovjeka” koji će dominirati ruskom književnošću cijelog 19. stoljeća.</em> Onjegin je talentiran, obrazovan, ali bez svrhe — cinik koji ne može voljeti kad bi trebao, voli kad je kasno. Razvija se u Pečorinu (Ljermontov), Oblomovu (Gončarov), Raskoljnikovu (Dostojevski — <b>obvezatno 2026</b>). <em>Upotreba:</em> paralela s Dostojevskim u eseju.</div></li>
        <li class="b20-item"><span class="b20-num">2</span><div class="b20-txt"><b>TEZA 2 — Tatjana Larina kao moralna vertikala.</b> <em>Tatjana je Puškinov „uzvišeni ideal” — ruska duša koja raste kroz bol i postaje moralni stožer romana.</em> Od sentimentalne čitateljice francuskih romana do dostojanstvene kneginje koja odbija Onjegina. Ne iz osvete — iz integriteta. <em>„Drugomu sam dana i vjerna ću mu biti zauvijek”</em>. Tatjana je model <b>ruske žene kao čuvara moralnih vrijednosti</b> — utječe na Tolstoja (Ana Karenjina), Dostojevskog.</div></li>
        <li class="b20-item"><span class="b20-num">3</span><div class="b20-txt"><b>TEZA 3 — Onjegin vs Lenski: dva lica romantizma.</b> <em>Puškin kroz dvojicu prijatelja pokazuje dvije strane romantičarskog junaka — ciničko-demonsku (byronizam) i idealističko-sentimentalnu.</em> Onjegin = Byron (Childe Harold, Don Juan); Lenski = Schiller i Kant (njemački idealizam). Duel je sukob dviju koncepcija romantizma — pobjeđuje cinizam, ali po cijeni prijateljstva. <em>Puškin time kritizira obje pozicije.</em></div></li>
        <li class="b20-item"><span class="b20-num">4</span><div class="b20-txt"><b>TEZA 4 — Roman u stihovima kao jedinstvena forma.</b> <em>Evgenij Onjegin je prvi roman u stihovima u svjetskoj književnosti — hibridna forma koja spaja epsku narativnost, lirsku subjektivnost i dramsku neposrednost.</em> Oneginski stih (14 stihova AbAbCCddEffEgg, jampski tetrametar) omogućuje <b>enciklopedijsku gustoću</b> — svaka strofa je minijaturna cjelina, ali se ulijeva u veći narativ. Belinski: „<em>enciklopedija ruskog života</em>”. Puškinov pripovjedač kao <em>lik u vlastitom djelu</em> — inovacija.</div></li>
        <li class="b20-item"><span class="b20-num">5</span><div class="b20-txt"><b>TEZA 5 — Most između romantizma i realizma.</b> <em>Evgenij Onjegin je prijelazno djelo — počinje kao romantička poema pod Byronovim utjecajem, završava kao realistički roman.</em> Prva polovica: byronski junak, sentimentalna junakinja, priroda kao ogledalo duše, zloslutni sanje. Druga polovica: psihološka preciznost, kritika društva, <em>razotkrivanje romantičkih iluzija</em> (Tatjana uviđa da je Onjegin „parodija”). Otvoreni kraj. Puškin <b>zatvara europski romantizam</b> i <b>otvara ruski realizam</b>.</div></li>
        <li class="b20-item"><span class="b20-num">6</span><div class="b20-txt"><b>TEZA 6 — Dosada i splin kao moderna bolest.</b> <em>Puškin u Onjeginu dijagnosticira novi oblik patnje — „rusku dosadu” (splin) — koja će postati centralna tema europske književnosti 19./20. st.</em> Ova nije melankolija Werthera (H05, ljubavna) niti Byronova demonska bol (metafizička) — ovo je <b>bezrazložna zasićenost</b> koja prethodi Baudelaireu (<em>spleen</em>) i Dostojevskom (Raskoljnikovljeva apatija). Onjeginova dosada rađa njegov cinizam, odbijanje Tatjane i konačno duel. <em>Upotreba:</em> paralela s Baudelaireom (H08) i Camusovim <b>Strancem</b> (obvezatno 2026) — Meursault kao krajnji razvoj „dosade kao bolest”.</div></li>
        <li class="b20-item"><span class="b20-num">7</span><div class="b20-txt"><b>TEZA 7 — Finale kao antiklimaks i otvoreni kraj.</b> <em>Evgenij Onjegin ne završava — prestaje. Puškinov eksplicitni „Ostavimo ga zauvijek” je prvi otvoreni kraj u modernom romanu.</em> Umjesto katarze ili didaktičnog zaključka, čitatelj ostaje s Onjeginom koji kleči, slomljen. <b>Nema happy enda, nema tragedije po klasičnoj definiciji, nema morala.</b> Puškin time obrće klišej romantičkog romana i <em>postavlja osnovu za modernistički antiklimaks</em> — Flaubertov <b>Madame Bovary</b>, Kafkinu <b>Preobrazbu</b> (obvezatno 2026), Camusovog <b>Stranca</b>. <em>Upotreba:</em> za esej o modernoj narativnoj formi i ulozi čitatelja u stvaranju značenja.</div></li>
      </ol>
    </div>

    <!-- MODEL UVODA -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · Model uvoda · tema: Onjegin kao suvišan čovjek</div><div class="sec-line"></div></div>

    <div class="box-key">
      <div class="box-key-lbl">📝 Primjer uvoda eseja — Teza 1</div>
      <div class="box-key-txt">
        <em>Polazno pitanje: „Kako Puškin u Evgeniju Onjeginu stvara arhetip suvišnog čovjeka?”</em>
        <br><br>
        <p><em>„Aleksandar Puškin (1799.–1837.), utemeljitelj moderne ruske književnosti, u svom životnom djelu <strong>Evgenij Onjegin</strong> (1823.–1831.) stvara prvi roman u stihovima europske književnosti. Kroz 8 poglavlja i 389 oneginskih strofa prikazuje život mladog peterburškog plemića Evgenija Onjegina — čovjeka koji nema mjesta u društvu niti svrhe u životu. Iako je inteligentan i obrazovan, Onjegin se dosađuje, odbija ljubav kad mu se ponudi, ubija prijatelja u duelu, a na kraju plače pred nedostupnom ženom. Upravo kroz ovog lika Puškin utemeljuje arhetip koji će dominirati ruskom književnošću cijelog 19. stoljeća — <strong>tip „suvišnog čovjeka”</strong>. U eseju ću pokazati kako Puškin kroz tri ključna koraka — peterburšku dosadu, hladno odbijanje Tatjane i kobni duel s Lenskim — gradi ovaj arhetip koji će naslijediti Ljermontovljev Pečorin, Gončarovljev Oblomov i Dostojevskijev Raskoljnikov.”</em></p>
      </div>
    </div>

    <!-- GREŠKE -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">03 · 5 grešaka koje NE smiješ napraviti</div><div class="sec-line"></div></div>

    <div class="con">
      <div class="cr"><div class="ck br">GREŠKA 1</div><div class="cv"><b>Reći da je Evgenij Onjegin „roman u prozi”.</b> Puškin je stvorio <em>roman u stihovima</em> — hibridna forma koja se piše u oneginskim strofama (14-stih, AbAbCCddEffEgg). Roman u prozi piše Puškin kasnije (<em>Kapetanova kći</em>, 1836.), ali Onjegin je <b>u stihu</b>. Ova greška odmah otkriva da nisi čitao djelo.</div></div>
      <div class="cr"><div class="ck go">GREŠKA 2</div><div class="cv"><b>Tvrditi da je Tatjana slaba jer u finalu odbija Onjegina.</b> <em>Upravo suprotno</em> — to je njena najveća snaga. Ona ga još voli („<em>Ja vas ljubim, zašto bih lagala?</em>”), ali slijedi moralnu obvezu prema mužu. Tatjana je <b>moralna vertikala</b> romana. Puškin ju eksplicitno voli („<em>voljena Tatjana!</em>”). Ne brkati moralnu dosljednost s emocionalnom hladnoćom.</div></div>
      <div class="cr"><div class="ck pa">GREŠKA 3</div><div class="cv"><b>Brkati Onjegina i Lenskog kao „isti tip romantičkog junaka”.</b> Oni su <em>antiteza</em>. Onjegin = byronski cinik (demonski, hladan, proganjani). Lenski = idealistički romantičar (Schiller, Kant, naivni pjesnik). <b>Njihov duel je filozofski sukob</b> dviju koncepcija romantizma, ne samo osobni sukob. Razumjeti ovu razliku je ključ eseja.</div></div>
      <div class="cr"><div class="ck t">GREŠKA 4</div><div class="cv"><b>Izjednačavati Puškina s Onjeginom.</b> Puškin se <em>svjesno ograđuje</em> od svog junaka. U I. poglavlju kaže: „<em>Onjegin je moj dobri prijatelj</em>”, ali zatim navodi razlike: Onjegin ne voli prirodu, Puškin ju obožava; Onjegin je cinik, Puškin je lirski i ironski. Puškin je <b>lik u vlastitom romanu</b>, ali nije Onjegin. Bliže je Lenskom (Puškin je također poginuo u duelu — tragična paralela).</div></div>
      <div class="cr"><div class="ck re">GREŠKA 5</div><div class="cv"><b>Ignorirati Puškinovu ironiju.</b> Roman nije tragičan u romantičkom smislu — <em>Puškin stalno ironijski komentira</em>. Bilo bi da Lenski poživio: „<em>možda bi postao veliki pjesnik, ili samo debeli gospodin s podagrom</em>”. Tatjanin san: „<em>jezik gluposti</em>”. Onjeginovu dosadu: <em>ironijski katalog knjiga koje čita</em>. <b>Puškin je ironijski pjesnik</b>, ne patetički — ne čitati ga kao Wertheru.</div></div>
    </div>

    <!-- CHECKLIST -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">04 · Checklist prije predaje eseja</div><div class="sec-line"></div></div>

    <div class="box-key">
      <div class="box-key-lbl">✅ 10 provjera prije predaje</div>
      <div class="box-key-txt">
        <ol style="margin:0;padding-left:20px;line-height:1.8">
          <li><b>Minimum 440 riječi.</b> Ako je kraći, esej se NE vrednuje.</li>
          <li><b>Uvod-razrada-zaključak.</b> Središnja tvrdnja u uvodu, 2–3 argumenta u razradi, zaključak koji vraća na tezu.</li>
          <li><b>Jasna središnja tvrdnja.</b> 1 rečenica u uvodu — ne više, ne manje.</li>
          <li><b>Kontekst autora i djela.</b> Puškin (1799.–1837.), <em>Evgenij Onjegin</em> (1823.–1831.), roman u stihovima, 8 poglavlja, oneginska strofa.</li>
          <li><b>Bar 1 citat.</b> „Ja vas ljubim, zašto bih lagala?” / „Drugomu sam dana…” / Tatjanino pismo.</li>
          <li><b>Bar 1 književnoteorijski pojam.</b> <em>Suvišan čovjek / roman u stihovima / byronizam / oneginski stih / romantizam / realizam</em>.</li>
          <li><b>Povezivanje s drugim djelom.</b> Werther (H05, suvišan čovjek), Byron (uzor Puškinu), Dostojevski (Raskoljnikov kao Onjeginov nasljednik).</li>
          <li><b>Hrvatski pravopis.</b> <em>Navodnici „…”</em>, ne ”". Puškin, ne Pushkin. Onjegin, ne Onegin.</li>
          <li><b>Odlomci.</b> Minimum 3 odlomka (uvod, razrada, zaključak). Preporučno 4–5.</li>
          <li><b>Gramatika.</b> Kratki pregled: kongruencija, pravopis, interpunkcija.</li>
        </ol>
      </div>
    </div>

    <div class="nav-row">
      <span class="nb" onclick="sw(1)">← 🌹 Evgenij Onjegin</span>
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
      <span class="pill p-go">35 citata</span>
      <span class="pill p-r">napamet</span>
      <span class="pill p-t">tez + razina + random</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💬 Citati — arsenal za esej o romantizmu</div>
      <div class="box-int-txt">
        <em>Citat u pravom trenutku vrijedi 1–2 boda</em> u argumentaciji eseja. <b>35 probranih citata</b> iz Puškinova <em>Evgenija Onjegina</em> (14), Byrona (5), Goethea <em>(Faust)</em> (3), engleskog romantizma (6) i ruskog konteksta (7). <strong>Filtriraj po tezi</strong> (T1–T7) kako bi brzo našao citate za konkretnu argumentaciju, <strong>po razini</strong> (osnovno/napredno), ili pokreni <em>🎲 Random</em> za flashcard ponavljanje. <b>5 must-know citata</b> označeno je <em>★ Napamet</em>.
      </div>
    </div>

    <div class="cit-filters">
      <button class="cit-fbtn active" data-filter="all" onclick="citFilter('all', this)">Svi (35)</button>
      <button class="cit-fbtn fspec" data-filter="must" onclick="citFilter('must', this)">★ Napamet (5)</button>
      <button class="cit-fbtn" data-filter="onjegin" onclick="citFilter('onjegin', this)">🌹 Onjegin (14)</button>
      <button class="cit-fbtn" data-filter="byron" onclick="citFilter('byron', this)">⚔ Byron (5)</button>
      <button class="cit-fbtn" data-filter="faust" onclick="citFilter('faust', this)">🔥 Faust (3)</button>
      <button class="cit-fbtn" data-filter="engl" onclick="citFilter('engl', this)">🌿 Engleski rom. (6)</button>
      <button class="cit-fbtn" data-filter="ruski" onclick="citFilter('ruski', this)">💭 Ruski kontekst (7)</button>
    </div>

    <!-- Secondary filters: tez + difficulty + random -->
    <div class="cit-subfilters" role="group" aria-label="Dodatni filteri">
      <span class="cit-sublbl">Tez:</span>
      <button type="button" class="cit-diffbtn active" data-tez="all" onclick="citFilterByTez('all', this)">Sve</button>
      <button type="button" class="cit-diffbtn" data-tez="1" onclick="citFilterByTez(1, this)">T1</button>
      <button type="button" class="cit-diffbtn" data-tez="2" onclick="citFilterByTez(2, this)">T2</button>
      <button type="button" class="cit-diffbtn" data-tez="3" onclick="citFilterByTez(3, this)">T3</button>
      <button type="button" class="cit-diffbtn" data-tez="4" onclick="citFilterByTez(4, this)">T4</button>
      <button type="button" class="cit-diffbtn" data-tez="5" onclick="citFilterByTez(5, this)">T5</button>
      <button type="button" class="cit-diffbtn" data-tez="7" onclick="citFilterByTez(7, this)">T7</button>
      <span class="cit-sublbl" style="margin-left:12px">Razina:</span>
      <button type="button" class="cit-diffbtn active" data-diff="all" onclick="citFilterByDiff('all', this)">Sve</button>
      <button type="button" class="cit-diffbtn" data-diff="basic" onclick="citFilterByDiff('basic', this)">Osnovno</button>
      <button type="button" class="cit-diffbtn" data-diff="advanced" onclick="citFilterByDiff('advanced', this)">Napredno</button>
      <button type="button" class="cit-diffbtn" id="cit-favonly-btn" onclick="citToggleFavOnly()" aria-label="Prikaži samo favorite" title="Prikaži samo favorite">☆ Favoriti (<span id="cit-fav-count">0</span>)</button>
      <button type="button" class="cit-random" onclick="citRandom()" aria-label="Slučajan citat">🎲 Random</button>
    </div>

    <div class="cit-count" aria-live="polite">
      <span><b id="cit-visible">35</b> od <span id="cit-total">35</span> citata prikazano</span>
      <button type="button" class="cit-count-clear" id="cit-count-clear" onclick="citClearFilters()">Resetiraj filtere</button>
    </div>

    <!-- Empty state (shown when filters hide everything) -->
    <div class="cit-empty" id="cit-empty">
      <b>Nema rezultata</b>Niti jedan citat ne zadovoljava trenutne filtere. Probaj drugu kombinaciju ili resetiraj filtere.
    </div>

    
    <div class="cit-search-row" style="margin:14px 0 16px;display:flex;gap:8px;align-items:center">
      <label for="cit-search" class="sr-only" style="position:absolute;left:-9999px">Pretraži citate</label>
      <span style="font-size:18px;color:var(--gold,#e9b446)">🔍</span>
      <input type="search" id="cit-search" class="cit-search" placeholder="Pretraži citate (npr. Onjegin, Puškin, romantizam, suvišan)…" aria-label="Pretraži citate" autocomplete="off"
        style="flex:1;padding:10px 14px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:10px;color:var(--t1,#f4ede5);font-family:var(--mono,monospace);font-size:13px"
        oninput="citSearch(this.value)">
      <button type="button" class="cit-clear" onclick="document.getElementById('cit-search').value='';citSearch('')" aria-label="Očisti pretragu" title="Očisti"
        style="padding:8px 12px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:8px;color:var(--t2,#c5b8aa);cursor:pointer;font-size:14px">✕</button>
    </div>
<div class="cit-grid">
      <!-- PUSKIN - EVGENIJ ONJEGIN -->
      <div class="cit-card must-know" data-cat="onjegin" data-cit-id="h06c01" data-diff="basic" data-tez="2">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">ONJEGIN</span>
          <span class="cit-must">Napamet</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Puškin</span>
          <span class="cit-src-work">Evgenij Onjegin, III poglavlje — Tatjanino pismo</span>
        </div>
        <div class="cit-txt">„Pišem Vam — što još reći? Što mogu više dodati? Sad znam — u vašoj je vlasti da me prezirom kaznite.”</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(2, this)">T2</button></div>
        <div class="cit-use"><b>Kada koristiti</b> početak Tatjaninog pisma Onjeginu. <em>Prva eksplicitna izjava ljubavi žene u ruskoj književnosti.</em> Za Tezu 2 (Tatjana kao moralna vertikala) — Tatjana riskira čast iz iskrenosti. Neizostavan citat za esej o djelu.</div>
      </div>

      <div class="cit-card must-know" data-cat="onjegin" data-cit-id="h06c02" data-diff="basic" data-tez="2,7">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">ONJEGIN</span>
          <span class="cit-must">Napamet</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Puškin</span>
          <span class="cit-src-work">Evgenij Onjegin, VIII poglavlje — Tatjanin odgovor Onjeginu</span>
        </div>
        <div class="cit-txt">„Ja vas ljubim (zašto bih lagala?), ali drugomu sam dana — i vjerna ću mu biti zauvijek.”</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(2, this)">T2</button><button type="button" class="cit-tez" onclick="citFilterByTez(7, this)">T7</button></div>
        <div class="cit-use"><b>Kada koristiti</b> <b>ključ za Tezu 2.</b> Tatjanin finalni monolog — priznaje ljubav, odbija akciju. <em>Moralna dosljednost iznad emocije.</em> Citat je ušao u rusku kulturu kao formula ženskog integriteta. Absolutni must-know za esej.</div>
      </div>

      <div class="cit-card must-know" data-cat="onjegin" data-cit-id="h06c03" data-diff="basic" data-tez="2">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">ONJEGIN</span>
          <span class="cit-must">Napamet</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Puškin</span>
          <span class="cit-src-work">Evgenij Onjegin, o Tatjani</span>
        </div>
        <div class="cit-txt">„Ruska dušom, iako nije znala zašto.”</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(2, this)">T2</button></div>
        <div class="cit-use"><b>Kada koristiti</b> za argument da je <em>Tatjana utjelovljenje ruske duše</em>. Iako je odgajana u francuskoj kulturi (pismo piše na francuskom), po osjećajima je autentično ruska. <b>Puškinov etnopsihološki iskaz</b>. Baza za Tezu 2.</div>
      </div>

      <div class="cit-card must-know" data-cat="onjegin" data-cit-id="h06c04" data-diff="advanced" data-tez="3,5">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">ONJEGIN</span>
          <span class="cit-must">Napamet</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Puškin</span>
          <span class="cit-src-work">Evgenij Onjegin, VII poglavlje — Tatjanin uvid</span>
        </div>
        <div class="cit-txt">„Parodija, sjena, čovjek bez originalnosti.”</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(3, this)">T3</button><button type="button" class="cit-tez" onclick="citFilterByTez(5, this)">T5</button></div>
        <div class="cit-use"><b>Kada koristiti</b> Tatjana u Onjeginovoj napuštenoj kući čita njegove knjige i shvaća da je on <em>knjiška imitacija</em> byronskog junaka. <b>Puškinova kritika byronizma kao poze.</b> Za Teze 3 i 5 — razotkrivanje romantičkih iluzija.</div>
      </div>

      <div class="cit-card" data-cat="onjegin" data-cit-id="h06c05" data-diff="basic" data-tez="1,6">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">ONJEGIN</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Puškin</span>
          <span class="cit-src-work">Evgenij Onjegin, I poglavlje — o Onjeginu</span>
        </div>
        <div class="cit-txt">„Pobolestila ga je bolest kojoj je davno trebalo dati ime — ruska dosada.”</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(1, this)">T1</button><button type="button" class="cit-tez" onclick="citFilterByTez(6, this)">T6</button></div>
        <div class="cit-use"><b>Kada koristiti</b> parafraza za Onjeginovu melankoliju. Puškin dijagnostuje suvremeno stanje <em>bolest</em> plemstva. <b>Temelj za Tezu 1 — suvišan čovjek.</b> „Ruska dosada” = kasniji pojam „splin” kod Baudelairea (H07/H08).</div>
      </div>

      <div class="cit-card" data-cat="onjegin" data-cit-id="h06c06" data-diff="advanced" data-tez="1">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">ONJEGIN</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Puškin</span>
          <span class="cit-src-work">Evgenij Onjegin, pripovjedačev komentar</span>
        </div>
        <div class="cit-txt">„Onjegin je moj dobri prijatelj — ali je s njim ipak postoji mnoštvo razlika.”</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(1, this)">T1</button></div>
        <div class="cit-use"><b>Kada koristiti</b> <b>ključ za Grešku 4 (ne brkati Puškina i Onjegina).</b> Puškin se eksplicitno ograđuje. Za argument o <em>pripovjedaču kao liku</em> u romanu (Teza 4 — roman u stihovima kao forma).</div>
      </div>

      <div class="cit-card" data-cat="onjegin" data-cit-id="h06c07" data-diff="advanced" data-tez="1,3">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">ONJEGIN</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Puškin</span>
          <span class="cit-src-work">Evgenij Onjegin, VI poglavlje — Puškinova digresija o Lenskom</span>
        </div>
        <div class="cit-txt">„Možda bi postao veliki pjesnik — a možda, tko zna, samo debeli gospodin s podagrom.”</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(1, this)">T1</button><button type="button" class="cit-tez" onclick="citFilterByTez(3, this)">T3</button></div>
        <div class="cit-use"><b>Kada koristiti</b> Puškinova ironijska digresija nakon Lenskove smrti. <em>Ironijski ruši romantički kult genija.</em> <b>Temelj za Grešku 5</b> (ne ignorirati Puškinovu ironiju). Citat pokazuje prijelaz iz romantizma u realizam.</div>
      </div>

      <div class="cit-card" data-cat="onjegin" data-cit-id="h06c08" data-diff="advanced" data-tez="3">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">ONJEGIN</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Puškin</span>
          <span class="cit-src-work">Evgenij Onjegin — pripovjedač o Tatjani</span>
        </div>
        <div class="cit-txt">„Tatjana, voljena Tatjana! Nad tobom sam suzu prolio.”</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(3, this)">T3</button></div>
        <div class="cit-use"><b>Kada koristiti</b> eksplicitno ljubavno obraćanje pripovjedača svojoj junakinji. <em>Puškinov odnos prema Tatjani.</em> Za Tezu 2 i Tezu 4 — pripovjedač nije neutralan, ima emocionalni odnos prema likovima.</div>
      </div>

      <div class="cit-card" data-cat="onjegin" data-cit-id="h06c09" data-diff="advanced" data-tez="4,5">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">ONJEGIN</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Puškin</span>
          <span class="cit-src-work">Evgenij Onjegin — opis Onjeginove dosade</span>
        </div>
        <div class="cit-txt">„Sve je pogledao — i sve mu je dosadilo.”</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(4, this)">T4</button><button type="button" class="cit-tez" onclick="citFilterByTez(5, this)">T5</button></div>
        <div class="cit-use"><b>Kada koristiti</b> sažetak Onjeginovog stanja. <em>Zasićenost, splin, dosada</em> — glavni simptom „suvišnog čovjeka”. Za Tezu 1 — veza s kasnijim Baudelaireovim <em>splinom</em> i egzistencijalističkim apsurdom (Camus — <b>obvezatno 2026</b>).</div>
      </div>

      <div class="cit-card" data-cat="onjegin" data-cit-id="h06c19" data-diff="advanced" data-tez="">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">ONJEGIN</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Puškin</span>
          <span class="cit-src-work">Evgenij Onjegin, I poglavlje — Onjeginova dosada</span>
        </div>
        <div class="cit-txt">„Hladan um, ali vatreno srce — takav je moj junak.”</div>
        <div class="cit-use"><b>Kada koristiti</b> Puškinov sažetak Onjeginove dvostrukosti. <em>Romantička tenzija između razuma i strasti.</em> Za Tezu 1 i Tezu 3 — Onjegin je tipski byronski junak ali s puškinskom autorskom distancom. <b>Ne idealizacija, ne karikatura</b> — psihološka preciznost.</div>
      </div>

      <div class="cit-card" data-cat="onjegin" data-cit-id="h06c20" data-diff="basic" data-tez="">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">ONJEGIN</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Puškin</span>
          <span class="cit-src-work">Evgenij Onjegin, VIII poglavlje — Onjeginovo priznanje</span>
        </div>
        <div class="cit-txt">„Ljubav me zarobila — evo kazne za moju pomiješanost.”</div>
        <div class="cit-use"><b>Kada koristiti</b> Onjeginov pokajnički monolog u finalu (VIII. poglavlje). Priznaje da je <em>pogriješio odbacivši Tatjanu</em>. Ovo je okret — Onjegin prestaje biti cinik, postaje pravi tragični lik. <em>Ironija:</em> točno kad nauči voljeti, nauči i gubiti. Za Tezu 5 i Tezu 7 (finale kao antiklimaks).</div>
      </div>

      <div class="cit-card" data-cat="onjegin" data-cit-id="h06c21" data-diff="advanced" data-tez="">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">ONJEGIN</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Puškin</span>
          <span class="cit-src-work">Evgenij Onjegin, VI poglavlje — nakon duela</span>
        </div>
        <div class="cit-txt">„Ubio si prijatelja — to je najveća krivica koja se može imati.”</div>
        <div class="cit-use"><b>Kada koristiti</b> Puškinov moralni komentar nakon Lenskove smrti. <em>Ne bijesni napad, nego tiha konstatacija</em>. Onjegin ne može pobjeći od ove krivice — ona ga progoni kroz ostatak romana. Za povezivanje s Dostojevskim (<b>Zločin i kazna</b> — obvezatno 2026), gdje je krivica centralna tema.</div>
      </div>

      <div class="cit-card" data-cat="onjegin" data-cit-id="h06c31" data-diff="advanced" data-tez="3">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">ONJEGIN</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Puškin</span>
          <span class="cit-src-work">Evgenij Onjegin, II poglavlje — o Lenskom</span>
        </div>
        <div class="cit-txt">„Pjevao je ljubav, pjevao je poslušan ljubavi — glas njegov bijaše čist i mladenački kao san.”</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(3, this)">T3</button></div>
        <div class="cit-use"><b>Kada koristiti</b> za <b>Tezu 3</b> (dva lica romantizma) — Lenski kao <em>naivni idealistički romantičar</em>. Puškin ga prikazuje kroz ironijsku nježnost — glas „čist i mladenački" znak je da još nije dosegao zrelost. Poginut će u duelu u VI. pogl. Kontrast Onjeginu.</div>
      </div>

      <div class="cit-card" data-cat="onjegin" data-cit-id="h06c32" data-diff="advanced" data-tez="7">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">ONJEGIN</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Puškin</span>
          <span class="cit-src-work">Evgenij Onjegin, VI poglavlje — Puškinov digresijski komentar</span>
        </div>
        <div class="cit-txt">„Blago onomu tko je mladost upoznao, tko ju je na vrijeme ostavio…”</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(7, this)">T7</button></div>
        <div class="cit-use"><b>Kada koristiti</b> najpoznatija Puškinova <em>digresija</em> u djelu. Meditacija o životnim fazama. <b>Teza 7 (antiklimaks finale)</b> — roman nije samo ljubavna priča nego i razmišljanje o prolaznosti. Citat pokazuje da je Puškin filozof, ne samo pripovjedač.</div>
      </div>


      <!-- BYRON -->
      <div class="cit-card" data-cat="byron" data-cit-id="h06c10" data-diff="basic" data-tez="5">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">BYRON</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Byron</span>
          <span class="cit-src-work">Childe Haroldovo hodočašće, IV pjevanje (1818.)</span>
        </div>
        <div class="cit-txt">„Ima zadovoljstvo u pustim šumama, / Ima zanos na obali samoćnoj.”</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(5, this)">T5</button></div>
        <div class="cit-use"><b>Kada koristiti</b> manifest romantičkog individualizma — <em>samoća kao duhovni put</em>. Za Tezu 3 (dva lica romantizma) — byronizam kao inspiracija za Onjegina. <b>Childe Harold</b> je djelo koje je Onjegin čitao; Tatjana ga pronalazi u njegovoj knjižnici.</div>
      </div>

      <div class="cit-card" data-cat="byron" data-cit-id="h06c11" data-diff="basic" data-tez="5">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">BYRON</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Byron</span>
          <span class="cit-src-work">Don Juan (1819.–1824.)</span>
        </div>
        <div class="cit-txt">„Spavaj, bratу moj; ne puni moj san mrkim slikama.”</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(5, this)">T5</button></div>
        <div class="cit-use"><b>Kada koristiti</b> <b>Don Juan</b> kao Byronova ironijsko-epska poema (nedovršena — Byron umire 1824.). <em>Parodija romantičkog junaka</em> — slično Puškinovoj ironiji prema Onjeginu. Za argument o <b>utjecaju Byrona na Puškina</b> (Teza 3).</div>
      </div>

      <div class="cit-card" data-cat="byron" data-cit-id="h06c12" data-diff="advanced" data-tez="5">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">BYRON</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Byron</span>
          <span class="cit-src-work">Manfred (1817.)</span>
        </div>
        <div class="cit-txt">„Nisam tražio pravo samo za sebe, tražio sam istinu.”</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(5, this)">T5</button></div>
        <div class="cit-use"><b>Kada koristiti</b> <b>Manfred</b> je Byronova drama o demonskom junaku koji komunicira s nadnaravnim bićima. Prethodnik Goetheova Fausta u modernom smislu. <em>Arhetip „demonskog junaka”</em> — središnji pojam romantizma. Za Tezu 3.</div>
      </div>

      <div class="cit-card" data-cat="byron" data-cit-id="h06c22" data-diff="basic" data-tez="">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">BYRON</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Byron</span>
          <span class="cit-src-work">Childe Harold, III pjevanje (1816.) — o samoći</span>
        </div>
        <div class="cit-txt">„Usamljen sam, sam, najsamljeniji od svih samih.”</div>
        <div class="cit-use"><b>Kada koristiti</b> <b>arhetipska formulacija byronskog heroja</b>. Izolacija kao moralna superiornost, ne patologija. Utjecaj na Puškinov prikaz Onjegina — ali Puškin dodaje ironiju koju Byron nema. <em>Paralela s Tatjanom u finalu</em> — ona odabire samoću vjernosti, ne sudbinu.</div>
      </div>

      <div class="cit-card" data-cat="byron" data-cit-id="h06c33" data-diff="advanced" data-tez="5">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">BYRON</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Byron</span>
          <span class="cit-src-work">Childe Harold, Canto III (1816.)</span>
        </div>
        <div class="cit-txt">„Ja nisam voljen — ja volim. Ja nisam voljen — ali zato ja i živim.”</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(5, this)">T5</button></div>
        <div class="cit-use"><b>Kada koristiti</b> za <b>Tezu 5</b> (Puškin–Byron) — formula byronskog heroja: ljubav kao usamljeni čin, bez uzvrata. Ključno za razumijevanje <em>byronizma kao pozicije prema svijetu</em>. Utjecalo na Onjegina — ali Puškin okreće: Tatjana ga voli, on ne uzvraća.</div>
      </div>


      <!-- GOETHE - FAUST -->
      <div class="cit-card" data-cat="faust" data-cit-id="h06c13" data-diff="advanced" data-tez="5">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">FAUST</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Goethe</span>
          <span class="cit-src-work">Faust I, „Nocht” (1808.)</span>
        </div>
        <div class="cit-txt">„Dvije duše žive, ah, u mojim prsima — jedna od druge odvojena hoće biti.”</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(5, this)">T5</button></div>
        <div class="cit-use"><b>Kada koristiti</b> najpoznatiji citat Fausta. <em>Dvostruka priroda romantičkog junaka</em> — duh vs tijelo, ideal vs strast. Za povezivanje romantizma i psihologije. <b>Faust je najvažnije djelo Goetheove kasne faze</b> — dopuna H05 (Werther).</div>
      </div>

      <div class="cit-card" data-cat="faust" data-cit-id="h06c14" data-diff="basic" data-tez="">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">FAUST</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Goethe</span>
          <span class="cit-src-work">Faust I, Faustov ugovor s Mefistofelesom</span>
        </div>
        <div class="cit-txt">„Zaustavi se, trenutku! Tako si lijep.”</div>
        <div class="cit-use"><b>Kada koristiti</b> <em>Faustov ugovor</em> — ako ikad kaže ove riječi pred ljepotom trenutka, Mefistofeles uzima njegovu dušu. <b>Metafora romantičke težnje za apsolutnim.</b> U Faustu II (1832.) Faust ih izgovori — ali ironično, pred viđenjem budućeg čovječanstva.</div>
      </div>

      <div class="cit-card" data-cat="faust" data-cit-id="h06c15" data-diff="advanced" data-tez="">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">FAUST</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Goethe</span>
          <span class="cit-src-work">Faust II, finale (1832., posmrtno)</span>
        </div>
        <div class="cit-txt">„Tko teži, neumorno tražeći — tog možemo izbaviti.”</div>
        <div class="cit-use"><b>Kada koristiti</b> Goetheov finalni stih Fausta — <em>spasenje kroz trud</em>, ne zasluge. Anđeli spašavaju Fausta jer je nikad nije prestao tražiti. <b>Metafora modernog čovjeka</b> — beskonačna težnja kao smisao života. Ključ romantičke filozofije.</div>
      </div>


      <!-- ENGLESKI ROMANTIZAM -->
      <div class="cit-card" data-cat="engl" data-cit-id="h06c16" data-diff="advanced" data-tez="">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">ENG. ROM.</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Wordsworth</span>
          <span class="cit-src-work">I Wandered Lonely as a Cloud (1807.)</span>
        </div>
        <div class="cit-txt">„Lutao sam usamljen kao oblak što lebdi visoko nad dolinama i brdima.”</div>
        <div class="cit-use"><b>Kada koristiti</b> manifest engleskog romantizma — <em>pojedinac u prirodi kao izvor umjetničkog nadahnuća</em>. Poznate „Daffodils” — žute sunovrate koje Wordsworth vidi u lugu. <b>Priroda kao ogledalo duše</b> — centralni romantički motiv.</div>
      </div>

      <div class="cit-card" data-cat="engl" data-cit-id="h06c17" data-diff="basic" data-tez="">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">ENG. ROM.</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Keats</span>
          <span class="cit-src-work">Oda grčkoj vazi (1819.)</span>
        </div>
        <div class="cit-txt">„Ljepota je istina, istina ljepota.”</div>
        <div class="cit-use"><b>Kada koristiti</b> Keatsova filozofska formula — <em>estetika kao najviši oblik spoznaje</em>. Romantizam prije svega <b>estetska revolucija</b>. Keats umire od tuberkuloze s 25 godina — <em>tragični romantički genij</em>. Citat ušao u kulturnu svijest Zapada.</div>
      </div>

      <div class="cit-card" data-cat="engl" data-cit-id="h06c18" data-diff="basic" data-tez="">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">ENG. ROM.</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Coleridge</span>
          <span class="cit-src-work">The Rime of the Ancient Mariner (1798.)</span>
        </div>
        <div class="cit-txt">„Voda, voda svuda — ni kapi za piti.”</div>
        <div class="cit-use"><b>Kada koristiti</b> iz Coleridgeove balade o pomorskom jadu i grijehu. <em>Natprirodno + morska avantura + moralna simbolika</em>. Iz <b>Lyrical Ballads (1798.)</b> — manifest engleskog romantizma zajedno s Wordsworthom. Citat je ušao u engleski jezik kao formula za obilje bez mogućnosti korištenja.</div>
      </div>

      <div class="cit-card" data-cat="engl" data-cit-id="h06c23" data-diff="advanced" data-tez="">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">ENG. ROM.</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Shelley</span>
          <span class="cit-src-work">Oslobođeni Prometej (1820.)</span>
        </div>
        <div class="cit-txt">„Ljubav je samo svjetlost duše.”</div>
        <div class="cit-use"><b>Kada koristiti</b> Shelley (1792.–1822.) — druga generacija engleskog romantizma, radikalni ateist, utopist. <em>Oslobođeni Prometej</em> — drama u stihovima o mitskom titanu koji krade vatru za čovječanstvo. <b>Utopijski humanizam</b> kao romantička struja. Umro utapanjem 29 god.</div>
      </div>

      <div class="cit-card" data-cat="engl" data-cit-id="h06c24" data-diff="advanced" data-tez="">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">ENG. ROM.</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Blake</span>
          <span class="cit-src-work">Songs of Innocence and of Experience (1794.)</span>
        </div>
        <div class="cit-txt">„Tigar, tigar, blještav plam — u tamnim šumama noći sja.”</div>
        <div class="cit-use"><b>Kada koristiti</b> William Blake (1757.–1827.) — mistik, pjesnik-slikar, prethodnik romantizma. <em>The Tyger</em> — metafora stvaralačke snage (umjetničke i destruktivne). Blake <b>stvara vlastiti mitološki sustav</b> — prethodi Jungovoj psihologiji. Često zaboravljen, ali ključan za razumijevanje romantičke mistike.</div>
      </div>

      <div class="cit-card" data-cat="engl" data-cit-id="h06c34" data-diff="advanced" data-tez="">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">ENG. ROM.</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Wordsworth</span>
          <span class="cit-src-work">Prelude, Knjiga I (1805.)</span>
        </div>
        <div class="cit-txt">„Pjesničar je čovjek koji govori ljudima — jačim osjećajima, širom sviješću, dubljom ljubavlju prema čovjeku.”</div>
        <div class="cit-use"><b>Kada koristiti</b> <em>definicija romantičkog pjesnika</em>. Wordsworth definira novu koncepciju — pjesnik kao <b>privilegirana svijest</b>, ne samo majstor forme. Kontrast s klasicističkim „učenim pjesnikom". Za esej o romantičkoj teoriji.</div>
      </div>


      <!-- RUSKI KONTEKST + META -->
      <div class="cit-card must-know" data-cat="ruski" data-cit-id="h06c25" data-diff="basic" data-tez="4">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">KONTEKST</span>
          <span class="cit-must">Napamet</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Visarion Belinski</span>
          <span class="cit-src-work">o Evgeniju Onjeginu (1844.)</span>
        </div>
        <div class="cit-txt">„Evgenij Onjegin je enciklopedija ruskog života.”</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(4, this)">T4</button></div>
        <div class="cit-use"><b>Kada koristiti</b> Belinski (1811.–1848.) — najvažniji ruski književni kritičar 19. st. <em>Najpoznatija rečenica o Onjeginu</em> — postala je standardna formula. <b>Ključ za Tezu 4</b> (roman u stihovima kao forma). Citat se očekuje u svakom ozbiljnom eseju o Puškinu. Must-know za maturu.</div>
      </div>

      <div class="cit-card" data-cat="ruski" data-cit-id="h06c26" data-diff="advanced" data-tez="2">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">KONTEKST</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Fjodor Dostojevski</span>
          <span class="cit-src-work">Puškinova govor (1880.)</span>
        </div>
        <div class="cit-txt">„Tatjana je apoteoza ruske žene, tipična je do savršenstva… Ona je savršenija od Onjegina.”</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(2, this)">T2</button></div>
        <div class="cit-use"><b>Kada koristiti</b> Dostojevski (autor <b>Zločina i kazne</b> — obvezatno 2026) eksplicitno komentira Puškinove likove u svom slavnom govoru u Moskvi. <em>Ključ za most H06→H07 i Tezu 2.</em> Pokazuje kako je Onjegin utjecao na Dostojevskog — Tatjanin moralni integritet antecedent je Sonji Marmeladove u Zločinu i kazni.</div>
      </div>

      <div class="cit-card" data-cat="ruski" data-cit-id="h06c27" data-diff="basic" data-tez="">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">KONTEKST</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Apollon Grigorjev</span>
          <span class="cit-src-work">o Puškinu (1859.)</span>
        </div>
        <div class="cit-txt">„Puškin je naše sve.”</div>
        <div class="cit-use"><b>Kada koristiti</b> Grigorjevljeva formula postala je najpoznatija fraza ruske kulture o Puškinu. <em>Kontekst: Puškin je za Ruse što je Shakespeare za Engleze, Goethe za Nijemce</em> — utemeljitelj nacionalne književnosti. Citat u eseju o kulturnom značaju Puškina.</div>
      </div>

      <div class="cit-card" data-cat="ruski" data-cit-id="h06c28" data-diff="advanced" data-tez="">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">KONTEKST</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Heinrich Heine</span>
          <span class="cit-src-work">Buch der Lieder (1827.)</span>
        </div>
        <div class="cit-txt">„Romantizam nije ništa drugo nego buđenje srednjovjekovne poezije.”</div>
        <div class="cit-use"><b>Kada koristiti</b> Heine (1797.–1856.) — njemački romantičar koji <em>razotkriva</em> romantizam iznutra. Teorijska definicija — romantizam kao povratak srednjovjekovnim motivima, legendama, balade. Za teoriju epohe (Tab 0 · Sec 03) i esej o romantičkoj estetici.</div>
      </div>

      <div class="cit-card" data-cat="ruski" data-cit-id="h06c29" data-diff="advanced" data-tez="">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">KONTEKST</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Victor Hugo</span>
          <span class="cit-src-work">Predgovor Cromwellu (1827.)</span>
        </div>
        <div class="cit-txt">„Sveto i grotesko, sublimo i apsurd — priroda ih spaja, i kazalište ih mora spajati.”</div>
        <div class="cit-use"><b>Kada koristiti</b> <b>Manifest francuskog romantizma.</b> Hugo (1802.–1885.) u predgovoru drami <em>Cromwell</em> definira estetiku romantizma protiv klasicizma: miješanje žanrova, sublime + grotesque. Za esej o romantičkoj estetici i protiv klasicizma (Tab 0).</div>
      </div>

      <div class="cit-card" data-cat="ruski" data-cit-id="h06c30" data-diff="advanced" data-tez="">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">KONTEKST</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Alphonse de Lamartine</span>
          <span class="cit-src-work">Méditations poétiques (1820.)</span>
        </div>
        <div class="cit-txt">„O vrijeme, zaustavi svoj let! A vi, sretni sati, prekinite svoj tok!”</div>
        <div class="cit-use"><b>Kada koristiti</b> Lamartine (1790.–1869.) — francuski romantičar. <em>Le Lac</em> (Jezero) — arhetipska romantička pjesma o prolaznosti ljubavi i vremena. Usporedba s Goetheovim „Zaustavi se, trenutku" — romantički motiv zaustavljanja savršenog trenutka u prirodi.</div>
      </div>

      <div class="cit-card" data-cat="ruski" data-cit-id="h06c35" data-diff="advanced" data-tez="5">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">KONTEKST</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Nabokov</span>
          <span class="cit-src-work">Predgovor prijevoda Evgenija Onjegina (1964.)</span>
        </div>
        <div class="cit-txt">„Onjegin je u biti prijevod iz Byrona — ali prijevod koji nadilazi original.”</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(5, this)">T5</button></div>
        <div class="cit-use"><b>Kada koristiti</b> Vladimir Nabokov — ruski i američki pisac, najvažniji Puškinov prevoditelj na engleski. <em>Ironijski iskaz</em> — i pohvala i kritika istodobno. Za <b>Tezu 5</b> o Puškinovom odnosu prema Byronu: ne samo imitacija, nego <em>transformacija i prijevazilaženje</em>.</div>
      </div>


    </div>

    <!-- Toast for copy confirmation -->
    <div class="cit-toast" id="cit-toast" role="status" aria-live="polite">📋 Citat kopiran u clipboard</div>

    <div class="nav-row">
      <span class="nb" onclick="sw(2)">← ✍ Esej alat</span>
      <span class="nb primary" onclick="sw(4)">📚 Pojmovnik →</span>
    </div>
  </div>

  <!-- ════════════════════════
       TAB 4 · POJMOVNIK
       ════════════════════════ -->
  <div class="layer" id="l4" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">55 pojmova</span>
      <span class="pill p-go">teorija knjiž.</span>
      <span class="pill p-r">12 bodova</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">📚 Pojmovnik — romantizam + Puškin pojmovi</div>
      <div class="box-int-txt">
        Visoka vjerojatnost pojavljivanja u <strong>12 bodova teorije i povijesti književnosti</strong> te u zadacima čitanja neknjiževnog teksta. Pokrivamo <em>Puškin pojmove</em> (Evgenij Onjegin — deep-dive), <em>pojmovi epohe romantizma</em> (byronizam, weltschmerz, demonski junak) i <em>kontekst 18./19. st.</em> (prosvjetiteljski i romantičarski autori). Pretraži po riječi ili kategoriji.
      </div>
    </div>

    <!-- SEARCH -->
    <div style="margin:16px 0 22px">
      <label for="pojm-search" class="sr-only">Pretraži pojmove</label>
      <input type="text" id="pojm-search" aria-label="Pretraži pojmove" placeholder="🔍 Pretraži pojmove (npr. onjegin, tatjana, oneginski stih, suvišan čovjek, byronizam, weltschmerz...)" style="width:100%;padding:14px 18px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3);color:var(--t1);font-family:var(--serif);font-size:14.5px;outline:none;transition:border-color .2s" onfocus="this.style.borderColor='var(--bd-br)'" onblur="this.style.borderColor='var(--bdm)'">
    </div>

    <!-- CATEGORY FILTERS -->
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:18px" id="pojm-filters">
      <button class="pojm-filter on" data-cat="all">Sve</button>
      <button class="pojm-filter" data-cat="puskin">Puškin · Onjegin</button>
      <button class="pojm-filter" data-cat="stil">Romantizam · Stil</button>
      <button class="pojm-filter" data-cat="epoha">18./19. st.</button>
      <button class="pojm-filter" data-cat="filoz">Filozofija</button>
      <button class="pojm-filter" data-cat="proza">Proza</button>
      <button class="pojm-filter" data-cat="romautor">Rom. autori</button>
      <button class="pojm-filter" data-cat="autori">Autori</button>
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

    <div class="pojm-count" id="pojm-count">55 pojmova prikazano</div>

    <div class="pojm-grid" id="pojm-grid">

      <!-- PUŠKIN / ROMANTIZAM POJMOVI (13) -->
      <div class="pojm" data-cat="puskin" data-kw="onjegin evgenij protagonist suvišan čovjek"><span class="pojm-cat">puskin</span><div class="pojm-word">Evgenij Onjegin</div><div class="pojm-def">Protagonist istoimenog Puškinova djela (1823.–1831.). Mladi peterburški dendi, 26 godina, inteligentan ali besposlen. Zasićen svjetovnim životom, ciničan. Odbija Tatjaninu ljubav, ubija Lenskog u duelu, godinama luta, na kraju pada ničice pred Tatjanom. <b>Arhetip „suvišnog čovjeka”</b> u ruskoj književnosti — uzor za Pečorina (Ljermontov), Oblomova (Gončarov), Raskoljnikova (Dostojevski).</div></div>
      <div class="pojm" data-cat="puskin" data-kw="tatjana larina junakinja pismo kneginja"><span class="pojm-cat">puskin</span><div class="pojm-word">Tatjana Larina</div><div class="pojm-def">Ženska protagonistica Evgenija Onjegina. Starija Larinova, povučena, zaljubljena u francuske sentimentalne romane (Rousseau, Richardson). Piše Onjeginu <em>otvoreno ljubavno pismo</em> — rijedak čin hrabrosti. Nakon hladnog odbijanja sazrijeva. U finalu kao kneginja dostojanstveno odbija Onjegina: „<em>Ja vas ljubim, ali drugomu sam dana</em>”. <b>Moralna vertikala romana</b> — Puškinov „uzvišeni ideal”.</div></div>
      <div class="pojm" data-cat="puskin" data-kw="lenski vladimir pjesnik romantik duel"><span class="pojm-cat">puskin</span><div class="pojm-word">Vladimir Lenski</div><div class="pojm-def">Naivni pjesnik-romantičar, 18 godina, školovan u Göttingenu (njemački idealizam — Kant, Schiller). Zaručen za Olgu Larinu. <em>Antiteza Onjeginu</em> — vjeruje u ljubav, prijateljstvo, ideju. Nakon što Onjegin pleše s Olgom, izaziva ga na dvoboj. <b>Pogiba u duelu u VI. poglavlju.</b> Puškin ironijski pita bi li postao veliki pjesnik — ili „debeli gospodin s podagrom”.</div></div>
      <div class="pojm" data-cat="puskin" data-kw="olga larina mladja sestra povrsna"><span class="pojm-cat">puskin</span><div class="pojm-word">Olga Larina</div><div class="pojm-def">Mlađa Larinova, Lenskova zaručnica. <em>Vesela, simpatična, površna</em> — antiteza Tatjani. Ne razumije težinu duela. Nakon Lenskove smrti <b>brzo se udaje za husara</b>. Puškin je prikazuje blago ironično — „normalna” djevojka, bez Tatjanine dubine. Služi kao katalizator duela (Onjegin s njom pleše iz osvete Lenskom).</div></div>
      <div class="pojm" data-cat="puskin" data-kw="oneginski stih 14 stihova jampski tetrametar"><span class="pojm-cat">puskin</span><div class="pojm-word">Oneginski stih</div><div class="pojm-def">Specifična strofa koju Puškin izmišlja za Evgenija Onjegina. <em>14 stihova u jampskom tetrametru</em> (4 jampske stope). Rimovni uzorak: <b>AbAbCCddEffEgg</b> (3 kvartine različitog rimovanja + završni distih). Izmjena muških (malo slovo) i ženskih rima (veliko slovo). <b>Jedinstvena forma u svjetskoj književnosti.</b> 389 strofa čini cijeli roman.</div></div>
      <div class="pojm" data-cat="puskin" data-kw="suvišan čovjek tip lik ruska književnost"><span class="pojm-cat">puskin</span><div class="pojm-word">Suvišan čovjek</div><div class="pojm-def">Tip lika u ruskoj književnosti 19. st. — <em>talentiran, obrazovan plemić koji nema svrhu u društvu</em>. Puškinov Onjegin je prvi. Slijede: Pečorin (Ljermontov, <em>Heroj našeg vremena</em>, 1840.), Rudin (Turgenjev), Oblomov (Gončarov), Raskoljnikov (Dostojevski — <b>obvezatno 2026</b>). Karakteristike: dosada, cinizam, neprilagođenost, odsustvo samokritičnosti. <b>Centralni pojam ruske književnosti.</b></div></div>
      <div class="pojm" data-cat="puskin" data-kw="roman u stihovima forma hibridna"><span class="pojm-cat">puskin</span><div class="pojm-word">Roman u stihovima</div><div class="pojm-def">Hibridna književna forma — <em>ni ep, ni roman, ni zbirka poezije</em>. Puškinov <em>Evgenij Onjegin</em> (1823.–1831.) je prvi. Spaja <b>epsku narativnost</b> (radnja, likovi), <b>lirsku subjektivnost</b> (Puškin kao pripovjedač) i <b>dramsku neposrednost</b> (dijalozi). Ima 8 poglavlja, 389 oneginskih strofa. Belinski: „<em>enciklopedija ruskog života</em>”.</div></div>
      <div class="pojm" data-cat="puskin" data-kw="byron byronizam engleski pjesnik utjecaj"><span class="pojm-cat">puskin</span><div class="pojm-word">Byronizam</div><div class="pojm-def">Utjecaj Byrona i njegovih heroja (Childe Harold, Don Juan, Manfred) na europsku književnost 19. st. <em>Byronski heroj</em> — melankoličan, ponosan, proganjani, moralno ambivalentan, usamljeni, prezrivo-superiorni. <b>Onjegin je puškinski byronski heroj</b> — Onjegin čak nosi portret Byrona u sobi. Puškin i njegovu pozu istovremeno imitira i kritizira (Tatjana otkriva da je „parodija”).</div></div>
      <div class="pojm" data-cat="puskin" data-kw="demonski junak romantik manfred faust"><span class="pojm-cat">puskin</span><div class="pojm-word">Demonski junak</div><div class="pojm-def">Tip romantičkog heroja koji <em>komunicira s onostranim</em> ili <em>djeluje izvan moralnih konvencija</em>. Prethodnici: Miltonov Sotona (17. st.). Romantički primjeri: Byronov Manfred, Goetheov Faust, Ljermontovljev Demon, Puškinov Onjegin (po inverziji — „demon dosade”). <b>Jedna od centralnih tipova romantizma</b> uz byronskog heroja.</div></div>
      <div class="pojm" data-cat="puskin" data-kw="weltschmerz svjetska bol romantizam"><span class="pojm-cat">puskin</span><div class="pojm-word">Weltschmerz</div><div class="pojm-def">Njemački pojam — <em>„svjetska bol”</em>. Osjećaj da svijet ne može zadovoljiti duboke čežnje pojedinca. Melankolija pred nesavršenošću stvarnosti. Nastaje u predromantizmu (<em>Werther</em> je prvi primjer, H05), <b>postaje centralni pojam romantizma</b>. Byron, Puškin, Leopardi, Heine. Ruski ekvivalent: „splin”, „ruska dosada” kod Puškina.</div></div>
      <div class="pojm" data-cat="puskin" data-kw="dvoboj duel ponos konvencija zareckij"><span class="pojm-cat">puskin</span><div class="pojm-word">Dvoboj (duel)</div><div class="pojm-def">Ritualizirani borba dvojice radi časti, uobičajen u ruskom i europskom plemstvu 18./19. st. Proveden po strogim pravilima (pištolji, sekundanti, odmjereni koraci). U <em>Evgeniju Onjeginu</em>: Onjegin ubija Lenskog u VI. poglavlju — Zareckij (profesionalni dueler) ne dopušta odustajanje. <b>Tragična ironija:</b> Puškin će i sam poginuti u duelu 1837. s francuskim časnikom Dantesom.</div></div>
      <div class="pojm" data-cat="puskin" data-kw="sankt peterburg prijestolnica rusko društvo"><span class="pojm-cat">puskin</span><div class="pojm-word">Sankt-Peterburg</div><div class="pojm-def">Ruska carska prijestolnica (1703.–1918.). Osnovao Petar Veliki. U <em>Evgeniju Onjeginu</em>: <b>prostor visokog društva, balova, salonske dosade</b>. Onjegin u SPB-u kao dendi — zasićen. U finalu (VIII. poglavlje) ponovo u SPB-u — Tatjana kao kneginja. Simbolizuje <em>umjetni, europski Rus</em> nasuprot „pravoj” Rusiji (ruskog sela).</div></div>
      <div class="pojm" data-cat="puskin" data-kw="rusko selo imanje priroda tatjana"><span class="pojm-cat">puskin</span><div class="pojm-word">Rusko selo (imanje)</div><div class="pojm-def">Provincijski prostor u <em>Evgeniju Onjeginu</em>. Onjegin nasljeđuje imanje od strica (I. pogl.) i dolazi u selo. <b>Tu su glavni događaji</b> — prijateljstvo s Lenskim (II.), Tatjanino pismo (III.), odbijanje (IV.), imendan (V.), duel (VI.), Tatjana u napuštenoj kući (VII.). Puškin prikazuje selo kao <em>izvor ruskog identiteta</em> — Tatjana kao autentična „ruska duša” dolazi iz sela.</div></div>

      <div class="pojm" data-cat="epoha" data-kw="prosvjetiteljstvo 18 stoljece razum"><span class="pojm-cat">epoha</span><div class="pojm-word">Prosvjetiteljstvo</div><div class="pojm-def">Intelektualno razdoblje 18. st. (fr. <em>Les Lumières</em>, eng. <em>The Enlightenment</em>, njem. <em>Aufklärung</em>). Razum kao mjerilo svega, kritika religije i vlasti, Enciklopedija kao središnji projekt. Završava Francuskom revolucijom 1789.</div></div>
      <div class="pojm" data-cat="epoha" data-kw="le siecle des lumieres veliko stoljece"><span class="pojm-cat">epoha</span><div class="pojm-word">Le Siècle des Lumières</div><div class="pojm-def">„Stoljeće svjetla” — francuski naziv za 18. st. Središte prosvjetiteljstva. Pariz kao salonska prijestolnica. Voltaire, Rousseau, Diderot, Montesquieu.</div></div>
      <div class="pojm" data-cat="epoha" data-kw="enciklopedija diderot dalembert 1751"><span class="pojm-cat">epoha</span><div class="pojm-word">Enciklopedija</div><div class="pojm-def"><em>Encyclopédie, ou dictionnaire raisonné</em> (1751.–1772.). 17 tomova teksta + 11 tomova ilustracija. Urednici Diderot i d'Alembert. 140 suradnika. Manifest prosvjetiteljstva, najveći izdavački projekt 18. st.</div></div>
      <div class="pojm" data-cat="epoha" data-kw="lisabonski potres 1755 povod candide"><span class="pojm-cat">epoha</span><div class="pojm-word">Lisabonski potres</div><div class="pojm-def">1. studenog 1755. — razara Lisabon, ubija 30 000–50 000 ljudi na Svetkovinu svih svetih. Kriza za teodiceju i Leibnizov optimizam. Neposredni povod <em>Candidu</em>.</div></div>
      <div class="pojm" data-cat="epoha" data-kw="salon pariz intelektualni krug"><span class="pojm-cat">epoha</span><div class="pojm-word">Salon</div><div class="pojm-def">Pariški intelektualni krug 18. st. — kuće plemkinja gdje se okupljaju filozofi, pisci, znanstvenici. Madame Geoffrin, Madame du Deffand. Središte prosvjetiteljske razmjene ideja.</div></div>
      <div class="pojm" data-cat="epoha" data-kw="prosvijeceni apsolutizam fridrih josif"><span class="pojm-cat">epoha</span><div class="pojm-word">Prosvijećeni apsolutizam</div><div class="pojm-def">Politički program — vladar apsolutne vlasti koji primjenjuje prosvjetiteljske reforme. Primjeri: Fridrih II. u Prusiji (štiti Voltairea), Josip II. u Austriji (<em>jozefinizam</em>), Katarina II. u Rusiji.</div></div>
      <div class="pojm" data-cat="epoha" data-kw="francuska revolucija 1789 pad bastille"><span class="pojm-cat">epoha</span><div class="pojm-word">Francuska revolucija</div><div class="pojm-def">1789. — pad Bastille (14. srpnja), <em>Deklaracija o pravima čovjeka i građanina</em>. Politička realizacija prosvjetiteljskih ideja. Rousseau, Voltaire i Montesquieu su „intelektualni očevi” revolucije.</div></div>

      <div class="pojm" data-cat="filoz" data-kw="racionalizam descartes razum"><span class="pojm-cat">filoz</span><div class="pojm-word">Racionalizam</div><div class="pojm-def">Filozofski pravac — razum je glavni izvor spoznaje. Začetnik: Descartes („<em>Cogito, ergo sum</em>” / „Mislim, dakle jesam”). Leibniz, Spinoza. Utjecaj na francusko prosvjetiteljstvo.</div></div>
      <div class="pojm" data-cat="filoz" data-kw="empirizam locke iskustvo tabula rasa"><span class="pojm-cat">filoz</span><div class="pojm-word">Empirizam</div><div class="pojm-def">Filozofski pravac — iskustvo je glavni izvor spoznaje. Začetnik: John Locke (<em>Esej o ljudskom razumijevanju</em>, 1689.). Razum je <em>tabula rasa</em> koju popunjuju osjetila. Utjecaj na englesko prosvjetiteljstvo.</div></div>
      <div class="pojm" data-cat="filoz" data-kw="deizam bog stvaratelj bez dogme"><span class="pojm-cat">filoz</span><div class="pojm-word">Deizam</div><div class="pojm-def">Vjerovanje u Boga-stvaratelja, ali bez crkvene dogme, objavljenja, sakramenata. Bog je „pokrenuo” svijet i ostavio ga djelovati po prirodnim zakonima. Voltaire je deist. Razlika od ateizma.</div></div>
      <div class="pojm" data-cat="filoz" data-kw="teodiceja leibniz zlo bog problem"><span class="pojm-cat">filoz</span><div class="pojm-word">Teodiceja</div><div class="pojm-def">Filozofska disciplina koja pokušava opravdati Božju dobrotu unatoč postojanju zla. Leibnizova <em>Teodiceja</em> (1710.) tvrdi da je ovaj svijet „najbolji od svih mogućih”. Voltaire u Candidu ruši taj argument.</div></div>
      <div class="pojm" data-cat="filoz" data-kw="drustveni ugovor rousseau volja"><span class="pojm-cat">filoz</span><div class="pojm-word">Društveni ugovor</div><div class="pojm-def">Rousseauov koncept (1762.): ljudi se slobodno udružuju i prenose vlast na zajednicu. Legitimacija države. <em>„Čovjek je rođen slobodan, a posvuda je u okovima.”</em></div></div>
      <div class="pojm" data-cat="filoz" data-kw="opca volja rousseau zajednica dobro"><span class="pojm-cat">filoz</span><div class="pojm-word">Opća volja</div><div class="pojm-def">Rousseauov termin (<em>volonté générale</em>) — volja zajednice usmjerena prema općem dobru, različita od pukog zbroja pojedinačnih volja. Temelj moderne demokracije — i kontroverzno: temelj totalitarizma (Robespierre).</div></div>
      <div class="pojm" data-cat="filoz" data-kw="razdvajanje vlasti montesquieu zakonodavna"><span class="pojm-cat">filoz</span><div class="pojm-word">Razdvajanje vlasti</div><div class="pojm-def">Montesquieuova teorija (<em>O duhu zakona</em>, 1748.): zakonodavna, izvršna i sudska vlast moraju biti razdvojene da se spriječi tiranija. Preuzeto u američki Ustav (1787.), francuski i sve moderne demokracije.</div></div>
      <div class="pojm" data-cat="filoz" data-kw="sapere aude kant razum hrabrosti"><span class="pojm-cat">filoz</span><div class="pojm-word">Sapere aude!</div><div class="pojm-def">Latinska parola iz Horacija — „Usudi se znati!” / „Imaj hrabrosti koristiti svoj razum!” Kant ju 1784. koristi kao definiciju prosvjetiteljstva. Simbol intelektualne autonomije.</div></div>

      <div class="pojm" data-cat="proza" data-kw="filozofski roman voltaire candide"><span class="pojm-cat">proza</span><div class="pojm-word">Filozofski roman</div><div class="pojm-def">Nova forma prosvjetiteljstva — roman u kojem likovi i radnja <em>ilustriraju filozofsku tezu</em>. Likovi su tipovi-ideje, ne psihološki portreti. Candide je arhetipski primjer. Preteča Diderotova <em>Jacquesa fatalista</em>.</div></div>
      <div class="pojm" data-cat="proza" data-kw="epistolarni roman pisma montesquieu"><span class="pojm-cat">proza</span><div class="pojm-word">Epistolarni roman</div><div class="pojm-def">Roman u obliku pisama. Prosvjetiteljstvo ga izmišlja — Montesquieu <em>Perzijska pisma</em> (1721.), Rousseau <em>Nova Heloisa</em> (1761.), Richardson <em>Pamela</em> (1740.). Daje direktan pristup unutarnjem svijetu lika.</div></div>
      <div class="pojm" data-cat="proza" data-kw="autobiografija rousseau ispovijesti"><span class="pojm-cat">proza</span><div class="pojm-word">Moderna autobiografija</div><div class="pojm-def">Rousseau izmišlja s <em>Ispovijestima</em> (1782., posmrtno) — iskren prikaz osobnog života, svih mana i vrlina. Preteča Proustove moderne proze i psihološkog romana.</div></div>
      <div class="pojm" data-cat="proza" data-kw="pikareskni roman lutanje junak"><span class="pojm-cat">proza</span><div class="pojm-word">Pikareskni roman</div><div class="pojm-def">Roman lutanja — junak putuje kroz društvo, opisuje ga kroz svoju nevolju. Španjolska tradicija (<em>Lazarillo de Tormes</em>, 1554.). Candide je prosvjetiteljska adaptacija pikaresknog romana.</div></div>
      <div class="pojm" data-cat="proza" data-kw="satira ismijavanje kritika drustva"><span class="pojm-cat">proza</span><div class="pojm-word">Satira</div><div class="pojm-def">Književni postupak — kritika društva, ideja ili osoba kroz ironijsko ismijavanje. Swift (<em>Gulliver</em>), Voltaire (<em>Candide</em>), Molière. Prosvjetiteljstvo podiže satiru na razinu filozofskog oružja.</div></div>
      <div class="pojm" data-cat="proza" data-kw="ironija voltaire distanca kritika"><span class="pojm-cat">proza</span><div class="pojm-word">Ironija</div><div class="pojm-def">Stilski postupak — reći jedno, misliti drugo. Voltaireov glavni alat. Kad Pangloss za vrijeme potresa kaže „<em>sve je u najboljem redu</em>”, Voltaire se ne slaže — ironija ruši tezu sama od sebe.</div></div>
      <div class="pojm" data-cat="proza" data-kw="utopija eldorado idealno drustvo"><span class="pojm-cat">proza</span><div class="pojm-word">Utopija</div><div class="pojm-def">Fiktivno idealno društvo. Thomas More (<em>Utopia</em>, 1516.) izmišlja pojam. U prosvjetiteljstvu: Eldorado u Candidu (pogl. 17–18) — zlato nevrijedno, nema sudova, svi žive u skladu. <em>Mogući bolji svijet.</em></div></div>

      <div class="pojm" data-cat="romautor" data-kw="byron george gordon engleski romantik"><span class="pojm-cat">rom. autori</span><div class="pojm-word">George Gordon, Lord Byron</div><div class="pojm-def">(1788.–1824.) Engleski pjesnik, arhetip romantičarskog genija. Najvažnija djela: <em>Childe Haroldovo hodočašće</em> (1812.–1818.), <em>Don Juan</em> (1819.–1824., nedovršeno), <em>Manfred</em> (1817.), istočnjačke poeme. <em>Byronski heroj</em> — melankoličan, proganjani, moralno ambivalentan. <b>Umire 1824. u Grčkoj</b> boreći se za oslobođenje. Puškinov glavni uzor.</div></div>
      <div class="pojm" data-cat="romautor" data-kw="wordsworth william engleski romantizam priroda"><span class="pojm-cat">rom. autori</span><div class="pojm-word">William Wordsworth</div><div class="pojm-def">(1770.–1850.) Engleski pjesnik, utemeljitelj engleskog romantizma. S Coleridgeom pisac <em>Lyrical Ballads</em> (1798.) — manifest pokreta. Poznate pjesme: <em>Tintern Abbey</em>, <em>I Wandered Lonely as a Cloud</em> („Daffodils”), <em>The Prelude</em>. Tema: <b>priroda kao ogledalo duše</b>, sjećanja iz djetinjstva. Umro kao poet laureate.</div></div>
      <div class="pojm" data-cat="romautor" data-kw="coleridge samuel taylor lyrical ballads natprirodno"><span class="pojm-cat">rom. autori</span><div class="pojm-word">Samuel Taylor Coleridge</div><div class="pojm-def">(1772.–1834.) Engleski pjesnik, filozof, Wordsworthov partner u <em>Lyrical Ballads</em> (1798.). Specijaliziran za <b>natprirodno i imaginaciju</b>: <em>The Rime of the Ancient Mariner</em>, <em>Kubla Khan</em> (napisana u opijumskoj viziji), <em>Christabel</em>. Predgovor 1817. (<em>Biographia Literaria</em>) — teorija imaginacije. Patio od ovisnosti o laudanumu.</div></div>
      <div class="pojm" data-cat="romautor" data-kw="shelley percy bysshe oslobodjeni prometej radikalni"><span class="pojm-cat">rom. autori</span><div class="pojm-word">Percy Bysshe Shelley</div><div class="pojm-def">(1792.–1822.) Radikalni engleski pjesnik, ateist, politički aktivist. Najvažnija djela: <em>Oslobođeni Prometej</em> (1820.) — drama o mitskom titanu, <em>Ozymandias</em> (sonet o prolaznosti moći), <em>Ode to the West Wind</em>. Muž Mary Shelley (autorica <em>Frankensteina</em>). <b>Utopljen u oluji</b> kod Viareggia s 29 godina — ikona „umjetnika koji umire mlad”.</div></div>
      <div class="pojm" data-cat="romautor" data-kw="keats john oda grckoj vazi nightingale"><span class="pojm-cat">rom. autori</span><div class="pojm-word">John Keats</div><div class="pojm-def">(1795.–1821.) Engleski pjesnik, druga generacija romantizma. <em>Velike ode</em> (1819.): <b>Ode on a Grecian Urn</b> („Ljepota je istina, istina ljepota”), <em>Ode to a Nightingale</em>, <em>To Autumn</em>. <b>Umro od tuberkuloze u Rimu s 25 godina.</b> Epitaf: „<em>Ovdje leži onaj čije je ime pisano u vodi</em>”. Tragični romantički genij par excellence.</div></div>
      <div class="pojm" data-cat="romautor" data-kw="blake william tyger mistik slikar"><span class="pojm-cat">rom. autori</span><div class="pojm-word">William Blake</div><div class="pojm-def">(1757.–1827.) Engleski pjesnik, slikar, mistik — prethodnik romantizma. <em>Songs of Innocence and of Experience</em> (1789./1794.), <em>The Marriage of Heaven and Hell</em>. <b>Tyger! Tyger!</b> — metafora stvaralačke snage. Stvorio vlastiti mitološki sustav (Urizen, Los, Albion) — <em>prethodi Jungovoj psihologiji</em>. Često zaboravljen u svoje vrijeme, otkriven nakon smrti.</div></div>
      <div class="pojm" data-cat="romautor" data-kw="ljermontov mihail pecorin heroj naseg vremena"><span class="pojm-cat">rom. autori</span><div class="pojm-word">Mihail Ljermontov</div><div class="pojm-def">(1814.–1841.) Puškinov neposredni nasljednik u ruskoj književnosti. Najvažniji roman: <b>Heroj našeg vremena</b> (1840.) — protagonist <em>Pečorin</em> je drugi „suvišan čovjek” nakon Onjegina. Poeme: <em>Mciri</em>, <em>Demon</em>. <b>Umro u dvoboju s 26 godina</b> — tragična paralela Puškinu. Bez Ljermontova nema Dostojevskog (obvezatno 2026).</div></div>

      <div class="pojm" data-cat="autori" data-kw="voltaire arouet francuski filozof"><span class="pojm-cat">autori</span><div class="pojm-word">Voltaire</div><div class="pojm-def">François-Marie Arouet (1694.–1778.). Francuski filozof, pisac, povjesničar. Najutjecajnija figura prosvjetiteljstva. Branitelj slobode govora i vjerske tolerancije. Živio u Bastilji, Engleskoj, Prusiji, Švicarskoj.</div></div>
      <div class="pojm" data-cat="autori" data-kw="goethe johann wolfgang nemacki werther faust"><span class="pojm-cat">autori</span><div class="pojm-word">Johann Wolfgang von Goethe</div><div class="pojm-def">(1749.–1832.) Najveći njemački pjesnik svih vremena. <em>Werther</em> (1774.), <em>Götz von Berlichingen</em> (1773.), <em>Ifigenija na Tauridi</em> (1787.), <em>Wilhelm Meister</em> (1796.), <em>Faust I/II</em> (1808./1832.). <b>Tvorac pojma „svjetska književnost”</b>. Razdoblje njegove aktivnosti naziva se „Goetheovo doba”.</div></div>
      <div class="pojm" data-cat="autori" data-kw="rousseau jean jacques drustveni ugovor"><span class="pojm-cat">autori</span><div class="pojm-word">Jean-Jacques Rousseau</div><div class="pojm-def">(1712.–1778.) Švicarsko-francuski filozof, pisac. <em>Društveni ugovor</em> (1762.), <em>Emil</em> (1762.), <em>Ispovijesti</em> (1782.). Preteča romantizma — emocija, priroda, pojedinac. Intelektualni rival Voltairea.</div></div>
      <div class="pojm" data-cat="autori" data-kw="diderot denis enciklopedija urednik"><span class="pojm-cat">autori</span><div class="pojm-word">Denis Diderot</div><div class="pojm-def">(1713.–1784.) Glavni urednik Enciklopedije, 28 godina rada. <em>Ramoova sinovica</em> (~1761.), <em>Jacques fatalist</em> (1796.). Preteča moderne proze. Materijalistički filozof.</div></div>
      <div class="pojm" data-cat="autori" data-kw="montesquieu duh zakona razdvajanje"><span class="pojm-cat">autori</span><div class="pojm-word">Montesquieu</div><div class="pojm-def">Charles-Louis de Secondat, barun de Montesquieu (1689.–1755.). <em>Perzijska pisma</em> (1721.), <em>O duhu zakona</em> (1748.). Pravni i politički teoretičar. Otac moderne konstitucijske teorije.</div></div>
      <div class="pojm" data-cat="autori" data-kw="kant immanuel njemacki filozof razum"><span class="pojm-cat">autori</span><div class="pojm-word">Immanuel Kant</div><div class="pojm-def">(1724.–1804.) Njemački filozof. <em>Kritika čistog uma</em> (1781.), <em>Kritika praktičkog uma</em> (1788.), esej <em>„Što je prosvjetiteljstvo?”</em> (1784.). Zatvara prosvjetiteljsku epohu svojim kritičkim sustavom. Kategorički imperativ.</div></div>
      <div class="pojm" data-cat="autori" data-kw="lessing gotthold nathan mudri"><span class="pojm-cat">autori</span><div class="pojm-word">Gotthold Ephraim Lessing</div><div class="pojm-def">(1729.–1781.) Njemački prosvjetitelj. <em>Nathan Mudri</em> (1779.) — drama o vjerskoj toleranciji. <em>Laokoon</em> (1766.) — estetika. <em>Minna von Barnhelm</em> — komedija.</div></div>
      <div class="pojm" data-cat="autori" data-kw="defoe daniel robinson crusoe"><span class="pojm-cat">autori</span><div class="pojm-word">Daniel Defoe</div><div class="pojm-def">(1660.–1731.) Engleski prosvjetiteljski pisac. <em>Robinson Crusoe</em> (1719.) — prototip modernog engleskog romana. <em>Moll Flanders</em> (1722.) — pikareskni roman s ženskim protagonistom.</div></div>
      <div class="pojm" data-cat="autori" data-kw="swift jonathan gulliver satira"><span class="pojm-cat">autori</span><div class="pojm-word">Jonathan Swift</div><div class="pojm-def">(1667.–1745.) Irsko-engleski satiričar. <em>Gulliverova putovanja</em> (1726.) — satira društva kroz fantastična putovanja. <em>Skromni prijedlog</em> (1729.) — pamflet koji parodira ekonomski racionalizam.</div></div>

      <div class="pojm" data-cat="stil" data-kw="predromantizam sturm drang emocija priroda"><span class="pojm-cat">stil</span><div class="pojm-word">Predromantizam</div><div class="pojm-def">Kraj 18. st. — reakcija protiv hladnog razuma. <em>Osjećaj, priroda, pojedinac</em>. Goetheov <em>Werther</em> (1774.), Sturm und Drang, Rousseauov utjecaj. Preteča romantizma (H06).</div></div>
      <div class="pojm" data-cat="stil" data-kw="sturm und drang oluja nalet pokret nemacki"><span class="pojm-cat">stil</span><div class="pojm-word">Sturm und Drang</div><div class="pojm-def">Njemački književni pokret ~1765.–1785. (<em>„Oluja i nalet”</em>). Reakcija na prosvjetiteljski racionalizam. Ideje: <b>osjećaj iznad razuma, priroda, pojedinac-genij, sloboda stvaranja</b>. Naziv po drami F.M. Klingera (1776.). Kulminacija: Goetheov <em>Werther</em> i Schillerovi <em>Razbojnici</em>.</div></div>
      <div class="pojm" data-cat="stil" data-kw="goetheovo doba njemacka knjizevnost 1770 1832"><span class="pojm-cat">stil</span><div class="pojm-word">Goetheovo doba</div><div class="pojm-def">Razdoblje njemačke književnosti ~1770.–1832. (Goetheove godine aktivnosti). Uključuje Sturm und Drang, Weimarsku klasiku i ranu fazu njemačkog romantizma. <em>Centralni naziv za razdoblje</em> jer je Goethe dominantna figura.</div></div>
      <div class="pojm" data-cat="stil" data-kw="weimarska klasika goethe schiller antika"><span class="pojm-cat">stil</span><div class="pojm-word">Weimarska klasika</div><div class="pojm-def">Faza Goetheovog i Schillerovog stvaralaštva ~1786.–1805. Nakon Sturm und Drang-a, povratak klasičnoj harmoniji, antičkim uzorima, estetici ravnoteže. <em>Ifigenija na Tauridi</em>, <em>Wilhelm Meister</em>, <em>Rimske elegije</em>. Kontrast Wertheru.</div></div>
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
            <div class="fc-cat" id="fc-cat-f">ONJEGIN</div>
            <div class="fc-term" id="fc-term">Evgenij Onjegin</div>
            <div class="fc-hint">Klikni za okretanje ↻</div>
          </div>
          <div class="fc-back">
            <div class="fc-cat" id="fc-cat-b">DEFINICIJA</div>
            <div class="fc-def" id="fc-def">Protagonist Puškinova djela (1823.–1831.). Peterburški dendi, 26 god. Inteligentan, ali besposlen. Zasićen svjetovnim životom, ciničan. Odbija Tatjanu, ubije Lenskog u duelu, na kraju pada ničice pred Tatjanom. Arhetip „suvišnog čovjeka” — uzor za Pečorina, Oblomova, Raskoljnikova.</div>
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
          <a class="pro-gate-btn" href="/pricing?ctx=drill_matching_h06">Otključaj — 9,99€/mj</a>
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
        Format identičan maturi — zadaci višestrukog izbora s 4 odgovora. Pokriva sve dijelove: Puškin i Evgenij Onjegin (likovi, radnja, oneginski stih, suvišan čovjek), romantizam kao epoha (byronizam, weltschmerz, demonski junak), i kontekst (Byron, Goethe Faust, Wordsworth/Coleridge, Ljermontov). Na kraju dobivaš ocjenu + pregled promašenih pitanja.
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
        Označi stavke koje si <em>stvarno</em> usvojio. Ne žuri — ako nešto nisi siguran, vrati se na odgovarajući tab. <strong>Cilj: svih 10 označeno prije prelaska na H07 — Realizam.</strong>
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
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Znam tko je napisao <b>Evgenij Onjegin</b> i kada (Puškin, 1823.–1831., roman u stihovima)</div><span class="cp-hint">Onjegin</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Mogu ispričati <b>radnju u 8 poglavlja</b> (SPB → selo → pismo → odbijanje → san → imendan → duel → finale)</div><span class="cp-hint">Onjegin</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Znam ključne likove — <b>Onjegin, Tatjana, Lenski, Olga</b> — i Puškina kao pripovjedača</div><span class="cp-hint">Onjegin</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Razumijem <b>„suvišnog čovjeka”</b> — zašto je Onjegin arhetip i kako utječe na Dostojevskog (obvezatno 2026)</div><span class="cp-hint">Onjegin</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Znam što je <b>oneginski stih</b> (14-stih AbAbCCddEffEgg, jampski tetrametar) i <b>roman u stihovima</b></div><span class="cp-hint">Pojmovnik</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Razumijem <b>byronizam</b>, <b>demonski junak</b>, <b>weltschmerz</b> kao temeljne pojmove romantizma</div><span class="cp-hint">Pojmovnik</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Imam <b>barem 2 teze</b> za esej o Puškinu (suvišan čovjek, Tatjana vertikala, 2 lica romantizma, roman u stihovima, most prema realizmu)</div><span class="cp-hint">Esej</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Znam <b>3 citata</b> napamet („Ja vas ljubim, ali drugomu sam dana”, „Tatjana, voljena Tatjana”, „Ruska dušom, iako nije znala zašto”)</div><span class="cp-hint">Citatnik</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Prepoznajem <b>ostale romantičare</b> — Byron (Childe Harold, Manfred), Goethe (Faust), Wordsworth/Coleridge (Lyrical Ballads), Ljermontov</div><span class="cp-hint">Teorija</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Kviz <b>prošao s 75%+</b></div><span class="cp-hint">Kviz</span></div>
    </div>
      <div class="pro-gate-overlay">
        <div class="pro-gate-fade"></div>
        <div class="pro-gate-cta">
          <div class="pro-gate-label"><b>Checkpoint tracking</b> kroz sva 28+22 poglavlja · napredak se sprema · graf spremnosti za maturu</div>
          <a class="pro-gate-btn" href="/pricing?ctx=checkpoint_h06">Otključaj — 9,99€/mj</a>
          <div class="pro-gate-meta">Otkaži bilo kad · Free trial 7 dana</div>
        </div>
      </div>
    </div>

    <div class="cp-final" id="cp-final">
      <div class="cp-final-ico">🎉</div>
      <div class="cp-final-title">H06 ZAVRŠENO!</div>
      <div class="cp-final-msg">
        Savladao si europski romantizam. <strong>Puškin — Evgenij Onjegin, byronski heroj, oneginski stih, „suvišan čovjek” — u džepu.</strong> Spreman si za <b>H07 — Realizam</b>, razdoblje u kojem se romantička mašta povlači pred <em>objektivnim promatranjem društva</em>. Balzac (<em>Ljudska komedija</em>), Flaubert (<em>Madame Bovary</em>), Dostojevski (<em>Zločin i kazna</em> — <strong>obvezatno čitanje 2026</strong>, duhovni nasljednik Onjegina) i Tolstoj preuzimaju scenu. Onjeginov „suvišan čovjek” postaje Raskoljnikov.
      </div>
      <div class="cp-actions">
        <button class="fcb primary" onclick="openChapterModal('h07','Realizam','19. st. · ruski i europski realizam','Dostojevski (Zločin i kazna — obvezatno čitanje 2026), Tolstoj, Flaubert (Madame Bovary), Balzac. Raskoljnikov kao nasljednik Onjeginovog „suvišnog čovjeka\\u201D. Deep-dive: Dostojevski.')">H07 · Realizam →</button>
        <button class="fcb" onclick="sw(0)">🔁 Ponovi H06</button>
      </div>

      <!-- PDF / PRINT EXPORT — offline ponavljanje pred ispit -->
      <div class="pdf-export">
        <div class="pdf-export-ico">📄</div>
        <div class="pdf-export-body">
          <div class="pdf-export-ttl">Preuzmi cijelu skriptu kao PDF</div>
          <div class="pdf-export-txt">Sve što si prošao — Teorija, Evgenij Onjegin, Pojmovnik, Kviz — u jednom dokumentu. <strong>Idealno za ponavljanje pred ispit</strong> ili ispis na papir.</div>
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
          <div class="upsell-desc"><strong>Završio si H06 — sada testiraj u stvarnim uvjetima.</strong> Puškin, romantizam, byronizam, oneginski stih i „suvišan čovjek” pojavljuju se u teoriji književnosti i čitanju književnog teksta. Puškinov Onjegin je baza za razumijevanje Dostojevskog (obvezatno 2026). Riješi ih s timerom i automatskim ocjenjivanjem.</div>
        </div>
        <a href="/discere?subject=hrvatski&topic=onjegin&ctx=h06_checkpoint" class="upsell-cta" onclick="track('upsell_click',{ctx:'checkpoint_finale',target:'discere'},'conversion')">Isprobaj →</a>
      </div>
    </div>

    <div class="nav-row" style="margin-top:30px">
      <span class="nb" onclick="sw(6)">← Kviz</span>
      <span class="nb off">H07 (uskoro) →</span>
    </div>
  </div>

  <!-- ══ MODULE FOOTER (v3.6) ══ -->
  <footer class="mod-foot" role="contentinfo">
    <div class="foot-line"><b>Maturiraj.hr</b> · Hrvatski · H06 Romantizam (europski)</div>
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
   HRVATSKI H06 — JS
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
  code: 'h06',
  title: 'Romantizam (europski)'
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
// afterprint event je čišćiji način za cleanup
if(typeof window !== 'undefined'){
  window.addEventListener('afterprint', function(){
    document.body.classList.remove('print-cheat-only');
  });
}

/* ══ MINI-DIJAGNOSTIKA "Mogu li ovo na maturi?" ══
   5 strateški odabranih pitanja koja pokrivaju širok spektar H06 gradiva.
   Cilj: korisnik za 60s zna gdje stoji prije nego krene učiti. */
var DIAG_QUESTIONS = [
  {
    q: "Tko je autor romana u stihovima Evgenij Onjegin?",
    opts: ["Mihail Ljermontov", "Aleksandar Puškin", "Nikolaj Gogolj", "Ivan Turgenjev"],
    correct: 1,
    topic: "Puškin — autor"
  },
  {
    q: "Koja je književna vrsta Evgenija Onjegina?",
    opts: [
      "Epski ep u 10 pjevanja",
      "Roman u stihovima",
      "Tragedija u 5 činova",
      "Epistolarni roman u pismima"
    ],
    correct: 1,
    topic: "Roman u stihovima"
  },
  {
    q: "Kako nazivamo specifičan 14-stih koji Puškin stvara za Evgenija Onjegina?",
    opts: [
      "Jampski pentametar",
      "Petrarkin sonet",
      "Oneginski stih (rima AbAbCCddEffEgg)",
      "Aleksandrinac"
    ],
    correct: 2,
    topic: "Oneginski stih"
  },
  {
    q: 'Što znači pojam „suvišan čovjek” u ruskoj književnosti?',
    opts: [
      "Lik koji umire u prvoj polovici romana",
      "Talentirani plemić koji nema svrhu u društvu — tip: Onjegin",
      "Sporedni lik koji ne utječe na radnju",
      "Sluga koji prati glavnog junaka"
    ],
    correct: 1,
    topic: "Suvišan čovjek"
  },
  {
    q: "Tko je bio glavni inspirativni uzor za mladog Puškina u romantičkoj fazi?",
    opts: [
      "Johann Wolfgang von Goethe",
      "Lord Byron",
      "William Shakespeare",
      "Voltaire"
    ],
    correct: 1,
    topic: "Byron i byronizam"
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
  try{ sessionStorage.setItem('mt.hrv.h06.diag', 'skipped') }catch(e){}
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
  if(qEl) qEl.textContent = q.q;
  if(idxEl) idxEl.textContent = (diagState.idx + 1);
  if(topicEl) topicEl.textContent = q.topic || '—';
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
    msg = '🏆 Već vladaš H06 — bravo!';
    rec = 'Tvoj fokus: <b>esej alat</b> i <b>citatnik</b> za Onjegina. Pređi na simulaciju u <a href="/discere?subject=hrvatski&topic=onjegin&ctx=h06_diag_top" onclick="track(\\'upsell_click\\',{ctx:\\'diag_top_score\\',target:\\'discere\\'},\\'conversion\\')">Discere simulatoru</a> da provjeriš pod uvjetima ispita.';
  } else if(n === 4){
    msg = '🎯 Odlično — solidne osnove.';
    rec = 'Imaš većinu, ali jedna rupica. Preporučujemo: <b>Evgenij Onjegin deep-dive</b> + <b>Pojmovnik</b> kao revizija. Preskoči duga čitanja, idi direktno na <b>Citatnik</b> i <b>Drill</b>.';
  } else if(n === 3){
    msg = '👍 Dobre osnove — treba malo više rada.';
    rec = 'Imaš osnovni pregled, ali ti fali sigurnost u detaljima. Plan: <b>(1)</b> proradi cijelu Teoriju, <b>(2)</b> Evgenij Onjegin deep-dive, <b>(3)</b> Drill flashcards 2× prije Kviza.';
  } else if(n === 2){
    msg = '📚 Tu smo da ti pomognemo — krenimo od početka.';
    rec = 'Ne brini — zato si tu. Idi <b>tab po tab redom</b> (Teorija → Evgenij Onjegin → Esej alat). Ne preskači. Završi s <b>Drillom i Kvizom</b> kao provjera.';
  } else {
    msg = '🌱 Početna točka — sve je pred tobom.';
    rec = 'Romantizam je velika epoha — Puškin, Byron, Goethe (Faust), Wordsworth, Ljermontov. Prati redoslijed tabova, ne žuri. <b>Cilj #1:</b> razumjeti Onjegina — 4 lika, oneginski stih, „suvišnog čovjeka” i 5 ključnih scena (Tab 1, sekcije 03–05). Kad to imaš, sve ostalo dolazi prirodno.';
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
    var s = sessionStorage.getItem('mt.hrv.h06.diag');
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
    tab: lsLoad('mt.hrv.h06.tab', 0)
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
    p_tab_index: lsLoad('mt.hrv.h06.tab', 0),
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
    var raw = localStorage.getItem('mt.hrv.h06.cit_favs');
    CIT_STATE.favs = raw ? JSON.parse(raw) : {};
  } catch(e){ CIT_STATE.favs = {}; }
}

function _citSaveFavs(){
  try {
    localStorage.setItem('mt.hrv.h06.cit_favs', JSON.stringify(CIT_STATE.favs));
  } catch(e){}
}

function _citLoadCopyCount(){
  try {
    var raw = localStorage.getItem('mt.hrv.h06.cit_copy');
    CIT_STATE.copyCount = raw ? JSON.parse(raw) : {};
  } catch(e){ CIT_STATE.copyCount = {}; }
}

function _citSaveCopyCount(){
  try {
    localStorage.setItem('mt.hrv.h06.cit_copy', JSON.stringify(CIT_STATE.copyCount));
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
    btnEl.textContent = '☆';
    btnEl.setAttribute('aria-label','Dodaj u favorite');
    btnEl.setAttribute('title','Dodaj u favorite');
  } else {
    CIT_STATE.favs[id] = true;
    btnEl.classList.add('on');
    btnEl.textContent = '★';
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
    btnEl.textContent = '✓';
    incrementCount();
    setTimeout(function(){
      btnEl.classList.remove('copied');
      btnEl.textContent = '📋';
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
    btn.childNodes[0].nodeValue = (CIT_STATE.favOnly ? '★' : '☆') + ' Favoriti (';
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
    favBtn.childNodes[0].nodeValue = '☆ Favoriti (';
  }
  _citApplyFilters();
  if(typeof track === 'function') track('cit_clear_filters', {}, 'engagement');
}

/* Scroll to specific citat (from pinned/linked reference) */
function citScrollTo(cid){
  var card=document.querySelector('[data-cit-id="'+cid+'"]');
  if(!card) return;
  if(card.classList.contains('cit-hidden')){
    citClearFilters();
  }
  _citItems().forEach(function(el){ el.classList.remove('cit-focus'); });
  card.classList.add('cit-focus');
  card.scrollIntoView({behavior:'smooth',block:'center'});
  setTimeout(function(){ card.classList.remove('cit-focus'); },1300);
  if(typeof track==='function') track('cit_pinned_click',{id:cid},'engagement');
}

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
        favBtn.textContent = '★';
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

/* ══ TABS ══ */
var quizInited=false, drillInited=false;
var VISITED_TABS={};
var QUIZ_PASSED=false; // nakon kviza ≥60%
var _tabStartTime = Date.now();

/* Breadcrumb tab labele (v3.6) */
var TAB_LABELS = ['Teorija','Evgenij Onjegin','Esej alat','Citatnik','Pojmovnik','Drill','Kviz','Checkpoint'];

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
  var prevTab = lsLoad('mt.hrv.h06.tab', null);
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
  lsSave('mt.hrv.h06.tab',i);

  VISITED_TABS[i]=true;
  lsSave('mt.hrv.h06.visited',VISITED_TABS);
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
  lsSave('mt.hrv.h06.prog',p);
}

/* ══ RESTORE BANNER ══ */
function checkRestore(){
  var prog=lsLoad('mt.hrv.h06.prog',null);
  var tab=lsLoad('mt.hrv.h06.tab',null);
  var cp=lsLoad('mt.hrv.h06.cp',null);
  var visited=lsLoad('mt.hrv.h06.visited',null);
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
  var tab=lsLoad('mt.hrv.h06.tab',0);
  var prog=lsLoad('mt.hrv.h06.prog',5);
  var visited=lsLoad('mt.hrv.h06.visited',{});
  VISITED_TABS=visited;
  if(prog) updateProgress(prog);
  updateTabBadges();
  cpLoad();
  if(tab!==null) sw(parseInt(tab));
}
function dismissRestore(){
  document.getElementById('restore-banner').classList.remove('show');
  ['mt.hrv.h06.prog','mt.hrv.h06.tab','mt.hrv.h06.cp','mt.hrv.h06.visited','mt.hrv.h06.quiz_passed'].forEach(function(k){try{localStorage.removeItem(k)}catch(e){}});
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
  {cat:'ONJEGIN',term:'Evgenij Onjegin',def:'Protagonist Puškinova djela (1823.–1831.). Peterburški dendi, 26 god. Inteligentan, ali besposlen. Zasićen, ciničan. Odbija Tatjanu, ubije Lenskog u duelu, na kraju pada pred Tatjanom. Arhetip „suvišnog čovjeka”.'},
  {cat:'ONJEGIN',term:'Tatjana Larina',def:'Puškinov „uzvišeni ideal”. Starija Larinova, povučena, čita sent. romane. Piše Onjeginu otvoreno pismo. Nakon odbijanja sazrijeva. U finalu kao kneginja odbija: „Ja vas ljubim, ali drugomu sam dana”. Moralna vertikala.'},
  {cat:'ONJEGIN',term:'Vladimir Lenski',def:'Naivni pjesnik-romantičar, 18 god. Školovan u Göttingenu (Kant, Schiller). Zaručen za Olgu. Antiteza Onjeginu. Pogiba u duelu u VI. poglavlju — Onjegin puca i ubija ga.'},
  {cat:'ONJEGIN',term:'Olga Larina',def:'Mlađa Larinova, Lenskova zaručnica. Vesela, simpatična, površna. Antiteza Tatjani. Nakon Lenskove smrti brzo se udaje za husara. Služi kao katalizator duela.'},
  {cat:'ONJEGIN',term:'Puškin kao pripovjedač',def:'Sam Puškin kao lik u romanu. Obraća se čitatelju, komentira likove, digresira. „Moj Onjegin”, „voljena Tatjana”. Pripovjedač kao lik — inovacija Puškina.'},
  {cat:'ONJEGIN',term:'Tatjanino pismo',def:'III. poglavlje. Tatjana noću piše Onjeginu strastveno pismo na francuskom. Prva eksplicitna ženska izjava ljubavi u ruskoj književnosti. Puškin interpolira kao lirsku pjesmu.'},
  {cat:'ONJEGIN',term:'Tatjanin san',def:'V. poglavlje. Tatjana sanja zloslutni san — medvjed ju lovi, Onjegin u kolibi demona, ubija Lenskog nožem. Proročki san — nagovještaj duela.'},
  {cat:'ONJEGIN',term:'Duel (VI. poglavlje)',def:'Onjegin i Lenski na šumskom proplanku rano ujutro. Zareckij forsira, nitko ne odustaje. Lenski puca prvi, promašuje. Onjegin puca — Lenski pada. Tragička srednja točka romana.'},
  {cat:'ONJEGIN',term:'„Drugomu sam dana”',def:'Finalni monolog u VIII. poglavlju. Tatjana priznaje da još voli Onjegina, ali: „drugomu sam dana i vjerna ću mu biti zauvijek”. Izlazi. Roman završava.'},
  {cat:'AUTOR',term:'Aleksandar Puškin',def:'(1799.–1837.) Najveći ruski pjesnik. „Naše sve”. Utemeljitelj modernog ruskog jezika. Evgenij Onjegin (1823.–1831.), Kapetanova kći (1836.), Boris Godunov. Pogiba u duelu 1837.'},
  {cat:'POJAM',term:'Suvišan čovjek',def:'Tip u ruskoj književnosti 19. st. — talentiran plemić bez svrhe u društvu. Onjegin je prvi. Slijede Pečorin (Ljermontov), Oblomov, Raskoljnikov (Dostojevski). Centralni pojam.'},
  {cat:'POJAM',term:'Oneginski stih',def:'14-stih u jampskom tetrametru. Rima: AbAbCCddEffEgg (velika = ženska, mala = muška). 3 kvartine + distih. Puškinova jedinstvena formalna inovacija. 389 takvih strofa čini cijeli roman.'},
  {cat:'POJAM',term:'Roman u stihovima',def:'Hibridna književna forma — ni ep, ni roman, ni zbirka. Evgenij Onjegin je prvi. Spaja epsku narativnost, lirsku subjektivnost i dramsku neposrednost. Belinski: „enciklopedija ruskog života”.'},
  {cat:'POJAM',term:'Byronizam',def:'Utjecaj Byrona na europsku knjiž. 19. st. Byronski heroj: melankoličan, ponosan, proganjani, usamljen. Puškinov Onjegin je puškinski byronski heroj — nosi portret Byrona u sobi.'},
  {cat:'POJAM',term:'Demonski junak',def:'Tip romantičkog heroja koji komunicira s onostranim ili djeluje izvan morala. Primjeri: Byronov Manfred, Goetheov Faust, Ljermontovljev Demon, Onjegin („demon dosade”).'},
  {cat:'ROMANTIZAM',term:'Weltschmerz',def:'„Svjetska bol” — osjećaj da svijet ne zadovoljava čežnje pojedinca. Melankolija pred nesavršenošću stvarnosti. Centralni romantički pojam. Rusi = „splin”, „ruska dosada”.'},
  {cat:'ROMANTIZAM',term:'Lord Byron',def:'(1788.–1824.) Engleski pjesnik, arhetip romantičarskog genija. Childe Harold, Don Juan, Manfred. Byronski heroj. Umire u Grčkoj boreći se za oslobođenje.'},
  {cat:'ROMANTIZAM',term:'Goethe — Faust',def:'Goetheovo životno djelo. Faust I (1808.), Faust II (1832., posmrtno). Faust prodaje dušu Mefistofelesu za spoznaju. Kozmička drama. Najvažnije djelo kasne Goetheove faze.'},
  {cat:'ROMANTIZAM',term:'Lyrical Ballads',def:'Wordsworth/Coleridge (1798.). Manifest engleskog romantizma. Wordsworth: priroda. Coleridge: natprirodno (Ancient Mariner). Predgovor 1800.: „poezija je spontani izljev moćnih osjećaja”.'},
  {cat:'ROMANTIZAM',term:'Mihail Ljermontov',def:'(1814.–1841.) Puškinov nasljednik. Heroj našeg vremena (1840.) — Pečorin je drugi „suvišan čovjek”. Umire u duelu s 26 godina (ironija — kao Puškin).'}
];
var fcIdx=0, fcKnown=0, fcUnknown=0, fcOrder=[];

/* ══ DRILL STATE PERSISTENCE (v3.5) ══
   Pamti kartice i progress dok se korisnik mota kroz tabove.
   sessionStorage — resetira se na novi tab/window (svjesno, da ne
   blokira "novi krug" između dana). Za cross-session, switch na lsSave.
═════════════════════════════════════════════ */
var DRILL_SS_KEY = 'mt.hrv.h06.drill';

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
  {l:'Evgenij Onjegin',r:'1823.–1831. · Puškin · roman u stihovima'},
  {l:'Childe Haroldovo hodočašće',r:'1812.–1818. · Byron · poema'},
  {l:'Don Juan',r:'1819.–1824. · Byron · ironijska poema'},
  {l:'Manfred',r:'1817. · Byron · dramska poema'},
  {l:'Faust I',r:'1808. · Goethe · drama'},
  {l:'Faust II',r:'1832. · Goethe · posmrtno'},
  {l:'Lyrical Ballads',r:'1798. · Wordsworth · Coleridge'},
  {l:'Oda grčkoj vazi',r:'1819. · Keats · romantička lirika'},
  {l:'Heroj našeg vremena',r:'1840. · Ljermontov · Pečorin'}
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
  {q:\`Tko je autor romana u stihovima Evgenij Onjegin?\`,opts:[\`Mihail Ljermontov\`,\`Aleksandar Puškin\`,\`Nikolaj Gogolj\`,\`Ivan Turgenjev\`],correct:1,exp:\`Aleksandar Sergejevič Puškin (1799.–1837.) napisao je Evgenija Onjegina između 1823. i 1831. godine. Puškin je utemeljitelj moderne ruske književnosti, poznat kao „naše sve” u ruskoj kulturi. Pogiba u dvoboju 1837. s francuskim časnikom Dantesom.\`},
  {q:\`Koja je književna vrsta Evgenija Onjegina?\`,opts:[\`Epski ep u 10 pjevanja\`,\`Roman u stihovima\`,\`Tragedija u 5 činova\`,\`Epistolarni roman u pismima\`],correct:1,exp:\`Evgenij Onjegin je roman u stihovima — hibridna književna forma koju Puškin izmišlja. Spaja epsku narativnost, lirsku subjektivnost i dramsku neposrednost. 8 poglavlja, 389 oneginskih strofa. Belinski ga naziva „enciklopedijom ruskog života”.\`},
  {q:\`Kako se naziva specifična 14-stihovna strofa u Evgeniju Onjeginu?\`,opts:[\`Jampski pentametar\`,\`Petrarkin sonet\`,\`Oneginski stih (rima AbAbCCddEffEgg)\`,\`Aleksandrinac\`],correct:2,exp:\`Oneginski stih (oneginska strofa) — 14 stihova u jampskom tetrametru s rimovnim uzorkom AbAbCCddEffEgg. 3 kvartine različitog rimovanja + završni distih. Izmjena muških (malo slovo) i ženskih rima (veliko slovo). Jedinstvena forma koju Puškin stvara.\`},
  {q:\`Tko je Tatjana Larina?\`,opts:[\`Onjeginova sestra\`,\`Starija Larinova koja piše Onjeginu ljubavno pismo\`,\`Lenskova majka\`,\`Olgina prijateljica iz djetinjstva\`],correct:1,exp:\`Tatjana Larina je starija od dviju Larinovih sestara. Povučena, maštovita, zaljubljena u francuske sentimentalne romane (Rousseau, Richardson). Piše Onjeginu otvoreno ljubavno pismo — rijedak čin hrabrosti za ženu tog doba. Puškinov „uzvišeni ideal”.\`},
  {q:\`Što Onjegin čini Lenskom u VI. poglavlju?\`,opts:[\`Oženjuje ga za svoju sestru\`,\`Spašava mu život u požaru\`,\`Ubija ga u dvoboju\`,\`Piše mu oproštajno pismo\`],correct:2,exp:\`Onjegin ubija Lenskog u dvoboju (V-VI poglavlje). Povod: Onjegin je iz dosade i osvete Lenskom (koji ga je natjerao doći na Tatjanin imendan) cijelu večer plesao s Lenskovom zaručnicom Olgom. Lenski izaziva na dvoboj. Onjegin puca i ubija prijatelja.\`},
  {q:\`Koja je reakcija Onjegina na Tatjanino pismo?\`,opts:[\`Odmah je zaprosi\`,\`Hladno je odbija u vrtu s moralizirajućim razlozima\`,\`Piše joj jednako strastveno pismo\`,\`Bježi iz sela bez odgovora\`],correct:1,exp:\`Onjegin u IV. poglavlju dolazi Tatjani u vrt i hladno ju odbija: „Nisam stvoren za blaženstvo braka”, „brzo ćete me zaboraviti”. Poslovno, moralizirajući, bez topline. Ironija: u finalu (VIII. poglavlje) Onjegin sam pada ničice pred Tatjanom.\`},
  {q:\`Što Tatjana odgovara Onjeginu u finalnom susretu (VIII. poglavlje)?\`,opts:[\`Prihvaća njegovu ljubav i bježi s njim\`,\`„Ja vas ljubim, ali drugomu sam dana — i vjerna ću mu biti zauvijek”\`,\`Šuti i okreće mu leđa bez riječi\`,\`Ubija ga vlastitom rukom\`],correct:1,exp:\`U VIII. poglavlju Onjegin pada na koljena pred Tatjanom (sada udanom kneginjom). Ona priznaje da ga još voli („Ja vas ljubim, zašto bih lagala?”), ali slijedi moralnu obvezu: „drugomu sam dana i vjerna ću mu biti zauvijek”. Izlazi. Roman završava.\`},
  {q:\`Što znači pojam „suvišan čovjek” u ruskoj književnosti?\`,opts:[\`Lik koji umire u prvoj polovici djela\`,\`Talentiran plemić koji nema svrhu u društvu — tip: Onjegin, Pečorin, Raskoljnikov\`,\`Sporedni lik koji ne utječe na radnju\`,\`Sluga koji prati glavnog junaka\`],correct:1,exp:\`„Suvišan čovjek” (ruski: „lišnij čelovek”) — tip u ruskoj književnosti 19. st. Talentiran, obrazovan plemić bez svrhe u društvu. Onjegin je prvi. Slijede: Pečorin (Ljermontov, 1840.), Oblomov (Gončarov), Raskoljnikov (Dostojevski — obvezatno 2026).\`},
  {q:\`Koji je lik Onjeginov najbolji prijatelj na selu?\`,opts:[\`Zareckij\`,\`Vladimir Lenski\`,\`Fra Lorenzo\`,\`Wilhelm\`],correct:1,exp:\`Vladimir Lenski — mladi pjesnik-romantičar, 18 godina, školovan u Göttingenu (njemački idealizam — Kant, Schiller). Antiteza Onjeginu — vjeruje u ljubav, prijateljstvo, ideju. Zaručen za Olgu Larinu. Unatoč različitostima, Onjegin i Lenski postaju bliski prijatelji.\`},
  {q:\`Koliko poglavlja ima Evgenij Onjegin?\`,opts:[\`4 poglavlja\`,\`6 poglavlja\`,\`8 poglavlja\`,\`12 poglavlja\`],correct:2,exp:\`Evgenij Onjegin ima 8 poglavlja (originalno pisano 9, ali „Onjeginovo putovanje” je izbačeno). 389 onegainskih strofa čini cijeli roman. Puškin ga piše 8 godina (1823.–1831.), a objavljuje ga postupno po poglavljima. Cjelovito izdanje 1833.\`},
  {q:\`Tko je bio glavni inspirativni uzor za mladog Puškina u romantičkoj fazi?\`,opts:[\`Johann Wolfgang von Goethe\`,\`Lord Byron\`,\`William Shakespeare\`,\`Voltaire\`],correct:1,exp:\`Lord Byron (1788.–1824.) — engleski romantičar, arhetip romantičarskog genija. Njegov utjecaj na Puškina (byronizam) je eksplicitan: Onjegin čak nosi portret Byrona u sobi. Puškin piše „Južne poeme” (1821.–1824.) kao puškinski odgovor na Byronovog Childe Harolda.\`},
  {q:\`Koje Puškinovo djelo slijedi nakon Evgenija Onjegina (1836.)?\`,opts:[\`Ruslan i Ljudmila\`,\`Boris Godunov\`,\`Kapetanova kći\`,\`Bahčisarajska fontana\`],correct:2,exp:\`Kapetanova kći (1836.) je Puškinov prvi pravi povijesni roman u prozi. Tema: Pugačovljev ustanak (1773.–1775.). Prelazak iz poezije u prozu — utjecaj Waltera Scotta. Pokazuje Puškinovu evoluciju iz romantizma prema realizmu.\`},
  {q:\`Kako Puškin sam umire?\`,opts:[\`Od tuberkuloze\`,\`U dvoboju s francuskim časnikom Dantesom, 1837.\`,\`Samoubojstvom\`,\`Prirodnom smrću u starosti\`],correct:1,exp:\`Puškin pogiba 10. veljače 1837. u dvoboju s francuskim časnikom Georgesom Dantesom. Dvoboj je branio čast svoje žene Natalije Gončarove, koju je Dantes zavodio. Tragička ironija: Puškin je u Onjeginu 14 godina ranije pisao o Lenskovu duelu — poginuo je sličnim načinom.\`},
  {q:\`Koje je godine napisan Byronov Childe Haroldovo hodočašće?\`,opts:[\`1798.\`,\`1812. (I–II pjevanje)\`,\`1832.\`,\`1848.\`],correct:1,exp:\`Byronovo Childe Haroldovo hodočašće — I i II pjevanje objavljeni 1812., proslavljuju Byrona preko noći. III pjevanje 1816., IV pjevanje 1818. Djelo je centralno za byronizam i služi kao Onjeginov „zrcalni” model.\`},
  {q:\`Koje Goetheovo djelo pripada kasnoj romantičkoj fazi?\`,opts:[\`Patnje mladog Werthera\`,\`Götz von Berlichingen\`,\`Faust (I dio 1808., II dio 1832.)\`,\`Ifigenija na Tauridi\`],correct:2,exp:\`Faust je Goetheovo životno djelo — radio je na njemu 60 godina. Faust I (1808.) i Faust II (1832., posmrtno). Kozmička drama o čovjeku (Faust) koji prodaje dušu Mefistofelesu za spoznaju. Najvažnije djelo kasne Goetheove faze.\`},
  {q:\`Što je Lyrical Ballads (1798.)?\`,opts:[\`Byronova zbirka poezije\`,\`Manifest engleskog romantizma (Wordsworth i Coleridge)\`,\`Keatsova životna djela\`,\`Puškinova zbirka lirike\`],correct:1,exp:\`Lyrical Ballads (1798.) — zajednička zbirka Williama Wordswortha i Samuela Taylora Coleridgea. Manifest engleskog romantizma. U predgovoru 2. izdanju (1800.) Wordsworth definira: „poezija je spontani izljev moćnih osjećaja”. Wordsworth: priroda; Coleridge: natprirodno.\`},
  {q:\`Tko je autor Heroja našeg vremena (1840.)?\`,opts:[\`Aleksandar Puškin\`,\`Mihail Ljermontov\`,\`Nikolaj Gogolj\`,\`Fjodor Dostojevski\`],correct:1,exp:\`Mihail Ljermontov (1814.–1841.) — Puškinov nasljednik u ruskoj književnosti. Heroj našeg vremena (1840.) — njegov glavni roman. Protagonist Pečorin je drugi „suvišan čovjek” nakon Onjegina. Ljermontov također umire u dvoboju s 26 godina — tragična paralela Puškinu.\`},
  {q:\`Što je „byronski heroj”?\`,opts:[\`Uvijek optimističan mladić\`,\`Melankoličan, ponosan, proganjani, moralno ambivalentan lik\`,\`Smiješni sporedni lik\`,\`Lik koji se vraća kući u finalu\`],correct:1,exp:\`Byronski heroj — tip romantičkog heroja iz Byronovih djela (Childe Harold, Manfred, Don Juan). Karakteristike: melankolija, ponos, proganjanost, moralna ambivalentnost, usamljenost, prezir prema društvu. Onjegin je ruska varijanta byronskog heroja.\`},
  {q:\`Koje godine je Puškin oženio Nataliju Gončarovu?\`,opts:[\`1820.\`,\`1825.\`,\`1831.\`,\`1836.\`],correct:2,exp:\`Puškin se oženio Natalijom Gončarovom 1831. godine. Imali su četvero djece. Upravo branjenjem njene časti od francuskog časnika Dantesa Puškin je poginuo u dvoboju 1837. godine, s 38 godina.\`},
  {q:\`Tko je prva velika romantičarska figura europske književnosti?\`,opts:[\`Werther (Goethe, 1774.) kao preteča\`,\`Byron (Childe Harold, 1812.) kao centralna figura\`,\`Wordsworth (Lyrical Ballads, 1798.) kao manifest\`,\`Sve tri — oba odgovora su djelomično točni\`],correct:3,exp:\`Romantizam ima više ishodišta. Preteča: Werther (1774.) — prvi junak s Weltschmerzom. Manifest: Lyrical Ballads (1798.) — Wordsworth i Coleridge. Centralna figura: Byron (Childe Harold 1812.) — byronizam kao globalna moda. Sva tri ishodišta grade europski romantizam.\`}
];
var QUIZ_SHUFFLED=QUIZ.slice();
var qzState={idx:0,score:0,answered:[]};

function renderQuizIntro(){
  var el=document.getElementById('qz-app');
  el.innerHTML=\`
    <div class="qz-start">
      <div class="qz-start-ico">🧠</div>
      <h3>20 pitanja · bez vremena</h3>
      <p>Pitanja pokrivaju cijelo poglavlje: Puškin (Evgenij Onjegin), romantizam kao epoha, byronizam, oneginski stih, suvišan čovjek, te ostali romantičari (Byron, Goethe Faust, Wordsworth, Ljermontov). Na kraju dobivaš ocjenu i objašnjenja.</p>
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
  var url='https://maturiraj.hr/skripte/hrvatski/h06';
  var text='Prošao/la sam kviz iz H06 · Romantizam (europski) na maturiraj.hr — '+score+'/'+QUIZ.length+' ('+pct+'%) 🌹';
  var fb=document.getElementById('qz-share-fb');

  // Try Web Share API (mobile)
  if(navigator.share){
    navigator.share({title:'Maturiraj.hr · H06 Kviz',text:text,url:url})
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
  if(pct>=90){grade='ODLIČAN';msg='Spreman si za Onjegin u teoriji i citatima.';ico='🏆';scoreBand='great'}
  else if(pct>=75){grade='VRLO DOBAR';msg='Solidno poznaješ gradivo. Doradi par tema.';ico='💪';scoreBand='good'}
  else if(pct>=60){grade='DOBAR';msg='Dobra osnova. Ponovi pojmovnik i Onjegin deep-dive.';ico='📚';scoreBand='good'}
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
        <button class="fcb" onclick="sw(1)">← Evgenij Onjegin</button>
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
  if(qzState.score>=QUIZ.length*0.6){QUIZ_PASSED=true;lsSave('mt.hrv.h06.quiz_passed',true)}
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
  lsSave('mt.hrv.h06.cp',states);
}
function cpLoad(){
  var states=lsLoad('mt.hrv.h06.cp',null);
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
  var visited=lsLoad('mt.hrv.h06.visited',null);
  if(visited){VISITED_TABS=visited}
  QUIZ_PASSED=lsLoad('mt.hrv.h06.quiz_passed',false);
  VISITED_TABS[0]=true;
  updateTabBadges();
  recomputeProgress();

  // Breadcrumb: reflect current tab (v3.6)
  var currentTab = lsLoad('mt.hrv.h06.tab', 0);
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
        var curr=parseInt(lsLoad('mt.hrv.h06.tab',0));
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

  if(!lsLoad('mt.hrv.h06.hinted',false)){
    setTimeout(function(){lsSave('mt.hrv.h06.hinted',true)},3000);
  }
});

/* ══ SCROLL PROGRESS BAR (H06 v2 upgrade) ══ */
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
  try { localStorage.removeItem('mt.hrv.h06.cp'); } catch(e){}
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
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{font-size:16px;scroll-behavior:smooth}
body{font-family:var(--font);background:var(--bg);color:var(--t1);min-height:100vh;-webkit-font-smoothing:antialiased;overflow-x:hidden}
a{color:inherit;text-decoration:none}

/* ── ANIMIRANI BG: suptilni subtle kvadrati + glow ── */
body::before{
  content:'';position:fixed;inset:0;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M0 40 L80 40 M40 0 L40 80' stroke='%23DC322F' stroke-width='.25' opacity='.05'/%3E%3Ccircle cx='40' cy='40' r='1.2' fill='%23DC322F' opacity='.08'/%3E%3C/svg%3E");
  background-size:80px 80px;pointer-events:none;z-index:0;
}
body::after{
  content:'';position:fixed;inset:0;
  background:radial-gradient(ellipse 60% 50% at 50% 0%,rgba(220,50,47,.07) 0%,transparent 70%);
  pointer-events:none;z-index:0;
}
.shell,.sidebar,.main{position:relative;z-index:1}
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
  display:none;position:fixed;top:12px;left:12px;z-index:200;
  width:38px;height:38px;background:var(--sur);border:1px solid var(--bdm);
  border-radius:var(--r2);align-items:center;justify-content:center;cursor:pointer;flex-direction:column;gap:4px;
}
.sb-hamburger span{display:block;width:16px;height:1.5px;background:var(--t2);border-radius:1px;transition:all .2s}
.sb-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:150;backdrop-filter:blur(3px)}
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
.sb-item.completed{color:var(--green-l);position:relative}
.sb-item.completed::after{content:'✓';position:absolute;right:14px;font-family:var(--mono);font-size:11px;color:var(--green);opacity:.7}
.sb-item.completed:hover{background:var(--dim-g);border-left-color:var(--green)}
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
.cmp-th-cat{width:140px;color:var(--t3)!important;font-size:9.5px!important;letter-spacing:1.8px!important}
.cmp-th-a{color:var(--red-l)!important;border-bottom-color:var(--red)!important}
.cmp-th-b{color:var(--bronze-l)!important;border-bottom-color:var(--bronze)!important}
.cmp-tbl .cmp-cat{color:var(--t3);font-family:var(--mono);font-size:10.5px;letter-spacing:.5px;text-transform:uppercase;font-weight:700;background:var(--bg);width:140px;white-space:nowrap}
.cmp-tbl td b{color:var(--gold);font-weight:600}
.cmp-tbl td em{color:var(--bronze-l);font-style:italic}
.cmp-tbl tbody tr:last-child td{border-bottom:none}
.cmp-tbl tbody tr:hover{background:var(--card)}
.cmp-conc{background:linear-gradient(135deg,var(--dim-r),rgba(220,50,47,.02))!important;color:var(--t1)!important;font-style:italic;text-align:center;padding:14px 18px!important}
.cmp-conc em{color:var(--red-l)!important;font-weight:600}
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
.foot-feedback{display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap;margin-top:10px!important;padding-top:10px;border-top:1px dashed var(--bd)}
.foot-fb-q{color:var(--t2)}
.foot-fb-btn{padding:5px 11px;background:var(--dim-br);color:var(--bronze-l);border:1px solid var(--bd-br);border-radius:var(--r1);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:.5px;cursor:pointer;transition:all .15s}
.foot-fb-btn:hover{background:var(--hov);color:var(--gold);border-color:var(--bd-go)}
.foot-fb-or{color:var(--t3);opacity:.8}
.foot-fb-mail{color:var(--teal)!important;border-bottom-color:var(--bd-t)!important}
.foot-fb-mail:hover{color:var(--teal)!important}
@media(max-width:560px){
  .foot-feedback{gap:6px;flex-direction:column}
  .foot-fb-or{display:none}
}

/* ══ TABS ══ */
.tabs{display:flex;gap:0;margin-bottom:28px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);padding:3px;width:fit-content;position:relative;max-width:100%;overflow-x:auto;scrollbar-width:none}
.tabs::-webkit-scrollbar{display:none}
.tab{padding:7px 16px;font-size:11px;font-weight:600;color:var(--t2);cursor:pointer;border-radius:5px;transition:all .18s;white-space:nowrap;font-family:var(--mono);position:relative;z-index:1;background:transparent;border:none;line-height:normal}
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
  position:fixed;right:24px;bottom:24px;z-index:90;
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
.modal-backdrop{position:fixed;inset:0;background:rgba(15,6,5,.82);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);z-index:300;display:none;align-items:center;justify-content:center;padding:20px}
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

.svg-tt{position:fixed;z-index:250;max-width:280px;background:var(--card);border:1px solid var(--bd-go);border-radius:var(--r3);padding:14px 16px;box-shadow:0 12px 40px rgba(0,0,0,.6),0 2px 8px rgba(232,201,122,.15);font-family:var(--serif);pointer-events:none;opacity:0;transform:translateY(6px) scale(.96);transition:all .18s cubic-bezier(.4,0,.2,1);visibility:hidden}
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
.yt-play{width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,.95);color:#0F0605;font-size:13px;display:flex;align-items:center;justify-content:center;padding-left:3px;box-shadow:0 3px 10px rgba(0,0,0,.35);position:relative;z-index:2;transition:transform .2s}
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
  .sidebar{display:none;position:fixed;z-index:160;height:100vh;transform:translateX(-100%);transition:transform .25s}
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
    content:"Maturiraj.hr · H06 Romantizam (europski) · 8 tabova · Svrha: priprema za državnu maturu iz Hrvatskog jezika 2025/2026";
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
    content:"Maturiraj.hr · H06 · Romantizam (europski) — pred-ispit ponavljanje";
    display:block!important;visibility:visible!important;
    position:absolute;top:-22pt;left:0;width:100%;
    font-family:sans-serif;font-size:8.5pt;color:#666!important;
    text-align:center;padding-bottom:4pt;border-bottom:1px dashed #999
  }
/* ══════════════════════════════════════════════════
   H06 v2 UPGRADE — ENHANCED VISUAL POLISH
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
  html{scroll-behavior:auto}
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

/* Timeline for Puškin's life */
.puskin-timeline{position:relative;padding:20px 0;margin:18px 0}
.puskin-timeline::before{content:'';position:absolute;left:22px;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,var(--bronze),var(--gold),var(--bronze));opacity:.4}
.pt-event{display:flex;gap:16px;margin-bottom:16px;position:relative}
.pt-date{flex-shrink:0;width:44px;height:44px;border-radius:50%;background:var(--card);border:2px solid var(--bronze);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:9px;font-weight:700;color:var(--bronze);z-index:1;letter-spacing:.5px}
.pt-date.pt-major{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border-color:var(--gold);box-shadow:0 0 16px rgba(232,201,122,.3)}
.pt-body{flex:1;padding:8px 14px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);transition:all .2s}
.pt-body:hover{border-color:var(--bd-br);transform:translateX(3px)}
.pt-title{font-family:var(--display);font-size:13px;font-weight:600;color:var(--bronze-l);margin-bottom:3px}
.pt-desc{font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.55}

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

/* ══ CARD — editorial, mirrors .sc/.pojm ══ */
.cit-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:18px 20px 16px 22px;transition:all .22s cubic-bezier(.4,0,.2,1);position:relative;display:flex;flex-direction:column;overflow:hidden}
.cit-card:hover{border-color:var(--bd-br);transform:translateY(-2px);box-shadow:0 8px 24px rgba(220,50,47,.08)}

/* Subtle category left stripe (integrated, not aggressive) */
.cit-card::before{content:'';position:absolute;left:0;top:14px;bottom:14px;width:2px;background:var(--bronze);opacity:.4;border-radius:0 2px 2px 0;transition:opacity .22s,width .22s}
.cit-card:hover::before{opacity:.9;width:3px}
.cit-card[data-cat="onjegin"]::before{background:var(--red)}
.cit-card[data-cat="byron"]::before{background:var(--gold)}
.cit-card[data-cat="faust"]::before{background:#e0a077}
.cit-card[data-cat="engl"]::before{background:var(--green)}
.cit-card[data-cat="ruski"]::before{background:#c5a1d9}

/* Top meta row: category eye + must-know badge */
.cit-meta{display:flex;align-items:center;gap:6px;margin-bottom:10px;padding-right:68px;flex-wrap:wrap}
.cit-eye{font-family:var(--mono);font-size:8px;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3);padding:2px 7px;background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r1);font-weight:700}
.cit-card[data-cat="onjegin"] .cit-eye{color:var(--red-l);background:var(--dim-r);border-color:var(--bd-r)}
.cit-card[data-cat="byron"] .cit-eye{color:var(--gold);background:var(--dim-go);border-color:var(--bd-go)}
.cit-card[data-cat="faust"] .cit-eye{color:#e0a077;background:rgba(224,160,119,.12);border-color:rgba(224,160,119,.25)}
.cit-card[data-cat="engl"] .cit-eye{color:var(--green-l);background:var(--dim-g);border-color:var(--bd-g)}
.cit-card[data-cat="ruski"] .cit-eye{color:#c5a1d9;background:rgba(197,161,217,.12);border-color:rgba(197,161,217,.25)}

.cit-must{font-family:var(--mono);font-size:8px;letter-spacing:1.5px;text-transform:uppercase;color:var(--gold);padding:2px 7px;background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r1);font-weight:700;display:inline-flex;align-items:center;gap:3px;box-shadow:0 0 10px rgba(232,201,122,.12)}
.cit-must::before{content:'★';font-size:9px}

.cit-diff{font-family:var(--mono);font-size:8px;letter-spacing:1.5px;text-transform:uppercase;padding:2px 7px;background:transparent;border:1px solid var(--bdm);border-radius:var(--r1);font-weight:700;color:var(--t3)}
.cit-diff.adv{color:var(--bronze-l);border-color:var(--bd-br);background:var(--dim-br)}

/* Source: author + work */
.cit-src{margin-bottom:4px}
.cit-src-author{font-family:var(--display);font-size:13.5px;font-weight:700;color:var(--bronze-l);letter-spacing:.4px;line-height:1.3;display:block}
.cit-src-work{display:block;font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.7px;color:var(--t3);margin-top:3px;line-height:1.5;text-transform:uppercase;opacity:.85}

/* Quote text — THE HERO ELEMENT */
.cit-txt{font-family:'EB Garamond',Georgia,serif;font-size:16px;font-weight:400;font-style:italic;color:var(--t1);line-height:1.55;margin:12px 0 14px;padding:0;letter-spacing:.15px;position:relative}

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
      }
    

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
   HRVATSKI H06 — JS
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
  code: 'h06',
  title: 'Romantizam (europski)'
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
// afterprint event je čišćiji način za cleanup
if(typeof window !== 'undefined'){
  window.addEventListener('afterprint', function(){
    document.body.classList.remove('print-cheat-only');
  });
}

/* ══ MINI-DIJAGNOSTIKA "Mogu li ovo na maturi?" ══
   5 strateški odabranih pitanja koja pokrivaju širok spektar H06 gradiva.
   Cilj: korisnik za 60s zna gdje stoji prije nego krene učiti. */
var DIAG_QUESTIONS = [
  {
    q: "Tko je autor romana u stihovima Evgenij Onjegin?",
    opts: ["Mihail Ljermontov", "Aleksandar Puškin", "Nikolaj Gogolj", "Ivan Turgenjev"],
    correct: 1,
    topic: "Puškin — autor"
  },
  {
    q: "Koja je književna vrsta Evgenija Onjegina?",
    opts: [
      "Epski ep u 10 pjevanja",
      "Roman u stihovima",
      "Tragedija u 5 činova",
      "Epistolarni roman u pismima"
    ],
    correct: 1,
    topic: "Roman u stihovima"
  },
  {
    q: "Kako nazivamo specifičan 14-stih koji Puškin stvara za Evgenija Onjegina?",
    opts: [
      "Jampski pentametar",
      "Petrarkin sonet",
      "Oneginski stih (rima AbAbCCddEffEgg)",
      "Aleksandrinac"
    ],
    correct: 2,
    topic: "Oneginski stih"
  },
  {
    q: 'Što znači pojam „suvišan čovjek” u ruskoj književnosti?',
    opts: [
      "Lik koji umire u prvoj polovici romana",
      "Talentirani plemić koji nema svrhu u društvu — tip: Onjegin",
      "Sporedni lik koji ne utječe na radnju",
      "Sluga koji prati glavnog junaka"
    ],
    correct: 1,
    topic: "Suvišan čovjek"
  },
  {
    q: "Tko je bio glavni inspirativni uzor za mladog Puškina u romantičkoj fazi?",
    opts: [
      "Johann Wolfgang von Goethe",
      "Lord Byron",
      "William Shakespeare",
      "Voltaire"
    ],
    correct: 1,
    topic: "Byron i byronizam"
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
  try{ sessionStorage.setItem('mt.hrv.h06.diag', 'skipped') }catch(e){}
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
  if(qEl) qEl.textContent = q.q;
  if(idxEl) idxEl.textContent = (diagState.idx + 1);
  if(topicEl) topicEl.textContent = q.topic || '—';
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
    msg = '🏆 Već vladaš H06 — bravo!';
    rec = 'Tvoj fokus: <b>esej alat</b> i <b>citatnik</b> za Onjegina. Pređi na simulaciju u <a href="/discere?subject=hrvatski&topic=onjegin&ctx=h06_diag_top" onclick="track(\\'upsell_click\\',{ctx:\\'diag_top_score\\',target:\\'discere\\'},\\'conversion\\')">Discere simulatoru</a> da provjeriš pod uvjetima ispita.';
  } else if(n === 4){
    msg = '🎯 Odlično — solidne osnove.';
    rec = 'Imaš većinu, ali jedna rupica. Preporučujemo: <b>Evgenij Onjegin deep-dive</b> + <b>Pojmovnik</b> kao revizija. Preskoči duga čitanja, idi direktno na <b>Citatnik</b> i <b>Drill</b>.';
  } else if(n === 3){
    msg = '👍 Dobre osnove — treba malo više rada.';
    rec = 'Imaš osnovni pregled, ali ti fali sigurnost u detaljima. Plan: <b>(1)</b> proradi cijelu Teoriju, <b>(2)</b> Evgenij Onjegin deep-dive, <b>(3)</b> Drill flashcards 2× prije Kviza.';
  } else if(n === 2){
    msg = '📚 Tu smo da ti pomognemo — krenimo od početka.';
    rec = 'Ne brini — zato si tu. Idi <b>tab po tab redom</b> (Teorija → Evgenij Onjegin → Esej alat). Ne preskači. Završi s <b>Drillom i Kvizom</b> kao provjera.';
  } else {
    msg = '🌱 Početna točka — sve je pred tobom.';
    rec = 'Romantizam je velika epoha — Puškin, Byron, Goethe (Faust), Wordsworth, Ljermontov. Prati redoslijed tabova, ne žuri. <b>Cilj #1:</b> razumjeti Onjegina — 4 lika, oneginski stih, „suvišnog čovjeka” i 5 ključnih scena (Tab 1, sekcije 03–05). Kad to imaš, sve ostalo dolazi prirodno.';
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
    var s = sessionStorage.getItem('mt.hrv.h06.diag');
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
    tab: lsLoad('mt.hrv.h06.tab', 0)
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
    p_tab_index: lsLoad('mt.hrv.h06.tab', 0),
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
    var raw = localStorage.getItem('mt.hrv.h06.cit_favs');
    CIT_STATE.favs = raw ? JSON.parse(raw) : {};
  } catch(e){ CIT_STATE.favs = {}; }
}

function _citSaveFavs(){
  try {
    localStorage.setItem('mt.hrv.h06.cit_favs', JSON.stringify(CIT_STATE.favs));
  } catch(e){}
}

function _citLoadCopyCount(){
  try {
    var raw = localStorage.getItem('mt.hrv.h06.cit_copy');
    CIT_STATE.copyCount = raw ? JSON.parse(raw) : {};
  } catch(e){ CIT_STATE.copyCount = {}; }
}

function _citSaveCopyCount(){
  try {
    localStorage.setItem('mt.hrv.h06.cit_copy', JSON.stringify(CIT_STATE.copyCount));
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
    btnEl.textContent = '☆';
    btnEl.setAttribute('aria-label','Dodaj u favorite');
    btnEl.setAttribute('title','Dodaj u favorite');
  } else {
    CIT_STATE.favs[id] = true;
    btnEl.classList.add('on');
    btnEl.textContent = '★';
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
    btnEl.textContent = '✓';
    incrementCount();
    setTimeout(function(){
      btnEl.classList.remove('copied');
      btnEl.textContent = '📋';
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
    btn.childNodes[0].nodeValue = (CIT_STATE.favOnly ? '★' : '☆') + ' Favoriti (';
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
    favBtn.childNodes[0].nodeValue = '☆ Favoriti (';
  }
  _citApplyFilters();
  if(typeof track === 'function') track('cit_clear_filters', {}, 'engagement');
}

/* Scroll to specific citat (from pinned/linked reference) */
function citScrollTo(cid){
  var card=document.querySelector('[data-cit-id="'+cid+'"]');
  if(!card) return;
  if(card.classList.contains('cit-hidden')){
    citClearFilters();
  }
  _citItems().forEach(function(el){ el.classList.remove('cit-focus'); });
  card.classList.add('cit-focus');
  card.scrollIntoView({behavior:'smooth',block:'center'});
  setTimeout(function(){ card.classList.remove('cit-focus'); },1300);
  if(typeof track==='function') track('cit_pinned_click',{id:cid},'engagement');
}

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
        favBtn.textContent = '★';
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

/* ══ TABS ══ */
var quizInited=false, drillInited=false;
var VISITED_TABS={};
var QUIZ_PASSED=false; // nakon kviza ≥60%
var _tabStartTime = Date.now();

/* Breadcrumb tab labele (v3.6) */
var TAB_LABELS = ['Teorija','Evgenij Onjegin','Esej alat','Citatnik','Pojmovnik','Drill','Kviz','Checkpoint'];

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
  var prevTab = lsLoad('mt.hrv.h06.tab', null);
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
  lsSave('mt.hrv.h06.tab',i);

  VISITED_TABS[i]=true;
  lsSave('mt.hrv.h06.visited',VISITED_TABS);
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
  lsSave('mt.hrv.h06.prog',p);
}

/* ══ RESTORE BANNER ══ */
function checkRestore(){
  var prog=lsLoad('mt.hrv.h06.prog',null);
  var tab=lsLoad('mt.hrv.h06.tab',null);
  var cp=lsLoad('mt.hrv.h06.cp',null);
  var visited=lsLoad('mt.hrv.h06.visited',null);
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
  var tab=lsLoad('mt.hrv.h06.tab',0);
  var prog=lsLoad('mt.hrv.h06.prog',5);
  var visited=lsLoad('mt.hrv.h06.visited',{});
  VISITED_TABS=visited;
  if(prog) updateProgress(prog);
  updateTabBadges();
  cpLoad();
  if(tab!==null) sw(parseInt(tab));
}
function dismissRestore(){
  document.getElementById('restore-banner').classList.remove('show');
  ['mt.hrv.h06.prog','mt.hrv.h06.tab','mt.hrv.h06.cp','mt.hrv.h06.visited','mt.hrv.h06.quiz_passed'].forEach(function(k){try{localStorage.removeItem(k)}catch(e){}});
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
  {cat:'ONJEGIN',term:'Evgenij Onjegin',def:'Protagonist Puškinova djela (1823.–1831.). Peterburški dendi, 26 god. Inteligentan, ali besposlen. Zasićen, ciničan. Odbija Tatjanu, ubije Lenskog u duelu, na kraju pada pred Tatjanom. Arhetip „suvišnog čovjeka”.'},
  {cat:'ONJEGIN',term:'Tatjana Larina',def:'Puškinov „uzvišeni ideal”. Starija Larinova, povučena, čita sent. romane. Piše Onjeginu otvoreno pismo. Nakon odbijanja sazrijeva. U finalu kao kneginja odbija: „Ja vas ljubim, ali drugomu sam dana”. Moralna vertikala.'},
  {cat:'ONJEGIN',term:'Vladimir Lenski',def:'Naivni pjesnik-romantičar, 18 god. Školovan u Göttingenu (Kant, Schiller). Zaručen za Olgu. Antiteza Onjeginu. Pogiba u duelu u VI. poglavlju — Onjegin puca i ubija ga.'},
  {cat:'ONJEGIN',term:'Olga Larina',def:'Mlađa Larinova, Lenskova zaručnica. Vesela, simpatična, površna. Antiteza Tatjani. Nakon Lenskove smrti brzo se udaje za husara. Služi kao katalizator duela.'},
  {cat:'ONJEGIN',term:'Puškin kao pripovjedač',def:'Sam Puškin kao lik u romanu. Obraća se čitatelju, komentira likove, digresira. „Moj Onjegin”, „voljena Tatjana”. Pripovjedač kao lik — inovacija Puškina.'},
  {cat:'ONJEGIN',term:'Tatjanino pismo',def:'III. poglavlje. Tatjana noću piše Onjeginu strastveno pismo na francuskom. Prva eksplicitna ženska izjava ljubavi u ruskoj književnosti. Puškin interpolira kao lirsku pjesmu.'},
  {cat:'ONJEGIN',term:'Tatjanin san',def:'V. poglavlje. Tatjana sanja zloslutni san — medvjed ju lovi, Onjegin u kolibi demona, ubija Lenskog nožem. Proročki san — nagovještaj duela.'},
  {cat:'ONJEGIN',term:'Duel (VI. poglavlje)',def:'Onjegin i Lenski na šumskom proplanku rano ujutro. Zareckij forsira, nitko ne odustaje. Lenski puca prvi, promašuje. Onjegin puca — Lenski pada. Tragička srednja točka romana.'},
  {cat:'ONJEGIN',term:'„Drugomu sam dana”',def:'Finalni monolog u VIII. poglavlju. Tatjana priznaje da još voli Onjegina, ali: „drugomu sam dana i vjerna ću mu biti zauvijek”. Izlazi. Roman završava.'},
  {cat:'AUTOR',term:'Aleksandar Puškin',def:'(1799.–1837.) Najveći ruski pjesnik. „Naše sve”. Utemeljitelj modernog ruskog jezika. Evgenij Onjegin (1823.–1831.), Kapetanova kći (1836.), Boris Godunov. Pogiba u duelu 1837.'},
  {cat:'POJAM',term:'Suvišan čovjek',def:'Tip u ruskoj književnosti 19. st. — talentiran plemić bez svrhe u društvu. Onjegin je prvi. Slijede Pečorin (Ljermontov), Oblomov, Raskoljnikov (Dostojevski). Centralni pojam.'},
  {cat:'POJAM',term:'Oneginski stih',def:'14-stih u jampskom tetrametru. Rima: AbAbCCddEffEgg (velika = ženska, mala = muška). 3 kvartine + distih. Puškinova jedinstvena formalna inovacija. 389 takvih strofa čini cijeli roman.'},
  {cat:'POJAM',term:'Roman u stihovima',def:'Hibridna književna forma — ni ep, ni roman, ni zbirka. Evgenij Onjegin je prvi. Spaja epsku narativnost, lirsku subjektivnost i dramsku neposrednost. Belinski: „enciklopedija ruskog života”.'},
  {cat:'POJAM',term:'Byronizam',def:'Utjecaj Byrona na europsku knjiž. 19. st. Byronski heroj: melankoličan, ponosan, proganjani, usamljen. Puškinov Onjegin je puškinski byronski heroj — nosi portret Byrona u sobi.'},
  {cat:'POJAM',term:'Demonski junak',def:'Tip romantičkog heroja koji komunicira s onostranim ili djeluje izvan morala. Primjeri: Byronov Manfred, Goetheov Faust, Ljermontovljev Demon, Onjegin („demon dosade”).'},
  {cat:'ROMANTIZAM',term:'Weltschmerz',def:'„Svjetska bol” — osjećaj da svijet ne zadovoljava čežnje pojedinca. Melankolija pred nesavršenošću stvarnosti. Centralni romantički pojam. Rusi = „splin”, „ruska dosada”.'},
  {cat:'ROMANTIZAM',term:'Lord Byron',def:'(1788.–1824.) Engleski pjesnik, arhetip romantičarskog genija. Childe Harold, Don Juan, Manfred. Byronski heroj. Umire u Grčkoj boreći se za oslobođenje.'},
  {cat:'ROMANTIZAM',term:'Goethe — Faust',def:'Goetheovo životno djelo. Faust I (1808.), Faust II (1832., posmrtno). Faust prodaje dušu Mefistofelesu za spoznaju. Kozmička drama. Najvažnije djelo kasne Goetheove faze.'},
  {cat:'ROMANTIZAM',term:'Lyrical Ballads',def:'Wordsworth/Coleridge (1798.). Manifest engleskog romantizma. Wordsworth: priroda. Coleridge: natprirodno (Ancient Mariner). Predgovor 1800.: „poezija je spontani izljev moćnih osjećaja”.'},
  {cat:'ROMANTIZAM',term:'Mihail Ljermontov',def:'(1814.–1841.) Puškinov nasljednik. Heroj našeg vremena (1840.) — Pečorin je drugi „suvišan čovjek”. Umire u duelu s 26 godina (ironija — kao Puškin).'}
];
var fcIdx=0, fcKnown=0, fcUnknown=0, fcOrder=[];

/* ══ DRILL STATE PERSISTENCE (v3.5) ══
   Pamti kartice i progress dok se korisnik mota kroz tabove.
   sessionStorage — resetira se na novi tab/window (svjesno, da ne
   blokira "novi krug" između dana). Za cross-session, switch na lsSave.
═════════════════════════════════════════════ */
var DRILL_SS_KEY = 'mt.hrv.h06.drill';

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
  {l:'Evgenij Onjegin',r:'1823.–1831. · Puškin · roman u stihovima'},
  {l:'Childe Haroldovo hodočašće',r:'1812.–1818. · Byron · poema'},
  {l:'Don Juan',r:'1819.–1824. · Byron · ironijska poema'},
  {l:'Manfred',r:'1817. · Byron · dramska poema'},
  {l:'Faust I',r:'1808. · Goethe · drama'},
  {l:'Faust II',r:'1832. · Goethe · posmrtno'},
  {l:'Lyrical Ballads',r:'1798. · Wordsworth · Coleridge'},
  {l:'Oda grčkoj vazi',r:'1819. · Keats · romantička lirika'},
  {l:'Heroj našeg vremena',r:'1840. · Ljermontov · Pečorin'}
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
  {q:\`Tko je autor romana u stihovima Evgenij Onjegin?\`,opts:[\`Mihail Ljermontov\`,\`Aleksandar Puškin\`,\`Nikolaj Gogolj\`,\`Ivan Turgenjev\`],correct:1,exp:\`Aleksandar Sergejevič Puškin (1799.–1837.) napisao je Evgenija Onjegina između 1823. i 1831. godine. Puškin je utemeljitelj moderne ruske književnosti, poznat kao „naše sve” u ruskoj kulturi. Pogiba u dvoboju 1837. s francuskim časnikom Dantesom.\`},
  {q:\`Koja je književna vrsta Evgenija Onjegina?\`,opts:[\`Epski ep u 10 pjevanja\`,\`Roman u stihovima\`,\`Tragedija u 5 činova\`,\`Epistolarni roman u pismima\`],correct:1,exp:\`Evgenij Onjegin je roman u stihovima — hibridna književna forma koju Puškin izmišlja. Spaja epsku narativnost, lirsku subjektivnost i dramsku neposrednost. 8 poglavlja, 389 oneginskih strofa. Belinski ga naziva „enciklopedijom ruskog života”.\`},
  {q:\`Kako se naziva specifična 14-stihovna strofa u Evgeniju Onjeginu?\`,opts:[\`Jampski pentametar\`,\`Petrarkin sonet\`,\`Oneginski stih (rima AbAbCCddEffEgg)\`,\`Aleksandrinac\`],correct:2,exp:\`Oneginski stih (oneginska strofa) — 14 stihova u jampskom tetrametru s rimovnim uzorkom AbAbCCddEffEgg. 3 kvartine različitog rimovanja + završni distih. Izmjena muških (malo slovo) i ženskih rima (veliko slovo). Jedinstvena forma koju Puškin stvara.\`},
  {q:\`Tko je Tatjana Larina?\`,opts:[\`Onjeginova sestra\`,\`Starija Larinova koja piše Onjeginu ljubavno pismo\`,\`Lenskova majka\`,\`Olgina prijateljica iz djetinjstva\`],correct:1,exp:\`Tatjana Larina je starija od dviju Larinovih sestara. Povučena, maštovita, zaljubljena u francuske sentimentalne romane (Rousseau, Richardson). Piše Onjeginu otvoreno ljubavno pismo — rijedak čin hrabrosti za ženu tog doba. Puškinov „uzvišeni ideal”.\`},
  {q:\`Što Onjegin čini Lenskom u VI. poglavlju?\`,opts:[\`Oženjuje ga za svoju sestru\`,\`Spašava mu život u požaru\`,\`Ubija ga u dvoboju\`,\`Piše mu oproštajno pismo\`],correct:2,exp:\`Onjegin ubija Lenskog u dvoboju (V-VI poglavlje). Povod: Onjegin je iz dosade i osvete Lenskom (koji ga je natjerao doći na Tatjanin imendan) cijelu večer plesao s Lenskovom zaručnicom Olgom. Lenski izaziva na dvoboj. Onjegin puca i ubija prijatelja.\`},
  {q:\`Koja je reakcija Onjegina na Tatjanino pismo?\`,opts:[\`Odmah je zaprosi\`,\`Hladno je odbija u vrtu s moralizirajućim razlozima\`,\`Piše joj jednako strastveno pismo\`,\`Bježi iz sela bez odgovora\`],correct:1,exp:\`Onjegin u IV. poglavlju dolazi Tatjani u vrt i hladno ju odbija: „Nisam stvoren za blaženstvo braka”, „brzo ćete me zaboraviti”. Poslovno, moralizirajući, bez topline. Ironija: u finalu (VIII. poglavlje) Onjegin sam pada ničice pred Tatjanom.\`},
  {q:\`Što Tatjana odgovara Onjeginu u finalnom susretu (VIII. poglavlje)?\`,opts:[\`Prihvaća njegovu ljubav i bježi s njim\`,\`„Ja vas ljubim, ali drugomu sam dana — i vjerna ću mu biti zauvijek”\`,\`Šuti i okreće mu leđa bez riječi\`,\`Ubija ga vlastitom rukom\`],correct:1,exp:\`U VIII. poglavlju Onjegin pada na koljena pred Tatjanom (sada udanom kneginjom). Ona priznaje da ga još voli („Ja vas ljubim, zašto bih lagala?”), ali slijedi moralnu obvezu: „drugomu sam dana i vjerna ću mu biti zauvijek”. Izlazi. Roman završava.\`},
  {q:\`Što znači pojam „suvišan čovjek” u ruskoj književnosti?\`,opts:[\`Lik koji umire u prvoj polovici djela\`,\`Talentiran plemić koji nema svrhu u društvu — tip: Onjegin, Pečorin, Raskoljnikov\`,\`Sporedni lik koji ne utječe na radnju\`,\`Sluga koji prati glavnog junaka\`],correct:1,exp:\`„Suvišan čovjek” (ruski: „lišnij čelovek”) — tip u ruskoj književnosti 19. st. Talentiran, obrazovan plemić bez svrhe u društvu. Onjegin je prvi. Slijede: Pečorin (Ljermontov, 1840.), Oblomov (Gončarov), Raskoljnikov (Dostojevski — obvezatno 2026).\`},
  {q:\`Koji je lik Onjeginov najbolji prijatelj na selu?\`,opts:[\`Zareckij\`,\`Vladimir Lenski\`,\`Fra Lorenzo\`,\`Wilhelm\`],correct:1,exp:\`Vladimir Lenski — mladi pjesnik-romantičar, 18 godina, školovan u Göttingenu (njemački idealizam — Kant, Schiller). Antiteza Onjeginu — vjeruje u ljubav, prijateljstvo, ideju. Zaručen za Olgu Larinu. Unatoč različitostima, Onjegin i Lenski postaju bliski prijatelji.\`},
  {q:\`Koliko poglavlja ima Evgenij Onjegin?\`,opts:[\`4 poglavlja\`,\`6 poglavlja\`,\`8 poglavlja\`,\`12 poglavlja\`],correct:2,exp:\`Evgenij Onjegin ima 8 poglavlja (originalno pisano 9, ali „Onjeginovo putovanje” je izbačeno). 389 onegainskih strofa čini cijeli roman. Puškin ga piše 8 godina (1823.–1831.), a objavljuje ga postupno po poglavljima. Cjelovito izdanje 1833.\`},
  {q:\`Tko je bio glavni inspirativni uzor za mladog Puškina u romantičkoj fazi?\`,opts:[\`Johann Wolfgang von Goethe\`,\`Lord Byron\`,\`William Shakespeare\`,\`Voltaire\`],correct:1,exp:\`Lord Byron (1788.–1824.) — engleski romantičar, arhetip romantičarskog genija. Njegov utjecaj na Puškina (byronizam) je eksplicitan: Onjegin čak nosi portret Byrona u sobi. Puškin piše „Južne poeme” (1821.–1824.) kao puškinski odgovor na Byronovog Childe Harolda.\`},
  {q:\`Koje Puškinovo djelo slijedi nakon Evgenija Onjegina (1836.)?\`,opts:[\`Ruslan i Ljudmila\`,\`Boris Godunov\`,\`Kapetanova kći\`,\`Bahčisarajska fontana\`],correct:2,exp:\`Kapetanova kći (1836.) je Puškinov prvi pravi povijesni roman u prozi. Tema: Pugačovljev ustanak (1773.–1775.). Prelazak iz poezije u prozu — utjecaj Waltera Scotta. Pokazuje Puškinovu evoluciju iz romantizma prema realizmu.\`},
  {q:\`Kako Puškin sam umire?\`,opts:[\`Od tuberkuloze\`,\`U dvoboju s francuskim časnikom Dantesom, 1837.\`,\`Samoubojstvom\`,\`Prirodnom smrću u starosti\`],correct:1,exp:\`Puškin pogiba 10. veljače 1837. u dvoboju s francuskim časnikom Georgesom Dantesom. Dvoboj je branio čast svoje žene Natalije Gončarove, koju je Dantes zavodio. Tragička ironija: Puškin je u Onjeginu 14 godina ranije pisao o Lenskovu duelu — poginuo je sličnim načinom.\`},
  {q:\`Koje je godine napisan Byronov Childe Haroldovo hodočašće?\`,opts:[\`1798.\`,\`1812. (I–II pjevanje)\`,\`1832.\`,\`1848.\`],correct:1,exp:\`Byronovo Childe Haroldovo hodočašće — I i II pjevanje objavljeni 1812., proslavljuju Byrona preko noći. III pjevanje 1816., IV pjevanje 1818. Djelo je centralno za byronizam i služi kao Onjeginov „zrcalni” model.\`},
  {q:\`Koje Goetheovo djelo pripada kasnoj romantičkoj fazi?\`,opts:[\`Patnje mladog Werthera\`,\`Götz von Berlichingen\`,\`Faust (I dio 1808., II dio 1832.)\`,\`Ifigenija na Tauridi\`],correct:2,exp:\`Faust je Goetheovo životno djelo — radio je na njemu 60 godina. Faust I (1808.) i Faust II (1832., posmrtno). Kozmička drama o čovjeku (Faust) koji prodaje dušu Mefistofelesu za spoznaju. Najvažnije djelo kasne Goetheove faze.\`},
  {q:\`Što je Lyrical Ballads (1798.)?\`,opts:[\`Byronova zbirka poezije\`,\`Manifest engleskog romantizma (Wordsworth i Coleridge)\`,\`Keatsova životna djela\`,\`Puškinova zbirka lirike\`],correct:1,exp:\`Lyrical Ballads (1798.) — zajednička zbirka Williama Wordswortha i Samuela Taylora Coleridgea. Manifest engleskog romantizma. U predgovoru 2. izdanju (1800.) Wordsworth definira: „poezija je spontani izljev moćnih osjećaja”. Wordsworth: priroda; Coleridge: natprirodno.\`},
  {q:\`Tko je autor Heroja našeg vremena (1840.)?\`,opts:[\`Aleksandar Puškin\`,\`Mihail Ljermontov\`,\`Nikolaj Gogolj\`,\`Fjodor Dostojevski\`],correct:1,exp:\`Mihail Ljermontov (1814.–1841.) — Puškinov nasljednik u ruskoj književnosti. Heroj našeg vremena (1840.) — njegov glavni roman. Protagonist Pečorin je drugi „suvišan čovjek” nakon Onjegina. Ljermontov također umire u dvoboju s 26 godina — tragična paralela Puškinu.\`},
  {q:\`Što je „byronski heroj”?\`,opts:[\`Uvijek optimističan mladić\`,\`Melankoličan, ponosan, proganjani, moralno ambivalentan lik\`,\`Smiješni sporedni lik\`,\`Lik koji se vraća kući u finalu\`],correct:1,exp:\`Byronski heroj — tip romantičkog heroja iz Byronovih djela (Childe Harold, Manfred, Don Juan). Karakteristike: melankolija, ponos, proganjanost, moralna ambivalentnost, usamljenost, prezir prema društvu. Onjegin je ruska varijanta byronskog heroja.\`},
  {q:\`Koje godine je Puškin oženio Nataliju Gončarovu?\`,opts:[\`1820.\`,\`1825.\`,\`1831.\`,\`1836.\`],correct:2,exp:\`Puškin se oženio Natalijom Gončarovom 1831. godine. Imali su četvero djece. Upravo branjenjem njene časti od francuskog časnika Dantesa Puškin je poginuo u dvoboju 1837. godine, s 38 godina.\`},
  {q:\`Tko je prva velika romantičarska figura europske književnosti?\`,opts:[\`Werther (Goethe, 1774.) kao preteča\`,\`Byron (Childe Harold, 1812.) kao centralna figura\`,\`Wordsworth (Lyrical Ballads, 1798.) kao manifest\`,\`Sve tri — oba odgovora su djelomično točni\`],correct:3,exp:\`Romantizam ima više ishodišta. Preteča: Werther (1774.) — prvi junak s Weltschmerzom. Manifest: Lyrical Ballads (1798.) — Wordsworth i Coleridge. Centralna figura: Byron (Childe Harold 1812.) — byronizam kao globalna moda. Sva tri ishodišta grade europski romantizam.\`}
];
var QUIZ_SHUFFLED=QUIZ.slice();
var qzState={idx:0,score:0,answered:[]};

function renderQuizIntro(){
  var el=document.getElementById('qz-app');
  el.innerHTML=\`
    <div class="qz-start">
      <div class="qz-start-ico">🧠</div>
      <h3>20 pitanja · bez vremena</h3>
      <p>Pitanja pokrivaju cijelo poglavlje: Puškin (Evgenij Onjegin), romantizam kao epoha, byronizam, oneginski stih, suvišan čovjek, te ostali romantičari (Byron, Goethe Faust, Wordsworth, Ljermontov). Na kraju dobivaš ocjenu i objašnjenja.</p>
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
  var url='https://maturiraj.hr/skripte/hrvatski/h06';
  var text='Prošao/la sam kviz iz H06 · Romantizam (europski) na maturiraj.hr — '+score+'/'+QUIZ.length+' ('+pct+'%) 🌹';
  var fb=document.getElementById('qz-share-fb');

  // Try Web Share API (mobile)
  if(navigator.share){
    navigator.share({title:'Maturiraj.hr · H06 Kviz',text:text,url:url})
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
  if(pct>=90){grade='ODLIČAN';msg='Spreman si za Onjegin u teoriji i citatima.';ico='🏆';scoreBand='great'}
  else if(pct>=75){grade='VRLO DOBAR';msg='Solidno poznaješ gradivo. Doradi par tema.';ico='💪';scoreBand='good'}
  else if(pct>=60){grade='DOBAR';msg='Dobra osnova. Ponovi pojmovnik i Onjegin deep-dive.';ico='📚';scoreBand='good'}
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
        <button class="fcb" onclick="sw(1)">← Evgenij Onjegin</button>
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
  if(qzState.score>=QUIZ.length*0.6){QUIZ_PASSED=true;lsSave('mt.hrv.h06.quiz_passed',true)}
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
  lsSave('mt.hrv.h06.cp',states);
}
function cpLoad(){
  var states=lsLoad('mt.hrv.h06.cp',null);
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
  var visited=lsLoad('mt.hrv.h06.visited',null);
  if(visited){VISITED_TABS=visited}
  QUIZ_PASSED=lsLoad('mt.hrv.h06.quiz_passed',false);
  VISITED_TABS[0]=true;
  updateTabBadges();
  recomputeProgress();

  // Breadcrumb: reflect current tab (v3.6)
  var currentTab = lsLoad('mt.hrv.h06.tab', 0);
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
        var curr=parseInt(lsLoad('mt.hrv.h06.tab',0));
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

  if(!lsLoad('mt.hrv.h06.hinted',false)){
    setTimeout(function(){lsSave('mt.hrv.h06.hinted',true)},3000);
  }
});

/* ══ SCROLL PROGRESS BAR (H06 v2 upgrade) ══ */
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
  try { localStorage.removeItem('mt.hrv.h06.cp'); } catch(e){}
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

export default function H06Chapter() {
  const containerRef = useRef(null);
  const stylesInjectedRef = useRef(false);
  const scriptsExecutedRef = useRef(false);

  useEffect(() => {
    // Inject styles (once per page mount)
    if (!stylesInjectedRef.current && STYLES_CSS) {
      const styleEl = document.createElement('style');
      styleEl.id = `chapter-styles-H06`;
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
        console.error(`[H06] Script execution error:`, err);
      }
    }

    return () => {
      // Cleanup on unmount
      const styleEl = document.getElementById(`chapter-styles-H06`);
      if (styleEl) styleEl.remove();
      stylesInjectedRef.current = false;
      scriptsExecutedRef.current = false;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="chapter-h06"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: BODY_HTML }}
    />
  );
}
export const HRV_POGAVLJE_06 = null
