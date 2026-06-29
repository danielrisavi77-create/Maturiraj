/**
 * ChapterWrapper — shared React component for all 28 Croatian chapters (H01-H28).
 * Replaces the identical 50-line useEffect boilerplate in each poglavlje file.
 *
 * Props:
 *   chapterId  — e.g. "H01" (used for style element ID + error logging)
 *   bodyHtml   — full HTML content string (BODY_HTML from chapter file)
 *   stylesCss  — CSS string to inject into <head> (STYLES_CSS from chapter file)
 *   scriptsJs  — JS string to execute once on mount (SCRIPTS_JS from chapter file)
 */
'use client';

import { useEffect, useRef } from 'react';

// ── Paywall CSS (injected once globally) ──────────────────────────────────────
const PAYWALL_CSS = `.mt-paywall-overlay{position:fixed;inset:0;background:rgba(0,0,0,.88);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);z-index:99999;display:flex;align-items:center;justify-content:center;padding:20px;animation:mt-fade-in .2s ease}@keyframes mt-fade-in{from{opacity:0}to{opacity:1}}.mt-paywall-modal{position:relative;background:#161616;border:1px solid #2a2a2a;border-radius:20px;max-width:920px;width:100%;max-height:90vh;overflow-y:auto;box-shadow:0 24px 100px rgba(0,0,0,.7);padding:36px 32px;animation:mt-slide-up .3s cubic-bezier(.16,1,.3,1)}@keyframes mt-slide-up{from{transform:translateY(24px);opacity:0}to{transform:translateY(0);opacity:1}}.mt-paywall-close{position:absolute;top:16px;right:16px;width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.04);border:1px solid #333;color:#666;font-size:22px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s ease;line-height:1}.mt-paywall-close:hover{background:rgba(255,255,255,.1);color:#fff;border-color:#555}.mt-paywall-header{text-align:center;margin-bottom:32px;padding-bottom:24px;border-bottom:1px solid #252525}.mt-paywall-icon{font-size:52px;margin-bottom:10px;filter:drop-shadow(0 0 16px rgba(75,123,255,.4))}.mt-paywall-title{font-size:24px;font-weight:800;color:#fff;margin-bottom:8px;letter-spacing:-.02em}.mt-paywall-subtitle{font-size:14px;color:#888;line-height:1.6;max-width:520px;margin:0 auto}.mt-paywall-tiers{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:18px;margin-bottom:24px}.mt-paywall-tier{position:relative;padding:26px 24px;background:#1c1c1c;border:1.5px solid #2e2e2e;border-radius:16px;transition:all .2s ease}.mt-paywall-tier:hover{transform:translateY(-3px)}.mt-paywall-tier-standard{border-color:#3d2010}.mt-paywall-tier-standard:hover{box-shadow:0 8px 32px rgba(255,107,43,.15)}.mt-paywall-tier-pro{border-color:#1a2040}.mt-paywall-tier-pro:hover{box-shadow:0 8px 32px rgba(75,123,255,.15)}.mt-paywall-tier-standard.mt-paywall-tier-recommended{border-color:#ff6b2b;background:linear-gradient(160deg,rgba(255,107,43,.08) 0%,#1c1c1c 60%);box-shadow:0 0 0 3px rgba(255,107,43,.12),0 8px 40px rgba(255,107,43,.12)}.mt-paywall-tier-pro.mt-paywall-tier-recommended{border-color:#4b7bff;background:linear-gradient(160deg,rgba(75,123,255,.1) 0%,#1c1c1c 60%);box-shadow:0 0 0 3px rgba(75,123,255,.15),0 8px 40px rgba(75,123,255,.15)}.mt-paywall-badge{position:absolute;top:-11px;left:50%;transform:translateX(-50%);padding:4px 14px;border-radius:99px;font-size:10px;font-weight:800;letter-spacing:1.4px;text-transform:uppercase;white-space:nowrap}.mt-paywall-tier-standard .mt-paywall-badge{background:linear-gradient(90deg,#e55a1f,#ff6b2b);color:#fff;box-shadow:0 2px 12px rgba(255,107,43,.45)}.mt-paywall-tier-pro .mt-paywall-badge{background:linear-gradient(90deg,#3a67e8,#4b7bff);color:#fff;box-shadow:0 2px 12px rgba(75,123,255,.45)}.mt-paywall-tier-name{font-size:20px;font-weight:800;margin-bottom:6px}.mt-paywall-tier-standard .mt-paywall-tier-name{color:#ff6b2b;text-shadow:0 0 20px rgba(255,107,43,.3)}.mt-paywall-tier-pro .mt-paywall-tier-name{color:#4b7bff;text-shadow:0 0 20px rgba(75,123,255,.3)}.mt-paywall-tier-price{font-size:34px;font-weight:800;color:#fff;margin-bottom:16px;line-height:1}.mt-paywall-tier-price span{font-size:14px;color:#555;font-weight:400;margin-left:4px}.mt-paywall-tier-features{list-style:none;margin:0 0 20px;padding:0;font-size:13px;line-height:1;color:#999}.mt-paywall-tier-features li{padding:6px 0;border-bottom:1px solid #222;display:flex;gap:8px;align-items:flex-start}.mt-paywall-tier-features li:last-child{border-bottom:none}.mt-paywall-tier-features li strong{color:#ddd}.mt-paywall-cta{width:100%;padding:13px 20px;border:none;border-radius:11px;font-size:15px;font-weight:700;cursor:pointer;transition:all .18s ease;letter-spacing:.2px}.mt-paywall-tier-standard .mt-paywall-cta{background:linear-gradient(135deg,#e55a1f,#ff6b2b);color:#fff;box-shadow:0 4px 20px rgba(255,107,43,.25)}.mt-paywall-tier-standard .mt-paywall-cta:hover{box-shadow:0 6px 28px rgba(255,107,43,.45);transform:translateY(-1px)}.mt-paywall-tier-pro .mt-paywall-cta{background:linear-gradient(135deg,#3a67e8,#4b7bff);color:#fff;box-shadow:0 4px 20px rgba(75,123,255,.25)}.mt-paywall-tier-pro .mt-paywall-cta:hover{box-shadow:0 6px 28px rgba(75,123,255,.45);transform:translateY(-1px)}.mt-paywall-footer{text-align:center;font-size:12px;color:#555;padding-top:20px;border-top:1px solid #222}.mt-paywall-link{color:#4b7bff;text-decoration:none;font-size:11px;letter-spacing:.5px;transition:color .15s}.mt-paywall-link:hover{color:#ff6b2b}@media(max-width:720px){.mt-paywall-modal{padding:24px 18px;border-radius:16px}.mt-paywall-tiers{grid-template-columns:1fr}}`;

