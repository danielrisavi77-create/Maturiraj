'use client';
import React, { useState, useEffect, Fragment } from 'react';
import { ESEJI, SAZECI } from '../../hrvatskiSimulatorData';
import { e, lsSave, postAi } from '../../utils/helpers';
import { canSeeDiscereAnalysis } from '@/components/discere/paywall/paywallHelpers';
import LockedResultsBlock from '@/components/discere/paywall/LockedResultsBlock';

// ── AI dnevni limit (esej + sažetak dijele isti brojač) ──
const ESEJ_AI_DNEVNI_LIMIT = 3;

function getEsejAiUsage() {
  try {
    const today = new Date().toISOString().slice(0, 10);
    const raw = JSON.parse(localStorage.getItem("discere_esej_ai") || "{}");
    if (raw.datum !== today) return { datum: today, count: 0 };
    return raw;
  } catch (e) { return { datum: new Date().toISOString().slice(0, 10), count: 0 }; }
}
function incEsejAiUsage() {
  const usage = getEsejAiUsage();
  usage.count = (usage.count || 0) + 1;
  try { localStorage.setItem("discere_esej_ai", JSON.stringify(usage)); } catch (e) {}
  return usage.count;
}

// ── Sklopiva kartica polaznog teksta ──
function EssayTekstCard({ tekst, index }) {
  const [open, setOpen] = useState(index === 0);
  return e("div", { className: "esej-tekst-card" },
    e("button", {
      className: "esej-tekst-header",
      style: { width: "100%", cursor: "pointer", background: "none", border: "none", textAlign: "left" },
      onClick: () => setOpen(o => !o)
    },
      "📄 " + tekst.naslov,
      e("span", { style: { marginLeft: "auto", fontSize: 10, color: "var(--gold)" } }, (open ? "▲" : "▼"))
    ),
    open && e("div", { className: "esej-tekst-body" },
      tekst.tekst.split("\n\n").map((p, j) => e("p", { key: j, style: { marginBottom: 10 } }, p))
    )
  );
}

// ── Besplatna povratna informacija (0 API): samoprocjena po smjernicama + model-ključ ──
// canSeeKey: model-ključ (puni očekivani odgovor) je Standard sadržaj — free korisniku
// se ne renderira uopće, nego dobiva LockedResultsBlock s CTA-om. Samoprovjera po
// smjernicama ostaje besplatna.
function SamoprocjenaPanel({ smjernice, modelKljuc, naslov, canSeeKey = false }) {
  const [checked, setChecked] = useState({});
  const [showKey, setShowKey] = useState(false);
  const sm = smjernice || [];
  const doneCount = sm.filter((_, i) => checked[i]).length;
  return e("div", { className: "esej-ocjena-wrap", style: { marginTop: 16 } },
    e("div", { style: { padding: "16px 20px", borderBottom: "1px solid var(--bdr)", display: "flex", alignItems: "center", gap: 10 } },
      e("span", { style: { fontSize: 16 } }, "🔎"),
      e("span", { style: { fontFamily: "var(--fh)", fontSize: 15 } }, "Samoprovjera i model-ključ"),
      e("span", { style: { marginLeft: "auto", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 99, background: "rgba(62,207,110,.12)", border: "1px solid rgba(62,207,110,.3)", color: "var(--green)" } }, "BESPLATNO")
    ),
    e("div", { style: { padding: "16px 20px" } },
      e("p", { style: { fontSize: 13, color: "var(--muted)", marginBottom: 12, lineHeight: 1.6 } },
        "Označi što si obuhvatio/la, zatim usporedi s onim što se očekivalo."),
      /* Smjernice kao checklist */
      e("div", { style: { display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 } },
        sm.map((s, i) =>
          e("button", {
            key: i,
            onClick: () => setChecked(c => ({ ...c, [i]: !c[i] })),
            style: {
              display: "flex", alignItems: "flex-start", gap: 10, textAlign: "left",
              padding: "10px 12px", borderRadius: "var(--r)", cursor: "pointer",
              fontFamily: "var(--fb)", fontSize: 13, lineHeight: 1.5,
              background: checked[i] ? "rgba(62,207,110,.08)" : "var(--s2)",
              border: "1px solid " + (checked[i] ? "rgba(62,207,110,.35)" : "var(--bdr)"),
              color: checked[i] ? "var(--text)" : "var(--muted)"
            }
          },
            e("span", {
              style: {
                flexShrink: 0, width: 20, height: 20, borderRadius: 6, marginTop: 1,
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, fontWeight: 700,
                background: checked[i] ? "var(--green)" : "transparent",
                border: "2px solid " + (checked[i] ? "var(--green)" : "var(--bdr)"),
                color: "#03200f"
              }
            }, checked[i] ? "✓" : ""),
            e("span", null, s)
          )
        )
      ),
      sm.length > 0 && e("div", { style: { fontSize: 12, color: "var(--muted)", marginBottom: 16 } },
        "Obuhvaćeno: ", e("strong", { style: { color: doneCount === sm.length ? "var(--green)" : "var(--text)" } }, doneCount + " / " + sm.length)),
      /* Model-ključ */
      modelKljuc
        ? (!canSeeKey
          ? e(LockedResultsBlock, {
            label: "Model-ključ za ocjenjivanje",
            rows: 3,
            minHeight: 150,
            note: "Smjernice i samoprovjera ostaju besplatne. Model-odgovor — što se očekivalo — dolazi sa Standard planom.",
            upgradeHref: "/pro?from=hrv-esej&plan=standard"
          })
          : showKey
          ? e("div", { style: { background: "rgba(75,123,255,.05)", border: "1px solid rgba(75,123,255,.2)", borderRadius: "var(--r)", padding: "14px 16px" } },
            e("div", { style: { fontSize: 11, fontWeight: 700, color: "var(--blue)", marginBottom: 8, letterSpacing: ".05em", textTransform: "uppercase" } }, "📖 Što se očekivalo (model-ključ)"),
            e("div", { style: { fontSize: 13, color: "var(--text)", lineHeight: 1.75, whiteSpace: "pre-line" } }, modelKljuc))
          : e("button", { className: "btn btn-g", style: { fontSize: 13 }, onClick: () => setShowKey(true) }, "📖 Pokaži što se očekivalo"))
        : e("div", { style: { fontSize: 12, color: "var(--muted)", lineHeight: 1.6, fontStyle: "italic" } },
          "Za ovaj zadatak gornje smjernice ujedno su i ključ — provjeri jesi li svaku obuhvatio/la.")
    )
  );
}

