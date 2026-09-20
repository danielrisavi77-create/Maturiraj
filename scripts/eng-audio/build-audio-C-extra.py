#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
build-audio-C-extra.py — Korak C: enkodiraj neiskorištene sirove zapise
slušanja (raw/<examKey>/NN.<ext> koje build-audio-B.py nije mapirao ni na
jedan task) kao "extra" zapise, da učenik može poslušati baš svaku snimku
iz NCVVO zip-a, čak i kad naši podaci grupiraju više NCVVO taskova u manje
tema.

Kako pokrenuti (primjer, putanje su vlastite od korisnika):

    python build-audio-C-extra.py \
      --base "C:\\...\\scratchpad\\ncvvo" \
      --ffmpeg "<put do>\\ffmpeg.exe" \
      --ffprobe "<put do>\\ffprobe.exe" \
      --repo-audio-map "<repo>\\lib\\data\\engleski-simulator\\audio-map.json"

Ulaz:
  <base>/audio-map.json    (izlaz build-audio-B.py — daje intro/tasks po ispitu)
  <base>/raw/<examKey>/NN.<ext>

Izlaz:
  <base>/out/<examKey>__extra<M>-1.mp3
  <base>/out/<examKey>__extra<M>-2.mp3   (samo ako je zapis M upario u par)
  <base>/audio-map.json                  (dodano polje "extra" po ispitu)
  --repo-audio-map (ako je zadan)        (isto "extra" polje spojeno u repo kopiju)

Idempotentno: enkodiranje se preskače kad ciljna datoteka već postoji i
veličine je > 0.

Algoritam:
  1. Za svaki ispit izračunaj koliko je sirovih zapisa build-audio-B.py
     iskoristio: std_n = (1 ako postoji intro, inače 0) + 2 * broj_taskova
     (isto pravilo kojim build-audio-B.py dodjeljuje track#N tasku — vidi
     njegov do_encode()/first_idx/repeat_idx).
  2. Zapisi na pozicijama std_n+1..n (1-indeksirano, po broju u imenu
     datoteke) su neiskorišteni.
  3. Neiskorištene zapise grupiraj redom u parove (1. slušanje + ponavljanje):
     dva susjedna zapisa čine par ako im se ffprobe trajanja razlikuju manje
     od --pair-threshold (zadano 15%, relativno na duže trajanje); inače
     svaki od njih postaje samostalan zapis (repeat: null).