function buildHrvConsistencyPatch(chapterId) {
  return `
(function(){
  var raw = '${chapterId || ''}';
  var chapterNum = parseInt((raw.match(/\\d+/) || [])[0] || '0', 10);

  // ── Kozmetička normalizacija chrome-a — vrijedi za SVA poglavlja (1–28) ──
  // Ujednačuje vidljive sitnice koje se razlikuju u izvoru: back-to-top glyph i emoji tabova.
  function normalizeChapterChrome(){
    try{
      var b = document.querySelector('.btt');
      if(b){ var t=(b.textContent||'').trim(); if(t && t!=='↑') b.textContent='↑'; }
      var tabSel = Array.prototype.slice.call(
        document.querySelectorAll('.tabs .tab, [role="tablist"] .tab, .tabs .tab-btn, [role="tablist"] .tab-btn')
      );
      tabSel.forEach(function(tb){
        var h = tb.innerHTML;
        var n = h.replace(/✍(?!️)/g, '✍️').replace(/🎭/g, '📖');
        if(n !== h) tb.innerHTML = n;
      });
    }catch(e){}
  }
  normalizeChapterChrome();
  setTimeout(normalizeChapterChrome, 60);

  // ── Tab-done indikatori — vrijedi za SVA poglavlja (1–28) ──
  // h12–28 nose vlastiti markTab/restoreTabDone (#td0…); ovdje pokrivamo h01–11
  // koji ga nemaju, te POPRAVLJAMO h13/h16 kojima su .tab-done spanovi nestali u
  // refactoru (native JS preživio, ali bez elemenata no-op-a). Decoupled od sw():
  // injektira spanove + dwell-marking preko click-listenera na same tab-gumbe.
  // Ključ je isti kao native (mt.hrv.hNN.tab_done) pa nema divergencije stanja.
  function ensureTabDoneStyle(){
    if(document.getElementById('mt-tabdone-style')) return;
    var st = document.createElement('style');
    st.id = 'mt-tabdone-style';
    st.textContent = '.tabs .tab-done,[role="tablist"] .tab-done{margin-left:5px;display:inline-flex;align-items:center;justify-content:center;font-family:var(--mono)!important;font-size:9px!important;font-weight:700!important;color:var(--green)!important}';
    document.head.appendChild(st);
  }
  function ensureTabDoneTracking(){
    try{
      if(!chapterNum) return;
      if(document.getElementById('td0')) return;           // poglavlje već ima vlastiti tracker (h12,14,15,17–28)
      var rows = Array.prototype.slice.call(document.querySelectorAll('[role="tablist"], .tabs')).filter(function(row){
        return row && row.querySelectorAll('.tab, .tab-btn').length >= 2;
      });
      var tabs = rows.length ? rows[0].querySelectorAll('.tab, .tab-btn')
                             : document.querySelectorAll('.tab, .tab-btn');
      if(!tabs || tabs.length < 2) return;
      if(rows.length && rows[0].getAttribute('data-mt-tabdone')) return; // već ožičeno
      ensureTabDoneStyle();
      var key = 'mt.hrv.h' + String(chapterNum).padStart(2, '0') + '.tab_done';
      var DONE = {};
      try{ DONE = JSON.parse(localStorage.getItem(key) || '{}') || {}; }catch(e){ DONE = {}; }
      function mark(i){
        if(DONE[i]) return;
        DONE[i] = true;
        try{ localStorage.setItem(key, JSON.stringify(DONE)); }catch(e){}
        var el = document.getElementById('td' + i);
        if(el) el.textContent = '✓';
      }
      for(var i=0;i<tabs.length;i++){
        var tb = tabs[i];
        var sp = tb.querySelector('.tab-done');
        if(!sp){ sp = document.createElement('span'); sp.className = 'tab-done'; tb.appendChild(sp); }
        if(!sp.id) sp.id = 'td' + i;
        if(DONE[i]) sp.textContent = '✓';
      }
      var _t = null;
      for(var j=0;j<tabs.length;j++){
        (function(idx, tb){
          tb.addEventListener('click', function(){
            clearTimeout(_t);
            if(tb.querySelector('.tab-lock')) return;       // PRO-locked → ne markiraj
            _t = setTimeout(function(){ mark(idx); }, 8000);
          });
        })(j, tabs[j]);
      }
      if(rows.length) rows[0].setAttribute('data-mt-tabdone', '1');
    }catch(e){}
  }
  ensureTabDoneTracking();
  setTimeout(ensureTabDoneTracking, 120);

  if(!chapterNum || chapterNum <= 10) return;
  var enableLegacyPracticeCompat = chapterNum <= 16;
  var enableMatchingCompat = chapterNum <= 18;
  var enableCheckpointHostCompat = chapterNum <= 28;

  var chapterCode = 'h' + String(chapterNum).padStart(2, '0');
  var cpStorageKey = 'mt.hrv.' + chapterCode + '.cp';

  function migrateLegacyCheckpointState(){
    if(chapterNum < 13) return;
    try{
      var raw = localStorage.getItem(cpStorageKey);
      if(!raw) return;
      var parsed = JSON.parse(raw);
      if(!Array.isArray(parsed)) return;
      var done = {};
      for(var i=0;i<parsed.length;i++) if(parsed[i]) done[i] = true;
      localStorage.setItem(cpStorageKey, JSON.stringify({done: done}));
    }catch(e){}
  }

  function normalizePracticeTabs(){
    if(!enableLegacyPracticeCompat) return;
    var paid = _isPaidTier();
    ensurePracticeTabVisualParityStyle();
    var rows = Array.prototype.slice.call(document.querySelectorAll('[role="tablist"], .tabs')).filter(function(row){
      return row && row.querySelectorAll('.tab, .tab-btn').length >= 8;
    });

    function setTab(tab, icon, label){
      if(!tab) return;
      var doneNode = tab.querySelector('.tab-done');
      var doneHtml = doneNode ? doneNode.outerHTML : '';
      var hasLock = !!tab.querySelector('.tab-lock');
      var lockHtml = (!paid && (hasLock || label === 'Drill' || label === 'Kviz' || label === 'Checkpoint'))
        ? '<span class="tab-lock">PRO</span>'
        : '';
      tab.innerHTML = icon + ' ' + label + lockHtml + doneHtml;
      tab.setAttribute('aria-label', label);
    }

    if(rows.length){
      for(var r=0;r<rows.length;r++){
        var rowTabs = rows[r].querySelectorAll('.tab, .tab-btn');
        setTab(rowTabs[5], '⚡', 'Drill');
        setTab(rowTabs[6], '🧠', 'Kviz');
        setTab(rowTabs[7], '✅', 'Checkpoint');
      }
    } else {
      var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab, .tab-btn'));
      if(tabs.length >= 8){
        setTab(tabs[5], '⚡', 'Drill');
        setTab(tabs[6], '🧠', 'Kviz');
        setTab(tabs[7], '✅', 'Checkpoint');
      }
    }

    try{
      if(typeof TAB_NAMES !== 'undefined' && Array.isArray(TAB_NAMES) && TAB_NAMES.length > 7){
        TAB_NAMES[5] = 'Drill';
        TAB_NAMES[6] = 'Kviz';
        TAB_NAMES[7] = 'Checkpoint';
      }
    }catch(e){}
  }

  function ensurePracticeTabVisualParityStyle(){
    if(!enableLegacyPracticeCompat) return;
    var styleNode = document.getElementById('mt-tab-visual-parity');
    if(!styleNode){
      styleNode = document.createElement('style');
      styleNode.id = 'mt-tab-visual-parity';
      styleNode.setAttribute('data-mt-tab-visual-parity', '1');
      document.head.appendChild(styleNode);
    }
    styleNode.textContent =
      '.tabs,[role="tablist"]{display:flex;gap:0;margin-bottom:20px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);padding:3px;width:100%;max-width:100%;overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch;-ms-overflow-style:none}' +
      '.tabs .tab,.tabs .tab-btn,[role="tablist"] .tab,[role="tablist"] .tab-btn{padding:7px 16px;font-size:11px!important;font-weight:600!important;color:var(--t2)!important;cursor:pointer;border-radius:5px;transition:all .18s;white-space:nowrap;font-family:var(--mono)!important;position:relative;z-index:1;background:transparent!important;border:none;line-height:normal;min-height:44px!important;letter-spacing:normal!important}' +
      '.tabs .tab.on,.tabs .tab-btn.on,[role="tablist"] .tab.on,[role="tablist"] .tab-btn.on{background:linear-gradient(135deg,var(--bronze-d),var(--bronze),var(--gold))!important;color:#0F0605!important;font-weight:700!important;box-shadow:0 2px 18px rgba(220,50,47,.35),inset 0 1px 0 rgba(255,255,255,.1)}' +
      '.tabs .tab:focus-visible,.tabs .tab-btn:focus-visible,[role="tablist"] .tab:focus-visible,[role="tablist"] .tab-btn:focus-visible{outline:2px solid var(--gold)!important;outline-offset:3px;border-radius:4px}' +
      '.tabs .tab-lock,[role="tablist"] .tab-lock{display:inline-flex;align-items:center;justify-content:center;font-family:var(--mono)!important;font-size:8px!important;font-weight:700!important;letter-spacing:1px!important;margin-left:5px;background:var(--dim-go);color:var(--gold)!important;border:1px solid var(--bd-go);border-radius:3px;padding:2px 6px;line-height:1}' +
      '.tabs .tab-badge,[role="tablist"] .tab-badge{display:inline-flex;align-items:center;justify-content:center;min-width:16px;height:16px;margin-left:6px;padding:0 5px;border-radius:999px;background:var(--dim-g);border:1px solid var(--bd-g);color:var(--green)!important;font-family:var(--mono)!important;font-size:9px!important;font-weight:700!important;line-height:1}' +
      '.tabs .tab-done,[role="tablist"] .tab-done{margin-left:5px;display:inline-flex;align-items:center;justify-content:center;font-family:var(--mono)!important;font-size:9px!important;font-weight:700!important;color:var(--green)!important}' +
      '@media(max-width:600px){.tabs,[role="tablist"]{position:fixed;top:0;left:0;right:0;width:100%;border-radius:0;padding:2px 4px 2px 50px;border:none;border-bottom:1px solid var(--bdm);background:rgba(15,6,5,.97);z-index:200;box-shadow:0 2px 12px rgba(0,0,0,.4)}.tabs .tab,.tabs .tab-btn,[role="tablist"] .tab,[role="tablist"] .tab-btn{font-size:8px!important;padding:5px 6px;letter-spacing:0!important;min-height:38px!important;flex-shrink:0;white-space:nowrap}}';
  }

  // ── Jezična obitelj (h17–28): PRO-lock signal na tab5 (Scanner+Drill) i tab6 (Kviz) ──
  // Kviz je već stvarno free-limitan preko _patchQuizFreeLimit (negejtano). Ovdje samo
  // ujednačujemo VIZUALNI PRO badge — tier-svjesno (plaćeni ga NE vide, što statički
  // badge u h17–18 nije poštivao) i dosljedno preko svih 12 poglavlja.
  function ensureLangLockStyle(){
    if(document.getElementById('mt-lang-lock')) return;
    var st = document.createElement('style');
    st.id = 'mt-lang-lock';
    st.textContent = '.tabs .tab-lock,[role="tablist"] .tab-lock{display:inline-flex;align-items:center;justify-content:center;font-family:var(--mono)!important;font-size:8px!important;font-weight:700!important;letter-spacing:1px!important;margin-left:5px;background:var(--dim-go);color:var(--gold)!important;border:1px solid var(--bd-go);border-radius:3px;padding:2px 6px;line-height:1}';
    document.head.appendChild(st);
  }
  function normalizeLangProLocks(){
    if(chapterNum < 17 || chapterNum > 28) return;
    ensureLangLockStyle();
    var paid = _isPaidTier();
    ['tab5','tab6'].forEach(function(id){
      var tab = document.getElementById(id);
      if(!tab) return;
      var lock = tab.querySelector('.tab-lock');
      if(paid){ if(lock && lock.parentNode) lock.parentNode.removeChild(lock); return; }
      if(!lock){
        var s = document.createElement('span');
        s.className = 'tab-lock';
        s.textContent = 'PRO';
        tab.appendChild(s);
      }
    });
  }

  function ensureCheckpointDom(){
    if(!enableCheckpointHostCompat) return;
    // Some chapters (e.g. H11) render native checkpoint UI via #cp-grid/.cp-item
    // and do not use #cp-list. Do not inject fallback shell in that case.
    if(document.getElementById('cp-list')) return;
    if(document.getElementById('cp-grid')) return;
    if(document.querySelector('.cp-item, .cp-summary, .cp-wrap')) return;
    var layers = document.querySelectorAll('.layer');
    var layer7 = document.getElementById('l7') || (layers && layers.length > 7 ? layers[7] : null);
    if(!layer7 || document.getElementById('mt-cp-shell')) return;
    var shell = document.createElement('div');
    shell.id = 'mt-cp-shell';
    shell.className = 'no-print';
    shell.style.margin = '0 0 18px 0';
    shell.innerHTML =
      '<div style="padding:14px;background:var(--ele,#1a1a1a);border:1px solid var(--bd,#333);border-radius:12px">' +
        '<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:10px">' +
          '<div style="font-weight:700;color:var(--t1,#fff)">✅ Provjera znanja</div>' +
          '<div style="font-family:var(--mono,ui-monospace);font-size:12px;color:var(--t2,#bbb)">Napredak: <span id="cp-pct">0 / 0</span></div>' +
          '<span id="cp-done" style="display:none">0</span>' +
        '</div>' +
        '<div style="height:8px;background:rgba(255,255,255,.08);border-radius:999px;overflow:hidden;margin-bottom:12px">' +
          '<div id="cp-bar" style="height:100%;width:0%;background:linear-gradient(90deg,#65d38a,#2aa5ff)"></div>' +
        '</div>' +
        '<div id="cp-list" class="cp-grid"></div>' +
        '<div id="cp-summary-box" style="display:none;align-items:center;gap:8px;margin-top:12px;padding:10px;border:1px solid var(--bd,#333);border-radius:10px">' +
          '<strong id="cp-sum-pct" style="color:var(--gold,#f6c24a)">0%</strong>' +
          '<span id="cp-sum-txt" style="color:var(--t2,#bbb)"></span>' +
        '</div>' +
        '<div id="cp-final" class="cp-final">🎉 Provjera dovršena.</div>' +
        '<div style="margin-top:10px"><button type="button" class="fcb" onclick="cpReset()">Reset provjere</button></div>' +
      '</div>';
    layer7.insertBefore(shell, layer7.firstChild);
  }

  function ensureQuizCompatAlias(){
    if(typeof window.qzStart === 'function') return;
    window.qzStart = function(){
      if(typeof window.sw === 'function'){
        try{ window.sw(6); }catch(e){}
      }
      if(typeof window.qzInit === 'function'){
        try{ window.qzInit(); return; }catch(e){}
      }
      if(typeof window.pravInitInline === 'function'){
        try{ window.pravInitInline(); return; }catch(e){}
      }
      if(typeof window.sdInit === 'function'){
        try{ window.sdInit(); return; }catch(e){}
      }
    };
  }

  function _isPaidTier(){
    try{
      var tier = localStorage.getItem('mt.user.tier') || localStorage.getItem('mt.tier') || 'free';
      if(tier === 'standard' || tier === 'pro') return true;
      if(tier === 'free') return false;
      if(typeof qzIsPaid === 'function') return !!qzIsPaid();
      return false;
    }catch(e){
      return false;
    }
  }

  function _showQuizPaywall(){
    if(typeof window.__mtShowHrvPaywall === 'function'){
      try { window.__mtShowHrvPaywall('drill'); return; } catch(e){}
    }
    if(typeof qzShowPaywall === 'function'){
      try { qzShowPaywall(); return; } catch(e){}
    }
    if(typeof showHrvPaywall === 'function'){
      try { showHrvPaywall('drill'); return; } catch(e){}
    }
  }

  function _quizProgressIndex(){
    if(typeof window.qzIdx === 'number') return window.qzIdx;
    if(typeof window.qzI === 'number') return window.qzI;
    if(window.qzState && typeof window.qzState.idx === 'number') return window.qzState.idx;
    var nodes = [
      document.getElementById('qz-idx-lbl'),
      document.getElementById('qz-idx'),
      document.querySelector('.qz-num'),
      document.querySelector('.qz-prog-txt')
    ];
    for(var i=0;i<nodes.length;i++){
      var node = nodes[i];
      if(!node) continue;
      var nums = String(node.textContent || '').match(/[0-9]+/g);
      if(nums && nums.length >= 2){
        var idx = parseInt(nums[0], 10) - 1;
        if(!isNaN(idx)) return Math.max(0, idx);
      }
    }
    return 0;
  }

  function _quizFreeLimit(){
    var lim = (typeof QZ_FREE_LIMIT !== 'undefined' && Number(QZ_FREE_LIMIT) > 0) ? Number(QZ_FREE_LIMIT) : 5;
    return lim;
  }

  function _maybeShowQuizPaywall(){
    if(_isPaidTier()) return false;
    if(document.getElementById('hrv-paywall-modal')) return true;
    if(_quizProgressIndex() < _quizFreeLimit()) return false;
    _showQuizPaywall();
    return true;
  }

  function _patchQuizFreeLimit(){
    if(window.__mtQuizFreeLimitPatch) return;
    if(typeof window.qzNext === 'function'){
      var origQzNext = window.qzNext;
      window.qzNext = function(){
        if(_maybeShowQuizPaywall()) return;
        var out = origQzNext.apply(this, arguments);
        setTimeout(_maybeShowQuizPaywall, 0);
        return out;
      };
      try{ qzNext = window.qzNext; }catch(e){}
    }
    window.__mtQuizFreeLimitPatch = true;
  }

  function _quizContainer(){
    return document.getElementById('qz-app') || document.getElementById('qz-wrap') || document.getElementById('qz') || document.getElementById('qz-body');
  }

  function _cleanupUnifiedQuizLayer(){
    if(!enableLegacyPracticeCompat) return;
    var root = _quizContainer();
    if(!root) return;
    var layer = document.getElementById('l6') || (root.closest ? root.closest('.layer') : null);
    if(!layer || !layer.children) return;

    if(root.id !== 'qz-app') root.id = 'qz-app';
    if(String(root.className || '').indexOf('qz-wrap') === -1){
      root.className = (String(root.className || '') + ' qz-wrap').trim();
    }

    function _ensureScaffoldNode(selector, html){
      var el = layer.querySelector(selector + '[data-mt-quiz-scaffold="1"]') || layer.querySelector(selector);
      if(!el){
        el = document.createElement('div');
        el.className = selector.replace('.', '');
      }
      if(el.parentNode !== layer) layer.appendChild(el);
      el.setAttribute('data-mt-quiz-scaffold', '1');
      if(typeof html === 'string') el.innerHTML = html;
      el.style.display = '';
      return el;
    }

    var tags = _ensureScaffoldNode('.tags',
      '<span class="pill p-br">' + QUIZ_STD.length + ' pitanja</span>' +
      '<span class="pill p-go">višestruki izbor</span>' +
      '<span class="pill p-r">bez limita vremena</span>'
    );

    var box = _ensureScaffoldNode('.box-int',
      '<div class="box-int-lbl">🧠 Kviz — testiraj znanje iz cijelog poglavlja</div>' +
      '<div class="box-int-txt">Format identičan maturi — zadaci višestrukog izbora s 4 odgovora. Pokriva cijelo poglavlje i na kraju daje ocjenu + pregled promašenih pitanja.</div>'
    );

    var nav = _ensureScaffoldNode('.nav-row',
      '<span class="nb" onclick="sw(5)">← Drill</span>' +
      '<span class="nb primary" onclick="sw(7)">✅ Checkpoint →</span>'
    );
    nav.style.marginTop = '30px';

    if(tags.parentNode === layer) layer.insertBefore(tags, layer.firstChild);
    if(box.parentNode === layer) layer.insertBefore(box, tags.nextSibling);
    if(root.parentNode === layer) layer.insertBefore(root, box.nextSibling);
    if(nav.parentNode === layer) layer.insertBefore(nav, root.nextSibling);

    var keep = [tags, box, root, nav];
    var kids = Array.prototype.slice.call(layer.children);
    for(var i=0;i<kids.length;i++){
      var node = kids[i];
      if(keep.indexOf(node) !== -1) continue;
      if(node && node.parentNode === layer) node.parentNode.removeChild(node);
    }
  }

  function _normalizeQuizRow(row){
    if(!row) return null;
    if(Array.isArray(row.opts) && typeof row.correct === 'number'){
      return {q: row.q, opts: row.opts, correct: row.correct, exp: row.exp || ''};
    }
    if(Array.isArray(row.opts) && typeof row.ans === 'number'){
      return {q: row.q, opts: row.opts, correct: row.ans, exp: row.exp || ''};
    }
    if(Array.isArray(row.o) && typeof row.t === 'number'){
      return {q: row.q, opts: row.o, correct: row.t, exp: row.e || ''};
    }
    return null;
  }

  function _resolveQuizData(){
    var src = null;
    if(typeof QUIZ !== 'undefined' && Array.isArray(QUIZ)) src = QUIZ;
    else if(typeof QZ_DATA !== 'undefined' && Array.isArray(QZ_DATA)) src = QZ_DATA;
    else if(typeof KVIZ_Q !== 'undefined' && Array.isArray(KVIZ_Q)) src = KVIZ_Q;
    if(!src) return [];
    var out = [];
    for(var i=0;i<src.length;i++){
      var n = _normalizeQuizRow(src[i]);
      if(n && n.q && Array.isArray(n.opts)) out.push(n);
    }
    var lim = 0;
    if(typeof QZ_TOTAL !== 'undefined' && Number(QZ_TOTAL) > 0) lim = Number(QZ_TOTAL);
    else if(chapterNum >= 11 && chapterNum <= 16) lim = 20;
    if(lim > 0 && out.length > lim) out = out.slice(0, lim);
    return out;
  }

  var QUIZ_STD = _resolveQuizData();
  var qzState = {idx:0, score:0, answered:[], shuffled:[], started:false};

  function _playQuizSound(kind){
    var fn = null;
    if(kind === 'ok' && typeof soundOk === 'function') fn = soundOk;
    else if(kind === 'ng' && typeof soundNg === 'function') fn = soundNg;
    else if(kind === 'done' && typeof soundDone === 'function') fn = soundDone;

    if(!fn){
      var prefix = 'h' + String(chapterNum).padStart(2, '0');
      var suffix = kind === 'ok' ? 'DrillSoundOk' : (kind === 'ng' ? 'DrillSoundNg' : 'DrillSoundDone');
      var name = prefix + suffix;
      if(typeof window[name] === 'function') fn = window[name];
    }

    if(fn){
      try { fn(); } catch(e){}
    }
  }

  function qzRenderIntro(){
    if(!enableLegacyPracticeCompat) return;
    var root = _quizContainer();
    if(!root || !QUIZ_STD.length) return;
    var end = document.getElementById('qz-end');
    if(end) end.style.display = 'none';
    root.style.display = 'block';
    root.innerHTML =
      '<div class="qz-start">' +
        '<div class="qz-start-ico">🧠</div>' +
        '<h3>' + QUIZ_STD.length + ' pitanja · bez vremena</h3>' +
        '<p>Pitanja pokrivaju cijelo poglavlje. Klikni "Započni kviz" i prođi sva pitanja.</p>' +
        '<button class="fcb primary" onclick="qzStart()">Započni kviz →</button>' +
      '</div>';
    _cleanupUnifiedQuizLayer();
    qzState = {idx:0, score:0, answered:[], shuffled:[], started:false};
  }

  function qzStart(){
    if(!QUIZ_STD.length) return;
    qzState = {idx:0, score:0, answered:[], shuffled:QUIZ_STD.slice(), started:true};
    for(var i=qzState.shuffled.length-1;i>0;i--){
      var j=Math.floor(Math.random()*(i+1));
      var t=qzState.shuffled[i]; qzState.shuffled[i]=qzState.shuffled[j]; qzState.shuffled[j]=t;
    }
    if(typeof track === 'function'){
      try{ track('quiz_start', {total_questions: qzState.shuffled.length}, 'engagement'); } catch(e){}
    }
    qzRender();
  }

  function qzRender(){
    if(!qzState.started || !qzState.shuffled.length) return;
    var root = _quizContainer();
    if(!root) return;
    var q = qzState.shuffled[qzState.idx];
    if(!q) return;
    var pct = (qzState.idx / qzState.shuffled.length) * 100;
    var useH10ProgressVisual = chapterNum >= 11 && chapterNum <= 16;
    var progHeaderClass = useH10ProgressVisual ? 'qz-prog-txt' : 'qz-head';
    var progHeaderStyle = useH10ProgressVisual
      ? 'display:flex;justify-content:space-between;font-family:var(--mono);font-size:10px;letter-spacing:1.5px;color:var(--t3);text-transform:uppercase;margin-bottom:8px'
      : 'display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:8px';
    var progValueStyle = useH10ProgressVisual ? ' style="color:var(--bronze-l)"' : '';
    var barStyle = useH10ProgressVisual
      ? ' style="height:4px;background:var(--bd);border-radius:2px;overflow:hidden;margin-bottom:32px"'
      : '';
    var barFillStyle = useH10ProgressVisual
      ? 'width:' + pct + '%;height:100%;background:linear-gradient(90deg,var(--bronze-d),var(--bronze),var(--gold));transition:width .5s cubic-bezier(.4,0,.2,1)'
      : 'width:' + pct + '%';
    var html =
      '<div class="' + progHeaderClass + '" style="' + progHeaderStyle + '"><span>pitanje <b' + progValueStyle + '>' + (qzState.idx+1) + '</b> / ' + qzState.shuffled.length + '</span><span>bodova: <b' + progValueStyle + '>' + qzState.score + '</b></span></div>' +
      '<div class="qz-bar"' + barStyle + '><div class="qz-bar-f" style="' + barFillStyle + '"></div></div>' +
      '<div class="qz-q">' + q.q + '</div>' +
      '<div class="qz-opts">';
    for(var i=0;i<q.opts.length;i++){
      html += '<button class="qz-opt" data-i="' + i + '"><span class="qz-key">' + String.fromCharCode(65+i) + '</span><span>' + q.opts[i] + '</span></button>';
    }
    html += '</div><div class="qz-fb" id="qz-fb"></div><div class="qz-nav" id="qz-nav"></div>';
    root.innerHTML = html;
    _cleanupUnifiedQuizLayer();

    var opts = root.querySelectorAll('.qz-opt');
    for(var k=0;k<opts.length;k++){
      (function(btn){
        btn.addEventListener('click', function(){ qzAnswer(parseInt(btn.dataset.i, 10)); });
      })(opts[k]);
    }
  }

  function qzAnswer(sel){
    if(!qzState.started) return;
    var q = qzState.shuffled[qzState.idx];
    if(!q) return;
    var ok = sel === q.correct;
    if(ok){
      qzState.score++;
      _playQuizSound('ok');
    } else {
      _playQuizSound('ng');
    }

    qzState.answered.push({q:q.q, sel:sel, correct:q.correct, ok:ok, opts:q.opts, exp:q.exp || ''});
    var opts = document.querySelectorAll('.qz-opt');
    for(var i=0;i<opts.length;i++){
      opts[i].disabled = true;
      if(i===q.correct) opts[i].classList.add('ok');
      if(i===sel && !ok) opts[i].classList.add('ng');
    }

    var fb = document.getElementById('qz-fb');
    if(fb){
      fb.className = 'qz-fb show ' + (ok ? 'ok' : 'ng');
      fb.innerHTML = '<b>' + (ok ? '✓ Točno!' : '✗ Pogrešno.') + '</b> ' + (q.exp || '');
    }

    var nav = document.getElementById('qz-nav');
    if(nav){
      var isLast = qzState.idx === qzState.shuffled.length - 1;
      nav.innerHTML = '<button class="fcb primary" onclick="qzNext()">' + (isLast ? 'Prikaži rezultat' : 'Sljedeće pitanje') + ' →</button>';
    }
  }

  function qzNext(){
    if(!qzState.started) return;
    var freeLimit = (typeof QZ_FREE_LIMIT !== 'undefined' && Number(QZ_FREE_LIMIT) > 0) ? Number(QZ_FREE_LIMIT) : 5;
    if(!_isPaidTier() && qzState.idx >= freeLimit - 1 && qzState.shuffled.length > freeLimit){
      _showQuizPaywall();
      return;
    }
    if(qzState.idx >= qzState.shuffled.length - 1){
      qzResult();
      return;
    }
    qzState.idx++;
    qzRender();
  }

  function qzResult(){
    var root = _quizContainer();
    if(!root || !qzState.shuffled.length) return;
    var end = document.getElementById('qz-end');
    if(end) end.style.display = 'none';
    root.style.display = 'block';
    var pct = Math.round((qzState.score / qzState.shuffled.length) * 100);
    _playQuizSound('done');
    var grade = 'NEDOVOLJAN', msg = 'Vrati se na gradivo i ponovi.', ico = '🎯';
    if(pct >= 90){ grade = 'ODLIČAN'; msg = 'Odlično! Spreman/na si.'; ico = '🏆'; }
    else if(pct >= 75){ grade = 'VRLO DOBAR'; msg = 'Vrlo dobro! Još malo do perfekcije.'; ico = '💪'; }
    else if(pct >= 60){ grade = 'DOBAR'; msg = 'Dobra osnova. Ponovi slabije točke.'; ico = '📚'; }
    else if(pct >= 45){ grade = 'DOVOLJAN'; msg = 'Osnove su tu — trebaš više vježbe.'; ico = '🔁'; }

    root.innerHTML =
      '<div class="qz-result">' +
        '<div style="font-size:48px;margin-bottom:8px">' + ico + '</div>' +
        '<div class="qz-score">' + pct + '%</div>' +
        '<div class="qz-grade">' + grade + '</div>' +
        '<div class="qz-msg">' + qzState.score + ' / ' + qzState.shuffled.length + ' točnih · ' + msg + '</div>' +
        '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">' +
          '<button class="fcb primary" onclick="qzStart()">🔁 Ponovo</button>' +
        '</div>' +
      '</div>';

    if(typeof track === 'function'){
      try{ track('quiz_complete', {score:qzState.score, total:qzState.shuffled.length, pct:pct}, 'conversion'); } catch(e){}
    }
  }

  function qzShare(pct,score){
    var text = 'Prošao/la sam kviz — ' + score + '/' + QUIZ_STD.length + ' (' + pct + '%)';
    if(navigator.share){
      navigator.share({title:'Maturiraj.hr · Kviz', text:text, url:window.location.href}).catch(function(){});
      return;
    }
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text + '\\n' + window.location.href).catch(function(){});
      return;
    }
    window.prompt('Kopiraj i zalijepi:', text + '\\n' + window.location.href);
  }

  if(QUIZ_STD.length){
    window.__mtQuizUnifiedOverrides = true;
    window.qzInit = qzRenderIntro;
    window.qzStart = qzStart;
    window.qzRender = qzRender;
    window.qzAnswer = qzAnswer;
    window.qzNext = qzNext;
    window.qzResult = qzResult;
    window.qzRestart = qzRenderIntro;
    window.qzShare = qzShare;
    setTimeout(qzRenderIntro, 0);
  }

  function _cpItems(){
    return Array.prototype.slice.call(document.querySelectorAll('.cp-item'));
  }

  function cpSave(){
    var items = _cpItems();
    if(!items.length) return;
    var states = items.map(function(el){ return el.classList.contains('done'); });
    try{ localStorage.setItem(cpStorageKey, JSON.stringify(states)); }catch(e){}
  }

  function cpLoad(){
    var items = _cpItems();
    if(!items.length) return;
    var states = null;
    try{ states = JSON.parse(localStorage.getItem(cpStorageKey) || 'null'); }catch(e){ states = null; }
    if(!Array.isArray(states)) return;
    for(var i=0;i<items.length;i++){
      if(states[i]) items[i].classList.add('done');
      else items[i].classList.remove('done');
    }
  }

  function cpUpdate(){
    var items = _cpItems();
    if(!items.length) return;
    var done = 0;
    for(var i=0;i<items.length;i++) if(items[i].classList.contains('done')) done++;
    var total = items.length;
    var pct = Math.round((done / total) * 100);
    var doneEl = document.getElementById('cp-done');
    var pctEl = document.getElementById('cp-pct');
    var barEl = document.getElementById('cp-bar');
    var finalEl = document.getElementById('cp-final');
    if(doneEl) doneEl.textContent = String(done);
    if(pctEl) pctEl.textContent = pct + '%';
    if(barEl && barEl.style) barEl.style.width = pct + '%';
    if(finalEl){
      if(done === total) finalEl.classList.add('show');
      else finalEl.classList.remove('show');
    }
  }

  function cpToggle(arg){
    var items = _cpItems();
    if(!items.length) return;
    var el = null;
    if(typeof arg === 'number') el = items[arg] || null;
    else if(arg && arg.nodeType === 1) el = arg;
    if(!el) return;
    el.classList.toggle('done');
    cpSave();
    cpUpdate();
    if(el.classList.contains('done') && typeof soundOk === 'function'){
      try{ soundOk(); } catch(e){}
    }
  }

  function cpReset(){
    var items = _cpItems();
    for(var i=0;i<items.length;i++) items[i].classList.remove('done');
    try{ localStorage.removeItem(cpStorageKey); }catch(e){}
    cpUpdate();
  }

  var hasNativeCheckpoint =
    typeof cpRender === 'function' ||
    typeof cpUpdateProgress === 'function' ||
    typeof window.cpRender === 'function' ||
    typeof window.cpUpdateProgress === 'function' ||
    typeof window.cpToggle === 'function' ||
    typeof window.cpReset === 'function';

  function refreshNativeCheckpoint(){
    if(typeof cpRender === 'function'){
      try { cpRender(); return; } catch(e){}
    }
    if(typeof window.cpRender === 'function'){
      try { window.cpRender(); return; } catch(e){}
    }
    if(typeof cpUpdateProgress === 'function'){
      try { cpUpdateProgress(); return; } catch(e){}
    }
    if(typeof window.cpUpdateProgress === 'function'){
      try { window.cpUpdateProgress(); return; } catch(e){}
    }
    if(typeof window.cpUpdate === 'function' && window.cpUpdate !== cpUpdate){
      try { window.cpUpdate(); } catch(e){}
    }
  }

  if(!hasNativeCheckpoint){
    window.cpToggle = cpToggle;
    window.cpSave = cpSave;
    window.cpLoad = cpLoad;
    window.cpUpdate = cpUpdate;
    window.cpReset = cpReset;
  }

  function _normalizeDrillLayer(){
    if(!enableLegacyPracticeCompat) return;
    var layer = document.getElementById('l5');
    if(!layer || !layer.children) return;

    var lock = document.getElementById('h11-drill-lock') || document.querySelector('[id$="-drill-lock"]') || document.getElementById('drill-lock');
    if(lock && lock.parentNode === layer) lock.parentNode.removeChild(lock);

    function _ensureNode(key, cls, html){
      var node = layer.querySelector('.' + cls + '[data-mt-drill-node="' + key + '"]');
      if(!node){
        if(key === 'fc-host') node = layer.querySelector('.fc-wrap:not([data-mt-drill-node])');
        else if(key === 'pg-host') node = layer.querySelector('.pro-gate:not([data-mt-drill-node])');
        else node = layer.querySelector('.' + cls + ':not([data-mt-drill-node])');
      }
      if(!node){
        node = document.createElement('div');
        node.className = cls;
      }
      if(node.parentNode !== layer) layer.appendChild(node);
      node.setAttribute('data-mt-drill-scaffold', '1');
      node.setAttribute('data-mt-drill-node', key);
      if(typeof html === 'string') node.innerHTML = html;
      node.style.display = '';
      return node;
    }

    var tags = _ensureNode('tags', 'tags',
      '<span class="pill p-br">flashcards</span>' +
      '<span class="pill p-go">spari</span>' +
      '<span class="pill p-r">brzo učenje</span>'
    );

    var box = _ensureNode('box', 'box-int',
      '<div class="box-int-lbl">⚡ Drill — aktivno učenje</div>' +
      '<div class="box-int-txt"><strong>15 više kartica + Matching + Spaced repetition</strong><br>Drill je aktivno učenje — 4× efikasnije od pasivnog čitanja. Svih 20 kartica + 9 pair matchingov.</div>'
    );

    var sec1 = _ensureNode('sec1', 'sec-hdr',
      '<div class="sec-line"></div><div class="sec-badge">01 · Flashcards · okreni karticu</div><div class="sec-line"></div>'
    );

    var sec2 = _ensureNode('sec2', 'sec-hdr',
      '<div class="sec-line"></div><div class="sec-badge">02 · Spari · djelo → autor</div><div class="sec-line"></div>'
    );

    var mgIntro = _ensureNode('mg-intro', 'mg-intro',
      'Klikni jedan element s lijeve strane, pa njegov par s desne. Pogrešne veze se resetiraju.'
    );

    var fcHost = _ensureNode('fc-host', 'fc-wrap');
    var pgHost = _ensureNode('pg-host', 'pro-gate');

    if(!pgHost.querySelector('.mg-board') && !pgHost.querySelector('#mg-dynamic')){
      pgHost.innerHTML =
        '<div class="mg-board" id="mg-board"></div>' +
        '<div class="mg-stats"><span>spareno: <b id="mg-score">0</b> / <span id="mg-total">9</span></span></div>';
    }

    if(chapterNum >= 11){
      var ov = pgHost.querySelector('.pro-gate-overlay');
      var ctx = 'drill_matching_h' + String(chapterNum).padStart(2, '0');
      if(!ov){
        ov = document.createElement('div');
        ov.className = 'pro-gate-overlay';
        ov.setAttribute('data-gate-state', 'visible');
        ov.innerHTML =
          '<div class="pro-gate-fade"></div>' +
          '<div class="pro-gate-cta">' +
            '<div class="pro-gate-label">9 <b>pair matching</b> vježbi — djelo → autor · pojam → epoha · stil → autor</div>' +
            '<a class="pro-gate-btn" href="/pricing?ctx=' + ctx + '">Otključaj — 9,99€/mj</a>' +
            '<div class="pro-gate-meta">Otkaži bilo kad · Free trial 7 dana</div>' +
          '</div>';
        pgHost.appendChild(ov);
      } else {
        var ovLabel = ov.querySelector('.pro-gate-label');
        var ovBtn = ov.querySelector('.pro-gate-btn');
        var ovMeta = ov.querySelector('.pro-gate-meta');
        if(ovLabel) ovLabel.innerHTML = '9 <b>pair matching</b> vježbi — djelo → autor · pojam → epoha · stil → autor';
        if(ovBtn){
          ovBtn.textContent = 'Otključaj — 9,99€/mj';
          ovBtn.setAttribute('href', '/pricing?ctx=' + ctx);
        }
        if(ovMeta) ovMeta.textContent = 'Otkaži bilo kad · Free trial 7 dana';
      }
    }

    var nav = _ensureNode('nav', 'nav-row',
      '<span class="nb" onclick="sw(4)">← Pojmovnik</span>' +
      '<span class="nb primary" onclick="sw(6)">🧠 Kviz →</span>'
    );

    var core = document.getElementById('h11-drill-body') || document.querySelector('[id$="-drill-body"]') || document.getElementById('drill-body') || document.getElementById('mt-drill-core');
    if(!core){
      core = document.createElement('div');
      core.id = 'mt-drill-core';
      var movable = [];
      var children = Array.prototype.slice.call(layer.children);
      for(var i=0;i<children.length;i++){
        var ch = children[i];
        if(ch === tags || ch === box || ch === sec1 || ch === sec2 || ch === mgIntro || ch === fcHost || ch === pgHost || ch === nav) continue;
        movable.push(ch);
      }
      for(var m=0;m<movable.length;m++) core.appendChild(movable[m]);
    }
    if(core){
      core.setAttribute('data-mt-drill-core', '1');
      if(core.parentNode !== layer) layer.appendChild(core);
      core.style.display = 'block';

      var coreKids = Array.prototype.slice.call(core.children || []);
      if(coreKids.length){
        for(var c=0;c<coreKids.length;c++){
          var ch = coreKids[c];
          if(ch && ch.getAttribute && ch.getAttribute('data-mt-drill-scaffold') === '1'){
            if(ch.parentNode === core) core.removeChild(ch);
            continue;
          }
          var cls = String(ch.className || '');
          var id = ch.id || '';
          var isMatchChunk =
            id === 'mg-dynamic' ||
            cls.indexOf('mg-') !== -1 ||
            cls.indexOf('box-signal') !== -1 ||
            cls.indexOf('pro-gate') !== -1;
          if(isMatchChunk) pgHost.appendChild(ch);
          else fcHost.appendChild(ch);
        }
        if(core.parentNode === layer && core.childElementCount === 0) core.parentNode.removeChild(core);
      } else if(core !== fcHost && !(core.contains && core.contains(fcHost))){
        fcHost.appendChild(core);
      }
    }

    layer.insertBefore(tags, layer.firstChild);
    layer.insertBefore(box, tags.nextSibling);
    layer.insertBefore(sec1, box.nextSibling);
    layer.insertBefore(fcHost, sec1.nextSibling);
    layer.insertBefore(sec2, fcHost.nextSibling);
    layer.insertBefore(mgIntro, sec2.nextSibling);
    layer.insertBefore(pgHost, mgIntro.nextSibling);
    layer.insertBefore(nav, pgHost.nextSibling);

    if(chapterNum === 11){
      var strayCore = fcHost.querySelector('#mt-drill-core');
      if(strayCore && strayCore.parentNode === fcHost) strayCore.parentNode.removeChild(strayCore);

      // Keep only first instance of each drill ID to avoid duplicated card stacks.
      var seenIds = {};
      var idNodes = fcHost.querySelectorAll('[id]');
      for(var idn=0; idn<idNodes.length; idn++){
        var idNode = idNodes[idn];
        var idVal = idNode.id || '';
        if(!idVal) continue;
        if(!seenIds[idVal]){ seenIds[idVal] = idNode; continue; }
        if(idNode.parentNode) idNode.parentNode.removeChild(idNode);
      }

      var countEl = fcHost.querySelector('#drill-count');

      var heads = fcHost.querySelectorAll('.drill-head, .fc-counter');
      var head = heads.length ? heads[0] : null;
      if(head && countEl && countEl.parentNode !== head) head.appendChild(countEl);
      for(var h=1; h<heads.length; h++) if(heads[h].parentNode) heads[h].parentNode.removeChild(heads[h]);

      var cards = fcHost.querySelectorAll('#drill-card, .drill-card');
      var card = cards.length ? cards[0] : null;
      for(var cd=1; cd<cards.length; cd++) if(cards[cd].parentNode) cards[cd].parentNode.removeChild(cards[cd]);

      var acts = fcHost.querySelectorAll('.drill-actions, .fc-controls');
      var actions = acts.length ? acts[0] : null;
      for(var a=1; a<acts.length; a++) if(acts[a].parentNode) acts[a].parentNode.removeChild(acts[a]);

      if(head){
        head.className = 'fc-counter';
        var lbl = head.querySelector('.drill-lbl');
        if(lbl && lbl.parentNode === head) lbl.parentNode.removeChild(lbl);
      }

      if(countEl){
        var nums = String(countEl.textContent || '').match(/[0-9]+/g);
        if(nums && nums.length >= 2) countEl.innerHTML = '<b>' + nums[0] + '</b> / ' + nums[1];
      }

      if(card){
        card.className = 'fc';
        var inner = card.querySelector('.fc-inner');
        if(!inner){
          inner = document.createElement('div');
          inner.className = 'fc-inner';
          while(card.firstChild) inner.appendChild(card.firstChild);
          card.appendChild(inner);
        }
        var fSide = inner.querySelector('.drill-front');
        var bSide = inner.querySelector('.drill-back');
        if(fSide) fSide.className = 'fc-front';
        if(bSide) bSide.className = 'fc-back';
        var labels = inner.querySelectorAll('.drill-side-lbl');
        for(var l=0;l<labels.length;l++) labels[l].className = 'fc-cat';
        var frontTxt = inner.querySelector('#drill-front');
        var backTxt = inner.querySelector('#drill-back');
        if(frontTxt) frontTxt.className = 'fc-term';
        if(backTxt) backTxt.className = 'fc-def';
      }

      if(actions){
        actions.className = 'fc-controls';
        if(!window.__mtH11DrillVisualHandlers){
          window.__mtH11DrillIsPaid = function(){
            var t = (document.body.getAttribute('data-tier') || 'free');
            return t === 'standard' || t === 'pro';
          };

          window.__mtH11ShowDrillPaywall = function(){
            var wrap = document.querySelector('#l5 .fc-wrap') || document.querySelector('.fc-wrap');
            if(!wrap) return;
            var existing = document.getElementById('fc-paywall');
            if(existing){
              if(existing.scrollIntoView) existing.scrollIntoView({behavior:'smooth', block:'center'});
              return;
            }
            var chapter = chapterCode || ('h' + String(chapterNum).padStart(2, '0'));
            var html =
              '<div id="fc-paywall" class="drill-paywall" data-feature="drill-flashcards">' +
                '<div class="drill-paywall-ico">🔓</div>' +
                '<div class="drill-paywall-title">15 više kartica + Matching + Spaced repetition</div>' +
                '<div class="drill-paywall-sub">Drill je aktivno učenje — 4× efikasnije od pasivnog čitanja. Svih 20 kartica + 9 pair matchingov.</div>' +
                '<a class="pro-gate-btn" href="/pricing?ctx=drill_flashcards_' + chapter + '">Otključaj — 9,99€/mj</a>' +
                '<div class="pro-gate-meta">Otkaži bilo kad · Free trial 7 dana</div>' +
              '</div>';
            wrap.insertAdjacentHTML('afterend', html);
          };

          window.__mtH11DrillBuildDeck = function(){
            var src = Array.isArray(QUIZ_STD) ? QUIZ_STD.slice(0, 20) : [];
            var out = [];
            for(var i=0;i<src.length;i++){
              var row = src[i] || {};
              var q = String(row.q || '').trim();
              var ans = '';
              if(Array.isArray(row.opts) && typeof row.correct === 'number' && row.correct >= 0 && row.correct < row.opts.length){
                ans = String(row.opts[row.correct] || '');
              }
              var exp = String(row.exp || '').trim();
              if(!q) continue;
              out.push({
                front: q,
                back: ans + (exp ? (' — ' + exp) : '')
              });
            }
            if(!out.length){
              var f = document.getElementById('drill-front');
              var b = document.getElementById('drill-back');
              out.push({
                front: (f && f.textContent) ? f.textContent : 'Nema dostupnih kartica.',
                back: (b && b.textContent) ? b.textContent : 'Pokušaj ponovno otvoriti Drill tab.'
              });
            }
            window.__mtH11DrillDeck = out;
            if(typeof window.__mtH11DrillIdx !== 'number' || window.__mtH11DrillIdx < 0 || window.__mtH11DrillIdx >= out.length){
              window.__mtH11DrillIdx = 0;
            }
          };

          window.__mtH11DrillRenderDeck = function(){
            if(!Array.isArray(window.__mtH11DrillDeck) || !window.__mtH11DrillDeck.length) window.__mtH11DrillBuildDeck();
            var deck = window.__mtH11DrillDeck || [];
            if(!deck.length) return;

            var idx = (typeof window.__mtH11DrillIdx === 'number') ? window.__mtH11DrillIdx : 0;
            if(idx < 0) idx = 0;
            if(idx > deck.length - 1) idx = deck.length - 1;
            window.__mtH11DrillIdx = idx;

            var front = document.getElementById('drill-front');
            var back = document.getElementById('drill-back');
            var count = document.getElementById('drill-count');
            var backWrap = document.getElementById('drill-back-wrap');
            var catF = document.querySelector('#drill-card .fc-front .fc-cat');
            var catB = document.querySelector('#drill-card .fc-back .fc-cat');

            var freeLimit = _drillFreeLimit();
            if(!window.__mtH11DrillIsPaid() && idx >= freeLimit){
              idx = freeLimit - 1;
              window.__mtH11DrillIdx = idx;
              if(front) front.textContent = 'Otključaj svih 20 kartica';
              if(catF) catF.textContent = 'FREE TIER — 5 / 20';
              if(back) back.textContent = 'Pridruži se Standard planu za svih 20 flashcards + Matching igru + Spaced Repetition. Učenje je 4× brže s aktivnim drillom.';
              if(catB) catB.textContent = 'UPGRADE';
              if(count) count.innerHTML = '<b>' + freeLimit + '</b> / 20 · <span style="color:var(--gold)">Free limit</span>';
              if(backWrap) backWrap.style.display = 'none';
              window.__mtH11ShowDrillPaywall();
              return;
            }

            var card = deck[idx];

            if(catF) catF.textContent = 'PITANJE';
            if(catB) catB.textContent = 'TOČNO + OBJAŠNJENJE';
            if(front) front.textContent = card.front || '';
            if(back) back.textContent = card.back || '';
            if(count) count.innerHTML = '<b>' + (idx + 1) + '</b> / 20';
            if(backWrap) backWrap.style.display = 'none';
          };

          window.__mtH11DrillNext = function(){
            if(!Array.isArray(window.__mtH11DrillDeck) || !window.__mtH11DrillDeck.length) window.__mtH11DrillBuildDeck();
            if(!window.__mtH11DrillDeck || !window.__mtH11DrillDeck.length) return;
            var idx = (typeof window.__mtH11DrillIdx === 'number') ? window.__mtH11DrillIdx : 0;
            if(idx < window.__mtH11DrillDeck.length - 1) idx++;
            else idx = 0;
            window.__mtH11DrillIdx = idx;
            window.__mtH11DrillRenderDeck();
          };

          window.__mtH11DrillPrev = function(){
            if(!Array.isArray(window.__mtH11DrillDeck) || !window.__mtH11DrillDeck.length) window.__mtH11DrillBuildDeck();
            if(!window.__mtH11DrillDeck || !window.__mtH11DrillDeck.length) return;
            var idx = (typeof window.__mtH11DrillIdx === 'number') ? window.__mtH11DrillIdx : 0;
            var freeLimit = _drillFreeLimit();
            if(!window.__mtH11DrillIsPaid() && idx >= freeLimit) idx = freeLimit - 1;
            if(idx > 0) idx--;
            else idx = window.__mtH11DrillDeck.length - 1;
            window.__mtH11DrillIdx = idx;
            window.__mtH11DrillRenderDeck();
          };

          window.__mtH11DrillFlip = function(){
            var backWrap = document.getElementById('drill-back-wrap');
            if(!backWrap) return;
            backWrap.style.display = (backWrap.style.display === 'none' || backWrap.style.display === '') ? 'block' : 'none';
          };

          window.__mtH11DrillDont = function(){ window.__mtH11DrillNext(); };
          window.__mtH11DrillKnow = function(){ window.__mtH11DrillNext(); };
          window.__mtH11DrillSkip = function(){ window.__mtH11DrillNext(); };
          window.__mtH11DrillReset = function(){
            if(!Array.isArray(window.__mtH11DrillDeck) || !window.__mtH11DrillDeck.length) window.__mtH11DrillBuildDeck();
            var deck = window.__mtH11DrillDeck || [];
            for(var i=deck.length-1;i>0;i--){
              var j=Math.floor(Math.random()*(i+1));
              var t=deck[i]; deck[i]=deck[j]; deck[j]=t;
            }
            window.__mtH11DrillIdx = 0;
            window.__mtH11DrillRenderDeck();
          };

          window.__mtH11MatchPairs = [
            { l: 'Judita', r: 'Marko Marulić' },
            { l: 'Davidijada', r: 'Marko Marulić' },
            { l: 'Novela od Stanca', r: 'Marin Držić' },
            { l: 'Dundo Maroje', r: 'Marin Držić' },
            { l: 'Skup', r: 'Marin Držić' },
            { l: 'Ribanje i ribarsko prigovaranje', r: 'Petar Hektorović' },
            { l: 'Planine', r: 'Petar Zoranić' },
            { l: 'Robinja', r: 'Hanibal Lucić' },
            { l: 'Blažen čas i hip', r: 'Šiško Menčetić' }
          ];
          window.__mtH11MatchSelected = null;
          window.__mtH11MatchDone = 0;

          window.__mtH11MatchInit = function(){
            var board = document.getElementById('mg-board');
            if(!board) return;

            var pairs = Array.isArray(window.__mtH11MatchPairs) ? window.__mtH11MatchPairs : [];
            var score = document.getElementById('mg-score');
            var total = document.getElementById('mg-total');

            window.__mtH11MatchDone = 0;
            window.__mtH11MatchSelected = null;
            if(score) score.textContent = '0';
            if(total) total.textContent = String(pairs.length);

            var left = [];
            var right = [];
            for(var i=0;i<pairs.length;i++){
              left.push({ text: String(pairs[i].l || ''), key: i, side: 'l' });
              right.push({ text: String(pairs[i].r || ''), key: i, side: 'r' });
            }

            for(var j=right.length-1;j>0;j--){
              var k = Math.floor(Math.random() * (j + 1));
              var t = right[j]; right[j] = right[k]; right[k] = t;
            }

            var html = '<div class="mg-col"><div class="mg-col-label">Djelo</div>';
            for(var li=0;li<left.length;li++){
              html += '<button class="mg-item" data-key="' + left[li].key + '" data-side="l">' + left[li].text + '</button>';
            }
            html += '</div><div class="mg-col"><div class="mg-col-label">Autor</div>';
            for(var ri=0;ri<right.length;ri++){
              html += '<button class="mg-item" data-key="' + right[ri].key + '" data-side="r">' + right[ri].text + '</button>';
            }
            html += '</div>';
            board.innerHTML = html;

            var doneMsg = document.getElementById('mg-done');
            if(doneMsg && doneMsg.parentNode) doneMsg.parentNode.removeChild(doneMsg);

            var items = board.querySelectorAll('.mg-item');
            for(var ii=0;ii<items.length;ii++){
              (function(el){
                el.addEventListener('click', function(){ window.__mtH11MatchClick(el); });
              })(items[ii]);
            }
          };

          window.__mtH11MatchClick = function(el){
            if(!el || el.classList.contains('ok')) return;

            if(!window.__mtH11MatchSelected){
              window.__mtH11MatchSelected = el;
              el.classList.add('sel');
              return;
            }

            if(window.__mtH11MatchSelected === el){
              el.classList.remove('sel');
              window.__mtH11MatchSelected = null;
              return;
            }

            if(window.__mtH11MatchSelected.dataset.side === el.dataset.side){
              window.__mtH11MatchSelected.classList.remove('sel');
              window.__mtH11MatchSelected = el;
              el.classList.add('sel');
              return;
            }

            if(window.__mtH11MatchSelected.dataset.key === el.dataset.key){
              window.__mtH11MatchSelected.classList.remove('sel');
              window.__mtH11MatchSelected.classList.add('ok');
              el.classList.add('ok');
              window.__mtH11MatchDone++;
              if(typeof soundOk === 'function'){ try { soundOk(); } catch(e){} }

              var score = document.getElementById('mg-score');
              if(score) score.textContent = String(window.__mtH11MatchDone);
              window.__mtH11MatchSelected = null;

              if(window.__mtH11MatchDone === window.__mtH11MatchPairs.length){
                if(typeof soundDone === 'function'){ try { soundDone(); } catch(e){} }
                setTimeout(function(){
                  var board = document.getElementById('mg-board');
                  if(!board) return;
                  var existing = document.getElementById('mg-done');
                  if(existing && existing.parentNode) existing.parentNode.removeChild(existing);
                  board.insertAdjacentHTML('afterend', '<div class="mg-done" id="mg-done">🏆 SVI PAROVI SPARENI!</div>');
                  setTimeout(function(){
                    var d = document.getElementById('mg-done');
                    if(d && d.parentNode) d.parentNode.removeChild(d);
                  }, 3500);
                }, 250);
              }
              return;
            }

            el.classList.add('err');
            window.__mtH11MatchSelected.classList.add('err');
            if(typeof soundNg === 'function'){ try { soundNg(); } catch(e){} }
            var selected = window.__mtH11MatchSelected;
            setTimeout(function(){
              if(selected) selected.classList.remove('err', 'sel');
              el.classList.remove('err');
            }, 450);
            window.__mtH11MatchSelected = null;
          };

          window.mgClick = function(el){
            return window.__mtH11MatchClick(el);
          };
          try { mgClick = window.mgClick; } catch(e){}

          if(typeof window.mgInit !== 'function'){
            window.mgInit = function(){
              window.__mtH11MatchInit();
            };
            try { mgInit = window.mgInit; } catch(e){}
          }

          window.__mtH11DrillVisualHandlers = true;
        }
        actions.innerHTML =
          '<button id="drill-prev" style="display:none" onclick="__mtH11DrillPrev()"></button>' +
          '<button id="drill-next" style="display:none" onclick="__mtH11DrillNext()"></button>' +
          '<button class="fcb dont" onclick="__mtH11DrillDont()">✗ Ne znam</button>' +
          '<button class="fcb know" onclick="__mtH11DrillKnow()">✓ Znam</button>' +
          '<button class="fcb" onclick="__mtH11DrillSkip()">Preskoči →</button>' +
          '<button class="fcb primary" onclick="__mtH11DrillReset()">🔁 Reset</button>';

        try{
          window.__mtH11DrillBuildDeck();
          window.__mtH11DrillIdx = 0;
          window.__mtH11DrillRenderDeck();
          window.__mtH11MatchInit();
        }catch(e){}
      }

      var hasLegacyDrillShell = !!(
        head ||
        card ||
        actions ||
        fcHost.querySelector('#drill-front') ||
        fcHost.querySelector('#drill-back') ||
        fcHost.querySelector('#drill-count')
      );

      var stats = null;
      var statsNodes = fcHost.querySelectorAll('.fc-stats');
      if(hasLegacyDrillShell){
        stats = statsNodes.length ? statsNodes[0] : null;
        for(var st=1; st<statsNodes.length; st++){
          if(statsNodes[st].parentNode) statsNodes[st].parentNode.removeChild(statsNodes[st]);
        }
        if(!stats){
          stats = document.createElement('div');
          stats.className = 'fc-stats';
          stats.innerHTML = '<span>točno: <b id="fc-right">0</b></span><span>krivo: <i id="fc-wrong">0</i></span>';
        }
      } else {
        for(var rm=0; rm<statsNodes.length; rm++){
          if(statsNodes[rm].parentNode) statsNodes[rm].parentNode.removeChild(statsNodes[rm]);
        }
      }

      if(head) fcHost.insertBefore(head, fcHost.firstChild);
      if(card) fcHost.appendChild(card);
      if(actions) fcHost.appendChild(actions);
      if(stats) fcHost.appendChild(stats);
    }

    var keep = [tags, box, sec1, fcHost, sec2, mgIntro, pgHost, nav];
    var kids = Array.prototype.slice.call(layer.children);
    for(var k=0;k<kids.length;k++){
      var node = kids[k];
      if(keep.indexOf(node) !== -1) continue;
      if(node && node.parentNode === layer) node.parentNode.removeChild(node);
    }
  }

  function _normalizeCheckpointLayer(){
    if(!enableLegacyPracticeCompat) return;
    var layer = document.getElementById('l7');
    if(!layer || !layer.children) return;

    function _ensureCheckpointVisualParityStyle(){
      var styleNode = layer.querySelector('style[data-mt-cp-visual-parity="1"]');
      if(!styleNode){
        styleNode = document.createElement('style');
        styleNode.setAttribute('data-mt-cp-visual-parity', '1');
      }
      styleNode.textContent =
        '#l7 .cp-grid{display:flex;flex-direction:column;gap:8px;margin:18px 0 24px}' +
        '#l7 .cp-item{display:flex;gap:12px;align-items:flex-start;padding:12px 14px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);cursor:pointer;transition:.2s}' +
        '#l7 .cp-item:hover{border-color:var(--bd-br)}' +
        '#l7 .cp-box{width:24px;height:24px;border-radius:6px;border:2px solid var(--bdl);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:14px;color:transparent;transition:all .2s;background:var(--inp)}' +
        '#l7 .cp-item.done{border-color:var(--bd-g);background:linear-gradient(135deg,var(--dim-g),rgba(58,201,119,.02))}' +
        '#l7 .cp-item.done .cp-box{background:var(--green);border-color:var(--green);color:#0F0605;font-weight:700}' +
        '#l7 .cp-summary{display:flex;justify-content:space-between;align-items:center;padding:18px 22px;background:linear-gradient(135deg,var(--dim-go),rgba(232,201,122,.03));border:1px solid var(--bd-go);border-radius:var(--r3);margin:20px 0 24px}' +
        '#l7 .cp-sum-txt{font-family:var(--serif);font-size:14.5px;color:var(--t1)}' +
        '#l7 .cp-sum-txt b{color:var(--gold)}' +
        '#l7 .cp-sum-pct{font-family:var(--display);font-size:20px;font-weight:700;color:var(--gold)}' +
        '#l7 .cp-final{display:none;padding:18px 22px;background:linear-gradient(135deg,var(--dim-g),rgba(58,201,119,.04));border:1px solid var(--bd-g);border-radius:var(--r3);text-align:center;margin:20px 0}' +
        '#l7 .cp-final-ico{font-size:28px;margin-bottom:6px}' +
        '#l7 .cp-final-title{font-family:var(--display);font-size:16px;color:var(--green-l);font-weight:700;margin-bottom:4px}' +
        '#l7 .cp-final-msg{font-family:var(--serif);font-size:13.5px;color:var(--t2)}' +
        '#l7 .minirev{margin:20px 0 24px;padding:0;background:var(--card);border:1px solid var(--bd-go);border-radius:var(--r3);overflow:hidden}' +
        '#l7 .minirev-head{padding:14px 18px;background:linear-gradient(135deg,var(--dim-go),rgba(232,201,122,.04));border-bottom:1px solid var(--bd-go);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px}' +
        '#l7 .minirev-ttl{font-family:var(--display);font-size:13.5px;font-weight:700;color:var(--gold);letter-spacing:1px;text-transform:uppercase}' +
        '#l7 .minirev-time{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:1.5px;padding:3px 9px;background:var(--ele);border:1px solid var(--bdm);border-radius:10px}' +
        '#l7 .minirev-body{padding:18px}' +
        '#l7 .minirev-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:14px}' +
        '#l7 .minirev-card{padding:12px 14px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2)}' +
        '#l7 .minirev-card-lbl{font-family:var(--mono);font-size:9.5px;color:var(--bronze-l);letter-spacing:1.5px;font-weight:700;text-transform:uppercase;margin-bottom:5px}' +
        '#l7 .minirev-card-val{font-family:var(--serif);font-size:13.5px;color:var(--t1);line-height:1.5}' +
        '#l7 .minirev-card-val b{color:var(--gold)}' +
        '#l7 .minirev-quotes{padding:12px 14px;background:var(--sur);border-left:3px solid var(--bd-go);border-radius:0 var(--r2) var(--r2) 0;font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t1)}' +
        '#l7 .minirev-quotes ol{margin:0;padding-left:20px}' +
        '#l7 .minirev-quotes li{margin:4px 0;font-style:italic}' +
        '#l7 .minirev-quotes li b{font-style:normal;color:var(--gold)}' +
        '#l7 .exam-prompt{margin:18px 0 22px;padding:20px 22px;background:linear-gradient(135deg,var(--dim-r) 0%,rgba(224,82,82,.04) 100%);border:1px solid var(--bd-r);border-radius:var(--r3);position:relative}' +
        '#l7 .exam-prompt::before{content:"NCVVO · SKOLSKI ESEJ";position:absolute;top:-9px;left:18px;padding:2px 10px;background:var(--bg);color:var(--red-l);font-family:var(--mono);font-size:9px;letter-spacing:2px;font-weight:700;border:1px solid var(--bd-r);border-radius:3px}' +
        '#l7 .exam-prompt-ttl{font-family:var(--display);font-size:14.5px;font-weight:700;color:var(--red-l);letter-spacing:.8px;margin-bottom:10px}' +
        '#l7 .exam-prompt-task{font-family:var(--serif);font-size:14.5px;line-height:1.6;color:var(--t1);font-style:italic;padding:14px 16px;background:var(--card);border-left:3px solid var(--red);border-radius:0 var(--r2) var(--r2) 0;margin-bottom:14px}' +
        '#l7 .exam-prompt-tips{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-top:14px}' +
        '#l7 .exam-tip{padding:10px 12px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.55}' +
        '#l7 .exam-tip b{display:block;font-family:var(--mono);font-size:9px;letter-spacing:1px;text-transform:uppercase;color:var(--bronze-l);margin-bottom:4px}' +
        '@media(max-width:640px){#l7 .minirev-head{padding:12px 14px}#l7 .minirev-body{padding:14px}#l7 .minirev-card-val{font-size:13px}#l7 .cp-summary{padding:12px 14px}}';
      if(styleNode.parentNode !== layer) layer.appendChild(styleNode);
      return styleNode;
    }

    function _ensureNode(cls, html){
      var created = false;
      var node = layer.querySelector('.' + cls + '[data-mt-cp-scaffold="1"]') || layer.querySelector('.' + cls);
      if(!node){
        node = document.createElement('div');
        node.className = cls;
        created = true;
      }
      if(node.parentNode !== layer) layer.appendChild(node);
      node.setAttribute('data-mt-cp-scaffold', '1');
      // Preserve chapter-authored markup if it already exists.
      if(created && typeof html === 'string') node.innerHTML = html;
      node.style.display = '';
      return node;
    }

    var tags = _ensureNode('tags',
      '<span class="pill p-g">završetak poglavlja</span>' +
      '<span class="pill p-go">self-check</span>'
    );

    var nextCode = chapterNum + 1;
    var nextLabel = nextCode > 0 ? ('H' + String(nextCode).padStart(2, '0') + ' · sljedeće poglavlje →') : 'Sljedeće poglavlje →';

    var box = _ensureNode('box-int',
      '<div class="box-int-lbl">✅ Provjera — što zaista znaš?</div>' +
      '<div class="box-int-txt">Označi stavke koje si <em>stvarno</em> usvojio. Ne žuri — ako nešto nisi siguran, vrati se na odgovarajući tab.</div>'
    );

    var summary = _ensureNode('cp-summary',
      '<div class="cp-sum-txt">Napredak · <b id="cp-done">0</b> / 10 stavki</div>' +
      '<div class="cp-actions" style="margin-top:18px;display:flex;gap:10px;justify-content:center">' +
        '<button type="button" class="fcb" onclick="cpReset()" style="padding:8px 16px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:8px;color:var(--t2,#c5b8aa);font-family:var(--mono,monospace);font-size:11px;letter-spacing:0.8px;cursor:pointer">↩ Resetiraj</button>' +
        '<button type="button" class="fcb primary" onclick="sw(6)" style="padding:8px 16px;background:var(--gold,#e9b446);color:#0F0605;border:none;border-radius:8px;font-family:var(--mono,monospace);font-size:11px;font-weight:800;letter-spacing:0.8px;cursor:pointer">🧠 Idi na kviz</button>' +
      '</div>' +
      '<div class="cp-sum-pct" id="cp-pct">0%</div>'
    );

    var core =
      layer.querySelector('.cp-wrap[data-mt-cp-scaffold="1"]') ||
      layer.querySelector('.cp-wrap') ||
      layer.querySelector('.pro-gate[data-mt-cp-scaffold="1"]') ||
      layer.querySelector('.pro-gate');
    if(!core){
      core = document.createElement('div');
      core.className = 'cp-wrap';
      layer.appendChild(core);
    }
    if(String(core.className || '').indexOf('cp-wrap') === -1){
      core.className = (String(core.className || '') + ' cp-wrap').trim();
    }
    core.setAttribute('data-mt-cp-scaffold', '1');
    core.style.display = '';
    core.style.maxHeight = '';
    core.style.minHeight = '';
    core.style.overflow = '';

    var checkpointStyles = Array.prototype.slice.call(layer.querySelectorAll('style')).filter(function(s){
      var txt = String((s && s.textContent) || '');
      return txt.indexOf('.minirev') !== -1 || txt.indexOf('.exam-prompt') !== -1;
    });
    var parityStyle = _ensureCheckpointVisualParityStyle();
    if(parityStyle && checkpointStyles.indexOf(parityStyle) === -1) checkpointStyles.push(parityStyle);
    var miniRev = layer.querySelector('.minirev');
    var examPrompt = layer.querySelector('.exam-prompt');

    var grid = document.getElementById('cp-grid') || document.getElementById('cp-list') || layer.querySelector('.cp-grid');
    if(!grid){
      grid = document.createElement('div');
      grid.id = 'cp-grid';
      grid.className = 'cp-grid';
    }
    if(grid.parentNode !== core) core.appendChild(grid);

    var final = document.getElementById('cp-final') || layer.querySelector('.cp-final');
    if(!final){
      final = document.createElement('div');
      final.id = 'cp-final';
      final.className = 'cp-final';
      final.innerHTML =
        '<div class="cp-final-ico">🎉</div>' +
        '<div class="cp-final-title">Checkpoint dovršen!</div>' +
        '<div class="cp-final-msg">Odlično — nastavi na sljedeće poglavlje.</div>';
    }
    final.id = 'cp-final';
    if(String(final.className || '').indexOf('cp-final') === -1){
      final.className = (String(final.className || '') + ' cp-final').trim();
    }
    final.setAttribute('data-mt-cp-scaffold', '1');
    if(final.parentNode !== layer) layer.appendChild(final);
    final.style.display = '';

    var nav = _ensureNode('nav-row',
      '<span class="nb" onclick="sw(6)">← Kviz</span>' +
      '<span class="nb off">' + nextLabel + '</span>'
    );
    nav.style.marginTop = '30px';

    layer.insertBefore(tags, layer.firstChild);
    layer.insertBefore(box, tags.nextSibling);
    layer.insertBefore(summary, box.nextSibling);
    layer.insertBefore(core, summary.nextSibling);
    if(checkpointStyles.length){
      for(var cs=0; cs<checkpointStyles.length; cs++){
        var sNode = checkpointStyles[cs];
        if(sNode && sNode.parentNode === layer) layer.insertBefore(sNode, core);
      }
    }
    if(miniRev && miniRev.parentNode === layer) layer.insertBefore(miniRev, core);
    if(examPrompt && examPrompt.parentNode === layer) layer.insertBefore(examPrompt, core);
    layer.insertBefore(final, core.nextSibling);
    layer.insertBefore(nav, final.nextSibling);

    var keep = [tags, box, summary, core, final, nav];
    if(miniRev) keep.push(miniRev);
    if(examPrompt) keep.push(examPrompt);
    if(checkpointStyles.length){
      for(var ks=0; ks<checkpointStyles.length; ks++) keep.push(checkpointStyles[ks]);
    }
    var kids = Array.prototype.slice.call(layer.children);
    for(var i=0;i<kids.length;i++){
      var node = kids[i];
      if(keep.indexOf(node) !== -1) continue;
      if(node && node.parentNode === layer) node.parentNode.removeChild(node);
    }
  }

  function applyDrillGateCompat(){
    if(!enableMatchingCompat) return;
    var lock = document.getElementById('h11-drill-lock') || document.querySelector('[id$="-drill-lock"]') || document.getElementById('drill-lock');
    var body = document.getElementById('h11-drill-body') || document.querySelector('[id$="-drill-body"]') || document.getElementById('drill-body');
    // H01-H10 behavior: free users can enter drill and practice, paywall appears after free limit.
    if(lock) lock.style.display = 'none';
    if(body) body.style.display = 'block';
    if(typeof window.fcInit === 'function'){
      try{ window.fcInit(); }catch(e){}
    }
    if(typeof window.mgInit === 'function'){
      try{
        var mgDyn = document.getElementById('mg-dynamic');
        if(mgDyn && mgDyn.dataset && !mgDyn.dataset.init){
          mgDyn.dataset.init = '1';
          // Legacy chapters often default to "easy" (4 pairs), which makes
          // the fade look abrupt versus H10/H11. Prefer fuller levels first.
          try{ window.mgInit('hard'); }
          catch(e1){
            try{ window.mgInit('medium'); }
            catch(e2){ window.mgInit('easy'); }
          }
        }
      }catch(e){}
    }
    if(typeof window.drillBuildData === 'function'){
      try{ window.drillBuildData(); }catch(e){}
    }
    _enforceDrillCardLimit20();
    if(typeof window.drillRender === 'function'){
      try{ window.drillRender(); }catch(e){}
      _enforceDrillCardLimit20();
    }

    if(typeof window.__mtLegacyBoardClick !== 'function'){
      window.__mtLegacyBoardClick = function(el){
        if(!el || !el.classList) return;
        if(el.classList.contains('ok') || el.classList.contains('err')) return;

        var board = (el.closest && el.closest('#mg-board')) || document.getElementById('mg-board');
        if(!board) return;

        var selected = window.__mtLegacyBoardSelected || null;
        if(!selected){
          el.classList.add('sel');
          window.__mtLegacyBoardSelected = el;
          return;
        }

        if(selected === el){
          el.classList.remove('sel');
          window.__mtLegacyBoardSelected = null;
          return;
        }

        if(String(selected.getAttribute('data-side') || '') === String(el.getAttribute('data-side') || '')){
          selected.classList.remove('sel');
          el.classList.add('sel');
          window.__mtLegacyBoardSelected = el;
          return;
        }

        if(String(selected.getAttribute('data-id') || '') === String(el.getAttribute('data-id') || '')){
          selected.classList.remove('sel');
          el.classList.remove('sel');
          selected.classList.add('ok');
          el.classList.add('ok');
          window.__mtLegacyBoardSelected = null;

          var score = document.getElementById('mg-score');
          if(score){
            var done = board.querySelectorAll('.mg-col:first-child .mg-item.ok').length;
            score.textContent = String(done);
          }

          var total = board.querySelectorAll('.mg-col:first-child .mg-item').length;
          var doneNow = board.querySelectorAll('.mg-col:first-child .mg-item.ok').length;
          if(total && doneNow === total){
            var existing = document.getElementById('mg-done');
            if(!existing){
              board.insertAdjacentHTML('afterend', '<div class="mg-done" id="mg-done">🏆 SVI PAROVI SPARENI!</div>');
              setTimeout(function(){
                var d = document.getElementById('mg-done');
                if(d && d.parentNode) d.parentNode.removeChild(d);
              }, 3500);
            }
          }
          return;
        }

        selected.classList.add('err');
        el.classList.add('err');
        var prev = selected;
        setTimeout(function(){
          if(prev) prev.classList.remove('err', 'sel');
          el.classList.remove('err', 'sel');
        }, 450);
        window.__mtLegacyBoardSelected = null;
      };
    }

    if(typeof window.__mtInitLegacyBoardFromDynamic !== 'function'){
      window.__mtInitLegacyBoardFromDynamic = function(host){
        var root = host || document;
        var board = root.querySelector ? root.querySelector('#mg-board') : null;
        var dyn = root.querySelector ? root.querySelector('#mg-dynamic') : null;
        if(!board || !dyn) return false;

        var left = dyn.querySelectorAll('#mg-left .mg-item');
        var right = dyn.querySelectorAll('#mg-right .mg-item');
        if(!left.length || !right.length) return false;

        var esc = function(s){
          return String(s || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
        };

        var html = '<div class="mg-col"><div class="mg-col-label">Pojam</div>';
        for(var i=0; i<left.length; i++){
          var li = left[i];
          var lid = li.getAttribute('data-id') || String(i);
          html += '<button class="mg-item" data-id="' + esc(lid) + '" data-side="l">' + esc(li.textContent || '') + '</button>';
        }
        html += '</div><div class="mg-col"><div class="mg-col-label">Par</div>';
        for(var j=0; j<right.length; j++){
          var ri = right[j];
          var rid = ri.getAttribute('data-id') || String(j);
          html += '<button class="mg-item" data-id="' + esc(rid) + '" data-side="r">' + esc(ri.textContent || '') + '</button>';
        }
        html += '</div>';
        board.innerHTML = html;

        var outLeft = board.querySelectorAll('.mg-col:first-child .mg-item');
        var outRight = board.querySelectorAll('.mg-col:last-child .mg-item');
        for(var ol=0; ol<outLeft.length; ol++){
          var olId = outLeft[ol].getAttribute('data-id') || '';
          var srcL = dyn.querySelector('#mg-left .mg-item[data-id="' + olId + '"]');
          if(!srcL || !srcL.classList) continue;
          if(srcL.classList.contains('selected')) outLeft[ol].classList.add('sel');
          if(srcL.classList.contains('matched')) outLeft[ol].classList.add('ok');
          if(srcL.classList.contains('wrong')) outLeft[ol].classList.add('err');
        }
        for(var orr=0; orr<outRight.length; orr++){
          var orId = outRight[orr].getAttribute('data-id') || '';
          var srcR = dyn.querySelector('#mg-right .mg-item[data-id="' + orId + '"]');
          if(!srcR || !srcR.classList) continue;
          if(srcR.classList.contains('selected')) outRight[orr].classList.add('sel');
          if(srcR.classList.contains('matched')) outRight[orr].classList.add('ok');
          if(srcR.classList.contains('wrong')) outRight[orr].classList.add('err');
        }

        var items = board.querySelectorAll('.mg-item');
        for(var bi=0; bi<items.length; bi++){
          (function(btn){
            btn.addEventListener('click', function(){
              if(typeof window.__mtLegacyBoardClick === 'function') window.__mtLegacyBoardClick(btn);
            });
          })(items[bi]);
        }

        var score = document.getElementById('mg-score');
        var total = document.getElementById('mg-total');
        var done = board.querySelectorAll('.mg-col:first-child .mg-item.ok').length;
        if(score) score.textContent = String(done);
        if(total) total.textContent = String(outLeft.length);

        var dynKids = dyn.children || [];
        for(var dk=0; dk<dynKids.length; dk++){
          if(dynKids[dk] && dynKids[dk].style) dynKids[dk].style.display = 'none';
        }
        dyn.style.display = 'none';
        board.style.display = '';
        board.setAttribute('data-mt-legacy-board', '1');
        return true;
      };
    }

    // Chapters like H17/H18 can expose matching directly in #l5 without a
    // .pro-gate wrapper. Convert legacy #mg-dynamic to #mg-board in-place.
    var rootDyn = document.getElementById('mg-dynamic');
    if(rootDyn){
      var rootBoard = document.getElementById('mg-board');
      if(!rootBoard && rootDyn.parentNode){
        rootBoard = document.createElement('div');
        rootBoard.id = 'mg-board';
        rootBoard.className = 'mg-grid';
        rootDyn.parentNode.insertBefore(rootBoard, rootDyn);
      }
      if(rootBoard){
        try{ window.__mtInitLegacyBoardFromDynamic(document); }catch(e){}
      }
    }

    // Ensure matching gate clipping behaves like H10 even in chapters
    // that don't set body[data-tier] / applyGateState natively.
    var paid = _isPaidTier();
    var hosts = document.querySelectorAll('#l5 .pro-gate');
    for(var h=0; h<hosts.length; h++){
      var host = hosts[h];
      if(!host || !host.style) continue;
      host.style.overflow = 'hidden';

      // Legacy render path writes cards into #mg-dynamic while scaffold keeps
      // an empty #mg-board in front; hide empty board to avoid vertical offset.
      var board = host.querySelector('#mg-board');
      var dyn = host.querySelector('#mg-dynamic');
      if(!board && dyn && dyn.parentNode){
        board = document.createElement('div');
        board.id = 'mg-board';
        board.className = 'mg-grid';
        dyn.parentNode.insertBefore(board, dyn);
      }
      if(board && dyn){
        var boardHasContent = !!board.querySelector('.mg-grid, .mg-col, .mg-item') ||
          !!String(board.textContent || '').trim();

        if(!boardHasContent){
          try{
            if(window.__mtInitLegacyBoardFromDynamic(host)) boardHasContent = true;
          }catch(e){}
        }

        board.style.display = boardHasContent ? '' : 'none';
        if(boardHasContent && dyn.style) dyn.style.display = 'none';

        // If legacy dynamic mode is active, normalize spacing/typography so
        // gated preview rows align with H10 scaffold geometry.
        if(!boardHasContent){
          var legacyGrid = dyn.querySelector('.mg-grid');
          if(legacyGrid && legacyGrid.style){
            legacyGrid.style.gap = '8px';
            legacyGrid.style.rowGap = '8px';
            legacyGrid.style.columnGap = '8px';
            legacyGrid.style.transform = 'translateY(1px)';
            legacyGrid.style.maxHeight = '';
            legacyGrid.style.overflow = '';
          }
          var legacyItems = dyn.querySelectorAll('.mg-item');
          for(var li=0; li<legacyItems.length; li++){
            var legacyItem = legacyItems[li];
            if(!legacyItem || !legacyItem.style) continue;
            legacyItem.style.fontSize = '14px';
            legacyItem.style.lineHeight = '1.4';
            legacyItem.style.paddingTop = '12px';
            legacyItem.style.paddingBottom = '12px';
          }

          // Keep only the interactive matching grid in preview; legacy helper
          // controls (difficulty/tips) should not appear in H10-like gated UI.
          var dynKids = dyn.children || [];
          for(var dk=0; dk<dynKids.length; dk++){
            var dynKid = dynKids[dk];
            if(!dynKid || dynKid === legacyGrid) continue;
            var dynKidId = dynKid.id || '';
            var dynKidCls = String(dynKid.className || '');
            if(dynKidId === 'mg-status' || dynKidCls.indexOf('mg-status') !== -1) continue;
            if(dynKid.style) dynKid.style.display = 'none';
          }

          // Legacy chapters can leak extra matching tip cards into the same
          // gated host; hide them to match H10/H11 unified layout.
          var hostTips = host.querySelectorAll('.box-signal');
          for(var ht=0; ht<hostTips.length; ht++){
            if(hostTips[ht] && hostTips[ht].style) hostTips[ht].style.display = 'none';
          }

          // Some legacy tips can remain outside host as siblings in #l5.
          if(!paid){
            var layerTips = document.querySelectorAll('#l5 .box-signal');
            for(var lt=0; lt<layerTips.length; lt++){
              if(layerTips[lt] && layerTips[lt].style) layerTips[lt].style.display = 'none';
            }
          }
        }
      }

      // Legacy chapters can inject a top status strip above the matching grid,
      // which shifts rows downward and breaks H10-like preview cut-off.
      var legacyStatus = host.querySelector('#mg-status, .mg-status');
      if(legacyStatus && legacyStatus.style) legacyStatus.style.display = 'none';

      var preview = '';
      try{
        preview = (host.style.getPropertyValue('--gate-preview-height') || '').trim();
        if(!preview && typeof getComputedStyle === 'function'){
          preview = (getComputedStyle(host).getPropertyValue('--gate-preview-height') || '').trim();
        }
      }catch(e){ preview = ''; }
      if(!preview) preview = '360px';

      host.style.maxHeight = paid ? 'none' : preview;
      host.style.minHeight = paid ? '' : preview;

      var ov = host.querySelector('.pro-gate-overlay');
      if(ov){
        ov.setAttribute('data-gate-state', paid ? 'hidden' : 'visible');
        var fade = ov.querySelector('.pro-gate-fade');
        if(fade && fade.style){
          fade.style.height = '';
          fade.style.backgroundImage = '';
        }
      }
    }
  }

  function _enforceDrillCardLimit20(){
    var limit = 20;
    if(Array.isArray(window.DRILL_DATA) && window.DRILL_DATA.length > limit){
      window.DRILL_DATA = window.DRILL_DATA.slice(0, limit);
      try{ DRILL_DATA = window.DRILL_DATA; }catch(e){}
    }
    if(typeof window.drillIdx === 'number' && window.drillIdx >= limit) window.drillIdx = 0;
    try{ if(typeof drillIdx === 'number' && drillIdx >= limit) drillIdx = 0; }catch(e){}

    var count = document.getElementById('drill-count');
    if(count && Array.isArray(window.DRILL_DATA) && window.DRILL_DATA.length){
      var idx = (typeof window.drillIdx === 'number') ? window.drillIdx : 0;
      if(idx < 0) idx = 0;
      if(idx > window.DRILL_DATA.length - 1) idx = 0;
      count.textContent = (idx + 1) + ' / ' + window.DRILL_DATA.length;
    }
  }

  function _patchDrillCardLimit(){
    if(!enableMatchingCompat) return;
    if(window.__mtDrillCardLimitPatch) return;

    if(typeof window.drillBuildData === 'function'){
      var _origBuild = window.drillBuildData;
      window.drillBuildData = function(){
        var out = _origBuild.apply(this, arguments);
        _enforceDrillCardLimit20();
        return out;
      };
      try{ drillBuildData = window.drillBuildData; }catch(e){}
    }

    if(typeof window.drillRender === 'function'){
      var _origRender = window.drillRender;
      window.drillRender = function(){
        _enforceDrillCardLimit20();
        var out = _origRender.apply(this, arguments);
        _enforceDrillCardLimit20();
        return out;
      };
      try{ drillRender = window.drillRender; }catch(e){}
    }

    window.__mtDrillCardLimitPatch = true;
    _enforceDrillCardLimit20();
  }

  function _drillProgressIndex(){
    if(typeof window.fcIdx === 'number') return window.fcIdx;
    if(typeof window.drillIdx === 'number') return window.drillIdx;
    var count = document.getElementById('drill-count');
    if(count){
      var nums = String(count.textContent || '').match(/[0-9]+/g);
      if(nums && nums.length >= 2){
        var idx = parseInt(nums[0], 10) - 1;
        if(!isNaN(idx)) return Math.max(0, idx);
      }
    }
    if(typeof window.__mtDrillActionCount === 'number') return window.__mtDrillActionCount;
    return 0;
  }

  function _drillFreeLimit(){
    var lim = (typeof FC_FREE_LIMIT !== 'undefined' && Number(FC_FREE_LIMIT) > 0) ? Number(FC_FREE_LIMIT) : 5;
    return lim;
  }

  function _maybeShowDrillPaywall(){
    if(_isPaidTier()) return false;
    if(document.getElementById('hrv-paywall-modal')) return true;
    if(_drillProgressIndex() < _drillFreeLimit()) return false;
    _showQuizPaywall();
    return true;
  }

  function _patchDrillFreeLimit(){
    if(!enableMatchingCompat) return;
    if(window.__mtDrillFreeLimitPatch) return;
    var wrappedAny = false;

    function wrapFn(name){
      if(typeof window[name] !== 'function') return false;
      var orig = window[name];
      window[name] = function(){
        if(_maybeShowDrillPaywall()) return;
        var out = orig.apply(this, arguments);
        window.__mtDrillActionCount = (window.__mtDrillActionCount || 0) + 1;
        setTimeout(_maybeShowDrillPaywall, 0);
        return out;
      };
      try{ eval(name + ' = window.' + name); }catch(e){}
      wrappedAny = true;
      return true;
    }

    wrapFn('fcMark');
    wrapFn('fcSkip');
    wrapFn('fcNav');
    wrapFn('mgClick');
    wrapFn('drillNext');
    if(wrappedAny) window.__mtDrillFreeLimitPatch = true;
  }

  window.applyDrillGate = applyDrillGateCompat;
  if(typeof window.drillFlip !== 'function' && typeof window.fcFlip === 'function') window.drillFlip = window.fcFlip;
  if(typeof window.drillNext !== 'function' && typeof window.fcSkip === 'function') window.drillNext = window.fcSkip;
  if(typeof window.drillPrev !== 'function' && typeof window.fcMark === 'function') window.drillPrev = window.fcMark;

  migrateLegacyCheckpointState();
  normalizePracticeTabs();
  ensureCheckpointDom();
  ensureQuizCompatAlias();
  _normalizeDrillLayer();
  _normalizeCheckpointLayer();
  _patchQuizFreeLimit();
  normalizeLangProLocks();
  setTimeout(normalizeLangProLocks, 60);
  if(enableMatchingCompat){
    _patchDrillFreeLimit();
    _patchDrillCardLimit();
    if(!window.__mtDrillFreeLimitPatch){
      setTimeout(_patchDrillFreeLimit, 80);
      setTimeout(_patchDrillFreeLimit, 220);
      setTimeout(_patchDrillFreeLimit, 500);
    }
    if(!window.__mtDrillCardLimitPatch){
      setTimeout(_patchDrillCardLimit, 80);
      setTimeout(_patchDrillCardLimit, 220);
      setTimeout(_patchDrillCardLimit, 500);
    }
  }

  setTimeout(function(){
    if(hasNativeCheckpoint) refreshNativeCheckpoint();
    else {
      cpLoad();
      cpUpdate();
    }
    if(enableMatchingCompat) applyDrillGateCompat();
    if(enableLegacyPracticeCompat) _normalizeDrillLayer();
    _normalizeCheckpointLayer();
  }, 0);

  function _patchSwCompat(){
    if(window.__mtUnifiedSwPatch) return true;
    if(typeof window.sw !== 'function') return false;

    var _sw = window.sw;
    window.sw = function(i){
      var out = _sw(i);
      setTimeout(function(){
        if(i===5){
          if(enableMatchingCompat){
            applyDrillGateCompat();
            setTimeout(applyDrillGateCompat, 80);
            setTimeout(applyDrillGateCompat, 220);
          }
          if(enableLegacyPracticeCompat){
            _normalizeDrillLayer();
            setTimeout(_normalizeDrillLayer, 80);
            setTimeout(_normalizeDrillLayer, 220);
          }
        }
        if(enableMatchingCompat && i===5) _maybeShowDrillPaywall();
        if(enableLegacyPracticeCompat && i===6 && QUIZ_STD.length){
          // Force unified embedded quiz renderer (H01-H10 visual parity) over chapter-native variants.
          qzRenderIntro();
          setTimeout(qzRenderIntro, 60);
          setTimeout(_cleanupUnifiedQuizLayer, 90);
        }
        if(enableLegacyPracticeCompat && (i===7 || i===5)){
          if(hasNativeCheckpoint) refreshNativeCheckpoint();
          else {
            cpLoad();
            cpUpdate();
          }
          _normalizeCheckpointLayer();
          setTimeout(_normalizeCheckpointLayer, 80);
        }
        if(enableLegacyPracticeCompat && (i===5 || i===6 || i===7)) normalizePracticeTabs();
      }, 0);
      return out;
    };
    try{ sw = window.sw; }catch(e){}
    window.__mtUnifiedSwPatch = true;
    return true;
  }

  if(!_patchSwCompat()){
    setTimeout(_patchSwCompat, 0);
    setTimeout(_patchSwCompat, 60);
    setTimeout(_patchSwCompat, 180);
    setTimeout(_patchSwCompat, 400);
  }
})();`;
}

