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
              name: 'recurring',
              title: 'Gentages Ugentligt',
              type: 'boolean',
              description: 'Marker denne hvis messen/begivenheden gentages hver uge på samme dag og tidspunkt',
              initialValue: false,
            },
            {
              name: 'datetime',
              title: 'Dato og Tidspunkt',
              type: 'datetime',
              validation: (Rule) => Rule.required(),
              options: {
                dateFormat: 'DD-MM-YYYY',
                timeFormat: 'HH:mm',
              },
              description: 'For ugentlige begivenheder: vælg den første dato. For engangsbegivenheder: vælg den specifikke dato.',
            },
            {
              name: 'massType',
              title: 'Messe Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Søndagsmesse', value: 'Søndagsmesse' },
                  { title: 'Højtidsmesse', value: 'Højtidsmesse' },
                  { title: 'Højmesse', value: 'Højmesse' },
                  { title: 'Aftenmesse', value: 'Aftenmesse' },
                  { title: 'Rosenkrans', value: 'Rosenkrans' },
                  { title: 'Tilbedelse', value: 'Tilbedelse' },
                  { title: 'Andet', value: 'Andet' },
                ],
              },
              description: 'Vælg messe type',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'language',
              title: 'Sprog',
              type: 'string',
              options: {
                list: [
                  { title: 'Dansk', value: 'Dansk' },
                  { title: 'Polsk', value: 'Polsk' },
                  { title: 'Vietnamesisk', value: 'Vietnamesisk' },
                  { title: 'Engelsk', value: 'Engelsk' },
                ],
              },
              description: 'Vælg sprog',
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
              datetime: 'datetime',
              massType: 'massType',
              language: 'language',
              recurring: 'recurring',
            },
            prepare({datetime, massType, language, recurring}) {
              const date = new Date(datetime);
              const formattedDate = date.toLocaleDateString('da-DK', {
                weekday: 'short',
                day: 'numeric',
                month: 'short',
              });
              const formattedTime = date.toLocaleTimeString('da-DK', {
                hour: '2-digit',
                minute: '2-digit',
              });
              const recurringLabel = recurring ? ' 🔄 (Ugentlig)' : '';
              return {
                title: `${formattedDate} ${formattedTime}${recurringLabel}`,
                subtitle: `${massType}${language ? ` (${language})` : ''}`,
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
