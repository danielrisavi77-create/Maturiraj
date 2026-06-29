'use client';


const CSS_H16A_AUTHOR_EMBED = `
  .h16a-author-wrap{margin:16px 0 20px}
  .h16a-author-wrap .author-card{
    border:1px solid var(--bdm, rgba(203,176,145,.35));
    border-radius:var(--r3, 16px);
    background:linear-gradient(180deg, rgba(20,14,12,.86), rgba(20,14,12,.72));
    overflow:hidden;
    box-shadow:0 10px 28px rgba(0,0,0,.18);
  }
  .h16a-author-wrap .ac-header{background:rgba(255,255,255,.02)}
  .h16a-author-wrap .ac-work-item{background:rgba(255,255,255,.02)}
  @media (max-width: 700px){
    .h16a-author-wrap{margin:12px 0 16px}
  }
`;

function H16AAuthorEmbed({ html }) {
  return (
    <>
      <style>{CSS_H16A_AUTHOR_EMBED}</style>
      <div className="h16a-author-wrap" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}


const H16A_AUTHORPROFILEH16KRLEZA_HTML = `    <div class="author-card">
      <div class="ac-header">
        <div class="ac-monogram">MK</div>
        <div class="ac-meta">
          <div class="ac-name">Miroslav Krleža</div>
          <div class="ac-dates">Zagreb · 1893. – 1981. (Zagreb)</div>
          <div class="ac-tags" style="margin-top:6px">
            <span class="hchip br" style="font-size:8px">Najveći hrv. književnik 20. st.</span>
            <span class="hchip go" style="font-size:8px">Direktor LZ MK</span>
            <span class="hchip pa" style="font-size:8px">Dramatičar · Romanopisac · Pjesnik</span>
          </div>
        </div>
      </div>
      <div class="ac-body">
        <p>Rođen <strong>7. srpnja 1893.</strong> u Zagrebu. Otac Petar Krleža, majka Ivka. Odrastao na zagrebačkom Gornjem gradu i u Donjoj Stubici. Gimnaziju pohađa u Zagrebu, vojnu školu (kadetski zavod) u <em>Pečuhu</em>, vojnu akademiju <em>Ludoviceum</em> u Budimpešti (1908.–1913.). <em>Susret s austrougarskim militarizmom</em> oblikuje njegov antiratni svjetonazor.</p>
        <p><strong>1914.</strong> pokušava prebjeći u srpsku vojsku tijekom Balkanskog rata — vraća se i tijekom 1. svj. rata služi na fronti. Iskustvo rata postaje središnja tema njegovog ranog opusa (ratni ciklus). Politički se opredjeljuje za <em>komunističku opciju</em>.</p>
        <p>Pisao u svim glavnim žanrovima: <strong>drame</strong> (Glembajevski ciklus, ratni ciklus, ekspresionistički ciklus), <strong>romani</strong> (Filip Latinovicz, Na rubu pameti, Zastave), <strong>poezija</strong> (Balade Petrice Kerempuha), <strong>eseji, kritike, putopisi, dnevnici</strong>. Opus broji preko 40 svezaka.</p>
        <p><strong>1950.</strong> imenovan direktorom <em>Leksikografskog zavoda u Zagrebu</em> (danas se zove po njemu — LZ Miroslav Krleža). Vodi monumentalne projekte: <em>Enciklopedija Jugoslavije</em>, <em>Hrvatska enciklopedija</em>. Ostaje na čelu do smrti.</p>
        <p><strong>Umire 29. prosinca 1981.</strong> u Zagrebu, u 88. godini. Pokopan na Mirogoju. <em>Najznačajniji hrvatski književnik 20. stoljeća</em> i jedan od najvećih jugoslavenskih intelektualaca.</p>
        <div class="ac-works">
          <div class="ac-works-lbl">Ključna djela</div>
          <div class="ac-work-item">
            <div class="ac-badge">🎭</div>
            <div>
              <div class="ac-work-title">Gospoda Glembajevi</div>
              <div class="ac-work-meta">1928., DHK · Drama u 3 čina · Praizvedba HNK 14.II.1929.</div>
              <div class="ac-work-desc">„Drama u tri čina iz života jedne agramerske patricijske obitelji". Psihološko-socijalna drama o jednoj noći 1913. — propast bankarske obitelji Glembay. Glavni lik: <strong>Leone Glembay</strong>. Klasično jedinstvo mjesta/vremena/radnje. Uzor: Henrik Ibsen. <strong>★ ispitno djelo za maturu 2026.</strong></div>
            </div>
          </div>
          <div class="ac-work-item">
            <div class="ac-badge">🎭</div>
            <div>
              <div class="ac-work-title">Glembajevski ciklus</div>
              <div class="ac-work-meta">1928.–1931. · 3 drame + 11 novela</div>
              <div class="ac-work-desc"><em>Gospoda Glembajevi</em> (1928.) + <em>U agoniji</em> (1928.) + <em>Leda</em> (1931.). 11 novela o različitim članovima obitelji. Najveće Krležino dramsko ostvarenje. Tema: propast hrv. patricijske buržoazije.</div>
            </div>
          </div>
          <div class="ac-work-item">
            <div class="ac-badge">📖</div>
            <div>
              <div class="ac-work-title">Povratak Filipa Latinovicza</div>
              <div class="ac-work-meta">1932. · Roman</div>
              <div class="ac-work-desc">Glavni lik Filip Latinovicz se vraća iz Pariza u rodni kraj. <em>Ekspresionistička proza</em>. Tema: kriza intelektualca, traženje identiteta. Paralela s Leoneom (slikar koji se vraća).</div>
            </div>
          </div>
          <div class="ac-work-item">
            <div class="ac-badge">📖</div>
            <div>
              <div class="ac-work-title">Na rubu pameti</div>
              <div class="ac-work-meta">1938. · Roman</div>
              <div class="ac-work-desc">Anonimni intelektualac koji se nalazi „na rubu pameti". Gorka kritika malograđanskog društva. <em>Krleža u svojoj najradikalnijoj formi.</em></div>
            </div>
          </div>
          <div class="ac-work-item">
            <div class="ac-badge">✒</div>
            <div>
              <div class="ac-work-title">Balade Petrice Kerempuha</div>
              <div class="ac-work-meta">1936. · Pjesnička zbirka</div>
              <div class="ac-work-desc">Vrhunac Krležine poezije. <strong>Pisano kajkavskim dijalektom.</strong> Petrica Kerempuh kao narodski lik. Ekspresivna kritika društva kroz baladu.</div>
            </div>
          </div>
          <div class="ac-work-item">
            <div class="ac-badge">📚</div>
            <div>
              <div class="ac-work-title">Zastave (5 svezaka)</div>
              <div class="ac-work-meta">1959.–1968. · Veliki roman</div>
              <div class="ac-work-desc">Sinteza Krležinog opusa. Panorama Hrvatske 1912.–1922. Glavni lik: Kamilo Emerički. Najopsežniji hrvatski roman 20. st.</div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

export function AuthorProfileH16Krleza() {
  return <H16AAuthorEmbed html={H16A_AUTHORPROFILEH16KRLEZA_HTML} />;
}

const CSS_H16A_DISCERE_EMBED = `
  .h16a-discere-wrap .discere-banner{box-shadow:0 8px 22px rgba(0,0,0,.14)}
`;

function H16ADiscereEmbed({ html }) {
  return (
    <>
      <style>{CSS_H16A_DISCERE_EMBED}</style>
      <div className="h16a-discere-wrap" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

const H16A_DISCERE_BANNER_PRIMARY_HTML = `    <div class="discere-banner" id="discere-t1" style="margin-top:18px" onclick="window.location.href=&#39;#discere&#39;">
      <div class="discere-ico">🎭</div>
      <div class="discere-txt">
        <div class="discere-ttl">Discere · Simulator ulomaka Glembajevih</div>
        <div class="discere-sub">Vježbaj analizu ulomaka iz sva 3 čina · Pro plan</div>
      </div>
      <div class="discere-arrow">→</div>
    </div>`;

export function DiscereBannerPrimaryH16() {
  return <H16ADiscereEmbed html={H16A_DISCERE_BANNER_PRIMARY_HTML} />;
}

const CSS_H16A_VIDEO_EMBED = `
  .h16a-video-wrap .yt-card{box-shadow:0 8px 22px rgba(0,0,0,.14)}
`;

function H16AVideoEmbed({ html }) {
  return (
    <>
      <style>{CSS_H16A_VIDEO_EMBED}</style>
      <div className="h16a-video-wrap" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

const H16A_VIDEO_CARD_PRIMARY_HTML = `      <a class="yt-card" href="https://www.youtube.com/results?search_query=Krleža+Gospoda+Glembajevi+analiza+lektira+matura" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇭🇷</span> HR</div>
          <div class="yt-title">Gospoda Glembajevi — analiza</div>
        </div>
      </a>`;

export function VideoCardPrimaryH16() {
  return <H16AVideoEmbed html={H16A_VIDEO_CARD_PRIMARY_HTML} />;
}

const H16A_VIDEO_CARD_SECONDARY_HTML = `      <a class="yt-card" href="https://www.youtube.com/results?search_query=Miroslav+Krleža+hrvatska+moderna+avangarda" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇭🇷</span> HR</div>
          <div class="yt-title">Miroslav Krleža — moderna i avangarda</div>
        </div>
      </a>`;

export function VideoCardSecondaryH16() {
  return <H16AVideoEmbed html={H16A_VIDEO_CARD_SECONDARY_HTML} />;
}

const H16A_VIDEO_CARD_TERTIARY_HTML = `      <a class="yt-card" href="https://www.youtube.com/results?search_query=Krleza+Glembay+family+drama+Croatian+expressionism" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇬🇧</span> EN</div>
          <div class="yt-title">Glembajevi — Croatian expressionism</div>
        </div>
      </a>`;

export function VideoCardTertiaryH16() {
  return <H16AVideoEmbed html={H16A_VIDEO_CARD_TERTIARY_HTML} />;
}

const H16A_VIDEO_CARD_QUATERNARY_HTML = `      <a class="yt-card" href="https://www.youtube.com/results?search_query=Expressionism+drama+bourgeoisie+moral+decline+theatre" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🎬</span> EN</div>
          <div class="yt-title">Expressionist drama — moral decline</div>
        </div>
      </a>`;

export function VideoCardQuaternaryH16() {
  return <H16AVideoEmbed html={H16A_VIDEO_CARD_QUATERNARY_HTML} />;
}

