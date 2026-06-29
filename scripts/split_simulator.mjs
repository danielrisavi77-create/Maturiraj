/**
 * split_simulator.mjs
 * 
 * Reads the monolithic HrvatskiSimulator.jsx (8598 lines) and splits it into
 * manageable modules. Run with: node scripts/split_simulator.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SIM_DIR = join(__dirname, '..', 'app', 'discere', 'hrvatski', 'simulator');
const SRC = join(SIM_DIR, 'HrvatskiSimulator.jsx');

console.log('Reading monolith...');
const src = readFileSync(SRC, 'utf-8');
const lines = src.split('\n');
console.log(`Total lines: ${lines.length}`);

/** Extract lines [from, to] (1-indexed, inclusive) */
function extract(from, to) {
  return lines.slice(from - 1, to).join('\n');
}

// Ensure directories exist
const dirs = [
  join(SIM_DIR, 'utils'),
  join(SIM_DIR, 'components'),
  join(SIM_DIR, 'components', 'analytics'),
  join(SIM_DIR, 'components', 'essay'),
  join(SIM_DIR, 'components', 'modals'),
  join(SIM_DIR, 'data'),
];
dirs.forEach(d => { if (!existsSync(d)) mkdirSync(d, { recursive: true }); });

function write(relPath, content) {
  const full = join(SIM_DIR, relPath);
  writeFileSync(full, content, 'utf-8');
  console.log(`  ✅ ${relPath} (${content.split('\n').length} lines)`);
}

// ═══════════════════════════════════════════════════════════
// 1. utils/helpers.js — Utility functions + hooks (lines 7–99)
// ═══════════════════════════════════════════════════════════
write('utils/helpers.js', `import React, { useState } from 'react';
import { XP_LEVELS } from '../hrvatskiSimulatorData';

const e = React.createElement;
const LL = ["A","B","C","D","E","F"];

${extract(10, 99)}

export { e, LL, getLevel, xpProgress, xpToNext, calcXpGain, lsSave, lsGet, useUserData, updateStreak, playWrongSound, chk, hasAns };
`);

// ═══════════════════════════════════════════════════════════
// 2. components/QuestionWidgets.jsx — EssayGrader, MatQ, SaAiHelper, AnswerHelper, ContextPanel
// ═══════════════════════════════════════════════════════════
write('components/QuestionWidgets.jsx', `'use client';
import React, { useState, useEffect } from 'react';
import { e, LL } from '../utils/helpers';

${extract(101, 452)}

export { EssayGrader, MatQ, SaAiHelper, AnswerHelper, ContextPanel };
`);

// ═══════════════════════════════════════════════════════════
// 3. components/Sim.jsx — Main exam simulator (lines 453–996)
// ═══════════════════════════════════════════════════════════
write('components/Sim.jsx', `'use client';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { EXAMS, TOPIC_LABELS, ESEJI, SAZECI } from '../hrvatskiSimulatorData';
import { e, LL, chk, hasAns, lsSave, lsGet, playWrongSound, calcXpGain } from '../utils/helpers';
import { EssayGrader, MatQ, SaAiHelper, AnswerHelper, ContextPanel } from './QuestionWidgets';

${extract(453, 996)}

export { Sim };
`);

// ═══════════════════════════════════════════════════════════
// 4. components/ExamScreens.jsx — ModeSelect, TopicFilterScreen, ErrorsScreen, BookmarksScreen
// ═══════════════════════════════════════════════════════════
write('components/ExamScreens.jsx', `'use client';
import React, { useState, useMemo } from 'react';
import { EXAMS, ESEJI, SAZECI, TOPIC_LABELS } from '../hrvatskiSimulatorData';
import { e, LL, chk } from '../utils/helpers';

${extract(997, 1537)}

export { ModeSelect, TopicFilterScreen, ErrorsScreen, BookmarksScreen };
`);

