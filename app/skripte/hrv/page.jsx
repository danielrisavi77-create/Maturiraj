/**
 * Chapter list page: /skripte/hrv
 * Premium književni dizajn + Desktop conversion sidebar.
 *
 * Layer 1: A/B test Pro card (50/50 split, sticky)
 * Layer 2: Exit-intent modal (1× po sesiji, smart timing)
 * Layer 3: Tier personalizacija (Free / Standard / Pro)
 *
 * Mobile (<1100px): single column, sidebar sakriven
 * Desktop (≥1100px): 2-column s sticky sidebar
 */
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CHAPTER_LIST } from '@/app/skripte/data/hrv-components/chapters';

const GROUPS = [
  { id: 'svjetska', title: 'Svjetska književnost', subtitle: 'Antika · srednji vijek · novi vijek · 20. st.', range: [1, 10], eye: 'I' },
  { id: 'hrvatska', title: 'Hrvatska književnost', subtitle: 'Renesansa · barok · romantizam · realizam · moderna', range: [11, 16], eye: 'II' },
  { id: 'stilistika', title: 'Stilistika i versifikacija', subtitle: 'Tropi · figure · vrste stiha · strofa', range: [17, 18], eye: 'III' },
  { id: 'jezik', title: 'Jezikoslovlje', subtitle: 'Fonetika · morfologija · sintaksa · leksikologija', range: [19, 24], eye: 'IV' },
  { id: 'pisanje', title: 'Pravopis i pisanje', subtitle: 'Pravopis · interpunkcija · školski esej · sažetak', range: [25, 28], eye: 'V' },
];

const CHAPTER_META = {
  h01:{short:'Antika',sub:'Homer · Sofoklo · Biblija · Vergilije'},
  h02:{short:'Srednji vijek',sub:'Bašćanska ploča · glagoljica'},
  h03:{short:'Renesansa',sub:'Petrarca · Shakespeare · Cervantes'},
  h04:{short:'Barok i klasicizam',sub:'Calderón · Molière · Racine'},
  h05:{short:'Prosvjetiteljstvo',sub:'Goethe · Schiller · Rousseau'},
  h06:{short:'Romantizam',sub:'Puškin · Heine · Hugo · Poe'},
  h07:{short:'Realizam',sub:'Dostojevski · Tolstoj · Flaubert'},
  h08:{short:'Moderna',sub:'Kafka · Joyce · Proust'},
  h09:{short:'Egzistencijalizam',sub:'Camus · Sartre · Beckett'},
  h10:{short:'Postmoderna',sub:'Eco · Borges · Pavličić'},
  h11:{short:'Stari hrv. pisci',sub:'Marulić · Hektorović · Lucić · Držić'},
  h12:{short:'Marulić · Judita',sub:'prva hrvatska tiskana knjiga'},
  h13:{short:'Gundulić · Dubravka',sub:'pastoralna alegorija slobode'},
  h14:{short:'Mažuranić · Smail-aga',sub:'romantizam i deseterac'},
  h15:{short:'Šenoa · Prijan Lovro',sub:'realistička novela'},
  h16:{short:'Krleža · Glembajevi',sub:'drama hrvatske građanske obitelji'},
  h17:{short:'Stilske figure',sub:'tropi · semantičke · sintaktičke'},
  h18:{short:'Versifikacija',sub:'tipovi stiha · strofa · rima'},
  h19:{short:'Fonetika i fonologija',sub:'glasovi · alternacije · naglasak'},
  h20:{short:'Morfologija',sub:'vrste riječi · oblici · tvorba'},
  h21:{short:'Sintaksa',sub:'rečenični članovi · vrste rečenica'},
  h22:{short:'Leksikologija',sub:'značenje · sinonimi · frazemi'},
  h23:{short:'Povijest jezika',sub:'razdoblja · pisma · standardizacija'},
  h24:{short:'Hrvatska narječja',sub:'štokavsko · čakavsko · kajkavsko'},
  h25:{short:'Pravopis',sub:'veliko/malo slovo · č/ć · ije/je'},
  h26:{short:'Interpunkcija',sub:'zarez · navodnici · crtica · točka'},
  h27:{short:'Školski esej',sub:'interpretativni · raspravljački · usporedni'},
  h28:{short:'Sažetak',sub:'4 koraka · struktura · primjeri'},
};

const RECENT_ACTIVITY_FREE = [
  { name: 'Marko T.', city: 'Zagreb', action: 'upisao Pro', time: 'prije 4 min' },
  { name: 'Lana K.', city: 'Split', action: 'završila H12 · Judita', time: 'prije 7 min' },
  { name: 'Ivan P.', city: 'Osijek', action: 'upisao Standard', time: 'prije 12 min' },
  { name: 'Petra B.', city: 'Rijeka', action: 'AI feedback na esej', time: 'prije 18 min' },
  { name: 'Filip M.', city: 'Zadar', action: 'završio H28 · Sažetak', time: 'prije 24 min' },
  { name: 'Sara N.', city: 'Pula', action: 'upisala Pro', time: 'prije 31 min' },
];

const RECENT_ACTIVITY_STANDARD = [
  { name: 'Marko T.', city: 'Zagreb', action: 'upgrade na Pro', time: 'prije 4 min' },
  { name: 'Ana V.', city: 'Šibenik', action: 'upisala Pro · prijemni', time: 'prije 9 min' },
  { name: 'Ivan P.', city: 'Osijek', action: 'AI feedback na esej', time: 'prije 14 min' },
  { name: 'Sara N.', city: 'Pula', action: 'upgrade na Pro', time: 'prije 22 min' },
  { name: 'Tina R.', city: 'Karlovac', action: 'položila pripremni test', time: 'prije 28 min' },
];

const RECENT_ACTIVITY_PRO = [
  { name: 'Marko T.', city: 'Zagreb', action: 'završio Discere · MAT A', time: 'prije 4 min' },
  { name: 'Sara N.', city: 'Pula', action: 'završila H28 · Sažetak', time: 'prije 11 min' },
  { name: 'Filip M.', city: 'Zadar', action: 'AI Profesor · 47 poruka danas', time: 'prije 15 min' },
  { name: 'Lana K.', city: 'Split', action: 'završila prijemni za PMF', time: 'prije 23 min' },
];

function calcDaysToMatura() {
  const target = new Date('2026-06-08');
  const now = new Date();
  return Math.max(0, Math.ceil((target - now) / 86400000));
}

