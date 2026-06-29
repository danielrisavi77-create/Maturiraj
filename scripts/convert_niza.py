"""
Converts Maturiraj_Engleski_Niza_PoglavljeXX.html files from Downloads
into React component .js files for the maturiraj.hr Next.js app.

Usage: python scripts/convert_niza.py
"""

import re
import os

DOWNLOADS = r"C:\Users\Daniel\Dropbox\My PC (DESKTOP-LJMIVR9)\Downloads"
OUTPUT_DIR = r"C:\Users\Daniel\Desktop\maturiraj\app\skripte\data\eng\niza"

# Which source file to use for each chapter (handle duplicates)
# We pick the most specific / latest version
CHAPTER_FILES = {
    1:  "Maturiraj_Engleski_Niza_Poglavlje01_v3.html",
    2:  "Maturiraj_Engleski_Niza_Poglavlje02.html",
    3:  "Maturiraj_Engleski_Niza_Poglavlje03.html",
    4:  "Maturiraj_Engleski_Niza_Poglavlje04.html",
    5:  "Maturiraj_Engleski_Niza_Poglavlje05.html",
    6:  "Maturiraj_Engleski_Niza_Poglavlje06.html",
    7:  "Maturiraj_Engleski_Niza_Poglavlje07.html",
    8:  "Maturiraj_Engleski_Niza_Poglavlje08.html",
    9:  "Maturiraj_Engleski_Niza_Poglavlje09.html",
    10: "Maturiraj_Engleski_Niza_Poglavlje10.html",
    11: "Maturiraj_Engleski_Niza_Poglavlje11.html",
}

# All 15 chapters: (number, category_label, sidebar_label)
ALL_CHAPTERS = [
    (1,  "// Gramatika",    "01 &middot; Present Simple i Continuous"),
    (2,  "// Gramatika",    "02 &middot; Past Simple i Continuous"),
    (3,  "// Gramatika",    "03 &middot; Present Perfect"),
    (4,  "// Gramatika",    "04 &middot; Futur: will i going to"),
    (5,  "// Gramatika",    "05 &middot; Modal glagoli"),
    (6,  "// Gramatika",    "06 &middot; Uvjetne re\u010denice 0, 1, 2"),
    (7,  "// Gramatika",    "07 &middot; Pasiv"),
    (8,  "// Vje\u0161tine", "08 &middot; Vokabular \u2014 \u017eivot"),
    (9,  "// Vje\u0161tine", "09 &middot; \u010citanje s razumijevanjem"),
    (10, "// Vje\u0161tine", "10 &middot; Pisanje \u2014 kratki tekst"),
    (11, "// Vje\u0161tine", "11 &middot; Strategije slu\u0161anja"),
    (12, "// Vje\u0161tine", "12 &middot; Vi\u0161estruki izbor \u2014 taktika"),
    (13, "// Pro\u0161ireno", "13 &middot; Neupravni govor"),
    (14, "// Pro\u0161ireno", "14 &middot; \u010clanovi: a / an / the"),
    (15, "// Pro\u0161ireno", "15 &middot; Komparativ i tag pitanja"),
]


def generate_sidebar_html(chapter_num):
    """Generate fresh mobile drawer + desktop sidebar HTML for this chapter."""
    # --- Mobile drawer ---
    mob_lines = [
        '<div class="mob-drawer" id="mobDrawer">',
        '  <button class="mob-drawer-close" onclick="closeMobDrawer()">&#x2715; Zatvori</button>',
    ]
    prev_cat = None
    for num, cat, label in ALL_CHAPTERS:
        if cat != prev_cat:
            mob_lines.append(f'  <div class="sb-label">{cat}</div>')
            prev_cat = cat
        if num == chapter_num:
            mob_lines.append(f'  <div class="sb-item active" onclick="closeMobDrawer()"><span class="sb-dot"></span> {label}</div>')
        else:
            mob_lines.append(f'  <div class="sb-item" onclick="closeMobDrawer();window.location=\'chapter{num:02d}.html\'"><span class="sb-dot"></span> {label}</div>')
    mob_lines.append('</div>')

    # --- Desktop sidebar ---
    footer_text = f"{chapter_num:02d} / 15 &middot; maturiraj.hr"
    desk_lines = [
        '<nav class="sidebar">',
        '  <div class="sb-brand">',
        '    <div class="sb-logo"><svg viewBox="0 0 14 14" fill="none"><path d="M2 3h10M2 7h7M2 11h5" stroke="#080B10" stroke-width="2" stroke-linecap="round"/></svg></div>',
        '    <div><div class="sb-name">Maturiraj.hr</div><div class="sb-sub">EN &middot; ni\u017ea razina</div></div>',
        '  </div>',
    ]
    prev_cat = None
    for num, cat, label in ALL_CHAPTERS:
        if cat != prev_cat:
            desk_lines.append(f'  <div class="sb-label">{cat}</div>')
            prev_cat = cat
        if num == chapter_num:
            desk_lines.append(f'  <div class="sb-item active"><span class="sb-dot"></span> {label}</div>')
        else:
            desk_lines.append(f'  <div class="sb-item" onclick="window.location=\'chapter{num:02d}.html\'" style="cursor:pointer"><span class="sb-dot"></span> {label}</div>')
    desk_lines.append(f'  <div class="sb-footer">{footer_text}</div>')
    desk_lines.append('</nav>')

    mob_html = "\n".join(mob_lines)
    desk_html = "\n".join(desk_lines)
    return mob_html, desk_html


