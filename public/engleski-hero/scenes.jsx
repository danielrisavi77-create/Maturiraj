// Components are exported by the preceding classic animations script.
const EnglishHeroComponents = window;

// scenes.jsx — 6 scenes for the maturiraj.hr Engleski hero video
// Story arc: panic (English exam) → chaos (grammar overload) → clarity (4 parts)
//            → steps (reading strategy) → result (score) → CTA
// Palette: dark navy + cyan + violet + amber

const C = {
  bg: '#0a0a14',
  bgDeep: '#06060d',
  blue: '#22d3ee',    // cyan as primary
  purple: '#a78bfa',  // violet as secondary
  orange: '#fbbf24',  // amber as accent
  text: '#f4f3ff',
  dim: 'rgba(244,243,255,0.55)',
  faint: 'rgba(244,243,255,0.25)',
  red: '#ff6a7a',
  green: '#6be3b3',
  cardBg: 'rgba(255,255,255,0.04)',
  cardBorder: 'rgba(255,255,255,0.10)',
};

const FONT_DISPLAY = "'Space Grotesk', ui-sans-serif, system-ui, sans-serif";
const FONT_BODY = "'Inter', ui-sans-serif, system-ui, sans-serif";
const FONT_MONO = "'JetBrains Mono', ui-monospace, SFMono-Regular, monospace";

// ─── Shared building blocks ───────────────────────────────────────────────

function AuroraBG({ intensity = 1, tintA = C.blue, tintB = C.purple }) {
  const t = useTime();
  const drift = Math.sin(t * 0.4) * 40;
  const drift2 = Math.cos(t * 0.3) * 60;
  return (
    <div style={{ position: 'absolute', inset: 0, background: C.bg, overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        left: `calc(20% + ${drift}px)`,
        top: `calc(30% + ${drift2}px)`,
        width: 900, height: 900,
        transform: 'translate(-50%,-50%)',
        background: `radial-gradient(circle, ${tintA}44 0%, transparent 60%)`,
        filter: 'blur(40px)',
        opacity: intensity,
      }}/>
      <div style={{
        position: 'absolute',
        right: `calc(10% - ${drift}px)`,
        bottom: `calc(10% - ${drift2}px)`,
        width: 1000, height: 1000,
        transform: 'translate(50%,50%)',
        background: `radial-gradient(circle, ${tintB}40 0%, transparent 60%)`,
        filter: 'blur(40px)',
        opacity: intensity,
      }}/>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(${C.faint} 1px, transparent 1px),
                          linear-gradient(90deg, ${C.faint} 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
        opacity: 0.08,
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
      }}/>
    </div>
  );
}

// ─── SCENE 1 (0–3s) — PANIC: English words rain, confusing exam ──────────