// ════════════════════════════════════════════════════
// EXIT INTENT MODAL
// ════════════════════════════════════════════════════
function ExitIntentModal({ open, onClose, tier }) {
  const [step, setStep] = useState('q'); // 'q' | 'price' | 'unsure' | 'help'
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return;
    setSubmitted(true);
    try { localStorage.setItem('mt.hrv.lead', email); } catch (e) {}
    setTimeout(onClose, 1800);
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(15,6,5,.85)',
        backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24, animation: 'modal-fade .35s ease both',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--card)',
          border: '1px solid var(--bdl)',
          borderRadius: 18,
          padding: '36px 36px 32px',
          maxWidth: 460, width: '100%',
          position: 'relative', overflow: 'hidden',
          boxShadow: '0 30px 80px rgba(0,0,0,.6), 0 0 0 1px rgba(232,201,122,.1)',
          animation: 'modal-pop .45s cubic-bezier(.16,1,.3,1) both',
        }}
      >
        {/* top ribbon */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 2,
          background: 'linear-gradient(90deg, transparent, var(--bronze), var(--gold), var(--bronze), transparent)',
          backgroundSize: '200% 100%',
          animation: 'ribbon-shimmer 4s linear infinite',
        }} />

        {/* close */}
        <button
          onClick={onClose}
          aria-label="Zatvori"
          style={{
            position: 'absolute', top: 14, right: 14,
            width: 32, height: 32, borderRadius: 8,
            background: 'transparent', border: '1px solid var(--bd)',
            color: 'var(--t3)', cursor: 'pointer', fontSize: 14,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background .2s, border-color .2s, color .2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--hov)';
            e.currentTarget.style.borderColor = 'var(--bdl)';
            e.currentTarget.style.color = 'var(--t1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'var(--bd)';
            e.currentTarget.style.color = 'var(--t3)';
          }}
        >✕</button>

        {step === 'q' && (
          <>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: 9, fontWeight: 700,
              color: 'var(--bronze)', letterSpacing: 3, textTransform: 'uppercase',
              marginBottom: 12,
            }}>✦ Stani trenutak</div>
            <h2 style={{
              fontFamily: 'var(--display)', fontSize: 26, fontWeight: 700,
              color: 'var(--t1)', margin: 0, marginBottom: 10, lineHeight: 1.2,
              letterSpacing: '.3px',
            }}>Prije nego odeš…</h2>
            <p style={{
              fontFamily: 'var(--serif)', fontSize: 15, fontStyle: 'italic',
              color: 'var(--t2)', margin: 0, marginBottom: 22, lineHeight: 1.6,
            }}>
              Što te zaustavlja da {tier === 'free' ? 'isprobaš Pro' : tier === 'standard' ? 'napraviš upgrade' : 'nastaviš'}?
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <button
                onClick={() => setStep('price')}
                style={{
                  textAlign: 'left', padding: '14px 16px',
                  background: 'var(--sur)', border: '1px solid var(--bd)',
                  borderRadius: 10, color: 'var(--t1)', cursor: 'pointer',
                  fontFamily: 'var(--font)', fontSize: 14,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  transition: 'background .2s, border-color .2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--hov)';
                  e.currentTarget.style.borderColor = 'var(--bdm)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--sur)';
                  e.currentTarget.style.borderColor = 'var(--bd)';
                }}
              >
                <span>💰 Skupo mi je</span>
                <span style={{ color: 'var(--t3)', fontSize: 12 }}>→</span>
              </button>
              <button
                onClick={() => setStep('unsure')}
                style={{
                  textAlign: 'left', padding: '14px 16px',
                  background: 'var(--sur)', border: '1px solid var(--bd)',
                  borderRadius: 10, color: 'var(--t1)', cursor: 'pointer',
                  fontFamily: 'var(--font)', fontSize: 14,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  transition: 'background .2s, border-color .2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--hov)';
                  e.currentTarget.style.borderColor = 'var(--bdm)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--sur)';
                  e.currentTarget.style.borderColor = 'var(--bd)';
                }}
              >
                <span>🤔 Nisam siguran/a je li za mene</span>
                <span style={{ color: 'var(--t3)', fontSize: 12 }}>→</span>
              </button>
              <button
                onClick={() => setStep('help')}
                style={{
                  textAlign: 'left', padding: '14px 16px',
                  background: 'var(--sur)', border: '1px solid var(--bd)',
                  borderRadius: 10, color: 'var(--t1)', cursor: 'pointer',
                  fontFamily: 'var(--font)', fontSize: 14,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  transition: 'background .2s, border-color .2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--hov)';
                  e.currentTarget.style.borderColor = 'var(--bdm)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--sur)';
                  e.currentTarget.style.borderColor = 'var(--bd)';
                }}
              >
                <span>📩 Pošalji mi info na email</span>
                <span style={{ color: 'var(--t3)', fontSize: 12 }}>→</span>
              </button>
            </div>

            <p style={{
              fontFamily: 'var(--serif)', fontSize: 12, fontStyle: 'italic',
              color: 'var(--t3)', margin: '20px 0 0', textAlign: 'center',
            }}>
              Ne pitaj me opet — pritisni ESC ili klikni izvan
            </p>
          </>
        )}

        {step === 'price' && (
          <>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: 9, fontWeight: 700,
              color: 'var(--gold)', letterSpacing: 3, textTransform: 'uppercase',
              marginBottom: 12,
            }}>✦ Razumijemo</div>
            <h2 style={{
              fontFamily: 'var(--display)', fontSize: 26, fontWeight: 700,
              color: 'var(--t1)', margin: 0, marginBottom: 12, lineHeight: 1.2,
            }}>Evo ti popusta od 50%</h2>
            <p style={{
              fontFamily: 'var(--serif)', fontSize: 15, fontStyle: 'italic',
              color: 'var(--t2)', margin: 0, marginBottom: 18, lineHeight: 1.65,
            }}>
              Prvi mjesec za <span style={{ color: 'var(--gold)', fontWeight: 600, fontStyle: 'normal' }}>9,99 €</span> umjesto 19,99 €. Bez obveze nastavka.
            </p>

            <div style={{
              padding: '16px 18px', background: 'var(--sur)',
              border: '1px solid var(--bd-go)', borderRadius: 10,
              marginBottom: 18,
            }}>
              <div style={{
                fontFamily: 'var(--mono)', fontSize: 9, fontWeight: 700,
                color: 'var(--gold)', letterSpacing: 2, marginBottom: 4,
              }}>KOD ZA POPUST</div>
              <div style={{
                fontFamily: 'var(--display)', fontSize: 22, fontWeight: 700,
                color: 'var(--t1)', letterSpacing: 4,
              }}>MATURA50</div>
            </div>

            <Link href="/pricing?promo=MATURA50" style={{
              display: 'block', padding: '14px 20px',
              background: 'linear-gradient(135deg, var(--bronze-d), var(--bronze))',
              borderRadius: 10, color: 'var(--t1)',
              fontFamily: 'var(--display)', fontSize: 13, fontWeight: 600,
              letterSpacing: 2, textTransform: 'uppercase', textDecoration: 'none',
              textAlign: 'center', boxShadow: '0 4px 16px rgba(220,50,47,.3)',
              transition: 'transform .2s, box-shadow .2s',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(220,50,47,.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(220,50,47,.3)';
              }}
            >Iskoristi popust →</Link>
          </>
        )}

        {step === 'unsure' && (
          <>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: 9, fontWeight: 700,
              color: 'var(--teal)', letterSpacing: 3, textTransform: 'uppercase',
              marginBottom: 12,
            }}>✦ Probaj besplatno</div>
            <h2 style={{
              fontFamily: 'var(--display)', fontSize: 26, fontWeight: 700,
              color: 'var(--t1)', margin: 0, marginBottom: 12, lineHeight: 1.2,
            }}>Riješi 1 stari ispit</h2>
            <p style={{
              fontFamily: 'var(--serif)', fontSize: 15, fontStyle: 'italic',
              color: 'var(--t2)', margin: 0, marginBottom: 20, lineHeight: 1.65,
            }}>
              Otvori Discere i probaj jedan ispit s timerom i AI feedbackom — bez registracije, bez kartice.
            </p>

            <Link href="/discere/hrvatski/demo" style={{
              display: 'block', padding: '14px 20px',
              background: 'linear-gradient(135deg, rgba(107,142,127,.2), rgba(107,142,127,.1))',
              border: '1px solid var(--bd-t)', borderRadius: 10,
              color: 'var(--t1)', fontFamily: 'var(--display)',
              fontSize: 13, fontWeight: 600, letterSpacing: 2,
              textTransform: 'uppercase', textDecoration: 'none', textAlign: 'center',
              transition: 'background .2s, border-color .2s',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(107,142,127,.3), rgba(107,142,127,.15))';
                e.currentTarget.style.borderColor = 'var(--teal)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(107,142,127,.2), rgba(107,142,127,.1))';
                e.currentTarget.style.borderColor = 'var(--bd-t)';
              }}
            >Otvori demo →</Link>
          </>
        )}

        {step === 'help' && !submitted && (
          <>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: 9, fontWeight: 700,
              color: 'var(--parchment)', letterSpacing: 3, textTransform: 'uppercase',
              marginBottom: 12,
            }}>✦ Šaljemo info</div>
            <h2 style={{
              fontFamily: 'var(--display)', fontSize: 26, fontWeight: 700,
              color: 'var(--t1)', margin: 0, marginBottom: 12, lineHeight: 1.2,
            }}>Email + besplatni ulomak</h2>
            <p style={{
              fontFamily: 'var(--serif)', fontSize: 15, fontStyle: 'italic',
              color: 'var(--t2)', margin: 0, marginBottom: 18, lineHeight: 1.65,
            }}>
              Dobit ćeš ulomak iz Marulićeve Judite (PDF) i savjete za maturu. Bez spama.
            </p>

            <form onSubmit={handleEmailSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tvoj@email.com"
                autoFocus
                style={{
                  padding: '13px 16px', background: 'var(--sur)',
                  border: '1px solid var(--bd-pa)', borderRadius: 10,
                  color: 'var(--t1)', fontFamily: 'var(--font)', fontSize: 14,
                  outline: 'none',
                }}
                onFocus={(e) => { e.target.style.borderColor = 'var(--parchment)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'var(--bd-pa)'; }}
              />
              <button
                type="submit"
                style={{
                  padding: '14px 20px',
                  background: 'linear-gradient(135deg, var(--bronze-d), var(--bronze))',
                  border: 'none', borderRadius: 10, color: 'var(--t1)',
                  fontFamily: 'var(--display)', fontSize: 13, fontWeight: 600,
                  letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(220,50,47,.3)',
                }}
              >Pošalji →</button>
            </form>
          </>
        )}

        {step === 'help' && submitted && (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>✓</div>
            <h2 style={{
              fontFamily: 'var(--display)', fontSize: 22, fontWeight: 700,
              color: 'var(--gold)', margin: 0, marginBottom: 8,
            }}>Hvala!</h2>
            <p style={{
              fontFamily: 'var(--serif)', fontSize: 14, fontStyle: 'italic',
              color: 'var(--t2)', margin: 0,
            }}>Provjeri svoj inbox za nekoliko minuta.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════
// MAIN PAGE
// ════════════════════════════════════════════════════
export default function HrvatskiIndexPage() {
  const router = useRouter();
  const [hovered, setHovered] = useState(null);
  const [liveCount, setLiveCount] = useState(1247);
  const [activityIdx, setActivityIdx] = useState(0);
  const [streak, setStreak] = useState(0);
  const [days, setDays] = useState(120);
  const [tier, setTier] = useState('free'); // 'free' | 'standard' | 'pro'
  const [proVariant, setProVariant] = useState('A'); // A/B test
  const [exitOpen, setExitOpen] = useState(false);
  const [devMode, setDevMode] = useState(false);
  const [showBtt, setShowBtt] = useState(false);
  const footerClicks = useRef(0);
  const sessionStart = useRef(Date.now());
  const exitArmed = useRef(false);

  // Proactive prefetch — start compiling all chapters in background right away
  // so user gets instant navigation instead of waiting for Turbopack on first click
  useEffect(() => {
    const slugs = CHAPTER_LIST.map(c => c.slug);
    let i = 0;
    const next = () => {
      if (i >= slugs.length) return;
      router.prefetch(`/skripte/hrv/${slugs[i]}`);
      i++;
      setTimeout(next, 150);
    };
    // Start after 500ms so page itself renders first
    const t = setTimeout(next, 500);
    return () => clearTimeout(t);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Init: tier + A/B + matura countdown + streak
  useEffect(() => {
    setDays(calcDaysToMatura());

    try {
      // Tier detection
      const t = localStorage.getItem('mt.tier') || 'free';
      setTier(t);

      // A/B variant — sticky
      let v = localStorage.getItem('mt.hrv.proVariant');
      if (!v) {
        v = Math.random() < 0.5 ? 'A' : 'B';
        localStorage.setItem('mt.hrv.proVariant', v);
      }
      setProVariant(v);

      // Track variant view
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({ event: 'pro_card_view', variant: v });
      }

      // Streak
      const today = new Date().toDateString();
      const last = localStorage.getItem('mt.hrv.lastVisit');
      let s = parseInt(localStorage.getItem('mt.hrv.streak') || '0', 10);
      if (last !== today) {
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        if (last === yesterday) s += 1;
        else s = 1;
        localStorage.setItem('mt.hrv.lastVisit', today);
        localStorage.setItem('mt.hrv.streak', String(s));
      }
      setStreak(s);
    } catch (e) {}
  }, []);

  // Live counter
  useEffect(() => {
    const t = setInterval(() => {
      setLiveCount((n) => Math.max(800, n + Math.floor(Math.random() * 5) - 2));
    }, 8000);
    return () => clearInterval(t);
  }, []);

  // Activity rotation
  useEffect(() => {
    const t = setInterval(() => {
      setActivityIdx((i) => i + 1);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  // Exit-intent: arm after 30s
  useEffect(() => {
    if (tier === 'pro') return; // ne smetaj Pro korisnicima

    const armTimer = setTimeout(() => {
      try {
        if (sessionStorage.getItem('mt.hrv.exitShown')) return;
      } catch (e) {}
      exitArmed.current = true;
    }, 30000);

    const onMove = (e) => {
      if (!exitArmed.current) return;
      if (e.clientY < 10 && e.relatedTarget === null) {
        try { sessionStorage.setItem('mt.hrv.exitShown', '1'); } catch (e) {}
        exitArmed.current = false;
        setExitOpen(true);

        if (typeof window !== 'undefined' && window.dataLayer) {
          window.dataLayer.push({ event: 'exit_intent_shown', tier });
        }
      }
    };

    document.addEventListener('mouseout', onMove);
    return () => {
      clearTimeout(armTimer);
      document.removeEventListener('mouseout', onMove);
    };
  }, [tier]);

  // Back to top scroll detection
  useEffect(() => {
    const onScroll = () => setShowBtt(window.scrollY > 420);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Dev mode (5× click na footer)
  const handleFooterClick = () => {
    footerClicks.current += 1;
    if (footerClicks.current >= 5) {
      setDevMode(true);
      footerClicks.current = 0;
    }
  };

  const setTierAndStore = (t) => {
    try { localStorage.setItem('mt.tier', t); } catch (e) {}
    setTier(t);
  };

  // Pick activity feed po tier-u
  const activityList = tier === 'pro' ? RECENT_ACTIVITY_PRO
    : tier === 'standard' ? RECENT_ACTIVITY_STANDARD
    : RECENT_ACTIVITY_FREE;
  const activity = activityList[activityIdx % activityList.length];

  const matIntensity = days <= 30 ? 'crit' : days <= 60 ? 'warn' : 'ok';

  return (
    <main style={{
      minHeight: '100vh', background: '#0F0605', color: '#F5E6D3',
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      overflow: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

        :root {
          --bg: #0F0605; --sur: #180A08; --ele: #20100D; --card: #2A1612; --hov: #351B16;
          --bd: rgba(220,50,47,.10); --bdm: rgba(220,50,47,.18); --bdl: rgba(220,50,47,.32);
          --bronze: #DC322F; --bronze-l: #FF5A54; --bronze-d: #8B1E1B;
          --bd-br: rgba(220,50,47,.28); --dim-br: rgba(220,50,47,.10);
          --gold: #E8C97A; --bd-go: rgba(232,201,122,.26); --dim-go: rgba(232,201,122,.09);
          --parchment: #D4B98C; --bd-pa: rgba(212,185,140,.22); --dim-pa: rgba(212,185,140,.08);
          --teal: #6B8E7F; --bd-t: rgba(107,142,127,.22); --dim-t: rgba(107,142,127,.09);
          --green: #6B9464; --bd-g: rgba(107,148,100,.22); --dim-g: rgba(107,148,100,.09);
          --t1: #F5E6D3; --t2: #B09684; --t3: #6B5A4E;
          --display: 'Cinzel', serif;
          --serif: 'Crimson Text', Georgia, serif;
          --mono: 'JetBrains Mono', monospace;
          --font: 'Plus Jakarta Sans', system-ui, sans-serif;
        }

        @keyframes orb-a {0%,100%{transform:translate(0,0)}50%{transform:translate(30px,-22px)}}
        @keyframes orb-b {0%,100%{transform:translate(0,0)}50%{transform:translate(-26px,18px)}}
        @keyframes hrv-up {from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        @keyframes hrv-fade {from{opacity:0}to{opacity:1}}
        @keyframes hrv-shimmer {0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
        @keyframes pulse-dot {0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.85)}}
        @keyframes pulse-ring {0%{transform:scale(.95);opacity:.7}100%{transform:scale(1.6);opacity:0}}
        @keyframes slide-in {from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        @keyframes flame-flicker {0%,100%{transform:scale(1) rotate(-2deg);filter:brightness(1)}25%{transform:scale(1.05) rotate(2deg);filter:brightness(1.15)}50%{transform:scale(.97) rotate(-1deg);filter:brightness(.95)}75%{transform:scale(1.03) rotate(1deg);filter:brightness(1.1)}}
        @keyframes pro-glow {0%,100%{box-shadow:0 0 0 1px rgba(232,201,122,.18),0 12px 40px rgba(232,201,122,.06)}50%{box-shadow:0 0 0 1px rgba(232,201,122,.32),0 16px 60px rgba(232,201,122,.14),0 0 80px rgba(220,50,47,.06)}}
        @keyframes pro-glow-green {0%,100%{box-shadow:0 0 0 1px rgba(107,148,100,.2),0 12px 40px rgba(107,148,100,.06)}50%{box-shadow:0 0 0 1px rgba(107,148,100,.35),0 16px 60px rgba(107,148,100,.14)}}
        @keyframes ribbon-shimmer {0%{background-position:-200% center}100%{background-position:200% center}}
        @keyframes modal-fade {from{opacity:0}to{opacity:1}}
        @keyframes modal-pop {from{opacity:0;transform:scale(.94) translateY(20px)}to{opacity:1;transform:scale(1) translateY(0)}}

        .hrv-card {
          position: relative; display: block;
          padding: 18px 20px 16px;
          background: var(--card); border: 1px solid var(--bdm);
          border-radius: 12px; text-decoration: none; color: var(--t1);
          transition: background .2s, border-color .2s, transform .2s;
          overflow: hidden;
        }
        .hrv-card::before {
          content: ''; position: absolute;
          left: 0; top: 0; bottom: 0; width: 2px;
          background: linear-gradient(180deg, transparent, var(--bronze), transparent);
          opacity: .35; transition: opacity .25s;
        }
        .hrv-card:hover {
          background: var(--hov); border-color: var(--bdl);
          transform: translateY(-2px);
        }
        .hrv-card:hover::before { opacity: 1; }

        .sec-line { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, var(--bdm), transparent); }
        .sec-badge {
          font-family: var(--display); font-size: 10px; font-weight: 600;
          letter-spacing: 3px; color: var(--bronze); text-transform: uppercase;
          padding: 6px 18px; border: 1px solid var(--bd-br);
          border-radius: 20px; background: var(--dim-br); white-space: nowrap;
        }

        .hchip {
          font-family: var(--mono); font-size: 9.5px;
          padding: 4px 11px; border-radius: 4px;
          border: 1px solid; letter-spacing: .5px; font-weight: 600;
        }
        .hchip.br { background: var(--dim-br); color: var(--bronze-l); border-color: var(--bd-br); }
        .hchip.go { background: var(--dim-go); color: var(--gold); border-color: var(--bd-go); }
        .hchip.pa { background: var(--dim-pa); color: var(--parchment); border-color: var(--bd-pa); }

        .sb-block {
          background: var(--card); border: 1px solid var(--bdm);
          border-radius: 14px; padding: 16px 18px;
          margin-bottom: 14px; position: relative; overflow: hidden;
        }
        .sb-eye {
          font-family: var(--display); font-size: 9px; font-weight: 600;
          letter-spacing: 2.5px; text-transform: uppercase;
          margin-bottom: 10px; display: flex; align-items: center; gap: 6px;
        }

        .live-pulse { position: relative; display: inline-flex; width: 8px; height: 8px; }
        .live-pulse-dot { width: 8px; height: 8px; border-radius: 50%; background: #6B9464; animation: pulse-dot 1.6s ease-in-out infinite; }
        .live-pulse-ring { position: absolute; inset: 0; border-radius: 50%; border: 1.5px solid #6B9464; animation: pulse-ring 1.6s ease-out infinite; }

        .pro-card {
          background: linear-gradient(160deg, rgba(232,201,122,.05), rgba(220,50,47,.03));
          border: 1px solid var(--bd-go); border-radius: 14px;
          padding: 18px 20px; margin-bottom: 14px;
          position: relative; overflow: hidden;
          animation: pro-glow 6s ease-in-out infinite;
        }
        .pro-card.green {
          background: linear-gradient(160deg, rgba(107,148,100,.05), rgba(107,148,100,.02));
          border-color: var(--bd-g);
          animation: pro-glow-green 6s ease-in-out infinite;
        }
        .pro-card::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold), var(--bronze), var(--gold), transparent);
          background-size: 200% 100%;
          animation: ribbon-shimmer 4s linear infinite;
        }
        .pro-card.green::before {
          background: linear-gradient(90deg, transparent, var(--green), var(--teal), var(--green), transparent);
          background-size: 200% 100%;
        }

        .layout-grid {
          display: grid; grid-template-columns: 1fr; gap: 0;
          max-width: 920px; margin: 0 auto; padding: 40px 28px 80px;
        }
        @media (min-width: 1100px) {
          .layout-grid {
            grid-template-columns: minmax(0, 1fr) 300px;
            gap: 32px; max-width: 1280px;
          }
        }

        .sidebar-col { display: none; }
        @media (min-width: 1100px) {
          .sidebar-col {
            display: block; position: sticky; top: 24px;
            align-self: start; max-height: calc(100vh - 48px);
            overflow-y: auto;
            scrollbar-width: thin; scrollbar-color: var(--bdm) transparent;
          }
          .sidebar-col::-webkit-scrollbar { width: 4px; }
          .sidebar-col::-webkit-scrollbar-thumb { background: var(--bdm); border-radius: 2px; }
        }

        @media (max-width: 720px) {
          .hrv-hero { padding: 28px 22px !important; }
          .hrv-hero-title { font-size: clamp(28px, 8vw, 38px) !important; }
        }
      `}</style>

      <ExitIntentModal open={exitOpen} onClose={() => setExitOpen(false)} tier={tier} />

      <div className="layout-grid">

        {/* BACK BUTTON */}
        <button
          type="button"
          onClick={() => window.history.back()}
          style={{
            gridColumn: '1 / -1',
            display: 'inline-flex', alignItems: 'center', gap: 6,
            marginBottom: -16, padding: 0,
            background: 'transparent', border: 'none',
            color: 'var(--t3)', fontSize: 12, fontWeight: 600,
            letterSpacing: '.5px', cursor: 'pointer',
            transition: 'color .15s', alignSelf: 'start',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--t2)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--t3)'}
        >
          ← Natrag na predmete
        </button>

        {/* MAIN COLUMN */}
        <div>
          {/* HERO */}
          <div className="hrv-hero" style={{
            marginBottom: 36, padding: '40px 44px',
            background: 'var(--card)', border: '1px solid var(--bdm)',
            borderRadius: 22, position: 'relative', overflow: 'hidden',
            animation: 'hrv-up .6s cubic-bezier(.16,1,.3,1) both',
          }}>
            <div style={{
              position: 'absolute', top: -80, right: -60,
              width: 360, height: 360,
              background: 'radial-gradient(circle, rgba(220,50,47,.07) 0%, transparent 65%)',
              borderRadius: '50%', pointerEvents: 'none',
              animation: 'orb-a 8s ease-in-out infinite',
            }} />
            <div style={{
              position: 'absolute', bottom: -60, left: '10%',
              width: 260, height: 260,
              background: 'radial-gradient(circle, rgba(232,201,122,.04) 0%, transparent 65%)',
              borderRadius: '50%', pointerEvents: 'none',
              animation: 'orb-b 10s ease-in-out infinite',
            }} />

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--bronze)',
              letterSpacing: 3, marginBottom: 16, textTransform: 'uppercase',
              position: 'relative', zIndex: 1,
            }}>
              ✦ Maturiraj · Hrvatski jezik
            </div>

            <h1 className="hrv-hero-title" style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 700, letterSpacing: '.5px', lineHeight: 1.12,
              margin: 0, marginBottom: 14, position: 'relative', zIndex: 1,
            }}>
              <span style={{ color: 'var(--t1)' }}>Hrvatski jezik · </span>
              <span style={{
                background: 'linear-gradient(120deg, #DC322F, #E8C97A, #D4B98C, #DC322F)',
                backgroundSize: '300% 100%',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'hrv-shimmer 8s ease-in-out infinite',
                display: 'inline-block',
              }}>28 poglavlja</span>
            </h1>

            <p style={{
              fontFamily: 'var(--serif)', fontSize: 16, color: 'var(--t2)',
              margin: 0, marginBottom: 22, lineHeight: 1.75,
              fontStyle: 'italic', maxWidth: 600,
              position: 'relative', zIndex: 1,
            }}>
              Sveobuhvatne skripte za državnu maturu — od Homera i Antigone, preko Marulićeve Judite i Krležinih Glembajevih, do interpunkcije i sažetka.
            </p>

            <div style={{
              display: 'flex', gap: 8, flexWrap: 'wrap',
              position: 'relative', zIndex: 1,
            }}>
              <span className="hchip br">⏱ ~14h ukupno</span>
              <span className="hchip go">📜 Književnost · jezik · pisanje</span>
              <span className="hchip pa">★ 28 poglavlja</span>
            </div>
          </div>

          {/* GROUPS */}
          {GROUPS.map((group, gi) => {
            const chapters = CHAPTER_LIST.filter(
              (c) => c.number >= group.range[0] && c.number <= group.range[1]
            );

            return (
              <section
                key={group.id}
                style={{
                  marginBottom: 36,
                  animation: `hrv-up .55s cubic-bezier(.16,1,.3,1) ${0.1 + gi * 0.08}s both`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, margin: '0 0 18px 0' }}>
                  <div className="sec-line" />
                  <div className="sec-badge">{group.eye} · {group.title}</div>
                  <div className="sec-line" />
                </div>

                <p style={{
                  fontFamily: 'var(--serif)', fontSize: 14, fontStyle: 'italic',
                  color: 'var(--t3)', textAlign: 'center',
                  margin: '0 0 18px 0', opacity: .9,
                }}>{group.subtitle}</p>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                  gap: 10,
                }}>
                  {chapters.map((c, ci) => {
                    const meta = CHAPTER_META[c.slug] || { short: c.title, sub: '' };
                    const isHov = hovered === c.slug;
                    return (
                      <Link
                        key={c.slug}
                        href={`/skripte/hrv/${c.slug}`}
                        className="hrv-card"
                        onMouseEnter={() => { setHovered(c.slug); router.prefetch(`/skripte/hrv/${c.slug}`); }}
                        onMouseLeave={() => setHovered(null)}
                        style={{ animation: `hrv-fade .5s ease ${0.15 + gi * 0.08 + ci * 0.02}s both` }}
                      >
                        <div style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          marginBottom: 10,
                        }}>
                          <div style={{
                            fontFamily: 'var(--display)', fontSize: 11, fontWeight: 600,
                            letterSpacing: 2, color: 'var(--bronze)', textTransform: 'uppercase',
                          }}>{c.slug.toUpperCase()}</div>
                          <div style={{
                            width: 4, height: 4, borderRadius: '50%',
                            background: isHov ? 'var(--bronze)' : 'var(--bd-br)',
                            transition: 'background .2s',
                          }} />
                        </div>
                        <div style={{
                          fontFamily: 'var(--display)', fontSize: 15, fontWeight: 600,
                          color: 'var(--t1)', letterSpacing: '.3px', lineHeight: 1.25,
                          marginBottom: 6,
                        }}>{meta.short}</div>
                        <div style={{
                          fontFamily: 'var(--serif)', fontSize: 13, fontStyle: 'italic',
                          color: 'var(--t2)', lineHeight: 1.4, opacity: .85,
                        }}>{meta.sub}</div>
                        <div style={{
                          marginTop: 12, paddingTop: 10,
                          borderTop: '1px solid var(--bd)',
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          fontFamily: 'var(--mono)', fontSize: 9.5,
                          color: 'var(--t3)', letterSpacing: '.5px',
                        }}>
                          <span>OTVORI SKRIPTU</span>
                          <span style={{
                            color: isHov ? 'var(--bronze)' : 'var(--t3)',
                            transition: 'color .2s, transform .2s',
                            transform: isHov ? 'translateX(3px)' : 'none',
                          }}>→</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}

          {/* PRETPLATA BANNER */}
          {tier === 'free' && (
            <div style={{
              marginTop: 56,
              animation: 'hrv-up .6s cubic-bezier(.16,1,.3,1) .75s both',
            }}>
              <Link href="/pretplata" style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{
                  padding: '28px 28px',
                  background: 'linear-gradient(135deg, rgba(255,107,43,.09) 0%, rgba(75,123,255,.07) 100%)',
                  border: '1.5px solid rgba(255,107,43,.28)',
                  borderRadius: 16,
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'box-shadow .2s, border-color .2s, transform .2s',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 32px rgba(255,107,43,.22)'; e.currentTarget.style.borderColor = 'rgba(255,107,43,.5)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(255,107,43,.28)'; e.currentTarget.style.transform = 'none'; }}
                >
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                    background: 'linear-gradient(90deg, transparent, #ff6b2b, #4b7bff, transparent)',
                  }} />
                  <div style={{
                    display: 'inline-block', padding: '3px 12px',
                    background: 'rgba(255,107,43,.12)', border: '1px solid rgba(255,107,43,.25)',
                    borderRadius: 10, fontFamily: 'var(--mono)', fontSize: 9,
                    color: '#ff6b2b', fontWeight: 800, letterSpacing: 1.5,
                    textTransform: 'uppercase', marginBottom: 12,
                  }}>Pretplata</div>
                  <div style={{
                    fontFamily: 'var(--display)', fontSize: 20, fontWeight: 800,
                    color: 'var(--t1)', marginBottom: 8, letterSpacing: '-.02em',
                  }}>
                    Otkključaj puni potencijal
                  </div>
                  <div style={{
                    fontFamily: 'var(--serif)', fontSize: 13, color: 'var(--t3)',
                    lineHeight: 1.6, marginBottom: 18,
                  }}>
                    70 Discere simulatora · AI Profesor · Parent dashboard · Neograničeni Workspace
                  </div>
                  <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <span style={{
                      padding: '9px 20px', background: '#ff6b2b', color: '#fff',
                      borderRadius: 8, fontFamily: 'var(--display)', fontSize: 13,
                      fontWeight: 700, letterSpacing: '.2px',
                      boxShadow: '0 4px 14px rgba(255,107,43,.32)',
                    }}>⭐ Standard — 9,99€/mj</span>
                    <span style={{
                      padding: '9px 20px', background: '#4b7bff', color: '#fff',
                      borderRadius: 8, fontFamily: 'var(--display)', fontSize: 13,
                      fontWeight: 700, letterSpacing: '.2px',
                      boxShadow: '0 4px 14px rgba(75,123,255,.32)',
                    }}>💎 Pro — 19,99€/mj</span>
                  </div>
                  <div style={{
                    marginTop: 14, fontFamily: 'var(--mono)', fontSize: 9.5,
                    color: 'var(--t3)', letterSpacing: '.5px',
                  }}>Bez ugovora · otkaži kad god →</div>
                </div>
              </Link>
            </div>
          )}

          {/* CLOSING — clickable for dev mode */}
          <div
            onClick={handleFooterClick}
            style={{
              marginTop: 56, paddingTop: 32, textAlign: 'center',
              animation: 'hrv-up .6s cubic-bezier(.16,1,.3,1) .8s both',
              cursor: 'default', userSelect: 'none',
            }}
          >
            <div style={{
              display: 'flex', alignItems: 'center', gap: 14,
              justifyContent: 'center', marginBottom: 20,
            }}>
              <div className="sec-line" style={{ maxWidth: 100 }} />
              <span style={{
                fontFamily: 'var(--display)', fontSize: 11, letterSpacing: 4,
                color: 'var(--bronze)', textTransform: 'uppercase',
              }}>FINIS</span>
              <div className="sec-line" style={{ maxWidth: 100 }} />
            </div>
            <p style={{
              fontFamily: 'var(--serif)', fontSize: 14, fontStyle: 'italic',
              color: 'var(--t3)', margin: 0, lineHeight: 1.7,
            }}>
              Spreman za pravu provjeru? Otvori <Link href="/discere/hrvatski" style={{
                color: 'var(--gold)', textDecoration: 'none',
                borderBottom: '1px dotted var(--bd-go)',
              }}>Discere</Link> i vježbaj na starim ispitima.
            </p>
          </div>
        </div>

        {/* SIDEBAR (DESKTOP ONLY) */}
        <aside className="sidebar-col">

          {/* TIER BADGE — uvijek na vrhu */}
          {tier !== 'free' && (
            <div className="sb-block" style={{
              background: tier === 'pro'
                ? 'linear-gradient(160deg, rgba(232,201,122,.06), var(--card))'
                : 'linear-gradient(160deg, rgba(212,185,140,.05), var(--card))',
              borderColor: tier === 'pro' ? 'var(--bd-go)' : 'var(--bd-pa)',
              animation: 'hrv-up .6s cubic-bezier(.16,1,.3,1) .15s both',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: tier === 'pro'
                    ? 'linear-gradient(135deg, var(--gold), var(--bronze))'
                    : 'linear-gradient(135deg, var(--parchment), var(--gold))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16, color: '#0F0605', fontWeight: 800,
                }}>
                  {tier === 'pro' ? '✦' : '★'}
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--display)', fontSize: 13, fontWeight: 700,
                    color: tier === 'pro' ? 'var(--gold)' : 'var(--parchment)',
                    letterSpacing: '.5px',
                  }}>
                    Maturiraj {tier === 'pro' ? 'Pro' : 'Standard'}
                  </div>
                  <div style={{
                    fontFamily: 'var(--serif)', fontSize: 11, fontStyle: 'italic',
                    color: 'var(--t3)', marginTop: 2,
                  }}>aktivno do 30.6.2026.</div>
                </div>
              </div>
            </div>
          )}

          {/* 1. LIVE COUNTER */}
          <div className="sb-block" style={{ animation: 'hrv-up .6s cubic-bezier(.16,1,.3,1) .2s both' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <span className="live-pulse">
                <span className="live-pulse-ring" />
                <span className="live-pulse-dot" />
              </span>
              <span style={{
                fontFamily: 'var(--mono)', fontSize: 9, fontWeight: 700,
                color: 'var(--green)', letterSpacing: 2, textTransform: 'uppercase',
              }}>UŽIVO</span>
            </div>
            <div style={{
              fontFamily: 'var(--display)', fontSize: 28, fontWeight: 700,
              color: 'var(--t1)', lineHeight: 1, marginBottom: 4,
            }}>{liveCount.toLocaleString('hr')}</div>
            <div style={{
              fontFamily: 'var(--serif)', fontSize: 13, fontStyle: 'italic',
              color: 'var(--t2)', lineHeight: 1.4,
            }}>učenika upravo uči hrvatski</div>
          </div>

          {/* 2. COUNTDOWN */}
          <div className="sb-block" style={{
            borderColor: matIntensity === 'crit' ? 'var(--bdl)' : matIntensity === 'warn' ? 'var(--bd-br)' : 'var(--bdm)',
            background: matIntensity !== 'ok' ? 'linear-gradient(160deg, rgba(220,50,47,.04), var(--card))' : 'var(--card)',
            animation: 'hrv-up .6s cubic-bezier(.16,1,.3,1) .25s both',
          }}>
            <div className="sb-eye" style={{ color: matIntensity === 'crit' ? 'var(--bronze-l)' : 'var(--bronze)' }}>
              ⏳ Do mature
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 8 }}>
              <span style={{
                fontFamily: 'var(--display)', fontSize: 36, fontWeight: 700,
                color: matIntensity === 'crit' ? 'var(--bronze-l)' : 'var(--t1)',
                lineHeight: 1, letterSpacing: '-1px',
              }}>{days}</span>
              <span style={{
                fontFamily: 'var(--serif)', fontSize: 14, color: 'var(--t2)',
                fontStyle: 'italic',
              }}>{days === 1 ? 'dan' : 'dana'}</span>
            </div>
            <div style={{
              height: 4, background: 'var(--sur)', borderRadius: 2, overflow: 'hidden',
              marginBottom: 10,
            }}>
              <div style={{
                height: '100%',
                width: `${Math.max(2, 100 - (days / 365) * 100)}%`,
                background: matIntensity === 'crit'
                  ? 'linear-gradient(90deg, var(--bronze-d), var(--bronze))'
                  : 'linear-gradient(90deg, var(--bronze), var(--gold))',
                transition: 'width 1s ease',
              }} />
            </div>
            <div style={{
              fontFamily: 'var(--serif)', fontSize: 12, fontStyle: 'italic',
              color: 'var(--t3)', lineHeight: 1.45,
            }}>
              {days > 90 ? 'Vrijeme je tvoj saveznik.'
                : days > 30 ? 'Svaki dan računa se.'
                : 'Posljednji sprint — fokus.'}
            </div>
          </div>

          {/* 3. STREAK */}
          {streak > 0 && (
            <div className="sb-block" style={{
              background: 'linear-gradient(160deg, rgba(232,201,122,.04), var(--card))',
              borderColor: 'var(--bd-go)',
              animation: 'hrv-up .6s cubic-bezier(.16,1,.3,1) .3s both',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  fontSize: 32, lineHeight: 1,
                  animation: 'flame-flicker 1.4s ease-in-out infinite',
                }}>🔥</div>
                <div>
                  <div style={{
                    fontFamily: 'var(--display)', fontSize: 22, fontWeight: 700,
                    color: 'var(--gold)', lineHeight: 1, marginBottom: 2,
                  }}>{streak} {streak === 1 ? 'dan' : 'dana'}</div>
                  <div style={{
                    fontFamily: 'var(--serif)', fontSize: 12, fontStyle: 'italic',
                    color: 'var(--t2)',
                  }}>tvoj niz učenja</div>
                </div>
              </div>
            </div>
          )}

          {/* ─── TIER-PERSONALIZIRANI BLOKOVI ─── */}

          {/* FREE → Pro card (A/B test) */}
          {tier === 'free' && (
            <Link href="/pricing?cta=sidebar_pro" style={{ textDecoration: 'none', display: 'block' }}>
              <div
                className={`pro-card ${proVariant === 'B' ? 'green' : ''}`}
                style={{ animation: 'hrv-up .6s cubic-bezier(.16,1,.3,1) .35s both' }}
              >
                {proVariant === 'A' ? (
                  <div style={{
                    position: 'absolute', top: 12, right: 12,
                    fontFamily: 'var(--mono)', fontSize: 8, fontWeight: 700,
                    color: 'var(--gold)', letterSpacing: 2, textTransform: 'uppercase',
                    padding: '3px 8px', background: 'rgba(232,201,122,.08)',
                    border: '1px solid var(--bd-go)', borderRadius: 4,
                  }}>NAJPOPULARNIJI</div>
                ) : (
                  <div style={{
                    position: 'absolute', top: 12, right: 12,
                    fontFamily: 'var(--mono)', fontSize: 8, fontWeight: 700,
                    color: 'var(--green)', letterSpacing: 2, textTransform: 'uppercase',
                    padding: '3px 8px', background: 'rgba(107,148,100,.08)',
                    border: '1px solid var(--bd-g)', borderRadius: 4,
                  }}>7 DANA POVRAT</div>
                )}

                <div className="sb-eye" style={{
                  color: proVariant === 'A' ? 'var(--gold)' : 'var(--green)',
                  marginBottom: 14,
                }}>✦ Maturiraj Pro</div>

                <div style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                    <span style={{
                      fontFamily: 'var(--display)', fontSize: 32, fontWeight: 700,
                      color: 'var(--t1)', lineHeight: 1, letterSpacing: '-.5px',
                    }}>19,99 €</span>
                    <span style={{
                      fontFamily: 'var(--serif)', fontSize: 13, color: 'var(--t3)',
                      fontStyle: 'italic',
                    }}>/mj</span>
                  </div>
                  <div style={{
                    fontFamily: 'var(--serif)', fontSize: 11, fontStyle: 'italic',
                    color: 'var(--t3)', marginTop: 4,
                  }}>
                    {proVariant === 'A'
                      ? '≈ 0,66 € dnevno · manje od kave'
                      : 'Otkaži u 7 dana · puni povrat'}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 16 }}>
                  {[
                    { t: 'AI Profesor · 200 poruka/dan' },
                    { t: 'AI feedback na esej · neograničeno' },
                    { t: 'Discere · svi simulatori' },
                    { t: 'Personalizirani plan učenja' },
                    { t: 'Priprema za prijemne' },
                  ].map((f, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 8,
                      fontFamily: 'var(--font)', fontSize: 12, color: 'var(--t1)',
                      lineHeight: 1.4,
                    }}>
                      <span style={{
                        color: proVariant === 'A' ? 'var(--gold)' : 'var(--green)',
                        fontWeight: 700, flexShrink: 0, fontSize: 11, marginTop: 2,
                      }}>✓</span>
                      <span>{f.t}</span>
                    </div>
                  ))}
                </div>

                <div style={{
                  padding: '10px 14px',
                  background: proVariant === 'A'
                    ? 'linear-gradient(135deg, var(--bronze-d), var(--bronze))'
                    : 'linear-gradient(135deg, #4d6d44, var(--green))',
                  borderRadius: 8,
                  fontFamily: 'var(--display)', fontSize: 11, fontWeight: 600,
                  letterSpacing: 2, color: 'var(--t1)', textTransform: 'uppercase',
                  textAlign: 'center', marginBottom: 8,
                  boxShadow: proVariant === 'A'
                    ? '0 4px 12px rgba(220,50,47,.25)'
                    : '0 4px 12px rgba(107,148,100,.25)',
                }}>
                  {proVariant === 'A' ? 'Pokušaj 7 dana →' : 'Probaj bez rizika →'}
                </div>

                <div style={{
                  fontFamily: 'var(--serif)', fontSize: 11, fontStyle: 'italic',
                  color: 'var(--t3)', textAlign: 'center', lineHeight: 1.4,
                }}>Otkaži kad god želiš · bez kartice</div>
              </div>
            </Link>
          )}

          {/* FREE → Standard alternativa */}
          {tier === 'free' && (
            <Link href="/pricing?cta=sidebar_standard" style={{ textDecoration: 'none', display: 'block' }}>
              <div className="sb-block" style={{
                animation: 'hrv-up .6s cubic-bezier(.16,1,.3,1) .4s both',
                cursor: 'pointer',
              }}>
                <div className="sb-eye" style={{ color: 'var(--parchment)' }}>✦ Standard</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 10 }}>
                  <span style={{
                    fontFamily: 'var(--display)', fontSize: 22, fontWeight: 700,
                    color: 'var(--t1)', lineHeight: 1,
                  }}>9,99 €</span>
                  <span style={{
                    fontFamily: 'var(--serif)', fontSize: 12, color: 'var(--t3)',
                    fontStyle: 'italic',
                  }}>/mj</span>
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontSize: 12, fontStyle: 'italic',
                  color: 'var(--t2)', lineHeight: 1.5,
                }}>
                  Sve skripte + Discere + AI Profesor 30 poruka/dan
                </div>
              </div>
            </Link>
          )}

          {/* STANDARD → Upgrade na Pro */}
          {tier === 'standard' && (
            <Link href="/pricing?upgrade=pro" style={{ textDecoration: 'none', display: 'block' }}>
              <div className="pro-card" style={{ animation: 'hrv-up .6s cubic-bezier(.16,1,.3,1) .35s both' }}>
                <div style={{
                  position: 'absolute', top: 12, right: 12,
                  fontFamily: 'var(--mono)', fontSize: 8, fontWeight: 700,
                  color: 'var(--gold)', letterSpacing: 2, textTransform: 'uppercase',
                  padding: '3px 8px', background: 'rgba(232,201,122,.08)',
                  border: '1px solid var(--bd-go)', borderRadius: 4,
                }}>UPGRADE</div>

                <div className="sb-eye" style={{ color: 'var(--gold)', marginBottom: 14 }}>
                  ✦ Pređi na Pro
                </div>

                <div style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                    <span style={{
                      fontFamily: 'var(--serif)', fontSize: 14,
                      color: 'var(--t3)', textDecoration: 'line-through',
                    }}>+19,99€</span>
                    <span style={{
                      fontFamily: 'var(--display)', fontSize: 26, fontWeight: 700,
                      color: 'var(--gold)', lineHeight: 1,
                    }}>+10 €</span>
                    <span style={{
                      fontFamily: 'var(--serif)', fontSize: 12, color: 'var(--t3)',
                      fontStyle: 'italic',
                    }}>/mj više</span>
                  </div>
                  <div style={{
                    fontFamily: 'var(--serif)', fontSize: 12, fontStyle: 'italic',
                    color: 'var(--t2)', marginTop: 6, lineHeight: 1.5,
                  }}>
                    Plaćaš samo razliku od trenutnog plana.
                  </div>
                </div>

                <div style={{
                  fontFamily: 'var(--mono)', fontSize: 9, fontWeight: 700,
                  color: 'var(--gold)', letterSpacing: 2, textTransform: 'uppercase',
                  marginBottom: 8,
                }}>NOVO ZA TEBE:</div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 16 }}>
                  {[
                    'AI feedback na esej · neograničeno',
                    'AI Profesor · 200 poruka/dan (umj. 30)',
                    'Priprema za prijemne (FFZG, FER, MEF, EFZG)',
                    'Personalizirani plan učenja',
                  ].map((t, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 8,
                      fontFamily: 'var(--font)', fontSize: 12, color: 'var(--t1)',
                      lineHeight: 1.4,
                    }}>
                      <span style={{
                        color: 'var(--gold)', fontWeight: 700, flexShrink: 0,
                        fontSize: 11, marginTop: 2,
                      }}>+</span>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>

                <div style={{
                  padding: '10px 14px',
                  background: 'linear-gradient(135deg, var(--bronze-d), var(--bronze))',
                  borderRadius: 8,
                  fontFamily: 'var(--display)', fontSize: 11, fontWeight: 600,
                  letterSpacing: 2, color: 'var(--t1)', textTransform: 'uppercase',
                  textAlign: 'center',
                  boxShadow: '0 4px 12px rgba(220,50,47,.25)',
                }}>Upgrade odmah →</div>
              </div>
            </Link>
          )}

          {/* PRO → Retention: pozovi prijatelja */}
          {tier === 'pro' && (
            <Link href="/referral" style={{ textDecoration: 'none', display: 'block' }}>
              <div className="sb-block" style={{
                background: 'linear-gradient(160deg, rgba(232,201,122,.04), var(--card))',
                borderColor: 'var(--bd-go)',
                animation: 'hrv-up .6s cubic-bezier(.16,1,.3,1) .35s both',
                cursor: 'pointer',
              }}>
                <div className="sb-eye" style={{ color: 'var(--gold)' }}>
                  🎁 Pozovi prijatelja
                </div>
                <div style={{
                  fontFamily: 'var(--display)', fontSize: 16, fontWeight: 600,
                  color: 'var(--t1)', marginBottom: 6, letterSpacing: '.3px',
                }}>1 mjesec besplatno</div>
                <div style={{
                  fontFamily: 'var(--serif)', fontSize: 13, fontStyle: 'italic',
                  color: 'var(--t2)', lineHeight: 1.5, marginBottom: 10,
                }}>
                  Za svakog prijatelja koji upiše Pro. Bez ograničenja.
                </div>
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: 10,
                  color: 'var(--gold)', letterSpacing: 1,
                  display: 'flex', alignItems: 'center', gap: 4,
                }}>POZOVI <span>→</span></div>
              </div>
            </Link>
          )}

          {/* PRO → AI usage tracker (retention) */}
          {tier === 'pro' && (
            <div className="sb-block" style={{ animation: 'hrv-up .6s cubic-bezier(.16,1,.3,1) .4s both' }}>
              <div className="sb-eye" style={{ color: 'var(--parchment)' }}>
                ⚡ AI Profesor danas
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 8 }}>
                <span style={{
                  fontFamily: 'var(--display)', fontSize: 22, fontWeight: 700,
                  color: 'var(--t1)', lineHeight: 1,
                }}>47</span>
                <span style={{
                  fontFamily: 'var(--serif)', fontSize: 12, color: 'var(--t3)',
                  fontStyle: 'italic',
                }}>od 200 poruka</span>
              </div>
              <div style={{
                height: 4, background: 'var(--sur)', borderRadius: 2, overflow: 'hidden',
                marginBottom: 8,
              }}>
                <div style={{
                  height: '100%', width: '23.5%',
                  background: 'linear-gradient(90deg, var(--gold), var(--parchment))',
                }} />
              </div>
              <div style={{
                fontFamily: 'var(--serif)', fontSize: 12, fontStyle: 'italic',
                color: 'var(--t3)', lineHeight: 1.45,
              }}>Resetira se u ponoć.</div>
            </div>
          )}

          {/* 6. ACTIVITY FEED */}
          <div className="sb-block" style={{ animation: 'hrv-up .6s cubic-bezier(.16,1,.3,1) .45s both' }}>
            <div className="sb-eye" style={{ color: 'var(--parchment)' }}>✦ Trenutno</div>
            <div key={activityIdx} style={{ animation: 'slide-in .4s ease both' }}>
              <div style={{
                fontFamily: 'var(--display)', fontSize: 13, fontWeight: 600,
                color: 'var(--t1)', marginBottom: 4,
              }}>
                {activity.name} <span style={{ color: 'var(--t3)', fontWeight: 400 }}>· {activity.city}</span>
              </div>
              <div style={{
                fontFamily: 'var(--serif)', fontSize: 13, fontStyle: 'italic',
                color: 'var(--gold)', marginBottom: 6, lineHeight: 1.4,
              }}>{activity.action}</div>
              <div style={{
                fontFamily: 'var(--mono)', fontSize: 9,
                color: 'var(--t3)', letterSpacing: 1,
              }}>{activity.time.toUpperCase()}</div>
            </div>
          </div>

          {/* 7. AUTHORITY */}
          <div className="sb-block" style={{
            background: 'linear-gradient(160deg, rgba(107,148,100,.04), var(--card))',
            borderColor: 'var(--bd-g)',
            animation: 'hrv-up .6s cubic-bezier(.16,1,.3,1) .5s both',
          }}>
            <div className="sb-eye" style={{ color: 'var(--green)' }}>✓ Provjerena kvaliteta</div>
            <div style={{
              fontFamily: 'var(--serif)', fontSize: 13, fontStyle: 'italic',
              color: 'var(--t1)', lineHeight: 1.55, marginBottom: 8,
            }}>
              "Skripte slijede NCVVO ispitni katalog 2025/26 i pokrivaju sva zadana ispitna djela."
            </div>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: 9,
              color: 'var(--t3)', letterSpacing: 1.5, textTransform: 'uppercase',
            }}>— Maturiraj uredništvo</div>
          </div>

          {/* 8. RECIPROCITY (samo Free i Standard) */}
          {tier !== 'pro' && (
            <Link href="/bonus/judita-ulomak" style={{ textDecoration: 'none', display: 'block' }}>
              <div className="sb-block" style={{
                borderStyle: 'dashed', borderColor: 'var(--bd-pa)',
                background: 'transparent',
                animation: 'hrv-up .6s cubic-bezier(.16,1,.3,1) .55s both',
                cursor: 'pointer', transition: 'background .2s, border-color .2s',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--card)';
                  e.currentTarget.style.borderColor = 'var(--parchment)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'var(--bd-pa)';
                }}
              >
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8,
                }}>
                  <div style={{ fontSize: 22 }}>🎁</div>
                  <div className="sb-eye" style={{ color: 'var(--parchment)', margin: 0 }}>
                    Besplatan bonus
                  </div>
                </div>
                <div style={{
                  fontFamily: 'var(--display)', fontSize: 14, fontWeight: 600,
                  color: 'var(--t1)', marginBottom: 4, letterSpacing: '.3px',
                }}>Ulomak iz Judite (PDF)</div>
                <div style={{
                  fontFamily: 'var(--serif)', fontSize: 12, fontStyle: 'italic',
                  color: 'var(--t2)', lineHeight: 1.45, marginBottom: 6,
                }}>Marulićev original s objašnjenjima — bez registracije.</div>
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: 10,
                  color: 'var(--gold)', letterSpacing: 1,
                  display: 'flex', alignItems: 'center', gap: 4,
                }}>PREUZMI <span>→</span></div>
              </div>
            </Link>
          )}

          {/* PRO → user rank (vrijednost koju zaslužuju) */}
          {tier === 'pro' && (
            <div className="sb-block" style={{
              background: 'linear-gradient(160deg, rgba(232,201,122,.04), var(--card))',
              borderColor: 'var(--bd-go)',
              animation: 'hrv-up .6s cubic-bezier(.16,1,.3,1) .55s both',
            }}>
              <div className="sb-eye" style={{ color: 'var(--gold)' }}>★ Tvoj rang</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 6 }}>
                <span style={{
                  fontFamily: 'var(--display)', fontSize: 22, fontWeight: 700,
                  color: 'var(--gold)', lineHeight: 1,
                }}>#487</span>
                <span style={{
                  fontFamily: 'var(--serif)', fontSize: 12, color: 'var(--t3)',
                  fontStyle: 'italic',
                }}>od 12.847</span>
              </div>
              <div style={{
                fontFamily: 'var(--serif)', fontSize: 12, fontStyle: 'italic',
                color: 'var(--t2)', lineHeight: 1.5,
              }}>
                Top 4% učenika. Više od 96% Pro korisnika. Nastavi.
              </div>
            </div>
          )}
        </aside>
      </div>

      {/* DEV MODE OVERLAY */}
      {devMode && (
        <div style={{
          position: 'fixed', bottom: 20, right: 20, zIndex: 9998,
          padding: '14px 18px',
          background: 'var(--card)',
          border: '1px solid var(--bdl)',
          borderRadius: 12,
          boxShadow: '0 8px 30px rgba(0,0,0,.5)',
          animation: 'hrv-up .3s ease both',
        }}>
          <div style={{
            fontFamily: 'var(--mono)', fontSize: 9, fontWeight: 700,
            color: 'var(--bronze)', letterSpacing: 2, textTransform: 'uppercase',
            marginBottom: 8,
          }}>DEV · TIER PICKER</div>
          <div style={{ display: 'flex', gap: 6 }}>
            {['free', 'standard', 'pro'].map((t) => (
              <button
                key={t}
                onClick={() => setTierAndStore(t)}
                style={{
                  padding: '6px 12px',
                  background: tier === t ? 'var(--bronze)' : 'var(--sur)',
                  border: '1px solid ' + (tier === t ? 'var(--bronze)' : 'var(--bd)'),
                  borderRadius: 6,
                  color: tier === t ? 'var(--t1)' : 'var(--t2)',
                  fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 700,
                  letterSpacing: 1, textTransform: 'uppercase', cursor: 'pointer',
                }}
              >{t}</button>
            ))}
          </div>
          <div style={{
            marginTop: 8, paddingTop: 8, borderTop: '1px solid var(--bd)',
            fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--t3)',
          }}>A/B variant: <strong style={{ color: 'var(--gold)' }}>{proVariant}</strong></div>
          <button
            onClick={() => {
              try {
                sessionStorage.removeItem('mt.hrv.exitShown');
                exitArmed.current = true;
              } catch (e) {}
              setExitOpen(true);
            }}
            style={{
              marginTop: 8, padding: '6px 12px',
              background: 'var(--sur)', border: '1px solid var(--bd)',
              borderRadius: 6, color: 'var(--t2)',
              fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 700,
              letterSpacing: 1, textTransform: 'uppercase', cursor: 'pointer',
              width: '100%',
            }}
          >Test exit modal</button>
          <button
            onClick={() => setDevMode(false)}
            style={{
              marginTop: 6, padding: '4px 10px',
              background: 'transparent', border: 'none',
              color: 'var(--t3)', fontFamily: 'var(--mono)', fontSize: 9,
              cursor: 'pointer', width: '100%',
            }}
          >zatvori</button>
        </div>
      )}

      {/* Back to top — fiksni crveni gumb */}
      {showBtt && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Na vrh"
          title="Na vrh"
          style={{
            position: 'fixed', right: 24, bottom: 24,
            width: 52, height: 52, borderRadius: '50%',
            background: 'linear-gradient(135deg, #c0390a, #e05520)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: '#fff', fontSize: 22, fontWeight: 700,
            cursor: 'pointer', zIndex: 9999,
            boxShadow: '0 8px 28px rgba(192,57,10,0.45)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'transform 0.18s ease, box-shadow 0.18s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 34px rgba(192,57,10,0.6)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 28px rgba(192,57,10,0.45)'; }}
        >
          ↑
        </button>
      )}
    </main>
  );
}