"""

import argparse
import json
import os
import re
import subprocess

AUDIO_EXT_RE = re.compile(r"\.(mp3|wma)$", re.IGNORECASE)
LEADING_NUM_RE = re.compile(r"(\d+)")

EXTRA_NOTE = 'Dodatni zadatak slušanja koji podaci ispita ne razlikuju kao zasebnu temu'


def parse_args():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument('--base', required=True, help='Radna mapa (scratchpad) — audio-map.json, raw/, out/ idu ovdje')
    p.add_argument('--ffmpeg', required=True, help='Putanja do ffmpeg.exe')
    p.add_argument('--ffprobe', required=True, help='Putanja do ffprobe.exe')
    p.add_argument('--repo-audio-map', default=None, help='Ako je zadano, u tu datoteku spoji "extra" polje (uz sve ostalo netaknuto)')
    p.add_argument('--pair-threshold', type=float, default=0.15, help='Relativna razlika trajanja (0-1) ispod koje se dva susjedna zapisa smatraju parom')
    return p.parse_args()


def sort_key(name):
    base = os.path.basename(name)
    m = LEADING_NUM_RE.search(base)
    return (int(m.group(1)) if m else 10 ** 9, base.lower())


def main():
    args = parse_args()
    BASE = args.base
    FFMPEG = args.ffmpeg
    FFPROBE = args.ffprobe

    RAW_DIR = os.path.join(BASE, 'raw')
    OUT_DIR = os.path.join(BASE, 'out')
    AUDIO_MAP_PATH = os.path.join(BASE, 'audio-map.json')

    log_lines = []

    def log(msg):
        print(msg)
        log_lines.append(msg)

    def ffprobe_duration(path):
        try:
            out = subprocess.run(
                [FFPROBE, '-v', 'error', '-show_entries', 'format=duration',
                 '-of', 'default=noprint_wrappers=1:nokey=1', path],
                capture_output=True, text=True, timeout=60,
            )
            s = out.stdout.strip()
            return round(float(s), 2) if s else None
        except Exception as e:
            log(f'    ffprobe FAILED on {path}: {e}')
            return None

    def ffmpeg_encode(src, dst):
        if os.path.exists(dst) and os.path.getsize(dst) > 0:
            return True, 'skip(exists)'
        tmp = dst + '.part.mp3'
        try:
            r = subprocess.run(
                [FFMPEG, '-y', '-i', src, '-ac', '1', '-ar', '32000', '-b:a', '48k',
                 '-codec:a', 'libmp3lame', '-f', 'mp3', tmp],
                capture_output=True, text=True, timeout=300,
            )
            if r.returncode != 0 or not os.path.exists(tmp) or os.path.getsize(tmp) == 0:
                if os.path.exists(tmp):
                    os.remove(tmp)
                return False, r.stderr[-800:]
            os.replace(tmp, dst)
            return True, 'encoded'
        except Exception as e:
            if os.path.exists(tmp):
                try:
                    os.remove(tmp)
                except OSError:
                    pass
            return False, str(e)

    with open(AUDIO_MAP_PATH, 'r', encoding='utf-8') as f:
        audio_map = json.load(f)

    os.makedirs(OUT_DIR, exist_ok=True)

    n_exams_with_extra = 0
    n_extra_files = 0

    for key in sorted(k for k in audio_map.keys() if k != '_missing'):
        entry = audio_map[key]
        tasks = entry.get('tasks') or {}
        k_tasks = len(tasks)
        if k_tasks == 0:
            continue
        std_n = (1 if entry.get('intro') else 0) + 2 * k_tasks

        raw_dir = os.path.join(RAW_DIR, key)
        if not os.path.isdir(raw_dir):
            continue
        raw_files = [os.path.join(raw_dir, n) for n in os.listdir(raw_dir) if AUDIO_EXT_RE.search(n)]
        raw_files.sort(key=sort_key)
        n = len(raw_files)

        if n <= std_n:
            continue

        unassigned = raw_files[std_n:]
        log(f'=== {key} === std_n={std_n} raw={n} neiskorišteno={len(unassigned)}')

        durations = [ffprobe_duration(p) for p in unassigned]
        for p, d in zip(unassigned, durations):
            log(f'    {os.path.basename(p)}  dur={d}')

        groups = []  # list of (first_path, repeat_path_or_None)
        i = 0
        while i < len(unassigned):
            if i + 1 < len(unassigned) and durations[i] and durations[i + 1]:
                d1, d2 = durations[i], durations[i + 1]
                reldiff = abs(d1 - d2) / max(d1, d2)
                if reldiff < args.pair_threshold:
                    groups.append((unassigned[i], unassigned[i + 1]))
                    i += 2
                    continue
            groups.append((unassigned[i], None))
            i += 1

        extra_out = []
        for m, (first_src, repeat_src) in enumerate(groups, start=1):
            first_name = f'{key}__extra{m}-1.mp3'
            ok, msg = ffmpeg_encode(first_src, os.path.join(OUT_DIR, first_name))
            log(f'    encode {os.path.basename(first_src)} -> {first_name}: {msg}')
            if not ok:
                continue
            n_extra_files += 1
            repeat_name = None
            if repeat_src:
                repeat_name = f'{key}__extra{m}-2.mp3'
                ok2, msg2 = ffmpeg_encode(repeat_src, os.path.join(OUT_DIR, repeat_name))
                log(f'    encode {os.path.basename(repeat_src)} -> {repeat_name}: {msg2}')
                if ok2:
                    n_extra_files += 1
                else:
                    repeat_name = None
            extra_out.append({'first': first_name, 'repeat': repeat_name, 'note': EXTRA_NOTE})

        if extra_out:
            entry['extra'] = extra_out
            n_exams_with_extra += 1

    with open(AUDIO_MAP_PATH, 'w', encoding='utf-8') as f:
        json.dump(audio_map, f, ensure_ascii=False, indent=2)

    if args.repo_audio_map:
        with open(args.repo_audio_map, 'r', encoding='utf-8') as f:
            repo_map = json.load(f)
        for key, entry in audio_map.items():
            if key == '_missing':
                continue
            if entry.get('extra') and key in repo_map:
                repo_map[key]['extra'] = entry['extra']
        with open(args.repo_audio_map, 'w', encoding='utf-8') as f:
            json.dump(repo_map, f, ensure_ascii=False, indent=2)
        log(f'Spojeno "extra" polje u {args.repo_audio_map}')

    print('\n==== SUMMARY ====')
    print(f'ispita s dodanim extra zapisima: {n_exams_with_extra}')
    print(f'enkodiranih extra datoteka: {n_extra_files}')


if __name__ == '__main__':
    main()
