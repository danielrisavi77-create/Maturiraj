"use client";
import { useEffect } from "react";
import { setAdapter } from "@/lib/engleski-simulator/analytics";

/**
 * Wires the analytics module to the real tracking back-end.
 *
 * Priority order:
 *   1. window.gtag  — Google Analytics (GA4) if NEXT_PUBLIC_GA_MEASUREMENT_ID is set
 *   2. window.plausible — Plausible Analytics if the script is loaded
 *
 * Add script tags for your chosen provider in app/layout.jsx <head>.
 * This component only wires the adapter; it never loads external scripts itself.
 */
export default function AnalyticsInitializer() {
  useEffect(() => {
    // GA4 via gtag.js
    if (
      typeof window.gtag === "function" &&
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    ) {
      setAdapter((name, props) => {
        window.gtag("event", name, props);
      });
      return;
    }

    // Plausible — fires a custom event
    if (typeof window.plausible === "function") {
      setAdapter((name, props) => {
        window.plausible(name, { props });
      });
      return;
    }

    // No provider loaded — adapter stays null (console.debug in dev, silent in prod)
  }, []);

  return null;
}