function getLocalTier() {
  try { return localStorage.getItem('mt.tier') || localStorage.getItem('mt.user.tier') || 'free'; } catch { return 'free'; }
}

function closeHrvPaywall() {
  const m = document.getElementById('hrv-paywall-modal');
  if (m) { m.remove(); document.body.style.overflow = ''; }
}

function showHrvPaywall(type) {
  if (!document.getElementById('hrv-paywall-css')) {
    const s = document.createElement('style');
    s.id = 'hrv-paywall-css';
    s.textContent = PAYWALL_CSS;
    document.head.appendChild(s);
  }
  const existing = document.getElementById('hrv-paywall-modal');
  if (existing) existing.remove();

  const isPro = type === 'ai';
  const isDrillOnly = type === 'drill';

  const featureMap = { ai: '🤖 Pitaj Profesora (AI)', discere: '🎯 Discere Simulator', drill: '⚡ Drill · Kviz · Checkpoint' };
  const feature = featureMap[type] || '⭐ Premium sadržaj';
  const subtitleMap = {
    ai:      'Ovaj feature zahtijeva <strong>Pro</strong> pretplatu.',
    discere: 'Ovaj feature zahtijeva <strong>Standard</strong> ili <strong>Pro</strong> pretplatu.',
    drill:   'Ovaj feature zahtijeva <strong>Standard</strong> pretplatu.',
  };
  const subtitle = subtitleMap[type] || 'Ovaj feature zahtijeva pretplatu.';
  const iconMap = { ai: '💎', discere: '🎯', drill: '⚡' };
  const icon = iconMap[type] || '⭐';

  const standardCard = isPro ? '' :
    `<div class="mt-paywall-tier mt-paywall-tier-standard${isDrillOnly ? ' mt-paywall-tier-recommended' : ''}">
      ${isDrillOnly ? '<div class="mt-paywall-badge">Preporučeno</div>' : ''}
      <div class="mt-paywall-tier-name">⭐ Standard</div>
      <div class="mt-paywall-tier-price">9,99€<span>/mj</span></div>
      <ul class="mt-paywall-tier-features">
        <li>✅ Cijela teorija (12 poglavlja) + kvizovi</li>
        <li>✅ 70 Discere simulatora ispita</li>
        <li>✅ Svi modelni eseji + sažeci</li>
        <li>✅ Neograničeno u Workspace</li>
        <li>✅ Analitika napretka + heatmap</li>
        ${isDrillOnly ? '<li>✅ <strong>Drill, Kviz i Checkpoint tabovi</strong></li>' : '<li>❌ AI Profesor</li>'}
      </ul>
      <button type="button" class="mt-paywall-cta" onclick="window.location.href='/pretplata'">Pretplati se na Standard</button>
    </div>`;

  const proCard = isDrillOnly ? '' :
    `<div class="mt-paywall-tier mt-paywall-tier-pro mt-paywall-tier-recommended">
      <div class="mt-paywall-badge">Preporučeno</div>
      <div class="mt-paywall-tier-name">💎 Pro</div>
      <div class="mt-paywall-tier-price">19,99€<span>/mj</span></div>
      <ul class="mt-paywall-tier-features">
        <li>✅ Sve iz Standard</li>
        <li>✅ <strong>🤖 AI Profesor (chat) — 30/dan</strong></li>
        <li>✅ <strong>🤖 AI Feedback za eseje</strong></li>
        <li>✅ <strong>Personalizirani plan učenja</strong></li>
        <li>✅ <strong>Prijemni priprema</strong></li>
      </ul>
      <button type="button" class="mt-paywall-cta" onclick="window.location.href='/pretplata'">Pretplati se na Pro</button>
    </div>`;

  const modal = document.createElement('div');
  modal.id = 'hrv-paywall-modal';
  modal.className = 'mt-paywall-overlay';
  modal.innerHTML =
    `<div class="mt-paywall-modal" onclick="event.stopPropagation()">
      <button type="button" class="mt-paywall-close" aria-label="Zatvori">×</button>
      <div class="mt-paywall-header">
        <div class="mt-paywall-icon">${icon}</div>
        <div class="mt-paywall-title">${feature}</div>
        <div class="mt-paywall-subtitle">${subtitle}</div>
      </div>
      <div class="mt-paywall-tiers">
        ${standardCard}
        ${proCard}
      </div>
      <div class="mt-paywall-footer">
        <a href="/pretplata" class="mt-paywall-link">Vidi sve tier opcije →</a>
      </div>
    </div>`;

  modal.querySelector('.mt-paywall-close').addEventListener('click', closeHrvPaywall);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeHrvPaywall(); });
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
}

