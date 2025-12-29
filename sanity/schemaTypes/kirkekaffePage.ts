import {defineField, defineType} from 'sanity'

export const kirkekaffePage = defineType({
  name: 'kirkekaffePage',
  title: 'Kirkekaffe Side',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      initialValue: 'Kirkekaffe',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Undertitel',
      type: 'string',
      description: 'F.eks. "Kirkekaffe kl. 11 efterår 2025"',
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
      name: 'featureImage',
      title: 'Feature Billede',
      type: 'image',
      description: 'Stor billede som vises under hero',
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
