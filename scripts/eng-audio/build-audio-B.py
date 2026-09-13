#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
build-audio-B.py — Korak B: raspakiraj ZIP-ove sa slušanjem (iz build-audio-A.py),
mapiraj snimke na taskove ispita i enkodiraj ih u mono MP3 (48 kbps).

Kako pokrenuti (primjer, putanje su vlastite od korisnika):

    python build-audio-B.py \
      --base "C:\\...\\scratchpad\\ncvvo" \
      --repo-data "<repo>\\lib\\data\\engleski-simulator" \
      --ffmpeg "<put do>\\ffmpeg.exe" \
      --ffprobe "<put do>\\ffprobe.exe"

Ulaz:
  <base>/zipmap.json
  <base>/zips/<examKey>.zip
  <repo-data>/exams-{osnovna,visa}.json

Izlaz:
  <base>/raw/<examKey>/NN.<ext>              (raspakirani originali, NE commitati)
  <base>/out/<examKey>__task<N>-1.mp3        (NE commitati — ide na GitHub Release)
  <base>/out/<examKey>__task<N>-2.mp3
  <base>/out/<examKey>__intro.mp3
  <base>/audio-map.json                      (kopirati u repo: lib/data/engleski-simulator/audio-map.json)
  <base>/stepB.log

Idempotentno: raspakiravanje i enkodiranje se preskaču kad ciljna datoteka već
postoji i veličine je > 0 — siguran je restart nakon prekida.

Klasifikacija broja snimki po ispitu (k = broj task-grupa iz podataka o ispitu,
kao contiguous run-ovi jednakog 'topic' polja među pitanjima section=='listening'):
  - standard_intro (n == 2k+1): 1. snimka = intro, zatim po 2 (1. slušanje + ponavljanje) po tasku — confidence 'high'
  - no_intro       (n == 2k):   nema uvodne snimke, po 2 po tasku — confidence 'medium'
  - one_per_task   (n == k):    jedna snimka po tasku (first == repeat) — confidence 'medium'
  - fallback       (ostalo):    pozicijsko popunjavanje protiv standard_intro predloška — confidence 'low',
                                 s objašnjenjem u 'note' (tipično stariji ispiti s jednom kombiniranom
                                 snimkom za cijeli listening dio, ili godine gdje topic-oznake u
                                 exams-*.json ne razlikuju sve taskove)
