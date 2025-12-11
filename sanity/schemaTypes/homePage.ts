import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Forside',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroTitle',
      title: 'Hero Titel',
      type: 'string',
      initialValue: 'Sct. Albani Kirke',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Undertitel',
      type: 'string',
      initialValue: 'Den katolske kirke i Odense',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Baggrundsbillede',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    // About Section
    defineField({
      name: 'aboutTitle',
      title: 'Om Os Titel',
      type: 'string',
      initialValue: 'Velkommen til Sct. Albani Kirke',
    }),
    defineField({
      name: 'aboutText',
      title: 'Om Os Tekst',
      type: 'text',
      rows: 4,
      initialValue:
        'Sct. Albani Kirke er den katolske sognekirke i Odense. Vi er et levende fællesskab af mennesker fra mange forskellige nationer, der forenes i troen på Jesus Kristus. Uanset hvem du er, og hvor du kommer fra, er du velkommen her.',
    }),

    // Service Times Section
    defineField({
      name: 'serviceTimes',
      title: 'Messetider',
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
              name: 'time',
              title: 'Tidspunkt',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              description: 'F.eks. "Højmesse", "Aftenmesse"',
            },
            {
              name: 'language',
              title: 'Sprog',
              type: 'string',
              description: 'F.eks. "Dansk", "Engelsk"',
            },
            {
              name: 'order',
              title: 'Rækkefølge',
              type: 'number',
              description: 'Bruges til sortering',
            },
          ],
          preview: {
            select: {
              day: 'day',
              time: 'time',
              type: 'type',
            },
            prepare({day, time, type}) {
              return {
                title: `${day} - ${time}`,
                subtitle: type,
              }
            },
          },
        },
      ],
    }),

    // News/Announcements Section
    defineField({
      name: 'newsItems',
      title: 'Nyheder',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Titel',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'date',
              title: 'Dato',
              type: 'datetime',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'excerpt',
              title: 'Uddrag',
              type: 'text',
              rows: 3,
              description: 'Kort beskrivelse (vises på forsiden)',
            },
            {
              name: 'content',
              title: 'Indhold',
              type: 'array',
              of: [{type: 'block'}],
              description: 'Fuldt indhold af nyheden',
            },
            {
              name: 'image',
              title: 'Billede',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'category',
              title: 'Kategori',
              type: 'string',
              options: {
                list: [
                  {title: 'Nyhed', value: 'news'},
                  {title: 'Begivenhed', value: 'event'},
                  {title: 'Meddelelse', value: 'announcement'},
                ],
              },
            },
          ],
          preview: {
            select: {
              title: 'title',
              date: 'date',
              media: 'image',
            },
            prepare({title, date, media}) {
              return {
                title: title,
                subtitle: new Date(date).toLocaleDateString('da-DK'),
                media: media,
              }
            },
          },
        },
      ],
    }),

    // Weekly Program Section
    defineField({
      name: 'weeklyProgram',
      title: 'Ugens Program',
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
              name: 'time',
              title: 'Tidspunkt',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'event',
              title: 'Begivenhed',
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
              day: 'day',
              time: 'time',
              event: 'event',
            },
            prepare({day, time, event}) {
              return {
                title: `${day} ${time}`,
                subtitle: event,
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heroTitle',
      subtitle: 'heroSubtitle',
    },
  },
})
