// @vitest-environment happy-dom
/**
 * useLocalStorageJson.test.jsx
 *
 * Regresijski testovi za SSR-safe localStorage hook koji će zamijeniti
 * ponovljeni "load-in-effect" kod za spremljene oznake (bookmarks) u Citatniku.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { renderToString } from 'react-dom/server';
import { hydrateRoot } from 'react-dom/client';
import { render, renderHook, screen, cleanup } from '@testing-library/react';
import { useLocalStorageJson } from '@/lib/hooks/useLocalStorageJson';

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe('useLocalStorageJson', () => {
  it('preserves displayed favorites if access to storage is revoked before a functional update', () => {
    const storage = window.localStorage;
    storage.setItem('revoked-storage', JSON.stringify({ existing: true }));
    const { result } = renderHook(() => useLocalStorageJson('revoked-storage', {}));
    vi.spyOn(window, 'localStorage', 'get').mockImplementation(() => { throw new Error('SecurityError'); });
    act(() => result.current[1](previous => ({ ...previous, added: true })));
    expect(result.current[0]).toEqual({ existing: true, added: true });
    expect(() => act(() => window.dispatchEvent(new StorageEvent('storage', { key: null, storageArea: storage })))).not.toThrow();
    expect(result.current[0]).toEqual({});
  });

  it.each(['write', 'clear'])('invalidates failed-write memory after external %s while every consumer is unmounted', (operation) => {
    const key = `unmounted-fallback-${operation}`;
    const first = renderHook(() => useLocalStorageJson(key, 0));
    vi.spyOn(localStorage, 'setItem').mockImplementationOnce(() => { throw new Error('quota'); });
    act(() => first.result.current[1](1));
    expect(first.result.current[0]).toBe(1);
    first.unmount();
    if (operation === 'write') localStorage.setItem(key, '9');
    else localStorage.clear();
    window.dispatchEvent(new StorageEvent('storage', { key: operation === 'write' ? key : null, storageArea: localStorage }));
    const second = renderHook(() => useLocalStorageJson(key, 0));
    expect(second.result.current[0]).toBe(operation === 'write' ? 9 : 0);
  });

  it('refreshes after another tab clears storage and ignores sessionStorage events', () => {
    localStorage.setItem('clearable', '4');
    const { result } = renderHook(() => useLocalStorageJson('clearable', 0));
    act(() => {
      localStorage.clear();
      window.dispatchEvent(new StorageEvent('storage', { key: null, storageArea: sessionStorage }));
    });
    expect(result.current[0]).toBe(4);
    act(() => {
      window.dispatchEvent(new StorageEvent('storage', { key: null, storageArea: localStorage }));
    });
    expect(result.current[0]).toBe(0);
  });

  it('accepts a later external write after a quota failure and writes each update once', () => {
    const { result } = renderHook(() => useLocalStorageJson('quota-recovery', 0));
    const write = vi.spyOn(localStorage, 'setItem').mockImplementationOnce(() => { throw new Error('quota'); });
    act(() => result.current[1](n => n + 1));
    expect(result.current[0]).toBe(1);
    expect(write).toHaveBeenCalledTimes(1);
    act(() => {
      localStorage.setItem('quota-recovery', '9');
      window.dispatchEvent(new StorageEvent('storage', { key: 'quota-recovery', storageArea: localStorage }));
    });
    expect(result.current[0]).toBe(9);
  });

  it('zadržava postojeći zapis kroz SSR i hidraciju, bez greške ili prepisivanja defaultom', () => {
    const key = 'ssr-bookmarks';
    const persisted = { page: 42 };
    localStorage.setItem(key, JSON.stringify(persisted));

    function Display() {
      const [value] = useLocalStorageJson(key, { page: 0 });
      return <span data-testid="value">{JSON.stringify(value)}</span>;
    }

    // "Server" nema pristup localStorageu — mora renderirati zadanu vrijednost.
    const html = renderToString(<Display />);

    const container = document.createElement('div');
    container.innerHTML = html;
    expect(container.textContent).toBe(JSON.stringify({ page: 0 }));
    document.body.appendChild(container);

    const recoverableErrors = [];
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

    let root;
    act(() => {
      root = hydrateRoot(container, <Display />, {
        onRecoverableError: (error) => recoverableErrors.push(error),
      });
    });

    expect(recoverableErrors).toHaveLength(0);
    expect(consoleError).not.toHaveBeenCalled();
    expect(container.querySelector('[data-testid="value"]').textContent).toBe(
      JSON.stringify(persisted)
    );
    // Prepisana sinkronizacija na klijentu ne smije prepisati stvarni zapis defaultom.
    expect(JSON.parse(localStorage.getItem(key))).toEqual(persisted);

    act(() => root.unmount());
    document.body.removeChild(container);
  });

  it('funkcionalna ažuriranja pozvana izvan React updater callbacka ispravno se akumuliraju', () => {
    const key = 'counter';
    const apiRef = { current: null };

    function Probe() {
      const [value, setValue] = useLocalStorageJson(key, 0);
      apiRef.current = setValue;
      return <span data-testid="value">{value}</span>;
    }

    render(<Probe />);
    expect(screen.getByTestId('value').textContent).toBe('0');

    act(() => {
      apiRef.current((n) => n + 1);
      apiRef.current((n) => n + 1);
      apiRef.current((n) => n + 1);
    });

    expect(screen.getByTestId('value').textContent).toBe('3');
    expect(localStorage.getItem(key)).toBe('3');
  });

  it('obavještava druge pretplatnike na isti ključ unutar iste kartice', () => {
    const key = 'shared';
    const apiRef = { current: null };

    function Writer() {
      const [, setValue] = useLocalStorageJson(key, 0);
      apiRef.current = setValue;
      return null;
    }
    function Reader() {
      const [value] = useLocalStorageJson(key, 0);
      return <span data-testid="reader">{value}</span>;
    }

    render(
      <>
        <Writer />
        <Reader />
      </>
    );
    expect(screen.getByTestId('reader').textContent).toBe('0');

    act(() => {
      apiRef.current(5);
    });

    expect(screen.getByTestId('reader').textContent).toBe('5');
  });

  it('osvježava pretplatnike na izvorni storage event iz druge kartice', () => {
    const key = 'cross-tab';
    localStorage.setItem(key, JSON.stringify(1));

    function Display() {
      const [value] = useLocalStorageJson(key, 0);
      return <span data-testid="value">{value}</span>;
    }

    render(<Display />);
    expect(screen.getByTestId('value').textContent).toBe('1');

    localStorage.setItem(key, JSON.stringify(9));
    act(() => {
      window.dispatchEvent(new StorageEvent('storage', { key, newValue: '9' }));
    });

    expect(screen.getByTestId('value').textContent).toBe('9');
  });

  it('vraća zadanu vrijednost kad je zapis oštećen JSON, bez rušenja', () => {
    const key = 'broken';
    localStorage.setItem(key, '{ovo nije valjan json');

    function Display() {
      const [value] = useLocalStorageJson(key, { ok: true });
      return <span data-testid="value">{JSON.stringify(value)}</span>;
    }

    expect(() => render(<Display />)).not.toThrow();
    expect(screen.getByTestId('value').textContent).toBe(JSON.stringify({ ok: true }));
  });

  it('kad je storage blokiran, koristi zadanu vrijednost i pamti izmjenu u memoriji bez rušenja', () => {
    const key = 'blocked';
    const getItemSpy = vi
      .spyOn(window.localStorage, 'getItem')
      .mockImplementation(() => {
        throw new Error('blocked read');
      });
    const setItemSpy = vi
      .spyOn(window.localStorage, 'setItem')
      .mockImplementation(() => {
        throw new Error('blocked write');
      });

    const apiRef = { current: null };
    function Display() {
      const [value, setValue] = useLocalStorageJson(key, 0);
      apiRef.current = setValue;
      return <span data-testid="value">{value}</span>;
    }

    expect(() => render(<Display />)).not.toThrow();
    expect(screen.getByTestId('value').textContent).toBe('0');

    expect(() => {
      act(() => {
        apiRef.current(7);
      });
    }).not.toThrow();

    expect(screen.getByTestId('value').textContent).toBe('7');

    getItemSpy.mockRestore();
    setItemSpy.mockRestore();
    // Stvarni storage nikad nije uspio primiti pisanje.
    expect(localStorage.getItem(key)).toBeNull();
  });

  it('izolira vrijednosti pri promjeni ključa', () => {
    localStorage.setItem('key-a', JSON.stringify('A'));
    localStorage.setItem('key-b', JSON.stringify('B'));

    function Display({ storageKey }) {
      const [value] = useLocalStorageJson(storageKey, null);
      return <span data-testid="value">{value}</span>;
    }

    const { rerender } = render(<Display storageKey="key-a" />);
    expect(screen.getByTestId('value').textContent).toBe('A');

    rerender(<Display storageKey="key-b" />);
    expect(screen.getByTestId('value').textContent).toBe('B');

    rerender(<Display storageKey="key-a" />);
    expect(screen.getByTestId('value').textContent).toBe('A');
  });
});
