import {defineField, defineType} from 'sanity'

export const ministranterPage = defineType({
  name: 'ministranterPage',
  title: 'Ministranter Side',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      initialValue: 'Ministranter',
      validation: (Rule) => Rule.required(),
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
      description: 'Hovedbeskrivelse af Ministranter programmet',
    }),
    defineField({
      name: 'contactTitle',
      title: 'Kontakt Titel',
      type: 'string',
      initialValue: 'Kontakt og Spørgsmål',
    }),
    defineField({
      name: 'contact1',
      title: 'Første Kontakt Person',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Sektion Titel',
          type: 'string',
          description: 'F.eks. "Højmessen og Aftenmessen"',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
          description: 'Email adresse for denne kontaktperson',
        },
        {
          name: 'phone',
          title: 'Telefon',
          type: 'string',
          description: 'Telefon nummer',
        },
        {
          name: 'person',
          title: 'Navn',
          type: 'string',
          description: 'Navn på kontaktperson',
          validation: (Rule) => Rule.required(),
        },
      ],
      preview: {
        select: {
          title: 'sectionTitle',
          subtitle: 'person',
        },
        prepare({title, subtitle}) {
          return {
            title: title,
            subtitle: subtitle,
          }
        },
      },
    }),
    defineField({
      name: 'contact2',
      title: 'Anden Kontakt Person',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Sektion Titel',
          type: 'string',
          description: 'F.eks. "Messe på vietnamesisk"',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
          description: 'Email adresse for denne kontaktperson',
        },
        {
          name: 'phone',
          title: 'Telefon',
          type: 'string',
          description: 'Telefon nummer',
        },
        {
          name: 'person',
          title: 'Navn',
          type: 'string',
          description: 'Navn på kontaktperson',
          validation: (Rule) => Rule.required(),
        },
      ],
      preview: {
        select: {
          title: 'sectionTitle',
          subtitle: 'person',
        },
        prepare({title, subtitle}) {
          return {
            title: title,
            subtitle: subtitle,
          }
        },
      },
    }),
  ],
})
