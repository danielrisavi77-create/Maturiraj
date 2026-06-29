import { createClient } from '@/lib/supabase/server';

export const essayTools = [
  {
    name: 'analyze_essay',
    description: 'Analiziraj sastav i daj povratne informacije',
    input_schema: {
      type: 'object',
      properties: {
        essay_text: {
          type: 'string',
          description: 'Tekst sastava'
        },
        subject: {
          type: 'string',
          description: 'Predmet/tema'
        },
        criteria: {
          type: 'array',
          items: { type: 'string' },
          description: 'Kriteriji za ocjenjivanje'
        }
      },
      required: ['essay_text']
    }
  },
  {
    name: 'provide_feedback',
    description: 'Daj detaljne povratne informacije o sastavu',
    input_schema: {
      type: 'object',
      properties: {
        essay_id: {
          type: 'string',
          description: 'ID sastava'
        },
        feedback_type: {
          type: 'string',
          enum: ['struktura', 'sadržaj', 'stil', 'gramatika', 'općenito'],
          description: 'Vrsta povratnih informacija'
        }
      },
      required: ['essay_id']
    }
  },
  {
    name: 'suggest_improvements',
    description: 'Predloži poboljšanja za sastav',
    input_schema: {
      type: 'object',
      properties: {
        essay_text: {
          type: 'string',
          description: 'Tekst sastava'
        },
        focus_area: {
          type: 'string',
          description: 'Područje fokusa'
        }
      },
      required: ['essay_text']
    }
  },
  {
    name: 'grade_essay',
    description: 'Ocjeni sastav prema kriterijima',
    input_schema: {
      type: 'object',
      properties: {
        essay_text: {
          type: 'string',
          description: 'Tekst sastava'
        },
        grading_criteria: {
          type: 'object',
          description: 'Kriteriji ocjenjivanja'
        }
      },
      required: ['essay_text']
    }
  }
];

export async function executeEssayTool(toolName, args, userId) {
  const supabase = createClient();

  switch (toolName) {
    case 'analyze_essay':
      // Analiza sastava
      const analysis = {
        word_count: args.essay_text.split(' ').length,
        structure_score: 7,
        content_score: 8,
        language_score: 6,
        strengths: [
          'Dobra struktura',
          'Jasni argumenti'
        ],
        weaknesses: [
          'Nedostaje zaključak',
          'Neke gramatičke greške'
        ],
        overall_feedback: 'Dobar sastav s prostorom za poboljšanje.'
      };
      return analysis;

    case 'provide_feedback':
      // Detaljne povratne informacije
      const feedback = {
        type: args.feedback_type,
        comments: [
          'Uvod je dobar, ali može biti kraći.',
          'Glavni dio ima dobre argumente.',
          'Zaključak nedostaje.'
        ],
        suggestions: [
          'Dodaj više primjera',
          'Poboljšaj prijelaze između odlomaka'
        ]
      };
      return feedback;

    case 'suggest_improvements':
      // Prijedlozi za poboljšanje
      const suggestions = {
        focus_area: args.focus_area,
        improvements: [
          'Koristi više prijelaznih riječi',
          'Dodaj konkretne primjere',
          'Provjeri gramatiku i pravopis',
          'Ojačaj zaključak'
        ],
        examples: [
          'Umjesto "dobar" koristi "izvrstan"',
          'Dodaj rečenicu: "Na primjer, ..."'
        ]
      };
      return suggestions;

    case 'grade_essay':
      // Ocjenjivanje sastava
      const grade = {
        total_score: 15,
        max_score: 20,
        percentage: 75,
        letter_grade: 'Dobar',
        criteria_scores: {
          structure: 7,
          content: 8,
          language: 6,
          originality: 7
        },
        comments: 'Solidan sastav s dobrim sadržajem, ali jezik može biti bolji.'
      };
      return grade;

    default:
      throw new Error(`Nepoznat tool: ${toolName}`);
  }
}
