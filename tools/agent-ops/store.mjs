import { mkdir, open, readFile, rename, unlink, appendFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { randomUUID } from 'node:crypto';

export async function atomicWrite(path, value) {
  const temp = `${path}.${randomUUID()}.tmp`;
  const file = await open(temp, 'wx', 0o600);
  try { await file.writeFile(JSON.stringify(value, null, 2) + '\n'); await file.sync(); } finally { await file.close(); }
  await rename(temp, path);
}
export class StateStore {
  constructor(directory) { this.directory = directory; this.path = join(directory, 'state.json'); this.token = randomUUID(); }
  async init() { await mkdir(this.directory, { recursive: true }); }
  async read() { try { return JSON.parse(await readFile(this.path, 'utf8')); } catch (e) { if (e.code === 'ENOENT') return { version: 1, mode: 'idle', goal: null, usage: [] }; throw e; } }
  async save(state) { await this.init(); state.updatedAt = new Date().toISOString(); await atomicWrite(this.path, state); }
  async event(type, detail = {}) { await this.init(); await appendFile(join(this.directory, 'events.jsonl'), JSON.stringify({ at: new Date().toISOString(), type, ...detail }) + '\n', { mode: 0o600 }); }
  async lock() {
    await this.init(); await this.assertNoOrphans(); const path = join(this.directory, 'controller.lock');
    let file;
    try { file = await open(path, 'wx', 0o600); } catch (e) { if (e.code === 'EEXIST') throw new Error('Controller locked. Use recover-lock only after the recorded process has exited.'); throw e; }
    try { await file.writeFile(JSON.stringify({ pid: process.pid, token: this.token, at: new Date().toISOString() })); await file.sync(); } finally { await file.close(); }
    this.ownsLock = true;
  }
  async unlock() {
    if (!this.ownsLock) return;
    const path = join(this.directory, 'controller.lock');
    const record = JSON.parse(await readFile(path, 'utf8'));
    if (record.token === this.token) await unlink(path);
    this.ownsLock = false;
  }
  async control(command) { await this.init(); await atomicWrite(join(this.directory, 'control.json'), { command, id: randomUUID(), at: Date.now() }); }
  async readControl() { try { return JSON.parse(await readFile(join(this.directory, 'control.json'), 'utf8')); } catch (e) { if (e.code === 'ENOENT') return null; throw e; } }
  async recoverLock() {
    await this.assertNoOrphans();
    const path = join(this.directory, 'controller.lock'); const record = JSON.parse(await readFile(path, 'utf8'));
    try { process.kill(record.pid, 0); } catch (e) { if (e.code === 'ESRCH') { await rename(path, join(this.directory, `expired-lock-${randomUUID()}.json`)); return; } throw e; }
    throw new Error('Recorded process is still alive; refusing to remove lock');
  }
  async assertNoOrphans() {
    let names; try { names = await readdir(join(this.directory, 'children')); } catch (e) { if (e.code === 'ENOENT') return; throw e; }
    if (names.some(n => n.endsWith('.json'))) throw new Error('Unreconciled child worker record; inspect and terminate its process tree before archiving the record and recovering the controller');
  }
}
