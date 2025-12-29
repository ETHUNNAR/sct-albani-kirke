import {defineField, defineType} from 'sanity'

export const bibelgruppePage = defineType({
  name: 'bibelgruppePage',
  title: 'Bibelgruppe Side',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      initialValue: 'Bibelgruppe',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Undertitel',
      type: 'string',
      description: 'F.eks. "Bibelgruppe 2025"',
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
      description: 'Tekst indhold som vises øverst',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featureImage',
      title: 'Feature Billede',
      type: 'image',
      description: 'Stor billede som vises under teksten',
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