// ── Popis školskih eseja ──
function EssayListScreen({ onBack, onEsej }) {
  const eseji = Object.values(ESEJI).sort((a, b) => b.year - a.year || (a.season === "ljeto" ? -1 : 1));
  return e(Fragment, null,
    e("div", { className: "nav" },
      e("button", { className: "btn btn-g", style: { fontSize: 13, padding: "6px 12px" }, onClick: onBack }, "← Natrag"),
      e("span", { className: "ntitle" }, "✍️ Školski eseji"),
      e("span", { className: "nbadge" }, eseji.length + " esej" + (eseji.length === 1 ? "" : "a"))
    ),
    e("div", { style: { maxWidth: 720, margin: "0 auto", padding: "24px 20px 80px" } },
      e("div", { style: { fontFamily: "var(--fh)", fontSize: 26, marginBottom: 6 } }, "Školski esej"),
      e("div", { style: { fontSize: 14, color: "var(--muted)", marginBottom: 24, lineHeight: 1.6 } },
        "Ispit traje 160 minuta. Pišeš esej od 350 do 500 riječi na temelju zadanih tekstova i smjernica."),
      e("div", { style: { background: "var(--s1)", border: "1px solid var(--bdr)", borderRadius: "var(--rr)", overflow: "hidden", marginBottom: 24 } },
        eseji.map((esej, i) =>
          e("div", { key: esej.key, className: "esej-item", onClick: () => onEsej(esej.key) },
            e("div", { className: "esej-item-year" }, esej.year),
            e("div", { className: "esej-item-info" },
              e("div", { className: "esej-item-label" },
                esej.year + ". — " + (esej.season === "ljeto" ? "Ljetni" : esej.season === "zima" ? "Zimski" : "Jesenski") + " rok",
                e("span", {
                  style: {
                    marginLeft: 6, fontSize: 10, fontWeight: 700, padding: "1px 6px", borderRadius: 99,
                    background: esej.razina === "A" ? "var(--gold-d)" : "var(--blue-d)",
                    border: "1px solid " + (esej.razina === "A" ? "var(--gold-b)" : "rgba(75,123,255,.3)"),
                    color: esej.razina === "A" ? "var(--gold)" : "var(--blue)"
                  }
                },
                  esej.razina ? (esej.razina === "A" ? "Viša razina (A)" : "Osnovna razina (B)") : (esej.jedinstven ? "Jedinstvena razina" : null))
              ),
              e("div", { className: "esej-item-tema" }, esej.naslov)
            ),
            e("span", { className: "esej-pro-badge" }, "PRO"),
            e("span", { className: "esej-item-arrow" }, "→")
          )
        )
      ),
      e("div", { style: { background: "rgba(75,123,255,.06)", border: "1px solid rgba(75,123,255,.2)", borderRadius: "var(--r)", padding: "14px 18px", fontSize: 13, color: "var(--muted)", lineHeight: 1.7 } },
        e("span", { className: "esej-pro-badge", style: { marginRight: 8 } }, "PRO"),
        "AI ocjenjivanje eseja dostupno je u PRO planu. Pisanje i pohrana eseja dostupni su svima."
      )
    )
  );
}

