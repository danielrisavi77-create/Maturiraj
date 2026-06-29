import { createClient } from '@/lib/supabase/server';

export const mentorTools = [
  {
    name: 'provide_career_advice',
    description: 'Daj savjete o karijeri i obrazovanju',
    input_schema: {
      type: 'object',
      properties: {
        interests: {
          type: 'array',
          items: { type: 'string' },
          description: 'Interesi korisnika'
        },
        current_level: {
          type: 'string',
          description: 'Trenutna razina obrazovanja'
        }
      },
      required: []
    }
  },
  {
    name: 'set_goals',
    description: 'Postavi ciljeve za učenje i razvoj',
    input_schema: {
      type: 'object',
      properties: {
        timeframe: {
          type: 'string',
          description: 'Vremenski okvir (npr. "ovaj mjesec", "ova godina")'
        },
        focus_areas: {
          type: 'array',
          items: { type: 'string' },
          description: 'Područja fokusa'
        }
      },
      required: ['timeframe']
    }
  },
  {
    name: 'motivational_support',
    description: 'Pruži motivacijsku podršku',
    input_schema: {
      type: 'object',
      properties: {
        challenge: {
          type: 'string',
          description: 'Trenutni izazov'
        },
        context: {
          type: 'string',
          description: 'Kontekst situacije'
        }
      },
      required: []
    }
  },
  {
    name: 'study_habits_advice',
    description: 'Savjeti o navikama učenja',
    input_schema: {
      type: 'object',
      properties: {
        current_habits: {
          type: 'array',
          items: { type: 'string' },
          description: 'Trenutne navike učenja'
        }
      },
      required: []
    }
  }
];

export async function executeMentorTool(toolName, args, userId) {
  const supabase = createClient();

  switch (toolName) {
    case 'provide_career_advice':
      const advice = {
        recommended_fields: ['Informatika', 'Medicina', 'Ekonomija'],
        next_steps: [
          'Istraži različite karijere',
          'Razgovaraj s mentorima',
          'Sudjeluj u praksama'
        ],
        resources: ['Knjige', 'Online tečajevi', 'Profesionalne mreže']
      };
      return advice;

    case 'set_goals':
      const goals = {
        timeframe: args.timeframe,
        smart_goals: [
          {
            goal: 'Poboljšati ocjene u matematici',
            specific: 'Postići prosjek 4.5',
            measurable: 'Mjereno mjesečnim testovima',
            achievable: 'S 10 sati tjedne vježbe',
            relevant: 'Važno za maturu',
            time_bound: args.timeframe
          }
        ],
        action_plan: [
          'Tjedni raspored učenja',
          'Redovito praćenje napretka',
          'Tjedni pregledi'
        ]
      };
      return goals;

    case 'motivational_support':
      const motivation = {
        encouragement: 'Vjerujem u tebe! Svaki izazov je prilika za rast.',
        strategies: [
          'Razbij velike ciljeve na manje korake',
          'Proslavi male pobjede',
          'Nađi sustav podrške'
        ],
        quotes: [
          '"Uspjeh je zbroj malih napora ponavljanih dan za danom." - Robert Collier'
        ]
      };
      return motivation;

    case 'study_habits_advice':
      const habits = {
        good_habits: [
          'Aktivno učenje umjesto pasivnog čitanja',
          'Redovite pauze (tehnika Pomodoro)',
          'Raznovrsne metode učenja',
          'Dnevno pregledavanje gradiva'
        ],
        bad_habits_to_avoid: [
          'Cjelonoćno učenje',
          'Učenje bez pauza',
          'Nedostatak organizacije'
        ],
        recommendations: args.current_habits ? 
          'Analiziraj trenutne navike i identificiraj što možeš poboljšati' :
          'Počni s osnovnim navikama i postupno ih nadograđuj'
      };
      return habits;

    default:
      throw new Error(`Nepoznat tool: ${toolName}`);
  }
}