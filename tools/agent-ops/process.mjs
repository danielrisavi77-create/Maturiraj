import { spawn } from 'node:child_process';
import { appendFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { mkdirSync, writeFileSync, unlinkSync } from 'node:fs';
import { randomUUID } from 'node:crypto';

export function run(executable, args, { cwd, env = process.env, input, timeoutMs = 120000, signal, log, registryDir } = {}) {
  return new Promise((resolve, reject) => {
    const recordPath = registryDir ? `${registryDir}/children/${randomUUID()}.json` : null;
    if (recordPath) { mkdirSync(dirname(recordPath), { recursive: true }); writeFileSync(recordPath, JSON.stringify({ status: 'launching', controllerPid: process.pid, executable, cwd }), { flag: 'wx', mode: 0o600 }); }
    const child = spawn(executable, args, { cwd, env, shell: false, windowsHide: true, stdio: ['pipe', 'pipe', 'pipe'] });
    if (recordPath) writeFileSync(recordPath, JSON.stringify({ status: 'running', controllerPid: process.pid, pid: child.pid, executable, cwd }));
    let stdout = ''; let stderr = ''; let killed = false; let logQueue = Promise.resolve();
    const collect = (kind, chunk) => {
      const text = chunk.toString();
      if (kind === 'out') stdout = (stdout + text).slice(-8 * 1024 * 1024); else stderr = (stderr + text).slice(-1024 * 1024);
      if (log) logQueue = logQueue.then(async () => { await mkdir(dirname(log), { recursive: true }); await appendFile(log, text, { mode: 0o600 }); });
    };
    let killDone = Promise.resolve();
    const terminate = () => {
      if (killed) return;
      killed = true;
      if (process.platform === 'win32' && child.pid) {
        killDone = new Promise(done => { const killer = spawn('taskkill.exe', ['/PID', String(child.pid), '/T', '/F'], { windowsHide: true, stdio: 'ignore' }); killer.on('error', () => { child.kill(); done(); }); killer.on('close', code => { if (code !== 0) child.kill(); done(); }); });
      } else child.kill('SIGTERM');
    };
    const timer = setTimeout(terminate, timeoutMs);
    // Even a stuck OS termination command must not hold the controller forever.
    // Keep the worker record until close confirms termination; recovery then fails closed.
    const deadline = setTimeout(() => { const e = new Error('Process termination timed out; worker reconciliation required'); e.interrupted = true; reject(e); }, timeoutMs + 15000);
    signal?.addEventListener('abort', terminate, { once: true });
    if (signal?.aborted) terminate();
    child.stdout.on('data', c => collect('out', c)); child.stderr.on('data', c => collect('err', c));
    child.stdin.on('error', () => {});
    child.on('error', e => { clearTimeout(timer); clearTimeout(deadline); signal?.removeEventListener('abort', terminate); reject(e); });
    child.on('close', async code => {
      clearTimeout(timer); clearTimeout(deadline); signal?.removeEventListener('abort', terminate);
      try { await killDone; await logQueue; if (recordPath) unlinkSync(recordPath); } catch (e) { reject(e); return; }
      const result = { stdout, stderr, code };
      if (code !== 0 || killed) { const e = new Error(killed ? 'Process interrupted or timed out; reconcile before retry' : `${executable} exited ${code}: ${stderr.slice(-1800) || stdout.slice(-1800)}`); e.output = stdout + stderr; e.interrupted = killed; e.timedOut = killed && !signal?.aborted; reject(e); }
      else resolve(result);
    });
    child.stdin.end(input ?? '');
  });
}
