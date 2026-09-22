// @vitest-environment happy-dom
import { act, cleanup, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { useChildDetail } from '@/lib/roditelji/useChildDetail';
const pending = vi.hoisted(() => new Map());
vi.mock('@/lib/supabase/client', () => ({ createClient: () => ({
  from(table) {
    let id;
    const query = {
      select: () => query,
      eq: (field, value) => { if (field === 'user_id') id = value; return query; },
      gte: () => query, order: () => query, single: () => query,
      then(resolve, reject) {
        return (table === 'activity_events' ? pending.get(id).promise : Promise.resolve({ data: table === 'study_plans' ? null : [] })).then(resolve, reject);
      },
    };
    return query;
  },
}) }));
beforeEach(() => {
  for (const id of ['a', 'b']) {
    let resolve;
    const promise = new Promise(r => { resolve = r; });
    pending.set(id, { promise, resolve });
  }
});
afterEach(() => { cleanup(); pending.clear(); });

it('ignores a previous child response that arrives after the current selection', async () => {
  const view = renderHook(({ id }) => useChildDetail(id), { initialProps: { id: 'a' } });
  view.rerender({ id: 'b' });
  await act(async () => pending.get('b').resolve({ data: [] }));
  expect(view.result.current.data.childId).toBe('b');
  await act(async () => pending.get('a').resolve({ data: [] }));
  expect(view.result.current.data.childId).toBe('b');
});

it('clears the previous child detail when selection is removed', async () => {
  const view = renderHook(({ id }) => useChildDetail(id), { initialProps: { id: 'a' } });
  await act(async () => pending.get('a').resolve({ data: [] }));
  view.rerender({ id: null });
  expect(view.result.current).toEqual({ data: null, loading: false, error: null });
});
