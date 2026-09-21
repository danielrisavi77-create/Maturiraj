// @vitest-environment happy-dom
import React from 'react';
import { act, cleanup, render } from '@testing-library/react';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import Plan from '@/app/plan-ucenja/page.js?lang.jsx';
const state = vi.hoisted(() => ({ user: { id: 'student' }, loading: false, isPaid: true, savePlan: vi.fn(async () => ({ error: null })) }));
vi.mock('next/navigation', () => ({ useRouter: () => ({ push: vi.fn() }) }));
vi.mock('@/lib/hooks/useAuth', () => ({ useAuth: () => ({ user: state.user, loading: state.loading, isPaid: state.isPaid, isPro: false }) }));
vi.mock('@/lib/hooks/useSavePlan', () => ({ useSavePlan: () => ({ savePlan: state.savePlan, saving: false }) }));
vi.mock('@/lib/hooks/usePageTracking', () => ({ usePageTracking: vi.fn() }));
vi.mock('@/app/plan-ucenja/lib/planGenerator', () => ({ PREDMETI_PLAN: [{ id: 'hrv', name: 'Hrvatski', group: 'Obvezni', color: '#123456' }], buildFreePlan: () => [], buildProPlan: () => [] }));
vi.mock('@/app/plan-ucenja/components/StepIndicator', () => ({ default: () => null }));
vi.mock('@/app/plan-ucenja/components/SectionTitle', () => ({ default: () => null }));
vi.mock('@/app/plan-ucenja/components/SubjectGrid', () => ({ default: () => null }));
vi.mock('@/app/plan-ucenja/components/PreviewWeekCard', () => ({ default: () => null }));
vi.mock('@/app/plan-ucenja/components/PlanSidebar', () => ({ default: () => null }));
vi.mock('@/app/plan-ucenja/components/SavePlanModal', () => ({ default: () => null }));
vi.mock('@/app/plan-ucenja/components/CelebrationSplash', () => ({ default: () => null }));
vi.mock('@/app/plan-ucenja/components/ProUpsellModal', () => ({ default: () => null }));
beforeEach(() => {
  vi.useFakeTimers(); localStorage.clear(); state.savePlan.mockClear(); state.loading = false; state.isPaid = true;
  localStorage.setItem('maturiraj_pending_save', '1');
  localStorage.setItem('maturiraj_pending_plan', JSON.stringify({ selPredmeti: ['hrv'], satiTjedno: 8, tjednaDoMature: 5, planMode: 'free' }));
});
afterEach(() => { cleanup(); vi.useRealTimers(); });

it('saves the restored draft exactly once through StrictMode initialization', async () => {
  render(<React.StrictMode><Plan /></React.StrictMode>);
  await act(async () => vi.advanceTimersByTimeAsync(0));
  expect(state.savePlan).toHaveBeenCalledOnce();
  expect(state.savePlan).toHaveBeenCalledWith(expect.objectContaining({ userId: 'student', satiTjedno: 8, tjednaDoMature: 5, selectedSubjects: [expect.objectContaining({ id: 'hrv' })] }));
  expect(localStorage.getItem('maturiraj_pending_save')).toBeNull();
  expect(localStorage.getItem('maturiraj_pending_plan')).toBeNull();
});

it('waits for auth and retains the paid-plan requirement', async () => {
  state.loading = true; state.isPaid = false;
  const view = render(<Plan />);
  await act(async () => vi.advanceTimersByTimeAsync(0));
  expect(state.savePlan).not.toHaveBeenCalled();
  state.loading = false;
  view.rerender(<Plan />);
  await act(async () => vi.advanceTimersByTimeAsync(0));
  expect(state.savePlan).not.toHaveBeenCalled();
  expect(view.container.textContent).toContain('za spremanje plana treba Standard plan');
});
