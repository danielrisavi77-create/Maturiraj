import GameLauncher from './GameLauncher'

export default async function GamePage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams
  return <GameLauncher initialRecipe={typeof params.recipe === 'string' ? params.recipe : undefined} chapterSlug={typeof params.chapter === 'string' ? params.chapter : undefined} />
}
