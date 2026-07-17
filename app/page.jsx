"use client";

import { useEffect, useState } from "react";
import { useTrialState } from "@/hooks/useTrialState";

import IntroScreen from "@/app/components/IntroScreen";

import HeroCountdown from "@/components/landing/HeroCountdown";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import KakoFunkcionira from "@/components/landing/KakoFunkcionira";
import Funkcije from "@/components/landing/Funkcije";
import Testimonijali from "@/components/landing/Testimonijali";
import Compare from "@/components/landing/Compare";
import PlanUcenjaTeaser from "@/components/landing/PlanUcenjaTeaser";
import DanasUcim from "@/components/landing/DanasUcim";
import PredmetiPrijemni from "@/components/landing/PredmetiPrijemni";
import RoditeljiUrgency from "@/components/landing/RoditeljiUrgency";
import Cijene from "@/components/landing/Cijene";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import TrialPopup from "@/components/shared/TrialPopup";
import TrialBanner from "@/components/shared/TrialBanner";

export default function Page() {
  const [showIntro, setShowIntro] = useState(false);

  const {
    shown: trialShown,
    dismissed: trialDismissed,
    dismiss: trialDismiss,
    mounted: trialMounted,
  } = useTrialState();

  function startTrial() {
    trialDismiss();
    window.location.href = "/discere";
  }

  function goToIntro() {
    window.location.href = "/?intro=1";
  }

  useEffect(() => {
    if (showIntro) {
      document.body.classList.add('intro-active');
    } else {
      document.body.classList.remove('intro-active');
    }
    return () => document.body.classList.remove('intro-active');
  }, [showIntro]);

  useEffect(() => {
    const hasSeenIntro =
      localStorage.getItem("maturiraj_intro_seen") === "true";
    const params = new URLSearchParams(window.location.search);
    const forceIntro = params.get("intro") === "1";

    const frame = window.requestAnimationFrame(() => {
      setShowIntro(forceIntro || !hasSeenIntro);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (showIntro) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, [showIntro]);

  const handleFinishIntro = () => {
    localStorage.setItem("maturiraj_intro_seen", "true");
    setShowIntro(false);

    if (window.location.search.includes("intro=1")) {
      window.history.replaceState({}, "", "/");
    }
  };

  if (showIntro) {
    return <IntroScreen onFinish={handleFinishIntro} />;
  }

  return (
    <>
      {trialMounted && trialShown && !trialDismissed && (
        <TrialPopup onStart={startTrial} onDismiss={trialDismiss} />
      )}

      {trialMounted && !trialDismissed && (
        <TrialBanner onStart={startTrial} onDismiss={trialDismiss} />
      )}

      <HeroCountdown />

      <Hero
        onSkripte={() => (window.location.href = "/skripte")}
        onPlan={() => (window.location.href = "/pro")}
        onChat={() => (window.location.href = "/ai-profesor")}
        onPrijemni={() => (window.location.href = "/prijemni")}
        onKalkulator={() => (window.location.href = "/kalkulator")}
        onTermini={() => (window.location.href = "/termini")}
        trialDismissed={trialDismissed}
        onStartTrial={startTrial}
      />

      <KakoFunkcionira />

      <Funkcije />

      <Testimonijali />

      <Compare onPlan={() => (window.location.href = "/pro")} />

      <PlanUcenjaTeaser
        onPlanUcenja={() => (window.location.href = "/plan-ucenja")}
        onPlan={() => (window.location.href = "/pro")}
      />

      <DanasUcim />

      <PredmetiPrijemni
        onSkripte={() => (window.location.href = "/skripte")}
        onPrijemni={() => (window.location.href = "/prijemni")}
      />

      <RoditeljiUrgency
        onRoditelji={() => (window.location.href = "/roditelji")}
        onPlan={() => (window.location.href = "/pro")}
        onSkripte={() => (window.location.href = "/skripte")}
      />

      <Cijene
        onSkripte={() => (window.location.href = "/skripte")}
        onPlan={() => (window.location.href = "/pro")}
      />

      <FAQ />

      <CTA
        onSkripte={() => (window.location.href = "/skripte")}
        onPlan={() => (window.location.href = "/pro")}
      />

      <Footer
        onSkripte={() => (window.location.href = "/skripte")}
        onPlan={() => (window.location.href = "/pro")}
        onPrijemni={() => (window.location.href = "/prijemni")}
        onKalkulator={() => (window.location.href = "/kalkulator")}
        onTermini={() => (window.location.href = "/termini")}
      />
    </>
  );
}
