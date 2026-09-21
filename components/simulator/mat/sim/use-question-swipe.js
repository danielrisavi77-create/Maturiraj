import { useCallback, useRef } from 'react';

export function useQuestionSwipe(current, count, onNavigate) {
  const touch = useRef(null);
  const onTouchStart = useCallback(ev => {
    const point = ev.touches?.[0];
    if (point) touch.current = { x: point.clientX, y: point.clientY, time: Date.now() };
  }, []);
  const onTouchEnd = useCallback(ev => {
    const start = touch.current;
    touch.current = null;
    if (!start || ev.target?.closest?.('input,textarea,.calc-panel,.symbar,.opt,button,a,.fig-zoomable')) return;
    const point = ev.changedTouches?.[0];
    if (!point || Date.now() - start.time > 600) return;
    const dx = point.clientX - start.x, dy = point.clientY - start.y;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 2) {
      if (dx < 0 && current < count - 1) onNavigate(current + 1);
      else if (dx > 0 && current > 0) onNavigate(current - 1);
    }
  }, [current, count, onNavigate]);
  return { onTouchStart, onTouchEnd };
}