// ── Pisanje školskog eseja ──
function EssayMode({ esejKey, onBack, userData, isPro, onPaywall, userAccess }) {
  const esej = ESEJI[esejKey];
  const canSeeKljuc = canSeeDiscereAnalysis(userAccess);
  const [tekst, setTekst] = useState(() => {
    try { return JSON.parse(localStorage.getItem("discere_esej_" + esejKey) || "null") || ""; }
    catch (e) { return ""; }
  });
  const [secLeft, setSecLeft] = useState(esej.trajanje * 60);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const [aiState, setAiState] = useState("idle");
  const [aiResult, setAiResult] = useState(null);
  const [aiError, setAiError] = useState("");
  const [aiUsage, setAiUsage] = useState(() => getEsejAiUsage());

  const aiPreostalo = ESEJ_AI_DNEVNI_LIMIT - (aiUsage.count || 0);
  const aiLimitDostignut = aiPreostalo <= 0;

  // Spremi lokalno
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    if (!tekst) return;
    let noticeTimer;
    const t = setTimeout(() => {
      if (lsSave("discere_esej_" + esejKey, JSON.stringify(tekst))) {
        setSaved(true);
        noticeTimer = setTimeout(() => setSaved(false), 2000);
      }
    }, 800);
    return () => { clearTimeout(t); clearTimeout(noticeTimer); };
  }, [tekst, esejKey]);

  // Timer
  useEffect(() => {
    if (!started || done) return;
    const t = setInterval(() => {
      setSecLeft(s => {
        if (s <= 1) { clearInterval(t); setDone(true); return 0; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [started, done]);

  const wc = (tekst || "").trim().split(/\s+/).filter(Boolean).length;
  const wcOk = wc >= esej.minRijeci && wc <= esej.maxRijeci;
  const wcWarn = wc > 0 && !wcOk;
  const wcCls = wcOk ? "ok" : wcWarn ? (wc > esej.maxRijeci ? "err" : "warn") : "";

  function fmtTimer(s) {
    const h = Math.floor(s / 3600); const m = Math.floor((s % 3600) / 60); const ss = s % 60;
    return (h > 0 ? h + ":" : "") + (m < 10 && h > 0 ? "0" : "") + m + ":" + (ss < 10 ? "0" : "") + ss;
  }

  async function ocijeniEsej() {
    if (!tekst || wc < 50) return;
    if (aiLimitDostignut) return;
    // Obrana u dubinu: ključ za ocjenjivanje ulazi u prompt, pa se AI poziv ne smije
    // sastaviti bez prava na razradu (gumb je već PRO-gated, ovo je druga brava).
    if (!canSeeKljuc) { onPaywall && onPaywall("esej"); return; }
    setAiState("loading");
    setAiError("");
    // Polazne tekstove kratimo (ključ + smjernice + učenikov esej nose ocjenu) da
    // prompt stane u dopuštenu duljinu poruke proxyja.
    const tekstoviStr = esej.tekstovi.map(t => "=== " + t.naslov + " ===\n" + (t.tekst || "").substring(0, 1200)).join("\n\n");
    const smjerniceStr = esej.smjernice.map((s, i) => (i + 1) + ". " + s).join("\n");
    const isRazinaA = esej.razina === "A";
    const razinaLabel = isRazinaA ? "viša razina (A)" : "osnovna razina (B)";
    const sadrzajKriterij = isRazinaA
      ? "Sadržaj i interpretacija (0–8 bodova): književnopovijesni kontekst, usporedba s tekstovima iste tematike, dubina analize, originalnost stava, preciznost citata"
      : "Sadržaj i interpretacija (0–8 bodova): obuhvaćenost smjernica, razumijevanje tekstova, argumentacija";
    const prompt = `Ti si iskusni profesor hrvatskog jezika koji ocjenjuje školski esej za državnu maturu (${razinaLabel}).

ZADANI TEKSTOVI:
${tekstoviStr}

SMJERNICE ZA ESEJ:
${smjerniceStr}

KLJUČ ZA OCJENJIVANJE:
${esej.ocjenaKljuc}

ESEJ UČENIKA (${wc} riječi):
${tekst}

ZAHTJEVI ZA OCJENU (${razinaLabel} — maks. 20 bodova):
- ${sadrzajKriterij}
- Kompozicija (0–4 boda): uvod/razrada/zaključak, logičnost, kohezija
- Stil i izražajnost (0–4 boda): bogatstvo rječnika, stilske figure, varijabilnost rečenica
- Jezik i pravopis (0–4 boda): gramatika, pravopis, interpunkcija
${isRazinaA ? "\nNapomena: Ovo je viša razina (A) — očekuje se šira književnopovijesna kontekstualizacija, usporedba s drugim djelima i originalan kritički stav." : ""}
Odgovori ISKLJUČIVO u JSON formatu bez ikakvog teksta prije ili poslije:
{
  "ukupno": <broj 0-20>,
  "sadrzaj": <broj 0-8>,
  "kompozicija": <broj 0-4>,
  "stil": <broj 0-4>,
  "jezik": <broj 0-4>,
  "ocjena": <broj 1-5>,
  "pozitivno": ["<što je dobro 1>", "<što je dobro 2>", "<što je dobro 3>"],
  "poboljsati": ["<što popraviti 1>", "<što popraviti 2>"],
  "komentar": "<2-3 rečenice sveobuhvatnog komentara na hrvatskom>"
}`;
    const r = await postAi(prompt, { maxTokens: 1000 });
    if (!r.ok) { setAiError(r.error || "Greška pri ocjenjivanju."); setAiState("error"); return; }
    try {
      const clean = r.text.split("```json").join("").split("```").join("").trim();
      setAiResult(JSON.parse(clean));
      setAiState("done");
      incEsejAiUsage();              // broji tek nakon uspjeha
      setAiUsage(getEsejAiUsage());
    } catch (e) { setAiError("AI je vratio neočekivani format. Pokušaj ponovo."); setAiState("error"); }
  }

  if (!started) return e("div", { style: { maxWidth: 720, margin: "0 auto", padding: "40px 20px" } },
    e("button", { className: "btn btn-g", style: { fontSize: 13, padding: "6px 12px", marginBottom: 24 }, onClick: onBack }, "← Natrag"),
    e("div", { className: "esej-hero" },
      e("div", { className: "esej-hero-label", style: { display: "flex", alignItems: "center", gap: 8 } },
        "✍️ Školski esej · " + esej.year + ". — " + (esej.season === "ljeto" ? "Ljetni" : esej.season === "zima" ? "Zimski" : "Jesenski") + " rok",
        e("span", {
          style: {
            fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 99,
            background: esej.razina === "A" ? "var(--gold-d)" : "var(--blue-d)",
            border: "1px solid " + (esej.razina === "A" ? "var(--gold-b)" : "rgba(75,123,255,.3)"),
            color: esej.razina === "A" ? "var(--gold)" : "var(--blue)", textTransform: "none", letterSpacing: 0
          }
        },
          "Razina " + (esej.razina || "B"))
      ),
      e("div", { className: "esej-hero-title" }, esej.naslov),
      e("div", { className: "esej-hero-meta" }, "⏱ " + esej.trajanje + " minuta · " + esej.minRijeci + "–" + esej.maxRijeci + " riječi")
    ),
    e("div", { className: "esej-tekstovi" },
      esej.tekstovi.map((t, i) =>
        e("div", { key: i, className: "esej-tekst-card" },
          e("div", { className: "esej-tekst-header" }, "📄 " + t.naslov),
          e("div", { className: "esej-tekst-body" },
            t.tekst.split("\n\n").map((p, j) => e("p", { key: j, style: { marginBottom: 10 } }, p))
          )
        )
      )
    ),
    e("div", { className: "esej-smjernice" },
      e("div", { className: "esej-smjernice-title" }, "Smjernice za pisanje"),
      esej.smjernice.map((s, i) =>
        e("div", { key: i, className: "esej-smjernica" },
          e("div", { className: "esej-smjernica-br" }, i + 1),
          e("span", null, s)
        )
      )
    ),
    e("div", { style: { display: "flex", gap: 12, justifyContent: "center" } },
      e("button", {
        className: "btn btn-gold", style: { fontSize: 15, padding: "12px 32px" },
        onClick: () => setStarted(true)
      }, "▶ Počni pisati esej")
    )
  );

  return e(Fragment, null,
    e("div", { className: "nav" },
      e("button", { className: "btn btn-g", style: { fontSize: 13, padding: "6px 12px" }, onClick: onBack }, "← Izlaz"),
      e("span", { className: "ntitle" }, "✍️ Školski esej"),
      e("span", { style: { fontSize: 12, color: "var(--muted)", marginLeft: 4 } }, esej.year + ". " + (esej.season === "ljeto" ? "ljetni" : "jesenski")),
      e("span", {
        style: {
          fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 99, marginLeft: 4,
          background: esej.razina === "A" ? "var(--gold-d)" : "var(--blue-d)",
          border: "1px solid " + (esej.razina === "A" ? "var(--gold-b)" : "rgba(75,123,255,.3)"),
          color: esej.razina === "A" ? "var(--gold)" : "var(--blue)"
        }
      },
        "Razina " + (esej.razina || "B")),
      !done && e("span", { className: "timer" + (secLeft < 600 ? " danger" : secLeft < 1800 ? " warn" : "") }, fmtTimer(secLeft)),
      done && e("span", { style: { fontSize: 12, color: "var(--red)", fontWeight: 700, marginLeft: 8 } }, "⏰ Vrijeme isteklo")
    ),
    e("div", { className: "esej-screen" },
      /* Tekstovi za čitanje — sklopivi */
      e("div", { className: "esej-tekstovi" },
        esej.tekstovi.map((t, i) => e(EssayTekstCard, { key: i, tekst: t, index: i }))
      ),
      /* Smjernice */
      e("details", { style: { marginBottom: 20 } },
        e("summary", { style: { cursor: "pointer", fontSize: 13, fontWeight: 600, color: "var(--gold)", padding: "10px 0", userSelect: "none" } }, "📋 Smjernice za pisanje ▼"),
        e("div", { className: "esej-smjernice", style: { marginTop: 8 } },
          esej.smjernice.map((s, i) =>
            e("div", { key: i, className: "esej-smjernica" },
              e("div", { className: "esej-smjernica-br" }, i + 1),
              e("span", null, s)
            )
          )
        )
      ),
      /* Pisanje */
      e("div", { className: "esej-pisanje" },
        e("div", { className: "esej-pisanje-title" },
          "✏️ Tvoj esej",
          saved && e("span", { style: { fontSize: 11, color: "var(--green)", fontWeight: 600 } }, "✓ Automatski spremljeno"),
          e("span", { style: { marginLeft: "auto", fontSize: 12, color: "var(--muted)" } }, done ? "Ispit završen" : "Piši ovdje")
        ),
        /* Mini podsjetnik kriterija */
        e("div", {
          style: {
            background: "rgba(45,84,196,.05)", border: "1px solid rgba(45,84,196,.15)",
            borderRadius: "var(--r)", padding: "10px 14px", marginBottom: 12, fontSize: 12
          }
        },
          e("div", { style: { display: "flex", flexWrap: "wrap", gap: 8 } },
            [
              { l: "A", t: "Razumijevanje zadatka" },
              { l: "B", t: "Argumentacija + citati" },
              { l: "C", t: "Uvod / razrada / zaključak" },
              { l: "D", t: "Stil i rječnik" },
              { l: "E", t: "Pravopis i gramatika" },
            ].map(({ l, t }) =>
              e("div", { key: l, style: { display: "flex", alignItems: "center", gap: 5, color: "var(--muted)" } },
                e("span", {
                  style: {
                    width: 18, height: 18, borderRadius: "50%", background: "var(--blue-d)",
                    border: "1px solid rgba(45,84,196,.25)", color: "var(--blue)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    fontSize: 10, fontWeight: 700, flexShrink: 0
                  }
                }, l),
                e("span", null, t)
              )
            )
          )
        ),
        e("textarea", {
          className: "esej-ta",
          placeholder: "Ovdje piši školski esej. Svakako napiši uvod, razradu i zaključak.\n\nMinimalno " + esej.minRijeci + " riječi, maksimalno " + esej.maxRijeci + " riječi.",
          value: tekst,
          disabled: done,
          onChange: ev => { setSaved(false); setTekst(ev.target.value); }
        }),
        e("div", { className: "esej-wc" },
          e("span", { className: "esej-wc-count " + wcCls },
            wc + " / " + esej.minRijeci + "–" + esej.maxRijeci + " riječi " + (wcOk ? "✓" : wc > esej.maxRijeci ? "(previše)" : (wc > 0 ? "(premalo)" : ""))
          ),
          saved && e("span", { style: { fontSize: 11, color: "var(--green)", fontWeight: 600 } }, "✓ Automatski spremljeno"),
          e("span", { style: { fontSize: 11, color: "var(--muted)" } }, "Automatski se sprema")
        )
      ),
      /* AI Ocjena (PRO) */
      e("div", { className: "esej-ocjena-wrap" },
        e("div", { style: { padding: "16px 20px", borderBottom: "1px solid var(--bdr)", display: "flex", alignItems: "center", gap: 10 } },
          e("span", { style: { fontSize: 16 } }, "🤖"),
          e("span", { style: { fontFamily: "var(--fh)", fontSize: 15 } }, "AI ocjenjivanje"),
          e("span", { className: "esej-pro-badge", style: { marginLeft: 4 } }, "PRO"),
          e("span", { style: { marginLeft: "auto", fontSize: 12, color: aiLimitDostignut ? "var(--red)" : "var(--muted)" } },
            aiLimitDostignut
              ? "⛔ Dnevni limit dostignut"
              : aiPreostalo + " / " + ESEJ_AI_DNEVNI_LIMIT + " preostalo danas"
          )
        ),
        e("div", { style: { padding: "16px 20px" } },
          aiState === "idle" && e("div", null,
            e("p", { style: { fontSize: 13, color: "var(--muted)", marginBottom: 12 } },
              "AI profesor ocjenjuje esej prema NCVVO kriterijima — sadržaj, kompoziciju, stil i jezik."),
            aiLimitDostignut
              ? e("div", {
                style: {
                  background: "rgba(248,113,113,.06)", border: "1px solid rgba(248,113,113,.2)",
                  borderRadius: "var(--r)", padding: "14px 16px"
                }
              },
                e("div", { style: { fontSize: 14, fontWeight: 700, color: "var(--red)", marginBottom: 6 } }, "⛔ Dnevni limit dostignut"),
                e("div", { style: { fontSize: 13, color: "var(--muted)", lineHeight: 1.6 } },
                  "Možeš iskoristiti AI ocjenjivanje još ",
                  e("strong", { style: { color: "var(--text)" } }, ESEJ_AI_DNEVNI_LIMIT + " puta dnevno"),
                  ". Limit se resetira ponoći. Nastavi vježbati pisanje — AI ocjenu možeš dobiti sutra."
                )
              )
              : e("button", {
                className: "btn btn-gold",
                disabled: wc < 50,
                style: { opacity: wc < 50 ? .5 : 1 },
                onClick: () => isPro ? ocijeniEsej() : onPaywall && onPaywall("esej")
              },
                isPro ? "🤖 Ocijeni esej" : "🔒 AI ocjenjivanje (PRO)",
                isPro && aiPreostalo <= 1 && e("span", { style: { fontSize: 11, marginLeft: 6, opacity: .8 } }, "(zadnje ocjenjivanje danas)")
              )
          ),
          aiState === "loading" && e("div", { style: { textAlign: "center", padding: "24px 0", color: "var(--muted)" } },
            e("div", { style: { fontSize: 24, marginBottom: 8 } }, "⏳"),
            e("div", null, "AI profesor čita i ocjenjuje...")
          ),
          aiState === "error" && e("div", null,
            e("p", { style: { color: "var(--red)", marginBottom: 8 } }, aiError || "Greška pri ocjenjivanju."),
            e("button", { className: "btn btn-g", onClick: ocijeniEsej }, "Pokušaj ponovo")
          ),
          aiState === "done" && aiResult && e("div", null,
            /* Ukupna ocjena */
            e("div", { style: { display: "flex", alignItems: "center", gap: 20, marginBottom: 20, padding: "16px", background: "var(--s2)", borderRadius: "var(--rr)" } },
              e("div", { style: { textAlign: "center" } },
                e("div", { style: { fontFamily: "var(--fh)", fontSize: 52, lineHeight: 1, color: { 1: "var(--red)", 2: "#f97316", 3: "var(--gold)", 4: "#60a5fa", 5: "var(--green)" }[aiResult.ocjena] || "var(--gold)" } }, (aiResult.ocjena || "-")),
                e("div", { style: { fontSize: 11, color: "var(--muted)", marginTop: 2 } }, "Ocjena")
              ),
              e("div", { style: { flex: 1 } },
                e("div", { style: { fontSize: 28, fontWeight: 800, color: "var(--blue)", fontFamily: "var(--fh)", marginBottom: 4 } }, (aiResult.ukupno || 0) + " / 20"),
                e("div", { style: { height: 8, background: "var(--s3)", borderRadius: 99, overflow: "hidden" } },
                  e("div", { style: { height: "100%", width: ((aiResult.ukupno || 0) / 20 * 100) + "%", background: "var(--blue)", borderRadius: 99, transition: "width 1s ease" } })
                )
              )
            ),
            /* Razrada bodova */
            e("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 } },
              [["Sadržaj", aiResult.sadrzaj, 8, "var(--green)"], ["Kompozicija", aiResult.kompozicija, 4, "var(--gold)"],
              ["Stil", aiResult.stil, 4, "var(--blue)"], ["Jezik", aiResult.jezik, 4, "var(--teal)"]].map(([label, val, max, col]) =>
                e("div", { key: label, style: { background: "var(--s2)", borderRadius: "var(--r)", padding: "12px 14px" } },
                  e("div", { style: { fontSize: 11, color: "var(--muted)", marginBottom: 4 } }, label),
                  e("div", { style: { fontSize: 18, fontWeight: 700, color: col, fontFamily: "var(--fh)" } }, (val || 0) + " / " + max),
                  e("div", { style: { height: 4, background: "var(--s3)", borderRadius: 99, overflow: "hidden", marginTop: 4 } },
                    e("div", { style: { height: "100%", width: ((val || 0) / max * 100) + "%", background: col, borderRadius: 99 } })
                  )
                )
              )
            ),
            /* Komentar */
            aiResult.komentar && e("div", { style: { fontSize: 13, color: "var(--text)", lineHeight: 1.7, padding: "12px 16px", background: "var(--s2)", borderRadius: "var(--r)", marginBottom: 12 } },
              aiResult.komentar
            ),
            /* Pozitivno / poboljšati */
            e("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 } },
              e("div", { style: { background: "rgba(62,207,110,.06)", border: "1px solid rgba(62,207,110,.2)", borderRadius: "var(--r)", padding: "12px 14px" } },
                e("div", { style: { fontSize: 11, fontWeight: 700, color: "var(--green)", marginBottom: 8, letterSpacing: ".05em", textTransform: "uppercase" } }, "✓ Dobro"),
                (aiResult.pozitivno || []).map((p, i) => e("div", { key: i, style: { fontSize: 12, color: "var(--text)", marginBottom: 4 } }, p))
              ),
              e("div", { style: { background: "rgba(233,180,70,.06)", border: "1px solid var(--gold-b)", borderRadius: "var(--r)", padding: "12px 14px" } },
                e("div", { style: { fontSize: 11, fontWeight: 700, color: "var(--gold)", marginBottom: 8, letterSpacing: ".05em", textTransform: "uppercase" } }, "↑ Poboljšati"),
                (aiResult.poboljsati || []).map((p, i) => e("div", { key: i, style: { fontSize: 12, color: "var(--text)", marginBottom: 4 } }, p))
              )
            ),
            e("button", { className: "btn btn-g", style: { fontSize: 12 }, onClick: () => { setAiState("idle"); setAiResult(null); } }, "🔄 Ocijeni ponovo")
          )
        )
      ),
      /* Besplatna povratna informacija — svima, bez API troška */
      e(SamoprocjenaPanel, { smjernice: esej.smjernice, modelKljuc: esej.ocjenaKljuc, canSeeKey: canSeeKljuc })
    )
  );
}

// ── Popis sažetaka ──
function SazetakListScreen({ onBack, onSazetak }) {
  const sazeci = Object.values(SAZECI).sort((a, b) => b.year - a.year || (a.season === "ljeto" ? -1 : 1));
  return e(Fragment, null,
    e("div", { className: "nav" },
      e("button", { className: "btn btn-g", style: { fontSize: 13, padding: "6px 12px" }, onClick: onBack }, "← Natrag"),
      e("span", { className: "ntitle" }, "📝 Pisanje sažetka"),
      e("span", { className: "nbadge" }, sazeci.length + " rok" + (sazeci.length === 1 ? "" : "a"))
    ),
    e("div", { style: { maxWidth: 720, margin: "0 auto", padding: "24px 20px 80px" } },
      e("div", { style: { fontFamily: "var(--fh)", fontSize: 26, marginBottom: 6 } }, "Pisanje sažetka"),
      e("div", { style: { fontSize: 14, color: "var(--muted)", marginBottom: 24, lineHeight: 1.6 } },
        "Ispit traje 80 minuta. Sažimaš zadani neknjiževni tekst u 200–250 riječi prateći smjernice. Dostupno za ispite od 2023. godine."),
      e("div", { style: { background: "var(--s1)", border: "1px solid var(--bdr)", borderRadius: "var(--rr)", overflow: "hidden", marginBottom: 24 } },
        sazeci.map((s, i) =>
          e("div", { key: s.key, className: "esej-item", onClick: () => onSazetak(s.key) },
            e("div", { className: "esej-item-year" }, s.year),
            e("div", { className: "esej-item-info" },
              e("div", { className: "esej-item-label" },
                s.year + ". — " + (s.season === "ljeto" ? "Ljetni" : "Jesenski") + " rok",
                e("span", {
                  style: {
                    marginLeft: 6, fontSize: 10, fontWeight: 700, padding: "1px 6px", borderRadius: 99,
                    background: "rgba(100,210,100,.13)", border: "1px solid rgba(100,210,100,.3)",
                    color: "#6dca6d"
                  }
                }, "Jedinstven ispit")
              ),
              e("div", { className: "esej-item-tema" }, s.tekstNaslov),
              e("div", { style: { fontSize: 11, color: "var(--muted)", marginTop: 3 } }, "⏱ 80 min · 200–250 riječi")
            ),
            e("span", { className: "esej-item-arrow" }, "→")
          )
        )
      ),
      e("div", { style: { background: "rgba(100,210,100,.06)", border: "1px solid rgba(100,210,100,.2)", borderRadius: "var(--r)", padding: "14px 18px", fontSize: 13, color: "var(--muted)", lineHeight: 1.7 } },
        "📝 Pisanje sažetka ispituje sposobnost razumijevanja i sažimanja neknjiževnog teksta. AI ocjenjivanje daje povratnu informaciju o sadržaju, jeziku i kompoziciji."
      )
    )
  );
}

// ── Pisanje sažetka ──
function SazetakMode({ sazetakKey, onBack, isPro, onPaywall, userAccess }) {
  const saz = SAZECI[sazetakKey];
  // SAZECI trenutačno nemaju model-ključ, ali gating se prenosi da ključ ne procuri
  // ako se podatak doda.
  const canSeeKljuc = canSeeDiscereAnalysis(userAccess);
  const lsKey = "discere_sazetak_" + sazetakKey;
  const [tekst, setTekst] = useState(() => {
    try { return JSON.parse(localStorage.getItem(lsKey) || "null") || ""; }
    catch (e) { return ""; }
  });
  const [secLeft, setSecLeft] = useState(saz.trajanje * 60);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const [aiState, setAiState] = useState("idle");
  const [aiResult, setAiResult] = useState(null);
  const [aiError, setAiError] = useState("");
  const [aiUsage, setAiUsage] = useState(() => getEsejAiUsage());

  const aiPreostalo = ESEJ_AI_DNEVNI_LIMIT - (aiUsage.count || 0);
  const aiLimitDostignut = aiPreostalo <= 0;

  const wc = tekst.trim() ? tekst.trim().split(/\s+/).filter(Boolean).length : 0;
  const minOk = wc >= saz.minRijeci;
  const maxOk = wc <= saz.maxRijeci;

  useEffect(() => {
    if (!tekst) return;
    const t = setTimeout(() => {
      lsSave(lsKey, JSON.stringify(tekst));
    }, 800);
    return () => clearTimeout(t);
  }, [tekst, lsKey]);

  useEffect(() => {
    if (!started || done) return;
    const t = setInterval(() => {
      setSecLeft(s => {
        if (s <= 1) { clearInterval(t); setDone(true); return 0; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [started, done]);

  async function fetchAI() {
    if (!tekst.trim() || aiState === "loading") return;
    if (aiLimitDostignut) { setAiState("idle"); return; }
    setAiState("loading"); setAiResult(null); setAiError("");
    const smjerniceStr = saz.smjernice.map((s, i) => (i + 1) + ". " + s).join("\n");
    const prompt = `Ti si iskusni profesor hrvatskog jezika koji ocjenjuje sažetak za državnu maturu.

POLAZNI TEKST:
${saz.tekstNaslov}

${(saz.tekst || "").substring(0, 5000)}

SMJERNICE ZA SAŽETAK:
${smjerniceStr}

SAŽETAK UČENIKA (${wc} riječi):
${tekst}

ZAHTJEVI ZA OCJENU (maks. 10 bodova):
- Sadržaj: jesu li obuhvaćene sve smjernice (opći podaci, namjena, tema, osnovne misli, autorov stav) — 0–5 bodova
- Jezična točnost: gramatika, pravopis, interpunkcija — 0–3 boda
- Kompozicija i stil: vlastitim riječima, jasnoća, kohezija — 0–2 boda

Duljina: ${wc} riječi (zahtjev: ${saz.minRijeci}–${saz.maxRijeci} — ${!minOk ? "PREKRATKO" : !maxOk ? "PREDUGO" : "OK"})

Odgovori ISKLJUČIVO u JSON formatu:
{
  "ukupno": <0-10>,
  "sadrzaj": <0-5>,
  "jezik": <0-3>,
  "kompozicija": <0-2>,
  "duljina_ok": ${minOk && maxOk},
  "pohvala": "<jedna rečenica što je dobro>",
  "poboljsanje": "<jedna rečenica što popraviti>",
  "komentar": "<2-3 rečenice detaljnog komentara>"
}`;
    const r = await postAi(prompt, { maxTokens: 800 });
    if (!r.ok) { setAiError(r.error || "Greška pri ocjenjivanju."); setAiState("error"); return; }
    try {
      const clean = r.text.split("```json").join("").split("```").join("").trim();
      setAiResult(JSON.parse(clean));
      setAiState("done");
      setAiUsage(u => ({ ...u, count: (u.count || 0) + 1 }));
      incEsejAiUsage();
    } catch (e) { setAiError("AI je vratio neočekivani format. Pokušaj ponovo."); setAiState("error"); }
  }

  const mm = String(Math.floor(secLeft / 60)).padStart(2, "0");
  const ss = String(secLeft % 60).padStart(2, "0");
  const timerColor = secLeft < 120 ? "var(--red)" : secLeft < 300 ? "var(--gold)" : "var(--green)";

  if (!started) return e("div", { style: { maxWidth: 720, margin: "0 auto", padding: "40px 20px" } },
    e("button", { className: "btn btn-g", style: { fontSize: 13, padding: "6px 12px", marginBottom: 24 }, onClick: onBack }, "← Natrag"),
    e("div", { className: "esej-hero" },
      e("div", { className: "esej-hero-label" }, "📝 Sažetak · " + saz.year + ". — " + (saz.season === "ljeto" ? "Ljetni" : "Jesenski") + " rok"),
      e("h2", { className: "esej-hero-title" }, saz.tekstNaslov),
      e("div", { style: { display: "flex", gap: 16, flexWrap: "wrap", marginTop: 12 } },
        e("span", { style: { fontSize: 13, color: "var(--muted)" } }, "⏱ " + saz.trajanje + " min"),
        e("span", { style: { fontSize: 13, color: "var(--muted)" } }, "📏 " + saz.minRijeci + "–" + saz.maxRijeci + " riječi")
      )
    ),
    e("div", { style: { background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--r)", padding: "20px", marginBottom: 20 } },
      e("div", { style: { fontWeight: 700, marginBottom: 10, fontSize: 14 } }, "📄 Polazni tekst"),
      e("div", { style: { fontSize: 13, lineHeight: 1.7, whiteSpace: "pre-wrap", color: "var(--text)" } }, saz.tekst)
    ),
    e("div", { style: { background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--r)", padding: "20px", marginBottom: 24 } },
      e("div", { style: { fontWeight: 700, marginBottom: 10, fontSize: 14 } }, "📋 Smjernice za pisanje sažetka"),
      e("ol", { style: { margin: 0, paddingLeft: 20, fontSize: 13, lineHeight: 1.8 } },
        saz.smjernice.map((s, i) => e("li", { key: i }, s))
      )
    ),
    e("button", {
      className: "btn btn-p", style: { width: "100%", padding: "14px", fontSize: 16, borderRadius: "var(--r)" },
      onClick: () => setStarted(true)
    }, "▶ Počni pisati (" + saz.trajanje + " min)")
  );

  return e("div", { style: { maxWidth: 720, margin: "0 auto", padding: "16px 20px" } },
    e("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 } },
      e("button", { className: "btn btn-g", style: { fontSize: 13, padding: "6px 12px" }, onClick: onBack }, "← Natrag"),
      e("div", { style: { display: "flex", gap: 12, alignItems: "center" } },
        e("span", { style: { fontFamily: "monospace", fontSize: 18, fontWeight: 700, color: done ? "var(--muted)" : timerColor } },
          done ? "KRAJ" : mm + ":" + ss),
        e("span", { style: { fontSize: 12, color: wc < saz.minRijeci ? "var(--red)" : wc > saz.maxRijeci ? "var(--gold)" : "var(--green)", fontWeight: 700 } },
          wc + " rij.")
      )
    ),
    e("div", { style: { background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--r)", padding: "14px", marginBottom: 12, fontSize: 12, color: "var(--muted)", lineHeight: 1.6 } },
      e("strong", null, saz.tekstNaslov), " · ", saz.minRijeci, "–", saz.maxRijeci, " riječi · sažmi vlastitim riječima"
    ),
    e("textarea", {
      value: tekst,
      onChange: ev => !done && setTekst(ev.target.value),
      disabled: done,
      placeholder: "Ovdje piši sažetak...",
      style: {
        width: "100%", minHeight: 280, padding: 14, fontSize: 14, lineHeight: 1.7,
        background: "var(--card)", color: "var(--text)", border: "1px solid var(--border)",
        borderRadius: "var(--r)", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box"
      }
    }),
    !done && e("div", { style: { display: "flex", justifyContent: "flex-end", marginTop: 8 } },
      e("button", {
        className: "btn btn-p", style: { padding: "10px 24px" },
        onClick: () => setDone(true)
      }, "✓ Predaj sažetak")
    ),
    done && e("div", { style: { marginTop: 16 } },
      aiState === "idle" && (aiLimitDostignut
        ? e("div", {
          style: {
            background: "rgba(248,113,113,.06)", border: "1px solid rgba(248,113,113,.2)",
            borderRadius: "var(--r)", padding: "14px 16px", textAlign: "center"
          }
        },
          e("div", { style: { fontSize: 14, fontWeight: 700, color: "var(--red)", marginBottom: 4 } }, "⛔ Dnevni limit dostignut"),
          e("div", { style: { fontSize: 13, color: "var(--muted)" } },
            "Možeš iskoristiti AI ocjenjivanje još ",
            e("strong", null, ESEJ_AI_DNEVNI_LIMIT + " puta dnevno"),
            ". Limit se resetira ponoći."
          )
        )
        : e("button", {
          className: "btn btn-p", style: { width: "100%", padding: 12, fontSize: 15, borderRadius: "var(--r)" },
          onClick: () => isPro ? fetchAI() : onPaywall && onPaywall("sazetak")
        },
          isPro ? "🤖 Ocijeni s AI" : "🔒 AI ocjenjivanje (PRO)",
          isPro && aiPreostalo <= 1 && e("span", { style: { fontSize: 11, marginLeft: 6, opacity: .8 } }, "(zadnje ocjenjivanje danas)")
        )
      ),
      aiState === "loading" && e("div", { style: { textAlign: "center", padding: 20, color: "var(--muted)" } },
        e("div", { className: "spinner", style: { margin: "0 auto 8px" } }),
        "Ocjenjujem sažetak..."
      ),
      aiState === "error" && e("div", { style: { textAlign: "center", padding: 12 } },
        e("div", { style: { color: "var(--red)", marginBottom: 8 } }, aiError || "Greška pri ocjenjivanju."),
        e("button", { className: "btn btn-g", style: { fontSize: 13 }, onClick: fetchAI }, "Pokušaj ponovo")
      ),
      aiState === "done" && aiResult && e("div", { style: { background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--r)", padding: 20, marginTop: 8 } },
        e("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 } },
          e("span", { style: { fontSize: 16, fontWeight: 700 } }, "Ocjena AI profesora"),
          e("span", { style: { fontSize: 28, fontWeight: 800, color: aiResult.ukupno >= 8 ? "var(--green)" : aiResult.ukupno >= 5 ? "var(--gold)" : "var(--red)" } },
            aiResult.ukupno + "/10")
        ),
        e("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 } },
          e("div", { style: { flex: 1, minWidth: 120, background: "var(--bg)", borderRadius: 8, padding: "10px 14px" } },
            e("div", { style: { fontSize: 10, color: "var(--muted)", marginBottom: 2 } }, "SADRŽAJ"),
            e("div", { style: { fontSize: 20, fontWeight: 700 } }, aiResult.sadrzaj + "/5")
          ),
          e("div", { style: { flex: 1, minWidth: 120, background: "var(--bg)", borderRadius: 8, padding: "10px 14px" } },
            e("div", { style: { fontSize: 10, color: "var(--muted)", marginBottom: 2 } }, "JEZIK"),
            e("div", { style: { fontSize: 20, fontWeight: 700 } }, aiResult.jezik + "/3")
          ),
          e("div", { style: { flex: 1, minWidth: 120, background: "var(--bg)", borderRadius: 8, padding: "10px 14px" } },
            e("div", { style: { fontSize: 10, color: "var(--muted)", marginBottom: 2 } }, "KOMPOZICIJA"),
            e("div", { style: { fontSize: 20, fontWeight: 700 } }, aiResult.kompozicija + "/2")
          )
        ),
        !aiResult.duljina_ok && e("div", { style: { background: "rgba(248,113,113,.1)", border: "1px solid rgba(248,113,113,.2)", borderRadius: 8, padding: "10px 14px", marginBottom: 12, fontSize: 13, color: "var(--red)" } },
          "⚠️ Duljina sažetka (" + wc + " riječi) nije u zadanom rasponu " + saz.minRijeci + "–" + saz.maxRijeci + " riječi."
        ),
        aiResult.pohvala && e("div", { style: { marginBottom: 8, fontSize: 14 } },
          e("span", { style: { fontSize: 13, fontWeight: 700, color: "var(--green)" } }, "> "), aiResult.pohvala
        ),
        aiResult.poboljsanje && e("div", { style: { marginBottom: 12, fontSize: 14 } },
          e("span", { style: { fontSize: 13, fontWeight: 700, color: "var(--gold)" } }, "> "), aiResult.poboljsanje
        ),
        aiResult.komentar && e("div", { style: { fontSize: 13, color: "var(--muted)", lineHeight: 1.7, borderTop: "1px solid var(--border)", paddingTop: 12 } },
          aiResult.komentar
        ),
        e("button", {
          className: "btn btn-g", style: { marginTop: 12, fontSize: 12 },
          onClick: () => { setAiState("idle"); setAiResult(null); }
        }, "🔄 Ocijeni ponovo")
      )
    ),
    /* Besplatna povratna informacija — svima, bez API troška */
    e(SamoprocjenaPanel, { smjernice: saz.smjernice, modelKljuc: saz.ocjenaKljuc || null, canSeeKey: canSeeKljuc })
  );
}

export { EssayListScreen, EssayMode, SazetakListScreen, SazetakMode };