// ═══════════════════════════════════════════════════════════
// 5. components/StatsScreen.jsx — StatsScreen + MaturaChecklist
// ═══════════════════════════════════════════════════════════
write('components/StatsScreen.jsx', `'use client';
import React, { useState } from 'react';
import { EXAMS, TOPIC_LABELS, LEVEL_NAMES, XP_LEVELS } from '../hrvatskiSimulatorData';
import { e, getLevel, xpProgress, xpToNext } from '../utils/helpers';
import { AnalyticsPanel } from './analytics/AnalyticsPanel';
import { MilestoneKartice, TopicHeatmapNapredak, TjedniBarChart, SlijedeciKorak, SemaforSpremnosti, PlanDoMature, TrendGraph, GradePrediction, DailySummary } from './analytics/AnalyticsCards';

${extract(1538, 1719)}

export { StatsScreen, MaturaChecklist };
`);

// ═══════════════════════════════════════════════════════════
// 6a. components/analytics/AnalyticsCards.jsx — All analytics sub-components
// ═══════════════════════════════════════════════════════════
write('components/analytics/AnalyticsCards.jsx', `'use client';
import React, { useState } from 'react';
import { EXAMS, TOPIC_LABELS } from '../../hrvatskiSimulatorData';
import { e } from '../../utils/helpers';

${extract(1720, 2484)}

export { MilestoneKartice, TopicHeatmapNapredak, TjedniBarChart, SlijedeciKorak, SemaforSpremnosti, PlanDoMature, TrendGraph, GradePrediction, DailySummary };
`);

// ═══════════════════════════════════════════════════════════
// 6b. components/analytics/AnalyticsPanel.jsx — AnalyticsPanel
// ═══════════════════════════════════════════════════════════
write('components/analytics/AnalyticsPanel.jsx', `'use client';
import React, { useState, useMemo } from 'react';
import { EXAMS, TOPIC_LABELS } from '../../hrvatskiSimulatorData';
import { e, chk, LL } from '../../utils/helpers';
import { MilestoneKartice, TopicHeatmapNapredak, TjedniBarChart, SlijedeciKorak, SemaforSpremnosti, PlanDoMature, TrendGraph, GradePrediction, DailySummary } from './AnalyticsCards';

${extract(2485, 3464)}

export { AnalyticsPanel };
`);

// ═══════════════════════════════════════════════════════════
// 7. components/BrowseScreen.jsx — BrowseScreen + EssayTekstCard
// ═══════════════════════════════════════════════════════════
write('components/BrowseScreen.jsx', `'use client';
import React, { useState, useMemo } from 'react';
import { EXAMS, TOPIC_LABELS, ESEJI, SAZECI } from '../hrvatskiSimulatorData';
import { e, LL, chk } from '../utils/helpers';

${extract(3465, 3642)}

export { BrowseScreen, EssayTekstCard };
`);

// ═══════════════════════════════════════════════════════════
// 8. components/essay/EssayScreens.jsx — EssayListScreen, EssayMode, SazetakListScreen, SazetakMode
// ═══════════════════════════════════════════════════════════
write('components/essay/EssayScreens.jsx', `'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ESEJI, SAZECI } from '../../hrvatskiSimulatorData';
import { e } from '../../utils/helpers';

${extract(3643, 4262)}

export { EssayListScreen, EssayMode, SazetakListScreen, SazetakMode };
`);

// ═══════════════════════════════════════════════════════════
// 9. components/OnboardingAndLists.jsx — OnboardingScreen, PracticeListScreen, PojmTip
// ═══════════════════════════════════════════════════════════
write('components/OnboardingAndLists.jsx', `'use client';
import React, { useState } from 'react';
import { EXAMS, TOPIC_LABELS } from '../hrvatskiSimulatorData';
import { e } from '../utils/helpers';
import { POJMOVNIK, POJMOVNIK_HRV } from '../data/pojmovnikData';

${extract(4263, 4467)}

export { OnboardingScreen, PracticeListScreen, PojmTip };
`);

