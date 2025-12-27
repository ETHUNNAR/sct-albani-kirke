import {defineField, defineType} from 'sanity'

export const kommunikanterPage = defineType({
  name: 'kommunikanterPage',
  title: '1. Kommunikanter Side',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      initialValue: '1. Kommunikanter',
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
      description: 'Hovedbeskrivelse af 1. Kommunikanter programmet',
    }),
    defineField({
      name: 'aboutTitle',
      title: 'Om Kommunikanter Titel',
      type: 'string',
      initialValue: 'Om 1. Kommunikanter',
      description: 'Overskrift for informations sektion',
    }),
    defineField({
      name: 'aboutText',
      title: 'Om Kommunikanter Tekst',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Detaljeret tekst om 1. Kommunikanter',
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
      description: 'Krav for at deltage i 1. Kommunikanter',
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
