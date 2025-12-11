import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Website Indstillinger',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Website Titel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Website Beskrivelse',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Titel',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Undertitel',
      type: 'string',
    }),
    defineField({
      name: 'heroTagline',
      title: 'Hero Tagline',
      type: 'string',
      description: 'F.eks. "Christus Vincit! Christus Regnat! Christus Imperat!"',
    }),
    defineField({
      name: 'aboutText',
      title: 'Om Os Tekst',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'contactEmail',
      title: 'Kontakt Email',
      type: 'string',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Kontakt Telefon',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Adresse',
      type: 'text',
      rows: 3,
    }),
  ],
})
