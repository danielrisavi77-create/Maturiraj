'use client';

export default function Drill({ userTier = 'free', onUpgrade }) {
  return (
    <div>
      <div className="tags">
        <span className="pill p-go">PRO feature</span>
        <span className="pill p-br">speed drill</span>
      </div>

      <div className="reveal-lock">
        <div className="reveal-lock-eye">PRO FEATURE</div>
        <h2 className="reveal-lock-title">⚡ Speed Drill — H11</h2>
        <div className="reveal-lock-desc">
          Ubrzani drill: 60 sekundi, nasumična pitanja, bez opcija — samo slobodan odgovor.
          Savršeno za zadnji tjedan prije mature.
        </div>
        <div className="rli-list">
          {[
            { ico: '⚡', title: '60-sekundni sprint', desc: 'Što više pitanja u minuti — treniraš brzinu.' },
            { ico: '🎯', title: 'Slabe točke', desc: 'Drill prati što grešiš i fokusira se na to.' },
            { ico: '📊', title: 'Statistike napretka', desc: 'Graf poboljšanja kroz tjedan.' },
          ].map((item, i) => (
            <div key={i} className="rli">
              <div className="rli-ico">{item.ico}</div>
              <div>
                <div className="rli-title">{item.title}</div>
                <div className="rli-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <button className="reveal-lock-btn" onClick={onUpgrade}>
          💎 Otključaj Pro — 19,99€/mj
        </button>
      </div>
    </div>
  );
}
