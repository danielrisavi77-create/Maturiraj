import { defineConfig } from 'vitest/config';
import path from 'path';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'node',
    // include se namjerno ne postavlja: vitestov zadani obrazac
    // ('**/*.{test,spec}.?(c|m)[jt]s?(x)') već pokriva __tests__/** (uključujući
    // __tests__/mat-simulator) i k tome .test.mjs/.cjs te testove kolocirane uz modul.
    // Eksplicitan popis ih je tiho izostavljao — test bi prestao biti pokretan, a npm test zelen.
    globals: true,
    // 70 dinamičkih importa ispita: na hladnom vite cacheu (CI) transformacija
    // premaši zadanih 5 s, pa suite pada bez promjene koda.
    testTimeout: 30000,
    hookTimeout: 30000,
    coverage: {
      provider: 'v8',
      include: ['lib/engleski-simulator/**'],
      reporter: ['text', 'lcov'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
