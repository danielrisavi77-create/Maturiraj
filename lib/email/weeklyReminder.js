// lib/email/weeklyReminder.js
// Generira HTML email za tjedni podsjetnik

/**
 * @param {object} data
 * @param {string} data.firstName
 * @param {number} data.danaDoMature
 * @param {number} data.napredakPct
 * @param {number} data.completedWeeks
 * @param {number} data.totalWeeks
 * @param {number} data.streak
 * @param {number} data.satiOvogTjedna  — sati upisanih ovaj tjedan
 * @param {boolean} data.needsNudge     — nije učio 3+ dana
 * @param {object|null} data.nextWeek   — { predmet, tema, sati, sym, color }
 * @param {string} data.appUrl
 * @param {string} data.unsubscribeUrl
 */
export function generateWeeklyEmail(data) {
  const {
    firstName       = 'Maturante',
    danaDoMature    = 0,
    napredakPct     = 0,
    completedWeeks  = 0,
    totalWeeks      = 0,
    streak          = 0,
    satiOvogTjedna  = 0,
    needsNudge      = false,
    nextWeek        = null,
    appUrl          = 'https://maturiraj.hr',
    unsubscribeUrl  = '#',
  } = data

  // ── Motivacijska poruka ovisno o stanju ──
  const motivacija = needsNudge
    ? `${firstName}, primijetili smo da nisi učio nekoliko dana. Matura je za <strong>${danaDoMature} dana</strong> — svaki sat se računa!`
    : napredakPct >= 70
    ? `Odličan tjedan, ${firstName}! Na ${napredakPct}% plana — nastaviš li ovim tempom, bit ćeš spreman.`
    : napredakPct >= 40
    ? `Dobar napredak, ${firstName}! ${napredakPct}% plana je iza tebe. Još malo pa si u finalnoj ravnini.`
    : `Svaki korak naprijed se računa, ${firstName}. ${napredakPct}% plana završeno — matura je za ${danaDoMature} dana.`

  // ── Boja napretka ──
  const napredakBoja = napredakPct >= 70 ? '#3ecf6e' : napredakPct >= 40 ? '#4b7bff' : '#e9b446'

  // ── Progress bar width ──
  const barWidth = Math.max(4, napredakPct)

  return `<!DOCTYPE html>
<html lang="hr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tjedni izvještaj — Maturiraj.hr</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #07090f; font-family: 'Helvetica Neue', Arial, sans-serif; color: #e4edff; -webkit-font-smoothing: antialiased; }
    a { color: #4b7bff; text-decoration: none; }
    a:hover { text-decoration: underline; }
    @media (max-width: 600px) {
      .container { padding: 16px !important; }
      .stat-grid { grid-template-columns: 1fr 1fr !important; }
      .cta-btn { padding: 14px 24px !important; font-size: 15px !important; }
    }
  </style>
</head>
<body style="background:#07090f; padding: 24px 16px;">

  <!-- Outer wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td align="center">
        <table class="container" width="100%" style="max-width:560px; padding: 0;" cellpadding="0" cellspacing="0">

          <!-- ── HEADER ── -->
          <tr>
            <td style="padding-bottom: 28px; padding-top: 8px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <!-- Logo -->
                    <div style="display:inline-flex; align-items:center; gap:8px;">
                      <div style="width:8px; height:8px; border-radius:50%; background:#4b7bff; display:inline-block;"></div>
                      <span style="font-size:18px; font-weight:900; color:#e4edff; letter-spacing:-0.03em;">Maturiraj.hr</span>
                    </div>
                  </td>
                  <td align="right">
                    <span style="font-size:11px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:#6a82a8;">
                      Tjedni izvještaj
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── MAIN CARD ── -->
          <tr>
            <td style="background: linear-gradient(160deg, rgba(255,255,255,0.042), rgba(255,255,255,0.012)); border: 1px solid rgba(255,255,255,0.08); border-radius: 24px; overflow: hidden;">

              <!-- Top accent bar -->
              <div style="height:3px; background: linear-gradient(90deg, #4b7bff, #7c5cfc, #2dd4bf);"></div>

              <div style="padding: 28px 28px 24px;">

                <!-- Countdown badge -->
                <div style="margin-bottom: 20px;">
                  <span style="display:inline-block; padding:5px 14px; border-radius:999px; background:rgba(248,113,113,0.1); border:1px solid rgba(248,113,113,0.22); font-size:11px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; color:#f87171;">
                    📅 ${danaDoMature} dana do mature
                  </span>
                </div>

                <!-- Headline -->
                <h1 style="font-size: clamp(22px, 5vw, 28px); font-weight:900; line-height:1.1; letter-spacing:-0.025em; color:#e4edff; margin-bottom:12px;">
                  ${needsNudge ? '⏰ Vrijeme je da nastaviš!' : '📊 Tjedni sažetak'}
                </h1>

                <!-- Motivacijska poruka -->
                <p style="font-size:14px; color:#6a82a8; line-height:1.75; margin-bottom:24px;">
                  ${motivacija}
                </p>

                <!-- ── STATS GRID ── -->
                <table class="stat-grid" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                  <tr>
                    <!-- Napredak -->
                    <td style="width:50%; padding-right:6px; padding-bottom:10px;">
                      <div style="background:rgba(75,123,255,0.08); border:1px solid rgba(75,123,255,0.16); border-radius:16px; padding:16px 14px;">
                        <div style="font-size:10px; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; color:#6a82a8; margin-bottom:8px;">Napredak plana</div>
                        <div style="font-size:32px; font-weight:900; color:${napredakBoja}; line-height:1; margin-bottom:4px;">${napredakPct}%</div>
                        <div style="font-size:11px; color:#6a82a8; font-weight:600;">${completedWeeks} / ${totalWeeks} tjedana</div>
                        <!-- Progress bar -->
                        <div style="margin-top:10px; height:4px; background:rgba(255,255,255,0.06); border-radius:99px; overflow:hidden;">
                          <div style="height:100%; width:${barWidth}%; background:linear-gradient(90deg,#4b7bff,#7c5cfc); border-radius:99px;"></div>
                        </div>
                      </div>
                    </td>
                    <!-- Streak -->
                    <td style="width:50%; padding-left:6px; padding-bottom:10px;">
                      <div style="background:rgba(233,180,70,0.08); border:1px solid rgba(233,180,70,0.16); border-radius:16px; padding:16px 14px;">
                        <div style="font-size:10px; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; color:#6a82a8; margin-bottom:8px;">Streak</div>
                        <div style="font-size:32px; font-weight:900; color:${streak > 0 ? '#e9b446' : '#6a82a8'}; line-height:1; margin-bottom:4px;">
                          ${streak > 0 ? streak + ' 🔥' : '—'}
                        </div>
                        <div style="font-size:11px; color:#6a82a8; font-weight:600;">${streak === 0 ? 'Nema streaka' : streak === 1 ? 'dan za redom' : 'dana za redom'}</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <!-- Sati ovaj tjedan -->
                    <td style="width:50%; padding-right:6px;">
                      <div style="background:rgba(45,212,191,0.06); border:1px solid rgba(45,212,191,0.14); border-radius:16px; padding:16px 14px;">
                        <div style="font-size:10px; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; color:#6a82a8; margin-bottom:8px;">Ovaj tjedan</div>
                        <div style="font-size:32px; font-weight:900; color:${satiOvogTjedna > 0 ? '#2dd4bf' : '#6a82a8'}; line-height:1; margin-bottom:4px;">
                          ${satiOvogTjedna > 0 ? satiOvogTjedna + 'h' : '—'}
                        </div>
                        <div style="font-size:11px; color:#6a82a8; font-weight:600;">sati učenja</div>
                      </div>
                    </td>
                    <!-- Dana do mature mini countdown -->
                    <td style="width:50%; padding-left:6px;">
                      <div style="background:rgba(248,113,113,0.06); border:1px solid rgba(248,113,113,0.14); border-radius:16px; padding:16px 14px;">
                        <div style="font-size:10px; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; color:#6a82a8; margin-bottom:8px;">Do mature</div>
                        <div style="font-size:32px; font-weight:900; color:${danaDoMature < 30 ? '#f87171' : danaDoMature < 60 ? '#e9b446' : '#e4edff'}; line-height:1; margin-bottom:4px;">${danaDoMature}</div>
                        <div style="font-size:11px; color:#6a82a8; font-weight:600;">dana · 1. lipnja 2026.</div>
                      </div>
                    </td>
                  </tr>
                </table>

                ${nextWeek ? `
                <!-- ── SLJEDEĆI TJEDAN ── -->
                <div style="margin-bottom:24px; padding:16px 18px; border-radius:16px; background:rgba(255,255,255,0.025); border:1px solid rgba(255,255,255,0.07);">
                  <div style="font-size:10px; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; color:#6a82a8; margin-bottom:12px;">
                    📚 Sljedeći tjedan
                  </div>
                  <div style="display:flex; align-items:center; gap:12px;">
                    <div style="width:42px; height:42px; border-radius:12px; background:${nextWeek.color}18; border:1px solid ${nextWeek.color}30; display:flex; align-items:center; justify-content:center; font-size:20px; flex-shrink:0; text-align:center; line-height:42px;">
                      ${nextWeek.sym}
                    </div>
                    <div>
                      <div style="font-size:14px; font-weight:800; color:#e4edff; margin-bottom:3px;">${nextWeek.predmet}</div>
                      <div style="font-size:12px; color:#6a82a8; line-height:1.5;">${nextWeek.tema}</div>
                      <div style="margin-top:5px;">
                        <span style="font-size:11px; font-weight:700; color:${nextWeek.color}; background:${nextWeek.color}18; border:1px solid ${nextWeek.color}28; border-radius:999px; padding:2px 8px;">
                          ${nextWeek.sati}h
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                ` : ''}

                <!-- ── CTA ── -->
                <div style="text-align:center; margin-bottom:8px;">
                  <a href="${appUrl}/plan-ucenja"
                     class="cta-btn"
                     style="display:inline-block; padding:14px 32px; border-radius:14px; background:linear-gradient(135deg,#4b7bff,#7c5cfc); color:#fff; font-size:15px; font-weight:800; letter-spacing:0.01em; text-decoration:none; box-shadow:0 8px 24px rgba(75,123,255,0.3);">
                    Otvori plan učenja →
                  </a>
                </div>

              </div>
            </td>
          </tr>

          <!-- ── FOOTER ── -->
          <tr>
            <td style="padding: 24px 4px 8px;">
              <p style="font-size:11px; color:#6a82a8; text-align:center; line-height:1.7;">
                Maturiraj.hr · AI-powered priprema za državnu maturu<br>
                <a href="${unsubscribeUrl}" style="color:#6a82a8; text-decoration:underline;">Odjavi se od podsjetnika</a>
                &nbsp;·&nbsp;
                <a href="${appUrl}" style="color:#6a82a8; text-decoration:underline;">Otvori aplikaciju</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`
}

/**
 * Generiraj plain-text verziju emaila (fallback)
 */
export function generateWeeklyEmailText(data) {
  const { firstName, danaDoMature, napredakPct, completedWeeks, totalWeeks, streak, nextWeek, appUrl } = data
  return `
Maturiraj.hr — Tjedni izvještaj

Bok ${firstName}!

📅 ${danaDoMature} dana do mature (1. lipnja 2026.)

TVOJ NAPREDAK:
• Plan: ${napredakPct}% (${completedWeeks}/${totalWeeks} tjedana)
• Streak: ${streak > 0 ? streak + ' dana za redom 🔥' : 'Nema aktivnog streaka'}

${nextWeek ? `SLJEDEĆI TJEDAN:\n${nextWeek.sym} ${nextWeek.predmet} — ${nextWeek.tema} (${nextWeek.sati}h)\n` : ''}

Otvori plan učenja: ${appUrl}/plan-ucenja

---
Maturiraj.hr · Odjavi se: ${data.unsubscribeUrl || appUrl}
`.trim()
}