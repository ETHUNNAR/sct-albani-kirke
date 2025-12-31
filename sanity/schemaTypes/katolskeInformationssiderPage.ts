import {defineField, defineType} from 'sanity'

export const katolskeInformationssiderPage = defineType({
  name: 'katolskeInformationssiderPage',
  title: 'Katolske Informationssider',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      initialValue: 'Katolske Informationssider',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Undertitel',
      type: 'string',
      description: 'F.eks. "Links til katolske ressourcer"',
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
      title: 'Introduktion',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Introduktionstekst for siden',
    }),
    defineField({
      name: 'resourceLinks',
      title: 'Ressourcer',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Navn',
              type: 'string',
              validation: (Rule) => Rule.required(),
              description: 'F.eks. "Den katolske Kirke i Danmark"',
            },
            {
              name: 'url',
              title: 'Link',
              type: 'url',
              validation: (Rule) => Rule.required(),
              description: 'Fuldstændig URL',
            },
            {
              name: 'description',
              title: 'Beskrivelse',
              type: 'text',
              validation: (Rule) => Rule.required(),
              description: 'Kort beskrivelse af hvad ressourcen indeholder',
            },
            {
              name: 'image',
              title: 'Billede/Logo',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
              description: 'Logo eller billede for ressourcen',
            },
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
              description: 'description',
            },
            prepare({title, media, description}) {
              return {
                title: title,
                subtitle: description?.substring(0, 50),
                media: media,
              }
            },
          },
        },
      ],
      description: 'Liste af katolske informationssider og ressourcer',
    }),
  ],
})
