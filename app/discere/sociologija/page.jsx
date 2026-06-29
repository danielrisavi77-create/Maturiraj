// app/discere/sociologija/page.jsx
// Route the subject picker links to (predmetRoutes.soc = '/discere/sociologija').
// The sociology simulator is a self-contained React-via-CDN app served as a static
// asset at /sim/sociologija.html; we mount it in a full-screen iframe behind PlanGate
// (login required, same as Hrvatski/Engleski). React is self-hosted under /sim/vendor,
// and its AI calls are routed to /api/ai-simulator (server key), so the default CSP
// (eval-free, script-src 'self') already covers it — no per-route CSP needed.
import PlanGate from "@/app/discere/hrvatski/simulator/PlanGate";
import SociologijaClient from "./SociologijaClient";

export const metadata = {
  title: "Discere — Sociologija simulator",
  description:
    "Simulator mature iz sociologije — svi ispiti državne mature s točnim odgovorima i objašnjenjima.",
};

export default function SociologijaSimulatorPage() {
  return (
    <PlanGate>
      <SociologijaClient />
    </PlanGate>
  );
}
