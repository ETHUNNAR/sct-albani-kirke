import {defineField, defineType} from 'sanity'

export const familiegruppenPage = defineType({
  name: 'familiegruppenPage',
  title: 'Familiegruppen Side',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      initialValue: 'Familiegruppen',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Undertitel',
      type: 'string',
      description: 'F.eks. "Familie-lørdage 2025/2026"',
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
      title: 'Beskrivelse',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Tekst indhold som vises på venstre side',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featureImage',
      title: 'Feature Billede',
      type: 'image',
      description: 'Billede som vises på højre side',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactTitle',
      title: 'Kontakt Titel',
      type: 'string',
      initialValue: 'Kontakt',
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
  ],
})
