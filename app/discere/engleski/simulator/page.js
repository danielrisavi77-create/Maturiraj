import PlanGate from '@/app/discere/hrvatski/simulator/PlanGate'
import SimulatorClient from './SimulatorClient'

export const metadata = {
  title: 'Discere — Engleski simulator',
  description: 'Simulator mature iz engleskog jezika',
}

export default function EngleskiSimulatorPage() {
  return (
    <PlanGate>
      <SimulatorClient />
    </PlanGate>
  )
}