// ═══════════════════════════════════════════════════════════
// 10. components/LektireScreen.jsx — LektireScreen (with embedded LEKTIRE data)
// ═══════════════════════════════════════════════════════════
write('components/LektireScreen.jsx', `'use client';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { EXAMS, TOPIC_LABELS } from '../hrvatskiSimulatorData';
import { e } from '../utils/helpers';
import { POJMOVNIK, POJMOVNIK_HRV } from '../data/pojmovnikData';
import { PojmTip } from './OnboardingAndLists';

${extract(4468, 6896)}

export { LektireScreen };
`);

// ═══════════════════════════════════════════════════════════
// 11. data/pojmovnikData.js — POJMOVNIK_HRV + POJMOVNIK constants (skip GlossaryModal between them)
// ═══════════════════════════════════════════════════════════
write('data/pojmovnikData.js', `// Pojmovnik data extracted from HrvatskiSimulator monolith

${extract(6959, 7112)}

${extract(7243, 7376)}

export { POJMOVNIK_HRV, POJMOVNIK };
`);

// ═══════════════════════════════════════════════════════════
// 12. components/modals/Modals.jsx — ProPaywallModal, GlossaryModal, PojmovnikModal, ImporterModal, DisclaimerModal
// ═══════════════════════════════════════════════════════════
write('components/modals/Modals.jsx', `'use client';
import React, { useState, useMemo } from 'react';
import { TOPIC_LABELS } from '../../hrvatskiSimulatorData';
import { e } from '../../utils/helpers';
import { POJMOVNIK, POJMOVNIK_HRV } from '../../data/pojmovnikData';

${extract(6897, 6958)}

${extract(7113, 7241)}

${extract(7377, 7738)}

${extract(7739, 7813)}

export { ProPaywallModal, GlossaryModal, PojmovnikModal, ImporterModal, DisclaimerModal };
`);

// ═══════════════════════════════════════════════════════════
// 13. components/HomeScreen.jsx — YearGroup, Home, UputeModal
// ═══════════════════════════════════════════════════════════
write('components/HomeScreen.jsx', `'use client';
import React, { useState, useMemo } from 'react';
import { EXAMS, ESEJI, SAZECI, LEVEL_NAMES, TOPIC_LABELS, XP_LEVELS } from '../hrvatskiSimulatorData';
import { e, getLevel, xpProgress, xpToNext } from '../utils/helpers';

${extract(7814, 8353)}

export { YearGroup, Home, UputeModal };
`);

// ═══════════════════════════════════════════════════════════
// 14. NEW HrvatskiSimulator.jsx — App component + thin wrapper
// ═══════════════════════════════════════════════════════════
const appFile = `'use client';

import React, { useState, useEffect } from 'react';
import { EXAMS, ESEJI, SAZECI } from './hrvatskiSimulatorData';
import './hrvatski-simulator-scoped.css';
import { e, chk, calcXpGain, useUserData, updateStreak } from './utils/helpers';
import { Sim } from './components/Sim';
import { ModeSelect, TopicFilterScreen, ErrorsScreen, BookmarksScreen } from './components/ExamScreens';
import { StatsScreen } from './components/StatsScreen';
import { AnalyticsPanel } from './components/analytics/AnalyticsPanel';
import { BrowseScreen } from './components/BrowseScreen';
import { EssayListScreen, EssayMode, SazetakListScreen, SazetakMode } from './components/essay/EssayScreens';
import { OnboardingScreen, PracticeListScreen } from './components/OnboardingAndLists';
import { LektireScreen } from './components/LektireScreen';
import { ProPaywallModal, GlossaryModal, PojmovnikModal, ImporterModal, DisclaimerModal } from './components/modals/Modals';
import { YearGroup, Home, UputeModal } from './components/HomeScreen';

${extract(8354, 8592)}


export default function HrvatskiSimulator() {
  return e(App, null);
}
`;
write('HrvatskiSimulator.jsx.new', appFile);

console.log('\n══════════════════════════════════════');
console.log('Done! Files created in:', SIM_DIR);
console.log('\nNext steps:');
console.log('1. Review the generated files');
console.log('2. Rename HrvatskiSimulator.jsx.new → HrvatskiSimulator.jsx');
console.log('3. Run pnpm dev to test');
