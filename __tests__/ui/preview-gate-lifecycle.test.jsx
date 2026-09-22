// @vitest-environment happy-dom
import React from 'react';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import SimulatorPreviewGate from '@/components/discere/paywall/SimulatorPreviewGate';
import PaywallModal from '@/components/discere/paywall/PaywallModal';
import BlurLockOverlay from '@/components/discere/paywall/BlurLockOverlay';

vi.mock('next/navigation', () => ({ useRouter: () => ({ push: vi.fn() }) }));
afterEach(() => { cleanup(); vi.useRealTimers(); });

it('opens on losing access, keeps dismissed questions locked, and permits manual reopening', () => {
  const content = ({ isLocked, openPaywall }) => <button onClick={openPaywall}>{isLocked ? 'locked' : 'available'}</button>;
  const view = render(<SimulatorPreviewGate userAccess={{ isLoggedIn: true, subscriptionTier: 'pro' }} currentQuestionIndex={0}>{content}</SimulatorPreviewGate>);
  expect(screen.queryByRole('dialog')).toBeNull();
  view.rerender(<SimulatorPreviewGate userAccess={{ isLoggedIn: true, subscriptionTier: 'free' }} currentQuestionIndex={0}>{content}</SimulatorPreviewGate>);
  expect(screen.getByRole('dialog')).toBeTruthy();
  fireEvent.keyDown(document, { key: 'Escape' });
  expect(screen.queryByRole('dialog')).toBeNull();
  view.rerender(<SimulatorPreviewGate userAccess={{ isLoggedIn: true, subscriptionTier: 'free' }} currentQuestionIndex={4}>{content}</SimulatorPreviewGate>);
  expect(screen.queryByRole('dialog')).toBeNull();
  fireEvent.click(screen.getByRole('button', { name: 'locked' }));
  expect(screen.getByRole('dialog')).toBeTruthy();
});

it('restarts the modal entrance and releases body scroll and timers on close', () => {
  vi.useFakeTimers();
  const view = render(<PaywallModal open />);
  expect(document.body.style.overflow).toBe('hidden');
  expect(screen.getByRole('dialog').children[2].style.animation).toBe('');
  act(() => vi.advanceTimersByTime(12));
  expect(screen.getByRole('dialog').children[2].style.animation).toContain('pw-modal-scale-in');
  view.rerender(<PaywallModal open={false} />);
  expect(document.body.style.overflow).toBe('');
  view.rerender(<PaywallModal open />);
  expect(screen.getByRole('dialog').children[2].style.animation).toBe('');
  view.unmount();
  expect(vi.getTimerCount()).toBe(0);
});

it('keeps an already mounted blur overlay for its exit transition', () => {
  const view = render(<BlurLockOverlay visible={false} lockMessage="locked content" />);
  expect(screen.queryByText('locked content')).toBeNull();
  view.rerender(<BlurLockOverlay visible lockMessage="locked content" />);
  expect(screen.getByText('locked content')).toBeTruthy();
  view.rerender(<BlurLockOverlay visible={false} lockMessage="locked content" />);
  expect(screen.getByText('locked content')).toBeTruthy();
});
