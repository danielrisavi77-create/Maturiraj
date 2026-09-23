"use client";
// app/discere/sociologija/SociologijaClient.jsx
// Full-screen host for the self-contained sociology simulator (public/sim/sociologija.html),
// brought to MAT/HRV parity via a postMessage bridge (same protocol family as the math engine):
//
//   iframe → parent : DISCERE_READY (handshake), DISCERE_SAVE {key,value} (synced DS keys),
//                     DISCERE_NEED_EXAM {key,mode} (traži ispit; key "*" = cijela banka),
//                     DISCERE_SUBMIT {examKey,answers,qTimes,examMode,attemptId} (predaja),
//                     DISCERE_RESULT {result} (completed real exam),
//                     DISCERE_UPGRADE {from,plan} (locked practice/feature/results block)
//   parent → iframe : DISCERE_HYDRATE {state} (restore from cloud, newest-wins), DISCERE_CONFIG
//                     {tier,isPro,allowed,freeExam,lockResults} (tier-gate), DISCERE_BOOT,
//                     DISCERE_EXAMS {key,exam} / DISCERE_EXAM_ERROR {key,mode,error,status},
//                     DISCERE_EXAMS_DONE {delivered,total} (kraj skupnog dohvata),
//                     DISCERE_GRADE {attemptId,result} / DISCERE_GRADE_ERROR {attemptId,…}
//
// ADR-001, Faza 2 — MREŽU DRŽI ISKLJUČIVO OVA KOMPONENTA (ODLUKA 7).
// Engine u iframeu nema nijedan `fetch`: ispit dolazi s GET /api/sim/soc/exam/<key>,
// predaja ide na POST /api/sim/soc/grade, oboje odavde. Razlog nije CSP (iframe je
// same-origin, pa bi dohvat prošao) nego granica povjerenja: statički asset iz
// public/ ne smije biti mjesto na kojem se odlučuje što se s poslužitelja traži.
//
// Persistence (no new migration — same tables as math, new subject):
//   • discere_sim_state  (subject='soc')  ← debounced blob of the engine's localStorage
//   • sim_progress       (subject='soc')  ← redak po dovršenom ispitu; u pravilu ga piše
//     SAMA ocjenjivačka ruta (ODLUKA 2). Preglednik upisuje samo pokušaj koji je ruta
//     odbila, a engine ga je s vlastitim ključevima izračunao lokalno (serverSaved === false).
// Tier gate: ispitni mod (pravi ispiti s timerom) besplatan je za sve prijavljene
// korisnike (freeExam). Free dodatno dobiva: ocjenu, postotak, bodove i XP, ali mu je
// razrada rezultata zaključana (lockResults), a vježbanje je ograničeno na demo ispite
// (allowed). Standard/pro → sve otključano (allowed=null, lockResults=false).
// DISCERE_CONFIG NIJE jednokratna poruka. Plan se razrješava asinkrono (useAuth →
// fetchPlanStatus), a iframe se javi prije toga, pa se konfiguracija šalje pri
// SVAKOJ promjeni tiera — i prema već bootanom engineu, koji je bezuvjetno
// prepisuje i osvježi ekrane koji su već na zaslonu. DISCERE_BOOT pak čeka
// razriješen tier: engine bootan kao 'free' bio bi to do kraja sesije.
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/hooks/useAuth";
import { loadSimState, saveSimState } from "@/lib/discere-sim-state";
import { saveSimResult } from "@/lib/sim-progress";
// Free demo za VJEŽBANJE: newest year, both rokovi. Ispitni mod je besplatan za
// sve ispite. Popis VIŠE NIJE ovdje: po ADR-001 točki 7 free izuzetak živi na
// točno jednom mjestu, pa ga i ovaj klijent (DISCERE_CONFIG.allowed) i
// poslužiteljski adapter (allowedExamKeys → soc) čitaju iz istog modula.
import { SOC_FREE_DEMO } from "@/lib/exam-secrets/free-policy";
// Lagani indeks (ključ, godina, rok, broj pitanja) — bez ijednog pitanja, pa ni
// ključa. Engine isti popis nosi inline kao SOC_EXAM_META; ovdje je allowlista:
// dohvaća se točno ono što u indeksu postoji, a ne ono što iframe zatraži.
import socExamsIndex from "@/lib/data/soc/exams-index.json";
// Strop čekanja na mrežu. Modul je predmetno neutralan unatoč mapi u kojoj živi
// (uvela ga je Faza 1) — vlastita kopija za sociologiju značila bi dvije verzije
// istog `AbortSignal.timeout` fallbacka.
import { isAbortError, timeoutSignal } from "@/lib/engleski-simulator/fetchTimeout";