function Scene1_Panic() {
  const { localTime } = useSprite();
  const glitchIntensity = Easing.easeInQuad(clamp(localTime / 2.8, 0, 1));

  const rain = Array.from({ length: 38 }).map((_, i) => {
    const seed = (i * 31) % 100;
    return {
      x: (seed * 19) % 1920,
      startY: -100 - (seed % 5) * 80,
      speed: 130 + (seed % 7) * 55,
      rot: (seed % 6 - 3) * 12,
      char: ['tense','clause','metaphor','inference','cohesion','syntax','diction',
             'rhetoric','passive','gerund','preposition','conditional','syntax',
             'modal verb','article','pronoun','vocabulary','idiom','B2','C1',
             'grammar','CEFR','essay','register','discourse','lexis'][seed % 25],
      size: 22 + (seed % 4) * 9,
      color: (seed % 9 === 0) ? C.red : (seed % 7 === 0) ? C.purple : C.dim,
      delay: (seed % 10) * 0.08,
    };
  });

  return (
    <>
      <AuroraBG intensity={0.3} tintA={C.red} tintB={C.purple} />

      {/* Word rain */}
      {rain.map((r, i) => {
        const t = Math.max(0, localTime - r.delay);
        const y = r.startY + t * r.speed;
        return (
          <div key={i} style={{
            position: 'absolute',
            left: r.x, top: y,
            fontFamily: FONT_MONO,
            fontSize: r.size,
            color: r.color,
            transform: `rotate(${r.rot}deg)`,
            opacity: 0.55,
            textShadow: r.color === C.red ? `0 0 12px ${C.red}` : 'none',
            whiteSpace: 'nowrap',
          }}>{r.char}</div>
        );
      })}

      {/* Mock English exam paper */}
      <div style={{
        position: 'absolute',
        left: 380, top: 140,
        width: 1160, height: 740,
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${C.cardBorder}`,
        borderRadius: 24,
        padding: '54px 70px',
        boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
      }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: 28,
        }}>
          <div style={{
            fontFamily: FONT_MONO, fontSize: 18,
            color: C.dim, letterSpacing: '0.14em',
            textTransform: 'uppercase',
          }}>
            Matura · Engleski jezik A · Čitanje — Zadatak 3
          </div>
          <div style={{
            fontFamily: FONT_MONO, fontSize: 14,
            color: C.red, letterSpacing: '0.1em',
            padding: '6px 12px',
            border: `1px solid ${C.red}55`,
            borderRadius: 6,
            opacity: clamp((localTime - 0.3) / 0.3, 0, 1),
          }}>5 BODOVA</div>
        </div>

        <div style={{
          fontFamily: FONT_BODY, fontSize: 22,
          color: C.text, lineHeight: 1.65, marginBottom: 28,
          opacity: 1 - glitchIntensity * 0.3,
          filter: `blur(${glitchIntensity * 2.5}px)`,
        }}>
          Read the following extract from a magazine article. Choose the best option (A, B, C, or D)
          that matches the meaning of the underlined words in the context of the passage.
        </div>

        <div style={{
          padding: '24px 32px',
          background: 'rgba(255,106,122,0.06)',
          border: `1px dashed ${C.red}55`,
          borderRadius: 14,
          fontFamily: FONT_BODY, fontSize: 20,
          color: C.dim, lineHeight: 1.7,
          filter: `blur(${glitchIntensity * 3}px)`,
        }}>
          &quot;The <span style={{ textDecoration: 'underline', color: C.text }}>ubiquitous</span> nature
          of social media has{' '}
          <span style={{ textDecoration: 'underline', color: C.purple }}>profoundly</span>{' '}
          altered the way young people communicate, raising questions about
          <span style={{ textDecoration: 'underline', color: C.orange }}> authenticity</span> and
          digital <span style={{ textDecoration: 'underline', color: C.blue }}>discourse</span>.&quot;
        </div>
      </div>

      <EnglishHeroComponents.Sprite start={0.5} end={3.0}>
        <EnglishHeroComponents.TextSprite
          text="Otvoriš ispit… i ne znaš od kud početi?"
          x={960} y={970}
          align="center"
          size={58}
          weight={600}
          font={FONT_DISPLAY}
          color={C.text}
          entryDur={0.5}
          exitDur={0.3}
        />
      </EnglishHeroComponents.Sprite>
    </>
  );
}

// ─── SCENE 2 (3–6s) — CHAOS: grammar rules piling up ────────────────────

function Scene2_Chaos() {
  const { localTime } = useSprite();

  const seconds = Math.max(3, Math.floor(38 - localTime * 11));
  const timerText = `0:${String(seconds).padStart(2, '0')}`;

  const rules = [
    { t: 'Present Perfect: have/has + past participle', at: 0.1, x: 80,  y: 160, rot: -3, color: C.blue },
    { t: 'If + past simple → would + infinitive',        at: 0.3, x: 1060, y: 140, rot: 5, color: C.purple },
    { t: 'Reported speech: say → said + backshift',      at: 0.5, x: 220, y: 500, rot: 2, color: C.text },
    { t: 'Passive: be + past participle',                at: 0.7, x: 1140, y: 440, rot: -4, color: C.orange },
    { t: 'Neither … nor / Either … or',                  at: 0.9, x: 580, y: 360, rot: 3, color: C.red },
    { t: '∀ articles: a / an / the / ∅',                at: 1.1, x: 100,  y: 740, rot: 1, color: C.purple },
    { t: 'Inversion: Rarely do I…',                     at: 1.3, x: 1100, y: 740, rot: -2, color: C.blue },
  ];

  const wrong = [
    { t: '"she said that..."', at: 1.0, x: 500, y: 250 },
    { t: '"I have went"',       at: 1.4, x: 860, y: 610 },
    { t: '"more better"',       at: 1.8, x: 320, y: 320 },
  ];

  return (
    <>
      <AuroraBG intensity={0.5} tintA={C.red} tintB={C.purple} />

      {rules.map((f, i) => {
        const lt = clamp((localTime - f.at) / 0.4, 0, 1);
        const drift = Math.sin(localTime * 1.5 + i) * 4;
        return (
          <div key={i} style={{
            position: 'absolute',
            left: f.x, top: f.y + drift,
            fontFamily: FONT_MONO,
            fontSize: 32 + (i % 3) * 6,
            color: f.color,
            opacity: lt * 0.72,
            transform: `rotate(${f.rot}deg) scale(${0.7 + 0.3 * Easing.easeOutBack(lt)})`,
            textShadow: `0 0 24px ${f.color}55`,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
          }}>{f.t}</div>
        );
      })}

      {wrong.map((w, i) => {
        const lt = clamp((localTime - w.at) / 0.3, 0, 1);
        const xScale = Easing.easeOutBack(clamp((localTime - w.at - 0.2) / 0.3, 0, 1));
        return (
          <div key={i} style={{
            position: 'absolute',
            left: w.x, top: w.y,
            padding: '12px 22px',
            background: 'rgba(255,106,122,0.14)',
            border: `1.5px solid ${C.red}`,
            borderRadius: 12,
            fontFamily: FONT_MONO,
            fontSize: 34,
            color: C.red,
            opacity: lt,
            transform: `scale(${Easing.easeOutBack(lt)})`,
            boxShadow: `0 0 30px ${C.red}55`,
          }}>
            {w.t}
            <span style={{
              position: 'absolute',
              right: -18, top: -18,
              width: 36, height: 36,
              borderRadius: 18,
              background: C.red,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transform: `scale(${xScale})`,
              boxShadow: `0 0 20px ${C.red}`,
            }}>
              <svg width="20" height="20" viewBox="0 0 20 20">
                <path d="M5 5 L15 15 M15 5 L5 15" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </span>
          </div>
        );
      })}

      {/* Timer */}
      <div style={{
        position: 'absolute', left: '50%', top: 70,
        transform: 'translateX(-50%)',
        padding: '16px 32px',
        background: 'rgba(255,106,122,0.12)',
        border: `1.5px solid ${C.red}`,
        borderRadius: 999,
        display: 'flex', alignItems: 'center', gap: 14,
        fontFamily: FONT_MONO,
        color: C.red,
        fontSize: 32,
        letterSpacing: '0.08em',
        boxShadow: seconds < 10 ? `0 0 50px ${C.red}bb` : `0 0 25px ${C.red}55`,
      }}>
        <div style={{
          width: 12, height: 12, borderRadius: 6,
          background: C.red,
          opacity: Math.sin(localTime * 10) > 0 ? 1 : 0.2,
        }}/>
        {timerText}
      </div>

      <EnglishHeroComponents.Sprite start={3.3} end={6.0}>
        <EnglishHeroComponents.TextSprite
          text="Previše pravila. Premalo smisla."
          x={960} y={940}
          align="center"
          size={64}
          weight={600}
          font={FONT_DISPLAY}
          color={C.text}
          entryDur={0.5}
          exitDur={0.3}
        />
      </EnglishHeroComponents.Sprite>
    </>
  );
}

// ─── SCENE 3 (6–10s) — CLARITY: the 4 parts of Engleski matura ──────────

function Scene3_Clarity() {
  const { localTime } = useSprite();

  const parts = [
    { n: 'I',   label: 'Slušanje',             pts: 20, color: C.blue,   at: 0.1 },
    { n: 'II',  label: 'Čitanje',              pts: 30, color: C.purple, at: 0.4 },
    { n: 'III', label: 'Jezična kompetencija', pts: 20, color: C.orange, at: 0.7 },
    { n: 'IV',  label: 'Pisanje',              pts: 30, color: C.green,  at: 1.0 },
  ];

  const totalBarT = clamp((localTime - 1.6) / 0.8, 0, 1);

  return (
    <>
      <AuroraBG intensity={0.75} />

      {/* Eyebrow */}
      <div style={{
        position: 'absolute',
        left: '50%', top: 140,
        transform: 'translateX(-50%)',
        fontFamily: FONT_MONO, fontSize: 22,
        color: C.blue, letterSpacing: '0.22em',
        textTransform: 'uppercase',
        opacity: clamp(localTime / 0.4, 0, 1),
        whiteSpace: 'nowrap',
      }}>
        <span style={{ opacity: 0.5, marginRight: 14 }}>—</span>
        Državna matura · Engleski jezik
      </div>

      {/* 4 part cards */}
      <div style={{
        position: 'absolute',
        left: '50%', top: 240,
        transform: 'translateX(-50%)',
        display: 'flex', gap: 28,
        flexWrap: 'nowrap',
      }}>
        {parts.map((p, i) => {
          const lt = clamp((localTime - p.at) / 0.5, 0, 1);
          const eased = Easing.easeOutBack(lt);
          return (
            <div key={i} style={{
              width: 360, padding: '36px 32px',
              background: `${p.color}10`,
              border: `1.5px solid ${p.color}55`,
              borderRadius: 22,
              opacity: lt,
              transform: `translateY(${(1 - eased) * 40}px) scale(${0.85 + 0.15 * eased})`,
              boxShadow: `0 20px 60px ${p.color}22`,
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: FONT_MONO, fontSize: 13,
                color: p.color, letterSpacing: '0.18em',
                textTransform: 'uppercase', marginBottom: 16,
                opacity: 0.7,
              }}>Dio {p.n}</div>
              <div style={{
                fontFamily: FONT_DISPLAY, fontSize: 44,
                fontWeight: 700, color: C.text,
                letterSpacing: '-0.02em', marginBottom: 12,
              }}>{p.label}</div>
              <div style={{
                fontFamily: FONT_MONO, fontSize: 26,
                color: p.color, fontWeight: 600,
                opacity: clamp((localTime - p.at - 0.4) / 0.3, 0, 1),
              }}>{p.pts} bodova</div>
            </div>
          );
        })}
      </div>

      {/* Total points bar */}
      <div style={{
        position: 'absolute',
        left: '50%', top: 720,
        transform: 'translateX(-50%)',
        width: 1520,
        opacity: totalBarT,
      }}>
        <div style={{
          fontFamily: FONT_MONO, fontSize: 16,
          color: C.dim, letterSpacing: '0.12em',
          textAlign: 'center', marginBottom: 14,
        }}>Ukupno: 100 bodova</div>
        <div style={{ height: 10, borderRadius: 5, background: 'rgba(255,255,255,0.06)', overflow: 'hidden', display: 'flex' }}>
          {parts.map((p, i) => (
            <div key={i} style={{
              flex: p.pts,
              background: p.color,
              opacity: 0.85,
              transition: 'all 0.3s',
            }}/>
          ))}
        </div>
        <div style={{ display: 'flex', marginTop: 10 }}>
          {parts.map((p, i) => (
            <div key={i} style={{
              flex: p.pts, textAlign: 'center',
              fontFamily: FONT_MONO, fontSize: 13,
              color: p.color, opacity: 0.7,
            }}>{p.pts}%</div>
          ))}
        </div>
      </div>

      <EnglishHeroComponents.Sprite start={6.6} end={10.0}>
        <EnglishHeroComponents.TextSprite
          text="Svaki dio — posebna strategija."
          x={960} y={920}
          align="center"
          size={52}
          weight={500}
          font={FONT_DISPLAY}
          color={C.text}
          entryDur={0.5}
          exitDur={0.3}
        />
      </EnglishHeroComponents.Sprite>
    </>
  );
}

// ─── SCENE 4 (10–15s) — STEPS: reading comprehension strategy ────────────

function Scene4_Steps() {
  const { localTime } = useSprite();

  const steps = [
    { n: 1, label: 'Pročitaj pitanje', detail: 'Razumi što se traži', at: 0.0 },
    { n: 2, label: 'Pronađi ključne riječi', detail: '"ubiquitous", "discourse"', at: 0.8 },
    { n: 3, label: 'Locira u tekstu', detail: '§3, redak 14–17', at: 1.6 },
    { n: 4, label: 'Eliminiraj i potvrdi', detail: 'Odgovor: C — widespread', at: 2.4 },
  ];

  return (
    <>
      <AuroraBG intensity={0.85} />

      {/* LEFT: steps */}
      <div style={{
        position: 'absolute',
        left: 120, top: 180,
        width: 860,
      }}>
        <div style={{
          fontFamily: FONT_MONO, fontSize: 18,
          color: C.blue, letterSpacing: '0.2em',
          textTransform: 'uppercase', marginBottom: 28,
        }}>
          <span style={{ opacity: 0.5, marginRight: 12 }}>—</span>Strategija čitanja
        </div>

        {steps.map((s, i) => (
          <StepRow key={i} step={s} localTime={localTime} />
        ))}
      </div>

      {/* RIGHT: mock question panel */}
      <QuestionPanel localTime={localTime} />

      <EnglishHeroComponents.Sprite start={10.3} end={15.0}>
        <EnglishHeroComponents.TextSprite
          text="Strategija umjesto sreće."
          x={960} y={960}
          align="center"
          size={52}
          weight={500}
          font={FONT_DISPLAY}
          color={C.text}
          entryDur={0.5}
          exitDur={0.3}
        />
      </EnglishHeroComponents.Sprite>
    </>
  );
}

function StepRow({ step, localTime }) {
  const lt = clamp((localTime - step.at) / 0.5, 0, 1);
  const checkLT = clamp((localTime - step.at - 0.5) / 0.35, 0, 1);
  const eased = Easing.easeOutCubic(lt);

  return (
    <div style={{
      marginBottom: 22,
      display: 'flex', alignItems: 'center', gap: 20,
      opacity: lt,
      transform: `translateX(${(1 - eased) * -30}px)`,
    }}>
      <div style={{
        width: 56, height: 56, borderRadius: 28,
        background: checkLT > 0.5 ? C.blue : 'rgba(255,255,255,0.04)',
        border: `1.5px solid ${checkLT > 0.5 ? C.blue : C.cardBorder}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: FONT_DISPLAY, fontSize: 22, fontWeight: 600,
        color: checkLT > 0.5 ? C.bg : C.text,
        boxShadow: checkLT > 0.5 ? `0 0 28px ${C.blue}88` : 'none',
        flexShrink: 0,
        transition: 'all 0.2s',
      }}>
        {checkLT > 0.7 ? (
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M5 12 L10 17 L19 7" stroke={C.bg} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : step.n}
      </div>

      <div style={{
        flex: 1,
        padding: '18px 24px',
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${checkLT > 0.5 ? `${C.blue}55` : C.cardBorder}`,
        borderRadius: 14,
        transition: 'border-color 0.3s',
      }}>
        <div style={{
          fontFamily: FONT_BODY, fontSize: 22,
          color: C.text, fontWeight: 500,
        }}>{step.label}</div>
        <div style={{
          fontFamily: FONT_MONO, fontSize: 20,
          color: checkLT > 0.3 ? C.blue : C.dim,
          marginTop: 4,
          transition: 'color 0.3s',
        }}>{step.detail}</div>
      </div>
    </div>
  );
}

function QuestionPanel({ localTime }) {
  const appear = clamp(localTime / 0.6, 0, 1);
  const answerT = clamp((localTime - 2.6) / 0.5, 0, 1);

  const options = [
    { l: 'A', t: 'unique', wrong: true },
    { l: 'B', t: 'unusual', wrong: true },
    { l: 'C', t: 'widespread', correct: true },
    { l: 'D', t: 'dangerous', wrong: true },
  ];

  return (
    <div style={{
      position: 'absolute',
      right: 80, top: 160,
      width: 820,
      padding: '40px 44px',
      background: 'rgba(255,255,255,0.03)',
      border: `1px solid ${C.cardBorder}`,
      borderRadius: 24,
      opacity: appear,
      transform: `translateY(${(1 - Easing.easeOutCubic(appear)) * 24}px)`,
    }}>
      <div style={{
        fontFamily: FONT_MONO, fontSize: 14,
        color: C.blue, letterSpacing: '0.18em',
        textTransform: 'uppercase', marginBottom: 20, opacity: 0.7,
      }}>Pitanje 3 · Čitanje s razumijevanjem</div>

      <div style={{
        fontFamily: FONT_BODY, fontSize: 22,
        color: C.text, lineHeight: 1.6, marginBottom: 28,
      }}>
        The word <em style={{ color: C.orange, fontStyle: 'normal', fontWeight: 600 }}>&quot;ubiquitous&quot;</em>{' '}
        (line 2) is closest in meaning to:
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {options.map((o, i) => {
          const reveal = clamp((localTime - 2.0) / 0.4, 0, 1);
          const isCorrect = o.correct && answerT > 0.3;
          const isWrong = o.wrong && reveal > 0.5 && answerT > 0.5;
          return (
            <div key={i} style={{
              padding: '16px 24px',
              background: isCorrect ? `${C.green}18` : isWrong ? 'rgba(255,106,122,0.06)' : 'rgba(255,255,255,0.04)',
              border: `1.5px solid ${isCorrect ? C.green : isWrong ? `${C.red}66` : C.cardBorder}`,
              borderRadius: 12,
              fontFamily: FONT_MONO, fontSize: 22,
              color: isCorrect ? C.green : isWrong ? `${C.red}99` : C.text,
              display: 'flex', alignItems: 'center', gap: 16,
              transition: 'all 0.3s',
              boxShadow: isCorrect ? `0 0 30px ${C.green}33` : 'none',
            }}>
              <span style={{
                width: 36, height: 36, borderRadius: 18,
                background: isCorrect ? C.green : isWrong ? 'rgba(255,106,122,0.25)' : 'rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: 16,
                flexShrink: 0, color: isCorrect ? C.bg : 'inherit',
              }}>{o.l}</span>
              {o.t}
              {isCorrect && (
                <svg style={{ marginLeft: 'auto' }} width="24" height="24" viewBox="0 0 24 24">
                  <path d="M5 12 L10 17 L19 7" stroke={C.green} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── SCENE 5 (15–20s) — RESULT: big score ────────────────────────────────

function Scene5_Result() {
  const { localTime } = useSprite();
  const countT = Easing.easeOutCubic(clamp(localTime / 1.4, 0, 1));
  const score = Math.round(countT * 96);

  return (
    <>
      <AuroraBG intensity={1.0} />

      {/* Confetti */}
      {Array.from({ length: 22 }).map((_, i) => {
        const seed = (i * 37) % 100;
        const delay = (seed / 100) * 0.9;
        const t = clamp(localTime - delay, 0, 10);
        const fall = t * 90;
        const sway = Math.sin(t * 2 + seed) * 30;
        const color = i % 3 === 0 ? C.orange : i % 2 === 0 ? C.blue : C.purple;
        return (
          <div key={i} style={{
            position: 'absolute',
            left: `${8 + seed * 0.82}%`,
            top: -20 + fall + (seed % 40),
            width: 8, height: 8,
            borderRadius: 4,
            background: color,
            transform: `translateX(${sway}px) rotate(${t * 180}deg)`,
            opacity: t > 0 ? 0.8 - t * 0.1 : 0,
            boxShadow: `0 0 8px ${color}`,
          }}/>
        );
      })}

      {/* Score card */}
      <div style={{
        position: 'absolute',
        left: '50%', top: '50%',
        transform: 'translate(-50%, -52%)',
        width: 900,
        padding: '60px 70px',
        background: 'rgba(255,255,255,0.04)',
        border: `1px solid ${C.cardBorder}`,
        borderRadius: 32,
        boxShadow: `0 40px 120px ${C.blue}55`,
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: FONT_MONO, fontSize: 16,
          color: C.blue, letterSpacing: '0.2em',
          textTransform: 'uppercase', marginBottom: 20,
        }}>Rezultat · Matura simulacija</div>

        <div style={{
          fontFamily: FONT_DISPLAY,
          fontSize: 260,
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: '-0.04em',
          background: `linear-gradient(180deg, ${C.blue} 0%, ${C.purple} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: 4,
        }}>
          {score}<span style={{ fontSize: 120 }}>%</span>
        </div>

        <div style={{
          fontFamily: FONT_DISPLAY, fontSize: 34, fontWeight: 500,
          color: C.text, letterSpacing: '-0.01em',
          opacity: clamp((localTime - 1.3) / 0.4, 0, 1),
        }}>A razina · Ocjena <span style={{ color: C.orange }}>5</span> · C1</div>

        {/* Part bars */}
        <div style={{
          display: 'flex', gap: 14, justifyContent: 'center',
          marginTop: 34,
          opacity: clamp((localTime - 1.6) / 0.5, 0, 1),
        }}>
          {[
            { l: 'Slušanje',    v: 92, color: C.blue },
            { l: 'Čitanje',     v: 100, color: C.purple },
            { l: 'Jez. komp.',  v: 96, color: C.orange },
            { l: 'Pisanje',     v: 94, color: C.green },
          ].map((m, i) => {
            const barLT = clamp((localTime - 1.8 - i * 0.1) / 0.6, 0, 1);
            return (
              <div key={i} style={{
                padding: '14px 20px',
                background: `${m.color}18`,
                border: `1px solid ${m.color}44`,
                borderRadius: 12,
                fontFamily: FONT_MONO, fontSize: 14,
                color: C.text,
                minWidth: 140,
              }}>
                <div style={{ opacity: 0.6, fontSize: 11, letterSpacing: '0.1em', color: m.color }}>{m.l.toUpperCase()}</div>
                <div style={{ fontSize: 22, fontWeight: 600, marginTop: 4 }}>
                  {Math.round(m.v * barLT)}%
                </div>
                <div style={{ height: 4, background: 'rgba(255,255,255,0.08)', borderRadius: 2, marginTop: 6, overflow: 'hidden' }}>
                  <div style={{
                    width: `${m.v * barLT}%`, height: '100%',
                    background: `linear-gradient(90deg, ${m.color}, ${m.color}aa)`,
                  }}/>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <EnglishHeroComponents.Sprite start={15.3} end={20.0}>
        <EnglishHeroComponents.TextSprite
          text="Engleski koji razumiješ."
          x={960} y={990}
          align="center"
          size={60}
          weight={500}
          font={FONT_DISPLAY}
          color={C.text}
          entryDur={0.4}
          exitDur={0.3}
        />
      </EnglishHeroComponents.Sprite>
    </>
  );
}

// ─── SCENE 6 (20–25s) — CTA ──────────────────────────────────────────────

function Scene6_CTA({ cta = 'Kreni besplatno' }) {
  const { localTime } = useSprite();

  const logoT = Easing.easeOutCubic(clamp(localTime / 0.6, 0, 1));
  const btnT = Easing.easeOutBack(clamp((localTime - 0.6) / 0.5, 0, 1));
  const urlT = clamp((localTime - 1.3) / 0.4, 0, 1);
  const pulse = 0.7 + Math.sin(localTime * 3) * 0.3;

  return (
    <>
      <AuroraBG intensity={1.2} />

      <div style={{
        position: 'absolute',
        left: '50%', top: '50%',
        width: 1200, height: 1200,
        transform: 'translate(-50%,-50%)',
        background: `radial-gradient(circle, ${C.blue}55 0%, transparent 55%)`,
        opacity: logoT * pulse,
        filter: 'blur(20px)',
      }}/>

      {/* Logo */}
      <div style={{
        position: 'absolute',
        left: '50%', top: 300,
        transform: `translate(-50%, ${(1 - logoT) * -20}px)`,
        opacity: logoT,
        display: 'flex', alignItems: 'center', gap: 20,
      }}>
        <LogoMark size={96} />
        <div style={{
          fontFamily: FONT_DISPLAY,
          fontSize: 92,
          fontWeight: 700,
          color: C.text,
          letterSpacing: '-0.03em',
        }}>
          maturiraj<span style={{ color: C.blue }}>.hr</span>
        </div>
      </div>

      {/* Subtitle */}
      <div style={{
        position: 'absolute',
        left: '50%', top: 460,
        transform: 'translate(-50%, 0)',
        opacity: logoT,
        fontFamily: FONT_DISPLAY,
        fontSize: 34,
        color: C.dim,
        letterSpacing: '-0.01em',
        whiteSpace: 'nowrap',
      }}>
        Engleski jezik · A i B razina
      </div>

      {/* CTA button */}
      <div style={{
        position: 'absolute',
        left: '50%', top: 560,
        transform: `translate(-50%, 0) scale(${0.8 + 0.2 * btnT})`,
        opacity: btnT,
      }}>
        <div style={{
          padding: '28px 60px',
          background: `linear-gradient(135deg, ${C.blue}, ${C.purple})`,
          borderRadius: 18,
          fontFamily: FONT_DISPLAY,
          fontSize: 44,
          fontWeight: 600,
          color: '#fff',
          letterSpacing: '-0.01em',
          boxShadow: `0 20px 60px ${C.blue}${Math.floor(pulse * 255).toString(16).padStart(2, '0')}, 0 0 ${pulse * 80}px ${C.purple}aa`,
          display: 'flex', alignItems: 'center', gap: 20,
          position: 'relative',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}>
          {cta}
          <svg width="32" height="32" viewBox="0 0 32 32">
            <path d="M8 16 L24 16 M18 10 L24 16 L18 22" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div style={{
            position: 'absolute',
            top: 0, left: `${-40 + (localTime * 60) % 200}%`,
            width: 80, height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            transform: 'skewX(-20deg)',
          }}/>
        </div>
      </div>

      {/* Feature pills */}
      <div style={{
        position: 'absolute',
        left: '50%', top: 730,
        transform: 'translate(-50%, 0)',
        opacity: urlT,
        display: 'flex', gap: 14,
        whiteSpace: 'nowrap',
      }}>
        {['Plan učenja', 'Discere', 'AI Profesor'].map((p, i) => (
          <div key={i} style={{
            padding: '10px 20px',
            background: 'rgba(255,255,255,0.04)',
            border: `1px solid ${C.cardBorder}`,
            borderRadius: 999,
            fontFamily: FONT_MONO,
            fontSize: 18,
            color: C.text,
            letterSpacing: '0.04em',
          }}>
            {p}
          </div>
        ))}
      </div>
    </>
  );
}

function LogoMark({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80">
      <defs>
        <linearGradient id="logo-grad-eng" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={C.blue}/>
          <stop offset="1" stopColor={C.purple}/>
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="72" height="72" rx="18" fill="url(#logo-grad-eng)"/>
      <text x="40" y="52" textAnchor="middle" fontFamily="'Inter', sans-serif"
        fontSize="34" fontWeight="700" fill="#fff">E</text>
    </svg>
  );
}

// ─── Sound triggers ──────────────────────────────────────────────────────────

const ENG_SOUND_TRIGGERS = [
  { at: 0.05,  sound: 'swoosh' },
  { at: 0.85,  sound: 'error' },
  { at: 3.0,   sound: 'swoosh' },
  { at: 3.65,  sound: 'error' },
  { at: 4.3,   sound: 'error' },
  { at: 5.1,   sound: 'error' },
  { at: 6.0,   sound: 'swoosh' },
  { at: 6.55,  sound: 'appear' },
  { at: 6.95,  sound: 'appear', options: { freq: 1300 } },
  { at: 7.35,  sound: 'appear', options: { freq: 1550 } },
  { at: 7.75,  sound: 'appear', options: { freq: 1800 } },
  { at: 10.0,  sound: 'swoosh' },
  { at: 10.85, sound: 'checkmark' },
  { at: 11.65, sound: 'checkmark' },
  { at: 12.45, sound: 'checkmark' },
  { at: 13.25, sound: 'checkmark' },
  { at: 14.6,  sound: 'ping', options: { freq: 880 } },
  { at: 15.0,  sound: 'swoosh' },
  { at: 15.35, sound: 'score-count' },
  { at: 16.3,  sound: 'success' },
  { at: 20.0,  sound: 'cta-whoosh' },
  { at: 20.9,  sound: 'ping', options: { freq: 660 } },
];

function SoundTimeline({ triggers }) {
  const time = useTime();
  const { play } = useSound();
  const prevRef = React.useRef(-1);
  React.useEffect(() => {
    const prev = prevRef.current;
    prevRef.current = time;
    if (time < prev - 0.5) return; // backward seek → skip
    triggers.forEach(({ at, sound, options }) => {
      if (prev < at && time >= at) play(sound, options || {});
    });
  });
  return null;
}

// ─── Root composition — 25s timeline ─────────────────────────────────────

function VideoRoot({ cta, accent }) {
  const t = useTime();
  const rootRef = React.useRef(null);
  React.useEffect(() => {
    if (rootRef.current) {
      rootRef.current.setAttribute('data-screen-label', `t=${t.toFixed(1)}s`);
    }
  }, [Math.floor(t)]);

  return (
    <div ref={rootRef} style={{ position: 'absolute', inset: 0 }}>
      <SoundTimeline triggers={ENG_SOUND_TRIGGERS} />
      <EnglishHeroComponents.Sprite start={0}    end={3.0}>  <Scene1_Panic /></EnglishHeroComponents.Sprite>
      <EnglishHeroComponents.Sprite start={3.0}  end={6.0}>  <Scene2_Chaos /></EnglishHeroComponents.Sprite>
      <EnglishHeroComponents.Sprite start={6.0}  end={10.0}> <Scene3_Clarity /></EnglishHeroComponents.Sprite>
      <EnglishHeroComponents.Sprite start={10.0} end={15.0}> <Scene4_Steps /></EnglishHeroComponents.Sprite>
      <EnglishHeroComponents.Sprite start={15.0} end={20.0}> <Scene5_Result /></EnglishHeroComponents.Sprite>
      <EnglishHeroComponents.Sprite start={20.0} end={25.0}> <Scene6_CTA cta={cta} /></EnglishHeroComponents.Sprite>
    </div>
  );
}

Object.assign(window, {
  VideoRoot, C,
  Scene1_Panic, Scene2_Chaos, Scene3_Clarity,
  Scene4_Steps, Scene5_Result, Scene6_CTA,
  LogoMark,
});
