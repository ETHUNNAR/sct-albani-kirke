import {defineField, defineType} from 'sanity'

export const serviceTime = defineType({
  name: 'serviceTime',
  title: 'Messetider',
  type: 'document',
  fields: [
    defineField({
      name: 'day',
      title: 'Dag',
      type: 'string',
      description: 'F.eks. "Søndag", "Mandag"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Tidspunkt',
      type: 'string',
      description: 'F.eks. "09:00", "18:00"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      description: 'F.eks. "Højtidelig Messe", "Aftenmesse"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'language',
      title: 'Sprog',
      type: 'string',
      description: 'F.eks. "Latin", "Dansk", "Polsk"',
      options: {
        list: [
          {title: 'Latin', value: 'Latin'},
          {title: 'Dansk', value: 'Dansk'},
          {title: 'Polsk', value: 'Polsk'},
          {title: 'Engelsk', value: 'Engelsk'},
          {title: 'Andet', value: 'Andet'},
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Rækkefølge',
      type: 'number',
      description: 'Brug til at sortere messetiderne',
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
  orderings: [
    {
      title: 'Rækkefølge',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})