function patchProGateBtn(btn) {
  if (btn.dataset.paywallPatched) return;
  btn.dataset.paywallPatched = '1';
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    const tier = getLocalTier();
    if (tier === 'standard' || tier === 'pro') {
      // Tier is sufficient — navigate to original href
      const href = btn.getAttribute('href') || btn.dataset.origHref;
      if (href) window.location.href = href;
    } else {
      showHrvPaywall('drill');
    }
  });
}

let _proGateObserver = null;

function patchProGateBtns() {
  // Patch existing buttons
  document.querySelectorAll('a.pro-gate-btn, button.pro-gate-btn').forEach(patchProGateBtn);

  // Watch for dynamically injected ones (fcShowPaywall, qzShowPaywall)
  if (_proGateObserver) return;
  _proGateObserver = new MutationObserver(() => {
    document.querySelectorAll('a.pro-gate-btn:not([data-paywall-patched]), button.pro-gate-btn:not([data-paywall-patched])').forEach(patchProGateBtn);
  });
  _proGateObserver.observe(document.body, { childList: true, subtree: true });
}

function patchGatedLinks() {
  document.querySelectorAll('a[href^="/discere"], a[href^="/ai-profesor"]').forEach(a => {
    if (a.dataset.paywallPatched) return;
    const origHref = a.getAttribute('href');
    const type = origHref.startsWith('/ai-profesor') ? 'ai' : 'discere';
    a.dataset.paywallPatched = '1';
    a.dataset.origHref = origHref;
    a.removeAttribute('href');
    a.style.cursor = 'pointer';
    a.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      const tier = getLocalTier();
      const allowed =
        (type === 'discere' && (tier === 'standard' || tier === 'pro')) ||
        (type === 'ai'      &&  tier === 'pro');
      if (allowed) {
        window.location.href = a.dataset.origHref;
      } else {
        showHrvPaywall(type);
      }
    });
  });

  // Legacy chapter lock buttons that point to /cijene should open premium paywall.
  document.querySelectorAll('a.reveal-lock-btn[href*="/cijene"], a.reveal-lock-btn[href*="maturiraj.hr/cijene"]').forEach(a => {
    if (a.dataset.paywallPatched) return;
    a.dataset.paywallPatched = '1';
    a.dataset.origHref = a.getAttribute('href') || '';
    a.removeAttribute('href');
    a.style.cursor = 'pointer';
    a.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      showHrvPaywall('drill');
    });
  });

  patchProGateBtns();
}