def fix_body_nav(body, chapter_num):
    """Replace sidebar HTML and fix breadcrumb navigation in the extracted body."""
    mob_html, desk_html = generate_sidebar_html(chapter_num)

    # Replace mobile drawer (from <div class="mob-drawer"...> to its closing </div>)
    body = re.sub(
        r'<div class="mob-drawer"[^>]*>.*?</div>\s*(?=\n?<nav)',
        mob_html + "\n",
        body,
        count=1,
        flags=re.DOTALL,
    )

    # Replace desktop sidebar (from <nav class="sidebar"...> to </nav>)
    body = re.sub(
        r'<nav class="sidebar"[^>]*>.*?</nav>',
        desk_html,
        body,
        count=1,
        flags=re.DOTALL,
    )

    # Fix breadcrumb "← chapters" — add onclick to call back navigation
    body = re.sub(
        r'<span>\s*(&larr;|←)\s*chapters\s*</span>',
        r'<span onclick="window.location=\'index.html\'" style="cursor:pointer">← chapters</span>',
        body,
    )

    # Fix hero eyebrow "of 12" → "/ 15"
    body = re.sub(r'chapter (\d+) of 12', r'chapter \1 / 15', body)

    # Fix sidebar footer "XX / 12" → "XX / 15"
    body = re.sub(r'(\d{2}) / 12 (&middot;|·)', r'\1 / 15 \2', body)

    # Fix tab-progress-row margin (negative margin causes overlap below tabs)
    body = body.replace(
        '.tab-progress-row{display:flex;align-items:center;gap:6px;margin:-20px 0 28px;flex-wrap:wrap}',
        '.tab-progress-row{display:flex;align-items:center;gap:6px;margin:8px 0 28px;flex-wrap:wrap}'
    )

    return body


def escape_template_literal(text):
    """Escape backticks and ${} for use inside JS template literals."""
    text = text.replace("\\", "\\\\")  # escape existing backslashes first
    text = text.replace("`", "\\`")
    text = text.replace("${", "\\${")
    return text


def extract_css(html):
    """Extract content of all <style> blocks concatenated."""
    styles = re.findall(r"<style[^>]*>(.*?)</style>", html, re.DOTALL | re.IGNORECASE)
    return "\n".join(styles).strip()


def extract_body(html):
    """Extract the inner HTML of <body>."""
    m = re.search(r"<body[^>]*>(.*?)</body>", html, re.DOTALL | re.IGNORECASE)
    if m:
        return m.group(1).strip()
    return ""


def extract_js(html):
    """Extract content of all <script> blocks (excluding src= ones) concatenated."""
    scripts = re.findall(
        r"<script(?:\s+(?!src)[^>]*)?>(?!\s*//\s*<!\[CDATA\[)(.*?)</script>",
        html,
        re.DOTALL | re.IGNORECASE,
    )
    # Also catch simple <script> with no attributes
    all_scripts = re.findall(
        r"<script(?:\s[^>]*)?>(?!.*?src=)(.*?)</script>",
        html,
        re.DOTALL | re.IGNORECASE,
    )
    # Use the simplest approach: all inline scripts
    inline = re.findall(r"<script>(.*?)</script>", html, re.DOTALL)
    return "\n".join(inline).strip()


def detect_chapter_num_from_body(body):
    """Detect which chapter this body HTML actually belongs to."""
    # Look for sidebar active item or hero eyebrow
    m = re.search(r"chapter (\d+) of \d+", body)
    if m:
        return int(m.group(1))
    # Fallback: active sidebar item
    m = re.search(r'sb-item active[^>]*>[^<]*(\d+)\s*[·&]', body)
    if m:
        return int(m.group(1))
    return None


