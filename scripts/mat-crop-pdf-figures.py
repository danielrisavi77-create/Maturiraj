#!/usr/bin/env python
"""Crop the source PDF page for each qid of an exam into a PNG that shows the
question text plus its figure, for visual auditing against the rendered SVGs.

Usage:
    python scripts/mat-crop-pdf-figures.py <examId> [qid1,qid2,...] [overrides]

Reads _audit/pdf/<examId>.pdf, locates each task/subtask marker block (e.g.
"13." or "22.1.") at the left margin via PyMuPDF block text, and crops from
just above that block down to just above the next "boundary" block on the
same page (the next task/subtask number, the next left-column multiple-choice
option "A./B./C./D.", or an "Odgovor:" answer block) — or a fixed fallback
height when the task is the last thing on its page. qids may be whole task
numbers ("13") or decimal subtask numbers ("22.1").
Crops are written to _audit/render/<examId>/<examId>__<qid>.pdf.png

Optional 2nd arg: comma-separated qids to restrict output to (default: all
found tasks/subtasks). Optional 3rd arg: explicit y-bound overrides as
"qid=page:top:bottom,qid=page:top:bottom" (page_index is 0-based) for a task
whose useful content ends earlier/later than the next boundary.
"""
import sys
import re
import pymupdf as fitz

ZOOM = 2.5  # render resolution multiplier
MARGIN_TOP = 12  # px above the task-number line to include
LEFT_MARGIN_X = 110  # marker blocks (task/subtask numbers) start left of this
CONTENT_MAX_X = 495  # excludes the right-margin score/"bod" checkbox column

MARKER_RE = re.compile(r'^\d{1,2}\.(?:\d{1,2}\.)?\t')  # "7.\t" or "22.1.\t"
OPTION_RE = re.compile(r'^[A-D]\.\t')  # left-column multiple-choice option


def _is_boundary_block(text, x0):
    if x0 >= CONTENT_MAX_X:
        return False
    t = text.strip()
    if MARKER_RE.match(text) or OPTION_RE.match(text):
        return True
    if t.startswith('Odgovor'):
        return True
    return False


def find_task_lines(doc):
    """Map qid (str, e.g. "7" or "22.1") -> (page_index, y_top_of_marker_block)."""
    out = {}
    for i in range(doc.page_count):
        for b in doc[i].get_text('blocks'):
            x0, y0, x1, y1, text, bno, btype = b
            if x0 >= LEFT_MARGIN_X:
                continue
            m = re.match(r'^(\d{1,2}(?:\.\d{1,2})?)\.\t', text)
            if not m:
                continue
            qid = m.group(1)
            out.setdefault(qid, []).append((i, y0))
    # keep the first occurrence per qid (task numbers are unique per exam)
    return {qid: locs[0] for qid, locs in out.items()}


def extend_for_drawings(doc, page_idx, y_top, y_bottom, hard_cap):
    """Push y_bottom down to cover any vector drawing (figure) that starts
    before y_bottom but whose own bbox extends past it — text-block
    boundaries (e.g. an "Odgovor:" line) sometimes sit slightly above where
    a hand-drawn sketch actually ends. Never crosses hard_cap."""
    max_y1 = y_bottom
    rects = [d['rect'] for d in doc[page_idx].get_drawings()]
    rects += [fitz.Rect(info['bbox']) for info in doc[page_idx].get_image_info()]
    for r in rects:
        if r.y0 < y_bottom and r.y1 > y_bottom and r.y0 >= y_top:
            max_y1 = max(max_y1, r.y1)
    return min(max_y1 + 4, hard_cap)


def find_next_boundary_y(doc, page_idx, y_top):
    """Smallest y0 > y_top on page_idx among marker/option/Odgovor blocks."""
    next_y = None
    for b in doc[page_idx].get_text('blocks'):
        x0, y0, x1, y1, text, bno, btype = b
        if y0 <= y_top:
            continue
        if not _is_boundary_block(text, x0):
            continue
        if next_y is None or y0 < next_y:
            next_y = y0
    return next_y


def main():
    if len(sys.argv) < 2:
        print('Usage: python scripts/mat-crop-pdf-figures.py <examId>', file=sys.stderr)
        sys.exit(1)
    exam_id = sys.argv[1]
    qid_filter = None
    if len(sys.argv) > 2 and sys.argv[2]:
        qid_filter = {q for q in sys.argv[2].split(',')}
    overrides = {}
    if len(sys.argv) > 3:
        # optional: qid=page:top:bottom,qid=page:top:bottom
        for part in sys.argv[3].split(','):
            qid, spec = part.split('=')
            p, t, b = spec.split(':')
            overrides[qid] = (int(p), float(t), float(b))

    pdf_path = f'_audit/pdf/{exam_id}.pdf'
    out_dir = f'_audit/render/{exam_id}'
    import os
    os.makedirs(out_dir, exist_ok=True)

    doc = fitz.open(pdf_path)
    task_lines = find_task_lines(doc)
    qids = sorted(task_lines.keys())
    if qid_filter is not None:
        qids = [q for q in qids if q in qid_filter]

    results = []
    errors = []
    for qid in qids:
        page_idx, y_top = task_lines[qid]
        if qid in overrides:
            page_idx, y_top, y_bottom = overrides[qid]
        else:
            # find the next boundary block (task/subtask marker, left-column
            # option, or "Odgovor:" line) on the same page to bound the crop
            next_y = find_next_boundary_y(doc, page_idx, y_top)
            page_rect = doc[page_idx].rect
            hard_cap = (next_y + 15) if next_y is not None else (page_rect.height - 45)
            y_bottom = (next_y - 6) if next_y is not None else (page_rect.height - 45)
            y_bottom = extend_for_drawings(doc, page_idx, y_top, y_bottom, hard_cap)
        try:
            page = doc[page_idx]
            rect = fitz.Rect(0, max(0, y_top - MARGIN_TOP), page.rect.width, y_bottom)
            pix = page.get_pixmap(matrix=fitz.Matrix(ZOOM, ZOOM), clip=rect)
            out_path = f'{out_dir}/{exam_id}__{qid}.pdf.png'
            pix.save(out_path)
            results.append({'qid': qid, 'page': page_idx, 'path': out_path})
        except Exception as e:
            errors.append(f'qid {qid}: {e}')

    import json
    print(json.dumps({'results': results, 'errors': errors}, indent=2, ensure_ascii=False))


if __name__ == '__main__':
    main()
