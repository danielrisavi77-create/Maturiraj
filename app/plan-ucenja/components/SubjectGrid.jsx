'use client'
import React from 'react';
import { PREDMETI_PLAN } from '../lib/planGenerator';

/* ── Težina: broj → string tag ───────────────────────────── */
function tezinaTag(t) {
  if (t >= 1.30) return 'tesko';
  if (t >= 1.18) return 'izazovno';
  if (t >= 1.08) return 'srednje';
  return 'lakše';
}

const TEZINA = {
  tesko:    { label: 'Teško',    color: '#f87171', bg: 'rgba(248,113,113,.1)',  bdr: 'rgba(248,113,113,.25)' },
  izazovno: { label: 'Izazovno', color: '#fb923c', bg: 'rgba(251,146,60,.1)',   bdr: 'rgba(251,146,60,.25)'  },
  srednje:  { label: 'Srednje',  color: '#e9b446', bg: 'rgba(233,180,70,.1)',   bdr: 'rgba(233,180,70,.25)'  },
  lakše:    { label: 'Lakše',    color: '#3ecf6e', bg: 'rgba(62,207,110,.1)',   bdr: 'rgba(62,207,110,.25)'  },
};

/* Grupe u redoslijedu koji se prikazuje */
const GROUP_ORDER = [
  'Obvezni',
  'Strani jezici',
  'Prirodoslovno',
  'Društveno',
  'Umjetnički',
  'Klasični jezici',
];

/* ── CSS ─────────────────────────────────────────────────── */
const GRID_CSS = `
  .sg-card {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 14px;
    border-radius: 16px;
    border: 1px solid rgba(255,255,255,.08);
    background: linear-gradient(160deg, rgba(255,255,255,.038), rgba(255,255,255,.012));
    backdrop-filter: blur(20px);
    cursor: pointer;
    transition: border-color .15s, background .15s, transform .15s;
    user-select: none;
    position: relative;
    overflow: hidden;
    text-align: left;
    font-family: var(--fb);
  }
  .sg-card:hover {
    border-color: rgba(255,255,255,.16);
    background: linear-gradient(160deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
    transform: translateY(-1px);
  }
  .sg-card.sel {
    background: linear-gradient(160deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
    transform: translateY(-1px);
  }
  .sg-card:disabled {
    opacity: 0.35;
    cursor: not-allowed;
    transform: none !important;
  }
  .sg-sym {
    font-size: 22px;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -.02em;
    margin-bottom: 2px;
  }
  .sg-name {
    font-size: 13px;
    font-weight: 600;
    line-height: 1.3;
    color: var(--text);
  }
  .sg-badge {
    display: inline-flex;
    align-items: center;
    padding: 2px 7px;
    border-radius: 5px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .04em;
    text-transform: uppercase;
    width: fit-content;
  }
  .sg-check {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 800;
    transition: all .15s;
  }
  .sg-group-label {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 20px 0 10px;
  }
  .sg-group-label span {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: var(--muted);
    white-space: nowrap;
  }
  .sg-group-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--bdr);
  }
  .sg-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(148px, 1fr));
    gap: 8px;
  }
  @media (max-width: 480px) {
    .sg-grid { grid-template-columns: 1fr 1fr; }
  }
`;

/* ── Kartica predmeta ────────────────────────────────────── */
function SubjectCard({ predmet, selected, disabled, onToggle, disabledTitle }) {
  const tag = tezinaTag(predmet.tezina);
  const t = TEZINA[tag];
  const c = predmet.color;

  return (
    <button
      className={`sg-card${selected ? ' sel' : ''}`}
      onClick={() => !disabled && onToggle(predmet.id)}
      disabled={disabled}
      title={disabled ? disabledTitle : undefined}
      style={selected ? {
        borderColor: c + '55',
        boxShadow: `0 0 0 1px ${c}33, 0 4px 20px ${c}14`,
      } : {}}
    >
      {/* Colored accent line top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 2, borderRadius: '12px 12px 0 0',
        background: selected ? c : 'transparent',
        transition: 'background .2s',
      }} />

      {/* Check icon */}
      <div className="sg-check" style={{
        background: selected ? c : 'var(--s2)',
        border: selected ? 'none' : '1px solid var(--bdr)',
        color: selected ? '#000' : 'var(--muted)',
      }}>
        {selected ? '✓' : ''}
      </div>

      {/* Symbol */}
      <div className="sg-sym" style={{ color: c }}>{predmet.sym}</div>

      {/* Name */}
      <div className="sg-name">{predmet.name}</div>

      {/* Difficulty badge */}
      <div className="sg-badge" style={{
        background: t.bg,
        border: `1px solid ${t.bdr}`,
        color: t.color,
      }}>
        {t.label}
      </div>
    </button>
  );
}

/* ── Glavni komponent ────────────────────────────────────── */
export default function SubjectGrid({ selPredmeti = [], onToggle, maxPredmeta = 9 }) {
  const selectedSet = new Set(selPredmeti);
  const limitReached = selPredmeti.length >= maxPredmeta;

  return (
    <>
      <style>{GRID_CSS}</style>

      {GROUP_ORDER.map(groupName => {
        const preds = PREDMETI_PLAN.filter(p => p.group === groupName);
        if (!preds.length) return null;
        return (
          <div key={groupName}>
            <div className="sg-group-label">
              <span>{groupName}</span>
            </div>
            <div className="sg-grid">
              {preds.map(p => {
                const sel = selectedSet.has(p.id);
                const mutexConflict = !sel && p.mutexGroup &&
                  selPredmeti.some(x => {
                    const other = PREDMETI_PLAN.find(q => q.id === x);
                    return other?.mutexGroup === p.mutexGroup;
                  });
                const isDisabled = !sel && (limitReached || mutexConflict);
                const disabledTitle = mutexConflict
                  ? p.mutexGroup === 'mat_razina'
                    ? 'Možeš odabrati samo jednu razinu matematike'
                    : 'Možeš odabrati samo jedan strani jezik'
                  : `Maksimalno ${maxPredmeta} predmeta`;

                return (
                  <SubjectCard
                    key={p.id}
                    predmet={p}
                    selected={sel}
                    disabled={isDisabled}
                    disabledTitle={disabledTitle}
                    onToggle={onToggle}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
