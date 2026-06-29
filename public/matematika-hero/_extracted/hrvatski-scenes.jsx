// hrvatski-scenes.jsx — 6 scenes for the maturiraj.hr Hrvatski hero video
// Mirrors the matematika-scenes template:
// panic → chaos → clarity → steps → result → CTA
// Swaps math content for text / literary analysis content.

const C = {
  bg: '#0a0a14',
  bgDeep: '#06060d',
  blue: '#5b8cff',
  purple: '#b57bff',
  orange: '#ff9a55',
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

// ─── SCENE 1 (0–3s) — PANIC: dense text page with glitching underlines ───

function Scene1_Panic() {
  const { localTime } = useSprite();
  const glitchIntensity = Easing.easeInQuad(clamp(localTime / 2.8, 0, 1));

  // Falling "noise" — stray letters, punctuation, fragments
  const rain = Array.from({ length: 34 }).map((_, i) => {
    const seed = (i * 31) % 100;
    return {
      x: (seed * 19) % 1920,
      startY: -100 - (seed % 5) * 80,
      speed: 120 + (seed % 7) * 55,
      rot: (seed % 6 - 3) * 10,
      char: ['?', '!', '„', '”', '…', '—', 'A', 'I', 'tema', 'stil', 'esej', 'lik', 'ulomak', 'teza', 'citat', 'poruka'][seed % 16],
      size: 22 + (seed % 5) * 10,
      color: (seed % 9 === 0) ? C.red : (seed % 7 === 0) ? C.purple : C.dim,
      delay: (seed % 10) * 0.08,
    };
  });

  return (
    <>
      <AuroraBG intensity={0.3} tintA={C.red} tintB={C.purple} />

      {rain.map((r, i) => {
        const t = Math.max(0, localTime - r.delay);
        const y = r.startY + t * r.speed;
        return (
          <div key={i} style={{
            position: 'absolute',
            left: r.x, top: y,
            fontFamily: FONT_BODY,
            fontSize: r.size,
            color: r.color,
            transform: `rotate(${r.rot}deg)`,
            opacity: 0.55,
            textShadow: r.color === C.red ? `0 0 12px ${C.red}` : 'none',
            whiteSpace: 'nowrap',
          }}>{r.char}</div>
        );
      })}

      {/* Mock matura reading-comprehension page */}
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
            Matura · Hrvatski · Zadatak 08
          </div>
          <div style={{
            fontFamily: FONT_MONO, fontSize: 14,
            color: C.red, letterSpacing: '0.1em',
            padding: '6px 12px',
            border: `1px solid ${C.red}55`,
            borderRadius: 6,
            opacity: clamp((localTime - 0.3) / 0.3, 0, 1),
          }}>400 RIJEČI</div>
        </div>

        <div style={{
          fontFamily: FONT_BODY, fontSize: 26,
          color: C.text, lineHeight: 1.5, marginBottom: 24,
          opacity: 1 - glitchIntensity * 0.3,
        }}>
          Pročitaj ulomak i odgovori na pitanja. Napiši esej od 400 riječi.
        </div>

        <GlitchyParagraph localTime={localTime} intensity={glitchIntensity} />

        <div style={{
          marginTop: 28,
          display: 'flex', gap: 14, flexWrap: 'wrap',
        }}>
          {['A) Lirski subjekt je sretan', 'B) Tema je domovina', 'C) Pjesma govori o prolaznosti', 'D) Ništa od navedenog'].map((opt, i) => (
            <div key={i} style={{
              padding: '12px 18px',
              background: 'rgba(255,255,255,0.04)',
              border: `1px solid ${C.cardBorder}`,
              borderRadius: 10,
              fontFamily: FONT_BODY, fontSize: 19,
              color: C.text,
              opacity: 1 - glitchIntensity * 0.4,
              filter: `blur(${glitchIntensity * 2}px)`,
            }}>{opt}</div>
          ))}
        </div>
      </div>

      <Sprite start={0.5} end={3.0}>
        <TextSprite
          text="Čitaš… ali ne znaš što je bitno?"
          x={960} y={970}
          align="center"
          size={60}
          weight={600}
          font={FONT_DISPLAY}
          color={C.text}
          entryDur={0.5}
          exitDur={0.3}
        />
      </Sprite>
    </>
  );
}

function GlitchyParagraph({ localTime, intensity }) {
  // A short Croatian prose snippet with each token wobbling
  const tokens = (
    "Vraćao se kasno u noć , i činilo mu se da grad leži pod njim kao otvorena knjiga , čiji redovi gore sitnim svjetlima ."
  ).split(' ').filter(Boolean);

  return (
    <div style={{
      padding: '28px 36px',
      background: 'rgba(255,106,122,0.06)',
      border: `1px dashed ${C.red}55`,
      borderRadius: 16,
      fontFamily: FONT_BODY,
      fontSize: 30,
      lineHeight: 1.45,
      color: C.text,
      filter: `blur(${intensity * 2.2}px)`,
    }}>
      {tokens.map((tok, i) => {
        const seed = (i * 17) % 97;
        const wobbleX = Math.sin((localTime + seed) * 6) * intensity * 5;
        const wobbleY = Math.cos((localTime + seed) * 5) * intensity * 6;
        const rot = Math.sin((localTime + seed) * 4) * intensity * 3;
        const color = intensity > 0.5 && (seed % 4 === 0) ? C.red
          : intensity > 0.6 && (seed % 5 === 0) ? C.purple
          : C.text;
        const underline = intensity > 0.4 && (seed % 3 === 0);
        return (
          <span key={i} style={{
            display: 'inline-block',
            margin: '0 4px',
            transform: `translate(${wobbleX}px, ${wobbleY}px) rotate(${rot}deg)`,
            color,
            textDecoration: underline ? 'underline wavy' : 'none',
            textDecorationColor: C.red,
          }}>{tok}</span>
        );
      })}
    </div>
  );
}

// ─── SCENE 2 (3–6s) — CHAOS: floating terms, timer, X marks ──────────────

function Scene2_Chaos() {
  const { localTime } = useSprite();

  const seconds = Math.max(3, Math.floor(38 - localTime * 11));
  const timerText = `0:${String(seconds).padStart(2, '0')}`;

  // Floating literary/linguistic terms that pile up
  const floaters = [
    { t: 'metafora', at: 0.1, x: 140, y: 180, rot: -4, color: C.blue },
    { t: 'lirski subjekt', at: 0.3, x: 1080, y: 150, rot: 6, color: C.purple },
    { t: 'personifikacija', at: 0.5, x: 240, y: 520, rot: 3, color: C.text },
    { t: 'simbol', at: 0.7, x: 1200, y: 460, rot: -5, color: C.orange },
    { t: 'teza · argument · zaključak', at: 0.9, x: 620, y: 380, rot: 2, color: C.red },
    { t: 'stilska figura', at: 1.1, x: 160, y: 760, rot: 1, color: C.purple },
    { t: 'citiranje izvora', at: 1.3, x: 1100, y: 760, rot: -2, color: C.blue },
  ];

  const wrongAnswers = [
    { t: '„ne znam što traže”', at: 1.0, x: 500, y: 260 },
    { t: 'krivi citat', at: 1.4, x: 920, y: 620 },
    { t: 'bez strukture', at: 1.8, x: 340, y: 330 },
  ];

  return (
    <>
      <AuroraBG intensity={0.5} tintA={C.red} tintB={C.purple} />

      {floaters.map((f, i) => {
        const lt = clamp((localTime - f.at) / 0.4, 0, 1);
        const drift = Math.sin(localTime * 1.5 + i) * 4;
        return (
          <div key={i} style={{
            position: 'absolute',
            left: f.x, top: f.y + drift,
            fontFamily: FONT_BODY,
            fontSize: 40 + (i % 3) * 6,
            fontWeight: 500,
            color: f.color,
            opacity: lt * 0.72,
            transform: `rotate(${f.rot}deg) scale(${0.7 + 0.3 * Easing.easeOutBack(lt)})`,
            textShadow: `0 0 24px ${f.color}55`,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
          }}>{f.t}</div>
        );
      })}

      {wrongAnswers.map((w, i) => {
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
            fontFamily: FONT_BODY,
            fontSize: 30,
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

      <Sprite start={3.3} end={6.0}>
        <TextSprite
          text="Previše pojmova. Premalo smisla."
          x={960} y={940}
          align="center"
          size={64}
          weight={600}
          font={FONT_DISPLAY}
          color={C.text}
          entryDur={0.5}
          exitDur={0.3}
        />
      </Sprite>
    </>
  );
}

// ─── SCENE 3 (6–10s) — CLARITY: one framework assembles ──────────────────

function Scene3_Clarity() {
  const { localTime } = useSprite();
  const labelsT = clamp((localTime - 1.2) / 0.8, 0, 1);

  // Instead of a formula, show: TEMA · PORUKA · STIL as the "obrazac"
  const pillars = [
    { t: 'TEMA',    color: C.blue,   w: 420 },
    { t: '·',       color: C.dim,    w: 60 },
    { t: 'PORUKA',  color: C.purple, w: 520 },
    { t: '·',       color: C.dim,    w: 60 },
    { t: 'STIL',    color: C.orange, w: 330 },
  ];

  return (
    <>
      <AuroraBG intensity={0.75} />

      <div style={{
        position: 'absolute',
        left: '50%', top: 200,
        transform: 'translateX(-50%)',
        fontFamily: FONT_MONO, fontSize: 22,
        color: C.blue, letterSpacing: '0.22em',
        textTransform: 'uppercase',
        opacity: clamp(localTime / 0.4, 0, 1),
      }}>
        <span style={{ opacity: 0.5, marginRight: 14 }}>—</span>
        Sad zamisli ovo
      </div>

      <div style={{
        position: 'absolute',
        left: 0, right: 0, top: 360,
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        gap: 24,
        fontFamily: FONT_DISPLAY,
        fontSize: 170,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: '-0.02em',
      }}>
        {pillars.map((p, i) => {
          const partAt = i * 0.12;
          const lt = clamp((localTime - partAt) / 0.4, 0, 1);
          const eased = Easing.easeOutBack(lt);
          return (
            <span key={i} style={{
              display: 'inline-block',
              color: p.color,
              opacity: lt,
              transform: `translateY(${(1 - eased) * 40}px) scale(${0.5 + 0.5 * eased})`,
              textShadow: (p.color !== C.dim)
                ? `0 0 60px ${p.color}77` : 'none',
              textAlign: 'center',
            }}>{p.t}</span>
          );
        })}
      </div>

      <PillarLabels t={labelsT} />

      <Sprite start={6.6} end={10.0}>
        <TextSprite
          text="Svaki tekst — jedan okvir."
          x={960} y={920}
          align="center"
          size={52}
          weight={500}
          font={FONT_DISPLAY}
          color={C.text}
          entryDur={0.5}
          exitDur={0.3}
        />
      </Sprite>
    </>
  );
}

function PillarLabels({ t }) {
  const labels = [
    { k: 'TEMA',   color: C.blue,   desc: 'o čemu tekst govori',    x: 440, at: 0 },
    { k: 'PORUKA', color: C.purple, desc: 'što autor želi reći',    x: 960, at: 0.15 },
    { k: 'STIL',   color: C.orange, desc: 'kako je napisano',       x: 1480, at: 0.3 },
  ];
  return (
    <>
      {labels.map((l, i) => {
        const lt = clamp((t - l.at) / 0.4, 0, 1);
        const eased = Easing.easeOutCubic(lt);
        return (
          <div key={i} style={{
            position: 'absolute',
            left: l.x, top: 680,
            transform: `translate(-50%, ${(1 - eased) * 20}px)`,
            opacity: lt,
            textAlign: 'center',
          }}>
            <svg width="2" height="80" style={{ display: 'block', margin: '0 auto 14px' }}>
              <line x1="1" y1="0" x2="1" y2="80" stroke={l.color} strokeWidth="1.5" strokeDasharray="3 4" opacity="0.6"/>
            </svg>
            <div style={{
              padding: '16px 26px',
              background: `${l.color}12`,
              border: `1.5px solid ${l.color}`,
              borderRadius: 14,
              minWidth: 260,
              boxShadow: `0 14px 40px ${l.color}33`,
            }}>
              <div style={{
                fontFamily: FONT_DISPLAY, fontSize: 28,
                color: l.color, fontWeight: 600,
                lineHeight: 1, letterSpacing: '0.04em',
              }}>{l.k}</div>
              <div style={{
                fontFamily: FONT_BODY, fontSize: 18,
                color: C.dim, marginTop: 8,
              }}>{l.desc}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

// ─── SCENE 4 (10–15s) — STEPS: 4 steps + highlighted passage on the right ─

function Scene4_Steps() {
  const { localTime } = useSprite();

  const steps = [
    { n: 1, label: 'Pronađi temu',           detail: 'o čemu ulomak govori',              at: 0.0 },
    { n: 2, label: 'Odredi poruku',          detail: 'što autor želi reći',               at: 0.8 },
    { n: 3, label: 'Prepoznaj stilske figure', detail: 'usporedba · metafora · simbol',   at: 1.6 },
    { n: 4, label: 'Napiši esej',            detail: 'teza → argument → zaključak',       at: 2.4 },
  ];

  return (
    <>
      <AuroraBG intensity={0.85} />

      <div style={{
        position: 'absolute',
        left: 120, top: 200,
        width: 800,
      }}>
        <div style={{
          fontFamily: FONT_MONO, fontSize: 18,
          color: C.blue, letterSpacing: '0.2em',
          textTransform: 'uppercase', marginBottom: 28,
        }}>
          <span style={{ opacity: 0.5, marginRight: 12 }}>—</span>Postupak
        </div>

        {steps.map((s, i) => (
          <StepRow key={i} step={s} localTime={localTime} />
        ))}
      </div>

      <AnnotatedPassage localTime={localTime} />

      <Sprite start={10.3} end={15.0}>
        <TextSprite
          text="Korak po korak. Bez nagađanja."
          x={960} y={960}
          align="center"
          size={52}
          weight={500}
          font={FONT_DISPLAY}
          color={C.text}
          entryDur={0.5}
          exitDur={0.3}
        />
      </Sprite>
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
          fontFamily: FONT_BODY, fontSize: 20,
          color: checkLT > 0.3 ? C.blue : C.dim,
          marginTop: 4,
          transition: 'color 0.3s',
        }}>{step.detail}</div>
      </div>
    </div>
  );
}

function AnnotatedPassage({ localTime }) {
  // Passage with staggered color highlights mirroring the 4 steps
  const tokens = [
    { t: 'Vraćao se kasno u ', k: null },
    { t: 'noć', k: 'tema', start: 0.4 },
    { t: ', i činilo mu se da grad leži pod njim ', k: null },
    { t: 'kao otvorena knjiga', k: 'stil', start: 2.0 },
    { t: ', čiji redovi gore sitnim svjetlima. Sve što je ikada mislio o sebi sada se ', k: null },
    { t: 'vraćalo kao eho', k: 'poruka', start: 1.2 },
    { t: ', tih i jasan, u samoj tišini ulica.', k: null },
  ];

  const colors = { tema: C.blue, poruka: C.purple, stil: C.orange };

  return (
    <div style={{
      position: 'absolute',
      right: 100, top: 200,
      width: 780,
      padding: '36px 42px',
      background: 'rgba(255,255,255,0.02)',
      border: `1px solid ${C.cardBorder}`,
      borderRadius: 24,
      boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        marginBottom: 20,
      }}>
        <div style={{
          fontFamily: FONT_MONO, fontSize: 14,
          color: C.blue, letterSpacing: '0.18em',
          textTransform: 'uppercase',
        }}>Ulomak · analiza</div>
        <div style={{
          fontFamily: FONT_MONO, fontSize: 12,
          color: C.dim, letterSpacing: '0.08em',
        }}>str. 14 / 312</div>
      </div>

      <div style={{
        fontFamily: FONT_BODY, fontSize: 28,
        lineHeight: 1.55, color: C.text,
      }}>
        {tokens.map((tok, i) => {
          if (!tok.k) return <span key={i}>{tok.t}</span>;
          const hT = clamp((localTime - tok.start) / 0.4, 0, 1);
          const col = colors[tok.k];
          return (
            <span key={i} style={{
              background: `linear-gradient(to right, ${col}33 0%, ${col}33 ${hT*100}%, transparent ${hT*100}%)`,
              boxShadow: hT > 0.9 ? `inset 0 -3px 0 ${col}` : 'none',
              padding: '2px 4px',
              borderRadius: 4,
              color: hT > 0.5 ? C.text : C.text,
            }}>{tok.t}</span>
          );
        })}
      </div>

      {/* Legend */}
      <div style={{
        display: 'flex', gap: 18, marginTop: 24,
        fontFamily: FONT_MONO, fontSize: 13,
        letterSpacing: '0.16em', textTransform: 'uppercase',
      }}>
        {[
          { k: 'tema', col: C.blue,   at: 0.5 },
          { k: 'poruka', col: C.purple, at: 1.3 },
          { k: 'stil', col: C.orange, at: 2.1 },
        ].map((l, i) => {
          const op = clamp((localTime - l.at) / 0.4, 0, 1);
          return (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              opacity: op, color: l.col,
            }}>
              <div style={{ width:10, height:10, borderRadius:5, background: l.col, boxShadow: `0 0 12px ${l.col}` }}/>
              {l.k}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── SCENE 5 (15–20s) — RESULT: big score + topic bars + confetti ────────

function Scene5_Result() {
  const { localTime } = useSprite();

  const countT = Easing.easeOutCubic(clamp(localTime / 1.4, 0, 1));
  const score = Math.round(countT * 92);

  return (
    <>
      <AuroraBG intensity={1.0} />

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
        }}>Ocjena <span style={{ color: C.orange }}>5</span></div>

        <div style={{
          display: 'flex', gap: 14, justifyContent: 'center',
          marginTop: 34,
          opacity: clamp((localTime - 1.6) / 0.5, 0, 1),
        }}>
          {[
            { l: 'Čitanje', v: 95 },
            { l: 'Esej', v: 91 },
            { l: 'Književnost', v: 90 },
            { l: 'Jezik', v: 92 },
          ].map((m, i) => {
            const barLT = clamp((localTime - 1.8 - i * 0.1) / 0.6, 0, 1);
            return (
              <div key={i} style={{
                padding: '14px 20px',
                background: 'rgba(91,140,255,0.1)',
                border: `1px solid ${C.blue}44`,
                borderRadius: 12,
                fontFamily: FONT_MONO, fontSize: 14,
                color: C.text,
                minWidth: 140,
              }}>
                <div style={{ opacity: 0.6, fontSize: 11, letterSpacing: '0.1em' }}>{m.l.toUpperCase()}</div>
                <div style={{ fontSize: 22, fontWeight: 600, marginTop: 4 }}>
                  {Math.round(m.v * barLT)}%
                </div>
                <div style={{ height: 4, background: 'rgba(255,255,255,0.08)', borderRadius: 2, marginTop: 6, overflow: 'hidden' }}>
                  <div style={{
                    width: `${m.v * barLT}%`, height: '100%',
                    background: `linear-gradient(90deg, ${C.blue}, ${C.purple})`,
                  }}/>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Sprite start={15.3} end={20.0}>
        <TextSprite
          text="Hrvatski koji razumiješ."
          x={960} y={990}
          align="center"
          size={60}
          weight={500}
          font={FONT_DISPLAY}
          color={C.text}
          entryDur={0.4}
          exitDur={0.3}
        />
      </Sprite>
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

      <div style={{
        position: 'absolute',
        left: '50%', top: 320,
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

      <div style={{
        position: 'absolute',
        left: '50%', top: 470,
        transform: 'translate(-50%, 0)',
        opacity: logoT,
        fontFamily: FONT_DISPLAY,
        fontSize: 34,
        color: C.dim,
        letterSpacing: '-0.01em',
      }}>
        Hrvatski jezik
      </div>

      <div style={{
        position: 'absolute',
        left: '50%', top: 580,
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

      <div style={{
        position: 'absolute',
        left: '50%', top: 740,
        transform: 'translate(-50%, 0)',
        opacity: urlT,
        display: 'flex', gap: 14,
      }}>
        {['Skripte', 'AI Profesor', 'Discere'].map((p, i) => (
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
  // An "H" (Hrvatski) monogram on a gradient tile
  return (
    <svg width={size} height={size} viewBox="0 0 80 80">
      <defs>
        <linearGradient id="logo-grad-hr" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={C.blue}/>
          <stop offset="1" stopColor={C.purple}/>
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="72" height="72" rx="18" fill="url(#logo-grad-hr)"/>
      <path d="M24 22 L24 58 M24 40 L56 40 M56 22 L56 58"
        stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round"/>
    </svg>
  );
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
      <Sprite start={0}    end={3.0}>  <Scene1_Panic /></Sprite>
      <Sprite start={3.0}  end={6.0}>  <Scene2_Chaos /></Sprite>
      <Sprite start={6.0}  end={10.0}> <Scene3_Clarity /></Sprite>
      <Sprite start={10.0} end={15.0}> <Scene4_Steps /></Sprite>
      <Sprite start={15.0} end={20.0}> <Scene5_Result /></Sprite>
      <Sprite start={20.0} end={25.0}> <Scene6_CTA cta={cta} /></Sprite>
    </div>
  );
}

Object.assign(window, {
  VideoRoot, C,
  Scene1_Panic, Scene2_Chaos, Scene3_Clarity,
  Scene4_Steps, Scene5_Result, Scene6_CTA,
  LogoMark,
});
