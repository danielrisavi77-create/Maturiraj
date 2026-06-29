'use client';

import { useEffect } from 'react';

const POJMOVNIK_HTML = [
  "",
  "    <div class=\"tags\">",
  "      <span class=\"pill p-go\">65 pojmova</span>",
  "      <span class=\"pill p-br\">grid + flashcard mode</span>",
  "      <span class=\"pill p-t\">filtriraj kategoriju</span>",
  "    </div>",
  "",
  "    <!-- Grid / Flashcard toggle -->",
  "    <div class=\"pojm-mode-row\">",
  "      <button class=\"pojm-mode-btn on\" id=\"mode-grid\" onclick=\"setPojmMode2('grid')\">⊞ Grid</button>",
  "      <button class=\"pojm-mode-btn\" id=\"mode-fc\" onclick=\"setPojmMode2('fc')\">🃏 Flashcard</button>",
  "      <span style=\"font-family:var(--mono);font-size:10px;color:var(--t3);margin-left:6px\">← → navigacija · Enter/Space = okreni</span>",
  "    </div>",
  "",
  "    <!-- Flashcard mode -->",
  "    <div class=\"fc-wrap\" id=\"fc-wrap2\" style=\"display:none;flex-direction:column;align-items:center;gap:16px;margin:16px 0\">",
  "      <div class=\"fc-counter\" id=\"fc-counter2\">1 / 65</div>",
  "      <div class=\"fc-scene\" id=\"fc-scene2\" onclick=\"pj2Flip()\">",
  "        <div class=\"fc-inner\" id=\"fc-inner2\">",
  "          <div class=\"fc-front\">",
  "            <div class=\"fc-cat\" id=\"fc-cat2\" style=\"font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--bronze);margin-bottom:12px\">—</div>",
  "            <div class=\"fc-term\" id=\"fc-term2\" style=\"font-family:var(--display);font-size:22px;font-weight:700;color:var(--t1);line-height:1.2;margin-bottom:8px\">—</div>",
  "            <div class=\"fc-hint\">klikni za definiciju</div>",
  "          </div>",
  "          <div class=\"fc-back\">",
  "            <div class=\"fc-def\" id=\"fc-def2\" style=\"font-family:var(--serif);font-size:15px;color:var(--t1);line-height:1.6\">—</div>",
  "          </div>",
  "        </div>",
  "      </div>",
  "      <div class=\"fc-nav\">",
  "        <button class=\"fc-btn\" id=\"fc-prev2\" onclick=\"pj2Prev()\" disabled>← Prethodni</button>",
  "        <button class=\"fc-btn\" style=\"background:var(--dim-br);border-color:var(--bd-br);color:var(--bronze-l)\" onclick=\"pj2Flip()\">↩ Okreni</button>",
  "        <button class=\"fc-btn\" id=\"fc-next2\" onclick=\"pj2Next()\">Sljedeći →</button>",
  "      </div>",
  "      <div class=\"fc-progress\" id=\"fc-progress2\"></div>",
  "    </div>",
  "",
  "    <!-- Grid mode -->",
  "    <div id=\"grid-wrap2\">",
  "      <div class=\"pojm-filters\">",
  "        <button class=\"pojm-filter on\" data-cat=\"all\" onclick=\"pojmFilter2('all',this)\">Sve (65)</button>",
  "        <button class=\"pojm-filter\" data-cat=\"zanr\" onclick=\"pojmFilter2('zanr',this)\">Žanr/forma</button>",
  "        <button class=\"pojm-filter\" data-cat=\"tehnika\" onclick=\"pojmFilter2('tehnika',this)\">Tehnike pripovijedanja</button>",
  "        <button class=\"pojm-filter\" data-cat=\"stil\" onclick=\"pojmFilter2('stil',this)\">Stilska sredstva</button>",
  "        <button class=\"pojm-filter\" data-cat=\"likovi\" onclick=\"pojmFilter2('likovi',this)\">Likovi/radnja</button>",
  "        <button class=\"pojm-filter\" data-cat=\"realizam\" onclick=\"pojmFilter2('realizam',this)\">Realizam</button>",
  "        <button class=\"pojm-filter\" data-cat=\"senoa\" onclick=\"pojmFilter2('senoa',this)\">Šenoino doba</button>",
  "        <button class=\"pojm-filter\" data-cat=\"autori\" onclick=\"pojmFilter2('autori',this)\">Hrv. realisti</button>",
  "      </div>",
  "      <div class=\"pojm-grid\" id=\"pojm-grid2\"></div>",
  "    </div>",
  "",
  "    <!-- DISCERE TOUCHPOINT — Tab 4 Pojmovnik -->",
  "    <div class=\"discere-banner\" style=\"margin-top:20px\" onclick=\"window.location.href='#discere'\">",
  "      <div class=\"discere-ico\">🧠</div>",
  "      <div class=\"discere-txt\">",
  "        <div class=\"discere-ttl\">Discere · Adaptivne flashcards (spaced repetition)</div>",
  "        <div class=\"discere-sub\">AI prati koje pojmove si usvojio, a koje ne — ponavlja ih točno kad trebaš · <strong>Pro plan</strong></div>",
  "      </div>",
  "      <div class=\"discere-arrow\">→</div>",
  "    </div>",
  "",
  "    <div class=\"nav-row\">",
  "      <span class=\"nb-btn\" onclick=\"sw(3)\">← Citatnik</span>",
  "      <span class=\"nb-btn primary\" onclick=\"sw(6)\">🧠 Kviz →</span>",
  "    </div>",
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

export default function PojmovnikH15() {
  useEffect(() => scheduleTabInit("renderPojm2"), []);

  return (
    <div
      className="h15-react-pojmovnik-tab"
      style={{ display: 'contents' }}
      dangerouslySetInnerHTML={{ __html: POJMOVNIK_HTML }}
    />
  );
}
