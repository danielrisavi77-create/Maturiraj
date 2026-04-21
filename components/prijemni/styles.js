export const CSS = `
  @keyframes pr-orb-a{0%,100%{transform:translate(0,0)}50%{transform:translate(32px,-22px)}}
  @keyframes pr-orb-b{0%,100%{transform:translate(0,0)}50%{transform:translate(-28px,20px)}}
  @keyframes pr-up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
  @keyframes pr-pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.95)}}
  @keyframes pr-shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
  @keyframes pr-spin{to{transform:rotate(360deg)}}

  .pr-root{min-height:100vh;background:var(--bg);position:relative;overflow-x:hidden}
  .pr-up{animation:pr-up .5s cubic-bezier(.16,1,.3,1) both}

  .pr-orb{position:fixed;border-radius:50%;filter:blur(100px);pointer-events:none;z-index:0}
  .pr-orb-1{top:-120px;left:-80px;width:520px;height:520px;background:radial-gradient(circle,rgba(75,123,255,.22),transparent 70%);animation:pr-orb-a 14s ease-in-out infinite}
  .pr-orb-2{top:320px;right:-140px;width:420px;height:420px;background:radial-gradient(circle,rgba(124,92,252,.18),transparent 70%);animation:pr-orb-b 16s ease-in-out infinite}
  .pr-orb-3{bottom:-100px;left:30%;width:380px;height:380px;background:radial-gradient(circle,rgba(233,180,70,.10),transparent 70%);animation:pr-orb-a 18s ease-in-out infinite reverse}

  .pr-hero{position:relative;z-index:1;padding:92px 0 36px}
  .pr-eye{display:inline-flex;align-items:center;gap:8px;padding:5px 12px;border-radius:99px;background:rgba(233,180,70,.10);border:1px solid rgba(233,180,70,.22);font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);margin-bottom:18px}
  .pr-eye-dot{width:6px;height:6px;border-radius:50%;background:var(--gold);box-shadow:0 0 8px var(--gold);animation:pr-pulse 2s ease-in-out infinite}
  .pr-title{font-family:var(--fh);font-size:clamp(32px,5vw,56px);font-weight:900;line-height:1;letter-spacing:-.035em;margin-bottom:18px;max-width:720px}
  .pr-title-grad{background:linear-gradient(120deg,#6b9bff 0%,#a78bfa 50%,#e9b446 100%);-webkit-background-clip:text;background-clip:text;color:transparent;background-size:200% auto;animation:pr-shimmer 8s linear infinite}
  .pr-sub{color:var(--muted);font-size:16px;line-height:1.7;max-width:560px;margin-bottom:28px}

  .pr-stats{display:flex;gap:24px;flex-wrap:wrap;padding:18px 22px;border-radius:16px;background:linear-gradient(160deg,rgba(14,18,32,.7),rgba(14,18,32,.3));border:1px solid var(--bdr);backdrop-filter:blur(16px);max-width:720px}
  .pr-stat{display:flex;flex-direction:column;gap:2px;min-width:90px}
  .pr-stat-n{font-family:var(--fh);font-size:24px;font-weight:900;color:var(--text);line-height:1}
  .pr-stat-l{font-size:11px;color:var(--muted);font-weight:500;letter-spacing:.05em;text-transform:uppercase;margin-top:3px}
  .pr-stat-divider{width:1px;background:var(--bdr);align-self:stretch}

  .pr-cat-head{display:flex;align-items:center;gap:14px;margin-bottom:18px;padding:14px 18px;border-radius:14px;background:linear-gradient(100deg,rgba(14,18,32,.6),rgba(14,18,32,.25));border:1px solid var(--bdr)}
  .pr-cat-ico{width:40px;height:40px;border-radius:11px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
  .pr-cat-ico.k-klasicni{background:linear-gradient(135deg,rgba(75,123,255,.18),rgba(124,92,252,.12));border:1px solid rgba(75,123,255,.25);color:#6b9bff}
  .pr-cat-ico.k-elim{background:linear-gradient(135deg,rgba(251,146,60,.18),rgba(233,180,70,.12));border:1px solid rgba(251,146,60,.25);color:#fb923c}
  .pr-cat-ico.k-audicija{background:linear-gradient(135deg,rgba(232,121,249,.18),rgba(124,92,252,.12));border:1px solid rgba(232,121,249,.25);color:#e879f9}
  .pr-cat-ico.k-matura{background:linear-gradient(135deg,rgba(45,212,191,.18),rgba(75,123,255,.12));border:1px solid rgba(45,212,191,.25);color:#2dd4bf}
  .pr-cat-tx{flex:1;min-width:0}
  .pr-cat-tl{font-size:14px;font-weight:700;color:var(--text);letter-spacing:-.01em}
  .pr-cat-sub{font-size:12px;color:var(--muted);margin-top:1px}
  .pr-cat-n{font-size:12px;color:var(--muted);padding:4px 10px;border-radius:99px;background:var(--s2);border:1px solid var(--bdr);font-weight:600;flex-shrink:0}

  .pr-fcard{position:relative;padding:20px;border-radius:16px;background:linear-gradient(160deg,rgba(14,18,32,.85),rgba(14,18,32,.55));border:1px solid var(--bdr);cursor:pointer;transition:transform .2s cubic-bezier(.16,1,.3,1),border-color .2s,box-shadow .2s;overflow:hidden;display:flex;flex-direction:column;min-height:240px}
  .pr-fcard:hover{transform:translateY(-3px)}
  .pr-fcard-tophalo{position:absolute;top:-60px;left:50%;transform:translateX(-50%);width:280px;height:120px;border-radius:50%;filter:blur(50px);opacity:.35;pointer-events:none;transition:opacity .3s}
  .pr-fcard:hover .pr-fcard-tophalo{opacity:.6}

  .pr-fcard-top{display:flex;align-items:flex-start;justify-content:space-between;gap:10px;margin-bottom:14px;position:relative;z-index:1}
  .pr-fcard-glyph{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;position:relative}
  .pr-fcard-glyph::after{content:'';position:absolute;inset:0;border-radius:inherit;border:1px solid rgba(255,255,255,.08)}
  .pr-fcard-tags{display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end}
  .pr-tag{font-size:9.5px;font-weight:700;padding:3px 8px;border-radius:99px;letter-spacing:.04em;text-transform:uppercase;white-space:nowrap}
  .pr-tag-kalk{background:rgba(75,123,255,.14);color:var(--blue);border:1px solid rgba(75,123,255,.28)}
  .pr-tag-dates{background:rgba(233,180,70,.12);color:var(--gold);border:1px solid rgba(233,180,70,.25)}
  .pr-tag-hot{background:linear-gradient(135deg,rgba(248,113,113,.15),rgba(251,146,60,.15));color:#fb923c;border:1px solid rgba(251,146,60,.3)}
  .pr-tag-count{background:rgba(106,130,168,.12);color:var(--text);border:1px solid var(--bdr)}

  .pr-fcard-name{font-size:16px;font-weight:700;color:var(--text);margin-bottom:2px;letter-spacing:-.015em;position:relative;z-index:1}
  .pr-fcard-full{font-size:12px;color:var(--muted);margin-bottom:14px;position:relative;z-index:1}

  .pr-prag-summary{margin-bottom:12px;position:relative;z-index:1}
  .pr-prag-summary-row{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px;font-size:11px;color:var(--muted)}
  .pr-prag-range{font-family:var(--fh);font-size:15px;font-weight:700;color:var(--text);letter-spacing:-.01em}

  .pr-fcard-bot{margin-top:auto;display:flex;align-items:center;justify-content:space-between;gap:8px;padding-top:12px;border-top:1px solid rgba(255,255,255,.05);position:relative;z-index:1;font-size:11px}
  .pr-fcard-cd{display:flex;align-items:center;gap:6px;font-weight:600}
  .pr-fcard-arrow{width:24px;height:24px;border-radius:7px;background:rgba(255,255,255,.04);display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:12px;transition:all .2s}
  .pr-fcard:hover .pr-fcard-arrow{background:rgba(75,123,255,.18);color:var(--blue);transform:translateX(2px)}

  /* Studij list (srednja razina) */
  .pr-studij-list{display:flex;flex-direction:column;gap:10px}
  .pr-studij-card{padding:18px 20px;border-radius:14px;background:linear-gradient(100deg,rgba(14,18,32,.85),rgba(14,18,32,.45));border:1px solid var(--bdr);cursor:pointer;transition:transform .2s,border-color .2s,box-shadow .2s;display:flex;align-items:center;gap:16px;position:relative;overflow:hidden}
  .pr-studij-card:hover{transform:translateY(-2px)}
  .pr-studij-ico{width:40px;height:40px;border-radius:11px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;position:relative}
  .pr-studij-body{flex:1;min-width:0}
  .pr-studij-name{font-size:16px;font-weight:700;color:var(--text);margin-bottom:3px;letter-spacing:-.015em}
  .pr-studij-meta{display:flex;gap:14px;flex-wrap:wrap;font-size:12px;color:var(--muted)}
  .pr-studij-meta span{display:inline-flex;align-items:center;gap:4px}
  .pr-studij-right{display:flex;flex-direction:column;align-items:flex-end;gap:4px;flex-shrink:0}
  .pr-studij-prag{font-family:var(--fh);font-size:20px;font-weight:800;line-height:1;letter-spacing:-.02em}
  .pr-studij-prag-lbl{font-size:10px;color:var(--muted);letter-spacing:.06em;text-transform:uppercase;font-weight:600}

  /* Detail view */
  .pr-detail{position:relative;z-index:1}
  .pr-breadcrumb{display:flex;align-items:center;gap:8px;font-size:12px;color:var(--muted);margin-bottom:18px;flex-wrap:wrap}
  .pr-breadcrumb-l{cursor:pointer;transition:color .15s;padding:3px 8px;border-radius:6px}
  .pr-breadcrumb-l:hover{color:var(--text);background:rgba(255,255,255,.04)}
  .pr-breadcrumb-sep{opacity:.4}

  .pr-detail-hero{position:relative;padding:12px 0 28px;margin-bottom:24px;border-bottom:1px solid var(--bdr);overflow:hidden}
  .pr-detail-bg{position:absolute;top:-40px;right:-10%;width:420px;height:220px;border-radius:50%;filter:blur(80px);pointer-events:none;opacity:.5}
  .pr-detail-headrow{display:flex;align-items:center;gap:16px;margin-bottom:16px;position:relative;z-index:1;flex-wrap:wrap}
  .pr-detail-glyph{width:64px;height:64px;border-radius:18px;display:flex;align-items:center;justify-content:center;font-size:32px;flex-shrink:0;position:relative}
  .pr-detail-glyph::after{content:'';position:absolute;inset:0;border-radius:inherit;border:1px solid rgba(255,255,255,.1)}
  .pr-detail-title-wrap{flex:1;min-width:220px}
  .pr-detail-eye{display:flex;align-items:center;gap:8px;margin-bottom:5px;flex-wrap:wrap}
  .pr-detail-eye-lbl{font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
  .pr-detail-type{font-size:10px;font-weight:700;padding:3px 9px;border-radius:99px;letter-spacing:.05em}
  .pr-detail-title{font-family:var(--fh);font-size:clamp(22px,3.2vw,32px);font-weight:800;letter-spacing:-.025em;line-height:1.15}
  .pr-detail-sub{font-size:13px;color:var(--muted);margin-top:6px}

  .pr-pragcards{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:22px;position:relative;z-index:1}
  .pr-pragcard{padding:16px 18px;border-radius:14px;background:var(--s1);border:1px solid var(--bdr);position:relative;overflow:hidden}
  .pr-pragcard.lead::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,var(--tone,rgba(75,123,255,.06)),transparent 60%);pointer-events:none}
  .pr-pragcard-lbl{font-size:11px;color:var(--muted);margin-bottom:5px;display:flex;align-items:center;gap:6px;position:relative}
  .pr-pragcard-v{font-family:var(--fh);font-size:24px;font-weight:900;line-height:1;position:relative;letter-spacing:-.02em}
  .pr-pragcard-sub{font-size:10px;color:var(--muted);font-weight:500;margin-top:3px;position:relative}
  .pr-trend{display:inline-flex;align-items:center;gap:3px;padding:2px 7px;border-radius:99px;font-size:10px;font-weight:700;margin-left:6px}
  .pr-trend-up{background:rgba(248,113,113,.12);color:#f87171;border:1px solid rgba(248,113,113,.22)}
  .pr-trend-down{background:rgba(62,207,110,.12);color:#3ecf6e;border:1px solid rgba(62,207,110,.22)}
  .pr-trend-flat{background:rgba(106,130,168,.12);color:var(--muted);border:1px solid var(--bdr)}

  .pr-tabs{display:flex;gap:4px;margin-bottom:24px;border-bottom:1px solid var(--bdr);overflow-x:auto;scrollbar-width:none}
  .pr-tabs::-webkit-scrollbar{display:none}
  .pr-tab{padding:10px 14px;border-radius:10px 10px 0 0;font-size:13px;font-weight:600;cursor:pointer;font-family:var(--fb);border:none;white-space:nowrap;flex-shrink:0;background:transparent;color:var(--muted);display:flex;align-items:center;gap:6px;transition:color .15s;position:relative;margin-bottom:-1px}
  .pr-tab:hover{color:var(--text)}
  .pr-tab.on{color:var(--text)}
  .pr-tab.on::after{content:'';position:absolute;bottom:-1px;left:8px;right:8px;height:2px;border-radius:2px 2px 0 0;background:var(--fak-color,var(--blue));box-shadow:0 0 8px var(--fak-color,var(--blue))}
  .pr-tab-lock{font-size:10px;opacity:.55;margin-left:2px}

  .pr-sidebar-title{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:12px;display:flex;align-items:center;gap:6px}
  .pr-sidebar-item{display:flex;align-items:center;gap:9px;padding:9px 12px;border-radius:10px;margin-bottom:3px;font-size:13px;color:var(--muted);transition:color .15s,background .15s}
  .pr-sidebar-item:hover{color:var(--text);background:rgba(255,255,255,.03)}
  .pr-sidebar-dot{width:6px;height:6px;border-radius:50%;flex-shrink:0}
  .pr-sidebar-cta{padding:16px;border-radius:14px;background:linear-gradient(160deg,rgba(233,180,70,.08),rgba(233,180,70,.02));border:1px solid rgba(233,180,70,.22);margin-top:20px}
  .pr-sidebar-cta-title{font-size:12px;font-weight:700;color:var(--gold);margin-bottom:4px;display:flex;align-items:center;gap:5px}
  .pr-sidebar-cta-sub{font-size:11px;color:var(--muted);line-height:1.55;margin-bottom:10px}
  .pr-sidebar-cta-btn{width:100%;padding:7px;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:var(--fb);background:transparent;color:var(--gold);border:1px solid rgba(233,180,70,.3);transition:background .15s}
  .pr-sidebar-cta-btn:hover{background:rgba(233,180,70,.1)}

  .pr-dgrid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:20px}
  .pr-dcard{padding:16px;border-radius:12px;background:var(--s1);border:1px solid var(--bdr);transition:border-color .15s}
  .pr-dcard:hover{border-color:var(--bdr-hi)}
  .pr-dcard-ico{font-size:18px;margin-bottom:8px;opacity:.85}
  .pr-dcard-lbl{font-size:11px;color:var(--muted);margin-bottom:3px;letter-spacing:.03em;text-transform:uppercase;font-weight:600}
  .pr-dcard-v{font-size:13px;font-weight:600;color:var(--text)}

  .pr-krez{margin-top:24px;padding:22px;border-radius:16px;position:relative;overflow:hidden;transition:border-color .3s,background .3s}
  .pr-krez-grid{display:flex;justify-content:space-between;align-items:flex-start;gap:14px;flex-wrap:wrap;position:relative;z-index:1}
  .pr-krez-big{font-family:var(--fh);font-size:48px;font-weight:900;line-height:1;letter-spacing:-.03em}
  .pr-krez-diff{display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:99px;font-size:12px;font-weight:700;margin-top:6px}

  .pr-discere{padding:18px 20px;border-radius:16px;background:linear-gradient(120deg,rgba(233,180,70,.08) 0%,rgba(233,180,70,.02) 60%,rgba(124,92,252,.06) 100%);border:1px solid rgba(233,180,70,.25);display:flex;align-items:center;gap:14px;position:relative;overflow:hidden}
  .pr-discere-ic{width:40px;height:40px;border-radius:11px;background:linear-gradient(135deg,rgba(233,180,70,.18),rgba(233,180,70,.05));border:1px solid rgba(233,180,70,.28);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
  .pr-discere-body{flex:1;min-width:0}
  .pr-discere-t{font-size:13px;font-weight:700;color:var(--gold);margin-bottom:2px}
  .pr-discere-s{font-size:12px;color:var(--muted);line-height:1.55}

  @media(max-width:640px){
    .pr-hero{padding:76px 0 24px}
    .pr-wrap{padding:0 16px !important}
    .pr-grid{grid-template-columns:1fr !important}
    .pr-detail-layout{flex-direction:column !important}
    .pr-detail-sidebar{display:none !important}
    .pr-detail-sidebar.open{display:flex !important;flex-direction:column;position:fixed;inset:58px 0 0 0;z-index:90;overflow-y:auto;background:var(--s1);padding:22px 18px;border-right:none;width:100% !important;height:auto !important}
    .pr-detail-body{padding:22px 16px !important;max-width:100% !important}
    .pr-pragcards{grid-template-columns:1fr !important}
    .pr-kalk-grid{grid-template-columns:1fr !important}
    .pr-kalk-r{grid-template-columns:1fr 1fr !important}
    .pr-dgrid{grid-template-columns:1fr !important}
    .nav-badge-pr{display:none !important}
    .pr-tab-full{display:none}
    .pr-tab-short{display:inline !important}
    .pr-mob-gradivo{display:none !important}  /* zamijenjen bottom nav-om */
    .pr-discere{flex-direction:column;align-items:stretch;text-align:left}
    .pr-discere button{width:100%}
    .pr-stats{gap:14px;padding:14px 16px}
    .pr-stat{min-width:70px}
    .pr-stat-divider{display:none}
    .pr-studij-card{flex-wrap:wrap;gap:12px}
    .pr-studij-right{width:100%;flex-direction:row;justify-content:space-between;align-items:center;padding-top:10px;border-top:1px solid var(--bdr)}
  }
  @media(min-width:641px){
    .pr-tab-short{display:none}
    .pr-mob-gradivo{display:none !important}
  }
`