import {defineField, defineType} from 'sanity'

export const newsPost = defineType({
  name: 'newsPost',
  title: 'Nyheder',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: 'Bruges i URL (klik "Generate" for at oprette automatisk)',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Udgivelsesdato',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
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
      validation: (Rule) => Rule.required(),
      initialValue: 'news',
    }),
    defineField({
      name: 'excerpt',
      title: 'Kort beskrivelse',
      type: 'text',
      rows: 3,
      description: 'Kort beskrivelse der vises i nyhedsoversigten',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'featuredImage',
      title: 'Fremhævet billede',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternativ tekst',
          description: 'Beskrivelse af billedet for tilgængelighed',
        },
      ],
    }),
    defineField({
      name: 'content',
      title: 'Indhold',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Punktopstilling', value: 'bullet'},
            {title: 'Nummereret', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Fed', value: 'strong'},
              {title: 'Kursiv', value: 'em'},
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternativ tekst',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Billedtekst',
            },
          ],
        },
        {
          type: 'file',
          name: 'pdfFile',
          title: 'PDF-fil',
          options: {
            accept: '.pdf',
          },
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Titel',
              description: 'Navn på PDF-filen (vises som linktekst)',
            },
            {
              name: 'description',
              type: 'string',
              title: 'Beskrivelse',
              description: 'Kort beskrivelse af PDF-filens indhold',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Fremhævet på forsiden',
      type: 'boolean',
      description: 'Vises denne nyhed fremhævet på forsiden?',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'publishedAt',
      media: 'featuredImage',
      category: 'category',
    },
    prepare({title, date, media, category}) {
      const categoryLabels: Record<string, string> = {
        news: 'Nyhed',
        event: 'Begivenhed',
        announcement: 'Meddelelse',
      }
      return {
        title: title,
        subtitle: `${categoryLabels[category] || category} - ${new Date(date).toLocaleDateString('da-DK')}`,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: 'Udgivelsesdato, nyeste først',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
    {
      title: 'Udgivelsesdato, ældste først',
      name: 'publishedAtAsc',
      by: [{field: 'publishedAt', direction: 'asc'}],
    },
  ],
})
