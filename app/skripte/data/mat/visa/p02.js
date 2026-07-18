/**
 * Maturiraj.hr — Mat A · P02
 * Maturiraj.hr — Mat A · P02 · Potencije, Racionalni i Iracionalni Izrazi
 * ES6 module v3 — s kompletnim CSS-om, razlomcima, responsive, JS bugfix
 */
const css = `:root{
  --bg:#060910;--sur:#0A0E1A;--ele:#0E1422;--card:#111726;--hov:#17203A;--inp:#0A0F1A;
  --bd:rgba(77,158,255,0.07);--bdm:rgba(77,158,255,0.13);--bdl:rgba(77,158,255,0.22);
  --blue:#4D9EFF;--bd-b:rgba(77,158,255,0.20);--dim-b:rgba(77,158,255,0.09);--glow-b:rgba(77,158,255,0.035);
  --cyan:#22D3EE;--bd-c:rgba(34,211,238,0.20);--dim-c:rgba(34,211,238,0.09);
  --indigo:#818CF8;--bd-i:rgba(129,140,248,0.20);--dim-i:rgba(129,140,248,0.09);
  --amber:#F59E0B;--bd-a:rgba(245,158,11,0.20);--dim-a:rgba(245,158,11,0.09);
  --red:#F87171;--bd-r:rgba(248,113,113,0.20);--dim-r:rgba(248,113,113,0.09);
  --green:#34D399;--bd-g:rgba(52,211,153,0.20);--dim-g:rgba(52,211,153,0.09);
  --violet:#C084FC;--bd-v:rgba(192,132,252,0.20);--dim-v:rgba(192,132,252,0.09);
  --t1:#E4EDFF;--t2:#7A90BB;--t3:#364060;
  --font:'Plus Jakarta Sans',system-ui,sans-serif;--mono:'JetBrains Mono',monospace;
  --r1:4px;--r2:8px;--r3:12px;--r4:16px;--r5:24px;--sb:252px;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{font-size:16px;scroll-behavior:smooth}
body{font-family:var(--font);background:var(--bg);color:var(--t1);min-height:100vh;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
.shell{display:flex;min-height:100vh}

/* ── SIDEBAR ── */
.sidebar{width:var(--sb);flex-shrink:0;background:var(--sur);border-right:1px solid var(--bd);position:sticky;top:0;height:100vh;overflow-y:auto;display:flex;flex-direction:column;scrollbar-width:thin;scrollbar-color:var(--bdm) transparent}
.sidebar::-webkit-scrollbar{width:3px}.sidebar::-webkit-scrollbar-thumb{background:var(--bdm);border-radius:2px}
.sb-brand{padding:16px 14px 13px;border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:10px}
.sb-logo{width:30px;height:30px;background:linear-gradient(135deg,var(--blue),var(--cyan));border-radius:var(--r2);display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 0 18px rgba(77,158,255,0.28)}
.sb-logo svg{width:14px;height:14px}
.sb-name{font-size:13px;font-weight:800;color:var(--t1);letter-spacing:-.4px}
.sb-sub{font-size:10px;color:var(--t3);margin-top:1px;font-family:var(--mono)}
.sb-hamburger{display:none;position:fixed;top:12px;left:12px;z-index:200;width:36px;height:36px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);align-items:center;justify-content:center;cursor:pointer;flex-direction:column;gap:4px}
.sb-hamburger span{display:block;width:16px;height:1.5px;background:var(--t2);border-radius:1px;transition:all .2s}
.sb-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:150;backdrop-filter:blur(2px)}
.sb-overlay.show{display:block}
.sidebar.mobile-open{transform:translateX(0)!important}
.sb-prog-wrap{padding:8px 14px;border-bottom:1px solid var(--bd)}
.sb-prog-label{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:1px;text-transform:uppercase;margin-bottom:5px;display:flex;justify-content:space-between}
.sb-prog-track{height:3px;background:var(--bd);border-radius:2px;overflow:hidden}
.sb-prog-bar{height:100%;background:linear-gradient(90deg,var(--blue),var(--cyan));border-radius:2px;transition:width .5s cubic-bezier(.4,0,.2,1)}
.sb-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--t3);text-transform:uppercase;padding:15px 14px 5px}
.sb-item{display:flex;align-items:center;gap:9px;padding:6px 14px;font-size:11.5px;color:var(--t2);cursor:pointer;border-left:2px solid transparent;transition:all .12s;line-height:1.35}
.sb-item:hover{color:var(--t1);background:var(--hov)}
.sb-item.active{color:var(--blue);background:var(--glow-b);border-left-color:var(--blue);font-weight:600}
.sb-item.done{color:var(--green);opacity:.7}
.sb-item.done .sb-dot{background:var(--green);opacity:.7}
.sb-dot{width:4px;height:4px;border-radius:50%;background:currentColor;flex-shrink:0;opacity:.35}
.sb-item.active .sb-dot{opacity:1}
button.sb-item{font-family:var(--font);outline:none;line-height:1.35}
.sb-footer{margin-top:auto;padding:10px 14px;border-top:1px solid var(--bd);font-size:10px;color:var(--t3);line-height:1.7;font-family:var(--mono)}

/* ── MAIN ── */
.main{flex:1;min-width:0}
.content-wrap{max-width:840px;width:100%;margin:0 auto;padding:32px 44px 120px}

/* ── BREADCRUMB ── */
.bc{display:flex;align-items:center;gap:8px;font-size:11px;color:var(--t3);margin-bottom:22px;font-family:var(--mono)}
.bc-sep{opacity:.3}.bc-cur{color:var(--blue)}

/* ── TABS ── */
.tabs{display:flex;gap:0;margin-bottom:28px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);padding:3px;width:fit-content}
.tab{padding:7px 20px;font-size:12px;font-weight:600;color:var(--t2);cursor:pointer;border-radius:5px;transition:all .18s;white-space:nowrap;font-family:var(--mono)}
.tab:hover{color:var(--t1)}
.tab.on{background:linear-gradient(135deg,var(--blue),var(--cyan));color:#060910;font-weight:700;box-shadow:0 2px 16px rgba(77,158,255,0.3)}
.layer{display:none}.layer.on{display:block}

/* ── HERO ── */
.hero{margin-bottom:26px;padding:30px 34px;background:var(--card);border:1px solid var(--bdm);border-radius:20px;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--blue),var(--cyan),var(--indigo),transparent)}
.hero-orb{position:absolute;top:-60px;right:-60px;width:280px;height:280px;background:radial-gradient(circle,rgba(77,158,255,0.055) 0%,transparent 70%);border-radius:50%;pointer-events:none}
.hero-orb2{position:absolute;bottom:-50px;left:20%;width:200px;height:200px;background:radial-gradient(circle,rgba(34,211,238,0.035) 0%,transparent 70%);border-radius:50%;pointer-events:none}
.hero-eyebrow{font-family:var(--mono);font-size:9.5px;color:var(--cyan);letter-spacing:2px;margin-bottom:11px;text-transform:uppercase;display:flex;align-items:center;gap:8px}
.hero-eyebrow::before{content:'';display:inline-block;width:18px;height:1px;background:var(--cyan);opacity:.5}
.hero-title{font-size:27px;font-weight:800;color:var(--t1);letter-spacing:-1px;line-height:1.12;margin-bottom:8px}
.hero-title span{background:linear-gradient(135deg,var(--blue),var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-sub{font-size:12.5px;color:var(--t2);font-family:var(--mono);margin-bottom:18px;line-height:1.65}
.hero-meta{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:18px}
.hchip{font-family:var(--mono);font-size:10px;padding:3px 10px;border-radius:var(--r1);border:1px solid;letter-spacing:.3px;font-weight:600}
.hchip.b{background:var(--dim-b);color:var(--blue);border-color:var(--bd-b)}
.hchip.a{background:var(--dim-a);color:var(--amber);border-color:var(--bd-a)}
.hchip.c{background:var(--dim-c);color:var(--cyan);border-color:var(--bd-c)}
.pt{height:2px;background:var(--bd);border-radius:1px;overflow:visible;width:100%;max-width:360px;position:relative}
.pb{height:100%;background:linear-gradient(90deg,var(--blue),var(--cyan));border-radius:1px;position:relative;transition:width .6s cubic-bezier(.4,0,.2,1)}
.pb::after{content:'';position:absolute;right:-3px;top:-3px;width:8px;height:8px;background:var(--cyan);border-radius:50%;box-shadow:0 0 10px var(--cyan)}

/* ── PILLS ── */
.tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:24px}
.pill{display:inline-flex;align-items:center;padding:3px 10px;border-radius:var(--r1);font-size:10.5px;font-weight:700;font-family:var(--mono);border:1px solid;letter-spacing:.3px}
.p-b{background:var(--dim-b);color:var(--blue);border-color:var(--bd-b)}.p-c{background:var(--dim-c);color:var(--cyan);border-color:var(--bd-c)}
.p-i{background:var(--dim-i);color:var(--indigo);border-color:var(--bd-i)}.p-a{background:var(--dim-a);color:var(--amber);border-color:var(--bd-a)}
.p-r{background:var(--dim-r);color:var(--red);border-color:var(--bd-r)}.p-v{background:var(--dim-v);color:var(--violet);border-color:var(--bd-v)}
.p-g{background:var(--dim-g);color:var(--green);border-color:var(--bd-g)}

/* ── MISC ── */
.slbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2.5px;color:var(--t3);text-transform:uppercase;margin-bottom:12px;padding-bottom:7px;border-bottom:1px solid var(--bd)}
.divider{border:none;border-top:1px solid var(--bd);margin:26px 0}
.prose{font-size:14.5px;line-height:1.9;color:rgba(228,237,255,.82);margin-bottom:14px}
.prose b,.prose strong{color:var(--t1);font-weight:700}.prose em{color:var(--cyan);font-style:normal}

/* ── STAT GRID ── */
.sg{display:grid;grid-template-columns:repeat(auto-fill,minmax(168px,1fr));gap:10px;margin-bottom:24px}
.sc{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px 15px;transition:border-color .15s,transform .15s,box-shadow .15s}
.sc:hover{border-color:var(--bd-b);transform:translateY(-2px);box-shadow:0 4px 20px rgba(77,158,255,0.07)}
.sc-ico{font-family:var(--mono);font-size:10px;font-weight:700;padding:3px 8px;border-radius:var(--r1);display:inline-flex;margin-bottom:10px}
.si-b{background:var(--dim-b);color:var(--blue)}.si-c{background:var(--dim-c);color:var(--cyan)}
.si-i{background:var(--dim-i);color:var(--indigo)}.si-a{background:var(--dim-a);color:var(--amber)}
.si-g{background:var(--dim-g);color:var(--green)}.si-v{background:var(--dim-v);color:var(--violet)}
.sc-name{font-size:13px;font-weight:700;color:var(--t1);margin-bottom:5px;line-height:1.3}
.sc-desc{font-size:11px;color:var(--t2);line-height:1.55;font-family:var(--mono)}

/* ── CONCEPTS TABLE ── */
.con{border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden;margin:12px 0 22px}
.cr{display:grid;grid-template-columns:minmax(155px,34%) 1fr;border-bottom:1px solid var(--bd);transition:background .1s}
.cr:last-child{border-bottom:none}.cr:nth-child(even){background:rgba(77,158,255,0.016)}
.cr:hover{background:var(--hov)}
.ck{padding:11px 14px;font-family:var(--mono);font-size:11.5px;font-weight:600;border-right:1px solid var(--bd);position:relative;padding-left:18px}
.ck::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;border-radius:0 2px 2px 0}
.ck.b{color:var(--blue)}.ck.b::before{background:var(--blue)}
.ck.c{color:var(--cyan)}.ck.c::before{background:var(--cyan)}
.ck.i{color:var(--indigo)}.ck.i::before{background:var(--indigo)}
.ck.a{color:var(--amber)}.ck.a::before{background:var(--amber)}
.ck.r{color:var(--red)}.ck.r::before{background:var(--red)}
.ck.g{color:var(--green)}.ck.g::before{background:var(--green)}
.ck.v{color:var(--violet)}.ck.v::before{background:var(--violet)}
.cv{padding:11px 16px;font-size:13px;color:var(--t2);line-height:1.65}
.cv code{font-family:var(--mono);font-size:11px;background:var(--inp);padding:1px 6px;border-radius:var(--r1);color:var(--blue)}

/* ── BLOCK TYPES ── */
.box-int{background:linear-gradient(135deg,rgba(77,158,255,0.055),rgba(34,211,238,0.03));border:1px solid var(--bd-b);border-radius:var(--r4);padding:17px 20px;margin:13px 0}
.box-int-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--blue);text-transform:uppercase;margin-bottom:8px;display:flex;align-items:center;gap:7px}
.box-int-lbl::before{content:'◆';font-size:7px}
.box-int-txt{font-size:14px;color:var(--t1);line-height:1.82;font-weight:500}
.box-int-txt em{color:var(--cyan);font-style:normal;font-weight:600}

.box-for{background:var(--inp);border:1px solid var(--bdm);border-left:3px solid var(--indigo);border-radius:0 var(--r3) var(--r3) 0;padding:15px 20px;margin:13px 0;font-family:var(--mono);font-size:13px;line-height:2.1}
.box-for-lbl{font-size:9px;font-weight:700;letter-spacing:2px;color:var(--indigo);text-transform:uppercase;margin-bottom:9px;display:block}
.box-for .val{color:var(--blue)}.box-for .kw{color:var(--amber)}.box-for .cmt{color:var(--t3)}

.box-men{background:linear-gradient(135deg,rgba(129,140,248,0.065),rgba(192,132,252,0.03));border:1px solid var(--bd-i);border-radius:var(--r4);padding:15px 20px;margin:13px 0}
.box-men-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--indigo);text-transform:uppercase;margin-bottom:8px;display:flex;align-items:center;gap:7px}
.box-men-lbl::before{content:'🧠';font-size:11px}
.box-men-txt{font-size:13.5px;color:var(--t2);line-height:1.82}
.box-men-txt strong{color:var(--indigo)}

.box-tak{background:linear-gradient(135deg,rgba(245,158,11,0.065),rgba(251,183,36,0.03));border:1px solid var(--bd-a);border-radius:var(--r4);padding:15px 20px;margin:14px 0}
.box-tak-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--amber);text-transform:uppercase;margin-bottom:9px;display:flex;align-items:center;gap:7px}
.box-tak-lbl::before{content:'⭐';font-size:11px}
.box-tak-txt{font-size:13px;color:var(--t2);line-height:1.82}
.box-tak-txt strong{color:var(--amber)}
.box-tak-txt code{font-family:var(--mono);font-size:11.5px;background:rgba(245,158,11,0.1);padding:1px 7px;border-radius:var(--r1);color:var(--amber)}

.box-warn{background:var(--dim-r);border:1px solid var(--bd-r);border-radius:var(--r3);padding:14px 18px;margin:12px 0;display:flex;gap:12px}
.bw-ico{font-size:16px;flex-shrink:0;margin-top:1px}.bw-body{flex:1}
.bw-title{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--red);margin-bottom:5px}
.bw-txt{font-size:13px;line-height:1.78;color:var(--t2)}
.bw-txt strong{color:var(--red)}.bw-txt code{font-family:var(--mono);font-size:11px;background:var(--dim-r);padding:1px 5px;border-radius:var(--r1);color:var(--red)}

.box-tip{background:var(--dim-c);border:1px solid var(--bd-c);border-radius:var(--r3);padding:14px 18px;margin:12px 0;display:flex;gap:12px}
.bt-ico{font-size:15px;flex-shrink:0;margin-top:1px}.bt-body{flex:1}
.bt-title{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--cyan);margin-bottom:5px}
.bt-txt{font-size:13px;line-height:1.78;color:var(--t2)}.bt-txt strong{color:var(--cyan)}

.box-20{background:linear-gradient(135deg,rgba(52,211,153,0.065),rgba(34,211,238,0.03));border:1px solid var(--bd-g);border-radius:var(--r4);padding:15px 20px;margin:16px 0}
.b20-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--green);text-transform:uppercase;margin-bottom:10px;display:flex;align-items:center;gap:7px}
.b20-lbl::before{content:'⚡';font-size:11px}
.b20-list{list-style:none;display:flex;flex-direction:column;gap:6px}
.b20-item{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--t1);line-height:1.6}
.b20-dot{width:6px;height:6px;background:var(--green);border-radius:1px;flex-shrink:0;margin-top:5px;transform:rotate(45deg)}

.box-alv{background:linear-gradient(135deg,rgba(192,132,252,0.065),rgba(129,140,248,0.03));border:1px solid var(--bd-v);border-radius:var(--r4);padding:15px 20px;margin:14px 0}
.balv-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--violet);text-transform:uppercase;margin-bottom:9px;display:flex;align-items:center;gap:7px}
.balv-lbl::before{content:'🔺';font-size:10px}
.balv-txt{font-size:13px;color:var(--t2);line-height:1.82}.balv-txt strong{color:var(--violet)}

/* ── SECTION HEADER ── */
.sec-hdr{display:flex;align-items:center;gap:14px;margin:30px 0 17px}
.sec-line{flex:1;height:1px;background:var(--bd)}
.sec-badge{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;color:var(--blue);text-transform:uppercase;padding:4px 12px;border:1px solid var(--bd-b);border-radius:20px;background:var(--dim-b);white-space:nowrap}h2.sec-badge{display:block;margin:0;font-size:9.5px;font-weight:700;}.sec-time{font-family:var(--mono);font-size:9px;color:var(--t3);padding:2px 8px;border:1px solid var(--bd);border-radius:10px;white-space:nowrap;margin-left:6px}

/* ── TABLE ── */
.tbl{overflow-x:auto;margin:12px 0 18px;border:1px solid var(--bdm);border-radius:var(--r3)}
table{width:100%;border-collapse:collapse;font-size:12.5px}
th{padding:9px 14px;background:var(--sur);color:var(--t3);font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;text-align:left;border-bottom:1px solid var(--bdm);white-space:nowrap}
td{padding:10px 14px;color:var(--t2);border-bottom:1px solid var(--bd);line-height:1.6;vertical-align:top}
tr:last-child td{border-bottom:none}
tr:nth-child(even) td{background:rgba(77,158,255,0.015)}
tr:hover td{background:var(--hov)}
td code{font-family:var(--mono);font-size:11px;background:var(--inp);padding:1px 5px;border-radius:var(--r1);color:var(--blue)}
td b{color:var(--t1)}
.bs{font-family:var(--mono);font-size:9.5px;padding:2px 7px;border-radius:3px;border:1px solid;font-weight:600}
.bs-b{background:var(--dim-b);color:var(--blue);border-color:var(--bd-b)}
.bs-r{background:var(--dim-r);color:var(--red);border-color:var(--bd-r)}
.bs-g{background:var(--dim-g);color:var(--green);border-color:var(--bd-g)}
.bs-a{background:var(--dim-a);color:var(--amber);border-color:var(--bd-a)}

/* ── COMPARE ── */
.cmp{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:13px 0 20px}
.cmp-c{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden}
.cmp-h{padding:9px 13px;font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid var(--bd)}
.cmp-h.b{background:var(--dim-b);color:var(--blue);border-bottom-color:var(--bd-b)}
.cmp-h.r{background:var(--dim-r);color:var(--red);border-bottom-color:var(--bd-r)}
.cmp-h.g{background:var(--dim-g);color:var(--green);border-bottom-color:var(--bd-g)}
.cmp-h.i{background:var(--dim-i);color:var(--indigo);border-bottom-color:var(--bd-i)}
.cmp-body{padding:12px 13px}
.cmp-row{font-size:12.5px;color:var(--t2);padding:6px 0;border-bottom:1px solid var(--bd);line-height:1.6}
.cmp-row:last-child{border-bottom:none}
.cmp-row b{color:var(--t1);display:block;font-size:11.5px;margin-bottom:2px}

/* ── EXAMPLES ── */
.exs{margin:12px 0 17px}
.ex{display:grid;grid-template-columns:1fr auto 1fr;gap:10px;align-items:start;padding:9px 0;border-bottom:1px solid var(--bd)}
.ex:last-child{border-bottom:none}
.ex-l{font-size:13.5px;color:var(--t1);line-height:1.6;font-family:var(--mono)}
.ex-l b{color:var(--blue)}.ex-l b.r{color:var(--red)}.ex-l b.g{color:var(--green)}
.ex-arr{color:var(--t3);font-size:12px;padding-top:3px}
.ex-r{font-size:12px;color:var(--t2);line-height:1.6;font-family:var(--mono)}

/* ── SUB LABEL ── */
.sub-l{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;color:var(--blue);text-transform:uppercase;margin:18px 0 10px;display:flex;align-items:center;gap:8px}
.sub-l::before{content:'→';color:var(--t3)}

/* ── STEP REVEAL ── */
.sr{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:15px 0}
.sr-head{padding:12px 17px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}
.sr-title{font-size:13px;font-weight:700;color:var(--t1)}.sr-task{font-family:var(--mono);font-size:12.5px;color:var(--cyan)}
.sr-steps{padding:0}
.sr-step{border-bottom:1px solid var(--bd);display:none;animation:fadeSlide .25s ease}
.sr-step.show{display:block}
@keyframes fadeSlide{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
.sr-step-in{padding:13px 17px;display:flex;gap:13px;align-items:flex-start}
.sr-num{width:24px;height:24px;border-radius:50%;background:var(--dim-b);border:1.5px solid var(--bd-b);color:var(--blue);font-family:var(--mono);font-size:10.5px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.sr-body{flex:1}
.sr-stitle{font-size:12.5px;font-weight:700;color:var(--t1);margin-bottom:4px}
.sr-txt{font-size:12.5px;color:var(--t2);line-height:1.78;font-family:var(--mono)}
.sr-txt strong{color:var(--blue)}.sr-txt em{color:var(--cyan);font-style:normal}
.sr-tryit{margin-top:10px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);padding:10px 13px}
.sr-try-lbl{font-family:var(--mono);font-size:9px;color:var(--amber);font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:7px}
.sr-try-row{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.sr-try-in{font-family:var(--mono);font-size:13px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);color:var(--t1);padding:6px 12px;outline:none;width:180px;transition:border-color .15s}
.sr-try-in:focus{border-color:var(--blue)}
.sr-try-in.ok{border-color:var(--green);background:var(--dim-g);color:var(--green)}
.sr-try-in.fail{border-color:var(--red);background:var(--dim-r);color:var(--red)}
.sr-try-btn{padding:6px 13px;background:var(--dim-a);border:1px solid var(--bd-a);color:var(--amber);border-radius:var(--r2);font-family:var(--mono);font-size:11px;font-weight:700;cursor:pointer;transition:all .15s}
.sr-try-btn:hover{background:var(--amber);color:#060910}
.sr-try-btn:disabled{opacity:.35;cursor:default}
.sr-try-fb{font-family:var(--mono);font-size:11.5px;margin-top:7px;line-height:1.6;display:none}
.sr-try-fb.show{display:block}
.sr-try-fb.ok{color:var(--green)}.sr-try-fb.fail{color:var(--red)}
.sr-foot{padding:11px 17px;display:flex;gap:8px;align-items:center;flex-wrap:wrap;border-top:1px solid var(--bd)}
.sr-btn{padding:7px 15px;border:1px solid var(--bd-b);background:var(--dim-b);color:var(--blue);border-radius:var(--r2);font-family:var(--mono);font-size:11.5px;font-weight:700;cursor:pointer;transition:all .15s}
.sr-btn:hover{background:var(--blue);color:#060910}
.sr-btn.rst{border-color:var(--bdm);background:transparent;color:var(--t3)}
.sr-btn.rst:hover{color:var(--t2);background:var(--hov)}
.sr-prog{font-family:var(--mono);font-size:10px;color:var(--t3);margin-left:auto}

/* ── BUG FINDER ── */
.box-bug{background:var(--card);border:1px solid var(--bd-r);border-radius:var(--r4);overflow:hidden;margin:15px 0}
.bug-head{background:var(--dim-r);padding:9px 17px;font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--red);display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--bd-r)}
.bug-body{padding:15px 17px}
.bug-task{font-family:var(--mono);font-size:13.5px;color:var(--t1);background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);padding:12px 15px;margin-bottom:13px;line-height:1.9}
.bug-task .wrong{color:var(--red);text-decoration:line-through;opacity:.75}
.bug-opts{display:flex;flex-direction:column;gap:6px}
.bug-opt{padding:9px 13px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);font-size:13px;color:var(--t2);cursor:pointer;transition:all .13s;font-family:var(--mono)}
.bug-opt:hover:not(.dis){border-color:var(--bd-b);color:var(--t1)}
.bug-opt.ok{background:var(--dim-g);border-color:var(--bd-g);color:var(--green)}
.bug-opt.ng{background:var(--dim-r);border-color:var(--bd-r);color:var(--red)}
.bug-opt.dis{cursor:default;pointer-events:none}
.bug-expl{display:none;margin-top:12px;padding:11px 13px;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;line-height:1.78}
.bug-expl.show{display:block}
.bug-expl.ok{background:var(--dim-g);color:var(--green);border:1px solid var(--bd-g)}
.bug-expl.ng{background:var(--dim-r);color:var(--red);border:1px solid var(--bd-r)}

/* ── RAPID DRILL ── */
.drill{background:var(--card);border:1px solid var(--bd-v);border-radius:var(--r4);overflow:hidden;margin:15px 0}
.drill-head{padding:11px 17px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
.drill-title{font-family:var(--mono);font-size:10.5px;color:var(--violet);font-weight:700;letter-spacing:1px;text-transform:uppercase}
.drill-score{font-family:var(--mono);font-size:10px;color:var(--t3)}
.drill-body{padding:18px 17px}
.drill-q{font-size:22px;font-weight:800;color:var(--t1);text-align:center;letter-spacing:-0.5px;margin-bottom:18px;font-family:var(--mono);min-height:36px;transition:opacity .15s}
.drill-opts{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:14px}
.drill-opt{padding:9px 22px;border:1.5px solid var(--bdm);background:var(--inp);color:var(--t2);border-radius:var(--r2);font-family:var(--mono);font-size:13.5px;font-weight:700;cursor:pointer;transition:all .14s}
.drill-opt:hover:not(.dis){border-color:var(--bd-v);color:var(--violet)}
.drill-opt.ok{background:var(--dim-g);border-color:var(--bd-g);color:var(--green)}
.drill-opt.ng{background:var(--dim-r);border-color:var(--bd-r);color:var(--red)}
.drill-opt.dis{cursor:default;pointer-events:none}
.drill-fb{text-align:center;font-family:var(--mono);font-size:12px;color:var(--t2);min-height:20px;margin-bottom:4px}
.drill-fb.ok{color:var(--green)}.drill-fb.ng{color:var(--red)}
.drill-ctrl{display:flex;align-items:center;justify-content:center;gap:10px;margin-top:10px}
.drill-next{padding:7px 18px;border:1px solid var(--bd-v);background:var(--dim-v);color:var(--violet);border-radius:var(--r2);font-family:var(--mono);font-size:11.5px;font-weight:700;cursor:pointer;transition:all .15s;display:none}
.drill-next:hover{background:var(--violet);color:#060910}
.drill-bar{height:3px;background:var(--bd);border-radius:2px;margin:12px 0 0;overflow:hidden}
.drill-bar-fill{height:100%;background:linear-gradient(90deg,var(--violet),var(--indigo));border-radius:2px;transition:width .3s}

/* ── INLINE CHECKPOINT ── */
.inline-cp{background:linear-gradient(135deg,rgba(245,158,11,0.06),rgba(77,158,255,0.04));border:1px solid var(--bd-a);border-radius:var(--r4);overflow:hidden;margin:20px 0}
.icp-head{padding:10px 17px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
.icp-title{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--amber);text-transform:uppercase;display:flex;align-items:center;gap:7px}
.icp-title::before{content:'🔬';font-size:11px}
.icp-score{font-family:var(--mono);font-size:10px;color:var(--t3)}
.icp-body{padding:14px 17px;display:flex;flex-direction:column;gap:8px}
.icp-q{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden}
.icp-q-text{padding:10px 14px;font-size:13px;font-weight:700;color:var(--t1);font-family:var(--mono);border-bottom:1px solid var(--bd)}
.icp-opts{padding:8px 14px;display:flex;flex-wrap:wrap;gap:6px}
.icp-opt{padding:6px 14px;border:1px solid var(--bdm);background:var(--inp);color:var(--t2);border-radius:var(--r2);font-family:var(--mono);font-size:12px;font-weight:600;cursor:pointer;transition:all .13s}
.icp-opt:hover:not(.dis){border-color:var(--bd-a);color:var(--amber)}
.icp-opt.ok{background:var(--dim-g);border-color:var(--bd-g);color:var(--green)}
.icp-opt.ng{background:var(--dim-r);border-color:var(--bd-r);color:var(--red)}
.icp-opt.dis{cursor:default;pointer-events:none}
.icp-fb{display:none;padding:8px 14px;font-family:var(--mono);font-size:12px;line-height:1.7;border-top:1px solid var(--bd)}
.icp-fb.show{display:block}
.icp-fb.ok{color:var(--green);background:var(--dim-g)}
.icp-fb.ng{color:var(--red);background:var(--dim-r)}
.icp-done{display:none;text-align:center;padding:12px;font-family:var(--mono);font-size:12px;color:var(--green);font-weight:700}
.icp-done.show{display:block}
.icp-retry{display:none;margin-top:8px;padding:5px 12px;background:transparent;border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--mono);font-size:11px;color:var(--t3);cursor:pointer;transition:all .15s}
.icp-retry:hover{border-color:var(--bd-a);color:var(--amber)}
.icp-retry.show{display:inline-flex}

/* ── COMBINED EXAMPLE ── */
.combo{background:linear-gradient(135deg,rgba(77,158,255,0.045),rgba(129,140,248,0.025));border:1px solid var(--bd-i);border-radius:var(--r4);overflow:hidden;margin:10px 0}
.combo-head{padding:10px 17px;border-bottom:1px solid var(--bd);background:rgba(129,140,248,0.04)}
.combo-badge{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;color:var(--indigo);text-transform:uppercase;display:flex;align-items:center;gap:8px}
.combo-badge::before{content:'🔗';font-size:11px}
.combo-body{padding:15px 17px}
.combo-task{font-family:var(--mono);font-size:13.5px;color:var(--t1);font-weight:700;margin-bottom:13px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);padding:11px 14px}
.combo-steps{display:flex;flex-direction:column;gap:8px}
.combo-step{display:flex;gap:10px;align-items:flex-start}
.combo-n{width:20px;height:20px;border-radius:50%;background:var(--dim-i);border:1px solid var(--bd-i);color:var(--indigo);font-family:var(--mono);font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}
.combo-txt{font-size:13px;color:var(--t2);line-height:1.72;font-family:var(--mono)}
.combo-txt strong{color:var(--indigo)}.combo-txt em{color:var(--cyan);font-style:normal}
.combo-ans{background:var(--dim-g);border:1px solid var(--bd-g);border-radius:var(--r2);padding:10px 14px;font-family:var(--mono);font-size:13px;color:var(--green);margin-top:12px;font-weight:600}

/* ── NCVVO BLOK ── */
.ncvvo{background:var(--card);border:1px solid var(--bd-i);border-radius:var(--r4);overflow:hidden;margin:13px 0}
.ncvvo-hd{background:var(--dim-i);padding:9px 17px;font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--indigo);text-transform:uppercase;display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--bd-i)}
.ncvvo-body{padding:13px 17px}
.nci{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--t2);padding:6px 0;border-bottom:1px solid var(--bd);line-height:1.65}
.nci:last-child{border-bottom:none}
.nc-dot{width:5px;height:5px;background:var(--indigo);border-radius:50%;flex-shrink:0;margin-top:6px}
.nci b{color:var(--t1)}

/* ── NCVVO STVARNI ISPIT ── */
.ncvvo-real{background:var(--card);border:1px solid var(--bd-a);border-radius:var(--r4);overflow:hidden;margin:18px 0}
.ncvvo-real-hd{background:var(--amber);padding:9px 17px;font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:#060910;text-transform:uppercase;display:flex;align-items:center;gap:8px}
.ncvvo-real-body{padding:14px 17px}
.ncvvo-real-item{background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3);padding:12px 14px;margin-bottom:8px}
.ncvvo-real-item:last-child{margin-bottom:0}
.ncvvo-real-meta{font-family:var(--mono);font-size:9px;color:var(--t3);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:6px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.ncvvo-real-year{background:var(--dim-a);color:var(--amber);border:1px solid var(--bd-a);padding:1px 7px;border-radius:3px;font-size:9px;font-weight:700}
.ncvvo-real-q{font-family:var(--mono);font-size:13px;font-weight:700;color:var(--t1);margin-bottom:8px}
.ncvvo-real-stat{font-size:12px;color:var(--t2);line-height:1.7}
.ncvvo-real-stat strong{color:var(--red)}
.ncvvo-real-ans{margin-top:8px;padding:7px 11px;background:var(--dim-g);border:1px solid var(--bd-g);border-radius:var(--r2);font-family:var(--mono);font-size:12px;color:var(--green);display:none}
.ncvvo-real-ans.show{display:block}
.ncvvo-real-show{margin-top:8px;padding:5px 12px;background:transparent;border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--mono);font-size:11px;color:var(--t3);cursor:pointer;transition:all .15s}
.ncvvo-real-show:hover{border-color:var(--bd-a);color:var(--amber)}
.ncvvo-live-stat{font-family:var(--mono);font-size:10px;padding:2px 9px;border-radius:3px;border:1px solid;font-weight:700;margin-left:8px;transition:all .3s}
.ncvvo-live-stat.good{background:var(--dim-g);color:var(--green);border-color:var(--bd-g)}
.ncvvo-live-stat.bad{background:var(--dim-r);color:var(--red);border-color:var(--bd-r)}
.ncvvo-live-stat.neutral{background:var(--dim-a);color:var(--amber);border-color:var(--bd-a)}

/* ── CHECKPOINT ── */

.checkpoint{background:linear-gradient(135deg,rgba(52,211,153,0.07),rgba(77,158,255,0.04));border:2px solid var(--bd-g);border-radius:var(--r4);padding:20px 22px;margin:24px 0}
.cp-head{display:flex;align-items:center;gap:10px;margin-bottom:14px}
.cp-icon{font-size:20px}
.cp-title{font-size:15px;font-weight:800;color:var(--t1);letter-spacing:-.4px}
.cp-sub{font-size:12px;color:var(--t2);font-family:var(--mono);margin-top:2px}
.cp-list{list-style:none;display:flex;flex-direction:column;gap:7px}
.cp-item{display:flex;align-items:flex-start;gap:10px;font-size:13.5px;color:var(--t2);line-height:1.65}
.cp-check{width:18px;height:18px;border:1.5px solid var(--bd-g);border-radius:var(--r1);flex-shrink:0;margin-top:2px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .15s;background:transparent}
.cp-check.done{background:var(--green);border-color:var(--green)}
.cp-check.done::after{content:'✓';font-size:10px;color:#060910;font-weight:800}
.cp-item.done-item{color:var(--green)}
.cp-footer{margin-top:14px;padding-top:12px;border-top:1px solid var(--bd-g);display:flex;align-items:center;justify-content:space-between;font-family:var(--mono);font-size:11px;color:var(--t3)}
.cp-progress-txt{color:var(--green);font-weight:700}

/* ── CONNECT NEXT ── */
.connect-next{background:linear-gradient(135deg,rgba(77,158,255,0.06),rgba(129,140,248,0.04));border:1px solid var(--bd-b);border-radius:20px;padding:22px 24px;margin:28px 0}
.cn-head{display:flex;align-items:center;gap:12px;margin-bottom:16px}
.cn-icon{font-size:22px}
.cn-title{font-size:15px;font-weight:800;color:var(--t1);letter-spacing:-.4px}
.cn-sub{font-size:12px;color:var(--t2);font-family:var(--mono);margin-top:2px}
.cn-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px}
.cn-item{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:13px 15px;transition:border-color .15s,transform .15s}
.cn-item:hover{border-color:var(--bd-b);transform:translateY(-2px)}
.cn-item-head{display:flex;align-items:center;gap:8px;margin-bottom:7px}
.cn-badge{font-family:var(--mono);font-size:9px;font-weight:700;padding:2px 8px;border-radius:3px;border:1px solid}
.cn-badge.b{background:var(--dim-b);color:var(--blue);border-color:var(--bd-b)}
.cn-badge.i{background:var(--dim-i);color:var(--indigo);border-color:var(--bd-i)}
.cn-badge.c{background:var(--dim-c);color:var(--cyan);border-color:var(--bd-c)}
.cn-badge.v{background:var(--dim-v);color:var(--violet);border-color:var(--bd-v)}
.cn-badge.a{background:var(--dim-a);color:var(--amber);border-color:var(--bd-a)}
.cn-item-title{font-size:12.5px;font-weight:700;color:var(--t1)}
.cn-item-desc{font-size:11.5px;color:var(--t2);line-height:1.65;font-family:var(--mono)}
.cn-item-arrow{font-size:10px;color:var(--t3);margin-top:5px;font-family:var(--mono)}

/* ── MATURA BLOCK ── */
.matura-block{border:1px solid var(--bd-a);border-radius:var(--r4);overflow:hidden;margin:20px 0}
.matura-hd{background:var(--amber);padding:9px 17px;font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:#060910;text-transform:uppercase;display:flex;align-items:center;gap:8px}
.matura-list{list-style:none;padding:12px 17px}
.mi{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:rgba(228,237,255,.82);padding:7px 0;border-bottom:1px solid rgba(245,158,11,.09);line-height:1.65}
.mi:last-child{border-bottom:none}
.mi-dot{width:5px;height:5px;background:var(--amber);border-radius:1px;flex-shrink:0;margin-top:6px;transform:rotate(45deg)}
.mi b{color:var(--t1)}

/* ── QUIZ ── */
.exam-mode-wrap{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin-bottom:20px}
.exam-mode-head{padding:10px 17px;border-bottom:1px solid var(--bd);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--t3);text-transform:uppercase}
.exam-mode-opts{display:grid;grid-template-columns:repeat(3,1fr)}
.exam-mode-opt{padding:14px 16px;cursor:pointer;transition:background .15s;border-right:1px solid var(--bd);text-align:center}
.exam-mode-opt:last-child{border-right:none}
.exam-mode-opt:hover{background:var(--hov)}
.exam-mode-opt.active{background:var(--dim-b);border-bottom:2px solid var(--blue)}
.em-icon{font-size:20px;margin-bottom:6px}
.em-name{font-family:var(--mono);font-size:12px;font-weight:700;color:var(--t1);margin-bottom:3px}
.em-desc{font-family:var(--mono);font-size:10px;color:var(--t3);line-height:1.4}
.exam-mode-opt.active .em-name{color:var(--blue)}
.adaptive-banner{background:linear-gradient(135deg,rgba(192,132,252,0.08),rgba(129,140,248,0.05));border:1px solid var(--bd-v);border-radius:var(--r3);padding:13px 16px;margin-bottom:16px;display:flex;align-items:flex-start;gap:12px}
.ab-icon{font-size:18px;flex-shrink:0;margin-top:1px}.ab-body{flex:1}
.ab-title{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--violet);margin-bottom:5px}
.ab-text{font-size:13px;color:var(--t2);line-height:1.75}
.ab-close{background:none;border:none;color:var(--t3);font-size:18px;cursor:pointer;padding:0 4px;line-height:1;flex-shrink:0}
.ab-close:hover{color:var(--t1)}
.exam-timer{display:flex;align-items:center;gap:14px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:12px 18px;margin-bottom:14px}
.et-circle{position:relative;width:64px;height:64px;flex-shrink:0}
#timer-canvas{position:absolute;top:0;left:0}
.et-num{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:var(--mono);font-size:18px;font-weight:800;color:var(--t1);line-height:1}
.et-info{flex:1}.et-label{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;color:var(--t3);text-transform:uppercase;margin-bottom:4px}
.et-q{font-size:13px;font-weight:700;color:var(--t1)}
.et-streak{font-family:var(--mono);font-size:11px;color:var(--green);font-weight:600;padding:4px 10px;background:var(--dim-g);border:1px solid var(--bd-g);border-radius:var(--r1)}
.exam-timer.warn .et-num{color:var(--amber)}
.exam-timer.urgent .et-num{color:var(--red);animation:pulse-red .5s infinite alternate}
@keyframes pulse-red{from{opacity:1}to{opacity:.5}}
.quiz-intro{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:12px 17px;font-size:12.5px;color:var(--t2);margin-bottom:18px;font-family:var(--mono);line-height:1.7}
.quiz-intro strong{color:var(--blue)}
.quiz-rerun{display:flex;gap:8px;align-items:center;margin-bottom:14px;flex-wrap:wrap}
.quiz-rerun-btn{padding:7px 16px;border:1px solid var(--bd-v);background:var(--dim-v);color:var(--violet);border-radius:var(--r2);font-family:var(--mono);font-size:11.5px;font-weight:700;cursor:pointer;transition:all .15s}
.quiz-rerun-btn:hover{background:var(--violet);color:#060910}
.quiz-rerun-info{font-family:var(--mono);font-size:10.5px;color:var(--t3)}
.qb{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden;margin-bottom:9px}
.qb-h{padding:12px 17px;border-bottom:1px solid var(--bd)}
.qb-meta{font-family:var(--mono);font-size:9px;color:var(--t3);font-weight:700;letter-spacing:.5px;margin-bottom:5px;text-transform:uppercase}
.qb-text{font-size:14px;font-weight:700;color:var(--t1);line-height:1.5}
.qb-text code{font-family:var(--mono);font-size:12.5px;background:var(--inp);padding:2px 7px;border-radius:var(--r1);color:var(--cyan)}
.qb-opts{padding:10px 17px;display:flex;flex-direction:column;gap:6px}
.qm{font-family:var(--mono);font-size:9px;color:var(--t3);font-weight:700;letter-spacing:.5px;padding:10px 17px 0;text-transform:uppercase}
.qq{font-size:14px;font-weight:700;color:var(--t1);line-height:1.5;padding:8px 17px 10px;border-bottom:1px solid var(--bd)}
.qo{display:flex;align-items:center;gap:10px;padding:9px 13px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);font-size:13px;color:var(--t2);cursor:pointer;transition:all .13s;user-select:none;font-family:var(--mono)}
.qo:hover:not(.dis){background:var(--hov);border-color:var(--bd-b);color:var(--t1)}
.qo.correct{background:var(--dim-g);border-color:var(--bd-g);color:var(--green)}
.qo.wrong{background:var(--dim-r);border-color:var(--bd-r);color:var(--red)}
.qo.dis{cursor:default;pointer-events:none}
.ql{width:21px;height:21px;border-radius:var(--r1);border:1px solid var(--bdm);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;color:var(--t3)}
.qe{display:none;padding:10px 17px;font-size:12px;line-height:1.78;border-top:1px solid var(--bd);font-family:var(--mono)}
.qe.show{display:block}
.qe-ok{background:var(--dim-g);border:1px solid var(--bd-g);color:var(--green);padding:9px 12px;border-radius:var(--r2)}
.qe-no{background:var(--dim-r);border:1px solid var(--bd-r);color:var(--red);padding:9px 12px;border-radius:var(--r2)}
.mini-proof{background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);padding:10px 13px;margin-top:9px;font-family:var(--mono);font-size:12px;line-height:1.9;color:var(--t2)}
.mini-proof-lbl{font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--blue);margin-bottom:6px}
.mini-proof .step{display:flex;gap:8px;align-items:flex-start;padding:3px 0}
.mini-proof .sn{width:16px;height:16px;border-radius:50%;background:var(--dim-b);border:1px solid var(--bd-b);color:var(--blue);font-size:8px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}
.mini-proof .st{color:var(--t2)}.mini-proof .st strong{color:var(--blue)}
.score-box{display:none;text-align:center;padding:36px 20px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);margin-top:14px}
.score-box.show{display:block}
.score-num{font-size:54px;font-weight:800;background:linear-gradient(135deg,var(--blue),var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:-3px;font-family:var(--mono)}
.score-lbl{font-size:13px;color:var(--t2);margin-top:9px;line-height:1.6}

/* ── FITB ── */
.fitb{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden;margin-bottom:9px}
.fitb-h{padding:10px 17px;border-bottom:1px solid var(--bd)}
.fitb-meta{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;text-transform:uppercase;margin-bottom:5px;font-weight:700}
.fitb-sent{font-size:13.5px;font-weight:700;color:var(--t1);font-family:var(--mono)}
.fitb-row{padding:10px 17px;display:flex;align-items:center;gap:9px;flex-wrap:wrap}
.fitb-in{font-family:var(--mono);font-size:13px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);color:var(--t1);padding:7px 12px;outline:none;width:200px;transition:border-color .15s}
.fitb-in:focus{border-color:var(--blue)}
.fitb-in.ok{border-color:var(--green);background:var(--dim-g);color:var(--green)}
.fitb-in.fail{border-color:var(--red);background:var(--dim-r);color:var(--red)}
.fitb-btn{padding:7px 15px;background:linear-gradient(135deg,var(--blue),var(--cyan));color:#060910;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:11.5px;font-weight:700;cursor:pointer;transition:all .15s;white-space:nowrap}
.fitb-btn:hover{opacity:.88}
.fitb-btn:disabled{opacity:.35;cursor:default}
.fitb-fb{display:none;padding:9px 17px;font-family:var(--mono);font-size:12px;line-height:1.78;border-top:1px solid var(--bd)}
.fitb-fb.show{display:block}
.fitb-fb.ok{color:var(--green);background:var(--dim-g)}
.fitb-fb.fail{color:var(--red);background:var(--dim-r)}

/* ── CTA ── */
.cta{background:var(--card);border:1px solid var(--bd-b);border-radius:20px;padding:22px 26px;margin:24px 0;display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;position:relative;overflow:hidden}
.cta::before{content:'';position:absolute;inset:0;background:var(--glow-b);pointer-events:none}
.cta-e{font-family:var(--mono);font-size:9px;color:var(--blue);letter-spacing:1.8px;text-transform:uppercase;margin-bottom:5px}
.cta-t{font-size:16px;font-weight:800;color:var(--t1);margin-bottom:3px;letter-spacing:-.4px}
.cta-s{font-size:12px;color:var(--t2)}
.cta-btn{padding:10px 20px;background:linear-gradient(135deg,var(--blue),var(--cyan));color:#060910;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;font-weight:700;cursor:pointer;flex-shrink:0;box-shadow:0 4px 16px rgba(77,158,255,0.22);display:inline-flex;text-decoration:none}
.cta-btn:hover{opacity:.88;transform:translateY(-1px)}

/* ── NAV ── */
.nav-row{display:flex;justify-content:space-between;align-items:center;margin-top:30px;padding-top:18px;border-top:1px solid var(--bd)}
.nb{display:inline-flex;align-items:center;gap:6px;font-family:var(--mono);font-size:11.5px;color:var(--t2);cursor:pointer;padding:8px 13px;border:1px solid var(--bdm);border-radius:var(--r2);background:transparent;transition:all .15s;font-weight:500}
.nb:hover{color:var(--t1);background:var(--card);border-color:var(--bdl)}
.nb.primary{background:linear-gradient(135deg,var(--blue),var(--cyan));color:#060910;border-color:transparent;font-weight:700;box-shadow:0 3px 14px rgba(77,158,255,0.22)}
.nb.primary:hover{opacity:.88;transform:translateY(-1px)}
.nb.off{opacity:.22;pointer-events:none}

/* ── POLYNOMIAL DEGREE VISUALIZER ── */
.poly-viz{background:var(--card);border:1px solid var(--bd-b);border-radius:var(--r4);overflow:hidden;margin:16px 0}
.pv-head{padding:11px 17px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
.pv-title{font-family:var(--mono);font-size:10.5px;color:var(--blue);font-weight:700;letter-spacing:1px;text-transform:uppercase}
.pv-body{padding:16px 17px}
.pv-poly{font-family:var(--mono);font-size:18px;font-weight:700;color:var(--cyan);text-align:center;padding:14px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3);margin-bottom:14px;letter-spacing:.5px;min-height:52px;transition:all .2s}
.pv-controls{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-bottom:12px}
.pv-btn{padding:6px 14px;border:1px solid var(--bdm);background:var(--inp);color:var(--t2);border-radius:var(--r2);font-family:var(--mono);font-size:11.5px;font-weight:600;cursor:pointer;transition:all .14s}
.pv-btn:hover{border-color:var(--bd-b);color:var(--blue)}
.pv-btn.on{background:var(--dim-b);border-color:var(--bd-b);color:var(--blue)}
.pv-info{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px}
.pv-stat{background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);padding:10px 12px;text-align:center}
.pv-stat-lbl{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:1px;text-transform:uppercase;margin-bottom:4px}
.pv-stat-val{font-family:var(--mono);font-size:15px;font-weight:700;color:var(--blue)}

/* ── RATIONAL DOMAIN BUILDER ── */
.rdb{background:var(--card);border:1px solid var(--bd-c);border-radius:var(--r4);overflow:hidden;margin:16px 0}
.rdb-head{padding:11px 17px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
.rdb-title{font-family:var(--mono);font-size:10.5px;color:var(--cyan);font-weight:700;letter-spacing:1px;text-transform:uppercase}
.rdb-body{padding:16px 17px}
.rdb-expr{font-family:var(--mono);font-size:16px;font-weight:700;color:var(--t1);text-align:center;padding:14px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3);margin-bottom:14px}
.rdb-steps{display:flex;flex-direction:column;gap:7px;margin-bottom:12px}
.rdb-step{display:flex;gap:10px;align-items:flex-start;padding:8px 10px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2)}
.rdb-sn{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--cyan);flex-shrink:0;margin-top:1px}
.rdb-st{font-family:var(--mono);font-size:12.5px;color:var(--t2);line-height:1.7}
.rdb-st strong{color:var(--cyan)}
.rdb-domain{background:var(--dim-g);border:1px solid var(--bd-g);border-radius:var(--r2);padding:10px 14px;font-family:var(--mono);font-size:13px;color:var(--green);font-weight:600;text-align:center}
.rdb-btns{display:flex;gap:6px;flex-wrap:wrap;justify-content:center;margin-bottom:12px}
.rdb-btn{padding:6px 14px;border:1px solid var(--bdm);background:var(--inp);color:var(--t2);border-radius:var(--r2);font-family:var(--mono);font-size:11px;font-weight:600;cursor:pointer;transition:all .14s}
.rdb-btn:hover{border-color:var(--bd-c);color:var(--cyan)}
.rdb-btn.on{background:var(--dim-c);border-color:var(--bd-c);color:var(--cyan)}

/* ── RESPONSIVE ── */
@media(max-width:900px){.content-wrap{padding:26px 22px 80px}}
@media(max-width:720px){
  .sidebar{display:none;position:fixed;z-index:160;height:100vh;transform:translateX(-100%);transition:transform .25s}
  .sidebar.mobile-open{display:flex;transform:translateX(0)}
  .sb-hamburger{display:flex}
  .content-wrap{padding:18px 14px 80px}
  .hero{padding:20px 18px}.hero-title{font-size:22px}
  .cmp{grid-template-columns:1fr}.sg{grid-template-columns:1fr 1fr}
  .cr{grid-template-columns:1fr}.ck{border-right:none;border-bottom:1px solid var(--bd)}
  .cta{flex-direction:column}.tabs{width:100%}.tab{flex:1;text-align:center;font-size:11px;padding:7px 5px}
  .exam-mode-opts{grid-template-columns:1fr}
  .exam-mode-opt{border-right:none;border-bottom:1px solid var(--bd)}
  .exam-mode-opt:last-child{border-bottom:none}
  .cn-grid{grid-template-columns:1fr}
  .pv-info{grid-template-columns:1fr 1fr}
}
@media(max-width:480px){.sg{grid-template-columns:1fr}.ex{grid-template-columns:1fr}.ex-arr{display:none}}

/* ── CONTEXTUAL FROM-BANNER ── */
.ctx-banner{display:none;position:fixed;bottom:20px;left:50%;transform:translateX(-50%);
  background:var(--ele);border:1px solid var(--bd-c);border-radius:var(--r3);
  padding:10px 18px 10px 14px;font-family:var(--mono);font-size:11px;color:var(--cyan);
  z-index:200;box-shadow:0 4px 20px rgba(0,0,0,0.4);display:flex;align-items:center;gap:10px;
  animation:ctxSlide .3s ease}
@keyframes ctxSlide{from{opacity:0;transform:translateX(-50%) translateY(10px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
.ctx-banner-close{cursor:pointer;color:var(--t3);font-size:14px;line-height:1;margin-left:4px}
.ctx-banner-close:hover{color:var(--t1)}

/* ── RAZLOMCI (frac) ── */
.frac{display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 2px;line-height:1.1}
.frac .num{padding:0 3px 1px;border-bottom:1.5px solid currentColor;text-align:center;min-width:100%}
.frac .den{padding:1px 3px 0;text-align:center;min-width:100%}
.frac.sm{font-size:.85em}

/* ══════════════════════════════════════════════
   RESPONSIVE — TABLET (max 768px)
   ══════════════════════════════════════════════ */
@media(max-width:768px){
  .qo{font-size:12.5px;padding:8px 11px;gap:8px}
  .qb-h{padding:10px 14px}.qb-meta{font-size:8px}.qq{font-size:13px}.qe{font-size:12px;padding:9px 13px}
  .icp-opts{flex-direction:column}.icp-opt{width:100%;text-align:left;font-size:12px}
  .icp-head{padding:8px 12px}.icp-title{font-size:9px}
  .nav-row{flex-direction:column;gap:8px;align-items:stretch}.nb{text-align:center;justify-content:center}
  .ncvvo-real-meta{flex-wrap:wrap;gap:4px;font-size:8px}.ncvvo-real-q{font-size:12px}
  .ncvvo-real-stat{font-size:11px}.ncvvo-real-show{font-size:11px;padding:6px 10px}
  .ncvvo-live-stat{font-size:8px;padding:2px 5px}
  .score-box{padding:24px 16px}.score-num{font-size:36px}
  .exam-timer{padding:10px 14px;gap:10px}.et-q{font-size:10px}
  .drill-q{font-size:13px;padding:14px}.drill-opt{padding:9px 14px;font-size:12px}
  .combo-head{padding:10px 14px}.combo-body{padding:10px 14px}.combo-task{font-size:12px}
  .combo-step{gap:8px}.combo-txt{font-size:12px}.combo-ans{font-size:11.5px}
  .sr-head{padding:12px 14px}.sr-task{font-size:12px}
  .sr-step-in{padding:10px 12px;gap:8px}.sr-body{font-size:12.5px}
  .box-int-txt{font-size:13px}.box-for{font-size:13px}.box-men-txt{font-size:12.5px}
  .box-bug{padding:14px}.bug-head{font-size:10px}.bug-opt{font-size:12px;padding:8px 11px}
  .cp-item{font-size:12px;padding:7px 10px}.cp-footer{padding:8px 12px;font-size:11px}
  .matura-block{padding:14px}.mi{font-size:12px}
  .fitb{padding:0}.fitb-h{padding:8px 12px}.fitb-row{padding:8px 12px;gap:7px}
  .fitb-in{font-size:12px;padding:7px 10px}.fitb-btn{padding:7px 12px;font-size:11px}
  .fitb-fb{padding:6px 12px;font-size:11px}
  .hero-eyebrow{font-size:9px}.hero-sub{font-size:13.5px}
  .hchip{font-size:9px;padding:3px 9px}
  .cr{gap:0}.ck{font-size:10px;padding:6px 10px;min-width:90px}.cv{font-size:12px;padding:6px 10px}
  .sc-ico{font-size:16px;width:36px;height:36px}.sc-name{font-size:12px}.sc-desc{font-size:11.5px}
  .graph-controls{padding:8px 10px;gap:7px}.graph-ctrl-lbl{font-size:9px}
  .graph-ctrl-val{font-size:10px;min-width:28px}.graph-canvas{height:180px}
  .graph-info{font-size:9.5px;padding:6px 10px}
  .cta{padding:16px}.cta-e{font-size:9px}.cta-t{font-size:14px}.cta-s{font-size:12px}
  .cta-btn{padding:10px 18px;font-size:12px}
}
/* ══════════════════════════════════════════════
   RESPONSIVE — MOBILE (max 480px)
   ══════════════════════════════════════════════ */
@media(max-width:480px){
  .tab{font-size:10.5px;padding:6px 4px}
  .qo{font-size:12px;padding:7px 10px}.qq{font-size:12.5px;line-height:1.5}
  .sb-name{font-size:13px}.sb-item{font-size:11px;padding:5px 12px}
  .sb-lbl{font-size:8px;padding:12px 12px 4px}
  .hero-title{font-size:20px;letter-spacing:-1px}.hero-sub{font-size:12.5px}
  .tags{gap:5px}.pill{font-size:9px;padding:3px 9px}
  .b20-item{font-size:12px;gap:8px;padding:6px 0}.b20-dot{width:4px;height:4px;flex-shrink:0}
  .icp-done{font-size:12px}.icp-retry{font-size:11px;padding:5px 12px}.icp-score{font-size:9px}
  .em-icon{font-size:18px}.em-name{font-size:12px}.em-desc{font-size:10px}
  .sr-try-row{flex-direction:column;gap:6px}.sr-try-in{width:100%}.sr-try-btn{width:100%;justify-content:center}
  .adaptive-banner{padding:10px 12px}.ab-title{font-size:11px}.ab-text{font-size:11px}
  .score-num{font-size:32px}.score-lbl{font-size:13px}
  .graph-canvas{height:160px}
  .cn-head{gap:8px}.cn-icon{font-size:18px}.cn-title{font-size:13px}
  .cn-item{padding:10px 12px}.cn-item-title{font-size:12px}.cn-item-desc{font-size:11px}
  .ncvvo-real-hd{padding:7px 12px;font-size:8px}.ncvvo-real-body{padding:10px}
  .ncvvo-real-item{padding:10px 11px;margin-bottom:6px}
  .bc{font-size:9px;gap:5px}
  .cp-head{padding:10px 12px}.cp-icon{font-size:18px}.cp-title{font-size:13px}
  .cp-sub{font-size:10px}.cp-check{width:18px;height:18px}
  .mini-proof{padding:8px 10px}.mini-proof-lbl{font-size:9px}
  .step{gap:6px}.sn{font-size:9px;padding:1px 5px}.st{font-size:11px}
}

/* ── LAW TESTER (P02) ── */
.law-tester{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:18px 0}
.lt-head{padding:10px 17px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
.lt-title{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--blue);text-transform:uppercase}
.lt-btns{display:flex;gap:5px;flex-wrap:wrap}
.ltbtn{font-family:var(--mono);font-size:11px;font-weight:700;padding:4px 11px;border-radius:var(--r2);border:1px solid var(--bdm);background:var(--inp);color:var(--t2);cursor:pointer;transition:all .15s}
.ltbtn:hover{border-color:var(--blue);color:var(--blue)}
.ltbtn.on{background:var(--dim-b);border-color:var(--bd-b);color:var(--blue)}
.lt-body{padding:16px 17px;display:flex;flex-direction:column;gap:10px}
.lt-controls{display:flex;gap:10px;flex-wrap:wrap;align-items:center}
.lt-label{font-family:var(--mono);font-size:11px;color:var(--t3);min-width:20px}
.lt-input{font-family:var(--mono);font-size:14px;font-weight:700;padding:6px 10px;border:1px solid var(--bdm);border-radius:var(--r2);background:var(--inp);color:var(--t1);width:70px;text-align:center}
.lt-expr{font-family:var(--mono);font-size:13px;color:var(--t2);padding:8px 12px;background:var(--inp);border:1px solid var(--bd);border-radius:var(--r2);line-height:1.6}
.lt-result{font-family:var(--mono);font-size:12px;color:var(--cyan);padding:6px 12px;min-height:24px}`;
const _bodyHTML = `<div class="shell">

<div class="sb-hamburger" id="hamburger" onclick="toggleSidebar()">
  <span></span><span></span><span></span>
</div>
<div class="sb-overlay" id="overlay" onclick="closeSidebar()"></div>

<nav class="sidebar" id="sidebar">
  <div class="sb-brand"><div class="sb-logo"><svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="#060910" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div><div class="sb-name">Maturiraj.hr</div><div class="sb-sub">MAT A razina</div></div></div>
  <div class="sb-prog-wrap"><div class="sb-prog-label"><span>napredak</span><span id="prog-pct">0%</span></div><div class="sb-prog-track"><div class="sb-prog-bar" id="prog-bar" style="width:0%"></div></div></div>
  <button class="sb-item" onclick="backToList()" style="padding:7px 14px;border:none;border-bottom:1px solid var(--bd);font-size:11px;color:var(--t3);font-family:var(--mono);letter-spacing:.3px;background:transparent;cursor:pointer;width:100%;text-align:left">← Sva poglavlja</button>
  <div class="sb-lbl">// Uvod</div>
  <button class="sb-item" onclick="navigateChapter('p00a')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>00A · Kako koristiti skripte</button>
  <button class="sb-item" onclick="navigateChapter('p00b')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>00B · Što te čeka na Maturi</button>
  <div class="sb-lbl">// Temelji</div>
  <button class="sb-item" onclick="navigateChapter('p01')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>01 · Skupovi, Brojevi, |x|</button>
  <button class="sb-item active" style="background:transparent;border:none;cursor:default;text-align:left;width:100%"><span class="sb-dot"></span>02 · Potencije i korijeni</button>
  <button class="sb-item" onclick="navigateChapter('p03')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>03 · Polinomi i izrazi</button>
  <button class="sb-item" onclick="navigateChapter('p04')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>04 · Jednadžbe i nejednadžbe</button>
  <button class="sb-item" onclick="navigateChapter('p05')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>05 · Kompleksni brojevi</button>
  <div class="sb-lbl">// Funkcije</div>
  <button class="sb-item" onclick="navigateChapter('p06')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>06 · Funkcija — temelj mature</button>
  <button class="sb-item" onclick="navigateChapter('p07')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>07 · Linearna i kvadratna f.</button>
  <button class="sb-item" onclick="navigateChapter('p08')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>08 · Eksponencijalna i log.</button>
  <button class="sb-item" onclick="navigateChapter('p09')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>09 · Trigonometrija</button>
  <div class="sb-lbl">// Geometrija i Analiza</div>
  <button class="sb-item" onclick="navigateChapter('p10')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>10 · Analitička geometrija</button>
  <button class="sb-item" onclick="navigateChapter('p11')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>11 · Geometrija prostora</button>
  <button class="sb-item" onclick="navigateChapter('p12')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>12 · Vektori</button>
  <button class="sb-item" onclick="navigateChapter('p13')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>13 · Planimetrija</button>
  <button class="sb-item" onclick="navigateChapter('p14')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>14 · Nizovi</button>
  <button class="sb-item" onclick="navigateChapter('p15')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>15 · Kombinatorika</button>
  <div class="sb-lbl">// Kalkulus</div>
  <button class="sb-item" onclick="navigateChapter('p16')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>16 · Granice</button>
  <button class="sb-item" onclick="navigateChapter('p17')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>17 · Derivacije</button>
  <button class="sb-item" onclick="navigateChapter('p18')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>18 · Integrali</button>
  <button class="sb-item" onclick="navigateChapter('p19')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>19 · Složeni maturalni zadaci</button>
  <button class="sb-item" onclick="navigateChapter('p20')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>20 · Završna sistematizacija</button>
  <div class="sb-lbl">// Bonus</div>
  <button class="sb-item" onclick="navigateChapter('p21')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>21 · Vjerojatnost</button>
  <div class="sb-footer">uvod · kako koristiti<br>maturiraj.hr · A razina</div>
</nav>

<main class="main">
<div class="content-wrap">

<div class="bc">
  <span>← poglavlja</span><span class="bc-sep">/</span>
  <span>a-razina</span><span class="bc-sep">/</span>
  <span class="bc-cur">potencije-korijeni-algebarska-manipulacija</span>
</div>

<div class="tabs">
  <div class="tab on" onclick="sw(0)">⚡ 2 min</div>
  <div class="tab" onclick="sw(1)">📐 Uči</div>
  <div class="tab" onclick="sw(2)">🧠 Vježbaj</div>
</div>

<!-- ═══════════════════════════════════ -->
<!-- L0 — QUICK VIEW                     -->
<!-- ═══════════════════════════════════ -->
<div class="layer on" id="l0">
  <div class="hero">
    <div class="hero-orb"></div><div class="hero-orb2"></div>
    <div class="hero-eyebrow">poglavlje 02 od 21 · A razina · temelji</div>
    <h1 class="hero-title">Potencije, Korijeni i<br><span>Algebarska Manipulacija</span></h1>
    <p class="hero-sub">Algebarski alati koji se pojavljuju u svakom poglavlju — od funkcija do integrala</p>
    <div class="hero-meta">
      <span class="hchip b">4 koncepta</span>
      <span class="hchip a">⭐ Visoka maturalna frekvencija</span>
      <span class="hchip c">~30 min</span>
    </div>
    <div class="pt"><div class="pb" style="width:12%"></div></div>
  </div>

  <div class="tags">
    <span class="pill p-b">Pravila potencija</span>
    <span class="pill p-c">Negativni eksponenti</span>
    <span class="pill p-i">Racionalni eksponenti</span>
    <span class="pill p-a">Korijeni i racionalizacija</span>
    <span class="pill p-v">Algebarska manipulacija</span>
    <span class="pill p-r">Top zamke</span>
  </div>

  <div class="slbl">// zašto je ovo kritično za A razinu</div>
  <div class="box-int">
    <div class="box-int-lbl">HOOK — pročitaj ovo prvo</div>
    <div class="box-int-txt">
      Svaki zadatak s eksponencijalnom ili logaritamskom funkcijom, svaka derivacija, svaki integral — sve kreće od pravilnog rukovanja potencijama.<br><br>
      Na A razini više od 60% zadataka zahtijeva simplifikaciju algebarskih izraza. Ako automatski ne prepoznaješ aᵐ·aⁿ = aᵐ⁺ⁿ ili a^(<span class="frac"><span class="num">p</span><span class="den">q</span></span>) = ᵠ√aᵖ — svaki složeniji zadatak postaje blokirajući.<br><br>
      <strong>Ovo je algebarski alat koji mora biti refleks, ne razmišljanje.</strong>
    </div>
  </div>

  <div class="slbl">// pregled u 30 sekundi</div>
  <div class="sg">
    <div class="sc"><div class="sc-ico si-b">aⁿ</div><div class="sc-name">Pravila potencija</div><div class="sc-desc">6 zakona koje mora biti automatski: množenje, dijeljenje, potencija, distribucija...</div></div>
    <div class="sc"><div class="sc-ico si-c">a⁻ⁿ</div><div class="sc-name">Negativni eksponenti</div><div class="sc-desc">a⁻ⁿ = <span class="frac"><span class="num">1</span><span class="den">aⁿ</span></span>. Nikad negativan broj — samo recipročna vrijednost!</div></div>
    <div class="sc"><div class="sc-ico si-i">ᵠ√</div><div class="sc-name">Racionalni eksponenti</div><div class="sc-desc">a^(<span class="frac"><span class="num">p</span><span class="den">q</span></span>) = (ᵠ√a)ᵖ. Korijen PRVO — tada se lakše računa.</div></div>
    <div class="sc"><div class="sc-ico si-a">√</div><div class="sc-name">Korijeni i racionalizacija</div><div class="sc-desc">Zakoni korijena + uklanjanje korijena iz nazivnika pomoću konjugata.</div></div>
    <div class="sc"><div class="sc-ico si-g">(a±b)²</div><div class="sc-name">Algebarska manipulacija</div><div class="sc-desc">Binomni obrasci, razlika kvadrata, faktorizacija — temelj svake simplifikacije.</div></div>
    <div class="sc"><div class="sc-ico si-v">★</div><div class="sc-name">Top zamke</div><div class="sc-desc">√(a+b) ≠ √a+√b · (a+b)² ≠ a²+b² — najčešći propusti na maturi</div></div>
  </div>

  <div class="slbl">// ključni koncepti</div>
  <div class="con">
    <div class="cr"><div class="ck b">aᵐ · aⁿ = aᵐ⁺ⁿ</div><div class="cv">Množenje s istom bazom → zbrajaj eksponente. <code>2³·2⁴ = 2⁷ = 128</code></div></div>
    <div class="cr"><div class="ck b">aᵐ / aⁿ = aᵐ⁻ⁿ</div><div class="cv">Dijeljenje s istom bazom → oduzimaj eksponente. <code>5⁶/5² = 5⁴</code></div></div>
    <div class="cr"><div class="ck b">(aᵐ)ⁿ = aᵐⁿ</div><div class="cv">Potencija potencije → množi eksponente. <code>(3²)⁴ = 3⁸</code></div></div>
    <div class="cr"><div class="ck c">a⁻ⁿ = 1/aⁿ</div><div class="cv">Negativni eksponent = recipročna vrijednost. <code>2⁻³ = 1/8</code> — nikad negativan!</div></div>
    <div class="cr"><div class="ck i">a^(<span class="frac"><span class="num">p</span><span class="den">q</span></span>) = (ᵠ√a)ᵖ</div><div class="cv">Racionalni eksponent — korijen PRVO pa potencija. <code>8^(<span class="frac"><span class="num">2</span><span class="den">3</span></span>) = (³√8)² = 4</code></div></div>
    <div class="cr"><div class="ck a">Racionalizacija</div><div class="cv">Konjugat: <code>(a+√b)(a−√b) = a²−b</code>. Uklanja korijenj iz nazivnika.</div></div>
    <div class="cr"><div class="ck r">Zamka #1</div><div class="cv"><code>√(a+b) ≠ √a+√b</code> — ne možeš "rasporediti" korijen po zbrajanju!</div></div>
    <div class="cr"><div class="ck r">Zamka #2</div><div class="cv"><code>(a+b)² = a²+2ab+b²</code> — srednji član 2ab se uvijek zaboravlja!</div></div>
  </div>

  <div class="nav-row">
    <button onclick="navigateChapter('p01')" class="nb">← P01 · Skupovi</button>
    <span class="nb primary" onclick="sw(1)">Uči detaljno →</span>
  </div>
</div>

<!-- ═══════════════════════════════════ -->
<!-- L1 — LEARN                          -->
<!-- ═══════════════════════════════════ -->
<div class="layer" id="l1">

  <!-- ══ 01 PRAVILA POTENCIJA ══ -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">01 · PRAVILA POTENCIJA</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>

  <div class="box-int">
    <div class="box-int-lbl">INTUITIVNO — zašto postoje pravila potencija</div>
    <div class="box-int-txt">
      Potencija je <em>skraćeni zapis ponavljajućeg množenja</em>. aⁿ znači "pomnoži a sa sobom n puta".<br><br>
      Iz te definicije direktno slijede sva pravila — ne treba pamtiti, treba razumjeti. aᵐ · aⁿ = aᵐ⁺ⁿ jer mnoziš a sa sobom (m+n) puta ukupno.<br><br>
      <strong>Ključno:</strong> pravila vrijede samo kad je <em>baza ista</em>. 2³ · 3⁴ ≠ 6⁷ — različite baze ne možeš kombinirati!
    </div>
  </div>

  <div class="box-for">
    <span class="box-for-lbl">6 ZAKONA POTENCIJA — obavezno znati napamet</span>
    <span class="val">aᵐ · aⁿ = aᵐ⁺ⁿ</span> <span class="cmt">— množenje: zbrajaj eksponente</span><br>
    <span class="val">aᵐ / aⁿ = aᵐ⁻ⁿ</span> <span class="cmt">— dijeljenje: oduzimaj eksponente</span><br>
    <span class="val">(aᵐ)ⁿ = aᵐⁿ</span> <span class="cmt">— potencija potencije: množi eksponente</span><br>
    <span class="val">(ab)ⁿ = aⁿbⁿ</span> <span class="cmt">— distribucija po množenju</span><br>
    <span class="val">(<span class="frac"><span class="num">a</span><span class="den">b</span></span>)ⁿ = aⁿ/bⁿ</span> <span class="cmt">— distribucija po dijeljenju</span><br>
    <span class="val">a⁰ = 1</span> <span class="cmt">— nulti eksponent (a ≠ 0)</span>
  </div>

  <!-- LAW TESTER -->
  <div class="law-tester">
    <div class="lt-head">
      <span class="lt-title">// Law Tester — provjeri zakon s brojevima</span>
      <div class="lt-btns">
        <button class="ltbtn on" onclick="setLaw('mult',this)">aᵐ·aⁿ</button>
        <button class="ltbtn" onclick="setLaw('div',this)">aᵐ/aⁿ</button>
        <button class="ltbtn" onclick="setLaw('pow',this)">(aᵐ)ⁿ</button>
        <button class="ltbtn" onclick="setLaw('neg',this)">a⁻ⁿ</button>
        <button class="ltbtn" onclick="setLaw('zero',this)">a⁰</button>
        <button class="ltbtn" onclick="setLaw('rat',this)">aᵖ/ᵠ</button>
      </div>
    </div>
    <div class="lt-body">
      <div class="lt-expr" id="lt-expr">2³ · 2⁴ = 2⁷ = 128</div>
      <div class="lt-controls">
        <span class="lt-label">a =</span>
        <input class="lt-input" id="lt-a" type="number" value="2" oninput="debounceLaw()" min="-20" max="20">
        <span class="lt-label" id="lt-lbl2">m =</span>
        <input class="lt-input" id="lt-m" type="number" value="3" oninput="debounceLaw()" min="-10" max="10">
        <span class="lt-label" id="lt-lbl3">n =</span>
        <input class="lt-input" id="lt-n" type="number" value="4" oninput="debounceLaw()" min="-10" max="10">
      </div>
      <div class="lt-result" id="lt-result"></div>
    </div>
  </div>

  <div class="box-men">
    <div class="box-men-lbl">MENTALNI MODEL — tri različita zakona množenja</div>
    <div class="box-men-txt">
      <strong>aᵐ · aⁿ = aᵐ⁺ⁿ</strong> → ista baza, zbrajaj eksponente<br>
      <strong>(aᵐ)ⁿ = aᵐⁿ</strong> → potencija potencije, množi eksponente<br>
      <strong>(ab)ⁿ = aⁿbⁿ</strong> → različite baze, distribuiraj<br>
      Studenti miješaju ova tri! Pitaj se: "Je li baza ista ili različita? Je li izvana ili iznutra?"
    </div>
  </div>

  <!-- BUG 1 -->
  <div class="box-bug">
    <div class="bug-head">🐛 prepoznaj grešku — potencije</div>
    <div class="bug-body">
      <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik računa:</p>
      <div class="bug-task">2³ · 2⁴ = <span class="wrong">2¹²</span></div>
      <div class="bug-opts">
        <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">A) Točno, 3·4=12</div>
        <div class="bug-opt" onclick="bug(this,'b1',true,'b1e')">B) Greška: aᵐ·aⁿ = aᵐ⁺ⁿ, dakle 2³·2⁴ = 2⁷ = 128</div>
        <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">C) Greška: treba biti 4⁷</div>
        <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">D) Greška: ne može se računati, različite baze</div>
      </div>
      <div class="bug-expl" id="b1e"></div>
    </div>
  </div>

  <div class="box-20">
    <div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — potencije</div>
    <ul class="b20-list">
      <li class="b20-item"><div class="b20-dot"></div>Ista baza + množenje → ZBRAJAJ eksponente (aᵐ·aⁿ = aᵐ⁺ⁿ)</li>
      <li class="b20-item"><div class="b20-dot"></div>Potencija potencije → MNOŽI eksponente ((aᵐ)ⁿ = aᵐⁿ)</li>
      <li class="b20-item"><div class="b20-dot"></div>a⁰ = 1 za svaki a ≠ 0. 0⁰ je nedefinirano!</li>
      <li class="b20-item"><div class="b20-dot"></div>Različite baze se NE mogu kombinirati: 2³·3⁴ ≠ 6⁷</li>
    </ul>
  </div>

  <!-- ICP 1 -->
  <div class="inline-cp" id="icp1">
    <div class="icp-head">
      <span class="icp-title">Provjeri razumijevanje — potencije</span>
      <span class="icp-score" id="icp1-sc">0 / 3</span>
    </div>
    <div class="icp-body">
      <div class="icp-q" id="icp1q1">
        <div class="icp-q-text">Koliko je 3² · 3⁵?</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">3¹⁰</div>
          <div class="icp-opt" onclick="icp('icp1','q1',this,true,'icp1q1fb')">3⁷</div>
          <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">9⁷</div>
          <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">3³</div>
        </div>
        <div class="icp-fb" id="icp1q1fb"></div>
      </div>
      <div class="icp-q" id="icp1q2">
        <div class="icp-q-text">Što je (5³)²?</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">5⁵</div>
          <div class="icp-opt" onclick="icp('icp1','q2',this,true,'icp1q2fb')">5⁶</div>
          <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">25⁶</div>
          <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">5⁹</div>
        </div>
        <div class="icp-fb" id="icp1q2fb"></div>
      </div>
      <div class="icp-q" id="icp1q3">
        <div class="icp-q-text">Koliko je 7⁰?</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">0</div>
          <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">7</div>
          <div class="icp-opt" onclick="icp('icp1','q3',this,true,'icp1q3fb')">1</div>
          <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">nedefinirano</div>
        </div>
        <div class="icp-fb" id="icp1q3fb"></div>
      </div>
      <div class="icp-done" id="icp1-done">✓ Odlično! Nastavi na negativne eksponente →</div>
      <button class="icp-retry" id="icp1-retry" onclick="retryIcp('icp1')">↺ Pokušaj ponovo</button>
    </div>
  </div>

  <!-- ══ 02 NEGATIVNI I RACIONALNI EKSPONENTI ══ -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">02 · NEGATIVNI I RACIONALNI EKSPONENTI</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>

  <div class="box-int">
    <div class="box-int-lbl">INTUITIVNO — negativni eksponent nije negativan broj</div>
    <div class="box-int-txt">
      a⁻ⁿ znači "idi u suprotnom smjeru na broju eksponenta". Ako aⁿ množi a sa sobom, a⁻ⁿ dijeli.<br><br>
      2³ = 8, 2² = 4, 2¹ = 2, 2⁰ = 1, 2⁻¹ = <span class="frac"><span class="num">1</span><span class="den">2</span></span>, 2⁻² = <span class="frac"><span class="num">1</span><span class="den">4</span></span>... <em>svaki put dijelimo s 2</em>.<br><br>
      <strong>Ključno:</strong> negativni eksponent nikad ne daje negativan broj! 2⁻³ = <span class="frac"><span class="num">1</span><span class="den">8</span></span>, ne −8.
    </div>
  </div>

  <div class="box-for">
    <span class="box-for-lbl">NEGATIVNI I RACIONALNI EKSPONENTI</span>
    <span class="val">a⁻ⁿ = 1/aⁿ</span> <span class="cmt">— negativni eksponent = recipročna vrijednost (a ≠ 0)</span><br>
    <span class="val">a^(<span class="frac"><span class="num">p</span><span class="den">q</span></span>) = ᵠ√(aᵖ) = (ᵠ√a)ᵖ</span> <span class="cmt">— racionalni eksponent = korijen + potencija</span><br>
    <span class="val">a^(<span class="frac"><span class="num">1</span><span class="den">n</span></span>) = ⁿ√a</span> <span class="cmt">— poseban slučaj: samo korijen</span><br>
    <span class="cmt">Strategija: korijen PRVO, pa potencija — manji brojevi, lakše računanje</span>
  </div>

  <!-- STEP REVEAL 1 -->
  <div class="sr" id="sr1">
    <div class="sr-head">
      <div class="sr-title">Racionalni eksponent — korak po korak</div>
      <div class="sr-task">Izračunaj 8^(<span class="frac"><span class="num">2</span><span class="den">3</span></span>)</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr1s1">
        <div class="sr-step-in">
          <div class="sr-num">1</div>
          <div class="sr-body">
            <div class="sr-stitle">Prepoznaj obrazac a^(<span class="frac"><span class="num">p</span><span class="den">q</span></span>)</div>
            <div class="sr-txt">8^(<span class="frac"><span class="num">2</span><span class="den">3</span></span>) → a=8, p=2, q=3<br>Koristimo: a^(<span class="frac"><span class="num">p</span><span class="den">q</span></span>) = <strong>(ᵠ√a)ᵖ</strong></div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr1s2">
        <div class="sr-step-in">
          <div class="sr-num">2</div>
          <div class="sr-body">
            <div class="sr-stitle">Korijen PRVO (lakše!)</div>
            <div class="sr-txt">³√8 = 2 (jer 2³ = 8)<br><em>Uvijek korijen prvo — smanjuje broj!</em></div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr1s3">
        <div class="sr-step-in">
          <div class="sr-num">3</div>
          <div class="sr-body">
            <div class="sr-stitle">Pa potencija</div>
            <div class="sr-txt">(³√8)² = 2² = <strong>4</strong>
              <div class="sr-tryit">
                <div class="sr-try-lbl">↳ Provjeri: što je 27^(<span class="frac"><span class="num">2</span><span class="den">3</span></span>)?</div>
                <div class="sr-try-row">
                  <input class="sr-try-in" id="try1" type="text" placeholder="rezultat..." autocomplete="off">
                  <button class="sr-try-btn" onclick="tryIt('try1','try1-fb','9','rat1')">Provjeri</button>
                </div>
                <div class="sr-try-fb" id="try1-fb"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr1s4">
        <div class="sr-step-in">
          <div class="sr-num">4</div>
          <div class="sr-body">
            <div class="sr-stitle">Rezultat</div>
            <div class="sr-txt">8^(<span class="frac"><span class="num">2</span><span class="den">3</span></span>) = <strong>4</strong><br><em>Usporedi: 8^(<span class="frac"><span class="num">2</span><span class="den">3</span></span>) = ³√(8²) = ³√64 = 4 — isti rezultat, ali teže računanje!</em></div>
          </div>
        </div>
      </div>
    </div>
    <div class="sr-foot">
      <button class="sr-btn" onclick="nxtStep('sr1',4)">Sljedeći korak →</button>
      <button class="sr-btn rst" onclick="rstStep('sr1',4)">↺ Resetiraj</button>
      <span class="sr-prog" id="sr1p">0 / 4</span>
    </div>
  </div>

  <!-- BUG 2 -->
  <div class="box-bug">
    <div class="bug-head">🐛 prepoznaj grešku — negativni eksponent</div>
    <div class="bug-body">
      <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik računa:</p>
      <div class="bug-task">3⁻² = <span class="wrong">−9</span></div>
      <div class="bug-opts">
        <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">A) Točno, 3²=9 pa s minusom = −9</div>
        <div class="bug-opt" onclick="bug(this,'b2',true,'b2e')">B) Greška: a⁻ⁿ = <span class="frac"><span class="num">1</span><span class="den">aⁿ</span></span>, dakle 3⁻² = <span class="frac"><span class="num">1</span><span class="den">9</span></span> (uvijek pozitivno!)</div>
        <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">C) Greška: 3⁻² = −3² = −9 je točno jer je eksponent negativan</div>
        <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">D) Greška: 3⁻² nije definirano</div>
      </div>
      <div class="bug-expl" id="b2e"></div>
    </div>
  </div>

  <div class="box-20">
    <div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — negativni i racionalni</div>
    <ul class="b20-list">
      <li class="b20-item"><div class="b20-dot"></div>a⁻ⁿ = <span class="frac"><span class="num">1</span><span class="den">aⁿ</span></span> — NIKAD negativan broj, uvijek recipročna vrijednost</li>
      <li class="b20-item"><div class="b20-dot"></div>a^(<span class="frac"><span class="num">p</span><span class="den">q</span></span>) = (ᵠ√a)ᵖ — korijen PRVO, pa potencija</li>
      <li class="b20-item"><div class="b20-dot"></div>a^(<span class="frac"><span class="num">1</span><span class="den">2</span></span>) = √a · a^(<span class="frac"><span class="num">1</span><span class="den">3</span></span>) = ³√a — posebni slučajevi</li>
    </ul>
  </div>

  <!-- ICP 2 -->
  <div class="inline-cp" id="icp2">
    <div class="icp-head">
      <span class="icp-title">Provjeri razumijevanje — eksponenti</span>
      <span class="icp-score" id="icp2-sc">0 / 3</span>
    </div>
    <div class="icp-body">
      <div class="icp-q" id="icp2q1">
        <div class="icp-q-text">Što je 4⁻² ?</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">−16</div>
          <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">−8</div>
          <div class="icp-opt" onclick="icp('icp2','q1',this,true,'icp2q1fb')">1/16</div>
          <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">1/8</div>
        </div>
        <div class="icp-fb" id="icp2q1fb"></div>
      </div>
      <div class="icp-q" id="icp2q2">
        <div class="icp-q-text">Koliko je 16^(<span class="frac"><span class="num">3</span><span class="den">4</span></span>)?</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">4</div>
          <div class="icp-opt" onclick="icp('icp2','q2',this,true,'icp2q2fb')">8</div>
          <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">12</div>
          <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">64</div>
        </div>
        <div class="icp-fb" id="icp2q2fb"></div>
      </div>
      <div class="icp-q" id="icp2q3">
        <div class="icp-q-text">Što je (<span class="frac"><span class="num">1</span><span class="den">2</span></span>)⁻³?</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">−8</div>
          <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">1/8</div>
          <div class="icp-opt" onclick="icp('icp2','q3',this,true,'icp2q3fb')">8</div>
          <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">−1/8</div>
        </div>
        <div class="icp-fb" id="icp2q3fb"></div>
      </div>
      <div class="icp-done" id="icp2-done">✓ Sjajno! Nastavi na korijene →</div>
      <button class="icp-retry" id="icp2-retry" onclick="retryIcp('icp2')">↺ Pokušaj ponovo</button>
    </div>
  </div>

  <!-- ══ 03 KORIJENI I RACIONALIZACIJA ══ -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">03 · KORIJENI I RACIONALIZACIJA</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>

  <div class="box-int">
    <div class="box-int-lbl">INTUITIVNO — korijeni i racionalizacija</div>
    <div class="box-int-txt">
      Korijen je inverz potencije — ⁿ√a pita: "koji broj na n-tu potenciju daje a?"<br><br>
      Racionalizacija je tehnika kojom se <em>uklanja korijen iz nazivnika</em>. Razlomak s korijenom u nazivniku nije u standardnom obliku — NCVVO očekuje racionalizirani oblik.<br><br>
      <strong>Konjugat</strong> je ključ: (a+√b)(a−√b) = a²−b. Korijenj nestaje!
    </div>
  </div>

  <div class="box-for">
    <span class="box-for-lbl">ZAKONI KORIJENA</span>
    <span class="val">ⁿ√(ab) = ⁿ√a · ⁿ√b</span> <span class="cmt">— korijen produkta = produkt korijena</span><br>
    <span class="val">ⁿ√(<span class="frac"><span class="num">a</span><span class="den">b</span></span>) = ⁿ√a / ⁿ√b</span> <span class="cmt">— korijen kvocijenta = kvocijent korijena</span><br>
    <span class="val">ⁿ√(aᵐ) = a^(<span class="frac"><span class="num">m</span><span class="den">n</span></span>)</span> <span class="cmt">— veza s racionalnim eksponentima</span><br>
    <span class="val">√a · √a = a</span> <span class="cmt">— kvadratni korijen kvadrira se u bazu</span>
  </div>

  <!-- STEP REVEAL 2 -->
  <div class="sr" id="sr2">
    <div class="sr-head">
      <div class="sr-title">Racionalizacija — korak po korak</div>
      <div class="sr-task">Racionaliziraj: 3 / (√5 + √2)</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr2s1">
        <div class="sr-step-in">
          <div class="sr-num">1</div>
          <div class="sr-body">
            <div class="sr-stitle">Prepoznaj konjugat</div>
            <div class="sr-txt">Nazivnik: √5 + √2<br>Konjugat: <strong>√5 − √2</strong><br>(mijenjamo predznak između korijena)</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr2s2">
        <div class="sr-step-in">
          <div class="sr-num">2</div>
          <div class="sr-body">
            <div class="sr-stitle">Množimo brojevnik i nazivnik konjugatom</div>
            <div class="sr-txt">3/(√5+√2) · (√5−√2)/(√5−√2)</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr2s3">
        <div class="sr-step-in">
          <div class="sr-num">3</div>
          <div class="sr-body">
            <div class="sr-stitle">Primijeni razliku kvadrata u nazivniku</div>
            <div class="sr-txt">(√5+√2)(√5−√2) = (√5)²−(√2)² = 5−2 = <strong>3</strong>
              <div class="sr-tryit">
                <div class="sr-try-lbl">↳ Provjeri: zapiši konačni rezultat</div>
                <div class="sr-try-row">
                  <input class="sr-try-in" id="try2" type="text" placeholder="3(√5−√2)/?" autocomplete="off">
                  <button class="sr-try-btn" onclick="tryIt('try2','try2-fb','3(√5−√2)/3','konj1')">Provjeri</button>
                </div>
                <div class="sr-try-fb" id="try2-fb"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr2s4">
        <div class="sr-step-in">
          <div class="sr-num">4</div>
          <div class="sr-body">
            <div class="sr-stitle">Skrati</div>
            <div class="sr-txt">3(√5−√2)/3 = <strong>√5 − √2</strong><br><em>Korijen je uklonjen iz nazivnika ✓</em></div>
          </div>
        </div>
      </div>
    </div>
    <div class="sr-foot">
      <button class="sr-btn" onclick="nxtStep('sr2',4)">Sljedeći korak →</button>
      <button class="sr-btn rst" onclick="rstStep('sr2',4)">↺ Resetiraj</button>
      <span class="sr-prog" id="sr2p">0 / 4</span>
    </div>
  </div>

  <!-- BUG 3 -->
  <div class="box-bug">
    <div class="bug-head">🐛 prepoznaj grešku — korijeni</div>
    <div class="bug-body">
      <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik računa:</p>
      <div class="bug-task">√9 + √16 = <span class="wrong">√25 = 5</span></div>
      <div class="bug-opts">
        <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">A) Točno, √9+√16 = √25 = 5</div>
        <div class="bug-opt" onclick="bug(this,'b3',true,'b3e')">B) Greška: √(a+b) ≠ √a+√b — točno je √9+√16 = 3+4 = 7</div>
        <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">C) Greška: treba biti √(9+16) = √25 = 5</div>
        <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">D) Greška: korijeni se ne mogu zbrajati</div>
      </div>
      <div class="bug-expl" id="b3e"></div>
    </div>
  </div>

  <div class="box-20">
    <div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — korijeni</div>
    <ul class="b20-list">
      <li class="b20-item"><div class="b20-dot"></div>√(ab) = √a·√b ali √(a+b) ≠ √a+√b ← česta zamka!</li>
      <li class="b20-item"><div class="b20-dot"></div>Racionalizacija: množi konjugatom (a+√b)(a−√b) = a²−b</li>
      <li class="b20-item"><div class="b20-dot"></div>Korijen iz nazivnika mora biti uklonjen — NCVVO standard</li>
    </ul>
  </div>

  <!-- ICP 3 -->
  <div class="inline-cp" id="icp3">
    <div class="icp-head">
      <span class="icp-title">Provjeri razumijevanje — korijeni</span>
      <span class="icp-score" id="icp3-sc">0 / 3</span>
    </div>
    <div class="icp-body">
      <div class="icp-q" id="icp3q1">
        <div class="icp-q-text">Koliko je √75 / √3?</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">√25 = 5 je netočno jer se ne može dijeliti</div>
          <div class="icp-opt" onclick="icp('icp3','q1',this,true,'icp3q1fb')">5 (jer <span class="frac"><span class="num">√75</span><span class="den">√3</span></span> = √(<span class="frac"><span class="num">75</span><span class="den">3</span></span>) = √25 = 5)</div>
          <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">25</div>
          <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">√72</div>
        </div>
        <div class="icp-fb" id="icp3q1fb"></div>
      </div>
      <div class="icp-q" id="icp3q2">
        <div class="icp-q-text">Što je <span class="frac"><span class="num">1</span><span class="den">√2</span></span> u racionaliziranom obliku?</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">√<span class="frac"><span class="num">2</span><span class="den">2</span></span> je pogrešno</div>
          <div class="icp-opt" onclick="icp('icp3','q2',this,true,'icp3q2fb')">√2/2</div>
          <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">2/√2</div>
          <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">1/2</div>
        </div>
        <div class="icp-fb" id="icp3q2fb"></div>
      </div>
      <div class="icp-q" id="icp3q3">
        <div class="icp-q-text">√4 + √9 = ?</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">√13</div>
          <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">13 (= 4 + 9)</div>
          <div class="icp-opt" onclick="icp('icp3','q3',this,true,'icp3q3fb')">5 (= 2 + 3)</div>
          <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">6</div>
        </div>
        <div class="icp-fb" id="icp3q3fb"></div>
      </div>
      <div class="icp-done" id="icp3-done">✓ Izvrsno! Nastavi na algebarsku manipulaciju →</div>
      <button class="icp-retry" id="icp3-retry" onclick="retryIcp('icp3')">↺ Pokušaj ponovo</button>
    </div>
  </div>

  <!-- ══ 04 ALGEBARSKA MANIPULACIJA ══ -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">04 · ALGEBARSKA MANIPULACIJA</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>

  <div class="box-int">
    <div class="box-int-lbl">INTUITIVNO — algebarski obrasci kao alati</div>
    <div class="box-int-txt">
      Binomni obrasci su <em>prečaci koji uvijek vrijede</em>. Umjesto dugog množenja, prepoznaješ obrazac i direktno pišeš rezultat.<br><br>
      (a+b)² = a²+2ab+b² — srednji član 2ab je uvijek tu. Na maturi svaki treći propust je zaboravljeni srednji član.<br><br>
      <strong>Faktorizacija</strong> je inverz: od a²−9 direktno prepoznaješ (a+3)(a−3) — razlika kvadrata.
    </div>
  </div>

  <div class="box-for">
    <span class="box-for-lbl">ALGEBARSKI OBRASCI</span>
    <span class="val">(a+b)² = a² + 2ab + b²</span><br>
    <span class="val">(a−b)² = a² − 2ab + b²</span><br>
    <span class="val">(a+b)(a−b) = a² − b²</span> <span class="cmt">— razlika kvadrata</span><br>
    <span class="val">(a+b)³ = a³ + 3a²b + 3ab² + b³</span> <span class="cmt">— kubni binomni obrazac (A razina)</span>
  </div>

  <!-- STEP REVEAL 3 -->
  <div class="sr" id="sr3">
    <div class="sr-head">
      <div class="sr-title">Faktorizacija — korak po korak</div>
      <div class="sr-task">Faktoriziraj: 2x³ − 8x</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr3s1">
        <div class="sr-step-in">
          <div class="sr-num">1</div>
          <div class="sr-body">
            <div class="sr-stitle">Izvuci zajednički faktor</div>
            <div class="sr-txt">2x³ − 8x = <strong>2x</strong>(x² − 4)<br><em>Uvijek počni s izvlačenjem ZZF!</em></div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr3s2">
        <div class="sr-step-in">
          <div class="sr-num">2</div>
          <div class="sr-body">
            <div class="sr-stitle">Prepoznaj obrazac u zagradi</div>
            <div class="sr-txt">x² − 4 = x² − 2² → <strong>razlika kvadrata!</strong></div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr3s3">
        <div class="sr-step-in">
          <div class="sr-num">3</div>
          <div class="sr-body">
            <div class="sr-stitle">Primijeni a²−b² = (a+b)(a−b)</div>
            <div class="sr-txt">x² − 4 = (x+2)(x−2)
              <div class="sr-tryit">
                <div class="sr-try-lbl">↳ Zapiši konačnu faktorizaciju</div>
                <div class="sr-try-row">
                  <input class="sr-try-in" id="try3" type="text" placeholder="2x(...)(...)" autocomplete="off">
                  <button class="sr-try-btn" onclick="tryIt('try3','try3-fb','2x(x+2)(x-2)','fakt1')">Provjeri</button>
                </div>
                <div class="sr-try-fb" id="try3-fb"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr3s4">
        <div class="sr-step-in">
          <div class="sr-num">4</div>
          <div class="sr-body">
            <div class="sr-stitle">Konačna faktorizacija</div>
            <div class="sr-txt">2x³ − 8x = <strong>2x(x+2)(x−2)</strong></div>
          </div>
        </div>
      </div>
    </div>
    <div class="sr-foot">
      <button class="sr-btn" onclick="nxtStep('sr3',4)">Sljedeći korak →</button>
      <button class="sr-btn rst" onclick="rstStep('sr3',4)">↺ Resetiraj</button>
      <span class="sr-prog" id="sr3p">0 / 4</span>
    </div>
  </div>

  <!-- BUG 4 -->
  <div class="box-bug">
    <div class="bug-head">🐛 prepoznaj grešku — algebarski obrasci</div>
    <div class="bug-body">
      <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik razvija:</p>
      <div class="bug-task">(x + 3)² = <span class="wrong">x² + 9</span></div>
      <div class="bug-opts">
        <div class="bug-opt" onclick="bug(this,'b4',false,'b4e')">A) Točno, kvadriramo svaki zasebno</div>
        <div class="bug-opt" onclick="bug(this,'b4',true,'b4e')">B) Greška: nedostaje srednji član — (x+3)² = x² + 6x + 9</div>
        <div class="bug-opt" onclick="bug(this,'b4',false,'b4e')">C) Greška: treba biti (x+3)² = x² − 6x + 9</div>
        <div class="bug-opt" onclick="bug(this,'b4',false,'b4e')">D) Greška: (x+3)² se ne može razviti</div>
      </div>
      <div class="bug-expl" id="b4e"></div>
    </div>
  </div>

  <div class="box-20">
    <div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — algebarski obrasci</div>
    <ul class="b20-list">
      <li class="b20-item"><div class="b20-dot"></div>(a+b)² = a² + <strong>2ab</strong> + b² — srednji član 2ab se UVIJEK piše!</li>
      <li class="b20-item"><div class="b20-dot"></div>(a+b)(a−b) = a² − b² — razlika kvadrata, bez srednjeg člana</li>
      <li class="b20-item"><div class="b20-dot"></div>Faktorizacija: ZZF prvo, pa razlika kvadrata ili binomni obrazac</li>
    </ul>
  </div>

  <!-- ICP 4 -->
  <div class="inline-cp" id="icp4">
    <div class="icp-head">
      <span class="icp-title">Provjeri razumijevanje — algebarski obrasci</span>
      <span class="icp-score" id="icp4-sc">0 / 3</span>
    </div>
    <div class="icp-body">
      <div class="icp-q" id="icp4q1">
        <div class="icp-q-text">Razvij (2x − 3)²:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp4','q1',this,false,'icp4q1fb')">4x² + 9</div>
          <div class="icp-opt" onclick="icp('icp4','q1',this,false,'icp4q1fb')">4x² − 9</div>
          <div class="icp-opt" onclick="icp('icp4','q1',this,true,'icp4q1fb')">4x² − 12x + 9</div>
          <div class="icp-opt" onclick="icp('icp4','q1',this,false,'icp4q1fb')">4x² + 12x + 9</div>
        </div>
        <div class="icp-fb" id="icp4q1fb"></div>
      </div>
      <div class="icp-q" id="icp4q2">
        <div class="icp-q-text">Faktoriziraj: x² − 25</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp4','q2',this,false,'icp4q2fb')">(x − 5)²</div>
          <div class="icp-opt" onclick="icp('icp4','q2',this,true,'icp4q2fb')">(x + 5)(x − 5)</div>
          <div class="icp-opt" onclick="icp('icp4','q2',this,false,'icp4q2fb')">(x − 5)(x − 5)</div>
          <div class="icp-opt" onclick="icp('icp4','q2',this,false,'icp4q2fb')">(x + 25)(x − 1)</div>
        </div>
        <div class="icp-fb" id="icp4q2fb"></div>
      </div>
      <div class="icp-q" id="icp4q3">
        <div class="icp-q-text">Faktoriziraj potpuno: 3x² − 12</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp4','q3',this,false,'icp4q3fb')">3(x² − 4)</div>
          <div class="icp-opt" onclick="icp('icp4','q3',this,false,'icp4q3fb')">(3x + 6)(x − 2)</div>
          <div class="icp-opt" onclick="icp('icp4','q3',this,true,'icp4q3fb')">3(x + 2)(x − 2)</div>
          <div class="icp-opt" onclick="icp('icp4','q3',this,false,'icp4q3fb')">3(x − 4)(x + 1)</div>
        </div>
        <div class="icp-fb" id="icp4q3fb"></div>
      </div>
      <div class="icp-done" id="icp4-done">✓ Odlično! Nastavi na kombinirane A razina zadatke →</div>
      <button class="icp-retry" id="icp4-retry" onclick="retryIcp('icp4')">↺ Pokušaj ponovo</button>
    </div>
  </div>

  <!-- KOMBINIRANI PRIMJERI -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge" style="color:var(--violet);border-color:var(--bd-v);background:var(--dim-v)">A RAZINA · KOMBINIRANI ZADACI</h2><span class="sec-time">~20 min</span><div class="sec-line"></div></div>

  <div class="combo">
    <div class="combo-head"><div class="combo-badge">KOMBINIRANI · A1 — potencije + racionalizacija</div></div>
    <div class="combo-body">
      <div class="combo-task">Pojednostavni: (x^(<span class="frac"><span class="num">1</span><span class="den">2</span></span>) + 1) / (x^(<span class="frac"><span class="num">1</span><span class="den">2</span></span>) − 1)</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Uvjet definiranosti: x > 0 i x ≠ 1 (nazivnik ≠ 0)</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Racionalizacija — množimo brojnik i nazivnik konjugatom nazivnika: (√x + 1)/(√x + 1)</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Nazivnik: (√x−1)(√x+1) = x − 1 (korijen nestaje); brojnik: (√x+1)² = x + 2√x + 1</div></div>
        <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Rezultat: (x + 2√x + 1)/(x − 1), za x > 0, x ≠ 1</div></div>
      </div>
      <div class="combo-ans">Izraz je definiran za x > 0, x ≠ 1</div>
    </div>
  </div>

  <div class="combo" style="margin-top:10px">
    <div class="combo-head"><div class="combo-badge">KOMBINIRANI · A2 — negativni eksponent + faktorizacija</div></div>
    <div class="combo-body">
      <div class="combo-task">Pojednostavni: (x⁻¹ − y⁻¹) / (x⁻² − y⁻²)</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Zamijeni: x⁻¹ = <span class="frac"><span class="num">1</span><span class="den">x</span></span>, y⁻¹ = <span class="frac"><span class="num">1</span><span class="den">y</span></span>, x⁻² = <span class="frac"><span class="num">1</span><span class="den">x²</span></span>, y⁻² = 1/y²</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Brojevnik: <span class="frac"><span class="num">1</span><span class="den">x</span></span> − <span class="frac"><span class="num">1</span><span class="den">y</span></span> = (y−x)/xy</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Nazivnik: <span class="frac"><span class="num">1</span><span class="den">x²</span></span> − <span class="frac"><span class="num">1</span><span class="den">y²</span></span> = (y²−x²)/x²y² = (y+x)(y−x)/x²y²</div></div>
        <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Dijeli: [(y−x)/xy] ÷ [(y+x)(y−x)/x²y²] = xy/(x+y)</div></div>
      </div>
      <div class="combo-ans">(x⁻¹ − y⁻¹)/(x⁻² − y⁻²) = xy/(x+y)</div>
    </div>
  </div>

  <div class="combo" style="margin-top:10px">
    <div class="combo-head"><div class="combo-badge">KOMBINIRANI · A3 — racionalni eksponent + algebra</div></div>
    <div class="combo-body">
      <div class="combo-task">Dokaži: (a^(<span class="frac"><span class="num">1</span><span class="den">2</span></span>) + b^(<span class="frac"><span class="num">1</span><span class="den">2</span></span>))² − (a^(<span class="frac"><span class="num">1</span><span class="den">2</span></span>) − b^(<span class="frac"><span class="num">1</span><span class="den">2</span></span>))² = 4√(ab)</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Razvij 1. kvadrat: (√a + √b)² = a + 2√a·√b + b = a + 2√(ab) + b</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Razvij 2. kvadrat: (√a − √b)² = a − 2√(ab) + b</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Oduzmi: (a+2√(ab)+b) − (a−2√(ab)+b) = 4√(ab) ✓</div></div>
      </div>
      <div class="combo-ans">Identitet dokazan: razlika kvadrata binoma = 4√(ab)</div>
    </div>
  </div>

  <!-- CHECKPOINT -->
  <div class="checkpoint" id="cp">
    <div class="cp-head">
      <span class="cp-icon">✅</span>
      <div>
        <div class="cp-title">Checkpoint — jesi li spreman za dalje?</div>
        <div class="cp-sub">Potvrdi što znaš — klikni kad si siguran</div>
      </div>
    </div>
    <ul class="cp-list">
      <li class="cp-item" id="cp1"><div class="cp-check" onclick="toggleCP(1)"></div>Znam svih 6 zakona potencija i ne miješam aᵐ·aⁿ s (aᵐ)ⁿ</li>
      <li class="cp-item" id="cp2"><div class="cp-check" onclick="toggleCP(2)"></div>Negativni eksponent je uvijek pozitivan razlomak (a⁻ⁿ = <span class="frac"><span class="num">1</span><span class="den">aⁿ</span></span>)</li>
      <li class="cp-item" id="cp3"><div class="cp-check" onclick="toggleCP(3)"></div>Racionalni eksponent: korijen PRVO, pa potencija (a^(<span class="frac"><span class="num">p</span><span class="den">q</span></span>) = (ᵠ√a)ᵖ)</li>
      <li class="cp-item" id="cp4"><div class="cp-check" onclick="toggleCP(4)"></div>Racionalizacija s konjugatom — korijen izlazi iz nazivnika</li>
      <li class="cp-item" id="cp5"><div class="cp-check" onclick="toggleCP(5)"></div>Binomni obrasci i faktorizacija su mi automatski refleks</li>
    </ul>
    <div class="cp-footer">
      <span id="cp-txt">0 / 5 potvrđeno</span>
      <span class="cp-progress-txt" id="cp-ready" style="display:none">→ Spreman si za Poglavlje 03!</span>
    </div>
  </div>

  <!-- RAPID FIRE DRILL -->
  <div class="drill">
    <div class="drill-head">
      <span class="drill-title">// Brzi refleks — Točno ili Netočno?</span>
      <span class="drill-score" id="dr-sc">0 / 0</span>
    </div>
    <div class="drill-body">
      <p style="font-family:var(--mono);font-size:11px;color:var(--t3);text-align:center;margin-bottom:14px">Je li sljedeća tvrdnja točna?</p>
      <div class="drill-q" id="dr-q">2³ · 2⁴ = 2⁷</div>
      <div class="drill-opts">
        <div class="drill-opt" onclick="drill(this,true)">✓ Točno</div>
        <div class="drill-opt" onclick="drill(this,false)">✗ Netočno</div>
      </div>
      <div class="drill-fb" id="dr-fb"></div>
      <div class="drill-ctrl">
        <button class="drill-next" id="dr-next" onclick="nextDrill()">Sljedeće →</button>
      </div>
      <div class="drill-bar"><div class="drill-bar-fill" id="dr-bar" style="width:0%"></div></div>
    </div>
  </div>

  <!-- NCVVO STVARNI ISPIT -->
  <div class="ncvvo-real">
    <div class="ncvvo-real-hd">📊 stvarni NCVVO zadaci — gdje učenici gube bodove</div>
    <div class="ncvvo-real-body">
      <div class="ncvvo-real-item">
        <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Potencije · ~45% netočnih<span class="ncvvo-live-stat neutral" id="nlive-eksp">potencije</span></div>
        <div class="ncvvo-real-q">Pojednostavni: (2x²y⁻¹)³ / (4x⁻¹y²)</div>
        <div class="ncvvo-real-stat">Najčešća greška: <strong>zaboravljaju primijeniti potenciju na sve faktore</strong></div>
        <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
        <div class="ncvvo-real-ans">(2x²y⁻¹)³ = 8x⁶y⁻³. Dijeli s 4x⁻¹y²: 8x⁶y⁻³ / 4x⁻¹y² = 2x⁷y⁻⁵ = 2x⁷/y⁵ ✓</div>
      </div>
      <div class="ncvvo-real-item">
        <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Algebarska manipulacija · ~55% netočnih<span class="ncvvo-live-stat neutral" id="nlive-alg">algebra</span></div>
        <div class="ncvvo-real-q">Faktoriziraj: x⁴ − 16</div>
        <div class="ncvvo-real-stat">Najčešća greška: <strong>staju na (x²+4)(x²−4) — ne faktoriziraju dalje!</strong></div>
        <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
        <div class="ncvvo-real-ans">x⁴−16 = (x²+4)(x²−4) = (x²+4)(x+2)(x−2). x²+4 ne može dalje (nema realnih korijena) ✓</div>
      </div>
      <div class="ncvvo-real-item">
        <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Negativni eksponenti · ~50% netočnih<span class="ncvvo-live-stat neutral" id="nlive-neg">neg. eksponent</span></div>
        <div class="ncvvo-real-q">Zapiši bez negativnih eksponenata: (x²−y⁻²)/(x⁻¹+y⁻¹)</div>
        <div class="ncvvo-real-stat">Najčešća greška: <strong>tretiraju a⁻ⁿ kao −aⁿ umjesto 1/aⁿ</strong></div>
        <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
        <div class="ncvvo-real-ans">Brojevnik: x²−<span class="frac"><span class="num">1</span><span class="den">y²</span></span>. Nazivnik: <span class="frac"><span class="num">1</span><span class="den">x</span></span>+<span class="frac"><span class="num">1</span><span class="den">y</span></span> = (x+y)/xy. Rezultat: xy(x²y²−1)/((x+y)y²) ✓</div>
      </div>
      <div class="ncvvo-real-item">
        <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Korijeni · ~40% netočnih<span class="ncvvo-live-stat neutral" id="nlive-kor">korijeni</span></div>
        <div class="ncvvo-real-q">Racionaliziraj: (√3+1)/(√3−1)</div>
        <div class="ncvvo-real-stat">Najčešća greška: <strong>ne prepoznaju konjugat ili pogrešno računaju razliku kvadrata</strong></div>
        <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
        <div class="ncvvo-real-ans">(√3+1)²/((√3)²−1²) = (3+2√3+1)/(3−1) = (4+2√3)/2 = 2+√3 ✓</div>
      </div>
    </div>
  </div>

  <!-- MATURA FOKUS -->
  <div class="matura-block">
    <div class="matura-hd">⭐ matura fokus — automatski refleks</div>
    <ul class="matura-list">
      <li class="mi"><div class="mi-dot"></div><span><b>aᵐ·aⁿ = aᵐ⁺ⁿ vs (aᵐ)ⁿ = aᵐⁿ</b> — množenje vs potencija potencije. Pazi koja je situacija!</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>a⁻ⁿ = <span class="frac"><span class="num">1</span><span class="den">aⁿ</span></span>.</b> Negativni eksponent NIKAD nije negativan broj.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>Korijen PRVO:</b> a^(<span class="frac"><span class="num">p</span><span class="den">q</span></span>) = (ᵠ√a)ᵖ — smanjuje brojeve, lakše računanje.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>√(a+b) ≠ √a+√b</b> i <b>(a+b)² ≠ a²+b²</b> — dva najčešća propusta na maturi.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>Racionalizacija = konjugat</b> → uklanja korijen iz nazivnika. NCVVO to zahtijeva.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>Faktorizacija</b>: uvijek traži ZZF prvo, pa razliku kvadrata ili binomni obrazac.</span></li>
    </ul>
  </div>

  <!-- CONNECT NEXT -->
  <div class="connect-next"><div class="cn-head"><span class="cn-icon">🔗</span><div><div class="cn-title">Gdje ćeš ovo koristiti?</div><div class="cn-sub">Veze s ostalim poglavljima</div></div></div>
  <div class="cn-grid">
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge b">P03</span><span class="cn-item-title">Polinomi i izrazi</span></div><div class="cn-item-desc">Faktorizacija polinoma direktno koristi algebarske obrasce potencija.</div><div class="cn-item-arrow"><a href="Maturiraj_MatA_P03_FINAL.html?from=P02" style="color:inherit;text-decoration:none">→ faktorizacija</a></div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge c">P08</span><span class="cn-item-title">Eksponencijalna f.</span></div><div class="cn-item-desc">Svaki zadatak s aˣ direktno primjenjuje zakone potencija iz P02.</div><div class="cn-item-arrow"><a href="Maturiraj_MatA_P08_FINAL.html?from=P02" style="color:inherit;text-decoration:none">→ zakoni potencija</a></div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge a">P17</span><span class="cn-item-title">Derivacije</span></div><div class="cn-item-desc">Derivacija potencije xⁿ i lančano pravilo koriste racionalne izlaze.</div><div class="cn-item-arrow"><a href="Maturiraj_MatA_P17_FINAL.html?from=P02" style="color:inherit;text-decoration:none">→ derivacija potencije</a></div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge a">P18</span><span class="cn-item-title">Integrali</span></div><div class="cn-item-desc">∫xⁿdx = xⁿ⁺¹/(n+1)+C — integracija potencija direktno nastavlja P02.</div><div class="cn-item-arrow"><a href="Maturiraj_MatA_P18_FINAL.html?from=P02" style="color:inherit;text-decoration:none">→ integriranje potencija</a></div></div>
  </div>
</div>


<div class="slbl" style="margin-top:28px">// formule za kraj — brzi podsjetnik</div>
<div class="con" style="margin-bottom:20px">
  <div class="cr"><div class="ck b">Pravila potencija</div><div class="cv">a<sup>m</sup>&middot;a<sup>n</sup> = a<sup>m+n</sup>, a<sup>m</sup>/a<sup>n</sup> = a<sup>m&minus;n</sup>, (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>, a<sup>0</sup> = 1</div></div>
  <div class="cr"><div class="ck c">Negativni i racionalni</div><div class="cv">a<sup>&minus;n</sup> = 1/a<sup>n</sup>, &nbsp; a<sup>m/n</sup> = <sup>n</sup>&radic;(a<sup>m</sup>)</div></div>
  <div class="cr"><div class="ck i">Korijeni</div><div class="cv">&radic;a &middot; &radic;b = &radic;(ab), &radic;a/&radic;b = &radic;(a/b). &nbsp; Racionalizacija: množ s a&minus;&radic;b ako je a+&radic;b u nazivniku!</div></div>
  <div class="cr"><div class="ck a">Algebarska manipulacija</div><div class="cv">(a+b)&sup2; = a&sup2;+2ab+b&sup2;, &nbsp; a&sup2;&minus;b&sup2; = (a+b)(a&minus;b), &nbsp; (a&plusmn;b)&sup3; česti obrasci</div></div>
  <div class="cr"><div class="ck r">Zamka</div><div class="cv">&radic;(a&sup2;) = |a|, ne a! Za a=&minus;3: &radic;9 = 3, ne &minus;3. Korijen uvijek &ge; 0.</div></div>
</div>
  <div class="nav-row">
    <span class="nb" onclick="sw(0)">← Pregled</span>
    <span class="nb primary" onclick="sw(2)">Vježbaj →</span>
  </div>
</div>

<!-- ═══════════════════════════════════ -->
<!-- L2 — PRACTICE                       -->
<!-- ═══════════════════════════════════ -->
<div class="layer" id="l2">

  <div class="exam-mode-wrap" id="exam-mode-wrap">
    <div class="exam-mode-head">// odaberi mod vježbanja</div>
    <div class="exam-mode-opts">
      <div class="exam-mode-opt active" onclick="setExamMode('normal',this)">
        <div class="em-icon">📖</div><div class="em-name">Standardni</div><div class="em-desc">s objašnjenjima · bez pritiska</div>
      </div>
      <div class="exam-mode-opt" onclick="setExamMode('timed',this)">
        <div class="em-icon">⏱</div><div class="em-name">Ispitni</div><div class="em-desc">90 sek po pitanju · kao NCVVO</div>
      </div>
      <div class="exam-mode-opt" onclick="setExamMode('blitz',this)">
        <div class="em-icon">⚡</div><div class="em-name">Blitz</div><div class="em-desc">30 sek po pitanju · maksimalni pritisak</div>
      </div>
    </div>
  </div>

  <div class="adaptive-banner" id="adaptive-banner" style="display:none">
    <div class="ab-icon">🎯</div>
    <div class="ab-body">
      <div class="ab-title" id="ab-title">Prijedlog za ponavljanje</div>
      <div class="ab-text" id="ab-text"></div>
    </div>
    <button class="ab-close" onclick="document.getElementById('adaptive-banner').style.display='none'">×</button>
  </div>

  <div class="exam-timer" id="exam-timer" style="display:none">
    <div class="et-circle">
      <canvas id="timer-canvas" width="64" height="64"></canvas>
      <span class="et-num" id="et-num">90</span>
    </div>
    <div class="et-info">
      <div class="et-label">Preostalo</div>
      <div class="et-q" id="et-q-label">Pitanje 1</div>
    </div>
    <div class="et-streak" id="et-streak">Niz: 0 ✓</div>
  </div>

  <div class="quiz-intro"><strong>// ispitni mod</strong> · 12 pitanja · svako s objašnjenjem · target: <strong>10/12</strong></div>
  <div id="quiz-container"></div>

  <div class="score-box" id="score">
    <div class="score-num" id="snum">0/12</div>
    <div class="score-lbl" id="slbl"></div>
  </div>

  <div class="cta">
    <div>
      <div class="cta-e">discere archive</div>
      <div class="cta-t">Vježbaj sa stvarnim zadacima mature</div>
      <div class="cta-s">Svi NCVVO zadaci 2010.–2026. uz detaljna objašnjenja.</div>
    </div>
    <a href="https://maturiraj.hr" class="cta-btn">Otvori Discere →</a>
  </div>

  <div class="matura-block">
    <div class="matura-hd">⭐ za ispit — ključne točke</div>
    <ul class="matura-list">
      <li class="mi"><div class="mi-dot"></div><span><b>aᵐ·aⁿ = aᵐ⁺ⁿ · aᵐ/aⁿ = aᵐ⁻ⁿ · (aᵐ)ⁿ = aᵐⁿ</b> — tri različita zakona!</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>a⁻ⁿ = 1/aⁿ</b> — negativni eksponent nikad nije negativan broj!</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>a^(<span class="frac"><span class="num">p</span><span class="den">q</span></span>) = (ᵠ√a)ᵖ</b> — korijen PRVO, lakše računanje.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>√(a+b) ≠ √a+√b</b> i <b>(a+b)² ≠ a²+b²</b> — dva najčešća maturalna propusta.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>Racionalizacija = konjugat</b> → (a+√b)(a−√b) = a²−b.</span></li>
    </ul>
  </div>

  <div class="slbl" style="margin-top:28px">// bonus — popuni prazninu</div>

  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">01 · potencija potencije</div><div class="fitb-sent">Koliko je (2³)⁴ = 2^? Upiši samo eksponent.</div></div><div class="fitb-row"><input class="fitb-in" id="fi1" type="text" placeholder="eksponent..." autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi1','f1f','12','pp1')">Provjeri</button></div><div class="fitb-fb" id="f1f"></div></div>

  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">02 · negativni eksponent</div><div class="fitb-sent">Zapiši 5⁻³ kao razlomak: ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi2" type="text" placeholder="1/?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi2','f2f','1/125','neg1')">Provjeri</button></div><div class="fitb-fb" id="f2f"></div></div>

  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">03 · racionalni eksponent</div><div class="fitb-sent">Izračunaj 27^(<span class="frac"><span class="num">2</span><span class="den">3</span></span>) = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi3" type="text" placeholder="broj..." autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi3','f3f','9','rat2')">Provjeri</button></div><div class="fitb-fb" id="f3f"></div></div>

  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">04 · binomni obrazac</div><div class="fitb-sent">Razvij (x + 5)² = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi4" type="text" placeholder="x²+...+..." autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi4','f4f','x²+10x+25','bin1')">Provjeri</button></div><div class="fitb-fb" id="f4f"></div></div>

  <div class="nav-row">
    <span class="nb" onclick="sw(1)">← Uči</span>
    <button onclick="navigateChapter('p03')" class="nb primary">Sljedeće poglavlje →</button>
  </div>

</div>

</div>
</main>
</div>`;
const js = `function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:navigateChapter',id:id},'*');}}
function backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:backToList'},'*');}}
/* ── MOBILE SIDEBAR ── */
function toggleSidebar(){var s=document.getElementById('sidebar');var o=document.getElementById('overlay');var open=s.classList.toggle('mobile-open');o.classList.toggle('show',open);}
function closeSidebar(){document.getElementById('sidebar').classList.remove('mobile-open');document.getElementById('overlay').classList.remove('show');}

/* ── TABS + PROGRESS ── */
var tabProgress=[12,50,88];
function sw(i){
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('on',j===i)});
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('on',j===i)});
  var p=tabProgress[i];
  document.getElementById('prog-bar').style.width=p+'%';
  document.getElementById('prog-pct').textContent=p+'%';
  if(i===2&&!quizInited){quizInited=true;renderQuiz();}
  window.scrollTo({top:0,behavior:'smooth'});
  try{sessionStorage.setItem('p02_tab',i);}catch(e){}
}
// Restore tab on load
(function(){
  try{
    var saved=sessionStorage.getItem('p02_tab');
    if(saved!==null){var i=parseInt(saved);if(i>=0&&i<=2)sw(i);}
  }catch(e){}
})();

/* ── INTERAKTIVNI LAW TESTER ── */
var currentLaw='mult';
function setLaw(law,btn){
  btn.parentElement.querySelectorAll('.ltbtn').forEach(function(b){b.classList.remove('on')});
  btn.classList.add('on');
  currentLaw=law;
  // show/hide inputs based on law
  var lbl2=document.getElementById('lt-lbl2');
  var lbl3=document.getElementById('lt-lbl3');
  var inN=document.getElementById('lt-n');
  var inM=document.getElementById('lt-m');
  if(law==='zero'||law==='neg'){
    lbl2.textContent='n =';lbl3.style.display='none';inN.style.display='none';
    inM.value=law==='zero'?'0':'3';
  } else if(law==='rat'){
    lbl2.textContent='p =';lbl3.textContent='q =';lbl3.style.display='';inN.style.display='';
    inM.value='2';inN.value='3';
  } else {
    lbl2.textContent='m =';lbl3.textContent='n =';lbl3.style.display='';inN.style.display='';
    inM.value='3';inN.value='4';
  }
  calcLaw();
}
function calcLaw(){
  var aRaw=document.getElementById('lt-a').value;
  var mRaw=document.getElementById('lt-m').value;
  var nRaw=document.getElementById('lt-n').value;
  var a=parseFloat(aRaw);var m=parseFloat(mRaw);var n=parseFloat(nRaw);
  // Validate inputs
  if(isNaN(a)||isNaN(m)||(currentLaw!=='zero'&&currentLaw!=='neg'&&isNaN(n))){
    document.getElementById('lt-result').innerHTML='<span class="warn">Upiši valjane brojeve.</span>';
    document.getElementById('lt-expr').textContent='...';
    return;
  }
  var expr=document.getElementById('lt-expr');
  var res=document.getElementById('lt-result');
  var fmt=function(x){
    if(!isFinite(x))return x>0?'+∞':'-∞';
    return Number.isInteger(x)?x:Math.round(x*10000)/10000;
  };
  var sup=function(n){
    var s=n<0?'⁻':'';
    return s+Math.abs(n).toString().split('').map(function(d){return '⁰¹²³⁴⁵⁶⁷⁸⁹'[parseInt(d)]!==undefined?'⁰¹²³⁴⁵⁶⁷⁸⁹'[parseInt(d)]:d}).join('');
  };
  var warn=function(msg){expr.textContent='⚠ '+msg;res.innerHTML='<span class="warn">'+msg+'</span>';};
  if(currentLaw==='mult'){
    if(a===0&&(m+n)<=0){warn('0 na negativnoj ili nultoj potenciji — nije definirano!');return;}
    var r=Math.pow(a,m+n);
    expr.textContent=a+sup(m)+' · '+a+sup(n)+' = '+a+sup(m+n)+' = '+fmt(r);
    res.innerHTML='<strong>'+a+'⁽ᵐ⁺ⁿ⁾ = '+fmt(r)+'</strong>';
  } else if(currentLaw==='div'){
    if(a===0&&m<=n){warn('0ᵐ⁻ⁿ gdje m≤n: dijeljenje s nulom ili 0⁰!');return;}
    if(a===0&&m-n<0){warn('0 na negativnoj potenciji — nije definirano!');return;}
    var r=Math.pow(a,m-n);
    expr.textContent=a+sup(m)+' / '+a+sup(n)+' = '+a+sup(m-n)+' = '+fmt(r);
    res.innerHTML='<strong>'+a+'⁽ᵐ⁻ⁿ⁾ = '+fmt(r)+'</strong>';
  } else if(currentLaw==='pow'){
    if(a===0&&m*n<=0){warn('0 na negativnoj ili nultoj potenciji — nije definirano!');return;}
    var r=Math.pow(a,m*n);
    expr.textContent='('+a+sup(m)+')'+sup(n)+' = '+a+sup(m*n)+' = '+fmt(r);
    res.innerHTML='<strong>'+a+'⁽ᵐⁿ⁾ = '+fmt(r)+'</strong>';
  } else if(currentLaw==='neg'){
    if(a===0){warn('0⁻ⁿ nije definirano — dijeljenje s nulom! Baza mora biti ≠ 0.');return;}
    if(m===0){warn('a⁻⁰ = a⁰ = 1 — negativni nulti eksponent jednak je nultom.');
      expr.textContent=a+sup(0)+' = 1';res.innerHTML='<strong>1</strong>';return;}
    var r=1/Math.pow(a,m);
    expr.textContent=a+sup(-m)+' = 1/'+a+sup(m)+' = '+fmt(r);
    res.innerHTML='<strong>1/'+fmt(Math.pow(a,m))+' = '+fmt(r)+'</strong>';
  } else if(currentLaw==='zero'){
    if(a===0){expr.textContent='0⁰ = ?';res.innerHTML='<span class="warn">⚠ 0⁰ je nedefinirano — matematičari se i danas ne slažu! Zamka A razine.</span>';return;}
    expr.textContent=a+sup(0)+' = 1  (za svaki a ≠ 0)';
    res.innerHTML='<strong>Uvijek 1.</strong> Pokušaj s negativnom bazom: (−5)⁰ = 1 ✓';
  } else if(currentLaw==='rat'){
    if(n===0){warn('Nazivnik eksponenta ne smije biti 0 — ⁰√ nije definirano!');return;}
    if(a<0&&n%2===0){warn('Korijen parnog reda negativnog broja nije realan! a='+a+', q='+n);return;}
    if(a===0&&m<0){warn('0 na negativnoj potenciji nije definirano!');return;}
    var r=Math.pow(a,m/n);
    var root=a<0?-Math.pow(-a,1/n):Math.pow(a,1/n);
    root=Math.round(root*10000)/10000;
    expr.textContent=a+'^('+m+'/'+n+') = (ⁿ√'+a+')^'+m+' ≈ '+fmt(root)+'^'+m+' = '+fmt(r);
    res.innerHTML='<strong>Korijen PRVO: ⁿ√'+a+' ≈ '+fmt(root)+', pa ^'+m+' ≈ '+fmt(r)+'</strong>';
  }
}
// init — samo ako Law Tester HTML postoji
if(document.getElementById('lt-a'))calcLaw();

// Debounce za Law Tester (touch UX)
var lawTimer=null;
function debounceLaw(){clearTimeout(lawTimer);lawTimer=setTimeout(calcLaw,280);}

// ICP — inline checkpoint engine
var icpState={};
var icpFeedback={
  icp1:{
    q1:{ok:'✓ Točno! (aᵐ)ⁿ = aᵐⁿ → (x³)⁴ = x^(3·4) = x¹²',ng:'✗ Netočno. Potencija potencije = MNOŽENJE: 3·4=12 → x¹²'},
    q2:{ok:'✓ Točno! aᵐ·aⁿ = aᵐ⁺ⁿ → a^(5+(−3)) = a²',ng:'✗ Netočno. Ista baza + množenje = zbrajanje: 5+(−3) = 2 → a²'},
    q3:{ok:'✓ Točno! (ab)ⁿ = aⁿbⁿ → (2a)³ = 2³·a³ = 8a³',ng:'✗ Netočno. (2a)³ = 2³·a³ = 8·a³ = 8a³. Rasporedi na svaki faktor!'}
  },
  icp2:{
    q1:{ok:'✓ Točno! a⁻ⁿ = 1/aⁿ → 3⁻² = 1/3² = 1/9',ng:'✗ Netočno. Negativni eksponent nije negativan broj! 3⁻² = 1/9'},
    q2:{ok:'✓ Točno! a^(1/3) = ³√a → 64^(1/3) = ³√64 = 4',ng:'✗ Netočno. a^(1/3) = ³√a. ³√64 = 4 jer 4³ = 64'},
    q3:{ok:'✓ Točno! (a/b)⁻ⁿ = (b/a)ⁿ → (3/2)³ = 27/8',ng:'✗ Netočno. Negativni eksponent okreće razlomak: (2/3)⁻³ = (3/2)³ = 27/8'}
  },
  icp3:{
    q1:{ok:'✓ Točno! √50·√2 = √(50·2) = √100 = 10',ng:'✗ Netočno. √a·√b = √(ab) → √(50·2) = √100 = 10'},
    q2:{ok:'✓ Točno! √(x²) = |x| → √((-5)²) = √25 = 5 = |−5|',ng:'✗ Netočno. √(x²) = |x|, ne x! Za x=−5: |−5| = 5'},
    q3:{ok:'✓ Točno! 1/√7 · √7/√7 = √7/7',ng:'✗ Netočno. Pomnoži brojevnik i nazivnik s √7: √7/(√7)² = √7/7'}
  },
  icp4:{
    q1:{ok:'✓ Točno! (2x−3)² = 4x²−12x+9. Srednji član: 2·(2x)·3 = 12x.',ng:'✗ Netočno. (a−b)² = a²−2ab+b². a=2x, b=3 → (2x)²−2·2x·3+3² = 4x²−12x+9'},
    q2:{ok:'✓ Točno! Razlika kvadrata: a²−b² = (a+b)(a−b) → x²−25 = (x+5)(x−5)',ng:'✗ Netočno. x²−25 = x²−5² — razlika kvadrata! (a+b)(a−b) → (x+5)(x−5)'},
    q3:{ok:'✓ Točno! Uvijek ZZF prvo: 3(x²−4), pa razlika kvadrata: 3(x+2)(x−2)',ng:'✗ Netočno. Korak 1: izvuci ZZF → 3(x²−4). Korak 2: razlika kvadrata → 3(x+2)(x−2)'}
  }
};
var icpAnswered={};
function icp(icpId,qId,el,ok,fbId){
  var key=icpId+'_'+qId;
  if(icpAnswered[key])return;
  icpAnswered[key]=ok;
  el.closest('.icp-opts').querySelectorAll('.icp-opt').forEach(function(o){o.classList.add('dis')});
  el.classList.add(ok?'ok':'ng');
  var fb=document.getElementById(fbId);
  var msgs=icpFeedback[icpId]&&icpFeedback[icpId][qId];
  fb.textContent=msgs?(ok?msgs.ok:msgs.ng):(ok?'✓ Točno!':'✗ Netočno.');
  fb.className='icp-fb show '+(ok?'ok':'ng');
  // check if all 3 answered for this icp
  var allDone=['q1','q2','q3'].every(function(q){return icpAnswered[icpId+'_'+q]!==undefined;});
  if(allDone){
    var done=document.getElementById(icpId+'-done');
    if(done)done.classList.add('show');
    var score=['q1','q2','q3'].filter(function(q){return icpAnswered[icpId+'_'+q]===true;}).length;
    var sc=document.getElementById(icpId+'-sc');
    if(sc)sc.textContent=score+' / 3';
    updateProgress();
  }
}

// Show NCVVO answer
function showAns(btn){
  var ans=btn.nextElementSibling;
  ans.classList.add('show');
  btn.style.display='none';
}

// ICP retry — resetira jedno ICP pitanje po pitanje
function retryIcp(icpId){
  // clear state for this icp
  ['q1','q2','q3'].forEach(function(q){
    delete icpAnswered[icpId+'_'+q];
    var qEl=document.getElementById(icpId+q);
    if(!qEl)return;
    qEl.querySelectorAll('.icp-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});
    var fb=qEl.querySelector('.icp-fb');
    if(fb){fb.className='icp-fb';fb.textContent='';}
  });
  // hide done + retry
  var done=document.getElementById(icpId+'-done');
  var retry=document.getElementById(icpId+'-retry');
  if(done)done.classList.remove('show');
  if(retry)retry.classList.remove('show');
  // reset score label
  var sc=document.getElementById(icpId+'-sc');
  if(sc)sc.textContent='0 / 3';
  updateProgress();
}

// Show retry button when icp is done (patch into icp function end)
var _icpBase=icp;
icp=function(icpId,qId,el,ok,fbId){
  _icpBase(icpId,qId,el,ok,fbId);
  // After icp done check, also show retry
  var allDone=['q1','q2','q3'].every(function(q){return icpAnswered[icpId+'_'+q]!==undefined;});
  if(allDone){
    var retry=document.getElementById(icpId+'-retry');
    if(retry)retry.classList.add('show');
  }
};

// Keyboard shortcut — Space/Enter to toggle focused fcard
document.addEventListener('keydown',function(e){
  if(e.target.classList.contains('lt-input')||e.target.classList.contains('fitb-in')||e.target.classList.contains('sr-try-in'))return;
  if(e.code==='Space'||e.code==='Enter'){
    // find nearest focused or hovered fcard
    var active=document.querySelector('.fcard:focus-within,.fcard:hover');
    if(active){e.preventDefault();active.classList.toggle('collapsed');}
  }
  // Number keys 1-6 for quick fcard toggle
  if(e.code.startsWith('Digit')){
    var n=parseInt(e.key);
    if(n>=1&&n<=6){
      var fcards=document.querySelectorAll('.fcard');
      if(fcards[n-1]){e.preventDefault();fcards[n-1].classList.toggle('collapsed');}
    }
  }
});

// NCVVO live stat update — ažurira badge boju na osnovu quiz rezultata
function updateNcvvoLiveStats(){
  var topicMap={
    'nlive-eksp':['q3','q4','q10'],  // eksponenti
    'nlive-alg':['q7','q8','q12'],   // algebra
    'nlive-neg':['q3','q9'],         // negativni
    'nlive-kor':['q5','q6','q11']    // korijeni
  };
  Object.keys(topicMap).forEach(function(id){
    var el=document.getElementById(id);
    if(!el)return;
    var qs=topicMap[id];
    var done=qs.filter(function(q){return answered[q]!==undefined;});
    if(done.length===0)return;
    var ok=qs.filter(function(q){return answered[q]===true;}).length;
    var pct=Math.round(ok/qs.length*100);
    el.className='ncvvo-live-stat '+(pct>=80?'good':pct>=50?'neutral':'bad');
    el.textContent=(pct>=80?'✓ ':pct>=50?'~ ':'✗ ')+pct+'% točno';
  });
}

// Hook into qa to update NCVVO stats
var _qaNCVVO=qa;
qa=function(el,qid,ok){
  _qaNCVVO(el,qid,ok);
  updateNcvvoLiveStats();
};

// Formula card collapsible
document.querySelectorAll('.fcard-head').forEach(function(h){
  h.addEventListener('click',function(){h.closest('.fcard').classList.toggle('collapsed');});
});
// On mobile, start collapsed
if(window.innerWidth<=720){
  document.querySelectorAll('.fcard').forEach(function(f){f.classList.add('collapsed');});
}

/* ── STEP REVEAL ── */
var stepSt={};
function nxtStep(id,tot){
  if(!stepSt[id])stepSt[id]=0;
  stepSt[id]=Math.min(stepSt[id]+1,tot);
  for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.toggle('show',i<=stepSt[id]);}
  var prog=document.getElementById(id+'p');
  if(prog)prog.textContent=stepSt[id]+' / '+tot;
  var newStep=document.getElementById(id+'s'+stepSt[id]);
  if(newStep){setTimeout(function(){newStep.scrollIntoView({behavior:'smooth',block:'nearest'});},60);}
}
function rstStep(id,tot){
  stepSt[id]=0;
  for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.remove('show');}
  var prog=document.getElementById(id+'p');
  if(prog){prog.textContent='0 / '+tot;prog.style.color='';}
  document.querySelectorAll('#'+id+' .sr-try-in').forEach(function(inp){inp.value='';inp.className='sr-try-in';inp.disabled=false;});
  document.querySelectorAll('#'+id+' .sr-try-btn').forEach(function(b){b.disabled=false});
  document.querySelectorAll('#'+id+' .sr-try-fb').forEach(function(f){f.className='sr-try-fb'});
}

/* ── TRY-IT ── */
var tryExp={
  'rat1':'x⁶^(2/3) = x^(6·2/3) = x^(12/3) = x⁴. Eksponent množiš: 6 · (2/3) = 4.',
  'konj1':'(√5)²−(√2)² = 5−2 = 3. Razlika kvadrata eliminira korijen!',
  'fakt1':'Brojevnik: x(x²−1) = x(x+2)(x-2)... čekaj, 2x(x+2)(x−2). Faktoriziraj svaki korak!'
};
var tryExpAlt={
  'fakt1':'2x(x+2)(x-2)'
};
function tryIt(iid,fid,ans,key){
  var inp=document.getElementById(iid);
  var fb=document.getElementById(fid);
  var v=inp.value.trim();
  if(!v)return;
  inp.disabled=true;
  var btn=inp.parentElement.querySelector('.sr-try-btn');
  if(btn)btn.disabled=true;
  var norm=function(s){return s.replace(/\\s/g,'').toLowerCase().replace(/\\^/g,'').replace(/\\*/g,'');};
  var ok=norm(v)===norm(ans)||(tryExpAlt[key]&&norm(v)===norm(tryExpAlt[key]));
  inp.classList.add(ok?'ok':'fail');
  fb.className='sr-try-fb show '+(ok?'ok':'fail');
  fb.textContent=(ok?'✓ Točno! ':'✗ Netočno. Točan odgovor: '+ans+'. ')+tryExp[key];
}

/* ── RAPID FIRE DRILL ── */
var drData=[
  {q:'2³ · 2⁴ = 2⁷',ans:true,tag:'potencije',exp:'Točno! aᵐ·aⁿ = aᵐ⁺ⁿ → 2³⁺⁴ = 2⁷ = 128 ✓'},
  {q:'(3²)⁴ = 3⁶',ans:false,tag:'potencije',exp:'Netočno! (aᵐ)ⁿ = aᵐⁿ (množenje!), ne aᵐ⁺ⁿ. Točno: 3^(2·4) = 3⁸ = 6561'},
  {q:'5⁻² = 1/25',ans:true,tag:'negativni eksp.',exp:'Točno! a⁻ⁿ = 1/aⁿ → 5⁻² = 1/5² = 1/25 ✓'},
  {q:'√(16+9) = 4+3 = 7',ans:false,tag:'korijeni',exp:'Netočno! √(a+b) ≠ √a+√b. Točno: √(16+9) = √25 = 5'},
  {q:'4^(3/2) = 8',ans:true,tag:'racionalni eksp.',exp:'Točno! (√4)³ = 2³ = 8. Korijen PRVO, pa potencija ✓'},
  {q:'(−3)² = −9',ans:false,tag:'potencije',exp:'Netočno! (−3)² = (−3)·(−3) = +9. Zagrada je ključna — minus×minus=plus!'},
  {q:'a⁰ = 1 za svaki a',ans:false,tag:'potencije',exp:'Netočno! 0⁰ je nedefinirano. Za a ≠ 0 vrijedi a⁰ = 1.'},
  {q:'(2·3)⁴ = 2⁴·3⁴',ans:true,tag:'potencije',exp:'Točno! (ab)ⁿ = aⁿbⁿ → 6⁴ = 16·81 = 1296 ✓'},
  {q:'√3 · √12 = 6',ans:true,tag:'korijeni',exp:'Točno! √3·√12 = √(3·12) = √36 = 6 ✓'},
  {q:'x³/x⁵ = x²',ans:false,tag:'potencije',exp:'Netočno! aᵐ/aⁿ = aᵐ⁻ⁿ → x^(3−5) = x⁻² = 1/x²'},
  {q:'(x+y)² = x²+y²',ans:false,tag:'algebra',exp:'Netočno! Nedostaje srednji član 2xy: (x+y)² = x²+2xy+y²'},
  {q:'8^(1/3) = 2',ans:true,tag:'racionalni eksp.',exp:'Točno! a^(1/n) = ⁿ√a → ³√8 = 2, jer 2³ = 8 ✓'}
];
var drIdx=0,drDone=false,drOk=0,drTot=0;
function drill(el,chosen){
  if(drDone)return;drDone=true;drTot++;
  var d=drData[drIdx];
  var ok=chosen===d.ans;
  if(ok)drOk++;
  el.closest('.drill-opts').querySelectorAll('.drill-opt').forEach(function(o){o.classList.add('dis')});
  el.classList.add(ok?'ok':'ng');
  var fb=document.getElementById('dr-fb');
  var tagHtml=d.tag?'<span style="font-family:var(--mono);font-size:9px;padding:2px 7px;border-radius:3px;border:1px solid;font-weight:700;margin-right:7px;background:'+(ok?'var(--dim-g)':'var(--dim-r)')+';color:'+(ok?'var(--green)':'var(--red)')+';border-color:'+(ok?'var(--bd-g)':'var(--bd-r)')+'">'+d.tag+'</span>':'';
  fb.innerHTML=tagHtml+(ok?'✓ ':'✗ ')+d.exp;
  fb.className='drill-fb '+(ok?'ok':'ng');
  document.getElementById('dr-sc').textContent=drOk+' / '+drTot;
  document.getElementById('dr-next').style.display='inline-flex';
  document.getElementById('dr-bar').style.width=((drIdx+1)/drData.length*100)+'%';
}
function nextDrill(){
  drIdx=(drIdx+1)%drData.length;drDone=false;
  var q=document.getElementById('dr-q');
  q.style.opacity='0';
  setTimeout(function(){q.textContent=drData[drIdx].q;q.style.opacity='1';},150);
  document.getElementById('dr-fb').className='drill-fb';
  document.getElementById('dr-next').style.display='none';
  document.querySelectorAll('.drill-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});
  updateProgress();
}
function updateProgress(){
  // Dynamic progress: base 12% + drill + inline checkpoints + checkpoint + quiz
  var drillPts=drTot>0?Math.min(Math.round(drOk/drTot*8),8):0;
  var cpDone=Object.values(cpState).filter(Boolean).length;
  var cpPts=Math.round(cpDone/5*8);
  // inline checkpoints contribution (3 × up to 4pts each = 12pts total)
  var icpPts=0;
  ['icp1','icp2','icp3'].forEach(function(icp){
    var done=['q1','q2','q3'].filter(function(q){return icpAnswered[icp+'_'+q]!==undefined;}).length;
    icpPts+=Math.round(done/3*4);
  });
  var quizPts=Object.keys(answered).length>0?Math.round(correct/total*16):0;
  tabProgress[1]=Math.min(12+drillPts+icpPts+cpPts,50);
  tabProgress[2]=Math.min(12+drillPts+icpPts+cpPts+quizPts,100);
  var curTab=document.querySelector('.tab.on');
  var curIdx=curTab?Array.from(document.querySelectorAll('.tab')).indexOf(curTab):0;
  var p=tabProgress[curIdx];
  document.getElementById('prog-bar').style.width=p+'%';
  document.getElementById('prog-pct').textContent=p+'%';
  try{localStorage.setItem('maturiraj_p02_prog',p);}catch(e){}
}
var _drq=document.getElementById('dr-q');if(_drq)_drq.textContent=drData[0].q;

/* ── BUG FINDER ── */
var bugDone={};
var bugExp={
  b1:'✓ Točno! aᵐ·aⁿ = aᵐ⁺ⁿ — ZBRAJAMO eksponente, ne množimo. 2³·2⁴ = 2⁷ = 128.',
  b2:'✓ Točno! a⁻ⁿ = 1/aⁿ — negativni eksponent daje RECIPROČNU vrijednost, nikad negativan broj. 3⁻² = 1/9.',
  b3:'✓ Točno! √(a+b) ≠ √a+√b — korijen se ne može rasporediti po zbrajanju! √9+√16 = 3+4 = 7, ne √25.',
  b4:'✓ Točno! (a+b)² = a²+2ab+b² — srednji član 2ab se UVIJEK piše! (x+3)² = x²+6x+9, ne x²+9.'
};
function bug(el,id,ok,eid){
  if(bugDone[id])return;bugDone[id]=true;
  el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){o.classList.add('dis')});
  el.classList.add(ok?'ok':'ng');
  if(!ok){el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf('true')>-1)o.classList.add('ok');});}
  var expl=document.getElementById(eid);
  expl.innerHTML=ok?bugExp[id]:'✗ Netočno. '+bugExp[id];
  expl.className='bug-expl show '+(ok?'ok':'ng');
}

/* ── CHECKPOINT ── */
var cpState={1:false,2:false,3:false,4:false,5:false};
function toggleCP(n){
  cpState[n]=!cpState[n];
  var item=document.getElementById('cp'+n);
  item.querySelector('.cp-check').classList.toggle('done',cpState[n]);
  item.classList.toggle('done-item',cpState[n]);
  var done=Object.values(cpState).filter(Boolean).length;
  document.getElementById('cp-txt').textContent=done+' / 5 potvrđeno';
  document.getElementById('cp-ready').style.display=done===5?'inline':'none';
  updateProgress();
}

/* ── SOUND ENGINE ── */
var audioCtx=null;
function getAudio(){if(!audioCtx){try{audioCtx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}}return audioCtx;}
function playTone(freq,dur,vol,type){var ctx=getAudio();if(!ctx)return;var osc=ctx.createOscillator();var gain=ctx.createGain();osc.connect(gain);gain.connect(ctx.destination);osc.type=type||'sine';osc.frequency.setValueAtTime(freq,ctx.currentTime);gain.gain.setValueAtTime(vol||0.15,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+dur);osc.start(ctx.currentTime);osc.stop(ctx.currentTime+dur);}
function soundCorrect(){playTone(880,0.12,0.12,'sine');setTimeout(function(){playTone(1100,0.15,0.10,'sine');},80);}
function soundWrong(){playTone(220,0.25,0.12,'sawtooth');}
function soundTick(){playTone(440,0.05,0.05,'square');}
function soundTimeUp(){playTone(180,0.4,0.15,'sawtooth');setTimeout(function(){playTone(120,0.5,0.12,'sawtooth');},200);}
function soundComplete(){[523,659,784,1047].forEach(function(f,i){setTimeout(function(){playTone(f,0.2,0.12,'sine');},i*100);});}

/* ── EXAM TIMER ── */
var examMode='normal',timerInterval=null,timerSeconds=90,timerMax=90,currentQ=1,streak=0;
function setExamMode(mode,el){
  examMode=mode;
  document.querySelectorAll('.exam-mode-opt').forEach(function(o){o.classList.remove('active')});
  el.classList.add('active');
  if(mode!=='normal'){timerMax=mode==='timed'?90:30;document.getElementById('exam-timer').style.display='flex';startTimer();}
  else{document.getElementById('exam-timer').style.display='none';stopTimer();}
}
function drawTimerCanvas(secs,max){
  var c=document.getElementById('timer-canvas');if(!c)return;
  var ctx=c.getContext('2d');var W=64,H=64,r=28,cx=32,cy=32;
  ctx.clearRect(0,0,W,H);
  ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.strokeStyle='rgba(77,158,255,0.12)';ctx.lineWidth=4;ctx.stroke();
  var pct=secs/max;
  var col=pct>0.4?'rgba(77,158,255,0.85)':pct>0.2?'rgba(245,158,11,0.9)':'rgba(248,113,113,0.9)';
  ctx.beginPath();ctx.arc(cx,cy,r,-Math.PI/2,-Math.PI/2+pct*Math.PI*2);ctx.strokeStyle=col;ctx.lineWidth=4;ctx.lineCap='round';ctx.stroke();
  var numEl=document.getElementById('et-num');if(numEl)numEl.textContent=secs;
  var wrap=document.getElementById('exam-timer');
  if(wrap){wrap.classList.toggle('warn',pct<=0.4&&pct>0.2);wrap.classList.toggle('urgent',pct<=0.2);}
}
function startTimer(){
  stopTimer();timerSeconds=timerMax;drawTimerCanvas(timerSeconds,timerMax);
  timerInterval=setInterval(function(){
    timerSeconds--;drawTimerCanvas(timerSeconds,timerMax);
    if(timerSeconds>0&&timerSeconds<=10)soundTick();
    if(timerSeconds<=0){stopTimer();soundTimeUp();var t=document.getElementById('exam-timer');if(t){t.style.background='rgba(248,113,113,0.07)';setTimeout(function(){t.style.background='';},800);}}
  },1000);
}
function stopTimer(){if(timerInterval){clearInterval(timerInterval);timerInterval=null;}}
function updateTimerLabel(){var l=document.getElementById('et-q-label');var s=document.getElementById('et-streak');if(l)l.textContent='Pitanje '+currentQ+' / 12';if(s)s.textContent='Niz: '+streak+' ✓';}

/* ── ADAPTIVE ENGINE ── */
var topicErrors={potencije:0,korijeni:0,eksponenti:0,algebra:0};
var topicHints={
  potencije:'Greške u pravilima potencija! Otvori Law Tester u Uči tabu i prođi svaki zakon posebno.',
  korijeni:'Greške s korijenima! Pamti: √(a+b) ≠ √a+√b i √(a²) = |a|. Korijeni se oslanjaju i na skupove brojeva iz <a href="Maturiraj_MatA_P01_FINAL.html" style="color:var(--blue);text-decoration:underline">P01</a>.',
  eksponenti:'Greške s negativnim/racionalnim eksponentima! Vrati se na formula kartice u Uči tabu. Klasifikacija korijena (√n ∈ ℕ?) je u <a href="Maturiraj_MatA_P01_FINAL.html" style="color:var(--blue);text-decoration:underline">P01 · Skupovi brojeva</a>.',
  algebra:'Greške u binomnim obrascima! (a+b)² = a²+2ab+b² — srednji član je uvijek tu. Pogledaj Step Reveal primjere u Uči tabu.'
};
var qTopics={q1:'potencije',q2:'potencije',q3:'eksponenti',q4:'eksponenti',q5:'korijeni',q6:'korijeni',q7:'algebra',q8:'algebra',q9:'potencije',q10:'eksponenti',q11:'korijeni',q12:'algebra'};
function checkAdaptive(qid,ok){
  var topic=qTopics[qid];
  if(!ok&&topic){topicErrors[topic]=(topicErrors[topic]||0)+1;if(topicErrors[topic]>=2)showAdaptiveBanner(topic);}
  if(ok)streak++; else streak=0;
  updateTimerLabel();
  if(examMode!=='normal'&&Object.keys(answered).length<total){currentQ=Object.keys(answered).length+1;timerSeconds=timerMax;drawTimerCanvas(timerSeconds,timerMax);updateTimerLabel();}
}
function showAdaptiveBanner(topic){
  var b=document.getElementById('adaptive-banner');var t=document.getElementById('ab-title');var x=document.getElementById('ab-text');
  if(!b||!t||!x)return;
  t.textContent='Prijedlog — ponovi: '+topic;x.textContent=topicHints[topic];
  b.style.display='flex';b.scrollIntoView({behavior:'smooth',block:'nearest'});
}

/* ── QUIZ ── */
var ALL_QUESTIONS=[
  {id:'q1',topic:'potencije',meta:'pravila potencija · množenje',
   text:'Koji je rezultat: <code>x⁴ · x⁻² · x³</code>?',
   opts:[{t:'x⁵',ok:true},{t:'x⁹',ok:false},{t:'x²',ok:false},{t:'x⁻²⁴',ok:false}],
   c:'✓ Točno. Zbroji eksponente: 4+(−2)+3 = 5 → x⁵.',
   w:'✗ Netočno. Ista baza + množenje → zbrajaj eksponente: 4+(−2)+3 = 5 → x⁵.'},
  {id:'q2',topic:'potencije',meta:'potencija potencije',
   text:'Koliko je <code>(2⁴)³</code>?',
   opts:[{t:'2⁷ = 128',ok:false},{t:'2¹² = 4096',ok:true},{t:'2⁴³',ok:false},{t:'6⁴',ok:false}],
   c:'✓ Točno. (aᵐ)ⁿ = aᵐⁿ → (2⁴)³ = 2^(4·3) = 2¹² = 4096.',
   w:'✗ Netočno. Potencija potencije = MNOŽENJE eksponenata: 4·3=12 → 2¹² = 4096.',
   proof:['(aᵐ)ⁿ = aᵐⁿ — eksponenti se MNOŽE','(2⁴)³ = 2^(4·3) = 2¹²','2¹² = 4096 ✓ (ne 2⁷ = 128!)']},
  {id:'q3',topic:'eksponenti',meta:'negativni eksponent',
   text:'Što je <code>(3/4)⁻²</code>?',
   opts:[{t:'9/16',ok:false},{t:'−9/16',ok:false},{t:'16/9',ok:true},{t:'−16/9',ok:false}],
   c:'✓ Točno. (a/b)⁻ⁿ = (b/a)ⁿ → (3/4)⁻² = (4/3)² = 16/9.',
   w:'✗ Netočno. Negativni eksponent okreće razlomak: (3/4)⁻² = (4/3)² = 16/9.',
   proof:['(a/b)⁻ⁿ = (b/a)ⁿ — negativni okreće razlomak','(3/4)⁻² = (4/3)²','= 4²/3² = 16/9 ✓']},
  {id:'q4',topic:'eksponenti',meta:'racionalni eksponent',
   text:'Koji je rezultat: <code>125^(2/3)</code>?',
   opts:[{t:'25',ok:true},{t:'5',ok:false},{t:'625',ok:false},{t:'15625',ok:false}],
   c:'✓ Točno. (³√125)² = 5² = 25. Korijen PRVO (³√125=5), pa potencija.',
   w:'✗ Netočno. a^(p/q) = (ᵠ√a)ᵖ. ³√125=5, pa 5² = 25.',
   proof:['a^(p/q) = (ᵠ√a)ᵖ — korijen PRVO','³√125 = 5  (jer 5³=125)','5² = 25 ✓']},
  {id:'q5',topic:'korijeni',meta:'zakon korijena · množenje',
   text:'Što je <code>√18 · √2</code>?',
   opts:[{t:'√20',ok:false},{t:'6',ok:true},{t:'36',ok:false},{t:'3√2',ok:false}],
   c:'✓ Točno. √18·√2 = √(18·2) = √36 = 6.',
   w:'✗ Netočno. √a·√b = √(ab) → √(18·2) = √36 = 6.',
   proof:['√a·√b = √(ab)','√18·√2 = √(18·2) = √36','= 6 ✓']},
  {id:'q6',topic:'korijeni',meta:'racionalizacija',
   text:'Koji izraz je racionaliziran oblik od <code>1/√3</code>?',
   opts:[{t:'√3',ok:false},{t:'√3/3',ok:true},{t:'1/3',ok:false},{t:'3/√3',ok:false}],
   c:'✓ Točno. 1/√3 · √3/√3 = √3/3. Korijen je u brojevniku.',
   w:'✗ Netočno. Pomnoži s √3/√3: (1·√3)/(√3·√3) = √3/3.',
   proof:['Racionalizacija: pomnoži s √3/√3','1/√3 · √3/√3 = √3/(√3)²','= √3/3 ✓']},
  {id:'q7',topic:'algebra',meta:'binomni obrazac',
   text:'Što je <code>(2x − 3)²</code>?',
   opts:[{t:'4x² + 9',ok:false},{t:'4x² − 6x + 9',ok:false},{t:'4x² − 12x + 9',ok:true},{t:'2x² − 12x + 9',ok:false}],
   c:'✓ Točno. (a−b)² = a²−2ab+b²: (2x)²−2·2x·3+3² = 4x²−12x+9.',
   w:'✗ Netočno. (a−b)² = a²−2ab+b². Srednji: −2·(2x)·3 = −12x. → 4x²−12x+9.',
   proof:['(a−b)² = a²−2ab+b²','(2x−3)² = (2x)²−2·(2x)·3+3²','= 4x²−12x+9 ✓']},
  {id:'q8',topic:'algebra',meta:'razlika kvadrata · faktorizacija',
   text:'Koji je faktorizirani oblik od <code>9x² − 25</code>?',
   opts:[{t:'(3x−5)²',ok:false},{t:'(9x−25)(x+1)',ok:false},{t:'(3x+5)(3x−5)',ok:true},{t:'(3x−5)(3x−5)',ok:false}],
   c:'✓ Točno. a²−b² = (a+b)(a−b). 9x²−25 = (3x)²−5² = (3x+5)(3x−5).',
   w:'✗ Netočno. Prepoznaj razliku kvadrata: 9x²=(3x)², 25=5². → (3x+5)(3x−5).',
   proof:['a²−b² = (a+b)(a−b)','9x²−25 = (3x)²−5²','= (3x+5)(3x−5) ✓']},
  {id:'q9',topic:'potencije',meta:'pravila · zamka',
   text:'Koji izraz je JEDNAK <code>a⁻³/a⁻⁵</code>?',
   opts:[{t:'a⁻⁸',ok:false},{t:'a²',ok:true},{t:'a⁻²',ok:false},{t:'1/a²',ok:false}],
   c:'✓ Točno. aᵐ/aⁿ = aᵐ⁻ⁿ → a^(−3−(−5)) = a^(−3+5) = a².',
   w:'✗ Netočno. aᵐ/aⁿ = aᵐ⁻ⁿ → a^(−3−(−5)) = a² (pazi na minus negativnog!).',
   proof:['aᵐ/aⁿ = aᵐ⁻ⁿ — oduzimaj','a⁻³/a⁻⁵ = a^(−3−(−5))','= a^(−3+5) = a² ✓']},
  {id:'q10',topic:'eksponenti',meta:'racionalni eksponent · A razina',
   text:'Što je <code>32^(−3/5)</code>?',
   opts:[{t:'−8',ok:false},{t:'1/8',ok:true},{t:'8',ok:false},{t:'1/32',ok:false}],
   c:'✓ Točno. 32^(3/5) = (⁵√32)³ = 2³ = 8. Negativni: 1/8.',
   w:'✗ Netočno. 32^(3/5) = (⁵√32)³ = 2³ = 8. Negativni eksponent: 1/8.',
   proof:['32^(3/5) = (⁵√32)³ = 2³ = 8','Negativni eksponent: 1/8','32^(−3/5) = 1/8 ✓']},
  {id:'q11',topic:'korijeni',meta:'kritična razlika · √(a²)',
   text:'Što je <code>√(x²)</code> za svaki realni x?',
   opts:[{t:'x',ok:false},{t:'|x|',ok:true},{t:'x²',ok:false},{t:'±x',ok:false}],
   c:'✓ Točno. √(x²) = |x|. Korijen vraća nenegativan rezultat, pa za x < 0 → |x| = −x.',
   w:'✗ Netočno. √(x²) = |x|, ne x! Npr. √((-3)²) = √9 = 3 = |−3|, ne −3.',
   proof:['√(x²) vraća nenegativan rezultat','Za x=−3: √((−3)²) = √9 = 3 = |−3|','∴ √(x²) = |x|, ne x ✓']},
  {id:'q12',topic:'algebra',meta:'A razina · kombinirani',
   text:'Koji je najjednostavniji oblik od <code>(x²−4)/(x+2)</code>, za x ≠ −2?',
   opts:[{t:'x−2',ok:true},{t:'x+2',ok:false},{t:'x²−2',ok:false},{t:'(x−2)(x+2)',ok:false}],
   c:'✓ Točno. x²−4 = (x+2)(x−2). Skrati (x+2): ostaje x−2. (za x ≠ −2)',
   w:'✗ Netočno. Faktoriziraj brojevnik: x²−4 = (x+2)(x−2). Skrati (x+2) → x−2.',
   proof:['Faktoriziraj: x²−4 = (x+2)(x−2)','Skrati (x+2)/(x+2) = 1','= x−2, za x ≠ −2 ✓']}
];

var answered={},correct=0,total=12,quizRun=0,quizInited=false;
function shuffleArray(arr){var a=arr.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}

function renderQuiz(){
  quizRun++;answered={};correct=0;
  topicErrors={potencije:0,korijeni:0,eksponenti:0,algebra:0};
  streak=0;currentQ=1;
  document.getElementById('adaptive-banner').style.display='none';
  var shuffled=shuffleArray(ALL_QUESTIONS);
  var container=document.getElementById('quiz-container');
  if(!container)return;
  var html='';
  if(quizRun>1){html+='<div class="quiz-rerun"><button class="quiz-rerun-btn" onclick="rerunQuiz()">↺ Novi redosljed pitanja</button><span class="quiz-rerun-info">Svaki put drugačiji redosljed</span></div>';}
  shuffled.forEach(function(q,idx){
    var num=String(idx+1).padStart(2,'0');
    var opts=shuffleArray(q.opts);
    var letters=['A','B','C','D'];
    var optsHtml=opts.map(function(o,i){return '<div class="qo" onclick="qa(this,\\''+q.id+'\\','+o.ok+')"><span class="ql">'+letters[i]+'</span>'+o.t+'</div>';}).join('');
    html+='<div class="qb" id="qb-'+q.id+'">';
    html+='<div class="qb-h"><div class="qb-meta">'+num+' / 12 · '+q.meta+'</div><div class="qb-text">'+q.text+'</div></div>';
    html+='<div class="qb-opts">'+optsHtml+'</div><div class="qe" id="'+q.id+'e"></div></div>';
  });
  container.innerHTML=html;
  var sb=document.getElementById('score');if(sb){sb.classList.remove('show');document.getElementById('snum').textContent='0/12';document.getElementById('slbl').textContent='';}
  updateTimerLabel();
}
function rerunQuiz(){if(examMode!=='normal')stopTimer();renderQuiz();if(examMode!=='normal'){timerSeconds=timerMax;drawTimerCanvas(timerSeconds,timerMax);startTimer();}document.getElementById('quiz-container').scrollIntoView({behavior:'smooth',block:'start'});}

function qa(el,qid,ok){
  if(answered[qid]!==undefined)return;
  answered[qid]=ok;if(ok)correct++;
  if(ok)soundCorrect(); else soundWrong();
  el.closest('.qb-opts').querySelectorAll('.qo').forEach(function(o){o.classList.add('dis')});
  el.classList.add(ok?'correct':'wrong');
  var qdata=ALL_QUESTIONS.filter(function(q){return q.id===qid;})[0];
  if(!qdata)return;
  var e=document.getElementById(qid+'e');
  if(e&&qdata){
    var proofHtml='';
    if(!ok&&qdata.proof){
      proofHtml='<div class="mini-proof"><div class="mini-proof-lbl">→ Mini dokaz</div>'+
        qdata.proof.map(function(s,i){return '<div class="step"><span class="sn">'+(i+1)+'</span><span class="st">'+s+'</span></div>';}).join('')+
      '</div>';
    }
    e.innerHTML='<div class="'+(ok?'qe-ok':'qe-no')+'">'+(ok?qdata.c:qdata.w)+'</div>'+proofHtml;
    e.classList.add('show');
  }
  checkAdaptive(qid,ok);
  if(examMode!=='normal')stopTimer();
  if(examMode!=='normal'&&Object.keys(answered).length<total)startTimer();
  if(Object.keys(answered).length===total){
    var s=document.getElementById('score');
    document.getElementById('snum').textContent=correct+'/'+total;
    document.getElementById('slbl').textContent=
      correct===total?'Savršen rezultat! P02 je svladan. 🎉':
      correct>=11?'Odlično! Provjeri propušteno pitanje.':
      correct>=9?'Solidno. Fokusiraj se na racionalne eksponente i binomne obrasce.':
      correct>=7?'Vrati se u Uči tab i prođi Law Tester i step-by-step primjere.':
      'Polako kroz Uči tab — Law Tester i formula kartice su tvoji saveznici.';
    s.classList.add('show');soundComplete();stopTimer();
    tabProgress[2]=Math.round(72+correct/total*28);
  }
}

/* ── FITB ── */
var FExp={
  pp1:'(aᵐ)ⁿ = aᵐⁿ → (2³)⁴ = 2^(3·4) = 2¹² = 4096.',
  neg1:'a⁻ⁿ = 1/aⁿ → 5⁻³ = 1/5³ = 1/125.',
  rat2:'27^(2/3) = (³√27)² = 3² = 9. Korijen PRVO!',
  bin1:'(a+b)² = a²+2ab+b². Srednji: 2·x·5 = 10x. → x²+10x+25.'
};
function chkf(iid,fid,ans,key){
  var inp=document.getElementById(iid);var fb=document.getElementById(fid);var v=inp.value.trim();
  var btn=inp.parentElement.querySelector('.fitb-btn');if(!v)return;
  inp.disabled=true;btn.disabled=true;fb.classList.add('show');
  var norm=function(s){return s.replace(/\\s/g,'').toLowerCase().replace(/²/g,'2').replace(/\\^2/g,'2');};
  var ok=norm(v)===norm(ans);
  inp.classList.add(ok?'ok':'fail');fb.classList.add(ok?'ok':'fail');
  fb.innerHTML=ok?'✓ Točno: <strong>'+ans+'</strong> — '+FExp[key]:'✗ Tvoj odg: <strong>'+v+'</strong> · Točno: <strong>'+ans+'</strong> — '+FExp[key];
}
/* ── RESTORE TAB ── */
(function(){try{var s=sessionStorage.getItem('p02_tab');if(s!==null){var i=parseInt(s);if(i>=0&&i<=2)sw(i);}}catch(e){}})();

/* ── RESTORE PROGRESS (localStorage) ── */
(function(){
  try{
    var saved=localStorage.getItem('maturiraj_p02_prog');
    if(saved!==null){
      var pct=parseInt(saved);
      if(pct>0){
        var bar=document.getElementById('prog-bar');
        var lbl=document.getElementById('prog-pct');
        if(bar)bar.style.width=pct+'%';
        if(lbl)lbl.textContent=pct+'%';
      }
    }
  }catch(e){}
})();

/* ── CONTEXTUAL FROM-BANNER ── */
(function(){
  try{
    var params=new URLSearchParams(window.location.search);
    var from=params.get('from');
    if(!from)return;
    var names={"P01": "Skupovi i Brojevi", "P02": "Potencije i Korijeni", "P03": "Polinomi", "P04": "Jednadžbe", "P06": "Funkcija — pojam", "P07": "Kvadratna funkcija", "P08": "Eksponencijalna i Log.", "P09": "Trigonometrija", "P10": "Analitička geometrija", "P11": "Geometrija prostora", "P14": "Nizovi", "P15": "Kombinatorika", "P16": "Granice funkcija", "P17": "Derivacije", "P18": "Integrali", "P19": "Složeni zadaci", "P20": "Sistematizacija", "P21": "Vjerojatnost"};
    var name=names[from]||from;
    var banner=document.createElement('div');
    banner.className='ctx-banner';
    banner.id='ctx-banner';
    banner.innerHTML='<span>← Dolaziš iz <strong>'+from+' · '+name+'</strong></span>'
      +'<a href="Maturiraj_MatA_'+from+'_FINAL.html" style="color:var(--cyan);text-decoration:none;font-weight:700">← Vrati se</a>'
      +'<span class="ctx-banner-close" onclick="document.getElementById(\\'ctx-banner\\').style.display=\\'none\\'">×</span>';
    document.body.appendChild(banner);
    banner.style.display='flex';
    setTimeout(function(){if(banner)banner.style.opacity='0';setTimeout(function(){if(banner)banner.style.display='none';},400);},6000);
  }catch(e){}
})();`;
const meta = {id:'P02',pidLower:'p02',title:"Maturiraj.hr \u2014 Mat A \u00b7 P02 \u00b7 Potencije, Racionalni i Iracionalni Izrazi",subject:'matematika-a',lsKey:'maturiraj_p02_prog'};