function bindGlobalPaywallOpener() {
  if (typeof window === 'undefined') return () => {};
  window.__mtShowHrvPaywall = showHrvPaywall;
  return () => {
    if (window.__mtShowHrvPaywall === showHrvPaywall) {
      try { delete window.__mtShowHrvPaywall; } catch { window.__mtShowHrvPaywall = undefined; }
    }
  };
}

// ── Povezivanje sa simulatorom (lektira ↔ skripta) ───────────────────────────
// (A) Hash sidro: simulator linka na /skripte/hrv/h08#l1 → otvori radni tab djela.
// (B) D-linkovi u sidebaru (trenutno → /skripte/hrv) → otvori to djelo u simulatoru.
// Sve preko shared ChapterWrappera → vrijedi za svih 28 poglavlja bez diranja datoteka.
const HRV_DCODE_LEKTIRA = {
  d01:{djelo:'Antigona',autor:'Sofoklo'},
  d02:{djelo:'Izbor iz poezije (Kanconijer)',autor:'Francesco Petrarca'},
  d03:{djelo:'Hamlet',autor:'William Shakespeare'},
  d04:{djelo:'Život je san',autor:'Pedro Calderón de la Barca'},
  d06:{djelo:'Patnje mladoga Werthera',autor:'J. W. Goethe'},
  d07:{djelo:'Zločin i kazna',autor:'Fjodor Dostojevski'},
  d08:{djelo:'Preobražaj',autor:'Franz Kafka'},
  d09:{djelo:'Stranac',autor:'Albert Camus'},
  d10:{djelo:'Izbor iz poezije (Cvjetovi zla)',autor:'Charles Baudelaire'},
  d11:{djelo:'Novela od Stanca',autor:'Marin Držić'},
  d13:{djelo:'Dubravka',autor:'Ivan Gundulić'},
  d14:{djelo:'Smrt Smail-age Čengića',autor:'Ivan Mažuranić'},
  d15:{djelo:'Prijan Lovro',autor:'August Šenoa'},
  d16:{djelo:'Posljednji Stipančići',autor:'Vjenceslav Novak'},
  d17:{djelo:'Izbor iz poezije',autor:'Silvije Strahimir Kranjčević'},
  d18:{djelo:'Camao, Cvijet sa raskršća, Kip domovine leta 188*',autor:'Antun Gustav Matoš'},
  d19:{djelo:'Izbor iz poezije',autor:'Vladimir Nazor'},
  d20:{djelo:'Izbor iz poezije',autor:'Antun Branko Šimić'},
  d21:{djelo:'Gospoda Glembajevi',autor:'Miroslav Krleža'},
  d22:{djelo:'Kiklop',autor:'Ranko Marinković'},
};

