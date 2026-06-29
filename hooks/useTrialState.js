"use client";
import { useState, useEffect } from "react";

const KEY = "maturiraj_trial_dismissed";

export function useTrialState() {
  const [shown, setShown] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Provjeri localStorage nakon mounta
    const alreadyDismissed = !!localStorage.getItem(KEY);
    setDismissed(alreadyDismissed);
    setMounted(true);

    if (alreadyDismissed) return;

    // Pokaži popup nakon 30s
    const t = setTimeout(() => setShown(true), 30000);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    setShown(false);
    setDismissed(true);
    try { localStorage.setItem(KEY, "1"); } catch(e) {}
  }

  return { shown, dismissed, dismiss, mounted };
}