let _styleEl=null,_mounted=false;
function mount(container,options={}){
  if(_mounted)unmount(container);
  _styleEl=document.createElement('style');
  _styleEl.setAttribute('data-chapter','p02');
  _styleEl.textContent=css;
  document.head.appendChild(_styleEl);
  container.innerHTML=html;
  if(options.fromChapter){try{const u=new URL(window.location.href);u.searchParams.set('from',options.fromChapter);window.history.replaceState(null,'',u.toString());}catch(e){}}
  try{new Function(js)();}catch(e){console.error('[P02] Script error:',e);}
  _mounted=true;
}
function unmount(container){
  const ex=document.querySelector('style[data-chapter="p02"]');
  if(ex)ex.remove();
  _styleEl=null;
  if(container)container.innerHTML='';
  _mounted=false;
}
function getProgress(){try{return parseInt(localStorage.getItem('maturiraj_p02_prog')||'0');}catch(e){return 0;}}
function setProgress(pct){try{localStorage.setItem('maturiraj_p02_prog',String(pct));}catch(e){}}
// -- Complete page for MatChapterViewer (iframe srcDoc)
export const html = '<!DOCTYPE html><html lang="hr"><head>'
  + '<meta charset="UTF-8">'
  + '<meta name="viewport" content="width=device-width,initial-scale=1">'
  + '<title>P02 \u00b7 Potencije i Korijeni</title>'
  + '<style>' + css + '</style>'
  + '</head><body>'
  + _bodyHTML
  + '<script>' + js + '<\/script>'
  + '</body></html>';
export default{mount,unmount,getProgress,setProgress,meta,css,html};
export{mount,unmount,getProgress,setProgress,meta};