#!/usr/bin/env bash
# upload-audio.sh — objavi enkodirane MP3 datoteke (iz build-audio-B.py) kao
# assete GitHub Release-a "eng-audio-v1" na repou danielrisavi77-create/Maturiraj.
#
# Kako pokrenuti:
#   scripts/eng-audio/upload-audio.sh <put-do-out-mape>
#   (npr. scripts/eng-audio/upload-audio.sh "C:\...\scratchpad\ncvvo\out")
#
# Preduvjeti: `gh` CLI instaliran i prijavljen (gh auth login).
#
# Koraci:
#   1. gh auth status                                — provjera prijave
#   2. gh release view eng-audio-v1                   — ako release ne postoji, kreira ga
#   3. gh release upload eng-audio-v1 <out>/*.mp3 --clobber, u serijama od 20 datoteka
#   4. curl -sI provjera prvog uploadanog filea -> očekuje HTTP 200 ili 302
#
# NAPOMENA: ovaj skript se NE pokreće automatski — pokreće ga čovjek ručno kad
# odluči objaviti/osvježiti audio assete (dugotrajan upload, ~665 MB / 430 datoteka).

set -euo pipefail

REPO="danielrisavi77-create/Maturiraj"
RELEASE_TAG="eng-audio-v1"
RELEASE_TITLE="Engleski audio v1"
RELEASE_NOTES="NCVVO snimke slušanja, re-enkodirano mono 48 kbps"
BASE_URL="https://github.com/${REPO}/releases/download/${RELEASE_TAG}/"
BATCH_SIZE=20

OUT_DIR="${1:-}"
if [ -z "$OUT_DIR" ] || [ ! -d "$OUT_DIR" ]; then
  echo "Uporaba: $0 <put-do-out-mape-s-mp3-datotekama>" >&2
  exit 1
fi

echo "== 1. gh auth status =="
gh auth status

echo "== 2. provjera/kreiranje release-a ${RELEASE_TAG} =="
if ! gh release view "$RELEASE_TAG" --repo "$REPO" >/dev/null 2>&1; then
  echo "Release ${RELEASE_TAG} ne postoji, kreiram..."
  gh release create "$RELEASE_TAG" --repo "$REPO" --title "$RELEASE_TITLE" --notes "$RELEASE_NOTES"
else
  echo "Release ${RELEASE_TAG} vec postoji."
fi

echo "== 3. upload *.mp3 iz ${OUT_DIR} (serije od ${BATCH_SIZE}) =="
mapfile -t FILES < <(find "$OUT_DIR" -maxdepth 1 -type f -name '*.mp3' | sort)
TOTAL=${#FILES[@]}
if [ "$TOTAL" -eq 0 ]; then
  echo "Nema .mp3 datoteka u ${OUT_DIR}" >&2
  exit 1
fi
echo "Pronadjeno ${TOTAL} datoteka."

FIRST_FILE=""
i=0
while [ "$i" -lt "$TOTAL" ]; do
  batch=("${FILES[@]:$i:$BATCH_SIZE}")
  echo "  upload batch $((i / BATCH_SIZE + 1)): ${#batch[@]} datoteka"
  gh release upload "$RELEASE_TAG" "${batch[@]}" --repo "$REPO" --clobber
  if [ -z "$FIRST_FILE" ]; then
    FIRST_FILE="${batch[0]}"
  fi
  i=$((i + BATCH_SIZE))
done

echo "== 4. provjera dostupnosti (curl -sI) =="
FIRST_NAME=$(basename "$FIRST_FILE")
CHECK_URL="${BASE_URL}${FIRST_NAME}"
STATUS=$(curl -sI -o /dev/null -w '%{http_code}' -L "$CHECK_URL")
echo "GET ${CHECK_URL} -> HTTP ${STATUS}"
if [ "$STATUS" = "200" ] || [ "$STATUS" = "302" ]; then
  echo "OK — audio je dostupan na GitHub Release-u."
else
  echo "UPOZORENJE: neočekivan status ${STATUS} za ${CHECK_URL}" >&2
  exit 2
fi

echo "GOTOVO. ${TOTAL} datoteka objavljeno pod ${RELEASE_TAG}. Baza URL-a: ${BASE_URL}"
