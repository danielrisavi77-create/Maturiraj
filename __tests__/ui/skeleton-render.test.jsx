import React from 'react';
import { renderToString } from 'react-dom/server';
import { afterEach, expect, it, vi } from 'vitest';
import { SkText } from '@/components/ui/Skeleton.js?lang.jsx';
import PrijemniDetailSkeleton from '@/components/prijemni/skeletons/PrijemniDetailSkeleton.js?lang.jsx';

vi.mock('@/components/ui/Skeleton', async () => import('@/components/ui/Skeleton.js?lang.jsx'));
afterEach(() => vi.restoreAllMocks());

it.each([['text', SkText], ['detail', PrijemniDetailSkeleton]])('%s skeleton has identical initial markup across server and client renders', (_, Component) => {
  const element = <Component lines={4} />;
  const random = vi.spyOn(Math, 'random').mockReturnValue(0.1);
  const server = renderToString(element);
  random.mockReturnValue(0.9);
  expect(renderToString(element)).toBe(server);
});