const REAL_EXAM = /^\d{4}_(ljeto|jesen)$/;

/** Ključevi ispita koji uopće postoje — sve izvan ovoga je 404 prije mreže. */
const EXAM_KEYS = socExamsIndex.map((entry) => entry.key);
const EXAM_KEY_SET = new Set(EXAM_KEYS);

/** Strop za jedan dohvat ispita, odnosno za jednu predaju (vidi fetchTimeout.js). */
const EXAM_FETCH_TIMEOUT_MS = 20000;
const GRADE_TIMEOUT_MS = 30000;

/**
 * Koliko ispita dohvaćamo usporedno kad plaćeni ekran treba cijelu banku
 * (Pregled, Filter, Flashcards, SRS, Bookmarci, Dnevni izazov, Virtualni ispit).
 * Isto kao examsLoader.js: 32 zahtjeva odjednom nisu brži, samo krhkiji.
 */
const BULK_CONCURRENCY = 6;

/**
 * Način rada pri skupnom dohvatu. Namjerno 'exam', dakle najuži mogući payload:
 * skupni dohvat povlači SVE ispite banke, a korisnik nijedan nije otvorio.
 */
const BULK_MODE = "exam";

function normalizeMode(mode) {
  return mode === "practice" ? "practice" : "exam";
}

/** Poruke za korisnika; sve na hrvatskom jer je ovo tekst u sučelju. */
function examErrorMessage(status) {
  if (status === 401) return "Sesija je istekla. Prijavi se pa pokušaj ponovno.";
  if (status === 403) return "Ovaj sadržaj dolazi sa Standard planom.";
  if (status === 404) return "Ovaj ispit nije dostupan.";
  if (status === 429) return "Previše dohvata ispita u kratkom vremenu. Pokušaj ponovno malo kasnije.";
  return "Dohvat ispita nije uspio. Provjeri vezu pa pokušaj ponovno.";
}

function gradeErrorMessage(status) {
  if (status === 401) return "Sesija je istekla. Prijavi se pa ponovno predaj — odgovori su sačuvani.";
  if (status === 429) return "Previše predaja u kratkom vremenu. Pokušaj ponovno malo kasnije.";
  if (status === 404) return "Ovaj ispit nije dostupan za ocjenjivanje.";
  return "Slanje rezultata nije uspjelo. Odgovori su sačuvani — pokušaj ponovno.";
}

