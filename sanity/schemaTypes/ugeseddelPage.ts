import {defineField, defineType} from 'sanity'

export const ugeseddelPage = defineType({
  name: 'ugeseddelPage',
  title: 'Ugeseddel Side',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Side Titel',
      type: 'string',
      initialValue: 'Ugeseddel',
      validation: (Rule) => Rule.required(),
      description: 'Titlen der vises på siden',
    }),
    defineField({
      name: 'subtitle',
      title: 'Undertitel',
      type: 'string',
      description: 'F.eks. "Den aktuelle ugeseddel for Sct. Albani Kirke"',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Billede',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Baggrundsbillede for hero sektion',
    }),
    defineField({
      name: 'currentBulletin',
      title: 'Aktuel Ugeseddel (PDF)',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      validation: (Rule) => Rule.required(),
      description: 'Upload den aktuelle ugeseddel som PDF. Denne vil erstatte den forrige.',
    }),
    defineField({
      name: 'bulletinTitle',
      title: 'Ugeseddel Titel',
      type: 'string',
      description: 'F.eks. "Ugeseddel for uge 52, 2025"',
    }),
    defineField({
      name: 'publishedDate',
      title: 'Udgivelsesdato',
      type: 'date',
      description: 'Dato for denne ugeseddel',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
      rows: 3,
      description: 'Kort beskrivelse af indholdet (vises under titlen)',
    }),
  ],
  preview: {
    select: {
      title: 'bulletinTitle',
      subtitle: 'publishedDate',
    },
  },
})
