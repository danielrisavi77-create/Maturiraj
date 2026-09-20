#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
build-audio-A.py — Korak A: pronađi i preuzmi ZIP-ove engleskog s NCVVO stranice
(i Waybacka, kad je NCVVO HTML blokiran WAF-om) za sve ispite sa slušanjem, i
spremi ih u <base>/zips/<examKey>.zip.

Kako pokrenuti (primjer, putanje su vlastite od korisnika):

    python build-audio-A.py \
      --base "C:\\...\\scratchpad\\ncvvo" \
      --exams-index "<repo>\\lib\\data\\engleski-simulator\\exams-index.json"

Izlaz:
  <base>/zips/<examKey>.zip   — preuzeti ZIP-ovi (NE commitati u git)
  <base>/zipmap.json          — { examKey: { url, ok, mp3Count, note? } }
  <base>/stepA.log            — log

Napomene:
  - Poštuje NCVVO: max 1 zahtjev/s prema ncvvo.hr, bez paralelizma.
  - Dodatni fajlovi found.txt / zips2.txt / zips4.txt (po jedan URL po retku) u
    <base>/ se, ako postoje, koriste kao unaprijed poznati URL-ovi (ubrzava
    ponovno pokretanje i smanjuje broj Wayback/guess zahtjeva).
  - Idempotentno: ako <base>/zips/<key>.zip već postoji i valjan je ZIP,
    preskače se ponovno preuzimanje.
  - Poznato ograničenje: za 6 najstarijih ispita (2010_ljeto, vis_2010_ljeto,
    2011_ljeto, vis_2011_ljeto, vis_2010_zima, vis_2010_jesen) NCVVO na istoj
    stranici rok-a nudi i PDF-only ZIP i zaseban ZIP s audiom (sufiks poput
    "-2", "-svi" ili "Audio"); ovaj skript sam po sebi može pokupiti pogrešnu
    (PDF-only) varijantu. Pri prvom pokretanju to je ručno provjereno i
    ispravljeno usporedbom sadržaja ZIP-a (traži se barem jedna .mp3/.wma
    datoteka) — vidi git povijest ove grane za detalje ako se skripta
    ponovno pokreće od nule.
