// @vitest-environment happy-dom
import React from 'react';
import { act, cleanup, render } from '@testing-library/react';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import Professor from '@/app/ai-profesor/page.js?lang.jsx';
const state = vi.hoisted(() => ({ user: null, profiles: new Map(), rpc: vi.fn(() => Promise.resolve({ data: null })) }));
vi.mock('next/navigation', () => ({ useRouter: () => ({ push: vi.fn() }) }));
vi.mock('@/lib/hooks/useAuth', () => ({ useAuth: () => ({ user: state.user }) }));
vi.mock('@/lib/hooks/usePageTracking', () => ({ usePageTracking: vi.fn() }));
vi.mock('@/lib/supabase/client', () => ({ createClient: () => ({
  rpc: state.rpc,
  from(table) {
    let id;
    const query = {
      select: () => query, order: () => query, limit: () => query,
      eq: (field, value) => { if (field === 'id') id = value; return query; },
      single: () => table === 'profiles' ? state.profiles.get(id).promise : Promise.resolve({ data: null }),
    };
    return query;
  },
}) }));
beforeEach(() => {
  state.user = null; state.rpc.mockClear();
  for (const id of ['a', 'b']) {
    let resolve;
    const promise = new Promise(r => { resolve = r; });
    state.profiles.set(id, { promise, resolve });
  }
});
afterEach(() => { cleanup(); state.profiles.clear(); });

it('restores the guest greeting after a free account signs out', async () => {
  state.user = { id: 'a' };
  const view = render(<Professor />);
  await act(async () => state.profiles.get('a').resolve({ data: { plan_type: null } }));
  expect(view.container.textContent).toContain('AI Profesor je dostupan isključivo uz');
  state.user = null;
  view.rerender(<Professor />);
  expect(view.container.textContent).toContain('moraš biti prijavljen');
});

it('renders the guest greeting immediately and ignores an obsolete account profile', async () => {
  const view = render(<Professor />);
  expect(view.container.textContent).toContain('moraš biti prijavljen');
  state.user = { id: 'a' };
  view.rerender(<Professor />);
  state.user = { id: 'b' };
  view.rerender(<Professor />);
  await act(async () => state.profiles.get('b').resolve({ data: { plan_type: 'starter' } }));
  expect(view.container.textContent).toContain('AI Profesor je dostupan isključivo uz');
  await act(async () => state.profiles.get('a').resolve({ data: { plan_type: 'pro' } }));
  expect(state.rpc).not.toHaveBeenCalled();
  expect(view.container.textContent).toContain('AI Profesor je dostupan isključivo uz');
  state.user = null;
  view.rerender(<Professor />);
  expect(view.container.textContent).toContain('moraš biti prijavljen');
});
