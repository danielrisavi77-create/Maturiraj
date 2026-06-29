import { createClient } from '@/lib/supabase/server';

export const planTools = [
  {
    name: 'create_study_plan',
    description: 'Kreiraj novi plan učenja za korisnika',
    input_schema: {
      type: 'object',
      properties: {
        subject: {
          type: 'string',
          description: 'Predmet za plan'
        },
        duration_weeks: {
          type: 'number',
          description: 'Trajanje plana u tjednima'
        },
        goals: {
          type: 'array',
          items: { type: 'string' },
          description: 'Ciljevi učenja'
        }
      },
      required: ['subject', 'duration_weeks']
    }
  },
  {
    name: 'get_study_plan',
    description: 'Dohvati postojeći plan učenja',
    input_schema: {
      type: 'object',
      properties: {
        plan_id: {
          type: 'string',
          description: 'ID plana'
        }
      },
      required: ['plan_id']
    }
  },
  {
    name: 'update_plan_progress',
    description: 'Ažuriraj napredak u planu',
    input_schema: {
      type: 'object',
      properties: {
        plan_id: {
          type: 'string',
          description: 'ID plana'
        },
        completed_topics: {
          type: 'array',
          items: { type: 'string' },
          description: 'Dovršene teme'
        }
      },
      required: ['plan_id']
    }
  },
  {
    name: 'generate_plan_suggestions',
    description: 'Generiraj prijedloge za poboljšanje plana',
    input_schema: {
      type: 'object',
      properties: {
        current_plan: {
          type: 'object',
          description: 'Trenutni plan objekti'
        }
      },
      required: ['current_plan']
    }
  }
];

export async function executePlanTool(toolName, args, userId) {
  const supabase = createClient();

  switch (toolName) {
    case 'create_study_plan':
      const planData = {
        user_id: userId,
        subject: args.subject,
        duration_weeks: args.duration_weeks,
        goals: args.goals || [],
        created_at: new Date().toISOString()
      };
      const { data: plan } = await supabase
        .from('study_plans')
        .insert(planData)
        .select()
        .single();
      return plan;

    case 'get_study_plan':
      const { data: existingPlan } = await supabase
        .from('study_plans')
        .select('*')
        .eq('id', args.plan_id)
        .eq('user_id', userId)
        .single();
      return existingPlan;

    case 'update_plan_progress':
      const { data: updatedPlan } = await supabase
        .from('study_plans')
        .update({
          completed_topics: args.completed_topics,
          updated_at: new Date().toISOString()
        })
        .eq('id', args.plan_id)
        .eq('user_id', userId)
        .select()
        .single();
      return updatedPlan;

    case 'generate_plan_suggestions':
      // Ovdje bi išla logika za generiranje prijedloga
      // Za sada vraćamo osnovne prijedloge
      return {
        suggestions: [
          'Dodaj više vremena za vježbu',
          'Uključi redovite pauze',
          'Prati napredak tjedno'
        ]
      };

    default:
      throw new Error(`Nepoznat tool: ${toolName}`);
  }
}