def build_nav_interceptor(chapter_num, total=15):
    """Build the nav interceptor JS for this chapter."""
    lines = []
    lines.append("    function navInterceptor(e) {")
    lines.append("      const el = e.target.closest('a[href], [onclick]');")
    lines.append("      if (!el) return;")
    lines.append("      const href = el.getAttribute('href') || '';")
    lines.append("      const onclick = el.getAttribute('onclick') || '';")
    lines.append("      // Back to chapter list (breadcrumb)")
    lines.append(r"      if (/index\.html/.test(href) || /index\.html/.test(onclick)) {")
    lines.append("        e.preventDefault(); e.stopPropagation();")
    lines.append("        const nav = navRef.current || {};")
    lines.append("        if (nav.onBack) nav.onBack();")
    lines.append("        return;")
    lines.append("      }")
    lines.append(r"      const m = href.match(/chapter(\d+)\.html/) ||")
    lines.append(r"                onclick.match(/chapter(\d+)\.html/);")
    lines.append("      if (!m) return;")
    lines.append("      e.preventDefault();")
    lines.append("      e.stopPropagation();")
    lines.append("      const num = parseInt(m[1]);")
    lines.append("      const nav = navRef.current || {};")
    lines.append("      if (nav.onNavigate) { nav.onNavigate(num); return; }")
    next_num = chapter_num + 1
    prev_num = chapter_num - 1
    if chapter_num == 1:
        lines.append(f"      if (num === {next_num} && nav.onNext) nav.onNext();")
        lines.append("      else if (nav.onBack) nav.onBack();")
    elif chapter_num == total:
        lines.append(f"      if (num === {prev_num} && nav.onPrev) nav.onPrev();")
        lines.append("      else if (nav.onBack) nav.onBack();")
    else:
        lines.append(f"      if (num === {next_num} && nav.onNext) nav.onNext();")
        lines.append(f"      else if (num === {prev_num} && nav.onPrev) nav.onPrev();")
        lines.append("      else if (nav.onBack) nav.onBack();")
    lines.append("    }")
    return "\n".join(lines)


def build_js_module(chapter_num, css, body, js_code):
    nn = str(chapter_num).zfill(2)
    fn_name = f"ENG_NIZA_CH{nn}"
    css_var = f"CH{nn}_CSS"
    body_var = f"CH{nn}_BODY"
    js_var = f"CH{nn}_JS"
    root_class = f"skripta-ch{nn}-root"
    style_id = f"skripta-ch{nn}-style"
    script_id = f"skripta-ch{nn}-js"

    nav = build_nav_interceptor(chapter_num)

    # Fix sidebar navigation before escaping
    body = fix_body_nav(body, chapter_num)

    # Fix tab-progress-row margin (negative margin causes content overlap below tabs)
    css = css.replace(
        '.tab-progress-row{display:flex;align-items:center;gap:6px;margin:-20px 0 28px;flex-wrap:wrap}',
        '.tab-progress-row{display:flex;align-items:center;gap:6px;margin:8px 0 28px;flex-wrap:wrap}'
    )

    css_escaped = escape_template_literal(css)
    body_escaped = escape_template_literal(body)
    js_escaped = escape_template_literal(js_code)

    module = f"""// Maturiraj.hr — Engleski niža razina · Poglavlje {chapter_num}
// Auto-generated JS modul — sadržaj identičan originalnom HTML fajlu
"use client";
import {{ useEffect, useRef }} from "react";

export default function {fn_name}({{ onBack, onNext, onPrev, onNavigate }}) {{
  const navRef = useRef(null);
  navRef.current = {{ onBack, onNext, onPrev, onNavigate }};

  useEffect(() => {{
    const styleId = "{style_id}";
    if (!document.getElementById(styleId)) {{
      const s = document.createElement("style");
      s.id = styleId;
      s.textContent = {css_var};
      document.head.appendChild(s);
    }}

    const scriptEl = document.createElement("script");
    scriptEl.id = "{script_id}";
    scriptEl.textContent = {js_var};
    document.body.appendChild(scriptEl);

{nav}
    document.addEventListener('click', navInterceptor, true);

    return () => {{
      document.removeEventListener('click', navInterceptor, true);
      const el = document.getElementById("{script_id}");
      if (el) el.remove();
    }};
  }}, []);

  return (
    <div
      className="{root_class}"
      dangerouslySetInnerHTML={{{{ __html: {body_var} }}}}
    />
  );
}}

/* ─── CONTENT ─────────────────────────────────────────────── */
const {css_var} = `
{css_escaped}
`;

const {body_var} = `{body_escaped}`;

const {js_var} = `{js_escaped}`;
"""
    return module


def main():
    for chapter_num, filename in CHAPTER_FILES.items():
        src_path = os.path.join(DOWNLOADS, filename)
        if not os.path.exists(src_path):
            print(f"ERROR: Not found: {src_path}")
            continue

        with open(src_path, "r", encoding="utf-8", errors="replace") as f:
            html = f.read()

        css = extract_css(html)
        body = extract_body(html)
        js_code = extract_js(html)

        # Sanity check
        detected = detect_chapter_num_from_body(body)
        nn = str(chapter_num).zfill(2)
        if detected and detected != chapter_num:
            print(f"WARNING: poglavlje{nn}.js — source file says ch{detected}, expected ch{chapter_num}")
        else:
            print(f"OK: poglavlje{nn}.js — ch{detected or '?'} detected")

        module = build_js_module(chapter_num, css, body, js_code)

        out_path = os.path.join(OUTPUT_DIR, f"poglavlje{nn}.js")
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(module)
        print(f"Written: {out_path} ({len(module):,} chars)")

    print("\nDone. Run: pnpm build")


if __name__ == "__main__":
    main()
