"""
One-time patch script for maturiraj.hr Engleski niža razina chapters.
Fixes audit issues: hero eyebrow "of 12" → "/ 15", sidebar footer "/ 12" → "/ 15",
FITB apostrophe JS bug (ch15), completion badge (ch12), PC passive caveat (ch07),
quiz Q7 label (ch14), typo (ch11).
"""

import re
import os

DIR = r"C:\Users\Daniel\Desktop\maturiraj\app\skripte\data\eng\niza"


def patch_file(num, patches):
    path = os.path.join(DIR, f"poglavlje{num:02d}.js")
    with open(path, encoding="utf-8") as f:
        content = f.read()
    original = content
    for pattern, replacement, flags in patches:
        content = re.sub(pattern, replacement, content, flags=flags)
    if content != original:
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"✓ poglavlje{num:02d}.js patched")
    else:
        print(f"  poglavlje{num:02d}.js — no changes needed")


# ── Ch01–Ch11: hero eyebrow + sidebar badge "of 12" / "/ 12" → "/ 15" ──────
HERO_BADGE_CHAPTER_CAT = {
    1: "grammar", 2: "grammar", 3: "grammar", 4: "grammar",
    5: "grammar", 6: "grammar", 7: "grammar",
    8: "skills", 9: "skills", 10: "skills", 11: "skills",
}

for n in range(1, 12):
    cat = HERO_BADGE_CHAPTER_CAT[n]
    patches = [
        # Hero eyebrow: "chapter 01 of 12 · grammar" → "chapter 01 / 15 · grammar"
        (
            rf'chapter {n:02d} of 12 &middot; {cat}',
            f'chapter {n:02d} / 15 &middot; {cat}',
            0,
        ),
        (
            rf'chapter {n:02d} of 12 · {cat}',
            f'chapter {n:02d} / 15 · {cat}',
            0,
        ),
        # Sidebar footer badge "01 / 12" → "01 / 15"
        (
            rf'{n:02d} / 12 &middot;',
            f'{n:02d} / 15 &middot;',
            0,
        ),
        (
            rf'{n:02d} / 12 ·',
            f'{n:02d} / 15 ·',
            0,
        ),
        # Hero badge span "01 / 12" → "01 / 15"
        (
            rf'>{n:02d} / 12<',
            f'>{n:02d} / 15<',
            0,
        ),
    ]
    patch_file(n, patches)

# ── Ch12: completion badge ────────────────────────────────────────────────────
patch_file(12, [
    (
        r'Prošao si sva 12 poglavlja',
        r'Prošao si glavnih 12 poglavlja (+ 3 bonus)',
        0,
    ),
])

# ── Ch07: add caveat to PC passive transform card ────────────────────────────
patch_file(7, [
    (
        r'(is/are being \+ PP &middot; [^<]*radnju u tijeku[^<]*)</div>\s*</div>(\s*\n?\s*<!-- BY \+ AGENT)',
        r'\1 <span style="font-family:var(--mono);font-size:10.5px;color:var(--amber);background:var(--amber-dim);border-radius:var(--r1);padding:2px 8px;margin-left:6px">rijetko na nižoj razini</span></div>\n    </div>\2',
        re.DOTALL,
    ),
])

# ── Ch11: typo fix ───────────────────────────────────────────────────────────
patch_file(11, [
    (
        r'razmatr\xe1',   # á = U+00E1
        'razmatra',
        0,
    ),
    (
        r'razmatr\u00e1',
        'razmatra',
        0,
    ),
])

# ── Ch14: Q7 option C label fix ───────────────────────────────────────────────
patch_file(14, [
    (
        r'a / the — u prijevodu',
        'a / the — krivi redoslijed',
        0,
    ),
])

# ── Ch15: FITB apostrophe JS syntax bug ───────────────────────────────────────
# The issue: onclick="checkFitb('fi5','f5fb','isn't it?','comp')"
# The apostrophe in "isn't" closes the single-quoted JS string inside a double-quoted HTML attribute.
# Fix: use \' to escape the apostrophe in the JS string.
patch_file(15, [
    (
        r"checkFitb\('fi5','f5fb','isn't it\?','comp'\)",
        r"checkFitb('fi5','f5fb','isn\\'t it?','comp')",
        0,
    ),
    (
        r"checkFitb\('fi6','f6fb','can't they\?','comp'\)",
        r"checkFitb('fi6','f6fb','can\\'t they?','comp')",
        0,
    ),
])

print("\nDone.")