"""

import argparse
import json
import os
import re
import subprocess
import zipfile

AUDIO_EXT_RE = re.compile(r"\.(mp3|wma)$", re.IGNORECASE)
LEADING_NUM_RE = re.compile(r"(\d+)")


def parse_args():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument('--base', required=True, help='Radna mapa (scratchpad) — zipmap.json, zips/, raw/, out/, audio-map.json idu ovdje')
    p.add_argument('--repo-data', required=True, help='Putanja do lib/data/engleski-simulator/ (exams-osnovna.json, exams-visa.json)')
    p.add_argument('--ffmpeg', required=True, help='Putanja do ffmpeg.exe')
    p.add_argument('--ffprobe', required=True, help='Putanja do ffprobe.exe')
    return p.parse_args()


def main():
    args = parse_args()
    BASE = args.base
    REPO_DATA = args.repo_data
    FFMPEG = args.ffmpeg
    FFPROBE = args.ffprobe

    ZIPMAP_PATH = os.path.join(BASE, "zipmap.json")
    ZIPS_DIR = os.path.join(BASE, "zips")
    RAW_DIR = os.path.join(BASE, "raw")
    OUT_DIR = os.path.join(BASE, "out")
    AUDIO_MAP_PATH = os.path.join(BASE, "audio-map.json")
    LOG_PATH = os.path.join(BASE, "stepB.log")

    log_lines = []

    def log(msg):
        print(msg)
        log_lines.append(msg)

    def load_json(path):
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)

    def ffprobe_duration(path):
        try:
            out = subprocess.run(
                [FFPROBE, "-v", "error", "-show_entries", "format=duration",
                 "-of", "default=noprint_wrappers=1:nokey=1", path],
                capture_output=True, text=True, timeout=60,
            )
            s = out.stdout.strip()
            return round(float(s), 2) if s else None
        except Exception as e:
            log(f"    ffprobe FAILED on {path}: {e}")
            return None

    def ffmpeg_encode(src, dst):
        if os.path.exists(dst) and os.path.getsize(dst) > 0:
            return True, "skip(exists)"
        tmp = dst + ".part.mp3"
        try:
            r = subprocess.run(
                [FFMPEG, "-y", "-i", src, "-ac", "1", "-ar", "32000", "-b:a", "48k",
                 "-codec:a", "libmp3lame", "-f", "mp3", tmp],
                capture_output=True, text=True, timeout=300,
            )
            if r.returncode != 0 or not os.path.exists(tmp) or os.path.getsize(tmp) == 0:
                if os.path.exists(tmp):
                    os.remove(tmp)
                return False, r.stderr[-800:]
            os.replace(tmp, dst)
            return True, "encoded"
        except Exception as e:
            if os.path.exists(tmp):
                try:
                    os.remove(tmp)
                except OSError:
                    pass
            return False, str(e)

    def listening_task_groups(ex):
        """Contiguous runs of identical 'topic' among section=='listening' questions,
        in order of appearance. Returns list of topic strings (one per task-group)."""
        groups = []
        prev = None
        for q in ex.get("qs", []):
            if q.get("section") != "listening":
                continue
            t = q.get("topic")
            if t != prev:
                groups.append(t)
                prev = t
        return groups

    def sort_key(name):
        base = os.path.basename(name)
        m = LEADING_NUM_RE.search(base)
        return (int(m.group(1)) if m else 10**9, base.lower())

    zipmap = load_json(ZIPMAP_PATH)
    osn = load_json(os.path.join(REPO_DATA, "exams-osnovna.json"))
    vis = load_json(os.path.join(REPO_DATA, "exams-visa.json"))

    os.makedirs(RAW_DIR, exist_ok=True)
    os.makedirs(OUT_DIR, exist_ok=True)

    audio_map = {}
    missing = []

    n_encoded_exams = 0
    nonstandard = []

    for key in sorted(zipmap.keys()):
        entry = zipmap[key]
        zip_path = os.path.join(ZIPS_DIR, f"{key}.zip")
        log(f"=== {key} ===")

        if not entry.get("ok") or not os.path.exists(zip_path):
            log(f"  MISSING zip or ok=false, skipping")
            missing.append(key)
            continue

        ex = vis.get(key) if key.startswith("vis_") else osn.get(key)
        if ex is None:
            log(f"  MISSING exam data in exams-{'visa' if key.startswith('vis_') else 'osnovna'}.json")
            missing.append(key)
            continue

        groups = listening_task_groups(ex)
        k = len(groups)
        if k == 0:
            log(f"  NO listening questions found in exam data")
            missing.append(key)
            continue

        try:
            zf = zipfile.ZipFile(zip_path)
        except Exception as e:
            log(f"  BAD zip: {e}")
            missing.append(key)
            continue

        audio_entries = [n for n in zf.namelist() if AUDIO_EXT_RE.search(n)]
        audio_entries.sort(key=sort_key)
        n = len(audio_entries)
        log(f"  tracks={n} taskGroups={k} ({', '.join(groups)})")

        raw_dir = os.path.join(RAW_DIR, key)
        os.makedirs(raw_dir, exist_ok=True)
        raw_paths = []
        for i, member in enumerate(audio_entries, start=1):
            ext = os.path.splitext(member)[1].lower()
            dst = os.path.join(raw_dir, f"{i:02d}{ext}")
            if not (os.path.exists(dst) and os.path.getsize(dst) > 0):
                with zf.open(member) as src, open(dst, "wb") as out_f:
                    out_f.write(src.read())
            raw_paths.append(dst)
        zf.close()

        durations = [ffprobe_duration(p) for p in raw_paths]
        for p, d in zip(raw_paths, durations):
            log(f"    {os.path.basename(p)}  dur={d}")

        # ---- pattern detection ----
        std_n = 2 * k + 1
        alt_no_intro_n = 2 * k
        alt_one_per_task_n = k

        if n == std_n:
            pattern = "standard_intro"
            note_global = ""
        elif n == alt_no_intro_n:
            pattern = "no_intro"
            note_global = ""
        elif n == alt_one_per_task_n:
            pattern = "one_per_task"
            note_global = ""
        else:
            pattern = "fallback"
            note_global = (
                f"track count ({n}) matches none of the expected patterns for "
                f"{k} task group(s) from exam data (expected {std_n} with intro, "
                f"{alt_no_intro_n} without intro, or {alt_one_per_task_n} one-per-task); "
                f"mapped positionally against the standard intro+2xtask template "
                f"(size {std_n}), extra/missing slots left unfilled."
            )
            nonstandard.append(f"{key} (tracks={n}, taskGroups={k})")

        intro_file = None
        tasks_out = {}

        def enc_name(suffix):
            return f"{key}__{suffix}.mp3"

        def do_encode(idx_track, out_name):
            """idx_track: 1-based index into raw_paths. Returns filename or None."""
            if idx_track is None or idx_track < 1 or idx_track > len(raw_paths):
                return None
            src = raw_paths[idx_track - 1]
            dst = os.path.join(OUT_DIR, out_name)
            ok, msg = ffmpeg_encode(src, dst)
            log(f"    encode track#{idx_track} -> {out_name}: {msg}")
            return out_name if ok else None

        if pattern == "standard_intro":
            intro_file = do_encode(1, enc_name("intro"))
            for ti, topic in enumerate(groups, start=1):
                first_idx = 1 + 2 * (ti - 1) + 1
                repeat_idx = first_idx + 1
                first_f = do_encode(first_idx, enc_name(f"task{ti}-1"))
                repeat_f = do_encode(repeat_idx, enc_name(f"task{ti}-2"))
                tasks_out[str(ti)] = {
                    "topic": topic, "first": first_f, "repeat": repeat_f,
                    "confidence": "high", "note": "",
                }

        elif pattern == "no_intro":
            intro_file = None
            for ti, topic in enumerate(groups, start=1):
                first_idx = 2 * (ti - 1) + 1
                repeat_idx = first_idx + 1
                first_f = do_encode(first_idx, enc_name(f"task{ti}-1"))
                repeat_f = do_encode(repeat_idx, enc_name(f"task{ti}-2"))
                tasks_out[str(ti)] = {
                    "topic": topic, "first": first_f, "repeat": repeat_f,
                    "confidence": "medium",
                    "note": "no separate intro track (track count = 2xtasks)",
                }

        elif pattern == "one_per_task":
            intro_file = None
            for ti, topic in enumerate(groups, start=1):
                idx = ti
                f = do_encode(idx, enc_name(f"task{ti}-1"))
                tasks_out[str(ti)] = {
                    "topic": topic, "first": f, "repeat": f,
                    "confidence": "medium",
                    "note": "single track per task; first and repeat are the same file (no separate repeat recording)",
                }

        else:  # fallback: positional fill against the standard_intro-sized template
            intro_file = do_encode(1, enc_name("intro")) if n >= 1 else None
            for ti, topic in enumerate(groups, start=1):
                first_idx = 1 + 2 * (ti - 1) + 1
                repeat_idx = first_idx + 1
                first_f = do_encode(first_idx, enc_name(f"task{ti}-1"))
                repeat_f = do_encode(repeat_idx, enc_name(f"task{ti}-2"))
                note = note_global
                if first_idx > n:
                    note = (note_global + " No audio track available for this task "
                            "(zip ran out of tracks); likely a single combined "
                            "recording covering the whole listening section (old "
                            "format) or a data/topic-tagging mismatch.")
                tasks_out[str(ti)] = {
                    "topic": topic, "first": first_f, "repeat": repeat_f,
                    "confidence": "low", "note": note.strip(),
                }

        audio_map[key] = {"intro": intro_file, "tasks": tasks_out}
        if pattern != "fallback" or intro_file or any(t["first"] for t in tasks_out.values()):
            n_encoded_exams += 1

    audio_map["_missing"] = missing

    with open(AUDIO_MAP_PATH, "w", encoding="utf-8") as f:
        json.dump(audio_map, f, ensure_ascii=False, indent=2)

    with open(LOG_PATH, "w", encoding="utf-8") as f:
        f.write("\n".join(log_lines))

    total_bytes = 0
    n_files = 0
    for fn in os.listdir(OUT_DIR):
        fp = os.path.join(OUT_DIR, fn)
        if os.path.isfile(fp):
            total_bytes += os.path.getsize(fp)
            n_files += 1

    print("\n==== SUMMARY ====")
    print(f"exams processed with >=1 encoded file: {n_encoded_exams}")
    print(f"encoded audio files total: {n_files}")
    print(f"total out/ size MB: {total_bytes / 1024 / 1024:.1f}")
    print(f"missing exams: {missing}")
    print(f"nonstandard (fallback) exams ({len(nonstandard)}): {nonstandard}")


if __name__ == "__main__":
    main()
