import GameRunner from './GameRunner'

export default async function RunnerPage({ params }: { params: Promise<{ sessionId: string }> }) {
  const { sessionId } = await params
  return <GameRunner sessionId={sessionId} />
}
