"""
Patches ch12-ch15 JS files:
1. Replaces mobile drawer + desktop sidebar with canonical Croatian labels
2. Fixes tab-progress-row CSS margin (removes negative margin that causes overlap)
"""
import re
import os

BASE = r"C:\Users\Daniel\Desktop\maturiraj\app\skripte\data\eng\niza"

ALL_CHAPTERS = [
    (1,  "// Gramatika",    "01 \u00b7 Present Simple i Continuous"),
    (2,  "// Gramatika",    "02 \u00b7 Past Simple i Continuous"),
    (3,  "// Gramatika",    "03 \u00b7 Present Perfect"),
    (4,  "// Gramatika",    "04 \u00b7 Futur: will i going to"),
    (5,  "// Gramatika",    "05 \u00b7 Modal glagoli"),
    (6,  "// Gramatika",    "06 \u00b7 Uvjetne re\u010denice 0, 1, 2"),
    (7,  "// Gramatika",    "07 \u00b7 Pasiv"),
    (8,  "// Vje\u0161tine", "08 \u00b7 Vokabular \u2014 \u017eivot"),
    (9,  "// Vje\u0161tine", "09 \u00b7 \u010citanje s razumijevanjem"),
    (10, "// Vje\u0161tine", "10 \u00b7 Pisanje \u2014 kratki tekst"),
    (11, "// Vje\u0161tine", "11 \u00b7 Strategije slu\u0161anja"),
    (12, "// Vje\u0161tine", "12 \u00b7 Vi\u0161estruki izbor \u2014 taktika"),
    (13, "// Pro\u0161ireno", "13 \u00b7 Neupravni govor"),
    (14, "// Pro\u0161ireno", "14 \u00b7 \u010clanovi: a / an / the"),
    (15, "// Pro\u0161ireno", "15 \u00b7 Komparativ i tag pitanja"),
]


def generate_sidebar_html(chapter_num):
    """Generate canonical mobile drawer + desktop sidebar HTML."""
    # --- Mobile drawer ---
    mob_lines = [
        '<div class="mob-drawer" id="mobDrawer">',
        "  <button class=\"mob-drawer-close\" onclick=\"closeMobDrawer()\">&#x2715; Zatvori</button>",
    ]
    prev_cat = None
    for num, cat, label in ALL_CHAPTERS:
        if cat != prev_cat:
            mob_lines.append(f'  <div class="sb-label">{cat}</div>')
            prev_cat = cat
        if num == chapter_num:
            mob_lines.append(
                f'  <div class="sb-item active" onclick="closeMobDrawer()"><span class="sb-dot"></span> {label}</div>'
            )
        else:
            mob_lines.append(
                f"  <div class=\"sb-item\" onclick=\"closeMobDrawer();window.location='chapter{num:02d}.html'\"><span class=\"sb-dot\"></span> {label}</div>"
            )
    mob_lines.append("</div>")

    # --- Desktop sidebar ---
    footer_text = f"{chapter_num:02d} / 15 \u00b7 maturiraj.hr"
    desk_lines = [
        '<nav class="sidebar">',
        '  <div class="sb-brand">',
        '    <div class="sb-logo"><svg viewBox="0 0 14 14" fill="none"><path d="M2 3h10M2 7h7M2 11h5" stroke="#080B10" stroke-width="2" stroke-linecap="round"/></svg></div>',
        '    <div><div class="sb-name">Maturiraj.hr</div><div class="sb-sub">EN \u00b7 ni\u017ea razina</div></div>',
        "  </div>",
    ]
    prev_cat = None
    for num, cat, label in ALL_CHAPTERS:
        if cat != prev_cat:
            desk_lines.append(f'  <div class="sb-label">{cat}</div>')
            prev_cat = cat
        if num == chapter_num:
            desk_lines.append(
                f'  <div class="sb-item active"><span class="sb-dot"></span> {label}</div>'
            )
        else:
            desk_lines.append(
                f"  <div class=\"sb-item\" onclick=\"window.location='chapter{num:02d}.html'\" style=\"cursor:pointer\"><span class=\"sb-dot\"></span> {label}</div>"
            )
    desk_lines.append(f'  <div class="sb-footer">{footer_text}</div>')
    desk_lines.append("</nav>")

    mob_html = "\n".join(mob_lines)
    desk_html = "\n".join(desk_lines)
    return mob_html, desk_html


def patch_file(chapter_num):
    path = os.path.join(BASE, f"poglavlje{chapter_num:02d}.js")
    with open(path, encoding="utf-8") as f:
        content = f.read()

    original = content

    mob_html, desk_html = generate_sidebar_html(chapter_num)

    # Replace mobile drawer block
    content = re.sub(
        r'<div class="mob-drawer"[^>]*>.*?</div>\s*(?=\n?\s*<nav)',
        mob_html + "\n",
        content,
        count=1,
        flags=re.DOTALL,
    )

    # Replace desktop sidebar nav block
    content = re.sub(
        r'<nav class="sidebar"[^>]*>.*?</nav>',
        desk_html,
        content,
        count=1,
        flags=re.DOTALL,
    )

    # Fix tab-progress-row CSS margin (negative margin causes content overlap below tabs)
    content = content.replace(
        ".tab-progress-row{display:flex;align-items:center;gap:6px;margin:-20px 0 28px;flex-wrap:wrap}",
        ".tab-progress-row{display:flex;align-items:center;gap:6px;margin:8px 0 28px;flex-wrap:wrap}",
    )

    if content == original:
        print(f"WARN: no changes in poglavlje{chapter_num:02d}.js — check regex patterns")
    else:
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"OK: poglavlje{chapter_num:02d}.js patched")


if __name__ == "__main__":
    for ch in [12, 13, 14, 15]:
        patch_file(ch)
    print("Done.")
