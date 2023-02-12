import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom de plat',
      type: 'string',
      validation:(Rule) =>Rule.required(),


    }),
    defineField({
      name: 'price',
      title: 'prix',
      type: 'string',
      validation:(Rule) =>Rule.required(),


    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'description',
      type: 'string',
    }),
    
  ],
 
})
