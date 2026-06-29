// matematika-tweaks.jsx — Tweaks for the Matematika hero video

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "cta": "Kreni besplatno",
  "accent": "blue-purple-orange",
  "speed": 1.0
}/*EDITMODE-END*/;

function useTweakState() {
  const [tweaks, setTweaks] = React.useState(TWEAK_DEFAULTS);
  const [editMode, setEditMode] = React.useState(false);

  React.useEffect(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setEditMode(true);
      else if (d.type === '__deactivate_edit_mode') setEditMode(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const update = (key, value) => {
    setTweaks(prev => ({ ...prev, [key]: value }));
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: value } }, '*');
  };

  return { tweaks, editMode, update };
}

function TweaksPanel({ tweaks, onUpdate }) {
  const ctaOpts = [
    'Kreni besplatno',
    'Kreni besplatno na maturiraj.hr',
    'Počni besplatno',
    'Pokreni AI Profesor',
  ];
  const accentOpts = [
    { id: 'blue-purple-orange', label: 'Plava + Ljubičasta', colors: ['#5b8cff', '#b57bff', '#ff9a55'] },
    { id: 'cyan-violet-amber',  label: 'Cyan + Violet',      colors: ['#22d3ee', '#a78bfa', '#fbbf24'] },
    { id: 'teal-blue-orange',   label: 'Teal + Plava',       colors: ['#34d399', '#60a5fa', '#ff9a55'] },
    { id: 'pink-blue-yellow',   label: 'Pink + Plava',       colors: ['#ff7ac6', '#7c9cff', '#fde047'] },
  ];

  return (
    <div style={{
      position: 'fixed',
      right: 24, bottom: 72,
      width: 300,
      padding: 20,
      background: 'rgba(10,10,20,0.92)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: 14,
      color: '#f4f3ff',
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: 13,
      zIndex: 9999,
      boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
    }}>
      <div style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 16, fontWeight: 600, letterSpacing: '-0.01em',
        marginBottom: 16,
      }}>Tweaks</div>

      <div style={{ marginBottom: 18 }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10, letterSpacing: '0.14em',
          color: 'rgba(244,243,255,0.5)',
          textTransform: 'uppercase', marginBottom: 8,
        }}>Akcenti</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
          {accentOpts.map(o => (
            <button key={o.id}
              onClick={() => onUpdate('accent', o.id)}
              style={{
                padding: '8px 10px',
                background: tweaks.accent === o.id ? 'rgba(255,255,255,0.08)' : 'transparent',
                border: `1px solid ${tweaks.accent === o.id ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: 8, color: '#f4f3ff',
                fontSize: 11, fontFamily: 'inherit', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 8, textAlign: 'left',
              }}>
              <div style={{ display: 'flex', gap: 3 }}>
                {o.colors.map((c, i) => (
                  <div key={i} style={{ width: 10, height: 10, borderRadius: 5, background: c }}/>
                ))}
              </div>
              <span style={{ fontSize: 10 }}>{o.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 18 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10, letterSpacing: '0.14em',
          color: 'rgba(244,243,255,0.5)',
          textTransform: 'uppercase', marginBottom: 8,
        }}>
          <span>Brzina</span>
          <span style={{ color: '#5b8cff' }}>{tweaks.speed.toFixed(2)}×</span>
        </div>
        <input type="range" min="0.25" max="2" step="0.05"
          value={tweaks.speed}
          onChange={e => onUpdate('speed', parseFloat(e.target.value))}
          style={{ width: '100%', accentColor: '#5b8cff' }}/>
      </div>

      <div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10, letterSpacing: '0.14em',
          color: 'rgba(244,243,255,0.5)',
          textTransform: 'uppercase', marginBottom: 8,
        }}>CTA</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {ctaOpts.map(c => (
            <button key={c}
              onClick={() => onUpdate('cta', c)}
              style={{
                padding: '8px 10px',
                background: tweaks.cta === c ? 'rgba(91,140,255,0.15)' : 'transparent',
                border: `1px solid ${tweaks.cta === c ? 'rgba(91,140,255,0.5)' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: 8, color: '#f4f3ff',
                fontSize: 12, fontFamily: 'inherit', cursor: 'pointer',
                textAlign: 'left',
              }}>
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function getAccentColors(accent) {
  const map = {
    'blue-purple-orange': { blue: '#5b8cff', purple: '#b57bff', orange: '#ff9a55' },
    'cyan-violet-amber':  { blue: '#22d3ee', purple: '#a78bfa', orange: '#fbbf24' },
    'teal-blue-orange':   { blue: '#34d399', purple: '#60a5fa', orange: '#ff9a55' },
    'pink-blue-yellow':   { blue: '#ff7ac6', purple: '#7c9cff', orange: '#fde047' },
  };
  return map[accent] || map['blue-purple-orange'];
}

Object.assign(window, { useTweakState, TweaksPanel, getAccentColors, TWEAK_DEFAULTS });
