import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'restaurant name',
      type: 'string',
      validation:(Rule) =>Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'short_description ',
      type: 'string',
      validation:(Rule) =>Rule.max(200),
    }),
    defineField({
      name: 'adress',
      title: 'adress ',
      type: 'string',
      validation:(Rule) =>Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'image ',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'lat ',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'long',
      type: 'number',
    }),
    defineField({
      name: 'rating',
      title: 'rating ',
      type: 'number',
      validation:(Rule) =>Rule.max(5).min(1).error("donnez une note de 1 a 5"),
    }),
    defineField({
      name: 'category',
      title: 'category ',
      type: 'reference',to:[{type:"category"}],
      validation:(Rule) =>Rule.required(),
    }),
    defineField({
      name: 'dishes',
      title: 'dishes ',
      type: 'reference',to:[{type:"dish"}],
    }),
  ],


})
