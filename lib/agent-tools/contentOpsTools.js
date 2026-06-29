import { createClient } from '@/lib/supabase/server';

export const contentOpsTools = [
  {
    name: 'update_content',
    description: 'Ažuriraj postojeći sadržaj',
    input_schema: {
      type: 'object',
      properties: {
        content_id: {
          type: 'string',
          description: 'ID sadržaja'
        },
        updates: {
          type: 'object',
          description: 'Ažuriranja sadržaja'
        }
      },
      required: ['content_id', 'updates']
    }
  },
  {
    name: 'create_content',
    description: 'Kreiraj novi sadržaj',
    input_schema: {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          enum: ['lesson', 'quiz', 'article', 'video'],
          description: 'Vrsta sadržaja'
        },
        subject: {
          type: 'string',
          description: 'Predmet'
        },
        title: {
          type: 'string',
          description: 'Naslov'
        },
        content: {
          type: 'string',
          description: 'Sadržaj'
        }
      },
      required: ['type', 'subject', 'title']
    }
  },
  {
    name: 'review_content',
    description: 'Pregledaj i odobri sadržaj',
    input_schema: {
      type: 'object',
      properties: {
        content_id: {
          type: 'string',
          description: 'ID sadržaja za pregled'
        },
        review_notes: {
          type: 'string',
          description: 'Bilješke o pregledu'
        }
      },
      required: ['content_id']
    }
  },
  {
    name: 'search_content',
    description: 'Pretraži postojeći sadržaj',
    input_schema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Upit za pretragu'
        },
        subject: {
          type: 'string',
          description: 'Predmet'
        },
        type: {
          type: 'string',
          description: 'Vrsta sadržaja'
        }
      },
      required: ['query']
    }
  }
];

export async function executeContentOpsTool(toolName, args, userId) {
  const supabase = createClient();

  switch (toolName) {
    case 'update_content':
      // Ažuriranje sadržaja
      const { data: updated } = await supabase
        .from('content')
        .update({
          ...args.updates,
          updated_at: new Date().toISOString(),
          updated_by: userId
        })
        .eq('id', args.content_id)
        .select()
        .single();

      return {
        success: true,
        content: updated,
        message: 'Sadržaj ažuriran'
      };

    case 'create_content':
      // Kreiranje sadržaja
      const newContent = {
        type: args.type,
        subject: args.subject,
        title: args.title,
        content: args.content,
        created_by: userId,
        created_at: new Date().toISOString(),
        status: 'draft'
      };

      const { data: created } = await supabase
        .from('content')
        .insert(newContent)
        .select()
        .single();

      return {
        success: true,
        content: created,
        message: 'Sadržaj kreiran'
      };

    case 'review_content':
      // Pregled sadržaja
      const review = {
        content_id: args.content_id,
        reviewed_by: userId,
        review_notes: args.review_notes,
        status: 'reviewed',
        reviewed_at: new Date().toISOString()
      };

      const { data: reviewed } = await supabase
        .from('content_reviews')
        .insert(review)
        .select()
        .single();

      // Ažuriraj status sadržaja
      await supabase
        .from('content')
        .update({ status: 'reviewed' })
        .eq('id', args.content_id);

      return {
        success: true,
        review: reviewed,
        message: 'Sadržaj pregledan'
      };

    case 'search_content':
      // Pretraga sadržaja
      let query = supabase
        .from('content')
        .select('*')
        .ilike('title', `%${args.query}%`);

      if (args.subject) {
        query = query.eq('subject', args.subject);
      }

      if (args.type) {
        query = query.eq('type', args.type);
      }

      const { data: results } = await query.limit(20);

      return {
        query: args.query,
        results_count: results.length,
        results
      };

    default:
      throw new Error(`Nepoznat tool: ${toolName}`);
  }
}