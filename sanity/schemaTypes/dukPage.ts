import {defineField, defineType} from 'sanity'

export const dukPage = defineType({
  name: 'dukPage',
  title: 'DUK Side',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      initialValue: 'Sct. Albani DUK',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Undertitel',
      type: 'string',
      description: 'F.eks. "Danmarks Unge Katolikker"',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Billede',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Hovedbeskrivelse af DUK',
    }),
    defineField({
      name: 'membershipFee',
      title: 'Kontingent',
      type: 'string',
      description: 'F.eks. "100 kr. pr. år"',
    }),
    defineField({
      name: 'registrationUrl',
      title: 'Tilmeldings URL',
      type: 'url',
      description: 'Link til tilmelding (f.eks. www.duk.dk)',
    }),
    defineField({
      name: 'ageGroupsTitle',
      title: 'Vores Grupper Titel',
      type: 'string',
      initialValue: 'Vores Grupper',
      description: 'Overskrift for aldersgruppe sektionen',
    }),
    defineField({
      name: 'ageGroupsDescription',
      title: 'Vores Grupper Beskrivelse',
      type: 'text',
      rows: 4,
      description: 'Introduktionstekst om aldersgrupperne (vises over grupperne)',
    }),
    defineField({
      name: 'ageGroups',
      title: 'Aldersgrupper',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Gruppe Navn',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'ageRange',
              title: 'Aldersgruppe',
              type: 'string',
              description: 'F.eks. "7-12 år"',
            },
            {
              name: 'description',
              title: 'Beskrivelse',
              type: 'text',
              rows: 3,
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'boardTitle',
      title: 'Bestyrelse Titel',
      type: 'string',
      initialValue: 'Bestyrelsen',
      description: 'Overskrift for bestyrelse sektionen',
    }),
    defineField({
      name: 'boardDescription',
      title: 'Bestyrelse Beskrivelse',
      type: 'text',
      rows: 4,
      description: 'Introduktionstekst om bestyrelsen (vises over bestyrelsesmedlemmerne)',
    }),
    defineField({
      name: 'boardMembers',
      title: 'Bestyrelsesmedlemmer',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Navn',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'role',
              title: 'Rolle',
              type: 'string',
              description: 'F.eks. "Formand", "Næstformand"',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'photo',
              title: 'Billede',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'email',
              title: 'Email',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'boardPhoto',
      title: 'Bestyrelsesbillede',
      type: 'image',
      description: 'Gruppebillede af bestyrelsen',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'socialMedia',
      title: 'Sociale Medier',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'contactEmail',
      title: 'Kontakt Email',
      type: 'string',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Kontakt Telefon',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
  },
})
