// tweaks.jsx — Tweaks for the Engleski hero video

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "cta": "Kreni besplatno",
  "accent": "cyan-violet-amber",
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
    { id: 'cyan-violet-amber',  label: 'Cyan + Violet',      colors: ['#22d3ee', '#a78bfa', '#fbbf24'] },
    { id: 'blue-purple-orange', label: 'Plava + Ljubičasta', colors: ['#5b8cff', '#b57bff', '#ff9a55'] },
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
      <div style={{ fontWeight: 700, marginBottom: 16, fontSize: 14 }}>Tweaks</div>

      <div style={{ marginBottom: 14 }}>
        <div style={{ opacity: 0.5, marginBottom: 6, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>CTA tekst</div>
        {ctaOpts.map(o => (
          <div key={o} onClick={() => onUpdate('cta', o)} style={{
            padding: '6px 10px', borderRadius: 7, marginBottom: 4, cursor: 'pointer',
            background: tweaks.cta === o ? 'rgba(34,211,238,0.15)' : 'transparent',
            border: `1px solid ${tweaks.cta === o ? 'rgba(34,211,238,0.4)' : 'transparent'}`,
          }}>{o}</div>
        ))}
      </div>

      <div style={{ marginBottom: 14 }}>
        <div style={{ opacity: 0.5, marginBottom: 6, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Akcent boje</div>
        {accentOpts.map(o => (
          <div key={o.id} onClick={() => onUpdate('accent', o.id)} style={{
            padding: '6px 10px', borderRadius: 7, marginBottom: 4, cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 8,
            background: tweaks.accent === o.id ? 'rgba(34,211,238,0.1)' : 'transparent',
            border: `1px solid ${tweaks.accent === o.id ? 'rgba(34,211,238,0.3)' : 'transparent'}`,
          }}>
            <div style={{ display: 'flex', gap: 4 }}>
              {o.colors.map((c, i) => (
                <div key={i} style={{ width: 14, height: 14, borderRadius: 7, background: c }} />
              ))}
            </div>
            {o.label}
          </div>
        ))}
      </div>

      <div>
        <div style={{ opacity: 0.5, marginBottom: 6, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Brzina: {tweaks.speed}×
        </div>
        <input type="range" min="0.25" max="3" step="0.25"
          value={tweaks.speed}
          onChange={e => onUpdate('speed', parseFloat(e.target.value))}
          style={{ width: '100%' }}
        />
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
  return map[accent] || map['cyan-violet-amber'];
}

Object.assign(window, { useTweakState, TweaksPanel, getAccentColors });
