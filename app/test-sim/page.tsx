'use client';
import dynamic from 'next/dynamic';
import { qs, qImages } from '@/content/simulator/mat/exams/2025_ljeto_A.mjs';
const MatEngine = dynamic(() => import('@/components/simulator/MatEngine'), { ssr: false });
export default function T() {
  return <MatEngine examKey="2025_ljeto_A" qs={qs} qImages={qImages} duration={10800}
                    onExit={() => console.log('exit')} onDone={(r: unknown) => console.log('DONE', r)} userData={{}} />;
}
