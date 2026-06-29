import { createClient } from '@/lib/supabase/server';

export const supportTools = [
  {
    name: 'answer_faq',
    description: 'Odgovori na često postavljana pitanja',
    input_schema: {
      type: 'object',
      properties: {
        question: {
          type: 'string',
          description: 'Pitanje korisnika'
        },
        category: {
          type: 'string',
          description: 'Kategorija pitanja'
        }
      },
      required: ['question']
    }
  },
  {
    name: 'troubleshoot_issue',
    description: 'Riješi tehnički problem',
    input_schema: {
      type: 'object',
      properties: {
        issue_description: {
          type: 'string',
          description: 'Opis problema'
        },
        platform: {
          type: 'string',
          description: 'Platforma (web, mobile, itd.)'
        }
      },
      required: ['issue_description']
    }
  },
  {
    name: 'escalate_ticket',
    description: 'Eskaliraj problem ljudskom podrškom',
    input_schema: {
      type: 'object',
      properties: {
        ticket_id: {
          type: 'string',
          description: 'ID tiketa'
        },
        reason: {
          type: 'string',
          description: 'Razlog eskalacije'
        }
      },
      required: ['ticket_id', 'reason']
    }
  },
  {
    name: 'provide_resources',
    description: 'Daj korisne resurse i linkove',
    input_schema: {
      type: 'object',
      properties: {
        topic: {
          type: 'string',
          description: 'Tema'
        },
        resource_type: {
          type: 'string',
          enum: ['tutorial', 'dokumentacija', 'video', 'članak'],
          description: 'Vrsta resursa'
        }
      },
      required: ['topic']
    }
  }
];

export async function executeSupportTool(toolName, args, userId) {
  const supabase = createClient();

  switch (toolName) {
    case 'answer_faq':
      // Odgovori na FAQ
      const faqAnswers = {
        'kako_resetirati_lozinku': 'Idi na stranicu zaboravljene lozinke i slijedi upute.',
        'kako_otkazati_pretplatu': 'Kontaktiraj podršku ili idi u postavke računa.',
        'tehnički_problemi': 'Provjeri internetsku vezu i osvježi stranicu.'
      };

      const answer = faqAnswers[args.question.toLowerCase().replace(/\s+/g, '_')] ||
        'Za ovo pitanje kontaktiraj podršku na support@maturiraj.com';

      return {
        question: args.question,
        answer,
        category: args.category || 'općenito'
      };

    case 'troubleshoot_issue':
      // Rješavanje problema
      const troubleshooting = {
        issue: args.issue_description,
        platform: args.platform || 'web',
        steps: [
          'Provjeri internetsku vezu',
          'Osvježi stranicu (F5)',
          'Izbriši cache i kolačiće',
          'Pokušaj drugi preglednik'
        ],
        common_solutions: [
          'Onemogući ad-blockere',
          'Ažuriraj preglednik',
          'Provjeri JavaScript'
        ]
      };
      return troubleshooting;

    case 'escalate_ticket':
      // Eskalacija tiketa
      const escalation = {
        ticket_id: args.ticket_id,
        escalated: true,
        assigned_to: 'human_support',
        priority: 'high',
        reason: args.reason,
        eta: '24 sata'
      };

      // Ovdje bi išla logika za stvarno eskaliranje
      return escalation;

    case 'provide_resources':
      // Pružanje resursa
      const resources = {
        topic: args.topic,
        type: args.resource_type || 'tutorial',
        links: [
          {
            title: 'Početni tutorial',
            url: 'https://maturiraj.com/tutorial',
            type: 'tutorial'
          },
          {
            title: 'Dokumentacija',
            url: 'https://docs.maturiraj.com',
            type: 'dokumentacija'
          }
        ],
        additional_help: 'Ako trebaš više pomoći, kontaktiraj nas.'
      };
      return resources;

    default:
      throw new Error(`Nepoznat tool: ${toolName}`);
  }
}