function rewriteLektiraDlinks() {
  if (typeof document === 'undefined') return;
  document.querySelectorAll('a.sb-d[data-code]').forEach(function (a) {
    if (a.dataset.simPatched) return;
    var code = (a.getAttribute('data-code') || '').toLowerCase();
    var L = HRV_DCODE_LEKTIRA[code];
    if (!L) return;
    a.dataset.simPatched = '1';
    a.setAttribute('href', '/discere/hrvatski/simulator?lektira=' + encodeURIComponent(L.djelo) + '&autor=' + encodeURIComponent(L.autor));
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
    a.setAttribute('title', 'Vježbaj u simulatoru: ' + L.djelo);
  });
}

function handleLektiraHash() {
  if (typeof window === 'undefined') return;
  var h = (window.location.hash || '').replace(/^#/, '');
  if (!h) return;
  // Hash može biti složen: "embed&l1", "l1", "embed", ili id elementa.
  var tokens = h.split(/[&,]/);
  var m = null, el = null;
  for (var i = 0; i < tokens.length; i++) {
    var mm = tokens[i].match(/^(?:tab-|l)(\d+)$/i);
    if (mm) { m = mm; break; }
  }
  if (!m) {
    try { el = document.getElementById(h); } catch (e) { el = null; }
    if (el) {
      var layer = el.closest && el.closest('.layer[id]');
      if (layer) { var lm = (layer.id || '').match(/^l(\d+)$/); if (lm) m = lm; }
    }
  } else {
    try { el = document.getElementById('l' + m[1]); } catch (e) { el = null; }
  }
  if (m && typeof window.sw === 'function') { try { window.sw(parseInt(m[1], 10)); } catch (e) {} }
  if (el && el.scrollIntoView) { try { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) {} }
}

// ── Embed način (?embed=1): čisti prikaz za modal u simulatoru ────────────────
// Sakriva globalni Nav, countdown chip, te chapter chrome (sidebar/hero/breadcrumb/
// footer/back-to-top) — ostaju samo tabovi + sadržaj djela. Vrijedi za svih 28 poglavlja.
const SKRIPTA_EMBED_CSS = [
  'body.mt-skripta-embed nav.nav,',
  'body.mt-skripta-embed .nav-drawer,',
  'body.mt-skripta-embed .nav-overlay,',
  'body.mt-skripta-embed .hero-countdown,',
  'body.mt-skripta-embed .sidebar,',
  'body.mt-skripta-embed .sb-overlay,',
  'body.mt-skripta-embed .hero,',
  'body.mt-skripta-embed .bc,',
  'body.mt-skripta-embed .social-proof,',
  'body.mt-skripta-embed .countdown,',
  'body.mt-skripta-embed .restore-banner,',
  'body.mt-skripta-embed .sb-hamburger,',
  'body.mt-skripta-embed .sb-footer,',
  // NAPOMENA: .btt (poglavljev gumb „na vrh") se NAMJERNO NE skriva — to je gumb
  // koji želimo u modalu. Skrivamo samo duplikat iz root layouta (hrv-chapter-btt).
  'body.mt-skripta-embed .hrv-chapter-btt,',
  'body.mt-skripta-embed .global-scroll-top-btn,',
  'body.mt-skripta-embed .scroll-progress{display:none!important}',
  'body.mt-skripta-embed .skripte-pad{padding-top:0!important}',
  'body.mt-skripta-embed .main{margin-left:0!important;width:auto!important;max-width:100%!important;padding-left:16px!important;padding-right:16px!important}',
  'body.mt-skripta-embed .content-wrap{padding-top:12px!important;max-width:960px!important;margin:0 auto!important}',
].join('\n');

function isSkriptaEmbed() {
  // Embed se signalizira HASH-om (#embed ili #embed&l1) da stranica ostane statična.
  try { return (window.location.hash || '').toLowerCase().indexOf('embed') !== -1; } catch (e) { return false; }
}

function applySkriptaEmbed() {
  if (typeof document === 'undefined' || !isSkriptaEmbed()) return function () {};
  document.body.classList.add('mt-skripta-embed');
  var id = 'mt-skripta-embed-css';
  if (!document.getElementById(id)) {
    var st = document.createElement('style');
    st.id = id;
    st.textContent = SKRIPTA_EMBED_CSS;
    document.head.appendChild(st);
  }
  return function () {
    document.body.classList.remove('mt-skripta-embed');
    var el = document.getElementById(id);
    if (el) el.remove();
  };
}

export default function ChapterWrapper({ chapterId, bodyHtml, stylesCss, scriptsJs }) {
  const scriptsExecutedRef = useRef(false);
  const wrapRef = useRef(null);

  // ── Stilovi se renderiraju u JSX-u (SSR) — vidi return ispod. ────────────
  // Ranije su se injektirali client-side u useEffect-u, ali otkad se poglavlje
  // učitava preko next/dynamic, taj kod stiže tek u async chunku → ~2 s
  // nestiliziranog sadržaja (FOUC). Renderiranjem <style> u JSX-u stil je u
  // SSR HTML-u već na prvom paintu, pa FOUC-a nema.

  // ── SCRIPTS_JS ───────────────────────────────────────────────────────────
  useEffect(() => {
    if (!scriptsExecutedRef.current && scriptsJs) {
      try {
        const scriptEl = document.createElement('script');
        // Auto-expose chapter-declared function names so inline onclick/oninput
        // handlers in BODY_HTML can call them from window scope.
        const declaredFunctions = Array.from(
          scriptsJs.matchAll(/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g),
          (m) => m[1]
        );
        const uniqueDeclaredFunctions = [...new Set(declaredFunctions)];
        const exposeDeclared = uniqueDeclaredFunctions
          .map((name) => `if(typeof ${name}==='function'&&typeof window.${name}!=='function')window.${name}=${name};`)
          .join('\n');

        // Wrap in IIFE so each chapter's const/let declarations stay in their
        // own scope and don't collide when navigating between chapters.
        // After executing the IIFE, auto-expose every function that was
        // declared inside it so onclick/oninput attributes can call them.
        // This replaces the old per-function if(typeof x==='function')window.x=x pattern.
        const exposeAll = `
if(typeof sw==='function' && !window.__mtUnifiedSwPatch)window.sw=sw;
if(typeof track==='function')window.track=track;
if(typeof printCheatSheet==='function')window.printCheatSheet=printCheatSheet;
if(typeof printFullScript==='function')window.printFullScript=printFullScript;
if(typeof generatePDF==='function')window.generatePDF=generatePDF;
if(typeof openModal==='function')window.openModal=openModal;
if(typeof closeModal==='function')window.closeModal=closeModal;
if(typeof submitSignup==='function')window.submitSignup=submitSignup;
if(typeof openFeedbackModal==='function')window.openFeedbackModal=openFeedbackModal;
if(typeof closeFeedbackModal==='function')window.closeFeedbackModal=closeFeedbackModal;
if(typeof submitFeedback==='function')window.submitFeedback=submitFeedback;
if(typeof openChapterModal==='function')window.openChapterModal=openChapterModal;
if(typeof toggleSidebar==='function')window.toggleSidebar=toggleSidebar;
if(typeof closeSidebar==='function')window.closeSidebar=closeSidebar;
if(typeof diagStart==='function')window.diagStart=diagStart;
if(typeof diagSkip==='function')window.diagSkip=diagSkip;
if(typeof diagDismiss==='function')window.diagDismiss=diagDismiss;
if(typeof diagRestart==='function')window.diagRestart=diagRestart;
if(typeof diagAnswer==='function')window.diagAnswer=diagAnswer;
if(typeof diagRender==='function')window.diagRender=diagRender;
if(typeof diagFinish==='function')window.diagFinish=diagFinish;
if(typeof fcFlip==='function')window.fcFlip=fcFlip;
if(typeof fcMark==='function')window.fcMark=fcMark;
if(typeof fcSkip==='function')window.fcSkip=fcSkip;
if(typeof fcReset==='function')window.fcReset=fcReset;
if(typeof qzStart==='function' && !window.__mtQuizUnifiedOverrides)window.qzStart=qzStart;
if(typeof qzNext==='function' && !window.__mtQuizUnifiedOverrides)window.qzNext=qzNext;
if(typeof qzShare==='function' && !window.__mtQuizUnifiedOverrides)window.qzShare=qzShare;
if(typeof cpRender==='function')window.cpRender=cpRender;
if(typeof cpUpdateProgress==='function')window.cpUpdateProgress=cpUpdateProgress;
if(typeof cpToggle==='function')window.cpToggle=cpToggle;
if(typeof cpReset==='function')window.cpReset=cpReset;
if(document.getElementById('mt-cp-shell')){
  setTimeout(function(){
    try{
      if(typeof window.cpRender==='function')window.cpRender();
      else if(typeof window.cpUpdateProgress==='function')window.cpUpdateProgress();
    }catch(e){}
  },0);
}
if(typeof citFilter==='function')window.citFilter=citFilter;
if(typeof citClear==='function')window.citClear=citClear;
if(typeof wcUpdate==='function')window.wcUpdate=wcUpdate;
if(typeof restoreProgress==='function')window.restoreProgress=restoreProgress;
if(typeof dismissRestore==='function')window.dismissRestore=dismissRestore;
// In Next.js, DOMContentLoaded has already fired by the time useEffect injects this
// script. Dispatch it now so chapter init functions (SVG hotspots, citatnik, etc.) run.
if(document.readyState!=='loading'){document.dispatchEvent(new Event('DOMContentLoaded'));}
`;
        const consistencyPatch = buildHrvConsistencyPatch(chapterId);
  scriptEl.textContent = `(function(){\ntry{\n${scriptsJs}\n${consistencyPatch}\n}catch(__chapterRuntimeErr){try{window.__mtChapterRuntimeErrors=window.__mtChapterRuntimeErrors||{};window.__mtChapterRuntimeErrors['${chapterId}']=String(__chapterRuntimeErr&&(__chapterRuntimeErr.stack||__chapterRuntimeErr.message)||__chapterRuntimeErr);}catch(__errStore){};console.error('[${chapterId}] Chapter runtime error:', __chapterRuntimeErr);}\n${exposeAll}\n${exposeDeclared}\n})();`;
        document.body.appendChild(scriptEl);
        scriptsExecutedRef.current = true;
      } catch (err) {
        console.error(`[${chapterId}] Script execution error:`, err);
      }
    }

    return () => {
      scriptsExecutedRef.current = false;
    };
  }, []);

  // ── Paywall gating — runs independently of SCRIPTS_JS ────────────────────
  useEffect(() => {
    const unbind = bindGlobalPaywallOpener();
    patchGatedLinks();
    return () => { unbind(); };
  }, [bodyHtml]);

  // ── Veza sa simulatorom: hash→tab (sidra) + D-linkovi→simulator (obrnuti smjer) ─
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const cleanupEmbed = applySkriptaEmbed();
    rewriteLektiraDlinks();
    // Pričekaj da se SCRIPTS_JS izvrši (definira window.sw) i DOM montira.
    const t = setTimeout(() => { rewriteLektiraDlinks(); handleLektiraHash(); }, 180);
    window.addEventListener('hashchange', handleLektiraHash);
    return () => { cleanupEmbed(); clearTimeout(t); window.removeEventListener('hashchange', handleLektiraHash); };
  }, [bodyHtml]);

  // ── Brža navigacija među poglavljima: prerender ciljanog poglavlja na hover ──
  // Poglavlja koriste pune <a href> linkove (unutar dangerouslySetInnerHTML), pa
  // SPA router.push NIJE siguran ovdje: inline skripte dodaju intervale/listenere
  // koji bi se kod client-navigacije akumulirali (leak + dupli handleri). Umjesto
  // toga koristimo Speculation Rules — browser u pozadini prerendera ciljano
  // poglavlje na hover/tap-intent, pa je klik praktički trenutan (i težak mount se
  // plati unaprijed), uz potpuno čist per-page lifecycle. No-op bez podrške (Firefox/Safari).
  useEffect(() => {
    if (typeof document === 'undefined') return;
    try {
      if (typeof HTMLScriptElement === 'undefined' ||
          typeof HTMLScriptElement.supports !== 'function' ||
          !HTMLScriptElement.supports('speculationrules')) return;
    } catch { return; }
    const ID = 'mt-skripte-speculationrules';
    if (document.getElementById(ID)) return;
    const el = document.createElement('script');
    el.type = 'speculationrules';
    el.id = ID;
    el.textContent = JSON.stringify({
      prerender: [{
        source: 'document',
        where: { href_matches: '/skripte/hrv/h*' },
        eagerness: 'moderate',
      }],
    });
    document.head.appendChild(el);
    return () => { const n = document.getElementById(ID); if (n) n.remove(); };
  }, []);

  return (
    <>
      {/* Stilovi poglavlja — SSR-ani da nema FOUC-a (vidi gornji komentar). */}
      <style dangerouslySetInnerHTML={{ __html: stylesCss || '' }} />
      <div
        ref={wrapRef}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </>
  );
}
