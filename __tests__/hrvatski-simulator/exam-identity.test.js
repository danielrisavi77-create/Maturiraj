import { describe, it, expect } from 'vitest';
import { buildTrackerUpdate } from '../../app/discere/hrvatski/simulator/utils/pedagogy.js';

// onExamDone (app/discere/hrvatski/simulator/HrvatskiSimulator.jsx) je izvukao svoju
// errorTracker logiku u buildTrackerUpdate(qs, answers, errorTracker, examKey, sm2Update) —
// čistu funkciju testiranu ovdje bez React harnessa.

describe('buildTrackerUpdate', () => {
  it('krivi odgovor u adaptivnoj sesiji upisuje ključ <izvorniExam>_<srcId>', () => {
    const qs = [{ id: 1, _srcId: 42, _examKey: '2019_jesen_A', type: 'mc', topic: 'jez_gram', q: 'Pitanje?', sol: { cl: 'B' } }];
    const answers = { 1: 'A' };
    const tracker = buildTrackerUpdate(qs, answers, {}, 'adaptive_session', (entry, correct, quality) => ({ ...entry, ef: 2.3, reps: 0, seen: [correct, quality] }));
    expect(tracker['2019_jesen_A_42']).toBeTruthy();
    expect(tracker['2019_jesen_A_42'].examKey).toBe('2019_jesen_A');
    expect(tracker['2019_jesen_A_42'].qid).toBe(42);
    expect(tracker['2019_jesen_A_42'].seen).toEqual([false, 1]);
  });

  it('točan odgovor na postojeći zapis poziva sm2Update i briše ga kad je mastered', () => {
    const qs = [{ id: 1, type: 'mc', topic: 'jez_gram', q: 'Pitanje?', sol: { cl: 'B' } }];
    const answers = { 1: 'B' };
    const errorTracker = { '2024_ljeto_A_1': { count: 1, ef: 2.4, reps: 4, examKey: '2024_ljeto_A', qid: 1 } };
    let calledWith = null;
    const sm2Mastered = (entry, correct, quality) => { calledWith = [entry, correct, quality]; return null; };
    const tracker = buildTrackerUpdate(qs, answers, errorTracker, '2024_ljeto_A', sm2Mastered);
    expect(calledWith[1]).toBe(true);
    expect(calledWith[2]).toBe(4);
    expect(tracker['2024_ljeto_A_1']).toBeUndefined();
  });

  it('točan odgovor na pitanje bez postojećeg zapisa ne dira tracker', () => {
    const qs = [{ id: 1, type: 'mc', topic: 'jez_gram', q: 'Pitanje?', sol: { cl: 'B' } }];
    const answers = { 1: 'B' };
    const tracker = buildTrackerUpdate(qs, answers, {}, '2024_ljeto_A', () => { throw new Error('sm2Update se ne smije zvati'); });
    expect(tracker).toEqual({});
  });

  it('ne mutira ulazni errorTracker', () => {
    const qs = [{ id: 1, type: 'mc', topic: 'jez_gram', q: 'Pitanje?', sol: { cl: 'B' } }];
    const answers = { 1: 'A' };
    const errorTracker = {};
    buildTrackerUpdate(qs, answers, errorTracker, '2024_ljeto_A', (entry) => ({ ...entry, ef: 2 }));
    expect(errorTracker).toEqual({});
  });
});
