import "./hrvatski-simulator-scoped.css";
import PlanGate from "./PlanGate";
import SimulatorClient from "./SimulatorClient";

export const metadata = {
  title: "Discere — Hrvatski simulator",
  description: "Simulator mature iz hrvatskog jezika",
};

export default function HrvatskiSimulatorPage() {
  return (
    <PlanGate>
      <SimulatorClient />
    </PlanGate>
  );
}
