import test from 'node:test';
import assert from 'node:assert/strict';
import { run } from '../process.mjs';

test('subprocess arguments remain literal and output is captured without a shell', async () => {
  const r = await run(process.execPath, ['-e', 'console.log(process.argv[1])', 'literal $value; not a command'], { timeoutMs: 30000 });
  assert.equal(r.stdout.trim(), 'literal $value; not a command');
});
test('an overlong subprocess is interrupted', async () => {
  await assert.rejects(() => run(process.execPath, ['-e', 'setInterval(()=>{},1000)'], { timeoutMs: 250 }), error => error.interrupted === true && error.timedOut === true);
});
