import "./hrvatski-simulator-scoped.css";
import PlanGate from "./PlanGate";
import SimulatorClient from "./SimulatorClient";

export const metadata = {
  title: "Discere — Hrvatski simulator",
  description: "Simulator mature iz hrvatskog jezika",
};

export default function HrvatskiSimulatorPage() {
  return (
    // Hrvatski ide po free-preview modelu: prijava je obavezna, ali free
    // korisnik smije ući (ispit je besplatan, analiza rezultata zaključana).
    <PlanGate allowFree>
      <SimulatorClient />
    </PlanGate>
  );
}
