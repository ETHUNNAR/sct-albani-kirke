import {defineField, defineType} from 'sanity'

export const firmanderPage = defineType({
  name: 'firmanderPage',
  title: 'Firmander Side',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      initialValue: 'Firmander',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Undertitel',
      type: 'string',
      description: 'F.eks. "En vigtig milepæl i dit kristne liv"',
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
      description: 'Hovedbeskrivelse af Firmander programmet',
    }),
    defineField({
      name: 'aboutTitle',
      title: 'Om Firmander Titel',
      type: 'string',
      initialValue: 'Om Firmander',
      description: 'Overskrift for informations sektion',
    }),
    defineField({
      name: 'aboutText',
      title: 'Om Firmander Tekst',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Detaljeret tekst om Firmander',
    }),
    defineField({
      name: 'requirementsTitle',
      title: 'Krav og Forudsætninger Titel',
      type: 'string',
      initialValue: 'Krav og Forudsætninger',
    }),
    defineField({
      name: 'requirements',
      title: 'Krav og Forudsætninger',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Krav for at deltage i Firmander',
    }),
    defineField({
      name: 'contactTitle',
      title: 'Kontakt Titel',
      type: 'string',
      initialValue: 'Kontakt og Spørgsmål',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Kontakt Email',
      type: 'string',
      description: 'Email adresse for kontaktperson',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Kontakt Telefon',
      type: 'string',
      description: 'Telefon nummer',
    }),
    defineField({
      name: 'contactPerson',
      title: 'Kontaktperson Navn',
      type: 'string',
      description: 'Navn på kontaktperson',
    }),
    defineField({
      name: 'downloadTitle',
      title: 'Downloads Titel',
      type: 'string',
      initialValue: 'Vigtige Dokumenter',
    }),
    defineField({
      name: 'downloads',
      title: 'Downloadbare Dokumenter',
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
              description: 'F.eks. "Tidsplan"',
            },
            {
              name: 'url',
              title: 'Download Link',
              type: 'url',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Beskrivelse',
              type: 'string',
              description: 'Kort beskrivelse af dokumentet',
            },
          ],
          preview: {
            select: {
              name: 'name',
              description: 'description',
            },
            prepare({name, description}) {
              return {
                title: name,
                subtitle: description,
              }
            },
          },
        },
      ],
      description: 'Downloadbare dokumenter og ressourcer',
    }),
  ],
})
