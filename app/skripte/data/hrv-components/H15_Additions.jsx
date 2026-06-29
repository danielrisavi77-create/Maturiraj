'use client';


const CSS_H15A_AUTHOR_EMBED = `
  .h15a-author-wrap{margin:16px 0 20px}
  .h15a-author-wrap .author-card{
    border:1px solid var(--bdm, rgba(203,176,145,.35));
    border-radius:var(--r3, 16px);
    background:linear-gradient(180deg, rgba(20,14,12,.86), rgba(20,14,12,.72));
    overflow:hidden;
    box-shadow:0 10px 28px rgba(0,0,0,.18);
  }
  .h15a-author-wrap .ac-header{background:rgba(255,255,255,.02)}
  .h15a-author-wrap .ac-work-item{background:rgba(255,255,255,.02)}
  @media (max-width: 700px){
    .h15a-author-wrap{margin:12px 0 16px}
  }
`;

function H15AAuthorEmbed({ html }) {
  return (
    <>
      <style>{CSS_H15A_AUTHOR_EMBED}</style>
      <div className="h15a-author-wrap" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}


const H15A_AUTHORPROFILEH15SENOA_HTML = `    <div class="author-card">
      <div class="ac-header">
        <div class="ac-monogram">AŠ</div>
        <div class="ac-meta">
          <div class="ac-name">August Šenoa</div>
          <div class="ac-dates">Zagreb · 1838. – 1881. (Zagreb)</div>
          <div class="ac-tags" style="margin-top:6px">
            <span class="hchip br" style="font-size:8px">Otac hrv. realizma</span>
            <span class="hchip go" style="font-size:8px">Urednik Vijenca</span>
            <span class="hchip pa" style="font-size:8px">Gradski bilježnik</span>
          </div>
        </div>
      </div>
      <div class="ac-body">
        <p>Rođen <strong>1838.</strong> u Zagrebu (otac Čeh Alois Šenoa, majka Slovakinja). Obitelj se pohrvaćuje u preporodnom duhu. Odrastao na Gornjem gradu — Zagreb postaje centralni lik njegove književnosti. Gimnazija u Zagrebu, studij prava u Zagrebu (1857.) i <strong>Pragu</strong> (1859.–1865.). U Pragu se druži s češkim realistima i upoznaje studenta koji postaje model za <em>prijana Lovru</em>.</p>
        <p><strong>1866. se vraća u Zagreb</strong> — počinje „Šenoino doba". Urednik Pozora, kasnije Vijenca (od 1874.). Gradski bilježnik. Dramaturg HNK-a. <em>Središte hrv. kulturnog života.</em></p>
        <p><strong>Ženjen Slavkom pl. Ištvanić</strong> (1868.). Djeca: <em>Milan Šenoa</em> (kasnije i sam pisac). Produktivna karijera: povijesni romani, pripovijetke, povjestice, kritike, drame. Radi kao bilježnik, piše vikendima i noću.</p>
        <p><strong>Umire 1881.</strong> u 43. godini od posljedica potresa 1880. (zidana kuća se urušila, ranio glavu). Ostavlja <em>Kletvu</em> nedovršenu. Zakopan je na Mirogoju. Ulica Šenoina u Zagrebu nosi njegovo ime.</p>
        <div class="ac-works">
          <div class="ac-works-lbl">Ključna djela</div>
          <div class="ac-work-item">
            <div class="ac-badge">📖</div>
            <div>
              <div class="ac-work-title">Prijan Lovro</div>
              <div class="ac-work-meta">1873., <em>Vijenac</em> · Pripovijetka · 5 dijelova · „Praška novela"</div>
              <div class="ac-work-desc">Tragična priča o inteligentnom mladiću sa sela koji se bori s malograđanskim društvom i na kraju <strong>si oduzima život</strong>. Nazvana „<em>Werther hrvatske književnosti</em>". Uokvirena pripovijetka s autobiografskim elementima (Šenoa je stvarno imao takvog cimera u Pragu). <strong>Obvezatno djelo za cjelovito čitanje 2026.</strong></div>
            </div>
          </div>
          <div class="ac-work-item">
            <div class="ac-badge">🏰</div>
            <div>
              <div class="ac-work-title">Zlatarevo zlato</div>
              <div class="ac-work-meta">1871., <em>Vijenac</em> · Povijesni roman</div>
              <div class="ac-work-desc">Prvi hrv. povijesni roman. Tema: zlatarov posvojeni sin Pavao Gregorijanec, ljubavna priča u Zagrebu 16. st. Pokreće modu povijesnog romana u Hrvatskoj. Šenoa gradi mit o Zagrebu kao kulturnom središtu.</div>
            </div>
          </div>
          <div class="ac-work-item">
            <div class="ac-badge">⚔</div>
            <div>
              <div class="ac-work-title">Seljačka buna</div>
              <div class="ac-work-meta">1877. · Povijesni roman</div>
              <div class="ac-work-desc">Najvažniji Šenoin povijesni roman. Tema: buna Matije Gupca (1573.). <em>Socijalno-politička dimenzija</em> jača nego u Zlatarevu zlatu. Primjer „povijesnog realizma".</div>
            </div>
          </div>
          <div class="ac-work-item">
            <div class="ac-badge">✒</div>
            <div>
              <div class="ac-work-title">Povjestice</div>
              <div class="ac-work-meta">1872. i kasnije · Zbirke lirsko-epskih pjesama</div>
              <div class="ac-work-desc">Smrt Petra Svačića, Propast Venecije, Kameni svatovi, Anka Neretkinja, Prokleta klijet, Kugina kuća, Postolar i vrag. <em>Nacionalno-rodoljubne teme, narodne legende.</em> Pjesnički pandan povijesnim romanima.</div>
            </div>
          </div>
          <div class="ac-work-item">
            <div class="ac-badge">📝</div>
            <div>
              <div class="ac-work-title">Kletva</div>
              <div class="ac-work-meta">1880.–1881. · Povijesni roman (nedovršen)</div>
              <div class="ac-work-desc">Tema: srednjovjekovni Zagreb. Šenoa umire prije završetka; roman dovršava <em>Vjekoslav Klaić</em>. Posthumno objavljivan.</div>
            </div>
          </div>
          <div class="ac-work-item">
            <div class="ac-badge">🎭</div>
            <div>
              <div class="ac-work-title">Druge pripovijetke i drame</div>
              <div class="ac-work-meta">1865.–1881. · Razne publikacije</div>
              <div class="ac-work-desc">Branka, Prosjak Luka, Karanfil s pjesnikova groba, Mladi gospodin. Drame: Ljubica, Kanarinčeva ljubavnica. Književna kritika u Vijencu.</div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

export function AuthorProfileH15Senoa() {
  return <H15AAuthorEmbed html={H15A_AUTHORPROFILEH15SENOA_HTML} />;
}

const CSS_H15A_DISCERE_EMBED = `
  .h15a-discere-wrap .discere-banner{box-shadow:0 8px 22px rgba(0,0,0,.14)}
`;

function H15ADiscereEmbed({ html }) {
  return (
    <>
      <style>{CSS_H15A_DISCERE_EMBED}</style>
      <div className="h15a-discere-wrap" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

const H15A_DISCERE_BANNER_PRIMARY_HTML = `    <div class="discere-banner" id="discere-t1" style="margin-top:18px" onclick="window.location.href=&#39;#discere&#39;">
      <div class="discere-ico">📖</div>
      <div class="discere-txt">
        <div class="discere-ttl">Discere · Simulator ulomaka Prijana Lovre</div>
        <div class="discere-sub">Vježbaj analizu ulomaka iz sva 5 dijelova · Pro plan</div>
      </div>
      <div class="discere-arrow">→</div>
    </div>`;

export function DiscereBannerPrimaryH15() {
  return <H15ADiscereEmbed html={H15A_DISCERE_BANNER_PRIMARY_HTML} />;
}

const CSS_H15A_VIDEO_EMBED = `
  .h15a-video-wrap .yt-card{box-shadow:0 8px 22px rgba(0,0,0,.14)}
`;

function H15AVideoEmbed({ html }) {
  return (
    <>
      <style>{CSS_H15A_VIDEO_EMBED}</style>
      <div className="h15a-video-wrap" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

const H15A_VIDEO_CARD_PRIMARY_HTML = `      <a class="yt-card" href="https://www.youtube.com/results?search_query=Šenoa+Prijan+Lovro+analiza+lektira+matura+realizam" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇭🇷</span> HR</div>
          <div class="yt-title">Prijan Lovro — analiza na hrvatskom</div>
        </div>
      </a>`;

export function VideoCardPrimaryH15() {
  return <H15AVideoEmbed html={H15A_VIDEO_CARD_PRIMARY_HTML} />;
}

const H15A_VIDEO_CARD_SECONDARY_HTML = `      <a class="yt-card" href="https://www.youtube.com/results?search_query=August+Šenoa+hrvaatski+realizam+književnost" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇭🇷</span> HR</div>
          <div class="yt-title">August Šenoa — hrv. realizam</div>
        </div>
      </a>`;

export function VideoCardSecondaryH15() {
  return <H15AVideoEmbed html={H15A_VIDEO_CARD_SECONDARY_HTML} />;
}

const H15A_VIDEO_CARD_TERTIARY_HTML = `      <a class="yt-card" href="https://www.youtube.com/results?search_query=Croatian+realism+19th+century+Senoa+literature" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇬🇧</span> EN</div>
          <div class="yt-title">Croatian realism — Šenoa &amp; context</div>
        </div>
      </a>`;

export function VideoCardTertiaryH15() {
  return <H15AVideoEmbed html={H15A_VIDEO_CARD_TERTIARY_HTML} />;
}

const H15A_VIDEO_CARD_QUATERNARY_HTML = `      <a class="yt-card" href="https://www.youtube.com/results?search_query=European+realism+Balzac+Flaubert+Tolstoy+lecture" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🎬</span> EN</div>
          <div class="yt-title">European realism — lecture</div>
        </div>
      </a>`;

export function VideoCardQuaternaryH15() {
  return <H15AVideoEmbed html={H15A_VIDEO_CARD_QUATERNARY_HTML} />;
}

