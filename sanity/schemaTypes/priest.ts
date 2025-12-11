import {defineField, defineType} from 'sanity'

export const priest = defineType({
  name: 'priest',
  title: 'Præster',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Navn',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      description: 'F.eks. "Sognepræst", "Kapellan"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true, // Allows cropping
      },
    }),
    defineField({
      name: 'bio',
      title: 'Biografi',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Telefon',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Rækkefølge',
      type: 'number',
      description: 'Brug til at sortere præsterne',
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'photo',
    },
  },
})