export default function SociologijaClient() {
  const router = useRouter();
  const { user, isPro, isPaid, loading: authLoading, planResolved } = useAuth();
  // `isPaid`/`isPro` kreću od 'free' i plan se razrješava mrežom (fetchPlanStatus),
  // dok PlanGate djecu pušta čim padne `loading` — a kod sesije u localStorageu to
  // je odmah. Lokalni iframe tu utrku redovito dobiva, pa bi DISCERE_CONFIG poslan
  // na prvi READY plaćenom korisniku zaključao rezultate do kraja sesije (READY se
  // nakon boota više ne šalje). Zato se čeka razriješen tier; zastavice koje hook
  // možda ne izlaže (stariji mock, druga ugradnja) znače „nema što čekati“.
  const tierResolved = authLoading !== true && planResolved !== false;
  const iframeRef = useRef(null);
  const bufferRef = useRef(null); // accumulated DS blob for cloud upsert
  const saveTimer = useRef(null);
  // Je li iframe ikad javio READY. Preživljava poništavanje efekta (promjena
  // tiera), jer engine READY nakon boota više ne ponavlja — a upravo tada mu
  // treba poslati ispravljeni CONFIG.
  const readyRef = useRef(false);
  // Hidracija ide TOČNO JEDNOM po montiranju: engine READY ponavlja svakih 600 ms
  // dok ne dobije BOOT, pa bi inače svaki ponovljeni READY značio novo čitanje
  // stanja s poslužitelja. Promise je i redoslijed: CONFIG/BOOT ne smiju otići
  // prije HYDRATE-a (engine stanje primjenjuje samo dok nije bootan).
  const hydrateRef = useRef(null);
  // Keš ispita po `key|mode`. Mod je DIO ključa: isti ispit u vježbanju smije
  // nositi ključeve za prvih FREE_LIMIT pitanja, a u ispitnom modu nijedan — kad
  // bi se keširani payload iz vježbanja vratio u ispitnom modu, engine bi po
  // prekidaču `qs.some(q => q.sol)` pomislio da smije ocjenjivati sam.
  const examCache = useRef(new Map());
  // attemptId → Promise: dvostruki klik na „Predaj“ ne smije postati dva POST-a.
  const gradeInFlight = useRef(new Map());

  useEffect(() => {
    const tier = isPro ? "pro" : isPaid ? "standard" : "free";
    const allowed = tier === "free" ? SOC_FREE_DEMO : null; // null ⇒ all unlocked (vježbanje)
    const paid = tier !== "free";
    const cache = examCache.current;
    const inFlight = gradeInFlight.current;
    let disposed = false;

    // NAMJERNO BEZ `disposed` PROVJERE. Efekt se poništava i pri običnoj promjeni
    // tiera ili korisnika (npr. odjava), a ne samo pri odmontiranju — a odgovor
    // koji je u tom trenutku u letu MORA doći do enginea: predaju je poslužitelj
    // već ocijenio, upisao u sim_progress i naplatio iz dnevnog budžeta, pa bi
    // progutana poruka korisniku slagala „Slanje je predugo trajalo“. Prava
    // granica je sam iframe: React pri odmontiranju postavlja ref na null, pa
    // `contentWindow` tada ne postoji i poruka nema kamo otići.
    function post(msg) {
      const win = iframeRef.current && iframeRef.current.contentWindow;
      if (win) win.postMessage(msg, window.location.origin);
    }

    /* ── dohvat ispita ────────────────────────────────────────────────────── */

    async function fetchExam(key, mode) {
      let res;
      try {
        res = await fetch(`/api/sim/soc/exam/${encodeURIComponent(key)}?mode=${mode}`, {
          credentials: "same-origin",
          headers: { Accept: "application/json" },
          // Bez stropa zahtjev nad izgubljenom vezom visi zauvijek, pa ekran
          // ostaje na „Učitavamo…“ bez ijednog puta prema ponovnom pokušaju.
          signal: timeoutSignal(EXAM_FETCH_TIMEOUT_MS),
        });
      } catch (err) {
        const message = isAbortError(err) ? "Dohvat ispita je predugo trajao." : examErrorMessage(0);
        throw Object.assign(new Error(message), { status: 0 });
      }
      if (!res.ok) throw Object.assign(new Error(examErrorMessage(res.status)), { status: res.status });
      const payload = await res.json().catch(() => null);
      if (!payload || !Array.isArray(payload.qs)) {
        throw Object.assign(new Error(examErrorMessage(0)), { status: 0 });
      }
      return payload;
    }

    /** Jedan ispit; istovremeni zahtjevi za isti (key, mode) dijele promise. */
    function loadExam(key, mode) {
      const cacheKey = `${key}|${mode}`;
      const hit = cache.get(cacheKey);
      if (hit) return hit;
      const started = fetchExam(key, mode).catch((err) => {
        // Greška se propagira, ali se keš čisti da je ponovni pokušaj moguć.
        cache.delete(cacheKey);
        throw err;
      });
      cache.set(cacheKey, started);
      return started;
    }

    /**
     * Skupni dohvat cijele banke — SAMO za plaćeni tier. Semantika je
     * `allSettled`: jedan pali zahtjev ne smije srušiti ekran na kojem je 31
     * ispit uredno stigao. Svaki ispit se šalje čim stigne, pa se ekran puni
     * postupno umjesto da čeka najsporiji.
     */
    async function loadAllExams() {
      let cursor = 0;
      let delivered = 0;
      const workers = Array.from({ length: Math.min(BULK_CONCURRENCY, EXAM_KEYS.length) }, async () => {
        for (;;) {
          const index = cursor++;
          if (index >= EXAM_KEYS.length || disposed) return;
          const key = EXAM_KEYS[index];
          try {
            const exam = await loadExam(key, BULK_MODE);
            delivered += 1;
            post({ type: "DISCERE_EXAMS", key, exam });
          } catch {
            // Namjerno progutano: ekran se otvara s onim što je stiglo. Koliko
            // ih je stiglo javlja DISCERE_EXAMS_DONE, pa engine razlikuje
            // „ništa nije stiglo“ (greška) od „nedostaje nekoliko“ (radi dalje).
          }
        }
      });
      await Promise.all(workers);
      return delivered;
    }

    async function handleNeedExam(key, rawMode) {
      const mode = normalizeMode(rawMode);

      if (key === "*") {
        // ODLUKA 4: free NIKAD ne radi masovni dohvat banke. Ekrani koji je traže
        // za njega su zaključani (socFeatureGate stoji prije zahtjeva), pa je ovo
        // druga brava na istim vratima — ne jedina.
        if (!paid) {
          post({ type: "DISCERE_EXAM_ERROR", key, mode, status: 403, error: examErrorMessage(403) });
          return;
        }
        const delivered = await loadAllExams();
        post({ type: "DISCERE_EXAMS_DONE", key: "*", mode, delivered, total: EXAM_KEYS.length });
        return;
      }

      if (typeof key !== "string" || !EXAM_KEY_SET.has(key)) {
        post({ type: "DISCERE_EXAM_ERROR", key, mode, status: 404, error: examErrorMessage(404) });
        return;
      }

      try {
        const exam = await loadExam(key, mode);
        post({ type: "DISCERE_EXAMS", key, exam });
      } catch (err) {
        post({
          type: "DISCERE_EXAM_ERROR",
          key,
          mode,
          status: err?.status || 0,
          error: err?.message || examErrorMessage(0),
        });
      }
    }

    /* ── predaja na ocjenjivanje ──────────────────────────────────────────── */

    async function postGrade(body) {
      let res;
      try {
        res = await fetch("/api/sim/soc/grade", {
          method: "POST",
          credentials: "same-origin",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(body),
          signal: timeoutSignal(GRADE_TIMEOUT_MS),
        });
      } catch (err) {
        const message = isAbortError(err) ? "Slanje je predugo trajalo." : gradeErrorMessage(0);
        throw Object.assign(new Error(message), { status: 0, retryAfterSec: 0 });
      }
      const payload = await res.json().catch(() => null);
      if (!res.ok) {
        const retryAfter = Number(res.headers?.get?.("Retry-After"));
        throw Object.assign(new Error(payload?.error || gradeErrorMessage(res.status)), {
          status: res.status,
          // 429 dolazi u dvije vrste: razmak od 60 s (engine odbroji i ponovi s
          // ISTIM attemptId) i dnevni budžet (sati — tada je jedini pošten
          // odgovor iskrena poruka).
          retryAfterSec: Number.isFinite(retryAfter) && retryAfter > 0 ? Math.ceil(retryAfter) : 0,
        });
      }
      // 200 bez upotrebljivog tijela nije uspjeh: engine bi ostao na „Ocjenjujemo…“
      // bez ijedne poruke i bez puta prema ponovnom pokušaju.
      if (!payload || typeof payload !== "object") {
        throw Object.assign(new Error(gradeErrorMessage(0)), { status: 0, retryAfterSec: 0 });
      }
      return payload;
    }

    async function handleSubmit(d) {
      const examKey = typeof d.examKey === "string" ? d.examKey : "";
      const attemptId = typeof d.attemptId === "string" ? d.attemptId : "";
      if (!EXAM_KEY_SET.has(examKey) || !attemptId) {
        post({
          type: "DISCERE_GRADE_ERROR",
          attemptId,
          examKey,
          status: 400,
          retryAfterSec: 0,
          error: gradeErrorMessage(404),
        });
        return;
      }

      const body = {
        examKey,
        answers: d.answers && typeof d.answers === "object" ? d.answers : {},
        qTimes: d.qTimes && typeof d.qTimes === "object" ? d.qTimes : {},
        examMode: !!d.examMode,
        attemptId,
      };
      if (Number.isInteger(d.durationSec) && d.durationSec >= 0) body.durationSec = d.durationSec;

      // Isti attemptId u letu dijeli jedan zahtjev; ponovni pokušaj nakon greške
      // ide ponovno na mrežu (ruta ga po otisku prepozna kao istu predaju i ne
      // potroši ni razmak ni dnevni budžet).
      let request = inFlight.get(attemptId);
      if (!request) {
        request = postGrade(body);
        inFlight.set(attemptId, request);
        request.then(() => inFlight.delete(attemptId), () => inFlight.delete(attemptId));
      }

      try {
        const result = await request;
        post({ type: "DISCERE_GRADE", attemptId, examKey, result });
      } catch (err) {
        post({
          type: "DISCERE_GRADE_ERROR",
          attemptId,
          examKey,
          status: err?.status || 0,
          retryAfterSec: err?.retryAfterSec || 0,
          error: err?.message || gradeErrorMessage(0),
        });
      }
    }

    /* ── handshake i ostatak mosta ────────────────────────────────────────── */

    /** Stanje s poslužitelja — jednom po montiranju, ma koliko READY-ja stiglo. */
    function hydrate() {
      if (!hydrateRef.current) {
        hydrateRef.current = (async () => {
          let state = {};
          try { state = (await loadSimState("soc")) || {}; } catch { state = {}; }
          bufferRef.current = { ...state };
          post({ type: "DISCERE_HYDRATE", state });
        })();
      }
      return hydrateRef.current;
    }

    /**
     * Tier-gate i pokretanje enginea. Dok se tier ne zna, NE šalje se ništa:
     * engine na CONFIG gasi ponavljanje READY-ja, pa bi ga prerani free-CONFIG
     * ostavio na 'free' sve do sigurnosnog boota. Kad se tier razriješi, efekt
     * se ponovno postavi i ovo ode — i prema već bootanom engineu, koji CONFIG
     * bezuvjetno prepisuje i osvježava zaključane ekrane (soc-bridge-change).
     */
    function sendConfigAndBoot() {
      if (!tierResolved) return;
      post({
        type: "DISCERE_CONFIG",
        tier,
        isPro: tier === "pro",
        allowed,
        freeExam: true,
        lockResults: tier === "free",
      });
      // Ponovljeni BOOT je bezopasan (engine se pokreće točno jednom); kad je READY
      // stigao prije razriješenog tiera, ovo je jedini put do pokretanja.
      post({ type: "DISCERE_BOOT" });
    }

    async function handshake() {
      readyRef.current = true;
      await hydrate();
      sendConfigAndBoot();
    }

    function onMsg(ev) {
      const frame = iframeRef.current && iframeRef.current.contentWindow;
      if (!frame || ev.source !== frame) return;
      const d = ev.data || {};
      if (!d || !d.type) return;

      if (d.type === "DISCERE_READY") { handshake(); return; }

      if (d.type === "DISCERE_NEED_EXAM") { void handleNeedExam(d.key, d.mode); return; }

      if (d.type === "DISCERE_SUBMIT") { void handleSubmit(d); return; }

      if (d.type === "DISCERE_UPGRADE") {
        const from = d.from || "discere";
        const plan = d.plan || "standard";
        try { router.push("/pro?from=" + encodeURIComponent(from) + "&plan=" + encodeURIComponent(plan)); } catch {}
        return;
      }

      if (d.type === "DISCERE_SAVE") {
        if (!bufferRef.current) bufferRef.current = {};
        if (d.value == null) delete bufferRef.current[d.key];
        else bufferRef.current[d.key] = d.value;
        bufferRef.current._savedAt = String(Date.now());
        clearTimeout(saveTimer.current);
        saveTimer.current = setTimeout(() => {
          saveSimState({ ...bufferRef.current }, "soc");
        }, 1200);
        return;
      }

      if (d.type === "DISCERE_RESULT" && d.result && REAL_EXAM.test(d.result.examKey)) {
        // Redak u sim_progress u pravilu piše SAMA ocjenjivačka ruta (ODLUKA 2),
        // koja je rezultat i izračunala — klijentov pct/cor se ne uzima na vjeru.
        // Iznimka je pokušaj koji je ruta odbila (mreža, 429), a engine ga je s
        // vlastitim ključevima izračunao lokalno: bez ovoga bi ga korisnik vidio
        // na ekranu, a u napretku i percentilu ga ne bi bilo.
        if (d.result.serverSaved === false) {
          // attemptId ide s rezultatom da jedinstveni indeks (user_id, attempt_id)
          // ima na čemu raditi: ako je ruta redak ipak upisala (ocijenila je, ali
          // se odgovor izgubio), ovaj INSERT padne umjesto da doda drugi redak za
          // isti pokušaj. Indeks je djelomičan (where attempt_id is not null), pa
          // bi upis bez njega prošao i pokušaj bi se brojao dvaput.
          const attemptId = typeof d.result.attemptId === "string" ? d.result.attemptId : null;
          try { saveSimResult({ ...d.result, attemptId }, undefined, "soc"); } catch {}
        }
        return;
      }
    }

    window.addEventListener("message", onMsg);

    // Efekt se ponovno postavlja i pri PROMJENI tiera (plan se razriješio,
    // korisnik je nadogradio plan u drugoj kartici, odjavio se). Handshake se
    // tada ne ponavlja sam od sebe — READY je davno prošao — pa konfiguraciju
    // šaljemo odavde: bez toga engine do kraja sesije radi s tierom koji je
    // vrijedio u milisekundi u kojoj se iframe javio.
    if (readyRef.current) sendConfigAndBoot();

    return () => {
      disposed = true;
      window.removeEventListener("message", onMsg);
      clearTimeout(saveTimer.current);
      cache.clear();
      inFlight.clear();
    };
    // `user?.id`, NE `user`: useAuth na SVAKI Supabase auth događaj radi
    // setUser(session?.user ?? null), pa i osvježavanje tokena (~svakih 50 min i
    // pri povratku fokusa na karticu) daje NOVI objekt s istim korisnikom. S
    // `user` u zavisnostima se most usred 90-minutne simulacije poništavao i
    // ponovno postavljao, čisteći keš ispita i evidenciju predaja u letu.
  }, [isPro, isPaid, tierResolved, user?.id, router]);

  return (
    <iframe
      ref={iframeRef}
      src="/sim/sociologija.html"
      title="Sociologija — Simulator mature"
      style={{ width: "100%", height: "calc(100vh - 58px)", border: 0, display: "block" }}
    />
  );
}
