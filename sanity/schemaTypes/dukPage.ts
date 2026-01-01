import {defineField, defineType} from 'sanity'

export const dukPage = defineType({
  name: 'dukPage',
  title: 'DUK Side',
  type: 'document',
  groups: [
    {name: 'hero', title: 'Hero'},
    {name: 'overview', title: 'Oversigt'},
    {name: 'membership', title: 'Medlemskab'},
    {name: 'board', title: 'Bestyrelse'},
    {name: 'contact', title: 'Kontakt'},
  ],
  fields: [
    // Hero
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      initialValue: 'Sct. Albani DUK',
      validation: (Rule) => Rule.required(),
      group: 'hero',
    }),
    defineField({
      name: 'subtitle',
      title: 'Undertitel',
      type: 'string',
      initialValue: 'Danmarks Unge Katolikker',
      group: 'hero',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Billede',
      type: 'image',
      options: { hotspot: true },
      group: 'hero',
    }),

    // Overview
    defineField({
      name: 'purpose',
      title: 'Formål (Citat)',
      type: 'string',
      description: 'Hovedformålet som vises som citat. F.eks. "At styrke fællesskab med Gud og med hinanden"',
      initialValue: 'At styrke fællesskab med Gud og med hinanden',
      group: 'overview',
    }),
    defineField({
      name: 'overview',
      title: 'Oversigt',
      type: 'text',
      rows: 3,
      description: 'Kort beskrivelse af DUK',
      group: 'overview',
    }),
    defineField({
      name: 'bishopNote',
      title: 'Biskoppens Note',
      type: 'text',
      rows: 2,
      description: 'Note om biskoppens ønske',
      group: 'overview',
    }),
    defineField({
      name: 'groups',
      title: 'Grupper',
      type: 'array',
      group: 'overview',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Navn', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'description', title: 'Beskrivelse', type: 'string' },
        ],
        preview: {
          select: { title: 'name', subtitle: 'description' },
        },
      }],
    }),

    // Membership
    defineField({
      name: 'membership',
      title: 'Medlemskab',
      type: 'object',
      group: 'membership',
      fields: [
        { name: 'registrationUrl', title: 'Tilmeldings URL', type: 'url' },
        { name: 'registrationInfo', title: 'Tilmeldings Info', type: 'text', rows: 2 },
        { name: 'fee', title: 'Kontingent', type: 'string' },
        { name: 'paymentMethod', title: 'Betalingsmetode', type: 'string' },
        { name: 'benefits', title: 'Fordele', type: 'text', rows: 2 },
        {
          name: 'details',
          title: 'Medlemskab Detaljer',
          type: 'text',
          rows: 5,
          description: 'Uddybende information om medlemskab (MobilePay abonnement, støtte til DUK, blade, lejre osv.)'
        },
      ],
    }),
    defineField({
      name: 'financialSupport',
      title: 'Økonomisk Støtte',
      type: 'object',
      group: 'membership',
      fields: [
        { name: 'bankAccount', title: 'Bankkonto', type: 'string' },
        { name: 'reference', title: 'Reference', type: 'string' },
      ],
    }),

    // Board
    defineField({
      name: 'board',
      title: 'Bestyrelse',
      type: 'object',
      group: 'board',
      fields: [
        { name: 'description', title: 'Beskrivelse', type: 'text', rows: 3 },
        {
          name: 'photo',
          title: 'Bestyrelsesbillede',
          type: 'image',
          description: 'Gruppebillede af hele bestyrelsen',
          options: { hotspot: true },
        },
        {
          name: 'members',
          title: 'Medlemmer',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'name', title: 'Navn', type: 'string', validation: (Rule) => Rule.required() },
              { name: 'role', title: 'Rolle', type: 'string', validation: (Rule) => Rule.required() },
              { name: 'phone', title: 'Telefon', type: 'string' },
              { name: 'email', title: 'Email', type: 'string' },
            ],
            preview: {
              select: { title: 'name', subtitle: 'role' },
            },
          }],
        },
      ],
    }),

    // Contact
    defineField({
      name: 'socialMedia',
      title: 'Sociale Medier',
      type: 'object',
      group: 'contact',
      fields: [
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'heroImage',
    },
  },
})
