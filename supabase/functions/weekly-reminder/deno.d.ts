// Minimal Deno ambient types for the VS Code TypeScript server.
// Does NOT affect runtime — Supabase Edge Functions run on real Deno.
// This file prevents false-positive "Cannot find name 'Deno'" errors.

declare namespace Deno {
  interface Env {
    get(key: string): string | undefined
  }
  const env: Env
  function serve(handler: (req: Request) => Response | Promise<Response>): void
}
