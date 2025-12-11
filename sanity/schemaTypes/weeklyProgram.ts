import {defineField, defineType} from 'sanity'

export const weeklyProgram = defineType({
  name: 'weeklyProgram',
  title: 'Ugens Program',
  type: 'document',
  fields: [
    defineField({
      name: 'week',
      title: 'Uge nummer',
      type: 'number',
      description: 'Uge nummer (f.eks. 45)',
      validation: (Rule) => Rule.required().min(1).max(53),
    }),
    defineField({
      name: 'year',
      title: 'År',
      type: 'number',
      description: 'År (f.eks. 2025)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      description: 'F.eks. "Ugens Program - Uge 45"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'events',
      title: 'Begivenheder',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'day',
              title: 'Dag',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'date',
              title: 'Dato',
              type: 'date',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'time',
              title: 'Tidspunkt',
              type: 'string',
              description: 'F.eks. "18:00"',
            },
            {
              name: 'title',
              title: 'Titel',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Beskrivelse',
              type: 'text',
              rows: 2,
            },
            {
              name: 'location',
              title: 'Sted',
              type: 'string',
            },
          ],
          preview: {
            select: {
              title: 'title',
              day: 'day',
              time: 'time',
            },
            prepare({title, day, time}) {
              return {
                title: title,
                subtitle: `${day}${time ? ` - ${time}` : ''}`,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'isActive',
      title: 'Aktiv',
      type: 'boolean',
      description: 'Vis denne uge på hjemmesiden',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      week: 'week',
      year: 'year',
    },
    prepare({title, week, year}) {
      return {
        title: title || `Uge ${week}, ${year}`,
        subtitle: `${year}`,
      }
    },
  },
})