"""
import argparse
import json
import os
import re
import time
import zipfile
import shutil
import urllib.request
import urllib.error


def parse_args():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument('--base', required=True, help='Radna mapa (scratchpad) — zips/, zipmap.json, stepA.log idu ovdje')
    p.add_argument('--exams-index', required=True, help='Putanja do lib/data/engleski-simulator/exams-index.json')
    return p.parse_args()


def main():
    args = parse_args()
    BASE = args.base
    ZIPS = os.path.join(BASE, "zips")
    EXAMS_INDEX = args.exams_index
    ZIPMAP_PATH = os.path.join(BASE, "zipmap.json")
    LOG_PATH = os.path.join(BASE, "stepA.log")

    os.makedirs(ZIPS, exist_ok=True)

    UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"

    _log_fh = open(LOG_PATH, "a", encoding="utf-8")

    def log(msg):
        line = f"[{time.strftime('%H:%M:%S')}] {msg}"
        print(line)
        _log_fh.write(line + "\n")
        _log_fh.flush()

    _last_req = {}

    def throttle(host, min_gap=1.0):
        t0 = _last_req.get(host, 0)
        dt = time.time() - t0
        if dt < min_gap:
            time.sleep(min_gap - dt)
        _last_req[host] = time.time()

    def http_get(url, timeout=25, host_for_throttle=None, min_gap=1.0):
        host = host_for_throttle or re.sub(r"^https?://([^/]+)/.*", r"\1", url)
        throttle(host, min_gap)
        req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
        try:
            with urllib.request.urlopen(req, timeout=timeout) as r:
                data = r.read()
                return r.status, data
        except urllib.error.HTTPError as e:
            return e.code, b""
        except Exception as e:
            log(f"  ! GET error {url}: {e}")
            return None, b""

    def http_head_ok(url, timeout=15, host_for_throttle=None, min_gap=1.0):
        host = host_for_throttle or re.sub(r"^https?://([^/]+)/.*", r"\1", url)
        throttle(host, min_gap)
        req = urllib.request.Request(url, method="HEAD", headers={"User-Agent": UA})
        try:
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return r.status == 200
        except Exception:
            return False

    # -----------------------------------------------------------------------
    # 1. Učitaj popis ključeva ispita sa slušanjem
    # -----------------------------------------------------------------------
    with open(EXAMS_INDEX, encoding="utf-8") as f:
        exams = json.load(f)
    ALL_KEYS = [e["key"] for e in exams if e.get("hasListening")]
    log(f"Ucitano {len(ALL_KEYS)} kljuceva sa slusanjem (od {len(exams)} ukupno)")

    # -----------------------------------------------------------------------
    # 2. Tablica rokova -> (osnovna_key, visa_key)
    # -----------------------------------------------------------------------
    ROUND_TABLE = [
        ("drzavna-matura-2025-2026-prvi-rok", None, None),
        ("drzavna-matura-2025-2026-drugi-rok", None, None),
        ("drzavna-matura-2024-2025-prvi-rok", "2025_ljeto", "vis_2025_ljeto"),
        ("drzavna-matura-2024-2025-drugi-rok", "2025_jesen", "vis_2025_jesen"),
        ("drzavna-matura-2023-2024-prvi-rok", "2024_ljeto", "vis_2024_prvi"),
        ("drzavna-matura-2023-2024-drugi-rok", "2024_jesen", "vis_2024_drugi"),
        ("drzavna-matura-2022-2023-ljetni-rok", "2023_ljeto", "vis_2023_ljeto"),
        ("drzavna-matura-2022-2023-drugi-rok", "2023_jesen", "vis_2023_jesen"),
        ("drzavna-matura-2021-2022-ljetni-rok", "2022_ljeto", "vis_2022_ljeto"),
        ("drzavna-matura-2021-2022-jesenski-rok", "2022_jesen", "vis_2022_jesen"),
        ("drzavna-matura-2020-2021-jesenski-rok", "2021_jesen", "vis_2021_jesen"),
        ("drzavna-matura-2020-2021-ljetni-rok-2", "2021_ljeto", "vis_2021_ljeto"),
        ("drzavna-matura-2019-2020-jesenski-rok", "2020_jesen", "vis_2020_jesen"),
        ("drzavna-matura-2019-2020-ljetni-rok-3", "2020_ljeto", "vis_2020_ljeto"),
        ("drzavna-matura-2018-2019-jesenski-rok", "2019_jesen", "vis_2019_jesen"),
        ("drzavna-matura-2019-2019-ljetni-rok", "2019_ljeto", "vis_2019_ljeto"),
        ("drzavna-matura-2017-2018-jesenski-rok", "2018_jesen", "vis_2018_jesen"),
        ("drzavna-matura-2017-2018-ljetni-rok", "2018_ljeto", "vis_2018_ljeto"),
        ("drzavna-matura-2016-2017-jesenski-rok", "2017_jesen", "vis_2017_jesen"),
        ("drzavna-matura-2016-2017-ljetni-rok", "2017_ljeto", "vis_2017_ljeto"),
        ("drzavna-matura-2015-2016-jesenski-rok", "2016_jesen", "vis_2016_jesen"),
        ("drzavna-matura-2015-2016-ljetni-rok", "2016_ljeto", "vis_2016_ljeto"),
        ("dm-2014-2015-ljetni-rok", "2015_ljeto", "vis_2015_ljeto"),
        ("dm-2014-2015-jesenski-rok", "2015_jesen", "vis_2015_jesen"),
        ("drzavna-matura-2013-2014-jesenski-rok", "2014_jesen", "vis_2014_jesen"),
        ("dm-2013-2014-ljetni-rok-jesenski", "2014_ljeto", "vis_2014_ljeto"),
        ("dm-2012-2013-ljetni-rok", "2013_ljeto", "vis_2013_ljeto"),
        ("dm-2012-2013-jesenski-rok", "2013_jesen", "vis_2013_jesen"),
        ("dm-2011-2012-ljetni-rok", "2012_ljeto", "vis_2012_ljeto"),
        ("dm-2011-2012-jesenski-rok", "2012_jesen", "vis_2012_jesen"),
        ("dm-2011-2012-zimski-rok", "2012_zima", "vis_2012_zima"),
        ("dm-2010-2011-jesenski-rok", "2011_jesen", "vis_2011_jesen"),
        ("dm-2010-2011-ljetni-rok", "2011_ljeto", "vis_2011_ljeto"),
        ("dm-2010-2011-zimski-rok", "2011_zima", "vis_2011_zima"),
        ("dm-2009-2010-zimski-rok", None, "vis_2010_zima"),
        ("dm-2009-2010-jesenski-rok", None, "vis_2010_jesen"),
        ("dm-2009-2010-ljetni-rok", "2010_ljeto", "vis_2010_ljeto"),
    ]

    # -----------------------------------------------------------------------
    # 3. Poznati URL-ovi (found.txt, zips2.txt, zips4.txt) -> examKey
    # -----------------------------------------------------------------------
    SEASON_CANON = {"ljeto": "ljeto", "jesen": "jesen", "zima": "zima", "prvi": "ljeto", "drugi": "jesen"}

    OVERRIDES = {
        "2014/03/ENGA15ljeto.zip": (2015, "ljeto"),
        "2014/03/ENG_B15ljeto.zip": (2015, "ljeto"),
        "2016/06/ENGA_2015_2016.zip": (2016, "ljeto"),
        "2016/06/ENGB.zip": (2016, "ljeto"),
        "2016/08/ENGA_jesen.zip": (2016, "jesen"),
        "2016/08/ENGB_jesen.zip": (2016, "jesen"),
        "2017/06/ENGA.zip": (2017, "ljeto"),
        "2017/06/ENGB.zip": (2017, "ljeto"),
        "2017/07/ENGA.zip": (2017, "jesen"),
        "2025/09/ENG-A-2.ROK_.zip": (2025, "jesen"),
        "2025/09/ENG-B-2.ROK_.zip": (2025, "jesen"),
    }

    def url_level(url):
        fn = url.rsplit("/", 1)[-1]
        up = fn.upper()
        idx = up.find("ENG")
        if idx < 0:
            return None
        after = up[idx + 3:]
        after = re.sub(r"^[^A-Z]*", "", after)
        if after.startswith("A"):
            return "A"
        if after.startswith("B"):
            return "B"
        return None

    def suffix3(url):
        parts = url.split("/")
        return "/".join(parts[-3:])

    def parse_known_url(url):
        """Vrati examKey za poznati (ne-wayback-otkriveni) URL, ili None."""
        if "/2026/" in url:
            return None
        level = url_level(url)
        if level is None:
            return None
        sfx = suffix3(url)
        year = season = None
        if sfx in OVERRIDES:
            year, season = OVERRIDES[sfx]
        else:
            fn = url.rsplit("/", 1)[-1]
            m = re.search(r"(\d{2})[_\-]?(ljeto|jesen|zima|prvi|drugi)", fn, re.I)
            if m:
                yy = int(m.group(1))
                year = 2000 + yy
                season = m.group(2).lower()
        if year is None:
            return None
        if level == "A" and year == 2024:
            if season == "prvi":
                return "vis_2024_prvi"
            if season == "drugi":
                return "vis_2024_drugi"
            return None
        canon = SEASON_CANON.get(season)
        if canon is None:
            return None
        return f"vis_{year}_{canon}" if level == "A" else f"{year}_{canon}"

    def load_known_urls():
        urls = []
        for fname in ("found.txt", "zips2.txt", "zips4.txt"):
            p = os.path.join(BASE, fname)
            if os.path.exists(p):
                with open(p, encoding="utf-8") as f:
                    for line in f:
                        line = line.strip()
                        if line:
                            urls.append(line)
        seen = set()
        mapping = {}  # key -> url
        conflicts = []
        for u in urls:
            if u in seen:
                continue
            seen.add(u)
            key = parse_known_url(u)
            if key is None:
                continue
            if key in mapping and mapping[key] != u:
                conflicts.append((key, mapping[key], u))
                continue
            mapping[key] = u
        return mapping, conflicts

    KNOWN_URLS, known_conflicts = load_known_urls()
    log(f"Poznatih URL-ova mapirano: {len(KNOWN_URLS)} (konflikata: {len(known_conflicts)})")
    for k, u1, u2 in known_conflicts:
        log(f"  ! konflikt za {k}: {u1} vs {u2} (zadrzan prvi)")

    # -----------------------------------------------------------------------
    # 4. Wayback otkrivanje po stranicama rokova
    # -----------------------------------------------------------------------
    HREF_RE = re.compile(r'href=["\']([^"\']+\.(?:zip|rar|mp3))["\']', re.I)
    BAD_WORDS = ("ita", "srp", "mag")
    WAYBACK_TS = ["2022", "2020", "2018", "2016", "2014", "2012", "2011", "2010",
                  "2024", "2021", "2019", "2017", "2015", "2013", "2023", "2025"]

    def extract_eng_links(html_bytes):
        try:
            html = html_bytes.decode("utf-8", errors="ignore")
        except Exception:
            html = str(html_bytes)
        out = []
        for m in HREF_RE.finditer(html):
            href = m.group(1)
            fn = href.rsplit("/", 1)[-1].lower()
            if "eng" not in fn:
                continue
            if any(b in fn for b in BAD_WORDS):
                continue
            out.append(href)
        return out

    def resolve_wb_href(href, original_page_url):
        m = re.search(r"web\.archive\.org/web/[^/]+/(https?://.*)$", href)
        if m:
            return m.group(1)
        if href.startswith("http"):
            return href
        if href.startswith("//"):
            return "https:" + href
        if href.startswith("/"):
            return "https://www.ncvvo.hr" + href
        return href

    def fetch_wayback_page(slug):
        orig = f"https://www.ncvvo.hr/{slug}/"
        for ts in WAYBACK_TS:
            wb_url = f"https://web.archive.org/web/{ts}id_/{orig}"
            status, data = http_get(wb_url, host_for_throttle="web.archive.org", min_gap=0.6)
            if status == 200 and len(data) > 500:
                return data, wb_url
            time.sleep(0.2)
        return None, None

    discovered = {}  # key -> url
    for slug, osn_key, vis_key in ROUND_TABLE:
        if osn_key is None and vis_key is None:
            continue
        needed = [k for k in (osn_key, vis_key) if k and k not in KNOWN_URLS]
        if not needed:
            continue
        data, wb_url = fetch_wayback_page(slug)
        if data is None:
            log(f"WB miss: {slug} (nijedan timestamp nije uspio)")
            continue
        hrefs = extract_eng_links(data)
        resolved = [resolve_wb_href(h, wb_url) for h in hrefs]
        resolved = [r for r in resolved if r]
        log(f"WB {slug}: {len(resolved)} eng-linkova ({wb_url})")
        for r in resolved:
            lvl = url_level(r)
            target = None
            if lvl == "A" and vis_key:
                target = vis_key
            elif lvl == "B" and osn_key:
                target = osn_key
            elif lvl is None:
                if vis_key and not osn_key:
                    target = vis_key
                elif osn_key and not vis_key:
                    target = osn_key
            if target and target not in KNOWN_URLS and target not in discovered:
                discovered[target] = r
                log(f"  + {target} <- {r}")

    log(f"Wayback-otkriveno novih kljuceva: {len(discovered)}")

    RESOLVED = dict(KNOWN_URLS)
    for k, v in discovered.items():
        RESOLVED.setdefault(k, v)

    # -----------------------------------------------------------------------
    # 5. Za jos uvijek nedostajuce kljuceve: pogadjanje URL-ova (sporo, 1/s)
    # -----------------------------------------------------------------------
    def guess_candidates(key):
        if key.startswith("vis_"):
            level = "A"
            rest = key[len("vis_"):]
        else:
            level = "B"
            rest = key
        m = re.match(r"(\d{4})_(\w+)", rest)
        if not m:
            return []
        year = int(m.group(1))
        season = m.group(2)
        yy = year % 100
        months = {"ljeto": ["06", "07"], "jesen": ["08", "09", "07"], "zima": ["02", "03", "01"],
                  "prvi": ["06", "07"], "drugi": ["08", "09"]}.get(season, ["06"])
        names = []
        if season == "ljeto" or season == "prvi":
            names += [f"ENG{level}{yy:02d}ljeto.zip", f"ENG{level}.zip", f"ENG_{level}{yy:02d}ljeto.zip",
                      f"ENG{level}_{year-1}_{year}.zip", f"ENG-{level}.zip"]
        if season == "jesen" or season == "drugi":
            names += [f"ENG{level}{yy:02d}jesen.zip", f"ENG{level}_jesen.zip", f"ENG{level}jesen.zip",
                      f"ENG-{level}-2.ROK_.zip", f"ENG_{level}_2_rok_{year-1}_{year}.zip"]
        if season == "zima":
            names += [f"ENG{level}{yy:02d}zima.zip", f"ENG{level}_zima.zip", f"ENG{level}zima.zip"]
        cands = []
        for yr in (year, year - 1):
            for mo in months:
                for nm in names:
                    cands.append(f"https://www.ncvvo.hr/wp-content/uploads/{yr}/{mo}/{nm}")
        return cands

    MISSING_BEFORE_GUESS = [k for k in ALL_KEYS if k not in RESOLVED]
    log(f"Nedostaje prije pogadjanja: {len(MISSING_BEFORE_GUESS)} -> {MISSING_BEFORE_GUESS}")

    GUESS_CAP_PER_KEY = 14
    for key in MISSING_BEFORE_GUESS:
        cands = guess_candidates(key)[:GUESS_CAP_PER_KEY]
        for url in cands:
            ok = http_head_ok(url, host_for_throttle="www.ncvvo.hr", min_gap=1.0)
            if ok:
                RESOLVED[key] = url
                log(f"  guess HIT {key} <- {url}")
                break
        else:
            log(f"  guess miss za {key} ({len(cands)} pokusaja)")

    # -----------------------------------------------------------------------
    # 6. Preuzimanje
    # -----------------------------------------------------------------------
    def count_mp3(zip_path):
        try:
            with zipfile.ZipFile(zip_path) as z:
                return sum(1 for n in z.namelist() if n.lower().endswith(".mp3"))
        except Exception:
            return -1

    def download_to(url, dest_path):
        host = re.sub(r"^https?://([^/]+)/.*", r"\1", url)
        min_gap = 1.0 if "ncvvo.hr" in host else 0.5
        throttle(host, min_gap)
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        try:
            with urllib.request.urlopen(req, timeout=120) as r, open(dest_path, "wb") as out:
                shutil.copyfileobj(r, out)
            return True, None
        except Exception as e:
            return False, str(e)

    zipmap = {}
    if os.path.exists(ZIPMAP_PATH):
        try:
            with open(ZIPMAP_PATH, encoding="utf-8") as f:
                zipmap = json.load(f)
        except Exception:
            zipmap = {}

    downloaded_count = 0
    mapped_count = len([k for k in ALL_KEYS if k in RESOLVED])
    missing_final = []

    for key in ALL_KEYS:
        dest = os.path.join(ZIPS, f"{key}.zip")
        if os.path.exists(dest) and zipfile.is_zipfile(dest):
            cnt = count_mp3(dest)
            zipmap[key] = {"url": RESOLVED.get(key, zipmap.get(key, {}).get("url", "")), "ok": True, "mp3Count": cnt}
            if cnt <= 0:
                log(f"NAPOMENA: {key}.zip postoji ali nema mp3 (mp3Count={cnt})")
            continue

        url = RESOLVED.get(key)
        if not url:
            missing_final.append(key)
            zipmap[key] = {"url": "", "ok": False, "mp3Count": 0, "note": "no_url"}
            continue

        # ako je istoimena datoteka vec u BASE root-u (rucno preuzeta ranije), premjesti je
        root_candidate = os.path.join(BASE, url.rsplit("/", 1)[-1])
        if os.path.exists(root_candidate) and not os.path.exists(dest):
            try:
                shutil.move(root_candidate, dest)
                log(f"Premjesteno vec preuzeto: {root_candidate} -> {dest}")
            except Exception as e:
                log(f"  ! ne mogu premjestiti {root_candidate}: {e}")

        if os.path.exists(dest) and zipfile.is_zipfile(dest):
            cnt = count_mp3(dest)
            zipmap[key] = {"url": url, "ok": True, "mp3Count": cnt}
            downloaded_count += 1
            continue

        log(f"Preuzimam {key} <- {url}")
        tmp = dest + ".part"
        ok, err = download_to(url, tmp)
        if not ok:
            log(f"  ! greska preuzimanja {key}: {err}")
            zipmap[key] = {"url": url, "ok": False, "mp3Count": 0, "note": f"download_error: {err}"}
            missing_final.append(key)
            if os.path.exists(tmp):
                os.remove(tmp)
            continue
        if not zipfile.is_zipfile(tmp):
            log(f"  ! preuzeto ali nije valjan ZIP: {key}")
            zipmap[key] = {"url": url, "ok": False, "mp3Count": 0, "note": "not_a_zip"}
            missing_final.append(key)
            os.remove(tmp)
            continue
        os.replace(tmp, dest)
        cnt = count_mp3(dest)
        zipmap[key] = {"url": url, "ok": True, "mp3Count": cnt}
        downloaded_count += 1
        if cnt <= 0:
            log(f"  ! ZIP preuzet ali BEZ mp3: {key} (mp3Count={cnt})")
        else:
            log(f"  OK {key}: {cnt} mp3 datoteka")

        with open(ZIPMAP_PATH, "w", encoding="utf-8") as f:
            json.dump(zipmap, f, ensure_ascii=False, indent=2)

    with open(ZIPMAP_PATH, "w", encoding="utf-8") as f:
        json.dump(zipmap, f, ensure_ascii=False, indent=2)

    log(f"GOTOVO. mapirano={mapped_count}/{len(ALL_KEYS)} preuzeto_novo={downloaded_count} nedostaje={len(missing_final)}")
    log(f"Nedostaju: {missing_final}")

    print("SUMMARY_JSON:" + json.dumps({
        "mapped": mapped_count,
        "total": len(ALL_KEYS),
        "downloaded_new": downloaded_count,
        "missing": missing_final,
    }, ensure_ascii=False))


if __name__ == "__main__":
    main()
