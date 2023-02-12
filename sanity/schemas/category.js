import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'menu Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'category name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'image',
      type: 'image',
    }),
  ],
})
