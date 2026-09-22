import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

export function useQuestionTime(initialTimes, currentQuestion, done) {
  const [qTimes, setQTimes] = useState(() => initialTimes || {});
  const [qElapsed, setQElapsed] = useState(0);
  const times = useRef(qTimes);
  const started = useRef(null);

  useLayoutEffect(() => { started.current = Date.now(); }, []);
  useEffect(() => {
    if (done) return;
    const timer = setInterval(() => {
      setQElapsed(Math.round((Date.now() - started.current) / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, [currentQuestion, done]);

  const recordTime = useCallback(qid => {
    const now = Date.now();
    const elapsed = Math.round((now - started.current) / 1000);
    const next = { ...times.current, [qid]: (times.current[qid] || 0) + elapsed };
    times.current = next;
    started.current = now;
    setQTimes(next);
    return next;
  }, []);

  return { qTimes, qElapsed, setQElapsed, recordTime };
}
