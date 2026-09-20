"use client";
import { useState, useEffect } from "react";
import { useHydrated } from "@/lib/hooks/useHydrated";
import { useLocalStorageText } from "@/lib/hooks/useLocalStorageJson";

const KEY = "maturiraj_trial_dismissed";

export function useTrialState() {
  const [shown, setShown] = useState(false);
  const [dismissal, setDismissal] = useLocalStorageText(KEY);
  const dismissed = !!dismissal;
  const mounted = useHydrated();

  useEffect(() => {
    if (!mounted || dismissed) return;

    // Pokaži popup nakon 30s
    const t = setTimeout(() => setShown(true), 30000);
    return () => clearTimeout(t);
  }, [mounted, dismissed]);

  function dismiss() {
    setShown(false);
    setDismissal("1");
  }

  return { shown: shown && !dismissed, dismissed, dismiss, mounted };
}
