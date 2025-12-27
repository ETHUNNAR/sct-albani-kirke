import {defineField, defineType} from 'sanity'

export const besoesgruppenPage = defineType({
  name: 'besoesgruppenPage',
  title: 'Besøgsgruppen Side',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      initialValue: 'Besøgsgruppen',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Undertitel',
      type: 'string',
      description: 'F.eks. "En gruppe for vores menighed"',
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
      name: 'aboutTitle',
      title: 'Om Os Titel',
      type: 'string',
      initialValue: 'Om Besøgsgruppen',
      description: 'Overskrift for informations sektion',
    }),
    defineField({
      name: 'aboutText',
      title: 'Om Os Tekst',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Introduktionstekst om Besøgsgruppen',
    }),
    defineField({
      name: 'objectives',
      title: 'Målsætninger',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Målsætning',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              text: 'text',
            },
            prepare({text}) {
              return {
                title: text,
              }
            },
          },
        },
      ],
      description: 'Liste over gruppens målsætninger',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Kontakt Email',
      type: 'string',
      description: 'Email adresse for gruppens kontaktperson',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Kontakt Telefon',
      type: 'string',
      description: 'Telefon nummer for gruppens kontaktperson',
    }),
    defineField({
      name: 'contactPerson',
      title: 'Kontaktperson',
      type: 'string',
      description: 'Navn på gruppens kontaktperson',
    }),
  ],
})
