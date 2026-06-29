import { createClient } from '@/lib/supabase/server';

export const userTools = [
  {
    name: 'get_user_profile',
    description: 'Dohvati korisnički profil i informacije o pretplati',
    input_schema: {
      type: 'object',
      properties: {},
      required: []
    }
  },
  {
    name: 'update_user_preferences',
    description: 'Ažuriraj korisničke postavke i preference',
    input_schema: {
      type: 'object',
      properties: {
        preferences: {
          type: 'object',
          description: 'Novi preference objekti'
        }
      },
      required: ['preferences']
    }
  },
  {
    name: 'get_user_progress',
    description: 'Dohvati napredak korisnika u učenju',
    input_schema: {
      type: 'object',
      properties: {
        subject: {
          type: 'string',
          description: 'Predmet za koji se dohvaća napredak'
        }
      },
      required: []
    }
  }
];

export async function executeUserTool(toolName, args, userId) {
  const supabase = createClient();

  switch (toolName) {
    case 'get_user_profile':
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
      return profile;

    case 'update_user_preferences':
      const { data: updated } = await supabase
        .from('profiles')
        .update({ preferences: args.preferences })
        .eq('id', userId)
        .select()
        .single();
      return updated;

    case 'get_user_progress':
      const { data: progress } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId)
        .eq('subject', args.subject || null);
      return progress;

    default:
      throw new Error(`Nepoznat tool: ${toolName}`);
  }
}
