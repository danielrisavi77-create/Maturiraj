'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { computeSecLeft } from './helpers';

export function useExamDeadline(deadline, enabled, onExpire) {
  const [secLeft, setSecLeft] = useState(() => deadline ? computeSecLeft(deadline, Date.now()) : null);
  const expire = useRef(onExpire);
  useLayoutEffect(() => { expire.current = onExpire; }, [onExpire]);

  useEffect(() => {
    if (!enabled || !deadline) return;
    let timer;
    let expired = false;
    function schedule() {
      timer = setTimeout(update, Math.min(1000, Math.max(0, deadline - Date.now())));
    }
    function update() {
      clearTimeout(timer);
      if (expired) return;
      const remaining = computeSecLeft(deadline, Date.now());
      setSecLeft(remaining);
      if (remaining <= 0) {
        expired = true;
        expire.current();
      } else schedule();
    }
    function onVisibility() { if (!document.hidden) update(); }
    schedule();
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [deadline, enabled]);

  return secLeft;
}
